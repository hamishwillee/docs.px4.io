(window.webpackJsonp=window.webpackJsonp||[]).push([[1059],{2123:function(e,s,a){"use strict";a.r(s);var t=a(19),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modules-reference-airspeed-sensor-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-airspeed-sensor-driver"}},[e._v("#")]),e._v(" Modules Reference: Airspeed Sensor (Driver)")]),e._v(" "),a("h2",{attrs:{id:"asp5033"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asp5033"}},[e._v("#")]),e._v(" asp5033")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/differential_pressure/asp5033",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/differential_pressure/asp5033"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v('Driver to enable an external [ASP5033]\n(https://www.qio-tek.com/index.php/product/qiotek-asp5033-dronecan-airspeed-and-compass-module/)\nTE connected via I2C.\nThis is not included by default in firmware. It can be included with terminal command: "make <your_board> boardconfig"\nor in default.px4board with adding the line: "CONFIG_DRIVERS_DIFFERENTIAL_PRESSURE_ASP5033=y"\nIt can be enabled with the "SENS_EN_ASP5033" parameter set to 1.')]),e._v(" "),a("p",[a("a",{attrs:{id:"asp5033_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("asp5033 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 109\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"ets-airspeed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ets-airspeed"}},[e._v("#")]),e._v(" ets_airspeed")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/differential_pressure/ets",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/differential_pressure/ets"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"ets_airspeed_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ets_airspeed <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 117\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"ms4515"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ms4515"}},[e._v("#")]),e._v(" ms4515")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/differential_pressure/ms4515",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/differential_pressure/ms4515"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"ms4515_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ms4515 <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 70\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"ms4525do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ms4525do"}},[e._v("#")]),e._v(" ms4525do")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/differential_pressure/ms4525do",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/differential_pressure/ms4525do"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"ms4525do_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ms4525do <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 40\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"ms5525dso"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ms5525dso"}},[e._v("#")]),e._v(" ms5525dso")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/differential_pressure/ms5525dso",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/differential_pressure/ms5525dso"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"ms5525dso_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-5"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ms5525dso <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 118\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"sdp3x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdp3x"}},[e._v("#")]),e._v(" sdp3x")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/differential_pressure/sdp3x",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/differential_pressure/sdp3x"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"sdp3x_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-6"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sdp3x <command> [arguments...]\n Commands:\n   start\n     [-I]        Internal I2C bus(es)\n     [-X]        External I2C bus(es)\n     [-b <val>]  board-specific bus (default=all) (external SPI: n-th bus\n                 (default=1))\n     [-f <val>]  bus frequency in kHz\n     [-q]        quiet startup (no message if no device found)\n     [-a <val>]  I2C address\n                 default: 33\n     [-k]        if initialization (probing) fails, keep retrying periodically\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);