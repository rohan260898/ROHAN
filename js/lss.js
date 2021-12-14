/* Js to add items into local storage */
const btn = document.getElementsByClassName('b')
const products = []
for(var i=0;i < btn.length; i++){
    let cartBtn = btn[i]
    cartBtn.addEventListener('click', function(e) {
        let product = {
            image:e.target.parentElement.parentElement.children[0].src,
            title:e.target.parentElement.parentElement.children[1].textContent,
            price:e.target.parentElement.parentElement.children[2].textContent,
            title:e.target.parentElement.parentElement.children[1].children[0].innerHTML,
            price:e.target.parentElement.parentElement.children[2].children[0].innerHTML,
            quantity : 1

        }

        addItemtoLocal(product)
    });
}





function addItemtoLocal(product){
    let productInCartFlag = false;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    if(cartItem === null){
        products.push(product)
        localStorage.setItem('prdInCart',JSON.stringify(products))
    }
    else{
        cartItem.forEach(item =>{
            if(product.title == item.title){
                
                productInCartFlag = true;
                item.quantity++;
            }
        });

        if(!productInCartFlag) {
            cartItem.push(product);
        }   

        localStorage.setItem('prdInCart', JSON.stringify(cartItem));
    }

    window.location.reload();
}



/* Function to display item from local storage to shopping cart page */
function dispCartItem(){
    let html = '';
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    cartItem.forEach(item =>{
        html += `
        <div class="cartList">
        <img src="${item.image}" alt"">
        <div class="info">
        <h3 class="name">${item.title}</h3>
        <input class="product1-quantity "type="number" value="2"> 
        <h3 class="price">${item.price}</h3>

       <div class="r"> <button>Remove</button></div>
    </div>
    </div>
        `
});
    document.querySelector('.products').innerHTML = html
}
dispCartItem()
updatecartTotal()
/* Js function to remove item from page if user clicks remove */
const removeItem = document.getElementsByClassName('r')
for(var i=0;i < removeItem.length; i++){
let removeBtn = removeItem[i]
removeBtn.addEventListener('click', function(e) {
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    console.log(e.target.parentElement.parentElement.children[0].textContent)
    cartItem.forEach(item =>{
        const index = cartItem.indexOf(item);
        if(item.title == e.target.parentElement.parentElement.children[0].textContent){
            cartItem.splice(index,1)
        }
    });
    localStorage.setItem('prdInCart', JSON.stringify(cartItem));
    window.location.reload();
});

}
/*Function to update total */
function updatecartTotal(){
    let total =0

        let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
      
        cartItem.forEach(item =>{
            var priceElement = document.getElementsByClassName('price')[0]
            var pr = parseFloat(priceElement.innerText.replace('$', ''))
            var quantityElement = document.getElementsByClassName('product1-quantity')[0]
            var quan = quantityElement.value  
            total = (pr * quan) + total

            
        });
        document.getElementsByClassName('abc')[0].innerText = '$' + total 

    }
    updatecartTotal()
    

