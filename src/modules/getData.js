const getData = () => {
    return fetch('https://onlineshop-cb832-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })

}

export default getData 