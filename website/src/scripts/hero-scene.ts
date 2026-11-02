/**
 * Hero visual: thousands of particles start as a noisy cloud (unstructured generated output)
 * and, as the reader scrolls, self-organize into parallel flowing streams (a reliable delivery system).
 * Pure three.js + a small custom shader; lazy-loaded and paused when off-screen.
 */
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uProgress;
  uniform float uPixelRatio;
  uniform vec2 uPointer;
  attribute vec3 aChaos;
  attribute vec3 aFlow;
  attribute float aRand;
  attribute float aLane;
  varying float vRand;
  varying float vLane;
  varying float vMix;

  // cheap hash-based wobble
  vec3 wobble(vec3 p, float t, float r) {
    return vec3(
      sin(t * 0.7 + r * 40.0 + p.y) * 0.18,
      cos(t * 0.6 + r * 23.0 + p.x) * 0.18,
      sin(t * 0.5 + r * 11.0) * 0.18
    );
  }

  void main() {
    float delay = aRand * 0.45;
    float m = smoothstep(delay, delay + 0.55, uProgress);
    m = m * m * (3.0 - 2.0 * m);

    // chaos state drifts slowly
    vec3 chaos = aChaos + wobble(aChaos, uTime, aRand) * 2.0;

    // flow state: particles travel along x inside their lane
    vec3 flow = aFlow;
    float span = 16.0;
    flow.x = mod(aFlow.x + uTime * (0.35 + aRand * 0.5) + span * 0.5, span) - span * 0.5;
    float phase = flow.x * 0.55 + aLane * 1.3 + uTime * 0.25;
    flow.y += sin(phase) * 0.55;
    flow.z += cos(phase * 0.8) * 0.9;

    vec3 pos = mix(chaos, flow, m);

    // pointer repulsion in the xy plane
    vec2 d = pos.xy - uPointer * vec2(6.0, 3.5);
    float dist = length(d);
    pos.xy += normalize(d + 0.0001) * smoothstep(1.6, 0.0, dist) * 0.6;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    float size = mix(3.0, 4.6, aRand) * mix(1.0, 1.2, m);
    gl_PointSize = size * uPixelRatio * (9.0 / -mv.z);
    vRand = aRand;
    vLane = aLane;
    vMix = m;
  }
`;

const fragment = /* glsl */ `
  uniform vec3 uA;
  uniform vec3 uB;
  uniform vec3 uC;
  varying float vRand;
  varying float vLane;
  varying float vMix;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);
    vec3 chaosColor = mix(uA, vec3(0.75), vRand * 0.5);
    float lane = vLane / 6.0;
    vec3 flowColor = lane < 0.5 ? mix(uA, uB, lane * 2.0) : mix(uB, uC, (lane - 0.5) * 2.0);
    vec3 col = mix(chaosColor, flowColor, vMix);
    gl_FragColor = vec4(col, alpha * mix(0.6, 0.95, vMix));
  }
`;

export function mountHero(canvas: HTMLCanvasElement, trigger: HTMLElement) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = window.innerWidth < 768;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' });
  const dpr = Math.min(window.devicePixelRatio, 1.75);
  renderer.setPixelRatio(dpr);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 10);

  const COUNT = small ? 5000 : 12000;
  const LANES = 7;
  const chaos = new Float32Array(COUNT * 3);
  const flow = new Float32Array(COUNT * 3);
  const rand = new Float32Array(COUNT);
  const lane = new Float32Array(COUNT);

  for (let i = 0; i < COUNT; i++) {
    // chaos: clumpy sphere
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = 4.2 * Math.cbrt(Math.random()) * (0.6 + Math.random() * 0.4);
    chaos[i * 3] = r * Math.sin(phi) * Math.cos(theta) * 1.5;
    chaos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.9;
    chaos[i * 3 + 2] = r * Math.cos(phi);

    // flow: parallel lanes
    const l = Math.floor(Math.random() * LANES);
    lane[i] = l;
    flow[i * 3] = (Math.random() - 0.5) * 16;
    flow[i * 3 + 1] = (l - (LANES - 1) / 2) * 0.55 + (Math.random() - 0.5) * 0.18;
    flow[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    rand[i] = Math.random();
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(chaos, 3));
  geometry.setAttribute('aChaos', new THREE.BufferAttribute(chaos, 3));
  geometry.setAttribute('aFlow', new THREE.BufferAttribute(flow, 3));
  geometry.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));
  geometry.setAttribute('aLane', new THREE.BufferAttribute(lane, 1));

  const uniforms = {
    uTime: { value: 0 },
    uProgress: { value: reduce ? 0.85 : 0 },
    uPixelRatio: { value: dpr },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uA: { value: new THREE.Color('#a78bfa') },
    uB: { value: new THREE.Color('#22d3ee') },
    uC: { value: new THREE.Color('#fbbf24') },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geometry, material);
  points.rotation.x = -0.12;
  scene.add(points);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.position.z = w < 768 ? 13 : 10;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  const pointer = { x: 0, y: 0 };
  const onMove = (e: PointerEvent) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  // intro: a first hint of order, then scroll completes the organization
  const state = { intro: 0, scroll: 0 };
  if (!reduce) {
    gsap.to(state, { intro: 0.22, duration: 3.2, ease: 'power2.inOut', delay: 0.4 });
    ScrollTrigger.create({
      trigger,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
      onUpdate: (self) => (state.scroll = self.progress),
    });
  }

  let visible = true;
  const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
  io.observe(canvas);

  const t0 = performance.now();
  const tick = () => {
    if (visible && !document.hidden) {
      const t = (performance.now() - t0) / 1000;
      uniforms.uTime.value = t;
      if (!reduce) uniforms.uProgress.value = Math.min(1, state.intro + state.scroll * 1.1);
      uniforms.uPointer.value.lerp(new THREE.Vector2(pointer.x, pointer.y), 0.06);
      points.rotation.y = THREE.MathUtils.lerp(points.rotation.y, pointer.x * 0.18, 0.04);
      points.rotation.x = THREE.MathUtils.lerp(points.rotation.x, -0.12 + pointer.y * 0.08, 0.04);
      renderer.render(scene, camera);
    }
  };
  if (reduce) {
    renderer.render(scene, camera);
  } else {
    renderer.setAnimationLoop(tick);
  }

  canvas.classList.add('is-ready');

  return () => {
    renderer.setAnimationLoop(null);
    ro.disconnect();
    io.disconnect();
    window.removeEventListener('pointermove', onMove);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
