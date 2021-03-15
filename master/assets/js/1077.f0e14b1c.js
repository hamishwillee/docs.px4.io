(window.webpackJsonp=window.webpackJsonp||[]).push([[1077],{2235:function(t,e,s){"use strict";s.r(e);var a=s(18),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"multi-vehicle-simulation-with-jmavsim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation-with-jmavsim"}},[t._v("#")]),t._v(" Multi-Vehicle Simulation with JMAVSim")]),t._v(" "),s("p",[t._v("This topic explains how to simulate multiple UAV (multicopter) vehicles using JMAVSim and SITL. All vehicle instances are started at the same position in the simulation.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This is the easiest way to simulate multiple vehicles running PX4. It is suitable for testing multi-vehicle support in "),s("em",[t._v("QGroundControl")]),t._v(" (or the "),s("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),s("OutboundLink")],1),t._v(", etc.). "),s("RouterLink",{attrs:{to:"/ko/simulation/multi-vehicle-simulation.html"}},[t._v("Multi-Vehicle Simulation with Gazebo")]),t._v(" should be used for swarm simulations with many vehicles, or for testing features like computer vision that are only supported by Gazebo.")],1)]),t._v(" "),s("h2",{attrs:{id:"how-to-start-multiple-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start-multiple-instances"}},[t._v("#")]),t._v(" How to Start Multiple Instances")]),t._v(" "),s("p",[t._v("To start multiple instances (on separate ports):")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Build PX4 "),s("code",[t._v("make px4_sitl_default")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make px4_sitl_default\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start the first instance: "),s("code",[t._v("./Tools/jmavsim_run.sh")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("2): <code>./Tools/sitl_multiple_run.sh 2</code>\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start the first instance:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./Tools/jmavsim_run.sh -l\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start subsequent instances, specifying the "),s("em",[t._v("simulation")]),t._v(" UDP port for the instance: "),s("code",[t._v("./Tools/jmavsim_run.sh -p 14561")]),t._v(" The port should be set to "),s("code",[t._v("14560+i")]),t._v(" for "),s("code",[t._v("i")]),t._v(" in "),s("code",[t._v("[0, N-1]")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./Tools/jmavsim_run.sh -p 4561 -l\n")])])]),s("p",[t._v("The port should be set to "),s("code",[t._v("4560+i")]),t._v(" for "),s("code",[t._v("i")]),t._v(" in "),s("code",[t._v("[0, N-1]")]),t._v(".")])])]),t._v(" "),s("p",[t._v("Ground stations such as "),s("em",[t._v("QGroundControl")]),t._v(" listen for all vehicle instances on the PX4's remote UDP port: "),s("code",[t._v("14550")]),t._v(" (all GCS traffic is sent to the "),s("em",[t._v("same")]),t._v(" remote port).")]),t._v(" "),s("p",[t._v("Developer APIs such as "),s("em",[t._v("MAVSDK")]),t._v(" or "),s("em",[t._v("MAVROS")]),t._v(" listen on sequentially allocated PX4 remote UDP ports from "),s("code",[t._v("14540")]),t._v(" (first instance) to "),s("code",[t._v("14549")]),t._v(". Additional instances "),s("em",[t._v("all")]),t._v(" connect to port "),s("code",[t._v("14549")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"additional-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources"}},[t._v("#")]),t._v(" Additional Resources")]),t._v(" "),s("ul",[s("li",[t._v("See "),s("RouterLink",{attrs:{to:"/ko/simulation/"}},[t._v("Simulation")]),t._v(" for more information about the UDP port configuration.")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);