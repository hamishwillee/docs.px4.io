(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{3340:function(t,r,e){"use strict";e.r(r);var a=e(19),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pixhawk-3-pro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-3-pro"}},[t._v("#")]),t._v(" Pixhawk 3 Pro")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store-drotek.com/) for hardware support or compliance issues.")])]),t._v(" "),a("p",[t._v("The Pixhawk"),a("sup",[t._v("®")]),t._v(" 3 Pro is based on the FMUv4 hardware design (Pixracer) with some upgrades and additional features. The board was designed by "),a("a",{attrs:{href:"https://drotek.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek"),a("sup",[t._v("®")]),a("OutboundLink")],1),t._v(" and PX4.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(879),alt:"Pixhawk 3 Pro hero image"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The main hardware documentation is here: https://drotek.gitbook.io/pixhawk-3-pro/hardware")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This autopilot is "),a("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("supported")]),t._v(" by the PX4 maintenance and test teams.")],1)]),t._v(" "),a("h2",{attrs:{id:"总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总览"}},[t._v("#")]),t._v(" 总览")]),t._v(" "),a("ul",[a("li",[t._v("Microcontroller: "),a("strong",[t._v("STM32F469")]),t._v("; Flash size is "),a("strong",[t._v("2MiB")]),t._v(", RAM size is "),a("strong",[t._v("384KiB")])]),t._v(" "),a("li",[a("strong",[t._v("ICM-20608-G")]),t._v(" gyro / accelerometer")]),t._v(" "),a("li",[a("strong",[t._v("MPU-9250")]),t._v(" gyro / accelerometer / magnetometer")]),t._v(" "),a("li",[a("strong",[t._v("LIS3MDL")]),t._v(" compass")]),t._v(" "),a("li",[t._v("Sensors connected via two SPI buses (one high rate and one low-noise bus)")]),t._v(" "),a("li",[t._v("Two I2C buses")]),t._v(" "),a("li",[t._v("Two CAN buses")]),t._v(" "),a("li",[t._v("Voltage / battery readings from two power modules")]),t._v(" "),a("li",[t._v("FrSky"),a("sup",[t._v("®")]),t._v(" Inverter")]),t._v(" "),a("li",[t._v("8 Main + 6 AUX PWM outputs (Separate IO chip, PX4IO)")]),t._v(" "),a("li",[t._v("microSD (logging)")]),t._v(" "),a("li",[t._v("S.BUS / Spektrum / SUMD / PPM input")]),t._v(" "),a("li",[t._v("JST GH user-friendly connectors: same connectors and pinouts as Pixracer")])]),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to buy")]),t._v(" "),a("p",[t._v("From "),a("a",{attrs:{href:"https://store.drotek.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek store"),a("OutboundLink")],1),t._v(" (EU) :")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://store.drotek.com/autopilots/844-pixhawk-3-pro-pack.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 3 Pro (Pack)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://store.drotek.com/autopilots/821-pixhawk-pro-autopilot-8944595120557.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 3 Pro"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("From "),a("a",{attrs:{href:"https://www.readymaderc.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("readymaderc"),a("OutboundLink")],1),t._v(" (USA) :")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.readymaderc.com/products/details/pixhawk-3-pro-flight-controller",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 3 Pro"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"编译固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[t._v("#")]),t._v(" 编译固件")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),a("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),a("p",[t._v("To "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_fmu-v4pro_default\n")])])]),a("h2",{attrs:{id:"debug调试端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug调试端口"}},[t._v("#")]),t._v(" Debug调试端口")]),t._v(" "),a("p",[t._v("The board has FMU and IO debug ports as shown below.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(880),alt:"Debug Ports"}})]),t._v(" "),a("p",[t._v("The pinouts and connector comply with the "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Standard Debug Port"),a("OutboundLink")],1),t._v(" (JST SM06B connector).")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("针脚")]),t._v(" "),a("th",[t._v("信号")]),t._v(" "),a("th",[t._v("电压")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("VCC TARGET SHIFT")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("UART7 Tx")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("UART7 Rx")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("4（黑）")]),t._v(" "),a("td",[t._v("SWDIO")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("SWCLK")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("p",[t._v("For information about wiring and using this port see:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/debug/system_console.html#pixhawk_debug_port"}},[t._v("PX4 System Console")]),t._v(" (Note, the FMU console maps to UART7).")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html"}},[t._v("SWD (JTAG) Hardware Debugging Interface")])],1)]),t._v(" "),a("h2",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("设备")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("UART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("WiFi")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("TELEM2 (flow control)")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("CONSOLE")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("SERIAL4")]),t._v(" "),a("td")])])])])}),[],!1,null,null,null);r.default=o.exports},879:function(t,r,e){t.exports=e.p+"assets/img/hardware-pixhawk3_pro.80ff4b0e.jpg"},880:function(t,r,e){t.exports=e.p+"assets/img/pixhawk3_pro_debug_ports.10df4411.jpg"}}]);