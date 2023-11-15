(window.webpackJsonp=window.webpackJsonp||[]).push([[1208],{2286:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mission-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-uorb-message"}},[t._v("#")]),t._v(" Mission (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/Mission.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp\t# time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 dataman_id\t# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" there are two offboard storage places in the dataman"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" or "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nuint16 count\t\t# count of the missions stored in the dataman\nint32 current_seq\t# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start at the one changed latest\n\nint32 land_start_index  # Index of the land start marker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unavailable index of the land item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" otherwise\nint32 land_index \t# Index of the land item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" otherwise\n\nuint16 mission_update_counter # indicates updates to the mission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reload from dataman "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" increased\nuint16 geofence_update_counter # indicates updates to the geofence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reload from dataman "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" increased\nuint16 safe_points_update_counter # indicates updates to the safe points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reload from dataman "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" increased\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);