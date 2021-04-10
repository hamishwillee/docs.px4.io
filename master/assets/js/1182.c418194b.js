(window.webpackJsonp=window.webpackJsonp||[]).push([[1182],{2422:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),a("h2",{attrs:{id:"编译错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译错误"}},[e._v("#")]),e._v(" 编译错误")]),e._v(" "),a("h3",{attrs:{id:"闪存溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闪存溢出"}},[e._v("#")]),e._v(" 闪存溢出")]),e._v(" "),a("p",[e._v('可以加载到主板上的代码量受到其具有的闪存量的限制。 当添加其他模块或代码时，添加可能会超过闪存。 这将导致 "闪存溢出"。')]),e._v(" "),a("p",[e._v("若要解决此问题，请使用较新的硬件或从生成中删除对您的用例不重要的模块。 配置存储 "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/cmake/configs",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("。 要删除模块，只需将其注释掉： The upstream version will always build, but depending on what a developer adds it might overflow locally.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("region `flash' overflowed by "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12456")]),e._v(" bytes\n")])])]),a("p",[e._v("To remedy it, either use more recent hardware or remove modules from the build which are not essential to your use case. The configuration is stored in "),a("strong",[e._v("/PX4-Autopilot/boards/px4")]),e._v(" (e.g. "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/boards/px4/fmu-v5/default.cmake"),a("OutboundLink")],1),e._v("). To remove a module, just comment it out:")]),e._v(" "),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#drivers/trone")]),e._v("\n")])])]),a("h2",{attrs:{id:"usb-错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usb-错误"}},[e._v("#")]),e._v(" USB 错误")]),e._v(" "),a("h3",{attrs:{id:"上传从不成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传从不成功"}},[e._v("#")]),e._v(" 上传从不成功")]),e._v(" "),a("p",[e._v("On Ubuntu, uninstall the modem manager:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" remove modemmanager\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);