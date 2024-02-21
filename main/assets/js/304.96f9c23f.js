(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{2166:function(e,t,i){"use strict";i.r(t);var o=i(19),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"orbit-multicopter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#orbit-multicopter"}},[e._v("#")]),e._v(" Orbit (Multicopter)")]),e._v(" "),o("p",[o("img",{attrs:{src:i(333),title:"Easy to fly",width:"30px"}}),e._v(" "),o("img",{attrs:{src:i(328),title:"Position fix required (e.g. GPS)",width:"30px"}})]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("Orbit")]),e._v(" guided flight mode allows you to command a multicopter (or VTOL in multicopter mode) to fly in a circle at a particular location, by "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_YAW_BEHAVIOUR",target:"_blank",rel:"noopener noreferrer"}},[e._v("default"),o("OutboundLink")],1),e._v(" yawing so that it always faces towards the center.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("ul",[o("li",[e._v("Mode is automatic - no user intervention is "),o("em",[e._v("required")]),e._v(" to control the vehicle.")]),e._v(" "),o("li",[e._v("Mode requires at least a valid local position estimate (does not require a global position).\n"),o("ul",[o("li",[e._v("Flying vehicles can't switch to this mode without valid local position.")]),e._v(" "),o("li",[e._v("Flying vehicles will failsafe if they lose the position estimate.")])])]),e._v(" "),o("li",[e._v("Mode prevents arming (vehicle must be armed when switching to this mode).")]),e._v(" "),o("li",[e._v("Mode requires wind and flight time are within allowed limits (specified via parameters).")]),e._v(" "),o("li",[e._v("This mode is currently only supported on multicopter (or VTOL in MC mode).")]),e._v(" "),o("li",[e._v("RC stick movement can control ascent/descent and orbit speed and direction.")]),e._v(" "),o("li",[e._v("The mode can be triggered using the "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MMAV_CMD_DO_ORBIT",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_ORBIT"),o("OutboundLink")],1),e._v(" MAVLink command.")])])]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[o("img",{attrs:{src:i(949),alt:"Orbit Mode - MC"}})]),e._v(" "),o("p",[o("em",[e._v("QGroundControl")]),e._v(" (or other compatible GCS or MAVLink API) is "),o("em",[e._v("required")]),e._v(" to enable the mode, and to set the center position, initial radius and altitude of the orbit.\nOnce enabled the vehicle will fly as fast as possible to the closest point on the commanded circle trajectory and do a slow (1m/s) clockwise orbit on the planned circle, facing the center.")]),e._v(" "),o("p",[e._v("Instructions for how to start an orbit can be found here: "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/fly_view/fly_view.html#orbit",target:"_blank",rel:"noopener noreferrer"}},[e._v("FlyView > Orbit Location"),o("OutboundLink")],1),e._v(" ("),o("em",[e._v("QGroundControl")]),e._v(" guide).")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The use of an RC control is "),o("em",[e._v("optional")]),e._v(".\nIf no RC control is present the orbit will proceed as described above.\nRC control cannot be used to start the mode (if you switch to the mode via RC it will sit idle).")])]),e._v(" "),o("p",[e._v("RC control can be used to change the orbit altitude, radius, speed, and orbit direction:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Left stick:")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("up/down:")]),e._v(" controls speed of ascent/descent, as in "),o("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(". When in center deadzone, altitude is locked.")],1),e._v(" "),o("li",[o("em",[e._v("left/right:")]),e._v(" no effect.")])])]),e._v(" "),o("li",[o("strong",[e._v("Right stick:")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("left/right:")]),e._v(" controls acceleration of orbit in clockwise/counter-clockwise directions. When centered the current speed is locked.\n"),o("ul",[o("li",[e._v("Maximum velocity is 10m/s and further limited to keep the centripetal acceleration below 2m/s^2.")])])]),e._v(" "),o("li",[o("em",[e._v("up/down:")]),e._v(" controls orbit radius (smaller/bigger). When centered the current radius is locked.\n"),o("ul",[o("li",[e._v("Minimum radius is 1m. Maximum radius is 100m.")])])])])])]),e._v(" "),o("p",[e._v("The diagram below shows the mode behaviour visually (for a "),o("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[e._v("mode 2 transmitter")]),e._v(").")],1),e._v(" "),o("p",[o("img",{attrs:{src:i(403),alt:"Orbit Mode - MC"}})]),e._v(" "),o("p",[e._v("The mode can be stopped by switching to any other flight mode (using RC or QGC).")]),e._v(" "),o("h2",{attrs:{id:"parameters-limits"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters-limits"}},[e._v("#")]),e._v(" Parameters/Limits")]),e._v(" "),o("p",[e._v("There are no orbit mode-specific parameters.")]),e._v(" "),o("p",[e._v("The following limits are hard coded:")]),e._v(" "),o("ul",[o("li",[e._v("Initial/default rotation is 1 m/s in a clockwise direction.")]),e._v(" "),o("li",[e._v("The maximum acceleration is limited to 2 m/s^2, with priority on keeping the commanded circle trajectory rather than commanded ground speed (i.e. the vehicle will slow down in order to achieve the correct circle if the acceleration exceeds 2m/s^2).")]),e._v(" "),o("li",[e._v("Maximum radius is 100m.")])]),e._v(" "),o("h2",{attrs:{id:"mavlink-messages-developers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-messages-developers"}},[e._v("#")]),e._v(" MAVLink Messages (Developers)")]),e._v(" "),o("p",[e._v("Orbit mode uses the following MAVLink commands:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_ORBIT",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_ORBIT"),o("OutboundLink")],1),e._v(" - Start an orbit with specified center point, radius, direction, altitude, speed and "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_YAW_BEHAVIOUR",target:"_blank",rel:"noopener noreferrer"}},[e._v("yaw direction"),o("OutboundLink")],1),e._v(" (vehicle defaults to faceing centre of orbit).")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_EXECUTION_STATUS",target:"_blank",rel:"noopener noreferrer"}},[e._v("ORBIT_EXECUTION_STATUS"),o("OutboundLink")],1),e._v(" - Orbit status emitted during orbit to update GCS of current orbit parameters (these may be changed by the RC controller).")])])])}),[],!1,null,null,null);t.default=r.exports},328:function(e,t,i){e.exports=i.p+"assets/img/position_fixed.38e4a675.svg"},333:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMLck2OcY5Lck3Lck3Lck3LMk3QL9ALck3M8wzLsg3Lsk4LtEuM8wzLck3Lsg3Lck3Lck3LMo3Lsk4Lck3IL9ALck3Lck3JNtJLck2Lcs4LMk2Lcg3Lsc4LMo4Lco3LMc4K8wzL8Y5Lck3McQ7Lck4Lck3LMg3Lso4Lck4LMo4Lck3Lck3Lck2Lco3L8s5Lck3Lsk3Lsg3Lck3KMk2LMw6Lck3Lck3Lck3KcU6LcM8Lcg3Lsk3Lsk4LMo1Lck2K8Y5Lsg3LMk3Lck3Lck2LMk2Lsk2Lck2Lco3LMk2K8o1Lco5KcwzLck3LMo4Lck2LMg3Lso1Lsg3Lck4L8g3Lck3K8k2Lsk2Lck2Lck3K8o1Lck3VapVLMk2K9UrLMk3Lck4Lsg3Lck3Lco3Lck3Lck2Lsk3Lck2Lcg3Lco3J8Q7Lsg3MMc4Lsc4Lck2M8wzLck3Lck3LMg3M8wzLsk2Lcg3Lck4Lck3Lck3LMo4K8s4K8g3Lck4Lck3Lck3Lck3Lco3Lcg3JMg3Lcg3Lsk2LMk2Lso3Lck3LMk2LMg3Lck3hb9vmgAAAIp0Uk5TAPgJ7f7uwwT5CsSzCwXvVMjGp4DxCNDdB8VEsrsyVn1AHhvwGtPURU2lV8z7UI82mKJv8hMj1sfRHxEz4JcdkhKt697AND2NlJs1Pxm0UqTJQ1h3PPcvWYj8MPMDUQa4vHCrv8u3z1WamQ0cIE52D9X1dBQhtsq19G47Qa7Br7Cxgw6HQn+G+oRGHgf53gAAAsdJREFUaN612ndbGkEQBvClHBx30pFeBQlgiUaNJsaSRGM31hTTe++9ml7mU4cQICAH3N3OvP/zex4Wdm925hhTk47YhtfjHgsIoigExtye7xuxDoYTW9gbFaEhZ3vO5L7w2p1xWYGuxBBxdnLg+xcc0CaOO4s68S0ZVEXK6cD3hUB1pLBGPDMImiKnNODWA0OgMU+8F9Xqh0ZBR3pG1Ol9AuiKr6ACt8+D7kzZ2+7RV8CR6N3W+mEJuLL2rJV+7yBwJtvVXB/m1gEeTzdddwkQ4mpyVNtfAEpWrIr8PCClX0l3YulgvtCoj6TReHA8b1j464AY197lfwiouVKvT57D5Yfqd9dRQI6n7skH6EnW8BI+P/NffwcEOVHlL1Pwl6rVEpBktswv0PAD5TrSQcOnjSW+AERxlvgVKv5T6RlloOINf1fnN5Blvch/peN/Ffk1Ot5dvJX10vG9NhYDwpxipyn5OPNS8gnmoeRPshAlb2HdlLyfHaHkjzMTJX+MiZS8gZonXhzin5b4j0m8rYgPBeIjjfhAJn6cUD4Mf9oYc9HxoWKl8IOO/0xz8ankG2kRuF0qkSNU/MdShXyLil8lvT4IwX/Xk9s0/ET5brVIw49XroZRCv1G9V6bpL02Mwu+fq2mpxDG55dqWyJXsfV8XT9n2Yer+zL17ainuPybva26l6h3toZOaQqxXBPuNzYyc2Ys3dyn1IadwuLnFHvI59/j6LJyi5oZUTbvaNNZ6CM/v56dbj5+6Mry6t2ZlqMZzvVxDbce/QS52r0RY9t5Yb/u/795zqpi7vZA5/5NO1WOJHWVne6U+oGq5vP59aZVw8R2eVDbLyBPapw3Jz+ox2eWdEzL38rqvoG0rnPWPzvQdjIsTIxzvKkQdEZa1Ofbu6tB3hctjFubTV7iCBsZTmw7hUTe4g+YRNEUuGnJJ+I7NlUf/APjU3MV9RK8MwAAAABJRU5ErkJggg=="},403:function(e,t,i){e.exports=i.p+"assets/img/orbit_mc.abe4fdb5.png"},949:function(e,t,i){e.exports=i.p+"assets/img/orbit.c414a2b5.jpg"}}]);