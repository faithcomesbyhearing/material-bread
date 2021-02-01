var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Paper=_interopRequireDefault(require("../Paper/Paper"));var _IconButton=_interopRequireDefault(require("../IconButton/IconButton"));var _Appbar=_interopRequireDefault(require("./Appbar.styles"));var _=require("../../");var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/Appbar/Appbar.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Appbar=function(_Component){(0,_inherits2.default)(Appbar,_Component);function Appbar(){(0,_classCallCheck2.default)(this,Appbar);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Appbar).apply(this,arguments));}(0,_createClass2.default)(Appbar,[{key:"_renderAppbarContent",value:function _renderAppbarContent(){var _this$props=this.props,barType=_this$props.barType,title=_this$props.title,actionItemsStyle=_this$props.actionItemsStyle;return _react.default.createElement(_react.Fragment,{__source:{fileName:_jsxFileName,lineNumber:42}},_react.default.createElement(_reactNative.View,{style:[_Appbar.default.left,{height:barType==='prominent'||barType==='prominent dense'?'100%':'auto'}],__source:{fileName:_jsxFileName,lineNumber:43}},this._renderNavigation(),title&&this._renderTitle()),_react.default.createElement(_reactNative.View,{style:[_Appbar.default.right,actionItemsStyle],__source:{fileName:_jsxFileName,lineNumber:56}},this._renderActionItems()));}},{key:"_renderNavigation",value:function _renderNavigation(){var _this$props2=this.props,navigation=_this$props2.navigation,onNavigation=_this$props2.onNavigation,barType=_this$props2.barType;if(typeof navigation==='string'||navigation instanceof String){return _react.default.createElement(_IconButton.default,{name:navigation||'menu',size:24,color:'white',onPress:onNavigation,style:{alignSelf:barType==='prominent'||barType==='prominent dense'?'flex-start':'center'},__source:{fileName:_jsxFileName,lineNumber:68}});}else{return navigation;}}},{key:"_renderTitle",value:function _renderTitle(){var onTitle=this.props.onTitle;if(onTitle){return _react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onTitle,__source:{fileName:_jsxFileName,lineNumber:90}},this._renderTitleInner());}else{return this._renderTitleInner();}}},{key:"_renderTitleInner",value:function _renderTitleInner(){var _this$props3=this.props,barType=_this$props3.barType,title=_this$props3.title,navigation=_this$props3.navigation,titleStyles=_this$props3.titleStyles,subtitle=_this$props3.subtitle,subtitleStyles=_this$props3.subtitleStyles,textContainerStyles=_this$props3.textContainerStyles;var titleComponent=typeof title=='string'||title instanceof String?_react.default.createElement(_reactNative.Text,{numberOfLines:barType==='prominent'||barType==='prominent dense'?3:1,style:[_Appbar.default.pageTitle,titleStyles],__source:{fileName:_jsxFileName,lineNumber:112}},title):title;return _react.default.createElement(_reactNative.View,{style:[{marginLeft:navigation?32:0,marginBottom:barType==='prominent'?12:0,alignSelf:barType==='prominent'||barType==='prominent dense'?'flex-end':'center',zIndex:100},textContainerStyles],__source:{fileName:_jsxFileName,lineNumber:124}},titleComponent,subtitle&&barType!=='dense'?_react.default.createElement(_reactNative.Text,{style:[{fontSize:14},{color:'rgba(255,255,255,.87)'},subtitleStyles],__source:{fileName:_jsxFileName,lineNumber:139}},subtitle):null);}},{key:"_renderActionItems",value:function _renderActionItems(){var actionItems=this.props.actionItems;if(!actionItems)return null;return _react.default.createElement(_react.Fragment,{__source:{fileName:_jsxFileName,lineNumber:156}},actionItems.map(function(item,index){if(item.name){return _react.default.createElement(_IconButton.default,{key:item.name,name:item.name,size:24,color:'white',style:{marginRight:index+1===actionItems.length?0:16},onPress:item.onPress,__source:{fileName:_jsxFileName,lineNumber:160}});}else{return item;}}));}},{key:"appbarHeight",value:function appbarHeight(){var barType=this.props.barType;var height=56;if(barType==='prominent'){height=128;}else if(barType==='dense'){height=48;}else if(barType=='prominent dense'){height=96;}return height;}},{key:"render",value:function render(){var _this$props4=this.props,barType=_this$props4.barType,color=_this$props4.color,backgroundImage=_this$props4.backgroundImage,theme=_this$props4.theme,style=_this$props4.style,children=_this$props4.children,position=_this$props4.position,elevation=_this$props4.elevation,rest=(0,_objectWithoutProperties2.default)(_this$props4,["barType","color","backgroundImage","theme","style","children","position","elevation"]);var backgroundColor=color?color:theme.primary.main;var implementedShadow=elevation!=undefined||elevation!=null?(0,_.shadow)(elevation):(0,_.shadow)(4);return _react.default.createElement(_Paper.default,(0,_extends2.default)({style:[_Appbar.default.appbar,_objectSpread({width:'100%',backgroundColor:backgroundColor,height:this.appbarHeight(),padding:barType=='dense'?12:16,position:position||'relative',alignItems:barType=='prominent'||barType==='prominent dense'?'flex-start':'center'},implementedShadow),style]},rest,{__source:{fileName:_jsxFileName,lineNumber:212}}),backgroundImage&&_react.default.cloneElement(backgroundImage,{style:[{position:'absolute',top:0,left:0,right:0,bottom:0}]}),children?children:this._renderAppbarContent());}}]);return Appbar;}(_react.Component);(0,_defineProperty2.default)(Appbar,"propTypes",{color:_propTypes.default.string,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),theme:_propTypes.default.object,barType:_propTypes.default.string,backgroundImage:_propTypes.default.node,position:_propTypes.default.string,elevation:_propTypes.default.number,navigation:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.string]),onNavigation:_propTypes.default.func,title:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.string]),titleStyles:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),onTitle:_propTypes.default.func,subtitle:_propTypes.default.string,subtitleStyles:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),textContainerStyles:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),actionItems:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.array]),actionItemsStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),children:_propTypes.default.node});var _default=(0,_withTheme.default)(Appbar);exports.default=_default;