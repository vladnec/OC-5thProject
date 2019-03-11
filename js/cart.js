export function addAnimation(x){
		let note = document.querySelector(x);
		note.style.animationName = "slideDown";
		setTimeout(function(){
        	note.style.animationName = null;
        }, 1800);
	}

export const CART = {
	        KEY: "storedProducts",
	        contents:[],
	        total:0,
	        
	        init(){
	        	// check localStorage and initialize the contents of CART.contents
	        	let _contents = localStorage.getItem(CART.KEY)
	        	if (_contents){
	        		CART.contents = JSON.parse(_contents);
	        	} else {
	        		CART.contents = [];
	        		CART.sync();
	        	}
	        },
	       
	        sync(){
	        	let _cart =JSON.stringify(CART.contents);
	        	localStorage.setItem(CART.KEY, _cart);
	        },
	        
	        find(id){
	        	// find an item in the cart by it's id
	        	let match = CART.contents.filter(item=>{
	        		if(item._id === id)
	        			return true;
	        	});
	        	if(match && match[0])
	        		return match[0];
	        },
	        
	        add(id, prodData){
	        	if(CART.find(id)){
	        		CART.increase(id,1);
	        		addAnimation('#added');
	        	}
	        	else {
	        		if (prodData._id === id){
	        			let obj = {
	        				_id:prodData._id,
	        				name:prodData.name,
	        				qty:1,
	        				subtotal:prodData.price,
	        				// color:selectedColor,
	        				price:prodData.price,
	        				description:prodData.description,
	        				imageUrl:prodData.imageUrl
	        			}
	        			CART.contents.push(obj);
	        			addAnimation('#added');
	        			// update localStorage
	        			CART.sync();
	        			CART.getTotal();


	        		} else {
	        			// product id does not exist in products data
	        			console.error('invalid product');
	        		}
	        	}
	        },
	        
	        increase(id,qty=1){
	        	// increase the quantity of an item in the cart
	        	CART.contents = CART.contents.map(item=>{
	        		if(item._id === id)
	        			item.qty = item.qty + qty;
	        			item.subtotal = item.qty * item.price
	        		return item
	        	});
	        	// update localStorage
	        	CART.sync();
	        	CART.getTotal();
	        },
	        
	        reduce(id,qty=1){
	        	//increase the quantity of an item in the cart
	        	CART.contents = CART.contents.map(item=>{
	        		if(item._id ===id)
	        			item.qty = item.qty - qty;
	        			item.subtotal = item.qty * item.price
	        		return item;
	        	});
	        	CART.contents.forEach(async item =>{
	        		if(item._id === id && item.qty === 0)
	        			await CART.remove(id)
	        	})
	        	//update localStorage
	        	CART.sync();
	        	CART.getTotal();
	        },
	        
	        remove(id){
	        	// remove an item entirely from CART.contents based on its id
	        	CART.contents = CART.contents.filter(item=>{
	        		if(item._id !== id)
	        			return true
	        	});
	        	//update localStorage
	        	CART.sync();
	        	CART.getTotal();
	        },
	       
	        empty(){
	        	// empty whole cart
	        	CART.contents = [];
	        	// update localStorage
	        	CART.sync();
	        	CART.getTotal();
	        },
	        
	        sort(field='title'){
	        	let sorted = CART.contents.sort( (a,b)=>{
	        		if(a[field] > b[field]) {
	        			return 1
	        		} else if (a[field] < a[field]){
	        			return -1
	        		} else {
	        			return 0
	        		}
	        	});
	        	 return sorted;
	        },
	        
	        getTotal(){
	        	// calculate total price from CART.contents
	        	CART.total= CART.contents.reduce((acc , item) => acc + item.subtotal,0)
	        },
        };