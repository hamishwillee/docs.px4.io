(window.webpackJsonp=window.webpackJsonp||[]).push([[1054],{2180:function(e,t,a){"use strict";a.r(t);var r=a(18),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mavlink-peripherals-gcs-osd-companion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-peripherals-gcs-osd-companion"}},[e._v("#")]),e._v(" MAVLink Peripherals (GCS/OSD/Companion)")]),e._v(" "),a("p",[e._v("Ground Control Stations (GCS), On-Screen Displays (OSD), Companion Computers, ADS-B receivers, and other MAVLink peripherals interact with PX4 using separate MAVLink streams, sent via different serial ports. These communication channels are configured using the "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#mavlink"}},[e._v("MAVLink parameters")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"mavlink-instances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-instances"}},[e._v("#")]),e._v(" MAVLink Instances")]),e._v(" "),a("p",[e._v("In order to assign a particular peripheral to a serial port we use the (abstract) concept of a "),a("em",[e._v("MAVLink instance")]),e._v(".")]),e._v(" "),a("p",[e._v("Each instance can represent a particular set of streamed messages (see "),a("a",{attrs:{href:"#MAV_X_MODE"}},[e._v("MAV_X_MODE")]),e._v(" below); parameters are used to define the set of messages, the port used, data rate, etc.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("At time of writing three MAVLink "),a("em",[e._v("instances")]),e._v(" are defined, which correspond to the 0, 1, 2 in the parameters listed below.")])]),e._v(" "),a("p",[e._v("The parameters for each instance are:")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_X_CONFIG")]),e._v(' - Set the serial port (UART) for this instance "X", where X is 0, 1, 2. It can be any unused port, e.g.: TELEM2, TELEM3, GPS2 etc. For more information see '),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[e._v("Serial Port Configuration")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("span",{attrs:{id:"MAV_X_MODE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[e._v("MAV_X_MODE")]),e._v(" - Specify the telemetry mode/target (the set of messages to stream for the current instance and their rate). The default values are:")],1),e._v(" "),a("ul",[a("li",[a("em",[e._v("Normal")]),e._v(": Standard set of messages for a GCS.")]),e._v(" "),a("li",[a("em",[e._v("Custom")]),e._v(" or "),a("em",[e._v("Magic")]),e._v(": Nothing (in the default PX4 implementation). Modes may be used for testing when developing a new mode.")]),e._v(" "),a("li",[a("em",[e._v("Onboard")]),e._v(": Standard set of messages for a companion computer.")]),e._v(" "),a("li",[a("em",[e._v("OSD")]),e._v(": Standard set of messages for an OSD system.")]),e._v(" "),a("li",[a("em",[e._v("Config")]),e._v(": Standard set of messages and rate configuration for a fast link (e.g. USB).")]),e._v(" "),a("li",[a("em",[e._v("Minimal")]),e._v(": Minimal set of messages for use with a GCS connected on a high latency link.")]),e._v(" "),a("li",[a("em",[e._v("ExtVision")]),e._v(" or "),a("em",[e._v("ExtVisionMin")]),e._v(": Messages for offboard vision systems (ExtVision needed for VIO).")]),e._v(" "),a("li",[a("em",[e._v("Iridium")]),e._v(": Messages for an "),a("RouterLink",{attrs:{to:"/ko/advanced_features/satcom_roadblock.html"}},[e._v("Iridium satellite communication system")]),e._v(".")],1)])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("If you need to find the specific set of message for each mode search for "),a("code",[e._v("MAVLINK_MODE_")]),e._v(" in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/modules/mavlink/mavlink_main.cpp"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The mode defines the "),a("em",[e._v("default")]),e._v(" messages and rates. A connected MAVLink system can still request the streams/rates that it wants using "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_SET_MESSAGE_INTERVAL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_SET_MESSAGE_INTERVAL"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[e._v("MAV_X_RATE")]),e._v(" - Set the maximum "),a("em",[e._v("data rate")]),e._v(" for this instance (bytes/second).")],1),e._v(" "),a("ul",[a("li",[e._v("This is the combined rate for all streams of individual message (the rates for individual messages are reduced if the total rate exceeds this value).")]),e._v(" "),a("li",[e._v("The default setting will generally be acceptable, but might be reduced if the telemetry link becomes saturated and too many messages are being dropped.")]),e._v(" "),a("li",[e._v("A value of 0 sets the data rate to half the theoretical value.")])])]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_FORWARD"}},[e._v("MAV_X_FORWARD")]),e._v(" - Enable forwarding of MAVLink packets received by the current instance onto other interfaces. This might be used, for example, to transfer messages between a GCS and a companion computer so that the GCS can talk to a MAVLink enabled camera connected to the companion computer.")],1)])]),e._v(" "),a("p",[e._v("Next you need to set the baud rate for the serial port you assigned above (in "),a("code",[e._v("MAV_X_CONFIG")]),e._v(").")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You will need to reboot PX4 to make the parameter available (i.e. in QGroundControl).")])]),e._v(" "),a("p",[e._v("The parameter used will depend on the "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#serial"}},[e._v("assigned serial port")]),e._v(" - for example: "),a("code",[e._v("SER_GPS1_BAUD")]),e._v(", "),a("code",[e._v("SER_TEL2_BAUD")]),e._v(", etc. The value you use will depend on the type of connection and the capabilities of the connected MAVLink peripheral.")],1),e._v(" "),a("p",[a("span",{attrs:{id:"default_ports"}})]),e._v(" "),a("h2",{attrs:{id:"default-mavlink-ports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-mavlink-ports"}},[e._v("#")]),e._v(" Default MAVLink Ports")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TELEM 1")]),e._v(" port is almost always used for the GCS telemetry stream.")]),e._v(" "),a("p",[e._v("To support this there is a "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#default_port_mapping"}},[e._v("default serial port mapping")]),e._v(" of MAVLink instance 0 as shown below:")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_0_CONFIG")]),e._v(" = "),a("code",[e._v("TELEM 1")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[e._v("MAV_0_MODE")]),e._v(" = "),a("code",[e._v("Normal")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_RATE"}},[e._v("MAV_0_RATE")]),e._v("= "),a("code",[e._v("1200")]),e._v(" Bytes/s")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_FORWARD"}},[e._v("MAV_0_FORWARD")]),e._v(" = "),a("code",[e._v("True")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL1_BAUD"}},[e._v("SER_TEL1_BAUD")]),e._v(" = "),a("code",[e._v("57600")])],1)]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("For example, to use a companion computer on "),a("code",[e._v("TELEM 2")]),e._v(" you might set parameters as shown:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[e._v("MAV_2_CONFIG")]),e._v(" = "),a("code",[e._v("TELEM 2")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_MODE"}},[e._v("MAV_2_MODE")]),e._v(" = "),a("code",[e._v("Onboard")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_RATE"}},[e._v("MAV_2_RATE")]),e._v("= "),a("code",[e._v("80000")]),e._v(" Bytes/s :::tip This value might have to be tuned/reduced in the event of message losses.\n:::")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_FORWARD"}},[e._v("MAV_2_FORWARD")]),e._v(" = "),a("code",[e._v("True")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[e._v("SER_TEL2_BAUD")]),e._v(" = "),a("code",[e._v("921600")]),e._v(" baud")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);