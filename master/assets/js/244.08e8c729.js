(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1695:function(t,e,a){"use strict";a.r(e);var i=a(19),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"altitude-mode-multicopter"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#altitude-mode-multicopter"}},[t._v("#")]),t._v(" Altitude Mode (Multicopter)")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_difficulty"}},[i("img",{attrs:{src:a(328),title:"Easy to fly",width:"30px"}})]),t._v(" "),i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_manual"}},[i("img",{attrs:{src:a(327),title:"Manual/Remote control required",width:"30px"}})]),t._v(" "),i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#altitude_only"}},[i("img",{attrs:{src:a(331),title:"Altitude required (e.g. Baro, Rangefinder)",width:"30px"}})])],1),t._v(" "),i("p",[i("em",[t._v("Altitude mode")]),t._v(" is a "),i("em",[t._v("relatively")]),t._v(' easy-to-fly RC mode in which roll and pitch sticks control vehicle movement in the left-right and forward-back directions (relative to the "front" of the vehicle), yaw stick controls rate of rotation over the horizontal plane, and throttle controls speed of ascent-descent.')]),t._v(" "),i("p",[t._v("When the sticks are released/centered the vehicle will level and maintain the current "),i("em",[t._v("altitude")]),t._v(".\nIf moving in the horizontal plane the vehicle will continue until any momentum is dissipated by wind resistance.\nIf the wind blows the aircraft will drift in the direction of the wind.")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[i("em",[t._v("Altitude mode")]),t._v(" is the safest non-GPS manual mode for new fliers. It is just like "),i("RouterLink",{attrs:{to:"/en/flight_modes/manual_stabilized_mc.html"}},[t._v("Manual/Stabilized")]),t._v(" mode but additionally locks the vehicle altitude when the sticks are released.")],1)]),t._v(" "),i("p",[t._v("The diagram below shows the mode behaviour visually (for a "),i("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("mode 2 transmitter")]),t._v(").")],1),t._v(" "),i("p",[i("img",{attrs:{src:a(834),alt:"Altitude Control MC - Mode2 RC Controller"}})]),t._v(" "),i("h2",{attrs:{id:"technical-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[t._v("#")]),t._v(" Technical Summary")]),t._v(" "),i("p",[t._v("RC/manual mode like "),i("RouterLink",{attrs:{to:"/en/flight_modes/manual_stabilized_mc.html"}},[t._v("Manual/Stabilized (MC)")]),t._v(" mode but with "),i("em",[t._v("altitude stabilization")]),t._v(" (centered sticks level vehicle and hold it to fixed altitude).")],1),t._v(" "),i("ul",[i("li",[t._v("Centered sticks (inside deadband):\n"),i("ul",[i("li",[t._v("RPY sticks levels vehicle.")]),t._v(" "),i("li",[t._v("Throttle (~50%) holds current altitude steady against wind.")])])]),t._v(" "),i("li",[t._v("Outside center:\n"),i("ul",[i("li",[t._v("Roll/Pitch sticks control tilt angle in respective orientations, resulting in corresponding left-right and forward-back movement.")]),t._v(" "),i("li",[t._v("Throttle stick controls up/down speed with a predetermined maximum rate (and movement speed in other axes).")]),t._v(" "),i("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])]),t._v(" "),i("li",[t._v("Takeoff:\n"),i("ul",[i("li",[t._v("When landed, the vehicle will take off if the throttle stick is raised above 62.5% percent (of the full range from bottom).")])])])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("ul",[i("li",[t._v("Manual input is required (RC controller, or gamepad/thumbsticks through MAVLink).")]),t._v(" "),i("li",[t._v("The altitude is normally measured using a barometer, which may become inaccurate in extreme weather conditions.\nVehicles that include a LIDAR/range sensor will be able to control altitude with greater reliability and accuracy.")])])]),t._v(" "),i("h2",{attrs:{id:"parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),i("p",[t._v("The mode is affected by the following parameters:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Parameter")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("span",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),i("td",[t._v("Maximum vertical ascent velocity. Default: 3 m/s.")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),i("td",[t._v("Maximum vertical descent velocity. Default: 1 m/s.")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"RCX_DZ"}}),i("code",[t._v("RCX_DZ")])]),t._v(" "),i("td",[t._v("RC dead zone for channel X. The value of X for throttle will depend on the value of "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v("RC_MAP_THROTTLE")]),t._v(". For example, if the throttle is channel 4 then  "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v("RC4_DZ")]),t._v(" specifies the deadzone.")],1)]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"MPC_xxx"}}),i("code",[t._v("MPC_XXXX")])]),t._v(" "),i("td",[t._v("Most of the MPC_xxx parameters affect flight behaviour in this mode (at least to some extent). For example, "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(" defines the thrust at which a vehicle will hover.")],1)])])])])}),[],!1,null,null,null);e.default=r.exports},327:function(t,e,a){t.exports=a.p+"assets/img/remote_control.e49232a6.svg"},328:function(t,e){t.exports="data:image/png;base64,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"},331:function(t,e,a){t.exports=a.p+"assets/img/altitude_icon.ca9310b8.svg"},834:function(t,e,a){t.exports=a.p+"assets/img/altitude_control_mode_copter.8e02e8ec.png"}}]);