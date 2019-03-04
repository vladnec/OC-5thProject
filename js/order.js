// import 
	import {CART} from './cart.js';
	import {header} 	from '../views/singleItem.js'
	import {footer} 	from '../views/singleItem.js'
	import {renderTemplate} from '../views/singleItem.js'
	// import {cartFooter} from '../views/singleItem.js'
	import {cartHeader} from '../views/singleItem.js'
	import {cartTemplate} from '../views/singleItem.js'


// when page loads 
	document.addEventListener('DOMContentLoaded',()=>{
	    // when the page is ready
	    // get items from localStorage
	    CART.init();
	    CART.getTotal();
	    // display items
	    showCart();
	});



function showCart(){
	let cart = document.getElementById('cart'); 
	let objects = CART.sort('name');
	let cartHTML = '';
	for (let object of objects){
		let productHTML = renderTemplate(cartTemplate, object);
		cartHTML += productHTML
	}

	cart.innerHTML = `<nav class="navbar">
		<div class="container">
			<a class="navbar-brand" href="index.html">TeddyStore</a>
			<div class="navbar-right">
				<a href="cart.html"><div class="container minicart"></div></a>
			</div>
		</div>
	</nav>

	<div class="container cart">
		
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-lg-12 col-m-12 text-center">
				<div class="page-header">
					<h1>Your Shopping Cart<small> That little bucket of joy</small></h1>
				</div>
			</div>
		</div>
		<table>
		<tr>
			<th>Image</th>
			<th>Name</th>
			<th>Price</th>
			<th>Increase</th>
			<th>Qty</th>
			<th>Decrease</th>
			<th></th>
			<th></th>
		</tr>` + cartHTML +    
			`<tr>
	       	<th></th>
	       	<th></th>
	       	<th></th>
	       	<th></th>
	       	<th></th>
	       	<th></th>
	       	<th></th>
	       	<th></th>
	       	<th>${CART.total}</th>
	       </tr>
	    	</table>
	     	<div class="pull-left" id="remove-all">Empty Cart</div>
	     	<form>
			<div class="form-row">
			  	 <div class="form-group col-md-6">
				    <label for="firstName">First Name</label>
				    <input type="text" class="form-control" id="firstName" placeholder="Enter First Name">
				  </div>
				  <div class="form-group col-md-6">
				    <label for="lastName">Last Name</label>
				    <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name">
				  </div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="inputAddress">Address</label>
			    	<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
				</div>
				<div class="form-group col-md-6">
					<label for="inputCity">City</label>
			      	<input type="text" class="form-control" id="inputCity" placeholder="e.g. Boston">
				</div>
			</div>			 
			<div class="form-group">
			   	<label for="inputEmail4">Email</label>
			   	<input type="email" class="form-control" id="inputEmail4" placeholder="Email">
			</div>
			  <button type="submit" class="btn btn-primary">Confirm Order!</button>
			</form>

	      </div>
    	</div> `;

	 let increaseButton = document.getElementsByClassName('increase');
	 for(var i=0 ; i < increaseButton.length ; i++){
	 	increaseButton[i].addEventListener('click', increaseCart)
	 }

	 let decreaseButton = document.getElementsByClassName('decrease');
	 for(var i=0 ; i < decreaseButton.length ; i++){
	 	decreaseButton[i].addEventListener('click', decreaseCart)
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



	


