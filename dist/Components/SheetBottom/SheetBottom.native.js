var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _SheetBottom=_interopRequireDefault(require("./SheetBottom.styles"));var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/SheetBottom/SheetBottom.native.js";var SheetBottom=function(_Component){(0,_inherits2.default)(SheetBottom,_Component);function SheetBottom(props){var _this;(0,_classCallCheck2.default)(this,SheetBottom);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(SheetBottom).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{internalVisible:false,pan:new _reactNative.Animated.ValueXY(),initialHeight:0,initialWidth:0,fullHeight:0});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onMenuLayout",function(e){var _this$state=_this.state,pan=_this$state.pan,initialHeight=_this$state.initialHeight;var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;if(height==0)return;if(height<=initialHeight)return;var windowHeight=_reactNative.Dimensions.get('window').height;_this.setState({initialWidth:width,initialHeight:height,fullHeight:windowHeight},function(){pan.setValue({x:0,y:windowHeight});_this.createPanResponder();});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"createPanResponder",function(){var _this$props=_this.props,onSwipeDown=_this$props.onSwipeDown,onSwipeUp=_this$props.onSwipeUp,cardVerticalPadding=_this$props.cardVerticalPadding;var _this$state2=_this.state,pan=_this$state2.pan,initialHeight=_this$state2.initialHeight,fullHeight=_this$state2.fullHeight;_this.panResponder=_reactNative.PanResponder.create({onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return true;},onPanResponderMove:function onPanResponderMove(e,gestureState){if(gestureState.dy<80&&gestureState.dy>-40){_reactNative.Animated.timing(pan,{toValue:{x:0,y:fullHeight-initialHeight-cardVerticalPadding+gestureState.dy},duration:0}).start();}},onPanResponderRelease:function onPanResponderRelease(e,gestureState){if(initialHeight/4-gestureState.dy<0){if(onSwipeDown)onSwipeDown();}else if(initialHeight/4+gestureState.dy>0){if(onSwipeUp)onSwipeUp();}}});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_close",function(){_this.animateSheet(false);_this.setState({initialHeight:0});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_onBackdropPress",function(){var onBackdropPress=_this.props.onBackdropPress;if(onBackdropPress)onBackdropPress();});_this.createPanResponder();return _this;}(0,_createClass2.default)(SheetBottom,[{key:"componentDidMount",value:function componentDidMount(){var _this$props2=this.props,visible=_this$props2.visible,pageHeight=_this$props2.pageHeight;var pan=this.state.pan;if(visible){this._open();}this.createPanResponder();var fullHeight=pageHeight?pageHeight:_reactNative.Dimensions.get('window').height;pan.setValue({x:0,y:fullHeight});this.setState({fullHeight:fullHeight});}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var visible=this.props.visible;if(visible!=prevProps.visible){if(visible){this._open();}else{this._close();}}}},{key:"animateSheet",value:function animateSheet(visible){var _this2=this;var _this$props3=this.props,cardVerticalPadding=_this$props3.cardVerticalPadding,duration=_this$props3.duration;var _this$state3=this.state,initialHeight=_this$state3.initialHeight,fullHeight=_this$state3.fullHeight,pan=_this$state3.pan;if(visible){this.setState({internalVisible:true},function(){if(initialHeight==0){setTimeout(function(){return _this2.animateSheet(true);},100);return;}_reactNative.Animated.spring(pan,{toValue:{x:0,y:fullHeight-initialHeight-cardVerticalPadding}}).start();});}else{_reactNative.Animated.timing(pan,{toValue:{x:0,y:fullHeight},duration:duration}).start(function(){_this2.setState({internalVisible:false});});}}},{key:"_open",value:function _open(){this.animateSheet(true);}},{key:"_handlePlatform",value:function _handlePlatform(){var internalVisible=this.state.internalVisible;return _react.default.createElement(_reactNative.Modal,{transparent:true,animationType:'none',visible:internalVisible,onRequestClose:this._close,supportedOrientations:['portrait','landscape'],__source:{fileName:_jsxFileName,lineNumber:173}},this._renderContent());}},{key:"_renderContent",value:function _renderContent(){var _this$props4=this.props,children=_this$props4.children,wrapperStyles=_this$props4.wrapperStyles,style=_this$props4.style,cardVerticalPadding=_this$props4.cardVerticalPadding,testID=_this$props4.testID;var _this$state4=this.state,pan=_this$state4.pan,fullHeight=_this$state4.fullHeight;return _react.default.createElement(_reactNative.View,{style:[_SheetBottom.default.wrapper,wrapperStyles],testID:testID,__source:{fileName:_jsxFileName,lineNumber:195}},_react.default.createElement(_reactNative.TouchableOpacity,{style:_SheetBottom.default.mask,activeOpacity:1,onPress:this._onBackdropPress,__source:{fileName:_jsxFileName,lineNumber:196}}),_react.default.createElement(_reactNative.Animated.View,(0,_extends2.default)({useNativeDriver:false},this.panResponder.panHandlers,{style:[_SheetBottom.default.container,style,{height:fullHeight,paddingVertical:cardVerticalPadding,transform:[{translateY:pan.y}]}],__source:{fileName:_jsxFileName,lineNumber:202}}),_react.default.createElement(_reactNative.SafeAreaView,{onLayout:this.onMenuLayout,__source:{fileName:_jsxFileName,lineNumber:215}},children)));}},{key:"render",value:function render(){return this._handlePlatform();}}]);return SheetBottom;}(_react.Component);(0,_defineProperty2.default)(SheetBottom,"propTypes",{duration:_propTypes.default.number,onBackdropPress:_propTypes.default.func,onSwipeDown:_propTypes.default.func,onSwipeUp:_propTypes.default.func,children:_propTypes.default.node,wrapperStyles:_propTypes.default.object,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),visible:_propTypes.default.bool,cardVerticalPadding:_propTypes.default.number,pageHeight:_propTypes.default.number,testID:_propTypes.default.string});(0,_defineProperty2.default)(SheetBottom,"defaultProps",{duration:200,cardVerticalPadding:20});var _default=SheetBottom;exports.default=_default;
