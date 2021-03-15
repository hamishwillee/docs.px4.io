(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{1634:function(e,t,i){"use strict";i.r(t);var o=i(18),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"hold-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hold-mode"}},[e._v("#")]),e._v(" Hold Mode")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[o("img",{attrs:{src:i(322),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),e._v(" "),o("p",[e._v("The "),o("em",[e._v("Hold")]),e._v(' flight mode (a.k.a. "Loiter") causes the vehicle to stop and maintain its current GPS position and altitude (MC vehicles will hover at the GPS position, while FW vehicles will circle around it).')]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[o("em",[e._v("Hold mode")]),e._v(" can be used to pause a mission or to help you regain control of a vehicle in an emergency.\nIt is usually activated with a pre-programmed switch.")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("ul",[o("li",[e._v("This mode requires GPS.")]),e._v(" "),o("li",[e._v("This mode is automatic - no user intervention is "),o("em",[e._v("required")]),e._v(" to control the vehicle.")]),e._v(" "),o("li",[e._v("RC control switches can be used to change flight modes on any vehicle.")]),e._v(" "),o("li",[e._v("RC stick movement in a multicopter (or VTOL in multicopter mode) will "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[e._v("by default")]),e._v(" change the vehicle to "),o("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" unless handling a critical battery failsafe.")],1)])]),e._v(" "),o("p",[e._v("The specific behaviour for each vehicle type is described below.")]),e._v(" "),o("h2",{attrs:{id:"multi-copter-mc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multi-copter-mc"}},[e._v("#")]),e._v(" Multi-Copter (MC)")]),e._v(" "),o("p",[e._v("A multicopter hovers at the current position and altitude.")]),e._v(" "),o("p",[e._v("RC stick movement will "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[e._v("by default")]),e._v(" change the vehicle to "),o("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" unless handling a critical battery failsafe.")],1),e._v(" "),o("p",[e._v("The behaviour can be configured using the parameters below.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parameter")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("span",{attrs:{id:"MIS_LTRMIN_ALT"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MIS_LTRMIN_ALT"}},[e._v("MIS_LTRMIN_ALT")])],1),e._v(" "),o("td",[e._v("Minimum height for loiter mode (vehicle will ascend to this altitude if mode is engaged at a lower altitude).")])]),e._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"COM_RC_OVERRIDE"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[e._v("COM_RC_OVERRIDE")])],1),e._v(" "),o("td",[e._v("If enabled, stick movement on a multicopter (or VTOL in multicopter mode) gives control back to the pilot in "),o("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" (except when vehicle is handling a critical battery failsafe). This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)])])]),e._v(" "),o("h2",{attrs:{id:"fixed-wing-fw"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[e._v("#")]),e._v(" Fixed Wing (FW)")]),e._v(" "),o("p",[e._v("The aircraft circles around the GPS hold position at the current altitude.\nThe vehicle will first ascend to "),o("code",[e._v("MIS_LTRMIN_ALT")]),e._v(" if the mode is engaged below this altitude.")]),e._v(" "),o("p",[e._v("RC stick movement is ignored.")]),e._v(" "),o("p",[e._v("The behaviour can be configured using the parameters below.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parameter")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[e._v("NAV_LOITER_RAD")])],1),e._v(" "),o("td",[e._v("The radius of the loiter circle.")])]),e._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MIS_LTRMIN_ALT"}},[e._v("MIS_LTRMIN_ALT")])],1),e._v(" "),o("td",[e._v("Minimum height for loiter mode (vehicle will ascend to this altitude if mode is engaged at a lower altitude).")])])])]),e._v(" "),o("h2",{attrs:{id:"vtol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[e._v("#")]),e._v(" VTOL")]),e._v(" "),o("p",[e._v("A VTOL follows the HOLD behavior and parameters of "),o("a",{attrs:{href:"#fixed-wing-fw"}},[e._v("Fixed Wing")]),e._v(" when in FW mode, and of "),o("a",{attrs:{href:"#multi-copter-mc"}},[e._v("Multicopter")]),e._v(" when in MC mode.")])])}),[],!1,null,null,null);t.default=a.exports},322:function(e,t,i){e.exports=i.p+"assets/img/position_fixed.c1403cf0.svg"}}]);