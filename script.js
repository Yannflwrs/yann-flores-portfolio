const works=[...document.querySelectorAll(".work")];
const box=document.querySelector(".lightbox");
const img=box.querySelector("img");
let current=0;

function show(i){
  current=(i+works.length)%works.length;
  const source=works[current].querySelector("img");
  img.src=source.src;
  img.alt=source.alt;
}
function openBox(i){
  show(i);
  box.classList.add("open");
  box.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}
function hideBox(){
  box.classList.remove("open");
  box.setAttribute("aria-hidden","true");
  img.src="";
  document.body.style.overflow="";
}
works.forEach((w,i)=>w.addEventListener("click",()=>openBox(i)));
box.querySelector(".close").addEventListener("click",hideBox);
box.querySelector(".prev").addEventListener("click",()=>show(current-1));
box.querySelector(".next").addEventListener("click",()=>show(current+1));
box.addEventListener("click",e=>{if(e.target===box)hideBox()});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")hideBox();
  if(e.key==="ArrowLeft")show(current-1);
  if(e.key==="ArrowRight")show(current+1);
});
