(window.webpackJsonp=window.webpackJsonp||[]).push([[889],{1803:function(e,r,t){"use strict";t.r(r);var a=t(18),i=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"i2c-bus-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i2c-bus-overview"}},[e._v("#")]),e._v(" I2C Bus Overview")]),e._v(" "),t("p",[e._v("I2C is a packet-switched serial communication protocol that allows multiple master devices to connect to multiple slave devices using only 2 wires per connection. It is intended for attaching lower-speed peripheral ICs to processors and microcontrollers in short-distance, intra-board communication.")]),e._v(" "),t("p",[e._v("Pixhawk/PX4 support it for:")]),e._v(" "),t("ul",[t("li",[e._v("Connecting off board components that require greater data rates than provided by a strict serial UART: e.g. rangefinders.")]),e._v(" "),t("li",[e._v("Compatibility with peripheral devices that only support I2C.")]),e._v(" "),t("li",[e._v("Allowing multiple devices to attach to a single bus (useful for conserving ports). For example, LEDs, Compass, rangefinders etc.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("IMUs (accelerometers/gyroscopes) should not be attached via I2C (typically the "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus",target:"_blank",rel:"noopener noreferrer"}},[e._v("SPI"),t("OutboundLink")],1),e._v(" bus is used).\nThe bus is not fast enough even with a single device attached to allow vibration filtering (for instance), and the performance degrades further with every additional device on the bus.")])]),e._v(" "),t("h2",{attrs:{id:"integrating-i2c-devices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrating-i2c-devices"}},[e._v("#")]),e._v(" Integrating I2C Devices")]),e._v(" "),t("p",[e._v("Drivers should "),t("code",[e._v("#include <drivers/device/i2c.h>")]),e._v(" and then provide an implementation of the abstract base class "),t("code",[e._v("I2C")]),e._v(" defined in "),t("strong",[e._v("I2C.hpp")]),e._v(" for the target hardware (i.e. for NuttX "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/drivers/device/nuttx/I2C.hpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("Drivers will also need to include headers for their type of device ("),t("strong",[e._v("drv_*.h")]),e._v(") in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/drivers/"),t("OutboundLink")],1),e._v(" - e.g. "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/drivers/drv_baro.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("drv_baro.h"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("To include a driver in firmware you must add the driver to the board-specific cmake file that corresponds to the target you want to build for:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("drivers/sf1xx\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("For example, you can see/search for this driver in the "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v4/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4_fmu-v4_default"),t("OutboundLink")],1),e._v(" configuration.")])]),e._v(" "),t("h2",{attrs:{id:"i2c-driver-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i2c-driver-examples"}},[e._v("#")]),e._v(" I2C Driver Examples")]),e._v(" "),t("p",[e._v("To find I2C driver examples, search for "),t("strong",[e._v("i2c.h")]),e._v(" in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/drivers/"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Just a few examples are:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/sf1xx",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/sf1xx"),t("OutboundLink")],1),e._v(" - I2C Driver for "),t("RouterLink",{attrs:{to:"/en/sensor/sfxx_lidar.html"}},[e._v("Lightware SF1XX LIDAR")]),e._v(".")],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/barometer/ms5611",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/ms5611"),t("OutboundLink")],1),e._v(" - I2C Driver for the MS5611 and MS6507 barometric pressure sensor connected via I2C (or SPI).")])]),e._v(" "),t("h2",{attrs:{id:"further-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/I%C2%B2C",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C"),t("OutboundLink")],1),e._v(" (Wikipedia)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/i2c",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C Comparative Overview"),t("OutboundLink")],1),e._v(" (learn.sparkfun.com)")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/en/middleware/drivers.html"}},[e._v("Driver Framework")])],1)])])}),[],!1,null,null,null);r.default=i.exports}}]);