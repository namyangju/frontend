(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,n,t){e.exports=t.p+"static/media/logo.40741e13.png"},42:function(e,n,t){e.exports=t(54)},50:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(16),c=t.n(l),i=t(12),o=t(37),u=(t(50),t(3)),m=t(1),s=t(2),d={small:"400px"};function b(){var e=Object(m.a)(["\n  padding: 5vh 10%;\n  ","\n  \n  @media screen and (max-width: ",") {\n    padding: 24px 16px;\n  }\n"]);return b=function(){return e},e}var f=s.b.div(b(),(function(e){return e.css}),d.small),p=t(21),h=t(41);function g(){var e=Object(m.a)(["\n        width: 100%;\n      "]);return g=function(){return e},e}function v(){var e=Object(m.a)(["\n        display: block;\n      "]);return v=function(){return e},e}function E(){var e=Object(m.a)(["\n      box-shadow: 2px 2px 5px -1px ",";\n    "]);return E=function(){return e},e}function x(){var e=Object(m.a)(["\n  border: 0;\n  padding: 1em 1.5em;\n  background: #f2f2f2;\n  box-sizing: border-box;\n  border-radius: 1em;\n  ","\n    ","\n    ","\n  :focus {\n    outline: 0;\n  }\n"]);return x=function(){return e},e}var w=s.b.input(x(),(function(e){var n=e.shadow;return n&&Object(s.a)(E(),"string"===typeof n?n:"#f2f2f2")}),(function(e){var n=e.fullWidth,t=e.block;return(n||t)&&Object(s.a)(v())}),(function(e){return e.fullWidth&&Object(s.a)(g())}));function j(){var e=Object(m.a)(["\n  label {\n    display: block;\n  }\n  .error {\n    margin-left: 16px;\n    margin-top: 4px;\n    color: red;\n    height: 24px;\n    box-sizing: border-box;\n  }\n  margin-bottom: 1em;\n"]);return j=function(){return e},e}var O=s.b.div(j()),k=function(e){var n=e.fieldName,t=e.name,a=e.type,l=e.error,c=Object(h.a)(e,["fieldName","name","type","error"]);return r.a.createElement(O,null,r.a.createElement("label",null,r.a.createElement("span",null,n),r.a.createElement(w,Object.assign({type:a,name:t,fullWidth:!0},c))),r.a.createElement("div",{className:"error"},l))},y={primary:"#00098b",isLight:function(e){var n=e;return"#"===e[0]&&(n=e.slice(1)),[n.slice(0,2),n.slice(2,4),n.slice(4,6)].map((function(e){return parseInt(e,16)})).reduce((function(e,n){return e+n}),0)/3>120}};function N(){var e=Object(m.a)(["\n        width: 100%;\n      "]);return N=function(){return e},e}function C(){var e=Object(m.a)(["\n      display: block;\n    "]);return C=function(){return e},e}function z(){var e=Object(m.a)(["\n  ","\n    ","\n    \n    background: ",";\n    color: ",";\n    font-size: 1rem;\n    border: 0;\n    padding: .5em 1em;\n    border-radius: 1em;\n\n    :focus, :active {\n        outline: 0;\n    }\n"]);return z=function(){return e},e}var S=s.b.button(z(),(function(e){var n=e.block,t=e.fullWidth;return(n||t)&&Object(s.a)(C())}),(function(e){return e.fullWidth&&Object(s.a)(N())}),y.primary,y.isLight(y.primary)?"black":"white");function A(){var e=Object(m.a)(["\n  .select-role {\n    margin-bottom: 24px;\n    label {\n      display: block;\n    }\n  }\n"]);return A=function(){return e},e}var W={email:"",password:"",passwordAccept:"",username:"",role:"designer"};var B=s.b.form(A()),Z=function(){var e=Object(a.useCallback)((function(e,n){}),[]),n=Object(a.useCallback)((function(e,n){var t=e.email,a=e.password,r=e.passwordAccept,l={};return a&&r&&a!==r&&(l.passwordAccept="\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694."),t.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)||(l.email="\uc774\uba54\uc77c\uc774 \ud615\uc2dd\uc5d0 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),l}),[]);return r.a.createElement(p.a,{onSubmit:e,initialValues:W,validate:n},(function(e){var n=e.handleChange,t=e.handleBlur,a=e.handleSubmit,l=e.setFieldValue,c=e.values,i=e.errors,o=e.isSubmitting;return r.a.createElement(B,{onSubmit:a},r.a.createElement(k,{fieldName:"\uc774\uba54\uc77c",name:"email",onChange:n,onBlur:t,error:i.email,value:c.email}),r.a.createElement(k,{fieldName:"\ube44\ubc00\ubc88\ud638",name:"password",type:"password",onChange:n,onBlur:t,error:i.password,value:c.password}),r.a.createElement(k,{fieldName:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",name:"passwordAccept",type:"password",onChange:n,onBlur:t,error:i.passwordAccept,value:c.passwordAccept}),r.a.createElement(k,{fieldName:"\ub2c9\ub124\uc784",name:"username",onChange:n,onBlur:t,error:i.username,value:c.username}),r.a.createElement("div",{className:"select-role"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"role",value:"designer",checked:"designer"===c.role,onChange:function(){return l("role","designer")}}),"\ub514\uc790\uc774\ub108"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"client",value:"designer",checked:"client"===c.role,onChange:function(){return l("role","client")}}),"\ud074\ub77c\uc774\uc5b8\ud2b8")),r.a.createElement(S,{fullWidth:!0,disabled:o},"\ud68c\uc6d0\uac00\uc785"))}))};function L(){var e=Object(m.a)(["\n  max-width: 500px;\n  margin: auto;\n"]);return L=function(){return e},e}var V=Object(s.a)(L()),F=function(){return r.a.createElement(f,{css:V},r.a.createElement("h1",null,"\ud68c\uc6d0\uac00\uc785"),r.a.createElement(Z,null))};function I(){var e=Object(m.a)(["\n  > label {\n    display: block;\n    margin-bottom: 8px;\n  }\n  .button {\n    text-align: center;\n  }\n"]);return I=function(){return e},e}var J={email:"",password:""};var $=s.b.form(I()),_=function(){var e=Object(a.useCallback)((function(e,n){}),[]);return r.a.createElement(p.a,{initialValues:J,onSubmit:e},(function(e){var n=e.isSubmitting,t=e.values,a=e.handleChange,l=e.handleBlur,c=e.handleSubmit;return r.a.createElement($,{onSubmit:c},r.a.createElement("label",null,r.a.createElement("span",null,"\uc774\uba54\uc77c"),r.a.createElement(w,{type:"email",name:"email",onChange:a,onBlur:l,value:t.email,fullWidth:!0})),r.a.createElement("label",null,r.a.createElement("span",null,"\ube44\ubc00\ubc88\ud638"),r.a.createElement(w,{type:"password",name:"password",onChange:a,onBlur:l,value:t.password,fullWidth:!0})),r.a.createElement("div",{className:"button"},r.a.createElement(S,{fullWidth:!0,disabled:n},"\ub85c\uadf8\uc778"),r.a.createElement("p",null,"\ub610\ub294 ",r.a.createElement(i.b,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))))}))},M=t(19),P=t.n(M);function q(){var e=Object(m.a)(["\n  height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  .logo {\n    width: 100%;\n    height: 200px;\n    display: block;\n    background: url(",") no-repeat;\n    background-size: contain;\n    background-position: center;\n\n    @media screen and (max-width: ",") {\n      height: 150px;\n    }\n  }\n  .login-wrap {\n    width: 100%;\n    padding: 1em;\n    max-width: 500px;\n    box-sizing: border-box;\n  }\n"]);return q=function(){return e},e}var D=s.b.div(q(),P.a,d.small),G=function(){return r.a.createElement(D,null,r.a.createElement("div",{className:"logo",role:"img","aria-label":"Logo"}),r.a.createElement("div",{className:"login-wrap"},r.a.createElement(_,null)))},H=t(39),K=t(20),Q=t(36),R=t(38),T=Object(a.createContext)({modal:{},changeState:function(){}});var U=function(e){var n=e.children,t=Object(a.useState)({}),l=Object(R.a)(t,2),c=l[0],i=l[1],o=Object(a.useCallback)((function(e,n){i((function(t){return Object(Q.a)({},t,Object(K.a)({},e,n))}))}),[]);return r.a.createElement(T.Provider,{value:{modal:c,changeState:o}},n)};var X=function(e){var n=Object(a.useContext)(T),t=n.modal,r=n.changeState;return{isShow:!!t[e],close:Object(a.useCallback)((function(){r(e,!1)}),[r,e]),show:Object(a.useCallback)((function(){r(e,!0)}),[r,e])}};function Y(){var e=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3000;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  & > .close {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n"]);return Y=function(){return e},e}var ee=s.b.div(Y()),ne=function(e){var n=e.modalName,t=e.children,a=X(n),l=a.isShow,c=a.close;return l?r.a.createElement(ee,null,r.a.createElement("div",{className:"close",onClick:c}),t&&t(c)):null};function te(){var e=Object(m.a)(["\n  background: white;\n  width: 50%;\n\n  @media screen and (max-width: ",") {\n    width: 70%;\n  }\n"]);return te=function(){return e},e}var ae=s.b.div(te(),d.small),re=function(){return r.a.createElement(ne,{modalName:"menu"},(function(){return r.a.createElement(ae,null)}))};var le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null))};function ce(){var e=Object(m.a)(["\n  padding-top: 24px;\n\n  > .header {\n    display: flex;\n    align-items: center;\n    > .left > .logo {\n      display: block;\n      background: url(",") no-repeat;\n      background-size: 100%;\n      background-position: center;\n      width: 200px;\n      height: 60px;\n\n      @media screen and (max-width: ",") {\n        width: 100px;\n        height: 30px;\n      }\n    }\n    > .right {\n      flex: 1;\n      display: flex;\n      justify-content: flex-end;\n      * {\n        margin-right: 1em;\n        color: black;\n      }\n    }\n  }\n  > .menu-wrap {\n    margin-bottom: 1em;\n    margin-top: 1.5em;\n    margin-left: 24px;\n    .menu-button {\n      background: none;\n      border: 0;\n      font-size: 36px;\n      cursor: pointer;\n\n      :active,\n      :focus {\n        outline: 0;\n      }\n    }\n  }\n"]);return ce=function(){return e},e}var ie=Object(s.a)(ce(),P.a,d.small),oe=function(e){var n=e.children,t=X("menu");return r.a.createElement(f,{css:ie},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"logo",role:"img","aria-label":"logo"})),r.a.createElement("div",{className:"right"},r.a.createElement(i.b,{to:"/login"},"\ub85c\uadf8\uc778"),r.a.createElement(i.b,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))),r.a.createElement("div",{className:"menu-wrap"},r.a.createElement("button",{className:"menu-button",onClick:t.show},r.a.createElement(H.a,null))),r.a.createElement("article",{className:"main"},n),r.a.createElement(le,null))};function ue(){var e=Object(m.a)(["\n  background: gray;\n  border-radius: 8px;\n  width: 300px;\n  height: 300px;\n\n  @media screen and (max-width: 829px) {\n    width: 100%;\n  }\n  @media screen and (max-width: ",") {\n    height: 200px;\n  }\n"]);return ue=function(){return e},e}var me=s.b.div(ue(),d.small),se=function(){return r.a.createElement(me,null)};function de(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n\n  & > * {\n    margin: 1em;\n  }\n"]);return de=function(){return e},e}var be=s.b.div(de()),fe=function(){return r.a.createElement(be,null,r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null))};var pe=function(){return r.a.createElement(oe,null,r.a.createElement(fe,null))};var he=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:pe,exact:!0}),r.a.createElement(u.a,{path:"/login",component:G,exact:!0}),r.a.createElement(u.a,{path:"/signup",component:F,exact:!0}))};var ge=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(he,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=t(40),Ee=t(5),xe=Object(Ee.c)({}),we=Object(ve.a)({reducer:xe});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:we},r.a.createElement(U,null,r.a.createElement(i.a,{basename:""},r.a.createElement(ge,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.68431252.chunk.js.map