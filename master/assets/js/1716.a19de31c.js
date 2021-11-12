(window.webpackJsonp=window.webpackJsonp||[]).push([[1716],{3127:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"manual-control-switches-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-control-switches-uorb-message"}},[t._v("#")]),t._v(" manual_control_switches (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/manual_control_switches.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp                 # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint64 timestamp_sample          # the timestamp of the raw "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 SWITCH_POS_NONE   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      # "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" is not mapped\nuint8 SWITCH_POS_ON     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("      # "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 SWITCH_POS_MIDDLE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("      # middle "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 SWITCH_POS_OFF    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("      # "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 MODE_SLOT_NONE    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      # no mode slot assigned\nuint8 MODE_SLOT_1       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("      # mode slot "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" selected\nuint8 MODE_SLOT_2       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("      # mode slot "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" selected\nuint8 MODE_SLOT_3       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("      # mode slot "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" selected\nuint8 MODE_SLOT_4       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("      # mode slot "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" selected\nuint8 MODE_SLOT_5       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("      # mode slot "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" selected\nuint8 MODE_SLOT_6       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("      # mode slot "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" selected\nuint8 MODE_SLOT_NUM     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("      # number of slots\n\nuint8 mode_slot                  # the slot a specific model selector is in\n\nuint8 arm_switch                 # arm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("disarm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _DISARMED_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ARMED\nuint8 return_switch              # "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" to launch "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" position "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mandatory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _NORMAL_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RTL\nuint8 loiter_switch              # loiter "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" position "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _MISSION_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LOITER\nuint8 offboard_switch            # offboard "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" position "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _NORMAL_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OFFBOARD\nuint8 kill_switch                # throttle kill"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _NORMAL_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" KILL\nuint8 gear_switch                # landing gear "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _DOWN_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UP\nuint8 transition_switch          # VTOL transition "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _HOVER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FORWARD_FLIGHT\n\nuint32 switch_changes            # number of "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" changes\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);