(function(e){function t(t){for(var a,n,c=t[0],i=t[1],s=t[2],u=0,b=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&b.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);m&&m(t);while(b.length)b.shift()();return l.push.apply(l,s||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,n=1;n<r.length;n++){var c=r[n];0!==o[c]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o={app:0},l=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2a8019d9"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"850eb6c3"}[e]+".css",o=i.p+a,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var s=l[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===o))return t()}var b=document.getElementsByTagName("style");for(c=0;c<b.length;c++){s=b[c],u=s.getAttribute("data-href");if(u===a||u===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=a,delete n[e],m.parentNode.removeChild(m),r(l)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var l=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=l);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var b=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(m);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",b.name="ChunkLoadError",b.type=a,b.request=n,r[1](b)}o[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/tinydiamond-timer/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var m=u;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"03a5":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n={class:"main"},o={class:"container mx-auto h-screen bg-gray-100"},l={id:"nav",class:"flex justify-center pt-4 pb-4 mb-4 bg-white border-b border-gray-200"},c={class:"mr-6"},i=Object(a["g"])("Home"),s=Object(a["g"])("Timer");function u(e,t,r,u,b,m){var d=Object(a["x"])("router-link"),p=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])("div",n,[Object(a["h"])("div",o,[Object(a["h"])("ul",l,[Object(a["h"])("li",c,[Object(a["h"])(d,{class:"text-blue-500 hover:text-blue-800 text-lg",to:"/"},{default:Object(a["E"])((function(){return[i]})),_:1})]),Object(a["h"])("li",null,[Object(a["h"])(d,{class:"text-blue-500 hover:text-blue-800 text-lg",to:"/timer"},{default:Object(a["E"])((function(){return[s]})),_:1})])]),Object(a["h"])("div",null,[Object(a["h"])(p)])])])}r("64be");const b={};b.render=u;var m=b,d=r("9483");Object(d["a"])("".concat("/tinydiamond-timer/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var p=r("6c02"),h=(r("b0c0"),{class:"home text-center text-xl"}),f=Object(a["h"])("p",{class:"text-gray-700 text-2xl mb-6"}," Add team members and start the timer ",-1),g={class:"flex mb-6 justify-evenly"},v={class:"flex-1 text-right pr-6"},O={class:"inline-flex flex-col"},j=Object(a["h"])("p",{class:"text-gray-500 text-sm mb-2 text-left"}," (Optional) Use a link to an image to use as avatar. ",-1),x={class:"text-center"},y=Object(a["h"])("button",{class:"flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded",type:"button"}," Clear ",-1),k={key:0,class:"text-red-500 text-xs italic text-left mt-1"},w={class:"mt-4"},S=Object(a["h"])("span",{class:"text-gray-700 mr-2"},"Duration per member in seconds",-1),C={class:"flex-1 pl-6 text-center"},G={class:"bg-white shadow overflow-hidden sm:rounded-lg p-4 inline-flex flex-col"},N={class:"text-gray-500 text-left"},T={class:"mb-2 text-left"},I={id:"array-rendering",class:"inline-block text-left"},E={class:"mb-6 justify-evenly mb-6"},M=Object(a["h"])("p",{class:"text-gray-700 text-xl mb-1"}," Need to track a goal for your team ? ",-1),A=Object(a["h"])("p",{class:"text-gray-500 text-sm mb-2"}," Enable the setting and manually set the goal and current value input. ",-1),V={class:"mb-2"},D={key:0},F={class:"mb-1"},B=Object(a["h"])("span",{class:"text-gray-500 mr-2"},"Tracker Name",-1),_={class:"mb-1"},q=Object(a["h"])("span",{class:"text-gray-500 mr-2"},"Goal",-1),P={class:"mb-1"},U=Object(a["h"])("span",{class:"text-gray-500 mr-2"},"Current status/value",-1),J={class:"mb-6 justify-evenly mb-6"},L=Object(a["h"])("p",{class:"text-gray-700 text-xl mb-1"}," Set a sprint goal ",-1),z=Object(a["h"])("p",{class:"text-gray-500 text-sm mb-2"}," Sprint goal is going to be shown at the top of the timer for the team to see. ",-1),H={class:"mb-2"},K={key:0},X={class:"mb-1"},$=Object(a["h"])("span",{class:"text-gray-500 mr-2"},"Sprint Goal",-1);function Q(e,t,r,n,o,l){return Object(a["q"])(),Object(a["d"])("div",h,[f,Object(a["h"])("div",g,[Object(a["h"])("div",v,[Object(a["h"])("div",O,[Object(a["h"])("div",{class:["flex flex-col py-2",l.inputExtraClass]},[Object(a["F"])(Object(a["h"])("input",{class:"appearance-none border-none text-gray-700 mr-3 py-1 px-2 mb-2 leading-tight focus:outline-none",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newMember=e}),onKeyup:t[2]||(t[2]=function(){return l.validateEnter.apply(l,arguments)}),placeholder:"Member name","aria-label":"Full name"},null,544),[[a["B"],o.newMember]]),Object(a["F"])(Object(a["h"])("input",{class:"appearance-none border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.memberAvatar=e}),placeholder:"Optional avatar link","aria-label":"Full name"},null,512),[[a["B"],o.memberAvatar]]),j],2),Object(a["h"])("div",x,[Object(a["h"])("button",{onClick:t[4]||(t[4]=function(){return l.addNewMember.apply(l,arguments)}),class:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"button"}," Add "),y]),l.invalidCharacters?(Object(a["q"])(),Object(a["d"])("p",k," No comma characters allowed ")):Object(a["e"])("",!0)]),Object(a["h"])("div",w,[S,Object(a["F"])(Object(a["h"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.timerDuration=e}),type:"number",min:"30",class:"appearance-none bg-transparent w-12"},null,512),[[a["B"],o.timerDuration]])])]),Object(a["h"])("div",C,[Object(a["h"])("div",G,[Object(a["h"])("p",N,Object(a["z"])(o.members.length)+" team members: ",1),Object(a["h"])("div",T,[Object(a["h"])("ul",I,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.members,(function(e){return Object(a["q"])(),Object(a["d"])("li",{key:e},[Object(a["h"])("button",{onClick:function(t){return l.deleteMember(e)},class:"text-sm text-red-500 text-bold"}," X ",8,["onClick"]),Object(a["g"])(" "+Object(a["z"])(e.name),1)])})),128))])])])])]),Object(a["h"])("div",E,[M,A,Object(a["h"])("div",V,[Object(a["h"])("button",{onClick:t[6]||(t[6]=function(){return l.toggleTracker.apply(l,arguments)}),class:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"button"},Object(a["z"])(o.enableTracker?"Disable":"Enable"),1)]),o.enableTracker?(Object(a["q"])(),Object(a["d"])("div",D,[Object(a["h"])("div",F,[B,Object(a["F"])(Object(a["h"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return o.trackerName=e}),class:"appearance-none"},null,512),[[a["B"],o.trackerName]])]),Object(a["h"])("div",_,[q,Object(a["F"])(Object(a["h"])("input",{"onUpdate:modelValue":t[8]||(t[8]=function(e){return o.trackerGoal=e}),type:"number",min:"0",class:"appearance-none"},null,512),[[a["B"],o.trackerGoal]])]),Object(a["h"])("div",P,[U,Object(a["F"])(Object(a["h"])("input",{"onUpdate:modelValue":t[9]||(t[9]=function(e){return o.trackerCurrentValue=e}),type:"number",min:"0",class:"appearance-none"},null,512),[[a["B"],o.trackerCurrentValue]])])])):Object(a["e"])("",!0)]),Object(a["h"])("div",J,[L,z,Object(a["h"])("div",H,[Object(a["h"])("button",{onClick:t[10]||(t[10]=function(){return l.toggleSprintGoal.apply(l,arguments)}),class:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"button"},Object(a["z"])(o.enableSprintGoal?"Disable":"Enable"),1)]),o.enableSprintGoal?(Object(a["q"])(),Object(a["d"])("div",K,[Object(a["h"])("div",X,[$,Object(a["F"])(Object(a["h"])("textarea",{"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.sprintGoal=t}),class:"appearance-none"},null,512),[[a["B"],e.sprintGoal]])])])):Object(a["e"])("",!0)]),Object(a["h"])("button",{onClick:t[12]||(t[12]=function(){return l.startTimer.apply(l,arguments)}),class:"bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"}," Start the timer ")])}r("99af"),r("4de4"),r("caad"),r("a9e3"),r("8ba4"),r("2532");var R={name:"Home",data:function(){return{newMember:"",memberAvatar:"",members:[],timerDuration:90,enableTracker:!1,trackerGoal:0,trackerCurrentValue:0,trackerName:"",enableSprintGoal:!1}},computed:{inputExtraClass:function(){return this.invalidCharacters?"border-red-500":"border-teal-500"},invalidCharacters:function(){return!(""==this.newMember||!this.newMember.includes(","))}},created:function(){var e=JSON.parse(localStorage.getItem("enableTracker",!1));this.enableTracker=e;var t=parseInt(localStorage.getItem("trackerGoal",0));this.trackerGoal=t;var r=localStorage.getItem("trackerName","");this.trackerName=r;var a=parseInt(localStorage.getItem("trackerCurrentValue",0));this.trackerCurrentValue=a;var n=JSON.parse(localStorage.getItem("enableSprintGoal",!1));this.enableSprintGoal=n;var o=localStorage.getItem("sprintGoal","");this.sprintGoal=o;var l=parseInt(localStorage.getItem("timerDuration"));Number.isInteger(l)&&(this.timerDuration=l);var c=JSON.parse(localStorage.getItem("members")||"[]");c.length>0&&(this.members=c)},methods:{addNewMember:function(){if(""!=this.newMember&&!this.invalidCharacters&&!this.members.includes(this.newMember)){var e={name:this.newMember,avatar:this.memberAvatar};this.members=this.members.concat(e),this.newMember="",this.memberAvatar=""}},deleteMember:function(e){var t=this.members.filter((function(t){return t.name!==e.name}));this.members=t},startTimer:function(){localStorage.setItem("timerDuration",this.timerDuration),localStorage.setItem("members",JSON.stringify(this.members)),localStorage.setItem("trackerGoal",this.trackerGoal),localStorage.setItem("trackerCurrentValue",this.trackerCurrentValue),localStorage.setItem("trackerName",this.trackerName),localStorage.setItem("sprintGoal",this.sprintGoal),this.$router.push("timer")},validateEnter:function(e){13===e.keyCode&&this.addNewMember()},toggleTracker:function(){this.enableTracker?this.enableTracker=!1:this.enableTracker=!0,localStorage.setItem("enableTracker",this.enableTracker)},toggleSprintGoal:function(){this.enableSprintGoal?this.enableSprintGoal=!1:this.enableSprintGoal=!0,localStorage.setItem("enableSprintGoal",this.enableSprintGoal)}}};R.render=Q;var W=R,Y=[{path:"/",name:"Home",component:W},{path:"/timer",name:"Timer",component:function(){return r.e("about").then(r.bind(null,"69a5"))}}],Z=Object(p["a"])({history:Object(p["b"])("/tinydiamond-timer/"),routes:Y}),ee=Z,te=r("5502"),re=Object(te["a"])({state:{},mutations:{},actions:{},modules:{}});r("9c9e");Object(a["c"])(m).use(re).use(ee).mount("#app")},"64be":function(e,t,r){"use strict";r("03a5")},"9c9e":function(e,t,r){}});
//# sourceMappingURL=app.b0b9bf7b.js.map