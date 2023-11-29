(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{2035:function(t,e,a){"use strict";a.r(e);var i=a(19),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"altitude-mode-fixed-wing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#altitude-mode-fixed-wing"}},[t._v("#")]),t._v(" Altitude Mode (Fixed-wing)")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_difficulty"}},[i("img",{attrs:{src:a(331),title:"Easy to fly",width:"30px"}})]),t._v(" "),i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_manual"}},[i("img",{attrs:{src:a(329),title:"Manual/Remote control required",width:"30px"}})]),t._v(" "),i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#altitude_only"}},[i("img",{attrs:{src:a(336),title:"Altitude required (e.g. Baro, Rangefinder)",width:"30px"}})])],1),t._v(" "),i("p",[t._v("The "),i("em",[t._v("Altitude")]),t._v(" flight mode makes it easier for users to control vehicle altitude, and in particular to reach and maintain a fixed altitude. The mode will not attempt to hold the vehicle course against wind.")]),t._v(" "),i("p",[t._v("The climb/descent rate is controlled via the pitch/elevator stick. Once centered the autopilot latches onto the current altitude and will maintain it during yaw/roll, and at any airspeed.")]),t._v(" "),i("p",[t._v("The throttle input controls airspeed. Roll and pitch are angle-controlled (so it is impossible to roll over or loop the vehicle).")]),t._v(" "),i("p",[t._v("When all remote control inputs are centered (no roll, pitch, yaw, and ~50% throttle) the aircraft will return to straight, level flight (subject to wind) and keep its current altitude.")]),t._v(" "),i("p",[t._v("The diagram below shows the mode behaviour visually (for a "),i("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("mode 2 transmitter")]),t._v(").")],1),t._v(" "),i("p",[i("img",{attrs:{src:a(919),alt:"Altitude Control FW"}})]),t._v(" "),i("h2",{attrs:{id:"technical-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[t._v("#")]),t._v(" Technical Summary")]),t._v(" "),i("p",[t._v("RC/manual mode like Stabilized mode but with altitude stabilization (centered sticks put vehicle into straight and level flight and maintain current altitude). The vehicle course is not maintained, and can drift due to wind.")]),t._v(" "),i("ul",[i("li",[t._v("Centered Roll/Pitch/Yaw inputs (inside deadband):\n"),i("ul",[i("li",[t._v("Autopilot levels vehicle/wings and maintains altitude.")]),t._v(" "),i("li",[t._v("Throttle stick controls the airspeed of the aircraft if an airspeed sensor is connected. Without an airspeed sensor the user cannot control throttle (in which case the vehicle will fly level at trim throttle ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_THR_TRIM"}},[t._v("FW_THR_TRIM")]),t._v("), increasing or decreasing throttle as needed to climb or descend).")],1)])]),t._v(" "),i("li",[t._v("Outside center:\n"),i("ul",[i("li",[t._v("Pitch stick controls altitude.")]),t._v(" "),i("li",[t._v("Throttle stick controls the airspeed of the aircraft (as for centered Roll/Pitch/Yaw inputs).")]),t._v(" "),i("li",[t._v("Roll stick controls roll angle. Autopilot will maintain "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight",target:"_blank",rel:"noopener noreferrer"}},[t._v("coordinated flight"),i("OutboundLink")],1),t._v(".\nThis is same as in "),i("RouterLink",{attrs:{to:"/en/flight_modes_fw/stabilized.html"}},[t._v("Stabilized mode")]),t._v(".")],1),t._v(" "),i("li",[t._v("Yaw stick actuates the rudder (signal will be added to the one calculated by the autopilot to maintain "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight",target:"_blank",rel:"noopener noreferrer"}},[t._v("coordinated flight"),i("OutboundLink")],1),t._v(").\nThis is same as in "),i("RouterLink",{attrs:{to:"/en/flight_modes_fw/stabilized.html"}},[t._v("Stabilized mode")]),t._v(".")],1)])])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("ul",[i("li",[t._v("Manual input is required (RC controller, or gamepad/thumbsticks through MAVLink).")]),t._v(" "),i("li",[t._v("The altitude is normally measured using a barometer, which may become inaccurate in extreme weather conditions.\nVehicles that include a LIDAR/range sensor will be able to control altitude with greater reliability and accuracy.")])])]),t._v(" "),i("h2",{attrs:{id:"parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),i("p",[t._v("The mode is affected by the following parameters:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Parameter")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("a",{attrs:{id:"FW_AIRSPD_MIN"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")])],1),t._v(" "),i("td",[t._v("Min airspeed/throttle. Default: 10 m/s.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"FW_AIRSPD_MAX"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[t._v("FW_AIRSPD_MAX")])],1),t._v(" "),i("td",[t._v("Max airspeed/throttle. Default: 20 m/s.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"FW_AIRSPD_TRIM"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[t._v("FW_AIRSPD_TRIM")])],1),t._v(" "),i("td",[t._v("Cruise speed. Default: 15 m/s.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"FW_MAN_P_MAX"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_MAN_P_MAX"}},[t._v("FW_MAN_P_MAX")])],1),t._v(" "),i("td",[t._v("Max pitch for manual control in attitude stabilized mode. Default: 45 degrees.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"FW_MAN_R_MAX"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_MAN_R_MAX"}},[t._v("FW_MAN_R_MAX")])],1),t._v(" "),i("td",[t._v("Max roll for manual control in attitude stabilized mode. Default: 45 degrees.")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"FW_NPFG_CONTROL"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#fw-npfg-control"}},[t._v("FW NPFG Control")])],1),t._v(" "),i("td",[t._v("The roll/yaw needed to maintain the commanded altitude and airspeed are also affected by the FW NPFG Control parameters.")])])])])])}),[],!1,null,null,null);e.default=r.exports},329:function(t,e,a){t.exports=a.p+"assets/img/remote_control.5fceab4e.svg"},331:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMLck2OcY5Lck3Lck3Lck3LMk3QL9ALck3M8wzLsg3Lsk4LtEuM8wzLck3Lsg3Lck3Lck3LMo3Lsk4Lck3IL9ALck3Lck3JNtJLck2Lcs4LMk2Lcg3Lsc4LMo4Lco3LMc4K8wzL8Y5Lck3McQ7Lck4Lck3LMg3Lso4Lck4LMo4Lck3Lck3Lck2Lco3L8s5Lck3Lsk3Lsg3Lck3KMk2LMw6Lck3Lck3Lck3KcU6LcM8Lcg3Lsk3Lsk4LMo1Lck2K8Y5Lsg3LMk3Lck3Lck2LMk2Lsk2Lck2Lco3LMk2K8o1Lco5KcwzLck3LMo4Lck2LMg3Lso1Lsg3Lck4L8g3Lck3K8k2Lsk2Lck2Lck3K8o1Lck3VapVLMk2K9UrLMk3Lck4Lsg3Lck3Lco3Lck3Lck2Lsk3Lck2Lcg3Lco3J8Q7Lsg3MMc4Lsc4Lck2M8wzLck3Lck3LMg3M8wzLsk2Lcg3Lck4Lck3Lck3LMo4K8s4K8g3Lck4Lck3Lck3Lck3Lco3Lcg3JMg3Lcg3Lsk2LMk2Lso3Lck3LMk2LMg3Lck3hb9vmgAAAIp0Uk5TAPgJ7f7uwwT5CsSzCwXvVMjGp4DxCNDdB8VEsrsyVn1AHhvwGtPURU2lV8z7UI82mKJv8hMj1sfRHxEz4JcdkhKt697AND2NlJs1Pxm0UqTJQ1h3PPcvWYj8MPMDUQa4vHCrv8u3z1WamQ0cIE52D9X1dBQhtsq19G47Qa7Br7Cxgw6HQn+G+oRGHgf53gAAAsdJREFUaN612ndbGkEQBvClHBx30pFeBQlgiUaNJsaSRGM31hTTe++9ml7mU4cQICAH3N3OvP/zex4Wdm925hhTk47YhtfjHgsIoigExtye7xuxDoYTW9gbFaEhZ3vO5L7w2p1xWYGuxBBxdnLg+xcc0CaOO4s68S0ZVEXK6cD3hUB1pLBGPDMImiKnNODWA0OgMU+8F9Xqh0ZBR3pG1Ol9AuiKr6ACt8+D7kzZ2+7RV8CR6N3W+mEJuLL2rJV+7yBwJtvVXB/m1gEeTzdddwkQ4mpyVNtfAEpWrIr8PCClX0l3YulgvtCoj6TReHA8b1j464AY197lfwiouVKvT57D5Yfqd9dRQI6n7skH6EnW8BI+P/NffwcEOVHlL1Pwl6rVEpBktswv0PAD5TrSQcOnjSW+AERxlvgVKv5T6RlloOINf1fnN5Blvch/peN/Ffk1Ot5dvJX10vG9NhYDwpxipyn5OPNS8gnmoeRPshAlb2HdlLyfHaHkjzMTJX+MiZS8gZonXhzin5b4j0m8rYgPBeIjjfhAJn6cUD4Mf9oYc9HxoWKl8IOO/0xz8ankG2kRuF0qkSNU/MdShXyLil8lvT4IwX/Xk9s0/ET5brVIw49XroZRCv1G9V6bpL02Mwu+fq2mpxDG55dqWyJXsfV8XT9n2Yer+zL17ainuPybva26l6h3toZOaQqxXBPuNzYyc2Ys3dyn1IadwuLnFHvI59/j6LJyi5oZUTbvaNNZ6CM/v56dbj5+6Mry6t2ZlqMZzvVxDbce/QS52r0RY9t5Yb/u/795zqpi7vZA5/5NO1WOJHWVne6U+oGq5vP59aZVw8R2eVDbLyBPapw3Jz+ox2eWdEzL38rqvoG0rnPWPzvQdjIsTIxzvKkQdEZa1Ofbu6tB3hctjFubTV7iCBsZTmw7hUTe4g+YRNEUuGnJJ+I7NlUf/APjU3MV9RK8MwAAAABJRU5ErkJggg=="},336:function(t,e,a){t.exports=a.p+"assets/img/altitude_icon.d9607697.svg"},919:function(t,e,a){t.exports=a.p+"assets/img/altitude_control_mode_fw.7eab4d97.png"}}]);