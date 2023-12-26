const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav= document.getElementById('navbar');


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
// function showSidebar(){
//    const sidebar = document.querySelector('.sidebar')
// }
const cart = {
   items: [],
   addItem: function (id, name, price) {
     this.items.push({ id, name, price });
     this.updateCart();
   },
   updateCart: function () {
     const cartItemsElement = document.getElementById('pro');
     cartItemsElement.innerHTML = '';

     this.items.forEach(item => {
       const li = document.createElement('li');
       li.textContent = `${item.name} - $${item.price}`;
       cartItemsElement.appendChild(li);
     });
   }
   
 };
 function addToCart(button) {
   const productElement = button.closest('.pro');
   const id = productElement.getAttribute('data-id');
   const name = productElement.getAttribute('data-name');
   const price = productElement.getAttribute('data-price');

   cart.addItem(id, name, price);
 }
