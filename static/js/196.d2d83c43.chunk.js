"use strict";(self.webpackChunksuper_heroes=self.webpackChunksuper_heroes||[]).push([[196],{2404:function(e,n,r){r.d(n,{Z:function(){return I}});var a=r(9439),t=r(5987),i=r(5861),s=r(4687),c=r.n(s),o=r(5705),l=r(9434),u=r(2390),m=r(9057),d=r(4554),p=r(4567),x=r(5849),h=r(5369),g=r(3373);function f(e,n){for(var r=0;r<e.length;r++){var a=e[r];if(!["image/jpg","image/jpeg","image/png"].includes(a.type))return void n.setFieldError("images","Invalid file format. Only JPG, JPEG, PNG, and WEBP formats are allowed.")}}var j=function(e,n){for(var r=[],a=e.getAll(n),t=0;t<a.length;t++)r.push(a[t]);return r},v=r(6727),Z=/^[A-Za-z\s]+$/,_=v.Ry({nickname:v.Z_().min(3,"3 characters minimum").max(30,"30 characters maximum").matches(Z,"English letters only").required("Nickname is a required field"),real_name:v.Z_().min(3,"3 characters minimum").max(30,"30 characters maximum").matches(Z,"English letters only").required("Real name is a required field"),origin_description:v.Z_().min(3,"3 characters minimum").max(1e3,"1000 characters maximum").required("Description is a required field"),catch_phrase:v.Z_().min(3,"3 characters minimum").max(600,"100 characters maximum").required("Catch phrase is a required field"),superpowers:v.IX().of(v.Z_().min(3,"3 characters minimum").max(50,"50 characters maximum").label("Superpower")).required("Superpowers are required").min(1,"Please add at least one superpower")}),w="HeroForm_textField__input__gQaKX",b="HeroForm_container__+2lQ0",k="HeroForm_errorMessage__+uoLp",N="HeroForm_form__vn8dx",y=r(184),C=["images"],I=function(e){var n=e.selectedHero,r=e.handleSubmitEditHero,s=(0,l.v9)(u.N8),v=(0,l.v9)(u.xU),Z=(0,l.I0)(),I=function(){var e=(0,i.Z)(c().mark((function e(r,i){var o,l,u,m,d,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=r.images,l=(0,t.Z)(r,C),u=new FormData,m=0,d=Object.values(o);m<d.length;m++)p=d[m],u.append("images",p);if(Object.entries(l).forEach((function(e){var n=(0,a.Z)(e,2),r=n[0],t=n[1];u.append(r,t)})),n){e.next=8;break}if(0!==o.length){e.next=8;break}return i.setFieldError("images","Please select at least one image"),e.abrupt("return");case 8:return f(o,i),e.next=11,S(u);case 11:if(s){e.next=15;break}(0,g.Z)("success","Success!"),e.next=16;break;case 15:return e.abrupt("return",(0,g.Z)("error",s));case 16:i.resetForm();case 17:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),S=function(){var e=(0,i.Z)(c().mark((function e(r){var a,t,i,s,o,l,u,m;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.get("nickname"),t=r.get("real_name"),i=r.get("origin_description"),s=r.get("catch_phrase"),o=r.get("superpowers").split(","),l=j(r,"images"),u={nickname:a,real_name:t,origin_description:i,catch_phrase:s,superpowers:o,images:l},!n){e.next=13;break}return m=n._id,e.next=11,B({formData:u,id:m});case 11:e.next=15;break;case 13:return e.next=15,H(u);case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),B=function(){var e=(0,i.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z((0,h.HD)(n)),r();case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),H=function(){var e=(0,i.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z((0,h.gM)(n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,y.jsx)(d.Z,{children:(0,y.jsx)(o.J9,{initialValues:{nickname:n?n.nickname:"",real_name:n?n.real_name:"",origin_description:n?n.origin_description:"",catch_phrase:n?n.catch_phrase:"",superpowers:n?n.superpowers:[],images:[]},validationSchema:_,onSubmit:I,children:function(e){e.values;var r=e.setFieldValue;return(0,y.jsxs)(o.l0,{className:N,children:[!n&&(0,y.jsx)(p.Z,{sx:{marginBottom:"20px",textAlign:"center"},variant:"h5",children:"Add new SuperHero!"}),(0,y.jsxs)(d.Z,{className:b,children:[(0,y.jsx)(p.Z,{htmlFor:"nickname",children:"Nickname"}),(0,y.jsx)(o.gN,{type:"text",id:"nickname",name:"nickname",className:w}),(0,y.jsx)(o.Bc,{name:"nickname",component:"div",className:w})]}),(0,y.jsxs)(d.Z,{className:b,children:[(0,y.jsx)(p.Z,{htmlFor:"real_name",children:"Real Name"}),(0,y.jsx)(o.gN,{type:"text",id:"real_name",name:"real_name",className:w}),(0,y.jsx)(o.Bc,{name:"real_name",component:"div",className:k})]}),(0,y.jsxs)(d.Z,{className:b,children:[(0,y.jsx)(p.Z,{htmlFor:"origin_description",children:"Description"}),(0,y.jsx)(o.gN,{as:"textarea",id:"origin_description",name:"origin_description",className:w}),(0,y.jsx)(o.Bc,{name:"origin_description",component:"div",className:k})]}),(0,y.jsxs)(d.Z,{className:b,children:[(0,y.jsx)(p.Z,{htmlFor:"catch_phrase",children:"Catch phrase"}),(0,y.jsx)(o.gN,{as:"textarea",id:"catch_phrase",name:"catch_phrase",className:w}),(0,y.jsx)(o.Bc,{name:"catch_phrase",component:"div",className:k})]}),(0,y.jsxs)(d.Z,{className:b,children:[(0,y.jsx)(p.Z,{children:"Superpowers"}),(0,y.jsx)(o.F2,{name:"superpowers",children:function(e){var n=e.push,r=e.remove,a=e.form;return(0,y.jsxs)("div",{children:[a.values.superpowers.map((function(e,a){return(0,y.jsxs)("div",{children:[(0,y.jsx)(o.gN,{name:"superpowers.".concat(a),className:w}),(0,y.jsx)(x.Z,{variant:"outlined",type:"button",onClick:function(){return r(a)},children:"-"}),(0,y.jsx)(x.Z,{variant:"outlined",type:"button",onClick:function(){return n("")},children:"+"})]},a)})),(0,y.jsx)(x.Z,{variant:"outlined",sx:{marginTop:"8px"},type:"button",onClick:function(){return n("")},children:"Add Superpower"})]})}}),(0,y.jsx)(o.Bc,{name:"superpowers",component:"div",className:k})]})," ",(0,y.jsxs)(d.Z,{className:b,children:[(0,y.jsx)("label",{htmlFor:"images",children:"Images"}),(0,y.jsx)("input",{className:w,type:"file",id:"images",name:"images",accept:".jpg, .jpeg, .png, .webp",multiple:!0,onChange:function(e){var n=Array.from(e.target.files);r("images",n)}}),(0,y.jsx)(o.Bc,{name:"images",component:"div",className:k})]}),(0,y.jsxs)(x.Z,{type:"submit",variant:"contained",color:"primary",sx:{width:"160px",margin:"0 auto"},children:[!v&&"Submitt",v&&(0,y.jsx)(m.a,{with:"25px",height:"25px",color:"#e0e1e6"})]})]})}})})}},3196:function(e,n,r){r.r(n),r.d(n,{default:function(){return K}});var a=r(9439),t=r(7689),i=r(2791),s=r(9434),c=r(9164),o=r(6751),l=r(1968),u=r.n(l),m=r(4554),d=r(4567),p=r(4841),x="Slider_img__Wfo6j",h="Slider_noImg__cP5hN",g=r(4226),f=r(184);function j(e){return(0,f.jsx)(p.Z,{children:(0,f.jsx)("img",{className:x,src:"".concat("https://super-heroes-backend-git-main-alexuber.vercel.app/").concat(e.item),alt:"hero avatar",width:"600px"})})}var v=function(e){var n=e.images;return(0,f.jsx)(m.Z,{children:0!==n.length?(0,f.jsxs)(m.Z,{children:[(0,f.jsx)(d.Z,{variant:"h2",sx:{textAlign:"center",marginBottom:"60px"},children:"Gallery"}),(0,f.jsx)(u(),{sx:{maxWidth:"900px",margin:"0 auto"},navButtonsAlwaysVisible:!0,next:function(r,a){return e.currentImg(n[a])},children:n.map((function(n,r){return(0,f.jsx)(j,{item:n,onDelete:e.onDelete},r)}))})]}):(0,f.jsx)("img",{src:g,alt:"backdrop no img",width:"400px",className:h})})},Z=r(3967),_=r(5193),w=r(2683),b=r(3236),k=r(2411),N=r(4333),y=r(220),C=r(9900);function I(e){var n=e.powers;return(0,f.jsxs)(m.Z,{children:[(0,f.jsx)(d.Z,{sx:{marginTop:"35px",textAlign:"center"},variant:"h5",children:"Super powers:"}),(0,f.jsx)(b.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper",margin:"0 auto"},children:n.map((function(e,n){return(0,f.jsxs)(k.ZP,{children:[(0,f.jsx)(N.Z,{children:(0,f.jsx)(y.Z,{sx:{width:"25px",height:"25px"},children:(0,f.jsx)(w.Z,{sx:{fill:"yellow"}})})}),(0,f.jsx)(C.Z,{primary:e})]},n)}))})]})}var S={subTitle:"HeroInfo_subTitle__uxBI7",desc:"HeroInfo_desc__PUl9d",maunAvatar:"HeroInfo_maunAvatar__8Vkdk"},B=function(e){var n=e.hero,r=n.nickname,a=n.real_name,t=n.origin_description,i=n.superpowers,s=n.catch_phrase,c=n.images,o=(0,Z.Z)(),l=(0,_.Z)(o.breakpoints.down("md"));return(0,f.jsxs)(m.Z,{sx:{marginBottom:"60px"},children:[(0,f.jsx)(d.Z,{sx:{textAlign:"center",marginBottom:"60px"},variant:"h3",children:"About"}),(0,f.jsxs)(m.Z,{sx:{display:"flex",justifyContent:"start",alignItems:"start",gap:"80px",padding:"0 50px",flexDirection:l?"column":"row"},children:[(0,f.jsx)("img",{src:0!==c.length?"".concat("https://super-heroes-backend-git-main-alexuber.vercel.app/").concat(c[0]):g,alt:"main hero avatar",width:"320px",height:"480px",className:S.mainAvatar}),(0,f.jsxs)(m.Z,{sx:{width:"100%"},children:[(0,f.jsxs)(d.Z,{sx:{marginBottom:"10px"},variant:"h5",children:[(0,f.jsx)("span",{className:S.subTitle,children:"Nickname:"}),(0,f.jsxs)("span",{className:S.desc,children:[" ",r]})]}),(0,f.jsxs)(d.Z,{sx:{marginBottom:"10px"},variant:"h5",children:[(0,f.jsx)("span",{className:S.subTitle,children:"Real name:"}),(0,f.jsx)("span",{className:S.desc,children:a})]}),(0,f.jsxs)(d.Z,{sx:{marginBottom:"10px"},variant:"h5",children:[(0,f.jsx)("span",{className:S.subTitle,children:"Description:"}),(0,f.jsx)("span",{className:S.desc,children:t})]}),(0,f.jsxs)(d.Z,{sx:{marginTop:"20px"},variant:"h5",children:[(0,f.jsx)("span",{className:S.subTitle,children:"Catch phrase:"}),(0,f.jsx)("span",{className:S.desc,children:s})]})]})]}),(0,f.jsx)(I,{powers:i})]})},H=r(5861),A=r(4687),D=r.n(A),F=r(7223),T={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:520,bgcolor:"background.paper",border:"none",borderRadius:"10px",boxShadow:24,p:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},E=function(e){var n=e.open,r=e.onClose,a=void 0===r?function(){}:r,t=e.children,i=e.title,s=void 0===i?"":i;return(0,f.jsx)("div",{children:(0,f.jsx)(F.Z,{open:n,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,f.jsxs)(m.Z,{sx:T,children:[s&&(0,f.jsx)(d.Z,{variant:"h5",sx:{marginBottom:"20px"},children:s}),(0,f.jsx)(m.Z,{children:t})]})})})},P=r(2404),q=r(5849),z=r(7247),R=r(1286),U=r(5369),O=r(2390),W=r(3373),G=function(e){var n=e.selectedImage,r=(0,i.useState)(!1),c=(0,a.Z)(r,2),o=c[0],l=c[1],u=(0,i.useState)(!1),p=(0,a.Z)(u,2),x=p[0],h=p[1],g=(0,i.useState)(!1),j=(0,a.Z)(g,2),v=j[0],Z=j[1],_=(0,s.v9)(O.N8),w=(0,s.v9)(O.xU),b=(0,s.I0)(),k=(0,t.UO)().id,N=(0,s.v9)((function(e){return(0,O.Nl)(e,k)})),y=(0,t.s0)(),C=function(){var e=(0,H.Z)(D().mark((function e(){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b((0,U.ig)(k)),_?(0,W.Z)("error",_):(0,W.Z)("success","SuperHero deleted!"),l(!1),y("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,H.Z)(D().mark((function e(){var r;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==N.images.length){e.next=3;break}return Z(!1),e.abrupt("return",(0,W.Z)("error","Please add images!"));case 3:r={id:k,selectedImage:n},(0,U.K5)(r),_?(0,W.Z)("error",_):(0,W.Z)("success","Image deleted!"),Z(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(m.Z,{sx:{padding:"60px"},children:[(0,f.jsx)(d.Z,{sx:{textAlign:"center"},variant:"h4",children:"Options"}),(0,f.jsxs)(m.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",marginTop:"60px"},children:[(0,f.jsx)(q.Z,{variant:"contained",size:"large",sx:{width:"200px"},startIcon:(0,f.jsx)(z.Z,{}),onClick:function(){return l(!0)},children:"Hero"}),(0,f.jsx)(q.Z,{variant:"contained",size:"large",sx:{width:"190px"},startIcon:(0,f.jsx)(R.Z,{}),onClick:function(){return h(!0)},children:"Edit"}),(0,f.jsx)(q.Z,{variant:"contained",size:"large",sx:{width:"190px"},startIcon:(0,f.jsx)(z.Z,{}),onClick:function(){return Z(!0)},children:"Picture"})]}),(0,f.jsxs)(E,{title:"Delete SuperHero?",open:o,onClose:function(){return l(!1)},sx:{marginTop:"50px"},children:[(0,f.jsx)(q.Z,{variant:"contained",size:"large",sx:{width:"150px",marginRight:"30px"},onClick:C,children:"Delete"}),(0,f.jsx)(q.Z,{variant:"contained",size:"large",sx:{width:"150px"},onClick:function(){return l(!1)},children:"Cancel"})]}),(0,f.jsxs)(E,{title:"Delete this image from collection?",open:v,onClose:function(){return Z(!1)},sx:{marginTop:"50px"},children:[(0,f.jsx)(q.Z,{variant:"contained",size:"large",sx:{width:"150px",marginRight:"30px"},onClick:I,children:"Delete"}),(0,f.jsx)(q.Z,{variant:"contained",size:"large",sx:{width:"150px"},onClick:function(){return Z(!1)},children:"Cancel"})]}),(0,f.jsx)(E,{open:x,title:"Edit your SuperHero",onClose:function(){w||h(!1)},children:(0,f.jsx)(P.Z,{selectedHero:N,handleSubmitEditHero:function(){h(!1)}})})]})},V=r(9057),J="HeroPage_img__K2f3p",K=function(){var e,n,r=(0,i.useState)(""),l=(0,a.Z)(r,2),u=l[0],m=l[1],d=(0,t.UO)().id,p=(0,s.v9)((function(e){return(0,O.Nl)(e,d)}));(0,i.useEffect)((function(){p&&p.images&&p.images.length>0&&m(p.images[0])}),[p]);var x=null!==(e=null===(n=(0,t.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return p?(0,f.jsx)(c.Z,{maxWidth:"lg",children:(0,f.jsxs)("main",{children:[(0,f.jsx)(o.Z,{to:x,children:"Back"}),(0,f.jsx)(B,{hero:p}),"undefined"!==p.images?(0,f.jsx)(v,{images:"undefined"!==p.images?p.images:[g],currentImg:function(e){m(e)}}):(0,f.jsx)("img",{src:g,alt:"backdrop no img",width:"600px",className:J}),(0,f.jsx)(G,{sx:{position:"relative"},selectedImage:u})]})}):(0,f.jsx)(V.a,{})}},2390:function(e,n,r){r.d(n,{N8:function(){return t},Nl:function(){return s},aT:function(){return i},xU:function(){return a}});var a=function(e){return e.heroesData.isLoading},t=function(e){return e.heroesData.error},i=function(e){return e.heroesData.heroes},s=function(e,n){return i(e).find((function(e){return e._id===n}))||null}},6751:function(e,n,r){var a=r(1087),t=r(5849),i=r(5927),s=r(184);n.Z=function(e){var n=e.to,r=e.children;return(0,s.jsx)(t.Z,{sx:{marginRight:"auto",marginBottom:"28px",marginTop:"28px"},component:a.rU,to:n,startIcon:(0,s.jsx)(i.Z,{}),size:"small",color:"black",variant:"backBtn",children:r})}},3373:function(e,n,r){var a=r(5985);n.Z=function(e,n){switch(e){case"success":a.Am.success(n);break;case"error":a.Am.error(n);break;default:(0,a.Am)(n)}}},4226:function(e,n,r){e.exports=r.p+"static/media/noImage.5882c20d3ddf67c36e30.jpg"}}]);
//# sourceMappingURL=196.d2d83c43.chunk.js.map