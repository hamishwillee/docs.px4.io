(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1151:function(t,e,a){t.exports=a.p+"assets/img/rtk_trimble_two_gnss_hero.b753d22b.jpg"},1152:function(t,e,a){t.exports=a.p+"assets/img/rtk_trimble_two_gnss_pinouts.79a4f0b2.jpg"},2124:function(t,e,a){"use strict";a.r(e);var o=a(18),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"trimble-mb-two"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#trimble-mb-two"}},[t._v("#")]),t._v(" Trimble MB-Two")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://www.trimble.com/Precision-GNSS/MB-Two-Board.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trimble MB-Two RTK GPS receiver"),o("OutboundLink")],1),t._v(" is a high-end, dual-frequency "),o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS module")]),t._v(" that can be configured as either base or rover.")],1),t._v(" "),o("p",[t._v("In addition to providing precise position information, the MB-Two can estimate heading angle (it has dual-antenna support). This is useful for situations where a compass cannot provide reliable heading information, for example when flying close to metal constructs.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1151),alt:"MB-Two Hero image"}})]),t._v(" "),o("h2",{attrs:{id:"required-firmware-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#required-firmware-options"}},[t._v("#")]),t._v(" Required Firmware Options")]),t._v(" "),o("p",[t._v("The following firmware options need to be selected when buying the device:")]),t._v(" "),o("ul",[o("li",[t._v("[X] [2] [N] [G] [W] [Y] [J] for 20Hz position updates and RTK support, 1cm horizontal and 2cm vertical position accuracy")]),t._v(" "),o("li",[t._v("[L] LBAND")]),t._v(" "),o("li",[t._v("[D] DUO - Dual Antenna Heading")]),t._v(" "),o("li",[t._v("[B] BEIDOU + [O] GALILEO, if needed")])]),t._v(" "),o("h2",{attrs:{id:"antennas-and-cable"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#antennas-and-cable"}},[t._v("#")]),t._v(" Antennas and Cable")]),t._v(" "),o("p",[t._v("The Trimble MB-Two requires two dual-frequency (L1/L2) antennas. A good example is the "),o("a",{attrs:{href:"http://www.maxtena.com/products/helicore/m1227hct-a2-sma/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maxtenna M1227HCT-A2-SMA"),o("OutboundLink")],1),t._v(" (which can be bought, for instance, from "),o("a",{attrs:{href:"https://uk.farnell.com/maxtena/m1227hct-a2-sma/antenna-1-217-1-25-1-565-1-61ghz/dp/2484959",target:"_blank",rel:"noopener noreferrer"}},[t._v("Farnell"),o("OutboundLink")],1),t._v(").")]),t._v(" "),o("p",[t._v("The antenna connector type on the device is MMCX. Suitable cables for the above antennas (SMA connector) can be found here:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.digikey.com/products/en?mpart=415-0073-012&v=24",target:"_blank",rel:"noopener noreferrer"}},[t._v("30 cm version"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://www.digikey.com/products/en?mpart=415-0073-018&v=24",target:"_blank",rel:"noopener noreferrer"}},[t._v("45 cm version"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"wiring-and-connections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-and-connections"}},[t._v("#")]),t._v(" Wiring and Connections")]),t._v(" "),o("p",[t._v("The Trimble MB-Two is connected to a UART on the flight controller (GPS port) for data.")]),t._v(" "),o("p",[t._v("To power the module you will need a separate 3.3V power supply (the maximum consumption is 360mA).")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The module cannot be powered from a Pixhawk.")])]),t._v(" "),o("p",[t._v("The pins on the 28-pin connector are numbered as shown below:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1152),alt:"MB-Two Pinout"}})]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Pin")]),t._v(" "),o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("6")]),t._v(" "),o("td",[t._v("Vcc 3.3V")]),t._v(" "),o("td",[t._v("Power supply")])]),t._v(" "),o("tr",[o("td",[t._v("14")]),t._v(" "),o("td",[t._v("GND")]),t._v(" "),o("td",[t._v("Connect to power the supply and GND of the Autopilot")])]),t._v(" "),o("tr",[o("td",[t._v("15")]),t._v(" "),o("td",[t._v("TXD1")]),t._v(" "),o("td",[t._v("Connect to RX of the Autopilot")])]),t._v(" "),o("tr",[o("td",[t._v("16")]),t._v(" "),o("td",[t._v("RXD1")]),t._v(" "),o("td",[t._v("Connect to TX of the Autopilot")])])])]),t._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),o("p",[t._v("For heading estimation the two antennas need to be on the same level and at least 30 cm apart from each other. The direction that they are facing does not matter as it can be configured with the "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[t._v("GPS_YAW_OFFSET")]),t._v(" parameter.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The "),o("code",[t._v("GPS_YAW_OFFSET")]),t._v(" is the angle made by the "),o("em",[t._v("baseline")]),t._v(" (the line between the two GPS antennas) relative to the vehicle x-axis (front/back axis, as shown "),o("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html#calculating-orientation"}},[t._v("here")]),t._v(").")],1)]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("Configure the serial port")]),t._v(" on which the Trimple will run using "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[t._v("GPS_1_CONFIG")]),t._v(", and set the baud rate to 115200 using "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_GPS1_BAUD"}},[t._v("SER_GPS1_BAUD")]),t._v(".")],1),t._v(" "),o("p",[t._v("To activate heading fusion for the attitude estimation, set the "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")]),t._v(" parameter to enable "),o("em",[t._v("GPS yaw fusion")]),t._v(".")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("See also: "),o("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS > Configuration > GPS as Yaw/Heading Source")])],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);