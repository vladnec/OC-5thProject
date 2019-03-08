// import 
	import {CART} from './cart.js';
	import {renderTemplate} from '../views/singleItem.js'
	import {cartTemplate} from '../views/singleItem.js'


// when page loads 
	document.addEventListener('DOMContentLoaded',()=>{
	    // get items from localStorage
	    CART.init();
	    // 
	    CART.getTotal();
	    // display items
	    showCart();
	});

	function showCart(){
		let cart = document.querySelector('.products'); 
		let objects = CART.sort('name');
		let cartHTML = '';
		for (let object of objects){
			let productHTML = renderTemplate(cartTemplate, object);
			cartHTML += productHTML
		}
		cart.innerHTML = cartHTML

	// cart functionality

		// selecting the buttons
		let increaseButton = document.querySelectorAll('.increase');
		let decreaseButton = document.querySelectorAll('.decrease');
		let removeBtn = document.querySelectorAll('.delete-btn');
		
		let totalPrice = document.querySelector('.total')
		totalPrice.innerHTML = 'Total price: $' +CART.total;

		// adding Event Listeners
		for(var i=0 ; i < increaseButton.length ; i++){
		 increaseButton[i].addEventListener('click', increaseCart)};
		
		for(var i=0 ; i < decreaseButton.length ; i++){
		 decreaseButton[i].addEventListener('click', decreaseCart)};
	 	
		for(var i=0 ; i < removeBtn.length; i++){
		 removeBtn[i].addEventListener('click',removeItem);}	 
}


// variables
	let emptyCart = document.getElementById('remove-all');
	emptyCart.addEventListener('click', emptyCartFn);

// form functionality buttons
	let firstName = document.getElementById('firstName');
	let lastName = document.getElementById('lastName');
	let inputAdress = document.getElementById('inputAdress');
	let inputCity = document.getElementById('inputCity');
	let inputEmail = document.getElementById('inputEmail');
	let submitBtn = document.getElementById('confirm');

// create the array containing all CART.contents._id
	let productString = [];
		for(let obj of CART.contents){
			productString.push(obj._id);
		};

// create object with form data and product and make POST request
	submitBtn.addEventListener('click', ($event) =>{
	 	$event.preventDefault();

	 	const orderData = {
					contact : { 
						firstName: firstName.value,
						lastName : lastName.value,
						address: inputAddress.value,
						city: inputCity.value,
						email: inputEmail.value
					},
					products : productString
		}
		submitFormData(orderData);
	 });		

// additional functions 

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

	function increaseCart(ev){
	    ev.preventDefault();
	    let id = ev.target.getAttribute('data-id');
	    CART.increase(id, 1);
	    showCart();
	}
	        
	function decreaseCart(ev){
	    ev.preventDefault();
	    let id = ev.target.getAttribute('data-id');
	    CART.reduce(id, 1);
	    showCart();
	}

	function makeRequest(data){
		return new Promise((resolve,reject)=>{
			let request = new XMLHttpRequest();
			request.open('POST', 'http://localhost:3000/api/teddies/order');
			request.onreadystatechange = () =>{
				if(request.readyState ===4) {
					if(request.status === 201){
						resolve(JSON.parse(request.response));
					} else {
						reject(JSON.parse(request.response));
					}
				}
			};
			request.setRequestHeader('Content-Type', 'application/json');
			request.send(JSON.stringify(data));
		});
	}

	async function submitFormData(post){
	  try {
	    const requestPromise = makeRequest(post);
	    const response = await requestPromise;
	    postOrderData(response);
	  }
	  catch(errorResponse) {
	    console.log(errorResponse);
	  }
	}

	function postOrderData(data){
		let orderConfirm = document.getElementById('cart'); 
		orderConfirm.innerHTML =
		`<div class="orderInfo">
			<p>Thank you for your order, your order Id is ${data.orderId}</p>
			<p>Order total $<strong>${CART.total}<strong></p>
		</div>`;
		CART.empty();
	}
	