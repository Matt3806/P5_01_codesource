function saveBasket(basket) {
    localStorage.setItem("basket", JSON.stringify(basket))
}

function getBasket() {
    let basket = localStorage.getItem("basket")
    if (basket == null){
        return []
    }else{
        return JSON.parse(basket)
    }
}

function removeFromBasket (product) {
    let basket = getBasket()
    basket = basket.filter( p => p.id != product.id)
    saveBasket(basket)
}

function addBasket(product) {
    let basket = getBasket()
    let foundProduct = basket.find(p => p.id == product.id ) && basket.find(p => p.color == product.color )
    if(foundProduct != undefined)  {
        foundProduct.quantity += product.quantity 
        }else{
        
            basket.push(product)
        }

        saveBasket(basket)
}
