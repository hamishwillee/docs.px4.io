(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{1930:function(e,t,r){"use strict";r.r(t);var a=r(18),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"fixed-wing-trimming-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-trimming-guide"}},[e._v("#")]),e._v(" Fixed-Wing Trimming Guide")]),e._v(" "),a("p",[e._v("Trims are used to calibrate the control surfaces at trim conditions (relative airspeed, air density, angle of attack, aircraft configuration, etc.). A properly trimmed aircraft flying at trim conditions will keep its attitude without requiring any control inputs from the pilot or the stabilizing computer.")]),e._v(" "),a("p",[e._v("General aviation, commercial and large unmanned planes trim their control surfaces using "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Trim_tab",target:"_blank",rel:"noopener noreferrer"}},[e._v("trim tabs"),a("OutboundLink")],1),e._v(" while small UAVs simply add an offset to the actuator of the control surface.")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"#basic-trimming"}},[e._v("Basic trimming")]),e._v(" section explains the purpose of each trim parameter and how to find the correct value. The "),a("a",{attrs:{href:"#advanced-trimming"}},[e._v("Advanced Trimming")]),e._v(" section introduces parameters that can be set to automatically adjust the trims based on the measured airspeed and flap position.")]),e._v(" "),a("h2",{attrs:{id:"basic-trimming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-trimming"}},[e._v("#")]),e._v(" Basic Trimming")]),e._v(" "),a("p",[e._v("There are several parameters an operator might want to use in order to properly trim a fixed-wing aircraft. An overview of those parameters and their use case is shown below:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC1_TRIM"}},[e._v("RCx_TRIM")]),e._v(" applies trim to the signal received from the RC transmitter. These parameters are set automatically during "),a("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[e._v("RC calibration")]),e._v(".")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_TRIM1"}},[e._v("PWM_MAIN_TRIMx")]),e._v(" applies trim to a PWM channel, after mixing. These are used to finely align the control surfaces to default angles before flying.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_PSP_OFF"}},[e._v("FW_PSP_OFF")]),e._v(" applies an offset to the pitch setpoint. This is used to set the angle of attack at which your aircraft needs to fly at cruise speed.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[e._v("FW_AIRSPD_TRIM")]),e._v(" is used by the rate controllers to scale their output depending on the measured airspeed. See "),a("RouterLink",{attrs:{to:"/ko/flight_stack/controller_diagrams.html#airspeed-scaling"}},[e._v("Airspeed Scaling")]),e._v(" for more details.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIM_ROLL"}},[e._v("TRIM_ROLL")]),e._v(", "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIM_PITCH"}},[e._v("TRIM_PITCH")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIM_YAW"}},[e._v("TRIM_YAW")]),e._v(" apply trim to the control signals "),a("em",[e._v("before")]),e._v(" mixing. For example, if you have two servos for the elevator, "),a("code",[e._v("TRIM_PITCH")]),e._v(" applies trim to both of them. These are used when your control surfaces are aligned but the aircraft pitches/rolls/yaws up/down/left/right during manual (not stabilized) flight or if the control signal has a constant offset during stabilized flight.")],1)]),e._v(" "),a("p",[e._v("The correct order to set the above parameters is:")]),e._v(" "),a("ol",[a("li",[e._v("Trim the servos by physically adjusting the linkages lengths if possible and fine tune by trimming the PWM channels (use "),a("code",[e._v("PWM_MAIN/AUX_TRIMx")]),e._v(") on the bench to properly set the control surfaces to their theoretical position.")]),e._v(" "),a("li",[e._v("Fly in stabilized mode at cruise speed and set the pitch setpoint offset ("),a("code",[e._v("FW_PSP_OFF")]),e._v(") to desired angle of attack. The required angle of attack at cruise speed corresponds to the pitch angle that the airplane needs to fly at in order to keep constant altitude during wing-leveled flight. If you are using an airspeed sensor, also set the correct cruise airspeed ("),a("code",[e._v("FW_AIRSPD_TRIM")]),e._v(").")]),e._v(" "),a("li",[e._v("Look at the actuator controls in the log file (upload it to "),a("a",{attrs:{href:"https://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),a("OutboundLink")],1),e._v(" and check the "),a("em",[e._v("Actuator Controls")]),e._v(" plot for example) and set the pitch trim ("),a("code",[e._v("TRIM_PITCH")]),e._v("). Set that value to the average offset of the pitch signal during wing-leveled flight.")])]),e._v(" "),a("p",[e._v("Step 3 can be performed before step 2 if you don't want to have to look at the log, or if you feel comfortable flying in manual mode. You can then trim your remote (with the trim switches) and report the values to "),a("code",[e._v("TRIM_PITCH")]),e._v(" (and remove the trims from your transmitter) or update "),a("code",[e._v("TRIM_PITCH")]),e._v(" directly during flight via telemetry and QGC.")]),e._v(" "),a("h2",{attrs:{id:"advanced-trimming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-trimming"}},[e._v("#")]),e._v(" Advanced Trimming")]),e._v(" "),a("p",[e._v("Given that the downward pitch moment induced by an asymmetric airfoil increases with airspeed and when the flaps are deployed, the aircraft needs to be re-trimmed according to the current measured airspeed and flaps position. For this purpose, a bilinear curve (see figure below) function of airspeed and a pitch trim increment function of the flaps state can be defined using the following parameters:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_DTRIM_R_VMIN"}},[e._v("FW"),a("em",[e._v("DTRIM")]),e._v("[R/P/Y]_[VMIN/VMAX]")]),e._v(" are the roll/pitch/yaw trim value added to "),a("code",[e._v("TRIM_ROLL/PITCH/YAW")]),e._v(" at min/max airspeed (defined by "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[e._v("FW_AIRSPD_MIN")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[e._v("FW_AIRSPD_MAX")]),e._v(").")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_DTRIM_R_FLPS"}},[e._v("FW_DTRIM_P_FLPS")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_DTRIM_P_FLPS"}},[e._v("FW_DTRIM_P_FLPS")]),e._v(" are the roll/pitch trim value added to "),a("code",[e._v("TRIM_ROLL/PITCH/YAW")]),e._v(" when the flaps are deployed.")],1)]),e._v(" "),a("p",[a("img",{attrs:{src:r(646),alt:"Dtrim Curve"}})]),e._v(" "),a("p",[e._v("A perfectly symmetrical airframe would only require pitch trim increments, but since a real airframe is never perfectly symmetrical, roll and yaw trims increments are also sometimes required.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("If a scale factor different from 1.0 is used for the flaps (parameter "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_FLAPS_SCL"}},[e._v("FW_FLAPS_SCL")]),e._v("), the trim increment added by the "),a("code",[e._v("FW_DTRIM_R/P_FLPS")]),e._v("is also scaled by the same factor.")],1)])])}),[],!1,null,null,null);t.default=i.exports},646:function(e,t,r){e.exports=r.p+"assets/img/fixedwing_dtrim.070a3948.png"}}]);