(window.webpackJsonp=window.webpackJsonp||[]).push([[2052],{3700:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mavros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavros"}},[t._v("#")]),t._v(" MAVROS")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVROS"),a("OutboundLink")],1),t._v(" is a ROS 1 package that enables MAVLink extendable communication between computers running ROS 1 for any MAVLink enabled autopilot, ground station, or peripheral. "),a("em",[t._v("MAVROS")]),t._v(' is the "official" supported bridge between ROS 1 and the MAVLink protocol.')]),t._v(" "),a("p",[t._v("While MAVROS can be used to communicate with any MAVLink-enabled autopilot, this documentation explains how to set up communication between the PX4 Autopilot and a ROS 1 enabled companion computer.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("The PX4 development team recommend that all users "),a("RouterLink",{attrs:{to:"/zh/ros/ros2.html"}},[t._v("upgrade to ROS 2")]),t._v('. This documentation reflects the "old approach". Kinetic 同样支持 Debian Jessie amd64 和 arm64（ARMv8）。')],1),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("First install ROS and PX4 following the instructions in "),a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux_ubuntu.html#ros-gazebo-classic"}},[t._v("Development Environment on Linux > ROS/Gazebo Classic")]),t._v(". Kinetic 同样支持 Debian Jessie amd64 和 arm64（ARMv8）。")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("These instructions are a simplified version of the "),a("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("official installation guide"),a("OutboundLink")],1),t._v(". They cover the "),a("em",[t._v("ROS Melodic and Noetic")]),t._v(" releases.")])])])]),t._v(" "),a("p",[t._v("MAVROS can be installed either from source or binary. We recommend that developers use the source installation.")]),t._v(" "),a("h3",{attrs:{id:"二进制安装-debian-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制安装-debian-ubuntu"}},[t._v("#")]),t._v(" 二进制安装 (Debian/Ubuntu)")]),t._v(" "),a("p",[t._v("The ROS repository has binary packages for Ubuntu x86, amd64 (x86_64) and armhf (ARMv7). Kinetic also supports Debian Jessie amd64 and arm64 (ARMv8).")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("apt-get")]),t._v(" for installation, where "),a("code",[t._v("${ROS_DISTRO}")]),t._v(" below should resolve to "),a("code",[t._v("kinetic")]),t._v(" or "),a("code",[t._v("noetic")]),t._v(", depending on your version of ROS:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get install ros-${ROS_DISTRO}-mavros ros-${ROS_DISTRO}-mavros-extras ros-${ROS_DISTRO}-mavros-msgs\n")])])]),a("p",[t._v("Then install "),a("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),a("OutboundLink")],1),t._v(" datasets by running the "),a("code",[t._v("install_geographiclib_datasets.sh")]),t._v(" script:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh\n./install_geographiclib_datasets.sh   \n")])])]),a("h3",{attrs:{id:"源码方式安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码方式安装"}},[t._v("#")]),t._v(" 源码方式安装")]),t._v(" "),a("p",[t._v("This installation assumes you have a catkin workspace located at "),a("code",[t._v("~/catkin_ws")]),t._v(" If you don't create one with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/catkin_ws/src\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws\ncatkin init\nwstool init src\n")])])]),a("p",[t._v("You will be using the ROS Python tools: "),a("em",[t._v("wstool")]),t._v(" (for retrieving sources), "),a("em",[t._v("rosinstall")]),t._v(", and "),a("em",[t._v("catkin_tools")]),t._v(" (building) for this installation. While they may have been installed during your installation of ROS you can also install them with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-catkin-tools python-rosinstall-generator -y\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("While the package can be built using "),a("strong",[t._v("catkin_make")]),t._v(" the preferred method is using "),a("strong",[t._v("catkin_tools")]),t._v(' as it is a more versatile and "friendly" build tool.')])]),t._v(" "),a("p",[t._v("If this is your first time using wstool you will need to initialize your source space with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ wstool init ~/catkin_ws/src\n")])])]),a("p",[t._v("Now you are ready to do the build:")]),t._v(" "),a("ol",[a("li",[t._v("安装Mavlink"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("安装Mavlink \n  # We use the Kinetic reference for all ROS distros as it's not distro-specific and up to date\n  rosinstall_generator --rosdistro kinetic mavlink | tee /tmp/mavros.rosinstall\n")])])])]),t._v(" "),a("li",[t._v("安装MAVROS最新的版本：\n"),a("ul",[a("li",[a("p",[t._v("发行版 / 稳定版")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("最新源码 \n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n rosinstall_generator --upstream-development mavros "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /tmp/mavros.rosinstall\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Latest source")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("rosinstall_generator --upstream-development mavros "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /tmp/mavros.rosinstall\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])])])])])])]),t._v(" "),a("h1",{attrs:{id:"for-fetching-all-the-dependencies-into-your-catkin-ws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-fetching-all-the-dependencies-into-your-catkin-ws"}},[t._v("#")]),t._v(" For fetching all the dependencies into your catkin_ws,")]),t._v(" "),a("h1",{attrs:{id:"just-add-deps-to-the-above-scripts-e-g"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#just-add-deps-to-the-above-scripts-e-g"}},[t._v("#")]),t._v(" just add '--deps' to the above scripts, E.g.:")]),t._v(" "),a("h1",{attrs:{id:"rosinstall-generator-upstream-mavros-deps-tee-a-tmp-mavros-rosinstall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rosinstall-generator-upstream-mavros-deps-tee-a-tmp-mavros-rosinstall"}},[t._v("#")]),t._v(" rosinstall_generator --upstream mavros --deps | tee -a /tmp/mavros.rosinstall")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" ```\n")])])]),a("ol",[a("li",[a("p",[t._v("创建工作区 & 安装依赖")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("wstool merge -t src /tmp/mavros.rosinstall\n")])])])])]),t._v(" "),a("p",[t._v("wstool update -t src -j4\nrosdep install --from-paths src --ignore-src -y")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n1. 安装 [GeographicLib](https://geographiclib.sourceforge.io/) 数据集：\n```sh\n./src/mavros/mavros/scripts/install_geographiclib_datasets.sh\n")])])]),a("ol",[a("li",[a("p",[t._v("构建源码")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("catkin build\n")])])])]),t._v(" "),a("li",[a("p",[t._v("确保从工作区中使用 setup. bash 或 setup. zsh。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Needed or rosrun can't find nodes from this workspace.")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("source devel/setup.bash\nsource devel/setup.bash")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nIn the case of error, there are addition installation and troubleshooting notes in the [mavros repo](https://github.com/mavlink/mavros/tree/master/mavros#installation).\n\n## MAVROS Examples\n\nThe [MAVROS Offboard Example (C++)](../ros/mavros_offboard_cpp.md), will show you the basics of MAVROS, from reading telemetry, checking the drone state, changing flight modes and controlling the drone.\n\n:::note\nIf you have an example app using the PX4 Autopilot and MAVROS, we can help you get it on our docs.\n:::\n\n## See Also\n\n- [mavros ROS Package Summary](http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status)\n- [mavros source](https://github.com/mavlink/mavros/)\n- [ROS Melodic installation instructions](http://wiki.ros.org/melodic/Installation)\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);