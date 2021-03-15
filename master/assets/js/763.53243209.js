(window.webpackJsonp=window.webpackJsonp||[]).push([[763],{1528:function(e,t,a){"use strict";a.r(t);var r=a(18),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vtol-back-transition-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol-back-transition-tuning"}},[e._v("#")]),e._v(" VTOL Back-transition Tuning")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Some of the following features will be available in PX4 version 1.7 and are currently only available on the experimental development branch.")])]),e._v(" "),a("p",[e._v("When a VTOL performs a back-transition (transition from fixed wing mode to multicopter) it needs to slow down before the multicopter can take proper control.\nAs of PX4 version 1.7, and on the current developer branch, the vehicle will consider the back-transition complete when the horizontal speed has reached multicopter cruise speed ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_XY_CRUISE"}},[e._v("MPC_XY_CRUISE")]),e._v(") or when the back-transition duration ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[e._v("VT_B_TRANS_DUR")]),e._v(") has passed (whichever comes first).")],1),e._v(" "),a("h2",{attrs:{id:"back-transition-duration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-transition-duration"}},[e._v("#")]),e._v(" Back-transition duration")]),e._v(" "),a("p",[e._v("Setting a high back-transition time ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[e._v("VT_B_TRANS_DUR")]),e._v(") will give the vehicle more time to slow down. During this period the VTOL will shut down its fixed wing motor and slowly ramp up its MC motors while gliding. The higher this time is set the longer the vehicle will glide in an attempt to slow down. The caveat of this behavior is that the vehicle will only control altitude and not position during this period, so some drift can occur.")],1),e._v(" "),a("h2",{attrs:{id:"setting-expected-deceleration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-expected-deceleration"}},[e._v("#")]),e._v(" Setting expected deceleration")]),e._v(" "),a("p",[e._v("When flying missions that make use of a "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_VTOL_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("VTOL_LAND"),a("OutboundLink")],1),e._v(" waypoint the autopilot will attempt to calculate the proper distance at which to initiate the back-transition. It does this by looking at the current velocity (comparable to ground speed) and the expected deceleration. To get the vehicle to come out of back-transition very close to its landing point you can tune the expected deceleration ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_DEC_MSS"}},[e._v("VT_B_DEC_MSS")]),e._v(") parameter. Make sure you have a large enough back-transition duration to allow the vehicle to reach its intended position before this timeout kicks in.")],1),e._v(" "),a("h2",{attrs:{id:"applying-airbrakes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applying-airbrakes"}},[e._v("#")]),e._v(" Applying airbrakes")]),e._v(" "),a("p",[e._v("If your vehicle is equipped with airbrakes, and your selected airframe supports them (in code), you can set the airbrake position during back-transition in "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_REV_OUT"}},[e._v("VT_B_REV_OUT")]),e._v(". The values scale from 0 to 1, so a value of 0.7 equals 70% output.")],1),e._v(" "),a("h2",{attrs:{id:"applying-reverse-thrust-on-your-fixed-wing-motor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applying-reverse-thrust-on-your-fixed-wing-motor"}},[e._v("#")]),e._v(" Applying reverse thrust on your fixed wing motor")]),e._v(" "),a("p",[e._v("To get the shortest possible back-transition, PX4 supports active breaking by reversing the fixed wing motor direction. To use this feature you will require an ESC that supports motor rotation reversing.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("A typical fixed wing propeller is not optimized to spin in reverse, when the throttle during reverse thrust is set too high the propeller can stall.")])]),e._v(" "),a("p",[e._v("Generally there are 2 ways a reverse-capable ESC can implement reverse thrust.")]),e._v(" "),a("h3",{attrs:{id:"using-throttle-scaling-3d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-throttle-scaling-3d"}},[e._v("#")]),e._v(" Using throttle scaling (3D)")]),e._v(" "),a("p",[e._v("Normally the throttle stick is used purely for forward thrust.")]),e._v(" "),a("p",[e._v("3D ESCs assume 0 thrust at 50% throttle, positive (forward) thrust above 50% and negative thrust (reverse) below 50%. The airframe can be modified to implement this behaviour "),a("em",[e._v("only")]),e._v(" during back transition, allowing reverse thrust to be applied during the transition.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Support for 3D throttle scaling during back-transition requires "),a("em",[e._v("code support")]),e._v(" in the airframe.")])]),e._v(" "),a("p",[e._v("The amount of negative thrust during back transition can then be configured using the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_TRANS_THR"}},[e._v("VT_B_TRANS_THR")]),e._v(" parameter (set to a negative value between 0 and -1).")],1),e._v(" "),a("h3",{attrs:{id:"on-a-control-channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-a-control-channel"}},[e._v("#")]),e._v(" On a control channel")]),e._v(" "),a("p",[e._v("ESCs that use a separate control channel to control the motor direction (e.g. "),a("a",{attrs:{href:"http://a.hobbywing.com/category.php?id=44&filter_attr=6345.6346",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hobbywing Platinum series"),a("OutboundLink")],1),e._v(") can use the airbrakes channel to apply reverse thrust during back-transition.")]),e._v(" "),a("p",[e._v("Airframes that have been configured to support this behavior (like the DeltaQuad airframe) can be configured to do so by setting both "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_REV_OUT"}},[e._v("VT_B_REV_OUT")]),e._v(" to 1 and "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_TRANS_THR"}},[e._v("VT_B_TRANS_THR")]),e._v(" to the desired throttle level to apply for active breaking. The values scale from 0 to 1, so a value of 0.7 equals 70% throttle.")],1),e._v(" "),a("h2",{attrs:{id:"typical-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typical-setup"}},[e._v("#")]),e._v(" Typical setup")]),e._v(" "),a("p",[e._v("An example of a setup that employs most features listed above would be the following:")]),e._v(" "),a("ul",[a("li",[e._v("Airframe: Any VTOL supporting reverse thrust (e.g. DeltaQuad)")]),e._v(" "),a("li",[e._v("ESC: A fixed wing ESC that supports motor reversing (e.g. Hobbywing Platinum Pro 60A)")]),e._v(" "),a("li",[e._v("Estimated deceleration value in m/s/s "),a("code",[e._v("VT_B_DEC_MSS")]),e._v(": 2.5")]),e._v(" "),a("li",[e._v("Back-transition duration timeout in seconds "),a("code",[e._v("VT_B_TRANS_DUR")]),e._v(": 10")]),e._v(" "),a("li",[e._v("Set reverse channel high during back-transition "),a("code",[e._v("VT_B_REV_OUT")]),e._v(": 1.0")]),e._v(" "),a("li",[e._v("Apply 70% thrust during back-transition "),a("code",[e._v("VT_B_TRANS_THR")]),e._v(": 0.7")])])])}),[],!1,null,null,null);t.default=i.exports}}]);