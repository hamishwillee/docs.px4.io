(window.webpackJsonp=window.webpackJsonp||[]).push([[1007],{2125:function(e,t,o){"use strict";o.r(t);var a=o(18),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"rtk-gps-heading-with-dual-u-blox-f9p"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps-heading-with-dual-u-blox-f9p"}},[e._v("#")]),e._v(" RTK GPS Heading with Dual u-blox F9P")]),e._v(" "),o("p",[e._v("Two u-blox F9P "),o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[e._v("RTK GPS")]),e._v(" modules mounted on a vehicle can be used to accurately compute a heading angle (i.e. an alternative to compass-based heading estimation). The two GPS devices in this scenario are referred to as the "),o("em",[e._v("Moving Base")]),e._v(" and "),o("em",[e._v("Rover")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"supported-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-devices"}},[e._v("#")]),e._v(" Supported Devices")]),e._v(" "),o("p",[e._v("This feature works on F9P devices that expose the GPS UART2 port (access to the port is required for setup).")]),e._v(" "),o("p",[e._v("The following devices are supported for this use case:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.sparkfun.com/products/15136",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun GPS-RTK2 Board - ZED-F9P"),o("OutboundLink")],1),e._v(" (www.sparkfun.com)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://store-drotek.com/911-1010-sirius-rtk-gnss-rover-f9p.html#/158-sensor-no_magnetometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("SIRIUS RTK GNSS ROVER (F9P)"),o("OutboundLink")],1),e._v(" (store-drotek.com)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://store.mrobotics.io/product-p/mr-m10020-a.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo u-blox ZED-F9 RTK L1/L2 GPS"),o("OutboundLink")],1),e._v(" (store.mrobotics.io)")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_freefly.html"}},[e._v("Freefly RTK GPS")]),e._v(" and "),o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[e._v("Holybro H-RTK F9P GNSS")]),e._v(" cannot be used because they do not expose the UART2 port.")],1),e._v(" "),o("li",[e._v("Supported devices are also listed in "),o("RouterLink",{attrs:{to:"/ko/gps_compass/#supported-gps-and-or-compass"}},[e._v("GPS/Compass > Supported GPS and/or Compass")]),e._v(".")],1)])]),e._v(" "),o("h2",{attrs:{id:"setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),o("p",[e._v("Ideally the two antennas should be identical, on the same level/horizontal plane and oriented the same way, and on an identical ground plane size and shape ("),o("a",{attrs:{href:"https://www.u-blox.com/sites/default/files/ZED-F9P-MovingBase_AppNote_%28UBX-19009093%29.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application note"),o("OutboundLink")],1),e._v(", section "),o("em",[e._v("System Level Considerations")]),e._v(").")]),e._v(" "),o("ul",[o("li",[e._v("The application note does not state the minimal required separation between modules (50cm has been used in test vehicles running PX4).")]),e._v(" "),o("li",[e._v("The antennas can be positioned as needed, but the "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" must be configured: "),o("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[e._v("GPS > Configuration > GPS as Yaw/Heading Source")]),e._v(".")],1)]),e._v(" "),o("p",[e._v("In overview:")]),e._v(" "),o("ul",[o("li",[e._v('The UART2 of the GPS devices need to be connected together (TXD2 of the "Moving Base" to RXD2 of the "Rover")')]),e._v(" "),o("li",[e._v("Connect UART1 on each of the GPS to (separate) unused UART's on the autopilot, and configure both of them as GPS with baudrate set to "),o("code",[e._v("Auto")]),e._v(". The mapping is as follows:\n"),o("ul",[o("li",[e._v("Main GPS = Rover")]),e._v(" "),o("li",[e._v("Secondary GPS = Moving Base")])])]),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),o("code",[e._v("Heading")]),e._v(" (1)")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[e._v("EKF2_AID_MASK")]),e._v(" parameter bit 7 must be set (see "),o("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[e._v("GPS > Configuration > GPS as Yaw/Heading Source")]),e._v(").")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" may need to be set (see "),o("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[e._v("GPS > Configuration > GPS as Yaw/Heading Source")]),e._v(").")],1),e._v(" "),o("li",[e._v("Reboot and wait until both devices have GPS reception. "),o("code",[e._v("gps status")]),e._v(" should then show the Main GPS going into RTK mode, which means the heading angle is available.")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("If using RTK with a fixed base station the secondary GPS will show the RTK state w.r.t. the base station.")])]),e._v(" "),o("h2",{attrs:{id:"further-informaiton"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-informaiton"}},[e._v("#")]),e._v(" Further Informaiton")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.u-blox.com/sites/default/files/ZED-F9P-MovingBase_AppNote_%28UBX-19009093%29.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZED-F9P Moving base applications (Application note)"),o("OutboundLink")],1),e._v(" - General setup/instructions.")]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[e._v("GPS > Configuration > GPS as Yaw/Heading Source")])],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);