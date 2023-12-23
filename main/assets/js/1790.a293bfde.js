(window.webpackJsonp=window.webpackJsonp||[]).push([[1790],{3234:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"직렬-포트-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#직렬-포트-설정"}},[e._v("#")]),e._v(" 직렬 포트 설정")]),e._v(" "),r("p",[e._v("PX4 defines "),r("a",{attrs:{href:"#default-serial-port-configuration"}},[e._v("default functions")]),e._v(" for many flight controller ports, which is why you can plug a GPS module into the port labelled "),r("code",[e._v("GPS 1")]),e._v(", an RC receiver into "),r("code",[e._v("RC IN")]),e._v(", or a telemetry module into "),r("code",[e._v("TELEM 1")]),e._v(", and generally they will just work.")]),e._v(" "),r("p",[e._v("The functions assigned to ports are fully configurable using appropriate parameters (in most cases). You can assign any unused port to any function, or reassign a port to use it for something else.")]),e._v(" "),r("p",[e._v("설정을 통하여 아래의 작업들이 용이해집니다.(예 😃")]),e._v(" "),r("ul",[r("li",[e._v("Run MAVLink on a different port, change the streamed messages, or switch a TELEM port to use ROS 2/XRCE-DDS.")]),e._v(" "),r("li",[e._v("Change the baud rate on a port or set the UDP port")]),e._v(" "),r("li",[e._v("Setup dual GPS.")]),e._v(" "),r("li",[e._v("Enable sensors that run on a serial port, such as some "),r("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[e._v("distance sensors")]),e._v(".")],1)]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("ul",[r("li",[e._v("Some ports cannot be configured because they are used for a very specific purpose such as the system console.")]),e._v(" "),r("li",[e._v("The mapping of specific devices to port names on the flight controller is explained in "),r("RouterLink",{attrs:{to:"/ko/hardware/serial_port_mapping.html"}},[e._v("Serial Port Mapping")]),e._v(".")],1)])]),e._v(" "),r("h2",{attrs:{id:"configuration-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameters"}},[e._v("#")]),e._v(" Configuration Parameters")]),e._v(" "),r("p",[e._v("The serial port configuration parameters allow you to assign a particular function or support for particular hardware to a particular port. These parameters follow the naming pattern "),r("code",[e._v("*_CONFIG")]),e._v(" or "),r("code",[e._v("*_CFG")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[r("em",[e._v("QGroundControl")]),e._v(" only displays the parameters for services/drivers that are present in firmware.")])]),e._v(" "),r("p",[e._v("At time of writing the current set is:")]),e._v(" "),r("ul",[r("li",[e._v("GPS configuration: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[e._v("GPS_1_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[e._v("GPS_2_CONFIG")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_features/satcom_roadblock.html"}},[e._v("Iridium Satellite radio")]),e._v(": "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ISBD_CONFIG"}},[e._v("ISBD_CONFIG")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Ports")]),e._v(": "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_0_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[e._v("MAV_1_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[e._v("MAV_2_CONFIG")])],1),e._v(" "),r("li",[e._v("Modal IO ESC: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MODAL_IO_CONFIG"}},[e._v("MODAL_IO_CONFIG")])],1),e._v(" "),r("li",[e._v("MSP OSD: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MSP_OSD_CONFIG"}},[e._v("MSP_OSD_CONFIG")])],1),e._v(" "),r("li",[e._v("RC Port: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_PORT_CONFIG"}},[e._v("RC_PORT_CONFIG")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/peripherals/frsky_telemetry.html"}},[e._v("FrSky Telemetry")]),e._v(": "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TEL_FRSKY_CONFIG"}},[e._v("TEL_FRSKY_CONFIG")])],1),e._v(" "),r("li",[e._v("HoTT Telemetry: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TEL_HOTT_CONFIG"}},[e._v("TEL_HOTT_CONFIG")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/middleware/uxrce_dds.html"}},[e._v("uXRCE-DDS")]),e._v(" port: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UXRCE_DDS_CFG"}},[e._v("UXRCE_DDS_CFG")]),e._v(",")],1),e._v(" "),r("li",[e._v("Sensors (optical flow, distance sensors): "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_CM8JL65_CFG"}},[e._v("SENS_CM8JL65_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_LEDDAR1_CFG"}},[e._v("SENS_LEDDAR1_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_SF0X_CFG"}},[e._v("SENS_SF0X_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_TFLOW_CFG"}},[e._v("SENS_TFLOW_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_TFMINI_CFG"}},[e._v("SENS_TFMINI_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_ULAND_CFG"}},[e._v("SENS_ULAND_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_VN_CFG"}},[e._v("SENS_VN_CFG")]),e._v(",")],1),e._v(" "),r("li",[e._v("CRSF RC Input Driver: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_CRSF_PRT_CFG"}},[e._v("RC_CRSF_PRT_CFG")])],1),e._v(" "),r("li",[e._v("Sagetech MXS: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MXS_SER_CFG"}},[e._v("MXS_SER_CFG")])],1),e._v(" "),r("li",[e._v("Ultrawideband position sensor: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UWB_PORT_CFG"}},[e._v("UWB_PORT_CFG")])],1),e._v(" "),r("li",[e._v("DShot driver: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#DSHOT_TEL_CFG"}},[e._v("DSHOT_TEL_CFG")])],1)]),e._v(" "),r("p",[e._v("Some functions/features may define additional configuration parameters, which will follow a similar naming pattern to the port configuration prefix. For example, "),r("code",[e._v("MAV_0_CONFIG")]),e._v(" enables MAVLink on a particular port, but you may also need to set "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_FLOW_CTRL"}},[e._v("MAV_0_FLOW_CTRL")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_FLOW_CTRL"}},[e._v("MAV_0_FORWARD")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[e._v("MAV_0_MODE")]),e._v(" and so on.")],1),e._v(" "),r("h2",{attrs:{id:"포트를-설정-방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#포트를-설정-방법"}},[e._v("#")]),e._v(" 포트를 설정 방법")]),e._v(" "),r("p",[e._v("모든 직렬 드라이버와 포트는 동일한 방식으로 설정합니다.")]),e._v(" "),r("ol",[r("li",[e._v("서비스와 주변기기에 대한 매개변수를 사용할 포트로 설정하십시오.")]),e._v(" "),r("li",[e._v("추가 설정 매개변수를 표시하기 위하여 기체를 재부팅합니다.")]),e._v(" "),r("li",[e._v("선택한 포트의 전송속도 매개변수를 설정합니다.")]),e._v(" "),r("li",[e._v("Configure module-specific parameters (i.e. 모듈별 매개변수를 설정합니다(예 : MAVLink 스트림 및 데이터 속도 설정).")])]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/ko/gps_compass/#dual_gps"}},[e._v("GPS/Compass > Secondary GPS")]),e._v(" section provides a practical example of how to configure a port in "),r("em",[e._v("QGroundControl")]),e._v(" (it shows how to use "),r("code",[e._v("GPS_2_CONFIG")]),e._v(" to run a secondary GPS on the "),r("code",[e._v("TELEM 2")]),e._v(" port).")],1),e._v(" "),r("p",[e._v("Similarly "),r("RouterLink",{attrs:{to:"/ko/advanced_config/ethernet_setup.html#px4-mavlink-serial-port-configuration"}},[e._v("PX4 Ethernet Setup > PX4 MAVLink Serial Port Configuration")]),e._v(" explains the setup for Ethernet serial ports, and "),r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripherals (OSD/GCS/Companion Computers/etc.)")]),e._v(" explains the configuration for MAVLink serial ports.")],1),e._v(" "),r("h2",{attrs:{id:"deconflicting-ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deconflicting-ports"}},[e._v("#")]),e._v(" Deconflicting Ports")]),e._v(" "),r("p",[e._v("Port conflicts are handled by system startup, which ensures that at most one service is run on a specific port. For example, it is not possible to start a MAVLink instance on a specific serial device, and then launch a driver that uses the same serial device.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("이 글을 쓰는 시점에는 충돌하는 포트에 관련된 사용자 피드백은 없습니다.")])]),e._v(" "),r("p",[r("a",{attrs:{id:"default_port_mapping"}})]),e._v(" "),r("h2",{attrs:{id:"default-serial-port-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#default-serial-port-configuration"}},[e._v("#")]),e._v(" Default Serial Port Configuration")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("These port mappings can be disabled by setting the associated configuration parameter to "),r("em",[e._v("Disabled")]),e._v(".")])]),e._v(" "),r("p",[e._v("The following ports are commonly mapped to specific functions on all boards:")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("GPS 1")]),e._v(" is configured as a GPS port (using "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[e._v("GPS_1_CONFIG")]),e._v(").")],1),e._v(" "),r("p",[e._v("This maps the "),r("RouterLink",{attrs:{to:"/ko/modules/modules_driver.html#gps"}},[e._v("gps driver")]),e._v(" to the port with a baud rate of "),r("em",[e._v("Auto")]),e._v(" (with this setting a GPS will automatically detect the baudrate - except for the Trimble MB-Two, which requires 115200 baud rate).")],1)]),e._v(" "),r("li",[r("p",[r("code",[e._v("RC IN")]),e._v(" is configured as an RC input (using "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_PORT_CONFIG"}},[e._v("RC_PORT_CONFIG")]),e._v(").")],1)]),e._v(" "),r("li",[r("p",[r("code",[e._v("TELEM 1")]),e._v(" is configured as a MAVLink serial port suitable for connection to a GCS via a "),r("RouterLink",{attrs:{to:"/ko/telemetry/"}},[e._v("telemetry module")]),e._v(".")],1),e._v(" "),r("p",[e._v("The configuration uses "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_0_CONFIG")]),e._v(" to set the port, "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_RATE"}},[e._v("MAV_0_RATE")]),e._v(" to set the baud rate to 57600, and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_MODE"}},[e._v("MAV_0_MODE")]),e._v(' to set the messages streamed to "Normal". For more information see: '),r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripherals (OSD/GCS/Companion Computers/etc.)")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[r("code",[e._v("TELEM 2")]),e._v(" is configured by default as a MAVLink serial port suitable for connection to an Onboard/Companion computer via a wired connection.")]),e._v(" "),r("p",[e._v("The configuration uses "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[e._v("MAV_1_CONFIG")]),e._v(" to set the port, "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_RATE"}},[e._v("MAV_1_RATE")]),e._v(" to set the baud rate, and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_MODE"}},[e._v("MAV_1_MODE")]),e._v(' to set the messages streamed to "Onboard". For more information see: '),r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripherals (OSD/GCS/Companion Computers/etc.)")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[r("code",[e._v("Ethernet")]),e._v(" is mapped as a MAVLink port on Pixhawk devices that have an Ethernet port.")]),e._v(" "),r("p",[e._v("The configuration uses "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[e._v("MAV_2_CONFIG")]),e._v(" and appropriate settings for the UDP port etc. For more information see "),r("RouterLink",{attrs:{to:"/ko/advanced_config/ethernet_setup.html#px4-mavlink-serial-port-configuration"}},[e._v("PX4 Ethernet Setup > PX4 MAVLink Serial Port Configuration")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripherals (OSD/GCS/Companion Computers/etc.)")]),e._v(".")],1)])]),e._v(" "),r("p",[e._v("Other ports generally have no assigned functions by default (are disabled).")]),e._v(" "),r("h2",{attrs:{id:"문제-해결"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[e._v("#")]),e._v(" 문제 해결")]),e._v(" "),r("p",[r("a",{attrs:{id:"parameter_not_in_firmware"}})]),e._v(" "),r("h3",{attrs:{id:"configuration-parameter-missing-from-qgroundcontrol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameter-missing-from-qgroundcontrol"}},[e._v("#")]),e._v(" Configuration Parameter Missing from "),r("em",[e._v("QGroundControl")])]),e._v(" "),r("p",[r("em",[e._v("QGroundControl")]),e._v(" only displays the parameters for services/drivers that are present in firmware. 펌웨어에 누락된 매개변수를 추가할 수 있습니다.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("PX4 펌웨어는 기본적으로 [Pixhawk 시리즈](../flight_controller/pixhawk_series.md) 보드에 드라이버를 대부분 포함합니다. 플래시 제한 보드는 드라이버를 주석 처리하거나 생략할 수 있습니다(작성 시점에는 FMUv2 기반 보드에만 영향을 미침).")])]),e._v(" "),r("p",[e._v("You can include the missing driver in firmware by enabling the driver in the "),r("strong",[e._v("default.px4board")]),e._v(" config file that corresponds to the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/px4",target:"_blank",rel:"noopener noreferrer"}},[e._v("board"),r("OutboundLink")],1),e._v(" you want to build for. For example, to enable the SRF02 driver, you would a the following line to the px4board.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("CONFIG_DRIVERS_DISTANCE_SENSOR_SRF02=y\n")])])]),r("p",[e._v("An easier method would be using boardconfig which launches a GUI where you can easily search, disable and enable modules. To launch boardconfig type:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("make <vendor>_<board>_<label> boardconfig\n")])])]),r("p",[e._v("You will then need to build the firmware for your platform, as described in "),r("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[e._v("Building PX4 Software")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[e._v("#")]),e._v(" 추가 정보")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink 주변 장치(OSD/GCS/보조 컴퓨터 등)")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/ethernet_setup.html#px4-mavlink-serial-port-configuration"}},[e._v("PX4 Ethernet Setup > PX4 MAVLink Serial Port Configuration")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/hardware/serial_port_mapping.html"}},[e._v("Serial Port Mapping")])],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);