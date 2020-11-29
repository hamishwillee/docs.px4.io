(window.webpackJsonp=window.webpackJsonp||[]).push([[880],{1818:function(t,o,e){"use strict";e.r(o);var i=e(18),a=Object(i.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"computer-vision-optical-flow-mocap-vio-avoidance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#computer-vision-optical-flow-mocap-vio-avoidance"}},[t._v("#")]),t._v(" Computer Vision (Optical Flow, MoCap, VIO, Avoidance)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Computer_vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("Computer vision"),e("OutboundLink")],1),t._v(" techniques enable computers to use visual data to make sense of their environment.")]),t._v(" "),e("p",[t._v("PX4 uses computer vision systems (primarily running on "),e("RouterLink",{attrs:{to:"/ko/companion_computer/pixhawk_companion.html"}},[t._v("Companion Computers")]),t._v(") in order to support the following features:")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#optical_flow"}},[t._v("Optical Flow")]),t._v(" provides 2D velocity estimation (using a downward facing camera and a downward facing distance sensor).")]),t._v(" "),e("li",[e("a",{attrs:{href:"#mocap"}},[t._v("Motion Capture")]),t._v(" provides 3D pose estimation using a vision system that is "),e("em",[t._v("external")]),t._v(" to the vehicle. It is primarily used for indoor navigation.")]),t._v(" "),e("li",[e("a",{attrs:{href:"#vio"}},[t._v("Visual Inertial Odometry")]),t._v(" provides 3D pose and velocity estimation using an onboard vision system and IMU. It is used for navigation when global position information is absent or unreliable.")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html"}},[t._v("Obstacle Avoidance")]),t._v(" provides full navigation around obstacles when flying a planned path (currently missions are supported). This uses "),e("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),e("OutboundLink")],1),t._v(" running on a companion computer.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/computer_vision/collision_prevention.html"}},[t._v("Collision Prevention")]),t._v(" is used to stop vehicles before they can crash into an obstacle (primarily when flying in manual modes).")],1)]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Tip")]),t._v(" The "),e("RouterLink",{attrs:{to:"/ko/complete_vehicles/px4_vision_kit.html"}},[t._v("PX4 Vision Autonomy Development Kit")]),t._v(" (Holybro) is a robust and inexpensive kit for developers working with computer vision on PX4. It comes with "),e("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 avoidance"),e("OutboundLink")],1),t._v(" software pre-installed, and can be used as the base for your own algorithms.")],1)]),t._v(" "),e("h2",{attrs:{id:"motion-capture-mocap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#motion-capture-mocap"}},[t._v("#")]),t._v(" Motion Capture {#mocap}")]),t._v(" "),e("p",[t._v("Motion Capture (MoCap) is a technique for estimating the 3D "),e("em",[t._v("pose")]),t._v(" (position and orientation) of a vehicle using a positioning mechanism that is "),e("em",[t._v("external")]),t._v(" to the vehicle. MoCap systems most commonly detect motion using infrared cameras, but other types of cameras, Lidar, or Ultra Wideband (UWB)  may also be used.")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(" MoCap is commonly used to navigate a vehicle in situations where GPS is absent (e.g. indoors), and provides position relative to a a "),e("em",[t._v("local")]),t._v(" co-ordinate system.")])]),t._v(" "),e("p",[t._v("For information about MoCap see:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/ros/external_position_estimation.html"}},[t._v("External Position Estimation")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/tutorials/motion-capture-vicon-optitrack.html"}},[t._v("Flying with Motion Capture (VICON, Optitrack)")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > External Vision System")])],1)]),t._v(" "),e("h2",{attrs:{id:"visual-inertial-odometry-vio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visual-inertial-odometry-vio"}},[t._v("#")]),t._v(" Visual Inertial Odometry {#vio}")]),t._v(" "),e("p",[t._v("Visual Inertial Odometry (VIO) is used for estimating the 3D "),e("em",[t._v("pose")]),t._v(" (position and orientation) and "),e("em",[t._v("velocity")]),t._v(" of a moving vehicle relative to a "),e("em",[t._v("local")]),t._v(" starting position. It is commonly used to navigate a vehicle in situations where GPS is absent (e.g. indoors) or unreliable (e.g. when flying under a bridge).")]),t._v(" "),e("p",[t._v("VIO uses "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Odometry"),e("OutboundLink")],1),t._v(" to estimate vehicle "),e("em",[t._v("pose")]),t._v(" from visual information, combined with inertial measurements from an IMU (to correct for errors associated with rapid vehicle movement resulting in poor image capture).")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(" On difference between VIO and "),e("a",{attrs:{href:"#mocap"}},[t._v("MoCap")]),t._v(" is that VIO cameras/IMU are vehicle-based, and additionally provide velocity information.")])]),t._v(" "),e("p",[t._v("For information about configuring VIO on PX4 see:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > External Vision System")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/peripherals/camera_t265_vio.html"}},[t._v("T265 Setup guide")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight_software_installation.html#install-snap-vio"}},[t._v("Snapdragon > Installation > Install Snap VIO")])],1)]),t._v(" "),e("h2",{attrs:{id:"optical-flow-optical-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow-optical-flow"}},[t._v("#")]),t._v(" Optical Flow {#optical_flow}")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[t._v("Optical Flow")]),t._v(" provides 2D velocity estimation (using a downward facing camera and a downward facing distance sensor).")],1),t._v(" "),e("p",[t._v("For information about optical flow see:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[t._v("Optical Flow")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v("PX4Flow Smart Camera")])],1)])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#optical-flow"}},[t._v("EKF > Optical Flow")])],1)]),t._v(" "),e("h2",{attrs:{id:"external-resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-resources"}},[t._v("#")]),t._v(" External Resources")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/robin-shaun/XTDrone/blob/master/README.en.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone"),e("OutboundLink")],1),t._v(" - ROS + PX4 simulation environment for computer vision. The "),e("a",{attrs:{href:"https://www.yuque.com/xtdrone/manual_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone Manual"),e("OutboundLink")],1),t._v(" has everything you need to get started!")])])])}),[],!1,null,null,null);o.default=a.exports}}]);