(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{1311:function(t,e,a){t.exports=a.p+"assets/img/ark_flow.36cc8dae.jpg"},1312:function(t,e,a){t.exports=a.p+"assets/img/ark_flow_orientation.62142fab.png"},2731:function(t,e,a){"use strict";a.r(e);var r=a(18),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"ark-flow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[t._v("#")]),t._v(" ARK Flow")]),t._v(" "),r("p",[t._v("ARK Flow is an open source "),r("RouterLink",{attrs:{to:"/zh/uavcan/"}},[t._v("UAVCAN")]),t._v(" "),r("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html"}},[t._v("optical flow")]),t._v(", "),r("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(", and IMU module.")],1),t._v(" "),r("p",[r("img",{attrs:{src:a(1311),alt:"ARK Flow"}})]),t._v(" "),r("h2",{attrs:{id:"where-to-buy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),r("p",[t._v("Order this module from:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://arkelectron.com/product/ark-flow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ARK Electronics"),r("OutboundLink")],1),t._v(" (US)")])]),t._v(" "),r("h2",{attrs:{id:"specifications"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ARK-Electronics/ARK_Flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open Source Schematic and BOM"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Runs "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/ark/can-flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Open Source Firmware"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Supports "),r("RouterLink",{attrs:{to:"/zh/uavcan/"}},[t._v("UAVCAN")]),t._v(" "),r("RouterLink",{attrs:{to:"/zh/uavcan/node_firmware.html"}},[t._v("Firmware Updating")])],1),t._v(" "),r("li",[t._v("Dynamic "),r("RouterLink",{attrs:{to:"/zh/uavcan/"}},[t._v("UAVCAN")]),t._v(" node enumeration")],1),t._v(" "),r("li",[t._v("Sensors\n"),r("ul",[r("li",[t._v("PixArt PAW3902 Optical Flow Sensor")]),t._v(" "),r("li",[t._v("Tracks under super low light condition of >9 lux")]),t._v(" "),r("li",[t._v("Wide working range from 80mm up to infinity")]),t._v(" "),r("li",[t._v("Up to 7.4 rad/s")]),t._v(" "),r("li",[t._v("40mW IR LED built onto board for improved low light operation")]),t._v(" "),r("li",[t._v("Broadcom AFBR-S50LV85D Time-of-Flight Distance Sensor\n"),r("ul",[r("li",[t._v("Integrated 850 nm laser light source")]),t._v(" "),r("li",[t._v("Field-of-View (FoV) of 12.4° x 6.2° with 32 pixels")]),t._v(" "),r("li",[t._v("Typical distance range up to 30m")]),t._v(" "),r("li",[t._v("Operation of up to 200k Lux ambient light")]),t._v(" "),r("li",[t._v("Works well on all surface conditions")]),t._v(" "),r("li",[t._v("Transmitter beam of 2° x 2° to illuminate between 1 and 3 pixels")])])])])]),t._v(" "),r("li",[t._v("Bosch BMI088 6-Axis IMU")]),t._v(" "),r("li",[t._v("STM32F412CEU6 MCU")]),t._v(" "),r("li",[t._v("Two Pixhawk Standard CAN Connectors\n"),r("ul",[r("li",[t._v("4 Pin JST GH")])])]),t._v(" "),r("li",[t._v("Pixhawk Standard Debug Connector\n"),r("ul",[r("li",[t._v("6 Pin JST SH")])])]),t._v(" "),r("li",[t._v("Small Form Factor\n"),r("ul",[r("li",[t._v("3cm x 3cm x 1.4cm")])])]),t._v(" "),r("li",[t._v("LED Indicators")]),t._v(" "),r("li",[t._v("USA Built")])]),t._v(" "),r("h3",{attrs:{id:"wiring-connecting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-connecting"}},[t._v("#")]),t._v(" Wiring/Connecting")]),t._v(" "),r("p",[t._v("The ARK Flow is connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable. Multiple sensors can be connected by plugging additional sensors into the ARK Flow's second CAN connector.")]),t._v(" "),r("p",[t._v("General instructions for UAVCAN wiring can also be found in "),r("RouterLink",{attrs:{to:"/zh/uavcan/#wiring"}},[t._v("UAVCAN > Wiring")]),t._v(".")],1),t._v(" "),r("p",[r("span",{attrs:{id:"mounting"}})]),t._v(" "),r("h3",{attrs:{id:"mounting-orientation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mounting-orientation"}},[t._v("#")]),t._v(" Mounting/Orientation")]),t._v(" "),r("p",[t._v("The recommended mounting orientation is with the connectors on the board pointing towards "),r("strong",[t._v("back of vehicle")]),t._v(", as shown in the following picture.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1312),alt:"ARK Flow align with Pixhawk"}})]),t._v(" "),r("p",[t._v("This corresponds to the default value ("),r("code",[t._v("0")]),t._v(") of the parameter "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_ROT"}},[t._v("SENS_FLOW_ROT")]),t._v(". Change the parameter appropriately if using a different orientation.")],1),t._v(" "),r("p",[t._v("The sensor can be mounted anywhere on the frame, but you will need to specify the focal point position, relative to vehicle centre of gravity, during "),r("a",{attrs:{href:"#px4-configuration"}},[t._v("PX4 configuration")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"px4-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-setup"}},[t._v("#")]),t._v(" PX4 Setup")]),t._v(" "),r("h3",{attrs:{id:"enabling-uavcan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enabling-uavcan"}},[t._v("#")]),t._v(" Enabling UAVCAN")]),t._v(" "),r("p",[t._v("In order to use the ARK Flow board, connect it to the Pixhawk CAN bus and enable the UAVCAN driver by setting parameter "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" to "),r("code",[t._v("2")]),t._v(" for dynamic node allocation (or "),r("code",[t._v("3")]),t._v(" if using "),r("RouterLink",{attrs:{to:"/zh/uavcan/escs.html"}},[t._v("UAVCAN ESCs")]),t._v(").")],1),t._v(" "),r("p",[t._v("The steps are:")]),t._v(" "),r("ul",[r("li",[t._v("In "),r("em",[t._v("QGroundControl")]),t._v(" set the parameter "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" to "),r("code",[t._v("2")]),t._v(" or "),r("code",[t._v("3")]),t._v(" and reboot (see "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("Finding/Updating Parameters")]),t._v(").")],1),t._v(" "),r("li",[t._v("Connect ARK Flow CAN to the Pixhawk CAN.")])]),t._v(" "),r("p",[t._v("Once enabled, the module will be detected on boot. Flow data should arrive at 10Hz.")]),t._v(" "),r("h3",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),r("p",[t._v("Set the EKF optical flow parameters in "),r("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html#ekf2"}},[t._v("Optical Flow > Estimators > EKF2")]),t._v(" in order to:")],1),t._v(" "),r("ul",[r("li",[t._v("enable fusing optical flow measurements for velocity calculation.")]),t._v(" "),r("li",[t._v("define offsets if the sensor is not centred within the vehicle.")])]),t._v(" "),r("p",[t._v("In addition you may need to configure the following parameters.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"SENS_FLOW_MAXHGT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_MAXHGT"}},[t._v("SENS_FLOW_MAXHGT")])],1),t._v(" "),r("td",[t._v("Maximum height above ground when reliant on optical flow.")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"SENS_FLOW_MINHGT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_MINHGT"}},[t._v("SENS_FLOW_MINHGT")])],1),t._v(" "),r("td",[t._v("Minimum height above ground when reliant on optical flow.")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"SENS_FLOW_MAXR"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_MAXR"}},[t._v("SENS_FLOW_MAXR")])],1),t._v(" "),r("td",[t._v("Maximum angular flow rate reliably measurable by the optical flow sensor.")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"SENS_FLOW_ROT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_ROT"}},[t._v("SENS_FLOW_ROT")])],1),t._v(" "),r("td",[t._v("Yaw rotation of the board relative to the vehicle body frame.")])])])]),t._v(" "),r("h2",{attrs:{id:"building-ark-flow-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#building-ark-flow-firmware"}},[t._v("#")]),t._v(" Building Ark Flow Firmware")]),t._v(" "),r("p",[t._v("Ark Flow is sold with a recent firmware build. Developers who want to update to the very latest version can build and install it themselves using the normal PX4 toolchain and sources.")]),t._v(" "),r("p",[t._v("The steps are:")]),t._v(" "),r("ol",[r("li",[t._v("Install the "),r("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[t._v("PX4 toolchain")]),t._v(".")],1),t._v(" "),r("li",[t._v("Clone the PX4-Autopilot sources, including Ark Flow, using "),r("em",[t._v("git")]),t._v(":"),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot --recursive\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])]),t._v(" "),r("li",[t._v("Build the "),r("em",[t._v("Ark Flow")]),t._v(" firmware:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("make ark_can-flow\n")])])])]),t._v(" "),r("li",[t._v("Follow instructions for "),r("RouterLink",{attrs:{to:"/zh/uavcan/node_firmware.html"}},[t._v("UAVCAN firmware updating")]),t._v(" using the binary located in "),r("strong",[t._v("build/ark_can-flow_default")]),t._v(" named "),r("strong",[t._v("XX-X.X.XXXXXXXX.uavcan.bin")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);