(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{2600:function(e,t,r){"use strict";r.r(t);var o=r(19),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ark-rtk-gps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ark-rtk-gps"}},[e._v("#")]),e._v(" ARK RTK GPS")]),e._v(" "),o("p",[e._v("ARK RTK GPS is an open source "),o("RouterLink",{attrs:{to:"/ko/dronecan/"}},[e._v("DroneCAN")]),e._v(" "),o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[e._v("RTK GPS")]),e._v(", "),o("a",{attrs:{href:"https://www.u-blox.com/en/product/zed-f9p-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("u-blox F9P"),o("OutboundLink")],1),e._v(", magnetometer, barometer, IMU, buzzer, and safety switch module.")],1),e._v(" "),o("p",[o("img",{attrs:{src:r(739),alt:"ARK RTK GPS"}})]),e._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),o("p",[e._v("Order this module from:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/ark-rtk-gps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARK Electronics"),o("OutboundLink")],1),e._v(" (US)")])]),e._v(" "),o("h2",{attrs:{id:"hardware-specifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-specifications"}},[e._v("#")]),e._v(" Hardware Specifications")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/ARK-Electronics/ARK_RTK_GPS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Source Schematic and BOM"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Sensors\n"),o("ul",[o("li",[e._v("Ublox F9P GPS\n"),o("ul",[o("li",[e._v("Multi-band GNSS receiver delivers centimeter level accuracy in seconds")]),e._v(" "),o("li",[e._v("Concurrent reception of GPS, GLONASS, Galileo and BeiDou")]),e._v(" "),o("li",[e._v("Multi-band RTK with fast convergence times and reliable performance")]),e._v(" "),o("li",[e._v("High update rate for highly dynamic applications")]),e._v(" "),o("li",[e._v("Centimeter accuracy in a small and energy efficient module")])])]),e._v(" "),o("li",[e._v("Bosch BMM150 Magnetometer")]),e._v(" "),o("li",[e._v("Bosch BMP388 Barometer")]),e._v(" "),o("li",[e._v("Invensense ICM-42688-P 6-Axis IMU")])])]),e._v(" "),o("li",[e._v("STM32F412CEU6 MCU")]),e._v(" "),o("li",[e._v("Safety Button")]),e._v(" "),o("li",[e._v("Buzzer")]),e._v(" "),o("li",[e._v("Two Pixhawk Standard CAN Connectors (4 Pin JST GH)")]),e._v(" "),o("li",[e._v("F9P “UART 2” Connector\n"),o("ul",[o("li",[e._v("3 Pin JST GH")]),e._v(" "),o("li",[e._v("TX, RX, GND")])])]),e._v(" "),o("li",[e._v("Pixhawk Standard Debug Connector (6 Pin JST SH)")]),e._v(" "),o("li",[e._v("LED Indicators\n"),o("ul",[o("li",[e._v("Safety LED")]),e._v(" "),o("li",[e._v("GPS Fix")]),e._v(" "),o("li",[e._v("RTK Status")]),e._v(" "),o("li",[e._v("RGB system status")])])]),e._v(" "),o("li",[e._v("USA Built")]),e._v(" "),o("li",[e._v("Power Requirements\n"),o("ul",[o("li",[e._v("5V")]),e._v(" "),o("li",[e._v("170mA Average")]),e._v(" "),o("li",[e._v("180mA Max")])])])]),e._v(" "),o("h2",{attrs:{id:"hardware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),o("h3",{attrs:{id:"wiring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),o("p",[e._v("The ARK RTK GPS is connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable. For more information, refer to the "),o("RouterLink",{attrs:{to:"/ko/can/#wiring"}},[e._v("CAN Wiring")]),e._v(" instructions.")],1),e._v(" "),o("h3",{attrs:{id:"mounting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mounting"}},[e._v("#")]),e._v(" Mounting")]),e._v(" "),o("p",[e._v("The recommended mounting orientation is with the connectors on the board pointing towards the "),o("strong",[e._v("back of vehicle")]),e._v(".")]),e._v(" "),o("p",[e._v("The sensor can be mounted anywhere on the frame, but you will need to specify its position, relative to vehicle centre of gravity, during "),o("a",{attrs:{href:"#px4-configuration"}},[e._v("PX4 configuration")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"firmware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[e._v("#")]),e._v(" Firmware Setup")]),e._v(" "),o("p",[e._v("ARK RTK GPS runs the "),o("RouterLink",{attrs:{to:"/ko/dronecan/px4_cannode_fw.html"}},[e._v("PX4 cannode firmware")]),e._v(". As such, it supports firmware update over the CAN bus and "),o("RouterLink",{attrs:{to:"/ko/dronecan/#node-id"}},[e._v("dynamic node allocation")]),e._v(".")],1),e._v(" "),o("p",[e._v("ARK RTK GPS boards ship with recent firmware pre-installed, but if you want to build and flash the latest firmware yourself, refer to the "),o("RouterLink",{attrs:{to:"/ko/dronecan/px4_cannode_fw.html#building-the-firmware"}},[e._v("cannode firmware build instructions")]),e._v(".")],1),e._v(" "),o("p",[e._v("Firmware target: "),o("code",[e._v("ark_can-rtk-gps_default")]),e._v(" Bootloader target: "),o("code",[e._v("ark_can-rtk-gps_canbootloader")])]),e._v(" "),o("h2",{attrs:{id:"flight-controller-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-setup"}},[e._v("#")]),e._v(" Flight Controller Setup")]),e._v(" "),o("h3",{attrs:{id:"enabling-dronecan"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabling-dronecan"}},[e._v("#")]),e._v(" Enabling DroneCAN")]),e._v(" "),o("p",[e._v("In order to use the ARK RTK GPS, connect it to the Pixhawk CAN bus and enable the DroneCAN driver by setting parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),o("code",[e._v("2")]),e._v(" for dynamic node allocation (or "),o("code",[e._v("3")]),e._v(" if using "),o("RouterLink",{attrs:{to:"/ko/dronecan/escs.html"}},[e._v("DroneCAN ESCs")]),e._v(").")],1),e._v(" "),o("p",[e._v("The steps are:")]),e._v(" "),o("ul",[o("li",[e._v("In "),o("em",[e._v("QGroundControl")]),e._v(" set the parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),o("code",[e._v("2")]),e._v(" or "),o("code",[e._v("3")]),e._v(" and reboot (see "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("Finding/Updating Parameters")]),e._v(").")],1),e._v(" "),o("li",[e._v("Connect ARK RTK GPS CAN to the Pixhawk CAN.")])]),e._v(" "),o("p",[e._v("Once enabled, the module will be detected on boot. GPS data should arrive at 10Hz.")]),e._v(" "),o("h3",{attrs:{id:"px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),o("p",[e._v("You need to set necessary "),o("RouterLink",{attrs:{to:"/ko/dronecan/"}},[e._v("DroneCAN")]),e._v(" parameters and define offsets if the sensor is not centred within the vehicle:")],1),e._v(" "),o("ul",[o("li",[e._v("Enable GPS yaw fusion by setting bit 3 of "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(" to true.")],1),e._v(" "),o("li",[e._v("Enable GPS blending to ensure the heading is always published by setting "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_GPS_MASK"}},[e._v("SENS_GPS_MASK")]),e._v(" to 7 (all three bits checked).")],1),e._v(" "),o("li",[e._v("Enable "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_GPS"}},[e._v("UAVCAN_SUB_GPS")]),e._v(", "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(", and "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_BARO"}},[e._v("UAVCAN_SUB_BARO")]),e._v(".")],1),e._v(" "),o("li",[e._v("The parameters "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_POS_X"}},[e._v("EKF2_GPS_POS_X")]),e._v(", "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_POS_Y"}},[e._v("EKF2_GPS_POS_Y")]),e._v(" and "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_POS_Z"}},[e._v("EKF2_GPS_POS_Z")]),e._v(" can be set to account for the offset of the ARK RTK GPS from the vehicles centre of gravity.")],1),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CANNODE_TERM"}},[e._v("CANNODE_TERM")]),e._v(" to "),o("code",[e._v("1")]),e._v(" on the GPS if this it that last node on the CAN bus.")],1)]),e._v(" "),o("h3",{attrs:{id:"setting-up-moving-baseline-gps-heading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-moving-baseline-gps-heading"}},[e._v("#")]),e._v(" Setting Up Moving Baseline & GPS Heading")]),e._v(" "),o("p",[e._v("The simplest way to set up moving baseline and GPS heading with two ARK RTK GPS modules is via CAN, though it can be done via UART to reduce traffic on the CAN bus if desired.")]),e._v(" "),o("p",[e._v("Note that a heading is only output if the Rover is in RTX Fixed mode. It will not output a heading in RTK Float.")]),e._v(" "),o("p",[e._v("Setup via CAN:")]),e._v(" "),o("ul",[o("li",[e._v("Ensure the ARK RTK GPS modules are connected to the Pixhawk via CAN (one can connect to another's secondary CAN port). The two ARK RTK GPS must be connected to the same CAN bus for corrections to be sent.")]),e._v(" "),o("li",[e._v("Choose one ARK RTK GPS to be the "),o("em",[e._v("Rover")]),e._v(" and one to be the "),o("em",[e._v("Moving Base")]),e._v(".")]),e._v(" "),o("li",[e._v("Reopen QGroundControl, go to parameters, and select "),o("code",[e._v("Standard")]),e._v(" to hide that dropdown and select "),o("code",[e._v("Component ##")]),e._v(" to view each of your ARK RTK GPS's CAN node parameters :::note "),o("code",[e._v("Component ##")]),e._v(" won't be visible unless the ARK RTK GPS is connected to the Pixhawk prior to opening QGroundControl.\n:::")]),e._v(" "),o("li",[e._v("On the "),o("em",[e._v("Rover")]),e._v(", set the following:\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),o("code",[e._v("3")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" to "),o("code",[e._v("0")]),e._v(" if your "),o("em",[e._v("Rover")]),e._v(" is in front of your "),o("em",[e._v("Moving Base")]),e._v(", "),o("code",[e._v("90")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is right of "),o("em",[e._v("Moving Base")]),e._v(", "),o("code",[e._v("180")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is behind "),o("em",[e._v("Moving Base")]),e._v(", or "),o("code",[e._v("270")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is left of "),o("em",[e._v("Moving Base")]),e._v(".")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CANNODE_SUB_MBD"}},[e._v("CANNODE_SUB_MBD")]),e._v(" to "),o("code",[e._v("1")]),e._v(".")],1)])]),e._v(" "),o("li",[e._v("On the "),o("em",[e._v("Moving Base")]),e._v(", set the following:\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),o("code",[e._v("4")]),e._v(".")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CANNODE_PUB_MBD"}},[e._v("CANNODE_PUB_MBD")]),e._v(" to "),o("code",[e._v("1")]),e._v(".")],1)])])]),e._v(" "),o("p",[e._v("Setup via UART:")]),e._v(" "),o("ul",[o("li",[e._v("Ensure the ARK RTK GPS modules are connected to the Pixhawk via CAN.")]),e._v(" "),o("li",[e._v("Ensure the ARK RTK GPS modules are connected to each other via their UART2 port (UART2 pinout shown below). Note that TX of one module needs to connect with RX of the other.")])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Pin")]),e._v(" "),o("th",[e._v("Name")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("1")]),e._v(" "),o("td",[e._v("TX")])]),e._v(" "),o("tr",[o("td",[e._v("2")]),e._v(" "),o("td",[e._v("RX")])]),e._v(" "),o("tr",[o("td",[e._v("3")]),e._v(" "),o("td",[e._v("GND")])])])]),e._v(" "),o("ul",[o("li",[e._v("On the "),o("em",[e._v("Rover")]),e._v(", set the following:\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),o("code",[e._v("1")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" to "),o("code",[e._v("0")]),e._v(" if your "),o("em",[e._v("Rover")]),e._v(" is in front of your "),o("em",[e._v("Moving Base")]),e._v(", "),o("code",[e._v("90")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is right of "),o("em",[e._v("Moving Base")]),e._v(", "),o("code",[e._v("180")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is behind "),o("em",[e._v("Moving Base")]),e._v(", or "),o("code",[e._v("270")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is left of "),o("em",[e._v("Moving Base")]),e._v(".")],1)])]),e._v(" "),o("li",[e._v("On the "),o("em",[e._v("Moving Base")]),e._v(", set the following:\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),o("code",[e._v("2")]),e._v(".")],1)])])]),e._v(" "),o("h2",{attrs:{id:"led-meanings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#led-meanings"}},[e._v("#")]),e._v(" LED Meanings")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The GPS status lights are located to the right of the connectors")]),e._v(" "),o("ul",[o("li",[e._v("Blinking green is GPS fix")]),e._v(" "),o("li",[e._v("Blinking blue is received corrections and RTK Float")]),e._v(" "),o("li",[e._v("Solid blue is RTK Fixed")])])]),e._v(" "),o("li",[o("p",[e._v("The CAN status lights are located top the left of the connectors")]),e._v(" "),o("ul",[o("li",[e._v("Slow blinking green is waiting for CAN connection")]),e._v(" "),o("li",[e._v("Fast blinking green is normal operation")]),e._v(" "),o("li",[e._v("Slow blinking green and blue is CAN enumeration")]),e._v(" "),o("li",[e._v("Slow blinking green, blue, and red is firmware update in progress")]),e._v(" "),o("li",[e._v("Blinking red is error\n"),o("ul",[o("li",[e._v("If you see a red LED there is an error and you should check the following\n"),o("ul",[o("li",[e._v("Make sure the flight controller has an SD card installed")]),e._v(" "),o("li",[e._v("Make sure the ARK RTK GPS has "),o("code",[e._v("ark_can-rtk-gps_canbootloader")]),e._v(" installed prior to flashing "),o("code",[e._v("ark_can-rtk-gps_default")])]),e._v(" "),o("li",[e._v("Remove binaries from the root and ufw directories of the SD card and try to build and flash again")])])])])])])])]),e._v(" "),o("h3",{attrs:{id:"updating-ublox-f9p-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-ublox-f9p-module"}},[e._v("#")]),e._v(" Updating Ublox F9P Module")]),e._v(" "),o("p",[e._v("ARK RTK GPS comes with the Ublox F9P module up to date with version 1.13 or newer. However, you can check the version and update the firmware if desired.")]),e._v(" "),o("p",[e._v("The steps are:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.u-blox.com/en/product/u-center",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download u-center from u-blox.com"),o("OutboundLink")],1),e._v(" and install on your PC (Windows only)")]),e._v(" "),o("li",[e._v("Open the "),o("a",{attrs:{href:"https://www.u-blox.com/en/product/zed-f9p-module#tab-documentation-resources",target:"_blank",rel:"noopener noreferrer"}},[e._v("u-blox ZED-F9P website"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v('Scroll down and click on the "Show Legacy Documents" box')]),e._v(" "),o("li",[e._v("Scroll down again to Firmware Update and download your desired firmware (at least version 1.13 is needed)")]),e._v(" "),o("li",[e._v("While holding down the safety switch on the ARK RTK GPS, connect it to power via one of its CAN ports and hold until all 3 LEDs blink rapidly")]),e._v(" "),o("li",[e._v("Connect the ARK RTK GPS to your PC via its debug port with a cable such as the Black Magic Probe or an FTDI")]),e._v(" "),o("li",[e._v("Open u-center, select the COM port for the ARK RTK GPS and connect "),o("img",{attrs:{src:r(740),alt:"U-Center Connect"}})]),e._v(" "),o("li",[e._v("Check the current firmware version by selecting View, Messages View, UBX, MON, VER "),o("img",{attrs:{src:r(741),alt:"Check Version"}})]),e._v(" "),o("li",[e._v("To update the firmware:\n"),o("ul",[o("li",[e._v("Select Tools, Firmware Update")]),e._v(" "),o("li",[e._v("The Firmware image field should be the .bin file downloaded from the u-blox ZED-F9P website")]),e._v(" "),o("li",[e._v('Check the "Use this baudrate for update" checkbox and select 115200 from the drop-down')]),e._v(" "),o("li",[e._v("Ensure the other checkboxes are as shown below")]),e._v(" "),o("li",[e._v("Push the green GO button on the bottom left")]),e._v(" "),o("li",[e._v('"Firmware Update SUCCESS" should be displayed if it updated successfully '),o("img",{attrs:{src:r(742),alt:"Firmware Update"}})])])])])])}),[],!1,null,null,null);t.default=n.exports},739:function(e,t,r){e.exports=r.p+"assets/img/ark_rtk_gps.c3a9672b.jpg"},740:function(e,t){e.exports="data:image/png;base64,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"},741:function(e,t,r){e.exports=r.p+"assets/img/ark_rtk_gps_ublox_version.683fada4.png"},742:function(e,t,r){e.exports=r.p+"assets/img/ark_rtk_gps_ublox_f9p_firmware_update.3cd01a02.png"}}]);