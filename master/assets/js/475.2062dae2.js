(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{2592:function(t,e,_){"use strict";_.r(e);var r=_(18),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"hex-proficnc-here2-gps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hex-proficnc-here2-gps"}},[t._v("#")]),t._v(" HEX/ProfiCNC Here2 GPS")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"http://www.proficnc.com/all-products/152-gps-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here2 GPS receiver"),r("OutboundLink")],1),t._v(" is an update to the Here GPS module from HEX.")]),t._v(" "),r("p",[t._v("Main features include:")]),t._v(" "),r("ul",[r("li",[t._v("Concurrent reception of upto 3 GNSS (GPS, Galileo, GLOSNASS, BeiDou)")]),t._v(" "),r("li",[t._v("Industry Leading -167 dBm navigation sensitivity")]),t._v(" "),r("li",[t._v("Security and integrity protection")]),t._v(" "),r("li",[t._v("Supports all satellite augmentation systems")]),t._v(" "),r("li",[t._v("Advanced jamming and spoofing detection")])]),t._v(" "),r("p",[r("img",{attrs:{src:_(399),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"购买"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#购买"}},[t._v("#")]),t._v(" 购买")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.proficnc.com/all-products/152-gps-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProfiCNC"),r("OutboundLink")],1),t._v(" (Australia)")]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.proficnc.com/stores",target:"_blank",rel:"noopener noreferrer"}},[t._v("Other resellers"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),r("p",[t._v("Setup and use on PX4 is largely plug and play.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("If the GPS is "),r("em",[t._v("not detected")]),t._v(" then "),r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/here-2/updating-here-2-firmware",target:"_blank",rel:"noopener noreferrer"}},[t._v("update the Here2 firmware"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"接线和连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接线和连接"}},[t._v("#")]),t._v(" 接线和连接")]),t._v(" "),r("p",[t._v("The Here2 GPS comes with an 8 pin connector that can be inserted directly into the "),r("a",{attrs:{href:"http://www.hex.aero/wp-content/uploads/2016/07/DRS_Pixhawk-2-17th-march-2016.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 2"),r("OutboundLink")],1),t._v(" GPS UART port.")]),t._v(" "),r("p",[t._v("The Pixhawk 3 Pro and Pixracer have a 6 pin GPS port connector. For these controllers you can modify the GPS cable (as shown below) to remove pin 6 and 7.")]),t._v(" "),r("img",{attrs:{src:_(337),width:"500px"}}),t._v(" "),r("p",[t._v("Pin 6 and 7 are for the safety button - these can be attached as well if needed.")]),t._v(" "),r("h3",{attrs:{id:"针脚定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),r("p",[t._v("The Here2 GPS pinout is provided below. This can be used to help modify the connector for other autopilot boards.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("引脚")]),t._v(" "),r("th",[t._v("Here2 GPS")]),t._v(" "),r("th",[t._v("引脚")]),t._v(" "),r("th",[t._v("Pixhawk 3 Pro GPS")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("VCC_5V")]),t._v(" "),r("td",[t._v("1")]),t._v(" "),r("td",[t._v("VCC")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("GPS_RX")]),t._v(" "),r("td",[t._v("2")]),t._v(" "),r("td",[t._v("GPS_TX")])]),t._v(" "),r("tr",[r("td",[t._v("0")]),t._v(" "),r("td",[t._v("GPS_TX")]),t._v(" "),r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GPS_RX")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("SCL")]),t._v(" "),r("td",[t._v("4")]),t._v(" "),r("td",[t._v("SCL")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("SDA")]),t._v(" "),r("td",[t._v("5")]),t._v(" "),r("td",[t._v("SDA")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("BUTTON")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("7")]),t._v(" "),r("td",[t._v("BUTTON_LED")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("8")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("h2",{attrs:{id:"技术规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技术规范"}},[t._v("#")]),t._v(" 技术规范")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Processor:")]),t._v(" STM32F302")]),t._v(" "),r("li",[r("strong",[t._v("Sensor")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Compass, Gyro, Accelerometer:")]),t._v(" ICM20948")]),t._v(" "),r("li",[r("strong",[t._v("Barometer:")]),t._v(" MS5611")])])]),t._v(" "),r("li",[r("strong",[t._v("Receiver Type:")]),t._v(" 72-channel u-blox M8N engine, GPS/QZSS L2 C/A, GLONASS L10F, BeiDou B11, Galileo E1B/C, SBAS L1 C/A: WAAS, EGNOS, MSAS, GAGAN")]),t._v(" "),r("li",[r("strong",[t._v("Navigation Update Rate:")]),t._v(" Max: 10 Hz")]),t._v(" "),r("li",[r("strong",[t._v("Positionaing Accuracy:")]),t._v(" 3D Fix")]),t._v(" "),r("li",[r("strong",[t._v("Time to first fix:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Cold start:")]),t._v(" 26s")]),t._v(" "),r("li",[r("strong",[t._v("Aided start:")]),t._v(" 2s")]),t._v(" "),r("li",[r("strong",[t._v("Reacquisition:")]),t._v(" 1s")])])]),t._v(" "),r("li",[r("strong",[t._v("Sensitivity:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Tracking & Navigation:")]),t._v(" -167 dBm")]),t._v(" "),r("li",[r("strong",[t._v("Hot start:")]),t._v(" -148 dBm")]),t._v(" "),r("li",[r("strong",[t._v("Cold start:")]),t._v(" -157 dBm")])])]),t._v(" "),r("li",[r("strong",[t._v("Assisted GNSS")]),t._v(" "),r("ul",[r("li",[t._v("AssistNow GNSS Online")]),t._v(" "),r("li",[t._v("AssistNow GNSS Offline (up to 35 days)")]),t._v(" "),r("li",[t._v("AssistNow Autonomous (up to 6 days)")]),t._v(" "),r("li",[t._v("OMA SUPL& 3GPP compliant")])])]),t._v(" "),r("li",[r("strong",[t._v("Oscillator:")]),t._v(" TCXO (NEO-8MN/Q)")]),t._v(" "),r("li",[r("strong",[t._v("RTC crystal:")]),t._v(" Build in")]),t._v(" "),r("li",[r("strong",[t._v("ROM:")]),t._v(" Flash (NEO-8MN)")]),t._v(" "),r("li",[r("strong",[t._v("Available Antennas:")]),t._v(" Active Antenna & Passive Antenna")]),t._v(" "),r("li",[r("strong",[t._v("Signal Integrity:")]),t._v(" Signature feature with SHA 256")]),t._v(" "),r("li",[r("strong",[t._v("Protocols & Interfaces:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("UART/I2C/CAN:")]),t._v(" JST_GH Main interface, Switch internally.")]),t._v(" "),r("li",[r("strong",[t._v("STM32 Main Programming Interface:")]),t._v(" JST_SUR")])])])])])}),[],!1,null,null,null);e.default=v.exports},337:function(t,e,_){t.exports=_.p+"assets/img/rtk_here_plug_gps_to_6pin_connector.784ad65a.jpg"},399:function(t,e,_){t.exports=_.p+"assets/img/here2_gps_module.18ad654b.jpg"}}]);