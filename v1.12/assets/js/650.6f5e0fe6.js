(window.webpackJsonp=window.webpackJsonp||[]).push([[650],{2366:function(t,_,e){"use strict";e.r(_);var a=e(19),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"视觉惯性里程计-vio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视觉惯性里程计-vio"}},[t._v("#")]),t._v(" 视觉惯性里程计（VIO）")]),t._v(" "),a("p",[a("em",[t._v("视觉惯性里程计测距")]),t._v("（VIO）是一种"),a("RouterLink",{attrs:{to:"/zh/computer_vision/"}},[t._v("计算机视觉")]),t._v("技术，用于估算3D"),a("em",[t._v("姿态")]),t._v("（local 位置和方向），相对于 "),a("em",[t._v("local")]),t._v(" 起始位置的移动的机体 "),a("em",[t._v("速度")]),t._v("。 它通常用于在GPS不存在或不可靠的情况下（例如室内或在桥下飞行时）给载具导航。")],1),t._v(" "),a("p",[t._v("VIO 使用 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[t._v("视觉里程计（Visual Odometry）"),a("OutboundLink")],1),t._v(" 从相机图像中估计机身"),a("em",[t._v("姿态")]),t._v("，并结合机身IMU的惯性测量（以校正因不良的图像捕获导致的机身快速移动的错误）。")]),t._v(" "),a("p",[t._v("本节说明如何通过设置 PX4 和机载计算机来使用"),a("em",[t._v("已支持的")]),t._v(" VIO 配置。")]),t._v(" "),a("iframe",{attrs:{width:"650",height:"365",src:"https://www.youtube.com/embed/gWtrka2mK7U",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",mark:"crwd-mark"}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("上面的"),a("a",{attrs:{href:"https://auterion.com/enabling_uav_navigation_in_environments_with_limited_or_no_gps_signal/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Auterion 产品视频"),a("OutboundLink")],1),t._v(" 展示了一个无人机飞行使用了"),a("a",{attrs:{href:"#supported_setup"}},[t._v("支持的设置")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Note 这个（支持的）解决方案使用 ROS 来路由 VIO 信息到 PX4 。 PX4 本身并不关心消息源，通过 "),a("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html#px4-mavlink-integration"}},[t._v("MAVLink接口")]),t._v(" 提供消息就行。")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"supported_setup"}})]),t._v(" "),a("h2",{attrs:{id:"支持的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的配置"}},[t._v("#")]),t._v(" 支持的配置")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("上面的"),a("a",{attrs:{href:"https://auterion.com/enabling_uav_navigation_in_environments_with_limited_or_no_gps_signal/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Auterion 产品视频"),a("OutboundLink")],1),t._v(" 展示了一个无人机飞行使用了")]),t._v(" "),a("p",[t._v("支持的设置</0>。 :::")]),a("p"),t._v(" "),a("h3",{attrs:{id:"相机安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机安装"}},[t._v("#")]),t._v(" 相机安装")]),t._v(" "),a("p",[t._v("将相机连接到机载计算机并将其安装到机架上：")]),t._v(" "),a("ul",[a("li",[t._v("使用提供的线缆连接 "),a("RouterLink",{attrs:{to:"/zh/peripherals/camera_t265_vio.html"}},[t._v("T265 Intel Realse 追踪摄像头")]),t._v("。")],1),t._v(" "),a("li",[t._v("尽可能使镜头朝下安装相机（默认）。")]),t._v(" "),a("li",[t._v("该相机对振动非常敏感，建议软安装（例如使用振动隔离海绵）。")])]),t._v(" "),a("h3",{attrs:{id:"ros-vio-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-vio-安装"}},[t._v("#")]),t._v(" ROS/VIO 安装")]),t._v(" "),a("p",[t._v("设置桥接，ROS 和 PX4：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在机载计算机上安装和配置 "),a("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v("。")],1)]),t._v(" "),a("li",[a("p",[t._v("获取 Auterion "),a("a",{attrs:{href:"https://github.com/Auterion/VIO_bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("VIO Bridge ROS 节点"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("从仓库中克隆代码到你的 catkin 工作空间。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd ~/catkin_ws/src\ngit clone https://github.com/Auterion/VIO.git\n")])])]),a("ul",[a("li",[a("p",[t._v("构建软件包:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd ~/catkin_ws/src\ncatkin building px4_realsense_bridge\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("如果需要，配置摄像头方向：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果摄像机的镜头朝下安装（默认设置），则VIO桥接器不需要任何配置。")])]),t._v(" "),a("li",[a("p",[t._v("对于任何其他方向，请在以下部分中修改"),a("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v(" bridge_mavros.launch "),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pkg")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("static_transform_publisher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tf_baseLink_cameraPose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0 0 0 0 1.5708 0 base_link camera_pose_frame 1000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])])])]),t._v(" "),a("p",[t._v("这是将摄像机ROS帧"),a("code",[t._v("camera_pose_frame")]),t._v("链接到mavros无人机帧"),a("code",[t._v("base_link")]),t._v("的静态转换。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("前三个"),a("code",[t._v("参数")]),t._v("指定"),a("em",[t._v("解释")]),t._v("为从飞控中心到摄像机的 x，y，z方向，以米为单位。 例如，如果摄像头在飞控前方10cm，上方4cm,  则前三个数字将是：[0.1, 0, 0.04 ...]")])]),t._v(" "),a("li",[a("p",[t._v("接下来的三个 "),a("code",[t._v("参数")]),t._v(" 是旋转弧度(偏航, 俯仰, 横滚)。 所以 "),a("code",[t._v("[... 0, 1.5708, 0]")]),t._v(" 是向下俯仰90度(朝向地面)。 直面是 [... 0 0 0]。")])]),t._v(" "),a("li",[a("p",[t._v("按照"),a("a",{attrs:{href:"#ekf2_tuning"}},[t._v("下方")]),t._v("的说明调整 PX4 EKF2 估计器。")])]),t._v(" "),a("li",[a("p",[t._v("通过使用适当的启动文件调用 "),a("code",[t._v("roslaunch")]),t._v(" 来运行VIO：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd ~/catkin_ws/src\nroslaunched px4_realsense_bridge_mavros.launch\n")])])])])]),t._v(" "),a("p",[t._v("启动文件选项是：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge_mavros.launch"),a("OutboundLink")],1),t._v(": 在大多数情况下在无人机/无人车上使用(启动桥桥接和MAVROS)。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge.launch"),a("OutboundLink")],1),t._v(": 如果其他组件负责启动 MAVROS（仅启动桥接），则使用")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge_mavros_sitl.launch"),a("OutboundLink")],1),t._v(":用于模拟仿真(启动桥接, MAVROS, SITL)")]),t._v(" "),a("li",[t._v("验证与飞控的连接。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("您可以使用*QGroundControl *  "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" MAVLink检查器"),a("OutboundLink")],1),t._v("来验证是否收到"),a("code",[t._v("ODOMETRY")]),t._v("或"),a("code",[t._v("VISION_POSITION_ESTIMATE")]),t._v("消息（或检查是否存在 "),a("code",[t._v("HEARTBEAT")]),t._v("消息，其组件ID为197（"),a("code",[t._v("MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY")]),t._v("）。")])])]),t._v(" "),a("ul",[a("li",[t._v("在第一次飞行前 "),a("a",{attrs:{href:"#verify_estimate"}},[t._v("确认 VIO 设置正确")]),t._v("！")])]),t._v(" "),a("p",[a("a",{attrs:{id:"ekf2_tuning"}})]),t._v(" "),a("h3",{attrs:{id:"px4-调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-调试"}},[t._v("#")]),t._v(" PX4 调试")]),t._v(" "),a("p",[t._v("将相机连接到机载计算机并将其安装到框架：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("外部位置估计的设置")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")])],1),t._v(" "),a("td",[t._v("设置 "),a("em",[t._v("视觉位置合成")]),t._v(" 和 "),a("em",[t._v("视觉偏航合成")])])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[t._v("EKF2_HGT_MODE")])],1),t._v(" "),a("td",[t._v("设置为 "),a("em",[t._v("Vision")]),t._v(" 使用视觉作为高度估计的主要来源。")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[t._v("EKF2_EV_DELAY")])],1),t._v(" "),a("td",[t._v('设置为测量的时间戳和 "实际" 捕获时间之间的差异。 有关详细信息，请参阅 '),a("a",{attrs:{href:"#tuning-EKF2_EV_DELAY"}},[t._v("below")]),t._v("。")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#EKF2_EV_POS_X"}},[t._v("EKF2_EV_POS_X")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#EKF2_EV_POS_Y"}},[t._v("EKF2_EV_POS_Y")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#EKF2_EV_POS_Z"}},[t._v("EKF2_EV_POS_Z")])],1),t._v(" "),a("td",[t._v("设置视觉传感器相对于车身框架的位置。")])])])]),t._v(" "),a("p",[t._v("这些参数可以在"),a("em",[t._v("QGroundControl")]),t._v(">"),a("strong",[t._v("Vehicle Setup > Parameters > EKF2")]),t._v("中设置（切记要使参数更改生效需要重启飞控）。")]),t._v(" "),a("p",[t._v("更多详情/附加信息，见： "),a("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("ECL/EKF 概述 & 调试 > 外部视觉系统")]),t._v("。")],1),t._v(" "),a("p",[a("a",{attrs:{id:"tuning-EKF2_EV_DELAY"}})]),t._v(" "),a("h4",{attrs:{id:"ekf2-ev-delay-调参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ekf2-ev-delay-调参"}},[t._v("#")]),t._v(" EKF2_EV_DELAY 调参")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[t._v("EKF2_EV_DELAY")]),t._v("是"),a("em",[t._v("相对于 IMU 测量值的视觉位置估算器的延迟")]),t._v(" 。 换而言之，这是视觉系统时间戳和 IMU 时钟（ EKF2 “时基” ）记录的“实际”捕获时间之间的差异。")],1),t._v(" "),a("p",[t._v("从技术上讲，如果 MoCap 和（例如）ROS 计算机之间有正确的时间戳（而不仅仅是到达时间）和时间同步（例如 NTP ），则可以将其设置为0。 实际上，由于通信链路的延迟非常特殊，这可能需要一些经验来调整。 系统设置完全同步链的情况很少见!")]),t._v(" "),a("p",[t._v("通过检查 IMU 速率和 EV 速率之间的偏移，可以从日志中获取对延迟的粗略估计：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(365),alt:"ekf2_ev_delay 日志"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("注意 可以使用 "),a("RouterLink",{attrs:{to:"/zh/dev_log/flight_log_analysis.html#flightplot"}},[t._v("FlightPlot")]),t._v(" 或类似的飞行分析工具生成一组外部数据与板载估计（如上）。")],1)]),t._v(" "),a("p",[t._v("可以通过更改参数来进一步调整该值，以找到在动态变化中最低的 EKF 更新值。")]),t._v(" "),a("p",[a("a",{attrs:{id:"verify_estimate"}})]),t._v(" "),a("h2",{attrs:{id:"检查-校验-vio-估计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查-校验-vio-估计"}},[t._v("#")]),t._v(" 检查/校验 VIO 估计")]),t._v(" "),a("p",[t._v("执行以下检查，以确保在首次飞行"),a("em",[t._v("之前")]),t._v(" VIO 正常运行：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("设置 PX4 参数 "),a("code",[t._v("MAV_ODOM_LP")]),t._v(" 为1。 然后PX4将接收到的外部姿态用MAVLink"),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ODOMETRY",target:"_blank",rel:"noopener noreferrer"}},[t._v("ODOMETRY"),a("OutboundLink")],1),t._v("消息回传。 您可以使用 "),a("em",[t._v("QGroundControl")]),t._v(" "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 检查器"),a("OutboundLink")],1),t._v(" 查看这些MAVLink 消息")])]),t._v(" "),a("li",[a("p",[t._v("偏航机身，直到"),a("code",[t._v("ODOMETRY")]),t._v("消息的四元数非常接近单位四元数（w = 1，x = y = z = 0）。")]),t._v(" "),a("ul",[a("li",[t._v("在这一点上，机架与外部姿态系统的参考机架一致。")]),t._v(" "),a("li",[t._v("如果在不使横滚或俯仰的情况下无法使四元数接近单位四元数，则机架可能仍存在俯仰或滚动偏移。 这种情况下不要再检查机架坐标系。")])])]),t._v(" "),a("li",[a("p",[t._v("对齐后，将机架抬离地面，应该看到位置的z坐标减小。 向前移动无人机，应该增加位置的 x 坐标。 向右移动无人机时，应增加 y 坐标。")])]),t._v(" "),a("li",[a("p",[t._v("检查消息中的线性速度是否以 "),a("em",[t._v("FRD")]),t._v(" 机架参照系表示。")])]),t._v(" "),a("li",[a("p",[t._v("设置 PX4 参数 "),a("code",[t._v("MAV_ODOM_LP")]),t._v(" 为 0。 PX4 将停止 "),a("code",[t._v("ODOMETRY")]),t._v(" 消息回传。")])])]),t._v(" "),a("p",[t._v("可以通过更改参数来进一步调整该值，以找到在动态变化中最低的EKF更新值。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("将无人机放在地面上，并开始流式传输"),a("code",[t._v("ODOMETRY")]),t._v("反馈（如上所述）。 油门杆推到最低并解锁。")]),t._v(" "),a("p",[t._v("此时，设置为位置控制模式。 如果切换成功，飞控会闪绿灯。 绿灯代表：你的外部位置信息已经注入到飞控中，并且位置控制模式已经切换成功。")])]),t._v(" "),a("li",[a("p",[t._v("油门杆放到中间位置（死区），以便无人机保持飞行高度。 提高操控杆会增加参考高度，降低操控杆会降低参考高度。 同样，另一个操控杆会更改离地位置。")])]),t._v(" "),a("li",[a("p",[t._v("推油门杆无人机会起飞，起飞后立即将油门杆回中。")])]),t._v(" "),a("li",[a("p",[t._v("确保无人机可以保持位置。")])])]),t._v(" "),a("h2",{attrs:{id:"故障处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障处理"}},[t._v("#")]),t._v(" 故障处理")]),t._v(" "),a("p",[t._v("执行以下检查，以确保在首次飞行"),a("em",[t._v("之前")]),t._v(" VIO 正常运行：")]),t._v(" "),a("p",[t._v("如果连接正确， 常见问题 / 解决方案是：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("问题：")]),t._v(" 当无人机飞行时发生漂移/飞走，但是当拿掉螺旋桨时不会发生漂移。")]),t._v(" "),a("ul",[a("li",[t._v("如果使用 "),a("RouterLink",{attrs:{to:"/zh/peripherals/camera_t265_vio.html"}},[t._v("T265")]),t._v("，请尝试将其软安装（soft-mounting，做好减震，此相机对高频振动非常敏感）。")],1)])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("问题：")]),t._v(" 启用 VIO 时产生了马桶效应。")]),t._v(" "),a("ul",[a("li",[t._v("确保相机的方向与启动文件中的变换匹配。 使用 "),a("em",[t._v("QGroundControl")]),t._v(" "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 检查器"),a("OutboundLink")],1),t._v(" 验证来自 MAVROS 的 "),a("code",[t._v("ODOMETRY")]),t._v(" 消息中的速度是否与 FRD 坐标系统一致。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("问题：")]),t._v(" 想使用视觉位置来做闭环，也想运行 GPS 。")]),t._v(" "),a("ul",[a("li",[t._v("这确实很困难，因为当他们不同意时，就会混淆 EKF。 通过测试，仅使用视觉速度更为可靠（如果您想出一种使该配置可靠的方法，请告诉我们）。")])])])]),t._v(" "),a("h2",{attrs:{id:"开发人员信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发人员信息"}},[t._v("#")]),t._v(" 开发人员信息")]),t._v(" "),a("p",[t._v("对扩展此实现感兴趣的开发人员（或编写另一种不依赖 ROS 的实现）应该看看 "),a("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html"}},[t._v("使用视觉或运动捕获系统进行位置估计")]),t._v("。")],1),t._v(" "),a("p",[t._v("本主题还说明了如何配置 VIO 来配合 LPE 估计器 一起使用（不推荐）。")]),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("ECL/EKF 概述 & 调试 > 外部视觉系统")])],1)])])}),[],!1,null,null,null);_.default=r.exports},365:function(t,_,e){t.exports=e.p+"assets/img/ekf2_ev_delay_tuning.e77364d5.png"}}]);