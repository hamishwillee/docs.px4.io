(window.webpackJsonp=window.webpackJsonp||[]).push([[816],{1599:function(e,t,r){"use strict";r.r(t);var a=r(19),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vtol-back-transition-tuning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vtol-back-transition-tuning"}},[e._v("#")]),e._v(" VTOL Back-transition Tuning")]),e._v(" "),r("p",[e._v("When a VTOL performs a back-transition (transition from fixed wing mode to multicopter) it needs to slow down before the multicopter can take proper control.\nAs of PX4 version 1.7, and on the current developer branch, the vehicle will consider the back-transition complete when the horizontal speed has reached multicopter cruise speed ("),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_XY_CRUISE"}},[e._v("MPC_XY_CRUISE")]),e._v(") or when the back-transition duration ("),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[e._v("VT_B_TRANS_DUR")]),e._v(") has passed (whichever comes first).")],1),e._v(" "),r("h2",{attrs:{id:"back-transition-duration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#back-transition-duration"}},[e._v("#")]),e._v(" Back-transition duration")]),e._v(" "),r("p",[e._v("Setting a high back-transition time ("),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[e._v("VT_B_TRANS_DUR")]),e._v(") will give the vehicle more time to slow down. During this period the VTOL will shut down its fixed wing motor and slowly ramp up its MC motors while gliding. The higher this time is set the longer the vehicle will glide in an attempt to slow down. The caveat of this behavior is that the vehicle will only control altitude and not position during this period, so some drift can occur.")],1),e._v(" "),r("h2",{attrs:{id:"setting-expected-deceleration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-expected-deceleration"}},[e._v("#")]),e._v(" Setting expected deceleration")]),e._v(" "),r("p",[e._v("When flying missions that make use of a "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_VTOL_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("VTOL_LAND"),r("OutboundLink")],1),e._v(" waypoint the autopilot will attempt to calculate the proper distance at which to initiate the back-transition. It does this by looking at the current velocity (comparable to ground speed) and the expected deceleration. To get the vehicle to come out of back-transition very close to its landing point you can tune the expected deceleration ("),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_DEC_MSS"}},[e._v("VT_B_DEC_MSS")]),e._v(") parameter. Make sure you have a large enough back-transition duration to allow the vehicle to reach its intended position before this timeout kicks in.")],1),e._v(" "),r("h2",{attrs:{id:"applying-airbrakes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#applying-airbrakes"}},[e._v("#")]),e._v(" Applying airbrakes")]),e._v(" "),r("p",[e._v("If your vehicle is equipped with airbrakes, and your selected airframe supports them (in code), you can set the airbrake position during back-transition in "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_REV_OUT"}},[e._v("VT_B_REV_OUT")]),e._v(". The values scale from 0 to 1, so a value of 0.7 equals 70% output.")],1),e._v(" "),r("h2",{attrs:{id:"applying-reverse-thrust-on-your-fixed-wing-motor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#applying-reverse-thrust-on-your-fixed-wing-motor"}},[e._v("#")]),e._v(" Applying reverse thrust on your fixed wing motor")]),e._v(" "),r("p",[e._v("To get the shortest possible back-transition, PX4 supports active breaking by reversing the fixed wing motor direction. To use this feature you will require an ESC that supports motor rotation reversing.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("A typical fixed wing propeller is not optimized to spin in reverse, when the throttle during reverse thrust is set too high the propeller can stall.")])]),e._v(" "),r("p",[e._v("Generally there are 2 ways a reverse-capable ESC can implement reverse thrust.")]),e._v(" "),r("h3",{attrs:{id:"using-throttle-scaling-3d"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-throttle-scaling-3d"}},[e._v("#")]),e._v(" Using throttle scaling (3D)")]),e._v(" "),r("p",[e._v("Normally the throttle stick is used purely for forward thrust.")]),e._v(" "),r("p",[e._v("3D ESCs assume 0 thrust at 50% throttle, positive (forward) thrust above 50% and negative thrust (reverse) below 50%. The airframe can be modified to implement this behaviour "),r("em",[e._v("only")]),e._v(" during back transition, allowing reverse thrust to be applied during the transition.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Support for 3D throttle scaling during back-transition requires "),r("em",[e._v("code support")]),e._v(" in the airframe.")])]),e._v(" "),r("p",[e._v("The amount of negative thrust during back transition can then be configured using the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_TRANS_THR"}},[e._v("VT_B_TRANS_THR")]),e._v(" parameter (set to a negative value between 0 and -1).")],1),e._v(" "),r("h3",{attrs:{id:"on-a-control-channel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#on-a-control-channel"}},[e._v("#")]),e._v(" On a control channel")]),e._v(" "),r("p",[e._v("ESCs that use a separate control channel to control the motor direction (e.g. "),r("a",{attrs:{href:"https://www.hobbywing.com/category.php?id=76&filter_attr=.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hobbywing Platinum series"),r("OutboundLink")],1),e._v(") can use the airbrakes channel to apply reverse thrust during back-transition.")]),e._v(" "),r("p",[e._v("Airframes that have been configured to support this behavior (like the DeltaQuad airframe) can be configured to do so by setting both "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_REV_OUT"}},[e._v("VT_B_REV_OUT")]),e._v(" to 1 and "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_TRANS_THR"}},[e._v("VT_B_TRANS_THR")]),e._v(" to the desired throttle level to apply for active breaking. The values scale from 0 to 1, so a value of 0.7 equals 70% throttle.")],1),e._v(" "),r("h2",{attrs:{id:"typical-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#typical-setup"}},[e._v("#")]),e._v(" Typical setup")]),e._v(" "),r("p",[e._v("An example of a setup that employs most features listed above would be the following:")]),e._v(" "),r("ul",[r("li",[e._v("Airframe: Any VTOL supporting reverse thrust (e.g. DeltaQuad)")]),e._v(" "),r("li",[e._v("ESC: A fixed wing ESC that supports motor reversing (e.g. Hobbywing Platinum Pro 60A)")]),e._v(" "),r("li",[e._v("Estimated deceleration value in m/s/s "),r("code",[e._v("VT_B_DEC_MSS")]),e._v(": 2.5")]),e._v(" "),r("li",[e._v("Back-transition duration timeout in seconds "),r("code",[e._v("VT_B_TRANS_DUR")]),e._v(": 10")]),e._v(" "),r("li",[e._v("Set reverse channel high during back-transition "),r("code",[e._v("VT_B_REV_OUT")]),e._v(": 1.0")]),e._v(" "),r("li",[e._v("Apply 70% thrust during back-transition "),r("code",[e._v("VT_B_TRANS_THR")]),e._v(": 0.7")])])])}),[],!1,null,null,null);t.default=i.exports}}]);