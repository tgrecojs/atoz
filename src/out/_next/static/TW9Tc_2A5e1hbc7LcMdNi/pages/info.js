(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3olQ":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("mXGw"),i=n("mNXo"),r=n("UYa7"),o=n("hmKD");function l(t){return"---\n"+Object(r.dump)(t.frontmatter)+"---\n"+(t.markdownBody||"")}function u(t,e){void 0===e&&(e={});var n=Object(i.useCMS)(),r=t,u=e.id||t.fileRelativePath,c=e.label||t.fileRelativePath,s=e.fields||[],d=e.actions||[],f=Object(i.useForm)({id:u,label:c,fields:s,actions:d,loadInitialValues:function(){return n.api.git.show(t.fileRelativePath).then((function(t){var e=o(t.content),n=e.content;return{frontmatter:e.data,markdownBody:n}}))},onSubmit:function(){return n.api.git.commit({files:[t.fileRelativePath],message:"Commit from Tina: Update "+t.fileRelativePath})},reset:function(){return n.api.git.reset({files:[u]})}},{values:r,label:c}),m=f[0],b=f[1],w=Object(a.useCallback)((function(t){n.api.git.writeToDisk({fileRelativePath:t.values.fileRelativePath,content:l(t.values)})}),[]);return Object(i.useWatchFormValues)(b,w),[m||t,b]}function c(t,e){var n=u(t,e),a=n[0],r=n[1];return Object(i.usePlugins)(r),[a,r]}},BiQE:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info",function(){return n("jLj4")}])},jLj4:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var a=n("NthX"),i=n.n(a),r=n("aNYv"),o=n("YIwv"),l=n.n(o),u=n("mXGw"),c=n.n(u),s=n("hmKD"),d=n.n(s),f=n("LO0j"),m=n.n(f),b=n("3olQ"),w=n("5Yp1"),p=c.a.createElement;function h(t){var e=Object(b.a)(t.markdownFile,{fields:[{name:"frontmatter.background_color",label:"Background Color",component:"color"},{name:"markdownBody",label:"Info Content",component:"markdown"}]}),n=Object(r.a)(e,1)[0];return p(w.a,{pathname:"info",bgColor:n.frontmatter.background_color,siteTitle:t.title},p("section",{className:"jsx-244437640 info_blurb"},p(m.a,{source:n.markdownBody})),p(l.a,{id:"244437640"},[".info_blurb.jsx-244437640{max-width:800px;padding:1.5rem 1.25rem;}","@media (min-width:768px){.info_blurb.jsx-244437640{padding:2rem;}}","@media (min-width:1440px){.info_blurb.jsx-244437640{padding:3rem;}}"]))}h.getInitialProps=function(){var t,e,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.awrap(n.e(17).then(n.bind(null,"WY4f")));case 2:return t=r.sent,r.next=5,i.a.awrap(n.e(9).then(n.t.bind(null,"AnCH",3)));case 5:return e=r.sent,a=d()(t.default),r.abrupt("return",{markdownFile:{fileRelativePath:"src/data/info.md",frontmatter:a.data,markdownBody:a.content},title:e.default.title});case 8:case"end":return r.stop()}}),null,null,null,Promise)}}},[["BiQE",1,2,3,6,5,7,0,4,8]]]);