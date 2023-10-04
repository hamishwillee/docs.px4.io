(window.webpackJsonp=window.webpackJsonp||[]).push([[1615],{2967:function(t,e,s){"use strict";s.r(e);var n=s(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"missionresult-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#missionresult-uorb-message"}},[t._v("#")]),t._v(" MissionResult (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/MissionResult.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp                # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 MISSION_EXECUTION_MODE_NORMAL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # Execute the mission according to the planned items\nuint8 MISSION_EXECUTION_MODE_REVERSE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("    # Execute the mission in reverse order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ignoring commands and converting all waypoints to normal ones\nuint8 MISSION_EXECUTION_MODE_FAST_FORWARD "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("   # Execute the mission as fast as possible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" example converting loiter waypoints to normal ones\n\nuint32 instance_count       # Instance count of this mission"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Increments monotonically whenever the mission is modified\n\nint32 seq_reached       # Sequence of the mission item which has been reached"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint16 seq_current      # Sequence of the current mission item\nuint16 seq_total        # Total number of mission items\n\nbool valid          # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mission is valid\nbool warning            # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mission is valid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but has potentially problematic items leading to safety warnings\nbool finished           # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mission has been completed\nbool failure            # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the mission cannot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v(" or be completed "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" some reason\n\nbool item_do_jump_changed   # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the number of "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" jumps remaining has changed\nuint16 item_changed_index   # indicate which item has changed\nuint16 item_do_jump_remaining   # set to the number of "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" jumps remaining "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" that item\n\nuint8 execution_mode    # indicates the mode in which the mission is executed\n\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);