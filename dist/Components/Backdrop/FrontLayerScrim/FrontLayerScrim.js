var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _=require("../../../");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _FrontLayerScrim=_interopRequireDefault(require("./FrontLayerScrim.styles"));var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/Backdrop/FrontLayerScrim/FrontLayerScrim.js";var FrontLayerScrim=function(_Component){(0,_inherits2.default)(FrontLayerScrim,_Component);function FrontLayerScrim(props){(0,_classCallCheck2.default)(this,FrontLayerScrim);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(FrontLayerScrim).call(this,props));}(0,_createClass2.default)(FrontLayerScrim,[{key:"render",value:function render(){var _this$props=this.props,backRevealed=_this$props.backRevealed,toggleLayout=_this$props.toggleLayout,animate=_this$props.animate;if(!backRevealed)return null;return _react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){return toggleLayout();},__source:{fileName:_jsxFileName,lineNumber:24}},_react.default.createElement(_reactNative.Animated.View,{style:[_FrontLayerScrim.default.scrimLayer,{opacity:animate}],useNativeDriver:false,__source:{fileName:_jsxFileName,lineNumber:25}},_react.default.createElement(_.Icon,{name:"expand-less",size:24,color:"rgba(0,0,0,0.56)",style:_FrontLayerScrim.default.scrimLayerIcon,__source:{fileName:_jsxFileName,lineNumber:28}})));}}]);return FrontLayerScrim;}(_react.Component);(0,_defineProperty2.default)(FrontLayerScrim,"propTypes",{backRevealed:_propTypes.default.bool,toggleLayout:_propTypes.default.func,animate:_propTypes.default.object});var _default=(0,_withTheme.default)(FrontLayerScrim);exports.default=_default;
