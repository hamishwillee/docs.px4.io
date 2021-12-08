(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{1721:function(e,t,r){"use strict";r.r(t);var a=r(19),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"preflight-sensor-estimator-checks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-sensor-estimator-checks"}},[e._v("#")]),e._v(" Preflight Sensor/Estimator Checks")]),e._v(" "),r("p",[e._v("PX4 performs a number of preflight sensor quality and estimator checks to determine if there is a good enough position estimate to arm and fly the vehicle (these checks are controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#commander"}},[e._v("COM_ARM_")]),e._v(" parameters).")],1),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Any preflight errors are reported in "),r("em",[e._v("QGroundControl")]),e._v(" as "),r("code",[e._v("PREFLIGHT FAIL")]),e._v(" messages. The "),r("code",[e._v("estimator_status.gps_check_fail_flags")]),e._v(" message "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[e._v("in the logs")]),e._v(" also shows which GPS quality checks are failing.")],1)]),e._v(" "),r("p",[e._v("The sections below list the errors, their likely causes and solutions, and any parameters that affect how the preflight checks are run.")]),e._v(" "),r("h2",{attrs:{id:"ekf-preflight-checks-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ekf-preflight-checks-errors"}},[e._v("#")]),e._v(" EKF Preflight Checks/Errors")]),e._v(" "),r("p",[e._v("The following errors (with associated checks and parameters) are reported by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html"}},[e._v("EKF")]),e._v(" (and propagate to "),r("em",[e._v("QGroundControl")]),e._v("):")],1),e._v(" "),r("h4",{attrs:{id:"preflight-fail-ekf-hgt-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-hgt-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HGT ERROR")]),e._v(" "),r("ul",[r("li",[e._v("This error is produced when the IMU and height measurement data are inconsistent.")]),e._v(" "),r("li",[e._v("Perform an accel and gyro calibration and restart the vehicle. If the error persists, check the height sensor data for problems.")]),e._v(" "),r("li",[e._v("The check is controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_EKF_HGT"}},[e._v("COM_ARM_EKF_HGT")]),e._v(" parameter.")],1)]),e._v(" "),r("h4",{attrs:{id:"preflight-fail-ekf-vel-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-vel-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF VEL ERROR")]),e._v(" "),r("ul",[r("li",[e._v("This error is produced when the IMU and GPS velocity measurement data are inconsistent.")]),e._v(" "),r("li",[e._v("Check the GPS velocity data for un-realistic data jumps. If GPS quality looks OK, perform an accel and gyro calibration and restart the vehicle.")]),e._v(" "),r("li",[e._v("The check is controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_EKF_VEL"}},[e._v("COM_ARM_EKF_VEL")]),e._v(" parameter.")],1)]),e._v(" "),r("h4",{attrs:{id:"preflight-fail-ekf-horiz-pos-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-horiz-pos-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HORIZ POS ERROR")]),e._v(" "),r("ul",[r("li",[e._v("This error is produced when the IMU and position measurement data (either GPS or external vision) are inconsistent.")]),e._v(" "),r("li",[e._v("Check the position sensor data for un-realistic data jumps. If data quality looks OK, perform an accel and gyro calibration and restart the vehicle.")]),e._v(" "),r("li",[e._v("The check is controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_EKF_POS"}},[e._v("COM_ARM_EKF_POS")]),e._v(" parameter.")],1)]),e._v(" "),r("h4",{attrs:{id:"preflight-fail-ekf-yaw-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-yaw-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF YAW ERROR")]),e._v(" "),r("ul",[r("li",[e._v("This error is produced when the yaw angle estimated using gyro data and the yaw angle from the magnetometer or external vision system are inconsistent.")]),e._v(" "),r("li",[e._v("Check the IMU data for large yaw rate offsets and check the magnetometer alignment and calibration.")]),e._v(" "),r("li",[e._v("The check is controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_EKF_YAW"}},[e._v("COM_ARM_EKF_YAW")]),e._v(" parameter")],1),e._v(" "),r("li",[e._v("The default value of 0.5 allows the differences between the navigation yaw angle and magnetic yaw angle (magnetometer or external vision) to be no more than 50% of the maximum tolerated by the EKF and provides some margin for error increase when flight commences.")]),e._v(" "),r("li",[e._v("It can fail if the yaw gyro has a large offset or if the vehicle is moved or rotated in the presence of a bad magnetic interference or magnetometer calibration.")])]),e._v(" "),r("h4",{attrs:{id:"preflight-fail-ekf-high-imu-accel-bias"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-high-imu-accel-bias"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HIGH IMU ACCEL BIAS")]),e._v(" "),r("ul",[r("li",[e._v("This error is produced when the IMU accelerometer bias estimated by the EKF is excessive.")]),e._v(" "),r("li",[e._v("Excessive in this case means that the bias estimate exceeds half the configured limit.\nThe limit is defined in the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_ABL_LIM"}},[e._v("EKF2_ABL_LIM")]),e._v(" parameter.")],1)]),e._v(" "),r("h4",{attrs:{id:"preflight-fail-ekf-high-imu-gyro-bias"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-high-imu-gyro-bias"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HIGH IMU GYRO BIAS")]),e._v(" "),r("ul",[r("li",[e._v("This error is produced when the IMU gyro bias estimated by the EKF is excessive.")]),e._v(" "),r("li",[e._v("Excessive in this case means that the bias estimate exceeds 10deg/s (half the configured limit, which is hardcoded to 20deg/s).")])]),e._v(" "),r("h4",{attrs:{id:"preflight-fail-accel-sensors-inconsistent-check-calibration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-accel-sensors-inconsistent-check-calibration"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: ACCEL SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(" "),r("ul",[r("li",[e._v("This error message is produced when the acceleration measurements from different IMU units are inconsistent.")]),e._v(" "),r("li",[e._v("This check only applies to boards with more than one IMU.")]),e._v(" "),r("li",[e._v("The check is controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_IMU_ACC"}},[e._v("COM_ARM_IMU_ACC")]),e._v(" parameter.")],1)]),e._v(" "),r("h4",{attrs:{id:"preflight-fail-gyro-sensors-inconsistent-check-calibration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-gyro-sensors-inconsistent-check-calibration"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: GYRO SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(" "),r("ul",[r("li",[e._v("This error message is produced when the angular rate measurements from different IMU units are inconsistent.")]),e._v(" "),r("li",[e._v("This check only applies to boards with more than one IMU.")]),e._v(" "),r("li",[e._v("The check is controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_IMU_GYR"}},[e._v("COM_ARM_IMU_GYR")]),e._v(" parameter.")],1)]),e._v(" "),r("h4",{attrs:{id:"preflight-fail-compass-sensors-inconsistent-check-calibration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-compass-sensors-inconsistent-check-calibration"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: COMPASS SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(" "),r("ul",[r("li",[e._v("This error message is produced when the difference in measurements from different compass sensors is too great.")]),e._v(" "),r("li",[e._v("It indicates bad calibration, orientation or magnetic interference.")]),e._v(" "),r("li",[e._v("This check only applies to when more than one compass/magnetometer is connected.")]),e._v(" "),r("li",[e._v("The check is controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_MAG_ANG"}},[e._v("COM_ARM_MAG_ANG")]),e._v(" parameter.")],1)]),e._v(" "),r("h4",{attrs:{id:"preflight-fail-ekf-internal-checks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-internal-checks"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF INTERNAL CHECKS")]),e._v(" "),r("ul",[r("li",[e._v("This error message is generated if the innovation magnitudes of either the horizontal GPS velocity, magnetic yaw, vertical GPS velocity or vertical position sensor (Baro by default but could be range finder or GPS if non-standard parameters are being used) are excessive. Innovations are the difference between the value predicted by the inertial navigation calculation and measured by the sensor.")]),e._v(" "),r("li",[e._v("Users should check the innovation levels in the log file to determine the cause. These can be found under the "),r("code",[e._v("ekf2_innovations")]),e._v(" message.\nCommon problems/solutions include:\n"),r("ul",[r("li",[e._v("IMU drift on warmup. May be resolved by restarting the autopilot. May require an IMU accel and gyro calibration.")]),e._v(" "),r("li",[e._v("Adjacent magnetic interference combined with vehicle movement. Resolve my moving vehicle and waiting or re-powering.")]),e._v(" "),r("li",[e._v("Bad magnetometer calibration combined with vehicle movement. Resolve by recalibrating.")]),e._v(" "),r("li",[e._v("Initial shock or rapid movement on startup that caused a bad inertial nav solution. Resolve by restarting the vehicle and minimising movement for the first 5 seconds.")])])])]),e._v(" "),r("h2",{attrs:{id:"other-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-parameters"}},[e._v("#")]),e._v(" Other Parameters")]),e._v(" "),r("p",[e._v("The following parameters also affect preflight checks.")]),e._v(" "),r("h4",{attrs:{id:"com-arm-wo-gps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#com-arm-wo-gps"}},[e._v("#")]),e._v(" COM_ARM_WO_GPS")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_ARM_WO_GPS"}},[e._v("COM_ARM_WO_GPS")]),e._v(" parameter controls whether or not arming is allowed without a global position estimate.")],1),e._v(" "),r("ul",[r("li",[r("code",[e._v("1")]),e._v(" (default): Arming "),r("em",[e._v("is")]),e._v(" allowed without a position estimate for flight modes that do not require position information (only).")]),e._v(" "),r("li",[r("code",[e._v("0")]),e._v(": Arming is allowed only if EKF is providing a global position estimate and EFK GPS quality checks are passing")])])])}),[],!1,null,null,null);t.default=i.exports}}]);