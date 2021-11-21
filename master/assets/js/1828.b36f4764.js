(window.webpackJsonp=window.webpackJsonp||[]).push([[1828],{3245:function(t,e,o){"use strict";o.r(e);var r=o(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"ros-robot-operating-system"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ros-robot-operating-system"}},[t._v("#")]),t._v(" ROS (Robot Operating System)")]),t._v(" "),o("p",[o("a",{attrs:{href:"http://www.ros.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS"),o("OutboundLink")],1),t._v(" is a general purpose robotics library that can be used with PX4 for drone application development. It is only officially supported on Linux platforms.")]),t._v(" "),o("p",[t._v("ROS benefits from an active ecosystem of developers solving common robotics problems, and access to other software libraries written for Linux. It has been used, for example, as part of the PX4 "),o("RouterLink",{attrs:{to:"/zh/computer_vision/"}},[t._v("computer vision")]),t._v(" solutions, including "),o("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("obstacle avoidance")]),t._v(" and "),o("RouterLink",{attrs:{to:"/zh/computer_vision/collision_prevention.html"}},[t._v("collision prevention")]),t._v(".")],1),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("tip "),o("RouterLink",{attrs:{to:"/zh/ros/ros2.html"}},[t._v("ROS 2")]),t._v(' is the "latest and greatest" version of ROS. The PX4 development team recommend that all users '),o("RouterLink",{attrs:{to:"/zh/ros/ros2.html"}},[t._v("upgrade to ROS 2")]),t._v("!")],1)]),t._v(" "),o("h2",{attrs:{id:"ros-setups"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ros-setups"}},[t._v("#")]),t._v(" ROS Setups")]),t._v(" "),o("p",[t._v('PX4 supports both the "original" ROS and ROS 2, with the following configurations:')]),t._v(" "),o("ul",[o("li",[o("strong",[o("RouterLink",{attrs:{to:"/zh/ros/ros2.html"}},[t._v("ROS 2")]),t._v(": (Recommended)")],1),t._v(" PX4 and ROS 2 communicate over the "),o("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html"}},[t._v("PX4-ROS 2 bridge")]),t._v(", an interface that provides a direct bridge between PX4 uORB messages and ROS 2 DDS messages/types. This effectively allows direct access to PX4 internals from ROS 2 workflows and nodes in realtime.")],1),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/zh/ros/ros1_via_ros2.html"}},[t._v("ROS (1) via ROS 2 Bridge")]),t._v(":")],1),t._v(" PX4 connects first via the "),o("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html"}},[t._v("PX4-ROS 2 bridge")]),t._v(" and then via a second bridge ("),o("a",{attrs:{href:"https://github.com/ros2/ros1_bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("ros1_bridge"),o("OutboundLink")],1),t._v(") between ROS 2 and ROS 1.")],1),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/zh/ros/ros1.html"}},[t._v("ROS (1) via MAVROS")]),t._v(":")],1),t._v(" PX4 and ROS (1) communicate over "),o("RouterLink",{attrs:{to:"/zh/middleware/mavlink.html"}},[t._v("MAVLink")]),t._v(", using the "),o("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(" package to bridge ROS topics to MAVLink.")],1)]),t._v(" "),o("h2",{attrs:{id:"ros-support-roadmap"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ros-support-roadmap"}},[t._v("#")]),t._v(" ROS Support Roadmap")]),t._v(" "),o("p",[t._v("Unveiled at the "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=lZ8crGI16qA",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Developer Summit 2020"),o("OutboundLink")],1),t._v(" (and "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=8XRkzHqQSf0",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS World 2020"),o("OutboundLink")],1),t._v("), the PX4 Development team, announced the plans to support microROS.")]),t._v(" "),o("ul",[o("li",[t._v("microRTPS:  microRTPS bridge with Fast DDS (The current stable ROS 2 interface)")]),t._v(" "),o("li",[t._v("micro XRCE-DDS: DDS on PX4 (Next step!)")]),t._v(" "),o("li",[t._v("micro ROS: ROS 2 on the PX4 (Our Target!)")])])])}),[],!1,null,null,null);e.default=s.exports}}]);