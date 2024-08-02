"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
const content = document.querySelector("div#content");

function createHome() {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuXHJcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBcIlJlc3RhdXJhbnRcIjtcclxuICBjb25zdCByZXN0YXVyYW50TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblxyXG4gIGgxLmlubmVySFRNTCA9IHJlc3RhdXJhbnROYW1lO1xyXG4gIGgxLmNsYXNzTGlzdC5hZGQoXCJ0b3BcIik7XHJcbiAgcmVzdGF1cmFudE5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gIGNvbnN0IGJvdHRvbUxpbmtzID0gW1wiTWVhdFwiLCBcIlZlZ2FuXCIsIFwiU29mdC1Ecmlua3NcIiwgXCJBbGNvaG9sXCJdO1xyXG4gIGNvbnN0IGJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm90dG9tLmNsYXNzTGlzdC5hZGQoXCJib3R0b20tbGlua3NcIik7XHJcbiAgY29uc3QgdUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgXHJcblxyXG4gIGJvdHRvbUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQobGluayk7XHJcbiAgICBsaXN0LnRleHRDb250ZW50ID0gbGluaztcclxuICAgIHVMaXN0LmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gIH0pO1xyXG5cclxuICBib3R0b20uYXBwZW5kQ2hpbGQodUxpc3QpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWVDb250YWluZXIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm90dG9tKTtcclxuICByZXR1cm4gZGl2O1xyXG59XHJcbi8vIGNsYXNzIEhvbWVQYWdlIHtcclxuLy8gICBjb25zdHJ1Y3RvcigpIHtcclxuLy8gICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgIHRoaXMuZGl2LmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4vLyAgICAgdGhpcy5jcmVhdGVDb250ZW50KCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjcmVhdGVDb250ZW50KCkge1xyXG4vLyAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4vLyAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVSZXN0YXVyYW50TmFtZUNvbnRhaW5lcigpKTtcclxuLy8gICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQm90dG9tTGlua3MoKSk7XHJcblxyXG4vLyAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRpdik7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjcmVhdGVSZXN0YXVyYW50TmFtZUNvbnRhaW5lcigpIHtcclxuLy8gICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHJcbi8vICAgICBoMS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudFwiO1xyXG4vLyAgICAgaDEuY2xhc3NMaXN0LmFkZChcInRvcFwiKTtcclxuXHJcbi8vICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xyXG4vLyAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuLy8gICB9XHJcblxyXG4vLyAgIGNyZWF0ZUJvdHRvbUxpbmtzKCkge1xyXG4vLyAgICAgY29uc3QgYm90dG9tTGlua3MgPSBbXCJNZWF0XCIsIFwiVmVnYW5cIiwgXCJTb2Z0LURyaW5rc1wiLCBcIkFsY29ob2xcIl07XHJcbi8vICAgICBjb25zdCBib3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgYm90dG9tLmNsYXNzTGlzdC5hZGQoXCJib3R0b20tbGlua3NcIik7XHJcbi8vICAgICBjb25zdCB1TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbi8vICAgICBib3R0b21MaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbi8vICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbi8vICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZChsaW5rKTtcclxuLy8gICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGxpbms7XHJcbi8vICAgICAgIHVMaXN0LmFwcGVuZENoaWxkKGxpc3QpO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgYm90dG9tLmFwcGVuZENoaWxkKHVMaXN0KTtcclxuLy8gICAgIHJldHVybiBib3R0b207XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvLyBUbyBjcmVhdGUgYW5kIGFkZCB0aGUgaG9tZSBwYWdlIHRvIHRoZSBET01cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcclxuLy8gICBuZXcgSG9tZVBhZ2UoKTtcclxuLy8gfVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=