webpackJsonp([1],{"/E9C":function(t,s){},"1ml/":function(t,s){},DvFk:function(t,s){},JYTy:function(t,s,e){t.exports=e.p+"static/img/p4-b-text.png"},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("lHA8"),a=e.n(n),o=e("c/Tr"),i=e.n(o),r=e("7+uW"),c=e("mvHQ"),l=e.n(c),m={name:"Index",data:function(){return{config:{page:"fadeIn animated",btn:"fadeInLeft animated"}}},props:["opts"],methods:{toP:function(){console.log("我点击了"),this.$emit("next-to",1),console.log(this)}},mounted:function(){var t=this;t.opts.ani(t),this.$watch("isShow",function(s,e){s?t.opts.ani(t):t.opts.kill(t)})}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{ref:"page",staticClass:"p1"},[s("div",{staticClass:"p1-con"},[s("number",{staticClass:"numb"}),this._v(" "),s("div",{ref:"btn",staticClass:"start",on:{click:this.toP}})],1),this._v(" "),s("span",{staticClass:"ll"})])},staticRenderFns:[]};var p,d=e("VU/8")(m,u,!1,function(t){e("DvFk")},"data-v-7cf5da31",null).exports,f=e("bOdI"),h=e.n(f),v=(p={name:"Info",props:["isShow","opts"],data:function(){return{form:{name:"",school:""},config:{page:"fadeIn animated"}}}},h()(p,"props",["isShow","opts"]),h()(p,"methods",{to:function(){console.log(this),this.form.name?this.form.school?this.$emit("next-to",2,this.form):this.$msg("请输入您的毕业院校！"):this.$msg("请输入您的名字！")}}),h()(p,"mounted",function(){var t=this;this.$watch("isShow",function(s,e){s?t.opts.ani(t):t.opts.kill(t)})}),p),g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"page",staticClass:"item"},[e("div",{staticClass:"p2-con"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text",name:"name",autocomplete:"true"},domProps:{value:t.form.name},on:{input:function(s){s.target.composing||t.$set(t.form,"name",s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.school,expression:"form.school"}],attrs:{type:"text",name:"school",autocomplete:"true"},domProps:{value:t.form.school},on:{input:function(s){s.target.composing||t.$set(t.form,"school",s.target.value)}}}),t._v(" "),e("number",{staticClass:"nmb1",attrs:{ani:!0}}),t._v(" "),e("div",{ref:"btn",staticClass:"goon",on:{click:t.to}})],1)])},staticRenderFns:[]};var w=e("VU/8")(v,g,!1,function(t){e("1ml/")},"data-v-3290b684",null).exports,C=e("Gu7T"),b=e.n(C),_={rules:[{job:"北京分校校长",des:"你有天生的领导者，很快能看到公司/组织程序和政策重的不合理性和低效能性，发展并实施有效和全面的系统来解决问题。善于做长期的计划和目标的设定。"},{job:"双师业务部总监",des:"你才思敏捷，认为人生有多种可能性，能够很快将事情和信息联系起来。有你的团队会充满凝聚力，你带领下的工作会是高效有序。"},{job:"AI Lab运营总监",des:"你喜欢理论性和抽象的事物，对于自己感兴趣的领域有超凡的集中精力深度解决问题的能力。缜密的理性思维配合超前的想象力帮助你实现自己的理想。"},{job:"战略发展部负责人",des:"你理性而又逻辑性强。你具有很强的前瞻性，在繁杂浮躁的世界里，你的统筹规划能力使你生活得有条不紊，一帆风顺。"},{job:"选培部总监",des:"你的性格热情外向，活泼好动。喜欢结交朋友，热情、为他人着想、有责任行。善于组织活动，在团体中能很好地帮助他人。能出色的完成工作任务。"},{job:"学科部经理",des:"你适合团队协作，也能够独当一面。你擅长处理各种复杂的工作任务，有问题就会马上行动，找到实用的解决方法，重视效率。"},{job:"品牌管理部负责人",des:"你是团队的领导者，具有敏锐的洞察力，大胆的创新力，超强的抗压力，以及良好的口才和文字表达力。"},{job:"SSS级教师",des:"你独立冷静，热情开朗，耐心细致，具有良好的表达能力，灵活、自然不做作，有很强的即兴发挥能力，言语流畅，三尺讲台上会展现你的英姿飒爽。"},{job:"教学部经理",des:"你重感情、爱生活。希望周边的环境温馨而和谐，并为此果断地执行。善于协调团队间的各项工作分配。在实施计划时强而有力。"}],data:[{code:1,timu:"你最擅长的技能",item:[{str:"唱歌"},{str:"演讲"},{str:"编程"},{str:"绘画（图）"},{str:"外语"},{str:"社交"},{str:"办公软件"}]},{code:2,timu:"你最擅长哪类游戏",item:[{str:"CS等射击游戏",score:[0,0,0,0,0,10,5,2,0]},{str:"英雄联盟等配合游戏",score:[5,0,0,10,0,0,0,0,0]},{str:"开心消消乐等益智游戏",score:[0,5,0,0,2,0,0,5,0]},{str:"狼人杀等桌牌游戏",score:[0,0,10,0,0,0,0,0,5]}]},{code:3,timu:"你经常会说的词语/句子（性格类）",item:[{str:"应该这样/不应该这样",score:[10,0,0,0,0,0,0,5,0]},{str:"不要紧，没问题",score:[0,0,2,0,0,2,10,0,0]},{str:"保证/最/超级",score:[0,0,0,5,0,0,5,0,0]},{str:"惯性保持沉默",score:[0,0,0,0,0,0,0,0,0]},{str:"我想/我认为",score:[2,2,0,2,0,0,0,0,0]},{str:"我告诉你/看我的",score:[0,10,0,0,5,0,0,0,5]}]},{code:4,timu:"在工作中，你喜欢的工作形式",item:[{str:"独自完成一项工作后在开始下一项工作",score:[2,0,2,5,2,2,0,10,0]},{str:"独自同时开展多项工作",score:[10,2,0,10,5,5,5,0,5]},{str:"吸取他人经验或意见后独自完成",score:[5,10,0,5,0,0,2,5,5]},{str:"团队共同完成一项工作",score:[0,5,5,0,10,10,10,5,10]}]},{code:5,timu:"你最喜欢的工作状态",item:[{str:"坐在办公室，处理日常任务",score:[5,0,2,0,0,0,0,0,0]},{str:"飞来飞去，与客户洽谈拓展业务",score:[0,5,0,0,10,10,2,0,0]},{str:"稿纸满天飞，攻克技术难关",score:[0,0,10,0,0,0,0,0,5]},{str:"自由职业，轻松自由",score:[0,0,0,5,0,2,0,5,0]}]},{code:6,timu:"你曾做过以下哪些经历或类似经历",item:[{str:"独自一人去川藏线骑行/编写过一本书/B站视频UP主",score:[0,0,10,2,0,0,0,0,0]},{str:"带领团队组织过一场500人以上的晚会 ",score:[5,5,0,0,0,0,0,0,0]},{str:"帮助学院拉到校外企业2000元以上的赞助",score:[0,0,0,0,10,0,5,0,0]},{str:"参加全国大学生计算机竞赛/物理竞赛/体操比赛并获奖",score:[0,0,0,0,0,0,0,10,10]},{str:"不爱搞事情,就是喜欢一个人享受安静时光",score:[0,0,0,0,0,5,0,0,0]}]},{code:7,timu:"如果都能顺利通过，你会选择接受下面哪份工作",item:[{str:"能坐冷板凳，一心科研，国家航天发射中心技术员"},{str:"善于沟通，乐于奔走，北京电视台记者"},{str:"富有创意，热爱艺术，动漫公司美术编辑"},{str:"敢于担当，擅长策划，BAT公司产品经理"}]},{code:8,timu:"你觉得你是个什么样的人",item:[{str:"自我管理能力强，喜欢推理，擅长辩论"},{str:"喜欢一个人做事情，有自己的思维和想法"},{str:"偏向于出头露面、组织活动和社交活动"},{str:"思维缜密，喜欢做事情前将事情发展的所有可能考虑清楚"}]},{code:9,timu:"如果你跟同学在某课题项目上产生了分歧你会",item:[{str:"认定自己的观点喋喋不休"},{str:"什么话都不说，保持沉默"},{str:"会主动退让听取他人的意见"},{str:"冷静下来，分析双方观点后再做讨论"}]},{code:10,timu:"一年后对自己的期望年薪",item:[{str:"15W-20W"},{str:"20W-25W"},{str:"25W-30W"},{str:"30W以上"}]}]};function x(t){var s=document.getElementsByClassName("loadding"),e=document.getElementsByTagName("body")[0];if(s.length>0&&e.removeChild(s[0]),0==t)return!1;var n=document.createElement("DIV");n.className="loadding",n.innerHTML="<i></i><p>loading···</p>",e.appendChild(n)}var N={name:"Game",data:function(){return{count:1,gameData:_,className:"",lock:!1,btnshow:!1,maxi:0,pd:_.data[0],report:[0,0,0,0,0,0,0,0,0],zimu:["A","B","C","D","E","F","G","H","I","G"],zhnum:["一","二","三","四","五","六","七","八","九","十"],ennum:["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth"],config:{page:"fadeIn animated"}}},props:["isShow","opts"],methods:{toR:function(){this.$emit("next-to",3,null,this.maxi)},nextI:function(t){if(!this.lock){var s=this;s.lock=!0;var e=s.count+1,n=[].concat(b()(s.$refs.tList.getElementsByTagName("li")));if(n.filter(function(t){t.className=""}),n[t].className="active",e>s.gameData.data.length){var a=0,o=0;return s.report.filter(function(t,s){t>a&&(a=t,o=s)}),this.maxi=o,void(this.btnshow=!0)}var i=s.count-1;if(s.gameData.data[i].item[t].score){var r=[];s.gameData.data[i].item[t].score.filter(function(t,e){r.push(s.report[e]+t)}),s.report=r}window.setTimeout(function(){n.filter(function(t){t.className=""}),s.count=e,s.pd=s.gameData.data[e-1],s.lock=!1},800)}}},beforeMount:function(){},mounted:function(){var t=this;this.$watch("isShow",function(s,e){s?t.opts.ani(t):t.opts.kill(t)})}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"page",staticClass:"item"},[e("div",{ref:"con",staticClass:"p3-con"},[e("div",{staticClass:"con-box"},[e("h3",{staticClass:"tt"},[t._v("第"+t._s(t.zhnum[t.count-1])+"题")]),t._v(" "),e("p",{staticClass:"entt"},[t._v("THE "+t._s(t.ennum[t.count-1].toUpperCase())+" QUESTION")]),t._v(" "),e("p",{staticClass:"timu"},[t._v(t._s(""+t.pd.timu))]),t._v(" "),e("ul",{ref:"tList",staticClass:"ti-item"},t._l(t.pd.item,function(s,n){return e("li",{key:n,attrs:{className:t.className},on:{click:function(s){t.nextI(n)}}},[e("span",{staticClass:"code"},[t._v(t._s(t.zimu[n])+".")]),t._v(" "),e("span",{staticClass:"i-co"},[t._v(t._s(s.str))])])}))]),t._v(" "),e("div",{staticClass:"p3-b"},[e("number",{staticClass:"nbn",attrs:{ani:!0}})],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.btnshow,expression:"btnshow"}],staticClass:"btn",on:{click:t.toR}})])},staticRenderFns:[]};var $=e("VU/8")(N,y,!1,function(t){e("X8CF")},"data-v-4584cb67",null).exports,T=e("JYTy"),j=e.n(T),E=e("71e1"),S=e.n(E),I={name:"Result",data:function(){return{img:j.a,resultData:{name:"",school:""},descripe:_.rules[0].des,job:_.rules[0].job,config:{page:"fadeIn animated"}}},props:["isShow","opts","info","report","init"],methods:{toP:function(){this.spw.slideTo(1,800)},linkto:function(){window.location.href="https://jinshuju.net/f/gn1mYs"},save:function(){var t=this.$refs.all,s=this.$refs.rimg;t.style.opacity=1,this.$html2canvas(t).then(function(t){var e=t.toDataURL(1);s.src=e,s.style.opacity=1})}},mounted:function(){var t=this;t.opts.ani(t);var s=location.pathname.split("/"),e=location.origin+s.slice(0,s.length-1).join("/");S.a.toCanvas(t.$refs.cas,e,function(t){t&&console.error(t),console.log("success!")}),this.$watch("isShow",function(s,e){if(s){if(t.resultData=t.info,t.descripe=_.rules[t.report].des,t.job=_.rules[t.report].job,t.opts.ani(t),t.save(),t.info&&t.info.name&&window.gxrWxShare&&window.wxShareStart){var n=window.gxrWxShare;n.source.desc="万万没想到，"+t.resultData.name+"五年后将成为"+t.job+"，快来测一测你会是什么职位吧？";var a=location.pathname.split("/"),o=location.origin+a.slice(0,a.length-1).join("/");n.source.desc.url=window.decodeURI(o+"/index.php?name=_this.resultData.name&report="+t.report),window.wxShareStart(n)}}else t.opts.kill(t)})}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"page",staticClass:"p4",attrs:{id:"item01"}},[e("div",{ref:"all",staticClass:"get"},[e("div",{ref:"con",staticClass:"p4-con"},[e("h3",{staticClass:"tt"},[t._v("测试结果")]),t._v(" "),e("h3",{staticClass:"entt"},[t._v("TEST RESULT")]),t._v(" "),e("p",{staticClass:"uname"},[e("span",{staticClass:"em"},[t._v(t._s(t.resultData.name)+" ")]),t._v("将在五年后成为学而思")]),t._v(" "),e("p",{staticClass:"rr"},[e("span",{staticClass:"job"},[t._v(t._s(t.job))])]),t._v(" "),e("p",{staticClass:"des"},[t._v(t._s(t.descripe))]),t._v(" "),e("img",{staticClass:"bgbg",attrs:{src:t.img}}),t._v(" "),e("div",{staticClass:"qrcode"},[e("canvas",{ref:"cas",staticClass:"canvas"})])]),t._v(" "),e("img",{ref:"rimg",staticClass:"getimg"})]),t._v(" "),e("div",{ref:"join",staticClass:"p4-b"},[e("div",{staticClass:"btn",on:{click:t.linkto}}),t._v(" "),e("div",{staticClass:"ts"})])])},staticRenderFns:[]};var D={name:"App",data:function(){return{shows:[!0,!1,!1,!1],appSwiper:null,form:null,report:0,initfirst:!1,opts:{ani:function(t){var s=t.config;setTimeout(function(){for(var e in s)t.$refs[e].className+=" "+s[e]},5)},kill:function(t){var s=t.config,e=function(e){var n=t.$refs[e],a=n.className;s[e].split(" ").filter(function(t){a=a.replace(" "+t,"")}),n.className=a};for(var n in s)e(n)}}}},methods:{to:function(t,s,e){console.log(t);for(var n=[],a=0;a<4;a++)t==a?n.push(!0):n.push(!1);s&&s.name&&s.school&&(this.form=JSON.parse(l()(s))),e&&(this.report=e),this.shows=n}},mutations:{},components:{index:d,info:w,game:$,result:e("VU/8")(I,k,!1,function(t){e("/E9C")},"data-v-400b04ec",null).exports},mounted:function(){var t=window.location.search;this.$refs.app.className="";var s=function(t,s){if(t&&!(t.indexOf("?")<0)){for(var e=t.split("?")[1].split("&"),n=new Object,a=0;a<e.length;a++){var o=e[a].split("=");n[decodeURI(o[0])]=decodeURI(o[1])}return s?n[s]:n}},e=s(window.location.href,"name"),n=s(window.location.href,"report");t&&e&&n?(console.log(t,e,n),this.report=n,this.form={name:e,school:"无"},this.initfirst=!0,this.to(3)):this.to(0)}},U={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"app",staticClass:"hide",attrs:{id:"app"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.shows[0],expression:"shows[0]"}],staticClass:"page"},[e("index",{attrs:{opts:t.opts,"is-show":t.shows[0]},on:{"next-to":t.to}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.shows[1],expression:"shows[1]"}],staticClass:"page"},[e("info",{attrs:{opts:t.opts,"is-show":t.shows[1]},on:{"next-to":t.to}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.shows[2],expression:"shows[2]"}],staticClass:"page"},[e("game",{attrs:{opts:t.opts,"is-show":t.shows[2]},on:{"next-to":t.to}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.shows[3],expression:"shows[3]"}],staticClass:"page"},[e("result",{attrs:{opts:t.opts,info:t.form,"is-show":t.shows[3],report:t.report,init:t.initfirst}})],1)])},staticRenderFns:[]};var W=e("VU/8")(D,U,!1,function(t){e("YYq5")},null,null).exports,R=e("mtWM"),B=e.n(R),F=e("2Pnh"),H=e.n(F),L=(e("mWTK"),{name:"Number",data:function(){return{config:{}}},props:["ani"],methods:{},mounted:function(){this.ani&&[].concat(b()(this.$refs.page.getElementsByTagName("span"))).filter(function(t){t.style.animation="null"})}}),V={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{ref:"page",staticClass:"nb-box"},[s("span",{staticClass:"nb nb2"}),this._v(" "),s("span",{staticClass:"nb nb0"}),this._v(" "),s("span",{staticClass:"nb nb1"}),this._v(" "),s("span",{staticClass:"nb nb9"})])},staticRenderFns:[]};var z=e("VU/8")(L,V,!1,function(t){e("UCaz")},"data-v-0fa79f25",null).exports;!function(){r.a.config.productionTip=!1,r.a.component("number",z),t=750,s=750/1210,e=function(){var e=window.innerWidth,n=window.innerHeight,a=Math.min(e,n),o=Math.max(e,n),i=e>=n?(e-n)/2:0,r=e>=n?-(e-n)/2:0,c=e>=n?"90deg":0,l=window.innerWidth>=window.innerHeight?"landscape":"portrait",m=document.getElementsByTagName("html")[0],u=document.getElementsByTagName("body")[0];m.style.fontSize=o*s/t*625+"%";},e(),window.onresize=e,r.a.prototype.$ajax=B.a,r.a.prototype.$html2canvas=H.a,r.a.prototype.$msg=function t(s){function e(t){return document.getElementsByClassName(t)[0]}var n=document.getElementsByTagName("body")[0];if(-1==s)return setTimeout(function(){!function(t,s){var e=t.className;if(!e)return!1;var n=e.split(" ").filter(function(t){return t!=s});t.className=n.join(" ")}(e("alert"),"in"),setTimeout(function(){n.removeChild(e("alert")),n.removeChild(e("alert-layer"))},600)},1500),!1;var o=document.createElement("DIV");var r=document.createElement("DIV");o.className="alert-layer";r.className="alert";n.appendChild(o);n.appendChild(r);r.innerHTML=s;setTimeout(function(){!function(t,s){if(!t)return;t.className=t.className?t.className:"";var e=t.className+" "+s;t.className=i()(new a.a(e.split(" "))).join(" ")}(e("alert"),"in"),t(-1)},0)};var t,s,e;document.getElementById("app");x(1),function(t,s){for(var e=new Array,n=0;n<t.length;n++){var a=new Image;a.onload=function(){e.push(this),e.length===t.length&&s&&s()},a.onerror=function(){e.push(this),e.length===t.length&&s&&s()},a.src="static/img/"+t[n]}}("bg.jpg,p1-con.png,p2-con.png,p4-b-text.png,p3-btn.png".split(","),function(){x(0),new r.a({el:"#app",components:{App:W},template:"<App/>"})})}()},UCaz:function(t,s){},X8CF:function(t,s){},YYq5:function(t,s){},mWTK:function(t,s){}},["NHnr"]);