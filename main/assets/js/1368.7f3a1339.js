(window.webpackJsonp=window.webpackJsonp||[]).push([[1368],{2497:function(e,t,a){"use strict";a.r(t);var r=a(19),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ads-b-flarm-utm-receivers-air-traffic-avoidance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ads-b-flarm-utm-receivers-air-traffic-avoidance"}},[e._v("#")]),e._v(" ADS-B/FLARM/UTM Receivers: Air Traffic Avoidance")]),e._v(" "),a("p",[e._v("PX4 supports simple air traffic avoidance in "),a("RouterLink",{attrs:{to:"/en/flying/missions.html"}},[e._v("missions")]),e._v(" using "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Automatic_dependent_surveillance_%E2%80%93_broadcast",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADS-B"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/FLARM",target:"_blank",rel:"noopener noreferrer"}},[e._v("FLARM"),a("OutboundLink")],1),e._v(", or "),a("a",{attrs:{href:"https://www.faa.gov/uas/research_development/traffic_management",target:"_blank",rel:"noopener noreferrer"}},[e._v("UTM"),a("OutboundLink")],1),e._v(" transponders that use the standard MAVLink interfaces.")],1),e._v(" "),a("p",[e._v("If a potential collision is detected, PX4 can "),a("em",[e._v("warn")]),e._v(", immediately "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/land.html"}},[e._v("land")]),e._v(", or "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/return.html"}},[e._v("return")]),e._v(" (depending on the value of "),a("a",{attrs:{href:"#NAV_TRAFF_AVOID"}},[e._v("NAV_TRAFF_AVOID")]),e._v(").")],1),e._v(" "),a("h2",{attrs:{id:"supported-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported Hardware")]),e._v(" "),a("p",[e._v("PX4 traffic avoidance works with ADS-B or FLARM products that supply transponder data using the MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADSB_VEHICLE"),a("OutboundLink")],1),e._v(" message, and UTM products that supply transponder data using the MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[e._v("UTM_GLOBAL_POSITION"),a("OutboundLink")],1),e._v(" message.")]),e._v(" "),a("p",[e._v("It has been tested with the following devices:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://uavionix.com/product/pingrx-pro/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PingRX ADS-B Receiver"),a("OutboundLink")],1),e._v(" (uAvionix)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://flarm.com/products/uav/atom-uav-flarm-for-drones/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FLARM"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),a("p",[e._v("Any of the devices can be connected to any free/unused serial port on the flight controller.\nMost commonly they are connected to "),a("code",[e._v("TELEM2")]),e._v(" (if this is not being use for some other purpose).")]),e._v(" "),a("h3",{attrs:{id:"pingrx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pingrx"}},[e._v("#")]),e._v(" PingRX")]),e._v(" "),a("p",[e._v("The PingRX MAVLink port uses a JST ZHR-4 mating connector with pinout as shown below.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Pin")]),e._v(" "),a("th",[e._v("Signal")]),e._v(" "),a("th",[e._v("Volt")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1 (red)")]),e._v(" "),a("td",[e._v("RX (IN)")]),e._v(" "),a("td",[e._v("+5V tolerant")])]),e._v(" "),a("tr",[a("td",[e._v("2 (blk)")]),e._v(" "),a("td",[e._v("TX (OUT)")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("3 (blk)")]),e._v(" "),a("td",[e._v("Power")]),e._v(" "),a("td",[e._v("+4 to 6V")])]),e._v(" "),a("tr",[a("td",[e._v("4 (blk)")]),e._v(" "),a("td",[e._v("GND")]),e._v(" "),a("td",[e._v("GND")])])])]),e._v(" "),a("p",[e._v("The PingRX comes with connector cable that can be attached directly to the TELEM2 port (DF13-6P) on an "),a("RouterLink",{attrs:{to:"/en/flight_controller/mro_pixhawk.html"}},[e._v("mRo Pixhawk")]),e._v(".\nFor other ports or boards, you will need to obtain your own cable.")],1),e._v(" "),a("h2",{attrs:{id:"flarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flarm"}},[e._v("#")]),e._v(" FLARM")]),e._v(" "),a("p",[e._v("FLARM has an on-board DF-13 6 Pin connector that has an identical pinout to the "),a("RouterLink",{attrs:{to:"/en/flight_controller/mro_pixhawk.html"}},[e._v("mRo Pixhawk")]),e._v(".")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Pin")]),e._v(" "),a("th",[e._v("Signal")]),e._v(" "),a("th",[e._v("Volt")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1 (red)")]),e._v(" "),a("td",[e._v("VCC")]),e._v(" "),a("td",[e._v("+4V to +36V")])]),e._v(" "),a("tr",[a("td",[e._v("2 (blk)")]),e._v(" "),a("td",[e._v("TX (OUT)")]),e._v(" "),a("td",[e._v("+3.3V")])]),e._v(" "),a("tr",[a("td",[e._v("3 (blk)")]),e._v(" "),a("td",[e._v("RX (IN)")]),e._v(" "),a("td",[e._v("+3.3V")])]),e._v(" "),a("tr",[a("td",[e._v("4 (blk)")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("+3.3V")])]),e._v(" "),a("tr",[a("td",[e._v("5 (blk)")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("+3.3V")])]),e._v(" "),a("tr",[a("td",[e._v("6 (blk)")]),e._v(" "),a("td",[e._v("GND")]),e._v(" "),a("td",[e._v("GND")])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The TX and RX on the flight controller must be connected to the RX and TX on the FLARM, respectively.")])]),e._v(" "),a("h2",{attrs:{id:"software-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-configuration"}},[e._v("#")]),e._v(" Software Configuration")]),e._v(" "),a("h3",{attrs:{id:"port-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port-configuration"}},[e._v("#")]),e._v(" Port Configuration")]),e._v(" "),a("p",[e._v("The recievers are configured in the same way as any other "),a("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripheral")]),e._v(".\nThe only "),a("em",[e._v("specific")]),e._v(" setup is that the port baud rate must be set to 57600 and the a low-bandwidth profile ("),a("code",[e._v("MAV_X_MODE")]),e._v(").")],1),e._v(" "),a("p",[e._v("Assuming you have connected the device to the TELEM2 port, "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("set the parameters")]),e._v(" as shown:")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[e._v("MAV_1_CONFIG")]),e._v(" = TELEM 2")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_MODE"}},[e._v("MAV_1_MODE")]),e._v(" = Normal")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_RATE"}},[e._v("MAV_1_RATE")]),e._v(" = 0 (default sending rate for port).")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_FORWARD"}},[e._v("MAV_1_FORWARD")]),e._v(" = Enabled")],1)]),e._v(" "),a("p",[e._v("Then reboot the vehicle.")]),e._v(" "),a("p",[e._v("You will now find a new parameter called "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[e._v("SER_TEL2_BAUD")]),e._v(", which must be set to 57600.")],1),e._v(" "),a("h3",{attrs:{id:"configure-traffic-avoidance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-traffic-avoidance"}},[e._v("#")]),e._v(" Configure Traffic Avoidance")]),e._v(" "),a("p",[e._v("Configure the action when there is a potential collision using the parameter below:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_AVOID"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[e._v("NAV_TRAFF_AVOID")])],1),e._v(" "),a("td",[e._v("Enable traffic avoidance mode specify avoidance response. 0: Disable, 1: Warn only, 2: Return mode, 3: Land mode.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_A_HOR"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_TRAFF_A_HOR"}},[e._v("NAV_TRAFF_A_HOR")])],1),e._v(" "),a("td",[e._v("Horizonal radius of cylinder around the vehicle that defines its airspace (i.e. the airspace in the ground plane).")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_A_VER"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_TRAFF_A_VER"}},[e._v("NAV_TRAFF_A_VER")])],1),e._v(" "),a("td",[e._v("Vertical height above and below vehicle of the cylinder that defines its airspace (also see "),a("a",{attrs:{href:"#NAV_TRAFF_A_HOR"}},[e._v("NAV_TRAFF_A_HOR")]),e._v(").")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_COLL_T"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_TRAFF_COLL_T"}},[e._v("NAV_TRAFF_COLL_T")])],1),e._v(" "),a("td",[e._v("Collision time threshold. Avoidance will trigger if the estimated time until collision drops below this value (the estimated time is based on relative speed of traffic and UAV).")])])])]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("h3",{attrs:{id:"adsb-flarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adsb-flarm"}},[e._v("#")]),e._v(" ADSB/FLARM")]),e._v(" "),a("p",[e._v("PX4 listens for valid transponder reports during missions.")]),e._v(" "),a("p",[e._v("If a valid transponder report is received, PX4 first uses the traffic transponder information to estimate whether the traffic heading and height indicates there will be an intersection with the airspace of the UAV.\nThe UAV airspace consists of a surrounding cylinder defined by the radius "),a("a",{attrs:{href:"#NAV_TRAFF_A_HOR"}},[e._v("NAV_TRAFF_A_HOR")]),e._v(" and height "),a("a",{attrs:{href:"#NAV_TRAFF_A_VER"}},[e._v("NAV_TRAFF_A_VER")]),e._v(", with the UAV at it's center.\nThe traffic detector then checks if the time until intersection with the UAV airspace is below the "),a("a",{attrs:{href:"#NAV_TRAFF_COLL_T"}},[e._v("NAV_TRAFF_COLL_T")]),e._v(" threshold based on the relative speed.\nIf the both checks are true, the "),a("RouterLink",{attrs:{to:"/en/config/safety.html#traffic-avoidance-failsafe"}},[e._v("Traffic Avoidance Failsafe")]),e._v(" action is started, and the vehicle will either warn, land, or return.")],1),e._v(" "),a("p",[e._v("The code can be found in "),a("code",[e._v("Navigator::check_traffic")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/navigator/navigator_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/modules/navigator/navigator_main.cpp"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("p",[e._v("PX4 will also forward the transponder data to a GCS if this has been configured for the MAVLink instance (this is recommended).\nThe last 10 Digits of the GUID is displayed as Drone identification.")]),e._v(" "),a("h3",{attrs:{id:"utm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utm"}},[e._v("#")]),e._v(" UTM")]),e._v(" "),a("p",[e._v("PX4 listens for "),a("code",[e._v("UTM_GLOBAL_POSITION")]),e._v(" MAVLink messages during missions.\nWhen a valid message is received, its validity flags, position and heading are mapped into the same "),a("code",[e._v("transponder_report")]),e._v(" UORB topic used for "),a("em",[e._v("ADS-B traffic avoidance")]),e._v(".")]),e._v(" "),a("p",[e._v("The implementation is otherwise "),a("em",[e._v("exactly")]),e._v(" as described in the section above.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[e._v("UTM_GLOBAL_POSITION"),a("OutboundLink")],1),e._v(" contains additional fields that are not provided by an ADSB transponder (see "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADSB_VEHICLE"),a("OutboundLink")],1),e._v(").\nThe current implementation simply drops the additional fields (including information about the vehicle's planned next waypoint).")])]),e._v(" "),a("h2",{attrs:{id:"testing-simulated-adsb-traffic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-simulated-adsb-traffic"}},[e._v("#")]),e._v(" Testing/Simulated ADSB Traffic")]),e._v(" "),a("p",[e._v("You can simulate ADS-B traffic for testing.\nNote that this requires that you "),a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[e._v("Build PX4")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Simulated ADS-B traffic can trigger real failsafe actions.\nUse with care in real flight!")])]),e._v(" "),a("p",[e._v("To enable this feature:")]),e._v(" "),a("ol",[a("li",[e._v("Uncomment the code in "),a("code",[e._v("AdsbConflict::run_fake_traffic()")]),e._v("("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/adsb/AdsbConflict.cpp#L342C1-L342C1",target:"_blank",rel:"noopener noreferrer"}},[e._v("AdsbConflict.cpp"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("li",[e._v("Rebuild and run PX4.")]),e._v(" "),a("li",[e._v("Execute the "),a("RouterLink",{attrs:{to:"/en/modules/modules_controller.html#navigator"}},[a("code",[e._v("navigator fake_traffic")]),e._v(" command")]),e._v(" in the "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl MAVLink Shell"),a("OutboundLink")],1),e._v(" (or some other "),a("RouterLink",{attrs:{to:"/en/debug/consoles.html"}},[e._v("PX4 Console or MAVLink shell")]),e._v(", such as the PX4 simulator terminal).")],1)]),e._v(" "),a("p",[e._v("The code in "),a("code",[e._v("run_fake_traffic()")]),e._v(" is then executed.\nYou should see ADS-B warnings in the Console/MAVLink shell, and QGC should also show an ADS-B traffic popup.")]),e._v(" "),a("p",[e._v("By default "),a("code",[e._v("run_fake_traffic()")]),e._v(" publishes a number of traffic messages (it calls "),a("a",{attrs:{href:"#fake-traffic-method"}},[a("code",[e._v("AdsbConflict::fake_traffic()")])]),e._v(" to emit each report).\nThese simulate ADS-B traffic where there may be a conflict, where there won't be a conflict, as well as spamming the traffic buffer.")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Information about the test methods")]),e._v(" "),a("p",[e._v("The relevent methods are defined in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/adsb/AdsbConflict.cpp#L342C1-L342C1",target:"_blank",rel:"noopener noreferrer"}},[e._v("AdsbConflict.cpp"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"run-fake-traffic-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-fake-traffic-method"}},[e._v("#")]),e._v(" "),a("code",[e._v("run_fake_traffic()")]),e._v(" method")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("run_fake_traffic()")]),e._v(" method is run when the "),a("code",[e._v("navigator fake_traffic")]),e._v(" command is called.")]),e._v(" "),a("p",[e._v("The method calls the "),a("code",[e._v("fake_traffic()")]),e._v(" method to generate simulated transponder messages around the current vehicle position.\nIt passes in the current vehicle position, and information about the simulated traffic, such as callsign, distances, directions, altitude differences, velocities, and emitter types.")]),e._v(" "),a("p",[e._v("The (commented out) code in "),a("code",[e._v("run_fake_traffic()")]),e._v(" simulates a number of different scenarios, including conflicts and non-conflicts, as well as spamming the traffic buffer.")]),e._v(" "),a("h4",{attrs:{id:"fake-traffic-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fake-traffic-method"}},[e._v("#")]),e._v(" "),a("code",[e._v("fake_traffic()")]),e._v(" method")]),e._v(" "),a("p",[a("code",[e._v("AdsbConflict::fake_traffic()")]),e._v(" is called by the "),a("a",{attrs:{href:"#run-fake-traffic-method"}},[a("code",[e._v("run_fake_traffic()")])]),e._v(" to create individual ADS-B transponder reports.")]),e._v(" "),a("p",[e._v("This takes several parameters, which specify the characteristics of the fake traffic:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("callsign")]),e._v(": Callsign of the fake transponder.")]),e._v(" "),a("li",[a("code",[e._v("distance")]),e._v(": Horizontal distance to the fake vehicle from the current vehicle.")]),e._v(" "),a("li",[a("code",[e._v("direction")]),e._v(": Direction in NED from this vehicle to the fake in radians.")]),e._v(" "),a("li",[a("code",[e._v("traffic_heading")]),e._v(": Travel direction of the traffic in NED in radians.")]),e._v(" "),a("li",[a("code",[e._v("altitude_diff")]),e._v(": Altitude difference of the fake traffic. Positive is up.")]),e._v(" "),a("li",[a("code",[e._v("hor_velocity")]),e._v(": Horizontal velocity of fake traffic, in m/s.")]),e._v(" "),a("li",[a("code",[e._v("ver_velocity")]),e._v(": Vertical velocity of fake traffic, in m/s.")]),e._v(" "),a("li",[a("code",[e._v("emitter_type")]),e._v(": Type of fake vehicle, as an enumerated value.")]),e._v(" "),a("li",[a("code",[e._v("icao_address")]),e._v(": ICAO address.")]),e._v(" "),a("li",[a("code",[e._v("lat_uav")]),e._v(": Lat of this vehicle (used to position fake traffic around vehicle)")]),e._v(" "),a("li",[a("code",[e._v("on_uav")]),e._v(": Lon of this vehicle (used to position fake traffic around vehicle)")]),e._v(" "),a("li",[a("code",[e._v("alt_uav")]),e._v(": Altitude of the vehicle (as reference - used to position fake traffic around vehicle)")])]),e._v(" "),a("p",[e._v("The method creates a simulated transponder message near the vehicle, using following steps:")]),e._v(" "),a("ul",[a("li",[e._v("Calculates the latitude and longitude of the traffic based on the UAV's position, distance, and direction.")]),e._v(" "),a("li",[e._v("Computes the new altitude by adding the altitude difference to the UAV's altitude.")]),e._v(" "),a("li",[e._v("Populates a "),a("RouterLink",{attrs:{to:"/en/msg_docs/TransponderReport.html"}},[e._v("TransponderReport")]),e._v(" topic with the simulated traffic data.")],1),e._v(" "),a("li",[e._v("If the board supports a Universally Unique Identifier (UUID), the method retrieves the UUID using "),a("code",[e._v("board_get_px4_guid")]),e._v(" and copies it to the "),a("code",[e._v("uas_id")]),e._v(" field of the structure.\nOtherwise, it generates a simulated GUID.")]),e._v(" "),a("li",[e._v("Publishes the simulated traffic message using "),a("code",[e._v("orb_publish")]),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripherals")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[e._v("Serial Port Configuration")])],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);