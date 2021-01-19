(window.webpackJsonp=window.webpackJsonp||[]).push([[992],{2111:function(e,s,t){"use strict";t.r(s);var a=t(18),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"driver-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#driver-development"}},[e._v("#")]),e._v(" Driver Development")]),e._v(" "),t("p",[e._v("NuttX device drivers are based on the "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/lib/drivers/device",target:"_blank",rel:"noopener noreferrer"}},[e._v("Device"),t("OutboundLink")],1),e._v(" framework.")]),e._v(" "),t("h2",{attrs:{id:"creating-a-driver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-driver"}},[e._v("#")]),e._v(" Creating a Driver")]),e._v(" "),t("p",[e._v("PX4 almost exclusively consumes data from "),t("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[e._v("uORB")]),e._v(". Drivers for common peripheral types must publish the correct uORB messages (for example: gyro, accelerometer, pressure sensors, etc.).")],1),e._v(" "),t("p",[e._v("The best approach for creating a new driver is to start with a similar driver as a template (see "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/drivers"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("More detailed information about working with specific I/O busses and sensors may be available in "),t("RouterLink",{attrs:{to:"/ko/sensor_bus/"}},[e._v("Sensor and Actuator Buses")]),e._v(" section.")],1)]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("Publishing the correct uORB topics is the only pattern that drivers "),t("em",[e._v("must")]),e._v(" follow.")])]),e._v(" "),t("h2",{attrs:{id:"core-architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-architecture"}},[e._v("#")]),e._v(" Core Architecture")]),e._v(" "),t("p",[e._v("PX4 is a "),t("RouterLink",{attrs:{to:"/ko/concept/architecture.html"}},[e._v("reactive system")]),e._v(" and uses "),t("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[e._v("uORB")]),e._v(" publish/subscribe to transport messages. File handles are not required or used for the core operation of the system. Two main APIs are used:")],1),e._v(" "),t("ul",[t("li",[e._v("The publish / subscribe system which has a file, network or shared memory backend depending on the system PX4 runs on.")]),e._v(" "),t("li",[e._v("The global device registry, which can be used to enumerate devices and get/set their configuration. This can be as simple as a linked list or map to the file system.")])]),e._v(" "),t("h2",{attrs:{id:"device-ids"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#device-ids"}},[e._v("#")]),e._v(" Device IDs")]),e._v(" "),t("p",[e._v("PX4 uses device IDs to identify individual sensors consistently across the system. These IDs are stored in the configuration parameters and used to match sensor calibration values, as well as to determine which sensor is logged to which logfile entry.")]),e._v(" "),t("p",[e._v("The order of sensors (e.g. if there is a "),t("code",[e._v("/dev/mag0")]),e._v(" and an alternate "),t("code",[e._v("/dev/mag1")]),e._v(") does not determine priority - the priority is instead stored as part of the published uORB topic.")]),e._v(" "),t("h3",{attrs:{id:"decoding-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decoding-example"}},[e._v("#")]),e._v(" Decoding example")]),e._v(" "),t("p",[e._v("For the example of three magnetometers on a system, use the flight log (.px4log) to dump the parameters. The three parameters encode the sensor IDs and "),t("code",[e._v("MAG_PRIME")]),e._v(" identifies which magnetometer is selected as the primary sensor. Each MAGx_ID is a 24bit number and should be padded left with zeros for manual decoding.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CAL_MAG0_ID = 73225.0\nCAL_MAG1_ID = 66826.0\nCAL_MAG2_ID = 263178.0\nCAL_MAG_PRIME = 73225.0\n")])])]),t("p",[e._v("This is the external HMC5983 connected via I2C, bus 1 at address "),t("code",[e._v("0x1E")]),e._v(": It will show up in the log file as "),t("code",[e._v("IMU.MagX")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# device ID 73225 in 24-bit binary:\n00000001  00011110  00001 001\n\n# decodes to:\nHMC5883   0x1E    bus 1 I2C\n")])])]),t("p",[e._v("This is the internal HMC5983 connected via SPI, bus 1, slave select slot 5. It will show up in the log file as "),t("code",[e._v("IMU1.MagX")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# device ID 66826 in 24-bit binary:\n00000001  00000101  00001 010\n\n# decodes to:\nHMC5883   dev 5   bus 1 SPI\n")])])]),t("p",[e._v("And this is the internal MPU9250 magnetometer connected via SPI, bus 1, slave select slot 4. It will show up in the log file as "),t("code",[e._v("IMU2.MagX")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# device ID 263178 in 24-bit binary:\n00000100  00000100  00001 010\n\n#decodes to:\nMPU9250   dev 4   bus 1 SPI\n")])])]),t("h3",{attrs:{id:"device-id-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#device-id-encoding"}},[e._v("#")]),e._v(" Device ID Encoding")]),e._v(" "),t("p",[e._v("The device ID is a 24bit number according to this format. Note that the first fields are the least significant bits in the decoding example above.")]),e._v(" "),t("div",{staticClass:"language-C extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("DeviceStructure")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("DeviceBusType")]),e._v(" bus_type "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  uint8_t bus"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// which instance of the bus type")]),e._v("\n  uint8_t address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// address on the bus (eg. I2C address)")]),e._v("\n  uint8_t devtype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// device class specific device type")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("The "),t("code",[e._v("bus_type")]),e._v(" is decoded according to:")]),e._v(" "),t("div",{staticClass:"language-C extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("DeviceBusType")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  DeviceBusType_UNKNOWN "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  DeviceBusType_I2C     "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  DeviceBusType_SPI     "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  DeviceBusType_UAVCAN  "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("and "),t("code",[e._v("devtype")]),e._v(" is decoded according to:")]),e._v(" "),t("div",{staticClass:"language-C extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_MAG_DEVTYPE_HMC5883  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x01")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_MAG_DEVTYPE_LSM303D  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x02")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_MAG_DEVTYPE_ACCELSIM "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x03")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_MAG_DEVTYPE_MPU9250  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x04")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_ACC_DEVTYPE_LSM303D  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x11")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_ACC_DEVTYPE_BMA180   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x12")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_ACC_DEVTYPE_MPU6000  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x13")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_ACC_DEVTYPE_ACCELSIM "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x14")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_ACC_DEVTYPE_GYROSIM  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x15")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_ACC_DEVTYPE_MPU9250  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x16")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_GYR_DEVTYPE_MPU6000  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x21")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_GYR_DEVTYPE_L3GD20   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x22")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_GYR_DEVTYPE_GYROSIM  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x23")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_GYR_DEVTYPE_MPU9250  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x24")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_RNG_DEVTYPE_MB12XX   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x31")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("DRV_RNG_DEVTYPE_LL40LS   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x32")])])]),e._v("\n")])])]),t("h2",{attrs:{id:"debugging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),t("p",[e._v("For general debugging topics see: "),t("RouterLink",{attrs:{to:"/ko/debug/"}},[e._v("Debugging/Logging")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"verbose-logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verbose-logging"}},[e._v("#")]),e._v(" Verbose Logging")]),e._v(" "),t("p",[e._v("Drivers (and other modules) output minimally verbose logs strings by default (e.g. for "),t("code",[e._v("PX4_DEBUG")]),e._v(", "),t("code",[e._v("PX4_WARN")]),e._v(", "),t("code",[e._v("PX4_ERR")]),e._v(", etc.).")]),e._v(" "),t("p",[e._v("Log verbosity is defined at build time using the "),t("code",[e._v("RELEASE_BUILD")]),e._v(" (default), "),t("code",[e._v("DEBUG_BUILD")]),e._v(" (verbose) or "),t("code",[e._v("TRACE_BUILD")]),e._v(" (extremely verbose) macros.")]),e._v(" "),t("p",[e._v("Change the logging level using "),t("code",[e._v("COMPILE_FLAGS")]),e._v(" in the driver "),t("code",[e._v("px4_add_module")]),e._v(" function ("),t("strong",[e._v("CMakeLists.txt")]),e._v("). The code fragment below shows the required change to enable DEBUG_BUILD level debugging for a single module or driver.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("px4_add_module(\n    MODULE templates__module\n    MAIN module\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    COMPILE_FLAGS\n        -DDEBUG_BUILD\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    SRCS\n        module.cpp\n    DEPENDS\n        modules__uORB\n    )\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Verbose logging can also be enabled on a per-file basis, by adding "),t("code",[e._v("#define DEBUG_BUILD")]),e._v(" at the very top of a .cpp file (before any includes).")])])])}),[],!1,null,null,null);s.default=r.exports}}]);