(window.webpackJsonp=window.webpackJsonp||[]).push([[1028],{2078:function(t,e,a){"use strict";a.r(e);var o=a(19),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"log-analysis-using-flight-review"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#log-analysis-using-flight-review"}},[t._v("#")]),t._v(" Log Analysis using Flight Review")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),o("OutboundLink")],1),t._v(" plots for a flight can be used to analyze general vehicle condition.")]),t._v(" "),o("p",[t._v("The plots are meant to be self-explanatory, but it takes some experience to know what ranges are acceptable and what a plot should look like.\nThis page explains how to interpret the plots and identify common problems.")]),t._v(" "),o("h2",{attrs:{id:"general-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#general-usage"}},[t._v("#")]),t._v(" General Usage")]),t._v(" "),o("p",[t._v("Features that are common to many plots:")]),t._v(" "),o("ul",[o("li",[t._v("Plot background color is used to indicate flight mode during recording (where graphs depend on mode):\n"),o("img",{attrs:{src:a(1612),alt:"Flight Modes"}}),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Flight mode:")]),t._v(" Background colour on the body of the plot indicates flight mode.\nHovering with the mouse over a plot shows the flight mode labels.")]),t._v(" "),o("li",[o("strong",[t._v("VTOL flight mode:")]),t._v(" VTOL vehicles additionally show the VTOL mode as background colour in the bottom part of the plot (blue for multicopter, yellow for fixed wing, and red for transition).")])])]),t._v(" "),o("li",[t._v("Mouse scrolling on a particular plot axis zooms that axis (horizontally or vertically).")]),t._v(" "),o("li",[t._v("Mouse scrolling inside the plot zooms both axes.")])]),t._v(" "),o("p",[o("span",{attrs:{id:"tracking"}})]),t._v(" "),o("h2",{attrs:{id:"pid-tracking-performance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pid-tracking-performance"}},[t._v("#")]),t._v(" PID Tracking Performance")]),t._v(" "),o("p",[t._v("Depending on the flight mode, the vehicle controllers may attempt to track position, velocity, altitude or rate setpoints (the tracked setpoints depend on the mode, e.g.: in Stabilized mode there is no velocity setpoint).")]),t._v(" "),o("p",[t._v("The "),o("strong",[t._v("Estimated")]),t._v(" line (red) should closely match with the "),o("strong",[t._v("Setpoint")]),t._v(" (green).\nIf they do not, in most cases the PID gains of that controller need to be tuned.")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(" contains example plots and information about analysing tracking performance.")],1),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("For the rate controller in particular, it is useful to enable the high-rate logging profile ("),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[t._v("SDLOG_PROFILE")]),t._v(") to get more details when zooming in.")],1)]),t._v(" "),o("h2",{attrs:{id:"vibration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vibration"}},[t._v("#")]),t._v(" Vibration")]),t._v(" "),o("p",[t._v("Vibration is one of the most common problems for multirotor vehicles.\nHigh vibration levels can lead to:")]),t._v(" "),o("ul",[o("li",[t._v("less efficient flight and reduced flight time")]),t._v(" "),o("li",[t._v("the motors can heat up")]),t._v(" "),o("li",[t._v("increased material wearout")]),t._v(" "),o("li",[t._v("inability to tune the vehicle tightly, resulting in degraded flight performance.")]),t._v(" "),o("li",[t._v("sensor clipping")]),t._v(" "),o("li",[t._v("position estimation failures, potentially resulting in fly-aways.")])]),t._v(" "),o("p",[t._v("It is therefore important to keep an eye on the vibration levels and improve the setup if needed.")]),t._v(" "),o("p",[t._v("There is a point where vibration levels are clearly too high, and generally lower vibration levels are better.\nHowever there is a broad range between 'everything is ok' and 'the levels are too high'.\nThis range depends on a number of factors, including vehicle size - as larger vehicles have higher inertia, allowing for more software filtering (at the same time the vibrations on larger vehicles are of lower frequency).")]),t._v(" "),o("p",[t._v("The following paragraphs and sections provide information about what plots to use for checking vibration levels, and how to analyse them.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("It is worth looking at multiple charts when analyzing vibration (different charts can better highlight some issues).")])]),t._v(" "),o("h3",{attrs:{id:"actuator-controls-fft"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#actuator-controls-fft"}},[t._v("#")]),t._v(" Actuator Controls FFT")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("You need to enable the high-rate logging profile ("),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[t._v("SDLOG_PROFILE")]),t._v(") to see this plot.")],1)]),t._v(" "),o("p",[t._v("This graph shows a frequency plot for the roll, pitch and yaw axis based on the actuator controls signal (the PID output from the rate controller).\nIt helps to identify frequency peaks and configuring the software filters.\nThere should only be a single peak at the lowest end (below around 20 Hz), the rest should be low and flat.")]),t._v(" "),o("p",[t._v("Note that the y-axis scaling is different for different vehicles, but logs from the same vehicle can be directly compared to each other.")]),t._v(" "),o("h4",{attrs:{id:"examples-good-vibration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples-good-vibration"}},[t._v("#")]),t._v(" Examples: Good Vibration")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[t._v('QAV-R 5" Racer')]),t._v(" frame (excellent vibration).")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(446),alt:"Low vibration QAV-R 5 Racer - FFT plot"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The excellent vibration characteristics of the above frame mean that we can considerably increase the cutoff frequency of the "),o("RouterLink",{attrs:{to:"/en/config_mc/filter_tuning.html"}},[t._v("software filters")]),t._v(" (reducing control latency).")],1)]),t._v(" "),o("p",[t._v("DJI F450 frame (good vibration).")]),t._v(" "),o("p",[o("img",{attrs:{src:a(447),alt:"Low vibration DJI F450 - FFT plot"}})]),t._v(" "),o("p",[t._v("S500 frame:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(448),alt:"Low vibration S500 actuator controls - FFT plot"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("While the plot above looks good, the "),o("a",{attrs:{href:"#raw_acc_s500"}},[t._v("Raw Acceleration graph for the same flight")]),t._v(" shows that the vibration levels are a bit high for x and y.\nThis is a good example of why it is worth checking several graphs!")])]),t._v(" "),o("h4",{attrs:{id:"examples-bad-vibration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples-bad-vibration"}},[t._v("#")]),t._v(" Examples: Bad Vibration")]),t._v(" "),o("p",[t._v('This example shows a peak in frequency close to 50 Hz (in this case due to "loose" landing gear).')]),t._v(" "),o("p",[o("img",{attrs:{src:a(1613),alt:"Vibrations in landing gear - FFT plot"}})]),t._v(" "),o("h3",{attrs:{id:"acceleration-power-spectral-density"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#acceleration-power-spectral-density"}},[t._v("#")]),t._v(" Acceleration Power Spectral Density")]),t._v(" "),o("p",[t._v("This is a 2D frequency plot showing the frequency response of the raw accelerometer data over time (it displays the sum for the x, y and z axis).\nThe more yellow an area is, the higher the frequency response at that time and frequency.")]),t._v(" "),o("p",[t._v("Ideally only the lowest part up to a few Hz is yellow, and the rest is mostly green or blue.")]),t._v(" "),o("h4",{attrs:{id:"examples-good-vibration-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples-good-vibration-2"}},[t._v("#")]),t._v(" Examples: Good Vibration")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[t._v('QAV-R 5" Racer')]),t._v(" frame (excellent vibration).")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(449),alt:"Low vibration QAV-R 5 Racer - spectral density plot"}})]),t._v(" "),o("p",[t._v("DJI F450 frame (good vibration).\n"),o("img",{attrs:{src:a(450),alt:"Low vibration DJI F450 - spectral density plot"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Above you can see the blade passing frequency of the propellers at around 100 Hz.")])]),t._v(" "),o("p",[t._v("S500 frame:\n"),o("img",{attrs:{src:a(451),alt:"Vibration S500 - spectral density plot"}})]),t._v(" "),o("h4",{attrs:{id:"examples-bad-vibration-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples-bad-vibration-2"}},[t._v("#")]),t._v(" Examples: Bad Vibration")]),t._v(" "),o("p",[t._v("The strong yellow lines at around 100Hz indicate a potential issue that requires further investigation (starting with a review of the other charts).")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1614),alt:"High vibration in spectral density plot"}})]),t._v(" "),o("p",[t._v('This plot below shows a peak in frequency close to 50 Hz (in this case due to "loose" landing gear).')]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("This indicates a possible problem because it is a strong single low frequency that is close to the vehicle dynamics.\nWith the default filter settings of 80 Hz vibrations at 50 Hz will not be filtered.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1615),alt:"Vibrations in landing gear - spectral density plot"}})]),t._v(" "),o("p",[t._v("Extremely high (unsafe) vibration! Note that the graph is almost completely yellow.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("You should not fly with such high vibration levels.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1616),alt:"Exceedingly high vibration in spectral density plot"}})]),t._v(" "),o("h3",{attrs:{id:"raw-acceleration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#raw-acceleration"}},[t._v("#")]),t._v(" Raw Acceleration")]),t._v(" "),o("p",[t._v("This graph shows the raw accelerometer measurements for the x, y and z axis.\nIdeally each line is thin and clearly shows the vehicle's accelerations.")]),t._v(" "),o("p",[t._v("As a rule of thumb if the z-axis graph is touching the x/y-axis graph during hover or slow flight, the vibration levels are too high.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("The best way to use this graph is to zoom in a bit to a part where the vehicle is hovering.")])]),t._v(" "),o("h4",{attrs:{id:"examples-good-vibration-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples-good-vibration-3"}},[t._v("#")]),t._v(" Examples: Good Vibration")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[t._v('QAV-R 5" Racer')]),t._v(" frame (excellent vibration).")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(452),alt:"Low vibration QAV-R 5 Racer - raw accel. plot"}})]),t._v(" "),o("p",[t._v("DJI F450 frame (good vibration).\n"),o("img",{attrs:{src:a(453),alt:"Low vibration DJI F450 - raw accel. plot"}})]),t._v(" "),o("h4",{attrs:{id:"examples-bad-vibration-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples-bad-vibration-3"}},[t._v("#")]),t._v(" Examples: Bad Vibration")]),t._v(" "),o("p",[o("a",{attrs:{id:"raw_acc_s500"}}),t._v("\nS500 frame. Borderline vibration levels - a bit high for x and y (which is typical for an S500 airframe).\nThis is at the limit where it starts to negatively affect flight performance.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(454),alt:"Borderline vibration S500 x, y - raw accel. plot"}})]),t._v(" "),o("p",[t._v("Vibration too high. Note how the graph of the z-axis overlaps with the x/y-axis graph:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1617),alt:"Vibrations in landing gear - raw accel. plot"}})]),t._v(" "),o("p",[t._v("Vibration levels are too high. Note how the graph of the z-axis overlaps with the x/y-axis graph:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1618),alt:"High vibration in raw accel. plot"}})]),t._v(" "),o("p",[t._v("Very high (unsafe) vibration levels.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("You should not fly with such high vibration levels.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1619),alt:"Exceedingly high vibration in raw accel. plot"}})]),t._v(" "),o("p",[o("span",{attrs:{id:"fifo_logging"}})]),t._v(" "),o("h3",{attrs:{id:"raw-high-rate-imu-data-plots"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#raw-high-rate-imu-data-plots"}},[t._v("#")]),t._v(" Raw High-rate IMU Data Plots")]),t._v(" "),o("p",[t._v("For an in-depth analysis there is an option to log the raw IMU data at full rate (several kHz, depending on the IMU).\nThis allows inspection of much higher frequencies than with normal logging, which can help when selecting vibration mounts or configuring low-pass and notch filters appropriately.")]),t._v(" "),o("p",[t._v("To use it, some parameters need to be changed:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Set "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#IMU_GYRO_RATEMAX"}},[t._v("IMU_GYRO_RATEMAX")]),t._v(" to 400.\nThis ensures that the raw sensor data is more efficiently packed when sent from the sensor to the rest of the system, and reduces the log size (without reducing useful data).\n")],1)]),t._v(" "),o("li",[o("p",[t._v("Use a good SD card, as the IMU data requires a high logging bandwidth (Flight Review will show dropouts if the logging rate gets too high).")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("See "),o("RouterLink",{attrs:{to:"/en/dev_log/logging.html#sd-cards"}},[t._v("Logging > SD Cards")]),t._v(" for a comparison of popular SD card.")],1)])]),t._v(" "),o("li",[o("p",[t._v("Enable either the gyro or accel high-rate FIFO profile in "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[t._v("SDLOG_PROFILE")]),t._v(" and disable the rest of the entries.\nIf you are using a really good SD card (seeing few/no dropouts), you can:")],1),t._v(" "),o("ul",[o("li",[t._v("either enable both accel and gyro profiles")]),t._v(" "),o("li",[t._v("or enable accel/gyro plus the default logging profile")])])])]),t._v(" "),o("p",[t._v("Example plot:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1620),alt:"high-rate accel power spectral density"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Data of the first IMU is logged, which is not necessarily the same as the one used for flying.\nThis is mostly only important in cases where IMU's are mounted differently (e.g. hard-mounted vs. soft-mounted).")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Do not forget to restore the parameters after testing.")])]),t._v(" "),o("p",[o("span",{attrs:{id:"solutions"}})]),t._v(" "),o("h3",{attrs:{id:"fixing-vibration-problems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fixing-vibration-problems"}},[t._v("#")]),t._v(" Fixing Vibration Problems")]),t._v(" "),o("p",[t._v("Often a source of vibration (or combination of multiple sources) cannot be identified from logs alone.")]),t._v(" "),o("p",[t._v("In this case the vehicle should be inspected.\n"),o("RouterLink",{attrs:{to:"/en/assembly/vibration_isolation.html"}},[t._v("Vibration Isolation")]),t._v(" explains some basic things you can check (and do) to reduce vibration levels.")],1),t._v(" "),o("h2",{attrs:{id:"actuator-outputs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#actuator-outputs"}},[t._v("#")]),t._v(" Actuator Outputs")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Actuator Outputs")]),t._v(" graph shows the signals that are sent to the individual actuators (motors/servos).\nGenerally it is in the range between the minimum and maximum configured PWM values (e.g. from 1000 to 2000).")]),t._v(" "),o("p",[t._v("This is an example for a quadrotor where everything is OK (all of the signals are within the range, approximately overlap each other, and are not too noisy):\n"),o("img",{attrs:{src:a(1621),alt:"Good actuator outputs"}})]),t._v(" "),o("p",[t._v("The plot can help to identify different problems:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("If one or more of the signals is at the maximum over a longer time, it means the controller runs into "),o("strong",[t._v("saturation")]),t._v(".\nIt is not necessarily a problem, for example when flying at full throttle this is expected.\nBut if it happens for example during a mission, it's an indication that the vehicle is overweight for the amount of thrust that it can provide.")])]),t._v(" "),o("li",[o("p",[t._v("For a multicopter the plot can be a good indication if the vehicle is "),o("strong",[t._v("imbalanced")]),t._v(".\nIt shows in the plot that one or more neighboring motors (two in case of a quadrotor) need to run at higher thrust on average.\nNote that this can also be the case if some motors provide more thrust than others or the ESCs are not calibrated.\nAn imbalanced vehicle is generally not a big problem as the autopilot will automatically account for it.\nHowever it reduces the maximum achievable thrust and puts more strain on some motors, so it is better to balance the vehicle.")])]),t._v(" "),o("li",[o("p",[t._v("An imbalance can also come from the yaw axis.\nThe plot will look similar as in the previous case, but opposite motors will run higher or lower respectively.\nThe cause is likely that one or more motors are tilted.")]),t._v(" "),o("p",[t._v("This is an example from a hexarotor: motors 1, 3 and 6 run at higher thrust:\n"),o("img",{attrs:{src:a(1622),alt:"Hexrotor imbalanced actuator outputs"}})])]),t._v(" "),o("li",[o("p",[t._v("If the signals look very "),o("strong",[t._v("noisy")]),t._v(" (with high amplitudes), it can have two causes: sensor noise or vibrations passing through the controller (this shows up in other plots as well, see previous section) or too high PID gains.\nThis is an extreme example:\n"),o("img",{attrs:{src:a(1623),alt:"Noisy actuator outputs - extreme case"}})])])]),t._v(" "),o("h2",{attrs:{id:"gps-uncertainty"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-uncertainty"}},[t._v("#")]),t._v(" GPS Uncertainty")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("GPS Uncertainty")]),t._v(" plot shows information from the GPS device:")]),t._v(" "),o("ul",[o("li",[t._v("Number of used satellites (should be around 12 or higher)")]),t._v(" "),o("li",[t._v("Horizontal position accuracy (should be below 1 meter)")]),t._v(" "),o("li",[t._v("Vertical position accuracy (should be below 2 meters)")]),t._v(" "),o("li",[t._v("GPS fix: this is 3 for a 3D GPS fix, 4 for GPS + Dead Reckoning, 5 for RTK float and 6 for RTK fixed type")])]),t._v(" "),o("h2",{attrs:{id:"gps-noise-jamming"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-noise-jamming"}},[t._v("#")]),t._v(" GPS Noise & Jamming")]),t._v(" "),o("p",[t._v("The GPS Noise & Jamming plot is useful to check for GPS signal interferences and jamming.\nThe GPS signal is very weak and thus it can easily be disturbed/jammed by components transmitting (via cable) or radiating in a frequency used by the GPS.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("USB 3 is "),o("a",{attrs:{href:"https://www.usb.org/sites/default/files/327216.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("known to be"),o("OutboundLink")],1),t._v(" an effective GPS jamming source.")])]),t._v(" "),o("p",[t._v("The "),o("strong",[t._v("jamming indicator")]),t._v(" should be around or below 40.\nValues around 80 or higher are too high and the setup must be inspected.\nSignal interference is also noticeable as reduced accuracy and lower number of satellites up to the point where no GPS fix is possible.")]),t._v(" "),o("p",[t._v("This is an example without any interference:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1624),alt:"GPS jamming - good plot"}})]),t._v(" "),o("h2",{attrs:{id:"thrust-and-magnetic-field"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#thrust-and-magnetic-field"}},[t._v("#")]),t._v(" Thrust and Magnetic Field")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Thrust and Magnetic Field")]),t._v(" plot shows the thrust and the norm of the magnetic sensor measurement vector.")]),t._v(" "),o("p",[t._v("The norm should be constant over the whole flight and uncorrelated with the thrust.\nThis is a good example where the norm is very close to constant:\n"),o("img",{attrs:{src:a(1625),alt:"Thrust and mag close to constant"}})]),t._v(" "),o("p",[o("em",[t._v("If it is correlated")]),t._v(", it means that the current drawn by the motors (or other consumers) is influencing the magnetic field.\nThis must be avoided as it leads to incorrect yaw estimation.\nThe following plot shows a strong correlation between the thrust and the norm of the magnetometer:\n"),o("img",{attrs:{src:a(1626),alt:"Correlated thrust and mag"}})]),t._v(" "),o("p",[t._v("Solutions to this are:")]),t._v(" "),o("ul",[o("li",[t._v("Use an external magnetometer (avoid using the internal magnetometer)")]),t._v(" "),o("li",[t._v("If using an external magnetometer, move it further away from strong currents (i.e. by using a (longer) GPS mast).")])]),t._v(" "),o("p",[t._v("If the norm is uncorrelated but not constant, most likely it is not properly calibrated.\nHowever it could also be due to external disturbances (for example when flying close to metal constructs).")]),t._v(" "),o("p",[t._v("This example shows that the norm is non-constant, but it does not correlate with the thrust:\n"),o("img",{attrs:{src:a(1627),alt:"Uncorrelated thrust and mag"}})]),t._v(" "),o("h2",{attrs:{id:"estimator-watchdog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#estimator-watchdog"}},[t._v("#")]),t._v(" Estimator Watchdog")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Estimator Watchdog")]),t._v(" plot shows the health report of the estimator.\nIt should be constant zero.")]),t._v(" "),o("p",[t._v("This is what it should look like if there are no problems:\n"),o("img",{attrs:{src:a(1628),alt:"Estimator watchdog - good"}})]),t._v(" "),o("p",[t._v("If one of the flags is non-zero, the estimator detected a problem that needs to be further investigated.\nMost of the time it is an issue with a sensor, for example magnetometer interferences.\nIt usually helps to look at the plots of the corresponding sensor.\n")]),t._v(" "),o("p",[t._v("Here is an example with magnetometer problems:\n"),o("img",{attrs:{src:a(1629),alt:"Estimator watchdog with magnetometer problems"}})]),t._v(" "),o("h2",{attrs:{id:"sampling-regularity-of-sensor-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sampling-regularity-of-sensor-data"}},[t._v("#")]),t._v(" Sampling Regularity of Sensor Data")]),t._v(" "),o("p",[t._v("The sampling regularity plot provides insights into problems with the logging system and scheduling.")]),t._v(" "),o("p",[t._v("The amount of "),o("strong",[t._v("logging dropouts")]),t._v(" start to increase if the log buffer is too small, the logging rate is too high or a low-quality SD card is used.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Occasional dropouts can be expected on medium quality cards.")])]),t._v(" "),o("p",[t._v("The "),o("strong",[t._v("delta t")]),t._v(" shows the time difference between two logged IMU samples.\nIt should be close to 4 ms because the data publishing rate is 250Hz.\nIf there are spikes that are a multiple of that (and the estimator time slip does not increase), it means the logger skipped some samples.\nOccasionally this can happen because the logger runs at lower priority.\nIf there are spikes that are not a multiple, it indicates an irregular sensor driver scheduling, which needs to be investigated.")]),t._v(" "),o("p",[t._v("The "),o("strong",[t._v("estimator timeslip")]),t._v(" shows the difference between the current time and the time of the integrated sensor intervals up to that time.\nIf it changes it means either the estimator missed sensor data or the driver publishes incorrect integration intervals.\nIt should stay at zero, but it can increase slightly for in-flight parameter changes, which is generally not an issue.")]),t._v(" "),o("p",[t._v("This is a good example:\n"),o("img",{attrs:{src:a(1630),alt:"Sampling regularity good"}})]),t._v(" "),o("p",[t._v("The following example contains too many dropouts, the quality of the used SD card was too low in that case\n(see "),o("RouterLink",{attrs:{to:"/en/dev_log/logging.html#sd-cards"}},[t._v("here")]),t._v(" for good SD cards):")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(1631),alt:"Many Dropouts"}})]),t._v(" "),o("h2",{attrs:{id:"logged-messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logged-messages"}},[t._v("#")]),t._v(" Logged Messages")]),t._v(" "),o("p",[t._v("This is a table with system error and warning messages.\nFor example they show when a task becomes low on stack size.")]),t._v(" "),o("p",[t._v("The messages need to be examined individually, and not all of them indicate a problem.\nFor example the following shows a kill-switch test:\n"),o("img",{attrs:{src:a(1632),alt:"Logged Messages"}})]),t._v(" "),o("h2",{attrs:{id:"flight-frame-log-review-examples"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-frame-log-review-examples"}},[t._v("#")]),t._v(" Flight/Frame Log Review Examples")]),t._v(" "),o("p",[t._v("It is often worth looking at multiple charts for a particular flight when analyzing vehicle condition (different charts can better highlight some issues).\nThis is particularly important when reviewing for possible vibration problems.")]),t._v(" "),o("p",[t._v("The section below groups a few (previously presented) charts by flight/vehicle.")]),t._v(" "),o("h3",{attrs:{id:"qav-r-5-racer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#qav-r-5-racer"}},[t._v("#")]),t._v(' QAV-R 5" Racer')]),t._v(" "),o("p",[t._v("These charts are all from the same flight of a "),o("RouterLink",{attrs:{to:"/en/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[t._v('QAV-R 5" Racer')]),t._v(".\n")],1),t._v(" "),o("p",[t._v("They show a vehicle that has very low vibration:")]),t._v(" "),o("ul",[o("li",[t._v("Actuator Controls FFT shows only a single peak at the lowest end, with the rest low and flat.")]),t._v(" "),o("li",[t._v("Spectral density is mostly green, with only a little yellow at the low frequencies.")]),t._v(" "),o("li",[t._v("Raw Acceleration has z-axis trace well separated from the x/y-axis traces.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(446),alt:"Low vibration QAV-R 5 Racer - FFT plot"}})]),t._v(" "),o("p",[o("img",{attrs:{src:a(449),alt:"Low vibration QAV-R 5 Racer - spectral density plot"}})]),t._v(" "),o("p",[o("img",{attrs:{src:a(452),alt:"Low vibration QAV-R 5 Racer - raw accel. plot"}})]),t._v(" "),o("h3",{attrs:{id:"dji-f450"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dji-f450"}},[t._v("#")]),t._v(" DJI F450")]),t._v(" "),o("p",[t._v("These charts are all from the same flight of a "),o("em",[t._v("DJI F450")]),t._v(".\n")]),t._v(" "),o("p",[t._v("They show a vehicle that has low vibration (but not as low as the QAV-R above!):")]),t._v(" "),o("ul",[o("li",[t._v("Actuator Controls FFT shows a peak at the lowest end.\nMost of the rest is flat, except for a bump at around 100Hz (this is the blade passing frequency of the propellers).")]),t._v(" "),o("li",[t._v("Spectral density is mostly green. The blade passing frequency is again visible.")]),t._v(" "),o("li",[t._v("Raw Acceleration has z-axis trace well separated from the x/y-axis traces.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(447),alt:"Low vibration DJI F450 - FFT plot"}})]),t._v(" "),o("p",[o("img",{attrs:{src:a(450),alt:"Low vibration DJI F450 - spectral density plot"}})]),t._v(" "),o("p",[o("img",{attrs:{src:a(453),alt:"Low vibration DJI F450 - raw accel. plot"}})]),t._v(" "),o("h3",{attrs:{id:"s500"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#s500"}},[t._v("#")]),t._v(" S500")]),t._v(" "),o("p",[t._v("These charts are all from the same flight of an S500.")]),t._v(" "),o("p",[t._v("They show a vehicle that has borderline-acceptable vibration:")]),t._v(" "),o("ul",[o("li",[t._v("Actuator Controls FFT shows a peak at the lowest end.\nMost of the rest is flat, except for a bump at around 100Hz.")]),t._v(" "),o("li",[t._v("Spectral density is mostly green, but more yellow than for the DJI F450 at 100Hz.")]),t._v(" "),o("li",[t._v("Raw Acceleration has z-axis trace fairly close to the x/y-axis traces.\nThis is at the limit where it starts to negatively affect flight performance.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(448),alt:"Low vibration S500 actuator controls - FFT plot"}})]),t._v(" "),o("p",[o("img",{attrs:{src:a(451),alt:"Vibration S500 - spectral density plot"}})]),t._v(" "),o("p",[o("img",{attrs:{src:a(454),alt:"Borderline vibration S500 x, y - raw accel. plot"}})])])}),[],!1,null,null,null);e.default=i.exports}}]);