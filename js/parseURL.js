// take new param 

let params = new URLSearchParams(document.location.search);
let productID = params.get("productID");
var url = 'https://ghibliapi.herokuapp.com/films/' + productID




var request = new XMLHttpRequest();
request.open('GET', url, true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  console.log(data.title);
  // Check if request is succesfull
  if (request.status >= 200 && request.status < 400) {
  // display data 

  	let productDisplay = document.getElementById('products');
  	
  	const container = document.createElement('div');
  	container.setAttribute('class','container');
  	productDisplay.appendChild(container);
  	
  	var pageTitle = document.createElement('h1');
  	pageTitle.setAttribute('class','text-center');
  	pageTitle.innerHTML = "Product Page";
  	container.appendChild(pageTitle);

	var line = document.createElement('hr');
  	container.appendChild(line);
  	
  	var box = document.createElement('div');
  	box.setAttribute('class','box');
  	box.setAttribute('class','row');
  	container.appendChild(box);

  	var img = document.createElement('div');
  	img.setAttribute('class','img');
  	img.setAttribute('class','col-lg-4')
  	img.setAttribute('class','col-xs-4')
  	img.setAttribute('class','col-m-4')
  	img.setAttribute('class','col-sm-4')
  	box.appendChild(img);
  	img.innerHTML = "<img src=\"https://media.istockphoto.com/photos/beautiful-modern-retro-camera-picture-id180711999?s=2048x2048\" width=\'400px\' height=\'300px\'>"

  	var desc = document.createElement('div');
  	desc.setAttribute('class','desc');
  	desc.setAttribute('class','col-xs-8')
  	desc.setAttribute('class','col-sm-8')
  	desc.setAttribute('class','col-m-8')
  	desc.setAttribute('class','col-lg-8')
  	box.appendChild(desc);
  	
  	var title = document.createElement('h2');
  	title.innerHTML = data.title;
  	desc.appendChild(title);

  	var description = document.createElement('p');
  	description.innerHTML = data.description;
  	desc.appendChild(description);

  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`
  }
}

request.send();















































// document.addEventListener('DOMContentLoaded',()=>{
//     getProducts(listProducts,errorMessage);
// });


// request the list of products from the server
// function getProducts(succes,failure){
    
//     let URL = "https://ghibliapi.herokuapp.com/films/" + productID;
//     fetch(URL,{
//         method:'GET',
//         mode:'cors'
//     })
//     .then(response=>response.json())
//     .then(succes)
//     .catch(failure)
// }
// // display list of products
// function listProducts(products){

//     let productList = document.getElementById('products');
//     productList.innerHTML = /*html*/`
//             <div class="container">
//             <h1 class="text-center">Product Grid</h1>
//              <hr>
//             <div class="row">
    
//                     ${ products.map(product => 
//                     /*html*/`
//                             <p>${product.title}</p>`
//                         ).join('\n ')
//                     }
//             </div>
//         </div>
         
//         `;
// }


// //  standard errorMessage
// function errorMessage(err){
//     console.error(err);
// }