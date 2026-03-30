"use strict";

/* ============================
   LIBRARIES (Finsweet & Motion One)
   ============================ */
// Finsweet Attributes (Modal) & Motion One logic are loaded here
(function () { var qe = Object.create; var ie = Object.defineProperty; var Ge = Object.getOwnPropertyDescriptor; var Xe = Object.getOwnPropertyNames; var We = Object.getPrototypeOf, ze = Object.prototype.hasOwnProperty; var Ze = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports); var Qe = (r, e, t, n) => { if (e && typeof e == "object" || typeof e == "function") for (let o of Xe(e)) !ze.call(r, o) && o !== t && ie(r, o, { get: () => e[o], enumerable: !(n = Ge(e, o)) || n.enumerable }); return r }; var Je = (r, e, t) => (t = r != null ? qe(We(r)) : {}, Qe(e || !r || !r.__esModule ? ie(t, "default", { value: r, enumerable: !0 }) : t, r)); var Ke = Ze((xr, Be) => { Be.exports = wt; function wt(r, e, t, n) { var o, a, i; return function () { if (i = this, a = Array.prototype.slice.call(arguments), o && (t || n)) return; if (!t) return d(), o = setTimeout(f, e), o; o = setTimeout(d, e), r.apply(i, a); function f() { d(), r.apply(i, a) } function d() { clearTimeout(o), o = null } } } }); var I = "fs-attributes"; var B = "a11y", ae = "accordion"; var se = "cmsattribute"; var ce = "inputcounter"; var ue = "modal"; var $ = "support"; var le = async (...r) => { var t; let e = []; for (let n of r) { let o = await ((t = window.fsAttributes[n]) == null ? void 0 : t.loading); e.push(o) } return e }; var w = () => { }; function V(r, e, t, n) { return r ? (r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n)) : w } var j = r => r instanceof Element; var q = r => r != null; var K = r => typeof r == "string"; var G = (r, e) => (Array.isArray(e) || (e = [e]), e.map(n => r.dispatchEvent(new Event(n, { bubbles: !0 }))).every(n => n)); var X = r => !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length); function fe(r, e, t) { var o; let n = window.fsAttributes[r]; return n.destroy = t || w, (o = n.resolve) == null || o.call(n, e), e } var de = (r, e = "1", t = "iife") => { let o = `${r}${t === "esm" ? "esm" : ""}.js`; return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${r}@${e}/${o}` }; var et = `${I}-${$}`, be = async () => { var o; let { fsAttributes: r, location: e } = window, { host: t, searchParams: n } = new URL(e.href); return !t.includes("webflow.io") || !n.has(et) ? !1 : (o = r.import) == null ? void 0 : o.call(r, $, "1") }; var pe = r => { let e = (o, a, i) => { let l = r[o], { key: f, values: d } = l, E; if (!a) return `[${f}]`; let A = d == null ? void 0 : d[a]; K(A) ? E = A : E = A(i && "instanceIndex" in i ? i.instanceIndex : void 0); let y = i && "caseInsensitive" in i && i.caseInsensitive ? "i" : ""; if (!(i != null && i.operator)) return `[${f}="${E}"${y}]`; switch (i.operator) { case "prefixed": return `[${f}^="${E}"${y}]`; case "suffixed": return `[${f}$="${E}"${y}]`; case "contains": return `[${f}*="${E}"${y}]` } }; function t(o, a) { let i = e("element", o, a), l = (a == null ? void 0 : a.scope) || document; return a != null && a.all ? [...l.querySelectorAll(i)] : l.querySelector(i) } return [e, t, (o, a) => { let i = r[a]; return i ? o.getAttribute(i.key) : null }] }; var _ = { preventLoad: { key: `${I}-preventload` }, debugMode: { key: `${I}-debug` }, src: { key: "src", values: { finsweet: "@finsweet/attributes" } }, dev: { key: `${I}-dev` } }, [W, cr] = pe(_); var me = r => { let { currentScript: e } = document, t = {}; if (!e) return { attributes: t, preventsLoad: !1 }; let o = { preventsLoad: K(e.getAttribute(_.preventLoad.key)), attributes: t }; for (let a in r) { let i = e.getAttribute(r[a]); o.attributes[a] = i } return o }; var Te = ({ scriptAttributes: r, attributeKey: e, version: t, init: n }) => { var l; tt(), (l = window.fsAttributes)[e] || (l[e] = {}); let { preventsLoad: o, attributes: a } = me(r), i = window.fsAttributes[e]; i.version = t, i.init = n, o || (window.Webflow || (window.Webflow = []), window.Webflow.push(() => n(a))) }, tt = () => { let r = nt(); if (window.fsAttributes && !Array.isArray(window.fsAttributes)) { z(window.fsAttributes, r); return } let e = rt(r); z(e, r), ot(e), window.fsAttributes = e, window.FsAttributes = window.fsAttributes, be() }, rt = r => { let e = { cms: {}, push(...t) { var n, o; for (let [a, i] of t) (o = (n = this[a]) == null ? void 0 : n.loading) == null || o.then(i) }, async import(t, n) { let o = e[t]; return o || new Promise(a => { let i = document.createElement("script"); i.src = de(t, n), i.async = !0, i.onload = () => { let [l] = z(e, [t]); a(l) }, document.head.append(i) }) }, destroy() { var t, n; for (let o of r) (n = (t = window.fsAttributes[o]) == null ? void 0 : t.destroy) == null || n.call(t) } }; return e }, nt = () => { let r = W("src", "finsweet", { operator: "contains" }), e = W("dev"); return [...document.querySelectorAll(`script${r}, script${e}`)].reduce((o, a) => { var l; let i = a.getAttribute(_.dev.key) || ((l = a.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : l[0]); return i && !o.includes(i) && o.push(i), o }, []) }, z = (r, e) => e.map(n => { let o = r[n]; return o || (r[n] = {}, o = r[n], o.loading = new Promise(a => { o.resolve = i => { a(i), delete o.resolve } }), o) }), ot = r => { let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : []; r.push(...e) }; })();

/* ============================
   PROJECT MODAL POPULATION
   ============================ */
document.querySelectorAll('[fs-modal-element="open"]').forEach(card => {
  card.addEventListener('click', (e) => {
    // If clicking a link within the card, don't open the modal
    if (e.target.closest('a')) return;

    const title = card.querySelector('.project-title').textContent;
    const desc = card.querySelector('.project-desc').textContent;
    const img = card.querySelector('.project-img').src;
    const tags = card.querySelector('.project-tags').innerHTML;
    const repoLink = card.querySelector('a')?.href || "https://github.com/vivekmenon2004";

    document.getElementById('modal-project-title').textContent = title;
    document.getElementById('modal-project-desc').textContent = desc;
    document.getElementById('modal-project-img').src = img;
    document.getElementById('modal-project-tags').innerHTML = tags;
    document.getElementById('modal-project-link').href = repoLink;
  });
});

/* ============================
   WEBGL FLUID SIMULATION
   ============================ */
(function initFluidSimulation() {
  const canvas = document.getElementById('fluid-canvas');
  if (!canvas) return;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const params = {
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1024,
    DENSITY_DISSIPATION: 0.98,
    VELOCITY_DISSIPATION: 0.98,
    PRESSURE_DISSIPATION: 0.8,
    PRESSURE_ITERATIONS: 24,
    CURL: 20,
    SPLAT_RADIUS: 0.05, // Ultra-Fine needle-thin flow
    SHADING: true,
    COLORFUL: false,
    PAUSED: false,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: false,
  };

  function PointerPrototype() {
    this.id = -1;
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;
    this.down = false;
    this.moved = false;
    this.color = [30, 0, 300];
  }

  let pointers = [new PointerPrototype()];
  let velocity, divergence, pressure, dye;

  try {
    const result = getWebGLContext(canvas);
    if (!result) throw new Error("WebGL Context Failure");
    const { gl, ext } = result;

    function getWebGLContext(canvas) {
      const glParams = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };
      let gl = canvas.getContext('webgl2', glParams);
      const isWebGL2 = !!gl;
      if (!isWebGL2) gl = canvas.getContext('webgl', glParams) || canvas.getContext('experimental-webgl', glParams);
      if (!gl) return null;

      let halfFloat;
      let supportLinearFiltering;
      if (isWebGL2) {
        gl.getExtension('EXT_color_buffer_float');
        supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
      } else {
        halfFloat = gl.getExtension('OES_texture_half_float');
        supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
      }

      gl.clearColor(0.0, 0.0, 0.0, 1.0);

      const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : (halfFloat ? halfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE);
      let formatRGBA = getSupportedFormat(gl, isWebGL2 ? gl.RGBA16F : gl.RGBA, gl.RGBA, halfFloatTexType);
      let formatRG = getSupportedFormat(gl, isWebGL2 ? gl.RG16F : gl.RGBA, isWebGL2 ? gl.RG : gl.RGBA, halfFloatTexType);
      let formatR = getSupportedFormat(gl, isWebGL2 ? gl.R16F : gl.RGBA, isWebGL2 ? gl.RED : gl.RGBA, halfFloatTexType);

      return { gl, ext: { formatRGBA, formatRG, formatR, halfFloatTexType, supportLinearFiltering } };
    }

    function getSupportedFormat(gl, internalFormat, format, type) {
      if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
        switch (internalFormat) {
          case gl.R16F: return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
          case gl.RG16F: return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
          default: return null;
        }
      }
      return { internalFormat, format };
    }

    function supportRenderTextureFormat(gl, internalFormat, format, type) {
      let texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
      let fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      return gl.checkFramebufferStatus(gl.FRAMEBUFFER) == gl.FRAMEBUFFER_COMPLETE;
    }

    function compileShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(shader));
      return shader;
    }

    function createProgram(vertexShader, fragmentShader) {
      let program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.error(gl.getProgramInfoLog(program));
      return program;
    }

    function getUniforms(program) {
      let uniforms = [];
      let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < uniformCount; i++) {
        let name = gl.getActiveUniform(program, i).name;
        uniforms[name] = gl.getUniformLocation(program, name);
      }
      return uniforms;
    }

    class Program {
      constructor(vertexShader, fragmentShader) {
        this.program = createProgram(vertexShader, fragmentShader);
        this.uniforms = getUniforms(this.program);
      }
      bind() { gl.useProgram(this.program); }
    }

    const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;
        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `);

    const splatShader = new Program(baseVertexShader, compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspect;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;
        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspect;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
    `));

    const divergenceShader = new Program(baseVertexShader, compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;
            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
    `));

    const pressureShader = new Program(baseVertexShader, compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;
        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float div = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - div) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
    `));

    const gradientSubtractShader = new Program(baseVertexShader, compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;
        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 vel = texture2D(uVelocity, vUv).xy;
            vel.xy -= vec2(R - L, T - B) * 0.5;
            gl_FragColor = vec4(vel, 0.0, 1.0);
        }
    `));

    const advectionShader = new Program(baseVertexShader, compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform float dt;
        uniform float dissipation;
        void main () {
            vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
            gl_FragColor = dissipation * texture2D(uSource, coord);
        }
    `));

    const displayShader = new Program(baseVertexShader, compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTexture;
        void main () {
            vec3 c = texture2D(uTexture, vUv).rgb;
            float a = max(c.r, max(c.g, c.b));
            gl_FragColor = vec4(c, a);
        }
    `));

    function createFBO(w, h, internalFormat, format, type, param) {
      gl.activeTexture(gl.TEXTURE0);
      let texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
      let fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      return { texture, fbo, width: w, height: h, texelSizeX: 1.0 / w, texelSizeY: 1.0 / h, attach(id) { gl.activeTexture(gl.TEXTURE0 + id); gl.bindTexture(gl.TEXTURE_2D, texture); return id; } };
    }

    function createDoubleFBO(w, h, internalFormat, format, type, param) {
      let fbo1 = createFBO(w, h, internalFormat, format, type, param);
      let fbo2 = createFBO(w, h, internalFormat, format, type, param);
      return { width: w, height: h, texelSizeX: fbo1.texelSizeX, texelSizeY: fbo1.texelSizeY, get read() { return fbo1; }, set read(v) { fbo1 = v; }, get write() { return fbo2; }, set write(v) { fbo2 = v; }, swap() { let t = fbo1; fbo1 = fbo2; fbo2 = t; } };
    }

    function initFramebuffers() {
      let simRes = getResolution(params.SIM_RESOLUTION);
      let dyeRes = getResolution(params.DYE_RESOLUTION);
      const texType = ext.halfFloatTexType;
      velocity = createDoubleFBO(simRes.width, simRes.height, ext.formatRG.internalFormat, ext.formatRG.format, texType, ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST);
      divergence = createFBO(simRes.width, simRes.height, ext.formatR.internalFormat, ext.formatR.format, texType, gl.NEAREST);
      pressure = createDoubleFBO(simRes.width, simRes.height, ext.formatR.internalFormat, ext.formatR.format, texType, gl.NEAREST);
      dye = createDoubleFBO(dyeRes.width, dyeRes.height, ext.formatRGBA.internalFormat, ext.formatRGBA.format, texType, ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST);
    }

    function getResolution(resolution) {
      let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
      if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
      let minRes = resolution;
      let maxRes = Math.round(resolution * aspectRatio);
      return gl.drawingBufferWidth > gl.drawingBufferHeight ? { width: maxRes, height: minRes } : { width: minRes, height: maxRes };
    }

    function blit(target) {
      if (target == null) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      } else {
        gl.viewport(0, 0, target.width, target.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
      }
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    initFramebuffers();

    let lastUpdate = Date.now();
    function update() {
      const dt = Math.min((Date.now() - lastUpdate) / 1000, 0.016);
      lastUpdate = Date.now();
      gl.disable(gl.BLEND);
      divergenceShader.bind();
      gl.uniform2f(divergenceShader.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(divergenceShader.uniforms.uVelocity, velocity.read.attach(0));
      blit(divergence);
      pressureShader.bind();
      gl.uniform2f(pressureShader.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(pressureShader.uniforms.uDivergence, divergence.attach(0));
      for (let i = 0; i < params.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureShader.uniforms.uPressure, pressure.read.attach(1));
        blit(pressure.write);
        pressure.swap();
      }
      gradientSubtractShader.bind();
      gl.uniform2f(gradientSubtractShader.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(gradientSubtractShader.uniforms.uPressure, pressure.read.attach(0));
      gl.uniform1i(gradientSubtractShader.uniforms.uVelocity, velocity.read.attach(1));
      blit(velocity.write);
      velocity.swap();
      advectionShader.bind();
      gl.uniform2f(advectionShader.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(advectionShader.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(advectionShader.uniforms.uSource, velocity.read.attach(0));
      gl.uniform1f(advectionShader.uniforms.dt, dt);
      gl.uniform1f(advectionShader.uniforms.dissipation, params.VELOCITY_DISSIPATION);
      blit(velocity.write);
      velocity.swap();
      gl.uniform1i(advectionShader.uniforms.uSource, dye.read.attach(1));
      gl.uniform1f(advectionShader.uniforms.dissipation, params.DENSITY_DISSIPATION);
      blit(dye.write);
      dye.swap();
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      displayShader.bind();
      gl.uniform1i(displayShader.uniforms.uTexture, dye.read.attach(0));
      blit(null);
      requestAnimationFrame(update);
    }

    function splat(x, y, dx, dy, color) {
      splatShader.bind();
      gl.uniform1i(splatShader.uniforms.uTarget, velocity.read.attach(0));
      gl.uniform1f(splatShader.uniforms.aspect, canvas.width / canvas.height);
      gl.uniform2f(splatShader.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
      gl.uniform3f(splatShader.uniforms.color, dx, -dy, 1.0);
      gl.uniform1f(splatShader.uniforms.radius, params.SPLAT_RADIUS / 100.0);
      blit(velocity.write);
      velocity.swap();
      gl.uniform1i(splatShader.uniforms.uTarget, dye.read.attach(0));
      gl.uniform3f(splatShader.uniforms.color, color.r, color.g, color.b);
      blit(dye.write);
      dye.swap();
    }

    // Ambient Smoke Logic (Cool Tones: 45% Opacity)
    setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const dx = (Math.random() - 0.5) * 60;
      const dy = (Math.random() - 0.5) * 60;
      const colors = [
        { r: 0.05, g: 0.45, b: 0.45 }, // Cyan (45%)
        { r: 0.0,  g: 0.35, b: 0.28 }, // Teal (45%)
        { r: 0.05, g: 0.20, b: 0.45 }, // Blue (45%)
        { r: 0.28, g: 0.07, b: 0.45 }, // Purple Tint (45%)
        { r: 0.45, g: 0.45, b: 0.45 }  // White Burst (45%)
      ];
      splat(x, y, dx, dy, colors[Math.floor(Math.random() * colors.length)]);
    }, 1000);

    window.addEventListener('mousemove', e => {
      const dx = (e.clientX - pointers[0].x) * 12;
      const dy = (e.clientY - pointers[0].y) * 12;
      pointers[0].x = e.clientX;
      pointers[0].y = e.clientY;
      if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
        // Mouse trail at 45% opacity
        splat(e.clientX, e.clientY, dx, dy, { r: 0.0, g: 0.40, b: 0.45 }); 
      }
    });

    update();
  } catch (e) {
    console.error("Fluid simulation skipped:", e);
    canvas.style.display = 'none';
  }
})();

/* ============================
   MAGNETIC CURSOR REFINED
   ============================ */
(function initCursor() {
  const dot = document.getElementById('cursor-dot');
  if (!dot) return;

  document.body.classList.add('custom-cursor-active');

  // Dot follows mouse precisely with no lag
  window.addEventListener('mousemove', (e) => {
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // TEXT targets: p, h1-h6, span, li, label → transparent hollow ring
  const textTargets = 'p, h1, h2, h3, h4, h5, h6, span, li, label, .hero-desc, .section-tag';
  document.querySelectorAll(textTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-on-text');
      document.body.classList.remove('cursor-hovering');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-on-text');
    });
  });

  // INTERACTIVE targets: links, buttons, cards → slightly larger hollow ring
  const interactiveTargets = 'a, button, .btn, .project-card, .edu-card, .achievement-card';
  document.querySelectorAll(interactiveTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hovering');
      document.body.classList.remove('cursor-on-text');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hovering');
    });
  });
})();

/* ============================
   NAV & MOBILE MENU
   ============================ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ============================
   ACTIVE NAV SECTION TRACKER
   ============================ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link[data-section]');

  function setActive(id) {
    links.forEach(link => {
      if (link.dataset.section === id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Use IntersectionObserver to detect visible section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, {
    rootMargin: '-40% 0px -50% 0px', // triggers when section is ~midscreen
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
})();

/* ============================
   TYPED EFFECT
   ============================ */
(function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const words = ['Developer 💻', 'Tech Enthusiast 🚀', 'Problem Solver 🧩', 'Web Creator 🌐', 'AI Explorer 🤖', 'UI Designer 🎨'];
  let wi = 0, ci = 0, deleting = false;

  function type() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ci + 1);
      ci++;
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
})();

/* ============================
   SECTION REVEALS
   ============================ */
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const btn = document.getElementById('sendBtn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
        const success = document.getElementById('formSuccess');
        if (success) success.classList.add('show');
        this.reset();
      }, 2000);
    }
  });
}
