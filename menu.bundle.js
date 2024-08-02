"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu() {
  const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: __webpack_require__(/*! ./images/home.png */ "./src/images/home.png"),
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: __webpack_require__(/*! ./images/item-2.jpeg */ "./src/images/item-2.jpeg"),
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: __webpack_require__(/*! ./images/item-3.jpeg */ "./src/images/item-3.jpeg"),
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: __webpack_require__(/*! ./images/item-4.jpeg */ "./src/images/item-4.jpeg"),
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: __webpack_require__(/*! ./images/item-5.jpeg */ "./src/images/item-5.jpeg"),
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: __webpack_require__(/*! ./images/item-6.jpeg */ "./src/images/item-6.jpeg"),
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: __webpack_require__(/*! ./images/item-7.jpeg */ "./src/images/item-7.jpeg"),
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: __webpack_require__(/*! ./images/item-8.jpeg */ "./src/images/item-8.jpeg"),
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: __webpack_require__(/*! ./images/item-9.jpeg */ "./src/images/item-9.jpeg"),
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const container = document.createElement("div");
  container.classList.add("menu");

  const title = document.createElement("div");
  title.classList.add("title");
  const h1 = document.createElement("h1");
  h1.classList.add("menu-title");
  h1.textContent = "Our Menu";

  const underline = document.createElement("div");

  underline.classList.add("underline");

  title.appendChild(h1);
  title.appendChild(underline);

  const sectionCenter = document.createElement("div");
  sectionCenter.classList.add("section-center");

  let article = menu.map((item) => {
    return `<article class="menu-item">
          <img src=${item.img} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  article = article.join("");
  sectionCenter.innerHTML = article;
  container.appendChild(title);
  container.appendChild(sectionCenter);

  return container;
}


/***/ }),

/***/ "./src/images/home.png":
/*!*****************************!*\
  !*** ./src/images/home.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9db1d07006944a8fe1e.png";

/***/ }),

/***/ "./src/images/item-2.jpeg":
/*!********************************!*\
  !*** ./src/images/item-2.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0b6b25efcbd39c641cb.jpeg";

/***/ }),

/***/ "./src/images/item-3.jpeg":
/*!********************************!*\
  !*** ./src/images/item-3.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41dbf97f88e1e73a7474.jpeg";

/***/ }),

/***/ "./src/images/item-4.jpeg":
/*!********************************!*\
  !*** ./src/images/item-4.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1246e0c14d2695db1ae5.jpeg";

/***/ }),

/***/ "./src/images/item-5.jpeg":
/*!********************************!*\
  !*** ./src/images/item-5.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39ce038c4ceb093d7c66.jpeg";

/***/ }),

/***/ "./src/images/item-6.jpeg":
/*!********************************!*\
  !*** ./src/images/item-6.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71751fefb2ee55699e44.jpeg";

/***/ }),

/***/ "./src/images/item-7.jpeg":
/*!********************************!*\
  !*** ./src/images/item-7.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b2d85320c08729e6a58.jpeg";

/***/ }),

/***/ "./src/images/item-8.jpeg":
/*!********************************!*\
  !*** ./src/images/item-8.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77daac2abe411b747cb4.jpeg";

/***/ }),

/***/ "./src/images/item-9.jpeg":
/*!********************************!*\
  !*** ./src/images/item-9.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46d925888a7d2fa971d6.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLGdEQUFtQjtBQUN0QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLHNEQUFzQjtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLHNEQUFzQjtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLHNEQUFzQjtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLHNEQUFzQjtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLHNEQUFzQjtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLHNEQUFzQjtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLHNEQUFzQjtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLHNEQUFzQjtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CLG1DQUFtQyxXQUFXO0FBQzlDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICBjb25zdCBtZW51ID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgdGl0bGU6IFwiYnV0dGVybWlsayBwYW5jYWtlc1wiLFxyXG4gICAgICBjYXRlZ29yeTogXCJicmVha2Zhc3RcIixcclxuICAgICAgcHJpY2U6IDE1Ljk5LFxyXG4gICAgICBpbWc6IHJlcXVpcmUoXCIuL2ltYWdlcy9ob21lLnBuZ1wiKSxcclxuICAgICAgZGVzYzogYEknbSBiYWJ5IHdva2UgbWxrc2hrIHdvbGYgYml0dGVycyBsaXZlLWVkZ2UgYmx1ZSBib3R0bGUsIGhhbW1vY2sgZnJlZWdhbiBjb3BwZXIgbXVnIHdoYXRldmVyIGNvbGQtcHJlc3NlZCBgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHRpdGxlOiBcImRpbmVyIGRvdWJsZVwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJsdW5jaFwiLFxyXG4gICAgICBwcmljZTogMTMuOTksXHJcbiAgICAgIGltZzogcmVxdWlyZShcIi4vaW1hZ2VzL2l0ZW0tMi5qcGVnXCIpLFxyXG4gICAgICBkZXNjOiBgdmFwb3J3YXJlIGlQaG9uZSBtdW1ibGVjb3JlIHNlbHZhZ2UgcmF3IGRlbmltIHNsb3ctY2FyYiBsZWdnaW5ncyBnb2NodWphbmcgaGVsdmV0aWNhIG1hbiBicmFpZCBqaWFuYmluZy4gTWFyZmEgdGh1bmRlcmNhdHMgYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICB0aXRsZTogXCJnb2R6aWxsYSBtaWxrc2hha2VcIixcclxuICAgICAgY2F0ZWdvcnk6IFwic2hha2VzXCIsXHJcbiAgICAgIHByaWNlOiA2Ljk5LFxyXG4gICAgICBpbWc6IHJlcXVpcmUoXCIuL2ltYWdlcy9pdGVtLTMuanBlZ1wiKSxcclxuICAgICAgZGVzYzogYG9tYnVjaGEgY2hpbGx3YXZlIGZhbm55IHBhY2sgMyB3b2xmIG1vb24gc3RyZWV0IGFydCBwaG90byBib290aCBiZWZvcmUgdGhleSBzb2xkIG91dCBvcmdhbmljIHZpcmFsLmAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgdGl0bGU6IFwiY291bnRyeSBkZWxpZ2h0XCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcImJyZWFrZmFzdFwiLFxyXG4gICAgICBwcmljZTogMjAuOTksXHJcbiAgICAgIGltZzogcmVxdWlyZShcIi4vaW1hZ2VzL2l0ZW0tNC5qcGVnXCIpLFxyXG4gICAgICBkZXNjOiBgU2hhYmJ5IGNoaWMga2VmZml5ZWggbmV1dHJhIHNuYWNrd2F2ZSBwb3JrIGJlbGx5IHNob3JlZGl0Y2guIFByaXNtIGF1c3RpbiBtbGtzaGsgdHJ1ZmZhdXQsIGAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNSxcclxuICAgICAgdGl0bGU6IFwiZWdnIGF0dGFja1wiLFxyXG4gICAgICBjYXRlZ29yeTogXCJsdW5jaFwiLFxyXG4gICAgICBwcmljZTogMjIuOTksXHJcbiAgICAgIGltZzogcmVxdWlyZShcIi4vaW1hZ2VzL2l0ZW0tNS5qcGVnXCIpLFxyXG4gICAgICBkZXNjOiBgZnJhbnplbiB2ZWdhbiBwYWJzdCBiaWN5Y2xlIHJpZ2h0cyBraWNrc3RhcnRlciBwaW50ZXJlc3QgbWVkaXRhdGlvbiBmYXJtLXRvLXRhYmxlIDkwJ3MgcG9wLXVwIGAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNixcclxuICAgICAgdGl0bGU6IFwib3JlbyBkcmVhbVwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJzaGFrZXNcIixcclxuICAgICAgcHJpY2U6IDE4Ljk5LFxyXG4gICAgICBpbWc6IHJlcXVpcmUoXCIuL2ltYWdlcy9pdGVtLTYuanBlZ1wiKSxcclxuICAgICAgZGVzYzogYFBvcnRsYW5kIGNoaWNoYXJyb25lcyBldGhpY2FsIGVkaXNvbiBidWxiLCBwYWxvIHNhbnRvIGNyYWZ0IGJlZXIgY2hpYSBoZWlybG9vbSBpUGhvbmUgZXZlcnlkYXlgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDcsXHJcbiAgICAgIHRpdGxlOiBcImJhY29uIG92ZXJmbG93XCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcImJyZWFrZmFzdFwiLFxyXG4gICAgICBwcmljZTogOC45OSxcclxuICAgICAgaW1nOiByZXF1aXJlKFwiLi9pbWFnZXMvaXRlbS03LmpwZWdcIiksXHJcbiAgICAgIGRlc2M6IGBjYXJyeSBqaWFuYmluZyBub3JtY29yZSBmcmVlZ2FuLiBWaXJhbCBzaW5nbGUtb3JpZ2luIGNvZmZlZSBsaXZlLWVkZ2UsIHBvcmsgYmVsbHkgY2xvdWQgYnJlYWQgaWNlbGFuZCBwdXQgYSBiaXJkIGAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOCxcclxuICAgICAgdGl0bGU6IFwiYW1lcmljYW4gY2xhc3NpY1wiLFxyXG4gICAgICBjYXRlZ29yeTogXCJsdW5jaFwiLFxyXG4gICAgICBwcmljZTogMTIuOTksXHJcbiAgICAgIGltZzogcmVxdWlyZShcIi4vaW1hZ2VzL2l0ZW0tOC5qcGVnXCIpLFxyXG4gICAgICBkZXNjOiBgb24gaXQgdHVtYmxyIGtpY2tzdGFydGVyIHRodW5kZXJjYXRzIG1pZ2FzIGV2ZXJ5ZGF5IGNhcnJ5IHNxdWlkIHBhbG8gc2FudG8gbGVnZ2luZ3MuIEZvb2QgdHJ1Y2sgdHJ1ZmZhdXQgIGAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOSxcclxuICAgICAgdGl0bGU6IFwicXVhcmFudGluZSBidWRkeVwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJzaGFrZXNcIixcclxuICAgICAgcHJpY2U6IDE2Ljk5LFxyXG4gICAgICBpbWc6IHJlcXVpcmUoXCIuL2ltYWdlcy9pdGVtLTkuanBlZ1wiKSxcclxuICAgICAgZGVzYzogYHNrYXRlYm9hcmQgZmFtIHN5bnRoIGF1dGhlbnRpYyBzZW1pb3RpY3MuIExpdmUtZWRnZSBseWZ0IGFmLCBlZGlzb24gYnVsYiB5dWNjaWUgY3J1Y2lmaXggbWljcm9kb3NpbmcuYCxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaDEuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGl0bGVcIik7XHJcbiAgaDEudGV4dENvbnRlbnQgPSBcIk91ciBNZW51XCI7XHJcblxyXG4gIGNvbnN0IHVuZGVybGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIHVuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG5cclxuICB0aXRsZS5hcHBlbmRDaGlsZChoMSk7XHJcbiAgdGl0bGUuYXBwZW5kQ2hpbGQodW5kZXJsaW5lKTtcclxuXHJcbiAgY29uc3Qgc2VjdGlvbkNlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2VjdGlvbkNlbnRlci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1jZW50ZXJcIik7XHJcblxyXG4gIGxldCBhcnRpY2xlID0gbWVudS5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiBgPGFydGljbGUgY2xhc3M9XCJtZW51LWl0ZW1cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPSR7aXRlbS5pbWd9IGNsYXNzPVwicGhvdG9cIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0taW5mb1wiPlxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxoND4ke2l0ZW0udGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJwcmljZVwiPiQke2l0ZW0ucHJpY2V9PC9oND5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgJHtpdGVtLmRlc2N9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5gO1xyXG4gIH0pO1xyXG4gIGFydGljbGUgPSBhcnRpY2xlLmpvaW4oXCJcIik7XHJcbiAgc2VjdGlvbkNlbnRlci5pbm5lckhUTUwgPSBhcnRpY2xlO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25DZW50ZXIpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==