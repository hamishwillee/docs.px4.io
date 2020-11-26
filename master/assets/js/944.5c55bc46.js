(window.webpackJsonp=window.webpackJsonp||[]).push([[944],{1949:function(t,n,s){"use strict";s.r(n);var a=s(18),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"ninja-build-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ninja-build-system"}},[t._v("#")]),t._v(" Ninja Build System")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ninja-build.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ninja"),s("OutboundLink")],1),t._v(" is a faster build system than "),s("em",[t._v("Make")]),t._v(" and the PX4 "),s("em",[t._v("CMake")]),t._v(" generators support it.")]),t._v(" "),s("p",[t._v("On Ubuntu Linux you can install this automatically from normal repos.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ninja-build -y\n")])])]),s("p",[t._v("Other systems may not include Ninja in the package manager. In this case an alternative is to download the binary and add it to your path:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/martine/ninja/releases/download/v1.6.0/ninja-linux.zip\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" ninja-linux.zip\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" ninja-linux.zip\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("exportline")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export PATH='),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja:\\"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -Fxq "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v('"')]),t._v(" ~/.profile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" nothing to "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" ~/.profile\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);