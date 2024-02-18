(window.webpackJsonp=window.webpackJsonp||[]).push([[2184],{3943:function(e,s,t){"use strict";t.r(s);var n=t(19),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"missionresult-uorb-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#missionresult-uorb-message"}},[e._v("#")]),e._v(" MissionResult (UORB message)")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/MissionResult.msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("source file"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[e._v("uint64 timestamp        # time since system "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("start")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("microseconds"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nuint16 mission_id           # Id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the mission "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" which the result was generated\nuint16 geofence_id          # Id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the corresponding geofence "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" which the result was "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("generated")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("used "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" mission feasibility"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nuint64 home_position_counter    # Counter of the home position "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" which the result was "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("generated")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("used "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" mission feasibility"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nint32 seq_reached       # Sequence of the mission item which has been reached"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nuint16 seq_current      # Sequence of the current mission item\nuint16 seq_total        # Total number of mission items\n\nbool valid          # true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" mission is valid\nbool warning            # true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" mission is valid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" but has potentially problematic items leading to safety warnings\nbool finished           # true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" mission has been completed\nbool failure            # true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the mission cannot "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("continue")]),e._v(" or be completed "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" some reason\n\nbool item_do_jump_changed   # true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the number of "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" jumps remaining has changed\nuint16 item_changed_index   # indicate which item has changed\nuint16 item_do_jump_remaining   # set to the number of "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" jumps remaining "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" that item\n\nuint8 execution_mode    # indicates the mode in which the mission is executed\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);