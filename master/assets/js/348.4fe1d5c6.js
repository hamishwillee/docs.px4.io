(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{1351:function(t,e,r){t.exports=r.p+"assets/img/holybro_sik_radio_v3.f480552b.png"},1352:function(t,e,r){t.exports=r.p+"assets/img/holybro_sik_telemetry_label.2483411d.jpg"},1353:function(t,e,r){t.exports=r.p+"assets/img/holybro_sik_radio_v3_include.7c99f5c6.png"},2073:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"holybro-telemetry-radio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#holybro-telemetry-radio"}},[t._v("#")]),t._v(" Holybro Telemetry Radio")]),t._v(" "),o("p",[t._v("This Holybro "),o("RouterLink",{attrs:{to:"/en/telemetry/sik_radio.html"}},[t._v("SiK")]),t._v(' Telemetry Radio is a small, light and inexpensive open source "plug-and-play" radio platform to connect your Autopilot Flight Controller and Ground Station.')],1),t._v(" "),o("p",[t._v('This radio is "plug-and-play" with all flight controllers running PX4 that have a JST-GH 6 Pin Connector TELEM port ('),o("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),o("OutboundLink")],1),t._v(").\nIt provides the easiest way to setup a telemetry connection between your Autopilot flight controller and a ground station.\nIt uses open source firmware that has been specially designed to work well with MAVLink packets and to be integrated with the QGroundControl & PX4 Autopilot.")]),t._v(" "),o("p",[t._v('The radios can be either 915Mhz or 433Mhz and you should purchase the model which is appropriate for your country/region.\nThey typically allow ranges of better than 300m "out of the box" (the range can be extended to several kilometers with the use of a patch antenna on the ground).')]),t._v(" "),o("img",{attrs:{src:r(1351),width:"600px",title:"Sik Telemetry Radio"}}),t._v(" "),o("h3",{attrs:{id:"purchase"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[t._v("#")]),t._v(" Purchase:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://shop.holybro.com/transceiver-telemetry-radio-set-v3_p1103.html?",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro SiK Telemetry Radio V3"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),o("ul",[o("li",[t._v("Open-source SiK firmware")]),t._v(" "),o("li",[t._v("Plug-n-play for Pixhawk Standard Flight Controller")]),t._v(" "),o("li",[t._v("Easiest way to connect your Autopilot and Ground Station")]),t._v(" "),o("li",[t._v("Interchangeable air and ground radio")]),t._v(" "),o("li",[t._v("Micro-USB port (Type-C Adapter Cable Included)")]),t._v(" "),o("li",[t._v("6-position JST-GH connector")])]),t._v(" "),o("h3",{attrs:{id:"specification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),o("ul",[o("li",[t._v("100 mW maximum output power (adjustable) -117 dBm receive sensitivity")]),t._v(" "),o("li",[t._v("RP-SMA connector")]),t._v(" "),o("li",[t._v("2-way full-duplex communication through adaptive TDM UART interface")]),t._v(" "),o("li",[t._v("Transparent serial link")]),t._v(" "),o("li",[t._v("MAVLink protocol framing")]),t._v(" "),o("li",[t._v("Frequency Hopping Spread Spectrum (FHSS) Configurable duty cycle")]),t._v(" "),o("li",[t._v("Error correction corrects up to 25% of bit errors Open-source SIK firmware")]),t._v(" "),o("li",[t._v("Configurable through Mission Planner & APM Planner")]),t._v(" "),o("li",[t._v("FT230X USB to BASIC UART IC")])]),t._v(" "),o("h3",{attrs:{id:"leds-indicators-status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#leds-indicators-status"}},[t._v("#")]),t._v(" LEDs Indicators Status")]),t._v(" "),o("p",[t._v("The radios have 2 status LEDs, one red and one green.\nThe interpretation of the different LED states are:")]),t._v(" "),o("ul",[o("li",[t._v("Green LED blinking - searching for another radio")]),t._v(" "),o("li",[t._v("Green LED solid - link is established with another radio")]),t._v(" "),o("li",[t._v("Red LED flashing - transmitting data")]),t._v(" "),o("li",[t._v("Red LED solid - in firmware update mode")])]),t._v(" "),o("img",{attrs:{src:r(1352),width:"500px",title:"Pixhawk5x Upright Image"}}),t._v(" "),o("h3",{attrs:{id:"connecting-to-flight-controller"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-flight-controller"}},[t._v("#")]),t._v(" Connecting to Flight Controller")]),t._v(" "),o("p",[t._v("Use the 6 pin JST-GH connector that come with the radio to connect the radio to your flight controller's  “Telem 1” (“Telem 2” can also be used but the default recommendation is “Telem1”).")]),t._v(" "),o("h3",{attrs:{id:"connecting-to-a-pc-or-ground-station"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-a-pc-or-ground-station"}},[t._v("#")]),t._v(" Connecting to a PC or Ground Station")]),t._v(" "),o("p",[t._v("Connecting the radio to your Windows PC or Ground Station is as simple as connecting the micro/type-C USB cable  (Type-C adapter included with the radio) to your PC/Ground Station.")]),t._v(" "),o("p",[t._v("The necessary drivers should be installed automatically and the radio will appear as a new “USB Serial Port” in the Windows Device Manager under Ports (COM & LPT). The Mission Planner’s COM Port selection drop-down should also contain the same new COM port.")]),t._v(" "),o("h3",{attrs:{id:"package-includes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#package-includes"}},[t._v("#")]),t._v(" Package Includes:")]),t._v(" "),o("ul",[o("li",[t._v("Radio modules with antennas *2")]),t._v(" "),o("li",[t._v("Micro-USB to USB-A cable *1")]),t._v(" "),o("li",[t._v("Micro-USB to Micro-USB OTG adapter cable *1")]),t._v(" "),o("li",[t._v("Micro USB to Type C Adapter")]),t._v(" "),o("li",[t._v("JST-GH-6P to JST-GH-6P cable *1 (for Pixhawk Standard FC)")]),t._v(" "),o("li",[t._v("JST-GH-6P to Molex DF12 6P (for Pix32, Pixhawk 2.4.6, etc.)")])]),t._v(" "),o("img",{attrs:{src:r(1353),width:"600px",title:"Sik Telemetry Radio"}})])}),[],!1,null,null,null);e.default=a.exports}}]);