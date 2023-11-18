(window.webpackJsonp=window.webpackJsonp||[]).push([[1784],{3212:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jsbsim-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsbsim-simulation"}},[t._v("#")]),t._v(" JSBSim Simulation")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This simulator is "),a("RouterLink",{attrs:{to:"/ko/simulation/community_supported_simulators.html"}},[t._v("community supported and maintained")]),t._v(". It may or may not work with current versions of PX4.")],1),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools supported by the core development team.")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://jsbsim.sourceforge.net/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSBSim"),a("OutboundLink")],1),t._v(' is a open source flight simulator ("flight dynamics model (FDM)") that runs on Microsoft Windows, Apple Macintosh, Linux, IRIX, Cygwin (Unix on Windows), etc. Its features include: fully configurable aerodynamics and a propulsion system that can model complex flight dynamics of an aircraft. Rotational earth effects are also modeled into the dynamics.')]),t._v(" "),a("p",[a("strong",[t._v("Supported Vehicles:")]),t._v(" Plane, Quadrotor, Hexarotor")]),t._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/y5azVNmIVyw",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/ko/simulation/"}},[t._v("Simulation")]),t._v(" for general information about simulators, the simulation environment, and simulation configuration (e.g. supported vehicles).")],1)]),t._v(" "),a("h2",{attrs:{id:"installation-ubuntu-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-ubuntu-linux"}},[t._v("#")]),t._v(" Installation (Ubuntu Linux)")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("These instructions were tested on Ubuntu 18.04")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Install the usual "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Development Environment on Ubuntu LTS / Debian Linux")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Install a JSBSim release from the "),a("a",{attrs:{href:"https://github.com/JSBSim-Team/jsbsim/releases/tag/Linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("release page"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("dpkg -i JSBSim-devel_1.1.0.dev1-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("release-number"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".bionic.amd64.deb\n")])])])]),t._v(" "),a("li",[a("p",[t._v("(Optional) FlightGear may (optionally) be used for visualisation. To install FlightGear, refer to the "),a("RouterLink",{attrs:{to:"/ko/sim_flightgear/"}},[t._v("FlightGear installation instructions")]),t._v(").")],1)])]),t._v(" "),a("h2",{attrs:{id:"running-the-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-simulation"}},[t._v("#")]),t._v(" Running the Simulation")]),t._v(" "),a("p",[t._v("JSBSim SITL simulation can be conveniently run through a "),a("code",[t._v("make")]),t._v(" command as shown below:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jsbsim\n")])])]),a("p",[t._v("This will run both the PX4 SITL instance and the FlightGear UI (for visualization). If you want to run without the FlightGear UI, you can add "),a("code",[t._v("HEADLESS=1")]),t._v(" to the front of the "),a("code",[t._v("make")]),t._v(" command.")]),t._v(" "),a("p",[t._v("The supported vehicles and "),a("code",[t._v("make")]),t._v(" commands are listed below (click on the links to see the vehicle images).")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Vehicle")]),t._v(" "),a("th",[t._v("Command")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Standard Plane")]),t._v(" "),a("td",[a("code",[t._v("make px4_sitl jsbsim_rascal")])])]),t._v(" "),a("tr",[a("td",[t._v("Quadrotor")]),t._v(" "),a("td",[a("code",[t._v("make px4_sitl jsbsim_quadrotor_x")])])]),t._v(" "),a("tr",[a("td",[t._v("Hexarotor")]),t._v(" "),a("td",[a("code",[t._v("make px4_sitl jsbsim_hexarotor_x")])])])])]),t._v(" "),a("p",[t._v("The commands above launch a single vehicle with the full UI. "),a("em",[t._v("QGroundControl")]),t._v(" should be able to automatically connect to the simulated vehicle.")]),t._v(" "),a("h2",{attrs:{id:"running-jsbsim-with-ros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-jsbsim-with-ros"}},[t._v("#")]),t._v(" Running JSBSim with ROS")]),t._v(" "),a("p",[t._v("To run JSBSim with ROS:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Clone the "),a("code",[t._v("px4-jsbsim-bridge")]),t._v(" package into your catkin workspace:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path_to_catkin_ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/src\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/Auterion/px4-jsbsim-bridge.git\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Build the "),a("code",[t._v("jsbsim_bridge")]),t._v(" catkin package:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("catkin build jsbsim_bridge\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("You must have already set MAVROS in your workspace (if not, follow the instructions in the "),a("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("MAVROS installation guide")]),t._v(").")],1)]),t._v(" "),a("ol",[a("li",[a("p",[t._v("So start JSBSim through ROS using the launch file as shown:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("roslaunch jsbsim_bridge px4_jsbsim_bridge.launch\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Auterion/px4-jsbsim-bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4-jsbsim-bridge readme"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);