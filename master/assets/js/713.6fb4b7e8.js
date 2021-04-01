(window.webpackJsonp=window.webpackJsonp||[]).push([[713],{1291:function(t,e,a){t.exports=a.p+"assets/img/flightgear-multi-vehicle-sitl.ea4e8d57.jpg"},2693:function(t,e,a){"use strict";a.r(e);var s=a(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"用-flightgear-进行多机仿真"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用-flightgear-进行多机仿真"}},[t._v("#")]),t._v(" 用 FlightGear 进行多机仿真")]),t._v(" "),s("p",[t._v("本节介绍如何在SITL中使用 FlightGear 进行多机仿真 所有车辆实例都有其启动脚本定义的参数。")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("This is the most environmentally realistic way to simulate multiple vehicles running PX4, and allows easy testing of multiple different types of vehicles. It is suitable for testing multi-vehicle support in "),s("em",[t._v("QGroundControl")]),t._v(", "),s("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),s("OutboundLink")],1),t._v(", etc.")]),t._v(" "),s("p",[t._v("每个实例都应该有自己的启动脚本，可以代表完全不同的载具类型。 对于准备好的脚本，你应该看到以下视图。")]),t._v(" "),s("h2",{attrs:{id:"如何启动多机实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何启动多机实例"}},[t._v("#")]),t._v(" 如何启动多机实例")]),t._v(" "),s("p",[t._v("To start multiple instances (on separate ports and IDs):")]),t._v(" "),s("ol",[s("li",[t._v("确定 "),s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4Firmware/tree/flightgear-multi",target:"_blank",rel:"noopener noreferrer"}},[t._v("支持多机的 PX4 分支"),s("OutboundLink")],1),t._v("（查阅ThunderFly-aerospace）："),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ThunderFly-aerospace/PX4Firmware.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4Firmware\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout flightgear-multi  \n")])])])]),t._v(" "),s("li",[t._v("使用标准工具链构建PX4固件（并已安装 FlightGear）。")]),t._v(" "),s("li",[t._v("使用 "),s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge/tree/master/scripts",target:"_blank",rel:"noopener noreferrer"}},[t._v("预定义脚本"),s("OutboundLink")],1),t._v(" 启动第一个实例："),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./Tools/flightgear_bridge/scripts\n./vehicle1.sh\n")])])])]),t._v(" "),s("li",[t._v("使用另一个脚本开始后续实例："),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./vehicle2.sh\n")])])])])]),t._v(" "),s("p",[t._v("Each instance should have its own startup script, which can represent a completely different vehicle type. For prepared scripts you should get the following view.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1291),alt:"Multi-vehicle simulation using PX4 SITL and FlightGear"}})]),t._v(" "),s("p",[t._v("Ground stations such as "),s("em",[t._v("QGroundControl")]),t._v(" connect to all instances using the normal UDP port 14550 (all traffic goes to the same port).")]),t._v(" "),s("p",[t._v("The number of simultaneously running instances is limited mainly by computer resources. FlightGear is a single-thread application, but aerodynamics solvers consume a lot of memory. Therefore splitting to multiple computers and using a "),s("a",{attrs:{href:"http://wiki.flightgear.org/index.php?title=Howto:Multiplayer",target:"_blank",rel:"noopener noreferrer"}},[t._v("multiplayer server"),s("OutboundLink")],1),t._v(" is probably required to run "),s("em",[t._v("many")]),t._v(" vehicle instances.")]),t._v(" "),s("h2",{attrs:{id:"额外资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#额外资源"}},[t._v("#")]),t._v(" 额外资源")]),t._v(" "),s("ul",[s("li",[t._v("查看 "),s("RouterLink",{attrs:{to:"/zh/simulation/"}},[t._v("仿真")]),t._v(" 章节查看端口配置的更多信息。")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);