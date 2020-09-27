// import * as $ from 'jquery';
import $ from 'jquery';
// import * as $ from './jquery';
import store from './store';



//Template Functions
function generateInitial() {
    let template = `    <div class="top-btns">
    <button class="new">+ New</button>
    <select name="filter">
        <option disabled selected>Filter By:</option>
        <option value="1">1+ Stars</option>
        <option value="2">2+ Stars</option>
        <option value="3">3+ Stars</option>
        <option value="4">4+ Stars</option>
        <option value="5">5+ Stars</option>
    </select>
    </div>`;
    render(template);
};

function generateItemUnexpanded(){
    return `        <div class="list">
    <li class="whole-container">
        <div class="bookmark-head">
            <div class="bookmark-name">
                <p>Bookmark</p>
            </div>
            <div class="star-align">
                <img class="gold-star" src="src/media/shinesprite.gif">
                <img class="gold-star" src="src/media/shinesprite.gif">
                <img class="gold-star" src="src/media/shinesprite.gif">
                <img class="gold-star" src="src/media/shinesprite.gif">
                <img class="gold-star" src="src/media/shinesprite.gif">
            </div>
        </div>
    </li>
</div>`
};

function generateItemExpanded(){
    return `
    <div class="list">
    <li class="whole-container">
        <div class="bookmark-head">
            <div class="bookmark-name">
                <p>Bookmark</p>
            </div>
            <div class="star-align">
                <img class="gold-star" src="src/media/shinesprite.gif">
                <img class="gold-star" src="src/media/shinesprite.gif">
                <img class="gold-star" src="src/media/shinesprite.gif">
                <img class="gold-star" src="src/media/shinesprite.gif">
                <img class="gold-star" src="src/media/shinesprite.gif">
            </div>
        </div>

        <div class="bookmark-body">
            <div class="bookmark-body-top">
                <div class="visit-site">
                    <button>Website</button>
                </div>
                <div class="manipulate">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div class="bookmark-body-bottom">
                <p>Description of Website Here</p>
            </div>
        </div>
        
    </li>
</div> `
};

function generateAddBookmark(){
    return `
    <div>
    <form>
        <section class="add-top">
            <label>Add Bookmark</label>
            <input>
        </section>
        <section class="add-bottom">
            <div>
                <label>Title</label>
                <input>
            </div>
            <div>
                <div class="rating">
                    <p>radio buttons</p>
                </div>
                <textarea>Descrition add here</textarea>
            </div>
        </section>
        <section class="add-buttons">
            <button>Cancel</button>
            <button>Add</button>
        </section>
    </form>
</div> `
};


//Event Handlers Functions

function addBookmark(){
    $('main').on('click', '.new', function(event){
      event.preventDefault();
      render(generateAddBookmark());
    });
}


//Render Function
function render(html) {
    $("main").html(html);
}
//Main Function
function main() {
    addBookmark();
    generateInitial(); 
    render();
    const startMsg = $('<p>Webpack is working!</p>');
    $('main').append(startMsg);
  }
  
  $(main);


// import $ from 'jquery';

// function main() {
//   console.log('DOM is loaded');

//   const startMsg = $('<p>Webpack is working!</p>');
//   $('main').append(startMsg);
// }

// $(main);