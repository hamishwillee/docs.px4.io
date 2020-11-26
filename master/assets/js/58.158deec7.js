(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1259:function(e,t,o){e.exports=o.p+"assets/img/ph4-pmw3901-rotation.f4911bd7.png"},1260:function(e,t,o){e.exports=o.p+"assets/img/tindie_notch.49a94630.jpg"},1261:function(e,t,o){e.exports=o.p+"assets/img/hex_hereflow_notch.419123ab.jpg"},1262:function(e,t,o){e.exports=o.p+"assets/img/thoneflow_3901u_notch.08fdde4e.jpg"},1263:function(e,t,o){e.exports=o.p+"assets/img/alientek_pmw3901_notch.ad9d02c3.jpg"},1264:function(e,t,o){e.exports=o.p+"assets/img/ph4-bitcraze-flow-pinout.7056cca3.png"},1265:function(e,t,o){e.exports=o.p+"assets/img/ph4-tindie-flow-pinout.6a85769f.png"},1266:function(e,t,o){e.exports=o.p+"assets/img/ph4-alientek-flow-pinout.c419f198.png"},1267:function(e,t,o){e.exports=o.p+"assets/img/alientek.086a7130.png"},1268:function(e,t,o){e.exports=o.p+"assets/img/ph4-hex-optical-flow.d5b077ae.png"},1269:function(e,t,o){e.exports=o.p+"assets/img/thoneflow_3901u_hero.6ea4bda8.jpg"},1754:function(e,t,o){"use strict";o.r(t);var n=o(18),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"pmw3901-based-flow-sensors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pmw3901-based-flow-sensors"}},[e._v("#")]),e._v(" PMW3901-Based Flow Sensors")]),e._v(" "),n("p",[e._v("PMW3901 is an "),n("RouterLink",{attrs:{to:"/en/sensor/optical_flow.html"}},[e._v("optical flow")]),e._v(" ASIC that computes the flow internally and provides a difference in pixels between each frame.\nIt is basically a tracking sensor similar to what you would find in a computer mouse, but adapted to work between 80 mm and infinity.\nThe PMW3901 is used in a number of products, including some from: Bitcraze, Tindie, Hex, Thone and Alientek.")],1),e._v(" "),n("p",[n("img",{attrs:{src:o(417),alt:"Bitcraze Flow Deck"}})]),e._v(" "),n("p",[e._v("This topic provides links to sensors that have been tested, along with information about mounting and PX4 configuration (this is common to all sensors of this type).")]),e._v(" "),n("h2",{attrs:{id:"boards-using-pmw3901"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#boards-using-pmw3901"}},[e._v("#")]),e._v(" Boards using PMW3901")]),e._v(" "),n("p",[e._v("The following table shows some of the boards that use this sensor, listing the number of interfaces, the number of sensors, the input voltage, and the size.\nThe board name links to board-specific sections that include wiring and purchase information.")]),e._v(" "),n("p",[e._v("Manufacture | Board | Interface | Flow | Range Finder | Gyro | Voltage (V) | Size (mm) | Max Height (m)\n--- | --- | --- | --- | --- | --- | --- | ---\nBitcraze | "),n("a",{attrs:{href:"#bitcraze_flow_breakout"}},[e._v("Flow breakout")]),e._v(" | SPI | Y | Y | - | 3 - 5 | 21x20 | 1\nTindie | "),n("a",{attrs:{href:"#tindie_pmw3901_flow_sensor"}},[e._v("PMW3901 Optical Flow Sensor")]),e._v(" | SPI | Y | - | - | 3 - 5 | AxB | -\nHex | "),n("a",{attrs:{href:"#hex_hereflow_pwm3901"}},[e._v("HereFlow PMW3901 Optical Flow Sensor")]),e._v(" | CAN | Y | Y | Y | 3 - 5 | AxB | 4\nThone | "),n("a",{attrs:{href:"#thone_thoneflow_3901U"}},[e._v("ThoneFlow-3901U")]),e._v(" | UART | Y | - | - | 3 - 5 | AxB | -\nAlientek | "),n("a",{attrs:{href:"#alientek_atk-pwm3901"}},[e._v("ATK-PMW3901")]),e._v(" | SPI | Y | - | - | 3.3 - 4.2 | 27.5x16.5 | 1")]),e._v(" "),n("p",[n("span",{attrs:{id:"external_rangefinder"}})]),e._v(" "),n("h2",{attrs:{id:"external-rangefinders"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#external-rangefinders"}},[e._v("#")]),e._v(" External Rangefinders")]),e._v(" "),n("p",[e._v("An external rangefinder/distance sensor is "),n("em",[e._v("required")]),e._v(" for the sensors that don't have a rangefinder (e.g. "),n("em",[e._v("Tindie")]),e._v(" or "),n("em",[e._v("Thone")]),e._v(") and "),n("em",[e._v("recommended")]),e._v(" for the other boards (as their range is quite limited).")]),e._v(" "),n("p",[e._v("The range needed is dependent on the application:")]),e._v(" "),n("ul",[n("li",[e._v("Indoor flight: ≈4 meters")]),e._v(" "),n("li",[e._v("Outdoor flight: ≥10 metres (e.g. to support the position control in environments where GPS might have issues)")])]),e._v(" "),n("p",[e._v("Any "),n("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[e._v("rangefinder/distance sensor")]),e._v(" supported by PX4 may be used.\nThe sensor can be mounted anywhere but must point down, and should be connected/configured as usual.")],1),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Tip")]),e._v(" The PX4 team mainly tested using the "),n("RouterLink",{attrs:{to:"/en/sensor/lidar_lite.html"}},[e._v("Lidar Lite V3")]),e._v(" on larger vehicles and the "),n("RouterLink",{attrs:{to:"/en/sensor/cm8jl65_ir_distance_sensor.html"}},[e._v("Lanbao CM8JL65")]),e._v(" on smaller vehicles.")],1)]),e._v(" "),n("p",[n("span",{attrs:{id:"orientation"}})]),e._v(" "),n("h2",{attrs:{id:"mounting-orientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mounting-orientation"}},[e._v("#")]),e._v(" Mounting/Orientation")]),e._v(" "),n("p",[e._v("Flow modules are typically mounted near the centre of the vehicle.\nIf mounted off-centre you will need to set offsets: "),n("RouterLink",{attrs:{to:"/en/sensor/optical_flow.html#ekf2"}},[e._v("Optical Flow > EKF2")]),e._v(".")],1),e._v(" "),n("p",[e._v("The flow modules may be mounted with any yaw orientation relative to vehicle body frame, but you must set the value used in "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_FLOW_ROT"}},[e._v("SENS_FLOW_ROT")]),e._v(".")],1),e._v(" "),n("p",[e._v('The "zero" rotation is when the sensor board and '),n("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#heading-and-directions"}},[e._v("vehicle")]),e._v(' X-axes are aligned (i.e. the "front" of the vehicle and the board are in the same direction), with rotations increasing in a clockwise direction.')],1),e._v(" "),n("p",[e._v("PMW3901 modules have a small notch indicating the direction of the "),n("strong",[e._v("back")]),e._v(" of the board.\nThe diagram shows the orientation of the Bitcraze board to the vehicle that corresponds to "),n("code",[e._v("SENS_FLOW_ROT=0")]),e._v(" (note the notch at the back).")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1259),alt:"PMW3901 PH4 Rotation"}})]),e._v(" "),n("p",[e._v("You can use the notch to find the orientation of the other boards in the same way:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th"),e._v(" "),n("th")])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Tindie"),n("br"),n("img",{attrs:{src:o(1260),alt:"PMW3901 Tindie Notch"}})]),e._v(" "),n("td",[e._v("Hex Hereflow"),n("br"),n("img",{attrs:{src:o(1261),alt:"PMW3901 Hereflow Notch"}})])]),e._v(" "),n("tr",[n("td",[e._v("Thone"),n("br"),n("img",{attrs:{src:o(1262),alt:"PMW3901 Thoneflow Notch"}})]),e._v(" "),n("td",[e._v("Alientek (also has an arrow indicating the front!)"),n("br"),n("img",{attrs:{src:o(1263),alt:"PMW3901 Alientek Notch"}})])])])]),e._v(" "),n("p",[n("span",{attrs:{id:"configuration"}})]),e._v(" "),n("h2",{attrs:{id:"px4-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),n("p",[e._v("The PX4 configuration that is common to all boards:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/sensor/optical_flow.html#ekf2"}},[e._v("Optical Flow > EKF2")]),e._v(" explains how to fuse optical flow data in the EKF2 estimator and set position offsets for the mounting position of the flow sensor.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_FLOW_ROT"}},[e._v("SENS_FLOW_ROT")]),e._v(" sets the orientation of the flow sensor relative to vehicle heading.")],1)]),e._v(" "),n("p",[e._v("In addition:")]),e._v(" "),n("ul",[n("li",[e._v("The distance sensors should be enabled as described in their setup documentation (no flow-specific configuration is required).")]),e._v(" "),n("li",[e._v("Individual flow sensors are setup/configured as described in the sections below.")])]),e._v(" "),n("p",[n("span",{attrs:{id:"bitcraze_flow_breakout"}})]),e._v(" "),n("h2",{attrs:{id:"bitcraze-flow-breakout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bitcraze-flow-breakout"}},[e._v("#")]),e._v(" Bitcraze Flow breakout")]),e._v(" "),n("p",[e._v("The "),n("a",{attrs:{href:"https://www.bitcraze.io/products/flow-breakout/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitcraze Flow breakout"),n("OutboundLink")],1),e._v(" directly exposes the "),n("a",{attrs:{href:"#spi_wiring"}},[e._v("SPI interface")]),e._v(" from the PMW3901 module.")]),e._v(" "),n("p",[e._v("The board also incorporates a distance sensor that can be "),n("a",{attrs:{href:"#i2c_wiring"}},[e._v("wired to the Pixhawk I2C port")]),e._v(".\nThis distance sensor is the VL53L0x ToF sensor from STMicroelectronics.\nThe range of the sensor is very limited (2 meters) and will be reduced when flying in the sunlight.\nWe therefore highly recommend that you use an "),n("a",{attrs:{href:"#external_rangefinder"}},[e._v("external distance sensor")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(417),alt:"Bitcraze Flow Deck"}})]),e._v(" "),n("p",[n("span",{attrs:{id:"spi_wiring"}})]),e._v(" "),n("h3",{attrs:{id:"spi-wiring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spi-wiring"}},[e._v("#")]),e._v(" SPI Wiring")]),e._v(" "),n("p",[e._v("The PMW3901 driver was written such that the board can be directly plugged into the SPI port on the Pixhawk 4 using the chip select 1.\nWhen plugged into the SPI port of the Pixhawk 4, the Bitcraze flow module will be automatically detected at bootup.\nNo parameters will have to configured other than the "),n("a",{attrs:{href:"#orientation"}},[e._v("orientation and position of the sensor")]),e._v(".")]),e._v(" "),n("p",[e._v("The pinout mapping for the Pixhawk SPI port to Bitcraze Flow Board is shown below (the port mapping is the same for all Pixhawk FMU versions).")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Pixhawk SPI Port (from left to right)")]),e._v(" "),n("th",[e._v("Bitcraze flow board")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("1 (VCC)")]),e._v(" "),n("td",[e._v("VCC")])]),e._v(" "),n("tr",[n("td",[e._v("2 (SCK)")]),e._v(" "),n("td",[e._v("CLK")])]),e._v(" "),n("tr",[n("td",[e._v("3 (MISO)")]),e._v(" "),n("td",[e._v("MISO")])]),e._v(" "),n("tr",[n("td",[e._v("4 (MOSI)")]),e._v(" "),n("td",[e._v("MOSI")])]),e._v(" "),n("tr",[n("td",[e._v("5 (CS1)")]),e._v(" "),n("td",[e._v("Do not connect")])]),e._v(" "),n("tr",[n("td",[e._v("6 (CS2)")]),e._v(" "),n("td",[e._v("CS")])]),e._v(" "),n("tr",[n("td",[e._v("7 (GND)")]),e._v(" "),n("td",[e._v("GND")])])])]),e._v(" "),n("p",[e._v("In order to connect the bitcraze flow board to the Pixhawk you will need to solder the wires of the Pixhawk SPI cable to the flow board.\nAn SPI cable has 7 wires, from which you need to connect 6 to the flow board.")]),e._v(" "),n("p",[e._v("The following diagram shows how to wire the sensor to a Pixhawk 4.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1264),alt:"Bitcraze PH4 Pinout"}})]),e._v(" "),n("p",[n("span",{attrs:{id:"i2c_wiring"}})]),e._v(" "),n("h3",{attrs:{id:"i2c-wiring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#i2c-wiring"}},[e._v("#")]),e._v(" I2C Wiring")]),e._v(" "),n("p",[e._v("The I2C wiring is the same for any other distance sensor.\nSimply connect the SLA, SLC, GND and VCC to the corresponding (same) pins on the Pixhawk and the sensor.")]),e._v(" "),n("p",[n("span",{attrs:{id:"tindie_pmw3901_flow_sensor"}})]),e._v(" "),n("h2",{attrs:{id:"tindie-pmw3901-optical-flow-sensor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tindie-pmw3901-optical-flow-sensor"}},[e._v("#")]),e._v(" Tindie PMW3901 Optical Flow Sensor")]),e._v(" "),n("p",[e._v("The Tindie "),n("a",{attrs:{href:"https://www.tindie.com/products/onehorse/pmw3901-optical-flow-sensor/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PMW3901 Optical Flow Sensor"),n("OutboundLink")],1),e._v(" exposes the SPI interface from the PMW3901 module exactly as on the Bitcraze module (see "),n("a",{attrs:{href:"#spi_wiring"}},[e._v("SPI Wiring")]),e._v(").")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1265),alt:"Tindie PH4 Pinout"}})]),e._v(" "),n("p",[e._v("The sensor doesn't have a distance sensor onboard so you will need to use an "),n("a",{attrs:{href:"#external_rangefinder"}},[e._v("external distance sensor")]),e._v(".")]),e._v(" "),n("p",[n("span",{attrs:{id:"alientek_atk-pwm3901"}})]),e._v(" "),n("h2",{attrs:{id:"alientek-atk-pmw3901"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alientek-atk-pmw3901"}},[e._v("#")]),e._v(" AlienTek ATK-PMW3901")]),e._v(" "),n("p",[e._v("The AlienTek "),n("a",{attrs:{href:"https://www.aliexpress.com/i/32979605707.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ATK-PMW3901"),n("OutboundLink")],1),e._v(" exposes the SPI interface from the PMW3901 module in the same way as the Bitcraze module (see "),n("a",{attrs:{href:"#spi_wiring"}},[e._v("SPI Wiring")]),e._v(").")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1266),alt:"Alientek Pixhawk4 Connections"}})]),e._v(" "),n("p",[e._v("The board also incorporates a distance sensor (again, we recommend that you use an "),n("a",{attrs:{href:"#external_rangefinder"}},[e._v("external distance sensor")]),e._v(").\nYou can wire the internal sensor to the Pixhawk I2C port "),n("a",{attrs:{href:"#i2c_wiring"}},[e._v("in the same way as any other I2C peripheral")]),e._v("\nA screenshot showing the I2C pins (SLA, SLC, GND and VCC) is provided below.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1267),alt:"Alientek Pinout"}})]),e._v(" "),n("p",[n("span",{attrs:{id:"hex_hereflow_pwm3901"}})]),e._v(" "),n("h2",{attrs:{id:"hex-hereflow-pmw3901-optical-flow-sensor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hex-hereflow-pmw3901-optical-flow-sensor"}},[e._v("#")]),e._v(" Hex HereFlow PMW3901 Optical Flow Sensor")]),e._v(" "),n("p",[e._v("The Hex "),n("a",{attrs:{href:"http://www.proficnc.com/all-products/185-pixhawk2-suite.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HereFlow PMW3901 Optical Flow Sensor"),n("OutboundLink")],1),e._v(" is a very small board containing the PMW3901 flow module, the VL53L1X distance sensor and an IMU to better synchronize the flow data with the gyro data.")]),e._v(" "),n("p",[e._v("An onboard microcontroller samples the three sensors and publishes 2 UAVCAN messages containing all the information needed for the flow and distance sensor calculations.")]),e._v(" "),n("p",[e._v("The board can be connected to any CAN port on any Pixhawk board (see "),n("a",{attrs:{href:"#uavcan_wiring"}},[e._v("UAVCAN wiring")]),e._v(").")]),e._v(" "),n("p",[e._v("As for the other optical flow boards, we recommend thatyou use an "),n("a",{attrs:{href:"#external_rangefinder"}},[e._v("external distance sensor")]),e._v(".")]),e._v(" "),n("p",[n("span",{attrs:{id:"uavcan_wiring"}})]),e._v(" "),n("h3",{attrs:{id:"uavcan-wiring-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-wiring-setup"}},[e._v("#")]),e._v(" UAVCAN Wiring/Setup")]),e._v(" "),n("p",[e._v("The diagram below shows how to connect the sensor to the Pixhawk 4 CAN bus.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1268),alt:"Hex PH4 Pinout"}})]),e._v(" "),n("p",[e._v("In addition to any other configuration, you will need to set the parameter "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to either 2 or 3, depending on your system:")],1),e._v(" "),n("ul",[n("li",[n("code",[e._v("UAVCAN_ENABLE=2")]),e._v(": UAVCAN sensors but no motor controllers.")]),e._v(" "),n("li",[n("code",[e._v("UAVCAN_ENABLE=3")]),e._v(": UAVCAN sensors and motor controllers.")])]),e._v(" "),n("p",[n("span",{attrs:{id:"thone_thoneflow_3901U"}})]),e._v(" "),n("h2",{attrs:{id:"thone-thoneflow-3901u"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#thone-thoneflow-3901u"}},[e._v("#")]),e._v(" Thone ThoneFlow-3901U")]),e._v(" "),n("p",[e._v("The Thone "),n("a",{attrs:{href:"https://www.seeedstudio.com/ThoneFlow-3901U-UART-Serial-Version-PMW3901-Optical-Flow-Sensor-p-4040.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ThoneFlow-3901U"),n("OutboundLink")],1),e._v(" exposes a PMW3901 optical flow module via a UART interface.")]),e._v(" "),n("p",[e._v("The board doesn't include a distance sensor onboard so you will need to use an "),n("a",{attrs:{href:"#external_rangefinder"}},[e._v("external distance sensor")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1269),alt:"PMW3901 Thoneflow Hero"}})])])}),[],!1,null,null,null);t.default=a.exports},417:function(e,t,o){e.exports=o.p+"assets/img/bitcraze-flow.4b24db28.jpg"}}]);