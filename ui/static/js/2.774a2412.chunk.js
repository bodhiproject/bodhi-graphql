webpackJsonp([2],{1316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{setAppLocation:function(t){return e(A.default.setAppLocation(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var s,d,u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),f=n(c),p=a(1),m=n(p),b=a(20),y=a(23),g=a(40),h=n(g),v=a(25),w=a(1350),C=n(w),T=a(1360),E=n(T),k=a(45),A=n(k),_=a(39),x=a(495),S=n(x),O=a(1362),M=n(O),R=(0,y.defineMessages)({balanceInfo:{id:"balance.info",defaultMessage:'If you would like to encrypt, backup, or restore your wallet, please do this from the Qtum Wallet. In the application menu, there is a "Launch Qtum Wallet" option.'}}),B=(d=s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"componentWillMount",value:function(){(0,this.props.setAppLocation)(_.AppLocation.wallet)}},{key:"render",value:function(){var e=this.props.classes;return f.default.createElement("div",null,f.default.createElement(h.default,{className:e.infoPaper},f.default.createElement(S.default,{heading:this.props.intl.formatMessage(R.balanceInfo)})),f.default.createElement(C.default,null),f.default.createElement(E.default,null))}}]),t}(f.default.Component),s.propTypes={setAppLocation:m.default.func.isRequired,intl:y.intlShape.isRequired,classes:m.default.object.isRequired},d),P=function(e){return{}};t.default=(0,y.injectIntl)((0,b.connect)(P,i)((0,v.withStyles)(M.default,{withTheme:!0})(B)))},1317:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{txidLabel:{width:"150px"},txidRow:{position:"relative",height:"85px"},txidWrapper:{position:"absolute",left:"24px",top:"4px",bottom:"4px",right:"24px",paddingTop:"18px"},txIdText:{"&:hover":{color:"#585AFA",cursor:"pointer"},textDecoration:"underline"}}};t.default=n},1318:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=n(u),f=a(486),p=a(25),m=a(23),b=a(1317),y=n(b),g=a(178),h=n(g),v=(s=i=function(e){function t(){var e,a,n,l;r(this,t);for(var i=arguments.length,s=Array(i),d=0;d<i;d++)s[d]=arguments[d];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.onIdClick=function(e){e.stopPropagation();var t=n.props.transaction;window.open(h.default.explorer.tx+"/"+t.txid,"_blank")},l=a,o(n,l)}return l(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.transaction;return c.default.createElement(f.TableCell,{padding:"dense",className:t.txidRow},c.default.createElement("div",{className:t.txidWrapper},c.default.createElement("div",{className:t.txidLabel},c.default.createElement(m.FormattedMessage,{id:"str.transactionId",defaultMessage:"Transaction ID"})),c.default.createElement("div",{className:t.txIdText,onClick:this.onIdClick},a.txid)))}}]),t}(c.default.PureComponent),i.propTypes={classes:u.PropTypes.object.isRequired,transaction:u.PropTypes.object.isRequired},s);t.default=(0,m.injectIntl)((0,p.withStyles)(y.default,{withTheme:!0})(v))},1319:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=n(u),f=a(486),p=a(23),m=a(25),b=a(1317),y=n(b),g=(s=i=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.transaction;return c.default.createElement(f.TableCell,{padding:"dense",className:t.txidRow},c.default.createElement("div",{className:t.txidWrapper},c.default.createElement("div",{className:t.txidLabel},c.default.createElement(p.FormattedMessage,{id:"str.addressUsed",defaultMessage:"Address Used"})),c.default.createElement("div",null,a.senderAddress)))}}]),t}(c.default.PureComponent),i.propTypes={classes:u.PropTypes.object.isRequired,transaction:u.PropTypes.object.isRequired},s);t.default=(0,p.injectIntl)((0,m.withStyles)(y.default,{withTheme:!0})(g))},1328:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),o=n(r),l=a(30),i=n(l),s=a(27),d=n(s),u=e.__MUI_SvgIcon__||d.default,c=o.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),f=function(e){return o.default.createElement(u,e,c)};f=(0,i.default)(f),f.muiName="SvgIcon",t.default=f}).call(t,a(15))},1345:function(e,t,a){"use strict";var n=a(1352),r=n.CopyToClipboard;r.CopyToClipboard=r,e.exports=r},1350:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{toggleWalletUnlockDialog:function(t){return e(J.default.toggleWalletUnlockDialog(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),u=n(d),c=a(1),f=n(c),p=a(20),m=a(40),b=n(m),y=a(66),g=n(y),h=a(26),v=n(h),w=a(486),C=n(w),T=a(491),E=n(T),k=a(53),A=n(k),_=a(182),x=n(_),S=a(102),O=n(S),M=a(498),R=n(M),B=a(1351),P=n(B),j=a(25),D=a(4),q=(n(D),a(23)),N=a(1345),W=a(24),I=n(W),F=a(1355),U=n(F),L=a(59),H=n(L),V=a(1356),z=n(V),Q=a(1358),G=n(Q),X=a(45),J=n(X),Y=a(67),K=a(39),Z=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleSorting=function(e){return function(t){var n=e,r=K.SortBy.Descending.toLowerCase();a.state.orderBy===e&&a.state.order===K.SortBy.Descending.toLowerCase()&&(r=K.SortBy.Ascending.toLowerCase()),r===K.SortBy.Descending.toLowerCase()?a.props.walletAddresses.sort(function(e,t){return t[n]<e[n]?-1:1}):a.props.walletAddresses.sort(function(e,t){return e[n]<t[n]?-1:1}),a.setState({order:r,orderBy:n})}},a.handleDepositDialogClose=function(e){a.setState({selectedAddress:void 0,selectedAddressQtum:void 0,selectedAddressBot:void 0,depositDialogVisible:!1})},a.handleWithdrawDialogClose=function(e){a.setState({selectedAddress:void 0,selectedAddressQtum:void 0,selectedAddressBot:void 0,withdrawDialogVisible:!1})},a.state={order:K.SortBy.Ascending.toLowerCase(),orderBy:"address",addrCopiedSnackbarVisible:!1,selectedAddress:void 0,selectedAddressQtum:void 0,selectedAddressBot:void 0,depositDialogVisible:!1,withdrawDialogVisible:!1},a.getTotalsGrid=a.getTotalsGrid.bind(a),a.getTableHeader=a.getTableHeader.bind(a),a.getSortableCell=a.getSortableCell.bind(a),a.getNonSortableCell=a.getNonSortableCell.bind(a),a.getTableBody=a.getTableBody.bind(a),a.getAddrCopiedSnackBar=a.getAddrCopiedSnackBar.bind(a),a.onCopyClicked=a.onCopyClicked.bind(a),a.onDepositClicked=a.onDepositClicked.bind(a),a.handleDepositDialogClose=a.handleDepositDialogClose.bind(a),a.onWithdrawClicked=a.onWithdrawClicked.bind(a),a.onWithdraw=a.onWithdraw.bind(a),a.onAddrCopiedSnackbarClosed=a.onAddrCopiedSnackbarClosed.bind(a),a}return l(t,e),s(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.selectedAddress,n=t.selectedAddressQtum,r=t.selectedAddressBot,o=t.depositDialogVisible,l=t.withdrawDialogVisible;return u.default.createElement(b.default,{className:e.myBalancePaper},u.default.createElement(g.default,{container:!0,spacing:0,className:e.myBalanceGridContainer},u.default.createElement(v.default,{variant:"title",className:e.myBalanceTitle},u.default.createElement(q.FormattedMessage,{id:"myBalances.myBalance",defaultMessage:"My Balance"})),this.getTotalsGrid(),u.default.createElement(C.default,null,this.getTableHeader(),this.getTableBody()),this.getAddrCopiedSnackBar(),u.default.createElement(z.default,{dialogVisible:o,onClose:this.handleDepositDialogClose,onCopyClicked:this.onCopyClicked,walletAddress:a,qtumAmount:n,botAmount:r}),u.default.createElement(G.default,{dialogVisible:l,onClose:this.handleWithdrawDialogClose,onWithdraw:this.onWithdraw,walletAddress:a,qtumAmount:n,botAmount:r})))}},{key:"getTotalsGrid",value:function(){var e=this.props,t=e.classes,a=e.walletAddresses,n=0,r=0;a&&a.length&&(n=I.default.sumBy(a,function(e){return e.qtum?e.qtum:0}),r=I.default.sumBy(a,function(e){return e.bot?e.bot:0}));var o=[{id:"qtum",name:"str.qtum",nameDefault:"QTUM",total:n},{id:"bot",name:"str.bot",nameDefault:"BOT",total:r}];return u.default.createElement(g.default,{container:!0,className:t.totalsContainerGrid},o.map(function(e){return u.default.createElement(g.default,{item:!0,key:e.id,className:t.totalsItemGrid},u.default.createElement(v.default,{className:t.totalsItemAmount},e.total.toFixed(2)),u.default.createElement(v.default,{variant:"body1"},u.default.createElement(q.FormattedMessage,{id:e.name,default:e.nameDefault})))}))}},{key:"getTableHeader",value:function(){var e=this,t=(this.props.classes,[{id:"address",name:"str.address",nameDefault:"Address",numeric:!1,sortable:!0},{id:"copyButton",name:"str.copy",nameDefault:"Copy",numeric:!1,sortable:!1},{id:"qtum",name:"str.qtum",nameDefault:"QTUM",numeric:!0,sortable:!0},{id:"bot",name:"str.bot",nameDefault:"BOT",numeric:!0,sortable:!0},{id:"actions",name:"str.actions",nameDefault:"Actions",numeric:!1,sortable:!1}]);return u.default.createElement(w.TableHead,null,u.default.createElement(w.TableRow,null,t.map(function(t){return t.sortable?e.getSortableCell(t):e.getNonSortableCell(t)})))}},{key:"getSortableCell",value:function(e){var t=this.props.classes,a=this.state,n=a.order,r=a.orderBy;return u.default.createElement(w.TableCell,{key:e.id,numeric:e.numeric,sortDirection:r===e.id&&n},u.default.createElement(E.default,{title:u.default.createElement(q.FormattedMessage,{id:"str.sort",defaultMessage:"Sort"}),enterDelay:H.default.intervals.tooltipDelay,placement:e.numeric?"bottom-end":"bottom-start"},u.default.createElement(w.TableSortLabel,{active:r===e.id,direction:n,onClick:this.handleSorting(e.id)},u.default.createElement(v.default,{variant:"body1",className:t.tableHeaderItemText},u.default.createElement(q.FormattedMessage,{id:e.name,default:e.nameDefault})))))}},{key:"getNonSortableCell",value:function(e){var t=this.props.classes;return u.default.createElement(w.TableCell,{key:e.id,numeric:e.numeric},u.default.createElement(v.default,{variant:"body1",className:t.tableHeaderItemText},u.default.createElement(q.FormattedMessage,{id:e.name,default:e.nameDefault})))}},{key:"getTableBody",value:function(){var e=this,t=this.props,a=t.classes,n=t.walletAddresses;return u.default.createElement(w.TableBody,null,n.map(function(t,n){return u.default.createElement(w.TableRow,{key:t.address,selected:n%2!==0},u.default.createElement(w.TableCell,null,u.default.createElement(v.default,{variant:"body1"},t.address)),u.default.createElement(w.TableCell,null,u.default.createElement(N.CopyToClipboard,{text:t.address,onCopy:e.onCopyClicked},u.default.createElement(A.default,{size:"small",className:a.tableRowCopyButton},u.default.createElement(P.default,{className:a.tableRowCopyButtonIcon}),u.default.createElement(v.default,{variant:"body1",className:a.tableRowCopyButtonText},u.default.createElement(q.FormattedMessage,{id:"str.copy",defaultMessage:"Copy"}))))),u.default.createElement(w.TableCell,{numeric:!0},u.default.createElement(v.default,{variant:"body1"},t.qtum)),u.default.createElement(w.TableCell,{numeric:!0},u.default.createElement(v.default,{variant:"body1"},t.bot)),u.default.createElement(w.TableCell,null,u.default.createElement(A.default,{variant:"raised",color:"primary",size:"small",className:a.tableRowActionButton,onClick:e.onDepositClicked,"data-address":t.address,"data-qtum":t.qtum,"data-bot":t.bot},u.default.createElement(q.FormattedMessage,{id:"myBalances.deposit",defaultMessage:"Deposit"})),u.default.createElement(A.default,{variant:"raised",color:"primary",size:"small",className:a.tableRowActionButton,onClick:e.onWithdrawClicked,"data-address":t.address,"data-qtum":t.qtum,"data-bot":t.bot},u.default.createElement(q.FormattedMessage,{id:"str.withdraw",defaultMessage:"Withdraw"}))))}))}},{key:"getAddrCopiedSnackBar",value:function(){var e=this.state.addrCopiedSnackbarVisible;return u.default.createElement(x.default,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e,autoHideDuration:H.default.intervals.snackbarLong,onClose:this.onAddrCopiedSnackbarClosed,message:u.default.createElement(q.FormattedMessage,{id:"myBalances.addressCopied",defaultMessage:"Address copied"}),action:[u.default.createElement(O.default,{key:"close",color:"inherit",onClick:this.onAddrCopiedSnackbarClosed},u.default.createElement(R.default,null))]})}},{key:"onCopyClicked",value:function(e){this.setState({addrCopiedSnackbarVisible:!0})}},{key:"onDepositClicked",value:function(e){this.setState({selectedAddress:e.currentTarget.getAttribute("data-address"),selectedAddressQtum:e.currentTarget.getAttribute("data-qtum"),selectedAddressBot:e.currentTarget.getAttribute("data-bot"),depositDialogVisible:!0})}},{key:"onWithdrawClicked",value:function(e){var t=this.props,a=t.walletEncrypted,n=t.walletUnlockedUntil,r=t.toggleWalletUnlockDialog;(0,Y.doesUserNeedToUnlockWallet)(a,n)?r(!0):this.setState({selectedAddress:e.currentTarget.getAttribute("data-address"),selectedAddressQtum:e.currentTarget.getAttribute("data-qtum"),selectedAddressBot:e.currentTarget.getAttribute("data-bot"),withdrawDialogVisible:!0})}},{key:"onWithdraw",value:function(){this.setState({withdrawDialogVisible:!1})}},{key:"onAddrCopiedSnackbarClosed",value:function(){this.setState({addrCopiedSnackbarVisible:!1})}}]),t}(u.default.PureComponent);Z.propTypes={classes:f.default.object.isRequired,walletAddresses:f.default.array.isRequired,walletEncrypted:f.default.bool.isRequired,walletUnlockedUntil:f.default.number.isRequired,toggleWalletUnlockDialog:f.default.func.isRequired};var $=function(e){return{walletAddresses:e.App.get("walletAddresses"),walletEncrypted:e.App.get("walletEncrypted"),walletUnlockedUntil:e.App.get("walletUnlockedUntil")}};t.default=(0,p.connect)($,i)((0,j.withStyles)(U.default,{withTheme:!0})((0,q.injectIntl)(Z)))},1351:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),o=n(r),l=a(30),i=n(l),s=a(27),d=n(s),u=e.__MUI_SvgIcon__||d.default,c=o.default.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),f=function(e){return o.default.createElement(u,e,c)};f=(0,i.default)(f),f.muiName="SvgIcon",t.default=f}).call(t,a(15))},1352:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=n(u),f=a(1353),p=n(f);(t.CopyToClipboard=function(e){function t(){var e,a,n,r;o(this,t);for(var i=arguments.length,s=Array(i),d=0;d<i;d++)s[d]=arguments[d];return a=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.onClick=function(e){var t=n.props,a=t.text,r=t.onCopy,o=t.children,l=t.options,i=c.default.Children.only(o),s=(0,p.default)(a,l);r&&r(a,s),i&&i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e)},r=a,l(n,r)}return i(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),a=r(e,["text","onCopy","options","children"]),n=c.default.Children.only(t);return c.default.cloneElement(n,s({},a,{onClick:this.onClick}))}}]),t}(c.default.PureComponent)).defaultProps={onCopy:void 0,options:void 0}},1353:function(e,t,a){"use strict";function n(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function r(e,t){var a,r,i,s,d,u,c=!1;t||(t={}),a=t.debug||!1;try{i=o(),s=document.createRange(),d=document.getSelection(),u=document.createElement("span"),u.textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",document.body.appendChild(u),s.selectNode(u),d.addRange(s);if(!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(o){a&&console.error("unable to copy using execCommand: ",o),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),c=!0}catch(o){a&&console.error("unable to copy using clipboardData: ",o),a&&console.error("falling back to prompt"),r=n("message"in t?t.message:l),window.prompt(r,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(s):d.removeAllRanges()),u&&document.body.removeChild(u),i()}return c}var o=a(1354),l="Copy to clipboard: #{key}, Enter";e.exports=r},1354:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},1355:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{myBalancePaper:{minWidth:e.sizes.table.minWidth,overflowX:"scroll",boxShadow:"none",borderRadius:e.borderRadius,background:e.palette.background.paper},myBalanceGridContainer:{padding:e.padding.md.px},myBalanceTitle:{marginBottom:e.padding.xs.px},totalsContainerGrid:{marginBottom:e.padding.sm.px},totalsItemGrid:{marginRight:e.padding.md.px},totalsItemAmount:{fontSize:e.sizes.font.titleMd,marginBottom:2},tableHeaderItemText:{fontWeight:e.typography.fontWeightBold},tableRowCopyButton:{color:e.palette.primary.main},tableRowCopyButtonIcon:{width:12,height:12,marginRight:e.padding.unit.px},tableRowCopyButtonText:{color:e.palette.primary.main},tableRowActionButton:{minHeight:24,fontSize:12,marginRight:e.padding.unit.px,borderRadius:2}}};t.default=n},1356:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),u=n(d),c=a(1),f=n(c),p=a(20),m=a(26),b=n(m),y=a(53),g=n(y),h=a(101),v=(n(h),a(81)),w=n(v),C=a(25),T=a(4),E=(n(T),a(23)),k=a(1345),A=a(1357),_=n(A),x=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.dialogVisible,n=e.walletAddress,r=e.qtumAmount,o=e.botAmount,l=e.onClose,i=e.onCopyClicked;return n?u.default.createElement(w.default,{open:a,onClose:l},u.default.createElement(v.DialogTitle,null,u.default.createElement(E.FormattedMessage,{id:"depositDialog.title",defaultMessage:"QTUM/BOT Deposit Address"})),u.default.createElement(v.DialogContent,null,u.default.createElement(b.default,{variant:"title",className:t.depositAddress},n),u.default.createElement(b.default,{variant:"body1",className:t.qtumAmount},"QTUM: "+r),u.default.createElement(b.default,{variant:"body1"},"BOT: "+o)),u.default.createElement(v.DialogActions,null,u.default.createElement(g.default,{onClick:l},u.default.createElement(E.FormattedMessage,{id:"str.close",defaultMessage:"Close"})),u.default.createElement(k.CopyToClipboard,{text:n,onCopy:i},u.default.createElement(g.default,{color:"primary"},u.default.createElement(E.FormattedMessage,{id:"str.copy",defaultMessage:"Copy"}))))):null}}]),t}(u.default.Component);x.propTypes={classes:f.default.object.isRequired,dialogVisible:f.default.bool.isRequired,walletAddress:f.default.string,qtumAmount:f.default.string,botAmount:f.default.string,onClose:f.default.func.isRequired,onCopyClicked:f.default.func.isRequired},x.defaultProps={walletAddress:void 0,qtumAmount:void 0,botAmount:void 0};var S=function(e){return{}};t.default=(0,E.injectIntl)((0,p.connect)(S,i)((0,C.withStyles)(_.default,{withTheme:!0})(x)))},1357:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{depositAddress:{color:e.palette.primary.main,padding:e.padding.xs.px,marginBottom:e.padding.xs.px,border:e.border,borderRadius:e.borderRadius},qtumAmount:{marginBottom:e.padding.unit.px}}};t.default=n},1358:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,d,u,c,f,p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(0),b=n(m),y=a(1),g=n(y),h=a(20),v=a(26),w=n(v),C=a(53),T=n(C),E=a(101),k=n(E),A=a(81),_=n(A),x=a(177),S=n(x),O=a(176),M=a(25),R=a(4),B=(n(R),a(23)),P=(a(1345),a(24)),j=n(P),D=a(1359),q=n(D),N=a(100),W=n(N),I=a(39),F=a(67),U=(0,B.defineMessages)({to:{id:"str.to",defaultMessage:"To"},amount:{id:"str.amount",defaultMessage:"Amount"},youCanWithdraw:{id:"withdrawDialog.youCanWithdraw",defaultMessage:"You can withdraw up to:"}}),L=(s=(0,M.withStyles)(q.default,{withTheme:!0}),d=(0,h.connect)(function(e,t){return{walletAddresses:e.App.get("walletAddresses")}},function(e,t){return{createTransferTx:function(t,a,n,r){return e(W.default.createTransferTx(t,a,n,r))}}}),(0,B.injectIntl)(u=s(u=d((f=c=function(e){function t(){var e,a,n,i;o(this,t);for(var s=arguments.length,d=Array(s),u=0;u<s;u++)d[u]=arguments[u];return a=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(d))),n.state={toAddress:"",withdrawAmount:0,selectedToken:I.Token.Qtum},n.getFromToFields=function(){var e=n.props,t=e.classes,a=e.walletAddress,r=e.intl,o=n.state.toAddress;return b.default.createElement("div",null,b.default.createElement(w.default,{variant:"body1",className:t.fromLabel},b.default.createElement(B.FormattedMessage,{id:"str.from",defaultMessage:"From"})),b.default.createElement(w.default,{variant:"title",className:t.fromAddress},a),b.default.createElement(k.default,{autoFocus:!0,margin:"dense",id:"toAddress",label:r.formatMessage(U.to),type:"string",fullWidth:!0,className:t.toAddress,onChange:n.onToAddressChange,error:j.default.isEmpty(o),required:!0}))},n.getAmountFields=function(){var e=n.props,t=e.classes,a=e.intl,r=(e.qtumAmount,e.botAmount),o=e.walletAddresses,l=n.state,i=l.withdrawAmount,s=l.selectedToken,d=0;switch(s){case I.Token.Qtum:d=j.default.sumBy(o,function(e){return e.qtum?e.qtum:0});break;case I.Token.Bot:d=r;break;default:throw new Error("Invalid selectedToken "+s)}var u=a.formatMessage(U.youCanWithdraw);return b.default.createElement("div",null,b.default.createElement("div",{className:t.inputContainer},b.default.createElement(k.default,{margin:"dense",id:"amount",label:a.formatMessage(U.amount),type:"number",className:t.amountInput,onChange:n.onAmountChange,error:i<0||j.default.isEmpty(i),required:!0}),b.default.createElement(S.default,{value:s,onChange:n.onTokenChange,inputProps:{name:"selectedToken",id:"selectedToken"}},b.default.createElement(O.MenuItem,{value:I.Token.Qtum},"QTUM"),b.default.createElement(O.MenuItem,{value:I.Token.Bot},"BOT"))),b.default.createElement(w.default,{variant:"body1"},u+" "+d))},n.onToAddressChange=function(e){n.setState({toAddress:e.target.value})},n.onAmountChange=function(e){n.setState({withdrawAmount:e.target.value})},n.onTokenChange=function(e){n.setState(r({},e.target.name,e.target.value))},n.onSendClicked=function(){var e=n.props,t=e.walletAddress,a=e.createTransferTx,r=n.state,o=r.toAddress,l=r.withdrawAmount,i=r.selectedToken,s=l;i===I.Token.Bot&&(s=(0,F.decimalToSatoshi)(l)),a(t,o,i,s),n.props.onWithdraw()},i=a,l(n,i)}return i(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.dialogVisible,a=e.walletAddress,n=e.onClose;return a?b.default.createElement(_.default,{open:t,onClose:n},b.default.createElement(A.DialogTitle,null,b.default.createElement(B.FormattedMessage,{id:"withdrawDialog.title",defaultMessage:"Withdraw QTUM/BOT"})),b.default.createElement(A.DialogContent,null,this.getFromToFields(),this.getAmountFields()),b.default.createElement(A.DialogActions,null,b.default.createElement(T.default,{onClick:n},b.default.createElement(B.FormattedMessage,{id:"str.close",defaultMessage:"Close"})),b.default.createElement(T.default,{color:"primary",onClick:this.onSendClicked},b.default.createElement(B.FormattedMessage,{id:"withdrawDialog.send",defaultMessage:"Send"})))):null}}]),t}(b.default.Component),c.propTypes={intl:B.intlShape.isRequired,classes:g.default.object.isRequired,dialogVisible:g.default.bool.isRequired,walletAddress:g.default.string,qtumAmount:g.default.string,botAmount:g.default.string,onClose:g.default.func.isRequired,onWithdraw:g.default.func.isRequired,createTransferTx:g.default.func,walletAddresses:g.default.array.isRequired},c.defaultProps={walletAddress:void 0,qtumAmount:void 0,botAmount:void 0,createTransferTx:void 0},u=f))||u)||u)||u);t.default=L},1359:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{fromLabel:{marginBottom:e.padding.unit.px},fromAddress:{color:e.palette.primary.main,marginBottom:e.padding.sm.px},toAddress:{marginBottom:e.padding.md.px},inputContainer:{display:"inline-block"},amountInput:{width:300,marginRight:e.padding.xs.px,marginBottom:e.padding.xs.px}}};t.default=n},1360:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{getTransactions:function(t,a,n,r){return e(Q.default.getTransactions(t,a,n,r))}}}Object.defineProperty(t,"__esModule",{value:!0});var d,u,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),p=n(f),m=a(1),b=n(m),y=a(20),g=a(40),h=n(g),v=a(66),w=n(v),C=a(26),T=n(C),E=a(486),k=n(E),A=a(491),_=n(A),x=a(25),S=a(23),O=a(54),M=(n(O),a(24)),R=n(M),B=a(1328),P=(n(B),a(4)),j=n(P),D=a(1361),q=n(D),N=a(1318),W=n(N),I=a(1319),F=n(I),U=a(39),L=a(59),H=n(L),V=a(67),z=a(100),Q=n(z),G=(u=d=function(e){function t(){var e,a,n,i;o(this,t);for(var s=arguments.length,d=Array(s),u=0;u<s;u++)d[u]=arguments[u];return a=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(d))),n.state={transactions:[],order:U.SortBy.Descending.toLowerCase(),orderBy:"createdTime",perPage:10,page:0,limit:50,skip:0,expanded:[]},n.getTransactions=function(){var e=n.state,t=e.orderBy,a=e.order,r=e.limit,o=e.skip,l=a===U.SortBy.Descending.toLowerCase()?U.SortBy.Descending:U.SortBy.Ascending;n.props.getTransactions([{type:U.TransactionType.Transfer}],{field:t,direction:l},r,o)},n.getTableHeader=function(){var e=n.state,t=e.order,a=e.orderBy,r=[{id:"createdTime",name:"str.time",nameDefault:"Time",numeric:!1},{id:"senderAddress",name:"str.from",nameDefault:"From",numeric:!1},{id:"receiverAddress",name:"str.to",nameDefault:"To",numeric:!1},{id:"amount",name:"str.amount",nameDefault:"Amount",numeric:!0},{id:"fee",name:"str.fee",nameDefault:"Gas Fee(QTUM)",numeric:!0},{id:"status",name:"str.status",nameDefault:"Status",numeric:!1},{id:"actions",name:"str.empty",nameDefault:"",numeric:!1,sortable:!1}];return p.default.createElement(E.TableHead,null,p.default.createElement(E.TableRow,null,r.map(function(e){return p.default.createElement(E.TableCell,{key:e.id,numeric:e.numeric,sortDirection:a===e.id&&t},p.default.createElement(_.default,{title:p.default.createElement(S.FormattedMessage,{id:"str.sort",defaultMessage:"Sort"}),enterDelay:H.default.intervals.tooltipDelay,placement:e.numeric?"bottom-end":"bottom-start"},p.default.createElement(E.TableSortLabel,{active:a===e.id,direction:t,onClick:n.handleSorting(e.id)},p.default.createElement(S.FormattedMessage,{id:e.name,default:e.nameDefault}))))})))},n.handleSorting=function(e){return function(t){var a=n.state.transactions,r=e,o=U.SortBy.Descending.toLowerCase();n.state.orderBy===e&&n.state.order===U.SortBy.Descending.toLowerCase()&&(o=U.SortBy.Ascending.toLowerCase());var l=R.default.orderBy(a,[r],[o]);n.setState({transactions:l,orderBy:r,order:o})}},n.getTableRows=function(){var e=n.state.transactions;return p.default.createElement(E.TableBody,null,e.map(function(e,t){return n.getTableRow(e,t)}))},n.handleClick=function(e){return function(t){var a=n.state.expanded,o=a.indexOf(e),l=[];l=-1===o?[].concat(r(a),[e]):[].concat(r(a.slice(0,o)),r(a.slice(o+1))),n.setState({expanded:l})}},n.getTableRow=function(e,t){var a=n.props.classes,r=[],o=n.state.expanded.includes(e.txid);return r[0]=p.default.createElement(E.TableRow,{key:e.txid,selected:o,onClick:n.handleClick(e.txid),className:a.clickToExpandRow},p.default.createElement(E.TableCell,{className:a.summaryRowCell},(0,V.getShortLocalDateTimeString)(e.blockTime?e.blockTime:e.createdTime)),p.default.createElement(E.TableCell,null,e.senderAddress),p.default.createElement(E.TableCell,null,e.receiverAddress),p.default.createElement(E.TableCell,{numeric:!0},(e.amount||"")+"  "+(e.amount?e.token:"")),p.default.createElement(E.TableCell,{numeric:!0},e.fee),p.default.createElement(E.TableCell,null,e.status),p.default.createElement(E.TableCell,null,p.default.createElement("i",{className:(0,j.default)(o?"icon iconfont icon-ic_down":"icon iconfont icon-ic_up",a.arrowSize)}))),r[1]=p.default.createElement(E.TableRow,{key:"txaddr-"+e.txid,selected:!0,onClick:n.handleClick(e.txid),className:o?a.show:a.hide},p.default.createElement(F.default,{transaction:e}),p.default.createElement(E.TableCell,null),p.default.createElement(W.default,{transaction:e}),p.default.createElement(E.TableCell,null),p.default.createElement(E.TableCell,null),p.default.createElement(E.TableCell,null),p.default.createElement(E.TableCell,null)),r},n.getTableFooter=function(){var e=n.state,t=e.transactions,a=e.perPage,r=e.page;return p.default.createElement(E.TableFooter,null,p.default.createElement(E.TableRow,null,p.default.createElement(E.TablePagination,{colSpan:12,count:t.length,rowsPerPage:a,page:r,onChangePage:n.handleChangePage,onChangeRowsPerPage:n.handleChangePerPage})))},n.handleChangePage=function(e,t){var a=n.state,r=a.transactions,o=a.perPage,l=a.skip;n.setState({expanded:[]});var i=l;Math.floor(r.length/o)-1===t&&(i=r.length),n.setState({page:t,skip:i})},n.handleChangePerPage=function(e){n.setState({perPage:e.target.value})},i=a,l(n,i)}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.getTransactions()}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,a=t.transactions,n=t.txReturn,r=t.syncBlockNum;if((n&&!e.txReturn||r!==e.syncBlockNum)&&this.getTransactions(),a||e.transactions){var o=R.default.orderBy(e.transactions?e.transactions:a,[this.state.orderBy],[this.state.order]);this.setState({transactions:o})}}},{key:"componentDidUpdate",value:function(e,t){this.state.skip!==t.skip&&this.getTransactions()}},{key:"render",value:function(){var e=this.props.classes;return p.default.createElement(h.default,{className:e.txHistoryPaper},p.default.createElement(w.default,{container:!0,spacing:0,className:e.txHistoryGridContainer},p.default.createElement(T.default,{variant:"title"},p.default.createElement(S.FormattedMessage,{id:"walletHistory.transferHistory",defaultMessage:"Transfer History"})),p.default.createElement(k.default,{className:e.table},this.getTableHeader(),this.getTableRows(),this.getTableFooter())))}}]),t}(p.default.Component),d.propTypes={classes:b.default.object.isRequired,getTransactions:b.default.func.isRequired,transactions:b.default.array,txReturn:b.default.object,syncBlockNum:b.default.number.isRequired},d.defaultProps={transactions:[],txReturn:void 0},u),X=function(e){return{syncBlockNum:e.App.get("syncBlockNum"),transactions:e.Graphql.get("getTransactionsReturn"),txReturn:e.Graphql.get("txReturn")}};t.default=(0,y.connect)(X,s)((0,x.withStyles)(q.default,{withTheme:!0})((0,S.injectIntl)(G)))},1361:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{txHistoryPaper:{minWidth:e.sizes.table.minWidth,overflow:"scroll",boxShadow:"none",borderRadius:e.borderRadius,background:e.palette.background.paper},txHistoryGridContainer:{padding:e.padding.md.px},table:{marginTop:e.padding.sm.px,overflow:"scroll"},clickToExpandRow:{cursor:"pointer"},summaryRowCell:{paddingTop:"24px",paddingBottom:"24px"},hide:{display:"none"},show:{display:"table-row"},arrowSize:{fontSize:"8px"}}};t.default=n},1362:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{infoPaper:{minWidth:e.sizes.table.minWidth,overflowX:"scroll",boxShadow:"none",borderRadius:e.borderRadius,background:e.palette.background.paper,padding:e.padding.xs.px+" "+e.padding.md.px+" "+e.padding.unit.px+" "+e.padding.md.px,marginBottom:e.padding.xs.px}}};t.default=n}});