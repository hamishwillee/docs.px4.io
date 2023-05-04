(window.webpackJsonp=window.webpackJsonp||[]).push([[1606],{2945:function(t,s,n){"use strict";n.r(s);var a=n(19),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"uwbgrid-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uwbgrid-uorb-message"}},[t._v("#")]),t._v(" UwbGrid (UORB message)")]),t._v(" "),n("p",[t._v("UWB report message contains the grid information measured by an ultra-wideband positioning system, such as Pozyx or NXP Rddrone.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/UwbGrid.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("UWB report message contains the grid information measured by an ultra"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wideband positioning system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("such")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("as Pozyx or NXP Rddrone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64  timestamp   # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16  initator_time   # time to synchronize "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clocks")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8   num_anchors # Number of anchors\n\nfloat64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" target_gps   # GPS position of target of the UWB "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("system")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Lat "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Lon "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Alt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Yaw Offset to true North"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Grid position information")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Position in x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("z "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("in")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("z in centimeters NED"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("staring")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("with POI and Anchor "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" up to Anchor "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")])])]),t._v("\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" target_pos     # Point of Interest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mostly landing Target x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("z\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_0\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_1\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_2\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_3\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_4\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_5\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_6\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_7\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_8\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_9\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_10\nint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" anchor_pos_11\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);