(window.webpackJsonp=window.webpackJsonp||[]).push([[1378],{2548:function(t,e,s){"use strict";s.r(e);var i=s(19),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"multi-vehicle-simulation-with-jmavsim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation-with-jmavsim"}},[t._v("#")]),t._v(" Multi-Vehicle Simulation with JMAVSim")]),t._v(" "),s("p",[t._v("This topic explains how to simulate multiple UAV (multicopter) vehicles using "),s("RouterLink",{attrs:{to:"/en/sim_jmavsim/"}},[t._v("JMAVSim")]),t._v(" and SITL.\nAll vehicle instances are started at the same position in the simulation.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This is the easiest way to simulate multiple vehicles running PX4.\nIt is suitable for testing multi-vehicle support in "),s("em",[t._v("QGroundControl")]),t._v(" (or the "),s("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),s("OutboundLink")],1),t._v(", etc.).\n"),s("RouterLink",{attrs:{to:"/en/simulation/multi-vehicle-simulation.html"}},[t._v("Multi-Vehicle Simulation with Gazebo")]),t._v(" should be used for swarm simulations with many vehicles, or for testing features like computer vision that are only supported by Gazebo.")],1)]),t._v(" "),s("h2",{attrs:{id:"how-to-start-multiple-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start-multiple-instances"}},[t._v("#")]),t._v(" How to Start Multiple Instances")]),t._v(" "),s("p",[t._v("To start multiple instances (on separate ports):")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Build PX4")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Run "),s("strong",[t._v("sitl_multiple_run.sh")]),t._v(", specifying the number of instances to start (e.g. 2):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("./Tools/sitl_multiple_run.sh "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start the first instance in the same terminal (this will run in the foreground):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("./Tools/simulation/jmavsim/jmavsim_run.sh -l\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Open a new terminal for each subsequent instance, specifying the "),s("em",[t._v("simulation")]),t._v(" TCP port for the instance:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("./Tools/simulation/jmavsim/jmavsim_run.sh -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4560")]),t._v(" -l\n")])])]),s("p",[t._v("The port should be set to "),s("code",[t._v("4560+i")]),t._v(" where "),s("code",[t._v("i")]),t._v(" iterates for each instance (from "),s("code",[t._v("0")]),t._v(" to "),s("code",[t._v("N-1")]),t._v(")")])])]),t._v(" "),s("p",[s("em",[t._v("QGroundControl")]),t._v(" should automatically connect to all the new vehicle instances (all GCS traffic is sent to PX4's remote UDP port: "),s("code",[t._v("14550")]),t._v(" from all instances).\nThe vehicle that is currently being controlled is displayed in the application to bar; you can select this vehicle text to display a selection list of all of the (simulated) connected vehicle instances ("),s("code",[t._v("Vehicle 1")]),t._v(", "),s("code",[t._v("Vehicle 2")]),t._v(", etc.) and choose a new vehicle to control.")]),t._v(" "),s("p",[t._v("Developer APIs such as "),s("em",[t._v("MAVSDK")]),t._v(" or "),s("em",[t._v("MAVROS")]),t._v(" can connect to individual instances by listening on sequentially allocated PX4 remote UDP ports from "),s("code",[t._v("14540")]),t._v(" (first instance) to "),s("code",[t._v("14549")]),t._v(".\nAdditional instances "),s("em",[t._v("all")]),t._v(" connect to port "),s("code",[t._v("14549")]),t._v(".")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip")]),t._v(" The "),s("strong",[t._v("sitl_multiple_run.sh")]),t._v(" script starts a separate process for each vehicle.\nTo restart the simulations after killing one of them, you must call "),s("strong",[t._v("sitl_multiple_run.sh")]),t._v(" again, and also restart each of the individual instances in their own terminals.")])]),t._v(" "),s("h2",{attrs:{id:"additional-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources"}},[t._v("#")]),t._v(" Additional Resources")]),t._v(" "),s("ul",[s("li",[t._v("See "),s("RouterLink",{attrs:{to:"/en/simulation/"}},[t._v("Simulation")]),t._v(" for more information about the port configuration.")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);