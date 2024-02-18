(window.webpackJsonp=window.webpackJsonp||[]).push([[831],{2926:function(t,e,a){"use strict";a.r(e);var o=a(19),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"land-mode-multicopter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#land-mode-multicopter"}},[t._v("#")]),t._v(" Land Mode (Multicopter)")]),t._v(" "),o("img",{attrs:{src:a(328),title:"Position estimate required (e.g. GPS)",width:"30px"}}),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Land")]),t._v(" flight mode causes the vehicle to land at the position where the mode was engaged. The vehicle will disarm shortly after landing (by default).")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("ul",[o("li",[t._v("Mode is automatic - no user intervention is "),o("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),o("li",[t._v("Mode requires at least a valid local position estimate (does not require a global position).\n"),o("ul",[o("li",[t._v("Flying vehicles can't switch to this mode without valid local position.")]),t._v(" "),o("li",[t._v("Flying vehicles will failsafe if they lose the position estimate.")])])]),t._v(" "),o("li",[t._v("Mode prevents arming (vehicle must be armed when switching to this mode).")]),t._v(" "),o("li",[t._v("RC control switches can be used to change flight modes on any vehicle.")]),t._v(" "),o("li",[t._v("RC stick movement in a multicopter (or VTOL in multicopter mode) will "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("by default")]),t._v(" change the vehicle to "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" unless handling a critical battery failsafe.")],1),t._v(" "),o("li",[t._v("The mode can be triggered using the "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_NAV_LAND"),o("OutboundLink")],1),t._v(" MAVLink command, or by explicitly switching to Land mode.")])])]),t._v(" "),o("h2",{attrs:{id:"technical-summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[t._v("#")]),t._v(" Technical Summary")]),t._v(" "),o("p",[t._v("The vehicle will land at the location at which the mode was engaged. The vehicle descends at the rate specified in "),o("a",{attrs:{href:"#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")]),t._v(" and will disarm after landing (by "),o("a",{attrs:{href:"#COM_DISARM_LAND"}},[t._v("default")]),t._v(").")]),t._v(" "),o("p",[t._v("RC stick movement will change the vehicle to "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (by "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("default")]),t._v(").")],1),t._v(" "),o("h3",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),o("p",[t._v("Land mode behaviour can be configured using the parameters below.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Parameter")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{id:"MPC_LAND_SPEED"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")])],1),t._v(" "),o("td",[t._v("The rate of descent during landing. This should be kept fairly low as the ground conditions are not known.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"COM_DISARM_LAND"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),o("td",[t._v("Time-out for auto disarm after landing, in seconds. If set to -1 the vehicle will not disarm on landing.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"COM_RC_OVERRIDE"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),o("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(". This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"COM_RC_STICK_OV"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),o("td",[t._v("The amount of stick movement that causes a transition to "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (if "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)])])]),t._v(" "),o("h2",{attrs:{id:"see-also"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/flight_modes_fw/land.html"}},[t._v("Land Mode (FW)")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/flight_modes_vtol/land.html"}},[t._v("Land Mode (VTOL)")])],1)])])}),[],!1,null,null,null);e.default=i.exports},328:function(t,e,a){t.exports=a.p+"assets/img/position_fixed.38e4a675.svg"}}]);