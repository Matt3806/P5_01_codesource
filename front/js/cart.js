let basket = getBasket()

for (let product of basket) {

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
    let product = deletItem.dataset
    removeFromBasket(product)
    window.location.assign("cart.html")
}));

document.querySelectorAll(".itemQuantity").forEach(item => item.addEventListener("change", (e) => {
    let quantity = e.target.closest('.itemQuantity').value
    let quantityNumber = parseInt(quantity)
    let deletItem = e.target.closest('[data-id]')
    let product = deletItem.dataset

    productID = {
        id: product.id,
        quantity: quantityNumber
    }
    if (quantityNumber <= 0 ){
        removeFromBasket(productID)
        window.location.assign("cart.html")
    } else if (quantityNumber > 100){
        removeFromBasket(productID)
        window.location.assign("cart.html")
    }else {
        addQuantity(productID)
    }
    

}))

function addQuantity(product) {
    let basket = getBasket()
    let foundProduct = basket.find(p => p.id == product.id)
    if (foundProduct != undefined) {
        foundProduct.quantity = product.quantity
    }

    saveBasket(basket)
    setTotalQuantity()
    setTotalPrice()
}

function setTotalQuantity() {
    let totalQuantity = document.getElementById('totalQuantity')
    let newQuantity = document.createTextNode(`${getNumberProduct()}`)
    if (newQuantity != undefined) {
        totalQuantity.replaceChild(newQuantity, totalQuantity.childNodes[0])

    } else {
        totalQuantity.appendChild(newQuantity)
    }


}
function setTotalPrice() {
    let totalPrice = document.getElementById('totalPrice')
    let newPrice = document.createTextNode(`${getTotalPrice()}`)
    if (newPrice != undefined) {
        totalPrice.replaceChild(newPrice, totalPrice.childNodes[0])
    } else {
        totalPrice.appendChild(newPrice)
    }

}

setTotalQuantity()
setTotalPrice()

let form = document.querySelector('.cart__order__form')

  function validNameCity (inputName){
    let nameRegexp = new RegExp (/^[a-z ,.'-]+$/i)

    let testName = nameRegexp.test(inputName.value)
    let messageName = inputName.nextElementSibling
    if(testName){
        messageName.innerHTML = ""
        return true
    }else{
        messageName.innerHTML = "Invalide"
        return false
    }
}

  function validMail (inputMail){
    let mailRegexp = new RegExp (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)
    let testMail = mailRegexp.test(inputMail.value)
    let messageMail = inputMail.nextElementSibling
    if(testMail){
        messageMail.innerHTML = ""
        return true
    }else{
        messageMail.innerHTML = "Invalide"
        return false
    }
}

form.firstName.addEventListener('change', function(){ 
validNameCity(this)
})

form.lastName.addEventListener('change', function(){ 
validNameCity(this)
})

form.city.addEventListener('change', function(){ 
    validNameCity(this)
})

form.email.addEventListener('change', function(){ 
    validMail(this)
})

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const address = document.getElementById('address').value
    const city = document.getElementById('city').value
    const email = document.getElementById('email').value

    customer = {
        firstName : firstName,
        lastName : lastName,
        address : address,
        city : city,
        email : email
    }

    if ( validNameCity(form.firstName) && validNameCity(form.lastName) && validNameCity(form.city) && validMail(form.email)){
        saveCustomer(customer)
        window.location.assign("confirmation.html")
    }else{
        alert("merci de remplir le formulaire pour passer votre commande")
    }
          
})