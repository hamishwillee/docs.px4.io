(window.webpackJsonp=window.webpackJsonp||[]).push([[908],{3605:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dronecan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dronecan"}},[e._v("#")]),e._v(" DroneCAN")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://dronecan.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DroneCAN"),a("OutboundLink")],1),e._v(" is a open software communication protocol for flight controllers and other "),a("RouterLink",{attrs:{to:"/zh/can/"}},[e._v("CAN")]),e._v(" devices on a vehicle to communicate with each other.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("ul",[a("li",[e._v("DroneCAN is not enabled by default, and nor are specific sensors and features that use it. For setup information see "),a("a",{attrs:{href:"#px4-configuration"}},[e._v("PX4 Configuration")]),e._v(".")]),e._v(" "),a("li",[e._v("PX4 requires an SD card to enable dynamic node allocation and for firmware update. The SD card is not used in flight.")])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("DroneCAN was previously known as UAVCAN v0 (or just UAVCAN).\nThe name was changed in 2022.")])]),e._v(" "),a("h2",{attrs:{id:"benefits-of-dronecan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-dronecan"}},[e._v("#")]),e._v(" Benefits of DroneCAN")]),e._v(" "),a("p",[e._v("Connecting peripherals over DroneCAN has many benefits:")]),e._v(" "),a("ul",[a("li",[e._v("Many different sensors and actuators are already supported.")]),e._v(" "),a("li",[e._v("CAN has been specifically designed to deliver robust and reliable connectivity over relatively large distances. It enables safe use of ESCs on bigger vehicles and communication redundancy.")]),e._v(" "),a("li",[e._v("The bus is bi-directional, enabling health monitoring, diagnostics, and RPM telemetry.")]),e._v(" "),a("li",[e._v("Wiring is less complicated as you can have a single bus for connecting all your ESCs and other DroneCAN peripherals.")]),e._v(" "),a("li",[e._v("Setup is easier as you configure ESC numbering by manually spinning each motor.")]),e._v(" "),a("li",[e._v("It allows users to configure and update the firmware of all CAN-connected devices centrally through PX4.")])]),e._v(" "),a("h2",{attrs:{id:"supported-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported Hardware")]),e._v(" "),a("p",[e._v("Most common types of peripherals (sensors, ESCs, and servos) that are DroneCAN/UAVCAN v0 compliant are supported.")]),e._v(" "),a("p",[e._v("Supported hardware includes (this is not an exhaustive list):")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/dronecan/escs.html"}},[e._v("ESC/Motor controllers")])],1),e._v(" "),a("li",[e._v("Airspeed sensors\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/thiemar/airspeed",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thiemar airspeed sensor"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("GNSS receivers for GNSS (GPS, GLONASS, BeiDou, and so on)\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/dronecan/ark_gps.html"}},[e._v("ARK GPS")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/dronecan/ark_rtk_gps.html"}},[e._v("ARK RTK GPS")])],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[e._v("CubePilot Here3"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://doc.cuav.net/gps/neo-series-gnss/en/neo-v2-pro.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CUAV NEO v2 Pro GNSS"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/gps_compass/gps_cuav_neo_3pro.html"}},[e._v("CUAV NEO 3 Pro GPS")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/gps_compass/gps_cuav_neo_3x.html"}},[e._v("CUAV NEO 3X GPS")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_cuav_c-rtk2.html"}},[e._v("CUAV C-RTK2 PPK/RTK GNSS")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/dronecan/holybro_m8n_gps.html"}},[e._v("Holybro DroneCAN M8N GPS")])],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://holybro.com/products/dronecan-m9n-gps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro DroneCAN M9N GPS"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://holybro.com/products/dronecan-h-rtk-f9p-rover",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro DroneCAN H-RTK F9P Rover"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://holybro.com/products/dronecan-h-rtk-f9p-helical",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro DroneCAN H-RTK F9P Helical"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax GNSS"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("Power monitors\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/dronecan/pomegranate_systems_pm.html"}},[e._v("Pomegranate Systems Power Module")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/dronecan/cuav_can_pmu.html"}},[e._v("CUAV CAN PMU Power Module")])],1)])]),e._v(" "),a("li",[e._v("Compass\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://holybro.com/products/dronecan-rm3100-compass",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro RM3100 Professional Grade Compass"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("Distance sensors\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/dronecan/ark_flow.html"}},[e._v("ARK Flow")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/dronecan/avanon_laser_interface.html"}},[e._v("Avionics Anonymous Laser Altimeter UAVCAN Interface")])],1)])]),e._v(" "),a("li",[e._v("Optical Flow\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/dronecan/ark_flow.html"}},[e._v("Ark Flow")])],1)])]),e._v(" "),a("li",[e._v("Generic CAN Node (enables use of I2C, SPI, UART sensors on the CAN bus).\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/dronecan/ark_cannode.html"}},[e._v("ARK CANnode")])],1)])])]),e._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),a("p",[e._v("DroneCAN operates over a CAN network. DroneCAN hardware should be connected as described in "),a("RouterLink",{attrs:{to:"/zh/can/#wiring"}},[e._v("CAN > Wiring")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"node-id-allocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-id-allocation"}},[e._v("#")]),e._v(" Node ID Allocation")]),e._v(" "),a("p",[e._v("Every DroneCAN device must be configured with a "),a("em",[e._v("node id")]),e._v(" that is unique on the vehicle.")]),e._v(" "),a("p",[e._v("Most devices support "),a("em",[e._v("Dynamic Node Allocation (DNA)")]),e._v(", which allows PX4 to automatically configure the node ID of each detected peripheral on system startup. Consult the manufacturer documentation for details on whether your device supports DNA and how to enable it. Many devices will automatically switch to DNA if the node id is set to 0. PX4 will enable the built in allocation server if the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" parameter is > 1 (set to 2 or 3).")],1),e._v(" "),a("p",[e._v("Some devices don't support DNA. Additionally, in certain mission-critical scenarios, you might prefer to manually configure node IDs beforehand instead of relying on the dynamic allocation server. If you wish to disable the DNA completely, set "),a("code",[e._v("UAVCAN_ENABLE")]),e._v(" to "),a("code",[e._v("1")]),e._v(" and manually set each node ID to a unique value. If the DNA is still running and certain devices need to be manually configured, give these devices a value greater than the total number of DroneCAN devices to avoid clashes.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The PX4 node ID can be configured using the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_NODE_ID"}},[e._v("UAVCAN_NODE_ID")]),e._v(" parameter. The parameter is set to 1 by default.")],1)]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("At time of writing, PX4 does not run the node allocation server on the CAN2 port. This means that if you have a device that is "),a("em",[e._v("only")]),e._v(" connected to CAN2 (not redundantly to CAN1 and CAN2), you will need to manually configure its node ID.")])]),e._v(" "),a("h2",{attrs:{id:"px4-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),a("p",[e._v("DroneCAN is configured on PX4 by "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("setting specific PX4 parameters")]),e._v(" in QGroundControl. You will need to enable DroneCAN itself, along with subscriptions and publications for any features that you use.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("In some cases you may need to also configure parameters on the connected CAN devices (these can also be "),a("a",{attrs:{href:"#qgc-cannode-parameter-configuration"}},[e._v("set using QGC")]),e._v(").")])]),e._v(" "),a("h3",{attrs:{id:"enabling-dronecan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-dronecan"}},[e._v("#")]),e._v(" Enabling DroneCAN")]),e._v(" "),a("p",[e._v("To enable the PX4 DroneCAN driver, set the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" parameter:")],1),e._v(" "),a("ul",[a("li",[a("code",[e._v("0")]),e._v(": DroneCAN driver disabled")]),e._v(" "),a("li",[a("code",[e._v("1")]),e._v(": DroneCAN driver enabled for sensors, "),a("a",{attrs:{href:"#node-id-allocation"}},[e._v("DNA server")]),e._v(" disabled")]),e._v(" "),a("li",[a("code",[e._v("2")]),e._v(": DroneCAN driver enabled for sensors, DNA server enabled")]),e._v(" "),a("li",[a("code",[e._v("3")]),e._v(": DroneCAN driver enabled for sensors and ESCs, DNA server enabled")])]),e._v(" "),a("p",[a("code",[e._v("2")]),e._v(" or "),a("code",[e._v("3")]),e._v(" are recommended, if DNA is supported.")]),e._v(" "),a("h3",{attrs:{id:"dronecan-subscriptions-publications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dronecan-subscriptions-publications"}},[e._v("#")]),e._v(" DroneCan Subscriptions & Publications")]),e._v(" "),a("p",[e._v("PX4 does not publish or subscribe to DroneCAN messages that "),a("em",[e._v("might")]),e._v(" be needed by default, in order to avoid spamming the CAN bus. Instead you must enable publication or subscription to the messages associated with a particular feature by setting the associated "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#uavcan"}},[e._v("UAVCAN parameter")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Sensor parameters may not exist (be visible in QGC) until you have enabled the associated DroneCAN "),a("a",{attrs:{href:"#sensors"}},[e._v("sensor subscription")]),e._v("!")]),e._v(" "),a("p",[e._v("For example, "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_MINHGT"}},[e._v("SENS_FLOW_MINHGT")]),e._v(" does not exist until "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_FLOW"}},[e._v("UAVCAN_SUB_FLOW")]),e._v(" is enabled.")],1)]),e._v(" "),a("p",[e._v("For example, to use a connected DroneCAN smart battery you would enable the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_BAT"}},[e._v("UAVCAN_SUB_BAT")]),e._v(" parameter, which would subscribe PX4 to receive "),a("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#batteryinfo",target:"_blank",rel:"noopener noreferrer"}},[e._v("BatteryInfo"),a("OutboundLink")],1),e._v(" DroneCAN messages. If using a peripheral that needs to know if PX4 is armed, you would need to set the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_PUB_ARM"}},[e._v("UAVCAN_PUB_ARM")]),e._v(" parameter so that PX4 starts publishing "),a("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#armingstatus",target:"_blank",rel:"noopener noreferrer"}},[e._v("ArmingStatus"),a("OutboundLink")],1),e._v(" messages.")],1),e._v(" "),a("p",[e._v("The parameter names are prefixed with "),a("code",[e._v("UAVCAN_SUB_")]),e._v(" and "),a("code",[e._v("UAVCAN_PUB_")]),e._v(" to indicate whether they enable PX4 subscribing or publishing. The remainder of the name indicates the specific message/feature being set.")]),e._v(" "),a("p",[e._v("DroneCAN peripherals connected to PX4 can also be "),a("a",{attrs:{href:"#qgc-cannode-parameter-configuration"}},[e._v("configured using parameters via QGC")]),e._v(". By convention, parameters named with the prefix "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_BITRATE"}},[e._v("CANNODE_")]),e._v(" have prefined meaning, and may be documented in the parameter reference. "),a("code",[e._v("CANNODE_")]),e._v(" parameters prefixed with "),a("code",[e._v("CANNODE_PUB_")]),e._v(" and "),a("code",[e._v("CANNODE_SUB_")]),e._v(" enable the peripheral to publish or subscribe the associated DroneCAN message. These allow DroneCAN peripherals to be configured to only subscribe and publish messages that they actually need (in the same way that PX4 uses the corresponding "),a("code",[e._v("UAVCAN_PUB_")]),e._v("/"),a("code",[e._v("UAVCAN_SUB_")]),e._v(" parameters). Note that a peripheral might might not use "),a("code",[e._v("CANNODE_")]),e._v(" parameters, in which case it may have to publish/subscribe to particular messages whether or not they are needed.")],1),e._v(" "),a("p",[e._v("The following sections provide additional detail on the PX4 and DroneCAN peripheral parameters used to enable particular features.")]),e._v(" "),a("h4",{attrs:{id:"sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[e._v("#")]),e._v(" Sensors")]),e._v(" "),a("p",[e._v("The DroneCAN sensor parameters/subscriptions that you can enable are (in PX4 v1.14):")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_ASPD"}},[e._v("UAVCAN_SUB_ASPD")]),e._v(": Airspeed")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_BARO"}},[e._v("UAVCAN_SUB_BARO")]),e._v(": Barometer")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_BAT"}},[e._v("UAVCAN_SUB_BAT")]),e._v(": Battery monitor/Power module")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_BTN"}},[e._v("UAVCAN_SUB_BTN")]),e._v(": Button")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_DPRES"}},[e._v("UAVCAN_SUB_DPRES")]),e._v(": Differential pressure")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_FLOW"}},[e._v("UAVCAN_SUB_FLOW")]),e._v(": Optical flow")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_GPS"}},[e._v("UAVCAN_SUB_GPS")]),e._v(": GPS")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_HYGRO"}},[e._v("UAVCAN_SUB_HYGRO")]),e._v(": Hygrometer")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_ICE"}},[e._v("UAVCAN_SUB_ICE")]),e._v(": Internal combustion engine (ICE).")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_IMU"}},[e._v("UAVCAN_SUB_IMU")]),e._v(": IMU")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(": Magnetometer (compass)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_RNG"}},[e._v("UAVCAN_SUB_RNG")]),e._v(": Range finder (distance sensor).")],1)]),e._v(" "),a("h4",{attrs:{id:"gps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps"}},[e._v("#")]),e._v(" GPS")]),e._v(" "),a("p",[e._v("PX4 DroneCAN parameters:")]),e._v(" "),a("ul",[a("li",[e._v("Enable "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_GPS"}},[e._v("UAVCAN_SUB_GPS")]),e._v(".")],1),e._v(" "),a("li",[e._v("Enable "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(" if the GPS module has an inbuilt compass.")],1)]),e._v(" "),a("p",[e._v("GPS CANNODE parameter ("),a("a",{attrs:{href:"#qgc-cannode-parameter-configuration"}},[e._v("set using QGC")]),e._v("):")]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_TERM"}},[e._v("CANNODE_TERM")]),e._v(" to "),a("code",[e._v("1")]),e._v(" for the last node on the CAN bus.")],1)]),e._v(" "),a("p",[e._v("Other PX4 Parameters:")]),e._v(" "),a("ul",[a("li",[e._v("If the GPS is not positioned at the vehicle centre of gravity you can account for the offset using "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_POS_X"}},[e._v("EKF2_GPS_POS_X")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_POS_Y"}},[e._v("EKF2_GPS_POS_Y")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_POS_Z"}},[e._v("EKF2_GPS_POS_Z")]),e._v(".")],1),e._v(" "),a("li",[e._v("If the GPS module provides yaw information, you can enable GPS yaw fusion by setting bit 3 of "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(" to true.")],1)]),e._v(" "),a("h4",{attrs:{id:"rtk-gps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps"}},[e._v("#")]),e._v(" RTK GPS")]),e._v(" "),a("p",[e._v("Set the same parameters as for "),a("a",{attrs:{href:"#gps"}},[e._v("GPS")]),e._v(" above. In addition, you may also need to set the following parameters depending on whether your RTK setup is Rover and Fixed Base, or Rover and Moving Base, or both.")]),e._v(" "),a("h5",{attrs:{id:"rover-and-fixed-base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rover-and-fixed-base"}},[e._v("#")]),e._v(" Rover and Fixed Base")]),e._v(" "),a("p",[e._v("Position of rover is established using RTCM messages from the RTK base module (the base module is connected to QGC, which sends the RTCM information to PX4 via MAVLink).")]),e._v(" "),a("p",[e._v("PX4 DroneCAN parameters:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_PUB_RTCM"}},[e._v("UAVCAN_PUB_RTCM")]),e._v(":\n"),a("ul",[a("li",[e._v("Makes PX4 publish RTCM messages ("),a("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#rtcmstream",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTCMStream"),a("OutboundLink")],1),e._v(") to the bus (which it gets from the RTK base module via QGC).")])])],1)]),e._v(" "),a("p",[e._v("Rover module parameters (also "),a("a",{attrs:{href:"#qgc-cannode-parameter-configuration"}},[e._v("set using QGC")]),e._v("):")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_SUB_RTCM"}},[e._v("CANNODE_SUB_RTCM")]),e._v(" tells the rover that it should subscribe to "),a("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#rtcmstream",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTCMStream"),a("OutboundLink")],1),e._v(" RTCM messages on the bus (from the moving base).")],1)]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("You could instead use "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_PUB_MBD"}},[e._v("UAVCAN_PUB_MBD")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_SUB_MBD"}},[e._v("CANNODE_SUB_MBD")]),e._v(", which also publish RTCM messages (these are newer). Using the "),a("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#rtcmstream",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTCMStream"),a("OutboundLink")],1),e._v(" message means that you can implement moving base (see below) at the same time.")],1)]),e._v(" "),a("h5",{attrs:{id:"rover-and-moving-base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rover-and-moving-base"}},[e._v("#")]),e._v(" Rover and Moving Base")]),e._v(" "),a("p",[e._v("As discussed in "),a("RouterLink",{attrs:{to:"/zh/gps_compass/u-blox_f9p_heading.html"}},[e._v("RTK GPS Heading with Dual u-blox F9P")]),e._v(" a vehicle can have two RTK modules in order to calculate yaw from GPS. In this setup the vehicle has a "),a("em",[e._v("moving base")]),e._v(" RTK GPS and a "),a("em",[e._v("rover")]),e._v(" RTK GPS.")],1),e._v(" "),a("p",[e._v("These parameters can be "),a("a",{attrs:{href:"#qgc-cannode-parameter-configuration"}},[e._v("set on moving base and rover RTK CAN nodes")]),e._v(", respectively:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_PUB_MBD"}},[e._v("CANNODE_PUB_MBD")]),e._v(" causes a moving base GPS unit to publish "),a("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#movingbaselinedata",target:"_blank",rel:"noopener noreferrer"}},[e._v("MovingBaselineData"),a("OutboundLink")],1),e._v("RTCM messages onto the bus (for the rover)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CANNODE_SUB_MBD"}},[e._v("CANNODE_SUB_MBD")]),e._v(" tells the rover that it should subscribe to "),a("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#movingbaselinedata",target:"_blank",rel:"noopener noreferrer"}},[e._v("MovingBaselineData"),a("OutboundLink")],1),e._v(" RTCM messages on the bus (from the moving base).")],1)]),e._v(" "),a("p",[e._v("For PX4 you will also need to set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" to indicate the relative position of the moving base and rover: 0 if your Rover is in front of your Moving Base, 90 if Rover is right of Moving Base, 180 if Rover is behind Moving Base, or 270 if Rover is left of Moving Base.")],1),e._v(" "),a("h4",{attrs:{id:"barometer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#barometer"}},[e._v("#")]),e._v(" Barometer")]),e._v(" "),a("p",[e._v("PX4 DroneCAN parameters:")]),e._v(" "),a("ul",[a("li",[e._v("Enable "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_BARO"}},[e._v("UAVCAN_SUB_BARO")]),e._v(".")],1)]),e._v(" "),a("h4",{attrs:{id:"compass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compass"}},[e._v("#")]),e._v(" Compass")]),e._v(" "),a("p",[e._v("PX4 DroneCAN parameters:")]),e._v(" "),a("ul",[a("li",[e._v("Enable "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(".")],1)]),e._v(" "),a("h4",{attrs:{id:"distance-sensor-range-finder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distance-sensor-range-finder"}},[e._v("#")]),e._v(" Distance Sensor/Range Finder")]),e._v(" "),a("p",[e._v("PX4 DroneCAN parameters:")]),e._v(" "),a("ul",[a("li",[e._v("Enable "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_RNG"}},[e._v("UAVCAN_SUB_RNG")]),e._v(".")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_RNG_MIN"}},[e._v("UAVCAN_RNG_MIN")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_RNG_MAX"}},[e._v("UAVCAN_RNG_MAX")]),e._v(", the minimum and maximum range of the distance sensor.")],1)]),e._v(" "),a("p",[e._v("Other PX4 parameters:")]),e._v(" "),a("ul",[a("li",[e._v("If the rangefinder is not positioned at the vehicle centre of gravity you can account for the offset using "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_X"}},[e._v("EKF2_RNG_POS_X")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_Y"}},[e._v("EKF2_RNG_POS_Y")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_Z"}},[e._v("EKF2_RNG_POS_Z")]),e._v(".")],1),e._v(" "),a("li",[e._v("Other "),a("code",[e._v("EKF2_RNG_*")]),e._v(" parameters may be relevant, in which case they should be documented with the specific rangefinder.")])]),e._v(" "),a("h4",{attrs:{id:"optical-flow-sensor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow-sensor"}},[e._v("#")]),e._v(" Optical Flow Sensor")]),e._v(" "),a("p",[e._v("PX4 DroneCAN parameters:")]),e._v(" "),a("ul",[a("li",[e._v("Enable "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_SUB_FLOW"}},[e._v("UAVCAN_SUB_FLOW")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("Other PX4 parameters:")]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_MINHGT"}},[e._v("SENS_FLOW_MINHGT")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_MAXHGT"}},[e._v("SENS_FLOW_MAXHGT")]),e._v(", the minimum and maximum height of the flow sensor.")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_MAXR"}},[e._v("SENS_FLOW_MAXR")]),e._v(" the maximum angular flow rate of the sensor.")],1),e._v(" "),a("li",[e._v("Enable optical flow fusion by setting "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_OF_CTRL"}},[e._v("EKF2_OF_CTRL")]),e._v(".")],1),e._v(" "),a("li",[e._v("To disable GPS aiding (optional), set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(" to "),a("code",[e._v("0")]),e._v(".")],1),e._v(" "),a("li",[e._v("If the optical flow unit is not positioned at the vehicle centre of gravity you can account for the offset using "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_OF_POS_X"}},[e._v("EKF2_OF_POS_X")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_OF_POS_Y"}},[e._v("EKF2_OF_POS_Y")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_OF_POS_Z"}},[e._v("EKF2_OF_POS_Z")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("Optical flow sensors require rangefinder data. However the rangefinder need not be part of the same module, and if not, may not be connected via DroneCAN. If the rangefinder is connected via DroneCAN (whether inbuilt or separate), you will also need to enable it as described in the "),a("a",{attrs:{href:"#distance-sensor-range-finder"}},[e._v("rangefinder section")]),e._v(" (above).")]),e._v(" "),a("h4",{attrs:{id:"arming-peripherals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arming-peripherals"}},[e._v("#")]),e._v(" Arming Peripherals")]),e._v(" "),a("p",[e._v("PX4 DroneCAN parameters:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_PUB_ARM"}},[e._v("UAVCAN_PUB_ARM")]),e._v(" ("),a("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#armingstatus",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arming Status"),a("OutboundLink")],1),e._v("): Publish when using DroneCAN components that require the PX4 arming status as a precondition for use.")],1)]),e._v(" "),a("h3",{attrs:{id:"esc-servos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-servos"}},[e._v("#")]),e._v(" ESC & Servos")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/dronecan/escs.html"}},[e._v("DroneCAN ESCs and servos")]),e._v(" require the "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[e._v("motor order and servo outputs")]),e._v(" to be configured.")],1),e._v(" "),a("h2",{attrs:{id:"qgc-cannode-parameter-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgc-cannode-parameter-configuration"}},[e._v("#")]),e._v(" QGC CANNODE Parameter Configuration")]),e._v(" "),a("p",[e._v("QGroundControl can inspect and modify parameters belonging to CAN devices attached to the flight controller, provided the device are connected to the flight controller before QGC is started.")]),e._v(" "),a("p",[e._v("CAN nodes are displayed separate sections in "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("Vehicle Settings > Parameters")]),e._v(" named "),a("em",[e._v("Component X")]),e._v(", where X is the node ID. For example, the screenshot below shows the parameters for a CAN GPS with node id 125 (after the "),a("em",[e._v("Standard")]),e._v(", "),a("em",[e._v("System")]),e._v(", and "),a("em",[e._v("Developer")]),e._v(" parameter groupings).")],1),e._v(" "),a("p",[a("img",{attrs:{src:r(779),alt:"QGC Parameter showing selected DroneCAN node"}})]),e._v(" "),a("h2",{attrs:{id:"device-specific-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#device-specific-setup"}},[e._v("#")]),e._v(" Device Specific Setup")]),e._v(" "),a("p",[e._v("Most DroneCAN nodes require no further setup, unless specifically noted in their device-specific documentation.")]),e._v(" "),a("h2",{attrs:{id:"firmware-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firmware-update"}},[e._v("#")]),e._v(" Firmware Update")]),e._v(" "),a("p",[e._v("PX4 can upgrade device firmware over DroneCAN. To upgrade the device, all you need to do is copy the firmware binary into the root directory of the flight controller's SD card and reboot.")]),e._v(" "),a("p",[e._v("Upon boot the flight controller will automatically transfer the firmware onto the device and upgrade it. If successful, the firmware binary will be removed from the root directory and there will be a file named "),a("strong",[e._v("XX.bin")]),e._v(" in the "),a("strong",[e._v("/ufw")]),e._v(" directory of the SD card.")]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[a("strong",[e._v("Q")]),e._v(": My DroneCAN devices aren't working.")]),e._v(" "),a("p",[a("strong",[e._v("A")]),e._v(": Check that the "),a("code",[e._v("UAVCAN_ENABLE")]),e._v(" parameter is set correctly. To see a list of devices/nodes that PX4 has detected on the CAN bus, open NSH (i.e. go to the QGroundControl MAVLink Console) and type "),a("code",[e._v("uavcan status")]),e._v(".")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("Q")]),e._v(": The DNA server isn't giving out node IDs.")]),e._v(" "),a("p",[a("strong",[e._v("A")]),e._v(": PX4 requires an SD card to perform dynamic node allocation. Make sure you have (a working) one inserted and reboot.")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("Q")]),e._v(": The motors aren't spinning when armed.")]),e._v(" "),a("p",[a("strong",[e._v("A")]),e._v(": Make sure "),a("code",[e._v("UAVCAN_ENABLE")]),e._v(" is set to "),a("code",[e._v("3")]),e._v(" to enable DroneCAN ESC output.")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("Q")]),e._v(": The motors don't spin until throttle is increased.")]),e._v(" "),a("p",[a("strong",[e._v("A")]),e._v(": Use "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html#actuator-testing"}},[e._v("Acutator > Actuator Testing")]),e._v(" to confirm that the motor outputs are set to the correct minimum values.")],1),e._v(" "),a("h2",{attrs:{id:"useful-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[e._v("#")]),e._v(" Useful Links")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://dronecan.github.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Home Page"),a("OutboundLink")],1),e._v(" (dronecan.github.io)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://dronecan.github.io/Specification",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Specification"),a("OutboundLink")],1),e._v(" (dronecan.github.io)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://dronecan.github.io/Implementations/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Implementations"),a("OutboundLink")],1),e._v(" (dronecan.github.io)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kb.zubax.com/pages/viewpage.action?pageId=2195476",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cyphal/CAN Device Interconnection"),a("OutboundLink")],1),e._v(" (kb.zubax.com)")])])])}),[],!1,null,null,null);t.default=o.exports},779:function(e,t,r){e.exports=r.p+"assets/img/qgc_can_parameters.070eb803.png"}}]);