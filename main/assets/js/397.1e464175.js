(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{2060:function(e,t,o){"use strict";o.r(t);var a=o(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"position-slow-mode-multicopter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-slow-mode-multicopter"}},[e._v("#")]),e._v(" Position Slow Mode (Multicopter) "),a("Badge",{attrs:{type:"warning",text:"main (v1.15+)",vertical:"top"}})],1),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_difficulty"}},[a("img",{attrs:{src:o(331),title:"Easy to fly",width:"30px"}})]),e._v(" "),a("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_manual"}},[a("img",{attrs:{src:o(329),title:"Manual/Remote control required",width:"30px"}})]),e._v(" "),a("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:o(327),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),e._v(" "),a("p",[a("em",[e._v("Position Slow")]),e._v(" mode is a velocity and yaw rate limited version of the regular "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(".")],1),e._v(" "),a("p",[e._v("The mode works in exactly the same way as "),a("em",[e._v("Position mode")]),e._v(" but with the controller stick deflection re-scaled to lower maximum velocities (and proportionally lower acceleration).\nYou can use it to quickly slow down the vehicle to a safe speed (if it is moving faster than the maximum velocity in the limited axis).\nYou can also use it to get more precision from stick input, in particular when flying close to obstacles, or to comply with regulations such as "),a("a",{attrs:{href:"https://www.easa.europa.eu/en/light/topics/flying-drones-close-people",target:"_blank",rel:"noopener noreferrer"}},[e._v("EASA's low-speed mode/function"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The velocity limits can be set using parameters, from an "),a("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[e._v("RC Controller")]),e._v(" rotary knob, slider, or switch, or using MAVLink.\nLimits set using an RC controller override those set by MAVLink, which in turn override those set using parameters.\nThe limits can only be reduced below those for normal "),a("em",[e._v("Position")]),e._v(" mode.")],1),e._v(" "),a("h2",{attrs:{id:"set-limits-using-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-limits-using-parameters"}},[e._v("#")]),e._v(" Set Limits using Parameters")]),e._v(" "),a("p",[e._v("The maximum values for slow mode horizontal velocity, vertical velocity, and yaw rate can be set using parameters.\nThis approach is useful when the maximum desired speed in slow mode is fixed, and you just want to be able to quickly drop to a safer speed range (perhaps using a switch on your controller).")]),e._v(" "),a("p",[e._v("The table below shows the parameters used to set the maximum values for "),a("em",[e._v("Position slow")]),e._v(" mode and "),a("em",[e._v("Position")]),e._v(" mode, respectively, along with their default values.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Axis")]),e._v(" "),a("th",[e._v("Position slow mode")]),e._v(" "),a("th",[e._v("Position mode")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Horizontal velocity")]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_DEF_HVEL"}},[e._v("MC_SLOW_DEF_HVEL")]),e._v(" (3 m/s)")],1),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_VEL_MANUAL"}},[e._v("MPC_VEL_MANUAL")]),e._v(" (10 m/s)")],1)]),e._v(" "),a("tr",[a("td",[e._v("Vertical velocity")]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_DEF_VVEL"}},[e._v("MC_SLOW_DEF_VVEL")]),e._v(" (1 m/s)")],1),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[e._v("MPC_Z_VEL_MAX_UP")]),e._v(" (3 m/s) / "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[e._v("MPC_Z_VEL_MAX_DN")]),e._v(" (1.5 m/s)")],1)]),e._v(" "),a("tr",[a("td",[e._v("Yaw rate")]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_DEF_YAWR"}},[e._v("MC_SLOW_DEF_YAWR")]),e._v(" (45 °/s)")],1),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_MAN_Y_MAX"}},[e._v("MPC_MAN_Y_MAX")]),e._v(" (150 °/s)")],1)])])]),e._v(" "),a("p",[e._v("From this you can see, for example, that when switching from Position mode to Position slow mode, the default maximum upward horizontal velocity is reduced from 10 m/s to 3 m/s.\nIf traveling faster than 3 m/s horizontally you'd be slowed to 3 m/s.")]),e._v(" "),a("p",[e._v("Note that the parameters are used only if limits are not provided by from RC or MAVLink.")]),e._v(" "),a("h2",{attrs:{id:"set-limits-using-rc-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-limits-using-rc-control"}},[e._v("#")]),e._v(" Set Limits using RC Control")]),e._v(" "),a("p",[e._v("You can map a rotary knob, slider, or switch, on a "),a("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[e._v("RC Controller")]),e._v(" to set the maximum velocity of an axis (horizontal/vertical/yaw).\nThis approach is useful when the appropriate slow-mode maximum values can vary while flying.")],1),e._v(" "),a("p",[e._v("If the input control is set to its highest value the vehicle will go as fast as in "),a("em",[e._v("Position")]),e._v(" mode.\nIf the input is set to its lowest value, the vehicle maximum velocity is set to the value in the corresponding "),a("code",[e._v("MC_SLOW_MIN_")]),e._v(" parameter (shown in the table below).\nIf an RC control input is mapped for an axis it has priority over all other inputs.")]),e._v(" "),a("p",[e._v('The table below lists each axis along with the parameter used to select which RC AUX channel corresponds to the control knob, and the parameter that sets the lowest possible "maximum value" for the axis.')]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Axis")]),e._v(" "),a("th",[e._v("Parameter to map auxiliary input")]),e._v(" "),a("th",[e._v("Parameter for minimum value of maximum velocity")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Horizontal velocity")]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_MAP_HVEL"}},[e._v("MC_SLOW_MAP_HVEL")])],1),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_MIN_HVEL"}},[e._v("MC_SLOW_MIN_HVEL")])],1)]),e._v(" "),a("tr",[a("td",[e._v("Vertical velocity")]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_MAP_VVEL"}},[e._v("MC_SLOW_MAP_VVEL")])],1),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_MIN_VVEL"}},[e._v("MC_SLOW_MIN_VVEL")])],1)]),e._v(" "),a("tr",[a("td",[e._v("Yaw rate")]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_MAP_YAWR"}},[e._v("MC_SLOW_MAP_YAWR")])],1),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_MIN_YAWR"}},[e._v("MC_SLOW_MIN_YAWR")])],1)])])]),e._v(" "),a("p",[e._v("To use this approach:")]),e._v(" "),a("ol",[a("li",[e._v("Make sure you have a remote with an extra input and an extra RC channel to transmit it's position.")]),e._v(" "),a("li",[e._v("Map the channel which contains the knobs position as one of the 6 auxiliary passthrough inputs by setting "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_MAP_AUX1"}},[e._v("RC_MAP_AUXn")]),e._v(" to the corresponding RC channel number.")],1),e._v(" "),a("li",[e._v("Map that auxiliary input using the appropriate "),a("code",[e._v("MC_SLOW_MAP_")]),e._v(" parameter for the axis you want it to control (see table above).")])]),e._v(" "),a("p",[e._v("For example, if you want to map RC channel "),a("code",[e._v("8")]),e._v(" to limit the horizontal velocity you could set "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_MAP_AUX1"}},[e._v("RC_MAP_AUX1")]),e._v(" to the value "),a("code",[e._v("8")]),e._v(" and "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_MAP_HVEL"}},[e._v("MC_SLOW_MAP_HVEL")]),e._v(" to the value "),a("code",[e._v("1")]),e._v(".\nThe RC input from channel 8 then sets a horizontal velocity limit between "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_SLOW_MIN_HVEL"}},[e._v("MC_SLOW_MIN_HVEL")]),e._v(" and "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_VEL_MANUAL"}},[e._v("MPC_VEL_MANUAL")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"set-limits-using-mavlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-limits-using-mavlink"}},[e._v("#")]),e._v(" Set Limits using MAVLink")]),e._v(" "),a("p",[e._v("You can adjust the velocity limits using the MAVLink message "),a("a",{attrs:{href:"https://mavlink.io/en/messages/development.html#SET_VELOCITY_LIMITS",target:"_blank",rel:"noopener noreferrer"}},[e._v("SET_VELOCITY_LIMITS"),a("OutboundLink")],1),e._v(".\nThis approach is used primarily by automatic systems, for example to slow a vehicle when zooming a camera.")]),e._v(" "),a("p",[e._v("The message can set the maximum value on any of the axes by supplying a non-"),a("code",[e._v("NAN")]),e._v(" limit value.\nThis overrides limit values set in parameters, but is ignored if the axis is mapped to an RC knob.\nThe value can be updated from a message at any time, and is latched until either the next message or a mode switch.")]),e._v(" "),a("p",[e._v("Note that PX4 does not provide velocity limit telemetry (i.e. it does not support streaming the "),a("a",{attrs:{href:"https://mavlink.io/en/messages/development.html#VELOCITY_LIMITS",target:"_blank",rel:"noopener noreferrer"}},[e._v("VELOCITY_LIMITS"),a("OutboundLink")],1),e._v(" message).")]),e._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[e._v("Position Slow Mode")])],1)])])}),[],!1,null,null,null);t.default=r.exports},327:function(e,t,o){e.exports=o.p+"assets/img/position_fixed.38e4a675.svg"},329:function(e,t,o){e.exports=o.p+"assets/img/remote_control.5fceab4e.svg"},331:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMLck2OcY5Lck3Lck3Lck3LMk3QL9ALck3M8wzLsg3Lsk4LtEuM8wzLck3Lsg3Lck3Lck3LMo3Lsk4Lck3IL9ALck3Lck3JNtJLck2Lcs4LMk2Lcg3Lsc4LMo4Lco3LMc4K8wzL8Y5Lck3McQ7Lck4Lck3LMg3Lso4Lck4LMo4Lck3Lck3Lck2Lco3L8s5Lck3Lsk3Lsg3Lck3KMk2LMw6Lck3Lck3Lck3KcU6LcM8Lcg3Lsk3Lsk4LMo1Lck2K8Y5Lsg3LMk3Lck3Lck2LMk2Lsk2Lck2Lco3LMk2K8o1Lco5KcwzLck3LMo4Lck2LMg3Lso1Lsg3Lck4L8g3Lck3K8k2Lsk2Lck2Lck3K8o1Lck3VapVLMk2K9UrLMk3Lck4Lsg3Lck3Lco3Lck3Lck2Lsk3Lck2Lcg3Lco3J8Q7Lsg3MMc4Lsc4Lck2M8wzLck3Lck3LMg3M8wzLsk2Lcg3Lck4Lck3Lck3LMo4K8s4K8g3Lck4Lck3Lck3Lck3Lco3Lcg3JMg3Lcg3Lsk2LMk2Lso3Lck3LMk2LMg3Lck3hb9vmgAAAIp0Uk5TAPgJ7f7uwwT5CsSzCwXvVMjGp4DxCNDdB8VEsrsyVn1AHhvwGtPURU2lV8z7UI82mKJv8hMj1sfRHxEz4JcdkhKt697AND2NlJs1Pxm0UqTJQ1h3PPcvWYj8MPMDUQa4vHCrv8u3z1WamQ0cIE52D9X1dBQhtsq19G47Qa7Br7Cxgw6HQn+G+oRGHgf53gAAAsdJREFUaN612ndbGkEQBvClHBx30pFeBQlgiUaNJsaSRGM31hTTe++9ml7mU4cQICAH3N3OvP/zex4Wdm925hhTk47YhtfjHgsIoigExtye7xuxDoYTW9gbFaEhZ3vO5L7w2p1xWYGuxBBxdnLg+xcc0CaOO4s68S0ZVEXK6cD3hUB1pLBGPDMImiKnNODWA0OgMU+8F9Xqh0ZBR3pG1Ol9AuiKr6ACt8+D7kzZ2+7RV8CR6N3W+mEJuLL2rJV+7yBwJtvVXB/m1gEeTzdddwkQ4mpyVNtfAEpWrIr8PCClX0l3YulgvtCoj6TReHA8b1j464AY197lfwiouVKvT57D5Yfqd9dRQI6n7skH6EnW8BI+P/NffwcEOVHlL1Pwl6rVEpBktswv0PAD5TrSQcOnjSW+AERxlvgVKv5T6RlloOINf1fnN5Blvch/peN/Ffk1Ot5dvJX10vG9NhYDwpxipyn5OPNS8gnmoeRPshAlb2HdlLyfHaHkjzMTJX+MiZS8gZonXhzin5b4j0m8rYgPBeIjjfhAJn6cUD4Mf9oYc9HxoWKl8IOO/0xz8ankG2kRuF0qkSNU/MdShXyLil8lvT4IwX/Xk9s0/ET5brVIw49XroZRCv1G9V6bpL02Mwu+fq2mpxDG55dqWyJXsfV8XT9n2Yer+zL17ainuPybva26l6h3toZOaQqxXBPuNzYyc2Ys3dyn1IadwuLnFHvI59/j6LJyi5oZUTbvaNNZ6CM/v56dbj5+6Mry6t2ZlqMZzvVxDbce/QS52r0RY9t5Yb/u/795zqpi7vZA5/5NO1WOJHWVne6U+oGq5vP59aZVw8R2eVDbLyBPapw3Jz+ox2eWdEzL38rqvoG0rnPWPzvQdjIsTIxzvKkQdEZa1Ofbu6tB3hctjFubTV7iCBsZTmw7hUTe4g+YRNEUuGnJJ+I7NlUf/APjU3MV9RK8MwAAAABJRU5ErkJggg=="}}]);