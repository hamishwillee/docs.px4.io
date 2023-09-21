(window.webpackJsonp=window.webpackJsonp||[]).push([[723],{1518:function(t,e,s){t.exports=s.p+"assets/img/flightgear-multi-vehicle-sitl.7a2458c0.jpg"},2413:function(t,e,s){"use strict";s.r(e);var a=s(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"multi-vehicle-simulation-with-flightgear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation-with-flightgear"}},[t._v("#")]),t._v(" Multi-Vehicle Simulation with FlightGear")]),t._v(" "),a("p",[t._v("This topic explains how to simulate multiple vehicles using FlightGear in SITL.\nAll vehicle instances have parameters defined by their startup scripts.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This is the most environmentally realistic way to simulate multiple vehicles running PX4, and allows easy testing of multiple different types of vehicles.\nIt is suitable for testing multi-vehicle support in "),a("em",[t._v("QGroundControl")]),t._v(", "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),a("OutboundLink")],1),t._v(", etc.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/multi_vehicle_simulation_gazebo.html"}},[t._v("Multi-Vehicle Simulation with Gazebo Classic")]),t._v(" should be used instead for: swarm simulations with many vehicles, and testing features like computer vision that are only supported by Gazebo Classic.")],1)]),t._v(" "),a("h2",{attrs:{id:"how-to-start-multiple-instances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start-multiple-instances"}},[t._v("#")]),t._v(" How to Start Multiple Instances")]),t._v(" "),a("p",[t._v("To start multiple instances (on separate ports and IDs):")]),t._v(" "),a("ol",[a("li",[t._v("Checkout the "),a("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4Firmware/tree/flightgear-multi",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 branch that supports multiple vehicles"),a("OutboundLink")],1),t._v(" (at ThunderFly-aerospace):"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ThunderFly-aerospace/PX4Firmware.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4Firmware\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout flightgear-multi  \n")])])])]),t._v(" "),a("li",[t._v("Build the PX4 Firmware using the standard toolchain (with FlightGear installed).")]),t._v(" "),a("li",[t._v("Start the first instance using the "),a("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge/tree/master/scripts",target:"_blank",rel:"noopener noreferrer"}},[t._v("predefined scripts"),a("OutboundLink")],1),t._v(":"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./Tools/flightgear_bridge/scripts\n./vehicle1.sh\n")])])])]),t._v(" "),a("li",[t._v("Start subsequent instances using another script:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./vehicle2.sh\n")])])])])]),t._v(" "),a("p",[t._v("Each instance should have its own startup script, which can represent a completely different vehicle type.\nFor prepared scripts you should get the following view.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1518),alt:"Multi-vehicle simulation using PX4 SITL and FlightGear"}})]),t._v(" "),a("p",[t._v("Ground stations such as "),a("em",[t._v("QGroundControl")]),t._v(" connect to all instances using the normal UDP port 14550 (all traffic goes to the same port).")]),t._v(" "),a("p",[t._v("The number of simultaneously running instances is limited mainly by computer resources.\nFlightGear is a single-thread application, but aerodynamics solvers consume a lot of memory.\nTherefore splitting to multiple computers and using a "),a("a",{attrs:{href:"https://wiki.flightgear.org/Howto:Multiplayer",target:"_blank",rel:"noopener noreferrer"}},[t._v("multiplayer server"),a("OutboundLink")],1),t._v(" is probably required to run "),a("em",[t._v("many")]),t._v(" vehicle instances.")]),t._v(" "),a("h2",{attrs:{id:"additional-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources"}},[t._v("#")]),t._v(" Additional Resources")]),t._v(" "),a("ul",[a("li",[t._v("See "),a("RouterLink",{attrs:{to:"/en/simulation/"}},[t._v("Simulation")]),t._v(" for more information about the port configuration.")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);