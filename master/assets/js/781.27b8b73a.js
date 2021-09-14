(window.webpackJsonp=window.webpackJsonp||[]).push([[781],{1566:function(t,e,a){"use strict";a.r(e);var r=a(19),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"racer-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#racer-setup"}},[t._v("#")]),t._v(" Racer Setup")]),t._v(" "),a("p",[t._v("This page describes how to setup and configure a racer for optimal performance (in particular for "),a("RouterLink",{attrs:{to:"/en/flight_modes/acro_mc.html"}},[t._v("Acro mode")]),t._v(").")],1),t._v(" "),a("p",[t._v("Keep in mind that racers are fast vehicles, specifically designed to be overpowered!\nYou should already have some experience, or let someone with experience help you.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Many things described here can also be applied to improve the flight performance of other types of multicopters.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("A racer usually omits some sensors (e.g. GPS).\nAs a result, fewer failsafe options are available.")])]),t._v(" "),a("h2",{attrs:{id:"build-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-options"}},[t._v("#")]),t._v(" Build Options")]),t._v(" "),a("p",[t._v("A racer usually omits some sensors.")]),t._v(" "),a("p",[t._v("The minimal configuration is to use only a gyro and accelerometer sensor.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If the board has an internal magnetometer, it should not be used (small racers are particularly prone to strong electromagnetic interference).")])]),t._v(" "),a("p",[t._v("Racers typically do not have a GPS as it adds some weight and is prone to damage during crashes (a GPS + external magnetometer must be placed on a GPS mast away from high currents to avoid magnetic interference, which unfortunately means that it is easy to break).")]),t._v(" "),a("p",[t._v("There are however some benefits in adding GPS, particularly for beginners:")]),t._v(" "),a("ul",[a("li",[t._v("You can go into position hold and the vehicle will just stay in one place.\nThis is handy if you lose the orientation or need a brake.\nIt can also be used to land safely.")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[t._v("Return mode")]),t._v(" can be used, either on a switch or as RC loss/low battery failsafe.")],1),t._v(" "),a("li",[t._v("You will have the last position when it crashes.")]),t._v(" "),a("li",[t._v("The log contains the flight track, which means you can review the flight (in 3D).\nThis can help to improve your acrobatic flight skills.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("During aggressive acrobatic maneuvers the GPS can lose its position fix for a short time.\nIf you switch into "),a("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("position mode")]),t._v(" during that time, "),a("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[t._v("altitude mode")]),t._v(" will be used instead until the position becomes valid again.")],1)]),t._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),a("p",[t._v("The following paragraphs describe a few important points when building the vehicle.\nIf you need complete build instructions, you can follow the\n"),a("RouterLink",{attrs:{to:"/en/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[t._v('QAV-R 5" KISS ESC Racer')]),t._v(" build log.")],1),t._v(" "),a("h3",{attrs:{id:"vibration-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vibration-setup"}},[t._v("#")]),t._v(" Vibration Setup")]),t._v(" "),a("p",[t._v("There are various mounting approaches to reduce vibrations.\nFor example, the flight controller can be mounted with vibration dampening foam, or using "),a("RouterLink",{attrs:{to:"/en/frames_multicopter/qav_r_5_kiss_esc_racer.html#mounting"}},[t._v("O-rings")]),t._v(".")],1),t._v(" "),a("p",[t._v("While there is no single best method, you will typically have fewer problems with vibrations if you use high-quality components (frame, motors, props) as for example used in the "),a("RouterLink",{attrs:{to:"/en/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[t._v('QAV-R 5" KISS ESC Racer')]),t._v(".")],1),t._v(" "),a("p",[t._v("Make sure to use "),a("strong",[t._v("balanced props")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"center-of-gravity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#center-of-gravity"}},[t._v("#")]),t._v(" Center of Gravity")]),t._v(" "),a("p",[t._v("Make sure that the center of gravity is as close as possible to the center of thrust.\nLeft-right balance is usually not a problem, but front-back balance may be.\nYou can move the battery until it is correct and mark it on the frame so you will always place it correctly.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The integral term can account for an imbalanced setup, and a custom mixer can do that even better.\nHowever it is best to fix any imbalance as part of the vehicle setup.")])]),t._v(" "),a("h3",{attrs:{id:"motor-ordering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motor-ordering"}},[t._v("#")]),t._v(" Motor Ordering")]),t._v(" "),a("p",[t._v("If you plan to use a 4-in-1 ESC, such as the "),a("a",{attrs:{href:"http://www.hobbywing.com/goods.php?id=588",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbywing XRotor Micro 40A 4in1"),a("OutboundLink")],1),t._v(", you will notice that it uses a motor ordering that is different from the one that PX4 uses.\nPX4 allows you to change the motor ordering in software via "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MOT_ORDERING"}},[t._v("MOT_ORDERING")]),t._v(" parameter.\nYou can select the Betaflight/Cleanflight motor ordering that is typically used on these 4-in-1 ESCs.")],1),t._v(" "),a("h2",{attrs:{id:"software-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-setup"}},[t._v("#")]),t._v(" Software Setup")]),t._v(" "),a("p",[t._v("After having built the racer, you will need to configure the software.")]),t._v(" "),a("p",[t._v("Go through the "),a("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration Guide")]),t._v(".\nIn particular, set the "),a("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("Airframe")]),t._v(" that most closely matches your frame (typically you will choose the "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter_quadrotor_x_generic_250_racer"}},[t._v("Generic 250 Racer")]),t._v(" airframe, which sets some racer-specific parameters by default).")],1),t._v(" "),a("p",[t._v("These parameters are important:")]),t._v(" "),a("ul",[a("li",[t._v("Enable One-Shot (set "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MAIN_RATE"}},[t._v("PWM_MAIN_RATE")]),t._v(" to 0) or DShot ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#DSHOT_CONFIG"}},[t._v("DSHOT_CONFIG")]),t._v(").")],1),t._v(" "),a("li",[t._v("Set the maximum roll-, pitch- and yaw rates for Manual/Stabilized mode as\ndesired: "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_ROLLRATE_MAX"}},[t._v("MC_ROLLRATE_MAX")]),t._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_PITCHRATE_MAX"}},[t._v("MC_PITCHRATE_MAX")]),t._v(" and "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_YAWRATE_MAX"}},[t._v("MC_YAWRATE_MAX")]),t._v(".\nThe maximum tilt angle is configured with "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_MAN_TILT_MAX"}},[t._v("MPC_MAN_TILT_MAX")]),t._v(".")],1),t._v(" "),a("li",[t._v("The minimum thrust "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_MANTHR_MIN"}},[t._v("MPC_MANTHR_MIN")]),t._v(" should be set to 0.")],1)]),t._v(" "),a("h3",{attrs:{id:"estimator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimator"}},[t._v("#")]),t._v(" Estimator")]),t._v(" "),a("p",[t._v("If you use a GPS you can skip this section and use the default estimator.\nOtherwise you should switch to the Q attitude estimator, which works without a magnetometer or barometer.")]),t._v(" "),a("p",[t._v("To select it, set "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" to 1, and change the following parameters:")],1),t._v(" "),a("ul",[a("li",[t._v("Set "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_HAS_MAG"}},[t._v("SYS_HAS_MAG")]),t._v(" to 0 if the system does not have a magnetometer.")],1),t._v(" "),a("li",[t._v("Set "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_HAS_BARO"}},[t._v("SYS_HAS_BARO")]),t._v(" to 0 if the system does not have a barometer.")],1),t._v(" "),a("li",[t._v("Configure the Q estimator: set "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#ATT_ACC_COMP"}},[t._v("ATT_ACC_COMP")]),t._v(" to 0, "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#ATT_W_ACC"}},[t._v("ATT_W_ACC")]),t._v(" to 0.4 and "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#ATT_W_GYRO_BIAS"}},[t._v("ATT_W_GYRO_BIAS")]),t._v(" to 0.\nYou can tune these later if you wish.")],1)]),t._v(" "),a("h3",{attrs:{id:"failsafe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failsafe"}},[t._v("#")]),t._v(" Failsafe")]),t._v(" "),a("p",[t._v("Configure "),a("RouterLink",{attrs:{to:"/en/config/safety.html"}},[t._v("RC loss and low battery failsafe")]),t._v(".\nIf you do not use a GPS, set the failsafe to "),a("strong",[t._v("Lockdown")]),t._v(", which turns off the motors.\nTest RC loss on the bench without props attached by turning off the remote when the vehicle is armed.")],1),t._v(" "),a("p",[t._v("Make sure to assign a "),a("RouterLink",{attrs:{to:"/en/config/safety.html#kill_switch"}},[t._v("kill switch")]),t._v(" or an "),a("RouterLink",{attrs:{to:"/en/config/safety.html#arming_switch"}},[t._v("arming switch")]),t._v(".\nTest it and train to use it!")],1),t._v(" "),a("h3",{attrs:{id:"pid-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pid-tuning"}},[t._v("#")]),t._v(" PID Tuning")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Make sure to calibrate the ESCs before doing any tuning.")])]),t._v(" "),a("p",[t._v("At this point you should be ready for a first test flight.")]),t._v(" "),a("p",[t._v("Assuming the vehicle is able to fly using the default settings, we then do a first pass of "),a("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter_basic.html"}},[t._v("Basic MC PID tuning")]),t._v(".\nThe vehicle needs to be "),a("strong",[t._v("undertuned")]),t._v(" (the "),a("strong",[t._v("P")]),t._v(" and "),a("strong",[t._v("D")]),t._v(" gains should be set too low), such that there are no oscillations from the controller that could be interpreted as noise (the default gains might be good enough).\nThis is important for the "),a("a",{attrs:{href:"#filter-tuning"}},[t._v("filter tuning")]),t._v(" (there will be a second PID tuning round later).")],1),t._v(" "),a("h3",{attrs:{id:"control-latency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#control-latency"}},[t._v("#")]),t._v(" Control Latency")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("control latency")]),t._v(" is the delay from a physical disturbance of the vehicle until the motors react to the change.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("It is "),a("em",[t._v("crucial")]),t._v(" to reduce the control latency as much as possible!\nA lower latency allows you to increase the rate "),a("strong",[t._v("P")]),t._v(" gains, which means better flight performance.\nEven one millisecond added to the latency makes a difference.")])]),t._v(" "),a("p",[t._v("These are the factors that affect the latency:")]),t._v(" "),a("ul",[a("li",[t._v("A soft airframe or soft vibration mounting increases latency (they act as a filter).")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/config_mc/filter_tuning.html"}},[t._v("Low-pass filters")]),t._v(" in software and on the sensor chip trade off increased latency for improved noise filtering.")],1),t._v(" "),a("li",[t._v("PX4 software internals: the sensor signals need to be read in the driver and then pass through the controller to the output driver.")]),t._v(" "),a("li",[t._v("The IO chip (MAIN pins) adds about 5.4 ms latency compared to using the AUX pins (this does not apply to a "),a("em",[t._v("Pixracer")]),t._v(" or "),a("em",[t._v("Omnibus F4")]),t._v(", but does apply to a Pixhawk).\nTo avoid the IO delay, disable "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_USE_IO"}},[t._v("SYS_USE_IO")]),t._v(" and attach the motors to the AUX pins instead.")],1),t._v(" "),a("li",[t._v("PWM output signal: enable One-Shot to reduce latency ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MAIN_RATE"}},[t._v("PWM_MAIN_RATE")]),t._v("=0).")],1)]),t._v(" "),a("h3",{attrs:{id:"filter-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter-tuning"}},[t._v("#")]),t._v(" Filter Tuning")]),t._v(" "),a("p",[t._v("Filters trade off control latency and noise filtering, both of which impact performance.\nFor information see: "),a("RouterLink",{attrs:{to:"/en/config_mc/filter_tuning.html"}},[t._v("Filter/Control Latency Tuning")])],1),t._v(" "),a("h3",{attrs:{id:"pid-tuning-second-round"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pid-tuning-second-round"}},[t._v("#")]),t._v(" PID Tuning (Second Round)")]),t._v(" "),a("p",[t._v("Now do a second round of PID tuning, this time as tight as possible, and also tuning the thrust curve.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can use the approach described in "),a("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter_basic.html"}},[t._v("Basic MC PID tuning")]),t._v(" to tune the frame, but you will need to use the "),a("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[t._v("Advanced Multicopter PID Tuning Guide (Advanced/Detailed)")]),t._v(" to understand how to tune the thrust curve.")],1),t._v(" "),a("h3",{attrs:{id:"airmode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airmode"}},[t._v("#")]),t._v(" Airmode")]),t._v(" "),a("p",[t._v("After you have verified that the vehicle flies well at low and high throttle, you can enable "),a("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html#airmode"}},[t._v("airmode")]),t._v(" with the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_AIRMODE"}},[t._v("MC_AIRMODE")]),t._v(" parameter.\nThis feature makes sure that the vehicle is still controllable and tracks the rate at low throttle.")],1),t._v(" "),a("p",[t._v("Happy flipping 😃")])])])}),[],!1,null,null,null);e.default=o.exports}}]);