var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _=require("../../");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storybookState=require("@sambego/storybook-state");var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/BottomNavigation/BottomNavigation.stories.js";var store=new _storybookState.Store({one:0,two:0,three:0,four:0,five:0,showOne:0});var _default=(0,_storiesOf.storiesOf)('Components|Bottom Navigation',module).addParameters({jest:['BottomNavigation']}).add('Label',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:20}},_react.default.createElement(_Header.default,{title:'Bottom Navigation',__source:{fileName:_jsxFileName,lineNumber:21}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:22}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.one,handleChange:function handleChange(value){return store.set({one:value});},showAllLabels:true,actionItems:[{label:'Buy'},{label:'Sell'},{label:'Settings'}],__source:{fileName:_jsxFileName,lineNumber:24}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:37}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.two,handleChange:function handleChange(value){return store.set({two:value});},showAllLabels:true,backgroundColor:'#E91E63',actionItems:[{label:'Home'},{label:'Favorite'},{label:'Info'},_react.default.createElement(_.BottomNavigationItem,{key:4,label:'Settings',__source:{fileName:_jsxFileName,lineNumber:49}})],__source:{fileName:_jsxFileName,lineNumber:39}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:55}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.three,showAllLabels:true,handleChange:function handleChange(value){return store.set({three:value});},backgroundColor:'#9C27B0',horizontalWhenLandscape:true,actionItems:[{label:'Home'},{label:'Favorite'},{label:'Info'},{label:'Profile'},_react.default.createElement(_.BottomNavigationItem,{key:4,label:'Settings',__source:{fileName:_jsxFileName,lineNumber:69}})],__source:{fileName:_jsxFileName,lineNumber:57}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:74}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%'},backgroundColor:'black',value:state.four,handleChange:function handleChange(value){return store.set({four:value});},showAllLabels:true,actionItems:[_react.default.createElement(_.BottomNavigationItem,{key:1,label:'Home',__source:{fileName:_jsxFileName,lineNumber:83}}),_react.default.createElement(_.BottomNavigationItem,{key:2,label:'Favorite',__source:{fileName:_jsxFileName,lineNumber:84}}),_react.default.createElement(_.BottomNavigationItem,{key:3,label:'Info',__source:{fileName:_jsxFileName,lineNumber:85}}),_react.default.createElement(_.BottomNavigationItem,{key:4,label:'Settings',__source:{fileName:_jsxFileName,lineNumber:86}})],__source:{fileName:_jsxFileName,lineNumber:76}});}));}).add('Icons',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:94}},_react.default.createElement(_Header.default,{title:'Bottom Navigation',__source:{fileName:_jsxFileName,lineNumber:95}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:96}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.two,handleChange:function handleChange(value){return store.set({two:value});},showLabels:true,backgroundColor:'#E91E63',actionItems:[{icon:'album'},{icon:'place'},_react.default.createElement(_.BottomNavigationItem,{key:4,icon:'assignment',__source:{fileName:_jsxFileName,lineNumber:107}})],__source:{fileName:_jsxFileName,lineNumber:98}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:112}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.one,handleChange:function handleChange(value){return store.set({one:value});},actionItems:[{icon:'home'},{icon:'favorite'},{icon:'info'},_react.default.createElement(_.BottomNavigationItem,{key:4,icon:'settings',__source:{fileName:_jsxFileName,lineNumber:122}})],__source:{fileName:_jsxFileName,lineNumber:114}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:127}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.three,handleChange:function handleChange(value){return store.set({three:value});},backgroundColor:'#009688',actionItems:[{icon:'home'},{icon:'attach-money'},{icon:'favorite'},{icon:'info'},_react.default.createElement(_.BottomNavigationItem,{key:4,icon:'settings',__source:{fileName:_jsxFileName,lineNumber:139}})],__source:{fileName:_jsxFileName,lineNumber:129}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:144}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.four,handleChange:function handleChange(value){return store.set({four:value});},backgroundColor:'#009688',horizontalWhenLandscape:true,actionItems:[{icon:'home'},{icon:'attach-money'},{icon:'favorite'},{icon:'info'},_react.default.createElement(_.BottomNavigationItem,{key:4,icon:'settings',__source:{fileName:_jsxFileName,lineNumber:157}})],__source:{fileName:_jsxFileName,lineNumber:146}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:163}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%'},backgroundColor:'black',value:state.five,handleChange:function handleChange(value){return store.set({five:value});},actionItems:[_react.default.createElement(_.BottomNavigationItem,{key:1,icon:'home',__source:{fileName:_jsxFileName,lineNumber:171}}),_react.default.createElement(_.BottomNavigationItem,{key:2,icon:'favorite',badgeProps:{size:7,color:'red',right:1,top:2},__source:{fileName:_jsxFileName,lineNumber:172}}),_react.default.createElement(_.BottomNavigationItem,{key:3,icon:'info',__source:{fileName:_jsxFileName,lineNumber:182}}),_react.default.createElement(_.BottomNavigationItem,{key:4,icon:'settings',badgeProps:{content:72,size:14,color:'red'},__source:{fileName:_jsxFileName,lineNumber:183}})],__source:{fileName:_jsxFileName,lineNumber:165}});}));}).add('Icon + Label',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:200}},_react.default.createElement(_Header.default,{title:'Bottom Navigation',__source:{fileName:_jsxFileName,lineNumber:201}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:202}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.two,showLabels:true,handleChange:function handleChange(value){return store.set({two:value});},backgroundColor:'#E91E63',actionItems:[{icon:'home',label:'Home'},{icon:'favorite',label:'Favorite'},{icon:'info',label:'Info'}],__source:{fileName:_jsxFileName,lineNumber:204}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:218}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.showOne,showOneItem:true,handleChange:function handleChange(value){return store.set({showOne:value});},backgroundColor:'#E91E63',actionItems:[{icon:'home',label:'Home'},{icon:'favorite',label:'Favorite'},{icon:'info',label:'Info'}],__source:{fileName:_jsxFileName,lineNumber:220}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:234}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.one,handleChange:function handleChange(value){return store.set({one:value});},showLabels:true,actionItems:[{icon:'home',label:'Home'},{icon:'favorite',label:'Favorite'},{icon:'info',label:'Info'},_react.default.createElement(_.BottomNavigationItem,{showLabel:true,key:4,icon:'settings',label:'Settings',__source:{fileName:_jsxFileName,lineNumber:245}})],__source:{fileName:_jsxFileName,lineNumber:236}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:255}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.three,handleChange:function handleChange(value){return store.set({three:value});},backgroundColor:'#9C27B0',showOneItem:true,actionItems:[{icon:'home',label:'Home'},{icon:'attach-money',label:'Buy'},{icon:'favorite',label:'Favorite'},{icon:'info',label:'Info'},_react.default.createElement(_.BottomNavigationItem,{showOneItem:true,key:4,icon:'settings',label:'Settings',__source:{fileName:_jsxFileName,lineNumber:268}})],__source:{fileName:_jsxFileName,lineNumber:257}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:278}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40},value:state.four,handleChange:function handleChange(value){return store.set({four:value});},backgroundColor:'#9C27B0',horizontalWhenLandscape:true,actionItems:[{icon:'home',label:'Home'},{icon:'attach-money',label:'Buy'},{icon:'favorite',label:'Favorite'},{icon:'info',label:'Info'},_react.default.createElement(_.BottomNavigationItem,{showLabel:true,key:4,icon:'settings',label:'Settings',__source:{fileName:_jsxFileName,lineNumber:291}})],__source:{fileName:_jsxFileName,lineNumber:280}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:301}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%'},backgroundColor:'black',value:state.five,handleChange:function handleChange(value){return store.set({five:value});},actionItems:[_react.default.createElement(_.BottomNavigationItem,{key:1,icon:'home',label:'Home',__source:{fileName:_jsxFileName,lineNumber:309}}),_react.default.createElement(_.BottomNavigationItem,{key:2,icon:'favorite',label:'Favorite',badgeProps:{size:7,color:'red',right:1,top:2},__source:{fileName:_jsxFileName,lineNumber:310}}),_react.default.createElement(_.BottomNavigationItem,{key:3,icon:'info',label:'Info',__source:{fileName:_jsxFileName,lineNumber:321}}),_react.default.createElement(_.BottomNavigationItem,{key:4,icon:'settings',label:'Settings',badgeProps:{content:72,size:14,color:'red'},__source:{fileName:_jsxFileName,lineNumber:322}})],__source:{fileName:_jsxFileName,lineNumber:303}});}));}).add('Landscape',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:341}},_react.default.createElement(_Header.default,{title:'Bottom Navigation',__source:{fileName:_jsxFileName,lineNumber:342}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:344}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{width:'100%',marginBottom:40},value:state.three,handleChange:function handleChange(value){return store.set({three:value});},backgroundColor:'#9C27B0',actionItems:[{icon:'home',label:'Home'},{icon:'attach-money',label:'Buy'},{icon:'favorite',label:'Favorite'},{icon:'info',label:'Info'},_react.default.createElement(_.BottomNavigationItem,{key:4,icon:'settings',label:'Settings',__source:{fileName:_jsxFileName,lineNumber:356}})],__source:{fileName:_jsxFileName,lineNumber:346}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:365}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{width:'100%',marginBottom:40},value:state.four,handleChange:function handleChange(value){return store.set({four:value});},backgroundColor:'#9C27B0',horizontalWhenLandscape:true,actionItems:[{icon:'home',label:'Home'},{icon:'attach-money',label:'Buy'},{icon:'favorite',label:'Favorite'},{icon:'info',label:'Info'},_react.default.createElement(_.BottomNavigationItem,{key:4,icon:'settings',label:'Settings',__source:{fileName:_jsxFileName,lineNumber:378}})],__source:{fileName:_jsxFileName,lineNumber:367}});}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:387}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{width:'100%'},backgroundColor:'black',value:state.five,handleChange:function handleChange(value){return store.set({five:value});},horizontalWhenLandscape:true,actionItems:[_react.default.createElement(_.BottomNavigationItem,{key:1,icon:'home',label:'Home',__source:{fileName:_jsxFileName,lineNumber:396}}),_react.default.createElement(_.BottomNavigationItem,{key:2,icon:'favorite',label:'Favorite',badgeProps:{size:7,color:'red',right:1,top:2},__source:{fileName:_jsxFileName,lineNumber:397}}),_react.default.createElement(_.BottomNavigationItem,{key:3,icon:'info',label:'Info',__source:{fileName:_jsxFileName,lineNumber:408}}),_react.default.createElement(_.BottomNavigationItem,{key:4,icon:'settings',label:'Settings',badgeProps:{content:72,size:14,color:'red'},__source:{fileName:_jsxFileName,lineNumber:409}})],__source:{fileName:_jsxFileName,lineNumber:389}});}));}).add('Custom',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:427}},_react.default.createElement(_Header.default,{title:'Bottom Navigation',__source:{fileName:_jsxFileName,lineNumber:428}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:429}},function(state){return _react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%',marginBottom:40,borderRadius:50},value:state.one,handleChange:function handleChange(value){return store.set({one:value});},showAllLabels:true,actionItems:[_react.default.createElement(_.BottomNavigationItem,{key:1,icon:'home',label:'Home',rippleProps:{rippleContainerBorderRadius:50},__source:{fileName:_jsxFileName,lineNumber:442}}),_react.default.createElement(_.BottomNavigationItem,{key:2,icon:'favorite',label:'Favorite',rippleProps:{rippleContainerBorderRadius:50},__source:{fileName:_jsxFileName,lineNumber:448}}),_react.default.createElement(_.BottomNavigationItem,{key:3,icon:'info',label:'Settings',rippleProps:{rippleContainerBorderRadius:50},__source:{fileName:_jsxFileName,lineNumber:454}}),_react.default.createElement(_.BottomNavigationItem,{key:4,icon:'settings',label:'Settings',rippleProps:{rippleContainerBorderRadius:50},__source:{fileName:_jsxFileName,lineNumber:460}})],__source:{fileName:_jsxFileName,lineNumber:431}});}));});exports.default=_default;