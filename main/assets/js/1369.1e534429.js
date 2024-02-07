(window.webpackJsonp=window.webpackJsonp||[]).push([[1369],{2527:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"px4-autopilot-main-release-notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-autopilot-main-release-notes"}},[t._v("#")]),t._v(" PX4-Autopilot Main Release Notes")]),t._v(" "),r("p",[t._v("This contains changes to PX4 since the last major release (v1.14).")]),t._v(" "),r("h2",{attrs:{id:"read-before-upgrading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#read-before-upgrading"}},[t._v("#")]),t._v(" Read Before Upgrading")]),t._v(" "),r("p",[t._v("TBD ...")]),t._v(" "),r("h2",{attrs:{id:"major-changes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#major-changes"}},[t._v("#")]),t._v(" Major Changes")]),t._v(" "),r("ul",[r("li",[t._v("TBD")])]),t._v(" "),r("h2",{attrs:{id:"upgrade-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-guide"}},[t._v("#")]),t._v(" Upgrade Guide")]),t._v(" "),r("h2",{attrs:{id:"other-changes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-changes"}},[t._v("#")]),t._v(" Other changes")]),t._v(" "),r("h3",{attrs:{id:"hardware-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-support"}},[t._v("#")]),t._v(" Hardware Support")]),t._v(" "),r("ul",[r("li",[t._v("TBD")])]),t._v(" "),r("h3",{attrs:{id:"common"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[t._v("#")]),t._v(" Common")]),t._v(" "),r("ul",[r("li",[t._v("TBD")])]),t._v(" "),r("h3",{attrs:{id:"control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#control"}},[t._v("#")]),t._v(" Control")]),t._v(" "),r("ul",[r("li",[t._v("[offboard]"),r("RouterLink",{attrs:{to:"/en/flight_modes/offboard.html#ros-2-messages"}},[t._v("ros2 offboard control")]),t._v(" allows for direct motors and servo control.\nAdded in PX4 in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/22222",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#22222"),r("OutboundLink")],1),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"estimation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#estimation"}},[t._v("#")]),t._v(" Estimation")]),t._v(" "),r("ul",[r("li",[t._v("TBD")])]),t._v(" "),r("h3",{attrs:{id:"sensors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[t._v("#")]),t._v(" Sensors")]),t._v(" "),r("ul",[r("li",[t._v("TBD")])]),t._v(" "),r("h3",{attrs:{id:"simulation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#simulation"}},[t._v("#")]),t._v(" Simulation")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(": Support for "),r("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/vehicles.html#advanced-plane"}},[t._v("Advanced Plane")]),t._v(", a simulated fixed-wing vehicle that provides better aerodynamic simulation than the regular plane.\nAdded to PX4 in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/22167",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#22167"),r("OutboundLink")],1),t._v(" and "),r("a",{attrs:{href:"https://github.com/gazebosim/gz-sim/pull/2185",target:"_blank",rel:"noopener noreferrer"}},[t._v("gz-sim#2185"),r("OutboundLink")],1),t._v(" (advanced lift drag plugin).")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(": The environment variable "),r("code",[t._v("PX4_SIM_MODEL")]),t._v(" can now be used to indicate the simulation model.\nThis supersedes "),r("code",[t._v("PX4_GZ_MODEL")]),t._v(", which is now deprecated.\nAdded to PX4 in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/22400",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#22400"),r("OutboundLink")],1),t._v(".")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(": Separation of Gazebo and PX4 SITL.\nThe two parts of the simulation are now separated.\nThey can be independently launched in any order, and even run on different hosts across a network.\nGazebo additional supports drag-and-drop via the resource spawner in Gazebo GUI.\nAdded to PX4 in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/22467",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#22467"),r("OutboundLink")],1),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"uxrce-dds-ros2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uxrce-dds-ros2"}},[t._v("#")]),t._v(" uXRCE-DDS / ROS2")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/middleware/uxrce_dds.html"}},[t._v("uXRCE-DDS")]),t._v(": "),r("RouterLink",{attrs:{to:"/en/middleware/uxrce_dds.html#dds-topics-yaml"}},[t._v("DDS Topics YAML")]),t._v(" now allows the use of "),r("code",[t._v("subscription_multi")]),t._v(" to specify that indicated ROS 2 topics are sent to a separate uORB topic instance reserved for ROS 2.\nThis allows PX4 to differentiate between updates from ROS and those from PX4 uORB publishers.\nWith this change ROS2 users can now decide if the messages that they are sending to PX4 will overlap with the existing uORB ones or be kept in separate instances.\nAdded in PX4 in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/22266",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#22266"),r("OutboundLink")],1),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"mavlink"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mavlink"}},[t._v("#")]),t._v(" MAVLink")]),t._v(" "),r("ul",[r("li",[t._v("TBD")])]),t._v(" "),r("h3",{attrs:{id:"multi-rotor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multi-rotor"}},[t._v("#")]),t._v(" Multi-Rotor")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/flight_modes_mc/throw_launch.html"}},[t._v("Throw launch")]),r("Badge",{attrs:{text:"Experimental",type:"warning"}}),t._v(": Start a multicopter by throwing it into the air.\nAdded to PX4 in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21170",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21170"),r("OutboundLink")],1),t._v(".")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flight_modes_mc/position_slow.html"}},[t._v("Position Slow Mode")]),t._v(": A slower version of "),r("em",[t._v("Position mode")]),t._v(", where the maximum horizontal velocity, vertical velocity and yaw-rate axes can be configured to lower values (using parameters, RC controller knobs/switches, or MAVLink).\nAdded to PX4 in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/22102",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#22102"),r("OutboundLink")],1),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"vtol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),r("ul",[r("li",[t._v("TBD")])]),t._v(" "),r("h3",{attrs:{id:"fixed-wing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing"}},[t._v("#")]),t._v(" Fixed-wing")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config_vtol/vtol_without_airspeed_sensor.html"}},[t._v("Simplified airspeed sensor configuration")]),t._v(":\nReplacef parameter "),r("code",[t._v("CBRK_AIRSPD_CHK")]),t._v(" with "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_HAS_NUM_ASPD"}},[t._v("SYS_HAS_NUM_ASPD")]),t._v(" and renamed parameter "),r("code",[t._v("FW_ARSP_MODE")]),t._v(" to "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_USE_AIRSPD"}},[t._v("FW_USE_AIRSPD")]),t._v(".\nTo be able to arm without an airspeed sensor set "),r("code",[t._v("SYS_HAS_NUM_ASPD")]),t._v(" to 0.\nTo not use the airspeed sensor data in the controller, set "),r("code",[t._v("FW_USE_AIRSPD")]),t._v(" to 0.\nAdded to PX4 in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/22510",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#22510"),r("OutboundLink")],1),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"rover"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rover"}},[t._v("#")]),t._v(" Rover")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/frames_rover/aion_r1.html"}},[t._v("Aion R1")]),r("Badge",{attrs:{text:"Experimental",type:"warning"}}),t._v(": ESC Driver for Roboclaw motor controller. This comes with build instructions and support for the Aion R1, a new differential drive rover, along with information about integrating the Roboclaw motor controller.")],1)]),t._v(" "),r("h3",{attrs:{id:"ros-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ros-2"}},[t._v("#")]),t._v(" ROS 2")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/ros2/px4_ros2_interface_lib.html"}},[t._v("PX4 ROS 2 Interface Library")]),r("Badge",{attrs:{text:"Experimental",type:"warning"}}),t._v(": A new C++ library that simplifies controlling PX4 from ROS 2.\nSupports adding flight modes in ROS 2 that are peers of the PX4 modes running on the flight controller.\nAdded to PX4 in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20707",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20707"),r("OutboundLink")],1),t._v(" (initial support). Goto Setpoint: https://github.com/PX4/PX4-Autopilot/pull/22375")],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);