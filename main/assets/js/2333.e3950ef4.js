(window.webpackJsonp=window.webpackJsonp||[]).push([[2333],{4145:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模拟故障保护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟故障保护"}},[t._v("#")]),t._v(" 模拟故障保护")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v(" Failsafes ")]),t._v(" 为了您可以安全地使用 PX4，定义安全限制/条件，以及触发故障安全时将执行的操作（例如，着陆，保持或返回指定点）。")],1),t._v(" "),a("p",[t._v("在 SITL 中，默认情况下会禁用某一些故障，以便方便模拟使用。 本主题说明如何在实际世界中尝试 SITL 仿真之前测试安全关键行为。")]),t._v(" "),a("p",[t._v("默认情况下启用 "),a("em",[t._v("数据链路丢失")]),t._v(" 故障保护（无法通过 MAVLink 获取外部数据）。 这使得模拟仅适用于连接的 GCS，SDK 或其他 MAVLink 应用程序。\n:::")]),t._v(" "),a("h2",{attrs:{id:"数据链路丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据链路丢失"}},[t._v("#")]),t._v(" 数据链路丢失")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Data Link Loss")]),t._v(" failsafe (unavailability of external data via MAVLink) is enabled by default. This makes the simulation only usable with a connected GCS, SDK, or other MAVLink application.")]),t._v(" "),a("p",[a("em",[t._v("RC 链接损失")]),t._v(" failslafe （来自远程控制的数据不可用） 被默认启用。 这使得模拟仿真只能使用 MAVLink 或远程控制连接。")]),t._v(" "),a("p",[t._v("将参数 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")]),t._v(" 设置为所需的故障保护操作，以更改行为。 例如，设置为 "),a("code",[t._v("0")]),t._v(" 禁用它。")],1),t._v(" "),a("h2",{attrs:{id:"rc-链接损失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-链接损失"}},[t._v("#")]),t._v(" RC 链接损失")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("RC Link Loss")]),t._v(" failsafe (unavailability of data from a remote control) is enabled by default. 这可以在 GCS UI 中测试电池指示，而不会触发可能中断其他测试的低电池反应。")]),t._v(" "),a("p",[t._v("Set the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")]),t._v(" to the desired failsafe action to change the behavior. For example, set to "),a("code",[t._v("0")]),t._v(" to disable it.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("All parameters in SITL including this one get reset when you do "),a("code",[t._v("make clean")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"低电量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低电量"}},[t._v("#")]),t._v(" 低电量")]),t._v(" "),a("p",[t._v("为了模拟丢失和重新获取 GPS 全球定位系统信息，您可以停止/重新启动 GPS 驱动程序。 This enables testing of battery indication in GCS UIs without triggering low battery reactions that might interrupt other testing.")]),t._v(" "),a("p",[t._v("To change this minimal battery percentage value use the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SIM_BAT_MIN_PCT"}},[t._v("SIM_BAT_MIN_PCT")]),t._v(".")],1),t._v(" "),a("p",[t._v("To control how fast the battery depletes to the minimal value use the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SIM_BAT_DRAIN"}},[t._v("SIM_BAT_DRAIN")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("By changing "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SIM_BAT_MIN_PCT"}},[t._v("SIM_BAT_MIN_PCT")]),t._v(" in flight, you can also test regaining capacity to simulate inaccurate battery state estimation or in-air charging technology.")],1)]),t._v(" "),a("h2",{attrs:{id:"gps-损失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps-损失"}},[t._v("#")]),t._v(" GPS 损失")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/debug/failure_injection.html"}},[t._v("Failure injection")]),t._v(" can be used to simulate different types of failures in many sensors and systems. For example, this can be used to simulate absent or intermittent GPS, RC signal that has stopped or got stuck on a particular value, failure of the avoidance system, and much more.")],1),t._v(" "),a("p",[t._v("For example, to simulate GPS failure:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Enable the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_FAILURE_EN"}},[t._v("SYS_FAILURE_EN")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Enter the following commands on the SITL instance "),a("em",[t._v("pxh shell")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Turn (all) GPS off")]),t._v("\nfailure gps off\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Turn (all) GPS on")]),t._v("\nfailure gps ok\n")])])])])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/zh/debug/failure_injection.html"}},[t._v("System Failure Injection")]),t._v(" for a list of supported target sensors and failure modes.")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);