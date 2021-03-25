(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1267:function(t,e,o){t.exports=o.p+"assets/img/ph4-pmw3901-rotation.f4911bd7.png"},1268:function(t,e,o){t.exports=o.p+"assets/img/tindie_notch.49a94630.jpg"},1269:function(t,e,o){t.exports=o.p+"assets/img/hex_hereflow_notch.419123ab.jpg"},1270:function(t,e,o){t.exports=o.p+"assets/img/thoneflow_3901u_notch.08fdde4e.jpg"},1271:function(t,e,o){t.exports=o.p+"assets/img/alientek_pmw3901_notch.ad9d02c3.jpg"},1272:function(t,e,o){t.exports=o.p+"assets/img/ph4-bitcraze-flow-pinout.7056cca3.png"},1273:function(t,e,o){t.exports=o.p+"assets/img/ph4-tindie-flow-pinout.6a85769f.png"},1274:function(t,e,o){t.exports=o.p+"assets/img/ph4-alientek-flow-pinout.c419f198.png"},1275:function(t,e,o){t.exports=o.p+"assets/img/alientek.086a7130.png"},1276:function(t,e,o){t.exports=o.p+"assets/img/ph4-hex-optical-flow.d5b077ae.png"},1277:function(t,e,o){t.exports=o.p+"assets/img/thoneflow_3901u_hero.6ea4bda8.jpg"},2645:function(t,e,o){"use strict";o.r(e);var a=o(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pmw3901-based-flow-sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pmw3901-based-flow-sensors"}},[t._v("#")]),t._v(" PMW3901-Based Flow Sensors")]),t._v(" "),a("p",[t._v("PMW3901 is an "),a("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html"}},[t._v("optical flow")]),t._v(" ASIC that computes the flow internally and provides a difference in pixels between each frame. It is basically a tracking sensor similar to what you would find in a computer mouse, but adapted to work between 80 mm and infinity. The PMW3901 is used in a number of products, including some from: Bitcraze, Tindie, Hex, Thone and Alientek.")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(435),alt:"Bitcraze Flow Deck"}})]),t._v(" "),a("p",[t._v("This topic provides links to sensors that have been tested, along with information about mounting and PX4 configuration (this is common to all sensors of this type).")]),t._v(" "),a("h2",{attrs:{id:"boards-using-pmw3901"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boards-using-pmw3901"}},[t._v("#")]),t._v(" Boards using PMW3901")]),t._v(" "),a("p",[t._v("The following table shows some of the boards that use this sensor, listing the number of interfaces, the number of sensors, the input voltage, and the size. The board name links to board-specific sections that include wiring and purchase information.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Manufacture")]),t._v(" "),a("th",[t._v("Board")]),t._v(" "),a("th",[t._v("Interface")]),t._v(" "),a("th",[t._v("Flow")]),t._v(" "),a("th",[t._v("测距仪")]),t._v(" "),a("th",[t._v("Gyro")]),t._v(" "),a("th",[t._v("Voltage (V)")]),t._v(" "),a("th",[t._v("Size (mm)")]),t._v(" "),a("th",[t._v("Max Height (m)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Bitcraze")]),t._v(" "),a("td",[a("a",{attrs:{href:"#bitcraze_flow_breakout"}},[t._v("Flow breakout")])]),t._v(" "),a("td",[t._v("SPI")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("3 - 5")]),t._v(" "),a("td",[t._v("21x20")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Tindie")]),t._v(" "),a("td",[a("a",{attrs:{href:"#tindie_pmw3901_flow_sensor"}},[t._v("PMW3901 Optical Flow Sensor")])]),t._v(" "),a("td",[t._v("SPI")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("3 - 5")]),t._v(" "),a("td",[t._v("AxB")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("Hex")]),t._v(" "),a("td",[a("a",{attrs:{href:"#hex_hereflow_pwm3901"}},[t._v("HereFlow PMW3901 Optical Flow Sensor")])]),t._v(" "),a("td",[t._v("CAN")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("3 - 5")]),t._v(" "),a("td",[t._v("AxB")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Thone")]),t._v(" "),a("td",[a("a",{attrs:{href:"#thone_thoneflow_3901U"}},[t._v("ThoneFlow-3901U")])]),t._v(" "),a("td",[t._v("UART")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("3 - 5")]),t._v(" "),a("td",[t._v("AxB")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("Alientek")]),t._v(" "),a("td",[a("a",{attrs:{href:"#alientek_atk-pwm3901"}},[t._v("ATK-PMW3901")])]),t._v(" "),a("td",[t._v("SPI")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("3.3 - 4.2")]),t._v(" "),a("td",[t._v("27.5x16.5")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("p",[a("span",{attrs:{id:"external_rangefinder"}})]),t._v(" "),a("h2",{attrs:{id:"external-rangefinders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-rangefinders"}},[t._v("#")]),t._v(" External Rangefinders")]),t._v(" "),a("p",[t._v("An external rangefinder/distance sensor is "),a("em",[t._v("required")]),t._v(" for the sensors that don't have a rangefinder (e.g. "),a("em",[t._v("Tindie")]),t._v(" or "),a("em",[t._v("Thone")]),t._v(") and "),a("em",[t._v("recommended")]),t._v(" for the other boards (as their range is quite limited).")]),t._v(" "),a("p",[t._v("The range needed is dependent on the application:")]),t._v(" "),a("ul",[a("li",[t._v("Indoor flight: ≈4 meters")]),t._v(" "),a("li",[t._v("Outdoor flight: ≥10 metres (e.g. to support the position control in environments where GPS might have issues)")])]),t._v(" "),a("p",[t._v("Any "),a("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("rangefinder/distance sensor")]),t._v(" supported by PX4 may be used. The sensor can be mounted anywhere but must point down, and should be connected/configured as usual.")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("The PX4 team mainly tested using the "),a("RouterLink",{attrs:{to:"/zh/sensor/lidar_lite.html"}},[t._v("Lidar Lite V3")]),t._v(" on larger vehicles and the "),a("RouterLink",{attrs:{to:"/zh/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("Lanbao CM8JL65")]),t._v(" on smaller vehicles.")],1)]),t._v(" "),a("p",[a("span",{attrs:{id:"orientation"}})]),t._v(" "),a("h2",{attrs:{id:"mounting-orientation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounting-orientation"}},[t._v("#")]),t._v(" Mounting/Orientation")]),t._v(" "),a("p",[t._v("Flow modules are typically mounted near the centre of the vehicle. If mounted off-centre you will need to set offsets: "),a("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html#ekf2"}},[t._v("Optical Flow > EKF2")]),t._v(".")],1),t._v(" "),a("p",[t._v("The flow modules may be mounted with any yaw orientation relative to vehicle body frame, but you must set the value used in "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_ROT"}},[t._v("SENS_FLOW_ROT")]),t._v(".")],1),t._v(" "),a("p",[t._v('The "zero" rotation is when the sensor board and '),a("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#heading-and-directions"}},[t._v("vehicle")]),t._v(' X-axes are aligned (i.e. the "front" of the vehicle and the board are in the same direction), with rotations increasing in a clockwise direction.')],1),t._v(" "),a("p",[t._v("PMW3901 modules have a small notch indicating the direction of the "),a("strong",[t._v("back")]),t._v(" of the board. The diagram shows the orientation of the Bitcraze board to the vehicle that corresponds to "),a("code",[t._v("SENS_FLOW_ROT=0")]),t._v(" (note the notch at the back).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1267),alt:"PMW3901 PH4 Rotation"}})]),t._v(" "),a("p",[t._v("You can use the notch to find the orientation of the other boards in the same way:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Tindie"),a("br"),a("img",{attrs:{src:o(1268),alt:"PMW3901 Tindie Notch"}})]),t._v(" "),a("td",[t._v("Hex Hereflow"),a("br"),a("img",{attrs:{src:o(1269),alt:"PMW3901 Hereflow Notch"}})])]),t._v(" "),a("tr",[a("td",[t._v("Thone"),a("br"),a("img",{attrs:{src:o(1270),alt:"PMW3901 Thoneflow Notch"}})]),t._v(" "),a("td",[t._v("Alientek (also has an arrow indicating the front!)"),a("br"),a("img",{attrs:{src:o(1271),alt:"PMW3901 Alientek Notch"}})])])])]),t._v(" "),a("p",[a("span",{attrs:{id:"configuration"}})]),t._v(" "),a("h2",{attrs:{id:"px4-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-配置"}},[t._v("#")]),t._v(" PX4 配置")]),t._v(" "),a("p",[t._v("The PX4 configuration that is common to all boards:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html#ekf2"}},[t._v("Optical Flow > EKF2")]),t._v(" explains how to fuse optical flow data in the EKF2 estimator and set position offsets for the mounting position of the flow sensor.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_FLOW_ROT"}},[t._v("SENS_FLOW_ROT")]),t._v(" sets the orientation of the flow sensor relative to vehicle heading.")],1)]),t._v(" "),a("p",[t._v("In addition:")]),t._v(" "),a("ul",[a("li",[t._v("The distance sensors should be enabled as described in their setup documentation (no flow-specific configuration is required).")]),t._v(" "),a("li",[t._v("Individual flow sensors are setup/configured as described in the sections below.")])]),t._v(" "),a("p",[a("span",{attrs:{id:"bitcraze_flow_breakout"}})]),t._v(" "),a("h2",{attrs:{id:"bitcraze-flow-breakout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcraze-flow-breakout"}},[t._v("#")]),t._v(" Bitcraze Flow breakout")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://www.bitcraze.io/products/flow-breakout/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcraze Flow breakout"),a("OutboundLink")],1),t._v(" directly exposes the "),a("a",{attrs:{href:"#spi_wiring"}},[t._v("SPI interface")]),t._v(" from the PMW3901 module.")]),t._v(" "),a("p",[t._v("The board also incorporates a distance sensor that can be "),a("a",{attrs:{href:"#i2c_wiring"}},[t._v("wired to the Pixhawk I2C port")]),t._v(". This distance sensor is the VL53L0x ToF sensor from STMicroelectronics. The range of the sensor is very limited (2 meters) and will be reduced when flying in the sunlight. We therefore highly recommend that you use an "),a("a",{attrs:{href:"#external_rangefinder"}},[t._v("external distance sensor")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:o(435),alt:"Bitcraze Flow Deck"}})]),t._v(" "),a("p",[a("span",{attrs:{id:"spi_wiring"}})]),t._v(" "),a("h3",{attrs:{id:"spi-wiring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spi-wiring"}},[t._v("#")]),t._v(" SPI Wiring")]),t._v(" "),a("p",[t._v("The PMW3901 driver was written such that the board can be directly plugged into the SPI port on the Pixhawk 4 using the chip select 1. When plugged into the SPI port of the Pixhawk 4, the Bitcraze flow module will be automatically detected at bootup. No parameters will have to configured other than the "),a("a",{attrs:{href:"#orientation"}},[t._v("orientation and position of the sensor")]),t._v(".")]),t._v(" "),a("p",[t._v("The pinout mapping for the Pixhawk SPI port to Bitcraze Flow Board is shown below (the port mapping is the same for all Pixhawk FMU versions).")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pixhawk SPI Port (from left to right)")]),t._v(" "),a("th",[t._v("Bitcraze flow board")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (VCC)")]),t._v(" "),a("td",[t._v("VCC")])]),t._v(" "),a("tr",[a("td",[t._v("2 (SCK)")]),t._v(" "),a("td",[t._v("CLK")])]),t._v(" "),a("tr",[a("td",[t._v("3 (MISO)")]),t._v(" "),a("td",[t._v("MISO")])]),t._v(" "),a("tr",[a("td",[t._v("4 (MOSI)")]),t._v(" "),a("td",[t._v("MOSI")])]),t._v(" "),a("tr",[a("td",[t._v("5 (CS1)")]),t._v(" "),a("td",[t._v("Do not connect")])]),t._v(" "),a("tr",[a("td",[t._v("6 (CS2)")]),t._v(" "),a("td",[t._v("CS")])]),t._v(" "),a("tr",[a("td",[t._v("7 (GND)")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("p",[t._v("In order to connect the bitcraze flow board to the Pixhawk you will need to solder the wires of the Pixhawk SPI cable to the flow board. An SPI cable has 7 wires, from which you need to connect 6 to the flow board.")]),t._v(" "),a("p",[t._v("The following diagram shows how to wire the sensor to a Pixhawk 4.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1272),alt:"Bitcraze PH4 Pinout"}})]),t._v(" "),a("p",[a("span",{attrs:{id:"i2c_wiring"}})]),t._v(" "),a("h3",{attrs:{id:"i2c-wiring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i2c-wiring"}},[t._v("#")]),t._v(" I2C Wiring")]),t._v(" "),a("p",[t._v("The I2C wiring is the same for any other distance sensor. Simply connect the SLA, SLC, GND and VCC to the corresponding (same) pins on the Pixhawk and the sensor.")]),t._v(" "),a("p",[a("span",{attrs:{id:"tindie_pmw3901_flow_sensor"}})]),t._v(" "),a("h2",{attrs:{id:"tindie-pmw3901-optical-flow-sensor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tindie-pmw3901-optical-flow-sensor"}},[t._v("#")]),t._v(" Tindie PMW3901 Optical Flow Sensor")]),t._v(" "),a("p",[t._v("The Tindie "),a("a",{attrs:{href:"https://www.tindie.com/products/onehorse/pmw3901-optical-flow-sensor/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PMW3901 Optical Flow Sensor"),a("OutboundLink")],1),t._v(" exposes the SPI interface from the PMW3901 module exactly as on the Bitcraze module (see "),a("a",{attrs:{href:"#spi_wiring"}},[t._v("SPI Wiring")]),t._v(").")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1273),alt:"Tindie PH4 Pinout"}})]),t._v(" "),a("p",[t._v("The sensor doesn't have a distance sensor onboard so you will need to use an "),a("a",{attrs:{href:"#external_rangefinder"}},[t._v("external distance sensor")]),t._v(".")]),t._v(" "),a("p",[a("span",{attrs:{id:"alientek_atk-pwm3901"}})]),t._v(" "),a("h2",{attrs:{id:"alientek-atk-pmw3901"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alientek-atk-pmw3901"}},[t._v("#")]),t._v(" AlienTek ATK-PMW3901")]),t._v(" "),a("p",[t._v("The AlienTek "),a("a",{attrs:{href:"https://www.aliexpress.com/i/32979605707.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ATK-PMW3901"),a("OutboundLink")],1),t._v(" exposes the SPI interface from the PMW3901 module in the same way as the Bitcraze module (see "),a("a",{attrs:{href:"#spi_wiring"}},[t._v("SPI Wiring")]),t._v(").")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1274),alt:"Alientek Pixhawk4 Connections"}})]),t._v(" "),a("p",[t._v("The board also incorporates a distance sensor (again, we recommend that you use an "),a("a",{attrs:{href:"#external_rangefinder"}},[t._v("external distance sensor")]),t._v("). You can wire the internal sensor to the Pixhawk I2C port "),a("a",{attrs:{href:"#i2c_wiring"}},[t._v("in the same way as any other I2C peripheral")]),t._v(" A screenshot showing the I2C pins (SLA, SLC, GND and VCC) is provided below.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1275),alt:"Alientek Pinout"}})]),t._v(" "),a("p",[a("span",{attrs:{id:"hex_hereflow_pwm3901"}})]),t._v(" "),a("h2",{attrs:{id:"hex-hereflow-pmw3901-optical-flow-sensor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hex-hereflow-pmw3901-optical-flow-sensor"}},[t._v("#")]),t._v(" Hex HereFlow PMW3901 Optical Flow Sensor")]),t._v(" "),a("p",[t._v("The Hex "),a("a",{attrs:{href:"http://www.proficnc.com/all-products/185-pixhawk2-suite.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HereFlow PMW3901 Optical Flow Sensor"),a("OutboundLink")],1),t._v(" is a very small board containing the PMW3901 flow module, the VL53L1X distance sensor and an IMU to better synchronize the flow data with the gyro data.")]),t._v(" "),a("p",[t._v("An onboard microcontroller samples the three sensors and publishes 2 UAVCAN messages containing all the information needed for the flow and distance sensor calculations.")]),t._v(" "),a("p",[t._v("The board can be connected to any CAN port on any Pixhawk board (see "),a("a",{attrs:{href:"#uavcan_wiring"}},[t._v("UAVCAN wiring")]),t._v(").")]),t._v(" "),a("p",[t._v("As for the other optical flow boards, we recommend thatyou use an "),a("a",{attrs:{href:"#external_rangefinder"}},[t._v("external distance sensor")]),t._v(".")]),t._v(" "),a("p",[a("span",{attrs:{id:"uavcan_wiring"}})]),t._v(" "),a("h3",{attrs:{id:"uavcan-wiring-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-wiring-setup"}},[t._v("#")]),t._v(" UAVCAN Wiring/Setup")]),t._v(" "),a("p",[t._v("The diagram below shows how to connect the sensor to the Pixhawk 4 CAN bus.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1276),alt:"Hex PH4 Pinout"}})]),t._v(" "),a("p",[t._v("In addition to any other configuration, you will need to set the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" to either 2 or 3, depending on your system:")],1),t._v(" "),a("ul",[a("li",[a("code",[t._v("UAVCAN_ENABLE=2")]),t._v(": UAVCAN sensors but no motor controllers.")]),t._v(" "),a("li",[a("code",[t._v("UAVCAN_ENABLE=3")]),t._v(": UAVCAN sensors and motor controllers.")])]),t._v(" "),a("p",[a("span",{attrs:{id:"thone_thoneflow_3901U"}})]),t._v(" "),a("h2",{attrs:{id:"thone-thoneflow-3901u"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thone-thoneflow-3901u"}},[t._v("#")]),t._v(" Thone ThoneFlow-3901U")]),t._v(" "),a("p",[t._v("The Thone "),a("a",{attrs:{href:"https://www.seeedstudio.com/ThoneFlow-3901U-UART-Serial-Version-PMW3901-Optical-Flow-Sensor-p-4040.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ThoneFlow-3901U"),a("OutboundLink")],1),t._v(" exposes a PMW3901 optical flow module via a UART interface.")]),t._v(" "),a("p",[t._v("The board doesn't include a distance sensor onboard so you will need to use an "),a("a",{attrs:{href:"#external_rangefinder"}},[t._v("external distance sensor")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1277),alt:"PMW3901 Thoneflow Hero"}})])])}),[],!1,null,null,null);e.default=r.exports},435:function(t,e,o){t.exports=o.p+"assets/img/bitcraze-flow.4b24db28.jpg"}}]);