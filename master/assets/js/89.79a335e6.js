(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1503:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"multicopter-pid-tuning-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-pid-tuning-guide"}},[e._v("#")]),e._v(" Multicopter PID Tuning Guide")]),e._v(" "),a("p",[e._v("This tutorial explains how to tune the PID loops on PX4 for all "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter"}},[e._v("multicopter setups")]),e._v(" (Quads, Hexa, Octo etc).")],1),e._v(" "),a("p",[e._v("Generally if you're using a "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter"}},[e._v("supported specific configuration")]),e._v(" (e.g. using an airframe in "),a("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[e._v("QGroundControl > Airframe")]),e._v(") the default tuning should be sufficient to fly the vehicle safely.\nTo get the very best performance it is usually good to tune a new vehicle.\nFor example, different ESCs or motors require different tuning gains for optimal flight.")],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Warning")]),e._v(" This guide is for advanced users.\nUn- or partially- tuned vehicles are likely to be unstable, and easy to crash.\nMake sure to have a Kill-switch assigned.")])]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("PX4 uses "),a("strong",[e._v("P")]),e._v("roportional, "),a("strong",[e._v("I")]),e._v("ntegral, "),a("strong",[e._v("D")]),e._v("erivative (PID) controllers (these are the most widespread control technique).")]),e._v(" "),a("p",[e._v("The controllers are layered, which means a higher-level controller passes its results to a lower-level controller.\nThe lowest-level controller is the the "),a("strong",[e._v("rate controller")]),e._v(", then there is the "),a("strong",[e._v("attitude contoller")]),e._v(", and then the "),a("strong",[e._v("velocity & position controller")]),e._v(".\nThe PID tuning needs to be done in the same order, starting with the rate controller, as it will affect all other controllers.")]),e._v(" "),a("h2",{attrs:{id:"preconditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("You have selected the closest matching "),a("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[e._v("default airframe configuration")]),e._v(" for your vehicle.\nThis should give you a vehicle that already flies.")],1)]),e._v(" "),a("li",[a("p",[e._v("You should have done an "),a("RouterLink",{attrs:{to:"/en/advanced_config/esc_calibration.html"}},[e._v("ESC calibration")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MIN"}},[e._v("PWM_MIN")]),e._v(" is set correctly.\nIt needs to be set low, but such that the "),a("strong",[e._v("motors never stop")]),e._v(" when the vehicle is armed.")],1),e._v(" "),a("p",[e._v("This can be tested in "),a("RouterLink",{attrs:{to:"/en/flight_modes/acro_mc.html"}},[e._v("Acro mode")]),e._v(" or in "),a("RouterLink",{attrs:{to:"/en/flight_modes/manual_stabilized_mc.html"}},[e._v("Manual/Stabilized mode")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[e._v("Remove propellers")]),e._v(" "),a("li",[e._v("Arm the vehicle and lower the throttle to the minimum")]),e._v(" "),a("li",[e._v("Tilt the vehicle to all directions, about 60 degrees")]),e._v(" "),a("li",[e._v("Check that no motors turn off")])])]),e._v(" "),a("li",[a("p",[e._v("Optionally enable the high-rate logging profile with the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")]),e._v(" parameter so you can use the log to evaluate the rate and attitude tracking performance (the option can be disabled afterwards).")],1)])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Warning")]),e._v(" Always disable "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_AIRMODE"}},[e._v("MC_AIRMODE")]),e._v(" when tuning a vehicle.")],1)]),e._v(" "),a("h2",{attrs:{id:"tuning-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-steps"}},[e._v("#")]),e._v(" Tuning Steps")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" For safety reasons, the default gains are set to low values.\nYou must increase the gains before you can expect good control responses.")])]),e._v(" "),a("p",[e._v("Here are some general points to follow when tuning:")]),e._v(" "),a("ul",[a("li",[e._v("All gains should be increased very slowly as large gains may cause dangerous oscillations!\nTypically increase gains by 20-30% per iteration, reducing to 5-10% for final fine tuning.")]),e._v(" "),a("li",[e._v("Land before changing a parameter.\nSlowly increase the throttle and check for oscillations.")]),e._v(" "),a("li",[e._v("Tune the vehicle around the hovering thrust point, and use the "),a("a",{attrs:{href:"#thrust_curve"}},[e._v("thrust curve parameter")]),e._v(" to account for thrust non-linearities or high-thrust oscillations.")])]),e._v(" "),a("h3",{attrs:{id:"rate-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rate-controller"}},[e._v("#")]),e._v(" Rate Controller")]),e._v(" "),a("p",[e._v("The rate controller is the inner-most loop with three independent PID controllers to control the body rates (yaw, pitch, roll).")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" A well-tuned rate controller is very important as it affects "),a("em",[e._v("all")]),e._v(" flight modes.\nA badly tuned rate controller will be visible in "),a("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(', for example, as "twitches" (the vehicle will not hold perfectly still in the air).')],1)]),e._v(" "),a("h4",{attrs:{id:"rate-controller-architecture-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rate-controller-architecture-form"}},[e._v("#")]),e._v(" Rate Controller Architecture/Form")]),e._v(" "),a("p",[e._v('PX4 supports two (mathematically equivalent) forms of the PID rate controller in a single "mixed" implementation: '),a("a",{attrs:{href:"#parallel_form"}},[e._v("Parallel")]),e._v(" and "),a("a",{attrs:{href:"#standard_form"}},[e._v("Standard")]),e._v(".")]),e._v(" "),a("p",[e._v('Users can select the form that is used by setting the proportional gain for the other form to "1" (i.e. in the diagram below set '),a("strong",[e._v("K")]),e._v(" to 1 for the parallel form, or "),a("strong",[e._v("P")]),e._v(" to 1 for the standard form - this will replace either the K or P blocks with a line).")]),e._v(" "),a("p",[a("img",{attrs:{src:r(645),alt:"PID_Mixed"}})]),e._v(" "),a("ul",[a("li",[a("em",[e._v("G(s)")]),e._v(" represents the angular rates dynamics of a vehicle")]),e._v(" "),a("li",[a("em",[e._v("r")]),e._v(" is the rate setpoint")]),e._v(" "),a("li",[a("em",[e._v("y")]),e._v(" is the body angular rate (measured by a gyro)")]),e._v(" "),a("li",[a("em",[e._v("e")]),e._v(" is the error between the rate setpoint and the measured rate")]),e._v(" "),a("li",[a("em",[e._v("u")]),e._v(" is the output of the PID controller")])]),e._v(" "),a("p",[e._v("The two forms are described below.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" The derivative term ("),a("strong",[e._v("D")]),e._v(") is on the feedback path in order to avoid an effect known as the "),a("a",{attrs:{href:"http://brettbeauregard.com/blog/2011/04/improving-the-beginner%E2%80%99s-pid-derivative-kick/",target:"_blank",rel:"noopener noreferrer"}},[e._v("derivative kick"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[a("span")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" For more information see:")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.controleng.com/articles/not-all-pid-controllers-are-the-same/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Not all PID controllers are the same"),a("OutboundLink")],1),e._v(" (www.controleng.com)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/PID_controller#Standard_versus_parallel_(ideal)_PID_form",target:"_blank",rel:"noopener noreferrer"}},[e._v("PID controller > Standard versus parallel (ideal) PID form"),a("OutboundLink")],1),e._v(" (Wikipedia)")])]),e._v(" "),a("p",[a("span",{attrs:{id:"parallel_form"}})]),e._v(" "),a("h5",{attrs:{id:"parallel-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallel-form"}},[e._v("#")]),e._v(" Parallel Form")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("parallel form")]),e._v(" is the simplest form, and is (hence) commonly used in textbooks.\nIn this case the output of the controller is simply the sum of the proportional, integral and derivative actions.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(646),alt:"PID_Parallel"}})]),e._v(" "),a("p",[a("span",{attrs:{id:"standard_form"}})]),e._v(" "),a("h5",{attrs:{id:"standard-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standard-form"}},[e._v("#")]),e._v(" Standard Form")]),e._v(" "),a("p",[e._v("This form is mathematically equivalent to the parallel form, but the main advantage is that (even if it seems counter intuitive) it decouples the proportional gain tuning from the integral and derivative gains.\nThis means that a new platform can easily be tuned by taking the gains of a drone with similar size/inertia and simply adjust the K gain to have it flying properly.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(647),alt:"PID_Standard"}})]),e._v(" "),a("h4",{attrs:{id:"rate-pid-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rate-pid-tuning"}},[e._v("#")]),e._v(" Rate PID Tuning")]),e._v(" "),a("p",[e._v("The related parameters for the tuning of the PID rate controllers are:")]),e._v(" "),a("ul",[a("li",[e._v("Roll rate control ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_ROLLRATE_P"}},[e._v("MC_ROLLRATE_P")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_ROLLRATE_I"}},[e._v("MC_ROLLRATE_I")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_ROLLRATE_D"}},[e._v("MC_ROLLRATE_D")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_ROLLRATE_K"}},[e._v("MC_ROLLRATE_K")]),e._v(")")],1),e._v(" "),a("li",[e._v("Pitch rate control ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_PITCHRATE_P"}},[e._v("MC_PITCHRATE_P")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_PITCHRATE_I"}},[e._v("MC_PITCHRATE_I")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_PITCHRATE_D"}},[e._v("MC_PITCHRATE_D")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_PITCHRATE_K"}},[e._v("MC_PITCHRATE_K")]),e._v(")")],1),e._v(" "),a("li",[e._v("Yaw rate control ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_YAWRATE_P"}},[e._v("MC_YAWRATE_P")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_YAWRATE_I"}},[e._v("MC_YAWRATE_I")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_YAWRATE_D"}},[e._v("MC_YAWRATE_D")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_YAWRATE_K"}},[e._v("MC_YAWRATE_K")]),e._v(")")],1)]),e._v(" "),a("p",[e._v("The rate controller can be tuned in "),a("RouterLink",{attrs:{to:"/en/flight_modes/acro_mc.html"}},[e._v("Acro mode")]),e._v(" or "),a("RouterLink",{attrs:{to:"/en/flight_modes/manual_stabilized_mc.html"}},[e._v("Manual/Stabilized mode")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[a("em",[e._v("Acro mode")]),e._v(" is preferred, but is harder to fly. If you choose this mode, disable all stick expo:\n"),a("ul",[a("li",[a("code",[e._v("MC_ACRO_EXPO")]),e._v(" = 0, "),a("code",[e._v("MC_ACRO_EXPO_Y")]),e._v(" = 0, "),a("code",[e._v("MC_ACRO_SUPEXPO")]),e._v(" = 0,\n"),a("code",[e._v("MC_ACRO_SUPEXPOY")]),e._v(" = 0")]),e._v(" "),a("li",[a("code",[e._v("MC_ACRO_P_MAX")]),e._v(" = 200, "),a("code",[e._v("MC_ACRO_R_MAX")]),e._v(" = 200")]),e._v(" "),a("li",[a("code",[e._v("MC_ACRO_Y_MAX")]),e._v(" = 100")])])]),e._v(" "),a("li",[a("em",[e._v("Manual/Stabilized mode")]),e._v(" is simpler to fly, but it is also more difficult to see if the attitude or the rate controller needs more tuning.")])]),e._v(" "),a("p",[e._v("If the vehicle does not fly at all:")]),e._v(" "),a("ul",[a("li",[e._v("If there are strong oscillations when first trying to takeoff (to the point where it does not fly), decrease all "),a("strong",[e._v("P")]),e._v(" and "),a("strong",[e._v("D")]),e._v(" gains until it takes off.")]),e._v(" "),a("li",[e._v("If the reaction to RC movement is minimal, increase the "),a("strong",[e._v("P")]),e._v(" gains.")])]),e._v(" "),a("p",[e._v("The actual tuning is roughly the same in "),a("em",[e._v("Manual mode")]),e._v(" or "),a("em",[e._v("Acro mode")]),e._v(":\nYou iteratively tune the "),a("strong",[e._v("P")]),e._v(" and "),a("strong",[e._v("D")]),e._v(" gains for roll and pitch, and then the "),a("strong",[e._v("I")]),e._v(" gain.\nInitially you can use the same values for roll and pitch, and once you have good values,\nyou can fine-tune them by looking at roll and pitch response separately (if your vehicle is symmetric, this is not needed).\nFor yaw it is very similar, except that "),a("strong",[e._v("D")]),e._v(" can be left at 0.")]),e._v(" "),a("h5",{attrs:{id:"proportional-gain-p-k"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proportional-gain-p-k"}},[e._v("#")]),e._v(" Proportional Gain (P/K)")]),e._v(" "),a("p",[e._v("The proportional gain is used to minimize the tracking error (below we use "),a("strong",[e._v("P")]),e._v(" to refer to both "),a("strong",[e._v("P")]),e._v(" or "),a("strong",[e._v("K")]),e._v(").\nIt is responsible for a quick response and thus should be set as high as possible, but without introducing oscillations.")]),e._v(" "),a("ul",[a("li",[e._v("If the "),a("strong",[e._v("P")]),e._v(" gain is too high: you will see high-frequency oscillations.")]),e._v(" "),a("li",[e._v("If the "),a("strong",[e._v("P")]),e._v(" gain is too low:\n"),a("ul",[a("li",[e._v("the vehicle will react slowly to input changes.")]),e._v(" "),a("li",[e._v("In "),a("em",[e._v("Acro mode")]),e._v(" the vehicle will drift, and you will constantly need to correct to keep it level.")])])])]),e._v(" "),a("h5",{attrs:{id:"derivative-gain-d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#derivative-gain-d"}},[e._v("#")]),e._v(" Derivative Gain (D)")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("D")]),e._v(" (derivative) gain is used for rate damping.\nIt is required but should be set only as high as needed to avoid overshoots.")]),e._v(" "),a("ul",[a("li",[e._v("If the "),a("strong",[e._v("D")]),e._v(" gain is too high: the motors become twitchy (and maybe hot), because the "),a("strong",[e._v("D")]),e._v(" term amplifies noise.")]),e._v(" "),a("li",[e._v("If the "),a("strong",[e._v("D")]),e._v(" gain is too low: you see overshoots after a step-input.")])]),e._v(" "),a("p",[e._v("Typical values are:")]),e._v(" "),a("ul",[a("li",[e._v("standard form ("),a("strong",[e._v("P")]),e._v(' = 1): between 0.01 (4" racer) and 0.04 (500 size), for any value of '),a("strong",[e._v("K")])]),e._v(" "),a("li",[e._v("parallel form ("),a("strong",[e._v("K")]),e._v(" = 1): between 0.0004 and 0.005, depending on the value of "),a("strong",[e._v("P")])])]),e._v(" "),a("h5",{attrs:{id:"integral-gain-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integral-gain-i"}},[e._v("#")]),e._v(" Integral Gain (I)")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("I")]),e._v(" (integral) gain keeps a memory of the error. The "),a("strong",[e._v("I")]),e._v(" term increases when the desired rate is not reached over some time.\nIt is important (especially when flying "),a("em",[e._v("Acro mode")]),e._v("), but it should not be set too high.")]),e._v(" "),a("ul",[a("li",[e._v("If the I gain is too high: you will see slow oscillations.")]),e._v(" "),a("li",[e._v("If the I gain is too low: this is best tested in "),a("em",[e._v("Acro mode")]),e._v(", by tilting the vehicle to one side about 45 degrees, and keeping it like that.\nIt should keep the same angle.\nIf it drifts back, increase the "),a("strong",[e._v("I")]),e._v(" gain.\nA low "),a("strong",[e._v("I")]),e._v(" gain is also visible in a log, when there is an offset between the desired and the actual rate over a longer time.")])]),e._v(" "),a("p",[e._v("Typical values are:")]),e._v(" "),a("ul",[a("li",[e._v("standard form ("),a("strong",[e._v("P")]),e._v(' = 1): between 0.5 (VTOL plane), 1 (500 size) and 8 (4" racer), for any value of '),a("strong",[e._v("K")])]),e._v(" "),a("li",[e._v("parallel form ("),a("strong",[e._v("K")]),e._v(" = 1): between 0.3 and 0.5 if "),a("strong",[e._v("P")]),e._v(" is around 0.15\nThe pitch gain usually needs to be a bit higher than the roll gain.")])]),e._v(" "),a("h4",{attrs:{id:"testing-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-procedure"}},[e._v("#")]),e._v(" Testing Procedure")]),e._v(" "),a("p",[e._v("To test the current gains, provide a fast "),a("strong",[e._v("step-input")]),e._v(" when hovering and observe how the vehicle reacts.\nIt should immediately follow the command, and neither oscillate, nor overshoot (it feels 'locked-in').")]),e._v(" "),a("p",[e._v("You can create a step-input for example for roll, by quickly pushing the roll stick to one side, and then let it go back quickly (be aware that the stick will oscillate too if you just let go of it, because it is spring-loaded — a well-tuned vehicle will follow these oscillations).")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" A well-tuned vehicle in "),a("em",[e._v("Acro mode")]),e._v(" will not tilt randomly towards one side,\nbut keeps the attitude for tens of seconds even without any corrections.")])]),e._v(" "),a("h4",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[e._v("#")]),e._v(" Logs")]),e._v(" "),a("p",[e._v("Looking at a log helps to evaluate tracking performance as well.\nHere is an example for good roll and yaw rate tracking:")]),e._v(" "),a("p",[a("img",{attrs:{src:r(648),alt:"roll rate tracking"}}),e._v(" "),a("img",{attrs:{src:r(649),alt:"yaw rate tracking"}})]),e._v(" "),a("p",[e._v("And here is a good example for the roll rate tracking with several flips, which create an extreme step-input.\nYou can see that the vehicle overshoots only by a very small amount:\n"),a("img",{attrs:{src:r(650),alt:"roll rate tracking flips"}})]),e._v(" "),a("h3",{attrs:{id:"attitude-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attitude-controller"}},[e._v("#")]),e._v(" Attitude Controller")]),e._v(" "),a("p",[e._v("This controls the orientation and outputs desired body rates with the following tuning parameters:")]),e._v(" "),a("ul",[a("li",[e._v("Roll control ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_ROLL_P"}},[e._v("MC_ROLL_P")]),e._v(")")],1),e._v(" "),a("li",[e._v("Pitch control ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_PITCH_P"}},[e._v("MC_PITCH_P")])],1),e._v(" "),a("li",[e._v("Yaw control ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_YAW_P"}},[e._v("MC_YAW_P")]),e._v(")")],1)]),e._v(" "),a("p",[e._v("The attitude controller is much easier to tune.\nIn fact, most of the time the defaults do not need to be changed at all.")]),e._v(" "),a("p",[e._v("To tune the attitude controller, fly in "),a("em",[e._v("Manual/Stabilized mode")]),e._v(" and increase the "),a("strong",[e._v("P")]),e._v(" gains gradually.\nIf you start to see oscillations or overshoots, the gains are too high.")]),e._v(" "),a("p",[e._v("The following parameters can also be adjusted. These determine the maximum rotation rates around all three axes:")]),e._v(" "),a("ul",[a("li",[e._v("Maximum roll rate ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_ROLLRATE_MAX"}},[e._v("MC_ROLLRATE_MAX")]),e._v(")")],1),e._v(" "),a("li",[e._v("Maximum pitch rate ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_PITCHRATE_MAX"}},[e._v("MC_PITCHRATE_MAX")])],1),e._v(" "),a("li",[e._v("Maximum yaw rate ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_YAWRATE_MAX"}},[e._v("MC_YAWRATE_MAX")]),e._v(")")],1)]),e._v(" "),a("p",[a("span",{attrs:{id:"thrust_curve"}})]),e._v(" "),a("h3",{attrs:{id:"thrust-curve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thrust-curve"}},[e._v("#")]),e._v(" Thrust Curve")]),e._v(" "),a("p",[e._v("The tuning above optimises performance around the hover throttle.\nBut you may start to see oscillations when going towards full throttle.")]),e._v(" "),a("p",[e._v("To counteract that, adjust the "),a("strong",[e._v("thrust curve")]),e._v(" with the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#THR_MDL_FAC"}},[e._v("THR_MDL_FAC")]),e._v(" parameter.")],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" The rate controller might need to be re-tuned if you change this parameter.")])]),e._v(" "),a("p",[e._v("The mapping from motor control signals (e.g. PWM) to expected thrust is linear by default — setting "),a("code",[e._v("THR_MDL_FAC")]),e._v(" to 1 makes it quadratic.\nValues in between use a linear interpolation of the two. Typical values are between 0.3 and 0.5.")]),e._v(" "),a("p",[e._v("If you have a "),a("a",{attrs:{href:"https://www.rcbenchmark.com/pages/series-1580-thrust-stand-dynamometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("thrust stand"),a("OutboundLink")],1),e._v(" (or can otherwise "),a("em",[e._v("measure")]),e._v(" thrust and motor commands simultaneously), you can determine the relationship between the motor control signal and the motor's actual thrust, and fit a function to the data.\nThe motor command in PX4 called "),a("code",[e._v("actuator_output")]),e._v(" can be PWM, Dshot, UAVCAN commands for the respective ESCs in use.\n"),a("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/blob/master/assets/config/mc/ThrustCurve.ipynb",target:"_blank",rel:"noopener noreferrer"}},[e._v("This Notebook"),a("OutboundLink")],1),e._v(" shows one way for how the thrust model factor "),a("code",[e._v("THR_MDL_FAC")]),e._v(" may be calculated from previously measured thrust and PWM data.\nThe curves shown in this plot are parametrized by both α and k, and also show thrust and PWM in real units (kgf and μs).\nIn order to simplify the curve fit problem, you can normalize the data between 0 and 1 to find "),a("code",[e._v("k")]),e._v(" without having to estimate α (α = 1, when the data is normalized).")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/blob/master/assets/config/mc/ThrustCurve.ipynb",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(651),alt:"Thrust Curve Compensation"}}),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" The mapping between PWM and static thrust depends highly on the battery voltage.")])]),e._v(" "),a("p",[e._v("An alternative way of performing this experiment is to make a scatter plot of the normalized motor command and thrust values, and iteratively tune the thrust curve by experimenting with the "),a("code",[e._v("THR_MDL_FAC")]),e._v(" parameter.\nAn example of that graph is shown here:")]),e._v(" "),a("p",[a("img",{attrs:{src:r(652),alt:"Graph showing relative thrust and PWM scatter"}})]),e._v(" "),a("p",[e._v("If raw motor command and thrust data is collected throughout the full-scale range in the experiment, you can normalize the data using the equation:")]),e._v(" "),a("p",[a("em",[e._v("normalized_value = ( raw_value - min (raw_value) ) / ( max ( raw_value ) - min ( raw_value ) )")])]),e._v(" "),a("p",[e._v("After you have a scatter plot of the normalized values, you can try and make the curve match by plotting the equation")]),e._v(" "),a("p",[a("em",[e._v("rel_thrust = ( "),a("code",[e._v("THR_MDL_FAC")]),e._v(" ) * rel_signal^2 + ( 1 - "),a("code",[e._v("THR_MDL_FAC")]),e._v(" ) * rel_signal")])]),e._v(" "),a("p",[e._v("over a linear range of normalized motor command values between 0 and 1.\nNote that this is the equation that is used in the firmware to map thrust and motor command, as shown in the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#THR_MDL_FAC"}},[e._v("THR_MDL_FAC")]),e._v(" parameter reference.\nHere, "),a("em",[e._v("rel_thrust")]),e._v(" is the normalized thrust value between 0 and 1, and "),a("em",[e._v("rel_signal")]),e._v(" is the normalized motor command signal value between 0 and 1.")],1),e._v(" "),a("p",[e._v("In this example above, the curve seemed to fit best when "),a("code",[e._v("THR_MDL_FAC")]),e._v(" was set to 0.7.")]),e._v(" "),a("p",[e._v("If you don't have access to a thrust stand, you can also tune the modeling factor empirically.\nStart off with 0.3 and increase it by 0.1 at a time.\nIf it is too high, you will start to notice oscillations at lower throttle values.\nIf it is too low you'll notice oscillations at higher throttle values.")]),e._v(" "),a("p",[a("span",{attrs:{id:"airmode"}})]),e._v(" "),a("h3",{attrs:{id:"airmode-mixer-saturation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airmode-mixer-saturation"}},[e._v("#")]),e._v(" Airmode & Mixer Saturation")]),e._v(" "),a("p",[e._v("The rate controller outputs torque commands for all three axis (roll, pitch and yaw) and a scalar thrust value, which need to be converted into individual motor thrust commands.\nThis step is called mixing.")]),e._v(" "),a("p",[e._v("It can happen that one of the motor commands becomes negative, for example for a low thrust and large roll command (and similarly it can go above 100%).\nThis is a mixer saturation.\nIt is physically impossible for the vehicle to execute these commands (except for reversible motors).\nPX4 has two modes to resolve this:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Either by reducing the commanded torque for roll such that none of the motor commands is below zero (Airmode disabled).\nIn the extreme case where the commanded thrust is zero, it means that no attitude correction is possible anymore, which is why a minimum thrust is always required for this mode.")])]),e._v(" "),a("li",[a("p",[e._v("Or by increasing (boosting) the commanded thrust, such that none of the motor commands is negative (Airmode enabled).\nThis has the big advantage that the attitude/rates can be tracked correctly even at low or zero throttle.\nIt generally improves the flight performance.")]),e._v(" "),a("p",[e._v("However it increases the total thrust which can lead to situations where the vehicle continues to ascend even though the throttle is reduced to zero.\nFor a well-tuned, correctly functioning vehicle it is not the case, but for example it can happen when the vehicle strongly oscillates due to too high P tuning gains.")])])]),e._v(" "),a("p",[e._v("Both modes are shown below with a 2D illustration for two motors and a torque command for roll "),a("span",{staticStyle:{color:"#9673A6"}},[e._v("r")]),e._v(".\nOn the left motor "),a("span",{staticStyle:{color:"#9673A6"}},[e._v("r")]),e._v(" is added to the commanded thrust, while on the right motor it is subtracted from it.\nThe motor thrusts are in "),a("span",{staticStyle:{color:"#6A9153"}},[e._v("green")]),e._v(".\nWith Airmode enabled, the commanded thrust is increased by "),a("span",{staticStyle:{color:"#B85450"}},[e._v("b")]),e._v(".\nWhen it is disabled, "),a("span",{staticStyle:{color:"#9673A6"}},[e._v("r")]),e._v(" is reduced.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(653),alt:"Airmode"}})]),e._v(" "),a("p",[e._v("If mixing becomes saturated towards the upper bound the commanded thrust is reduced to ensure that no motor is commanded to deliver more than 100% thrust.\nThis behaviour is similar to the Airmode logic, and is applied whether Airmode is enabled or disabled.")]),e._v(" "),a("p",[e._v("Once your vehicle flies well you can enable Airmode via the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_AIRMODE"}},[e._v("MC_AIRMODE")]),e._v(" parameter.")],1)])}),[],!1,null,null,null);t.default=o.exports},645:function(e,t,r){e.exports=r.p+"assets/img/PID_algorithm_Mixed.23989b63.png"},646:function(e,t,r){e.exports=r.p+"assets/img/PID_algorithm_Parallel.58e2bc93.png"},647:function(e,t,r){e.exports=r.p+"assets/img/PID_algorithm_Standard.66c2b8e0.png"},648:function(e,t,r){e.exports=r.p+"assets/img/roll_rate_tracking.51318206.png"},649:function(e,t,r){e.exports=r.p+"assets/img/yaw_rate_tracking.53d8af15.png"},650:function(e,t,r){e.exports=r.p+"assets/img/roll_rate_tracking_flip.0c74efe5.png"},651:function(e,t,r){e.exports=r.p+"assets/img/thrust-curve-compensation.50b7ab15.svg"},652:function(e,t,r){e.exports=r.p+"assets/img/relative_thrust_and_pwm_scatter.cc1fc078.svg"},653:function(e,t,r){e.exports=r.p+"assets/img/MC_PID_tuning-Airmode.463322ff.svg"}}]);