(window.webpackJsonp=window.webpackJsonp||[]).push([[1842],{3286:function(t,e,n){"use strict";n.r(e);var a=n(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"ignition-gazebo-simulation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ignition-gazebo-simulation"}},[t._v("#")]),t._v(" Ignition Gazebo Simulation")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("Ignition Gazebo supports a single frame (quadcopter) and world (July 2021).")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://ignitionrobotics.org/libs/gazebo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ignition Gazebo"),n("OutboundLink")],1),t._v(" is an open source robotics simulator from the "),n("a",{attrs:{href:"https://ignitionrobotics.org/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ignition Robotics Project"),n("OutboundLink")],1),t._v(". It is derived from the popular robotics simulator "),n("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[t._v("Gazebo")]),t._v(", featuring more advanced rendering, physics and sensor models.")],1),t._v(" "),n("p",[n("strong",[t._v("Supported Vehicles:")]),t._v(" Quadrotor")]),t._v(" "),n("p"),n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/eRzdGD2vgkU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),n("p"),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("See "),n("RouterLink",{attrs:{to:"/zh/simulation/"}},[t._v("Simulation")]),t._v(" for general information about simulators, the simulation environment, and simulation configuration (e.g. supported vehicles).")],1)]),t._v(" "),n("h2",{attrs:{id:"installation-ubuntu-linux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation-ubuntu-linux"}},[t._v("#")]),t._v(" Installation (Ubuntu Linux)")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("These instructions were tested on Ubuntu 18.04 and Ubuntu 20.04")])]),t._v(" "),n("ol",[n("li",[t._v("Install the usual "),n("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Development Environment on Ubuntu LTS / Debian Linux")]),t._v(".")],1),t._v(" "),n("li",[t._v("Install Ignition Gazebo following the "),n("a",{attrs:{href:"https://github.com/Auterion/px4-simulation-ignition#readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),n("OutboundLink")],1),t._v(" ("),n("code",[t._v("sudo")]),t._v(" may be required):"),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -c "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echo \"deb http://packages.osrfoundation.org/gazebo/ubuntu-stable `lsb_release -cs` main\" > /etc/apt/sources.list.d/gazebo-stable.list'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://packages.osrfoundation.org/gazebo.key -O - "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ignition-edifice\n")])])])])]),t._v(" "),n("h2",{attrs:{id:"running-the-simulation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-the-simulation"}},[t._v("#")]),t._v(" Running the Simulation")]),t._v(" "),n("p",[t._v("Ignition Gazebo SITL simulation can be conveniently run through a "),n("code",[t._v("make")]),t._v(" command as shown below:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4-Autopilot\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl ignition\n")])])]),n("p",[t._v("This will run both the PX4 SITL instance and the ignition gazebo client")]),t._v(" "),n("p",[t._v("The supported vehicles and "),n("code",[t._v("make")]),t._v(" commands are listed below (click on the links to see the vehicle images).")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Vehicle")]),t._v(" "),n("th",[t._v("Command")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("quadrotor(iris)")]),t._v(" "),n("td",[n("code",[t._v("make px4_sitl ignition")])])])])]),t._v(" "),n("p",[t._v("The commands above launch a single vehicle with the full UI. "),n("em",[t._v("QGroundControl")]),t._v(" should be able to automatically connect to the simulated vehicle.")]),t._v(" "),n("p",[t._v("In order to run the simulation without running the ignition gazebo gui, one can use the "),n("code",[t._v("HEADLESS=1")]),t._v(" flag. For example, the following")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("HEADLESS=1 make px4_sitl ignition\n")])])]),n("p",[t._v("In order to increase the verbose output, "),n("code",[t._v("VERBOSE_SIM=1")]),t._v(" can be used.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("VERBOSE_SIM=1 make px4_sitl ignition\n")])])]),n("h2",{attrs:{id:"further-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/Auterion/px4-simulation-ignition",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4-simulation-ignition"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);