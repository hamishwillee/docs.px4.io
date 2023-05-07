(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{3274:function(e,t,r){"use strict";r.r(t);var o=r(19),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ark-rtk-gps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ark-rtk-gps"}},[e._v("#")]),e._v(" ARK RTK GPS")]),e._v(" "),o("p",[e._v("ARK RTK GPS is an open source "),o("RouterLink",{attrs:{to:"/zh/dronecan/"}},[e._v("DroneCAN")]),e._v(" "),o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[e._v("RTK GPS")]),e._v(", "),o("a",{attrs:{href:"https://www.u-blox.com/en/product/zed-f9p-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("u-blox F9P"),o("OutboundLink")],1),e._v(", magnetometer, barometer, IMU, buzzer, and safety switch module.")],1),e._v(" "),o("p",[o("img",{attrs:{src:r(755),alt:"ARK RTK GPS"}})]),e._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),o("p",[e._v("Order this module from:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/ark-rtk-gps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARK Electronics"),o("OutboundLink")],1),e._v(" (US)")])]),e._v(" "),o("h2",{attrs:{id:"hardware-specifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-specifications"}},[e._v("#")]),e._v(" Hardware Specifications")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/ARK-Electronics/ARK_RTK_GPS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Source Schematic and BOM"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Sensors\n"),o("ul",[o("li",[e._v("Ublox F9P GPS\n"),o("ul",[o("li",[e._v("Multi-band GNSS receiver delivers centimeter level accuracy in seconds")]),e._v(" "),o("li",[e._v("Concurrent reception of GPS, GLONASS, Galileo and BeiDou")]),e._v(" "),o("li",[e._v("Multi-band RTK with fast convergence times and reliable performance")]),e._v(" "),o("li",[e._v("High update rate for highly dynamic applications")]),e._v(" "),o("li",[e._v("Centimeter accuracy in a small and energy efficient module")])])]),e._v(" "),o("li",[e._v("Bosch BMM150 Magnetometer")]),e._v(" "),o("li",[e._v("Bosch BMP388 Barometer")]),e._v(" "),o("li",[e._v("Invensense ICM-42688-P 6-Axis IMU")])])]),e._v(" "),o("li",[e._v("STM32F412CEU6 MCU")]),e._v(" "),o("li",[e._v("Safety Button")]),e._v(" "),o("li",[e._v("Buzzer")]),e._v(" "),o("li",[e._v("Two Pixhawk Standard CAN Connectors (4 Pin JST GH)")]),e._v(" "),o("li",[e._v("F9P “UART 2” Connector\n"),o("ul",[o("li",[e._v("3 Pin JST GH")]),e._v(" "),o("li",[e._v("TX, RX, GND")])])]),e._v(" "),o("li",[e._v("Pixhawk Standard Debug Connector (6 Pin JST SH)")]),e._v(" "),o("li",[e._v("LED Indicators\n"),o("ul",[o("li",[e._v("Safety LED")]),e._v(" "),o("li",[e._v("GPS Fix")]),e._v(" "),o("li",[e._v("RTK Status")]),e._v(" "),o("li",[e._v("RGB system status")])])]),e._v(" "),o("li",[e._v("USA Built")]),e._v(" "),o("li",[e._v("Power Requirements\n"),o("ul",[o("li",[e._v("5V")]),e._v(" "),o("li",[e._v("170mA Average")]),e._v(" "),o("li",[e._v("180mA Max")])])])]),e._v(" "),o("h2",{attrs:{id:"hardware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),o("h3",{attrs:{id:"wiring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),o("p",[e._v("The ARK RTK GPS is connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable. For more information, refer to the "),o("RouterLink",{attrs:{to:"/zh/can/#wiring"}},[e._v("CAN Wiring")]),e._v(" instructions.")],1),e._v(" "),o("h3",{attrs:{id:"mounting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mounting"}},[e._v("#")]),e._v(" Mounting")]),e._v(" "),o("p",[e._v("The recommended mounting orientation is with the connectors on the board pointing towards the "),o("strong",[e._v("back of vehicle")]),e._v(".")]),e._v(" "),o("p",[e._v("The sensor can be mounted anywhere on the frame, but you will need to specify its position, relative to vehicle centre of gravity, during "),o("a",{attrs:{href:"#px4-configuration"}},[e._v("PX4 configuration")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"firmware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[e._v("#")]),e._v(" Firmware Setup")]),e._v(" "),o("p",[e._v("ARK RTK GPS runs the "),o("RouterLink",{attrs:{to:"/zh/dronecan/px4_cannode_fw.html"}},[e._v("PX4 cannode firmware")]),e._v(". As such, it supports firmware update over the CAN bus and "),o("RouterLink",{attrs:{to:"/zh/dronecan/#node-id"}},[e._v("dynamic node allocation")]),e._v(".")],1),e._v(" "),o("p",[e._v("ARK RTK GPS boards ship with recent firmware pre-installed, but if you want to build and flash the latest firmware yourself, refer to the "),o("RouterLink",{attrs:{to:"/zh/dronecan/px4_cannode_fw.html#building-the-firmware"}},[e._v("cannode firmware build instructions")]),e._v(".")],1),e._v(" "),o("p",[e._v("Firmware target: "),o("code",[e._v("ark_can-rtk-gps_default")]),e._v(" Bootloader target: "),o("code",[e._v("ark_can-rtk-gps_canbootloader")])]),e._v(" "),o("h2",{attrs:{id:"flight-controller-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-setup"}},[e._v("#")]),e._v(" Flight Controller Setup")]),e._v(" "),o("h3",{attrs:{id:"enabling-dronecan"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabling-dronecan"}},[e._v("#")]),e._v(" Enabling DroneCAN")]),e._v(" "),o("p",[e._v("In order to use the ARK RTK GPS, connect it to the Pixhawk CAN bus and enable the DroneCAN driver by setting parameter "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),o("code",[e._v("2")]),e._v(" for dynamic node allocation (or "),o("code",[e._v("3")]),e._v(" if using "),o("RouterLink",{attrs:{to:"/zh/dronecan/escs.html"}},[e._v("DroneCAN ESCs")]),e._v(").")],1),e._v(" "),o("p",[e._v("The steps are:")]),e._v(" "),o("ul",[o("li",[e._v("In "),o("em",[e._v("QGroundControl")]),e._v(" set the parameter "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),o("code",[e._v("2")]),e._v(" or "),o("code",[e._v("3")]),e._v(" and reboot (see "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("Finding/Updating Parameters")]),e._v(").")],1),e._v(" "),o("li",[e._v("Connect ARK RTK GPS CAN to the Pixhawk CAN.")])]),e._v(" "),o("p",[e._v("Once enabled, the module will be detected on boot. GPS data should arrive at 10Hz.")]),e._v(" "),o("h3",{attrs:{id:"px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),o("p",[e._v("You need to set necessary "),o("RouterLink",{attrs:{to:"/zh/dronecan/"}},[e._v("DroneCAN")]),e._v(" parameters and define offsets if the sensor is not centred within the vehicle:")],1),e._v(" "),o("ul",[o("li",[e._v("Enable GPS yaw fusion by setting bit 3 of "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(" to true.")],1),e._v(" "),o("li",[e._v("Enable GPS blending to ensure the heading is always published by setting "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_GPS_MASK"}},[e._v("SENS_GPS_MASK")]),e._v(" to 7 (all three bits checked).")],1),e._v(" "),o("li",[e._v("Enable "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_GPS"}},[e._v("UAVCAN_SUB_GPS")]),e._v(", "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(", and "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_BARO"}},[e._v("UAVCAN_SUB_BARO")]),e._v(".")],1),e._v(" "),o("li",[e._v("The parameters "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_POS_X"}},[e._v("EKF2_GPS_POS_X")]),e._v(", "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_POS_Y"}},[e._v("EKF2_GPS_POS_Y")]),e._v(" and "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_POS_Z"}},[e._v("EKF2_GPS_POS_Z")]),e._v(" can be set to account for the offset of the ARK RTK GPS from the vehicles centre of gravity.")],1),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_TERM"}},[e._v("CANNODE_TERM")]),e._v(" to "),o("code",[e._v("1")]),e._v(" on the GPS if this it that last node on the CAN bus.")],1)]),e._v(" "),o("h3",{attrs:{id:"setting-up-moving-baseline-gps-heading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-moving-baseline-gps-heading"}},[e._v("#")]),e._v(" Setting Up Moving Baseline & GPS Heading")]),e._v(" "),o("p",[e._v("The simplest way to set up moving baseline and GPS heading with two ARK RTK GPS modules is via CAN, though it can be done via UART to reduce traffic on the CAN bus if desired.")]),e._v(" "),o("p",[e._v("Note that a heading is only output if the Rover is in RTX Fixed mode. It will not output a heading in RTK Float.")]),e._v(" "),o("p",[e._v("Setup via CAN:")]),e._v(" "),o("ul",[o("li",[e._v("Ensure the ARK RTK GPS modules are connected to the Pixhawk via CAN (one can connect to another's secondary CAN port). The two ARK RTK GPS must be connected to the same CAN bus for corrections to be sent.")]),e._v(" "),o("li",[e._v("Choose one ARK RTK GPS to be the "),o("em",[e._v("Rover")]),e._v(" and one to be the "),o("em",[e._v("Moving Base")]),e._v(".")]),e._v(" "),o("li",[e._v("Reopen QGroundControl, go to parameters, and select "),o("code",[e._v("Standard")]),e._v(" to hide that dropdown and select "),o("code",[e._v("Component ##")]),e._v(" to view each of your ARK RTK GPS's CAN node parameters :::note "),o("code",[e._v("Component ##")]),e._v(" won't be visible unless the ARK RTK GPS is connected to the Pixhawk prior to opening QGroundControl.\n:::")]),e._v(" "),o("li",[e._v("On the "),o("em",[e._v("Rover")]),e._v(", set the following:\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),o("code",[e._v("3")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" to "),o("code",[e._v("0")]),e._v(" if your "),o("em",[e._v("Rover")]),e._v(" is in front of your "),o("em",[e._v("Moving Base")]),e._v(", "),o("code",[e._v("90")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is right of "),o("em",[e._v("Moving Base")]),e._v(", "),o("code",[e._v("180")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is behind "),o("em",[e._v("Moving Base")]),e._v(", or "),o("code",[e._v("270")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is left of "),o("em",[e._v("Moving Base")]),e._v(".")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_SUB_MBD"}},[e._v("CANNODE_SUB_MBD")]),e._v(" to "),o("code",[e._v("1")]),e._v(".")],1)])]),e._v(" "),o("li",[e._v("On the "),o("em",[e._v("Moving Base")]),e._v(", set the following:\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),o("code",[e._v("4")]),e._v(".")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_PUB_MBD"}},[e._v("CANNODE_PUB_MBD")]),e._v(" to "),o("code",[e._v("1")]),e._v(".")],1)])])]),e._v(" "),o("p",[e._v("Setup via UART:")]),e._v(" "),o("ul",[o("li",[e._v("Ensure the ARK RTK GPS modules are connected to the Pixhawk via CAN.")]),e._v(" "),o("li",[e._v("Ensure the ARK RTK GPS modules are connected to each other via their UART2 port (UART2 pinout shown below). Note that TX of one module needs to connect with RX of the other.")])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Pin")]),e._v(" "),o("th",[e._v("Name")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("1")]),e._v(" "),o("td",[e._v("TX")])]),e._v(" "),o("tr",[o("td",[e._v("2")]),e._v(" "),o("td",[e._v("RX")])]),e._v(" "),o("tr",[o("td",[e._v("3")]),e._v(" "),o("td",[e._v("GND")])])])]),e._v(" "),o("ul",[o("li",[e._v("On the "),o("em",[e._v("Rover")]),e._v(", set the following:\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),o("code",[e._v("1")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" to "),o("code",[e._v("0")]),e._v(" if your "),o("em",[e._v("Rover")]),e._v(" is in front of your "),o("em",[e._v("Moving Base")]),e._v(", "),o("code",[e._v("90")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is right of "),o("em",[e._v("Moving Base")]),e._v(", "),o("code",[e._v("180")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is behind "),o("em",[e._v("Moving Base")]),e._v(", or "),o("code",[e._v("270")]),e._v(" if "),o("em",[e._v("Rover")]),e._v(" is left of "),o("em",[e._v("Moving Base")]),e._v(".")],1)])]),e._v(" "),o("li",[e._v("On the "),o("em",[e._v("Moving Base")]),e._v(", set the following:\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[e._v("GPS_UBX_MODE")]),e._v(" to "),o("code",[e._v("2")]),e._v(".")],1)])])]),e._v(" "),o("h2",{attrs:{id:"led-meanings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#led-meanings"}},[e._v("#")]),e._v(" LED Meanings")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The GPS status lights are located to the right of the connectors")]),e._v(" "),o("ul",[o("li",[e._v("Blinking green is GPS fix")]),e._v(" "),o("li",[e._v("Blinking blue is received corrections and RTK Float")]),e._v(" "),o("li",[e._v("Solid blue is RTK Fixed")])])]),e._v(" "),o("li",[o("p",[e._v("The CAN status lights are located top the left of the connectors")]),e._v(" "),o("ul",[o("li",[e._v("Slow blinking green is waiting for CAN connection")]),e._v(" "),o("li",[e._v("Fast blinking green is normal operation")]),e._v(" "),o("li",[e._v("Slow blinking green and blue is CAN enumeration")]),e._v(" "),o("li",[e._v("Slow blinking green, blue, and red is firmware update in progress")]),e._v(" "),o("li",[e._v("Blinking red is error\n"),o("ul",[o("li",[e._v("If you see a red LED there is an error and you should check the following\n"),o("ul",[o("li",[e._v("Make sure the flight controller has an SD card installed")]),e._v(" "),o("li",[e._v("Make sure the ARK RTK GPS has "),o("code",[e._v("ark_can-rtk-gps_canbootloader")]),e._v(" installed prior to flashing "),o("code",[e._v("ark_can-rtk-gps_default")])]),e._v(" "),o("li",[e._v("Remove binaries from the root and ufw directories of the SD card and try to build and flash again")])])])])])])])]),e._v(" "),o("h3",{attrs:{id:"updating-ublox-f9p-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-ublox-f9p-module"}},[e._v("#")]),e._v(" Updating Ublox F9P Module")]),e._v(" "),o("p",[e._v("ARK RTK GPS comes with the Ublox F9P module up to date with version 1.13 or newer. However, you can check the version and update the firmware if desired.")]),e._v(" "),o("p",[e._v("The steps are:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.u-blox.com/en/product/u-center",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download u-center from u-blox.com"),o("OutboundLink")],1),e._v(" and install on your PC (Windows only)")]),e._v(" "),o("li",[e._v("Open the "),o("a",{attrs:{href:"https://www.u-blox.com/en/product/zed-f9p-module#tab-documentation-resources",target:"_blank",rel:"noopener noreferrer"}},[e._v("u-blox ZED-F9P website"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v('Scroll down and click on the "Show Legacy Documents" box')]),e._v(" "),o("li",[e._v("Scroll down again to Firmware Update and download your desired firmware (at least version 1.13 is needed)")]),e._v(" "),o("li",[e._v("While holding down the safety switch on the ARK RTK GPS, connect it to power via one of its CAN ports and hold until all 3 LEDs blink rapidly")]),e._v(" "),o("li",[e._v("Connect the ARK RTK GPS to your PC via its debug port with a cable such as the Black Magic Probe or an FTDI")]),e._v(" "),o("li",[e._v("Open u-center, select the COM port for the ARK RTK GPS and connect "),o("img",{attrs:{src:r(756),alt:"U-Center Connect"}})]),e._v(" "),o("li",[e._v("Check the current firmware version by selecting View, Messages View, UBX, MON, VER "),o("img",{attrs:{src:r(757),alt:"Check Version"}})]),e._v(" "),o("li",[e._v("To update the firmware:\n"),o("ul",[o("li",[e._v("Select Tools, Firmware Update")]),e._v(" "),o("li",[e._v("The Firmware image field should be the .bin file downloaded from the u-blox ZED-F9P website")]),e._v(" "),o("li",[e._v('Check the "Use this baudrate for update" checkbox and select 115200 from the drop-down')]),e._v(" "),o("li",[e._v("Ensure the other checkboxes are as shown below")]),e._v(" "),o("li",[e._v("Push the green GO button on the bottom left")]),e._v(" "),o("li",[e._v('"Firmware Update SUCCESS" should be displayed if it updated successfully '),o("img",{attrs:{src:r(758),alt:"Firmware Update"}})])])])])])}),[],!1,null,null,null);t.default=n.exports},755:function(e,t,r){e.exports=r.p+"assets/img/ark_rtk_gps.21417f3e.jpg"},756:function(e,t,r){e.exports=r.p+"assets/img/ark_rtk_gps_ucenter_connect.dcd887b4.png"},757:function(e,t,r){e.exports=r.p+"assets/img/ark_rtk_gps_ublox_version.2cbf9d8e.png"},758:function(e,t,r){e.exports=r.p+"assets/img/ark_rtk_gps_ublox_f9p_firmware_update.05d5b4e4.png"}}]);