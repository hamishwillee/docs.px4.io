(window.webpackJsonp=window.webpackJsonp||[]).push([[2091],{3745:function(e,t,o){"use strict";o.r(t);var i=o(19),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"机器人"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#机器人"}},[e._v("#")]),e._v(" 机器人")]),e._v(" "),o("p",[e._v("Drone APIs let you write code to control and integrate with PX4-powered vehicles, without having to understand intimate details of the vehicle and flight stack, or having to think about safety-critical behaviour.")]),e._v(" "),o("p",[e._v('For example, you might want to create new "smart" flight modes, or custom geofence modes, or integrate new hardware. Drone APIs allow you to do this using high level instructions in your programming language of choice, and the code can then run on-vehicle in a '),o("RouterLink",{attrs:{to:"/zh/companion_computer/"}},[e._v("companion computer")]),e._v(" or from a ground station. Under the the hood the APIs communicate with PX4 using "),o("RouterLink",{attrs:{to:"/zh/middleware/mavlink.html"}},[e._v("MAVLink")]),e._v(" or "),o("RouterLink",{attrs:{to:"/zh/middleware/uxrce_dds.html"}},[e._v("uXRCE-DDS")]),e._v(".")],1),e._v(" "),o("p",[e._v("PX4 supports the following SDKs/Robotics tools:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVSDK"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/ros/"}},[e._v("ROS 2")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/ros/"}},[e._v("ROS 1")])],1)]),e._v(" "),o("h2",{attrs:{id:"what-api-should-i-use"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-api-should-i-use"}},[e._v("#")]),e._v(" What API should I use?")]),e._v(" "),o("p",[e._v("We recommend using MAVSDK where possible, primarily because it is far more intuitive and easier to learn. It can also run on more operating systems and less performant-hardware.")]),e._v(" "),o("p",[e._v("You may prefer ROS if you already know how to use it, or if you want to leverage pre-existing integrations (for example computer vision tasks). More generally, ROS is likely to be a better choice for tasks that require very low latency or a deeper integration with PX4 than is provided by MAVLink.")]),e._v(" "),o("p",[e._v("The main difference are:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("MAVSDK:")]),e._v(" "),o("ul",[o("li",[e._v("Intuitive and optimised for drones, with a small learning curve and easy setup.")]),e._v(" "),o("li",[e._v("You can write apps in C++, Python, Swift, Java, Go, and more.")]),e._v(" "),o("li",[e._v("Runs on resource-constrained hardware")]),e._v(" "),o("li",[e._v("Runs on broad range of OSs, including Android, Linux, Windows.")]),e._v(" "),o("li",[e._v("Communicates over MAVLink.\n"),o("ul",[o("li",[e._v("Stable and widely supported.")]),e._v(" "),o("li",[e._v("Limited to MAVLink services - needed information may not be exposed.")]),e._v(" "),o("li",[e._v("Latency may be too high for some use cases.")])])])])]),e._v(" "),o("li",[o("strong",[e._v("ROS:")]),e._v(" "),o("ul",[o("li",[e._v("General-purpose robotics API that has been extended to support drone integration:\n"),o("ul",[o("li",[e._v("Conceptually not as well optimised for drones")]),e._v(" "),o("li",[e._v("Significant learning curve")])])]),e._v(" "),o("li",[e._v("Many pre-existing libraries: useful for code-reuse.")]),e._v(" "),o("li",[e._v("Supports C++ and Python libraries")]),e._v(" "),o("li",[e._v("Runs on Linux")]),e._v(" "),o("li",[e._v("ROS 2 is the latest version, which connects via DDS.\n"),o("ul",[o("li",[e._v("DDS interface layer allows deep integration into any aspect of PX4 that is exposed as a UORB topic (almost everything).")]),e._v(" "),o("li",[e._v("Can provide much lower latency.")]),e._v(" "),o("li",[e._v("Still under development. At time of writing requires a deeper understanding of PX4 than ROS 1")])])]),e._v(" "),o("li",[e._v("ROS 1 is the older version that can connect over MAVLink or via ROS 2. Users are encouraged to update to ROS 2 for new projects.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);