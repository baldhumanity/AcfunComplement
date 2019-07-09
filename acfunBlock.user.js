// ==UserScript==
// @name         Acfun屏蔽计划
// @namespace    http://tampermonkey.net/
// @version      2.010
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
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @run-at      document-idle
// ==/UserScript==


//这只是个代码下载器，用来下载正式的代码，具体想了解代码的人可以自己去看看。
(function(){

    let empty = (a) => {
        return typeof a === "undefined" ? () => {
            console.log("EmptyFunction Called");
            console.trace();
        } : a;
    };
    let GM_set = typeof GM_setValue === "undefined" ?
        function (key, value, callback, failcallback) {
            let p = GM.setValue(key, value);
            p.then(empty(callback), empty(failcallback));


        }
    : function (key, value, callback) {
        let res = GM_setValue(key, value);
        callback();
    };


    let GM_get = typeof GM_getValue === "undefined" ?
        function (key, value, callback) {
            let p = GM.getValue(key, value);
            p.then((debug) => {
                empty(callback)(debug);
            }, () => {
                callback(value);
            });
            //console.log("empty", empty(callback));
        }
    : function (key, value, callback, failcallback) {
        let res = GM_getValue(key, value);
        callback(res);
    };

    let xhttp = typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : GM.xmlHttpRequest;

    //下载代码并运行
    function downloadScript(callback){

        //开源地址
        let url1 =  "https://greasyfork.org/scripts/387296-acfun%E5%B1%8F%E8%94%BD%E8%AE%A1%E5%88%92-%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81/code/Acfun%E5%B1%8F%E8%94%BD%E8%AE%A1%E5%88%92-%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81.user.js";
        //备用开源地址
        let url2 =  "https://github.com/baldhumanity/AcfunComplement/raw/master/acfunBlock-opensource.user.js";
        let fallback = ()=>{
            console.log("下载失败，启用备用链接");
            xhttp({
                method: "GET",
                url:url2,
                onload: function (response) {
                    let text = response.responseText;
                    callback(text);
                },
                onerror(evt) {
                    callback(null);
                }
            });

        }
        xhttp({
            method: "GET",
            url:url1,
            onload: function (response) {
                let text = response.responseText;
                callback(text);
            },
            onerror(evt) {
                fallback();
            }
        });
    }

    function getVersion(s){
        if (s==null || s==="") return 0;
        let p = /@version +(\d+\.\d+)/;
        let arr = p.exec(s);
        let latest = arr[1];
        return parseFloat(latest);
    }

    function Initialise(){
        //Check if script is downloaded;
        GM_get("ACFUN_BLOCK_CODE","", (s)=>{
            let currentVersion = getVersion(s);
            console.log("Current Version = "+currentVersion);
            //如果已经有可用版本，先使用
            if (currentVersion>0){
                eval(s);
            }
            //检查更新
            downloadScript(
                (s)=>{
                    if (s==null) {
                        console.log("ACFUN屏蔽计划载入失败，请不要联系A站插件作者：人文情怀。")
                    }
                    let onlineVersion = getVersion(s);
                    console.log("online Version = "+onlineVersion);
                    //如果有更新
                    if (onlineVersion> currentVersion){
                        //Update code
                        GM_set("ACFUN_BLOCK_CODE", s, ()=>{
                            //Updated, if this is the firsttime running:
                            if (currentVersion==0){
                                //如果没有可用版本，直接运行
                               setTimeout(()=>{
                                eval(s);
                              })
                            }
                        }, ()=>{
                            console.log("ACFUN屏蔽计划缓存代码失败。请不要联系作者。");
                        })
                    }
                })
        })
    }
    function debug(){
         GM_set("ACFUN_BLOCK_CODE", "", ()=>{})
    }
    //debug();
    Initialise();
})();