(window.webpackJsonp=window.webpackJsonp||[]).push([[1186],{2497:function(e,_,t){"use strict";t.r(_);var v=t(18),r=Object(v.a)({},(function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"飞行前传感器-估算器检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#飞行前传感器-估算器检查"}},[e._v("#")]),e._v(" 飞行前传感器 / 估算器检查")]),e._v(" "),t("p",[e._v("PX4 执行很多飞行前传感器质量和估算器检查，以确定是否有足够好的位置估计来解锁和驾驶飞行器（这些检查由 "),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#commander"}},[e._v("COM_"),t("em",[e._v("ARM_")])]),e._v(" 参数控制）。")],1),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("Any preflight errors are reported in "),t("em",[e._v("QGroundControl")]),e._v(" as "),t("code",[e._v("PREFLIGHT FAIL")]),e._v(" messages. The "),t("code",[e._v("estimator_status.gps_check_fail_flags")]),e._v(" message "),t("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[e._v("in the logs")]),e._v(" also shows which GPS quality checks are failing.")],1)]),e._v(" "),t("p",[e._v("The sections below list the errors, their likely causes and solutions, and any parameters that affect how the preflight checks are run.")]),e._v(" "),t("h2",{attrs:{id:"ekf-飞行前检查-错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ekf-飞行前检查-错误"}},[e._v("#")]),e._v(" EKF 飞行前检查 / 错误")]),e._v(" "),t("p",[e._v("The following errors (with associated checks and parameters) are reported by the "),t("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html"}},[e._v("EKF")]),e._v(" (and propagate to "),t("em",[e._v("QGroundControl")]),e._v("):")],1),e._v(" "),t("p",[t("code",[e._v("PREFLIGHT FAIL: EKF HGT ERROR")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("当 IMU 和高度测量数据不一致时会产生此错误。")]),e._v(" "),t("li",[e._v("执行加速度计和陀螺仪校准并重新启动飞行器。 如果错误仍然存在，请检查高度传感器数据是否存在问题。")]),e._v(" "),t("li",[e._v("检查由"),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_EKF_HGT"}},[e._v("COM_ARM_EKF_HGT")]),e._v("参数控制。")],1)]),e._v(" "),t("p",[t("code",[e._v("PREFLIGHT FAIL: EKF VEL ERROR")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("当 IMU 和 GPS 速度测量数据不一致时会产生此错误。")]),e._v(" "),t("li",[e._v("检查 GPS 速度数据是否存在不真实的数据跳转。 如果 GPS 质量看起来没有问题，请执行加速度计和陀螺仪校准并重新启动飞行器。")]),e._v(" "),t("li",[e._v("检查由"),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_EKF_VEL"}},[e._v("COM_ARM_EKF_VEL")]),e._v("参数控制。")],1)]),e._v(" "),t("p",[t("code",[e._v("PREFLIGHT FAIL: EKF HORIZ POS ERROR")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("当 IMU 和位置测量数据（GPS 或外部视觉）不一致时会产生此问题。")]),e._v(" "),t("li",[e._v("检查位置传感器数据是否存在不真实的数据跳转。 如果数据质量看起来不错，请执行加速度计和陀螺仪校准并重新启动飞行器。")]),e._v(" "),t("li",[e._v("检查由"),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_EKF_POS"}},[e._v("COM_ARM_EKF_POS")]),e._v("参数控制。")],1)]),e._v(" "),t("p",[t("code",[e._v("PREFLIGHT FAIL: EKF YAW ERROR")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("当使用陀螺仪数据估计的偏航角和来自磁力计或外部视觉系统的偏航角不一致时，产生该误差。")]),e._v(" "),t("li",[e._v("检查 IMU 数据是否存在较大的偏航率漂洗，并检查磁力计的对准和校准。")]),e._v(" "),t("li",[e._v("The check is controlled by the "),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_EKF_YAW"}},[e._v("COM_ARM_EKF_YAW")]),e._v(" parameter")],1),e._v(" "),t("li",[e._v("The default value of 0.5 allows the differences between the navigation yaw angle and magnetic yaw angle (magnetometer or external vision) to be no more than 50% of the maximum tolerated by the EKF and provides some margin for error increase when flight commences.")]),e._v(" "),t("li",[e._v("如果偏航陀螺仪有较大的偏移量，或者飞行器在存在磁干扰或者磁力计校准的情况下移动或者旋转，则可能会校准失败。")])]),e._v(" "),t("p",[t("code",[e._v("PREFLIGHT FAIL: EKF HIGH IMU ACCEL BIAS")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("当 EKF 估计的 IMU 加速度计偏差过大时，会产生此错误。")]),e._v(" "),t("li",[e._v("检查由"),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_EKF_AB"}},[e._v("COM_ARM_EKF_AB")]),e._v("参数控制。")],1)]),e._v(" "),t("p",[t("code",[e._v("PREFLIGHT FAIL: EKF HIGH IMU GYRO BIAS")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("当由 EKF 估计的 IMU 陀螺仪偏差过大时会产生该错误。")]),e._v(" "),t("li",[e._v("检查由"),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_EKF_GB"}},[e._v("COM_ARM_EKF_GB")]),e._v("参数控制。")],1)]),e._v(" "),t("p",[t("code",[e._v("PREFLIGHT FAIL: ACCEL SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("当来自不同 IMU 单元的加速度测量值不一致时，会产生此错误消息。")]),e._v(" "),t("li",[e._v("此检查仅适用于具有多个 IMU 的板。")]),e._v(" "),t("li",[e._v("检查由"),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_IMU_ACC"}},[e._v("COM_ARM_IMU_ACC")]),e._v("参数控制。")],1)]),e._v(" "),t("p",[t("code",[e._v("PREFLIGHT FAIL: GYRO SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("当来自不同 IMU 单元的角速率测量值不一致时，会产生此错误消息。")]),e._v(" "),t("li",[e._v("此检查仅适用于具有多个 IMU 的板。")]),e._v(" "),t("li",[e._v("检查由"),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_IMU_GYR"}},[e._v("COM_ARM_IMU_GYR")]),e._v("参数控制。")],1)]),e._v(" "),t("p",[t("code",[e._v("PREFLIGHT FAIL: COMPASS SENSORS INCONSISTENT - CHECK CALIBRATION")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("This error message is produced when the difference in measurements from different compass sensors is too great.")]),e._v(" "),t("li",[e._v("It indicates bad calibration, orientation or magnetic interference.")]),e._v(" "),t("li",[e._v("This check only applies to when more than one compass/magnetometer is connected.")]),e._v(" "),t("li",[e._v("The check is controlled by the "),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_MAG_ANG"}},[e._v("COM_ARM_MAG_ANG")]),e._v(" parameter.")],1)]),e._v(" "),t("p",[t("code",[e._v("PREFLIGHT FAIL: EKF INTERNAL CHECKS")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("如果水平 GPS 速度、偏航角、垂直 GPS 速度或者垂直位置传感器（气压计默认情况下可以使测距仪或 GPS ，如果使用非标准参数）其中之一新息过多，会产生此错误消息。 新息指的是惯性导航计算预测值与传感器测量值之间的差异。")]),e._v(" "),t("li",[e._v("用户应检查日志文件中新息级别以确定原因。 这些可以在"),t("code",[e._v("ekf2_innovations")]),e._v("消息下找到。 常见问题 / 解决方案包括：\n"),t("ul",[t("li",[e._v("IMU 启动时漂移。 可以通过重启自驾仪来解决。 可能需要 IMU 加速度计和陀螺仪校准。")]),e._v(" "),t("li",[e._v("相邻磁干扰在飞行器运动中。 通过等待或者重新上电解决。")]),e._v(" "),t("li",[e._v("磁力计校准不良在飞行器运动中。。 通过重新校准解决。")]),e._v(" "),t("li",[e._v("启动时的初始冲击或快速移动导致惯性导航失败。 通过重新启动飞行器并在前 5 秒内最大限度地减少移动来解决此问题。")])])])]),e._v(" "),t("h2",{attrs:{id:"其他参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他参数"}},[e._v("#")]),e._v(" 其他参数")]),e._v(" "),t("p",[e._v("The following parameters also affect preflight checks.")]),e._v(" "),t("h3",{attrs:{id:"com-arm-wo-gps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#com-arm-wo-gps"}},[e._v("#")]),e._v(" COM_ARM_WO_GPS")]),e._v(" "),t("p",[e._v("The "),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_WO_GPS"}},[e._v("COM_ARM_WO_GPS")]),e._v(" parameter controls whether or not arming is allowed without a global position estimate.")],1),e._v(" "),t("ul",[t("li",[t("code",[e._v("1")]),e._v("( 默认)："),t("em",[e._v("仅")]),e._v("对处于不需要获取位置信息的飞行模式时，即便没有位置估计也可以解锁。")]),e._v(" "),t("li",[e._v("0</0>：只有当 EKF 提供全球位置估计并且 EKF GPS 质量检查正在通过时，才允许解锁。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);