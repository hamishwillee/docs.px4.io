(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{2013:function(t,e,a){"use strict";a.r(e);var i=a(19),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("Redirect",{attrs:{to:"../flight_modes_mc/position"}}),t._v(" "),i("h1",{attrs:{id:"position-mode-multicopter"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position-mode-multicopter"}},[t._v("#")]),t._v(" Position Mode (Multicopter)")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_difficulty"}},[i("img",{attrs:{src:a(330),title:"Easy to fly",width:"30px"}})]),t._v(" "),i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_manual"}},[i("img",{attrs:{src:a(329),title:"Manual/Remote control required",width:"30px"}})]),t._v(" "),i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[i("img",{attrs:{src:a(327),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),t._v(" "),i("p",[i("em",[t._v("Position")]),t._v(" is an easy-to-fly RC mode in which roll and pitch sticks control acceleration over ground in the vehicle's left-right and forward-back directions (similar to a car's accelerator pedal), and throttle controls speed of ascent-descent.\nWhen the sticks are released/centered the vehicle will actively brake, level, and be locked to a position in 3D space — compensating for wind and other forces.\nWith full stick deflection the vehicle accelerates initially with "),i("a",{attrs:{href:"#MPC_ACC_HOR_MAX"}},[t._v("MPC_ACC_HOR_MAX")]),t._v(" ramping down until it reaches the final velocity "),i("a",{attrs:{href:"#MPC_VEL_MANUAL"}},[t._v("MPC_VEL_MANUAL")]),t._v(".")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("Position mode is the safest manual mode for new fliers.\nUnlike "),i("RouterLink",{attrs:{to:"/en/flight_modes_mc/altitude.html"}},[t._v("Altitude")]),t._v(" and "),i("RouterLink",{attrs:{to:"/en/flight_modes_mc/manual_stabilized.html"}},[t._v("Manual/Stabilized")]),t._v(" modes the vehicle will stop when the sticks are centered rather than continuing until slowed by wind resistance.")],1)]),t._v(" "),i("p",[t._v("The diagram below shows the mode behaviour visually (for a mode 2 transmitter).")]),t._v(" "),i("p",[i("img",{attrs:{src:a(349),alt:"MC Position Mode"}})]),t._v(" "),i("h3",{attrs:{id:"landing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#landing"}},[t._v("#")]),t._v(" Landing")]),t._v(" "),i("p",[t._v("Landing in this mode is easy:")]),t._v(" "),i("ol",[i("li",[t._v("Position the drone horizontally above the landing spot using the roll and pitch stick.")]),t._v(" "),i("li",[t._v("Let go of the roll and pitch stick and give it enough time to come to a complete stop.")]),t._v(" "),i("li",[t._v("Pull the throttle stick down gently until the vehicle touches the ground.")]),t._v(" "),i("li",[t._v("Pull the throttle stick all the way down to facilitate and accelerate land detection.")]),t._v(" "),i("li",[t._v("The vehicle will lower propeller thrust, detect the ground and "),i("RouterLink",{attrs:{to:"/en/advanced_config/prearm_arm_disarm.html#auto-disarming"}},[t._v("automatically disarm")]),t._v(" (by default).")],1)]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("p",[t._v("While very rare on a well calibrated vehicle, sometimes there may be problems with landing.")]),t._v(" "),i("ul",[i("li",[t._v("If the vehicle does not stop moving horizontally:\n"),i("ul",[i("li",[t._v("You can still land under control in "),i("RouterLink",{attrs:{to:"/en/flight_modes_mc/altitude.html"}},[t._v("Altitude mode")]),t._v(".\nThe approach is the same as above, except that you must manually ensure that the vehicle stays above the landing spot using the roll and pitch stick.")],1),t._v(" "),i("li",[t._v("After landing check GPS and magnetometer orientation, calibration.")])])]),t._v(" "),i("li",[t._v("If the vehicle does not detect the ground/landing and disarm:\n"),i("ul",[i("li",[t._v("After the vehicle is on the ground switch to "),i("RouterLink",{attrs:{to:"/en/flight_modes_mc/manual_stabilized.html"}},[t._v("Manual/Stabilized mode")]),t._v(" keeping the throttle stick low, and manually disarm using a gesture or other command.\nAlternatively you can also use the kill switch when the vehicle is already on the ground.")],1)])])])]),t._v(" "),i("h2",{attrs:{id:"technical-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[t._v("#")]),t._v(" Technical Summary")]),t._v(" "),i("p",[t._v("RC mode where roll, pitch, throttle (RPT) sticks control movement in corresponding axes/directions.\nCentered sticks level vehicle and hold it to fixed altitude and position against wind.")]),t._v(" "),i("ul",[i("li",[t._v("Centered roll, pitch, throttle sticks (within RC deadzone "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[t._v("MPC_HOLD_DZ")]),t._v(") hold x, y, z position steady against any disturbance like wind.")],1),t._v(" "),i("li",[t._v("Outside center:\n"),i("ul",[i("li",[t._v("Roll/Pitch sticks control horizontal acceleration over ground in the vehicle's left-right and forward-back directions (respectively).")]),t._v(" "),i("li",[t._v("Throttle stick controls speed of ascent-descent.")]),t._v(" "),i("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])]),t._v(" "),i("li",[t._v("Takeoff:\n"),i("ul",[i("li",[t._v("When landed, the vehicle will take off if the throttle stick is raised above 62.5% percent (of the full range from bottom).")])])])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("ul",[i("li",[t._v("Manual input is required (RC controller, or gamepad/thumbsticks through MAVLink).")]),t._v(" "),i("li",[t._v("This mode requires GPS.")])])]),t._v(" "),i("h3",{attrs:{id:"parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),i("p",[t._v("All the parameters in the "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#multicopter-position-control"}},[t._v("Multicopter Position Control")]),t._v(" group are relevant. A few parameters of particular note are listed below.")],1),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Parameter")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("a",{attrs:{id:"MPC_HOLD_DZ"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[t._v("MPC_HOLD_DZ")])],1),t._v(" "),i("td",[t._v("Deadzone of sticks where position hold is enabled. Default: 0.1 (10% of full stick range).")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),i("td",[t._v("Maximum vertical ascent velocity. Default: 3 m/s.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),i("td",[t._v("Maximum vertical descent velocity. Default: 1 m/s.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_LAND_ALT1"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_LAND_ALT1"}},[t._v("MPC_LAND_ALT1")])],1),t._v(" "),i("td",[t._v("Altitude for triggering first phase of slow landing. Below this altitude descending velocity gets limited to a value between "),i("a",{attrs:{href:"#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")]),t._v(" (or "),i("code",[t._v("MPC_Z_V_AUTO_DN")]),t._v(") and "),i("a",{attrs:{href:"#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")]),t._v(". Value needs to be higher than "),i("a",{attrs:{href:"#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")]),t._v(". Default 10m.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_LAND_ALT2"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")])],1),t._v(" "),i("td",[t._v("Altitude for second phase of slow landing. Below this altitude descending velocity gets limited to "),i("a",{attrs:{href:"#MPC_LAND_SPEED"}},[i("code",[t._v("MPC_LAND_SPEED")])]),t._v('. Value needs to be lower than "MPC_LAND_ALT1". Default 5m.')])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"RCX_DZ"}}),i("code",[t._v("RCX_DZ")])]),t._v(" "),i("td",[t._v("RC dead zone for channel X. The value of X for throttle will depend on the value of "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v("RC_MAP_THROTTLE")]),t._v(". For example, if the throttle is channel 4 then  "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v("RC4_DZ")]),t._v(" specifies the deadzone.")],1)]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_xxx"}}),i("code",[t._v("MPC_XXXX")])]),t._v(" "),i("td",[t._v("Most of the MPC_xxx parameters affect flight behaviour in this mode (at least to some extent). For example, "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(" defines the thrust at which a vehicle will hover.")],1)]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_POS_MODE"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")])],1),t._v(" "),i("td",[t._v("Stick input to movement translation strategy. From PX4 v1.12 the default (4) is that stick position controls acceleration (in a similar way to a car accelerator pedal). Other options allow stick deflection to directly control speed over ground, with and without smoothing and acceleration limits.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_ACC_HOR_MAX"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_ACC_HOR_MAX"}},[t._v("MPC_ACC_HOR_MAX")])],1),t._v(" "),i("td",[t._v("Maximum horizontal acceleration.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_VEL_MANUAL"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_VEL_MANUAL"}},[t._v("MPC_VEL_MANUAL")])],1),t._v(" "),i("td",[t._v("Maximum horizontal velocity.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_LAND_SPEED"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")])],1),t._v(" "),i("td",[t._v("Landing descend rate. Default 0.7 m/s.")])])])]),t._v(" "),i("h2",{attrs:{id:"additional-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[t._v("#")]),t._v(" Additional Information")]),t._v(" "),i("h3",{attrs:{id:"position-loss-safety"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position-loss-safety"}},[t._v("#")]),t._v(" Position Loss/Safety")]),t._v(" "),i("p",[t._v("Position mode is dependent on having an acceptable position estimate.\nIf the estimate falls below acceptable levels, for example due to GPS loss, this may trigger a "),i("RouterLink",{attrs:{to:"/en/config/safety.html#position-gps-loss-failsafe"}},[t._v("Position (GPS) Loss Failsafe")]),t._v(".\nDepending on configuration, whether you have a remote control, and whether there is an adequate altitude estimate, PX4 may switch to altitude mode, manual mode, land mode or terminate.")],1)],1)}),[],!1,null,null,null);e.default=o.exports},327:function(t,e,a){t.exports=a.p+"assets/img/position_fixed.38e4a675.svg"},329:function(t,e,a){t.exports=a.p+"assets/img/remote_control.5fceab4e.svg"},330:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMLck2OcY5Lck3Lck3Lck3LMk3QL9ALck3M8wzLsg3Lsk4LtEuM8wzLck3Lsg3Lck3Lck3LMo3Lsk4Lck3IL9ALck3Lck3JNtJLck2Lcs4LMk2Lcg3Lsc4LMo4Lco3LMc4K8wzL8Y5Lck3McQ7Lck4Lck3LMg3Lso4Lck4LMo4Lck3Lck3Lck2Lco3L8s5Lck3Lsk3Lsg3Lck3KMk2LMw6Lck3Lck3Lck3KcU6LcM8Lcg3Lsk3Lsk4LMo1Lck2K8Y5Lsg3LMk3Lck3Lck2LMk2Lsk2Lck2Lco3LMk2K8o1Lco5KcwzLck3LMo4Lck2LMg3Lso1Lsg3Lck4L8g3Lck3K8k2Lsk2Lck2Lck3K8o1Lck3VapVLMk2K9UrLMk3Lck4Lsg3Lck3Lco3Lck3Lck2Lsk3Lck2Lcg3Lco3J8Q7Lsg3MMc4Lsc4Lck2M8wzLck3Lck3LMg3M8wzLsk2Lcg3Lck4Lck3Lck3LMo4K8s4K8g3Lck4Lck3Lck3Lck3Lco3Lcg3JMg3Lcg3Lsk2LMk2Lso3Lck3LMk2LMg3Lck3hb9vmgAAAIp0Uk5TAPgJ7f7uwwT5CsSzCwXvVMjGp4DxCNDdB8VEsrsyVn1AHhvwGtPURU2lV8z7UI82mKJv8hMj1sfRHxEz4JcdkhKt697AND2NlJs1Pxm0UqTJQ1h3PPcvWYj8MPMDUQa4vHCrv8u3z1WamQ0cIE52D9X1dBQhtsq19G47Qa7Br7Cxgw6HQn+G+oRGHgf53gAAAsdJREFUaN612ndbGkEQBvClHBx30pFeBQlgiUaNJsaSRGM31hTTe++9ml7mU4cQICAH3N3OvP/zex4Wdm925hhTk47YhtfjHgsIoigExtye7xuxDoYTW9gbFaEhZ3vO5L7w2p1xWYGuxBBxdnLg+xcc0CaOO4s68S0ZVEXK6cD3hUB1pLBGPDMImiKnNODWA0OgMU+8F9Xqh0ZBR3pG1Ol9AuiKr6ACt8+D7kzZ2+7RV8CR6N3W+mEJuLL2rJV+7yBwJtvVXB/m1gEeTzdddwkQ4mpyVNtfAEpWrIr8PCClX0l3YulgvtCoj6TReHA8b1j464AY197lfwiouVKvT57D5Yfqd9dRQI6n7skH6EnW8BI+P/NffwcEOVHlL1Pwl6rVEpBktswv0PAD5TrSQcOnjSW+AERxlvgVKv5T6RlloOINf1fnN5Blvch/peN/Ffk1Ot5dvJX10vG9NhYDwpxipyn5OPNS8gnmoeRPshAlb2HdlLyfHaHkjzMTJX+MiZS8gZonXhzin5b4j0m8rYgPBeIjjfhAJn6cUD4Mf9oYc9HxoWKl8IOO/0xz8ankG2kRuF0qkSNU/MdShXyLil8lvT4IwX/Xk9s0/ET5brVIw49XroZRCv1G9V6bpL02Mwu+fq2mpxDG55dqWyJXsfV8XT9n2Yer+zL17ainuPybva26l6h3toZOaQqxXBPuNzYyc2Ys3dyn1IadwuLnFHvI59/j6LJyi5oZUTbvaNNZ6CM/v56dbj5+6Mry6t2ZlqMZzvVxDbce/QS52r0RY9t5Yb/u/795zqpi7vZA5/5NO1WOJHWVne6U+oGq5vP59aZVw8R2eVDbLyBPapw3Jz+ox2eWdEzL38rqvoG0rnPWPzvQdjIsTIxzvKkQdEZa1Ofbu6tB3hctjFubTV7iCBsZTmw7hUTe4g+YRNEUuGnJJ+I7NlUf/APjU3MV9RK8MwAAAABJRU5ErkJggg=="},349:function(t,e,a){t.exports=a.p+"assets/img/position_MC.c6191ec9.png"}}]);