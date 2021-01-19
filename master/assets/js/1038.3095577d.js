(window.webpackJsonp=window.webpackJsonp||[]).push([[1038],{2194:function(t,s,e){"use strict";e.r(s);var a=e(18),i=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"multi-vehicle-simulation-with-jmavsim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation-with-jmavsim"}},[t._v("#")]),t._v(" Multi-Vehicle Simulation with JMAVSim")]),t._v(" "),e("p",[t._v("This topic explains how to simulate multiple UAV (multicopter) vehicles using JMAVSim and SITL. All vehicle instances are started at the same position in the simulation.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This is the easiest way to simulate multiple vehicles running PX4. It is suitable for testing multi-vehicle support in "),e("em",[t._v("QGroundControl")]),t._v(" (or the "),e("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),e("OutboundLink")],1),t._v(", etc.). "),e("RouterLink",{attrs:{to:"/ko/simulation/multi-vehicle-simulation.html"}},[t._v("Multi-Vehicle Simulation with Gazebo")]),t._v(" should be used for swarm simulations with many vehicles, or for testing features like computer vision that are only supported by Gazebo.")],1)]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("JMAVSim multi-vehicle simulation works on PX4 v1.8.0 and later.")])]),t._v(" "),e("h2",{attrs:{id:"how-to-start-multiple-instances"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start-multiple-instances"}},[t._v("#")]),t._v(" How to Start Multiple Instances")]),t._v(" "),e("p",[t._v("To start multiple instances (on separate ports):")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Build PX4 "),e("code",[t._v("make px4_sitl_default")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("make px4_sitl_default\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Start the first instance: "),e("code",[t._v("./Tools/jmavsim_run.sh")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("2): <code>./Tools/sitl_multiple_run.sh 2</code>\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Start the first instance:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./Tools/jmavsim_run.sh -l\n")])])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1. Start subsequent instances, specifying the *simulation* UDP port for the instance: `./Tools/jmavsim_run.sh -p 14561` The port should be set to `14560+i` for `i` in `[0, N-1]`.\n")])])]),e("p",[t._v("./Tools/jmavsim_run.sh -p 4561 -l")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("The port should be set to `4560+i` for `i` in `[0, N-1]`.\n\nGround stations such as *QGroundControl* connect to all instances using the normal UDP port 14550 (all traffic goes to the same port).\n\nDeveloper APIs such as *MAVSDK* or *MAVROS* connect on the UDP port 14540 (first instance), UDP port 14541 (second instance), and so on.\n\n## Additional Resources\n\n* See [Simulation](../simulation/README.md) for more information about the UDP port configuration.\n")])])])])}),[],!1,null,null,null);s.default=i.exports}}]);