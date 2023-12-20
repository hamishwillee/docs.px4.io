(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{1438:function(e,t,r){e.exports=r.p+"assets/img/serial_port_connector.478cdb5f.jpg"},1439:function(e,t,r){e.exports=r.p+"assets/img/holybro_remote_id_pinout.91890914.jpg"},2404:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"remote-id-open-drone-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remote-id-open-drone-id"}},[e._v("#")]),e._v(" Remote ID (Open Drone ID)")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Experimental")]),e._v(" "),o("p",[e._v("Remote ID support is experimental.")])]),e._v(" "),o("p",[e._v("Remote ID is a government mandated technology for UAVs in Japan, the United States of America and the European Union, designed to enable safe sharing of airspace between UAVs and other aircraft.\nThe specification requires that UAVs broadcast data such as: real-time location/altitude, serial number, operator ID/location, status, etc.")]),e._v(" "),o("p",[e._v("PX4 works with Remote ID modules that target the FAA "),o("a",{attrs:{href:"https://www.faa.gov/uas/getting_started/remote_id",target:"_blank",rel:"noopener noreferrer"}},[e._v("standard Remote ID rules"),o("OutboundLink")],1),e._v('.\nThese are designed to be integrated into the vehicle, and broadcast Open Drone ID messages using id, position, and other information that is supplied by an autopilot.\nThe "standard rules" modules enable less restrictive operation than "broadcast rules" modules, which are standalone modules with an integrated GPS that do not have any communication with the autopilot.')]),e._v(" "),o("h2",{attrs:{id:"supported-hardware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported Hardware")]),e._v(" "),o("p",[e._v("PX4 integrates with Remote ID hardware that supports the "),o("a",{attrs:{href:"https://mavlink.io/en/services/opendroneid.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Drone ID"),o("OutboundLink")],1),e._v(" MAVLink protocol (Open Drone ID is an open source implementation of Remote ID).")]),e._v(" "),o("p",[e._v("It has been tested with the following devices:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/cube-id/cube-id",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cube ID"),o("OutboundLink")],1),e._v(" (CubePilot)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://dronescout.co/dronebeacon-mavlink-remote-id-transponder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Db201"),o("OutboundLink")],1),e._v(" (BlueMark)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://dronescout.co/dronebeacon-mavlink-remote-id-transponder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Db202mav"),o("OutboundLink")],1),e._v(" (BlueMark) - less expensive variant without CAN port.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://holybro.com/products/remote-id",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro RemoteID Module"),o("OutboundLink")],1),e._v(" (Holybro)")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("ul",[o("li",[e._v("Other devices that support the MAVLink API should work (but have not been tested).")]),e._v(" "),o("li",[e._v("PX4 does not support Remote ID over CAN in PX4 v1.14.")])])]),e._v(" "),o("h2",{attrs:{id:"hardware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),o("p",[e._v("Remote ID devices can be connected to any free/unused serial port on the flight controller.\nMost commonly they are connected directly to the "),o("code",[e._v("TELEM2")]),e._v(' port (if it is not being use for some other purpose) as this is already configured for MAVLink "by default".')]),e._v(" "),o("h3",{attrs:{id:"cube-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cube-id"}},[e._v("#")]),e._v(" Cube ID")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/cube-id/cube-id",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cube ID"),o("OutboundLink")],1),e._v(" can be connected using its serial port (DroneCAN cannot be used).\nIt comes with a 6-pin JST-GH 1.25mm cable that can be connected directly to the "),o("code",[e._v("TELEM")]),e._v(" ports on most recent Pixhawk flight controllers.")]),e._v(" "),o("p",[e._v("If using a different port, or a flight controller that has different connector, you may need to modify the cable.\nThe pinout of the serial port is shown below.\nThe TX and RX on the flight controller must be connected to the RX and TX on the Remote ID, respectively.")]),e._v(" "),o("h4",{attrs:{id:"cube-id-serial-port"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cube-id-serial-port"}},[e._v("#")]),e._v(" Cube ID Serial Port")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1438),alt:"Cube ID serial port"}})]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Pin")]),e._v(" "),o("th",[e._v("Signal")]),e._v(" "),o("th",[e._v("Volt")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("1 (red)")]),e._v(" "),o("td",[e._v("VCC_5V")]),e._v(" "),o("td",[e._v("5V")])]),e._v(" "),o("tr",[o("td",[e._v("2 (blk)")]),e._v(" "),o("td",[e._v("TX (OUT)")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[e._v("3 (blk)")]),e._v(" "),o("td",[e._v("RX (IN)")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[e._v("4 (blk)")]),e._v(" "),o("td",[e._v("GND")]),e._v(" "),o("td",[e._v("0")])])])]),e._v(" "),o("h4",{attrs:{id:"cube-id-firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cube-id-firmware"}},[e._v("#")]),e._v(" Cube ID Firmware")]),e._v(" "),o("p",[e._v("The Cube ID uses proprietary firmware (not "),o("a",{attrs:{href:"https://github.com/ArduPilot/ArduRemoteID",target:"_blank",rel:"noopener noreferrer"}},[e._v("ArduRemoteID"),o("OutboundLink")],1),e._v(" like some other remote id beacons).\nThis firmware does not currently set "),o("code",[e._v("OPEN_DRONE_ID_ARM_STATUS")]),e._v(" flags if an Open Drone ID message error is detected.")]),e._v(" "),o("p",[e._v("For firmware update instructions see "),o("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/cube-id/cube-id#updating",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cube ID > Updating"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"bluemark-db201-db202mav"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bluemark-db201-db202mav"}},[e._v("#")]),e._v(" BlueMark Db201/Db202mav")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://dronescout.co/dronebeacon-mavlink-remote-id-transponder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Db201"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://dronescout.co/dronebeacon-mavlink-remote-id-transponder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Db202mav"),o("OutboundLink")],1),e._v(" can be connected using their serial port (DroneCAN cannot be used).\nThey come with a 6-pin JST-GH 1.25mm cable that can be connected directly to the "),o("code",[e._v("TELEM")]),e._v(" ports on most recent Pixhawk flight controllers.")]),e._v(" "),o("p",[e._v("If using a different serial port (i.e. with fewer pins), or a flight controller that has different connector, you may need to modify the cable.\nInformation on the port pinout can be found in the "),o("a",{attrs:{href:"https://download.bluemark.io/db200.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("User Guide"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The beacons come preinstalled with recent "),o("a",{attrs:{href:"https://github.com/ArduPilot/ArduRemoteID",target:"_blank",rel:"noopener noreferrer"}},[e._v("ArduRemoteID"),o("OutboundLink")],1),e._v(" firmware.\nThe "),o("a",{attrs:{href:"https://download.bluemark.io/db200.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("User Guide"),o("OutboundLink")],1),e._v(" explains how you can update firmware via the web interface, if needed.")]),e._v(" "),o("p",[e._v("More general setup, including how to mount the beacon, is also covered in the "),o("a",{attrs:{href:"https://download.bluemark.io/db200.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("User Guide"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"holybro-remote-id-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#holybro-remote-id-module"}},[e._v("#")]),e._v(" Holybro Remote ID Module")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://holybro.com/products/remote-id",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Remote ID Module"),o("OutboundLink")],1),e._v(" can be connected using the serial port (DroneCAN cannot be used at time of writing: PX4 v1.14).\nIt comes with a 6-pin JST-GH 1.25mm cable that can be connected directly to the "),o("code",[e._v("TELEM")]),e._v(" ports on most recent Pixhawk flight controllers such as the Pixhawk 6C/6X or Cube Orange.")]),e._v(" "),o("p",[e._v("The module comes preinstalled with recent "),o("a",{attrs:{href:"https://github.com/ArduPilot/ArduRemoteID",target:"_blank",rel:"noopener noreferrer"}},[e._v("ArduRemoteID"),o("OutboundLink")],1),e._v(" firmware.\nThe "),o("a",{attrs:{href:"https://docs.holybro.com/radio/remote-id",target:"_blank",rel:"noopener noreferrer"}},[e._v("User Guide"),o("OutboundLink")],1),e._v(" explains how you can config and update firmware via the web interface, if needed.")]),e._v(" "),o("h4",{attrs:{id:"holybro-pinouts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pinouts"}},[e._v("#")]),e._v(" Holybro Pinouts")]),e._v(" "),o("p",[e._v("Note that CAN port not supported in PX4 v1.14")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1439),alt:"Holybro Remote ID Pinouts"}})]),e._v(" "),o("h2",{attrs:{id:"px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),o("h3",{attrs:{id:"port-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#port-configuration"}},[e._v("#")]),e._v(" Port Configuration")]),e._v(" "),o("p",[e._v("Remote ID hardware is configured in the same way as any other "),o("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripheral")]),e._v(".")],1),e._v(" "),o("p",[e._v("Assuming you have connected the device to the "),o("code",[e._v("TELEM2")]),e._v(" port, "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("set the parameters")]),e._v(" as shown:")],1),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[e._v("MAV_1_CONFIG")]),e._v(" = "),o("code",[e._v("TELEM 2")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_MODE"}},[e._v("MAV_1_MODE")]),e._v(" = Normal")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_RATE"}},[e._v("MAV_1_RATE")]),e._v(" = 0 (default sending rate for port).")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_FORWARD"}},[e._v("MAV_1_FORWARD")]),e._v(" = Enabled")],1)]),e._v(" "),o("p",[e._v("Then reboot the vehicle.")]),e._v(" "),o("p",[e._v("You will now find a new parameter called "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[e._v("SER_TEL2_BAUD")]),e._v(".\nThe required baud rate depends on the remote ID used (for Cube ID it must be set to 57600).")],1),e._v(" "),o("h3",{attrs:{id:"enable-remote-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-remote-id"}},[e._v("#")]),e._v(" Enable Remote ID")]),e._v(" "),o("p",[e._v("There is no need to explicitly enable Remote ID (supported Remote ID messages are either streamed by default or must be requested in the current implementation, even if no remote ID is connected).")]),e._v(" "),o("h3",{attrs:{id:"prevent-arming-based-on-remote-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prevent-arming-based-on-remote-id"}},[e._v("#")]),e._v(" Prevent Arming based on Remote ID")]),e._v(" "),o("p",[e._v("To only allow arming when a Remote ID is ready, "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html#conditional-parameters"}},[e._v("set")]),e._v(" the parameter "),o("a",{attrs:{href:"#COM_ARM_ODID"}},[e._v("COM_ARM_ODID")]),e._v(" to "),o("code",[e._v("2")]),e._v(" (it is disabled by default).")],1),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parameter")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{id:"COM_ARM_ODID"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_ODID"}},[e._v("COM_ARM_ODID")])],1),e._v(" "),o("td",[e._v("Enable Drone ID system detection and health check. "),o("code",[e._v("0")]),e._v(": Disable (default), "),o("code",[e._v("1")]),e._v(": Warn if Remote ID not detected but still allow arming, "),o("code",[e._v("2")]),e._v(": Only allow arming if Remote ID is present.")])])])]),e._v(" "),o("h2",{attrs:{id:"module-broadcast-testing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-broadcast-testing"}},[e._v("#")]),e._v(" Module Broadcast Testing")]),e._v(" "),o("p",[e._v("Integrators should test than the remote ID module is broadcasting the correct information, such as UAV location, ID, operator ID and so on.\nThis is most easily done using a 3rd party application on your mobile device:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/dronetag/drone-scanner",target:"_blank",rel:"noopener noreferrer"}},[e._v("Drone Scanner"),o("OutboundLink")],1),e._v(" (Google Play or Apple App store)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=org.opendroneid.android_osm&hl=en&gl=US",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenDroneID OSM"),o("OutboundLink")],1),e._v(" (Google Play)")])]),e._v(" "),o("h2",{attrs:{id:"implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),o("p",[e._v("PX4 v1.14 streams these messages by default (in streaming modes: normal, onboard, usb, onboard low bandwidth):")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_LOCATION",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_LOCATION"),o("OutboundLink")],1),e._v(" (1 Hz) - UAV location, altitude, direction, and speed.")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_SYSTEM",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_SYSTEM"),o("OutboundLink")],1),e._v(" (1 Hz) Operator location/altitude, multiple aircraft information (group/swarm, if applicable), full timestamp and possible category/class information.")]),e._v(" "),o("ul",[o("li",[e._v("Implementation assumes operator is located at vehicle home position (does not yet support getting operator position from GCS).\nThis is believed to be compliant for broadcast-only Remote IDs.")])])])]),e._v(" "),o("p",[e._v("The following message can be streamed on request (using "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_SET_MESSAGE_INTERVAL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_SET_MESSAGE_INTERVAL"),o("OutboundLink")],1),e._v("):")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_BASIC_ID",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_BASIC_ID"),o("OutboundLink")],1),e._v(" - UAV identity information (essentially a serial number)\n"),o("ul",[o("li",[e._v("PX4 v1.14 specifies a serial number ("),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_ODID_ID_TYPE_SERIAL_NUMBER",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_ODID_ID_TYPE_SERIAL_NUMBER"),o("OutboundLink")],1),e._v(") but does not use the required format (ANSI/CTA-2063 format).")])])])]),e._v(" "),o("p",[e._v("PX4 prevents arming based on Remote ID health if parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_ODID"}},[e._v("COM_ARM_ODID")]),e._v(" is set to "),o("code",[e._v("2")]),e._v(".\nThe UAV will then require "),o("code",[e._v("HEARTBEAT")]),e._v(" messages from the Remote ID as a precondition for arming the UAV.\nYou can also set the parameter to "),o("code",[e._v("1")]),e._v(" to warn but still allow arming when Remote ID "),o("code",[e._v("HEARTBEAT")]),e._v(" messages are not detected.")],1),e._v(" "),o("p",[e._v("The following Open Drone ID MAVLink messages are not supported in PX4 v1.14 (to be added by "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21647",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4#21647"),o("OutboundLink")],1),e._v("):")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_AUTHENTICATION",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_AUTHENTICATION"),o("OutboundLink")],1),e._v(" - Provides authentication data for the UAV.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_SELF_ID",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_SELF_ID"),o("OutboundLink")],1),e._v(" - Operator identity (plain text).")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_OPERATOR_ID",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_OPERATOR_ID"),o("OutboundLink")],1),e._v(" - Operator identity.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_ARM_STATUS",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_ARM_STATUS"),o("OutboundLink")],1),e._v(" - Status of Remote ID hardware. Use as condition for vehicle arming, and for Remote ID health check.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_SYSTEM_UPDATE",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_SYSTEM_UPDATE"),o("OutboundLink")],1),e._v(" - Subset of "),o("code",[e._v("OPEN_DRONE_ID_SYSTEM")]),e._v(" that can be sent with information at higher rate.")])]),e._v(" "),o("h2",{attrs:{id:"compliance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compliance"}},[e._v("#")]),e._v(" Compliance")]),e._v(" "),o("p",[e._v("PX4 may not be compliant with the relevant specifications in version 1.14 (which is why this feature is currently experimental).\nA working group has been established to evaluate the gaps.")]),e._v(" "),o("p",[e._v("Some known issues are:")]),e._v(" "),o("ul",[o("li",[e._v("Vehicles must arm conditional on receiving the Remote ID "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_ARM_STATUS",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_ARM_STATUS"),o("OutboundLink")],1),e._v(" message, with a status that indicates the Remote ID hardware is ready to broadcast.\n"),o("ul",[o("li",[e._v("PX4 v1.14 does not process "),o("code",[e._v("OPEN_DRONE_ID_ARM_STATUS")]),e._v(", and arming is only conditional on the Remote ID device "),o("code",[e._v("HEARTBEAT")]),e._v(".")])])]),e._v(" "),o("li",[e._v("Health of the Remote ID depends on both receiving a "),o("code",[e._v("HEARTBEAT")]),e._v(" and the "),o("code",[e._v("OPEN_DRONE_ID_ARM_STATUS")]),e._v(".\nWhen flying, a non-armed status for the Remote ID must be published in "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_LOCATION",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_LOCATION.status"),o("OutboundLink")],1),e._v(" as a Remote ID malfunction.\n"),o("ul",[o("li",[e._v("PX4 v1.14 does not yet receive "),o("code",[e._v("OPEN_DRONE_ID_ARM_STATUS")]),e._v(".")])])]),e._v(" "),o("li",[o("code",[e._v("OPEN_DRONE_ID_ARM_STATUS")]),e._v(" must be forwarded to the GCS, if present for additional error reporting.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPEN_DRONE_ID_BASIC_ID",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPEN_DRONE_ID_BASIC_ID"),o("OutboundLink")],1),e._v(" specifies a serial number in an invalid format (not ANSI/CTA-2063 format).")]),e._v(" "),o("li",[e._v("The vehicle ID is expected to be tamper resistent.")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21647",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/21647"),o("OutboundLink")],1),e._v(" is intended to address the known issues.")]),e._v(" "),o("h2",{attrs:{id:"see-also"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.faa.gov/uas/getting_started/remote_id",target:"_blank",rel:"noopener noreferrer"}},[e._v("Remote Identification of Drones"),o("OutboundLink")],1),e._v(" (FAA)")])])])}),[],!1,null,null,null);t.default=a.exports}}]);