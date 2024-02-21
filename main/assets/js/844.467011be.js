(window.webpackJsonp=window.webpackJsonp||[]).push([[844],{1419:function(e,t,o){e.exports=o.p+"assets/img/holybro-unicore-um982-1.4cae7215.jpg"},3035:function(e,t,o){"use strict";o.r(t);var a=o(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"holybro-h-rtk-unicore-um982-gps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#holybro-h-rtk-unicore-um982-gps"}},[e._v("#")]),e._v(" Holybro H-RTK Unicore UM982 GPS")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://holybro.com/products/h-rtk-um982",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro H-RTK Unicore UM982 GPS"),a("OutboundLink")],1),e._v(" is an multi-band high-precision "),a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[e._v("RTK GNSS System")]),e._v(" launched by Holybro.")],1),e._v(" "),a("p",[a("img",{attrs:{src:o(1419),alt:"HB-pmw3901-1"}})]),e._v(" "),a("p",[e._v("This module is based on the "),a("a",{attrs:{href:"https://en.unicorecomm.com/products/detail/24",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unicore UM982 Chip"),a("OutboundLink")],1),e._v(", which supports RTK positioning and dual-antenna heading calculation.")]),e._v(" "),a("p",[e._v("This means that it can generate a moving baseline headline/yaw determinations for autopilots with just one GPS module and dual antennas - a magnetometer is not needed. Unlike when using a module such as the U-blox F9P, where you would need "),a("RouterLink",{attrs:{to:"/ko/gps_compass/u-blox_f9p_heading.html"}},[e._v("two U-blox F9P modules to compute a heading angle")]),e._v(", with the Unicore UM982 GPS, you only need one GPS module!")],1),e._v(" "),a("p",[e._v("Using this GPS as a yaw source, instead of a compass, prevents magnetic interference from causing incorrect yaw reports to the autopilot (compasses are commonly affected by the vehicle motors and electrical systems, and other environmental interference sources such as metallic structures or equipment). This works even if the GPSs are not receiving RTCM data from a fixed RTK station or NTRIP server. It supports RTK positioning adjustment for centimeter-level accuracy, GPS/GLONASS,Beidou, Galileo, and QZSS global positioning systems.")]),e._v(" "),a("p",[e._v("The module also includes a magnetometer, LED, and safety switch button. It also serves as an RTK-corrected vehicle GPS, with or without moving baseline yaw determination, and as a base station GPS for sending RTCM data to a ground control station to provide an RTK source for the vehicle via telemetry.")]),e._v(" "),a("p",[e._v("Additional technical information can be found at "),a("a",{attrs:{href:"https://docs.holybro.com/gps-and-rtk-system/h-rtk-unicore-um982",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Technical Documentation page"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://holybro.com/products/h-rtk-um982",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Website"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"wiring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),a("p",[e._v("The module comes with both GH 10-pin & 6-pin cables that are compatible with the GPS1 & GPS2 ports on flight controllers that use the "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixhawk Connector Standard"),a("OutboundLink")],1),e._v(", such as "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk6x.html"}},[e._v("Pixhawk 6x")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk6c.html"}},[e._v("Pixhawk 6c")]),e._v(".")],1),e._v(" "),a("p",[e._v("It can also be used with Cubepilot Flight Controller. The 10Pin - 6Pin cable allows users to connect the UM982 to "),a("code",[e._v("GPS2")]),e._v(" port on Cubepilot and Holybro Autopilots.")]),e._v(" "),a("p",[e._v("The module can be used with one antenna or both antennas. If it is used with only one antenna, the right/primary antenna connector must be connected.")]),e._v(" "),a("h2",{attrs:{id:"px4-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),a("h3",{attrs:{id:"port-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port-setup"}},[e._v("#")]),e._v(" Port Setup")]),e._v(" "),a("p",[e._v("The Unicore module talks the NMEA protocol extended with some proprietary Unicore sentences. The serial baudrate is 230400.")]),e._v(" "),a("p",[e._v("The following PX4 parameters "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("must be set")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_GPS1_BAUD"}},[e._v("SER_GPS1_BAUD")]),e._v(" -> 230400")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[e._v("GPS_1_PROTOCOL")]),e._v(" -> 6: NMEA")],1)]),e._v(" "),a("p",[e._v("Note, the above parameters assume you are connected to "),a("code",[e._v("GPS 1")]),e._v(". If you are using another port you will have to use its parameters to configure the baud rate and protocol.")]),e._v(" "),a("h3",{attrs:{id:"enable-gps-heading-yaw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-gps-heading-yaw"}},[e._v("#")]),e._v(" Enable GPS Heading/Yaw")]),e._v(" "),a("p",[e._v("The Unicore module comes with two antennas, a primary (right connector) and a secondary (left connector) antenna, which can be used to get yaw from GPS. You will need to set the following parameters:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(": Set bit 3 (8) to enable dual antenna heading into the yaw estimation.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(": Set heading offset to 0 if the primary antenna is in the front. The angle increases clock-wise, so set the offset to 90 degrees if the primary antenna is on the right side of the vehicle (and the secondary on the left side).")],1)]),e._v(" "),a("h3",{attrs:{id:"rtk-corrections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtk-corrections"}},[e._v("#")]),e._v(" RTK Corrections")]),e._v(" "),a("p",[e._v("RTK works the same way as uBlox F9P modules. RTCMv3 corrections as sent by QGroundControl from an RTK GPS base station are consumed by the Unicore module, which should then change fix type to "),a("code",[e._v("RTK float")]),e._v(" or "),a("code",[e._v("RTK fixed")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);