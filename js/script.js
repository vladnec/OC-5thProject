
// trigger this function as soon as page loads.
document.addEventListener('DOMContentLoaded',()=>{
    getProducts(listProducts,errorMessage);
});


// request the list of products from the server
function getProducts(succes,failure){
    
    const URL = "https://ghibliapi.herokuapp.com/films";
    fetch(URL,{
        method:'GET',
        mode:'cors'
    })
    .then(response=>response.json())
    .then(succes)
    .catch(failure)
}
// display list of products
function listProducts(products){

    let productList = document.getElementById('products');
    productList.innerHTML = /*html*/`
            <div class="container">
            <h1 class="text-center">Product Grid</h1>
             <hr>
            <div class="row">
    
                    ${ products.map(product => 
                    /*html*/`<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 product-grid">
                                <div class="image">
                                    <a href= ./productdetails/?productID=${product.id}/>
                                        <img src="https://i.ytimg.com/vi/lEWCZLOsP4U/maxresdefault.jpg" class="w-100">
                                        <div class="overlay">
                                            <Div class="detail">View Details</Div>
                                        </div>
                                    </a>
                                </div>
                                <h5 class="text-center">${product.title}</h5>
                                <h5>Price:$${product.price}</h5>
                            <a href="cart.html" class="btn buy">BUY</a>
                            </div>`
                        ).join('\n ')
                    }
            </div>
        </div>
         
        `;
}


//  standard errorMessage
function errorMessage(err){
    console.error(err);
}