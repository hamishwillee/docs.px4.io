(window.webpackJsonp=window.webpackJsonp||[]).push([[980],{1835:function(t,e,i){"use strict";i.r(e);var o=i(19),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"multicopter-setpoint-tuning-trajectory-generator"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-setpoint-tuning-trajectory-generator"}},[t._v("#")]),t._v(" Multicopter Setpoint Tuning (Trajectory Generator)")]),t._v(" "),i("p",[t._v("This document provides an overview of the multicopter tuning parameters that change the "),i("em",[t._v("user experience")]),t._v(": how fast the vehicle reacts to stick movements or direction changes in missions, the maximum allowed velocity, etc.")]),t._v(" "),i("p",[t._v("In other words, this topic explains how to tune the parameters that affect the value of a "),i("em",[t._v("desired setpoint")]),t._v(" rather than those that affect how well the vehicle "),i("em",[t._v("tracks")]),t._v(" the setpoint).")]),t._v(" "),i("p",[t._v('The algorithm that generates those setpoints is called a "trajectory generator".')]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("p",[t._v("This guide is for advanced users/experts.")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("Follow the instructions in the "),i("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(" "),i("em",[t._v("before")]),t._v(" doing any of the tuning described here.\nDo not use these tuning parameters to fix bad tracking or vibration!")],1)]),t._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),i("p",[t._v("The input to the P/PID controller is a "),i("em",[t._v("desired setpoint")]),t._v(" that the vehicle should attempt to track.\n"),i("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("PID Tuning")]),t._v(' ("Lower level tuning") aims to reduce the error between the desired setpoint and the estimate of the vehicle state.')],1),t._v(" "),i("p",[t._v("The "),i("em",[t._v("desired setpoint")]),t._v(" passed to the P/PID controller is itself calculated from a "),i("em",[t._v("demanded setpoint")]),t._v(' based on a stick position (in RC modes) or from a mission command.\nThe demanded setpoint can change very quickly (e.g. if a user moves stick from zero to maximum value as a "step").\nVehicle flight characteristics are better if the corresponding desired setpoint changes as a "ramp".')]),t._v(" "),i("p",[i("em",[t._v("Setpoint value tuning")]),t._v(' ("higher level tuning") is used to specify the mapping between the '),i("em",[t._v("demanded")]),t._v(" and the "),i("em",[t._v("desired")]),t._v(' setpoints - i.e. defining the "ramp" at which the desired setpoint follows the demanded setpoint.')]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("Poorly tuned "),i("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("P/PID Gains")]),t._v(" can lead to instability.\nPoorly tuned "),i("em",[t._v("setpoint values")]),t._v(" cannot result in instability, but may result in either very jerky or very unresponsive reactions to setpoint changes.")],1)]),t._v(" "),i("p",[i("a",{attrs:{id:"modes"}})]),t._v(" "),i("h2",{attrs:{id:"flight-modes-trajectory-support"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flight-modes-trajectory-support"}},[t._v("#")]),t._v(" Flight Modes Trajectory Support")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/flight_modes/mission.html"}},[t._v("Mission mode")]),t._v(" used the "),i("RouterLink",{attrs:{to:"/en/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("Jerk-limited")]),t._v(" trajectory all the time.")],1),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" supports the "),i("a",{attrs:{href:"#position-mode-implementations"}},[t._v("implementations")]),t._v(" listed below.\nIt uses the acceleration based mapping by default; other types can be set using "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v(".")],1),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[t._v("Altitude mode")]),t._v(" similarly supports the "),i("a",{attrs:{href:"#altitude-mode-implementations"}},[t._v("implementations")]),t._v(" selected by "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v(", but "),i("em",[t._v("only")]),t._v(" for smoothing the vertical component (i.e. when controlling the altitude).")],1),t._v(" "),i("p",[t._v("No other modes support trajectory tuning.")]),t._v(" "),i("h2",{attrs:{id:"position-mode-implementations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position-mode-implementations"}},[t._v("#")]),t._v(" Position Mode Implementations")]),t._v(" "),i("p",[t._v("The following list provides an "),i("em",[t._v("overview")]),t._v(" of the different implementations of how the stick input is interpreted and turned into trajectory setpoints:")]),t._v(" "),i("ul",[i("li",[t._v("Acceleration based (Default)\n"),i("ul",[i("li",[t._v("Horizontal stick input mapped to acceleration setpoints.")]),t._v(" "),i("li",[t._v("Intuitive stick feel because it's like pushing the vehicle around.")]),t._v(" "),i("li",[t._v("No unexpected tilt changes upon reaching travel speed velocity.")]),t._v(" "),i("li",[t._v("Vertical stick input mapped with jerk-limited trajectory.")]),t._v(" "),i("li",[t._v("Set in position mode using "),i("code",[t._v("MPC_POS_MODE=4")]),t._v(".")])])]),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("Jerk-limited")]),t._v(" "),i("ul",[i("li",[t._v("Used when smooth motion is required (e.g.: filming, mapping, cargo).")]),t._v(" "),i("li",[t._v("Generates symmetric smooth S-curves where the jerk and acceleration limits are always guaranteed.")]),t._v(" "),i("li",[t._v("May not be suitable for vehicles/use-cases that require a faster response - e.g. race quads.")]),t._v(" "),i("li",[t._v("Set in position mode using "),i("code",[t._v("MPC_POS_MODE=3")]),t._v(".")])])],1),t._v(" "),i("li",[i("strong",[t._v("Simple position control")]),t._v(" "),i("ul",[i("li",[t._v("Sticks map directly to velocity setpoints without smoothing.")]),t._v(" "),i("li",[t._v("Useful for velocity control tuning.")]),t._v(" "),i("li",[t._v("Set in position mode using "),i("code",[t._v("MPC_POS_MODE=0")]),t._v(".")])])])]),t._v(" "),i("h2",{attrs:{id:"altitude-mode-implementations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#altitude-mode-implementations"}},[t._v("#")]),t._v(" Altitude Mode Implementations")]),t._v(" "),i("p",[t._v("Analogously to "),i("a",{attrs:{href:"#position-mode-implementations"}},[t._v("position mode implementations")]),t._v(" these are the implementations for interpreting vertical stick input:")]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("Jerk-limited")]),t._v(" "),i("ul",[i("li",[t._v("Smoothed vertical input.")]),t._v(" "),i("li",[t._v("Set in altitude mode with "),i("code",[t._v("MPC_POS_MODE")]),t._v(" 3 or 4.")])])],1),t._v(" "),i("li",[i("strong",[t._v("Simple altitude control")]),t._v(" "),i("ul",[i("li",[t._v("Unsmoothed vertical input.")]),t._v(" "),i("li",[t._v("Set in altitude mode only when using "),i("code",[t._v("MPC_POS_MODE=0")]),t._v(".")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);