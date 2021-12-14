// ==UserScript==
// @name         AcfunBlock开源代码
// @namespace    http://tampermonkey.net/
// @version      3.008
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
/*! For license information please see acfunhelper.js.LICENSE.txt */
(() => {
    var e = {
        565: (e, n, t) => {
            e = t.nmd(e);
            if (true && null !== e) e.exports = function e() {
                console.log("AcFun 网页端辅助启动中。。。");
            };
        },
        547: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => g
            });
            var r = t(81);
            var i = t.n(r);
            var o = t(645);
            var a = t.n(o);
            var l = t(667);
            var c = t.n(l);
            var A = new URL(t(972), t.b);
            var s = new URL(t(528), t.b);
            var d = new URL(t(653), t.b);
            var u = a()(i());
            var f = c()(A);
            var p = c()(s);
            var m = c()(d);
            u.push([ e.id, "/* Colors */\r\n.c-a {\r\n    background-color: #F7E6DE;\r\n}\r\n\r\n.c-b {\r\n    background-color: #D6C4C1;\r\n}\r\n\r\n.c-c {\r\n    background-color: #eee;\r\n}\r\n\r\n.c-d {\r\n    background-color: #D6C1CB;\r\n}\r\n\r\n.c-e {\r\n    background-color: #F7DEF7;\r\n}\r\n\r\n.ui-hidden {\r\n    /*display: none!important;*/\r\n    width: 0 !important;\r\n    border-width: 0!important;\r\n}\r\n\r\n.ui-hidden a {\r\n\r\n    color: rgba(0, 0, 0, 0) !important;\r\n}\r\n\r\n.ui-hidden div {\r\n\r\n    color: rgba(0, 0, 0, 0) !important;\r\n}\r\n\r\n.ui-hidden span {\r\n\r\n    background-color: transparent;\r\n}\r\n\r\n.helper-wrap {\r\n    user-select: none;\r\n    position: fixed;\r\n    z-index: 99;\r\n    height: 230px;\r\n    min-width: 60px;\r\n    top: 500px;\r\n    left: 0px;\r\n\r\n}\r\n\r\n.helper-wrap-inner {\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.helper-wrap-inner div {\r\n    float: left;\r\n    vertical-align: top;\r\n}\r\n\r\n.helper-main {\r\n    display: inline-block;\r\n    width: 280px;\r\n    height: 100%;\r\n    border: solid #666;\r\n    border-width: 1px 1px 1px 0;\r\n    position: relative;\r\n    border-radius: 0 10px 10px 0;\r\n    overflow: hidden;\r\n\r\n}\r\n\r\n.ac-girl {\r\n    display: inline-block;\r\n    width: 48px;\r\n    height: 80px;\r\n    background-image: url(" + f + ');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n}\r\n\r\n.ac-girl-hide {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.page-wrap {\r\n    height: 100%;\r\n    width: 280px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: inherit;\r\n    border-radius: 0 10px 10px 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.go-back {\r\n    cursor: pointer;\r\n    padding: 3px;\r\n}\r\n\r\n.inactive-page {\r\n    display: none;\r\n}\r\n\r\n.menu-wrap {\r\n    text-align: center;\r\n    width: 80px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.sync-time {\r\n    margin-top: 20px;\r\n}\r\n\r\n.plugin-hint {\r\n    z-index: 99;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n\r\n.plugin-menu-title {\r\n    overflow: hidden;\r\n}\r\n\r\n.plugin-author{\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\n.plugin-version {\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: 0;\r\n    pointer-events: none;\r\n}\r\n\r\n.menu-wrap a {\r\n    display: block;\r\n    margin: 3px 0 0px;\r\n    transition: 100ms;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-wrap a:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.plugin-add-ban-up {\r\n    margin: 10px;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.ban-title-input {\r\n    height: 20px;\r\n    background-color: transparent;\r\n    border-radius: 50px 0 0 50px;\r\n    font: 13px "宋体";\r\n    line-height: 13px;\r\n    text-align: center;\r\n    margin: 0 0 0 2px;\r\n    border: 1px solid #b6adad;\r\n    float: left;\r\n}\r\n\r\n.ban-title-input:focus {\r\n    background-color: rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.ban-item-submit {\r\n    border: 0px solid;\r\n    display: inline-block;\r\n    float: left;\r\n    padding: 1px;\r\n    background: darkred;\r\n    height: 22px;\r\n    color: white;\r\n    width: 40px;\r\n    border-radius: 0 50px 50px 0;\r\n}\r\n\r\n.ban-item-submit:hover {\r\n    background-color: #a84716;\r\n    transition: 50ms;\r\n}\r\n\r\n.ban-item-submit:active {\r\n    background-color: #cd9072;\r\n}\r\n\r\n.banned-items {\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    height: 147px;\r\n    line-height: 23px;\r\n    margin: 2px;\r\n\r\n}\r\n\r\n\r\n.banned-items::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n.banned-items::-webkit-scrollbar-track {\r\n    background-color: #eeeeee;\r\n}\r\n\r\n.banned-items::-webkit-scrollbar-thumb {\r\n    background-color: #666666;\r\n}\r\n\r\n.banned-item {\r\n    position: relative;\r\n    display: inline-block;\r\n    height: 16px;\r\n\r\n    margin: 3px 1px 5px 1px;\r\n}\r\n\r\nspan.banned-title {\r\n    height: 16px;\r\n    float: left;\r\n    vertical-align: middle;\r\n    background-color: #e0a040;\r\n    font: 12px "宋体";\r\n    border-radius: 5px;\r\n    padding: 1px 5px 1px 5px;\r\n    line-height: 16px;\r\n}\r\n\r\n.banned-item button {\r\n\r\n    border: 0px solid;\r\n    display: inline-block;\r\n    float: left;\r\n    padding: 1px 5px 1px 5px;\r\n    background: rgba(89, 0, 0, 0.7);\r\n    height: 18px;\r\n    width: 100%;\r\n    color: white;\r\n    border-radius: 5px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    transition: 80ms ease-in;\r\n\r\n}\r\n\r\n.banned-item button:active {\r\n\r\n    background: rgba(255, 76, 76, 0.7);\r\n}\r\n\r\n.banned-item button:hover {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.about-page-content {\r\n    width: 100%;\r\n    display: block;\r\n    word-wrap: break-word;\r\n    box-sizing: border-box;\r\n    padding: 20px;\r\n    overflow-y: auto;\r\n    height: 210px;\r\n    float: none!important;\r\n}\r\n\r\n\r\n/* 过滤UI */\r\n.filter-button {\r\n\r\n    width: 15px;\r\n    height: 15px;\r\n    background-color: rgba(255, 0, 0, 1);\r\n    padding: 1.5px;\r\n    left: 0;\r\n    top: 0;\r\n    transform: translate(0, 0);\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 98;\r\n    background-size: contain;\r\n    background-image: url(' + p + ");\r\n    border-radius: 11px;\r\n    border: 2px rgb(230, 230, 230) solid;\r\n    cursor: pointer;\r\n}\r\n\r\n.smooth {\r\n    transition: 500ms ease-in-out;\r\n    -moz-transition: 500ms ease-in-out;\r\n    -o-transition: 500ms ease-in-out;\r\n    -webkit-transition: 500ms ease-in-out;\r\n}\r\n\r\n.banned-article {\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    height: 0 !important;\r\n    overflow: hidden;\r\n    opacity: 0;\r\n}\r\n\r\n.banned-page-item {\r\n    margin: 0;\r\n    opacity: 0;\r\n    transition: 300ms;\r\n\r\n}\r\n\r\n.banned-page-item:hover {\r\n\r\n}\r\n\r\n.hover-show:hover{\r\n    opacity: 1;\r\n}\r\n\r\n.remove {\r\n    display: none !important;\r\n}\r\n\r\n.area-comment-block {\r\n    line-height: 14px;\r\n    background: url(" + m + ') no-repeat;\r\n    background-size: 13px 13px;\r\n    background-position: 0 1px;\r\n    padding-left: 17px;\r\n    padding-right: 15px;\r\n    color: #999;\r\n}\r\n\r\n.banned-text {\r\n    font-size: 14px !important;\r\n}\r\n\r\n.unban-replier-btn {\r\n    margin: 0 10px;\r\n}\r\n\r\n.hide-avatar {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n/*subUI */\r\n.sub-ui-wrap {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 38%;\r\n    height: 80px;\r\n    width: 30px;\r\n    z-index: 99;\r\n}\r\n\r\n.sub-ui-inner {\r\n    height: 80px;\r\n    width: 30px;\r\n    position: relative;\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n\r\n.sub-ui-banned {\r\n\r\n    background-color: rgba(253, 76, 93, 0.3);\r\n}\r\n\r\n.sub-ui-normal {\r\n\r\n    background-color: rgba(165, 253, 76, 0.3);\r\n}\r\n\r\n.sub-ui-text {\r\n    writing-mode: vertical-rl;\r\n    text-orientation: upright;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    height: 100%;\r\n    width: 100%;\r\n    user-select: none;\r\n}\r\n\r\n.sub-ui-button {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    user-select: none;\r\n}\r\n\r\n.sub-ui-button:hover {\r\n    transform: translateX(100%);\r\n}\r\n\r\n#banUp {\r\n    color: black;\r\n}\r\n\r\n#unbanUp {\r\n    color: black;\r\n}\r\n\r\n\r\n#banUp:after {\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    content: "屏蔽ＵＰ主";\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fc7630;\r\n    transform: translateX(-100%);\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n\r\n#unbanUp:after {\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    content: "取消屏蔽";\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #83ee1a;\r\n    transform: translateX(-100%);\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.on-top {\r\n    z-index: 1000;\r\n}\r\n\r\n.user-tags {\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    margin: 0 20px 0 20px;\r\n    max-width: 50%;\r\n}\r\n\r\n/* TAGGING */\r\n.user-tag {\r\n    margin-top: 2px;\r\n    margin-right: 3px;\r\n    padding: 1px 4px 1px 4px;\r\n    line-height: 15px;\r\n    font-size: 8px !important;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: rgba(0, 0, 0, 0.4);\r\n\r\n    user-select: none;\r\n    display: inline-block;\r\n\r\n    height: 15px;\r\n    min-width: 30px;\r\n\r\n    float: left;\r\n\r\n\r\n}\r\n.user-tag-text{\r\n\r\n    text-align: center;\r\n}\r\n\r\n.very-smooth {\r\n\r\n    transition: 200ms;\r\n    -moz-transition: 200ms;\r\n    -o-transition: 200ms;\r\n    -webkit-transition: 200ms;\r\n}\r\n\r\n\r\n.add-new-tag {\r\n\r\n    margin-top: 2px;\r\n    padding: 1px 4px 1px 4px;\r\n    line-height: 15px;\r\n    font-size: 8px !important;\r\n\r\n    border: 1px rgba(0, 0, 0, 0.25);\r\n    border-style: dashed;\r\n    user-select: none;\r\n\r\n    display: inline-block;\r\n    float: left;\r\n\r\n}\r\n\r\n.add-new-tag:hover {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.add-new-tag:active {\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.tagging-ui-container {\r\n    overflow: hidden;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    height: 200px;\r\n    width: 300px;\r\n    transform: translate(-50%, -50%);\r\n\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n\r\n    -webkit-box-shadow: 2px 2px 7px 1px #787878;\r\n    box-shadow: 2px 2px 7px 1px #787878;\r\n    border-radius: 10px;\r\n\r\n    background-color: rgb(240,240,240);\r\n}\r\n\r\n.tagging-ui-inner {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n}\r\n\r\n.name-to-tag{\r\n    padding: 3px;\r\n\r\n}\r\n\r\n.tags-container {\r\n    width: 280px;\r\n    height: 130px;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.tagging-input-wrap{\r\n    background-color: rgb(100,100,100);\r\n    height: 20px;\r\n    vertical-align: top;\r\n    border-bottom: 2px rgb(200,200,200);\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.tagging-input{\r\n    float: left;\r\n    box-sizing: border-box;\r\n    padding: 2px;\r\n    height: 20px;\r\n    width: 235px;\r\n    border: none;\r\n\r\n}\r\n\r\n.tagging-submit{\r\n    float: left;\r\n    height: 20px;\r\n    border: none;\r\n    width: 45px;\r\n    background-color: #ced9c5;\r\n}\r\n\r\n.tagging-submit:hover{\r\n    background-color: #a5f400;\r\n}\r\n\r\n.tagging-submit:active{\r\n    background-color: #d4f400;\r\n}\r\n\r\n.tagging-close-button{\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    background-color: #a84716;\r\n    color: white;\r\n    border-radius: 0 10px 0 10px;\r\n    width: 45px;\r\n    height: 25px;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    z-index: 10;\r\n    user-select: none;\r\n}\r\n\r\n.smooth-remove{\r\n    transition: 300ms ease-in-out;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n\r\n}\r\n\r\n\r\n.tagging-close-button:hover{\r\n    background-color: #ffc5c5;\r\n}\r\n\r\n.tagging-close-button:active{\r\n    background-color: #ffedd4;\r\n    padding-top: 2px;\r\n\r\n}\r\n\r\n.tag-item{\r\n    display: inline-block;\r\n    background-color: #e7e1e1;\r\n    margin: 1px;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    border: 1px dashed;\r\n    padding: 2px;\r\n    font-size: 8px;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    height: 19px;\r\n    min-width: 30px;\r\n    position: relative;\r\n    line-height: 15px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.tag-item:before{\r\n    opacity: 0;\r\n    content: "删除";\r\n    position: absolute;\r\n    width: 100%;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    left: 0;\r\n    height: 100%;\r\n    top: 0;\r\n    line-height: 19px;\r\n}\r\n\r\n.tag-item:hover:before{\r\n    opacity: 1;\r\n    color: white;\r\n    background-color: #a84716;\r\n}\r\n\r\n\r\n/* Comment Recovery UI */\r\n\r\n\r\n\r\n.deleted-comments-container{\r\n    position: absolute;\r\n    display: block;\r\n    width: 300px;\r\n\r\n    min-height: 300px;\r\n    overflow: hidden;\r\n}\r\n\r\n.deleted-comments-inner{\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.deleted-comments-title{\r\n    box-sizing: border-box;\r\n    display: block;\r\n    font-size: 16px;\r\n    background-color: #b6adad;\r\n    padding: 3px 10px 3px 10px;\r\n}\r\n\r\n.deleted-comment-list{\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.deleted-comment{\r\n    border: 1px solid #e5e5e5;\r\n    background-color: #ffe;\r\n    display: block;\r\n}\r\n\r\n.deleted-comment img{\r\n    width: 100%;\r\n}\r\n\r\n.comment-info{\r\n    display: block;\r\n    height: 20px;\r\n    padding: 3px;\r\n}\r\n\r\n.comment-floor{\r\n    font-weight: 700;\r\n    display: inline-block;\r\n    float: left;\r\n    line-height: 14px;\r\n    padding: 3px;\r\n    height: 20px;\r\n    width: 45px;\r\n    box-sizing: border-box;\r\n    margin-right: 3px;\r\n}\r\n\r\n.comment-query-state{\r\n    display: inline-block;\r\n    float: left;\r\n    line-height: 14px;\r\n    padding: 3px;\r\n    height: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.comment-content{\r\n    padding: 3px;\r\n}\r\n\r\n.hide-btn{\r\n    float: right;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    user-select: none;\r\n}\r\n\r\n.hide-btn:hover{\r\n    color: red;\r\n}\r\n\r\n\r\n/* setting ui  check box */\r\n/* Customize the label (the container) */\r\n.cc-container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 22px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 12px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    line-height: 12px;\r\n}\r\n\r\n/* Hide the browser\'s default checkbox */\r\n.cc-container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 12px;\r\n    width: 12px;\r\n    background-color: #848484;\r\n}\r\n\r\n/* On mouse-over, add a grey background color */\r\n.cc-container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n\r\n/* When the checkbox is checked, add a blue background */\r\n.cc-container input:checked ~ .checkmark {\r\n    background-color: #2196F3;\r\n}\r\n\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n    content: "";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n.cc-container input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n.cc-container .checkmark:after {\r\n    left: 4px;\r\n    top: 2px;\r\n    width: 3px;\r\n    height: 6px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}', "" ]);
            const g = u;
        },
        645: e => {
            "use strict";
            e.exports = function(e) {
                var n = [];
                n.toString = function n() {
                    return this.map((function(n) {
                        var t = "";
                        var r = "undefined" !== typeof n[5];
                        if (n[4]) t += "@supports (".concat(n[4], ") {");
                        if (n[2]) t += "@media ".concat(n[2], " {");
                        if (r) t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {");
                        t += e(n);
                        if (r) t += "}";
                        if (n[2]) t += "}";
                        if (n[4]) t += "}";
                        return t;
                    })).join("");
                };
                n.i = function e(t, r, i, o, a) {
                    if ("string" === typeof t) t = [ [ null, t, void 0 ] ];
                    var l = {};
                    if (i) for (var c = 0; c < this.length; c++) {
                        var A = this[c][0];
                        if (null != A) l[A] = true;
                    }
                    for (var s = 0; s < t.length; s++) {
                        var d = [].concat(t[s]);
                        if (i && l[d[0]]) continue;
                        if ("undefined" !== typeof a) if ("undefined" === typeof d[5]) d[5] = a; else {
                            d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}");
                            d[5] = a;
                        }
                        if (r) if (!d[2]) d[2] = r; else {
                            d[1] = "@media ".concat(d[2], " {").concat(d[1], "}");
                            d[2] = r;
                        }
                        if (o) if (!d[4]) d[4] = "".concat(o); else {
                            d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}");
                            d[4] = o;
                        }
                        n.push(d);
                    }
                };
                return n;
            };
        },
        667: e => {
            "use strict";
            e.exports = function(e, n) {
                if (!n) n = {};
                if (!e) return e;
                e = String(e.__esModule ? e.default : e);
                if (/^['"].*['"]$/.test(e)) e = e.slice(1, -1);
                if (n.hash) e += n.hash;
                if (/["'() \t\n]|(%20)/.test(e) || n.needQuotes) return '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"');
                return e;
            };
        },
        81: e => {
            "use strict";
            e.exports = function(e) {
                return e[1];
            };
        },
        653: e => {
            "use strict";
            e.exports = "data:image/png;base64,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";
        },
        528: e => {
            "use strict";
            e.exports = "data:image/png;base64,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";
        },
        972: e => {
            "use strict";
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAACACAYAAAB3GFWBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAC6WSURBVHja5F1pWBPn2r4zk5CFBAIBwo5BQUQQxQ2r1rrWpXTB3Wr1WGu1elz60arVU6u1tse2LlXrbqtVq1UURduKVSuIgBsIgspS9p2QsIQkZDLv9yMlGlm1ntra57ryI8lMkrnzrPfzvO9wpk+f/vG33377H/wBiY2NdWpoaCgDAAcHByooKIjgHyjctg64desWv7i42P3evXtdVSqVQ2lpqWtJSYlbZWWlE03TTHp6ejetVmvN4XBACAGHwznp6OiY6+zs/BtFUUYHB4fSHj163DIYDDRN06ynp2elj49PtaenJ+Pt7f3sg3n8+PGAzMxM/3Pnzr2UnJzc22Aw+On1egAARVFgWRYURQEAeDwehEIhGIZpPD20trYWKpXK/Nr58+dhNBrBsqz53L59+84NCgq64eXlVTpw4MCikJAQ9m8PplartU5KShJGRkZOjouLeyEpKan375rmweVyIZFI0LWjMxRu9vB0tkWAwhbOtlwIeARWNIE1Vw8u0YNwOOAQAsLhwAgrGAmFWoMVtAYOarQsWAJkFWsQczMfCakFSElJ2Xbjxg0AAIfDiZLJZAVvvPHGV/3798/1L1+nf9rAeE2/+MjncJycnAjDMNBoNAAAmqYhs7PBotefw9AAa9hQKlCsDmCZJ/QzOWC5NlAZbXG7wIBLyUU4dfE26rU6GI1G0DQdFRgYeGHevHnfPM/urf5bgUnTNLGysoK1SIg3Xu6NqS/IYc8pfoLgtS2E4qMaTjgap8TOiERo6rUAEBUYGHhh1qxZ+4ODg1Wy1P97pKCmDPySk3EvQ1xaVirW6/U8iqIIj8djxGKxXqFQ1Do4ODDS5EXkiYLJ5/PJsXUT0FWmAsXUPX3HQ3GhhguW7bmNS9fuAQDs7Ox2TJkyZcuLL754r1PhGkNLp2p6b8WVK1fsT506NTQxITG0uqZ6WuN7NE3f921cLsRi8Y4uXbok9u3bNyEkJCTHx8dHJ0yc+8fAfPdfL5IFg/R/PW/+O6gR8SpsOhgDvV4PmqajXnzxxb3vv//+KZd7y8wBK4aaabtt27Y37t27F6LRaKY0gsflciHgC+Db2Reurq4AAKPRiMLCQuT8lgPGyJiDpFAo/GbatGkb5wdcT3lsMDcsGUte66L8S0fJOtoN72xORuKtLAAAn88/9sEHH/yfr69v5YkTJ/r98MMP77MsO4KiKFhbW2PEiBEICQmBj48PnJ2dYW9vDx6PB5qmYTQaUV9fD6VSidK4JPC3/YRN9fdwoTIHFEVFT5gwYd3SpUvP+/v7PzqYG5eOJa/6/bXBbAxc5cQDi7ZcQ1J6LljWpJiNmsXlcvHKK68gPDwcPj4+EAqF4PF45hSuOTGUq1Dy6nLobmZgvz4X36IIpbQB7u7umz/79LPlkyZPqn0kY/r7ZHEETpx8HPq3HCe/HA8+n28G1Gg0gs/nY+jQofDx8YFUKgWfz28VSADgOdmB+mwmCqHDWDjjBILxsbEj6grL/v3mrDcPLly4sGdGRsazCOZ98RXlI2nbEOxeOQ7W1tagaRparRb/WfEfXLt27cECou2of+kGHPUcMGBxGuXoARskGvvCo54Tum3btuvjxo37MCEhgcrjDMaDj2cGTACgDWoMci/Bla2hUHiagotKrcK0adOQkpLSbkBVCamwARcEwBDIwAOFJNRgGTqCZVmkp6evmjRp0sbyq+uoZ1IzHxSxsQjnVgfi31OHgKIoqNVqvPXWW8jKymoTUKPRCGNOKQBADj46QAgAkIGHLrBGF54tKIpCYWHhv999993ZmrStzzaYAMAx1mPBID1OfjkRNE0jLS0Na9euRX5+PoxGY6tgUnU6i9c6QQRviNAAgq+CXkKHDh1AURQSExO37dixo+czD2aj+InzcXr9eNA0jWPHjmHTpk0oLS1t8XiWZcHTNDT7ngcEsB/zHNasWQOJRAKWZbFjx4610TunyP4RYAKAtyAPF7aMA4/Hw+7du3H48GHU1NS0rJ28liEQe7pg2LBhCA8Ph5WVFRiGGbFo0aJvMqI/sPpHgAkAzlQ+zn/1KrhcLtb9dx1SUlLQSCFapEY8Hhh7caufZW9vj4kTJyIgIAAURUGv14ceO3as1z8GTABwRD5+3fwqWJbB/PnzkZ2d3SQg0TQNYf/AFj9DV2UirVxdXREeHg4ejwcAOHz48OLY2FjuPwZMALAn+YhYG4rMzEx88MEHzQYklxd6tXh+6dHzqLuVCYFAgH79+qFfv34AAK1WO+7YsWNBTdK1kQP8P/Jz0D6zgEq51Rg6qB8+3/MzCCEICAiAjY3NfQaJYZGW9xvssiub/hmF1bhbVQqplyvsfTugU6dOOHr0KBoaGpCSkuLy/PPPH/Xy8mL/MWACgINVNV4cHIIV639Ax44d4ePjCysrUwzhuziAay1EwdkrsNE17ZxI04qRXpADrpAPmy4K5Obm4t69e2BZtnNgYOD2kJCQun+EmT8c5eeMD8GKFf9BZmamhf90fXkQZGveRD3VPFfsffYOlNM+RfakD/HOpfvk/40bN/z/MT7zYZk+gA9iZLBjxw6oVCqLQNThzVdRPWd4i+fK9ECnxAJIyzTYyvhBzFJITEwc+o8Fk2uowsUvByEh9hwuXrxo7nsBgEAgQMDsCcge6tvqZ0hAw4eIYG3koLCwMODy5cv0PxJMAOAbyrF18QCsXr0amZmZaGi4XwGJg3wQuOIt5LzcrWWCBRwQmNyBwWAIvXXrlsM/FkwAcLMqwvSRvli/fj0KCwtByH1f6fhCLwQtfRMVS15p0Yc+KOfPn+/3jwYTLINXgnn49cI5nDhxArW1loS6Xb9uCPhoDqz2vovsDpJWa/s7d+70/GeD+bu5b3lvOLZv3dRsdSQQCNBx+svoHbEO+p3zkTWoI0rEHAAA4XBQT5u0tri42C81NZUDtGPW6FmWIGkBgjq7IjIyEgqFAlKptGnACfaDJNgPHaaHouridSjTs0GtPwxNBQAG4HK5DQKBgDxBzeSAcK3/loCunOKDs1E/oKCgoFXu08rKCs4vPgfF22OR8t6L5v4Sl+YafXx8npyZlxMPFNQ7/C3BtGELERLogaioKFRXtz2NQwiBWq2+XyHZSQufqM+MuloF8hQnMlmuzR86/81hcuzatQsZGRmtaufv6RAKCgrMnVEOh/PkknaWK8b3P9+CWvv0JgJ/viuAluv8+NqJcni72uDEiRPQ6XTtPu/3FrPmiYFZ3iBDubIa6jrmqYHJpTlYcSAHAOcxNaIBH83ogRMnTqCioqLt7+NywbIsaJpGUFBQwhMD8+ebVTAYDCis0Dw1MP3cBLh4NRNqyv2xP8PVuhaE0SE1NdWiKmoOSDN4FIWePXumPxEwWa4YWw9fAcMwOBuf/dTAlFtrwTAMIq+q/1DdPjusFy5fvoy6upanARmGMdN3FEXB29tb9UTALKiXQVOvBY/HQ1Z+5eObWSuyJ1EMhidr9RgrYzVsJSKs338JRp70sb9rWDcJbt26BaVSaQ4wD4tOp0NycnIj2xTl7Ozc8ETAPBlvaqN6enrCSAAjz/aJAsnwZNh0MAY7LrTuQjisHsP7+cJgMCBT9fiR3ZZbg9u3b+PXX39tMRCVlZXh7p27pjre0TG3d+/ebLvATKvxBKH4zUcynhS7I+IhFAoxY8YMMAyDIs2TBVNlsIbBYMCOo1fAclvvInb1dgDLstgWmf7Y30cbqtGg12HPnj1QKptOBur1eqSkpKBOY3IDr7zyyr4H328RTA3XFQs3XASoZipOmo/LOULo9XqIxWIUFBSAEIKlO65Cw3V9YmBmlRnBMAy0Wi3KG1o39b6+JkLiSnJOiwrQthDYSkTIzc1FVVVVE1PXarW4cuUKDAYDKIpCUFDQb+0C80ySFgyhwWF/7zdTXBQyXlh2rAHd/52ImSt/AMuyKCwsxPbt21FdXY1rKVnoOvUQlh1raMHPPZpPjblVYr6gH2JLWz1WJtCDpmlo6rWop2SP/Qe+/8Zz0Gq1yMzMhMFgOfFdVVWFqKgosCwLPp9/zMfHx4JuonQNTTN+Pc8Ja3adh7u7O2o5cpzJdETnt2IxYNY+fH/6CtRqtXldj9FohL+/P1xdXcHlctGtWzd8f/oKOr0egRKj50Nuw6P9WkNZ4UpyHiiKAo/Hw9HoW81bSePhnPuzmoXVj8/fdPUQAAAyMjIsBhd0Oh2uXIlDVVUVKIpC//79jw8cONAiuaZ2Hb9ueYEUF/89UQq9Xo+8vDwETjuIeZ8cNX9w4zgzj8eDq6srPDw8kJqaap7pCQkJQXR0NCZPnox+b+7H3ToToITiI/p6CVha2K6LaqClKChVgcfjwc7ODvoGFka6Zb+pYQTmHPDD3VcfG0x7gek6b968aeY5GyP40qXLwDAMJBLJoWXLlh1t8ocKBbz7pgxASVzx/Zlr5uejRo3CJ598gjNnzuDAgQNwdXUFRVGwk9ohMjISiYmJSEpKQnh4ODgcDk6ePImffvoJs2fPxpw5czBy/n6Usl7QUvb45UYxKGJo10VV6YXmiNq/f38YWSMYWLV4fJ2eA5lMBpqmcSe7+LFTJAGpgVgkxOXLl1FZWQmdTod79+5h3rx5KC8vB0VReO/995Y9rJUAQPXs4m5hWou33gDLsujduzdOnTqFQ4cOITw8HAMGDEBGRgZKS0vB4/Gw5pM18PPzg4uLC7p3746pU6dCbC1GQEAAtFotFixYgICAAIwaNQpj3juN7VcdTWxLOxmRn29WwWg0QiAQoEdwD9AUjQaW1+LxpWoj+vXrB7G1GAzDoJ59PEqQY6yHn7cctbW1uHjxIi5cuICZM2ciLS3NFOj69n17wvgJ+c26GoXr/XQmOtsOibeyQNM0Fi5cCH9/f0ilUhBCkJKSgo0bN4KmaSxfvhyjR4+GSCS6n6PZ2sLdwx2VlZWYM2cOVqxYga1bTcOh9fX1OHDgAIRWFDikoV2V1c5jJlMdN24cgroFgWfFQ42+ZV+YmqNC79698cLgF0xmmvf4xEv/IA8T17lyJSZPnozU1FQwDAOFQvHptm3bdra0gJYS8E0/sIjxwsJ1p8CyLHx8fNCrVy9YWVnBaDQiOzsb4eHhMBgMeOONNzB9+nTzuppGsba2Rp8+fVBZWQk+n4+XXnoJmzZtwtWrV6HValFbW4uuHeXtWvmWobaHUqUGn8/H1KlT0alTJ0ilUlTWsS2S08WVdfD19cX06dNN2ciV3McG00VmDaPRCI1GA63WNO3i6ur69e7duz9sbUkLBQANPCe8ssQU8rlcLqZNmwYnJycAQHFxMb755hukpKTA19cXCxcuhLOzswWPB5h6Jn379gEAVFRUwMrKCn379sWqVavMx3TzaR9NtuloKliWRadOneDt7Q2RSAQHBweUqRpa0GQJsspN02o+Pj5wcnJC/K2cx2b/S5Qac0rG4/Gi5s6d2+vkyZPzm/OTFmBeuqPHrB2lqNfqwOfzIZfLMWbMGAiFQpSWluK7777Dzp07IRKJsG7dOigUCoulcw/S+h07dgIA3L17F3q9HjY2Nhg/fjyWLVsGLpeLAEXbFZKe54RL1+6BoihMmzbNHFQAoFhZ33zwYW0gEAggk8kgk8nQo0cPVNfWo4HzeGBeumHSaj6fH7V9+/ZpmzZtutGjR482nT03Li4ODMPAx8cHlZWVeP/992FtbY2kpCSsXr0a586dg4+PD7788kv069cPfH7zeSJFUXB2dkanTp1w9epVhIaGwtraGmKx2MxIezm0nf9tPFMJo9GI7t2749VXX4VAILhPrJTVwMBzRHGdNS6nq2BgWAj4XOSVFsPJyQ1arRa2trYYNGgQzp49i6JaIbwFj4gkxUVOkbKRc7g1bdq0dq8s5mq1WkyaNAnW1taIjY2Fs7MzDh06hM8//xxarRbvvPMO3nrrLXh5ebUIpLkfIpWid+/eOHnyJKqqquDs7Iy6ujqkpqaCy+XCxqoBaMVQqjie2Bd5DHw+H6tXrzb7ZZqmQQhBdEIOLlzPR35+Pjp27Ai5XI6ysjLk5eU1TvViwYIFsLY2aeT5pAp493tUvaRQrzOAZVmUl5d7Z2ZmorFh1iaY9vb2mDx5MubNm2eqr5cuRWFhIYRCITZv3ozQ0FDY29s3a9oPi0gkgrOzM6qqqpCXlwd/f38YDAbU1NSAb8WDALWtasTyPakghGDKlCnmAAgAtbW1KC0tNed5I0aMAJfLBcMwJmK6sBB2dnb48ccfER8fj8GDTYuejkSnYlZ/f4s8uu3q/H4s0Gg0UzIzM2f6+Pi06wOogIAAJCcnQ6lUoqqqCpWVlZg1axZ++uknTJw4EY6Oju0CsrE6srW1RV1dHW7cuAGGYaDX66FUKtHF27nVJdgVrCsuXbsHX19fzJkzx9zDrq+vx86dO82DAlqtFnfv3jUn9BqNBgKBAAzDgM/no6GhAQcPHoTRaES5sho6yu7RCG9aaB6XYVkWZ8+eDWi3mQuFQlRVVWHt2rXmJNzBwQEikQg0TUOn05lLyPaA+fzzz0MqlaK6uhp1dXUoLy9HaWkpwib0A1DXAm9pj1f+7ywCAwOxefNmdOzY0dyX1ul02L17NyiKglAoxMaNGxESEgKpVIqSkhJ8/PHHePfdxQgM7IZvv/0WW7ZsMdfoAJCntoKfuP1g6omp8jIajTAajThx4sTMuXPn3vDz82sbTIlEgmXLloGiKGi1WhQXF5ucd1ERGhoaIJPJoFAo4OnpCScnJ0ilUrP5Ncn2OBw4OTnhtddeQ2pqKioqKnDjxg1otVp4OFk3CybLtcXMTfegazDgiy++QGBgoEXQEYlE2L59Oz766COMGTMGr732GqRSKfR6PVJTU6FSqTB48BB4enqiY8eOGDx4MKZOnQqtVguWZVGmNjwSmCqdlUW7t7Ky8p2kpKSlfn5+ba7w5fJ4PBiNRqSkpGDnzp04fvx4s8s8pFIphgwZgokTJ6Jv376Qy+UWF/1gvhkcHIzY2FhkZWXhu+++g9FohNyu6R9AKD7WRKqQfLcAe/bsQY8ePZp8pkAggL+/PzQaDVxdXc3vl5SUYN++fejbty9sbW3B4XAglUoxcuRIHDhwAGPHjgXLssgqqsWgR+izVdaxFjwmwzBISkrymjx58u02faZKpcLChQsxePBgfP/9980CyefzoVarcfz4cTOY69evR15eXpNOHpfLhYuLCwAgISEBqampoCgKXvZNq5ZDN/g4Fp2ML774AsOGDTNH4YfFYDCgqqoKDQ0NoCgKNTU1OHDgACIiIhASEmJOvxo1eciQIfj0008BAOv2nmuRujPymvrTewVNrefmzZu92xWAoqKi8P3337eZ8rz55psIDQ0190GWL1+OgIAA7N27F3FxcSgpKTHvWeTs7AyRSIQ9e/ZAIBDAV+EKW5RbRO5vr4vx9bEb2L59O8aOHdvs0NSDvtjDwwO+vr5gGAZxcXFYu3Yt3n77bYSEhFi0Xxt/b1hYGKytrcEwDLI0bi34x6ap3sGfUiw0k2VZJCUlDWtu3U+z5WRjLteSlJWVYc+ePfD390dERASGDzfNftfV1WH+/Pn45JNPsGnTJqjVanA4HNjb26O4uBgODg6QyWQY2reTOT0hXGtsvcTFwbN38f333+Pll1+Gvb19u9IuNzc3qFQqrFq1Cu7u7nj77bfNZW9z/lvAF4CiKGyOSGsn689BcbnajEfjBgAajWZKSkqKrF1gisXiNmdsAOC///0vdDodtm/fjoiICMjlchiNRsTHx+PKlSs4c+YMtFotRCIRpkyZgqVLlsLKygpBHe3NTbglh6qw58RVbNmyBT179mzRtB/UjMrKSohEIohEIsTFxSErKwvvvfce3N3dW1UCDsWBUCjE6YtJTfhNQlmhzmD1UDC0hr7BYCZu3n77bfMi1DNnzgxpMwDRNN1q0x0APDw8MGbMGBQVFWHVqlU4ffo0Ro8ejYiICEybNg05OTkoLCzErl274O/vj65du2Lp0qVIS0uDWq1GB0crNPCcMO2LFOQWq7Br1y6EhIRYUHitgVlaWgqBQAClUomtW7fixRdfxOjRoyGRtDzVKxAI4ObmhqqqKkgkEtxV2qCrzf0hBR1lB52Ogwf5Zj3EMBgM4PP52Ho8AVwbFxiFjti5fjXi4uLCYmNjjxYKulnUcJN73+cbqLY0MiwsDPn5+di8eTO+/PJLyOVy/PrrrwCAnj17Yu5c015AOTk5EAgEOHPmDBp3cSkrKwMARGU64rW1aXDt0AXnzp3D6NGjLVaJtdq+aGhAaWkpPDw8kJKSAqVSiblz58LFxaUJc/Vw0HRxcYGtrS1effVVXLtXZfF+dQMf9EPtxHKNyYfKXdzAs3UBAQfPjZzQmDaOO3/+fId2+cyWZM2aNRZROjQ0FNnZ2dDpdGbesjGaZmVlYcyYMeByudDr9UhKSgLDMDhy5AjeeustbNq0CV26dGk2pWpxEIFhUFRUhPr6euzbtw8LFy40r7BtTQwGA+rq6tDLV4pFz5UhrK+lmVfUspBYWSrS5XQVWJaFo9wVLDH9UVyxI2SOJr/8888/v/SHwHxwAJRlWfB4PDQ0NIBlWXA4HLi5uWHixIlm7VSr1aAoCjqdDufPnweXy8Xq1aswceJEuLu7N4m8bYlOp0NmZibi4+Ph6emJPn36gGVZ1NXVoaGhwWKlxMMDA3l5ebC3EYJnqIQNW2jJWVY1gEcxFhnGD+dMgeq5IaPvp0+EwoQZ80FRFO7cudM/QJDPeWww582bhx9//BG3b9/Gd999h8WLF5spt0ZH3ZgyKRQKODg4gBACKysrhIeHIzo6GmFhYyGXy1s1yyY5oNEItVqNuLg4xF2OQ3V1NRISEjBhwgT069cPw4cPxzvvvIOvv/4at2/fRlVVlUUQ1el00Gq1kIqtmiVV1HUN4OM+P1pPOSKnsAI0TSP4+TEWh/cb/TqsxRLo9fpxN25cbzGHM6uJTCaDj48PEhISHk5YzWRxI4XfsWNHs6nSNA1/f38oFAqsWbMGnTt3BofDga2tLcLCwto0x2aZG0JQXl6Or7/+Gps3b0Z9fT1YlkVVlaXfa/ytNE1jxowZmD59OoKCgmBjYyKLbWxs4O5oDcByJwSGtkVtvd6CeLmWa9JmubMb+FJXPOgAjFwx3pj7HrZ9/iG2b98xfeHmsI2tauaCBQuwf//+Fi+wEUg+n4+QkBALbtPW1hafffYZRo4caX6dw+E8FpCNYN6+fRs//vgjqqurYTAYzFpH0zRkMhlCQ0Mxffp09OnTB0ajEXv27MHw4cMRERFhrpYAQG9o2jcq1ogBEIuu7Md7LpsC7rS3YWzGYBu1NTk5eRSyfpS0CubKlSvh6+vbdueuf3+4urpamKyDgwPCwsIglUofyZRbE4lEgqKiombNX6lUIioqCoQQrFmzBnv37oVcLoder8fMmTOxZs0a3LlzBzU1Nejs2jTY3c7XwsPpfgmqhhzFZSZ2vXv/Ec1nB1IX2Ds4gmXZEQkJCc0CRbVWxjUnM2bMgJ2dXZOWBZfLfWxNbJZ1r6oyp1Ytyf79+80l5cWLF7FixQoAwIYNG7B+/XoAgLNY22TsZt+ZFAuQd/xcBIPBYNpmwtaxeR8OGsu/+BYUReHEiRMz/a1ym2gNNWrUKLSHq2v0q88///wjpTaPNQjwe0naGNhak5ycHBw9ehQdO3bEkiVLsHPnTgBAYmIiuFwurIyWLZwq4ozicjXcxCZGrZ7rgm9PxN9fPUG3PDXi0KknZI5OKC8vf+dO+h1xs2be+AMeFj8/P7z55pvm5+Hh4ZDL5fhfS2MAa21Y38PDAzKZqVz+5ZdfoFarIRaLMWLECHh4eIBlWTAMAw4sc8nPjmSiX5ACXIMpmO0+b/Kv7SmnWcLBks92AQB+OPrD0GbB7N+/P65fv45PP/0Uq1atwoYNG3DkyBEcOHAAnp6mwasuXbpg6tSp/3OtbExrEhISmmQWjdKnTx/k5+cjPT0dS5YsQVlZmTkfdnR0xLhx48yp1YNDaXqeEy4k3sPrIzr9zvDLsP1IrBlIQkibQxIunYJgLZbg7NmzM911KRZJM7eyshI1NTUIDAxEjx49zAkxy7JISEjAypUroVAo8N1335l5yv+1qFQqc/uhOZk8eTIAwMnJCePHj7fYSE8oFKJnz56gaRp6vR5qoz3sYBrjPn2LAc3loZtDFcAAB+IbLPhblmXRUF8NStIyZ8BQQox4eSJOHNodGhUV5Tdw4EAzaUydO3cOX331FTIyMlBcXIyioiJUVFTgzJkzeP311yGXy3Ho0CF07dq13Y21PyrFxcW4efNmi+9fuHABJSUlKCwsxLlz56DX682kCcuyEAqF5korq5yYqb+NB69g+vTp4DAa1NFuWLf3fOMO3OY9i9Kv/drm7xs5cTYA4PDhw3MtNDMwMBAnT57EmTNnIBaLUV9fDx6PBx6Ph3/96194/fXXH7me/iPS0NCA2NjYVo+JiopCRUUFRCIRLly4gOHDh0MoFJrLyLt375ozi8JKLXo7AvkaB7Cg8dJLL6GE9xomTZqEBzfyt7GxgcFgwPe71mPtkEkWLd8maZK9Jzr6+iM7I73T8ePHRWFhYfUAwA0ICMCaNWuQnZ2N5ORk1NTUoF+/fujatStsbW0hkUj+NI1sJJyPHz9ufh4SEoKZM2di9uzZzVY/ANC5c2czL6rRaHDhwgVzvltWVQ/CtcbJS6UIDQ0Fj8fD6tWrUVhYaBF0hg8fjuTkZOTn54M2asHQolZ76+988Dn+b8aYEQcOHBgRFhYWCQBcKysreHt7Q6FQYPDgwWCNRnDb2Kv3fyllZWW4evWqxfPWTB4ABg8ebNZMtVptwc/G3a2DotdUHIlejS8+n4GIiAhER0dbAPn74ig4OTlh165dqCrOho1HYKvf6eTdDVweD+fPn3/92rVrp3r37s1SFFgUnfwaRm0duBQFHo/71IBkWRY5OTkWQSEnJwfbt29v8RyFQoE+ffqAoig0NDQgNzcXOp3OPNyvUCjwww8/oFOnTsjNz8XXX3/dJA1qZMMCA00A3oj5uW1qkGMFNw8FtFrtuNOnT3cCAOrOnbso1rBgwQHLMKaS9Smtd2ZZFkqlEmKx2CK/bU1mzZoFBwcHc0p17do12Nra4rnnnsOZM2cQHByM1BTTrNPn6z5vtvvaaAEKhQIcDge/nP4BNKftYdmQQcNBURQ2btz4CQBQa8f2g729DDTPChyaBjgc0+MpganRaDBw4ECEhYU1Oyj2YFtXoVBg/Pjx5uBYXV2NmJgYTJo0CZ999hkkEgk+/vhj6PQmkKurq5tNzlmWRWZmJuzs7GBnZ4eykiIwdS0XDERThiNfLsTpH74FTdNR3bp1Ow8AVKZKD7l/DzOYHOrp7YHSGFVdXV0REhKCqKgoc/CTSqVYsmQJZsyYYT5+y5Yt8PLyMjPyeXl5qKqqwqBBg+Dm5oZdu3ahrq4OWq0WGo2m1Srnzp07oGnaZBGEICE64iGu0oDaojR8t/ZtzA7tiZ8jD4NhmGPh4eHhsbGxJj80ffp08lcRo9FIsrOzyahRo0hkZCRhWZZoNBqSnp5OlEolSU9PJ8OHDycAyJYtW4hKpTKfq1KpyNq1a8mUKVNIWloa2bBhAxGJREQkEhGhUEhomia/826Epmnzg8fjER6PR2xsbI4mJSVxTp06JRAJhcTTy5t890s6OfRrFnlr4XJiL3MgQqGQCIVCYmNjczQ0NHR8TEwMlxCCxsdfaveYxgGGWbNm4csvv0RNTQ2GDRsGqVSKsrIyXLp0CaWlpdiwYQPGjx9vHlwghJhWyF27hpdfDsW5c+ewfPlyAMDixYvxzTffmOt8LpcLPp8PsVi8w8PD465Cobij1+uFQ4cOje/evTsRCAQ6iY3NN5XlJf+aFxZi7ifxeLxjnTp1Sn399de/DQ0NzW9utv0vtxWPSCTCsGHDIBAIsG/fPkRHR4PP50OlUoHP5+Ojjz7CCy+8YDG4oNfrkZiYiOTkZIjFYpw8eRIGgwG9evVa8Morr2z19PS0O3369JBu3bql9OzZs8Db21srkUhIc6sm/Pz8sGHDhoWLFi7i6vQ6oZeXV+qCBQu29O7dW9XmveH+Smb+oOj1elJcXExiYmLIxYsXSXp6OlGpVMRgMDQ5tqSkhIwdO5aIRCLi5OhEgoKCiFAoJMuXL+/8oBk+yiM7OxtpaWmPdA6XkL/mjfisrKzg4uICZ2dnEEJazX2rqqpw8+ZNKBQKLF++HPn5+Vi7di0CugYUP+73P87N8ricp5QGPQq32dZvdHV1xbFjxyCTySASibBp0yYI+AK4ubv9qVvWPhWfWV9fj+rqakgkElhbW7e7b8SyLEpzMmHQ1oEnFEPq4gGRSARbW1t0794dFEWhoqIC6enpMLLGQzY2NsY/87qeSlJZXV2N1atXIz4+vl0M94Ng6i8fAW6chuHyYfwWfdjEpj/QCVUqlYi7HAcvL6/kP/tmok8FTKPRiLS0NIutatsN6O/UGAsOJNUFFrsLMgyD3377DXWaOvTq1Svuz76up2Lm9vb2+Oqrr+Dq6vpI9B5FUWhw7wZ9yT3IBk0Az9rGYtxGr9fj6tWrMBqNkMlkqj/9wp5GasSyLGFZ9rHOZRiGGAyGJufrdDoSHx9PnBydiEgkOvXjjz/yHzctetzHU9HMP5JBNKfJjXX56tWrUV1TjeDg4HOjRo36029ZSP0v80xCCBiGaXHDpSf1HTk5OQgPD8cvv/wCmqajPv744+1PQ0m4FRUVqKmpgUQiwZPMOdVqNaKjo5Gamgo3NzcMHToUHh4eT6yXxLIs1Go17ty5gwULFuDWrVugKOr8pk2bZgwdOtTwNMAEj8cjH374Iblx4waprq5+Ij5Ro9GQFStWmFkaAEQmk5GIiAiiVCr/8OdXV1eTy5cvkzlz5jSyQL8OGDBgzi+//ML7s/3kgw9IpVJC0zSRy+Vkx44dpKSkpNn69+EA0poUFBQQAKRLly5k7969ZP/+/cTDw4MAIJGRkY/9pzXW6+vWrXuQTvv1yJEj1k8TRDOYo0aNIvv37ydOTk5EJBKRCRMmkPj4eKJSqYjRaHysiy4uLiYymYwsWbKEFBQUEK1WS1JTU4lCoSAymYzEx8e3+Yc9KFqtluTm5pLIyEjSp0+fRiBjBw4cOOfixYvcvwKQZjBra2tJeno6mT9/PqFpmshkMvLBBx+QtLQ0otFoHhlMrVZLVq1aRfh8Pjlz5gzRaDTEYDCQmJgYAoBMnjyZFBcXt0oS19bWkoKCAhIfH082bNhAAgMDzSCGhIT8++DBg5K/CohmMH19fYlWqyWEEFJbW0tiYmLI8OHDCY/HI15eXmTHjh3k3r17pLa29pFyw+LiYhIcHEwUCoVZExt9KZ/PJ/Hx8RZuQ6/XE6VSSbKzs0l0dDRZsWIFCQ4OftDvxk6ePPnFh9ntvxSYNE2TgoICi6S4rKyMREZGki5duhA+n0/kcjlZvnw5SUpKItXV1YRhmGa1qbq6muTm5pKYmBgSExNDIiMjiVgsJvPnzzcHnvT0dCIWi8mGDRtIWVkZKS4uJqmpqWTbtm0kNDSUyGQyM4AKhWLDkiVL/CMjI4Xp6en4q4JoAebly5eb+EeDwUCio6PNPRMej0fkcjl57733yMWLF0lubi5RKpWktraWqFQqcv36dTJnzhwil8vNYAQGBhJfX18SGBhIsrOzCSGElJWVkeDgYBIcHExGjRpFfH19LaK+XC7fGxYW9vLBgwclfwcALSogiqLw888/IygoyKKN2khnNRITGw+cRX5WOr7Z/CnWr18PV1dXBAQEQK/XQ6PRIDk5Gb6+vnjttdcQHBwMtVqN3bt3IyMjAx4eHuZ+tUgkQufOnRsXv16WyWT5AwcOjB05cuTPgwYNKrC3tzd26dIFf0vh8/mkS5cuJDc310IzlUolGTVqFAFADl/OI4euqsmhq2py+JqKHPo1iyxZu5W4eXQwa9SSJUtIbm4uqa2tJQaDgej1epKdnU0mTJhAhg8fbnYlBoOBrFixgsjlcrJlyxb530nz2tTMrl274tatW8jIyDAv7GRZFvn5+fjpp5+watM+sFb31weyhAOIHBA07HV0CR6AGSODEBwcjNmzZ5t72I3SoUMHbN68GXV1deapCw6Hg8DAQLi5uUGhUKjxDAkll8shkUhw6tQp852bdDodzp07Z+rW9RnRcslYUQKpVIqNGzfC3d29WcrMyckJ3t7e5jKSw+FALBZDq9VCqVQKnikwh019H8s2HsHVlAxUVlaaG1THjh1DJ7+uMLay32Xir2cwcOBAKBSKFvftaI4xkkgkqKurg1KpFD1TYPL4Anj498XtmwmIizPtXJqVlYWrV69i1uKPWqbCYETmnRR4eXm1a6nzgyyP0WiEVCqFTCarf5bA5HIoGlYcBs7uXnjvvfeQkZGBiIgIWIsl8O4+qLUNslBTWQIeL/iR2Z6CggIIhcLFHh4emmdKM6+f3Aoel8a8/2xCXb0ea9asQUZGBt5a/B8wnJZN1wgaNE3jypUrLY7pNSemvXuvIDAw8PoLL7zAPFNgAoBEyIWLz30N43K56DNsbKsn3ok5hjt37iAxMRF5eXlt3uW+UZRKJS5duoTRo0ffxDMmlP8LE1Fea2q39h0SCpqm4ezmCVpo14KvZHFo3Xx8HD4LwcGmP2Dfvn1NVty2pJWnT5+GRCJZHBgYWP/MgamqKAX7e+fCs4Np27BXJr3Z7MpWLqvD3jVzcPrYASxevBg7d+7E5MmTcenSJfOq39YCT3FxMb766iuMGzcuor07//2tAtDJw3vQ7YUwAMCw8bOQlpyIrr0GWmojh0VtaRZWvB0GHs1BREQEBgwYAC6XC2dnZ8yePbvVzUcA006Dvy+U+nT48OGFeAaFAgBlnmk7BcpKDImNFGI7R3P6U3b3Cj5f+BqWzwrF3LffQkxMDF5++WXzfkJ5eXlwcnJqc7uI9PR0bNiwAbNmzdrWvXt38kyCmZV6FbvXf2heMyh384S+vhb1ZRn4fFEYvlo5D6OHDcLJkyexaNEieHl5WQBXVFSEzz77rMmtWi0iv9GI2NhYiMViDBw4sAjPqgiFQsLn88lLk2eTOcvWkSGhk4lMJiNOjk5k1qxZJD4+npSVlTXbZiguLjaTIYGBgWTv3r1EqVQ2IZE1Gg0ZNWoUEYvFJDU1lfMskRsWRIePjwwNDQbkp/2I/DSAy6Xg5WUNjUaI+fPno2vXri2a8G+//YaffvoJYrEYIpEIM2fOxMWLFzFw4MAmwwIMw8Da2hq/z5Y/k8J183TBti2Wu6Wcu6jGW//aCJFI1CKQarUa33zzDQBg6tSp6Ny5M8rLy+Hg4NBkMJWiKDNrZDQaObDYIOMZ8pmDXmh6+2k/PwezNjUnDMMgNTUVe/bsMYOZn5+P3r17w8nJqdlhBpqmoVar253c/y3B9OvSdA25nbT1ScOKigrzaoYVK1bA3d0dWVlZGDlypAVb/3AQ0uv1jZr5bILJ4zYFTqU2rdluboVYTU0Ndu3ahdjYWAwcOBCzZs1CYWEh1Go1BgwYYF4Q+jC5odfrIZfLvxGJROwzC+aWzT9ZvNDA8LD2k5Pw8vJqAozRaER6ejpWrlwJAFi0aBGEQiE++eQTPPfcc3B0dGzWxHU6HW7fvo0OHTqk/G37O+0JQN262mLbtssWL+bnFGLYsLFN9rasra1FZGSk+blAIEBmZiYuXLiAGTNmtGjitbW1yMjIwBtvvHELz7Bwp07tC4nE8j47p0+ngWGYJlG5oqIChw4dMgcUHo+HS5cugcfjwdPTs9nIz7Ks+T6NPXr0uPtMgymR8KBUuj9Av1Wie3cvXLhwATExMbC1tTXPV6alpaGgoABSqRQuLi44f/48qqur4erq2uwN3BpNvPG+QCEhIWV4xoX8GQ8/P7+P/0pDVv+Lx/8PABA9X74RMiUqAAAAAElFTkSuQmCC";
        }
    };
    var n = {};
    function t(r) {
        var i = n[r];
        if (void 0 !== i) return i.exports;
        var o = n[r] = {
            id: r,
            loaded: false,
            exports: {}
        };
        e[r](o, o.exports, t);
        o.loaded = true;
        return o.exports;
    }
    t.m = e;
    (() => {
        t.n = e => {
            var n = e && e.__esModule ? () => e["default"] : () => e;
            t.d(n, {
                a: n
            });
            return n;
        };
    })();
    (() => {
        t.d = (e, n) => {
            for (var r in n) if (t.o(n, r) && !t.o(e, r)) Object.defineProperty(e, r, {
                enumerable: true,
                get: n[r]
            });
        };
    })();
    (() => {
        t.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" === typeof window) return window;
            }
        }();
    })();
    (() => {
        t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
    })();
    (() => {
        t.nmd = e => {
            e.paths = [];
            if (!e.children) e.children = [];
            return e;
        };
    })();
    (() => {
        t.b = document.baseURI || self.location.href;
        var e = {
            179: 0
        };
    })();
    var r = {};
    (() => {
        "use strict";
        var e = t(565);
        var n = t.n(e);
        function r() {
            let e = unsafeWindow.location.href;
            let n = {
                "www.acfun.cn/v/list1/index.htm": "动画",
                "www.acfun.cn/v/list60/index.htm": "娱乐",
                "www.acfun.cn/v/list201/index.htm": "生活",
                "www.acfun.cn/v/list58/index.htm": "音乐",
                "www.acfun.cn/v/list123/index.htm": "舞蹈·偶像",
                "www.acfun.cn/v/list59/index.htm": "游戏",
                "www.acfun.cn/v/list70/index.htm": "科技",
                "www.acfun.cn/v/list68/index.htm": "影视",
                "www.acfun.cn/v/list69/index.htm": "体育",
                "www.acfun.cn/v/list125/index.htm": "鱼塘"
            };
            let t = {
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
                "www.acfun.cn/v/list63/index.htm": "文章"
            };
            let r = [ "动画综合", "短片·手书·配音", "MAD·AMV", "MMD·3D", "虚拟偶像", "动画资讯", "COSPLAY·声优", "特摄", "番剧二创", "搞笑", "鬼畜", "明星", "生活日常", "萌宠", "美食", "旅行", "手工·绘画", "美妆·造型", "治愈系", "原创·翻唱", "演奏·乐器", "Vocaloid", "综合音乐", "音乐选集·电台", "颜值", "宅舞", "综合舞蹈", "偶像", "中国舞", "王者荣耀", "我的世界", "和平精英", "第五人格", "英雄联盟", "电子竞技", "网络游戏", "主机单机", "手机游戏", "桌游卡牌", "手办模玩", "科技制造", "人文科普", "汽车", "数码家电", "演讲·公开课", "广告", "放映厅", "影视混剪", "预告·花絮", "电影杂谈", "追剧社", "综艺show", "纪录片·短片", "综合体育", "足球", "篮球", "搏击健身", "极限竞速", "普法安全", "国防军事", "历史", "新鲜事·正能量", "二次元画师" ];
            let i = [ "二次元画师", "综合", "生活情感", "游戏", "动漫文化", "漫画·文学", "文章" ];
            let o = e;
            if ("http://www.acfun.cn/" === o || "https://www.acfun.cn/" === o) return "HOME";
            let a = /https?:\/\/www\.acfun\.cn\/([av])\/ac\d+/;
            let l = /www\.acfun\.cn\/.*/;
            let c = a.exec(o);
            let A = l.exec(o);
            if (null !== c) {
                if ("a" === c[1]) return "ARTICLE";
                if ("v" === c[1]) return "VIDEO";
            }
            let s = A[0];
            let d = n[s];
            if ("undefined" !== typeof d && null !== d) return "VIDEO_HOME";
            d = t[s];
            if ("undefined" !== typeof d && null !== d) {
                if (r.indexOf(d) >= 0) return "VIDEO_HOME";
                if (i.indexOf(d) >= 0) return "ARTICLE_HOME";
                return "OTHER";
            } else return "OTHER";
        }
        var i = t(547);
        function o(...e) {
            var n = console.log;
            let t = [ "插件DEBUG:" ];
            e.forEach((e => {
                t.push(e);
            }));
            n(...t);
        }
        const a = "3.008";
        function l(e) {
            return e.replace(/(\r\n|\n|\r)/gm, "").trim();
        }
        let c = e => "undefined" === typeof e || null === e ? () => {} : e;
        let A = "undefined" === typeof GM_setValue ? function(e, n, t, r) {
            let i = GM.setValue(e, n);
            i.then(c(t), c(r));
        } : function(e, n, t) {
            GM_setValue(e, n);
            c(t)();
        };
        let s = "undefined" === typeof GM_getValue ? function(e, n, t) {
            let r = GM.getValue(e, n);
            r.then((e => {
                c(t)(e);
            }), (() => {
                c(t)(n);
            }));
        } : function(e, n, t, r) {
            let i = GM_getValue(e, n);
            c(t)(i);
        };
        let d = "undefined" !== typeof GM_deleteValue ? function(e, n, t) {
            try {
                GM_deleteValue(e);
                n();
            } catch (e) {
                t(e);
            }
        } : "undefined" === typeof GM.deleteValue ? function(e, n, t) {
            A(e, null, n, t);
        } : function(e, n, t) {
            GM.deleteValue(e).then((() => {
                c(n)();
            })).catch((e => {
                c(t)(e);
            }));
        };
        function u() {
            A("ACFUN_BLOCK_LIST", []);
        }
        function f() {
            A("ACFUN_BLOCK_KEYWORDS", []);
        }
        function p(e) {
            s("USE_NEW_CLOUD", false, e);
        }
        function m(e) {
            A("USE_NEW_CLOUD", true);
        }
        function g(e) {
            s("ACFUN_BLOCK_LIST", [], e);
        }
        function w(e) {
            s("ACFUN_BLOCK_KEYWORDS", [], e);
        }
        function h(e) {
            s("ACFUN_BLOCK_REPLIERS", [], e);
        }
        function v(e, n) {
            A("ACFUN_BLOCK_LIST", e, n);
        }
        function b(e, n) {
            A("ACFUN_BLOCK_KEYWORDS", e, n);
        }
        function x(e, n) {
            A("ACFUN_BLOCK_REPLIERS", e, n);
        }
        t.g["usernameCache"] = null;
        function y(e) {
            function n() {
                setTimeout((() => {
                    y(e);
                }), 1e3);
            }
            if (t.g["usernameCache"]) {
                c(e)(t.g["usernameCache"]);
                return;
            }
            if ("undefined" !== typeof unsafeWindow.user) {
                let r = unsafeWindow.user.name;
                if ("用户" !== r && "未知用户" !== r) {
                    t.g["usernameCache"] = r;
                    c(e)(r);
                } else n();
            } else {
                let r = unsafeWindow.document.querySelector("a.fl.user-name");
                if (r) {
                    let i = r.innerText.trim();
                    if ("未知用户" !== i) {
                        t.g["usernameCache"] = i;
                        c(e)(i);
                    } else n();
                } else n();
            }
        }
        function E(e) {
            if ("undefined" === typeof t.g["cachedUserTags"]) s("ALL_TAGS", {}, (n => {
                t.g["cachedUserTags"] = n;
                let r = t.g["cachedUserTags"];
                c(e)(r);
            })); else c(e)(t.g["cachedUserTags"]);
        }
        function C(e) {
            t.g["cachedUserTags"] = t.g["cachedUserTags"] ? t.g["cachedUserTags"] : {};
            A("ALL_TAGS", t.g["cachedUserTags"], (() => {
                e();
            }));
        }
        function T(e, n) {
            I((t => {
                console.log(typeof e);
                if (t.indexOf(e) < 0) {
                    t.push(e);
                    t.sort(((e, n) => e - n));
                }
                A("COMMENT_CACHE_INDEX", t, (() => {
                    n();
                }));
            }));
        }
        function D(e, n) {
            I((t => {
                if (t.indexOf(e) >= 0) {
                    let r = t.indexOf(e);
                    t.splice(r, 1);
                    A("COMMENT_CACHE_INDEX", t, (() => {
                        n();
                    }));
                }
            }));
        }
        function I(e) {
            s("COMMENT_CACHE_INDEX", [], (n => {
                c(e)(n);
            }));
        }
        function L(e, n) {
            let t = `COMMENT_CACHE_${e}`;
            s(t, null, (e => {
                c(n)(e);
            }), (() => {
                c(n)(null);
            }));
        }
        function B(e, n, t) {
            let r = `COMMENT_CACHE_${e}`;
            A(r, n, (() => {
                T(e, (() => {
                    c(t)();
                }));
            }), (() => {
                console.error("缓存评论失败！");
            }));
        }
        function S(e, n) {
            let t = `COMMENT_CACHE_${e}`;
            d(t, (() => {
                D(e, (() => {
                    c(n)();
                }));
            }), (() => {
                console.log("DEBUG 删除缓存失败");
            }));
        }
        function M(e, n) {
            A("UI_POSITION", {
                x: e,
                y: n
            });
        }
        function W(e) {
            s("UI_POSITION", {
                x: 0,
                y: 500
            }, (n => {
                e(n);
            }));
        }
        function O(e) {
            s("GENERAL_SETTING", {
                showDeletedComment: true,
                showUserTags: true,
                showBanButton: true,
                showMouseover: true,
                autoSync: true
            }, (n => {
                e(n);
            }));
        }
        function k(e, n) {
            A("GENERAL_SETTING", e, (() => {
                n();
            }));
        }
        const P = {
            version: a,
            loadGeneralSetting: O,
            saveGeneralSetting: k,
            updateBanList: v,
            updateKeywords: b,
            updateReplyBanList: x,
            loadBanList: g,
            loadReplyBanList: h,
            loadKeywords: w,
            isUsingNewCloud: p,
            setUsingNewCloud: m,
            getUsername: y,
            loadUIPosition: W,
            saveUIPosition: M,
            getAllCacheIndices: I,
            getLocalCommentCache: L,
            saveCommentCache: B,
            deleteCommentCache: S,
            getActiveHelpTime: function(e) {
                let n = 0;
                s("ACTIVE_HELP_TIME", n, (n => {
                    if ("undefined" === typeof n || null === n) n = 0;
                    let t = parseInt(n);
                    if (isNaN(t)) t = 0;
                    c(e)(t);
                }));
            },
            setActiveHelpTime(e, n) {
                let t = "undefined" === typeof e ? +new Date : e;
                A("ACTIVE_HELP_TIME", t, (() => {
                    c(n)(t);
                }));
            },
            setUpdateTime(e, n) {
                let t = "undefined" === typeof e ? +new Date : e;
                A("UPDATE_TIME", t, (() => {
                    c(n)(t);
                }));
            },
            getUpdateTime(e) {
                let n = 0;
                s("UPDATE_TIME", n, (n => {
                    if ("undefined" === typeof n || null === n) n = 0;
                    let t = parseInt(n);
                    if (isNaN(t)) t = 0;
                    c(e)(parseInt(t));
                }));
            },
            banUser(e, n) {
                e = e.trim();
                g((t => {
                    if (t.indexOf(e) < 0) {
                        t.push(e);
                        v(t, (() => {
                            c(n)(t);
                        }));
                    } else c(n)(t);
                }));
            },
            unbanUser(e, n) {
                e = e.trim();
                g((t => {
                    let r = t.indexOf(e);
                    if (r >= 0) {
                        t.splice(r, 1);
                        v(t, (() => {
                            c(n)(t);
                        }));
                    } else c(n)(t);
                }));
            },
            banKeyword(e, n) {
                e = e.trim();
                w((t => {
                    if (t.indexOf(e) < 0) {
                        t.push(e);
                        b(t, (() => {
                            c(n)(t);
                        }));
                    } else c(n)(t);
                }));
            },
            unbanKeyword(e, n) {
                e = e.trim();
                w((t => {
                    let r = t.indexOf(e);
                    if (r >= 0) {
                        t.splice(r, 1);
                        b(t, (() => {
                            c(n)(t);
                        }));
                    } else c(n)(t);
                }));
            },
            banReplier(e, n) {
                e = e.trim();
                h((t => {
                    if (t.indexOf(e) < 0) {
                        t.push(e);
                        x(t, (() => {
                            c(n)(t);
                        }));
                    } else c(n)(t);
                }));
            },
            unbanReplier(e, n) {
                e = e.trim();
                h((t => {
                    let r = t.indexOf(e);
                    if (r >= 0) {
                        t.splice(r, 1);
                        x(t, (() => {
                            c(n)(t);
                        }));
                    } else c(n)(t);
                }));
            },
            getTags(e, n) {
                e = e.trim();
                E((t => {
                    let r = t[e];
                    c(n)(r ? r : []);
                }));
            },
            removeTagForUser(e, n, r) {
                e = e.trim();
                E((i => {
                    let o = i[e];
                    o = o ? o : [];
                    let a = o.indexOf(n);
                    if (a >= 0) {
                        o.splice(a, 1);
                        i[e] = o;
                    }
                    t.g["cachedUserTags"] = i;
                    C(r);
                }));
            },
            addTagToUser(e, n, r) {
                e = e.trim();
                E((i => {
                    let o = e in i ? i[e] : [];
                    if (o.indexOf(n) < 0) {
                        console.log(n, "add to ", e);
                        o.push(n);
                        i[e] = o;
                    }
                    t.g["cachedUserTags"] = i;
                    console.log(t.g["cachedUserTags"]);
                    C(r);
                }));
            },
            AddTagsToUser(e, n, r) {
                e = e.trim();
                E().then((i => {
                    let o = i[e];
                    o = o ? o : [];
                    n.forEach((e => {
                        if (o.indexOf(e) < 0) o.push[e];
                    }));
                    i[e] = o;
                    t.g["cachedUserTags"] = i;
                    C(r);
                }));
            },
            getAlltags(e) {
                E((n => {
                    e(n);
                }));
            }
        };
        const q = "https://baldhumanity.top";
        function U(e) {
            return e;
        }
        function N(e) {
            return e;
        }
        function R() {
            if ("undefined" === typeof unsafeWindow.A) unsafeWindow.A = (e, n) => {
                o(e, n);
            };
        }
        function Y(e, n) {
            let t = new unsafeWindow.XMLHttpRequest;
            let r = q + "/api";
            let i = JSON.stringify(e);
            i = U(i);
            t.open("POST", r, true);
            t.setRequestHeader("Content-Type", "text/plain");
            t.send(i);
            t.onload = function() {
                let e = {};
                try {
                    e = JSON.parse(this.responseText);
                } catch (e) {
                    console.trace("ERROR failed parsing JSON string:", this.responseText);
                } finally {
                    if (n) n(e);
                }
            };
        }
        const H = {
            getCommentType() {
                let e = unsafeWindow.localStorage.getItem("ac_usp_commMode");
                return "1" === e ? "NEW" : "OLD";
            },
            success(e) {
                R();
                unsafeWindow.A.emit("global::success", e, 3e3);
            },
            warn(e) {
                R();
                unsafeWindow.A.emit("global::warning", e, 3e3);
            },
            apiRequest: Y
        };
        var F = '<div id="helperUI" class="helper-wrap" style="pointer-events:none"> <div class="helper-wrap-inner"> <div style="pointer-events:all" class="helper-main c-a ui-hidden smooth"> <div class="plugin-hint" id="hide_hint">隐藏插件--\x3e</div> <div class="page-wrap"> <div class="plugin-menu-title">插件设置</div> <div class="menu-wrap"> <a id="bannedAuthours">Ｕ Ｐ 主</a> <a id="bannedRepliers">回 复 者</a> <a id="bannedKeywords">关 键 词</a> <a id="cloudsync">云 同 步</a> <a id="commentRecovery">评论恢复</a> <a id="generalSetting">通用设置</a> <a id="aboutme">关于插件</a> </div> <div class="plugin-version">0.00</div> <div class="plugin-author">作恶者：<a href="https://message.acfun.cn/im?targetId=690324" style="color:#00f">人文情怀</a></div> </div> <div class="page-wrap inactive-page" id="ban_up_page"> <a class="go-back">返回</a> <div class="plugin-add-ban-up"> <input class="ban-title-input" type="text" maxlength="10" placeholder="输入UP主ID..."/> <input class="ban-item-submit" type="button" value="屏蔽"> </div> <div class="banned-items"> <div class="banned-item"> <span class="banned-title">我是名字</span> <button>×</button> </div> </div> </div> <div class="page-wrap inactive-page" id="ban_replier_page"> <a class="go-back">返回</a> <div class="plugin-add-ban-up"> <input class="ban-title-input" type="text" maxlength="10" placeholder="输入评论者ID..."/> <input class="ban-item-submit" type="button" value="屏蔽"> </div> <div class="banned-items"> <div class="banned-item"> <span class="banned-title">我是名字</span> <button>×</button> </div> </div> </div> <div class="page-wrap inactive-page" id="ban_keyword_page"> <a class="go-back">返回</a> <div class="plugin-add-ban-up"> <input class="ban-title-input" type="text" maxlength="10" placeholder="输入屏蔽关键词..."/> <input class="ban-item-submit" type="button" value="屏蔽"> </div> <div class="banned-items"> <div class="banned-item"> <span class="banned-title">LOL</span> <button>×</button> </div> </div> </div> <div class="page-wrap inactive-page" id="cloudsync_page"> <a class="go-back">返回</a> <div class="about-page-content"> <div class="cloud-description"> 插件会上传你的屏蔽列表，只要安装插件的浏览器，登录同一个AC帐号都可以同步屏蔽。 </div> <div class="sync-time"></div> <hr> <div> <button id="syncNow">立即同步</button> </div> </div> </div> <div class="page-wrap inactive-page" id="recovery_page"> <a class="go-back">返回</a> <div class="about-page-content"> <div> 2.100版本新功能：已删除评论恢复！<br/> 当你打开投稿，插件会第一时间在本地备份所有看到的评论，当未来某个时间，有评论被删除，插件将会为你恢复。同时本地备份将会在云服务器上共享。只要有一个用户备份过一次被删除的评论，所有用户都会得到分享。<br/> 只要越多人用插件，评论恢复的几率就越高。<br/> </div> <hr> <div> <b></b><span class="cache-info"></span> </div> <div> <button>删除缓存</button> </div> </div> </div> <div class="page-wrap inactive-page" id="general_page"> <a class="go-back">返回</a> <div class="about-page-content"> <div> <label class="cc-container" data-id="showBanButton">在首页的投稿右上角显示[屏蔽]图标按钮 <input type="checkbox" checked="checked"> <span class="checkmark"></span> </label> <label class="cc-container" data-id="showMouseover">在首页鼠标悬停被屏蔽投稿，将显示内容 <input type="checkbox" checked="checked"> <span class="checkmark"></span> </label> <label class="cc-container" data-id="autoSync">自动云同步所有列表 <input type="checkbox" checked="checked"> <span class="checkmark"></span> </label> <label class="cc-container" data-id="showDeletedComment">显示投稿内被删除评论 <input type="checkbox" checked="checked"> <span class="checkmark"></span> </label> <label class="cc-container" data-id="showUserTags">显示评论用户标签 <input type="checkbox" checked="checked"> <span class="checkmark"></span> </label> </div> </div> </div> <div class="page-wrap inactive-page" id="about_page"> <a class="go-back">返回</a> <div class="about-page-content"> 本插件持续更新中：） 只要我有空。 </div> </div> </div> <div style="pointer-events:all" class="ac-girl ac-girl-hide smooth"> </div> </div> </div>';
        const Q = F;
        function G() {
            if ("undefined" === typeof t.g["eventStorage"]) t.g["eventStorage"] = {};
            return t.g["eventStorage"];
        }
        function X() {
            if ("undefined" === typeof t.g["eventCount"]) t.g["eventCount"] = 0;
            t.g["eventCount"]++;
            return t.g["eventCount"];
        }
        const V = {
            on: function(e, n) {
                let t = G();
                if (!(e in t)) t[e] = [];
                let r = X();
                t[e].push({
                    id: r,
                    callback: n
                });
            },
            emit: function(e, n) {
                let t = G();
                if (e in t) {
                    let r = t[e];
                    r.forEach((e => {
                        e.callback(n);
                    }));
                }
            },
            emit1: function(e, n) {
                console.log("emit event", e);
                let t = unsafeWindow.document;
                let r = new CustomEvent(e, {
                    detail: {
                        data: n
                    },
                    bubbles: true,
                    cancelable: false,
                    composed: false
                });
                setTimeout((() => {
                    t.dispatchEvent(r);
                }));
            },
            on1: function(e, n) {
                let t = unsafeWindow.document;
                t.addEventListener(e, (e => {
                    n(e.detail.data);
                }));
            },
            onSpecific: function(e, n, t) {
                e.addEventListener(n, (e => {
                    t(e.detail.data);
                }));
            }
        };
        function K(e, n, r = true, i = true) {
            let o = unsafeWindow.document;
            let a = o.body;
            let l = -1;
            let c = -1;
            t.g.dragging = false;
            let A;
            let s;
            e.addEventListener("pointerdown", (e => {
                l = e.clientX;
                c = e.clientY;
                let r = n.getBoundingClientRect();
                A = r.left;
                s = r.top;
                t.g.dragging = true;
            }));
            a.addEventListener("pointermove", (e => {
                if (t.g.dragging) {
                    let t = e.clientX - l;
                    let o = e.clientY - c;
                    if (r) n.style.left = A + t + "px";
                    if (i) n.style.top = s + o + "px";
                }
            }));
            a.addEventListener("pointerup", (() => {
                t.g.dragging = false;
                let e = n.getBoundingClientRect();
                P.saveUIPosition(e.left, e.y);
            }));
        }
        function j(e, n) {
            let t = {
                up: [ "#ban_up_page", P.loadBanList, _, P.banUser, "UP_BAN_UPDATE" ],
                replier: [ "#ban_replier_page", P.loadReplyBanList, $, P.banReplier, "REPLY_BAN_UPDATE" ],
                keyword: [ "#ban_keyword_page", P.loadKeywords, ee, P.banKeyword, "KEYWORD_BAN_UPDATE" ]
            };
            let r = t[n];
            r[1]((n => {
                let t = e.querySelector(r[0]);
                let i = t.querySelector(".ban-item-submit");
                i.addEventListener("click", (() => {
                    let e = t.querySelector(".ban-title-input");
                    let n = e.value;
                    if (0 === n.length) {
                        e.focus();
                        return;
                    }
                    e.value = "";
                    r[3](n, (() => {
                        V.emit(r[4], null);
                    }));
                }));
                let o = t.querySelector(".banned-items");
                let a = [];
                let l = o.querySelectorAll(".banned-item");
                l.forEach((e => {
                    let t = e.querySelector(".banned-title").innerText;
                    if (n.indexOf(t) >= 0) a.push(t); else e.remove();
                }));
                let c = unsafeWindow.document;
                n.forEach((e => {
                    if (a.indexOf(e) < 0) {
                        let n = c.createElement("div");
                        n.classList.add("banned-item");
                        let t = c.createElement("span");
                        t.classList.add("banned-title");
                        t.innerText = e;
                        let i = c.createElement("button");
                        i.innerText = "×";
                        n.append(t, i);
                        i.addEventListener("click", (n => {
                            r[2](e);
                        }));
                        o.append(n);
                    }
                }));
            }));
        }
        function Z(e) {
            if ("undefined" === typeof e) {
                let n = unsafeWindow.document;
                e = n.body.querySelector("#helperUI");
            }
            j(e, "up");
        }
        function z(e) {
            if ("undefined" === typeof e) {
                let n = unsafeWindow.document;
                e = n.body.querySelector("#helperUI");
            }
            j(e, "replier");
        }
        function J(e) {
            if ("undefined" === typeof e) {
                let n = unsafeWindow.document;
                e = n.body.querySelector("#helperUI");
            }
            j(e, "keyword");
        }
        function _(e) {
            P.unbanUser(e, (e => {
                V.emit("UP_BAN_UPDATE", e);
            }));
        }
        function $(e) {
            P.unbanReplier(e, (e => {
                V.emit("REPLY_BAN_UPDATE", e);
            }));
        }
        function ee(e) {
            P.unbanKeyword(e, (e => {
                V.emit("KEYWORD_BAN_UPDATE", e);
            }));
        }
        function ne(e, n, t) {
            P.loadGeneralSetting((r => {
                r[e] = n;
                P.saveGeneralSetting(r, t);
            }));
        }
        function te(e) {
            e.querySelectorAll(".cc-container").forEach((e => {
                e.addEventListener("change", (e => {
                    let n = e.currentTarget;
                    let t = n.getAttribute("data-id");
                    let r = n.querySelector("input").checked;
                    ne(t, r, (() => {
                        V.emit("SETTING_CHANGE_" + t, r);
                    }));
                }));
            }));
        }
        function re(e) {
            let n = {
                bannedAuthours: [ "#ban_up_page" ],
                bannedRepliers: [ "#ban_replier_page" ],
                bannedKeywords: [ "#ban_keyword_page" ],
                cloudsync: [ "#cloudsync_page" ],
                commentRecovery: [ "#recovery_page" ],
                generalSetting: [ "#general_page" ],
                aboutme: [ "#about_page" ]
            };
            let t = [];
            Object.keys(n).forEach((r => {
                t.push(r);
                e.querySelector("#" + r).addEventListener("click", (() => {
                    let t = n[r][0];
                    e.querySelector(t).classList.remove("inactive-page");
                }));
            }));
            for (let t in n) {
                let r = n[t][0];
                e.querySelector(r).querySelector("a.go-back").addEventListener("click", (() => {
                    e.querySelector(r).classList.add("inactive-page");
                }));
            }
            let r = e.querySelector(".helper-main");
            let i = e.querySelector(".ac-girl");
            i.addEventListener("click", (() => {
                if (!r.classList.contains("ui-hidden")) r.classList.add("ui-hidden"); else r.classList.remove("ui-hidden");
            }));
            let o = e.querySelector("#hide_hint");
            o.addEventListener("click", (() => {
                r.classList.add("ui-hidden");
            }));
        }
        function ie(e) {
            function n(e) {
                let n = new Date(1e3 * e);
                let t = [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ];
                let r = n.getFullYear();
                let i = t[n.getMonth()];
                let o = n.getDate();
                let a = n.getHours();
                let l = n.getMinutes();
                let c = n.getSeconds();
                let A = r + "年" + i + o + "日 " + a + ":" + l + ":" + c;
                return A;
            }
            P.getUpdateTime((t => {
                e.querySelector(".sync-time").innerText = "上次同步时间：" + n(t);
            }));
        }
        function oe(e) {
            P.getAllCacheIndices((n => {
                let t = n.length;
                e.querySelector(".cache-info").innerText = `已缓存${t}篇投稿评论`;
            }));
        }
        function ae(e) {
            V.on("UP_BAN_UPDATE", (() => {
                Z();
            }));
            V.on("REPLY_BAN_UPDATE", (() => {
                z();
            }));
            V.on("KEYWORD_BAN_UPDATE", (() => {
                J();
            }));
            V.on("SYNC_TIME_UPDATE", (() => {
                ie(e);
            }));
            V.on("COMMENT_CACHE_UPDATE", (() => {
                oe(e);
            }));
            e.querySelector("#syncNow").addEventListener("click", (() => {
                V.emit("SYNC_NOW", null);
            }));
        }
        function le(e) {
            let n = e.querySelector(".ac-girl");
            n.classList.remove("ac-girl-hide");
            let t = unsafeWindow.document.body.querySelector("#helperUI");
            K(n, t, false);
        }
        function ce(e) {
            e.querySelector(".plugin-version").innerText = "版本：" + P.version;
        }
        function Ae(e) {
            oe(e);
        }
        function se(e) {
            P.loadUIPosition((n => {
                e.style.top = n.y + "px";
                e.style.left = n.x + "px";
            }));
            ae(e);
            te(e);
            Z(e);
            z(e);
            J(e);
            re(e);
            ce(e);
            Ae(e);
            le(e);
        }
        const de = {
            state: "MENU",
            showSettingUI() {
                let e = unsafeWindow.document;
                e.body.insertAdjacentHTML("beforeend", Q);
                let n = e.body.querySelector("#helperUI");
                se(n);
            }
        };
        var ue = '<div class="sub-ui-wrap"> <div class="sub-ui-inner sub-ui-normal"> <div class="sub-ui-text"> 正 常 </div> <div id="banUp" class="sub-ui-button sub-ui-text smooth"> </div> <div id="unbanUp" class="sub-ui-button sub-ui-text remove smooth"> </div> </div> </div>';
        const fe = ue;
        function pe() {
            V.on("UP_BAN_UPDATE", (() => {
                we();
            }));
            let e = unsafeWindow.document;
            let n = e.querySelector(".sub-ui-inner");
            let t = n.querySelector("#banUp");
            let r = n.querySelector("#unbanUp");
            t.addEventListener("click", (() => {
                P.banUser(he(e));
                V.emit("UP_BAN_UPDATE", null);
            }));
            r.addEventListener("click", (() => {
                P.unbanUser(he(e));
                V.emit("UP_BAN_UPDATE", null);
            }));
        }
        function me() {
            let e = unsafeWindow.document;
            let n = e.querySelector(".sub-ui-inner");
            n.classList.remove("sub-ui-normal");
            n.classList.add("sub-ui-banned");
            let t = n.querySelector(".sub-ui-text");
            t.innerText = "已屏蔽";
            let r = n.querySelector("#banUp");
            let i = n.querySelector("#unbanUp");
            r.classList.add("remove");
            i.classList.remove("remove");
        }
        function ge() {
            let e = unsafeWindow.document;
            let n = e.querySelector(".sub-ui-inner");
            n.classList.add("sub-ui-normal");
            n.classList.remove("sub-ui-banned");
            let t = n.querySelector(".sub-ui-text");
            t.innerText = "正  常";
            let r = n.querySelector("#banUp");
            let i = n.querySelector("#unbanUp");
            r.classList.remove("remove");
            i.classList.add("remove");
        }
        function we() {
            let e = unsafeWindow.document;
            let n = he(e);
            P.loadBanList((e => {
                if (e.indexOf(n) >= 0) me(); else ge();
            }));
        }
        function he(e) {
            let n;
            let t = r();
            if ("VIDEO" === t) n = e.querySelector(".up-info .up-name"); else n = e.querySelector(".up-name a");
            o(n);
            return n.innerText;
        }
        function ve() {
            let e = unsafeWindow.document;
            e.body.insertAdjacentHTML("beforeend", fe);
            let n = e.querySelector(".container-video");
            if (n) n.classList.add("on-top");
        }
        const be = {
            loadUI() {
                ve();
                pe();
            }
        };
        function xe(e) {
            if ("contentData" in e.dom) e = e.dom["contentData"];
            if (!("originalHeight" in e)) {
                let n = e.dom.getBoundingClientRect();
                e["originalHeight"] = n.height;
            }
            e.dom.style.height = e.originalHeight + "px";
            e.dom.classList.add("smooth");
            setTimeout((() => {
                e.dom.classList.add("banned-article");
            }));
            setTimeout((() => {}), 500);
            e["hidden"] = true;
        }
        function ye(e) {
            e.dom.classList.add("smooth");
            e.dom.classList.add("banned-page-item");
            if (t.g["showMouseover"]) e.dom.classList.add("hover-show"); else e.dom.classList.remove("hover-show");
            e["hidden"] = true;
        }
        function Ee(e) {
            e.dom.classList.remove("banned-page-item");
            e["hidden"] = false;
        }
        function Ce(e) {
            e.dom.classList.remove("banned-article");
            e.dom.classList.remove("remove");
            e["hidden"] = false;
        }
        function Te(e) {
            if ("contentData" in e.dom) e = e.dom["contentData"];
            if ("ARTICLE" === e.type) xe(e); else ye(e);
        }
        function De(e) {
            if ("contentData" in e.dom) e = e.dom["contentData"];
            if ("ARTICLE" === e.type) Ce(e); else Ee(e);
        }
        function Ie(e) {
            P.unbanReplier(e, (e => {
                V.emit("REPLY_BAN_UPDATE");
            }));
        }
        function Le(e) {
            let n = H.getCommentType();
            let t = unsafeWindow.document.createElement("div");
            t.append(...e.dom.childNodes);
            t.classList.add("remove");
            t.classList.add("block-mark");
            let r = unsafeWindow.document.createElement("div");
            r.classList.add("banned-text");
            r.innerText = "已屏蔽[" + e.username + "]的发言。";
            let i = unsafeWindow.document.createElement("a");
            i.classList.add("unban-replier-btn");
            i.innerText = "取消屏蔽";
            i.addEventListener("click", (() => {
                Ie(e.username);
            }));
            r.appendChild(i);
            e.dom.appendChild(t);
            e.dom.appendChild(r);
            e["container"] = t;
            e.dom["bannedData"] = e;
            e.hidden = true;
        }
        function Be(e) {
            if (!e.dom.hasOwnProperty("bannedData")) return;
            let n = e.dom["bannedData"];
            if (!n.hidden) return;
            e.dom.append(...n.container.childNodes);
            e.dom.querySelector(".banned-text").remove();
            n.container.remove();
            n.hidden = false;
        }
        function Se(e) {
            P.loadReplyBanList((n => {
                if (null !== n) e.forEach((e => {
                    if (n.indexOf(e.username) >= 0) if (e.dom.hasOwnProperty("bannedData")) {
                        if (!e.dom["bannedData"].hidden) Le(e);
                    } else Le(e); else Be(e);
                }));
            }));
        }
        function Me(e) {
            P.loadBanList((n => {
                P.loadKeywords((t => {
                    e.forEach((e => {
                        let r = false;
                        if (n.indexOf(e.username) >= 0) {
                            Te(e);
                            r = true;
                        }
                        t.forEach((n => {
                            if (e.title.indexOf(n) >= 0) {
                                Te(e);
                                r = true;
                            }
                        }));
                        if (!r) De(e);
                    }));
                }));
            }));
        }
        function We(e) {}
        function Oe(e) {
            P.banReplier(e, (e => {
                V.emit("REPLY_BAN_UPDATE", null);
            }));
        }
        function ke(e, n) {
            let t = unsafeWindow.document.createElement("span");
            t.innerText = "屏蔽";
            t.classList.add("area-comment-block");
            t.addEventListener("click", (() => {
                n(e);
            }));
            e.banButtonAnchor.insertAdjacentElement("afterend", t);
        }
        function Pe(e, n) {
            let t = unsafeWindow.document.createElement("a");
            t.innerText = "屏蔽";
            t.addEventListener("click", (() => {
                n(e);
            }));
            e.banButtonAnchor.insertAdjacentElement("afterend", t);
        }
        function qe() {
            let e = unsafeWindow.document;
            let n = e.createElement("div");
            n.classList.add("filter-button");
            e.body.appendChild(n);
            n.style.visibility = "hidden";
            n.addEventListener("click", (e => {
                let n = unsafeWindow["banButton"].activeData;
                let t = n.username;
                P.banUser(t, (e => {
                    V.emit("UP_BAN_UPDATE", null);
                }));
            }));
            unsafeWindow["banButton"] = {
                dom: n,
                activeDom: null,
                activeData: null
            };
            let t = () => {
                unsafeWindow["banButton"].dom.style.visibility = "hidden";
                unsafeWindow["banButton"].activeDom = null;
                unsafeWindow["banButton"].activeData = null;
                unsafeWindow["banButton"].active = false;
            };
            e.addEventListener("pointermove", (e => {
                if (null !== unsafeWindow["banButton"].activeDom && unsafeWindow["banButton"].active) {
                    let n = unsafeWindow["banButton"].activeDom.getBoundingClientRect();
                    if (e.clientX < n.left || e.clientX > n.right || e.clientY < n.top || e.clientY > n.bottom) t();
                }
            }));
            e.addEventListener("scroll", (e => {
                t();
            }));
        }
        function Ue() {
            let e = unsafeWindow.document;
            let n = "<style>" + i.Z[0][1] + "</style>";
            e.head.insertAdjacentHTML("beforeend", n);
        }
        function Ne() {
            qe();
            de.showSettingUI();
        }
        function Re() {
            be.loadUI();
            de.showSettingUI();
        }
        function Ye() {
            V.on("FILTER_COMMENTS", (e => {
                Se(e);
            }));
            V.on("FILTER_PAGE_CONTENTS", (e => {
                Me(e);
            }));
            V.on("SHOW_COMMENT_TAGS", (e => {
                We(e);
            }));
            V.on("SETTING_CHANGE_showMouseover", (e => {
                o("mouseovershow", e);
                t.g["showMouseover"] = e;
                V.emit("UP_BAN_UPDATE", null);
            }));
        }
        function He() {
            P.loadGeneralSetting((e => {
                t.g["showMouseover"] = e.showMouseover;
            }));
        }
        const Fe = {
            loadUI(e) {
                He();
                Ye();
                Ue();
                if ("HOME" === e || "VIDEO_HOME" === e || "ARTICLE_HOME" === e) Ne(); else if ("VIDEO" === e || "ARTICLE" === e) Re();
            },
            attachBanButton(e) {
                let n = unsafeWindow["banButton"];
                e.addEventListener("pointermove", (t => {
                    P.loadGeneralSetting((t => {
                        if (t.showBanButton) if (n.activeDom !== e && !n.active) {
                            if (e["contentData"]["hidden"]) return;
                            n.activeDom = e;
                            let t = e.getBoundingClientRect();
                            n.dom.style.left = t.right - 20 + "px";
                            n.dom.style.top = t.top + "px";
                            n.dom.style.visibility = "visible";
                            n.activeData = e["contentData"];
                            n.active = true;
                        }
                    }));
                }));
            },
            attachBanCommentButton(e) {
                let n = H.getCommentType();
                if ("NEW" === n) ke(e, (() => {
                    Oe(e.username);
                })); else Pe(e, (() => {
                    Oe(e.username);
                }));
            }
        };
        function Qe(e) {
            let n = e.querySelectorAll(".monkey-video");
            let t = [];
            n.forEach((e => {
                let n = e.getAttribute("data-title");
                let r = e.querySelector(".monkey-up-name");
                let i = r.innerText.substring(3).trim();
                t.push({
                    title: n,
                    username: i,
                    dom: e,
                    type: "VIDEO"
                });
            }));
            return t;
        }
        function Ge(e) {
            let n = e.querySelectorAll(".recommend-video");
            let t = [];
            n.forEach((e => {
                let n = e.querySelector(".video-title").innerText;
                let r = e.querySelector(".normal-mask-title");
                let i = r.nextElementSibling;
                let o = i.innerText.substring(3).trim();
                t.push({
                    title: n,
                    username: o,
                    dom: e,
                    type: "VIDEO"
                });
            }));
            return t;
        }
        function Xe(e) {
            let n = e.querySelectorAll(".banana-video");
            let t = [];
            n.forEach((e => {
                let n = e.querySelector(".banana-video-title");
                let r = n.innerText;
                let i = e.querySelector(".banana-up-name");
                let o = i.getAttribute("title");
                t.push({
                    title: r,
                    username: o,
                    dom: e,
                    type: "VIDEO"
                });
            }));
            return t;
        }
        function Ve(e) {
            let n = e.querySelectorAll(".live-video");
            let t = [];
            n.forEach((e => {
                let n = e.getAttribute("data-title");
                let r = e.querySelector(".live-video-up-name");
                let i = r.innerText.substring(3).trim();
                t.push({
                    title: n,
                    username: i,
                    dom: e,
                    type: "VIDEO"
                });
            }));
            return t;
        }
        function Ke(e) {
            let n = e.querySelectorAll(".normal-video");
            let t = [];
            n.forEach((e => {
                let n = e.querySelector(".normal-video-title");
                let r = n.innerText;
                let i = n.getAttribute("title");
                let o = /UP:(.+)/;
                let a = o.exec(i)[1].trim();
                t.push({
                    title: r,
                    username: a,
                    dom: e,
                    type: "VIDEO"
                });
            }));
            return t;
        }
        function je(e) {
            let n = e.querySelectorAll(".list-content-videos .log-item");
            let t = [];
            n.forEach((e => {
                let n = e.querySelector(".video-title");
                let r = n.innerText;
                let i = n.getAttribute("title");
                let o = /UP:(.+)/;
                let a = o.exec(i)[1].trim();
                t.push({
                    title: r,
                    username: a,
                    dom: e,
                    type: "VIDEO"
                });
            }));
            return t;
        }
        function Ze(e) {
            let n = e.querySelectorAll(".slider-small-item");
            let t = [];
            n.forEach((e => {
                let n = e.querySelector(".slider-title").firstChild;
                let r = n.innerText;
                let i = n.nextElementSibling.firstChild;
                let o = i.innerText.substring(3).trim();
                t.push({
                    title: r,
                    username: o,
                    dom: e,
                    type: "VIDEO"
                });
            }));
            return t;
        }
        function ze(e) {
            let n = e.querySelectorAll("figure.video-item");
            let t = [];
            n.forEach((e => {
                let n = e.querySelector("a[title]");
                let r = n.innerText;
                let i = n.getAttribute("title");
                let o = /UP:(.+)/;
                let a = o.exec(i)[1].trim();
                t.push({
                    title: r,
                    username: a,
                    dom: e,
                    type: "VIDEO"
                });
            }));
            return t;
        }
        function Je(e) {
            let n = e.querySelectorAll(".list-content-item");
            let t = [];
            n.forEach((e => {
                let n = e.querySelector(".list-content-title");
                let r = n.innerText;
                let i = n.getAttribute("title");
                let o = e.querySelector(".list-content-uplink");
                let a = o.innerText.substring(3).trim();
                t.push({
                    title: r,
                    username: a,
                    dom: e,
                    type: "VIDEO"
                });
            }));
            return t;
        }
        function _e(e) {
            let n = e.querySelectorAll(".rank-list li");
            let t = [];
            n.forEach((e => {
                let n = e.querySelector("b.title a");
                let r = n.innerText;
                let i = n.getAttribute("title");
                let o = /UP:(.+)/;
                let a = o.exec(i)[1].trim();
                t.push({
                    title: r,
                    username: a,
                    dom: e,
                    type: "VIDEO"
                });
            }));
            return t;
        }
        function $e(e) {
            let n = e.querySelector(".article-tab");
            if (null == n) return [];
            let t = n.querySelectorAll("li[data-atomid]");
            let r = [];
            t.forEach((e => {
                var n, t;
                var i;
                let o = e.querySelector(".main-content-block");
                if (null != o) i = o.querySelector("p.block-title"); else i = e.querySelector("a.main-content-item");
                t = i.innerText;
                let a = i.getAttribute("title");
                let l = /UP:(.+)/;
                n = l.exec(a)[1].trim();
                r.push({
                    title: t,
                    username: n,
                    dom: e,
                    type: "ARTICLE"
                });
            }));
            return r;
        }
        function en(e) {
            let n = e.querySelectorAll(".article-item");
            let t = [];
            n.forEach((e => {
                let n = e.querySelector("a[title]");
                let r = n.innerText;
                let i = e.querySelector("span.up a");
                let o = i.innerText.substring(3).trim();
                t.push({
                    title: r,
                    username: o,
                    dom: e,
                    type: "ARTICLE"
                });
            }));
            return t;
        }
        function nn(e) {
            function n(e) {
                P.loadBanList(e);
            }
            function t(e) {
                P.loadKeywords(e);
            }
            function r(e, n) {
                let t = [ Qe, Ve, je, Ge, Ke, $e, Xe ];
                let r = [ ze, Je, _e, Ze ];
                let i = [ en ];
                let o = [];
                if ("HOME" === e) o = t; else if ("VIDEO_HOME" === e) o = r; else if ("ARTICLE_HOME" === e) o = i;
                let a = [];
                o.forEach((e => {
                    let t = e(n);
                    a = a.concat(t);
                }));
                return a;
            }
            function i(n) {
                if ("undefined" === typeof n || null == n) n = unsafeWindow.document;
                let t = r(e, n);
                a(t);
                V.emit("FILTER_PAGE_CONTENTS", t);
            }
            function o() {
                let e = new MutationObserver((function(e) {
                    e.forEach((function(e) {
                        let n = e.target;
                        if ("DIV" === n.tagName) setTimeout((() => {
                            i(n);
                        }), 500);
                    }));
                }));
                e.observe(unsafeWindow.document, {
                    subtree: true,
                    childList: true
                });
            }
            function a(e) {
                e.forEach((e => {
                    if (!("contentData" in e.dom)) {
                        e.dom["contentData"] = e;
                        Fe.attachBanButton(e.dom);
                    }
                }));
            }
            function l() {
                V.on("UP_BAN_UPDATE", (() => {
                    i();
                }));
                V.on("KEYWORD_BAN_UPDATE", (() => {
                    i();
                }));
            }
            o();
            l();
            setTimeout(i, 2e3);
        }
        var tn = '<div class="tagging-ui-container smooth-remove"> <div class="tagging-close-button very-smooth">×</div> <div class="tagging-ui-inner"> <div class="name-to-tag">XXX的标签</div> <div class="tagging-input-wrap"> <input placeholder="...多个标签用空格分开,最多10字" maxlength="10" class="tagging-input"> <button class="tagging-submit very-smooth">添加</button> </div> <div class="tags-container"> </div> </div> </div>';
        const rn = tn;
        function on(e) {
            let n = unsafeWindow.document;
            let t = n.createElement("div");
            t.classList.add("user-tag");
            let r = n.createElement("div");
            r.classList.add("user-tag-text");
            r.innerText = e;
            t.appendChild(r);
            return t;
        }
        function an() {
            let e = unsafeWindow.document;
            let n = e.createElement("div");
            n.innerText = "＋标签";
            n.classList.add("add-new-tag");
            n.classList.add("very-smooth");
            return n;
        }
        function ln(e, n) {
            let t = on(n);
            e.appendChild(t);
        }
        function cn(e, n) {}
        function An(e) {
            let n = unsafeWindow.document;
            let r = t.g["taggingUI"].querySelector(".tags-container");
            r.innerHTML = "";
            P.getTags(e, (t => {
                t.forEach((t => {
                    let i = n.createElement("span");
                    i.classList.add("tag-item");
                    i.innerText = t;
                    i.onclick = () => {
                        xn(e, t, (() => {
                            V.emit("TAGS_UPDATE", e);
                            An(e);
                        }));
                    };
                    r.append(i);
                }));
            }));
        }
        function sn(e) {
            let n = t.g["taggingUI"];
            n.classList.remove("smooth-remove");
            n.querySelector(".name-to-tag").innerText = "[" + e + "]的标签";
            let r = t.g["taggingUI"].querySelector(".tags-container");
            while (r.firstChild) r.firstChild.remove();
            An(e);
            n.querySelector(".tagging-submit").onclick = () => {
                let t = n.querySelector(".tagging-input");
                let r = t.value.trim();
                t.value = "";
                if (r.length > 0) bn(e, r, (() => {
                    V.emit("TAGS_UPDATE", e);
                    An(e);
                }));
            };
        }
        function dn(e, n) {
            let t = unsafeWindow.document;
            let r = t.createElement("div");
            r.classList.add("user-tags");
            let i = an();
            P.getTags(e, (t => {
                t.forEach((e => {
                    let n = on(e);
                    r.appendChild(n);
                }));
                n.insertAdjacentElement("afterend", r);
                i.addEventListener("click", (() => {
                    sn(e);
                }));
                r.appendChild(i);
            }));
        }
        function un(e, n) {
            let t = n.parentElement.querySelector(".user-tags");
            t.querySelectorAll(".user-tag").forEach((e => {
                e.remove();
            }));
            let r = t.querySelector(".add-new-tag");
            P.getTags(e, (e => {
                e.forEach((e => {
                    let n = on(e);
                    t.insertBefore(n, r);
                }));
            }));
            P.loadGeneralSetting((e => {
                if (!e.showUserTags) t.classList.add("remove"); else t.classList.remove("remove");
            }));
        }
        function fn(e) {
            e.forEach((e => {
                let n = e.nameAnchor;
                if ("undefined" === typeof n["tagShown"]) {
                    n["tagShown"] = true;
                    dn(e.username, n);
                } else un(e.username, n);
            }));
        }
        function pn() {
            let e = unsafeWindow.document;
            let n = e.querySelector("a.up-name");
            if (!n) n = e.querySelector("a.upname");
            if (!n) o("UP name not found!");
            let r = n.innerText;
            n = n.nextSibling;
            if (t.g["authorTagAdded"]) un(r, n.parentElement); else dn(r, n.parentElement);
            t.g["authorTagAdded"] = true;
        }
        t.g["currentCommentData"] = [];
        function mn(e) {
            t.g["currentCommentData"] = e;
            fn(e);
            pn();
        }
        function gn(e) {
            let n = unsafeWindow.document;
            if (!e) n.querySelectorAll(".user-tags").forEach((e => {
                e.classList.add("remove");
            })); else n.querySelectorAll(".user-tags").forEach((e => {
                e.classList.remove("remove");
            }));
        }
        function wn() {
            V.on("SHOW_COMMENT_TAGS", fn);
            V.on("REFRESH_TAGS", mn);
            V.on("SETTING_CHANGE_showUserTags", gn);
        }
        function hn() {
            t.g["taggingUI"].classList.add("smooth-remove");
        }
        function vn() {
            unsafeWindow.document.body.insertAdjacentHTML("beforeend", rn);
            let e = unsafeWindow.document.body.lastChild;
            t.g["taggingUI"] = e;
            let n = e.querySelector(".tagging-close-button");
            n.addEventListener("click", hn);
        }
        function bn(e, n, t) {
            P.addTagToUser(e, n, (() => {
                if (t) t();
            }));
        }
        function xn(e, n, t) {
            P.removeTagForUser(e, n, (() => {
                V.emit("REMOVE_TAG", [ e, n ]);
                if (t) t();
            }));
        }
        function yn() {}
        const En = {
            addTags(e, n, t) {
                P.addTagToUser(e, n, (() => {
                    V.emit("ADD_TAGS", [ e, n ]);
                    if (t) t();
                }));
            },
            addTag(e, n, t) {
                bn(e, n, t);
            },
            delteTag(e, n, t) {
                xn(e, n, t);
            },
            getTags(e, n) {
                P.getTags(e, n);
            },
            getAllTags(e) {
                P.getAlltags(e);
            },
            init() {
                vn();
                wn();
                pn();
                t.g["taggedComments"] = {};
            }
        };
        var Cn = '<div class="deleted-comments-container remove"> <div class="deleted-comments-inner"> <div class="deleted-comments-title">被删除楼层<div class="hide-btn">隐藏未收录</div></div> <div class="deleted-comment-list"> </div> </div> </div>';
        const Tn = Cn;
        var Dn = '<div class="comment-info"> <div class="comment-floor">35</div> <div class="comment-query-state">查询中……</div> <div class="comment-username remove"></div> </div> <div class="comment-content remove"> <div class="comment-text">评论已删除</div> <div class="comment-time">2021-10-18 12:21:01</div> </div>';
        const In = Dn;
        var Ln = function(e) {
            var n = 0, t = 0;
            do {
                n += e.offsetTop || 0;
                t += e.offsetLeft || 0;
                e = e.offsetParent;
            } while (e);
            return {
                top: n,
                left: t
            };
        };
        function Bn() {
            let e = new MutationObserver((function(e) {
                e.forEach((function(e) {
                    let n = e.target;
                    if ("DIV" === n.tagName) setTimeout((() => {
                        Sn();
                    }), 0);
                }));
            }));
            e.observe(unsafeWindow.document, {
                subtree: true,
                childList: true
            });
        }
        function Sn() {
            let e = unsafeWindow.document;
            let n = e.querySelector("#main");
            let t = n.querySelector(".ac-comment-list");
            if (!t) return;
            let r = t.getBoundingClientRect();
            let i = Ln(t);
            let o = e.body.querySelector(".deleted-comments-container");
            o.style.top = i.top + "px";
            o.style.left = i.left + r.width + 30 + "px";
            let a = Math.max(t.scrollHeight, t.offsetHeight);
            o.style.height = `${a - 100}px`;
        }
        function Mn(e) {
            let n = !unsafeWindow["hideUnrecovered"];
            unsafeWindow["hideUnrecovered"] = n;
            if (n) e.querySelectorAll(".deleted-comment").forEach((e => {
                if (!e["data"]) e.classList.add("remove");
            })); else e.querySelectorAll(".deleted-comment").forEach((e => {
                e.classList.remove("remove");
            }));
        }
        function Wn(e) {
            let n = unsafeWindow.document;
            let t = n.body.querySelector(".deleted-comments-container");
            unsafeWindow["deletedCommentsUI"] = t;
            t.classList.remove("remove");
            e.deletedFloors.forEach((e => {
                let r = n.createElement("DIV");
                r.classList.add("deleted-comment");
                r.insertAdjacentHTML("afterbegin", In);
                r.querySelector(".comment-floor").innerText = "#" + e;
                r["floor"] = e;
                t.querySelector(".deleted-comment-list").appendChild(r);
            }));
            let r = n.querySelector(".area.recommendation");
            if (r) {
                r.style.maxHeight = "800px";
                r.style.overflowX = "hidden";
                r.style.overflowY = "scroll";
            }
            let i = n.querySelector("#pagelet_newrecommend");
            if (i) {
                i.style.maxHeight = "500px";
                i.style.overflowX = "hidden";
                i.style.overflowY = "scroll";
            }
            let o = n.querySelector(".content.wp.clearfix.area .fr");
            if (o) {
                o.style.maxHeight = "800px";
                o.style.overflowX = "hidden";
                o.style.overflowY = "scroll";
            }
            t.querySelector(".hide-btn").addEventListener("click", (() => {
                Mn(t);
            }));
        }
        function On(e) {
            let n = /\[img=图片\](https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))\[\/img\]/;
            let t = n.exec(e);
            if (t && t.length > 1) {
                let n = t[0];
                let r = t[1];
                let i = `<img src="${r}">`;
                e = e.replace(n, i);
                return On(e);
            } else return e;
        }
        function kn(e) {
            let n = unsafeWindow.document;
            let t = n.body.querySelector(".deleted-comments-container");
            let r = t.querySelectorAll(".deleted-comment");
            r.forEach((n => {
                if (n["floor"] === e.floor) {
                    n["data"] = e;
                    let t = n.querySelector(".comment-username");
                    t.innerText = e.username;
                    t.classList.remove("remove");
                    n.querySelector(".comment-text").innerHTML = On(e.content);
                    n.querySelector(".comment-query-state").classList.add("remove");
                    let r = new Date(e.replyTime);
                    n.querySelector(".comment-time").innerText = r.toLocaleString();
                    n.querySelector(".comment-content").classList.remove("remove");
                }
            }));
        }
        function Pn(e) {
            let n = unsafeWindow.document;
            let t = n.body.querySelector(".deleted-comments-container");
            let r = t.querySelectorAll(".deleted-comment");
            r.forEach((n => {
                if (n["floor"] === e) n.querySelector(".comment-query-state").innerText = "服务器未收录";
            }));
        }
        function qn(e) {
            let n = unsafeWindow.document;
            let t = n.body.querySelector(".deleted-comments-container");
            if (qn) t.classList.remove("remove"); else t.classList.add("remove");
        }
        function Un() {
            V.on("SHOW_DELETED_COMMENT_UI", (e => {
                Wn(e);
            }));
            V.on("FLOOR_RECOVER", (e => {
                kn(e);
            }));
            V.on("NO_SERVER_CACHE", (e => {
                Pn(e);
            }));
            V.on("SETTING_CHANGE_showDeletedComment", (e => {
                qn(e);
            }));
        }
        function Nn() {
            let e = unsafeWindow.document;
            e.body.insertAdjacentHTML("beforeend", Tn);
            unsafeWindow.onresize = Sn;
            Sn();
            Bn();
        }
        const Rn = {
            init() {
                Nn();
                Un();
            }
        };
        const Yn = 1e3;
        const Hn = 60 * Yn;
        const Fn = 60 * Hn;
        const Qn = 24 * Fn;
        let Gn = 1 * Fn;
        function Xn(e, n, t) {
            P.saveCommentCache(e, n, (e => {
                if (t) t(e);
                V.emit("COMMENT_CACHE_UPDATE", n);
            }));
        }
        function Vn(e, n) {
            let t = new unsafeWindow.XMLHttpRequest;
            t.open("GET", e, true);
            t.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            t.onload = function() {
                try {
                    let e = JSON.parse(this.responseText);
                    if (n) n(e);
                } catch (e) {
                    console.error(e);
                    if (n) n(null);
                }
            };
            t.send();
        }
        function Kn() {
            let e = r();
            let n = null;
            if ("VIDEO" === e) {
                let e = unsafeWindow.videoInfo;
                n = e["dougaId"];
            } else {
                let e = unsafeWindow.articleInfo;
                n = e["articleId"];
            }
            return n;
        }
        function jn(e, n, t, r) {
            let i = `https://www.acfun.cn/rest/pc-direct/comment/listByFloor?sourceId=${e}&sourceType=3&page=${n}&pivotCommentId=0&newPivotCommentId=0&t=1638284078529&supportZtEmot=true`;
            Vn(i, (i => {
                if (i) {
                    let o = i.commentIds;
                    o.forEach((e => {
                        e = "c" + e;
                        let n = i.commentsMap[e];
                        if (n.isDelete) return;
                        let t = {
                            username: n.userName,
                            content: n.content,
                            replyTime: n.timestamp,
                            cId: n.cid,
                            floor: n.floor
                        };
                        r[parseInt(n.floor)] = t;
                    }));
                    r["totalCount"] = i.totalCount;
                    let a = i.totalPage;
                    if (n < a) setTimeout((() => {
                        jn(e, n + 1, t, r);
                    }), 500); else t(r);
                }
            }));
        }
        function Zn(e, n) {
            let t = 1;
            let r = `https://www.acfun.cn/rest/pc-direct/comment/listByFloor?sourceId=${e}&sourceType=3&page=${t}&pivotCommentId=0&newPivotCommentId=0&t=1638284078529&supportZtEmot=true`;
            Vn(r, (e => {
                if (e) {
                    let t = "c" + e.commentIds[0];
                    let r = e.commentsMap[t];
                    let i = e.totalCount;
                    n(r, i);
                }
            }));
        }
        function zn(e, n) {
            o(`采集评论，投稿id=${e}`);
            function t(t) {
                let r = {
                    id: e,
                    floors: t,
                    deletedFloors: [],
                    recoveredFloors: [],
                    lastReplyTime: 0,
                    lastCheckTime: +new Date,
                    createTime: 0,
                    floorCount: 0,
                    reportedRecovery: [],
                    queriedFloors: []
                };
                let i = 0;
                Object.keys(r.floors).forEach((e => {
                    let n = r.floors[e].floor;
                    if (n > i) i = n;
                }));
                r.floorCount = t["totalCount"];
                o(`已采集本投稿评论至${i}楼。`);
                for (let e = 1; e <= i; e++) if (!(e in t)) r.deletedFloors.push(e); else {
                    let n = t[e].replyTime;
                    if (n > r.lastReplyTime) r.lastReplyTime = n;
                }
                n(r);
            }
            jn(e, 1, t, {});
        }
        function Jn(e) {
            let n = {
                id: e.id,
                recoveredFloors: [],
                floors: {}
            };
            let t = 0;
            e.recoveredFloors.forEach((r => {
                r = parseInt(r);
                if (e.reportedRecovery.indexOf(r) < 0) {
                    n.recoveredFloors.push(r);
                    let i = e.floors[r];
                    let o = {
                        username: i.username,
                        replyTime: i.replyTime,
                        floor: parseInt(i.floor),
                        cId: parseInt(i.cId),
                        content: i.content
                    };
                    n.floors[r] = o;
                    t++;
                }
            }));
            let r = {
                query: "report_cache",
                cache: n
            };
            if (t > 0) H.apiRequest(r, (n => {
                e.reportedRecovery = e.recoveredFloors.map((e => e));
                Xn(e.id, e);
            }));
        }
        function _n(e, n, t) {
            zn(e, (r => {
                let i = Object.keys(r.floors).map((e => parseInt(e)));
                let a = Math.max(...i);
                for (let e = 1; e <= a; e++) if (e in r.floors && e in n.floors) ; else if (e in r.floors && !(e in n.floors)) ; else if (!(e in r.floors) && e in n.floors) {
                    r.floors[e] = n.floors[e];
                    r.recoveredFloors.push(e);
                }
                if (!n.reportedRecovery) n.reportedRecovery = [];
                r.reportedRecovery = n.reportedRecovery.map((e => e));
                let l = r.deletedFloors.length;
                let c = r.recoveredFloors.length;
                Xn(e, r, (() => {
                    o(r.lastReplyTime);
                    o(`投稿${e}重新缓存完成。${l}个被删除，${c}个被恢复`);
                    t(r);
                    Jn(r);
                }));
            }));
        }
        function $n(e, n) {
            P.getLocalCommentCache(e, (t => {
                if (!t) zn(e, (t => {
                    Xn(e, t, (() => {
                        o("首次收集投稿" + e + `评论完成。发现${t.deletedFloors.length}个评论被删除。`);
                        n(t);
                    }));
                })); else {
                    o("对比评论缓存是否需要更新。");
                    Zn(e, ((r, i) => {
                        let a = parseInt(r.timestamp);
                        let l = parseInt(t.lastReplyTime);
                        if (a !== l || t.floorCount !== i) {
                            o(e + " 投稿缓存需要更新");
                            _n(e, t, n);
                        } else {
                            o("已经缓存到最新评论了。");
                            n(t);
                        }
                    }));
                }
            }));
        }
        function et(e) {
            if (!e) e = () => 0;
            let n = Kn();
            $n(n, e);
        }
        function nt(e) {
            V.emit("SHOW_DELETED_COMMENT_UI", e);
        }
        function tt(e, n) {
            o(`本地可恢复楼层：${e.recoveredFloors.join(" ")}`);
            e.recoveredFloors.forEach((n => {
                let t = e.floors[n];
                V.emit("FLOOR_RECOVER", t);
            }));
            n();
        }
        function rt(e, n) {
            if (0 === e.cached.length) {
                o("服务器没有其他缓存，已同步服务器缓存");
                return;
            }
            e.cached.forEach((e => {
                if (n.recoveredFloors.indexOf(e.floor) < 0) {
                    n.floors[e.floor] = e;
                    n.recoveredFloors.push(e.floor);
                    n.reportedRecovery.push(e.floor);
                }
            }));
            Xn(n.id, n, (() => {
                o("已从服务器更新本投稿缓存。");
            }));
        }
        function it(e) {
            let n = {
                query: "query_floors",
                id: e.id,
                floors: e.deletedFloors.filter((n => e.recoveredFloors.indexOf(n) < 0))
            };
            if (n.floors.length > 0) {
                o("向服务器发出恢复评论的请求");
                H.apiRequest(n, (t => {
                    let r = [];
                    t.cached.forEach((e => {
                        V.emit("FLOOR_RECOVER", e);
                        r.push(e.floor);
                    }));
                    n.floors.forEach((e => {
                        if (r.indexOf(e) < 0) V.emit("NO_SERVER_CACHE", e);
                    }));
                    rt(t, e);
                }));
            }
        }
        function ot(e) {
            tt(e, (() => {
                it(e);
            }));
        }
        function at() {
            P.getAllCacheIndices((e => {
                let n = {
                    query: "active_recover",
                    ids: e
                };
                H.apiRequest(n, (e => {
                    o(`收到服务器恢复需求。${e.result.length}个投稿需要本地数据`, e);
                    let n = e.result;
                    let t = 0;
                    let r = 0;
                    n.forEach(((e, i) => {
                        P.getLocalCommentCache(e._id, (a => {
                            let l = {
                                id: a.id,
                                recoveredFloors: [],
                                floors: {}
                            };
                            let c = 0;
                            e.floors.forEach((e => {
                                if (e in a.floors) {
                                    c++;
                                    let n = a.floors[e];
                                    let t = {
                                        username: n.username,
                                        replyTime: n.replyTime,
                                        floor: parseInt(n.floor),
                                        cId: parseInt(n.cId),
                                        content: n.content
                                    };
                                    l.recoveredFloors.push(e);
                                    l.floors[e] = t;
                                }
                            }));
                            let A = {
                                query: "report_cache",
                                cache: l
                            };
                            if (c > 0) {
                                o("主动恢复评论数据", l);
                                H.apiRequest(A, (e => {
                                    o("恢复结果", e);
                                    a.reportedRecovery = a.recoveredFloors.map((e => e));
                                    Xn(a.id, a);
                                }));
                                t++;
                                r += c;
                            }
                            if (i === n.length - 1) o(`帮助服务器恢复共${t}个投稿和${r}个评论。`);
                        }));
                    }));
                }));
            }));
        }
        function lt() {
            o("主动帮助");
            let e = +new Date;
            P.getActiveHelpTime((n => {
                if (e - Gn > n) {
                    let t = Math.round((e - n) / 1e3);
                    o(`距离上次主动帮助已经${t}秒了`);
                    at();
                    P.setActiveHelpTime(e);
                } else o(`距离上次主动帮助还未足够。`);
            }));
        }
        function ct(e) {
            P.deleteCommentCache(e, (() => {
                o(`删除缓存成功，id=${e}`);
            }));
        }
        function At() {
            P.getAllCacheIndices((e => {
                e.forEach((e => {
                    ct(e);
                }));
            }));
        }
        const st = {
            init() {
                Rn.init();
                let e = r();
                if (!("VIDEO" === e || "ARTICLE" === e)) return;
                unsafeWindow["deleteCache"] = P.deleteCommentCache;
                unsafeWindow["clearCache"] = At;
                et((e => {
                    setTimeout((() => {
                        nt(e);
                        ot(e);
                    }), 1e3);
                }));
                lt();
            }
        };
        function dt(e) {
            let n = [];
            let t = e.querySelectorAll(".fc-comment-item");
            t.forEach((e => {
                let t = e.querySelector("a.name");
                let r = t.innerText;
                let i = e.querySelector("a.btn-report");
                if (null !== i) n.push({
                    username: r,
                    nameAnchor: t.parentNode,
                    banButtonAnchor: i,
                    dom: e
                });
            }));
            return n;
        }
        function ut(e) {
            let n = [];
            let t = e.querySelectorAll(".area-comment-first");
            t.forEach((e => {
                let t = e.querySelector("a.name");
                let r = t.innerText;
                let i = e.querySelector("a.area-comment-reply");
                if (null !== i) n.push({
                    username: r,
                    nameAnchor: t,
                    banButtonAnchor: i,
                    dom: e
                });
            }));
            return n;
        }
        function ft(e) {
            let n = "NEW" === H.getCommentType() ? ut(e) : dt(e);
            return n;
        }
        function pt() {
            function e() {
                V.on("TAGS_UPDATE", (e => {
                    let t = n(unsafeWindow.document);
                    t = t.filter((n => n.username === e));
                    V.emit("REFRESH_TAGS", t);
                }));
                V.on("REPLY_BAN_UPDATE", (() => {
                    r();
                }));
            }
            function n(e) {
                return ft(e);
            }
            function t(e) {
                e.forEach((e => {
                    if (!e.dom.hasOwnProperty("commentData")) {
                        Fe.attachBanCommentButton(e);
                        e.dom["commentData"] = e;
                    }
                }));
            }
            function r() {
                let e = n(unsafeWindow.document);
                V.emit("FILTER_COMMENTS", e);
            }
            function i() {
                let e = new MutationObserver((function(e) {
                    e.forEach((function(e) {
                        if ("childList" === e.type) {
                            let r = e.addedNodes;
                            r.forEach((e => {
                                if ("DIV" === e.tagName && (e.classList.contains("fc-comment-list") || e.classList.contains("ac-comment-hot-list") || e.classList.contains("ac-comment-root-list") || e.hasChildNodes() && "undefined" !== typeof e.firstChild.classList && (e.firstChild.classList.contains("area-comment-top") || e.firstChild.classList.contains("area-comment-sec")))) {
                                    let r = n(e);
                                    V.emit("SHOW_COMMENT_TAGS", r);
                                    t(r);
                                    V.emit("FILTER_COMMENTS", r);
                                    setTimeout((() => {}), 0);
                                }
                            }));
                        }
                    }));
                }));
                e.observe(unsafeWindow.document, {
                    subtree: true,
                    childList: true
                });
            }
            e();
            i();
            En.init();
            st.init();
        }
        function mt(e) {
            nn(e);
        }
        function gt() {
            pt();
        }
        function wt(e) {
            if ("HOME" === e || "VIDEO_HOME" === e || "ARTICLE_HOME" === e) mt(e); else if ("VIDEO" === e || "ARTICLE" === e) gt();
        }
        const ht = 16731600;
        let vt = 0;
        function bt(e) {
            let n = unsafeWindow.ImSdk;
            let t = n.instance;
            let r = "0_" + ht;
            let i = t.kernel.openSession(0, ht);
            i.then((n => {
                let t = n.cachedSession.messages;
                if ("undefined" === typeof t || 0 === t.length) {
                    e(null);
                    return;
                }
                let r = t[t.length - 1].title;
                try {
                    let n = r.split(" ");
                    let i = n[0].split("/");
                    let o = i[1];
                    let a = [];
                    if (o) {
                        o = parseInt(o);
                        for (let e = 0; e < o; e++) {
                            let n = t[t.length - e - 1].title;
                            let r = n.split(" ");
                            let i = r[0].split("/");
                            let o = parseInt(i[0]) - 1;
                            a[o] = r.slice(1).join(" ");
                        }
                    }
                    let l = a.join("");
                    e(l);
                } catch (n) {
                    console.error(n);
                    e(null);
                }
            }));
        }
        function xt(e) {
            if (!"trySyncCount" in unsafeWindow) unsafeWindow["trySyncCount"] = 0;
            unsafeWindow["trySyncCount"]++;
            if (unsafeWindow["trySyncCount"] > 30) return;
            let n = unsafeWindow.ImSdk;
            let t = false;
            try {
                let e = "undefined" === typeof n || "undefined" === typeof n.instance || null == n.instance || !n.instance.connected || "undefined" === typeof n.instance.kernel.cache;
                t = e;
            } catch (e) {
                t = true;
            }
            if (t) {
                o("载入信息。。");
                setTimeout((() => {
                    xt(e);
                }), 1e3);
            } else setTimeout((() => {
                Ct(e);
            }), 0);
        }
        function yt(e) {
            function n(e) {
                return e.replace(/(\r\n|\n|\r)/gm, "").trim();
            }
            let t = decode(e.keywords);
            let r = decode(e.ups);
            let i = "undefined" == typeof e.repliers ? "" : decode(e.repliers);
            let o = r.indexOf(" ") > 0 || t.indexOf(" ") > 0 ? " " : ",";
            let a = t.split(o).map(n);
            let l = r.split(o).map(n);
            let c = i.split(o).map(n);
            a = 1 === a.length && "" === a[0] ? [] : a;
            l = 1 === l.length && "" === l[0] ? [] : l;
            c = 1 === c.length && "" === c[0] ? [] : c;
            P.updateBanList(l, (() => {
                V.emit("UP_BAN_UPDATE", null);
            }));
            P.updateKeywords(a, (() => {
                V.emit("KEYWORD_BAN_UPDATE", null);
            }));
            P.updateReplyBanList(c, (() => {
                V.emit("REPLY_BAN_UPDATE", null);
            }));
            P.setUpdateTime(e.time, (() => {}));
        }
        let Et = null && 30 * 1e3;
        function Ct(e) {
            P.getUpdateTime((e => {
                vt = e;
                bt((n => {
                    if (null === n) ; else {
                        o(n);
                        try {
                            let t = JSON.parse(n);
                            if ("undefined" === typeof t.version || parseFloat(t.version) < parseFloat(P.version)) {
                                o("旧版同步信息发现，重新同步");
                                yt(t);
                            } else if (parseFloat(t.version) > parseFloat(P.version)) o("同步失败：你已经在其他地方使用过更新的版本了。请更新当前屏蔽插件，最新版本：" + t.version); else {
                                t.time = parseInt(decode(t.time));
                                let n = t.time;
                                if (n > e || P.version !== t.version) {
                                    o("Update list");
                                    yt(t);
                                } else if (e > n) o("ImSdk is no longer available. Will try new cloud."); else o("Check done, no update needed", (e - n) / 1e3, t);
                            }
                        } catch (e) {}
                    }
                    P.setUsingNewCloud((() => {
                        o("切换到新服务器。");
                    }));
                    setTimeout(St, 5e3);
                }));
            }));
        }
        function Tt() {
            V.on("SYNC_TIME_UPDATE", (e => {
                if (e && "number" === typeof e && e > 0) P.setUpdateTime(e, (() => {
                    o("更新同步时间", e);
                }));
            }));
            V.on("TAGS_UPDATE", (() => {
                let e = Math.floor(+new Date / 1e3);
                P.setUpdateTime(e, null);
            }));
            V.on("UP_BAN_UPDATE", (() => {
                let e = Math.floor(+new Date / 1e3);
                P.setUpdateTime(e, null);
            }));
            V.on("REPLY_BAN_UPDATE", (() => {
                let e = Math.floor(+new Date / 1e3);
                P.setUpdateTime(e, null);
            }));
            V.on("KEYWORD_BAN_UPDATE", (() => {
                let e = Math.floor(+new Date / 1e3);
                P.setUpdateTime(e, null);
            }));
            V.on("SYNC_NOW", (() => {
                let e = Math.floor(+new Date / 1e3);
                P.setUpdateTime(e, null);
                Ot();
            }));
        }
        function Dt(e, n) {
            H.apiRequest(e, n);
        }
        function It(e, n) {
            let t = {
                name: e,
                query: "checktime"
            };
            Dt(t, n);
        }
        function Lt(e) {
            o("syncFromServer");
            Dt({
                name: e,
                query: "sync"
            }, (e => {
                o("list from new Cloud", e);
                if (e.success) {
                    P.updateBanList(e.uplist);
                    P.updateReplyBanList(e.replylist);
                    P.updateKeywords(e.keywords);
                    V.emit("SYNC_TIME_UPDATE", e.lastsync);
                    V.emit("UP_BAN_UPDATE", null);
                    V.emit("REPLY_BAN_UPDATE", null);
                    V.emit("KEYWORD_BAN_UPDATE", null);
                }
            }));
        }
        let Bt = e => {
            o("成功", e);
        };
        function St() {
            o("检查新服务器");
            P.getUsername((e => {
                o("username=" + e);
                It(e, (n => {
                    P.getUpdateTime((t => {
                        if (n["synctime"] > 0 && t > 500 * n["synctime"]) t /= 1e3;
                        if (n["synctime"] > t) Lt(e); else if (n["synctime"] < t) Mt((e => {
                            console.log("response", e);
                            if (e.success) {
                                o("同步成功");
                                Bt(e);
                                V.emit("SYNC_TIME_UPDATE", e.synctime);
                            }
                        })); else {
                            o("已经与服务器同步。");
                            V.emit("SYNC_TIME_UPDATE", null);
                        }
                    }));
                }));
            }));
        }
        function Mt(e) {
            P.getUsername((n => {
                P.loadBanList((t => {
                    P.loadReplyBanList((r => {
                        P.loadKeywords((i => {
                            P.getAlltags((o => {
                                console.log("username update = ", n);
                                let a = {
                                    name: n,
                                    uplist: t,
                                    replylist: r,
                                    keywords: i,
                                    userTags: o,
                                    query: "update"
                                };
                                Dt(a, e);
                            }));
                        }));
                    }));
                }));
            }));
        }
        function Wt() {
            o("检查同步状态");
            P.isUsingNewCloud((e => {
                o("是否已经使用新服务器", e);
                if (!e) {
                    o("并未使用新服务器");
                    P.getUpdateTime((e => {
                        o("检查本地同步时间 time=", e);
                        if (0 === e || isNaN(e)) {
                            o("没有发现本地记录,首先检查旧服务");
                            xt();
                        } else {
                            o("发现本地记录，未曾使用新服务器，尝试同步本地信息到新服务器");
                            Mt((e => {
                                if (e.success) {
                                    o("同步成功");
                                    P.setUpdateTime(e.lastsync, Bt);
                                    V.emit("SYNC_TIME_UPDATE", e.lastsync);
                                    P.setUsingNewCloud((() => {}));
                                }
                            }));
                        }
                    }));
                } else {
                    o("正常使用新服务器同步");
                    St();
                }
            }));
        }
        function Ot() {
            if ("undefined" === typeof unsafeWindow.user) {
                setTimeout(Ot, 1e3);
                return;
            }
            if ("用户" === unsafeWindow.user.name) return;
            P.loadGeneralSetting((e => {
                if (e.autoSync) Wt();
            }));
        }
        const kt = {
            init: () => {
                Tt();
            },
            SyncWithCloud: Ot
        };
        function Pt(e, n, t) {
            let r = new Date;
            r.setTime(r.getTime() + 24 * t * 60 * 60 * 1e3);
            const i = "expires=" + r.toUTCString();
            unsafeWindow.document.cookie = e + "=" + n + "; " + i + "; path=/";
        }
        let qt = {};
        qt.x = function() {
            if ("undefined" !== typeof XMLHttpRequest) return new XMLHttpRequest;
            let e = [ "MSXML2.XmlHttp.6.0", "MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp" ];
            let n;
            for (let t = 0; t < e.length; t++) try {
                n = new ActiveXObject(e[t]);
                break;
            } catch (e) {}
            return n;
        };
        qt.send = function(e, n, t, r, i, o) {
            if ("undefined" == typeof o) o = true;
            let a = qt.x();
            a.open(t, e, o);
            a.onreadystatechange = function() {
                if (4 === a.readyState) n(a.responseText);
            };
            if ("POST" === t) a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            if ("undefined" !== typeof i) for (let e in i) a.setRequestHeader(e, i[e]);
            a.send(r);
        };
        qt.get = function(e, n, t, r, i) {
            let o = [];
            for (let e in n) o.push(encodeURIComponent(e) + "=" + encodeURIComponent(n[e]));
            qt.send(e + (o.length ? "?" + o.join("&") : ""), t, "GET", null, r, i);
        };
        qt.post = function(e, n, t, r, i) {
            let o = [];
            for (let e in n) o.push(encodeURIComponent(e) + "=" + encodeURIComponent(n[e]));
            qt.send(e, t, "POST", o.join("&"), r, i);
        };
        function Ut() {
            let e = unsafeWindow.document.cookie;
            let n = /_did=(\w+);/;
            let t = n.exec(e);
            return t[1];
        }
        const Nt = {
            getUDID: Ut,
            feedBanana(e, n, t) {
                let r = Ut();
                if ("undefined" == typeof r) {
                    o("未登陆，无法投蕉！");
                    return;
                }
                let i = btoa(Math.random().toString(36).substr(2));
                Pt("stochastic", i, 1);
                let a = {
                    resourceId: parseInt(e),
                    resourceType: t,
                    count: n
                };
                let l = "https://www.acfun.cn/rest/pc-direct/banana/throwBanana";
                qt.post(l, a, (e => {
                    console.log(e);
                }), {
                    udid: r
                });
            }
        };
        n()();
        let Rt = r();
        o(Rt);
        Fe.loadUI(Rt);
        wt(Rt);
        kt.init();
        kt.SyncWithCloud();
        unsafeWindow.sendBanana = Nt.feedBanana;
        unsafeWindow.getUDID = Nt.getUDID;
    })();
})();