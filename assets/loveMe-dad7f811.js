import './main-5a2fd822.js';
import {
  i as Ae,
  _ as L,
  A as Me,
  a as qe,
  h as ue,
} from './vimeo-helper-0d9abcf8.js';
import { g as o } from './index-794e919d.js';
import './browser-detect-98c422d3.js';
import './applystuff-ad9e8171.js';
import { i as Pe } from './slider-567f78b0.js';
const me = document.getElementById('cross');
me.addEventListener('click', function (g) {
  g.preventDefault();
  const f = '/';
  sessionStorage.setItem('isInternalNavigation', 'true'),
    fetch(f, { mode: 'no-cors' })
      .then(() => console.log('Page preloaded:', f))
      .catch(() => console.warn('Failed to preload page:', f)),
    (me.style.pointerEvents = 'none');
});
sessionStorage.getItem('isInternalNavigation');
document.addEventListener('DOMContentLoaded', function () {
  Ae('lovememvid', 'closevid');
  const g = Array.from({ length: 224 }, (t, e) => ({
    thumb: `images/Love-Me/love-me-thumb/love-me-thumb-${e + 2}.jpg`,
    full: `images/Love-Me/love-me-full/love-me-full-${e + 2}.jpg`,
  }));
  function f(t) {
    for (let e = t.length - 1; e > 0; e--) {
      const s = Math.floor(Math.random() * (e + 1));
      [t[e], t[s]] = [t[s], t[e]];
    }
  }
  const _ = Array.from({ length: g.length }, (t, e) => e);
  f(_);
  const p = document.createElement('div');
  (p.id = 'preloader'),
    (p.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: rgba(12, 12, 11, 0.5); /* Slightly transparent overlay */
    color: white;
    display: flex;
    font-family: Neueeigene;
    letter-spacing: -1.5;
    align-items: flex-end;
    justify-content: right;
    font-size: 20px;
    z-index: 9999;
    transition: opacity 1.5s ease; /* Overlay fade-out */
  `),
    (p.innerHTML =
      '<span id="progress-text" style=" margin:2.5vmin; transition: opacity 0.3s ease;">loading... 0/224</span>'),
    document.body.appendChild(p);
  let B = 0;
  const A = document.querySelectorAll('.img-love-me');
  _.forEach((t) => {
    const e = g[t],
      s = new Image();
    (s.src = e.thumb),
      (s.onload = () => {
        const i = A[t];
        i &&
          ((i.src = s.src),
          (i.dataset.full = e.full),
          o.fromTo(
            i,
            { opacity: 0 },
            { opacity: 1, duration: 0.15, ease: 'power2.inOut' }
          )),
          B++;
        const n = document.getElementById('progress-text');
        (n.textContent = `loading... ${B}/224`),
          B === A.length &&
            (o.to(n, { opacity: 0, duration: 0.4, ease: 'power2.inOut' }),
            setTimeout(() => {
              o.to(p, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.inOut',
                onComplete: () => {
                  p.remove();
                },
              });
            }, 400));
      });
  });
  const O = document.getElementById('navigalast');
  function R(t, e, s = 35) {
    t.innerHTML = '';
    let i = 0;
    function n() {
      i < e.length &&
        (e.substring(i, i + 4) === '<br>'
          ? ((t.innerHTML += '<br>'), (i += 4))
          : ((t.innerHTML += e.charAt(i)), i++),
        setTimeout(n, s));
    }
    n();
  }
  const M = document.getElementById('passwordInput'),
    pe = document.getElementById('checkPasswordBtn'),
    K = document.getElementById('firsthint'),
    U = document.getElementById('secondhint'),
    ye = document.querySelector('.password-container'),
    ge = document.getElementById('checkimg'),
    he = document.getElementById('hintLink'),
    q = document.getElementById('hinttext');
  function Z() {
    if (
      (o.to(ge, { scale: 0.96, duration: 0.1, yoyo: !0, repeat: 1 }),
      M.value === 'home')
    ) {
      const e = document.querySelector('.onload-div'),
        s = document.getElementById('naviga'),
        i = document.getElementById('wholeplayer');
      o.to(ye, { opacity: 0, y: -15, duration: 1, ease: 'power3.inOut' }),
        o.to(e, {
          height: '0%',
          duration: 1,
          delay: 0.5,
          ease: 'power4.inOut',
          onComplete: () => {
            (e.style.display = 'none'),
              (s.style.display = 'flex'),
              o.fromTo(
                [s, i],
                { opacity: 0, y: 17 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut' }
              );
          },
        });
    } else alert('That is not the correct password.');
  }
  pe.addEventListener('click', Z),
    M.addEventListener('keydown', (t) => {
      t.key === 'Enter' && Z();
    }),
    he.addEventListener('click', (t) => {
      t.preventDefault(),
        q.classList.contains('hidden')
          ? (q.classList.remove('hidden'),
            K.classList.add('hidden'),
            U.classList.remove('hidden'),
            R(
              q,
              `We are not a proud race<br>
    Its not a race at all<br>
    Were just trying, Im only trying to get ____`,
              50
            ))
          : (q.classList.add('hidden'),
            K.classList.remove('hidden'),
            U.classList.add('hidden'));
    });
  const x = document.getElementById('lightbox'),
    C = document.getElementById('lightbox-image'),
    P = document.getElementById('naviga');
  let r = [],
    a = 0;
  const l = document.createElement('div');
  (l.style.position = 'fixed'),
    (l.style.bottom = '20px'),
    (l.style.right = '20px'),
    (l.style.color = '#ffffffd6'),
    (l.style.letterSpacing = '-1.5px'),
    (l.style.textStroke = '-0.25px'),
    (l.style.fontSize = '15px'),
    (l.style.fontFamily = 'Neueeigene'),
    (l.style.zIndex = '1002'),
    (l.style.backgroundColor = '#000000e6'),
    (l.style.paddingTop = '3.5px'),
    (l.style.paddingBottom = '1.5px'),
    (l.style.paddingLeft = '8px'),
    (l.style.paddingRight = '8px'),
    (l.style.opacity = '0'),
    (l.style.borderRadius = '5px'),
    (l.style.display = 'none'),
    document.body.appendChild(l);
  function V() {
    (l.textContent = `${a + 1} / ${r.length}`),
      (l.style.display = 'block'),
      o.to(l, { opacity: 1, duration: 0.5, ease: 'power2.in' });
  }
  function Q(t) {
    if (x.style.display === 'flex')
      switch (t.key) {
        case 'ArrowRight':
          ee();
          break;
        case 'ArrowLeft':
          te();
          break;
        case 'Escape':
          H();
          break;
      }
  }
  document.querySelectorAll('.image-container img').forEach((t) => {
    t.addEventListener('mouseover', (e) => {
      const s = e.target.src.replace(
          '/love-me-thumb/love-me-thumb-',
          '/love-me-full/love-me-full-'
        ),
        i = new Image();
      (i.src = s),
        (i.onload = () => {
          const n = e.target.cloneNode(!0);
          (n.src = s),
            (n.style.position = 'absolute'),
            (n.style.top = '-9999px'),
            (n.style.left = '-9999px'),
            (n.style.width = 'auto'),
            (n.style.height = 'auto'),
            (n.style.visibility = 'hidden'),
            (n.style.pointerEvents = 'none'),
            document.body.appendChild(n);
        });
    }),
      t.addEventListener('click', (e) => {
        e.target.style.visibility = 'hidden';
        const s = e.target.closest('.image-container');
        r = Array.from(s.querySelectorAll('img'));
        const i = e.target.src.replace(
          '/love-me-thumb/love-me-thumb-',
          '/love-me-full/love-me-full-'
        );
        (a = r
          .map((m) =>
            m.src.replace(
              '/love-me-thumb/love-me-thumb-',
              '/love-me-full/love-me-full-'
            )
          )
          .indexOf(i)),
          V(),
          (C.src = i),
          o.to(P, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
              P.style.display = 'none';
            },
          });
        const n = e.target.cloneNode(!0);
        n.src = i;
        const c = e.target.getBoundingClientRect();
        (n.style.position = 'fixed'),
          (n.style.top = `${c.top}px`),
          (n.style.left = `${c.left}px`),
          (n.style.width = `${c.width}px`),
          (n.style.height = `${c.height}px`),
          (n.style.zIndex =
            '99999999999999999999999999999999999999999999999999'),
          (n.style.transition = 'none'),
          (n.style.objectFit = 'contain'),
          (n.style.visibility = 'hidden'),
          (n.style.pointerEvents = 'none'),
          document.body.appendChild(n),
          requestAnimationFrame(() => {
            (n.style.visibility = 'visible'),
              o.to(n, {
                top: `${(window.innerHeight - window.innerHeight * 0.9) / 2}px`,
                left: `${(window.innerWidth - window.innerWidth * 0.9) / 2}px`,
                width: '90%',
                height: '90%',
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => {
                  (x.style.display = 'flex'),
                    (x.style.opacity = '1'),
                    document.body.removeChild(n),
                    document.addEventListener('keydown', Q);
                },
              });
          });
      });
  });
  function H() {
    const t = C.getBoundingClientRect(),
      e = C.cloneNode(!0),
      s = C.src.replace(
        '/love-me-thumb/Love-Me-Thumb-',
        '/love-me-full/love-me-full-'
      );
    (e.src = s),
      document.body.appendChild(e),
      (e.style.position = 'fixed'),
      (e.style.top = `${t.top}px`),
      (e.style.left = `${t.left}px`),
      (e.style.width = `${t.width}px`),
      (e.style.height = `${t.height}px`),
      (e.style.zIndex = '999999999999999999999999999999999999999999999999991'),
      (e.style.objectFit = 'contain');
    const i = Array.from(
        document.querySelectorAll('.image-container img')
      ).find(
        (c) =>
          c.src.replace(
            '/love-me-thumb/love-me-thumb-',
            '/love-me-full/love-me-full-'
          ) === s
      ),
      n = i.getBoundingClientRect();
    o.to(e, {
      top: `${n.top}px`,
      left: `${n.left}px`,
      width: `${n.width}px`,
      height: `${n.height}px`,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        document.body.removeChild(e),
          o.to(l, { opacity: 0, duration: 0.5 }),
          (i.style.visibility = 'visible'),
          (i.style.opacity = '1');
      },
    }),
      o.to(l, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          l.style.display = 'none';
        },
      }),
      (P.style.display = 'flex'),
      o.to(P, { opacity: 1, duration: 0.5, ease: 'power2.in' }),
      (x.style.display = 'none'),
      document.removeEventListener('keydown', Q);
  }
  function ee() {
    if (r.length > 0) {
      (r[a].style.visibility = 'visible'),
        o.to(r[a], { opacity: 1, duration: 0.2, ease: 'power2.inOut' }),
        (a = (a + 1) % r.length),
        o.to(r[a], {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.inOut',
          onComplete: () => {
            r[a].style.visibility = 'hidden';
          },
        }),
        V();
      const t = r[a].src.replace(
        '/love-me-thumb/love-me-thumb-',
        '/love-me-full/love-me-full-'
      );
      C.src = t;
      const e = document.createElement('img');
      (e.src = r[(a + 1) % r.length].src.replace(
        '/love-me-thumb/love-me-thumb-',
        '/love-me-full/love-me-full-'
      )),
        document.body.appendChild(e),
        o.to(e, {
          top: '50%',
          left: '50%',
          width: '80%',
          height: '80%',
          duration: 0.5,
          ease: 'power2.out',
        }),
        o.to(e, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            document.body.removeChild(e);
          },
        });
    }
  }
  function te() {
    if (r.length > 0) {
      (r[a].style.visibility = 'visible'),
        o.to(r[a], { opacity: 1, duration: 0.2, ease: 'power2.inOut' }),
        (a = (a - 1 + r.length) % r.length),
        o.to(r[a], {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.inOut',
          onComplete: () => {
            r[a].style.visibility = 'hidden';
          },
        }),
        V();
      const t = r[a].src.replace(
        '/love-me-thumb/love-me-thumb-',
        '/love-me-full/love-me-full-'
      );
      C.src = t;
      const e = document.createElement('img');
      (e.src = r[(a - 1 + r.length) % r.length].src.replace(
        '/love-me-thumb/love-me-thumb-',
        '/love-me-full/love-me-full-'
      )),
        document.body.appendChild(e),
        o.to(e, {
          top: '50%',
          left: '50%',
          width: '80%',
          height: '80%',
          duration: 0.5,
          ease: 'power2.out',
        }),
        o.to(e, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            document.body.removeChild(e);
          },
        });
    }
  }
  x.addEventListener('click', (t) => {
    if (t.target === x) {
      H();
      return;
    }
    const e = x.querySelector('img'),
      s = e.getBoundingClientRect(),
      i = s.width,
      n = s.height,
      c = e.naturalWidth,
      m = e.naturalHeight,
      E = i / c,
      d = n / m;
    let h = i,
      b = n,
      y = 0,
      u = 0;
    E < d ? ((b = m * E), (u = (n - b) / 2)) : ((h = c * d), (y = (i - h) / 2));
    const k = t.clientX - s.left - y,
      I = t.clientY - s.top - u;
    k >= 0 && k <= h && I >= 0 && I <= b ? (k > h / 2 ? ee() : te()) : H();
  });
  const oe = document.querySelector('.buchhh'),
    fe = document.getElementById('openbook'),
    ve = document.getElementById('closebook'),
    ne = document.querySelector('.yobacki'),
    we = document.getElementById('huettebutton'),
    be = document.getElementById('closehuette'),
    v = document.getElementById('naviga'),
    N = document.getElementById('grainiwrapppp'),
    xe = document.getElementById('closeModal'),
    j = document.getElementById('openModal'),
    D = document.querySelector('.blurbackstuff'),
    T = document.querySelector('.div-block-65'),
    Ee = document.querySelector('.lovemeembbbb'),
    Ie = document.querySelector('#bsideslink'),
    w = document.querySelector('#firstinterfacex'),
    $ = document.querySelector('#scondinterfaceex'),
    Le = document.querySelector('#closebsides'),
    G = document.querySelector('#opentext'),
    Ce = document.querySelector('#closetext'),
    W = document.querySelector('.textdivhute'),
    ie = document.querySelector('#textimg'),
    se = document.querySelector('#turimg');
  G.addEventListener('mouseover', () => {
    o.to(ie, { opacity: 0.9, duration: 0.4, ease: 'power2.inOut' });
  }),
    G.addEventListener('mouseout', () => {
      o.to(ie, { opacity: 0, duration: 0.4, ease: 'power2.inOut' });
    }),
    j.addEventListener('mouseover', () => {
      o.to(se, { opacity: 0.75, duration: 0.4, ease: 'power2.inOut' });
    }),
    j.addEventListener('mouseout', () => {
      o.to(se, { opacity: 0, duration: 0.4, ease: 'power2.inOut' });
    }),
    Ce.addEventListener('click', () => {
      (w.style.display = 'flex'),
        o.to(W, {
          opacity: 0,
          duration: 0.75,
          ease: 'power4.inOut',
          onComplete: () => {
            W.style.display = 'none';
          },
        }),
        o.to(w, {
          delay: 0.5,
          opacity: 1,
          duration: 0.15,
          ease: 'power4.inOut',
        });
    }),
    G.addEventListener('click', () => {
      (W.style.display = 'flex'),
        o.to(W, { opacity: 1, duration: 0.75, ease: 'power4.inOut' }),
        o.to(w, {
          opacity: 0,
          duration: 0.15,
          ease: 'power4.inOut',
          onComplete: () => {
            w.style.display = 'none';
          },
        });
    }),
    Ie.addEventListener('click', () => {
      ($.style.display = 'flex'),
        (T.style.display = 'flex'),
        o.set(Ee, { opacity: 1 }),
        o.to(T, { opacity: 1, duration: 1, ease: 'power4.inOut' }),
        o.to(w, {
          opacity: 0,
          duration: 0.15,
          ease: 'power2.inOut',
          onComplete: () => {
            w.style.display = 'none';
          },
        }),
        o.to($, {
          opacity: 1,
          delay: 0.15,
          duration: 0.15,
          ease: 'power2.inOut',
        });
    }),
    Le.addEventListener('click', () => {
      (w.style.display = 'flex'),
        o.to(T, {
          opacity: 0,
          duration: 1,
          ease: 'power4.inOut',
          onComplete: () => {
            T.style.display = 'none';
          },
        }),
        o.to(w, {
          opacity: 1,
          duration: 0.15,
          delay: 0.15,
          ease: 'power4.inOut',
        }),
        o.to($, {
          opacity: 0,
          duration: 0.15,
          ease: 'power4.inOut',
          onComplete: () => {
            $.style.display = 'none';
          },
        });
    }),
    we.addEventListener('click', () => {
      (D.style.display = 'block'),
        o.to([ne, D], {
          y: '0vh',
          opacity: 1,
          duration: 0.65,
          ease: 'power4.out',
        }),
        o.to([v, O], {
          opacity: 0,
          duration: 0.25,
          ease: 'power3.inOut',
          onComplete: () => {
            (v.style.display = 'none'), (O.style.display = 'none');
          },
        });
    }),
    be.addEventListener('click', () => {
      (v.style.display = 'flex'),
        (O.style.display = 'flex'),
        o.to(N, { opacity: 1, duration: 0.5, ease: 'power4.in' }),
        o.to(ne, { y: '101vh', duration: 0.65, ease: 'power4.in' }),
        o.to(D, {
          opacity: 0,
          duration: 0.65,
          ease: 'power4.in',
          onComplete: () => {
            D.style.display = 'none';
          },
        }),
        o.to([v, O], { opacity: 1, duration: 0.25, ease: 'power3.inOut' });
    }),
    fe.addEventListener('click', () => {
      o.to(oe, { y: '0vh', duration: 0.65, ease: 'power4.out' }),
        o.to(v, {
          opacity: 0,
          duration: 0.25,
          ease: 'power3.inOut',
          onComplete: () => {
            v.style.display = 'none';
          },
        });
    }),
    ve.addEventListener('click', () => {
      (v.style.display = 'flex'),
        o.to(oe, { y: '101vh', duration: 0.65, ease: 'power4.in' }),
        o.to(v, { opacity: 1, duration: 0.25, ease: 'power3.inOut' });
    }),
    j.addEventListener('click', () => {
      o.to(N, { opacity: 0, duration: 1.5, ease: 'power4.in' });
    }),
    xe.addEventListener('click', () => {
      o.to(N, { opacity: 1, duration: 0.5, ease: 'power4.in' });
    });
  function ke(t) {
    return { x: t.clientX, y: t.clientY };
  }
  function Be(t, e, s) {
    return (1 - s) * t + s * e;
  }
  let X = { x: 0, y: 0 };
  window.addEventListener('mousemove', (t) => (X = ke(t)));
  class Oe {
    constructor() {
      (this.images = document.querySelectorAll('.imgmouse')),
        (this.cursorConfigs = {
          x: { previous: 0, current: 0, amt: 0.2 },
          y: { previous: 0, current: 0, amt: 0.2 },
        }),
        window.addEventListener('mousemove', this.onMouseMoveEv.bind(this));
    }
    onMouseMoveEv() {
      (this.cursorConfigs.x.current = X.x),
        (this.cursorConfigs.y.current = X.y),
        requestAnimationFrame(() => this.render());
    }
    render() {
      for (const e in this.cursorConfigs)
        this.cursorConfigs[e].previous = Be(
          this.cursorConfigs[e].previous,
          this.cursorConfigs[e].current,
          this.cursorConfigs[e].amt
        );
      this.images.forEach((e) => {
        const s = e.offsetWidth,
          i = e.offsetHeight;
        o.to(e, {
          duration: 0.2,
          x: this.cursorConfigs.x.previous - s / 2,
          y: this.cursorConfigs.y.previous - i / 2,
          ease: 'power3.out',
        });
      }),
        requestAnimationFrame(() => this.render());
    }
  }
  new Oe();
  const le = document.querySelectorAll('.lovemeembbbb'),
    Y = document.querySelectorAll('.imgmouse');
  if (le.length !== 7 || Y.length !== 7) {
    console.error(
      'Error: There must be exactly 7 images with class .lovemeembbbb and 7 images with class .imgmouse'
    );
    var re = !1;
  } else var re = !0;
  re &&
    le.forEach((t, e) => {
      t.addEventListener('mouseover', () => {
        (t.style.opacity = 0), (Y[e].style.opacity = 1);
      }),
        t.addEventListener('mouseout', () => {
          (t.style.opacity = 1), (Y[e].style.opacity = 0);
        });
    });
  const z = document.getElementById('threeModal'),
    ae = document.getElementById('openModal'),
    Se = document.getElementById('closeModal'),
    _e = document.getElementById('loadingPercent'),
    F = document.getElementById('preloader-three');
  let ce = !1;
  ae.addEventListener('click', () => {
    console.log('Opening modal...'),
      (z.style.display = 'flex'),
      L(() => import('./three.module-a8d8e7ba.js'), [])
        .then((t) =>
          Promise.all([
            L(
              () => import('./GLTFLoader-05522528.js'),
              [
                'assets/GLTFLoader-05522528.js',
                'assets/three.module-a8d8e7ba.js',
              ]
            ).then((e) => e.GLTFLoader),
            L(
              () => import('./OrbitControls-d773b0ca.js'),
              [
                'assets/OrbitControls-d773b0ca.js',
                'assets/three.module-a8d8e7ba.js',
              ]
            ).then((e) => e.OrbitControls),
          ]).then(([e, s]) => {
            function i(n, c, m) {
              const E = new n.Scene(),
                d = new n.PerspectiveCamera(
                  75,
                  window.innerWidth / window.innerHeight,
                  0.1,
                  1e3
                ),
                h = new n.WebGLRenderer();
              h.setSize(window.innerWidth, window.innerHeight),
                document.body.appendChild(h.domElement);
              const b = new n.BoxGeometry(),
                y = new n.MeshBasicMaterial({ color: 65280 }),
                u = new n.Mesh(b, y);
              E.add(u), (d.position.z = 5);
              const k = new m(d, h.domElement);
              function I() {
                requestAnimationFrame(I),
                  (u.rotation.x += 0.01),
                  (u.rotation.y += 0.01),
                  k.update(),
                  h.render(E, d);
              }
              I();
            }
            i(t, e, s);
          })
        )
        .catch((t) => {
          console.error('Error loading Three.js or its moduless:', t);
        });
  }),
    ae.addEventListener('click', () => {
      console.log('Opening modal...'),
        L(() => import('./three.module-a8d8e7ba.js'), [])
          .then((t) =>
            Promise.all([
              L(
                () => import('./GLTFLoader-05522528.js'),
                [
                  'assets/GLTFLoader-05522528.js',
                  'assets/three.module-a8d8e7ba.js',
                ]
              ).then((e) => e.GLTFLoader),
              L(
                () => import('./OrbitControls-d773b0ca.js'),
                [
                  'assets/OrbitControls-d773b0ca.js',
                  'assets/three.module-a8d8e7ba.js',
                ]
              ).then((e) => e.OrbitControls),
            ]).then(([e, s]) => {
              z.style.display = 'flex';
              function i() {
                if (ce) return;
                (ce = !0),
                  console.log('Initializing scene...'),
                  (F.style.display = 'flex');
                const n = new t.Scene(),
                  c = new t.PerspectiveCamera(
                    70,
                    window.innerWidth / window.innerHeight,
                    0.1,
                    1e3
                  );
                c.position.set(0, 0.15, 0), c.lookAt(0, 0.15, 0);
                const m = new t.WebGLRenderer();
                m.setSize(window.innerWidth, window.innerHeight),
                  m.setClearColor(2105376),
                  z.appendChild(m.domElement);
                const E = new t.AmbientLight(16777215, 1.5);
                n.add(E);
                const d = new s(c, m.domElement);
                (d.enableDamping = !0),
                  (d.dampingFactor = 0.1),
                  d.target.set(0, 0.15, 0),
                  d.update(),
                  (d.enableZoom = !1),
                  new e().load(
                    '/huetteblender.glb',
                    function (y) {
                      const u = y.scene,
                        I = new t.Box3()
                          .setFromObject(u)
                          .getCenter(new t.Vector3());
                      u.position.sub(I),
                        u.scale.set(1, 1, 1),
                        n.add(u),
                        console.log('Model loaded ssss!'),
                        o.to(F, {
                          opacity: 0,
                          duration: 0.5,
                          onComplete: () => {
                            F.style.display = 'none';
                          },
                        });
                    },
                    function (y) {
                      const u = Math.round((y.loaded / y.total) * 99);
                      _e.textContent = u;
                    },
                    function (y) {
                      console.error('Error loading model:', y),
                        (F.textContent = 'Error loading the model.');
                    }
                  );
                function b() {
                  requestAnimationFrame(b), d.update(), m.render(n, c);
                }
                b();
              }
              i();
            })
          )
          .catch((t) => {
            console.error('Error loading Three.js:', t);
          });
    }),
    Se.addEventListener('click', () => {
      z.style.display = 'none';
    });
  const S = document.getElementById('cross'),
    de = document.getElementById('pwembed'),
    J = document.querySelector('.onload-div');
  if (!S) {
    console.warn("Element with ID 'cross' not found.");
    return;
  }
  S.addEventListener('click', function (t) {
    t.preventDefault();
    const e = '/';
    sessionStorage.setItem('isInternalNavigation', 'true'),
      console.log('Internal navigation state set in sessionStorage.'),
      fetch(e, { mode: 'no-cors' })
        .then(() => console.log('Page preloaded:', e))
        .catch(() => console.warn('Failed to preload page:', e)),
      (S.style.pointerEvents = 'none'),
      (J.style.display = 'block'),
      o.set(J, { top: 'auto', bottom: 0 }),
      o.to(S, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.inOut',
        onComplete: () => {
          S.style.display = 'none';
        },
      }),
      de &&
        o.to(de, {
          opacity: 0,
          y: -15,
          duration: 1,
          ease: 'power3.inOut',
          onComplete: () => {
            window.location.href = e;
          },
        });
    const s = document.getElementById('naviga'),
      i = document.getElementById('wholeplayer');
    o.to([s, i], { opacity: 0, y: -17, duration: 0.5, ease: 'power3.inOut' }),
      o.to(J, {
        height: '100%',
        duration: 1,
        ease: 'power4.inOut',
        onComplete: () => {
          window.location.href = e;
        },
      });
  }),
    sessionStorage.getItem('isInternalNavigation') === 'true' &&
      console.log('Page loaded via internal navigation.');
});
const De = document.getElementById('pwembed'),
  Te = document.getElementById('navigalast');
o.fromTo(
  [De, Te],
  { opacity: 0, y: 15 },
  { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut' }
);
L(() => import('./lottie-5b9511fa.js').then((g) => g.l), [])
  .then((g) => {
    const f = document.querySelector('.videobackinout'),
      _ = g.default,
      p = document.getElementById('naviga'),
      B = [
        {
          name: 'Beach Life-In-Death',
          artist: 'Car Seat Headrest',
          path: 'audio/Car+Seat+Headrest+-+_Beach+Life-In-Death_+(Official+Audio).mp3',
        },
        {
          name: 'Missing Pieces',
          artist: 'Voxtrot',
          path: 'audio/MissingPiecesVoxtrot.mp3',
        },
      ],
      A = new Me('.music-player-container', B, _);
    qe(A),
      document.getElementById('openbook').addEventListener('click', () => {
        Pe();
      });
    const R = document.getElementById('vidbutton'),
      M = document.getElementById('closevid');
    R.addEventListener('click', () => {
      ue(!0),
        o.to(f, { y: '0vh', duration: 0.65, ease: 'power4.out' }),
        o.to(p, {
          opacity: 0,
          duration: 0.25,
          ease: 'power3.inOut',
          onComplete: () => {
            p.style.display = 'none';
          },
        });
    }),
      M.addEventListener('click', () => {
        ue(!1),
          (p.style.display = 'flex'),
          o.to(f, { y: '101vh', duration: 0.65, ease: 'power3.in' }),
          o.to(p, { opacity: 1, duration: 0.25, ease: 'power3.inOut' });
      });
  })
  .catch((g) => {
    console.error('Error loading lottie-web :', g);
  });
