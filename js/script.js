// import 

	import {CART} 		from './cart.js';
	import {header} 	from '../views/singleItem.js'
	import {footer} 	from '../views/singleItem.js'
	import {gridTemplate} from '../views/singleItem.js'
	import {renderTemplate} from '../views/singleItem.js'
	// import {singleItem} from '../views/singleItem.js'

// export PRODUCTS 


	export let PRODUCT = [];


// when page loads 
	document.addEventListener('DOMContentLoaded',()=>{
	    // when the page is ready
	    getData(showData, errorMessage);
	    //
	    CART.init();
	});


// take the url from the URL path
	let params = new URLSearchParams(document.location.search);
	var currentPage = document.location.href.substring(document.location.href.lastIndexOf("/")+1, document.location.href.length);
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
		PRODUCT = items;
		// console.log(teddybears);
		if(productID === null) {
		let gridHTML = ''
		for (let product of items){
				let productHTML = renderTemplate(gridTemplate, product);
				gridHTML += productHTML
			}
		 products.innerHTML = header + gridHTML + footer;

		} else {
			// display content
			// var teddyHTML = renderTemplate(singleItem, items)
			// console.log(items);
			products.innerHTML = header + `
				<div class="row">
					<div class="col-xs-4 col-sm-4 col-m-4 col-lg-4">
						<img class="w-100" src=" ${items.imageUrl}">
					</div>
					<div class="col-xs-8 col-sm-8 col-m-8 col-lg-8">
						<h5> ${items.name} </h5>
						<p> ${items.description}</p>	
						<span> ${items.price} $ </span>
						<div class="options">
							<label>Color :</label>
							<select id="item_color">
								<option value="${items.colors[0]}">${items.colors[0]}</option>
								<option value="${items.colors[1]}">${items.colors[1]}</option>
								<option value="${items.colors[2]}">${items.colors[2]}</option>
							</select>
						</div>
						<button class="btn buy pull-right" data-id="${items._id}" id="buy">Buy</button>
				 	</div>
				</div>
			</div>`
		 + footer;
		 	var colorValue = document.getElementById('item_color')
		 	colorValue.addEventListener('change', function(){
		 	});
			var button = document.getElementById('buy');
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
		console.log('added to cart', id);
		CART.add(id,1);

	}

