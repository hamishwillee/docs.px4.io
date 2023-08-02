(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{3248:function(t,e,o){"use strict";o.r(e);var i=o(19),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"multicopter-pid-tuning-guide-manual-basic"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-pid-tuning-guide-manual-basic"}},[t._v("#")]),t._v(" Multicopter PID Tuning Guide (Manual/Basic)")]),t._v(" "),i("p",[t._v("This tutorial explains how to "),i("em",[t._v("manually")]),t._v(" tune the PID loops on PX4 for all "),i("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter"}},[t._v("multicopter setups")]),t._v(" (Quads, Hexa, Octo etc).")],1),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/zh/config/autotune.html"}},[t._v("Autotune")]),t._v(" is recommended for most users, as it is far faster, easier and provides good tuning for most frames. Manual tuning is recommended for frames where autotuning does not work, or where fine-tuning is essential.")],1)]),t._v(" "),i("p",[t._v("Generally if you're using an appropriate "),i("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter"}},[t._v("supported frame configuration")]),t._v(", the default tuning should allow you to fly the vehicle safely. Tuning is recommended for all new vehicle setups to get the "),i("em",[t._v("very best")]),t._v(" performance, because relatively small hardware and assembly changes can affect the gains required tuning gains for optimal flight. For example, different ESCs or motors change the optimal tuning gains.")],1),t._v(" "),i("h2",{attrs:{id:"introduction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),i("p",[t._v("PX4 uses "),i("strong",[t._v("P")]),t._v("roportional, "),i("strong",[t._v("I")]),t._v("ntegral, "),i("strong",[t._v("D")]),t._v("erivative (PID) controllers (these are the most widespread control technique).")]),t._v(" "),i("p",[t._v("The "),i("em",[t._v("QGroundControl")]),t._v(" "),i("strong",[t._v("PID Tuning")]),t._v(" setup provides real-time plots of the vehicle setpoint and response curves. The goal of tuning is to set the P/I/D values such that the "),i("em",[t._v("Response")]),t._v(" curve matches the "),i("em",[t._v("Setpoint")]),t._v(" curve as closely as possible (i.e. a fast response without overshoots).")]),t._v(" "),i("p",[i("img",{attrs:{src:o(352),alt:"QGC Rate Controller Tuning UI"}})]),t._v(" "),i("p",[t._v("The controllers are layered, which means a higher-level controller passes its results to a lower-level controller. The lowest-level controller is the "),i("strong",[t._v("rate controller")]),t._v(", followed by the "),i("strong",[t._v("attitude controller")]),t._v(", and finally the "),i("strong",[t._v("velocity & position controller")]),t._v(". The PID tuning needs to be done in this same order, starting with the rate controller, as it will affect all other controllers.")]),t._v(" "),i("p",[t._v("The testing procedure for each controller (rate, attitude, velocity/posibition) and axis (yaw, roll, pitch) is always the same: create a fast setpoint change by moving the sticks very rapidly and observe the response. Then adjust the sliders (as discussed below) to improve the tracking of the response to the setpoint.")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("ul",[i("li",[t._v("Rate controller tuning is the most important, and if tuned well, the other controllers often need no or only minor adjustments")]),t._v(" "),i("li",[t._v("Usually the same tuning gains can be used for roll and pitch.")]),t._v(" "),i("li",[t._v("use Acro/Stabilized/Altitude mode to tune the rate controller")]),t._v(" "),i("li",[t._v("Use "),i("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" to tune the "),i("em",[t._v("Velocity Controller")]),t._v(" and the "),i("em",[t._v("Position Controller")]),t._v(". Make sure to switch to the "),i("em",[t._v("Simple position control")]),t._v(" mode so you can generate step inputs. "),i("img",{attrs:{src:o(431),alt:"QGC PID tuning: Simple control selector"}})],1)])]),t._v(" "),i("h2",{attrs:{id:"preconditions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("You have selected the closest matching "),i("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("default frame configuration")]),t._v(" for your vehicle. This should give you a vehicle that already flies.")],1)]),t._v(" "),i("li",[i("p",[t._v("You should have done an "),i("RouterLink",{attrs:{to:"/zh/advanced_config/esc_calibration.html"}},[t._v("ESC calibration")]),t._v(".")],1)]),t._v(" "),i("li",[i("p",[t._v("If using PWM outputs their minimum values should be set correctly in the "),i("RouterLink",{attrs:{to:"/zh/config/actuators.html#actuator-configuration-and-testing"}},[t._v("Actuator Configuration")]),t._v(". These need to be set low, but such that the "),i("strong",[t._v("motors never stop")]),t._v(" when the vehicle is armed.")],1),t._v(" "),i("p",[t._v("This can be tested in "),i("RouterLink",{attrs:{to:"/zh/flight_modes/acro_mc.html"}},[t._v("Acro mode")]),t._v(" or in "),i("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[t._v("Manual/Stabilized mode")]),t._v(":")],1),t._v(" "),i("ul",[i("li",[t._v("Remove propellers")]),t._v(" "),i("li",[t._v("Arm the vehicle and lower the throttle to the minimum")]),t._v(" "),i("li",[t._v("Tilt the vehicle to all directions, about 60 degrees")]),t._v(" "),i("li",[t._v("Check that no motors turn off")])])]),t._v(" "),i("li",[i("p",[t._v("Use a high-rate telemetry link such as WiFi if at all possible (a typical low-range telemetry radio is not fast enough for real-time feedback and plots). This is particularly important for the rate controller.")])]),t._v(" "),i("li",[i("p",[t._v("Disable "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_AIRMODE"}},[t._v("MC_AIRMODE")]),t._v(" before tuning a vehicle (there is an options for this in the PID tuning screen).")],1)])]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),i("p",[t._v("Poorly tuned vehicles are likely to be unstable, and easy to crash. Make sure to have assigned a "),i("RouterLink",{attrs:{to:"/zh/config/safety.html#emergency-switches"}},[t._v("Kill switch")]),t._v(".")],1)]),t._v(" "),i("h2",{attrs:{id:"tuning-procedure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tuning-procedure"}},[t._v("#")]),t._v(" Tuning Procedure")]),t._v(" "),i("p",[t._v("The tuning procedure is:")]),t._v(" "),i("ol",[i("li",[t._v("Arm the vehicle, takeoff, and hover (typically in "),i("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(").")],1),t._v(" "),i("li",[t._v("Open "),i("em",[t._v("QGroundControl")]),t._v(" "),i("strong",[t._v("Vehicle Setup > PID Tuning")]),t._v(" "),i("img",{attrs:{src:o(352),alt:"QGC Rate Controller Tuning UI"}})]),t._v(" "),i("li",[t._v("Select the "),i("strong",[t._v("Rate Controller")]),t._v(" tab.")]),t._v(" "),i("li",[t._v("Confirm that the airmode selector is set to "),i("strong",[t._v("Disabled")])]),t._v(" "),i("li",[t._v("Set the "),i("em",[t._v("Thrust curve")]),t._v(" value to: 0.3 (PWM, power-based controllers) or 1 (RPM-based ESCs)")])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("For PWM, power-based and (some) UAVCAN speed controllers, the control signal to thrust relationship may not be linear. As a result, the optimal tuning at hover thrust may not be ideal when the vehicle is operating at higher thrust.")]),t._v(" "),i("p",[t._v("The thrust curve value can be used to compensate for this non-linearity:")]),t._v(" "),i("ul",[i("li",[t._v("For PWM controllers, 0.3 is a good default (which may benefit from "),i("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[t._v("further tuning")]),t._v(").")],1),t._v(" "),i("li",[t._v("For RPM-based controllers, use 1 (no further tuning is required as these have a quadratic thrust curve).")])]),t._v(" "),i("p",[t._v("For more information see the "),i("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[t._v("detailed PID tuning guide")]),t._v(".")],1)]),t._v(" "),i("ol",[i("li",[t._v("Set the "),i("em",[t._v("Select Tuning")]),t._v(" radio button to: "),i("strong",[t._v("Roll")]),t._v(".")]),t._v(" "),i("li",[t._v("(Optionally) Select the "),i("strong",[t._v("Automatic Flight Mode Switching")]),t._v(" checkbox. This will "),i("em",[t._v("automatically")]),t._v(" switch from "),i("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" to "),i("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[t._v("Stabilised mode")]),t._v(" when you press the "),i("strong",[t._v("Start")]),t._v(" button")],1),t._v(" "),i("li",[t._v("For rate controller tuning switch to "),i("em",[t._v("Acro mode")]),t._v(", "),i("em",[t._v("Stabilized mode")]),t._v(" or "),i("em",[t._v("Altitude mode")]),t._v(" (unless automatic switching is enabled).")]),t._v(" "),i("li",[t._v("Select the "),i("strong",[t._v("Start")]),t._v(" button in order to start tracking the setpoint and response curves.")]),t._v(" "),i("li",[t._v("Rapidly move the "),i("em",[t._v("roll stick")]),t._v(" full range and observe the step response on the plots. :::tip Stop tracking to enable easier inspection of the plots. This happens automatically when you zoom/pan. Use the "),i("strong",[t._v("Start")]),t._v(" button to restart the plots, and "),i("strong",[t._v("Clear")]),t._v(" to reset them.\n:::")]),t._v(" "),i("li",[t._v("Modify the three PID values using the sliders (for roll rate-tuning these affect "),i("code",[t._v("MC_ROLLRATE_K")]),t._v(", "),i("code",[t._v("MC_ROLLRATE_I")]),t._v(", "),i("code",[t._v("MC_ROLLRATE_D")]),t._v(") and observe the step response again. The values are saved to the vehicle as soon as the sliders are moved. :::note The goal is for the "),i("em",[t._v("Response")]),t._v(" curve to match the "),i("em",[t._v("Setpoint")]),t._v(" curve as closely as possible (i.e. a fast response without overshoots). ::: The PID values can be adjusted as follows:\n"),i("ul",[i("li",[t._v("P (proportional) or K gain:\n"),i("ul",[i("li",[t._v("increase this for more responsiveness")]),t._v(" "),i("li",[t._v("reduce if the response is overshooting and/or oscillating (up to a certain point increasing the D gain also helps).")])])]),t._v(" "),i("li",[t._v("D (derivative) gain:\n"),i("ul",[i("li",[t._v("this can be increased to dampen overshoots and oscillations")]),t._v(" "),i("li",[t._v("increase this only as much as needed, as it amplifies noise (and can lead to hot motors)")])])]),t._v(" "),i("li",[t._v("I (integral) gain:\n"),i("ul",[i("li",[t._v("used to reduce steady-state error")]),t._v(" "),i("li",[t._v("if too low, the response might never reach the setpoint (e.g. in wind)")]),t._v(" "),i("li",[t._v("if too high, slow oscillations can occur")])])])])]),t._v(" "),i("li",[t._v("Repeat the tuning process above for the pitch and yaw:\n"),i("ul",[i("li",[t._v("Use "),i("em",[t._v("Select Tuning")]),t._v(" radio button to select the axis to tune")]),t._v(" "),i("li",[t._v("Move the appropriate sticks (i.e. pitch stick for pitch, yaw stick for yaw).")]),t._v(" "),i("li",[t._v("For pitch tuning, start with the same values as for roll. :::tip Use the "),i("strong",[t._v("Save to Clipboard")]),t._v(" and "),i("strong",[t._v("Reset from Clipboard")]),t._v(" buttons to copy the roll settings for initial pitch settings.\n:::")])])]),t._v(" "),i("li",[t._v("Repeat the tuning process for the attitude controller on all the axes.")]),t._v(" "),i("li",[t._v("Repeat the tuning process for the velocity and positions controllers (on all the axes).\n"),i("ul",[i("li",[i("p",[t._v("Use Position mode when tuning these controllers")])]),t._v(" "),i("li",[i("p",[t._v("Select the "),i("strong",[t._v("Simple position control")]),t._v(" option in the "),i("em",[t._v("Position control mode ...")]),t._v(" selector (this allows direct control for the generation of step inputs)")]),t._v(" "),i("p",[i("img",{attrs:{src:o(431),alt:"QGC PID tuning: Simple control selector"}})])])])])]),t._v(" "),i("p",[t._v("All done! Remember to re-enable airmode before leaving the setup.")])])}),[],!1,null,null,null);e.default=s.exports},352:function(t,e,o){t.exports=o.p+"assets/img/qgc_mc_pid_tuning_rate_controller.0b732932.png"},431:function(t,e,o){t.exports=o.p+"assets/img/qgc_mc_pid_tuning_simple_control.100dbcb2.png"}}]);