(window.webpackJsonp=window.webpackJsonp||[]).push([[1790],{3205:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"uavcan-parameter-request-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-parameter-request-uorb-message"}},[t._v("#")]),t._v(" uavcan_parameter_request (UORB message)")]),t._v(" "),e("p",[t._v("UAVCAN-MAVLink parameter bridge request type")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/uavcan_parameter_request.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("UAVCAN"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("MAVLink parameter bridge request type")])]),t._v("\nuint64 timestamp        # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 MESSAGE_TYPE_PARAM_REQUEST_READ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("  # MAVLINK_MSG_ID_PARAM_REQUEST_READ\nuint8 MESSAGE_TYPE_PARAM_REQUEST_LIST "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("  # MAVLINK_MSG_ID_PARAM_REQUEST_LIST\nuint8 MESSAGE_TYPE_PARAM_SET "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("       # MAVLINK_MSG_ID_PARAM_SET\nuint8 message_type              # MAVLink message type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PARAM_REQUEST_READ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PARAM_REQUEST_LIST"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PARAM_SET\n\nuint8 NODE_ID_ALL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("       # MAV_COMP_ID_ALL\nuint8 node_id           # UAVCAN node ID mapped from MAVLink component ID\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" param_id       # MAVLink"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("UAVCAN parameter name\nint16 param_index       # "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the param_id field should be used as identifier\n\nuint8 PARAM_TYPE_UINT8 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  # MAV_PARAM_TYPE_UINT8\nuint8 PARAM_TYPE_INT64 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("  # MAV_PARAM_TYPE_INT64\nuint8 PARAM_TYPE_REAL32 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" # MAV_PARAM_TYPE_REAL32\nuint8 param_type        # MAVLink parameter type\n\nint64 int_value         # current value "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" param_type is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("like\nfloat32 real_value      # current value "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" param_type is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("like\n\nuint8 ORB_QUEUE_LENGTH "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);