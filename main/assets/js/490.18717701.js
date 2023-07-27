(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1533:function(t,e,o){t.exports=o.p+"assets/img/holybro_sik_radio_v3.333369b3.png"},1534:function(t,e,o){t.exports=o.p+"assets/img/holybro_sik_telemetry_label.018b3989.jpg"},1535:function(t,e,o){t.exports=o.p+"assets/img/holybro_sik_radio_v3_include.7c99f5c6.png"},3811:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"holybro-telemetry-radio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#holybro-telemetry-radio"}},[t._v("#")]),t._v(" Holybro Telemetry Radio")]),t._v(" "),r("p",[t._v("This Holybro "),r("RouterLink",{attrs:{to:"/zh/telemetry/sik_radio.html"}},[t._v("SiK")]),t._v(' Telemetry Radio is a small, light and inexpensive open source "plug-and-play" radio platform to connect your Autopilot Flight Controller and Ground Station.')],1),t._v(" "),r("p",[t._v('This radio is "plug-and-play" with all flight controllers running PX4 that have a JST-GH 6 Pin Connector TELEM port ('),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),r("OutboundLink")],1),t._v("). It provides the easiest way to setup a telemetry connection between your flight controller and a ground station. It uses open source firmware that has been specially designed to work well with MAVLink packets and to be integrated with the QGroundControl & PX4 Autopilot.")]),t._v(" "),r("p",[t._v('They typically allow ranges of better than 300m "out of the box" (the range can be extended to several kilometers with the use of a patch antenna on the ground).')]),t._v(" "),r("p",[t._v("The radios can be either 915 MHz (US) or 433 MHz (EU, Asia, Africa Oceania). Note that the regions indicated above are indicative, and you should check the rules for your locale.")]),t._v(" "),r("img",{attrs:{src:o(1533),width:"600px",title:"Sik Telemetry Radio"}}),t._v(" "),r("h3",{attrs:{id:"where-to-buy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://holybro.com/collections/telemetry-radios/products/sik-telemetry-radio-v3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro SiK Telemetry Radio V3"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),r("ul",[r("li",[t._v("Open-source SiK firmware")]),t._v(" "),r("li",[t._v("Plug-n-play for Pixhawk Standard Flight Controller")]),t._v(" "),r("li",[t._v("Easiest way to connect your Autopilot and Ground Station")]),t._v(" "),r("li",[t._v("Interchangeable air and ground radio")]),t._v(" "),r("li",[t._v("Micro-USB port (Type-C Adapter Cable Included)")]),t._v(" "),r("li",[t._v("6-position JST-GH connector")])]),t._v(" "),r("h3",{attrs:{id:"specification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),r("ul",[r("li",[t._v("100 mW maximum output power (adjustable) -117 dBm receive sensitivity")]),t._v(" "),r("li",[t._v("RP-SMA connector")]),t._v(" "),r("li",[t._v("2-way full-duplex communication through adaptive TDM UART interface")]),t._v(" "),r("li",[t._v("Transparent serial link")]),t._v(" "),r("li",[t._v("MAVLink protocol framing")]),t._v(" "),r("li",[t._v("Frequency Hopping Spread Spectrum (FHSS) Configurable duty cycle")]),t._v(" "),r("li",[t._v("Error correction corrects up to 25% of bit errors Open-source SIK firmware")]),t._v(" "),r("li",[t._v("Configurable through Mission Planner & APM Planner")]),t._v(" "),r("li",[t._v("FT230X USB to BASIC UART IC")])]),t._v(" "),r("h3",{attrs:{id:"leds-indicators-status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#leds-indicators-status"}},[t._v("#")]),t._v(" LEDs Indicators Status")]),t._v(" "),r("p",[t._v("The radios have 2 status LEDs, one red and one green. The interpretation of the different LED states are:")]),t._v(" "),r("ul",[r("li",[t._v("Green LED blinking - searching for another radio")]),t._v(" "),r("li",[t._v("Green LED solid - link is established with another radio")]),t._v(" "),r("li",[t._v("Red LED flashing - transmitting data")]),t._v(" "),r("li",[t._v("Red LED solid - in firmware update mode")])]),t._v(" "),r("img",{attrs:{src:o(1534),width:"500px",title:"Pixhawk5x Upright Image"}}),t._v(" "),r("h3",{attrs:{id:"connecting-to-flight-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-flight-controller"}},[t._v("#")]),t._v(" Connecting to Flight Controller")]),t._v(" "),r("p",[t._v("Use the 6 pin JST-GH connector that come with the radio to connect the radio to your flight controller's  “Telem 1” (“Telem 2” can also be used but the default recommendation is “Telem1”).")]),t._v(" "),r("h3",{attrs:{id:"connecting-to-a-pc-or-ground-station"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-a-pc-or-ground-station"}},[t._v("#")]),t._v(" Connecting to a PC or Ground Station")]),t._v(" "),r("p",[t._v("Connecting the radio to your Windows PC or Ground Station is as simple as connecting the micro/type-C USB cable  (Type-C adapter included with the radio) to your PC/Ground Station.")]),t._v(" "),r("p",[t._v("The necessary drivers should be installed automatically and the radio will appear as a new “USB Serial Port” in the Windows Device Manager under Ports (COM & LPT). The Mission Planner’s COM Port selection drop-down should also contain the same new COM port.")]),t._v(" "),r("h3",{attrs:{id:"package-includes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#package-includes"}},[t._v("#")]),t._v(" Package Includes:")]),t._v(" "),r("ul",[r("li",[t._v("Radio modules with antennas *2")]),t._v(" "),r("li",[t._v("Micro-USB to USB-A cable *1")]),t._v(" "),r("li",[t._v("Micro-USB to Micro-USB OTG adapter cable *1")]),t._v(" "),r("li",[t._v("Micro USB to Type C Adapter")]),t._v(" "),r("li",[t._v("JST-GH-6P to JST-GH-6P cable *1 (for Pixhawk Standard FC)")]),t._v(" "),r("li",[t._v("JST-GH-6P to Molex DF12 6P (for Pix32, Pixhawk 2.4.6, etc.)")])]),t._v(" "),r("img",{attrs:{src:o(1535),width:"600px",title:"Sik Telemetry Radio"}})])}),[],!1,null,null,null);e.default=a.exports}}]);