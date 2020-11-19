(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{1591:function(t,r,e){"use strict";e.r(r);var o=e(18),a=Object(o.a)({},(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"pixhawk-3-pro"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-3-pro"}},[t._v("#")]),t._v(" Pixhawk 3 Pro")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Warning")]),t._v(" PX4 does not manufacture this (or any) autopilot.\nContact the "),o("a",{attrs:{href:"https://store-drotek.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),o("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),o("p",[t._v("The Pixhawk"),o("sup",[t._v("®")]),t._v(" 3 Pro is based on the FMUv4 hardware design (Pixracer) with some upgrades and additional features.\nThe board was designed by "),o("a",{attrs:{href:"https://drotek.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek"),o("sup",[t._v("®")]),o("OutboundLink")],1),t._v(" and PX4.")]),t._v(" "),o("p",[o("img",{attrs:{src:e(764),alt:"Pixhawk 3 Pro hero image"}})]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" The main hardware documentation is here: https://drotek.gitbook.io/pixhawk-3-pro/hardware")])]),t._v(" "),o("p",[o("span")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Tip")]),t._v(" This autopilot is "),o("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("supported")]),t._v(" by the PX4 maintenance and test teams.")],1)]),t._v(" "),o("h2",{attrs:{id:"quick-summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[t._v("#")]),t._v(" Quick Summary")]),t._v(" "),o("ul",[o("li",[t._v("Microcontroller: "),o("strong",[t._v("STM32F469")]),t._v("; Flash size is "),o("strong",[t._v("2MiB")]),t._v(", RAM size is "),o("strong",[t._v("384KiB")])]),t._v(" "),o("li",[o("strong",[t._v("ICM-20608-G")]),t._v(" gyro / accelerometer")]),t._v(" "),o("li",[o("strong",[t._v("MPU-9250")]),t._v(" gyro / accelerometer / magnetometer")]),t._v(" "),o("li",[o("strong",[t._v("LIS3MDL")]),t._v(" compass")]),t._v(" "),o("li",[t._v("Sensors connected via two SPI buses (one high rate and one low-noise bus)")]),t._v(" "),o("li",[t._v("Two I2C buses")]),t._v(" "),o("li",[t._v("Two CAN buses")]),t._v(" "),o("li",[t._v("Voltage / battery readings from two power modules")]),t._v(" "),o("li",[t._v("FrSky"),o("sup",[t._v("®")]),t._v(" Inverter")]),t._v(" "),o("li",[t._v("8 Main + 6 AUX PWM outputs (Separate IO chip, PX4IO)")]),t._v(" "),o("li",[t._v("microSD (logging)")]),t._v(" "),o("li",[t._v("S.BUS / Spektrum / SUMD / PPM input")]),t._v(" "),o("li",[t._v("JST GH user-friendly connectors: same connectors and pinouts as Pixracer")])]),t._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to buy")]),t._v(" "),o("p",[t._v("From "),o("a",{attrs:{href:"https://store.drotek.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek store"),o("OutboundLink")],1),t._v(" (EU) :")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://store.drotek.com/autopilots/844-pixhawk-3-pro-pack.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 3 Pro (Pack)"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://store.drotek.com/autopilots/821-pixhawk-pro-autopilot-8944595120557.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 3 Pro"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("From "),o("a",{attrs:{href:"https://www.readymaderc.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("readymaderc"),o("OutboundLink")],1),t._v(" (USA) :")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.readymaderc.com/products/details/pixhawk-3-pro-flight-controller",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 3 Pro"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"building-firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Tip")]),t._v(" Most users will not need to build this firmware!\nIt is pre-built and automatically installed by "),o("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),o("p",[t._v("To "),o("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_fmu-v4pro_default\n")])])]),o("h2",{attrs:{id:"debug-port"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug-port"}},[t._v("#")]),t._v(" Debug Port")]),t._v(" "),o("p",[t._v("The board has FMU and IO debug ports as shown below.")]),t._v(" "),o("p",[o("img",{attrs:{src:e(765),alt:"Debug Ports"}})]),t._v(" "),o("p",[t._v("The pinouts and connector comply with the "),o("a",{attrs:{href:"https://pixhawk.org/pixhawk-connector-standard/#dronecode_debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Standard Debug Port"),o("OutboundLink")],1),t._v(" (JST SM06B connector).")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Pin")]),t._v(" "),o("th",[t._v("Signal")]),t._v(" "),o("th",[t._v("Volt")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1 (red)")]),t._v(" "),o("td",[t._v("VCC TARGET SHIFT")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("2 (blk)")]),t._v(" "),o("td",[t._v("CONSOLE TX (OUT)")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("3 (blk)")]),t._v(" "),o("td",[t._v("CONSOLE RX (IN)")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("4 (blk)")]),t._v(" "),o("td",[t._v("SWDIO")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("5 (blk)")]),t._v(" "),o("td",[t._v("SWCLK")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("6 (blk)")]),t._v(" "),o("td",[t._v("GND")]),t._v(" "),o("td",[t._v("GND")])])])]),t._v(" "),o("p",[t._v("For information about wiring and using this port see:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/debug/system_console.html#pixhawk_debug_port"}},[t._v("PX4 System Console")]),t._v(" (Note, the FMU console maps to UART7).")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[t._v("SWD (JTAG) Hardware Debugging Interface")])],1)]),t._v(" "),o("h2",{attrs:{id:"serial-port-mapping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("UART")]),t._v(" "),o("th",[t._v("Device")]),t._v(" "),o("th",[t._v("Port")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("UART1")]),t._v(" "),o("td",[t._v("/dev/ttyS0")]),t._v(" "),o("td",[t._v("WiFi")])]),t._v(" "),o("tr",[o("td",[t._v("USART2")]),t._v(" "),o("td",[t._v("/dev/ttyS1")]),t._v(" "),o("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),o("tr",[o("td",[t._v("USART3")]),t._v(" "),o("td",[t._v("/dev/ttyS2")]),t._v(" "),o("td",[t._v("TELEM2 (flow control)")])]),t._v(" "),o("tr",[o("td",[t._v("UART4")]),t._v(" "),o("td"),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("UART7")]),t._v(" "),o("td",[t._v("CONSOLE")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("UART8")]),t._v(" "),o("td",[t._v("SERIAL4")]),t._v(" "),o("td")])])])])}),[],!1,null,null,null);r.default=a.exports},764:function(t,r,e){t.exports=e.p+"assets/img/hardware-pixhawk3_pro.80ff4b0e.jpg"},765:function(t,r,e){t.exports=e.p+"assets/img/pixhawk3_pro_debug_ports.10df4411.jpg"}}]);