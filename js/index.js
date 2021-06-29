// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
//get 3 dom elements : quantity, price.
let unitPrice = product.querySelector(".price span")
let quantityInput = product.querySelector(".quantity").value;
let subTotal = product.querySelector(".subtotal span")
let productPrice = unitPrice * quantityInput
subTotal.innerHTML = productPrice
return productPrice;



}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
