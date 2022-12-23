// jquery //
// step 1. //
function newItem() {
let list = $('#list');
       /* instead of createElement */ 
let li = $('<li></li>'); 
      /* creates a variable to store the value in */
let inputValue = $('#input').val(); 
      /* appends the value into the list item element */
li.append(inputValue); 
      // if statements same as js but use $ or # to select jquery element //
       if (!inputValue) {  
        alert("You must write something!");
    } else {
        $('#list').append(li);
}
}

// step 2 //

function crossOut() {
    // declares function with action css strike effect and toggle as li can have two states //
      li.toggleClass("strike");
  }
    // event listener, when li is dbl clicked call the crossout function and action //
      li.on("dblclick", crossOut);

// step 3 //
      /* instead of createElement */
let crossOutButton = $('<crossOutButton></crossOutButton>');
      /* can still use document.create for TextNode in jquery */
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);
      /* instead of event listener */
crossOutButton.on("click", 'deleteListItem') 
function deleteListItem() {
    li.addClass('delete');
};

  // step 4 //
list.sortable();
