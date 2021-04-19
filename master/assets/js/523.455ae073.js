(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{1610:function(t,e,r){"use strict";r.r(e);var a=r(18),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"holybro-pix32-flight-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pix32-flight-controller"}},[t._v("#")]),t._v(" Holybro pix32 Flight Controller")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),a("a",{attrs:{href:"https://shop.holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),a("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),a("p",[t._v("The Holybro"),a("sup",[t._v("®")]),t._v(" "),a("a",{attrs:{href:"https://shop.holybro.com/c/pixhawk-2_0460",target:"_blank",rel:"noopener noreferrer"}},[t._v("pix32 autopilot"),a("OutboundLink")],1),t._v(' (also known as "Pixhawk 2", and formerly as HKPilot32) is based on the '),a("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk"),a("sup",[t._v("®")]),t._v("-project"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("FMUv2")]),t._v(" open hardware design.\nThis board is based on hardware version Pixhawk 2.4.6.\nIt runs the PX4 flight stack on the "),a("a",{attrs:{href:"http://nuttx.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),a("OutboundLink")],1),t._v(" OS.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(720),alt:"pix32"}})]),t._v(" "),a("p",[t._v("As a CC-BY-SA 3.0 licensed Open Hardware design, schematics and design files should be "),a("a",{attrs:{href:"https://github.com/PX4/Hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("available here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The Holybro pix32 is software compatible with the "),a("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html"}},[t._v("3DR Pixhawk 1")]),t._v(".\nIt is not connector compatible, but is otherwise physically very similar to the 3DR Pixhawk or mRo Pixhawk.")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This flight controller is "),a("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"key-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-features"}},[t._v("#")]),t._v(" Key Features")]),t._v(" "),a("ul",[a("li",[t._v("Main System-on-Chip: "),a("a",{attrs:{href:"http://www.st.com/web/en/catalog/mmc/FM141/SC1169/SS1577/LN1789",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32F427"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("CPU: 32-bit STM32F427 Cortex"),a("sup",[t._v("®")]),t._v(" M4 core with FPU")]),t._v(" "),a("li",[t._v("RAM: 168 MHz/256 KB")]),t._v(" "),a("li",[t._v("Flash: 2 MB")])])]),t._v(" "),a("li",[t._v("Failsafe System-on-Chip: STM32F103")]),t._v(" "),a("li",[t._v("Sensors:\n"),a("ul",[a("li",[t._v("ST Micro L3GD20 3-axis 16-bit gyroscope")]),t._v(" "),a("li",[t._v("ST Micro LSM303D 3-axis 14-bit accelerometer / magnetometer")]),t._v(" "),a("li",[t._v("Invensense"),a("sup",[t._v("®")]),t._v(" MPU 6000 3-axis accelerometer/gyroscope")]),t._v(" "),a("li",[t._v("MEAS MS5611 barometer")])])]),t._v(" "),a("li",[t._v("Dimensions/Weight\n"),a("ul",[a("li",[t._v("Size: 81x44x15mm")]),t._v(" "),a("li",[t._v("Weight: 33.1g")])])]),t._v(" "),a("li",[t._v("GPS: u-blox"),a("sup",[t._v("®")]),t._v(" super precision Neo-7M with compass")]),t._v(" "),a("li",[t._v("Input Voltage: 2~10s (7.4~37V)")])]),t._v(" "),a("h3",{attrs:{id:"connectivity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connectivity"}},[t._v("#")]),t._v(" Connectivity")]),t._v(" "),a("ul",[a("li",[t._v("1x I2C")]),t._v(" "),a("li",[t._v("2x CAN")]),t._v(" "),a("li",[t._v("3.3 and 6.6V ADC inputs")]),t._v(" "),a("li",[t._v("5x UART (serial ports), one high-power capable, 2x with HW flow control")]),t._v(" "),a("li",[t._v("Spektrum DSM / DSM2 / DSM-X® Satellite compatible input up to DX8 (DX9 and above not supported)")]),t._v(" "),a("li",[t._v("Futaba"),a("sup",[t._v("®")]),t._v(" S.BUS compatible input and output")]),t._v(" "),a("li",[t._v("PPM sum signal")]),t._v(" "),a("li",[t._v("RSSI (PWM or voltage) input")]),t._v(" "),a("li",[t._v("SPI")]),t._v(" "),a("li",[t._v("External microUSB port")]),t._v(" "),a("li",[t._v("Molex PicoBlade connectors")])]),t._v(" "),a("h2",{attrs:{id:"purchase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[t._v("#")]),t._v(" Purchase")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://shop.holybro.com/c/pixhawk-2_0460",target:"_blank",rel:"noopener noreferrer"}},[t._v("shop.holybro.com"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"accessories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessories"}},[t._v("#")]),t._v(" Accessories")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://shop.holybro.com/c/digital-air-speed-sensor_0508",target:"_blank",rel:"noopener noreferrer"}},[t._v("Digital airspeed sensor"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://hobbyking.com/en_us/apm-pixhawk-wireless-wifi-radio-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking"),a("sup",[t._v("®")]),t._v(" Wifi Telemetry"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://shop.holybro.com/c/433mhz_0470",target:"_blank",rel:"noopener noreferrer"}},[t._v("Telemetry Radio EU (433 MHz)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://shop.holybro.com/c/915mhz_0471",target:"_blank",rel:"noopener noreferrer"}},[t._v("Telemetry Radio USA (915 MHz)"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"building-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Most users will not need to build this firmware!\nIt is pre-built and automatically installed by "),a("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),a("p",[t._v("To "),a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_fmu-v2_default\n")])])]),a("h2",{attrs:{id:"debug-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-port"}},[t._v("#")]),t._v(" Debug Port")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html#debug-ports"}},[t._v("3DR Pixhawk 1 > Debug Ports")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"pinouts-and-schematics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pinouts-and-schematics"}},[t._v("#")]),t._v(" Pinouts and Schematics")]),t._v(" "),a("p",[t._v("The board is based on the "),a("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk project"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("FMUv2")]),t._v(" open hardware design.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Hardware/master/FMUv2/PX4FMUv2.4.5.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv2 + IOv2 schematic"),a("OutboundLink")],1),t._v(" -- Schematic and layout")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("As a CC-BY-SA 3.0 licensed Open Hardware design, all schematics and design files are "),a("a",{attrs:{href:"https://github.com/PX4/Hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("available"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("Device")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("UART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("IO debug")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("TELEM2 (flow control)")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("CONSOLE")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("SERIAL4")]),t._v(" "),a("td")])])])])}),[],!1,null,null,null);e.default=o.exports},720:function(t,e,r){t.exports=r.p+"assets/img/pix32_hero.d590b8c1.jpg"}}]);