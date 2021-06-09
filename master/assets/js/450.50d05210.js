(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{1332:function(t,e,a){t.exports=a.p+"assets/img/ark_flow.36cc8dae.jpg"},1333:function(t,e,a){t.exports=a.p+"assets/img/ark_flow_orientation.62142fab.png"},2291:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"ark-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[t._v("#")]),t._v(" ARK Flow")]),t._v(" "),o("p",[t._v("ARK Flow is an open source "),o("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN")]),t._v(" "),o("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[t._v("optical flow")]),t._v(", "),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(", and IMU module.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(1332),alt:"ARK Flow"}})]),t._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),o("p",[t._v("Order this module from:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/ark-flow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ARK Electronics"),o("OutboundLink")],1),t._v(" (US)")])]),t._v(" "),o("h2",{attrs:{id:"specifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/ARK-Electronics/ARK_Flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open Source Schematic and BOM"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Runs "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/ark/can-flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Open Source Firmware"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Supports "),o("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN")]),t._v(" "),o("RouterLink",{attrs:{to:"/ko/uavcan/node_firmware.html"}},[t._v("Firmware Updating")])],1),t._v(" "),o("li",[t._v("Dynamic "),o("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN")]),t._v(" node enumeration")],1),t._v(" "),o("li",[t._v("Sensors\n"),o("ul",[o("li",[t._v("PixArt PAW3902 Optical Flow Sensor")]),t._v(" "),o("li",[t._v("Tracks under super low light condition of >9 lux")]),t._v(" "),o("li",[t._v("Wide working range from 80mm up to infinity")]),t._v(" "),o("li",[t._v("Up to 7.4 rad/s")]),t._v(" "),o("li",[t._v("40mW IR LED built onto board for improved low light operation")]),t._v(" "),o("li",[t._v("Broadcom AFBR-S50LV85D Time-of-Flight Distance Sensor\n"),o("ul",[o("li",[t._v("Integrated 850 nm laser light source")]),t._v(" "),o("li",[t._v("Field-of-View (FoV) of 12.4° x 6.2° with 32 pixels")]),t._v(" "),o("li",[t._v("Typical distance range up to 30m")]),t._v(" "),o("li",[t._v("Operation of up to 200k Lux ambient light")]),t._v(" "),o("li",[t._v("Works well on all surface conditions")]),t._v(" "),o("li",[t._v("Transmitter beam of 2° x 2° to illuminate between 1 and 3 pixels")])])])])]),t._v(" "),o("li",[t._v("Bosch BMI088 6-Axis IMU")]),t._v(" "),o("li",[t._v("STM32F412CEU6 MCU")]),t._v(" "),o("li",[t._v("Two Pixhawk Standard CAN Connectors\n"),o("ul",[o("li",[t._v("4 Pin JST GH")])])]),t._v(" "),o("li",[t._v("Pixhawk Standard Debug Connector\n"),o("ul",[o("li",[t._v("6 Pin JST SH")])])]),t._v(" "),o("li",[t._v("Small Form Factor\n"),o("ul",[o("li",[t._v("3cm x 3cm x 1.4cm")])])]),t._v(" "),o("li",[t._v("LED Indicators")]),t._v(" "),o("li",[t._v("USA Built")])]),t._v(" "),o("h3",{attrs:{id:"wiring-connecting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-connecting"}},[t._v("#")]),t._v(" Wiring/Connecting")]),t._v(" "),o("p",[t._v("The ARK Flow is connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable. Multiple sensors can be connected by plugging additional sensors into the ARK Flow's second CAN connector.")]),t._v(" "),o("p",[t._v("General instructions for UAVCAN wiring can also be found in "),o("RouterLink",{attrs:{to:"/ko/uavcan/#wiring"}},[t._v("UAVCAN > Wiring")]),t._v(".")],1),t._v(" "),o("p",[o("span",{attrs:{id:"mounting"}})]),t._v(" "),o("h3",{attrs:{id:"mounting-orientation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mounting-orientation"}},[t._v("#")]),t._v(" Mounting/Orientation")]),t._v(" "),o("p",[t._v("The recommended mounting orientation is with the connectors on the board pointing towards "),o("strong",[t._v("back of vehicle")]),t._v(", as shown in the following picture.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1333),alt:"ARK Flow align with Pixhawk"}})]),t._v(" "),o("p",[t._v("This corresponds to the default value ("),o("code",[t._v("0")]),t._v(") of the parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_ROT"}},[t._v("SENS_FLOW_ROT")]),t._v(". Change the parameter appropriately if using a different orientation.")],1),t._v(" "),o("p",[t._v("The sensor can be mounted anywhere on the frame, but you will need to specify the focal point position, relative to vehicle centre of gravity, during "),o("a",{attrs:{href:"#px4-configuration"}},[t._v("PX4 configuration")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"px4-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-setup"}},[t._v("#")]),t._v(" PX4 Setup")]),t._v(" "),o("h3",{attrs:{id:"enabling-uavcan"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabling-uavcan"}},[t._v("#")]),t._v(" Enabling UAVCAN")]),t._v(" "),o("p",[t._v("In order to use the ARK Flow board, connect it to the Pixhawk CAN bus and enable the UAVCAN driver by setting parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" to "),o("code",[t._v("2")]),t._v(" for dynamic node allocation (or "),o("code",[t._v("3")]),t._v(" if using "),o("RouterLink",{attrs:{to:"/ko/uavcan/escs.html"}},[t._v("UAVCAN ESCs")]),t._v(").")],1),t._v(" "),o("p",[t._v("The steps are:")]),t._v(" "),o("ul",[o("li",[t._v("In "),o("em",[t._v("QGroundControl")]),t._v(" set the parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" to "),o("code",[t._v("2")]),t._v(" or "),o("code",[t._v("3")]),t._v(" and reboot (see "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("Finding/Updating Parameters")]),t._v(").")],1),t._v(" "),o("li",[t._v("Connect ARK Flow CAN to the Pixhawk CAN.")])]),t._v(" "),o("p",[t._v("Once enabled, the module will be detected on boot. Flow data should arrive at 10Hz.")]),t._v(" "),o("h3",{attrs:{id:"px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),o("p",[t._v("Set the EKF optical flow parameters in "),o("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html#ekf2"}},[t._v("Optical Flow > Estimators > EKF2")]),t._v(" in order to:")],1),t._v(" "),o("ul",[o("li",[t._v("enable fusing optical flow measurements for velocity calculation.")]),t._v(" "),o("li",[t._v("define offsets if the sensor is not centred within the vehicle.")])]),t._v(" "),o("p",[t._v("In addition you may need to configure the following parameters.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Parameter")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("span",{attrs:{id:"SENS_FLOW_MAXHGT"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_MAXHGT"}},[t._v("SENS_FLOW_MAXHGT")])],1),t._v(" "),o("td",[t._v("Maximum height above ground when reliant on optical flow.")])]),t._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"SENS_FLOW_MINHGT"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_MINHGT"}},[t._v("SENS_FLOW_MINHGT")])],1),t._v(" "),o("td",[t._v("Minimum height above ground when reliant on optical flow.")])]),t._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"SENS_FLOW_MAXR"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_MAXR"}},[t._v("SENS_FLOW_MAXR")])],1),t._v(" "),o("td",[t._v("Maximum angular flow rate reliably measurable by the optical flow sensor.")])]),t._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"SENS_FLOW_ROT"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_ROT"}},[t._v("SENS_FLOW_ROT")])],1),t._v(" "),o("td",[t._v("Yaw rotation of the board relative to the vehicle body frame.")])])])]),t._v(" "),o("h2",{attrs:{id:"building-ark-flow-firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-ark-flow-firmware"}},[t._v("#")]),t._v(" Building Ark Flow Firmware")]),t._v(" "),o("p",[t._v("Ark Flow is sold with a recent firmware build. Developers who want to update to the very latest version can build and install it themselves using the normal PX4 toolchain and sources.")]),t._v(" "),o("p",[t._v("The steps are:")]),t._v(" "),o("ol",[o("li",[t._v("Install the "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("PX4 toolchain")]),t._v(".")],1),t._v(" "),o("li",[t._v("Clone the PX4-Autopilot sources, including Ark Flow, using "),o("em",[t._v("git")]),t._v(":"),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot --recursive\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])]),t._v(" "),o("li",[t._v("Build the "),o("em",[t._v("Ark Flow")]),t._v(" firmware:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make ark_can-flow\n")])])])]),t._v(" "),o("li",[t._v("Follow instructions for "),o("RouterLink",{attrs:{to:"/ko/uavcan/node_firmware.html"}},[t._v("UAVCAN firmware updating")]),t._v(" using the binary located in "),o("strong",[t._v("build/ark_can-flow_default")]),t._v(" named "),o("strong",[t._v("XX-X.X.XXXXXXXX.uavcan.bin")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);