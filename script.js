(()=>{"use strict";
const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".site-nav");
if(!menu||!nav)return;
const close=()=>{menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Open menu");nav.classList.remove("open");document.body.classList.remove("menu-open")};
menu.addEventListener("click",()=>{
const open=menu.getAttribute("aria-expanded")!=="true";
menu.setAttribute("aria-expanded",String(open));
menu.setAttribute("aria-label",open?"Close menu":"Open menu");
nav.classList.toggle("open",open);
document.body.classList.toggle("menu-open",open);
});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",close));
document.addEventListener("keydown",event=>{if(event.key==="Escape")close()});
document.addEventListener("pointerdown",event=>{if(nav.classList.contains("open")&&!nav.contains(event.target)&&!menu.contains(event.target))close()});
const largeScreen=window.matchMedia("(min-width:861px)");
const onBreakpoint=()=>{if(largeScreen.matches)close()};
largeScreen.addEventListener?.("change",onBreakpoint);
})();