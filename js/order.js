// import 
	import {CART} 			from './cart.js';
	import {cartTemplate} 	from '../views/templates.js'
	import {renderTemplate} from './utils.js'
	import {addAnimation} 	from './utils.js'
	import {validEmail} 	from './utils.js'

// when page loads 
	document.addEventListener('DOMContentLoaded',()=>{
	    // get items from localStorage
	    CART.init();
	    // 
	    CART.getTotal();
	    // display items
	    showCart();
	});

// render the cart

	function showCart(){
			let cart = document.querySelector('.products'); 
			let objects = CART.sort('name');
			let cartHTML = '';
			for (let object of objects){
				let productHTML = renderTemplate(cartTemplate, object);
				cartHTML += productHTML
			}
			cart.innerHTML = cartHTML
			addListeners();
	}
	
// form functionality buttons
	let firstName = document.getElementById('firstName');
	let lastName = document.getElementById('lastName');
	let inputAdress = document.getElementById('inputAdress');
	let inputCity = document.getElementById('inputCity');
	let inputEmail = document.getElementById('inputEmail');
	let submitBtn = document.getElementById('confirm');

// create object with form data and product and make POST request
	submitBtn.addEventListener('click', ($event) =>{
	 	$event.preventDefault();
	 	// create the array of products available in localStorage
	 	let productString = [];
		for(let obj of CART.contents){
			productString.push(obj._id);
		};

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
		// check if all the form fields are filled in
		if(firstName.value !== "" && lastName.value !== ""  && inputAddress.value !== "" && inputCity.value !== ""  && inputEmail.value !== ""){
			// check if CART.total is 0, meaning the user has not added products to the cart
			if(CART.total !== 0){
				// use validEmail const to test the mail the user has written	
				if(!validEmail.test(inputEmail.value)){
					addAnimation('#validEmail');
				} else {
					submitFormData(orderData);
				}
			} else {
				addAnimation('#haveToBuy');
			}
		} else {
			addAnimation('#fill');
		};
	});


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
		let orderConfirm = document.querySelector('.shopping_container');
		orderConfirm.innerHTML =`
		<div class="orderInfo">
			<h1>Thank you!</h1>
			<p class="centered">Your payment <b>$${CART.total}</b> has been processed successfully! An order confirmations has been send to:</p>
			<p><b>${data.contact.email}</b></p>
			<p>For your reference, your TeddyStore transaction ID is :</p>
			<p><b>${data.orderId}</b></p>
			<a href="index.html" class="btn btn-primary btn-sm">Continue Shopping</a>
		</div>`;
		CART.empty();
	}

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
	
	function addListeners(){
		let increaseButton = document.querySelectorAll('.increase');
		let decreaseButton = document.querySelectorAll('.decrease');
		let emptyCart = document.getElementById('remove-all');
		let removeBtn = document.querySelectorAll('.delete-btn');
		
		let totalPrice = document.querySelector('.total')
		totalPrice.innerHTML = 	`<p>Tax Rate:0</p><p>Tax:$0.00</p><p>Shipping:$0.00</p><p>Total:$${CART.total}</p>`
		for(let i=0 ; i < increaseButton.length ; i++){
		 increaseButton[i].addEventListener('click', increaseCart)};
		
		for(let i=0 ; i < decreaseButton.length ; i++){
		 decreaseButton[i].addEventListener('click', decreaseCart)};
	 	
		for(let i=0 ; i < removeBtn.length; i++){
		 removeBtn[i].addEventListener('click',removeItem);}	 

		emptyCart.addEventListener('click', emptyCartFn);
	}	

