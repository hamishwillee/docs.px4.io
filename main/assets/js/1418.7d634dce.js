(window.webpackJsonp=window.webpackJsonp||[]).push([[1418],{2632:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"dronecan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dronecan"}},[e._v("#")]),e._v(" DroneCAN")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://dronecan.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DroneCAN"),r("OutboundLink")],1),e._v(" is a open software communication protocol for flight controllers and other "),r("RouterLink",{attrs:{to:"/ko/can/"}},[e._v("CAN")]),e._v(" devices on a vehicle to communicate with each other.")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("PX4 requires an SD card to enable dynamic node allocation and for firmware update.\nThe SD card is not used in flight.")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("DroneCAN was previously known as UAVCAN v0 (or just UAVCAN).\nThe name was changed in 2022.")])]),e._v(" "),r("h2",{attrs:{id:"benefits-of-dronecan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-dronecan"}},[e._v("#")]),e._v(" Benefits of DroneCAN")]),e._v(" "),r("p",[e._v("Connecting peripherals over DroneCAN has many benefits:")]),e._v(" "),r("ul",[r("li",[e._v("Many different sensors and actuators are already supported.")]),e._v(" "),r("li",[e._v("CAN has been specifically designed to deliver robust and reliable connectivity over relatively large distances. It enables safe use of ESCs on bigger vehicles and communication redundancy.")]),e._v(" "),r("li",[e._v("The bus is bi-directional, enabling health monitoring, diagnostics, and RPM telemetry.")]),e._v(" "),r("li",[e._v("Wiring is less complicated as you can have a single bus for connecting all your ESCs and other DroneCAN peripherals.")]),e._v(" "),r("li",[e._v("Setup is easier as you configure ESC numbering by manually spinning each motor.")]),e._v(" "),r("li",[e._v("It allows users to configure and update the firmware of all CAN-connected devices centrally through PX4.")])]),e._v(" "),r("h2",{attrs:{id:"supported-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported Hardware")]),e._v(" "),r("p",[e._v("Most common types of peripherals (sensors, ESCs, and servos) that are DroneCAN/UAVCAN v0 compliant are supported.")]),e._v(" "),r("p",[e._v("Supported hardware includes (this is not an exhaustive list):")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/dronecan/escs.html"}},[e._v("ESC/Motor controllers")])],1),e._v(" "),r("li",[e._v("Airspeed sensors\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/thiemar/airspeed",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thiemar airspeed sensor"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("GNSS receivers for GPS and GLONASS\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/dronecan/holybro_m8n_gps.html"}},[e._v("Holybro DroneCAN M8N GPS")])],1),e._v(" "),r("li",[r("a",{attrs:{href:"https://holybro.com/products/dronecan-m9n-gps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro DroneCAN M9N GPS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://holybro.com/products/dronecan-h-rtk-f9p-rover",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro DroneCAN H-RTK F9P Rover"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://holybro.com/products/dronecan-h-rtk-f9p-helical",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro DroneCAN H-RTK F9P Helical"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/dronecan/ark_gps.html"}},[e._v("ARK GPS")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/dronecan/ark_rtk_gps.html"}},[e._v("ARK RTK GPS")])],1),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[e._v("CubePilot Here3"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax GNSS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://doc.cuav.net/gps/neo-series-gnss/en/neo-v2-pro.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CUAV NEO v2 Pro GNSS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://doc.cuav.net/gps/neo-series-gnss/en/neo-3.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CUAV NEO 3 Pro GNSS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_cuav_c-rtk2.html"}},[e._v("CUAV C-RTK2 PPK/RTK GNSS")])],1)])]),e._v(" "),r("li",[e._v("Power monitors\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/dronecan/pomegranate_systems_pm.html"}},[e._v("Pomegranate Systems Power Module")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/dronecan/cuav_can_pmu.html"}},[e._v("CUAV CAN PMU Power Module")])],1)])]),e._v(" "),r("li",[e._v("Compass\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://holybro.com/products/dronecan-rm3100-compass",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro RM3100 Professional Grade Compass"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("Distance sensors\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/dronecan/ark_flow.html"}},[e._v("ARK Flow")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/dronecan/avanon_laser_interface.html"}},[e._v("Avionics Anonymous Laser Altimeter UAVCAN Interface")])],1)])]),e._v(" "),r("li",[e._v("Optical Flow\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/dronecan/ark_flow.html"}},[e._v("Ark Flow")])],1)])]),e._v(" "),r("li",[e._v("Generic CAN Node (enables use of I2C, SPI, UART sensors on the CAN bus).\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/dronecan/ark_cannode.html"}},[e._v("ARK CANnode")])],1)])])]),e._v(" "),r("h2",{attrs:{id:"hardware-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),r("p",[e._v("DroneCAN operates over a CAN network. DroneCAN hardware should be connected as described in "),r("RouterLink",{attrs:{to:"/ko/can/#wiring"}},[e._v("CAN > Wiring")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"node-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-id"}},[e._v("#")]),e._v(" Node ID")]),e._v(" "),r("p",[e._v("Every DroneCAN device must be configured with a "),r("em",[e._v("node id")]),e._v(" that is unique on the vehicle.")]),e._v(" "),r("p",[e._v("Most devices support dynamic node allocation (DNA) which allows PX4 to automatically configure the node ID of each detected peripheral on system startup. Consult the manufacturer documentation for details on whether your device supports DNA and how to enable it. Many devices will automatically switch to DNA if the node id is set to 0. PX4 will enable the built in allocation server if the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" parameter is > 1 (set to 2 or 3).")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("PX4 has a node ID, which can be configured using the [UAVCAN_NODE_ID](../advanced_config/parameter_reference.md#UAVCAN_NODE_ID) parameter. The parameter is set to 1 by default.")])]),e._v(" "),r("p",[e._v("Some devices don't support DNA. Additionally, in certain mission-critical scenarios, you might prefer to manually configure node IDs beforehand instead of relying on the dynamic allocation server. If you wish to disable the DNA completely, set "),r("code",[e._v("UAVCAN_ENABLE")]),e._v(" to "),r("code",[e._v("1")]),e._v(" and manually set each node ID to a unique value. If the DNA is still running and certain devices need to be manually configured, give these devices a value greater than the total number of DroneCAN devices to avoid clashes.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("At time of writing, PX4 does not run the node allocation server on the CAN2 port. This means that if you have a device that is "),r("em",[e._v("only")]),e._v(" connected to CAN2 (not redundantly to CAN1 and CAN2), you will need to manually configure its node ID.")])]),e._v(" "),r("h2",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),r("h3",{attrs:{id:"enabling-dronecan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enabling-dronecan"}},[e._v("#")]),e._v(" Enabling DroneCAN")]),e._v(" "),r("p",[e._v("To enable the DroneCAN driver, set the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" parameter:")],1),e._v(" "),r("ul",[r("li",[r("code",[e._v("0")]),e._v(": DroneCAN driver disabled")]),e._v(" "),r("li",[r("code",[e._v("1")]),e._v(": DroneCAN driver enabled for sensors, DNA server disabled")]),e._v(" "),r("li",[r("code",[e._v("2")]),e._v(": DroneCAN driver enabled for sensors, DNA server enabled")]),e._v(" "),r("li",[r("code",[e._v("3")]),e._v(": DroneCAN driver enabled for sensors and ESCs, DNA server enabled")])]),e._v(" "),r("p",[r("code",[e._v("2")]),e._v(" or "),r("code",[e._v("3")]),e._v(" are recommended, if DNA is supported.")]),e._v(" "),r("h3",{attrs:{id:"dronecan-sensor-subscriptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dronecan-sensor-subscriptions"}},[e._v("#")]),e._v(" DroneCAN Sensor Subscriptions")]),e._v(" "),r("p",[e._v("DroneCAN sensors are not enabled by default. To use a sensor you must subscribe to it using the associated sensor-specific "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#uavcan"}},[e._v("UAVCAN parameter")]),e._v(". These can be recognised from the prefix "),r("code",[e._v("UAVCAN_SUB_")])],1),e._v(" "),r("p",[e._v("The set of subscriptions (sensors) that you can enable is (in PX4 v1.14):")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_ASPD"}},[e._v("UAVCAN_SUB_ASPD")]),e._v(": Airspeed")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_BARO"}},[e._v("UAVCAN_SUB_BARO")]),e._v(": Barometer")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_BAT"}},[e._v("UAVCAN_SUB_BAT")]),e._v(": Battery monitor/Power module")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_BTN"}},[e._v("UAVCAN_SUB_BTN")]),e._v(": Button")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_DPRES"}},[e._v("UAVCAN_SUB_DPRES")]),e._v(": Differential pressure")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_FLOW"}},[e._v("UAVCAN_SUB_FLOW")]),e._v(": Optical flow")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_GPS"}},[e._v("UAVCAN_SUB_GPS")]),e._v(": GPS")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_HYGRO"}},[e._v("UAVCAN_SUB_HYGRO")]),e._v(": Hygrometer")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_ICE"}},[e._v("UAVCAN_SUB_ICE")]),e._v(": Internal combustion engine (ICE).")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_IMU"}},[e._v("UAVCAN_SUB_IMU")]),e._v(": IMU")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(": Magnetometer (compass)")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_RNG"}},[e._v("UAVCAN_SUB_RNG")]),e._v(": Range finder (distance sensor).")],1)]),e._v(" "),r("h4",{attrs:{id:"gps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps"}},[e._v("#")]),e._v(" GPS")]),e._v(" "),r("p",[e._v("DroneCAN parameters:")]),e._v(" "),r("ul",[r("li",[e._v("Enable "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_GPS"}},[e._v("UAVCAN_SUB_GPS")]),e._v(" (along with "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(").")],1),e._v(" "),r("li",[e._v("Enable "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(" if the GPS module has an inbuilt compass.")],1),e._v(" "),r("li",[e._v("Set "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CANNODE_TERM"}},[e._v("CANNODE_TERM")]),e._v(" to "),r("code",[e._v("1")]),e._v(" if this is that last node on the CAN bus.")],1)]),e._v(" "),r("p",[e._v("Other Parameters:")]),e._v(" "),r("ul",[r("li",[e._v("If the GPS is not positioned at the vehicle centre of gravity you can account for the offset using "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_POS_X"}},[e._v("EKF2_GPS_POS_X")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_POS_Y"}},[e._v("EKF2_GPS_POS_Y")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_POS_Z"}},[e._v("EKF2_GPS_POS_Z")]),e._v(".")],1),e._v(" "),r("li",[e._v("If the GPS module provides yaw information, you can enable GPS yaw fusion by setting bit 3 of "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(" to true.")],1)]),e._v(" "),r("h4",{attrs:{id:"barometer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#barometer"}},[e._v("#")]),e._v(" Barometer")]),e._v(" "),r("p",[e._v("DroneCAN parameters:")]),e._v(" "),r("ul",[r("li",[e._v("Enable "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_BARO"}},[e._v("UAVCAN_SUB_BARO")]),e._v(" (along with "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(").")],1)]),e._v(" "),r("h4",{attrs:{id:"compass"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compass"}},[e._v("#")]),e._v(" Compass")]),e._v(" "),r("p",[e._v("DroneCAN parameters:")]),e._v(" "),r("ul",[r("li",[e._v("Enable "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_MAG"}},[e._v("UAVCAN_SUB_MAG")]),e._v(" (along with "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(").")],1)]),e._v(" "),r("h4",{attrs:{id:"distance-sensor-range-finder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#distance-sensor-range-finder"}},[e._v("#")]),e._v(" Distance Sensor/Range Finder")]),e._v(" "),r("p",[e._v("DroneCAN parameters:")]),e._v(" "),r("ul",[r("li",[e._v("Enable "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_RNG"}},[e._v("UAVCAN_SUB_RNG")]),e._v(" (along with "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(").")],1),e._v(" "),r("li",[e._v("Set "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_RNG_MIN"}},[e._v("UAVCAN_RNG_MIN")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_RNG_MAX"}},[e._v("UAVCAN_RNG_MAX")]),e._v(", the minimum and maximum range of the distance sensors.")],1)]),e._v(" "),r("p",[e._v("Other parameters:")]),e._v(" "),r("ul",[r("li",[e._v("If the rangefinder is not positioned at the vehicle centre of gravity you can account for the offset using "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_X"}},[e._v("EKF2_RNG_POS_X")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_Y"}},[e._v("EKF2_RNG_POS_Y")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_Z"}},[e._v("EKF2_RNG_POS_Z")]),e._v(".")],1),e._v(" "),r("li",[e._v("Other "),r("code",[e._v("EKF2_RNG_*")]),e._v(" parameters may be relevant, in which case they should be documented with the specific rangefinder.")])]),e._v(" "),r("h4",{attrs:{id:"optical-flow-sensor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow-sensor"}},[e._v("#")]),e._v(" Optical Flow Sensor")]),e._v(" "),r("p",[e._v("DroneCAN parameters:")]),e._v(" "),r("ul",[r("li",[e._v("Enable "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_SUB_FLOW"}},[e._v("UAVCAN_SUB_FLOW")]),e._v(" (along with "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(").")],1)]),e._v(" "),r("p",[e._v("Other parameters:")]),e._v(" "),r("ul",[r("li",[e._v("Set "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_MINHGT"}},[e._v("SENS_FLOW_MINHGT")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_MAXHGT"}},[e._v("SENS_FLOW_MAXHGT")]),e._v(", the minimum and maximum height of the flow sensor.")],1),e._v(" "),r("li",[e._v("Set "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_FLOW_MAXR"}},[e._v("SENS_FLOW_MAXR")]),e._v(" the maximum angular flow rate of the sensor.")],1),e._v(" "),r("li",[e._v("Enable optical flow fusion by setting "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_CTRL"}},[e._v("EKF2_OF_CTRL")]),e._v(".")],1),e._v(" "),r("li",[e._v("To disable GPS aiding (optional), set "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(" to "),r("code",[e._v("0")]),e._v(".")],1),e._v(" "),r("li",[e._v("If the optical flow unit is not positioned at the vehicle centre of gravity you can account for the offset using "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_X"}},[e._v("EKF2_OF_POS_X")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_Y"}},[e._v("EKF2_OF_POS_Y")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_Z"}},[e._v("EKF2_OF_POS_Z")]),e._v(".")],1)]),e._v(" "),r("p",[e._v("Optical flow sensors require rangefinder data. However the rangefinder need not be part of the same module, and if not, may not be connected via DroneCAN. If the rangefinder is connected via DroneCAN (whether inbuilt or separate), you will also need to enable it as described in the "),r("a",{attrs:{href:"#distance-sensor-range-finder"}},[e._v("rangefinder section")]),e._v(" (above).")]),e._v(" "),r("h3",{attrs:{id:"esc-servos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esc-servos"}},[e._v("#")]),e._v(" ESC & Servos")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/dronecan/escs.html"}},[e._v("DroneCAN ESCs and servos")]),e._v(" require the "),r("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[e._v("motor order and servo outputs")]),e._v(" to be configured.")],1),e._v(" "),r("h3",{attrs:{id:"further-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-setup"}},[e._v("#")]),e._v(" Further Setup")]),e._v(" "),r("p",[e._v("Most DroneCAN sensors require no further setup, unless specifically noted in their device-specific documentation.")]),e._v(" "),r("h2",{attrs:{id:"firmware-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-update"}},[e._v("#")]),e._v(" Firmware Update")]),e._v(" "),r("p",[e._v("PX4 can upgrade device firmware over DroneCAN. To upgrade the device, all you need to do is copy the firmware binary into the root directory of the flight controller's SD card and reboot.")]),e._v(" "),r("p",[e._v("Upon boot the flight controller will automatically transfer the firmware onto the device and upgrade it. If successful, the firmware binary will be removed from the root directory and there will be a file named "),r("strong",[e._v("XX.bin")]),e._v(" in the "),r("strong",[e._v("/ufw")]),e._v(" directory of the SD card.")]),e._v(" "),r("h2",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p",[r("strong",[e._v("Q")]),e._v(": My DroneCAN devices aren't working.")]),e._v(" "),r("p",[r("strong",[e._v("A")]),e._v(": Check that the "),r("code",[e._v("UAVCAN_ENABLE")]),e._v(" parameter is set correctly. To see a list of devices/nodes that PX4 has detected on the CAN bus, open NSH (i.e. go to the QGroundControl MAVLink Console) and type "),r("code",[e._v("uavcan status")]),e._v(".")]),e._v(" "),r("hr"),e._v(" "),r("p",[r("strong",[e._v("Q")]),e._v(": The DNA server isn't giving out node IDs.")]),e._v(" "),r("p",[r("strong",[e._v("A")]),e._v(": PX4 requires an SD card to perform dynamic node allocation. Make sure you have (a working) one inserted and reboot.")]),e._v(" "),r("hr"),e._v(" "),r("p",[r("strong",[e._v("Q")]),e._v(": The motors aren't spinning when armed.")]),e._v(" "),r("p",[r("strong",[e._v("A")]),e._v(": Make sure "),r("code",[e._v("UAVCAN_ENABLE")]),e._v(" is set to "),r("code",[e._v("3")]),e._v(" to enable DroneCAN ESC output.")]),e._v(" "),r("hr"),e._v(" "),r("p",[r("strong",[e._v("Q")]),e._v(": The motors don't spin until throttle is increased.")]),e._v(" "),r("p",[r("strong",[e._v("A")]),e._v(": Use "),r("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-testing"}},[e._v("Acutator > Actuator Testing")]),e._v(" to confirm that the motor outputs are set to the correct minimum values.")],1),e._v(" "),r("h2",{attrs:{id:"useful-links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[e._v("#")]),e._v(" Useful Links")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://dronecan.github.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Home Page"),r("OutboundLink")],1),e._v(" (dronecan.github.io)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dronecan.github.io/Specification",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Specification"),r("OutboundLink")],1),e._v(" (dronecan.github.io)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dronecan.github.io/Implementations/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Implementations"),r("OutboundLink")],1),e._v(" (dronecan.github.io)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://kb.zubax.com/pages/viewpage.action?pageId=2195476",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cyphal/CAN Device Interconnection"),r("OutboundLink")],1),e._v(" (kb.zubax.com)")])])])}),[],!1,null,null,null);t.default=a.exports}}]);