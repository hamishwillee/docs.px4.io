(window.webpackJsonp=window.webpackJsonp||[]).push([[1286],{2667:function(t,a,s){"use strict";s.r(a);var e=s(18),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mavros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mavros"}},[t._v("#")]),t._v(" MAVROS")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros"),s("OutboundLink")],1),t._v(" is a ROS (1) package that enables MAVLink extendable communication between computers running ROS (1) for any MAVLink enabled autopilot, ground station, or peripheral. "),s("em",[t._v("MAVROS")]),t._v(' is the "official" supported bridge between ROS (1) and the MAVLink protocol.')]),t._v(" "),s("p",[t._v("While MAVROS can be used to communicate with any MAVLink-enabled autopilot, this documentation explains how to set up communication between the PX4 Autopilot and a ROS (1) enabled companion computer.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("The easiest way to setup PX4 simulation with ROS on Ubuntu Linux is to use the standard installation script that can be found at "),s("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[t._v("Development Environment on Linux > Gazebo with ROS")]),t._v(".")],1),t._v(" "),s("p",[t._v("ROS 代码库有针对 Ubuntu x86、amd64 (x86_64) 和 armhf (ARMv7) 的二进制安装包。 Kinetic 同样支持 Debian Jessie amd64 和 arm64（ARMv8）。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("Note The PX4 development team recommend that all users "),s("RouterLink",{attrs:{to:"/zh/ros/ros2.html"}},[t._v("upgrade to ROS 2")]),t._v('. This documentation reflects the "old approach".')],1)])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros ROS Package Summary"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mavlink/mavros/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros source"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS Melodic installation instructions"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("MAVROS can be installed either from source or binary. We recommend that developers use the source installation.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("These instructions are a simplified version of the "),s("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("official installation guide"),s("OutboundLink")],1),t._v(". They cover the "),s("em",[t._v("ROS Melodic")]),t._v(" release.")])]),t._v(" "),s("h3",{attrs:{id:"二进制安装-debian-ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制安装-debian-ubuntu"}},[t._v("#")]),t._v(" 二进制安装 (Debian/Ubuntu)")]),t._v(" "),s("p",[t._v("The ROS repository has binary packages for Ubuntu x86, amd64 (x86_64) and armhf (ARMv7). Kinetic also supports Debian Jessie amd64 and arm64 (ARMv8).")]),t._v(" "),s("p",[t._v("如果这是你第一次使用wstool你需要初始化你的代码文件夹。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install ros-kinetic-mavros ros-kinetic-mavros-extras\n")])])]),s("p",[t._v("Then install "),s("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),s("OutboundLink")],1),t._v(" datasets by running the "),s("code",[t._v("install_geographiclib_datasets.sh")]),t._v(" script:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh\n./install_geographiclib_datasets.sh   \n")])])]),s("h3",{attrs:{id:"源码方式安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码方式安装"}},[t._v("#")]),t._v(" 源码方式安装")]),t._v(" "),s("p",[t._v("This installation assumes you have a catkin workspace located at "),s("code",[t._v("~/catkin_ws")]),t._v(" If you don't create one with:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/catkin_ws/src\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws\ncatkin init\nwstool init src\n")])])]),s("p",[t._v("You will be using the ROS Python tools: "),s("em",[t._v("wstool")]),t._v(" (for retrieving sources), "),s("em",[t._v("rosinstall")]),t._v(", and "),s("em",[t._v("catkin_tools")]),t._v(" (building) for this installation. While they may have been installed during your installation of ROS you can also install them with:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-catkin-tools python-rosinstall-generator -y\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("While the package can be built using "),s("strong",[t._v("catkin_make")]),t._v(" the preferred method is using "),s("strong",[t._v("catkin_tools")]),t._v(' as it is a more versatile and "friendly" build tool.')])]),t._v(" "),s("p",[t._v("If this is your first time using wstool you will need to initialize your source space with:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ wstool init ~/catkin_ws/src\n")])])]),s("p",[t._v("Now you are ready to do the build")]),t._v(" "),s("ol",[s("li",[t._v("安装Mavlink"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("安装Mavlink \n  # We use the Kinetic reference for all ROS distros as it's not distro-specific and up to date\n  rosinstall_generator --rosdistro kinetic mavlink | tee /tmp/mavros.rosinstall\n")])])])]),t._v(" "),s("li",[t._v("安装MAVROS最新的版本：\n"),s("ul",[s("li",[t._v("发行版 / 稳定版"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("最新源码 \n sh\n rosinstall_generator --upstream-development mavros | tee -a /tmp/mavros.rosinstall\n")])])])]),t._v(" "),s("li",[t._v("Latest source"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("rosinstall_generator --upstream-development mavros "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /tmp/mavros.rosinstall\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])])])])])])]),t._v(" "),s("h1",{attrs:{id:"for-fetching-all-the-dependencies-into-your-catkin-ws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-fetching-all-the-dependencies-into-your-catkin-ws"}},[t._v("#")]),t._v(" For fetching all the dependencies into your catkin_ws,")]),t._v(" "),s("h1",{attrs:{id:"just-add-deps-to-the-above-scripts-e-g"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#just-add-deps-to-the-above-scripts-e-g"}},[t._v("#")]),t._v(" just add '--deps' to the above scripts, E.g.:")]),t._v(" "),s("h1",{attrs:{id:"rosinstall-generator-upstream-mavros-deps-tee-a-tmp-mavros-rosinstall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rosinstall-generator-upstream-mavros-deps-tee-a-tmp-mavros-rosinstall"}},[t._v("#")]),t._v(" rosinstall_generator --upstream mavros --deps | tee -a /tmp/mavros.rosinstall")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" ```\n")])])]),s("ol",[s("li",[t._v("创建工作区 & 安装依赖"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wstool merge -t src /tmp/mavros.rosinstall\n")])])])])]),t._v(" "),s("p",[t._v("wstool update -t src -j4\nrosdep install --from-paths src --ignore-src -y")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n1. 安装 [GeographicLib](https://geographiclib.sourceforge.io/) 数据集：\n")])])]),s("p",[t._v("./src/mavros/mavros/scripts/install_geographiclib_datasets.sh")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n1. 构建源码\n")])])]),s("p",[t._v("catkin build")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n1. 确保从工作区中使用 setup. bash 或 setup. zsh。\n")])])]),s("p",[t._v("#Needed or rosrun can't find nodes from this workspace.\nsource devel/setup.bash\nsource devel/setup.bash")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nIn the case of error, there are addition installation and troubleshooting notes in the [mavros repo](https://github.com/mavlink/mavros/tree/master/mavros#installation).\n\n## MAVROS Examples\n\nThe MAVROS [Offboard Control exapmle](../ros/mavros_offboard.md), will show you the basics of MAVROS, from reading telemetry, checking the drone state, changing flight modes and controlling the drone.\n\n:::note\nIf you have an example app using the PX4 Autopilot and MAVROS, we can help you get it on our docs.\n:::")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);