  let basket = getBasket()


    for(let product of basket){

      document.querySelector("#cart__items").innerHTML +=
  
                   `<article class="cart__item" data-id="${product.id}" data-color="${product.color} ">
                      <div class="cart__item__img">
                        <img src="${product.image}" alt="${product.altTxt} ">
                      </div>
                      <div class="cart__item__content">
                        <div class="cart__item__content__description">
                          <h2>${product.name} </h2>
                          <p>${product.color}</p>
                          <p>${product.price}€</p>
                        </div>
                        <div class="cart__item__content__settings">
                          <div class="cart__item__content__settings__quantity">
                            <p>Qté :  </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                          </div>
                          <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                          </div>
                        </div>
                      </div>
                    </article>`                                  
    }

    document.querySelectorAll(".deleteItem").forEach(item => item.addEventListener("click", (e) => {
        let deletItem = e.target.closest('[data-id]')
        let product =  deletItem.dataset
        removeFromBasket(product)
        window.location.assign("cart.html")
        }) );

        document.querySelectorAll(".itemQuantity").forEach(item => item.addEventListener("change", (e) => {
            let quantity = e.target.closest('.itemQuantity').value
            let quantityNumber = parseInt(quantity)
            let deletItem = e.target.closest('[data-id]')
            let product =  deletItem.dataset

            productID = {
                id :product.id,
                quantity :quantityNumber
            }
            addQuantity(productID)
            //window.location.assign("cart.html")

        }))
  

        function addQuantity(product) {
            let basket = getBasket()
            let foundProduct = basket.find(p => p.id == product.id ) 
            if(foundProduct != undefined)  {
                foundProduct.quantity = product.quantity
                }
        
                saveBasket(basket)
                setTotalQuantity()
                setTotalPrice()     
        }

function setTotalQuantity (){
    let totalQuantity = document.getElementById('totalQuantity')
    let newQuantity = document.createTextNode(`${getNumberProduct()}`)
    if (newQuantity != undefined){
        totalQuantity.replaceChild(newQuantity, totalQuantity.childNodes[0])  

    }else{
        totalQuantity.appendChild(newQuantity)
    }

}
function setTotalPrice(){
    let totalPrice = document.getElementById('totalPrice')
    let newPrice = document.createTextNode(`${getTotalPrice()}`)
    if(newPrice != undefined){
        totalPrice.replaceChild( newPrice, totalPrice.childNodes[0])
    }else{
        totalPrice.appendChild(newPrice)
    }
    
}

setTotalQuantity()
setTotalPrice()