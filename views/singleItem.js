 export var singleItem = 
	 `;
		<div class="container" style=" display:block;">
			<div class="row">
				<div class="col-xs-4 col-sm-4 col-m-4 col-lg-4">
					<img class="w-100" src="{{ imageUrl }}">
				</div>
				<div class="col-xs-8 col-sm-8 col-m-8 col-lg-8">

						<h5> {{ name }} </h5>
						<p> {{ description }}</p>	
						<span> {{ price }} </span>
						<div class="qty">
							<label>QTY</label>
							<input class="item_quantity" type="number" value="1" min="1" step="1">
						</div>
						<div class="options">
							<label>Color</label>
							<select class="item_color">
								<option value="{{ colors[0] }}"> {{ colors }}</option>
								<option value="{{ colors[1] }}"> {{ colors }}</option>
								<option value="{{ colors[2] }}"> {{ colors }}</option>
							</select>
						</div>
						<button class="btn buy pull-right" data-id="{{ _id }}" onclick="addItem()" id="buy">Buy</button>
				</div>
			</div>
		</div> `


export var gridTemplate = 

	`<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 product-grid">
		                        <div class="image">
		                            <a href= index.html?productID={{ _id }}/>
		                                <img src="{{ imageUrl }}" class="w-100">
		                                <div class="overlay">
		                                    <Div class="detail">View Details</Div>
		                                </div>
		                            </a>
		                        </div>
		                        <h5 class="text-center">{{ name }}</h5>
		                        <h5>Price:{{ price }}</h5>
		                    </div>` ;


export var cartHeader = 
	`<nav class="navbar">
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
		</tr>` ;



export var cartTemplate = 	
	`
        	<tr>
        		<td><img src="{{ imageUrl }}" height="100px" width="200px"></td>
        		<td>{{ name }}</td>
        		<td>{{ price }}$</td>
        		<td><span class="increase" data-id= "{{ _id }}">+</span></td>
        		<td class="qty">{{ qty }}</td>
        		<td><span class="decrease" data-id= "{{ _id }}">-</span></td>
        		<td class="subtotal">{{ subtotal }}</td>
        		<td>
			          <i class="fas fa-times" data-id="{{ _id }}"></i>
        		</td>
        	</tr>

        	`

// export var cartFooter = `<tr>
	    //    	<th></th>
	    //    	<th></th>
	    //    	<th></th>
	    //    	<th></th>
	    //    	<th></th>
	    //    	<th></th>
	    //    	<th></th>
	    //    	<th></th>
	    //    	<th>${CART.total}</th>
	    //    </tr>

	    // </table>


	    //  <div class="pull-left" id="remove-all">Empty Cart</div>

	    //  `	     ; 

export function renderTemplate(htmlTemplate, obj) {
	    // Define a regular expression that matches "{{ prop_name }}"
	    var myregex = /\{\{\s*(\w+)\s*\}\}/g;
	    // Replace all occurrences of "{{ prop_name }}" with obj.prop_name
	    var newHtml = htmlTemplate.replace(myregex, function (match, p1) {
	        return obj[p1];
	    });
	    return newHtml;
	}

export var header = 
	`
	<nav class="navbar">
	    <div class="container">
	        <a class="navbar-brand" href="./index.html">TeddyStore</a>
	        <div class="navbar-right">
	            <a href="./cart.html"><div class="container minicart"></div></a>
	        </div>
	     </div>
	</nav>
    <div class="container">
    	<h1 class="text-center">Hei</h1>
        <hr>
        <div class="row"> `
 ;

export var footer = 

		`</div>
    	</div> `