(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(t,s,o){},187:function(t,s,o){"use strict";var n=o(177);o.n(n).a},193:function(t,s,o){"use strict";o.r(s);var n=o(64),e=o.n(n),i={head:{title:"SINGLE"},data:function(){return{post:[]}},created:function(){this.loadPost()},methods:{loadPost:function(){var t=this;console.log("g go gadget"),e.a.get("http://jsonplaceholder.typicode.com/posts/"+this.$route.params.id).then(function(s){t.post=s.data})}}},a=(o(187),o(9)),c=Object(a.a)(i,function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"container"},[o("div",{staticClass:"single-post"},[o("h1",[t._v(t._s(t.post.title))]),t._v(" "),o("p",[t._v("id: "+t._s(t.post.id))]),t._v(" "),o("p",[t._v(t._s(t.post.body))]),t._v("\n      "+t._s(this.$route.params.title)+"\n      "),o("nuxt-link",{attrs:{to:"/posts"}},[t._v("Back to Posts")])],1)])},[],!1,null,"3dff173a",null);c.options.__file="index.vue";s.default=c.exports}}]);