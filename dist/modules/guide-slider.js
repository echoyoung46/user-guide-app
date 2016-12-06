/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/0f096dff2b47e4dbb93eba18d0c275f4", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      imageList: [{src: 'src/assets/time/1.jpg'},{src: 'src/assets/time/2.jpg'},{src: 'src/assets/time/3.jpg'}]
	    }},
	    methods: {
	      change: function(e) {
	        // console.log(e.index);
	      },
	      slideToNext: function(e) {
	        // console.log(e);
	      }
	    },
	    ready: function() {
	      // console.log(this.$el('slider-container'));
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "slider",
	      "id": "slider-container",
	      "classList": [
	        "slider-container"
	      ],
	      "attr": {
	        "autoPlay": "false"
	      },
	      "events": {
	        "change": "change"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "slider-item"
	          ],
	          "repeat": function () {return this.imageList},
	          "events": {
	            "click": "slideToNext"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "slider-image"
	              ],
	              "attr": {
	                "src": function () {return this.src}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "slider-container": {
	    "width": 3000,
	    "height": 1335,
	    "flexDirection": "column"
	  },
	  "slider-item": {
	    "width": 710,
	    "height": 1335
	  },
	  "slider-image": {
	    "width": 710,
	    "height": 1335
	  },
	  "slider-indicator": {
	    "position": "absolute",
	    "top": 300
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/0f096dff2b47e4dbb93eba18d0c275f4", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);