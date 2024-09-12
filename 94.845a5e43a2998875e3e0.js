"use strict";(self.webpackChunkportfolio_mk=self.webpackChunkportfolio_mk||[]).push([[94],{94:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});var r=n(848),a=n(540);var o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},o.apply(this,arguments)};const s=function(t){var e=t.title,n=t.text,a=t.photo,s=t.info,l=t.isDarkTheme;return(0,r.jsxs)("div",o({className:"".concat("MPbrQlpk"," relative mr-[30px] w-[87%] ").concat(l?"bg-[#343541]":"bg-[#f7f8fc]"," h-auto px-[1.5rem] sm:mr-0 sm:w-full sm:py-8 3xl:py-[30px]")},{children:[(0,r.jsx)("h3",o({className:"title mb-6 overflow-scroll text-xl font-bold sm:max-h-[60px] ".concat(l?"text-[#EAEAEA]":"text-darkMain")},{children:e})),(0,r.jsx)("p",{className:"mb-10 ".concat(l?"text-[#C2C2C2]":"text-[#7a798c]"," h-[125px] overflow-scroll"),dangerouslySetInnerHTML:{__html:n||""}}),(0,r.jsx)("div",o({className:"photo_block mb-[25px] h-[53px] w-[53px] overflow-hidden rounded-full"},{children:(0,r.jsx)("img",{src:a,alt:"photo owner",className:"block h-full w-full object-cover"})})),(0,r.jsxs)("p",o({className:"text-[15px] font-semibold ".concat(l?"text-[#C2C2C2]":"text-[#7a798c]")},{children:[(0,r.jsx)("a",o({href:"#",className:"mr-2 text-lightBlue"},{children:s}))," ",(0,r.jsx)("span",{children:"Customer"})]}))]}))};var l=function(){return l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},l.apply(this,arguments)};const i=function(t){var e=t.totalSections,n=t.currentSection,o=t.itemsPerPage,s=(0,a.useState)(e),i=s[0],c=s[1];(0,a.useEffect)((function(){var t=function(){window.innerWidth>=1440?c(Math.ceil(e/o)):c(e)};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[e,o]);var u=Math.floor(n/o);return(0,r.jsx)("div",l({className:"absolute -bottom-[50px] left-1/2 z-10 flex -translate-x-1/2 transform space-x-2"},{children:Array.from({length:i}).map((function(t,e){return(0,r.jsx)("div",{className:"h-3 w-3 rounded-full transition-colors duration-300 ".concat(e===(window.innerWidth>=1440?u:n)?"bg-blue-500":"bg-gray-300")},e)}))}))};var c=n(318),u=n(908),f=n(779);var x=function(){return x=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},x.apply(this,arguments)};const h=function(){var t=(0,a.useContext)(f.y),e=t.isDarkTheme,n=t.testimonials,o=t.setTestimonials,l=(0,a.useState)(null),h=l[0],m=l[1];if((0,a.useEffect)((function(){var t,e,n,r;t=void 0,e=void 0,r=function(){var t;return function(t,e){var n,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(s=0)),s;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return s.label++,{value:l[1],done:!1};case 5:s.label++,r=l[1],l=[0];continue;case 7:l=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){s=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){s.label=l[1];break}if(6===l[0]&&s.label<a[1]){s.label=a[1],a=l;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(l);break}a[2]&&s.ops.pop(),s.trys.pop();continue}l=e.call(t,s)}catch(t){l=[6,t],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),m(null),[4,(0,c.J)({path:"testimonials"})];case 1:return t=e.sent(),o(t.data),[3,3];case 2:return e.sent(),m("Error fetching Testimonials information"),[3,3];case 3:return[2]}}))},new((n=void 0)||(n=Promise))((function(a,o){function s(t){try{i(r.next(t))}catch(t){o(t)}}function l(t){try{i(r.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,l)}i((r=r.apply(t,e||[])).next())}))}),[]),h)return(0,r.jsx)("div",x({className:"error-message flex h-full items-center justify-center text-center text-5xl text-red-500"},{children:h}));var p=(0,a.useState)(0),d=p[0],b=p[1],v=(0,a.useState)(3),g=v[0],y=v[1];return(0,a.useEffect)((function(){var t=function(){y(window.innerWidth<1440?1:3)};return window.addEventListener("resize",t),t(),function(){window.removeEventListener("resize",t)}}),[]),n?(0,r.jsx)("div",x({className:"testimonials flex h-auto flex-col items-start justify-start ".concat(e?"bg-[#2A2A2A]":"bg-[#f5f0f0]"," 2xl:flex-row 2xl:overflow-y-auto")},{children:(0,r.jsxs)("div",x({className:"".concat("uk2Bz6cO"," h-full w-calc-aside pl-[82px] pr-[30px] sm:w-full sm:px-[15px] sm:py-5 lg:px-[30px] lg:py-[30px] xl:px-[80px] xl:pt-[90px]")},{children:[(0,r.jsxs)("div",x({className:"main_title_container flex flex-col items-start justify-end sm:mb-[30px] xl:mb-[72px]"},{children:[(0,r.jsx)("p",x({className:"main_subtitle mb-3 font-medium leading-8 ".concat(e?"text-[#C2C2C2]":"text-[#7a798c]"," sm:text-xl sm:leading-7 xl:text-[30px]")},{children:"What clients say"})),(0,r.jsx)("h1",x({className:"main_title text-[90px] font-extrabold leading-[5rem] ".concat(e?"text-[#EAEAEA]":"text-darkMain"," sm:text-[38px] sm:leading-10 xl:text-7xl")},{children:"Testimonials"}))]})),(0,r.jsxs)("div",x({className:"testimonials_carousel_scrollIndicator relative"},{children:[(0,r.jsxs)("div",x({className:"testimonials_block relative overflow-hidden sm:mb-[60px]"},{children:[(0,r.jsx)("div",x({className:"testimonials_carousel flex transition-transform duration-500",style:{transform:"translateX(-".concat(100*d/g,"%)")}},{children:n.map((function(t){return(0,r.jsx)("div",x({className:"flex-shrink-0 ".concat("hQr4SDJo"," 3xl:mr-[30px]")},{children:(0,r.jsx)(s,{title:t.title,text:t.text,photo:t.image,info:t.fio,isDarkTheme:e})}),t.id)}))})),(0,r.jsx)("button",x({type:"button",className:"absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-white ".concat(e?"bg-gray-600 hover:bg-gray-500":"bg-gray-800 hover:bg-gray-700"),onClick:function(){b((function(t){return 0===t?n.length-g:t-g}))}},{children:"❮"})),(0,r.jsx)("button",x({type:"button",className:"absolute top-1/2 -translate-y-1/2 transform rounded-full p-2 text-white ".concat(e?"bg-gray-600 hover:bg-gray-500":"bg-gray-800 hover:bg-gray-700"," sm:right-0 3xl:right-[30px]"),onClick:function(){b((function(t){return t+g>=n.length?0:t+g}))}},{children:"❯"}))]})),(0,r.jsx)(i,{totalSections:n.length,currentSection:d,itemsPerPage:g})]}))]}))})):(0,r.jsx)(u.A,{})}}}]);