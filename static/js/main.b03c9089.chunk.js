(this.webpackJsonpmyportfoglio=this.webpackJsonpmyportfoglio||[]).push([[0],{10:function(e,t,i){},12:function(e,t,i){"use strict";i.r(t);var s=i(0),a=i.n(s),l=i(5),n=i.n(l),r=(i(10),i(3)),o=i(1);function c(){var e=a.a.useState(""),t=Object(r.a)(e,2),i=t[0],s=t[1],l=a.a.useState(""),n=Object(r.a)(l,2),c=n[0],m=n[1],d=a.a.useState(""),x=Object(r.a)(d,2),b=x[0],j=x[1];return Object(o.jsx)("section",{id:"contact",className:"relative",children:Object(o.jsxs)("div",{className:"container px-5 py-10 flex sm:flex-nowrap flex-wrap",children:[Object(o.jsxs)("div",{className:"lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative",children:[Object(o.jsx)("iframe",{width:"100%",height:"100%",title:"map",className:"absolute inset-0",frameborder:0,marginHeight:0,marginWidth:0,style:{filter:"opacity(0.7)"},src:"https://www.google.com/maps/embed/v1/place?q=Via+Roma,+126+san+vendemiano,+veneto&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}),Object(o.jsxs)("div",{className:"bg-gray-900 relative flex p-10 flex-wrap py-6 rounded shadow-md",children:[Object(o.jsxs)("div",{className:"lg:w-1/2 px-2 ",children:[Object(o.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs",children:"INDIRIZZO"}),Object(o.jsxs)("p",{className:"mt-1",children:["Via Roma, 126 ",Object(o.jsx)("br",{}),"San Vendemiano, Veneto."]})]}),Object(o.jsxs)("div",{className:"lg:w-1/2 px-6 mt-4 lg:mt-0",children:[Object(o.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs",children:"EMAIL"}),Object(o.jsx)("a",{href:c.link,className:"text-indigo-400  leading-relaxed",children:"ebrimasonko188@gmail.com"}),Object(o.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs mt-4",children:"PHONE"}),Object(o.jsx)("p",{className:"leading-relaxed",children:"(+39) 3294491936"})]})]})]}),Object(o.jsxs)("form",{netlify:!0,name:"contact",onSubmit:function(e){var t;e.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t={"form-name":"contact",name:i,email:c,message:b},Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return alert("Message sent!")})).catch((function(e){return alert(e)}))},className:"lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0",children:[Object(o.jsx)("h2",{className:"text-white sm:text-4xl text-3xl mb-1 font-medium title-font",children:"Assumimi"}),Object(o.jsx)("p",{className:"leading-relaxed mb-5",children:"want to work with me fill the form and write your request."}),Object(o.jsxs)("div",{className:"relative mb-4",children:[Object(o.jsx)("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-400",children:"Name"}),Object(o.jsx)("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return s(e.target.value)}})]}),Object(o.jsxs)("div",{className:"relative mb-4",children:[Object(o.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-400",children:"Email"}),Object(o.jsx)("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return m(e.target.value)}})]}),Object(o.jsxs)("div",{className:"relative mb-4",children:[Object(o.jsx)("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-400",children:"Message"}),Object(o.jsx)("textarea",{id:"message",name:"message",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",onChange:function(e){return j(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",children:"Submit"})]})]})})}function m(){return Object(o.jsx)("section",{id:"about",children:Object(o.jsxs)("div",{className:"container  mx-auto py-20 md:flex-row flex-col flex px-10 items-center",children:[Object(o.jsxs)("div",{className:"lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[Object(o.jsxs)("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-white",children:["Ciao, sono Ibra.",Object(o.jsx)("br",{className:"hidden lg:inline-block"})," Amo costruire incredibili app."]}),Object(o.jsx)("p",{className:"mb-8 leading-relaxed",children:"Sviluppatore front-end Il mio ruolo \xe8 scrivere e definire lo stile dei componenti front-end che soddisfano i requisiti dei nostri mock e soddisfano le nostre storie di utenti. Controllo ed elaborato anche le richieste per le distribuzioni di produzione. Tecnologie utilizzate: HTML5 & CSS3 SASS, JavaScript, React-js, Tailwind-Css, Bootstrap, Style-Components."}),Object(o.jsxs)("div",{className:"flex justify-center",children:[Object(o.jsx)("a",{href:"#contact",className:"inline-flex text-white bg-gray-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg",children:"Lavora con me"}),Object(o.jsx)("a",{href:"#projects",className:"ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg",children:"Guarda il mio lavoro passato"})]})]}),Object(o.jsx)("div",{className:"lg:mx-w-lg lg:w-full md:w-1/2 w-5/6",children:Object(o.jsx)("img",{className:"object-cover object-center rounded",alt:"hero",src:"./ibra.JPG"})})]})})}var d=i(2);function x(){return Object(o.jsx)("header",{className:"bg-gray-800 md:sticky top-0 z-10",children:Object(o.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(o.jsx)("div",{className:"title-font font-medium text-white mb-4 md:mb-0",children:Object(o.jsx)("a",{href:"#about",className:"ml-3 text-3xl",children:"Ebrima Sonko"})}),Object(o.jsxs)("nav",{className:"md:mr-auto md:ml-4 md:pt-1 md:py-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center",children:[Object(o.jsx)("a",{href:"#projects",className:"mr-5 hover:text-white",children:"Lavoro passato"}),Object(o.jsx)("a",{href:"#skills",className:"mr-5 hover:text-white",children:"Competenze"}),Object(o.jsx)("a",{href:"#testimonials",className:"mr-5 hover:text-white",children:"testimonianze"})]}),Object(o.jsxs)("a",{href:"#contact",className:"inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-non bg-gray-700 rounded text-base mt-4 md:mt-0",children:["Assumimi",Object(o.jsx)(d.a,{className:"w-4 h-4 ml-1"})]})]})})}var b=[{title:"Responsive wesite",subtitle:"Html & Css",description:"Html is the structure of the website. while CSS is the way of styling the website.",image:"./projects-1.jpg",link:"www.google.com"},{title:"Mobile First",subtitle:"Boostrap Html Css",description:"Boostrap is the painless way of building website using boostrap classes.",image:"./projects-2.jpg",link:"www.google.com"},{title:"Sass processor",subtitle:"Sass Javascript Html",description:"sass is the css pre-processo good for compiling code. in other hand javascript do the funtionality of the web.",image:"./projects-3.jpg",link:"www.gooogle.com"},{title:"My potfoglio",subtitle:"React Tailwind Github",description:"React is javascript frame-work good for user interface, and github is the version control system for the web documents.",image:"./projects-4.jpg",link:"www.google.com"}],j=[{title:"REACT"},{title:"BOOSTRAP"},{title:"SASS"},{title:"HTML5 & CSS3 "},{title:"JAVASCRIPT"},{title:"TAILWIND"}],u=[{name:"Mr Sonko",image:"./ibra-6.PNG",quote:"Thanks Sonko is bieng a pleasure working with you.",company:"Y-nitwork"},{name:"Ebrima Jaiteh",image:"./ibra-6.PNG",quote:"I had a defult time re-designing my website, thank god i meet you bro.",company:"Teacher"},{name:"Mbemba Suwareh",image:"./ibra-6.PNG",quote:"thank you for your hard work bro i give you more work in feature again.",company:"Interpeneur"},{name:"Mr Sonko",image:"./ibra-6.PNG",quote:"Thanks Sonko is bieng a pleasure working with you.",company:"Y-nitwork"}];function h(){return Object(o.jsx)("section",{id:"projects",className:"text-gray-400 bg-gray-900 body-font",children:Object(o.jsxs)("div",{className:"container px-5 py-10 mx-auto text-center lg:px-40",children:[Object(o.jsxs)("div",{className:"flex flex-col w-full mb-20",children:[Object(o.jsx)(d.d,{className:"mx-auto inline-block w-10 mb-4"}),Object(o.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font mb-4 text-white",children:"App che ho creato"}),Object(o.jsx)("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base",children:"Ho creato questi siti Web per i miei clienti utilizzando le tecnologie pi\xf9 potenti"})]}),Object(o.jsx)("div",{className:"flex flex-wrap -m-4",children:b.map((function(e){return Object(o.jsx)("a",{href:e.link,className:"sm:w-1/2 w-100 p-4",children:Object(o.jsxs)("div",{className:"flex relative",children:[Object(o.jsx)("img",{alt:"gallery",className:"absolute inset-0 w-full h-full object-cover object-center",src:e.image}),Object(o.jsxs)("div",{className:"px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100",children:[Object(o.jsx)("h2",{className:"tracking-widest text-sm title-font font-medium text-green-400 mb-1",children:e.subtitle}),Object(o.jsx)("h1",{className:"title-font text-lg font-medium text-white mb-3",children:e.title}),Object(o.jsx)("p",{className:"leading-relaxed",children:e.description})]})]})},e.image)}))})]})})}function g(){return Object(o.jsx)("section",{id:"skills",children:Object(o.jsxs)("div",{className:"container px-5 py-10 mx-auto",children:[Object(o.jsxs)("div",{className:"text-center mb-20",children:[Object(o.jsx)(d.c,{className:"w-10 inline-block mb-4"}),Object(o.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-4",children:"Competenze e Tecnologie"}),Object(o.jsx)("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto",children:"Sviluppatore front-end Il mio ruolo \xe8 scrivere e definire lo stile dei componenti front-end che soddisfano i requisiti dei nostri mock e soddisfano le nostre storie di utenti. Controllo ed elaboro anche le richieste pull per le distribuzioni di produzione. Tecnologie utilizzate: JavaScript, React-js, Tailwind-Css, Bootstrap, SASS, HTML5 & CSS3."})]}),Object(o.jsx)("div",{className:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2",children:j.map((function(e){return Object(o.jsx)("div",{className:"p-2 sm:w-1/2 w-full",children:Object(o.jsxs)("div",{className:"bg-gray-800 rounded flex p-4 h-full items-center",children:[Object(o.jsx)(d.b,{className:"text-green-400 w-6 h-6 flex-shrink-0 mr-4"}),Object(o.jsx)("span",{className:"title-font font-medium text-white",children:e.title})]})},e)}))})]})})}function f(){return Object(o.jsx)("section",{id:"testimonials",children:Object(o.jsxs)("div",{className:"container px-5 py-10 mx-auto text-center",children:[Object(o.jsx)(d.f,{className:"w-10 inline-block mb-4"}),Object(o.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font mb-12 text-white ",children:"Testimonianze dei clienti"}),Object(o.jsx)("div",{className:"flex flex-wrap m-4",children:u.map((function(e){return Object(o.jsx)("div",{className:"p-4 md:w-1/2 w-full",children:Object(o.jsxs)("div",{className:"bg-gray-800 h-full bg-opacity-40 rounded p-8",children:[Object(o.jsx)(d.e,{className:"block w-8 text-gray-500 mb-4"}),Object(o.jsx)("p",{className:"leading-relased mb-6",children:e.quote}),Object(o.jsxs)("div",{className:"inline-flex items-center",children:[Object(o.jsx)("img",{alt:"testimanials",src:e.image,className:"w-12 rounded-full flex-shrink-0 object-cover object-center"}),Object(o.jsxs)("span",{className:"flex flex-frow pl-4 flex-col",children:[Object(o.jsx)("span",{className:"title-font font-medium text-white",children:e.name}),Object(o.jsx)("span",{className:"text-gray-500 text-sm uppercase",children:e.company})]})]})]})})}))})]})})}function p(){return Object(o.jsxs)("main",{className:"text-gray-400 bg-gray-900 body-font",children:[Object(o.jsx)(x,{}),Object(o.jsx)(m,{}),Object(o.jsx)(h,{}),Object(o.jsx)(g,{}),Object(o.jsx)(f,{}),Object(o.jsx)(c,{})]})}n.a.render(Object(o.jsxs)(a.a.StrictMode,{children:[Object(o.jsx)(p,{}),","]}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.b03c9089.chunk.js.map