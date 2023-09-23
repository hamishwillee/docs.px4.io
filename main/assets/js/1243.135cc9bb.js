(window.webpackJsonp=window.webpackJsonp||[]).push([[1243],{2305:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vehiclecommandack-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vehiclecommandack-uorb-message"}},[t._v("#")]),t._v(" VehicleCommandAck (UORB message)")]),t._v(" "),e("p",[t._v("Vehicle Command Ackonwledgement uORB message.\nUsed for acknowledging the vehicle command being received.\nFollows the MAVLink COMMAND_ACK message definition")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleCommandAck.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Vehicle Command Ackonwledgement uORB message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Used "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" acknowledging the vehicle command being received"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Follows the MAVLink COMMAND_ACK message definition")])]),t._v("\n\nuint64 timestamp\t\t# time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Result cases"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This follows the MAVLink MAV_RESULT "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("definition")])])]),t._v("\nuint8 VEHICLE_CMD_RESULT_ACCEPTED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t\t\t# Command ACCEPTED and EXECUTED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\nuint8 VEHICLE_CMD_RESULT_TEMPORARILY_REJECTED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t# Command TEMPORARY REJECTED"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("DENIED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\nuint8 VEHICLE_CMD_RESULT_DENIED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t\t\t# Command PERMANENTLY DENIED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\nuint8 VEHICLE_CMD_RESULT_UNSUPPORTED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\t\t# Command UNKNOWN"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("UNSUPPORTED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\nuint8 VEHICLE_CMD_RESULT_FAILED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\t\t\t# Command executed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but failed "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\nuint8 VEHICLE_CMD_RESULT_IN_PROGRESS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\t\t# Command being executed "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\nuint8 VEHICLE_CMD_RESULT_CANCELLED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\t\t\t# Command Canceled\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Arming denied specific cases")])]),t._v("\nuint16 ARM_AUTH_DENIED_REASON_GENERIC "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint16 ARM_AUTH_DENIED_REASON_NONE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint16 ARM_AUTH_DENIED_REASON_INVALID_WAYPOINT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint16 ARM_AUTH_DENIED_REASON_TIMEOUT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint16 ARM_AUTH_DENIED_REASON_AIRSPACE_IN_USE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint16 ARM_AUTH_DENIED_REASON_BAD_WEATHER "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\nuint8 ORB_QUEUE_LENGTH "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\nuint32 command\t\t\t\t\t\t# Command that is being acknowledged\nuint8 result\t\t\t\t\t\t# Command result\nuint8 result_param1\t\t\t\t\t# Also used as progress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" it can be set with the reason why the command was denied"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or the progress percentage when result is MAV_RESULT_IN_PROGRESS\nint32 result_param2\t\t\t\t\t# Additional parameter of the result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" example"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" which parameter of MAV_CMD_NAV_WAYPOINT caused it to be denied"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 target_system\nuint8 target_component\n\nbool from_external\t\t\t\t\t# Indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the command came from an external source\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);