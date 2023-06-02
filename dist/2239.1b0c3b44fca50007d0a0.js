"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[2239],{70172:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(60748),r=n(6137),c=n(83716),i=n(48670),l=n(2155),s=n(46752),a=n(32340),d=n(6202),u=n(70692),m=n(59107),f=n(39415),p=n(57080);const v=(0,s.y)("Avatar");v.media=v("media"),v.icon=v("icon");const g=(0,o.X$)((e=>{let{className:t,size:n="large",chat:g,user:h,photo:Z,userStatus:I,text:C,isSavedMessages:b,withVideo:P,loopIndefinitely:E,lastSyncTime:w,noPersonalPhoto:y,onClick:A}=e;const B=(0,o.sO)(null),k=(0,o.sO)(0),N=h&&(0,i.NB)(h),T=h&&(0,i.pK)(h.id),S=g?.isForum;let U,O;const R=P&&Z?.isVideo,x="jumbo"===n;b||N||(h&&!y?U=(0,i.RT)(h,x?"big":void 0):g?U=(0,i.RT)(g,x?"big":void 0):Z&&(U=`photo${Z.id}?size=m`,Z.isVideo&&P&&(O=`videoAvatar${Z.id}?size=u`)));const L=(0,d.Z)(U,!1,r.IU.BlobUrl,w),D=(0,d.Z)(O,!R,r.IU.BlobUrl,w),M=Boolean(L||D),$=Boolean(D&&R),q=(0,u.Z)(M),F=!b&&h&&I&&(0,i.kM)(h,I),H=(0,u.Z)(F),j=(0,o.Ye)((()=>H.split(" ").map((e=>"shown"===e?"online":`online-${e}`)).join(" ")),[H]),V=(0,o.I4)((e=>{const t=e.currentTarget;D&&(E||(k.current+=1,k.current>=3&&(t.style.display="none")))}),[E,D]),K=(0,m.Z)();let _;const X=h?(0,i.Js)(h):g?(0,i.U)(K,g):C;if(b)_=o.ZP.createElement("i",{className:(0,s.Z)(v.icon,"icon","icon-avatar-saved-messages"),role:"img","aria-label":X});else if(N)_=o.ZP.createElement("i",{className:(0,s.Z)(v.icon,"icon","icon-avatar-deleted-account"),role:"img","aria-label":X});else if(T)_=o.ZP.createElement("i",{className:(0,s.Z)(v.icon,"icon","icon-reply-filled"),role:"img","aria-label":X});else if(M)_=o.ZP.createElement(o.ZP.Fragment,null,o.ZP.createElement("img",{src:L,className:(0,s.Z)(v.media,"avatar-media",q,D&&"poster"),alt:X,decoding:"async"}),$&&o.ZP.createElement(p.Z,{canPlay:!0,src:D,className:(0,s.Z)(v.media,"avatar-media","poster"),muted:!0,loop:E,autoPlay:!0,disablePictureInPicture:!0,playsInline:!0,onEnded:V}));else if(h){const e=(0,i.Js)(h);_=e?(0,l.Xv)(e,2):void 0}else if(g){const e=(0,i.U)(K,g);_=e&&(0,l.Xv)(e,(0,i.YC)(g.id)?2:1)}else C&&(_=(0,l.Xv)(C,2));const z=(0,s.Z)(`Avatar size-${n}`,t,`color-bg-${(0,i.Rs)(h||g)}`,b&&"saved-messages",N&&"deleted-account",T&&"replies-bot-account",S&&"forum",j,A&&"interactive",!b&&!L&&"no-photo"),J=Boolean(b||L),{handleClick:G,handleMouseDown:Y}=(0,f.m)((e=>{A&&A(e,J)})),W=(h||g)&&(h||g).id;return o.ZP.createElement("div",{ref:B,className:z,"data-test-sender-id":c.Cgt?W:void 0,"aria-label":"string"==typeof _?X:void 0,onClick:G,onMouseDown:Y},"string"==typeof _?(0,a.Z)(_,["jumbo"===n?"hq_emoji":"emoji"]):_)}))},22275:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(60748),r=n(33555),c=n(11192),i=n(48670),l=n(32340),s=n(59107),a=n(17551);const d=(0,o.X$)((0,r.c$)(((e,t)=>{let{userId:n}=t;const o=(0,c.jr)(e),r=n&&(0,c.dy)(e,n);return{chat:o,contactName:r?(0,i.Vl)(r):void 0}}))((e=>{let{isOpen:t,chat:n,userId:c,contactName:i,onClose:d}=e;const{deleteChatMember:u}=(0,r.Sv)(),m=(0,s.Z)(),f=(0,o.I4)((()=>{u({chatId:n.id,userId:c}),d()}),[n,u,d,c]);if(n&&c)return o.ZP.createElement(a.Z,{isOpen:t,onClose:d,title:m("GroupRemoved.Remove"),textParts:(0,l.Z)(m("PeerInfo.Confirm.RemovePeer",i)),confirmLabel:m("lng_box_remove"),confirmHandler:f,confirmIsDestructive:!0})})))},17551:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(60748),r=n(59107),c=n(72313),i=n(13103),l=n(231);const s=(0,o.X$)((e=>{let{isOpen:t,onClose:n,onCloseAnimationEnd:s,title:a,header:d,text:u,textParts:m,confirmLabel:f="Confirm",confirmHandler:p,confirmIsDestructive:v,areButtonsInColumn:g,children:h}=e;const Z=(0,r.Z)(),I=(0,o.sO)(null),C=(0,o.I4)((e=>{-1===e&&p()}),[p]),b=(0,c.Z)(I,t,C,".Button");return o.ZP.createElement(i.Z,{className:"confirm",title:a||Z("Telegram"),header:d,isOpen:t,onClose:n,onCloseAnimationEnd:s},u&&u.split("\\n").map((e=>o.ZP.createElement("p",null,e))),m||h,o.ZP.createElement("div",{className:g?"dialog-buttons-column":"dialog-buttons mt-2",ref:I,onKeyDown:b},o.ZP.createElement(l.Z,{className:"confirm-dialog-button",isText:!0,onClick:p,color:v?"danger":"primary"},f),o.ZP.createElement(l.Z,{className:"confirm-dialog-button",isText:!0,onClick:n},Z("Cancel"))))}))},21273:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(60748),r=n(57710),c=n(91713),i=n(69118),l=n(87675),s=n(863),a=n(80036);const d=".ListItem",u=20,m=800,f=e=>{let{ref:t,className:n,items:f,itemSelector:p=d,preloadBackwards:v=u,sensitiveArea:g=m,withAbsolutePositioning:h,maxHeight:Z,noScrollRestore:I=!1,noScrollRestoreOnTop:C=!1,noFastList:b,cacheBuster:P,beforeChildren:E,children:w,onLoadMore:y,onScroll:A,onKeyDown:B,onDragOver:k,onDragLeave:N}=e,T=(0,o.sO)(null);t&&(T=t);const S=(0,o.sO)({}),[U,O]=(0,o.Ye)((()=>y?[(0,i.Ds)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];y({direction:c.Uq.Backwards,noScroll:e})}),1e3,!0,!1),(0,i.Ds)((()=>{y({direction:c.Uq.Forwards})}),1e3,!0,!1)]:[]),[y,f]);(0,o.d4)((()=>{if(!U)return;if(v>0&&(!f||f.length<v))return void U(!0);const{scrollHeight:e,clientHeight:t}=T.current;t&&e<=t&&U()}),[f,U,v]),(0,o.bt)((()=>{(0,r.lT)((()=>{const e=T.current,t=S.current;let n;if(t.listItemElements=e.querySelectorAll(p),t.currentAnchor&&Array.from(t.listItemElements).includes(t.currentAnchor)){const{scrollTop:o}=e,r=t.currentAnchor.getBoundingClientRect().top;n=o+(r-t.currentAnchorTop)}else{const e=t.listItemElements[0];e&&(t.currentAnchor=e,t.currentAnchorTop=e.getBoundingClientRect().top)}if(h||I)return;const{scrollTop:o}=e;return C&&0===o?void 0:()=>{(0,l.Z)(e,n),t.isScrollTopJustUpdated=!0}}))}),[f,p,I,C,P,h]);const R=(0,o.I4)((e=>{if(O&&U){const{isScrollTopJustUpdated:e,currentAnchor:t,currentAnchorTop:n}=S.current,o=S.current.listItemElements;if(e)return void(S.current.isScrollTopJustUpdated=!1);const r=o.length,c=T.current,{scrollTop:i,scrollHeight:l,offsetHeight:s}=c,a=i<=(r?o[0].offsetTop:0)+g,d=(r?o[r-1].offsetTop+o[r-1].offsetHeight:l)-(i+s)<=g;let u=!1;if(a){const e=o[0];if(e){const o=e.getBoundingClientRect().top,r=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:o;t&&void 0!==n&&r>n&&(S.current.currentAnchor=e,S.current.currentAnchorTop=o,u=!0,O())}}if(d){const e=o[r-1];if(e){const o=e.getBoundingClientRect().top,r=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:o;t&&void 0!==n&&r<n&&(S.current.currentAnchor=e,S.current.currentAnchorTop=o,u=!0,U())}}if(!u)if(t?.offsetParent)S.current.currentAnchorTop=t.getBoundingClientRect().top;else{const e=o[0];e&&(S.current.currentAnchor=e,S.current.currentAnchorTop=e.getBoundingClientRect().top)}}A&&A(e)}),[U,O,A,g]);return o.ZP.createElement("div",{ref:T,className:n,onScroll:R,teactFastList:!b&&!h,onKeyDown:B,onDragOver:k,onDragLeave:N},E,h&&f?.length?o.ZP.createElement("div",{teactFastList:!b,style:(0,a.Z)("position: relative",s.wZ&&`height: ${Z}px`)},w):w)}},13103:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(60748),r=n(517),c=n(46752),i=n(98069),l=n(18674),s=n(31212),a=n(72645),d=n(59107),u=n(46590),m=n(231),f=n(62898);const p=e=>{let{dialogRef:t,title:n,className:p,isOpen:v,isSlim:g,header:h,hasCloseButton:Z,noBackdrop:I,noBackdropClose:C,children:b,style:P,onClose:E,onCloseAnimationEnd:w,onEnter:y,shouldSkipHistoryAnimations:A}=e;const{shouldRender:B,transitionClassNames:k}=(0,s.Z)(v,w,A,void 0,A),N=(0,o.sO)(null);(0,o.d4)((()=>{if(v)return(0,i.l_)(),i.In}),[v]);const T=(0,o.I4)((e=>!!y&&(e.preventDefault(),y(),!0)),[y]);(0,o.d4)((()=>v?(0,r.Z)({onEsc:E,onEnter:T}):void 0),[v,E,T]),(0,o.d4)((()=>v&&N.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const o=n.findIndex((e=>e.isSameNode(document.activeElement)));let r=0;o>=0&&(r=t.shiftKey?o>0?o-1:n.length-1:o<n.length-1?o+1:0),n[r].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(N.current):void 0),[v]),(0,u.Z)({isActive:v,onBack:E}),(0,a.Z)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",Boolean(v)),(v||!v&&void 0!==t)&&(0,l.YW)(200),()=>{document.body.classList.remove("has-open-dialog")}}),[v]);const S=(0,d.Z)();if(!B)return;const U=(0,c.Z)("Modal",p,k,I&&"transparent-backdrop",g&&"slim");return o.ZP.createElement(f.Z,null,o.ZP.createElement("div",{ref:N,className:U,tabIndex:-1,role:"dialog"},o.ZP.createElement("div",{className:"modal-container"},o.ZP.createElement("div",{className:"modal-backdrop",onClick:C?void 0:E}),o.ZP.createElement("div",{className:"modal-dialog",ref:t},h||(n?o.ZP.createElement("div",{className:"modal-header"},Z&&o.ZP.createElement(m.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:S("Close"),onClick:E},o.ZP.createElement("i",{className:"icon icon-close"})),o.ZP.createElement("div",{className:"modal-title"},n)):void 0),o.ZP.createElement("div",{className:"modal-content custom-scroll",style:P},b)))))}},42431:(e,t,n)=>{n.d(t,{$5:()=>l,Bj:()=>i,GU:()=>s,Ht:()=>a,fu:()=>u,mU:()=>d});var o=n(14342),r=n(48670),c=n(86087);function i(e,t){const n=(0,o.x6)(e,t);if(n&&n.groupCallId)return l(e,n.groupCallId)}function l(e,t){return e.groupCalls.byId[t]}function s(e,t,n){return l(e,t)?.participants[n]}function a(e){const t=d(e)?.chatId;if(!t)return!1;const n=(0,o.Z1)(e,t);return!!n&&((0,r.G9)(n)&&n.isCreator||Boolean(n.adminRights?.manageCall))}function d(e){const{groupCalls:{activeGroupCallId:t}}=e;if(t)return l(e,t)}function u(e){const{phoneCall:t,currentUserId:n}=e;if(!t||!t.participantId||!t.adminId)return;const o=t.adminId===n?t.participantId:t.adminId;return(0,c.dy)(e,o)}},9211:(e,t,n)=>{n.d(t,{M:()=>c,P:()=>i});var o=n(86087),r=n(83716);function c(e,t){var n;const{appConfig:c}=e;if(!c)return r.prK[t][0];const i=(0,o.wV)(e),{limits:l}=c,s=null!==(n=l[t]?.[i?1:0])&&void 0!==n?n:r.prK[t][i?1:0];return"dialogFilters"===t?s+1:s}function i(e,t){const{appConfig:n}=e;if(!n)return r.prK[t][1];const{limits:o}=n;return o[t][1]}},39415:(e,t,n)=>{n.d(t,{m:()=>r});var o=n(863);function r(e){const t=e?t=>{"mousedown"===t.type&&t.button!==o.tc.Main||e(t)}:void 0;return o.$b?{handleClick:t}:{handleMouseDown:t}}},27407:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(60748),r=n(91713),c=n(60782),i=n(65326),l=n(87204);function s(e,t,n,o){const{length:c}=e,i=o?e.indexOf(o):0,l=t===r.Uq.Forwards?i:i+1||c,s=Math.max(0,l-n),a=l+n-1,d=e.slice(Math.max(0,s),a+1);let u,m;switch(t){case r.Uq.Forwards:u=l>0,m=s>=0;break;case r.Uq.Backwards:u=l<c,m=a<=c-1}return{newViewportIds:d,areSomeLocal:u,areAllLocal:m}}const a=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;const d=(0,o.sO)(),u=(0,o.sO)((()=>{if(!t||d.current)return;const{newViewportIds:e}=s(t,r.Uq.Forwards,a,t[0]);return e})()),m=(0,i.Z)();n&&(d.current={});const f=(0,l.Z)(t),p=(0,l.Z)(n);if(!t||n||t===f&&n===p)t||(u.current=void 0);else{const{offsetId:e=t[0],direction:n=r.Uq.Forwards}=d.current||{},{newViewportIds:o}=s(t,n,a,e);u.current&&(0,c.et)(u.current,o)||(u.current=o)}const v=(0,o.I4)((n=>{let{direction:o,noScroll:i}=n;const l=u.current,f=l?o===r.Uq.Backwards?l[l.length-1]:l[0]:void 0;if(!t)return void(e&&e({offsetId:f}));i||(d.current={...d.current,direction:o,offsetId:f});const{newViewportIds:p,areSomeLocal:v,areAllLocal:g}=s(t,o,a,f);!v||l&&(0,c.et)(l,p)||(u.current=p,m()),!g&&e&&e({offsetId:f})}),[t,a,e,m]);return n?[t]:[u.current,v]}},62357:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(60748);const r=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=(0,o.sO)(e);(0,o.bt)((()=>{r.current=e}),[e]),(0,o.d4)((()=>{if(void 0===t)return;const e=setInterval((()=>r.current()),t);return n||r.current(),()=>clearInterval(e)}),[t,n])}},72645:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(60748);const r=(e,t,n)=>{const r=(0,o.sO)();return(0,o.bt)((()=>{const n=r.current;return r.current=t,e(n||[])}),t,n)}},98069:(e,t,n)=>{n.d(t,{In:()=>c,l_:()=>r,wT:()=>i});let o=0;function r(){o+=1}function c(){o-=1}function i(){return o>0}},87675:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(863);const r=(e,t)=>{o.cj&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),o.cj&&(e.style.overflow="")}}}]);
//# sourceMappingURL=2239.1b0c3b44fca50007d0a0.js.map