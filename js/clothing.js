const btn= document.getElementsByClassName('addtocart')  //getting all the addtocart buttons
const products=[] //array which stores all product details

for(var i=0; i< btn.length; i++)
{
    let cartBtn= btn[i];
    cartBtn.addEventListener('click',(event) =>{   //event lisner for addtocart button
        
        let product= {
            image: event.target.parentElement.parentElement.children[0].children[0].src, //fetching image
            title: event.target.parentElement.parentElement.children[1].textContent,   //fetching name
            price: event.target.parentElement.parentElement.children[2].textContent,   //fetching price
            quantity : 1
        }
        
        addItemtoLocal(product)
    });

}
//pushing product details to local storage
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
