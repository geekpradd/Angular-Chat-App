(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"5zjZ":function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var o=t("pMnS"),s=t("MKJQ"),r=t("sZkV"),i=t("SVse"),a=t("s7LF"),b=t("U0XV"),h=t("AytR"),c=t("IheW");let p=(()=>{class l{constructor(l,n){this.http=l,this.userService=n,this.url=h.a.URL+"/chats/",this.urlSend=h.a.URL+"/updatechat/"}setChatPerson(l){this.person2=l,this.person1=this.userService.getName()}getMessagesHttp(){return this.http.get(this.url+this.person1+"/"+this.person2)}sendMessage(l){this.http.post(this.urlSend+this.person1+"/"+this.person2,{sender:this.person1,message:l}).subscribe()}}return l.ngInjectableDef=e.Kb({factory:function(){return new l(e.Lb(c.c),e.Lb(b.a))},token:l,providedIn:"root"}),l})();var g=t("l5mm");class d{constructor(l,n,t,e){this.route=l,this.chatService=n,this.userService=t,this.router=e,this.source=Object(g.a)(1e3)}ngOnInit(){""===this.userService.getName()&&this.router.navigateByUrl("/sign-in"),this.other=this.route.snapshot.paramMap.get("user"),this.chatService.setChatPerson(this.other),this.updateChats(),this.subscription=this.source.subscribe(l=>this.updateChats())}send(){this.chatService.sendMessage(this.chatText),this.chatText=""}updateChats(){this.chatService.getMessagesHttp().subscribe(l=>{this.chats=l.chats,console.log(this.chats),Array.isArray(this.chats)&&this.chats.length&&(this.messages=JSON.parse(this.chats[0].chat))})}}var x=t("iInd"),f=e.nb({encapsulation:0,styles:[['@charset "UTF-8";bubble[_ngcontent-%COMP%]{background-color:#f2f2f2;border-radius:5px;box-shadow:0 0 6px #b2b2b2;display:inline-block;padding:10px 18px;position:relative;vertical-align:top}.bubble[_ngcontent-%COMP%]::before{background-color:#f2f2f2;content:"\xa0";display:block;height:16px;position:absolute;top:11px;transform:rotate(29deg) skew(-35deg);-moz-transform:rotate(29deg) skew(-35deg);-ms-transform:rotate(29deg) skew(-35deg);-o-transform:rotate(29deg) skew(-35deg);-webkit-transform:rotate(29deg) skew(-35deg);width:20px}.me[_ngcontent-%COMP%]{float:left;margin:5px 45px 5px 20px}.me[_ngcontent-%COMP%]::before{box-shadow:-2px 2px 2px 0 rgba(178,178,178,.4);left:-9px}.you[_ngcontent-%COMP%]{float:right;margin:5px 20px 5px 45px}.you[_ngcontent-%COMP%]::before{box-shadow:2px -2px 2px 0 rgba(178,178,178,.4);right:-9px}']],data:{}});function m(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,4,"ion-item",[["lines","none"],["routerDirection","root"]],null,null,null,s.G,s.l)),e.ob(1,49152,null,0,r.E,[e.h,e.k,e.x],{lines:[0,"lines"],routerDirection:[1,"routerDirection"]},null),(l()(),e.pb(2,0,null,0,2,"ion-label",[],null,null,null,s.H,s.m)),e.ob(3,49152,null,0,r.K,[e.h,e.k,e.x],null,null),(l()(),e.Fb(4,0,[""," : ",""]))],(function(l,n){l(n,1,0,"none","root")}),(function(l,n){l(n,4,0,n.context.$implicit.sender,n.context.$implicit.message)}))}function y(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,s.D,s.i)),e.ob(1,49152,null,0,r.y,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,s.P,s.u)),e.ob(3,49152,null,0,r.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.x,s.c)),e.ob(5,49152,null,0,r.i,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,s.K,s.q)),e.ob(7,49152,null,0,r.O,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,s.O,s.t)),e.ob(9,49152,null,0,r.ub,[e.h,e.k,e.x],null,null),(l()(),e.Fb(10,0,["Chat with ",""])),(l()(),e.pb(11,0,null,null,28,"ion-content",[],null,null,null,s.C,s.h)),e.ob(12,49152,null,0,r.r,[e.h,e.k,e.x],null,null),(l()(),e.pb(13,0,null,0,26,"ion-card",[],null,null,null,s.B,s.d)),e.ob(14,49152,null,0,r.j,[e.h,e.k,e.x],null,null),(l()(),e.pb(15,0,null,0,24,"ion-card-content",[],null,null,null,s.y,s.e)),e.ob(16,49152,null,0,r.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(17,0,null,0,22,"ion-list",[["id","labels-list"]],null,null,null,s.J,s.n)),e.ob(18,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,m)),e.ob(20,278528,null,0,i.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(21,0,null,0,13,"ion-item",[],null,null,null,s.G,s.l)),e.ob(22,49152,null,0,r.E,[e.h,e.k,e.x],null,null),(l()(),e.pb(23,0,null,0,2,"ion-label",[["floating",""]],null,null,null,s.H,s.m)),e.ob(24,49152,null,0,r.K,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,["Message: "])),(l()(),e.pb(26,0,null,0,8,"ion-input",[["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==e.Ab(l,29)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Ab(l,29)._handleInputEvent(t.target)&&u),"ngModelChange"===n&&(u=!1!==(o.chatText=t)&&u),u}),s.F,s.k)),e.ob(27,16384,null,0,a.g,[],{required:[0,"required"]},null),e.Cb(1024,null,a.b,(function(l){return[l]}),[a.g]),e.ob(29,16384,null,0,r.Fb,[e.k],null,null),e.Cb(1024,null,a.c,(function(l){return[l]}),[r.Fb]),e.ob(31,671744,null,0,a.f,[[8,null],[6,a.b],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,a.d,null,[a.f]),e.ob(33,16384,null,0,a.e,[[4,a.d]],null,null),e.ob(34,49152,null,0,r.D,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),(l()(),e.pb(35,0,null,0,4,"ion-item",[],null,null,null,s.G,s.l)),e.ob(36,49152,null,0,r.E,[e.h,e.k,e.x],null,null),(l()(),e.pb(37,0,null,0,2,"ion-button",[["color","secondary"],["full",""],["round",""],["type","submit"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.send()&&e),e}),s.w,s.b)),e.ob(38,49152,null,0,r.h,[e.h,e.k,e.x],{color:[0,"color"],type:[1,"type"]},null),(l()(),e.Fb(-1,0,["Send"]))],(function(l,n){var t=n.component;l(n,1,0,!0),l(n,20,0,t.messages),l(n,27,0,""),l(n,31,0,t.chatText),l(n,34,0,"","text"),l(n,38,0,"secondary","submit")}),(function(l,n){l(n,10,0,n.component.other),l(n,26,0,e.Ab(n,27).required?"":null,e.Ab(n,33).ngClassUntouched,e.Ab(n,33).ngClassTouched,e.Ab(n,33).ngClassPristine,e.Ab(n,33).ngClassDirty,e.Ab(n,33).ngClassValid,e.Ab(n,33).ngClassInvalid,e.Ab(n,33).ngClassPending)}))}function k(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"app-chat",[],null,null,null,y,f)),e.ob(1,114688,null,0,d,[x.a,p,b.a,x.m],null,null)],(function(l,n){l(n,1,0)}),null)}var C=e.lb("app-chat",d,k,{},{},[]);class v{}t.d(n,"ChatPageModuleNgFactory",(function(){return w}));var w=e.mb(u,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[o.a,C]],[3,e.j],e.v]),e.yb(4608,i.j,i.i,[e.s,[2,i.p]]),e.yb(4608,a.i,a.i,[]),e.yb(4608,r.a,r.a,[e.x,e.g]),e.yb(4608,r.Ab,r.Ab,[r.a,e.j,e.p]),e.yb(4608,r.Db,r.Db,[r.a,e.j,e.p]),e.yb(1073742336,i.b,i.b,[]),e.yb(1073742336,a.h,a.h,[]),e.yb(1073742336,a.a,a.a,[]),e.yb(1073742336,r.yb,r.yb,[]),e.yb(1073742336,x.p,x.p,[[2,x.u],[2,x.m]]),e.yb(1073742336,v,v,[]),e.yb(1073742336,u,u,[]),e.yb(1024,x.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);