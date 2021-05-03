(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{1339:function(t,e,a){t.exports=a.p+"assets/img/uavcan_logo_transparent.385713a1.png"},1340:function(t,e,a){t.exports=a.p+"assets/img/uavcan_wiring.bbcb3462.png"},2742:function(t,e,a){"use strict";a.r(e);var o=a(18),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"uavcan-介绍"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-介绍"}},[t._v("#")]),t._v(" UAVCAN 介绍")]),t._v(" "),o("p",[o("img",{staticStyle:{float:"right",width:"200px",padding:"10px"},attrs:{src:a(1339),alt:"UAVCAN Logo"}}),t._v(" "),o("a",{attrs:{href:"http://uavcan.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("UAVCAN"),o("OutboundLink")],1),t._v(" is an onboard network which allows the autopilot to connect to avionics/peripherals. It uses rugged, differential signalling, and supports firmware upgrades over the bus and status feedback from peripherals.")]),t._v(" "),o("p",[o("a",{attrs:{href:"http://uavcan.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("UAVCAN"),o("OutboundLink")],1),t._v("是一个板载网络, 它允许自动驾驶仪连接到航空电子设备。 它支持如下硬件:\n:::")]),t._v(" "),o("h2",{attrs:{id:"初始设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#初始设置"}},[t._v("#")]),t._v(" 初始设置")]),t._v(" "),o("p",[t._v("It supports hardware like:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/uavcan/escs.html"}},[t._v("ESC/Motor controllers")])],1),t._v(" "),o("li",[t._v("Airspeed sensors\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/thiemar/airspeed",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thiemar空速传感器"),o("OutboundLink")],1)])])]),t._v(" "),o("li",[t._v("用于GPS和GLONASS的GNSS接收器\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax GNSS"),o("OutboundLink")],1)])])]),t._v(" "),o("li",[t._v("Power monitors\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/uavcan/pomegranate_systems_pm.html"}},[t._v("Pomegranate Systems Power Module")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/uavcan/cuav_can_pmu.html"}},[t._v("CUAV CAN PMU Power Module")])],1)])]),t._v(" "),o("li",[t._v("Distance sensors\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/uavcan/ark_flow.html"}},[t._v("Ark Flow")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/uavcan/avanon_laser_interface.html"}},[t._v("Avionics Anonymous Laser Altimeter UAVCAN Interface")])],1)])]),t._v(" "),o("li",[t._v("Optical Flow\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/uavcan/ark_flow.html"}},[t._v("Ark Flow")])],1)])])]),t._v(" "),o("p",[t._v("以下说明提供了一个分步指南, 用于连接和设置通过uavcan连接的电调和GPS的四轮车。 选择的硬件是Pixhawk 2.1、Zubax orrel 20电调和Zubax GNSS GPS模块。")]),t._v(" "),o("h2",{attrs:{id:"升级节点固件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#升级节点固件"}},[t._v("#")]),t._v(" 升级节点固件")]),t._v(" "),o("p",[t._v("第一步是将所有启用uavcan的设备与飞行控制器连接。 下图显示了如何连接所有组件。")]),t._v(" "),o("p",[t._v("The following diagram shows this for a flight controller connected to "),o("RouterLink",{attrs:{to:"/zh/uavcan/escs.html"}},[t._v("UAVCAN motor controllers (ESCs)")]),t._v(" and a UAVCAN GNSS.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(1340),alt:"UAVCAN Wiring"}})]),t._v(" "),o("p",[t._v("接下来, 按照 "),o("RouterLink",{attrs:{to:"/zh/uavcan/node_enumeration.html"}},[t._v("UAVCAN配置")]),t._v("中的说明激活固件中的uavcan功能。 断电重连。")],1),t._v(" "),o("p",[t._v("For more information about proper bus connections see "),o("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/UAVCAN+device+interconnection",target:"_blank",rel:"noopener noreferrer"}},[t._v("UAVCAN Device Interconnection"),o("OutboundLink")],1),t._v(" (Zubax KB).")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("ul",[o("li",[t._v("While the connections are the same, the "),o("em",[t._v("connectors")]),t._v(" may differ across devices.")]),t._v(" "),o("li",[t._v('An second/redundant" CAN interface may be used, as shown above (CAN2). This is optional, but can increase the robustness of the connection.')])])]),t._v(" "),o("h2",{attrs:{id:"枚举和配置电机控制器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#枚举和配置电机控制器"}},[t._v("#")]),t._v(" 枚举和配置电机控制器")]),t._v(" "),o("p",[t._v("In order to use UAVCAN components with PX4 you will first need to enable the UAVCAN driver:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Power the vehicle using the battery (you must power the whole vehicle, not just the flight controller) and connect "),o("em",[t._v("QGroundControl")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Navigate to the "),o("strong",[t._v("Vehicle Setup > Parameters")]),t._v(" screen.")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" must be "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("set")]),t._v(" to one of the non-zero values.")],1),t._v(" "),o("p",[t._v("The values are:")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("0")]),t._v(": UAVCAN driver disabled.")]),t._v(" "),o("li",[o("code",[t._v("1")]),t._v(": Sensors Manual Config.")]),t._v(" "),o("li",[o("code",[t._v("2")]),t._v(": Sensors Automatic Config.")]),t._v(" "),o("li",[o("code",[t._v("3")]),t._v(": Sensors and Actuators (ESCs) Automatic Config")])]),t._v(" "),o("p",[t._v("Use "),o("code",[t._v("1")]),t._v(" if "),o("em",[t._v("none")]),t._v(" of the connected UAVCAN devices support automatic configuration (check the manual!), "),o("code",[t._v("2")]),t._v(" or "),o("code",[t._v("3")]),t._v(" if "),o("em",[t._v("some")]),t._v(" of them support automatic configuration, and "),o("code",[t._v("3")]),t._v(" if you're using UAVCAN ESCs (this assigns motor controls to the UAVCAN bus rather than PWM).")])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("You will need to manually allocate static ids for any nodes that don't support automatic configuration. When using dynamic configuration, any manually allocated ids should be given a value greater than the number of UAVCAN devices (to avoid clashes).")])]),t._v(" "),o("p",[t._v("Most UAVCAN sensors require no further setup (they are plug'n'play, unless specifically noted in their documentation).")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/uavcan/escs.html"}},[t._v("UAVCAN motor controllers (ESCs)")]),t._v(" additionally require the motor order be set, and may require a few other parameters be set. Whether this can be done using the simple QGroundControl setup UI depends on the type of ESC (see link for information).")],1),t._v(" "),o("h2",{attrs:{id:"相关链接"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),o("h3",{attrs:{id:"布线"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#布线"}},[t._v("#")]),t._v(" 布线")]),t._v(" "),o("p",[t._v("PX4 requires an SD card for UAVCAN node allocation and during firmware update (which happen during boot). Check that there is a (working) SD card present and reboot.")]),t._v(" "),o("h3",{attrs:{id:"固件设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#固件设置"}},[t._v("#")]),t._v(" 固件设置")]),t._v(" "),o("p",[t._v("If the PX4 Firmware arms but the motors do not start to rotate, check that parameter "),o("code",[t._v("UAVCAN_ENABLE=3")]),t._v(" to use UAVCAN ESCs. If the motors do not start spinning before thrust is increased, check "),o("code",[t._v("UAVCAN_ESC_IDLT=1")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"developer-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#developer-information"}},[t._v("#")]),t._v(" Developer Information")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/uavcan/developer.html"}},[t._v("UAVCAN Development")]),t._v(": Topics related to development and integration of new UAVCAN hardware into PX4.")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);