let item = [
  [1, "Tomato", 3],
  [2, "Cucumber", 5],
  [3, "Pinapple", 30],
  [4, "Grapes", 10],
];

// המערך החדש אליו אנו דוחפים פרטים מהמערך הישן
let shoppingCart = [];

function show(productID) {
  shoppingCart.push(item[productID]);
  renderCartFromArray();
}

function renderCartFromArray() {
  document.getElementById("shoppingCart").innerHTML = ""; //removes all the HTML content.
  for (let i = 0; i < shoppingCart.length; i++) {
    let productHTML = document.createElement("div");
    let productDescription = document.createTextNode(
      shoppingCart[i][1] + " Cost  " + shoppingCart[i][2] // מיקומים של המקומות במערך
    );

    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("onclick", "removeProduct(" + i + ")");
    removeBtn.textContent = "remove";
    productHTML.appendChild(productDescription);
    productHTML.appendChild(removeBtn);
    document.getElementById("shoppingCart").appendChild(productHTML);
  }
}
function removeProduct(product) {
  shoppingCart.splice(product, 1); //removes the array item i.
  renderCartFromArray();
}
