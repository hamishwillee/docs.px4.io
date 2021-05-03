(window.webpackJsonp=window.webpackJsonp||[]).push([[965],{1970:function(t,e,i){"use strict";i.r(e);var o=i(18),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"멀티로터-경로-조정하기-궤적-생성기"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#멀티로터-경로-조정하기-궤적-생성기"}},[t._v("#")]),t._v(" 멀티로터 경로 조정하기 (궤적 생성기)")]),t._v(" "),i("p",[t._v("This document provides an overview of the multicopter tuning parameters that change the "),i("em",[t._v("user experience")]),t._v(": how fast the vehicle reacts to stick movements or direction changes in missions, the maximum allowed velocity, etc.")]),t._v(" "),i("p",[t._v("In other words, this topic explains how to tune the parameters that affect the value of a "),i("em",[t._v("desired setpoint")]),t._v(" rather than those that affect how well the vehicle "),i("em",[t._v("tracks")]),t._v(" the setpoint).")]),t._v(" "),i("p",[t._v('The algorithm that generates those setpoints is called a "trajectory generator".')]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("p",[t._v("This guide is for advanced users/experts.")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("Follow the instructions in the "),i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(" "),i("em",[t._v("before")]),t._v(" doing any of the tuning described here. Do not use these tuning parameters to fix bad tracking or vibration!")],1)]),t._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),i("p",[t._v("The input to the P/PID controller is a "),i("em",[t._v("desired setpoint")]),t._v(" that the vehicle should attempt to track. "),i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("PID Tuning")]),t._v(' ("Lower level tuning") aims to reduce the error between the desired setpoint and the estimate of the vehicle state.')],1),t._v(" "),i("p",[t._v("The "),i("em",[t._v("desired setpoint")]),t._v(" passed to the P/PID controller is itself calculated from a "),i("em",[t._v("demanded setpoint")]),t._v(' based on a stick position (in RC modes) or from a mission command. The demanded setpoint can change very quickly (e.g. if a user moves stick from zero to maximum value as a "step"). Vehicle flight characteristics are better if the corresponding desired setpoint changes as a "ramp".')]),t._v(" "),i("p",[i("em",[t._v("Setpoint value tuning")]),t._v(' ("higher level tuning") is used to specify the mapping between the '),i("em",[t._v("demanded")]),t._v(" and the "),i("em",[t._v("desired")]),t._v(' setpoints - i.e. defining the "ramp" at which the desired setpoint follows the demanded setpoint.')]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("Poorly tuned "),i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("P/PID Gains")]),t._v(" can lead to instability. Poorly tuned "),i("em",[t._v("setpoint values")]),t._v(" cannot result in instability, but may result in either very jerky or very unresponsive reactions to setpoint changes.")],1)]),t._v(" "),i("p",[i("span",{attrs:{id:"modes"}})]),t._v(" "),i("h2",{attrs:{id:"flight-modes-trajectory-support"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flight-modes-trajectory-support"}},[t._v("#")]),t._v(" Flight Modes Trajectory Support")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("Mission mode")]),t._v(" used the "),i("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("Jerk-limited")]),t._v(" trajectory all the time.")],1),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" supports all the "),i("a",{attrs:{href:"#trajectory_implementation"}},[t._v("trajectory types")]),t._v(" listed below. It uses the "),i("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("Jerk-limited")]),t._v(" trajectory by default; the other types can be set using "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v(".")],1),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("Altitude mode")]),t._v(" similarly uses the "),i("a",{attrs:{href:"#trajectory_implementation"}},[t._v("trajectory types")]),t._v(" selected by "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v(", but "),i("em",[t._v("only")]),t._v(" for smoothing the vertical component (i.e. when controlling the altitude).")],1),t._v(" "),i("p",[t._v("No other modes support trajectory tuning.")]),t._v(" "),i("p",[i("span",{attrs:{id:"trajectory_implementation"}})]),t._v(" "),i("h2",{attrs:{id:"trajectory-implementations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#trajectory-implementations"}},[t._v("#")]),t._v(" Trajectory Implementations")]),t._v(" "),i("p",[t._v("The following list provides an "),i("em",[t._v("overview")]),t._v(" of the different trajectory implementations:")]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("Jerk-limited")]),t._v(" (Default)\n"),i("ul",[i("li",[t._v("Used when smooth motion is required (e.g.: filming, mapping, cargo).")]),t._v(" "),i("li",[t._v("Generates symmetric smooth S-curves where the jerk and acceleration limits are always guaranteed.")]),t._v(" "),i("li",[t._v("May not be suitable for vehicles/use-cases that require a faster response - e.g. racer quads.")]),t._v(" "),i("li",[t._v("Set in position mode using "),i("code",[t._v("MPC_POS_MODE=3")]),t._v(".")])])],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/config_mc/mc_slew_rate_type_trajectory.html"}},[t._v("Slew-rate")]),t._v(" "),i("ul",[i("li",[t._v("Used when quick response is more important than smooth motion (e.g.: aggressive flight with position hold).")]),t._v(" "),i("li",[t._v("This is a simple implementation where the jerk and acceleration is limited using slew-rates.")]),t._v(" "),i("li",[t._v("It allows asymmetric profiles based on user intention (smooth acceleration and quick stop).")]),t._v(" "),i("li",[t._v("The jerk and acceleration limits are not hard constraints.")]),t._v(" "),i("li",[t._v("Set in position mode using "),i("code",[t._v("MPC_POS_MODE=1")]),t._v(".")])])],1),t._v(" "),i("li",[i("strong",[t._v("Simple position control")]),t._v(" "),i("ul",[i("li",[t._v("Sticks map directly to velocity setpoints without smoothing.")]),t._v(" "),i("li",[t._v("Useful for velocity control tuning.")]),t._v(" "),i("li",[t._v("Set in position mode using "),i("code",[t._v("MPC_POS_MODE=0")]),t._v(".")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);