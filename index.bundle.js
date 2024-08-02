"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/my-font.woff2 */ "./assets/fonts/my-font.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/my-font.woff */ "./assets/fonts/my-font.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GoldropspersonaluseRegular-9Ynn5.otf */ "./assets/fonts/GoldropspersonaluseRegular-9Ynn5.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/amazing.otf */ "./assets/fonts/amazing.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home.png */ "./src/images/home.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GoldenbeachpersonaluseBdit-jEgDM.otf */ "./assets/fonts/GoldenbeachpersonaluseBdit-jEgDM.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
}

@font-face {
    font-family: 'MyFont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'AmazingFont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(opentype),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff'),
        url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

nav {
    display: flex;
    justify-content: center;
    background-color: black;

}

button {
    font-family: 'AmazingFont';
    font-size: 2rem;
    background-color: #ffdd57;
    color: black;
    border: none;
    padding: 20px 40px;
    margin: 30px;
    margin-bottom: 0;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
}

    button::before,
    button::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 165, 0, 0.6), rgba(255, 69, 0, 0.6));
        transform: translateX(-50%) translateY(-50%);
        opacity: 0;
        transition: transform 0.5s ease, opacity 0.5s ease;
        z-index: -1;
    }


    button:hover {
        transform: scale(1.1) rotate(-5deg);
        background-color: #ff4500;
        color: white;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.7);
    }


    button:hover::before,
    button:hover::after {
        transform: translateX(-50%) translateY(-50%) scale(1.2);
        opacity: 1;
    }

    .home {
        background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) no-repeat center center;
        background-size: cover;
        height: 91vh;

    }

    .top {
        font-family: 'MyFont';
        position: absolute;
        z-index: 1;
        color: white;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 0);
        font-size: 6rem;

    }

    .bottom-links {
        font-family: 'MyFont';
        position: absolute;
        color: white;
        bottom: 10px;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .bottom-links ul {
        display: flex;
        width: 100%;
        justify-content: space-around;
        list-style-type: none;
    }

    ul li.Meat,
    li.Vegan,
    li.Soft-Drinks,
    li.Alcohol {
        border: none;
        height: 100%;
        font-size: 1.5rem;
        color: white;
        font-family: 'MyFont';
        padding: 10px 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    ul li.Meat::before,
    ul li.Vegan::before,
    ul li.Soft-Drinks::before,
    ul li.Alcohol::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 200%;
        height: 100%;
        background: radial-gradient(circle, rgba(255, 165, 0, 0.6), rgba(255, 69, 0, 0.6));
        transform: translateX(-50%) translateY(-100%);
        transition: transform 0.3s ease;
        opacity: 0;
        z-index: -1;
    }

    ul li.Meat:hover,
    li.Vegan:hover,
    li.Soft-Drinks:hover,
    li.Alcohol:hover {
        transform: scale(1.1) rotate(-5deg);
        color: black;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.7);
    }

    ul li.Meat:hover::before,
    ul li.Vegan:hover::before,
    ul li.Soft-Drinks:hover::before,
    ul li.Alcohol:hover::before {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    ul li.Meat::after,
    ul li.Vegan::after,
    ul li.Soft-Drinks::after,
    ul li.Alcohol::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 200%;
        height: 100%;
        background: radial-gradient(circle, rgba(255, 165, 0, 0.6), rgba(255, 69, 0, 0.6));
        transform: translateX(-50%) translateY(-100%);
        transition: transform 0.5s ease;
        opacity: 0;
        z-index: -1;
    }

    ul li.Meat:hover::after,
    ul li.Vegan:hover::after,
    ul li.Soft-Drinks:hover::after,
    ul li.Alcohol:hover::after {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
        transition: transform 0.5s ease, opacity 0.5s ease;
    }



    /* menu */

    .underline {
        width: 5rem;
        height: 0.25rem;
        background: gold;
        margin-left: auto;
        margin-right: auto;
    }

    .title {
        text-align: center;
        margin-bottom: 2rem;
    }

    .menu-title {
        font-family: 'AmazingFont';
        font-size: 2rem;
        margin: 10px 0 32px;
    }

    .section-center {
        width: 90vw;
        margin: 0 auto;
        max-width: 1170px;
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 3rem 2rem;
        justify-items: center;
    }

    .menu {
        background-color: rgba(0, 0, 0, 0.5);
        padding: 5rem 0;
    }

    .menu-item {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 1rem 2rem;
        max-width: 25rem;
    }

    .photo {
        object-fit: cover;
        height: 200px;
        border: 0.25rem solid gold;
        border-radius: 5px;
    }

    img {
        display: block;
    }

    .item-info header {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.5px dotted gray;
    }

    @font-face {
        font-family: 'MenuFont';
        src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('opentype'),
            url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('opentype');
        font-weight: 600;
        font-style: normal;
    }

    .item-info h4 {
        font-family: 'MenuFont';
        margin-bottom: 0.5rem;
    }

    .price {
        color: gold;
    }

    .item-text {
        font-family: '';
        margin-bottom: 0;
        padding-top: 1rem;
    }




    @media screen and (min-width: 768px) {
        .menu-item {
            grid-template-columns: 225px 1fr;
            gap: 0 1.25rem;
            max-width: 40rem;
        }

        .photo {
            height: 175px;
        }
    }

    @media screen and (min-width: 1200px) {
        .section-center {
            width: 95vw;
            grid-template-columns: 1fr 1fr;
        }

        .photo {
            height: 150px;
        }
    }


    /* about */



    #info-container ul {
        list-style-type: none;
        padding: 0;
    }

    #info-container ul li.about-list {
        border: none;
        height: 100%;
        font-size: 4rem;
        font-family: 'MyFont';
        margin-bottom: 10px;
    }

    #info-container ul li.about-list a.about-link {
        color: white;
        text-decoration: none;
        display: inline-block;
        padding: 15px 25px;
        background-color: #007bff;
        border: 0.2rem solid #ffdd57;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }

    #info-container ul li.about-list a.about-link:hover {
        border: 0.2rem solid #ff0000 !important;
        transform: scale(1.1) rotate(-5deg) !important;
        background-color: #ff0000 !important;
        color: #000000 !important;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.7) !important;
    }

    .about-container {
        height: 90vh;
        background-color: rgba(0, 0, 0, 1);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: white;
    }

    #info-container {
        height: 60vh;
        width: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(145deg, #2e2e2e, #1a1a1a);
        box-shadow: 20px 20px 60px #121212, -20px -20px 60px #383838;
        border-radius: 20px;
        transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
        transition: transform 0.5s;
    }

    #info-container:hover {
        transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
    }

    .about-title {
        font-family: 'MyFont';
        font-size: 5rem;
    }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'MyFont';\r\n    src: url('../assets/fonts/my-font.woff2') format('woff2'),\r\n        url('../assets/fonts/my-font.woff') format('woff');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'AmazingFont';\r\n    src: url('../assets/fonts/GoldropspersonaluseRegular-9Ynn5.otf') format(opentype),\r\n        url('../assets/fonts/my-font.woff') format('woff'),\r\n        url('../assets/fonts/amazing.otf') format('opentype');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: black;\r\n\r\n}\r\n\r\nbutton {\r\n    font-family: 'AmazingFont';\r\n    font-size: 2rem;\r\n    background-color: #ffdd57;\r\n    color: black;\r\n    border: none;\r\n    padding: 20px 40px;\r\n    margin: 30px;\r\n    margin-bottom: 0;\r\n    border-radius: 10px;\r\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);\r\n    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n    button::before,\r\n    button::after {\r\n        content: '';\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        width: 200%;\r\n        height: 200%;\r\n        background: radial-gradient(circle, rgba(255, 165, 0, 0.6), rgba(255, 69, 0, 0.6));\r\n        transform: translateX(-50%) translateY(-50%);\r\n        opacity: 0;\r\n        transition: transform 0.5s ease, opacity 0.5s ease;\r\n        z-index: -1;\r\n    }\r\n\r\n\r\n    button:hover {\r\n        transform: scale(1.1) rotate(-5deg);\r\n        background-color: #ff4500;\r\n        color: white;\r\n        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.7);\r\n    }\r\n\r\n\r\n    button:hover::before,\r\n    button:hover::after {\r\n        transform: translateX(-50%) translateY(-50%) scale(1.2);\r\n        opacity: 1;\r\n    }\r\n\r\n    .home {\r\n        background: url('./images/home.png') no-repeat center center;\r\n        background-size: cover;\r\n        height: 91vh;\r\n\r\n    }\r\n\r\n    .top {\r\n        font-family: 'MyFont';\r\n        position: absolute;\r\n        z-index: 1;\r\n        color: white;\r\n        left: 50%;\r\n        top: 50%;\r\n        transform: translate(-50%, 0);\r\n        font-size: 6rem;\r\n\r\n    }\r\n\r\n    .bottom-links {\r\n        font-family: 'MyFont';\r\n        position: absolute;\r\n        color: white;\r\n        bottom: 10px;\r\n        width: 100%;\r\n        height: 100px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-around;\r\n    }\r\n\r\n    .bottom-links ul {\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: space-around;\r\n        list-style-type: none;\r\n    }\r\n\r\n    ul li.Meat,\r\n    li.Vegan,\r\n    li.Soft-Drinks,\r\n    li.Alcohol {\r\n        border: none;\r\n        height: 100%;\r\n        font-size: 1.5rem;\r\n        color: white;\r\n        font-family: 'MyFont';\r\n        padding: 10px 20px;\r\n        border-radius: 10px;\r\n        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);\r\n        transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;\r\n        position: relative;\r\n        overflow: hidden;\r\n    }\r\n\r\n    ul li.Meat::before,\r\n    ul li.Vegan::before,\r\n    ul li.Soft-Drinks::before,\r\n    ul li.Alcohol::before {\r\n        content: '';\r\n        position: absolute;\r\n        top: 0;\r\n        left: 50%;\r\n        width: 200%;\r\n        height: 100%;\r\n        background: radial-gradient(circle, rgba(255, 165, 0, 0.6), rgba(255, 69, 0, 0.6));\r\n        transform: translateX(-50%) translateY(-100%);\r\n        transition: transform 0.3s ease;\r\n        opacity: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    ul li.Meat:hover,\r\n    li.Vegan:hover,\r\n    li.Soft-Drinks:hover,\r\n    li.Alcohol:hover {\r\n        transform: scale(1.1) rotate(-5deg);\r\n        color: black;\r\n        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.7);\r\n    }\r\n\r\n    ul li.Meat:hover::before,\r\n    ul li.Vegan:hover::before,\r\n    ul li.Soft-Drinks:hover::before,\r\n    ul li.Alcohol:hover::before {\r\n        transform: translateX(-50%) translateY(0);\r\n        opacity: 1;\r\n        transition: transform 0.3s ease, opacity 0.3s ease;\r\n    }\r\n\r\n    ul li.Meat::after,\r\n    ul li.Vegan::after,\r\n    ul li.Soft-Drinks::after,\r\n    ul li.Alcohol::after {\r\n        content: '';\r\n        position: absolute;\r\n        top: 0;\r\n        left: 50%;\r\n        width: 200%;\r\n        height: 100%;\r\n        background: radial-gradient(circle, rgba(255, 165, 0, 0.6), rgba(255, 69, 0, 0.6));\r\n        transform: translateX(-50%) translateY(-100%);\r\n        transition: transform 0.5s ease;\r\n        opacity: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    ul li.Meat:hover::after,\r\n    ul li.Vegan:hover::after,\r\n    ul li.Soft-Drinks:hover::after,\r\n    ul li.Alcohol:hover::after {\r\n        transform: translateX(-50%) translateY(0);\r\n        opacity: 1;\r\n        transition: transform 0.5s ease, opacity 0.5s ease;\r\n    }\r\n\r\n\r\n\r\n    /* menu */\r\n\r\n    .underline {\r\n        width: 5rem;\r\n        height: 0.25rem;\r\n        background: gold;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n\r\n    .title {\r\n        text-align: center;\r\n        margin-bottom: 2rem;\r\n    }\r\n\r\n    .menu-title {\r\n        font-family: 'AmazingFont';\r\n        font-size: 2rem;\r\n        margin: 10px 0 32px;\r\n    }\r\n\r\n    .section-center {\r\n        width: 90vw;\r\n        margin: 0 auto;\r\n        max-width: 1170px;\r\n        display: grid;\r\n        grid-template-columns: repeat(2, auto);\r\n        gap: 3rem 2rem;\r\n        justify-items: center;\r\n    }\r\n\r\n    .menu {\r\n        background-color: rgba(0, 0, 0, 0.5);\r\n        padding: 5rem 0;\r\n    }\r\n\r\n    .menu-item {\r\n        display: grid;\r\n        grid-template-columns: repeat(2, auto);\r\n        gap: 1rem 2rem;\r\n        max-width: 25rem;\r\n    }\r\n\r\n    .photo {\r\n        object-fit: cover;\r\n        height: 200px;\r\n        border: 0.25rem solid gold;\r\n        border-radius: 5px;\r\n    }\r\n\r\n    img {\r\n        display: block;\r\n    }\r\n\r\n    .item-info header {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        border-bottom: 0.5px dotted gray;\r\n    }\r\n\r\n    @font-face {\r\n        font-family: 'MenuFont';\r\n        src: url('../assets/fonts/GoldenbeachpersonaluseBdit-jEgDM.otf') format('opentype'),\r\n            url('../assets/fonts/GoldenbeachpersonaluseBdit-jEgDM.otf') format('opentype');\r\n        font-weight: 600;\r\n        font-style: normal;\r\n    }\r\n\r\n    .item-info h4 {\r\n        font-family: 'MenuFont';\r\n        margin-bottom: 0.5rem;\r\n    }\r\n\r\n    .price {\r\n        color: gold;\r\n    }\r\n\r\n    .item-text {\r\n        font-family: '';\r\n        margin-bottom: 0;\r\n        padding-top: 1rem;\r\n    }\r\n\r\n\r\n\r\n\r\n    @media screen and (min-width: 768px) {\r\n        .menu-item {\r\n            grid-template-columns: 225px 1fr;\r\n            gap: 0 1.25rem;\r\n            max-width: 40rem;\r\n        }\r\n\r\n        .photo {\r\n            height: 175px;\r\n        }\r\n    }\r\n\r\n    @media screen and (min-width: 1200px) {\r\n        .section-center {\r\n            width: 95vw;\r\n            grid-template-columns: 1fr 1fr;\r\n        }\r\n\r\n        .photo {\r\n            height: 150px;\r\n        }\r\n    }\r\n\r\n\r\n    /* about */\r\n\r\n\r\n\r\n    #info-container ul {\r\n        list-style-type: none;\r\n        padding: 0;\r\n    }\r\n\r\n    #info-container ul li.about-list {\r\n        border: none;\r\n        height: 100%;\r\n        font-size: 4rem;\r\n        font-family: 'MyFont';\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    #info-container ul li.about-list a.about-link {\r\n        color: white;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        padding: 15px 25px;\r\n        background-color: #007bff;\r\n        border: 0.2rem solid #ffdd57;\r\n        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);\r\n        border-radius: 10px;\r\n        transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;\r\n    }\r\n\r\n    #info-container ul li.about-list a.about-link:hover {\r\n        border: 0.2rem solid #ff0000 !important;\r\n        transform: scale(1.1) rotate(-5deg) !important;\r\n        background-color: #ff0000 !important;\r\n        color: #000000 !important;\r\n        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.7) !important;\r\n    }\r\n\r\n    .about-container {\r\n        height: 90vh;\r\n        background-color: rgba(0, 0, 0, 1);\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n        color: white;\r\n    }\r\n\r\n    #info-container {\r\n        height: 60vh;\r\n        width: 50vw;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        background: linear-gradient(145deg, #2e2e2e, #1a1a1a);\r\n        box-shadow: 20px 20px 60px #121212, -20px -20px 60px #383838;\r\n        border-radius: 20px;\r\n        transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);\r\n        transition: transform 0.5s;\r\n    }\r\n\r\n    #info-container:hover {\r\n        transform: perspective(1000px) rotateY(0deg) rotateX(0deg);\r\n    }\r\n\r\n    .about-title {\r\n        font-family: 'MyFont';\r\n        font-size: 5rem;\r\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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


/***/ }),

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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const divContent = document.querySelector("div#content");
const menuBtn = document.querySelector("nav button:nth-child(2)");
menuBtn.addEventListener("click", function () {
  divContent.innerHTML = "";
  divContent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
});

const aboutBtn = document.querySelector("nav button:nth-child(3)");
aboutBtn.addEventListener("click", () => {
  divContent.innerHTML = "";
  divContent.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])());
});

const homeBtn = document.querySelector("nav button:nth-child(1");
homeBtn.addEventListener("click", () => {
  divContent.innerHTML = "";
  divContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
});
document.querySelector("div#content").appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());


/***/ }),

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

/***/ "./assets/fonts/GoldenbeachpersonaluseBdit-jEgDM.otf":
/*!***********************************************************!*\
  !*** ./assets/fonts/GoldenbeachpersonaluseBdit-jEgDM.otf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a1d727909272c589ec34.otf";

/***/ }),

/***/ "./assets/fonts/GoldropspersonaluseRegular-9Ynn5.otf":
/*!***********************************************************!*\
  !*** ./assets/fonts/GoldropspersonaluseRegular-9Ynn5.otf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72d8317b09106067a327.otf";

/***/ }),

/***/ "./assets/fonts/amazing.otf":
/*!**********************************!*\
  !*** ./assets/fonts/amazing.otf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a67c7cac42c1b9c7ea14.otf";

/***/ }),

/***/ "./assets/fonts/my-font.woff":
/*!***********************************!*\
  !*** ./assets/fonts/my-font.woff ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0abcb1783b7b98ffb509.woff";

/***/ }),

/***/ "./assets/fonts/my-font.woff2":
/*!************************************!*\
  !*** ./assets/fonts/my-font.woff2 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cd379ec06129ef68f09.woff2";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxrSUFBZ0Q7QUFDNUYsNENBQTRDLGdJQUErQztBQUMzRiw0Q0FBNEMsZ0xBQXVFO0FBQ25ILDRDQUE0Qyw4SEFBOEM7QUFDMUYsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMsZ0xBQXVFO0FBQ25ILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGNBQWMsbUNBQW1DO0FBQ2pELGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RCxrQkFBa0IsbUNBQW1DO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxRQUFRLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sUUFBUSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxRQUFRLFlBQVksV0FBVyxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sUUFBUSxZQUFZLFdBQVcsWUFBWSxTQUFTLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sYUFBYSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFV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ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL215LWZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvbXktZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0dvbGRyb3BzcGVyc29uYWx1c2VSZWd1bGFyLTlZbm41Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9hbWF6aW5nLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2hvbWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0dvbGRlbmJlYWNocGVyc29uYWx1c2VCZGl0LWpFZ0RNLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWF6aW5nRm9udCc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQob3BlbnR5cGUpLFxyXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KCdvcGVudHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxufVxyXG5cclxubmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW1hemluZ0ZvbnQnO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiAgICBidXR0b246OmJlZm9yZSxcclxuICAgIGJ1dHRvbjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LCAxNjUsIDAsIDAuNiksIHJnYmEoMjU1LCA2OSwgMCwgMC42KSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLCBvcGFjaXR5IDAuNXMgZWFzZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC01ZGVnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NTAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidXR0b246aG92ZXI6OmJlZm9yZSxcclxuICAgIGJ1dHRvbjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEuMik7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAuaG9tZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA5MXZoO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAudG9wIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDZyZW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20tbGlua3Mge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tLWxpbmtzIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICB1bCBsaS5NZWF0LFxyXG4gICAgbGkuVmVnYW4sXHJcbiAgICBsaS5Tb2Z0LURyaW5rcyxcclxuICAgIGxpLkFsY29ob2wge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIGxpLk1lYXQ6OmJlZm9yZSxcclxuICAgIHVsIGxpLlZlZ2FuOjpiZWZvcmUsXHJcbiAgICB1bCBsaS5Tb2Z0LURyaW5rczo6YmVmb3JlLFxyXG4gICAgdWwgbGkuQWxjb2hvbDo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogMjAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTUsIDE2NSwgMCwgMC42KSwgcmdiYSgyNTUsIDY5LCAwLCAwLjYpKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIGxpLk1lYXQ6aG92ZXIsXHJcbiAgICBsaS5WZWdhbjpob3ZlcixcclxuICAgIGxpLlNvZnQtRHJpbmtzOmhvdmVyLFxyXG4gICAgbGkuQWxjb2hvbDpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNWRlZyk7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB9XHJcblxyXG4gICAgdWwgbGkuTWVhdDpob3Zlcjo6YmVmb3JlLFxyXG4gICAgdWwgbGkuVmVnYW46aG92ZXI6OmJlZm9yZSxcclxuICAgIHVsIGxpLlNvZnQtRHJpbmtzOmhvdmVyOjpiZWZvcmUsXHJcbiAgICB1bCBsaS5BbGNvaG9sOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdWwgbGkuTWVhdDo6YWZ0ZXIsXHJcbiAgICB1bCBsaS5WZWdhbjo6YWZ0ZXIsXHJcbiAgICB1bCBsaS5Tb2Z0LURyaW5rczo6YWZ0ZXIsXHJcbiAgICB1bCBsaS5BbGNvaG9sOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LCAxNjUsIDAsIDAuNiksIHJnYmEoMjU1LCA2OSwgMCwgMC42KSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuXHJcbiAgICB1bCBsaS5NZWF0OmhvdmVyOjphZnRlcixcclxuICAgIHVsIGxpLlZlZ2FuOmhvdmVyOjphZnRlcixcclxuICAgIHVsIGxpLlNvZnQtRHJpbmtzOmhvdmVyOjphZnRlcixcclxuICAgIHVsIGxpLkFsY29ob2w6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UsIG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyogbWVudSAqL1xyXG5cclxuICAgIC51bmRlcmxpbmUge1xyXG4gICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgIGhlaWdodDogMC4yNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBnb2xkO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LXRpdGxlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0FtYXppbmdGb250JztcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMzJweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi1jZW50ZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XHJcbiAgICAgICAgZ2FwOiAzcmVtIDJyZW07XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XHJcbiAgICAgICAgZ2FwOiAxcmVtIDJyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGhvdG8ge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIGdvbGQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0taW5mbyBoZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IGRvdHRlZCBncmF5O1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWVudUZvbnQnO1xyXG4gICAgICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pIGZvcm1hdCgnb3BlbnR5cGUnKSxcclxuICAgICAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1pbmZvIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01lbnVGb250JztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlIHtcclxuICAgICAgICBjb2xvcjogZ29sZDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS10ZXh0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJyc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNXB4IDFmcjtcclxuICAgICAgICAgICAgZ2FwOiAwIDEuMjVyZW07XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDByZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGhvdG8ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAuc2VjdGlvbi1jZW50ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogOTV2dztcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBob3RvIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIGFib3V0ICovXHJcblxyXG5cclxuXHJcbiAgICAjaW5mby1jb250YWluZXIgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICNpbmZvLWNvbnRhaW5lciB1bCBsaS5hYm91dC1saXN0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjaW5mby1jb250YWluZXIgdWwgbGkuYWJvdXQtbGlzdCBhLmFib3V0LWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICNmZmRkNTc7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAjaW5mby1jb250YWluZXIgdWwgbGkuYWJvdXQtbGlzdCBhLmFib3V0LWxpbms6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICNmZjAwMDAgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC01ZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAjaW5mby1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzJlMmUyZSwgIzFhMWExYSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDYwcHggIzEyMTIxMiwgLTIwcHggLTIwcHggNjBweCAjMzgzODM4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoLTEwZGVnKSByb3RhdGVYKDVkZWcpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgfVxyXG5cclxuICAgICNpbmZvLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQjs4REFDc0Q7SUFDdEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQjs7a0VBRXlEO0lBQ3pELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLGlGQUFpRjtJQUNqRixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztJQUVJOztRQUVJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtGQUFrRjtRQUNsRiw0Q0FBNEM7UUFDNUMsVUFBVTtRQUNWLGtEQUFrRDtRQUNsRCxXQUFXO0lBQ2Y7OztJQUdBO1FBQ0ksbUNBQW1DO1FBQ25DLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osMkNBQTJDO0lBQy9DOzs7SUFHQTs7UUFFSSx1REFBdUQ7UUFDdkQsVUFBVTtJQUNkOztJQUVBO1FBQ0ksMkVBQTREO1FBQzVELHNCQUFzQjtRQUN0QixZQUFZOztJQUVoQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixTQUFTO1FBQ1QsUUFB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SUFDN0c7O0lBRUE7UUFDSSx1Q0FBdUM7UUFDdkMsOENBQThDO1FBQzlDLG9DQUFvQztRQUNwQyx5QkFBeUI7UUFDekIsd0RBQXdEO0lBQzVEOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtDQUFrQztRQUNsQyxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIscURBQXFEO1FBQ3JELDREQUE0RDtRQUM1RCxtQkFBbUI7UUFDbkIsNERBQTREO1FBQzVELDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLDBEQUEwRDtJQUM5RDs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvbXktZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXHJcXG4gICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnRzL215LWZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0FtYXppbmdGb250JztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Hb2xkcm9wc3BlcnNvbmFsdXNlUmVndWxhci05WW5uNS5vdGYnKSBmb3JtYXQob3BlbnR5cGUpLFxcclxcbiAgICAgICAgdXJsKCcuLi9hc3NldHMvZm9udHMvbXktZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxyXFxuICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250cy9hbWF6aW5nLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBbWF6aW5nRm9udCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuICAgIGJ1dHRvbjo6YmVmb3JlLFxcclxcbiAgICBidXR0b246OmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICB3aWR0aDogMjAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMjAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LCAxNjUsIDAsIDAuNiksIHJnYmEoMjU1LCA2OSwgMCwgMC42KSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLCBvcGFjaXR5IDAuNXMgZWFzZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC01ZGVnKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGJ1dHRvbjpob3Zlcjo6YmVmb3JlLFxcclxcbiAgICBidXR0b246aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEuMik7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5ob21lIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZXMvaG9tZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDkxdmg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvcCB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYm90dG9tLWxpbmtzIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJvdHRvbS1saW5rcyB1bCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bCBsaS5NZWF0LFxcclxcbiAgICBsaS5WZWdhbixcXHJcXG4gICAgbGkuU29mdC1Ecmlua3MsXFxyXFxuICAgIGxpLkFsY29ob2wge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bCBsaS5NZWF0OjpiZWZvcmUsXFxyXFxuICAgIHVsIGxpLlZlZ2FuOjpiZWZvcmUsXFxyXFxuICAgIHVsIGxpLlNvZnQtRHJpbmtzOjpiZWZvcmUsXFxyXFxuICAgIHVsIGxpLkFsY29ob2w6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAyMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTUsIDE2NSwgMCwgMC42KSwgcmdiYSgyNTUsIDY5LCAwLCAwLjYpKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWwgbGkuTWVhdDpob3ZlcixcXHJcXG4gICAgbGkuVmVnYW46aG92ZXIsXFxyXFxuICAgIGxpLlNvZnQtRHJpbmtzOmhvdmVyLFxcclxcbiAgICBsaS5BbGNvaG9sOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTVkZWcpO1xcclxcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bCBsaS5NZWF0OmhvdmVyOjpiZWZvcmUsXFxyXFxuICAgIHVsIGxpLlZlZ2FuOmhvdmVyOjpiZWZvcmUsXFxyXFxuICAgIHVsIGxpLlNvZnQtRHJpbmtzOmhvdmVyOjpiZWZvcmUsXFxyXFxuICAgIHVsIGxpLkFsY29ob2w6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bCBsaS5NZWF0OjphZnRlcixcXHJcXG4gICAgdWwgbGkuVmVnYW46OmFmdGVyLFxcclxcbiAgICB1bCBsaS5Tb2Z0LURyaW5rczo6YWZ0ZXIsXFxyXFxuICAgIHVsIGxpLkFsY29ob2w6OmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgd2lkdGg6IDIwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwgMTY1LCAwLCAwLjYpLCByZ2JhKDI1NSwgNjksIDAsIDAuNikpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTEwMCUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bCBsaS5NZWF0OmhvdmVyOjphZnRlcixcXHJcXG4gICAgdWwgbGkuVmVnYW46aG92ZXI6OmFmdGVyLFxcclxcbiAgICB1bCBsaS5Tb2Z0LURyaW5rczpob3Zlcjo6YWZ0ZXIsXFxyXFxuICAgIHVsIGxpLkFsY29ob2w6aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UsIG9wYWNpdHkgMC41cyBlYXNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qIG1lbnUgKi9cXHJcXG5cXHJcXG4gICAgLnVuZGVybGluZSB7XFxyXFxuICAgICAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMC4yNXJlbTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IGdvbGQ7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGUge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS10aXRsZSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ0FtYXppbmdGb250JztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDMycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY3Rpb24tY2VudGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDExNzBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXHJcXG4gICAgICAgIGdhcDogM3JlbSAycmVtO1xcclxcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1pdGVtIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXHJcXG4gICAgICAgIGdhcDogMXJlbSAycmVtO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGhvdG8ge1xcclxcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIGdvbGQ7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pdGVtLWluZm8gaGVhZGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBkb3R0ZWQgZ3JheTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAZm9udC1mYWNlIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWVudUZvbnQnO1xcclxcbiAgICAgICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Hb2xkZW5iZWFjaHBlcnNvbmFsdXNlQmRpdC1qRWdETS5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyksXFxyXFxuICAgICAgICAgICAgdXJsKCcuLi9hc3NldHMvZm9udHMvR29sZGVuYmVhY2hwZXJzb25hbHVzZUJkaXQtakVnRE0ub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaXRlbS1pbmZvIGg0IHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWVudUZvbnQnO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcmljZSB7XFxyXFxuICAgICAgICBjb2xvcjogZ29sZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaXRlbS10ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnJztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgICAgLm1lbnUtaXRlbSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjVweCAxZnI7XFxyXFxuICAgICAgICAgICAgZ2FwOiAwIDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5waG90byB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxNzVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgICAgIC5zZWN0aW9uLWNlbnRlciB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDk1dnc7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnBob3RvIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qIGFib3V0ICovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICNpbmZvLWNvbnRhaW5lciB1bCB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNpbmZvLWNvbnRhaW5lciB1bCBsaS5hYm91dC1saXN0IHtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2luZm8tY29udGFpbmVyIHVsIGxpLmFib3V0LWxpc3QgYS5hYm91dC1saW5rIHtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxyXFxuICAgICAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZmZkZDU3O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2luZm8tY29udGFpbmVyIHVsIGxpLmFib3V0LWxpc3QgYS5hYm91dC1saW5rOmhvdmVyIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICNmZjAwMDAgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTVkZWcpICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjcpICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2luZm8tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMyZTJlMmUsICMxYTFhMWEpO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDYwcHggIzEyMTIxMiwgLTIwcHggLTIwcHggNjBweCAjMzgzODM4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKC0xMGRlZykgcm90YXRlWCg1ZGVnKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNpbmZvLWNvbnRhaW5lcjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKSByb3RhdGVYKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC10aXRsZSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgICAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFVzKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0LXRpdGxlXCIpXHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCJcclxuICBpbmZvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5mby1jb250YWluZXJcIik7XHJcbiAgY29uc3QgbGlua3MgPSBbXHJcbiAgICBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIixcclxuICAgIFwiaHR0cHM6Ly9qb2huc21pbGdhLmNvbS9cIixcclxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL01hdHRoaWFzLWRvdC1jb20vcmVzdGF1cmFudFwiLFxyXG4gICAgXCJsaXZlXCIsXHJcbiAgXTtcclxuICBjb25zdCBuYW1lcyA9IFtcIlRoZSBPZGluIFByb2plY3RcIiwgXCJKb2huIFNtaWxnYVwiLCBcIkdpdGh1YiBQYWdlXCIsIFwiTGl2ZSBEZW1vXCJdO1xyXG5cclxuICBjb25zdCBpbmZvVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gIGxldCB0ZW1wbGF0ZSA9IGxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBgPGxpIGNsYXNzPVwiYWJvdXQtbGlzdFwiPiA8YSBjbGFzcz1cImFib3V0LWxpbmtcIiBocmVmPSR7bGlua30+JHtuYW1lc1tpbmRleF19PC9hPjwvbGk+YDtcclxuICB9KTtcclxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLmpvaW4oXCJcIik7XHJcbiAgaW5mb1VsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb1VsKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuXHJcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBcIlJlc3RhdXJhbnRcIjtcclxuICBjb25zdCByZXN0YXVyYW50TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblxyXG4gIGgxLmlubmVySFRNTCA9IHJlc3RhdXJhbnROYW1lO1xyXG4gIGgxLmNsYXNzTGlzdC5hZGQoXCJ0b3BcIik7XHJcbiAgcmVzdGF1cmFudE5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gIGNvbnN0IGJvdHRvbUxpbmtzID0gW1wiTWVhdFwiLCBcIlZlZ2FuXCIsIFwiU29mdC1Ecmlua3NcIiwgXCJBbGNvaG9sXCJdO1xyXG4gIGNvbnN0IGJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm90dG9tLmNsYXNzTGlzdC5hZGQoXCJib3R0b20tbGlua3NcIik7XHJcbiAgY29uc3QgdUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgXHJcblxyXG4gIGJvdHRvbUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQobGluayk7XHJcbiAgICBsaXN0LnRleHRDb250ZW50ID0gbGluaztcclxuICAgIHVMaXN0LmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gIH0pO1xyXG5cclxuICBib3R0b20uYXBwZW5kQ2hpbGQodUxpc3QpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWVDb250YWluZXIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm90dG9tKTtcclxuICByZXR1cm4gZGl2O1xyXG59XHJcbi8vIGNsYXNzIEhvbWVQYWdlIHtcclxuLy8gICBjb25zdHJ1Y3RvcigpIHtcclxuLy8gICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgIHRoaXMuZGl2LmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4vLyAgICAgdGhpcy5jcmVhdGVDb250ZW50KCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjcmVhdGVDb250ZW50KCkge1xyXG4vLyAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4vLyAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVSZXN0YXVyYW50TmFtZUNvbnRhaW5lcigpKTtcclxuLy8gICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQm90dG9tTGlua3MoKSk7XHJcblxyXG4vLyAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRpdik7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjcmVhdGVSZXN0YXVyYW50TmFtZUNvbnRhaW5lcigpIHtcclxuLy8gICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHJcbi8vICAgICBoMS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudFwiO1xyXG4vLyAgICAgaDEuY2xhc3NMaXN0LmFkZChcInRvcFwiKTtcclxuXHJcbi8vICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xyXG4vLyAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuLy8gICB9XHJcblxyXG4vLyAgIGNyZWF0ZUJvdHRvbUxpbmtzKCkge1xyXG4vLyAgICAgY29uc3QgYm90dG9tTGlua3MgPSBbXCJNZWF0XCIsIFwiVmVnYW5cIiwgXCJTb2Z0LURyaW5rc1wiLCBcIkFsY29ob2xcIl07XHJcbi8vICAgICBjb25zdCBib3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgYm90dG9tLmNsYXNzTGlzdC5hZGQoXCJib3R0b20tbGlua3NcIik7XHJcbi8vICAgICBjb25zdCB1TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbi8vICAgICBib3R0b21MaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbi8vICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbi8vICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZChsaW5rKTtcclxuLy8gICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGxpbms7XHJcbi8vICAgICAgIHVMaXN0LmFwcGVuZENoaWxkKGxpc3QpO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgYm90dG9tLmFwcGVuZENoaWxkKHVMaXN0KTtcclxuLy8gICAgIHJldHVybiBib3R0b207XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvLyBUbyBjcmVhdGUgYW5kIGFkZCB0aGUgaG9tZSBwYWdlIHRvIHRoZSBET01cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcclxuLy8gICBuZXcgSG9tZVBhZ2UoKTtcclxuLy8gfVxyXG4iLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGFib3V0VXMgZnJvbSBcIi4vYWJvdXRcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgYnV0dG9uOm50aC1jaGlsZCgyKVwiKTtcclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGRpdkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XHJcbn0pO1xyXG5cclxuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IGJ1dHRvbjpudGgtY2hpbGQoMylcIik7XHJcbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZGl2Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRVcygpKTtcclxufSk7XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiBidXR0b246bnRoLWNoaWxkKDFcIik7XHJcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaXZDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcbiAgY29uc3QgbWVudSA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHRpdGxlOiBcImJ1dHRlcm1pbGsgcGFuY2FrZXNcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiYnJlYWtmYXN0XCIsXHJcbiAgICAgIHByaWNlOiAxNS45OSxcclxuICAgICAgaW1nOiByZXF1aXJlKFwiLi9pbWFnZXMvaG9tZS5wbmdcIiksXHJcbiAgICAgIGRlc2M6IGBJJ20gYmFieSB3b2tlIG1sa3NoayB3b2xmIGJpdHRlcnMgbGl2ZS1lZGdlIGJsdWUgYm90dGxlLCBoYW1tb2NrIGZyZWVnYW4gY29wcGVyIG11ZyB3aGF0ZXZlciBjb2xkLXByZXNzZWQgYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICB0aXRsZTogXCJkaW5lciBkb3VibGVcIixcclxuICAgICAgY2F0ZWdvcnk6IFwibHVuY2hcIixcclxuICAgICAgcHJpY2U6IDEzLjk5LFxyXG4gICAgICBpbWc6IHJlcXVpcmUoXCIuL2ltYWdlcy9pdGVtLTIuanBlZ1wiKSxcclxuICAgICAgZGVzYzogYHZhcG9yd2FyZSBpUGhvbmUgbXVtYmxlY29yZSBzZWx2YWdlIHJhdyBkZW5pbSBzbG93LWNhcmIgbGVnZ2luZ3MgZ29jaHVqYW5nIGhlbHZldGljYSBtYW4gYnJhaWQgamlhbmJpbmcuIE1hcmZhIHRodW5kZXJjYXRzIGAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgdGl0bGU6IFwiZ29kemlsbGEgbWlsa3NoYWtlXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcInNoYWtlc1wiLFxyXG4gICAgICBwcmljZTogNi45OSxcclxuICAgICAgaW1nOiByZXF1aXJlKFwiLi9pbWFnZXMvaXRlbS0zLmpwZWdcIiksXHJcbiAgICAgIGRlc2M6IGBvbWJ1Y2hhIGNoaWxsd2F2ZSBmYW5ueSBwYWNrIDMgd29sZiBtb29uIHN0cmVldCBhcnQgcGhvdG8gYm9vdGggYmVmb3JlIHRoZXkgc29sZCBvdXQgb3JnYW5pYyB2aXJhbC5gLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIHRpdGxlOiBcImNvdW50cnkgZGVsaWdodFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJicmVha2Zhc3RcIixcclxuICAgICAgcHJpY2U6IDIwLjk5LFxyXG4gICAgICBpbWc6IHJlcXVpcmUoXCIuL2ltYWdlcy9pdGVtLTQuanBlZ1wiKSxcclxuICAgICAgZGVzYzogYFNoYWJieSBjaGljIGtlZmZpeWVoIG5ldXRyYSBzbmFja3dhdmUgcG9yayBiZWxseSBzaG9yZWRpdGNoLiBQcmlzbSBhdXN0aW4gbWxrc2hrIHRydWZmYXV0LCBgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDUsXHJcbiAgICAgIHRpdGxlOiBcImVnZyBhdHRhY2tcIixcclxuICAgICAgY2F0ZWdvcnk6IFwibHVuY2hcIixcclxuICAgICAgcHJpY2U6IDIyLjk5LFxyXG4gICAgICBpbWc6IHJlcXVpcmUoXCIuL2ltYWdlcy9pdGVtLTUuanBlZ1wiKSxcclxuICAgICAgZGVzYzogYGZyYW56ZW4gdmVnYW4gcGFic3QgYmljeWNsZSByaWdodHMga2lja3N0YXJ0ZXIgcGludGVyZXN0IG1lZGl0YXRpb24gZmFybS10by10YWJsZSA5MCdzIHBvcC11cCBgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDYsXHJcbiAgICAgIHRpdGxlOiBcIm9yZW8gZHJlYW1cIixcclxuICAgICAgY2F0ZWdvcnk6IFwic2hha2VzXCIsXHJcbiAgICAgIHByaWNlOiAxOC45OSxcclxuICAgICAgaW1nOiByZXF1aXJlKFwiLi9pbWFnZXMvaXRlbS02LmpwZWdcIiksXHJcbiAgICAgIGRlc2M6IGBQb3J0bGFuZCBjaGljaGFycm9uZXMgZXRoaWNhbCBlZGlzb24gYnVsYiwgcGFsbyBzYW50byBjcmFmdCBiZWVyIGNoaWEgaGVpcmxvb20gaVBob25lIGV2ZXJ5ZGF5YCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA3LFxyXG4gICAgICB0aXRsZTogXCJiYWNvbiBvdmVyZmxvd1wiLFxyXG4gICAgICBjYXRlZ29yeTogXCJicmVha2Zhc3RcIixcclxuICAgICAgcHJpY2U6IDguOTksXHJcbiAgICAgIGltZzogcmVxdWlyZShcIi4vaW1hZ2VzL2l0ZW0tNy5qcGVnXCIpLFxyXG4gICAgICBkZXNjOiBgY2FycnkgamlhbmJpbmcgbm9ybWNvcmUgZnJlZWdhbi4gVmlyYWwgc2luZ2xlLW9yaWdpbiBjb2ZmZWUgbGl2ZS1lZGdlLCBwb3JrIGJlbGx5IGNsb3VkIGJyZWFkIGljZWxhbmQgcHV0IGEgYmlyZCBgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDgsXHJcbiAgICAgIHRpdGxlOiBcImFtZXJpY2FuIGNsYXNzaWNcIixcclxuICAgICAgY2F0ZWdvcnk6IFwibHVuY2hcIixcclxuICAgICAgcHJpY2U6IDEyLjk5LFxyXG4gICAgICBpbWc6IHJlcXVpcmUoXCIuL2ltYWdlcy9pdGVtLTguanBlZ1wiKSxcclxuICAgICAgZGVzYzogYG9uIGl0IHR1bWJsciBraWNrc3RhcnRlciB0aHVuZGVyY2F0cyBtaWdhcyBldmVyeWRheSBjYXJyeSBzcXVpZCBwYWxvIHNhbnRvIGxlZ2dpbmdzLiBGb29kIHRydWNrIHRydWZmYXV0ICBgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDksXHJcbiAgICAgIHRpdGxlOiBcInF1YXJhbnRpbmUgYnVkZHlcIixcclxuICAgICAgY2F0ZWdvcnk6IFwic2hha2VzXCIsXHJcbiAgICAgIHByaWNlOiAxNi45OSxcclxuICAgICAgaW1nOiByZXF1aXJlKFwiLi9pbWFnZXMvaXRlbS05LmpwZWdcIiksXHJcbiAgICAgIGRlc2M6IGBza2F0ZWJvYXJkIGZhbSBzeW50aCBhdXRoZW50aWMgc2VtaW90aWNzLiBMaXZlLWVkZ2UgbHlmdCBhZiwgZWRpc29uIGJ1bGIgeXVjY2llIGNydWNpZml4IG1pY3JvZG9zaW5nLmAsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGgxLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRpdGxlXCIpO1xyXG4gIGgxLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xyXG5cclxuICBjb25zdCB1bmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICB1bmRlcmxpbmUuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuXHJcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gIHRpdGxlLmFwcGVuZENoaWxkKHVuZGVybGluZSk7XHJcblxyXG4gIGNvbnN0IHNlY3Rpb25DZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNlY3Rpb25DZW50ZXIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tY2VudGVyXCIpO1xyXG5cclxuICBsZXQgYXJ0aWNsZSA9IG1lbnUubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gYDxhcnRpY2xlIGNsYXNzPVwibWVudS1pdGVtXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz0ke2l0ZW0uaW1nfSBjbGFzcz1cInBob3RvXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWluZm9cIj5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDQ+JHtpdGVtLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwicHJpY2VcIj4kJHtpdGVtLnByaWNlfTwvaDQ+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICR7aXRlbS5kZXNjfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+YDtcclxuICB9KTtcclxuICBhcnRpY2xlID0gYXJ0aWNsZS5qb2luKFwiXCIpO1xyXG4gIHNlY3Rpb25DZW50ZXIuaW5uZXJIVE1MID0gYXJ0aWNsZTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uQ2VudGVyKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=