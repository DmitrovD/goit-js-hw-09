parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GyVV":[function(require,module,exports) {
const e={delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]"),submitBtn:document.querySelector("button[type=submit]")};function t(t){t.preventDefault();const o=e.amount.value,u=Number(e.step.value);let i=Number(e.delay.value);for(let e=1;e<=o;e+=1)n(e,i).then(({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}),i+=u}function n(e,t){const n=Math.random()>.3;return new Promise((o,u)=>{setTimeout(()=>{n?o({position:e,delay:t}):u({position:e,delay:t})},t)})}e.submitBtn.addEventListener("click",t);
},{}]},{},["GyVV"], null)
//# sourceMappingURL=/goit-js-hw-09/03-promises.f5387e32.js.map