(window.webpackJsonp=window.webpackJsonp||[]).push([[1267],{2410:function(t,n,s){"use strict";s.r(n);var a=s(19),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"positionsetpoint-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positionsetpoint-uorb-message"}},[t._v("#")]),t._v(" PositionSetpoint (UORB message)")]),t._v(" "),s("p",[t._v("this file is only used in the position_setpoint triple as a dependency")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/PositionSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("this")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("file is only used in the position_setpoint triple as a dependency")])]),t._v("\n\nuint64 timestamp\t\t# time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 SETPOINT_TYPE_POSITION"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t# position setpoint\nuint8 SETPOINT_TYPE_VELOCITY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t# velocity setpoint\nuint8 SETPOINT_TYPE_LOITER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t# loiter setpoint\nuint8 SETPOINT_TYPE_TAKEOFF"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\t# takeoff setpoint\nuint8 SETPOINT_TYPE_LAND"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\t# land setpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" altitude must be ignored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descend until landing\nuint8 SETPOINT_TYPE_IDLE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\t# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" nothing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" off motors or keep at idle "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("speed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 LOITER_TYPE_ORBIT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" \t# Circular pattern\nuint8 LOITER_TYPE_FIGUREEIGHT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # Pattern resembling an "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\nbool valid\t\t\t# true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" setpoint is valid\nuint8 type\t\t\t# setpoint type to adjust behavior of position controller\n\nfloat32 vx\t\t\t# local velocity setpoint in m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s in NED\nfloat32 vy\t\t\t# local velocity setpoint in m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s in NED\nfloat32 vz\t\t\t# local velocity setpoint in m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s in NED\n\nfloat64 lat\t\t\t# latitude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in deg\nfloat64 lon\t\t\t# longitude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in deg\nfloat32 alt\t\t\t# altitude AMSL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in m\nfloat32 yaw\t\t\t# "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yaw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("only in hover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in rad "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NaN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" leave to flight task\n\nfloat32 loiter_radius\t\t# loiter major axis radius in m\nfloat32 loiter_minor_radius\t# loiter minor axis "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radius")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("used "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" non"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("circular loiter shapes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" in m\nbool loiter_direction_counter_clockwise # loiter direction is clockwise by "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" and can be changed using this field\nfloat32 loiter_orientation \t# Orientation of the major axis with respect to true north in rad "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 \tloiter_pattern\t\t# loitern pattern to follow\n\nfloat32 acceptance_radius   # navigation acceptance_radius "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" we're doing waypoint navigation\n\nfloat32 cruising_speed\t\t# the generally desired cruising "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("speed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not a hard constraint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool gliding_enabled\t\t# commands the vehicle to glide "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the capability is "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("available")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fixed wing only"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 cruising_throttle\t# the generally desired cruising "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not a hard constraint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" only has an effect "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" rover\n\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);