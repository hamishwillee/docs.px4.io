(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{1377:function(e,t,a){e.exports=a.p+"assets/img/ark_gps.71aa737f.jpg"},2091:function(e,t,a){"use strict";a.r(t);var n=a(19),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"ark-gps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ark-gps"}},[e._v("#")]),e._v(" ARK GPS")]),e._v(" "),n("p",[e._v("ARK GPS is an open source "),n("RouterLink",{attrs:{to:"/en/uavcan/"}},[e._v("UAVCAN")]),e._v(" "),n("RouterLink",{attrs:{to:"/en/gps_compass/"}},[e._v("GNSS/GPS")]),e._v(", magnetometer, IMU, buzzer, and safety switch module.")],1),e._v(" "),n("p",[n("img",{attrs:{src:a(1377),alt:"ARK GPS"}})]),e._v(" "),n("h2",{attrs:{id:"where-to-buy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),n("p",[e._v("Order this module from:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://arkelectron.com/product/ark-gps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARK Electronics"),n("OutboundLink")],1),e._v(" (US)")])]),e._v(" "),n("h2",{attrs:{id:"specifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[e._v("#")]),e._v(" Specifications")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/ARK-Electronics/ARK_GPS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Source Schematic and BOM"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Runs "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/ark/can-gps",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Open Source Firmware"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Supports "),n("RouterLink",{attrs:{to:"/en/uavcan/"}},[e._v("UAVCAN")]),e._v(" "),n("RouterLink",{attrs:{to:"/en/uavcan/node_firmware.html"}},[e._v("Firmware Updating")])],1),e._v(" "),n("li",[e._v("Dynamic "),n("RouterLink",{attrs:{to:"/en/uavcan/"}},[e._v("UAVCAN")]),e._v(" node enumeration")],1),e._v(" "),n("li",[e._v("Sensors\n"),n("ul",[n("li",[e._v("Ublox M9N GPS\n"),n("ul",[n("li",[e._v("Ultra-robust meter-level GNSS positioning")]),e._v(" "),n("li",[e._v("Maximum position availability with concurrent reception of 4 GNSS")]),e._v(" "),n("li",[e._v("Advanced spoofing and jamming detection")]),e._v(" "),n("li",[e._v("Excellent RF interference mitigation")])])]),e._v(" "),n("li",[e._v("Bosch BMM150 Magnetometer")]),e._v(" "),n("li",[e._v("Bosch BMP388 Barometer")]),e._v(" "),n("li",[e._v("Invensense ICM-42688-P 6-Axis IMU")])])]),e._v(" "),n("li",[e._v("STM32F412CEU6 MCU")]),e._v(" "),n("li",[e._v("Safety Button")]),e._v(" "),n("li",[e._v("Buzzer")]),e._v(" "),n("li",[e._v("Two Pixhawk Standard CAN Connectors\n"),n("ul",[n("li",[e._v("4 Pin JST GH")])])]),e._v(" "),n("li",[e._v("Pixhawk Standard Debug Connector\n"),n("ul",[n("li",[e._v("6 Pin JST SH")])])]),e._v(" "),n("li",[e._v("Small Form Factor\n"),n("ul",[n("li",[e._v("5cm x 5cm x 1cm")])])]),e._v(" "),n("li",[e._v("LED Indicators\n"),n("ul",[n("li",[e._v("Safety LED")]),e._v(" "),n("li",[e._v("GPS Fix")]),e._v(" "),n("li",[e._v("RGB System Status")])])]),e._v(" "),n("li",[e._v("USA Built")]),e._v(" "),n("li",[e._v("Power Requirements\n"),n("ul",[n("li",[e._v("5V")]),e._v(" "),n("li",[e._v("110mA Average")]),e._v(" "),n("li",[e._v("117mA Max")])])])]),e._v(" "),n("h3",{attrs:{id:"wiring-connecting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wiring-connecting"}},[e._v("#")]),e._v(" Wiring/Connecting")]),e._v(" "),n("p",[e._v("The ARK GPS is connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable.\nMultiple sensors can be connected by plugging additional sensors into the ARK GPS's second CAN connector.")]),e._v(" "),n("p",[e._v("General instructions for UAVCAN wiring can also be found in "),n("RouterLink",{attrs:{to:"/en/uavcan/#wiring"}},[e._v("UAVCAN > Wiring")]),e._v(".")],1),e._v(" "),n("p",[n("a",{attrs:{id:"mounting"}})]),e._v(" "),n("h3",{attrs:{id:"mounting-orientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mounting-orientation"}},[e._v("#")]),e._v(" Mounting/Orientation")]),e._v(" "),n("p",[e._v("The recommended mounting orientation is with the connectors on the board pointing towards "),n("strong",[e._v("back of vehicle")]),e._v(".")]),e._v(" "),n("p",[e._v("The sensor can be mounted anywhere on the frame, but you will need to specify its position, relative to vehicle centre of gravity, during "),n("a",{attrs:{href:"#px4-configuration"}},[e._v("PX4 configuration")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"px4-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-setup"}},[e._v("#")]),e._v(" PX4 Setup")]),e._v(" "),n("h3",{attrs:{id:"enabling-uavcan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enabling-uavcan"}},[e._v("#")]),e._v(" Enabling UAVCAN")]),e._v(" "),n("p",[e._v("In order to use the ARK GPS board, connect it to the Pixhawk CAN bus and enable the UAVCAN driver by setting parameter "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),n("code",[e._v("2")]),e._v(" for dynamic node allocation (or "),n("code",[e._v("3")]),e._v(" if using "),n("RouterLink",{attrs:{to:"/en/uavcan/escs.html"}},[e._v("UAVCAN ESCs")]),e._v(").")],1),e._v(" "),n("p",[e._v("The steps are:")]),e._v(" "),n("ul",[n("li",[e._v("In "),n("em",[e._v("QGroundControl")]),e._v(" set the parameter "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),n("code",[e._v("2")]),e._v(" or "),n("code",[e._v("3")]),e._v(" and reboot (see "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("Finding/Updating Parameters")]),e._v(").")],1),e._v(" "),n("li",[e._v("Connect ARK GPS CAN to the Pixhawk CAN.")])]),e._v(" "),n("p",[e._v("Once enabled, the module will be detected on boot.\nGPS data should arrive at 10Hz.")]),e._v(" "),n("p",[e._v("General instructions for UAVCAN PX4 configuration can also be found in "),n("RouterLink",{attrs:{to:"/en/uavcan/#px4-configuration"}},[e._v("UAVCAN > PX4 Configuration")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"px4-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),n("p",[e._v("You need to set necessary "),n("RouterLink",{attrs:{to:"/en/uavcan/"}},[e._v("UAVCAN")]),e._v(" parameters and define offsets if the sensor is not centred within the vehicle.")],1),e._v(" "),n("ul",[n("li",[e._v("Enable "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_SUB_GPS"}},[e._v("UAVCAN_SUB_GPS")]),e._v(", "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(", and "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_SUB_BARO"}},[e._v("UAVCAN_SUB_BARO")]),e._v(".")],1),e._v(" "),n("li",[e._v("The parameters "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_POS_X"}},[e._v("EKF2_GPS_POS_X")]),e._v(", "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_POS_Y"}},[e._v("EKF2_GPS_POS_Y")]),e._v(" and "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_POS_Z"}},[e._v("EKF2_GPS_POS_Z")]),e._v(" can be set to account for the offset of the Ark GPS from the vehicles centre of gravity.")],1)]),e._v(" "),n("h2",{attrs:{id:"building-ark-gps-firmware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-ark-gps-firmware"}},[e._v("#")]),e._v(" Building Ark GPS Firmware")]),e._v(" "),n("p",[e._v("Ark GPS is sold with a recent firmware build.\nDevelopers who want to update to the very latest version can build and install it themselves using the normal PX4 toolchain and sources.")]),e._v(" "),n("p",[e._v("The steps are:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Install the "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("PX4 toolchain")]),e._v(".")],1)]),e._v(" "),n("li",[n("p",[e._v("Clone the PX4-Autopilot sources, including Ark GPS, using "),n("em",[e._v("git")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git clone https://github.com/PX4/PX4-Autopilot --recursive\ncd PX4-Autopilot\n")])])])]),e._v(" "),n("li",[n("p",[e._v("Build the Ark GPS firmware:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("make ark_can-gps_default\n")])])])]),e._v(" "),n("li",[n("p",[e._v("That will have created a binary in "),n("strong",[e._v("build/ark_can-gps_default")]),e._v(" named "),n("strong",[e._v("XX-X.X.XXXXXXXX.uavcan.bin")]),e._v(".\nPut this binary on the root directory of the flight controller’s SD card to flash the Ark GPS. Next time you power your flight controller with the SD card installed, Ark GPS will automatically be flashed and you should notice the binary is no longer in the root directory and there is now a file named "),n("strong",[e._v("80.bin")]),e._v(" in the "),n("em",[e._v("ufw")]),e._v(" directory of the SD card.")]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("The Ark GPS will not boot if there is no SD card in the flight controller when powered on.")])])])]),e._v(" "),n("h2",{attrs:{id:"updating-ark-gps-bootloader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#updating-ark-gps-bootloader"}},[e._v("#")]),e._v(" Updating Ark GPS Bootloader")]),e._v(" "),n("p",[e._v("The Ark GPS comes with the bootloader pre-installed. You can, however, rebuild and reflash it within the PX4-Autopilot environment.")]),e._v(" "),n("p",[e._v("The steps are:")]),e._v(" "),n("ol",[n("li",[e._v("Build the Ark GPS bootloader firmware:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("make ark_can-gps_canbootloader\n")])])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("This will setup your "),n("code",[e._v("launch.json")]),e._v(" file if you are in VS code. If using the Black Magic Probe and VS code, make sure to update "),n("code",[e._v("BMPGDBSerialPort")]),e._v(" within this file to the correct port that your debugger is connected to. On MacOS, the port name should look something like "),n("code",[e._v("cu.usbmodemE4CCA0E11")]),e._v(".")])])]),e._v(" "),n("li",[e._v("Connect to your Ark GPS to any Serial Wire Debugging (SWD) device that supports use of GNU Project Debugger (GDB), such as the Black Magic Probe and then connect power to your Ark GPS via one of the CAN ports.")]),e._v(" "),n("li",[e._v("Flash the Ark Flow with "),n("code",[e._v("ark_can-gps_canbootloader")]),e._v(".\nTo do so in VS code, you should see "),n("code",[e._v("CMake: [ark_can-gps_canbootloader]: Ready")]),e._v(" on the bottom bar of VS code, indicating what you are flashing.\nYou then flash the bootloader by selecting "),n("code",[e._v("Start Debugging")]),e._v(" in the Run and Debug window of VS code.")]),e._v(" "),n("li",[e._v("With the bootloader flashed, you are ready to build and flash the Ark GPS firmware "),n("code",[e._v("ark_can-gps_default")]),e._v(" as outlined above.")])]),e._v(" "),n("h2",{attrs:{id:"led-meanings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#led-meanings"}},[e._v("#")]),e._v(" LED Meanings")]),e._v(" "),n("p",[e._v("You will see green, blue and red LEDs on the ARK GPS when it is being flashed, and a blinking green LED if it is running properly.")]),e._v(" "),n("p",[e._v("If you see a red LED there is an error and you should check the following:")]),e._v(" "),n("ul",[n("li",[e._v("Make sure the flight controller has an SD card installed.")]),e._v(" "),n("li",[e._v("Make sure the Ark GPS has "),n("code",[e._v("ark_can-gps_canbootloader")]),e._v(" installed prior to flashing "),n("code",[e._v("ark_can-gps_default")]),e._v(".")]),e._v(" "),n("li",[e._v("Remove binaries from the root and ufw directories of the SD card and try to build and flash again.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);