(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{1233:function(o,t,e){o.exports=e.p+"assets/img/r1_rover_no_bg.647c148c.png"},1234:function(o,t,e){o.exports=e.p+"assets/img/r1_assembly.b730438f.png"},1235:function(o,t,e){o.exports=e.p+"assets/img/wiring_r1.61db4674.jpg"},1236:function(o,t,e){o.exports=e.p+"assets/img/r1_airframe.e1552e2d.png"},1237:function(o,t,e){o.exports=e.p+"assets/img/roboclaw_actuator_config_qgc.1845ccb0.png"},2973:function(o,t,e){"use strict";e.r(t);var r=e(19),a=Object(r.a)({},(function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[r("h1",{attrs:{id:"aion-robotics-r1-ugv"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aion-robotics-r1-ugv"}},[o._v("#")]),o._v(" Aion Robotics R1 UGV")]),o._v(" "),r("Badge",{attrs:{type:"warning",text:"main (PX4 v1.15)"}}),o._v(" "),r("p",[o._v("The "),r("a",{attrs:{href:"https://www.aionrobotics.com/",target:"_blank",rel:"noopener noreferrer"}},[o._v("Aion R1"),r("OutboundLink")],1),o._v("vehicle was chosen to test and improve the differential drive support for PX4, and to improve driver support for Roboclaw Motor Controllers, such as the "),r("a",{attrs:{href:"https://www.basicmicro.com/RoboClaw-2x15A-Motor-Controller_p_10.html",target:"_blank",rel:"noopener noreferrer"}},[o._v("RoboClaw 2x15A"),r("OutboundLink")],1),o._v(".")]),o._v(" "),r("p",[o._v("The documentation and driver information here should also make it easier to work with Roboclaw controllers on other vehicles, and to work with vehicles like the "),r("a",{attrs:{href:"https://www.aionrobotics.com/r6",target:"_blank",rel:"noopener noreferrer"}},[o._v("Aion R6"),r("OutboundLink")],1),o._v(".")]),o._v(" "),r("p",[o._v("Currently, PX4 supports MANUAL mode for this setup.")]),o._v(" "),r("p",[r("img",{attrs:{src:e(1233),alt:"Aion Robotics R1 UGV"}})]),o._v(" "),r("h2",{attrs:{id:"parts-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parts-list"}},[o._v("#")]),o._v(" Parts List")]),o._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.aionrobotics.com/",target:"_blank",rel:"noopener noreferrer"}},[o._v("Aion R1 (Discontinued)"),r("OutboundLink")],1),o._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github-docs.readthedocs.io/en/latest/r1-ugv.html",target:"_blank",rel:"noopener noreferrer"}},[o._v("Documentation"),r("OutboundLink")],1)])])]),o._v(" "),r("li",[r("a",{attrs:{href:"https://www.basicmicro.com/RoboClaw-2x15A-Motor-Controller_p_10.html",target:"_blank",rel:"noopener noreferrer"}},[o._v("RoboClaw 2x15A"),r("OutboundLink")],1),o._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://resources.basicmicro.com/aion-robotics-r1-autonomous-robot/",target:"_blank",rel:"noopener noreferrer"}},[o._v("R1 Roboclaw specifications"),r("OutboundLink")],1)])])]),o._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/companion_computer/auterion_skynode.html"}},[o._v("Auterion Skynode")])],1)]),o._v(" "),r("h2",{attrs:{id:"assembly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[o._v("#")]),o._v(" Assembly")]),o._v(" "),r("p",[o._v("The assembly consists of a 3D-printed frame on which all the autopilot parts were attached.\nFor this build this includes an "),r("RouterLink",{attrs:{to:"/ko/companion_computer/auterion_skynode.html"}},[o._v("Auterion Skynode")]),o._v(", connected to a Pixhawk Adapter Board that interfaces with the RoboClaw motor controllers over serial.")],1),o._v(" "),r("p",[r("img",{attrs:{src:e(1234),alt:"R1 Assembly"}})]),o._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[o._v("Note")]),o._v(" "),r("p",[o._v("If using a standard Pixhawk you could connect the RoboClaw to the Autopilot without an Adapter Board.")])]),o._v(" "),r("p",[o._v("The RoboClaw should be connected to a suitable suitable serial (UART) port on the flight controller, such as "),r("code",[o._v("GPS2")]),o._v(" or "),r("code",[o._v("TELEM1")]),o._v(".\nOther RoboClaw wiring is detailed in the "),r("a",{attrs:{href:"https://downloads.basicmicro.com/docs/roboclaw_user_manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[o._v("RoboClaw User Manual"),r("OutboundLink")],1),o._v(" 'Packet Serial Wiring' section and shown below (this setup has been validated for compatibility).")]),o._v(" "),r("p",[r("img",{attrs:{src:e(1235),alt:"Serial Wiring Encoders"}})]),o._v(" "),r("h2",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[o._v("#")]),o._v(" PX4 Configuration")]),o._v(" "),r("h3",{attrs:{id:"rover-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rover-configuration"}},[o._v("#")]),o._v(" Rover Configuration")]),o._v(" "),r("p",[o._v("Use "),r("em",[o._v("QGroundControl")]),o._v(" for rover configuration:")]),o._v(" "),r("ol",[r("li",[o._v("In the "),r("RouterLink",{attrs:{to:"/ko/config/"}},[o._v("Basic Configuration")]),o._v(" section, select the "),r("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[o._v("Airframe")]),o._v(" tab.")],1),o._v(" "),r("li",[o._v("Choose "),r("strong",[o._v("Aion Robotics R1 UGV")]),o._v(" under the "),r("strong",[o._v("Rover")]),o._v(" category.")])]),o._v(" "),r("p",[r("img",{attrs:{src:e(1236),alt:"Select Airframe"}})]),o._v(" "),r("h3",{attrs:{id:"roboclaw-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roboclaw-configuration"}},[o._v("#")]),o._v(" RoboClaw Configuration")]),o._v(" "),r("p",[o._v("First configure the serial connection:")]),o._v(" "),r("ol",[r("li",[r("p",[o._v("Navigate to the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[o._v("Parameters")]),o._v(" section in QGroundControl.")],1),o._v(" "),r("ul",[r("li",[r("p",[o._v("Set the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RBCLW_SER_CFG"}},[o._v("RBCLW_SER_CFG")]),o._v(" parameter to the serial port to which the RoboClaw is connected (such as "),r("code",[o._v("GPS2")]),o._v(").")],1)]),o._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RBCLW_COUNTS_REV"}},[o._v("RBCLW_COUNTS_REV")]),o._v(" specifies the number of encoder counts required for one wheel revolution.\nThis value should be left at "),r("code",[o._v("1200")]),o._v(" for the tested "),r("code",[o._v("RoboClaw 2x15A Motor Controller")]),o._v(".\nAdjust the value based on your specific encoder and wheel setup.")],1)]),o._v(" "),r("li",[r("p",[o._v("RoboClaw motor controllers must be assigned a unique address on the bus.\nThe default address is 128 and you should not need to change this (if you do, update the PX4 parameter "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RBCLW_ADDRESS"}},[o._v("RBCLW_ADDRESS")]),o._v(" to match).")],1),o._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[o._v("Note")]),o._v(" "),r("p",[o._v("PX4 does not support multiple RoboClaw motor controllers in the same vehicle — each controller needs a unique address on the bus, and there is only one parameter for setting the address in PX4 ("),r("code",[o._v("RBCLW_ADDRESS")]),o._v(").")])])])])])]),o._v(" "),r("p",[o._v(":::")]),o._v(" "),r("p",[o._v("Then configure the actuator configuration:")]),o._v(" "),r("ol",[r("li",[r("p",[o._v("Navigate to "),r("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[o._v("Actuators Configuration & Testing")]),o._v(" in QGroundControl.")],1)]),o._v(" "),r("li",[r("p",[o._v("Select the RoboClaw driver from the list of "),r("em",[o._v("Actuator Outputs")]),o._v(".")]),o._v(" "),r("p",[o._v("For the channel assignments, disarm, minimum, and maximum values, please refer to the image below.")]),o._v(" "),r("p",[r("img",{attrs:{src:e(1237),alt:"RoboClaw QGC"}})]),o._v(" "),r("p",[o._v("For systems with more than two motors, it is possible to assign the same function to several motors.\nThe reason for the unusual values, can be found in the "),r("a",{attrs:{href:"https://downloads.basicmicro.com/docs/roboclaw_user_manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[o._v("RoboClaw User Manual"),r("OutboundLink")],1),o._v(" under "),r("code",[o._v("Compatibility Commands")]),o._v(" for "),r("code",[o._v("Packet Serial")]),o._v(":")]),o._v(" "),r("div",{staticClass:"language-plain extra-class"},[r("pre",{pre:!0,attrs:{class:"language-plain"}},[r("code",[o._v("Drive motor forward. Valid data range is 0 - 127. A value of 127 = full speed forward, 64 =\nabout half speed forward and 0 = full stop.\n")])])])])]),o._v(" "),r("h2",{attrs:{id:"see-also"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[o._v("#")]),o._v(" See also")]),o._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/modules/modules_driver.html#roboclaw"}},[o._v("roboclaw")]),o._v(" driver")],1),o._v(" "),r("li",[r("a",{attrs:{href:"https://downloads.basicmicro.com/docs/roboclaw_user_manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[o._v("Roboclaw User Manual"),r("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);