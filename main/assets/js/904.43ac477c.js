(window.webpackJsonp=window.webpackJsonp||[]).push([[904],{349:function(t,e,o){t.exports=o.p+"assets/img/ref_frames.b0d97b5d.png"},3793:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flying-with-motion-capture-vicon-nokov-optitrack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flying-with-motion-capture-vicon-nokov-optitrack"}},[t._v("#")]),t._v(" Flying with Motion Capture (VICON, NOKOV, Optitrack)")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("strong",[t._v("WORK IN PROGRESS")]),t._v(".")]),t._v(" "),a("p",[t._v("This topic shares significant overlap with "),a("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html"}},[t._v("External Position Estimation (ROS)")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Indoor motion capture systems like VICON, NOKOV and Optitrack can be used to provide position and attitude data for vehicle state estimation, orto serve as ground-truth for analysis. The motion capture data can be used to update PX4's local position estimate relative to the local origin. Heading (yaw) from the motion capture system can also be optionally integrated by the attitude estimator.")]),t._v(" "),a("p",[t._v("Pose (position and orientation) data from the motion capture system is sent to the autopilot over MAVLink, using the "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ATT_POS_MOCAP",target:"_blank",rel:"noopener noreferrer"}},[t._v("ATT_POS_MOCAP"),a("OutboundLink")],1),t._v(" message. See the section below on coordinate frames for data representation conventions. The "),a("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[t._v("mavros")]),t._v(" ROS-Mavlink interface has a default plugin to send this message. They can also be sent using pure C/C++ code and direct use of the MAVLink library.")],1),t._v(" "),a("h2",{attrs:{id:"computing-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computing-architecture"}},[t._v("#")]),t._v(" Computing Architecture")]),t._v(" "),a("p",[t._v("It is "),a("strong",[t._v("highly recommended")]),t._v(" that you send motion capture data via an "),a("strong",[t._v("onboard")]),t._v(" computer (e.g Raspberry Pi, ODroid, etc.) for reliable communications. The onboard computer can be connected to the motion capture computer through WiFi, which offers reliable, high-bandwidth connection.")]),t._v(" "),a("p",[t._v("Most standard telemetry links like 3DR/SiK radios are "),a("strong",[t._v("not")]),t._v(" suitable for high-bandwidth motion capture applications.")]),t._v(" "),a("h2",{attrs:{id:"coordinate-frames"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coordinate-frames"}},[t._v("#")]),t._v(" Coordinate Frames")]),t._v(" "),a("p",[t._v("This section shows how to setup the system with the proper reference frames. There are various representations but we will use two of them: ENU and NED.")]),t._v(" "),a("ul",[a("li",[t._v("ENU is a ground-fixed frame where "),a("strong",[t._v("X")]),t._v(" axis points East, "),a("strong",[t._v("Y")]),t._v(" points North and "),a("strong",[t._v("Z")]),t._v(" up. The robot/vehicle body frame is "),a("strong",[t._v("X")]),t._v(" towards the front, "),a("strong",[t._v("Z")]),t._v(" up and "),a("strong",[t._v("Y")]),t._v(" towards the left.")]),t._v(" "),a("li",[t._v("NED has "),a("strong",[t._v("X")]),t._v(" towards North, "),a("strong",[t._v("Y")]),t._v(" East and "),a("strong",[t._v("Z")]),t._v(" down. The robot/vehicle body frame has "),a("strong",[t._v("X")]),t._v(" towards the front, "),a("strong",[t._v("Z")]),t._v(" down and "),a("strong",[t._v("Y")]),t._v(" accordingly.")])]),t._v(" "),a("p",[t._v("Frames are shown in the image below. NED on the left, ENU on the right: "),a("img",{attrs:{src:o(349),alt:"Reference frames"}})]),t._v(" "),a("p",[t._v("With the external heading estimation, however, magnetic North is ignored and faked with a vector corresponding to world "),a("em",[t._v("x")]),t._v(" axis (which can be placed freely at mocap calibration); yaw angle will be given respect to local "),a("em",[t._v("x")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("When creating the rigid body in the motion capture software, remember to first align the robot with the world "),a("strong",[t._v("X")]),t._v(" axis otherwise yaw estimation will have an initial offset.")])]),t._v(" "),a("h2",{attrs:{id:"estimator-choice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimator-choice"}},[t._v("#")]),t._v(" Estimator choice")]),t._v(" "),a("h3",{attrs:{id:"lpe-and-attitude-estimator-q"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lpe-and-attitude-estimator-q"}},[t._v("#")]),t._v(" LPE and Attitude Estimator Q")]),t._v(" "),a("h3",{attrs:{id:"ekf2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ekf2"}},[t._v("#")]),t._v(" EKF2")]),t._v(" "),a("p",[t._v("The ROS topic for motion cap "),a("code",[t._v("mocap_pose_estimate")]),t._v(" for mocap systems and "),a("code",[t._v("vision_pose_estimate")]),t._v(" for vision. Check "),a("a",{attrs:{href:"http://wiki.ros.org/mavros_extras",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros_extras"),a("OutboundLink")],1),t._v(" for further info.")]),t._v(" "),a("h2",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")])])}),[],!1,null,null,null);e.default=r.exports}}]);