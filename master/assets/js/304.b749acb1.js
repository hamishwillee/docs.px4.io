(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{1535:function(e,t,a){"use strict";a.r(t);var r=a(18),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"racer-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#racer-setup"}},[e._v("#")]),e._v(" Racer Setup")]),e._v(" "),r("p",[e._v("This page describes how to setup and configure a racer for optimal performance (in particular for "),r("RouterLink",{attrs:{to:"/en/flight_modes/acro_mc.html"}},[e._v("Acro mode")]),e._v(").")],1),e._v(" "),r("p",[e._v("Keep in mind that racers are fast vehicles, specifically designed to be overpowered!\nYou should already have some experience, or let someone with experience help you.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Many things described here can also be applied to improve the flight performance of other types of multicopters.")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("A racer usually omits some sensors (e.g. GPS).\nAs a result, fewer failsafe options are available.")])]),e._v(" "),r("h2",{attrs:{id:"build-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-options"}},[e._v("#")]),e._v(" Build Options")]),e._v(" "),r("p",[e._v("A racer usually omits some sensors.")]),e._v(" "),r("p",[e._v("The minimal configuration is to use only a gyro and accelerometer sensor.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("If the board has an internal magnetometer, it should not be used (small racers are particularly prone to strong electromagnetic interference).")])]),e._v(" "),r("p",[e._v("Racers typically do not have a GPS as it adds some weight and is prone to damage during crashes (a GPS + external magnetometer must be placed on a GPS mast away from high currents to avoid magnetic interference, which unfortunately means that it is easy to break).")]),e._v(" "),r("p",[e._v("There are however some benefits in adding GPS, particularly for beginners:")]),e._v(" "),r("ul",[r("li",[e._v("You can go into position hold and the vehicle will just stay in one place.\nThis is handy if you lose the orientation or need a brake.\nIt can also be used to land safely.")]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[e._v("Return mode")]),e._v(" can be used, either on a switch or as RC loss/low battery failsafe.")],1),e._v(" "),r("li",[e._v("You will have the last position when it crashes.")]),e._v(" "),r("li",[e._v("The log contains the flight track, which means you can review the flight (in 3D).\nThis can help to improve your acrobatic flight skills.")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("During aggressive acrobatic maneuvers the GPS can lose its position fix for a short time.\nIf you switch into position mode during that time, altitude mode will be used instead until the position becomes valid again.")])]),e._v(" "),r("h2",{attrs:{id:"hardware-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),r("p",[e._v("The following paragraphs describe a few important points when building the vehicle.\nIf you need complete build instructions, you can follow the\n"),r("RouterLink",{attrs:{to:"/en/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[e._v('QAV-R 5" KISS ESC Racer')]),e._v(" build log.")],1),e._v(" "),r("h3",{attrs:{id:"vibration-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vibration-setup"}},[e._v("#")]),e._v(" Vibration Setup")]),e._v(" "),r("p",[e._v("There are various mounting approaches to reduce vibrations.\nFor example, the flight controller can be mounted with vibration dampening foam, or using "),r("RouterLink",{attrs:{to:"/en/frames_multicopter/qav_r_5_kiss_esc_racer.html#mounting"}},[e._v("O-rings")]),e._v(".")],1),e._v(" "),r("p",[e._v("While there is no single best method, you will typically have fewer problems with vibrations if you use high-quality components (frame, motors, props) as for example used in the "),r("RouterLink",{attrs:{to:"/en/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[e._v('QAV-R 5" KISS ESC Racer')]),e._v(".")],1),e._v(" "),r("p",[e._v("Make sure to use "),r("strong",[e._v("balanced props")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"center-of-gravity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#center-of-gravity"}},[e._v("#")]),e._v(" Center of Gravity")]),e._v(" "),r("p",[e._v("Make sure that the center of gravity is as close as possible to the center of thrust.\nLeft-right balance is usually not a problem, but front-back balance may be.\nYou can move the battery until it is correct and mark it on the frame so you will always place it correctly.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("The integral term can account for an imbalanced setup, and a custom mixer can do that even better.\nHowever it is best to fix any imbalance as part of the vehicle setup.")])]),e._v(" "),r("h3",{attrs:{id:"motor-ordering"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motor-ordering"}},[e._v("#")]),e._v(" Motor Ordering")]),e._v(" "),r("p",[e._v("If you plan to use a 4-in-1 ESC, such as the "),r("a",{attrs:{href:"http://www.hobbywing.com/goods.php?id=588",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hobbywing XRotor Micro 40A 4in1"),r("OutboundLink")],1),e._v(", you will notice that it uses a motor ordering that is different from the one that PX4 uses.\nPX4 allows you to change the motor ordering in software via "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MOT_ORDERING"}},[e._v("MOT_ORDERING")]),e._v(" parameter.\nYou can select the Betaflight/Cleanflight motor ordering that is typically used on these 4-in-1 ESCs.")],1),e._v(" "),r("h2",{attrs:{id:"software-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software-setup"}},[e._v("#")]),e._v(" Software Setup")]),e._v(" "),r("p",[e._v("After having built the racer, you will need to configure the software.\nGo through the "),r("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Basic Configuration Guide")]),e._v(" and choose the "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter_quadrotor_x_generic_250_racer"}},[e._v("Generic 250 Racer")]),e._v(" airframe, which already sets some racer-specific parameters.")],1),e._v(" "),r("p",[e._v("These parameters are important:")]),e._v(" "),r("ul",[r("li",[e._v("Enable One-Shot (set "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_RATE"}},[e._v("PWM_RATE")]),e._v(" to 0) or DShot ("),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#DSHOT_CONFIG"}},[e._v("DSHOT_CONFIG")]),e._v(").")],1),e._v(" "),r("li",[e._v("Set the maximum roll-, pitch- and yaw rates for Manual/Stabilized mode as\ndesired: "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_ROLLRATE_MAX"}},[e._v("MC_ROLLRATE_MAX")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_PITCHRATE_MAX"}},[e._v("MC_PITCHRATE_MAX")]),e._v(" and "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_YAWRATE_MAX"}},[e._v("MC_YAWRATE_MAX")]),e._v(".\nThe maximum tilt angle is configured with "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_MAN_TILT_MAX"}},[e._v("MPC_MAN_TILT_MAX")]),e._v(".")],1),e._v(" "),r("li",[e._v("The minimum thrust "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_MANTHR_MIN"}},[e._v("MPC_MANTHR_MIN")]),e._v(" should be set to 0.")],1)]),e._v(" "),r("h3",{attrs:{id:"estimator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#estimator"}},[e._v("#")]),e._v(" Estimator")]),e._v(" "),r("p",[e._v("If you use a GPS you can skip this section and use the default estimator.\nOtherwise you should switch to the Q attitude estimator, which works without a magnetometer or barometer.")]),e._v(" "),r("p",[e._v("To select it, set "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[e._v("SYS_MC_EST_GROUP")]),e._v(" to 1, and change the following parameters:")],1),e._v(" "),r("ul",[r("li",[e._v("Set "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_HAS_MAG"}},[e._v("SYS_HAS_MAG")]),e._v(" to 0 if the system does not have a magnetometer.")],1),e._v(" "),r("li",[e._v("Set "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_HAS_BARO"}},[e._v("SYS_HAS_BARO")]),e._v(" to 0 if the system does not have a barometer.")],1),e._v(" "),r("li",[e._v("Configure the Q estimator: set "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#ATT_ACC_COMP"}},[e._v("ATT_ACC_COMP")]),e._v(" to 0, "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#ATT_W_ACC"}},[e._v("ATT_W_ACC")]),e._v(" to 0.4 and "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#ATT_W_GYRO_BIAS"}},[e._v("ATT_W_GYRO_BIAS")]),e._v(" to 0.\nYou can tune these later if you wish.")],1)]),e._v(" "),r("h3",{attrs:{id:"failsafe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#failsafe"}},[e._v("#")]),e._v(" Failsafe")]),e._v(" "),r("p",[e._v("Configure "),r("RouterLink",{attrs:{to:"/en/config/safety.html"}},[e._v("RC loss and low battery failsafe")]),e._v(".\nIf you do not use a GPS, set the failsafe to "),r("strong",[e._v("Lockdown")]),e._v(", which turns off the motors.\nTest RC loss on the bench without props attached by turning off the remote when the vehicle is armed.")],1),e._v(" "),r("p",[e._v("Make sure to assign a "),r("RouterLink",{attrs:{to:"/en/config/safety.html#kill_switch"}},[e._v("kill switch")]),e._v(" or an "),r("RouterLink",{attrs:{to:"/en/config/safety.html#arming_switch"}},[e._v("arming switch")]),e._v(".\nTest it and train to use it!")],1),e._v(" "),r("h3",{attrs:{id:"pid-tuning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pid-tuning"}},[e._v("#")]),e._v(" PID Tuning")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("Make sure to calibrate the ESCs before doing any tuning.")])]),e._v(" "),r("p",[e._v("At this point you should be ready for a first test flight.")]),e._v(" "),r("p",[e._v("If it goes well, do a first pass of "),r("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("PID tuning")]),e._v(" (ignore the thrust curve settings).\nThe vehicle needs to be "),r("strong",[e._v("undertuned")]),e._v(", meaning the "),r("strong",[e._v("P")]),e._v(" and "),r("strong",[e._v("D")]),e._v(" gains should be set too low - such that there are no oscillations from the controller that could be interpreted as noise (the default gains might be good enough).\nThis is important for the "),r("a",{attrs:{href:"#filters"}},[e._v("filter")]),e._v(" tuning.\nThere will be a second PID tuning round later.")],1),e._v(" "),r("p",[r("span",{attrs:{id:"control_latency"}})]),e._v(" "),r("h3",{attrs:{id:"control-latency"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#control-latency"}},[e._v("#")]),e._v(" Control Latency")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("control latency")]),e._v(" is the delay from a physical disturbance of the vehicle until the motors react to the change.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("It is "),r("em",[e._v("crucial")]),e._v(" to reduce the control latency as much as possible — a lower latency allows you to increase the rate "),r("strong",[e._v("P")]),e._v(" gains, which means better flight performance.\nEven one millisecond added to the latency makes a difference.")])]),e._v(" "),r("p",[e._v("These are the factors that affect the latency:")]),e._v(" "),r("ul",[r("li",[e._v("A soft airframe or soft vibration mounting increases latency (they act as a filter).")]),e._v(" "),r("li",[e._v("Low-pass filters in software and on the sensor chip trade off increased latency for improved noise filtering.")]),e._v(" "),r("li",[e._v("PX4 software internals: the sensor signals need to be read in the driver and then pass through the controller to the output driver.")]),e._v(" "),r("li",[e._v("The IO chip (MAIN pins) adds about 5.4 ms latency compared to using the AUX pins (this does not apply to a "),r("em",[e._v("Pixracer")]),e._v(" or "),r("em",[e._v("Omnibus F4")]),e._v(", but does apply to a Pixhawk).\nTo avoid the IO delay, disable "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_USE_IO"}},[e._v("SYS_USE_IO")]),e._v(" and attach the motors to the AUX pins instead.")],1),e._v(" "),r("li",[e._v("PWM output signal: enable One-Shot to reduce latency ("),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_RATE"}},[e._v("PWM_RATE")]),e._v("=0).")],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"filters"}})]),e._v(" "),r("h3",{attrs:{id:"filters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filters"}},[e._v("#")]),e._v(" Filters")]),e._v(" "),r("p",[e._v("As mentioned in the previous section, filters affect the control latency.")]),e._v(" "),r("p",[e._v("This is the filtering pipeline for the controllers in PX4:")]),e._v(" "),r("ul",[r("li",[e._v("On-chip DLPF for the gyro sensor.\nThe cutoff frequency is set to 98Hz and it is sampled at 1kHz.")]),e._v(" "),r("li",[e._v("Low-pass filter on the gyro sensor data.\nIt can be configured with the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_GYRO_CUTOFF"}},[e._v("IMU_GYRO_CUTOFF")]),e._v(" parameter.")],1),e._v(" "),r("li",[e._v("A separate low-pass filter on the D-term.\nThe D-term is most susceptible to noise while slightly increased latency does not negatively affect performance.\nFor this reason the D-term has a separately-configurable low-pass filter, "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_DGYRO_CUTOFF"}},[e._v("IMU_DGYRO_CUTOFF")]),e._v(".")],1),e._v(" "),r("li",[e._v("A slewrate filter on the motor outputs ("),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MOT_SLEW_MAX"}},[e._v("MOT_SLEW_MAX")]),e._v(").\nGenerally not used.")],1)]),e._v(" "),r("p",[e._v("To reduce the control latency, we want to increase the cutoff frequency for the low-pass filters.\nHowever this is a trade-off as it will also increase the noise of the signal, which is fed to the motors.\nNoise on the motors has the following consequences:")]),e._v(" "),r("ul",[r("li",[e._v("Motors and ESCs can get hot, to the point where they get damaged.")]),e._v(" "),r("li",[e._v("Reduced flight time because the motors continuously change their speed.")]),e._v(" "),r("li",[e._v("Visible random small twitches.")])]),e._v(" "),r("p",[e._v("The best filter settings depend on the vehicle.\nThe defaults are set conservatively — such that they work on lower-quality setups as well.")]),e._v(" "),r("h4",{attrs:{id:"filter-tuning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filter-tuning"}},[e._v("#")]),e._v(" Filter Tuning")]),e._v(" "),r("p",[e._v("First make sure to have the high-rate logging profile activated ("),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")]),e._v(" parameter).\n"),r("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[e._v("Flight Review")]),e._v(" will then show an FFT plot for the roll, pitch and yaw controls.")],1),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Do not try to fix a vehicle that suffers from high vibrations with filter tuning.\nInstead fix the vehicle hardware setup.")])]),e._v(" "),r("p",[e._v("Filter tuning is best done by reviewing flight logs.\nYou can do multiple flights right after each other with different parameters and then inspect all logs, but make sure to disarm in between so that separate log files are created.")]),e._v(" "),r("p",[e._v("The performed flight maneuver can simply be hovering in "),r("RouterLink",{attrs:{to:"/en/flight_modes/manual_stabilized_mc.html"}},[e._v("Manual/Stabilized mode")]),e._v(" with some rolling and pitching to all directions and some increased throttle periods.\nThe total duration does not need to be more than 30 seconds.\nIn order to better compare, the maneuver should be similar in all tests.")],1),e._v(" "),r("p",[e._v("First tune the gyro filter "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_GYRO_CUTOFF"}},[e._v("IMU_GYRO_CUTOFF")]),e._v(" by increasing it in steps of 10 Hz while using a low D-term filter value ("),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_DGYRO_CUTOFF"}},[e._v("IMU_DGYRO_CUTOFF")]),e._v(" = 30).\nUpload the logs to https://logs.px4.io and compare the "),r("em",[e._v("Actuator Controls FFT")]),e._v(" plot.\nSet the cutoff frequency to a value before the noise starts to increase noticeably (for frequencies around and above 60 Hz).\nThen tune the D-term filter ("),r("code",[e._v("IMU_DGYRO_CUTOFF")]),e._v(") in the same way.")],1),e._v(" "),r("p",[e._v("Below is an example for three different filter values (40Hz, 70Hz, 90Hz).\nAt 90 Hz the general noise level starts to increase (especially for roll), and thus a cutoff frequency of 70 Hz is a safe setting.\n"),r("img",{attrs:{src:a(651),alt:"IMU_DGYRO_CUTOFF=40"}}),e._v(" "),r("img",{attrs:{src:a(652),alt:"IMU_DGYRO_CUTOFF=70"}}),e._v(" "),r("img",{attrs:{src:a(653),alt:"IMU_DGYRO_CUTOFF=90"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("The plot cannot be compared between different vehicles, as the y axis scale can be different.\nOn the same vehicle it is consistent and independent of the flight duration though.")])]),e._v(" "),r("h3",{attrs:{id:"pid-tuning-second-round"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pid-tuning-second-round"}},[e._v("#")]),e._v(" PID Tuning (Second Round)")]),e._v(" "),r("p",[e._v("Now do a second round of PID tuning, this time as tight as possible, and also tune the thrust curve.")]),e._v(" "),r("h3",{attrs:{id:"airmode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#airmode"}},[e._v("#")]),e._v(" Airmode")]),e._v(" "),r("p",[e._v("After you have verified that the vehicle flies well at low and high throttle, you can enable "),r("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html#airmode"}},[e._v("airmode")]),e._v(" with the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_AIRMODE"}},[e._v("MC_AIRMODE")]),e._v(" parameter.\nThis feature makes sure that the vehicle is still controllable and tracks the rate at low throttle.")],1),e._v(" "),r("p",[e._v("Happy flipping 😃")])])}),[],!1,null,null,null);t.default=o.exports},651:function(e,t,a){e.exports=a.p+"assets/img/actuator_controls_fft_dgyrocutoff_40.40af7ca7.png"},652:function(e,t,a){e.exports=a.p+"assets/img/actuator_controls_fft_dgyrocutoff_70.a879efd6.png"},653:function(e,t,a){e.exports=a.p+"assets/img/actuator_controls_fft_dgyrocutoff_90.e21d7d49.png"}}]);