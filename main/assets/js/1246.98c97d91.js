(window.webpackJsonp=window.webpackJsonp||[]).push([[1246],{2306:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"serial-port-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-configuration"}},[e._v("#")]),e._v(" Serial Port Configuration")]),e._v(" "),r("p",[e._v("Many serial (UART) ports on a Pixhawk board can be fully configured via parameters: e.g.: "),r("code",[e._v("GPS1")]),e._v(", "),r("code",[e._v("TELEM1")]),e._v(", "),r("code",[e._v("TELEM2")]),e._v(", "),r("code",[e._v("TELEM4")]),e._v(" ("),r("code",[e._v("UART+I2C")]),e._v(").")]),e._v(" "),r("p",[e._v("The configuration makes it easy to (for example):")]),e._v(" "),r("ul",[r("li",[e._v("change the baudrate on a port.")]),e._v(" "),r("li",[e._v("run MAVLink on a different port, or change the streamed messages.")]),e._v(" "),r("li",[e._v("setup dual GPS.")]),e._v(" "),r("li",[e._v("enable sensors that run on a serial port, such as some "),r("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[e._v("distance sensors")]),e._v(".")],1)]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("Some ports cannot be configured because they are used for a very specific purpose like RC input or the system console ("),r("code",[e._v("SERIAL 5")]),e._v(").")])]),e._v(" "),r("p",[r("span",{attrs:{id:"default_port_mapping"}})]),e._v(" "),r("h2",{attrs:{id:"pre-configured-ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pre-configured-ports"}},[e._v("#")]),e._v(" Pre-configured Ports")]),e._v(" "),r("p",[e._v("The following functions are typically mapped to the same specific serial ports on all boards, and are hence mapped by default:")]),e._v(" "),r("ul",[r("li",[e._v("MAVLink is mapped to the "),r("code",[e._v("TELEM 1")]),e._v(" port with baudrate 57600 (for a "),r("RouterLink",{attrs:{to:"/en/telemetry/"}},[e._v("telemetry module")]),e._v(").")],1),e._v(" "),r("li",[e._v("GPS 1 ("),r("RouterLink",{attrs:{to:"/en/modules/modules_driver.html#gps"}},[e._v("gps driver")]),e._v(") is mapped to the "),r("code",[e._v("GPS 1")]),e._v(" port with a baudrate "),r("em",[e._v("Auto")]),e._v(" (with this setting a GPS will automatically detect the baudrate - except for the Trimble MB-Two, which requires 115200 baudrate).")],1),e._v(" "),r("li",[e._v("MAVLink is mapped to the Ethernet port using "),r("code",[e._v("MAV_2_CONFIG")]),e._v(" on Pixhawk devices that have an Ethernet port.")])]),e._v(" "),r("p",[e._v("All other ports have no assigned functions by default (are disabled).")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("The port mappings above can be disabled by setting "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_0_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[e._v("GPS_1_CONFIG")]),e._v(", and "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[e._v("MAV_2_CONFIG")]),e._v(" to "),r("em",[e._v("Disabled")]),e._v(", respectively.")],1)]),e._v(" "),r("h2",{attrs:{id:"how-to-configure-a-port"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-a-port"}},[e._v("#")]),e._v(" How to Configure a Port")]),e._v(" "),r("p",[e._v("All the serial drivers/ports are configured in the same way:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Set the configuration parameter for the service/peripheral to the port it will use.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("Configuration parameter names follow the pattern "),r("code",[e._v("*_CONFIG")]),e._v(" or "),r("code",[e._v("*_CFG")]),e._v(" ("),r("em",[e._v("QGroundControl")]),e._v(" only displays the parameters for services/drivers that are present in firmware).")]),e._v(" "),r("p",[e._v("At time of writing the current set is: "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[e._v("GPS_1_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[e._v("GPS_2_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#ISBD_CONFIG"}},[e._v("ISBD_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_0_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[e._v("MAV_1_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[e._v("MAV_2_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MODAL_IO_CONFIG"}},[e._v("MODAL_IO_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MSP_OSD_CONFIG"}},[e._v("MSP_OSD_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_PORT_CONFIG"}},[e._v("RC_PORT_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TEL_FRSKY_CONFIG"}},[e._v("TEL_FRSKY_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TEL_HOTT_CONFIG"}},[e._v("TEL_HOTT_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#XRCE_DDS_CFG"}},[e._v("XRCE_DDS_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_CM8JL65_CFG"}},[e._v("SENS_CM8JL65_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_LEDDAR1_CFG"}},[e._v("SENS_LEDDAR1_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_SF0X_CFG"}},[e._v("SENS_SF0X_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_TFLOW_CFG"}},[e._v("SENS_TFLOW_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_TFMINI_CFG"}},[e._v("SENS_TFMINI_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_ULAND_CFG"}},[e._v("SENS_ULAND_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_VN_CFG"}},[e._v("SENS_VN_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_CRSF_PRT_CFG"}},[e._v("RC_CRSF_PRT_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MXS_SER_CFG"}},[e._v("MXS_SER_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UWB_PORT_CFG"}},[e._v("UWB_PORT_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#DSHOT_TEL_CFG"}},[e._v("DSHOT_TEL_CFG")])],1)])]),e._v(" "),r("li",[r("p",[e._v("Reboot the vehicle in order to make the additional configuration parameters visible.")])]),e._v(" "),r("li",[r("p",[e._v("Set the baud rate parameter for the selected port to the desired value.")])]),e._v(" "),r("li",[r("p",[e._v("Configure module-specific parameters (i.e. MAVLink streams and data rate configuration).")])])]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/en/gps_compass/#dual_gps"}},[e._v("GPS/Compass > Secondary GPS")]),e._v(" section provides a practical example of how to configure a port in "),r("em",[e._v("QGroundControl")]),e._v(" (it shows how to use "),r("code",[e._v("GPS_2_CONFIG")]),e._v(" to run a secondary GPS on the "),r("code",[e._v("TELEM 2")]),e._v(" port).")],1),e._v(" "),r("h2",{attrs:{id:"deconflicting-ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deconflicting-ports"}},[e._v("#")]),e._v(" Deconflicting Ports")]),e._v(" "),r("p",[e._v("Port conflicts are handled by system startup, which ensures that at most one service is run on a specific port.\nFor example, it is not possible to start a MAVLink instance on a specific serial device, and then launch a driver that uses the same serial device.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("At time of writing there is no user feedback about conflicting ports.")])]),e._v(" "),r("h2",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p",[r("a",{attrs:{id:"parameter_not_in_firmware"}})]),e._v(" "),r("h3",{attrs:{id:"configuration-parameter-missing-from-qgroundcontrol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameter-missing-from-qgroundcontrol"}},[e._v("#")]),e._v(" Configuration Parameter Missing from "),r("em",[e._v("QGroundControl")])]),e._v(" "),r("p",[r("em",[e._v("QGroundControl")]),e._v(" only displays the parameters for services/drivers that are present in firmware.\nIf a parameter is missing, then you may need to add it in firmware.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("PX4 firmware includes most drivers by default on "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk-series")]),e._v(" boards.\nFlash-limited boards may comment out/omit the driver (at time of writing this only affects boards based on FMUv2).")],1)]),e._v(" "),r("p",[e._v("You can include the missing driver in firmware by enabling the driver in the "),r("strong",[e._v("default.px4board")]),e._v(" config file that corresponds to the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/boards/px4",target:"_blank",rel:"noopener noreferrer"}},[e._v("board"),r("OutboundLink")],1),e._v(" you want to build for.\nFor example, to enable the SRF02 driver, you would a the following line to the px4board.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("CONFIG_DRIVERS_DISTANCE_SENSOR_SRF02=y\n")])])]),r("p",[e._v("An easier method would be using boardconfig which launches a GUI where you can easily search, disable and enable modules.\nTo launch boardconfig type "),r("code",[e._v("make <vendor>_<board>_<label> boardconfig")])]),e._v(" "),r("p",[e._v("You will then need to build the firmware for your platform, as described in "),r("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[e._v("Building PX4 Software")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripherals (OSD/GCS/Companion Computers/etc.)")])],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);