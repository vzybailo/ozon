const getData = () => {
    return fetch('https://ozon-c895f-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    }) 

}


export default getData;