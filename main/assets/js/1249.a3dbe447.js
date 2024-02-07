(window.webpackJsonp=window.webpackJsonp||[]).push([[1249],{2388:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mission-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mission-uorb-message"}},[t._v("#")]),t._v(" Mission (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/Mission.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp\t# time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 mission_dataman_id\t# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" there are two offboard storage places in the dataman"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 fence_dataman_id\t\t# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" there are two offboard storage places in the dataman"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 safepoint_dataman_id\t# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" there are two offboard storage places in the dataman"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nuint16 count\t\t# count of the missions stored in the dataman\nint32 current_seq\t# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start at the one changed latest\n\nint32 land_start_index  # Index of the land start marker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unavailable index of the land item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" otherwise\nint32 land_index \t# Index of the land item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" otherwise\n\nuint32 mission_id # indicates updates to the mission"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reload from dataman "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" changed\nuint32 geofence_id # indicates updates to the geofence"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reload from dataman "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" changed\nuint32 safe_points_id # indicates updates to the safe points"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reload from dataman "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" changed\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);