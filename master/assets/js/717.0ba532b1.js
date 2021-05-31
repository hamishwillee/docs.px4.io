(window.webpackJsonp=window.webpackJsonp||[]).push([[717],{1296:function(a,s,t){a.exports=t.p+"assets/img/px4_sitl_overview.c2ef9c51.png"},2721:function(a,s,t){"use strict";t.r(s);var e=t(19),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"gazebo-与-ros-仿真"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-与-ros-仿真"}},[a._v("#")]),a._v(" Gazebo 与 ROS 仿真")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/ros/"}},[a._v(" ROS")]),a._v("（机器人操作系统）可与 PX4 和"),e("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[a._v(" Gazebo 模拟器")]),a._v("一起使用。 它使用"),e("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[a._v(" MAVROS")]),a._v(" MAVLink 节点与 PX4 通信。")],1),a._v(" "),e("p",[a._v("ROS/Gazebo 与 PX4 的集成遵循下图中的模式（这显示了* generic * "),e("RouterLink",{attrs:{to:"/zh/simulation/#sitl-simulation-environment"}},[a._v(" PX4 simulation environment ")]),a._v("）。 PX4 与模拟器（例如 Gazebo）通信以从模拟世界接收传感器数据并发送电机和执行器值。 它与 GCS 和 Offboard API（例如 ROS）通信，以从模拟环境发送遥测数据并接收命令。")],1),a._v(" "),e("p",[e("img",{attrs:{src:t(1296),alt:"PX4 SITL 概述"}})]),a._v(" "),e("p",[a._v("在 Ubuntu Linux 上使用 ROS 设置 PX4 仿真的最简单方法是使用标准安装脚本，可以在"),e("RouterLink",{attrs:{to:"/zh/setup/dev_env_linux.html#gazebo-with-ros"}},[a._v(" Development Environment on Linux > Gazebo with ROS ")]),a._v("中找到。 该脚本安装了您需要的一切：PX4，ROS“Kinetic”，Gazebo 7 模拟器和"),e("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[a._v(" MAVROS ")]),a._v("。")],1),a._v(" "),e("h2",{attrs:{id:"安装-ros-和-gazebo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-ros-和-gazebo"}},[a._v("#")]),a._v(" 安装 ROS 和 Gazebo")]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),e("p",[e("em",[a._v("ROS")]),a._v(" is only supported on Linux (not macOS or Windows).")])]),a._v(" "),e("p",[a._v("The easiest way to setup PX4 simulation with ROS on Ubuntu Linux is to use the standard installation script that can be found at "),e("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[a._v("Development Environment on Linux > Gazebo with ROS")]),a._v('. The script installs everything you need: PX4, ROS "Melodic", the Gazebo 9 simulator, and '),e("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[a._v("MAVROS")]),a._v(".")],1),a._v(" "),e("p",[a._v("可以对 Gazebo 模拟进行修改，以直接集成发布到 ROS 主题 （如 Gazebo ROS 激光插件）的传感器。 要支持此功能，必须使用适当的 ROS wrappers 启动 Gazebo。")]),a._v(" "),e("h2",{attrs:{id:"启动-ros-simulation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动-ros-simulation"}},[a._v("#")]),a._v(" 启动 ROS/Simulation")]),a._v(" "),e("p",[a._v("有 ROS 启动脚本可用于运行包含在 ROS 中的模拟：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"udp://:14540@192.168.1.36:14557"')]),a._v("\n")])])]),e("p",[a._v("要运行包含在 ROS 中的 SITL，需要更新 ROS 环境，然后像往常一样启动：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"udp://:14540@127.0.0.1:14557"')]),a._v("\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),e("p",[a._v("It can be useful to call "),e("em",[a._v("roslaunch")]),a._v(" with the "),e("code",[a._v("-w")]),a._v(" (warn) and/or "),e("code",[a._v("-v")]),a._v(" (verbose) in order to get warnings about missing dependencies in your setup. For example:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Firmware_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default gazebo\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/catkin_ws/devel/setup.bash    // "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("optional"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" Tools/setup_gazebo.bash "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/build/px4_sitl_default\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/Tools/sitl_gazebo\nroslaunch px4 posix_sitl.launch\n")])])]),e("p",[a._v("在您自己的启动文件中包含上述启动文件之一，以在模拟中运行 ROS 应用程序。")]),a._v(" "),e("h2",{attrs:{id:"用-ros-wrappers-启动-gazebo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用-ros-wrappers-启动-gazebo"}},[a._v("#")]),a._v(" 用 ROS Wrappers 启动 Gazebo")]),a._v(" "),e("p",[a._v("The Gazebo simulation can be modified to integrate sensors publishing directly to ROS topics e.g. the Gazebo ROS laser plugin. To support this feature, Gazebo must be launched with the appropriate ROS wrappers.")]),a._v(" "),e("p",[a._v("首先使用以下命令启动模拟器：")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/launch/posix_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[a._v(" posix_sitl.launch "),e("OutboundLink")],1),a._v("：简单的 SITL 发布")]),a._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/launch/mavros_posix_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[a._v(" mavros_posix_sitl.launch "),e("OutboundLink")],1),a._v("：SITL 和 MAVROS")])]),a._v(" "),e("p",[a._v("控制台将如下所示：")]),a._v(" "),e("p",[a._v("现在在新终端中确保您可以通过 Gazebo 菜单插入 Iris 模型，为此设置环境变量以包含相应的"),e("code",[a._v("sitl_gazebo")]),a._v("文件夹。")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("no_sim")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default gazebo\n")])])]),e("p",[a._v("Include one of the above mentioned launch files in your own launch file to run your ROS application in the simulation.")]),a._v(" "),e("h2",{attrs:{id:"事件之后发生了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件之后发生了什么"}},[a._v("#")]),a._v(" 事件之后发生了什么")]),a._v(" "),e("p",[a._v("This section shows how the "),e("em",[a._v("roslaunch")]),a._v(" instructions provided previously actually work (you can follow them to manually launch the simulation and ROS).")]),a._v(" "),e("p",[a._v("First start the simulator using the command below:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("no_sim")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default gazebo\n")])])]),e("p",[a._v("The console will look like this:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" shell id: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("46979166467136")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" task name: px4\n\n______  __   __    ___\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ___ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / /   /   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_/ /  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" V /   / /"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  __/   /   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  / /_"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("     / /^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("___  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("_"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/     "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_/\n\nReady to fly.\n\n\nINFO  LED::init\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("729")]),a._v(" DevObj::init led\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("736")]),a._v(" Added driver 0x2aba34001080 /dev/led0\nINFO  LED::init\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("742")]),a._v(" DevObj::init led\nINFO  Not using /dev/ttyACM0 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" radio control input. Assuming joystick input via MAVLink.\nINFO  Waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" initial data on UDP. Please start the flight simulator to proceed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])])]),e("p",[a._v("Now in a new terminal make sure you will be able to insert the Iris model through the Gazebo menus, to do this set your environment variables to include the appropriate "),e("code",[a._v("sitl_gazebo")]),a._v(" folders.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("roslaunch gazebo_ros empty_world.launch world_name:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/Tools/sitl_gazebo/worlds/iris.world\n")])])]),e("p",[a._v("Now start Gazebo like you would when working with ROS and insert the Iris quadcopter model. Once the Iris is loaded it will automatically connect to the px4 app.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("roslaunch gazebo_ros empty_world.launch world_name:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/Tools/sitl_gazebo/worlds/iris.world\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);