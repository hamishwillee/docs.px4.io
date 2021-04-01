(window.webpackJsonp=window.webpackJsonp||[]).push([[1137],{2336:function(t,e,a){"use strict";a.r(e);var r=a(18),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"air-traffic-avoidance-ads-b-flarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#air-traffic-avoidance-ads-b-flarm"}},[t._v("#")]),t._v(" Air Traffic Avoidance: ADS-B/FLARM")]),t._v(" "),a("p",[t._v("PX4 can use "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Automatic_dependent_surveillance_%E2%80%93_broadcast",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADS-B"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/FLARM",target:"_blank",rel:"noopener noreferrer"}},[t._v("FLARM"),a("OutboundLink")],1),t._v(" transponders to support simple air traffic avoidance in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("missions")]),t._v(". If a potential collision is detected, PX4 can "),a("em",[t._v("warn")]),t._v(", immediately "),a("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("land")]),t._v(", or "),a("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("return")]),t._v(" (depending on the value of "),a("a",{attrs:{href:"#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")]),t._v(").")],1),t._v(" "),a("p",[a("span",{attrs:{id:"supported_hardware"}})]),t._v(" "),a("h2",{attrs:{id:"supported-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[t._v("#")]),t._v(" Supported Hardware")]),t._v(" "),a("p",[t._v("PX4 traffic avoidance works with ADS-B or FLARM products that supply transponder data using the MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADSB_VEHICLE"),a("OutboundLink")],1),t._v(" message.")]),t._v(" "),a("p",[t._v("It has been tested with the following devices:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://uavionix.com/product/pingrx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PingRX ADS-B Receiver"),a("OutboundLink")],1),t._v(" (uAvionix)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://flarm.com/products/powerflarm/uav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FLARM"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),a("p",[t._v("Either device can be connected to any free/unused serial port on the flight controller. Most commonly it they are connected to TELEM2 (if this is not being use for some other purpose).")]),t._v(" "),a("h3",{attrs:{id:"pingrx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pingrx"}},[t._v("#")]),t._v(" PingRX")]),t._v(" "),a("p",[t._v("The PingRX MAVLink port uses a JST ZHR-4 mating connector with pinout as shown below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pin")]),t._v(" "),a("th",[t._v("Signal")]),t._v(" "),a("th",[t._v("Volt")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (red)")]),t._v(" "),a("td",[t._v("RX (IN)")]),t._v(" "),a("td",[t._v("+5V tolerant")])]),t._v(" "),a("tr",[a("td",[t._v("2 (blk)")]),t._v(" "),a("td",[t._v("TX (OUT)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("3 (blk)")]),t._v(" "),a("td",[t._v("Power")]),t._v(" "),a("td",[t._v("+4 to 6V")])]),t._v(" "),a("tr",[a("td",[t._v("4 (blk)")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("p",[t._v("The PingRX comes with connector cable that can be attached directly to the TELEM2 port (DF13-6P) on an "),a("RouterLink",{attrs:{to:"/zh/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk")]),t._v(". For other ports or boards, you will need to obtain your own cable.")],1),t._v(" "),a("h2",{attrs:{id:"flarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flarm"}},[t._v("#")]),t._v(" FLARM")]),t._v(" "),a("p",[t._v("FLARM has an on-board DF-13 6 Pin connector that has an identical pinout to the "),a("RouterLink",{attrs:{to:"/zh/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk")]),t._v(".")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pin")]),t._v(" "),a("th",[t._v("Signal")]),t._v(" "),a("th",[t._v("Volt")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (red)")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("+4V to +36V")])]),t._v(" "),a("tr",[a("td",[t._v("2 (blk)")]),t._v(" "),a("td",[t._v("TX (OUT)")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("3 (blk)")]),t._v(" "),a("td",[t._v("RX (IN)")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("4 (blk)")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("5 (blk)")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("6 (blk)")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The TX and RX on the flight controller must be connected to the RX and TX on the FLARM, respectively.")])]),t._v(" "),a("h2",{attrs:{id:"software-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-configuration"}},[t._v("#")]),t._v(" Software Configuration")]),t._v(" "),a("h3",{attrs:{id:"port-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port-configuration"}},[t._v("#")]),t._v(" Port Configuration")]),t._v(" "),a("p",[t._v("Flarm/PingRX are configured in the same way as any other "),a("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripheral")]),t._v(". The only "),a("em",[t._v("specific")]),t._v(" setup is that the port baud rate must be set to 57600 and the a low-bandwidth profile ("),a("code",[t._v("MAV_X_MODE")]),t._v(").")],1),t._v(" "),a("p",[t._v("Assuming you have connected the device to the TELEM2 port, "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("set the parameters")]),t._v(" as shown:")],1),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" = TELEM 2")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" = Normal")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_RATE"}},[t._v("MAV_1_RATE")]),t._v(" = 0 (default sending rate for port).")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_FORWARD"}},[t._v("MAV_1_FORWARD")]),t._v(" = Enabled")],1)]),t._v(" "),a("p",[t._v("Then reboot the vehicle.")]),t._v(" "),a("p",[t._v("You will now find a new parameter called "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(", which must be set to 57600.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Prior to PX4 v1.9 you can set up the port using the deprecated parameter: "),a("code",[t._v("SYS_COMPANION")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"configure-traffic-avoidance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-traffic-avoidance"}},[t._v("#")]),t._v(" Configure Traffic Avoidance")]),t._v(" "),a("p",[t._v("Configure the action when there is a potential collision using the parameter below:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"NAV_TRAFF_AVOID"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")])],1),t._v(" "),a("td",[t._v("Enable traffic avoidance mode specify avoidance response. 0: Disable, 1: Warn only, 2: Return mode, 3: Land mode.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"NAV_TRAFF_A_RADM"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_A_RADM"}},[t._v("NAV_TRAFF_A_RADM")])],1),t._v(" "),a("td",[t._v("Set traffic avoidance distance for "),a("em",[t._v("manned")]),t._v(" aviation")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"NAV_TRAFF_A_RADU"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_A_RADU"}},[t._v("NAV_TRAFF_A_RADU")])],1),t._v(" "),a("td",[t._v("Set traffic avoidance distance for "),a("em",[t._v("unmanned")]),t._v(" aviation")])])])]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("PX4 listens for valid transponder reports during missions.")]),t._v(" "),a("p",[t._v("If a valid transponder report is received, PX4 first uses the transponder position and heading information to estimate whether the vehicles will share a similar altitude before they pass each other. If they may then PX4 it estimates how the closest distance between the path to the next waypoint and the other vehicles predicted path. If the crossing point is less than the configured distance for altitude and path, the "),a("RouterLink",{attrs:{to:"/zh/config/safety.html#traffic-avoidance-failsafe"}},[t._v("Traffic Avoidance Failsafe")]),t._v(" action is started, and the vehicle will either warn, land, or return. The detection distance can be configured separately for manned and unmanned aviation.")],1),t._v(" "),a("p",[t._v("The code can be found in "),a("code",[t._v("Navigator::check_traffic")]),t._v(" ("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/navigator/navigator_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("/src/modules/navigator/navigator_main.cpp"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[t._v("PX4 will also forward the transponder data to a GCS if this has been configured for the MAVLink instance (this is recommended). The last 10 Digits of the GUID is displayed as Drone identification.")]),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("Serial Port Configuration")])],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);