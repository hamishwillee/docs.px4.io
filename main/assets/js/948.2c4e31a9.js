(window.webpackJsonp=window.webpackJsonp||[]).push([[948],{1743:function(t,e,o){"use strict";o.r(e);var i=o(19),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"computer-vision-optical-flow-mocap-vio-avoidance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#computer-vision-optical-flow-mocap-vio-avoidance"}},[t._v("#")]),t._v(" Computer Vision (Optical Flow, MoCap, VIO, Avoidance)")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Computer_vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("Computer vision"),o("OutboundLink")],1),t._v(" techniques enable computers to use visual data to make sense of their environment.")]),t._v(" "),o("p",[t._v("PX4 uses computer vision systems (primarily running on "),o("RouterLink",{attrs:{to:"/en/companion_computer/"}},[t._v("Companion Computers")]),t._v(") in order to support the following features:")],1),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#optical-flow"}},[t._v("Optical Flow")]),t._v(" provides 2D velocity estimation (using a downward facing camera and a downward facing distance sensor).")]),t._v(" "),o("li",[o("a",{attrs:{href:"#motion-capture"}},[t._v("Motion Capture")]),t._v(" provides 3D pose estimation using a vision system that is "),o("em",[t._v("external")]),t._v(" to the vehicle.\nIt is primarily used for indoor navigation.")]),t._v(" "),o("li",[o("a",{attrs:{href:"#visual-inertial-odometry-vio"}},[t._v("Visual Inertial Odometry")]),t._v(" provides 3D pose and velocity estimation using an onboard vision system and IMU.\nIt is used for navigation when global position information is absent or unreliable.")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/computer_vision/obstacle_avoidance.html"}},[t._v("Obstacle Avoidance")]),t._v(" provides full navigation around obstacles when flying a planned path (currently missions are supported). This uses "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),o("OutboundLink")],1),t._v(" running on a companion computer.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/computer_vision/collision_prevention.html"}},[t._v("Collision Prevention")]),t._v(" is used to stop vehicles before they can crash into an obstacle (primarily when flying in manual modes).")],1)]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/en/complete_vehicles/px4_vision_kit.html"}},[t._v("PX4 Vision Autonomy Development Kit")]),t._v(" (Holybro) is a robust and inexpensive kit for developers working with computer vision on PX4.\nIt comes with no pre-installed software, but does include an example implementation of obstacle avoidance to demonstrate the capabilities of the platform.")],1)]),t._v(" "),o("h2",{attrs:{id:"motion-capture"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motion-capture"}},[t._v("#")]),t._v(" Motion Capture")]),t._v(" "),o("p",[t._v("Motion Capture (MoCap) is a technique for estimating the 3D "),o("em",[t._v("pose")]),t._v(" (position and orientation) of a vehicle using a positioning mechanism that is "),o("em",[t._v("external")]),t._v(" to the vehicle.\nMoCap systems most commonly detect motion using infrared cameras, but other types of cameras, Lidar, or Ultra Wideband (UWB) may also be used.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("MoCap is commonly used to navigate a vehicle in situations where GPS is absent (e.g. indoors), and provides position relative to a "),o("em",[t._v("local")]),t._v(" coordinate system.")])]),t._v(" "),o("p",[t._v("For information about MoCap see:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/ros/external_position_estimation.html"}},[t._v("External Position Estimation")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/tutorials/motion-capture.html"}},[t._v("Flying with Motion Capture (VICON, Optitrack)")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > External Vision System")])],1)]),t._v(" "),o("h2",{attrs:{id:"visual-inertial-odometry-vio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#visual-inertial-odometry-vio"}},[t._v("#")]),t._v(" Visual Inertial Odometry (VIO)")]),t._v(" "),o("p",[t._v("Visual Inertial Odometry (VIO) is used for estimating the 3D "),o("em",[t._v("pose")]),t._v(" (position and orientation) and "),o("em",[t._v("velocity")]),t._v(" of a moving vehicle relative to a "),o("em",[t._v("local")]),t._v(" starting position.\nIt is commonly used to navigate a vehicle in situations where GPS is absent (e.g. indoors) or unreliable (e.g. when flying under a bridge).")]),t._v(" "),o("p",[t._v("VIO uses "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Odometry"),o("OutboundLink")],1),t._v(" to estimate vehicle "),o("em",[t._v("pose")]),t._v(" from visual information, combined with inertial measurements from an IMU (to correct for errors associated with rapid vehicle movement resulting in poor image capture).")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("One difference between VIO and "),o("a",{attrs:{href:"#motion-capture"}},[t._v("MoCap")]),t._v(" is that VIO cameras/IMU are vehicle-based, and additionally provide velocity information.")])]),t._v(" "),o("p",[t._v("For information about configuring VIO on PX4 see:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > External Vision System")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/peripherals/camera_t265_vio.html"}},[t._v("T265 Setup guide")])],1)]),t._v(" "),o("h2",{attrs:{id:"optical-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow"}},[t._v("#")]),t._v(" Optical Flow")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/sensor/optical_flow.html"}},[t._v("Optical Flow")]),t._v(" provides 2D velocity estimation (using a downward facing camera and a downward facing distance sensor).")],1),t._v(" "),o("p",[t._v("For information about optical flow see:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/sensor/optical_flow.html"}},[t._v("Optical Flow")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#optical-flow"}},[t._v("EKF > Optical Flow")])],1)]),t._v(" "),o("h2",{attrs:{id:"external-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#external-resources"}},[t._v("#")]),t._v(" External Resources")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/robin-shaun/XTDrone/blob/master/README.en.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone"),o("OutboundLink")],1),t._v(" - ROS + PX4 simulation environment for computer vision.\nThe "),o("a",{attrs:{href:"https://www.yuque.com/xtdrone/manual_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone Manual"),o("OutboundLink")],1),t._v(" has everything you need to get started!")])])])}),[],!1,null,null,null);e.default=a.exports}}]);