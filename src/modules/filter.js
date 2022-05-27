import getData from './getData';
import renderGoods from './renderGoods';
import { priceFilter } from './filters';
import { saleFilter } from './filters';

const filter = () => {
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')
    const checkBoxInput = document.getElementById('discount-checkbox')
    const checkBox = document.querySelector('.filter-check_checkmark')

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, checkBoxInput.checked ), minInput.value, maxInput.value ));
            
        })
    })

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, checkBoxInput.checked ), minInput.value, maxInput.value ));
            
        })
    })

    checkBoxInput.addEventListener('change', () => {
        if (checkBoxInput.checked) {
            checkBox.classList.add('checked')
        } else {
            checkBox.classList.remove('checked')
        }

        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, checkBoxInput.checked ), minInput.value, maxInput.value ));
            
        })
    })
}

export default filter