"use strict";(self.webpackChunksuper_heroes=self.webpackChunksuper_heroes||[]).push([[196],{2404:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(9439),i=r(5987),a=r(5861),s=r(4687),c=r.n(s),o=r(5705),l=r(9434),u=r(2390),m=r(9057),d=r(4554),x=r(4567),p=r(5849),h=r(5369),g=r(3373);function f(e,n){for(var r=0;r<e.length;r++){var t=e[r];if(!["image/jpg","image/jpeg","image/png"].includes(t.type))return void n.setFieldError("images","Invalid file format. Only JPG, JPEG, PNG, and WEBP formats are allowed.")}}var j=function(e,n){for(var r=[],t=e.getAll(n),i=0;i<t.length;i++)r.push(t[i]);return r},v=r(6727),Z=/^[A-Za-z\s]+$/,w=v.Ry({nickname:v.Z_().min(3,"3 characters minimum").max(30,"30 characters maximum").matches(Z,"English letters only").required("Nickname is a required field"),real_name:v.Z_().min(3,"3 characters minimum").max(30,"30 characters maximum").matches(Z,"English letters only").required("Real name is a required field"),origin_description:v.Z_().min(3,"3 characters minimum").max(1e3,"1000 characters maximum").required("Description is a required field"),catch_phrase:v.Z_().min(3,"3 characters minimum").max(600,"100 characters maximum").required("Catch phrase is a required field"),superpowers:v.IX().of(v.Z_().min(3,"3 characters minimum").max(50,"50 characters maximum").label("Superpower")).required("Superpowers are required").min(1,"Please add at least one superpower")}),_="HeroForm_textField__input__gQaKX",k=r(184),b=["images"],y=function(e){var n=e.selectedHero,r=e.handleSubmitEditHero,s=(0,l.v9)(u.N8),v=(0,l.v9)(u.xU),Z=(0,l.I0)(),y=function(){var e=(0,a.Z)(c().mark((function e(r,a){var o,l,u,m,d,x;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=r.images,l=(0,i.Z)(r,b),u=new FormData,m=0,d=Object.values(o);m<d.length;m++)x=d[m],u.append("images",x);if(Object.entries(l).forEach((function(e){var n=(0,t.Z)(e,2),r=n[0],i=n[1];u.append(r,i)})),n){e.next=8;break}if(0!==o.length){e.next=8;break}return a.setFieldError("images","Please select at least one image"),e.abrupt("return");case 8:return f(o,a),e.next=11,N(u);case 11:if(s){e.next=15;break}(0,g.Z)("success","Success!"),e.next=16;break;case 15:return e.abrupt("return",(0,g.Z)("error",s));case 16:a.resetForm();case 17:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),N=function(){var e=(0,a.Z)(c().mark((function e(r){var t,i,a,s,o,l,u,m;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.get("nickname"),i=r.get("real_name"),a=r.get("origin_description"),s=r.get("catch_phrase"),o=r.get("superpowers").split(","),l=j(r,"images"),u={nickname:t,real_name:i,origin_description:a,catch_phrase:s,superpowers:o,images:l},!n){e.next=13;break}return m=n._id,e.next=11,B({formData:u,id:m});case 11:e.next=15;break;case 13:return e.next=15,C(u);case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),B=function(){var e=(0,a.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z((0,h.HD)(n));case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=(0,a.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z((0,h.gM)(n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,k.jsx)(d.Z,{children:(0,k.jsx)(o.J9,{initialValues:{nickname:n?n.nickname:"",real_name:n?n.real_name:"",origin_description:n?n.origin_description:"",catch_phrase:n?n.catch_phrase:"",superpowers:n?n.superpowers:[],images:[]},validationSchema:w,onSubmit:y,children:function(e){e.values;var r=e.setFieldValue;return(0,k.jsxs)(o.l0,{style:{display:"flex",flexDirection:"column",maxWidth:"400px",margin:"0 auto"},children:[!n&&(0,k.jsx)(x.Z,{sx:{marginBottom:"20px",textAlign:"center"},variant:"h5",children:"Add new SuperHero!"}),(0,k.jsxs)(d.Z,{style:{marginBottom:"16px"},children:[(0,k.jsx)(x.Z,{htmlFor:"nickname",children:"Nickname"}),(0,k.jsx)(o.gN,{type:"text",id:"nickname",name:"nickname",className:_}),(0,k.jsx)(o.Bc,{name:"nickname",component:"div",style:{color:"red"}})]}),(0,k.jsxs)(d.Z,{style:{marginBottom:"16px"},children:[(0,k.jsx)(x.Z,{htmlFor:"real_name",children:"Real Name"}),(0,k.jsx)(o.gN,{type:"text",id:"real_name",name:"real_name",className:_}),(0,k.jsx)(o.Bc,{name:"real_name",component:"div",style:{color:"red"}})]}),(0,k.jsxs)(d.Z,{style:{marginBottom:"16px"},children:[(0,k.jsx)(x.Z,{htmlFor:"origin_description",children:"Description"}),(0,k.jsx)(o.gN,{as:"textarea",id:"origin_description",name:"origin_description",className:_}),(0,k.jsx)(o.Bc,{name:"origin_description",component:"div",style:{color:"red"}})]}),(0,k.jsxs)(d.Z,{style:{marginBottom:"16px"},children:[(0,k.jsx)(x.Z,{htmlFor:"catch_phrase",children:"Catch phrase"}),(0,k.jsx)(o.gN,{as:"textarea",id:"catch_phrase",name:"catch_phrase",className:_}),(0,k.jsx)(o.Bc,{name:"catch_phrase",component:"div",style:{color:"red"}})]}),(0,k.jsxs)(d.Z,{style:{marginBottom:"16px"},children:[(0,k.jsx)(x.Z,{children:"Superpowers"}),(0,k.jsx)(o.F2,{name:"superpowers",children:function(e){var n=e.push,r=e.remove,t=e.form;return(0,k.jsxs)("div",{children:[t.values.superpowers.map((function(e,t){return(0,k.jsxs)("div",{children:[(0,k.jsx)(o.gN,{name:"superpowers.".concat(t),className:_}),(0,k.jsx)(p.Z,{variant:"outlined",type:"button",onClick:function(){return r(t)},children:"-"}),(0,k.jsx)(p.Z,{variant:"outlined",type:"button",onClick:function(){return n("")},children:"+"})]},t)})),(0,k.jsx)(p.Z,{variant:"outlined",sx:{marginTop:"8px"},type:"button",onClick:function(){return n("")},children:"Add Superpower"})]})}}),(0,k.jsx)(o.Bc,{name:"superpowers",component:"div",style:{color:"red"}})]})," ",(0,k.jsxs)(d.Z,{style:{marginBottom:"16px"},children:[(0,k.jsx)("label",{htmlFor:"images",children:"Images"}),(0,k.jsx)("input",{className:_,type:"file",id:"images",name:"images",accept:".jpg, .jpeg, .png, .webp",multiple:!0,onChange:function(e){var n=Array.from(e.target.files);r("images",n)},style:{padding:"8px"}}),(0,k.jsx)(o.Bc,{name:"images",component:"div",style:{color:"red"}})]}),(0,k.jsxs)(p.Z,{type:"submit",variant:"contained",color:"primary",sx:{width:"160px",margin:"0 auto"},children:[!v&&"Submitt",v&&(0,k.jsx)(m.a,{with:"25px",height:"25px",color:"#e0e1e6"})]})]})}})})}},3196:function(e,n,r){r.r(n),r.d(n,{default:function(){return X}});var t=r(9439),i=r(7689),a=r(2791),s=r(9434),c=r(9164),o=r(6751),l=r(1968),u=r.n(l),m=r(4554),d=r(4567),x=r(4841),p="Slider_img__Wfo6j",h="Slider_noImg__cP5hN",g=r(4226),f=r(184);function j(e){return(0,f.jsx)(x.Z,{children:(0,f.jsx)("img",{className:p,src:"".concat("https://sup-back.onrender.com").concat(e.item),alt:"hero avatar",width:"600px"})})}var v=function(e){var n=e.images;return(0,f.jsx)(m.Z,{children:0!==n.length?(0,f.jsxs)(m.Z,{children:[(0,f.jsx)(d.Z,{variant:"h2",sx:{textAlign:"center",marginBottom:"60px"},children:"Gallery"}),(0,f.jsx)(u(),{sx:{maxWidth:"900px",margin:"0 auto"},navButtonsAlwaysVisible:!0,next:function(r,t){return e.currentImg(n[t])},children:n.map((function(n,r){return(0,f.jsx)(j,{item:n,onDelete:e.onDelete},r)}))})]}):(0,f.jsx)("img",{src:g,alt:"backdrop no img",width:"400px",className:h})})},Z=r(3967),w=r(5193),_=r(2683),k=r(3236),b=r(2411),y=r(4333),N=r(220),B=r(9900);function C(e){var n=e.powers;return(0,f.jsxs)(m.Z,{children:[(0,f.jsx)(d.Z,{sx:{marginTop:"35px",textAlign:"center"},variant:"h5",children:"Super powers:"}),(0,f.jsx)(k.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper",margin:"0 auto"},children:n.map((function(e,n){return(0,f.jsxs)(b.ZP,{children:[(0,f.jsx)(y.Z,{children:(0,f.jsx)(N.Z,{sx:{width:"25px",height:"25px"},children:(0,f.jsx)(_.Z,{sx:{fill:"yellow"}})})}),(0,f.jsx)(B.Z,{primary:e})]},n)}))})]})}var I="HeroInfo_subTitle__uxBI7",S="HeroInfo_desc__PUl9d",D=function(e){var n=e.hero,r=n.nickname,t=n.real_name,i=n.origin_description,a=n.superpowers,s=n.catch_phrase,c=n.images,o=(0,Z.Z)(),l=(0,w.Z)(o.breakpoints.down("md"));return(0,f.jsxs)(m.Z,{sx:{marginBottom:"60px"},children:[(0,f.jsx)(d.Z,{sx:{textAlign:"center",marginBottom:"60px"},variant:"h3",children:"About"}),(0,f.jsxs)(m.Z,{sx:{display:"flex",justifyContent:"start",alignItems:"start",gap:"80px",padding:"0 50px",flexDirection:l?"column":"row"},children:[(0,f.jsx)("img",{src:0!==c.length?"".concat("https://sup-back.onrender.com").concat(c[0]):g,alt:"main hero avatar",width:"320px",height:"480px",style:{borderRadius:"8px"}}),(0,f.jsxs)(m.Z,{sx:{width:"100%"},children:[(0,f.jsxs)(d.Z,{sx:{marginBottom:"10px"},variant:"h5",children:[(0,f.jsx)("span",{className:I,children:"Nickname:"}),(0,f.jsxs)("span",{className:S,children:[" ",r]})]}),(0,f.jsxs)(d.Z,{sx:{marginBottom:"10px"},variant:"h5",children:[(0,f.jsx)("span",{className:I,children:"Real name:"}),(0,f.jsx)("span",{className:S,children:t})]}),(0,f.jsxs)(d.Z,{sx:{marginBottom:"10px"},variant:"h5",children:[(0,f.jsx)("span",{className:I,children:"Description:"}),(0,f.jsx)("span",{className:S,children:i})]}),(0,f.jsxs)(d.Z,{sx:{marginTop:"20px"},variant:"h5",children:[(0,f.jsx)("span",{className:I,children:"Catch phrase:"}),(0,f.jsx)("span",{className:S,children:s})]})]})]}),(0,f.jsx)(C,{powers:a})]})},A=r(5861),H=r(4687),F=r.n(H),E=r(7223),P={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:520,bgcolor:"background.paper",border:"none",borderRadius:"10px",boxShadow:24,p:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},q=function(e){var n=e.open,r=e.onClose,t=void 0===r?function(){}:r,i=e.children,a=e.title,s=void 0===a?"":a;return(0,f.jsx)("div",{children:(0,f.jsx)(E.Z,{open:n,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,f.jsxs)(m.Z,{sx:P,children:[s&&(0,f.jsx)(d.Z,{variant:"h5",sx:{marginBottom:"20px"},children:s}),(0,f.jsx)(m.Z,{children:i})]})})})},T=r(2404),z=r(5849),R=r(7247),U=r(1286),O=r(5369),W=r(2390),G=r(3373),J=function(e){var n=e.selectedImage,r=(0,a.useState)(!1),c=(0,t.Z)(r,2),o=c[0],l=c[1],u=(0,a.useState)(!1),x=(0,t.Z)(u,2),p=x[0],h=x[1],g=(0,a.useState)(!1),j=(0,t.Z)(g,2),v=j[0],Z=j[1],w=(0,s.v9)(W.N8),_=(0,s.v9)(W.xU),k=(0,s.I0)(),b=(0,i.UO)().id,y=(0,s.v9)((function(e){return(0,W.Nl)(e,b)})),N=(0,i.s0)(),B=function(){var e=(0,A.Z)(F().mark((function e(){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k((0,O.ig)(b));case 2:w?(0,G.Z)("error",w):(0,G.Z)("success","SuperHero deleted!"),l(!1),N("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,A.Z)(F().mark((function e(){var r;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==y.images.length){e.next=3;break}return Z(!1),e.abrupt("return",(0,G.Z)("error","Please add images!"));case 3:return r={id:b,selectedImage:n},e.next=6,k((0,O.K5)(r));case 6:w?(0,G.Z)("error",w):(0,G.Z)("success","Image deleted!"),Z(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(m.Z,{sx:{padding:"60px"},children:[(0,f.jsx)(d.Z,{sx:{textAlign:"center"},variant:"h4",children:"Options"}),(0,f.jsxs)(m.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",marginTop:"60px"},children:[(0,f.jsx)(z.Z,{variant:"contained",size:"large",sx:{width:"200px"},startIcon:(0,f.jsx)(R.Z,{}),onClick:function(){return l(!0)},children:"Hero"}),(0,f.jsx)(z.Z,{variant:"contained",size:"large",sx:{width:"190px"},startIcon:(0,f.jsx)(U.Z,{}),onClick:function(){return h(!0)},children:"Edit"}),(0,f.jsx)(z.Z,{variant:"contained",size:"large",sx:{width:"190px"},startIcon:(0,f.jsx)(R.Z,{}),onClick:function(){return Z(!0)},children:"Picture"})]}),(0,f.jsxs)(q,{title:"Delete SuperHero?",open:o,onClose:function(){return l(!1)},sx:{marginTop:"50px"},children:[(0,f.jsx)(z.Z,{variant:"contained",size:"large",sx:{width:"150px",marginRight:"30px"},onClick:B,children:"Delete"}),(0,f.jsx)(z.Z,{variant:"contained",size:"large",sx:{width:"150px"},onClick:function(){return l(!1)},children:"Cancel"})]}),(0,f.jsxs)(q,{title:"Delete this image from collection?",open:v,onClose:function(){return Z(!1)},sx:{marginTop:"50px"},children:[(0,f.jsx)(z.Z,{variant:"contained",size:"large",sx:{width:"150px",marginRight:"30px"},onClick:C,children:"Delete"}),(0,f.jsx)(z.Z,{variant:"contained",size:"large",sx:{width:"150px"},onClick:function(){return Z(!1)},children:"Cancel"})]}),(0,f.jsx)(q,{open:p,title:"Edit your SuperHero",onClose:function(){_||h(!1)},children:(0,f.jsx)(T.Z,{selectedHero:y,handleSubmitEditHero:function(){h(!1)}})})]})},K=r(9057),V="HeroPage_img__K2f3p",X=function(){var e,n,r=(0,a.useState)(""),l=(0,t.Z)(r,2),u=l[0],m=l[1],d=(0,i.UO)().id,x=(0,s.v9)((function(e){return(0,W.Nl)(e,d)}));(0,a.useEffect)((function(){x&&x.images&&x.images.length>0&&m(x.images[0])}),[x]);var p=null!==(e=null===(n=(0,i.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return x?(0,f.jsx)(c.Z,{maxWidth:"lg",children:(0,f.jsxs)("main",{children:[(0,f.jsx)(o.Z,{to:p,children:"Back"}),(0,f.jsx)(D,{hero:x}),"undefined"!==x.images?(0,f.jsx)(v,{images:"undefined"!==x.images?x.images:[g],currentImg:function(e){m(e)}}):(0,f.jsx)("img",{src:g,alt:"backdrop no img",width:"600px",className:V}),(0,f.jsx)(J,{sx:{position:"relative"},selectedImage:u})]})}):(0,f.jsx)(K.a,{})}},2390:function(e,n,r){r.d(n,{N8:function(){return i},Nl:function(){return s},aT:function(){return a},xU:function(){return t}});var t=function(e){return e.heroesData.isLoading},i=function(e){return e.heroesData.error},a=function(e){return e.heroesData.heroes},s=function(e,n){return a(e).find((function(e){return e._id===n}))||null}},6751:function(e,n,r){var t=r(1087),i=r(5849),a=r(5927),s=r(184);n.Z=function(e){var n=e.to,r=e.children;return(0,s.jsx)(i.Z,{sx:{marginRight:"auto",marginBottom:"28px",marginTop:"28px"},component:t.rU,to:n,startIcon:(0,s.jsx)(a.Z,{}),size:"small",color:"black",variant:"backBtn",children:r})}},3373:function(e,n,r){var t=r(5985);n.Z=function(e,n){switch(e){case"success":t.Am.success(n);break;case"error":t.Am.error(n);break;default:(0,t.Am)(n)}}},4226:function(e,n,r){e.exports=r.p+"static/media/noImage.5882c20d3ddf67c36e30.jpg"}}]);
//# sourceMappingURL=196.7d4f89ca.chunk.js.map