(window.webpackJsonp=window.webpackJsonp||[]).push([[1922],{3550:function(e,t,a){"use strict";a.r(t);var r=a(19),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"飞行前传感器-估算器检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞行前传感器-估算器检查"}},[e._v("#")]),e._v(" 飞行前传感器 / 估算器检查")]),e._v(" "),a("p",[e._v("PX4 performs a number of preflight sensor quality and estimator checks to determine if there is a good enough position estimate to arm and fly the vehicle (these checks are controlled by the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#commander"}},[e._v("COM_ARM_")]),e._v(" parameters).")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("Any preflight errors are reported in "),a("em",[e._v("QGroundControl")]),e._v(" as "),a("code",[e._v("PREFLIGHT FAIL")]),e._v(" messages. The "),a("code",[e._v("estimator_status.gps_check_fail_flags")]),e._v(" message "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[e._v("in the logs")]),e._v(" also shows which GPS quality checks are failing.")],1)]),e._v(" "),a("p",[e._v("The sections below list the errors, their likely causes and solutions, and any parameters that affect how the preflight checks are run.")]),e._v(" "),a("h2",{attrs:{id:"ekf-飞行前检查-错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ekf-飞行前检查-错误"}},[e._v("#")]),e._v(" EKF 飞行前检查 / 错误")]),e._v(" "),a("p",[e._v("The following errors (with associated checks and parameters) are reported by the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html"}},[e._v("EKF")]),e._v(" (and propagate to "),a("em",[e._v("QGroundControl")]),e._v("):")],1),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-hgt-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-hgt-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HGT ERROR")]),e._v(" "),a("ul",[a("li",[e._v("当 IMU 和高度测量数据不一致时会产生此错误。")]),e._v(" "),a("li",[e._v("执行加速度计和陀螺仪校准并重新启动飞行器。 如果错误仍然存在，请检查高度传感器数据是否存在问题。")]),e._v(" "),a("li",[e._v("检查由"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_EKF_HGT"}},[e._v("COM_ARM_EKF_HGT")]),e._v("参数控制。")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-vel-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-vel-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF VEL ERROR")]),e._v(" "),a("ul",[a("li",[e._v("当 IMU 和 GPS 速度测量数据不一致时会产生此错误。")]),e._v(" "),a("li",[e._v("检查 GPS 速度数据是否存在不真实的数据跳转。 如果 GPS 质量看起来没有问题，请执行加速度计和陀螺仪校准并重新启动飞行器。")]),e._v(" "),a("li",[e._v("检查由"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_EKF_VEL"}},[e._v("COM_ARM_EKF_VEL")]),e._v("参数控制。")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-horiz-pos-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-horiz-pos-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HORIZ POS ERROR")]),e._v(" "),a("ul",[a("li",[e._v("当 IMU 和位置测量数据（GPS 或外部视觉）不一致时会产生此问题。")]),e._v(" "),a("li",[e._v("检查位置传感器数据是否存在不真实的数据跳转。 如果数据质量看起来不错，请执行加速度计和陀螺仪校准并重新启动飞行器。")]),e._v(" "),a("li",[e._v("检查由"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_EKF_POS"}},[e._v("COM_ARM_EKF_POS")]),e._v("参数控制。")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-yaw-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-yaw-error"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF YAW ERROR")]),e._v(" "),a("ul",[a("li",[e._v("当使用陀螺仪数据估计的偏航角和来自磁力计或外部视觉系统的偏航角不一致时，产生该误差。")]),e._v(" "),a("li",[e._v("检查 IMU 数据是否存在较大的偏航率漂洗，并检查磁力计的对准和校准。")]),e._v(" "),a("li",[e._v("The check is controlled by the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_EKF_YAW"}},[e._v("COM_ARM_EKF_YAW")]),e._v(" parameter")],1),e._v(" "),a("li",[e._v("The default value of 0.5 allows the differences between the navigation yaw angle and magnetic yaw angle (magnetometer or external vision) to be no more than 50% of the maximum tolerated by the EKF and provides some margin for error increase when flight commences.")]),e._v(" "),a("li",[e._v("如果偏航陀螺仪有较大的偏移量，或者飞行器在存在磁干扰或者磁力计校准的情况下移动或者旋转，则可能会校准失败。")])]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-high-imu-accel-bias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-high-imu-accel-bias"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HIGH IMU ACCEL BIAS")]),e._v(" "),a("p",[e._v("The EKF IMU acceleration bias is the difference between the measured acceleration reported by the IMU sensor and the expected acceleration reported by the EKF2 estimator (which fuses position and/or velocity data from a number of sources, including the IMU, GNSS, flow sensors etc.). This bias may change when the sensor is turned on (“turn-on bias”) and over time due to noise and temperature differences (“in-run bias”). The number should generally be very small (near zero), indicating that measurements from different sources all agree on the acceleration.")]),e._v(" "),a("p",[e._v("The warning indicates that the bias is higher than some arbitrary threshold (the vehicle will not be allowed to take off). It is most likely a sign that accelerometer or thermal calibration are required:")]),e._v(" "),a("ul",[a("li",[e._v("If you "),a("em",[e._v("sometimes")]),e._v(" get the warning: "),a("RouterLink",{attrs:{to:"/zh/config/accelerometer.html"}},[e._v("re-calibrate the accelerometer")]),e._v(".")],1),e._v(" "),a("li",[e._v("If you get "),a("em",[e._v("regularly")]),e._v(" get the warning: Perform a "),a("RouterLink",{attrs:{to:"/zh/advanced_config/sensor_thermal_calibration.html"}},[e._v("thermal calibration")]),e._v(".")],1),e._v(" "),a("li",[e._v("If you still get the warning after thermal calibration (or you can't perform thermal calibration):\n"),a("ul",[a("li",[e._v("Verify that the issues do not come from the sensor or autopilot hardware:\n"),a("ul",[a("li",[e._v("The easiest way to do this is to test the same frame/sensors with another autopilot.")]),e._v(" "),a("li",[e._v("Alternatively, "),a("RouterLink",{attrs:{to:"/zh/dev_log/logging.html#configuration"}},[e._v("log and compare")]),e._v(" all accelerometers across a number of bench test runs with "),a("code",[e._v("6: Sensor comparison")]),e._v(" enabled in "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")]),e._v(".")],1)])]),e._v(" "),a("li",[e._v("Attempt to change the accelerometer bias learning tuning parameters.")])])])]),e._v(" "),a("p",[e._v('Increasing the parameters will make the autopilot less likely to detect an anomaly and can modify the stability of the estimator. However it may be required if there are problems with the sensor that cannot be fixed by other means (i.e you can tune the EKF for better performance, but there is no way you can calibrate the accelerometer "better").')]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Tuning these parameters is a last resort.\nIt should only be attempted if you have data showing it will improve the performance of the estimator.")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"EKF2_ABL_LIM"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_ABL_LIM"}},[e._v("EKF2_ABL_LIM")])],1),e._v(" "),a("td",[e._v("The maximum bias value that the EKF is allowed to estimate (above this value the bias will be clipped and EKF will attempt to reset itself, possibly even switching to a more healthy EKF with a working IMU in a multi-EKF system). The autopilot will report a “high accel bias” if the estimated bias exceeds 75% of this parameter during a preflight check and prevent takeoff. The current value of 0.4m/s2 is already quite high and increasing it would make the autopilot less likely to detect an issue.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"EKF2_ABIAS_INIT"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_ABIAS_INIT"}},[e._v("EKF2_ABIAS_INIT")])],1),e._v(" "),a("td",[e._v("Initial bias uncertainty (if perfectly calibrated, this is related to the “turn-on bias” of the sensor). Some users might want to reduce that value if they know that the sensor is well calibrated and that the turn-on bias is small.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"EKF2_ACC_B_NOISE"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_ACC_B_NOISE"}},[e._v("EKF2_ACC_B_NOISE")])],1),e._v(" "),a("td",[e._v("The expected “in-run bias” of the accelerometer or “how fast do we expect the bias to change per second”. By default, this value is large enough to include the drift due to a temperature change. If the IMU is temperature calibrated, the user might want to reduce this parameter.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"EKF2_ABL_ACCLIM"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_ABL_ACCLIM"}},[e._v("EKF2_ABL_ACCLIM")])],1),e._v(" "),a("td",[e._v("The maximum acceleration at which the estimator will try to learn an acceleration bias. This is to prevent the estimator from learning a bias due to non-linearity and scale factor errors. (Almost no user should need to change that parameter except if they really know what they are doing).")])])])]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-high-imu-gyro-bias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-high-imu-gyro-bias"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF HIGH IMU GYRO BIAS")]),e._v(" "),a("ul",[a("li",[e._v("当由 EKF 估计的 IMU 陀螺仪偏差过大时会产生该错误。")]),e._v(" "),a("li",[e._v("Excessive in this case means that the bias estimate exceeds 10deg/s (half the configured limit, which is hardcoded to 20deg/s).")])]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-accel-sensors-inconsistent-check-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-accel-sensors-inconsistent-check-calibration"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: ACCEL SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(" "),a("ul",[a("li",[e._v("当来自不同 IMU 单元的加速度测量值不一致时，会产生此错误消息。")]),e._v(" "),a("li",[e._v("此检查仅适用于具有多个 IMU 的板。")]),e._v(" "),a("li",[e._v("检查由"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_IMU_ACC"}},[e._v("COM_ARM_IMU_ACC")]),e._v("参数控制。")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-gyro-sensors-inconsistent-check-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-gyro-sensors-inconsistent-check-calibration"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: GYRO SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(" "),a("ul",[a("li",[e._v("当来自不同 IMU 单元的角速率测量值不一致时，会产生此错误消息。")]),e._v(" "),a("li",[e._v("此检查仅适用于具有多个 IMU 的板。")]),e._v(" "),a("li",[e._v("检查由"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_IMU_GYR"}},[e._v("COM_ARM_IMU_GYR")]),e._v("参数控制。")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-compass-sensors-inconsistent-check-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-compass-sensors-inconsistent-check-calibration"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: COMPASS SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(" "),a("ul",[a("li",[e._v("This error message is produced when the difference in measurements from different compass sensors is too great.")]),e._v(" "),a("li",[e._v("It indicates bad calibration, orientation or magnetic interference.")]),e._v(" "),a("li",[e._v("This check only applies to when more than one compass/magnetometer is connected.")]),e._v(" "),a("li",[e._v("The check is controlled by the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_MAG_ANG"}},[e._v("COM_ARM_MAG_ANG")]),e._v(" parameter.")],1)]),e._v(" "),a("h4",{attrs:{id:"preflight-fail-ekf-internal-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-internal-checks"}},[e._v("#")]),e._v(" PREFLIGHT FAIL: EKF INTERNAL CHECKS")]),e._v(" "),a("ul",[a("li",[e._v("如果水平 GPS 速度、偏航角、垂直 GPS 速度或者垂直位置传感器（气压计默认情况下可以使测距仪或 GPS ，如果使用非标准参数）其中之一新息过多，会产生此错误消息。 新息指的是惯性导航计算预测值与传感器测量值之间的差异。")]),e._v(" "),a("li",[e._v("用户应检查日志文件中新息级别以确定原因。 这些可以在"),a("code",[e._v("ekf2_innovations")]),e._v("消息下找到。 常见问题 / 解决方案包括：\n"),a("ul",[a("li",[e._v("IMU 启动时漂移。 可以通过重启自驾仪来解决。 可能需要 IMU 加速度计和陀螺仪校准。")]),e._v(" "),a("li",[e._v("相邻磁干扰在飞行器运动中。 通过等待或者重新上电解决。")]),e._v(" "),a("li",[e._v("磁力计校准不良在飞行器运动中。。 通过重新校准解决。")]),e._v(" "),a("li",[e._v("启动时的初始冲击或快速移动导致惯性导航失败。 通过重新启动飞行器并在前 5 秒内最大限度地减少移动来解决此问题。")])])])]),e._v(" "),a("h2",{attrs:{id:"其他参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他参数"}},[e._v("#")]),e._v(" 其他参数")]),e._v(" "),a("p",[e._v("The following parameters also affect preflight checks.")]),e._v(" "),a("h4",{attrs:{id:"com-arm-wo-gps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#com-arm-wo-gps"}},[e._v("#")]),e._v(" COM_ARM_WO_GPS")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_WO_GPS"}},[e._v("COM_ARM_WO_GPS")]),e._v(" parameter controls whether or not arming is allowed without a global position estimate.")],1),e._v(" "),a("ul",[a("li",[a("code",[e._v("1")]),e._v(" (default): Arming "),a("em",[e._v("is")]),e._v(" allowed without a position estimate for flight modes that do not require position information (only).")]),e._v(" "),a("li",[e._v("0</0>：只有当 EKF 提供全球位置估计并且 EKF GPS 质量检查正在通过时，才允许解锁。")])])])}),[],!1,null,null,null);t.default=i.exports}}]);