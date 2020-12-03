(window.webpackJsonp=window.webpackJsonp||[]).push([[988],{2098:function(t,a,s){"use strict";s.r(a);var e=s(18),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mavlink-messaging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-messaging"}},[t._v("#")]),t._v(" MAVLink Messaging")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),s("OutboundLink")],1),t._v(" is a very lightweight messaging protocol that has been designed for the drone ecosystem.")]),t._v(" "),s("p",[t._v("PX4 uses "),s("em",[t._v("MAVLink")]),t._v(" to communicate with "),s("em",[t._v("QGroundControl")]),t._v(" (and other ground stations), and as the integration mechanism for connecting to drone components outside of the flight controller: companion computers, MAVLink enabled cameras etc.")]),t._v(" "),s("p",[t._v("The protocol defines a number of standard "),s("a",{attrs:{href:"https://mavlink.io/en/messages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("messages"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://mavlink.io/en/services/",target:"_blank",rel:"noopener noreferrer"}},[t._v("microservices"),s("OutboundLink")],1),t._v(" for exchanging data (many, but not all, messages/services have been implemented in PX4).")]),t._v(" "),s("p",[t._v('This tutorial explains how you can add PX4 support for your own new "custom" messages.')]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The tutorial assumes you have a "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[t._v("custom uORB")]),t._v(" "),s("code",[t._v("ca_trajectory")]),t._v(" message in "),s("code",[t._v("msg/ca_trajectory.msg")]),t._v(" and a custom MAVLink "),s("code",[t._v("ca_trajectory")]),t._v(" message in "),s("code",[t._v("mavlink/include/mavlink/v2.0/custom_messages/mavlink_msg_ca_trajectory.h")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"defining-custom-mavlink-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-custom-mavlink-messages"}},[t._v("#")]),t._v(" Defining Custom MAVLink Messages")]),t._v(" "),s("p",[t._v("The MAVLink developer guide explains how to define new messages and build them into new programming-specific libraries:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mavlink.io/en/guide/define_xml_element.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Define MAVLink Messages & Enums"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mavlink.io/en/getting_started/generate_libraries.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generating MAVLink Libraries"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Your message needs to be generated as a C-library for MAVLink 2. Once you've "),s("a",{attrs:{href:"https://mavlink.io/en/getting_started/installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("installed MAVLink"),s("OutboundLink")],1),t._v(" you can do this on the command line using the command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("python -m pymavlink.tools.mavgen --lang"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("C --wire-protocol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" --output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("generated/include/mavlink/v2.0 message_definitions/v1.0/custom_messages.xml\n")])])]),s("p",[t._v("For your own use/testing you can just copy the generated headers into "),s("strong",[t._v("PX4-Autopilot/mavlink/include/mavlink/v2.0")]),t._v(".")]),t._v(" "),s("p",[t._v("To make it easier for others to test your changes, a better approach is to add your generated headers to a fork of https://github.com/mavlink/c_library_v2. PX4 developers can then update the submodule to your fork in the PX4-Autopilot repo before building.")]),t._v(" "),s("h2",{attrs:{id:"sending-custom-mavlink-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sending-custom-mavlink-messages"}},[t._v("#")]),t._v(" Sending Custom MAVLink Messages")]),t._v(" "),s("p",[t._v("Add the headers of the MAVLink and uORB messages to "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/modules/mavlink/mavlink_messages.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_messages.cpp"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Create a new class in "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/modules/mavlink/mavlink_messages.cpp#L2193",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_messages.cpp"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/ca_trajectory.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<v2.0/custom_messages/mavlink.h>")])]),t._v("\n")])])]),s("p",[t._v("Finally append the stream class to the "),s("code",[t._v("streams_list")]),t._v(" at the bottom of "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/modules/mavlink/mavlink_messages.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_messages.cpp"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("class MavlinkStreamCaTrajectory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" public MavlinkStream\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\npublic"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MavlinkStreamCaTrajectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_name_static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_name_static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CA_TRAJECTORY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    uint16_t "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_id_static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MAVLINK_MSG_ID_CA_TRAJECTORY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    uint16_t "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_id_static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" MavlinkStream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new_instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Mavlink "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" new "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStreamCaTrajectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MAVLINK_MSG_ID_CA_TRAJECTORY_LEN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" MAVLINK_NUM_NON_PAYLOAD_BYTES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nprivate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    MavlinkOrbSubscription "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uint64_t _ca_traj_time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* do not allow top copying this class */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStreamCaTrajectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MavlinkStreamCaTrajectory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    MavlinkStreamCaTrajectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" operator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MavlinkStreamCaTrajectory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nprotected"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    explicit "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStreamCaTrajectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Mavlink "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_sub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_mavlink"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_orb_subscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make sure you enter the name of your uORB topic here")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_ca_traj_time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    bool "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hrt_abstime t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ca_traj_struct_s")]),t._v(" _ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//make sure ca_traj_struct_s is the definition of your uORB topic")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sub"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("_ca_traj_time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            mavlink_ca_trajectory_t _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//make sure mavlink_ca_trajectory_t is the definition of your custom MAVLink message")]),t._v("\n\n            _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavlink_msg_ca_trajectory_send_struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_mavlink"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_channel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("_msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Finally append the stream class to the "),s("code",[t._v("streams_list")]),t._v(" at the bottom of "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_messages.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_messages.cpp"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("StreamListItem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("streams_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ncreate_stream_list_item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MavlinkStreamCaTrajectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("Then make sure to enable the stream, for example by adding the following line to the "),s("RouterLink",{attrs:{to:"/ko/concept/system_startup.html"}},[t._v("startup script")]),t._v(" (e.g. "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("/ROMFS/px4fmu_common/init.d-posix/rcS"),s("OutboundLink")],1),t._v(" on NuttX or "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d-posix/rcS"),s("OutboundLink")],1),t._v(") on SITL. Note that "),s("code",[t._v("-r")]),t._v(" configures the streaming rate and "),s("code",[t._v("-u")]),t._v(" identifies the MAVLink channel on UDP port 14556).")],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mavlink stream -r 50 -s CA_TRAJECTORY -u 14556\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can use the "),s("code",[t._v("uorb top [<message_name>]")]),t._v(" command to verify in real-time that your message is published and the rate (see "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html#uorb-top-command"}},[t._v("uORB Messaging")]),t._v("). This approach can also be used to test incoming messages that publish a uORB topic (for other messages you might use "),s("code",[t._v("printf")]),t._v(" in your code and test in SITL).")],1),t._v(" "),s("p",[t._v("To see the message on "),s("em",[t._v("QGroundControl")]),t._v(" you will need to "),s("a",{attrs:{href:"https://dev.qgroundcontrol.com/en/getting_started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("build it with your MAVLink library"),s("OutboundLink")],1),t._v(", and then verify that the message is received using "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/app_menu/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Inspector Widget"),s("OutboundLink")],1),t._v(" (or some other MAVLink tool).")])]),t._v(" "),s("h2",{attrs:{id:"receiving-custom-mavlink-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-custom-mavlink-messages"}},[t._v("#")]),t._v(" Receiving Custom MAVLink Messages")]),t._v(" "),s("p",[t._v("Add an uORB publisher in the "),s("code",[t._v("MavlinkReceiver")]),t._v(" class in "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/modules/mavlink/mavlink_receiver.h#L195",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.h"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Implement the "),s("code",[t._v("handle_message_ca_trajectory_msg")]),t._v(" function in "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/modules/mavlink/mavlink_receiver.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.cpp"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/ca_trajectory.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<v2.0/custom_messages/mavlink_msg_ca_trajectory.h>")])]),t._v("\n")])])]),s("p",[t._v("and finally make sure it is called in "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/modules/mavlink/mavlink_receiver.cpp#L228",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavlinkReceiver::handle_message()"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message_ca_trajectory_msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mavlink_message_t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Add an uORB publisher in the "),s("code",[t._v("MavlinkReceiver")]),t._v(" class in "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.h#L195",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.h"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uORB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Publication"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ca_trajectory_s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("          _flow_pub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Implement the "),s("code",[t._v("handle_message_ca_trajectory_msg")]),t._v(" function in "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.cpp"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" MavlinkReceiver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message_ca_trajectory_msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mavlink_message_t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mavlink_ca_trajectory_t traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavlink_msg_ca_trajectory_decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ca_traj_struct_s")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hrt_absolute_time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    _ca_traj_msg_pub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("and finally make sure it is called in "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.cpp#L228",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavlinkReceiver::handle_message()"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("MavlinkReceiver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mavlink_message_t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("msgid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" MAVLINK_MSG_ID_CA_TRAJECTORY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message_ca_trajectory_msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"alternative-to-creating-custom-mavlink-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alternative-to-creating-custom-mavlink-messages"}},[t._v("#")]),t._v(" Alternative to Creating Custom MAVLink Messages")]),t._v(" "),s("p",[t._v("Sometimes there is the need for a custom MAVLink message with content that is not fully defined.")]),t._v(" "),s("p",[t._v("For example when using MAVLink to interface PX4 with an embedded device, the messages that are exchanged between the autopilot and the device may go through several iterations before they are stabilized. In this case, it can be time-consuming and error-prone to regenerate the MAVLink headers, and make sure both devices use the same version of the protocol.")]),t._v(" "),s("p",[t._v("An alternative - and temporary - solution is to re-purpose debug messages. Instead of creating a custom MAVLink message "),s("code",[t._v("CA_TRAJECTORY")]),t._v(", you can send a message "),s("code",[t._v("DEBUG_VECT")]),t._v(" with the string key "),s("code",[t._v("CA_TRAJ")]),t._v(" and data in the "),s("code",[t._v("x")]),t._v(", "),s("code",[t._v("y")]),t._v(" and "),s("code",[t._v("z")]),t._v(" fields. See "),s("RouterLink",{attrs:{to:"/ko/debug/debug_values.html"}},[t._v("this tutorial")]),t._v(". for an example usage of debug messages.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("This solution is not efficient as it sends character string over the network and involves comparison of strings. It should be used for development only!")])]),t._v(" "),s("h2",{attrs:{id:"general"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),s("h3",{attrs:{id:"set-streaming-rate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-streaming-rate"}},[t._v("#")]),t._v(" Set streaming rate")]),t._v(" "),s("p",[t._v("Sometimes it is useful to increase the streaming rate of individual topics (e.g. for inspection in QGC). This can be achieved by typing the following line in the shell:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mavlink stream -u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port number"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mavlink topic name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("You can get the port number with "),s("code",[t._v("mavlink status")]),t._v(" which will output (amongst others) "),s("code",[t._v("transport protocol: UDP (<port number>)")]),t._v(". An example would be:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mavlink stream -u "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14556")]),t._v(" -s OPTICAL_FLOW_RAD -r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);