(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{1151:function(t,e,r){t.exports=r.p+"assets/img/rtk_c-rtk.b81e5056.jpg"},1152:function(t,e,r){t.exports=r.p+"assets/img/rtk_cuav_c-rtk_to_6pin_connector.277e2d91.jpg"},2128:function(t,e,r){"use strict";r.r(e);var o=r(18),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"cuav-c-rtk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cuav-c-rtk"}},[t._v("#")]),t._v(" CUAV C-RTK")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"http://doc.cuav.net/gps/c-rtk/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV C-RTK GPS receiver"),o("OutboundLink")],1),t._v(" is an "),o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS module")]),t._v(" for the mass market. A complete RTK system consists of at least two C-RTK modules (one for the base station and the others for the aircraft). Using RTK, PX4 can get its position with centimetre-level accuracy, which is much more accurate than can be provided by a normal GPS.")],1),t._v(" "),o("img",{attrs:{src:r(1151),width:"500px",title:"C-RTK"}}),t._v(" "),o("h2",{attrs:{id:"purchase"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[t._v("#")]),t._v(" Purchase")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://item.taobao.com/item.htm?id=565380634341&spm=2014.21600712.0.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("cuav taobao"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://www.aliexpress.com/store/product/CUAV-NEW-Flight-Controller-GPS-C-RTK-differential-positioning-navigation-module-GPS-for-PIX4-Pixhawk-pixhack/3257035_32853894248.html?spm=2114.12010608.0.0.75592fadQKPPEn",target:"_blank",rel:"noopener noreferrer"}},[t._v("cuav aliexpress"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),o("p",[t._v("RTK setup and use on PX4 via "),o("em",[t._v("QGroundControl")]),t._v(" is largely plug and play (see "),o("RouterLink",{attrs:{to:"/ko/advanced_features/rtk-gps.html"}},[t._v("RTK GPS")]),t._v(" for more information).")],1),t._v(" "),o("h2",{attrs:{id:"wiring-and-connections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-and-connections"}},[t._v("#")]),t._v(" Wiring and Connections")]),t._v(" "),o("p",[t._v("C-RTK GPS comes with a cable that terminates in a 6-pin connector and 4-pin connector that are compatible with "),o("a",{attrs:{href:"http://doc.cuav.net/gps/c-rtk/en/c-rtk/hardware-connection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhack v3"),o("OutboundLink")],1),t._v(". The 6-pin connector provides the interface for RTK GPS, and should be connected to the flight controller's GPS port. The 4-pin connector is an m8n (standard) GPS interface that is intended for (optional) use as a second GPS.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("At time of writing PX4 does not yet fully support a second GPS. The 4-pin port need not be connected.")])]),t._v(" "),o("img",{attrs:{src:r(1152),width:"500px",title:"C-RTK_6PIN"}}),t._v(" "),o("p",[t._v("The cables/connectors may need to be modified in order to connect to other flight controller boards. The pin mappings for "),o("em",[t._v("Pixhawk 3 Pro")]),t._v(" and "),o("em",[t._v("Pixracer")]),t._v(" are shown below.")]),t._v(" "),o("h3",{attrs:{id:"pinout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pinout"}},[t._v("#")]),t._v(" Pinout")]),t._v(" "),o("p",[t._v("The C-RTK GPS pinout is provided below. This can be used to help modify the connector for other autopilot boards.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("pin")]),t._v(" "),o("th",[t._v("C-RTK GPS 6P")]),t._v(" "),o("th",[t._v("pin")]),t._v(" "),o("th",[t._v("Pixhawk 3 Pro GPS")]),t._v(" "),o("th",[t._v("C-RTK GPS 4P")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1")]),t._v(" "),o("td",[t._v("SDA")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("VCC")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("2")]),t._v(" "),o("td",[t._v("SCL")]),t._v(" "),o("td",[t._v("2")]),t._v(" "),o("td",[t._v("GPS_TX")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("3")]),t._v(" "),o("td",[t._v("GPS_RX")]),t._v(" "),o("td",[t._v("3")]),t._v(" "),o("td",[t._v("GPS_RX")]),t._v(" "),o("td",[t._v("GPS_RX")])]),t._v(" "),o("tr",[o("td",[t._v("4")]),t._v(" "),o("td",[t._v("GPS_TX")]),t._v(" "),o("td",[t._v("4")]),t._v(" "),o("td",[t._v("SCL")]),t._v(" "),o("td",[t._v("GPS_TX")])]),t._v(" "),o("tr",[o("td",[t._v("5")]),t._v(" "),o("td",[t._v("VCC_5V")]),t._v(" "),o("td",[t._v("5")]),t._v(" "),o("td",[t._v("SDA")]),t._v(" "),o("td",[t._v("VCC_5v")])]),t._v(" "),o("tr",[o("td",[t._v("6")]),t._v(" "),o("td",[t._v("GND")]),t._v(" "),o("td",[t._v("6")]),t._v(" "),o("td",[t._v("GND")]),t._v(" "),o("td",[t._v("GND")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);