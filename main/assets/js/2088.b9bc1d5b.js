(window.webpackJsonp=window.webpackJsonp||[]).push([[2088],{3833:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"geofenceresult-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geofenceresult-uorb-message"}},[t._v("#")]),t._v(" GeofenceResult (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/GeofenceResult.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp                        # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 GF_ACTION_NONE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("                # no action on geofence violation\nuint8 GF_ACTION_WARN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                # critical mavlink message\nuint8 GF_ACTION_LOITER "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("              # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" to AUTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("LOITER\nuint8 GF_ACTION_RTL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("                 # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" to AUTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("RTL\nuint8 GF_ACTION_TERMINATE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("           # flight termination\nuint8 GF_ACTION_LAND "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("                # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" to AUTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("LAND\n\nbool geofence_max_dist_triggered    # true the check "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" max distance from Home is triggered\nbool geofence_max_alt_triggered     # true the check "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" max altitude above Home is triggered\nbool geofence_custom_fence_triggered    # true the check "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" custom inclusion"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("exclusion "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("geofence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is triggered\n\nuint8 geofence_action               # action to take when the geofence is breached\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);