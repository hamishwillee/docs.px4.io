(window.webpackJsonp=window.webpackJsonp||[]).push([[841],{1744:function(t,a,e){"use strict";e.r(a);var s=e(18),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mavros"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavros"}},[t._v("#")]),t._v(" MAVROS")]),t._v(" "),e("p",[t._v("The "),e("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros"),e("OutboundLink")],1),t._v(" ROS package enables MAVLink extendable communication between computers running ROS, MAVLink enabled autopilots, and MAVLink enabled GCS.")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(" "),e("em",[t._v("MAVROS")]),t._v(' is the "official" supported bridge between ROS and the MAVLink protocol. It is currently being extended to enable '),e("RouterLink",{attrs:{to:"/en/middleware/micrortps.html"}},[t._v("fast-RTPS messaging")]),t._v(", including a layer to translate PX4 "),e("RouterLink",{attrs:{to:"/en/middleware/uorb.html"}},[t._v("uORB messages")]),t._v(" to common ROS idioms.")],1)]),t._v(" "),e("p",[t._v("While MAVROS can be used to communicate with any MAVLink enabled autopilot this documentation will be in the context of enabling communication between the PX4 flight stack and a ROS enabled companion computer.")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("MAVROS can be installed either from source or binary. Developers working with ROS are advised to use the source installation.")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Tip")]),t._v(" These instructions are a simplified version of the "),e("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("official installation guide"),e("OutboundLink")],1),t._v(".\nThey cover the "),e("em",[t._v("ROS Melodic")]),t._v(" release.")])]),t._v(" "),e("h3",{attrs:{id:"binary-installation-debian-ubuntu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binary-installation-debian-ubuntu"}},[t._v("#")]),t._v(" Binary Installation (Debian / Ubuntu)")]),t._v(" "),e("p",[t._v("The ROS repository has binary packages for Ubuntu x86, amd64 (x86_64) and armhf (ARMv7).\nKinetic also supports Debian Jessie amd64 and arm64 (ARMv8).")]),t._v(" "),e("p",[t._v("Use "),e("code",[t._v("apt-get")]),t._v(" for installation:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo apt-get install ros-kinetic-mavros ros-kinetic-mavros-extras\n")])])]),e("p",[t._v("Then install "),e("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),e("OutboundLink")],1),t._v(" datasets by running the "),e("code",[t._v("install_geographiclib_datasets.sh")]),t._v(" script:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh\nsudo bash ./install_geographiclib_datasets.sh   \n")])])]),e("h3",{attrs:{id:"source-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#source-installation"}},[t._v("#")]),t._v(" Source Installation")]),t._v(" "),e("p",[t._v("This installation assumes you have a catkin workspace located at "),e("code",[t._v("~/catkin_ws")]),t._v(" If you don't create one with:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/catkin_ws/src\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws\ncatkin init\nwstool init src\n")])])]),e("p",[t._v("You will be using the ROS Python tools: "),e("em",[t._v("wstool")]),t._v(" (for retrieving sources), "),e("em",[t._v("rosinstall")]),t._v(", and "),e("em",[t._v("catkin_tools")]),t._v(" (building) for this installation. While they may have been installed during your installation of ROS you can also install them with:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-catkin-tools python-rosinstall-generator -y\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("Tip")]),t._v(" While the package can be built using "),e("strong",[t._v("catkin_make")]),t._v(" the preferred method is using "),e("strong",[t._v("catkin_tools")]),t._v(' as it is a more versatile and "friendly" build tool.')])]),t._v(" "),e("p",[t._v("If this is your first time using wstool you will need to initialize your source space with:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ wstool init ~/catkin_ws/src\n")])])]),e("p",[t._v("Now you are ready to do the build")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Install MAVLink:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# We use the Kinetic reference for all ROS distros as it's not distro-specific and up to date\nrosinstall_generator --rosdistro kinetic mavlink | tee /tmp/mavros.rosinstall\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Install MAVROS from source using either released or latest version:")]),t._v(" "),e("ul",[e("li",[t._v("Released/stable"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("rosinstall_generator --upstream mavros | tee -a /tmp/mavros.rosinstall\n")])])])]),t._v(" "),e("li",[t._v("Latest source"),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("rosinstall_generator --upstream-development mavros "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /tmp/mavros.rosinstall\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For fetching all the dependencies into your catkin_ws, ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# just add '--deps' to the above scripts, E.g.:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   rosinstall_generator --upstream mavros --deps | tee -a /tmp/mavros.rosinstall")]),t._v("\n")])])])])])]),t._v(" "),e("li",[e("p",[t._v("Create workspace & deps")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("wstool merge -t src /tmp/mavros.rosinstall\nwstool update -t src -j4\nrosdep install --from-paths src --ignore-src -y\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Install "),e("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),e("OutboundLink")],1),t._v(" datasets:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./src/mavros/mavros/scripts/install_geographiclib_datasets.sh\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Build source")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("catkin build\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Make sure that you use setup.bash or setup.zsh from workspace.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#Needed or rosrun can't find nodes from this workspace.\nsource devel/setup.bash\n")])])])])]),t._v(" "),e("p",[t._v("In the case of error, there are addition installation and troubleshooting notes in the "),e("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros repo"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=r.exports}}]);