(window.webpackJsonp=window.webpackJsonp||[]).push([[2082],{3848:function(a,t,e){"use strict";e.r(t);var s=e(19),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"modules-reference-distance-sensor-driver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-distance-sensor-driver"}},[a._v("#")]),a._v(" Modules Reference: Distance Sensor (Driver)")]),a._v(" "),e("h2",{attrs:{id:"afbrs50"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#afbrs50"}},[a._v("#")]),a._v(" afbrs50")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/broadcom/afbrs50",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/broadcom/afbrs50"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[a._v("#")]),a._v(" 说明")]),a._v(" "),e("p",[a._v("Driver for the Broadcom AFBRS50.")]),a._v(" "),e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),e("p",[a._v("Attempt to start driver on a specified serial device.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("afbrs50 start\n")])])]),e("p",[a._v("设置/使用 信息： https://docs.px4.io/master/en/sensor/leddar_one.html")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("afbrs50 stop\n")])])]),e("p",[e("a",{attrs:{id:"afbrs50_usage"}})]),a._v(" "),e("h3",{attrs:{id:"用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[a._v("#")]),a._v(" 用法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("afbrs50 <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-r <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   test          Test driver\n\n   stop          Stop driver\n")])])]),e("h2",{attrs:{id:"gy-us42"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gy-us42"}},[a._v("#")]),a._v(" gy_us42")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/gy_us42",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/gy_us42"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{id:"gy_us42_usage"}})]),a._v(" "),e("h3",{attrs:{id:"参数描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数描述"}},[a._v("#")]),a._v(" 参数描述")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("gy_us42 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"leddar-one"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#leddar-one"}},[a._v("#")]),a._v(" leddar_one")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/leddar_one",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/leddar_one"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[a._v("#")]),a._v(" 描述")]),a._v(" "),e("p",[a._v("Serial bus driver for the LeddarOne LiDAR.")]),a._v(" "),e("p",[a._v("针对 Lightware SFxx 系列 LIDAR 测距仪的 I2C 总线驱动： SF10/a, SF10/b, SF10/c, SF11/c, SF/LW20。")]),a._v(" "),e("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/leddar_one.html")]),a._v(" "),e("h3",{attrs:{id:"参数描述-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-2"}},[a._v("#")]),a._v(" 参数描述")]),a._v(" "),e("p",[a._v("Attempt to start driver on a specified serial device.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("leddar_one start -d /dev/ttyS1\n")])])]),e("p",[a._v("Stop driver")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("leddar_one stop\n")])])]),e("p",[e("a",{attrs:{id:"leddar_one_usage"}})]),a._v(" "),e("h3",{attrs:{id:"示例-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("leddar_one <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-r <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop          Stop driver\n")])])]),e("h2",{attrs:{id:"lightware-laser-i2c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lightware-laser-i2c"}},[a._v("#")]),a._v(" lightware_laser_i2c")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/lightware_laser_i2c",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/lightware_laser_i2c"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"用法-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-2"}},[a._v("#")]),a._v(" 用法")]),a._v(" "),e("p",[a._v("设置/使用 信息： https://docs.px4.io/master/en/sensor/sfxx_lidar.html")]),a._v(" "),e("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/sfxx_lidar.html")]),a._v(" "),e("p",[e("a",{attrs:{id:"lightware_laser_i2c_usage"}})]),a._v(" "),e("h3",{attrs:{id:"参数描述-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-3"}},[a._v("#")]),a._v(" 参数描述")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lightware_laser_i2c <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 102\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"lightware-laser-serial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lightware-laser-serial"}},[a._v("#")]),a._v(" lightware_laser_serial")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/lightware_laser_serial",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/lightware_laser_serial"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"用法-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-3"}},[a._v("#")]),a._v(" 用法")]),a._v(" "),e("p",[a._v("Serial bus driver for the LightWare SF02/F, SF10/a, SF10/b, SF10/c, SF11/c Laser rangefinders.")]),a._v(" "),e("p",[a._v("Most boards are configured to enable/start the driver on a specified UART using the SENS_SF0X_CFG parameter.")]),a._v(" "),e("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/sfxx_lidar.html")]),a._v(" "),e("h3",{attrs:{id:"用法-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-4"}},[a._v("#")]),a._v(" 用法")]),a._v(" "),e("p",[a._v("设置/使用 信息： https://docs.px4.io/master/en/sensor/lidar_lite.html")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lightware_laser_serial start -d /dev/ttyS1\n")])])]),e("p",[a._v("Stop driver")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lightware_laser_serial stop\n")])])]),e("p",[e("a",{attrs:{id:"lightware_laser_serial_usage"}})]),a._v(" "),e("h3",{attrs:{id:"用法-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-5"}},[a._v("#")]),a._v(" 用法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lightware_laser_serial <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop          Stop driver\n")])])]),e("h2",{attrs:{id:"lightware-sf45-serial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lightware-sf45-serial"}},[a._v("#")]),a._v(" lightware_sf45_serial")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/lightware_sf45_serial",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/lightware_sf45_serial"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"示例-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),e("p",[a._v("Serial bus driver for the Lightware SF45/b Laser rangefinder.")]),a._v(" "),e("p",[a._v("Setup/usage information: https://docs.px4.io/master/en/sensor/sfxx_lidar.html")]),a._v(" "),e("h3",{attrs:{id:"描述-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[a._v("#")]),a._v(" 描述")]),a._v(" "),e("p",[a._v("Attempt to start driver on a specified serial device.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lightware_sf45_serial start -d /dev/ttyS1\n")])])]),e("p",[a._v("停止驱动程序的运行")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lightware_sf45_serial stop\n")])])]),e("p",[e("a",{attrs:{id:"lightware_sf45_serial_usage"}})]),a._v(" "),e("h3",{attrs:{id:"实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[a._v("#")]),a._v(" 实现")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lightware_sf45_serial <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     -R <val>    Sensor rotation - downward facing by default\n\n   stop          Stop driver\n")])])]),e("h2",{attrs:{id:"ll40ls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ll40ls"}},[a._v("#")]),a._v(" ll40ls")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/ll40ls",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/ll40ls"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),e("p",[a._v("源码："),e("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/pga460",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/pga460"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("超声笔测距仪驱动，负责处理与设备的用心并通过 uORB 将距离信息发布出去。")]),a._v(" "),e("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/lidar_lite.html")]),a._v(" "),e("p",[e("a",{attrs:{id:"ll40ls_usage"}})]),a._v(" "),e("h3",{attrs:{id:"用法-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-6"}},[a._v("#")]),a._v(" 用法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ll40ls <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 98\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   regdump\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"pga460"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pga460"}},[a._v("#")]),a._v(" pga460")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/mappydot",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/mappydot"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{id:"mappydot_usage"}})]),a._v(" "),e("h3",{attrs:{id:"用法-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-7"}},[a._v("#")]),a._v(" 用法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mappydot <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"mb12xx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mb12xx"}},[a._v("#")]),a._v(" mb12xx")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/mb12xx",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/mb12xx"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{id:"mb12xx_usage"}})]),a._v(" "),e("h3",{attrs:{id:"使用-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mb12xx <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n\n   set_address\n     [-a <val>]  I2C address\n                 default: 112\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"pga460-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pga460-2"}},[a._v("#")]),a._v(" pga460")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/pga460",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/pga460"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"使用-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-3"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),e("p",[a._v("Ultrasonic range finder driver that handles the communication with the device and publishes the distance via uORB.")]),a._v(" "),e("h3",{attrs:{id:"参数描述-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-4"}},[a._v("#")]),a._v(" 参数描述")]),a._v(" "),e("p",[a._v("This driver is implemented as a NuttX task. This Implementation was chosen due to the need for polling on a message via UART, which is not supported in the work_queue. This driver continuously takes range measurements while it is running. A simple algorithm to detect false readings is implemented at the driver levelin an attemptto improve the quality of data that is being published. The driver will not publish data at all if it deems the sensor data to be invalid or unstable.")]),a._v(" "),e("p",[e("a",{attrs:{id:"pga460_usage"}})]),a._v(" "),e("h3",{attrs:{id:"参数描述-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-5"}},[a._v("#")]),a._v(" 参数描述")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pga460 <command> [arguments...]\n Commands:\n   start\n     [device_path] The pga460 sensor device path, (e.g: /dev/ttyS6)\n\n   status\n\n   stop\n\n   help\n")])])]),e("h2",{attrs:{id:"srf02"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#srf02"}},[a._v("#")]),a._v(" srf02")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/srf02",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/srf02"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{id:"srf02_usage"}})]),a._v(" "),e("h3",{attrs:{id:"描述-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-3"}},[a._v("#")]),a._v(" 描述")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("srf02 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 112\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"srf05"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#srf05"}},[a._v("#")]),a._v(" srf05")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/srf05",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/srf05"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),e("p",[a._v("Driver for HY-SRF05 / HC-SR05 and HC-SR04 rangefinders.")]),a._v(" "),e("p",[a._v("The sensor/driver must be enabled using the parameter SENS_EN_HXSRX0X.")]),a._v(" "),e("p",[e("a",{attrs:{id:"srf05_usage"}})]),a._v(" "),e("h3",{attrs:{id:"描述-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-4"}},[a._v("#")]),a._v(" 描述")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("srf05 <command> [arguments...]\n Commands:\n   start         Start driver\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   status        Print driver status information\n\n   stop          Stop driver\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"teraranger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#teraranger"}},[a._v("#")]),a._v(" teraranger")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/teraranger",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/teraranger"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"示例-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),e("p",[a._v("I2C bus driver for TeraRanger rangefinders.")]),a._v(" "),e("p",[a._v("The sensor/driver must be enabled using the parameter SENS_EN_TRANGER.")]),a._v(" "),e("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/rangefinders.html#teraranger-rangefinders")]),a._v(" "),e("p",[e("a",{attrs:{id:"teraranger_usage"}})]),a._v(" "),e("h3",{attrs:{id:"用法-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-8"}},[a._v("#")]),a._v(" 用法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("teraranger <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 48\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"tf02pro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tf02pro"}},[a._v("#")]),a._v(" tf02pro")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/tf02pro",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/tf02pro"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{id:"tf02pro_usage"}})]),a._v(" "),e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tf02pro <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 16\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"tfmini"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tfmini"}},[a._v("#")]),a._v(" tfmini")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/tfmini",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/tfmini"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"用法-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-9"}},[a._v("#")]),a._v(" 用法")]),a._v(" "),e("p",[a._v("Serial bus driver for the Benewake TFmini LiDAR.")]),a._v(" "),e("p",[a._v("Most boards are configured to enable/start the driver on a specified UART using the SENS_TFMINI_CFG parameter.")]),a._v(" "),e("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/tfmini.html")]),a._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),e("p",[a._v("Attempt to start driver on a specified serial device.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tfmini start -d /dev/ttyS1\n")])])]),e("p",[a._v("Stop driver")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tfmini stop\n")])])]),e("p",[e("a",{attrs:{id:"tfmini_usage"}})]),a._v(" "),e("h3",{attrs:{id:"usage-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tfmini <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   status        Driver status\n\n   stop          Stop driver\n\n   test          Test driver (basic functional tests)\n\n   status        Print driver status\n")])])]),e("h2",{attrs:{id:"ulanding-radar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ulanding-radar"}},[a._v("#")]),a._v(" ulanding_radar")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/ulanding_radar",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/ulanding_radar"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"说明-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说明-2"}},[a._v("#")]),a._v(" 说明")]),a._v(" "),e("p",[a._v("Serial bus driver for the Aerotenna uLanding radar.")]),a._v(" "),e("p",[a._v("Setup/usage information: https://docs.px4.io/v1.9.0/en/sensor/ulanding_radar.html")]),a._v(" "),e("h3",{attrs:{id:"示例-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-5"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),e("p",[a._v("Attempt to start driver on a specified serial device.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ulanding_radar start -d /dev/ttyS1\n")])])]),e("p",[a._v("设置/使用 信息： https://docs.px4.io/master/en/sensor/leddar_one.html")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ulanding_radar stop\n")])])]),e("p",[e("a",{attrs:{id:"ulanding_radar_usage"}})]),a._v(" "),e("h3",{attrs:{id:"usage-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ulanding_radar <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n                 values: <file:dev>, default: /dev/ttyS3\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop          Stop driver\n")])])]),e("h2",{attrs:{id:"vl53l0x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vl53l0x"}},[a._v("#")]),a._v(" vl53l0x")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/vl53l0x",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/vl53l0x"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{id:"vl53l0x_usage"}})]),a._v(" "),e("h3",{attrs:{id:"参数描述-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-6"}},[a._v("#")]),a._v(" 参数描述")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vl53l0x <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 41\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"vl53l1x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vl53l1x"}},[a._v("#")]),a._v(" vl53l1x")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/vl53l1x",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/vl53l1x"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{id:"vl53l1x_usage"}})]),a._v(" "),e("h3",{attrs:{id:"参数描述-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-7"}},[a._v("#")]),a._v(" 参数描述")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vl53l1x <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 41\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);