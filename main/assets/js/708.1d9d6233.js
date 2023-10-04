(window.webpackJsonp=window.webpackJsonp||[]).push([[708],{1925:function(e,t,r){"use strict";r.r(t);var n=r(19),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"ark-gps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ark-gps"}},[e._v("#")]),e._v(" ARK GPS")]),e._v(" "),n("p",[e._v("ARK GPS is an open source "),n("RouterLink",{attrs:{to:"/en/dronecan/"}},[e._v("DroneCAN")]),e._v(" "),n("RouterLink",{attrs:{to:"/en/gps_compass/"}},[e._v("GNSS/GPS")]),e._v(", magnetometer, IMU, barometer, buzzer, and safety switch module.")],1),e._v(" "),n("p",[n("img",{attrs:{src:r(764),alt:"ARK GPS"}})]),e._v(" "),n("h2",{attrs:{id:"where-to-buy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),n("p",[e._v("Order this module from:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://arkelectron.com/product/ark-gps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARK Electronics"),n("OutboundLink")],1),e._v(" (US)")])]),e._v(" "),n("h2",{attrs:{id:"hardware-specifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hardware-specifications"}},[e._v("#")]),e._v(" Hardware Specifications")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/ARK-Electronics/ARK_GPS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Source Schematic and BOM"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Sensors\n"),n("ul",[n("li",[e._v("Ublox M9N GPS\n"),n("ul",[n("li",[e._v("Ultra-robust meter-level GNSS positioning")]),e._v(" "),n("li",[e._v("Maximum position availability with concurrent reception of 4 GNSS")]),e._v(" "),n("li",[e._v("Advanced spoofing and jamming detection")]),e._v(" "),n("li",[e._v("Excellent RF interference mitigation")])])]),e._v(" "),n("li",[e._v("Bosch BMM150 Magnetometer")]),e._v(" "),n("li",[e._v("Bosch BMP388 Barometer")]),e._v(" "),n("li",[e._v("Invensense ICM-42688-P 6-Axis IMU")])])]),e._v(" "),n("li",[e._v("STM32F412CEU6 MCU")]),e._v(" "),n("li",[e._v("Safety Button")]),e._v(" "),n("li",[e._v("Buzzer")]),e._v(" "),n("li",[e._v("Two Pixhawk Standard CAN Connectors (4 Pin JST GH)")]),e._v(" "),n("li",[e._v("Pixhawk Standard Debug Connector (6 Pin JST SH)")]),e._v(" "),n("li",[e._v("Small Form Factor\n"),n("ul",[n("li",[e._v("5cm x 5cm x 1cm")])])]),e._v(" "),n("li",[e._v("LED Indicators\n"),n("ul",[n("li",[e._v("Safety LED")]),e._v(" "),n("li",[e._v("GPS Fix")]),e._v(" "),n("li",[e._v("RGB System Status")])])]),e._v(" "),n("li",[e._v("USA Built")]),e._v(" "),n("li",[e._v("Power Requirements\n"),n("ul",[n("li",[e._v("5V")]),e._v(" "),n("li",[e._v("110mA Average")]),e._v(" "),n("li",[e._v("117mA Max")])])])]),e._v(" "),n("h2",{attrs:{id:"hardware-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),n("h3",{attrs:{id:"wiring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),n("p",[e._v("The ARK GPS is connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable.\nFor more information, refer to the "),n("RouterLink",{attrs:{to:"/en/can/#wiring"}},[e._v("CAN Wiring")]),e._v(" instructions.")],1),e._v(" "),n("h3",{attrs:{id:"mounting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mounting"}},[e._v("#")]),e._v(" Mounting")]),e._v(" "),n("p",[e._v("The recommended mounting orientation is with the connectors on the board pointing towards the "),n("strong",[e._v("back of vehicle")]),e._v(".")]),e._v(" "),n("p",[e._v("The sensor can be mounted anywhere on the frame, but you will need to specify its position, relative to vehicle centre of gravity, during "),n("a",{attrs:{href:"#px4-configuration"}},[e._v("PX4 configuration")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"firmware-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[e._v("#")]),e._v(" Firmware Setup")]),e._v(" "),n("p",[e._v("ARK GPS runs the "),n("RouterLink",{attrs:{to:"/en/dronecan/px4_cannode_fw.html"}},[e._v("PX4 DroneCAN Firmware")]),e._v(".\nAs such, it supports firmware update over the CAN bus and "),n("RouterLink",{attrs:{to:"/en/dronecan/#node-id-allocation"}},[e._v("dynamic node allocation")]),e._v(".")],1),e._v(" "),n("p",[e._v("ARK GPS boards ship with recent firmware pre-installed, but if you want to build and flash the latest firmware yourself see "),n("RouterLink",{attrs:{to:"/en/dronecan/px4_cannode_fw.html#building-the-firmware"}},[e._v("PX4 DroneCAN Firmware > Building the Firmware")]),e._v(".")],1),e._v(" "),n("ul",[n("li",[e._v("Firmware target: "),n("code",[e._v("ark_can-gps_default")])]),e._v(" "),n("li",[e._v("Bootloader target: "),n("code",[e._v("ark_can-gps_canbootloader")])])]),e._v(" "),n("h2",{attrs:{id:"px4-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),n("p",[e._v("You need to set necessary "),n("RouterLink",{attrs:{to:"/en/dronecan/"}},[e._v("DroneCAN")]),e._v(" parameters and define offsets if the sensor is not centred within the vehicle.\nThe required settings are outlined below.")],1),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("The ARK GPS will not boot if there is no SD card in the flight controller when powered on.")])]),e._v(" "),n("h3",{attrs:{id:"enable-dronecan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enable-dronecan"}},[e._v("#")]),e._v(" Enable DroneCAN")]),e._v(" "),n("p",[e._v("In order to use the ARK GPS board, connect it to the Pixhawk CAN bus and enable the DroneCAN driver by setting parameter "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),n("code",[e._v("2")]),e._v(" for dynamic node allocation (or "),n("code",[e._v("3")]),e._v(" if using "),n("RouterLink",{attrs:{to:"/en/dronecan/escs.html"}},[e._v("DroneCAN ESCs")]),e._v(").")],1),e._v(" "),n("p",[e._v("The steps are:")]),e._v(" "),n("ul",[n("li",[e._v("In "),n("em",[e._v("QGroundControl")]),e._v(" set the parameter "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),n("code",[e._v("2")]),e._v(" or "),n("code",[e._v("3")]),e._v(" and reboot (see "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("Finding/Updating Parameters")]),e._v(").")],1),e._v(" "),n("li",[e._v("Connect ARK GPS CAN to the Pixhawk CAN.")])]),e._v(" "),n("p",[e._v("Once enabled, the module will be detected on boot.\nGPS data should arrive at 10Hz.")]),e._v(" "),n("p",[e._v("DroneCAN configuration in PX4 is explained in more detail in "),n("RouterLink",{attrs:{to:"/en/dronecan/#enabling-dronecan"}},[e._v("DroneCAN > Enabling DroneCAN")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"sensor-position-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sensor-position-configuration"}},[e._v("#")]),e._v(" Sensor Position Configuration")]),e._v(" "),n("p",[e._v("If the sensor is not centred within the vehicle you will also need to define sensor offsets:")]),e._v(" "),n("ul",[n("li",[e._v("Enable GPS yaw fusion by setting bit 3 of "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(" to true.")],1),e._v(" "),n("li",[e._v("Enable "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_SUB_GPS"}},[e._v("UAVCAN_SUB_GPS")]),e._v(", "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(", and "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_SUB_BARO"}},[e._v("UAVCAN_SUB_BARO")]),e._v(".")],1),e._v(" "),n("li",[e._v("Set "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CANNODE_TERM"}},[e._v("CANNODE_TERM")]),e._v(" to "),n("code",[e._v("1")]),e._v(" if this is that last node on the CAN bus.")],1),e._v(" "),n("li",[e._v("The parameters "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_POS_X"}},[e._v("EKF2_GPS_POS_X")]),e._v(", "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_POS_Y"}},[e._v("EKF2_GPS_POS_Y")]),e._v(" and "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_POS_Z"}},[e._v("EKF2_GPS_POS_Z")]),e._v(" can be set to account for the offset of the ARK GPS from the vehicles centre of gravity.")],1)]),e._v(" "),n("h2",{attrs:{id:"led-meanings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#led-meanings"}},[e._v("#")]),e._v(" LED Meanings")]),e._v(" "),n("p",[e._v("You will see green, blue and red LEDs on the ARK GPS when it is being flashed, and a blinking green LED if it is running properly.")]),e._v(" "),n("p",[e._v("If you see a red LED there is an error and you should check the following:")]),e._v(" "),n("ul",[n("li",[e._v("Make sure the flight controller has an SD card installed.")]),e._v(" "),n("li",[e._v("Make sure the ARK GPS has "),n("code",[e._v("ark_can-gps_canbootloader")]),e._v(" installed prior to flashing "),n("code",[e._v("ark_can-gps_default")]),e._v(".")]),e._v(" "),n("li",[e._v("Remove binaries from the root and ufw directories of the SD card and try to build and flash again.")])])])}),[],!1,null,null,null);t.default=a.exports},764:function(e,t,r){e.exports=r.p+"assets/img/ark_gps.dc9c7a7f.jpg"}}]);