(window.webpackJsonp=window.webpackJsonp||[]).push([[913],{1903:function(e,t,i){"use strict";i.r(t);var a=i(18),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"advanced-fixed-wing-position-tuning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#advanced-fixed-wing-position-tuning"}},[e._v("#")]),e._v(" Advanced Fixed-wing Position Tuning")]),e._v(" "),i("p",[e._v("This guide offers some help in tuning the high-level fixed-wing controllers needed for flying missions and in altitude/position control mode. PX4 uses TECS for altitude and airspeed control, and L1 for horizontal heading/position control.")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Warning")]),e._v(" This guide is for advanced users / experts only. If you don't understand TECS tuning you may crash your aircraft.")])]),e._v(" "),i("p",[i("span")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note")]),e._v(" An incorrectly set gain during tuning can make altitude or heading control unstable. A pilot tuning the TECS gains should therefore be able to fly and land the plane in stabilized control mode.")])]),e._v(" "),i("p",[i("span")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Tip")]),e._v(" All parameters are documented in the "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#fw-tecs"}},[e._v("Parameter Reference")]),e._v(". The most important parameters are covered in this guide.")],1)]),e._v(" "),i("h2",{attrs:{id:"tecs-tuning-altitude-and-airspeed"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tecs-tuning-altitude-and-airspeed"}},[e._v("#")]),e._v(" TECS Tuning (Altitude and Airspeed)")]),e._v(" "),i("p",[e._v("TECS (Total Energy Control System) is a guidance algorithm for fixed-wing aircraft that coordinates throttle and pitch angle setpoints to control the aircraft's altitude and airspeed. For a detailed description of the TECS algorithm and the control diagram, see "),i("RouterLink",{attrs:{to:"/ko/flight_stack/controller_diagrams.html"}},[e._v("Controller Diagrams")]),e._v(".")],1),e._v(" "),i("p",[e._v("A well-tuned attitude controller is required before tuning TECS: "),i("RouterLink",{attrs:{to:"/ko/config_fw/pid_tuning_guide_fixedwing.html"}},[e._v("PID Tuning Guide")]),e._v(".")],1),e._v(" "),i("p",[e._v("Tuning TECS is mainly about setting the airframe limitations correctly. Those limitations can be specified in terms of parameters that can be determined from a sequence of flight maneuvers, which are described below. Most of the maneuvers required the plane to be flown by a pilot in "),i("RouterLink",{attrs:{to:"/ko/flight_modes/stabilized_fw.html"}},[e._v("Stabilized flight mode")]),e._v(".")],1),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Tip")]),e._v(" It is highly beneficial to have a person available who can read and take note of telemetry data while the pilot is flying the maneuvers. To improve accuracy we also recommended that you verify the data obtained during flight with the data recorded in the flight logs.")])]),e._v(" "),i("h4",{attrs:{id:"_1st-trim-conditions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1st-trim-conditions"}},[e._v("#")]),e._v(" 1st: Trim Conditions")]),e._v(" "),i("p",[e._v("Fly in "),i("RouterLink",{attrs:{to:"/ko/flight_modes/stabilized_fw.html"}},[e._v("stabilized mode")]),e._v(" and find trim values for both throttle and pitch angle for level flight at trim airspeed. Use throttle to adjust airspeed and pitch to keep level flight.")],1),e._v(" "),i("p",[e._v("Set the following parameters:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[e._v("FW_AIRSPD_TRIM")]),e._v(" - set to the desired trim airspeed flown during the maneuver.")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_CRUISE"}},[e._v("FW_THR_CRUISE")]),e._v(" - set to the throttle required to fly at trim airspeed.")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_PSP_OFF"}},[e._v("FW_PSP_OFF")]),e._v(" - set to the pitch angle required to maintain level flight.")],1)]),e._v(" "),i("h4",{attrs:{id:"_2nd-airspeed-throttle-limits"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2nd-airspeed-throttle-limits"}},[e._v("#")]),e._v(" 2nd: Airspeed & Throttle Limits")]),e._v(" "),i("p",[e._v("Fly in "),i("RouterLink",{attrs:{to:"/ko/flight_modes/stabilized_fw.html"}},[e._v("stabilized mode")]),e._v(" and increase throttle while maintaining level flight using pitch control - until the vehicle reaches the maximum allowed airspeed.")],1),e._v(" "),i("p",[e._v("Set the following parameters:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MAX"}},[e._v("FW_THR_MAX")]),e._v(" - set to the throttle you applied to reach maximum airspeed during level flight.")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MIN"}},[e._v("FW_THR_MIN")]),e._v(" - set to the minimum throttle the plane should fly at.")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[e._v("FW_AIRSPD_MAX")]),e._v(" - set to the maximum airspeed you achieved during level flight at "),i("code",[e._v("FW_THR_MAX")]),e._v(".")],1)]),e._v(" "),i("h4",{attrs:{id:"_3rd-pitch-climb-rate-limits"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3rd-pitch-climb-rate-limits"}},[e._v("#")]),e._v(" 3rd: Pitch & Climb Rate Limits")]),e._v(" "),i("p",[e._v("Fly in stabilized mode, apply full throttle ("),i("code",[e._v("FW_THR_MAX")]),e._v(") and slowly increase the pitch angle of the vehicle until the airspeed reaches "),i("code",[e._v("FW_AIRSPD_TRIM")]),e._v(".")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_P_LIM_MAX"}},[e._v("FW_P_LIM_MAX")]),e._v(" - set to the pitch angle required to climb at trim airspeed when applying "),i("code",[e._v("FW_THR_MAX")]),e._v(".")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[e._v("FW_T_CLMB_MAX")]),e._v(" - set to the climb rate achieved during the climb at "),i("code",[e._v("FW_AIRSPD_TRIM")]),e._v(".")],1)]),e._v(" "),i("p",[e._v("Fly in stabilized mode, reduce the throttle to "),i("code",[e._v("FW_THR_MIN")]),e._v(" and slowly decrease the pitch angle until the vehicle reaches "),i("code",[e._v("FW_AIRSPD_MAX")]),e._v(".")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_P_LIM_MIN"}},[e._v("FW_P_LIM_MIN")]),e._v(" - set to the pitch angle required to reach "),i("code",[e._v("FW_AIRSPD_MAX")]),e._v(" at "),i("code",[e._v("FW_THR_MIN")]),e._v(".")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_MAX"}},[e._v("FW_T_SINK_MAX")]),e._v(" - set to the sink rate achieved during the descent.")],1)]),e._v(" "),i("p",[e._v("Fly in stabilized mode, reduce throttle to "),i("code",[e._v("FW_THR_MIN")]),e._v(" and adjust the pitch angle such that the plane maintains "),i("code",[e._v("FW_AIRSPD_TRIM")]),e._v(".")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_MIN"}},[e._v("FW_T_SINK_MIN")]),e._v(" - set to the sink rate achieved while maintaining "),i("code",[e._v("FW_AIRSPD_TRIM")]),e._v(".")],1)]),e._v(" "),i("h3",{attrs:{id:"l1-controller-tuning-position"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#l1-controller-tuning-position"}},[e._v("#")]),e._v(" L1 Controller Tuning (Position)")]),e._v(" "),i("p",[e._v("All L1 parameters are described "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#fw-l1-control"}},[e._v("here")]),e._v(".")],1),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_L1_PERIOD"}},[e._v("FW_L1_PERIOD")]),e._v(" - This is the L1 distance and defines the tracking point ahead of the aircraft it's following. A value of 25 meters works for most aircraft. A value of 16-18 will still work, and provide a sharper response. Shorten slowly during tuning until response is sharp without oscillation.")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);