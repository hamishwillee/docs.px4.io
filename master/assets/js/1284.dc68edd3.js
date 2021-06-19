(window.webpackJsonp=window.webpackJsonp||[]).push([[1284],{2678:function(r,e,t){"use strict";t.r(e);var a=t(19),s=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"i2c-总线概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i2c-总线概述"}},[r._v("#")]),r._v(" I2C 总线概述")]),r._v(" "),t("p",[r._v("I2C 是一种分组交换串行通信协议，允许多个主设备连接到多个从属设备，每个连接只需使用2根电线。 它用于在短距离、板内通信中将低速外设 IC 连接到处理器和微控制器。")]),r._v(" "),t("p",[r._v("Pixhawk/PX4 支持：")]),r._v(" "),t("ul",[t("li",[r._v("连接需要比严格的串行 UART 更高数据速率的板载组件：例如测距仪。")]),r._v(" "),t("li",[r._v("与仅支持 I2C 的外围设备兼容。")]),r._v(" "),t("li",[r._v("允许多个设备连接到单个总线（有效保护端口）。 例如，LED、指南针、测距仪等。")])]),r._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[r._v("IMUs (accelerometers/gyroscopes) should not be attached via I2C (typically the [SPI](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus) bus is used). The bus is not fast enough even with a single device attached to allow vibration filtering (for instance), and the performance degrades further with every additional device on the bus.")])]),r._v(" "),t("h2",{attrs:{id:"集成-i2c-设备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成-i2c-设备"}},[r._v("#")]),r._v(" 集成 I2C 设备")]),r._v(" "),t("p",[r._v("驱动程序还需要在 "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[r._v("/src/drivers/"),t("OutboundLink")],1),r._v(" 中包括其设备类型（"),t("strong",[r._v("drv_*.h")]),r._v("）的标头--例如 "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/drivers/drv_baro.h",target:"_blank",rel:"noopener noreferrer"}},[r._v("drv_baro.h"),t("OutboundLink")],1),r._v("。")]),r._v(" "),t("p",[r._v("若要在固件中包含驱动程序，必须将驱动程序添加到与要为其生成的目标相对应的 "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/cmake/configs",target:"_blank",rel:"noopener noreferrer"}},[r._v("cmake 配置文件"),t("OutboundLink")],1),r._v("：")]),r._v(" "),t("p",[r._v("To include a driver in firmware you must add the driver to the board-specific cmake file that corresponds to the target you want to build for. You can do this for a single driver:")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("drivers/sf1xx\n")])])]),t("p",[r._v("You can also include all drivers of a particular type.")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("distance_sensor # all available distance sensor drivers\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[r._v("提示")]),r._v(" "),t("p",[r._v("For example, you can see/search for "),t("code",[r._v("distance_sensor")]),r._v(" in the "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v4/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[r._v("px4_fmu-v4_default"),t("OutboundLink")],1),r._v(" configuration.")])]),r._v(" "),t("h2",{attrs:{id:"i2c-驱动程序示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i2c-驱动程序示例"}},[r._v("#")]),r._v(" I2C 驱动程序示例")]),r._v(" "),t("p",[r._v("To find I2C driver examples, search for "),t("strong",[r._v("i2c.h")]),r._v(" in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[r._v("/src/drivers/"),t("OutboundLink")],1),r._v(".")]),r._v(" "),t("p",[r._v("Just a few examples are:")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/distance_sensor/sf1xx",target:"_blank",rel:"noopener noreferrer"}},[r._v("drivers/sf1xx"),t("OutboundLink")],1),r._v("-i2c 驱动程序，用于 "),t("a",{attrs:{href:"https://docs.px4.io/en/sensor/sfxx_lidar.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("Lightware sf1xx lidar"),t("OutboundLink")],1),r._v("。")]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/barometer/ms5611",target:"_blank",rel:"noopener noreferrer"}},[r._v("drivers/ms5611"),t("OutboundLink")],1),r._v("-通过 I2C（或 SPI）连接的 MS5611 和 MS6507 气压传感器的 I2C 驱动程序。")]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/barometer/ms5611",target:"_blank",rel:"noopener noreferrer"}},[r._v("drivers/ms5611"),t("OutboundLink")],1),r._v(" - I2C Driver for the MS5611 and MS6507 barometric pressure sensor connected via I2C (or SPI).")])]),r._v(" "),t("h2",{attrs:{id:"更多信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[r._v("#")]),r._v(" 更多信息")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/I%C2%B2C",target:"_blank",rel:"noopener noreferrer"}},[r._v("I2C"),t("OutboundLink")],1),r._v("（维基百科）")]),r._v(" "),t("li",[t("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/i2c",target:"_blank",rel:"noopener noreferrer"}},[r._v("I2C 比较审查 "),t("OutboundLink")],1),r._v("（learn.sparkfun.com）")]),r._v(" "),t("li",[t("RouterLink",{attrs:{to:"/zh/middleware/drivers.html"}},[r._v("驱动程序框架")])],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);