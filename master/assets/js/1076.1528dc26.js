(window.webpackJsonp=window.webpackJsonp||[]).push([[1076],{2002:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ros-with-mavros-installation-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ros-with-mavros-installation-guide"}},[t._v("#")]),t._v(" ROS with MAVROS Installation Guide")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros"),s("OutboundLink")],1),t._v(" is a ROS (1) package that enables MAVLink extendable communication between computers running ROS (1) for any MAVLink enabled autopilot, ground station, or peripheral.\n"),s("em",[t._v("MAVROS")]),t._v(' is the "official" supported bridge between ROS (1) and the MAVLink protocol.')]),t._v(" "),s("p",[t._v("While MAVROS can be used to communicate with any MAVLink-enabled autopilot, this documentation explains how to set up communication between the PX4 Autopilot and a ROS (1) enabled companion computer.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The easiest way to setup PX4 simulation with ROS on Ubuntu Linux is to use the standard installation script that can be found at "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[t._v("Development Environment on Linux > Gazebo with ROS")]),t._v(".")],1),t._v(" "),s("p",[t._v("The script automates the installtion instructions covered in this topic, installing everything you need: PX4, ROS, the Gazebo simulator, and "),s("RouterLink",{attrs:{to:"/en/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(".")],1)]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The PX4 development team recommend that all users "),s("RouterLink",{attrs:{to:"/en/ros/ros2.html"}},[t._v("upgrade to ROS 2")]),t._v('.\nThis documentation reflects the "old approach".')],1)]),t._v(" "),s("h2",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros ROS Package Summary"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mavlink/mavros/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros source"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS Melodic installation instructions"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("MAVROS can be installed either from source or binary.\nWe recommend that developers use the source installation.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("These instructions are a simplified version of the "),s("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("official installation guide"),s("OutboundLink")],1),t._v(".\nThey cover the "),s("em",[t._v("ROS Melodic")]),t._v(" release.")])]),t._v(" "),s("h3",{attrs:{id:"binary-installation-debian-ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binary-installation-debian-ubuntu"}},[t._v("#")]),t._v(" Binary Installation (Debian / Ubuntu)")]),t._v(" "),s("p",[t._v("The ROS repository has binary packages for Ubuntu x86, amd64 (x86_64) and armhf (ARMv7).\nKinetic also supports Debian Jessie amd64 and arm64 (ARMv8).")]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("apt-get")]),t._v(" for installation:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install ros-kinetic-mavros ros-kinetic-mavros-extras\n")])])]),s("p",[t._v("Then install "),s("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),s("OutboundLink")],1),t._v(" datasets by running the "),s("code",[t._v("install_geographiclib_datasets.sh")]),t._v(" script:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh\nsudo bash ./install_geographiclib_datasets.sh   \n")])])]),s("h3",{attrs:{id:"source-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source-installation"}},[t._v("#")]),t._v(" Source Installation")]),t._v(" "),s("p",[t._v("This installation assumes you have a catkin workspace located at "),s("code",[t._v("~/catkin_ws")]),t._v(" If you don't create one with:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/catkin_ws/src\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws\ncatkin init\nwstool init src\n")])])]),s("p",[t._v("You will be using the ROS Python tools: "),s("em",[t._v("wstool")]),t._v(" (for retrieving sources), "),s("em",[t._v("rosinstall")]),t._v(", and "),s("em",[t._v("catkin_tools")]),t._v(" (building) for this installation. While they may have been installed during your installation of ROS you can also install them with:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-catkin-tools python-rosinstall-generator -y\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("While the package can be built using "),s("strong",[t._v("catkin_make")]),t._v(" the preferred method is using "),s("strong",[t._v("catkin_tools")]),t._v(' as it is a more versatile and "friendly" build tool.')])]),t._v(" "),s("p",[t._v("If this is your first time using wstool you will need to initialize your source space with:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ wstool init ~/catkin_ws/src\n")])])]),s("p",[t._v("Now you are ready to do the build")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install MAVLink:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# We use the Kinetic reference for all ROS distros as it's not distro-specific and up to date\nrosinstall_generator --rosdistro kinetic mavlink | tee /tmp/mavros.rosinstall\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Install MAVROS from source using either released or latest version:")]),t._v(" "),s("ul",[s("li",[t._v("Released/stable"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("rosinstall_generator --upstream mavros | tee -a /tmp/mavros.rosinstall\n")])])])]),t._v(" "),s("li",[t._v("Latest source"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("rosinstall_generator --upstream-development mavros "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /tmp/mavros.rosinstall\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For fetching all the dependencies into your catkin_ws, ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# just add '--deps' to the above scripts, E.g.:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   rosinstall_generator --upstream mavros --deps | tee -a /tmp/mavros.rosinstall")]),t._v("\n")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Create workspace & deps")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wstool merge -t src /tmp/mavros.rosinstall\nwstool update -t src -j4\nrosdep install --from-paths src --ignore-src -y\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Install "),s("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),s("OutboundLink")],1),t._v(" datasets:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./src/mavros/mavros/scripts/install_geographiclib_datasets.sh\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Build source")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("catkin build\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Make sure that you use setup.bash or setup.zsh from workspace.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#Needed or rosrun can't find nodes from this workspace.\nsource devel/setup.bash\n")])])])])]),t._v(" "),s("p",[t._v("In the case of error, there are addition installation and troubleshooting notes in the "),s("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros repo"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"mavros-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mavros-examples"}},[t._v("#")]),t._v(" MAVROS Examples")]),t._v(" "),s("p",[t._v("The MAVROS "),s("RouterLink",{attrs:{to:"/en/ros/mavros_offboard.html"}},[t._v("Offboard Control example")]),t._v(", will show you the basics of MAVROS, from reading telemetry, checking the drone state, changing flight modes and controlling the drone.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If you have an example app using the PX4 Autopilot and MAVROS, we can help you get it on our docs.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);