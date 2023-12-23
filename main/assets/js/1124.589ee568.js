(window.webpackJsonp=window.webpackJsonp||[]).push([[1124],{2248:function(a,e,t){"use strict";t.r(e);var s=t(19),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"modules-reference-magnetometer-driver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-magnetometer-driver"}},[a._v("#")]),a._v(" Modules Reference: Magnetometer (Driver)")]),a._v(" "),t("h2",{attrs:{id:"ak09916"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ak09916"}},[a._v("#")]),a._v(" ak09916")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/akm/ak09916",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/akm/ak09916"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"ak09916_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ak09916 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 12\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"ak8963"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ak8963"}},[a._v("#")]),a._v(" ak8963")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/akm/ak8963",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/akm/ak8963"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"ak8963_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ak8963 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 12\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"bmm150"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bmm150"}},[a._v("#")]),a._v(" bmm150")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/bosch/bmm150",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/bosch/bmm150"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"bmm150_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("bmm150 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 16\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"hmc5883"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hmc5883"}},[a._v("#")]),a._v(" hmc5883")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/hmc5883",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/hmc5883"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"hmc5883_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("hmc5883 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-s]        Internal SPI bus(es)\n     [-S]        External SPI bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-c <val>]  chip-select pin (for internal SPI) or index (for external SPI)\n     [-m <val>]  SPI mode\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n     [-T]        Enable temperature compensation\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"ist8308"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ist8308"}},[a._v("#")]),a._v(" ist8308")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/isentek/ist8308",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/isentek/ist8308"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"ist8308_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-5"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ist8308 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 12\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"ist8310"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ist8310"}},[a._v("#")]),a._v(" ist8310")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/isentek/ist8310",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/isentek/ist8310"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"ist8310_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-6"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ist8310 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 14\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"lis2mdl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lis2mdl"}},[a._v("#")]),a._v(" lis2mdl")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/lis2mdl",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/lis2mdl"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"lis2mdl_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-7"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lis2mdl <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-s]        Internal SPI bus(es)\n     [-S]        External SPI bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-c <val>]  chip-select pin (for internal SPI) or index (for external SPI)\n     [-m <val>]  SPI mode\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 30\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"lis3mdl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lis3mdl"}},[a._v("#")]),a._v(" lis3mdl")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/lis3mdl",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/lis3mdl"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"lis3mdl_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-8"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lis3mdl <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-s]        Internal SPI bus(es)\n     [-S]        External SPI bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-c <val>]  chip-select pin (for internal SPI) or index (for external SPI)\n     [-m <val>]  SPI mode\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 30\n     [-R <val>]  Rotation\n                 default: 0\n\n   reset\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"lsm9ds1-mag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lsm9ds1-mag"}},[a._v("#")]),a._v(" lsm9ds1_mag")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/lsm9ds1_mag",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/lsm9ds1_mag"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"lsm9ds1_mag_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-9"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lsm9ds1_mag <command> [arguments...]\n Commands:\n   start\n     [-s]        Internal SPI bus(es)\n     [-S]        External SPI bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-c <val>]  chip-select pin (for internal SPI) or index (for external SPI)\n     [-m <val>]  SPI mode\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"qmc5883l"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qmc5883l"}},[a._v("#")]),a._v(" qmc5883l")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/qmc5883l",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/qmc5883l"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"qmc5883l_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-10"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("qmc5883l <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 13\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"rm3100"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rm3100"}},[a._v("#")]),a._v(" rm3100")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/rm3100",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/rm3100"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"rm3100_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-11"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rm3100 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-s]        Internal SPI bus(es)\n     [-S]        External SPI bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-c <val>]  chip-select pin (for internal SPI) or index (for external SPI)\n     [-m <val>]  SPI mode\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),t("h2",{attrs:{id:"vcm1193l"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vcm1193l"}},[a._v("#")]),a._v(" vcm1193l")]),a._v(" "),t("p",[a._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/vtrantech/vcm1193l",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/magnetometer/vtrantech/vcm1193l"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{id:"vcm1193l_usage"}})]),a._v(" "),t("h3",{attrs:{id:"usage-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-12"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vcm1193l <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);