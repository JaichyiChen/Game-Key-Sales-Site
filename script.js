//Hidden search bar
const panels = document.querySelectorAll(".panel");
const search = document.querySelector(".search");

//Shopping cart
const carts = document.querySelectorAll(".add-cart");

//product list
let product = [
  {
    name: "GTA V",
    tag: "GTA V",
    price: 20,
    inCart: 0,
  },
  {
    name: "Elden Ring",
    tag: "Elden Ring",
    price: 50,
    inCart: 0,
  },
  {
    name: "Minecraft",
    tag: "Minecraft",
    price: 13,
    inCart: 0,
  },
  {
    name: "Forza Horizon 5",
    tag: "Forza Horizon 5",
    price: 50,
    inCart: 0,
  },
  {
    name: "Cyberpunk 2077",
    tag: "Cyberpunk 2077",
    price: 20,
    inCart: 0,
  },
  {
    name: "Genshin Impact",
    tag: "Genshin Impact",
    price: 0,
    inCart: 0,
  },
  {
    name: "Risk of Rain 2",
    tag: "Risk of Rain 2",
    price: 9,
    inCart: 0,
  },
  {
    name: "Destiny 2",
    tag: "Destiny 2",
    price: 13,
    inCart: 0,
  },
  {
    name: "Horizon Zero Dawn",
    tag: "Horizon Zero Dawn",
    price: 6,
    inCart: 0,
  },
  {
    name: "Pokemon Arceus",
    tag: "Pokemon Arceus",
    price: 2,
    inCart: 0,
  },
  {
    name: "Lost Ark",
    tag: "Lost Ark",
    price: 60,
    inCart: 0,
  },
  {
    name: "OSRS",
    tag: "OSRS",
    price: 12,
    inCart: 0,
  },
];
// add item to local storage to display on shopping cart
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(product[i]);
    totalCost(product[i]);
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}
function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");

  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
//Diplays the shopping cart
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);

  let productContainer = document.querySelector(".products");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((items, index) => {
      productContainer.innerHTML += `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="./img/${
        items.tag
      }.jpg" />
                <span class="sm-hide">${items.name}</span>
            </div>
            <div class="price sm-hide">$${items.price}</div>
            <div class="quantity">
              
                    <span>${items.inCart}</span>
            </div>
            <div class="total">$${items.inCart * items.price}</div>`;
    });

    productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cart}</h4>
            </div>`;
  }
  localStorage.clear();
}

onLoadCartNumbers();
displayCart();

//Hidden search
btn.addEventListener("click", () => {
  search.classList.toggle("search-active");
  input.focus();
});
//Expanding window
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
