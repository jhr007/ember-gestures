"use strict";define("dummy/app",["exports","ember","ember-resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,r,a){var o=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,o=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),(0,r["default"])(o,a["default"].modulePrefix),e["default"]=o}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var r=n["default"].APP.name,a=n["default"].APP.version;e["default"]=t["default"].extend({version:a,name:r})}),define("dummy/components/async-element",["exports","ember-gestures/components/async-element"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/context-element",["exports","ember-gestures/components/context-element"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/fast-action",["exports","ember-gestures/components/fast-action"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/fast-async",["exports","ember-gestures/components/fast-async"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/gesture-element",["exports","ember-gestures/components/gesture-element"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/recognizes-single-and-double-tap",["exports","ember","dummy/templates/components/recognizes-single-and-double-tap","ember-gestures/mixins/recognizers"],function(e,t,n,r){var a=t["default"].Component,o=t["default"].run;e["default"]=a.extend(r["default"],{layout:n["default"],recognizers:"tap double-tap",sawSingle:!1,sawDouble:!1,tap:function(){this.set("sawSingle",!0),o.debounce(this,this.reset,1e3)},doubleTap:function(){this.set("sawDouble",!0),o.debounce(this,this.reset,1e3)},reset:function(){this.get("isDestroyed")||(this.set("sawSingle",!1),this.set("sawDouble",!1))}})}),define("dummy/components/slide-toggle",["exports","ember-gestures/components/slide-toggle"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/ember-gestures/recognizers/double-tap",["exports","ember-gestures/recognizers/double-tap"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/ember-gestures/recognizers/pan",["exports","ember-gestures/recognizers/pan"],function(e,t){e["default"]=t["default"]}),define("dummy/ember-gestures/recognizers/pinch",["exports","ember-gestures/recognizers/pinch"],function(e,t){e["default"]=t["default"]}),define("dummy/ember-gestures/recognizers/press",["exports","ember-gestures/recognizers/press"],function(e,t){e["default"]=t["default"]}),define("dummy/ember-gestures/recognizers/rotate",["exports","ember-gestures/recognizers/rotate"],function(e,t){e["default"]=t["default"]}),define("dummy/ember-gestures/recognizers/swipe",["exports","ember-gestures/recognizers/swipe"],function(e,t){e["default"]=t["default"]}),define("dummy/ember-gestures/recognizers/tap",["exports","ember-gestures/recognizers/single-tap"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/ember-gestures/recognizers/vertical-pan",["exports","ember-gestures/recognizers/vertical-pan"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/ember-gestures/recognizers/vertical-swipe",["exports","ember-gestures/recognizers/vertical-swipe"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/event_dispatcher",["exports","ember","ember-gestures/event_dispatcher","dummy/config/environment"],function(e,t,n,r){var a=t["default"].merge({},{emberUseCapture:!1,removeTracking:!1,useFastPaths:!1});a=t["default"].merge(a,r["default"].gestures),e["default"]=n["default"].extend({useCapture:a.emberUseCapture,removeTracking:a.removeTracking,useFastPaths:a.useFastPaths})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var r,a=n["default"].exportApplicationGlobal;r="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/instance-initializers/ember-gestures",["exports","ember-getowner-polyfill"],function(e,t){e["default"]={name:"ember-gestures",initialize:function(e){"function"==typeof e.lookup?e.lookup("service:-gestures"):(0,t["default"])(e).lookup("service:-gestures")}}}),define("dummy/recognizers",["exports"],function(e){e["default"]=function(){}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){this.route("taps")}),e["default"]=r}),define("dummy/routes/taps",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/services/-gestures",["exports","ember","dummy/config/environment","ember-gestures/services/-gestures"],function(e,t,n,r){var a=t["default"].merge({},{useCapture:!1});a=t["default"].merge(a,n["default"].gestures),e["default"]=r["default"].extend({useCapture:a.useCapture})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.2.2",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","application-template");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("h1"),a=e.createTextNode("ember-gestures dummy app");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[0]),3,3),r},statements:[["content","outlet",["loc",[null,[3,2],[3,12]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/recognizes-single-and-double-tap",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.2",loc:{source:null,start:{line:3,column:0},end:{line:5,column:0}},moduleName:"dummy/templates/components/recognizes-single-and-double-tap.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("I saw a single-tap.\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.2",loc:{source:null,start:{line:7,column:0},end:{line:9,column:0}},moduleName:"dummy/templates/components/recognizes-single-and-double-tap.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("I saw a double-tap.\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.2.2",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"dummy/templates/components/recognizes-single-and-double-tap.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Tap on me once or twice.\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(t,1,1,n),r[1]=e.createMorphAt(t,3,3,n),e.insertBoundary(t,null),r},statements:[["block","if",[["get","sawSingle",["loc",[null,[3,6],[3,15]]]]],[],0,null,["loc",[null,[3,0],[5,7]]]],["block","if",[["get","sawDouble",["loc",[null,[7,6],[7,15]]]]],[],1,null,["loc",[null,[7,0],[9,7]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.2",loc:{source:null,start:{line:3,column:6},end:{line:3,column:29}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("taps");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.2.2",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Demos index");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("ol"),r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("li"),a=e.createComment("");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[2,1]),0,0),r},statements:[["block","link-to",["taps"],[],0,null,["loc",[null,[3,6],[3,41]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/taps",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.2",loc:{source:null,start:{line:1,column:5},end:{line:1,column:38}},moduleName:"dummy/templates/taps.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("back to index");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.2.2",loc:{source:null,start:{line:1,column:0},end:{line:7,column:0}},moduleName:"dummy/templates/taps.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div"),r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),r=e.createTextNode("Taps tests");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(3);return r[0]=e.createMorphAt(e.childAt(t,[0]),0,0),r[1]=e.createMorphAt(t,4,4,n),r[2]=e.createMorphAt(t,6,6,n),r},statements:[["block","link-to",["index"],[],0,null,["loc",[null,[1,5],[1,50]]]],["content","recognizes-single-and-double-tap",["loc",[null,[4,0],[4,36]]]],["content","outlet",["loc",[null,[6,0],[6,10]]]]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(o){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-gestures",version:"0.4.1+2f3b6fb6"});