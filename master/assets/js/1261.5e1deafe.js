(window.webpackJsonp=window.webpackJsonp||[]).push([[1261],{2628:function(e,t,r){"use strict";r.r(t);var a=r(18),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"串口配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#串口配置"}},[e._v("#")]),e._v(" 串口配置")]),e._v(" "),r("p",[e._v("Many serial (UART) ports on a Pixhawk board can be fully configured via parameters: e.g.: "),r("code",[e._v("GPS1")]),e._v(", "),r("code",[e._v("TELEM1")]),e._v(", "),r("code",[e._v("TELEM2")]),e._v(", "),r("code",[e._v("TELEM4")]),e._v(" ("),r("code",[e._v("UART+I2C")]),e._v(").")]),e._v(" "),r("p",[e._v("通过配置，可以轻松地(例如)：")]),e._v(" "),r("ul",[r("li",[e._v("更改端口上的波特率")]),e._v(" "),r("li",[e._v("在其他端口上运行 MAVLink ，或更改流消息")]),e._v(" "),r("li",[e._v("设置双 GPS")]),e._v(" "),r("li",[e._v("启用在串口上运行的传感器，例如某些 "),r("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[e._v("距离传感器")]),e._v(" 。")],1)]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("Some ports cannot be configured because they are used for a very specific purpose like RC input or the system console ("),r("code",[e._v("SERIAL 5")]),e._v(").")])]),e._v(" "),r("p",[r("span",{attrs:{id:"default_port_mapping"}})]),e._v(" "),r("h2",{attrs:{id:"端口预配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#端口预配置"}},[e._v("#")]),e._v(" 端口预配置")]),e._v(" "),r("p",[e._v("The following functions are typically mapped to the same specific serial ports on all boards, and are hence mapped by default:")]),e._v(" "),r("ul",[r("li",[e._v("MAVLink 被映射到 "),r("code",[e._v("Telem 1")]),e._v(" 端口，端口的波特率为 57600 (对于"),r("RouterLink",{attrs:{to:"/zh/telemetry/"}},[e._v("遥测模块")]),e._v(")。")],1),e._v(" "),r("li",[e._v("GPS 1 ("),r("RouterLink",{attrs:{to:"/zh/modules/modules_driver.html#gps"}},[e._v("gps driver")]),e._v(") is mapped to the "),r("code",[e._v("GPS 1")]),e._v(" port with a baudrate "),r("em",[e._v("Auto")]),e._v(" (with this setting a GPS will automatically detect the baudrate - except for the Trimble MB-Two, which requires 115200 baudrate).")],1)]),e._v(" "),r("p",[e._v("All other ports have no assigned functions by default (are disabled).")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("The ports mappings above can be disabled by setting "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_0_CONFIG")]),e._v(" and "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[e._v("GPS_1_CONFIG")]),e._v(" to "),r("em",[e._v("Disabled")]),e._v(", respectively.")],1)]),e._v(" "),r("h2",{attrs:{id:"如何配置端口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何配置端口"}},[e._v("#")]),e._v(" 如何配置端口")]),e._v(" "),r("p",[e._v("All the serial drivers/ports are configured in the same way:")]),e._v(" "),r("ol",[r("li",[e._v("Set the configuration parameter for the service/peripheral to the port it will use.")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("Configuration parameter names follow the pattern "),r("code",[e._v("*_CONFIG")]),e._v(" or "),r("code",[e._v("*_CFG")]),e._v(" ("),r("em",[e._v("QGroundControl")]),e._v(" only displays the parameters for services/drivers that are present in firmware). At time of writing the current set is: "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[e._v("GPS_1_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[e._v("GPS_2_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#ISBD_CONFIG"}},[e._v("ISBD_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_0_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[e._v("MAV_1_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[e._v("MAV_2_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTPS_CONFIG"}},[e._v("RTPS_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTPS_MAV_CONFIG"}},[e._v("RTPS_MAV_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TEL_FRSKY_CONFIG"}},[e._v("TEL_FRSKY_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TEL_HOTT_CONFIG"}},[e._v("TEL_HOTT_CONFIG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_LEDDAR1_CFG"}},[e._v("SENS_LEDDAR1_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_SF0X_CFG"}},[e._v("SENS_SF0X_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_TFMINI_CFG"}},[e._v("SENS_TFMINI_CFG")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_ULAND_CFG"}},[e._v("SENS_ULAND_CFG")]),e._v(".")],1)]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("Reboot the vehicle in order to make the additional configuration parameters visible.")])]),e._v(" "),r("li",[r("p",[e._v("将所选端口的波特率设置为所需值。")])]),e._v(" "),r("li",[r("p",[e._v("配置特定于模块的参数 (如 MAVLink 流和数据速率配置)。")])])]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/zh/gps_compass/#dual_gps"}},[e._v("GPS/Compass > Secondary GPS")]),e._v(" section provides a practical example of how to configure a port in "),r("em",[e._v("QGroundControl")]),e._v(" (it shows how to use "),r("code",[e._v("GPS_2_CONFIG")]),e._v(" to run a secondary GPS on the "),r("code",[e._v("TELEM 2")]),e._v(" port).")],1),e._v(" "),r("h2",{attrs:{id:"处理端口冲突"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#处理端口冲突"}},[e._v("#")]),e._v(" 处理端口冲突")]),e._v(" "),r("p",[e._v("Port conflicts are handled by system startup, which ensures that at most one service is run on a specific port.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("p",[e._v("At time of writing there is no user feedback about conflicting ports.")])]),e._v(" "),r("h2",{attrs:{id:"故障处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障处理"}},[e._v("#")]),e._v(" 故障处理")]),e._v(" "),r("p",[r("span",{attrs:{id:"parameter_not_in_firmware"}})]),e._v(" "),r("h3",{attrs:{id:"qgroundcontrol-中缺少的配置参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-中缺少的配置参数"}},[e._v("#")]),e._v(" "),r("em",[e._v("QGroundControl")]),e._v(" 中缺少的配置参数")]),e._v(" "),r("p",[r("em",[e._v("QGroundControl")]),e._v(" only displays the parameters for services/drivers that are present in firmware. If a parameter is missing, then you may need to add it in firmware.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("PX4 firmware includes most drivers by default on [Pixhawk-series](../flight_controller/pixhawk_series.md) boards. Flash-limited boards may comment out/omit the driver (at time of writing this only affects boards based on FMUv2).")])]),e._v(" "),r("p",[e._v("You can include the missing driver in firmware by uncommenting (or adding) the driver in the "),r("strong",[e._v("default.cmake")]),e._v(" config file that corresponds to the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/px4",target:"_blank",rel:"noopener noreferrer"}},[e._v("board"),r("OutboundLink")],1),e._v(" you want to build for. For example, to enable the sf0x driver, you would remove the "),r("code",[e._v("#")]),e._v(" at the beginning of the line below.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("#distance_sensor/sf0x\n")])])]),r("p",[e._v("You will then need to build the firmware for your platform, as described in "),r("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[e._v("Building PX4 Software")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"更多信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[e._v("#")]),e._v(" 更多信息")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink 外设 (OSD/GCS/机载计算机/等等)")])],1)])])}),[],!1,null,null,null);t.default=_.exports}}]);