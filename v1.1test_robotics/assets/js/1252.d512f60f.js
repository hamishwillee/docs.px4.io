(window.webpackJsonp=window.webpackJsonp||[]).push([[1252],{2643:function(e,t,a){"use strict";a.r(t);var o=a(18),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gazebo-多机仿真"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-多机仿真"}},[e._v("#")]),e._v(" Gazebo 多机仿真")]),e._v(" "),a("p",[e._v("本文介绍如何使用 Gazebo 仿真器配合软件在环仿真进行多机仿真（仅适用于 Linux ）。 A different approach is used for simulation with and without ROS.")]),e._v(" "),a("p",[a("a",{attrs:{id:"no_ros"}})]),e._v(" "),a("h2",{attrs:{id:"multiple-vehicle-with-gazebo-no-ros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-vehicle-with-gazebo-no-ros"}},[e._v("#")]),e._v(" Multiple Vehicle with Gazebo (No ROS)")]),e._v(" "),a("p",[e._v("To simulate multiple iris or plane vehicles in Gazebo use the following commands in the terminal (from the root of the "),a("em",[e._v("Firmware")]),e._v(" tree):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Tools/gazebo_sitl_multiple_run.sh [-m <model>] [-n <number_of_vehicles>] [-w <world>] [-s <script>] [-t <target>]\n")])])]),a("ul",[a("li",[a("p",[a("code",[e._v("<model>")]),e._v(": The "),a("RouterLink",{attrs:{to:"/zh/simulation/gazebo_vehicles.html"}},[e._v("vehicle type/model")]),e._v(" to spawn, e.g.: "),a("code",[e._v("iris")]),e._v(" (default), "),a("code",[e._v("plane")]),e._v(", "),a("code",[e._v("standard_vtol")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("<number_of_vehicles>")]),e._v(": The number of vehicles to spawn. Default is 3. Maximum is 255.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<world>")]),e._v(": The "),a("RouterLink",{attrs:{to:"/zh/simulation/gazebo_worlds.html"}},[e._v("world")]),e._v(" that the vehicle should be spawned into, e.g.: "),a("code",[e._v("empty")]),e._v(" (default)")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("<script>")]),e._v(": Spawn multiple vehicles of different types (overriding the values in "),a("code",[e._v("-m")]),e._v(" and "),a("code",[e._v("-n")]),e._v("). 例如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('-s "iris:3,plane:2,standard_vtol:3"\n')])])]),a("ul",[a("li",[e._v("Supported vehicle types are: "),a("code",[e._v("iris")]),e._v(", "),a("code",[e._v("plane")]),e._v(", "),a("code",[e._v("standard_vtol")]),e._v(".")]),e._v(" "),a("li",[e._v("The number after the colon indicates the number of vehicles (of that type) to spawn.")]),e._v(" "),a("li",[e._v("Maximum number of vehicles is 255.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<target>")]),e._v(": build target, e.g: "),a("code",[e._v("px4_sitl_default")]),e._v(" (default), "),a("code",[e._v("px4_sitl_rtps")])])])]),e._v(" "),a("p",[e._v("Each vehicle instance is allocated a unique MAVLink system id (1, 2, 3, etc.). Vehicle instances are accessed from sequentially allocated PX4 remote UDP ports: "),a("code",[e._v("14540")]),e._v(" - "),a("code",[e._v("14548")]),e._v(" (additional instances are all accessed using the same remote UDP port: "),a("code",[e._v("14549")]),e._v(").")]),e._v(" "),a("p",[e._v("{% youtube %}")]),e._v(" "),a("p",[a("a",{attrs:{id:"video_mc"}})]),e._v(" "),a("h3",{attrs:{id:"video-multiple-multicopter-iris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-multiple-multicopter-iris"}},[e._v("#")]),e._v(" Video: Multiple Multicopter (Iris)")]),e._v(" "),a("p",[e._v("@https://youtu.be/Mskx_WxzeCk")]),e._v(" "),a("p",[a("a",{attrs:{id:"video_fw"}})]),e._v(" "),a("h3",{attrs:{id:"video-multiple-plane"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-multiple-plane"}},[e._v("#")]),e._v(" Video: Multiple Plane")]),e._v(" "),a("p",[e._v("@{% endyoutube %}")]),e._v(" "),a("p",[a("a",{attrs:{id:"video_vtol"}})]),e._v(" "),a("h3",{attrs:{id:"video-multiple-vtol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-multiple-vtol"}},[e._v("#")]),e._v(" Video: Multiple VTOL")]),e._v(" "),a("p",[e._v("@{% youtube %}")]),e._v(" "),a("p",[a("a",{attrs:{id:"with_dds"}})]),e._v(" "),a("h3",{attrs:{id:"build-and-test-rtps-dds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-test-rtps-dds"}},[e._v("#")]),e._v(" Build and Test (RTPS/DDS)")]),e._v(" "),a("p",[e._v("To simulate multiple vehicles based on RTPS/DDS in Gazebo, use the "),a("code",[e._v("gazebo_sitl_multiple_run.sh")]),e._v(" command in the terminal with the "),a("code",[e._v("-t px4_sitl_rtps")]),e._v(" option from the root of the "),a("em",[e._v("PX4-Autopilot")]),e._v(" tree (as described above). Here we will use the "),a("code",[e._v("-t px4_sitl_rtps")]),e._v(" option, which sets that we will use RTPS for communicating with PX4 rather than the MAVLink Simulation API. This will build and run the "),a("code",[e._v("iris_rtps")]),e._v(" model (the only model that is currently implemented for use with RTPS).")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("You will need to have installed "),a("em",[e._v("eProsima Fast DDS")]),e._v(" and the "),a("code",[e._v("micrortps_agent")]),e._v(" should be run in the different terminals for each vehicle. For more information see: "),a("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html"}},[e._v("RTPS/DDS Interface: PX4-Fast RTPS(DDS) Bridge")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("{% youtube %}")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("克隆 PX4 固件源码, 然后编译 SITL 代码:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" Firmware_clone\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --init --recursive\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DONT_RUN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl_rtps gazebo\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Build the "),a("code",[e._v("micrortps_agent")])]),e._v(" "),a("ul",[a("li",[e._v("To use the agent in ROS-independent RTPS/DDS applications, follow the "),a("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html#agent-in-a-ros-independent-offboard-fast-rtps-interface"}},[e._v("installation instructions here")])],1),e._v(" "),a("li",[e._v("To use the agent in ROS 2, follow the "),a("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html"}},[e._v("instructions here")])],1)])]),e._v(" "),a("li",[a("p",[e._v("Run "),a("code",[e._v("gazebo_sitl_multiple_run.sh")]),e._v(". For example, to spawn 4 vehicles, run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./Tools/gabo_sitl_multiple_run.sh  -m iris_rtps -t px4_sitl_rtps -n "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("\n")])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Each vehicle instance is allocated a unique MAVLink system id (1, 2, 3, etc.), can receive data from a unique remote UDP port (2019, 2021, 2023, etc.), and transmit data to UDP port (2020, 2022, 2024, etc.).")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Run "),a("code",[e._v("micrortps_agent")]),e._v(". For example, to connect 4 vehicles, run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("micrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\nmicrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\nmicrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2024")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2023")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\nmicrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2026")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2025")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])])])]),e._v(" "),a("p",[a("a",{attrs:{id:"with_ros"}})]),e._v(" "),a("h2",{attrs:{id:"multiple-vehicles-with-ros-and-gazebo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-vehicles-with-ros-and-gazebo"}},[e._v("#")]),e._v(" Multiple Vehicles with ROS and Gazebo")]),e._v(" "),a("p",[e._v("This example demonstrates a setup that opens the Gazebo client GUI showing two Iris vehicles in an empty world. You can then control the vehicles with "),a("em",[e._v("QGroundControl")]),e._v(" and MAVROS in a similar way to how you would manage a single vehicle.")]),e._v(" "),a("h3",{attrs:{id:"仿真前准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仿真前准备"}},[e._v("#")]),e._v(" 仿真前准备")]),e._v(" "),a("ul",[a("li",[e._v("Current "),a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[e._v("PX4 ROS/Gazebo development environment")])],1)]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("At time of writing this is Ubuntu 18.04 with ROS Melodic/Gazebo 9. See also "),a("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[e._v("Gazebo Simulation")]),e._v(".")],1)]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://wiki.ros.org/mavros",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVROS package"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("a clone of latest "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Autopilot"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"开始仿真"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始仿真"}},[e._v("#")]),e._v(" 开始仿真")]),e._v(" "),a("p",[e._v("{% endyoutube %}")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clone the PX4/PX4-Autopilot code, then build the SITL code")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd Firmware_clone\ngit submodule update --init --recursive\nDONT_RUN=1 make px4_sitl_default gazebo\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Source your environment:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("source Tools/setup_gazebo.bash $(pwd) $(pwd)/build/px4_sitl_default\nexport ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:$(pwd):$(pwd)/Tools/sitl_gazebo\n")])])])]),e._v(" "),a("li",[a("p",[e._v("运行启动文件:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("roslaunch px4 multi_uav_mavros_sitl.launch\n")])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("You can specify "),a("code",[e._v("gui:=false")]),e._v(" in the above "),a("em",[e._v("roslaunch")]),e._v(" to launch Gazebo without its UI.")])]),e._v(" "),a("p",[e._v("The tutorial example opens the Gazebo client GUI showing two Iris vehicles in an empty world.")]),e._v(" "),a("p",[e._v("You can control the vehicles with "),a("em",[e._v("QGroundControl")]),e._v(" or MAVROS in a similar way to how you would manage a single vehicle:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("QGroundControl")]),e._v(" 中有一个下拉选项，你可以选择指定的飞行器。")]),e._v(" "),a("li",[e._v("MAVROS 要求你在 topic/service 路径之前包含合适的命名空间，（例如，你会用到 "),a("em",[e._v("/uav1/mavros/mission/push")]),e._v(" ）。")])]),e._v(" "),a("h3",{attrs:{id:"发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发生了什么"}},[e._v("#")]),e._v(" 发生了什么？")]),e._v(" "),a("p",[e._v("For each simulated vehicle, the following is required:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Gazebo model")]),e._v(": This is defined as "),a("code",[e._v("xacro")]),e._v(" file in "),a("code",[e._v("PX4-Autopilot/Tools/sitl_gazebo/models/rotors_description/urdf/<model>_base.xacro")]),e._v(" see "),a("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/tree/02060a86652b736ca7dd945a524a8bf84eaf5a05/models/rotors_description/urdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". Currently, the model "),a("code",[e._v("xacro")]),e._v(" file is assumed to end with "),a("strong",[e._v("base.xacro")]),e._v(". 此模型应该有一个名为 "),a("code",[e._v("mavlink_udp_port")]),e._v(" 的参数, 该参数定义了与 px4 节点通信的 udp 端口。 模型的 "),a("code",[e._v("xacro")]),e._v(" 文件将用于生成包含您选择的 udp 端口的 "),a("code",[e._v("urdf")]),e._v(" 模型。 若要定义 udp 端口，请在每个飞行器的启动文件中设置 "),a("code",[e._v("mavlink_udp_port")]),e._v("，请参阅例子"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L37",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("。")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("If you are using the same vehicle model, you don't need a separate "),a("strong",[a("code",[e._v("xacro")])]),e._v(" file for each vehicle. The same "),a("strong",[a("code",[e._v("xacro")])]),e._v(" file is adequate.")])]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("PX4 node")]),e._v(": This is the SITL PX4 app. It communicates with the simulator, Gazebo, through the same UDP port defined in the Gazebo vehicle model, i.e. "),a("code",[e._v("mavlink_udp_port")]),e._v(". 要在 px4 sitl 应用程序端设置 udp 端口, 您需要在启动文件中设置 "),a("code",[e._v("SITL_UDP_PRT")]),e._v(" 参数, 以匹配前面讨论的 "),a("code",[e._v("mavlink_udp_port")]),e._v(", 请参阅 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/posix-configs/SITL/init/ekf2/iris_2#L46",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("。 启动文件中的开始文件路径由参数 "),a("code",[e._v("vehicle")]),e._v("和"),a("code",[e._v("ID")]),e._v("产生，参考"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L36",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),a("OutboundLink")],1),e._v("。 The "),a("code",[e._v("MAV_SYS_ID")]),e._v(" for each vehicle in the startup file, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/posix-configs/SITL/init/ekf2/iris_2#L4",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(", should match the "),a("code",[e._v("ID")]),e._v(" for that vehicle in the launch file "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L25",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". 这样能够帮助你确保启动文件和开始文件中的设置相同。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("MAVROS node")]),e._v("（可选）: 如果要通过 ros 控制车辆, 可以在启动文件中运行一个单独的 mavros 节点， 请参阅 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L41",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(", 以便连接到 px4 sitl 应用程序。 您需要在启动文件中一些特殊的端口上启动 mavlink 流, 请参阅 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/posix-configs/SITL/init/ekf2/iris_1#L68",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),a("OutboundLink")],1),e._v("。 这些特殊端口需要与launch文件中为MAVROS节点设置的相符合。参考"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L26",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),a("OutboundLink")],1),e._v("。")])])]),e._v(" "),a("p",[e._v("构建一个示例设置, 请按照以下步骤操作:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在gazebo中加载一个世界")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  \x3c!-- Gazebo sim --\x3e\n  <include file="$(find gazebo_ros)/launch/empty_world.launch">\n      <arg name="gui" value="$(arg gui)"/>\n      <arg name="world_name" value="$(arg world)"/>\n      <arg name="debug" value="$(arg debug)"/>\n      <arg name="verbose" value="$(arg verbose)"/>\n      <arg name="paused" value="$(arg paused)"/>\n  </include>\n')])])])]),e._v(" "),a("li",[a("p",[e._v("对于每个飞行器来说")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("从 xacro 创建 urdf 模型, 加载gazebo模型并运行 px4 sitl 应用程序实例")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  \x3c!-- PX4 SITL and vehicle spawn --\x3e\n  <include file="$(find px4)/launch/single_vehicle_spawn.launch">\n      <arg name="x" value="0"/>\n      <arg name="y" value="0"/>\n      <arg name="z" value="0"/>\n      <arg name="R" value="0"/>\n      <arg name="P" value="0"/>\n      <arg name="Y" value="0"/>\n      <arg name="vehicle" value="$(arg vehicle)"/>\n      <arg name="rcS" value="$(find px4)/posix-configs/SITL/init/$(arg est)/$(arg vehicle)_$(arg ID)"/>\n      <arg name="mavlink_tcp_port" value="4560"/>\n      <arg name="ID" value="$(arg ID)"/>\n  </include>\n')])])])]),e._v(" "),a("li",[a("p",[e._v("运行mavros节点")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  \x3c!-- MAVROS --\x3e\n  <include file="$(find mavros)/launch/px4.launch">\n      <arg name="fcu_url" value="$(arg fcu_url)"/>\n      <arg name="gcs_url" value=""/>\n      <arg name="tgt_system" value="$(arg ID)"/>\n      <arg name="tgt_component" value="1"/>\n  </include>\n')])])])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The complete block for each vehicle is enclosed in a set of "),a("code",[e._v("<group>")]),e._v(" tags to separate the ROS namespaces of the vehicles.")])]),e._v(" "),a("p",[e._v("To add a third iris to this simulation there are two main components to consider:")]),e._v(" "),a("ul",[a("li",[e._v("把"),a("code",[e._v("UAV3")]),e._v(" 添加到"),a("strong",[e._v("multi_uav_mavros_sitl.launch")]),e._v(" "),a("ul",[a("li",[e._v("复制已经存在的四旋翼("),a("code",[e._v("UAV1")]),e._v(" 或者 "),a("code",[e._v("UAV2")]),e._v(")")]),e._v(" "),a("li",[e._v("把 "),a("code",[e._v("ID")]),e._v(" 改为 "),a("code",[e._v("3")])]),e._v(" "),a("li",[e._v("与gazebo的通信，选择一个不同的 "),a("code",[e._v("mavlink_udp_port")]),e._v("端口")]),e._v(" "),a("li",[e._v("MAVROS通信端口选择是通过在"),a("code",[e._v("fcu_url")]),e._v(" 中修改两个端口号。")])])]),e._v(" "),a("li",[e._v("创建一个开始文件，并按照如下方式修改：\n"),a("ul",[a("li",[e._v("复制已存在的iris rcs启动文件，("),a("code",[e._v("iris_1")]),e._v(" 或 "),a("code",[e._v("iris_2")]),e._v(") ，重命名为"),a("code",[e._v("iris_3")])]),e._v(" "),a("li",[a("code",[e._v("MAV_SYS_ID")]),e._v(" 值改为"),a("code",[e._v("3")])]),e._v(" "),a("li",[a("code",[e._v("SITL_UDP_PRT")]),e._v(" 的值与 "),a("code",[e._v("mavlink_udp_port")]),e._v("相一致。")]),e._v(" "),a("li",[e._v("第一个"),a("code",[e._v("mavlink start")]),e._v(" 端口和"),a("code",[e._v("mavlink stream")]),e._v("端口值设置为相同值，用于和QGC通信。")]),e._v(" "),a("li",[e._v("第二个"),a("code",[e._v("mavlink start")]),e._v(" 端口值应与启动文件 "),a("code",[e._v("fcu_url")]),e._v(" 中的值一致。")])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Be aware of which port is "),a("code",[e._v("src")]),e._v(" and "),a("code",[e._v("dst")]),e._v(" for the different endpoints.")])]),e._v(" "),a("h2",{attrs:{id:"multiple-vehicles-using-sdf-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-vehicles-using-sdf-models"}},[e._v("#")]),e._v(" Multiple Vehicles using SDF Models")]),e._v(" "),a("p",[e._v("然后, 你可以使用 "),a("em",[e._v("QGroundControl")]),e._v(" 和 MAVROS 控制多机，控制方式与单机类似。")]),e._v(" "),a("p",[e._v("对每一个仿真的飞行器，有如下要求：")]),e._v(" "),a("ol",[a("li",[e._v("Install "),a("em",[e._v("xmlstarlet")]),e._v(" from your Linux terminal:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt install xmlstarlet\n")])])])]),e._v(" "),a("li",[e._v("Use "),a("em",[e._v("roslaunch")]),e._v(" with the "),a("strong",[e._v("multi_uav_mavros_sitl_sdf.launch")]),e._v(" launch file:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("roslaunch multi_uav_mavros_sitl_sdf.launch vehicle:=<model_file_name>\n")])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Note that the vehicle model file name argument is optional ("),a("code",[e._v("vehicle:=<model_file_name>")]),e._v("); if omitted the "),a("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/tree/master/models/plane",target:"_blank",rel:"noopener noreferrer"}},[e._v("plane model"),a("OutboundLink")],1),e._v(" will be used by default.")])]),e._v(" "),a("p",[e._v("启动文件 "),a("code",[e._v("multi_uav_mavros_sitl.launch")]),e._v("做了以下内容,")]),e._v(" "),a("p",[e._v("要在此模拟中添加第三个iris四旋翼, 需要考虑两个主要部分：")]),e._v(" "),a("ol",[a("li",[e._v("You can choose to do either of:\n"),a("ul",[a("li",[e._v("modify the "),a("strong",[e._v("single_vehicle_spawn_sdf.launch")]),e._v(" file to point to the location of your model by changing the line below to point to your model:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$(find px4)/Tools/sitl_gazebo/models/$(arg vehicle)/$(arg vehicle).sdf\n")])])])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Ensure you set the "),a("code",[e._v("vehicle")]),e._v(" argument even if you hardcode the path to your model.")])]),e._v(" "),a("ul",[a("li",[e._v("copy your model into the folder indicated above (following the same path convention).")])]),e._v(" "),a("ol",[a("li",[e._v("The "),a("code",[e._v("vehicle")]),e._v(" argument is used to set the "),a("code",[e._v("PX4_SIM_MODEL")]),e._v(" environment variable, which is used by the default rcS (startup script) to find the corresponding startup settings file for the model. Within PX4 these startup files can be found in the "),a("strong",[e._v("PX4-Autopilot/ROMFS/px4fmu_common/init.d-posix/")]),e._v(" directory. For example, here is the plane model's "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/1030_plane",target:"_blank",rel:"noopener noreferrer"}},[e._v("startup script"),a("OutboundLink")],1),e._v(". For this to work, the PX4 node in the launch file is passed arguments that specify the "),a("em",[e._v("rcS")]),e._v(" file ("),a("strong",[e._v("etc/init.d/rcS")]),e._v(") and the location of the rootfs etc directory ("),a("code",[e._v("$(find px4)/build_px4_sitl_default/etc")]),e._v("). For simplicity, it is suggested that the startup file for the model be placed alongside PX4's in "),a("strong",[e._v("PX4-Autopilot/ROMFS/px4fmu_common/init.d-posix/")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"其他资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他资源"}},[e._v("#")]),e._v(" 其他资源")]),e._v(" "),a("ul",[a("li",[e._v("更多UDP端口配置请参考 "),a("RouterLink",{attrs:{to:"/zh/simulation/"}},[e._v("Simulation")]),e._v("。")],1),e._v(" "),a("li",[e._v("更多关于xacro多模型的信息请参考 "),a("a",{attrs:{href:"http://gazebosim.org/tutorials/?tut=ros_urdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("URDF in Gazebo"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("更过xacro模型请参考"),a("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator/tree/master/rotors_description/urdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("RotorS"),a("OutboundLink")],1),e._v("。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);