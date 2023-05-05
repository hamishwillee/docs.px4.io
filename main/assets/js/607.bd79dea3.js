(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{3349:function(t,e,r){"use strict";r.r(e);var v=r(19),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"thepeach-fcc-r1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#thepeach-fcc-r1"}},[t._v("#")]),t._v(" ThePeach FCC-R1")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("PX4 does not manufacture this (or any) autopilot. Contact the "),v("a",{attrs:{href:"https://thepeach.kr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),v("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),v("p",[v("strong",[t._v("ThePeach FCC-R1")]),t._v(" is an advanced autopilot designed and made in "),v("strong",[t._v("ThePeach")]),t._v(".")]),t._v(" "),v("p",[t._v("It is based on the "),v("strong",[t._v("Pixhawk-project FMUv3")]),t._v(" open hardware design and runs "),v("strong",[t._v("PX4")]),t._v(" on "),v("strong",[t._v("Nuttx OS")]),t._v(".")]),t._v(" "),v("p",[v("img",{attrs:{src:r(931),alt:"ThePeach_R1"}})]),t._v(" "),v("h2",{attrs:{id:"specifications"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Main Processor: STM32F427VIT6")]),t._v(" "),v("ul",[v("li",[t._v("32bit ARM Cortex-M4, 168 MHz 256 KB RAM 2 MB Flash memory")])])]),t._v(" "),v("li",[v("p",[t._v("IO Processor: STM32F100C8T6")]),t._v(" "),v("ul",[v("li",[t._v("ARM Cortex-M3, 32bit ARM Cortex-M3, 24 MHz, 8KB SRAM")])])]),t._v(" "),v("li",[v("p",[t._v("On-board sensors")]),t._v(" "),v("ul",[v("li",[t._v("Accel/Gyro: ICM-20602")]),t._v(" "),v("li",[t._v("Accel/Gyro/Mag: MPU-9250")]),t._v(" "),v("li",[t._v("Barometer: MS5611")])])]),t._v(" "),v("li",[v("p",[t._v("Interfaces")]),t._v(" "),v("ul",[v("li",[t._v("8+6 PWM output (8 from IO, 6 from FMU)")]),t._v(" "),v("li",[t._v("Spektrum DSM / DSM2 / DSM-X Satellite compatible input")]),t._v(" "),v("li",[t._v("Futaba S.BUS compatible input and output")]),t._v(" "),v("li",[t._v("PPM sum signal input")]),t._v(" "),v("li",[t._v("Analogue / PWM RSSI input")]),t._v(" "),v("li",[t._v("S.Bus servo output")]),t._v(" "),v("li",[t._v("Safety switch/LED")]),t._v(" "),v("li",[t._v("4x UART: TELEM1, TELEM2(Raspberry Pi CM3+), GPS, SERIAL4")]),t._v(" "),v("li",[t._v("1x I2C Ports")]),t._v(" "),v("li",[t._v("1x CAN bus")]),t._v(" "),v("li",[t._v("Analog inputs for voltage / Current of 1 battery")])])]),t._v(" "),v("li",[v("p",[t._v("Interfaces For Raspberry Pi CM3+")]),t._v(" "),v("ul",[v("li",[t._v("VBUS")]),t._v(" "),v("li",[t._v("DDR2 Connector: Raspberry Pi CM3+")]),t._v(" "),v("li",[t._v("1x UART")]),t._v(" "),v("li",[t._v("2x USB")]),t._v(" "),v("li",[t._v("1x Raspberry Pi Camera")])])]),t._v(" "),v("li",[v("p",[t._v("Mechanical")]),t._v(" "),v("ul",[v("li",[t._v("Dimensions: 49.2 x 101 x 18.2mm")]),t._v(" "),v("li",[t._v("Weight: 100g")])])])]),t._v(" "),v("h2",{attrs:{id:"connectors"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#connectors"}},[t._v("#")]),t._v(" Connectors")]),t._v(" "),v("p",[v("img",{attrs:{src:r(932),alt:"pinmap_top"}})]),t._v(" "),v("h2",{attrs:{id:"serial-port-mapping"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("UART")]),t._v(" "),v("th",[t._v("Device")]),t._v(" "),v("th",[t._v("Port")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("USART1")]),t._v(" "),v("td",[t._v("/dev/ttyS0")]),t._v(" "),v("td",[t._v("IO Processor Debug")])]),t._v(" "),v("tr",[v("td",[t._v("USART2")]),t._v(" "),v("td",[t._v("/dev/ttyS1")]),t._v(" "),v("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),v("tr",[v("td",[t._v("USART3")]),t._v(" "),v("td",[t._v("/dev/ttyS2")]),t._v(" "),v("td",[t._v("TELEM2 (Raspberry pi cm3+)")])]),t._v(" "),v("tr",[v("td",[t._v("UART4")]),t._v(" "),v("td",[t._v("/dev/ttyS3")]),t._v(" "),v("td",[t._v("GPS1")])]),t._v(" "),v("tr",[v("td",[t._v("USART6")]),t._v(" "),v("td",[t._v("/dev/ttyS4")]),t._v(" "),v("td",[t._v("PX4IO")])]),t._v(" "),v("tr",[v("td",[t._v("UART7")]),t._v(" "),v("td",[t._v("/dev/ttys5")]),t._v(" "),v("td",[t._v("Debug console")])]),t._v(" "),v("tr",[v("td",[t._v("UART8")]),t._v(" "),v("td",[t._v("/dev/ttyS6")]),t._v(" "),v("td",[t._v("TELEM4")])])])]),t._v(" "),v("h2",{attrs:{id:"voltage-ratings"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#voltage-ratings"}},[t._v("#")]),t._v(" Voltage Ratings")]),t._v(" "),v("p",[v("strong",[t._v("ThePeach FCC-R1")]),t._v(" can be double-redundant on the power supply if two power sources are supplied. The two power rails are: "),v("strong",[t._v("POWER")]),t._v(" and "),v("strong",[t._v("USB")]),t._v(".")]),t._v(" "),v("p",[t._v("Note:")]),t._v(" "),v("ol",[v("li",[t._v("The output power rails "),v("strong",[t._v("FMU PWM OUT")]),t._v(" and "),v("strong",[t._v("I/O PWM OUT")]),t._v(" do not power the flight controller board (and are not powered by it). You must supply power to one of "),v("strong",[t._v("POWER")]),t._v(" or "),v("strong",[t._v("USB")]),t._v(" or the board will be unpowered.")]),t._v(" "),v("li",[t._v("The USB do not power the "),v("strong",[t._v("Raspberry Pi CM3+")]),t._v(". You must supply power to "),v("strong",[t._v("POWER")]),t._v(" or the Raspberry Pi CM3+ will be unpowered.")])]),t._v(" "),v("p",[v("strong",[t._v("Normal Operation Maximum Ratings")])]),t._v(" "),v("p",[t._v("Under these conditions, all power sources will be used in this order to power the system:")]),t._v(" "),v("ol",[v("li",[t._v("POWER input (5V to 5.5V)")]),t._v(" "),v("li",[t._v("USB input (4.75V to 5.25V)")])]),t._v(" "),v("p",[v("strong",[t._v("Absolute Maximum Ratings")])]),t._v(" "),v("p",[t._v("Under these conditions, all power sources cause permanent damage to the flight controller.")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("POWER input (5.5V Over)")])]),t._v(" "),v("li",[v("p",[t._v("USB input (5.5V Over)")])])]),t._v(" "),v("h2",{attrs:{id:"building-firmware"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),v("p",[t._v("To build PX4 for this target:")]),t._v(" "),v("div",{staticClass:"language-jsx extra-class"},[v("pre",{pre:!0,attrs:{class:"language-jsx"}},[v("code",[t._v("make thepeach_r1_default\n")])])]),v("h2",{attrs:{id:"where-to-buy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to buy")]),t._v(" "),v("p",[t._v("Order from "),v("a",{attrs:{href:"http://thepeach.shop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ThePeach"),v("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=_.exports},931:function(t,e,r){t.exports=r.p+"assets/img/main.cc4b5e34.png"},932:function(t,e,r){t.exports=r.p+"assets/img/pinmap.b2820bb2.png"}}]);