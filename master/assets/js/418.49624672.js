(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{1596:function(e,t,o){"use strict";o.r(t);var i=o(19),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"multicopter-pid-tuning-guide-manual-basic"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-pid-tuning-guide-manual-basic"}},[e._v("#")]),e._v(" Multicopter PID Tuning Guide (Manual/Basic)")]),e._v(" "),i("p",[e._v("This tutorial explains how to "),i("em",[e._v("manually")]),e._v(" tune the PID loops on PX4 for all "),i("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter"}},[e._v("multicopter setups")]),e._v(" (Quads, Hexa, Octo etc).")],1),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/config/autotune.html"}},[e._v("Autotune")]),e._v(" is recommended for most users, as it is far faster, easier and provides good tuning for most frames.\nManual tuning is recommended for frames where autotuning does not work, or where fine-tuning is essential.")],1)]),e._v(" "),i("p",[e._v("Generally if you're using an appropriate "),i("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter"}},[e._v("supported airframe configuration")]),e._v(", the default tuning should allow you to fly the vehicle safely.\nTuning is recommended for all new vehicle setups to get the "),i("em",[e._v("very best")]),e._v(" performance, because relatively small hardware and assembly changes can affect the gains required tuning gains for optimal flight.\nFor example, different ESCs or motors change the optimal tuning gains.")],1),e._v(" "),i("h2",{attrs:{id:"introduction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),i("p",[e._v("PX4 uses "),i("strong",[e._v("P")]),e._v("roportional, "),i("strong",[e._v("I")]),e._v("ntegral, "),i("strong",[e._v("D")]),e._v("erivative (PID) controllers (these are the most widespread control technique).")]),e._v(" "),i("p",[e._v("The "),i("em",[e._v("QGroundControl")]),e._v(" "),i("strong",[e._v("PID Tuning")]),e._v(" setup provides real-time plots of the vehicle setpoint and response curves.\nThe goal of tuning is to set the P/I/D values such that the "),i("em",[e._v("Response")]),e._v(" curve matches the "),i("em",[e._v("Setpoint")]),e._v(" curve as closely as possible (i.e. a fast response without overshoots).")]),e._v(" "),i("p",[i("img",{attrs:{src:o(419),alt:"QGC Rate Controller Tuning UI"}})]),e._v(" "),i("p",[e._v("The controllers are layered, which means a higher-level controller passes its results to a lower-level controller.\nThe lowest-level controller is the "),i("strong",[e._v("rate controller")]),e._v(", followed by the "),i("strong",[e._v("attitude controller")]),e._v(", and finally the "),i("strong",[e._v("velocity & position controller")]),e._v(".\nThe PID tuning needs to be done in this same order, starting with the rate controller, as it will affect all other controllers.")]),e._v(" "),i("p",[e._v("The testing procedure for each controller (rate, attitude, velocity/posibition) and axis (yaw, roll, pitch) is always the same: create a fast setpoint change by moving the sticks very rapidly and observe the response.\nThen adjust the sliders (as discussed below) to improve the tracking of the response to the setpoint.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("ul",[i("li",[e._v("Rate controller tuning is the most important, and if tuned well, the other controllers often need no or only minor adjustments")]),e._v(" "),i("li",[e._v("Usually the same tuning gains can be used for roll and pitch.")]),e._v(" "),i("li",[e._v("use Acro/Stabilized/Altitude mode to tune the rate controller")]),e._v(" "),i("li",[e._v("Use "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" to tune the "),i("em",[e._v("Velocity Controller")]),e._v(" and the "),i("em",[e._v("Position Controller")]),e._v(".\nMake sure to switch to the "),i("em",[e._v("Simple position control")]),e._v(" mode so you can generate step inputs.\n"),i("img",{attrs:{src:o(420),alt:"QGC PID tuning: Simple control selector"}})],1)])]),e._v(" "),i("h2",{attrs:{id:"preconditions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("You have selected the closest matching "),i("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[e._v("default airframe configuration")]),e._v(" for your vehicle.\nThis should give you a vehicle that already flies.")],1)]),e._v(" "),i("li",[i("p",[e._v("You should have done an "),i("RouterLink",{attrs:{to:"/en/advanced_config/esc_calibration.html"}},[e._v("ESC calibration")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[e._v("If using PWM output: "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MAIN_MIN"}},[e._v("PWM_MAIN_MIN")]),e._v(" is set correctly.\nIt needs to be set low, but such that the "),i("strong",[e._v("motors never stop")]),e._v(" when the vehicle is armed.")],1),e._v(" "),i("p",[e._v("This can be tested in "),i("RouterLink",{attrs:{to:"/en/flight_modes/acro_mc.html"}},[e._v("Acro mode")]),e._v(" or in "),i("RouterLink",{attrs:{to:"/en/flight_modes/manual_stabilized_mc.html"}},[e._v("Manual/Stabilized mode")]),e._v(":")],1),e._v(" "),i("ul",[i("li",[e._v("Remove propellers")]),e._v(" "),i("li",[e._v("Arm the vehicle and lower the throttle to the minimum")]),e._v(" "),i("li",[e._v("Tilt the vehicle to all directions, about 60 degrees")]),e._v(" "),i("li",[e._v("Check that no motors turn off")])])]),e._v(" "),i("li",[i("p",[e._v("Use a high-rate telemetry link such as WiFi if at all possible (a typical low-range telemetry radio is not fast enough for real-time feedback and plots).\nThis is particularly important for the rate controller.")])]),e._v(" "),i("li",[i("p",[e._v("Disable "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_AIRMODE"}},[e._v("MC_AIRMODE")]),e._v(" before tuning a vehicle (there is an options for this in the PID tuning screen).")],1)])]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("Poorly tuned vehicles are likely to be unstable, and easy to crash.\nMake sure to have assigned a "),i("RouterLink",{attrs:{to:"/en/config/safety.html#emergency-switches"}},[e._v("Kill switch")]),e._v(".")],1)]),e._v(" "),i("h2",{attrs:{id:"tuning-procedure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tuning-procedure"}},[e._v("#")]),e._v(" Tuning Procedure")]),e._v(" "),i("p",[e._v("The tuning procedure is:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Arm the vehicle, takeoff, and hover (typically in "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(").")],1)]),e._v(" "),i("li",[i("p",[e._v("Open "),i("em",[e._v("QGroundControl")]),e._v(" "),i("strong",[e._v("Vehicle Setup > PID Tuning")]),e._v(" "),i("img",{attrs:{src:o(419),alt:"QGC Rate Controller Tuning UI"}})])]),e._v(" "),i("li",[i("p",[e._v("Select the "),i("strong",[e._v("Rate Controller")]),e._v(" tab.")])]),e._v(" "),i("li",[i("p",[e._v("Confirm that the airmode selector is set to "),i("strong",[e._v("Disabled")])])]),e._v(" "),i("li",[i("p",[e._v("Set the "),i("em",[e._v("Thrust curve")]),e._v(" value to: 0.3 (PWM, power-based controllers) or 1 (RPM-based ESCs)")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("For PWM, power-based and (some) UAVCAN speed controllers, the control signal to thrust relationship may not be linear.\nAs a result, the optimal tuning at hover thrust may not be ideal when the vehicle is operating at higher thrust.")]),e._v(" "),i("p",[e._v("The thrust curve value can be used to compensate for this non-linearity:")]),e._v(" "),i("ul",[i("li",[e._v("For PWM controllers, 0.3 is a good default (which may benefit from "),i("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[e._v("further tuning")]),e._v(").")],1),e._v(" "),i("li",[e._v("For RPM-based controllers, use 1 (no further tuning is required as these have a quadratic thrust curve).")])]),e._v(" "),i("p",[e._v("For more information see the "),i("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[e._v("detailed PID tuning guide")]),e._v(".")],1)])]),e._v(" "),i("li",[i("p",[e._v("Set the "),i("em",[e._v("Select Tuning")]),e._v(" radio button to: "),i("strong",[e._v("Roll")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("(Optionally) Select the "),i("strong",[e._v("Automatic Flight Mode Switching")]),e._v(" checkbox.\nThis will "),i("em",[e._v("automatically")]),e._v(" switch from "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" to "),i("RouterLink",{attrs:{to:"/en/flight_modes/manual_stabilized_mc.html"}},[e._v("Stabilised mode")]),e._v(" when you press the "),i("strong",[e._v("Start")]),e._v(" button")],1)]),e._v(" "),i("li",[i("p",[e._v("For rate controller tuning switch to "),i("em",[e._v("Acro mode")]),e._v(", "),i("em",[e._v("Stabilized mode")]),e._v(" or "),i("em",[e._v("Altitude mode")]),e._v(" (unless automatic switching is enabled).")])]),e._v(" "),i("li",[i("p",[e._v("Select the "),i("strong",[e._v("Start")]),e._v(" button in order to start tracking the setpoint and response curves.")])]),e._v(" "),i("li",[i("p",[e._v("Rapidly move the "),i("em",[e._v("roll stick")]),e._v(" full range and observe the step response on the plots.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("Stop tracking to enable easier inspection of the plots.\nThis happens automatically when you zoom/pan.\nUse the "),i("strong",[e._v("Start")]),e._v(" button to restart the plots, and "),i("strong",[e._v("Clear")]),e._v(" to reset them.")])])]),e._v(" "),i("li",[i("p",[e._v("Modify the three PID values using the sliders (for roll rate-tuning these affect "),i("code",[e._v("MC_ROLLRATE_K")]),e._v(", "),i("code",[e._v("MC_ROLLRATE_I")]),e._v(", "),i("code",[e._v("MC_ROLLRATE_D")]),e._v(") and observe the step response again.\nThe values are saved to the vehicle as soon as the sliders are moved.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("The goal is for the "),i("em",[e._v("Response")]),e._v(" curve to match the "),i("em",[e._v("Setpoint")]),e._v(" curve as closely as possible (i.e. a fast response without overshoots).")])]),e._v(" "),i("p",[e._v("The PID values can be adjusted as follows:")]),e._v(" "),i("ul",[i("li",[e._v("P (proportional) or K gain:\n"),i("ul",[i("li",[e._v("increase this for more responsiveness")]),e._v(" "),i("li",[e._v("reduce if the response is overshooting and/or oscillating (up to a certain point increasing the D gain also helps).")])])]),e._v(" "),i("li",[e._v("D (derivative) gain:\n"),i("ul",[i("li",[e._v("this can be increased to dampen overshoots and oscillations")]),e._v(" "),i("li",[e._v("increase this only as much as needed, as it amplifies noise (and can lead to hot motors)")])])]),e._v(" "),i("li",[e._v("I (integral) gain:\n"),i("ul",[i("li",[e._v("used to reduce steady-state error")]),e._v(" "),i("li",[e._v("if too low, the response might never reach the setpoint (e.g. in wind)")]),e._v(" "),i("li",[e._v("if too high, slow oscillations can occur")])])])])]),e._v(" "),i("li",[i("p",[e._v("Repeat the tuning process above for the pitch and yaw:")]),e._v(" "),i("ul",[i("li",[e._v("Use "),i("em",[e._v("Select Tuning")]),e._v(" radio button to select the axis to tune")]),e._v(" "),i("li",[e._v("Move the appropriate sticks (i.e. pitch stick for pitch, yaw stick for yaw).")]),e._v(" "),i("li",[e._v("For pitch tuning, start with the same values as for roll."),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("Use the "),i("strong",[e._v("Save to Clipboard")]),e._v(" and "),i("strong",[e._v("Reset from Clipboard")]),e._v(" buttons to copy the roll settings for initial pitch settings.")])])])])]),e._v(" "),i("li",[i("p",[e._v("Repeat the tuning process for the attitude controller on all the axes.")])]),e._v(" "),i("li",[i("p",[e._v("Repeat the tuning process for the velocity and positions controllers (on all the axes).")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Use Position mode when tuning these controllers")])]),e._v(" "),i("li",[i("p",[e._v("Select the "),i("strong",[e._v("Simple position control")]),e._v(" option in the "),i("em",[e._v("Position control mode ...")]),e._v(" selector (this allows direct control for the generation of step inputs)")]),e._v(" "),i("p",[i("img",{attrs:{src:o(420),alt:"QGC PID tuning: Simple control selector"}})])])])])]),e._v(" "),i("p",[e._v("All done!\nRemember to re-enable airmode before leaving the setup.")])])}),[],!1,null,null,null);t.default=s.exports},419:function(e,t,o){e.exports=o.p+"assets/img/qgc_mc_pid_tuning_rate_controller.950965c8.png"},420:function(e,t,o){e.exports=o.p+"assets/img/qgc_mc_pid_tuning_simple_control.9f73a764.png"}}]);