/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
let cartCounter = 0;

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let optionElement = document.createElement('option');
    optionElement.textContent = Product.allProducts[i].name;
    optionElement.value = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  
}

// IN PROGRESS******************
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  let item = document.getElementById('items').value;
  console.log(item);
  let quantity = document.getElementById('quantity').value;
  console.log(quantity);
  new CartItem(item, quantity);
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let liElement = document.getElementsByTagName('li');
  let spanElement = document.getElementById('itemCount');
  cartCounter++;
  spanElement.textContent = `${cartCounter}`;
  liElement[1].appendChild(spanElement);
  // console.log(cart[0]);
}

// IN PROGRESS******************
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let item = document.getElementById('items').value;
  console.log(item);
  let quantity = document.getElementById('quantity');
  console.log(quantity);
  // TODO: Add a new element to the cartContents div with that information
  let sectionElement = document.getElementsByTagName('section');
  let divElement = document.getElementById('cartContents');
  divElement.textContent = `${item}, ${quantity}`;
  sectionElement[1].appendChild(divElement);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
