// import 
	import {CART} from './cart.js';
	import {header} 	from '../views/singleItem.js'
	import {footer} 	from '../views/singleItem.js'
	import {renderTemplate} from '../views/singleItem.js'
	import {cartFooter} from '../views/singleItem.js'
	import {cartHeader} from '../views/singleItem.js'
	import {cartTemplate} from '../views/singleItem.js'


// when page loads 
	document.addEventListener('DOMContentLoaded',()=>{
	    // when the page is ready
	    // get items from localStorage
	    CART.init();
	    // display items
	    showCart();
	});



function showCart(){
	let cart = document.getElementById('cart'); 
	let objects = CART.sort('name');
	let cartHTML = '';
	for (let product of objects){
		let productHTML = renderTemplate(cartTemplate, product);
		cartHTML += productHTML
	}

	cart.innerHTML = cartHeader + cartHTML + cartFooter + footer;
	console.log(CART.contents);


	    

	 let total = 0;
	 for(let x of CART.contents){
	 	total += x.subtotal ;
	 }
		console.log(total)

	 let increaseButton = document.getElementsByClassName('increase');
	 for(var i=0 ; i < increaseButton.length ; i++){
	 	increaseButton[i].addEventListener('click', incrementCart)
	 }

	 let decreaseButton = document.getElementsByClassName('decrease');
	 for(var i=0 ; i < decreaseButton.length ; i++){
	 	decreaseButton[i].addEventListener('click', decrementCart)
	 }

	 let emptyCart = document.getElementById('remove-all');
	 emptyCart.addEventListener('click', emptyCartFn);
	 
 	 let removeBtn = document.getElementsByTagName('i');
	 for(var i=0 ; i < removeBtn.length; i++){
	 	removeBtn[i].addEventListener('click',removeItem);
	 }



}











// === Additional Functions 

function emptyCartFn(ev){
	ev.preventDefault();
	CART.empty();
	showCart();

}
function removeItem(ev){
	ev.preventDefault();
	let id = ev.target.getAttribute('data-id');
	CART.remove(id);
	showCart();

}
function incrementCart(ev){
    ev.preventDefault();
    let id = ev.target.getAttribute('data-id');
    CART.increase(id, 1);
    showCart();

}
        
function decrementCart(ev){
    ev.preventDefault();
    let id = ev.target.getAttribute('data-id');
    CART.reduce(id, 1);
    showCart();
}



	


