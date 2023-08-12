const getData = (str) => {
    return fetch(
        `https://onlineshop-cb832-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
        .then((response) => {
            return response.json()
        })

}

export default getData 