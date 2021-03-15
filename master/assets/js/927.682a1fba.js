(window.webpackJsonp=window.webpackJsonp||[]).push([[927],{1876:function(t,e,a){"use strict";a.r(e);var i=a(18),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"air-traffic-avoidance-uas-traffic-management-utm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#air-traffic-avoidance-uas-traffic-management-utm"}},[t._v("#")]),t._v(" Air Traffic Avoidance: UAS Traffic Management (UTM)")]),t._v(" "),a("p",[t._v("PX4 can use MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("UTM_GLOBAL_POSITION")]),a("OutboundLink")],1),t._v(" messages to support simple air traffic avoidance in "),a("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("missions")]),t._v(". If a potential collision is detected, PX4 can "),a("em",[t._v("warn")]),t._v(", immediately "),a("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("land")]),t._v(", or "),a("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("return")]),t._v(" (depending on the value of "),a("a",{attrs:{href:"#NAV_TRAFF_AVOID"}},[a("code",[t._v("NAV_TRAFF_AVOID")])]),t._v(").")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This implementation is exactly the same as for "),a("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADS-B traffic avoidance")]),t._v(" (except for the source of other-vehicle data). For more information see "),a("a",{attrs:{href:"#implementation"}},[t._v("implementation")]),t._v(" below.")],1)]),t._v(" "),a("h2",{attrs:{id:"configure-traffic-avoidance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-traffic-avoidance"}},[t._v("#")]),t._v(" Configure Traffic Avoidance")]),t._v(" "),a("p",[t._v("Configure the trigger distance and action when there is a potential collision using the parameters below:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_AVOID"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")])],1),t._v(" "),a("td",[t._v("Enable traffic avoidance mode specify avoidance response. 0: Disable, 1: Warn only, 2: Return mode, 3: Land mode.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_A_RADM"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_A_RADM"}},[t._v("NAV_TRAFF_A_RADM")])],1),t._v(" "),a("td",[t._v("Set traffic avoidance trigger distance for "),a("em",[t._v("manned")]),t._v(" aviation.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_A_RADU"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_A_RADU"}},[t._v("NAV_TRAFF_A_RADU")])],1),t._v(" "),a("td",[t._v("Set traffic avoidance trigger distance for "),a("em",[t._v("unmanned")]),t._v(" aviation.")])])])]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("PX4 listens for "),a("code",[t._v("UTM_GLOBAL_POSITION")]),t._v(" MAVLink messages during missions. When a valid message is received, its validity flags, position and heading are mapped into the same "),a("code",[t._v("transponder_report")]),t._v(" UORB topic used for "),a("em",[t._v("ADS-B traffic avoidance")]),t._v(".")]),t._v(" "),a("p",[t._v("The implementation is otherwise "),a("em",[t._v("exactly")]),t._v(" as described in: "),a("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html#implementation"}},[t._v("ADS-B traffic avoidance > Implementation")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTM_GLOBAL_POSITION"),a("OutboundLink")],1),t._v(" contains additional fields that are not provided by an ADSB transponder (see "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADSB_VEHICLE"),a("OutboundLink")],1),t._v("). The current implementation simply drops the additional fields (including information about the vehicle's planned next waypoint).")])]),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADS-B Traffic Avoidance")])],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);