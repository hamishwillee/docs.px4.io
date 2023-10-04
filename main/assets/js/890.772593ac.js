(window.webpackJsonp=window.webpackJsonp||[]).push([[890],{3376:function(e,t,r){"use strict";r.r(t);var a=r(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ark-cannode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ark-cannode"}},[e._v("#")]),e._v(" ARK CANnode")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://arkelectron.com/product/ark-cannode/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARK CANnode"),a("OutboundLink")],1),e._v(" is an open source generic "),a("RouterLink",{attrs:{to:"/zh/dronecan/"}},[e._v("DroneCAN")]),e._v(" node that includes a 6 degree of freedom IMU. Its main purpose is to enable the use of non-CAN sensors (I2C, SPI, UART) on the CAN bus. It also has PWM outputs to expand a vehicle's control outputs in quantity and physical distance.")],1),e._v(" "),a("p",[a("img",{attrs:{src:r(761),alt:"ARK CANnode"}})]),e._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),a("p",[e._v("Order this module from:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://arkelectron.com/product/ark-cannode/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARK Electronics"),a("OutboundLink")],1),e._v(" (US)")])]),e._v(" "),a("h2",{attrs:{id:"hardware-specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-specifications"}},[e._v("#")]),e._v(" Hardware Specifications")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ARK-Electronics/ARK_CANNODE",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Source Schematic and BOM"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Sensors\n"),a("ul",[a("li",[e._v("Bosch BMI088 6-Axis IMU or Invensense ICM-42688-P 6-Axis IMU")])])]),e._v(" "),a("li",[e._v("STM32F412CGU6 MCU\n"),a("ul",[a("li",[e._v("1MB Flash")])])]),e._v(" "),a("li",[e._v("Two Pixhawk Standard CAN Connectors\n"),a("ul",[a("li",[e._v("4 Pin JST GH")])])]),e._v(" "),a("li",[e._v("Pixhawk Standard I2C Connector\n"),a("ul",[a("li",[e._v("4 Pin JST GH")])])]),e._v(" "),a("li",[e._v("Pixhawk Standard UART/I2C Connector (Basic GPS Port)\n"),a("ul",[a("li",[e._v("6 Pin JST GH")])])]),e._v(" "),a("li",[e._v("Pixhawk Standard SPI Connector\n"),a("ul",[a("li",[e._v("7 Pin JST GH")])])]),e._v(" "),a("li",[e._v("PWM Connector\n"),a("ul",[a("li",[e._v("10 Pin JST JST")]),e._v(" "),a("li",[e._v("8 PWM Outputs")]),e._v(" "),a("li",[e._v("Matches Pixhawk 4 PWM Connector Pinout")])])]),e._v(" "),a("li",[e._v("Pixhawk Standard Debug Connector\n"),a("ul",[a("li",[e._v("6 Pin JST SH")])])]),e._v(" "),a("li",[e._v("Small Form Factor\n"),a("ul",[a("li",[e._v("3cm x 3cm x 1.3cm")])])]),e._v(" "),a("li",[e._v("LED Indicators")]),e._v(" "),a("li",[e._v("USA Built")]),e._v(" "),a("li",[e._v("Power Requirements\n"),a("ul",[a("li",[e._v("5V")]),e._v(" "),a("li",[e._v("Current dependent on connected peripherals")])])])]),e._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),a("h3",{attrs:{id:"wiring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),a("p",[e._v("The ARK CANnode is connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable. For more information, refer to the "),a("RouterLink",{attrs:{to:"/zh/can/#wiring"}},[e._v("CAN Wiring")]),e._v(" instructions.")],1),e._v(" "),a("h2",{attrs:{id:"firmware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[e._v("#")]),e._v(" Firmware Setup")]),e._v(" "),a("p",[e._v("ARK CANnode runs the "),a("RouterLink",{attrs:{to:"/zh/dronecan/px4_cannode_fw.html"}},[e._v("PX4 DroneCAN Firmware")]),e._v(". As such, it supports firmware update over the CAN bus and "),a("RouterLink",{attrs:{to:"/zh/dronecan/#node-id-allocation"}},[e._v("dynamic node allocation")]),e._v(".")],1),e._v(" "),a("p",[e._v("ARK CANnode boards ship with recent firmware pre-installed, but if you want to build and flash the latest firmware yourself see "),a("RouterLink",{attrs:{to:"/zh/dronecan/px4_cannode_fw.html#building-the-firmware"}},[e._v("PX4 DroneCAN Firmware > Building the Firmware")]),e._v(".")],1),e._v(" "),a("ul",[a("li",[e._v("Firmware target: "),a("code",[e._v("ark_cannode_default")])]),e._v(" "),a("li",[e._v("Bootloader target: "),a("code",[e._v("ark_cannode_canbootloader")])])]),e._v(" "),a("h2",{attrs:{id:"flight-controller-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-configuration"}},[e._v("#")]),e._v(" Flight Controller Configuration")]),e._v(" "),a("h3",{attrs:{id:"enable-dronecan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-dronecan"}},[e._v("#")]),e._v(" Enable DroneCAN")]),e._v(" "),a("p",[e._v("In order to use the ARK CANnode board, connect it to the Pixhawk CAN bus and enable the DroneCAN driver by setting parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),a("code",[e._v("2")]),e._v(" for dynamic node allocation (or "),a("code",[e._v("3")]),e._v(" if using "),a("RouterLink",{attrs:{to:"/zh/dronecan/escs.html"}},[e._v("DroneCAN ESCs")]),e._v(").")],1),e._v(" "),a("p",[e._v("The steps are:")]),e._v(" "),a("ul",[a("li",[e._v("In "),a("em",[e._v("QGroundControl")]),e._v(" set the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),a("code",[e._v("2")]),e._v(" or "),a("code",[e._v("3")]),e._v(" and reboot (see "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("Finding/Updating Parameters")]),e._v(").")],1),e._v(" "),a("li",[e._v("Connect ARK CANnode CAN to the Pixhawk CAN.")])]),e._v(" "),a("p",[e._v("Once enabled, the module will be detected on boot.")]),e._v(" "),a("p",[e._v("DroneCAN configuration in PX4 is explained in more detail in "),a("RouterLink",{attrs:{to:"/zh/dronecan/#enabling-dronecan"}},[e._v("DroneCAN > Enabling DroneCAN")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"enable-sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-sensors"}},[e._v("#")]),e._v(" Enable Sensors")]),e._v(" "),a("p",[e._v("You will need to enable the subscriber appropriate for each of the sensors that are connected to the ARK CANnode.")]),e._v(" "),a("p",[e._v("This is done using the the parameters named like "),a("code",[e._v("UAVCAN_SUB_*")]),e._v(" in the parameter reference (such as "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_ASPD"}},[e._v("UAVCAN_SUB_ASPD")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_BARO"}},[e._v("UAVCAN_SUB_BARO")]),e._v(" etc.).")],1),e._v(" "),a("h2",{attrs:{id:"ark-cannode-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ark-cannode-configuration"}},[e._v("#")]),e._v(" Ark CANNode Configuration")]),e._v(" "),a("p",[e._v("On the ARK CANnode, you may need to configure the following parameters:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"CANNODE_TERM"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_TERM"}},[e._v("CANNODE_TERM")])],1),e._v(" "),a("td",[e._v("CAN built-in bus termination.")])])])]),e._v(" "),a("h2",{attrs:{id:"led-meanings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#led-meanings"}},[e._v("#")]),e._v(" LED Meanings")]),e._v(" "),a("p",[e._v("You will see both red and blue LEDs on the ARK CANnode when it is being flashed, and a solid blue LED if it is running properly.")]),e._v(" "),a("p",[e._v("If you see a solid red LED there is an error and you should check the following:")]),e._v(" "),a("ul",[a("li",[e._v("Make sure the flight controller has an SD card installed.")]),e._v(" "),a("li",[e._v("Make sure the ARK CANnode has "),a("code",[e._v("ark_cannode_canbootloader")]),e._v(" installed prior to flashing "),a("code",[e._v("ark_cannode_default")]),e._v(".")]),e._v(" "),a("li",[e._v("Remove binaries from the root and ufw directories of the SD card and try to build and flash again.")])])])}),[],!1,null,null,null);t.default=n.exports},761:function(e,t,r){e.exports=r.p+"assets/img/ark_cannode.de87ae47.jpg"}}]);