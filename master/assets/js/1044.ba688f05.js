(window.webpackJsonp=window.webpackJsonp||[]).push([[1044],{2205:function(e,t,a){"use strict";a.r(t);var o=a(18),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"multi-vehicle-simulation-with-gazebo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation-with-gazebo"}},[e._v("#")]),e._v(" Multi-Vehicle Simulation with Gazebo")]),e._v(" "),a("p",[e._v("This topic explains how to simulate multiple UAV vehicles using Gazebo and SITL (Linux only). A different approach is used for simulation with and without ROS.")]),e._v(" "),a("p",[a("a",{attrs:{id:"no_ros"}})]),e._v(" "),a("h2",{attrs:{id:"multiple-vehicle-with-gazebo-no-ros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-vehicle-with-gazebo-no-ros"}},[e._v("#")]),e._v(" Multiple Vehicle with Gazebo (No ROS)")]),e._v(" "),a("p",[e._v("To simulate multiple iris or plane vehicles in Gazebo use the following commands in the terminal (from the root of the "),a("em",[e._v("Firmware")]),e._v(" tree):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Tools/gazebo_sitl_multiple_run.sh [-m <model>] [-n <number_of_vehicles>] [-w <world>] [-s <script>] [-t <target>]\n")])])]),a("ul",[a("li",[a("p",[a("code",[e._v("<model>")]),e._v(": The "),a("RouterLink",{attrs:{to:"/ko/simulation/gazebo_vehicles.html"}},[e._v("vehicle type/model")]),e._v(" to spawn, e.g.: "),a("code",[e._v("iris")]),e._v(" (default), "),a("code",[e._v("plane")]),e._v(", "),a("code",[e._v("standard_vtol")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("<number_of_vehicles>")]),e._v(": The number of vehicles to spawn. Default is 3. Maximum is 255.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<world>")]),e._v(": The "),a("RouterLink",{attrs:{to:"/ko/simulation/gazebo_worlds.html"}},[e._v("world")]),e._v(" that the vehicle should be spawned into, e.g.: "),a("code",[e._v("empty")]),e._v(" (default)")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("<script>")]),e._v(": Spawn multiple vehicles of different types (overriding the values in "),a("code",[e._v("-m")]),e._v(" and "),a("code",[e._v("-n")]),e._v("). For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('-s "iris:3,plane:2,standard_vtol:3"\n')])])]),a("ul",[a("li",[e._v("Supported vehicle types are: "),a("code",[e._v("iris")]),e._v(", "),a("code",[e._v("plane")]),e._v(", "),a("code",[e._v("standard_vtol")]),e._v(".")]),e._v(" "),a("li",[e._v("The number after the colon indicates the number of vehicles (of that type) to spawn.")]),e._v(" "),a("li",[e._v("Maximum number of vehicles is 255.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<target>")]),e._v(": build target, e.g: "),a("code",[e._v("px4_sitl_default")]),e._v(" (default), "),a("code",[e._v("px4_sitl_rtps")])])])]),e._v(" "),a("p",[e._v("Each vehicle instance is allocated a unique MAVLink system id (1, 2, 3, etc.) and can be accessed from a unique remote offboard UDP port (14540, 14541, 14542, etc.).")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The 255-vehicle limitation occurs because mavlink "),a("code",[e._v("MAV_SYS_ID")]),e._v(" only supports 255 vehicles in the same network The "),a("code",[e._v("MAV_SYS_ID")]),e._v(" and various UDP ports are allocated in the SITL rcS: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS#L108-L112",target:"_blank",rel:"noopener noreferrer"}},[e._v("init.d-posix/rcS"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("a",{attrs:{id:"video_mc"}})]),e._v(" "),a("h3",{attrs:{id:"video-multiple-multicopter-iris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-multiple-multicopter-iris"}},[e._v("#")]),e._v(" Video: Multiple Multicopter (Iris)")]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/Mskx_WxzeCk",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),e._v(" "),a("p",[a("a",{attrs:{id:"video_fw"}})]),e._v(" "),a("h3",{attrs:{id:"video-multiple-plane"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-multiple-plane"}},[e._v("#")]),e._v(" Video: Multiple Plane")]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/aEzFKPMEfjc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),e._v(" "),a("p",[a("a",{attrs:{id:"video_vtol"}})]),e._v(" "),a("h3",{attrs:{id:"video-multiple-vtol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-multiple-vtol"}},[e._v("#")]),e._v(" Video: Multiple VTOL")]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/lAjjTFFZebI",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),e._v(" "),a("p",[a("a",{attrs:{id:"with_rtps"}})]),e._v(" "),a("h3",{attrs:{id:"build-and-test-rtps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-test-rtps"}},[e._v("#")]),e._v(" Build and Test (RTPS)")]),e._v(" "),a("p",[e._v("To simulate multiple vehicles based on RTPS in Gazebo, use the "),a("code",[e._v("gazebo_sitl_multiple_run.sh")]),e._v(" command in the terminal with the "),a("code",[e._v("-t px4_sitl_rtps")]),e._v(" option from the root of the "),a("em",[e._v("PX4-Autopilot")]),e._v(" tree (as described above). Here we will use the "),a("code",[e._v("-t px4_sitl_rtps")]),e._v(" option, which sets that we will use RTPS for communicating with  PX4 rather than the MAVLink Simulation API. This will build and run the "),a("code",[e._v("iris_rtps")]),e._v(" model (the only model that is currently implemented for use with RTPS).")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("You will need to have installed RTPS and the "),a("code",[e._v("micrortps_agent")]),e._v(" should be run in the different terminal for each vehicle. For more information see: "),a("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[e._v("RTPS/ROS2 Interface: PX4-FastRTPS Bridge")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("To build an example setup, follow the steps below:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clone the PX4/Firmware code, then build the SITL code:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" Firmware_clone\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --init --recursive\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DONT_RUN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl_rtps gazebo\n")])])])]),e._v(" "),a("li",[a("p",[e._v("build "),a("code",[e._v("micrortps_agent")])]),e._v(" "),a("ul",[a("li",[e._v("To use agent in ROS-independent RTPS, follow the "),a("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#agent-in-a-ros-independent-offboard-fast-rtps-interface"}},[e._v("installation instructions here")])],1),e._v(" "),a("li",[e._v("To use the agent in ROS2, follow the "),a("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#agent-interfacing-with-a-ros2-middleware"}},[e._v("instructions here")])],1)])]),e._v(" "),a("li",[a("p",[e._v("Run "),a("code",[e._v("gazebo_sitl_multiple_run.sh")]),e._v(". For example, to spawn 4 vehicles, run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./Tools/gabo_sitl_multiple_run.sh  -m iris_rtps -t px4_sitl_rtps -n "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Each vehicle instance is allocated a unique MAVLink system id (1, 2, 3, etc.), can receive data from a unique remote UDP port (2019, 2021, 2023, etc.), and transmit data to UDP port (2020, 2022, 2024, etc.).")])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Run "),a("code",[e._v("micrortps_agent")]),e._v(". For example, to connect 4 vehicles, run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("micrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\nmicrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\nmicrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2024")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2023")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\nmicrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2026")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2025")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])])])]),e._v(" "),a("p",[a("a",{attrs:{id:"with_ros"}})]),e._v(" "),a("h2",{attrs:{id:"multiple-vehicles-with-ros-and-gazebo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-vehicles-with-ros-and-gazebo"}},[e._v("#")]),e._v(" Multiple Vehicles with ROS and Gazebo")]),e._v(" "),a("p",[e._v("This example demonstrates a setup that opens the Gazebo client GUI showing two Iris vehicles in an empty world. You can then control the vehicles with "),a("em",[e._v("QGroundControl")]),e._v(" and MAVROS in a similar way to how you would manage a single vehicle.")]),e._v(" "),a("h3",{attrs:{id:"required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#required"}},[e._v("#")]),e._v(" Required")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Current "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[e._v("PX4 ROS/Gazebo development environment")])],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("At time of writing this is Ubuntu 18.04 with ROS Melodic/Gazebo 9. See also [Gazebo Simulation](../simulation/gazebo.md).")])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://wiki.ros.org/mavros",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVROS package"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("a clone of latest "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Autopilot"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"build-and-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-test"}},[e._v("#")]),e._v(" Build and Test")]),e._v(" "),a("p",[e._v("To build an example setup, follow the step below:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clone the PX4/PX4-Autopilot code, then build the SITL code")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd Firmware_clone\ngit submodule update --init --recursive\nDONT_RUN=1 make px4_sitl_default gazebo\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Source your environment:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("source Tools/setup_gazebo.bash $(pwd) $(pwd)/build/px4_sitl_default\nexport ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:$(pwd):$(pwd)/Tools/sitl_gazebo\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Run launch file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("roslaunch px4 multi_uav_mavros_sitl.launch\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("You can specify `gui:=false` in the above *roslaunch* to launch Gazebo without its UI.")])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("The tutorial example opens the Gazebo client GUI showing two Iris vehicles in an empty world.")]),e._v(" "),a("p",[e._v("You can control the vehicles with "),a("em",[e._v("QGroundControl")]),e._v(" or MAVROS in a similar way to how you would manage a single vehicle:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("QGroundControl")]),e._v(' will have a drop-down to select the vehicle that is "in focus"')]),e._v(" "),a("li",[e._v("MAVROS requires that you include the proper namespace before the topic/service path (e.g. for "),a("code",[e._v('<group ns="uav1">')]),e._v(" you'll use "),a("em",[e._v("/uav1/mavros/mission/push")]),e._v(").")])]),e._v(" "),a("h3",{attrs:{id:"what-s-happening"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-happening"}},[e._v("#")]),e._v(" What's Happening?")]),e._v(" "),a("p",[e._v("For each simulated vehicle, the following is required:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Gazebo model")]),e._v(": This is defined as "),a("code",[e._v("xacro")]),e._v(" file in "),a("code",[e._v("PX4-Autopilot/Tools/sitl_gazebo/models/rotors_description/urdf/<model>_base.xacro")]),e._v(" see "),a("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/tree/02060a86652b736ca7dd945a524a8bf84eaf5a05/models/rotors_description/urdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". Currently, the model "),a("code",[e._v("xacro")]),e._v(" file is assumed to end with "),a("strong",[e._v("base.xacro")]),e._v(". This model should have an argument called  "),a("code",[e._v("mavlink_udp_port")]),e._v(" which defines the UDP port on which gazebo will communicate with PX4 node. The model's "),a("code",[e._v("xacro")]),e._v(" file will be used to generate an "),a("code",[e._v("urdf")]),e._v(" model that contains UDP port that you select. To define the UDP port, set the "),a("code",[e._v("mavlink_udp_port")]),e._v(" in the launch file for each vehicle, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L37",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" as an example.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("If you are using the same vehicle model, you don't need a separate **`xacro`** file for each vehicle. The same **`xacro`** file is adequate.")])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("PX4 node")]),e._v(": This is the SITL PX4 app. It communicates with the simulator, Gazebo, through the same UDP port defined in the Gazebo vehicle model, i.e. "),a("code",[e._v("mavlink_udp_port")]),e._v(". To set the UDP port on the PX4 SITL app side, you need to set the "),a("code",[e._v("SITL_UDP_PRT")]),e._v(" parameter in the startup file to match the "),a("code",[e._v("mavlink_udp_port")]),e._v(" discussed previously, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/posix-configs/SITL/init/ekf2/iris_2#L46",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". The path of the startup file in the launch file is generated based on the "),a("code",[e._v("vehicle")]),e._v(" and "),a("code",[e._v("ID")]),e._v(" arguments, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L36",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". The "),a("code",[e._v("MAV_SYS_ID")]),e._v(" for each vehicle in the startup file, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/posix-configs/SITL/init/ekf2/iris_2#L4",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(", should match the "),a("code",[e._v("ID")]),e._v(" for that vehicle in the launch file "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L25",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". This will help make sure you keep the configurations consistent between the launch file and the startup file.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("MAVROS node")]),e._v(" (optional): A seperate MAVROS node can be run in the launch file, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L41",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(", in order to connect to PX4 SITL app, if you want to control your vehicle through ROS. You need to start a MAVLink stream on a unique set of ports in the startup file, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/posix-configs/SITL/init/ekf2/iris_1#L68",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". Those unique set of ports need to match those in the launch file for the MAVROS node, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L26",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("p",[e._v("The launch file "),a("code",[e._v("multi_uav_mavros_sitl.launch")]),e._v("does the following,")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("loads a world in gazebo,")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  \x3c!-- Gazebo sim --\x3e\n  <include file="$(find gazebo_ros)/launch/empty_world.launch">\n      <arg name="gui" value="$(arg gui)"/>\n      <arg name="world_name" value="$(arg world)"/>\n      <arg name="debug" value="$(arg debug)"/>\n      <arg name="verbose" value="$(arg verbose)"/>\n      <arg name="paused" value="$(arg paused)"/>\n  </include>\n')])])])]),e._v(" "),a("li",[a("p",[e._v("for each vehicle,")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("creates urdf model from xacro, loads gazebo model and runs PX4 SITL app instance")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  \x3c!-- PX4 SITL and vehicle spawn --\x3e\n  <include file="$(find px4)/launch/single_vehicle_spawn.launch">\n      <arg name="x" value="0"/>\n      <arg name="y" value="0"/>\n      <arg name="z" value="0"/>\n      <arg name="R" value="0"/>\n      <arg name="P" value="0"/>\n      <arg name="Y" value="0"/>\n      <arg name="vehicle" value="$(arg vehicle)"/>\n      <arg name="rcS" value="$(find px4)/posix-configs/SITL/init/$(arg est)/$(arg vehicle)_$(arg ID)"/>\n      <arg name="mavlink_tcp_port" value="4560"/>\n      <arg name="ID" value="$(arg ID)"/>\n  </include>\n')])])])]),e._v(" "),a("li",[a("p",[e._v("runs a mavros node")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  \x3c!-- MAVROS --\x3e\n  <include file="$(find mavros)/launch/px4.launch">\n      <arg name="fcu_url" value="$(arg fcu_url)"/>\n      <arg name="gcs_url" value=""/>\n      <arg name="tgt_system" value="$(arg ID)"/>\n      <arg name="tgt_component" value="1"/>\n  </include>\n')])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("The complete block for each vehicle is enclosed in a set of `"),a("group",[e._v("` tags to separate the ROS namespaces of the vehicles.")])],1)])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("To add a third iris to this simulation there are two main components to consider:")]),e._v(" "),a("ul",[a("li",[e._v("add "),a("code",[e._v("UAV3")]),e._v(" to "),a("strong",[e._v("multi_uav_mavros_sitl.launch")]),e._v(" "),a("ul",[a("li",[e._v("duplicate the group of either existing vehicle ("),a("code",[e._v("UAV1")]),e._v(" or "),a("code",[e._v("UAV2")]),e._v(")")]),e._v(" "),a("li",[e._v("increment the "),a("code",[e._v("ID")]),e._v(" arg to "),a("code",[e._v("3")])]),e._v(" "),a("li",[e._v("select a different port for "),a("code",[e._v("mavlink_udp_port")]),e._v(" arg for communication with Gazebo")]),e._v(" "),a("li",[e._v("selects ports for MAVROS communication by modifying both port numbers in the "),a("code",[e._v("fcu_url")]),e._v(" arg")])])]),e._v(" "),a("li",[e._v("create a startup file, and change the file as follows:\n"),a("ul",[a("li",[a("p",[e._v("make a copy of an existing iris rcS startup file ("),a("code",[e._v("iris_1")]),e._v(" or "),a("code",[e._v("iris_2")]),e._v(") and rename it "),a("code",[e._v("iris_3")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("MAV_SYS_ID")]),e._v(" value to "),a("code",[e._v("3")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("SITL_UDP_PRT")]),e._v(" value to match that of the "),a("code",[e._v("mavlink_udp_port")]),e._v(" launch file arg")])]),e._v(" "),a("li",[a("p",[e._v("the first "),a("code",[e._v("mavlink start")]),e._v(" port and the "),a("code",[e._v("mavlink stream")]),e._v(" port values to the same values, which is to be used for QGC communication")])]),e._v(" "),a("li",[a("p",[e._v("the second "),a("code",[e._v("mavlink start")]),e._v(" ports need to match those used in the launch file "),a("code",[e._v("fcu_url")]),e._v(" arg")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Be aware of which port is `src` and `dst` for the different endpoints.")])])])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("h2",{attrs:{id:"multiple-vehicles-using-sdf-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-vehicles-using-sdf-models"}},[e._v("#")]),e._v(" Multiple Vehicles using SDF Models")]),e._v(" "),a("p",[e._v("This section shows how developers can simulate multiple vehicles using vehicle models defined in Gazebo SDF files (instead of using models defined in the ROS Xacro file, as discussed in the rest of this topic).")]),e._v(" "),a("p",[e._v("The steps are:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install "),a("em",[e._v("xmlstarlet")]),e._v(" from your Linux terminal:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt install xmlstarlet\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Use "),a("em",[e._v("roslaunch")]),e._v(" with the "),a("strong",[e._v("multi_uav_mavros_sitl_sdf.launch")]),e._v(" launch file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("roslaunch multi_uav_mavros_sitl_sdf.launch vehicle:=<model_file_name>\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note that the vehicle model file name argument is optional (`vehicle:="),a("model_file_name",[e._v("`); if omitted the [plane model](https://github.com/PX4/sitl_gazebo/tree/master/models/plane) will be used by default.")])],1)])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("This method is similar to using the xacro except that the SITL/Gazebo port number is automatically inserted by "),a("em",[e._v("xmstarlet")]),e._v(" for each spawned vehicle, and does not need to be specified in the SDF file.")]),e._v(" "),a("p",[e._v("To add a new vehicle, you need to make sure the model can be found (in order to spawn it in Gazebo), and PX4 needs to have an appropriate corresponding startup script.")]),e._v(" "),a("ol",[a("li",[e._v("You can choose to do either of:\n"),a("ul",[a("li",[e._v("modify the "),a("strong",[e._v("single_vehicle_spawn_sdf.launch")]),e._v(" file to point to the location of your model by changing the line below to point to your model:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$(find px4)/Tools/sitl_gazebo/models/$(arg vehicle)/$(arg vehicle).sdf\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Ensure you set the `vehicle` argument even if you hardcode the path to your model.")])])])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("ul",[a("li",[e._v("copy your model into the folder indicated above (following the same path convention).")])]),e._v(" "),a("ol",[a("li",[e._v("The "),a("code",[e._v("vehicle")]),e._v(" argument is used to set the "),a("code",[e._v("PX4_SIM_MODEL")]),e._v(" environment variable, which is used by the default rcS (startup script) to find the corresponding startup settings file for the model. Within PX4 these startup files can be found in the "),a("strong",[e._v("PX4-Autopilot/ROMFS/px4fmu_common/init.d-posix/")]),e._v(" directory. For example, here is the plane model's "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/1030_plane",target:"_blank",rel:"noopener noreferrer"}},[e._v("startup script"),a("OutboundLink")],1),e._v(". For this to work, the PX4 node in the launch file is passed arguments that specify the "),a("em",[e._v("rcS")]),e._v(" file ("),a("strong",[e._v("etc/init.d/rcS")]),e._v(") and the location of the rootfs etc directory ("),a("code",[e._v("$(find px4)/build_px4_sitl_default/etc")]),e._v("). For simplicity, it is suggested that the startup file for the model be placed alongside PX4's in "),a("strong",[e._v("PX4-Autopilot/ROMFS/px4fmu_common/init.d-posix/")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"additional-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources"}},[e._v("#")]),e._v(" Additional Resources")]),e._v(" "),a("ul",[a("li",[e._v("See "),a("RouterLink",{attrs:{to:"/ko/simulation/"}},[e._v("Simulation")]),e._v(" for a description of the UDP port configuration.")],1),e._v(" "),a("li",[e._v("See "),a("a",{attrs:{href:"http://gazebosim.org/tutorials/?tut=ros_urdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("URDF in Gazebo"),a("OutboundLink")],1),e._v(" for more information about spawning the model with xacro.")]),e._v(" "),a("li",[e._v("See "),a("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator/tree/master/rotors_description/urdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("RotorS"),a("OutboundLink")],1),e._v(" for more xacro models.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);