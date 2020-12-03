(window.webpackJsonp=window.webpackJsonp||[]).push([[798],{1682:function(e,t,a){"use strict";a.r(t);var n=a(18),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rtk-gps-heading-with-u-blox-f9p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps-heading-with-u-blox-f9p"}},[e._v("#")]),e._v(" RTK GPS Heading with u-blox F9P")]),e._v(" "),a("p",[e._v("Two u-blox F9P devices mounted on a vehicle can be used to accurately compute a heading angle (i.e. an alternative to compass-based heading estimation).\nThe two GPS devices in this scenario are referred to as the "),a("em",[e._v("Moving Base")]),e._v(" and "),a("em",[e._v("Rover")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("RTK positioning using a fixed base station is possible in parallel with this feature.")])]),e._v(" "),a("p",[e._v("The general setup is described  in: "),a("a",{attrs:{href:"https://www.u-blox.com/sites/default/files/ZED-F9P-MovingBase_AppNote_%28UBX-19009093%29.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZED-F9P Moving base applications (Application note)"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("In overview:")]),e._v(" "),a("ul",[a("li",[e._v('The UART2 of the GPS devices need to be connected together (TXD2 of the "Moving Base" to RXD2 of the "Rover")')]),e._v(" "),a("li",[e._v("Connect UART1 on each of the GPS to (separate) unused UART's on the autopilot, and configure both of them as GPS with baudrate set to "),a("code",[e._v("Auto")]),e._v(".\nThe mapping is as follows:\n"),a("ul",[a("li",[e._v("Main GPS = Rover")]),e._v(" "),a("li",[e._v("Secondary GPS = Moving Base")])])]),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),a("code",[e._v("Heading")]),e._v(" (1)")],1),e._v(" "),a("li",[e._v("Reboot and wait until both devices have GPS reception.\n"),a("code",[e._v("gps status")]),e._v(" should then show the Main GPS going into RTK mode, which means the heading angle is available.")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("If using RTK with a fixed base station the secondary GPS will show the RTK state w.r.t. the base station.")])]),e._v(" "),a("p",[e._v("Ideally the two antennas should be identical, on the same level/horizontal plane and oriented the same way, and on an identical ground plane size and shape ("),a("a",{attrs:{href:"https://www.u-blox.com/sites/default/files/ZED-F9P-MovingBase_AppNote_%28UBX-19009093%29.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application note"),a("OutboundLink")],1),e._v(", section "),a("em",[e._v("System Level Considerations")]),e._v(")).")]),e._v(" "),a("p",[e._v("Otherwise the antennas can be positioned as needed, but the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" must be configured.\nThis offset is the angle made by the "),a("em",[e._v("baseline")]),e._v(" (the line between the two GPS modules) relative to the vehicle x-axis (front/back axis, as shown "),a("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html#calculating-orientation"}},[e._v("here")]),e._v(").")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The application note does not state the minimal required separation between modules.\n50cm has been used in test vehicles running PX4.")])]),e._v(" "),a("p",[e._v("To activate heading fusion for the attitude estimation, set the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[e._v("EKF2_AID_MASK")]),e._v(" parameter to enable "),a("em",[e._v("GPS yaw fusion")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);