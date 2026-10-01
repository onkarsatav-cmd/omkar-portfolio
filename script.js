const menu=document.getElementById("menu"),nav=document.getElementById("navLinks");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.style.opacity=1}),{threshold:.12});
document.querySelectorAll(".section,.contact").forEach(el=>{el.style.opacity=0;el.style.transition="opacity .7s ease";observer.observe(el)});
