(window.webpackJsonp=window.webpackJsonp||[]).push([[1218],{2273:function(t,e,s){"use strict";s.r(e);var n=s(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"missionresult-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#missionresult-uorb-message"}},[t._v("#")]),t._v(" MissionResult (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/MissionResult.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp\t\t# time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint16 mission_id   \t\t# Id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the mission "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" which the result was generated\nuint16 geofence_id  \t\t# Id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the corresponding geofence "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" which the result was "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("used "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" mission feasibility"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 home_position_counter  \t# Counter of the home position "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" which the result was "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("used "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" mission feasibility"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nint32 seq_reached\t\t# Sequence of the mission item which has been reached"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint16 seq_current\t\t# Sequence of the current mission item\nuint16 seq_total\t\t# Total number of mission items\n\nbool valid\t\t\t# true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mission is valid\nbool warning\t\t\t# true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mission is valid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but has potentially problematic items leading to safety warnings\nbool finished\t\t\t# true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mission has been completed\nbool failure\t\t\t# true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the mission cannot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v(" or be completed "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" some reason\n\nbool item_do_jump_changed\t# true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the number of "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" jumps remaining has changed\nuint16 item_changed_index\t# indicate which item has changed\nuint16 item_do_jump_remaining\t# set to the number of "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" jumps remaining "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" that item\n\nuint8 execution_mode\t# indicates the mode in which the mission is executed\n\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);