(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{1629:function(t,e,a){"use strict";a.r(e);var o=a(18),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"manual-mode-fixed-wing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manual-mode-fixed-wing"}},[t._v("#")]),t._v(" Manual Mode (Fixed Wing)")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_difficulty"}},[o("img",{attrs:{src:a(325),title:"Hard to fly",width:"30px"}})]),t._v(" "),o("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_manual"}},[o("img",{attrs:{src:a(323),title:"Manual/Remote control required",width:"30px"}})])],1),t._v(" "),o("p",[o("em",[t._v("Manual mode")]),t._v(" sends RC stick input directly to the output mixer for fully manual control.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("This is the hardest mode to fly, because nothing is stabilized. Unlike "),o("RouterLink",{attrs:{to:"/en/flight_modes/acro_fw.html"}},[t._v("Acro Mode")]),t._v(" if the RP stick is centered the vehicle will not automatically stop rotating around the axis; the pilot actually has to move the stick to apply force in the other direction.")],1)]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This is the only mode that overrides the FMU (commands are sent via the safety coprocessor).\nIt provides a safety mechanism that allows full control of throttle, elevator, ailerons and rudder via RC in the event of an FMU firmware malfunction.")])]),t._v(" "),o("h2",{attrs:{id:"technical-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#technical-description"}},[t._v("#")]),t._v(" Technical Description")]),t._v(" "),o("p",[t._v('RC mode where stick input is sent directly to the output mixer (for "fully" manual control).')]),t._v(" "),o("p",[t._v("This is the only mode that overrides the FMU (commands are sent via the safety coprocessor). It provides a safety mechanism that allows full control of throttle, elevator, ailerons and rudder via RC in the event of an FMU firmware malfunction.")]),t._v(" "),o("h2",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Parameter")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("span",{attrs:{id:"FW_MAN_P_SC"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_MAN_P_SC"}},[t._v("FW_MAN_P_SC")])],1),t._v(" "),o("td",[t._v("Manual pitch scale. Scale factor applied to the desired pitch actuator command in full manual mode. This parameter allows to adjust the throws of the control surfaces. Default: 1.0 norm.")])]),t._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"FW_MAN_R_SC"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_MAN_R_SC"}},[t._v("FW_MAN_R_SC")])],1),t._v(" "),o("td",[t._v("Manual roll scale. Scale factor applied to the desired roll actuator command in full manual mode. This parameter allows to adjust the throws of the control surfaces. Default: 1.0 norm.")])]),t._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"FW_MAN_Y_SC"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_MAN_Y_SC"}},[t._v("FW_MAN_Y_SC")])],1),t._v(" "),o("td",[t._v("Manual yaw scale. Scale factor applied to the desired yaw actuator command in full manual mode. This parameter allows to adjust the throws of the control surfaces. Default: 1.0 norm.")])])])])])}),[],!1,null,null,null);e.default=r.exports},323:function(t,e,a){t.exports=a.p+"assets/img/remote_control.e49232a6.svg"},325:function(t,e){t.exports="data:image/png;base64,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"}}]);