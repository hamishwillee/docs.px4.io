(window.webpackJsonp=window.webpackJsonp||[]).push([[1106],{2145:function(e,t,s){"use strict";s.r(t);var a=s(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"geofenceresult-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geofenceresult-uorb-message"}},[e._v("#")]),e._v(" GeofenceResult (UORB message)")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/GeofenceResult.msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("source file"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[e._v("uint64 timestamp                        # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("start")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nuint8 GF_ACTION_NONE "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("                # no action on geofence violation\nuint8 GF_ACTION_WARN "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("                # critical mavlink message\nuint8 GF_ACTION_LOITER "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("              # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("switch")]),e._v(" to AUTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("LOITER\nuint8 GF_ACTION_RTL "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("                 # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("switch")]),e._v(" to AUTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("RTL\nuint8 GF_ACTION_TERMINATE "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("           # flight termination\nuint8 GF_ACTION_LAND "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("                # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("switch")]),e._v(" to AUTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("LAND\n\nuint8 geofence_violation_reason         # one of "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("geofence_violation_reason_t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n\nbool primary_geofence_breached          # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the primary geofence is breached\nuint8 primary_geofence_action           # action to take when the primary geofence is breached\n\nbool home_required                      # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the geofence requires a valid home position\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);