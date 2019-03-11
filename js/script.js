// import 

	import {CART} 		from './cart.js';
	import {gridTemplate} from '../views/singleItem.js'
	import {renderTemplate} from '../views/singleItem.js'
	import {headerTemplate} from '../views/singleItem.js'


let PRODUCT = [];


// when page loads 
	document.addEventListener('DOMContentLoaded',()=>{
	    // when the page is ready
	    getData(showData, errorMessage);
	    //
	    CART.init();
	});


// take the url from the URL path
	let params = new URLSearchParams(document.location.search);
	let productID = params.get("productID");
	let url = 'http://localhost:3000/api/teddies/'
	


// === get data from API and display it
	function getData(success,failure){
		let URL = getURL(url);
		fetch(URL,{
			method:'GET',
			mode:'cors'
		})
		.then(response=>response.json())
		.then(success)
		.catch(err=>{
			failure(err.message);
		})

	}

	function showData( items ){
		let products = document.getElementById('app');
		let header = document.querySelector('#header');
		PRODUCT = items;
		if(productID === null) {
		let gridHTML = ''
		for (let product of items){
				let productHTML = renderTemplate(gridTemplate, product);
				gridHTML += productHTML
			}
		 header.innerHTML = headerTemplate
		 products.innerHTML =gridHTML;

		} else {
			let header = document.querySelector('.header')
			header.innerHTML = items.name;
			products.innerHTML =`
				
				<div class="row product_row">
					<div class="col-xs-12 col-sm-12 col-md-5">
						<img class="d-block w-100" src=" ${items.imageUrl}">
					</div>
					<div class="col-xs-12 col-sm-12 col-md-7 info">
					<a href="index.html" class="close"><span aria-hidden="true">&times;</span></a>
						<p class="new">NEW</p>
						<h2>Description</h2>
						<h6>${items.description}</h6>
						<img class="stars" src="./images/stars.png">
						<p class="price">USD ${items.price}$ </p>
						<p><b>Availability:</b> In Stock</p>
						<p><b>Condition:</b> New</p>
						
							<label><b>Color</b> :</label>
							<select id="item_color">
								<option value="${items.colors[0]}">${items.colors[0]}</option>
								<option value="${items.colors[1]}">${items.colors[1]}</option>
								<option value="${items.colors[2]}">${items.colors[2]}</option>
							</select>
							<button class="btn btn-default cart" data-id="${items._id}" id="buy">ADD TO CART</button>
						
						
					</div>
			</div>`;
			var button = document.querySelector('#buy');
			button.addEventListener('click',addItem);
		}
	}

	function errorMessage(err){
	            //display the error message to the user
	            console.error(err);
	}


// === additional functions


	function getURL(link){
		if ( productID === null){
			return link
		} else {
			return link + productID;
		}
	}



	function addItem(ev){
		ev.preventDefault();
		let id = ev.target.getAttribute('data-id');
		CART.add(id,PRODUCT);

	}
