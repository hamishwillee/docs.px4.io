(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{1653:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"holybro-pix32-v5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pix32-v5"}},[t._v("#")]),t._v(" Holybro Pix32 v5")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),a("a",{attrs:{href:"https://shop.holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),a("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://shop.holybro.com/pix32-v5_p1218.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5"),a("OutboundLink")],1),a("sup",[t._v("®")]),t._v(" is an advanced autopilot flight controller designed and made by Holybro"),a("sup",[t._v("®")]),t._v(".\nIt is optimized to run on PX4 firmware, which is intended for both academic and commercial developers.\nIt is based on the "),a("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk-project"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("FMUv5")]),t._v(" open hardware design and runs PX4 on the "),a("a",{attrs:{href:"https://nuttx.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),a("OutboundLink")],1),t._v(" OS.\nIt can be regarded as a variant version of Pixhawk4.")]),t._v(" "),a("p",[t._v("The Pix32 v5 is designed for pilots who need a high power, flexible and customisable flight control system.\nIt is comprised of a separate flight controller and carrier (base) board, which are connected by a 100pin connector.\nThis design allows users to either select a base board made by Holybro, or customize their own.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(736),alt:"Pix32 v5 Family"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This flight controller is "),a("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"quick-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[t._v("#")]),t._v(" Quick Summary")]),t._v(" "),a("ul",[a("li",[t._v("Main FMU Processor: STM32F765\n"),a("ul",[a("li",[t._v("32 Bit Arm® Cortex®-M7, 216MHz, 2MB memory, 512KB RAM")])])]),t._v(" "),a("li",[t._v("IO Processor: STM32F100\n"),a("ul",[a("li",[t._v("32 Bit Arm® Cortex®-M3, 24MHz, 8KB SRAM")])])]),t._v(" "),a("li",[t._v("On-board sensors:\n"),a("ul",[a("li",[t._v("Accel/Gyro: ICM-20689")]),t._v(" "),a("li",[t._v("Accel/Gyro: BMI055")]),t._v(" "),a("li",[t._v("Magnetometer: IST8310")]),t._v(" "),a("li",[t._v("Barometer: MS5611")])])]),t._v(" "),a("li",[t._v("GPS: u-blox Neo-M8N GPS/GLONASS receiver; integrated magnetometer IST8310")]),t._v(" "),a("li",[t._v("Interfaces:\n"),a("ul",[a("li",[t._v("8-16 PWM outputs (8 from IO, 8 from FMU)")]),t._v(" "),a("li",[t._v("3 dedicated PWM/Capture inputs on FMU")]),t._v(" "),a("li",[t._v("Dedicated R/C input for CPPM")]),t._v(" "),a("li",[t._v("Dedicated R/C input for Spektrum / DSM and S.Bus with analog / PWM RSSI input")]),t._v(" "),a("li",[t._v("Dedicated S.Bus servo output")]),t._v(" "),a("li",[t._v("5 general purpose serial ports\n"),a("ul",[a("li",[t._v("2 with full flow control")]),t._v(" "),a("li",[t._v("1 with separate 1.5A current limit")])])]),t._v(" "),a("li",[t._v("3 I2C ports")]),t._v(" "),a("li",[t._v("4 SPI buses\n"),a("ul",[a("li",[t._v("1 internal high speed SPI sensor bus with 4 chip selects and 6 DRDYs")]),t._v(" "),a("li",[t._v("1 internal low noise SPI bus dedicated for")]),t._v(" "),a("li",[t._v("Barometer with 2 chip selects, no DRDYs")]),t._v(" "),a("li",[t._v("1 internal SPI bus dedicated for FRAM")]),t._v(" "),a("li",[t._v("Supports dedicated SPI calibration EEPROM located on sensor module")]),t._v(" "),a("li",[t._v("1 external SPI buses")])])]),t._v(" "),a("li",[t._v("Up to 2 CANBuses for dual CAN with serial ESC\n"),a("ul",[a("li",[t._v("Each CANBus has individual silent controls or ESC RX-MUX control")]),t._v(" "),a("li",[t._v("Analog inputs for voltage / current of 2 batteries")]),t._v(" "),a("li",[t._v("2 additional analog inputs")])])])])]),t._v(" "),a("li",[t._v("Electrical System:\n"),a("ul",[a("li",[t._v("Power module output: 4.9~5.5V")]),t._v(" "),a("li",[t._v("Max input voltage: 6V")]),t._v(" "),a("li",[t._v("Max current sensing: 120A")]),t._v(" "),a("li",[t._v("USB Power Input: 4.75~5.25V")]),t._v(" "),a("li",[t._v("Servo Rail Input: 0~36V")])])]),t._v(" "),a("li",[t._v("Weight and Dimensions:\n"),a("ul",[a("li",[t._v("Dimensions: 45x45x13.5mm")]),t._v(" "),a("li",[t._v("Weight: 33.0g")])])]),t._v(" "),a("li",[t._v("Environmental Data, Quality & Reliability:\n"),a("ul",[a("li",[t._v("Operating temperature: -40 ~ 85°c")]),t._v(" "),a("li",[t._v("Storage temp. -40~85℃")]),t._v(" "),a("li",[t._v("CE")]),t._v(" "),a("li",[t._v("FCC")]),t._v(" "),a("li",[t._v("RoHS compliant (lead-free)")])])])]),t._v(" "),a("p",[t._v("Additional information can be found in the "),a("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_technical_data_sheet_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 V5 Technical Data Sheet"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"purchase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[t._v("#")]),t._v(" Purchase")]),t._v(" "),a("p",[t._v("Order from "),a("a",{attrs:{href:"https://shop.holybro.com/pix32-v5_p1218.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro website"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"assembly-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assembly-setup"}},[t._v("#")]),t._v(" Assembly/Setup")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/en/assembly/quick_start_holybro_pix32_v5.html"}},[t._v("Pix32 v5 Wiring Quick Start")]),t._v(" provides instructions on how to assemble required/important peripherals including GPS, Power Management Board etc.")],1),t._v(" "),a("h2",{attrs:{id:"base-board-layouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-board-layouts"}},[t._v("#")]),t._v(" Base Board Layouts")]),t._v(" "),a("p",[a("img",{attrs:{src:r(737),alt:"Pix32 v5 Image"}})]),t._v(" "),a("h2",{attrs:{id:"pinouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),a("p",[t._v("Download pinouts here:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[a("em",[t._v("pix32 v5")]),t._v(" baseboard"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_Pix32-V5-Base-Mini-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[a("em",[t._v("pix32 v5")]),t._v(" mini baseboard"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"dimensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dimensions"}},[t._v("#")]),t._v(" Dimensions")]),t._v(" "),a("p",[a("img",{attrs:{src:r(738),alt:"Pix32 v5 Image"}})]),t._v(" "),a("h2",{attrs:{id:"voltage-ratings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voltage-ratings"}},[t._v("#")]),t._v(" Voltage Ratings")]),t._v(" "),a("p",[a("em",[t._v("Pix32 v5")]),t._v(" can be triple-redundant on the power supply if three power sources are supplied.\nThe three power rails are: "),a("strong",[t._v("POWER1")]),t._v(", "),a("strong",[t._v("POWER2")]),t._v(" and "),a("strong",[t._v("USB")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The output power rails "),a("strong",[t._v("FMU PWM OUT")]),t._v(" and "),a("strong",[t._v("I/O PWM OUT")]),t._v(" (0V to 36V) do not power the flight controller board (and are not powered by it).\nYou must supply power to one of "),a("strong",[t._v("POWER1")]),t._v(", "),a("strong",[t._v("POWER2")]),t._v(" or "),a("strong",[t._v("USB")]),t._v(" or the board will be unpowered.")])]),t._v(" "),a("p",[a("strong",[t._v("Normal Operation Maximum Ratings")])]),t._v(" "),a("p",[t._v("Under these conditions all power sources will be used in this order to power the system:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("POWER1")]),t._v(" and "),a("strong",[t._v("POWER2")]),t._v(" inputs (4.9V to 5.5V)")]),t._v(" "),a("li",[a("strong",[t._v("USB")]),t._v(" input (4.75V to 5.25V)")])]),t._v(" "),a("p",[a("strong",[t._v("Absolute Maximum Ratings")])]),t._v(" "),a("p",[t._v("Under these conditions the system will not draw any power (will not be operational), but will remain intact.")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("POWER1")]),t._v(" and "),a("strong",[t._v("POWER2")]),t._v(" inputs (operational range 4.1V to 5.7V, 0V to 10V undamaged)")]),t._v(" "),a("li",[a("strong",[t._v("USB")]),t._v(" input (operational range 4.1V to 5.7V, 0V to 6V undamaged)")]),t._v(" "),a("li",[t._v("Servo input: VDD_SERVO pin of "),a("strong",[t._v("FMU PWM OUT")]),t._v(" and "),a("strong",[t._v("I/O PWM OUT")]),t._v(" (0V to 42V undamaged)")])]),t._v(" "),a("h2",{attrs:{id:"building-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Most users will not need to build this firmware!\nIt is pre-built and automatically installed by "),a("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),a("p",[t._v("To "),a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make holybro_pix32v5_default\n")])])]),a("h2",{attrs:{id:"debug-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-port"}},[t._v("#")]),t._v(" Debug Port")]),t._v(" "),a("p",[t._v("The system's "),a("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("serial console")]),t._v(" and SWD interface runs on the "),a("strong",[t._v("FMU Debug")]),t._v(" port")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(739),alt:"FMU debug port diagram"}})]),t._v(" "),a("p",[t._v("The pinout uses the standard "),a("a",{attrs:{href:"https://pixhawk.org/pixhawk-connector-standard/#dronecode_debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk debug connector pinout"),a("OutboundLink")],1),t._v(".\nFor wiring information see:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/debug/system_console.html#pixhawk_debug_port"}},[t._v("System Console > Pixhawk Debug Port")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"peripherals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#peripherals"}},[t._v("#")]),t._v(" Peripherals")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/sensor/airspeed.html"}},[t._v("Digital Airspeed Sensor")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/telemetry/"}},[t._v("Telemetry Radio Modules")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[t._v("Rangefinders/Distance sensors")])],1)]),t._v(" "),a("h2",{attrs:{id:"supported-platforms-airframes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-platforms-airframes"}},[t._v("#")]),t._v(" Supported Platforms / Airframes")]),t._v(" "),a("p",[t._v("Any multicopter / airplane / rover or boat that can be controlled with normal RC servos or Futaba S-Bus servos.\nThe complete set of supported configurations can be seen in the "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"additional-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[t._v("#")]),t._v(" Additional Information")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_technical_data_sheet_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Technical Data Sheet"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Pinouts"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5-BASE-Schematic_diagram.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Base Board Schematic Diagram"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5-Base-Mini-Board_Schematic_diagram.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Mini Base Board Schematic Diagram"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 reference design pinout"),a("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=o.exports},736:function(t,e,r){t.exports=r.p+"assets/img/pix32_v5_family.f44d5023.jpg"},737:function(t,e,r){t.exports=r.p+"assets/img/pix32_v5_base_boards_layout.09e53106.jpg"},738:function(t,e,r){t.exports=r.p+"assets/img/Dimensions_no_border.dd5ad470.jpg"},739:function(t,e,r){t.exports=r.p+"assets/img/FMU_Debug_Port_Horizontal.90dd8483.jpg"}}]);