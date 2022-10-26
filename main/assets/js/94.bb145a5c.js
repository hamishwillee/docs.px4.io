(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1655:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"cable-wiring-basics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cable-wiring-basics"}},[t._v("#")]),t._v(" Cable Wiring Basics")]),t._v(" "),r("p",[t._v("Cables are a common source of "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Electromagnetic_interference",target:"_blank",rel:"noopener noreferrer"}},[t._v("electromagnetic interference (EMI)"),r("OutboundLink")],1),t._v(', which can cause problems including flyways, "toilet bowling" and generally poor flight.\nThese problems can be avoided by using appropriate cabling in the UAV.')]),t._v(" "),r("p",[t._v("The following basic concepts should be kept in mind when designing drone cabling:")]),t._v(" "),r("ul",[r("li",[t._v("High-Power and signal cables should be separated as much as is practical")]),t._v(" "),r("li",[t._v("Cable lengths should be the minimum needed to enable easy handling of wired components.\nThe wire tension should be adequate to survive possible airframe deformations even in a crash landing\n(wires must not be the first thing to break).")]),t._v(" "),r("li",[t._v("Cable loops to reduce excess length should be avoided - use shorter lengths!")]),t._v(" "),r("li",[t._v("For digital signals you can decrease the baudrate to reduce radiated energy and increase the robustness of data transfer.\nThis means that you may be able to use longer cables when high data rates are not needed.")])]),t._v(" "),r("h2",{attrs:{id:"signal-wiring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#signal-wiring"}},[t._v("#")]),t._v(" Signal wiring")]),t._v(" "),r("p",[t._v("Signalling protocols have different characteristics, and therefore the cables used in each case require slightly different specifications.")]),t._v(" "),r("p",[t._v("This topic provides specific guidance of cabling for different signalling protocols, along with the "),r("a",{attrs:{href:"#cable-colour-coding"}},[t._v("colour coding")]),t._v(" used by a number different drone hardware vendors.")]),t._v(" "),r("h3",{attrs:{id:"i2c-cables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#i2c-cables"}},[t._v("#")]),t._v(" I²C cables")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/I%C2%B2C",target:"_blank",rel:"noopener noreferrer"}},[t._v("I2C bus"),r("OutboundLink")],1),t._v(" is widely used for connecting sensors.\nCable colors from several vendors are specified in following table.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Pixhawk Colors")]),t._v(" "),r("th",[t._v("ThunderFly colors")]),t._v(" "),r("th",[t._v("CUAV colors (I2C/CAN)")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("SCL")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")])]),t._v(" "),r("tr",[r("td",[t._v("SDA")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(337),alt:"green"}}),t._v(" Green")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")])])])]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode standard"),r("OutboundLink")],1),t._v(" assumes a 1.5k ohm pull-up resistor on SDA and SCL signals in autopilot.")]),t._v(" "),r("h4",{attrs:{id:"cable-twisting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cable-twisting"}},[t._v("#")]),t._v(" Cable twisting")]),t._v(" "),r("p",[t._v("I2C bus signal cross-talk and electromagnetic compatibility can be greatly improved by proper twisting of the cable wires.\n"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Twisted_pair",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twisted pairs"),r("OutboundLink")],1),t._v(" is especially important for sensor wiring.")]),t._v(" "),r("ul",[r("li",[t._v("10 turns for each pair SCL/+5V and SDA/GND per 30cm cable length.\n"),r("img",{attrs:{src:a(356),alt:"I²C JST-GH cable"}})]),t._v(" "),r("li",[t._v("4 turns of both pairs together per 30cm cable length.\n"),r("img",{attrs:{src:a(543),alt:"I²C JST-GH connector detail"}})])]),t._v(" "),r("p",[t._v("When using appropriate twisted pair cables, the I²C bus is generally suitable for submeter-scale airframes.\nFor larger aircraft the use of CAN or other differential signaling based interface is generally more reliable.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("This turns/cable-length recommendation has been successfully used with I2C sensors including the "),r("RouterLink",{attrs:{to:"/en/sensor/airspeed_tfslot.html"}},[t._v("ThunderFly TFSLOT airspeed sensor")]),t._v(" and "),r("RouterLink",{attrs:{to:"/en/sensor/thunderfly_tachometer.html"}},[t._v("TFRPM01 Revolution Counter")]),t._v(".")],1)]),t._v(" "),r("h4",{attrs:{id:"pull-up-resistors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-up-resistors"}},[t._v("#")]),t._v(" Pull-up resistors")]),t._v(" "),r("p",[t._v("Pull-up resistors are required for all ends of an I2C bus.\nThis acts both as "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Electrical_termination",target:"_blank",rel:"noopener noreferrer"}},[t._v("signal termination"),r("OutboundLink")],1),t._v(" and as bus idle signal generator.")]),t._v(" "),r("p",[t._v("An oscilloscope measurement is sometimes required to check correct value of pull-up resistors.\nThe signals on the I2C bus should have clear sharp rectangle-like edges and amplitude of few volts.\nIn case the signal has a low amplitude, the value of pull-up resistors is too low and should be decreased.\nIn the case of rounded signals, the value of pull-up resistors is too high.")]),t._v(" "),r("h3",{attrs:{id:"uavcan-cables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-cables"}},[t._v("#")]),t._v(" UAVCAN cables")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Pixhawk")]),t._v(" "),r("th",[t._v("ThunderFly")]),t._v(" "),r("th",[t._v("Zubax")]),t._v(" "),r("th",[t._v("CUAV (I2C/CAN)")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("CAN_H")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")])]),t._v(" "),r("tr",[r("td",[t._v("CAN_L")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")])])])]),t._v(" "),r("h4",{attrs:{id:"cable-twisting-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cable-twisting-2"}},[t._v("#")]),t._v(" Cable twisting")]),t._v(" "),r("p",[t._v("CAN cables should also be twisted, for exactly the same reason as I2C cables.\nFor CAN the recommended twisting is:")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("10 turns for each pair GND/+5V and CAN_L/CAN_H per 30cm cable length.\n"),r("img",{attrs:{src:a(544),alt:"CAN JST-GH cable"}})])]),t._v(" "),r("li",[r("p",[t._v("4 turns of both pairs together per 30cm cable length.")])])]),t._v(" "),r("h3",{attrs:{id:"spi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spi"}},[t._v("#")]),t._v(" SPI")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Serial_Peripheral_Interface",target:"_blank",rel:"noopener noreferrer"}},[t._v("SPI"),r("OutboundLink")],1),t._v(" is synchronous serial communication interface used for connecting faster sensors and devices.\nThis protocol is commonly use is for connecting "),r("RouterLink",{attrs:{to:"/en/sensor/optical_flow.html"}},[t._v("optical flow")]),t._v(" sensors or special telemetry modems.")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Pixhawk Color")]),t._v(" "),r("th",[t._v("ThunderFly color")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("SCK")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")])]),t._v(" "),r("tr",[r("td",[t._v("MISO")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(338),alt:"blue"}}),t._v(" Blue")])]),t._v(" "),r("tr",[r("td",[t._v("MOSI")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(337),alt:"green"}}),t._v(" Green")])]),t._v(" "),r("tr",[r("td",[t._v("CS!")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")])]),t._v(" "),r("tr",[r("td",[t._v("CS2")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(338),alt:"blue"}}),t._v(" Blue")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")])])])]),t._v(" "),r("h3",{attrs:{id:"uart"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uart"}},[t._v("#")]),t._v(" UART")]),t._v(" "),r("p",[t._v("UART is used to connect peripherals to the autopilot.\nBy default, UART does not support networking and therefore it directly connects two devices together.\nIt is often used to connect an autopilot and a "),r("RouterLink",{attrs:{to:"/en/telemetry/"}},[t._v("radio modem")]),t._v(".")],1),t._v(" "),r("p",[t._v("CTS and RTS are signals that are used to indicate that data is being transmitted on TX/RX pins.\nThis hand-shake mechanism increases reliability of data transfer.\nCTS and RTS may remain loose when it is not used by the device.")]),t._v(" "),r("p",[t._v("The connecting cable is not crossed.\nTherefore, it is necessary to connect only the autopilot and peripherals with this straight cable.\nThe device must cross the wiring internally by swapping RX/TX and RTS/CTS pins.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Pixhawk Color")]),t._v(" "),r("th",[t._v("ThunderFly color")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("TX")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")])]),t._v(" "),r("tr",[r("td",[t._v("RX")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(337),alt:"green"}}),t._v(" Green")])]),t._v(" "),r("tr",[r("td",[t._v("CTS")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(338),alt:"blue"}}),t._v(" Blue")])]),t._v(" "),r("tr",[r("td",[t._v("RTS")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")])])])]),t._v(" "),r("p",[t._v("UART signals are common sources of low frequency EMI, therefore the length of the cable should be minimized as much as possible. Cable twisting is not needed for UART cables.")]),t._v(" "),r("h3",{attrs:{id:"gps-uart-safety"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-uart-safety"}},[t._v("#")]),t._v(" GPS(UART) & SAFETY")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/gps_compass/"}},[t._v("GPS receivers and magnetometers")]),t._v(" are generally very sensitive to EMI.\nTherefore thse should be mounted far away from RF sources (high-power cabling, ESCs, radio modems and its antenna).\nThis may be insufficient if the cabling is badly designed.")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Pixhawk Color")]),t._v(" "),r("th",[t._v("ThunderFly color")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("TX")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")])]),t._v(" "),r("tr",[r("td",[t._v("RX")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(337),alt:"green"}}),t._v(" Green")])]),t._v(" "),r("tr",[r("td",[t._v("SCL")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")])]),t._v(" "),r("tr",[r("td",[t._v("SDA")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(337),alt:"green"}}),t._v(" Green")])]),t._v(" "),r("tr",[r("td",[t._v("SAFETY_SW")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")])]),t._v(" "),r("tr",[r("td",[t._v("SAFETY_SW_LED")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(338),alt:"blue"}}),t._v(" Blue")])]),t._v(" "),r("tr",[r("td",[t._v("+3v3")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("BUZZER")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(338),alt:"blue"}}),t._v(" Blue")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")])])])]),t._v(" "),r("h3",{attrs:{id:"gps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps"}},[t._v("#")]),t._v(" GPS")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Pixhawk Color")]),t._v(" "),r("th",[t._v("ThunderFly color")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("TX")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")])]),t._v(" "),r("tr",[r("td",[t._v("RX")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(337),alt:"green"}}),t._v(" Green")])]),t._v(" "),r("tr",[r("td",[t._v("SCL")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")])]),t._v(" "),r("tr",[r("td",[t._v("SDA")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(337),alt:"green"}}),t._v(" Green")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")])])])]),t._v(" "),r("p",[t._v("The GPS cable connects to both the UART and I2C bus.\nAs twisting of UART is not applicable the length of the cable should be minimized as much as possible.")]),t._v(" "),r("h3",{attrs:{id:"analog-signal-power-module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#analog-signal-power-module"}},[t._v("#")]),t._v(" Analog signal (power module)")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Pixhawk Color")]),t._v(" "),r("th",[t._v("ThunderFly color")]),t._v(" "),r("th",[t._v("CUAV color")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("VCC")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("VCC")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("CURRENT")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")])]),t._v(" "),r("tr",[r("td",[t._v("VOLTAGE")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")]),t._v(" "),r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}}),t._v(" Yellow")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")])])])]),t._v(" "),r("p",[t._v("This connector is example of mix of relatively high-power and low voltage signaling.\nUnfortunately, twisting is applicable for high-power GND and VCC wires only.\nThat does not help much for noisy reading of analog signals by autopilot.")]),t._v(" "),r("h3",{attrs:{id:"safety"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#safety"}},[t._v("#")]),t._v(" SAFETY")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Pixhawk Color")]),t._v(" "),r("th",[t._v("ThunderFly color")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("SAFE_VCC")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("SAFETY_SW_LED")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(338),alt:"blue"}}),t._v(" Blue")])]),t._v(" "),r("tr",[r("td",[t._v("SAFETY_SW")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(333),alt:"white"}}),t._v(" White")])]),t._v(" "),r("tr",[r("td",[t._v("BUZZER")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(338),alt:"blue"}}),t._v(" Blue")])]),t._v(" "),r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(329),alt:"red"}}),t._v(" Red")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")]),t._v(" "),r("td",[r("img",{attrs:{src:a(326),alt:"black"}}),t._v(" Black")])])])]),t._v(" "),r("h2",{attrs:{id:"high-power-wiring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#high-power-wiring"}},[t._v("#")]),t._v(" High-power wiring")]),t._v(" "),r("p",[t._v("For high power wiring the most important design criteria is having an appropriate wire thickness, in order to allow sufficient current to flow.\nThe general cross section requirement is area of 1 mm² per 8A of wire current.")]),t._v(" "),r("p",[t._v("While rarely practical, it is beneficial to have positive and negative wires twisted together.")]),t._v(" "),r("p",[t._v("EMI from high power cabling has a significant effect on magnetometers.\nFor this reason a large seapration between high-power cables and navigation magnetometers is always required.")]),t._v(" "),r("h3",{attrs:{id:"cable-colour-coding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cable-colour-coding"}},[t._v("#")]),t._v(" Cable colour coding")]),t._v(" "),r("p",[t._v("Most manufacturers use red for the high voltage line and black for ground.\nOther colouring is at the manufacturer discretion.\nThe "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk connector standard"),r("OutboundLink")],1),t._v(" requires only that the Voltage Common Collector (VCC) pin/cable be red.")]),t._v(" "),r("p",[t._v("Color coding signal wires can help identify particular cables, making it easier to assemble your drone.")]),t._v(" "),r("p",[t._v("A colour coding scheme designed for easy cable identification might follow the following rules:")]),t._v(" "),r("ul",[r("li",[t._v("The red and black colors are reserved for power.")]),t._v(" "),r("li",[t._v("The same signal type should have the same colour.")]),t._v(" "),r("li",[t._v("Color of the signal does not repeat in the connector for wires adjacent to each other.")]),t._v(" "),r("li",[t._v("Wiring harnesses of the same pin count have to have a unique color sequence.\nThis determines the cable type.\n(This is especially useful on photographs used in a manual).")])]),t._v(" "),r("p",[t._v("An example of a cable colouring designed to these rules is:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Color")]),t._v(" "),r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Preferred usage")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("img",{attrs:{src:a(329),alt:"red"}})]),t._v(" "),r("td",[t._v("Red")]),t._v(" "),r("td",[t._v("Power voltage")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:a(337),alt:"green"}})]),t._v(" "),r("td",[t._v("Green")]),t._v(" "),r("td",[t._v("General purpose signal")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:a(333),alt:"white"}})]),t._v(" "),r("td",[t._v("White")]),t._v(" "),r("td",[t._v("General purpose signal")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:a(334),alt:"yellow"}})]),t._v(" "),r("td",[t._v("Yellow")]),t._v(" "),r("td",[t._v("General purpose signal")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:a(338),alt:"blue"}})]),t._v(" "),r("td",[t._v("Blue")]),t._v(" "),r("td",[t._v("Power return, Open-collector control signal")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:a(326),alt:"black"}})]),t._v(" "),r("td",[t._v("Black")]),t._v(" "),r("td",[t._v("GND, Power return ground")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The above rules were provided by Thunderfly and are used in their cable design.")]),t._v(" "),r("p",[t._v("The cable colour-coding for Thunderfly and some other vendors are given in the sections below.\nThe pin labels correspond to the pinout on the autopilot side.\nAll cables are straight (1:1).\nIf they require crossover (e.g. UART), this should be solved by internal connection of the devices.")])])])}),[],!1,null,null,null);e.default=s.exports},326:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAKdJREFUKJGl00sKAjEQBNBHFnoN9VQ6p/VzAHHl7woKOhs/ILowEZWJOmNB0RBSHaq6wysCCoyxxzHWcTwPMuhhjRLXCpZYolsl3OKSESZe4r1Hg4DVD8LnBotkoYi+fhEm7jGASU1h4kiDVxN3Aa1c/F/QDjg3FJ8CZg3FU+6p5RbjU9p9/pwz9TZsg867h6777uZGV2JeJUwIMYMRdjjEOoweX37VDTuEhzlr8+oxAAAAAElFTkSuQmCC"},329:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAQFJREFUKJGV001OAmEQhOEnM0RFR2Y1e+Uoip5BOKB/B5C4E3RvXCl6BUkYhPhLPhcMCahEppJavp1UVzeLimJaGd2EfIO3hDyjG9NCZInqKU+HDC8JY0IgjAhtQoNhSg+7v8Aa/XMmoYD+8hmTGv35AVHK43/gzKdMUh4QiWkdkK8CzrxPHtOUcX1ZAgyEC0JGR0I+LgmPCNsMoi/WNpftf4m28Ml6VOFjXBIeocJ7VOXupiTcRZVbMc0GwzKZ96bbPqLo+XTFno/ney5Ur9E/+WfAyfTCnrHzM8puSm+fvE14KYCXote96W3f/wXOFMU0MzoJgw1eEwYZV0XGha/6Bp/07YEvuv60AAAAAElFTkSuQmCC"},333:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAUJJREFUKJGVk8FOwlAQRcdOF+8ljzer2Yuf0ha+QfhAWviANt1JZW9cKfoLktD2NUWTZtzQKCoIZ39ucudmAA7xEHHKzIUxplRK7YwxJTMXiDgFAA+OcENEr+PxuMrzXJqmERER55xkWSZRFFVEtAaA4S/RWrtZLBadnGA+n3fW2s33AI+IXv4Te5Ik6YjoGQA8QMTpaDQqzxF7wjAsEXECzHyf5/klrqRpKsy8BGNM2R/nXJxzMhgMtldKqbZtW3VsgmNorXee7/sfTdNcJDrnwPf9d09r/bharS6Si6IArfUDIOIkiqLqks5BEJSIeAuw3zlJkrN2ns1mXzvvubHWbuI4PhkQx3FnrX0DgOufVYZEtA7DsMyyTOq6FhGRuq4lTVMJgqAioqe/xB4PESfMvDTGbJVSrTFmy8x3+44HX/UJbya4/Sj1PIMAAAAASUVORK5CYII="},334:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAATNJREFUKJGVk81OwkAYRU86jRaYdlazF94EWn0G4fUEQbcSCDsBXRtXir6ChLaU+ANkXEATUNByk7s8X3LnZGA7lhDUtGYgJZHj8CElkdYMhKAGWOxJSSlezwLiXgczizBmjklCTLeNCXxipRgBxV+g5zK+brI08xW0q1eXLD2X8eYBSyle/gPTthosleIZsBCC2mlAlAVM6/tEQlBFa4a9TnbQzDGdG4zW9JGSKH2crE1CjCsJrcWCo3x+n4DdKRRgvuDYsm2+ZrPD4CQB2+bTyuV4vLs/DB4MIefwgBBUA5/4kM2VMpEQnMPac6uRzfPlxYbndUqey7hZ//tAs87S83gDTn5OKSrFyPeJum3MdLICppOV10qZWCmedoFpLCGoak1fSkLH4V1KQq25XW/c+lXfwTxSVbVoOAQAAAAASUVORK5CYII="},337:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAWRJREFUKJGV0z1LI1EUxvH/PZfcSdCJsiLRThN8wUKbZfEjKH4A3+p8JUXQ3Xq3N2i3a2PEQuwMi8QtFrcJmzGMmRnIiYUKExGTPNUtzu8pDudCbwTLDr49wzMBGRPhmQDfnmHZASQ9bFLvIjk5peQKbIz5LGTBGYi7UIugErS4Te5p6xpQT+MiObmkPDHOl5Ge9p5chMpho0lbPwN1Awg5uaE8UfoQvqYaKt8avwl1SbBsUXKFgSDA6ogw46axbFpG7R67n+YoZAayAOStx3U0KSS6zEJ2cAiwmIVEVwTF4Ux/kI5nQPEEISHuDocjBSEWnFxTi4bDNzE4uRIeO/tUgtZQuBI88Ng5EDp85zb5RzXUgeB5qNSTezr8EEBp6xpHjWbfgmqofG38fzlRTa95lpycUHRTbIzlmfcgK8/LqcVwHLT4k/wl1HXg7r1uwbKNb3/hmSYZ08YzTXz7E8sWb37VE0lteh9XrLjgAAAAAElFTkSuQmCC"},338:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAP9JREFUKJGVk0luAjEQRZ/cKAwheOU95ChAcgbggAw5ACi70MkesSLDFRIJN93KRMtZVDcJES3wl0olWX6Wfv0y7EtBMAATQt1C5UO6CeUcRYEuQb/AdQS3DhIHzkHsYOagG4F+AloHwMYb3KQCFNUklXu/DyjQz8fBvMYp6MfMQjCAK3samFfHQtAHzL149IGnDswcmWbiCccOLtYKtmdQK0qgQOfAd1lB6QsSTzgGSp8Kqkt48IRDoLpAptaN/Dy3LQQ92OU8PjHn4d+cgd2GjY48MEqh8Qo0/xtpye52rOzyJgM2Wa7tCPTqEJhLyQzMHOprqLxLN3eZx71f9QPTVe2BIfIcIAAAAABJRU5ErkJggg=="},356:function(t,e,a){t.exports=a.p+"assets/img/i2c_jst-gh_cable.24f25e77.jpg"},543:function(t,e,a){t.exports=a.p+"assets/img/i2c_jst-gh_connector.d1d4e5d7.jpg"},544:function(t,e,a){t.exports=a.p+"assets/img/can_jst-gh_cable.21d7e217.jpg"}}]);