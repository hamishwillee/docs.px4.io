(window.webpackJsonp=window.webpackJsonp||[]).push([[745],{1423:function(e,t,o){e.exports=o.p+"assets/img/holybro-unicore-um982-1.4cae7215.jpg"},2243:function(e,t,o){"use strict";o.r(t);var n=o(19),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"holybro-h-rtk-unicore-um982-gps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#holybro-h-rtk-unicore-um982-gps"}},[e._v("#")]),e._v(" Holybro H-RTK Unicore UM982 GPS")]),e._v(" "),n("p",[e._v("The "),n("a",{attrs:{href:"https://holybro.com/products/h-rtk-um982",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro H-RTK Unicore UM982 GPS"),n("OutboundLink")],1),e._v(" is an multi-band high-precision "),n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html"}},[e._v("RTK GNSS System")]),e._v(" launched by Holybro.")],1),e._v(" "),n("p",[n("img",{attrs:{src:o(1423),alt:"HB-pmw3901-1"}})]),e._v(" "),n("p",[e._v("This module is based on the "),n("a",{attrs:{href:"https://en.unicorecomm.com/products/detail/24",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unicore UM982 Chip"),n("OutboundLink")],1),e._v(", which supports RTK positioning and dual-antenna heading calculation.")]),e._v(" "),n("p",[e._v("This means that it can generate a moving baseline headline/yaw determinations for autopilots with just one GPS module and dual antennas - a magnetometer is not needed.\nUnlike when using a module such as the U-blox F9P, where you would need "),n("RouterLink",{attrs:{to:"/en/gps_compass/u-blox_f9p_heading.html"}},[e._v("two U-blox F9P modules to compute a heading angle")]),e._v(", with the Unicore UM982 GPS, you only need one GPS module!")],1),e._v(" "),n("p",[e._v("Using this GPS as a yaw source, instead of a compass, prevents magnetic interference from causing incorrect yaw reports to the autopilot (compasses are commonly affected by the vehicle motors and electrical systems, and other environmental interference sources such as metallic structures or equipment).\nThis works even if the GPSs are not receiving RTCM data from a fixed RTK station or NTRIP server.\nIt supports RTK positioning adjustment for centimeter-level accuracy, GPS/GLONASS,Beidou, Galileo, and QZSS global positioning systems.")]),e._v(" "),n("p",[e._v("The module also includes a magnetometer, LED, and safety switch button.\nIt also serves as an RTK-corrected vehicle GPS, with or without moving baseline yaw determination, and as a base station GPS for sending RTCM data to a ground control station to provide an RTK source for the vehicle via telemetry.")]),e._v(" "),n("p",[e._v("Additional technical information can be found at "),n("a",{attrs:{href:"https://docs.holybro.com/gps-and-rtk-system/h-rtk-unicore-um982",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Technical Documentation page"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"where-to-buy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://holybro.com/products/h-rtk-um982",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Website"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"wiring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),n("p",[e._v("The module comes with both GH 10-pin & 6-pin cables that are compatible with the GPS1 & GPS2 ports on flight controllers that use the "),n("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixhawk Connector Standard"),n("OutboundLink")],1),e._v(", such as "),n("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk6x.html"}},[e._v("Pixhawk 6x")]),e._v(" and "),n("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk6c.html"}},[e._v("Pixhawk 6c")]),e._v(".")],1),e._v(" "),n("p",[e._v("It can also be used with Cubepilot Flight Controller.\nThe 10Pin - 6Pin cable allows users to connect the UM982 to "),n("code",[e._v("GPS2")]),e._v(" port on Cubepilot and Holybro Autopilots.")]),e._v(" "),n("p",[e._v("The module can be used with one antenna or both antennas.\nIf it is used with only one antenna, the right/primary antenna connector must be connected.")]),e._v(" "),n("h2",{attrs:{id:"px4-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),n("h3",{attrs:{id:"port-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#port-setup"}},[e._v("#")]),e._v(" Port Setup")]),e._v(" "),n("p",[e._v("The Unicore module talks the NMEA protocol extended with some proprietary Unicore sentences.\nThe serial baudrate is 230400.")]),e._v(" "),n("p",[e._v("The following PX4 parameters "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("must be set")]),e._v(":")],1),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_GPS1_BAUD"}},[e._v("SER_GPS1_BAUD")]),e._v(" -> 230400")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[e._v("GPS_1_PROTOCOL")]),e._v(" -> 6: NMEA")],1)]),e._v(" "),n("p",[e._v("Note, the above parameters assume you are connected to "),n("code",[e._v("GPS 1")]),e._v(".\nIf you are using another port you will have to use its parameters to configure the baud rate and protocol.")]),e._v(" "),n("h3",{attrs:{id:"enable-gps-heading-yaw"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enable-gps-heading-yaw"}},[e._v("#")]),e._v(" Enable GPS Heading/Yaw")]),e._v(" "),n("p",[e._v("The Unicore module comes with two antennas, a primary (right connector) and a secondary (left connector) antenna, which can be used to get yaw from GPS.\nYou will need to set the following parameters:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(": Set bit 3 (8) to enable dual antenna heading into the yaw estimation.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(": Set heading offset to 0 if the primary antenna is in the front.\nThe angle increases clock-wise, so set the offset to 90 degrees if the primary antenna is on the right side of the vehicle (and the secondary on the left side).")],1)]),e._v(" "),n("h3",{attrs:{id:"rtk-corrections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rtk-corrections"}},[e._v("#")]),e._v(" RTK Corrections")]),e._v(" "),n("p",[e._v("RTK works the same way as uBlox F9P modules.\nRTCMv3 corrections as sent by QGroundControl from an RTK GPS base station are consumed by the Unicore module, which should then change fix type to "),n("code",[e._v("RTK float")]),e._v(" or "),n("code",[e._v("RTK fixed")]),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);