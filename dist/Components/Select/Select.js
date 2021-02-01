var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _Menu=_interopRequireDefault(require("../Menu/Menu.js"));var _MenuItem=_interopRequireDefault(require("../Menu/MenuItem/MenuItem.js"));var _Icon=_interopRequireDefault(require("../Icon/Icon.js"));var _TextField=_interopRequireDefault(require("../TextField/TextField.js"));var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Select=_interopRequireDefault(require("./Select.styles"));var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/Select/Select.js";var _Dimensions$get=_reactNative.Dimensions.get('window'),height=_Dimensions$get.height;var Select=function(_Component){(0,_inherits2.default)(Select,_Component);function Select(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,Select);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(Select)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{visible:false});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onSelect",function(item){_this.props.onSelect(item);_this.hideMenu();});return _this;}(0,_createClass2.default)(Select,[{key:"showMenu",value:function showMenu(){this.setState({visible:true});}},{key:"hideMenu",value:function hideMenu(){this.setState({visible:false});}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,buttonStyle=_this$props.buttonStyle,label=_this$props.label,selectedItem=_this$props.selectedItem,menuItems=_this$props.menuItems,textFieldProps=_this$props.textFieldProps,menuProps=_this$props.menuProps,type=_this$props.type,theme=_this$props.theme,testID=_this$props.testID,fullWidth=_this$props.fullWidth;var visible=this.state.visible;var iconColor=visible?theme.primary.main:'#757575';if(textFieldProps&&textFieldProps.error)iconColor=theme.error.main;var platformStyles=_reactNative.Platform.OS=='web'?{cursor:'pointer'}:{};var estimatedListHeight=menuItems.length*48;var menuListItemsWrapperStyle=estimatedListHeight>height?{height:400}:null;return _react.default.createElement(_Menu.default,(0,_extends2.default)({style:[_Select.default.menu,{flex:1}],sameWidth:true,visible:visible,fullWidth:fullWidth,modalMenuStyle:{marginTop:textFieldProps&&textFieldProps.dense?60:71,width:'100%',marginLeft:_reactNative.Platform.OS!=='web'?6:0},onBackdropPress:function onBackdropPress(){return _this2.hideMenu();},testID:testID,button:_react.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(){return _this2.showMenu();},style:[_Select.default.button,{width:fullWidth?'100%':'auto'},buttonStyle],underlayColor:'transparent',__source:{fileName:_jsxFileName,lineNumber:103}},_react.default.createElement(_reactNative.View,{style:_Select.default.innerView,__source:{fileName:_jsxFileName,lineNumber:111}},_react.default.createElement(_TextField.default,(0,_extends2.default)({type:type?type:'flat',label:label,value:selectedItem,focused:visible,editable:false,style:[_Select.default.textfield,platformStyles,textFieldProps&&textFieldProps.style],trailingIcon:_react.default.createElement(_Icon.default,{name:"arrow-drop-down",size:24,color:iconColor,style:_Select.default.icon,__source:{fileName:_jsxFileName,lineNumber:124}})},textFieldProps,{__source:{fileName:_jsxFileName,lineNumber:112}}))))},menuProps,{__source:{fileName:_jsxFileName,lineNumber:90}}),_react.default.createElement(_reactNative.View,{style:menuListItemsWrapperStyle,__source:{fileName:_jsxFileName,lineNumber:137}},_react.default.createElement(_reactNative.FlatList,{data:menuItems,renderItem:function renderItem(_ref){var item=_ref.item;return _react.default.createElement(_MenuItem.default,{key:item.id,text:item.name,onPress:function onPress(){return _this2.onSelect(item);},style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:142}});},__source:{fileName:_jsxFileName,lineNumber:138}})));}}]);return Select;}(_react.Component);(0,_defineProperty2.default)(Select,"propTypes",{onSelect:_propTypes.default.func,buttonStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),label:_propTypes.default.string,selectedItem:_propTypes.default.node,menuItems:_propTypes.default.array,visible:_propTypes.default.bool,textFieldProps:_propTypes.default.object,menuProps:_propTypes.default.object,type:_propTypes.default.string,onBackdropPress:_propTypes.default.func,theme:_propTypes.default.object,testID:_propTypes.default.string,fullWidth:_propTypes.default.bool});var _default=(0,_withTheme.default)(Select);exports.default=_default;