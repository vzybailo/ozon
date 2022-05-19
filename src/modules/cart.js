
const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBtn = document.querySelector('.cart-close')

    const openCart = () => {
    cartModal.style.display = "flex"
    }

    const closeCart = () => {
        cartModal.style.display = "none"
    }

    cartBtn.addEventListener('click', openCart );
    cartCloseBtn.addEventListener('click', closeCart );
}

cart();

export default cart

