(window.webpackJsonp=window.webpackJsonp||[]).push([[961],{1871:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"geofence-result-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geofence-result-uorb-message"}},[t._v("#")]),t._v(" geofence_result (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/geofence_result.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp\t\t\t    # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 GF_ACTION_NONE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("                    # no action on geofence violation\nuint8 GF_ACTION_WARN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                    # critical mavlink message\nuint8 GF_ACTION_LOITER "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("                  # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" to AUTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("LOITER\nuint8 GF_ACTION_RTL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("                     # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" to AUTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("RTL\nuint8 GF_ACTION_TERMINATE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("               # flight termination\nuint8 GF_ACTION_LAND "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\t\t    # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" to AUTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("LAND\n\nbool geofence_violated\t\t# true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the geofence is violated\nuint8 geofence_action       \t# action to take when geofence is violated\n\nbool home_required\t\t# true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the geofence requires a valid home position\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);