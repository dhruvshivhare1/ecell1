import{r as x,W as y,j as e}from"./index-CPdoh1hC.js";import{r as v,h as t}from"./proxy-t5-6dLPR.js";import{M as w,P as j,a as N,L as k,T as I,I as E}from"./Footer-BQmkK6nM.js";const C={some:0,all:1};function V(i,n,{root:a,margin:l,amount:s="some"}={}){const c=v(i),r=new WeakMap,d=h=>{h.forEach(o=>{const g=r.get(o.target);if(o.isIntersecting!==!!g)if(o.isIntersecting){const b=n(o);typeof b=="function"?r.set(o.target,b):u.unobserve(o.target)}else typeof g=="function"&&(g(o),r.delete(o.target))})},u=new IntersectionObserver(d,{root:a,rootMargin:l,threshold:typeof s=="number"?s:C[s]});return c.forEach(h=>u.observe(h)),()=>u.disconnect()}function f(i,{root:n,margin:a,amount:l,once:s=!1}={}){const[c,r]=x.useState(!1);return x.useEffect(()=>{if(!i.current||s&&c)return;const d=()=>(r(!0),s?void 0:()=>r(!1)),u={root:n&&n.current||void 0,margin:a,amount:l};return V(i.current,d,u)},[n,i,a,s,l]),c}const O={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},p={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.6,ease:"easeOut"}}},m={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},q=()=>{const i=x.useRef(null),n=x.useRef(null),a=f(i,{once:!0,margin:"-100px"}),l=f(n,{once:!0,margin:"-100px"}),[s,c]=y("mleqgvgb"),r=d=>{d.preventDefault(),c(d)};return s.succeeded?e.jsxs("div",{className:"text-center text-white py-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Thank you for your message!"}),e.jsx("p",{children:"We'll get back to you soon."})]}):e.jsxs("section",{className:"relative min-h-screen bg-gray-900 text-white",children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.jsx("div",{className:"absolute inset-0 opacity-[0.15]",style:{backgroundImage:`
              linear-gradient(to right, rgb(168, 85, 247) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(168, 85, 247) 1px, transparent 1px)
            `,backgroundSize:"30px 30px"}})}),e.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:1},children:[e.jsx("div",{className:"absolute w-[400px] h-[400px] bg-purple-800 rounded-full mix-blend-multiply filter blur-[100px] opacity-20",style:{left:"10%",top:"20%"}}),e.jsx("div",{className:"absolute w-[400px] h-[400px] bg-purple-800 rounded-full mix-blend-multiply filter blur-[100px] opacity-20",style:{right:"10%",top:"20%"}}),e.jsx("div",{className:"absolute w-[400px] h-[400px] bg-purple-800 rounded-full mix-blend-multiply filter blur-[100px] opacity-20",style:{left:"30%",bottom:"20%"}})]}),e.jsxs(t.div,{ref:i,className:"relative container mx-auto px-6 py-24",style:{zIndex:2},initial:{opacity:0},animate:a?{opacity:1}:{opacity:0},transition:{duration:.8},children:[e.jsxs(t.div,{className:"text-center mb-12",initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:[e.jsx("style",{children:`
              @keyframes glow {
                0%, 100% {
                  text-shadow: 0 0 20px rgba(168, 85, 247, 0.5),
                             0 0 40px rgba(168, 85, 247, 0.2);
                }
                50% {
                  text-shadow: 0 0 30px rgba(168, 85, 247, 0.7),
                             0 0 50px rgba(168, 85, 247, 0.3);
                }
              }
              .gradient-text {
                background: linear-gradient(135deg, #f0f0ff 0%, #a855f7 50%, #6366f1 100%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: glow 3s ease-in-out infinite;
              }
            `}),e.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4",children:e.jsx("span",{className:"gradient-text",children:"About Us"})}),e.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto",children:"Learn more about our mission and vision"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[e.jsxs(t.div,{variants:O,initial:"hidden",animate:a?"visible":"hidden",children:[e.jsx(t.h2,{className:"text-3xl font-bold text-white mb-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"About E-Cell"}),e.jsx(t.p,{className:"text-gray-400 mb-8",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.3},children:"At E-Cell, Sri Aurobindo College, we are dedicated to empowering students to dream big, innovate, and lead. Our mission is to equip them with essential entrepreneurial skills and foster innovative thinking to become ethical leaders and successful changemakers. We aim to cultivate a culture of creativity by providing resources, workshops, and mentorship that inspire new ideas and solutions. By building a vibrant network of students, alumni, industry experts, and entrepreneurs, we create opportunities for knowledge-sharing, collaboration, and guidance. Our platform enables students to explore various aspects of entrepreneurship, from startups to social enterprises, ensuring a well-rounded entrepreneurial experience. Through these efforts, we strive to shape the next generation of entrepreneurs who will drive innovation and contribute to the nation's growth."}),e.jsxs(t.div,{className:"space-y-4",variants:p,initial:"hidden",animate:a?"visible":"hidden",transition:{staggerChildren:.2,delayChildren:.4},children:[e.jsxs(t.div,{variants:p,className:"flex items-center text-gray-400",children:[e.jsx(w,{className:"w-5 h-5 mr-3 text-purple-500"}),e.jsx("span",{children:"Sri Aurobindo College, University Of Delhi"})]}),e.jsxs(t.div,{variants:p,className:"flex items-center text-gray-400",children:[e.jsx(j,{className:"w-5 h-5 mr-3 text-purple-500"}),e.jsx("span",{children:"+91 91190 35011"})]}),e.jsxs(t.div,{variants:p,className:"flex items-center text-gray-400",children:[e.jsx(N,{className:"w-5 h-5 mr-3 text-purple-500"}),e.jsx("span",{children:"entrepreneurshipcellsacdu@gmail.com"})]})]}),e.jsxs(t.div,{className:"flex space-x-4 mt-8",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:[e.jsx("a",{href:"#",className:"text-purple-500 hover:text-purple-400",children:e.jsx(k,{className:"w-6 h-6"})}),e.jsx("a",{href:"#",className:"text-purple-500 hover:text-purple-400",children:e.jsx(I,{className:"w-6 h-6"})}),e.jsx("a",{href:"#",className:"text-purple-500 hover:text-purple-400",children:e.jsx(E,{className:"w-6 h-6"})})]})]}),e.jsxs(t.div,{ref:n,className:"bg-gray-800 p-8 rounded-lg shadow-lg",initial:{opacity:0,scale:.95},animate:l?{opacity:1,scale:1}:{opacity:0,scale:.95},transition:{duration:.6,delay:.5},children:[e.jsx(t.h3,{className:"text-2xl font-semibold text-white mb-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:"Contact Us"}),e.jsxs("form",{onSubmit:r,className:"space-y-4",children:[e.jsxs(t.div,{variants:m,children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-400",children:"Name"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0,className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"})]}),e.jsxs(t.div,{variants:m,children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-400",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"})]}),e.jsxs(t.div,{variants:m,children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-400",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",required:!0,rows:4,className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"})]}),e.jsx(t.button,{type:"submit",disabled:s.submitting,className:"w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed",variants:m,children:s.submitting?"Sending...":"Send Message"})]})]})]})]})]})};export{q as A};
