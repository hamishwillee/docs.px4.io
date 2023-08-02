(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{2599:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ark-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[e._v("#")]),e._v(" ARK Flow")]),e._v(" "),o("p",[e._v("ARK Flow is an open source "),o("RouterLink",{attrs:{to:"/ko/dronecan/"}},[e._v("DroneCAN")]),e._v(" "),o("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[e._v("optical flow")]),e._v(", "),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(", and IMU module.")],1),e._v(" "),o("p",[o("img",{attrs:{src:r(390),alt:"ARK Flow"}})]),e._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),o("p",[e._v("Order this module from:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/ark-flow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARK Electronics"),o("OutboundLink")],1),e._v(" (US)")])]),e._v(" "),o("h2",{attrs:{id:"hardware-specifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-specifications"}},[e._v("#")]),e._v(" Hardware Specifications")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/ARK-Electronics/ARK_Flow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Source Schematic and BOM"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Sensors\n"),o("ul",[o("li",[e._v("PixArt PAW3902 Optical Flow Sensor\n"),o("ul",[o("li",[e._v("Tracks under super low light condition of >9 lux")]),e._v(" "),o("li",[e._v("Wide working range from 80mm up to 30m")]),e._v(" "),o("li",[e._v("Up to 7.4 rad/s")])])]),e._v(" "),o("li",[e._v("40mW IR LED built onto board for improved low light operation")]),e._v(" "),o("li",[e._v("Broadcom AFBR-S50LV85D Time-of-Flight Distance Sensor\n"),o("ul",[o("li",[e._v("Integrated 850 nm laser light source")]),e._v(" "),o("li",[e._v("Field-of-View (FoV) of 12.4° x 6.2° with 32 pixels")]),e._v(" "),o("li",[e._v("Typical distance range up to 30m")]),e._v(" "),o("li",[e._v("Operation of up to 200k Lux ambient light")]),e._v(" "),o("li",[e._v("Works well on all surface conditions")]),e._v(" "),o("li",[e._v("Transmitter beam of 2° x 2° to illuminate between 1 and 3 pixels")])])]),e._v(" "),o("li",[e._v("Bosch BMI088 6-Axis IMU or Invensense ICM-42688-P 6-Axis IMU")])])]),e._v(" "),o("li",[e._v("STM32F412CEU6 MCU")]),e._v(" "),o("li",[e._v("Two Pixhawk Standard CAN Connectors (4 Pin JST GH)")]),e._v(" "),o("li",[e._v("Pixhawk Standard Debug Connector (6 Pin JST SH)")]),e._v(" "),o("li",[e._v("Software-toggleable built in CAN termination resistor")]),e._v(" "),o("li",[e._v("Small Form Factor\n"),o("ul",[o("li",[e._v("3cm x 3cm x 1.4cm")])])]),e._v(" "),o("li",[e._v("LED Indicators")]),e._v(" "),o("li",[e._v("USA Built")])]),e._v(" "),o("h2",{attrs:{id:"hardware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),o("h3",{attrs:{id:"wiring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),o("p",[e._v("The ARK Flow is connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable. For more information, refer to the "),o("RouterLink",{attrs:{to:"/ko/can/#wiring"}},[e._v("CAN Wiring")]),e._v(" instructions.")],1),e._v(" "),o("h3",{attrs:{id:"mounting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mounting"}},[e._v("#")]),e._v(" Mounting")]),e._v(" "),o("p",[e._v("The recommended mounting orientation is with the connectors on the board pointing towards "),o("strong",[e._v("back of vehicle")]),e._v(", as shown in the following picture.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(731),alt:"ARK Flow align with Pixhawk"}})]),e._v(" "),o("p",[e._v("This corresponds to the default value ("),o("code",[e._v("0")]),e._v(") of the parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_ROT"}},[e._v("SENS_FLOW_ROT")]),e._v(". Change the parameter appropriately if using a different orientation.")],1),e._v(" "),o("p",[e._v("The sensor can be mounted anywhere on the frame, but you will need to specify the focal point position, relative to vehicle centre of gravity, during "),o("a",{attrs:{href:"#px4-configuration"}},[e._v("PX4 configuration")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"firmware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[e._v("#")]),e._v(" Firmware Setup")]),e._v(" "),o("p",[e._v("ARK Flow runs the "),o("RouterLink",{attrs:{to:"/ko/dronecan/px4_cannode_fw.html"}},[e._v("PX4 DroneCAN Firmware")]),e._v(". As such, it supports firmware update over the CAN bus and "),o("RouterLink",{attrs:{to:"/ko/dronecan/#node-id"}},[e._v("dynamic node allocation")]),e._v(".")],1),e._v(" "),o("p",[e._v("ARK Flow boards ship with recent firmware pre-installed, but if you want to build and flash the latest firmware yourself see "),o("RouterLink",{attrs:{to:"/ko/dronecan/px4_cannode_fw.html#building-the-firmware"}},[e._v("PX4 DroneCAN Firmware > Building the Firmware")]),e._v(".")],1),e._v(" "),o("ul",[o("li",[e._v("Firmware target: "),o("code",[e._v("ark_can-flow_default")])]),e._v(" "),o("li",[e._v("Bootloader target: "),o("code",[e._v("ark_can-flow_canbootloader")])])]),e._v(" "),o("h2",{attrs:{id:"flight-controller-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-setup"}},[e._v("#")]),e._v(" Flight Controller Setup")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The Ark Flow will not boot if there is no SD card in the flight controller when powered on.")])]),e._v(" "),o("h3",{attrs:{id:"enable-dronecan"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-dronecan"}},[e._v("#")]),e._v(" Enable DroneCAN")]),e._v(" "),o("p",[e._v("In order to use the ARK Flow board, connect it to the Pixhawk CAN bus and enable the UAVCAN driver by setting parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),o("code",[e._v("2")]),e._v(" for dynamic node allocation (or "),o("code",[e._v("3")]),e._v(" if using "),o("RouterLink",{attrs:{to:"/ko/dronecan/escs.html"}},[e._v("DroneCAN ESCs")]),e._v(").")],1),e._v(" "),o("p",[e._v("The steps are:")]),e._v(" "),o("ul",[o("li",[e._v("In "),o("em",[e._v("QGroundControl")]),e._v(" set the parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),o("code",[e._v("2")]),e._v(" or "),o("code",[e._v("3")]),e._v(" and reboot (see "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("Finding/Updating Parameters")]),e._v(").")],1),e._v(" "),o("li",[e._v("Connect ARK Flow CAN to the Pixhawk CAN.")])]),e._v(" "),o("p",[e._v("Once enabled, the module will be detected on boot. Flow data should arrive at 10Hz.")]),e._v(" "),o("p",[e._v("DroneCAN configuration in PX4 is explained in more detail in "),o("RouterLink",{attrs:{to:"/ko/dronecan/#enabling-dronecan"}},[e._v("DroneCAN > Enabling DroneCAN")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),o("p",[e._v("You need to set the EKF optical flow parameters to enable fusing optical flow measurements for velocity calculation, set necessary "),o("RouterLink",{attrs:{to:"/ko/dronecan/"}},[e._v("DroneCAN")]),e._v(" parameters, and define offsets if the sensor is not centred within the vehicle.")],1),e._v(" "),o("p",[e._v("Set the following parameters in "),o("em",[e._v("QGroundControl")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("Enable optical flow fusion by setting "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_CTRL"}},[e._v("EKF2_OF_CTRL")]),e._v(".")],1),e._v(" "),o("li",[e._v("To optionally disable GPS aiding, set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(" to "),o("code",[e._v("0")]),e._v(".")],1),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_A_HMAX"}},[e._v("EKF2_RNG_A_HMAX")]),e._v(" to "),o("code",[e._v("10")]),e._v(".")],1),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_QLTY_T"}},[e._v("EKF2_RNG_QLTY_T")]),e._v(" to "),o("code",[e._v("0.2")]),e._v(".")],1),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_RNG_MIN"}},[e._v("UAVCAN_RNG_MIN")]),e._v(" to "),o("code",[e._v("0.08")]),e._v(".")],1),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_RNG_MAX"}},[e._v("UAVCAN_RNG_MAX")]),e._v(" to "),o("code",[e._v("30")]),e._v(".")],1),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_MINHGT"}},[e._v("SENS_FLOW_MINHGT")]),e._v(" to "),o("code",[e._v("0.08")]),e._v(".")],1),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_MAXHGT"}},[e._v("SENS_FLOW_MAXHGT")]),e._v(" to "),o("code",[e._v("25")]),e._v(".")],1),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_MAXR"}},[e._v("SENS_FLOW_MAXR")]),e._v(" to "),o("code",[e._v("7.4")]),e._v(" to match the PAW3902 maximum angular flow rate.")],1),e._v(" "),o("li",[e._v("Enable "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_FLOW"}},[e._v("UAVCAN_SUB_FLOW")]),e._v(".")],1),e._v(" "),o("li",[e._v("Enable "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_RNG"}},[e._v("UAVCAN_SUB_RNG")]),e._v(".")],1),e._v(" "),o("li",[e._v("The parameters "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_X"}},[e._v("EKF2_OF_POS_X")]),e._v(", "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_Y"}},[e._v("EKF2_OF_POS_Y")]),e._v(" and "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_Z"}},[e._v("EKF2_OF_POS_Z")]),e._v(" can be set to account for the offset of the Ark Flow from the vehicle centre of gravity.")],1)]),e._v(" "),o("h2",{attrs:{id:"ark-flow-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow-configuration"}},[e._v("#")]),e._v(" Ark Flow Configuration")]),e._v(" "),o("p",[e._v("On the ARK Flow, you may need to configure the following parameters:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parameter")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{id:"CANNODE_TERM"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CANNODE_TERM"}},[e._v("CANNODE_TERM")])],1),e._v(" "),o("td",[e._v("CAN built-in bus termination.")])])])]),e._v(" "),o("h2",{attrs:{id:"led-meanings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#led-meanings"}},[e._v("#")]),e._v(" LED Meanings")]),e._v(" "),o("p",[e._v("You will see both red and blue LEDs on the ARK Flow when it is being flashed, and a solid blue LED if it is running properly.")]),e._v(" "),o("p",[e._v("If you see a solid red LED there is an error and you should check the following:")]),e._v(" "),o("ul",[o("li",[e._v("Make sure the flight controller has an SD card installed.")]),e._v(" "),o("li",[e._v("Make sure the Ark Flow has "),o("code",[e._v("ark_can-flow_canbootloader")]),e._v(" installed prior to flashing "),o("code",[e._v("ark_can-flow_default")]),e._v(".")]),e._v(" "),o("li",[e._v("Remove binaries from the root and ufw directories of the SD card and try to build and flash again.")])]),e._v(" "),o("h2",{attrs:{id:"video"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[e._v("#")]),e._v(" Video")]),e._v(" "),o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/SAbRe1fi7bU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),e._v(" "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=SAbRe1fi7bU&list=PLUepQApgwSozmwhOo-dXnN33i2nBEl1c0",target:"_blank",rel:"noopener noreferrer"}},[e._v("유튜브"),o("OutboundLink")],1),e._v(" "),o("em",[e._v("속도 추정을 위해 ARK Flow 센서를 사용한 PX4 고정 위치("),o("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("위치 모드")]),e._v("에서)")],1),o("p")])}),[],!1,null,null,null);t.default=a.exports},390:function(e,t,r){e.exports=r.p+"assets/img/ark_flow.3e1f1c1c.jpg"},731:function(e,t,r){e.exports=r.p+"assets/img/ark_flow_orientation.598cf540.png"}}]);