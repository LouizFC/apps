(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[12],{142:function(e,t,a){"use strict";var n=a(12),r=a(13),i=a(23),s=a(22),c=a(0),o=a.n(c),l=a(181),u=(a(150),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.header?o.a.createElement("div",{className:"data-header"},this.props.header):null,o.a.createElement(l.a,{bordered:!0,hover:!0,className:"data-table"},o.a.createElement("tbody",null,Object.keys(this.props.data).map((function(t,n){return o.a.createElement("tr",{key:n},o.a.createElement("th",null,t),o.a.createElement("td",null,a.dumpValue(e.props.data[t])))})))))}}],[{key:"dumpValue",value:function(e){if("object"===typeof e){var t=e;return void 0!==t.key&&void 0!==t.props&&void 0!==t.type?t:JSON.stringify(e)}return e}}]),a}(o.a.Component));t.a=u},144:function(e,t,a){"use strict";var n=a(12),r=a(13),i=a(23),s=a(22),c=a(0),o=a.n(c),l=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e;return o.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:"2em"}})}}]),a}(o.a.Component);t.a=l},145:function(e,t,a){"use strict";var n=a(20),r=a.n(n),i=a(34),s=a(12),c=a(13),o=a(23),l=a(22),u=a(59),p=a(35),d=a(169),f=a.n(d),h=a(170),m=a.n(h),v=a(0),E=a.n(v),y=a(138),b=a(171),g=a.n(b),O=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={showing:!1},n}return Object(c.a)(a,[{key:"hide",value:function(){this.setState({showing:!1})}},{key:"show",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.data){e.next=4;break}this.setState({showing:!0}),e.next=20;break;case 4:if("object"!==typeof this.props.data){e.next=8;break}this.setState({showing:!0,data:this.props.data}),e.next=20;break;case 8:return e.prev=8,e.t0=this,e.next=12,f.a.get(this.props.data);case 12:e.t1=e.sent.data,e.t2={showing:!0,data:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=20;break;case 17:e.prev=17,e.t3=e.catch(8),this.setState({showing:!0,data:{error:e.t3}});case 20:case"end":return e.stop()}}),e,this,[[8,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return E.a.createElement("div",null,E.a.createElement("span",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){e.show()}},"View \xa0",E.a.createElement(p.a,{icon:u.c})),E.a.createElement(y.a,{size:"lg",show:this.state.showing,onHide:function(){return e.hide()}},E.a.createElement(y.a.Header,{closeButton:!0},E.a.createElement(y.a.Title,null,"Raw Data Viewer")),E.a.createElement(y.a.Body,null,this.state.data?E.a.createElement(g.a,{src:this.state.data,collapsed:1,enableClipboard:function(e){"string"===typeof e.src&&m()(e.src)}}):null)))}}]),a}(E.a.Component);t.a=O},150:function(e,t,a){},174:function(e,t,a){"use strict";var n=a(12),r=a(13),i=a(23),s=a(22),c=a(11),o=a(0),l=a.n(o),u=new Map([[0,0],[1,1],[2,1],[3,2],[4,3],[5,3]]),p=new Map([[c.d.SABER,1],[c.d.ARCHER,2],[c.d.LANCER,3],[c.d.RIDER,4],[c.d.CASTER,5],[c.d.ASSASSIN,6],[c.d.BERSERKER,7],[c.d.SHIELDER,8],[c.d.RULER,9],[c.d.ALTER_EGO,10],[c.d.AVENGER,11],[c.d.MOON_CANCER,23],[c.d.FOREIGNER,25],[c.d.GRAND_CASTER,5],[c.d.BEAST_I,20],[c.d.BEAST_II,20],[c.d.BEAST_IIIL,20],[c.d.BEAST_IIIR,20],[c.d.BEAST_UNKNOWN,20],[c.d.ALL,1001],[c.d.EXTRA,1002]]),d=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e;return l.a.createElement("img",{alt:"",src:this.location(),style:{height:null!==(e=this.props.height)&&void 0!==e?e:24}})}},{key:"location",value:function(){var e,t=p.has(this.props.className)?p.get(this.props.className):12,a=null!==(e=this.props.rarity)&&void 0!==e?e:5,n=u.has(a)?u.get(a):3;return"https://assets.atlasacademy.io/GameData/NA/ClassIcons/class".concat(n,"_").concat(t,".png")}}]),a}(l.a.Component);t.a=d},179:function(e,t,a){"use strict";var n=a(12),r=a(13),i=a(23),s=a(22),c=a(167),o=a(0),l=a.n(o),u=a(14),p=a(153),d=a(188),f=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.buff,t=c.a.describe(this.props.buff);return l.a.createElement(u.b,{to:"/".concat(this.props.region,"/buff/").concat(e.id)},"[",e.icon?l.a.createElement(p.a,{location:e.icon}):void 0,e.icon?" ":void 0,d.a.renderAsString(t),"]")}}],[{key:"renderAsString",value:function(e){var t=c.a.describe(e);return"["+d.a.renderAsString(t)+"]"}}]),a}(l.a.Component);t.a=f},184:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(4),s=a.n(i),c=a(0),o=a.n(c),l=a(5),u=["xl","lg","md","sm","xs"],p=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,c=e.noGutters,p=e.as,d=void 0===p?"div":p,f=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(l.b)(a,"row"),m=h+"-cols",v=[];return u.forEach((function(e){var t,a=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&v.push(""+m+n+"-"+t)})),o.a.createElement(d,Object(n.a)({ref:t},f,{className:s.a.apply(void 0,[i,h,c&&"no-gutters"].concat(v))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},186:function(e,t,a){"use strict";var n=a(12),r=a(13),i=a(23),s=a(22),c=a(0),o=a.n(c),l=a(14),u=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(l.b,{to:"/".concat(this.props.region,"/noble-phantasm/").concat(this.props.noblePhantasm.id)},"[",this.props.noblePhantasm.name,"]")}}]),a}(o.a.Component);t.a=u},187:function(e,t,a){"use strict";var n=a(12),r=a(13),i=a(23),s=a(22),c=a(11),o=a(59),l=a(35),u=a(0),p=a.n(u),d=a(14),f=a(144),h=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.craftEssence.extraAssets.faces.equip,t=e?e[this.props.craftEssence.id]:void 0;return p.a.createElement(d.b,{to:"/".concat(this.props.region,"/craft-essence/").concat(this.props.craftEssence.collectionNo)},t?p.a.createElement(f.a,{type:c.f.EntityType.SERVANT_EQUIP,rarity:this.props.craftEssence.rarity,location:t,height:"2em"}):void 0,t?" ":void 0,this.props.craftEssence.name," ",p.a.createElement(l.a,{icon:o.d}))}}]),a}(p.a.Component);t.a=h},190:function(e,t,a){"use strict";var n=a(12),r=a(13),i=a(23),s=a(22),c=a(0),o=a.n(c),l=a(14),u=a(174),p=a(144),d=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"faceIconLocation",value:function(){var e=this.props.servant.extraAssets.faces;if(e.ascension){var t=Object.values(e.ascension).shift();if(t)return t}if(e.costume){var a=Object.values(e.costume).shift();if(a)return a}}},{key:"render",value:function(){var e=this.faceIconLocation();return o.a.createElement(l.b,{to:"/".concat(this.props.region,"/servant/").concat(this.props.servant.collectionNo)},o.a.createElement(u.a,{className:this.props.servant.className,rarity:this.props.servant.rarity,height:this.props.iconHeight})," ",e?o.a.createElement(p.a,{location:e,rarity:this.props.servant.rarity,type:this.props.servant.type,height:this.props.iconHeight}):void 0,e?" ":void 0,this.props.servant.name)}}]),a}(o.a.Component);t.a=d},191:function(e,t,a){"use strict";var n=a(12),r=a(13),i=a(23),s=a(22),c=a(0),o=a.n(c),l=a(142),u=a(145),p=a(179),d=a(154),f=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.func;return o.a.createElement(l.a,{data:{Data:o.a.createElement(u.a,{data:a}),Raw:o.a.createElement(u.a,{data:"https://api.atlasacademy.io/raw/".concat(this.props.region,"/function/").concat(a.funcId,"?expand=true")}),ID:a.funcId,Type:a.funcType,Target:a.funcTargetType,"Affects Players/Enemies":a.funcTargetTeam,"Popup Text":a.funcPopupText,"Target Traits":o.a.createElement("div",null,a.functvals.map((function(e,a){return o.a.createElement(d.a,{key:a,region:t.props.region,trait:e})}))),"Affects Traits":o.a.createElement("div",null,null===(e=a.traitVals)||void 0===e?void 0:e.map((function(e,a){return o.a.createElement(d.a,{key:a,region:t.props.region,trait:e})}))),Buffs:o.a.createElement("div",null,a.buffs.map((function(e,a){return o.a.createElement(p.a,{key:a,region:t.props.region,buff:e})})))}})}}]),a}(o.a.Component);t.a=f},197:function(e,t,a){"use strict";var n=a(12),r=a(13),i=a(23),s=a(22),c=a(0),o=a.n(c),l=a(14),u=a(144),p=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(l.b,{to:"/".concat(this.props.region,"/mystic-code/").concat(this.props.mysticCode.id)},o.a.createElement(u.a,{location:this.props.mysticCode.extraAssets.item.male}),o.a.createElement(u.a,{location:this.props.mysticCode.extraAssets.item.female})," ","[",this.props.mysticCode.name,"]")}}]),a}(o.a.Component);t.a=p},276:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a.n(n),i=a(34),s=a(12),c=a(13),o=a(23),l=a(22),u=a(11),p=a(0),d=a.n(p),f=a(184),h=a(93),m=a(181),v=a(49),E=a(153),y=a(60),b=a(10),g=a(187),O=a(197),j=a(186),k=a(190),R=a(177),N=a(6),A=a(191),T=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loading:!0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){N.a.setRegion(this.props.region),this.loadFunc()}},{key:"loadFunc",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.func(this.props.id);case 3:t=e.sent,this.setState({loading:!1,func:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:e.t0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,n,r,i,s=this;if(this.state.error)return d.a.createElement(y.a,{error:this.state.error});if(this.state.loading||!this.state.func)return d.a.createElement(b.a,null);var c=this.state.func;return d.a.createElement("div",null,d.a.createElement("h1",null,c.funcPopupIcon?d.a.createElement("span",null,d.a.createElement(E.a,{location:c.funcPopupIcon,height:48}),"\xa0"):null,"Function: ",this.props.id),d.a.createElement("br",null),d.a.createElement(A.a,{region:this.props.region,func:c}),d.a.createElement(f.a,null,d.a.createElement(h.a,{xs:12,lg:6},d.a.createElement("h3",null,"Related Skills"),d.a.createElement(m.a,{style:{fontSize:"0.8em"}},d.a.createElement("tbody",null,(null!==(e=null===(t=c.reverse)||void 0===t||null===(a=t.nice)||void 0===a?void 0:a.skill)&&void 0!==e?e:[]).map((function(e,t){var a,n,r,i,c,o;return d.a.createElement("tr",{key:t},d.a.createElement("td",null,(null!==(a=null===(n=e.reverse)||void 0===n||null===(r=n.nice)||void 0===r?void 0:r.servant)&&void 0!==a?a:[]).map((function(e,t){return e.type===u.f.EntityType.SERVANT_EQUIP?d.a.createElement("p",{key:t},d.a.createElement(g.a,{region:s.props.region,craftEssence:e})):e.type===u.f.EntityType.NORMAL||e.type===u.f.EntityType.HEROINE?d.a.createElement("p",{key:t},d.a.createElement(k.a,{region:s.props.region,servant:e})):""})),(null!==(i=null===(c=e.reverse)||void 0===c||null===(o=c.nice)||void 0===o?void 0:o.MC)&&void 0!==i?i:[]).map((function(e,t){return d.a.createElement("p",{key:t},d.a.createElement(O.a,{region:s.props.region,mysticCode:e}))}))),d.a.createElement("td",null,d.a.createElement(R.a,{region:s.props.region,skill:e})))}))))),d.a.createElement(h.a,{xs:12,lg:6},d.a.createElement("h3",null,"Related Noble Phantasms"),d.a.createElement(m.a,{style:{fontSize:"0.8em"}},d.a.createElement("tbody",null,(null!==(n=null===(r=c.reverse)||void 0===r||null===(i=r.nice)||void 0===i?void 0:i.NP)&&void 0!==n?n:[]).map((function(e,t){var a,n,r;return d.a.createElement("tr",{key:t},d.a.createElement("td",null,(null!==(a=null===(n=e.reverse)||void 0===n||null===(r=n.nice)||void 0===r?void 0:r.servant)&&void 0!==a?a:[]).map((function(e,t){return e.type===u.f.EntityType.SERVANT_EQUIP?d.a.createElement("p",{key:t},d.a.createElement(g.a,{region:s.props.region,craftEssence:e})):e.type===u.f.EntityType.NORMAL||e.type===u.f.EntityType.HEROINE?d.a.createElement("p",{key:t},d.a.createElement(k.a,{region:s.props.region,servant:e})):""}))),d.a.createElement("td",null,d.a.createElement(j.a,{region:s.props.region,noblePhantasm:e})))})))))))}}]),a}(d.a.Component);t.default=T}}]);
//# sourceMappingURL=12.a1bd84f2.chunk.js.map