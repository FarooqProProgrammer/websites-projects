import{j as e,C as g,a as u,b as c,P as t,d as j,e as i,L as n,B as y,f as w,r as v}from"./react-DfdQy822.js";import{d,F as A,a as T,b as O,c as C,M as F}from"./vendor-CZFwN65Z.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))x(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const b of l.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&x(b)}).observe(document,{childList:!0,subtree:!0});function h(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function x(r){if(r.ep)return;r.ep=!0;const l=h(r);fetch(r.href,l)}})();const k="/images/nft-1.CM6YH0Qv.png",L="/images/nft-2.D8_9B_Vu.png",P=()=>e.jsx(g,{className:"h-100",children:e.jsxs(u,{className:"py-5 h-100 gx-5",children:[e.jsxs(c,{lg:6,className:"px-6 pt-8 pe-8",children:[e.jsxs("h3",{className:"text-white font-tertiary display-6",children:["CREATE AND SELL YOUR ",e.jsx("span",{className:"primary-color",children:"  NFT"})]}),e.jsx("p",{className:"text-white",children:"Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!"}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("button",{className:"btn primary-bg-color text-white",children:"Create NFT"}),e.jsx("button",{className:"btn  text-white",children:"Learn More"})]})]}),e.jsxs(c,{lg:6,className:"position-relative nft-image",children:[e.jsx("img",{src:k,className:"img-1"}),e.jsx("img",{src:L,className:"img-2"})]})]})}),R=d.div`
  width: ${s=>s.width||"100px"};
  height: ${s=>s.height||"100px"};
  border-radius: ${s=>s.borderRadius||"50%"};
  overflow: hidden;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`,E=d.img`
  width: 100%;
  height: 100%;
  object-fit: ${s=>s.fit||"cover"};
`,f=({src:s,width:a,height:h,alt:x,fit:r,borderRadius:l})=>e.jsx(R,{width:a,height:h,borderRadius:l,children:s?e.jsx(E,{src:s,alt:x,fit:r}):e.jsx("span",{children:"Avatar"})});f.propTypes={src:t.string,width:t.oneOfType([t.string,t.number]),height:t.oneOfType([t.string,t.number]),alt:t.string,fit:t.oneOf(["cover","contain","fill","none","scale-down"]),borderRadius:t.oneOfType([t.string,t.number])};f.defaultProps={alt:"Avatar",width:"100px",height:"100px",fit:"cover",borderRadius:"50%"};const I=d.div`
  height: ${s=>s.height||"300px"}; /* Default height of 300px */
  width: ${s=>s.width||"100%"};
  display: flex;
  justify-content: start;
  align-items: end;
  padding: 10px;
  background-image: url(${s=>s.image instanceof File?URL.createObjectURL(s.image):s.image});
  background-size: cover;
  border-radius: 15px;
  background-position: center;
`,o=({image:s,avatarimage:a,width:h,height:x})=>e.jsx(I,{image:s,width:h,height:x,children:e.jsxs("div",{className:"d-flex justify-content-start align-items-center gap-2",children:[e.jsx(f,{src:a instanceof File?URL.createObjectURL(a):a,width:80,height:80}),e.jsxs("div",{className:"d-flex flex-column justify-content-start align-items-start",children:[e.jsx("h6",{className:"text-white font-thin mb-0",children:"Owner"}),e.jsx("h6",{className:"text-white font-thin fs-5",children:"Osvaldo Percy"})]})]})});o.propTypes={image:t.oneOfType([t.string,t.instanceOf(File)]).isRequired,avatarimage:t.oneOfType([t.string,t.instanceOf(File)]).isRequired,width:t.oneOfType([t.string,t.number]),height:t.oneOfType([t.string,t.number])};o.defaultProps={width:"100%",height:"300px"};const S="/images/article-1.4dotQNMs.png",B="/images/article-2.CupG1Ppl.png",U="/images/article-3.pj9xWo_K.png",q="/images/article-4.-PPg0GGv.png",$="/images/article-5.YqN4PITW.png",m="/images/avatar-1.BOlB7W1J.png",W=()=>e.jsxs(g,{className:"mt-14 mb-5",children:[e.jsxs("div",{className:"w-100 d-flex justify-content-between align-items-center",children:[e.jsxs("h3",{className:"text-white font-tertiary display-6 ",children:["Popular ",e.jsx("span",{className:"primary-color",children:"Artist"}),"  ",e.jsx("br",{})," on the Week"]}),e.jsx("button",{className:"btn primary-bg-color text-white px-5",children:"See All"})]}),e.jsxs(u,{className:"mt-4",children:[e.jsx(c,{md:8,children:e.jsxs(u,{className:"gy-3",children:[e.jsx(c,{md:5,children:e.jsx(o,{image:S,avatarimage:m})}),e.jsx(c,{md:7,children:e.jsx(o,{image:B,avatarimage:m})}),e.jsx(c,{md:6,children:e.jsx(o,{image:U,avatarimage:m})}),e.jsx(c,{md:6,children:e.jsx(o,{image:q,avatarimage:m})})]})}),e.jsx(c,{md:4,children:e.jsx(o,{image:$,height:"100%",avatarimage:m})})]})]}),z=d.div`
 width: 30px;
 height: 30px;
 background-color: white;
 display: flex;
 justify-content: center;
 align-items: center;
    transition: all 0.6s ease-in-out;

 &:hover { 
    background-color: #d6ef0e;
 }
`,p=({children:s})=>e.jsx(z,{className:"rounded-2",children:s});p.propTypes={children:t.node.isRequired};const M=()=>e.jsx(g,{className:"py-5",children:e.jsx(e.Fragment,{children:e.jsx("footer",{className:"text-center text-lg-start",children:e.jsx("section",{className:"",children:e.jsx("div",{className:"container text-center text-md-start mt-5",children:e.jsxs("div",{className:"row mt-3 g-2",children:[" ",e.jsxs("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[e.jsx("p",{className:"text-white",children:"Discover NFTs by category, track the latest drop, and follow the collections you love. Enjoy it!"}),e.jsxs("div",{className:"d-flex justify-content-start align-items-center gap-2",children:[e.jsx(p,{children:e.jsx(A,{color:"#000"})}),e.jsx(p,{children:e.jsx(T,{color:"#000"})}),e.jsx(p,{children:e.jsx(O,{color:"#000"})}),e.jsx(p,{children:e.jsx(C,{color:"#000"})})]})]}),e.jsxs("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4",children:[e.jsx("h6",{className:"text-uppercase fw-bold mb-4  text-white",children:"Explore"}),e.jsxs(j,{className:"bg-transparent ps-0",children:[e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Art Sign in"})}),e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Collectibles"})}),e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Domain Name"})}),e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Utility"})})]})]}),e.jsxs("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4",children:[e.jsx("h6",{className:"text-uppercase fw-bold mb-4  text-white",children:"Statistic"}),e.jsxs(j,{className:"bg-transparent ps-0",children:[e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Ranking"})}),e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Collectibles"})}),e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Activity"})})]})]}),e.jsxs("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4",children:[e.jsx("h6",{className:"text-uppercase fw-bold mb-4  text-white",children:"Company"}),e.jsxs(j,{className:"bg-transparent ps-0",children:[e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"About Us"})}),e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Career"})}),e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Support"})}),e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Partners"})})]})]}),e.jsxs("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4",children:[e.jsx("h6",{className:"text-uppercase fw-bold mb-4  text-white",children:"Resources"}),e.jsxs(j,{className:"bg-transparent ps-0",children:[e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Help Center"})}),e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Platform Status"})}),e.jsx(i,{className:"bg-transparent border-0 ps-0",children:e.jsx(n,{to:"#!",children:"Blog"})})]})]})]})})})})})}),D="/images/newletter.B7eAkT2j.png",G=d.div`
    border-radius: 8px;
   
    width: 100%;
    height: 60px;
    background: #131e3a;
    margin-top: 30px;
    display: flex;
    align-items: center;

    input { 

        flex: 2;
        height: 100%;
        background-color: transparent;

      
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: rgba(255, 255, 253, 0.72);
        border: none;

        &:focus { 
            border: none;
            outline: none;
        }

        
    }


    button { 
        flex: 1;
        height: 100%;
    }
`,H=()=>e.jsxs(G,{className:"ps-3",children:[e.jsx("input",{type:"text",placeholder:"Enter Email"}),e.jsx("button",{className:"btn primary-bg-color text-white",children:"Subscribe"})]}),Q=()=>e.jsx("div",{className:"py-5",children:e.jsx(g,{children:e.jsxs(u,{children:[e.jsx(c,{md:6,children:e.jsx("img",{src:D,alt:"",className:"img-fluid"})}),e.jsxs(c,{md:6,className:"px-4 pt-sm-7",children:[e.jsxs("h2",{className:"font-tertiary text-white display-5",children:["Subscribe  And",e.jsx("span",{className:"primary-color",children:"  get our Updates "}),"Every Week"]}),e.jsx("p",{className:"text-white mt-4",children:"We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly"}),e.jsx(H,{})]})]})})}),Y="/images/unique-1.B4eOrnxL.png",_=d.button`
  border: 1px solid #d6ef0e;
  border-radius: 8px;

  width: 168px;
  height: 48px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;


  ${({variant:s})=>s==="filled"&&`
    background-color: #d6ef0e;
    color: #fff;
  `}

  ${({variant:s})=>s==="outline"&&`
    background-color: transparent;
    color: #d6ef0e;
  `}
`,N=({variant:s="outline",...a})=>e.jsx(_,{variant:s,...a});N.propTypes={variant:t.oneOf(["outline","filled"]),onClick:t.func,type:t.string,disabled:t.bool};const K=d.div`
    border-top: 1px solid #d6ef0e;
    border-radius: 28px;
    padding: 20px;
    width: 100%;
    background: #131e3a;

    img { 
        width: 100%;
        height: 340px;
        object-fit: cover;
        border-radius: 20px;
    }

    h6 { 
        font-size: 24px;
    }

    h5 { 
        font-size: 14px ;
        color: #838382;
    }

`,J=()=>e.jsxs(g,{className:"py-5",children:[e.jsxs("div",{className:"w-100 d-flex justify-content-between align-items-center",children:[e.jsxs("h3",{className:"text-white font-tertiary display-6 ",children:["Amazing and Super ",e.jsx("br",{})," Unique Art of this Work"]}),e.jsx("button",{className:"btn primary-bg-color text-white px-5",children:"See All"})]}),e.jsx("div",{className:"row mt-4",children:[...Array(3)].map((s,a)=>e.jsx("div",{className:"col-md-4",children:e.jsxs(K,{children:[e.jsx("img",{src:Y,alt:"",srcset:""}),e.jsxs("div",{className:"d-flex mt-2 justify-content-between align-items-center",children:[e.jsx("h6",{className:"text-white",children:"Charge, Qi tiao yu"}),e.jsx("p",{className:"text-white mb-0",children:"490ETH"})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex flex-column justify-content-start align-items-start",children:[e.jsx("h5",{className:"font-thin mb-0",children:"Ending in"}),e.jsxs("div",{className:"d-flex mt-2 justify-content-start align-items-center gap-2",children:[e.jsx(F,{color:"white",size:23}),e.jsx("h5",{className:"text-white mb-0",children:"03:24:56"})]})]}),e.jsx(N,{variant:"outline",children:"Place A Bid"})]})]})},a))})]}),V=()=>e.jsxs(y,{className:"",children:[e.jsx(J,{}),e.jsx(P,{}),e.jsx(W,{}),e.jsx(Q,{}),e.jsx(M,{})]});w(document.getElementById("root")).render(e.jsx(v.StrictMode,{children:e.jsx(V,{})}));
