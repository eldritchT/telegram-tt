"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[5525],{74095:(e,t,s)=>{s.d(t,{K:()=>o});var a=s(26926);function r(e,t,s){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var a=s.call(e,t);if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class n{constructor(e,t,s){this.target=e,this.onUpdate=t,this.channel=s,r(this,"requestStates",new Map),r(this,"requestStatesByCallback",new Map)}destroy(){}init(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];this.postMessage({type:"init",args:t})}request(e){const{requestStates:t,requestStatesByCallback:s}=this,r=(0,a.Z)(t),n={type:"callMethod",messageId:r,...e},o={messageId:r},l=new Promise(((e,t)=>{Object.assign(o,{resolve:e,reject:t})}));if("function"==typeof n.args[n.args.length-1]){n.withCallback=!0;const e=n.args.pop();o.callback=e,s.set(e,o)}return t.set(r,o),l.catch((()=>{})).finally((()=>{t.delete(r),o.callback&&s.delete(o.callback)})),this.postMessage(n),l}cancelCallback(e){e.isCanceled=!0;const{messageId:t}=this.requestStatesByCallback.get(e)||{};t&&this.postMessage({type:"cancelProgress",messageId:t})}onMessage(e){const{requestStates:t,channel:s}=this;if(e.channel===s)if("update"===e.type&&this.onUpdate&&this.onUpdate(e.update),"methodResponse"===e.type){const s=t.get(e.messageId);s&&(e.error?s.reject(e.error):s.resolve(e.response))}else if("methodCallback"===e.type)t.get(e.messageId)?.callback?.(...e.callbackArgs);else if("unhandledError"===e.type)throw new Error(e.error?.message)}postMessage(e){e.channel=this.channel,this.target.postMessage(e)}}function o(e,t,s){const a=new n(e,t,s);function r(e){let{data:t}=e;a.onMessage(t)}return e.addEventListener("message",r),a.destroy=()=>{e.removeEventListener("message",r)},a}},3570:(e,t,s)=>{function a(e,t){return t-Math.floor(t/e)*e}s.d(t,{Z:()=>a})}}]);
//# sourceMappingURL=5525.606425857269510151e5.js.map