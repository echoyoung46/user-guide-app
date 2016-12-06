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

	;__weex_define__("@weex-component/a2f9cf18896c3a6154c089c504936248", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;

	__weex_module__.exports = {
	  data: function () {return {
	    isPlay: false,
	    playStatus: 'pause',
	    playsrc: 'play-icon'
	  }},
	  methods: {
	    togglePlay: function() {
	      this.isPlay = !this.isPlay;
	      this.playStatus = this.isPlay ? 'play' : 'pause';
	      this.playsrc = this.isPlay ? 'pause-icon' : 'play-icon';
	      console.log(this.isPlay);
	      
	      // if( this.isPlay ) {
	      //   $video.play();
	      // }else {
	      //   $video.pause();
	      // }
	    }
	  },
	  ready: function() {
	    var $video = this.$el('videoMedia');
	    console.log($video);
	  }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "audio-container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "control-panel"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return '/src/images/' + (this.playsrc) + '.svg'},
	            "alt": ""
	          },
	          "classList": [
	            "control-icon"
	          ],
	          "events": {
	            "click": "togglePlay"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "video-container"
	      ],
	      "children": [
	        {
	          "type": "video",
	          "id": "videoMedia",
	          "classList": [
	            "video"
	          ],
	          "attr": {
	            "autoPlay": "false",
	            "playStatus": function () {return this.playStatus},
	            "src": function () {return this.src}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "audio-container": {
	    "height": 100
	  },
	  "control-panel": {
	    "border": "1px #707070 solid"
	  },
	  "control-icon": {
	    "width": 60,
	    "height": 60,
	    "backgroundSize": "cover",
	    "textAlign": "center",
	    "position": "absolute",
	    "top": 40,
	    "left": 125,
	    "marginLeft": -50
	  },
	  "video-container": {
	    "display": "none"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/a2f9cf18896c3a6154c089c504936248", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);