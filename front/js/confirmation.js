let contact = getContact()
let basket = getBasket()

let product = basket.map(i => i.id)

console.log(product, contact)

