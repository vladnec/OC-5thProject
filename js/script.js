// import 

	import {CART} 			from './cart.js';
	import {renderTemplate} from './utils.js'
	import {gridTemplate} 	from '../views/templates.js'
	import {productTemplate} from '../views/templates.js'
	import {headerTemplate} from '../views/templates.js'


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
		// check for productID param
		if(productID === null) {
		// iterate through items array and render gridTemplate
		let gridHTML = ''
		for (let product of items){
				let productHTML = renderTemplate(gridTemplate, product);
				gridHTML += productHTML
			}
		 header.innerHTML = headerTemplate
		 products.innerHTML =gridHTML;

		} else {
			//change the header title
			let header = document.querySelector('.header')
			header.innerHTML = items.name;
			
			// render the productTemplate 
			products.innerHTML =renderTemplate(productTemplate,items);
			
			//add event listener to #buy button 
			let button = document.querySelector('#buy');
			button.addEventListener('click',addItem);
			addColor(items);
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

	function addColor(product){	
			let colorSelect = document.querySelector('#item_color');
			let colors = product.colors;
			for(let i = 0 ; i<colors.length ; i++){
				let option = document.createElement('option');
				option.textContent = colors[i];
				option.setAttribute('value', colors[i]);
				colorSelect.appendChild(option);
			}
	}
