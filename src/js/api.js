//base url of the api, GETs an empty array on its own, can POST based on filling certain perameters
const apiUrl='https://thinkful-list-api.herokuapp.com/ashen/bookmarks'

// GET items from API
function getBookmarkData(){
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data)=> console.log(data));
};

// POST items to API
function createItem(title, url, desc, rating) {
    let newBk = {
        title: 'title',
        url: 'url',
        desc: 'desc',
        rating: 'rating'
}; 

    newBk = JSON.stringify(newBk)

    return fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: newBk
    })
    .then((response) => response.json())
    .then((data => console.log(data)));
}
