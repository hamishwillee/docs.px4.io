(window.webpackJsonp=window.webpackJsonp||[]).push([[839],{1746:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mavlink-messaging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-messaging"}},[t._v("#")]),t._v(" MAVLink Messaging")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),a("OutboundLink")],1),t._v(" is a very lightweight messaging protocol that has been designed for the drone ecosystem.")]),t._v(" "),a("p",[t._v("PX4 uses "),a("em",[t._v("MAVLink")]),t._v(" to communicate with "),a("em",[t._v("QGroundControl")]),t._v(" (and other ground stations), and as the integration mechanism for connecting to drone components outside of the flight controller: companion computers, MAVLink enabled cameras etc.")]),t._v(" "),a("p",[t._v("The protocol defines a number of standard "),a("a",{attrs:{href:"https://mavlink.io/en/messages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("messages"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://mavlink.io/en/services/",target:"_blank",rel:"noopener noreferrer"}},[t._v("microservices"),a("OutboundLink")],1),t._v(" for exchanging data (many, but not all, messages/services have been implemented in PX4).")]),t._v(" "),a("p",[t._v('This tutorial explains how you can add PX4 support for your own new "custom" messages.')]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The tutorial assumes you have a "),a("RouterLink",{attrs:{to:"/en/middleware/uorb.html"}},[t._v("custom uORB")]),t._v(" "),a("code",[t._v("ca_trajectory")]),t._v(" message in "),a("code",[t._v("msg/ca_trajectory.msg")]),t._v(" and a custom MAVLink "),a("code",[t._v("ca_trajectory")]),t._v(" message in "),a("code",[t._v("mavlink/include/mavlink/v2.0/custom_messages/mavlink_msg_ca_trajectory.h")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"defining-custom-mavlink-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-custom-mavlink-messages"}},[t._v("#")]),t._v(" Defining Custom MAVLink Messages")]),t._v(" "),a("p",[t._v("The MAVLink developer guide explains how to define new messages and build them into new programming-specific libraries:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mavlink.io/en/guide/define_xml_element.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Define MAVLink Messages & Enums"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mavlink.io/en/getting_started/generate_libraries.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generating MAVLink Libraries"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Your message needs to be generated as a C-library for MAVLink 2.\nOnce you've "),a("a",{attrs:{href:"https://mavlink.io/en/getting_started/installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("installed MAVLink"),a("OutboundLink")],1),t._v(" you can do this on the command line using the command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("python -m pymavlink.tools.mavgen --lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("C --wire-protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" --output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("generated/include/mavlink/v2.0 message_definitions/v1.0/custom_messages.xml\n")])])]),a("p",[t._v("For your own use/testing you can just copy the generated headers into "),a("strong",[t._v("PX4-Autopilot/mavlink/include/mavlink/v2.0")]),t._v(".")]),t._v(" "),a("p",[t._v("To make it easier for others to test your changes, a better approach is to add your generated headers to a fork of https://github.com/mavlink/c_library_v2.\nPX4 developers can then update the submodule to your fork in the PX4-Autopilot repo before building.")]),t._v(" "),a("h2",{attrs:{id:"sending-custom-mavlink-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-custom-mavlink-messages"}},[t._v("#")]),t._v(" Sending Custom MAVLink Messages")]),t._v(" "),a("p",[t._v("This section explains how to use a custom uORB message and send it as a MAVLink message.")]),t._v(" "),a("p",[t._v("Add the headers of the MAVLink and uORB messages to\n"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_messages.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_messages.cpp"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/ca_trajectory.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<v2.0/custom_messages/mavlink.h>")])]),t._v("\n")])])]),a("p",[t._v("Create a new class in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_messages.cpp#L2193",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_messages.cpp"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("class MavlinkStreamCaTrajectory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" public MavlinkStream\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\npublic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MavlinkStreamCaTrajectory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_name_static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_name_static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CA_TRAJECTORY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint16_t")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_id_static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MAVLINK_MSG_ID_CA_TRAJECTORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint16_t")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_id_static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" MavlinkStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new_instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Mavlink "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mavlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" new "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStreamCaTrajectory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mavlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MAVLINK_MSG_ID_CA_TRAJECTORY_LEN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" MAVLINK_NUM_NON_PAYLOAD_BYTES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nprivate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    uORB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Subscription _sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* do not allow top copying this class */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStreamCaTrajectory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MavlinkStreamCaTrajectory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    MavlinkStreamCaTrajectory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" operator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MavlinkStreamCaTrajectory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nprotected"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    explicit "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStreamCaTrajectory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Mavlink "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mavlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mavlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    bool "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ca_traj_struct_s")]),t._v(" _ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//make sure ca_traj_struct_s is the definition of your uORB topic")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("_ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mavlink_ca_trajectory_t")]),t._v(" _msg_ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//make sure mavlink_ca_trajectory_t is the definition of your custom MAVLink message")]),t._v("\n\n            _msg_ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("_ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavlink_msg_ca_trajectory_send_struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_mavlink"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_channel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("_msg_ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Finally append the stream class to the "),a("code",[t._v("streams_list")]),t._v(" at the bottom of\n"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_messages.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_messages.cpp"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("StreamListItem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("streams_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ncreate_stream_list_item"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MavlinkStreamCaTrajectory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("Then make sure to enable the stream, for example by adding the following line to the "),a("RouterLink",{attrs:{to:"/en/concept/system_startup.html"}},[t._v("startup script")]),t._v(" (e.g. "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("/ROMFS/px4fmu_common/init.d-posix/rcS"),a("OutboundLink")],1),t._v(" on NuttX or "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d-posix/rcS"),a("OutboundLink")],1),t._v(") on SITL. Note that "),a("code",[t._v("-r")]),t._v(" configures the streaming rate and "),a("code",[t._v("-u")]),t._v(" identifies the MAVLink channel on UDP port 14556).")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mavlink stream -r 50 -s CA_TRAJECTORY -u 14556\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can use the "),a("code",[t._v("uorb top [<message_name>]")]),t._v(" command to verify in real-time that your message is published and the rate (see "),a("RouterLink",{attrs:{to:"/en/middleware/uorb.html#uorb-top-command"}},[t._v("uORB Messaging")]),t._v(").\nThis approach can also be used to test incoming messages that publish a uORB topic (for other messages you might use "),a("code",[t._v("printf")]),t._v(" in your code and test in SITL).")],1),t._v(" "),a("p",[t._v("To see the message on "),a("em",[t._v("QGroundControl")]),t._v(" you will need to "),a("a",{attrs:{href:"https://dev.qgroundcontrol.com/en/getting_started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("build it with your MAVLink library"),a("OutboundLink")],1),t._v(", and then verify that the message is received using "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/app_menu/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Inspector Widget"),a("OutboundLink")],1),t._v(" (or some other MAVLink tool).")])]),t._v(" "),a("h2",{attrs:{id:"receiving-custom-mavlink-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receiving-custom-mavlink-messages"}},[t._v("#")]),t._v(" Receiving Custom MAVLink Messages")]),t._v(" "),a("p",[t._v("This section explains how to receive a message over MAVLink and publish it to uORB.")]),t._v(" "),a("p",[t._v("Add a function that handles the incoming MAVLink message in\n"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.h#L77",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.h"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/ca_trajectory.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<v2.0/custom_messages/mavlink_msg_ca_trajectory.h>")])]),t._v("\n")])])]),a("p",[t._v("Add a function that handles the incoming MAVLink message in the "),a("code",[t._v("MavlinkReceiver")]),t._v(" class in\n"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.h#L140",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.h"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message_ca_trajectory_msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mavlink_message_t")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Add an uORB publisher in the "),a("code",[t._v("MavlinkReceiver")]),t._v(" class in\n"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.h#L195",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.h"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uORB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Publication"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ca_trajectory_s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t\t_flow_pub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ca_trajectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Implement the "),a("code",[t._v("handle_message_ca_trajectory_msg")]),t._v(" function in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.cpp"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" MavlinkReceiver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message_ca_trajectory_msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mavlink_message_t")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mavlink_ca_trajectory_t")]),t._v(" traj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavlink_msg_ca_trajectory_decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("traj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ca_traj_struct_s")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("memset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hrt_absolute_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n    _ca_traj_msg_pub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("and finally make sure it is called in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.cpp#L228",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavlinkReceiver::handle_message()"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("MavlinkReceiver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mavlink_message_t")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("msgid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" MAVLINK_MSG_ID_CA_TRAJECTORY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message_ca_trajectory_msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"alternative-to-creating-custom-mavlink-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-to-creating-custom-mavlink-messages"}},[t._v("#")]),t._v(" Alternative to Creating Custom MAVLink Messages")]),t._v(" "),a("p",[t._v("Sometimes there is the need for a custom MAVLink message with content that is not fully defined.")]),t._v(" "),a("p",[t._v("For example when using MAVLink to interface PX4 with an embedded device, the messages that are exchanged between the autopilot and the device may go through several iterations before they are stabilized.\nIn this case, it can be time-consuming and error-prone to regenerate the MAVLink headers, and make sure both devices use the same version of the protocol.")]),t._v(" "),a("p",[t._v("An alternative - and temporary - solution is to re-purpose debug messages.\nInstead of creating a custom MAVLink message "),a("code",[t._v("CA_TRAJECTORY")]),t._v(", you can send a message "),a("code",[t._v("DEBUG_VECT")]),t._v(" with the string key "),a("code",[t._v("CA_TRAJ")]),t._v(" and data in the "),a("code",[t._v("x")]),t._v(", "),a("code",[t._v("y")]),t._v(" and "),a("code",[t._v("z")]),t._v(" fields.\nSee "),a("RouterLink",{attrs:{to:"/en/debug/debug_values.html"}},[t._v("this tutorial")]),t._v(". for an example usage of debug messages.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This solution is not efficient as it sends character string over the network and involves comparison of strings.\nIt should be used for development only!")])]),t._v(" "),a("h2",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),a("h3",{attrs:{id:"set-streaming-rate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-streaming-rate"}},[t._v("#")]),t._v(" Set streaming rate")]),t._v(" "),a("p",[t._v("Sometimes it is useful to increase the streaming rate of individual topics (e.g. for inspection in QGC).\nThis can be achieved by typing the following line in the shell:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("mavlink stream -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port number"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mavlink topic name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("You can get the port number with "),a("code",[t._v("mavlink status")]),t._v(" which will output (amongst others) "),a("code",[t._v("transport protocol: UDP (<port number>)")]),t._v(".\nAn example would be:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("mavlink stream -u "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14556")]),t._v(" -s OPTICAL_FLOW_RAD -r "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);