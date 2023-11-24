"use strict";(self.webpackChunkdaybreak_bga_stats=self.webpackChunkdaybreak_bga_stats||[]).push([[3733],{3733:(t,e,i)=>{i.r(e),i.d(e,{ion_select:()=>p,ion_select_option:()=>x,ion_select_popover:()=>C});var n=i(5971),o=i(4792),r=i(2565),a=i(3652),s=i(859),l=i(2094),c=function(t,e){var i;return t.forEach((function(t){for(var n=0;n<t.addedNodes.length;n++)i=d(t.addedNodes[n],e)||i})),i},d=function(t,e){if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find((function(e){return e.value===t.value}))},p=function(){function t(t){var e=this;(0,o.r)(this,t),this.ionChange=(0,o.e)(this,"ionChange",7),this.ionCancel=(0,o.e)(this,"ionCancel",7),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.ionStyle=(0,o.e)(this,"ionStyle",7),this.inputId="ion-sel-"+m++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=function(t){e.setFocus(),e.open(t)},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.ionBlur.emit()}}return t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})},t.prototype.connectedCallback=function(){return(0,n.mG)(this,void 0,void 0,(function(){var t=this;return(0,n.Jh)(this,(function(e){return this.updateOverlayOptions(),this.emitStyle(),this.mutationO=function(t,e,i){if("undefined"!==typeof MutationObserver){var n=new MutationObserver((function(t){i(c(t,e))}));return n.observe(t,{childList:!0,subtree:!0}),n}}(this.el,"ion-select-option",(function(){return(0,n.mG)(t,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){return this.updateOverlayOptions(),[2]}))}))})),[2]}))}))},t.prototype.disconnectedCallback=function(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)},t.prototype.componentDidLoad=function(){this.didInit=!0},t.prototype.open=function(t){return(0,n.mG)(this,void 0,void 0,(function(){var e,i,o=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.disabled||this.isExpanded?[2,void 0]:(i=this,[4,this.createOverlay(t)]);case 1:return e=i.overlay=n.sent(),this.isExpanded=!0,e.onDidDismiss().then((function(){o.overlay=void 0,o.isExpanded=!1,o.setFocus()})),[4,e.present()];case 2:return n.sent(),[2,e]}}))}))},t.prototype.createOverlay=function(t){var e=this.interface;return"action-sheet"!==e&&"popover"!==e||!this.multiple||(console.warn('Select interface cannot be "'+e+'" with a multi-value select. Using the "alert" interface instead.'),e="alert"),"popover"!==e||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),e="alert"),"popover"===e?this.openPopover(t):"action-sheet"===e?this.openActionSheet():this.openAlert()},t.prototype.updateOverlayOptions=function(){var t=this.overlay;if(t){var e=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(e,i);break;case"popover":var n=t.querySelector("ion-select-popover");n&&(n.options=this.createPopoverOptions(e,i));break;case"alert":var o=this.multiple?"checkbox":"radio";t.inputs=this.createAlertInputs(e,o,i)}}},t.prototype.createActionSheetButtons=function(t,e){var i=this,n=t.map((function(t){var n=h(t),o=Array.from(t.classList).filter((function(t){return"hydrated"!==t})).join(" "),r=y+" "+o;return{role:u(n,e,i.compareWith)?"selected":"",text:t.textContent,cssClass:r,handler:function(){i.value=n}}}));return n.push({text:this.cancelText,role:"cancel",handler:function(){i.ionCancel.emit()}}),n},t.prototype.createAlertInputs=function(t,e,i){var n=this;return t.map((function(t){var o=h(t),r=Array.from(t.classList).filter((function(t){return"hydrated"!==t})).join(" ");return{type:e,cssClass:y+" "+r,label:t.textContent||"",value:o,checked:u(o,i,n.compareWith),disabled:t.disabled}}))},t.prototype.createPopoverOptions=function(t,e){var i=this;return t.map((function(t){var n=h(t),o=Array.from(t.classList).filter((function(t){return"hydrated"!==t})).join(" "),r=y+" "+o;return{text:t.textContent||"",cssClass:r,value:n,checked:u(n,e,i.compareWith),disabled:t.disabled,handler:function(){i.value=n,i.close()}}}))},t.prototype.openPopover=function(t){return(0,n.mG)(this,void 0,void 0,(function(){var e,i,o,a;return(0,n.Jh)(this,(function(n){return e=this.interfaceOptions,i=(0,r.b)(this),o=this.value,a=Object.assign(Object.assign({mode:i},e),{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,value:o,options:this.createPopoverOptions(this.childOpts,o)}}),[2,s.c.create(a)]}))}))},t.prototype.openActionSheet=function(){return(0,n.mG)(this,void 0,void 0,(function(){var t,e,i;return(0,n.Jh)(this,(function(n){return t=(0,r.b)(this),e=this.interfaceOptions,i=Object.assign(Object.assign({mode:t},e),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",e.cssClass]}),[2,s.b.create(i)]}))}))},t.prototype.openAlert=function(){return(0,n.mG)(this,void 0,void 0,(function(){var t,e,i,o,a,l,c=this;return(0,n.Jh)(this,(function(n){return t=this.getLabel(),e=t?t.textContent:null,i=this.interfaceOptions,o=this.multiple?"checkbox":"radio",a=(0,r.b)(this),l=Object.assign(Object.assign({mode:a},i),{header:i.header?i.header:e,inputs:this.createAlertInputs(this.childOpts,o,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){c.ionCancel.emit()}},{text:this.okText,handler:function(t){c.value=t}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]}),[2,s.a.create(l)]}))}))},t.prototype.close=function(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)},t.prototype.getLabel=function(){return(0,a.h)(this.el)},t.prototype.hasValue=function(){return""!==this.getText()},Object.defineProperty(t.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))},enumerable:!1,configurable:!0}),t.prototype.getText=function(){var t=this.selectedText;return null!=t&&""!==t?t:g(this.childOpts,this.value,this.compareWith)},t.prototype.setFocus=function(){this.focusEl&&this.focusEl.focus()},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})},t.prototype.render=function(){var t,e=this,i=this,n=i.disabled,s=i.el,c=i.inputId,d=i.isExpanded,p=i.name,u=i.placeholder,h=i.value,v=(0,r.b)(this),g=(0,a.d)(s,c),b=g.labelText,m=g.labelId;(0,a.e)(!0,s,p,f(h),n);var y=!1,x=this.getText();""===x&&null!=u&&(x=u,y=!0);var w={"select-text":!0,"select-placeholder":y},C=y?"placeholder":"text",O=void 0!==b?""!==x?x+", "+b:b:x;return(0,o.h)(o.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":n?"true":null,"aria-label":O,class:(t={},t[v]=!0,t["in-item"]=(0,l.h)("ion-item",s),t["select-disabled"]=n,t["select-expanded"]=d,t)},(0,o.h)("div",{"aria-hidden":"true",class:w,part:C},x),(0,o.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,o.h)("div",{class:"select-icon-inner"})),(0,o.h)("label",{id:m},O),(0,o.h)("button",{type:"button",disabled:n,id:c,"aria-labelledby":m,"aria-haspopup":"listbox","aria-expanded":""+d,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(t){return e.focusEl=t}}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}},enumerable:!1,configurable:!0}),t}(),u=function(t,e,i){return void 0!==t&&(Array.isArray(t)?t.some((function(t){return v(t,e,i)})):v(t,e,i))},h=function(t){var e=t.value;return void 0===e?t.textContent||"":e},f=function(t){if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},v=function(t,e,i){return"function"===typeof i?i(t,e):"string"===typeof i?t[i]===e[i]:Array.isArray(e)?e.includes(t):t===e},g=function(t,e,i){return void 0===e?"":Array.isArray(e)?e.map((function(e){return b(t,e,i)})).filter((function(t){return null!==t})).join(", "):b(t,e,i)||""},b=function(t,e,i){var n=t.find((function(t){return v(h(t),e,i)}));return n?n.textContent:null},m=0,y="select-interface-option";p.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}"};var x=function(){function t(t){(0,o.r)(this,t),this.inputId="ion-selopt-"+w++,this.disabled=!1}return t.prototype.render=function(){return(0,o.h)(o.H,{role:"option",id:this.inputId,class:(0,r.b)(this)})},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),t}(),w=0;x.style=":host{display:none}";var C=function(){function t(t){(0,o.r)(this,t),this.options=[]}return t.prototype.onSelect=function(t){var e=this.options.find((function(e){return e.value===t.target.value}));e&&(0,s.s)(e.handler)},t.prototype.render=function(){var t=this.options.find((function(t){return t.checked})),e=t?t.value:void 0;return(0,o.h)(o.H,{class:(0,r.b)(this)},(0,o.h)("ion-list",null,void 0!==this.header&&(0,o.h)("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&(0,o.h)("ion-item",null,(0,o.h)("ion-label",{class:"ion-text-wrap"},void 0!==this.subHeader&&(0,o.h)("h3",null,this.subHeader),void 0!==this.message&&(0,o.h)("p",null,this.message))),(0,o.h)("ion-radio-group",{value:e},this.options.map((function(t){return(0,o.h)("ion-item",{class:(0,l.g)(t.cssClass)},(0,o.h)("ion-label",null,t.text),(0,o.h)("ion-radio",{value:t.value,disabled:t.disabled}))})))))},t}();C.style=".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"},2094:(t,e,i)=>{i.d(e,{c:()=>r,g:()=>a,h:()=>o,o:()=>l});var n=i(5971),o=function(t,e){return null!==e.closest(t)},r=function(t,e){var i;return"string"===typeof t&&t.length>0?Object.assign(((i={"ion-color":!0})["ion-color-"+t]=!0,i),e):e},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,l=function(t,e,i,o){return(0,n.mG)(void 0,void 0,void 0,(function(){var r;return(0,n.Jh)(this,(function(n){return null!=t&&"#"!==t[0]&&!s.test(t)&&(r=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,r.push(t,i,o)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=3733.5cc7364b.chunk.js.map