(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{1656:function(t,e,i){"use strict";i.r(e);var o=i(18),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"hold-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hold-mode"}},[t._v("#")]),t._v(" Hold Mode")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[o("img",{attrs:{src:i(322),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Hold")]),t._v(' flight mode (a.k.a. "Loiter") causes the vehicle to stop and maintain its current GPS position and altitude (MC vehicles will hover at the GPS position, while FW vehicles will circle around it).')]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[o("em",[t._v("Hold mode")]),t._v(" can be used to pause a mission or to help you regain control of a vehicle in an emergency.\nIt is usually activated with a pre-programmed switch.")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("ul",[o("li",[t._v("This mode requires GPS.")]),t._v(" "),o("li",[t._v("This mode is automatic - no user intervention is "),o("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),o("li",[t._v("RC control switches can be used to change flight modes on any vehicle.")]),t._v(" "),o("li",[t._v("RC stick movement in a multicopter (or VTOL in multicopter mode) will "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("by default")]),t._v(" change the vehicle to "),o("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" unless handling a critical battery failsafe.")],1)])]),t._v(" "),o("p",[t._v("The specific behaviour for each vehicle type is described below.")]),t._v(" "),o("h2",{attrs:{id:"multi-copter-mc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multi-copter-mc"}},[t._v("#")]),t._v(" Multi-Copter (MC)")]),t._v(" "),o("p",[t._v("A multicopter hovers at the current position and altitude.")]),t._v(" "),o("p",[t._v("RC stick movement will change the vehicle to "),o("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (by "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("default")]),t._v(").")],1),t._v(" "),o("p",[t._v("The behaviour can be configured using the parameters below.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Parameter")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("span",{attrs:{id:"MIS_LTRMIN_ALT"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MIS_LTRMIN_ALT"}},[t._v("MIS_LTRMIN_ALT")])],1),t._v(" "),o("td",[t._v("Minimum height for loiter mode (vehicle will ascend to this altitude if mode is engaged at a lower altitude).")])]),t._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"COM_RC_OVERRIDE"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),o("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),o("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(". This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)]),t._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"COM_RC_STICK_OV"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),o("td",[t._v("The amount of stick movement that causes a transition to "),o("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (if "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)])])]),t._v(" "),o("h2",{attrs:{id:"fixed-wing-fw"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[t._v("#")]),t._v(" Fixed Wing (FW)")]),t._v(" "),o("p",[t._v("The aircraft circles around the GPS hold position at the current altitude.\nThe vehicle will first ascend to "),o("code",[t._v("MIS_LTRMIN_ALT")]),t._v(" if the mode is engaged below this altitude.")]),t._v(" "),o("p",[t._v("RC stick movement is ignored.")]),t._v(" "),o("p",[t._v("The behaviour can be configured using the parameters below.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Parameter")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[t._v("NAV_LOITER_RAD")])],1),t._v(" "),o("td",[t._v("The radius of the loiter circle.")])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MIS_LTRMIN_ALT"}},[t._v("MIS_LTRMIN_ALT")])],1),t._v(" "),o("td",[t._v("Minimum height for loiter mode (vehicle will ascend to this altitude if mode is engaged at a lower altitude).")])])])]),t._v(" "),o("h2",{attrs:{id:"vtol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),o("p",[t._v("A VTOL follows the HOLD behavior and parameters of "),o("a",{attrs:{href:"#fixed-wing-fw"}},[t._v("Fixed Wing")]),t._v(" when in FW mode, and of "),o("a",{attrs:{href:"#multi-copter-mc"}},[t._v("Multicopter")]),t._v(" when in MC mode.")])])}),[],!1,null,null,null);e.default=a.exports},322:function(t,e,i){t.exports=i.p+"assets/img/position_fixed.c1403cf0.svg"}}]);