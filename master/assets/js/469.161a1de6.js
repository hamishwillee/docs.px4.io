(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{2401:function(t,e,r){"use strict";r.r(e);var _=r(19),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"hex-proficnc-here2-rtk-gps"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hex-proficnc-here2-rtk-gps"}},[t._v("#")]),t._v(" HEX/ProfiCNC Here2 RTK GPS")]),t._v(" "),_("p",[t._v("The "),_("a",{attrs:{href:"http://www.proficnc.com/all-products/152-gps-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here2 RTK GPS receiver"),_("OutboundLink")],1),t._v(" is a new "),_("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS module")]),t._v(" from HEX that provides highly reliable navigation. Using RTK, PX4 can get its position with centimetre-level accuracy, which is much more accurate than can be provided by a normal GPS.")],1),t._v(" "),_("p",[t._v("Main features include:")]),t._v(" "),_("ul",[_("li",[t._v("Concurrent reception of upto 3 GNSS (GPS, Galileo, GLOSNASS, BeiDou)")]),t._v(" "),_("li",[t._v("Industry Leading -167 dBm navigation sensitivity")]),t._v(" "),_("li",[t._v("Security and integrity protection")]),t._v(" "),_("li",[t._v("Supports all satellite augmentation systems")]),t._v(" "),_("li",[t._v("Advanced jamming and spoofing detection")])]),t._v(" "),_("p",[_("img",{attrs:{src:r(409),alt:""}})]),t._v(" "),_("h2",{attrs:{id:"purchase"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[t._v("#")]),t._v(" Purchase")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.proficnc.com/all-products/152-gps-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProfiCNC"),_("OutboundLink")],1),t._v(" (Australia)")]),t._v(" "),_("li",[_("a",{attrs:{href:"http://www.proficnc.com/stores",target:"_blank",rel:"noopener noreferrer"}},[t._v("Other resellers"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"configuration"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),_("p",[t._v("RTK setup and use on PX4 via "),_("em",[t._v("QGroundControl")]),t._v(" is largely plug and play (see "),_("RouterLink",{attrs:{to:"/ko/advanced_features/rtk-gps.html"}},[t._v("RTK GPS")]),t._v(" for more information).")],1),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" If the GPS is "),_("em",[t._v("not detected")]),t._v(" then "),_("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/here-2/updating-here-2-firmware",target:"_blank",rel:"noopener noreferrer"}},[t._v("update the Here2 firmware"),_("OutboundLink")],1),t._v(".")])]),t._v(" "),_("h2",{attrs:{id:"wiring-and-connections"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#wiring-and-connections"}},[t._v("#")]),t._v(" Wiring and Connections")]),t._v(" "),_("p",[t._v("The Here2 GPS comes with an 8 pin connector that can be inserted directly into the "),_("a",{attrs:{href:"http://www.hex.aero/wp-content/uploads/2016/07/DRS_Pixhawk-2-17th-march-2016.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 2"),_("OutboundLink")],1),t._v(" GPS UART port.")]),t._v(" "),_("p",[t._v("The Pixhawk 3 Pro and Pixracer have a 6 pin GPS port connector. For these controllers you can modify the GPS cable (as shown below) to remove pin 6 and 7.")]),t._v(" "),_("img",{attrs:{src:r(410),width:"500px"}}),t._v(" "),_("p",[t._v("Pin 6 and 7 are for the safety button - these can be attached as well if needed.")]),t._v(" "),_("h3",{attrs:{id:"pinout"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pinout"}},[t._v("#")]),t._v(" Pinout")]),t._v(" "),_("p",[t._v("The Here2 GPS pinout is provided below. This can be used to help modify the connector for other autopilot boards.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("pin")]),t._v(" "),_("th",[t._v("Here2 GPS")]),t._v(" "),_("th",[t._v("pin")]),t._v(" "),_("th",[t._v("Pixhawk 3 Pro GPS")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("VCC_5V")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("VCC")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("GPS_RX")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("GPS_TX")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("GPS_TX")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("GPS_RX")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("SCL")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("SCL")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("SDA")]),t._v(" "),_("td",[t._v("5")]),t._v(" "),_("td",[t._v("SDA")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("BUTTON")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("7")]),t._v(" "),_("td",[t._v("BUTTON_LED")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("GND")]),t._v(" "),_("td",[t._v("6")]),t._v(" "),_("td",[t._v("GND")])])])]),t._v(" "),_("h2",{attrs:{id:"specification"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Processor:")]),t._v(" STM32F302")]),t._v(" "),_("li",[_("strong",[t._v("Sensor")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Compass, Gyro, Accelerometer:")]),t._v(" ICM20948")]),t._v(" "),_("li",[_("strong",[t._v("Barometer:")]),t._v(" MS5611")])])]),t._v(" "),_("li",[_("strong",[t._v("Receiver Type:")]),t._v(" 72-channel ublox M8N engine, GPS/QZSS L2 C/A, GLONASS L10F, BeiDou B11, Galileo E1B/C, SBAS L1 C/A: WAAS, EGNOS, MSAS, GAGAN")]),t._v(" "),_("li",[_("strong",[t._v("Navigation Update Rate:")]),t._v(" Max: 10 Hz")]),t._v(" "),_("li",[_("strong",[t._v("Positionaing Accuracy:")]),t._v(" 3D Fix")]),t._v(" "),_("li",[_("strong",[t._v("Time to first fix:")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Cold start:")]),t._v(" 26s")]),t._v(" "),_("li",[_("strong",[t._v("Aided start:")]),t._v(" 2s")]),t._v(" "),_("li",[_("strong",[t._v("Reacquisition:")]),t._v(" 1s")])])]),t._v(" "),_("li",[_("strong",[t._v("Sensitivity:")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Tracking & Navigation:")]),t._v(" -167 dBm")]),t._v(" "),_("li",[_("strong",[t._v("Hot start:")]),t._v(" -148 dBm")]),t._v(" "),_("li",[_("strong",[t._v("Cold start:")]),t._v(" -157 dBm")])])]),t._v(" "),_("li",[_("strong",[t._v("Assisted GNSS")]),t._v(" "),_("ul",[_("li",[t._v("AssistNow GNSS Online")]),t._v(" "),_("li",[t._v("AssistNow GNSS Offline (up to 35 days)")]),t._v(" "),_("li",[t._v("AssistNow Autonomous (up to 6 days)")]),t._v(" "),_("li",[t._v("OMA SUPL& 3GPP compliant")])])]),t._v(" "),_("li",[_("strong",[t._v("Oscillator:")]),t._v(" TCXO (NEO-8MN/Q)")]),t._v(" "),_("li",[_("strong",[t._v("RTC crystal:")]),t._v(" Build in")]),t._v(" "),_("li",[_("strong",[t._v("ROM:")]),t._v(" Flash (NEO-8MN)")]),t._v(" "),_("li",[_("strong",[t._v("Available Antennas:")]),t._v(" Active Antenna & Passive Antenna")]),t._v(" "),_("li",[_("strong",[t._v("Signal Integrity:")]),t._v(" Signature feature with SHA 256")]),t._v(" "),_("li",[_("strong",[t._v("Protocols & Interfaces:")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("UART/I2C/CAN:")]),t._v(" JST_GH Main interface, Switch internally.")]),t._v(" "),_("li",[_("strong",[t._v("STM32 Main Programming Interface:")]),t._v(" JST_SUR")])])])])])}),[],!1,null,null,null);e.default=v.exports},409:function(t,e,r){t.exports=r.p+"assets/img/here2_gps_module.18ad654b.jpg"},410:function(t,e,r){t.exports=r.p+"assets/img/rtk_here_plug_gps_to_6pin_connector.784ad65a.jpg"}}]);