(window.webpackJsonp=window.webpackJsonp||[]).push([[2075],{3734:function(s,t,e){"use strict";e.r(t);var a=e(19),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vehiclecommandack-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vehiclecommandack-uorb-message"}},[s._v("#")]),s._v(" VehicleCommandAck (UORB message)")]),s._v(" "),e("p",[s._v("Vehicle Command Ackonwledgement uORB message. Used for acknowledging the vehicle command being received. Follows the MAVLink COMMAND_ACK message definition")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleCommandAck.msg",target:"_blank",rel:"noopener noreferrer"}},[s._v("source file"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Vehicle Command Ackonwledgement uORB message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Used "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" acknowledging the vehicle command being received"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Follows the MAVLink COMMAND_ACK message definition")])]),s._v("\n\nuint64 timestamp        # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Result cases"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" This follows the MAVLink MAV_RESULT "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("definition")])])]),s._v("\nuint8 VEHICLE_CMD_RESULT_ACCEPTED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("           # Command ACCEPTED and EXECUTED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nuint8 VEHICLE_CMD_RESULT_TEMPORARILY_REJECTED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   # Command TEMPORARY REJECTED"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("DENIED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nuint8 VEHICLE_CMD_RESULT_DENIED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         # Command PERMANENTLY DENIED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nuint8 VEHICLE_CMD_RESULT_UNSUPPORTED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("        # Command UNKNOWN"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("UNSUPPORTED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nuint8 VEHICLE_CMD_RESULT_FAILED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("         # Command executed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" but failed "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nuint8 VEHICLE_CMD_RESULT_IN_PROGRESS "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("        # Command being executed "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nuint8 VEHICLE_CMD_RESULT_CANCELLED "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("          # Command Canceled\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Arming denied specific cases")])]),s._v("\nuint16 ARM_AUTH_DENIED_REASON_GENERIC "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nuint16 ARM_AUTH_DENIED_REASON_NONE "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nuint16 ARM_AUTH_DENIED_REASON_INVALID_WAYPOINT "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nuint16 ARM_AUTH_DENIED_REASON_TIMEOUT "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nuint16 ARM_AUTH_DENIED_REASON_AIRSPACE_IN_USE "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nuint16 ARM_AUTH_DENIED_REASON_BAD_WEATHER "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\nuint8 ORB_QUEUE_LENGTH "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n\nuint32 command                      # Command that is being acknowledged\nuint8 result                        # Command result\nuint8 result_param1                 # Also used as progress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" it can be set with the reason why the command was denied"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" or the progress percentage when result is MAV_RESULT_IN_PROGRESS\nint32 result_param2                 # Additional parameter of the result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" example"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" which parameter of MAV_CMD_NAV_WAYPOINT caused it to be denied"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nuint8 target_system\nuint8 target_component\n\nbool from_external                  # Indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" the command came from an external source\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);