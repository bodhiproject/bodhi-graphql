webpackJsonp([4],{2209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=h(s),u=h(n(3)),d=n(65),c=n(21),f=n(16),p=h(n(2223)),m=h(n(2226)),g=n(22),b=h(n(2232));function h(e){return e&&e.__esModule?e:{default:e}}var v=(0,f.withStyles)(b.default,{withTheme:!0})(r=(0,c.connect)(function(e){return{sortBy:e.Dashboard.get("sortBy")}})(r=(0,d.inject)("store")(r=(0,d.observer)((o=a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),i(t,[{key:"componentDidMount",value:function(){this.props.store.ui.location=g.AppLocation.vote}},{key:"render",value:function(){var e=this.props.sortBy;return l.default.createElement("div",null,l.default.createElement(p.default,null),l.default.createElement(m.default,{eventStatusIndex:g.EventStatus.Vote,sortBy:e}))}}]),t}(),a.propTypes={sortBy:u.default.string},a.defaultProps={sortBy:g.SortBy.Ascending},r=o))||r)||r)||r)||r;t.default=v},2214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(1)),a=n(14),o=n(16),i=l(n(6)),s=l(n(2216));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var d=(0,a.injectIntl)(function(e){var t=e.classes,n=e.className,a=e.text,o=e.intl,s=u(e,["classes","className","text","intl"]);return r.default.createElement(c,null,r.default.createElement("div",Object.assign({className:(0,i.default)(t.loading,n)},s)),a&&o.formatMessage({id:a}))}),c=(0,o.withStyles)(s.default)(function(e){var t=e.classes,n=u(e,["classes"]);return r.default.createElement("div",Object.assign({className:t.col},n))});t.default=(0,o.withStyles)(s.default,{withTheme:!0})(d)},2215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),s=c(i),l=c(n(3)),u=n(16),d=c(n(2214));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=(a=r=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.handleOnScroll=function(){var e=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight,n=document.documentElement.clientHeight||window.innerHeight;Math.ceil(e+n)>=t&&r.props.hasMore&&r.props.loadMore()},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleOnScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleOnScroll)}},{key:"render",value:function(){return s.default.createElement(u.Grid,{container:!0,spacing:this.props.spacing},this.props.data,this.props.loadingMore&&s.default.createElement(m,null))}}]),t}(),r.propTypes={hasMore:l.default.bool,loadingMore:l.default.bool,loadMore:l.default.func,spacing:l.default.number,data:l.default.oneOfType([l.default.array,l.default.object])},r.defaultProps={hasMore:!0,loadMore:void 0,loadingMore:!1,spacing:void 0,data:void 0},a);t.default=p;var m=function(){return s.default.createElement(g,null,s.default.createElement(d.default,{text:"loadingMore"}))},g=function(e){return s.default.createElement("div",Object.assign({style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",margin:20}},e))}},2216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return{"@keyframes loading":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},loading:{position:"relative",boxSizing:"border-box",width:"3rem",height:"3rem",display:"inline-flex",margin:"10px 20px",borderRadius:"100%",background:"linear-gradient("+e.palette.primary.main+", #fff)",animation:"loading 2s linear infinite","&:before":{content:'""',position:"absolute",boxSizing:"border-box",width:"80%",height:"80%",left:"10%",top:"10%",background:"#fff",borderRadius:"100%"}},col:{display:"flex",flexDirection:"column",color:"gray",alignItems:"center"}}}},2217:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,o,i,s,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),d=E(u),c=E(n(3)),f=n(86),p=n(14),m=n(16),g=E(n(6)),b=E(n(419)),h=E(n(2218)),v=E(n(2219)),y=n(43);function E(e){return e&&e.__esModule?e:{default:e}}var x=(0,p.defineMessages)({raise:{id:"str.raised",defaultMessage:"Raised"},ends:{id:"str.ends",defaultMessage:"Ends"},upcoming:{id:"str.upcoming",defaultMessage:"Upcoming"}}),w=(r=(0,m.withStyles)(v.default,{withTheme:!0}),a=(0,m.withStyles)(h.default,{withTheme:!0}),(0,p.injectIntl)(o=r(o=a((s=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),l(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.index,r=e.url,a=e.name,o=e.amountLabel,i=e.endTime,s=e.buttonText,l=e.unconfirmed,u=e.isUpcoming,c=this.props.intl,h=c.locale,v=c.messages,E=c.formatMessage;return d.default.createElement(m.Grid,{item:!0,xs:12,sm:6,md:4,lg:3},d.default.createElement(f.Link,{to:r},d.default.createElement(m.Card,{className:t.eventCard},d.default.createElement("div",{className:(0,g.default)(t.eventCardBg,"bg"+n%8)}),d.default.createElement("div",{className:(0,g.default)(t.eventCardSection,"top")},l&&d.default.createElement(b.default,{id:"str.pendingConfirmation",message:"Pending Confirmation"}),u&&d.default.createElement(b.default,{id:"str.upcoming",message:"Upcoming",type:"upcoming"}),d.default.createElement(m.Typography,{variant:"headline",className:t.eventCardName},a),d.default.createElement("div",{className:t.dashboardTime},void 0!==i&&this.props.intl.formatMessage(x.ends)+": "+(0,y.getShortLocalDateTimeString)(i)),d.default.createElement("div",{className:t.eventCardInfo},o&&d.default.createElement("div",null,d.default.createElement("i",{className:(0,g.default)(t.dashBoardCardIcon,"icon iconfont icon-ic_token")}),d.default.createElement(p.FormattedMessage,{id:"str.raised",defaultMessage:"Raised"})," "+o),d.default.createElement("div",null,d.default.createElement("i",{className:(0,g.default)(t.dashBoardCardIcon,"icon iconfont icon-ic_timer")}),void 0!==i?""+(0,y.getEndTimeCountDownString)(i,h,v):d.default.createElement(p.FormattedMessage,{id:"str.end",defaultMessage:"Ended"})))),d.default.createElement(m.Divider,null),d.default.createElement("div",{className:(0,g.default)(t.eventCardSection,"button")},u?d.default.createElement(p.FormattedMessage,{id:"str.waitForResultSetting",defaultMessage:"Waiting for result setting"}):E(s)))))}}]),t}(),i.propTypes={classes:c.default.object.isRequired,index:c.default.number.isRequired,url:c.default.string.isRequired,name:c.default.string.isRequired,amountLabel:c.default.string,endTime:c.default.string,buttonText:c.default.object,unconfirmed:c.default.bool.isRequired,intl:p.intlShape.isRequired,isUpcoming:c.default.bool.isRequired},i.defaultProps={buttonText:{id:"",defaultMessage:""},amountLabel:void 0,endTime:void 0},o=s))||o)||o)||o);t.default=w},2218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return{eventCard:{position:"relative"},eventCardSection:{position:"relative",padding:e.padding.sm.px,"&.top":{height:"320px"},"&.button":{textAlign:"center",paddingTop:e.padding.xs.px,paddingBottom:e.padding.xs.px,lineHeight:1,fontSize:e.sizes.font.textMd,color:e.palette.text.primary}},dashboardTime:{color:e.palette.text.hint},eventCardName:{marginBottom:e.padding.xs.px,display:"-webkit-box",maxWidth:"400px",maxHeight:"160px",margin:"0 auto",WebkitLineClamp:5,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis"},unconfirmedTag:{background:e.palette.secondary.light,color:e.palette.secondary.main,border:"solid 1px "+e.palette.secondary.main,borderRadius:e.borderRadius,padding:"2px "+e.padding.unit.px,marginBottom:e.padding.unit.px,fontSize:e.sizes.font.meta},dashBoardCardIcon:{marginRight:e.padding.unit.px},eventCardInfo:{position:"absolute",bottom:e.padding.sm.px,color:e.palette.text.primary},eventCardBg:{}}}},2219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return{eventCardSection:{"&.top":{marginTop:"30px"}},eventCardBg:{position:"absolute",left:e.padding.sm.px,right:0,height:"50px",backgroundImage:"url(/images/sports-card-1.png)",backgroundSize:"cover",backgroundPosition:"right",backgroundRepeat:"no-repeat","&.bg1":{backgroundImage:"url(/images/sports-card-2.png)"},"&.bg2":{backgroundImage:"url(/images/sports-card-3.png)"},"&.bg3":{backgroundImage:"url(/images/sports-card-4.png)"},"&.bg4":{backgroundImage:"url(/images/sports-card-5.png)"},"&.bg5":{backgroundImage:"url(/images/sports-card-6.png)"},"&.bg6":{backgroundImage:"url(/images/sports-card-7.png)"},"&.bg7":{backgroundImage:"url(/images/sports-card-8.png)"}}}}},2223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,o,i,s,l,u,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=S(c),p=S(n(3)),m=n(21),g=n(14),b=n(65),h=n(16),v=S(n(33)),y=S(n(420)),E=S(n(154)),x=n(22),w=S(n(418)),O=S(n(2224)),_=S(n(2225));function S(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var M=(r=(0,h.withStyles)(_.default,{withTheme:!0}),a=(0,h.withStyles)(O.default,{withTheme:!0}),o=(0,m.connect)(function(e){return{lastUsedAddress:e.App.get("lastUsedAddress"),sortBy:e.Dashboard.get("sortBy")}},function(e){return{toggleCreateEventDialog:function(t){return e(v.default.toggleCreateEventDialog(t))},sortOrderChanged:function(t){return e(y.default.sortOrderChanged(t))},getEventEscrowAmount:function(t){return e(E.default.getEventEscrowAmount(t))}}}),i=(0,b.inject)("store"),(0,g.injectIntl)(s=r(s=a(s=o(s=i(s=(0,b.observer)((u=l=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=k(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.onSortOptionSelected=function(e){var t=e.target.value;r.props.store.sortBy=t,r.props.sortOrderChanged(t)},r.onCreateDialogOpen=function(){var e=r.props,t=e.toggleCreateEventDialog,n=e.lastUsedAddress,a=e.getEventEscrowAmount;t(!0),a(n),w.default.track("dashboard-createEventClick")},k(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),d(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.sortBy,r=e.noCreateEventButton;return f.default.createElement(h.Grid,{container:!0,className:t.dashboardActionsWrapper},f.default.createElement(h.Grid,{item:!0,xs:8},!r&&f.default.createElement(h.Button,{variant:"raised",size:"medium",color:"primary",className:t.createEventButton,onClick:this.onCreateDialogOpen},f.default.createElement("img",{src:"/images/sports-create.svg",alt:"create",className:t.sportCreateIcon}),f.default.createElement(g.FormattedMessage,{id:"create.dialogTitle",defaultMessage:"Create an event"}))),f.default.createElement(h.Grid,{item:!0,xs:4,className:t.dashboardActionsRight},f.default.createElement("span",{className:t.dashboardActionsSortLabel},f.default.createElement(g.FormattedMessage,{id:"sort.label",defaultMessage:"Sort By"})),f.default.createElement(h.Card,{className:t.dashboardActionsSort},f.default.createElement(h.FormControl,null,f.default.createElement(h.Select,{disableUnderline:!0,value:n,onChange:this.onSortOptionSelected},f.default.createElement(h.MenuItem,{value:x.SortBy.Ascending},f.default.createElement(g.FormattedMessage,{id:"sort.ascEndTime",defaultMessage:"End Earliest"})),f.default.createElement(h.MenuItem,{value:x.SortBy.Descending},f.default.createElement(g.FormattedMessage,{id:"sort.descEndTime",defaultMessage:"End Latest"})))))))}}]),t}(),l.propTypes={classes:p.default.object.isRequired,sortBy:p.default.string,sortOrderChanged:p.default.func,lastUsedAddress:p.default.string.isRequired,toggleCreateEventDialog:p.default.func.isRequired,getEventEscrowAmount:p.default.func.isRequired,noCreateEventButton:p.default.bool},l.defaultProps={sortBy:x.SortBy.Ascending,sortOrderChanged:void 0,noCreateEventButton:!1},s=u))||s)||s)||s)||s)||s)||s);t.default=M},2224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return{dashboardActionsWrapper:{marginBottom:e.padding.sm.px},createEventButton:{padding:"12px "+e.padding.sm.px,verticalAlign:"middle"},dashboardActionsRight:{textAlign:"right"},dashboardActionsSort:{display:"inline-block",padding:e.padding.unit.px+" "+e.padding.sm.px,verticalAlign:"middle"},dashboardActionsSortLabel:{marginRight:e.padding.sm.px},sportCreateIcon:{}}}},2225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return{createEventButton:{background:"white",color:e.palette.text.primary,position:"relative",paddingLeft:"60px","&:hover":{color:"white"}},sportCreateIcon:{height:"54px",position:"absolute",left:"10px",top:"-15px"}}}},2226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=y(s),u=y(n(3)),d=n(21),c=y(n(19)),f=n(16),p=y(n(2227)),m=n(22),g=y(n(66)),b=y(n(2217)),h=y(n(2228)),v=y(n(2215));function y(e){return e&&e.__esModule?e:{default:e}}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=50,w=(0,f.withStyles)(p.default,{withTheme:!0})(r=(0,d.connect)(function(e){return{topics:e.Graphql.get("getTopicsReturn"),oracles:e.Graphql.get("getOraclesReturn"),sortBy:e.Dashboard.get("sortBy"),syncBlockNum:e.App.get("syncBlockNum"),walletAddresses:e.App.get("walletAddresses"),txReturn:e.Graphql.get("txReturn")}},function(e){return{getActionableTopics:function(t,n,r,a){return e(g.default.getActionableTopics(t,n,r,a))},getOracles:function(t,n,r,a,o){return e(g.default.getOracles(t,n,r,a,o))}}})((o=a=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=E(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.state={skip:0},r.loadMoreData=function(){var e=r.state.skip,t=r.props,n=t.eventStatusIndex,a=t.sortBy,o=t.walletAddresses;e+=x,r.executeGraphRequest(n,a,x,e,o),r.setState({skip:e})},E(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),i(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.eventStatusIndex,n=e.sortBy,r=e.walletAddresses;this.executeGraphRequest(t,n,x,0,r)}},{key:"componentWillReceiveProps",value:function(e){var t=e.eventStatusIndex,n=e.sortBy,r=e.syncBlockNum,a=e.walletAddresses,o=e.txReturn;if(t!==this.props.eventStatusIndex||n!==this.props.sortBy||r!==this.props.syncBlockNum||a!==this.props.walletAddresses||o!==this.props.txReturn){var i=a||this.props.walletAddresses;this.executeGraphRequest(t,n,x,0,i),this.setState({skip:0})}}},{key:"executeGraphRequest",value:function(e,t,n,r,a){var o=this.props,i=o.getActionableTopics,s=o.getOracles,l=t||m.SortBy.Ascending;switch(e){case m.EventStatus.Bet:s([{token:m.Token.Qtum,status:m.OracleStatus.Voting},{token:m.Token.Qtum,status:m.OracleStatus.Created}],{field:"endTime",direction:l},n,r);break;case m.EventStatus.Set:var u=[{token:m.Token.Qtum,status:m.OracleStatus.OpenResultSet}];c.default.each(a,function(e){u.push({token:m.Token.Qtum,status:m.OracleStatus.WaitResult,resultSetterQAddress:e.address})}),s(u,{field:"resultSetEndTime",direction:l},n,r);break;case m.EventStatus.Vote:var d=a.map(function(e){return e.address});s([{token:m.Token.Bot,status:m.OracleStatus.Voting},{token:m.Token.Qtum,status:m.OracleStatus.WaitResult,excludeResultSetterQAddress:d}],{field:"endTime",direction:l},n,r);break;case m.EventStatus.Finalize:s([{token:m.Token.Bot,status:m.OracleStatus.WaitResult}],{field:"endTime",direction:l},n,r);break;case m.EventStatus.Withdraw:i(a,{field:"blockNum",direction:l},n,r);break;default:throw new RangeError("Invalid tab position "+e)}}},{key:"render",value:function(){return l.default.createElement(v.default,{spacing:this.props.theme.padding.sm.value,data:this.events,loadMore:this.loadMoreData,hasMore:this.events.length>=this.state.skip+x})}},{key:"events",get:function(){var e=this.props,t=e.eventStatusIndex,n=e.topics,r=e.oracles,a=m.EventStatus.Withdraw,o=t===a?n:r;return o=o.length<1?l.default.createElement(h.default,null):t===a?o.map(function(e,t){return l.default.createElement(b.default,Object.assign({key:e.txid,index:t},e))}):o.map(function(e,t){return l.default.createElement(b.default,Object.assign({key:e.txid,index:t},e))})}}]),t}(),a.propTypes={theme:u.default.object.isRequired,getActionableTopics:u.default.func.isRequired,topics:u.default.array,getOracles:u.default.func,oracles:u.default.array,eventStatusIndex:u.default.number.isRequired,sortBy:u.default.string,syncBlockNum:u.default.number,walletAddresses:u.default.array.isRequired,status:u.default.string,txReturn:u.default.object},a.defaultProps={txReturn:void 0,topics:[],getOracles:void 0,oracles:[],sortBy:m.SortBy.Ascending,syncBlockNum:void 0,status:""},r=o))||r)||r;t.default=w},2227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){return{scroll:{width:"100%",display:"flex",flexWrap:"wrap",boxSizing:"border-box"},hint:{position:"fixed",bottom:"140px",left:"23px",boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)"}}}},2228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(1)),a=u(n(3)),o=n(14),i=n(16),s=n(234),l=u(n(2229));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=e.classes;return r.default.createElement("div",{className:t.eventsEmptyWrapper},r.default.createElement(s.Event,{className:t.eventsEmptyIcon}),r.default.createElement(i.Typography,{variant:"body1"},r.default.createElement(o.FormattedMessage,{id:"dashboard.empty",defaultMessage:"No Event at Current Status"})," "))};d.propTypes={classes:a.default.object.isRequired},t.default=(0,i.withStyles)(l.default,{withTheme:!0})(d)},2229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){return{eventsEmptyWrapper:{width:"300px",position:"relative",left:"50%",marginLeft:"-150px",top:"15vh",textAlign:"center"},eventsEmptyIcon:{fontSize:"100px",opacity:"0.15"}}}},2232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){return{}}}});