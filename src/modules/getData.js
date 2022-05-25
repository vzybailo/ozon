const getData = (str) => {
    return fetch(
        `https://ozon-c895f-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
        )
        .then((response) => {
            return response.json() 
        }) 
    
}

export default getData