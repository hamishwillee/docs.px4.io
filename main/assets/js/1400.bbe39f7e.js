(window.webpackJsonp=window.webpackJsonp||[]).push([[1400],{2550:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ros-with-mavros-installation-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-with-mavros-installation-guide"}},[t._v("#")]),t._v(" ROS with MAVROS Installation Guide")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVROS"),a("OutboundLink")],1),t._v(" is a ROS 1 package that enables MAVLink extendable communication between computers running ROS 1 for any MAVLink enabled autopilot, ground station, or peripheral.\n"),a("em",[t._v("MAVROS")]),t._v(' is the "official" supported bridge between ROS 1 and the MAVLink protocol.')]),t._v(" "),a("p",[t._v("While MAVROS can be used to communicate with any MAVLink-enabled autopilot, this documentation explains how to set up communication between the PX4 Autopilot and a ROS 1 enabled companion computer.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The PX4 development team recommend that all users "),a("RouterLink",{attrs:{to:"/en/ros/ros2.html"}},[t._v("upgrade to ROS 2")]),t._v('.\nThis documentation reflects the "old approach".')],1)]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("First install ROS and PX4 following the instructions in "),a("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html#ros-gazebo-classic"}},[t._v("Development Environment on Linux > ROS/Gazebo Classic")]),t._v(".")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("These instructions are a simplified version of the "),a("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("official installation guide"),a("OutboundLink")],1),t._v(".\nThey cover the "),a("em",[t._v("ROS Melodic and Noetic")]),t._v(" releases.")])]),t._v(" "),a("p",[t._v("MAVROS can be installed either from source or binary.\nWe recommend that developers use the source installation.")]),t._v(" "),a("h3",{attrs:{id:"binary-installation-debian-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-installation-debian-ubuntu"}},[t._v("#")]),t._v(" Binary Installation (Debian / Ubuntu)")]),t._v(" "),a("p",[t._v("The ROS repository has binary packages for Ubuntu x86, amd64 (x86_64) and armhf (ARMv7).\nKinetic also supports Debian Jessie amd64 and arm64 (ARMv8).")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("apt-get")]),t._v(" for installation, where "),a("code",[t._v("${ROS_DISTRO}")]),t._v(" below should resolve to "),a("code",[t._v("kinetic")]),t._v(" or "),a("code",[t._v("noetic")]),t._v(", depending on your version of ROS:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get install ros-${ROS_DISTRO}-mavros ros-${ROS_DISTRO}-mavros-extras ros-${ROS_DISTRO}-mavros-msgs\n")])])]),a("p",[t._v("Then install "),a("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),a("OutboundLink")],1),t._v(" datasets by running the "),a("code",[t._v("install_geographiclib_datasets.sh")]),t._v(" script:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh\nsudo bash ./install_geographiclib_datasets.sh   \n")])])]),a("h3",{attrs:{id:"source-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-installation"}},[t._v("#")]),t._v(" Source Installation")]),t._v(" "),a("p",[t._v("This installation assumes you have a catkin workspace located at "),a("code",[t._v("~/catkin_ws")]),t._v(" If you don't create one with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/catkin_ws/src\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws\ncatkin init\nwstool init src\n")])])]),a("p",[t._v("You will be using the ROS Python tools: "),a("em",[t._v("wstool")]),t._v(" (for retrieving sources), "),a("em",[t._v("rosinstall")]),t._v(", and "),a("em",[t._v("catkin_tools")]),t._v(" (building) for this installation. While they may have been installed during your installation of ROS you can also install them with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-catkin-tools python-rosinstall-generator -y\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("While the package can be built using "),a("strong",[t._v("catkin_make")]),t._v(" the preferred method is using "),a("strong",[t._v("catkin_tools")]),t._v(' as it is a more versatile and "friendly" build tool.')])]),t._v(" "),a("p",[t._v("If this is your first time using wstool you will need to initialize your source space with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ wstool init ~/catkin_ws/src\n")])])]),a("p",[t._v("Now you are ready to do the build:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Install MAVLink:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# We use the Kinetic reference for all ROS distros as it's not distro-specific and up to date\nrosinstall_generator --rosdistro kinetic mavlink | tee /tmp/mavros.rosinstall\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Install MAVROS from source using either released or latest version:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Released/stable")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("rosinstall_generator --upstream mavros "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /tmp/mavros.rosinstall\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Latest source")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("rosinstall_generator --upstream-development mavros "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /tmp/mavros.rosinstall\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For fetching all the dependencies into your catkin_ws, ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# just add '--deps' to the above scripts, E.g.:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   rosinstall_generator --upstream mavros --deps | tee -a /tmp/mavros.rosinstall")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("Create workspace & deps")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("wstool merge -t src /tmp/mavros.rosinstall\nwstool update -t src -j4\nrosdep "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --from-paths src --ignore-src -y\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Install "),a("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),a("OutboundLink")],1),t._v(" datasets:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./src/mavros/mavros/scripts/install_geographiclib_datasets.sh\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Build source")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("catkin build\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Make sure that you use setup.bash or setup.zsh from workspace.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Needed or rosrun can't find nodes from this workspace.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" devel/setup.bash\n")])])])])]),t._v(" "),a("p",[t._v("In the case of error, there are addition installation and troubleshooting notes in the "),a("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros repo"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"mavros-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavros-examples"}},[t._v("#")]),t._v(" MAVROS Examples")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/en/ros/mavros_offboard_cpp.html"}},[t._v("MAVROS Offboard Example (C++)")]),t._v(", will show you the basics of MAVROS, from reading telemetry, checking the drone state, changing flight modes and controlling the drone.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you have an example app using the PX4 Autopilot and MAVROS, we can help you get it on our docs.")])]),t._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros ROS Package Summary"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mavlink/mavros/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros source"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS Melodic installation instructions"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);