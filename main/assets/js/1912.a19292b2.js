(window.webpackJsonp=window.webpackJsonp||[]).push([[1912],{3428:function(t,_,o){"use strict";o.r(_);var e=o(19),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,o=t._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"计算机视觉-光流-mocap-vio-避障"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#计算机视觉-光流-mocap-vio-避障"}},[t._v("#")]),t._v(" 计算机视觉 (光流，MoCap， VIO，避障)")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Computer_vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机视觉"),o("OutboundLink")],1),t._v(" 技术使计算机能够使用视觉数据来理解他们的环境。")]),t._v(" "),o("p",[t._v("PX4使用计算机视觉系统(主要在"),o("RouterLink",{attrs:{to:"/zh/companion_computer/"}},[t._v("机载计算机")]),t._v("上运行)以支持下列功能：")],1),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#optical_flow"}},[t._v("光流")]),t._v("提供 2D 速度估计（使用向下的相机和向下的距离传感器）。")]),t._v(" "),o("li",[o("a",{attrs:{href:"#motion-capture"}},[t._v("运动捕捉")]),t._v("使用载具_外部_的视觉系统进行3D姿态估计。 它主要用于室内导航。")]),t._v(" "),o("li",[o("a",{attrs:{href:"#visual-inertial-odometry-vio"}},[t._v("视觉惯性测距 （VIO）")]),t._v(" 使用机载视觉系统和 IMU 来提供 3D 姿态和速度估计。 用于在GNSS位置信息不存在或不可靠时的导航。")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("避障")]),t._v(" 为飞行计划路径时，提供完整的障碍绕行导航（支持当前任务）。 这将使用运行在同伴计算机上的"),o("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-avoidance"),o("OutboundLink")],1),t._v(" 。")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/computer_vision/collision_prevention.html"}},[t._v("防碰")]),t._v("用于载具在撞到障碍物之前刹车（主要是在手动模式下飞行时）。")],1)]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/complete_vehicles/px4_vision_kit.html"}},[t._v("PX4 Vision Autonomy Development Kit")]),t._v(" (Holybro) 是一个健壮且不贵的工具包，供开发者在 PX4 上使用计算机视觉技术。 它提供了无需预先安装的软件，且包含一个为展示平台能力而实现的避障实例。")],1)]),t._v(" "),o("h2",{attrs:{id:"运动捕捉"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#运动捕捉"}},[t._v("#")]),t._v(" 运动捕捉")]),t._v(" "),o("p",[t._v("运动捕捉（MoCap）是一种利用载具_外部_定位设备估计载具3D "),o("em",[t._v("姿态")]),t._v("（位置和方向）的技术。 MoCap 系统最常使用红外相机检测运动，但也可以使用其他类型的相机，激光雷达或者超宽带 （UWB）。")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("MoCap 通常用于无GPS的情况下进行载具的导航(例如室内)，并提供在本地坐标系下的相对位置。 它通常用于在GPS不存在（例如室内）或不可靠的情况下（例如在桥下飞行时）导航载具。")]),t._v(" "),o("p",[t._v("有关 MoCap 的信息，请参阅：")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html"}},[t._v("外部位置的估计")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/tutorials/motion-capture.html"}},[t._v("使用 Motion Capture 飞行（VICON，Optitrack）")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > 外部视觉系统")])],1)]),t._v(" "),o("h2",{attrs:{id:"视觉惯性里程计-vio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#视觉惯性里程计-vio"}},[t._v("#")]),t._v(" 视觉惯性里程计（VIO）")]),t._v(" "),o("p",[t._v("视觉惯性里程计（VIO）被用于估计运动载具相对于本地起始位置的3D_姿态_（位置和方向）和_速度_。 它通常用于在 GPS 不存在（例如室内）或不可靠的情况下（例如在桥下飞行时）给载具导航。")]),t._v(" "),o("p",[t._v("VIO使用"),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[t._v("视觉里程计"),o("OutboundLink")],1),t._v("从视觉信息估计载具的_姿态_，融合来自IMU的惯性测量（以校正载具快速移动导致不良图像捕获）。")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("VIO")]),t._v(" "),o("p",[t._v("和 "),o("a",{attrs:{href:"#motion-capture"}},[t._v("MoCap")]),t._v(" 之间的一个区别是，VIO 照相机/IMU 是基于载具的，并且还提供了速度信息。")])])]),t._v(" "),o("p",[t._v("关于在 PX4 上配置 VIO 的信息，请参阅：")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > 外部视觉系统")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/peripherals/camera_t265_vio.html"}},[t._v("T265 安装指南")])],1)]),t._v(" "),o("h2",{attrs:{id:"光流"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#光流"}},[t._v("#")]),t._v(" 光流")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html"}},[t._v("光流")]),t._v("提供 2D 速度估计（使用向下的相机和向下的距离传感器）。")],1),t._v(" "),o("p",[t._v("有关光流的信息，请参阅：")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html"}},[t._v("光流")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#optical-flow"}},[t._v("EKF > 光流")])],1)]),t._v(" "),o("h2",{attrs:{id:"比较"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[t._v("#")]),t._v(" 比较")]),t._v(" "),o("h3",{attrs:{id:"本地位置估计-光学流-对-vio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#本地位置估计-光学流-对-vio"}},[t._v("#")]),t._v(" 本地位置估计 光学流 对 VIO")]),t._v(" "),o("p",[t._v("这两种技术都使用照相机并测量帧之间的差异。 光学流使用向下照相机，而VIO则使用立体照相机或45度跟踪照相机。 假定两者的校准都很好，哪个对本地地位置估计更好？")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://discuss.px4.io/t/vio-vs-optical-flow/34680",target:"_blank",rel:"noopener noreferrer"}},[t._v("的共识似乎是"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Optical flow:")]),t._v(" "),o("ul",[o("li",[t._v("向下光学流使得你能够通过陀螺仪的角速度来校正角平面速度。")]),t._v(" "),o("li",[t._v("需要准确的地面距离并假定地面为平面。 在这种情况下，它可能与VIO一样准确可靠(例如室内飞行)")]),t._v(" "),o("li",[t._v("它比VIO更健壮，因为它的状态较少。")]),t._v(" "),o("li",[t._v("更便宜和更容易设置，因为它只需要一个流传感器，一个范围探测器。 并设置几个参数（可以连接到飞行控制器）。")])]),t._v(" "),o("p",[t._v("VIO")]),t._v(" "),o("ul",[o("li",[t._v("购买更加昂贵，设置更加困难。 它需要一台单独的配套计算机、校准、软件、配置等等。")]),t._v(" "),o("li",[t._v("如果没有可跟踪的点特征（实际上现实世界一般有点特征），效果将会减弱。")]),t._v(" "),o("li",[t._v("较为灵活，可以增加诸如避免障碍和制图等其他功能。")])]),t._v(" "),o("p",[t._v("组合(两者兼用)可能是最可靠的，但在大多数现实世界的情景中并不必要。 通常您将选择适合您的运行环境、所需功能和成本限制的系统：")]),t._v(" "),o("ul",[o("li",[t._v("如果您打算在没有GPS的情况下在室外飞行（或室外和室内飞行），请使用 VIO 或者如果您需要支持避障碍和其他计算机视觉特性。")]),t._v(" "),o("li",[t._v("如果您只计划在室内飞行（不使用 GPS），且成本是一个重要的考虑因素，使用Optical Flow。")])]),t._v(" "),o("h2",{attrs:{id:"外部资源"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#外部资源"}},[t._v("#")]),t._v(" 外部资源")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/robin-shaun/XTDrone/blob/master/README.en.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone"),o("OutboundLink")],1),t._v(" - ROS + PX4 计算机视觉模拟仿真环境。 "),o("a",{attrs:{href:"https://www.yuque.com/xtdrone/manual_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone 手册"),o("OutboundLink")],1),t._v(" 有你需要开始的一切！")])])])}),[],!1,null,null,null);_.default=r.exports}}]);