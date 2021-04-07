(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{1169:function(t,_,v){t.exports=v.p+"assets/img/rtk_here_plus.d765642d.jpg"},1170:function(t,_,v){t.exports=v.p+"assets/img/rtk_here_plus_connectors.970a84e5.jpg"},2604:function(t,_,v){"use strict";v.r(_);var e=v(18),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hex-proficnc-here-rtk-gps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hex-proficnc-here-rtk-gps"}},[t._v("#")]),t._v(" HEX/ProfiCNC Here+ RTK GPS")]),t._v(" "),e("p",[t._v("The "),e("a",{attrs:{href:"http://www.proficnc.com/content/12-here",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here+ RTK GPS receiver"),e("OutboundLink")],1),t._v(" is a small, light and energy efficient "),e("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[t._v("RTK GPS module")]),t._v(", based on the u-blox M8P. 使用RTK，PX4控制器可以获取到它的位置，并且这个位置的精度可以达到厘米级的精度，这比普通GPS提供的位置更加精确。")],1),t._v(" "),e("p",[e("img",{attrs:{src:v(1169),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"购买"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#购买"}},[t._v("#")]),t._v(" 购买")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.proficnc.com/gps/77-gps-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProfiCNC"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.hex.aero/shop/all/here-rtk-gnss-set/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hex - China"),e("OutboundLink")],1),t._v(" (China)")]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.proficnc.com/stores",target:"_blank",rel:"noopener noreferrer"}},[t._v("Other resellers"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("RTK setup and use on PX4 via "),e("em",[t._v("QGroundControl")]),t._v(" is largely plug and play (see "),e("RouterLink",{attrs:{to:"/zh/advanced_features/rtk-gps.html"}},[t._v("RTK GPS")]),t._v(" for more information).")],1),t._v(" "),e("h2",{attrs:{id:"针脚定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),e("p",[t._v("The Here+ GPS comes with an 8 pin connector with the following pinout")]),t._v(" "),e("p",[e("img",{attrs:{src:v(1170),alt:"Here+ Pinout (viewed from base)"}})]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("针脚")]),t._v(" "),e("th",[t._v("Here+ GPS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1 (purple)")]),t._v(" "),e("td",[t._v("VCC_5V")])]),t._v(" "),e("tr",[e("td",[t._v("2 (blue)")]),t._v(" "),e("td",[t._v("GPS_RX")])]),t._v(" "),e("tr",[e("td",[t._v("3 (green)")]),t._v(" "),e("td",[t._v("GPS_TX")])]),t._v(" "),e("tr",[e("td",[t._v("4 (yellow)")]),t._v(" "),e("td",[t._v("I2C SCL")])]),t._v(" "),e("tr",[e("td",[t._v("5 (orange)")]),t._v(" "),e("td",[t._v("I2C SDA")])]),t._v(" "),e("tr",[e("td",[t._v("6（红）")]),t._v(" "),e("td",[t._v("SAFETY BUTTON")])]),t._v(" "),e("tr",[e("td",[t._v("7 (brown)")]),t._v(" "),e("td",[t._v("BUTTON_LED")])]),t._v(" "),e("tr",[e("td",[t._v("8 (black)")]),t._v(" "),e("td",[t._v("GND")])])])]),t._v(" "),e("h2",{attrs:{id:"接线和连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接线和连接"}},[t._v("#")]),t._v(" 接线和连接")]),t._v(" "),e("p",[t._v("Connection examples are shown below for a number of boards (these can be used to modify the cable as needed for other boards).")]),t._v(" "),e("h3",{attrs:{id:"hex-cube"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hex-cube"}},[t._v("#")]),t._v(" Hex Cube")]),t._v(" "),e("p",[t._v("The supplied cable can be inserted directly into the "),e("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk-2.html"}},[t._v("Hex Cube (Pixhawk 2)")]),t._v(" GPS UART port.")],1),t._v(" "),e("h4",{attrs:{id:"pixhawk-3-pro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-3-pro"}},[t._v("#")]),t._v(" Pixhawk 3 Pro")]),t._v(" "),e("p",[t._v("The "),e("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")]),t._v(" and "),e("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(" have a 6 pin GPS port connector. For these controllers you can modify the GPS cable (as shown below) to remove pin 6 and 7.")],1),t._v(" "),e("p",[e("img",{attrs:{src:v(337),alt:"rtk_here_plug_gps_to_6pin_connector"}})]),t._v(" "),e("p",[t._v("Pin 6 and 7 are for the safety button - these can be attached as well if needed.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("针脚")]),t._v(" "),e("th",[t._v("Here+ GPS")]),t._v(" "),e("th",[t._v("针脚")]),t._v(" "),e("th",[t._v("Pixhawk 3 Pro GPS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("VCC_5V")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("VCC")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("GPS_RX")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("GPS_TX")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("GPS_TX")]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td",[t._v("GPS_RX")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("I2C SCL")]),t._v(" "),e("td",[t._v("4")]),t._v(" "),e("td",[t._v("SCL")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("I2C SDA")]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("SDA")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("BUTTON")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("BUTTON_LED")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("GND")]),t._v(" "),e("td",[t._v("6")]),t._v(" "),e("td",[t._v("GND")])])])]),t._v(" "),e("h4",{attrs:{id:"pixhawk-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-4"}},[t._v("#")]),t._v(" Pixhawk 4")]),t._v(" "),e("p",[t._v("The Here+ to "),e("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" GPS port pin mapping is 1:1 for pins 1-7 and then connect GND (Here+ pin 8 / Pixhawk pin 10). Pixhawk 4 GPS port pins 8 and 9 can be left disconnected.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("The Pixhawk 4 GPS port has pin 1 on the left hand side.")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("针脚")]),t._v(" "),e("th",[t._v("Here+ GPS")]),t._v(" "),e("th",[t._v("引脚")]),t._v(" "),e("th",[t._v("Pixhawk 4 GPS Port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("VCC_5V")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("VCC (+5V)")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("GPS_RX")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("GPS_TX")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("GPS_TX")]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td",[t._v("GPS_RX")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("I2C SCL")]),t._v(" "),e("td",[t._v("4")]),t._v(" "),e("td",[t._v("SCL1")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("I2C SDA")]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("SDA1")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("BUTTON")]),t._v(" "),e("td",[t._v("6")]),t._v(" "),e("td",[t._v("SAFETY_SWITCH")])]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("BUTTON_LED")]),t._v(" "),e("td",[t._v("7")]),t._v(" "),e("td",[t._v("SAFETY_SWITCH_LED")])]),t._v(" "),e("tr",[e("td",[t._v("/")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("8")]),t._v(" "),e("td",[t._v("VDD_3V3")])]),t._v(" "),e("tr",[e("td",[t._v("/")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("9")]),t._v(" "),e("td",[t._v("BUZZER")])]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("GND")]),t._v(" "),e("td",[t._v("10")]),t._v(" "),e("td",[t._v("GND")])])])])])}),[],!1,null,null,null);_.default=r.exports},337:function(t,_,v){t.exports=v.p+"assets/img/rtk_here_plug_gps_to_6pin_connector.784ad65a.jpg"}}]);