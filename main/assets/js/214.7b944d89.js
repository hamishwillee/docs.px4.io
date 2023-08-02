(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{1939:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"modalai-flight-core-v1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modalai-flight-core-v1"}},[t._v("#")]),t._v(" ModalAI Flight Core v1")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),a("a",{attrs:{href:"https://forum.modalai.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),a("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),a("p",[t._v("The ModalAI "),a("a",{attrs:{href:"https://modalai.com/flight-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Core v1"),a("OutboundLink")],1),t._v(" ("),a("a",{attrs:{href:"https://docs.modalai.com/flight-core-datasheet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Datasheet"),a("OutboundLink")],1),t._v(") is a flight controller for PX4, made in the USA.\nThe Flight Core can be paired with ModalAI "),a("a",{attrs:{href:"https://modalai.com/voxl",target:"_blank",rel:"noopener noreferrer"}},[t._v("VOXL"),a("OutboundLink")],1),t._v(" ("),a("a",{attrs:{href:"https://docs.modalai.com/voxl-datasheet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Datasheet"),a("OutboundLink")],1),t._v(") for obstacle avoidance and GPS-denied navigation, or used independently as a standalone flight controller.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(817),alt:"FlightCoreV1"}})]),t._v(" "),a("p",[t._v("Flight Core is identical to the PX4 Flight Controller portion of "),a("a",{attrs:{href:"https://www.modalai.com/voxl-flight",target:"_blank",rel:"noopener noreferrer"}},[t._v("VOXL Flight"),a("OutboundLink")],1),t._v(" ("),a("a",{attrs:{href:"https://docs.modalai.com/voxl-flight-datasheet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Datasheet"),a("OutboundLink")],1),t._v(") which integrates the VOXL Companion Computer and Flight Core into a single PCB.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This flight controller is "),a("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Feature")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Details")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Weight")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6 g")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MCU")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("216MHz, 32-bit ARM M7 "),a("a",{attrs:{href:"https://www.st.com/en/microcontrollers-microprocessors/stm32f765ii.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32F765II"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Memory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("256Kb FRAM")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2Mbit Flash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("512Kbit SRAM")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Firmware")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/boards/modalai/fc-v1",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("IMUs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.invensense.com/products/motion-tracking/6-axis/icm-20602/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICM-20602"),a("OutboundLink")],1),t._v(" (SPI1)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ICM-42688 (SPI2)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.bosch-sensortec.com/bst/products/all_products/bmi088_1",target:"_blank",rel:"noopener noreferrer"}},[t._v("BMI088"),a("OutboundLink")],1),t._v(" (SPI6)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Barometer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.bosch-sensortec.com/products/environmental-sensors/pressure-sensors/bmp388/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BMP388"),a("OutboundLink")],1),t._v(" (I2C4)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Secure Element")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.nxp.com/products/security-and-authentication/authentication/plug-and-trust-the-fast-easy-way-to-deploy-secure-iot-connections:A71CH",target:"_blank",rel:"noopener noreferrer"}},[t._v("A71CH"),a("OutboundLink")],1),t._v(" (I2C4)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("microSD Card")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/en/dev_log/logging.html#sd-cards"}},[t._v("Information on supported cards")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Inputs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GPS/Mag")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Spektrum")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Telemetry")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("CAN bus")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("PPM")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Outputs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6 LEDs (2xRGB)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8 PWM Channels")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Extra Interfaces")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3 serial ports")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("I2C")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GPIO")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("More detailed hardware documentation can be found "),a("a",{attrs:{href:"https://docs.modalai.com/flight-core-datasheet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"dimensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dimensions"}},[t._v("#")]),t._v(" Dimensions")]),t._v(" "),a("p",[a("img",{attrs:{src:r(818),alt:"FlightCoreV1Dimensions"}})]),t._v(" "),a("h2",{attrs:{id:"px4-firmware-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-firmware-compatibility"}},[t._v("#")]),t._v(" PX4 Firmware Compatibility")]),t._v(" "),a("p",[a("em",[t._v("Flight Core v1")]),t._v(" is fully compatible with the official PX4 Firmware from PX4 v1.11.")]),t._v(" "),a("p",[t._v("ModalAI maintains a "),a("a",{attrs:{href:"https://github.com/modalai/px4-firmware/tree/modalai-1.11",target:"_blank",rel:"noopener noreferrer"}},[t._v("branched PX4 version"),a("OutboundLink")],1),t._v(" for PX4 v1.11.\nThis includes UART ESC support and improvements in VIO and VOA that are planned to be upstreamed.")]),t._v(" "),a("p",[t._v("More information about the firmware can be found "),a("a",{attrs:{href:"https://docs.modalai.com/flight-core-firmware/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"qgroundcontrol-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-support"}},[t._v("#")]),t._v(" QGroundControl Support")]),t._v(" "),a("p",[t._v("This board supported in QGroundControl 4.0 and later.")]),t._v(" "),a("h2",{attrs:{id:"availability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#availability"}},[t._v("#")]),t._v(" Availability")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://modalai.com/flight-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Core Complete Kit"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://modalai.com/flight-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Core integrated with VOXL Companion Computer on a single PCB"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://modalai.com/flight-deck",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Core integrated with VOXL Companion Computer and Obstacle Avoidance Cameras (VOXL Flight Deck)"),a("OutboundLink")],1),t._v(" ("),a("a",{attrs:{href:"https://docs.modalai.com/voxl-flight-deck-platform-datasheet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Datasheet"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://shop.modalai.com/products/voxl-flight-deck-r1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Core assembled with VOXL and cameras"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("h3",{attrs:{id:"orientation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orientation"}},[t._v("#")]),t._v(" Orientation")]),t._v(" "),a("p",[t._v("The diagram below shows the recommended orientation, which corresponds to "),a("code",[t._v("ROTATION_NONE")]),t._v(" starting with PX4 v1.11 (and on the "),a("a",{attrs:{href:"https://github.com/modalai/px4-firmware/tree/modalai-1.10",target:"_blank",rel:"noopener noreferrer"}},[t._v("ModalAI-maintained PX4 v1.10 branch"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("p",[a("img",{attrs:{src:r(819),alt:"FlightCoreV1Orientation"}})]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("For "),a("em",[t._v("PX4 v1.10")]),t._v(" stable releases from "),a("em",[t._v("QGroundControl")]),t._v(" use "),a("code",[t._v("ROTATION_YAW_180")]),t._v(" for the above orientation.")])]),t._v(" "),a("h3",{attrs:{id:"connectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connectors"}},[t._v("#")]),t._v(" Connectors")]),t._v(" "),a("p",[t._v("Detailed information about the pinouts can be found "),a("a",{attrs:{href:"https://docs.modalai.com/flight-core-datasheet-connectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:r(820),alt:"FlightCoreV1Top"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Connector")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("J1")]),t._v(" "),a("td",[t._v("VOXL Communications Interface Connector (TELEM2)")])]),t._v(" "),a("tr",[a("td",[t._v("J2")]),t._v(" "),a("td",[t._v("Programming and Debug Connector")])]),t._v(" "),a("tr",[a("td",[t._v("J3")]),t._v(" "),a("td",[t._v("USB Connector")])]),t._v(" "),a("tr",[a("td",[t._v("J4")]),t._v(" "),a("td",[t._v("UART2, UART ESC (TELEM3)")])]),t._v(" "),a("tr",[a("td",[t._v("J5")]),t._v(" "),a("td",[t._v("Telemetry Connector (TELEM1)")])]),t._v(" "),a("tr",[a("td",[t._v("J6")]),t._v(" "),a("td",[t._v("VOXL-Power Management Input / Expansion")])]),t._v(" "),a("tr",[a("td",[t._v("J7")]),t._v(" "),a("td",[t._v("8-Channel PWM Output Connector")])]),t._v(" "),a("tr",[a("td",[t._v("J8")]),t._v(" "),a("td",[t._v("CAN Bus Connector")])]),t._v(" "),a("tr",[a("td",[t._v("J9")]),t._v(" "),a("td",[t._v("PPM RC In")])]),t._v(" "),a("tr",[a("td",[t._v("J10")]),t._v(" "),a("td",[t._v("External GPS & Magnetometer Connector")])]),t._v(" "),a("tr",[a("td",[t._v("J12")]),t._v(" "),a("td",[t._v("RC input, Spektrum/SBus/UART Connector")])]),t._v(" "),a("tr",[a("td",[t._v("J13")]),t._v(" "),a("td",[t._v("I2C Display (Spare Sensor Connector) / Safety Button Input")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:r(821),alt:"FlightCoreV1Bottom"}})]),t._v(" "),a("h3",{attrs:{id:"user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-guide"}},[t._v("#")]),t._v(" User Guide")]),t._v(" "),a("p",[t._v("The full user guide is available "),a("a",{attrs:{href:"https://docs.modalai.com/flight-core-manual/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"how-to-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build"}},[t._v("#")]),t._v(" How to Build")]),t._v(" "),a("p",[t._v("To "),a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make modalai_fc-v1\n")])])]),a("h2",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("Device")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("USART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("GPS1 (J10)")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM3 (J4)")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("Debug Console (J2)")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS3")]),t._v(" "),a("td",[t._v("Expansion UART (J6)")])]),t._v(" "),a("tr",[a("td",[t._v("UART5")]),t._v(" "),a("td",[t._v("/dev/ttyS4")]),t._v(" "),a("td",[t._v("TELEM2, Primary VOXL Communications (J1)")])]),t._v(" "),a("tr",[a("td",[t._v("USART6")]),t._v(" "),a("td",[t._v("/dev/ttyS5")]),t._v(" "),a("td",[t._v("RC (J12)")])]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("/dev/ttyS6")]),t._v(" "),a("td",[t._v("TELEM1 (J5)")])]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("/dev/ttyS7")]),t._v(" "),a("td",[t._v("N/A")])])])]),t._v(" "),a("h2",{attrs:{id:"support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[t._v("#")]),t._v(" Support")]),t._v(" "),a("p",[t._v("Please visit the "),a("a",{attrs:{href:"https://forum.modalai.com/category/10/flight-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("ModalAI Forum"),a("OutboundLink")],1),t._v(" for more information.")])])}),[],!1,null,null,null);e.default=o.exports},817:function(t,e,r){t.exports=r.p+"assets/img/main.420e0703.jpg"},818:function(t,e,r){t.exports=r.p+"assets/img/dimensions.dee7fec4.png"},819:function(t,e,r){t.exports=r.p+"assets/img/orientation.fed8ab33.png"},820:function(t,e,r){t.exports=r.p+"assets/img/top.65030d0d.png"},821:function(t,e,r){t.exports=r.p+"assets/img/bottom.730160e2.png"}}]);