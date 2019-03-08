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


export var cartTemplate = `

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
	</div>
`


export function renderTemplate(htmlTemplate, obj) {
	    // Define a regular expression that matches "{{ prop_name }}"
	    var myregex = /\{\{\s*(\w+)\s*\}\}/g;
	    // Replace all occurrences of "{{ prop_name }}" with obj.prop_name
	    var newHtml = htmlTemplate.replace(myregex, function (match, p1) {
	        return obj[p1];
	    });
	    return newHtml;
	}
