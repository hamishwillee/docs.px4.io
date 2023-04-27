(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{1407:function(t,e,a){t.exports=a.p+"assets/img/rtk_trimble_two_gnss_hero.b753d22b.jpg"},1408:function(t,e,a){t.exports=a.p+"assets/img/rtk_trimble_two_gnss_pinouts.79a4f0b2.jpg"},3448:function(t,e,a){"use strict";a.r(e);var r=a(19),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"trimble-mb-two"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trimble-mb-two"}},[t._v("#")]),t._v(" Trimble MB-Two")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://www.trimble.com/Precision-GNSS/MB-Two-Board.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trimble MB-Two RTK GPS receiver"),r("OutboundLink")],1),t._v(" is a high-end, dual-frequency "),r("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[t._v("RTK GPS module")]),t._v(" that can be configured as either base or rover.")],1),t._v(" "),r("p",[t._v("In addition to providing precise position information, the MB-Two can estimate heading angle (it has dual-antenna support). This is useful for situations where a compass cannot provide reliable heading information, for example when flying close to metal constructs.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1407),alt:"MB-Two Hero image"}})]),t._v(" "),r("h2",{attrs:{id:"required-firmware-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#required-firmware-options"}},[t._v("#")]),t._v(" Required Firmware Options")]),t._v(" "),r("p",[t._v("The following firmware options need to be selected when buying the device:")]),t._v(" "),r("ul",[r("li",[t._v("[X] [2] [N] [G] [W] [Y] [J] for 20Hz position updates and RTK support, 1cm horizontal and 2cm vertical position accuracy")]),t._v(" "),r("li",[t._v("[L] LBAND")]),t._v(" "),r("li",[t._v("[D] DUO - Dual Antenna Heading")]),t._v(" "),r("li",[t._v("[B] BEIDOU + [O] GALILEO, if needed")])]),t._v(" "),r("h2",{attrs:{id:"antennas-and-cable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#antennas-and-cable"}},[t._v("#")]),t._v(" Antennas and Cable")]),t._v(" "),r("p",[t._v("The Trimble MB-Two requires two dual-frequency (L1/L2) antennas. A good example is the "),r("a",{attrs:{href:"http://www.maxtena.com/products/helicore/m1227hct-a2-sma/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maxtenna M1227HCT-A2-SMA"),r("OutboundLink")],1),t._v(" (which can be bought, for instance, from "),r("a",{attrs:{href:"https://uk.farnell.com/maxtena/m1227hct-a2-sma/antenna-1-217-1-25-1-565-1-61ghz/dp/2484959",target:"_blank",rel:"noopener noreferrer"}},[t._v("Farnell"),r("OutboundLink")],1),t._v(").")]),t._v(" "),r("p",[t._v("The antenna connector type on the device is MMCX. Suitable cables for the above antennas (SMA connector) can be found here:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.digikey.com/products/en?mpart=415-0073-012&v=24",target:"_blank",rel:"noopener noreferrer"}},[t._v("30 cm version"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.digikey.com/products/en?mpart=415-0073-018&v=24",target:"_blank",rel:"noopener noreferrer"}},[t._v("45 cm version"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"接线和连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接线和连接"}},[t._v("#")]),t._v(" 接线和连接")]),t._v(" "),r("p",[t._v("The Trimble MB-Two is connected to a UART on the flight controller (GPS port) for data.")]),t._v(" "),r("p",[t._v("To power the module you will need a separate 3.3V power supply (the maximum consumption is 360mA).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The module cannot be powered from a Pixhawk.")])]),t._v(" "),r("p",[t._v("The pins on the 28-pin connector are numbered as shown below:")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1408),alt:"MB-Two Pinout"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("针脚")]),t._v(" "),r("th",[t._v("参数名")]),t._v(" "),r("th",[t._v("参数描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("Vcc 3.3V")]),t._v(" "),r("td",[t._v("Power supply")])]),t._v(" "),r("tr",[r("td",[t._v("14")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("Connect to power the supply and GND of the Autopilot")])]),t._v(" "),r("tr",[r("td",[t._v("15")]),t._v(" "),r("td",[t._v("TXD1")]),t._v(" "),r("td",[t._v("Connect to RX of the Autopilot")])]),t._v(" "),r("tr",[r("td",[t._v("16")]),t._v(" "),r("td",[t._v("RXD1")]),t._v(" "),r("td",[t._v("Connect to TX of the Autopilot")])])])]),t._v(" "),r("h2",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),r("p",[t._v("First set the GPS protocol to Trimble ("),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[t._v("GPS_x_PROTOCOL=3")]),t._v(").")],1),t._v(" "),r("p",[t._v("For heading estimation the two antennas need to be on the same level and at least 30 cm apart from each other. The direction that they are facing does not matter as it can be configured with the "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[t._v("GPS_YAW_OFFSET")]),t._v(" parameter.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The "),r("code",[t._v("GPS_YAW_OFFSET")]),t._v(" is the angle made by the "),r("em",[t._v("baseline")]),t._v(" (the line between the two GPS antennas) relative to the vehicle x-axis (front/back axis, as shown "),r("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html#calculating-orientation"}},[t._v("here")]),t._v(").")],1)]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("Configure the serial port")]),t._v(" on which the Trimple will run using "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[t._v("GPS_1_CONFIG")]),t._v(", and set the baud rate to 115200 using "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SER_GPS1_BAUD"}},[t._v("SER_GPS1_BAUD")]),t._v(".")],1),t._v(" "),r("p",[t._v("To activate heading fusion for the attitude estimation, set the "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[t._v("EKF2_GPS_CTRL")]),t._v(" parameter to enable "),r("em",[t._v("Dual antenna heading")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("See also: "),r("RouterLink",{attrs:{to:"/zh/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS > Configuration > GPS as Yaw/Heading Source")])],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);