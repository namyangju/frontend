(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,n,a){e.exports=a.p+"static/media/logo.40741e13.png"},38:function(e,n,a){e.exports=a(50)},46:function(e,n,a){},50:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(16),c=a.n(l),i=a(12),o=a(35),u=(a(46),a(3)),m=a(1),s=a(2);function d(){var e=Object(m.a)(["\n  padding: 5vh 10%;\n  ","\n"]);return d=function(){return e},e}var p=s.b.div(d(),(function(e){return e.css})),b=a(20),f=a(37);function h(){var e=Object(m.a)(["\n        width: 100%;\n      "]);return h=function(){return e},e}function g(){var e=Object(m.a)(["\n        display: block;\n      "]);return g=function(){return e},e}function v(){var e=Object(m.a)(["\n      box-shadow: 2px 2px 5px -1px ",";\n    "]);return v=function(){return e},e}function E(){var e=Object(m.a)(["\n  border: 0;\n  padding: 1em 1.5em;\n  background: #f2f2f2;\n  box-sizing: border-box;\n  border-radius: 1em;\n  ","\n    ","\n    ","\n  :focus {\n    outline: 0;\n  }\n"]);return E=function(){return e},e}var x=s.b.input(E(),(function(e){var n=e.shadow;return n&&Object(s.a)(v(),"string"===typeof n?n:"#f2f2f2")}),(function(e){var n=e.fullWidth,a=e.block;return(n||a)&&Object(s.a)(g())}),(function(e){return e.fullWidth&&Object(s.a)(h())}));function w(){var e=Object(m.a)(["\n  label {\n    display: block;\n  }\n  .error {\n    margin-left: 16px;\n    margin-top: 4px;\n    color: red;\n    height: 24px;\n    box-sizing: border-box;\n  }\n  margin-bottom: 1em;\n"]);return w=function(){return e},e}var j=s.b.div(w()),y=function(e){var n=e.fieldName,a=e.name,t=e.type,l=e.error,c=Object(f.a)(e,["fieldName","name","type","error"]);return r.a.createElement(j,null,r.a.createElement("label",null,r.a.createElement("span",null,n),r.a.createElement(x,Object.assign({type:t,name:a,fullWidth:!0},c))),r.a.createElement("div",{className:"error"},l))},O={primary:"#00098b",isLight:function(e){var n=e;return"#"===e[0]&&(n=e.slice(1)),[n.slice(0,2),n.slice(2,4),n.slice(4,6)].map((function(e){return parseInt(e,16)})).reduce((function(e,n){return e+n}),0)/3>120}};function k(){var e=Object(m.a)(["\n        width: 100%;\n      "]);return k=function(){return e},e}function N(){var e=Object(m.a)(["\n      display: block;\n    "]);return N=function(){return e},e}function C(){var e=Object(m.a)(["\n  ","\n    ","\n    \n    background: ",";\n    color: ",";\n    font-size: 1rem;\n    border: 0;\n    padding: .5em 1em;\n    border-radius: 1em;\n\n    :focus, :active {\n        outline: 0;\n    }\n"]);return C=function(){return e},e}var z=s.b.button(C(),(function(e){var n=e.block,a=e.fullWidth;return(n||a)&&Object(s.a)(N())}),(function(e){return e.fullWidth&&Object(s.a)(k())}),O.primary,O.isLight(O.primary)?"black":"white");function A(){var e=Object(m.a)(["\n  .select-role {\n    margin-bottom: 24px;\n    label {\n      display: block;\n    }\n  }\n"]);return A=function(){return e},e}var W={email:"",password:"",passwordAccept:"",username:"",role:"designer"};var B=s.b.form(A()),S=function(){var e=Object(t.useCallback)((function(e,n){}),[]),n=Object(t.useCallback)((function(e,n){var a=e.email,t=e.password,r=e.passwordAccept,l={};return t&&r&&t!==r&&(l.passwordAccept="\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694."),a.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)||(l.email="\uc774\uba54\uc77c\uc774 \ud615\uc2dd\uc5d0 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),l}),[]);return r.a.createElement(b.a,{onSubmit:e,initialValues:W,validate:n},(function(e){var n=e.handleChange,a=e.handleBlur,t=e.handleSubmit,l=e.setFieldValue,c=e.values,i=e.errors,o=e.isSubmitting;return r.a.createElement(B,{onSubmit:t},r.a.createElement(y,{fieldName:"\uc774\uba54\uc77c",name:"email",onChange:n,onBlur:a,error:i.email,value:c.email}),r.a.createElement(y,{fieldName:"\ube44\ubc00\ubc88\ud638",name:"password",type:"password",onChange:n,onBlur:a,error:i.password,value:c.password}),r.a.createElement(y,{fieldName:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",name:"passwordAccept",type:"password",onChange:n,onBlur:a,error:i.passwordAccept,value:c.passwordAccept}),r.a.createElement(y,{fieldName:"\ub2c9\ub124\uc784",name:"username",onChange:n,onBlur:a,error:i.username,value:c.username}),r.a.createElement("div",{className:"select-role"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"role",value:"designer",checked:"designer"===c.role,onChange:function(){return l("role","designer")}}),"\ub514\uc790\uc774\ub108"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"client",value:"designer",checked:"client"===c.role,onChange:function(){return l("role","client")}}),"\ud074\ub77c\uc774\uc5b8\ud2b8")),r.a.createElement(z,{fullWidth:!0,disabled:o},"\ud68c\uc6d0\uac00\uc785"))}))};function Z(){var e=Object(m.a)(["\n  max-width: 500px;\n  margin: auto;\n"]);return Z=function(){return e},e}var L=Object(s.a)(Z()),V=function(){return r.a.createElement(p,{css:L},r.a.createElement("h1",null,"\ud68c\uc6d0\uac00\uc785"),r.a.createElement(S,null))};function I(){var e=Object(m.a)(["\n  > label {\n    display: block;\n    margin-bottom: 8px;\n  }\n  .button {\n    text-align: center;\n  }\n"]);return I=function(){return e},e}var J={email:"",password:""};var $=s.b.form(I()),_=function(){var e=Object(t.useCallback)((function(e,n){}),[]);return r.a.createElement(b.a,{initialValues:J,onSubmit:e},(function(e){var n=e.isSubmitting,a=e.values,t=e.handleChange,l=e.handleBlur,c=e.handleSubmit;return r.a.createElement($,{onSubmit:c},r.a.createElement("label",null,r.a.createElement("span",null,"\uc774\uba54\uc77c"),r.a.createElement(x,{type:"email",name:"email",onChange:t,onBlur:l,value:a.email,fullWidth:!0})),r.a.createElement("label",null,r.a.createElement("span",null,"\ube44\ubc00\ubc88\ud638"),r.a.createElement(x,{type:"password",name:"password",onChange:t,onBlur:l,value:a.password,fullWidth:!0})),r.a.createElement("div",{className:"button"},r.a.createElement(z,{fullWidth:!0,disabled:n},"\ub85c\uadf8\uc778"),r.a.createElement("p",null,"\ub610\ub294 ",r.a.createElement(i.b,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))))}))},F=a(19),M=a.n(F),q={small:"400px"};function D(){var e=Object(m.a)(["\n  height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  .logo {\n    width: 100%;\n    height: 200px;\n    display: block;\n    background: url(",") no-repeat;\n    background-size: contain;\n    background-position: center;\n\n    @media screen and (max-width: ",") {\n      height: 150px;\n    }\n  }\n  .login-wrap {\n    width: 100%;\n    padding: 1em;\n    max-width: 500px;\n    box-sizing: border-box;\n  }\n"]);return D=function(){return e},e}var G=s.b.div(D(),M.a,q.small),H=function(){return r.a.createElement(G,null,r.a.createElement("div",{className:"logo",role:"img","aria-label":"Logo"}),r.a.createElement("div",{className:"login-wrap"},r.a.createElement(_,null)))};function K(){var e=Object(m.a)(["\n  background: gray;\n  border-radius: 8px;\n  width: 300px;\n  height: 300px;\n\n  @media screen and (max-width: 829px) {\n    width: 100%;\n  }\n  @media screen and (max-width: ",") {\n    height: 200px;\n  }\n"]);return K=function(){return e},e}var P=s.b.div(K(),q.small),Q=function(){return r.a.createElement(P,null)};function R(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n\n  & > * {\n    margin: 1em;\n  }\n"]);return R=function(){return e},e}var T=s.b.div(R()),U=function(){return r.a.createElement(T,null,r.a.createElement(Q,null),r.a.createElement(Q,null),r.a.createElement(Q,null),r.a.createElement(Q,null),r.a.createElement(Q,null),r.a.createElement(Q,null),r.a.createElement(Q,null),r.a.createElement(Q,null),r.a.createElement(Q,null),r.a.createElement(Q,null))};function X(){var e=Object(m.a)(["\n  padding-top: 24px;\n\n  .header {\n    display: flex;\n    align-items: center;\n    .logo {\n      display: block;\n      background: url(",") no-repeat;\n      background-size: 100%;\n      background-position: center;\n      width: 200px;\n      height: 60px;\n\n      @media screen and (max-width: ",") {\n        width: 100px;\n        height: 30px;\n      }\n    }\n    .right {\n      flex: 1;\n      display: flex;\n      justify-content: flex-end;\n      * {\n        margin-right: 1em;\n        color: black;\n      }\n    }\n  }\n"]);return X=function(){return e},e}var Y=Object(s.a)(X(),M.a,q.small),ee=function(){return r.a.createElement(p,{css:Y},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"logo",role:"img","aria-label":"logo"})),r.a.createElement("div",{className:"right"},r.a.createElement(i.b,{to:"/login"},"\ub85c\uadf8\uc778"),r.a.createElement(i.b,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))),r.a.createElement("article",{className:"main"},r.a.createElement(U,null)))};var ne=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:ee,exact:!0}),r.a.createElement(u.a,{path:"/login",component:H,exact:!0}),r.a.createElement(u.a,{path:"/signup",component:V,exact:!0}))};var ae=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(36),re=a(5),le=Object(re.c)({}),ce=Object(te.a)({reducer:le});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:ce},r.a.createElement(i.a,{basename:""},r.a.createElement(ae,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.e47f0864.chunk.js.map