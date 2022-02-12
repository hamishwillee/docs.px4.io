(window.webpackJsonp=window.webpackJsonp||[]).push([[760],{1289:function(t,s,e){t.exports=e.p+"assets/img/architecture_ros.a06cff99.png"},3335:function(t,s,e){"use strict";e.r(s);var a=e(19),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ros-1-via-ros-2-bridge-user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-1-via-ros-2-bridge-user-guide"}},[t._v("#")]),t._v(" ROS (1) via ROS 2 Bridge (User Guide)")]),t._v(" "),a("p",[t._v("This topic explains how use ROS (1) with PX4, by bridging via "),a("RouterLink",{attrs:{to:"/zh/ros/ros2.html"}},[t._v("ROS 2")]),t._v(".")],1),t._v(" "),a("p",[t._v("It provides an overview of the ROS-ROS2-PX4 architecture, along with instructions on how to install all the needed software and build ROS (1) applications. It also covers how to run/setup ROS 2 and ROS 1 workspaces at the same time.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Generally you might use this setup rather than bridging "),a("RouterLink",{attrs:{to:"/zh/ros/ros1.html"}},[t._v("ROS (1) with MAVROS")]),t._v(" if you want deeper access to PX4 than granted by MAVLink, or if you want to use both ROS2 and ROS (1) applications.")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("This setup, and these instructions "),a("em",[t._v("depend")]),t._v(" on "),a("RouterLink",{attrs:{to:"/zh/ros/ros2.html"}},[t._v("ROS 2")]),t._v(". We highly recommend you read up on ROS 2 first.")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("Note The PX4 development team recommend that all users "),a("RouterLink",{attrs:{to:"/zh/ros/ros2.html"}},[t._v("upgrade to ROS 2")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("The application pipeline for ROS (1) bridged over ROS 2 is shown below.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1289),alt:"Architecture with ROS"}})]),t._v(" "),a("p",[t._v("Essentially it is the same as for ROS 2, except that there is an additional "),a("a",{attrs:{href:"https://github.com/ros2/ros1_bridge",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ros1_bridge")]),a("OutboundLink")],1),t._v(" package (by Open Robotics) that translates messages between the two versions. This is needed because the original version of ROS does not support RTPS.")]),t._v(" "),a("p",[t._v("The other main difference is that the "),a("code",[t._v("px4_ros_com")]),t._v(" and "),a("code",[t._v("px4_msgs")]),t._v(" packages a separate "),a("code",[t._v("ros1")]),t._v(" branch that generates the ROS message headers and source files for using "),a("strong",[t._v("with")]),t._v(" the "),a("code",[t._v("ros1_bridge")]),t._v(". This branch also includes example listener and advertiser nodes.")]),t._v(" "),a("h2",{attrs:{id:"installation-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-setup"}},[t._v("#")]),t._v(" Installation & Setup")]),t._v(" "),a("p",[t._v("Follow the instructions in "),a("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html#installation-setup"}},[t._v("ROS 2 User Guide > Installation & Setup")]),t._v(" to install ROS 2.")],1),t._v(" "),a("h3",{attrs:{id:"build-ros-1-workspace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-ros-1-workspace"}},[t._v("#")]),t._v(" Build ROS (1) Workspace")]),t._v(" "),a("p",[t._v("Since the ROS requires a different environments from ROS to you will need to create a separate workspace. This will include the "),a("code",[t._v("ros")]),t._v(" branch of "),a("code",[t._v("px4_ros_com")]),t._v(" and "),a("code",[t._v("px4_msgs")]),t._v(", along with the "),a("code",[t._v("ros1_bridge")]),t._v(".")]),t._v(" "),a("p",[t._v("To create and build the workspace:")]),t._v(" "),a("ol",[a("li",[t._v("Create the ROS 1 workspace directory using:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/px4_ros_com_ros1/src\n")])])])]),t._v(" "),a("li",[t._v("Clone the ROS 1 bridge packages "),a("code",[t._v("px4_ros_com")]),t._v(" and "),a("code",[t._v("px4_msgs")]),t._v(" to the "),a("code",[t._v("/src")]),t._v(" directory (the "),a("code",[t._v("ros1")]),t._v(" branch):"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/px4_ros_com.git ~/px4_ros_com_ros1/src/px4_ros_com -b ros1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clones the 'ros1' branch")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/px4_msgs.git ~/px4_ros_com_ros1/src/px4_msgs -b ros1\n")])])])]),t._v(" "),a("li",[t._v("Use the "),a("code",[t._v("build_ros1_bridge.bash")]),t._v(" script to build the ROS workspace (including "),a("code",[t._v("px4_ros_com")]),t._v(", "),a("code",[t._v("px4_msgs")]),t._v(", and "),a("code",[t._v("ros1_bridge")]),t._v(").\n"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout ros1\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" scripts\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" build_ros1_bridge.bash\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("You can also build both ROS (1) and ROS 2 workspaces with a single script: "),a("code",[t._v("build_all.bash")]),t._v(". The most common way of using it, is by passing the ROS(1) workspace directory path and PX4 Autopilot directory path:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" build_all.bash --ros1_ws_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path/to/px4_ros_com_ros1/ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"sanity-check-the-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sanity-check-the-installation"}},[t._v("#")]),t._v(" Sanity Check the Installation")]),t._v(" "),a("p",[t._v("As discussed in "),a("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html#sanity-check-the-installation"}},[t._v("ROS 2 User Guide > Sanity Check the Installation")]),t._v(" a good way to verify the installation is to test that the bridge can communicate with PX4 by running it against the PX4 simulator.")],1),t._v(" "),a("p",[t._v("To use ROS (1) "),a("strong",[t._v("and")]),t._v(" ROS 2 (you need both for this!):")]),t._v(" "),a("ol",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Setup your PX4 Ubuntu Linux development environment")]),t._v(" - the default instructions get the latest version of PX4 source and install all the needed tools.")],1)]),t._v(" "),a("li",[a("p",[t._v("Open a new terminal in the root of the "),a("strong",[t._v("PX4 Autopilot")]),t._v(" project, and then start a PX4 Gazebo simulation using:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_rtps gazebo\n")])])]),a("p",[t._v("Once PX4 has fully started the terminal will display the "),a("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[t._v("NuttShell/System Console")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("On another terminal, source the ROS 2 environment and workspace and launch the "),a("code",[t._v("ros1_bridge")]),t._v(" (this allows ROS 2 and ROS nodes to communicate with each other). Also set the "),a("code",[t._v("ROS_MASTER_URI")]),t._v(" where the "),a("code",[t._v("roscore")]),t._v(" is/will be running:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /opt/ros/dashing/setup.bash\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/px4_ros_com_ros2/install/local_setup.bash\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ROS_MASTER_URI")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://localhost:11311\n$ ros2 run ros1_bridge dynamic_bridge\n")])])])]),t._v(" "),a("li",[a("p",[t._v("On another terminal, source the ROS workspace and launch the "),a("code",[t._v("sensor_combined")]),t._v(" listener node. Since you are launching through "),a("code",[t._v("roslaunch")]),t._v(", this will also automatically start the "),a("code",[t._v("roscore")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/px4_ros_com_ros1/install/setup.bash\n$ roslaunch px4_ros_com sensor_combined_listener.launch\n")])])])]),t._v(" "),a("li",[a("p",[t._v("On another terminal, source the ROS 2 workspace and then start the "),a("code",[t._v("micrortps_agent")]),t._v(" daemon with UDP as the transport protocol:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/px4_ros_com_ros2/install/setup.bash\n$ micrortps_agent -t UDP\n")])])])]),t._v(" "),a("li",[a("p",[t._v("On the "),a("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[t._v("NuttShell/System Console")]),t._v(", start the "),a("code",[t._v("micrortps_client")]),t._v(" daemon also in UDP:")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" micrortps_client start -t UDP\n")])])]),a("p",[t._v("If the bridge is working correctly you will be able to see the data being printed on the terminal/console where you launched the ROS listener.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("RECEIVED DATA FROM SENSOR COMBINED\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\nts: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("870938190")]),t._v("\ngyro_rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00341645")]),t._v("\ngyro_rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00626475")]),t._v("\ngyro_rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": -0.000515705\ngyro_integral_dt: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4739")]),t._v("\naccelerometer_timestamp_relative: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\naccelerometer_m_s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": -0.273381\naccelerometer_m_s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0949186")]),t._v("\naccelerometer_m_s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": -9.76044\naccelerometer_integral_dt: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4739")]),t._v("\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("When using the "),a("code",[t._v("build_all.bash")]),t._v(" script, it automatically opens and sources all the required terminals, so you just have to run the respective apps in each terminal.")])])]),t._v(" "),a("h2",{attrs:{id:"creating-a-ros-1-listener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-ros-1-listener"}},[t._v("#")]),t._v(" Creating a ROS (1) listener")]),t._v(" "),a("p",[t._v("Since the creation of ROS nodes is a well known and documented process, we are going to leave this section out from this guide, and you can find an example of a ROS listener for "),a("code",[t._v("sensor_combined")]),t._v(" messages the "),a("code",[t._v("ros1")]),t._v(" branch of the "),a("code",[t._v("px4_ros_com")]),t._v(" repository, under the following path "),a("code",[t._v("src/listeners/")]),t._v(".")])])}),[],!1,null,null,null);s.default=r.exports}}]);