const trigger=document.getElementById("menu-trigger");
const overlay=document.getElementById("site-menu");
const close=document.getElementById("menu-close");
function setMenu(open){trigger.setAttribute("aria-expanded",String(open));trigger.setAttribute("aria-label",open?"Close menu":"Open menu");overlay.classList.toggle("open",open);overlay.setAttribute("aria-hidden",String(!open));document.body.classList.toggle("menu-open",open);if(open)close.focus();else trigger.focus();}
trigger.addEventListener("click",()=>setMenu(trigger.getAttribute("aria-expanded")!=="true"));
close.addEventListener("click",()=>setMenu(false));
overlay.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",()=>setMenu(false)));
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&trigger.getAttribute("aria-expanded")==="true")setMenu(false);});
const serviceRows=[...document.querySelectorAll(".service-row")];
if("IntersectionObserver"in window){const serviceObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("is-active");else entry.target.classList.remove("is-active");}),{threshold:.55});serviceRows.forEach(row=>serviceObserver.observe(row));}
const revealTargets=document.querySelectorAll(".section-title,.work-card,.about-copy,.toolkit-list>div,.contact-row");
if("IntersectionObserver"in window){const revealObserver=new IntersectionObserver((entries,observer)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});revealTargets.forEach(el=>{el.classList.add("reveal");revealObserver.observe(el);});}else revealTargets.forEach(el=>el.classList.add("visible"));
