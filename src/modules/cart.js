import renderCart from "./renderCart"

const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBtn = document.querySelector('.cart-close')
    const goodsWrapper = document.querySelector('.goods')

    const openCart = () => {
        const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : [] 
        const counterWrapper = document.querySelector('.counter')
        const counterGoods = cart.length



        cartModal.style.display = "flex"

        renderCart(cart)

        
        console.log(counterGoods);
    }

    const closeCart = () => {
        cartModal.style.display = "none"
    }

    cartBtn.addEventListener('click', openCart );
    cartCloseBtn.addEventListener('click', closeCart );

    goodsWrapper.addEventListener('click', (event) => {
        if(event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card') // достукиваемся до контейнера каждого товара
            const key = card.dataset.key // получаем data-key каждого товара
            const goods = JSON.parse(localStorage.getItem('goods')) // выводим массив данных 
            const cart = localStorage.getItem('cart') ? 
                         JSON.parse(localStorage.getItem('cart')) : []  // получаем массив и Local Storage если там есть данные
            const goodItem = goods.find((item) => {
                return item.id === +key
            })

            cart.push(goodItem) // пушим в массив LocalStorage
            localStorage.setItem('cart', JSON.stringify(cart))

        }
    })

    
}

export default cart

