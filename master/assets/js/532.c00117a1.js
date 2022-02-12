(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{1410:function(e,t,o){e.exports=o.p+"assets/img/ark_flow.36cc8dae.jpg"},1411:function(e,t,o){e.exports=o.p+"assets/img/ark_flow_orientation.62142fab.png"},3413:function(e,t,o){"use strict";o.r(t);var a=o(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ark-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[e._v("#")]),e._v(" ARK Flow")]),e._v(" "),a("p",[e._v("ARK Flow is an open source "),a("RouterLink",{attrs:{to:"/zh/uavcan/"}},[e._v("UAVCAN")]),e._v(" "),a("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html"}},[e._v("optical flow")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(", and IMU module.")],1),e._v(" "),a("p",[a("img",{attrs:{src:o(1410),alt:"ARK Flow"}})]),e._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),a("p",[e._v("Order this module from:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://arkelectron.com/product/ark-flow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARK Electronics"),a("OutboundLink")],1),e._v(" (US)")])]),e._v(" "),a("h2",{attrs:{id:"specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[e._v("#")]),e._v(" Specifications")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ARK-Electronics/ARK_Flow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Source Schematic and BOM"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Runs "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/ark/can-flow",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Open Source Firmware"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Supports "),a("RouterLink",{attrs:{to:"/zh/uavcan/"}},[e._v("UAVCAN")]),e._v(" "),a("RouterLink",{attrs:{to:"/zh/uavcan/node_firmware.html"}},[e._v("Firmware Updating")])],1),e._v(" "),a("li",[e._v("Dynamic "),a("RouterLink",{attrs:{to:"/zh/uavcan/"}},[e._v("UAVCAN")]),e._v(" node enumeration")],1),e._v(" "),a("li",[e._v("Sensors\n"),a("ul",[a("li",[e._v("PixArt PAW3902 Optical Flow Sensor\n"),a("ul",[a("li",[e._v("Tracks under super low light condition of >9 lux")]),e._v(" "),a("li",[e._v("Wide working range from 80mm up to 30m")]),e._v(" "),a("li",[e._v("Up to 7.4 rad/s")])])]),e._v(" "),a("li",[e._v("40mW IR LED built onto board for improved low light operation")]),e._v(" "),a("li",[e._v("Broadcom AFBR-S50LV85D Time-of-Flight Distance Sensor\n"),a("ul",[a("li",[e._v("Integrated 850 nm laser light source")]),e._v(" "),a("li",[e._v("Field-of-View (FoV) of 12.4° x 6.2° with 32 pixels")]),e._v(" "),a("li",[e._v("Typical distance range up to 30m")]),e._v(" "),a("li",[e._v("Operation of up to 200k Lux ambient light")]),e._v(" "),a("li",[e._v("Works well on all surface conditions")]),e._v(" "),a("li",[e._v("Transmitter beam of 2° x 2° to illuminate between 1 and 3 pixels")])])]),e._v(" "),a("li",[e._v("Bosch BMI088 6-Axis IMU or Invensense ICM-42688-P 6-Axis IMU")])])]),e._v(" "),a("li",[e._v("STM32F412CEU6 MCU")]),e._v(" "),a("li",[e._v("Two Pixhawk Standard CAN Connectors\n"),a("ul",[a("li",[e._v("4 Pin JST GH")])])]),e._v(" "),a("li",[e._v("Pixhawk Standard Debug Connector\n"),a("ul",[a("li",[e._v("6 Pin JST SH")])])]),e._v(" "),a("li",[e._v("Small Form Factor\n"),a("ul",[a("li",[e._v("3cm x 3cm x 1.4cm")])])]),e._v(" "),a("li",[e._v("LED Indicators")]),e._v(" "),a("li",[e._v("USA Built")])]),e._v(" "),a("h3",{attrs:{id:"wiring-connecting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring-connecting"}},[e._v("#")]),e._v(" Wiring/Connecting")]),e._v(" "),a("p",[e._v("The ARK Flow is connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable. Multiple sensors can be connected by plugging additional sensors into the ARK Flow's second CAN connector.")]),e._v(" "),a("p",[e._v("General instructions for UAVCAN wiring can also be found in "),a("RouterLink",{attrs:{to:"/zh/uavcan/#wiring"}},[e._v("UAVCAN > Wiring")]),e._v(".")],1),e._v(" "),a("p",[a("a",{attrs:{id:"mounting"}})]),e._v(" "),a("h3",{attrs:{id:"mounting-orientation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounting-orientation"}},[e._v("#")]),e._v(" Mounting/Orientation")]),e._v(" "),a("p",[e._v("The recommended mounting orientation is with the connectors on the board pointing towards "),a("strong",[e._v("back of vehicle")]),e._v(", as shown in the following picture.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1411),alt:"ARK Flow align with Pixhawk"}})]),e._v(" "),a("p",[e._v("This corresponds to the default value ("),a("code",[e._v("0")]),e._v(") of the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_ROT"}},[e._v("SENS_FLOW_ROT")]),e._v(". Change the parameter appropriately if using a different orientation.")],1),e._v(" "),a("p",[e._v("The sensor can be mounted anywhere on the frame, but you will need to specify the focal point position, relative to vehicle centre of gravity, during "),a("a",{attrs:{href:"#px4-configuration"}},[e._v("PX4 configuration")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"px4-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-setup"}},[e._v("#")]),e._v(" PX4 Setup")]),e._v(" "),a("h3",{attrs:{id:"enabling-uavcan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-uavcan"}},[e._v("#")]),e._v(" Enabling UAVCAN")]),e._v(" "),a("p",[e._v("In order to use the ARK Flow board, connect it to the Pixhawk CAN bus and enable the UAVCAN driver by setting parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),a("code",[e._v("2")]),e._v(" for dynamic node allocation (or "),a("code",[e._v("3")]),e._v(" if using "),a("RouterLink",{attrs:{to:"/zh/uavcan/escs.html"}},[e._v("UAVCAN ESCs")]),e._v(").")],1),e._v(" "),a("p",[e._v("The steps are:")]),e._v(" "),a("ul",[a("li",[e._v("In "),a("em",[e._v("QGroundControl")]),e._v(" set the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),a("code",[e._v("2")]),e._v(" or "),a("code",[e._v("3")]),e._v(" and reboot (see "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("Finding/Updating Parameters")]),e._v(").")],1),e._v(" "),a("li",[e._v("Connect ARK Flow CAN to the Pixhawk CAN.")])]),e._v(" "),a("p",[e._v("Once enabled, the module will be detected on boot. Flow data should arrive at 10Hz.")]),e._v(" "),a("h3",{attrs:{id:"px4-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),a("p",[e._v("You need to set the EKF optical flow parameters to enable fusing optical flow measurements for velocity calculation, set necessary "),a("RouterLink",{attrs:{to:"/zh/uavcan/"}},[e._v("UAVCAN")]),e._v(" parameters, and define offsets if the sensor is not centred within the vehicle.")],1),e._v(" "),a("ul",[a("li",[e._v("In "),a("em",[e._v("QGroundControl")]),e._v(" manually set the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[e._v("EKF2_AID_MASK")]),e._v(" to "),a("code",[e._v("2")]),e._v(" to use optical flow only or "),a("code",[e._v("3")]),e._v(" to use GPS and optical flow. To manually set the value, select "),a("code",[e._v("Advanced Settings")]),e._v(" and check "),a("code",[e._v("manual entry")]),e._v(", then enter the value at the top and save.")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_A_HMAX"}},[e._v("EKF2_RNG_A_HMAX")]),e._v(" to "),a("code",[e._v("10")]),e._v(".")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_QLTY_T"}},[e._v("EKF2_RNG_QLTY_T")]),e._v(" to "),a("code",[e._v("0.2")]),e._v(".")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_RNG_MIN"}},[e._v("UAVCAN_RNG_MIN")]),e._v(" to "),a("code",[e._v("0.08")]),e._v(".")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_RNG_MAX"}},[e._v("UAVCAN_RNG_MAX")]),e._v(" to "),a("code",[e._v("30")]),e._v(".")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_MINHGT"}},[e._v("SENS_FLOW_MINHGT")]),e._v(" to "),a("code",[e._v("0.08")]),e._v(".")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_MAXHGT"}},[e._v("SENS_FLOW_MAXHGT")]),e._v(" to "),a("code",[e._v("25")]),e._v(".")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_MAXR"}},[e._v("SENS_FLOW_MAXR")]),e._v(" to "),a("code",[e._v("7.4")]),e._v(" to match the PAW3902 maximum angular flow rate.")],1),e._v(" "),a("li",[e._v("Enable "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_FLOW"}},[e._v("UAVCAN_SUB_FLOW")]),e._v(".")],1),e._v(" "),a("li",[e._v("Enable "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_RNG"}},[e._v("UAVCAN_SUB_RNG")]),e._v(".")],1),e._v(" "),a("li",[e._v("The parameters "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_OF_POS_X"}},[e._v("EKF2_OF_POS_X")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_OF_POS_Y"}},[e._v("EKF2_OF_POS_Y")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_OF_POS_Z"}},[e._v("EKF2_OF_POS_Z")]),e._v(" can be set to account for the offset of the Ark Flow from the vehicle centre of gravity.")],1)]),e._v(" "),a("p",[e._v("On the ARK Flow, you may need to configure the following parameters:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"CANNODE_FLOW_ROT"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_FLOW_ROT"}},[e._v("CANNODE_FLOW_ROT")])],1),e._v(" "),a("td",[e._v("Yaw rotation of the board relative to the vehicle body frame.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"CANNODE_TERM"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_FLOW_ROT"}},[e._v("CANNODE_TERM")])],1),e._v(" "),a("td",[e._v("CAN built-in bus termination.")])])])]),e._v(" "),a("h2",{attrs:{id:"building-ark-flow-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-ark-flow-firmware"}},[e._v("#")]),e._v(" Building Ark Flow Firmware")]),e._v(" "),a("p",[e._v("Ark Flow is sold with a recent firmware build. Developers who want to update to the very latest version can build and install it themselves using the normal PX4 toolchain and sources.")]),e._v(" "),a("p",[e._v("The steps are:")]),e._v(" "),a("ol",[a("li",[e._v("Install the "),a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[e._v("PX4 toolchain")]),e._v(".")],1),e._v(" "),a("li",[e._v("Clone the PX4-Autopilot sources, including Ark Flow, using "),a("em",[e._v("git")]),e._v(":"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/PX4/PX4-Autopilot --recursive\ncd PX4-Autopilot\n")])])])]),e._v(" "),a("li",[e._v("Build the Ark Flow firmware:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make ark_can-flow_default\n")])])])]),e._v(" "),a("li",[e._v("That will have created a binary in "),a("strong",[e._v("build/ark_can-flow_default")]),e._v(" named "),a("strong",[e._v("XX-X.X.XXXXXXXX.uavcan.bin")]),e._v(". Put this binary on the root directory of the flight controller’s SD card to flash the Ark Flow. Next time you power your flight controller with the SD card installed, Ark Flow will automatically be flashed and you should notice the binary is no longer in the root directory and there is now a file named "),a("strong",[e._v("80.bin")]),e._v(" in the ufw directory of the SD card. :::note The Ark Flow will not boot if there is no SD card in the flight controller when powered on.\n:::")])]),e._v(" "),a("h2",{attrs:{id:"updating-ark-flow-bootloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-ark-flow-bootloader"}},[e._v("#")]),e._v(" Updating Ark Flow Bootloader")]),e._v(" "),a("p",[e._v("The Ark Flow comes with the bootloader pre-installed. You can, however, rebuild and reflash it within the PX4-Autopilot environment.")]),e._v(" "),a("p",[e._v("The steps are:")]),e._v(" "),a("ol",[a("li",[e._v("Build the Ark Flow bootloader firmware:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make ark_can-flow_canbootloader\n")])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("This will setup your "),a("code",[e._v("launch.json")]),e._v(" file if you are in VS code. If using the Black Magic Probe and VS code, make sure to update "),a("code",[e._v("BMPGDBSerialPort")]),e._v(" within this file to the correct port that your debugger is connected to. On MacOS, the port name should look something like "),a("code",[e._v("cu.usbmodemE4CCA0E11")]),e._v(".")])]),e._v(" "),a("ol",[a("li",[e._v("Connect to your Ark Flow to any Serial Wire Debugging (SWD) device that supports use of GNU Project Debugger (GDB), such as the Black Magic Probe and then connect power to your Ark Flow via one of the CAN ports.")]),e._v(" "),a("li",[e._v("Flash the Ark Flow with "),a("code",[e._v("ark_can-flow_canbootloader")]),e._v(". To do so in VS code, you should see "),a("code",[e._v("CMake: [ark_can-flow_canbootloader]: Ready")]),e._v(" on the bottom bar of VS code, indicating what you are flashing. You then flash the bootloader by selecting "),a("code",[e._v("Start Debugging")]),e._v(" in the Run and Debug window of VS code and then selecting "),a("code",[e._v("Continue")]),e._v(" after the first breakpoint.")]),e._v(" "),a("li",[e._v("With the bootloader flashed, you are ready to build and flash the Ark Flow firmware "),a("code",[e._v("ark_can-flow_default")]),e._v(" as outlined above.")])]),e._v(" "),a("h2",{attrs:{id:"led-meanings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#led-meanings"}},[e._v("#")]),e._v(" LED Meanings")]),e._v(" "),a("p",[e._v("You will see both red and blue LEDs on the ARK Flow when it is being flashed, and a solid blue LED if it is running properly.")]),e._v(" "),a("p",[e._v("If you see a solid red LED there is an error and you should check the following:")]),e._v(" "),a("ul",[a("li",[e._v("Make sure the flight controller has an SD card installed.")]),e._v(" "),a("li",[e._v("Make sure the Ark Flow has "),a("code",[e._v("ark_can-flow_canbootloader")]),e._v(" installed prior to flashing "),a("code",[e._v("ark_can-flow_default")]),e._v(".")]),e._v(" "),a("li",[e._v("Remove binaries from the root and ufw directories of the SD card and try to build and flash again.")])]),e._v(" "),a("h2",{attrs:{id:"video"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[e._v("#")]),e._v(" Video")]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/SAbRe1fi7bU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),e._v(" "),a("em",[e._v("PX4 holding position using the ARK Flow sensor for velocity estimation (in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[e._v("Position Mode")]),e._v(").")],1),a("p")])}),[],!1,null,null,null);t.default=r.exports}}]);