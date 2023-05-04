(window.webpackJsonp=window.webpackJsonp||[]).push([[1439],{2784:function(a,t,s){"use strict";s.r(t);var e=s(19),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"모듈-참조-거리-센서-드라이버"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#모듈-참조-거리-센서-드라이버"}},[a._v("#")]),a._v(" 모듈 참조: 거리 센서(드라이버)")]),a._v(" "),s("h2",{attrs:{id:"afbrs50"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#afbrs50"}},[a._v("#")]),a._v(" afbrs50")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/broadcom/afbrs50",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/leddar_one"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"설명"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),s("p",[a._v("Broadcom AFBRS50용 드라이버입니다.")]),a._v(" "),s("h3",{attrs:{id:"예"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예"}},[a._v("#")]),a._v(" 예")]),a._v(" "),s("p",[a._v("지정된 직렬 장치에서 드라이버를 시작하려고 합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("afbrs50 start\n")])])]),s("p",[a._v("드라이버를 중지합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("afbrs50 stop\n")])])]),s("p",[s("a",{attrs:{id:"afbrs50_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("afbrs50 <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-r <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop          Stop driver\n")])])]),s("h2",{attrs:{id:"gy-us42"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gy-us42"}},[a._v("#")]),a._v(" gy_us42")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/gy_us42",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/srf02"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{id:"gy_us42_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-2"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("gy_us42 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"leddar-one"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leddar-one"}},[a._v("#")]),a._v(" leddar_one")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/leddar_one",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/leddar_one"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"설명-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-2"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),s("p",[a._v("LeddarOne LiDAR 직렬 버스 드라이버입니다.")]),a._v(" "),s("p",[a._v("대부분의 보드는 SENS_LEDDAR1_CFG 매개변수를 사용하여, 지정된 UART에서 드라이버를 활성화/시작하도록 설정합니다.")]),a._v(" "),s("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/leddar_one.html")]),a._v(" "),s("h3",{attrs:{id:"예-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예-2"}},[a._v("#")]),a._v(" 예")]),a._v(" "),s("p",[a._v("지정된 직렬 장치에서 드라이버를 시작하려고 합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("leddar_one start -d /dev/ttyS1\n")])])]),s("p",[a._v("드라이버를 중지합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("leddar_one stop\n")])])]),s("p",[s("a",{attrs:{id:"leddar_one_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-3"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("leddar_one <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-r <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop          Stop driver\n")])])]),s("h2",{attrs:{id:"lightware-laser-i2c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lightware-laser-i2c"}},[a._v("#")]),a._v(" lightware_laser_i2c")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/lightware_laser_i2c",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/lightware_laser_i2c"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"설명-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-3"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),s("p",[a._v("Lightware SFxx 시리즈 LIDAR 거리 측정기용 I2C 버스 드라이버: SF10/a, SF10/b, SF10/c, SF11/c, SF/LW20.")]),a._v(" "),s("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/sfxx_lidar.html")]),a._v(" "),s("p",[s("a",{attrs:{id:"lightware_laser_i2c_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-4"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lightware_laser_i2c <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 102\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"lightware-laser-serial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lightware-laser-serial"}},[a._v("#")]),a._v(" lightware_laser_serial")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/lightware_laser_serial",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/lightware_laser_serial"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"설명-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-4"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),s("p",[a._v("LightWare SF02/F, SF10/a, SF10/b, SF10/c, SF11/c 레이저 거리 측정기용 직렬 버스 드라이버.")]),a._v(" "),s("p",[a._v("대부분의 보드는 SENS_SF0X_CFG 매개변수를 사용하여 지정된 UART에서 드라이버를 활성화/시작하도록 설정합니다.")]),a._v(" "),s("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/sfxx_lidar.html")]),a._v(" "),s("h3",{attrs:{id:"예-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예-3"}},[a._v("#")]),a._v(" 예")]),a._v(" "),s("p",[a._v("지정된 직렬 장치에서 드라이버를 시작하려고 합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lightware_laser_serial start -d /dev/ttyS1\n")])])]),s("p",[a._v("드라이버를 중지합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lightware_laser_serial stop\n")])])]),s("p",[s("a",{attrs:{id:"lightware_laser_serial_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-5"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lightware_laser_serial <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop          Stop driver\n")])])]),s("h2",{attrs:{id:"lightware-sf45-serial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lightware-sf45-serial"}},[a._v("#")]),a._v(" lightware_sf45_serial")]),a._v(" "),s("p",[a._v("Source: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/lightware_sf45_serial",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/lightware_sf45_serial"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"설명-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-5"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),s("p",[a._v("Serial bus driver for the Lightware SF45/b Laser rangefinder.")]),a._v(" "),s("p",[a._v("설정/사용 정보: https://docs.px4.io/master/en/sensor/sfxx_lidar.html")]),a._v(" "),s("h3",{attrs:{id:"예-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예-4"}},[a._v("#")]),a._v(" 예")]),a._v(" "),s("p",[a._v("지정된 직렬 장치에서 드라이버를 시작하려고 합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lightware_sf45_serial start -d /dev/ttyS1\n")])])]),s("p",[a._v("드라이버를 중지합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lightware_sf45_serial stop\n")])])]),s("p",[s("a",{attrs:{id:"lightware_sf45_serial_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-6"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lightware_sf45_serial <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     -R <val>    Sensor rotation - downward facing by default\n\n   stop          Stop driver\n")])])]),s("h2",{attrs:{id:"ll40ls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ll40ls"}},[a._v("#")]),a._v(" ll40ls")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/ll40ls",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/ll40ls"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"설명-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-6"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),s("p",[a._v("LidarLite 거리 측정기를 위한 I2C 버스 드라이버입니다.")]),a._v(" "),s("p",[a._v("센서/드라이버는 매개변수 SENS_EN_LL40LS를 사용하여 활성화합니다.")]),a._v(" "),s("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/lidar_lite.html")]),a._v(" "),s("p",[s("a",{attrs:{id:"ll40ls_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-7"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ll40ls <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 98\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   regdump\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"mappydot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mappydot"}},[a._v("#")]),a._v(" mappydot")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/mappydot",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/mappydot"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{id:"mappydot_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-8"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mappydot <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"mb12xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mb12xx"}},[a._v("#")]),a._v(" mb12xx")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/mb12xx",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/mb12xx"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{id:"mb12xx_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-9"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mb12xx <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n\n   set_address\n     [-a <val>]  I2C address\n                 default: 112\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"pga460"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pga460"}},[a._v("#")]),a._v(" pga460")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/pga460",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/pga460"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"설명-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-7"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),s("p",[a._v("장치와의 통신을 처리하고, uORB를 통해 거리를 게시하는 초음파 거리 측정기 드라이버입니다.")]),a._v(" "),s("h3",{attrs:{id:"구현"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구현"}},[a._v("#")]),a._v(" 구현")]),a._v(" "),s("p",[a._v("This driver is implemented as a NuttX task. 이 구현은 work_queue에서 지원되지 않는 UART를 통해 메시지에 대한 폴링이 필요하기 때문에 선택되었습니다. 이 드라이버는 실행되는 동안 지속적으로 범위 측정을 수행합니다. 잘못된 판독값을 감지하는 간단한 알고리즘은 게시중인 데이터의 품질을 개선하기 위하여 드라이버 수준에서 구현됩니다. 드라이버는 센서 데이터가 유효하지 않거나 불안정하다고 판단되는 경우에는, 데이터를 게시하지 않습니다.")]),a._v(" "),s("p",[s("a",{attrs:{id:"pga460_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-10"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("pga460 <command> [arguments...]\n Commands:\n   start\n     [device_path] The pga460 sensor device path, (e.g: /dev/ttyS6)\n\n   status\n\n   stop\n\n   help\n")])])]),s("h2",{attrs:{id:"srf02"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#srf02"}},[a._v("#")]),a._v(" srf02")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/srf02",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/srf02"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{id:"srf02_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-11"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-11"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("srf02 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 112\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"srf05"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#srf05"}},[a._v("#")]),a._v(" srf05")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/srf05",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/srf05"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("설명")]),a._v(" "),s("p",[a._v("HY-SRF05 / HC-SR05 및 HC-SR04 거리 측정기용 드라이버입니다.")]),a._v(" "),s("p",[a._v("센서/드라이버는 SENS_EN_HXSRX0X 매개변수를 사용하여 활성화합니다.")]),a._v(" "),s("p",[s("a",{attrs:{id:"srf05_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-12"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-12"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("srf05 <command> [arguments...]\n Commands:\n   start         Start driver\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   status        Print driver status information\n\n   stop          Stop driver\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"teraranger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teraranger"}},[a._v("#")]),a._v(" teraranger")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/teraranger",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/teraranger"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"설명-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-8"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),s("p",[a._v("TeraRanger 거리 측정기를 위한 I2C 버스 드라이버입니다.")]),a._v(" "),s("p",[a._v("센서/드라이버는 SENS_EN_TRANGER 매개변수를 사용하여 활성화합니다.")]),a._v(" "),s("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/rangefinders.html#teraranger-rangefinders")]),a._v(" "),s("p",[s("a",{attrs:{id:"teraranger_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-13"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-13"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("teraranger <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 48\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"tf02pro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tf02pro"}},[a._v("#")]),a._v(" tf02pro")]),a._v(" "),s("p",[a._v("Source: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/tf02pro",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/tf02pro"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{id:"tf02pro_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-14"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-14"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tf02pro <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 16\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"tfmini"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tfmini"}},[a._v("#")]),a._v(" tfmini")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/tfmini",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/tfmini"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"설명-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-9"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),s("p",[a._v("Benewake TFmini LiDAR용 직렬 버스 드라이버입니다.")]),a._v(" "),s("p",[a._v("대부분의 보드는 SENS_TFMINI_CFG 매개변수를 사용하여 지정된 UART에서 드라이버를 활성화/시작하도록 설정합니다.")]),a._v(" "),s("p",[a._v("Setup/usage information: https://docs.px4.io/main/en/sensor/tfmini.html")]),a._v(" "),s("h3",{attrs:{id:"예-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예-5"}},[a._v("#")]),a._v(" 예")]),a._v(" "),s("p",[a._v("지정된 직렬 장치에서 드라이버를 시작하려고 합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tfmini start -d /dev/ttyS1\n")])])]),s("p",[a._v("드라이버를 중지합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tfmini stop\n")])])]),s("p",[s("a",{attrs:{id:"tfmini_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-15"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-15"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tfmini <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   status        Driver status\n\n   stop          Stop driver\n\n   test          Test driver (basic functional tests)\n\n   status        Print driver status\n")])])]),s("h2",{attrs:{id:"ulanding-radar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ulanding-radar"}},[a._v("#")]),a._v(" ulanding_radar")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/ulanding_radar",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/ulanding_radar"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"설명-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-10"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),s("p",[a._v("Aerotenna uLanding 레이더용 직렬 버스 드라이버입니다.")]),a._v(" "),s("p",[a._v("설정/사용 정보: https://docs.px4.io/v1.9.0/en/sensor/ulanding_radar.html")]),a._v(" "),s("h3",{attrs:{id:"예-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예-6"}},[a._v("#")]),a._v(" 예")]),a._v(" "),s("p",[a._v("지정된 직렬 장치에서 드라이버를 시작하려고 합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ulanding_radar start -d /dev/ttyS1\n")])])]),s("p",[a._v("드라이버를 중지합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ulanding_radar stop\n")])])]),s("p",[s("a",{attrs:{id:"ulanding_radar_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-16"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-16"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ulanding_radar <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n                 values: <file:dev>, default: /dev/ttyS3\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop          Stop driver\n")])])]),s("h2",{attrs:{id:"vl53l0x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vl53l0x"}},[a._v("#")]),a._v(" vl53l0x")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/vl53l0x",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/vl53l0x"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{id:"vl53l0x_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-17"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-17"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vl53l0x <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 41\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"vl53l1x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vl53l1x"}},[a._v("#")]),a._v(" vl53l1x")]),a._v(" "),s("p",[a._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/vl53l1x",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/distance_sensor/vl53l1x"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{id:"vl53l1x_usage"}})]),a._v(" "),s("h3",{attrs:{id:"사용법-18"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-18"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vl53l1x <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 41\n     [-R <val>]  Sensor rotation - downward facing by default\n                 default: 25\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);