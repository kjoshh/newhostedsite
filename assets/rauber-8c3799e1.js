import"./main-29186016.js";import{g as t}from"./index-794e919d.js";import"./browser-detect-98c422d3.js";import"./applystuff-ad9e8171.js";import{i as ce}from"./slider-567f78b0.js";function ue(y,u){const f=document.getElementById(y),b=document.getElementById(u);if(f){let C=function(x,m){const v={method:x};m!==void 0&&(v.value=m),f.contentWindow.postMessage(JSON.stringify(v),"https://player.vimeo.com")};b?b.addEventListener("click",function(){C("pause")}):console.error(`Error: #${u} button not found.`)}else console.error(`Error: #${y} iframe not found.`)}function ee(){let y=0,u=0,f=.075;document.querySelector(".slider-raub.a1");const b=document.querySelector(".slider-wrapper-raub.a1"),C=document.querySelector(".marker-wrapper.a1"),x=document.querySelector(".active-slide.a1");let m=b.offsetWidth-window.innerWidth;function v(g,w,h){return g+(w-g)*h}function L(g,w){const h=w/14;let k=Math.round((g-70)/h)+1;k=Math.min(14,k),x.textContent=`${k}/14`}let $;function I(){u=v(u,y,f),t.set(".slider-wrapper-raub",{x:-u});let g=u/m,w=window.innerWidth-C.offsetWidth-170,h=70+g*w;t.set(".marker-wrapper",{x:h}),L(h,w),$=requestAnimationFrame(I)}window.addEventListener("resize",()=>{m=b.offsetWidth-window.innerWidth}),window.addEventListener("wheel",g=>{y+=g.deltaY,y=Math.max(0,y),y=Math.min(m,y)}),I(),document.querySelector("#closebook").addEventListener("click",()=>{setTimeout(()=>{cancelAnimationFrame($),window.removeEventListener("resize",I),window.removeEventListener("wheel",I)},500)})}const pe=document.getElementById("openbook");pe.addEventListener("click",()=>{ee()});document.addEventListener("DOMContentLoaded",function(){ue("lovememvid","closevid");const y=document.getElementById("lovememvid");console.log("myVideo:",y);const u=document.getElementById("onloaddiv"),f=document.getElementById("naviga");t.to(u,{height:"0%",duration:1,ease:"power4.inOut",onComplete:()=>{u.style.display="none"}}),document.body.style.overflow="hidden",window.scrollTo({top:0,behavior:"auto"}),setTimeout(()=>{document.body.style.overflow="auto"},3e3);const b=Array.from({length:99},(n,e)=>({thumb:`images/Rauber/rauber-thumb/rauber-thumb-${e+1}.jpg`,full:`images/Rauber/rauber-full/rauber-full-${e+1}.jpg`}));function C(n){for(let e=n.length-1;e>0;e--){const s=Math.floor(Math.random()*(e+1));[n[e],n[s]]=[n[s],n[e]]}}const x=Array.from({length:b.length},(n,e)=>e);C(x);let m=0;const v=document.querySelectorAll(".rauber-img");x.forEach(n=>{const e=b[n],s=new Image;s.src=e.thumb,s.onload=()=>{const d=v[n];d&&(d.src=s.src,d.dataset.full=e.full,t.fromTo(d,{opacity:0},{opacity:1,duration:.15,ease:"power2.inOut"})),m++;const o=document.getElementById("preloader"),p=document.getElementById("progress-text");p.textContent=`loading... ${m} / 99`,m===v.length&&(t.to(p,{opacity:0,duration:.5,ease:"power2.inOut"}),setTimeout(()=>{t.to(o,{opacity:0,duration:.4,ease:"power2.inOut"}),setTimeout(()=>{o.remove(),f.style.display="flex",t.fromTo(f,{opacity:0,y:40},{opacity:1,y:0,duration:.4,ease:"power2.inOut"})},400)},400))}});const L=document.getElementById("lodiv"),$=document.getElementById("openlo"),I=document.getElementById("closelo"),q=document.getElementById("textdiv"),g=document.getElementById("opentext"),w=document.getElementById("closetext"),h=document.getElementById("baume"),k=document.getElementById("weg"),H=document.getElementById("tiere"),P=document.getElementById("rauberschrift"),D=document.getElementById("arrowdown"),V=document.getElementById("wipdiv"),te=document.getElementById("openwip"),oe=document.getElementById("closewip"),j=document.getElementById("buchdiv"),ne=document.getElementById("openbook"),ie=document.getElementById("closebook"),Y=document.getElementById("viddiv"),re=document.getElementById("openvid"),le=document.getElementById("closevid"),l=document.getElementById("naviga"),a=document.getElementById("navigalast"),O=document.querySelector(".blurbackstuff");$.addEventListener("click",()=>{ee(),t.to(L,{y:"0vh",duration:.65,ease:"power4.inOut"}),t.to([l,a],{opacity:0,duration:.25,ease:"power3.inOut",onComplete:()=>{l.style.display="none",a.style.display="none"}})}),I.addEventListener("click",()=>{l.style.display="flex",a.style.display="flex",t.to(O,{opacity:0,duration:.65,ease:"power4.inOut",onComplete:()=>{O.style.display="none"}}),t.to(L,{y:"101vh",duration:.65,ease:"power3.inOut"}),t.to([l,a],{opacity:1,duration:.25,ease:"power3.inOut"})});let A;g.addEventListener("click",()=>{t.set([h,k,H,P,D],{opacity:0});const n=t.timeline();setTimeout(()=>{n.to(h,{duration:.65,opacity:1,ease:"power3.inOut"}).to(k,{duration:.65,opacity:1,ease:"power3.inOut"},"-=0.2").fromTo(H,{opacity:0,y:-30,scale:.85},{duration:.65,opacity:1,y:0,scale:1,ease:"power3.inOut"},"-=0.2").fromTo(P,{opacity:0,y:20},{duration:.65,opacity:1,y:0,ease:"power3.inOut"},"-=0.2").fromTo(D,{opacity:0,y:10},{duration:1,opacity:1,y:0,ease:"sine.inOut"},"-=0.2").add(()=>{A=t.to(D,{y:10,duration:1,ease:"sine.inOut",yoyo:!0,repeat:-1})})},650),O.style.display="block",t.to(O,{opacity:1,duration:.65,ease:"power4.inOut"}),t.to(q,{y:"0vh",duration:.65,ease:"power4.inOut"}),t.to([l,a],{opacity:0,duration:.25,ease:"power3.inOut",onComplete:()=>{l.style.display="none",a.style.display="none"}})}),w.addEventListener("click",()=>{A&&(A.kill(),A=null),l.style.display="flex",a.style.display="flex",t.to(O,{opacity:0,duration:.65,ease:"power4.inOut",onComplete:()=>{O.style.display="none"}}),t.to(q,{y:"101vh",duration:.65,ease:"power4.inOut"}),t.to([l,a],{opacity:1,duration:.25,ease:"power3.inOut"})}),te.addEventListener("click",()=>{t.to(V,{y:"0vh",duration:.65,ease:"power4.inOut"}),t.to([l,a],{opacity:0,duration:.25,ease:"power3.inOut",onComplete:()=>{l.style.display="none",a.style.display="none"}})}),oe.addEventListener("click",()=>{l.style.display="flex",a.style.display="flex",t.to(V,{y:"101vh",duration:.65,ease:"power4.inOut"}),t.to([l,a],{opacity:1,duration:.25,ease:"power3.inOut"})}),ne.addEventListener("click",()=>{ce(),t.to(j,{y:"0vh",duration:.65,ease:"power4.inOut"}),t.to([l,a],{opacity:0,duration:.25,ease:"power3.inOut",onComplete:()=>{l.style.display="none",a.style.display="none"}})}),ie.addEventListener("click",()=>{l.style.display="flex",a.style.display="flex",t.to(j,{y:"101vh",duration:.65,ease:"power4.inOut"}),t.to([l,a],{opacity:1,duration:.25,ease:"power3.inOut"})}),re.addEventListener("click",()=>{t.to(Y,{y:"0vh",duration:.65,ease:"power4.inOut"}),t.to([l,a],{opacity:0,duration:.25,ease:"power3.inOut",onComplete:()=>{l.style.display="none",a.style.display="none"}})}),le.addEventListener("click",()=>{l.style.display="flex",a.style.display="flex",t.to(Y,{y:"101vh",duration:.65,ease:"power4.inOut"}),t.to([l,a],{opacity:1,duration:.25,ease:"power3.inOut"})});const ae=document.querySelectorAll(".textneww"),se=()=>{document.body.style.overflow="hidden"},de=()=>{document.body.style.overflow=""};ae.forEach(n=>{n.addEventListener("click",()=>{se()})}),document.querySelectorAll(".crosssyofuckme, .crossfm").forEach(n=>{n.addEventListener("click",()=>{de()})});const S=document.getElementById("cross");if(!S){console.warn("Element with ID 'cross' not found.");return}S.addEventListener("click",function(n){n.preventDefault();const e="/";sessionStorage.setItem("isInternalNavigation","true"),console.log("Internal navigation state set in session s."),fetch(e,{mode:"no-cors"}).then(()=>console.log("Page preloaded:",e)).catch(()=>console.warn("Failed to preload page:",e)),S.style.pointerEvents="none",u.style.display="block",t.set(u,{top:"auto",bottom:0}),t.to(S,{opacity:0,duration:.2,ease:"power2.inOut",onComplete:()=>{S.style.display="none"}}),t.to(f,{opacity:0,y:-17,duration:.5,ease:"power3.inOut"}),t.to(u,{height:"100%",duration:1,ease:"power4.inOut",onComplete:()=>{window.location.href=e}})}),sessionStorage.getItem("isInternalNavigation")==="true"&&console.log("Page loaded via internal navigation.");const E=document.getElementById("lightbox"),B=document.getElementById("lightbox-image"),T=document.getElementById("naviga");let r=[],c=0;const i=document.createElement("div");i.style.position="fixed",i.style.bottom="20px",i.style.right="20px",i.style.color="#ffffffd6",i.style.letterSpacing="-1.5px",i.style.textStroke="-0.25px",i.style.fontSize="15px",i.style.fontFamily="Neueeigene",i.style.zIndex="1002",i.style.backgroundColor="#000000e6",i.style.paddingTop="3.5px",i.style.paddingBottom="1.5px",i.style.paddingLeft="8px",i.style.paddingRight="8px",i.style.opacity="0",i.style.borderRadius="5px",i.style.display="none",document.body.appendChild(i);function M(){i.textContent=`${c+1} / ${r.length}`,i.style.display="block",t.to(i,{opacity:1,duration:.5,ease:"power2.in"})}function X(n){if(E.style.display==="flex")switch(n.key){case"ArrowRight":_();break;case"ArrowLeft":J();break;case"Escape":N();break}}document.querySelectorAll(".image-container img").forEach(n=>{n.addEventListener("mouseover",e=>{const s=e.target.src.replace("/rauber-thumb/rauber-thumb-","/rauber-full/rauber-full-"),d=new Image;d.src=s,d.onload=()=>{const o=e.target.cloneNode(!0);o.src=s,o.style.position="absolute",o.style.top="-9999px",o.style.left="-9999px",o.style.width="auto",o.style.height="auto",o.style.visibility="hidden",o.style.pointerEvents="none",document.body.appendChild(o)}}),n.addEventListener("click",e=>{e.target.style.visibility="hidden";const s=e.target.closest(".image-container");r=Array.from(s.querySelectorAll("img"));const d=e.target.src.replace("/rauber-thumb/rauber-thumb-","/rauber-full/rauber-full-");c=r.map(W=>W.src.replace("/rauber-thumb/rauber-thumb-","/rauber-full/rauber-full-")).indexOf(d),M(),B.src=d,t.to(T,{opacity:0,duration:.5,ease:"power2.in",onComplete:()=>{T.style.display="none"}});const o=e.target.cloneNode(!0);o.src=d;const p=e.target.getBoundingClientRect();o.style.position="fixed",o.style.top=`${p.top}px`,o.style.left=`${p.left}px`,o.style.width=`${p.width}px`,o.style.height=`${p.height}px`,o.style.zIndex="99999999999999999999999999999999999999999999999999",o.style.transition="none",o.style.objectFit="contain",o.style.visibility="hidden",o.style.pointerEvents="none",document.body.appendChild(o),requestAnimationFrame(()=>{o.style.visibility="visible",t.to(o,{top:`${(window.innerHeight-window.innerHeight*.9)/2}px`,left:`${(window.innerWidth-window.innerWidth*.9)/2}px`,width:"90%",height:"90%",duration:.5,ease:"power2.out",onComplete:()=>{E.style.display="flex",E.style.opacity="1",document.body.removeChild(o),document.addEventListener("keydown",X)}})})})});function N(){const n=B.getBoundingClientRect(),e=B.cloneNode(!0),s=B.src.replace("/rauber-thumb/rauber-Thumb-","/rauber-full/rauber-full-");e.src=s,document.body.appendChild(e),e.style.position="fixed",e.style.top=`${n.top}px`,e.style.left=`${n.left}px`,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,e.style.zIndex="999999999999999999999999999999999999999999999999991",e.style.objectFit="contain";const d=Array.from(document.querySelectorAll(".image-container img")).find(p=>p.src.replace("/rauber-thumb/rauber-thumb-","/rauber-full/rauber-full-")===s),o=d.getBoundingClientRect();t.to(e,{top:`${o.top}px`,left:`${o.left}px`,width:`${o.width}px`,height:`${o.height}px`,duration:.5,ease:"power2.inOut",onComplete:()=>{document.body.removeChild(e),t.to(i,{opacity:0,duration:.5}),d.style.visibility="visible",d.style.opacity="1"}}),t.to(i,{opacity:0,duration:.5,ease:"power2.in",onComplete:()=>{i.style.display="none"}}),T.style.display="flex",t.to(T,{opacity:1,duration:.5,ease:"power2.in"}),E.style.display="none",document.removeEventListener("keydown",X)}function _(){if(r.length>0){r[c].style.visibility="visible",t.to(r[c],{opacity:1,duration:.2,ease:"power2.inOut"}),c=(c+1)%r.length,t.to(r[c],{opacity:0,duration:.2,ease:"power2.inOut",onComplete:()=>{r[c].style.visibility="hidden"}}),M();const n=r[c].src.replace("/rauber-thumb/rauber-thumb-","/rauber-full/rauber-full-");B.src=n;const e=document.createElement("img");e.src=r[(c+1)%r.length].src.replace("/rauber-thumb/rauber-thumb-","/rauber-full/rauber-full-"),document.body.appendChild(e),t.to(e,{top:"50%",left:"50%",width:"80%",height:"80%",duration:.5,ease:"power2.out"}),t.to(e,{opacity:0,duration:.5,onComplete:()=>{document.body.removeChild(e)}})}}function J(){if(r.length>0){r[c].style.visibility="visible",t.to(r[c],{opacity:1,duration:.2,ease:"power2.inOut"}),c=(c-1+r.length)%r.length,t.to(r[c],{opacity:0,duration:.2,ease:"power2.inOut",onComplete:()=>{r[c].style.visibility="hidden"}}),M();const n=r[c].src.replace("/rauber-thumb/rauber-thumb-","/rauber-full/rauber-full-");B.src=n;const e=document.createElement("img");e.src=r[(c-1+r.length)%r.length].src.replace("/rauber-thumb/rauber-thumb-","/rauber-full/rauber-full-"),document.body.appendChild(e),t.to(e,{top:"50%",left:"50%",width:"80%",height:"80%",duration:.5,ease:"power2.out"}),t.to(e,{opacity:0,duration:.5,onComplete:()=>{document.body.removeChild(e)}})}}E.addEventListener("click",n=>{if(n.target===E){N();return}const e=E.querySelector("img"),s=e.getBoundingClientRect(),d=s.width,o=s.height,p=e.naturalWidth,W=e.naturalHeight,K=d/p,U=o/W;let R=d,z=o,G=0,Q=0;K<U?(z=W*K,Q=(o-z)/2):(R=p*U,G=(d-R)/2);const F=n.clientX-s.left-G,Z=n.clientY-s.top-Q;F>=0&&F<=R&&Z>=0&&Z<=z?F>R/2?_():J():N()})});
