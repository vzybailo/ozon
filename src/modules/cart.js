import renderCart from "./renderCart"
import postData from "./postData"

const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBtn = document.querySelector('.cart-close')
    const goodsWrapper = document.querySelector('.goods')
    const cartTotal = document.querySelector('.cart-total > span')
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartSendBtn = document.querySelector('.cart-confirm')

    const openCart = () => {
        const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : [] 

        cartModal.style.display = "flex"

        renderCart(cart)
        cartTotal.textContent = cart.reduce((sum, goodItem) => {  // подсчитываем сумму в корзине
            return sum + goodItem.price
        }, 0)
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

    cartWrapper.addEventListener('click', (event) => {  // удаление товаров из корзины
        if(event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? 
                         JSON.parse(localStorage.getItem('cart')) : []

            const card = event.target.closest('.card') // достукиваемся до контейнера каждого товара
            const key = card.dataset.key // получаем data-key каждого товара
            const index = cart.findIndex((item) => {  // находим индекс элемента в массиве товаров из корзины
                return item.id === +key
            })

            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart))

            renderCart(cart)
            cartTotal.textContent = cart.reduce((sum, goodItem) => {  // подсчитываем сумму в корзине
                return sum + goodItem.price
            }, 0)
        }
    })

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : []

        postData(cart).then(() => {
            localStorage.removeItem('cart')

            renderCart([])

            cartTotal.textContent = 0
        })
    })
    
}

export default cart

