(window.webpackJsonp=window.webpackJsonp||[]).push([[997],{1882:function(e,t,a){"use strict";a.r(t);var r=a(19),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"preflight-sensor-estimator-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-sensor-estimator-checks"}},[e._v("#")]),e._v(" Preflight Sensor/Estimator Checks")]),e._v(" "),a("p",[e._v("PX4 performs a number of preflight sensor quality and estimator checks to determine if there is a good enough position estimate to arm and fly the vehicle (these checks are controlled by the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#commander"}},[e._v("COM_ARM_")]),e._v(" parameters).")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Any preflight errors are reported in "),a("em",[e._v("QGroundControl")]),e._v(" as "),a("code",[e._v("PREFLIGHT FAIL")]),e._v(" messages.\nThe "),a("code",[e._v("estimator_status.gps_check_fail_flags")]),e._v(" message "),a("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[e._v("in the logs")]),e._v(" also shows which GPS quality checks are failing.")],1)]),e._v(" "),a("p",[e._v("The sections below list the errors, their likely causes and solutions, and any parameters that affect how the preflight checks are run.")]),e._v(" "),a("h2",{attrs:{id:"ekf-preflight-checks-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ekf-preflight-checks-errors"}},[e._v("#")]),e._v(" EKF Preflight Checks/Errors")]),e._v(" "),a("p",[e._v("The following errors (with associated checks and parameters) are reported by the "),a("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html"}},[e._v("EKF")]),e._v(" (and propagate to "),a("em",[e._v("QGroundControl")]),e._v("):")],1),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-hgt-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-hgt-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HGT ERROR")]),e._v(" "),a("ul",[a("li",[e._v("This error is produced when the IMU and height measurement data are inconsistent.")]),e._v(" "),a("li",[e._v("Perform an accel and gyro calibration and restart the vehicle. If the error persists, check the height sensor data for problems.")]),e._v(" "),a("li",[e._v("The check is controlled by the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_EKF_HGT"}},[e._v("COM_ARM_EKF_HGT")]),e._v(" parameter.")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-vel-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-vel-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF VEL ERROR")]),e._v(" "),a("ul",[a("li",[e._v("This error is produced when the IMU and GPS velocity measurement data are inconsistent.")]),e._v(" "),a("li",[e._v("Check the GPS velocity data for un-realistic data jumps. If GPS quality looks OK, perform an accel and gyro calibration and restart the vehicle.")]),e._v(" "),a("li",[e._v("The check is controlled by the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_EKF_VEL"}},[e._v("COM_ARM_EKF_VEL")]),e._v(" parameter.")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-horiz-pos-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-horiz-pos-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HORIZ POS ERROR")]),e._v(" "),a("ul",[a("li",[e._v("This error is produced when the IMU and position measurement data (either GPS or external vision) are inconsistent.")]),e._v(" "),a("li",[e._v("Check the position sensor data for un-realistic data jumps. If data quality looks OK, perform an accel and gyro calibration and restart the vehicle.")]),e._v(" "),a("li",[e._v("The check is controlled by the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_EKF_POS"}},[e._v("COM_ARM_EKF_POS")]),e._v(" parameter.")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-yaw-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-yaw-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF YAW ERROR")]),e._v(" "),a("ul",[a("li",[e._v("This error is produced when the yaw angle estimated using gyro data and the yaw angle from the magnetometer or external vision system are inconsistent.")]),e._v(" "),a("li",[e._v("Check the IMU data for large yaw rate offsets and check the magnetometer alignment and calibration.")]),e._v(" "),a("li",[e._v("The check is controlled by the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_EKF_YAW"}},[e._v("COM_ARM_EKF_YAW")]),e._v(" parameter")],1),e._v(" "),a("li",[e._v("The default value of 0.5 allows the differences between the navigation yaw angle and magnetic yaw angle (magnetometer or external vision) to be no more than 50% of the maximum tolerated by the EKF and provides some margin for error increase when flight commences.")]),e._v(" "),a("li",[e._v("It can fail if the yaw gyro has a large offset or if the vehicle is moved or rotated in the presence of a bad magnetic interference or magnetometer calibration.")])]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-high-imu-accel-bias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-high-imu-accel-bias"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HIGH IMU ACCEL BIAS")]),e._v(" "),a("p",[e._v("The EKF IMU acceleration bias is the difference between the measured acceleration reported by the IMU sensor and the expected acceleration reported by the EKF2 estimator (which fuses position and/or velocity data from a number of sources, including the IMU, GNSS, flow sensors etc.).\nThis bias may change when the sensor is turned on (“turn-on bias”) and over time due to noise and temperature differences (“in-run bias”).\nThe number should generally be very small (near zero), indicating that measurements from different sources all agree on the acceleration.")]),e._v(" "),a("p",[e._v("The warning indicates that the bias is higher than some arbitrary threshold (the vehicle will not be allowed to take off).\nIt is most likely a sign that accelerometer or thermal calibration are required:")]),e._v(" "),a("ul",[a("li",[e._v("If you "),a("em",[e._v("sometimes")]),e._v(" get the warning: "),a("RouterLink",{attrs:{to:"/en/config/accelerometer.html"}},[e._v("re-calibrate the accelerometer")]),e._v(".")],1),e._v(" "),a("li",[e._v("If you get "),a("em",[e._v("regularly")]),e._v(" get the warning: Perform a "),a("RouterLink",{attrs:{to:"/en/advanced_config/sensor_thermal_calibration.html"}},[e._v("thermal calibration")]),e._v(".")],1),e._v(" "),a("li",[e._v("If you still get the warning after thermal calibration (or you can't perform thermal calibration):\n"),a("ul",[a("li",[e._v("Verify that the issues do not come from the sensor or autopilot hardware:\n"),a("ul",[a("li",[e._v("The easiest way to do this is to test the same frame/sensors with another autopilot.")]),e._v(" "),a("li",[e._v("Alternatively, "),a("RouterLink",{attrs:{to:"/en/dev_log/logging.html#configuration"}},[e._v("log and compare")]),e._v(" all accelerometers across a number of bench test runs with "),a("code",[e._v("6: Sensor comparison")]),e._v(" enabled in "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")]),e._v(".")],1)])]),e._v(" "),a("li",[e._v("Attempt to change the accelerometer bias learning tuning parameters.")])])])]),e._v(" "),a("p",[e._v('Increasing the parameters will make the autopilot less likely to detect an anomaly and can modify the stability of the estimator.\nHowever it may be required if there are problems with the sensor that cannot be fixed by other means (i.e you can tune the EKF for better performance, but there is no way you can calibrate the accelerometer "better").')]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Tuning these parameters is a last resort.\nIt should only be attempted if you have data showing it will improve the performance of the estimator.")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"EKF2_ABL_LIM"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_ABL_LIM"}},[e._v("EKF2_ABL_LIM")])],1),e._v(" "),a("td",[e._v("The maximum bias value that the EKF is allowed to estimate (above this value the bias will be clipped and EKF will attempt to reset itself, possibly even switching to a more healthy EKF with a working IMU in a multi-EKF system). The autopilot will report a “high accel bias” if the estimated bias exceeds 75% of this parameter during a preflight check and prevent takeoff. The current value of 0.4m/s2 is already quite high and increasing it would make the autopilot less likely to detect an issue.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"EKF2_ABIAS_INIT"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_ABIAS_INIT"}},[e._v("EKF2_ABIAS_INIT")])],1),e._v(" "),a("td",[e._v("Initial bias uncertainty (if perfectly calibrated, this is related to the “turn-on bias” of the sensor). Some users might want to reduce that value if they know that the sensor is well calibrated and that the turn-on bias is small.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"EKF2_ACC_B_NOISE"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_ACC_B_NOISE"}},[e._v("EKF2_ACC_B_NOISE")])],1),e._v(" "),a("td",[e._v("The expected “in-run bias” of the accelerometer or “how fast do we expect the bias to change per second”. By default, this value is large enough to include the drift due to a temperature change. If the IMU is temperature calibrated, the user might want to reduce this parameter.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"EKF2_ABL_ACCLIM"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_ABL_ACCLIM"}},[e._v("EKF2_ABL_ACCLIM")])],1),e._v(" "),a("td",[e._v("The maximum acceleration at which the estimator will try to learn an acceleration bias. This is to prevent the estimator from learning a bias due to non-linearity and scale factor errors. (Almost no user should need to change that parameter except if they really know what they are doing).")])])])]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-high-imu-gyro-bias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-high-imu-gyro-bias"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HIGH IMU GYRO BIAS")]),e._v(" "),a("ul",[a("li",[e._v("This error is produced when the IMU gyro bias estimated by the EKF is excessive.")]),e._v(" "),a("li",[e._v("Excessive in this case means that the bias estimate exceeds 10deg/s (half the configured limit, which is hardcoded to 20deg/s).")])]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-accel-sensors-inconsistent-check-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-accel-sensors-inconsistent-check-calibration"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: ACCEL SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(" "),a("ul",[a("li",[e._v("This error message is produced when the acceleration measurements from different IMU units are inconsistent.")]),e._v(" "),a("li",[e._v("This check only applies to boards with more than one IMU.")]),e._v(" "),a("li",[e._v("The check is controlled by the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_IMU_ACC"}},[e._v("COM_ARM_IMU_ACC")]),e._v(" parameter.")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-gyro-sensors-inconsistent-check-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-gyro-sensors-inconsistent-check-calibration"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: GYRO SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(" "),a("ul",[a("li",[e._v("This error message is produced when the angular rate measurements from different IMU units are inconsistent.")]),e._v(" "),a("li",[e._v("This check only applies to boards with more than one IMU.")]),e._v(" "),a("li",[e._v("The check is controlled by the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_IMU_GYR"}},[e._v("COM_ARM_IMU_GYR")]),e._v(" parameter.")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-compass-sensors-inconsistent-check-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-compass-sensors-inconsistent-check-calibration"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: COMPASS SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(" "),a("ul",[a("li",[e._v("This error message is produced when the difference in measurements from different compass sensors is too great.")]),e._v(" "),a("li",[e._v("It indicates bad calibration, orientation or magnetic interference.")]),e._v(" "),a("li",[e._v("This check only applies to when more than one compass/magnetometer is connected.")]),e._v(" "),a("li",[e._v("The check is controlled by the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_MAG_ANG"}},[e._v("COM_ARM_MAG_ANG")]),e._v(" parameter.")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-internal-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-internal-checks"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF INTERNAL CHECKS")]),e._v(" "),a("ul",[a("li",[e._v("This error message is generated if the innovation magnitudes of either the horizontal GPS velocity, magnetic yaw, vertical GPS velocity or vertical position sensor (Baro by default but could be range finder or GPS if non-standard parameters are being used) are excessive. Innovations are the difference between the value predicted by the inertial navigation calculation and measured by the sensor.")]),e._v(" "),a("li",[e._v("Users should check the innovation levels in the log file to determine the cause. These can be found under the "),a("code",[e._v("ekf2_innovations")]),e._v(" message.\nCommon problems/solutions include:\n"),a("ul",[a("li",[e._v("IMU drift on warmup. May be resolved by restarting the autopilot. May require an IMU accel and gyro calibration.")]),e._v(" "),a("li",[e._v("Adjacent magnetic interference combined with vehicle movement. Resolve my moving vehicle and waiting or re-powering.")]),e._v(" "),a("li",[e._v("Bad magnetometer calibration combined with vehicle movement. Resolve by recalibrating.")]),e._v(" "),a("li",[e._v("Initial shock or rapid movement on startup that caused a bad inertial nav solution. Resolve by restarting the vehicle and minimising movement for the first 5 seconds.")])])])]),e._v(" "),a("h2",{attrs:{id:"other-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-parameters"}},[e._v("#")]),e._v(" Other Parameters")]),e._v(" "),a("p",[e._v("The following parameters also affect preflight checks.")]),e._v(" "),a("h4",{attrs:{id:"com-arm-wo-gps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#com-arm-wo-gps"}},[e._v("#")]),e._v(" COM_ARM_WO_GPS")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_WO_GPS"}},[e._v("COM_ARM_WO_GPS")]),e._v(" parameter controls whether or not arming is allowed without a global position estimate.")],1),e._v(" "),a("ul",[a("li",[a("code",[e._v("1")]),e._v(" (default): Arming "),a("em",[e._v("is")]),e._v(" allowed without a position estimate for flight modes that do not require position information (only).")]),e._v(" "),a("li",[a("code",[e._v("0")]),e._v(": Arming is allowed only if EKF is providing a global position estimate and EFK GPS quality checks are passing")])])])}),[],!1,null,null,null);t.default=i.exports}}]);