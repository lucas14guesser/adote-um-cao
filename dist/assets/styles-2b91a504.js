function cr(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function ur(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kt={exports:{}},$e={},_t={exports:{}},d={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=Symbol.for("react.element"),pr=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),fr=Symbol.for("react.strict_mode"),dr=Symbol.for("react.profiler"),hr=Symbol.for("react.provider"),mr=Symbol.for("react.context"),gr=Symbol.for("react.forward_ref"),yr=Symbol.for("react.suspense"),xr=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),ct=Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=ct&&e[ct]||e["@@iterator"],typeof e=="function"?e:null)}var Ct={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rt=Object.assign,$t={};function Q(e,t,r){this.props=e,this.context=t,this.refs=$t,this.updater=r||Ct}Q.prototype.isReactComponent={};Q.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Q.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Et(){}Et.prototype=Q.prototype;function Je(e,t,r){this.props=e,this.context=t,this.refs=$t,this.updater=r||Ct}var Ze=Je.prototype=new Et;Ze.constructor=Je;Rt(Ze,Q.prototype);Ze.isPureReactComponent=!0;var ut=Array.isArray,It=Object.prototype.hasOwnProperty,Qe={current:null},At={key:!0,ref:!0,__self:!0,__source:!0};function Pt(e,t,r){var n,o={},i=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)It.call(t,n)&&!At.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)o[n]===void 0&&(o[n]=c[n]);return{$$typeof:ce,type:e,key:i,ref:a,props:o,_owner:Qe.current}}function wr(e,t){return{$$typeof:ce,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function et(e){return typeof e=="object"&&e!==null&&e.$$typeof===ce}function Sr(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var pt=/\/+/g;function ze(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sr(""+e.key):t.toString(36)}function xe(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ce:case pr:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+ze(a,0):n,ut(o)?(r="",e!=null&&(r=e.replace(pt,"$&/")+"/"),xe(o,t,r,"",function(u){return u})):o!=null&&(et(o)&&(o=wr(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(pt,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",ut(e))for(var c=0;c<e.length;c++){i=e[c];var s=n+ze(i,c);a+=xe(i,t,r,s,o)}else if(s=br(e),typeof s=="function")for(e=s.call(e),c=0;!(i=e.next()).done;)i=i.value,s=n+ze(i,c++),a+=xe(i,t,r,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ge(e,t,r){if(e==null)return e;var n=[],o=0;return xe(e,n,"","",function(i){return t.call(r,i,o++)}),n}function kr(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P={current:null},ve={transition:null},_r={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:ve,ReactCurrentOwner:Qe};d.Children={map:ge,forEach:function(e,t,r){ge(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ge(e,function(){t++}),t},toArray:function(e){return ge(e,function(t){return t})||[]},only:function(e){if(!et(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};d.Component=Q;d.Fragment=lr;d.Profiler=dr;d.PureComponent=Je;d.StrictMode=fr;d.Suspense=yr;d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_r;d.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Rt({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Qe.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)It.call(t,s)&&!At.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&c!==void 0?c[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){c=Array(s);for(var u=0;u<s;u++)c[u]=arguments[u+2];n.children=c}return{$$typeof:ce,type:e.type,key:o,ref:i,props:n,_owner:a}};d.createContext=function(e){return e={$$typeof:mr,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hr,_context:e},e.Consumer=e};d.createElement=Pt;d.createFactory=function(e){var t=Pt.bind(null,e);return t.type=e,t};d.createRef=function(){return{current:null}};d.forwardRef=function(e){return{$$typeof:gr,render:e}};d.isValidElement=et;d.lazy=function(e){return{$$typeof:vr,_payload:{_status:-1,_result:e},_init:kr}};d.memo=function(e,t){return{$$typeof:xr,type:e,compare:t===void 0?null:t}};d.startTransition=function(e){var t=ve.transition;ve.transition={};try{e()}finally{ve.transition=t}};d.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};d.useCallback=function(e,t){return P.current.useCallback(e,t)};d.useContext=function(e){return P.current.useContext(e)};d.useDebugValue=function(){};d.useDeferredValue=function(e){return P.current.useDeferredValue(e)};d.useEffect=function(e,t){return P.current.useEffect(e,t)};d.useId=function(){return P.current.useId()};d.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)};d.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)};d.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)};d.useMemo=function(e,t){return P.current.useMemo(e,t)};d.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)};d.useRef=function(e){return P.current.useRef(e)};d.useState=function(e){return P.current.useState(e)};d.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)};d.useTransition=function(){return P.current.useTransition()};d.version="18.2.0";_t.exports=d;var ue=_t.exports;const z=ur(ue),Tn=cr({__proto__:null,default:z},[ue]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=ue,Rr=Symbol.for("react.element"),$r=Symbol.for("react.fragment"),Er=Object.prototype.hasOwnProperty,Ir=Cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ar={key:!0,ref:!0,__self:!0,__source:!0};function Ot(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Er.call(t,n)&&!Ar.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Rr,type:e,key:i,ref:a,props:o,_owner:Ir.current}}$e.Fragment=$r;$e.jsx=Ot;$e.jsxs=Ot;kt.exports=$e;var jn=kt.exports,A=function(){return A=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},A.apply(this,arguments)};function ae(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var S="-ms-",ie="-moz-",x="-webkit-",Dt="comm",Ee="rule",tt="decl",Pr="@import",Tt="@keyframes",Or="@layer",Dr=Math.abs,rt=String.fromCharCode,qe=Object.assign;function Tr(e,t){return I(e,0)^45?(((t<<2^I(e,0))<<2^I(e,1))<<2^I(e,2))<<2^I(e,3):0}function jt(e){return e.trim()}function F(e,t){return(e=t.exec(e))?e[0]:e}function p(e,t,r){return e.replace(t,r)}function be(e,t){return e.indexOf(t)}function I(e,t){return e.charCodeAt(t)|0}function V(e,t,r){return e.slice(t,r)}function j(e){return e.length}function zt(e){return e.length}function oe(e,t){return t.push(e),e}function jr(e,t){return e.map(t).join("")}function lt(e,t){return e.filter(function(r){return!F(r,t)})}var Ie=1,K=1,Ft=0,D=0,$=0,ee="";function Ae(e,t,r,n,o,i,a,c){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Ie,column:K,length:a,return:"",siblings:c}}function B(e,t){return qe(Ae("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Y(e){for(;e.root;)e=B(e.root,{children:[e]});oe(e,e.siblings)}function zr(){return $}function Fr(){return $=D>0?I(ee,--D):0,K--,$===10&&(K=1,Ie--),$}function T(){return $=D<Ft?I(ee,D++):0,K++,$===10&&(K=1,Ie++),$}function U(){return I(ee,D)}function we(){return D}function Pe(e,t){return V(ee,e,t)}function Ge(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nr(e){return Ie=K=1,Ft=j(ee=e),D=0,[]}function Lr(e){return ee="",e}function Fe(e){return jt(Pe(D-1,He(e===91?e+2:e===40?e+1:e)))}function Mr(e){for(;($=U())&&$<33;)T();return Ge(e)>2||Ge($)>3?"":" "}function Br(e,t){for(;--t&&T()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return Pe(e,we()+(t<6&&U()==32&&T()==32))}function He(e){for(;T();)switch($){case e:return D;case 34:case 39:e!==34&&e!==39&&He($);break;case 40:e===41&&He(e);break;case 92:T();break}return D}function qr(e,t){for(;T()&&e+$!==47+10;)if(e+$===42+42&&U()===47)break;return"/*"+Pe(t,D-1)+"*"+rt(e===47?e:T())}function Gr(e){for(;!Ge(U());)T();return Pe(e,D)}function Hr(e){return Lr(Se("",null,null,null,[""],e=Nr(e),0,[0],e))}function Se(e,t,r,n,o,i,a,c,s){for(var u=0,f=0,h=a,v=0,m=0,k=0,C=1,O=1,R=1,g=0,b="",E=o,w=i,_=n,y=b;O;)switch(k=g,g=T()){case 40:if(k!=108&&I(y,h-1)==58){be(y+=p(Fe(g),"&","&\f"),"&\f")!=-1&&(R=-1);break}case 34:case 39:case 91:y+=Fe(g);break;case 9:case 10:case 13:case 32:y+=Mr(k);break;case 92:y+=Br(we()-1,7);continue;case 47:switch(U()){case 42:case 47:oe(Ur(qr(T(),we()),t,r,s),s);break;default:y+="/"}break;case 123*C:c[u++]=j(y)*R;case 125*C:case 59:case 0:switch(g){case 0:case 125:O=0;case 59+f:R==-1&&(y=p(y,/\f/g,"")),m>0&&j(y)-h&&oe(m>32?dt(y+";",n,r,h-1,s):dt(p(y," ","")+";",n,r,h-2,s),s);break;case 59:y+=";";default:if(oe(_=ft(y,t,r,u,f,o,c,b,E=[],w=[],h,i),i),g===123)if(f===0)Se(y,t,_,_,E,i,h,c,w);else switch(v===99&&I(y,3)===110?100:v){case 100:case 108:case 109:case 115:Se(e,_,_,n&&oe(ft(e,_,_,0,0,o,c,b,o,E=[],h,w),w),o,w,h,c,n?E:w);break;default:Se(y,_,_,_,[""],w,0,c,w)}}u=f=m=0,C=R=1,b=y="",h=a;break;case 58:h=1+j(y),m=k;default:if(C<1){if(g==123)--C;else if(g==125&&C++==0&&Fr()==125)continue}switch(y+=rt(g),g*C){case 38:R=f>0?1:(y+="\f",-1);break;case 44:c[u++]=(j(y)-1)*R,R=1;break;case 64:U()===45&&(y+=Fe(T())),v=U(),f=h=j(b=y+=Gr(we())),g++;break;case 45:k===45&&j(y)==2&&(C=0)}}return i}function ft(e,t,r,n,o,i,a,c,s,u,f,h){for(var v=o-1,m=o===0?i:[""],k=zt(m),C=0,O=0,R=0;C<n;++C)for(var g=0,b=V(e,v+1,v=Dr(O=a[C])),E=e;g<k;++g)(E=jt(O>0?m[g]+" "+b:p(b,/&\f/g,m[g])))&&(s[R++]=E);return Ae(e,t,r,o===0?Ee:c,s,u,f,h)}function Ur(e,t,r,n){return Ae(e,t,r,Dt,rt(zr()),V(e,2,-2),0,n)}function dt(e,t,r,n,o){return Ae(e,t,r,tt,V(e,0,n),V(e,n+1,-1),n,o)}function Nt(e,t,r){switch(Tr(e,t)){case 5103:return x+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return x+e+e;case 4789:return ie+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+ie+e+S+e+e;case 5936:switch(I(e,t+11)){case 114:return x+e+S+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return x+e+S+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return x+e+S+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return x+e+S+e+e;case 6165:return x+e+S+"flex-"+e+e;case 5187:return x+e+p(e,/(\w+).+(:[^]+)/,x+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return x+e+S+"flex-item-"+p(e,/flex-|-self/g,"")+(F(e,/flex-|baseline/)?"":S+"grid-row-"+p(e,/flex-|-self/g,""))+e;case 4675:return x+e+S+"flex-line-pack"+p(e,/align-content|flex-|-self/g,"")+e;case 5548:return x+e+S+p(e,"shrink","negative")+e;case 5292:return x+e+S+p(e,"basis","preferred-size")+e;case 6060:return x+"box-"+p(e,"-grow","")+x+e+S+p(e,"grow","positive")+e;case 4554:return x+p(e,/([^-])(transform)/g,"$1"+x+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,x+"$1"),/(image-set)/,x+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,x+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+x+e+e;case 4200:if(!F(e,/flex-|baseline/))return S+"grid-column-align"+V(e,t)+e;break;case 2592:case 3360:return S+p(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,F(n.props,/grid-\w+-end/)})?~be(e+(r=r[t].value),"span")?e:S+p(e,"-start","")+e+S+"grid-row-span:"+(~be(r,"span")?F(r,/\d+/):+F(r,/\d+/)-+F(e,/\d+/))+";":S+p(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return F(n.props,/grid-\w+-start/)})?e:S+p(p(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,x+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(e)-1-t>6)switch(I(e,t+1)){case 109:if(I(e,t+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+x+"$2-$3$1"+ie+(I(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~be(e,"stretch")?Nt(p(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return p(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,c,s,u){return S+o+":"+i+u+(a?S+o+"-span:"+(c?s:+s-+i)+u:"")+e});case 4949:if(I(e,t+6)===121)return p(e,":",":"+x)+e;break;case 6444:switch(I(e,I(e,14)===45?18:11)){case 120:return p(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+x+(I(e,14)===45?"inline-":"")+"box$3$1"+x+"$2$3$1"+S+"$2box$3")+e;case 100:return p(e,":",":"+S)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return p(e,"scroll-","scroll-snap-")+e}return e}function _e(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Yr(e,t,r,n){switch(e.type){case Or:if(e.children.length)break;case Pr:case tt:return e.return=e.return||e.value;case Dt:return"";case Tt:return e.return=e.value+"{"+_e(e.children,n)+"}";case Ee:if(!j(e.value=e.props.join(",")))return""}return j(r=_e(e.children,n))?e.return=e.value+"{"+r+"}":""}function Wr(e){var t=zt(e);return function(r,n,o,i){for(var a="",c=0;c<t;c++)a+=e[c](r,n,o,i)||"";return a}}function Vr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case tt:e.return=Nt(e.value,e.length,r);return;case Tt:return _e([B(e,{value:p(e.value,"@","@"+x)})],n);case Ee:if(e.length)return jr(r=e.props,function(o){switch(F(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y(B(e,{props:[p(o,/:(read-\w+)/,":"+ie+"$1")]})),Y(B(e,{props:[o]})),qe(e,{props:lt(r,n)});break;case"::placeholder":Y(B(e,{props:[p(o,/:(plac\w+)/,":"+x+"input-$1")]})),Y(B(e,{props:[p(o,/:(plac\w+)/,":"+ie+"$1")]})),Y(B(e,{props:[p(o,/:(plac\w+)/,S+"input-$1")]})),Y(B(e,{props:[o]})),qe(e,{props:lt(r,n)});break}return""})}}var Xr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},X=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",nt=typeof window<"u"&&"HTMLElement"in window,Jr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Zr={},Oe=Object.freeze([]),J=Object.freeze({});function Lt(e,t,r){return r===void 0&&(r=J),e.theme!==r.theme&&e.theme||t||r.theme}var Mt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,en=/(^-|-$)/g;function ht(e){return e.replace(Qr,"-").replace(en,"")}var tn=/(a)(d)/gi,mt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ue(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=mt(t%52)+r;return(mt(t%52)+r).replace(tn,"$1-$2")}var Ne,W=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Bt=function(e){return W(5381,e)};function qt(e){return Ue(Bt(e)>>>0)}function rn(e){return e.displayName||e.name||"Component"}function Le(e){return typeof e=="string"&&!0}var Gt=typeof Symbol=="function"&&Symbol.for,Ht=Gt?Symbol.for("react.memo"):60115,nn=Gt?Symbol.for("react.forward_ref"):60112,on={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},an={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ut={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sn=((Ne={})[nn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ne[Ht]=Ut,Ne);function gt(e){return("type"in(t=e)&&t.type.$$typeof)===Ht?Ut:"$$typeof"in e?sn[e.$$typeof]:on;var t}var cn=Object.defineProperty,un=Object.getOwnPropertyNames,yt=Object.getOwnPropertySymbols,pn=Object.getOwnPropertyDescriptor,ln=Object.getPrototypeOf,xt=Object.prototype;function Yt(e,t,r){if(typeof t!="string"){if(xt){var n=ln(t);n&&n!==xt&&Yt(e,n,r)}var o=un(t);yt&&(o=o.concat(yt(t)));for(var i=gt(e),a=gt(t),c=0;c<o.length;++c){var s=o[c];if(!(s in an||r&&r[s]||a&&s in a||i&&s in i)){var u=pn(t,s);try{cn(e,s,u)}catch{}}}}return e}function Z(e){return typeof e=="function"}function ot(e){return typeof e=="object"&&"styledComponentId"in e}function H(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ye(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function se(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function We(e,t,r){if(r===void 0&&(r=!1),!r&&!se(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=We(e[n],t[n]);else if(se(t))for(var n in t)e[n]=We(e[n],t[n]);return e}function it(e,t){Object.defineProperty(e,"toString",{value:t})}function pe(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var fn=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw pe(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var c=this.indexOfGroup(t+1),s=(a=0,r.length);a<s;a++)this.tag.insertRule(c,r[a])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),ke=new Map,Ce=new Map,Me=1,ye=function(e){if(ke.has(e))return ke.get(e);for(;Ce.has(Me);)Me++;var t=Me++;return ke.set(e,t),Ce.set(t,e),t},dn=function(e,t){ke.set(e,t),Ce.set(t,e)},hn="style[".concat(X,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),mn=new RegExp("^".concat(X,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gn=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},yn=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),o=[],i=0,a=n.length;i<a;i++){var c=n[i].trim();if(c){var s=c.match(mn);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(dn(f,u),gn(e,f,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(c)}}};function xn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(c){var s=Array.from(c.querySelectorAll("style[".concat(X,"]")));return s[s.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(X,"active"),n.setAttribute("data-styled-version","6.0.8");var a=xn();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},vn=function(){function e(t){this.element=Wt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw pe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),bn=function(){function e(t){this.element=Wt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wn=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),vt=nt,Sn={isServer:!nt,useCSSOMInjection:!Jr},Re=function(){function e(t,r,n){t===void 0&&(t=J),r===void 0&&(r={});var o=this;this.options=A(A({},Sn),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&nt&&vt&&(vt=!1,function(i){for(var a=document.querySelectorAll(hn),c=0,s=a.length;c<s;c++){var u=a[c];u&&u.getAttribute(X)!=="active"&&(yn(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),it(this,function(){return function(i){for(var a=i.getTag(),c=a.length,s="",u=function(h){var v=function(R){return Ce.get(R)}(h);if(v===void 0)return"continue";var m=i.names.get(v),k=a.getGroup(h);if(m===void 0||k.length===0)return"continue";var C="".concat(X,".g").concat(h,'[id="').concat(v,'"]'),O="";m!==void 0&&m.forEach(function(R){R.length>0&&(O+="".concat(R,","))}),s+="".concat(k).concat(C,'{content:"').concat(O,'"}').concat(`/*!sc*/
`)},f=0;f<c;f++)u(f);return s}(o)})}return e.registerId=function(t){return ye(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(A(A({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new wn(o):n?new vn(o):new bn(o)}(this.options),new fn(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ye(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ye(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ye(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),kn=/&/g,_n=/^\s*\/\/.*$/gm;function Vt(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Vt(r.children,t)),r})}function Cn(e){var t,r,n,o=e===void 0?J:e,i=o.options,a=i===void 0?J:i,c=o.plugins,s=c===void 0?Oe:c,u=function(v,m,k){return k===r||k.startsWith(r)&&k.endsWith(r)&&k.replaceAll(r,"").length>0?".".concat(t):v},f=s.slice();f.push(function(v){v.type===Ee&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(kn,r).replace(n,u))}),a.prefix&&f.push(Kr),f.push(Yr);var h=function(v,m,k,C){m===void 0&&(m=""),k===void 0&&(k=""),C===void 0&&(C="&"),t=C,r=m,n=new RegExp("\\".concat(r,"\\b"),"g");var O=v.replace(_n,""),R=Hr(k||m?"".concat(k," ").concat(m," { ").concat(O," }"):O);a.namespace&&(R=Vt(R,a.namespace));var g=[];return _e(R,Wr(f.concat(Vr(function(b){return g.push(b)})))),g};return h.hash=s.length?s.reduce(function(v,m){return m.name||pe(15),W(v,m.name)},5381).toString():"",h}var Rn=new Re,Ve=Cn(),Kt=z.createContext({shouldForwardProp:void 0,styleSheet:Rn,stylis:Ve});Kt.Consumer;z.createContext(void 0);function Ke(){return ue.useContext(Kt)}var $n=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Ve);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,it(this,function(){throw pe(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ve),this.name+t.hash},e}(),En=function(e){return e>="A"&&e<="Z"};function bt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;En(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Xt=function(e){return e==null||e===!1||e===""},Jt=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Xt(i)&&(Array.isArray(i)&&i.isCss||Z(i)?n.push("".concat(bt(o),":"),i,";"):se(i)?n.push.apply(n,ae(ae(["".concat(o," {")],Jt(i),!1),["}"],!1)):n.push("".concat(bt(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Xr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function q(e,t,r,n){if(Xt(e))return[];if(ot(e))return[".".concat(e.styledComponentId)];if(Z(e)){if(!Z(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return q(o,t,r,n)}var i;return e instanceof $n?r?(e.inject(r,n),[e.getName(n)]):[e]:se(e)?Jt(e):Array.isArray(e)?Array.prototype.concat.apply(Oe,e.map(function(a){return q(a,t,r,n)})):[e.toString()]}function Zt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Z(r)&&!ot(r))return!1}return!0}var In=Bt("6.0.8"),An=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Zt(t),this.componentId=r,this.baseHash=W(In,r),this.baseStyle=n,Re.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=H(o,this.staticRulesId);else{var i=Ye(q(this.rules,t,r,n)),a=Ue(W(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var c=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,c)}o=H(o,a),this.staticRulesId=a}else{for(var s=W(this.baseHash,n.hash),u="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")u+=h;else if(h){var v=Ye(q(h,t,r,n));s=W(s,v+f),u+=v}}if(u){var m=Ue(s>>>0);r.hasNameForId(this.componentId,m)||r.insertRules(this.componentId,m,n(u,".".concat(m),void 0,this.componentId)),o=H(o,m)}}return o},e}(),at=z.createContext(void 0);at.Consumer;var Be={};function Pn(e,t,r){var n=ot(e),o=e,i=!Le(e),a=t.attrs,c=a===void 0?Oe:a,s=t.componentId,u=s===void 0?function(b,E){var w=typeof b!="string"?"sc":ht(b);Be[w]=(Be[w]||0)+1;var _="".concat(w,"-").concat(qt("6.0.8"+w+Be[w]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):s,f=t.displayName;f===void 0&&function(b){return Le(b)?"styled.".concat(b):"Styled(".concat(rn(b),")")}(e);var h=t.displayName&&t.componentId?"".concat(ht(t.displayName),"-").concat(t.componentId):t.componentId||u,v=n&&o.attrs?o.attrs.concat(c).filter(Boolean):c,m=t.shouldForwardProp;if(n&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;m=function(b,E){return k(b,E)&&C(b,E)}}else m=k}var O=new An(r,h,n?o.componentStyle:void 0);function R(b,E){return function(w,_,y){var le=w.attrs,tr=w.componentStyle,rr=w.defaultProps,nr=w.foldedComponentIds,or=w.styledComponentId,ir=w.target,ar=z.useContext(at),sr=Ke(),De=w.shouldForwardProp||sr.shouldForwardProp,N=function(de,re,he){for(var ne,G=A(A({},re),{className:void 0,theme:he}),je=0;je<de.length;je+=1){var me=Z(ne=de[je])?ne(G):ne;for(var M in me)G[M]=M==="className"?H(G[M],me[M]):M==="style"?A(A({},G[M]),me[M]):me[M]}return re.className&&(G.className=H(G.className,re.className)),G}(le,_,Lt(_,ar,rr)||J),fe=N.as||ir,te={};for(var L in N)N[L]===void 0||L[0]==="$"||L==="as"||L==="theme"||(L==="forwardedAs"?te.as=N.forwardedAs:De&&!De(L,fe)||(te[L]=N[L]));var st=function(de,re){var he=Ke(),ne=de.generateAndInjectStyles(re,he.styleSheet,he.stylis);return ne}(tr,N),Te=H(nr,or);return st&&(Te+=" "+st),N.className&&(Te+=" "+N.className),te[Le(fe)&&!Mt.has(fe)?"class":"className"]=Te,te.ref=y,ue.createElement(fe,te)}(g,b,E)}var g=z.forwardRef(R);return g.attrs=v,g.componentStyle=O,g.shouldForwardProp=m,g.foldedComponentIds=n?H(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=h,g.target=n?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=n?function(E){for(var w=[],_=1;_<arguments.length;_++)w[_-1]=arguments[_];for(var y=0,le=w;y<le.length;y++)We(E,le[y],!0);return E}({},o.defaultProps,b):b}}),it(g,function(){return".".concat(g.styledComponentId)}),i&&Yt(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function wt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var St=function(e){return Object.assign(e,{isCss:!0})};function Qt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Z(e)||se(e)){var n=e;return St(q(wt(Oe,ae([n],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?q(o):St(q(wt(o,t)))}function Xe(e,t,r){if(r===void 0&&(r=J),!t)throw pe(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,Qt.apply(void 0,ae([o],i,!1)))};return n.attrs=function(o){return Xe(e,t,A(A({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Xe(e,t,A(A({},r),o))},n}var er=function(e){return Xe(Pn,e)},l=er;Mt.forEach(function(e){l[e]=er(e)});var On=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Zt(t),Re.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Ye(q(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&Re.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Dn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Qt.apply(void 0,ae([e],t,!1)),o="sc-global-".concat(qt(JSON.stringify(n))),i=new On(n,o),a=function(s){var u=Ke(),f=z.useContext(at),h=z.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&c(h,s,u.styleSheet,f,u.stylis),z.useLayoutEffect(function(){if(!u.styleSheet.server)return c(h,s,u.styleSheet,f,u.stylis),function(){return i.removeStyles(h,u.styleSheet)}},[h,s,u.styleSheet,f,u.stylis]),null};function c(s,u,f,h,v){if(i.isStatic)i.renderStyles(s,Zr,f,v);else{var m=A(A({},u),{theme:Lt(u,h,a.defaultProps)});i.renderStyles(s,m,f,v)}}return z.memo(a)}const zn=Dn`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
    font-family: 'Martian Mono', monospace;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`,Fn=l.h1`
font-size: 32px;
text-transform: uppercase;
color: #3498DB;
font-weight: 800;
margin-top: 20px;
@media (max-width: 528px) {
	margin-top: 5px;
	font-size: 12px;
	text-align: center;
}
`,Nn=l.h2`
font-size: 20px;
text-transform: uppercase;
color: #3498DB;
@media (max-width: 528px) {
	font-size: 10px;
	text-align: center;
	margin-bottom: 5px;
}
`,Ln=l.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 10rem;
margin-top: 10rem;
margin-bottom: 10rem;
`,Mn=l.header`
display: flex;
flex-direction: row;
font-size: 16px;
padding: 30px 0;
width: 100%;
justify-content: flex-start;
align-items: center;
gap: 25px;
border-bottom: 10px solid #3498DB;
@media (max-width: 528px) {
	padding: 1px 0;
	font-size: 10px;
	justify-content: space-between;
	gap: 5px;
}
`,Bn=l.ul`
display: flex;
margin-left: 15px;
align-items: center;
@media (max-width: 528px) {
	margin-left: 1px;
}
`,qn=l.img`
width: 110px;
margin-left: 110px;
@media (max-width: 528px) {
	width: 50px;
	margin-left: 1px;
}
`,Gn=l.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 70vw;
gap: 15px;
@media (max-width: 528px) {
	margin-left: 30px;
}
`,Hn=l.div`
display: flex;
justify-content: flex-end;
gap: 50px;
@media (max-width: 528px) {
	gap: 0;
}
`,Un=l.ul`
display: flex;
justify-content: flex-end;
flex-direction: row;
flex-wrap: wrap;
gap: 13px;
@media (max-width: 528px) {
	gap: 5px;
}
`,Yn=l.li`
padding: 0;
`,Wn=l.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 7px;
@media (max-width: 528px) {
	width: 25%;
	gap: 1px;
}

.menu {
	color: #3498DB;
	cursor: pointer;
	font-size: 50px;
	width: 50px;
	height: 50px;
	@media (max-width: 528px) {
		font-size: 25px;
		width: 25px;
		height: 25px;
	}
}
.menu__link {
	padding: 17px;
	color: #FFF;
	transition: background 1s ease;
	font-weight: normal;
	@media (max-width: 528px) {
		padding: 10px;
	}
	&:hover {
		background: #154360;
		
	}
	@media (max-width: 528px) {
		&:hover {
			transform: none;
		}
	}
}

`,Vn=l.a`
color: #3498DB;
cursor: pointer;
font-size: 40px;
@media (max-width: 528px) {
	font-size: 17px;
}
`,Kn=l.div`
position: absolute;
background: #3498DB;
top: 19.2%;
right: 0;
width: 25vw;
text-align: center;
@media (max-width: 528px) {
	top: 9.6%;
}
`,Xn=l.ul`
display: flex;
flex-direction: column;
flex-wrap: wrap;
color: #FFF;
text-transform: uppercase;
@media (max-width: 528px) {
	font-size: 6px;
}
`,Jn=l.li`
cursor: pointer;
`,Zn=l.div`
width: 100%;
`,Qn=l.img`
width: 100%;
height: 64vh;
@media (max-width: 528px) {
	height: 25vh;
	margin-bottom: 4rem;
}
`,eo=l.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`,to=l.div`
display: flex;
justify-content: center;
width: 50%;
margin: 30px 30px 70px 30px;
@media (max-width: 528px) {
	margin: 30px 30px 110px 30px;
}
`,ro=l.p`
font-size: 16px;
color: #3498DB;
font-family: 'Roboto', sans-serif;
@media (max-width: 528px) {
	font-size: 12px;
	text-align: center;
}

.link-texto-entrada {
	color: #3498DB;
	text-decoration: underline;
	font-weight: 700;
}
`,no=l.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 0;
width: 100%;
background: #154360;
`,oo=l.img`
width: 70px;
@media (max-width: 528px) {
	width: 35px;
}
`,io=l.p`
font-size: 16px;
color: #3498DB;
@media (max-width: 528px) {
	font-size: 9px;
}
`,ao=l.div`
background: #154360;
padding: 4rem;
margin: 0 10rem;
@media (max-width: 528px) {
	margin: 0;
}
`,so=l.ol`
display: flex;
flex-direction: column;
gap: 1rem;
padding: 2rem 0 2rem 0;
color: #FFF;
font-size: 20px;
@media (max-width: 528px) {
	gap:1rem;
	font-size: 12px;
}
`,co=l.li`
	display: flex;
	padding-left: 2.5rem;
	align-items: center;
	margin-bottom: 1rem;
	@media (max-width: 528px) {
		padding-left: 2rem;
	}
`,uo=l.img`
width: 30px;
height: 30px;
margin-right: 1rem;
`,po=l.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
gap: 30px;
margin: 7rem 30rem;
background: #154360;
padding: 1.2rem;
@media (max-width: 528px) {
	width: 100%;
	margin: 6.5rem 0;
	padding: 1.2rem 0;

}
`,lo=l.div`
position: relative;
width: 250px;
@media (max-width: 528px) {
	width: 200px;
}
.input-adotar {
	padding: 10px;
	border: 1px solid #FFF;
	background: #FFF;
	border-radius: 5px;
	outline: none;
	color: #154360;
	font-size: 1rem;
	font-family: 'Martian Mono', monospace;
	transition: 0.5s;
		&:valid ~ span, &:focus ~ span {
			color: #3498DB;
			transform: translateX(10px) translateY(-7px);
			font-size: 1rem;
			padding: 0 10px;
			border-left: 1px solid #3498DB;
			border-right: 1px solid #3498DB;
			letter-spacing: 0.2rem;
			background: #3498DB;
			color: #FFF;
			border-radius: 2px;
		}
		&:valid, &:focus {
			border: 1px solid #3498DB;
		}
		&::placeholder {
			color: transparent;
		}
	
		@media (max-width: 528px) {
			&::placeholder {
			  color: #000;
			}
		  }
	}
`,fo=l.span`
position: absolute;
left: 0;
padding: 12px;
pointer-events: none;
font-size: 1rem;
color: #154360;
text-transform: uppercase;
transition: 0.5s;
@media (max-width: 528px) {
	display: none;
}
`,ho=l.button`
padding: 10px;
width: 246px;
border-radius: 5px;
border: 1px solid #154360;
background: #3498DB;
cursor: pointer;
font-size: 1rem;
font-family: 'Martian Mono', monospace;
color: #FFF;
transition: 0.3s;
@media (max-width: 528px) {
	width: 222px;
}
	&:hover {
		border-color: #FFF;
	}
`,mo=l.div`
display: flex;
justify-content: center;
text-align: center;
flex-direction: column;
width: 50%;
`,go=l.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-bottom: 2rem;
@media (max-width: 528px) {
	gap: 10px;
	margin-bottom: 1rem;
}
`,yo=l.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-bottom: 2rem;
@media (max-width: 528px) {
	margin-bottom: 1rem;
}
`,xo=l.div`
border: 10px solid #3498DB;
`,vo=l.img`
width: 100%;
height: 100%;
`,bo=l.img`
margin: top: 2rem;
width: 100px;
`;export{Ln as A,Qn as B,Gn as C,ao as D,ro as E,mo as F,go as G,yo as H,qn as I,xo as J,vo as K,Un as L,Kn as M,Mn as N,Tn as R,Nn as S,Fn as T,z as a,Hn as b,Yn as c,Vn as d,Xn as e,Jn as f,Bn as g,Wn as h,eo as i,jn as j,to as k,Zn as l,oo as m,io as n,no as o,zn as p,ur as q,ue as r,lo as s,fo as t,ho as u,bo as v,po as w,so as x,co as y,uo as z};
