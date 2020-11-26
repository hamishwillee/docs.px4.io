(window.webpackJsonp=window.webpackJsonp||[]).push([[1034],{2189:function(t,e,s){"use strict";s.r(e);var a=s(18),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"multi-vehicle-simulation-with-jmavsim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation-with-jmavsim"}},[t._v("#")]),t._v(" Multi-Vehicle Simulation with JMAVSim")]),t._v(" "),s("p",[t._v("This topic explains how to simulate multiple UAV (multicopter) vehicles using JMAVSim and SITL. All vehicle instances are started at the same position in the simulation.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip")]),t._v(" This is the easiest way to simulate multiple vehicles running PX4. It is suitable for testing multi-vehicle support in "),s("em",[t._v("QGroundControl")]),t._v(" (or the "),s("a",{attrs:{href:"https://sdk.dronecode.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode SDK"),s("OutboundLink")],1),t._v(", etc.). "),s("RouterLink",{attrs:{to:"/ko/simulation/multi-vehicle-simulation.html"}},[t._v("Multi-Vehicle Simulation with Gazebo")]),t._v(" should be used for swarm simulations with many vehicles, or for testing features like computer vision that are only supported by Gazebo.")],1)]),t._v(" "),s("p",[s("span")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note")]),t._v(" JMAVSim multi-vehicle simulation works on PX4 v1.8.0 and later.")])]),t._v(" "),s("h2",{attrs:{id:"how-to-start-multiple-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start-multiple-instances"}},[t._v("#")]),t._v(" How to Start Multiple Instances")]),t._v(" "),s("p",[t._v("To start multiple instances (on separate ports):")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Build PX4 "),s("code",[t._v("make px4_sitl_default")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make px4_sitl_default\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start the first instance: "),s("code",[t._v("./Tools/jmavsim_run.sh")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("2): <code>./Tools/sitl_multiple_run.sh 2</code>\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start the first instance:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./Tools/jmavsim_run.sh -l\n")])])])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. Start subsequent instances, specifying the *simulation* UDP port for the instance: `./Tools/jmavsim_run.sh -p 14561` The port should be set to `14560+i` for `i` in `[0, N-1]`.\n")])])]),s("p",[t._v("./Tools/jmavsim_run.sh -p 4561 -l")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("The port should be set to `4560+i` for `i` in `[0, N-1]`.\n\n*QGroundControl* and developer APIs (e.g. Dronecode SDK) connect to all instances using the normal/default ports (14550 and 14540, respectively).\n\nDeveloper APIs such as *MAVSDK* or *MAVROS* connect on the UDP port 14540 (first instance), UDP port 14541 (second instance), and so on.\n\n## Additional Resources\n\n* See [Simulation](../simulation/README.md) for more information about the UDP port configuration.\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);