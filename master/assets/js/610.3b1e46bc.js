(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{1281:function(t,e,a){t.exports=a.p+"assets/img/flightgear-multi-vehicle-sitl.ea4e8d57.jpg"},2185:function(t,e,a){"use strict";a.r(e);var s=a(18),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"multi-vehicle-simulation-with-flightgear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation-with-flightgear"}},[t._v("#")]),t._v(" Multi-Vehicle Simulation with FlightGear")]),t._v(" "),s("p",[t._v("This topic explains how to simulate multiple vehicles using FlightGear in SITL. All vehicle instances have parameters defined by their startup scripts.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note")]),t._v(" This is the most environmentally realistic way to simulate multiple vehicles running PX, and allows easy testing of multiple different types of vehicles. It is suitable for testing multi-vehicle support in "),s("em",[t._v("QGroundControl")]),t._v(", "),s("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),s("OutboundLink")],1),t._v(", etc. "),s("RouterLink",{attrs:{to:"/ko/simulation/multi-vehicle-simulation.html"}},[t._v("Multi-Vehicle Simulation with Gazebo")]),t._v(" should be used instead for: swarm simulations with many vehicles, and testing features like computer vision that are only supported by Gazebo.")],1)]),t._v(" "),s("h2",{attrs:{id:"how-to-start-multiple-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start-multiple-instances"}},[t._v("#")]),t._v(" How to Start Multiple Instances")]),t._v(" "),s("p",[t._v("To start multiple instances (on separate ports and IDs):")]),t._v(" "),s("ol",[s("li",[t._v("Checkout the "),s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4Firmware/tree/flightgear-multi",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 branch that supports multiple vehicles"),s("OutboundLink")],1),t._v(" (at ThunderFly-aerospace):"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ThunderFly-aerospace/PX4Firmware.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4Firmware\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout flightgear-multi  \n")])])])]),t._v(" "),s("li",[t._v("Build the PX4 Firmware using the standard toolchain (with FlightGear installed).")]),t._v(" "),s("li",[t._v("Start the first instance using the "),s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge/tree/master/scripts",target:"_blank",rel:"noopener noreferrer"}},[t._v("predefined scripts"),s("OutboundLink")],1),t._v(":"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./Tools/flightgear_bridge/scripts\n./vehicle1.sh\n")])])])]),t._v(" "),s("li",[t._v("Start subsequent instances using another script:"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./vehicle2.sh\n")])])])])]),t._v(" "),s("p",[t._v("Each instance should have its own startup script, which can represent a completely different vehicle type. For prepared scripts you should get the following view.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1281),alt:"Multi-vehicle simulation using PX4 SITL and FlightGear"}})]),t._v(" "),s("p",[t._v("Ground stations such as "),s("em",[t._v("QGroundControl")]),t._v(" connect to all instances using the normal UDP port 14550 (all traffic goes to the same port).")]),t._v(" "),s("p",[t._v("The number of simultaneously running instances is limited mainly by computer resources. FlightGear is a single-thread application, but aerodynamics solvers consume a lot of memory. Therefore splitting to multiple computers and using a "),s("a",{attrs:{href:"http://wiki.flightgear.org/index.php?title=Howto:Multiplayer",target:"_blank",rel:"noopener noreferrer"}},[t._v("multiplayer server"),s("OutboundLink")],1),t._v(" is probably required to run "),s("em",[t._v("many")]),t._v(" vehicle instances.")]),t._v(" "),s("h2",{attrs:{id:"additional-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources"}},[t._v("#")]),t._v(" Additional Resources")]),t._v(" "),s("ul",[s("li",[t._v("See "),s("RouterLink",{attrs:{to:"/ko/simulation/"}},[t._v("Simulation")]),t._v(" for more information about the port configuration.")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);