(window.webpackJsonp=window.webpackJsonp||[]).push([[1214],{2573:function(t,s,a){"use strict";a.r(s);var e=a(18),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mavros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavros"}},[t._v("#")]),t._v(" MAVROS")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v(" mavros "),a("OutboundLink")],1),t._v(" 功能包提供了 一台能够运行ros的机载电脑、支持MAVLINK协议的飞控和支持MAVLINK的地面站这三者之间的通讯功能。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[a("em",[t._v("MAVROS")]),t._v(' is the "official" supported bridge between ROS and the MAVLink protocol. It is currently being extended to enable '),a("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html"}},[t._v("fast-RTPS messaging")]),t._v(", including a layer to translate PX4 "),a("RouterLink",{attrs:{to:"/zh/middleware/uorb.html"}},[t._v("uORB messages")]),t._v(" to common ROS idioms.")],1)]),t._v(" "),a("p",[t._v("While MAVROS can be used to communicate with any MAVLink enabled autopilot this documentation will be in the context of enabling communication between the PX4 flight stack and a ROS enabled companion computer.")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("ROS 代码库有针对 Ubuntu x86、amd64 (x86_64) 和 armhf (ARMv7) 的二进制安装包。 Kinetic 同样支持 Debian Jessie amd64 和 arm64（ARMv8）。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("These instructions are a simplified version of the "),a("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("official installation guide"),a("OutboundLink")],1),t._v(". They cover the "),a("em",[t._v("ROS Melodic")]),t._v(" release.")])]),t._v(" "),a("h3",{attrs:{id:"二进制安装-debian-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制安装-debian-ubuntu"}},[t._v("#")]),t._v(" 二进制安装 (Debian/Ubuntu)")]),t._v(" "),a("p",[t._v("The ROS repository has binary packages for Ubuntu x86, amd64 (x86_64) and armhf (ARMv7). Kinetic also supports Debian Jessie amd64 and arm64 (ARMv8).")]),t._v(" "),a("p",[t._v("本安装方式假设你已经拥有了一个catkin_ws，如果没有您则需要按照以下指令创建一个：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get install ros-kinetic-mavros ros-kinetic-mavros-extras\n")])])]),a("p",[t._v("Then install "),a("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),a("OutboundLink")],1),t._v(" datasets by running the "),a("code",[t._v("install_geographiclib_datasets.sh")]),t._v(" script:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh\n./install_geographiclib_datasets.sh   \n")])])]),a("h3",{attrs:{id:"源码方式安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码方式安装"}},[t._v("#")]),t._v(" 源码方式安装")]),t._v(" "),a("p",[t._v("如果这是你第一次使用wstool你需要初始化你的代码文件夹。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/catkin_ws/src\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws\ncatkin init\nwstool init src\n")])])]),a("p",[t._v("You will be using the ROS Python tools: "),a("em",[t._v("wstool")]),t._v(" (for retrieving sources), "),a("em",[t._v("rosinstall")]),t._v(", and "),a("em",[t._v("catkin_tools")]),t._v(" (building) for this installation. While they may have been installed during your installation of ROS you can also install them with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-catkin-tools python-rosinstall-generator -y\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("While the package can be built using "),a("strong",[t._v("catkin_make")]),t._v(" the preferred method is using "),a("strong",[t._v("catkin_tools")]),t._v(' as it is a more versatile and "friendly" build tool.')])]),t._v(" "),a("p",[t._v("If this is your first time using wstool you will need to initialize your source space with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ wstool init ~/catkin_ws/src\n")])])]),a("p",[t._v("Now you are ready to do the build")]),t._v(" "),a("ol",[a("li",[t._v("安装Mavlink"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("安装Mavlink \n  # We use the Kinetic reference for all ROS distros as it's not distro-specific and up to date\n  rosinstall_generator --rosdistro kinetic mavlink | tee /tmp/mavros.rosinstall\n")])])])]),t._v(" "),a("li",[t._v("安装MAVROS最新的版本：\n"),a("ul",[a("li",[a("p",[t._v("发行版 / 稳定版")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("最新源码 \n sh\n rosinstall_generator --upstream-development mavros | tee -a /tmp/mavros.rosinstall\n")])])])]),t._v(" "),a("li",[a("p",[t._v("最新源码")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("发行版 / 稳定版 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("rosinstall_generator --upstream mavros "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /tmp/mavros.rosinstall"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),t._v("\n```sh\nsh\n")])])])]),t._v(" "),a("h1",{attrs:{id:"for-fetching-all-the-dependencies-into-your-catkin-ws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-fetching-all-the-dependencies-into-your-catkin-ws"}},[t._v("#")]),t._v(" For fetching all the dependencies into your catkin_ws,")]),t._v(" "),a("h1",{attrs:{id:"just-add-deps-to-the-above-scripts-e-g"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#just-add-deps-to-the-above-scripts-e-g"}},[t._v("#")]),t._v(" just add '--deps' to the above scripts, E.g.:")]),t._v(" "),a("h1",{attrs:{id:"rosinstall-generator-upstream-mavros-deps-tee-a-tmp-mavros-rosinstall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rosinstall-generator-upstream-mavros-deps-tee-a-tmp-mavros-rosinstall"}},[t._v("#")]),t._v(" rosinstall_generator --upstream mavros --deps | tee -a /tmp/mavros.rosinstall")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" ```\n")])])]),a("ol",[a("li",[t._v("创建工作区 & 安装依赖"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wstool merge -t src /tmp/mavros.rosinstall\n")])])])])]),t._v(" "),a("p",[t._v("wstool update -t src -j4\nrosdep install --from-paths src --ignore-src -y")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n1. 安装 [GeographicLib](https://geographiclib.sourceforge.io/) 数据集：\n")])])]),a("p",[t._v("./src/mavros/mavros/scripts/install_geographiclib_datasets.sh")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n1. 构建源码\n")])])]),a("p",[t._v("catkin build")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n1. 确保从工作区中使用 setup. bash 或 setup. zsh。\n")])])]),a("p",[t._v("#Needed or rosrun can't find nodes from this workspace.\nsource devel/setup.bash\nsource devel/setup.bash")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nIn the case of error, there are addition installation and troubleshooting notes in the [mavros repo](https://github.com/mavlink/mavros/tree/master/mavros#installation).\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);