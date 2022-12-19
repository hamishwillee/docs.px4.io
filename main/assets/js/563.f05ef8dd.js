(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{2727:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"locosys-hawk-r1-rtk-gps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#locosys-hawk-r1-rtk-gps"}},[t._v("#")]),t._v(" LOCOSYS Hawk R1 RTK GPS")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://www.locosystech.com/en/product/hawk-r1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LOCOSYS Hawk R1"),o("OutboundLink")],1),t._v(" is a dual-frequency "),o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS module")]),t._v(" receiver designed for compatibility with Pixhawk.")],1),t._v(" "),o("p",[t._v("The module can act as an RTK GPS rover when installed on the aircraft.")]),t._v(" "),o("p",[t._v("The receiver is capable of concurrently tracking all global civil navigation systems, including GPS, GLONASS, GALILEO, BEIDOU and QZSS. It acquires both L1 and L5 signals at the same time while providing the centimeter-level RTK positioning accuracy.")]),t._v(" "),o("p",[t._v("The built-in lightweight helical antenna enhances RTK positioning stability. The fast time-to-first-fix, RTK convergence, superior sensitivity, low power consumption make it a better choice for Pixhawk-based platform UAVs.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This module does not have a compass. For an equivalent GPS module with a compass try: "),o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_locosys_r2.html"}},[t._v("LOCOSYS Hawk R2")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"main-features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#main-features"}},[t._v("#")]),t._v(" Main Features")]),t._v(" "),o("ul",[o("li",[t._v("Concurrent reception of L1 and L5 band signals")]),t._v(" "),o("li",[t._v("Support GPS, GLONASS, BEIDOU, GALILEO, QZSS")]),t._v(" "),o("li",[t._v("Capable of SBAS (WAAS, EGNOS, MSAS, GAGAN)")]),t._v(" "),o("li",[t._v("Support 135-channel GNSS")]),t._v(" "),o("li",[t._v("Fast TTFF at low signal level")]),t._v(" "),o("li",[t._v("Free hybrid ephemeris prediction to achieve faster cold start")]),t._v(" "),o("li",[t._v("Default 5Hz, up to 10 Hz update rate (SBAS support 5Hz only).")]),t._v(" "),o("li",[t._v("Build-in super capacitor to reserve system data for rapid satellite acquisition")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This module can be used with PX4 v1.13 or above.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(349),alt:"LOCOSYS Hawk R1"}})]),t._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.locosystech.com/en/product/hawk-r1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LOCOSYS Hawk R1"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"kit-contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kit-contents"}},[t._v("#")]),t._v(" Kit Contents")]),t._v(" "),o("p",[t._v("An RTK GPS kit includes:")]),t._v(" "),o("ul",[o("li",[t._v("1x GPS Module")]),t._v(" "),o("li",[t._v("1x Helix antenna")]),t._v(" "),o("li",[t._v("1x 6-pin JST-GH")])]),t._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),o("p",[t._v("RTK setup and use on PX4 via "),o("em",[t._v("QGroundControl")]),t._v(" is largely plug and play (see "),o("RouterLink",{attrs:{to:"/ko/advanced_features/rtk-gps.html"}},[t._v("RTK GPS")]),t._v(" for more information). Connect your Hawk R1 to the "),o("code",[t._v("GPS2")]),t._v(" port on compatible Pixhawk boards (preferred, though you can use any other unused UART port).")],1),t._v(" "),o("p",[t._v("For the aircraft, you should set the parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_GPS1_BAUD"}},[t._v("SER_GPS2_BAUD")]),t._v(" to 230400 8N1 to ensure that PX4 configures the correct baudrate.")],1),t._v(" "),o("h2",{attrs:{id:"wiring-and-connections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-and-connections"}},[t._v("#")]),t._v(" Wiring and Connections")]),t._v(" "),o("p",[t._v("Hawk R1 RTK GPS comes with an 6 pin JST-GH connector that can be plugged into a Pixhawk autopilot.")]),t._v(" "),o("h3",{attrs:{id:"pinout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pinout"}},[t._v("#")]),t._v(" Pinout")]),t._v(" "),o("p",[t._v("LOCOSYS GPS pinout is provided below.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Pin")]),t._v(" "),o("th",[t._v("Hawk R1 GPS")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1")]),t._v(" "),o("td",[t._v("VCC_5V")])]),t._v(" "),o("tr",[o("td",[t._v("2")]),t._v(" "),o("td",[t._v("GPS_RX")])]),t._v(" "),o("tr",[o("td",[t._v("3")]),t._v(" "),o("td",[t._v("GPS_TX")])]),t._v(" "),o("tr",[o("td",[t._v("4")]),t._v(" "),o("td",[t._v("Null")])]),t._v(" "),o("tr",[o("td",[t._v("5")]),t._v(" "),o("td",[t._v("Null")])]),t._v(" "),o("tr",[o("td",[t._v("6")]),t._v(" "),o("td",[t._v("Null")])]),t._v(" "),o("tr",[o("td",[t._v("7")]),t._v(" "),o("td",[t._v("Null")])]),t._v(" "),o("tr",[o("td",[t._v("8")]),t._v(" "),o("td",[t._v("Null")])]),t._v(" "),o("tr",[o("td",[t._v("9")]),t._v(" "),o("td",[t._v("GND")])])])]),t._v(" "),o("h2",{attrs:{id:"status-leds"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status-leds"}},[t._v("#")]),t._v(" Status LEDs")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Color")]),t._v(" "),o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Green")]),t._v(" "),o("td",[t._v("TX Indicator")]),t._v(" "),o("td",[t._v("GNSS Data transmission")])]),t._v(" "),o("tr",[o("td",[t._v("Red")]),t._v(" "),o("td",[t._v("Power Indicator")]),t._v(" "),o("td",[t._v("Power")])]),t._v(" "),o("tr",[o("td",[t._v("Blue")]),t._v(" "),o("td",[t._v("PPS")]),t._v(" "),o("td",[t._v("Precise Positioning Service active")])])])]),t._v(" "),o("p",[o("img",{attrs:{src:a(350),alt:"Hawk A1 LEDs"}})]),t._v(" "),o("h2",{attrs:{id:"specification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),o("ul",[o("li",[t._v("Frequency\n"),o("ul",[o("li",[t._v("GPS/QZSS: L1 C/A, L5C")]),t._v(" "),o("li",[t._v("GLONASS: L1OF")]),t._v(" "),o("li",[t._v("BEIDOU: B1I, B2a")]),t._v(" "),o("li",[t._v("GALILEO: E1, E5a")])])]),t._v(" "),o("li",[t._v("135 Channels support")]),t._v(" "),o("li",[t._v("Up to 10 Hz update rate (default to 5Hz)")]),t._v(" "),o("li",[t._v("Acquisition Time\n"),o("ul",[o("li",[t._v("Hot start (Open Sky) in 2 seconds")]),t._v(" "),o("li",[t._v("Cold Start (Open Sky) in 28 seconds without AGPS")])])]),t._v(" "),o("li",[t._v("PPS with 100ms pulse width, 1.8Vdc")]),t._v(" "),o("li",[t._v("External, active Helix antenna\n"),o("ul",[o("li",[t._v("SMA connector")])])]),t._v(" "),o("li",[t._v("UBlox Protocol Support\n"),o("ul",[o("li",[t._v("U5Hz:UBX-NAV-PVT,UBX-NAV-DOP")]),t._v(" "),o("li",[t._v("1Hz: UBX-NAV-TIMEGPS")])])]),t._v(" "),o("li",[t._v("Connectivity:\n"),o("ul",[o("li",[t._v("6-pin JST-GH UART/I2C (Pixhawk compatible)")])])]),t._v(" "),o("li",[t._v("Power:\n"),o("ul",[o("li",[t._v("DC supply voltage 3.3V ~ 5.0V input")]),t._v(" "),o("li",[t._v("Power consumption <1W")])])])]),t._v(" "),o("h2",{attrs:{id:"more-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#more-information"}},[t._v("#")]),t._v(" More Information")]),t._v(" "),o("p",[t._v("More information can be found on "),o("a",{attrs:{href:"https://www.locosystech.com/en/product/hawk-r1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LOCOSYS Hawk R1"),o("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports},349:function(t,e,a){t.exports=a.p+"assets/img/locosys_hawk_a1_gps.a093efb0.png"},350:function(t,e,a){t.exports=a.p+"assets/img/locosys_hawk_a1_leds.168666e0.png"}}]);