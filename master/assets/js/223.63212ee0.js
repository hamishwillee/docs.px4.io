(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1560:function(e,t,o){"use strict";o.r(t);var a=o(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mc-filter-tuning-control-latency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mc-filter-tuning-control-latency"}},[e._v("#")]),e._v(" MC Filter Tuning & Control Latency")]),e._v(" "),a("p",[e._v("Filters can be used to trade off "),a("a",{attrs:{href:"#control-latency"}},[e._v("control latency")]),e._v(", which affects flight performance, and noise filtering, which impacts both flight performance and motor health.")]),e._v(" "),a("p",[e._v("This topic provides an overview of control latency and PX4 filter tuning.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Before filter tuning you should do a first pass at "),a("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter_basic.html"}},[e._v("Basic MC PID tuning")]),e._v(".\nThe vehicle needs to be undertuned (the "),a("strong",[e._v("P")]),e._v(" and "),a("strong",[e._v("D")]),e._v(" gains should be set too low), such that there are no oscillations from the controller that could be interpreted as noise (the default gains might be good enough).")],1)]),e._v(" "),a("h2",{attrs:{id:"control-latency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#control-latency"}},[e._v("#")]),e._v(" Control Latency")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("control latency")]),e._v(" is the delay from a physical disturbance of the vehicle until the motors react to the change.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Lowering latency allows you to increase the rate "),a("strong",[e._v("P")]),e._v(" gains, which results in better flight performance.\nEven one millisecond difference in the latency can have a significant impact.")])]),e._v(" "),a("p",[e._v("The following factors affect control latency:")]),e._v(" "),a("ul",[a("li",[e._v("A soft airframe or soft vibration mounting increases latency (they act as a filter).")]),e._v(" "),a("li",[e._v("Low-pass filters in software and on the sensor chip trade off increased latency for improved noise filtering.")]),e._v(" "),a("li",[e._v("PX4 software internals: the sensor signals need to be read in the driver and then pass through the controller to the output driver.")]),e._v(" "),a("li",[e._v("The maximum gyro publication rate (configured with "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_GYRO_RATEMAX"}},[e._v("IMU_GYRO_RATEMAX")]),e._v(").\nA higher rate reduces latency but is computationally intensive/can starve other processes.\n4 kHz or higher is only recommended for controllers with STM32H7 processor or newer (2 kHz value is near the limit for less capable processors).")],1),e._v(" "),a("li",[e._v("The IO chip (MAIN pins) adds about 5.4 ms latency compared to using the AUX pins (this does not apply to a "),a("em",[e._v("Pixracer")]),e._v(" or "),a("em",[e._v("Omnibus F4")]),e._v(", but does apply to a Pixhawk).\nTo avoid the IO delay, disable "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_USE_IO"}},[e._v("SYS_USE_IO")]),e._v(" and attach the motors to the AUX pins instead.")],1),e._v(" "),a("li",[e._v("PWM output signal: enable "),a("RouterLink",{attrs:{to:"/en/peripherals/dshot.html"}},[e._v("Dshot")]),e._v(" or One-Shot ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_AUX_RATE"}},[e._v("PWM_AUX_RATE=0")]),e._v(" or "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MAIN_RATE"}},[e._v("PWM_MAIN_RATE=0")]),e._v(") to reduce latency.")],1)]),e._v(" "),a("p",[e._v("Below we look at the impact of the low pass filters.")]),e._v(" "),a("h2",{attrs:{id:"filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filters"}},[e._v("#")]),e._v(" Filters")]),e._v(" "),a("p",[e._v("This is the filtering pipeline for the controllers in PX4:")]),e._v(" "),a("ul",[a("li",[e._v("On-chip DLPF for the gyro sensor.\nThis is disabled on all chips where it can be disabled (if not, the cutoff frequency is set to the highest level of the chip).")]),e._v(" "),a("li",[e._v("A notch filter on the gyro sensor data that is used to filter out narrow band noise, for example harmonics at the rotor blade pass frequency.\nThis filter can be configured using "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_GYRO_NF_BW"}},[e._v("IMU_GYRO_NF_BW")]),e._v(" and "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_GYRO_NF_FREQ"}},[e._v("IMU_GYRO_NF_FREQ")]),e._v(".")],1),e._v(" "),a("li",[e._v("Low-pass filter on the gyro sensor data.\nIt can be configured with the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_GYRO_CUTOFF"}},[e._v("IMU_GYRO_CUTOFF")]),e._v(" parameter."),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Sampling and filtering is always performed at the full raw sensor rate (commonly 8kHz, depending on the IMU).")])])],1),e._v(" "),a("li",[e._v("A separate low-pass filter on the D-term.\nThe D-term is most susceptible to noise while slightly increased latency does not negatively affect performance.\nFor this reason the D-term has a separately-configurable low-pass filter, "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_DGYRO_CUTOFF"}},[e._v("IMU_DGYRO_CUTOFF")]),e._v(".")],1),e._v(" "),a("li",[e._v("A slewrate filter on the motor outputs ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MOT_SLEW_MAX"}},[e._v("MOT_SLEW_MAX")]),e._v(").\nGenerally not used.")],1)]),e._v(" "),a("p",[e._v("To reduce the control latency, we want to increase the cutoff frequency for the low-pass filters.\nThe effect on latency of increasing "),a("code",[e._v("IMU_GYRO_CUTOFF")]),e._v(" is approximated below.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Cuttoff (Hz)")]),e._v(" "),a("th",[e._v("Delay approx. (ms)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("30")]),e._v(" "),a("td",[e._v("8")])]),e._v(" "),a("tr",[a("td",[e._v("60")]),e._v(" "),a("td",[e._v("3.8")])]),e._v(" "),a("tr",[a("td",[e._v("120")]),e._v(" "),a("td",[e._v("1.9")])])])]),e._v(" "),a("p",[e._v("However this is a trade-off as increasing "),a("code",[e._v("IMU_GYRO_CUTOFF")]),e._v(" will also increase the noise of the signal that is fed to the motors.\nNoise on the motors has the following consequences:")]),e._v(" "),a("ul",[a("li",[e._v("Motors and ESCs can get hot, to the point where they get damaged.")]),e._v(" "),a("li",[e._v("Reduced flight time because the motors continuously change their speed.")]),e._v(" "),a("li",[e._v("Visible random small twitches.")])]),e._v(" "),a("p",[e._v("Setups that have a significant lower-frequency noise spike (e.g. due to harmonics at the rotor blade pass frequency) can benefit from using the notch filter to clean the signal before it is passed to the low pass filter (these harmonics have a similar detrimental impact on motors as other sources of noise).\nWithout the notch filter you'd have to set the low pass filter cuttoff much lower (increasing the latency) in order to avoid passing this noise to the motors.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Only one notch filter is provided. Airframes with more than one low frequency noise spike typically clean the first spike with the notch filter, and subsequent spikes using the low pass filter.")])]),e._v(" "),a("p",[e._v("The best filter settings depend on the vehicle.\nThe defaults are set conservatively — such that they work on lower-quality setups as well.")]),e._v(" "),a("h2",{attrs:{id:"filter-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter-tuning"}},[e._v("#")]),e._v(" Filter Tuning")]),e._v(" "),a("p",[e._v("First make sure to have the high-rate logging profile activated ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")]),e._v(" parameter).\n"),a("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[e._v("Flight Review")]),e._v(" will then show an FFT plot for the roll, pitch and yaw controls.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("ul",[a("li",[e._v("Do not try to fix a vehicle that suffers from high vibrations with filter tuning!\nInstead fix the vehicle hardware setup.")]),e._v(" "),a("li",[e._v("Confirm that PID gains, in particular D, are not set too high as this can show up as vibrations.")])])]),e._v(" "),a("p",[e._v("Filter tuning is best done by reviewing flight logs.\nYou can do multiple flights right after each other with different parameters and then inspect all logs, but make sure to disarm in between so that separate log files are created.")]),e._v(" "),a("p",[e._v("The performed flight maneuver can simply be hovering in "),a("RouterLink",{attrs:{to:"/en/flight_modes/manual_stabilized_mc.html"}},[e._v("Manual/Stabilized mode")]),e._v(" with some rolling and pitching to all directions and some increased throttle periods.\nThe total duration does not need to be more than 30 seconds.\nIn order to better compare, the maneuver should be similar in all tests.")],1),e._v(" "),a("p",[e._v("First tune the gyro filter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_GYRO_CUTOFF"}},[e._v("IMU_GYRO_CUTOFF")]),e._v(" by increasing it in steps of 10 Hz while using a low D-term filter value ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_DGYRO_CUTOFF"}},[e._v("IMU_DGYRO_CUTOFF")]),e._v(" = 30).\nUpload the logs to "),a("a",{attrs:{href:"https://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),a("OutboundLink")],1),e._v(" and compare the "),a("em",[e._v("Actuator Controls FFT")]),e._v(" plot.\nSet the cutoff frequency to a value before the noise starts to increase noticeably (for frequencies around and above 60 Hz).")],1),e._v(" "),a("p",[e._v("Then tune the D-term filter ("),a("code",[e._v("IMU_DGYRO_CUTOFF")]),e._v(") in the same way.\nNote that there can be negative impacts on preformance if "),a("code",[e._v("IMU_GYRO_CUTOFF")]),e._v(" and "),a("code",[e._v("IMU_DGYRO_CUTOFF")]),e._v(" are set too far apart (the differences have to be significant though - e.g. D=15, gyro=80).")]),e._v(" "),a("p",[e._v("Below is an example for three different "),a("code",[e._v("IMU_DGYRO_CUTOFF")]),e._v(" filter values (40Hz, 70Hz, 90Hz).\nAt 90 Hz the general noise level starts to increase (especially for roll), and thus a cutoff frequency of 70 Hz is a safe setting.\n"),a("img",{attrs:{src:o(654),alt:"IMU_DGYRO_CUTOFF=40"}}),e._v(" "),a("img",{attrs:{src:o(655),alt:"IMU_DGYRO_CUTOFF=70"}}),e._v(" "),a("img",{attrs:{src:o(656),alt:"IMU_DGYRO_CUTOFF=90"}})]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The plot cannot be compared between different vehicles, as the y axis scale can be different.\nOn the same vehicle it is consistent and independent of the flight duration.")])]),e._v(" "),a("p",[e._v("If the flight plots shows significant low frequency spikes, like the one shown in the diagram below, you can remove it using a notch filter.\nIn this case you might use the settings: "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_GYRO_NF_FREQ"}},[e._v("IMU_GYRO_NF_FREQ=32")]),e._v(" and "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_GYRO_NF_BW"}},[e._v("IMU_GYRO_NF_BW=5")]),e._v(" (note, this spike is narrower than usual).\nThe low pass filters and the notch filter can be tuned independently (i.e. you don't need to set the notch filter before collecting the data for tuning the low pass filter).")],1),e._v(" "),a("p",[a("img",{attrs:{src:o(657),alt:"IMU_GYRO_NF_FREQ=32 IMU_GYRO_NF_BW=5"}})]),e._v(" "),a("h2",{attrs:{id:"additional-tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-tips"}},[e._v("#")]),e._v(" Additional Tips")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Acceptable latency depends on vehicle size and expectations.\nFPV racers typically tune for the absolute minimal latency (as a ballpark "),a("code",[e._v("IMU_GYRO_CUTOFF")]),e._v(" around 120, "),a("code",[e._v("IMU_DGYRO_CUTOFF")]),e._v(" of 50 to 80).\nFor bigger vehicles latency is less critical and "),a("code",[e._v("IMU_GYRO_CUTOFF")]),e._v(" of around 80 might be acceptable.")])]),e._v(" "),a("li",[a("p",[e._v("You can start tuning at higher "),a("code",[e._v("IMU_GYRO_CUTOFF")]),e._v(" values (e.g. 100Hz), which might be desirable because the default tuning of "),a("code",[e._v("IMU_GYRO_CUTOFF")]),e._v(" is set very low (30Hz).\nThe only caveat is that you must be aware of the risks:")]),e._v(" "),a("ul",[a("li",[e._v("Don't fly for more than 20-30 seconds")]),e._v(" "),a("li",[e._v("Check that the motors are not getting to hot")]),e._v(" "),a("li",[e._v("Listen for odd sounds and symptoms of excessive noise, as discussed above.")])])])])])}),[],!1,null,null,null);t.default=n.exports},654:function(e,t,o){e.exports=o.p+"assets/img/actuator_controls_fft_dgyrocutoff_40.40af7ca7.png"},655:function(e,t,o){e.exports=o.p+"assets/img/actuator_controls_fft_dgyrocutoff_70.a879efd6.png"},656:function(e,t,o){e.exports=o.p+"assets/img/actuator_controls_fft_dgyrocutoff_90.e21d7d49.png"},657:function(e,t,o){e.exports=o.p+"assets/img/actuator_controls_fft_gyro_notch_32.669c74bb.png"}}]);