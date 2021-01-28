(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{2268:function(e,t,a){"use strict";a.r(t);var i=a(18),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"精准着陆"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#精准着陆"}},[e._v("#")]),e._v(" 精准着陆")]),e._v(" "),i("p",[e._v("PX4 支持多旋翼精准着陆（从 PX4 1.7.4版本），这一功能使用 "),i("a",{attrs:{href:"https://irlock.com/products/ir-lock-sensor-precision-landing-kit",target:"_blank",rel:"noopener noreferrer"}},[e._v("IR-LOCK 传感器"),i("OutboundLink")],1),e._v("和 IR 信标（如 "),i("a",{attrs:{href:"https://irlock.com/collections/markone",target:"_blank",rel:"noopener noreferrer"}},[e._v(" IR-LOCK MarkOne "),i("OutboundLink")],1),e._v(" ）以及朝下的距离传感器。 这使飞行器能以约 10 cm 的精度着陆（相比之下，GPS 的精度可能达到几米）。")]),e._v(" "),i("p",[e._v("精准着陆可由切换至 "),i("em",[e._v("精准着陆")]),e._v(" 飞行模式或作为 "),i("a",{attrs:{href:"#mission"}},[e._v("任务")]),e._v(" 的一部分来启动。")]),e._v(" "),i("h2",{attrs:{id:"设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[e._v("#")]),e._v(" 设置")]),e._v(" "),i("h3",{attrs:{id:"硬件安装"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[e._v("#")]),e._v(" 硬件安装")]),e._v(" "),i("p",[e._v("按照官方指南安装 IR-LOCK 传感器。 确保传感器的 x 轴与飞行器的 y 轴对齐，并且传感器的 y 轴与飞行器的 x 方向对齐（如果摄像头从正面朝下倾斜 90 度，则会出现这种情况）。")]),e._v(" "),i("p",[e._v("安装 "),i("RouterLink",{attrs:{to:"/zh/getting_started/sensor_selection.html#distance"}},[e._v("范围/距离传感器")]),e._v("（已发现 * LidarLite v3 * 效果良好）。")],1),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),i("p",[e._v("Many infrared based range sensors do not perform well in the presence of the IR-LOCK beacon. Refer to the IR-LOCK guide for other compatible sensors.")])]),e._v(" "),i("h3",{attrs:{id:"固件配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#固件配置"}},[e._v("#")]),e._v(" 固件配置")]),e._v(" "),i("p",[e._v("Precision landing requires the modules "),i("code",[e._v("irlock")]),e._v(" and "),i("code",[e._v("landing_target_estimator")]),e._v(", which are not included in the PX4 firmware by default. They can be included by adding (or uncommenting) the following lines in the relevant configuration file for your flight controller (e.g. "),i("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/boards/px4/fmu-v5/default.cmake"),i("OutboundLink")],1),e._v("):")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("drivers/irlock\nmodules/landing_target_estimator\n")])])]),i("p",[e._v("The two modules should also be started on system boot. For instructions see: "),i("RouterLink",{attrs:{to:"/zh/concept/system_startup.html#customizing-the-system-startup"}},[e._v("customizing the system startup")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"软件配置-参数"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#软件配置-参数"}},[e._v("#")]),e._v(" 软件配置（参数）")]),e._v(" "),i("p",[e._v("Precision landing is configured with the "),i("code",[e._v("landing_target_estimator")]),e._v(" and "),i("code",[e._v("navigator")]),e._v(' parameters, which are found in the "Landing target estimator" and "Precision land" groups, respectively. The most important parameters are discussed below.')]),e._v(" "),i("p",[e._v("The parameter "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LTEST_MODE"}},[e._v("LTEST_MODE")]),e._v(" determines if the beacon is assumed to be stationary or moving. If "),i("code",[e._v("LTEST_MODE")]),e._v(" is set to moving (e.g. it is installed on a vehicle on which the multicopter is to land), beacon measurements are only used to generate position setpoints in the precision landing controller. If "),i("code",[e._v("LTEST_MODE")]),e._v(" is set to stationary, the beacon measurements are also used by the vehicle position estimator (EKF2 or LPE).")],1),e._v(" "),i("p",[e._v("The parameters "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LTEST_SCALE_X"}},[e._v("LTEST_SCALE_X")]),e._v(" and "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LTEST_SCALE_Y"}},[e._v("LTEST_SCALE_Y")]),e._v(" can be used to scale beacon measurements before they are used to estimate the beacon's position and velocity relative to the vehicle. Measurement scaling may be necessary due to lens distortions of the IR-LOCK sensor. Note that "),i("code",[e._v("LTEST_SCALE_X")]),e._v(" and "),i("code",[e._v("LTEST_SCALE_Y")]),e._v(" are considered in the sensor frame, not the vehicle frame.")],1),e._v(" "),i("p",[e._v("To calibrate these scale parameters, set "),i("code",[e._v("LTEST_MODE")]),e._v(" to moving, fly your multicopter above the beacon and perform forward-backward and left-right motions with the vehicle, while "),i("RouterLink",{attrs:{to:"/zh/dev_log/logging.html#configuration"}},[e._v("logging")]),e._v(" "),i("code",[e._v("landing_target_pose")]),e._v(" and "),i("code",[e._v("vehicle_local_position")]),e._v(". Then, compare "),i("code",[e._v("landing_target_pose.vx_rel")]),e._v(" and "),i("code",[e._v("landing_target_pose.vy_rel")]),e._v(" to "),i("code",[e._v("vehicle_local_position.vx")]),e._v(" and "),i("code",[e._v("vehicle_local_position.vy")]),e._v(", respectively (both measurements are in NED frame). If the estimated beacon velocities are consistently smaller or larger than the vehicle velocities, adjust the scale parameters to compensate.")],1),e._v(" "),i("p",[e._v("If you observe slow sideways oscillations of the vehicle while doing a precision landing with "),i("code",[e._v("LTEST_MODE")]),e._v(" set to stationary, the beacon measurements are likely scaled too high and you should reduce the scale parameter in the relevant direction.")]),e._v(" "),i("h2",{attrs:{id:"精准降落模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#精准降落模式"}},[e._v("#")]),e._v(" 精准降落模式")]),e._v(" "),i("p",[e._v('A precision landing can be configured to either be "required" or "opportunistic". The choice of mode affects how a precision landing is performed.')]),e._v(" "),i("h3",{attrs:{id:"必须的模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#必须的模式"}},[e._v("#")]),e._v(" 必须的模式")]),e._v(" "),i("p",[e._v("In "),i("em",[e._v("Required Mode")]),e._v(" the vehicle will search for a beacon if none is visible when landing is initiated. The vehicle will perform a precision landing if a beacon is located.")]),e._v(" "),i("p",[e._v("The search procedure consists of climbing to the search altitude ("),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PLD_SRCH_ALT"}},[e._v("PLD_SRCH_ALT")]),e._v("). If the beacon is still not visible at the search altitude and after a search timeout ("),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PLD_SRCH_TOUT"}},[e._v("PLD_SRCH_TOUT")]),e._v("), a normal landing is initiated at the current position.")],1),e._v(" "),i("h3",{attrs:{id:"随机的模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#随机的模式"}},[e._v("#")]),e._v(" 随机的模式")]),e._v(" "),i("p",[e._v("In "),i("em",[e._v("Opportunistic Mode")]),e._v(" the vehicle will use precision landing "),i("em",[e._v("if")]),e._v(" (and only if) the beacon is visible when landing is initiated. If it is not visible the vehicle immediately performs a "),i("em",[e._v("normal")]),e._v(" landing at the current position.")]),e._v(" "),i("h2",{attrs:{id:"执行精准着陆"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#执行精准着陆"}},[e._v("#")]),e._v(" 执行精准着陆")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),i("p",[e._v("Due to a limitation in the current implementation of the position controller, precision landing is only possible with a valid global position.")])]),e._v(" "),i("h3",{attrs:{id:"通过命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#通过命令"}},[e._v("#")]),e._v(" 通过命令")]),e._v(" "),i("p",[e._v("Precision landing can be initiated through the command line interface with")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("commander mode auto:precland\n")])])]),i("p",[e._v('In this case, the precision landing is always considered "required".')]),e._v(" "),i("p",[i("span",{attrs:{id:"mission"}})]),e._v(" "),i("h3",{attrs:{id:"在任务中"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#在任务中"}},[e._v("#")]),e._v(" 在任务中")]),e._v(" "),i("p",[e._v("Precision landing can be initiated as part of a "),i("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[e._v("mission")]),e._v(" using "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_NAV_LAND"),i("OutboundLink")],1),e._v(" with "),i("code",[e._v("param2")]),e._v(" set appropriately:")],1),e._v(" "),i("ul",[i("li",[i("code",[e._v("param2")]),e._v(" = 0: 正常着陆而不使用信标。")]),e._v(" "),i("li",[i("code",[e._v("param2")]),e._v(" = 1："),i("em",[e._v("随机的")]),e._v(" 精准着陆。")]),e._v(" "),i("li",[i("code",[e._v("param2")]),e._v(" = 2："),i("em",[e._v("必需的")]),e._v(" 精准着陆。")])]),e._v(" "),i("h2",{attrs:{id:"仿真"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#仿真"}},[e._v("#")]),e._v(" 仿真")]),e._v(" "),i("p",[e._v("Precision landing with the IR-LOCK sensor and beacon can be simulated in "),i("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[e._v("SITL Gazebo")]),e._v(".")],1),e._v(" "),i("p",[e._v("To start the simulation with the world that contains a IR-LOCK beacon and a vehicle with a range sensor and IR-LOCK camera, run:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("make px4_sitl gazebo_iris_irlock\n")])])]),i("p",[e._v("You can change the location of the beacon either by moving it in the Gazebo GUI or by changing its location in the "),i("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/worlds/iris_irlock.world#L42",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gazebo world"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"工作原理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[e._v("#")]),e._v(" 工作原理")]),e._v(" "),i("h3",{attrs:{id:"着陆目标估计器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#着陆目标估计器"}},[e._v("#")]),e._v(" 着陆目标估计器")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("landing_target_estimator")]),e._v(" takes measurements from the "),i("code",[e._v("irlock")]),e._v(" driver as well as the estimated terrain height to estimate the beacon's position relative to the vehicle.")]),e._v(" "),i("p",[e._v("The measurements in "),i("code",[e._v("irlock_report")]),e._v(' contain the tangent of the angles from the image center to the beacon. In other words, the measurements are the x and y components of the vector pointing towards the beacon, where the z component has length "1". This means that scaling the measurement by the distance from the camera to the beacon results in the vector from the camera to the beacon. This relative position is then rotated into the north-aligned, level body frame using the vehicle\'s attitude estimate. Both x and y components of the relative position measurement are filtered in separate Kalman Filters, which act as simple low-pass filters that also produce a velocity estimate and allow for outlier rejection.')]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("landing_target_estimator")]),e._v(" publishes the estimated relative position and velocity whenever a new "),i("code",[e._v("irlock_report")]),e._v(" is fused into the estimate. Nothing is published if the beacon is not seen or beacon measurements are rejected. The landing target estimate is published in the "),i("code",[e._v("landing_target_pose")]),e._v(" uORB message.")]),e._v(" "),i("h3",{attrs:{id:"改进的飞行器位置估计"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#改进的飞行器位置估计"}},[e._v("#")]),e._v(" 改进的飞行器位置估计")]),e._v(" "),i("p",[e._v("If the beacon is specified to be stationary using the parameter "),i("code",[e._v("LTEST_MODE")]),e._v(", the vehicle's position/velocity estimate can be improved with the help of the beacon measurements. This is done by fusing the beacon's velocity as a measurement of the negative velocity of the vehicle.")]),e._v(" "),i("h3",{attrs:{id:"精准着陆过程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#精准着陆过程"}},[e._v("#")]),e._v(" 精准着陆过程")]),e._v(" "),i("p",[e._v("The precision land procedure consists of three phases:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("**水平接近：**飞行器在保持其当前高度的同时水平接近信标。 一旦信标相对于车辆的位置差异低于阈值（"),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PLD_HACC_RAD"}},[e._v(" PLD_HACC_RAD ")]),e._v("），就进入下一阶段。 如果信标在此阶段丢失（不可见超过时长"),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PLD_BTOUT"}},[e._v(" PLD_BTOUT ")]),e._v("），则启动搜索程序（在必须的精准降落模式）或飞行器正常着陆（在随机的精准降落模式）。")],1)]),e._v(" "),i("li",[i("p",[e._v("**信标上方降落：**飞行器下降，同时保持在信标中心上方。 如果信标在此阶段丢失（不可见超过时长"),i("code",[e._v("PLD_BTOUT")]),e._v("），则启动搜索程序（在必须的精准降落模式）或飞行器正常着陆（在随机的精准降落模式）。")])]),e._v(" "),i("li",[i("p",[e._v("**最终接近：**当飞行器接近地面（高度小于"),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PLD_FAPPR_ALT"}},[e._v(" PLD_FAPPR_ALT ")]),e._v("）时，飞行器会下降，同时保持在信标中心上方。 如果信标在此阶段丢失，则会继续下降，与精准着陆的类型无关。")],1)])]),e._v(" "),i("p",[e._v("Search procedures are initiated in 1. and 2. a maximum of "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PLD_MAX_SRCH"}},[e._v("PLD_MAX_SRCH")]),e._v(" times.")],1),e._v(" "),i("p",[i("img",{attrs:{src:a(463),alt:"Precision Landing Flow Diagram"}})])])}),[],!1,null,null,null);t.default=r.exports},463:function(e,t,a){e.exports=a.p+"assets/img/precland-flow-diagram.88e4e6cb.png"}}]);