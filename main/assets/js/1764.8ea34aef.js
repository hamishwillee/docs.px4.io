(window.webpackJsonp=window.webpackJsonp||[]).push([[1764],{3202:function(e,t,a){"use strict";a.r(t);var i=a(19),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("Redirect",{attrs:{to:"../peripherals/adsb_flarm"}}),e._v(" "),a("h1",{attrs:{id:"air-traffic-avoidance-uas-traffic-management-utm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#air-traffic-avoidance-uas-traffic-management-utm"}},[e._v("#")]),e._v(" Air Traffic Avoidance: UAS Traffic Management (UTM)")]),e._v(" "),a("p",[e._v("PX4 can use MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("UTM_GLOBAL_POSITION")]),a("OutboundLink")],1),e._v(" messages to support simple air traffic avoidance in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[e._v("missions")]),e._v(". If a potential collision is detected, PX4 can "),a("em",[e._v("warn")]),e._v(", immediately "),a("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[e._v("land")]),e._v(", or "),a("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[e._v("return")]),e._v(" (depending on the value of "),a("a",{attrs:{href:"#NAV_TRAFF_AVOID"}},[a("code",[e._v("NAV_TRAFF_AVOID")])]),e._v(").")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("This implementation is exactly the same as for "),a("RouterLink",{attrs:{to:"/zh/advanced_features/traffic_avoidance_adsb.html"}},[e._v("ADS-B traffic avoidance")]),e._v(" (except for the source of other-vehicle data). For more information see "),a("a",{attrs:{href:"#implementation"}},[e._v("implementation")]),e._v(" below.")],1)]),e._v(" "),a("h2",{attrs:{id:"configure-traffic-avoidance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-traffic-avoidance"}},[e._v("#")]),e._v(" Configure Traffic Avoidance")]),e._v(" "),a("p",[e._v("Configure the trigger distance and action when there is a potential collision using the parameters below:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_AVOID"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[e._v("NAV_TRAFF_AVOID")])],1),e._v(" "),a("td",[e._v("Enable traffic avoidance mode specify avoidance response. 0: Disable, 1: Warn only, 2: Return mode, 3: Land mode.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_A_HOR"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_A_HOR"}},[e._v("NAV_TRAFF_A_HOR")])],1),e._v(" "),a("td",[e._v("Horizonal radius of cylinder around the vehicle that defines its airspace (i.e. the airspace in the ground plane).")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_A_VER"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_A_VER"}},[e._v("NAV_TRAFF_A_VER")])],1),e._v(" "),a("td",[e._v("Vertical height above and below vehicle of the cylinder that defines its airspace (also see "),a("a",{attrs:{href:"#NAV_TRAFF_A_HOR"}},[e._v("NAV_TRAFF_A_HOR")]),e._v(").")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_TRAFF_COLL_T"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_COLL_T"}},[e._v("NAV_TRAFF_COLL_T")])],1),e._v(" "),a("td",[e._v("Collision time threshold. Avoidance will trigger if the estimated time until collision drops below this value (the estimated time is based on relative speed of traffic and UAV).")])])])]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("PX4 listens for "),a("code",[e._v("UTM_GLOBAL_POSITION")]),e._v(" MAVLink messages during missions. When a valid message is received, its validity flags, position and heading are mapped into the same "),a("code",[e._v("transponder_report")]),e._v(" UORB topic used for "),a("em",[e._v("ADS-B traffic avoidance")]),e._v(".")]),e._v(" "),a("p",[e._v("The implementation is otherwise "),a("em",[e._v("exactly")]),e._v(" as described in: "),a("RouterLink",{attrs:{to:"/zh/advanced_features/traffic_avoidance_adsb.html#implementation"}},[e._v("ADS-B traffic avoidance > Implementation")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[e._v("UTM_GLOBAL_POSITION"),a("OutboundLink")],1),e._v(" contains additional fields that are not provided by an ADSB transponder (see "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADSB_VEHICLE"),a("OutboundLink")],1),e._v("). The current implementation simply drops the additional fields (including information about the vehicle's planned next waypoint).")])]),e._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_features/traffic_avoidance_adsb.html"}},[e._v("ADS-B Traffic Avoidance")])],1)])],1)}),[],!1,null,null,null);t.default=r.exports}}]);