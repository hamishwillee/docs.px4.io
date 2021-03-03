(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{1935:function(e,t,o){"use strict";o.r(t);var i=o(18),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"slew-rate-type-trajectory-for-multicopters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#slew-rate-type-trajectory-for-multicopters"}},[e._v("#")]),e._v(" Slew-rate Type Trajectory for Multicopters")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("The trajectory type can be enabled in "),i("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" (only) using the following parameter setting: "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[e._v("MPC_POS_MODE=1")]),e._v(".")],1),e._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[e._v("MC Jerk-limited Trajectory Tuning")]),e._v(" is an alternative trajectory that provides for smoother responses.")],1)]),e._v(" "),i("p",[e._v("The Slew Rate trajectory type is a simple implementation where the jerk and acceleration is limited using slew-rates (jerk and acceleration limits are not hard constraints).")]),e._v(" "),i("p",[e._v('It allows asymmetric profiles based on user intention (smooth acceleration and quick stop), and should be used when a quick (and potentially "jerky") response to stick input is more important than ensuring smooth acceleration and deceleration (e.g.: for aggressive flight with position hold).')]),e._v(" "),i("p",[e._v("This topic explains how the trajectory type can be tuned.")]),e._v(" "),i("h2",{attrs:{id:"position-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position-mode"}},[e._v("#")]),e._v(" Position Mode")]),e._v(" "),i("p",[e._v("In "),i("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" the stick inputs are mapped to either "),i("strong",[e._v("position-control")]),e._v(" or "),i("strong",[e._v("velocity-control")]),e._v(".")],1),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("The position controller ("),i("RouterLink",{attrs:{to:"/ko/flight_stack/controller_diagrams.html#multicopter-position-controller"}},[e._v("diagram here")]),e._v(") consists of an outer "),i("strong",[e._v("P")]),e._v(" position-control loop and an inner "),i("strong",[e._v("PID")]),e._v(" velocity-control loop. Depending on the mode and situation either both loops are active or just the velocity control loop.")],1),e._v(" "),i("p",[e._v("For the remainder of this topic the term "),i("strong",[e._v("position-control")]),e._v(" represents the case where both loops are active while "),i("strong",[e._v("velocity-control")]),e._v(" refers to the case when only the velocity control loop is in use.")])]),e._v(" "),i("p",[e._v("Position-control is active when the stick inputs are within the deadzone "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[e._v("MPC_HOLD_DZ")]),e._v(", and velocity-control otherwise.")],1),e._v(" "),i("p",[e._v("All the parameters below are tuning parameters and cannot be mapped directly to the physical quantity.")]),e._v(" "),i("h4",{attrs:{id:"mpc-acc-hor-max"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mpc-acc-hor-max"}},[e._v("#")]),e._v(" MPC_ACC_HOR_MAX")]),e._v(" "),i("p",[e._v("This parameter is used for position-control in the horizontal direction, where the vehicle is supposed to stay at the current location. The limit for the rate of change of the velocity setpoint is defined by "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_HOR_MAX"}},[e._v("MPC_ACC_HOR_MAX")]),e._v(". This parameter should be set larger than any of the other acceleration related parameters in the horizontal direction.")],1),e._v(" "),i("p",[i("span",{attrs:{id:"mpc_acc_hor-and-mpc_dec_hor_slow"}})]),e._v(" "),i("h4",{attrs:{id:"mpc-acc-hor-and-mpc-dec-hor-slow"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mpc-acc-hor-and-mpc-dec-hor-slow"}},[e._v("#")]),e._v(" MPC_ACC_HOR and MPC_DEC_HOR_SLOW")]),e._v(" "),i("p",[e._v("In velocity-control the rate limit for the velocity setpoint is extracted from a linear map from stick input to acceleration limit with maximum "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_HOR"}},[e._v("MPC_ACC_HOR")]),e._v(" and minimum "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_DEC_HOR_SLOW"}},[e._v("MPC_DEC_HOR_SLOW")]),e._v(". For example, if the stick input is at "),i("code",[e._v("MPC_HOLD_DZ")]),e._v(", the limiting acceleration is "),i("code",[e._v("MPC_DEC_HOR_SLOW")]),e._v(". If the stick input is at maximum (="),i("code",[e._v("1")]),e._v("), the limiting acceleration is "),i("code",[e._v("MPC_ACC_HOR")]),e._v(" and any stick input in between is mapped linearly between the two parameters. In addition, "),i("code",[e._v("MPC_DEC_HOR_SLOW")]),e._v(" also limits the change in velocity setpoint when the user demands a deceleration in the current flight direction. For instance, if the stick input changes from maximum (="),i("code",[e._v("1")]),e._v(") to "),i("code",[e._v("0.5")]),e._v(", the velocity setpoint change will be limited by "),i("code",[e._v("MPC_DEC_HOR_SLOW")]),e._v(".")],1),e._v(" "),i("p",[e._v("During transition from "),i("strong",[e._v("velocity-control")]),e._v(" to "),i("strong",[e._v("position-control")]),e._v(", there is a hard switch from "),i("code",[e._v("MPC_ACC_HOR")]),e._v(" to "),i("code",[e._v("MPC_ACC_HOR_MAX")]),e._v(" and a reset of the velocity setpoint to the current vehicle velocity. The reset and the hard switch can both introduce a jerky flight performance during stopping. Nonetheless, the reset is required because the smoothing parameters introduce a delay to the setpoint, which can lead to unexpected flight maneuvers.")]),e._v(" "),i("p",[e._v("A simple example explaining why the reset is needed is given below.")]),e._v(" "),i("p",[e._v("Consider the case where a user demands full speed from hover followed by a stop request. This is equivalent to full stick input with maximum value of "),i("code",[e._v("1")]),e._v(" followed by zero stick input. To simplify the example, assume that "),i("code",[e._v("MPC_ACC_HOR_MAX")]),e._v(" is equal to "),i("code",[e._v("MPC_ACC_HOR")]),e._v(" and therefore there is no hard switch in acceleration limit when switching from "),i("strong",[e._v("velocity-control")]),e._v(" to "),i("strong",[e._v("position-control")]),e._v(". In addition, let's assume the maximum speed that can be demanded is "),i("code",[e._v("4 m/s")]),e._v(".")]),e._v(" "),i("p",[e._v("During full stick input, the velocity setpoint will not change directly from "),i("code",[e._v("0 m/s")]),e._v(" to "),i("code",[e._v("4 m/s")]),e._v(" (aka step input) - instead the velocity setpoint follows a ramp with slope "),i("code",[e._v("MPC_ACC_HOR")]),e._v(". The actual velocity of the vehicle, however, will not track the setpoint perfectly, but rather will lag behind. The lag will be more significant the larger the value of "),i("code",[e._v("MPC_ACC_HOR")]),e._v(".")]),e._v(" "),i("p",[i("img",{attrs:{src:o(657),alt:"Slewrate Reset"}})]),e._v(" "),i("p",[e._v("Without the reset (the top graph), at the moment of the stop demand (stick equal 0) the velocity setpoint will ramp down with the maximum rate given by "),i("code",[e._v("MPC_ACC_HOR_MAX")]),e._v(". Due to the lag the vehicle will first continue to accelerate in the direction previous to the stop demand followed by slowly decelerating towards zero. With the reset of the velocity setpoint to the current velocity, the delay due to the lag during stop demand can be overcome.")]),e._v(" "),i("h4",{attrs:{id:"mpc-acc-up-max-and-mpc-acc-down-max"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mpc-acc-up-max-and-mpc-acc-down-max"}},[e._v("#")]),e._v(" MPC_ACC_UP_MAX and MPC_ACC_DOWN_MAX")]),e._v(" "),i("p",[i("code",[e._v("MPC_ACC_UP_MAX")]),e._v(" >= "),i("code",[e._v("MPC_ACC_DOWN_MAX")]),e._v(", otherwise the firmware will overwrite the given values.")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("position-control:")]),e._v(" the limit in velocity setpoint change in z-direction is given by "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_UP_MAX"}},[e._v("MPC_ACC_UP_MAX")]),e._v(".")],1),e._v(" "),i("li",[i("strong",[e._v("velocity-control:")]),e._v(" the limit in velocity setpoint change for stick input is "),i("code",[e._v("MPC_ACC_UP_MAX")]),e._v(" for upward and "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_DOWN_MAX"}},[e._v("MPC_ACC_DOWN_MAX")]),e._v(" for downward direction.")],1)]),e._v(" "),i("h4",{attrs:{id:"mpc-jerk-max-and-mpc-jerk-min"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mpc-jerk-max-and-mpc-jerk-min"}},[e._v("#")]),e._v(" MPC_JERK_MAX and MPC_JERK_MIN")]),e._v(" "),i("p",[e._v("These two parameters only have effect during the transition from "),i("strong",[e._v("velocity-control")]),e._v(" to "),i("strong",[e._v("position-control")]),e._v(". The purpose of these two parameters are to minimize the jerk introduced from forward flight to hover (please see "),i("a",{attrs:{href:"#mpc_acc_hor-and-mpc_dec_hor_slow"}},[e._v("MPC_ACC_HOR and MPC_DEC_HOR_SLOW")]),e._v(").")]),e._v(" "),i("p",[e._v("The jerk-parameter controls the rate limit with which the acceleration limit can change to "),i("code",[e._v("MPC_ACC_HOR_MAX")]),e._v(". The actual jerk-value is a linear map from velocity speed to jerk where full speed maps to "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[e._v("MPC_JERK_MAX")]),e._v(" and zero speed to "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_JERK_MIN"}},[e._v("MPC_JERK_MIN")]),e._v(". The smoothing can be turned off by setting "),i("code",[e._v("MPC_JERK_MAX")]),e._v(" to a value smaller than "),i("code",[e._v("MPC_JERK_MIN")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports},657:function(e,t,o){e.exports=o.p+"assets/img/slewrate_reset.18833812.svg"}}]);