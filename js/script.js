document.addEventListener('DOMContentLoaded',()=>{
    // when the page is ready
    getData()
    // getProducts(listProducts,errorMessage);
    // get the cart items from localStorage
    // CART.init();
    // load the cart items    
});













async function getData(){
    let params = new URLSearchParams(document.location.search);
    let productID = params.get("productID");
    let url = 'http://localhost:3000/api/teddies/'
    if (productID === null) {
        let response = await fetch(url)
        let teddies = await response.json();
        let productList = document.getElementById('products');
        productList.innerHTML = /*html*/`

            <nav class="navbar">
                <div class="container">
                    <a class="navbar-brand" href="index.html">TeddyStore</a>
                    <div class="navbar-right">
                        <a href="cart.html"><div class="container minicart"></div></a>
                    </div>
                </div>
            </nav>


            <div class="container">
            <h1 class="text-center">Product Grid</h1>
             <hr>
            <div class="row">
    
                    ${ teddies.map(product => 
                    /*html*/`<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 product-grid">
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
        </div>
         
        `;
    } else {
        let response = await fetch(url + productID)
        let teddy = await response.json();
        console.log(teddy);
        let product = document.getElementById('product');
        product.innerHTML = /* html */`

        <nav class="navbar">
            <div class="container">
                <a class="navbar-brand" href="../index.html">TeddyStore</a>
                <div class="navbar-right">
                    <a href="../cart.html"><div class="container minicart"></div></a>
                </div>
            </div>
        </nav>
        <div class="container">
            <h1 class="text-center">Product Page</h1>
            <hr>
            <div class="box row">
                <img src="${teddy.imageUrl}" class="img col-xs-4 col-sm-4 col-m-4 col-lg-4" class="w-100">
                <div class="desc col-xs-8 col-sm-8 col-m-8 col-lg-8">
                    <h2>${teddy.name}</h2>
                    <p>${teddy.description}</p>
                    <p>${teddy.price}</p>
                    <button class="btn buy" data-id="${teddy._id}">Buy</button>
                </div>
            </div>
        </div>
        `
    }

   
}
let btn = document.getElementsByClassName('buy');
console.log(btn);

 // function addItem(ev){
 //            ev.preventDefault();
 //            let id = parseInt(ev.target.getAttribute('data-id'));
 //            console.log('add to cart item', id);
 //        }





