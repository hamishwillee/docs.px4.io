(window.webpackJsonp=window.webpackJsonp||[]).push([[1260],{2630:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modules-reference-magnetometer-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-magnetometer-driver"}},[e._v("#")]),e._v(" Modules Reference: Magnetometer (Driver)")]),e._v(" "),a("h2",{attrs:{id:"ak09916"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ak09916"}},[e._v("#")]),e._v(" ak09916")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/akm/ak09916",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/akm/ak09916"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"ak09916_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ak09916 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"ak8963"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ak8963"}},[e._v("#")]),e._v(" ak8963")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/akm/ak8963",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/akm/ak8963"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"ak8963_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ak8963 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"bmm150"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bmm150"}},[e._v("#")]),e._v(" bmm150")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/bosch/bmm150",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/bosch/bmm150"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"bmm150_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-3"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bmm150 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"hmc5883"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hmc5883"}},[e._v("#")]),e._v(" hmc5883")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/hmc5883",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/hmc5883"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"hmc5883_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-4"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hmc5883 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-s]        Internal SPI bus(es)\n     [-S]        External SPI bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-c <val>]  chip-select index (for external SPI)\n                 default: 1\n     [-m <val>]  SPI mode\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n     [-T]        Enable temperature compensation\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"ist8308"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ist8308"}},[e._v("#")]),e._v(" ist8308")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/isentek/ist8308",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/isentek/ist8308"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"ist8308_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-5"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ist8308 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"ist8310"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ist8310"}},[e._v("#")]),e._v(" ist8310")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/isentek/ist8310",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/isentek/ist8310"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"ist8310_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-6"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ist8310 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 14\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"lis2mdl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lis2mdl"}},[e._v("#")]),e._v(" lis2mdl")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/lis2mdl",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/lis2mdl"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"lis2mdl_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-7"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("lis2mdl <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-s]        Internal SPI bus(es)\n     [-S]        External SPI bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-c <val>]  chip-select index (for external SPI)\n                 default: 1\n     [-m <val>]  SPI mode\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"lis3mdl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lis3mdl"}},[e._v("#")]),e._v(" lis3mdl")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/lis3mdl",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/lis3mdl"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"lis3mdl_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-8"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("lis3mdl <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-s]        Internal SPI bus(es)\n     [-S]        External SPI bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-c <val>]  chip-select index (for external SPI)\n                 default: 1\n     [-m <val>]  SPI mode\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   reset\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"lsm9ds1-mag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lsm9ds1-mag"}},[e._v("#")]),e._v(" lsm9ds1_mag")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/lsm9ds1_mag",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/lsm9ds1_mag"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"lsm9ds1_mag_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-9"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("lsm9ds1_mag <command> [arguments...]\n Commands:\n   start\n     [-s]        Internal SPI bus(es)\n     [-S]        External SPI bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-c <val>]  chip-select index (for external SPI)\n                 default: 1\n     [-m <val>]  SPI mode\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"qmc5883l"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qmc5883l"}},[e._v("#")]),e._v(" qmc5883l")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/qmc5883l",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/qmc5883l"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"qmc5883l_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-10"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("qmc5883l <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"rm3100"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rm3100"}},[e._v("#")]),e._v(" rm3100")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/magnetometer/rm3100",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/magnetometer/rm3100"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"rm3100_usage"}})]),e._v(" "),a("h3",{attrs:{id:"使用-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-11"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rm3100 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-s]        Internal SPI bus(es)\n     [-S]        External SPI bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-c <val>]  chip-select index (for external SPI)\n                 default: 1\n     [-m <val>]  SPI mode\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-R <val>]  Rotation\n                 default: 0\n\n   reset\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);