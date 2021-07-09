"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// slider intro
// -------------------------------------------
var sliderItem = document.querySelector('.intro__slider-list').querySelector('.intro__slider-items');
var sliderItemWidth = sliderItem.offsetWidth;
var dot = document.querySelector('.intro__slider-dot');
var prevArrow = document.querySelector('.intro__slider-arrows--left');
var nextArrow = document.querySelector('.intro__slider-arrows--right');
var activeItem = 0;
var images = ['../img/intro1.png', '../img/intro2.png', '../img/intro3.png'];
prevArrow.addEventListener('click', function (event) {
  if (activeItem - 1 == -1) {
    activeItem = images.length;
  }

  var linkImg = images[--activeItem];
  moveDots(activeItem);
  sliderItem.style.background = "url(".concat(linkImg, ") center center / cover no-repeat");
});
nextArrow.addEventListener('click', function (event) {
  if (activeItem + 1 == images.length) {
    activeItem = -1;
  }

  var linkImg = images[++activeItem];
  moveDots(activeItem);
  sliderItem.style.background = "url(".concat(linkImg, ") center center / cover no-repeat");
}); //move dot slider

var moveDots = function moveDots(activeItem) {
  dot.style.left = sliderItemWidth / images.length * activeItem + 'px';
}; //catalog
// -------------------------------------------


var catalogMenu = document.querySelector('.catalog__menu');
var catalogItems = catalogMenu.querySelectorAll('.catalog__items');
var catalogList = document.querySelector('.catalog__catalog');
var activeCatalogItems = 1;

var _iterator = _createForOfIteratorHelper(catalogItems),
    _step;

try {
  var _loop = function _loop() {
    var item = _step.value;
    item.addEventListener('click', function () {
      // menu
      var prevItem = catalogMenu.querySelector('#catalog__item-' + activeCatalogItems);
      prevItem.classList.remove('catalog__items--active');
      item.classList.add('catalog__items--active'); // list

      var prevListItems = catalogList.querySelector('#catalog__catalog-' + activeCatalogItems);
      activeCatalogItems = item.id[item.id.length - 1];
      var nextListItems = catalogList.querySelector('#catalog__catalog-' + activeCatalogItems);
      prevListItems.classList.remove('catalog__list--active');
      nextListItems.classList.add('catalog__list--active');
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } //services
  // -------------------------------------------

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var servicesItems = document.querySelectorAll('.services__items');

var _iterator2 = _createForOfIteratorHelper(servicesItems),
    _step2;

try {
  var _loop2 = function _loop2() {
    var item = _step2.value;
    item.addEventListener('click', function (event) {
      if (event.target.className != "services__text") {
        var accordion = item.querySelector('.services__accordion');
        var servicesTextWidth = item.querySelector('.services__text').offsetHeight;

        if (accordion.style.maxHeight == "0px" || accordion.style.maxHeight.length == 0) {
          accordion.style.maxHeight = servicesTextWidth + 'px';
          item.classList.add('services__items--active');
        } else {
          accordion.style.maxHeight = '0px';
          item.classList.remove('services__items--active');
        }
      }
    });
  };

  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop2();
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
//# sourceMappingURL=main.js.map
