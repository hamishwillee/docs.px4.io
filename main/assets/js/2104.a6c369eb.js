(window.webpackJsonp=window.webpackJsonp||[]).push([[2104],{3761:function(t,e,s){"use strict";s.r(e);var a=s(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-jmavsim-进行多飞行器仿真"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-jmavsim-进行多飞行器仿真"}},[t._v("#")]),t._v(" 使用 JMAVSim 进行多飞行器仿真")]),t._v(" "),s("p",[t._v("本主题介绍如何使用 JMAVSim和 SITL 模拟多架 (多旋翼) 无人机。 在仿真中所有无人机实例均在同一位置启动。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("This is the easiest way to simulate multiple vehicles running PX4. It is suitable for testing multi-vehicle support in "),s("em",[t._v("QGroundControl")]),t._v(" (or the "),s("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),s("OutboundLink")],1),t._v(", etc.). "),s("RouterLink",{attrs:{to:"/zh/simulation/multi-vehicle-simulation.html"}},[t._v("Multi-Vehicle Simulation with Gazebo")]),t._v(" should be used for swarm simulations with many vehicles, or for testing features like computer vision that are only supported by Gazebo.")],1)]),t._v(" "),s("h2",{attrs:{id:"如何启动多个飞行器实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何启动多个飞行器实例"}},[t._v("#")]),t._v(" 如何启动多个飞行器实例")]),t._v(" "),s("p",[t._v("To start multiple instances (on separate ports):")]),t._v(" "),s("ol",[s("li",[t._v("编译 PX4 "),s("code",[t._v("make px4_sitl_default")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make px4_sitl_default\n")])])])]),t._v(" "),s("li",[t._v("运行 "),s("strong",[t._v("sitl_multiple_run.sh")]),t._v(", 指定要启动的飞行器的实例数目 (例如 2): "),s("code",[t._v("./Tools/sitl_multiple_run.sh 2")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./Tools/sitl_multiple_run.sh 2\n")])])])]),t._v(" "),s("li",[t._v("启动第一个实例: "),s("code",[t._v("./Tools/jmavsim_run.sh")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./Tools/simulation/jmavsim/jmavsim_run.sh -l\n")])])])]),t._v(" "),s("li",[t._v("启动后续实例，并为该实例指定 "),s("em",[t._v("仿真")]),t._v(" UDP 端口（所有命令应在同一行输入，以空格键隔开，完成输入后直接回车运行，此时由于所有实例的启动位置都相同所以无法分辨启动的实例个数，可通过查看端口号进行查询）： "),s("code",[t._v("./Tools/jmavsim_run.sh -p 14561")]),t._v(" 端口号应设置为 "),s("code",[t._v("14560+i")]),t._v(" for "),s("code",[t._v("i")]),t._v(" in "),s("code",[t._v("[0, N-1]")]),t._v("。"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./Tools/simulation/jmavsim/jmavsim_run.sh -p 4560 -l\n")])])]),t._v("端口号应该被设置为 "),s("code",[t._v("4560+i")]),t._v(" ， "),s("code",[t._v("i")]),t._v(" 的范围为 "),s("code",[t._v("[0, N-1]")]),t._v(" 。")])]),t._v(" "),s("p",[s("em",[t._v("QGroundControl")]),t._v(" should automatically connect to all the new vehicle instances (all GCS traffic is sent to PX4's remote UDP port: "),s("code",[t._v("14550")]),t._v(" from all instances). The vehicle that is currently being controlled is displayed in the application to bar; you can select this vehicle text to display a selection list of all of the (simulated) connected vehicle instances ("),s("code",[t._v("Vehicle 1")]),t._v(", "),s("code",[t._v("Vehicle 2")]),t._v(", etc.) and choose a new vehicle to control.")]),t._v(" "),s("p",[t._v("Developer APIs such as "),s("em",[t._v("MAVSDK")]),t._v(" or "),s("em",[t._v("MAVROS")]),t._v(" can connect to individual instances by listening on sequentially allocated PX4 remote UDP ports from "),s("code",[t._v("14540")]),t._v(" (first instance) to "),s("code",[t._v("14549")]),t._v(". Additional instances "),s("em",[t._v("all")]),t._v(" connect to port "),s("code",[t._v("14549")]),t._v(".")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip")]),t._v(" The "),s("strong",[t._v("sitl_multiple_run.sh")]),t._v(" script starts a separate process for each vehicle. To restart the simulations after killing one of them, you must call "),s("strong",[t._v("sitl_multiple_run.sh")]),t._v(" again, and also restart each of the individual instances in their own terminals.")])]),t._v(" "),s("h2",{attrs:{id:"额外资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#额外资源"}},[t._v("#")]),t._v(" 额外资源")]),t._v(" "),s("ul",[s("li",[t._v("更多UDP端口配置请参考 "),s("RouterLink",{attrs:{to:"/zh/simulation/"}},[t._v("Simulation")]),t._v("。")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);