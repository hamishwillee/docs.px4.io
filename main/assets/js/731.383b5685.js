(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{2163:function(t,e,i){"use strict";i.r(e);var o=i(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"hold-mode-multicopter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hold-mode-multicopter"}},[t._v("#")]),t._v(" Hold Mode (Multicopter)")]),t._v(" "),o("img",{attrs:{src:i(328),title:"Position fix required (e.g. GPS)",width:"30px"}}),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Hold")]),t._v(" flight mode causes the vehicle to stop and hover at its current GPS position and altitude.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[o("em",[t._v("Hold mode")]),t._v(" can be used to pause a mission or to help you regain control of a vehicle in an emergency.\nIt is usually activated with a pre-programmed switch.")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("ul",[o("li",[t._v("Mode is automatic - no user intervention is "),o("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),o("li",[t._v("Mode requires a global 3d position estimate (from GPS or inferred from a "),o("RouterLink",{attrs:{to:"/en/ros/external_position_estimation.html#enabling-auto-modes-with-a-local-position"}},[t._v("local position")]),t._v(").\n"),o("ul",[o("li",[t._v("Flying vehicles can't switch to this mode without global position.")]),t._v(" "),o("li",[t._v("Flying vehicles will failsafe if they lose the position estimate.")]),t._v(" "),o("li",[t._v("Disarmed vehicles can switch to mode without valid position estimate but can't arm.")])])],1),t._v(" "),o("li",[t._v("Mode requires wind and flight time are within allowed limits (specified via parameters).")]),t._v(" "),o("li",[t._v("RC control switches can be used to change flight modes on any vehicle.")]),t._v(" "),o("li",[t._v("RC stick movement will "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("by default")]),t._v(" change the vehicle to "),o("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" unless handling a critical battery failsafe.")],1)])]),t._v(" "),o("h2",{attrs:{id:"technical-summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[t._v("#")]),t._v(" Technical Summary")]),t._v(" "),o("p",[t._v("The vehicle hovers at the current position and altitude.\nThe vehicle will first ascend to "),o("a",{attrs:{href:"#NAV_MIN_LTR_ALT"}},[t._v("NAV_MIN_LTR_ALT")]),t._v(" if the mode is engaged below this altitude.")]),t._v(" "),o("p",[t._v("RC stick movement will change the vehicle to "),o("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (by "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("default")]),t._v(").")],1),t._v(" "),o("h3",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),o("p",[t._v("Hold mode behaviour can be configured using the parameters below.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Parameter")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{id:"NAV_MIN_LTR_ALT"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_MIN_LTR_ALT"}},[t._v("NAV_MIN_LTR_ALT")])],1),t._v(" "),o("td",[t._v("This is the minimum altitude above Home the system will always obey in Hold mode if switched into this mode without specifying an altitude (e.g. through switch on RC).")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"COM_RC_OVERRIDE"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),o("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),o("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(". This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"COM_RC_STICK_OV"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),o("td",[t._v("The amount of stick movement that causes a transition to "),o("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (if "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)])])]),t._v(" "),o("h2",{attrs:{id:"see-also"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/flight_modes_fw/hold.html"}},[t._v("Hold Mode (FW)")])],1)])}),[],!1,null,null,null);e.default=a.exports},328:function(t,e,i){t.exports=i.p+"assets/img/position_fixed.38e4a675.svg"}}]);