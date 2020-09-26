const store = {
    bookmarks: [],
    adding: false,
    edit: false,
    id: 0
};

function findById(id) {
    return this.bookmarks.find(currentItem => currentItem.id === id);
};

export default store;