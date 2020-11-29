(window.webpackJsonp=window.webpackJsonp||[]).push([[893],{1845:function(t,e,a){"use strict";a.r(e);var i=a(18),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"air-traffic-avoidance-uas-traffic-management-utm"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#air-traffic-avoidance-uas-traffic-management-utm"}},[t._v("#")]),t._v(" Air Traffic Avoidance: UAS Traffic Management (UTM)")]),t._v(" "),i("p",[t._v("PX4 can use MAVLink "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[i("code",[t._v("UTM_GLOBAL_POSITION")]),i("OutboundLink")],1),t._v(" messages to support simple air traffic avoidance in "),i("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("missions")]),t._v(". If a potential collision is detected, PX4 can "),i("em",[t._v("warn")]),t._v(", immediately "),i("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("land")]),t._v(", or "),i("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("return")]),t._v(" (depending on the value of "),i("a",{attrs:{href:"#NAV_TRAFF_AVOID"}},[i("code",[t._v("NAV_TRAFF_AVOID")])]),t._v(").")],1),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note")]),t._v(" This implementation is exactly the same as for "),i("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADS-B traffic avoidance")]),t._v(" (except for the source of other-vehicle data). For more information see "),i("a",{attrs:{href:"#implementation"}},[t._v("implementation")]),t._v(" below.")],1)]),t._v(" "),i("h2",{attrs:{id:"configure-traffic-avoidance"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configure-traffic-avoidance"}},[t._v("#")]),t._v(" Configure Traffic Avoidance")]),t._v(" "),i("p",[t._v("Configure the trigger distance and action when there is a potential collision using the parameters below:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Parameter")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("!!crwdBlockTags_4_sgaTkcolBdwrc!"),i("img",{attrs:{src:a(426)+"#NAV_TRAFF_AVOID",alt:"NAV_TRAFF_AVOID"}})]),t._v(" "),i("td",[t._v("Enable traffic avoidance mode specify avoidance response. 0: Disable, 1: Warn only, 2: Return mode, 3: Land mode.")])]),t._v(" "),i("tr",[i("td",[t._v("!!crwdBlockTags_5_sgaTkcolBdwrc!"),i("img",{attrs:{src:a(426)+"#NAV_TRAFF_A_RADM",alt:"NAV_TRAFF_A_RADM"}})]),t._v(" "),i("td",[t._v("Set traffic avoidance trigger distance for "),i("em",[t._v("manned")]),t._v(" aviation.")])]),t._v(" "),i("tr",[i("td",[t._v("!!crwdBlockTags_6_sgaTkcolBdwrc!"),i("img",{attrs:{src:a(426)+"#NAV_TRAFF_A_RADU",alt:"NAV_TRAFF_A_RADU"}})]),t._v(" "),i("td",[t._v("Set traffic avoidance trigger distance for "),i("em",[t._v("unmanned")]),t._v(" aviation.")])])])]),t._v(" "),i("p",[i("a",{attrs:{id:"implementation"}})]),t._v(" "),i("h2",{attrs:{id:"implementation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),i("p",[t._v("PX4 listens for "),i("code",[t._v("UTM_GLOBAL_POSITION")]),t._v(" MAVLink messages during missions. When a valid message is received, its validity flags, position and heading are mapped into the same "),i("code",[t._v("transponder_report")]),t._v(" UORB topic used for "),i("em",[t._v("ADS-B traffic avoidance")]),t._v(".")]),t._v(" "),i("p",[t._v("The implementation is otherwise "),i("em",[t._v("exactly")]),t._v(" as described in: "),i("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html#implementation"}},[t._v("ADS-B traffic avoidance > Implementation")]),t._v(".")],1),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note")]),t._v(" "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTM_GLOBAL_POSITION"),i("OutboundLink")],1),t._v(" contains additional fields that are not provided by an ADSB transponder (see "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADSB_VEHICLE"),i("OutboundLink")],1),t._v("). The current implementation simply drops the additional fields (including information about the vehicle's planned next waypoint).")])]),t._v(" "),i("h2",{attrs:{id:"further-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADS-B Traffic Avoidance")])],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);