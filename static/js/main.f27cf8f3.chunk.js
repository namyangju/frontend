(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{144:function(e,n,t){e.exports=t(271)},152:function(e,n,t){},175:function(e,n){},177:function(e,n){},214:function(e,n){},215:function(e,n){},271:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(50),l=t.n(c),i=t(5),o=t(11),u=(t(152),t(7)),s=t(1),m=t(2),d={small:"400px"};function p(){var e=Object(s.a)(["\n  padding: 5vh 10%;\n  ","\n  \n  @media screen and (max-width: ",") {\n    padding: 24px 16px;\n  }\n"]);return p=function(){return e},e}var f=m.b.div(p(),(function(e){return e.css}),d.small),b=t(8),v=t.n(b),h=t(13),g=t(28),E=t(143);function x(){var e=Object(s.a)(["\n        width: 100%;\n      "]);return x=function(){return e},e}function j(){var e=Object(s.a)(["\n        display: block;\n      "]);return j=function(){return e},e}function w(){var e=Object(s.a)(["\n      box-shadow: 2px 2px 5px -1px ",";\n    "]);return w=function(){return e},e}function k(){var e=Object(s.a)(["\n  border: 0;\n  padding: 1em 1.5em;\n  background: #f2f2f2;\n  box-sizing: border-box;\n  border-radius: 1em;\n  ","\n    ","\n    ","\n  :focus {\n    outline: 0;\n  }\n"]);return k=function(){return e},e}var O=m.b.input(k(),(function(e){var n=e.shadow;return n&&Object(m.a)(w(),"string"===typeof n?n:"#f2f2f2")}),(function(e){var n=e.fullWidth,t=e.block;return(n||t)&&Object(m.a)(j())}),(function(e){return e.fullWidth&&Object(m.a)(x())}));function y(){var e=Object(s.a)(["\n  label {\n    display: block;\n  }\n  .error {\n    margin-left: 16px;\n    margin-top: 4px;\n    color: red;\n    height: 24px;\n    box-sizing: border-box;\n  }\n  margin-bottom: 1em;\n"]);return y=function(){return e},e}var N=m.b.div(y()),C=function(e){var n=e.fieldName,t=e.name,a=e.type,c=e.error,l=Object(E.a)(e,["fieldName","name","type","error"]);return r.a.createElement(N,null,r.a.createElement("label",null,r.a.createElement("span",null,n),r.a.createElement(O,Object.assign({type:a,name:t,fullWidth:!0},l))),r.a.createElement("div",{className:"error"},c))},S={primary:"#00098b",isLight:function(e){var n=e;return"#"===e[0]&&(n=e.slice(1)),[n.slice(0,2),n.slice(2,4),n.slice(4,6)].map((function(e){return parseInt(e,16)})).reduce((function(e,n){return e+n}),0)/3>120}};function T(){var e=Object(s.a)(["\n        width: 100%;\n      "]);return T=function(){return e},e}function z(){var e=Object(s.a)(["\n      display: block;\n    "]);return z=function(){return e},e}function W(){var e=Object(s.a)(["\n  ","\n    ","\n    \n    background: ",";\n    color: ",";\n    font-size: 1rem;\n    border: 0;\n    padding: .5em 1em;\n    border-radius: 1em;\n\n    :focus, :active {\n        outline: 0;\n    }\n"]);return W=function(){return e},e}var B=m.b.button(W(),(function(e){var n=e.block,t=e.fullWidth;return(n||t)&&Object(m.a)(z())}),(function(e){return e.fullWidth&&Object(m.a)(T())}),S.primary,S.isLight(S.primary)?"black":"white"),L=t(53),_=t.n(L),A="https://typewriter-api.hadmarine.com/v1";function I(e){return e.response.data&&e.response.data.message?e.response.data:e}var F=_.a.create({baseURL:A});function V(){var e=Object(s.a)(["\n  .select-role {\n    margin-bottom: 24px;\n    label {\n      display: block;\n    }\n  }\n"]);return V=function(){return e},e}var q={email:"",password:"",passwordAccept:"",username:"",role:"designer"};var Z=m.b.form(V()),U=function(){var e=Object(u.f)(),n=Object(a.useCallback)(function(){var n=Object(h.a)(v.a.mark((function n(t,a){var r,c,l,i;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.email&&t.password&&t.passwordAccept&&t.role&&t.username){n.next=3;break}return a.setSubmitting(!1),n.abrupt("return");case 3:return n.prev=3,r=t.email,c=t.password,l=t.role,i=t.username,n.next=7,F.post("/user",{userid:r,password:c,nickname:i,type:l});case 7:alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.replace("/login"),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(3),alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e,t){return n.apply(this,arguments)}}(),[e]),t=Object(a.useCallback)((function(e,n){var t=e.email,a=e.password,r=e.passwordAccept,c={};return a&&r&&a!==r&&(c.passwordAccept="\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694."),t.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)||(c.email="\uc774\uba54\uc77c\uc774 \ud615\uc2dd\uc5d0 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),c}),[]);return r.a.createElement(g.a,{onSubmit:n,initialValues:q,validate:t},(function(e){var n=e.handleChange,t=e.handleBlur,a=e.handleSubmit,c=e.setFieldValue,l=e.values,i=e.errors,o=e.isSubmitting;return r.a.createElement(Z,{onSubmit:a},r.a.createElement(C,{fieldName:"\uc774\uba54\uc77c",name:"email",onChange:n,onBlur:t,error:i.email,value:l.email}),r.a.createElement(C,{fieldName:"\ube44\ubc00\ubc88\ud638",name:"password",type:"password",onChange:n,onBlur:t,error:i.password,value:l.password}),r.a.createElement(C,{fieldName:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",name:"passwordAccept",type:"password",onChange:n,onBlur:t,error:i.passwordAccept,value:l.passwordAccept}),r.a.createElement(C,{fieldName:"\ub2c9\ub124\uc784",name:"username",onChange:n,onBlur:t,error:i.username,value:l.username}),r.a.createElement("div",{className:"select-role"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"role",value:"designer",checked:"designer"===l.role,onChange:function(){return c("role","designer")}}),"\ub514\uc790\uc774\ub108"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"client",value:"designer",checked:"client"===l.role,onChange:function(){return c("role","client")}}),"\ud074\ub77c\uc774\uc5b8\ud2b8")),r.a.createElement(B,{fullWidth:!0,disabled:o},"\ud68c\uc6d0\uac00\uc785"))}))};function J(){var e=Object(o.c)((function(e){return e.auth})),n=e.accessToken,t=e.refreshToken;return!(!n||!t)}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",n=Object(u.f)(),t=J();Object(a.useEffect)((function(){t&&n.replace(e)}),[t,n,e])}var P=J;function R(){var e=Object(s.a)(["\n  max-width: 500px;\n  margin: auto;\n"]);return R=function(){return e},e}var $=Object(m.a)(R()),D=function(){return M(),r.a.createElement(f,{css:$},r.a.createElement("h1",null,"\ud68c\uc6d0\uac00\uc785"),r.a.createElement(U,null))};function G(e){return H.apply(this,arguments)}function H(){return(H=Object(h.a)(v.a.mark((function e(n){var t,a,r,c,l,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.email,a=n.password,e.prev=1,e.next=4,F.post("/auth",{userid:t,password:a});case 4:return r=e.sent,c=r.data.data.token,l=c.access,i=c.refresh,localStorage.setItem("accessToken",l),localStorage.setItem("refreshToken",i),e.abrupt("return",{accessToken:l,refreshToken:i});case 11:throw e.prev=11,e.t0=e.catch(1),I(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var K=t(56),Q=t(79),X=t.n(Q),Y={accessToken:localStorage.getItem("accessToken")||void 0,refreshToken:localStorage.getItem("refreshToken")||void 0,data:localStorage.getItem("accessToken")&&X.a.decode(localStorage.getItem("accessToken"))||void 0},ee=Object(K.b)({name:"auth",initialState:Y,reducers:{setToken:function(e,n){var t=n.payload,a=t.accessToken,r=t.refreshToken;e.accessToken=a,e.refreshToken=r,e.data=X.a.decode(a)}}});function ne(){var e=Object(s.a)(["\n  > label {\n    display: block;\n    margin-bottom: 8px;\n  }\n  .button {\n    text-align: center;\n  }\n"]);return ne=function(){return e},e}var te={email:"",password:""};var ae=m.b.form(ne()),re=function(){var e=Object(u.f)(),n=Object(o.b)(),t=Object(a.useCallback)(function(){var t=Object(h.a)(v.a.mark((function t(a,r){var c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G(a);case 3:c=t.sent,n(ee.actions.setToken(c)),e.replace("/"),t.next=14;break;case 8:if(t.prev=8,t.t0=t.catch(0),"LOGIN_FAIL"!==t.t0.code){t.next=13;break}return alert("\uc544\uc774\ub514\ub098 \ube44\ubc00\ubc88\ud638\uac00 \ub2e4\ub985\ub2c8\ub2e4."),t.abrupt("return");case 13:alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 14:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),[e,n]);return r.a.createElement(g.a,{initialValues:te,onSubmit:t},(function(e){var n=e.isSubmitting,t=e.values,a=e.handleChange,c=e.handleBlur,l=e.handleSubmit;return r.a.createElement(ae,{onSubmit:l},r.a.createElement("label",null,r.a.createElement("span",null,"\uc774\uba54\uc77c"),r.a.createElement(O,{type:"email",name:"email",onChange:a,onBlur:c,value:t.email,fullWidth:!0})),r.a.createElement("label",null,r.a.createElement("span",null,"\ube44\ubc00\ubc88\ud638"),r.a.createElement(O,{type:"password",name:"password",onChange:a,onBlur:c,value:t.password,fullWidth:!0})),r.a.createElement("div",{className:"button"},r.a.createElement(B,{fullWidth:!0,disabled:n},"\ub85c\uadf8\uc778"),r.a.createElement("p",null,"\ub610\ub294 ",r.a.createElement(i.b,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))))}))},ce=t(54),le=t.n(ce);function ie(){var e=Object(s.a)(["\n  height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  .logo {\n    width: 100%;\n    height: 200px;\n    display: block;\n    background: url(",") no-repeat;\n    background-size: contain;\n    background-position: center;\n\n    @media screen and (max-width: ",") {\n      height: 150px;\n    }\n  }\n  .login-wrap {\n    width: 100%;\n    padding: 1em;\n    max-width: 500px;\n    box-sizing: border-box;\n  }\n"]);return ie=function(){return e},e}var oe=m.b.div(ie(),le.a,d.small),ue=function(){return M(),r.a.createElement(oe,null,r.a.createElement("div",{className:"logo",role:"img","aria-label":"Logo"}),r.a.createElement("div",{className:"login-wrap"},r.a.createElement(re,null)))},se=t(55),me=t(35),de=t(141),pe=t(142),fe=Object(a.createContext)({modal:{},changeState:function(){}});var be=function(e){var n=e.children,t=Object(a.useState)({}),c=Object(pe.a)(t,2),l=c[0],i=c[1],o=Object(a.useCallback)((function(e,n){i((function(t){return Object(de.a)({},t,Object(me.a)({},e,n))}))}),[]);return r.a.createElement(fe.Provider,{value:{modal:l,changeState:o}},n)};var ve=function(e){var n=Object(a.useContext)(fe),t=n.modal,r=n.changeState;return{isShow:!!t[e],close:Object(a.useCallback)((function(){r(e,!1)}),[r,e]),show:Object(a.useCallback)((function(){r(e,!0)}),[r,e])}};function he(){var e=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3000;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  & > .close {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n"]);return he=function(){return e},e}var ge=m.b.div(he()),Ee=function(e){var n=e.modalName,t=e.children,a=ve(n),c=a.isShow,l=a.close;return c?r.a.createElement(ge,null,r.a.createElement("div",{className:"close",onClick:l}),t&&t(l)):null};function xe(){var e=Object(s.a)(["\n    width: ",";\n    height: ",";\n    border-radius: ",";\n  "]);return xe=function(){return e},e}function je(){var e=Object(s.a)(["\n  ","\n  background: gray;\n"]);return je=function(){return e},e}var we=m.b.div(je(),(function(e){var n=e.size;return Object(m.a)(xe(),n||"76px",n||"76px",n||"38px")})),ke=function(e){var n=Object.assign({},e);return r.a.createElement(we,Object.assign({role:"img","aria-label":"profile"},n))};var Oe=function(){var e=Object(o.c)((function(e){return e.auth.accessToken}));return Object(a.useMemo)((function(){return _.a.create({baseURL:A,headers:{"x-access-token":e}})}),[e])},ye=t(24);var Ne=function(e){var n=e.id,t=e.select,a=void 0===t?"nickname":t,c=Oe(),l=Object(ye.a)(["username",n],(function(){return c.get("/user/"+n)})),i=l.data;return l.isLoading||!i?r.a.createElement(r.a.Fragment,null,"\ub85c\ub4dc \uc911..."):r.a.createElement(r.a.Fragment,null,i.data.data[a])};function Ce(){var e=Object(s.a)(["\n  background: white;\n  width: 50%;\n  max-width: 480px;\n  padding: 1.5em;\n  padding-top: 3em;\n\n  .profile {\n    display: flex;\n    color: black;\n    align-items: center;\n    .username {\n      margin: 0;\n      margin-left: 0.75em;\n    }\n  }\n  .menu-list {\n    margin-top: 2em;\n    .menu-item {\n      display: block;\n      padding: 1em;\n      color: black;\n      transition: background 0.5s;\n      border-radius: 8px;\n      :hover {\n        background: #eaeaea;\n        cursor: pointer;\n      }\n    }\n  }\n\n  @media screen and (max-width: ",") {\n    width: 70%;\n  }\n"]);return Ce=function(){return e},e}var Se=m.b.div(Ce(),d.small),Te=function(){var e=Object(o.c)((function(e){return e.auth.data||{_id:""}}))._id;return r.a.createElement(Ee,{modalName:"menu"},(function(){return r.a.createElement(Se,null,r.a.createElement(i.b,{to:"/profile",className:"profile"},r.a.createElement(ke,{size:"50px"}),r.a.createElement("h3",{className:"username"},r.a.createElement(Ne,{id:e}))),r.a.createElement("div",{className:"menu-list"},r.a.createElement(i.b,{to:"/write",className:"menu-item"},"\uc785\ucc30 \ub4f1\ub85d"),r.a.createElement(i.b,{to:"/bid",className:"menu-item"},"\uc785\ucc30 \ubcf4\uae30"),r.a.createElement(i.b,{to:"/",className:"menu-item"},"\ub514\uc790\uc778 \ubcf4\uae30"),r.a.createElement(i.b,{to:"/write-project",className:"menu-item"},"\ub0b4 \ud504\ub85c\uc81d\ud2b8 \uc5c5\ub85c\ub4dc")))}))};var ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,null))};function We(){var e=Object(s.a)(["\n  position: relative;\n\n  .button {\n    color: gray;\n    background: none;\n    border: 0;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 20px;\n\n    :active,\n    :focus {\n      outline: 0;\n    }\n  }\n"]);return We=function(){return e},e}var Be=m.b.form(We()),Le=function(){return r.a.createElement(Be,null,r.a.createElement(O,{fullWidth:!0,disabled:!0}),r.a.createElement("button",{className:"button",type:"submit"},r.a.createElement(se.b,null)))};function _e(){var e=Object(s.a)(["\n  padding-top: 24px;\n\n  > .header {\n    display: flex;\n    align-items: center;\n    > .left .logo {\n      display: block;\n      background: url(",") no-repeat;\n      background-size: 100%;\n      background-position: center;\n      width: 200px;\n      height: 60px;\n\n      @media screen and (max-width: ",") {\n        width: 100px;\n        height: 30px;\n      }\n    }\n    > .right {\n      flex: 1;\n      display: flex;\n      justify-content: flex-end;\n      * {\n        margin-right: 1em;\n        color: black;\n      }\n    }\n  }\n  > .menu-wrap {\n    margin-bottom: 1em;\n    margin-top: 1.5em;\n    margin-left: 24px;\n    .menu-button {\n      background: none;\n      border: 0;\n      font-size: 36px;\n      cursor: pointer;\n\n      :active,\n      :focus {\n        outline: 0;\n      }\n    }\n  }\n  > .search-wrap {\n    margin-top: 1em;\n  }\n"]);return _e=function(){return e},e}var Ae=Object(m.a)(_e(),le.a,d.small),Ie=function(e){var n=e.children,t=ve("menu"),a=P();return r.a.createElement(f,{css:Ae},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"left"},r.a.createElement(i.b,{to:"/"},r.a.createElement("div",{className:"logo",role:"img","aria-label":"logo"}))),r.a.createElement("div",{className:"right"},!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/login"},"\ub85c\uadf8\uc778"),r.a.createElement(i.b,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785")))),r.a.createElement("div",{className:"search-wrap"},r.a.createElement(Le,null)),r.a.createElement("div",{className:"menu-wrap"},r.a.createElement("button",{className:"menu-button",onClick:t.show},r.a.createElement(se.a,null))),r.a.createElement("article",{className:"main"},n),r.a.createElement(ze,null))};function Fe(){var e=Object(s.a)(["\n  width: 300px;\n  @media screen and (max-width: 829px) {\n    width: 100%;\n  }\n"]);return Fe=function(){return e},e}function Ve(){var e=Object(s.a)(["\n  background: url(",") no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 8px;\n  height: 300px;\n\n  @media screen and (max-width: ",") {\n    height: 200px;\n  }\n"]);return Ve=function(){return e},e}var qe=m.b.div(Ve(),(function(e){return e.image}),d.small),Ze=Object(m.b)(i.b)(Fe()),Ue=function(e){var n=e._id,t=e.title,a=e.image;return r.a.createElement(Ze,{to:"/project/"+n,style:{display:"block"}},r.a.createElement(qe,{image:a,role:"img","aria-label":t}))};function Je(){var e=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n\n  & > * {\n    margin: 1em;\n  }\n"]);return Je=function(){return e},e}var Me=m.b.div(Je()),Pe=function(e){var n=e.query,t=Oe(),a=Object(ye.a)("arts",(function(){return t.get("/work?limit=20"+(n?"&"+n:""))})),c=a.data,l=a.isLoading,i=a.error;return i?r.a.createElement("div",null,"Error: ",i):l?r.a.createElement("div",null,"Loading..."):r.a.createElement(Me,null,c&&c.data.data.map((function(e){return r.a.createElement(Ue,Object.assign({key:e._id},e))})))};var Re=function(){return r.a.createElement(Ie,null,r.a.createElement(Pe,null))};function $e(){var e=Object(s.a)(["\n        width: 100%;\n      "]);return $e=function(){return e},e}function De(){var e=Object(s.a)(["\n        display: block;\n      "]);return De=function(){return e},e}function Ge(){var e=Object(s.a)(["\n      box-shadow: 2px 2px 5px -1px ",";\n    "]);return Ge=function(){return e},e}function He(){var e=Object(s.a)(["\n  border: 0;\n  padding: 1em 1.5em;\n  background: #f2f2f2;\n  box-sizing: border-box;\n  border-radius: 1em;\n  ","\n    ","\n    ","\n  :focus {\n    outline: 0;\n  }\n"]);return He=function(){return e},e}var Ke=m.b.textarea(He(),(function(e){var n=e.shadow;return n&&Object(m.a)(Ge(),"string"===typeof n?n:"#f2f2f2")}),(function(e){var n=e.fullWidth,t=e.block;return(n||t)&&Object(m.a)(De())}),(function(e){return e.fullWidth&&Object(m.a)($e())}));function Qe(){var e=Object(s.a)(["\n  > .contents,\n  > .price-and-submit {\n    margin-top: 1.5em;\n  }\n  > .price-and-submit {\n    display: flex;\n    button {\n      margin-left: 1em;\n    }\n  }\n  > .letter {\n    margin-top: 1em;\n  }\n"]);return Qe=function(){return e},e}var Xe={title:"",letter:"",details:"",price:""};var Ye=m.b.form(Qe()),en=function(){var e=Oe(),n=Object(u.f)(),t=Object(a.useCallback)(function(){var t=Object(h.a)(v.a.mark((function t(a,r){var c,l,i,o,u,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a.title,l=a.price,i=a.details,o=a.letter,c&&l&&i&&o){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,e.post("/bid",{title:c,description:i,price:l,phrase:o});case 6:u=t.sent,s=u.data.data._id,n.push("/bid/"+s),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),console.error(t.t0),alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e,n){return t.apply(this,arguments)}}(),[e,n]);return r.a.createElement(g.a,{initialValues:Xe,onSubmit:t},(function(e){var n=e.isSubmitting,t=e.values,a=e.handleSubmit,c=e.handleBlur,l=e.handleChange;return r.a.createElement(Ye,{onSubmit:a},r.a.createElement("div",{className:"title-wrap"},r.a.createElement(O,{name:"title",value:t.title,onChange:l,onBlur:c,placeholder:"\uc785\ucc30\uc81c\ubaa9",fullWidth:!0})),r.a.createElement("div",{className:"letter"},r.a.createElement(O,{name:"letter",value:t.letter,onChange:l,onBlur:c,placeholder:"\uc4f8 \uae00\uc528",fullWidth:!0})),r.a.createElement("div",{className:"contents"},r.a.createElement(Ke,{name:"details",value:t.details,onChange:l,onBlur:c,placeholder:"\uc138\ubd80\uc0ac\ud56d",rows:20,fullWidth:!0})),r.a.createElement("div",{className:"price-and-submit"},r.a.createElement(O,{name:"price",value:t.price,onChange:l,onBlur:c,placeholder:"\ud76c\ub9dd\uac00",style:{flex:1}}),r.a.createElement(B,{disabled:n},"\uc785\ucc30")))}))};var nn=function(){return r.a.createElement(Ie,null,r.a.createElement("h1",null,"\uc785\ucc30 \ub4f1\ub85d"),r.a.createElement(en,null))};function tn(){var e=Object(s.a)(["\n  width: 200px;\n  margin: 1em;\n  padding: 1em;\n  background: #f2f2f2;\n  border-radius: 0.5em;\n\n  .price {\n    font-weight: bold;\n    font-size: 1.25em;\n    margin-bottom: 1rem;\n  }\n"]);return tn=function(){return e},e}var an=m.b.div(tn()),rn=function(e){var n=e.title,t=e.description,a=e.price,c=e._id,l=Object(u.f)();return r.a.createElement(an,null,r.a.createElement("h1",{className:"title"},n),r.a.createElement("p",{className:"detail"},t," "),r.a.createElement("div",{className:"price"},"\ud76c\ub9dd\uac00 ",a,"\uc6d0"),r.a.createElement("div",{className:"button"},r.a.createElement(B,{className:"bid-button",fullWidth:!0,onClick:function(){return l.push("/bid/"+c)}},"\uc785\ucc30 \ucc38\uac00")))};function cn(){var e=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return cn=function(){return e},e}var ln=m.b.div(cn()),on=function(e){var n=e.query,t=Object(ye.a)("bid_list",(function(){return F.get("/bid?limit=20"+(n?"&"+n:""))})),a=t.data;if(t.isLoading||!a)return r.a.createElement("div",null,"Loading...");var c=a.data.data;return r.a.createElement(ln,null,c.map((function(e){return r.a.createElement(rn,Object.assign({key:e._id},e))})))};var un=function(){return r.a.createElement(Ie,null,r.a.createElement(on,null))};function sn(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  .info {\n    margin-left: 1em;\n  }\n"]);return sn=function(){return e},e}var mn=m.b.div(sn()),dn=function(){var e=Object(o.c)((function(e){return e.auth.data||{_id:""}}))._id;return r.a.createElement(mn,null,r.a.createElement("div",{className:"image"},r.a.createElement(ke,{size:"120px"})),r.a.createElement("div",{className:"info"},r.a.createElement("h1",{className:"name"},r.a.createElement(Ne,{id:e})),r.a.createElement("p",{className:"introduce"},"Pariatur commodo et elit mollit ut Lorem sit ea cupidatat. Excepteur ullamco id deserunt fugiat ea cupidatat. Esse in commodo ad amet pariatur. Consequat in in ex nisi nisi in laboris nulla id.")))};var pn=function(){var e=Object(o.c)((function(e){var n;return(null===(n=e.auth.data)||void 0===n?void 0:n._id)||""}));return r.a.createElement(Ie,null,r.a.createElement(dn,null),r.a.createElement("div",{style:{marginTop:"3em"}},r.a.createElement(Pe,{query:"author="+e})),r.a.createElement("div",{style:{marginTop:"3em"}},r.a.createElement(on,{query:"author="+e})))};function fn(){var e=Object(s.a)(["\n  .details,\n  .file {\n    margin-top: 1em;\n  }\n"]);return fn=function(){return e},e}var bn={title:"",details:"",image:null};var vn=m.b.form(fn()),hn=function(){var e=Object(u.f)(),n=Oe(),t=Object(a.useCallback)(function(){var t=Object(h.a)(v.a.mark((function t(a,r){var c,l,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.title&&a.image&&a.details){t.next=2;break}return t.abrupt("return");case 2:return(c=new FormData).append("title",a.title),c.append("description",a.details),c.append("image",a.image),t.prev=6,t.next=9,n.post("/work",c);case 9:l=t.sent,i=l.data.data._id,e.push("/project/"+i),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),console.error(t.t0),alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 18:case"end":return t.stop()}}),t,null,[[6,14]])})));return function(e,n){return t.apply(this,arguments)}}(),[n,e]);return r.a.createElement(g.a,{initialValues:bn,onSubmit:t},(function(e){var n=e.isSubmitting,t=e.values,a=e.setFieldValue,c=e.handleSubmit,l=e.handleBlur,i=e.handleChange;return r.a.createElement(vn,{onSubmit:c},r.a.createElement("div",{className:"title-wrap"},r.a.createElement(O,{name:"title",value:t.title,onChange:i,onBlur:l,placeholder:"\ub0b4 \ud504\ub85c\uc81d\ud2b8 \uc81c\ubaa9",fullWidth:!0})),r.a.createElement("div",{className:"file"},r.a.createElement("input",{type:"file",name:"image",onChange:function(e){return e.currentTarget.files&&a("image",e.currentTarget.files[0])},accept:"image/*"})),r.a.createElement("div",{className:"details"},r.a.createElement(Ke,{name:"details",value:t.details,onChange:i,onBlur:l,placeholder:"\uc138\ubd80\uc0ac\ud56d",rows:20,fullWidth:!0})),r.a.createElement("div",{className:"submit"},r.a.createElement(B,{disabled:n},"\uc800\uc7a5")))}))};var gn=function(){return r.a.createElement(Ie,null,r.a.createElement("h1",null,"\ub0b4 \ud504\ub85c\uc81d\ud2b8 \uc5c5\ub85c\ub4dc"),r.a.createElement(hn,null))};function En(){var e=Object(s.a)(["\n  .image {\n    img {\n      width: 100%;\n      height: auto;\n    }\n  }\n"]);return En=function(){return e},e}var xn=m.b.section(En()),jn=function(e){var n=e.match.params.id,t=Oe(),a=Object(ye.a)(["project",n],(function(){return t.get("/work/"+n)})),c=a.data,l=a.error;if(a.isLoading||!c)return r.a.createElement("div",null,"Loading...");if(l)return r.a.createElement("div",null,"Error: ",l);var i=c.data.data,o=i.title,u=i.image,s=i.description;return r.a.createElement(Ie,null,r.a.createElement(xn,null,r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:u,alt:o})),r.a.createElement("div",{className:"info"},r.a.createElement("h1",{className:"title"},o),r.a.createElement("div",{className:"description"},s))),r.a.createElement(Pe,null))};function wn(){var e=Object(s.a)(["\n  .user-item {\n    padding: 1em;\n  }\n"]);return wn=function(){return e},e}var kn=m.b.div(wn()),On=function(e){var n=e.id,t=e.users,a=e.refetch,c=Oe();return r.a.createElement(kn,null,t.map((function(e){return r.a.createElement("div",{className:"user-item",key:e},r.a.createElement(Ne,{id:e}),r.a.createElement(B,{style:{marginLeft:8},onClick:(t=e,Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.patch("/bid/"+n,{worker:t});case 3:a(),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))))},"\ub099\ucc30"));var t})),t.length<1&&"\uc544\uc9c1 \uc785\ucc30\ud55c \uc720\uc800\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")};var yn=function(e){var n=e.id,t=e.refetch,a=e.participant,c=e.user,l=Object(o.c)((function(e){return e.auth.data||{_id:null}}))._id,i=Oe(),u=l&&a.map((function(e){return e===l})).reduce((function(e,n){return e||n}),!1),s=c===l;function m(){return(m=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.post("/bid/participate/"+n);case 3:t(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var d=u?"\uc774\ubbf8 \ucc38\uc5ec\ud558\uc168\uc2b5\ub2c8\ub2e4.":r.a.createElement(B,{onClick:function(){return m.apply(this,arguments)}},"\uc785\ucc30 \ucc38\uc5ec\ud558\uae30"),p=r.a.createElement(On,{users:a,id:n,refetch:t});return r.a.createElement("div",{className:"bid-actions"},s?p:d)};function Nn(){var e=Object(s.a)(["\n  display: flex;\n  .info {\n    flex: 1;\n  }\n\n  @media screen and (max-width: ",") {\n    flex-direction: column;\n  }\n"]);return Nn=function(){return e},e}var Cn=m.b.div(Nn(),d.small),Sn=function(e){var n=e.match.params.id,t=Oe(),a=Object(ye.a)(["bid",n],(function(){return t.get("/bid/"+n)})),c=a.data,l=a.isLoading,i=a.isError,o=a.error,u=a.refetch;if(i)return r.a.createElement("div",null,"Error: ",o);if(l||!c)return r.a.createElement("div",null,"Loading");var s=c.data.data,m=s.title,d=s.description,p=s.price,f=s.phrase,b=s.selectedUser,v=s.status;return r.a.createElement(Ie,null,"resolved"===v&&b?r.a.createElement(Cn,null,r.a.createElement("p",null,"\ub2f9\uc2e0\uc740 \uc774\uc81c ",r.a.createElement(Ne,{id:b})," \ub2d8\uacfc \ud611\ub825\ud560 \uc900\ube44\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),r.a.createElement("p",null,"\uc774\uba54\uc77c: ",r.a.createElement(Ne,{id:b,select:"userid"}))):r.a.createElement(Cn,null,r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,m),r.a.createElement("h3",null,f),r.a.createElement("div",null,d),r.a.createElement("p",null,p)),r.a.createElement(yn,Object.assign({},c.data.data,{refetch:u,id:n}))))};var Tn=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:Re,exact:!0}),r.a.createElement(u.a,{path:"/login",component:ue,exact:!0}),r.a.createElement(u.a,{path:"/signup",component:D,exact:!0}),r.a.createElement(u.a,{path:"/write",component:nn,exact:!0}),r.a.createElement(u.a,{path:"/bid",component:un,exact:!0}),r.a.createElement(u.a,{path:"/profile",component:pn,exact:!0}),r.a.createElement(u.a,{path:"/write-project",component:gn,exact:!0}),r.a.createElement(u.a,{path:"/project/:id",component:jn,exact:!0}),r.a.createElement(u.a,{path:"/bid/:id",component:Sn,exact:!0}))};var zn=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Tn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Wn=t(15),Bn=Object(Wn.c)(Object(me.a)({},ee.name,ee.reducer)),Ln=Object(K.a)({reducer:Bn});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:Ln},r.a.createElement(be,null,r.a.createElement(i.a,null,r.a.createElement(zn,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,n,t){e.exports=t.p+"static/media/logo.40741e13.png"}},[[144,1,2]]]);
//# sourceMappingURL=main.f27cf8f3.chunk.js.map