(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{3686:function(t,e,r){"use strict";r.r(e);var a=r(19),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"thepeach-fcc-k1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thepeach-fcc-k1"}},[t._v("#")]),t._v(" ThePeach FCC-K1")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("PX4 does not manufacture this (or any) autopilot. Contact the "),a("a",{attrs:{href:"https://thepeach.kr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),a("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),a("p",[a("strong",[t._v("ThePeach FCC-K1")]),t._v(" is an advanced autopilot designed and manufactured in "),a("strong",[t._v("ThePeach")]),t._v(".")]),t._v(" "),a("p",[t._v("It is based on the "),a("strong",[t._v("Pixhawk-project FMUv3")]),t._v(" open hardware design and runs "),a("strong",[t._v("PX4")]),t._v(" on "),a("strong",[t._v("Nuttx OS")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:r(938),alt:"ThePeach FCC-K1"}})]),t._v(" "),a("h2",{attrs:{id:"specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Main Processor: STM32F427VIT6")]),t._v(" "),a("ul",[a("li",[t._v("32bit ARM Cortex-M4, 168 MHz 256 KB RAM 2 MB Flash memory")])])]),t._v(" "),a("li",[a("p",[t._v("IO Processor: STM32F100C8T6")]),t._v(" "),a("ul",[a("li",[t._v("ARM Cortex-M3, 32bit ARM Cortex-M3, 24 MHz, 8KB SRAM")])])]),t._v(" "),a("li",[a("p",[t._v("On-board sensors")]),t._v(" "),a("ul",[a("li",[t._v("Accel/Gyro: ICM-20602")]),t._v(" "),a("li",[t._v("Accel/Gyro/Mag: MPU-9250")]),t._v(" "),a("li",[t._v("Barometer: MS5611")])])]),t._v(" "),a("li",[a("p",[t._v("Interfaces")]),t._v(" "),a("ul",[a("li",[t._v("8+5 PWM output (8 from IO, 5 from FMU)")]),t._v(" "),a("li",[t._v("Spektrum DSM / DSM2 / DSM-X Satellite compatible input")]),t._v(" "),a("li",[t._v("Futaba S.BUS compatible input and output")]),t._v(" "),a("li",[t._v("PPM sum signal input")]),t._v(" "),a("li",[t._v("Analogue / PWM RSSI input")]),t._v(" "),a("li",[t._v("S.Bus servo output")]),t._v(" "),a("li",[t._v("Safety switch/LED")]),t._v(" "),a("li",[t._v("4x UART Ports: TELEM1, TELEM2, GPS, SERIAL4")]),t._v(" "),a("li",[t._v("2x I2C Ports")]),t._v(" "),a("li",[t._v("1x CAN bus")]),t._v(" "),a("li",[t._v("1x ADC")]),t._v(" "),a("li",[t._v("Analog inputs for voltage / Current of 1 battery")])])]),t._v(" "),a("li",[a("p",[t._v("Mechanical")]),t._v(" "),a("ul",[a("li",[t._v("Dimensions: 40.2 x 61.1 x 24.8 mm")]),t._v(" "),a("li",[t._v("Weight: 65g")])])])]),t._v(" "),a("h2",{attrs:{id:"connectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connectors"}},[t._v("#")]),t._v(" Connectors")]),t._v(" "),a("p",[a("img",{attrs:{src:r(939),alt:"pinmap_top"}})]),t._v(" "),a("p",[a("img",{attrs:{src:r(940),alt:"pinmap_bottom"}})]),t._v(" "),a("h2",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("Device")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("USART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("IO Processor Debug")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("TELEM2 (flow control)")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS3")]),t._v(" "),a("td",[t._v("GPS1")])]),t._v(" "),a("tr",[a("td",[t._v("USART6")]),t._v(" "),a("td",[t._v("/dev/ttyS4")]),t._v(" "),a("td",[t._v("PX4IO")])]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("/dev/ttyS5")]),t._v(" "),a("td",[t._v("Debug Console")])]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("/dev/ttyS6")]),t._v(" "),a("td",[t._v("TELEM4")])])])]),t._v(" "),a("h2",{attrs:{id:"voltage-ratings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voltage-ratings"}},[t._v("#")]),t._v(" Voltage Ratings")]),t._v(" "),a("p",[a("strong",[t._v("ThePeach FCC-K1")]),t._v(" can be double-redundant on the power supply if two power sources are supplied. The two power rails are: "),a("strong",[t._v("POWER")]),t._v(" and "),a("strong",[t._v("USB")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The output power rails "),a("strong",[t._v("FMU PWM OUT")]),t._v(" and "),a("strong",[t._v("I/O PWM OUT")]),t._v(" do not power the flight controller board (and are not powered by it). You must supply power to one of "),a("strong",[t._v("POWER")]),t._v(" or "),a("strong",[t._v("USB")]),t._v(" or the board will be unpowered.")])]),t._v(" "),a("p",[a("strong",[t._v("Normal Operation Maximum Ratings")])]),t._v(" "),a("p",[t._v("Under these conditions all power sources will be used in this order to power the system:")]),t._v(" "),a("ol",[a("li",[t._v("POWER input (5V to 5.5V)")]),t._v(" "),a("li",[t._v("USB input (4.75V to 5.25V)")])]),t._v(" "),a("p",[a("strong",[t._v("Absolute Maximum Ratings")])]),t._v(" "),a("p",[t._v("Under these conditions, all power sources cause permanent damage to the flight controller.")]),t._v(" "),a("ol",[a("li",[t._v("POWER input (5.5V Over)")]),t._v(" "),a("li",[t._v("USB input (5.5V Over)")])]),t._v(" "),a("h2",{attrs:{id:"building-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),a("p",[t._v("To build PX4 for this target:")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("make thepeach_k1_default\n")])])]),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to buy")]),t._v(" "),a("p",[t._v("Order from "),a("a",{attrs:{href:"http://thepeach.shop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ThePeach"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports},938:function(t,e,r){t.exports=r.p+"assets/img/main.be07bed7.png"},939:function(t,e,r){t.exports=r.p+"assets/img/pinmap_top.320bc5bc.png"},940:function(t,e,r){t.exports=r.p+"assets/img/pinmap_bottom.de9c2a03.png"}}]);