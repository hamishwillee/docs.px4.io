(window.webpackJsonp=window.webpackJsonp||[]).push([[1848],{3336:function(a,t,s){"use strict";s.r(t);var e=s(19),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),s("h2",{attrs:{id:"编译错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译错误"}},[a._v("#")]),a._v(" 编译错误")]),a._v(" "),s("h3",{attrs:{id:"闪存溢出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闪存溢出"}},[a._v("#")]),a._v(" 闪存溢出")]),a._v(" "),s("p",[a._v('可以加载到主板上的代码量受到其具有的闪存量的限制。 当添加其他模块或代码时，添加可能会超过闪存。 这将导致 "闪存溢出"。 The upstream version will always build, but depending on what a developer adds it might overflow locally.')]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("region `flash' overflowed by "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12456")]),a._v(" bytes\n")])])]),s("p",[a._v("若要解决此问题，请使用较新的硬件或从生成中删除对您的用例不重要的模块。 The configuration is stored in "),s("strong",[a._v("/PX4-Autopilot/boards/px4")]),a._v(" (e.g. "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/boards/px4/fmu-v5/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[a._v("PX4-Autopilot/boards/px4/fmu-v5/default.px4board"),s("OutboundLink")],1),a._v("). 要删除模块，只需将其注释掉：")]),a._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#drivers/trone")]),a._v("\n")])])]),s("h4",{attrs:{id:"identifying-large-memory-consumers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#identifying-large-memory-consumers"}},[a._v("#")]),a._v(" Identifying large memory consumers")]),a._v(" "),s("p",[a._v("The command below will list the largest static allocations:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" remove modemmanager\n")])])]),s("h2",{attrs:{id:"usb-错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usb-错误"}},[a._v("#")]),a._v(" USB 错误")]),a._v(" "),s("h3",{attrs:{id:"上传从不成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传从不成功"}},[a._v("#")]),a._v(" 上传从不成功")]),a._v(" "),s("p",[a._v("On Ubuntu, uninstall the modem manager:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" remove modemmanager\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);