(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[22],{149:function(e,t,a){"use strict";var n=a(98),r=a.n(n),s=a(99),c=a(11),l=a(12),i=a(19),u=a(18),o=a(53),h=a(30),p=a(0),f=a.n(p),m=a(180),v=(a(150),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ref:f.a.createRef(),selected:e.selected,focused:!1,results:!1},n}return Object(l.a)(a,[{key:"clearSelection",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({selected:void 0,results:!0});case 2:this.state.ref.current.clear();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(e){if(void 0===e)return"All";var t=this.props.labels.get(e);return t?"".concat(t," - ").concat(e):"(".concat(e,")")}},{key:"getOption",value:function(e){return{label:this.getDescription(e),value:e}}},{key:"getOptions",value:function(){var e=this;return[this.getOption()].concat(this.props.options.map((function(t){return e.getOption(t)})))}},{key:"resetInput",value:function(){this.setState({focused:!1,results:!1})}},{key:"selectOption",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=4;break}this.setState({results:!1}),e.next=8;break;case 4:return a=t[0].value,e.next=7,this.setState({selected:a,results:!0});case 7:this.props.onChange(a);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return f.a.createElement(m.a,{ref:this.state.ref,id:this.props.id,options:this.getOptions(),placeholder:this.getDescription(this.state.selected),selected:this.state.focused&&this.state.results?[this.getOption(this.state.selected)]:[],ignoreDiacritics:!0,maxResults:1e3,onBlur:function(){e.resetInput()},onChange:function(t){e.selectOption(t)},onFocus:function(){e.setState({focused:!0})}},f.a.createElement("button",{className:"searchable-select-clear",onClick:function(t){t.preventDefault(),e.clearSelection()},onMouseDown:function(e){e.preventDefault()}},f.a.createElement(h.a,{icon:o.e})))}}]),a}(f.a.Component));t.a=v},150:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(98),r=a.n(n),s=a(99),c=a(121),l=a(11),i=a(12),u=a(19),o=a(18),h=a(53),p=a(30),f=a(0),m=a.n(f),v=a(96),b=a(94),E=a(228),d=a(100),g=a(124),y=a(54),k=a(9),O=a(149),S=a(168),x=a(169),j=a(131),C=new Map([]),w=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n,r;return Object(l.a)(this,a),(r=t.call(this,e)).state=null!==(n=C.get(e.region))&&void 0!==n?n:{searching:!1,funcs:[]},r}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){C.set(this.props.region,Object(c.a)({},this.state))}},{key:"search",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.text||this.state.type||this.state.target||this.state.team){e.next=4;break}return this.setState({funcs:[]}),alert("Please refine the results before searching"),e.abrupt("return");case 4:return e.prev=4,e.next=7,this.setState({searching:!0,funcs:[]});case 7:return e.next=9,d.a.searchFuncs(this.props.region,this.state.text,this.state.type,this.state.target,this.state.team);case 9:t=e.sent,this.setState({searching:!1,funcs:t}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),this.setState({error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return this.state.error?m.a.createElement(y.a,{error:this.state.error}):m.a.createElement("div",null,this.state.searching?m.a.createElement(k.a,null):null,m.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.search()}},m.a.createElement(v.a.Group,null,m.a.createElement(v.a.Label,null,"Text"),m.a.createElement(v.a.Control,{value:null!==(e=this.state.text)&&void 0!==e?e:"",onChange:function(e){t.setState({text:e.target.value})}})),m.a.createElement(v.a.Group,null,m.a.createElement(v.a.Label,null,"Type"),m.a.createElement(O.a,{id:"select-FuncType",options:Object.values(g.d),labels:S.b,onChange:function(e){t.setState({type:e})}})),m.a.createElement(v.a.Group,null,m.a.createElement(v.a.Label,null,"Target"),m.a.createElement(O.a,{id:"select-FuncTargetType",options:Object.values(g.c),labels:x.b,onChange:function(e){t.setState({target:e})}})),m.a.createElement(v.a.Group,null,m.a.createElement(v.a.Label,null,"Affects Players/Enemies"),m.a.createElement(O.a,{id:"select-FuncTargetTeam",options:Object.values(g.b),labels:new Map([[g.b.PLAYER_AND_ENEMY,"Players and Enemies"],[g.b.PLAYER,"Players only"],[g.b.ENEMY,"Enemies only"]]),onChange:function(e){t.setState({team:e})}})),m.a.createElement(b.a,{variant:"primary",onClick:function(){return t.search()}},"Search"," ",m.a.createElement(p.a,{icon:h.b}))),m.a.createElement("hr",null),m.a.createElement(E.a,{responsive:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"Function"),m.a.createElement("th",null,"Usage Count"))),m.a.createElement("tbody",null,this.state.funcs.map((function(e,a){return m.a.createElement("tr",{key:a},m.a.createElement("td",null,e.funcId),m.a.createElement("td",null,m.a.createElement(j.a,{region:t.props.region,func:e})),m.a.createElement("td",null,e.reverseTds.length+e.reverseSkills.length))})))))}}]),a}(m.a.Component);t.default=w}}]);
//# sourceMappingURL=22.7e339b72.chunk.js.map