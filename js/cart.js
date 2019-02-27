const CART = {
    KEY:"teddies",
    contents:[],
    init(){
        //check localStorage and initialize the contents of CART.contents
        let _contents = localStorage.getItem(CART.KEY);
        if(_contents){
            CART.contents = JSON.parse(_contents);
        } else {
            CART.contents = [];
            CART.sync();
        }
    },
    async sync(){
        let _cart = JSON.stringify(CART.contents);
        await localStorage.setItem(CART.KEY, _cart);
    },
    find(id){
        let match = CART.contents.filter(item=>{
            if(item._id == id)
                return true
        });
        if (match && match[0])
            return match[0];
    },
    add(id){
        // add a new item to the cart
        // check that it is not in the cart already
        if(CART.find(id)){
            CART.increase(id,1);
        } else {
            let arr = PRODUCTS.filter(product=>{
                if(product._id == id){
                    return true
                }
            });
            if (arr && arr[0]){
                let obj = {
                    id:arr[0]._id,
                    name:arr[0].name,
                    qty:1,
                    itemPrice: arr[0].price
                };
                CART.contents.push(obj);
                // update localStorage
                CART.sync();
            }else {
                // product id does not exist in products data
                console.error('INVALID product');
            }
        }
    },
    increase(id, qty=1){
        // increase the quantity of an item in the cart
        CART.contents = CART.contents.map(item=>{
            if(item._id === _id)
                item.qty = item.qty + qty;
            return item;
        });
        CART.sync()
    },
    reduce(id,qty=1){
        // reduce the quantity of an item in the cart
        CART.contents = CART.contents.map(item=>{
            if(item._id === id)
                item.qty = item.qty - qty;
            return item;
        });
        CART.contents.forEach(async item=>{
            if(item._id === id && item.qty === 0)
                await CART.remove(id);
        });
        // update localStorage
        CART.sync()
    },
    remove(id){
        // remove an item entirely from CART.contents based on its id
        CART.contents = CART.contents.filter(item=>{
            if(item._id !== id)
                return true;
        });
        CART.sync()
    },
    empty(){
        // empty whole cart
        CART.contents = [];
        // update localStorage
        CART.sync()
    },
    sort(field='title'){
        //sort by field - title, price
        //return a sorted shallow copy of the CART.contents array
        let sorted = CART.contents.sort( (a, b)=>{
            if(a[field] > b[field]){
                 return 1;
            }else if(a[field] < a[field]){
                return -1;
            }else{
                return 0;
            }
        });
        return sorted;
        //NO impact on localStorage
    },
     logContents(prefix){
        console.log(prefix, CART.contents)
    }    

}



         function incrementCart(ev){
            ev.preventDefault();
            let id = parseInt(ev.target.getAttribute('data-id'));
            CART.increase(id, 1);
            let controls = ev.target.parentElement;
            let qty = controls.querySelector('span:nth-child(2)');
            let item = CART.find(id);
            if(item){
                qty.textContent = item.qty;
            }else{
                document.getElementById('cart').removeChild(controls.parentElement);
            }
        }
        
        function decrementCart(ev){
            ev.preventDefault();
            let id = parseInt(ev.target.getAttribute('data-id'));
            CART.reduce(id, 1);
            let controls = ev.target.parentElement;
            let qty = controls.querySelector('span:nth-child(2)');
            let item = CART.find(id);
            if(item){
                qty.textContent = item.qty;
            }else{
                document.getElementById('cart').removeChild(controls.parentElement);
            }
        }

        
        function addItem(ev){
          ev.preventDefault();
          let id = parseInt(ev.target.getAttribute('data-id'));
          console.log('add to cart item', id);
          CART.add(id,1);
        }