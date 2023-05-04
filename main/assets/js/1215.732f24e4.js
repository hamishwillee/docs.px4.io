(window.webpackJsonp=window.webpackJsonp||[]).push([[1215],{2254:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vehicleattitudesetpoint-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehicleattitudesetpoint-uorb-message"}},[t._v("#")]),t._v(" VehicleAttitudeSetpoint (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleAttitudeSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp\t\t# time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 roll_body\t\t# body angle in NED "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("can be NaN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" FW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 pitch_body\t\t# body angle in NED "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("can be NaN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" FW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 yaw_body\t\t# body angle in NED "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("can be NaN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" FW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 yaw_sp_move_rate\t# rad"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("commanded by user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("For quaternion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("based attitude control")])]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" q_d\t\t\t# Desired quaternion "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" quaternion control\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("For clarification"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" For multicopters thrust_body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" and thrust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" are usually "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" and thrust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" is the negative throttle demand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("For fixed wings thrust_x is the throttle demand and thrust_y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thrust_z will usually be zero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" thrust_body\t\t# Normalized thrust command in body NED frame "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nbool reset_integral\t# Reset roll"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pitch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yaw "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("integrals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigation logic change"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool fw_control_yaw_wheel\t# control heading with steering "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wheel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("used "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" takeoff on runway"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS vehicle_attitude_setpoint mc_virtual_attitude_setpoint fw_virtual_attitude_setpoint")])]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);