import getData from './getData';
import renderGoods from './renderGoods';
import {searchFilter} from './filters';
import {saleFilter} from './filters';

const search = () => {
    const searchWrapper = document.querySelector('.search-wrapper_input')
    const salesBtn = document.querySelector('.filter-check_checkbox')
    const checkBox = document.querySelector('.filter-check_checkmark')

    salesBtn.addEventListener('click', () => {  // поиск по кнопке "Акция"
        const check = salesBtn.value
        
        if(salesBtn.checked) {
            getData().then((data) => {
                renderGoods(saleFilter( data, check ));
            })
            checkBox.style.backgroundColor = '#005bff'

        } else {
            getData().then((data) => {
                renderGoods(data);
            })
            checkBox.style.backgroundColor = ''
        }

    })

    
    searchWrapper.addEventListener('input', (event) => {  // поиск в поисковой строке
        const value = event.target.value
        
        getData().then((data) => {
            renderGoods(searchFilter(data, value ));
        })

    })
}




export default search