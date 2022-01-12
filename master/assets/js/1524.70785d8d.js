(window.webpackJsonp=window.webpackJsonp||[]).push([[1524],{2753:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"计算机视觉-光流-mocap-vio-避障"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#计算机视觉-光流-mocap-vio-避障"}},[t._v("#")]),t._v(" 计算机视觉 (光流，MoCap， VIO，避障)")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Computer_vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机视觉"),o("OutboundLink")],1),t._v(" 技术使计算机能够使用视觉数据来理解他们的环境。")]),t._v(" "),o("p",[t._v("PX4 使用计算机视觉系统（主要在机载计算机上运行）以支持以下功能：")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#optical_flow"}},[t._v("光流")]),t._v("提供 2D 速度估计（使用向下的相机和向下的距离传感器）。")]),t._v(" "),o("li",[o("a",{attrs:{href:"#mocap"}},[t._v("Motion Capture")]),t._v(" provides 3D pose estimation using a vision system that is "),o("em",[t._v("external")]),t._v(" to the vehicle. It is primarily used for indoor navigation. 它主要用于室内导航。")]),t._v(" "),o("li",[o("a",{attrs:{href:"#vio"}},[t._v("Visual Inertial Odometry")]),t._v(" provides 3D pose and velocity estimation using an onboard vision system and IMU. It is used for navigation when global position information is absent or unreliable. 当 GPS 不存在或不可靠时，它用于导航。")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.px4.io/en/computer_vision/obstacle_avoidance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Obstacle Avoidance"),o("OutboundLink")],1),t._v(" provides navigation around obstacles when flying a planned path (currently missions are supported). This uses "),o("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),o("OutboundLink")],1),t._v(" running on a companion computer. 这依赖机载电脑上运行的 "),o("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.px4.io/en/computer_vision/collision_prevention.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collision Prevention"),o("OutboundLink")],1),t._v(" is used to stop vehicles before they can crash into an obstacle (primarily when flying in manual modes).")])]),t._v(" "),o("p",[t._v("Motion Capture (MoCap) is a technique for estimating the 3D "),o("em",[t._v("pose")]),t._v(" (position and orientation) of a vehicle using a positioning mechanism that is "),o("em",[t._v("external")]),t._v(" to the vehicle. MoCap systems most commonly detect motion using infrared cameras, but other types of cameras, Lidar, or Ultra Wideband (UWB) may also be used. MoCap系统最常使用红外摄像机检测运动，但也可以使用其他类型的摄像机，激光雷达或Ultra Wideband (UWB)。\n:::")]),t._v(" "),o("h2",{attrs:{id:"运动捕捉"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#运动捕捉"}},[t._v("#")]),t._v(" 运动捕捉")]),t._v(" "),o("p",[t._v("运动捕捉（MoCap）是一种使用无人机"),o("em",[t._v("外部的")]),t._v("定位机制来估算 3D <0>姿态* （位置和方向）的技术。 MoCap 系统最常使用红外摄像机检测运动，但也可以使用其他类型的摄像机，激光雷达或超宽带（UWB）。")]),o("p"),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("MoCap 通常用于在没有 GPS 的情况下导航无人机（例如室内），并提供相对于 "),o("em",[t._v("本地")]),t._v(" 坐标系的位置。 它通常用于在GPS不存在（例如室内）或不可靠的情况下（例如在桥下飞行时）导航载具。")]),t._v(" "),o("p",[t._v("有关 MoCap 的信息，请参阅：")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html"}},[t._v("外部位置的估计")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/tutorials/motion-capture-vicon-optitrack.html"}},[t._v("使用 Motion Capture 飞行（VICON，Optitrack）")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > 外部视觉系统")])],1)]),t._v(" "),o("h2",{attrs:{id:"视觉惯性里程计-vio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#视觉惯性里程计-vio"}},[t._v("#")]),t._v(" 视觉惯性里程计（VIO）")]),t._v(" "),o("p",[t._v("视觉惯性测距（VIO）用于估算 3D "),o("em",[t._v("姿态")]),t._v(" （位置和方向）和相对于"),o("em",[t._v("本地")]),t._v("起始位置的无人机运动"),o("em",[t._v("速度")]),t._v("。 它通常用于在 GPS 不存在（例如室内）或不可靠的情况下（例如在桥下飞行时）给无人机导航。")]),t._v(" "),o("p",[t._v("VIO 使用"),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[t._v("视觉测距"),o("OutboundLink")],1),t._v("中的视觉信息来估算无人机"),o("em",[t._v("姿态")]),t._v("，融合 IMU 的惯性测量信息（为了矫正因不良的图像捕获导致的机身快速移动错误）。")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("VIO")]),t._v(" "),o("p",[t._v("和 "),o("a",{attrs:{href:"#mocap"}},[t._v("MoCap")]),t._v(" 之间的区别在于 VIO 相机或者 IMU 是基于无人机的，并且额外提供速度信息。")])])]),t._v(" "),o("p",[t._v("关于在 PX4 上配置 VIO 的信息，请参阅：")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > 外部视觉系统")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/peripherals/camera_t265_vio.html"}},[t._v("T265 安装指南")])],1)]),t._v(" "),o("h2",{attrs:{id:"光流"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#光流"}},[t._v("#")]),t._v(" 光流")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html"}},[t._v("光流")]),t._v("提供 2D 速度估计（使用向下的相机和向下的距离传感器）。")],1),t._v(" "),o("p",[t._v("有关光流的信息，请参阅：")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html"}},[t._v("光流")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/sensor/px4flow.html"}},[t._v("PX4Flow 智能摄像机")])],1)])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#optical-flow"}},[t._v("EKF > 光流")])],1)]),t._v(" "),o("h2",{attrs:{id:"外部资源"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#外部资源"}},[t._v("#")]),t._v(" 外部资源")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/robin-shaun/XTDrone/blob/master/README.en.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone"),o("OutboundLink")],1),t._v(" - ROS + PX4 计算机视觉模拟仿真环境。 "),o("a",{attrs:{href:"https://www.yuque.com/xtdrone/manual_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone 手册"),o("OutboundLink")],1),t._v(" 有你需要开始的一切！")])])])}),[],!1,null,null,null);e.default=r.exports}}]);