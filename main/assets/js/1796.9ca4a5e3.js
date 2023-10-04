(window.webpackJsonp=window.webpackJsonp||[]).push([[1796],{3226:function(t,e,a){"use strict";a.r(e);var r=a(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Redirect",{attrs:{to:"../peripherals/adsb_flarm"}}),t._v(" "),a("h1",{attrs:{id:"air-traffic-avoidance-ads-b-flarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#air-traffic-avoidance-ads-b-flarm"}},[t._v("#")]),t._v(" Air Traffic Avoidance: ADS-B/FLARM")]),t._v(" "),a("p",[t._v("PX4 can use "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Automatic_dependent_surveillance_%E2%80%93_broadcast",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADS-B"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/FLARM",target:"_blank",rel:"noopener noreferrer"}},[t._v("FLARM"),a("OutboundLink")],1),t._v(" transponders to support simple air traffic avoidance in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("missions")]),t._v(". If a potential collision is detected, PX4 can "),a("em",[t._v("warn")]),t._v(", immediately "),a("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("land")]),t._v(", or "),a("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("return")]),t._v(" (depending on the value of "),a("a",{attrs:{href:"#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")]),t._v(").")],1),t._v(" "),a("p",[a("a",{attrs:{id:"supported_hardware"}})]),t._v(" "),a("h2",{attrs:{id:"supported-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[t._v("#")]),t._v(" Supported Hardware")]),t._v(" "),a("p",[t._v("PX4 traffic avoidance works with ADS-B or FLARM products that supply transponder data using the MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADSB_VEHICLE"),a("OutboundLink")],1),t._v(" message.")]),t._v(" "),a("p",[t._v("It has been tested with the following devices:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://uavionix.com/product/pingrx-pro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PingRX ADS-B Receiver"),a("OutboundLink")],1),t._v(" (uAvionix)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://flarm.com/products/uav/atom-uav-flarm-for-drones/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FLARM"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),a("p",[t._v("Either device can be connected to any free/unused serial port on the flight controller. Most commonly it they are connected to TELEM2 (if this is not being use for some other purpose).")]),t._v(" "),a("h3",{attrs:{id:"pingrx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pingrx"}},[t._v("#")]),t._v(" PingRX")]),t._v(" "),a("p",[t._v("The PingRX MAVLink port uses a JST ZHR-4 mating connector with pinout as shown below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pin")]),t._v(" "),a("th",[t._v("Signal")]),t._v(" "),a("th",[t._v("Volt")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (red)")]),t._v(" "),a("td",[t._v("RX (IN)")]),t._v(" "),a("td",[t._v("+5V tolerant")])]),t._v(" "),a("tr",[a("td",[t._v("2 (blk)")]),t._v(" "),a("td",[t._v("TX (OUT)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("3 (blk)")]),t._v(" "),a("td",[t._v("Power")]),t._v(" "),a("td",[t._v("+4 to 6V")])]),t._v(" "),a("tr",[a("td",[t._v("4 (blk)")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("p",[t._v("The PingRX comes with connector cable that can be attached directly to the TELEM2 port (DF13-6P) on an "),a("RouterLink",{attrs:{to:"/zh/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk")]),t._v(". For other ports or boards, you will need to obtain your own cable.")],1),t._v(" "),a("h2",{attrs:{id:"flarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flarm"}},[t._v("#")]),t._v(" FLARM")]),t._v(" "),a("p",[t._v("FLARM has an on-board DF-13 6 Pin connector that has an identical pinout to the "),a("RouterLink",{attrs:{to:"/zh/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk")]),t._v(".")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pin")]),t._v(" "),a("th",[t._v("Signal")]),t._v(" "),a("th",[t._v("Volt")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (red)")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("+4V to +36V")])]),t._v(" "),a("tr",[a("td",[t._v("2 (blk)")]),t._v(" "),a("td",[t._v("TX (OUT)")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("3 (blk)")]),t._v(" "),a("td",[t._v("RX (IN)")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("4 (blk)")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("5 (blk)")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("6 (blk)")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The TX and RX on the flight controller must be connected to the RX and TX on the FLARM, respectively.")])]),t._v(" "),a("h2",{attrs:{id:"software-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-configuration"}},[t._v("#")]),t._v(" Software Configuration")]),t._v(" "),a("h3",{attrs:{id:"port-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port-configuration"}},[t._v("#")]),t._v(" Port Configuration")]),t._v(" "),a("p",[t._v("Flarm/PingRX are configured in the same way as any other "),a("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripheral")]),t._v(". The only "),a("em",[t._v("specific")]),t._v(" setup is that the port baud rate must be set to 57600 and the a low-bandwidth profile ("),a("code",[t._v("MAV_X_MODE")]),t._v(").")],1),t._v(" "),a("p",[t._v("Assuming you have connected the device to the TELEM2 port, "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("set the parameters")]),t._v(" as shown:")],1),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" = TELEM 2")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" = Normal")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_RATE"}},[t._v("MAV_1_RATE")]),t._v(" = 0 (default sending rate for port).")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_FORWARD"}},[t._v("MAV_1_FORWARD")]),t._v(" = Enabled")],1)]),t._v(" "),a("p",[t._v("Then reboot the vehicle.")]),t._v(" "),a("p",[t._v("You will now find a new parameter called "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(", which must be set to 57600.")],1),t._v(" "),a("h3",{attrs:{id:"configure-traffic-avoidance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-traffic-avoidance"}},[t._v("#")]),t._v(" Configure Traffic Avoidance")]),t._v(" "),a("p",[t._v("Configure the action when there is a potential collision using the parameter below:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_AVOID"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")])],1),t._v(" "),a("td",[t._v("Enable traffic avoidance mode specify avoidance response. 0: Disable, 1: Warn only, 2: Return mode, 3: Land mode.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_A_HOR"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_A_HOR"}},[t._v("NAV_TRAFF_A_HOR")])],1),t._v(" "),a("td",[t._v("Horizonal radius of cylinder around the vehicle that defines its airspace (i.e. the airspace in the ground plane).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_A_VER"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_A_VER"}},[t._v("NAV_TRAFF_A_VER")])],1),t._v(" "),a("td",[t._v("Vertical height above and below vehicle of the cylinder that defines its airspace (also see "),a("a",{attrs:{href:"#NAV_TRAFF_A_HOR"}},[t._v("NAV_TRAFF_A_HOR")]),t._v(").")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_COLL_T"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_COLL_T"}},[t._v("NAV_TRAFF_COLL_T")])],1),t._v(" "),a("td",[t._v("Collision time threshold. Avoidance will trigger if the estimated time until collision drops below this value (the estimated time is based on relative speed of traffic and UAV).")])])])]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("PX4 listens for valid transponder reports during missions.")]),t._v(" "),a("p",[t._v("If a valid transponder report is received, PX4 first uses the traffic transponder information to estimate whether the traffic heading and height indicates there will be an intersection with the airspace of the UAV. The UAV airspace consists of a surrounding cylinder defined by the radius "),a("a",{attrs:{href:"#NAV_TRAFF_A_HOR"}},[t._v("NAV_TRAFF_A_HOR")]),t._v(" and height "),a("a",{attrs:{href:"#NAV_TRAFF_A_VER"}},[t._v("NAV_TRAFF_A_VER")]),t._v(", with the UAV at it's center. The traffic detector then checks if the time until intersection with the UAV airspace is below the "),a("a",{attrs:{href:"#NAV_TRAFF_COLL_T"}},[t._v("NAV_TRAFF_COLL_T")]),t._v(" threshold based on the relative speed. If the both checks are true, the "),a("RouterLink",{attrs:{to:"/zh/config/safety.html#traffic-avoidance-failsafe"}},[t._v("Traffic Avoidance Failsafe")]),t._v(" action is started, and the vehicle will either warn, land, or return.")],1),t._v(" "),a("p",[t._v("The code can be found in "),a("code",[t._v("Navigator::check_traffic")]),t._v(" ("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/navigator/navigator_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("/src/modules/navigator/navigator_main.cpp"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[t._v("PX4 will also forward the transponder data to a GCS if this has been configured for the MAVLink instance (this is recommended). The last 10 Digits of the GUID is displayed as Drone identification.")]),t._v(" "),a("h2",{attrs:{id:"testing-simulated-adsb-traffic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-simulated-adsb-traffic"}},[t._v("#")]),t._v(" Testing/Simulated ADSB Traffic")]),t._v(" "),a("p",[t._v("You can simulate ADS-B traffic for testing. Note that this requires that you "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("Build PX4")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Simulated ADS-B traffic can trigger real failsafe actions.\nUse with care in real flight!")])]),t._v(" "),a("p",[t._v("To enable this feature:")]),t._v(" "),a("ol",[a("li",[t._v("Uncomment the code in "),a("code",[t._v("AdsbConflict::run_fake_traffic()")]),t._v("("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/adsb/AdsbConflict.cpp#L342C1-L342C1",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdsbConflict.cpp"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("li",[t._v("Rebuild and run PX4.")]),t._v(" "),a("li",[t._v("Execute the "),a("RouterLink",{attrs:{to:"/zh/modules/modules_controller.html#navigator"}},[a("code",[t._v("navigator fake_traffic")]),t._v(" command")]),t._v(" in the "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl MAVLink Shell"),a("OutboundLink")],1),t._v(" (or some other "),a("RouterLink",{attrs:{to:"/zh/debug/consoles.html"}},[t._v("PX4 Console or MAVLink shell")]),t._v(", such as the PX4 simulator terminal).")],1)]),t._v(" "),a("p",[t._v("The code in "),a("code",[t._v("run_fake_traffic()")]),t._v(" is then executed. You should see ADS-B warnings in the Console/MAVLink shell, and QGC should also show an ADS-B traffic popup.")]),t._v(" "),a("p",[t._v("By default "),a("code",[t._v("run_fake_traffic()")]),t._v(" publishes a number of traffic messages (it calls "),a("a",{attrs:{href:"#fake-traffic-method"}},[a("code",[t._v("AdsbConflict::fake_traffic()")])]),t._v(" to emit each report). These simulate ADS-B traffic where there may be a conflict, where there won't be a conflict, as well as spamming the traffic buffer.")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("DETAILS")]),t._v(" "),a("p",[t._v("Information about the test methods")]),t._v(" "),a("p",[t._v("The relevent methods are defined in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/adsb/AdsbConflict.cpp#L342C1-L342C1",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdsbConflict.cpp"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"run-fake-traffic-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-fake-traffic-method"}},[t._v("#")]),t._v(" "),a("code",[t._v("run_fake_traffic()")]),t._v(" method")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("run_fake_traffic()")]),t._v(" method is run when the "),a("code",[t._v("navigator fake_traffic")]),t._v(" command is called.")]),t._v(" "),a("p",[t._v("The method calls the "),a("code",[t._v("fake_traffic()")]),t._v(" method to generate simulated transponder messages around the current vehicle position. It passes in the current vehicle position, and information about the simulated traffic, such as callsign, distances, directions, altitude differences, velocities, and emitter types.")]),t._v(" "),a("p",[t._v("The (commented out) code in "),a("code",[t._v("run_fake_traffic()")]),t._v(" simulates a number of different scenarios, including conflicts and non-conflicts, as well as spamming the traffic buffer.")]),t._v(" "),a("h4",{attrs:{id:"fake-traffic-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fake-traffic-method"}},[t._v("#")]),t._v(" "),a("code",[t._v("fake_traffic()")]),t._v(" method")]),t._v(" "),a("p",[a("code",[t._v("AdsbConflict::fake_traffic()")]),t._v(" is called by the "),a("a",{attrs:{href:"#run-fake-traffic-method"}},[a("code",[t._v("run_fake_traffic()")])]),t._v(" to create individual ADS-B transponder reports.")]),t._v(" "),a("p",[t._v("This takes several parameters, which specify the characteristics of the fake traffic:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("callsign")]),t._v(": Callsign of the fake transponder.")]),t._v(" "),a("li",[a("code",[t._v("distance")]),t._v(": Horizontal distance to the fake vehicle from the current vehicle.")]),t._v(" "),a("li",[a("code",[t._v("direction")]),t._v(": Direction in NED from this vehicle to the fake in radians.")]),t._v(" "),a("li",[a("code",[t._v("traffic_heading")]),t._v(": Travel direction of the traffic in NED in radians.")]),t._v(" "),a("li",[a("code",[t._v("altitude_diff")]),t._v(": Altitude difference of the fake traffic. Positive is up.")]),t._v(" "),a("li",[a("code",[t._v("hor_velocity")]),t._v(": Horizontal velocity of fake traffic, in m/s.")]),t._v(" "),a("li",[a("code",[t._v("ver_velocity")]),t._v(": Vertical velocity of fake traffic, in m/s.")]),t._v(" "),a("li",[a("code",[t._v("emitter_type")]),t._v(": Type of fake vehicle, as an enumerated value.")]),t._v(" "),a("li",[a("code",[t._v("icao_address")]),t._v(": ICAO address.")]),t._v(" "),a("li",[a("code",[t._v("lat_uav")]),t._v(": Lat of this vehicle (used to position fake traffic around vehicle)")]),t._v(" "),a("li",[a("code",[t._v("on_uav")]),t._v(": Lon of this vehicle (used to position fake traffic around vehicle)")]),t._v(" "),a("li",[a("code",[t._v("alt_uav")]),t._v(": Altitude of the vehicle (as reference - used to position fake traffic around vehicle)")])]),t._v(" "),a("p",[t._v("The method creates a simulated transponder message near the vehicle, using following steps:")]),t._v(" "),a("ul",[a("li",[t._v("Calculates the latitude and longitude of the traffic based on the UAV's position, distance, and direction.")]),t._v(" "),a("li",[t._v("Computes the new altitude by adding the altitude difference to the UAV's altitude.")]),t._v(" "),a("li",[t._v("Populates a "),a("RouterLink",{attrs:{to:"/zh/msg_docs/TransponderReport.html"}},[t._v("TransponderReport")]),t._v(" topic with the simulated traffic data.")],1),t._v(" "),a("li",[t._v("If the board supports a Universally Unique Identifier (UUID), the method retrieves the UUID using "),a("code",[t._v("board_get_px4_guid")]),t._v(" and copies it to the "),a("code",[t._v("uas_id")]),t._v(" field of the structure. Otherwise, it generates a simulated GUID.")]),t._v(" "),a("li",[t._v("Publishes the simulated traffic message using "),a("code",[t._v("orb_publish")]),t._v(".")])])]),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("Serial Port Configuration")])],1)])],1)}),[],!1,null,null,null);e.default=i.exports}}]);