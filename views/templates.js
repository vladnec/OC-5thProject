export const gridTemplate = `
	<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 product-grid">
		<div class="image">
			<a href= index.html?productID={{ _id }}/>
				<img src="{{ imageUrl }}" class="w-100 gridImg">
				<div class="overlay">
					<div class="btn-details detail">View Details</Div>
			 	</div>
			</a>
		</div>
		<div class="info-card">
			<img class="stars" src="./images/stars.png">
			<h6 class="text-right"> {{ price }}$ </h6> 
		</div>
		<h5>{{ name }}</h5>
	</div>  
	`;

export const productTemplate = `
	<div class="row product_row">
		<div class="col-xs-12 col-sm-12 col-md-5">
			<img class="d-block w-100" src=" {{ imageUrl }}">
		</div>
		<div class="col-xs-12 col-sm-12 col-md-7 info">
			<a href="index.html" class="close"><span aria-hidden="true"><i class="fas fa-times-circle"></i></span></a>
			<p class="new">NEW</p>
			<h2>Description</h2>
			<h6>{{ description }}</h6>
			<img class="stars" src="./images/stars.png">
			<p class="price">USD {{ price }} </p>
			<p><b>Availability:</b> In Stock</p>
			<p><b>Condition:</b> New</p>
			<label><b>Color</b> :</label>
			<select id="item_color">
			</select>
			<button class="btn btn-default cart" data-id="{{ _id}}" id="buy">ADD TO CART</button>					
		</div>
	</div>`;

export const cartTemplate = `
	<div class="product">
		<div class="buttons">
			<img src="./images/delete-icn.svg" alt="removeSign" class="delete-btn" data-id= "{{ _id }}"/>
		</div>
		<div class="cartImage"><img src="{{ imageUrl }}" height="80px" width="120px" id="image"> </div>
		<div class="description">
			<span> {{ name }}</span>
		</div>
		<div class="quantity">
			<button class="plus-qtyBtn increase" type="button" name="button" data-id= "{{ _id }}">
				<img src="./images/plus.svg" alt="plusSign" />
			</button>	
			<input type="text" name="name" value="{{ qty }}" data-id= "{{ _id }}">
			<button class="minus-qtyBtn decrease" type="button" name="button" data-id= "{{ _id }}">
				<img src="./images/minus.svg" alt="minusSign" />
			</button>
		</div>
		<div class="total-price">{{ subtotal }}$</div>
	</div>`;

export const headerTemplate = `
	<div class="jumbotron">
	       <div class="container">
	        <h1 class="display-4">Handmade Teddies</h2>
	        <p class="lead">Buy yours now!</p>
	    </div>
	</div>

	<div class="main-bar">
		<div class="container">
			<div class="row">
	    		<div class="col-lg-4 col-xs-4 icon icon1">
	       			<p>High Quality<br>
	       	 		Each is made from quality material for long life.</p>
	    		</div>
	        	<div class="col-lg-4 col-xs-4 icon icon2">
	            	<p>The perfect gift for any occasion<br>
	            	Everyone loves teddy bears!</p>
	        	</div>
	        	<div class="col-lg-4 col-xs-4 icon icon3">
	            	<p>Customize your own!<br>
	            	You'll find sorts of colors, shapes and sizes.</p>
	        	</div>      
	    	</div>
		</div>
	</div>`;