(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{1370:function(t,e,a){t.exports=a.p+"assets/img/locosys_gps_cable.199e6b8a.png"},2047:function(t,e,a){"use strict";a.r(e);var r=a(19),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"locosys-hawk-a1-gps-gnss"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#locosys-hawk-a1-gps-gnss"}},[t._v("#")]),t._v(" LOCOSYS Hawk A1 GPS/GNSS")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://www.locosystech.com/en/product/hawk-a1-LU23031-V2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LOCOSYS HAWK A1 GPS/GNSS receiver"),r("OutboundLink")],1),t._v(" is a dual frequency multi-constellation GNSS/GPS receiver compatible with PX4.")]),t._v(" "),r("p",[t._v("Main features include:")]),t._v(" "),r("ul",[r("li",[t._v("Concurrent reception of L1 and L5 band signals")]),t._v(" "),r("li",[t._v("Supports GPS, GLONASS,BEIDOU, GALILEO, QZSS")]),t._v(" "),r("li",[t._v("Capable of SBAS (WAAS, EGNOS, MSAS, GAGAN)")]),t._v(" "),r("li",[t._v("Support 135-channel GNSS")]),t._v(" "),r("li",[t._v("Fast TTFF at low signal level")]),t._v(" "),r("li",[t._v("Free hybrid ephemeris prediction to achieve faster cold start")]),t._v(" "),r("li",[t._v("Default 5Hz, up to 10 Hz update rate (SBAS at 5Hz update rate only)")]),t._v(" "),r("li",[t._v("Built-in super capacitor to reserve system data for rapid satellite acquisition")]),t._v(" "),r("li",[t._v("Three LED indicator for Power, PPS and Data transmit")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(347),alt:"Hawk A1"}})]),t._v(" "),r("h2",{attrs:{id:"where-to-buy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.locosystech.com/en/product/hawk-a1-LU23031-V2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LOCOSYS"),r("OutboundLink")],1),t._v(" (Taiwan)")])]),t._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),r("p",[t._v("You can use the Hawk A1 as either main (primary) or secondary GPS system.\nThe PX4 parameters should be set as below for each case.")]),t._v(" "),r("h3",{attrs:{id:"main-gnss"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#main-gnss"}},[t._v("#")]),t._v(" Main GNSS")]),t._v(" "),r("p",[t._v("To use the Hawk A1 your main GPS device:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Value")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[t._v("GPS_1_CONFIG")])],1),t._v(" "),r("td",[t._v("102 (Telem 2 or another available serial port)")]),t._v(" "),r("td",[t._v("Configure main GPS port")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[t._v("GPS_1_PROTOCOL")])],1),t._v(" "),r("td",[t._v("1 (u-blox)")]),t._v(" "),r("td",[t._v("Configure GPS protocol")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")])],1),t._v(" "),r("td",[t._v("230400")]),t._v(" "),r("td",[t._v("Configure the serial port baudrate (here the GPS is connected to "),r("code",[t._v("TELEM2")]),t._v(" for instance)")])])])]),t._v(" "),r("h3",{attrs:{id:"secondary-gnss"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#secondary-gnss"}},[t._v("#")]),t._v(" Secondary GNSS")]),t._v(" "),r("p",[t._v("To use the Hawk A1 as an auxiliary GPS device (in addition to the main GPS):")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Value")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[t._v("GPS_2_CONFIG")])],1),t._v(" "),r("td",[t._v("102 (Telem 2 or another available serial port)")]),t._v(" "),r("td",[t._v("Configure main GPS port")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_2_PROTOCOL"}},[t._v("GPS_2_PROTOCOL")])],1),t._v(" "),r("td",[t._v("1 (u-blox)")]),t._v(" "),r("td",[t._v("Configure GPS protocol")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")])],1),t._v(" "),r("td",[t._v("230400")]),t._v(" "),r("td",[t._v("Configure the serial port baudrate (here the GPS is connected to TELEM2 for instance)")])])])]),t._v(" "),r("h2",{attrs:{id:"wiring-and-connections"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-and-connections"}},[t._v("#")]),t._v(" Wiring and Connections")]),t._v(" "),r("p",[t._v("The Locosys GPS comes with an 6-pin JST-GH Pixhawk-standard connector that can be inserted directly into either the GPS1 UART port (or GPS2 UART ports from Pixhawk FMUv5).")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1370),alt:"GPS cable"}})]),t._v(" "),r("h3",{attrs:{id:"pinout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pinout"}},[t._v("#")]),t._v(" Pinout")]),t._v(" "),r("p",[t._v("The LOCOSYS GPS pinout is provided below.\nThis can be used to help modify the connector for other autopilot boards.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("pin")]),t._v(" "),r("th",[t._v("Locosys GPS")]),t._v(" "),r("th",[t._v("pin")]),t._v(" "),r("th",[t._v("Pixhawk GPS 2")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("VCC_5V")]),t._v(" "),r("td",[t._v("1")]),t._v(" "),r("td",[t._v("VCC")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("GPS_RX")]),t._v(" "),r("td",[t._v("2")]),t._v(" "),r("td",[t._v("GPS_TX")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GPS_TX")]),t._v(" "),r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GPS_RX")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("NC")]),t._v(" "),r("td",[t._v("4")]),t._v(" "),r("td",[t._v("SDA")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("NC")]),t._v(" "),r("td",[t._v("5")]),t._v(" "),r("td",[t._v("SCL")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("h2",{attrs:{id:"status-leds"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#status-leds"}},[t._v("#")]),t._v(" Status LEDs")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Color")]),t._v(" "),r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Green")]),t._v(" "),r("td",[t._v("TX Indicator")]),t._v(" "),r("td",[t._v("GNSS Data transmission")])]),t._v(" "),r("tr",[r("td",[t._v("Red")]),t._v(" "),r("td",[t._v("Power Indicator")]),t._v(" "),r("td",[t._v("Power")])]),t._v(" "),r("tr",[r("td",[t._v("Blue")]),t._v(" "),r("td",[t._v("PPS")]),t._v(" "),r("td",[t._v("Precise Positioning Service active")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:a(348),alt:"Hawk A1 LEDs"}})]),t._v(" "),r("h2",{attrs:{id:"specifications"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Receiver Type:")]),t._v(" 135-channel LOCOSYS MC-1612-V2b engine, GPS/QZSS L1 C/A, L5C, GLONASS L1OF, BeiDou B1I, B2a Galileo:E1, E5a SBAS L1 C/A: WAAS, EGNOS, MSAS, GAGAN")]),t._v(" "),r("li",[r("strong",[t._v("Navigation Update Rate:")]),t._v(" Max: 5Hz default Max: 10 Hz")]),t._v(" "),r("li",[r("strong",[t._v("Positioning Accuracy:")]),t._v(" 3D Fix")]),t._v(" "),r("li",[r("strong",[t._v("Time to first fix:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Cold start:")]),t._v(" 28s")]),t._v(" "),r("li",[r("strong",[t._v("Aided start:")]),t._v(" EASY")])])]),t._v(" "),r("li",[r("strong",[t._v("Sensitivity:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Tracking & Navigation:")]),t._v(" -165 dBm")])])]),t._v(" "),r("li",[r("strong",[t._v("Assisted GNSS:")]),t._v(" EASY DGPS")]),t._v(" "),r("li",[r("strong",[t._v("Oscillator:")]),t._v(" 26Mhz TCXO")]),t._v(" "),r("li",[r("strong",[t._v("RTC crystal:")]),t._v(" 32.768KHz")]),t._v(" "),r("li",[r("strong",[t._v("Available Antennas:")]),t._v(" L1+L5 multi frequency antenna")]),t._v(" "),r("li",[r("strong",[t._v("Signal Integrity:")]),t._v(" L1+L5 GPS GLONASS GALILEO BEIDOU QZSS SBAS")]),t._v(" "),r("li",[r("strong",[t._v("Protocols & Interfaces:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("UART/I2C:")]),t._v(" JST_GH Main interface, Switch internally.")])])])]),t._v(" "),r("h2",{attrs:{id:"further-info"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-info"}},[t._v("#")]),t._v(" Further info")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.locosystech.com/Templates/att/LU23031-V2%20datasheet_v0.2.pdf?lng=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("LOCOSYS GPS User Manual"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=_.exports},347:function(t,e,a){t.exports=a.p+"assets/img/locosys_hawk_a1_gps.a093efb0.png"},348:function(t,e,a){t.exports=a.p+"assets/img/locosys_hawk_a1_leds.168666e0.png"}}]);