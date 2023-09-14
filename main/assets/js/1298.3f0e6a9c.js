(window.webpackJsonp=window.webpackJsonp||[]).push([[1298],{2406:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"multi-vehicle-simulation-with-gazebo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation-with-gazebo"}},[t._v("#")]),t._v(" Multi-Vehicle Simulation with Gazebo")]),t._v(" "),s("p",[t._v("This topic explains how to simulate multiple UAV vehicles using "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo (Gz)")]),t._v(" and SITL.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Multi-Vehicle Simulation with Gazebo is only supported on Linux.")])]),t._v(" "),s("p",[t._v("Gazebo makes it very easy to setup multi-vehicle scenarios (compared to other simulators).")]),t._v(" "),s("p",[t._v("First build PX4 SITL code using:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl\n")])])]),s("p",[t._v("Each instance of PX4 can then be launched in its own terminal, specifying a unique instance number and its desired combination of "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/#usage-configuration-options"}},[t._v("environment variables")]),t._v(":")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("ARGS ./build/px4_sitl_default/bin/px4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("<instance>")]),t._v(":\nThe instance number of the vehicle.\n"),s("ul",[s("li",[t._v("Each vehicle must have a unique instance number.\nIf not given, the instance number defaults to zero.")]),t._v(" "),s("li",[t._v("When used with "),s("code",[t._v("PX4_GZ_MODEL")]),t._v(", Gazebo will automatically pick a unique model name in the form "),s("code",[t._v("${PX4_GZ_MODEL}_instance")]),t._v(".")])])]),t._v(" "),s("li",[s("code",[t._v("ARGS")]),t._v(":\nA list of environmental variables, as described in "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/#usage-configuration-options"}},[t._v("Gazebo Simulation > Usage/Configuration Options")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("This allows for greater flexibility and customization.")]),t._v(" "),s("h2",{attrs:{id:"multiple-vehicles-with-ros-2-and-gazebo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-vehicles-with-ros-2-and-gazebo"}},[t._v("#")]),t._v(" Multiple Vehicles with ROS 2 and Gazebo")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/ros/ros2_multi_vehicle.html"}},[t._v("Multiple vehicles with ROS 2")]),t._v(" are possible.")],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("First follow the installation instructions for "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(".")],1)]),t._v(" "),s("li",[s("p",[t._v("Then configure your system for "),s("RouterLink",{attrs:{to:"/en/ros/ros2_comm.html#installation-setup"}},[t._v("ROS 2 / PX4 operations")]),t._v(".")],1)]),t._v(" "),s("li",[s("p",[t._v("In different terminals manually start a multi vehicle simulation.\nThis example spawns 2 X500 Quadrotors and a fixed wing:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SYS_AUTOSTART")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4001")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_GZ_MODEL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("x500 ./build/px4_sitl_default/bin/px4 -i "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SYS_AUTOSTART")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4001")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_GZ_MODEL_POSE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0,1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_GZ_MODEL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("x500 ./build/px4_sitl_default/bin/px4 -i "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SYS_AUTOSTART")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4004")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_GZ_MODEL_POSE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0,2"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_GZ_MODEL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rc_cessna ./build/px4_sitl_default/bin/px4 -i "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start the agent:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("MicroXRCEAgent udp4 -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v("\n")])])]),s("p",[t._v("The agent will automatically connect to all clients.")])]),t._v(" "),s("li",[s("p",[t._v("Run "),s("code",[t._v("ros2 topic list")]),t._v(" to see the topic list, which should look like this:")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/parameter_events\n/px4_1/fmu/in/obstacle_distance\n/px4_1/fmu/in/offboard_control_mode\n/px4_1/fmu/in/onboard_computer_status\n/px4_1/fmu/in/sensor_optical_flow\n/px4_1/fmu/in/telemetry_status\n/px4_1/fmu/in/trajectory_setpoint\n/px4_1/fmu/in/vehicle_attitude_setpoint\n/px4_1/fmu/in/vehicle_command\n/px4_1/fmu/in/vehicle_mocap_odometry\n/px4_1/fmu/in/vehicle_rates_setpoint\n/px4_1/fmu/in/vehicle_trajectory_bezier\n/px4_1/fmu/in/vehicle_trajectory_waypoint\n/px4_1/fmu/in/vehicle_visual_odometry\n/px4_1/fmu/out/failsafe_flags\n/px4_1/fmu/out/sensor_combined\n/px4_1/fmu/out/timesync_status\n/px4_1/fmu/out/vehicle_attitude\n/px4_1/fmu/out/vehicle_control_mode\n/px4_1/fmu/out/vehicle_global_position\n/px4_1/fmu/out/vehicle_gps_position\n/px4_1/fmu/out/vehicle_local_position\n/px4_1/fmu/out/vehicle_odometry\n/px4_1/fmu/out/vehicle_status\n/px4_2/fmu/in/obstacle_distance\n/px4_2/fmu/in/offboard_control_mode\n/px4_2/fmu/in/onboard_computer_status\n/px4_2/fmu/in/sensor_optical_flow\n/px4_2/fmu/in/telemetry_status\n/px4_2/fmu/in/trajectory_setpoint\n/px4_2/fmu/in/vehicle_attitude_setpoint\n/px4_2/fmu/in/vehicle_command\n/px4_2/fmu/in/vehicle_mocap_odometry\n/px4_2/fmu/in/vehicle_rates_setpoint\n/px4_2/fmu/in/vehicle_trajectory_bezier\n/px4_2/fmu/in/vehicle_trajectory_waypoint\n/px4_2/fmu/in/vehicle_visual_odometry\n/px4_2/fmu/out/failsafe_flags\n/px4_2/fmu/out/sensor_combined\n/px4_2/fmu/out/timesync_status\n/px4_2/fmu/out/vehicle_attitude\n/px4_2/fmu/out/vehicle_control_mode\n/px4_2/fmu/out/vehicle_global_position\n/px4_2/fmu/out/vehicle_gps_position\n/px4_2/fmu/out/vehicle_local_position\n/px4_2/fmu/out/vehicle_odometry\n/px4_2/fmu/out/vehicle_status\n/px4_3/fmu/in/obstacle_distance\n/px4_3/fmu/in/offboard_control_mode\n/px4_3/fmu/in/onboard_computer_status\n/px4_3/fmu/in/sensor_optical_flow\n/px4_3/fmu/in/telemetry_status\n/px4_3/fmu/in/trajectory_setpoint\n/px4_3/fmu/in/vehicle_attitude_setpoint\n/px4_3/fmu/in/vehicle_command\n/px4_3/fmu/in/vehicle_mocap_odometry\n/px4_3/fmu/in/vehicle_rates_setpoint\n/px4_3/fmu/in/vehicle_trajectory_bezier\n/px4_3/fmu/in/vehicle_trajectory_waypoint\n/px4_3/fmu/in/vehicle_visual_odometry\n/px4_3/fmu/out/failsafe_flags\n/px4_3/fmu/out/sensor_combined\n/px4_3/fmu/out/timesync_status\n/px4_3/fmu/out/vehicle_attitude\n/px4_3/fmu/out/vehicle_control_mode\n/px4_3/fmu/out/vehicle_global_position\n/px4_3/fmu/out/vehicle_gps_position\n/px4_3/fmu/out/vehicle_local_position\n/px4_3/fmu/out/vehicle_odometry\n/px4_3/fmu/out/vehicle_status\n/rosout\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);