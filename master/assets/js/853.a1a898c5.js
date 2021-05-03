(window.webpackJsonp=window.webpackJsonp||[]).push([[853],{1750:function(a,e,t){"use strict";t.r(e);var s=t(18),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"modules-reference-distance-sensor-driver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-distance-sensor-driver"}},[a._v("#")]),a._v(" Modules Reference: Distance Sensor (Driver)")]),a._v(" "),t("h2",{attrs:{id:"gy-us42"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gy-us42"}},[a._v("#")]),a._v(" gy_us42")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/gy_us42",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/gy_us42"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"gy_us42_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("gy_us42 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"leddar-one"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leddar-one"}},[a._v("#")]),a._v(" leddar_one")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/leddar_one",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/leddar_one"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("Serial bus driver for the LeddarOne LiDAR.")]),a._v(" "),t("p",[a._v("Most boards are configured to enable/start the driver on a specified UART using the SENS_LEDDAR1_CFG parameter.")]),a._v(" "),t("p",[a._v("Setup/usage information: https://docs.px4.io/master/en/sensor/leddar_one.html")]),a._v(" "),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("p",[a._v("Attempt to start driver on a specified serial device.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("leddar_one start -d /dev/ttyS1\n")])])]),t("p",[a._v("Stop driver")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("leddar_one stop\n")])])]),t("p",[t("a",{attrs:{id:"leddar_one_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("leddar_one <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-r <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop          Stop driver\n")])])]),t("h2",{attrs:{id:"lightware-laser-i2c"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightware-laser-i2c"}},[a._v("#")]),a._v(" lightware_laser_i2c")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/lightware_laser_i2c",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/lightware_laser_i2c"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"description-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("I2C bus driver for Lightware SFxx series LIDAR rangefinders: SF10/a, SF10/b, SF10/c, SF11/c, SF/LW20.")]),a._v(" "),t("p",[a._v("Setup/usage information: https://docs.px4.io/master/en/sensor/sfxx_lidar.html")]),a._v(" "),t("p",[t("a",{attrs:{id:"lightware_laser_i2c_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lightware_laser_i2c <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"lightware-laser-serial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightware-laser-serial"}},[a._v("#")]),a._v(" lightware_laser_serial")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/lightware_laser_serial",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/lightware_laser_serial"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"description-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("Serial bus driver for the LightWare SF02/F, SF10/a, SF10/b, SF10/c, SF11/c Laser rangefinders.")]),a._v(" "),t("p",[a._v("Most boards are configured to enable/start the driver on a specified UART using the SENS_SF0X_CFG parameter.")]),a._v(" "),t("p",[a._v("Setup/usage information: https://docs.px4.io/master/en/sensor/sfxx_lidar.html")]),a._v(" "),t("h3",{attrs:{id:"examples-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("p",[a._v("Attempt to start driver on a specified serial device.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lightware_laser_serial start -d /dev/ttyS1\n")])])]),t("p",[a._v("Stop driver")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lightware_laser_serial stop\n")])])]),t("p",[t("a",{attrs:{id:"lightware_laser_serial_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lightware_laser_serial <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop          Stop driver\n")])])]),t("h2",{attrs:{id:"ll40ls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ll40ls"}},[a._v("#")]),a._v(" ll40ls")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/ll40ls",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/ll40ls"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"description-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("I2C bus driver for LidarLite rangefinders.")]),a._v(" "),t("p",[a._v("The sensor/driver must be enabled using the parameter SENS_EN_LL40LS.")]),a._v(" "),t("p",[a._v("Setup/usage information: https://docs.px4.io/master/en/sensor/lidar_lite.html")]),a._v(" "),t("p",[t("a",{attrs:{id:"ll40ls_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-5"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ll40ls <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   regdump\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"mappydot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mappydot"}},[a._v("#")]),a._v(" mappydot")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/mappydot",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/mappydot"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"mappydot_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-6"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mappydot <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"mb12xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mb12xx"}},[a._v("#")]),a._v(" mb12xx")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/mb12xx",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/mb12xx"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"mb12xx_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-7"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mb12xx <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 112\n\n   set_address\n     [-a <val>]  I2C address\n                 default: 112\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"pga460"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pga460"}},[a._v("#")]),a._v(" pga460")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/pga460",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/pga460"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"description-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-5"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("Ultrasonic range finder driver that handles the communication with the device and publishes the distance via uORB.")]),a._v(" "),t("h3",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[a._v("#")]),a._v(" Implementation")]),a._v(" "),t("p",[a._v("This driver is implented as a NuttX task. This Implementation was chosen due to the need for polling on a message\nvia UART, which is not supported in the work_queue. This driver continuously takes range measurements while it is\nrunning. A simple algorithm to detect false readings is implemented at the driver levelin an attemptto improve\nthe quality of data that is being published. The driver will not publish data at all if it deems the sensor data\nto be invalid or unstable.")]),a._v(" "),t("p",[t("a",{attrs:{id:"pga460_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-8"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pga460 <command> [arguments...]\n Commands:\n   start\n     [device_path] The pga460 sensor device path, (e.g: /dev/ttyS6)\n\n   status\n\n   stop\n\n   help\n")])])]),t("h2",{attrs:{id:"srf02"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#srf02"}},[a._v("#")]),a._v(" srf02")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/srf02",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/srf02"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"srf02_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-9"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("srf02 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"srf05"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#srf05"}},[a._v("#")]),a._v(" srf05")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/srf05",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/srf05"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"description-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-6"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("Driver for HY-SRF05 / HC-SR05 and HC-SR04 rangefinders.")]),a._v(" "),t("p",[a._v("The sensor/driver must be enabled using the parameter SENS_EN_HXSRX0X.")]),a._v(" "),t("p",[t("a",{attrs:{id:"srf05_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-10"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("srf05 <command> [arguments...]\n Commands:\n   start         Start driver\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   status        Print driver status information\n\n   stop          Stop driver\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"teraranger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#teraranger"}},[a._v("#")]),a._v(" teraranger")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/teraranger",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/teraranger"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"description-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-7"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("I2C bus driver for TeraRanger rangefinders.")]),a._v(" "),t("p",[a._v("The sensor/driver must be enabled using the parameter SENS_EN_TRANGER.")]),a._v(" "),t("p",[a._v("Setup/usage information: https://docs.px4.io/master/en/sensor/rangefinders.html#teraranger-rangefinders")]),a._v(" "),t("p",[t("a",{attrs:{id:"teraranger_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-11"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("teraranger <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"tfmini"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tfmini"}},[a._v("#")]),a._v(" tfmini")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/tfmini",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/tfmini"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"description-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-8"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("Serial bus driver for the Benewake TFmini LiDAR.")]),a._v(" "),t("p",[a._v("Most boards are configured to enable/start the driver on a specified UART using the SENS_TFMINI_CFG parameter.")]),a._v(" "),t("p",[a._v("Setup/usage information: https://docs.px4.io/master/en/sensor/tfmini.html")]),a._v(" "),t("h3",{attrs:{id:"examples-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("p",[a._v("Attempt to start driver on a specified serial device.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tfmini start -d /dev/ttyS1\n")])])]),t("p",[a._v("Stop driver")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tfmini stop\n")])])]),t("p",[t("a",{attrs:{id:"tfmini_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-12"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tfmini <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   status        Driver status\n\n   stop          Stop driver\n\n   test          Test driver (basic functional tests)\n\n   status        Print driver status\n")])])]),t("h2",{attrs:{id:"ulanding-radar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ulanding-radar"}},[a._v("#")]),a._v(" ulanding_radar")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/ulanding_radar",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/ulanding_radar"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"description-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-9"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("Serial bus driver for the Aerotenna uLanding radar.")]),a._v(" "),t("p",[a._v("Setup/usage information: https://docs.px4.io/v1.9.0/en/sensor/ulanding_radar.html")]),a._v(" "),t("h3",{attrs:{id:"examples-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("p",[a._v("Attempt to start driver on a specified serial device.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ulanding_radar start -d /dev/ttyS1\n")])])]),t("p",[a._v("Stop driver")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ulanding_radar stop\n")])])]),t("p",[t("a",{attrs:{id:"ulanding_radar_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-13"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ulanding_radar <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n                 values: <file:dev>, default: /dev/ttyS3\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop          Stop driver\n")])])]),t("h2",{attrs:{id:"vl53l0x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vl53l0x"}},[a._v("#")]),a._v(" vl53l0x")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/vl53l0x",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/vl53l0x"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"vl53l0x_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-14"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vl53l0x <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"vl53l1x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vl53l1x"}},[a._v("#")]),a._v(" vl53l1x")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/vl53l1x",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/vl53l1x"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"vl53l1x_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-15"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vl53l1x <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);