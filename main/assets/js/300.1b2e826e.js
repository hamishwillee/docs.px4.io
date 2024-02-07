(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{2145:function(t,e,a){"use strict";a.r(e);var i=a(19),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"altitude-mode-multicopter"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#altitude-mode-multicopter"}},[t._v("#")]),t._v(" Altitude Mode (Multicopter)")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_difficulty"}},[i("img",{attrs:{src:a(331),title:"Easy to fly",width:"30px"}})]),t._v(" "),i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_manual"}},[i("img",{attrs:{src:a(329),title:"Manual/Remote control required",width:"30px"}})]),t._v(" "),i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#altitude_only"}},[i("img",{attrs:{src:a(337),title:"Altitude required (e.g. Baro, Rangefinder)",width:"30px"}})])],1),t._v(" "),i("p",[i("em",[t._v("Altitude mode")]),t._v(" is a "),i("em",[t._v("relatively")]),t._v(' easy-to-fly RC mode in which roll and pitch sticks control vehicle movement in the left-right and forward-back directions (relative to the "front" of the vehicle), yaw stick controls rate of rotation over the horizontal plane, and throttle controls speed of ascent-descent.')]),t._v(" "),i("p",[t._v("When the sticks are released/centered the vehicle will level and maintain the current "),i("em",[t._v("altitude")]),t._v(".\nIf moving in the horizontal plane the vehicle will continue until any momentum is dissipated by wind resistance.\nIf the wind blows the aircraft will drift in the direction of the wind.")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[i("em",[t._v("Altitude mode")]),t._v(" is the safest non-GPS manual mode for new fliers. It is just like "),i("RouterLink",{attrs:{to:"/en/flight_modes_mc/manual_stabilized.html"}},[t._v("Manual/Stabilized")]),t._v(" mode but additionally locks the vehicle altitude when the sticks are released.")],1)]),t._v(" "),i("p",[t._v("The diagram below shows the mode behaviour visually (for a "),i("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("mode 2 transmitter")]),t._v(").")],1),t._v(" "),i("p",[i("img",{attrs:{src:a(934),alt:"Altitude Control MC - Mode2 RC Controller"}})]),t._v(" "),i("h2",{attrs:{id:"technical-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[t._v("#")]),t._v(" Technical Summary")]),t._v(" "),i("p",[t._v("RC/manual mode like "),i("RouterLink",{attrs:{to:"/en/flight_modes_mc/manual_stabilized.html"}},[t._v("Manual/Stabilized (MC)")]),t._v(" mode but with "),i("em",[t._v("altitude stabilization")]),t._v(" (centered sticks level vehicle and hold it to fixed altitude).")],1),t._v(" "),i("ul",[i("li",[t._v("Centered sticks (inside deadband):\n"),i("ul",[i("li",[t._v("RPY sticks levels vehicle.")]),t._v(" "),i("li",[t._v("Throttle (~50%) holds current altitude steady against wind.")])])]),t._v(" "),i("li",[t._v("Outside center:\n"),i("ul",[i("li",[t._v("Roll/Pitch sticks control tilt angle in respective orientations, resulting in corresponding left-right and forward-back movement.")]),t._v(" "),i("li",[t._v("Throttle stick controls up/down speed with a predetermined maximum rate (and movement speed in other axes).")]),t._v(" "),i("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])]),t._v(" "),i("li",[t._v("Takeoff:\n"),i("ul",[i("li",[t._v("When landed, the vehicle will take off if the throttle stick is raised above 62.5% percent (of the full range from bottom).")])])])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("ul",[i("li",[t._v("Manual input is required (RC controller, or gamepad/thumbsticks through MAVLink).")]),t._v(" "),i("li",[t._v("The altitude is normally measured using a barometer, which may become inaccurate in extreme weather conditions.\nVehicles that include a LIDAR/range sensor will be able to control altitude with greater reliability and accuracy.")])])]),t._v(" "),i("h2",{attrs:{id:"parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),i("p",[t._v("The mode is affected by the following parameters:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Parameter")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("a",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),i("td",[t._v("Maximum vertical ascent velocity. Default: 3 m/s.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),i("td",[t._v("Maximum vertical descent velocity. Default: 1 m/s.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"RCX_DZ"}}),i("code",[t._v("RCX_DZ")])]),t._v(" "),i("td",[t._v("RC dead zone for channel X. The value of X for throttle will depend on the value of "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v("RC_MAP_THROTTLE")]),t._v(". For example, if the throttle is channel 4 then "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v("RC4_DZ")]),t._v(" specifies the deadzone.")],1)]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"MPC_xxx"}}),i("code",[t._v("MPC_XXXX")])]),t._v(" "),i("td",[t._v("Most of the MPC_xxx parameters affect flight behaviour in this mode (at least to some extent). For example, "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(" defines the thrust at which a vehicle will hover.")],1)])])])])}),[],!1,null,null,null);e.default=r.exports},329:function(t,e,a){t.exports=a.p+"assets/img/remote_control.5fceab4e.svg"},331:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMLck2OcY5Lck3Lck3Lck3LMk3QL9ALck3M8wzLsg3Lsk4LtEuM8wzLck3Lsg3Lck3Lck3LMo3Lsk4Lck3IL9ALck3Lck3JNtJLck2Lcs4LMk2Lcg3Lsc4LMo4Lco3LMc4K8wzL8Y5Lck3McQ7Lck4Lck3LMg3Lso4Lck4LMo4Lck3Lck3Lck2Lco3L8s5Lck3Lsk3Lsg3Lck3KMk2LMw6Lck3Lck3Lck3KcU6LcM8Lcg3Lsk3Lsk4LMo1Lck2K8Y5Lsg3LMk3Lck3Lck2LMk2Lsk2Lck2Lco3LMk2K8o1Lco5KcwzLck3LMo4Lck2LMg3Lso1Lsg3Lck4L8g3Lck3K8k2Lsk2Lck2Lck3K8o1Lck3VapVLMk2K9UrLMk3Lck4Lsg3Lck3Lco3Lck3Lck2Lsk3Lck2Lcg3Lco3J8Q7Lsg3MMc4Lsc4Lck2M8wzLck3Lck3LMg3M8wzLsk2Lcg3Lck4Lck3Lck3LMo4K8s4K8g3Lck4Lck3Lck3Lck3Lco3Lcg3JMg3Lcg3Lsk2LMk2Lso3Lck3LMk2LMg3Lck3hb9vmgAAAIp0Uk5TAPgJ7f7uwwT5CsSzCwXvVMjGp4DxCNDdB8VEsrsyVn1AHhvwGtPURU2lV8z7UI82mKJv8hMj1sfRHxEz4JcdkhKt697AND2NlJs1Pxm0UqTJQ1h3PPcvWYj8MPMDUQa4vHCrv8u3z1WamQ0cIE52D9X1dBQhtsq19G47Qa7Br7Cxgw6HQn+G+oRGHgf53gAAAsdJREFUaN612ndbGkEQBvClHBx30pFeBQlgiUaNJsaSRGM31hTTe++9ml7mU4cQICAH3N3OvP/zex4Wdm925hhTk47YhtfjHgsIoigExtye7xuxDoYTW9gbFaEhZ3vO5L7w2p1xWYGuxBBxdnLg+xcc0CaOO4s68S0ZVEXK6cD3hUB1pLBGPDMImiKnNODWA0OgMU+8F9Xqh0ZBR3pG1Ol9AuiKr6ACt8+D7kzZ2+7RV8CR6N3W+mEJuLL2rJV+7yBwJtvVXB/m1gEeTzdddwkQ4mpyVNtfAEpWrIr8PCClX0l3YulgvtCoj6TReHA8b1j464AY197lfwiouVKvT57D5Yfqd9dRQI6n7skH6EnW8BI+P/NffwcEOVHlL1Pwl6rVEpBktswv0PAD5TrSQcOnjSW+AERxlvgVKv5T6RlloOINf1fnN5Blvch/peN/Ffk1Ot5dvJX10vG9NhYDwpxipyn5OPNS8gnmoeRPshAlb2HdlLyfHaHkjzMTJX+MiZS8gZonXhzin5b4j0m8rYgPBeIjjfhAJn6cUD4Mf9oYc9HxoWKl8IOO/0xz8ankG2kRuF0qkSNU/MdShXyLil8lvT4IwX/Xk9s0/ET5brVIw49XroZRCv1G9V6bpL02Mwu+fq2mpxDG55dqWyJXsfV8XT9n2Yer+zL17ainuPybva26l6h3toZOaQqxXBPuNzYyc2Ys3dyn1IadwuLnFHvI59/j6LJyi5oZUTbvaNNZ6CM/v56dbj5+6Mry6t2ZlqMZzvVxDbce/QS52r0RY9t5Yb/u/795zqpi7vZA5/5NO1WOJHWVne6U+oGq5vP59aZVw8R2eVDbLyBPapw3Jz+ox2eWdEzL38rqvoG0rnPWPzvQdjIsTIxzvKkQdEZa1Ofbu6tB3hctjFubTV7iCBsZTmw7hUTe4g+YRNEUuGnJJ+I7NlUf/APjU3MV9RK8MwAAAABJRU5ErkJggg=="},337:function(t,e,a){t.exports=a.p+"assets/img/altitude_icon.d9607697.svg"},934:function(t,e,a){t.exports=a.p+"assets/img/altitude_control_mode_copter.64defa02.png"}}]);