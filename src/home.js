const content = document.querySelector("div#content");

export default function createHome() {
  const div = document.createElement("div");
  div.classList.add("home");

  const restaurantName = "Restaurant";
  const restaurantNameContainer = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.innerHTML = restaurantName;
  h1.classList.add("top");
  restaurantNameContainer.appendChild(h1);
  const bottomLinks = ["Meat", "Vegan", "Soft-Drinks", "Alcohol"];
  const bottom = document.createElement("div");
  bottom.classList.add("bottom-links");
  const uList = document.createElement("ul");
  

  bottomLinks.forEach((link) => {
    const list = document.createElement("li");
    list.classList.add(link);
    list.textContent = link;
    uList.appendChild(list);
  });

  bottom.appendChild(uList);
  content.appendChild(restaurantNameContainer);
  content.appendChild(bottom);
  return div;
}
// class HomePage {
//   constructor() {
//     this.div = document.createElement("div");
//     this.div.classList.add("home");
//     this.createContent();
//   }

//   createContent() {
//     const fragment = document.createDocumentFragment();

//     fragment.appendChild(this.createRestaurantNameContainer());
//     fragment.appendChild(this.createBottomLinks());

//     this.div.appendChild(fragment);
//     document.body.appendChild(this.div);
//   }

//   createRestaurantNameContainer() {
//     const container = document.createElement("div");
//     const h1 = document.createElement("h1");

//     h1.textContent = "Restaurant";
//     h1.classList.add("top");

//     container.appendChild(h1);
//     return container;
//   }

//   createBottomLinks() {
//     const bottomLinks = ["Meat", "Vegan", "Soft-Drinks", "Alcohol"];
//     const bottom = document.createElement("div");
//     bottom.classList.add("bottom-links");
//     const uList = document.createElement("ul");

//     bottomLinks.forEach((link) => {
//       const list = document.createElement("li");
//       list.classList.add(link);
//       list.textContent = link;
//       uList.appendChild(list);
//     });

//     bottom.appendChild(uList);
//     return bottom;
//   }
// }

// // To create and add the home page to the DOM
// export default function createHome() {
//   new HomePage();
// }
