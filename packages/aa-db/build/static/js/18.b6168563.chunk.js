(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[18],{130:function(e,t,n){"use strict";var a=n(11),r=n(12),c=n(19),u=n(18),o=n(0),i=n.n(o),s=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("img",{alt:"",src:this.props.location,style:this.props.height?{height:this.props.height}:void 0})}}]),n}(i.a.Component);t.a=s},179:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),c=n(19),u=n(18),o=n(0),i=n.n(o),s=n(185),l=n(13),f=n(97),p=n(54),d=n(130),v=n(9),m=(n(179),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={loading:!0,mysticCodes:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;try{f.a.mysticCodeList(this.props.region).then((function(t){e.setState({loading:!1,mysticCodes:t})}))}catch(t){this.setState({error:t})}}},{key:"render",value:function(){var e=this;return this.state.error?i.a.createElement(p.a,{error:this.state.error}):this.state.loading?i.a.createElement(v.a,null):i.a.createElement("div",{id:"mystic-codes"},i.a.createElement(s.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"#"),i.a.createElement("th",{style:{textAlign:"center",width:"140px"}},"Thumbnail"),i.a.createElement("th",null,"Name"))),i.a.createElement("tbody",null,this.state.mysticCodes.map((function(t,n){var a="/".concat(e.props.region,"/mystic-code/").concat(t.id);return i.a.createElement("tr",{key:n},i.a.createElement("td",{align:"center"},i.a.createElement(l.b,{to:a},t.id)),i.a.createElement("td",{align:"center"},i.a.createElement(l.b,{to:a},i.a.createElement(d.a,{location:t.extraAssets.item.male,height:50}),i.a.createElement(d.a,{location:t.extraAssets.item.female,height:50}))),i.a.createElement("td",null,i.a.createElement(l.b,{to:a},t.name)))})))))}}]),n}(i.a.Component));t.default=m},97:function(e,t,n){"use strict";var a=n(115),r=n(11),c=n(12),u=n(99),o=n.n(u),i=n(100),s=n(133),l=n.n(s),f=n(24),p=n(31),d=n(29),v=function(){function e(){Object(r.a)(this,e),this.cache=new Map,this.pending=new Map,this.pendingCatches=new Map}return Object(c.a)(e,[{key:"get",value:function(e,t,n){var a=this,r=this.cache.get(e);if(void 0!==r)return new Promise((function(e){e(r)}));var c=this.pending.get(e);return void 0!==c?new Promise((function(t,n){var r;c.push(t),(null!==(r=a.pendingCatches.get(e))&&void 0!==r?r:[]).push(n)})):(this.pending.set(e,[]),this.pendingCatches.set(e,[]),new Promise((function(r,c){t.call(null).then((function(t){var c;(null!==(c=a.pending.get(e))&&void 0!==c?c:[]).forEach((function(e){e.call(null,t)})),a.cache.set(e,t),a.pending.delete(e),a.pendingCatches.delete(e),null!==n&&window.setTimeout((function(){a.cache.delete(e)}),n),r(t)})).catch((function(t){var n;(null!==(n=a.pendingCatches.get(e))&&void 0!==n?n:[]).forEach((function(e){e.call(null,t)})),a.pending.delete(e),a.pendingCatches.delete(e),c(t)}))})))}}]),e}(),m="https://api.atlasacademy.io",g=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={buff:new v,commandCode:new v,commandCodes:new v,craftEssence:new v,craftEssenceList:new v,func:new v,mysticCode:new v,mysticCodeList:new v,noblePhantasm:new v,quest:new v,servant:new v,servantList:new v,skill:new v,traitMap:new v},b=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,null,[{key:"buff",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return h.buff.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return g("".concat(m,"/nice/").concat(e,"/buff/").concat(t).concat(a))}),2e4)}},{key:"commandCode",value:function(e,t){var n="".concat(e,"-").concat(t);return h.commandCode.get(n,(function(){return g("".concat(m,"/nice/").concat(e,"/CC/").concat(t))}),2e4)}},{key:"commandCodeList",value:function(){var t=Object(i.a)(o.a.mark((function t(n){var r,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==d.a.NA){t.next=4;break}return t.abrupt("return",e.getCommandCodeEssenceList(d.a.NA));case 4:if(n!==d.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCommandCodeEssenceList(d.a.JP));case 6:return t.next=8,e.getCommandCodeEssenceList(d.a.JP);case 8:return r=t.sent,t.next=11,e.getCommandCodeEssenceList(d.a.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"craftEssence",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return h.craftEssence.get(a,(function(){var a="?lore=true"+(n===p.a.ENGLISH?"&lang=en":"");return g("".concat(m,"/nice/").concat(e,"/equip/").concat(t).concat(a))}),2e4)}},{key:"craftEssenceList",value:function(){var t=Object(i.a)(o.a.mark((function t(n){var r,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==d.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableCraftEssenceList(d.a.NA));case 4:if(n!==d.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableCraftEssenceList(d.a.JP));case 6:return t.next=8,e.getCacheableCraftEssenceList(d.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableCraftEssenceList(d.a.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"func",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return h.func.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return g("".concat(m,"/nice/").concat(e,"/function/").concat(t).concat(a))}),2e4)}},{key:"mysticCode",value:function(e,t){var n="".concat(e,"-").concat(t);return h.mysticCode.get(n,(function(){return g("".concat(m,"/nice/").concat(e,"/MC/").concat(t))}),2e4)}},{key:"mysticCodeList",value:function(){var t=Object(i.a)(o.a.mark((function t(n){var r,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==d.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableMysticCodeList(d.a.NA));case 4:if(n!==d.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableMysticCodeList(d.a.JP));case 6:return t.next=8,e.getCacheableMysticCodeList(d.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableMysticCodeList(d.a.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"noblePhantasm",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return h.noblePhantasm.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return g("".concat(m,"/nice/").concat(e,"/NP/").concat(t).concat(a))}),2e4)}},{key:"quest",value:function(e,t,n){var a="".concat(e,"-").concat(t,"-").concat(n);return h.quest.get(a,(function(){return g("".concat(m,"/nice/").concat(e,"/quest/").concat(t,"/").concat(n))}),2e4)}},{key:"servant",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return h.servant.get(a,(function(){var a="?lore=true"+(n===p.a.ENGLISH?"&lang=en":"");return g("".concat(m,"/nice/").concat(e,"/servant/").concat(t).concat(a))}),2e4)}},{key:"servantList",value:function(){var t=Object(i.a)(o.a.mark((function t(n){var r,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==d.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableServantList(d.a.NA));case 4:if(n!==d.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableServantList(d.a.JP));case 6:return t.next=8,e.getCacheableServantList(d.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableServantList(d.a.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"skill",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return h.skill.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return g("".concat(m,"/nice/").concat(e,"/skill/").concat(t).concat(a))}),2e4)}},{key:"traitMap",value:function(e){return h.traitMap.get(e,(function(){return g("".concat(m,"/export/").concat(e,"/nice_trait.json"))}),null)}},{key:"searchBuffs",value:function(e,t,n){var a="?reverse=true";return f.a.language()===p.a.ENGLISH&&(a+="&lang=en"),t&&(a+="&name="+encodeURI(t)),n&&(a+="&type="+n),g("".concat(m,"/nice/").concat(e,"/buff/search").concat(a))}},{key:"searchFuncs",value:function(e,t,n,a,r){var c="?reverse=true";return f.a.language()===p.a.ENGLISH&&(c+="&lang=en"),t&&(c+="&popupText="+encodeURI(t)),n&&(c+="&type="+n),a&&(c+="&targetType="+a),r&&(c+="&targetTeam="+r),g("".concat(m,"/nice/").concat(e,"/function/search").concat(c))}},{key:"getCommandCodeEssenceList",value:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.commandCodes.get(t,(function(){return g("".concat(m,"/export/").concat(t,"/nice_command_code.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableCraftEssenceList",value:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.craftEssenceList.get(t,(function(){return g("".concat(m,"/export/").concat(t,"/basic_equip.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableMysticCodeList",value:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.mysticCodeList.get(t,(function(){return g("".concat(m,"/export/").concat(t,"/nice_mystic_code.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableServantList",value:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.servantList.get(t,(function(){return g("".concat(m,"/export/").concat(t,"/basic_servant.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.a=b}}]);
//# sourceMappingURL=18.b6168563.chunk.js.map