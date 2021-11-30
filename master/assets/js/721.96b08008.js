(window.webpackJsonp=window.webpackJsonp||[]).push([[721],{2924:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"pixfalcon-flight-controller-discontinued"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pixfalcon-flight-controller-discontinued"}},[t._v("#")]),t._v(" Pixfalcon Flight Controller (Discontinued)")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("This flight controller has been "),o("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_experimental.html"}},[t._v("discontinued")]),t._v(" and is no longer commercially available.")],1)]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://shop.holybro.com/) for hardware support or compliance issues.")])]),t._v(" "),o("p",[t._v("The Pixfalcon autopilot (designed by "),o("a",{attrs:{href:"http://www.holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),o("sup",[t._v("®")]),o("OutboundLink")],1),t._v(") is binary-compatible (FMUv2) derivative of the "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")]),t._v(" design that has been optimized for space-constrained applications such as FPV racers. It has less IO to allow for the reduction in size.")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(776),alt:"Pixfalcon hero image"}})]),t._v(" "),o("h2",{attrs:{id:"总览"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#总览"}},[t._v("#")]),t._v(" 总览")]),t._v(" "),o("ul",[o("li",[t._v("主片上系统："),o("a",{attrs:{href:"http://www.st.com/web/en/catalog/mmc/FM141/SC1169/SS1577/LN1789",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32F427"),o("OutboundLink")],1),t._v(" "),o("ul",[o("li",[t._v("CPU: 180 MHz ARM"),o("sup",[t._v("®")]),t._v(" Cortex"),o("sup",[t._v("®")]),t._v(" M4 with single-precision FPU")]),t._v(" "),o("li",[t._v("RAM: 256 KB SRAM (L1)")])])]),t._v(" "),o("li",[t._v("Failsafe System-on-Chip: STM32F100\n"),o("ul",[o("li",[t._v("CPU: 24 MHz ARM Cortex M3")]),t._v(" "),o("li",[t._v("RAM: 8 KB SRAM")])])]),t._v(" "),o("li",[t._v("GPS: u-blox"),o("sup",[t._v("®")]),t._v(" M8 (bundled)")])]),t._v(" "),o("h3",{attrs:{id:"连接性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#连接性"}},[t._v("#")]),t._v(" 连接性")]),t._v(" "),o("ul",[o("li",[t._v("1x I2C")]),t._v(" "),o("li",[t._v("2x UART (one for Telemetry / OSD, no flow control)")]),t._v(" "),o("li",[t._v("8x PWM with manual override")]),t._v(" "),o("li",[t._v("S.BUS / PPM input")])]),t._v(" "),o("h2",{attrs:{id:"访问链接"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#访问链接"}},[t._v("#")]),t._v(" 访问链接:")]),t._v(" "),o("p",[t._v("From distributor "),o("a",{attrs:{href:"https://hobbyking.com/en_us/pixfalcon-micro-px4-autopilot-plus-micro-m8n-gps-and-mega-pbd-power-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking"),o("sup",[t._v("®")]),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Optional hardware:")]),t._v(" "),o("ul",[o("li",[t._v("Optical flow: PX4 Flow unit from manufacturer "),o("a",{attrs:{href:"http://www.holybro.com/product/px4flow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Digital Airspeed sensor from manufacturer "),o("a",{attrs:{href:"http://www.holybro.com/product/digital-air-speed-sensor/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),o("OutboundLink")],1),t._v(" or distributor "),o("a",{attrs:{href:"https://hobbyking.com/en_us/hkpilot-32-digital-air-speed-sensor-and-pitot-tube-set.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("On screen display with integrated Telemetry:\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://hobbyking.com/en_us/micro-hkpilot-telemetry-radio-module-with-on-screen-display-osd-unit-433mhz.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking OSD + EU Telemetry (433 MHz)"),o("OutboundLink")],1)])])]),t._v(" "),o("li",[t._v("Pure Telemetry options:\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://hobbyking.com/en_us/apm-pixhawk-wireless-wifi-radio-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking Wifi Telemetry"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/telemetry/sik_radio.html"}},[t._v("SIK Radios")])],1)])])]),t._v(" "),o("h2",{attrs:{id:"编译固件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[t._v("#")]),t._v(" 编译固件")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),o("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),o("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),o("p",[t._v("To "),o("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("make px4_fmu-v2_default\n")])])]),o("h2",{attrs:{id:"debug调试端口"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug调试端口"}},[t._v("#")]),t._v(" Debug调试端口")]),t._v(" "),o("p",[t._v("This board does not have a debug port (i.e it does not have a port for accessing the "),o("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[t._v("System Console")]),t._v(" or the "),o("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html"}},[t._v("SWD interface")]),t._v(" (JTAG).")],1),t._v(" "),o("p",[t._v("Developers will need to solder wires to the board test pads for SWD, and to the STM32F4 (IC) TX and RX to get a console.")]),t._v(" "),o("h2",{attrs:{id:"serial-port-mapping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("UART")]),t._v(" "),o("th",[t._v("设备")]),t._v(" "),o("th",[t._v("Port")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("UART1")]),t._v(" "),o("td",[t._v("/dev/ttyS0")]),t._v(" "),o("td",[t._v("IO Debug")])]),t._v(" "),o("tr",[o("td",[t._v("USART2")]),t._v(" "),o("td",[t._v("/dev/ttyS1")]),t._v(" "),o("td",[t._v("TELEM1 (No flow control)")])]),t._v(" "),o("tr",[o("td",[t._v("UART4")]),t._v(" "),o("td",[t._v("/dev/ttyS2")]),t._v(" "),o("td",[t._v("GPS")])])])]),t._v(" "),o("h2",{attrs:{id:"主链接"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#主链接"}},[t._v("#")]),t._v(" 主链接")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"http://www.holybro.com/manual/pixfalcon11.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户手册"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports},776:function(t,e,r){t.exports=r.p+"assets/img/hardware-pixfalcon.89e5c559.png"}}]);