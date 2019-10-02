


export function getBooksBySearch(text){
    const url ="https://www.googleapis.com/books/v1/volumes?q="+text;
    return fetch(url).then(
        (response) => response.json()
        )
        .catch((error) => console.error(error))
        
}

export function getBookById(id){
    const url = "https://www.googleapis.com/books/v1/volumes/"+id
    return fetch(url).then(
        (response) => response.json()
        )
        .catch((error) => console.error(error))
}