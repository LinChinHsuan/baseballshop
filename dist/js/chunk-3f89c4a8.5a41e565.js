(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f89c4a8"],{"04d1":function(e,t,c){var o=c("342f"),r=o.match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},"159b":function(e,t,c){var o=c("da84"),r=c("fdbc"),i=c("17c2"),a=c("9112");for(var n in r){var s=o[n],l=s&&s.prototype;if(l&&l.forEach!==i)try{a(l,"forEach",i)}catch(d){l.forEach=i}}},1799:function(e,t,c){"use strict";var o=c("7a23"),r=Object(o["withScopeId"])("data-v-4fd1f20a");Object(o["pushScopeId"])("data-v-4fd1f20a");var i={"aria-label":"Page navigation example"},a={class:"pagination"},n=Object(o["createVNode"])("span",{class:"material-icons"},"navigate_before",-1),s=Object(o["createVNode"])("span",{class:"material-icons"},"navigate_next",-1);Object(o["popScopeId"])();var l=r((function(e,t,c,r,l,d){return Object(o["openBlock"])(),Object(o["createBlock"])("nav",i,[Object(o["createVNode"])("ul",a,[Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_pre}]},[Object(o["createVNode"])("a",{class:"page-link px-2 h-100 d-flex align-items-center",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.$emit("getProducts",c.pages.current_page-1)}),["prevent"]))},[n])],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pages.total_pages,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["page-item",{active:t===c.pages.current_page}],key:t},[Object(o["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(c){return e.$emit("getProducts",t)}),["prevent"])},Object(o["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_next}]},[Object(o["createVNode"])("a",{class:"page-link px-2 h-100 d-flex align-items-center",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(t){return e.$emit("getProducts",c.pages.current_page+1)}),["prevent"]))},[s])],2)])])})),d={props:["pages"]};c("f6d3");d.render=l,d.__scopeId="data-v-4fd1f20a";t["a"]=d},"17c2":function(e,t,c){"use strict";var o=c("b727").forEach,r=c("a640"),i=r("forEach");e.exports=i?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,c){var o=c("d039"),r=c("b622"),i=c("2d00"),a=r("species");e.exports=function(e){return i>=51||!o((function(){var t=[],c=t.constructor={};return c[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2a75":function(e,t,c){"use strict";c("d076")},"3e2b":function(e,t,c){"use strict";c.r(t);c("4de4");var o=c("7a23"),r=Object(o["withScopeId"])("data-v-3b984dce");Object(o["pushScopeId"])("data-v-3b984dce");var i=Object(o["createVNode"])("div",{class:"container-fliud productBaner mb-4 mb-md-5"},null,-1),a={class:"container"},n={"aria-label":"breadcrumb"},s={class:"breadcrumb mb-4"},l=Object(o["createTextVNode"])("首頁"),d=Object(o["createTextVNode"])("產品列表"),u={class:"row"},f={class:"d-none d-md-block col-md-9 col-lg-10 ms-auto"},b={class:"d-flex align-items-center mb-3"},p=Object(o["createVNode"])("p",{class:"h5 mb-0"},"所有商品",-1),h={class:"mb-0 ms-auto"},g=Object(o["createVNode"])("option",{selected:"",value:""},"預設排序",-1),v=Object(o["createVNode"])("option",{value:"lowToHigh"},"價格由低至高",-1),m=Object(o["createVNode"])("option",{value:"HighTolow"},"價格由高至低",-1),j={class:"row"},O={class:"col d-md-none mb-3"},y={class:"list-group list-group-flush border border-primary border-4"},N={class:"d-flex"},V={class:"d-flex"},w={class:"d-none d-md-block col-md-3 col-lg-2"},k={class:"list-group list-group-flush border border-primary border-4"},x=Object(o["createVNode"])("select",{class:"d-md-none form-select mt-3 mb-4"},[Object(o["createVNode"])("option",{selected:""},"預設排序"),Object(o["createVNode"])("option",{value:"1"},"價格由低至高"),Object(o["createVNode"])("option",{value:"2"},"價格由高至低")],-1),C={class:"col-md-9 col-lg-10"},S={class:"row mb-4"},M={class:"card productCard mb-3"},B={class:"card-body"},I={class:"card-title h4 mt-2 mb-3"},_=Object(o["createVNode"])("p",{class:"card-text mb-0"},"價格",-1),P={class:"d-flex justify-content-between align-items-baseline"},A={class:"h6 my-0 text-muted",style:{"text-decoration":"line-through"}},E={class:"h4 my-0 text-danger"},T={class:"d-flex justify-content-end text-danger"},F={key:0,class:"d-flex justify-content-center"},D={class:"container-fluid coupon p-4 mt-5"},$={class:"py-4 backdrop-blur"},H=Object(o["createVNode"])("p",{class:"text-center h2 fw-bold mb-3 text-white"},"球季開打大優惠",-1),J=Object(o["createVNode"])("p",{class:"text-center h3 fw-bold mb-0 text-white"}," 慶祝中職開打，優惠券碼輸入 CPBL2021，全館商品享有 8 折優惠！ ",-1),L={class:"d-flex justify-content-center mt-3"},G=Object(o["createTextVNode"])(" 使用優惠 "),K={key:0,class:"w-100 d-flex justify-content-center position-fixed alertMsg"},U={class:"alert alert-success alert-dismissible fade show mb-0",role:"alert"},q={class:"d-flex align-items-center"},W=Object(o["createVNode"])("span",{class:"material-icons text-white me-2"},"done",-1),z={class:"mb-0"};Object(o["popScopeId"])();var Q=r((function(e,t,c,Q,R,X){var Y=Object(o["resolveComponent"])("router-link"),Z=Object(o["resolveComponent"])("pagination"),ee=Object(o["resolveComponent"])("footer-component");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[i,Object(o["createVNode"])("div",a,[Object(o["createVNode"])("nav",n,[Object(o["createVNode"])("ol",s,[Object(o["createVNode"])(Y,{class:"breadcrumb-item",to:"/"},{default:r((function(){return[l]})),_:1}),Object(o["createVNode"])(Y,{class:"breadcrumb-item active",to:"/products"},{default:r((function(){return[d]})),_:1})])]),Object(o["createVNode"])("div",u,[Object(o["createVNode"])("div",f,[Object(o["createVNode"])("div",b,[p,Object(o["createVNode"])("p",h,"本頁共有 "+Object(o["toDisplayString"])(X.filterProducts.length)+" 件商品",1),Object(o["withDirectives"])(Object(o["createVNode"])("select",{class:"form-select w-auto ms-3","onUpdate:modelValue":t[1]||(t[1]=function(e){return R.filter=e}),onChange:t[2]||(t[2]=function(){return X.usefilter&&X.usefilter.apply(X,arguments)})},[g,v,m],544),[[o["vModelSelect"],R.filter]])])])]),Object(o["createVNode"])("div",j,[Object(o["createVNode"])("div",O,[Object(o["createVNode"])("div",y,[Object(o["createVNode"])("div",N,[Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"all"===R.category}],onClick:t[3]||(t[3]=Object(o["withModifiers"])((function(e){return R.category="all"}),["prevent"]))}," 全部商品 ",2),Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"棒球"===R.category}],onClick:t[4]||(t[4]=Object(o["withModifiers"])((function(e){return R.category="棒球"}),["prevent"]))}," 棒球專區 ",2),Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"球棒"===R.category}],onClick:t[5]||(t[5]=Object(o["withModifiers"])((function(e){return R.category="球棒"}),["prevent"]))}," 品質球棒 ",2)]),Object(o["createVNode"])("div",V,[Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"手套"===R.category}],onClick:t[6]||(t[6]=Object(o["withModifiers"])((function(e){return R.category="手套"}),["prevent"]))}," 牛皮手套 ",2),Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"護具"===R.category}],onClick:t[7]||(t[7]=Object(o["withModifiers"])((function(e){return R.category="護具"}),["prevent"]))}," 專業護具 ",2),Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"其他"===R.category}],onClick:t[8]||(t[8]=Object(o["withModifiers"])((function(e){return R.category="其他"}),["prevent"]))}," 其他商品 ",2)])])]),Object(o["createVNode"])("div",w,[Object(o["createVNode"])("div",k,[Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"all"===R.category}],onClick:t[9]||(t[9]=Object(o["withModifiers"])((function(e){return R.category="all"}),["prevent"]))}," 全部商品 ",2),Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"棒球"===R.category}],onClick:t[10]||(t[10]=Object(o["withModifiers"])((function(e){return R.category="棒球"}),["prevent"]))}," 棒球專區 ",2),Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"球棒"===R.category}],onClick:t[11]||(t[11]=Object(o["withModifiers"])((function(e){return R.category="球棒"}),["prevent"]))}," 品質球棒 ",2),Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"手套"===R.category}],onClick:t[12]||(t[12]=Object(o["withModifiers"])((function(e){return R.category="手套"}),["prevent"]))}," 牛皮手套 ",2),Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"護具"===R.category}],onClick:t[13]||(t[13]=Object(o["withModifiers"])((function(e){return R.category="護具"}),["prevent"]))}," 專業護具 ",2),Object(o["createVNode"])("button",{type:"button",class:["list-group-item list-group-item-action py-3",{active:"其他"===R.category}],onClick:t[14]||(t[14]=Object(o["withModifiers"])((function(e){return R.category="其他"}),["prevent"]))}," 其他商品 ",2)]),x]),Object(o["createVNode"])("div",C,[Object(o["createVNode"])("div",S,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(X.filterProducts,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"col-md-6 col-lg-4",key:e.id,onClick:Object(o["withModifiers"])((function(t){return X.getProduct(e.id)}),["prevent"])},[Object(o["createVNode"])("div",M,[Object(o["createVNode"])("div",{class:"productImage position-relative overflow-hidden",style:{backgroundImage:"url(".concat(e.imageUrl,")")}},[Object(o["createVNode"])("span",{class:["material-icons position-absolute p-2",{"text-danger":X.isFavorite(e.id)}],onClick:Object(o["withModifiers"])((function(t){return X.addFavorite(e)}),["stop"])},"favorite",10,["onClick"]),Object(o["createVNode"])("div",{class:"position-absolute addCart w-100 bg-primary py-3 text-white text-center",onClick:Object(o["withModifiers"])((function(t){return X.addCart(e.id)}),["stop"])}," 加到購物車 ",8,["onClick"])],4),Object(o["createVNode"])("div",B,[Object(o["createVNode"])("h5",I,Object(o["toDisplayString"])(e.title),1),_,Object(o["createVNode"])("div",P,[Object(o["createVNode"])("div",A," $ "+Object(o["toDisplayString"])(e.origin_price),1),Object(o["createVNode"])("div",E,"$"+Object(o["toDisplayString"])(e.price),1)]),Object(o["createVNode"])("small",T,"OFF: $"+Object(o["toDisplayString"])(e.origin_price-e.price)+" ("+Object(o["toDisplayString"])(Math.floor((e.origin_price-e.price)/e.origin_price*100))+"%)",1)])])],8,["onClick"])})),128))]),"all"===R.category?(Object(o["openBlock"])(),Object(o["createBlock"])("div",F,[Object(o["createVNode"])(Z,{pages:R.pages,onGetProducts:X.getProducts},null,8,["pages","onGetProducts"])])):Object(o["createCommentVNode"])("",!0)])])]),Object(o["createVNode"])("div",D,[Object(o["createVNode"])("div",$,[H,J,Object(o["createVNode"])("div",L,[Object(o["createVNode"])(Y,{class:"btn btn-primary text-white",to:"/cart"},{default:r((function(){return[G]})),_:1})])])]),R.alertShow?(Object(o["openBlock"])(),Object(o["createBlock"])("div",K,[Object(o["createVNode"])("div",U,[Object(o["createVNode"])("div",q,[W,Object(o["createVNode"])("span",z,Object(o["toDisplayString"])(R.alertMsg),1)]),Object(o["createVNode"])("button",{type:"button",class:"btn-close top-50 end-0 translate-middle-y","data-bs-dismiss":"alert","aria-label":"Close",onClick:t[15]||(t[15]=function(e){return R.alertShow=!1})})])])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(ee)],64)})),R=(c("99af"),c("7db0"),c("a434"),c("159b"),c("4e82"),c("1799")),X=c("fd2d"),Y={data:function(){return{products:{},filter:"",category:"all",pages:{},favorite:[],favoriteIds:[],alertShow:!1,alertMsg:""}},components:{pagination:R["a"],footerComponent:X["a"]},methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;"all"===this.category?this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("vuebaseballshop","/products?page=").concat(t)).then((function(t){t.data.success?(e.products=t.data.products,e.pages=t.data.pagination):alert(t.data.message)})).catch((function(e){console.log(e)})):this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("vuebaseballshop","/products/all")).then((function(t){t.data.success?e.products=t.data.products:alert(t.data.message)})).catch((function(e){console.log(e)}))},getProduct:function(e){this.$router.push("/product/".concat(e))},addCart:function(e){var t=this;this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("vuebaseballshop","/cart"),{data:{product_id:e,qty:1}}).then((function(e){t.isLoading=!1,e.data.success?(t.alertMsg="已將商品新增至購物車！",t.alertShow=!0,t.timeout=setTimeout((function(){t.alertShow=!1}),3e3)):alert(e.data.message)})).catch((function(e){console.log(e)}))},addFavorite:function(e){var t=this,c=e.id;if(this.favorite.some((function(e){return e.id===c}))){var o=this.favorite.find((function(e){return e.id===c}));this.favorite.splice(this.favorite.indexOf(o),1),console.log(this.favorite),localStorage.setItem("favorite",JSON.stringify(this.favorite)),this.alertMsg="已將商品從我的最愛中刪除！"}else this.favorite.push(e),this.alertMsg="已將商品新增至我的最愛！",localStorage.setItem("favorite",JSON.stringify(this.favorite));this.getFavorite(),this.alertShow=!0,this.timeout=setTimeout((function(){t.alertShow=!1}),3e3)},getFavorite:function(){var e=this;this.favoriteIds=[],this.favorite=JSON.parse(localStorage.getItem("favorite"))||[],this.favorite.forEach((function(t){e.favoriteIds.push(t.id)}))},isFavorite:function(e){return this.favoriteIds.some((function(t){return t===e}))},usefilter:function(){"lowToHigh"===this.filter?this.products.sort((function(e,t){return e.price-t.price})):"HighTolow"===this.filter?this.products.sort((function(e,t){return t.price-e.price})):this.getProducts(),console.log(this.filter)}},computed:{filterProducts:function(){var e=this;if("all"===this.category)return this.products;var t=this.products.filter((function(t){if(t.category===e.category)return t}));return t}},watch:{category:function(){this.getProducts()}},created:function(){this.getFavorite(),this.getProducts()}};c("d54d");Y.render=Q,Y.__scopeId="data-v-3b984dce";t["default"]=Y},"4de4":function(e,t,c){"use strict";var o=c("23e7"),r=c("b727").filter,i=c("1dde"),a=i("filter");o({target:"Array",proto:!0,forced:!a},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(e,t,c){"use strict";var o=c("23e7"),r=c("1c0b"),i=c("7b0b"),a=c("50c4"),n=c("d039"),s=c("addb"),l=c("a640"),d=c("04d1"),u=c("d998"),f=c("2d00"),b=c("512c"),p=[],h=p.sort,g=n((function(){p.sort(void 0)})),v=n((function(){p.sort(null)})),m=l("sort"),j=!n((function(){if(f)return f<70;if(!(d&&d>3)){if(u)return!0;if(b)return b<603;var e,t,c,o,r="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:c=3;break;case 68:case 71:c=4;break;default:c=2}for(o=0;o<47;o++)p.push({k:t+o,v:c})}for(p.sort((function(e,t){return t.v-e.v})),o=0;o<p.length;o++)t=p[o].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}})),O=g||!v||!m||!j,y=function(e){return function(t,c){return void 0===c?-1:void 0===t?1:void 0!==e?+e(t,c)||0:String(t)>String(c)?1:-1}};o({target:"Array",proto:!0,forced:O},{sort:function(e){void 0!==e&&r(e);var t=i(this);if(j)return void 0===e?h.call(t):h.call(t,e);var c,o,n=[],l=a(t.length);for(o=0;o<l;o++)o in t&&n.push(t[o]);n=s(n,y(e)),c=n.length,o=0;while(o<c)t[o]=n[o++];while(o<l)delete t[o++];return t}})},"512c":function(e,t,c){var o=c("342f"),r=o.match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},"56c6":function(e,t,c){},"65f0":function(e,t,c){var o=c("861d"),r=c("e8b5"),i=c("b622"),a=i("species");e.exports=function(e,t){var c;return r(e)&&(c=e.constructor,"function"!=typeof c||c!==Array&&!r(c.prototype)?o(c)&&(c=c[a],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===t?0:t)}},"7db0":function(e,t,c){"use strict";var o=c("23e7"),r=c("b727").find,i=c("44d2"),a="find",n=!0;a in[]&&Array(1)[a]((function(){n=!1})),o({target:"Array",proto:!0,forced:n},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i(a)},8418:function(e,t,c){"use strict";var o=c("c04e"),r=c("9bf2"),i=c("5c6c");e.exports=function(e,t,c){var a=o(t);a in e?r.f(e,a,i(0,c)):e[a]=c}},"99af":function(e,t,c){"use strict";var o=c("23e7"),r=c("d039"),i=c("e8b5"),a=c("861d"),n=c("7b0b"),s=c("50c4"),l=c("8418"),d=c("65f0"),u=c("1dde"),f=c("b622"),b=c("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",v=b>=51||!r((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),m=u("concat"),j=function(e){if(!a(e))return!1;var t=e[p];return void 0!==t?!!t:i(e)},O=!v||!m;o({target:"Array",proto:!0,forced:O},{concat:function(e){var t,c,o,r,i,a=n(this),u=d(a,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(i=-1===t?a:arguments[t],j(i)){if(r=s(i.length),f+r>h)throw TypeError(g);for(c=0;c<r;c++,f++)c in i&&l(u,f,i[c])}else{if(f>=h)throw TypeError(g);l(u,f++,i)}return u.length=f,u}})},a434:function(e,t,c){"use strict";var o=c("23e7"),r=c("23cb"),i=c("a691"),a=c("50c4"),n=c("7b0b"),s=c("65f0"),l=c("8418"),d=c("1dde"),u=d("splice"),f=Math.max,b=Math.min,p=9007199254740991,h="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,d,u,g,v,m=n(this),j=a(m.length),O=r(e,j),y=arguments.length;if(0===y?c=o=0:1===y?(c=0,o=j-O):(c=y-2,o=b(f(i(t),0),j-O)),j+c-o>p)throw TypeError(h);for(d=s(m,o),u=0;u<o;u++)g=O+u,g in m&&l(d,u,m[g]);if(d.length=o,c<o){for(u=O;u<j-o;u++)g=u+o,v=u+c,g in m?m[v]=m[g]:delete m[v];for(u=j;u>j-o+c;u--)delete m[u-1]}else if(c>o)for(u=j-o;u>O;u--)g=u+o-1,v=u+c-1,g in m?m[v]=m[g]:delete m[v];for(u=0;u<c;u++)m[u+O]=arguments[u+2];return m.length=j-o+c,d}})},a640:function(e,t,c){"use strict";var o=c("d039");e.exports=function(e,t){var c=[][e];return!!c&&o((function(){c.call(null,t||function(){throw 1},1)}))}},addb:function(e,t){var c=Math.floor,o=function(e,t){var a=e.length,n=c(a/2);return a<8?r(e,t):i(o(e.slice(0,n),t),o(e.slice(n),t),t)},r=function(e,t){var c,o,r=e.length,i=1;while(i<r){o=i,c=e[i];while(o&&t(e[o-1],c)>0)e[o]=e[--o];o!==i++&&(e[o]=c)}return e},i=function(e,t,c){var o=e.length,r=t.length,i=0,a=0,n=[];while(i<o||a<r)i<o&&a<r?n.push(c(e[i],t[a])<=0?e[i++]:t[a++]):n.push(i<o?e[i++]:t[a++]);return n};e.exports=o},b727:function(e,t,c){var o=c("0366"),r=c("44ad"),i=c("7b0b"),a=c("50c4"),n=c("65f0"),s=[].push,l=function(e){var t=1==e,c=2==e,l=3==e,d=4==e,u=6==e,f=7==e,b=5==e||u;return function(p,h,g,v){for(var m,j,O=i(p),y=r(O),N=o(h,g,3),V=a(y.length),w=0,k=v||n,x=t?k(p,V):c||f?k(p,0):void 0;V>w;w++)if((b||w in y)&&(m=y[w],j=N(m,w,O),e))if(t)x[w]=j;else if(j)switch(e){case 3:return!0;case 5:return m;case 6:return w;case 2:s.call(x,m)}else switch(e){case 4:return!1;case 7:s.call(x,m)}return u?-1:l||d?d:x}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d076:function(e,t,c){},d54d:function(e,t,c){"use strict";c("e063")},d998:function(e,t,c){var o=c("342f");e.exports=/MSIE|Trident/.test(o)},e063:function(e,t,c){},e8b5:function(e,t,c){var o=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}},f6d3:function(e,t,c){"use strict";c("56c6")},fd2d:function(e,t,c){"use strict";var o=c("7a23"),r={class:"bg-primary p-5"},i=Object(o["createStaticVNode"])('<div class="container text-white"><div class="row"><h3 class="h2 fw-bold">藍天野球</h3><div class="col-md-6"><p class="mt-4 lh-lg"> 創店十年，為上百所青棒、青少棒提供專業高品質球具。為台灣基層棒球耕耘出一份心力，獨創品牌【藍天野球】系列球具更獲得多個國外運動大廠支持， 我們用十年的時間默默為台灣棒球付出，讓台灣的國球再次閃耀，您的購買會是一道新的力量，讓我們繼續支持台灣棒球。 </p></div><div class="col-md-6 mt-3 mt-md-0"><ul class="d-flex flex-column justify-content-around ps-0 mb-0 h-100 text-end"><li class="mb-2 mb-md-0">桃園市平鎮區金陵路2021號</li><li class="mb-2 mb-md-0">TEL：0921-212-121</li><li class="mb-2 mb-md-0">BH：13:00-19:00</li><li class="mb-2 mb-md-0">Email：blueskybaseball@gmail.com</li><li>Line：@blueskybaseball2021</li></ul></div></div><p class="text-center mt-5 mb-0"> 個人練習作品，非商業用途。 <span class="d-block d-md-inline-block">素材來源： unsplash、photoAc</span></p></div>',1);function a(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("footer",r,[i])}c("2a75");const n={};n.render=a;t["a"]=n}}]);
//# sourceMappingURL=chunk-3f89c4a8.5a41e565.js.map