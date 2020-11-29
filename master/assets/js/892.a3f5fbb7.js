(window.webpackJsonp=window.webpackJsonp||[]).push([[892],{1848:function(t,e,a){"use strict";a.r(e);var r=a(18),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"air-traffic-avoidance-ads-b-flarm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#air-traffic-avoidance-ads-b-flarm"}},[t._v("#")]),t._v(" Air Traffic Avoidance: ADS-B/FLARM")]),t._v(" "),r("p",[t._v("PX4 can use "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Automatic_dependent_surveillance_%E2%80%93_broadcast",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADS-B"),r("OutboundLink")],1),t._v(" or "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/FLARM",target:"_blank",rel:"noopener noreferrer"}},[t._v("FLARM"),r("OutboundLink")],1),t._v(" transponders to support simple air traffic avoidance in "),r("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("missions")]),t._v(". If a potential collision is detected, PX4 can "),r("em",[t._v("warn")]),t._v(", immediately "),r("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("land")]),t._v(", or "),r("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("return")]),t._v(" (depending on the value of "),r("a",{attrs:{href:"#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")]),t._v(").")],1),t._v(" "),r("p",[r("span",{attrs:{id:"supported_hardware"}})]),t._v(" "),r("h2",{attrs:{id:"supported-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[t._v("#")]),t._v(" Supported Hardware")]),t._v(" "),r("p",[t._v("PX4 traffic avoidance works with ADS-B or FLARM products that supply transponder data using the MAVLink "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADSB_VEHICLE"),r("OutboundLink")],1),t._v(" message.")]),t._v(" "),r("p",[t._v("It has been tested with the following devices:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://uavionix.com/product/pingrx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PingRX ADS-B Receiver"),r("OutboundLink")],1),t._v(" (uAvionix)")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://flarm.com/products/powerflarm/uav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FLARM"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"hardware-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),r("p",[t._v("Either device can can be connected to any free/unused serial port on the flight controller. Most commonly it they are connected to TELEM2 (if this is not being use for some other purpose).")]),t._v(" "),r("h3",{attrs:{id:"pingrx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pingrx"}},[t._v("#")]),t._v(" PingRX")]),t._v(" "),r("p",[t._v("The PingRX MAVLink port uses a JST ZHR-4 mating connector with pinout as shown below.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Volt")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1 (red)")]),t._v(" "),r("td",[t._v("RX (IN)")]),t._v(" "),r("td",[t._v("+5V tolerant")])]),t._v(" "),r("tr",[r("td",[t._v("2 (blk)")]),t._v(" "),r("td",[t._v("TX (OUT)")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("3 (blk)")]),t._v(" "),r("td",[t._v("Power")]),t._v(" "),r("td",[t._v("+4 to 6V")])]),t._v(" "),r("tr",[r("td",[t._v("4 (blk)")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("p",[t._v("The PingRX comes with connector cable that can be attached directly to the TELEM2 port (DF13-6P) on an "),r("RouterLink",{attrs:{to:"/ko/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk")]),t._v(". For other ports or boards, you will need to obtain your own cable.")],1),t._v(" "),r("h2",{attrs:{id:"flarm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flarm"}},[t._v("#")]),t._v(" FLARM")]),t._v(" "),r("p",[t._v("FLARM has an on-board DF-13 6 Pin connector that has an identical pinout to the "),r("RouterLink",{attrs:{to:"/ko/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk")]),t._v(".")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Volt")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1 (red)")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+4V to +36V")])]),t._v(" "),r("tr",[r("td",[t._v("2 (blk)")]),t._v(" "),r("td",[t._v("TX (OUT)")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("3 (blk)")]),t._v(" "),r("td",[t._v("RX (IN)")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("4 (blk)")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("5 (blk)")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("6 (blk)")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" The TX and RX on the flight controller must be connected to the RX and TX on the FLARM, respectively.")])]),t._v(" "),r("h2",{attrs:{id:"software-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software-configuration"}},[t._v("#")]),t._v(" Software Configuration")]),t._v(" "),r("h3",{attrs:{id:"port-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#port-configuration"}},[t._v("#")]),t._v(" Port Configuration")]),t._v(" "),r("p",[t._v("Flarm/PingRX are configured in the same way as any other "),r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripheral")]),t._v(". The only "),r("em",[t._v("specific")]),t._v(" setup is that the port baud rate must be set to 57600 and the a low-bandwidth profile ("),r("code",[t._v("MAV_X_MODE")]),t._v(").")],1),t._v(" "),r("p",[t._v("Assuming you have connected the device to the TELEM2 port, "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("set the parameters")]),t._v(" as shown:")],1),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" = TELEM 2")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" = Normal")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_RATE"}},[t._v("MAV_1_RATE")]),t._v(" = 0 (default sending rate for port).")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_FORWARD"}},[t._v("MAV_1_FORWARD")]),t._v(" = Enabled")],1)]),t._v(" "),r("p",[t._v("Then reboot the vehicle.")]),t._v(" "),r("p",[t._v("You will now find a new parameter called "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(", which must be set to 57600.")],1),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" Prior to PX4 v1.9 you can set up the port using the deprecated parameter: "),r("code",[t._v("SYS_COMPANION")]),t._v(".")])]),t._v(" "),r("h3",{attrs:{id:"configure-traffic-avoidance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-traffic-avoidance"}},[t._v("#")]),t._v(" Configure Traffic Avoidance")]),t._v(" "),r("p",[t._v("Configure the action when there is a potential collision using the parameter below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("!!crwdBlockTags_5_sgaTkcolBdwrc!"),r("img",{attrs:{src:a(426)+"#NAV_TRAFF_AVOID",alt:"NAV_TRAFF_AVOID"}})]),t._v(" "),r("td",[t._v("Enable traffic avoidance mode specify avoidance response. 0: Disable, 1: Warn only, 2: Return mode, 3: Land mode.")])]),t._v(" "),r("tr",[r("td",[t._v("!!crwdBlockTags_6_sgaTkcolBdwrc!"),r("img",{attrs:{src:a(426)+"#NAV_TRAFF_A_RADM",alt:"NAV_TRAFF_A_RADM"}})]),t._v(" "),r("td",[t._v("Set traffic avoidance distance for "),r("em",[t._v("manned")]),t._v(" aviation")])]),t._v(" "),r("tr",[r("td",[t._v("!!crwdBlockTags_7_sgaTkcolBdwrc!"),r("img",{attrs:{src:a(426)+"#NAV_TRAFF_A_RADU",alt:"NAV_TRAFF_A_RADU"}})]),t._v(" "),r("td",[t._v("Set traffic avoidance distance for "),r("em",[t._v("unmanned")]),t._v(" aviation")])])])]),t._v(" "),r("h2",{attrs:{id:"implementation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),r("p",[t._v("PX4 listens for valid transponder reports during missions.")]),t._v(" "),r("p",[t._v("If a valid transponder report is received, PX4 first uses the transponder position and heading information to estimate whether the vehicles will share a similar altitude before they pass each other. If they may then PX4 it estimates how the closest distance between the path to the next waypoint and the other vehicles predicted path. If the crossing point is less than the configured distance for altitude and path, the "),r("RouterLink",{attrs:{to:"/ko/config/safety.html#traffic-avoidance-failsafe"}},[t._v("Traffic Avoidance Failsafe")]),t._v(" action is started, and the vehicle will either warn, land, or return. The detection distance can be configured separately for manned and unmanned aviation.")],1),t._v(" "),r("p",[t._v("The code can be found in "),r("code",[t._v("Navigator::check_traffic")]),t._v(" ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/navigator/navigator_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("/src/modules/navigator/navigator_main.cpp"),r("OutboundLink")],1),t._v(").")]),t._v(" "),r("p",[t._v("PX4 will also forward the transponder data to a GCS if this has been configured for the MAVLink instance (this is recommended). The last 10 Digits of the GUID is displayed as Drone identification.")]),t._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("Serial Port Configuration")])],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);