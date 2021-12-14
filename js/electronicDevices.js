function search() {

    //Get the search string and convert it to upper case
    let searchInput = document.getElementById('search-input').value.toUpperCase();
    
    let products = document.querySelectorAll('.product-wrapper');
    let productName;

    products.forEach(product => {
        productName = product.querySelector('P').innerHTML.toUpperCase();
        if(productName.indexOf(searchInput) > -1) {
            product.style.display='';
        }
        else{
            product.style.display='none';
        }
    });
}

//Function invoked when the page is nicely loaded
document.addEventListener("DOMContentLoaded", () => {

    //Performing search product on key-up event in searchbar
    document.getElementById('search-input').addEventListener('keyup', () => {
        search();
    });

    //Array of all the add to cart buttons
    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    //Providing on-click event to each add to cart button
    addToCartButtons.forEach(addToCartButton => {

        addToCartButton.addEventListener('click', (evt) => {
            evt.preventDefault();

            //Getting all the product information, corresponding to the clicked button
            let productName = addToCartButton.parentNode.querySelector('p').innerHTML;
            let productImageSource = addToCartButton.parentNode.querySelector('img').getAttribute('src');
            let productImageClass = addToCartButton.parentNode.querySelector('img').getAttribute('class');
            let productCost = addToCartButton.parentNode.querySelector('p').nextElementSibling.innerHTML;
            
            //Showing add to cart message on the top of page
            let addToCartMessageNode = document.getElementById('new-cart-item');
            addToCartMessageNode.style.display='grid';
            addToCartMessageNode.querySelector('p').innerHTML = productName;
            addToCartMessageNode.querySelector('img').setAttribute('src', productImageSource);
            addToCartMessageNode.querySelector('img').setAttribute('class', productImageClass);
            document.querySelector('#sub-header').scrollIntoView();


            //Adding Product in the Local Storage
            let product = {
                image: productImageSource,
                title: productName,
                price: productCost,
                quantity : 1
            }
            addItemtoLocal(product);

        }); 
    });  

    //Disappearing add to cart message on click
    document.getElementById('new-cart-item').addEventListener('click', () => {
        document.getElementById('new-cart-item').style.display = 'none';
    });

});

//Adds a product information in the local storage, when add to cart button clicked
function addItemtoLocal(product){
    let productInCartFlag = false;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    if(cartItem === null){
        let products = [];
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
}
