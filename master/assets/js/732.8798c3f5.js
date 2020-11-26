(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{1498:function(e,t,a){"use strict";a.r(t);var n=a(18),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"fixed-wing-pid-tuning-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-pid-tuning-guide"}},[e._v("#")]),e._v(" Fixed-wing PID Tuning Guide")]),e._v(" "),a("p",[e._v("This guide explains how to tune the fixed_wing PID loop.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Warning")]),e._v(" This guide is for advanced users / experts only.\nIncorrect PID tuning may crash your aircraft.")])]),e._v(" "),a("p",[a("span")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])])]),e._v(" "),a("ul",[a("li",[e._v("Incorrectly set gains during tuning can make attitude control unstable.\nA pilot tuning gains should therefore be able to fly and land the plane in "),a("RouterLink",{attrs:{to:"/en/flight_modes/manual_fw.html"}},[e._v("manual")]),e._v(" (override) control.")],1),e._v(" "),a("li",[e._v("Excessive gains (and rapid servo motion) can violate the maximum forces of your airframe - increase gains carefully.")]),e._v(" "),a("li",[e._v("Roll and pitch tuning follow the same sequence.\nThe only difference is that pitch is more sensitive to trim offsets, so "),a("RouterLink",{attrs:{to:"/en/config_fw/trimming_guide_fixedwing.html"}},[e._v("trimming")]),e._v(" has to be done carefully and integrator gains need more attention to compensate this.")],1)]),e._v(" "),a("p",[a("span")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" All parameters are documented in the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html"}},[e._v("Parameter Reference")]),e._v(".\nThe most important parameters are covered in this guide.")],1)]),e._v(" "),a("h2",{attrs:{id:"establishing-the-airframe-baseline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#establishing-the-airframe-baseline"}},[e._v("#")]),e._v(" Establishing the Airframe Baseline")]),e._v(" "),a("p",[e._v("If a pilot capable of manual flight is available, its best to establish a few core system properties on a manual trial.\nTo do this, fly these maneuvers.\nEven if you can't note all the quantities immediately on paper, the log file will be very useful for later tuning.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Success")]),e._v(" All these quantities will be automatically logged.\nYou only need to take notes if you want to directly move on to tuning without looking at the log files.")])]),e._v(" "),a("ul",[a("li",[e._v("Fly level with a convenient airspeed. Note throttle stick position and airspeed (example: 70% → 0.7 throttle, 15 m/s airspeed).")]),e._v(" "),a("li",[e._v("Climb with maximum throttle and sufficient airspeed for 10-30 seconds (example: 12 m/s airspeed, climbed 100 m in 30 seconds).")]),e._v(" "),a("li",[e._v("Descend with zero throttle and reasonable airspeed for 10-30 seconds (example: 18 m/s airspeed, descended 80 m in 30 seconds).")]),e._v(" "),a("li",[e._v("Bank hard right with full roll stick until 60 degrees roll, then bank hard left with full roll stick until 60 degrees in the opposite side.")]),e._v(" "),a("li",[e._v("Pitch up hard 45 degrees, pitch down hard 45 degrees.")])]),e._v(" "),a("p",[e._v("This guide will use these quantities to set some of the controller gains later on.")]),e._v(" "),a("h2",{attrs:{id:"tune-roll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-roll"}},[e._v("#")]),e._v(" Tune Roll")]),e._v(" "),a("p",[e._v("Tune first the roll axis, then pitch.\nThe roll axis is safer as an incorrect tuning leads only to motion, but not a loss of altitude.")]),e._v(" "),a("h3",{attrs:{id:"tuning-the-feedforward-gain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-feedforward-gain"}},[e._v("#")]),e._v(" Tuning the Feedforward Gain")]),e._v(" "),a("p",[e._v("To tune this gain, set the other gains to zero.")]),e._v(" "),a("h4",{attrs:{id:"gains-to-set-to-zero"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gains-to-set-to-zero"}},[e._v("#")]),e._v(" Gains to set to zero")]),e._v(" "),a("ul",[a("li",[e._v("FW_RR_I = 0")]),e._v(" "),a("li",[e._v("FW_RR_P = 0")]),e._v(" "),a("li",[e._v("FW_RSP_OFF = 0")])]),e._v(" "),a("h4",{attrs:{id:"gains-to-tune"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gains-to-tune"}},[e._v("#")]),e._v(" Gains to tune")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_RR_FF"}},[e._v("FW_RR_FF")]),e._v(" - start with a value of 0.4.\nIncrease this value (doubling each time) until the plane rolls satisfactorily and reaches the setpoint.\nBack down the gain 20% at the end of the process.")],1)]),e._v(" "),a("h3",{attrs:{id:"tuning-the-rate-gain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-rate-gain"}},[e._v("#")]),e._v(" Tuning the Rate Gain")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_RR_P"}},[e._v("FW_RR_P")]),e._v(" - start with a value of 0.06. Increase this value (doubling each time) until the system starts to wobble / twitch.\nThen reduce gain by 50%.")],1)]),e._v(" "),a("h3",{attrs:{id:"tuning-the-trim-offsets-with-the-integrator-gain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-trim-offsets-with-the-integrator-gain"}},[e._v("#")]),e._v(" Tuning the Trim Offsets with the Integrator Gain")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_RR_I"}},[e._v("FW_RR_I")]),e._v(" - start with a value of 0.01.\nIncrease this value (doubling each time) until there is no offset between commanded and actual roll value (this will most likely require looking at a log file).")],1)]),e._v(" "),a("h2",{attrs:{id:"tune-pitch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-pitch"}},[e._v("#")]),e._v(" Tune Pitch")]),e._v(" "),a("p",[e._v("The pitch axis might need more integrator gain and a correctly set pitch offset.")]),e._v(" "),a("h3",{attrs:{id:"tuning-the-feedforward-gain-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-feedforward-gain-2"}},[e._v("#")]),e._v(" Tuning the Feedforward Gain")]),e._v(" "),a("p",[e._v("To tune this gain, set the other gains to zero.")]),e._v(" "),a("h4",{attrs:{id:"gains-to-set-to-zero-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gains-to-set-to-zero-2"}},[e._v("#")]),e._v(" Gains to set to zero")]),e._v(" "),a("ul",[a("li",[e._v("FW_PR_I = 0")]),e._v(" "),a("li",[e._v("FW_PR_P = 0")]),e._v(" "),a("li",[e._v("FW_PSP_OFF = 0")])]),e._v(" "),a("h4",{attrs:{id:"gains-to-tune-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gains-to-tune-2"}},[e._v("#")]),e._v(" Gains to tune")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_PR_FF"}},[e._v("FW_PR_FF")]),e._v(" - start with a value of 0.4.\nIncrease this value (doubling each  time) until the plane pitches satisfactory and reaches the setpoint.\nBack down the gain 20% at the end of the process.")],1)]),e._v(" "),a("h3",{attrs:{id:"tuning-the-rate-gain-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-rate-gain-2"}},[e._v("#")]),e._v(" Tuning the Rate Gain")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_PR_P"}},[e._v("FW_PR_P")]),e._v(" - start with a value of 0.04.\nIncrease this value (doubling each time) until the system starts to wobble / twitch.\nThen reduce value by 50%.")],1)]),e._v(" "),a("h3",{attrs:{id:"tuning-the-trim-offsets-with-the-integrator-gain-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-the-trim-offsets-with-the-integrator-gain-2"}},[e._v("#")]),e._v(" Tuning the Trim Offsets with the Integrator Gain")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_PR_I"}},[e._v("FW_PR_I")]),e._v(" - start with a value of 0.01.\nIncrease this value (doubling each time) until there is no offset between commanded and actual pitch value (this will most likely require looking at a log file).")],1)]),e._v(" "),a("h2",{attrs:{id:"adjusting-the-time-constant-of-the-outer-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-the-time-constant-of-the-outer-loop"}},[e._v("#")]),e._v(" Adjusting the Time Constant of the Outer Loop")]),e._v(" "),a("p",[e._v("The overall softness / hardness of the control loop can be adjusted by the time constant.\nThe default of 0.5 seconds should be fine for normal fixed-wing setups and usually does not require adjustment.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_P_TC"}},[e._v("FW_P_TC")]),e._v(" - set to a default of 0.5 seconds, increase to make the Pitch response softer, decrease to make the response harder.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_R_TC"}},[e._v("FW_R_TC")]),e._v(" - set to a default of 0.5 seconds, increase to make the Roll response softer, decrease to make the response harder.")],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);