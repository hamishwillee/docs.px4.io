(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{1227:function(t,o,e){t.exports=e.p+"assets/img/r1_rover_no_bg.647c148c.png"},1228:function(t,o,e){t.exports=e.p+"assets/img/r1_assembly.b730438f.png"},1229:function(t,o,e){t.exports=e.p+"assets/img/wiring_r1.61db4674.jpg"},1230:function(t,o,e){t.exports=e.p+"assets/img/r1_airframe.e1552e2d.png"},1231:function(t,o,e){t.exports=e.p+"assets/img/roboclaw_actuator_config_qgc.1845ccb0.png"},2194:function(t,o,e){"use strict";e.r(o);var r=e(19),a=Object(r.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"aion-robotics-r1-ugv"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aion-robotics-r1-ugv"}},[t._v("#")]),t._v(" Aion Robotics R1 UGV")]),t._v(" "),r("Badge",{attrs:{type:"warning",text:"main (PX4 v1.15)"}}),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://www.aionrobotics.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aion R1"),r("OutboundLink")],1),t._v("vehicle was chosen to test and improve the differential drive support for PX4, and to improve driver support for Roboclaw Motor Controllers, such as the "),r("a",{attrs:{href:"https://www.basicmicro.com/RoboClaw-2x15A-Motor-Controller_p_10.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RoboClaw 2x15A"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("The documentation and driver information here should also make it easier to work with Roboclaw controllers on other vehicles, and to work with vehicles like the "),r("a",{attrs:{href:"https://www.aionrobotics.com/r6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aion R6"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("Currently, PX4 supports MANUAL mode for this setup.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1227),alt:"Aion Robotics R1 UGV"}})]),t._v(" "),r("h2",{attrs:{id:"parts-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parts-list"}},[t._v("#")]),t._v(" Parts List")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.aionrobotics.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aion R1 (Discontinued)"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github-docs.readthedocs.io/en/latest/r1-ugv.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentation"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.basicmicro.com/RoboClaw-2x15A-Motor-Controller_p_10.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RoboClaw 2x15A"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://resources.basicmicro.com/aion-robotics-r1-autonomous-robot/",target:"_blank",rel:"noopener noreferrer"}},[t._v("R1 Roboclaw specifications"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/companion_computer/auterion_skynode.html"}},[t._v("Auterion Skynode")])],1)]),t._v(" "),r("h2",{attrs:{id:"assembly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[t._v("#")]),t._v(" Assembly")]),t._v(" "),r("p",[t._v("The assembly consists of a 3D-printed frame on which all the autopilot parts were attached.\nFor this build this includes an "),r("RouterLink",{attrs:{to:"/en/companion_computer/auterion_skynode.html"}},[t._v("Auterion Skynode")]),t._v(", connected to a Pixhawk Adapter Board that interfaces with the RoboClaw motor controllers over serial.")],1),t._v(" "),r("p",[r("img",{attrs:{src:e(1228),alt:"R1 Assembly"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If using a standard Pixhawk you could connect the RoboClaw to the Autopilot without an Adapter Board.")])]),t._v(" "),r("p",[t._v("The RoboClaw should be connected to a suitable suitable serial (UART) port on the flight controller, such as "),r("code",[t._v("GPS2")]),t._v(" or "),r("code",[t._v("TELEM1")]),t._v(".\nOther RoboClaw wiring is detailed in the "),r("a",{attrs:{href:"https://downloads.basicmicro.com/docs/roboclaw_user_manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("RoboClaw User Manual"),r("OutboundLink")],1),t._v(" 'Packet Serial Wiring' section and shown below (this setup has been validated for compatibility).")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1229),alt:"Serial Wiring Encoders"}})]),t._v(" "),r("h2",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),r("h3",{attrs:{id:"rover-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rover-configuration"}},[t._v("#")]),t._v(" Rover Configuration")]),t._v(" "),r("p",[t._v("Use "),r("em",[t._v("QGroundControl")]),t._v(" for rover configuration:")]),t._v(" "),r("ol",[r("li",[t._v("In the "),r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration")]),t._v(" section, select the "),r("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("Airframe")]),t._v(" tab.")],1),t._v(" "),r("li",[t._v("Choose "),r("strong",[t._v("Aion Robotics R1 UGV")]),t._v(" under the "),r("strong",[t._v("Rover")]),t._v(" category.")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(1230),alt:"Select Airframe"}})]),t._v(" "),r("h3",{attrs:{id:"roboclaw-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roboclaw-configuration"}},[t._v("#")]),t._v(" RoboClaw Configuration")]),t._v(" "),r("p",[t._v("First configure the serial connection:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Navigate to the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[t._v("Parameters")]),t._v(" section in QGroundControl.")],1),t._v(" "),r("ul",[r("li",[r("p",[t._v("Set the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RBCLW_SER_CFG"}},[t._v("RBCLW_SER_CFG")]),t._v(" parameter to the serial port to which the RoboClaw is connected (such as "),r("code",[t._v("GPS2")]),t._v(").")],1)]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RBCLW_COUNTS_REV"}},[t._v("RBCLW_COUNTS_REV")]),t._v(" specifies the number of encoder counts required for one wheel revolution.\nThis value should be left at "),r("code",[t._v("1200")]),t._v(" for the tested "),r("code",[t._v("RoboClaw 2x15A Motor Controller")]),t._v(".\nAdjust the value based on your specific encoder and wheel setup.")],1)]),t._v(" "),r("li",[r("p",[t._v("RoboClaw motor controllers must be assigned a unique address on the bus.\nThe default address is 128 and you should not need to change this (if you do, update the PX4 parameter "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RBCLW_ADDRESS"}},[t._v("RBCLW_ADDRESS")]),t._v(" to match).")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("PX4 does not support multiple RoboClaw motor controllers in the same vehicle — each controller needs a unique address on the bus, and there is only one parameter for setting the address in PX4 ("),r("code",[t._v("RBCLW_ADDRESS")]),t._v(").")])])])])])]),t._v(" "),r("p",[t._v("Then configure the actuator configuration:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Navigate to "),r("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[t._v("Actuators Configuration & Testing")]),t._v(" in QGroundControl.")],1)]),t._v(" "),r("li",[r("p",[t._v("Select the RoboClaw driver from the list of "),r("em",[t._v("Actuator Outputs")]),t._v(".")]),t._v(" "),r("p",[t._v("For the channel assignments, disarm, minimum, and maximum values, please refer to the image below.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1231),alt:"RoboClaw QGC"}})]),t._v(" "),r("p",[t._v("For systems with more than two motors, it is possible to assign the same function to several motors.\nThe reason for the unusual values, can be found in the "),r("a",{attrs:{href:"https://downloads.basicmicro.com/docs/roboclaw_user_manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("RoboClaw User Manual"),r("OutboundLink")],1),t._v(" under "),r("code",[t._v("Compatibility Commands")]),t._v(" for "),r("code",[t._v("Packet Serial")]),t._v(":")]),t._v(" "),r("div",{staticClass:"language-plain extra-class"},[r("pre",{pre:!0,attrs:{class:"language-plain"}},[r("code",[t._v("Drive motor forward. Valid data range is 0 - 127. A value of 127 = full speed forward, 64 =\nabout half speed forward and 0 = full stop.\n")])])])])]),t._v(" "),r("h2",{attrs:{id:"see-also"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See also")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/modules/modules_driver.html#roboclaw"}},[t._v("roboclaw")]),t._v(" driver")],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://downloads.basicmicro.com/docs/roboclaw_user_manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Roboclaw User Manual"),r("OutboundLink")],1)])])],1)}),[],!1,null,null,null);o.default=a.exports}}]);