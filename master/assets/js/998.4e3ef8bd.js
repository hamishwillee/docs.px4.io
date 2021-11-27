(window.webpackJsonp=window.webpackJsonp||[]).push([[998],{1907:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"position-setpoint-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#position-setpoint-uorb-message"}},[t._v("#")]),t._v(" position_setpoint (UORB message)")]),t._v(" "),n("p",[t._v("this file is only used in the position_setpoint triple as a dependency")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/position_setpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("this")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("file is only used in the position_setpoint triple as a dependency")])]),t._v("\n\nuint64 timestamp\t\t# time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 SETPOINT_TYPE_POSITION"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t# position setpoint\nuint8 SETPOINT_TYPE_VELOCITY"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t# velocity setpoint\nuint8 SETPOINT_TYPE_LOITER"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t# loiter setpoint\nuint8 SETPOINT_TYPE_TAKEOFF"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\t# takeoff setpoint\nuint8 SETPOINT_TYPE_LAND"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\t# land setpoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" altitude must be ignored"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descend until landing\nuint8 SETPOINT_TYPE_IDLE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\t# "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" nothing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" off motors or keep at idle "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("speed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 SETPOINT_TYPE_FOLLOW_TARGET"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("  # setpoint in NED "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" set by follow target\n\nuint8 VELOCITY_FRAME_LOCAL_NED "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # MAV_FRAME_LOCAL_NED\nuint8 VELOCITY_FRAME_BODY_NED "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" # MAV_FRAME_BODY_NED\n\nbool valid\t\t\t# true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" setpoint is valid\nuint8 type\t\t\t# setpoint type to adjust behavior of position controller\n\nfloat32 vx\t\t\t# local velocity setpoint in m"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s in NED\nfloat32 vy\t\t\t# local velocity setpoint in m"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s in NED\nfloat32 vz\t\t\t# local velocity setpoint in m"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s in NED\nbool velocity_valid\t\t# true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" local velocity setpoint valid\nuint8 velocity_frame\t\t# to set velocity setpoints in NED or body\nbool alt_valid\t\t# "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not set "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("D position control"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Set to true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" you want z"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("position control "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" doing vx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vy velocity control"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nfloat64 lat\t\t\t# latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in deg\nfloat64 lon\t\t\t# longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in deg\nfloat32 alt\t\t\t# altitude AMSL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in m\nfloat32 yaw\t\t\t# "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yaw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("only "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" multirotors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in rad "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NaN "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hold current yaw\nbool yaw_valid\t\t\t# true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" yaw setpoint valid\n\nfloat32 yawspeed\t\t# "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yawspeed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("only "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" multirotors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in rad"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool yawspeed_valid\t\t# true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" yawspeed setpoint valid\n\nint8 landing_gear\t\t# landing gear"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" see definition of the states in landing_gear"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg\n\nfloat32 loiter_radius\t\t# loiter "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("radius")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("only "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" fixed wing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in m\nint8 loiter_direction\t\t# loiter direction"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CW"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CCW\n\nfloat32 acceptance_radius   # navigation acceptance_radius "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" we're doing waypoint navigation\n\nfloat32 cruising_speed\t\t# the generally desired cruising "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("speed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not a hard constraint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 cruising_throttle\t# the generally desired cruising "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not a hard constraint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool disable_weather_vane   # VTOL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("disable")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" the weather vane feature that turns the nose into the wind\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);