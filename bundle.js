(()=>{"use strict";var e,n,t,r,o,_={},l=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(e,n){for(var t in n)e[t]=n[t];return e}function a(e){var n=e.parentNode;n&&n.removeChild(e)}function c(e,n,t){var r,o,_,l=arguments,i={};for(_ in n)"key"==_?r=n[_]:"ref"==_?o=n[_]:i[_]=n[_];if(arguments.length>3)for(t=[t],_=3;_<arguments.length;_++)t.push(l[_]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===i[_]&&(i[_]=e.defaultProps[_]);return s(e,i,r,o,null)}function s(n,t,r,o,_){var l={type:n,props:t,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++e.__v:_};return null!=e.vnode&&e.vnode(l),l}function f(e){return e.children}function p(e,n){this.props=e,this.context=n}function d(e,n){if(null==n)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?d(e):null}function h(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return h(e)}}function m(o){(!o.__d&&(o.__d=!0)&&n.push(o)&&!g.__r++||r!==e.debounceRendering)&&((r=e.debounceRendering)||t)(g)}function g(){for(var e;g.__r=n.length;)e=n.sort((function(e,n){return e.__v.__b-n.__v.__b})),n=[],e.some((function(e){var n,t,r,o,_,l;e.__d&&(_=(o=(n=e).__v).__e,(l=n.__P)&&(t=[],(r=u({},o)).__v=o.__v+1,w(l,o,r,n.__n,void 0!==l.ownerSVGElement,null!=o.__h?[_]:null,t,null==_?d(o):_,o.__h),U(t,o),o.__e!=_&&h(o)))}))}function b(e,n,t,r,o,i,u,c,p,h){var m,g,b,E,T,R,k,U=r&&r.__k||l,x=U.length;for(p==_&&(p=null!=u?u[0]:x?d(r,0):null),t.__k=[],m=0;m<n.length;m++)if(null!=(E=t.__k[m]=null==(E=n[m])||"boolean"==typeof E?null:"string"==typeof E||"number"==typeof E?s(null,E,null,null,E):Array.isArray(E)?s(f,{children:E},null,null,null):E.__b>0?s(E.type,E.props,E.key,null,E.__v):E)){if(E.__=t,E.__b=t.__b+1,null===(b=U[m])||b&&E.key==b.key&&E.type===b.type)U[m]=void 0;else for(g=0;g<x;g++){if((b=U[g])&&E.key==b.key&&E.type===b.type){U[g]=void 0;break}b=null}w(e,E,b=b||_,o,i,u,c,p,h),T=E.__e,(g=E.ref)&&b.ref!=g&&(k||(k=[]),b.ref&&k.push(b.ref,null,E),k.push(g,E.__c||T,E)),null!=T?(null==R&&(R=T),"function"==typeof E.type&&E.__k===b.__k?E.__d=p=v(E,p,e):p=y(e,E,b,U,u,T,p),h||"option"!==t.type?"function"==typeof t.type&&(t.__d=p):e.value=""):p&&b.__e==p&&p.parentNode!=e&&(p=d(b))}if(t.__e=R,null!=u&&"function"!=typeof t.type)for(m=u.length;m--;)null!=u[m]&&a(u[m]);for(m=x;m--;)null!=U[m]&&("function"==typeof t.type&&null!=U[m].__e&&U[m].__e==t.__d&&(t.__d=d(r,m+1)),L(U[m],U[m]));if(k)for(m=0;m<k.length;m++)A(k[m],k[++m],k[++m])}function v(e,n,t){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,"function"==typeof o.type?v(o,n,t):n=y(t,o,o,e.__k,null,o.__e,n));return n}function y(e,n,t,r,o,_,l){var i,u,a;if(void 0!==n.__d)i=n.__d,n.__d=void 0;else if(o==t||_!=l||null==_.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(_),i=null;else{for(u=l,a=0;(u=u.nextSibling)&&a<r.length;a+=2)if(u==_)break e;e.insertBefore(_,l),i=l}return void 0!==i?i:_.nextSibling}function E(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||i.test(n)?t:t+"px"}function T(e,n,t,r,o){var _,l,i;if(o&&"className"==n&&(n="class"),"style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||E(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||E(e.style,n,t[n])}else"o"===n[0]&&"n"===n[1]?(_=n!==(n=n.replace(/Capture$/,"")),(l=n.toLowerCase())in e&&(n=l),n=n.slice(2),e.l||(e.l={}),e.l[n+_]=t,i=_?k:R,t?r||e.addEventListener(n,i,_):e.removeEventListener(n,i,_)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&"download"!==n&&"href"!==n&&!o&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function R(n){this.l[n.type+!1](e.event?e.event(n):n)}function k(n){this.l[n.type+!0](e.event?e.event(n):n)}function w(n,t,r,o,_,l,i,a,c){var s,d,h,m,g,v,y,E,T,R,k,w=t.type;if(void 0!==t.constructor)return null;null!=r.__h&&(c=r.__h,a=t.__e=r.__e,t.__h=null,l=[a]),(s=e.__b)&&s(t);try{e:if("function"==typeof w){if(E=t.props,T=(s=w.contextType)&&o[s.__c],R=s?T?T.props.value:s.__:o,r.__c?y=(d=t.__c=r.__c).__=d.__E:("prototype"in w&&w.prototype.render?t.__c=d=new w(E,R):(t.__c=d=new p(E,R),d.constructor=w,d.render=S),T&&T.sub(d),d.props=E,d.state||(d.state={}),d.context=R,d.__n=o,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=w.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=u({},d.__s)),u(d.__s,w.getDerivedStateFromProps(E,d.__s))),m=d.props,g=d.state,h)null==w.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==w.getDerivedStateFromProps&&E!==m&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(E,R),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(E,d.__s,R)||t.__v===r.__v){d.props=E,d.state=d.__s,t.__v!==r.__v&&(d.__d=!1),d.__v=t,t.__e=r.__e,t.__k=r.__k,d.__h.length&&i.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(E,d.__s,R),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(m,g,v)}))}d.context=R,d.props=E,d.state=d.__s,(s=e.__r)&&s(t),d.__d=!1,d.__v=t,d.__P=n,s=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(o=u(u({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(m,g)),k=null!=s&&s.type===f&&null==s.key?s.props.children:s,b(n,Array.isArray(k)?k:[k],t,r,o,_,l,i,a,c),d.base=t.__e,t.__h=null,d.__h.length&&i.push(d),y&&(d.__E=d.__=null),d.__e=!1}else null==l&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=x(r.__e,t,r,o,_,l,i,c);(s=e.diffed)&&s(t)}catch(n){t.__v=null,(c||null!=l)&&(t.__e=a,t.__h=!!c,l[l.indexOf(a)]=null),e.__e(n,t,r)}}function U(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(n){e.__e(n,t.__v)}}))}function x(e,n,t,r,o,i,u,a){var c,s,f,p,d,h=t.props,m=n.props;if(o="svg"===n.type||o,null!=i)for(c=0;c<i.length;c++)if(null!=(s=i[c])&&((null===n.type?3===s.nodeType:s.localName===n.type)||e==s)){e=s,i[c]=null;break}if(null==e){if(null===n.type)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,m.is&&{is:m.is}),i=null,a=!1}if(null===n.type)h===m||a&&e.data===m||(e.data=m);else{if(null!=i&&(i=l.slice.call(e.childNodes)),f=(h=t.props||_).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!a){if(null!=i)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,r,o){var _;for(_ in t)"children"===_||"key"===_||_ in n||T(e,_,null,t[_],r);for(_ in n)o&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||t[_]===n[_]||T(e,_,n[_],t[_],r)})(e,m,h,o,a),p?n.__k=[]:(c=n.props.children,b(e,Array.isArray(c)?c:[c],n,t,r,"foreignObject"!==n.type&&o,i,u,_,a)),a||("value"in m&&void 0!==(c=m.value)&&(c!==e.value||"progress"===n.type&&!c)&&T(e,"value",c,h.value,!1),"checked"in m&&void 0!==(c=m.checked)&&c!==e.checked&&T(e,"checked",c,h.checked,!1))}return e}function A(n,t,r){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,r)}}function L(n,t,r){var o,_,l;if(e.unmount&&e.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||A(o,null,t)),r||"function"==typeof n.type||(r=null!=(_=n.__e)),n.__e=n.__d=void 0,null!=(o=n.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){e.__e(n,t)}o.base=o.__P=null}if(o=n.__k)for(l=0;l<o.length;l++)o[l]&&L(o[l],t,r);null!=_&&a(_)}function S(e,n,t){return this.constructor(e,t)}e={__e:function(e,n){for(var t,r,o,_=n.__h;n=n.__;)if((t=n.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(e)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),o=t.__d),o)return n.__h=_,t.__E=t}catch(n){e=n}throw e},__v:0},p.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(u({},t),this.props)),e&&u(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),m(this))},p.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},p.prototype.render=f,n=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,o=_;var D,P,F,C=0,N=[],I=e.__b,M=e.__r,B=e.diffed,X=e.__c,H=e.unmount;function O(n,t){e.__h&&e.__h(P,n,C||t),C=0;var r=P.__H||(P.__H={__:[],__h:[]});return n>=r.__.length&&r.__.push({}),r.__[n]}function j(e){return C=1,function(e,n,t){var r=O(D++,2);return r.t=e,r.__c||(r.__=[Y(void 0,n),function(e){var n=r.t(r.__[0],e);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=P),r.__}(Y,e)}function G(){N.forEach((function(n){if(n.__P)try{n.__H.__h.forEach(V),n.__H.__h.forEach(q),n.__H.__h=[]}catch(t){n.__H.__h=[],e.__e(t,n.__v)}})),N=[]}e.__b=function(e){P=null,I&&I(e)},e.__r=function(e){M&&M(e),D=0;var n=(P=e.__c).__H;n&&(n.__h.forEach(V),n.__h.forEach(q),n.__h=[])},e.diffed=function(n){B&&B(n);var t=n.__c;t&&t.__H&&t.__H.__h.length&&(1!==N.push(t)&&F===e.requestAnimationFrame||((F=e.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(r),W&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);W&&(n=requestAnimationFrame(t))})(G)),P=void 0},e.__c=function(n,t){t.some((function(n){try{n.__h.forEach(V),n.__h=n.__h.filter((function(e){return!e.__||q(e)}))}catch(r){t.some((function(e){e.__h&&(e.__h=[])})),t=[],e.__e(r,n.__v)}})),X&&X(n,t)},e.unmount=function(n){H&&H(n);var t=n.__c;if(t&&t.__H)try{t.__H.__.forEach(V)}catch(n){e.__e(n,t.__v)}};var W="function"==typeof requestAnimationFrame;function V(e){var n=P;"function"==typeof e.__c&&e.__c(),P=n}function q(e){var n=P;e.__c=e.__(),P=n}function Y(e,n){return"function"==typeof n?n(e):n}const z=new DataView(new ArrayBuffer(8));function K(e){const n=e>=0?1:-1;if(e=Math.abs(e),isNaN(e))return NaN;if(e===1/0)return 1*n;z.setFloat64(0,e);const t=z.getInt32(0);if(t<1072365568){if(t<1043333120)return t<8388608?n*(.125*(8*e+1.0270333367641007*e)):n*(e+.1283791670955126*e);const r=e*e;return n*(e+e*((.12837916709551256+r*(r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015))/(1+r*(.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))))))}if(t<1072955392){const t=e-1;return n*(.8450629115104675+(t*(.41485611868374833+t*(t*(.31834661990116175+t*(t*(.035478304325618236+-.002166375594868791*t)-.11089469428239668))-.3722078760357013))-.0023621185607526594)/(1+t*(.10642088040084423+t*(.540397917702171+t*(.07182865441419627+t*(.12617121980876164+t*(.01363708391202905+.011984499846799107*t)))))))}if(t>=1075314688)return 1*n;const r=1/(e*e);let o,_;t<1074191214?(o=r*(r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818)-.009864944034847148,_=1+r*(19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r)))))))):(o=r*(r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523)-.0098649429247001,_=1+r*(30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r))))))),z.setInt32(4,0);const l=z.getFloat64(0);return n*(1-Math.exp(-l*l-.5625)*Math.exp((l-e)*(l+e)+o/_)/e)}function Q(e,n){const t=K((e-.5)/(n*Math.SQRT2));return(K((e+.5)/(n*Math.SQRT2))-t)/2}const $=new Float32Array([-1,1,-1,-1,1,1,1,1,-1,-1,1,-1]);function J(e,n){const{width:t,height:r}=e,o=document.createElement("canvas");o.width=t,o.height=r;const _=o.getContext("webgl",{depth:!1,antialias:!1});_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,!0);const l=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,l),_.bufferData(_.ARRAY_BUFFER,$,_.STATIC_DRAW);const i=_.createTexture();_.bindTexture(_.TEXTURE_2D,i),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,_.RGBA,_.UNSIGNED_BYTE,e);const u=_.createTexture();_.bindTexture(_.TEXTURE_2D,u),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,t,r,0,_.RGBA,_.UNSIGNED_BYTE,null);const a=_.createFramebuffer();_.bindFramebuffer(_.FRAMEBUFFER,a),_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,u,0);const[c,s]=function(e){const n=function(e){const n=[];n.push({offset:0,weight:Q(0,e)});const t=Math.ceil(3*e);for(let r=1;r<=t;r+=2){const t=Q(r,e),o=Q(r+1,e),_=(t*r+o*(r+1))/(t+o),l=t+o;n.push({offset:_,weight:l}),n.push({offset:-_,weight:l})}return n}(e.blur);return["\n    precision highp float;\n    attribute vec2 a_position;\n    void main() {\n      gl_Position = vec4(a_position, 0.0, 1.0);\n    }\n  ","\n    precision mediump float;\n    uniform sampler2D u_texture;\n    uniform highp vec2 u_shape;\n    uniform highp vec2 u_blurDirection;\n    uniform vec4 u_mixColor;\n    void main() {\n      gl_FragColor = vec4(0.0);\n      ".concat(n.map((({offset:e,weight:n})=>{const t="(gl_FragCoord.xy + u_blurDirection * ".concat(e.toExponential(),") / u_shape");return"gl_FragColor += texture2D(u_texture, ".concat(t,") * ").concat(n.toExponential(),";")})).join("\n"),"\n      gl_FragColor = vec4(mix(gl_FragColor.rgb, u_mixColor.rgb, u_mixColor.a), 1.0);\n    }\n  ")]}(n),f=_.createShader(_.VERTEX_SHADER);_.shaderSource(f,c),Z(_,f);const p=_.createShader(_.FRAGMENT_SHADER);_.shaderSource(p,s),Z(_,p);const d=_.createProgram();_.attachShader(d,f),_.attachShader(d,p),function(e,n){if(e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(n))}(_,d),_.useProgram(d);const h=_.getAttribLocation(d,"a_position"),m=_.getUniformLocation(d,"u_texture"),g=_.getUniformLocation(d,"u_shape"),b=_.getUniformLocation(d,"u_blurDirection"),v=_.getUniformLocation(d,"u_mixColor");return _.enableVertexAttribArray(h),_.bindBuffer(_.ARRAY_BUFFER,l),_.vertexAttribPointer(h,2,_.FLOAT,!1,0,0),_.activeTexture(_.TEXTURE0),_.uniform1i(m,0),_.uniform2fv(g,[t,r]),_.bindFramebuffer(_.FRAMEBUFFER,a),_.bindTexture(_.TEXTURE_2D,i),_.uniform2fv(b,[1,0]),_.uniform4fv(v,[0,0,0,0]),_.drawArrays(_.TRIANGLES,0,6),_.bindFramebuffer(_.FRAMEBUFFER,null),_.bindTexture(_.TEXTURE_2D,u),_.uniform2fv(b,[0,1]),_.uniform4fv(v,n.mixColor),_.drawArrays(_.TRIANGLES,0,6),new Promise((e=>{o.toBlob(e,"image/jpeg")}))}function Z(e,n){if(e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(n));return n}function ee({defaultType:e="url",name:n}){const[t,r]=j(e);return c("div",{class:"form-group"},c("div",{class:"input-group"},c("span",{class:"input-group-btn"},c("select",{name:n+"-type",class:"btn",value:t,onChange:e=>r(e.target.value)},c("option",{value:"url"},"URL"),c("option",{value:"file"},"檔案/ファイル"))),c("input",{type:t,name:n,class:"form-control",required:"required"})))}function ne(e,n){return{type:e.get(n+"-type"),value:e.get(n)}}function te({name:e,defaultBlur:n,defaultBrightness:t}){return c("div",{class:"form-group"},c("label",null,"亮度 Brightness"),c("input",{type:"range",name:e+"-brightness",min:"-100",max:"100",defaultValue:t}),c("label",null,"模糊 Blur"),c("input",{type:"range",name:e+"-blur",min:"0",max:"1000",defaultValue:n}))}function re(e,n){const t=parseInt(e.get(n+"-brightness"))/100;return{blur:parseInt(e.get(n+"-blur"))/100,mixColor:t>0?[1,1,1,t]:[0,0,0,-t]}}function oe({onSubmit:e}){return c(f,null,c("h2",null,"Step.1 設定"),c("span",null,"先選擇你要的背景圖，設定好你喜歡的明暗透明度、模糊程度並預覽"),c("form",{onSubmit:n=>{n.preventDefault();const t=new FormData(n.target);e({image:ne(t,"image-input"),options:{plurk:re(t,"plurk")}})}},c("h3",null,"背景画像選択"),c(ee,{name:"image-input"}),c("h3",null,"模糊與透明程度調整"),c(te,{name:"plurk",defaultBrightness:"80",defaultBlur:"500"}),c("h2",null,"Step.2 預覽"),c("button",{type:"submit",class:"btn btn-primary"},"預覽Preview")))}function _e({images:e}){return c(f,null,c("div",{class:"preview background-timeline",style:e?"background-image: url(".concat(e.timeline.objectURL,")"):""},c("div",{class:"preview-box background-plurk",style:e?"background-image: url(".concat(e.plurk.objectURL,")"):""},c("b",null,"千秋"),c("span",{class:"say"},c("b",null,"說")),c("br",null),"你好，謝謝你的使用OwO"),c("div",{class:"preview-box background-plurk",style:e?"background-image: url(".concat(e.plurk.objectURL,")"):""},c("b",{style:"color:#63C6D3;"},"涼風青葉"),c("span",{class:"say"},c("b",null,"說")),c("br",null),"這是淺色暱稱的狀況")))}function le({images:e,onDone:n}){const[t,r]=j(!1),o=null!=e&&!t;return c(f,null,c("h2",null,"Step.3 上傳圖片"),c("button",{type:"button",class:"btn btn-primary",onClick:async()=>{if(o){r(!0);try{const t={};await Promise.all(Object.keys(e).map((async n=>{t[n]=await async function(e){const n=new FormData;n.append("image",e);const t=await fetch("https://api.imgur.com/3/image.json",{method:"POST",headers:{Authorization:"Client-ID f28cb80465f9e25"},body:n}),r=await t.json();if(r.success)return r.data.link;throw new Error(r.data.error)}(e[n].blob)}))),n(t)}catch(e){console.error(e),alert("上傳失敗")}finally{r(!1)}}},disabled:!o},"上傳產生CSS"),c("br",null),c("span",null,"要等蠻久的，好了我會彈個提示 ",c("br",null),"Please wait",c("br",null)))}function ie({css:e}){const n=(C=5,function(e,n){var t=O(D++,7);return function(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}((function(){return{current:null}}),[]));return c(f,null,c("textarea",{ref:n,class:"form-control",style:"max-height: 500px"},e),c("button",{type:"button",class:"btn btn-default",onClick:()=>{n.current.select(),document.execCommand("copy")}},"點我複製"))}!function(n,t,r){var i,u,a;e.__&&e.__(n,t),u=(i=r===o)?null:r&&r.__k||t.__k,n=c(f,null,[n]),a=[],w(t,(i?t:r||t).__k=n,u||_,_,void 0!==t.ownerSVGElement,r&&!i?[r]:u?null:t.childNodes.length?l.slice.call(t.childNodes):null,a,r||_,i),U(a,n)}(c((function(){const[e,n]=j(null),[t,r]=j("");return c("div",{class:"root",style:e?"background-image: url(".concat(e.timeline.objectURL,")"):""},c("div",{class:"container",style:e?"background-image: url(".concat(e.plurk.objectURL,")"):""},c("h1",null,"Tokyono Sora 模糊背景產生器 ",c("small",null,"beta")),c("hr",null),c("div",{class:"row"},c("div",{class:"col-md-6"},c(oe,{onSubmit:async e=>{try{r("");const t=await async function(e){const n=await async function({type:e,value:n}){return"url"===e?fetch(n,{mode:"cors"}).then((e=>e.blob())):"file"===e?n:void 0}(e.image),t=await async function(e){const n=URL.createObjectURL(e);try{const e=new Image;return e.decode?(e.src=n,await e.decode()):await new Promise(((t,r)=>{e.onload=t,e.onerror=r,e.src=n})),e}finally{URL.revokeObjectURL(n)}}(n),r=Math.min(t.width,t.height)/200,o={};return o.timeline={blob:n,objectURL:URL.createObjectURL(n)},await Promise.all(["plurk"].map((async n=>{const _=e.options[n],l=await J(t,{..._,blur:_.blur*r});o[n]={blob:l,objectURL:URL.createObjectURL(l)}}))),o}(e);n((e=>(function(e){if(null!=e)for(const n in e)URL.revokeObjectURL(e[n].objectURL)}(e),t)))}catch(e){console.error(e),alert("失敗：錯誤".concat(e))}}})),c("div",{class:"col-md-6"},c(_e,{images:e}),c(le,{images:e,onDone:async e=>{r(function(e,n){return function(e){return"/* 以上傳圖片覆蓋掉噗浪原本的背景圖 */\nbody {\n  background-image: url(".concat(e.timeline,") !important;\n  background-position: center !important;\n  background-size: cover !important;\n  background-attachment: fixed !important;\n  backdrop-filter: none !important;\n}\n/* 若想保留噗浪原本的背景圖請刪除上面這段 */\n\n/* 白色模糊背景改為固定圖片 */\n.cboxAnchor:not(.response) .plurk_cnt,\n#form_holder,\n._lch_~.pop-window .pop-window-content,\n._lch_~.pop-window .pop-window-view iframe  {\n  background-image: url(").concat(e.plurk,") !important;\n  background-position: center !important;\n  background-size: cover !important;\n  background-attachment: fixed !important;\n  backdrop-filter: none !important;\n}")}(n)}(0,e))}}),c(ie,{css:t}),c("a",{href:"https://www.plurk.com/akira02/invite/4",class:"btn btn-outline-danger",role:"button"},"喜歡請追蹤千秋的噗浪<3",c("br",null),"フォローしてください")))))}),null),document.body)})();