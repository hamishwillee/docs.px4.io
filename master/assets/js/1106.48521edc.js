(window.webpackJsonp=window.webpackJsonp||[]).push([[1106],{2279:function(t,e,o){"use strict";o.r(e);var a=o(18),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"computer-vision-vio-avoidance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#computer-vision-vio-avoidance"}},[t._v("#")]),t._v(" Computer Vision (VIO, Avoidance)")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Computer_vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机视觉"),o("OutboundLink")],1),t._v(" 技术使计算机能够使用视觉数据来理解他们的环境。")]),t._v(" "),o("p",[t._v("PX4 使用计算机视觉系统（主要在机载计算机上运行）以支持以下功能：")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#optical_flow"}},[t._v("光流")]),t._v("提供 2D 速度估计（使用向下的相机和向下的距离传感器）。")]),t._v(" "),o("li",[o("a",{attrs:{href:"#mocap"}},[t._v("Motion Capture")]),t._v(" provides 3D pose estimation using a vision system that is "),o("em",[t._v("external")]),t._v(" to the vehicle. It is primarily used for indoor navigation. 它主要用于室内导航。")]),t._v(" "),o("li",[o("a",{attrs:{href:"#vio"}},[t._v("Visual Inertial Odometry")]),t._v(" provides 3D pose and velocity estimation using an onboard vision system and IMU. It is used for navigation when global position information is absent or unreliable. 当 GPS 不存在或不可靠时，它用于导航。")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.px4.io/en/computer_vision/obstacle_avoidance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Obstacle Avoidance"),o("OutboundLink")],1),t._v(" provides navigation around obstacles when flying a planned path (currently missions are supported). This uses "),o("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),o("OutboundLink")],1),t._v(" running on a companion computer. 这依赖机载电脑上运行的 "),o("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.px4.io/en/computer_vision/collision_prevention.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collision Prevention"),o("OutboundLink")],1),t._v(" is used to stop vehicles before they can crash into an obstacle (primarily when flying in manual modes).")])]),t._v(" "),o("p",[t._v("Motion Capture (MoCap) is a technique for estimating the 3D "),o("em",[t._v("pose")]),t._v(" (position and orientation) of a vehicle using a positioning mechanism that is "),o("em",[t._v("external")]),t._v(" to the vehicle. MoCap systems most commonly detect motion using infrared cameras, but other types of cameras, Lidar, or Ultra Wideband (UWB) may also be used. MoCap系统最常使用红外摄像机检测运动，但也可以使用其他类型的摄像机，激光雷达或Ultra Wideband (UWB)。\n:::")]),t._v(" "),o("h2",{attrs:{id:"运动捕捉-mocap"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#运动捕捉-mocap"}},[t._v("#")]),t._v(" 运动捕捉 {#mocap}")]),t._v(" "),o("p",[t._v("Motion Capture (MoCap) is a technique for estimating the 3D "),o("em",[t._v("pose")]),t._v(" (position and orientation) of a vehicle using a positioning mechanism that is "),o("em",[t._v("external")]),t._v(" to the vehicle. MoCap systems most commonly detect motion using infrared cameras, but other types of cameras, Lidar, or Ultra Wideband (UWB)  may also be used.")]),t._v(" "),o("p",[t._v("Visual Inertial Odometry (VIO) is used for estimating the 3D "),o("em",[t._v("pose")]),t._v(" (position and orientation) of a moving vehicle relative to a "),o("em",[t._v("local")]),t._v(" starting position. It is commonly used to navigate a vehicle in situations where GPS is absent (e.g. indoors) or unreliable (e.g. when flying under a bridge). 它通常用于在GPS不存在（例如室内）或不可靠的情况下（例如在桥下飞行时）导航载具。")]),t._v(" "),o("p",[t._v("VIO使用"),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[t._v("视觉测距"),o("OutboundLink")],1),t._v("来从视觉信息估计车辆"),o("em",[t._v("姿势")]),t._v("，结合来自IMU的惯性测量（以校正与载具快速移动导致不良的图像捕获）。")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html"}},[t._v("外部位置的估计")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/tutorials/motion-capture-vicon-optitrack.html"}},[t._v("使用 Motion Capture 飞行（VICON，Optitrack）")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > External Vision System")])],1)]),t._v(" "),o("h2",{attrs:{id:"视觉惯性测距法-vio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#视觉惯性测距法-vio"}},[t._v("#")]),t._v(" 视觉惯性测距法 {#vio}")]),t._v(" "),o("p",[t._v("Visual Inertial Odometry (VIO) is used for estimating the 3D "),o("em",[t._v("pose")]),t._v(" (position and orientation) and "),o("em",[t._v("velocity")]),t._v(" of a moving vehicle relative to a "),o("em",[t._v("local")]),t._v(" starting position. It is commonly used to navigate a vehicle in situations where GPS is absent (e.g. indoors) or unreliable (e.g. when flying under a bridge).")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://docs.px4.io/en/sensor/optical_flow.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Optical Flow"),o("OutboundLink")],1),t._v(" provides 2D velocity estimation (using a downward facing camera and a downward facing distance sensor).")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("On difference between VIO and "),o("a",{attrs:{href:"#mocap"}},[t._v("MoCap")]),t._v(" is that VIO cameras/IMU are vehicle-based, and additionally provide velocity information.")])]),t._v(" "),o("p",[t._v("For information about configuring VIO on PX4 see:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > External Vision System")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/peripherals/camera_t265_vio.html"}},[t._v("T265 Setup guide")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/flight_controller/snapdragon_flight_software_installation.html#install-snap-vio"}},[t._v("Snapdragon > Installation > Install Snap VIO")])],1)]),t._v(" "),o("h2",{attrs:{id:"光流-optical-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#光流-optical-flow"}},[t._v("#")]),t._v(" 光流 {#optical_flow}")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html"}},[t._v("Optical Flow")]),t._v(" provides 2D velocity estimation (using a downward facing camera and a downward facing distance sensor).")],1),t._v(" "),o("p",[t._v("For information about optical flow see:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html"}},[t._v("光流")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/sensor/px4flow.html"}},[t._v("PX4Flow 智能摄像机")])],1)])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#optical-flow"}},[t._v("EKF > Optical Flow")])],1)]),t._v(" "),o("h2",{attrs:{id:"external-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#external-resources"}},[t._v("#")]),t._v(" External Resources")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/robin-shaun/XTDrone/blob/master/README.en.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone"),o("OutboundLink")],1),t._v(" - ROS + PX4 simulation environment for computer vision. The "),o("a",{attrs:{href:"https://www.yuque.com/xtdrone/manual_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone Manual"),o("OutboundLink")],1),t._v(" has everything you need to get started!")])])])}),[],!1,null,null,null);e.default=i.exports}}]);