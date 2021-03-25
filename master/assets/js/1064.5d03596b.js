(window.webpackJsonp=window.webpackJsonp||[]).push([[1064],{2196:function(t,e,o){"use strict";o.r(e);var s=o(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"robotics-using-ros"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#robotics-using-ros"}},[t._v("#")]),t._v(" Robotics using ROS")]),t._v(" "),o("p",[o("a",{attrs:{href:"http://www.ros.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS"),o("OutboundLink")],1),t._v(" (Robot Operating System) is a general purpose robotics library that can be used with PX4 for "),o("RouterLink",{attrs:{to:"/ko/ros/mavros_offboard.html"}},[t._v("offboard control")]),t._v(". It uses the "),o("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(" node to communicate with PX4 running on hardware or using the "),o("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[t._v("Gazebo Simulator")]),t._v(".")],1),t._v(" "),o("p",[t._v("This section contains topics about using ROS for offboard control with PX4.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("ROS")]),t._v(" "),o("p",[t._v("is only officially supported on Linux platforms.")])]),t._v(" "),o("h1",{attrs:{id:"robotics-using-ros-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#robotics-using-ros-2"}},[t._v("#")]),t._v(" Robotics using ROS 2")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://index.ros.org/doc/ros2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS 2"),o("OutboundLink")],1),t._v(" is the newest version of ROS. It captures most of the learnings and recently added features of ROS (1), improving a number of flaws of the earlier version.")]),t._v(" "),o("p",[t._v("The translation layer between ROS 2 and PX4 is software known as the "),o("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("PX4-Fast RTPS(DDS) Bridge")]),t._v(". This provides a bridge between PX4 UORB messages and ROS 2 messages and types, effectively allowing direct access to PX4 from ROS 2 workflows and nodes. The bridge uses UORB message definitions and correspondent IDL types to generate code to serialise and deserialise the messages heading in and out of PX4.")],1),t._v(" "),o("p",[t._v("For an explanation on how the bridge works, and for some examples, see: "),o("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html"}},[t._v("PX4-ROS 2 bridge")]),t._v(".")],1),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("To use the "),o("em",[t._v("PX4-Fast RTPS(DDS) Bridge")]),t._v(" bridge effectively you must (at time of writing) have a reasonable understanding of the PX4 internal architecture and conventions.")]),t._v(" "),o("p",[t._v("This contrasts with ROS (1), which communicates with PX4 via MAVROS/MAVLink, hiding PX4's internal architecture and many of its conventions (e.g. frame and unit conversions).")]),t._v(" "),o("p",[t._v("ROS 2 (and the bridge) will become easier to use as the development team provide ROS 2 APIs to abstract PX4 conventions, along with examples demonstrating their use. These are planned in the near-term PX4 roadmap.")])]),t._v(" "),o("h2",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),o("p",[t._v("The easiest way to setup PX4 simulation with ROS (on Ubuntu Linux) is to use the standard installation script that can be found at "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[t._v("Development Environment on Linux > Gazebo with ROS")]),t._v(". The script installs everything you need: PX4, ROS, the Gazebo simulator, and "),o("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(".")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If you just need to install ROS then follow the "),o("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS Melodic installation instructions"),o("OutboundLink")],1),t._v(" for your platform.")])]),t._v(" "),o("h2",{attrs:{id:"external-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#external-resources"}},[t._v("#")]),t._v(" External Resources")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/robin-shaun/XTDrone/blob/master/README.en.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone"),o("OutboundLink")],1),t._v(" - ROS + PX4 simulation environment for computer vision. The "),o("a",{attrs:{href:"https://www.yuque.com/xtdrone/manual_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone Manual"),o("OutboundLink")],1),t._v(" has everything you need to get started!")])])])}),[],!1,null,null,null);e.default=r.exports}}]);