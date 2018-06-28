if (self.CavalryLogger) { CavalryLogger.start_js(["3hYMG"]); }

__d("ImmutableValue",["invariant","isNode"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="_DONT_EVER_TYPE_THIS_SECRET_KEY";function i(a){a===i[h]||g(0)}i.mergeAllPropertiesInto=function(a,b){var c=b.length;for(var d=0;d<c;d++)Object.assign(a,b[d])};i.deepFreezeRootNode=function(a){if(b("isNode")(a))return;Object.freeze(a);for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&i.recurseDeepFreeze(a[c]);Object.seal(a)};i.recurseDeepFreeze=function(a){if(b("isNode")(a)||!i.shouldRecurseFreeze(a))return;Object.freeze(a);for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&i.recurseDeepFreeze(a[c]);Object.seal(a)};i.shouldRecurseFreeze=function(a){return typeof a==="object"&&!(a instanceof i)&&a!==null};i._DONT_EVER_TYPE_THIS_SECRET_KEY=Math.random();e.exports=i}),null);
__d("mergeHelpers",["invariant","FbtResultBase"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=36,i=function(a){return typeof a!=="object"||a instanceof Date||a===null||a instanceof b("FbtResultBase")},j={MAX_MERGE_DEPTH:h,isTerminal:i,normalizeMergeArg:function(a){return a===undefined||a===null?{}:a},checkMergeArrayArgs:function(a,b){Array.isArray(a)&&Array.isArray(b)||g(0)},checkMergeObjectArgs:function(a,b){j.checkMergeObjectArg(a),j.checkMergeObjectArg(b)},checkMergeObjectArg:function(a){!i(a)&&!Array.isArray(a)||g(0)},checkMergeIntoObjectArg:function(a){(!i(a)||typeof a==="function")&&!Array.isArray(a)||g(0)},checkMergeLevel:function(a){a<h||g(0)},checkArrayStrategy:function(a){a===undefined||a in j.ArrayStrategies||g(0)},ArrayStrategies:{Clobber:"Clobber",Concat:"Concat",IndexByIndex:"IndexByIndex"}};e.exports=j}),null);
__d("ImmutableObject",["invariant","ImmutableValue","mergeHelpers"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("mergeHelpers").checkMergeObjectArgs,j=b("mergeHelpers").isTerminal,k="_DONT_EVER_TYPE_THIS_SECRET_KEY";function l(a){a instanceof b("ImmutableValue")||g(0)}a=babelHelpers.inherits(m,b("ImmutableValue"));h=a&&a.prototype;function m(){h.constructor.call(this,b("ImmutableValue")[k]),b("ImmutableValue").mergeAllPropertiesInto(this,arguments)}m.create=function(){var a=Object.create(m.prototype);m.apply(a,arguments);return a};m.set=function(a,b){l(a);typeof b==="object"&&b!==undefined&&!Array.isArray(b)||g(0);return new m(a,b)};m.setProperty=function(a,b,c){var d={};d[b]=c;return m.set(a,d)};m.deleteProperty=function(a,b){var c={};for(var d in a)d!==b&&Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return new m(c)};m.setDeep=function(a,b){l(a);return n(a,b)};m.values=function(a){return Object.keys(a).map(function(b){return a[b]})};function n(a,c){__p&&__p();i(a,c);var d={},e=Object.keys(a);for(var f=0;f<e.length;f++){var g=e[f];!Object.prototype.hasOwnProperty.call(c,g)?d[g]=a[g]:j(a[g])||j(c[g])?d[g]=c[g]:d[g]=n(a[g],c[g])}g=Object.keys(c);for(f=0;f<g.length;f++){e=g[f];if(Object.prototype.hasOwnProperty.call(a,e))continue;d[e]=c[e]}return a instanceof b("ImmutableValue")?new m(d):c instanceof b("ImmutableValue")?new m(d):d}e.exports=m}),null);
__d("PagePluginEvents",["ImmutableObject","keyMirrorRecursive"],(function(a,b,c,d,e,f){"use strict";a=new(b("ImmutableObject"))(b("keyMirrorRecursive")({page_plugin:{tab:{configured:"",click:"",render:""},messages:{send:"",logged_out:"",invalid_height:""}}}));e.exports=a}),null);
__d("XPagePluginLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/platform/plugin/page/logging/",{})}),null);
__d("PagePluginLogger",["AsyncRequest","XPagePluginLoggingController"],(function(a,b,c,d,e,f){"use strict";function a(a,b){this.$1=a,this.$2=b}a.prototype.notify=function(a,c,d){var e=b("XPagePluginLoggingController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(e).setMethod("POST").setData({event_name:a,page_id:this.$1,tab:c,data:Object.assign(d?d:{},{refererURL:this.$2})}).send()};e.exports=a}),null);
__d("GridItem.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.alignv,d=a.alignh,e=a.className;a=babelHelpers.objectWithoutProperties(a,["alignv","alignh","className"]);return b("React").createElement("td",babelHelpers["extends"]({},a,{className:b("joinClasses")(e,"_51m-"+(c==="top"?" vTop":"")+(c==="middle"?" vMid":"")+(c==="bottom"?" vBot":"")+(d==="left"?" hLeft":"")+(d==="center"?" hCent":"")+(d==="right"?" hRght":""))}))}e.exports=a}),null);
__d("Grid.react",["cx","GridItem.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(i,b("React").Component);h&&h.prototype;i.prototype.render=function(){__p&&__p();var a=this.props,c=a.alignh,d=a.alignv,e=a.children,f=a.cols,g=a.fixed,h=a.spacing,j=b("React").Children.count(e),k=[],l=[],m=0;b("React").Children.forEach(e,function(a,e){__p&&__p();if(a===null||a===undefined)return;var n=a.type===i.GridItem;m+=n?Math.max(a.props.colSpan||0,1):1;var o=m===f?"_51mw":"";n=n?b("React").cloneElement(a,{key:a.key||e,alignh:a.props.alignh||c,alignv:a.props.alignv||d,className:b("joinClasses")(a.props.className,h,o)}):b("React").createElement(b("GridItem.react"),{alignh:c,alignv:d,className:b("joinClasses")(h,o),key:a.key||e},a);l.push(n);if(m%f===0||e+1===j){if(g===!0&&m<f){for(var o=m;o<f;o++)l.push(b("React").createElement(b("GridItem.react"),{key:e+o}));m=f}k.push(b("React").createElement("tr",{className:"_51mx",key:e},l));l=[];m=0}});return b("React").createElement("table",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"uiGrid _51mz"+(g===!0?" _5f0n":"")),cellSpacing:"0",cellPadding:"0"}),b("React").createElement("tbody",null,k))};function i(){h.apply(this,arguments)}i.GridItem=b("React").forwardRef(b("GridItem.react"));e.exports=i}),null);
__d("isKeyActivation",["Keys"],(function(a,b,c,d,e,f){"use strict";function a(event){var a=0,c=event.charCode,d=event.keyCode;c!=null&&c!==0?a=c:d!=null&&d!==0&&(a=d);return[b("Keys").RETURN,b("Keys").SPACE].includes(a)}e.exports=a}),null);
__d("KeyActivationToClickHOC.react",["React","isKeyActivation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();var c,d;return d=c=function(){__p&&__p();var c,d;c=babelHelpers.inherits(e,b("React").Component);d=c&&c.prototype;function e(){var a;for(var c=arguments.length,e=new Array(c),f=0;f<c;f++)e[f]=arguments[f];(a=d.constructor).call.apply(a,[this].concat(e));this.$2=function(event){b("isKeyActivation")(event)&&(event.preventDefault(),event.stopPropagation(),this.$1&&this.$1.click())}.bind(this);this.$3=function(a){this.$1=a}.bind(this);this.$1=null}e.prototype.render=function(){"use strict";return b("React").createElement(a,babelHelpers["extends"]({},this.props,{keyActivationToClickEvent:this.$2,keyActivationToClickRef:this.$3}))};return e}(),c.displayName="KeyActivationToClickHOC",d}.bind(this);e.exports=a}),null);
__d("ShimButton.react",["KeyActivationToClickHOC.react","React","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);g=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.$1=function(event){this.props.keyActivationToClickEvent(event),this.props.onKeyPress(event)}.bind(this),this.$2=function(a){this.props.keyActivationToClickRef(a),this.props.onRef(a)}.bind(this),b}a.prototype.render=function(){"use strict";__p&&__p();var a=this.props,c=a.children,d=a.form,e=a.inline;a.keyActivationToClickEvent;a.keyActivationToClickRef;a.onRef;var f=a.pressed;a=babelHelpers.objectWithoutProperties(a,["children","form","inline","keyActivationToClickEvent","keyActivationToClickRef","onRef","pressed"]);e=e?"span":"div";d==="link"&&(e="a");return b("React").createElement(e,babelHelpers["extends"]({},a,{"aria-pressed":f,ref:this.$2,role:"button",onKeyPress:this.$1}),c)};a.defaultProps={form:"none",inline:!1,keyActivationToClickRef:b("emptyFunction"),tabIndex:"0",onClick:b("emptyFunction"),onKeyPress:b("emptyFunction"),onRef:b("emptyFunction")};a.propTypes={children:c.any,form:c.oneOf(["none","link"]),inline:c.bool,tabIndex:c.oneOf(["-1","0",-1,0]),onClick:c.func,onKeyPress:c.func,onRef:c.func};e.exports=b("KeyActivationToClickHOC.react")(a)}),null);
__d("PluginTabItem.react",["cx","React","ShimButton.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props.tab.key;return b("React").createElement(b("ShimButton.react"),{className:"_eg_"+(this.props.activeTabKey===a?" _eh2":""),onClick:function(){return this.props.onSelected(a)}.bind(this)},b("React").createElement("div",{className:"_eh3"},this.props.tab.title))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("PluginTabControl.react",["cx","Grid.react","PluginTabItem.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("Grid.react").GridItem;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){return b("React").createElement(b("Grid.react"),{className:"_4v3l",cols:this.props.tabs.length,fixed:!0},this.props.tabs.map(function(a){return b("React").createElement(i,{className:"_4v3m",key:a.key},b("React").createElement(b("PluginTabItem.react"),{activeTabKey:this.props.activeTabKey,tab:a,onSelected:this.props.onTabSelected}))}.bind(this)))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("XPluginTabAsyncRendererController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/platform/plugin/tab/renderer/",{})}),null);
__d("PluginTabFetcher.react",["csx","cx","AsyncRequest","DOM","DOMQuery","Event","React","ReactDOM","XPluginTabAsyncRendererController","XUISpinner.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(a,b){i.constructor.call(this,a,b),this.state={isFetchingComponent:!1,asyncContentLoaded:!1},this.hasMoreContent=!0,this.isLoadingContent=!1}a.prototype.UNSAFE_componentWillReceiveProps=function(a){if(a.isActive===this.props.isActive||!a.isActive)return;this.$1()};a.prototype.componentDidMount=function(){this.props.isActive&&this.$1()};a.prototype.$2=function(){var a=this.refs.container,b=a.clientHeight,c=a.children[0].clientHeight;a=a.scrollTop;var d=100;!this.isLoadingContent&&this.hasMoreContent&&a+b+d>c&&(this.isLoadingContent=!0,this.$3())};a.prototype.$3=function(){__p&&__p();var a=b("XPluginTabAsyncRendererController").getURIBuilder().getURI(),c=this.props.tab.configData;new(b("AsyncRequest"))().setURI(a).setMethod("POST").setData({cursor:this.cursor,config_json:JSON.stringify(c),key:this.props.tab.key}).setHandler(function(a){this.setState({isFetchingComponent:!1,asyncContentLoaded:!0},function(){var c=a.payload;this.isLoadingContent=!1;if(this.hasMoreContent){var d=b("DOMQuery").scry(this.refs.container,"._1_lk");d=d[d.length-1];b("DOM").appendContent(d,c.content.markup)}}.bind(this))}.bind(this)).send()};a.prototype.$4=function(){this.scrollListener=b("Event").listen(this.refs.container,"scroll",function(){this.scrollTimeout&&(clearTimeout(this.scrollTimeout),this.scrollTimeout=null),this.scrollTimeout=setTimeout(function(){return this.$2()}.bind(this),250)}.bind(this));var a=b("DOMQuery").find(this.refs.container,"._10b6");b("Event").listen(a,"noMoreContent",function(){this.hasMoreContent=!1,this.scrollListener.remove()}.bind(this));b("Event").listen(a,"setCursor",function(a){this.cursor=a.getData()}.bind(this))};a.prototype.$1=function(){if(!this.state.asyncContentLoaded&&!this.state.isFetchingComponent){this.setState({isFetchingComponent:!0});var a=b("XPluginTabAsyncRendererController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setData({config_json:JSON.stringify(this.props.tab.configData),key:this.props.tab.key}).setHandler(function(a){this.setState({isFetchingComponent:!1,asyncContentLoaded:!0},function(){var c=a.payload;b("DOM").setContent(b("ReactDOM").findDOMNode(this.refs.container),c.content.markup);this.props.tab.canLoadMore&&(this.cursor="",this.$4())}.bind(this))}.bind(this)).send()}};a.prototype.render=function(){return b("React").createElement("div",{className:this.props.isActive?"":"hidden_elem"},b("React").createElement("div",{style:{maxHeight:this.props.tabHeight+"px"},className:"_10b4"+(this.state.isFetchingComponent?" hidden_elem":""),ref:"container"}),b("React").createElement("div",{className:"_10b5"+(this.state.isFetchingComponent?"":" hidden_elem")},b("React").createElement(b("XUISpinner.react"),{className:"_4g7o",size:"large"})))};e.exports=a}),null);
__d("PluginTabContainer.react",["cx","PluginTabControl.react","PluginTabFetcher.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a,b){h.constructor.call(this,a,b),this.state={activeTabKey:this.props.activeTabKey}}a.prototype.componentDidMount=function(){this.props.tabs.map(function(a){return this.onTabLoaded(a)}.bind(this))};a.prototype.onTabLoaded=function(a){};a.prototype.onTabSelected=function(a){this.setState({activeTabKey:a})};a.prototype.render=function(){var a=this.props.tabs.length;return a===0?null:b("React").createElement("div",null,a>1?b("React").createElement(b("PluginTabControl.react"),{tabs:this.props.tabs,activeTabKey:this.state.activeTabKey,onTabSelected:function(a){return this.onTabSelected(a)}.bind(this)}):null,b("React").createElement("div",{className:"_2hkj"},this.props.tabs.map(function(a){return b("React").createElement(b("PluginTabFetcher.react"),{key:a.key,tab:a,isActive:a.key===this.state.activeTabKey,tabHeight:this.props.tabHeight})}.bind(this))))};e.exports=a}),null);
__d("PagePluginTabContainer.react",["PagePluginEvents","PagePluginLogger","PluginTabContainer.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("PluginTabContainer.react"));g=c&&c.prototype;function a(a,c){g.constructor.call(this,a,c),this.$PagePluginTabContainer1=new(b("PagePluginLogger"))(a.pageID,a.refererURI)}a.prototype.onTabLoaded=function(a){this.$PagePluginTabContainer1.notify(b("PagePluginEvents").page_plugin.tab.configured,a.key)};a.prototype.onTabSelected=function(a){this.$PagePluginTabContainer1.notify(b("PagePluginEvents").page_plugin.tab.click,a),g.onTabSelected.call(this,a)};e.exports=a}),null);