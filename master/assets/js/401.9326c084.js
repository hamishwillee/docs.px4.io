(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{1367:function(t,e,a){t.exports=a.p+"assets/img/cuav_p8_hero.761124bb.png"},1368:function(t,e,a){t.exports=a.p+"assets/img/cuav_p8_pinouts.2a641519.png"},1369:function(t,e,a){t.exports=a.p+"assets/img/cuav_p8_connect.ad4d1ee3.png"},3314:function(t,e,a){"use strict";a.r(e);var r=a(19),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"cuav-p8-telemetry-radio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cuav-p8-telemetry-radio"}},[t._v("#")]),t._v(" CUAV P8 Telemetry Radio")]),t._v(" "),r("p",[t._v("CUAV P8 Radio is a long range (>60km) and high data rate (375Kbps) remote data transmission module for drones that works plug-and-play with PX4.")]),t._v(" "),r("p",[t._v("It supports multiple modes such as point-to-point, point-to-multipoint, and relay communication.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1367),alt:"CUAV P8 Radio"}})]),t._v(" "),r("h2",{attrs:{id:"key-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-features"}},[t._v("#")]),t._v(" Key Features")]),t._v(" "),r("ul",[r("li",[t._v("Long range: >60km (depending on the antenna and environment, up to 100 km).")]),t._v(" "),r("li",[t._v("Supports point-to-point, point-to-multipoint, and repeater modes.")]),t._v(" "),r("li",[t._v("Up to 2W power (fixed frequency 2W; frequency hopping 1W)")]),t._v(" "),r("li",[t._v("Up to 345Kbps transfer rate.")]),t._v(" "),r("li",[t._v("Supports 12v~60V operating voltage.")]),t._v(" "),r("li",[t._v("Unit can operate either as ground station modem or aircraft modem.")]),t._v(" "),r("li",[t._v("Independent power supply for more stable operation")]),t._v(" "),r("li",[t._v("USB Type-C port, integrated USB to UART converter")])]),t._v(" "),r("h2",{attrs:{id:"purchase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[t._v("#")]),t._v(" Purchase")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://store.cuav.net/shop/cuav-p8-radio-uav-telemetry/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV store"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.alibaba.com/product-detail/Free-shipping-CUAV-UAV-P8-Radio_1600324379418.html?spm=a2747.manage.0.0.2dca71d2bY4B0M",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV alibaba"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),r("p",[t._v("The CUAV P8 Radio comes pre-configured (baud rate 57600, broadcast mode) for use with PX4. It should require no additional setup if connected to "),r("code",[t._v("TELEM1")]),t._v(" OR "),r("code",[t._v("TELEM2")]),t._v(".")]),t._v(" "),r("p",[t._v("On some flight controllers, or if used with a different serial port, you may need to "),r("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[t._v("configure the port for MAVLink communication")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://doc.cuav.net/data-transmission/p8-radio/en/config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("P8 Configuration"),r("OutboundLink")],1),t._v(" provides full information about radio configuration, if required.")])]),t._v(" "),r("h2",{attrs:{id:"pinouts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1368),alt:"P8 pinouts"}})]),t._v(" "),r("h3",{attrs:{id:"data-port"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-port"}},[t._v("#")]),t._v(" Data Port")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("pin")]),t._v(" "),r("th",[t._v("C-RTK GPS 6P")]),t._v(" "),r("th",[t._v("pin")]),t._v(" "),r("th",[t._v("Pixhawk standard pins")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("5V+(NC)")]),t._v(" "),r("td",[t._v("1")]),t._v(" "),r("td",[t._v("VCC")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("RX")]),t._v(" "),r("td",[t._v("2")]),t._v(" "),r("td",[t._v("TX")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("TX")]),t._v(" "),r("td",[t._v("3")]),t._v(" "),r("td",[t._v("RX")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("RTS")]),t._v(" "),r("td",[t._v("4")]),t._v(" "),r("td",[t._v("RTS")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("CTS")]),t._v(" "),r("td",[t._v("5")]),t._v(" "),r("td",[t._v("CTS")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("h2",{attrs:{id:"wiring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[t._v("#")]),t._v(" Wiring")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1369),alt:"P8 wiring"}})]),t._v(" "),r("p",[t._v("Connect the CUAV P8 Radio to the "),r("code",[t._v("TELEM1")]),t._v("/"),r("code",[t._v("TELEM2")]),t._v(" interface of the flight controller and use a battery or BEC to power the module. The required cables are included in the package.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("CUAV")]),t._v(" "),r("p",[t._v("P8 Radio does not support power supply from the flight controller, it needs to be connected to a 12~60v battery or BEC.")])]),t._v(" "),r("h2",{attrs:{id:"more-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#more-information"}},[t._v("#")]),t._v(" More information")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://manual.cuav.net/data-transmission/p8-radio/p8-user-manual-en.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("P8 manual"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://doc.cuav.net/data-transmission/p8-radio/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV P8 Radio"),r("OutboundLink")],1),t._v(" (Offical Guide)")])])}),[],!1,null,null,null);e.default=o.exports}}]);