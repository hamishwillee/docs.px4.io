(window.webpackJsonp=window.webpackJsonp||[]).push([[973],{1884:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"orbit-status-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orbit-status-uorb-message"}},[t._v("#")]),t._v(" orbit_status (UORB message)")]),t._v(" "),a("p",[t._v("ORBIT_YAW_BEHAVIOUR")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/orbit_status.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("ORBIT_YAW_BEHAVIOUR")])]),t._v("\nuint8 ORBIT_YAW_BEHAVIOUR_HOLD_FRONT_TO_CIRCLE_CENTER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 ORBIT_YAW_BEHAVIOUR_HOLD_INITIAL_HEADING "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 ORBIT_YAW_BEHAVIOUR_UNCONTROLLED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 ORBIT_YAW_BEHAVIOUR_HOLD_FRONT_TANGENT_TO_CIRCLE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 ORBIT_YAW_BEHAVIOUR_RC_CONTROLLED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\nuint64 timestamp # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 radius   # Radius of the orbit circle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Positive values orbit clockwise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" negative values orbit counter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("clockwise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nuint8 frame      # The coordinate system of the fields"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat64 x        # X coordinate of center point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Coordinate system depends on frame field"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" local "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x position in meters "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" latitude in degrees "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat64 y        # Y coordinate of center point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Coordinate system depends on frame field"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" local "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y position in meters "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" latitude in degrees "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat32 z        # Altitude of center point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Coordinate system depends on frame field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 yaw_behaviour\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);