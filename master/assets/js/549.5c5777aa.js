(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{1313:function(t,a,s){t.exports=s.p+"assets/img/px4_sitl_overview.c2ef9c51.png"},1800:function(t,a,s){"use strict";s.r(a);var e=s(18),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ros-with-gazebo-simulation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-with-gazebo-simulation"}},[t._v("#")]),t._v(" ROS with Gazebo Simulation")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/en/ros/"}},[t._v("ROS")]),t._v(" (Robot Operating System) can be used with PX4 and the "),e("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo simulator")]),t._v(". It uses the "),e("RouterLink",{attrs:{to:"/en/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(" MAVLink node to communicate with PX4.")],1),t._v(" "),e("p",[t._v("The ROS/Gazebo integration with PX4 follows the pattern in the diagram below (this shows the "),e("em",[t._v("generic")]),t._v(" "),e("RouterLink",{attrs:{to:"/en/simulation/#sitl-simulation-environment"}},[t._v("PX4 simulation environment")]),t._v("). PX4 communicates with the simulator (e.g. Gazebo) to receive sensor data from the simulated world and send motor and actuator values. It communicates with the GCS and an Offboard API (e.g. ROS) to send telemetry from the simulated environment and receive commands.")],1),t._v(" "),e("p",[e("img",{attrs:{src:s(1313),alt:"PX4 SITL overview"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("The only "),e("em",[t._v("slight")]),t._v(' difference to "normal behaviour" is that ROS initiates the connection on port 14557, while it is more typical for an offboard API to listen for connections on UDP port 14540.')])]),t._v(" "),e("h2",{attrs:{id:"installing-ros-and-gazebo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-ros-and-gazebo"}},[t._v("#")]),t._v(" Installing ROS and Gazebo")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("em",[t._v("ROS")]),t._v(" is only supported on Linux (not macOS or Windows).")])]),t._v(" "),e("p",[t._v("The easiest way to setup PX4 simulation with ROS on Ubuntu Linux is to use the standard installation script that can be found at "),e("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[t._v("Development Environment on Linux > Gazebo with ROS")]),t._v('.\nThe script installs everything you need: PX4, ROS "Melodic", the Gazebo 9 simulator, and '),e("RouterLink",{attrs:{to:"/en/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("The script follows the "),e("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v('standard ROS "Melodic" installation instructions'),e("OutboundLink")],1),t._v(", which includes Gazebo 9.")])]),t._v(" "),e("h2",{attrs:{id:"launching-ros-simulation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#launching-ros-simulation"}},[t._v("#")]),t._v(" Launching ROS/Simulation")]),t._v(" "),e("p",[t._v("The command below can be used to launch the simulation and connect ROS to it via "),e("RouterLink",{attrs:{to:"/en/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(", where "),e("code",[t._v("fcu_url")]),t._v(" is the IP / port of the computer running the simulation:")],1),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"udp://:14540@192.168.1.36:14557"')]),t._v("\n")])])]),e("p",[t._v("To connect to localhost, use this URL:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"udp://:14540@127.0.0.1:14557"')]),t._v("\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("It can be useful to call "),e("em",[t._v("roslaunch")]),t._v(" with the "),e("code",[t._v("-w")]),t._v(" (warn) and/or "),e("code",[t._v("-v")]),t._v(" (verbose) in order to get warnings about missing dependencies in your setup. For example:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"udp://:14540@127.0.0.1:14557"')]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"launching-gazebo-with-ros-wrappers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#launching-gazebo-with-ros-wrappers"}},[t._v("#")]),t._v(" Launching Gazebo with ROS Wrappers")]),t._v(" "),e("p",[t._v("The Gazebo simulation can be modified to integrate sensors publishing directly to ROS topics e.g. the Gazebo ROS laser plugin.\nTo support this feature, Gazebo must be launched with the appropriate ROS wrappers.")]),t._v(" "),e("p",[t._v("There are ROS launch scripts available to run the simulation wrapped in ROS:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/launch/posix_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("posix_sitl.launch"),e("OutboundLink")],1),t._v(": plain SITL launch")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/launch/mavros_posix_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros_posix_sitl.launch"),e("OutboundLink")],1),t._v(": SITL and MAVROS")])]),t._v(" "),e("p",[t._v("To run SITL wrapped in ROS the ROS environment needs to be updated, then launch as usual:")]),t._v(" "),e("p",[t._v("(optional): only source the catkin workspace if you compiled MAVROS or other ROS packages from source:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PX4-Autopilot_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default gazebo\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/catkin_ws/devel/setup.bash    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (optional)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" Tools/setup_gazebo.bash "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/build/px4_sitl_default\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/Tools/sitl_gazebo\nroslaunch px4 posix_sitl.launch\n")])])]),e("p",[t._v("Include one of the above mentioned launch files in your own launch file to run your ROS application in the simulation.")]),t._v(" "),e("h2",{attrs:{id:"what-s-happening-behind-the-scenes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-s-happening-behind-the-scenes"}},[t._v("#")]),t._v(" What's Happening Behind the Scenes")]),t._v(" "),e("p",[t._v("This section shows how the "),e("em",[t._v("roslaunch")]),t._v(" instructions provided previously actually work (you can follow them to manually launch the simulation and ROS).")]),t._v(" "),e("p",[t._v("First start the simulator using the command below:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("no_sim")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default gazebo\n")])])]),e("p",[t._v("The console will look like this:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" shell id: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("46979166467136")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" task name: px4\n\n______  __   __    ___\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ___ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" / /   /   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_/ /  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" V /   / /"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  __/   /   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("  / /_"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     / /^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("___  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_/\n\nReady to fly.\n\n\nINFO  LED::init\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("729")]),t._v(" DevObj::init led\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("736")]),t._v(" Added driver 0x2aba34001080 /dev/led0\nINFO  LED::init\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("742")]),t._v(" DevObj::init led\nINFO  Not using /dev/ttyACM0 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" radio control input. Assuming joystick input via MAVLink.\nINFO  Waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" initial data on UDP. Please start the flight simulator to proceed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n")])])]),e("p",[t._v("Now in a new terminal make sure you will be able to insert the Iris model through the Gazebo menus, to do this set your environment variables to include the appropriate "),e("code",[t._v("sitl_gazebo")]),t._v(" folders.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PX4-Autopilot_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" Tools/setup_gazebo.bash "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/build/px4_sitl_default\n")])])]),e("p",[t._v("Now start Gazebo like you would when working with ROS and insert the Iris quadcopter model. Once the Iris is loaded it will automatically connect to the px4 app.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("roslaunch gazebo_ros empty_world.launch world_name:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/Tools/sitl_gazebo/worlds/iris.world\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);