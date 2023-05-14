/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--letter-spacing: 4px;\r\n\t--border-radius: 6px;\r\n\t--font-family: monospace;\r\n\t--btn-padding: 10px 12px;\r\n\t--btn-font-weight: 700;\r\n\t--transition: all 0.2s ease-in-out;\r\n}\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\ttransition: var(--transition);\r\n}\r\nul, ol {\r\n\tlist-style: none;\r\n}\r\na {\r\n\ttext-decoration: none;\r\n}\r\n\r\nbutton {\r\n\tletter-spacing: var(--letter-spacing);\r\n\tpadding: var(--btn-padding);\r\n\tcursor: pointer;\r\n\tfont-weight: var(--btn-font-weight);\r\n}\r\n\r\n/* Have an image as the background of the page */\r\nbody {\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\tbackground-repeat: no-repeat;\r\n\t/* Properly centers image on page  */\r\n\tbackground-position: center center; \r\n\t/* Stays in place whilst scrolling */\r\n\tbackground-attachment: fixed;\r\n\t/* Scale dimensions to container and try to maintain aspect ratio */\r\n\tbackground-size: cover;\r\n\tfont-family: var(--font-family);\r\n\tfont-size: 14px;\r\n}\r\n\r\n.content {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n/* header styling */\r\nheader {\r\n\tpadding: 14px 12px;\r\n\tbackground-color: black;\r\n\topacity: 0.80;\r\n\ttext-align: center;\r\n\tcolor: white;\r\n}\r\n\r\n/* Nav styling */\r\nnav {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 2fr 1fr;\r\n\talign-items: center;\r\n}\r\nnav > ul {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n.nav-links-main {\r\n\tjustify-content: space-evenly;\r\n\twidth: 70%;\r\n\tmargin: 0 auto;\r\n}\r\n.nav-links-secondary {\r\n\tjustify-content: space-evenly;\t\r\n}\r\n\r\n/* Color the text in the nav items */\r\n.nav-item > *,\r\nh1 {\r\n\tfont-size: 20px;\r\n\tcolor: white;\r\n} \r\n\r\n/* Style main 3 nav buttons, and then also the links */\r\n.nav-button {\r\n\tborder-style: solid;\r\n\tborder: none;\r\n\tbackground: inherit;\r\n}\r\n\r\nnav .nav-button,\r\nfooter a,\r\n.nav-links-secondary a {\r\n\tpadding-bottom: 4px;\r\n\tborder-bottom: 2px solid transparent;\r\n}\r\n/* Now on hover, reveal the bottom border */\r\nnav .nav-button:hover,\r\n.footer-nav-links a:hover,\r\n.nav-links-secondary a:hover {\r\n\tborder-bottom: 2px solid white;\r\n}\r\n\r\n/* For the active button, which is the button that indicates the tab being used, we will underline it with border */\r\nnav .nav-button[data-active] {\r\n\tborder-bottom: 2px solid white;\r\n}\r\n\r\n/* footer styling */\r\nfooter {\r\n\tjustify-self: flex-end;\r\n\tbackground-color: rgba(0,0,0, 0.3);\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tpadding: 12px 0;\t\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\trow-gap: 10px;\t\r\n}\r\n/* Make the ul's both flex-boxes */\r\nfooter > ul {\r\n\tdisplay: flex;\r\n\tcolumn-gap: 30px;\r\n}\r\nfooter .social-icon-img {\r\n\theight: 20px;\r\n}\r\nfooter a {\r\n\tcolor: inherit;\r\n}\r\n\r\n/* Adding vertical margin to the main content section to help with spacing since it's going to be switching tabs */\r\n.main-content {\r\n\tmargin: 16px 0;\r\n}\r\n\r\n/* Home content page styling */\r\n/* Welcome section */\r\n#welcome-section {\r\n\tbackground-color: rgba(0,0,0, 0.5);\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\twidth: 50%;\r\n\tmargin: 24px auto;\r\n\tpadding: 12px 16px;\r\n\tborder-radius:  var(--border-radius);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\trow-gap: 20px;\r\n\talign-items: center;\r\n}\r\n#home-page-img-el {\r\n\twidth: 200px;\r\n\tborder-radius: var(--border-radius);\t\r\n}\r\n.page-divider {\r\n\twidth: 50%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n/* Styles the home content sections; these sections are different from the welcome section */\r\n.home-content-card {\r\n\tbackground-color: rgba(0,0,0, 0.5);\r\n\tcolor: white;\r\n\twidth: 40%;\r\n\tmargin: 16px auto;\r\n\tpadding: 12px 16px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\trow-gap: 12px;\r\n} \r\n\r\n/* Styles link on the home content cards, which looks like a button */\r\n.home-content-card a {\r\n\tcolor: black;\r\n\tfont-weight: var(--btn-font-weight);\r\n\tbackground-color: white;\r\n\tborder: 2px solid black;\r\n\tpadding: var(--btn-padding);\r\n\talign-self: flex-end;\r\n\tletter-spacing: var(--letter-spacing);\r\n}\r\n.home-content-card a:hover {\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n/* Styling for menu tab or menu-content-section */\r\n.menu-content-section {\r\n\tmargin: 12px 16px;\r\n\ttext-align: center;\r\n\tcolor: white;\r\n}\r\n\r\n/* Styling the menu grid */\r\n.menu-items-grid {\r\n\tbackground-color: rgba(0,0,0, 0.5);\r\n\tmargin: 0 auto;\r\n\tpadding: 20px 24px;\r\n\tdisplay: grid;\r\n\twidth: 70%;\r\n\t/* The size of the cards will be kind of limited, but that's okay */\r\n\tgrid-template-columns: repeat(2, 1fr);\r\n\t/* Rows are at least 150px or just fits the width of the container if there's too much content inside of it */\r\n\tgrid-auto-rows: minmax(160px, max-content);\r\n\tcolor: inherit;\t\r\n\tcolumn-gap: 12px;\r\n\trow-gap: 20px;\r\n}\r\n\r\n/* Styling for each menu card */\r\n.menu-item-card {\r\n\tpadding: 8px 12px;\r\n\tborder-radius: var(--border-radius);\r\n\tdisplay: flex;\r\n\tcolor: white;\r\n\tbackground-color: rgba(0,0,0, 0.7);\r\n}\r\n\r\n/* Styling the cards that display the menu items */\r\n.menu-item-image {\r\n\twidth: 150px;\r\n\theight: 150px;\r\n\tborder-radius: var(--border-radius);\r\n\t/* Fixes blank space at bottom of image container */\r\n\tvertical-align: top;\r\n}\r\n\r\n/* Styling for the item info in the menu card */\r\n.menu-item-info {\r\n\tmargin-left: 8px;\r\n\tflex: 1; /*So it takes up remaining space not taken by the image*/\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.menu-item-info .item-price-el {\r\n\tfont-style: italic;\r\n}\r\n\r\n/* Styling the order button */\r\n.menu-order-btn {\r\n\tbackground-color: white;;\r\n\tborder: 2px solid black;\r\n\tcolor: black;\r\n}\r\n.menu-order-btn:hover {\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n}\r\n\r\n/* About page styling */\r\n.about-content {\r\n\tbackground-color: rgba(0,0,0, 0.5);\r\n\twidth: 50%;\r\n\tmargin: 0 auto;\r\n\theight: 500px;\r\n\tcolor: white;\r\n\tpadding: 20px 24px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\n/* Styling for the quote */\r\nblockquote {\r\n\tquotes: \"\\201C\" \"\\201D\"; /*sets quotation marks to be used*/\r\n}\r\nblockquote::before {\r\n\tcontent: open-quote;\r\n}\r\nblockquote::after {\r\n\tcontent: close-quote;\r\n}\r\n#quote-text {\r\n\tdisplay: inline;\r\n}\r\n\r\n/* Styling for the section containing contact and restaurant information */\r\n.contact-info-section {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\trow-gap: 12px;\r\n}\r\n\r\n/* Media query for smaller screens  */\r\n\r\n/* If screen is 1100px or lower then we change the grid to we better*/\r\n@media screen and (max-width: 1100px) {\r\n\r\n\t.menu-items-grid {\r\n\t\tgrid-template-columns: 1fr;\r\n\t\twidth: 60%; /* change size of grid and make it so one item per row*/\r\n\t}\r\n\t.menu-item-card {\r\n\t\tmargin-left: auto; /* since we changed width do margin to center in grid*/\r\n\t\tmargin-right: auto;\r\n\t\twidth: 80%; /* Change the width of the menu item now it's on a smaller screen */\r\n\t}\r\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/chef_background.jpg";

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createMainContentSection": () => (/* binding */ createMainContentSection)
/* harmony export */ });
// File to load header and footer for hte page

// Creates and returns html for the header for the site 
function createHeader() {
	const headerEl = document.createElement("header");
	headerEl.innerHTML = `<nav>
				<h2>Le Sauce del Diole</h2>
				<ul class="nav-links-main">
					<li class="nav-item"><button class="nav-button" data-active="true" data-page="home">Home</button></li>
					<li class="nav-item"><button class="nav-button" data-page="menu">Menu</button></li>
					<li class="nav-item"><button class="nav-button" data-page="about">About</button></li>
				</ul>
				<ul class="nav-links-secondary">
					<li class="nav-item"><a href="#">Register</a></li>
					<li class="nav-item"><a href="#">Account</a></li>
				</ul>
			</nav>`;
	return headerEl;
}

// Creates and returns the html section for containing the content of the three tabs.
function createMainContentSection() {
	const mainContentSection = document.createElement("section");
	mainContentSection.classList.add("main-content");
	return mainContentSection;
}


// Creates the footer for the site
function createFooter() {
	// Create footer
	const footerEl = document.createElement("footer");

	// Create social icons list for the footer and add a class for it
	const socialIconsUl = document.createElement("ul");
	socialIconsUl.classList.add("social-icons");
	socialIconsUl.innerHTML = `<li class="nav-item-footer"><a href="#"><img class="social-icon-img" src="./assets/icons/doordash-logo.svg"></a></li>
				<li class="nav-item-footer"><a href="#"><img class="social-icon-img" src="./assets/icons/facebook.svg"></a></li>
				<li class="nav-item-footer"><a href="#"><img class="social-icon-img" src="./assets/icons/instagram.svg"></a></li>
				<li class="nav-item-footer"><a href="#"><img class="social-icon-img" src="./assets/icons/uber-eats.svg"></a></li>`; 
	footerEl.appendChild(socialIconsUl);
	
	// Create nav links list for the footer
	const footerNavLinks = ["Careers", "Gift Cards", "Privacy Policy", "Press", "Contact", "Email Sign Up"];
	const footerNavLinksUl = document.createElement("ul");
	footerNavLinksUl.classList.add("footer-nav-links");
	footerNavLinksUl.innerHTML = `<li class="nav-item-footer"><a href="#">Careers</a></li>
				<li class="nav-item-footer"><a href="#">Gift Cards</a></li>
				<li class="nav-item-footer"><a href="#">Privacy Policy</a></li>
				<li class="nav-item-footer"><a href="#">Press</a></li>
				<li class="nav-item-footer"><a href="#">Contact</a></li>
				<li class="nav-item-footer"><a href="#">Email Signup</a></li>`;
	footerEl.appendChild(footerNavLinksUl);
	
	// Create paragraph tag for dynamic date
	const currentYear = new Date().getFullYear();
	const dynamicDateParagraph = document.createElement("p");
	dynamicDateParagraph.innerHTML = `Made by Knguyen-dev <span id='date-el'>${currentYear}</span>`;

	footerEl.appendChild(dynamicDateParagraph);

	return footerEl;
}

// Export these functions so that we can use them in the index.js which is kind of our main development file


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// Creates content for the home tab
function createHomeContent(containerSection) {
	// Clear the containerSection of any html beforehand
	containerSection.innerHTML = ""; 

	// Create the sections for the home tab
	const homeSectionIDs = ['welcome-section', 'open-reservation-section', 'open-special-event-section', 'open-news-community-section'];
	let homeSectionsHTML = [];

	// Loop through the IDs to create section nodes for each of them
	for (let i = 0; i < homeSectionIDs.length; i++) {
		// Create section node
		const section = document.createElement("section");
		// If it's the welcome section since index = 0, just assign the id
		if (i == 0) {
			section.id = homeSectionIDs[i];
		} else {
			// If it's not the welcome section, then assign a class alongside the id.
			section.id = homeSectionIDs[i];
			section.classList.add("home-content-card");
		}
		// Append the section
		homeSectionsHTML.push(section);
	}

	// Put the respective html in each of the sections
	homeSectionsHTML[0].innerHTML = `<h1>Come dine with us!</h1>
				<p>Made with passion and sauce since 1889</p>
				<img src="./assets/images/chef_flame.jpg" alt="Chef flames" id="home-page-img-el">
				<hr class="page-divider">
				<p id="business-slogan">Truly one of the restaurants in history</p>`;
	
	homeSectionsHTML[1].innerHTML = `<h1>Book a reservation today</h1>
				<p>Schedule a reservation with ease online in as quickly as 10 minutes. Accomodations from small groups to large gatherings. </p>
				<a href="#" id="open-reservation-page-link">Book</a>`;

	homeSectionsHTML[2].innerHTML = `<h1>Preparing for a special event? Say no more!</h1>
				<p>
					We're able to setup unique and novel events for our clients. From personalized weddings, scheduling a cruise ship vacation, and even giving our 
					clients their food whilst sky-diving! We have a history of setting up the impossible and serving up miracles! Just contact us! 
				</p>
				<a href="#" id="open-special-events-link">Special Events</a>`;

	homeSectionsHTML[3].innerHTML = `<h1>Stay in the loop and keep up with us!</h1>
				<p>
					We're always taking the next step in branching out and trying new things. Read up on the news surrounding us and ultimately 
					get more involved in the community. 
				</p>
				<a href="#" id="open-news-community-link">News & Community</a>`;

	// Append section nodes to the container passed, which will be the mainContentSection
	homeSectionsHTML.forEach(section => {
		containerSection.appendChild(section);
	})

	// Return the container node again
	return containerSection; 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeContent);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// For the menu page
// array of objects that each represent menu items
const menuItemsInfo = [
	{
		"menu-item-title": "Chicken Monsieur",
		"item-description": "A chicken dish for french people",
		'item-price': 12.99,
		"img-src": "./assets/images/chicken_plate.jpg",
		"itemID": 1,
	},
	{
		"menu-item-title": "Pommes Dauphine",
		"item-description": "A potato dish for french people",
		'item-price': 7.50,
		"img-src": "./assets/images/fried_potato_balls.jpg",  
		"itemID": 2,
	},
	{
		"menu-item-title": "Gelato",
		"item-description": "An ice cream plate for italian people",
		'item-price': 18.50,
		"img-src": "./assets/images/ice_Cream_plate.jpg",
		"itemID": 3,
	},
	{
		"menu-item-title": "Spaghetti-alla chitarra",
		"item-description": "A pasta dish from Italians imported from Italy.",
		'item-price': 15.99,
		"img-src": "./assets/images/spaghetti_plate.jpg", 
		"itemID": 4,
	},
	{
		"menu-item-title": "Crudites",
		"item-description": "A vegetable dish from Paris and made with authentic french vegetables",
		'item-price': 12.99,
		"img-src": "./assets/images/veggie_plate.jpg",  
		"itemID": 5,
	},
];

// Function for creating menu content such as grid and grid items, alongside a container for the grid
function createMenuContent(containerSection) {
	// Create the section that contains all of the elements and content for the menu tab
	const menuContentSection = document.createElement("section");
	menuContentSection.classList.add("menu-content-section");

	// Create the grid that conatins the menu item, represented by rectangular cards 
	const menuGrid = document.createElement("section");
	menuGrid.classList.add("menu-items-grid");
	menuContentSection.appendChild(menuGrid); // add the grid to the content section

	// Loop through the menuItemsInfo array and create a menu card for each, then put that menu card on the grid
	menuItemsInfo.forEach(menuItem => {
		// Create the card
		const menuCard = document.createElement("div");
		menuCard.classList.add("menu-item-card");

		// Create the image container and image for menu card
		const imageContainer = document.createElement("div"); // Create div and img and add the classes
		imageContainer.classList.add("menu-item-image-container");

		const itemImageEl = document.createElement("img");
		itemImageEl.classList.add("menu-item-image");
		itemImageEl.src = menuItem['img-src']; // assign the image source to the img-src attribute of the current object in menuItemsInfo that we're looping through
		imageContainer.appendChild(itemImageEl) // add the item image to the image container

		// Create menu item info section of the menuCard
		const menuItemInfoSection = document.createElement("div");
		menuItemInfoSection.classList.add("menu-item-info");

		// Create title, description, price and elements with the menu order button
		const itemTitleEl = document.createElement("h2");
		itemTitleEl.classList.add("item-title-el");
		itemTitleEl.textContent = menuItem["menu-item-title"];
		menuItemInfoSection.appendChild(itemTitleEl);

		const itemDescriptionEl = document.createElement("p");
		itemDescriptionEl.classList.add("item-description-el");
		itemDescriptionEl.textContent = menuItem["item-description"];
		menuItemInfoSection.appendChild(itemDescriptionEl);

		const itemPriceEl = document.createElement("h3");
		itemPriceEl.classList.add("item-price-el");
		itemPriceEl.textContent = `Price: $${menuItem["item-price"]}`;
		menuItemInfoSection.appendChild(itemPriceEl);

		const menuOrderBtn = document.createElement("button");
		menuOrderBtn.classList.add("menu-order-btn");
		// Put a data attribute called itemID on the button; turn it into a string since data attribute have to be string values
		// This is so that in the future if you want a shopping-cart esque feature, you could have this attribute as a reference to the database
		// or something similar. 
		menuOrderBtn.setAttribute("data-itemID", menuItem["itemID"].toString());
		menuOrderBtn.textContent = "Order item";
		menuItemInfoSection.appendChild(menuOrderBtn);

		// Put the imageContainer and menuItemInfoSection inside our now completed menu card
		menuCard.appendChild(imageContainer);
		menuCard.appendChild(menuItemInfoSection);
		// Place the completed menu card inside the grid.
		menuGrid.appendChild(menuCard);
	});
	// Place the menu content section inside the container; then return containerSection
	containerSection.appendChild(menuContentSection);
	return containerSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuContent);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// For creating about page

// object that contains company information
const companyInfoModule = {
	"phone-number": "555-5555",
	"address": "123 Cooking and Chefs Drive",
	"email": "HighDining@kitchen.com",
}

// Function that loads content from the about section onto the main-content section element
function createAboutContent(containerSection) {
	// Create section for containing content in the about tab/section
	const aboutContentSection = document.createElement("section");
	aboutContentSection.classList.add("about-content");

	// Create quote elements
	const blockQuote = document.createElement("blockquote");
	const quoteTextEl = document.createElement("h2");
	quoteTextEl.textContent = "Food isn't just a meal, it's art, it's creativity, but most importantly it's a time for rest.";
	quoteTextEl.id = "quote-text";

	// Put quote text inside block quote and then put block quote into our about content section
	blockQuote.appendChild(quoteTextEl);
	aboutContentSection.appendChild(blockQuote);

	// Create page divider and add it to content section
	const pageDivider = document.createElement("hr");
	pageDivider.classList.add("page-divider");
	aboutContentSection.appendChild(pageDivider);

	// Create mission statement text, and append to the content section
	const missionStatementEl = document.createElement("h2");
	missionStatementEl.textContent = `We are constantly working towards not only maintaining high standards for our customers' dining experience, 
	but are constantly looking for new ways to improve our craft and expand to new culinary horizons.`;
	missionStatementEl.id = "company-mission-statement";
	aboutContentSection.appendChild(missionStatementEl);

	// Create a second page divider; if you used the same page divider, it remembers and will move it to a new location; we create 2 to put 2 on the DOM
	const secondPageDivider = document.createElement("hr");
	secondPageDivider.classList.add("page-divider");
	aboutContentSection.appendChild(secondPageDivider);

	// Create section that contains contact information about the restaurant
	const contactInfoSection = document.createElement("section");
	contactInfoSection.classList.add("contact-info-section");

	// Create contact information text: header text for the section, phone number, email, and address
	const sectionHeader = document.createElement("h1")
	sectionHeader.textContent = "Contact information:";
	contactInfoSection.appendChild(sectionHeader);

	const phoneNumberEl = document.createElement("h2");
	phoneNumberEl.id = "phone-number-el";
	phoneNumberEl.textContent = `Phone Number: ${companyInfoModule["phone-number"]}`;
	contactInfoSection.appendChild(phoneNumberEl);

	const emailAddressEl = document.createElement("h2");
	emailAddressEl.id = "email-address-el";
	emailAddressEl.textContent = `Email: ${companyInfoModule["email"]}`;
	contactInfoSection.appendChild(emailAddressEl);

	const addressEl = document.createElement("h2");
	addressEl.id = "address-el";
	addressEl.textContent = `Address: ${companyInfoModule["address"]}`;
	contactInfoSection.appendChild(addressEl);

	// Finally append the contact info section into the aboutContentSection
	aboutContentSection.appendChild(contactInfoSection);
	// Then append the content from the about section to main container
	containerSection.appendChild(aboutContentSection);

	// Return the containerSection
	return containerSection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAboutContent);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _initalPageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);







// IIFE that auto runs; we have the functions create the base html, but also return an object so that we can 
// easily access that html later!
const pageContentModule = (() => {
	// Get the content page and then create the html for the header, main-content section, and footer
	const contentPage = document.getElementById("content"); // Getting content div or main page
	const headerEl = (0,_initalPageLoad__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
	const mainContentSection = (0,_initalPageLoad__WEBPACK_IMPORTED_MODULE_1__.createMainContentSection)();
	const footerEl = (0,_initalPageLoad__WEBPACK_IMPORTED_MODULE_1__.createFooter)(); 

	// Add dom elements to the contentPage div
	contentPage.appendChild(headerEl);
	contentPage.appendChild(mainContentSection);
	contentPage.appendChild(footerEl);

	// Get the tab buttons; let's also create the logic for tab switching
	const tabBtns = headerEl.querySelectorAll(".nav-button");

	// Create event listener for all buttons
	tabBtns.forEach(btn => {
		btn.addEventListener("click", e => {
			// Represent button being clicked by the event
			const clickedBtn = e.currentTarget;
			const btnPageID = clickedBtn.dataset.page; 

			// Now for all other buttons, remove the data-active attribute, and add the data-active 
			// attribute to the clicked button; this part is mainly for visually indicating the selected tab btn
			tabBtns.forEach(btn => {
				if (btn == clickedBtn) {
					btn.setAttribute("data-active", "true"); 

				} else {
					btn.removeAttribute("data-active");
				}
			});

			// Since button was clicked, call the function that loads the content for that button
			loadTabContent(btnPageID);
		});		
	});

	return {headerEl, mainContentSection, footerEl, tabBtns};
})(); 

// Loads the content for a tab when user wants to click it
function loadTabContent(pageID) {

	// Clear the html of the mainContentSection
	pageContentModule.mainContentSection.innerHTML = "";

	// Load the page with the function, but also returns the new mainContentSection with the corresponding html
	if (pageID == "home") {
		// createHomeContent will take mainContentSection and add its own html to it, which will update the page
		// Then we get back the new mainContentSection in case we need to use it.
		pageContentModule.mainContentSection = (0,_homePage__WEBPACK_IMPORTED_MODULE_2__["default"])(pageContentModule.mainContentSection);
	} else if (pageID == "menu") {
		pageContentModule.mainContentSection = (0,_menuPage__WEBPACK_IMPORTED_MODULE_3__["default"])(pageContentModule.mainContentSection);
	} else {
		pageContentModule.mainContentSection = (0,_aboutPage__WEBPACK_IMPORTED_MODULE_4__["default"])(pageContentModule.mainContentSection);
	}
}

// On window load we just load the home page content
window.addEventListener("DOMContentLoaded", () => {
	loadTabContent("home"); // load the home page
});
})();

/******/ })()
;