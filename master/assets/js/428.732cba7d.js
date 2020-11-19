(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{1150:function(e,t,n){e.exports=n.p+"assets/img/rtk_trimble_two_gnss_hero.b753d22b.jpg"},1151:function(e,t,n){e.exports=n.p+"assets/img/rtk_trimble_two_gnss_pinouts.79a4f0b2.jpg"},2094:function(e,t,n){"use strict";n.r(t);var r=n(18),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"trimble-mb-two"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trimble-mb-two"}},[e._v("#")]),e._v(" Trimble MB-Two")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://www.trimble.com/Precision-GNSS/MB-Two-Board.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Trimble MB-Two RTK GPS receiver"),r("OutboundLink")],1),e._v(" is a high-end, dual-frequency "),r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[e._v("RTK GPS module")]),e._v(" that can be configured as either base or rover.")],1),e._v(" "),r("p",[e._v("In addition to providing precise position information, the MB-Two can estimate heading angle (it has dual-antenna support). This is useful for situations where a compass cannot provide reliable heading information, for example when flying close to metal constructs.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(1150),alt:"MB-Two Hero image"}})]),e._v(" "),r("h2",{attrs:{id:"required-firmware-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#required-firmware-options"}},[e._v("#")]),e._v(" Required Firmware Options")]),e._v(" "),r("p",[e._v("The following firmware options need to be selected when buying the device:")]),e._v(" "),r("ul",[r("li",[e._v("[X] [2] [N] [G] [W] [Y] [J] for 20Hz position updates and RTK support, 1cm horizontal and 2cm vertical position accuracy")]),e._v(" "),r("li",[e._v("[L] LBAND")]),e._v(" "),r("li",[e._v("[D] DUO - Dual Antenna Heading")]),e._v(" "),r("li",[e._v("[B] BEIDOU + [O] GALILEO, if needed")])]),e._v(" "),r("h2",{attrs:{id:"antennas-and-cable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#antennas-and-cable"}},[e._v("#")]),e._v(" Antennas and Cable")]),e._v(" "),r("p",[e._v("The Trimble MB-Two requires two dual-frequency (L1/L2) antennas. A good example is the "),r("a",{attrs:{href:"http://www.maxtena.com/products/helicore/m1227hct-a2-sma/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maxtenna M1227HCT-A2-SMA"),r("OutboundLink")],1),e._v(" (which can be bought, for instance, from "),r("a",{attrs:{href:"https://uk.farnell.com/maxtena/m1227hct-a2-sma/antenna-1-217-1-25-1-565-1-61ghz/dp/2484959",target:"_blank",rel:"noopener noreferrer"}},[e._v("Farnell"),r("OutboundLink")],1),e._v(").")]),e._v(" "),r("p",[e._v("The antenna connector type on the device is MMCX. Suitable cables for the above antennas (SMA connector) can be found here:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.digikey.com/products/en?mpart=415-0073-012&v=24",target:"_blank",rel:"noopener noreferrer"}},[e._v("30 cm version"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.digikey.com/products/en?mpart=415-0073-018&v=24",target:"_blank",rel:"noopener noreferrer"}},[e._v("45 cm version"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"wiring-and-connections"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-and-connections"}},[e._v("#")]),e._v(" Wiring and Connections")]),e._v(" "),r("p",[e._v("The Trimble MB-Two is connected to a UART on the flight controller (GPS port) for data.")]),e._v(" "),r("p",[e._v("To power the module you will need a separate 3.3V power supply (the maximum consumption is 360mA).")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" The module cannot be powered from a Pixhawk.")])]),e._v(" "),r("p",[e._v("The pins on the 28-pin connector are numbered as shown below:")]),e._v(" "),r("p",[r("img",{attrs:{src:n(1151),alt:"MB-Two Pinout"}})]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Pin")]),e._v(" "),r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("6")]),e._v(" "),r("td",[e._v("Vcc 3.3V")]),e._v(" "),r("td",[e._v("Power supply")])]),e._v(" "),r("tr",[r("td",[e._v("14")]),e._v(" "),r("td",[e._v("GND")]),e._v(" "),r("td",[e._v("Connect to power the supply and GND of the Autopilot")])]),e._v(" "),r("tr",[r("td",[e._v("15")]),e._v(" "),r("td",[e._v("TXD1")]),e._v(" "),r("td",[e._v("Connect to RX of the Autopilot")])]),e._v(" "),r("tr",[r("td",[e._v("16")]),e._v(" "),r("td",[e._v("RXD1")]),e._v(" "),r("td",[e._v("Connect to TX of the Autopilot")])])])]),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("For heading estimation the two antennas need to be on the same level and at least 30 cm apart from each other. The direction that they are facing does not matter as it can be configured with the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" parameter.")],1),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[e._v("Configure the serial port")]),e._v(" on which the Trimple will run using "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[e._v("GPS_1_CONFIG")]),e._v(", and set the baud rate to 115200 using "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_GPS1_BAUD"}},[e._v("SER_GPS1_BAUD")]),e._v(".")],1),e._v(" "),r("p",[e._v("To activate heading fusion for the attitude estimation, set the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[e._v("EKF2_AID_MASK")]),e._v(" parameter to enable "),r("em",[e._v("GPS yaw fusion")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);