var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("iQIUW");function i(e,t){return new Promise(((o,r)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const{delay:t,step:o,amount:r}=e.target.elements;let l=t.valueAsNumber;console.dir(t);for(let e=1;e<=r.valueAsNumber;e+=1)i(e,l).then((({position:e,delay:t})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),l+=o.valueAsNumber;e.target.reset()}));
//# sourceMappingURL=03-promises.dab837e0.js.map
