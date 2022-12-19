(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1911:function(t,e,a){"use strict";a.r(e);var r=a(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mindpx-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mindpx-hardware"}},[t._v("#")]),t._v(" MindPX Hardware")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),r("a",{attrs:{href:"http://mindpx.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),r("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),r("p",[t._v("The AirMind"),r("sup",[t._v("®")]),t._v(" "),r("a",{attrs:{href:"http://mindpx.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("MindPX"),r("OutboundLink")],1),t._v(" series is a new generation autopilot system branched from Pixhawk"),r("sup",[t._v("®")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:a(835),alt:"MindPX Controller"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("These flight controllers are "),r("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"quick-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[t._v("#")]),t._v(" Quick Summary")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The main hardware documentation is "),r("a",{attrs:{href:"http://mindpx.net/assets/accessories/Specification9.18_3_pdf.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("p",[t._v("MindPX is a new generation autopilot system branched from Pixhawk"),r("sup",[t._v("®")]),t._v(", been revised in schematic and structure, and been further enhanced with new features to make un-manned vehicle more smart and more friendly to use.")]),t._v(" "),r("p",[t._v("MindPX increases total PWM output channels to 16 (8 main outputs + 8 aux outputs).\nThis means that MindPX can support more complicated VTOL configurations and more fine control.\nIt is especially meaningful for those FMU-V4 based flight controllers as MindPX implements main and aux output in one single FMU.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(836),alt:""}})]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Main System-on-Chip: STM32F427")]),t._v(" "),r("ul",[r("li",[t._v("CPU: 32bits, 168 MHz ARM Cortex"),r("sup",[t._v("®")]),t._v(" M4 with FPU")]),t._v(" "),r("li",[t._v("RAM: 256 KB SRAM")]),t._v(" "),r("li",[t._v("2MB Flash")]),t._v(" "),r("li",[t._v("ST Micro LSM303D 14 bit accelerometer/magnetometer")]),t._v(" "),r("li",[t._v("MEAS MS5611 barometer")]),t._v(" "),r("li",[t._v("InvenSense"),r("sup",[t._v("®")]),t._v(" MPU6500 integrated 6-axis sensors")])])]),t._v(" "),r("li",[r("p",[t._v("Highlighted features:")]),t._v(" "),r("ul",[r("li",[t._v("CNC processed aluminum alloy case, light and solid")]),t._v(" "),r("li",[t._v("Built-in isolated IMU redundancy")]),t._v(" "),r("li",[t._v("Total 16 PWM output channel (8 main + 8 aux)")]),t._v(" "),r("li",[t._v("1 extra I2C port for flow connection.")]),t._v(" "),r("li",[t._v("1 extra USB port for companion computer connection (built-in UART-to-USB converter)")]),t._v(" "),r("li",[t._v("Exposed debug port for development")])])])]),t._v(" "),r("h2",{attrs:{id:"quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),r("h3",{attrs:{id:"mounting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mounting"}},[t._v("#")]),t._v(" Mounting")]),t._v(" "),r("p",[r("img",{attrs:{src:a(837),alt:"MindPX Mounting"}})]),t._v(" "),r("h3",{attrs:{id:"wiring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[t._v("#")]),t._v(" Wiring")]),t._v(" "),r("p",[r("img",{attrs:{src:a(838),alt:"MindPX Wiring 1"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(839),alt:"MindPX Wiring 2"}})]),t._v(" "),r("h3",{attrs:{id:"pin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pin"}},[t._v("#")]),t._v(" Pin")]),t._v(" "),r("p",[r("img",{attrs:{src:a(840),alt:"MindPX Pinout"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("Num.")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Num.")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Power")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("I2C2 (MindFLow)")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Debug (refresh bootloader)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("USB2 (Serial 2 to USB)")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("USB1 (refresh firmware)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("UART4,5")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Reset")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("UART1 (Telemetry)")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("UART3 (GPS)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("13")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CAN")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("I2C1(external compass)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("14")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("ADC")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("TF card slot")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("15")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Tricolor Light")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NRF/SPI(Remote Control)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Looper")])])])]),t._v(" "),r("h3",{attrs:{id:"radio-receiver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-receiver"}},[t._v("#")]),t._v(" Radio Receiver")]),t._v(" "),r("p",[t._v("MindPX supports a wide variety of radio receivers (since V2.6) including: PPM/SBUS/DSM/DSM2/DSMX.\nMindPX also support FrSky"),r("sup",[t._v("®")]),t._v(" bi-direction telemetry D and S.Port.")]),t._v(" "),r("p",[t._v("For detailed Pin diagram, please refer to the "),r("a",{attrs:{href:"http://mindpx.net/assets/accessories/UserGuide9.18_2_pdf.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("User Guide"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"building-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("Most users will not need to build this firmware!\nIt is pre-built and automatically installed by "),r("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),r("p",[t._v("To "),r("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("make airmind_mindpx-v2_default\n")])])]),r("h3",{attrs:{id:"companion-pc-connection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#companion-pc-connection"}},[t._v("#")]),t._v(" Companion PC connection")]),t._v(" "),r("p",[t._v("MindPX has a USB-TO-UART Bridge IC on the board.\nA micro-USB to USB type A cable is used for the connection.\nConnect micro-USB end to the 'OBC' port of MindPX and USB type A end to companion computer.")]),t._v(" "),r("p",[t._v("And the max BAUD rate is the same with px4 family, which is up to 921600.")]),t._v(" "),r("h2",{attrs:{id:"user-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#user-guide"}},[t._v("#")]),t._v(" User Guide")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The user guide is "),r("a",{attrs:{href:"http://mindpx.net/assets/accessories/UserGuide9.18_2_pdf.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"where-to-buy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),r("p",[t._v("MindRacer is available at "),r("a",{attrs:{href:"http://drupal.xitronet.com/?q=catalog",target:"_blank",rel:"noopener noreferrer"}},[t._v("AirMind Store"),r("OutboundLink")],1),t._v(" on internet.\nYou can also find MindRacer at Amazon"),r("sup",[t._v("®")]),t._v(" or eBay"),r("sup",[t._v("®")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"serial-port-mapping"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("UART")]),t._v(" "),r("th",[t._v("Device")]),t._v(" "),r("th",[t._v("Port")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("USART1")]),t._v(" "),r("td",[t._v("/dev/ttyS0")]),t._v(" "),r("td",[t._v("RC")])]),t._v(" "),r("tr",[r("td",[t._v("USART2")]),t._v(" "),r("td",[t._v("/dev/ttyS1")]),t._v(" "),r("td",[t._v("TELEM1")])]),t._v(" "),r("tr",[r("td",[t._v("USART3")]),t._v(" "),r("td",[t._v("/dev/ttyS2")]),t._v(" "),r("td",[t._v("TELEM2")])]),t._v(" "),r("tr",[r("td",[t._v("UART4")]),t._v(" "),r("td",[t._v("/dev/ttyS3")]),t._v(" "),r("td",[t._v("GPS1")])]),t._v(" "),r("tr",[r("td",[t._v("USART6")]),t._v(" "),r("td",[t._v("/dev/ttyS4")]),t._v(" "),r("td",[t._v("?")])]),t._v(" "),r("tr",[r("td",[t._v("UART7")]),t._v(" "),r("td",[t._v("/dev/ttyS5")]),t._v(" "),r("td",[t._v("Debug Console")])]),t._v(" "),r("tr",[r("td",[t._v("UART8")]),t._v(" "),r("td",[t._v("/dev/ttyS6")]),t._v(" "),r("td",[t._v("?")])])])]),t._v(" "),r("h2",{attrs:{id:"support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[t._v("#")]),t._v(" Support")]),t._v(" "),r("p",[t._v("Please visit http://www.mindpx.org for more information.\nOr you can send email to "),r("a",{attrs:{href:"mailto:support@mindpx.net"}},[t._v("support@mindpx.net")]),t._v(" for any inquiries or help.")])])}),[],!1,null,null,null);e.default=i.exports},835:function(t,e,a){t.exports=a.p+"assets/img/hardware-mindpx.bbb3deed.png"},836:function(t,e,a){t.exports=a.p+"assets/img/hardware-mindpx-specs.2c2fbd47.png"},837:function(t,e,a){t.exports=a.p+"assets/img/hardware-mindpx-mounting.dec7f92b.png"},838:function(t,e,a){t.exports=a.p+"assets/img/hardware-mindpx-wiring1.4a8aa4ba.png"},839:function(t,e,a){t.exports=a.p+"assets/img/hardware-mindpx-wiring2.6635da8b.png"},840:function(t,e,a){t.exports=a.p+"assets/img/hardware-mindpx-pin.a1408fc8.png"}}]);