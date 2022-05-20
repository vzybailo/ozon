const postData = () => {

      return fetch('https://ozon-c895f-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body: JSON.stringify({
            title: "Игра новая",
            price: 3990,
            sale: false,
            img: "https://cdn1.ozone.ru/multimedia/c400/1023840682.jpg",
            hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1023849642.jpg",
            category: "Игры и софт"
          }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      .then(res => res.json())

}


export default postData;