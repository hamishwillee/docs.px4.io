(window.webpackJsonp=window.webpackJsonp||[]).push([[2121],{3789:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"positionsetpoint-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positionsetpoint-uorb-message"}},[t._v("#")]),t._v(" PositionSetpoint (UORB message)")]),t._v(" "),n("p",[t._v("this file is only used in the position_setpoint triple as a dependency")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/PositionSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("this")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("file is only used in the position_setpoint triple as a dependency")])]),t._v("\n\nuint64 timestamp        # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 SETPOINT_TYPE_POSITION"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  # position setpoint\nuint8 SETPOINT_TYPE_VELOCITY"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  # velocity setpoint\nuint8 SETPOINT_TYPE_LOITER"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("    # loiter setpoint\nuint8 SETPOINT_TYPE_TAKEOFF"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("   # takeoff setpoint\nuint8 SETPOINT_TYPE_LAND"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("  # land setpoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" altitude must be ignored"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descend until landing\nuint8 SETPOINT_TYPE_IDLE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("  # "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" nothing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" off motors or keep at idle "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("speed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 LOITER_TYPE_ORBIT"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   # Circular pattern\nuint8 LOITER_TYPE_FIGUREEIGHT"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # Pattern resembling an "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\nbool valid          # true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" setpoint is valid\nuint8 type          # setpoint type to adjust behavior of position controller\n\nfloat32 vx          # local velocity setpoint in m"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s in NED\nfloat32 vy          # local velocity setpoint in m"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s in NED\nfloat32 vz          # local velocity setpoint in m"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s in NED\n\nfloat64 lat         # latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in deg\nfloat64 lon         # longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in deg\nfloat32 alt         # altitude AMSL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in m\nfloat32 yaw         # "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yaw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("only "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" multirotors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in rad "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NaN "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hold current yaw\nbool yaw_valid          # true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" yaw setpoint valid\n\nfloat32 yawspeed        # "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yawspeed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("only "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" multirotors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in rad"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool yawspeed_valid     # true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" yawspeed setpoint valid\n\nfloat32 loiter_radius       # loiter major axis radius in m\nfloat32 loiter_minor_radius # loiter minor axis "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("radius")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("used "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" non"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("circular loiter shapes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" in m\nbool loiter_direction_counter_clockwise # loiter direction is clockwise by "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" and can be changed using this field\nfloat32 loiter_orientation  # Orientation of the major axis with respect to true north in rad "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8   loiter_pattern      # loitern pattern to follow\n\nfloat32 acceptance_radius   # navigation acceptance_radius "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" we're doing waypoint navigation\n\nfloat32 cruising_speed      # the generally desired cruising "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("speed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not a hard constraint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool gliding_enabled        # commands the vehicle to glide "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the capability is "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("available")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fixed wing only"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 cruising_throttle   # the generally desired cruising "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not a hard constraint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" only has an effect "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" rover\n\nbool disable_weather_vane   # VTOL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("disable")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" the weather vane feature that turns the nose into the wind\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);