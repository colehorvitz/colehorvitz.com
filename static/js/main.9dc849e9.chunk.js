(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),o=a.n(c),l=(a(14),a(1)),s=a(2),i=a(4),m=a(3),p=(a(15),a(8)),d=a.n(p),u=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).showBio=function(){setTimeout((function(){e.setState({displayBio:!0})}),100)},e.state={displayBio:!1},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"console"},n.a.createElement("div",{className:"command-line"},n.a.createElement("span",{className:"console-marker"},">"),n.a.createElement(d.a,{startDelay:500,cursor:{show:!1},onLineTyped:this.showBio},"whois cole")),n.a.createElement("div",{style:{display:this.state.displayBio?"block":"none"},className:"bio"},n.a.createElement("p",null,"Name: Cole Horvitz"),n.a.createElement("p",null,"Education: Brown University"),n.a.createElement("p",null,"Location: Los Angeles"),n.a.createElement("p",null,"Skills: web design, full-stack development"),n.a.createElement("p",null,"Contact: cole_horvitz@brown.edu")))}}]),a}(r.Component),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).renderTags=function(){return e.props.project.tags.map((function(e){return n.a.createElement("div",{className:"tag"},e)}))},e.state={},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"project-card"},n.a.createElement("div",{className:"img-wrap"},n.a.createElement("img",{src:this.props.project.img,alt:this.props.project.name})),n.a.createElement("div",{className:"info"},null!=this.props.project.url?n.a.createElement("a",{href:this.props.project.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h3",null,this.props.project.name)):n.a.createElement("h3",null,this.props.project.name),n.a.createElement("p",null,this.props.project.desc),n.a.createElement("div",{className:"tag-wrap"},this.renderTags())))}}]),a}(r.Component),g=[{name:"Brown University Bear Dens",desc:"A web application that helps Brown students discover on-campus housing.",tags:["react","css","sprql"],img:"public/brown1.png",gradient_start:"rgba(255, 18, 18, .4)",gradient_end:"rgba(255,199,0,.4)",url:"https://www.brownbeardens.com"},{name:"deepread.app",desc:"A reader application that offers a customizable reading environment.",tags:["react","css","django"],img:"doc.jpg",gradient_start:"rgba(255, 18, 18, .4)",gradient_end:"rgba(255,199,0,.4)",url:"https://www.deepread.app"},{name:"California State Assembly Redesign",desc:"A theoretical, user-friendly redesign of the California State Assembly website.",tags:["html","css"],img:"capitol.png",gradient_start:"rgba(255, 18, 18, .4)",gradient_end:"rgba(255,199,0,.4)",url:null},{name:"Spidr Dev",desc:"A web design project that has developed websites for various clients.",tags:["html","css"],img:"design1.jpg",gradient_start:"rgba(255, 18, 18, .4)",gradient_end:"rgba(255,199,0,.4)",url:"https://spidr.dev"}],v=a(5),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).renderProjects=function(){return g.map((function(e){return n.a.createElement(h,{project:e})}))},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"main-wrap"},n.a.createElement("div",{className:"intro-wrap"},n.a.createElement("div",{className:"intro-header"},n.a.createElement("h1",{style:{fontWeight:400}},"cole horvitz"),n.a.createElement("div",{className:"nav"},n.a.createElement("a",{href:"https://www.linkedin.com/in/cole-horvitz-37a58a19a",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(v.a,{className:"icon"})),n.a.createElement("a",{href:"https://github.com/colehorvitz",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(v.b,{className:"icon"})))),n.a.createElement(u,null))),n.a.createElement("div",{className:"projects-wrap",id:"projects"},n.a.createElement("h2",null,"projects"),n.a.createElement("div",{className:"projects-grid"},this.renderProjects())),n.a.createElement("div",{className:"footer"},n.a.createElement("h4",null,"Cole Horvitz"),n.a.createElement("p",null,"cole_horvitz@brown.edu"),n.a.createElement("div",{className:"icons"},n.a.createElement("a",{href:"https://www.linkedin.com/in/cole-horvitz-37a58a19a",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(v.b,{className:"icon"})),n.a.createElement("a",{href:"https://github.com/colehorvitz",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(v.a,{className:"icon"})))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.9dc849e9.chunk.js.map