const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav= document.getElementById('navbar');
let btn = document.getElementById("btn");

let btnIcon = document.getElementById("btnIcon");

btn.onclick = function(){
   document.body.classList.toggle("dark-theme");
   if(document.body.classList.contains("dark-theme")){
      btnIcon.src ="sun1.png";
      
   }else{
      btnIcon.src ="moon1.png";
     
   }

}

if(bar){
   bar.addEventListener('click', ()=>{
    nav.classList.add('active');
   })
}
if(close){
    bar.addEventListener('click', ()=>{
     nav.classList.remove('active');
    })
 }

