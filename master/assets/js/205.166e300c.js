(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1425:function(e,t,o){e.exports=o.p+"assets/img/ark_rtk_gps.57b19613.jpg"},1426:function(e,t,o){e.exports=o.p+"assets/img/ark_rtk_gps_orientation.544e8424.png"},1427:function(e,t,o){e.exports=o.p+"assets/img/ark_rtk_gps_ucenter_connect.dcd887b4.png"},1428:function(e,t,o){e.exports=o.p+"assets/img/ark_rtk_gps_ublox_version.2cbf9d8e.png"},1429:function(e,t,o){e.exports=o.p+"assets/img/ark_rtk_gps_ublox_f9p_firmware_update.05d5b4e4.png"},2153:function(e,t,o){"use strict";o.r(t);var n=o(19),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"ark-rtk-gps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ark-rtk-gps"}},[e._v("#")]),e._v(" ARK RTK GPS")]),e._v(" "),n("p",[e._v("ARK RTK GPS is an open source "),n("RouterLink",{attrs:{to:"/en/uavcan/"}},[e._v("UAVCAN")]),e._v(" "),n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html"}},[e._v("RTK GPS")]),e._v(", "),n("a",{attrs:{href:"https://www.u-blox.com/en/product/zed-f9p-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("u-blox F9P"),n("OutboundLink")],1),e._v(", magnetometer, barometer, IMU, buzzer, and safety switch module.")],1),e._v(" "),n("p",[n("img",{attrs:{src:o(1425),alt:"ARK RTK GPS"}})]),e._v(" "),n("h2",{attrs:{id:"where-to-buy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),n("p",[e._v("Order this module from:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://arkelectron.com/product/ark-rtk-gps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARK Electronics"),n("OutboundLink")],1),e._v(" (US)")])]),e._v(" "),n("h2",{attrs:{id:"specifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[e._v("#")]),e._v(" Specifications")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/ARK-Electronics/ARK_RTK_GPS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Source Schematic and BOM"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Runs "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/ark/can-rtk-gps",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Open Source Firmware"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Supports "),n("RouterLink",{attrs:{to:"/en/uavcan/"}},[e._v("UAVCAN")]),e._v(" "),n("RouterLink",{attrs:{to:"/en/uavcan/node_firmware.html"}},[e._v("Firmware Updating")])],1),e._v(" "),n("li",[e._v("Dynamic "),n("RouterLink",{attrs:{to:"/en/uavcan/"}},[e._v("UAVCAN")]),e._v(" node enumeration")],1),e._v(" "),n("li",[e._v("Sensors\n"),n("ul",[n("li",[e._v("Ublox F9P GPS\n"),n("ul",[n("li",[e._v("Multi-band GNSS receiver delivers centimeter level accuracy in seconds")]),e._v(" "),n("li",[e._v("Concurrent reception of GPS, GLONASS, Galileo and BeiDou")]),e._v(" "),n("li",[e._v("Multi-band RTK with fast convergence times and reliable performance")]),e._v(" "),n("li",[e._v("High update rate for highly dynamic applications")]),e._v(" "),n("li",[e._v("Centimeter accuracy in a small and energy efficient module")])])]),e._v(" "),n("li",[e._v("Bosch BMM150 Magnetometer")]),e._v(" "),n("li",[e._v("Bosch BMP388 Barometer")]),e._v(" "),n("li",[e._v("Invensense ICM-42688-P 6-Axis IMU")])])]),e._v(" "),n("li",[e._v("STM32F412CEU6 MCU")]),e._v(" "),n("li",[e._v("Safety Button")]),e._v(" "),n("li",[e._v("Buzzer")]),e._v(" "),n("li",[e._v("Two Pixhawk Standard CAN Connectors\n"),n("ul",[n("li",[e._v("4 Pin JST GH")])])]),e._v(" "),n("li",[e._v("F9P “UART 2” Connector\n"),n("ul",[n("li",[e._v("3 Pin JST GH")]),e._v(" "),n("li",[e._v("TX, RX, GND")])])]),e._v(" "),n("li",[e._v("Pixhawk Standard Debug Connector\n"),n("ul",[n("li",[e._v("6 Pin JST SH")])])]),e._v(" "),n("li",[e._v("LED Indicators\n"),n("ul",[n("li",[e._v("Safety LED")]),e._v(" "),n("li",[e._v("GPS Fix")]),e._v(" "),n("li",[e._v("RTK Status")]),e._v(" "),n("li",[e._v("RGB system status")])])]),e._v(" "),n("li",[e._v("USA Built")]),e._v(" "),n("li",[e._v("Power Requirements\n"),n("ul",[n("li",[e._v("5V")]),e._v(" "),n("li",[e._v("170mA Average")]),e._v(" "),n("li",[e._v("180mA Max")])])])]),e._v(" "),n("h3",{attrs:{id:"wiring-connecting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wiring-connecting"}},[e._v("#")]),e._v(" Wiring/Connecting")]),e._v(" "),n("p",[e._v("The ARK RTK GPS is connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable.\nMultiple sensors can be connected by plugging additional sensors into the ARK RTK GPS's second CAN connector.")]),e._v(" "),n("p",[e._v("General instructions for UAVCAN wiring can also be found in "),n("RouterLink",{attrs:{to:"/en/uavcan/#wiring"}},[e._v("UAVCAN > Wiring")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"mounting-orientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mounting-orientation"}},[e._v("#")]),e._v(" Mounting/Orientation")]),e._v(" "),n("p",[e._v("The ARK RTK GPS must be mounted with the connectors on the board pointing towards the "),n("strong",[e._v("back of vehicle")]),e._v(", as shown in the following picture.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1426),alt:"ARK RTK GPS Orientation"}})]),e._v(" "),n("p",[e._v("The sensor can be mounted anywhere on the frame, but you will need to specify its position, relative to vehicle centre of gravity, during "),n("a",{attrs:{href:"#px4-configuration"}},[e._v("PX4 configuration")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"px4-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-setup"}},[e._v("#")]),e._v(" PX4 Setup")]),e._v(" "),n("h3",{attrs:{id:"enabling-uavcan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enabling-uavcan"}},[e._v("#")]),e._v(" Enabling UAVCAN")]),e._v(" "),n("p",[e._v("In order to use the ARK RTK GPS, connect it to the Pixhawk CAN bus and enable the UAVCAN driver by setting parameter "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),n("code",[e._v("2")]),e._v(" for dynamic node allocation (or "),n("code",[e._v("3")]),e._v(" if using "),n("RouterLink",{attrs:{to:"/en/uavcan/escs.html"}},[e._v("UAVCAN ESCs")]),e._v(").")],1),e._v(" "),n("p",[e._v("The steps are:")]),e._v(" "),n("ul",[n("li",[e._v("In "),n("em",[e._v("QGroundControl")]),e._v(" set the parameter "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),n("code",[e._v("2")]),e._v(" or "),n("code",[e._v("3")]),e._v(" and reboot (see "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("Finding/Updating Parameters")]),e._v(").")],1),e._v(" "),n("li",[e._v("Connect ARK RTK GPS CAN to the Pixhawk CAN.")])]),e._v(" "),n("p",[e._v("Once enabled, the module will be detected on boot. GPS data should arrive at 10Hz.")]),e._v(" "),n("p",[e._v("General instructions for UAVCAN PX4 configuration can also be found in "),n("RouterLink",{attrs:{to:"/en/uavcan/#px4-configuration"}},[e._v("UAVCAN > PX4 Configuration")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"px4-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),n("p",[e._v("You need to set necessary "),n("RouterLink",{attrs:{to:"/en/uavcan/"}},[e._v("UAVCAN")]),e._v(" parameters and define offsets if the sensor is not centred within the vehicle.")],1),e._v(" "),n("ul",[n("li",[e._v("Enable GPS yaw fusion by setting bit 7 of "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[e._v("EKF2_AID_MASK")]),e._v(" to true.")],1),e._v(" "),n("li",[e._v("Enable "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_SUB_GPS"}},[e._v("UAVCAN_SUB_GPS")]),e._v(", "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(", and "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_SUB_BARO"}},[e._v("UAVCAN_SUB_BARO")]),e._v(".")],1),e._v(" "),n("li",[e._v("Set "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CANNODE_TERM"}},[e._v("CANNODE_TERM")]),e._v(" to "),n("code",[e._v("1")]),e._v(" if this is that last node on the CAN bus.")],1),e._v(" "),n("li",[e._v("The parameters "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_POS_X"}},[e._v("EKF2_GPS_POS_X")]),e._v(", "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_POS_Y"}},[e._v("EKF2_GPS_POS_Y")]),e._v(" and "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_POS_Z"}},[e._v("EKF2_GPS_POS_Z")]),e._v(" can be set to account for the offset of the ARK RTK GPS from the vehicles centre of gravity.")],1)]),e._v(" "),n("h3",{attrs:{id:"setting-up-moving-baseline-gps-heading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-moving-baseline-gps-heading"}},[e._v("#")]),e._v(" Setting Up Moving Baseline & GPS Heading")]),e._v(" "),n("p",[e._v("The simplest way to set up moving baseline and GPS heading with two ARK RTK GPS modules is via CAN, though it can be done via UART to reduce traffic on the CAN bus if desired.")]),e._v(" "),n("p",[e._v("Setup via CAN:")]),e._v(" "),n("ul",[n("li",[e._v("Ensure the ARK RTK GPS modules are connected to the Pixhawk via CAN (one can connect to another's secondary CAN port).")]),e._v(" "),n("li",[e._v("Choose one ARK RTK GPS to be the "),n("em",[e._v("Rover")]),e._v(" and one to be the "),n("em",[e._v("Moving Base")]),e._v(".")]),e._v(" "),n("li",[e._v("Reopen QGroundControl, go to parameters, and select "),n("code",[e._v("Standard")]),e._v(" to hide that dropdown and select "),n("code",[e._v("Component ##")]),e._v(" to view each of your ARK RTK GPS's CAN node parameters"),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[n("code",[e._v("Component ##")]),e._v(" won't be visible unless the ARK RTK GPS is connected to the Pixhawk prior to opening QGroundControl.")])])]),e._v(" "),n("li",[e._v("On the "),n("em",[e._v("Rover")]),e._v(", set the following:\n"),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),n("code",[e._v("3")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" to "),n("code",[e._v("0")]),e._v(" if your "),n("em",[e._v("Rover")]),e._v(" is in front of your "),n("em",[e._v("Moving Base")]),e._v(", "),n("code",[e._v("90")]),e._v(" if "),n("em",[e._v("Rover")]),e._v(" is right of "),n("em",[e._v("Moving Base")]),e._v(", "),n("code",[e._v("180")]),e._v(" if "),n("em",[e._v("Rover")]),e._v(" is behind "),n("em",[e._v("Moving Base")]),e._v(", or "),n("code",[e._v("270")]),e._v(" if "),n("em",[e._v("Rover")]),e._v(" is left of "),n("em",[e._v("Moving Base")]),e._v(".")],1)])]),e._v(" "),n("li",[e._v("On the "),n("em",[e._v("Moving Base")]),e._v(", set the following:\n"),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),n("code",[e._v("4")]),e._v(".")],1)])])]),e._v(" "),n("p",[e._v("Setup via UART:")]),e._v(" "),n("ul",[n("li",[e._v("Ensure the ARK RTK GPS modules are connected to the Pixhawk via CAN.")]),e._v(" "),n("li",[e._v("Ensure the ARK RTK GPS modules are connected to each other via their UART2 port (UART2 pinout shown below).\nNote that TX of one module needs to connect with RX of the other.")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Pin")]),e._v(" "),n("th",[e._v("Name")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("1")]),e._v(" "),n("td",[e._v("TX")])]),e._v(" "),n("tr",[n("td",[e._v("2")]),e._v(" "),n("td",[e._v("RX")])]),e._v(" "),n("tr",[n("td",[e._v("3")]),e._v(" "),n("td",[e._v("GND")])])])]),e._v(" "),n("ul",[n("li",[e._v("Setup at this point is the same as via CAN, detailed above, except that "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" is set to "),n("code",[e._v("1")]),e._v(" on the "),n("em",[e._v("Rover")]),e._v(" and "),n("code",[e._v("2")]),e._v(" on the "),n("em",[e._v("Moving Base")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"building-ark-rtk-gps-firmware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-ark-rtk-gps-firmware"}},[e._v("#")]),e._v(" Building ARK RTK GPS Firmware")]),e._v(" "),n("p",[e._v("ARK RTK GPS is sold with a recent firmware build.\nDevelopers who want to update to the very latest version can build and install it themselves using the normal PX4 toolchain and sources.")]),e._v(" "),n("p",[e._v("The steps are:")]),e._v(" "),n("ol",[n("li",[e._v("Install the "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("PX4 toolchain")]),e._v(".")],1),e._v(" "),n("li",[e._v("Clone the PX4-Autopilot sources, including ARK RTK GPS, using "),n("em",[e._v("git")]),e._v(":"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git clone https://github.com/PX4/PX4-Autopilot --recursive\ncd PX4-Autopilot\n")])])])]),e._v(" "),n("li",[e._v("Build the ARK RTK GPS firmware:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("make ark_can-rtk-gps_default\n")])])])]),e._v(" "),n("li",[e._v("That will have created a binary in "),n("strong",[e._v("build/ark_can-rtk-gps_default")]),e._v(" named "),n("strong",[e._v("XX-X.X.XXXXXXXX.uavcan.bin")]),e._v(".\nPut this binary on the root directory of the flight controller’s SD card to flash the ARK RTK GPS.\nNext time you power your flight controller with the SD card installed, ARK RTK GPS will automatically be flashed and you should notice the binary is no longer in the root directory and there is now a file named "),n("strong",[e._v("80.bin")]),e._v(" in the "),n("em",[e._v("ufw")]),e._v(" directory of the SD card.")])]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("ARK RTK GPS will not boot if there is no SD card in the flight controller when powered on.")])]),e._v(" "),n("h2",{attrs:{id:"updating-ark-rtk-gps-bootloader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#updating-ark-rtk-gps-bootloader"}},[e._v("#")]),e._v(" Updating ARK RTK GPS Bootloader")]),e._v(" "),n("p",[e._v("ARK RTK GPS comes with the bootloader pre-installed.\nYou can rebuild and reflash it within the PX4-Autopilot environment if desired.")]),e._v(" "),n("p",[e._v("The steps are:")]),e._v(" "),n("ol",[n("li",[e._v("Build the ARK RTK GPS bootloader firmware:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("make ark_can-rtk-gps_canbootloader\n")])])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("This will setup your "),n("code",[e._v("launch.json")]),e._v(" file if you are in VS code.\nIf using the Black Magic Probe and VS code, make sure to update "),n("code",[e._v("BMPGDBSerialPort")]),e._v(" within this file to the correct port that your debugger is connected to.\nOn MacOS, the port name should look something like "),n("code",[e._v("cu.usbmodemE4CCA0E11")]),e._v(".")])])]),e._v(" "),n("li",[e._v("Connect your ARK RTK GPS to any Serial Wire Debugging (SWD) device that supports use of GNU Project Debugger (GDB), such as the Black Magic Probe, and then connect power to your ARK RTK GPS via one of the CAN ports.")]),e._v(" "),n("li",[e._v("Flash the ARK RTK GPS with "),n("code",[e._v("ark_can-rtk-gps_canbootloader")]),e._v(".\nTo do so in VS code, you should see "),n("code",[e._v("CMake: [ark_can-rtk-gps_canbootloader]: Ready")]),e._v(" on the bottom bar of VS code, indicating what you are flashing.\nYou then flash the bootloader by selecting "),n("code",[e._v("Start Debugging")]),e._v(" in the Run and Debug window of VS code.")]),e._v(" "),n("li",[e._v("With the bootloader flashed, you are ready to build and flash the ARK RTK GPS firmware "),n("code",[e._v("ark_can-rtk-gps_default")]),e._v(" as outlined above.")])]),e._v(" "),n("h2",{attrs:{id:"updating-ublox-f9p-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#updating-ublox-f9p-module"}},[e._v("#")]),e._v(" Updating Ublox F9P Module")]),e._v(" "),n("p",[e._v("ARK RTK GPS comes with the Ublox F9P module up to date with version 1.13 or newer. However, you can check the version and update the firmware if desired.")]),e._v(" "),n("p",[e._v("The steps are:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.u-blox.com/en/product/u-center",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download u-center from u-blox.com"),n("OutboundLink")],1),e._v(" and install on your PC (Windows only)")]),e._v(" "),n("li",[e._v("Open the "),n("a",{attrs:{href:"https://www.u-blox.com/en/product/zed-f9p-module#tab-documentation-resources",target:"_blank",rel:"noopener noreferrer"}},[e._v("u-blox ZED-F9P website"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v('Scroll down and click on the "Show Legacy Documents" box')]),e._v(" "),n("li",[e._v("Scroll down again to Firmware Update and download your desired firmware (at least version 1.13 is needed)")]),e._v(" "),n("li",[e._v("While holding down the safety switch on the ARK RTK GPS, connect it to power via one of its CAN ports and hold until all 3 LEDs blink rapidly")]),e._v(" "),n("li",[e._v("Connect the ARK RTK GPS to your PC via its debug port with a cable such as the Black Magic Probe or an FTDI")]),e._v(" "),n("li",[e._v("Open u-center, select the COM port for the ARK RTK GPS and connect\n"),n("img",{attrs:{src:o(1427),alt:"U-Center Connect"}})]),e._v(" "),n("li",[e._v("Check the current firmware version by selecting View, Messages View, UBX, MON, VER\n"),n("img",{attrs:{src:o(1428),alt:"Check Version"}})]),e._v(" "),n("li",[e._v("To update the firmware:\n"),n("ul",[n("li",[e._v("Select Tools, Firmware Update")]),e._v(" "),n("li",[e._v("The Firmware image field should be the .bin file downloaded from the u-blox ZED-F9P website")]),e._v(" "),n("li",[e._v('Check the "Use this baudrate for update" checkbox and select 115200 from the drop-down')]),e._v(" "),n("li",[e._v("Ensure the other checkboxes are as shown below")]),e._v(" "),n("li",[e._v("Push the green GO button on the bottom left")]),e._v(" "),n("li",[e._v('"Firmware Update SUCCESS" should be displayed if it updated successfully\n'),n("img",{attrs:{src:o(1429),alt:"Firmware Update"}})])])])]),e._v(" "),n("h2",{attrs:{id:"led-meanings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#led-meanings"}},[e._v("#")]),e._v(" LED Meanings")]),e._v(" "),n("p",[e._v("You will see green, blue and red LEDs on the ARK RTK GPS when it is being flashed, a blinking green LED if it is running properly, and a blinking or solid blue LED on the "),n("em",[e._v("Rover")]),e._v(" ARK RTK GPS when it is receiving RTCM corrections.")]),e._v(" "),n("p",[e._v("If you see a red LED there is an error and you should check the following:")]),e._v(" "),n("ul",[n("li",[e._v("Make sure the flight controller has an SD card installed.")]),e._v(" "),n("li",[e._v("Make sure the ARK RTK GPS has "),n("code",[e._v("ark_can-rtk-gps_canbootloader")]),e._v(" installed prior to flashing "),n("code",[e._v("ark_can-rtk-gps_default")]),e._v(".")]),e._v(" "),n("li",[e._v("Remove binaries from the root and ufw directories of the SD card and try to build and flash again.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);