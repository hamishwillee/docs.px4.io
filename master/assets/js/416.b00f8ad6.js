(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{1907:function(t,e,o){"use strict";o.r(e);var r=o(18),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"px4-system-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-system-architecture"}},[t._v("#")]),t._v(" PX4 System Architecture")]),t._v(" "),r("p",[t._v('The sections below provide high-level overview of the PX4 hardware and software stack for two "typical" PX4 systems; one that has just a flight controller, and another that has a flight controller and a mission computer (also known as a "companion computer").')]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The "),r("RouterLink",{attrs:{to:"/ko/concept/architecture.html"}},[t._v("PX4 Architectural Overview")]),t._v(" provides information about the flight stack and middleware. Offboard APIs are covered in "),r("RouterLink",{attrs:{to:"/ko/ros/"}},[t._v("ROS")]),t._v(" and "),r("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),r("OutboundLink")],1),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"flight-controller-only"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-only"}},[t._v("#")]),t._v(" Flight Controller (only)")]),t._v(" "),r("p",[t._v('The diagram below provides a high level overview of a typical "simple" PX4 system based around a flight controller.')]),t._v(" "),r("p",[r("img",{attrs:{src:o(603),alt:"PX4 architecture - FC only system"}})]),t._v(" "),r("p",[t._v("The hardware consists of")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("Flight controller")]),t._v(" (running the PX4 flight stack). This often includes internal IMUs, compass and barometer.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/peripherals/esc_motors.html"}},[t._v("Motor ESCs")]),t._v(" connected to "),r("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM outputs")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/peripherals/uavcan_escs.html"}},[t._v("UAVCAN")]),t._v(" (UAVCAN allows two-way communication, not single direction as shown) or some other bus.")],1),t._v(" "),r("li",[t._v("Sensors ("),r("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[t._v("GPS")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[t._v("compass")]),t._v(", distance sensors, barometers, optical flow, barometers, ADSB transponders, etc.) connected via I2C, SPI, UAVCAN, UART etc.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/peripherals/camera.html"}},[t._v("Camera")]),t._v(" or other payload. Cameras can be connected to PWM outputs or via MAVLink.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("Telemetry radios")]),t._v(" for connecting to a ground station computer/software.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("RC Control System")]),t._v(" for manual control")],1)]),t._v(" "),r("p",[t._v("The left hand side of the diagram shows the software stack, which is horizontally aligned (aproximately) with the hardware parts of the diagram.")]),t._v(" "),r("ul",[r("li",[t._v("The ground station computer typically runs "),r("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#qgroundcontrol"}},[t._v("QGroundControl")]),t._v(" (or some other ground station software). It may also run robotics software like "),r("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),r("OutboundLink")],1),t._v(" or "),r("RouterLink",{attrs:{to:"/ko/ros/"}},[t._v("ROS")]),t._v(".")],1),t._v(" "),r("li",[t._v("The PX4 flight stack running on the flight controller includes "),r("RouterLink",{attrs:{to:"/ko/modules/modules_driver.html"}},[t._v("drivers")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/modules/modules_communication.html"}},[t._v("comms modules")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/modules/modules_controller.html"}},[t._v("controllers")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/modules/modules_controller.html"}},[t._v("estimators")]),t._v(" and other "),r("RouterLink",{attrs:{to:"/ko/modules/modules_main.html"}},[t._v("middleware and system modules")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"fc-and-mission-computer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fc-and-mission-computer"}},[t._v("#")]),t._v(" FC and Mission Computer")]),t._v(" "),r("p",[t._v("The diagram below shows a PX4 system that includes both a flight controller and a mission computer.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(604),alt:"PX4 architecture - FC + Mission Control"}})]),t._v(" "),r("p",[t._v("The flight controller runs the normal PX4 flight stack, while a mission computer provides advanced features like "),r("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html"}},[t._v("object avoidance")]),t._v(" and "),r("RouterLink",{attrs:{to:"/ko/computer_vision/collision_prevention.html"}},[t._v("collision prevention")]),t._v(". The two systems are connected using a fast serial or IP link, and typically communicate using the "),r("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink protocol"),r("OutboundLink")],1),t._v(". Communications with the ground stations and the cloud are usually routed via the mission computer (e.g. using the "),r("a",{attrs:{href:"https://github.com/mavlink-router/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Router"),r("OutboundLink")],1),t._v(" (from Intel)).")],1),t._v(" "),r("p",[t._v("PX4 systems typically run a Linux OS on the mission computer (because the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/Avoidance"),r("OutboundLink")],1),t._v(' project delivers ROS-based avoidance libraries designed for Linux). Linux is a much better platform for "general" software development than NuttX; there are many more Linux developers and a lot of useful software has already been written (e.g. for computer vision, communications, cloud integrations, hardware drivers). Mission computers sometimes run Android for the same reason.')]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The diagram shows a cloud or ground station connection via LTE, an approach that has been used a number of PX4-based systems. PX4 does not deliver software specifically for LTE and/or cloud integration (this requires custom development).")])])])}),[],!1,null,null,null);e.default=s.exports},603:function(t,e,o){t.exports=o.p+"assets/img/px4_arch_fc.c9a2d8c9.svg"},604:function(t,e,o){t.exports=o.p+"assets/img/px4_arch_fc_companion.c430665d.svg"}}]);