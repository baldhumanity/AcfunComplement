// ==UserScript==
// @name         AcfunBlock开源代码
// @namespace    http://tampermonkey.net/
// @version      3.018
// @description  帮助你屏蔽不想看的UP主
// @author       人文情怀
// @match        http://www.acfun.cn/a/ac*
// @match        http://www.acfun.cn/v/list63
// @match        https://www.acfun.cn/a/ac*
// @match        http://www.acfun.cn/*
// @match        https://www.acfun.cn/*
// @match        https://www.acfun.cn/v/list*
// @match        http://www.acfun.cn/a/ac*
// @match        https://www.acfun.cn/a/ac*
// @match        http://www.acfun.cn/v/ac*
// @match        https://www.acfun.cn/v/ac*
// @match        https://www.acfun.cn/v/as*
// @match        http://www.acfun.cn/v/as*
// @connect      greasyfork.org
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM_deleteValue
// @grant        GM.deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @run-at      document-idle
// @license MIT
// ==/UserScript==


if (typeof module !=="undefined" && module !== null) {
    module.exports = function header() {
        console.log("AcFun 网页端辅助启动中。。。")
    }
}
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);


if ( true && module !== null) {
    module.exports = function header() {
        console.log("AcFun 网页端辅助启动中。。。")
    }
}


/***/ }),

/***/ 547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(972), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(528), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(653), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Colors */\r\n.c-a {\r\n    background-color: #eeeeee;\r\n}\r\n\r\n.c-b {\r\n    background-color: #D6C4C1;\r\n}\r\n\r\n.c-c {\r\n    background-color: #eee;\r\n}\r\n\r\n.c-d {\r\n    background-color: #D6C1CB;\r\n}\r\n\r\n.c-e {\r\n    background-color: #F7DEF7;\r\n}\r\n\r\n.ui-hidden {\r\n    /*display: none!important;*/\r\n    width: 0 !important;\r\n    border-width: 0 !important;\r\n}\r\n\r\n.ui-hidden a {\r\n\r\n    color: rgba(0, 0, 0, 0) !important;\r\n}\r\n\r\n.ui-hidden div {\r\n\r\n    color: rgba(0, 0, 0, 0) !important;\r\n}\r\n\r\n.ui-hidden span {\r\n\r\n    background-color: transparent;\r\n}\r\n\r\n.helper-wrap {\r\n    user-select: none;\r\n    position: fixed;\r\n    z-index: 99;\r\n    height: 230px;\r\n    min-width: 60px;\r\n    top: 500px;\r\n    left: 0px;\r\n\r\n}\r\n\r\n.helper-wrap-inner {\r\n\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.helper-wrap-inner div {\r\n    float: left;\r\n    vertical-align: top;\r\n}\r\n\r\n.helper-main {\r\n    display: inline-block;\r\n    width: 280px;\r\n    height: 100%;\r\n\r\n    position: relative;\r\n    border-radius: 0 10px 10px 0;\r\n    box-shadow: 1px 1px 5px 1px rgba(212,212,212,0.45);\r\n    border:none;\r\n    overflow: hidden;\r\n}\r\n\r\n.ac-girl {\r\n    display: inline-block;\r\n    width: 48px;\r\n    height: 80px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n}\r\n\r\n.ac-girl-hide {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.page-wrap {\r\n    height: 100%;\r\n    width: 280px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: inherit;\r\n    border-radius: 0 10px 10px 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.go-back {\r\n    cursor: pointer;\r\n    padding: 3px;\r\n}\r\n\r\n.inactive-page {\r\n    display: none;\r\n}\r\n\r\n.menu-wrap {\r\n    text-align: center;\r\n\r\n    position: relative;\r\n    width: 100%;\r\n    height: 190px;\r\n    margin-top: 40px;\r\n\r\n    /*width: 80px;*/\r\n    /*position: absolute;*/\r\n    /*top: 50%;*/\r\n    /*left: 50%;*/\r\n    /*transform: translate(-50%, -50%);*/\r\n}\r\n\r\n.menu-column {\r\n    width: 50%;\r\n    float: left;\r\n}\r\n\r\n.sync-time {\r\n    margin-top: 20px;\r\n}\r\n\r\n.plugin-hint {\r\n    z-index: 99;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    padding: 2px;\r\n    font-weight: bold;\r\n}\r\n\r\n.plugin-menu-title {\r\n    overflow: hidden;\r\n    padding: 2px;\r\n    font-weight: bold;\r\n}\r\n\r\n.plugin-author {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 2px;\r\n    font-weight: bold;\r\n}\r\n\r\n.plugin-version {\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: 0;\r\n    pointer-events: none;\r\n    padding: 2px;\r\n    font-weight: bold;\r\n}\r\n\r\n.menu-wrap a {\r\n    display: block;\r\n    margin: 3px 0 0px;\r\n    transition: 100ms;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-wrap a:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.plugin-add-ban-up {\r\n    margin: 10px;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.ban-title-input {\r\n    height: 20px;\r\n    background-color: transparent;\r\n    border-radius: 50px 0 0 50px;\r\n    font: 13px \"宋体\";\r\n    line-height: 13px;\r\n    text-align: center;\r\n    margin: 0 0 0 2px;\r\n    border: 1px solid #b6adad;\r\n    float: left;\r\n}\r\n\r\n.ban-title-input:focus {\r\n    background-color: rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.ban-item-submit {\r\n    border: 0px solid;\r\n    display: inline-block;\r\n    float: left;\r\n    padding: 1px;\r\n    background: darkred;\r\n    height: 22px;\r\n    color: white;\r\n    width: 40px;\r\n    border-radius: 0 50px 50px 0;\r\n}\r\n\r\n.ban-item-submit:hover {\r\n    background-color: #f1c7c7;\r\n    transition: 50ms;\r\n}\r\n\r\n.ban-item-submit:active {\r\n    background-color: #cd9072;\r\n}\r\n\r\n.banned-items {\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    height: 147px;\r\n    line-height: 23px;\r\n    margin: 2px;\r\n\r\n}\r\n\r\n\r\n.banned-items::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n.banned-items::-webkit-scrollbar-track {\r\n    background-color: #eeeeee;\r\n}\r\n\r\n.banned-items::-webkit-scrollbar-thumb {\r\n    background-color: #666666;\r\n}\r\n\r\n.banned-item {\r\n    position: relative;\r\n    display: inline-block;\r\n    height: 16px;\r\n\r\n    margin: 3px 1px 5px 1px;\r\n}\r\n\r\nspan.banned-title {\r\n    height: 16px;\r\n    float: left;\r\n    vertical-align: middle;\r\n    background-color: #f9f9f9;\r\n    font: 12px \"宋体\";\r\n    border-radius: 5px;\r\n    padding: 1px 5px 1px 5px;\r\n    line-height: 16px;\r\n}\r\n\r\n.banned-item button {\r\n\r\n    border: 0px solid;\r\n    display: inline-block;\r\n    float: left;\r\n    padding: 1px 5px 1px 5px;\r\n    background: rgb(163 52 52 / 70%);\r\n    height: 18px;\r\n    width: 100%;\r\n    color: white;\r\n    border-radius: 5px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    transition: 80ms ease-in;\r\n\r\n}\r\n\r\n.banned-item button:active {\r\n\r\n    background: rgba(255, 76, 76, 0.7);\r\n}\r\n\r\n.banned-item button:hover {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.about-page-content {\r\n    width: 100%;\r\n    display: block;\r\n    word-wrap: break-word;\r\n    box-sizing: border-box;\r\n    padding: 20px;\r\n    overflow-y: auto;\r\n    height: 210px;\r\n    float: none !important;\r\n}\r\n\r\n\r\n/* 过滤UI */\r\n.filter-button {\r\n\r\n    width: 15px;\r\n    height: 15px;\r\n    background-color: rgba(255, 0, 0, 1);\r\n    padding: 1.5px;\r\n    left: 0;\r\n    top: 0;\r\n    transform: translate(0, 0);\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 98;\r\n    background-size: contain;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    border-radius: 11px;\r\n    border: 2px rgb(230, 230, 230) solid;\r\n    cursor: pointer;\r\n}\r\n\r\n.smooth {\r\n    transition: 500ms ease-in-out;\r\n    -moz-transition: 500ms ease-in-out;\r\n    -o-transition: 500ms ease-in-out;\r\n    -webkit-transition: 500ms ease-in-out;\r\n}\r\n\r\n.banned-article {\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    height: 0 !important;\r\n    overflow: hidden;\r\n    opacity: 0;\r\n}\r\n\r\n.banned-page-item {\r\n    margin: 0;\r\n    opacity: 0;\r\n    transition: 300ms;\r\n    pointer-events: none;\r\n}\r\n\r\n.banned-page-item:hover {\r\n\r\n}\r\n\r\n.hover-show {\r\n    pointer-events: auto !important;\r\n}\r\n\r\n.hover-show:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.remove {\r\n    display: none !important;\r\n}\r\n\r\n.remove-2 {\r\n    display: none !important;\r\n}\r\n\r\n.area-comment-block {\r\n    line-height: 15px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\r\n    background-size: 13px 13px;\r\n    background-position: 0 1px;\r\n    padding-left: 17px;\r\n    padding-right: 15px;\r\n    color: #999;\r\n    cursor: pointer;\r\n}\r\n\r\n.area-comment-block:hover{\r\n    color: red;\r\n    filter: ;\r\n}\r\n\r\n.banned-text {\r\n    font-size: 14px !important;\r\n}\r\n\r\n.unban-replier-btn {\r\n    margin: 0 10px;\r\n}\r\n\r\n.hide-avatar {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n/*subUI */\r\n.sub-ui-wrap {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 38%;\r\n    height: 80px;\r\n    width: 30px;\r\n    z-index: 99;\r\n}\r\n\r\n.sub-ui-inner {\r\n    height: 80px;\r\n    width: 30px;\r\n    position: relative;\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n\r\n.sub-ui-banned {\r\n\r\n    background-color: rgba(253, 76, 93, 0.3);\r\n}\r\n\r\n.sub-ui-normal {\r\n\r\n    background-color: rgba(165, 253, 76, 0.3);\r\n}\r\n\r\n.sub-ui-text {\r\n    writing-mode: vertical-rl;\r\n    text-orientation: upright;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    height: 100%;\r\n    width: 100%;\r\n    user-select: none;\r\n}\r\n\r\n.sub-ui-button {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    user-select: none;\r\n}\r\n\r\n.sub-ui-button:hover {\r\n    transform: translateX(100%);\r\n}\r\n\r\n#banUp {\r\n    color: black;\r\n}\r\n\r\n#unbanUp {\r\n    color: black;\r\n}\r\n\r\n\r\n#banUp:after {\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    content: \"屏蔽ＵＰ主\";\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fc7630;\r\n    transform: translateX(-100%);\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n\r\n#unbanUp:after {\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    content: \"取消屏蔽\";\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #83ee1a;\r\n    transform: translateX(-100%);\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.on-top {\r\n    z-index: 1000;\r\n}\r\n\r\n.user-tags {\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    margin: 0 20px 0 20px;\r\n    max-width: 50%;\r\n}\r\n\r\n/* TAGGING */\r\n.user-tag {\r\n    margin-top: 2px;\r\n    margin-right: 3px;\r\n    padding: 1px 4px 1px 4px;\r\n    line-height: 15px;\r\n    font-size: 8px !important;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    /*border-color: rgba(0, 0, 0, 0.4);*/\r\n    border-color: rgba(255, 0, 0, 0.4);\r\n    color: red;\r\n    user-select: none;\r\n    display: inline-block;\r\n\r\n    height: 15px;\r\n    min-width: 30px;\r\n\r\n    float: left;\r\n\r\n\r\n}\r\n\r\n.user-tag-text {\r\n\r\n    text-align: center;\r\n}\r\n\r\n.very-smooth {\r\n\r\n    transition: 200ms;\r\n    -moz-transition: 200ms;\r\n    -o-transition: 200ms;\r\n    -webkit-transition: 200ms;\r\n}\r\n\r\n\r\n.add-new-tag {\r\n\r\n    margin-top: 2px;\r\n    padding: 1px 4px 1px 4px;\r\n    line-height: 15px;\r\n    font-size: 8px !important;\r\n\r\n    border: 1px rgba(0, 0, 0, 0.25);\r\n    border-style: dashed;\r\n    user-select: none;\r\n\r\n    display: inline-block;\r\n    float: left;\r\n\r\n}\r\n\r\n.add-new-tag:hover {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.add-new-tag:active {\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.tagging-ui-container {\r\n    overflow: hidden;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    height: 200px;\r\n    width: 300px;\r\n    transform: translate(-50%, -50%);\r\n\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n\r\n    -webkit-box-shadow: 2px 2px 7px 1px #787878;\r\n    box-shadow: 2px 2px 7px 1px #787878;\r\n    border-radius: 10px;\r\n\r\n    background-color: rgb(240, 240, 240);\r\n}\r\n\r\n.tagging-ui-inner {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n}\r\n\r\n.name-to-tag {\r\n    padding: 3px;\r\n\r\n}\r\n\r\n.tags-container {\r\n    width: 280px;\r\n    height: 130px;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.tagging-input-wrap {\r\n    background-color: rgb(100, 100, 100);\r\n    height: 20px;\r\n    vertical-align: top;\r\n    border-bottom: 2px rgb(200, 200, 200);\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.tagging-input {\r\n    float: left;\r\n    box-sizing: border-box;\r\n    padding: 2px;\r\n    height: 20px;\r\n    width: 235px;\r\n    border: none;\r\n\r\n}\r\n\r\n.tagging-submit {\r\n    float: left;\r\n    height: 20px;\r\n    border: none;\r\n    width: 45px;\r\n    background-color: #ced9c5;\r\n}\r\n\r\n.tagging-submit:hover {\r\n    background-color: #a5f400;\r\n}\r\n\r\n.tagging-submit:active {\r\n    background-color: #d4f400;\r\n}\r\n\r\n.tagging-close-button {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    background-color: #a84716;\r\n    color: white;\r\n    border-radius: 0 10px 0 10px;\r\n    width: 45px;\r\n    height: 25px;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    z-index: 10;\r\n    user-select: none;\r\n}\r\n\r\n.smooth-remove {\r\n    transition: 300ms ease-in-out;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n\r\n}\r\n\r\n\r\n.tagging-close-button:hover {\r\n    background-color: #ffc5c5;\r\n}\r\n\r\n.tagging-close-button:active {\r\n    background-color: #ffedd4;\r\n    padding-top: 2px;\r\n\r\n}\r\n\r\n.tag-item {\r\n    display: inline-block;\r\n    background-color: #e7e1e1;\r\n    margin: 1px;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    border: 1px dashed;\r\n    padding: 2px;\r\n    font-size: 8px;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    height: 19px;\r\n    min-width: 30px;\r\n    position: relative;\r\n    line-height: 15px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.tag-item:before {\r\n    opacity: 0;\r\n    content: \"删除\";\r\n    position: absolute;\r\n    width: 100%;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    left: 0;\r\n    height: 100%;\r\n    top: 0;\r\n    line-height: 19px;\r\n}\r\n\r\n.tag-item:hover:before {\r\n    opacity: 1;\r\n    color: white;\r\n    background-color: #a84716;\r\n}\r\n\r\n\r\n/* Comment Recovery UI */\r\n\r\n\r\n.deleted-comments-container {\r\n    position: absolute;\r\n    display: block;\r\n    width: 300px;\r\n\r\n    min-height: 300px;\r\n    overflow: hidden;\r\n}\r\n\r\n.deleted-comments-inner {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n\r\n.deleted-comments-title {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    font-size: 16px;\r\n    background-color: #b6adad;\r\n    padding: 3px 10px 3px 10px;\r\n}\r\n\r\n.deleted-comment-list {\r\n    height: calc(100% - 50px);\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.deleted-comment {\r\n    border: 1px solid #e5e5e5;\r\n    background-color: #ffe;\r\n    display: block;\r\n}\r\n\r\n.deleted-comment img {\r\n    width: 100%;\r\n}\r\n\r\n.comment-info {\r\n    display: block;\r\n    height: 20px;\r\n    padding: 3px;\r\n}\r\n\r\n.comment-floor {\r\n    font-weight: 700;\r\n    display: inline-block;\r\n    float: left;\r\n    line-height: 14px;\r\n    padding: 3px;\r\n    height: 20px;\r\n    width: 45px;\r\n    box-sizing: border-box;\r\n    margin-right: 3px;\r\n}\r\n\r\n.comment-query-state {\r\n    display: inline-block;\r\n    float: left;\r\n    line-height: 14px;\r\n    padding: 3px;\r\n    height: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.comment-content {\r\n    padding: 3px;\r\n}\r\n\r\n.hide-btn {\r\n    float: right;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    user-select: none;\r\n}\r\n\r\n.hide-btn:hover {\r\n    color: red;\r\n}\r\n\r\n\r\n/* setting ui  check box */\r\n/* Customize the label (the container) */\r\n.cc-container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 22px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 12px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    line-height: 12px;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n.cc-container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 12px;\r\n    width: 12px;\r\n    background-color: #848484;\r\n}\r\n\r\n/* On mouse-over, add a grey background color */\r\n.cc-container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n\r\n/* When the checkbox is checked, add a blue background */\r\n.cc-container input:checked ~ .checkmark {\r\n    background-color: #2196F3;\r\n}\r\n\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n.cc-container input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n.cc-container .checkmark:after {\r\n    left: 4px;\r\n    top: 2px;\r\n    width: 3px;\r\n    height: 6px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\n\r\n/*  UDP area */\r\n.udp-container {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 400px;\r\n    z-index: 199;\r\n    background: white;\r\n    transition: 0.4s ease-in;\r\n    box-shadow: -2px -2px 5px 0px #ddd;\r\n    overflow: hidden;\r\n}\r\n\r\n.udp-title{\r\n    height: 30px;\r\n    font-size: 16px;\r\n    padding: 5px 5px 5px 5px;\r\n    z-index: 199;\r\n    box-shadow: 0 0 2px 2px #ddd;\r\n    line-height: 30px;\r\n    position: relative;\r\n}\r\n\r\n.udp-inner {\r\n    position: relative;\r\n    height: calc(100% - 40px);\r\n    overflow-y: scroll;\r\n}\r\n\r\n.udp-item{\r\n    margin: 5px;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    background-color: rgb(240,240,240);\r\n}\r\n\r\n.udp-item img{\r\n    width: 100%;\r\n}\r\n\r\n.udp-item-info{\r\n    margin-top: 4px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: #eee;\r\n    font-weight: bold;\r\n}\r\n\r\n.udp-close{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    color: white;\r\n    background-color: #a84716;\r\n    cursor: pointer;\r\n    font-size: 25px;\r\n    line-height: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 0 4px;\r\n    z-index: 299;\r\n}\r\n\r\n.udp-av{\r\n    align-self: flex-end;\r\n}\r\n\r\n.udp-hidden{\r\n    transform: translateX(100%);\r\n}\r\n\r\n.lookup-btn{\r\n    margin-top: 2px;\r\n    padding: 0px 4px 0px 4px;\r\n    line-height: 15px;\r\n    font-size: 8px !important;\r\n    border: 1px rgba(0, 0, 0, 0.25);\r\n    border-style: dashed;\r\n    user-select: none;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 2px;\r\n    cursor: pointer;\r\n}\r\n\r\n.lookup-btn i{\r\n    transition: 0.2s;\r\n}\r\n\r\n.lookup-btn:hover{\r\n    background-color: rgba(35,255,0,0.2);\r\n}\r\n\r\n.lookup-btn:hover i{\r\n    transform: translateY(-2px);\r\n}\r\n\r\n.lookup-btn:active i{\r\n    transform: scale(0.95);\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ 667:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 653:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 528:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 972:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ })

/******/ 	});
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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
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
/******/ 			179: 0
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./dev/header.js
var header = __webpack_require__(565);
var header_default = /*#__PURE__*/__webpack_require__.n(header);
;// CONCATENATED MODULE: ./dev/js/pageClassifier.js


function getPageType() {
    let pageUrl = unsafeWindow.location.href;
    let dict1 = {
        //"www.acfun.cn/": "首页",
        //"www.acfun.cn/v/list177/index.htm": "AC正义",
        //"www.acfun.cn/v/list155/index.htm": "番剧",
        "www.acfun.cn/v/list1/index.htm": "动画",
        "www.acfun.cn/v/list60/index.htm": "娱乐",
        "www.acfun.cn/v/list201/index.htm": "生活",
        "www.acfun.cn/v/list58/index.htm": "音乐",
        "www.acfun.cn/v/list123/index.htm": "舞蹈·偶像",
        "www.acfun.cn/v/list59/index.htm": "游戏",
        "www.acfun.cn/v/list70/index.htm": "科技",
        "www.acfun.cn/v/list68/index.htm": "影视",
        "www.acfun.cn/v/list69/index.htm": "体育",
        "www.acfun.cn/v/list125/index.htm": "鱼塘",
        //"www.acfun.cn/v/list63/index.htm": "文章",
        //"live.acfun.cn/": "直播",
        //"www.acfun.cn/rank/list/": " 全站排行榜"
    };

    let dict2 = {
        "www.acfun.cn/u/3216851": "中国日报",
        "www.acfun.cn/u/9755346": "环球时报",
        "www.acfun.cn/u/14194071": "中国网",
        "www.acfun.cn/u/16591709": "法治进行时",
        "www.acfun.cn/u/14706221": "浙样红TV",
        "www.acfun.cn/u/12786860": "新青年工作室",
        "www.acfun.cn/u/16141705": "新华社现场云",
        "www.acfun.cn/u/20143211": "快手",
        "www.acfun.cn/u/13423227": "小央视频",
        "www.acfun.cn/u/30169313": "人民资讯",
        "www.acfun.cn/v/list178/index.htm": "AC正义展览区",
        "www.acfun.cn/bangumilist": "番剧列表",
        "www.acfun.cn/v/list67/index.htm": "TV动画",
        "www.acfun.cn/v/list180/index.htm": "剧场动画",
        "www.acfun.cn/v/list120/index.htm": "国产动画",
        "www.acfun.cn/v/list106/index.htm": "动画综合",
        "www.acfun.cn/v/list190/index.htm": "短片·手书·配音",
        "www.acfun.cn/v/list107/index.htm": "MAD·AMV",
        "www.acfun.cn/v/list108/index.htm": "MMD·3D",
        "www.acfun.cn/v/list207/index.htm": "虚拟偶像",
        "www.acfun.cn/v/list159/index.htm": "动画资讯",
        "www.acfun.cn/v/list133/index.htm": "COSPLAY·声优",
        "www.acfun.cn/v/list99/index.htm": "特摄",
        "www.acfun.cn/v/list212/index.htm": "番剧二创",
        "www.acfun.cn/v/list206/index.htm": "搞笑",
        "www.acfun.cn/v/list87/index.htm": "鬼畜",
        "www.acfun.cn/v/list188/index.htm": "明星",
        "www.acfun.cn/v/list86/index.htm": "生活日常",
        "www.acfun.cn/v/list88/index.htm": "萌宠",
        "www.acfun.cn/v/list89/index.htm": "美食",
        "www.acfun.cn/v/list204/index.htm": "旅行",
        "www.acfun.cn/v/list127/index.htm": "手工·绘画",
        "www.acfun.cn/v/list205/index.htm": "美妆·造型",
        "www.acfun.cn/v/list215/index.htm": "治愈系",
        "www.acfun.cn/v/list136/index.htm": "原创·翻唱",
        "www.acfun.cn/v/list137/index.htm": "演奏·乐器",
        "www.acfun.cn/v/list103/index.htm": "Vocaloid",
        "www.acfun.cn/v/list139/index.htm": "综合音乐",
        "www.acfun.cn/v/list185/index.htm": "音乐选集·电台",
        "www.acfun.cn/v/list218/index.htm": "颜值",
        "www.acfun.cn/v/list134/index.htm": "宅舞",
        "www.acfun.cn/v/list135/index.htm": "综合舞蹈",
        "www.acfun.cn/v/list129/index.htm": "偶像",
        "www.acfun.cn/v/list208/index.htm": "中国舞",
        "www.acfun.cn/v/list214/index.htm": "王者荣耀",
        "www.acfun.cn/v/list210/index.htm": "我的世界",
        "www.acfun.cn/v/list216/index.htm": "和平精英",
        "www.acfun.cn/v/list217/index.htm": "第五人格",
        "www.acfun.cn/v/list85/index.htm": "英雄联盟",
        "www.acfun.cn/v/list145/index.htm": "电子竞技",
        "www.acfun.cn/v/list186/index.htm": "网络游戏",
        "www.acfun.cn/v/list84/index.htm": "主机单机",
        "www.acfun.cn/v/list187/index.htm": "手机游戏",
        "www.acfun.cn/v/list165/index.htm": "桌游卡牌",
        "www.acfun.cn/v/list209/index.htm": "手办模玩",
        "www.acfun.cn/v/list90/index.htm": "科技制造",
        "www.acfun.cn/v/list189/index.htm": "人文科普",
        "www.acfun.cn/v/list122/index.htm": "汽车",
        "www.acfun.cn/v/list91/index.htm": "数码家电",
        "www.acfun.cn/v/list151/index.htm": "演讲·公开课",
        "www.acfun.cn/v/list149/index.htm": "广告",
        "hd.acfun.cn/s/QpdpZsjR": "放映厅",
        "www.acfun.cn/v/list219/index.htm": "影视混剪",
        "www.acfun.cn/v/list192/index.htm": "预告·花絮",
        "www.acfun.cn/v/list193/index.htm": "电影杂谈",
        "www.acfun.cn/v/list194/index.htm": "追剧社",
        "www.acfun.cn/v/list195/index.htm": "综艺show",
        "www.acfun.cn/v/list196/index.htm": "纪录片·短片",
        "www.acfun.cn/v/list152/index.htm": "综合体育",
        "www.acfun.cn/v/list94/index.htm": "足球",
        "www.acfun.cn/v/list95/index.htm": "篮球",
        "www.acfun.cn/v/list153/index.htm": "搏击健身",
        "www.acfun.cn/v/list93/index.htm": "极限竞速",
        "www.acfun.cn/v/list183/index.htm": "普法安全",
        "www.acfun.cn/v/list92/index.htm": "国防军事",
        "www.acfun.cn/v/list131/index.htm": "历史",
        "www.acfun.cn/v/list132/index.htm": "新鲜事·正能量",
        "www.acfun.cn/v/list184/index.htm": "二次元画师",
        "www.acfun.cn/v/list110/index.htm": "综合",
        "www.acfun.cn/v/list73/index.htm": "生活情感",
        "www.acfun.cn/v/list164/index.htm": "游戏",
        "www.acfun.cn/v/list74/index.htm": "动漫文化",
        "www.acfun.cn/v/list75/index.htm": "漫画·文学",
        "www.acfun.cn/v/list63/index.htm": "文章",
    }

    let videoHomes = [
        "动画综合",
        "短片·手书·配音",
        "MAD·AMV",
        "MMD·3D",
        "虚拟偶像",
        "动画资讯",
        "COSPLAY·声优",
        "特摄",
        "番剧二创",
        "搞笑",
        "鬼畜",
        "明星",
        "生活日常",
        "萌宠",
        "美食",
        "旅行",
        "手工·绘画",
        "美妆·造型",
        "治愈系",
        "原创·翻唱",
        "演奏·乐器",
        "Vocaloid",
        "综合音乐",
        "音乐选集·电台",
        "颜值",
        "宅舞",
        "综合舞蹈",
        "偶像",
        "中国舞",
        "王者荣耀",
        "我的世界",
        "和平精英",
        "第五人格",
        "英雄联盟",
        "电子竞技",
        "网络游戏",
        "主机单机",
        "手机游戏",
        "桌游卡牌",
        "手办模玩",
        "科技制造",
        "人文科普",
        "汽车",
        "数码家电",
        "演讲·公开课",
        "广告",
        "放映厅",
        "影视混剪",
        "预告·花絮",
        "电影杂谈",
        "追剧社",
        "综艺show",
        "纪录片·短片",
        "综合体育",
        "足球",
        "篮球",
        "搏击健身",
        "极限竞速",
        "普法安全",
        "国防军事",
        "历史",
        "新鲜事·正能量",
        "二次元画师",
    ]

    let articleHome = [
        "二次元画师",
        "综合",
        "生活情感",
        "游戏",
        "动漫文化",
        "漫画·文学",
        "文章"
    ]

    let href = pageUrl;
    if (href === "http://www.acfun.cn/" || href === "https://www.acfun.cn/") {
        return "HOME";
    }

    let regex = /https?:\/\/www\.acfun\.cn\/([av])\/ac\d+/
    let regex2 = /www\.acfun\.cn\/.*/
    let test = regex.exec(href);
    let test2 = regex2.exec(href);

    if (test !== null) {
        if (test[1] === "a") {
            return "ARTICLE"
        }
        if (test[1] === "v") {
            return "VIDEO"
        }
    }

    let hrefPart = test2[0];
    let pageTitle = dict1[hrefPart];
    if (typeof pageTitle !== "undefined" && pageTitle !== null) {

        return "VIDEO_HOME";
    }


    pageTitle = dict2[hrefPart];
    if (typeof pageTitle !== "undefined" && pageTitle !== null) {
        if (videoHomes.indexOf(pageTitle) >= 0) {
            return "VIDEO_HOME";
        }
        if (articleHome.indexOf(pageTitle) >= 0) {
            return "ARTICLE_HOME";
        }
        return "OTHER";
    } else {
        return "OTHER";
    }

}

// EXTERNAL MODULE: ./dev/css/style.css
var style = __webpack_require__(547);
;// CONCATENATED MODULE: ./dev/js/log.js


function log_log(...args){
    var logFunc = console.log;
    let r = ["插件DEBUG:"]
    args.forEach((a)=>{
        r.push(a);
    })
    logFunc(...r);

}
;// CONCATENATED MODULE: ./dev/version.txt
/* harmony default export */ const version = ("3.018");
;// CONCATENATED MODULE: ./dev/js/data.js
//function to load Data



function trimWord(d) {
    return d.replace(/(\r\n|\n|\r)/gm, "").trim();
}

let empty = (a) => {
    return typeof a === "undefined" || a === null ? () => {
    } : a;
};


let GM_set = typeof GM_setValue === "undefined" ?
    function (key, value, callback, failcallback) {
        let p = GM.setValue(key, value);
        p.then(empty(callback), empty(failcallback));


    }
    : function (key, value, callback) {
        GM_setValue(key, value);
        empty(callback)();
    };


let GM_get = typeof GM_getValue === "undefined" ?
    function (key, defaultValue, callback) {
        let p = GM.getValue(key, defaultValue);
        p.then((debug) => {
            empty(callback)(debug);
        }, () => {
            empty(callback)(defaultValue);
        });
    }
    : function (key, value, callback, failcallback) {
        let res = GM_getValue(key, value);
        empty(callback)(res);
    };


let GM_delete = typeof GM_deleteValue !== "undefined" ?
    function (key, callback, failcallback) {
        try {
            GM_deleteValue(key);
            callback();
        } catch (e) {
            failcallback(e);
        }

    }
    : (typeof GM.deleteValue === "undefined" ?
        function (key, callback, failcallback) {
            GM_set(key, null, callback, failcallback);
        } :
        function (key, callback, failcallback) {
            GM.deleteValue(key)
                .then(() => {
                    empty(callback)();
                })
                .catch((e) => {
                    empty(failcallback)(e);
                })
        })

function cleanBanList() {

    GM_set("ACFUN_BLOCK_LIST", []);
}

function cleanKeyWordList() {

    GM_set("ACFUN_BLOCK_KEYWORDS", []);
}

function _isUsingNewCloud(callback) {
    GM_get("USE_NEW_CLOUD", false, callback);
}

function _setUsingNewCloud(callback) {
    GM_set("USE_NEW_CLOUD", true);
}

function _loadBanList(callback) {
    GM_get("ACFUN_BLOCK_LIST", [], callback);
}

function _loadKeywords(callback) {
    GM_get("ACFUN_BLOCK_KEYWORDS", [], callback);
}

function _loadReplyBanList(callback) {
    GM_get("ACFUN_BLOCK_REPLIERS", [], callback);
}

function _updateBanList(d, callback) {
    GM_set("ACFUN_BLOCK_LIST", d, callback);
}

function _updateKeywords(d, callback) {
    GM_set("ACFUN_BLOCK_KEYWORDS", d, callback);
}

function _updateReplyBanList(d, callback) {
    GM_set("ACFUN_BLOCK_REPLIERS", d, callback);
}

__webpack_require__.g["usernameIDCache"] = null

function _getUsernameID(callback) {

    function retry() {
        setTimeout(() => {
            _getUsernameID(callback);
        }, 1000)
    }

    if (__webpack_require__.g["usernameIDCache"]) {
        empty(callback)(__webpack_require__.g["usernameIDCache"]);
        return;
    }
    if (typeof unsafeWindow.user !== "undefined") {
        let name = unsafeWindow.user.name;
        if (name !== "用户" && name !== "未知用户" && unsafeWindow.ImSdk) {
            let id = null;
            try {
                id = unsafeWindow.ImSdk.instance.kernel.cache.uid.low;
            } catch (e) {
                console.error(e)

            }
            __webpack_require__.g["usernameIDCache"] = [name, id];
            empty(callback)(__webpack_require__.g["usernameIDCache"]);
        } else {
            retry()
        }
    } else {
        let ndom = unsafeWindow.document.querySelector("a.fl.user-name")
        if (ndom) {
            let name = ndom.innerText.trim();
            if (name !== "未知用户" && unsafeWindow.ImSdk) {
                let id = null;
                try {
                    id = unsafeWindow.ImSdk.instance.kernel.cache.uid;
                } catch (e) {

                }

                __webpack_require__.g["usernameIDCache"] = [name, id];
                empty(callback)(__webpack_require__.g["usernameIDCache"]);
            } else {
                retry()
            }
        } else {
            retry()
        }
    }
}


function _getAllTags(callback) {
    // let p = new Promise((resolve, reject) => {
    //     if (typeof global["cachedUserTags"] === "undefined") {
    //         GM_get("ALL_TAGS", {}, (v) => {
    //             global["cachedUserTags"] = v;
    //             let cache = global["cachedUserTag"]
    //             resolve(cache);
    //         })
    //     } else {
    //         resolve(global["cachedUserTag"])
    //     }
    // })

    if (typeof __webpack_require__.g["cachedUserTags"] === "undefined") {
        GM_get("ALL_TAGS", {}, (v) => {
            __webpack_require__.g["cachedUserTags"] = v;
            let cache = __webpack_require__.g["cachedUserTags"]
            empty(callback)(cache);
        })
    } else {
        //console.log("non cache = ", global["cachedUserTags"])
        empty(callback)(__webpack_require__.g["cachedUserTags"])
    }
    //return p;
}

function _updateAllTags(callback) {
    __webpack_require__.g["cachedUserTags"] = __webpack_require__.g["cachedUserTags"] ? __webpack_require__.g["cachedUserTags"] : {};
    let ts = __webpack_require__.g["cachedUserTags"];
    let tsnew = {};
    for (let key in ts){
        if (ts.hasOwnProperty(key)){
            if (ts[key].length>0){
                tsnew[key] = ts[key];
            }
        }
    }
    GM_set("ALL_TAGS", tsnew, () => {
        callback();
    });
}


//get comment cache data,
//
//dict COMMENT_CACHE = { [cache_id : {floors:[saved floors]}]... } , cache_id = COMMENT_CACHE_${av}
//dict COMMENT_INDEX , a list of all cache id

function _addToCommentIndex(id, callback) {
    _getAllIndex((ids) => {
        console.log(typeof id);
        if (ids.indexOf(id) < 0) {
            ids.push(id);
            ids.sort((a, b) => {
                return a - b;
            })
        }
        GM_set("COMMENT_CACHE_INDEX", ids, () => {
            callback();
        })
    })
}

function _deleteFromCommentIndex(id, callback) {
    _getAllIndex((ids) => {
        if (ids.indexOf(id) >= 0) {
            let i = ids.indexOf(id);
            ids.splice(i, 1);
            GM_set("COMMENT_CACHE_INDEX", ids, () => {
                callback();
            })
        }
    })
}

//A ID LIST OF actively queried articles,


function _getAllIndex(callback) {
    GM_get("COMMENT_CACHE_INDEX", [], (ids) => {
        empty(callback)(ids);
    })
}


function _getCommentCache(id, callback) {
    let cacheId = `COMMENT_CACHE_${id}`;
    GM_get(cacheId, null, (cache) => {
        empty(callback)(cache);
    }, () => {
        empty(callback)(null);
    })
}

function _saveCommentCache(id, cache, callback) {
    let cacheId = `COMMENT_CACHE_${id}`;
    GM_set(cacheId, cache, () => {
            _addToCommentIndex(id, () => {
                empty(callback)();
            })
        },
        () => {
            console.error("缓存评论失败！");
        });
}

function _deleteCommentCache(id, callback) {
    let cacheId = `COMMENT_CACHE_${id}`;
    GM_delete(cacheId, () => {
        _deleteFromCommentIndex(id, () => {
            empty(callback)();
        });
    }, () => {
        console.log("DEBUG 删除缓存失败");
    })
}


function _saveUIPosition(x, y) {
    GM_set("UI_POSITION", {
        x: x, y: y
    })
}

function _loadUIPosition(callback) {
    GM_get("UI_POSITION", {x: 0, y: 500}, (val) => {
        callback(val);
    })
}


function _loadGeneralSetting(callback) {
    GM_get("GENERAL_SETTING", {
        showDeletedComment: true,
        showUserTags: true,
        showBanButton: true,
        showMouseover: true,
        autoSync: true
    }, (val) => {
        callback(val);
    })
}


function _saveGeneralSetting(setting, callback) {
    GM_set("GENERAL_SETTING", setting, () => {
        callback();
    })
}


/* harmony default export */ const data = ({
    version: version,

    loadGeneralSetting: _loadGeneralSetting,
    saveGeneralSetting: _saveGeneralSetting,

    updateBanList: _updateBanList,
    updateKeywords: _updateKeywords,
    updateReplyBanList: _updateReplyBanList,

    loadBanList: _loadBanList,
    loadReplyBanList: _loadReplyBanList,
    loadKeywords: _loadKeywords,

    isUsingNewCloud: _isUsingNewCloud,
    setUsingNewCloud: _setUsingNewCloud,
    getUsernameID: _getUsernameID,

    loadUIPosition: _loadUIPosition,
    saveUIPosition: _saveUIPosition,

    // Get Comment Cache
    getAllCacheIndices: _getAllIndex,
    getLocalCommentCache: _getCommentCache,
    saveCommentCache: _saveCommentCache,
    deleteCommentCache: _deleteCommentCache,

    getActiveHelpTime: function (callback) {
        let time = 0;
        GM_get("ACTIVE_HELP_TIME", time, (d) => {
            //console.log("get update time", d, parseInt(d));

            if (typeof d === "undefined" || d === null) d = 0;
            let d2 = parseInt(d);
            if (isNaN(d2)) d2 = 0;

            empty(callback)(d2);
        });
    },

    setActiveHelpTime(time, callback) {
        let t = typeof time === "undefined" ? +new Date() : time;
        GM_set("ACTIVE_HELP_TIME", t, () => {
            empty(callback)(t);
        });
    },


    // ENd Get comment cache

    setUpdateTime(time, callback) {
        let t = typeof time === "undefined" ? +new Date() : time;
        GM_set("UPDATE_TIME", t, () => {
            empty(callback)(t);
        });
    },

    getUpdateTime(callback) {
        let time = 0;
        GM_get("UPDATE_TIME", time, (d) => {
            //console.log("get update time", d, parseInt(d));

            if (typeof d === "undefined" || d === null) d = 0;
            let d2 = parseInt(d);
            if (isNaN(d2)) d2 = 0;

            empty(callback)(parseInt(d2));
        });
    },


    banUser(username, callback) {
        username = username.trim();
        _loadBanList((list) => {
            if (list.indexOf(username) < 0) {
                list.push(username);
                _updateBanList(list, () => {
                    empty(callback)(list);
                });
            } else {
                empty(callback)(list);
            }
        })
    },


    unbanUser(username, callback) {
        username = username.trim();
        _loadBanList((list) => {
            let i = list.indexOf(username);
            if (i >= 0) {
                list.splice(i, 1);
                _updateBanList(list, () => {
                    empty(callback)(list);
                });
            } else {
                empty(callback)(list);
            }
        })
    },

    banKeyword(w, callback) {
        w = w.trim();
        _loadKeywords((ws) => {
            if (ws.indexOf(w) < 0) {
                ws.push(w);
                _updateKeywords(ws, () => {
                    empty(callback)(ws);
                });
            } else {
                empty(callback)(ws)
            }
        })
    },

    unbanKeyword(w, callback) {
        w = w.trim();
        _loadKeywords((ws) => {
            let i = ws.indexOf(w);
            if (i >= 0) {
                ws.splice(i, 1);
                _updateKeywords(ws, () => {
                    empty(callback)(ws);
                });
            } else {
                empty(callback)(ws)
            }
        })
    },

    banReplier(username, callback) {
        username = username.trim();
        _loadReplyBanList((list) => {
            if (list.indexOf(username) < 0) {
                list.push(username);
                _updateReplyBanList(list, () => {
                    empty(callback)(list);
                });
            } else {
                empty(callback)(list)
            }
        })
    },

    unbanReplier(username, callback) {
        username = username.trim();
        _loadReplyBanList((list) => {
            let i = list.indexOf(username);
            if (i >= 0) {
                list.splice(i, 1);
                _updateReplyBanList(list, () => {
                    empty(callback)(list);
                });
            } else {
                empty(callback)(list)
            }
        })
    },

    getTags(username, callback) {
        username = username.trim();


        _getAllTags((v) => {
            let tags = v[username];
            empty(callback)(tags ? tags : []);
        })

    },

    removeTagForUser(username, tag, callback) {
        username = username.trim();

        _getAllTags((v) => {
            let tags = v[username];
            tags = tags ? tags : [];
            let i = tags.indexOf(tag);
            if (i >= 0) {
                tags.splice(i, 1)
                v[username] = tags;
            }
            __webpack_require__.g["cachedUserTags"] = v;
            _updateAllTags(callback)
        })
    },

    addTagToUser(username, tag, callback) {
        //console.log(tag);
        username = username.trim();

        _getAllTags((v) => {
            let tags = username in v ? v[username] : [];

            if (tags.indexOf(tag) < 0) {
                console.log(tag, "add to ", username)
                tags.push(tag);
                v[username] = tags;
            }
            __webpack_require__.g["cachedUserTags"] = v;
            console.log(__webpack_require__.g["cachedUserTags"])
            _updateAllTags(callback)
        })
    },

    AddTagsToUser(username, newtags, callback) {
        username = username.trim();

        _getAllTags()
            .then((v) => {
                let tags = v[username];
                tags = tags ? tags : [];
                newtags.forEach((t) => {

                    if (tags.indexOf(t) < 0) {
                        tags.push[t];
                    }
                })

                v[username] = tags;
                __webpack_require__.g["cachedUserTags"] = v;
                _updateAllTags(callback)
            })
    },

    getAlltags(callback) {
        _getAllTags((v) => {
            callback(v);
        })
    }


});
;// CONCATENATED MODULE: ./dev/js/server.txt
/* harmony default export */ const server = ("https://baldhumanity.top");
;// CONCATENATED MODULE: ./dev/js/util.js



function encode(a) {
    //return btoa(escape(a))

    //no encode needed.
    return a
}

function util_decode(a) {
    //no decode need
    //return unescape(atob(a))
    return a;
}

function check() {
    if (typeof unsafeWindow.A === "undefined") {
        unsafeWindow.A = (t, m) => {
            log_log(t, m);
        }
    }
}

//querydata = {name, query, ...others}
function _apiRequest(queryData, callback) {

    let xhr = new unsafeWindow.XMLHttpRequest();
    let url = server + "/api";
    let str = JSON.stringify(queryData);
    str = encode(str)
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(str);
    xhr.onload = function () {
        let d = {};
        try {

            d = JSON.parse(this.responseText);
            //
        } catch (e) {
            console.trace("ERROR failed parsing JSON string:", this.responseText);
        } finally {

            if (callback)
                callback(d);
        }
    };
}


/* harmony default export */ const util = ({

    getCommentType() {
        let m = unsafeWindow.localStorage.getItem("ac_usp_commMode");
        return m === "1" ? "NEW" : "OLD";
    },
    success(msg) {
        check();
        unsafeWindow.A.emit("global::success", msg, 3e3);
    },

    warn(msg) {
        check();
        unsafeWindow.A.emit("global::warning", msg, 3e3);
    },

    apiRequest: _apiRequest


});
;// CONCATENATED MODULE: ./dev/html/mainUI.html
// Module
var code = "<div id=\"helperUI\" class=\"helper-wrap\" style=\"pointer-events:none\"> <div class=\"helper-wrap-inner\"> <div style=\"pointer-events:all\" class=\"helper-main c-a ui-hidden smooth\"> <div class=\"plugin-hint\" id=\"hide_hint\">隐藏插件--></div> <div class=\"page-wrap\"> <div class=\"plugin-menu-title\">插件设置</div> <div class=\"menu-wrap\"> <div class=\"menu-column\"> <a id=\"bannedAuthours\">Ｕ Ｐ 主</a> <a id=\"bannedRepliers\">回 复 者</a> <a id=\"bannedKeywords\">关 键 词</a> <a id=\"cloudsync\">云 同 步</a> <a id=\"commentRecovery\">评论恢复</a> </div> <div class=\"menu-column\"> <a id=\"generalSetting\">通用设置</a> <a id=\"aboutme\">关于插件</a> <a href=\"https://baldhumanity.top/acfun\">网站主页</a> </div> </div> <div class=\"plugin-version\">0.00</div> <div class=\"plugin-author\">作恶者：<a href=\"https://message.acfun.cn/im?targetId=690324\" style=\"color:#00f\">人文情怀</a></div> </div> <div class=\"page-wrap inactive-page\" id=\"ban_up_page\"> <a class=\"go-back\">返回</a> <div class=\"plugin-add-ban-up\"> <input class=\"ban-title-input\" type=\"text\" maxlength=\"16\" placeholder=\"输入UP主ID...\"/> <input class=\"ban-item-submit\" type=\"button\" value=\"屏蔽\"> </div> <div class=\"banned-items\"> <div class=\"banned-item\"> <span class=\"banned-title\">我是名字</span> <button>×</button> </div> </div> </div> <div class=\"page-wrap inactive-page\" id=\"ban_replier_page\"> <a class=\"go-back\">返回</a> <div class=\"plugin-add-ban-up\"> <input class=\"ban-title-input\" type=\"text\" maxlength=\"16\" placeholder=\"输入评论者ID...\"/> <input class=\"ban-item-submit\" type=\"button\" value=\"屏蔽\"> </div> <div class=\"banned-items\"> <div class=\"banned-item\"> <span class=\"banned-title\">我是名字</span> <button>×</button> </div> </div> </div> <div class=\"page-wrap inactive-page\" id=\"ban_keyword_page\"> <a class=\"go-back\">返回</a> <div class=\"plugin-add-ban-up\"> <input class=\"ban-title-input\" type=\"text\" maxlength=\"16\" placeholder=\"输入屏蔽关键词...\"/> <input class=\"ban-item-submit\" type=\"button\" value=\"屏蔽\"> </div> <div class=\"banned-items\"> <div class=\"banned-item\"> <span class=\"banned-title\">LOL</span> <button>×</button> </div> </div> </div> <div class=\"page-wrap inactive-page\" id=\"cloudsync_page\"> <a class=\"go-back\">返回</a> <div class=\"about-page-content\"> <div class=\"cloud-description\"> 插件会上传你的屏蔽列表，只要安装插件的浏览器，登录同一个AC帐号都可以同步屏蔽。 </div> <div class=\"sync-time\"></div> <hr> <div> <button id=\"syncNow\">立即同步</button> </div> </div> </div> <div class=\"page-wrap inactive-page\" id=\"recovery_page\"> <a class=\"go-back\">返回</a> <div class=\"about-page-content\"> <div> 3.000版本新功能：查看已删除评论！<br/> 当你打开投稿，插件会第一时间在本地备份所有看到的评论，当未来某个时间，有评论被删除，插件将会为你恢复。同时本地备份将会在云服务器上共享。只要有一个用户备份过一次被删除的评论，所有用户都会得到分享。<br/> 只要越多人用插件，评论恢复的几率就越高。<br/> </div> <hr> <div> <b></b><span class=\"cache-info\"></span> </div> <div> <button id=\"delete_cache\">删除缓存</button> </div> </div> </div> <div class=\"page-wrap inactive-page\" id=\"general_page\"> <a class=\"go-back\">返回</a> <div class=\"about-page-content\"> <div> <label class=\"cc-container\" data-id=\"showBanButton\">在首页的投稿右上角显示[屏蔽]图标按钮 <input type=\"checkbox\" checked=\"checked\"> <span class=\"checkmark\"></span> </label> <label class=\"cc-container\" data-id=\"showMouseover\">在首页鼠标悬停被屏蔽投稿，将显示内容 <input type=\"checkbox\" checked=\"checked\"> <span class=\"checkmark\"></span> </label> <label class=\"cc-container\" data-id=\"autoSync\">自动云同步所有列表 <input type=\"checkbox\" checked=\"checked\"> <span class=\"checkmark\"></span> </label> <label class=\"cc-container\" data-id=\"showDeletedComment\">显示投稿内被删除评论 <input type=\"checkbox\" checked=\"checked\"> <span class=\"checkmark\"></span> </label> <label class=\"cc-container\" data-id=\"showUserTags\">显示评论用户标签 <input type=\"checkbox\" checked=\"checked\"> <span class=\"checkmark\"></span> </label> </div> </div> </div> <div class=\"page-wrap inactive-page\" id=\"about_page\"> <a class=\"go-back\">返回</a> <div class=\"about-page-content\"> 本插件持续更新中：） 只要我有空。 </div> </div> </div> <div style=\"pointer-events:all\" class=\"ac-girl ac-girl-hide smooth\"> </div> </div> </div>";
// Exports
/* harmony default export */ const mainUI = (code);
;// CONCATENATED MODULE: ./dev/js/event.js
//let queue = {}
//let fired = [];


function _getStorage() {

    if (typeof __webpack_require__.g["eventStorage"] === "undefined") {
        __webpack_require__.g["eventStorage"] = {};
    }
    return __webpack_require__.g["eventStorage"];
}

function _getNewEventId() {
    if (typeof __webpack_require__.g["eventCount"] === "undefined") {
        __webpack_require__.g["eventCount"] = 0;
    }
    __webpack_require__.g["eventCount"]++;
    return __webpack_require__.g["eventCount"];
}

/* harmony default export */ const js_event = ({
    on: function (eventName, callback) {
        let s = _getStorage();

        if (!(eventName in s)) {
            s[eventName] = [];
        }
        let id = _getNewEventId();
        s[eventName].push({
            id: id,
            callback: callback
        })

    },
    emit: function (eventName, data){
        //console.log("DEBUG EMIT", eventName, data);
        let s = _getStorage();
        if (eventName in s){
            let list = s[eventName];
            list.forEach((e)=>{
                e.callback(data);
            })
        }
    },


    emit1: function (eventName, data) {
        console.log("emit event", eventName);
        let doc = unsafeWindow.document;
        let event = new CustomEvent(eventName, {
            detail: {data: data},
            bubbles: true,
            cancelable: false,
            composed: false,
        });
        setTimeout(() => {
            doc.dispatchEvent(event);
        })

    },

    on1: function (eventName, callback) {
        let doc = unsafeWindow.document;

        doc.addEventListener(eventName, (e) => {
            callback(e.detail.data);
        })
    },

    onSpecific: function (domElement, eventName, callback) {

        domElement.addEventListener(eventName, (e) => {
            callback(e.detail.data);
        })
    }

});
;// CONCATENATED MODULE: ./dev/html/recoveryUI.html
// Module
var recoveryUI_code = "<div class=\"deleted-comments-container remove\"> <div class=\"deleted-comments-inner\"> <div class=\"deleted-comments-title\">被删除楼层<div class=\"hide-btn\">隐藏未收录</div></div> <div class=\"deleted-comment-list\"> </div> </div> </div>";
// Exports
/* harmony default export */ const recoveryUI = (recoveryUI_code);
;// CONCATENATED MODULE: ./dev/html/deletedComment.html
// Module
var deletedComment_code = "<div class=\"comment-info\"> <div class=\"comment-floor\">35</div> <div class=\"comment-query-state\">查询中……</div> <div class=\"comment-username remove\"></div> </div> <div class=\"comment-content remove\"> <div class=\"comment-text\">评论已删除</div> <div class=\"comment-time\">2021-10-18 12:21:01</div> </div>";
// Exports
/* harmony default export */ const deletedComment = (deletedComment_code);
;// CONCATENATED MODULE: ./dev/html/udp.html
// Module
var udp_code = "<div class=\"udp-container udp-hidden\"> <div class=\"udp-close\">×</div> <div class=\"udp-title\"></div> <div class=\"udp-inner\"> </div> </div>";
// Exports
/* harmony default export */ const udp = (udp_code);
;// CONCATENATED MODULE: ./dev/js/commentUI.js








var cumulativeOffset = function (element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);

    return {
        top: top,
        left: left
    };
};

function _observer() {
    let mutationObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            let target = mutation.target;

            if (target.tagName === "DIV") {
                setTimeout(() => {
                    _repositionUI();
                }, 0);

            }
        });
    });

    mutationObserver.observe(unsafeWindow.document, {subtree: true, childList: true});
}

function _repositionUI() {

    let doc = unsafeWindow.document;
    let main = doc.querySelector("#main")
    let commentDIv = main.querySelector(".ac-comment-list");
    if (!commentDIv) return;
    let rect = commentDIv.getBoundingClientRect();
    let offsets = cumulativeOffset(commentDIv);

    let uidom = doc.body.querySelector(".deleted-comments-container");
    uidom.style.top = offsets.top + "px";
    uidom.style.left = offsets.left + rect.width + 30 + "px";


    let height = Math.max(commentDIv.scrollHeight, commentDIv.offsetHeight);

    uidom.style.height = `${height - 100}px`

}

function _hideUnrecovered(uidom) {
    let k = !unsafeWindow["hideUnrecovered"];
    unsafeWindow["hideUnrecovered"] = k;
    if (k) {
        uidom.querySelectorAll(".deleted-comment")
            .forEach((dom) => {
                if (!dom["data"])
                    dom.classList.add("remove")
            })
    } else {
        uidom.querySelectorAll(".deleted-comment")
            .forEach((dom) => {
                dom.classList.remove("remove")
            })
    }
}

function _showUI(cache) {

    let doc = unsafeWindow.document;
    let uidom = doc.body.querySelector(".deleted-comments-container");

    unsafeWindow["deletedCommentsUI"] = uidom;
    uidom.classList.remove("remove");

    cache.deletedFloors.forEach((df) => {
        let itemDom = doc.createElement("DIV")
        itemDom.classList.add("deleted-comment")
        itemDom.insertAdjacentHTML("afterbegin", deletedComment);
        itemDom.querySelector(".comment-floor").innerText = "#" + df;
        itemDom["floor"] = df;
        uidom.querySelector(".deleted-comment-list")
            .appendChild(itemDom);
    })

    //防遮挡

    let rec = doc.querySelector(".area.recommendation");
    if (rec) {
        rec.style.maxHeight = "800px";
        rec.style.overflowX = "hidden";
        rec.style.overflowY = "scroll";
    }
    let rec2 = doc.querySelector("#pagelet_newrecommend")
    if (rec2) {
        rec2.style.maxHeight = "500px";
        rec2.style.overflowX = "hidden";
        rec2.style.overflowY = "scroll";
    }

    let fr = doc.querySelector(".content.wp.clearfix.area .fr");
    ///log("fr =", fr)
    if (fr) {
        fr.style.maxHeight = "800px";
        fr.style.overflowX = "hidden";
        fr.style.overflowY = "scroll";
    }


    //隐藏未收录
    uidom.querySelector(".hide-btn")
        .addEventListener("click", () => {
            _hideUnrecovered(uidom);
        })


}


function _replaceImage2(content) {

    let sb = /\[img(?:=图片)*\](https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))\[\/img\]/g;
    let ms = [...content.matchAll(sb)];
    let result = content.toString();
    ms.forEach((m) => {
        let oldstr = m[0];
        let url = m[1];
        let newstr = `<a href="${url}" target="_blank" ><img src="${url}"></a>`;
        result = result.replaceAll(oldstr, newstr);
    })
    return result;
}

function _replaceEmot(content) {
    let sb1 = /\[emot=acfun,(\d+)\/\]/g
    let ms = [...content.matchAll(sb1)];
    let result = content.toString();
    ms.forEach((m) => {
        let id = m[1];
        let o = unsafeWindow.emotDict[id];
        let url = o.emotionImageUrl;
        let imgtag = `<img class="ubb-emotion" src="${url}" />`;
        result = result.replaceAll(m[0], imgtag)
    })
    return result;
}

function recoverFloor(floorData) {
    //log(floorData);
    let doc = unsafeWindow.document;
    let uidom = doc.body.querySelector(".deleted-comments-container");
    let doms = uidom.querySelectorAll(".deleted-comment");
    //log("doms =",doms)
    doms.forEach((itemDom) => {
        //log("dom floor",itemDom["floor"])
        if (itemDom["floor"] === floorData.floor) {
            itemDom["data"] = floorData;
            let usernameDom = itemDom.querySelector(".comment-username");
            usernameDom.innerText = floorData.username;
            usernameDom.classList.remove("remove");
            let content = _replaceImage2(floorData.content);
            //let debug = _replaceImage2(floorData.content);
            //log("content debug",debug);
            content = _replaceEmot(content);
            itemDom.querySelector(".comment-text").innerHTML = content;
            itemDom.querySelector(".comment-query-state").classList.add("remove");
            let datetime = new Date(floorData.replyTime);
            itemDom.querySelector(".comment-time").innerText = datetime.toLocaleString()
            itemDom.querySelector(".comment-content").classList.remove("remove");

        }
    })
}


function noticeUncached(f) {
    let doc = unsafeWindow.document;
    let uidom = doc.body.querySelector(".deleted-comments-container");
    let doms = uidom.querySelectorAll(".deleted-comment");
    //log("doms =",doms)
    doms.forEach((itemDom) => {
        //log("dom floor",itemDom["floor"])
        if (itemDom["floor"] === f) {
            itemDom.querySelector(".comment-query-state").innerText = "服务器未收录"

        }
    })
}

function enable(val) {
    let doc = unsafeWindow.document;
    let uidom = doc.body.querySelector(".deleted-comments-container");
    if (val) {
        uidom.classList.remove("remove-2");
    } else {
        uidom.classList.add("remove-2");
    }
}

function showUDP(result) {
    let doc = unsafeWindow.document;
    let dom = doc.body.querySelector(".udp-container");
    dom.classList.remove("udp-hidden");
    let titledom = dom.querySelector(".udp-title")
    let inner = dom.querySelector(".udp-inner")
    inner.innerHTML="";
    let closebtn = dom.querySelector(".udp-close")

    closebtn.onclick = ()=>{
        dom.classList.add("udp-hidden")
    }

    titledom.innerHTML = `已收录[${result.username.substring(0,16)}]被删除评论 <strong>${result.list.length}<b>条`
    console.log(result);

    result.list.forEach((item) => {
        let d = item.v;
        let ac = item._id;
        let content = _replaceImage2(d.content);
        content = _replaceEmot(content);
        let datetime = new Date(d.replyTime);
        datetime = datetime.toLocaleString()

        let div = doc.createElement("div")
        div.classList.add("udp-item")
        div.innerHTML =
            `
<div class="udp-item-content">${content}</div>
<div class="udp-item-info">
    <div class="udp-time">${datetime}</div>
    <a href="/v/ac${ac}"><div class="udp-av">ac${ac}</div></a>
</div>`

        inner.append(div);
    })
}

function _bindEvents() {
    js_event.on("SHOW_DELETED_COMMENT_UI", (cache) => {
        //log("SHOW_DELETED_COMMENT_UI")
        _showUI(cache);
    })
    js_event.on("FLOOR_RECOVER", (floorData) => {
        recoverFloor(floorData)
    })
    js_event.on("NO_SERVER_CACHE", (floor) => {
        noticeUncached(floor)
    })

    js_event.on("SETTING_CHANGE_showDeletedComment", (val) => {
        enable(val);
    })

    js_event.on("LOOKUP", (username) => {

        let w = unsafeWindow;
        w.A.emit("global::success", `正在查询[${username}]的被删评论……`)
        commentRecovery.getUserDeletedPost(username, (result) => {
            js_event.emit("LOOKUP_RESULT", result);

            w.A.emit("global::success", `完成！`)
        })
    })


    js_event.on("LOOKUP_RESULT", (result) => {
        showUDP(result)
    })
}

function _loadEmots() {
    let s = localStorage.getItem("emoticonList")
    let list = JSON.parse(s);
    let dict = {};
    list.forEach((o) => {
        dict[o.emotionId] = o;
    })
    unsafeWindow["emotDict"] = dict;
}

function _loadUDPUI() {
    let doc = unsafeWindow.document;
    doc.body.insertAdjacentHTML("beforeend", udp);



}

function _loadUI() {
    let doc = unsafeWindow.document;
    doc.body.insertAdjacentHTML("beforeend", recoveryUI);
    unsafeWindow.onresize = _repositionUI;
    _repositionUI()
    _observer()

    data.loadGeneralSetting(setting => {
        //log("C INIT ", setting.showDeletedComment)
        enable(setting.showDeletedComment);
    })

}

/* harmony default export */ const commentUI = ({
    init() {
        _loadEmots();
        _loadUI();
        _loadUDPUI()
        _bindEvents();
    }
});
;// CONCATENATED MODULE: ./dev/js/commentRecovery.js







const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

let activeHelpInterval = 20 * MINUTE; //interval between each active help. 1 day in production because we don't want to flood the server


function commentRecovery_saveCommentCache(id, cache, callback) {
    data.saveCommentCache(id, cache, (e) => {
        if (callback) {
            callback(e);
        }
        js_event.emit("COMMENT_CACHE_UPDATE", cache);
    })
}

//querydata = {name, query, ...others}
function _httpGet(url, callback) {
    //_apiRequestWS(queryData,callback);
    //log("httpGet", url)


    let xhr = new unsafeWindow.XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function () {
        try {

            //log("httpget", this.responseText);
            let d = JSON.parse(this.responseText);
            if (callback)
                callback(d);
        } catch (e) {

            console.error(e);
            if (callback)
                callback(null);
        }
    };
    xhr.send();
}

function getContentId() {
    let pagetype = getPageType();
    let id = null;
    if (pagetype === "VIDEO") {
        let info = unsafeWindow.videoInfo;
        id = info["dougaId"];
    } else {
        let info = unsafeWindow.articleInfo;
        id = info["articleId"];
    }
    return id;
}


function getPage(id, p, callback, collectedComments) {
    //log("getPage", id, p, collectedComments)
    let url = `https://www.acfun.cn/rest/pc-direct/comment/listByFloor?sourceId=${id}&sourceType=3&page=${p}&pivotCommentId=0&newPivotCommentId=0&t=1638284078529&supportZtEmot=true`;

    _httpGet(url, (d) => {
        //console.log("DEBUG d1", url, d, JSON.stringify(collectedComments));
        if (d) {
            let keys = d.commentIds;
            keys.forEach((key) => {
                key = "c" + key;
                let c = d.commentsMap[key];
                //log(key, d.commentsMap);
                if (c.isDelete) {
                    return;
                }

                let comment = {
                    username: c.userName,
                    content: c.content,
                    //deviceModel: c.deviceModel,
                    replyTime: c.timestamp,
                    cId: c.cid,
                    floor: c.floor
                };
                collectedComments[parseInt(c.floor)] = comment;

            })
            collectedComments["totalCount"] = d.totalCount;
            let maxPage = d.totalPage;
            if (p < maxPage) {

                //0.5秒等待，防止高楼DDOS
                setTimeout(() => {
                    getPage(id, p + 1, callback, collectedComments);
                }, 500);
            } else {
                //log("GETPAGE DONE", collectedComments);
                callback(collectedComments);
            }
        }

    })
}


function _getPageLastReply(id, callback) {
    let p = 1;
    let url = `https://www.acfun.cn/rest/pc-direct/comment/listByFloor?sourceId=${id}&sourceType=3&page=${p}&pivotCommentId=0&newPivotCommentId=0&t=1638284078529&supportZtEmot=true`;

    _httpGet(url, (d) => {
        if (d) {
            //if first page is the last page, callback directly
            //log("d==", d);
            let idlast = "c" + d.commentIds[0];
            let clast = d.commentsMap[idlast];
            let totalCount = d.totalCount;
            callback(clast, totalCount);

        }
    })

}

let udpCache = {};

function _getUserDeletedPost(username, callback) {
    if (username in udpCache) {
        callback(udpCache[username]);
    } else {
        util.apiRequest({
            query: "udp",
            username: username
        }, (result) => {
            udpCache[username] = result;
            callback(result);
        })
    }
}


function _getAllPageCommentOnline(id, callback) {
    log_log(`采集评论，投稿id=${id}`)

    // let collectedComments = {}; // {[floor number: content]} content = {username, content, replyTime, deviceModel, acId}


    function collectDone(collectedComments) {
        let commentInfo = {
            id: id,
            floors: collectedComments,
            deletedFloors: [],
            recoveredFloors: [],
            lastReplyTime: 0,
            lastCheckTime: +new Date(),
            createTime: 0,
            floorCount: 0,
            reportedRecovery: [],
            queriedFloors: [],
        }

        let maxFloor = 0;
        Object.keys(commentInfo.floors).forEach((k) => {
            let f = commentInfo.floors[k].floor
            if (f > maxFloor) maxFloor = f;
            //commentInfo.floorCount++;
        })
        commentInfo.floorCount = collectedComments["totalCount"];

        log_log(`已采集本投稿评论至${maxFloor}楼。`);
        // get the last reply time, and collect deleted floors (missing floors)
        for (let i = 1; i <= maxFloor; i++) {
            if (!(i in collectedComments)) {
                //floor missing
                commentInfo.deletedFloors.push(i);
            } else {
                let replyTime = collectedComments[i].replyTime;

                if (replyTime > commentInfo.lastReplyTime) {
                    //log("1", commentInfo.lastReplyTime)
                    commentInfo.lastReplyTime = replyTime;
                }

            }
        }
        callback(commentInfo);

    }


    getPage(id, 1, collectDone, {});
}

function _activeReport(cache) {
    let reportData = {
        id: cache.id,
        recoveredFloors: [],
        floors: {}
    }

    let count = 0;
    cache.recoveredFloors.forEach((fn) => {
        fn = parseInt(fn);
        //if this recovered floor has not been reported to the server
        //report it
        if (cache.reportedRecovery.indexOf(fn) < 0) {
            reportData.recoveredFloors.push(fn);
            let floor = cache.floors[fn];
            let toReport = {
                username: floor.username,
                replyTime: floor.replyTime,
                floor: parseInt(floor.floor),
                cId: parseInt(floor.cId),
                content: floor.content,
            }

            reportData.floors[fn] = toReport;
            count++;
        }
    })


    let queryData = {
        query: "report_cache",
        cache: reportData
    }


    //report when there is sth to report
    if (count > 0) {
        //log("DATA TO REPORT", reportData);
        util.apiRequest(queryData, (result) => {
            //log("report result", result);

            //mark reported floors to cache
            cache.reportedRecovery = cache.recoveredFloors.map(x => x)
            commentRecovery_saveCommentCache(cache.id, cache);

        })
    }

}


//input id for the page, cache loaded in the upper function
function _getCommentsOnlineAndMerge(id, oldCache, callback) {
    //log("_getCommentsAndMerge", oldCache)
    //get all comments, and compare with local, merge what is new, and mark what is missing
    _getAllPageCommentOnline(id, (newCache) => {
        //log("_getAllPageCommentOnline 2", newCache)
        let intKeys = Object.keys(newCache.floors).map(x => parseInt(x));
        let floorMax = Math.max(...intKeys);
        //log("***", intKeys, floorMax);
        for (let f = 1; f <= floorMax; f++) {
            //log("merging ", f, f in newCache.floors, f in oldCache.floors);
            if (f in newCache.floors && f in oldCache.floors) {
                //Comment in both cache, nothing to do
            } else if (f in newCache.floors && !(f in oldCache.floors)) {
                //new comment compared to old cache, add it to new cache, which means nothing to do
            } else if (!(f in newCache.floors) && f in oldCache.floors) {
                //comment was here but deleted, merge old cache to new cache.
                newCache.floors[f] = oldCache.floors[f];
                newCache.recoveredFloors.push(f);
            } else {
                //floor missing in both , todo: allow user to query the server for this missing
            }

        }
        if (!oldCache.reportedRecovery) {
            oldCache.reportedRecovery = [];
        }
        newCache.reportedRecovery = oldCache.reportedRecovery.map(x => x); //deep copy

        let delcount = newCache.deletedFloors.length;
        let recovCount = newCache.recoveredFloors.length;
        commentRecovery_saveCommentCache(id, newCache, () => {
            log_log(newCache.lastReplyTime)
            log_log(`投稿${id}重新缓存完成。${delcount}个被删除，${recovCount}个被恢复`);
            callback(newCache)
            _activeReport(newCache);
        })

    })


}

//cache format  {id: id, floors : { [floor number]: {floor data}}, lastReplyTime: LINUX_TIME, lastCheckTime: LINUX_TIME }
//cache if there is none
//cache if last reply time is later than local lastCheckTime


//this function check the cache and check the\
function _checkPageComment(id, callback) {
    data.getLocalCommentCache(id, (cache) => {
        //log("cache = ", cache);
        //if tehre is no cache, cache all comments straight away.
        if (!cache) {
            _getAllPageCommentOnline(id, (c) => {

                commentRecovery_saveCommentCache(id, c, () => {
                    log_log("首次收集投稿" + id + `评论完成。发现${c.deletedFloors.length}个评论被删除。`);
                    callback(c);
                })
            })
        } else {
            //if there is cache,
            //get page latest reply, if it is later than cache, re-cache all comments
            log_log("对比评论缓存是否需要更新。")
            _getPageLastReply(id, (lastReply, totalCount) => {
                //log("lastreply", lastReply, cache)

                let t1 = parseInt(lastReply.timestamp);
                let t2 = parseInt(cache.lastReplyTime)
                //log(cache.floorCount, totalCount)
                if (t1 !== t2 || cache.floorCount !== totalCount) {
                    log_log(id + " 投稿缓存需要更新");
                    _getCommentsOnlineAndMerge(id, cache, callback);
                } else {
                    log_log("已经缓存到最新评论了。")
                    callback(cache);
                }
            })
        }
    })
}


function _checkCurrentPageComment(callback) {
    if (!callback)
        callback = () => 0;
    let id = getContentId();
    //log("id=", id);
    _checkPageComment(id, callback)
}

function showUI(cache) {
    js_event.emit("SHOW_DELETED_COMMENT_UI", cache);
}


function _recoverByLocalCache(cache, then) {
    //log(cache);
    log_log(`本地可恢复楼层：${cache.recoveredFloors.join(" ")}`);

    cache.recoveredFloors.forEach((recoveredFloor) => {
        let floor = cache.floors[recoveredFloor];
        js_event.emit("FLOOR_RECOVER", floor);
    })

    then();
}

function _mergeServerCacheToLocal(serverCache, localCache) {
    //log("_mergeServerCacheToLocal", serverCache, localCache)

    if (serverCache.cached.length === 0) {
        log_log("服务器没有其他缓存，已同步服务器缓存");
        return;
    }
    serverCache.cached.forEach((floor) => {
        if (localCache.recoveredFloors.indexOf(floor.floor) < 0) {
            localCache.floors[floor.floor] = floor;
            localCache.recoveredFloors.push(floor.floor);
            localCache.reportedRecovery.push(floor.floor);
        }
    })
    commentRecovery_saveCommentCache(localCache.id, localCache, () => {
        log_log("已从服务器更新本投稿缓存。")
    })
}

function _recoverByServerCache(localCache) {

    //log("LOCALCACHE", localCache)
    let queryObj = {
        query: "query_floors",
        id: localCache.id,
        floors: localCache.deletedFloors.filter(x => localCache.recoveredFloors.indexOf(x) < 0),
    }

    if (queryObj.floors.length > 0) {
        log_log("向服务器发出恢复评论的请求");
        util.apiRequest(queryObj, (result) => {
            //log("Query REs", result);

            //update page with recovered
            let cachedFloors = [];
            result.cached.forEach((floor) => {
                js_event.emit("FLOOR_RECOVER", floor);
                cachedFloors.push(floor.floor)
            })

            //for each queried floor, if not cached by server, emit event for ui to show info
            queryObj.floors.forEach((f) => {
                if (cachedFloors.indexOf(f) < 0) {
                    //log("Not found in server", f);

                    js_event.emit("NO_SERVER_CACHE", f);
                }
            })

            _mergeServerCacheToLocal(result, localCache)

        })
    }

}

function recoverComments(cache) {
    //log("recoverComments")
    //first use local cache to recover
    _recoverByLocalCache(cache, () => {
        //after using local cache, everything left will be request
        _recoverByServerCache(cache);
    });
}


function __activeHelp() {
    data.getAllCacheIndices((ids) => {
        let queryObj = {
            query: "active_recover",
            ids: ids,
        }
        util.apiRequest(queryObj, (_d) => {
            log_log(`收到服务器恢复需求。${_d.result.length}个投稿需要本地数据`, _d);
            let list = _d.result;
            let recoverCount = 0;
            let floorTotal = 0;
            list.forEach((serverRequest, index) => {
                data.getLocalCommentCache(serverRequest._id, (cache) => {

                    let reportData = {
                        id: cache.id,
                        recoveredFloors: [],
                        floors: {}
                    }
                    let count = 0;
                    serverRequest.floors.forEach((f) => {
                        if (f in cache.floors) {
                            count++;
                            let floor = cache.floors[f];
                            let toReport = {
                                username: floor.username,
                                replyTime: floor.replyTime,
                                floor: parseInt(floor.floor),
                                cId: parseInt(floor.cId),
                                content: floor.content,
                            }

                            reportData.recoveredFloors.push(f);
                            reportData.floors[f] = toReport;
                        }
                    })


                    let queryData = {
                        query: "report_cache",
                        cache: reportData
                    }


                    //report when there is sth to report
                    if (count > 0) {
                        log_log("主动恢复评论数据", reportData);
                        util.apiRequest(queryData, (result) => {
                            log_log("恢复结果", result);

                            //mark reported floors to cache
                            cache.reportedRecovery = cache.recoveredFloors.map(x => x)
                            commentRecovery_saveCommentCache(cache.id, cache);

                        })
                        recoverCount++;
                        floorTotal += count;
                    }

                    if (index === list.length - 1) {
                        log_log(`帮助服务器恢复共${recoverCount}个投稿和${floorTotal}个评论。`)
                    }

                })
            })


        })
    })
}

function _activeHelp() {
    log_log("主动帮助")
    let t = +new Date();
    data.getActiveHelpTime((lasttime) => {
        //log("上次主动帮助时间", lasttime, (new Date(lasttime)).toLocaleTimeString());
        if (t - activeHelpInterval > lasttime) {
            let interval = Math.round((t - lasttime) / 1000);

            log_log(`距离上次主动帮助已经${interval}秒了`)
            __activeHelp();
            data.setActiveHelpTime(t);
        } else {

            log_log(`距离上次主动帮助还未足够。`)
        }
    })
}

function _deleteCache(id) {
    log_log("trying to delete cache, id=", id);
    data.deleteCommentCache(id, () => {
        //log(`删除缓存成功，id=${id}`);
    })
}


function _deleteAllCache(callback) {
    log_log("deleteallcache")

    function deleteOneByOne(ids, i) {
        if (i >= ids.length) {
            js_event.emit("COMMENT_CACHE_UPDATE", null);
            callback();
            return
        }

        let id = ids[i];
        _deleteCache(id);
        setTimeout(() => {
            deleteOneByOne(ids, i + 1)
        })
    }

    data.getAllCacheIndices((ids) => {
        deleteOneByOne(ids, 0);
    })
}


/* harmony default export */ const commentRecovery = ({
    init() {
        commentUI.init();
        //check if page type is content page
        let pagetype = getPageType();
        if (!(pagetype === "VIDEO" || pagetype === "ARTICLE")) {
            return;
        }
        //debug

        unsafeWindow["deleteCache"] = data.deleteCommentCache;
        unsafeWindow["clearCache"] = _deleteAllCache


        _checkCurrentPageComment((cache) => {
            setTimeout(() => {
                showUI(cache);
                recoverComments(cache);
            }, 1000)


        });
        _activeHelp();
    },
    deleteAllCache: _deleteAllCache,
    getUserDeletedPost: _getUserDeletedPost
});
;// CONCATENATED MODULE: ./dev/js/setting-ui.js







function enableDragging(controlDom, containerDom, enableX = true, enableY = true) {
    let doc = unsafeWindow.document;
    let body = doc.body;

    let cx = -1;
    let cy = -1;
    __webpack_require__.g.dragging = false;

    let startCX
    let startCY
    controlDom.addEventListener("pointerdown", (e) => {
        cx = e.clientX;
        cy = e.clientY;

        let rect = containerDom.getBoundingClientRect();
        startCX = rect.left;
        startCY = rect.top;
        __webpack_require__.g.dragging = true;
    })

    body.addEventListener("pointermove", (e) => {
        if (__webpack_require__.g.dragging) {
            let dx = e.clientX - cx;
            let dy = e.clientY - cy;

            if (enableX) {
                containerDom.style.left = (startCX + dx) + "px";
            }
            if (enableY) {
                containerDom.style.top = (startCY + dy) + "px";
            }
        }
    })

    body.addEventListener("pointerup", () => {
        __webpack_require__.g.dragging = false;
        let rect = containerDom.getBoundingClientRect();
        data.saveUIPosition(rect.left, rect.y);
    })

}


function showBannedList(dom, listName) {


    let dictBan = {
        up: ["#ban_up_page", data.loadBanList, unbanUpButtonClick, data.banUser, "UP_BAN_UPDATE"],
        replier: ["#ban_replier_page", data.loadReplyBanList, unbanReplierButtonClick, data.banReplier, "REPLY_BAN_UPDATE"],
        keyword: ["#ban_keyword_page", data.loadKeywords, unbanKeywordButtonClick, data.banKeyword, "KEYWORD_BAN_UPDATE"]
    }

    let opt = dictBan[listName];

    opt[1]((list) => {


        //page inputbox button
        let page = dom.querySelector(opt[0]);

        let button = page.querySelector(".ban-item-submit")
        button.addEventListener("click", () => {
            let input = page.querySelector(".ban-title-input");
            let text = input.value;

            if (text.length === 0) {
                input.focus();
                return;
            }

            input.value = "";

            opt[3](text, () => {
                js_event.emit(opt[4], null);
            })
        })

        if (!list || !list.indexOf){return;}
        //List of banned items
        let container = page.querySelector(".banned-items")

        let currentList = [];
        let currentItemDoms = container.querySelectorAll(".banned-item");
        currentItemDoms.forEach((i) => {
            let username = i.querySelector(".banned-title").innerText;

            if (list.indexOf(username) >= 0) {
                currentList.push(username);
            } else {
                i.remove();
            }
        });

        let doc = unsafeWindow.document;
        list.forEach((i) => {
            if (currentList.indexOf(i) < 0) {
                let node = doc.createElement("div");
                node.classList.add("banned-item")
                let n1 = doc.createElement("span")
                n1.classList.add("banned-title")
                n1.innerText = i;
                let n2 = doc.createElement("button")
                n2.innerText = "×";
                node.append(...[n1, n2]);

                n2.addEventListener("click", (e) => {
                    opt[2](i);
                })

                container.append(node)
            }
        });


    })
}


function updateBannedUpList(dom) {
    if (typeof dom === "undefined") {
        let doc = unsafeWindow.document;
        dom = doc.body.querySelector("#helperUI")
    }
    showBannedList(dom, "up")
}

function updateBannedReplierList(dom) {
    if (typeof dom === "undefined") {
        let doc = unsafeWindow.document;
        dom = doc.body.querySelector("#helperUI")
    }
    showBannedList(dom, "replier")
}

function updateBannedKeywordsList(dom) {
    if (typeof dom === "undefined") {
        let doc = unsafeWindow.document;
        dom = doc.body.querySelector("#helperUI")
    }
    showBannedList(dom, "keyword")
}

function unbanUpButtonClick(username) {
    data.unbanUser(username, (banlist) => {
        js_event.emit("UP_BAN_UPDATE", banlist);
    })
}

function unbanReplierButtonClick(username) {
    data.unbanReplier(username, (banlist) => {
        js_event.emit("REPLY_BAN_UPDATE", banlist);
    })
}

function unbanKeywordButtonClick(keyword) {
    data.unbanKeyword(keyword, (banlist) => {
        js_event.emit("KEYWORD_BAN_UPDATE", banlist);
    })
}

function _changeSetting(key, val, callback) {
    data.loadGeneralSetting((s) => {
        s[key] = val;
        data.saveGeneralSetting(s, callback);
    })
}

function bindGeneralSettingEvents(dom) {

    dom.querySelectorAll(".cc-container")
        .forEach((dom) => {
            let t = dom;
            let key = t.getAttribute("data-id");

            dom.addEventListener("change", (e) => {
                let checked = t.querySelector("input").checked;
                _changeSetting(key, checked, () => {
                    js_event.emit("SETTING_CHANGE_" + key, checked);
                })


            })

            data.loadGeneralSetting((setting) => {
                let input = dom.querySelector("input")
                input.checked = setting[key] ? "checked" : "";
                //log(setting,key,setting[key]);
            })
        })
}


function initButtons(dom) {

    //Menu buttons
    let dict = {
        "bannedAuthours": ["#ban_up_page"],
        "bannedRepliers": ["#ban_replier_page"],
        "bannedKeywords": ["#ban_keyword_page"],
        "cloudsync": ["#cloudsync_page"],
        "commentRecovery": ["#recovery_page"],
        "generalSetting": ["#general_page"],
        "aboutme": ["#about_page"],
    }

    let allPageButtons = [];
    Object.keys(dict).forEach((id) => {
        allPageButtons.push(id)

        dom.querySelector("#" + id)
            .addEventListener("click", () => {
                let pageid = dict[id][0];
                dom.querySelector(pageid).classList.remove("inactive-page")
            })

    });

    for (let key in dict) {
        let id = dict[key][0];
        dom.querySelector(id)
            .querySelector("a.go-back")
            .addEventListener("click", () => {
                dom.querySelector(id).classList.add("inactive-page")
            });

    }


    //hide setting button
    let uiMain = dom.querySelector(".helper-main");
    let acgirl = dom.querySelector(".ac-girl");
    acgirl.addEventListener("click", () => {
        if (!uiMain.classList.contains("ui-hidden")) {
            uiMain.classList.add("ui-hidden");
        } else {
            uiMain.classList.remove("ui-hidden");
        }
    })
    let hidehint = dom.querySelector("#hide_hint");
    hidehint.addEventListener("click", () => {

        uiMain.classList.add("ui-hidden");
    })

}

function refreshSyncTime(dom) {

    function timeConverter(UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = year + "年" + month + date + '日 ' + hour + ':' + min + ':' + sec;
        return time;
    }

    data.getUpdateTime((time) => {
        dom.querySelector(".sync-time")
            .innerText = "上次同步时间：" + timeConverter(time);
    })
}

function _refreshCommentCachePage(dom) {

    data.getAllCacheIndices((ids) => {
        let count = ids.length;

        dom.querySelector(".cache-info")
            .innerText = `已缓存${count}篇投稿评论`
    })

}

function bindEvents(dom) {
    js_event.on("UP_BAN_UPDATE", () => {
        updateBannedUpList();
    })
    js_event.on("REPLY_BAN_UPDATE", () => {
        updateBannedReplierList();
    })
    js_event.on("KEYWORD_BAN_UPDATE", () => {
        updateBannedKeywordsList();
    })
    js_event.on("SYNC_TIME_UPDATE", () => {
        refreshSyncTime(dom);
    })
    js_event.on("COMMENT_CACHE_UPDATE", () => {
        _refreshCommentCachePage(dom);
    })
    dom.querySelector("#syncNow").addEventListener("click", () => {
        js_event.emit("SYNC_NOW", null);
    })

    let cacheDelBtn = dom.querySelector("#delete_cache");
    cacheDelBtn.addEventListener("click", () => {

        cacheDelBtn.disabled = true;
        commentRecovery.deleteAllCache(() => {
            setTimeout(()=>{
                cacheDelBtn.disabled = false;
            }, 1000)
        });
    })


}

function initAcGirl(dom) {

    let girl = dom.querySelector(".ac-girl");
    girl.classList.remove("ac-girl-hide");
    let ui = unsafeWindow.document.body.querySelector("#helperUI")
    enableDragging(girl, ui, false);

}


function setting_ui_version(dom) {
    dom.querySelector(".plugin-version").innerText = "版本：" + data.version;
}

function cacheInfo(dom) {

    _refreshCommentCachePage(dom)
}

function init(dom) {

    data.loadUIPosition((pos) => {
        dom.style.top = pos.y + "px";
        dom.style.left = pos.x + "px";
    })

    bindEvents(dom);
    bindGeneralSettingEvents(dom);

    updateBannedUpList(dom);
    updateBannedReplierList(dom);
    updateBannedKeywordsList(dom);

    initButtons(dom)
    setting_ui_version(dom)
    cacheInfo(dom)

    initAcGirl(dom);
}


/* harmony default export */ const setting_ui = ({
    state: "MENU",
    showSettingUI() {
        let doc = unsafeWindow.document;
        doc.body.insertAdjacentHTML("beforeend", mainUI)

        let uiDom = doc.body.querySelector("#helperUI")

        init(uiDom);
    }
});
;// CONCATENATED MODULE: ./dev/html/subUI.html
// Module
var subUI_code = "<div class=\"sub-ui-wrap\"> <div class=\"sub-ui-inner sub-ui-normal\"> <div class=\"sub-ui-text\"> 正 常 </div> <div id=\"banUp\" class=\"sub-ui-button sub-ui-text smooth\"> </div> <div id=\"unbanUp\" class=\"sub-ui-button sub-ui-text remove smooth\"> </div> </div> </div>";
// Exports
/* harmony default export */ const subUI = (subUI_code);
;// CONCATENATED MODULE: ./dev/js/contentPageUI.js
//A simple page ui






function contentPageUI_bindEvents() {
    js_event.on("UP_BAN_UPDATE", () => {
        refreshUI();
    })
    let doc = unsafeWindow.document;
    let innerWrap = doc.querySelector(".sub-ui-inner");
    let banbutton = innerWrap.querySelector("#banUp");
    let unbanbutton = innerWrap.querySelector("#unbanUp");

    banbutton.addEventListener("click", () => {
        data.banUser(_getUsername(doc));

        js_event.emit("UP_BAN_UPDATE", null);
    })

    unbanbutton.addEventListener("click", () => {
        data.unbanUser(_getUsername(doc));
        js_event.emit("UP_BAN_UPDATE", null);
    })


}


function showBannedUI() {
    let doc = unsafeWindow.document;
    let innerWrap = doc.querySelector(".sub-ui-inner");
    innerWrap.classList.remove("sub-ui-normal")
    innerWrap.classList.add("sub-ui-banned")
    let text = innerWrap.querySelector(".sub-ui-text");
    text.innerText = "已屏蔽"

    let banbutton = innerWrap.querySelector("#banUp");
    let unbanbutton = innerWrap.querySelector("#unbanUp");
    banbutton.classList.add("remove");
    unbanbutton.classList.remove("remove")


}

function showNormalUI() {

    let doc = unsafeWindow.document;
    let innerWrap = doc.querySelector(".sub-ui-inner");
    innerWrap.classList.add("sub-ui-normal")
    innerWrap.classList.remove("sub-ui-banned")
    let text = innerWrap.querySelector(".sub-ui-text");
    text.innerText = "正  常"


    let banbutton = innerWrap.querySelector("#banUp");
    let unbanbutton = innerWrap.querySelector("#unbanUp");
    banbutton.classList.remove("remove");
    unbanbutton.classList.add("remove")
}

function refreshUI() {
    let doc = unsafeWindow.document;
    let username = _getUsername(doc);
    data.loadBanList((list) => {
        if (list.indexOf(username) >= 0) {
            //banned
            showBannedUI();
        } else {
            showNormalUI();
        }

    })
}

function _getUsername(doc) {

    let updom;

    let type = getPageType()
    if (type ==="VIDEO"){
        updom = doc.querySelector(".up-info .up-name")
    }else{
        updom = doc.querySelector(".up-name a")
    }
    // if (updom.tagName.toLowerCase() === "div") {
    //     updom = updom.firstChild;
    // }
    //log(updom);
    return updom.innerText;

}

function contentPageUI_loadUI() {
    let doc = unsafeWindow.document;
    doc.body.insertAdjacentHTML("beforeend", subUI)

    let vid = doc.querySelector(".container-video")
    if (vid)
        vid.classList.add("on-top")


}

/* harmony default export */ const contentPageUI = ({
    loadUI() {
        contentPageUI_loadUI();
        contentPageUI_bindEvents();
    }
});
;// CONCATENATED MODULE: ./dev/js/ui.js









function hideArticle(c) {

    if ("contentData" in c.dom) {
        c = c.dom["contentData"];
    }

    if (!("originalHeight" in c)) {
        let rect = c.dom.getBoundingClientRect();
        c["originalHeight"] = rect.height;
    }
    c.dom.style.height = c.originalHeight + "px";
    c.dom.classList.add("smooth");
    setTimeout(() => {

        c.dom.classList.add("banned-article");
    })
    setTimeout(() => {
        //c.dom.classList.add("remove");
    }, 500)
    c["hidden"] = true;
}

function hideItem(c) {
    c.dom.classList.add("smooth");
    c.dom.classList.add("banned-page-item");
    if (__webpack_require__.g["showMouseover"]) {
        c.dom.classList.add("hover-show");
    } else {
        c.dom.classList.remove("hover-show");
    }
    c["hidden"] = true;
}

function showItem(c) {
    c.dom.classList.remove("banned-page-item");
    c["hidden"] = false;
}

function showArticle(c) {
    c.dom.classList.remove("banned-article");
    c.dom.classList.remove("remove");
    c["hidden"] = false;
}

function _hideContent(c) {
    if ("contentData" in c.dom) {
        c = c.dom["contentData"];
    }
    if (c.type === "ARTICLE") {
        hideArticle(c)
    } else {
        hideItem(c)
    }
}

function _showContent(c) {
    if ("contentData" in c.dom) {
        c = c.dom["contentData"];
    }
    if (c.type === "ARTICLE") {
        showArticle(c);
    } else {
        showItem(c);
    }
}

function unbanReplier(username) {
    data.unbanReplier(username, (banlist) => {
        js_event.emit("REPLY_BAN_UPDATE")
    })
}


function _hideSingleComment(c) {
    let type = util.getCommentType();
    let blockDiv = unsafeWindow.document.createElement("div")
    blockDiv.append(...c.dom.childNodes);
    blockDiv.classList.add("remove");
    blockDiv.classList.add("block-mark");

    let infoDiv = unsafeWindow.document.createElement("div");
    infoDiv.classList.add("banned-text");
    infoDiv.innerText = "已屏蔽[" + c.username + "]的发言。"

    let unblockA = unsafeWindow.document.createElement("a");
    unblockA.classList.add("unban-replier-btn")
    unblockA.innerText = "取消屏蔽"
    unblockA.addEventListener("click", () => {

        unbanReplier(c.username)

    })
    infoDiv.appendChild(unblockA);

    c.dom.appendChild(blockDiv);
    c.dom.appendChild(infoDiv);
    c["container"] = blockDiv;//Now this comment has a container, which can be used to recover later.
    c.dom["bannedData"] = c;
    c.hidden = true;

}

function _unhideSingleComment(c) {
    if (!c.dom.hasOwnProperty("bannedData")) return;
    let attachedCommentData = c.dom["bannedData"];
    if (!attachedCommentData.hidden) return;

    c.dom.append(...attachedCommentData.container.childNodes);
    c.dom.querySelector(".banned-text").remove();
    attachedCommentData.container.remove();
    attachedCommentData.hidden = false;
}

function refreshUserComments(comments) {
    data.loadReplyBanList((banlist) => {

        if (banlist !== null) {
            comments.forEach((c) => {
                if (banlist.indexOf(c.username) >= 0) {
                    if (c.dom.hasOwnProperty("bannedData")) {
                        if (!c.dom["bannedData"].hidden) {
                            _hideSingleComment(c);
                        }
                    } else {
                        _hideSingleComment(c);
                    }
                } else {
                    _unhideSingleComment(c);
                }
            })
        }

    })

}

function refreshPageItems(contents) {

    data.loadBanList((blist) => {

        data.loadKeywords((klist) => {

            contents.forEach((c) => {
                let banned = false;
                if (blist && blist.indexOf && blist.indexOf(c.username) >= 0) {
                    //过滤被屏蔽的视频
                    _hideContent(c);
                    banned = true;
                }
                if (klist && klist.indexOf) {
                    klist.forEach((keyword) => {
                        if (c.title.indexOf(keyword) >= 0) {
                            _hideContent(c);
                            banned = true;
                        }
                    })
                }

                if (!banned) {
                    _showContent(c);
                }

            })


        })
    })

}

function showCommentTags(content) {

}


//
// function _hideUserComments(banlist) {
//
//     if (banlist !== null) {
//         let commentList = _getComments(unsafeWindow.document);
//         commentList.forEach((c) => {
//             if (banlist.indexOf(c.username) >= 0) {
//                 if (c.dom.hasOwnProperty("bannedData")) {
//                     if (!c.dom["bannedData"].hidden) {
//                         _hideSingleComment(c);
//                     }
//                 } else {
//                     _hideSingleComment(c);
//                 }
//             }
//         })
//     }
// }

function _banReplyUser(username) {
    data.banReplier(username, (banlist) => {

        js_event.emit("REPLY_BAN_UPDATE", null);

    })

}

//
// function _unhideUserComment(banlist) {
//     if (banlist !== null) {
//
//         let commentList = _getComments(unsafeWindow.document);
//         commentList.forEach((c) => {
//             if (c.dom.hasOwnProperty("bannedData")) {
//                 //if banlist has no such username, free it.
//                 if (banlist.indexOf(c.username) < 0) {
//                     let attachedCommentData = c.dom["bannedData"];
//                     c.dom.append(...attachedCommentData.container.childNodes);
//                     c.dom.querySelector(".banned-text").remove();
//                     attachedCommentData.container.remove();
//                     attachedCommentData.hidden = false;
//                 }
//             }
//         })
//     }
// }


//Attach ban user comment button link, input comment data
function attachBanCommentButtonNew(c, onclick) {
    let b = unsafeWindow.document.createElement("span")
    b.innerText = "屏蔽";
    b.classList.add("area-comment-block");
    b.addEventListener("click", () => {
        onclick(c);
    });
    c.banButtonAnchor.insertAdjacentElement("afterend", b);
}

function attachBanCommentButtonOld(c, onclick) {
    let b = unsafeWindow.document.createElement("a")
    b.innerText = "屏蔽";
    b.addEventListener("click", () => {
        onclick(c);
    });
    c.banButtonAnchor.insertAdjacentElement("afterend", b);
}

//User Interface part

function createbanButton() {

    let doc = unsafeWindow.document;
    let buttonDiv = doc.createElement("div");
    buttonDiv.classList.add("filter-button");
    doc.body.appendChild(buttonDiv);
    buttonDiv.style.visibility = "hidden";

    buttonDiv.addEventListener("click", (e) => {
        let c = unsafeWindow["banButton"].activeData;
        let u = c.username;
        data.banUser(u, (list) => {
            js_event.emit("UP_BAN_UPDATE", null);
        })
    })


    unsafeWindow["banButton"] = {
        dom: buttonDiv,
        activeDom: null,
        activeData: null,
    }

    let hideBanButton = () => {

        unsafeWindow["banButton"].dom.style.visibility = "hidden";
        unsafeWindow["banButton"].activeDom = null;
        unsafeWindow["banButton"].activeData = null;
        unsafeWindow["banButton"].active = false;
    }

    doc.addEventListener("pointermove", (e) => {
        if (unsafeWindow["banButton"].activeDom !== null && unsafeWindow["banButton"].active) {
            let rect = unsafeWindow["banButton"].activeDom.getBoundingClientRect();

            if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
                hideBanButton();
            }
        }
    })

    doc.addEventListener("scroll", (e) => {
        hideBanButton();
    })


}

function injectStyle() {
    let doc = unsafeWindow.document;
    let str = "<style>" + style/* default.0.1 */.Z[0][1] + "</style>";
    doc.head.insertAdjacentHTML("beforeend", str);
}


function loadHomeUI() {


    createbanButton();
    setting_ui.showSettingUI();

}

function loadArticleUI() {
    contentPageUI.loadUI();
    setting_ui.showSettingUI();
}

function ui_bindEvents() {
    js_event.on("FILTER_COMMENTS", (comments) => {
        refreshUserComments(comments);
    })

    js_event.on("FILTER_PAGE_CONTENTS", (contents) => {
        refreshPageItems(contents);
    })

    js_event.on("SHOW_COMMENT_TAGS", (contents) => {
        showCommentTags(contents);
    })

    js_event.on("SETTING_CHANGE_showMouseover", (val) => {
        log_log("mouseovershow", val);
        __webpack_require__.g["showMouseover"] = val;
//force refresh
        js_event.emit("UP_BAN_UPDATE", null);
    })
}

function ui_init() {
    data.loadGeneralSetting(setting => {
        __webpack_require__.g["showMouseover"] = setting.showMouseover;
    });
}


/* harmony default export */ const ui = ({

    // hideUserComment(username) {
    //     _banReplyUser(username)
    // },


    // hideContent(c) {
    //     _hideContent(c);
    // },

    loadUI(pageType) {
        ui_init();
        ui_bindEvents();
        injectStyle();

        if (pageType === "HOME" || pageType === "VIDEO_HOME" || pageType === "ARTICLE_HOME") {
            loadHomeUI();
        } else if (pageType === "VIDEO" || pageType === "ARTICLE") {
            loadArticleUI();
        }


    },

    //Attach events for the dom element to show [Block Button]
    attachBanButton(dom) {

        let banButton = unsafeWindow["banButton"];
        dom.addEventListener("pointermove", (e) => {

            data.loadGeneralSetting((setting) => {
                if (setting.showBanButton) {
                    if (banButton.activeDom !== dom && !banButton.active) {
                        if (dom["contentData"]["hidden"]) return;
                        //log(dom["contentData"]);
                        banButton.activeDom = dom;
                        let rect = dom.getBoundingClientRect();

                        banButton.dom.style.left = rect.right - 20 + "px";
                        banButton.dom.style.top = rect.top + "px";
                        banButton.dom.style.visibility = "visible";
                        banButton.activeData = dom["contentData"];
                        banButton.active = true;
                    }
                }
            })


        })

    },


    attachBanCommentButton(c) {
        let type = util.getCommentType();
        if (type === "NEW") {
            attachBanCommentButtonNew(c, () => {

                _banReplyUser(c.username);
            })
        } else {
            attachBanCommentButtonOld(c, () => {

                _banReplyUser(c.username);
            })
        }
    }


});
;// CONCATENATED MODULE: ./dev/js/homeTask.js





//获得页面所有视频信息
//格式： {title, domElement, username}


//猴子推荐
function getMonkeyVideo(doc) {
    let list = doc.querySelectorAll(".monkey-video");
    let result = [];

    list.forEach((i) => {
        let title = i.getAttribute("data-title");
        let t = i.querySelector(".monkey-up-name");
        let username = t.innerText.substring(3).trim();
        result.push({
            title: title,
            username: username,
            dom: i,
            type: "VIDEO"
        })
    })
    return result;
}

//首页推荐
function getRecommendedVideo(doc) {
    let list = doc.querySelectorAll(".recommend-video");
    let result = [];

    list.forEach((i) => {
        let title = i.querySelector(".video-title").innerText;
        let t = i.querySelector(".normal-mask-title");
        let t2 = t.nextElementSibling;


        let username = t2.innerText.substring(3).trim();
        result.push({
            title: title,
            username: username,
            dom: i,
            type: "VIDEO"
        })
    })
    return result;
}

function getBananaVideo(doc) {
    //live-video
    let list = doc.querySelectorAll(".banana-video");
    let result = [];

    list.forEach((i) => {
        let t = i.querySelector(".banana-video-title");
        let title = t.innerText
        let t2 = i.querySelector(".banana-up-name");
        let username = t2.getAttribute("title");
        result.push({
            title: title,
            username: username,
            dom: i,
            type: "VIDEO"
        })
    })
    return result;

}

//直播
function getLiveVideo(doc) {
    //live-video
    let list = doc.querySelectorAll(".live-video");
    let result = [];

    list.forEach((i) => {
        let title = i.getAttribute("data-title");
        let t = i.querySelector(".live-video-up-name");
        let username = t.innerText.substring(3).trim();
        result.push({
            title: title,
            username: username,
            dom: i,
            type: "VIDEO"
        })
    })
    return result;
}

//普通视频
function getNormalVideo(doc) {
    //live-video
    let list = doc.querySelectorAll(".normal-video");
    let result = [];

    list.forEach((i) => {
        let t = i.querySelector(".normal-video-title");
        let title = t.innerText;

        let str = t.getAttribute("title")
        let regex = /UP:(.+)/
        let username = regex.exec(str)[1].trim();

        result.push({
            title: title,
            username: username,
            dom: i,
            type: "VIDEO"
        })
    })
    return result;
}

//排行榜列表
function getRankedVideo(doc) {
    let list = doc.querySelectorAll(".list-content-videos .log-item");
    let result = [];

    list.forEach((i) => {
        let t = i.querySelector(".video-title");
        let title = t.innerText;

        let str = t.getAttribute("title")
        let regex = /UP:(.+)/
        let username = regex.exec(str)[1].trim();

        result.push({
            title: title,
            username: username,
            dom: i,
            type: "VIDEO"
        })
    })
    return result;
}

//VIDEO-HOME 其他视频主页内容

//SLIDER
function getSliderVideos(doc) {
    let list = doc.querySelectorAll(".slider-small-item");
    let result = [];

    list.forEach((i) => {
        let t = i.querySelector(".slider-title").firstChild;
        let title = t.innerText;

        let t2 = t.nextElementSibling.firstChild;
        let username = t2.innerText.substring(3).trim();
        result.push({
            title: title,
            username: username,
            dom: i,
            type: "VIDEO"
        })
    })
    return result;
}

//video
function getVideoHomeItem(doc) {
    let list = doc.querySelectorAll("figure.video-item");
    let result = [];

    list.forEach((i) => {
        let t = i.querySelector("a[title]");

        let title = t.innerText;
        let str = t.getAttribute("title");
        let regex = /UP:(.+)/
        let username = regex.exec(str)[1].trim();

        result.push({
            title: title,
            username: username,
            dom: i,
            type: "VIDEO"
        })
    })
    return result;
}
function getVideoHomeItem2(doc) {
    let list = doc.querySelectorAll(".list-content-item");
    let result = [];

    list.forEach((i) => {
        let t = i.querySelector(".list-content-title");
        let title = t.innerText;
        let str = t.getAttribute("title");
        let t2 = i.querySelector(".list-content-uplink")
        let username = t2.innerText.substring(3).trim();

        result.push({
            title: title,
            username: username,
            dom: i,
            type: "VIDEO"
        })
    })
    return result;
}


function getVideoHomeRankItem(doc) {
    let list = doc.querySelectorAll(".rank-list li");
    let result = [];

    list.forEach((i) => {
        let t = i.querySelector("b.title a");
        let title = t.innerText;

        let str = t.getAttribute("title");
        let regex = /UP:(.+)/
        let username = regex.exec(str)[1].trim();

        result.push({
            title: title,
            username: username,
            dom: i,
            type: "VIDEO"
        })
    })
    return result;
}


//主页文章区
function getHomeArticle(doc) {
    let tab = doc.querySelector(".article-tab")
    if (tab == null) return [];
    let list = tab.querySelectorAll("li[data-atomid]")

    let result = [];

    list.forEach((i) => {

        var username, title;
        var t;
        let block = i.querySelector(".main-content-block")
        if (block != null) {
            t = block.querySelector("p.block-title");
        } else {
            t = i.querySelector("a.main-content-item");
        }
        title = t.innerText;
        let str = t.getAttribute("title");
        let regex = /UP:(.+)/
        username = regex.exec(str)[1].trim();

        result.push({
            title: title,
            username: username,
            dom: i,
            type: "ARTICLE"
        })
    })

    return result;
}

//Article Home 文章区列表
function getArticles(doc) {
    let list = doc.querySelectorAll(".article-item")

    let result = [];

    list.forEach((i) => {

        let t = i.querySelector("a[title]");

        let title = t.innerText;
        let t2 = i.querySelector("span.up a");

        let username = t2.innerText.substring(3).trim();

        result.push({
            title: title,
            username: username,
            dom: i,
            type: "ARTICLE"
        })
    })

    return result;
}


function homeTask(pageType) {
    //加载屏蔽UP列表


    function loadBanList(callback) {
        data.loadBanList(callback)
    }

    function loadKeywordList(callback) {
        data.loadKeywords(callback);
    }

    //获得全部投稿信息
    function getAllVideoContentInfo(pageType, doc) {
        let homeList = [
            getMonkeyVideo,
            getLiveVideo,
            getRankedVideo,
            getRecommendedVideo,
            getNormalVideo,
            getHomeArticle,
            getBananaVideo
        ];

        let videoHomeList = [
            getVideoHomeItem,
            getVideoHomeItem2,
            getVideoHomeRankItem,
            getSliderVideos
        ]

        let articleHomeList = [
            getArticles
        ]

        let tasks = [];
        if (pageType === "HOME") {
            tasks = homeList;
        } else if (pageType === "VIDEO_HOME") {
            tasks = videoHomeList;
        } else if (pageType === "ARTICLE_HOME") {
            tasks = articleHomeList;
        }

        let contentList = [];
        tasks.forEach((f) => {
            //let doc = unsafeWindow.document;
            let items = f(doc);
            contentList = contentList.concat(items);
        })
        return contentList;
    }

    function refreshPageContent(target) {
        if (typeof target === "undefined" || target == null) {
            target = unsafeWindow.document;
        }
        let contents = getAllVideoContentInfo(pageType, target);
        attachInfo(contents);
        js_event.emit("FILTER_PAGE_CONTENTS", contents);
    }

    //开启observer
    function lauchObserver() {
        let mutationObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                let target = mutation.target;

                if (target.tagName === "DIV") {

                    setTimeout(() => {
                        refreshPageContent(target);
                    }, 500);

                }
            });
        });

        mutationObserver.observe(unsafeWindow.document, {subtree: true, childList: true});
    }

    //Attach info
    function attachInfo(contents) {
        contents.forEach((c) => {
            //if first time visit this node
            if (!("contentData" in c.dom)) {
                //attach Data
                c.dom["contentData"] = c;
                //attach events
                ui.attachBanButton(c.dom);
                //
            }
        })
    }

    function bindEvents() {
        js_event.on("UP_BAN_UPDATE", () => {
            refreshPageContent()
        })
        js_event.on("KEYWORD_BAN_UPDATE", () => {
            refreshPageContent();
        })
    }

    lauchObserver();
    bindEvents();


    setTimeout(refreshPageContent, 2000);
}
;// CONCATENATED MODULE: ./dev/html/taggingUI.html
// Module
var taggingUI_code = "<div class=\"tagging-ui-container smooth-remove\"> <div class=\"tagging-close-button very-smooth\">×</div> <div class=\"tagging-ui-inner\"> <div class=\"name-to-tag\">XXX的标签</div> <div class=\"tagging-input-wrap\"> <input placeholder=\"...多个标签用空格分开,最多10字\" maxlength=\"10\" class=\"tagging-input\"> <button class=\"tagging-submit very-smooth\">添加</button> </div> <div class=\"tags-container\"> </div> </div> </div>";
// Exports
/* harmony default export */ const taggingUI = (taggingUI_code);
;// CONCATENATED MODULE: ./dev/js/tagging.js






function _newTagDom(text) {

    let doc = unsafeWindow.document;
    let tagDom = doc.createElement("div")
    tagDom.classList.add("user-tag");
    let tagText = doc.createElement("div")
    tagText.classList.add("user-tag-text");
    tagText.innerText = text;
    tagDom.appendChild(tagText);

    return tagDom;
}

function _newTagButton() {
    let doc = unsafeWindow.document;
    let b = doc.createElement("div");
    b.innerText = "＋标签"
    b.classList.add("add-new-tag");
    b.classList.add("very-smooth");
    return b;

}


function _lookUpButton(){
    //add lookup button btw with tagging
    let doc = unsafeWindow.document;
    let b = doc.createElement("div");
    b.innerHTML= "<i class='icon-ks icon-dao-hang-search'></i>"
    b.classList.add("lookup-btn");
    b.classList.add("very-smooth");
    return b;
}

function _addTagToContainer(container, tag) {
    let t = _newTagDom(tag);
    container.appendChild(t);
}

function _removeTagFromContainer(container, tag) {

}

function _showTagsInWindow(username) {

    let doc = unsafeWindow.document;
    let tagsContainerDom = __webpack_require__.g["taggingUI"].querySelector(".tags-container");
    tagsContainerDom.innerHTML = "";

    data.getTags(username, (tags) => {
        tags.forEach((t) => {

            let tdom = doc.createElement("span")
            tdom.classList.add("tag-item")
            tdom.innerText = t;
            tdom.onclick = () => {
                _deleteTag(username, t, () => {
                    js_event.emit("TAGS_UPDATE", username)
                    _showTagsInWindow(username);
                })
            }
            tagsContainerDom.append(tdom);


        })
    })
}

function popAddingTagWindow(username) {
    let containerDom = __webpack_require__.g["taggingUI"];
    containerDom.classList.remove("smooth-remove");
    containerDom.querySelector(".name-to-tag").innerText = "[" + username + "]的标签";


    let tagsContainer = __webpack_require__.g["taggingUI"].querySelector(".tags-container");
    while (tagsContainer.firstChild) {
        tagsContainer.firstChild.remove();
    }


    _showTagsInWindow(username);

    containerDom.querySelector(".tagging-submit").onclick = () => {
        let input = containerDom.querySelector(".tagging-input");
        let tagtext = input.value.trim();
        input.value = "";
        if (tagtext.length > 0) {
            _addTag(username, tagtext, () => {
                js_event.emit("TAGS_UPDATE", username);
                _showTagsInWindow(username);
            })
        }
    }

}




function _attachUserTagsDom(username, anchor) {
    let doc = unsafeWindow.document;
    let container = doc.createElement("div");
    container.classList.add("user-tags")

    let newBtn = _newTagButton();

    let lookBtn = _lookUpButton();

    data.getTags(username, (tags) => {
        // log("tags=", tags)
        tags.forEach((t) => {
            let tagDom = _newTagDom(t);
            //TODO add event for tag


            container.appendChild(tagDom)
        })

        anchor.insertAdjacentElement("afterend", container);
        newBtn.addEventListener("click", () => {
            popAddingTagWindow(username);
        })
        container.insertAdjacentElement("beforebegin", lookBtn);
        container.appendChild(newBtn);
        lookBtn.addEventListener("click", ()=>{
            js_event.emit("LOOKUP", username);
        })

    })
}

function _refreshUserTags(username, anchor) {
    //log("_refreshUserTags")
    let container = anchor.parentElement.querySelector(".user-tags");
    container.querySelectorAll(".user-tag").forEach((d) => {
        d.remove();
    })
    let addBtn = container.querySelector(".add-new-tag");
    data.getTags(username, (tags) => {
        //log(username, "tags=", tags);
        tags.forEach((t) => {
            let tagDom = _newTagDom(t);
            container.insertBefore(tagDom, addBtn);
        })
    })

    data.loadGeneralSetting((setting)=>{
        if (!setting.showUserTags){
            container.classList.add("remove");
        }else{
            container.classList.remove("remove")
        }
    })

}


function _showCommentUsrTag(commentData) {
    //log("_showCommentUsrTag")
    //tagging for comment
    commentData.forEach((d) => {
        let anchor = d.nameAnchor;
        if (typeof anchor["tagShown"] === "undefined") {
            //First time go through this comment tab, we 1. add button to add tag, 2. add all existing tags 3. bind event for this comment tab

            //marking done
            anchor["tagShown"] = true;
            _attachUserTagsDom(d.username, anchor);


        } else {
            _refreshUserTags(d.username, anchor)
        }
    })

}

function _showAuthorTag() {

    let doc = unsafeWindow.document;
    let anchor = doc.querySelector("a.up-name");
    if (!anchor) anchor = doc.querySelector("a.upname");
    if (!anchor) log_log("UP name not found!");
    let username = anchor.innerText;
    anchor = anchor.nextSibling;

    if (__webpack_require__.g["authorTagAdded"]) {
        _refreshUserTags(username, anchor.parentElement);
    } else {
        _attachUserTagsDom(username, anchor.parentElement);
    }

    __webpack_require__.g["authorTagAdded"] = true;

}

__webpack_require__.g["currentCommentData"] = [];

function _refreshTags(commentData) {
    __webpack_require__.g["currentCommentData"] = commentData;
    _showCommentUsrTag(commentData);
    _showAuthorTag();
}

function enableTags(val){
    let doc = unsafeWindow.document;
    if (!val){
        doc.querySelectorAll(".user-tags")
            .forEach((dom)=>{
                dom.classList.add("remove")
            })
    }else{
        doc.querySelectorAll(".user-tags")
            .forEach((dom)=>{
                dom.classList.remove("remove")
            })
    }
}

function tagging_bindEvents() {
    js_event.on("SHOW_COMMENT_TAGS", _showCommentUsrTag)

    js_event.on("REFRESH_TAGS", _refreshTags)

    js_event.on("SETTING_CHANGE_showUserTags", enableTags)
}

function _closeUI() {
    __webpack_require__.g["taggingUI"].classList.add("smooth-remove")
}

function loadUIHTML() {
    unsafeWindow.document.body.insertAdjacentHTML("beforeend", taggingUI);
    let ui = unsafeWindow.document.body.lastChild//unsafeWindow.document.body.querySelector(".tagging-ui-container");
    __webpack_require__.g["taggingUI"] = ui;
    let closeBtn = ui.querySelector(".tagging-close-button");
    closeBtn.addEventListener("click", _closeUI)
}

function _addTag(username, tag, callback) {
    data.addTagToUser(username, tag, () => {
        //Event.emit("ADD_TAG", [username, tag]);

        if (callback) callback();
    })
}

function _deleteTag(username, tag, callback) {
    data.removeTagForUser(username, tag, () => {
        js_event.emit("REMOVE_TAG", [username, tag])
        if (callback) callback();
    })
}

function _init(){

}

/* harmony default export */ const tagging = ({
    addTags(username, tags, callback) {
        data.addTagToUser(username, tags, () => {
            js_event.emit("ADD_TAGS", [username, tags]);
            if (callback) callback();
        })
    },

    addTag(username, tag, callback) {
        _addTag(username, tag, callback)
    },
    delteTag(username, tag, callback) {
        _deleteTag(username, tag, callback)
    },
    getTags(username, callback) {
        data.getTags(username, callback);

    },
    getAllTags(callback) {
        data.getAlltags(callback);
    },
    init() {
        loadUIHTML();
        tagging_bindEvents();
        _showAuthorTag();
        __webpack_require__.g["taggedComments"] = {};
    }
});
;// CONCATENATED MODULE: ./dev/js/contentTask.js







//
// //load All banned username
// function loadBannedReplier(callback) {
//     data.loadReplyBanList((list) => {
//         callback(list);
//     })
// }

//旧版页面评论
function _getCommentsOldVer(doc) {
    let result = [];
    let items = doc.querySelectorAll(".fc-comment-item")
    items.forEach((i) => {
        let nameAnchor = i.querySelector("a.name");
        let username = nameAnchor.innerText;
        let banButtonAnchor = i.querySelector("a.btn-quote");
        if (banButtonAnchor===null){
            console.log()
            return;
        }
        let count = banButtonAnchor.parentNode.children.length;
        banButtonAnchor = banButtonAnchor.parentNode.children[count - 1];

        if (banButtonAnchor !== null) {
            result.push({
                username: username,
                nameAnchor: nameAnchor.parentNode,
                banButtonAnchor: banButtonAnchor,
                dom: i
            })
        }
    })

    return result;
}

//新版页面评论
function _getCommentsNewVer(doc) {
    let result = [];

    let items = doc.querySelectorAll(".area-comment-first");
    items.forEach((i) => {
        let nameAnchor = i.querySelector("a.name");
        let username = nameAnchor.innerText;
        let banButtonAnchor = i.querySelector("a.area-comment-reply");
        if (banButtonAnchor !== null) {
            result.push({
                username: username,
                nameAnchor: nameAnchor,
                banButtonAnchor: banButtonAnchor,
                dom: i,
            });
        }
    })

    return result;
}

function _getComments(doc) {
    let comments = util.getCommentType() === "NEW"
        ? _getCommentsNewVer(doc)
        : _getCommentsOldVer(doc);
    return comments;
}


function contentTask() {

    function bindEvents() {

        js_event.on("TAGS_UPDATE", (username) => {
            let cs = getCommentsData(unsafeWindow.document);
            cs = cs.filter(x => x.username === username)
            js_event.emit("REFRESH_TAGS", cs);


        })

        js_event.on("REPLY_BAN_UPDATE", () => {
            runCommentTask()
        })

    }

    //load all visible comments
    function getCommentsData(target) {
        return _getComments(target);
    }

    //Attach data and UI
    function attachDataUI(cs) {
        cs.forEach((c) => {
            if (!c.dom.hasOwnProperty("commentData")) {
                ui.attachBanCommentButton(c);
                c.dom["commentData"] = c;
            }
        })
    }

    //Run Filter
    function runCommentTask() {
        let comments = getCommentsData(unsafeWindow.document);
        js_event.emit("FILTER_COMMENTS", comments);
    }


    //observer
    function lauchObserver() {
        let mutationObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {

                if (mutation.type === "childList") {
                    let targets = mutation.addedNodes;
                    //log("targets", targets)
                    targets.forEach((target) => {

                        if (target.tagName === "DIV" && (
                            target.classList.contains("fc-comment-list") ||
                            target.classList.contains("ac-comment-hot-list") ||
                            target.classList.contains("ac-comment-root-list") ||

                            target.hasChildNodes() && typeof target.firstChild.classList !== "undefined" && (
                                target.firstChild.classList.contains("area-comment-top") ||
                                target.firstChild.classList.contains("area-comment-sec")))

                        ) {
                            //console.log("targets", targets)
                            let cs = getCommentsData(target);
                            //log(cs.length, mutation);
                            js_event.emit("SHOW_COMMENT_TAGS", cs);


                            attachDataUI(cs);
                            js_event.emit("FILTER_COMMENTS", cs);
                            setTimeout(() => {
                                //runCommentTask();

                            }, 0);
                        }
                    })

                }
            });
        });

        mutationObserver.observe(unsafeWindow.document, {subtree: true, childList: true});
    }

    bindEvents();
    lauchObserver();
    tagging.init();
    commentRecovery.init();

}
;// CONCATENATED MODULE: ./dev/js/task.js




function taskHOME(pagetype){
    homeTask(pagetype);
}


function taskCONTENT(){
    contentTask()
}

function executeTask(pageType){
    if (pageType==="HOME" || pageType==="VIDEO_HOME" || pageType==="ARTICLE_HOME"){
        taskHOME(pageType);
    }else if (pageType === "VIDEO" || pageType === "ARTICLE"){
        taskCONTENT();
    }
}
;// CONCATENATED MODULE: ./dev/js/synchroize.js
//Code to sync all data from all devices
//using imsdk of AcFun







const imsdkDataProvider = 16731600;

let lastUpdateTime = 0;

//获得最新的云备份
function oldCloudGet(callback) {
    //console.log("callback is",callback);

    let im = unsafeWindow.ImSdk;
    let instance = im.instance;
    let id = "0_" + imsdkDataProvider;
    //console.log(id, instance.chatMap);
    let sessPromise = instance.kernel.openSession(0, imsdkDataProvider);
    sessPromise.then((d) => {
        //console.log(d);
        //console.log(sessPromise);
        let msgs = d.cachedSession.messages;
        //console.log("msgs", msgs);
        //log(msgs);
        if (typeof msgs === "undefined" || msgs.length === 0) {
            callback(null);
            return
        }
        let lastmsg = msgs[msgs.length - 1].title;
        //log(lastmsg);

        try {
            let info = lastmsg.split(" ");

            //log(info)
            let chunkinfo = info[0].split("/");
            let chunksize = chunkinfo[1];
            let texts = [];
            //log(chunkinfo)
            if (chunksize) {
                chunksize = parseInt(chunksize);
                for (let i = 0; i < chunksize; i++) {
                    let m = msgs[msgs.length - i - 1].title;
                    let minfo = m.split(" ");
                    let mchunkinfo = minfo[0].split("/");
                    let chunk_i = parseInt(mchunkinfo[0]) - 1;
                    texts[chunk_i] = minfo.slice(1).join(" ");

                }
            }
            let text = texts.join("");
            //log("msgtext", text);
            callback(text);

        } catch (e) {
            console.error(e);
            callback(null)
        }
    })


}


function checkImSDKInit(args) {
    //log("checkImSDKInit")


    if (!"trySyncCount" in unsafeWindow) {
        unsafeWindow["trySyncCount"] = 0;
    }

    unsafeWindow["trySyncCount"]++;
    if (unsafeWindow["trySyncCount"] > 30) return;
    let im = unsafeWindow.ImSdk;

    let needWait = false;
    try {

        let checklist =
            typeof im === "undefined"
            || typeof im.instance === "undefined"
            || im.instance == null
            || !im.instance.connected
            || typeof im.instance.kernel.cache === "undefined";
        //console.log(typeof im === "undefined");

        //console.log(typeof im.instance === "undefined")
        //console.log(im.instance == null)
        //console.log(!im.instance.connected)
        //console.log(typeof im.instance.kernel.cache === "undefined")
        needWait = checklist;
    } catch (e) {
        needWait = true;
    }

    //console.log("need wait", needWait)

    if (needWait) {
        log_log("载入信息。。");
        setTimeout(() => {
            checkImSDKInit(args);
        }, 1000);
    } else {
        setTimeout(() => {
            ImSdkDataCheck(args)
        }, 0);
    }
}


function updateListByOldCloudData(d) {

    function trimWord(d) {
        return d.replace(/(\r\n|\n|\r)/gm, "").trim();
    }

    let keywordsstr = decode(d.keywords);
    let upsstr = decode(d.ups);
    let replierstr = typeof d.repliers == "undefined" ? "" : decode(d.repliers);
    let spliter = upsstr.indexOf(" ") > 0 || keywordsstr.indexOf(" ") > 0 ? " " : ",";
    let keywords = keywordsstr.split(spliter).map(trimWord);
    let ups = upsstr.split(spliter).map(trimWord);
    let repliers = replierstr.split(spliter).map(trimWord);
    //console.log("spliter", ups, keywords, spliter)
    keywords = keywords.length === 1 && keywords[0] === "" ? [] : keywords;
    ups = ups.length === 1 && ups[0] === "" ? [] : ups;
    repliers = repliers.length === 1 && repliers[0] === "" ? [] : repliers;

    //console.log(ups, keywords);
    data.updateBanList(ups, () => {
        //console.log("Uplist updated!", ups);
        js_event.emit("UP_BAN_UPDATE", null);
    });
    data.updateKeywords(keywords, () => {
        //console.log("Keywordlist Updated", keywords);
        js_event.emit("KEYWORD_BAN_UPDATE", null);
    });
    data.updateReplyBanList(repliers, () => {
        //console.log("Replierlist updated", repliers);
        js_event.emit("REPLY_BAN_UPDATE", null);
    });
    data.setUpdateTime(d.time, () => {
        //console.log("Time Updated", (d.time))
    });

}

let defaultUpdateInterval = (/* unused pure expression or super */ null && (30 * 1000));

function ImSdkDataCheck(args) {
    //unsafeWindow.document.querySelector('#cloudsync').addClass("disabled").text("正在同步...");


    data.getUpdateTime((localTime) => {
        lastUpdateTime = localTime;
        oldCloudGet((text) => {
            if (text === null) {
                //nothing found, //Inform and use new server
                //console.log("Update by null");

            } else {
                log_log(text);
                try {
                    let d = JSON.parse(text);
                    //检查版本兼容
                    if (typeof d.version === "undefined" || parseFloat(d.version) < parseFloat(data.version)) {
                        log_log("旧版同步信息发现，重新同步");
                        updateListByOldCloudData(d);

                    } else if (parseFloat(d.version) > parseFloat(data.version)) {
                        log_log("同步失败：你已经在其他地方使用过更新的版本了。请更新当前屏蔽插件，最新版本：" + d.version)
                    } else {
                        //log("data time", d.time, decode(d.time), "local", localTime);
                        d.time = parseInt(decode(d.time));
                        let cloudtime = d.time;
                        if (cloudtime > localTime || data.version !== d.version) {
                            //如果云时间更新，则使用云上的
                            log_log("Update list");
                            updateListByOldCloudData(d);

                        } else if (localTime > (cloudtime)) {
                            //本地更新，尝试更新
                            log_log("ImSdk is no longer available. Will try new cloud.");

                        } else {
                            log_log("Check done, no update needed", (localTime - cloudtime) / 1000, d);

                        }

                    }
                } catch (ex) {

                }
            }
            data.setUsingNewCloud(() => {
                log_log("切换到新服务器。")
            });//not yet for debug
            setTimeout(checkNewCloud, 5000);//then check new cloud for good
        })
    })
}

//
// const host = serverAddress;
// const baseUrl = host + "/";


function synchroize_bindEvents() {
    js_event.on("SYNC_TIME_UPDATE", (t) => {
        if (t && typeof t === "number" && t > 0) {
            data.setUpdateTime(t, () => {
                log_log("更新同步时间", t);
            });
        }
    })


    js_event.on("TAGS_UPDATE", () => {
        let t = Math.floor((+new Date()) / 1000);
        data.setUpdateTime(t, null);
    })
    js_event.on("UP_BAN_UPDATE", () => {
        let t = Math.floor((+new Date()) / 1000);
        data.setUpdateTime(t, null);
    })
    js_event.on("REPLY_BAN_UPDATE", () => {
        let t = Math.floor((+new Date()) / 1000);
        data.setUpdateTime(t, null);
    })
    js_event.on("KEYWORD_BAN_UPDATE", () => {
        let t = Math.floor((+new Date()) / 1000);
        data.setUpdateTime(t, null);
    })

    js_event.on("SYNC_NOW", ()=>{
        let t = Math.floor((+new Date()) / 1000);
        data.setUpdateTime(t, null);
        _syncWithCloud();
    })


}


//querydata = {name, query, ...others}
function synchroize_apiRequest(queryData, callback) {

    util.apiRequest(queryData, callback);
}

//
// function _apiRequestWS(queryData, callback) {
//     let url = "ws://" + serverAddress + ":3000/";
//     let ws = new WebSocket(url);
//     ws.onopen = function () {
//         let str = JSON.stringify(queryData);
//         str = encode(str);
//         ws.send(str);
//     }
//
//     ws.onmessage = function (m) {
//         log("WS", m);
//
//     }
// }


function checkDataForName(uid, name, callback) {
    let d = {
        uid: uid,
        name: name,
        query: "checktime",
    }
    synchroize_apiRequest(d, callback);

}

function syncFromServer(name, uid) {
    log_log("syncFromServer")
    synchroize_apiRequest({
            uid: uid,
            name: name,
            query: "sync"
        },
        (d) => {
            //console.log(d);
            log_log("list from new Cloud", d)
            if (d.success) {
                data.updateBanList(d.uplist);
                data.updateReplyBanList(d.replylist);
                data.updateKeywords(d.keywords);
                js_event.emit("SYNC_TIME_UPDATE", d.lastsync);
                js_event.emit("UP_BAN_UPDATE", null);
                js_event.emit("REPLY_BAN_UPDATE", null);
                js_event.emit("KEYWORD_BAN_UPDATE", null);

            }
        })
}


let successNotice = (d) => {
    log_log("成功", d);
}

function checkNewCloud() {
    log_log("检查新服务器")
    data.getUsernameID((usernameId) => {
        let username = usernameId[0];
        let uid = usernameId[1];
        log_log("username=" + username);
        checkDataForName(uid, username, (d) => {

            data.getUpdateTime((localtime) => {
                if (d["synctime"] > 0 && localtime > d["synctime"] * 500) {
                    // log("旧同步时间", localtime)
                    localtime = localtime / 1000; //old cloud time is 1000 times bigger, since it uses millisecond, but new cloud uses second
                }
                //log(d, d["synctime"], localtime);
                if (d["synctime"] > localtime) {

                    syncFromServer(username, uid);
                } else if (d["synctime"] < localtime) {
                    uploadData((response) => {

                        console.log("response", response)
                        if (response.success) {
                            log_log("同步成功")
                            successNotice(response);
                            js_event.emit("SYNC_TIME_UPDATE", response.synctime);
                        }
                    });
                } else {
                    log_log("已经与服务器同步。")

                    js_event.emit("SYNC_TIME_UPDATE", null);
                }
            })

        })
    })
}

function uploadData(callback) {
    data.getUsernameID((usernameId) => {
        let username = usernameId[0];
        let uid = usernameId[1]

        data.loadBanList((uplist) => {
            data.loadReplyBanList((replylist) => {
                data.loadKeywords((keywords) => {
                    data.getAlltags((tags) => {
                        console.log("username update = ", username)
                        let d = {
                            uid: uid,
                            name: username,
                            uplist: uplist,
                            replylist: replylist,
                            keywords: keywords,
                            userTags: tags,
                            query: "update",
                        }
                        synchroize_apiRequest(d, callback);


                    })
                })
            })
        })
    })
}

function checkSync() {

    //Check if this is already using new cloud
    log_log("检查同步状态")
    data.isUsingNewCloud((using) => {
        log_log("是否已经使用新服务器", using)
        if (!using) {
            //not using new cloud
            //check if old local data exists
            log_log("并未使用新服务器")
            //如果没有使用新服务器，尝试同步旧云，如果旧云没有内容，直接设置为新云，如果旧云有内容，先同步旧信息到本地，然后同步本地到新云
            data.getUpdateTime((time) => {
                log_log("检查本地同步时间 time=", time)
                if (time === 0 || isNaN(time)) {
                    log_log("没有发现本地记录,首先检查旧服务")
                    //time is 0 as default, means we don't have old data
                    //possibility:
                    //1. new users
                    //2. new device
                    //check old cloud , if there is data while nothing in local browser, download it
                    checkImSDKInit();

                    //checkNewCloud(); //will do after imsdk check is done
                } else {

                    log_log("发现本地记录，未曾使用新服务器，尝试同步本地信息到新服务器")
                    //old data exists
                    //upload it once
                    uploadData((response) => {
                        if (response.success) {
                            log_log("同步成功")
                            data.setUpdateTime(response.lastsync, successNotice);
                            js_event.emit("SYNC_TIME_UPDATE", response.lastsync);
                            data.setUsingNewCloud(() => {
                            });//not yet for debug
                        }
                    });
                }
                //from now one use new one.


            })


        } else {
            //already using new data
            log_log("正常使用新服务器同步")
            checkNewCloud()
        }
    })


    //if no info , we use new cloud directly
    //upload directly
    //if old info exists and we have not used new
    //load old cloud info
    //update it to new cloud
    //if new cloud info is already used
    //check sync time
    //upload if local time is newer
}

function _syncWithCloud() {

    if (typeof unsafeWindow.user === "undefined") {

        setTimeout(_syncWithCloud, 1000);
        return;
    }

    if (
        unsafeWindow.user.name === "用户") {
        return;
    } //not logged in so we don't cloud sync

    data.loadGeneralSetting((setting) => {
        if (setting.autoSync) {
            checkSync();
        }
    })
}


/* harmony default export */ const synchroize = ({
    init: () => {
        synchroize_bindEvents();
    },
    SyncWithCloud: _syncWithCloud,

});




;// CONCATENATED MODULE: ./dev/js/banana.js



function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    unsafeWindow.document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}


let ajax = {};
ajax.x = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    let versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];

    let xhr;
    for (let i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {
        }
    }
    return xhr;
};

ajax.send = function (url, callback, method, data, headers, async) {
    if (typeof async == "undefined") {
        async = true;
    }
    let x = ajax.x();
    x.open(method, url, async);
    x.onreadystatechange = function () {
        if (x.readyState === 4) {
            callback(x.responseText)
        }
    };
    if (method === 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    if (typeof headers !== "undefined") {
        for (let h in headers) {
            x.setRequestHeader(h, headers[h]);
        }
    }

    x.send(data)
};

ajax.get = function (url, data, callback, headers, async) {
    let query = [];
    for (let key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, headers, async)
};

ajax.post = function (url, data, callback, headers, async) {
    let query = [];
    for (let key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'POST', query.join('&'), headers, async)
};

function _getUDID() {
    let str = unsafeWindow.document.cookie;
    let regex = /_did=(\w+);/
    let result = regex.exec(str);

    return result[1];
}

function _getArticleList(uid, type) {
    let url = `https://www.acfun.cn/u/${uid}?quickViewId=ac-space-video-list&reqID=1&ajaxpipe=1&type=${type}&order=newest&page=1&pageSize=20&t=${+new Date()}`;
    log(url);
    return new Promise((resolve) => {

        ajax.get(url, {}, (d) => {
                let reg = /\/\*<!--[\w\ -]+-->\*\//
                let k = d.split(reg)

                let j = k[0]
                let i = JSON.parse(j)
                let html = i.html;
                let temp = document.createElement("div")
                temp.innerHTML = html;
                let list = [];
                temp.querySelectorAll("a").forEach((dom) => {
                    log(dom);
                    list.push({
                        href: dom.getAttribute("href"),
                        title: type.toLowerCase() === "article" ? dom.innerText : dom.querySelector(".title").innerText,
                    })
                })
                resolve(list);
            },
            {}
        )
    })

}

async function _getRecentContent(uid) {
    let articleContents = await _getArticleList(uid, "article");
    let videoContents = await _getArticleList(uid, "video");
    return {
        articles: articleContents,
        videos: videoContents
    }
}

/* harmony default export */ const banana = ({
    getUDID: _getUDID,

    feedBanana(id, count, resourceType, callback) {
        let udid = _getUDID();
        if (typeof udid == "undefined") {
            log_log("未登陆，无法投蕉！")
            return;
        }

        let a = btoa(Math.random().toString(36).substr(2));
        setCookie("stochastic", a, 1);

        let data = {
            resourceId: parseInt(id),
            resourceType: resourceType,
            count: count
        }

        let url = "https://www.acfun.cn/rest/pc-direct/banana/throwBanana";
        ajax.post(url, data, (d) => {
                console.log(d)
                callback(d);
            },
            {
                udid: udid
            }
        )


    }
});
;// CONCATENATED MODULE: ./dev/index.js








header_default()();
let pageType = getPageType();
log_log(pageType)
//load UI
ui.loadUI(pageType);

executeTask(pageType);
synchroize.init();
synchroize.SyncWithCloud();

unsafeWindow.sendBanana = banana.feedBanana;
unsafeWindow.getArticleList= banana.getArticleList;
unsafeWindow.getUDID = banana.getUDID
})();

/******/ })()
;