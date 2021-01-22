(window.webpackJsonp=window.webpackJsonp||[]).push([[1104],{2324:function(t,e,a){"use strict";a.r(e);var i=a(18),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fixed-wing-pid-tuning-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-pid-tuning-guide"}},[t._v("#")]),t._v(" Fixed-wing PID Tuning Guide")]),t._v(" "),a("p",[t._v("This guide explains how to tune the fixed_wing PID loop.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("This guide is for advanced users / experts only. Incorrect PID tuning may crash your aircraft.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("ul",[a("li",[t._v("Incorrectly set gains during tuning can make attitude control unstable. A pilot tuning gains should therefore be able to fly and land the plane in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/manual_fw.html"}},[t._v("manual")]),t._v(" (override) control.")],1),t._v(" "),a("li",[t._v("Excessive gains (and rapid servo motion) can violate the maximum forces of your airframe - increase gains carefully.")]),t._v(" "),a("li",[t._v("Roll and pitch tuning follow the same sequence. The only difference is that pitch is more sensitive to trim offsets, so "),a("RouterLink",{attrs:{to:"/zh/config_fw/trimming_guide_fixedwing.html"}},[t._v("trimming")]),t._v(" has to be done carefully and integrator gains need more attention to compensate this.")],1)])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("All parameters are documented in the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[t._v("Parameter Reference")]),t._v(". The most important parameters are covered in this guide.")],1)]),t._v(" "),a("h2",{attrs:{id:"establishing-the-airframe-baseline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#establishing-the-airframe-baseline"}},[t._v("#")]),t._v(" Establishing the Airframe Baseline")]),t._v(" "),a("p",[t._v("If a pilot capable of manual flight is available, its best to establish a few core system properties on a manual trial. To do this, fly these maneuvers. Even if you can't note all the quantities immediately on paper, the log file will be very useful for later tuning.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("All these quantities will be automatically logged. You only need to take notes if you want to directly move on to tuning without looking at the log files.")]),t._v(" "),a("ul",[a("li",[t._v("Fly level with a convenient airspeed. Note throttle stick position and airspeed (example: 70% → 0.7 throttle, 15 m/s airspeed).")]),t._v(" "),a("li",[t._v("Climb with maximum throttle and sufficient airspeed for 10-30 seconds (example: 12 m/s airspeed, climbed 100 m in 30 seconds).")]),t._v(" "),a("li",[t._v("Descend with zero throttle and reasonable airspeed for 10-30 seconds (example: 18 m/s airspeed, descended 80 m in 30 seconds).")]),t._v(" "),a("li",[t._v("Bank hard right with full roll stick until 60 degrees roll, then bank hard left with full roll stick until 60 degrees in the opposite side.")]),t._v(" "),a("li",[t._v("Pitch up hard 45 degrees, pitch down hard 45 degrees.")])])]),t._v(" "),a("p",[t._v("This guide will use these quantities to set some of the controller gains later on.")]),t._v(" "),a("h2",{attrs:{id:"tune-roll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-roll"}},[t._v("#")]),t._v(" Tune Roll")]),t._v(" "),a("p",[t._v("Tune first the roll axis, then pitch. The roll axis is safer as an incorrect tuning leads only to motion, but not a loss of altitude.")]),t._v(" "),a("h3",{attrs:{id:"tuning-the-feedforward-gain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-feedforward-gain"}},[t._v("#")]),t._v(" Tuning the Feedforward Gain")]),t._v(" "),a("p",[t._v("To tune this gain, set the other gains to zero.")]),t._v(" "),a("h4",{attrs:{id:"gains-to-set-to-zero"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gains-to-set-to-zero"}},[t._v("#")]),t._v(" Gains to set to zero")]),t._v(" "),a("ul",[a("li",[t._v("FW_RR_I = 0")]),t._v(" "),a("li",[t._v("FW_RR_P = 0")]),t._v(" "),a("li",[t._v("FW_RSP_OFF = 0")])]),t._v(" "),a("h4",{attrs:{id:"gains-to-tune"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gains-to-tune"}},[t._v("#")]),t._v(" Gains to tune")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_RR_FF"}},[t._v("FW_RR_FF")]),t._v(" - start with a value of 0.4. Increase this value (doubling each time) until the plane rolls satisfactorily and reaches the setpoint. Back down the gain 20% at the end of the process.")],1)]),t._v(" "),a("h3",{attrs:{id:"tuning-the-rate-gain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-rate-gain"}},[t._v("#")]),t._v(" Tuning the Rate Gain")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_RR_P"}},[t._v("FW_RR_P")]),t._v(" - start with a value of 0.06. Increase this value (doubling each time) until the system starts to wobble / twitch. Then reduce gain by 50%.")],1)]),t._v(" "),a("h3",{attrs:{id:"tuning-the-trim-offsets-with-the-integrator-gain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-trim-offsets-with-the-integrator-gain"}},[t._v("#")]),t._v(" Tuning the Trim Offsets with the Integrator Gain")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_RR_I"}},[t._v("FW_RR_I")]),t._v(" - start with a value of 0.01. Increase this value (doubling each time) until there is no offset between commanded and actual roll value (this will most likely require looking at a log file).")],1)]),t._v(" "),a("h2",{attrs:{id:"tune-pitch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-pitch"}},[t._v("#")]),t._v(" Tune Pitch")]),t._v(" "),a("p",[t._v("The pitch axis might need more integrator gain and a correctly set pitch offset.")]),t._v(" "),a("h3",{attrs:{id:"tuning-the-feedforward-gain-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-feedforward-gain-2"}},[t._v("#")]),t._v(" Tuning the Feedforward Gain")]),t._v(" "),a("p",[t._v("To tune this gain, set the other gains to zero.")]),t._v(" "),a("h4",{attrs:{id:"gains-to-set-to-zero-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gains-to-set-to-zero-2"}},[t._v("#")]),t._v(" Gains to set to zero")]),t._v(" "),a("ul",[a("li",[t._v("FW_PR_I = 0")]),t._v(" "),a("li",[t._v("FW_PR_P = 0")]),t._v(" "),a("li",[t._v("FW_PSP_OFF = 0")])]),t._v(" "),a("h4",{attrs:{id:"gains-to-tune-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gains-to-tune-2"}},[t._v("#")]),t._v(" Gains to tune")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_PR_FF"}},[t._v("FW_PR_FF")]),t._v(" - start with a value of 0.4. Increase this value (doubling each time) until the plane pitches satisfactory and reaches the setpoint. Back down the gain 20% at the end of the process.")],1)]),t._v(" "),a("h3",{attrs:{id:"tuning-the-rate-gain-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-rate-gain-2"}},[t._v("#")]),t._v(" Tuning the Rate Gain")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_PR_P"}},[t._v("FW_PR_P")]),t._v(" - start with a value of 0.04. Increase this value (doubling each time) until the system starts to wobble / twitch. Then reduce value by 50%.")],1)]),t._v(" "),a("h3",{attrs:{id:"tuning-the-trim-offsets-with-the-integrator-gain-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-trim-offsets-with-the-integrator-gain-2"}},[t._v("#")]),t._v(" Tuning the Trim Offsets with the Integrator Gain")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_PR_I"}},[t._v("FW_PR_I")]),t._v(" - start with a value of 0.01. Increase this value (doubling each time) until there is no offset between commanded and actual pitch value (this will most likely require looking at a log file).")],1)]),t._v(" "),a("h2",{attrs:{id:"adjusting-the-time-constant-of-the-outer-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-the-time-constant-of-the-outer-loop"}},[t._v("#")]),t._v(" Adjusting the Time Constant of the Outer Loop")]),t._v(" "),a("p",[t._v("The overall softness / hardness of the control loop can be adjusted by the time constant. The default of 0.5 seconds should be fine for normal fixed-wing setups and usually does not require adjustment.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_P_TC"}},[t._v("FW_P_TC")]),t._v(" - set to a default of 0.5 seconds, increase to make the Pitch response softer, decrease to make the response harder.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_R_TC"}},[t._v("FW_R_TC")]),t._v(" - set to a default of 0.5 seconds, increase to make the Roll response softer, decrease to make the response harder.")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);