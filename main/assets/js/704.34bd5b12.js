(window.webpackJsonp=window.webpackJsonp||[]).push([[704],{2053:function(e,t,i){"use strict";i.r(t);var a=i(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"land-mode-fixed-wing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-mode-fixed-wing"}},[e._v("#")]),e._v(" Land Mode (Fixed-wing)")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position estimate required (e.g. GPS)",width:"30px"}})])],1),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Land")]),e._v(" flight mode causes the vehicle to descend at the position where the mode was engaged, following a circular path until touchdown.\nAfter landing, vehicles will disarm after a short timeout (by default).")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Fixed-wing "),a("em",[e._v("land mode")]),e._v(" should only be used in an "),a("strong",[e._v("emergency")]),e._v("!\nThe vehicle will descend around the current location irrespective of the suitability of the underlying terrain, and touch down while following a circular flight path.")]),e._v(" "),a("p",[e._v("Where possible, instead use "),a("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[e._v("Return mode")]),e._v(" with a predefined "),a("RouterLink",{attrs:{to:"/en/flight_modes/mission.html#fw-mission-landing"}},[e._v("Fixed-wing mission landing")]),e._v(".")],1)]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("ul",[a("li",[e._v("Mode is automatic - no user intervention is "),a("em",[e._v("required")]),e._v(" to control the vehicle.")]),e._v(" "),a("li",[e._v("Mode requires at least a valid local position estimate (does not require a global position).\n"),a("ul",[a("li",[e._v("Flying vehicles can't switch to this mode without valid local position.")]),e._v(" "),a("li",[e._v("Flying vehicles will failsafe if they lose the position estimate.")])])]),e._v(" "),a("li",[e._v("Mode prevents arming (vehicle must be armed when switching to this mode).")]),e._v(" "),a("li",[e._v("RC control switches can be used to change flight modes on any vehicle.")]),e._v(" "),a("li",[e._v("RC stick movement is ignored.")]),e._v(" "),a("li",[e._v("The mode can be triggered using the "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_NAV_LAND"),a("OutboundLink")],1),e._v(" MAVLink command, or by explicitly switching to Land mode.")])])]),e._v(" "),a("h2",{attrs:{id:"technical-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[e._v("#")]),e._v(" Technical Summary")]),e._v(" "),a("p",[e._v("Land mode causes the vehicle follow a descending circular path (corkscrew) until touchdown.")]),e._v(" "),a("p",[e._v("When the mode is engaged, the vehicle starts to loiter around the current vehicle position with loiter radius "),a("a",{attrs:{href:"#NAV_LOITER_RAD"}},[e._v("NAV_LOITER_RAD")]),e._v(" and begins to descend with a constant descent speed.\nThe descent speed is calculated using "),a("a",{attrs:{href:"#FW_LND_ANG"}},[e._v("FW_LND_ANG")]),e._v(" and the set landing airspeed "),a("a",{attrs:{href:"#FW_LND_AIRSPD"}},[e._v("FW_LND_AIRSPD")]),e._v(".\nThe vehicle will flare if configured to do so (see "),a("RouterLink",{attrs:{to:"/en/flight_modes/mission.html#flaring-roll-out"}},[e._v("Flaring")]),e._v("), and otherwise proceed circling with the constant descent rate until landing is detected.")],1),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/flight_modes/mission.html#automatic-abort"}},[e._v("Manual nudging")]),e._v(" and "),a("RouterLink",{attrs:{to:"/en/flight_modes/mission.html#nudging"}},[e._v("automatic land abort")]),e._v(" are not available in land mode.")],1),e._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("Land mode behaviour can be configured using the parameters below.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"NAV_LOITER_RAD"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[e._v("NAV_LOITER_RAD")])],1),e._v(" "),a("td",[e._v("The loiter radius that the controller tracks for the whole landing sequence.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_LND_ANG"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_LND_ANG"}},[e._v("FW_LND_ANG")])],1),e._v(" "),a("td",[e._v("The flight path angle setpoint.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_LND_AIRSPD"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_LND_AIRSPD"}},[e._v("FW_LND_AIRSPD")])],1),e._v(" "),a("td",[e._v("The airspeed setpoint.")])])])]),e._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/flight_modes_mc/land.html"}},[e._v("Land Mode (MC)")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/flight_modes/land.html"}},[e._v("Land Mode (VTOL)")])],1)])])}),[],!1,null,null,null);t.default=n.exports},327:function(e,t,i){e.exports=i.p+"assets/img/position_fixed.38e4a675.svg"}}]);