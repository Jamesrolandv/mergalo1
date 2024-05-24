(self.blocksyJsonP=self.blocksyJsonP||[]).push([[897],{8123:function(e){"use strict";
/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function t(e,r){for(var n,o=0,a=e.length;o<a;o++)n=e[o],Array.isArray(n)?t(n,r):r.push(n);return r}e.exports=function(e){return t(e,[])}},8222:function(e,t,r){"use strict";function n(e,t){const r=function(n){n.target===e&&(e.removeEventListener("transitionend",r),t())};e.addEventListener("transitionend",r)}r.d(t,{k:function(){return n}})},6897:function(e,t,r){"use strict";r.r(t),r.d(t,{mount:function(){return g}});var n=r(439),o=r(4184),a=r.n(o),c=r(2248),i=r(9257),s=r(8222);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let d=!1;const f={};let h=null;const m=function(e){var t,r;let{hasThumbs:o,post:{title:{rendered:c},link:i,_embedded:s={},product_price:l=0,product_status:u="",placeholder_image:p=null}}=e;const d=(f=c,(new DOMParser).parseFromString(f,"text/html").documentElement.textContent);var f;const h={sizes:{thumbnail:{source_url:p}}},m=((null===(t=s["wp:featuredmedia"])||void 0===t||null===(r=t[0])||void 0===r?void 0:r.media_details)||h).sizes||{};return(0,n.h)("a",{className:"ct-search-item",role:"option",key:i,href:i},(s["wp:featuredmedia"]||p)&&o&&(0,n.h)("span",{class:a()({"ct-media-container":!0})},(0,n.h)("img",{src:m.thumbnail?null==m?void 0:m.thumbnail.source_url:v(m).reduce((function(e,t){return t.width<e.width?t:e}),{width:9999999999}).source_url||s["wp:featuredmedia"][0].source_url,style:{aspectRatio:"1/1"}})),(0,n.h)("span",null,d,l||u?(0,n.h)("span",{className:"product-search-meta"},l?(0,n.h)("small",{className:"price",dangerouslySetInnerHTML:{__html:l},key:"price"}):null,u?(0,n.h)("small",{className:"stock-status",dangerouslySetInnerHTML:{__html:u},key:"product-status"}):null):null))},g=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=function(t){"modal"!==u({mode:"inline"},r).mode&&(e.contains(t.target)||y(e.querySelector(".ct-search-results")))},a=e.querySelector('input[type="search"]'),l=u({postType:"ct_forced_any",mode:"inline",perPage:5},r);if(!a)return;if(l.postType=e.querySelector('[name="post_type"]')?`ct_forced_${e.querySelector('[name="post_type"]').value}`:e.querySelector('[name="ct_post_type"]')?`ct_forced_${e.querySelector('[name="ct_post_type"]').value}`:"ct_forced_any",l.postType.includes(":")&&l.postType.replace("ct_forced_",""),l.ctSearchTaxonomies=(null===(t=e.querySelector('[name="ct_search_taxonomies"]'))||void 0===t?void 0:t.value)||"",l.productPrice=!!e.closest('[data-live-results*="product_price"]'),l.productStatus=!!e.closest('[data-live-results*="product_status"]'),!window.fetch)return;let p=function(t){if(document.removeEventListener("click",o),document.addEventListener("click",o),0===t.target.value.trim().length){y(e.querySelector(".ct-search-results"));let t=e.querySelector("[aria-live]");return void(t&&(t.innerHTML=ct_localizations.search_live_no_result))}l.queryCategory=e.querySelector('[name="ct_tax_query"]')?e.querySelector('[name="ct_tax_query"]').value:"",e.classList.add("ct-searching");const r=new URLSearchParams;r.append("_embed","1"),r.append("post_type",l.postType),r.append("per_page",l.perPage),"true"!==l.productPrice&&!0!==l.productPrice||r.append("product_price",l.productPrice),"true"!==l.productStatus&&!0!==l.productStatus||r.append("product_status",l.productStatus),l.queryCategory&&r.append("ct_tax_query",l.queryCategory),l.ctSearchTaxonomies&&r.append("ct_search_taxonomies",l.ctSearchTaxonomies),ct_localizations.lang&&r.append("lang",ct_localizations.lang),r.append("search",t.target.value),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return h&&(h.abort(),h=null),f[e]?new Promise((function(t){t(f[e]),f[e]=f[e].clone()})):("AbortController"in window&&(h=new AbortController),fetch(e,{signal:h.signal,headers:{"X-WP-Nonce":t}}).then((function(t){return f[e]=t.clone(),h=null,t})))}(`${ct_localizations.rest_url}wp/v2/posts${ct_localizations.rest_url.indexOf("?")>-1?"&":"?"}${r.toString()}`,e.querySelector(".ct-live-results-nonce")?e.querySelector(".ct-live-results-nonce").value:"").then((function(r){let o=parseInt(r.headers.get("X-WP-Total"),10);(0,c.Xr)(ct_localizations.dynamic_styles.search_lazy).then((function(){r.json().then((function(r){if(d)return;e.classList.remove("ct-searching");let a=!!e.querySelector(".ct-search-results");d=!0;let c=e.querySelector(".ct-search-results"),{height:u}=c?c.getBoundingClientRect():0;c&&0!==t.target.value.trim().length&&0!==r.length?c&&e.removeChild(c):0!==t.target.value.trim().length&&0!==r.length||y(c);let p=ct_localizations.search_live_no_result;r.length>0&&t.target.value.trim().length>0&&(p=(r.length>1?ct_localizations.search_live_many_results:ct_localizations.search_live_one_result).replace("%s",r.length));let f=e.querySelector("[aria-live]");if(f&&(f.innerHTML=p),r.length>0&&t.target.value.trim().length>0){let c=(0,n.h)("div",{class:"ct-search-results",role:"listbox","aria-label":ct_localizations.search_live_results},r.filter((function(e){return null==e?void 0:e.id})).map((function(t){return m({post:t,hasThumbs:(e.dataset.liveResults||"").indexOf("thumbs")>-1})})),o>l.perPage?(0,n.h)("a",{className:"ct-search-more",href:ct_localizations.search_url.replace(/QUERY_STRING/,t.target.value)},ct_localizations.show_more_text):[]);if(e.appendChild(c),a){let t=e.querySelector(".ct-search-results"),{height:r}=t.getBoundingClientRect();u!==r&&(t.style.height=`${u}px`,t.classList.add("ct-slide"),requestAnimationFrame((function(){t.style.height=`${r}px`,(0,s.k)(t,(function(){t.removeAttribute("style"),t.classList.remove("ct-slide")}))})))}else!function(e){e.classList.add("ct-fade-enter");let{height:t}=e.getBoundingClientRect();e.classList.add("ct-fade-leave"),e.style.height=0,e.closest("form").classList.add("ct-has-dropdown"),requestAnimationFrame((function(){e.style.height=`${t}px`,e.classList.remove("ct-fade-enter"),e.classList.add("ct-fade-enter-active"),(0,s.k)(e,(function(){return e.removeAttribute("style")}))}))}(e.querySelector(".ct-search-results"));e.querySelector(".ct-search-more")&&e.querySelector(".ct-search-more").addEventListener("click",(function(t){t.preventDefault(),e.submit()})),(0,i.O)()&&window.scrollTo(0,0)}d=!1})).catch((function(e){}))}))})).catch((function(e){}))};a.addEventListener("input",p),a.addEventListener("keydown",(function(e){"Escape"===e.key&&e.preventDefault()})),a.addEventListener("focus",(function(e){p(e)})),a.value.length>0&&p({target:a})};function y(e){if(!e)return;let{height:t}=e.getBoundingClientRect();e.classList.add("ct-fade-leave"),e.style.height=`${t}px`,e.closest("form").classList.remove("ct-has-dropdown"),requestAnimationFrame((function(){e.classList.remove("ct-fade-leave"),e.classList.add("ct-fade-leave-active"),e.style.height=0,(0,s.k)(e,(function(){return e.parentNode&&e.parentNode.removeChild(e)}))}))}function v(e){var t=[];if("object"==typeof e||"function"==typeof e){for(var r=Object.keys(e),n=r.length,o=0;o<n;o++)t.push(e[r[o]]);return t}}},4184:function(e,t){var r;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&e.push(c)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},439:function(e,t,r){"use strict";const n=r(4979),o=r(8123),a=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,c=["a","audio","canvas","iframe","script","video"],i=n.filter((e=>!c.includes(e))),s=e=>(e=>i.includes(e))(e)?document.createElementNS("http://www.w3.org/2000/svg",e):e===DocumentFragment?document.createDocumentFragment():document.createElement(e),l=(e,t,r)=>{null!=r&&(/^xlink[AHRST]/.test(t)?e.setAttributeNS("http://www.w3.org/1999/xlink",t.replace("xlink","xlink:").toLowerCase(),r):e.setAttribute(t,r))},u=(e,t,r)=>{const n=s(e);return Object.keys(t).forEach((e=>{const r=t[e];if("class"===e||"className"===e)l(n,"class",r);else if("style"===e)((e,t)=>{Object.keys(t).forEach((r=>{let n=t[r];"number"!=typeof n||a.test(r)||(n+="px"),e.style[r]=n}))})(n,r);else if(0===e.indexOf("on")){const t=e.slice(2).toLowerCase();n.addEventListener(t,r)}else"dangerouslySetInnerHTML"===e?n.innerHTML=r.__html:"key"!==e&&!1!==r&&l(n,e,!0===r?"":r)})),t.dangerouslySetInnerHTML||n.appendChild(r),n};function p(e,t){const r=[].slice.apply(arguments,[2]),n=document.createDocumentFragment();return o(r).forEach((e=>{e instanceof Node?n.appendChild(e):"boolean"!=typeof e&&null!=e&&n.appendChild(document.createTextNode(e))})),u(e,t||{},n)}const d={createElement:p,Fragment:"function"==typeof DocumentFragment?DocumentFragment:()=>{}};e.exports=d,e.exports.h=p,e.exports.default=d},4979:function(e){"use strict";e.exports=JSON.parse('["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"]')}}]);