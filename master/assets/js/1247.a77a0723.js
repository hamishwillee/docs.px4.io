(window.webpackJsonp=window.webpackJsonp||[]).push([[1247],{2631:function(e,t,a){"use strict";a.r(t);var r=a(18),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"模拟故障保护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟故障保护"}},[e._v("#")]),e._v(" 模拟故障保护")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[e._v(" Failsafes ")]),e._v(" 为了您可以安全地使用 PX4，定义安全限制/条件，以及触发故障安全时将执行的操作（例如，着陆，保持或返回指定点）。")],1),e._v(" "),a("p",[e._v("在 SITL 中，默认情况下会禁用某一些故障，以便方便模拟使用。 本主题说明如何在实际世界中尝试 SITL 仿真之前测试安全关键行为。")]),e._v(" "),a("p",[e._v("默认情况下启用 "),a("em",[e._v("数据链路丢失")]),e._v(" 故障保护（无法通过 MAVLink 获取外部数据）。 这使得模拟仅适用于连接的 GCS，SDK 或其他 MAVLink 应用程序。\n:::")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#sitl"}},[e._v("SITL parameters")]),e._v(" allow you to simulate other common sensor failure cases that are not covered here, including: loss of barometer, gyro and accelerometer, increased GPS noise etc.")],1)]),e._v(" "),a("h2",{attrs:{id:"数据链路丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据链路丢失"}},[e._v("#")]),e._v(" 数据链路丢失")]),e._v(" "),a("p",[a("em",[e._v("RC 链接损失")]),e._v(" failslafe （来自远程控制的数据不可用） 被默认启用。 这使得模拟仿真只能使用 MAVLink 或远程控制连接。")]),e._v(" "),a("p",[e._v("将参数 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[e._v("NAV_RCL_ACT")]),e._v(" 设置为所需的故障保护操作，以更改行为。 例如，设置为 "),a("code",[e._v("0")]),e._v(" 禁用它。")],1),e._v(" "),a("p",[e._v("模拟仿真的电池永远不会耗尽电量，并且默认情况下仅耗尽其容量的 50％ 会发送电压报告。 这可以在 GCS UI 中测试电池指示，而不会触发可能中断其他测试的低电池反应。")]),e._v(" "),a("h2",{attrs:{id:"rc-链接损失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-链接损失"}},[e._v("#")]),e._v(" RC 链接损失")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("RC Link Loss")]),e._v(" failsafe (unavailability of data from a remote control) is enabled by default. This makes the simulation only usable with either an active MAVLink or remote control connection.")]),e._v(" "),a("p",[e._v("Set the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[e._v("NAV_RCL_ACT")]),e._v(" to the desired failsafe action to change the behavior. For example, set to "),a("code",[e._v("0")]),e._v(" to disable it.")],1),e._v(" "),a("p",[e._v("为了模拟丢失和重新获取 GPS 全球定位系统信息，您可以停止/重新启动 GPS 驱动程序。\n:::")]),e._v(" "),a("h2",{attrs:{id:"低电量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低电量"}},[e._v("#")]),e._v(" 低电量")]),e._v(" "),a("p",[e._v("The simulated battery is implemented to never run out of energy, and by default only depletes to 50% of its capacity and hence reported voltage. This enables testing of battery indication in GCS UIs without triggering low battery reactions that might interrupt other testing.")]),e._v(" "),a("p",[e._v("To change this minimal battery percentage value use the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SIM_BAT_MIN_PCT"}},[e._v("SIM_BAT_MIN_PCT")]),e._v(".")],1),e._v(" "),a("p",[e._v("To control how fast the battery depletes to the minimal value use the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SIM_BAT_DRAIN"}},[e._v("SIM_BAT_DRAIN")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("By changing "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SIM_BAT_MIN_PCT"}},[e._v("SIM_BAT_MIN_PCT")]),e._v(" in flight, you can also test regaining capacity to simulate inaccurate battery state estimation or in-air charging technology.")],1)]),e._v(" "),a("h2",{attrs:{id:"gps-损失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps-损失"}},[e._v("#")]),e._v(" GPS 损失")]),e._v(" "),a("p",[e._v("To simulate losing and regaining GPS information you can just stop the publication of GPS messages. This is done by running the "),a("code",[e._v("param set SIM_GPS_BLOCK 1")]),e._v(" and "),a("code",[e._v("param set SIM_GPS_BLOCK 0")]),e._v(" commands on your SITL instance "),a("em",[e._v("pxh shell")]),e._v(" to block and unblock messages respectively.")])])}),[],!1,null,null,null);t.default=o.exports}}]);