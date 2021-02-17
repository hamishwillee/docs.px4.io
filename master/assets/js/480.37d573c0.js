(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{1336:function(t,e,r){t.exports=r.p+"assets/img/uavcan_logo_transparent.385713a1.png"},1337:function(t,e,r){t.exports=r.p+"assets/img/uavcan_wiring.bbcb3462.png"},2662:function(t,e,r){"use strict";r.r(e);var a=r(18),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"uavcan-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-介绍"}},[t._v("#")]),t._v(" UAVCAN 介绍")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1336),alt:"UAVCAN Logo"}})]),t._v(" "),a("p",[a("a",{attrs:{href:"http://uavcan.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("UAVCAN"),a("OutboundLink")],1),t._v("是一个板载网络, 它允许自动驾驶仪连接到航空电子设备。 它支持如下硬件:")]),t._v(" "),a("ul",[a("li",[t._v("Motor controllers\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://zubax.com/product/zubax-orel-20",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax Orel 20"),a("OutboundLink")],1),t._v(" :::note Runs "),a("a",{attrs:{href:"https://github.com/px4/sapog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sapog Firmware"),a("OutboundLink")],1),t._v(" (open source). Based on "),a("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/sapog_reference_hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sapog Reference Hardware"),a("OutboundLink")],1),t._v(".\n:::")])])]),t._v(" "),a("li",[t._v("Airspeed sensors\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/thiemar/airspeed",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thiemar空速传感器"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("用于GPS和GLONASS的GNSS接收器\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax GNSS"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("Power monitors\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/power_module/pomegranate_systems_pm.html"}},[t._v("Pomegranate Systems Power Module")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/power_module/cuav_can_pmu.html"}},[t._v("CUAV CAN PMU Power Module")])],1)])])]),t._v(" "),a("p",[t._v("相比玩具级设备, 它使用可靠的差分信号, 并支持通过总线进行固件升级。 所有电调提供状态反馈并实现现场定向控制(FOC).")]),t._v(" "),a("p",[t._v("以下说明提供了一个分步指南, 用于连接和设置通过uavcan连接的电调和GPS的四轮车。 选择的硬件是Pixhawk 2.1、Zubax orrel 20电调和Zubax GNSS GPS模块。\n:::")]),t._v(" "),a("h2",{attrs:{id:"初始设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始设置"}},[t._v("#")]),t._v(" 初始设置")]),t._v(" "),a("p",[t._v("第一步是将所有启用uavcan的设备与飞行控制器连接。 下图显示了如何连接所有组件。")]),t._v(" "),a("h3",{attrs:{id:"布线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布线"}},[t._v("#")]),t._v(" 布线")]),t._v(" "),a("p",[t._v("The first step is to connect all UAVCAN enabled devices with the flight controller. The following diagram displays how to wire all components. The used Zubax devices all support a redundant CAN interface in which the second bus is optional but increases the robustness of the connection.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1337),alt:"UAVCAN Wiring"}})]),t._v(" "),a("p",[t._v("接下来, 按照 "),a("RouterLink",{attrs:{to:"/zh/uavcan/node_enumeration.html"}},[t._v("UAVCAN配置")]),t._v("中的说明激活固件中的uavcan功能。 断电重连。")],1),t._v(" "),a("h3",{attrs:{id:"固件设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#固件设置"}},[t._v("#")]),t._v(" 固件设置")]),t._v(" "),a("p",[t._v("根据使用的硬件, 在uavcan设备上执行固件更新是合理的。 这可以通过uavcan本身和px4固件来完成。 有关详细信息, 请参阅 "),a("RouterLink",{attrs:{to:"/zh/uavcan/node_firmware.html"}},[t._v("UAVCAN firmware")]),t._v(" 中的说明。 You can now continue with the general setup and calibration.")],1),t._v(" "),a("p",[t._v("如果提供了匹配的固件, px4中间件将自动升级uavcan节点上的固件。 过程和要求在"),a("RouterLink",{attrs:{to:"/zh/uavcan/node_firmware.html"}},[t._v("UAVCAN firmware")]),t._v("页面上进行了描述。 For more details please refer to the instructions in "),a("RouterLink",{attrs:{to:"/zh/uavcan/node_firmware.html"}},[t._v("UAVCAN Firmware")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"升级节点固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级节点固件"}},[t._v("#")]),t._v(" 升级节点固件")]),t._v(" "),a("p",[t._v("每个电机控制器的id和旋转方向可以在安装后在一个简单的设置例程中分配:"),a("RouterLink",{attrs:{to:"/zh/uavcan/node_enumeration.html"}},[t._v("UAVCAN节点枚举")]),t._v("。 用户可以通过QGroundControl启动该例程。")],1),t._v(" "),a("h2",{attrs:{id:"枚举和配置电机控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举和配置电机控制器"}},[t._v("#")]),t._v(" 枚举和配置电机控制器")]),t._v(" "),a("p",[t._v("The ID and rotational direction of each motor controller can be assigned after installation in a simple setup routine: "),a("RouterLink",{attrs:{to:"/zh/uavcan/node_enumeration.html"}},[t._v("UAVCAN Node Enumeration")]),t._v(". The routine can be started by the user through QGroundControl.")],1),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://uavcan.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("首页"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://uavcan.org/specification/",target:"_blank",rel:"noopener noreferrer"}},[t._v("技术规范"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://uavcan.org/Implementations",target:"_blank",rel:"noopener noreferrer"}},[t._v("实现和教程"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);