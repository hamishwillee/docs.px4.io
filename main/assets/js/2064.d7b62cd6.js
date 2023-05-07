(window.webpackJsonp=window.webpackJsonp||[]).push([[2064],{3729:function(e,r,t){"use strict";t.r(r);var a=t(19),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"i2c-bus-development-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i2c-bus-development-overview"}},[e._v("#")]),e._v(" I2C Bus (Development Overview)")]),e._v(" "),t("p",[e._v("I2C 是一种分组交换串行通信协议，允许多个主设备连接到多个从属设备，每个连接只需使用2根电线。 它用于在短距离、板内通信中将低速外设 IC 连接到处理器和微控制器。")]),e._v(" "),t("p",[e._v("Pixhawk/PX4 支持：")]),e._v(" "),t("ul",[t("li",[e._v("Connecting off board components that require higher data rates than provided by a strict serial UART, such as rangefinders.")]),e._v(" "),t("li",[e._v("与仅支持 I2C 的外围设备兼容。")]),e._v(" "),t("li",[e._v("允许多个设备连接到单个总线（有效保护端口）。 例如，LED、指南针、测距仪等。")])]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),t("p",[e._v("The page "),t("RouterLink",{attrs:{to:"/zh/sensor_bus/i2c_general.html"}},[e._v("Hardware > I2C Peripherals")]),e._v(" contains information about how to "),t("em",[e._v("use")]),e._v(" (rather than integrate) I2C peripherals and solve common setup problems.")],1)]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("IMUs (accelerometers/gyroscopes) should not be attached via I2C (typically the [SPI](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus) bus is used). The bus is not fast enough even with a single device attached to allow vibration filtering (for instance), and the performance degrades further with every additional device on the bus.")])]),e._v(" "),t("h2",{attrs:{id:"集成-i2c-设备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成-i2c-设备"}},[e._v("#")]),e._v(" 集成 I2C 设备")]),e._v(" "),t("p",[e._v("Drivers should "),t("code",[e._v("#include <drivers/device/i2c.h>")]),e._v(" and then provide an implementation of the abstract base class "),t("code",[e._v("I2C")]),e._v(" defined in "),t("strong",[e._v("I2C.hpp")]),e._v(" for the target hardware (i.e. for NuttX "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/drivers/device/nuttx/I2C.hpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("A small number of drivers will also need to include headers for their type of device ("),t("strong",[e._v("drv_*.h")]),e._v(") in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/drivers/"),t("OutboundLink")],1),e._v(" - e.g. "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/drivers/drv_led.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("drv_led.h"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("To include a driver in firmware you must add the driver to the board-specific cmake file that corresponds to the target you want to build for. You can do this for a single driver:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("drivers/sf1xx\n")])])]),t("p",[e._v("You can also include all drivers of a particular type.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CONFIG_COMMON_DISTANCE_SENSOR=y\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("For example, you can see/search for "),t("code",[e._v("CONFIG_DRIVERS_DISTANCE_SENSOR_LIGHTWARE_LASER_I2C")]),e._v(" in the "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/boards/px4/fmu-v4/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4_fmu-v4_default"),t("OutboundLink")],1),e._v(" configuration.")])]),e._v(" "),t("h2",{attrs:{id:"i2c-驱动程序示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i2c-驱动程序示例"}},[e._v("#")]),e._v(" I2C 驱动程序示例")]),e._v(" "),t("p",[e._v("To find I2C driver examples, search for "),t("strong",[e._v("i2c.h")]),e._v(" in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/drivers/"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Just a few examples are:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/lightware_laser_i2c",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/distance_sensor/lightware_laser_i2c"),t("OutboundLink")],1),e._v(" - I2C driver for "),t("RouterLink",{attrs:{to:"/zh/sensor/sfxx_lidar.html"}},[e._v("Lightware SF1XX LIDAR")]),e._v(".")],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/lightware_laser_serial",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/distance_sensor/lightware_laser_serial"),t("OutboundLink")],1),e._v(" - Serial driver for "),t("RouterLink",{attrs:{to:"/zh/sensor/sfxx_lidar.html"}},[e._v("Lightware SF1XX LIDAR")]),e._v(".")],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/ms5611",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/ms5611"),t("OutboundLink")],1),e._v(" - I2C Driver for the MS5611 and MS6507 barometric pressure sensor connected via I2C (or SPI).")])]),e._v(" "),t("h2",{attrs:{id:"更多信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[e._v("#")]),e._v(" 更多信息")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/I%C2%B2C",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C"),t("OutboundLink")],1),e._v("（维基百科）")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/i2c",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C 比较审查 "),t("OutboundLink")],1),e._v("（learn.sparkfun.com）")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/zh/middleware/drivers.html"}},[e._v("驱动程序框架")])],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);