(window.webpackJsonp=window.webpackJsonp||[]).push([[859],{3337:function(e,t,o){"use strict";o.r(t);var a=o(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"visual-inertial-odometry-vio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-inertial-odometry-vio"}},[e._v("#")]),e._v(" Visual Inertial Odometry (VIO)")]),e._v(" "),a("p",[a("em",[e._v("视觉惯性里程计测距")]),e._v("（VIO）是一种"),a("RouterLink",{attrs:{to:"/zh/computer_vision/"}},[e._v("计算机视觉")]),e._v("技术，用于估算3D"),a("em",[e._v("姿态")]),e._v("（local 位置和方向），相对于 "),a("em",[e._v("local")]),e._v(" 起始位置的移动的机体 "),a("em",[e._v("速度")]),e._v("。 它通常用于在GPS不存在或不可靠的情况下（例如室内或在桥下飞行时）给载具导航。")],1),e._v(" "),a("p",[e._v("VIO使用"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[e._v("视觉测距法"),a("OutboundLink")],1),e._v("从相机图像中估计机身"),a("em",[e._v("姿态")]),e._v("，并结合机身IMU的惯性测量（以校正因不良的图像捕获导致的机身快速移动的错误）。")]),e._v(" "),a("p",[e._v("This topic gives guidance on configuring PX4 and a companion computer for a VIO setup.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The suggested setup uses ROS for routing VIO information to PX4. However, PX4 itself does not care about the source of messages, provided they are provided via the appropriate "),a("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html#px4-mavlink-integration"}},[e._v("MAVLink Interface")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"suggested-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suggested-setup"}},[e._v("#")]),e._v(" Suggested Setup")]),e._v(" "),a("p",[e._v("A hardware and software setup for VIO is suggested in the sections below as an illustration of how to interface a VIO system with PX4. It makes use of an off-the-shelf tracking camera and a companion computer running ROS. ROS is used to read odometry information from the camera and supply it to PX4.")]),e._v(" "),a("p",[e._v("An example of a suitable tracking camera is the "),a("RouterLink",{attrs:{to:"/zh/peripherals/camera_t265_vio.html"}},[e._v("Intel® RealSense™ Tracking Camera T265")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"相机安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机安装"}},[e._v("#")]),e._v(" 相机安装")]),e._v(" "),a("p",[e._v("将相机连接到机载计算机并将其安装到机架上：")]),e._v(" "),a("ul",[a("li",[e._v("尽可能使镜头朝下安装相机（默认）。")]),e._v(" "),a("li",[e._v("Cameras are typically very sensitive to vibration; a soft mounting is recommended (e.g. using vibration isolation foam).")])]),e._v(" "),a("h3",{attrs:{id:"companion-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#companion-setup"}},[e._v("#")]),e._v(" Companion Setup")]),e._v(" "),a("p",[e._v("To setup ROS and PX4:")]),e._v(" "),a("ul",[a("li",[e._v("在机载计算机上安装和配置 "),a("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[e._v("MAVROS")]),e._v("。")],1),e._v(" "),a("li",[e._v("Implement and run a ROS node to read data from the camera and publish the VIO odometry using MAVROS.\n"),a("ul",[a("li",[e._v("See the "),a("a",{attrs:{href:"#vio_ros_node"}},[e._v("VIO ROS node")]),e._v(" section below for details of the requirements for this node.")])])]),e._v(" "),a("li",[e._v("按照"),a("a",{attrs:{href:"#ekf2_tuning"}},[e._v("下方")]),e._v("的说明调整 PX4 EKF2 估计器。")]),e._v(" "),a("li",[e._v("验证与飞控的连接。")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("您可以使用*QGroundControl *  中的"),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v(" MAVLink Inspector"),a("OutboundLink")],1),e._v("来验证是否收到"),a("code",[e._v("ODOMETRY")]),e._v("或"),a("code",[e._v("VISION_POSITION_ESTIMATE")]),e._v("消息（或检查是否存在 "),a("code",[e._v("HEARTBEAT")]),e._v("消息，其组件ID为197（"),a("code",[e._v("MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY")]),e._v("）。")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#verify_estimate"}},[e._v("Verify that VIO is set up correctly")]),e._v(" before your first flight!")])]),e._v(" "),a("p",[a("a",{attrs:{id:"vio_ros_node"}})]),e._v(" "),a("h3",{attrs:{id:"ros-vio-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-vio-node"}},[e._v("#")]),e._v(" ROS VIO node")]),e._v(" "),a("p",[e._v("In this suggested setup, a ROS node is required to")]),e._v(" "),a("ol",[a("li",[e._v("interface with the chosen camera or sensor hardware,")]),e._v(" "),a("li",[e._v("produce odometry messages containing the position estimate, which will be sent to PX4 using MAVROS, and")]),e._v(" "),a("li",[e._v("publish messages to indicate the VIO system status.")])]),e._v(" "),a("p",[e._v("The implementation of the ROS node will be specific to the camera used and will need to be developed to use the interface and drivers appropriate for the camera.")]),e._v(" "),a("p",[e._v("The odometry messages should be of the type "),a("a",{attrs:{href:"http://docs.ros.org/en/noetic/api/nav_msgs/html/msg/Odometry.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("nav_msgs/Odometry")]),a("OutboundLink")],1),e._v(" and published to the topic "),a("code",[e._v("/mavros/odometry/out")]),e._v(".")]),e._v(" "),a("p",[e._v("System status messages of the type "),a("a",{attrs:{href:"https://github.com/mavlink/mavros/blob/master/mavros_msgs/msg/CompanionProcessStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("mavros_msgs/CompanionProcessStatus")]),a("OutboundLink")],1),e._v(" should be published to the topic "),a("code",[e._v("/mavros/companion_process/status")]),e._v(". These should identify the component as "),a("code",[e._v("MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY")]),e._v(" (197) and indicate the "),a("code",[e._v("state")]),e._v(" of the system. Recommended status values are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("MAV_STATE_ACTIVE")]),e._v(" when the VIO system is functioning as expected,")]),e._v(" "),a("li",[a("code",[e._v("MAV_STATE_CRITICAL")]),e._v(" when the VIO system is functioning, but with low confidence, and")]),e._v(" "),a("li",[a("code",[e._v("MAV_STATE_FLIGHT_TERMINATION")]),e._v(" when the system has failed or the estimate confidence is unacceptably low.")])]),e._v(" "),a("p",[a("a",{attrs:{id:"ekf2_tuning"}})]),e._v(" "),a("h3",{attrs:{id:"px4-调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-调试"}},[e._v("#")]),e._v(" PX4 调试")]),e._v(" "),a("p",[e._v("将相机连接到机载计算机并将其安装到框架：")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("外部位置估计的设置")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_EV_CTRL"}},[e._v("EKF2_EV_CTRL")])],1),e._v(" "),a("td",[e._v("Set "),a("em",[e._v("horizontal position fusion")]),e._v(", "),a("em",[e._v("vertical vision fusion")]),e._v(", "),a("em",[e._v("velocity fusion")]),e._v(", and "),a("em",[e._v("yaw fusion")]),e._v(" according to your desired fusion model.")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_HGT_REF"}},[e._v("EKF2_HGT_REF")])],1),e._v(" "),a("td",[e._v("设置为 "),a("em",[e._v("Vision")]),e._v(" 以使用视觉作为高度估计的主要来源。")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[e._v("EKF2_EV_DELAY")])],1),e._v(" "),a("td",[e._v('设置为测量的时间戳和 "实际" 捕获时间之间的差异。 有关详细信息，请参阅 '),a("a",{attrs:{href:"#tuning-EKF2_EV_DELAY"}},[e._v("below")]),e._v("。")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_EV_POS_X"}},[e._v("EKF2_EV_POS_X")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_EV_POS_Y"}},[e._v("EKF2_EV_POS_Y")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_EV_POS_Z"}},[e._v("EKF2_EV_POS_Z")])],1),e._v(" "),a("td",[e._v("Set the position of the vision sensor with respect to the vehicle's body frame.")])])])]),e._v(" "),a("p",[e._v("这些参数可以在"),a("em",[e._v("QGroundControl")]),e._v(">"),a("strong",[e._v("Vehicle Setup > Parameters > EKF2")]),e._v("中设置（切记要使参数更改生效需要重启飞控）。")]),e._v(" "),a("p",[e._v("更多详情/附加信息，见： "),a("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[e._v("ECL/EKF 概述 & 调试 > 外部视觉系统")]),e._v("。")],1),e._v(" "),a("p",[a("a",{attrs:{id:"tuning-EKF2_EV_DELAY"}})]),e._v(" "),a("h4",{attrs:{id:"ekf2-ev-delay-调参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ekf2-ev-delay-调参"}},[e._v("#")]),e._v(" EKF2_EV_DELAY 调参")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[e._v("EKF2_EV_DELAY")]),e._v(" is the "),a("em",[e._v("Vision Position Estimator delay relative to IMU measurements")]),e._v(". 换而言之，这是视觉系统时间戳和 IMU 时钟（ EKF2 “时基” ）记录的“实际”捕获时间之间的差异。")],1),e._v(" "),a("p",[e._v("Technically this can be set to 0 if there is correct timestamping (not just arrival time) and timesync (e.g. NTP) between MoCap and (for example) ROS computers. 实际应用中，这可能需要进行一些基于经验的调整，因为通信链路中的延迟与具体设置非常相关。 It is rare that a system is set up with an entirely synchronised chain!")]),e._v(" "),a("p",[e._v("通过检查 IMU 速率和 EV 速率之间的偏移，可以从日志中获取对延迟的粗略估计：")]),e._v(" "),a("p",[a("img",{attrs:{src:o(383),alt:"ekf2_ev_delay 日志"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("注意 可以使用 "),a("RouterLink",{attrs:{to:"/zh/dev_log/flight_log_analysis.html#flightplot"}},[e._v("FlightPlot")]),e._v(" 或类似的飞行分析工具生成一组外部数据与板载估计（如上）。")],1)]),e._v(" "),a("p",[e._v("可以通过更改参数来进一步调整该值，以找到在动态变化中最低的 EKF 更新值。")]),e._v(" "),a("p",[a("a",{attrs:{id:"verify_estimate"}})]),e._v(" "),a("h2",{attrs:{id:"检查-校验-vio-估计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查-校验-vio-估计"}},[e._v("#")]),e._v(" 检查/校验 VIO 估计")]),e._v(" "),a("p",[e._v("执行以下检查，以确保在首次飞行"),a("em",[e._v("之前")]),e._v(" VIO 正常运行：")]),e._v(" "),a("ul",[a("li",[e._v("设置 PX4 参数 "),a("code",[e._v("MAV_ODOM_LP")]),e._v(" 为1。 然后PX4将接收到的外部姿态用MAVLink"),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ODOMETRY",target:"_blank",rel:"noopener noreferrer"}},[e._v("ODOMETRY"),a("OutboundLink")],1),e._v("消息回传。 您可以使用 "),a("em",[e._v("QGroundControl")]),e._v(" 中的 "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Inspector"),a("OutboundLink")],1),e._v(" 查看这些MAVLink 消息。")]),e._v(" "),a("li",[e._v("偏航机身，直到"),a("code",[e._v("ODOMETRY")]),e._v("消息的四元数非常接近单位四元数（w = 1，x = y = z = 0）。\n"),a("ul",[a("li",[e._v("At this point, the body frame is aligned with the reference frame of the external pose system.")]),e._v(" "),a("li",[e._v("如果在不使横滚或俯仰的情况下无法使四元数接近单位四元数，则机架可能仍存在俯仰或滚动偏移。 这种情况下不要再检查机架坐标系。")])])]),e._v(" "),a("li",[e._v("Once aligned, you can pick the vehicle up from the ground and you should see the position's z coordinate decrease. Moving the vehicle in the forward direction should increase the position's x coordinate. Moving the vehicle to the right should increase the y coordinate.")]),e._v(" "),a("li",[e._v("Check that linear velocities in the message are expressed in the "),a("em",[e._v("FRD")]),e._v(" body frame reference frame.")]),e._v(" "),a("li",[e._v("设置 PX4 参数 "),a("code",[e._v("MAV_ODOM_LP")]),e._v(" 为 0。 PX4 将停止 "),a("code",[e._v("ODOMETRY")]),e._v(" 消息回传。")])]),e._v(" "),a("p",[e._v("可以通过更改参数来进一步调整该值，以找到在动态变化中最低的EKF更新值。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("将无人机放在地面上，并开始流式传输"),a("code",[e._v("ODOMETRY")]),e._v("反馈（如上所述）。 油门杆推到最低并解锁。")]),e._v(" "),a("p",[e._v("此时，设置为位置控制模式。 如果切换成功，飞控会闪绿灯。 绿灯代表：你的外部位置信息已经注入到飞控中，并且位置控制模式已经切换成功。")])]),e._v(" "),a("li",[a("p",[e._v("油门杆放到中间位置（死区），以便无人机保持飞行高度。 提高操控杆会增加参考高度，降低操控杆会降低参考高度。 Similarly, the other stick will change the position over the ground.")])]),e._v(" "),a("li",[a("p",[e._v("Increase the value of the throttle stick and the vehicle will take off. Move it back to the middle immediately afterwards.")])]),e._v(" "),a("li",[a("p",[e._v("确保无人机可以保持位置。")])])]),e._v(" "),a("h2",{attrs:{id:"故障处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障处理"}},[e._v("#")]),e._v(" 故障处理")]),e._v(" "),a("p",[e._v("First, make sure MAVROS is able to connect successfully to the flight controller.")]),e._v(" "),a("p",[e._v("如果连接正确， 常见问题 / 解决方案是：")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("问题：")]),e._v(" 当无人机飞行时发生漂移/飞走，但是当拿掉螺旋桨时不会发生漂移。")]),e._v(" "),a("ul",[a("li",[e._v("If using the "),a("RouterLink",{attrs:{to:"/zh/peripherals/camera_t265_vio.html"}},[e._v("T265")]),e._v(" try soft-mounting it (this camera is very sensitive to high-frequency vibrations).")],1)])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("问题：")]),e._v(" 启用 VIO 时产生了马桶效应。")]),e._v(" "),a("ul",[a("li",[e._v("确保相机的方向与启动文件中的变换匹配。 使用 "),a("em",[e._v("QGroundControl")]),e._v(" 中的 "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Inspector"),a("OutboundLink")],1),e._v(" 验证来自 MAVROS 的 "),a("code",[e._v("ODOMETRY")]),e._v(" 消息中的速度是否与 FRD (前右下)坐标系一致。")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("问题：")]),e._v(" 想使用视觉位置来做闭环，也想运行 GPS 。")]),e._v(" "),a("ul",[a("li",[e._v("这确实很困难，因为当他们不同意时，就会混淆 EKF。 通过测试，仅使用视觉速度更为可靠（如果您想出一种使该配置可靠的方法，请告诉我们）。")])])])]),e._v(" "),a("h2",{attrs:{id:"开发人员信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发人员信息"}},[e._v("#")]),e._v(" 开发人员信息")]),e._v(" "),a("p",[e._v("对扩展此实现感兴趣的开发人员（或编写另一种不依赖 ROS 的实现）应该看看 "),a("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html"}},[e._v("使用视觉或运动捕获系统进行位置估计")]),e._v("。")],1),e._v(" "),a("p",[e._v("本主题还说明了如何配置 VIO 来配合 LPE 估计器 一起使用（不推荐）。")]),e._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[e._v("#")]),e._v(" 更多信息")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[e._v("ECL/EKF 概述 & 调试 > 外部视觉系统")])],1)])])}),[],!1,null,null,null);t.default=r.exports},383:function(e,t,o){e.exports=o.p+"assets/img/ekf2_ev_delay_tuning.fb81d6d1.png"}}]);