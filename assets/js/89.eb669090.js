(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{381:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"platforms-web-compile-util-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platforms-web-compile-util-js"}},[t._v("#")]),t._v(" platforms/web/compile/util.js")]),t._v(" "),a("h2",{attrs:{id:"isunarytag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isunarytag"}},[t._v("#")]),t._v(" isUnaryTag")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isUnaryTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link,meta,param,source,track,wbr'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("用makeMap方法生成一个判断是否是单标签元素。")]),t._v(" "),a("h2",{attrs:{id:"canbeleftopentag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canbeleftopentag"}},[t._v("#")]),t._v(" canBeLeftOpenTag")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Elements that you can, intentionally, leave open")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (and which close themselves)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" canBeLeftOpenTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这个是判断能否自动补全的标签，这是浏览器的特性，比如说p标签"),a("code",[t._v("'<p>我是p'")]),t._v("，在浏览器中会自动补全为"),a("code",[t._v("'<P>我是p</P>'")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"isnonphrasingtag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isnonphrasingtag"}},[t._v("#")]),t._v(" isNonPhrasingTag")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isNonPhrasingTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title,tr,track'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这个方法主要是收集非短语内容的标签，我们知道html都有它的内容模型，这个就是短语内容模型（Phrasing content）。"),a("br"),t._v("\n短语内容（Phrasing content）是流式内容的一个子集，定义了文本和它包含的标记，且可以在任何可以使用流式内容的地方出现。一些短语内容就构成了段落。"),a("br"),t._v("\n而p标签是属于流式内容，但是它又是特别的，它只能在里面放短语内容。"),a("br"),t._v("\n流式内容（Flow content）是一个广泛的类别，包括大多数可以包含在"),a("code",[t._v("<body>")]),t._v("元素之内的元素，包括标题元素、分段元素、措辞元素、嵌入元素、互动元素和表单相关元素。它还包括文本节点（但不包括那些只由空白字符组成的节点）。"),a("br"),t._v("\n所以上面这些标签都是不能放在p标签中的。")])])}),[],!1,null,null,null);a.default=n.exports}}]);