(window.webpackJsonp=window.webpackJsonp||[]).push([[1228],{2289:function(t,n,s){"use strict";s.r(n);var e=s(19),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"navigatormissionitem-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigatormissionitem-uorb-message"}},[t._v("#")]),t._v(" NavigatorMissionItem (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/NavigatorMissionItem.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp                 # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint32 instance_count            # Instance count of this mission"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Increments monotonically whenever the mission is modified\n\nuint16 sequence_current          # Sequence of the current mission item\n\nuint16 nav_cmd\n\nfloat32 latitude\nfloat32 longitude\n\nfloat32 time_inside              # time that the MAV should stay inside the radius before advancing in seconds\nfloat32 acceptance_radius        # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" radius in which the mission is accepted as reached in meters\nfloat32 loiter_radius            # loiter radius in meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a VTOL to hover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" negative "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" counter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("clockwise\nfloat32 yaw                      # in radians NED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("PI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NAN means don't change yaw\nfloat32 altitude                 # altitude in "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("meters")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AMSL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 frame                      # mission frame\nuint8 origin                     # mission item "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("origin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onboard or mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool loiter_exit_xtrack          # exit xtrack location"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" center of loiter wp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" exit location\nbool force_heading               # heading needs to be reached\nbool altitude_is_relative        # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" altitude is relative from start point\nbool autocontinue                # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" next waypoint should follow after this one\nbool vtol_back_transition        # part of the vtol back transition sequence\n\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);