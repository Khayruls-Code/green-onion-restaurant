const getCart = () => {
  const cart = localStorage.getItem('cart')
  let cartObj;
  if (!cart) {
    cartObj = {}
  } else {
    cartObj = JSON.parse(cart)
  }
  return cartObj;
}

const addToLocal = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const addToCart = (id, quantity) => {
  const cart = getCart()
  if (!cart[id]) {
    cart[id] = quantity
  } else {
    cart[id] = cart[id] + 1
  }
  addToLocal(cart)
}

const deleteFromCart = (id) => {
  const cart = getCart()
  delete cart[id]
  addToLocal(cart)
}

export { addToCart, getCart, deleteFromCart }