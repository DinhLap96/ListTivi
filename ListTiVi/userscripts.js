!function(){"use strict";window.trustedTypes&&window.trustedTypes.createPolicy&&!window.trustedTypes.defaultPolicy&&window.trustedTypes.createPolicy("default",{createHTML:t=>t,createScriptURL:t=>t,createScript:t=>t});let t="https://raw.githubusercontent.com/goodtube4u/GoodTube/main",e=500,o=[],n=[{name:"Automatic",type:!1,proxy:!0,url:"automatic"},{name:"Rain (DE)",type:2,proxy:!0,url:"https://youchu.be"},{name:"420 (FI)",type:2,proxy:!0,url:"https://invidious.privacyredirect.com"},{name:"Ra (DE)",type:3,proxy:!0,url:"https://pipedapi.reallyaweso.me"},{name:"Sapphire (IN)",type:3,proxy:!0,url:"https://pipedapi.in.projectsegfau.lt"},{name:"Serpent (US)",type:2,proxy:!0,url:"https://invidious.darkness.services"},{name:"Sphynx (JP)",type:2,proxy:!0,url:"https://invidious.jing.rocks"},{name:"Anubis (INT)",type:3,proxy:!0,url:"https://pipedapi.kavin.rocks"},{name:"Phoenix (US)",type:3,proxy:!0,url:"https://pipedapi.drgns.space"},{name:"Nymph (AT)",type:2,proxy:!0,url:"https://invidious.private.coffee"},{name:"Orchid (DE)",type:3,proxy:!0,url:"https://api.piped.yt"},{name:"Emerald (DE)",type:3,proxy:!0,url:"https://pipedapi.phoenixthrush.com"},{name:"Onyx (FR)",type:2,proxy:!0,url:"https://invidious.fdn.fr"},{name:"360p - Amethyst (DE)",type:1,proxy:!0,url:"https://yt.artemislena.eu"},{name:"360p - Goblin (AU)",type:1,proxy:!1,url:"https://invidious.perennialte.ch"},{name:"360p - Raptor (US)",type:1,proxy:!0,url:"https://invidious.drgns.space"}],r=n[0].type,i=n[0].proxy,a=n[0].url,l=n[0].name,s=0,d=0,u=0,p=["https://invidious.private.coffee","https://invidious.jing.rocks","https://invidious.incogniweb.net","https://invidious.fdn.fr","https://yt.artemislena.eu","https://invidious.perennialte.ch","https://invidious.drgns.space","https://iv.datura.network","https://invidious.protokolla.fi","https://iv.melmac.space","https://invidious.perennialte.ch","https://vid.lilay.dev","https://invidious.drgns.space","https://inv.nadeko.net","https://invidious.projectsegfau.lt"],c=["https://api.cobalt.tools","https://dl.khyernet.xyz","https://api-cobalt.isnubi.fr","https://co-api.vulpine.network","https://nyc1.coapi.ggtyler.dev","https://cobalt.canine.tools","https://api-cobalt.boykisser.systems"];function v(){let t={};if(document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g,(function(){function e(t){return decodeURIComponent(t.split("+").join(" "))}t[e(arguments[1])]=e(arguments[2])})),void 0!==t.list&&void 0===t.v){let e=document.getElementById("movie_player");if(e&&"function"==typeof e.getVideoData){let o=e.getVideoData();void 0!==o.video_id&&o.video_id&&(t.v=o.video_id)}}return t}function m(t,e){document.cookie=t+"="+encodeURIComponent(e)+"; max-age=34473600"}function b(t){let e=document.cookie.split(";");for(let o=0;o<e.length;o++){let n=e[o].split("=");if(t==n[0].trim())return decodeURIComponent(n[1])}return null}function g(t){t&&!t.classList.contains("goodTube_hidden")&&t.classList.add("goodTube_hidden")}function y(t){t&&t.classList.contains("goodTube_hidden")&&t.classList.remove("goodTube_hidden")}function f(t){if(!t.closest(".goodTube_hiddenPlayer")){let e=t.parentNode,o=document.createElement("div");o.classList.add("goodTube_hiddenPlayer"),e.replaceChild(o,t),o.appendChild(t)}}function h(t){if(void 0!==te["goodtube_customserver_"+t]&&"false"===te["goodtube_customserver_"+t]&&(m("goodtube_customserver_"+t+"_name","false"),m("goodtube_customserver_"+t+"_type","false"),m("goodtube_customserver_"+t+"_proxy","false"),m("goodtube_customserver_"+t+"_url","false")),void 0!==te["goodtube_customserver_"+t+"_name"]&&void 0!==te["goodtube_customserver_"+t+"_type"]&&void 0!==te["goodtube_customserver_"+t+"_proxy"]&&void 0!==te["goodtube_customserver_"+t+"_url"]&&(m("goodtube_customserver_"+t+"_name",te["goodtube_customserver_"+t+"_name"]),m("goodtube_customserver_"+t+"_type",te["goodtube_customserver_"+t+"_type"]),m("goodtube_customserver_"+t+"_proxy",te["goodtube_customserver_"+t+"_proxy"]),m("goodtube_customserver_"+t+"_url",te["goodtube_customserver_"+t+"_url"])),b("goodtube_customserver_"+t+"_name")&&"false"!==b("goodtube_customserver_"+t+"_name")){let e=b("goodtube_customserver_"+t+"_name"),o=parseFloat(b("goodtube_customserver_"+t+"_type")),r=b("goodtube_customserver_"+t+"_url"),i=b("goodtube_customserver_"+t+"_proxy");"false"===i?i=!1:"true"===i&&(i=!0),n.splice(1,0,{name:e,type:o,proxy:i,url:r}),console.log("[GoodTube] Custom video server "+t+" enabled ("+e+")")}++t<10&&h(t)}function j(){if(-1!==window.location.href.indexOf("@"))return;document.querySelectorAll("a:not(.goodTube_hidden)").forEach((t=>{-1!==t.href.indexOf("shorts/")&&(g(t),g(t.closest("ytd-video-renderer")),g(t.closest("ytd-compact-video-renderer")),g(t.closest("ytd-rich-grid-media")))}))}function _(){document.querySelectorAll("#description a, ytd-comments .yt-core-attributed-string a, ytm-expandable-video-description-body-renderer a, .comment-content a").forEach((t=>{!t.classList.contains("goodTube_timestampLink")&&t.getAttribute("href")&&-1!==t.getAttribute("href").indexOf(te.v)&&-1!==t.getAttribute("href").indexOf("t=")&&(t.classList.add("goodTube_timestampLink"),t.addEventListener("click",(function(){let e=t.getAttribute("href").split("t=");if(void 0!==e[1]){let t=e[1].replace("s","");ut(Zt,t)}})))}))}function T(){let t=document.getElementById("movie_player");if(t&&"function"==typeof t.setPlaybackQualityRange&&"function"==typeof t.getAvailableQualityData&&"function"==typeof t.getPlaybackQuality){let e=t.getAvailableQualityData(),o=t.getPlaybackQuality();if(e.length&&o){let n=e[e.length-1].quality;o!=n&&t.setPlaybackQualityRange(n,n)}}}function x(){document.querySelectorAll("#player:not(.ytd-channel-video-player-renderer)").forEach((t=>{f(t)})),document.querySelectorAll("#full-bleed-container").forEach((t=>{f(t)})),document.querySelectorAll("#player-control-container").forEach((t=>{g(t)})),document.querySelectorAll("ytd-miniplayer").forEach((t=>{g(t)}))}let w=!1;function k(){if(w)return;let t=!1;if(!$t&&(t=document.querySelector(".ytp-autonav-toggle-button"),t)){if("false"===t.getAttribute("aria-checked"))return void(w=!0);t.click()}}let S=!1,L=0;function A(){let t=document.querySelector("#movie_player video");if(t&&E&&(void 0!==te.v||void 0!==te.list)){let e=Zt.currentTime;if(e===L&&parseFloat(e)>0)return;L=e,t.currentTime=e,S=!0,t.play(),t.muted=!0,t.volume=0;let o=document.querySelector("#movie_player");o&&("function"==typeof o.playVideo&&o.playVideo(),"function"==typeof o.mute&&o.mute(),"function"==typeof o.setVolume&&o.setVolume(0)),setTimeout((function(){S=!1}),10)}}function W(){document.querySelectorAll("video:not(#goodTube_player):not(#goodTube_player_html5_api)").forEach((t=>{t.closest("#inline-player")||(t.muted=!0,t.volume=0,S||t.pause())}))}let q=!1,E=!1,C=!1,M=!1,Q=!1,R=!1,z=!1,B=!1,O=!1,D=!1,I=0,P=1,G=0;function F(){console.log("[GoodTube] Loading player..."),function(){let t=document.createElement("style");t.textContent="\n\t\t\t.video-js {\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\n\t\t\t.video-js *:focus {\n\t\t\t\toutline-color: transparent;\n\t\t\t\toutline-style: none;\n\t\t\t}\n\n\t\t\t.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n\t\t\t\ttransition: visibility .25s, opacity .25s !important;\n\t\t\t}\n\n\t\t\t.vjs-menu .vjs-menu-item-text {\n\t\t\t\ttext-transform: none !important;\n\t\t\t}\n\n\t\t\t.vjs-menu .vjs-menu-item-text:first-letter {\n\t\t\t\ttext-transform: uppercase !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-download-button .vjs-icon-placeholder,\n\t\t\t.video-js .vjs-source-button .vjs-icon-placeholder,\n\t\t\t.video-js .vjs-autoplay-button .vjs-icon-placeholder,\n\t\t\t.video-js .vjs-quality-selector .vjs-icon-placeholder,\n\t\t\t.video-js .vjs-prev-button .vjs-icon-placeholder,\n\t\t\t.video-js .vjs-next-button .vjs-icon-placeholder,\n\t\t\t.video-js .vjs-miniplayer-button .vjs-icon-placeholder,\n\t\t\t.video-js .vjs-theater-button .vjs-icon-placeholder {\n\t\t\t\tfont-family: VideoJS;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-style: normal;\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > button {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\n\t\t\t.video-js .vjs-prev-button .vjs-icon-placeholder:before {\n\t\t\t\tcontent: \"\\f124\";\n\t\t\t}\n\n\t\t\t.video-js .vjs-next-button .vjs-icon-placeholder:before {\n\t\t\t\tcontent: \"\\f123\";\n\t\t\t}\n\n\t\t\t.video-js .vjs-download-button .vjs-icon-placeholder:before {\n\t\t\t\tcontent: \"\\f110\";\n\t\t\t}\n\n\n\n\t\t\t// Loading indicator for downloads\n\t\t\t.video-js .vjs-download-button {\n\t\t\t\tposition: relative;\n\t\t\t}\n\n\t\t\t.video-js .vjs-download-button .goodTube_spinner {\n\t\t\t\topacity: 0;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t\ttransition: opacity .4s linear;\n\t\t\t}\n\t\t\t.video-js .vjs-download-button.goodTube_loading .goodTube_spinner {\n\t\t\t\topacity: 1;\n\t\t\t\ttransition: opacity .2s .2s linear;\n\t\t\t}\n\n\t\t\t.video-js .vjs-download-button .vjs-icon-placeholder:before {\n\t\t\t\topacity: 1;\n\t\t\t\ttransition: opacity .2s .2s linear;\n\t\t\t}\n\t\t\t.video-js .vjs-download-button.goodTube_loading .vjs-icon-placeholder:before {\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: opacity .2s linear;\n\t\t\t}\n\n\t\t\t.goodTube_spinner {\n\t\t\t\tcolor: #ffffff;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\t.goodTube_spinner,\n\t\t\t.goodTube_spinner div {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\t\t\t.goodTube_spinner {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 36px;\n\t\t\t\theight: 36px;\n\t\t\t}\n\t\t\t.goodTube_spinner div {\n\t\t\t\tposition: absolute;\n\t\t\t\tborder: 2px solid currentColor;\n\t\t\t\topacity: 1;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tanimation: goodTube_spinner 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n\t\t\t}\n\t\t\t.goodTube_spinner div:nth-child(2) {\n\t\t\t\tanimation-delay: -0.5s;\n\t\t\t}\n\t\t\t@keyframes goodTube_spinner {\n\t\t\t\t0% {\n\t\t\t\t\ttop: 16px;\n\t\t\t\t\tleft: 16px;\n\t\t\t\t\twidth: 4px;\n\t\t\t\t\theight: 4px;\n\t\t\t\t\topacity: .5;\n\t\t\t\t}\n\t\t\t\t4.9% {\n\t\t\t\t\ttop: 16px;\n\t\t\t\t\tleft: 16px;\n\t\t\t\t\twidth: 4px;\n\t\t\t\t\theight: 4px;\n\t\t\t\t\topacity: .5;\n\t\t\t\t}\n\t\t\t\t5% {\n\t\t\t\t\ttop: 16px;\n\t\t\t\t\tleft: 16px;\n\t\t\t\t\twidth: 4px;\n\t\t\t\t\theight: 4px;\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 36px;\n\t\t\t\t\theight: 36px;\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\n\n\n\t\t\t.video-js .vjs-source-button .vjs-icon-placeholder:before {\n\t\t\t\tcontent: \"\\f10e\";\n\t\t\t}\n\n\t\t\t.video-js .vjs-autoplay-button .vjs-icon-placeholder:before {\n\t\t\t\tcontent: \"\\f102\";\n\t\t\t}\n\n\t\t\t.video-js .vjs-quality-selector .vjs-icon-placeholder:before {\n\t\t\t\tcontent: \"\\f114\";\n\t\t\t}\n\n\t\t\t.video-js .vjs-source-button .vjs-icon-placeholder:before {\n\t\t\t\tcontent: \"\\f10e\";\n\t\t\t}\n\n\t\t\t.video-js .vjs-miniplayer-button .vjs-icon-placeholder:before {\n\t\t\t\tcontent: \"\\f127\";\n\t\t\t}\n\n\t\t\t.video-js .vjs-theater-button .vjs-icon-placeholder:before {\n\t\t\t\tcontent: \"\\f115\";\n\t\t\t}\n\n\t\t\t/* Youtube player style */\n\t\t\t.vjs-slider-horizontal .vjs-volume-level:before {\n\t\t\t\tfont-size: 14px !important;\n\t\t\t}\n\n\t\t\t.vjs-volume-control {\n\t\t\t\twidth: auto !important;\n\t\t\t\tmargin-right: 0 !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-volume-panel.vjs-volume-panel-horizontal {\n\t\t\t\ttransition: width .25s !important;\n\t\t\t\tz-index: 999;\n\t\t\t}\n\n\t\t\t.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\n\t\t\t\ttransition: opacity .25s, width 1s !important;\n\t\t\t\tmin-width: 0 !important;\n\t\t\t\tpadding-right: 8px !important;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t.video-js .vjs-volume-panel {\n\t\t\t\tmargin-right: 6px !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-volume-panel.vjs-hover,\n\t\t\t.video-js .vjs-volume-panel.vjs-slider-active {\n\t\t\t\tmargin-right: 16px !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal {\n\t\t\t\tpointer-events: all;\n\t\t\t}\n\n\t\t\t.vjs-volume-bar.vjs-slider-horizontal {\n\t\t\t\tmin-width: 52px !important;\n\t\t\t}\n\n\t\t\t.video-js.player-style-youtube .vjs-control-bar > .vjs-spacer {\n\t\t\t\tflex: 1;\n\t\t\t\torder: 2;\n\t\t\t}\n\n\t\t\t.video-js.player-style-youtube .vjs-play-progress .vjs-time-tooltip {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.video-js.player-style-youtube .vjs-play-progress::before {\n\t\t\t\tcolor: red;\n\t\t\t\tfont-size: 0.85em;\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.video-js.player-style-youtube .vjs-progress-holder:hover .vjs-play-progress::before {\n\t\t\t\tdisplay: unset;\n\t\t\t}\n\n\t\t\t.video-js.player-style-youtube .vjs-control-bar {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t}\n\n\t\t\t.video-js.player-style-youtube .vjs-big-play-button {\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\tmargin-top: -0.81666em;\n\t\t\t\tmargin-left: -1.5em;\n\t\t\t}\n\n\t\t\t.video-js.player-style-youtube .vjs-menu-button-popup .vjs-menu {\n\t\t\t\tmargin-bottom: 2em;\n\t\t\t}\n\n\t\t\t.video-js ul.vjs-menu-content::-webkit-scrollbar {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.video-js .vjs-user-inactive:not(.vjs-paused) {\n\t\t\t\tcursor: none;\n\t\t\t}\n\n\t\t\t.video-js .vjs-text-track-display > div > div > div {\n\t\t\t\tborder-radius: 0 !important;\n\t\t\t\tpadding: 4px 8px !important;\n\t\t\t\tline-height: calc(1.2em + 7px) !important;\n\t\t\t\twhite-space: break-spaces !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-play-control {\n\t\t\t\torder: 0;\n\t\t\t}\n\n\t\t\t.video-js .vjs-prev-button {\n\t\t\t\torder: 1;\n\t\t\t}\n\n\t\t\t.video-js .vjs-next-button {\n\t\t\t\torder: 2;\n\t\t\t}\n\n\t\t\t.video-js .vjs-volume-panel {\n\t\t\t\torder: 3;\n\t\t\t}\n\n\t\t\t/* Time control */\n\t\t\thtml body #goodTube_playerWrapper .video-js .vjs-time-control {\n\t\t\t\tfont-family: \"YouTube Noto\", Roboto, Arial, Helvetica, sans-serif !important;\n\t\t\t\torder: 4;\n\t\t\t\tfont-size: 13.0691px !important;\n\t\t\t\tpadding-top: 4px !important;\n\t\t\t\tcolor: rgb(221, 221, 221) !important;\n\t\t\t\ttext-shadow: 0 0 2px rgba(0, 0, 0, .5) !important;\n\t\t\t\tmin-width: 0 !important;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper .video-js .vjs-time-control * {\n\t\t\t\tmin-width: 0 !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-current-time {\n\t\t\t\tpadding-right: 4px !important;\n\t\t\t\tpadding-left: 0 !important;\n\t\t\t\tmargin-left: 0 !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-duration {\n\t\t\t\tpadding-left: 4px !important;\n\t\t\t\tpadding-right: 5px !important;\n\t\t\t\tmargin-right: 0 !important;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .video-js .vjs-time-control {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: calc(100% - 98px);\n\t\t\t\tfont-weight: 500;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .video-js .vjs-current-time {\n\t\t\t\tcolor: #ffffff !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-source-button {\n\t\t\t\tmargin-left: auto !important;\n\t\t\t\torder: 5;\n\t\t\t}\n\n\t\t\t.video-js .vjs-download-button {\n\t\t\t\torder: 6;\n\t\t\t}\n\n\t\t\t.video-js .vjs-autoplay-button {\n\t\t\t\torder: 7;\n\t\t\t}\n\n\t\t\t.video-js .vjs-playback-rate {\n\t\t\t\torder: 8;\n\t\t\t}\n\n\t\t\t.video-js .vjs-subs-caps-button {\n\t\t\t\torder: 9;\n\t\t\t}\n\n\t\t\t.video-js .vjs-quality-selector {\n\t\t\t\torder: 10;\n\t\t\t}\n\n\t\t\t.video-js .vjs-miniplayer-button {\n\t\t\t\torder: 11;\n\t\t\t}\n\n\t\t\t.video-js .vjs-theater-button {\n\t\t\t\torder: 12;\n\t\t\t}\n\n\t\t\t.video-js .vjs-fullscreen-control {\n\t\t\t\torder: 13;\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\tscrollbar-width: none;\n\t\t\t\theight: 48px !important;\n\t\t\t\tbackground: transparent !important;\n\t\t\t\tz-index: 2 !important;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper:not(.goodTube_mobile) .video-js::before {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\theight: 33.33%;\n\t\t\t\tbackground: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAD1CAYAAACRFp+GAAAAAXNSR0IArs4c6QAAASpJREFUOE9lyOlHGAAcxvHuY63Wta3WsdWqdaz7vtfduoyZSBLJmCSSSCaSSBJJJIkk0h+Z7/Pm59Hz4sP3SUh4tUSeIIkMkkmR4qSSIs1JJ4MMUmQ6b0iR5bwlg2xS5DjvSJHr5JFBPikKnEIyeE+KD85HUhQ5xWTwiRQlTikpypxyMvhMii9OBSkqna9kUEWKaqeGDL6RotapI0W900AG30nR6DSRotlpIYNWUrQ57aTocDrJoIsU3U4PKXqdPjLoJ8WAM0gGQ6QYdn6QYsQZJYMxUow7E6SYdKbIYJoUP50ZUsw6c2QwTy7AL/gNf2ARlmAZVmAV1mAd/sI/2IBN2IJt2IFd2IN9+A8HcAhHcAwncApncA4XcAlXcA03cAt3cA8P8AhP8PwCakcyvVVFagcAAAAASUVORK5CYII=\");\n\t\t\t\tbackground-size: cover;\n\t\t\t\tbackground-repeat: repeat-x;\n\t\t\t\tbackground-position: bottom;\n\t\t\t\tbackground-size: contain;\n\t\t\t\tpointer-events: none;\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: opacity .1s linear;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper:not(.goodTube_mobile) .video-js.vjs-paused::before,\n\t\t\t#goodTube_playerWrapper:not(.goodTube_mobile) .video-js.vjs-user-active::before {\n\t\t\t\topacity: 1;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .video-js .vjs-control-bar::before {\n\t\t\t\tdisplay: none;\n\t\t\t\tcontent: none;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu .vjs-icon-placeholder {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu .vjs-menu-content > * {\n\t\t\t\tpadding-top: 8px !important;\n\t\t\t\tpadding-bottom: 8px !important;\n\t\t\t\tpadding-left: 12px !important;\n\t\t\t\tpadding-right: 12px !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu {\n\t\t\t\theight: auto !important;\n\t\t\t\tbottom: 48px !important;\n\t\t\t\tpadding-bottom: 0 !important;\n\t\t\t\tmargin-bottom: 0 !important;\n\t\t\t\twidth: auto !important;\n\t\t\t\ttransform: translateX(-50%) !important;\n\t\t\t\tleft: 50% !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu .vjs-menu-content {\n\t\t\t\tposition: static !important;\n\t\t\t\tborder-radius: 4px !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-volume-control {\n\t\t\t\theight: 100% !important;\n\t\t\t\tdisplay: flex !important;\n\t\t\t\talign-items: center !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-vtt-thumbnail-display {\n\t\t\t\tbottom: calc(100% + 35px) !important;\n\t\t\t\tborder-radius: 12px !important;\n\t\t\t\toverflow: hidden !important;\n\t\t\t\tborder: 2px solid #ffffff !important;\n\t\t\t\tbackground-color: #000000 !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar .vjs-icon-placeholder {\n\t\t\t\theight: 100%;\n\t\t\t}\n\n\t\t\t.video-js .vjs-control {\n\t\t\t\tmin-width: 48px !important;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper:not(goodTube_mobile) .video-js .vjs-control-bar > .vjs-play-control {\n\t\t\t\tpadding-left: 8px;\n\t\t\t\tbox-sizing: content-box;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .video-js .vjs-control:not(.vjs-progress-control) {\n\t\t\t\tmin-width: 0 !important;\n\t\t\t\tflex-grow: 1 !important;\n\t\t\t\tmax-width: 9999px !important;\n\t\t\t\tpadding-left: 0 !important;\n\t\t\t\tpadding-right: 0 !important;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .video-js .vjs-control.vjs-volume-panel,\n\t\t\t#goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-control.vjs-volume-panel {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar .vjs-icon-placeholder::before {\n\t\t\t\theight: auto;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\tfont-size: 24px;\n\t\t\t\tline-height: 100%;\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar *:not(.vjs-time-control) {\n\t\t\t\ttext-shadow: none !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-vtt-thumbnail-time {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-playback-rate .vjs-playback-rate-value {\n\t\t\t\tline-height: 48px;\n\t\t\t\tfont-size: 14px !important;\n\t\t\t\tfont-weight: 700;\n\t\t\t}\n\n\t\t\t.video-js .vjs-play-progress .vjs-time-tooltip {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-mouse-display .vjs-time-tooltip {\n\t\t\t\tbackground: none !important;\n\t\t\t\tfont-size: 12px !important;\n\t\t\t\ttop: -50px !important;\n\t\t\t\ttext-shadow: 0 0 10px rgba(0, 0, 0, .5) !important;\n\t\t\t\tfont-family: \"YouTube Noto\", Roboto, Arial, Helvetica, sans-serif !important;\n\t\t\t\tfont-weight: 500 !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar::-webkit-scrollbar {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.video-js .vjs-icon-cog {\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar,\n\t\t\t.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n\t\t\t\tbackground-color: rgba(35, 35, 35, 0.75);\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu li.vjs-menu-item:not(.vjs-selected) {\n\t\t\t\tbackground-color: transparent !important;\n\t\t\t\tcolor: #ffffff !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu li.vjs-menu-item:not(.vjs-selected):hover {\n\t\t\t\tbackground-color: rgba(255, 255, 255, 0.75) !important;\n\t\t\t\tcolor: rgba(49, 49, 51, 0.75) !important;\n\t\t\t\tcolor: #ffffff !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu li.vjs-selected,\n\t\t\t.video-js .vjs-menu li.vjs-selected:hover {\n\t\t\t\tbackground-color: #ffffff !important;\n\t\t\t\tcolor: #000000 !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu li {\n\t\t\t\twhite-space: nowrap !important;\n\t\t\t\tfont-size: 12px !important;\n\t\t\t\tfont-weight: 700 !important;\n\t\t\t\tmax-width: 9999px !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-subs-caps-button .vjs-menu li {\n\t\t\t\twhite-space: normal !important;\n\t\t\t\tmin-width: 128px !important;\n\t\t\t}\n\n\t\t\t/* Progress Bar */\n\t\t\t.video-js .vjs-slider {\n\t\t\t\tbackground-color: rgba(15, 15, 15, 0.5);\n\t\t\t}\n\n\t\t\t.video-js .vjs-load-progress,\n\t\t\t.video-js .vjs-load-progress div {\n\t\t\t\tbackground: rgba(87, 87, 88, 1);\n\t\t\t}\n\n\t\t\t.video-js .vjs-slider:hover,\n\t\t\t.video-js button:hover {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}\n\n\t\t\t/* Overlay */\n\t\t\t.video-js .vjs-overlay {\n\t\t\t\tbackground-color: rgba(35, 35, 35, 0.75) !important;\n\t\t\t}\n\t\t\t.video-js .vjs-overlay * {\n\t\t\t\tcolor: rgba(255, 255, 255, 1) !important;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t/* ProgressBar marker */\n\t\t\t.video-js .vjs-marker {\n\t\t\t\tbackground-color: rgba(255, 255, 255, 1);\n\t\t\t\tz-index: 0;\n\t\t\t}\n\n\t\t\t/* Big \"Play\" Button */\n\t\t\t.video-js .vjs-big-play-button {\n\t\t\t\tbackground-color: rgba(35, 35, 35, 0.5);\n\t\t\t}\n\n\t\t\t.video-js:hover .vjs-big-play-button {\n\t\t\t\tbackground-color: rgba(35, 35, 35, 0.75);\n\t\t\t}\n\n\t\t\t.video-js .vjs-current-time,\n\t\t\t.video-js .vjs-time-divider,\n\t\t\t.video-js .vjs-duration {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\t.video-js .vjs-time-divider {\n\t\t\t\tmin-width: 0px;\n\t\t\t\tpadding-left: 0px;\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.video-js .vjs-poster {\n\t\t\t\tbackground-size: cover;\n\t\t\t\tobject-fit: cover;\n\t\t\t}\n\n\t\t\t.video-js .player-dimensions.vjs-fluid {\n\t\t\t\tpadding-top: 82vh;\n\t\t\t}\n\n\t\t\tvideo.video-js {\n\t\t\t\tposition: absolute;\n\t\t\t\theight: 100%;\n\t\t\t}\n\n\t\t\t.video-js .mobile-operations-bar {\n\t\t\t\tdisplay: flex;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tright: 1px !important;\n\t\t\t\tleft: initial !important;\n\t\t\t\twidth: initial !important;\n\t\t\t}\n\n\t\t\t.video-js .mobile-operations-bar ul {\n\t\t\t\tposition: absolute !important;\n\t\t\t\tbottom: unset !important;\n\t\t\t\ttop: 1.5em;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu-button-popup .vjs-menu {\n\t\t\t\tborder: 0 !important;\n\t\t\t\tpadding-bottom: 12px !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu li.vjs-menu-item:not(.vjs-selected):hover,\n\t\t\t.video-js .vjs-menu li.vjs-menu-item.vjs-auto-selected {\n\t\t\t\tbackground-color: rgba(255, 255, 255, .2) !important;\n\t\t\t\tcolor: #ffffff !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu * {\n\t\t\t\tborder: 0 !important;\n\t\t\t}\n\n\t\t\t/* Tooltips\n\t\t\t------------------------------------------------------------------------------------------ */\n\t\t\t.video-js .vjs-control-bar > .vjs-prev-button::before {\n\t\t\t\tcontent: 'Previous video';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > .vjs-next-button::before {\n\t\t\t\tcontent: 'Next video';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar .vjs-mute-control:not(.vjs-vol-0)::before {\n\t\t\t\tcontent: 'Mute (m)';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar .vjs-mute-control.vjs-vol-0::before {\n\t\t\t\tcontent: 'Unmute (m)';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > .vjs-playback-rate > .vjs-menu-button::before {\n\t\t\t\tcontent: 'Playback speed';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > .vjs-subs-caps-button > .vjs-menu-button::before {\n\t\t\t\tcontent: 'Subtitles';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > .vjs-quality-selector > .vjs-menu-button::before {\n\t\t\t\tcontent: 'Quality';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > .vjs-download-button > .vjs-menu-button::before {\n\t\t\t\tcontent: 'Download';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > .vjs-autoplay-button > .vjs-menu-button::before {\n\t\t\t\tcontent: 'Autoplay';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > .vjs-source-button > .vjs-menu-button::before {\n\t\t\t\tcontent: 'Video source';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > .vjs-miniplayer-button::before {\n\t\t\t\tcontent: 'Miniplayer (i)';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > .vjs-theater-button::before {\n\t\t\t\tcontent: 'Theater mode (t)';\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar > .vjs-fullscreen-control::before {\n\t\t\t\tcontent: 'Fullscreen (f)';\n\t\t\t\tleft: auto !important;\n\t\t\t\tright: 12px !important;\n\t\t\t\ttransform: none !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar button.vjs-menu-button::before,\n\t\t\t.video-js .vjs-control-bar .vjs-button:not(.vjs-menu-button)::before {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: -40px;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tbackground: rgba(0, 0, 0, .75);\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tpadding: 8px;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: opacity .1s;\n\t\t\t\tpointer-events: none;\n\t\t\t\ttext-shadow: none !important;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .video-js .vjs-control-bar button.vjs-menu-button::before,\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .video-js .vjs-control-bar .vjs-button:not(.vjs-menu-button)::before {\n\t\t\t\tdisplay: none !important;\n\t\t\t\tcontent: none !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-control-bar div.vjs-menu-button:not(.vjs-menuOpen) button.vjs-menu-button:hover::before,\n\t\t\t.video-js .vjs-control-bar .vjs-button:not(.vjs-menu-button):hover::before {\n\t\t\t\topacity: 1;\n\t\t\t}\n\n\t\t\t.video-js div.vjs-menu-button:not(.vjs-menuOpen) .vjs-menu {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\t.video-js div.vjs-menu-button.vjs-menuOpen .vjs-menu {\n\t\t\t\tdisplay: block !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-menu {\n\t\t\t\tz-index: 999 !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-big-play-button {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\t.video-js .vjs-volume-panel,\n\t\t\t.video-js .vjs-button {\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\t.video-js .vjs-button.vjs-menuOpen {\n\t\t\t\tz-index: 999;\n\t\t\t}\n\n\t\t\t.video-js .vjs-error-display .vjs-modal-dialog-content {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.video-js:not(.vjs-has-started) .vjs-control-bar {\n\t\t\t\tdisplay: flex !important;\n\t\t\t}\n\n\t\t\t.vjs-track-settings-controls button:hover {\n\t\t\t\tcolor: #000000 !important;\n\t\t\t}\n\t\t",document.body.appendChild(t)}();const t=videojs.getComponent("MenuItem"),i=videojs.getComponent("MenuButton");class a extends i{createItems(){const e=[],{myItems:o}=this.options_;return Array.isArray(o),o.forEach((({clickHandler:o,...n})=>{const r=new t(this.player(),n);o&&(r.handleClick=o),e.push(r)})),e}buildCSSClass(){return`${super.buildCSSClass()}`}}videojs.registerComponent("DownloadButton",a),videojs.registerComponent("SourceButton",a),videojs.registerComponent("AutoplayButton",a);const l=videojs.getComponent("Button");videojs.registerComponent("PrevButton",class extends l{handleClick(t){t.stopImmediatePropagation(),nt()}});videojs.registerComponent("NextButton",class extends l{handleClick(t){t.stopImmediatePropagation(),rt(!0)}});videojs.registerComponent("MiniplayerButton",class extends l{handleClick(t){t.stopImmediatePropagation(),Ut()}});videojs.registerComponent("TheaterButton",class extends l{handleClick(t){t.stopImmediatePropagation(),function(t){let e=!1,o=!1,n=!1;if("next"===t)e="n",o=78,n=!0;else if("prev"===t)e="p",o=80,n=!0;else if("theater"===t)e="t",o=84,n=!1;else{if("fullscreen"!==t)return;e="f",o=70,n=!1}let r=!1;r=new window.KeyboardEvent("focus",{bubbles:!0,key:e,keyCode:o,shiftKey:n,charCode:0}),document.dispatchEvent(r),r=new window.KeyboardEvent("keydown",{bubbles:!0,key:e,keyCode:o,shiftKey:n,charCode:0}),document.dispatchEvent(r),r=new window.KeyboardEvent("beforeinput",{bubbles:!0,key:e,keyCode:o,shiftKey:n,charCode:0}),document.dispatchEvent(r),r=new window.KeyboardEvent("keypress",{bubbles:!0,key:e,keyCode:o,shiftKey:n,charCode:0}),document.dispatchEvent(r),r=new window.KeyboardEvent("input",{bubbles:!0,key:e,keyCode:o,shiftKey:n,charCode:0}),document.dispatchEvent(r),r=new window.KeyboardEvent("change",{bubbles:!0,key:e,keyCode:o,shiftKey:n,charCode:0}),document.dispatchEvent(r),r=new window.KeyboardEvent("keyup",{bubbles:!0,key:e,keyCode:o,shiftKey:n,charCode:0}),document.dispatchEvent(r)}("theater")}});let d=[];n.forEach((t=>{d.push({label:t.name,clickHandler(t){t.target.closest(".vjs-menu").querySelectorAll(".vjs-selected").forEach((t=>{t.classList.remove("vjs-selected")}));let e=t.target.closest(".vjs-menu-item");e.classList.add("vjs-selected"),"automatic"===e.getAttribute("api")&&(s=0),Zt.currentTime>0&&(G=Zt.currentTime),mt(e.getAttribute("api"),!0)}})})),q=videojs("goodTube_player",{inactivityTimeout:3e3,controls:!0,autoplay:!1,preload:"auto",width:"100%",height:"100%",playbackRates:[.25,.5,1,1.25,1.5,1.75,2],userActions:{doubleClick:!1},html5:{vhs:{overrideNative:!0},hls:{overrideNative:!0}},controlBar:{children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","playbackRateMenuButton","subsCapsButton","qualitySelector","fullscreenToggle"],NextButton:{className:"vjs-next-button"},PrevButton:{className:"vjs-prev-button"},AutoplayButton:{controlText:"Autoplay",className:"vjs-autoplay-button",myItems:[{label:"Autoplay off",clickHandler(){let t=event.target.closest(".vjs-menu");t.querySelector(".vjs-selected")?.classList.remove("vjs-selected"),event.target.closest(".vjs-menu-item").classList.add("vjs-selected"),m("goodTube_autoplay","off")}},{label:"Autoplay on",clickHandler(){let t=event.target.closest(".vjs-menu");t.querySelector(".vjs-selected")?.classList.remove("vjs-selected"),event.target.closest(".vjs-menu-item").classList.add("vjs-selected"),m("goodTube_autoplay","on")}}]},SourceButton:{controlText:"Video source",className:"vjs-source-button",myItems:d},DownloadButton:{controlText:"Download",className:"vjs-download-button",myItems:[{className:"goodTube_download_playlist_cancel",label:"CANCEL ALL DOWNLOADS",clickHandler(){!function(){if(!confirm("Are you sure you want to cancel all downloads?"))return;V=[];for(let t in U)clearTimeout(U[t]),delete U[t];Y(!0),console.log("[GoodTube] Downloads cancelled")}()}},{label:"Download video",clickHandler(){V[te.v]=!0,N(0,"video",te.v)}},{label:"Download audio",clickHandler(){V[te.v]=!0,N(0,"audio",te.v)}},{className:"goodTube_download_playlist_video",label:"Download playlist (video)",clickHandler(){J("video")}},{className:"goodTube_download_playlist_audio",label:"Download playlist (audio)",clickHandler(){J("audio")}}]},MiniplayerButton:{className:"vjs-miniplayer-button"},TheaterButton:{className:"vjs-theater-button"}}}),videojs.log.level("off"),videojs.hook("error",(function(t){Zt.getAttribute("src")&&(void 0!==o.reloadVideo&&clearTimeout(o.reloadVideo),o.reloadVideo=setTimeout((function(){!function(t){if(void 0===te.v)return;void 0!==o.reloadVideo&&clearTimeout(o.reloadVideo);if(ht>3)return void Vt();let e=t.src;pt(t),setTimeout((function(){t.setAttribute("src",e)}),0),ht++}(Zt)}),e),ct(),H())})),q.on("ready",(function(){E=!0;let t=document.querySelector("#goodTube_player video");t&&(t.setAttribute("playsinline",""),t.setAttribute("webkit-playsinline","")),A(),z=q.hlsQualitySelector();let e=document.querySelector("#goodTube_player");if(e){let t=document.createElement("div");t.id="goodTube_miniplayer_closeButton",t.onclick=function(){Ut()},e.appendChild(t);let o=document.createElement("div");o.id="goodTube_miniplayer_expandButton",o.onclick=function(){Ft!==te.v?window.location.href="/watch?v="+Ft+"&t="+parseFloat(Zt.currentTime).toFixed(0)+"s":Ut()},e.appendChild(o)}if(console.log("[GoodTube] Player loaded"),Zt=document.querySelector("#goodTube_player video"),$t){let t=document.createElement("div");t.id="goodTube_seekBackwards",e.append(t),t.onclick=function(){var t=(new Date).getTime()-C;t<400&&t>0?(e.classList.remove("vjs-user-active"),e.classList.add("vjs-user-inactive"),Zt.currentTime-=10):e.classList.contains("vjs-user-active")?(e.classList.remove("vjs-user-active"),e.classList.add("vjs-user-inactive")):(e.classList.add("vjs-user-active"),e.classList.remove("vjs-user-inactive")),C=(new Date).getTime()};let o=document.createElement("div");o.id="goodTube_seekForwards",e.append(o),o.onclick=function(){var t=(new Date).getTime()-M;t<400&&t>0?(e.classList.remove("vjs-user-active"),e.classList.add("vjs-user-inactive"),Zt.currentTime+=5):e.classList.contains("vjs-user-active")?(e.classList.remove("vjs-user-active"),e.classList.add("vjs-user-inactive")):(e.classList.add("vjs-user-active"),e.classList.remove("vjs-user-inactive")),M=(new Date).getTime()},e.addEventListener("touchstart",(function(t){Q=setTimeout((function(){e.classList.remove("vjs-user-active"),e.classList.add("vjs-user-inactive"),P=Zt.playbackRate,Zt.playbackRate=2,R=!0}),1e3)})),["touchmove","touchend","touchcancel"].forEach((t=>{e.addEventListener(t,(function(t){Q&&clearTimeout(Q),R&&(Zt.playbackRate=P,R=!1)}))}))}$t||e.addEventListener("dblclick",(function(t){t.target.closest(".vjs-progress-control")||t.target.closest(".vjs-menu-button")||t.target.closest(".vjs-control")||document.querySelector(".vjs-fullscreen-control")?.click()})),$t||(e.addEventListener("mouseout",(function(t){e.classList.contains("vjs-user-active")&&!e.classList.contains("vjs-paused")&&(e.classList.remove("vjs-user-active"),e.classList.add("vjs-user-inactive"))})),e.addEventListener("mouseover",(function(t){e.classList.contains("vjs-user-inactive")&&!e.classList.contains("vjs-paused")&&(e.classList.add("vjs-user-active"),e.classList.remove("vjs-user-inactive"))})),e.addEventListener("click",(function(t){setTimeout((function(){e.classList.contains("vjs-user-inactive")&&!e.classList.contains("vjs-paused")&&(e.classList.add("vjs-user-active"),e.classList.remove("vjs-user-inactive"),window.goodTube_inactive_timeout=setTimeout((function(){e.classList.contains("vjs-user-active")&&!e.classList.contains("vjs-paused")&&(e.classList.remove("vjs-user-active"),e.classList.add("vjs-user-inactive"))}),3e3))}),1)})),e.addEventListener("mousemove",(function(t){void 0!==window.goodTube_inactive_timeout&&clearTimeout(window.goodTube_inactive_timeout)}))),document.querySelectorAll("#goodTube_player button").forEach((t=>{t.setAttribute("title","")}));let o=b("goodTube_volume");o&&o==parseFloat(o)&&dt(Zt,o),b("goodTube_autoplay")&&!$t||m("goodTube_autoplay","on");let r=document.querySelector(".vjs-autoplay-button");if(r){r.querySelector(".vjs-menu .vjs-selected")?.classList.remove("vjs-selected");let t=r.querySelectorAll(".vjs-menu .vjs-menu-item");"on"===b("goodTube_autoplay")?t[t.length-1].classList.add("vjs-selected"):t[0].classList.add("vjs-selected")}let i=document.querySelector(".vjs-mute-control");i&&(i.onmousedown=function(){Zt.muted?q.muted(!1):q.muted(!0)},i.ontouchstart=function(){Zt.muted?q.muted(!1):q.muted(!0)});let a=document.querySelector(".vjs-play-control");a&&(a.removeEventListener("click",st,!1),a.addEventListener("click",st,!1)),document.onmousedown=function(){if(!event.target.closest(".vjs-menu")&&!event.target.closest(".vjs-menu-button")){document.querySelectorAll(".vjs-menuOpen").forEach((t=>{t.classList.remove("vjs-menuOpen")}))}},document.ontouchstart=function(){if(!event.target.closest(".vjs-menu")&&!event.target.closest(".vjs-menu-button")){document.querySelectorAll(".vjs-menuOpen").forEach((t=>{t.classList.remove("vjs-menuOpen")}))}};let l=document.querySelector(".vjs-control-bar .vjs-play-control");l&&(l.onclick=function(){0===Zt.currentTime&&Zt.click()},l.ontouchstart=function(){0===Zt.currentTime&&Zt.click()});let s=document.querySelectorAll(".vjs-source-button .vjs-menu .vjs-menu-item");if(s){let t=0;s.forEach((e=>{e.setAttribute("api",n[t].url),t++}))}if(["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document){let t=document.querySelector(".vjs-download-button");t&&t.remove()}mt(b("goodTube_videoServer_withauto"),!1),H()})),document.addEventListener("keydown",(function(t){if(27==t.keyCode){document.querySelectorAll(".vjs-menuOpen").forEach((t=>{t.classList.remove("vjs-menuOpen")}))}}),!0),q.on("seeking",(function(){D=!0})),q.on("seeked",(function(){D=!1,A()})),q.on("waiting",(function(){if(B&&clearTimeout(B),!(Zt.currentTime<=0||2!==r&&3!==r)){let t=Zt.currentTime;B=setTimeout((function(){Zt.currentTime===t&&(B&&clearTimeout(B),console.log("[GoodTube] Video not loading fast enough - selecting next video source..."),G=Zt.currentTime,mt("automatic",!0))}),15e3)}})),q.on("loadedmetadata",(function(){if(Zt.getAttribute("src")){if(O&&clearTimeout(O),void 0!==te.t){let t=te.t.replace("s","");ut(Zt,t)}G>0&&ut(Zt,G),Zt.focus()}})),q.on("loadstart",(function(){if(Zt.getAttribute("src"))if(O&&clearTimeout(O),O=setTimeout((function(){console.log("[GoodTube] Video not loading fast enough - selecting next video source..."),mt("automatic",!0)}),15e3),1===r){let t="",e=document.querySelector(".vjs-quality-selector .vjs-menu .vjs-selected .vjs-menu-item-text");t=e?e.innerHTML:Zt.querySelector("source[selected=true]").getAttribute("label");let o=t.replace("p","").replace("hd","").replace(" ","").toLowerCase();parseFloat(_t)!==parseFloat(o)&&(Tt=o,_t=o);let n=document.querySelector("#goodTube_playerWrapper");"audio"===o?n.classList.contains("goodTube_audio")||n.classList.add("goodTube_audio"):n.classList.contains("goodTube_audio")&&n.classList.remove("goodTube_audio"),ht<=1&&console.log("[GoodTube] Loading quality "+t+"...")}else if(2===r||3===r){let t=document.querySelector("#goodTube_playerWrapper");t.classList.contains("goodTube_audio")&&t.classList.remove("goodTube_audio"),ht<=1&&console.log("[GoodTube] Loading qualities...")}})),q.on("loadeddata",(function(){I=0,Zt.paused||at(Zt),ht=1,void 0!==o.reloadVideo&&clearTimeout(o.reloadVideo),1===r?console.log("[GoodTube] Quality loaded"):2!==r&&3!==r||console.log("[GoodTube] Qualities loaded"),H(),vt()})),q.on("ended",(function(){A(),rt()})),q.on("volumechange",(function(){let t=Zt.volume;Zt.muted&&(t=0),m("goodTube_volume",t)}))}function H(){document.querySelectorAll(".vjs-control-bar button").forEach((t=>{t.onclick=function(){document.querySelectorAll(".vjs-menuOpen").forEach((e=>{e!=t.closest("div.vjs-menu-button")&&e.classList.remove("vjs-menuOpen")}));let e=t.closest("div.vjs-menu-button");e&&(e.classList.contains("vjs-menuOpen")?e.classList.remove("vjs-menuOpen"):e.classList.add("vjs-menuOpen"))},t.ontouchstart=function(){document.querySelectorAll(".vjs-menuOpen").forEach((e=>{e!=t.closest("div.vjs-menu-button")&&e.classList.remove("vjs-menuOpen")}));let e=t.closest("div.vjs-menu-button");e&&(e.classList.contains("vjs-menuOpen")?e.classList.remove("vjs-menuOpen"):e.classList.add("vjs-menuOpen"))}}));if(document.querySelectorAll(".vjs-menu-item").forEach((t=>{((t,e)=>{let o=!1;t.addEventListener("touchstart",(function(){o=!1})),t.addEventListener("touchmove",(function(){o=!0})),t.addEventListener("touchend",(function(t){o||e(t)})),t.addEventListener("click",(function(t){e(t)}))})(t,(t=>{let e=0;$t&&(e=400),setTimeout((function(){document.querySelectorAll(".vjs-menuOpen").forEach((t=>{t.classList.remove("vjs-menuOpen")}))}),e)}))})),!$t&&!document.querySelector(".goodTube_hoverBar")){let t=document.createElement("div");t.classList.add("goodTube_hoverBar"),document.querySelector(".video-js .vjs-progress-control").appendChild(t),document.querySelector(".video-js .vjs-progress-control").addEventListener("mousemove",(function(e){window.requestAnimationFrame((function(){t.style.width=document.querySelector(".video-js .vjs-progress-control .vjs-mouse-display").style.left}))}))}}let U=[],V=[];function N(t,n,r,i,a){if(void 0===i&&(i=""),void 0===V[r])return;if(void 0===c[t])return void 0!==V[r]&&delete V[r],void 0!==i?(alert("[GoodTube] "+n.charAt(0).toUpperCase()+n.slice(1)+" - "+i+" could not be downloaded. Please try again soon."),console.log("[GoodTube] "+n.charAt(0).toUpperCase()+n.slice(1)+" - "+i+" could not be downloaded. Please try again soon.")):(alert("[GoodTube] "+n.charAt(0).toUpperCase()+n.slice(1)+" could not be downloaded. Please try again soon."),console.log("[GoodTube] "+n.charAt(0).toUpperCase()+n.slice(1)+" could not be downloaded. Please try again soon.")),void Y();K();let l=0,s=(new Date).getTime()/1e3,d=parseFloat(b("goodTube_lastDownloadTimeSeconds"));d&&(l=3-(s-d),l<0&&(l=0)),m("goodTube_lastDownloadTimeSeconds",s+l),U[r]=setTimeout((function(){0===t&&(""!==i?console.log("[GoodTube] Downloading "+n+" - "+i+"..."):console.log("[GoodTube] Downloading "+n+"..."));let l="vp9";$t&&(l="h264"),void 0!==a&&(l=a);let s=!1;"audio"===n&&(s=!0);let d=JSON.stringify({url:"https://www.youtube.com/watch?v="+r,vCodec:l,vQuality:"max",filenamePattern:"basic",isAudioOnly:s,audioBitrate:"320"});fetch(c[t]+"/api/json",{signal:AbortSignal.timeout(1e4),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:d}).then((t=>t.text())).then((a=>{if(void 0!==V[r]){if(void 0!==(a=JSON.parse(a)).status&&"rate-limit"===a.status)return void 0!==o["download_"+r]&&clearTimeout(o["download_"+r]),void(o["download_"+r]=setTimeout((function(){N(t,n,r,i)}),e));if(void 0!==a.status&&"error"===a.status){let s=!1;return void 0!==a.text&&-1!==a.text.toLowerCase().indexOf("settings")?($t||("vp9"===l?s="av1":"av1"===l&&(s="h264")),$t&&("h264"===l?s="av1":"av1"===l&&(s="vp9")),s?(void 0!==o["download_"+r]&&clearTimeout(o["download_"+r]),void(o["download_"+r]=setTimeout((function(){N(t,n,r,i,s)}),e))):(console.log("[GoodTube] Could not download "+n+" - "+i),void 0!==V[r]&&delete V[r],void setTimeout((function(){Y()}),1e3))):(void 0!==o["download_"+r]&&clearTimeout(o["download_"+r]),t++,void(o["download_"+r]=setTimeout((function(){N(t,n,r,i)}),e)))}void 0!==a.status&&void 0!==a.url&&function(t,n,r,i,a){if(void 0===V[i])return;K();let l=".mp4";"audio"===n&&(l=".mp3");$t||""===r?(window.open(t,"_self"),""!==r?console.log("[GoodTube] Downloaded "+n+" - "+r):console.log("[GoodTube] Downloaded "+n),void 0!==V[i]&&delete V[i],setTimeout((function(){Y()}),1e3)):fetch(t).then((t=>t.blob())).then((t=>{if(void 0===V[i])return;let e=URL.createObjectURL(t),o=document.createElement("a");o.style.display="none",o.href=e,o.download=r+l,document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(e),o.remove(),console.log("[GoodTube] Downloaded "+n+" - "+r),void 0!==V[i]&&delete V[i],Y()})).catch((t=>{void 0!==o["download_"+i]&&clearTimeout(o["download_"+i]),a++,o["download_"+i]=setTimeout((function(){N(a,n,i,r)}),e)}))}(a.url,n,i,r,t)}})).catch((a=>{void 0!==o["download_"+r]&&clearTimeout(o["download_"+r]),t++,o["download_"+r]=setTimeout((function(){N(t,n,r,i)}),e)}))}),1e3*l)}function J(t,e){if(void 0===e&&!confirm("Are you sure you want to download this playlist ("+t+")?\r\rYou can keep playing and downloading other videos, just don't close the tab :)"))return;void 0===e&&console.log("[GoodTube] Downloading "+t+" playlist...");let o=document.querySelectorAll("#goodTube_playlistContainer a");if(o.length<=0)return void console.log("[GoodTube] Downloading failed, could not find playlist data.");let n=0;o.forEach((e=>{let o=function(t,e){for(t=t.toString();t.length<e;)t="0"+t;return t}(n+1,2)+" - "+e.innerHTML.trim(),r=e.href;if(!o||!r)return void console.log("[GoodTube] Downloading failed, could not find playlist data.");let i=r.split("?")[1],a={};i.replace(/\??(?:([^=]+)=([^&]*)&?)/g,(function(){function t(t){return decodeURIComponent(t.split("+").join(" "))}a[t(arguments[1])]=t(arguments[2])}));let l=a.v;V[l]=!0,N(0,t,l,o),n++}))}function K(){let t=document.querySelector(".vjs-download-button");if(!document.querySelector(".vjs-download-button .goodTube_spinner")){let e=document.createElement("div");e.classList.add("goodTube_spinner"),e.innerHTML="<div></div><div></div>",t.append(e)}t&&!t.classList.contains("goodTube_loading")&&t.classList.add("goodTube_loading")}function Y(t){if(Reflect.ownKeys(V).length>1)return;let e=document.querySelector(".vjs-download-button");e&&e.classList.contains("goodTube_loading")&&e.classList.remove("goodTube_loading"),m("goodTube_lastDownloadTimeSeconds",(new Date).getTime()/1e3),void 0===t&&console.log("[GoodTube] Downloads finished")}function X(){let t=document.querySelector(".goodTube_download_playlist_cancel"),e=document.querySelector(".goodTube_download_playlist_video"),o=document.querySelector(".goodTube_download_playlist_audio");t&&e&&o&&(void 0!==te.i||void 0!==te.index||void 0!==te.list?(y(e),y(o)):(g(e),g(o)),Reflect.ownKeys(V).length>1?y(t):g(t))}let Z=!1,$=[],tt=!1,et=!0;function ot(){if(void 0===te.i&&void 0===te.index&&void 0===te.list)return;let t=!1,e=!1;if($t?(t=document.querySelectorAll("ytm-playlist-panel-renderer a.compact-media-item-image"),e=document.querySelectorAll("ytm-playlist-panel-renderer .compact-media-item-headline span")):(t=document.querySelectorAll("#playlist-items > a"),e=document.querySelectorAll("#playlist-items #video-title")),t.length>0){let o=document.getElementById("goodTube_playlistContainer");o||(o=document.createElement("div"),o.setAttribute("id","goodTube_playlistContainer"),o.style.display="none",document.body.appendChild(o)),o.innerHTML="";let n=0;t.forEach((t=>{let r=document.createElement("a");r.href=t.href,r.innerHTML=e[n].innerHTML.trim(),-1!==t.href.indexOf("v="+te.v)&&r.classList.add("goodTube_selected"),o.appendChild(r),n++}))}}function nt(){let t=!1;if(void 0!==te.i||void 0!==te.index||void 0!==te.list){let e=document.querySelectorAll("#goodTube_playlistContainer a"),o=!1;for(let n=e.length-1;n>=0;n--){let r=e[n];if(o){let e="/watch"+r.href.split("/watch")[1];if($t?(t=!0,document.querySelector('ytm-playlist-panel-renderer a.compact-media-item-image[href="'+e+'"]')?.click()):(t=!0,document.querySelector('#playlist-items > a[href="'+e+'"]')?.click()),t){if(t=!0,!document.querySelector("ytm-playlist-panel-renderer")){let t=document.querySelector("ytm-playlist-panel-entry-point");return void(t&&!Z&&(Z=!0,t.click(),setTimeout(nt,500)))}Z=!1,document.querySelector('ytm-playlist-panel-renderer a.compact-media-item-image[href="'+e+'"]')?.click()}}o=!!r.classList.contains("goodTube_selected")}}!t&&$[$.length-2]&&$[$.length-2]!==window.location.href&&(console.log("[GoodTube] Playing previous video..."),m("goodTube_previous","true"),window.history.go(-1))}function rt(t=!1){let e=b("goodTube_autoplay"),o=!1;if(void 0!==te.i||void 0!==te.index||void 0!==te.list){let t=document.querySelectorAll("#goodTube_playlistContainer a"),e=!1;t.forEach((t=>{if(e){let e="/watch"+t.href.split("/watch")[1];if($t){if(o=!0,!document.querySelector("ytm-playlist-panel-renderer")){let t=document.querySelector("ytm-playlist-panel-entry-point");return void(t&&!Z&&(Z=!0,t.click(),setTimeout(rt,500)))}Z=!1,document.querySelector('ytm-playlist-panel-renderer a.compact-media-item-image[href="'+e+'"]')?.click()}else o=!0,document.querySelector('#playlist-items > a[href="'+e+'"]')?.click();o&&console.log("[GoodTube] Playing next video in playlist...")}e=!!t.classList.contains("goodTube_selected")}))}if(!o&&("off"!==e||t)){document.getElementById("movie_player").nextVideo(),console.log("[GoodTube] Autoplaying next video...")}}function it(){if(tt=!1,et=!0,(Gt||It)&&void 0===te.v)tt=!1,et=!1;else if(void 0!==te.i||void 0!==te.index||void 0!==te.list){let t=document.querySelectorAll("#goodTube_playlistContainer a");if(!t||!t.length)return;t[0].classList.contains("goodTube_selected")||(tt=!0)}else $[$.length-2]&&$[$.length-2]!==window.location.href&&(tt=!0);let t=document.querySelector(".vjs-prev-button");t&&(tt?y(t):g(t));let e=document.querySelector(".vjs-next-button");e&&(et?y(e):g(e))}function at(t){t.play()}function lt(t){t.pause()}function st(){document.querySelector(".vjs-play-control").classList.contains("vjs-playing")?at(Zt):lt(Zt)}function dt(t,e){t.volume=e}function ut(t,e){t.currentTime=e}function pt(t){!function(){let t=document.querySelector("#goodTube_error");t&&t.remove()}(),t.currentTime=0,t.setAttribute("src",""),t.pause(),Mt(),document.querySelector(".vjs-vtt-thumbnail-display")?.remove();let e=q.remoteTextTracks();void 0!==e.tracks_&&e.tracks_.forEach((t=>{q.removeRemoteTextTrack(t)}));let o=document.querySelectorAll(".vjs-quality-selector");if(o&&void 0!==o[1]){let t=o[1].querySelector("ul");t&&(t.innerHTML="")}}function ct(){let t=document.getElementById("goodTube_player");t.classList.contains("vjs-loading")||t.classList.add("vjs-loading"),t.classList.contains("vjs-waiting")||t.classList.add("vjs-waiting")}function vt(){let t=document.getElementById("goodTube_player");t.classList.contains("vjs-loading")&&t.classList.remove("vjs-loading"),t.classList.contains("vjs-waiting")&&t.classList.remove("vjs-waiting")}function mt(t,e){let o=document.querySelector(".vjs-source-button .vjs-menu");if(o.querySelectorAll(".vjs-selected").forEach((t=>{t.classList.remove("vjs-selected")})),"automatic"===t){if(s++,void 0===n[s])return void Vt();r=n[s].type,i=n[s].proxy,a=n[s].url,l=n[s].name,m("goodTube_videoServer_withauto",t);let e=document.querySelector("#goodTube_playerWrapper");e.classList.contains("goodTube_automaticServer")||e.classList.add("goodTube_automaticServer");let d=o.querySelector("ul li:first-child");d.classList.contains("vjs-selected")||d.classList.add("vjs-selected")}else{n.forEach((e=>{t==e.url&&(r=e.type,i=e.proxy,a=e.url,l=e.name,m("goodTube_videoServer_withauto",t))}));let e=document.querySelector("#goodTube_playerWrapper");e.classList.contains("goodTube_automaticServer")&&e.classList.remove("goodTube_automaticServer"),s=0}o.querySelectorAll("ul li").forEach((t=>{t.getAttribute("api")==a&&t.classList.add("vjs-selected")})),e&&function(){console.log("\n-------------------------\n\n"),console.log("[GoodTube] Loading video data from "+l+"...");let t=0;$t&&(t=400);setTimeout((function(){ft=0,xt(Zt)}),t)}()}function bt(){if(Jt<Nt.length)return void setTimeout((function(){bt()}),0);let t=document.createElement("style");t.textContent="\n\t\t\t/* Default quality modal */\n\t\t\t#goodTube_playerWrapper .goodTube_defaultQualityModal {\n\t\t\t\tposition: absolute;\n\t\t\t\tz-index: 99999;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tpadding: 24px;\n\t\t\t\ttransition: opacity .2s linear;\n\t\t\t\topacity: 0;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .goodTube_defaultQualityModal .goodTube_defaultQualityModal_overlay {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tbackground: rgba(0,0,0,.8);\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .goodTube_defaultQualityModal.goodTube_defaultQualityModal_visible {\n\t\t\t\topacity: 1;\n\t\t\t\tpointer-events: all;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .goodTube_defaultQualityModal .goodTube_defaultQualityModal_inner {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t\twidth: 264px;\n\t\t\t\tmax-width: calc(100% - 32px);\n\t\t\t\tmax-height: calc(100% - 32px);\n\t\t\t\toverflow: auto;\n\t\t\t\tbackground: #ffffff;\n\t\t\t\tborder-radius: 12px;\n\t\t\t\tpadding: 0;\n\t\t\t\tz-index: 2;\n\t\t\t\tbox-shadow: 0 0 16px rgba(15, 15, 15, .3);\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .goodTube_defaultQualityModal .goodTube_defaultQualityModal_title {\n\t\t\t\tcolor: rgba(15, 15, 15);\n\t\t\t\tfont-size: 16px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tpadding: 12px;\n\t\t\t\tpadding-top: 16px;\n\t\t\t\ttext-align: center;\n\t\t\t\twidth: 100%;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tfont-family: Roboto, Arial, Helvetica, sans-serif;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .goodTube_defaultQualityModal .goodTube_defaultQualityModal_options {\n\t\t\t\tpadding-bottom: 12px;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .goodTube_defaultQualityModal .goodTube_defaultQualityModal_options .goodTube_defaultQualityModal_option {\n\t\t\t\tcolor: rgba(15, 15, 15);\n\t\t\t\tfont-size: 14px;\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding: 10px;\n\t\t\t\ttext-align: center;\n\t\t\t\tfont-weight: 400;\n\t\t\t\ttext-decoration: none;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\ttransition: background-color .2s linear;\n\t\t\t\tcursor: pointer;\n\t\t\t\tfont-family: Roboto, Arial, Helvetica, sans-serif;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .goodTube_defaultQualityModal .goodTube_defaultQualityModal_options .goodTube_defaultQualityModal_option.goodTube_defaultQualityModal_selected {\n\t\t\t\tbackground: rgba(15,15,15,.15);\n\t\t\t\tfont-weight: 700;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .goodTube_defaultQualityModal .goodTube_defaultQualityModal_options .goodTube_defaultQualityModal_option:hover {\n\t\t\t\tbackground: rgba(15,15,15,.1);\n\t\t\t}\n\n\n\t\t\t/* Automatic server styling */\n\t\t\t#goodTube_playerWrapper.goodTube_automaticServer .vjs-source-button ul li:first-child,\n\t\t\t#goodTube_playerWrapper.goodTube_automaticServer .vjs-source-button ul li.vjs-selected:first-child {\n\t\t\t\tbackground: #ffffff !important;\n\t\t\t\tcolor: #000000 !important;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_automaticServer .vjs-source-button ul li.vjs-selected {\n\t\t\t\tbackground-color: rgba(255, 255, 255, .2) !important;\n\t\t\t\tcolor: #ffffff !important;\n\t\t\t}\n\n\n\t\t\t/* Hide the volume tooltip */\n\t\t\t#goodTube_playerWrapper .vjs-volume-bar .vjs-mouse-display {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\t#contentContainer.tp-yt-app-drawer[swipe-open].tp-yt-app-drawer::after {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\t/* Live streams */\n\t\t\t#goodTube_playerWrapper .vjs-live .vjs-progress-control {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-live .vjs-duration-display,\n\t\t\t#goodTube_playerWrapper .vjs-live .vjs-time-divider {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\t/* Seek bar */\n\t\t\t#goodTube_playerWrapper .vjs-progress-control {\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 48px;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: calc(24px + 3px);\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control .vjs-slider {\n\t\t\t\tmargin: 0;\n\t\t\t\tbackground: transparent;\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 3px;\n\t\t\t\tleft: 8px;\n\t\t\t\tright: 8px;\n\t\t\t\ttop: auto;\n\t\t\t\ttransition: height .1s linear, bottom .1s linear;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control:hover .vjs-slider {\n\t\t\t\tpointer-events: none;\n\t\t\t\theight: 5px;\n\t\t\t\tbottom: 2px;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control .vjs-slider .vjs-load-progress {\n\t\t\t\theight: 100%;\n\t\t\t\tbackground: rgba(255, 255, 255, .2);\n\t\t\t\ttransition: none;\n\t\t\t\tposition: static;\n\t\t\t\tmargin-bottom: -3px;\n\t\t\t\ttransition: margin .1s linear;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control:hover .vjs-slider .vjs-load-progress {\n\t\t\t\tmargin-bottom: -5px;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control .vjs-slider .vjs-load-progress .vjs-control-text {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control .vjs-slider .vjs-load-progress > div {\n\t\t\t\tbackground: transparent !important;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control .vjs-slider .vjs-play-progress {\n\t\t\t\tbackground: transparent;\n\t\t\t\tposition: static;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control .vjs-slider .vjs-play-progress::before {\n\t\t\t\tcontent: '';\n\t\t\t\tbackground: #ff0000;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tposition: static;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control .vjs-slider .vjs-play-progress::after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: block;\n\t\t\t\tfloat: right;\n\t\t\t\tbackground: #ff0000;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\topacity: 0;\n\t\t\t\twidth: 13px;\n\t\t\t\theight: 13px;\n\t\t\t\tright: -7px;\n\t\t\t\ttop: -8px;\n\t\t\t\ttransition: opacity .1s linear, top .1s linear;\n\t\t\t\tposition: relative;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control:hover .vjs-slider .vjs-play-progress::after {\n\t\t\t\topacity: 1;\n\t\t\t\ttop: -9px;\n\t\t\t}\n\n\n\t\t\t/* Without chapters */\n\t\t\t#goodTube_playerWrapper:not(.goodTube_hasChapters) .vjs-progress-control::before {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 3px;\n\t\t\t\tleft: 8px;\n\t\t\t\tright: 8px;\n\t\t\t\theight: 3px;\n\t\t\t\tbackground: rgba(255, 255, 255, .2);\n\t\t\t\ttransition: height .1s linear, bottom .1s linear;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper:not(.goodTube_hasChapters) .vjs-progress-control:hover::before {\n\t\t\t\theight: 5px;\n\t\t\t\tbottom: 2px;\n\t\t\t}\n\n\n\t\t\t/* With chapters */\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control .goodTube_chapters {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tleft: 8px;\n\t\t\t\tright: 8px;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control .goodTube_chapters .goodTube_chapter {\n\t\t\t\theight: 100%;\n\t\t\t\tposition: absolute;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control .goodTube_chapters .goodTube_chapter::before {\n\t\t\t\tcontent: '';\n\t\t\t\tbackground: rgba(255, 255, 255, .2);\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 2px;\n\t\t\t\tbottom: 3px;\n\t\t\t\theight: 3px;\n\t\t\t\ttransition: height .1s linear, bottom .1s linear, background .1s linear;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control .goodTube_chapters .goodTube_chapter.goodTube_redChapter::before {\n\t\t\t\tbackground: #ff0000 !important;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control .goodTube_chapters .goodTube_chapter:last-child::before {\n\t\t\t\tright: 0;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control:hover .goodTube_chapters .goodTube_chapter::before {\n\t\t\t\theight: 5px;\n\t\t\t\tbottom: 2px;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters:not(.goodTube_mobile) .vjs-progress-control .goodTube_chapters .goodTube_chapter:hover::before {\n\t\t\t\theight: 9px;\n\t\t\t\tbottom: 0;\n\t\t\t\tbackground: rgba(255, 255, 255, .4);\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control .goodTube_markers {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control .goodTube_marker {\n\t\t\t\twidth: 2px;\n\t\t\t\theight: 100%;\n\t\t\t\tposition: absolute;\n\t\t\t\tbackground: rgba(0, 0, 0, .2);\n\t\t\t\tmargin-left: -2px;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control .goodTube_marker.goodTube_showMarker {\n\t\t\t\tbackground: rgba(0, 0, 0, .6);\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control .goodTube_marker:last-child {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control .vjs-mouse-display {\n\t\t\t\tbackground: transparent;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_hasChapters .vjs-progress-control .vjs-mouse-display .vjs-time-tooltip::before {\n\t\t\t\tcontent: attr(chapter-title);\n\t\t\t\tdisplay: block;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\tmargin-bottom: 4px;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control .goodTube_hoverBar {\n\t\t\t\tbackground: rgba(255, 255, 255, .4);\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 3px;\n\t\t\t\tleft: 8px;\n\t\t\t\theight: 3px;\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: height .1s linear, bottom .1s linear, opacity .1s linear;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper .vjs-progress-control:hover .goodTube_hoverBar {\n\t\t\t\theight: 5px;\n\t\t\t\tbottom: 2px;\n\t\t\t\topacity: 1;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .vjs-time-control .vjs-duration-display {\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .vjs-time-control .vjs-duration-display::after {\n\t\t\t\tcontent: attr(chapter-title);\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcolor: #ffffff;\n\t\t\t\tmargin-left: 3px;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .vjs-progress-control .vjs-slider,\n\t\t\t#goodTube_playerWrapper.goodTube_mobile:not(.goodTube_hasChapters) .vjs-progress-control::before,\n\t\t\t#goodTube_playerWrapper.goodTube_mobile.goodTube_hasChapters .vjs-progress-control .goodTube_chapters,\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .vjs-progress-control .goodTube_hoverBar {\n\t\t\t\tleft: 16px;\n\t\t\t\tright: 16px;\n\t\t\t}\n\n\n\t\t\t/* Audio only view */\n\t\t\t#goodTube_playerWrapper.goodTube_audio {\n\t\t\t\tbackground: #000000;\n\t\t\t\tposition: relative;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_audio .video-js::after {\n\t\t\t\tcontent: '\\f107';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t\tcolor: #ffffff;\n\t\t\t\tfont-family: VideoJS;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-style: normal;\n\t\t\t\tfont-size: 148px;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t@media (max-width: 768px) {\n\t\t\t\t#goodTube_playerWrapper.goodTube_audio .video-js::after {\n\t\t\t\t\tfont-size: 100px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile #goodTube_playerWrapper.goodTube_audio .video-js::after {\n\t\t\t\tfont-size: 100px;\n\t\t\t}\n\n\t\t\t/* Double tap or tap and hold elements for seeking on mobile */\n\t\t\t#goodTube_seekBackwards {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tbottom: 48px;\n\t\t\t\tcontent: '';\n\t\t\t\twidth: 25%;\n\t\t\t}\n\n\t\t\t#goodTube_seekForwards {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 48px;\n\t\t\t\tcontent: '';\n\t\t\t\twidth: 25%;\n\t\t\t}\n\n\t\t\t/* Desktop */\n\t\t\t#goodTube_playerWrapper {\n\t\t\t\tborder-radius: 12px;\n\t\t\t\tbackground: #ffffff;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tz-index: 999;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\n\t\t\thtml[dark] #goodTube_playerWrapper {\n\t\t\t\tbackground: #0f0f0f;\n\t\t\t}\n\n\t\t\t/* Mobile */\n\t\t\t#goodTube_playerWrapper.goodTube_mobile {\n\t\t\t\tposition: fixed;\n\t\t\t\tbackground: #000000;\n\t\t\t\tborder-radius: 0;\n\t\t\t\tz-index: 3;\n\t\t\t}\n\n\t\t\t/* Theater mode */\n\t\t\t#goodTube_playerWrapper.goodTube_theater {\n\t\t\t\tbackground: #000000;\n\t\t\t\tborder-radius: 0;\n\t\t\t}\n\n\t\t\t/* Miniplayer */\n\t\t\t#goodTube_playerWrapper.goodTube_miniplayer {\n\t\t\t\tz-index: 999 !important;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_miniplayer .video-js {\n\t\t\t\tposition: fixed;\n\t\t\t\tbottom: 12px;\n\t\t\t\tright: 12px;\n\t\t\t\twidth: 400px;\n\t\t\t\tmax-width: calc(100% - 24px);\n\t\t\t\tmin-height: 0;\n\t\t\t\tpadding-top: 0;\n\t\t\t\tz-index: 999;\n\t\t\t\theight: auto;\n\t\t\t\tleft: auto;\n\t\t\t\taspect-ratio: 16 / 9;\n\t\t\t\ttop: auto;\n\t\t\t\toverflow: hidden;\n\t\t\t\tbackground: #000000;\n\t\t\t\tborder-radius: 12px;\n\t\t\t}\n\t\t\t#goodTube_playerWrapper.goodTube_miniplayer .video-js::before {\n\t\t\t\tcontent: none !important;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_miniplayer.goodTube_mobile .video-js {\n\t\t\t\tbottom: 60px;\n\t\t\t}\n\n\t\t\tytd-watch-flexy.goodTube_miniplayer {\n\t\t\t\tdisplay: block !important;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tposition: fixed;\n\t\t\t\tz-index: 999;\n\t\t\t\ttop: -9999px;\n\t\t\t\tleft: -9999px;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-source-button,\n\t\t\t#goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-autoplay-button,\n\t\t\t#goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-miniplayer-button,\n\t\t\t#goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-theater-button {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_closeButton,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_expandButton {\n\t\t\t\tfont-family: VideoJS;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-style: normal;\n\t\t\t\tcursor: pointer;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\twidth: 48px;\n\t\t\t\theight: 48px;\n\t\t\t\tline-height: 48px;\n\t\t\t\ttext-align: center;\n\t\t\t\tz-index: 999;\n\t\t\t\tcolor: #ffffff;\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: opacity .2s linear;\n\t\t\t}\n\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_closeButton::after {\n\t\t\t\tcontent: 'Close';\n\t\t\t\tright: 12px;\n\t\t\t}\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_expandButton::after {\n\t\t\t\tcontent: 'Expand';\n\t\t\t\tleft: 12px;\n\t\t\t}\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_closeButton::after,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_expandButton::after {\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: -24px;\n\t\t\t\tbackground: rgba(0, 0, 0, .75);\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tpadding: 8px;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: opacity .1s;\n\t\t\t\tpointer-events: none;\n\t\t\t\ttext-shadow: none !important;\n\t\t\t\tz-index: 1;\n\t\t\t\tfont-family: 'MS Shell Dlg 2', sans-serif;\n\t\t\t\tline-height: initial;\n\t\t\t}\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_closeButton:hover::after,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_expandButton:hover::after {\n\t\t\t\topacity: 1;\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_closeButton {\n\t\t\t\tright: 0;\n\t\t\t\tfont-size: 24px;\n\t\t\t}\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_closeButton::before {\n\t\t\t\tcontent: \"\\f119\";\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_expandButton {\n\t\t\t\tleft: 0;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js #goodTube_miniplayer_expandButton::before {\n\t\t\t\tcontent: \"\\f128\";\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t}\n\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js.vjs-paused:not(.vjs-user-inactive) #goodTube_miniplayer_expandButton,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js.vjs-user-active #goodTube_miniplayer_expandButton,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js.vjs-paused:not(.vjs-user-inactive) #goodTube_miniplayer_closeButton,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js.vjs-user-active #goodTube_miniplayer_closeButton {\n\t\t\t\topacity: 1;\n\t\t\t}\n\n\t\t\t/* Mobile */\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile {\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js .vjs-control.vjs-play-control,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-control.vjs-play-control {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: calc(50% - 48px);\n\t\t\t\tleft: calc(50% - 32px);\n\t\t\t\twidth: 64px;\n\t\t\t\theight: 64px;\n\t\t\t\tbackground: rgba(0, 0, 0, .3);\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tmax-width: 999px !important;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js .vjs-play-control .vjs-icon-placeholder::before,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-play-control .vjs-icon-placeholder::before {\n\t\t\t\tfont-size: 44px !important;\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js .vjs-prev-button,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-prev-button {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: calc(50% - 40px);\n\t\t\t\tleft: calc(50% - 104px);\n\t\t\t\twidth: 48px;\n\t\t\t\theight: 48px;\n\t\t\t\tbackground: rgba(0, 0, 0, .3);\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tmax-width: 999px !important;\n\t\t\t}\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js .vjs-prev-button .vjs-icon-placeholder::before,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-prev-button .vjs-icon-placeholder::before {\n\t\t\t\tfont-size: 32px !important;\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js .vjs-next-button,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-next-button {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: calc(50% - 40px);\n\t\t\t\tleft: calc(50% + 56px);\n\t\t\t\twidth: 48px;\n\t\t\t\theight: 48px;\n\t\t\t\tbackground: rgba(0, 0, 0, .3);\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tmax-width: 999px !important;\n\t\t\t}\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js .vjs-next-button .vjs-icon-placeholder::before,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-next-button .vjs-icon-placeholder::before {\n\t\t\t\tfont-size: 32px !important;\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js .vjs-control-bar,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-control-bar {\n\t\t\t\tz-index: 1;\n\t\t\t\tposition: static;\n\t\t\t\tmargin-top: auto;\n\t\t\t\tjustify-content: space-around;\n\t\t\t}\n\n\t\t\tytd-watch-flexy:not([theater]) #primary {\n\t\t\t\tmin-width: 721px !important;\n\t\t\t}\n\n\t\t\t@media (max-width: 1100px) {\n\t\t\t\tytd-watch-flexy:not([theater]) #primary {\n\t\t\t\t\tmin-width: 636px !important;\n\t\t\t\t}\n\n\t\t\t\t#goodTube_playerWrapper:not(.goodTube_mobile):not(.goodTube_theater) .video-js .vjs-control-bar .vjs-button {\n\t\t\t\t\tzoom: .88;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media (max-width: 1016px) {\n\t\t\t\tytd-watch-flexy:not([theater]) #primary {\n\t\t\t\t\tmin-width: 0 !important;\n\t\t\t\t}\n\n\t\t\t\t#goodTube_playerWrapper:not(.goodTube_mobile):not(.goodTube_theater) .video-js .vjs-control-bar .vjs-button {\n\t\t\t\t\tzoom: 1;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media (max-width: 786px) {\n\t\t\t\t#goodTube_playerWrapper:not(.goodTube_mobile):not(.goodTube_theater) .video-js .vjs-control-bar .vjs-button {\n\t\t\t\t\tzoom: .9;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media (max-width: 715px) {\n\t\t\t\t#goodTube_playerWrapper:not(.goodTube_mobile):not(.goodTube_theater) .video-js .vjs-control-bar .vjs-button {\n\t\t\t\t\tzoom: .85;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media (max-width: 680px) {\n\t\t\t\t#goodTube_playerWrapper:not(.goodTube_mobile):not(.goodTube_theater) .video-js .vjs-control-bar .vjs-button {\n\t\t\t\t\tzoom: .8;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js .vjs-source-button,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-source-button {\n\t\t\t\tmargin-left: 0 !important;\n\t\t\t}\n\n\t\t\t@media (max-width: 480px) {\n\t\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js .vjs-source-button .vjs-menu,\n\t\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-source-button .vjs-menu {\n\t\t\t\t\tleft: auto !important;\n\t\t\t\t\ttransform: none !important;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js .vjs-loading-spinner,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js .vjs-loading-spinner {\n\t\t\t\ttop: calc(50% - 16px);\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper .video-js.vjs-loading {\n\t\t\t\tbackground: #000000;\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js::before,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js::before {\n\t\t\t\tcontent: '';\n\t\t\t\tbackground: transparent;\n\t\t\t\ttransition: background .2s ease-in-out;\n\t\t\t\tpointer-events: none;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js.vjs-paused::before,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js.vjs-paused::before,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js.vjs-user-active::before,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js.vjs-user-active::before {\n\t\t\t\tbackground: rgba(0,0,0,.6);\n\t\t\t}\n\n\t\t\thtml body #goodTube_playerWrapper.goodTube_mobile .video-js.vjs-user-inactive:not(.vjs-paused) .vjs-control-bar,\n\t\t\thtml body #goodTube_playerWrapper.goodTube_miniplayer .video-js.vjs-user-inactive:not(.vjs-paused) .vjs-control-bar {\n\t\t\t\tvisibility: visible;\n\t\t\t\topacity: 0;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .video-js .vjs-theater-button,\n\t\t\t#goodTube_playerWrapper.goodTube_mobile .video-js .vjs-autoplay-button {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\t/* Video */\n\t\t\t#goodTube_player {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tbackground: transparent;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\t#goodTube_playerWrapper.goodTube_mobile #goodTube_player,\n\t\t\t#goodTube_player.vjs-loading {\n\t\t\t\tbackground: #000000;\n\t\t\t}\n\n\t\t\t#goodTube_player:focus {\n\t\t\t\toutline: 0;\n\t\t\t}\n\n\t\t\t/* Error */\n\t\t\t#goodTube_error {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 40px;\n\t\t\t\tright: 40px;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\ttext-align: center;\n\t\t\t\tcolor: #ffffff;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tpadding: 16px;\n\t\t\t\tbackground: #000000;\n\t\t\t\tborder-radius: 8px;\n\t\t\t}\n\n\t\t\t#goodTube_error small {\n\t\t\t\tpadding-top: 8px;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t",document.head.appendChild(t);let e=document.createElement("div");e.id="goodTube_playerWrapper",$t&&e.classList.add("goodTube_mobile"),gt(e),yt(),document.body.appendChild(e);let o=document.createElement("video");o.id="goodTube_player",o.classList.add("video-js"),o.controls=!0,o.setAttribute("tab-index","1"),e.appendChild(o),Zt=o,addEventListener("leavepictureinpicture",(t=>{void 0===te.v&&lt(Zt),It=!1})),addEventListener("enterpictureinpicture",(t=>{It=!0})),F(),function(){let t=document.createElement("div");t.classList.add("goodTube_defaultQualityModal"),t.innerHTML="\n\t\t\t<div class='goodTube_defaultQualityModal_overlay'></div>\n\n\t\t\t<div class='goodTube_defaultQualityModal_inner'>\n\t\t\t\t<div class='goodTube_defaultQualityModal_title'>Select default quality</div>\n\t\t\t\t<div class='goodTube_defaultQualityModal_options'>\n\t\t\t\t\t<div class='goodTube_defaultQualityModal_option' id='goodTube_defaultQualityModal_option_4320'>4320p</div>\n\t\t\t\t\t<div class='goodTube_defaultQualityModal_option' id='goodTube_defaultQualityModal_option_2160'>2160p</div>\n\t\t\t\t\t<div class='goodTube_defaultQualityModal_option' id='goodTube_defaultQualityModal_option_1440'>1440p</div>\n\t\t\t\t\t<div class='goodTube_defaultQualityModal_option' id='goodTube_defaultQualityModal_option_1080'>1080p</div>\n\t\t\t\t\t<div class='goodTube_defaultQualityModal_option' id='goodTube_defaultQualityModal_option_720'>720p</div>\n\t\t\t\t\t<div class='goodTube_defaultQualityModal_option' id='goodTube_defaultQualityModal_option_480'>480p</div>\n\t\t\t\t\t<div class='goodTube_defaultQualityModal_option' id='goodTube_defaultQualityModal_option_360'>360p</div>\n\t\t\t\t\t<div class='goodTube_defaultQualityModal_option' id='goodTube_defaultQualityModal_option_240'>240p</div>\n\t\t\t\t\t<div class='goodTube_defaultQualityModal_option' id='goodTube_defaultQualityModal_option_144'>144p</div>\n\t\t\t\t\t<div class='goodTube_defaultQualityModal_option' id='goodTube_defaultQualityModal_option_auto'>Auto</div>\n\t\t\t\t</div> \x3c!-- .goodTube_defaultQualityModal_inner --\x3e\n\t\t\t</div> \x3c!-- .goodTube_defaultQualityModal_options --\x3e\n\t\t",document.querySelector("#goodTube_playerWrapper .video-js").appendChild(t),document.querySelectorAll(".goodTube_defaultQualityModal .goodTube_defaultQualityModal_option").forEach((t=>{t.addEventListener("click",(function(){Lt(this.innerHTML.replace("p",""))}))})),document.querySelector(".goodTube_defaultQualityModal .goodTube_defaultQualityModal_overlay").addEventListener("click",(function(){let t=document.querySelector(".goodTube_defaultQualityModal");t.classList.contains("goodTube_defaultQualityModal_visible")&&t.classList.remove("goodTube_defaultQualityModal_visible")})),document.addEventListener("keydown",(function(t){if(27==t.keyCode){let t=document.querySelector(".goodTube_defaultQualityModal");t.classList.contains("goodTube_defaultQualityModal_visible")&&t.classList.remove("goodTube_defaultQualityModal_visible")}}),!0)}(),setInterval(A,1e4),ne(),setInterval(ne,100),setInterval(_,500),setInterval(ot,500),setInterval(it,100),setInterval(X,500),setInterval(Pt,100),setInterval(Ht,100),function(t){document.addEventListener("keydown",(function(e){if(e.ctrlKey)return;let o=e.key.toLowerCase();"mediaplaypause"!==o&&179!==e.keyCode||(t.paused?t.play():t.pause());let n=e.srcElement,r=!1,i=!1;n&&(void 0!==n.nodeName&&(r=n.nodeName.toLowerCase()),void 0!==n.getAttribute&&(i=n.getAttribute("id"))),(!n||-1===r.indexOf("input")&&-1===r.indexOf("label")&&-1===r.indexOf("select")&&-1===r.indexOf("textarea")&&-1===r.indexOf("fieldset")&&-1===r.indexOf("legend")&&-1===r.indexOf("datalist")&&-1===r.indexOf("output")&&-1===r.indexOf("option")&&-1===r.indexOf("optgroup")&&"contenteditable-root"!==i)&&(">"===o?.25==parseFloat(t.playbackRate)?t.playbackRate=.5:.5==parseFloat(t.playbackRate)?t.playbackRate=.75:.75==parseFloat(t.playbackRate)?t.playbackRate=1:1==parseFloat(t.playbackRate)?t.playbackRate=1.25:1.25==parseFloat(t.playbackRate)?t.playbackRate=1.5:1.5==parseFloat(t.playbackRate)?t.playbackRate=1.75:1.75==parseFloat(t.playbackRate)&&(t.playbackRate=2):"<"===o&&(.5==parseFloat(t.playbackRate)?t.playbackRate=.25:.75==parseFloat(t.playbackRate)?t.playbackRate=.5:1==parseFloat(t.playbackRate)?t.playbackRate=.75:1.25==parseFloat(t.playbackRate)?t.playbackRate=1:1.5==parseFloat(t.playbackRate)?t.playbackRate=1.25:1.75==parseFloat(t.playbackRate)?t.playbackRate=1.5:2==parseFloat(t.playbackRate)&&(t.playbackRate=1.75)),e.shiftKey||(n&&void 0!==n.closest&&n.closest("#goodTube_player")&&("arrowdown"===o&&(t.volume>=.05?t.volume-=.05:t.volume=0,e.preventDefault()),"arrowup"===o&&(t.volume<=.95?t.volume+=.05:t.volume=1,e.preventDefault()),"t"===o&&document.querySelector("body").focus()),"arrowleft"===o&&(t.currentTime-=5),"arrowright"===o&&(t.currentTime+=5)," "!==o&&"k"!==o||(t.paused||t.ended?t.play():t.pause()),"m"===o&&(t.muted||t.volume<=0?(t.muted=!1,t.volume<=0&&(t.volume=1)):t.muted=!0),"i"===o&&(e.stopImmediatePropagation(),Ut()),"f"===o?document.querySelector(".vjs-fullscreen-control")?.click():"j"===o?t.currentTime-=10:"l"===o?t.currentTime+=10:"home"===o?t.currentTime=0:"end"===o&&(t.currentTime+=t.duration),"0"===o?t.currentTime=0:"1"===o?t.currentTime=t.duration/100*10:"2"===o?t.currentTime=t.duration/100*20:"3"===o?t.currentTime=t.duration/100*30:"4"===o?t.currentTime=t.duration/100*40:"5"===o?t.currentTime=t.duration/100*50:"6"===o?t.currentTime=t.duration/100*60:"7"===o?t.currentTime=t.duration/100*70:"8"===o?t.currentTime=t.duration/100*80:"9"===o&&(t.currentTime=t.duration/100*90)))}),!0)}(o),$t&&dt(Zt,1)}function gt(t){if(void 0!==te.v||void 0!==te.list){y(t);let e=!1;if($t){if(e=document.getElementById("player"),e&&e.offsetHeight>0){let o=e.getBoundingClientRect();t.style.top=o.top+"px",t.style.left=o.left+"px",t.style.width=e.offsetWidth+"px",t.style.height=e.offsetHeight+"px"}}else if(document.querySelector("ytd-watch-flexy[theater]")?(e=document.getElementById("full-bleed-container"),t.classList.contains("goodTube_theater")||t.classList.add("goodTube_theater")):(e=document.getElementById("player"),t.classList.contains("goodTube_theater")&&t.classList.remove("goodTube_theater")),e&&e.offsetHeight>0){let o=e.getBoundingClientRect();t.style.top=o.top+window.scrollY+"px",t.style.left=o.left+window.scrollX+"px",t.style.width=e.offsetWidth+"px",t.style.height=e.offsetHeight+"px"}if(e){document.querySelectorAll(".vjs-menu-content").forEach((t=>{t.style.maxHeight=e.offsetHeight-72+"px"}))}}else g(t);window.requestAnimationFrame((function(){gt(t)}))}function yt(){if(!$t)return;let t=document.querySelector(".vjs-current-time"),e=document.querySelector(".vjs-time-divider"),o=document.querySelector(".vjs-duration");if(t&&e&&o){let n=16,r=4;t.style.left=n+"px",e.style.left=n+t.offsetWidth+r+"px",o.style.left=n+t.offsetWidth+e.offsetWidth+r+r+"px"}window.requestAnimationFrame((function(){yt()}))}let ft=0,ht=1,jt=!1,_t=!1,Tt=!1;function xt(t){if(void 0===te.v)return void($=[]);if(ht=1,void 0!==o.reloadVideo&&clearTimeout(o.reloadVideo),void 0!==o.loadVideoData&&clearTimeout(o.loadVideoData),pt(t),ct(),ft++,ft>3)return void Vt();t.querySelectorAll("source").forEach((t=>{t.remove()}));let n=!1;1===r||2===r?n=a+"/api/v1/videos/"+te.v:3===r&&(n=a+"/streams/"+te.v),fetch(n,{signal:AbortSignal.timeout(5e3)}).then((t=>t.text())).then((n=>{ct();let l=JSON.parse(n),s=!1,u=!1,p=!1,c=!1,v=!1,m=!1,b=!1;if(1===r?void 0===l.formatStreams?b=!0:(s=l.formatStreams,u=l.captions,p=l.storyboards,v=l.description,m=l.lengthSeconds,c=!1):2===r?void 0===l.dashUrl&&void 0===l.hlsUrl?b=!0:(s=!1,u=l.captions,p=l.storyboards,v=l.description,m=l.lengthSeconds,c=!1):3===r&&(void 0===l.hls&&void 0===l.dash?b=!0:(u=!1,p=!1,v=l.description.replace(/<br>/g,"\r\n").replace(/<[^>]*>?/gm,""),m=l.duration,void 0!==l.chapters&&l.chapters.length&&l.chapters.length>0&&(c=[],l.chapters.forEach((t=>{c.push({time:parseFloat(t.start),title:t.title})}))))),b)return void 0!==o.loadVideoData&&clearTimeout(o.loadVideoData),o.loadVideoData=setTimeout((function(){xt(t)}),e),void ct();if(console.log("[GoodTube] Video data loaded"),1===r){Tt&&t.querySelector(".goodTube_source_"+Tt)?(t.querySelector(".goodTube_source_"+Tt).setAttribute("selected",!0),_t=Tt):(t.querySelector(".goodTube_source_"+jt)?.setAttribute("selected",!0),_t=jt);let e=document.createElement("source");e.setAttribute("src",a+"/watch?v="+te.v+"&raw=1&listen=1"),e.setAttribute("type","audio/mp3"),e.setAttribute("label","Audio"),e.setAttribute("video",!0),e.setAttribute("class","goodTube_source_audio"),t.appendChild(e);let o=0;jt=!1,s.forEach((e=>{let n=!1,r=!1,l=!1,s=!1;if(n=a+"/latest_version?id="+te.v+"&itag="+e.itag,i&&(n+="&local=true"),r=e.type,l=parseFloat(e.resolution.replace("p","").replace("hd",""))+"p",s=parseFloat(e.resolution.replace("p","").replace("hd","")),n&&r&&l&&-1!==r.toLowerCase().indexOf("video")){let e=document.createElement("source");e.setAttribute("src",n),e.setAttribute("type",r),e.setAttribute("label",l),e.setAttribute("video",!0),e.setAttribute("class","goodTube_source_"+s),t.appendChild(e),(!jt||s>jt)&&(jt=s)}o++})),Tt&&t.querySelector(".goodTube_source_"+Tt)?(t.querySelector(".goodTube_source_"+Tt).setAttribute("selected",!0),_t=Tt):(t.querySelector(".goodTube_source_"+jt)?.setAttribute("selected",!0),_t=jt);let n=[];t.querySelectorAll("source[video=true]").forEach((t=>{n.push({src:t.getAttribute("src"),type:t.getAttribute("type"),label:t.getAttribute("label"),selected:t.getAttribute("selected")})})),q.src(n);let r=document.querySelectorAll(".vjs-quality-selector");2===r.length&&(r[1].style.display="none",r[0].style.display="block")}else if(2===r){let t=!1,e=!1,o="false";i&&(o="true"),void 0!==l.hlsUrl&&l.hlsUrl?(t=l.hlsUrl+"?local="+o+"&amp;unique_res=1",e="application/x-mpegURL"):void 0!==l.dashUrl&&l.dashUrl&&(t=l.dashUrl+"?local="+o+"&amp;unique_res=1",e="application/dash+xml"),t&&"/"===t[0]&&(t=a+t),q.src({src:t,type:e}),kt()}else if(3===r){let t=!1,e=!1,o="false";i&&(o="true"),void 0!==l.hls&&l.hls?(t=l.hls,e="application/x-mpegURL"):void 0!==l.dash&&l.dash&&(t=l.dash,e="application/dash+xml"),t&&"/"===t[0]&&(t=a+t),q.src({src:t,type:e}),kt()}setTimeout((function(){at(t)}),1),function(t,e){(!e||e.length>0)&&(console.log("[GoodTube] Loading subtitles..."),d=e?0:1,Qt(t,e,a))}(t,u),console.log("[GoodTube] Loading chapters..."),Ct(t,v,m,c),$t||(console.log("[GoodTube] Loading storyboard..."),Bt=!1,Ot(t,p,0))})).catch((n=>{void 0!==o.loadVideoData&&clearTimeout(o.loadVideoData),o.loadVideoData=setTimeout((function(){xt(t)}),e),ct()}))}let wt=!1;function kt(){wt&&clearTimeout(wt);let t=document.querySelectorAll(".vjs-quality-selector");if(!t||void 0===t[1])return wt&&clearTimeout(wt),void(wt=setTimeout(kt,100));if(2===t.length){t[0].style.display="none",t[1].style.display="block";let e=t[1].querySelector("ul"),o=e.querySelector("li.vjs-menu-item:first-child .vjs-menu-item-text");if(!o)return wt&&clearTimeout(wt),void(wt=setTimeout(kt,100));let n=o;if("Select default quality"!==o.innerHTML){n=document.createElement("li"),n.classList.add("vjs-menu-item"),n.classList.add("select-default"),n.innerHTML='\n\t\t\t\t\t\t<span class="vjs-menu-item-text">Select default quality</span>\n\t\t\t\t\t\t<span class="vjs-control-text" aria-live="polite"></span>\n\t\t\t\t\t',n.addEventListener("click",St),e.prepend(n),e.querySelectorAll("li.vjs-menu-item:not(.select-default)").forEach((t=>{t.addEventListener("click",At),t.addEventListener("touchstart",At)}))}let r=b("goodTube_selectDefaultNew");r||(m("goodTube_selectDefaultNew","720"),r="720"),Lt(r)}}function St(){let t=document.querySelector(".goodTube_defaultQualityModal");t.classList.contains("goodTube_defaultQualityModal_visible")||t.classList.add("goodTube_defaultQualityModal_visible")}function Lt(t){m("goodTube_selectDefaultNew",t);let e=document.querySelector(".goodTube_defaultQualityModal");e.classList.contains("goodTube_defaultQualityModal_visible")&&e.classList.remove("goodTube_defaultQualityModal_visible"),document.querySelector(".goodTube_defaultQualityModal_selected")?.classList.remove("goodTube_defaultQualityModal_selected"),document.querySelector("#goodTube_defaultQualityModal_option_"+t.toLowerCase())?.classList.add("goodTube_defaultQualityModal_selected");let o=!1;document.querySelectorAll(".vjs-quality-selector li.vjs-menu-item").forEach((e=>{let n=e.querySelector(".vjs-menu-item-text").innerHTML.replace("p","");("auto"===n.toLowerCase()&&"auto"===t.toLowerCase()||parseFloat(n)<=parseFloat(t)&&!o)&&(o=e)})),o&&(o.click(),"auto"===t.toLowerCase()?console.log("[GoodTube] Setting default quality to "+t[0].toUpperCase()+t.slice(1)):console.log("[GoodTube] Selecting nearest default quality to "+t+"p ("+o.querySelector(".vjs-menu-item-text").innerHTML+")"))}function At(){let t=document.querySelectorAll(".vjs-quality-selector")[1],e=t.querySelector("li.select-default");e.classList.contains("vjs-selected")&&e.classList.remove("vjs-selected");let o=t.querySelector("li.vjs-auto-selected");o&&o.classList.remove("vjs-auto-selected")}let Wt=!1,qt=!1,Et=!1;function Ct(t,e,o,n){Mt();let r=[];if(n)r=n;else{let n=e.split("\n"),i=/(\d{0,2}:?\d{1,2}:\d{2})/g;for(let t of n){const e=t.match(i);if(e){let o=e[0],n=t.split(" ").filter((t=>!t.includes(o))).join(" ");r.push({time:o,title:n})}}if((!r.length||r.length<=0||r[0].time.split(":").reduce(((t,e)=>60*t+ +e))>0)&&(r=[]),(!r.length||r.length<=0)&&!$t){let n=Array.from(document.querySelectorAll("#panels ytd-engagement-panel-section-list-renderer:nth-child(2) #content ytd-macro-markers-list-renderer #contents ytd-macro-markers-list-item-renderer #endpoint #details"));Et&&clearInterval(Et);let i=JSON.stringify(document.querySelectorAll("#panels ytd-engagement-panel-section-list-renderer:nth-child(2) #content ytd-macro-markers-list-renderer #contents ytd-macro-markers-list-item-renderer #endpoint #details"));Et=setInterval((function(){let n=JSON.stringify(document.querySelectorAll("#panels ytd-engagement-panel-section-list-renderer:nth-child(2) #content ytd-macro-markers-list-renderer #contents ytd-macro-markers-list-item-renderer #endpoint #details"));n!==i&&(i=n,Ct(t,e,o))}),1e3);let a=n.map((t=>({title:t.querySelector(".macro-markers")?.textContent,time:t.querySelector("#time")?.textContent}))).filter((t=>void 0!==t.title&&null!==t.title&&void 0!==t.time&&null!==t.time));r=[...new Map(a.map((t=>[t.time,t]))).values()]}}let i=0;r.length&&r.length>0&&(i=r[0].time,"number"!=typeof i&&(i=i.split(":").reduce(((t,e)=>60*t+ +e)))),(!r.length||r.length<=0||i>0)&&(r=[]),r.length>0?function(t,e,o){let n=document.createElement("div");n.classList.add("goodTube_chapters");let r=document.createElement("div");r.classList.add("goodTube_markers");let i=0;e.forEach((t=>{let a=document.createElement("div");a.classList.add("goodTube_chapter"),void 0!==e[i+1]&&("number"==typeof e[i+1].time?a.setAttribute("chapter-time",e[i+1].time):a.setAttribute("chapter-time",e[i+1].time.split(":").reduce(((t,e)=>60*t+ +e))));let l=document.createElement("div");l.classList.add("goodTube_marker"),void 0!==e[i+1]&&("number"==typeof e[i+1].time?l.setAttribute("marker-time",e[i+1].time):l.setAttribute("marker-time",e[i+1].time.split(":").reduce(((t,e)=>60*t+ +e)))),$t||a.addEventListener("mouseover",(function(){document.querySelector("#goodTube_playerWrapper .vjs-progress-control .vjs-mouse-display .vjs-time-tooltip")?.setAttribute("chapter-title",t.title)}));let s=0;s="number"==typeof t.time?t.time:t.time.split(":").reduce(((t,e)=>60*t+ +e));let d=s/o*100;a.style.left=d+"%";let u=o;void 0!==e[i+1]&&(u="number"==typeof e[i+1].time?e[i+1].time:e[i+1].time.split(":").reduce(((t,e)=>60*t+ +e)));let p=u/o*100;a.style.width=p-d+"%",l.style.left=p+"%",n.appendChild(a),r.appendChild(l),i++})),$t&&(qt=setInterval((function(){let o=parseFloat(t.currentTime),n=!1;e.forEach((t=>{let e=!1;e="number"==typeof t.time?t.time:t.time.split(":").reduce(((t,e)=>60*t+ +e)),parseFloat(o)>=parseFloat(e)&&(n=t.title)})),n&&document.querySelector("#goodTube_playerWrapper .vjs-time-control .vjs-duration-display")?.setAttribute("chapter-title","· "+n)}),100));document.querySelector("#goodTube_playerWrapper .vjs-progress-control")?.appendChild(n),document.querySelector("#goodTube_playerWrapper .vjs-progress-control .vjs-play-progress")?.appendChild(r),document.querySelector("#goodTube_playerWrapper").classList.contains("goodTube_hasChapters")||document.querySelector("#goodTube_playerWrapper").classList.add("goodTube_hasChapters");Wt=setInterval((function(){document.querySelectorAll(".goodTube_markers .goodTube_marker").forEach((e=>{e.getAttribute("marker-time")&&(parseFloat(t.currentTime)>=parseFloat(e.getAttribute("marker-time"))?e.classList.contains("goodTube_showMarker")||e.classList.add("goodTube_showMarker"):e.classList.contains("goodTube_showMarker")&&e.classList.remove("goodTube_showMarker"))})),document.querySelectorAll(".goodTube_chapters .goodTube_chapter").forEach((e=>{e.getAttribute("chapter-time")&&(parseFloat(t.currentTime)>=parseFloat(e.getAttribute("chapter-time"))?e.classList.contains("goodTube_redChapter")||e.classList.add("goodTube_redChapter"):e.classList.contains("goodTube_redChapter")&&e.classList.remove("goodTube_redChapter"))}))}),100),console.log("[GoodTube] Chapters loaded")}(t,r,o):console.log("[GoodTube] No chapters found")}function Mt(){Wt&&(clearInterval(Wt),Wt=!1),qt&&(clearInterval(qt),qt=!1),Et&&(clearInterval(Et),Et=!1),document.querySelector("#goodTube_playerWrapper .vjs-time-control .vjs-duration-display")?.setAttribute("chapter-title",""),document.querySelector(".goodTube_chapters")?.remove(),document.querySelector(".goodTube_markers")?.remove(),document.querySelector("#goodTube_playerWrapper").classList.contains("goodTube_hasChapters")&&document.querySelector("#goodTube_playerWrapper").classList.remove("goodTube_hasChapters")}function Qt(t,e,o){if(d>0){if(void 0===p[d-1])return void console.log("[GoodTube] Subtitles could not be loaded");o=p[d-1],fetch(o+"/api/v1/videos/"+te.v,{signal:AbortSignal.timeout(5e3)}).then((t=>t.text())).then((e=>{let n=JSON.parse(e).captions;n&&n.length>0?fetch(o+n[0].url,{signal:AbortSignal.timeout(5e3)}).then((t=>t.text())).then((e=>{"WEBVTT"!==e.substr(0,6)?Qt(t,n,o):Rt(t,n,o)})).catch((e=>{Qt(t,n,o)})):console.log("[GoodTube] This video does not have subtitles")})).catch((n=>{Qt(t,e,o)}))}else fetch(o+e[0].url,{signal:AbortSignal.timeout(5e3)}).then((t=>t.text())).then((n=>{"WEBVTT"!==n.substr(0,6)?Qt(t,e,o):Rt(t,e,o)})).catch((n=>{Qt(t,e,o)}));d++}function Rt(t,e,o){let n=!1;e.forEach((t=>{let e=!1,r=!1;e=o+t.url,r=t.label,e&&r&&r!==n&&(n=r,r=r[0].toUpperCase()+r.slice(1),q.addRemoteTextTrack({kind:"captions",language:r,src:e},!1))})),console.log("[GoodTube] Subtitles loaded")}let zt=!1,Bt=!1;function Ot(t,e,o){if(!Bt)if(void 0!==p[o])if(3===r){let n=p[o]+"/api/v1/videos/"+te.v;fetch(n,{signal:AbortSignal.timeout(5e3)}).then((t=>t.text())).then((n=>{if(Bt)return;let r=JSON.parse(n);void 0===r.storyboards?(o++,Ot(t,e,o)):(e=r.storyboards,u=1,Dt(t,e,p[o]))})).catch((n=>{o++,Ot(t,e,o)}))}else u=0,Dt(t,e,a);else console.log("[GoodTube] Storyboard could not be loaded")}function Dt(t,e,o){if(!Bt){if(u>0){if(void 0===p[u-1])return void console.log("[GoodTube] Storyboard could not be loaded");o=p[u-1]}u++,!e.length||e.length<=0?Dt(t,e,o):fetch(o+e[0].url,{signal:AbortSignal.timeout(5e3)}).then((t=>t.text())).then((n=>{if(!Bt)if("WEBVTT"!==n.substr(0,6))Dt(t,e,o);else{let r=!1,i=!1,a=n.split("\n\n");if(a.length&&a.length>1){let t=a[1].split("\n");t.length&&t.length>1&&(i=t[1],-1!==i.indexOf("https")&&(r=!0))}r?fetch(i,{signal:AbortSignal.timeout(5e3)}).then((t=>t.text())).then((n=>{Bt||(-1===n.indexOf("<html")?function(t,e,o){if(Bt)return;let n=!1,r=0;e.forEach((t=>{parseFloat(t.width)>r&&parseFloat(t.height)<100&&(n=t.url,r=parseFloat(t.width))})),n&&("function"==typeof q.vttThumbnails&&(zt=q.vttThumbnails),q.vttThumbnails=zt,q.vttThumbnails({src:o+n}),Bt=!0,console.log("[GoodTube] Storyboard loaded"))}(0,e,o):Dt(t,e,o))})).catch((n=>{Dt(t,e,o)})):Dt(t,e,o)}})).catch((n=>{Dt(t,e,o)}))}}let It=!1;function Pt(){It&&"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",(()=>{at(Zt)})),navigator.mediaSession.setActionHandler("pause",(()=>{lt(Zt)})),et?navigator.mediaSession.setActionHandler("nexttrack",(()=>{rt(!0)})):navigator.mediaSession.setActionHandler("nexttrack",null),tt?navigator.mediaSession.setActionHandler("previoustrack",(()=>{nt()})):navigator.mediaSession.setActionHandler("previoustrack",null))}let Gt=!1,Ft=!1;function Ht(){if(Gt){if(!$t){let t=document.querySelector("ytd-watch-flexy");t&&(void 0!==te.v||void 0!==te.list?t.classList.remove("goodTube_miniplayer"):t.classList.add("goodTube_miniplayer"))}void 0===te.v&&void 0===te.list||(Ft=te.v)}}function Ut(){if(document.pictureInPictureEnabled)return void(It?(document.exitPictureInPicture(),It=!1):(Zt.requestPictureInPicture(),It=!0,Gt&&Ut()));let t=document.querySelector("#goodTube_playerWrapper");Gt?(t.classList.remove("goodTube_miniplayer"),Gt=!1,void 0===te.v&&pt(Zt)):(t.classList.add("goodTube_miniplayer"),Gt=!0,Ft=te.v)}function Vt(){B&&clearTimeout(B),O&&clearTimeout(O);let t=b("goodTube_videoServer_withauto"),e=!1;if(void 0===n[s]&&(e=!0),"automatic"===t&&e){let t=document.querySelector("#goodTube_player");vt(),pt(Zt);let e=document.createElement("div");e.setAttribute("id","goodTube_error"),e.innerHTML="Video could not be loaded. The servers are not responding :(<br><small>Please refresh the page / try again soon!</small>",t.appendChild(e)}else"automatic"===t?(console.log("[GoodTube] Video could not be loaded - selecting next video source..."),Zt.currentTime>0&&(G=Zt.currentTime),mt("automatic",!0)):(console.log("[GoodTube] Video could not be loaded - selecting next video source..."),Zt.currentTime>0&&(G=Zt.currentTime),s=0,mt("automatic",!0))}let Nt=[t+"/js/assets.min.js",t+"/css/assets.min.css"],Jt=0,Kt=0;function Yt(){console.log("[GoodTube] Loading player assets..."),Kt=0,Xt(Nt[Jt])}function Xt(t){Kt++,Kt>3?console.log("[GoodTube] Player assets could not be loaded"):fetch(t).then((t=>t.text())).then((e=>{let o=!1;-1!==t.indexOf("/js/")?o=document.createElement("script"):-1!==t.indexOf("/css/")&&(o=document.createElement("style")),o.innerHTML=e,document.head.appendChild(o),Jt++,Jt>=Nt.length?console.log("[GoodTube] Player assets loaded"):(Kt=0,Xt(Nt[Jt]))})).catch((n=>{void 0!==o.loadAsset&&clearTimeout(o.loadAsset),o.loadAsset=setTimeout((function(){Xt(t)}),e)}))}let Zt=!1,$t=!1,te=!1,ee=!1,oe=!1;function ne(){if(Jt>=Nt.length&&E){let t=ee;t&&(t=t.split("#")[0],t=t.split("index=")[0]);let e=window.location.href;if(e&&(e=e.split("#")[0],e=e.split("index=")[0]),t===e)return;if(te=v(),void 0!==te.v||void 0!==te.list){if(console.log("\n-------------------------\n\n"),"true"===b("goodTube_previous")?($.pop(),m("goodTube_previous","false")):$.push(window.location.href),ft=0,G=0,"automatic"===b("goodTube_videoServer_withauto")){let t=!1;void 0!==te.list&&(t=te.list),t&&oe===t?s>0&&s--:s=0,mt("automatic",!1)}console.log("[GoodTube] Loading video data from "+l+"..."),xt(Zt),fetch("https://api.counterapi.dev/v1/goodtube/videos/up/")}else if(!Gt&&!It){pt(Zt),$=[];for(let t in o)o.hasOwnProperty(t)&&clearTimeout(o[t])}oe=void 0!==te.list&&te.list,ee=window.location.href}}!function(){-1!==window.location.href.indexOf("m.youtube")&&($t=!0),te=v(),h(0),void 0!==te.goodtube_local&&("true"===te.goodtube_local?m("goodTube_local","true"):"false"===te.goodtube_local&&m("goodTube_local","false")),"true"===b("goodTube_local")&&(n.splice(1,0,{name:"LOCAL",type:2,proxy:!0,url:"http://127.0.0.1:3000"}),console.log("[GoodTube] Local video server enabled! 🚀"));let t=b("goodTube_videoServer_withauto");t&&n.forEach((e=>{e.url===t&&(r=e.type,i=e.proxy,a=e.url,l=e.name)})),window.addEventListener("beforeunload",(t=>{m("goodTube_lastDownloadTimeSeconds",(new Date).getTime()/1e3)})),function(){let t=document.createElement("style");t.textContent="\n\t\t\t.ytd-search ytd-shelf-renderer,\n\t\t\tytd-reel-shelf-renderer,\n\t\t\tytd-merch-shelf-renderer,\n\t\t\tytd-action-companion-ad-renderer,\n\t\t\tytd-display-ad-renderer,\n\t\t\tytd-rich-section-renderer,\n\t\t\tytd-video-masthead-ad-advertiser-info-renderer,\n\t\t\tytd-video-masthead-ad-primary-video-renderer,\n\t\t\tytd-in-feed-ad-layout-renderer,\n\t\t\tytd-ad-slot-renderer,\n\t\t\tytd-statement-banner-renderer,\n\t\t\tytd-banner-promo-renderer-background\n\t\t\tytd-ad-slot-renderer,\n\t\t\tytd-in-feed-ad-layout-renderer,\n\t\t\tytd-engagement-panel-section-list-renderer:not(.ytd-popup-container):not([target-id='engagement-panel-clip-create']),\n\t\t\tytd-compact-video-renderer:has(.goodTube_hidden),\n\t\t\tytd-rich-item-renderer:has(> #content > ytd-ad-slot-renderer)\n\t\t\t.ytd-video-masthead-ad-v3-renderer,\n\t\t\tdiv#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint,\n\t\t\tdiv#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer,\n\t\t\tdiv#main-container.style-scope.ytd-promoted-video-renderer,\n\t\t\tdiv#player-ads.style-scope.ytd-watch-flexy,\n\t\t\t#clarify-box,\n\n\t\t\tytm-rich-shelf-renderer,\n\t\t\tytm-search ytm-shelf-renderer,\n\t\t\tytm-button-renderer.icon-avatar_logged_out,\n\t\t\tytm-companion-slot,\n\t\t\tytm-reel-shelf-renderer,\n\t\t\tytm-merch-shelf-renderer,\n\t\t\tytm-action-companion-ad-renderer,\n\t\t\tytm-display-ad-renderer,\n\t\t\tytm-rich-section-renderer,\n\t\t\tytm-video-masthead-ad-advertiser-info-renderer,\n\t\t\tytm-video-masthead-ad-primary-video-renderer,\n\t\t\tytm-in-feed-ad-layout-renderer,\n\t\t\tytm-ad-slot-renderer,\n\t\t\tytm-statement-banner-renderer,\n\t\t\tytm-banner-promo-renderer-background\n\t\t\tytm-ad-slot-renderer,\n\t\t\tytm-in-feed-ad-layout-renderer,\n\t\t\tytm-compact-video-renderer:has(.goodTube_hidden),\n\t\t\tytm-rich-item-renderer:has(> #content > ytm-ad-slot-renderer)\n\t\t\t.ytm-video-masthead-ad-v3-renderer,\n\t\t\tdiv#root.style-scope.ytm-display-ad-renderer.yt-simple-endpoint,\n\t\t\tdiv#sparkles-container.style-scope.ytm-promoted-sparkles-web-renderer,\n\t\t\tdiv#main-container.style-scope.ytm-promoted-video-renderer,\n\t\t\tdiv#player-ads.style-scope.ytm-watch-flexy,\n\t\t\tytm-pivot-bar-item-renderer:has(> .pivot-shorts),\n\t\t\tytd-compact-movie-renderer,\n\n\t\t\tyt-about-this-ad-renderer,\n\t\t\tmasthead-ad,\n\t\t\tad-slot-renderer,\n\t\t\tyt-mealbar-promo-renderer,\n\t\t\tstatement-banner-style-type-compact,\n\t\t\tytm-promoted-sparkles-web-renderer,\n\t\t\ttp-yt-iron-overlay-backdrop,\n\t\t\t#masthead-ad\n\t\t\t {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\n\t\t\t.style-scope[page-subtype='channels'] ytd-shelf-renderer,\n\t\t\t.style-scope[page-subtype='channels'] ytm-shelf-renderer {\n\t\t\t\tdisplay: block !important;\n\t\t\t}\n\t\t",document.head.appendChild(t),console.log("[GoodTube] Ads removed")}(),function(){let t=document.createElement("style");t.textContent="\n\t\t\t.goodTube_hidden {\n\t\t\t\tposition: fixed !important;\n\t\t\t\ttop: -9999px !important;\n\t\t\t\tleft: -9999px !important;\n\t\t\t\ttransform: scale(0) !important;\n\t\t\t\tpointer-events: none !important;\n\t\t\t}\n\n\t\t\t.goodTube_hiddenPlayer {\n\t\t\t\tposition: relative;\n\t\t\t\toverflow: hidden;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\t.goodTube_hiddenPlayer::before {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tbackground: #ffffff;\n\t\t\t\tz-index: 998;\n\t\t\t}\n\n\t\t\thtml[dark] .goodTube_hiddenPlayer::before {\n\t\t\t\tbackground: #0f0f0f;\n\t\t\t}\n\t\t",document.head.appendChild(t)}(),W(),setInterval(W,1),x(),setInterval(x,1),setInterval(T,1e3),setInterval(k,1e3),setInterval(j,100),Yt(),document.addEventListener("DOMContentLoaded",bt),"interactive"!==document.readyState&&"complete"!==document.readyState||bt(),b("goodTube_unique_new2")||(fetch("https://api.counterapi.dev/v1/goodtube/users/up/"),m("goodTube_unique_new2","true"))}()}();


///* Start spoofViewport.js */
//// Enables 4K resolution tricking youtube into thinking that we are on a 4K TV
//(function () {
//    try {
//    if (window.screen.width >= 3840 || window.screen.height >= 2160) return;
//      var existing = document.querySelector('meta[name="viewport"]');
//      if (existing) {
//        existing.setAttribute(
//          "content",
//          "width=3840, height=2160, initial-scale=1.0"
//        );
//      } else {
//        var meta = document.createElement("meta");
//        meta.name = "viewport";
//        meta.content = "width=3840, height=2160, initial-scale=1.0";
//        document.head.appendChild(meta);
//      }
//    } catch (error) {  }
//})();
///* End spoofViewport.js */
//
///* Start menuTrigger.js */
//// Add a "button" to fool you...
//(function () {
//  function getSearchBar() {
//    const searchBars = document.querySelectorAll(
//      '[idomkey="ytLrSearchBarSearchTextBox"]'
//    );
//    return searchBars[searchBars.length - 1] ?? null;
//  }
//
//  function addMenuButton() {
//    const searchBar = getSearchBar();
//    if (!searchBar) return;
//
//    const parent = searchBar.parentNode;
//    if (parent.querySelector('button[data-notubetv="menu"]')) return; // already exists
//
//    // Align horizontally to the search box
//    parent.style.display = "flex";
//    parent.style.flexDirection = "row";
//    parent.style.alignItems = "center";
//
//    // Create the NoTUbeTV Menu button
//    const menuButton = document.createElement("button");
//    menuButton.setAttribute("data-notubetv", "menu");
//    menuButton.innerHTML = `
//      <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)">
//        <path d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v3h20V8a2 2 0 0 0-2-2zM10 4h4v2h-4V4zm10 7H2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7z"/>
//      </svg>`;
//    menuButton.style.marginLeft = "54px";
//    menuButton.style.padding = "35px";
//    menuButton.style.background = "rgba(255, 255, 255, 0.1)";
//    menuButton.style.border = "none";
//    menuButton.style.borderRadius = "88px";
//
//    // Insert right next the search box
//    parent.insertBefore(menuButton, searchBar.nextSibling);
//  }
//
//  addMenuButton();
//
//  // Here the fooling part begins.
//  // If the search tab is focused and the 'right arrow" is pressed, open up the menu.
//
//  document.addEventListener("keydown", function (event) {
//    if (event.key === "ArrowRight") {
//      const searchBar = getSearchBar();
//      const isFocused = searchBar?.classList?.contains(
//        "ytLrSearchTextBoxFocused"
//      );
//      if (searchBar && isFocused) {
//        modernUI(); // from 'userscript.js'
//        const menuButton = document.querySelector(
//          'button[data-notubetv="menu"]'
//        );
//        menuButton.style.background = "white";
//      }
//    }
//  });
//
//  const observer = new MutationObserver((mutations) => {
//    const searchBar = getSearchBar();
//    if (
//      searchBar &&
//      !searchBar.parentNode.querySelector('[data-notubetv="menu"]')
//    ) {
//      addMenuButton(); // Re-add if missing
//    }
//  });
//
//  observer.observe(document.body, {
//    childList: true,
//    subtree: true,
//  });
//})();
///* End menuTrigger.js */
//
///* Start exitBridge.js */
//// Exit Bridge to react to exit button call.
//(function () {
//  const observer = new MutationObserver((mutations, obs) => {
//    const exitButton = document.querySelector(
//      ".ytVirtualListItemLast ytlr-button.ytLrButtonLargeShape"
//    );
//
//    if (exitButton) {
//      exitButton.addEventListener(
//        "keydown",
//        (e) => {
//          if (
//            (e.key === "Enter" || e.keyCode === 13) &&
//            typeof ExitBridge !== "undefined" &&
//            ExitBridge.onExitCalled
//          ) {
//            e.preventDefault();
//            e.stopPropagation();
//            ExitBridge.onExitCalled();
//          }
//        },
//        true
//      );
//    }
//  });
//  observer.observe(document.body, { childList: true, subtree: true });
//})();
///* End exitBridge.js */
//
///* Start TizenTubeScripts.js */
//(function () {
//  "use strict";
//
//  const CONFIG_KEY = "ytaf-configuration";
//  const defaultConfig = {
//    enableAdBlock: true,
//    enableSponsorBlock: true,
//    sponsorBlockManualSkips: [],
//    enableSponsorBlockSponsor: true,
//    enableSponsorBlockIntro: true,
//    enableSponsorBlockOutro: true,
//    enableSponsorBlockInteraction: true,
//    enableSponsorBlockSelfPromo: true,
//    enableSponsorBlockMusicOfftopic: true,
//    enableShorts: true,
//  };
//
//  let localConfig;
//
//  try {
//    localConfig = JSON.parse(window.localStorage[CONFIG_KEY]);
//  } catch (err) {
//    //console.warn('Config read failed:', err);
//    localConfig = defaultConfig;
//  }
//
//  window.localConfig = window.localStorage[CONFIG_KEY]
//    ? JSON.parse(window.localStorage[CONFIG_KEY])
//    : defaultConfig;
//
//  window.configRead = function (key) {
//    if (window.localConfig[key] === undefined) {
//      window.localConfig[key] = defaultConfig[key];
//    }
//    return window.localConfig[key];
//  };
//
//  window.configWrite = function (key, value) {
//    window.localConfig[key] = value;
//    window.localStorage[CONFIG_KEY] = JSON.stringify(window.localConfig);
//  };
//
//  function showToast(title, subtitle, thumbnails) {
//    const toastCmd = {
//      openPopupAction: {
//        popupType: "TOAST",
//        popup: {
//          overlayToastRenderer: {
//            title: {
//              simpleText: title,
//            },
//            subtitle: {
//              simpleText: subtitle,
//            },
//          },
//        },
//      },
//    };
//    resolveCommand(toastCmd);
//  }
//
//  function showModal(title, content, selectIndex, id, update) {
//    if (!update) {
//      const closeCmd = {
//        signalAction: {
//          signal: "POPUP_BACK",
//        },
//      };
//      resolveCommand(closeCmd);
//    }
//
//    const modalCmd = {
//      openPopupAction: {
//        popupType: "MODAL",
//        popup: {
//          overlaySectionRenderer: {
//            overlay: {
//              overlayTwoPanelRenderer: {
//                actionPanel: {
//                  overlayPanelRenderer: {
//                    header: {
//                      overlayPanelHeaderRenderer: {
//                        title: {
//                          simpleText: title,
//                        },
//                      },
//                    },
//                    content: {
//                      overlayPanelItemListRenderer: {
//                        items: content,
//                        selectedIndex: selectIndex,
//                      },
//                    },
//                  },
//                },
//                backButton: {
//                  buttonRenderer: {
//                    accessibilityData: {
//                      accessibilityData: {
//                        label: "Back",
//                      },
//                    },
//                    command: {
//                      signalAction: {
//                        signal: "POPUP_BACK",
//                      },
//                    },
//                  },
//                },
//              },
//            },
//            dismissalCommand: {
//              signalAction: {
//                signal: "POPUP_BACK",
//              },
//            },
//          },
//        },
//        uniqueId: id,
//      },
//    };
//
//    if (update) {
//      modalCmd.openPopupAction.shouldMatchUniqueId = true;
//      modalCmd.openPopupAction.updateAction = true;
//    }
//
//    resolveCommand(modalCmd);
//  }
//
//  function buttonItem(title, icon, commands) {
//    const button = {
//      compactLinkRenderer: {
//        serviceEndpoint: {
//          commandExecutorCommand: {
//            commands,
//          },
//        },
//      },
//    };
//
//    if (title) {
//      button.compactLinkRenderer.title = {
//        simpleText: title.title,
//      };
//    }
//
//    if (title.subtitle) {
//      button.compactLinkRenderer.subtitle = {
//        simpleText: title.subtitle,
//      };
//    }
//
//    if (icon) {
//      button.compactLinkRenderer.icon = {
//        iconType: icon.icon,
//      };
//    }
//
//    if (icon && icon.secondaryIcon) {
//      button.compactLinkRenderer.secondaryIcon = {
//        iconType: icon.secondaryIcon,
//      };
//    }
//
//    return button;
//  }
//
//  window.modernUI = function modernUI(update, parameters) {
//    const settings = [
//      {
//        name: "Ad block",
//        icon: "DOLLAR_SIGN",
//        value: "enableAdBlock",
//      },
//      {
//        name: "SponsorBlock",
//        icon: "MONEY_HAND",
//        value: "enableSponsorBlock",
//      },
//      {
//        name: "Skip Sponsor Segments",
//        icon: "MONEY_HEART",
//        value: "enableSponsorBlockSponsor",
//      },
//      {
//        name: "Skip Intro Segments",
//        icon: "PLAY_CIRCLE",
//        value: "enableSponsorBlockIntro",
//      },
//      {
//        name: "Skip Outro Segments",
//        value: "enableSponsorBlockOutro",
//      },
//      {
//        name: "Skip Interaction Reminder Segments",
//        value: "enableSponsorBlockInteraction",
//      },
//      {
//        name: "Skip Self-Promotion Segments",
//        value: "enableSponsorBlockSelfPromo",
//      },
//      {
//        name: "Skip Off-Topic Music Segments",
//        value: "enableSponsorBlockMusicOfftopic",
//      },
//      {
//        name: "Shorts",
//        icon: "YOUTUBE_SHORTS_FILL_24",
//        value: "enableShorts",
//      },
//    ];
//
//    const buttons = [];
//
//    let index = 0;
//    for (const setting of settings) {
//      const currentVal = setting.value ? configRead(setting.value) : null;
//      buttons.push(
//        buttonItem(
//          { title: setting.name, subtitle: setting.subtitle },
//          {
//            icon: setting.icon ? setting.icon : "CHEVRON_DOWN",
//            secondaryIcon:
//              currentVal === null
//                ? "CHEVRON_RIGHT"
//                : currentVal
//                ? "CHECK_BOX"
//                : "CHECK_BOX_OUTLINE_BLANK",
//          },
//          currentVal !== null
//            ? [
//                {
//                  setClientSettingEndpoint: {
//                    settingDatas: [
//                      {
//                        clientSettingEnum: {
//                          item: setting.value,
//                        },
//                        boolValue: !configRead(setting.value),
//                      },
//                    ],
//                  },
//                },
//                {
//                  customAction: {
//                    action: "SETTINGS_UPDATE",
//                    parameters: [index],
//                  },
//                },
//              ]
//            : [
//                {
//                  customAction: {
//                    action: "OPTIONS_SHOW",
//                    parameters: {
//                      options: setting.options,
//                      selectedIndex: 0,
//                      update: false,
//                    },
//                  },
//                },
//              ]
//        )
//      );
//      index++;
//    }
//
//    showModal(
//      "NotubeTv Settings",
//      buttons,
//      parameters && parameters.length > 0 ? parameters[0] : 0,
//      "tt-settings",
//      update
//    );
//  };
//
//  function resolveCommand(cmd, _) {
//    // resolveCommand function is pretty OP, it can do from opening modals, changing client settings and way more.
//    // Because the client might change, we should find it first.
//
//    for (const key in window._yttv) {
//      if (
//        window._yttv[key] &&
//        window._yttv[key].instance &&
//        window._yttv[key].instance.resolveCommand
//      ) {
//        return window._yttv[key].instance.resolveCommand(cmd, _);
//      }
//    }
//  }
//
//  // Patch resolveCommand to be able to change NotubeTv settings
//
//  function patchResolveCommand() {
//    for (const key in window._yttv) {
//      if (
//        window._yttv[key] &&
//        window._yttv[key].instance &&
//        window._yttv[key].instance.resolveCommand
//      ) {
//        const ogResolve = window._yttv[key].instance.resolveCommand;
//        window._yttv[key].instance.resolveCommand = function (cmd, _) {
//          if (cmd.setClientSettingEndpoint) {
//            // Command to change client settings. Use NotubeTv configuration to change settings.
//            for (const settings of cmd.setClientSettingEndpoint.settingDatas) {
//              if (!settings.clientSettingEnum.item.includes("_")) {
//                for (const setting of cmd.setClientSettingEndpoint
//                  .settingDatas) {
//                  const valName = Object.keys(setting).find((key) =>
//                    key.includes("Value")
//                  );
//                  const value =
//                    valName === "intValue"
//                      ? Number(setting[valName])
//                      : setting[valName];
//                  if (valName === "arrayValue") {
//                    const arr = configRead(setting.clientSettingEnum.item);
//                    if (arr.includes(value)) {
//                      arr.splice(arr.indexOf(value), 1);
//                    } else {
//                      arr.push(value);
//                    }
//                    configWrite(setting.clientSettingEnum.item, arr);
//                  } else configWrite(setting.clientSettingEnum.item, value);
//                }
//              }
//            }
//          } else if (cmd.customAction) {
//            customAction(cmd.customAction.action, cmd.customAction.parameters);
//            return true;
//          } else if (cmd?.showEngagementPanelEndpoint?.customAction) {
//            customAction(
//              cmd.showEngagementPanelEndpoint.customAction.action,
//              cmd.showEngagementPanelEndpoint.customAction.parameters
//            );
//            return true;
//          }
//          return ogResolve.call(this, cmd, _);
//        };
//      }
//    }
//  }
//
//  function customAction(action, parameters) {
//    switch (action) {
//      case "SETTINGS_UPDATE":
//        modernUI(true, parameters);
//        break;
//      case "SKIP":
//        const video = document.querySelector("video");
//        if (video) {
//          video.currentTime = parameters.time;
//        }
//        resolveCommand({
//          signalAction: {
//            signal: "POPUP_BACK",
//          },
//        });
//        break;
//    }
//  }
//
//  /**
//   * This is a minimal reimplementation of the following uBlock Origin rule:
//   * https://github.com/uBlockOrigin/uAssets/blob/3497eebd440f4871830b9b45af0afc406c6eb593/filters/filters.txt#L116
//   *
//   * This in turn calls the following snippet:
//   * https://github.com/gorhill/uBlock/blob/bfdc81e9e400f7b78b2abc97576c3d7bf3a11a0b/assets/resources/scriptlets.js#L365-L470
//   *
//   * Seems like for now dropping just the adPlacements is enough for YouTube TV
//   */
//  const origParse = JSON.parse;
//  JSON.parse = function () {
//    const r = origParse.apply(this, arguments);
//    if (r.adPlacements && configRead("enableAdBlock")) {
//      r.adPlacements = [];
//    }
//
//    // Also set playerAds to false, just incase.
//    if (r.playerAds && configRead("enableAdBlock")) {
//      r.playerAds = false;
//    }
//
//    // Also set adSlots to an empty array, emptying only the adPlacements won't work.
//    if (r.adSlots && configRead("enableAdBlock")) {
//      r.adSlots = [];
//    }
//
//    // Drop "masthead" ad from home screen
//    if (
//      r?.contents?.tvBrowseRenderer?.content?.tvSurfaceContentRenderer?.content
//        ?.sectionListRenderer?.contents &&
//      configRead("enableAdBlock")
//    ) {
//      const s = r.contents.tvBrowseRenderer.content.tvSurfaceContentRenderer.content.sectionListRenderer.contents[0];
//      s.shelfRenderer.content.horizontalListRenderer.items =
//      s.shelfRenderer.content.horizontalListRenderer.items.filter(i => !i?.adSlotRenderer)
//    }
//
//    if (
//      !configRead("enableShorts") &&
//      r?.contents?.tvBrowseRenderer?.content?.tvSurfaceContentRenderer?.content
//    ) {
//      r.contents.tvBrowseRenderer.content.tvSurfaceContentRenderer.content.sectionListRenderer.contents =
//        r.contents.tvBrowseRenderer.content.tvSurfaceContentRenderer.content.sectionListRenderer.contents.filter(
//          (shelve) =>
//            shelve.shelfRenderer?.tvhtml5ShelfRendererType !==
//            "TVHTML5_SHELF_RENDERER_TYPE_SHORTS"
//        );
//    }
//
//    return r;
//  };
//
//
//  // The tiny-sha256 module, edited to export itself.
//  var sha256 = function sha256(ascii) {
//    function rightRotate(value, amount) {
//      return (value >>> amount) | (value << (32 - amount));
//    }
//    var mathPow = Math.pow;
//    var maxWord = mathPow(2, 32);
//    var lengthProperty = "length";
//    var i, j; // Used as a counter across the whole file
//    var result = "";
//
//    var words = [];
//    var asciiBitLength = ascii[lengthProperty] * 8;
//
//    //* caching results is optional - remove/add slash from front of this line to toggle
//    // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
//    // (we actually calculate the first 64, but extra values are just ignored)
//    var hash = (sha256.h = sha256.h || []);
//    // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
//    var k = (sha256.k = sha256.k || []);
//    var primeCounter = k[lengthProperty];
//    /*/
//        var hash = [], k = [];
//        var primeCounter = 0;
//        //*/
//
//    var isComposite = {};
//    for (var candidate = 2; primeCounter < 64; candidate++) {
//      if (!isComposite[candidate]) {
//        for (i = 0; i < 313; i += candidate) {
//          isComposite[i] = candidate;
//        }
//        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
//        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
//      }
//    }
//
//    ascii += "\x80"; // Append '1' bit (plus zero padding)
//    while ((ascii[lengthProperty] % 64) - 56) ascii += "\x00"; // More zero padding
//    for (i = 0; i < ascii[lengthProperty]; i++) {
//      j = ascii.charCodeAt(i);
//      if (j >> 8) return; // ASCII check: only accept characters in range 0-255
//      words[i >> 2] |= j << (((3 - i) % 4) * 8);
//    }
//    words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
//    words[words[lengthProperty]] = asciiBitLength;
//
//    // process each chunk
//    for (j = 0; j < words[lengthProperty]; ) {
//      var w = words.slice(j, (j += 16)); // The message is expanded into 64 words as part of the iteration
//      var oldHash = hash;
//      // This is now the "working hash", often labelled as variables a...g
//      // (we have to truncate as well, otherwise extra entries at the end accumulate
//      hash = hash.slice(0, 8);
//
//      for (i = 0; i < 64; i++) {
//        // Expand the message into 64 words
//        // Used below if
//        var w15 = w[i - 15],
//          w2 = w[i - 2];
//
//        // Iterate
//        var a = hash[0],
//          e = hash[4];
//        var temp1 =
//          hash[7] +
//          (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + // S1
//          ((e & hash[5]) ^ (~e & hash[6])) + // ch
//          k[i] +
//          // Expand the message schedule if needed
//          (w[i] =
//            i < 16
//              ? w[i]
//              : (w[i - 16] +
//                  (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) + // s0
//                  w[i - 7] +
//                  (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) | // s1
//                0);
//        // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
//        var temp2 =
//          (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + // S0
//          ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // maj
//
//        hash = [(temp1 + temp2) | 0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
//        hash[4] = (hash[4] + temp1) | 0;
//      }
//
//      for (i = 0; i < 8; i++) {
//        hash[i] = (hash[i] + oldHash[i]) | 0;
//      }
//    }
//
//    for (i = 0; i < 8; i++) {
//      for (j = 3; j + 1; j--) {
//        var b = (hash[i] >> (j * 8)) & 255;
//        result += (b < 16 ? 0 : "") + b.toString(16);
//      }
//    }
//    return result;
//  };
//
//  // Copied from https://github.com/ajayyy/SponsorBlock/blob/9392d16617d2d48abb6125c00e2ff6042cb7bebe/src/config.ts#L179-L233
//  const barTypes = {
//    sponsor: {
//      color: "#00d400",
//      opacity: "0.7",
//      name: "sponsored segment",
//    },
//    intro: {
//      color: "#00ffff",
//      opacity: "0.7",
//      name: "intro",
//    },
//    outro: {
//      color: "#0202ed",
//      opacity: "0.7",
//      name: "outro",
//    },
//    interaction: {
//      color: "#cc00ff",
//      opacity: "0.7",
//      name: "interaction reminder",
//    },
//    selfpromo: {
//      color: "#ffff00",
//      opacity: "0.7",
//      name: "self-promotion",
//    },
//    music_offtopic: {
//      color: "#ff9900",
//      opacity: "0.7",
//      name: "non-music part",
//    },
//  };
//
//  const sponsorblockAPI = "https://api.sponsor.ajay.app/api";
//
//  class SponsorBlockHandler {
//    video = null;
//    active = true;
//
//    attachVideoTimeout = null;
//    nextSkipTimeout = null;
//    sliderInterval = null;
//
//    observer = null;
//    scheduleSkipHandler = null;
//    durationChangeHandler = null;
//    segments = null;
//    skippableCategories = [];
//    manualSkippableCategories = [];
//
//    constructor(videoID) {
//      this.videoID = videoID;
//    }
//
//    async init() {
//      if (!configRead("enableSponsorBlock")) return;
//
//      const videoHash = sha256(this.videoID).substring(0, 4);
//      const categories = [
//        "sponsor",
//        "intro",
//        "outro",
//        "interaction",
//        "selfpromo",
//        "music_offtopic",
//      ];
//
//      const resp = await new Promise((resolve) => {
//        window.onNetworkBridgeResponse = (jsonString) => resolve(jsonString);
//        NetworkBridge.fetch(
//          `${sponsorblockAPI}/skipSegments/${videoHash}?categories=${encodeURIComponent(
//            JSON.stringify(categories)
//          )}`,
//          this.videoID
//        );
//      });
//
//      const result = JSON.parse(resp);
//
//      if (!result || !result.segments || !result.segments.length) {
//        return;
//      }
//
//      this.segments = result.segments;
//      this.manualSkippableCategories = configRead("sponsorBlockManualSkips");
//      this.skippableCategories = this.getSkippableCategories();
//
//      this.scheduleSkipHandler = () => this.scheduleSkip();
//      this.durationChangeHandler = () => this.buildOverlay();
//
//      this.attachVideo();
//      this.buildOverlay();
//    }
//
//    getSkippableCategories() {
//      const skippableCategories = [];
//      if (configRead("enableSponsorBlockSponsor")) {
//        skippableCategories.push("sponsor");
//      }
//      if (configRead("enableSponsorBlockIntro")) {
//        skippableCategories.push("intro");
//      }
//      if (configRead("enableSponsorBlockOutro")) {
//        skippableCategories.push("outro");
//      }
//      if (configRead("enableSponsorBlockInteraction")) {
//        skippableCategories.push("interaction");
//      }
//      if (configRead("enableSponsorBlockSelfPromo")) {
//        skippableCategories.push("selfpromo");
//      }
//      if (configRead("enableSponsorBlockMusicOfftopic")) {
//        skippableCategories.push("music_offtopic");
//      }
//      return skippableCategories;
//    }
//
//    attachVideo() {
//      clearTimeout(this.attachVideoTimeout);
//      this.attachVideoTimeout = null;
//
//      this.video = document.querySelector("video");
//      if (!this.video) {
//        this.attachVideoTimeout = setTimeout(() => this.attachVideo(), 100);
//        return;
//      }
//
//      this.video.addEventListener("play", this.scheduleSkipHandler);
//      this.video.addEventListener("durationchange", this.durationChangeHandler);
//    }
//
//    buildOverlay() {
//      if (this.segmentsoverlay) {
//        return;
//      }
//
//      if (!this.video || !this.video.duration) {
//        return;
//      }
//
//      const videoDuration = this.video.duration;
//
//      this.segmentsoverlay = document.createElement("div");
//      this.segments.forEach((segment) => {
//        const [start, end] = segment.segment;
//        const barType = barTypes[segment.category] || {
//          color: "blue",
//          opacity: 0.7,
//        };
//        const transform = `translateX(${
//          (start / videoDuration) * 100.0
//        }%) scaleX(${(end - start) / videoDuration})`;
//        const elm = document.createElement("div");
//        elm.classList.add("ytLrProgressBarPlayed");
//        elm.style["background"] = barType.color;
//        elm.style["opacity"] = barType.opacity;
//        elm.style["-webkit-transform"] = transform;
//        this.segmentsoverlay.appendChild(elm);
//      });
//
//      this.observer = new MutationObserver((mutations) => {
//        mutations.forEach((m) => {
//          if (m.removedNodes) {
//            for (const node of m.removedNodes) {
//              if (node === this.segmentsoverlay) {
//                this.slider.appendChild(this.segmentsoverlay);
//              }
//            }
//          }
//        });
//      });
//
//      this.sliderInterval = setInterval(() => {
//        this.slider = document.querySelector('[idomkey="slider"]');
//        if (this.slider) {
//          clearInterval(this.sliderInterval);
//          this.sliderInterval = null;
//          this.observer.observe(this.slider, {
//            childList: true,
//          });
//          this.slider.appendChild(this.segmentsoverlay);
//        }
//      }, 500);
//    }
//
//    scheduleSkip() {
//      clearTimeout(this.nextSkipTimeout);
//      this.nextSkipTimeout = null;
//
//      if (!this.active || this.video.paused) return;
//
//      const current = this.video.currentTime;
//
//      const nextSegments = this.segments
//        .filter((seg) => seg.segment[0] >= current - 0.2)
//        .sort((a, b) => a.segment[0] - b.segment[0]);
//
//      if (!nextSegments.length) return;
//
//      const [segment] = nextSegments;
//      const [start, end] = segment.segment;
//
//      if (current >= end) return;
//
//      const delay = Math.max(0, (start - current) * 1000);
//
//      this.nextSkipTimeout = setTimeout(() => {
//        if (this.video.paused) return;
//        if (!this.skippableCategories.includes(segment.category)) return;
//
//        const skipName = barTypes[segment.category]?.name || segment.category;
//        if (!this.manualSkippableCategories.includes(segment.category)) {
//          showToast("SponsorBlock", `Skipping ${skipName}`);
//          this.video.currentTime = end;
//          this.scheduleSkip();
//        }
//      }, delay);
//    }
//
//    destroy() {
//      this.active = false;
//      this.segments = null;
//
//      if (this.nextSkipTimeout) {
//        clearTimeout(this.nextSkipTimeout);
//        this.nextSkipTimeout = null;
//      }
//
//      if (this.attachVideoTimeout) {
//        clearTimeout(this.attachVideoTimeout);
//        this.attachVideoTimeout = null;
//      }
//
//      if (this.sliderInterval) {
//        clearInterval(this.sliderInterval);
//        this.sliderInterval = null;
//      }
//
//      if (this.observer) {
//        this.observer.disconnect();
//        this.observer = null;
//      }
//
//      if (this.segmentsoverlay) {
//        this.segmentsoverlay.remove();
//        this.segmentsoverlay = null;
//      }
//
//      if (this.video) {
//        this.video.removeEventListener("play", this.scheduleSkipHandler);
//        this.video.removeEventListener(
//          "durationchange",
//          this.durationChangeHandler
//        );
//      }
//    }
//  }
//
//  // When this global variable was declared using let and two consecutive hashchange
//  // events were fired (due to bubbling? not sure...) the second call handled below
//  // would not see the value change from first call, and that would cause multiple
//  // SponsorBlockHandler initializations... This has been noticed on Chromium 38.
//  // This either reveals some bug in chromium/webpack/babel scope handling, or
//  // shows my lack of understanding of javascript. (or both)
//
//  window.sponsorblock = null;
//
//  window.addEventListener(
//    "hashchange",
//    () => {
//      if (!configRead("enableSponsorBlock")) {
//        if (window.sponsorblock) window.sponsorblock.destroy();
//        return;
//      }
//      const match = location.hash.match(/[?&]v=([^&]+)/);
//      const videoID = match ? match[1] : null;
//      if (!videoID) return;
//      const needsReload =
//        !window.sponsorblock || window.sponsorblock.videoID != videoID;
//
//      if (needsReload) {
//        if (window.sponsorblock) {
//          window.sponsorblock.destroy();
//          window.sponsorblock = null;
//        }
//
//        window.sponsorblock = new SponsorBlockHandler(videoID);
//        window.sponsorblock.init();
//      }
//    },
//    false
//  );
//
//  /*global navigate*/
//
//  // It just works, okay?
//  const interval$1 = setInterval(() => {
//    const videoElement = document.querySelector("video");
//    if (videoElement) {
//      execute_once_dom_loaded();
//      patchResolveCommand();
//      clearInterval(interval$1);
//    }
//  }, 250);
//
//  function execute_once_dom_loaded() {
//    // Add CSS to head.
//
//    var css_248z =
//      ".ytaf-ui-container {\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  right: 10%;\n  bottom: 10%;\n\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  border-radius: 20px;\n  padding: 20px;\n  font-size: 1.5rem;\n  z-index: 1000;\n}\n\n.ytaf-ui-container :focus {\n  outline: 4px red solid;\n}\n\n.ytaf-ui-container h1 {\n  margin: 0;\n  margin-bottom: 0.5em;\n  text-align: center;\n}\n\n.ytaf-ui-container input[type='checkbox'] {\n  width: 1.4rem;\n  height: 1.4rem;\n}\n\n.ytaf-ui-container input[type='radio'] {\n  width: 1.4rem;\n  height: 1.4rem;\n}\n\n.ytaf-ui-container label {\n  display: block;\n  font-size: 1.4rem;\n}\n\n.ytaf-notification-container {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  font-size: 16pt;\n  z-index: 1200;\n}\n\n.ytaf-notification-container .message {\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 1em;\n  margin: 0.5em;\n  transition: all 0.3s ease-in-out;\n  opacity: 1;\n  line-height: 1;\n  border-right: 10px solid rgba(50, 255, 50, 0.3);\n  display: inline-block;\n  float: right;\n}\n\n.ytaf-notification-container .message-hidden {\n  opacity: 0;\n  margin: 0 0.5em;\n  padding: 0 1em;\n  line-height: 0;\n}\n\n/* Fixes transparency effect for the video player */\n\n.ytLrWatchDefaultShadow {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.8) 90%) !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  display: block !important;\n  height: 100% !important;\n  pointer-events: none !important;\n  position: absolute !important;\n  width: 100% !important;\n}\n\n/* Fixes shorts having a black background */\n\n.ytLrTileHeaderRendererShorts {\n  background-image: none !important;\n}";
//
//    const existingStyle = document.querySelector("style[nonce]");
//    if (existingStyle) {
//      existingStyle.textContent += css_248z;
//    } else {
//      const style = document.createElement("style");
//      style.textContent = css_248z;
//      document.head.appendChild(style);
//    }
//
//    // We handle key events ourselves.
//
//    var uiContainer = document.createElement("div");
//    uiContainer.classList.add("ytaf-ui-container");
//    uiContainer.style["display"] = "none";
//    uiContainer.setAttribute("tabindex", 0);
//
//    uiContainer.addEventListener(
//      "keydown",
//      (evt) => {
//        if (evt.keyCode === 13 || evt.keyCode === 32) {
//          const focusedElement = document.querySelector(":focus");
//          if (focusedElement.type === "checkbox") {
//            focusedElement.checked = !focusedElement.checked;
//            focusedElement.dispatchEvent(new Event("change"));
//          }
//          evt.preventDefault();
//          evt.stopPropagation();
//          return;
//        }
//      },
//      true
//    );
//  }
//})();
///* End TizenTubeScripts.js */