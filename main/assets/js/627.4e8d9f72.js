(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{1532:function(e,t,a){e.exports=a.p+"assets/img/tfi2cext01a_bottom.8aa2beba.jpg"},356:function(e,t,a){e.exports=a.p+"assets/img/i2c_jst-gh_cable.24f25e77.jpg"},3737:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"i2c-bus-peripherals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i2c-bus-peripherals"}},[e._v("#")]),e._v(" I2C Bus Peripherals")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/I2C",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C"),s("OutboundLink")],1),e._v(" is a serial communication protocol that is commonly used (at least on smaller drones), for connecting peripheral components like rangefinders, LEDs, Compass, etc.")]),e._v(" "),s("p",[e._v("It is recommended for:")]),e._v(" "),s("ul",[s("li",[e._v("Connecting offboard components that require low bandwidth and low latency communication, e.g. "),s("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[e._v("rangefinders")]),e._v(", "),s("RouterLink",{attrs:{to:"/zh/gps_compass/"}},[e._v("magnetometers")]),e._v(", "),s("RouterLink",{attrs:{to:"/zh/sensor/airspeed.html"}},[e._v("airspeed sensors")]),e._v(" and "),s("RouterLink",{attrs:{to:"/zh/sensor/tachometers.html"}},[e._v("tachometers")]),e._v(" .")],1),e._v(" "),s("li",[e._v("Compatibility with peripheral devices that only support I2C.")]),e._v(" "),s("li",[e._v("Allowing multiple devices to attach to a single bus, which is useful for conserving ports.")])]),e._v(" "),s("p",[e._v("I2C allows multiple master devices to connect to multiple slave devices using only 2 wires per connection (SDA, SCL). in theory a bus can support 128 devices, each accessed via its unique address.")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),s("p",[e._v("UAVCAN would normally be preferred where higher data rates are required, and on larger vehicles where sensors are be mounted further from the flight controller.")])]),e._v(" "),s("h2",{attrs:{id:"wiring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),s("p",[e._v("I2C uses a pair of wires: SDA (serial data) and SCL (serial clock). The bus is of open-drain type, meaning that devices ground the data line. It uses a pullup resistor to push it to "),s("code",[e._v("log.1")]),e._v(" (idle state) - every wire has it usually located on the bus terminating devices. One bus can connect to multiple I2C devices. The individual devices are connected without any crossing.")]),e._v(" "),s("p",[e._v("For connection (according to dronecode standard) 4-wire cables equipped with JST-GH connectors are used. To ensure reliable communication and to reduce crosstalk it is advised to apply recommendations concerning "),s("RouterLink",{attrs:{to:"/zh/assembly/cable_wiring.html#i2c-cables"}},[e._v("cable twisting")]),e._v(" and pullup resistors placement.")],1),e._v(" "),s("p",[s("img",{attrs:{src:a(356),alt:"Cable twisting"}})]),e._v(" "),s("h2",{attrs:{id:"checking-the-bus-and-device-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-the-bus-and-device-status"}},[e._v("#")]),e._v(" Checking the Bus and Device Status")]),e._v(" "),s("p",[e._v("A useful tool for bus analysis is "),s("RouterLink",{attrs:{to:"/zh/modules/modules_command.html#i2cdetect"}},[e._v("i2cdetect")]),e._v(". This lists available I2C devices by their addresses. It can be used to find out if a device on the bus is available and if the autopilot can communicate with it.")],1),e._v(" "),s("p",[e._v("The tool can be run in the PX4 terminal with the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("i2cdetect -b 1\n")])])]),s("p",[e._v("where the bus number is specified after "),s("code",[e._v("-b")]),e._v(" parameter")]),e._v(" "),s("h2",{attrs:{id:"common-problems"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-problems"}},[e._v("#")]),e._v(" Common problems")]),e._v(" "),s("h3",{attrs:{id:"address-clashes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#address-clashes"}},[e._v("#")]),e._v(" Address Clashes")]),e._v(" "),s("p",[e._v("If two I2C devices on a bus have the same ID there will be a clash, and neither device will not work properly (or at all). This usually occurs because a user needs to attach two sensors of the same type to the bus, but may also happen if devices use duplicate addresses by default.")]),e._v(" "),s("p",[e._v("Particular I2C devices may allow you to select a new address for one of the devices to avoid the clash. Some devices do not support this option, or do not have broad options for the addresses that can be used (i.e. cannot be used to avoid a clash).")]),e._v(" "),s("p",[e._v("If you can't change the addresses, one option is to use an "),s("a",{attrs:{href:"#i2c-address-translators"}},[e._v("I2C Address Translator")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"insufficient-transfer-capacity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insufficient-transfer-capacity"}},[e._v("#")]),e._v(" Insufficient Transfer Capacity")]),e._v(" "),s("p",[e._v("The bandwidth available for each individual device generally decreases as more devices are added. The exact decrease depends on the bandwidth used by each individual device. Therefore it is possible to connect many low bandwidth devices, like "),s("RouterLink",{attrs:{to:"/zh/sensor/tachometers.html"}},[e._v("tachometers")]),e._v(". If too many devices are added, it can cause transmission errors and network unreliability.")],1),e._v(" "),s("p",[e._v("There are several ways to reduce the problem:")]),e._v(" "),s("ul",[s("li",[e._v("Dividing the devices into groups, each with approximately the same number of devices and connecting each group to one autopilot port")]),e._v(" "),s("li",[e._v("Increase bus speed limit (usually set to 100kHz for external I2C bus)")])]),e._v(" "),s("h3",{attrs:{id:"excessive-wiring-capacitance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#excessive-wiring-capacitance"}},[e._v("#")]),e._v(" Excessive Wiring Capacitance")]),e._v(" "),s("p",[e._v("The electrical capacity of bus wiring increases as more devices/wires are added. The exact decrease depends on total length of bus wiring and wiring specific capacitance. The problem can be analyzed using an oscilloscope, where we see that the edges of SDA/SCL signals are no longer sharp.")]),e._v(" "),s("p",[e._v("There are several ways to reduce the problem:")]),e._v(" "),s("ul",[s("li",[e._v("Dividing the devices into groups, each with approximately the same number of devices and connecting each group to one autopilot port")]),e._v(" "),s("li",[e._v("Using the shortest and the highest quality I2C cables possible")]),e._v(" "),s("li",[e._v("Separating the devices with a weak open-drain driver to smaller bus with lower capacitance")]),e._v(" "),s("li",[s("a",{attrs:{href:"#i2c-bus-accelerators"}},[e._v("I2C Bus Accelerators")])])]),e._v(" "),s("h2",{attrs:{id:"i2c-bus-accelerators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i2c-bus-accelerators"}},[e._v("#")]),e._v(" I2C Bus Accelerators")]),e._v(" "),s("p",[e._v("I2C bus accelerators are separate circuits that can be used to support longer wiring length on an I2C bus. They work by physically dividing an I2C network into 2 parts and using their own transistors to amplify I2C signals.")]),e._v(" "),s("p",[e._v("Available accelerators include:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFI2CEXT01",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thunderfly TFI2CEXT01"),s("OutboundLink")],1),e._v(": "),s("img",{attrs:{src:a(1532),alt:"I2C bus extender"}}),e._v(" "),s("ul",[s("li",[e._v("This has Dronecode connectors and is hence very easy to add to a Pixhawk I2C setup.")]),e._v(" "),s("li",[e._v("The module has no settings (it works out of the box).")])])])]),e._v(" "),s("h2",{attrs:{id:"i2c-address-translators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i2c-address-translators"}},[e._v("#")]),e._v(" I2C Address Translators")]),e._v(" "),s("p",[e._v("I2C Address Translators can be used to prevent I2C address clashes in systems where there is no other way to assign unique addresses. The work by listening for I2C communication and transforming the address when a slave device is called (according to a preset algorithm).")]),e._v(" "),s("p",[e._v("Supported I2C Address Translators include:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/sensor_bus/translator_tfi2cadt.html"}},[e._v("Thunderfly TFI2CADT01")])],1)]),e._v(" "),s("h2",{attrs:{id:"i2c-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i2c-development"}},[e._v("#")]),e._v(" I2C Development")]),e._v(" "),s("p",[e._v("Software development for I2C devices is described in "),s("RouterLink",{attrs:{to:"/zh/sensor_bus/i2c_development.html"}},[e._v("I2C Bus (Development Overview)")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"further-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/I%C2%B2C",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C"),s("OutboundLink")],1),e._v(" (Wikipedia)")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/i2c",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C Comparative Overview"),s("OutboundLink")],1),e._v(" (learn.sparkfun.com)")]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/middleware/drivers.html"}},[e._v("Driver Framework")])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);