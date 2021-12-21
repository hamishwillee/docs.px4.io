(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{1380:function(e,t,o){e.exports=o.p+"assets/img/uavcan_logo_transparent.385713a1.png"},1381:function(e,t,o){e.exports=o.p+"assets/img/uavcan_wiring.bbcb3462.png"},2099:function(e,t,o){"use strict";o.r(t);var r=o(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"uavcan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uavcan"}},[e._v("#")]),e._v(" UAVCAN")]),e._v(" "),r("p",[r("img",{staticStyle:{float:"right",width:"200px",padding:"10px"},attrs:{src:o(1380),alt:"UAVCAN Logo"}}),e._v(" "),r("a",{attrs:{href:"http://uavcan.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("UAVCAN"),r("OutboundLink")],1),e._v(" is an onboard network which allows the autopilot to connect to avionics/peripherals.\nIt uses rugged, differential signalling, and supports firmware upgrades over the bus and status feedback from peripherals.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("PX4 requires an SD card for UAVCAN node allocation and firmware upgrade.\nIt is not used during flight by UAVCAN.")])]),e._v(" "),r("h2",{attrs:{id:"supported-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported Hardware")]),e._v(" "),r("p",[e._v("It supports hardware like:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/uavcan/escs.html"}},[e._v("ESC/Motor controllers")])],1),e._v(" "),r("li",[e._v("Airspeed sensors\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/thiemar/airspeed",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thiemar airspeed sensor"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("GNSS receivers for GPS and GLONASS\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/uavcan/ark_gps.html"}},[e._v("ARK GPS")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/uavcan/ark_rtk_gps.html"}},[e._v("ARK RTK GPS")])],1),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[e._v("CubePilot Here3"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax GNSS"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("Power monitors\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/uavcan/pomegranate_systems_pm.html"}},[e._v("Pomegranate Systems Power Module")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/uavcan/cuav_can_pmu.html"}},[e._v("CUAV CAN PMU Power Module")])],1)])]),e._v(" "),r("li",[e._v("Distance sensors\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/uavcan/ark_flow.html"}},[e._v("Ark Flow")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/uavcan/avanon_laser_interface.html"}},[e._v("Avionics Anonymous Laser Altimeter UAVCAN Interface")])],1)])]),e._v(" "),r("li",[e._v("Optical Flow\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/uavcan/ark_flow.html"}},[e._v("Ark Flow")])],1)])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("PX4 does not support UAVCAN servos (at time of writing).")])]),e._v(" "),r("h2",{attrs:{id:"wiring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),r("p",[e._v("All UAVCAN components share the same connection architecture/are wired the same way.\nConnect all on-board UAVCAN devices into a chain and make sure the bus is terminated at the end nodes (the order in which the nodes are connected/chained does not matter).")]),e._v(" "),r("p",[e._v("The following diagram shows this for a flight controller connected to "),r("RouterLink",{attrs:{to:"/en/uavcan/escs.html"}},[e._v("UAVCAN motor controllers (ESCs)")]),e._v(" and a UAVCAN GNSS.")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(1381),alt:"UAVCAN Wiring"}})]),e._v(" "),r("p",[e._v("The diagram does not show any power wiring.\nRefer to your manufacturer instructions to confirm whether components require separate power or can be powered from the CAN bus itself.")]),e._v(" "),r("p",[e._v("For more information about proper bus connections see "),r("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/UAVCAN+device+interconnection",target:"_blank",rel:"noopener noreferrer"}},[e._v("UAVCAN Device Interconnection"),r("OutboundLink")],1),e._v(" (Zubax KB).")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("ul",[r("li",[e._v("While the connections are the same, the "),r("em",[e._v("connectors")]),e._v(" may differ across devices.")]),e._v(" "),r("li",[e._v('An second/redundant" CAN interface may be used, as shown above (CAN2).\nThis is optional, but can increase the robustness of the connection.')])])]),e._v(" "),r("h2",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),r("p",[e._v("In order to use UAVCAN components with PX4 you will first need to enable the UAVCAN driver:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Power the vehicle using the battery (you must power the whole vehicle, not just the flight controller) and connect "),r("em",[e._v("QGroundControl")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Navigate to the "),r("strong",[e._v("Vehicle Setup > Parameters")]),e._v(" screen.")])]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" must be "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("set")]),e._v(" to one of the non-zero values.")],1),e._v(" "),r("p",[e._v("The values are:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("0")]),e._v(": UAVCAN driver disabled.")]),e._v(" "),r("li",[r("code",[e._v("1")]),e._v(": Sensors Manual Config.")]),e._v(" "),r("li",[r("code",[e._v("2")]),e._v(": Sensors Automatic Config.")]),e._v(" "),r("li",[r("code",[e._v("3")]),e._v(": Sensors and Actuators (ESCs) Automatic Config")])]),e._v(" "),r("p",[e._v("Use "),r("code",[e._v("1")]),e._v(" if "),r("em",[e._v("none")]),e._v(" of the connected UAVCAN devices support automatic configuration (check the manual!), "),r("code",[e._v("2")]),e._v(" or "),r("code",[e._v("3")]),e._v(" if "),r("em",[e._v("some")]),e._v(" of them support automatic configuration, and "),r("code",[e._v("3")]),e._v(" if you're using UAVCAN ESCs (this assigns motor controls to the UAVCAN bus rather than PWM).")])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("You will need to manually allocate static ids for any nodes that don't support automatic configuration.\nWhen using dynamic configuration, any manually allocated ids should be given a value greater than the number of UAVCAN devices (to avoid clashes).")])]),e._v(" "),r("p",[e._v("Most UAVCAN sensors require no further setup (they are plug'n'play, unless specifically noted in their documentation).")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/uavcan/escs.html"}},[e._v("UAVCAN motor controllers (ESCs)")]),e._v(" additionally require the motor order be set, and may require a few other parameters be set.\nWhether this can be done using the simple QGroundControl setup UI depends on the type of ESC (see link for information).")],1),e._v(" "),r("h2",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("h3",{attrs:{id:"uavcan-devices-dont-get-node-id-firmware-update-fails"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-devices-dont-get-node-id-firmware-update-fails"}},[e._v("#")]),e._v(" UAVCAN devices dont get node ID/Firmware Update Fails")]),e._v(" "),r("p",[e._v("PX4 requires an SD card for UAVCAN node allocation and during firmware update (which happen during boot).\nCheck that there is a (working) SD card present and reboot.")]),e._v(" "),r("h3",{attrs:{id:"motors-not-spinning-when-armed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motors-not-spinning-when-armed"}},[e._v("#")]),e._v(" Motors not spinning when armed")]),e._v(" "),r("p",[e._v("If the PX4 Firmware arms but the motors do not start to rotate, check that parameter "),r("code",[e._v("UAVCAN_ENABLE=3")]),e._v(" to use UAVCAN ESCs.\nIf the motors do not start spinning before thrust is increased, check "),r("code",[e._v("UAVCAN_ESC_IDLT=1")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"developer-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#developer-information"}},[e._v("#")]),e._v(" Developer Information")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/uavcan/developer.html"}},[e._v("UAVCAN Development")]),e._v(": Topics related to development and integration of new UAVCAN hardware into PX4.")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);