document.addEventListener('DOMContentLoaded',()=>{
    // when the page is ready
    getData(showData, errorMessage)
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

function showData(items){
	let products = document.getElementById('app');
	if(productID === null) {
	 products.innerHTML = navbarTemplate + `
     <div class="container">
        <h1 class="text-center">Product Grid</h1>
         <hr>
        <div class="row">
                    ${ items.map(product => 
                    `<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 product-grid">
                        <div class="image">
                            <a href= index.html?productID=${product._id}/>
                                <img src="${product.imageUrl}" height="225px" width="340px">
                                <div class="overlay">
                                    <Div class="detail">View Details</Div>
                                </div>
                            </a>
                        </div>
                        <h5 class="text-center">${product.name}</h5>
                        <h5>Price:$${product.price}</h5>
                        <button class="btn buy" data-id="${product._id}" >Buy</button>
                    </div>`
                        ).join('\n ')
                    }
            </div>
        </div> `
	} else {
		var teddyHTML = renderTemplate(itemTemplate, items)
		products.innerHTML = navbarTemplate + teddyHTML;
	}
}

function errorMessage(err){
            //display the error message to the user
            console.error(err);
}


// === additional functions
function renderTemplate(htmlTemplate, obj) {
    // Define a regular expression that matches "{{ prop_name }}"
    var myregex = /\{\{\s*(\w+)\s*\}\}/g;
    // Replace all occurrences of "{{ prop_name }}" with obj.prop_name
    var newHtml = htmlTemplate.replace(myregex, function (match, p1) {
        return obj[p1];
    });
    return newHtml;
}

function getURL(link){
	if ( productID === null){
		return link
	} else {
		return link + productID;
	}
}


// ==== template section == /
var itemTemplate = `
	<div class="container">
	    <h1 class="text-center">Product Page</h1>
	    <hr>
	    <div class="box row">
	        <img src="{{ imageUrl }}" class="img col-xs-4 col-sm-4 col-m-4 col-lg-4" class="w-100">
	        <div class="desc col-xs-8 col-sm-8 col-m-8 col-lg-8">
	            <h2>{{ name }}</h2>
	            <p>{{ description }}</p>
	            <p>$ {{ price }}</p>
	            <button class="btn buy" data-id="{{ _id }}">Buy</button>
	        </div>
	    </div>
	</div> ` ;

var navbarTemplate = `
<nav class="navbar">
    <div class="container">
        <a class="navbar-brand" href="./index.html">TeddyStore</a>
        <div class="navbar-right">
            <a href="../cart.html"><div class="container minicart"></div></a>
        </div>
     </div>
</nav> ` ;