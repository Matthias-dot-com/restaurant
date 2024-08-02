"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["about"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutUs)
/* harmony export */ });
function aboutUs() {
  const container = document.createElement("div");
  container.classList.add("about-container");
  const infoContainer = document.createElement("div");
  const title = document.createElement("h1");
  title.classList.add("about-title")
  title.textContent = "About Us"
  infoContainer.setAttribute("id", "info-container");
  const links = [
    "https://www.theodinproject.com/",
    "https://johnsmilga.com/",
    "https://github.com/Matthias-dot-com/restaurant",
    "live",
  ];
  const names = ["The Odin Project", "John Smilga", "Github Page", "Live Demo"];

  const infoUl = document.createElement("ul");

  let template = links.map((link, index) => {
    return `<li class="about-list"> <a class="about-link" href=${link}>${names[index]}</a></li>`;
  });
  template = template.join("");
  infoUl.innerHTML = template;

  container.appendChild(title);
  infoContainer.appendChild(infoUl);
  container.appendChild(infoContainer);
  return container;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxLQUFLLEdBQUcsYUFBYTtBQUN0RixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFVzKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0LXRpdGxlXCIpXHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCJcclxuICBpbmZvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5mby1jb250YWluZXJcIik7XHJcbiAgY29uc3QgbGlua3MgPSBbXHJcbiAgICBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIixcclxuICAgIFwiaHR0cHM6Ly9qb2huc21pbGdhLmNvbS9cIixcclxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL01hdHRoaWFzLWRvdC1jb20vcmVzdGF1cmFudFwiLFxyXG4gICAgXCJsaXZlXCIsXHJcbiAgXTtcclxuICBjb25zdCBuYW1lcyA9IFtcIlRoZSBPZGluIFByb2plY3RcIiwgXCJKb2huIFNtaWxnYVwiLCBcIkdpdGh1YiBQYWdlXCIsIFwiTGl2ZSBEZW1vXCJdO1xyXG5cclxuICBjb25zdCBpbmZvVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gIGxldCB0ZW1wbGF0ZSA9IGxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBgPGxpIGNsYXNzPVwiYWJvdXQtbGlzdFwiPiA8YSBjbGFzcz1cImFib3V0LWxpbmtcIiBocmVmPSR7bGlua30+JHtuYW1lc1tpbmRleF19PC9hPjwvbGk+YDtcclxuICB9KTtcclxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLmpvaW4oXCJcIik7XHJcbiAgaW5mb1VsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb1VsKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=