import"./main-29186016.js";import{S as c,M as K}from"./MotionPathPlugin-b3c4f2d8.js";import{g as r}from"./index-794e919d.js";import"./browser-detect-98c422d3.js";import"./applystuff-ad9e8171.js";document.addEventListener("DOMContentLoaded",function(){const p=document.querySelector(".divoverpre"),S=document.querySelector(".div-block-28.a"),L=document.querySelector(".text-block-18"),T=document.querySelector(".div-block-14"),k=document.querySelector("#naviga"),y=document.querySelector(".interface.lskknlkcn");p.style.display="none",r.set(k,{opacity:0,y:10}),r.set(y,{opacity:0,y:10,display:"flex"}),r.to([k,y],{opacity:1,y:0,duration:.5,ease:"power2.inOut"}),r.to(L,{opacity:1,duration:.1,ease:"power1.inOut"}),r.to(T,{opacity:1,duration:1,delay:.25,ease:"power4.inOut"}),setTimeout(()=>{p.style.display="flex",r.to(S,{opacity:1,duration:1,ease:"power4.inOut"}),r.to(p,{opacity:1,duration:1,delay:.1,y:0,ease:"power4.inOut"})},7500),document.fonts.load("1em 'Neueeigene'").then(function(){setTimeout(function(){document.querySelectorAll(".hidden-text").forEach(t=>{t.style.opacity="1"})},100)}).catch(function(){}),r.registerPlugin(c,K);let q=document.querySelector("#vimeo-video1"),B=document.querySelector("#vimeo-video2"),V=document.querySelector("#vimeo-video3"),x=new Vimeo.Player(q),f=new Vimeo.Player(B),b=new Vimeo.Player(V);x.pause(),f.pause(),b.pause(),c.create({trigger:".home-scroll_text-item._1",start:"top top",end:"bottom top",scrub:1,onEnter:()=>{x.play(),f.play(),b.play()}});let A=document.querySelector("#vimeo-video1"),l=new Vimeo.Player(A);c.create({trigger:".home-scroll_text-item._5",start:"-100% 50%",end:"1200 50%",scrub:1,onUpdate:t=>{let e=t.progress;e<=.2?l.setVolume(e/.2):e<.5?l.setVolume(1):l.setVolume((1-e)/.5)},onEnter:()=>{l.setMuted(!1)},onLeave:()=>{l.setMuted(!0),l.setVolume(0)},onEnterBack:()=>{l.setMuted(!1)},onLeaveBack:()=>{l.setMuted(!0),l.setVolume(0)}});function C(t){r.to(`.home-scroll_img-item._${t}`,{ease:"none",x:-window.innerHeight*3,scrollTrigger:{trigger:`.home-scroll_text-item._${t}`,start:"top 300%",end:"top -300%",scrub:1}})}for(let t=1;t<=9;t++)C(t);const w=document.getElementById("click-audio"),P=document.getElementById("hover-audio"),O=[{className:"imageeoifnc",clickAudio:w,hoverAudio:P},{className:"divoverpre",clickAudio:w,hoverAudio:null}];function U(t){t.clickAudio.currentTime=0,t.clickAudio.play()}function H(t){t.hoverAudio&&t.hoverAudio.play()}function R(t){t.hoverAudio&&(t.hoverAudio.pause(),t.hoverAudio.currentTime=0)}O.forEach(t=>{const e=document.querySelector(`.${t.className}`);e&&(t.clickAudio&&e.addEventListener("click",()=>U(t)),t.hoverAudio&&(e.addEventListener("mouseover",()=>H(t)),e.addEventListener("mouseleave",()=>R(t))))});function W(){document.documentElement.scrollHeight}window.addEventListener("scroll",W);function i(t,e,o,_=""){r.to(".newpinleipzig",{motionPath:{path:"#wegpfadid",align:"#wegpfadid",alignOrigin:[.5,.98],start:e,end:o},scrollTrigger:{trigger:t,start:"-50% 95%",end:"center 95%",scrub:!0,id:_,immediateRender:!1}})}i(".home-scroll_text-item._1",0,.0085),i(".home-scroll_text-item._2",.0085,.0165),i(".home-scroll_text-item._4",.0165,.0265,"third"),i(".home-scroll_text-item._5",.0265,.0332,"fourth"),i(".home-scroll_text-item._6",.0332,.0375,"fifth"),i(".home-scroll_text-item._7",.0375,.0535),i(".home-scroll_text-item._8",.0535,.0565),i(".home-scroll_text-item._9",.0565,.0635),i(".home-scroll_text-item._10",.0635,.0665),i(".home-scroll_text-item._15",.0665,.0765);function z(t,e,o,_,G,J){let h={value:e};r.to(h,{value:o,scrollTrigger:{trigger:_,start:"-50% 95%",end:"center 95%",scrub:G,id:J,onEnter:()=>I(t,h,e),onLeaveBack:()=>I(t,h,e)},onUpdate:function(){document.querySelector(t).textContent=Math.floor(h.value)}})}function I(t,e,o){e.value=o,document.querySelector(t).textContent=Math.floor(e.value)}[{target:".tagecount",start:0,end:3,trigger:".home-scroll_text-item._1",scrub:1,markerId:"tage"},{target:".kmcount",start:0,end:46,trigger:".home-scroll_text-item._1",scrub:1,markerId:"km"},{target:".coordi-1",start:5130814,end:5108788,trigger:".home-scroll_text-item._1",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1237803,end:1251922,trigger:".home-scroll_text-item._1",scrub:1,markerId:"coordi-2"},{target:".tagecount",start:3,end:4,trigger:".home-scroll_text-item._2",scrub:1,markerId:"tage"},{target:".kmcount",start:46,end:56,trigger:".home-scroll_text-item._2",scrub:1,markerId:"km"},{target:".coordi-1",start:5108788,end:5106648,trigger:".home-scroll_text-item._2",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1251922,end:1263877,trigger:".home-scroll_text-item._2",scrub:1,markerId:"coordi-2"},{target:".tagecount",start:4,end:4,trigger:".home-scroll_text-item._3",scrub:1,markerId:"tage"},{target:".kmcount",start:56,end:58,trigger:".home-scroll_text-item._3",scrub:1,markerId:"km"},{target:".coordi-1",start:5106648,end:5100364,trigger:".home-scroll_text-item._3",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1263877,end:1264062,trigger:".home-scroll_text-item._3",scrub:1,markerId:"coordi-2"},{target:".tagecount",start:4,end:4,trigger:".home-scroll_text-item._4",scrub:1,markerId:"tage"},{target:".kmcount",start:56,end:68,trigger:".home-scroll_text-item._4",scrub:1,markerId:"km"},{target:".coordi-1",start:5100364,end:5093187,trigger:".home-scroll_text-item._4",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1264062,end:1271301,trigger:".home-scroll_text-item._4",scrub:1,markerId:"coordi-2"},{target:".tagecount",start:4,end:4,trigger:".home-scroll_text-item._5",scrub:1,markerId:"tage"},{target:".kmcount",start:68,end:77,trigger:".home-scroll_text-item._5",scrub:1,markerId:"km"},{target:".coordi-1",start:5093187,end:5092404,trigger:".home-scroll_text-item._5",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1271301,end:1277728,trigger:".home-scroll_text-item._5",scrub:1,markerId:"coordi-2"},{target:".tagecount",start:4,end:4,trigger:".home-scroll_text-item._6",scrub:1,markerId:"tage"},{target:".kmcount",start:77,end:85,trigger:".home-scroll_text-item._6",scrub:1,markerId:"km"},{target:".coordi-1",start:5092404,end:5088827,trigger:".home-scroll_text-item._6",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1277728,end:1283811,trigger:".home-scroll_text-item._6",scrub:1,markerId:"coordi-2"},{target:".tagecount",start:4,end:6,trigger:".home-scroll_text-item._7",scrub:1,markerId:"tage"},{target:".kmcount",start:85,end:121,trigger:".home-scroll_text-item._7",scrub:1,markerId:"km"},{target:".coordi-1",start:5088827,end:5082190,trigger:".home-scroll_text-item._7",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1283811,end:1313869,trigger:".home-scroll_text-item._7",scrub:1,markerId:"coordi-2"},{target:".tagecount",start:6,end:6,trigger:".home-scroll_text-item._8",scrub:1,markerId:"tage"},{target:".kmcount",start:121,end:135,trigger:".home-scroll_text-item._8",scrub:1,markerId:"km"},{target:".coordi-1",start:5082190,end:5083194,trigger:".home-scroll_text-item._8",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1313869,end:1333356,trigger:".home-scroll_text-item._8",scrub:1,markerId:"coordi-2"},{target:".tagecount",start:6,end:7,trigger:".home-scroll_text-item._9",scrub:1,markerId:"tage"},{target:".kmcount",start:135,end:148,trigger:".home-scroll_text-item._9",scrub:1,markerId:"km"},{target:".coordi-1",start:5083194,end:5080267,trigger:".home-scroll_text-item._9",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1333356,end:1349375,trigger:".home-scroll_text-item._9",scrub:1,markerId:"coordi-2"},{target:".tagecount",start:7,end:7,trigger:".home-scroll_text-item._10",scrub:1,markerId:"tage"},{target:".kmcount",start:148,end:157,trigger:".home-scroll_text-item._10",scrub:1,markerId:"km"},{target:".coordi-1",start:5080267,end:5079368,trigger:".home-scroll_text-item._10",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1349375,end:1351676,trigger:".home-scroll_text-item._10",scrub:1,markerId:"coordi-2"},{target:".tagecount",start:7,end:7,trigger:".home-scroll_text-item._11",scrub:1,markerId:"tage"},{target:".kmcount",start:157,end:158,trigger:".home-scroll_text-item._11",scrub:1,markerId:"km"},{target:".coordi-1",start:5079368,end:5077831,trigger:".home-scroll_text-item._11",scrub:1,markerId:"coordi-1"},{target:".coordi-2",start:1351676,end:1353448,trigger:".home-scroll_text-item._11",scrub:1,markerId:"coordi-2"}].forEach(t=>{const e={...t};z(e.target,e.start,e.end,e.trigger,e.scrub,e.markerId)});const v=r.timeline({scrollTrigger:{trigger:".home-scroll_text-item._11",start:"top 100%",end:"top -325%",scrub:1}});v.fromTo(".home-scroll_img-item._11",{opacity:0},{opacity:1,duration:.5}),v.from(".home-scroll_img._12.first",{width:0,duration:1}),v.to(".home-scroll_img-item._11",{opacity:0,duration:.5}).to(".home-scroll_img._12.new",{opacity:0,duration:.5},"<");const N=document.querySelector(".home-scroll_img-item._10").offsetWidth,D=(window.innerWidth-N)/2,E=r.timeline({scrollTrigger:{trigger:".home-scroll_text-item._10",start:"top 275%",end:"top -325%",scrub:1}});E.to(".home-scroll_img-item._10",{x:D}),E.to(".home-scroll_img-item._10",{opacity:0}),r.timeline({scrollTrigger:{trigger:".home-scroll_text-item._14",start:"top 100%",end:"bottom -25%",scrub:1}}).fromTo(".home-scroll_img-item._14",{opacity:0},{opacity:1}).to(".home-scroll_img-item._14",{x:-window.innerWidth*1.2,ease:"power3.in"}),c.refresh(),r.to(".home-scroll_img-item._15",{ease:"none",x:-window.innerHeight*0,scrollTrigger:{trigger:".home-scroll_text-item._15",start:"top 225%",end:"top -0%",scrub:1}});let $=document.querySelector("#vimeo-video2"),a=new Vimeo.Player($);c.create({trigger:".home-scroll_text-item._10",start:"-100% 50%",end:"1500 50%",scrub:1,onUpdate:t=>{let e=t.progress;e<=.2?a.setVolume(e/.2):e<.5?a.setVolume(1):a.setVolume((1-e)/.5)},onEnter:()=>{a.setMuted(!1)},onLeave:()=>{a.setMuted(!0),a.setVolume(0)},onEnterBack:()=>{a.setMuted(!1)},onLeaveBack:()=>{a.setMuted(!0),a.setVolume(0)}});let X=document.querySelector("#vimeo-video3"),n=new Vimeo.Player(X);c.create({trigger:".home-scroll_text-item._14",start:"-100% 50%",end:"1200 50%",scrub:1,onUpdate:t=>{let e=t.progress;e<=.2?n.setVolume(e/.2):e<.5?n.setVolume(1):n.setVolume((1-e)/.5)},onEnter:()=>{n.setMuted(!1)},onLeave:()=>{n.setMuted(!0),n.setVolume(0)},onEnterBack:()=>{n.setMuted(!1)},onLeaveBack:()=>{n.setMuted(!0),n.setVolume(0)}});let g=document.querySelector("#winter"),M=document.querySelector(".divoverpre"),j=document.getElementById("my-buttonp1");M.addEventListener("click",()=>{r.to(M,{duration:.5,opacity:0,display:"none",onComplete:()=>{g.play(),g.volume=0,r.to(g,{duration:2,volume:.5,ease:"power1.inOut",onComplete:()=>{g.volume=.5}})}})}),j.addEventListener("click",()=>{r.to(g,{duration:2,volume:0,ease:"power1.inOut",onComplete:()=>{g.pause(),g.currentTime=0}})});let m=document.querySelector("#nachtg");c.create({trigger:".home-scroll_text-item._11",start:"top 100%",end:"bottom -0%",scrub:1,onUpdate:t=>{let e=t.progress;e<=.3?m.volume=Math.max(0,Math.min(e/.3,1)):e>.3&&e<.6?m.volume=1:e>=.6&&(m.volume=Math.max(0,Math.min((1-e)/.3,1)))},onEnter:()=>{m.play()},onLeave:()=>{m.pause(),m.volume=0},onEnterBack:()=>{m.play()},onLeaveBack:()=>{m.pause(),m.volume=0}});let s=document.querySelector("#vogelg");c.create({trigger:".home-scroll_text-item._14",start:"top 125%",end:"bottom -125%",scrub:1,onUpdate:t=>{let e=t.progress;e<=.2?s.volume=Math.max(0,Math.min(e/.2,1)):e>.2&&e<.4?s.volume=1:e>=.4&&(s.volume=Math.max(0,Math.min((1-e)/.3,1)))},onEnter:()=>{s.play()},onLeave:()=>{s.pause(),s.volume=0},onEnterBack:()=>{s.play()},onLeaveBack:()=>{s.pause(),s.volume=0}});let d=document.querySelector("#schritte1");c.create({trigger:".wrappermain",start:"bottom 75%",end:"bottom -600%",scrub:1,onUpdate:t=>{let e=t.progress;e<=.2?d.volume=Math.max(0,Math.min(e/.2,1)):e>.2&&e<.6?d.volume=1:e>=.6&&(d.volume=Math.max(0,Math.min((1-e)/.2,1)))},onEnter:()=>{d.play()},onLeave:()=>{d.pause(),d.volume=0},onEnterBack:()=>{d.play()},onLeaveBack:()=>{d.pause(),d.volume=0}});let u=document.querySelector("#schritte1");c.create({trigger:".wrappermain",start:"bottom -690%",end:"bottom -1150%",scrub:1,onUpdate:t=>{let e=t.progress;e<=.2?u.volume=Math.max(0,Math.min(e/.2,1)):e>.2&&e<.6?u.volume=1:e>=.6&&(u.volume=Math.max(0,Math.min((1-e)/.2,1)))},onEnter:()=>{u.play()},onLeave:()=>{u.pause(),u.volume=0},onEnterBack:()=>{u.play()},onLeaveBack:()=>{u.pause(),u.volume=0}}),document.getElementById("my-buttonp1").addEventListener("click",function(t){t.preventDefault(),setTimeout(function(){window.location.href="/how-to-leave-town-p2"},1275)});function F(){window.addEventListener("resize",function(){const t=document.getElementById("resize-popup"),e=document.getElementById("downcount");t.style.display="block";let o=3;const _=setInterval(function(){e.textContent=o,o--,o<0&&(clearInterval(_),location.reload())},1e3)})}F(),window.onload=function(){window.scrollTo(0,0),"scrollRestoration"in history&&(history.scrollRestoration="manual"),document.body.style.overflow="hidden";const t=document.getElementById("closeModal");t.onclick=function(){document.body.style.overflow="auto"}},document.addEventListener("scroll",()=>{const t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.scrollHeight,o=document.documentElement.clientHeight;t<=0&&(document.documentElement.scrollTop=0,document.body.scrollTop=0),t+o>=e&&(document.documentElement.scrollTop=e-o,document.body.scrollTop=e-o)})});
