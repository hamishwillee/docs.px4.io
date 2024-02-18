(window.webpackJsonp=window.webpackJsonp||[]).push([[879],{3464:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"companion-computers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#companion-computers"}},[t._v("#")]),t._v(" Companion Computers")]),t._v(" "),r("p",[t._v('Companion computers ("mission computers"), are separate on-vehicle computers that are connected to the flight controller, and which enable computationally expensive features like '),r("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("object avoidance")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/computer_vision/collision_prevention.html"}},[t._v("collision prevention")]),t._v(".")],1),t._v(" "),r("p",[t._v("The diagram below shows a possible architecture for an unmanned vehicle architecture that includes a flight controller and companion computer.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(622),alt:"PX4 architecture - FC + Companion Computer"}})]),t._v(" "),r("p",[t._v('The flight controller runs PX4 on NuttX, and provides core flight and safety code. The companion computer usually runs Linux, as this is a much better platform for "general" software development. They are connected using a fast serial or Ethernet link, and typically communicate using the '),r("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink protocol"),r("OutboundLink")],1),t._v(" or uXRCE-DDS.")]),t._v(" "),r("p",[t._v("Communications with the ground stations and the cloud are usually routed via the companion computer (e.g. using the "),r("a",{attrs:{href:"https://github.com/mavlink-router/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Router"),r("OutboundLink")],1),t._v(").")]),t._v(" "),r("h2",{attrs:{id:"integrated-companion-flight-controller-boards"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#integrated-companion-flight-controller-boards"}},[t._v("#")]),t._v(" Integrated Companion/Flight Controller Boards")]),t._v(" "),r("p",[t._v("Controller boards that come with a pre-integrated companion computer and flight controller can significantly ease both software and hardware setup. In some cases the boards are set up to allow easy replacement of flight controller and/or companion computer parts.")]),t._v(" "),r("p",[t._v("The following boards are known to provide a good integration with PX4:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/companion_computer/holybro_pixhawk_rpi_cm4_baseboard.html"}},[t._v("Holybro Pixhawk RPI CM4 Baseboard")])],1)]),t._v(" "),r("h2",{attrs:{id:"managed-integrated-systems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#managed-integrated-systems"}},[t._v("#")]),t._v(" Managed Integrated Systems")]),t._v(" "),r("p",[t._v('The following integrated companion computer/flight controller systems use managed/custom versions of flight controller and companion computer software by default. They are listed here as they can be updated with "vanilla" PX4 firmware for testing/rapid development.')]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/companion_computer/auterion_skynode.html"}},[t._v("Auterion Skynode")])],1)]),t._v(" "),r("h2",{attrs:{id:"companion-computer-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-options"}},[t._v("#")]),t._v(" Companion Computer Options")]),t._v(" "),r("p",[t._v("PX4 can be used with computers that can be configured to communicate via MAVLink or microROS/uXRCE-DDS over over a serial port (or Ethernet port, if present).")]),t._v(" "),r("p",[t._v("A small subset of possible alternatives are listed below:")]),t._v(" "),r("ul",[r("li",[t._v("Raspberry Pi")]),t._v(" "),r("li",[t._v("Odroid")]),t._v(" "),r("li",[t._v("Tegra K1")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The choice of computer will depend on the usual tradeoffs: cost, weight, power consumption, ease of setup, and computational resources required.")])]),t._v(" "),r("h2",{attrs:{id:"companion-computer-software"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-software"}},[t._v("#")]),t._v(" Companion Computer Software")]),t._v(" "),r("p",[t._v("The companion computer needs to run software that communicates with the flight controller, and which routes traffic to ground stations and the cloud.")]),t._v(" "),r("h4",{attrs:{id:"drone-apps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#drone-apps"}},[t._v("#")]),t._v(" Drone Apps")]),t._v(" "),r("p",[t._v("Drone APIs and SDKs allow you to write software that can control PX4. Popular alternatives include:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),r("OutboundLink")],1),t._v(" - libraries in various programming languages to interface with MAVLink systems such as drones, cameras or ground systems.")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/ros/ros2.html"}},[t._v("ROS 2")]),t._v(" to communicate to ROS 2 nodes (may also be used).")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[t._v("ROS 1 and MAVROS")])],1)]),t._v(" "),r("p",[t._v("MAVSDK is generally easier to learn and use, while ROS provides more pre-written software for advanced cases like computer vision. "),r("RouterLink",{attrs:{to:"/zh/robotics/#what-api-should-i-use"}},[t._v("Drone APIs and SDKs > What API Should I Use?")]),t._v(" explains the different options in detail.")],1),t._v(" "),r("p",[t._v("You can also write your own custom MAVLink libraries from scratch:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/mavlink/c_uart_interface_example",target:"_blank",rel:"noopener noreferrer"}},[t._v("C/C++ example code"),r("OutboundLink")],1),t._v(" shows how to connect custom code")]),t._v(" "),r("li",[t._v("MAVLink also can also be used with "),r("a",{attrs:{href:"https://mavlink.io/en/#mavlink-project-generatorslanguages",target:"_blank",rel:"noopener noreferrer"}},[t._v("many other programming languages"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"routers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routers"}},[t._v("#")]),t._v(" Routers")]),t._v(" "),r("p",[t._v("You will need a router if you need to bridge MAVLink from the vehicle to a ground station or IP network, or if you need multiple connections:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Router"),r("OutboundLink")],1),t._v(" (recommended)")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://ardupilot.org/mavproxy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVProxy"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"ethernet-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ethernet-setup"}},[t._v("#")]),t._v(" Ethernet Setup")]),t._v(" "),r("p",[t._v("Ethernet is the recommended connection, if supported by your flight controller. See "),r("RouterLink",{attrs:{to:"/zh/advanced_config/ethernet_setup.html"}},[t._v("Ethernet Setup")]),t._v(" for instructions.")],1),t._v(" "),r("h2",{attrs:{id:"flight-controller-specific-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-specific-setup"}},[t._v("#")]),t._v(" Flight Controller Specific Setup")]),t._v(" "),r("p",[t._v("The following topics explain how to set up companion computers for specific flight controllers, in particular when you are not using an Ethernet connection.")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/companion_computer/pixhawk_companion.html"}},[t._v("Using a Companion Computer with Pixhawk Controllers")])],1)]),t._v(" "),r("h2",{attrs:{id:"additional-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[t._v("#")]),t._v(" Additional Information")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/companion_computer/companion_computer_peripherals.html"}},[t._v("Companion Computer Peripherals")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/concept/px4_systems_architecture.html#fc-and-companion-computer"}},[t._v("PX4 System Architecture > FC and Companion Computer")])],1)])])}),[],!1,null,null,null);e.default=a.exports},622:function(t,e,o){t.exports=o.p+"assets/img/px4_companion_computer_simple.f0c69339.svg"}}]);