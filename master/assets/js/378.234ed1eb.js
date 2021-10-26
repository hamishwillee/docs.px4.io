(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{2877:function(t,r,e){"use strict";e.r(r);var o=e(19),a=Object(o.a)({},(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"dropix-flight-controller"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dropix-flight-controller"}},[t._v("#")]),t._v(" DroPix Flight Controller")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store.drotek.com/) for hardware support or compliance issues.")])]),t._v(" "),o("p",[t._v("The Drotek"),o("sup",[t._v("®")]),t._v(" "),o("em",[t._v("DroPix autopilot")]),t._v(" is based on the "),o("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk"),o("sup",[t._v("®")]),t._v("-project"),o("OutboundLink")],1),t._v(" "),o("strong",[t._v("FMUv2")]),t._v(" open hardware design. It runs the PX4 Flight Stack on the "),o("a",{attrs:{href:"https://nuttx.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),o("OutboundLink")],1),t._v(" OS.")]),t._v(" "),o("p",[t._v("The DroPix system includes integrated multithreading, a Unix/Linux-like programming environment, completely new autopilot functions such as Lua scripting of missions and flight behavior, and a custom PX4 driver layer ensuring tight timing across all processes.")]),t._v(" "),o("p",[o("img",{attrs:{src:e(729),alt:"Dropix"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("This flight controller is "),o("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"主要特性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#主要特性"}},[t._v("#")]),t._v(" 主要特性")]),t._v(" "),o("ul",[o("li",[t._v("Advanced 32 bit ARM Cortex® M4 Processor running NuttX RTOS")]),t._v(" "),o("li",[t._v("14 PWM/servo outputs (8 with failsafe and manual override, 5 auxiliary, high-power compatible)")]),t._v(" "),o("li",[t._v("Abundant connectivity options for additional peripherals (UART, I2C, CAN)")]),t._v(" "),o("li",[t._v("Integrated backup system for in-flight recovery and manual override with dedicated processor and stand-alone power supply")]),t._v(" "),o("li",[t._v("Backup system integrates mixing, providing consistent autopilot and manual override mixing modes")]),t._v(" "),o("li",[t._v("Redundant power supply inputs and automatic failover")]),t._v(" "),o("li",[t._v("External safety button for easy motor activation")]),t._v(" "),o("li",[t._v("Multicolor LED indicator")]),t._v(" "),o("li",[t._v("High-power, multi-tone piezo audio indicator")]),t._v(" "),o("li",[t._v("microSD card for long-time high-rate logging")]),t._v(" "),o("li",[t._v("传感器\n"),o("ul",[o("li",[t._v("ST Micro L3GD20 3-axis 16-bit gyroscope")]),t._v(" "),o("li",[t._v("ST Micro LSM303D 3-axis 14-bit accelerometer / magnetometer")]),t._v(" "),o("li",[t._v("Invensense"),o("sup",[t._v("®")]),t._v(" MPU 6000 3-axis accelerometer/gyroscope")]),t._v(" "),o("li",[t._v("MEAS MS5611 气压计")])])]),t._v(" "),o("li",[t._v("Standard MK style mounting holes 45 mm x 45 mm (M3 holes)")]),t._v(" "),o("li",[t._v("尺寸\n"),o("ul",[o("li",[t._v("Size: 67"),o("em",[t._v("50")]),t._v("6 mm")]),t._v(" "),o("li",[t._v("Weight: 15g (without connectors)")])])])]),t._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to buy")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://store.drotek.com/dropix-autopilots",target:"_blank",rel:"noopener noreferrer"}},[t._v("DroPix Autopilots & Accessories"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"文档"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://drotek.gitbook.io/dropix-user-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DroPix User's Guide"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"接线指南"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#接线指南"}},[t._v("#")]),t._v(" 接线指南")]),t._v(" "),o("p",[t._v("The following diagrams show the Dropix connector information (for more information see the "),o("a",{attrs:{href:"https://drotek.gitbook.io/dropix-user-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("drotek documentation"),o("OutboundLink")],1),t._v(").")]),t._v(" "),o("img",{attrs:{src:e(375),alt:"front connectors",width:"500px"}}),t._v(" "),o("img",{attrs:{src:e(730),alt:"front connectors",width:"500px"}}),t._v(" "),o("h2",{attrs:{id:"编译固件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[t._v("#")]),t._v(" 编译固件")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),o("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),o("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),o("p",[t._v("To "),o("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("make px4_fmu-v2_default\n")])])]),o("h2",{attrs:{id:"serial-port-mapping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("UART")]),t._v(" "),o("th",[t._v("设备")]),t._v(" "),o("th",[t._v("Port")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("UART1")]),t._v(" "),o("td",[t._v("/dev/ttyS0")]),t._v(" "),o("td",[t._v("IO debug")])]),t._v(" "),o("tr",[o("td",[t._v("USART2")]),t._v(" "),o("td",[t._v("/dev/ttyS1")]),t._v(" "),o("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),o("tr",[o("td",[t._v("USART3")]),t._v(" "),o("td",[t._v("/dev/ttyS2")]),t._v(" "),o("td",[t._v("TELEM2 (flow control)")])]),t._v(" "),o("tr",[o("td",[t._v("UART4")]),t._v(" "),o("td"),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("UART7")]),t._v(" "),o("td",[t._v("CONSOLE")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("UART8")]),t._v(" "),o("td",[t._v("SERIAL4")]),t._v(" "),o("td")])])])])}),[],!1,null,null,null);r.default=a.exports},375:function(t,r,e){t.exports=e.p+"assets/img/dropix_connectors_front.22a78aff.jpg"},729:function(t,r,e){t.exports=e.p+"assets/img/dropix_flight_controller_hero.f0a2c2a6.jpg"},730:function(t,r,e){t.exports=e.p+"assets/img/dropix_connectors_side_and_back.f0b6c088.jpg"}}]);