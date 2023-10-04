(window.webpackJsonp=window.webpackJsonp||[]).push([[717],{1976:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"pixfalcon-flight-controller-discontinued"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pixfalcon-flight-controller-discontinued"}},[t._v("#")]),t._v(" Pixfalcon Flight Controller (Discontinued)")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("This flight controller has been "),o("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_experimental.html"}},[t._v("discontinued")]),t._v(" and is no longer commercially available.")],1)]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),o("a",{attrs:{href:"https://holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),o("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),o("p",[t._v("The Pixfalcon autopilot (designed by "),o("a",{attrs:{href:"https://holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),o("sup",[t._v("®")]),o("OutboundLink")],1),t._v(") is binary-compatible (FMUv2) derivative of the "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")]),t._v(" design that has been optimized for space-constrained applications such as FPV racers. It has less IO to allow for the reduction in size.")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(875),alt:"Pixfalcon hero image"}})]),t._v(" "),o("h2",{attrs:{id:"quick-summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[t._v("#")]),t._v(" Quick Summary")]),t._v(" "),o("ul",[o("li",[t._v("Main System-on-Chip: "),o("a",{attrs:{href:"http://www.st.com/web/en/catalog/mmc/FM141/SC1169/SS1577/LN1789",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32F427"),o("OutboundLink")],1),t._v(" "),o("ul",[o("li",[t._v("CPU: 180 MHz ARM"),o("sup",[t._v("®")]),t._v(" Cortex"),o("sup",[t._v("®")]),t._v(" M4 with single-precision FPU")]),t._v(" "),o("li",[t._v("RAM: 256 KB SRAM (L1)")])])]),t._v(" "),o("li",[t._v("Failsafe System-on-Chip: STM32F100\n"),o("ul",[o("li",[t._v("CPU: 24 MHz ARM Cortex M3")]),t._v(" "),o("li",[t._v("RAM: 8 KB SRAM")])])]),t._v(" "),o("li",[t._v("GPS: u-blox"),o("sup",[t._v("®")]),t._v(" M8 (bundled)")])]),t._v(" "),o("h3",{attrs:{id:"connectivity"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connectivity"}},[t._v("#")]),t._v(" Connectivity")]),t._v(" "),o("ul",[o("li",[t._v("1x I2C")]),t._v(" "),o("li",[t._v("2x UART (one for Telemetry / OSD, no flow control)")]),t._v(" "),o("li",[t._v("8x PWM with manual override")]),t._v(" "),o("li",[t._v("S.BUS / PPM input")])]),t._v(" "),o("h2",{attrs:{id:"availability"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#availability"}},[t._v("#")]),t._v(" Availability:")]),t._v(" "),o("p",[t._v("From distributor "),o("a",{attrs:{href:"https://hobbyking.com/en_us/pixfalcon-micro-px4-autopilot-plus-micro-m8n-gps-and-mega-pbd-power-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking"),o("sup",[t._v("®")]),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Optional hardware:")]),t._v(" "),o("ul",[o("li",[t._v("Optical flow: PX4 Flow unit from manufacturer "),o("a",{attrs:{href:"https://holybro.com/products/px4flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Digital Airspeed sensor from manufacturer "),o("a",{attrs:{href:"https://holybro.com/products/digital-air-speed-sensor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),o("OutboundLink")],1),t._v(" or distributor "),o("a",{attrs:{href:"https://hobbyking.com/en_us/hkpilot-32-digital-air-speed-sensor-and-pitot-tube-set.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("On screen display with integrated Telemetry:\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://hobbyking.com/en_us/micro-hkpilot-telemetry-radio-module-with-on-screen-display-osd-unit-433mhz.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking OSD + EU Telemetry (433 MHz)"),o("OutboundLink")],1)])])]),t._v(" "),o("li",[t._v("Pure Telemetry options:\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://hobbyking.com/en_us/apm-pixhawk-wireless-wifi-radio-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking Wifi Telemetry"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/telemetry/sik_radio.html"}},[t._v("SIK Radios")])],1)])])]),t._v(" "),o("h2",{attrs:{id:"building-firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Most users will not need to build this firmware!\nIt is pre-built and automatically installed by "),o("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),o("p",[t._v("To "),o("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_fmu-v2_default\n")])])]),o("h2",{attrs:{id:"debug-port"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug-port"}},[t._v("#")]),t._v(" Debug Port")]),t._v(" "),o("p",[t._v("This board does not have a debug port (i.e it does not have a port for accessing the "),o("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("System Console")]),t._v(" or the "),o("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[t._v("SWD interface")]),t._v(" (JTAG).")],1),t._v(" "),o("p",[t._v("Developers will need to solder wires to the board test pads for SWD, and to the STM32F4 (IC) TX and RX to get a console.")]),t._v(" "),o("h2",{attrs:{id:"serial-port-mapping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("UART")]),t._v(" "),o("th",[t._v("Device")]),t._v(" "),o("th",[t._v("Port")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("UART1")]),t._v(" "),o("td",[t._v("/dev/ttyS0")]),t._v(" "),o("td",[t._v("IO Debug")])]),t._v(" "),o("tr",[o("td",[t._v("USART2")]),t._v(" "),o("td",[t._v("/dev/ttyS1")]),t._v(" "),o("td",[t._v("TELEM1 (No flow control)")])]),t._v(" "),o("tr",[o("td",[t._v("UART4")]),t._v(" "),o("td",[t._v("/dev/ttyS2")]),t._v(" "),o("td",[t._v("GPS")])])])])])}),[],!1,null,null,null);e.default=a.exports},875:function(t,e,r){t.exports=r.p+"assets/img/hardware-pixfalcon.8787439d.png"}}]);