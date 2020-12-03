(window.webpackJsonp=window.webpackJsonp||[]).push([[690],{2617:function(t,e,o){"use strict";o.r(e);var r=o(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"使用-motion-capture-飞行-vicon-optitrack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-motion-capture-飞行-vicon-optitrack"}},[t._v("#")]),t._v(" 使用 Motion Capture 飞行（VICON，Optitrack）")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[r("strong",[t._v("WORK IN PROGRESS")]),t._v(".")]),t._v(" "),r("p",[t._v("Pose (position and orientation) data from the motion capture system is sent to the autopilot over MAVLink, using the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ATT_POS_MOCAP",target:"_blank",rel:"noopener noreferrer"}},[t._v("ATT_POS_MOCAP"),r("OutboundLink")],1),t._v(" message. See the section below on coordinate frames for data representation conventions. The "),r("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[t._v("mavros")]),t._v(" ROS-Mavlink interface has a default plugin to send this message. 这些消息也可以直接使用MAVLINK库并编写C/C++代码来发送和接收。 请参阅下面有关数据表示约定的坐标框架的部分。")],1),t._v(" "),r("p",[t._v("It is "),r("strong",[t._v("highly recommended")]),t._v(" that you send motion capture data via an "),r("strong",[t._v("onboard")]),t._v(" computer (e.g Raspberry Pi, ODroid, etc.) for reliable communications. The onboard computer can be connected to the motion capture computer through WiFi, which offers reliable, high-bandwidth connection. 机载计算机可以通过WiFi连接到动作捕捉计算机，提供可靠的高带宽连接。 Heading (yaw) from the motion capture system can also be optionally integrated by the attitude estimator.")]),t._v(" "),r("p",[t._v("Pose (position and orientation) data from the motion capture system is sent to the autopilot over MAVLink, using the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ATT_POS_MOCAP",target:"_blank",rel:"noopener noreferrer"}},[t._v("ATT_POS_MOCAP"),r("OutboundLink")],1),t._v(" message. See the section below on coordinate frames for data representation conventions. The "),r("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[t._v("mavros")]),t._v(" ROS-Mavlink interface has a default plugin to send this message. They can also be sent using pure C/C++ code and direct use of the MAVLink library.")],1),t._v(" "),r("h2",{attrs:{id:"计算架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#计算架构"}},[t._v("#")]),t._v(" 计算架构")]),t._v(" "),r("p",[t._v("本节演示如何使用适当的参考坐标系。 关于坐标系有各种各样的表示, 但我们将使用其中两个: ENU 和 NED。")]),t._v(" "),r("p",[t._v("Most standard telemetry links like 3DR/SiK radios are "),r("strong",[t._v("not")]),t._v(" suitable for high-bandwidth motion capture applications.")]),t._v(" "),r("h2",{attrs:{id:"坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#坐标系"}},[t._v("#")]),t._v(" 坐标系")]),t._v(" "),r("p",[t._v("This section shows how to setup the system with the proper reference frames. There are various representations but we will use two of them: ENU and NED.")]),t._v(" "),r("ul",[r("li",[t._v("ENU is a ground-fixed frame where "),r("strong",[t._v("X")]),t._v(" axis points East, "),r("strong",[t._v("Y")]),t._v(" points North and "),r("strong",[t._v("Z")]),t._v(" up. The robot/vehicle body frame is "),r("strong",[t._v("X")]),t._v(" towards the front, "),r("strong",[t._v("Z")]),t._v(" up and "),r("strong",[t._v("Y")]),t._v(" towards the left. 机器人/车身框架朝向前方 "),r("strong",[t._v("X")]),t._v("，向左朝向 "),r("strong",[t._v("Z")]),t._v(" 和 "),r("strong",[t._v("Y")]),t._v("。")]),t._v(" "),r("li",[t._v("NED has "),r("strong",[t._v("X")]),t._v(" towards North, "),r("strong",[t._v("Y")]),t._v(" East and "),r("strong",[t._v("Z")]),t._v(" down. The robot/vehicle body frame has "),r("strong",[t._v("X")]),t._v(" towards the front, "),r("strong",[t._v("Z")]),t._v(" down and "),r("strong",[t._v("Y")]),t._v(" accordingly. 机器人/车身框架具有朝向前方的 "),r("strong",[t._v("X")]),t._v("，相应地具有 "),r("strong",[t._v("Z")]),t._v(" 和 "),r("strong",[t._v("Y")]),t._v("。")])]),t._v(" "),r("p",[t._v("The ROS topic for motion cap "),r("code",[t._v("mocap_pose_estimate")]),t._v(" for mocap systems and "),r("code",[t._v("vision_pose_estimate")]),t._v(" for vision. 有关详细信息, 请检查 "),r("a",{attrs:{href:"http://wiki.ros.org/mavros_extras",target:"_blank",rel:"noopener noreferrer"}},[t._v(" mavros_extras "),r("OutboundLink")],1),t._v("。 有关详细信息, 请检查 "),r("a",{attrs:{href:"http://wiki.ros.org/mavros_extras",target:"_blank",rel:"noopener noreferrer"}},[t._v(" mavros_extras "),r("OutboundLink")],1),t._v("。 "),r("img",{attrs:{src:o(370),alt:"Reference frames"}})]),t._v(" "),r("p",[t._v("With the external heading estimation, however, magnetic North is ignored and faked with a vector corresponding to world "),r("em",[t._v("x")]),t._v(" axis (which can be placed freely at mocap calibration); yaw angle will be given respect to local "),r("em",[t._v("x")]),t._v(".")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("When creating the rigid body in the motion capture software, remember to first align the robot with the world "),r("strong",[t._v("X")]),t._v(" axis otherwise yaw estimation will have an initial offset.")])])]),t._v(" "),r("h2",{attrs:{id:"estimator-选择"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#estimator-选择"}},[t._v("#")]),t._v(" Estimator 选择")]),t._v(" "),r("h3",{attrs:{id:"lpe-和态度估计-q"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lpe-和态度估计-q"}},[t._v("#")]),t._v(" LPE 和态度估计 Q")]),t._v(" "),r("h3",{attrs:{id:"ekf2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ekf2"}},[t._v("#")]),t._v(" EKF2")]),t._v(" "),r("p",[t._v("The ROS topic for motion cap "),r("code",[t._v("mocap_pose_estimate")]),t._v(" for mocap systems and "),r("code",[t._v("vision_pose_estimate")]),t._v(" for vision. Check "),r("a",{attrs:{href:"http://wiki.ros.org/mavros_extras",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros_extras"),r("OutboundLink")],1),t._v(" for further info.")]),t._v(" "),r("h2",{attrs:{id:"测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),r("h2",{attrs:{id:"故障处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障处理"}},[t._v("#")]),t._v(" 故障处理")])])}),[],!1,null,null,null);e.default=a.exports},370:function(t,e,o){t.exports=o.p+"assets/img/ref_frames.b0d97b5d.png"}}]);