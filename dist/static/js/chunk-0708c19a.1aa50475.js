(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0708c19a"],{"1eb1":function(t,e,i){"use strict";var a=i("26e0"),c=i.n(a);c.a},"26e0":function(t,e,i){},"4e57":function(t,e,i){"use strict";var a=i("8ae9"),c=i.n(a);c.a},"6ab7":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"detail"}},[i("detail-nav-bar")],1)},c=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"DetailNavBar"},[a("nav-bar",[a("div",{staticClass:"go",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[a("img",{attrs:{src:i("7310"),alt:""}})]),a("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,i){return a("div",{key:i,staticClass:"titleItem",class:{active:i===t.currentIndex},on:{click:function(e){return t.titleClick(i)}}},[t._v(t._s(e))])})),0)])],1)},n=[],l=i("a7ac"),r={components:{NavBar:l["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t},backClick:function(){this.$router.back()}}},u=r,o=(i("4e57"),i("2877")),A=Object(o["a"])(u,s,n,!1,null,"2e7880e8",null),f=A.exports,v={components:{DetailNavBar:f},data:function(){return{iid:null}},created:function(){this.iid=this.$route.params.iid}},C=v,d=Object(o["a"])(C,a,c,!1,null,null,null);e["default"]=d.exports},7310:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEFElEQVR4Xu2aS2wbVRSG/zMzCQQ7adrGLoQCtRCPBRJURRUCVRAVVbHHqCJiZl+JHcqCFUtggYRgw4IVYtF1U1UlIXZLShWBUENFJBYgRBFUFQ1gjxs1fowDtuegmcqux43zaB37Zma8tn3v/533vZfg8w/5XD8CAIEH+JxAEAI+d4AgCQYhEISAzwl0PQSM8cIrkXOD86Jw7xqAbLzwBhE+AOhJAIsMvBlNhX/sNYiuAMiohQmJaQqA1BDMeDuSDn/ieQC5ROk4g08DUFxiLR4TIRS21QOMeOk1EKYAvq9ZPBOfjs4Oar22vr3+tgFYTpYSNcux/ECzUAKduRia1fUpveZZANlEcZwAW3zILZK/GMmENVqkigjit8UDMvHiMclxewy5RdJM0czqsfnYqijiOw4glywfZatmW37YJZKRqighbXSGTJHEdxSAoRbGwLbb054WkeeglPXIdKQgmviOATDihZdBTp2PuLI9MKf8F9L2XKAVEcV3BEBWzR8hlmzx+1zZnvB1X7Wm7zq/a1lU8fcM4IZqvmjBmgJjtCXm56tg/aH0oCGy+HsCcCNuvmCRZVt+f4vIbywF+r7pcEZ08XcN4O/kymHFkm3xj7aUuu9QgR6ZC/21E8TfFQBDLR0CO+1tzB3zdIks0vemH7i+U8RvGUA2XjpIjtvT4y0iL1cg66OpgWs7SfyWAGSSxWclC6cA2PN840OgHxRZ0odnBq7uNPGbBrCs/vtMjSt2h/dUs8iywr99/rT5/lePmEuiiV+YjG3q1GnDaTCXNB/O9Vd+2rsqu9rbq4NVfHgwj6WQEEPdWvyvfD8ZcxlsrS9tCOD34yufDlXkt5p/fM0W/1wef4aFFe9slyC9szD52EfreeeGAH6ZWHlvZFV+17cACq9zdInyv/o2BGzL+zoJ1l3/Vhlkuwd4oiWmFmtU1R+cHf5DtEqwmf1smAOa/+RWI+R0gS2NEF1WIOm7vdwI1UEYiZvPg/pOgd2tMIMXZJY1T7fCdQi5pHmYLWcSvHMYUqBHpj08DNUhtB+H+VtLIc3T43AjMcbzL0mSbIeD/w5E6hDaHYkBuNhfq2mePhJrJMY2h6IEzBX6K3rs7O6bmylJvfjOlsrgehs01PIYuHrHsTgzzlNfWfP0sXgdzD9q8VXZOS1quRghpEakkEZevhi5XR2Kx6w1r8bwZdE0NE9fjTUgJIrjVrvL0f1hjT7z8OVoIzGqJRVszw4+vB6/XR18/ECi0Ta3eSLDTIloOpTuRelrXrNjZXA9IWs9kmJYJ6KpoZO+AGCLtJ/JSUQfM3CACD8zKxOR1P1XfAOgkRf8+lCy15Zut35XcoCo4u19BQBEtk439hZ4QDcoi7xG4AEiW6cbews8oBuURV7D9x7wP7nbi1AYSlQyAAAAAElFTkSuQmCC"},"8ae9":function(t,e,i){},a7ac:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{staticClass:"left"},[t._t("left")],2),i("div",{staticClass:"center"},[t._t("center")],2),i("div",{staticClass:"right"},[t._t("right")],2)])},c=[],s={},n=s,l=(i("1eb1"),i("2877")),r=Object(l["a"])(n,a,c,!1,null,null,null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-0708c19a.1aa50475.js.map