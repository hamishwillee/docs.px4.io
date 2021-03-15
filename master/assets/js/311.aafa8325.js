(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1637:function(t,e,a){"use strict";a.r(e);var o=a(18),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"manual-stabilized-mode-multicopter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manual-stabilized-mode-multicopter"}},[t._v("#")]),t._v(" Manual/Stabilized Mode (Multicopter)")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_difficulty"}},[o("img",{attrs:{src:a(328),title:"Medium difficulty to fly",width:"30px"}})]),t._v(" "),o("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_manual"}},[o("img",{attrs:{src:a(323),title:"Manual/Remote control required",width:"30px"}})])],1),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Manual/Stabilized")]),t._v(" mode stabilizes the multicopter when the RC control sticks are centred. To manually move/fly the vehicle you move the sticks outside of the centre.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This multicopter mode is enabled if you set either "),o("em",[t._v("Manual")]),t._v(" or "),o("em",[t._v("Stabilized")]),t._v(" modes.")])]),t._v(" "),o("p",[t._v("When under manual control the roll and pitch sticks control the "),o("em",[t._v("angle")]),t._v(" of the vehicle (attitude) around the respective axes, the yaw stick controls the rate of rotation above the horizontal plane, and the throttle controls altitude/speed.")]),t._v(" "),o("p",[t._v("As soon as you release the control sticks they will return to the center deadzone. The multicopter will level out and stop once the roll and pitch sticks are centered.\nThe vehicle will then hover in place/maintain altitude - provided it is properly balanced, throttle is set appropriately (see "),o("a",{attrs:{href:"#params"}},[t._v("below")]),t._v("), and no external forces are applied (e.g. wind). The craft will drift in the direction of any wind and you have to control the throttle to hold altitude.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(372),alt:"MC Manual Flight"}})]),t._v(" "),o("h2",{attrs:{id:"technical-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#technical-description"}},[t._v("#")]),t._v(" Technical Description")]),t._v(" "),o("p",[t._v("The pilot's inputs are passed as roll and pitch angle commands and a yaw rate command. Throttle is rescaled (see "),o("a",{attrs:{href:"#params"}},[t._v("below")]),t._v(") and passed directly to the output mixer. The autopilot controls the attitude, meaning it regulates the roll and pitch angles to zero when the RC sticks are centered inside the controller deadzone (consequently leveling-out the attitude). The autopilot does not compensate for drift due to wind (or other sources).")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("ul",[o("li",[t._v("Manual input is required (RC controller, or gamepad/thumbsticks through MAVLink).")])])]),t._v(" "),o("p",[o("span",{attrs:{id:"params"}})]),t._v(" "),o("h2",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Parameter")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("span",{attrs:{id:"MPC_THR_HOVER"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")])],1),t._v(" "),o("td",[t._v("Hover throttle that is output when the throttle stick is centered and "),o("code",[t._v("MPC_THR_CURVE")]),t._v(" is set to default.")])]),t._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"MPC_THR_CURVE"}}),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_CURVE"}},[t._v("MPC_THR_CURVE")])],1),t._v(" "),o("td",[t._v("Defines the throttle scaling. By default this is set to "),o("strong",[t._v("Rescale to hover thrust")]),t._v(", which means that when the throttle stick is centered the configured hover throttle is output ("),o("code",[t._v("MPC_THR_HOVER")]),t._v(") and the stick input is linearly rescaled below and above that (allowing for a smooth transition between Stabilized and Altitude/Position control). "),o("br"),t._v("On powerful vehicles the hover throttle might be very low (e.g. below 20%) so that rescaling distorts the throttle input - i.e. here 80% of the thrust would be controlled by just the top half of the stick input and 20% by the bottom. If needed "),o("code",[t._v("MPC_THR_CURVE")]),t._v(" can be set to "),o("strong",[t._v("No Rescale")]),t._v(" so that there is no rescaling (stick input to throttle mapping is independent of "),o("code",[t._v("MPC_THR_HOVER")]),t._v(").")])])])])])}),[],!1,null,null,null);e.default=r.exports},323:function(t,e,a){t.exports=a.p+"assets/img/remote_control.e49232a6.svg"},328:function(t,e){t.exports="data:image/png;base64,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"},372:function(t,e,a){t.exports=a.p+"assets/img/manual_stabilized_MC.857b681e.png"}}]);