(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{1945:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"holybro-pixhawk-5x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pixhawk-5x"}},[t._v("#")]),t._v(" Holybro Pixhawk 5X")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),a("a",{attrs:{href:"https://holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),a("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),a("p",[a("em",[t._v("Pixhawk 5X")]),a("sup",[t._v("®")]),t._v(" is the latest update to the successful family of Pixhawk® flight controllers designed and made in collaboration with Holybro"),a("sup",[t._v("®")]),t._v(" and the PX4 team.")]),t._v(" "),a("p",[t._v("It is based on the "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-011%20Pixhawk%20Autopilot%20v5X%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk​​® Autopilot FMUv5X Standard"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-010%20Pixhawk%20Autopilot%20Bus%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Autopilot Bus Standard"),a("OutboundLink")],1),t._v(", and "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Connector Standard"),a("OutboundLink")],1),t._v(".\nIt comes with the latest PX4 Autopilot​® pre-installed, triple redundancy, temperature-controlled, isolated sensor domain, delivering incredible performance and reliability.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(891),width:"250px",title:"Pixhawk5x Upright Image"}}),t._v(" "),a("img",{attrs:{src:r(892),width:"450px",title:"Pixhawk5x Exploded Image"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This autopilot is "),a("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("supported")]),t._v(" by the PX4 maintenance and test teams.")],1)]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Inside the Pixhawk® 5X, you can find an STMicroelectronics® based STM32F7, paired with sensor technology from Bosch®, InvenSense®, giving you flexibility and reliability for controlling any autonomous vehicle, suitable for both academic and commercial applications.\nThe Pixhawk® 5X’s F7 microcontroller has 2MB flash memory and 512KB RAM.\nThe PX4 Autopilot takes advantage of the increased power and RAM.\nThanks to the updated processing power, developers can be more productive and efficient with their development work, allowing for complex algorithms and models.")]),t._v(" "),a("p",[t._v("The FMUv5X open standard includes high-performance, low-noise IMUs on board, designed for better stabilization.\nTriple redundant IMU & double redundant barometer on separate buses.\nWhen the PX4 Autopilot detects a sensor failure, the system seamlessly switches to another to maintain flight control reliability.")]),t._v(" "),a("p",[t._v("An independent LDO powers every sensor set with independent power control.\nA newly designed vibration isolations to filter out high-frequency vibration and reduce noise to ensure accurate readings, allowing vehicles to reach better overall flight performances.\nExternal sensor bus (SPI5) has two chip select lines and data-ready signals for additional sensors and payload with SPI-interface, and with an integrated Microchip Ethernet PHY (LAN8742AI-CZ-TR), high-speed communication with mission computers via ethernet is now supported.\nTwo smart battery monitoring ports (SMBus), support for INA226 SMBus Power module.")]),t._v(" "),a("p",[t._v("The Pixhawk® 5X is perfect for developers at corporate research labs, startups, academics (research, professors, students), and commercial application.")]),t._v(" "),a("h2",{attrs:{id:"key-design-points"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-design-points"}},[t._v("#")]),t._v(" Key Design Points")]),t._v(" "),a("ul",[a("li",[t._v("Modular flight controller\n"),a("ul",[a("li",[t._v("separated IMU, FMU, and Base system connected by a 100-pin & a 50-pin Pixhawk® Autopilot Bus connector, designed for flexible and customizable systems")])])]),t._v(" "),a("li",[t._v("Redundancy\n"),a("ul",[a("li",[t._v("3x IMU sensors & 2x Barometer sensors on separate buses, allowing parallel and continuous operation even in the event of a hardware failure")])])]),t._v(" "),a("li",[t._v("Triple redundancy domains\n"),a("ul",[a("li",[t._v("Completely isolated sensor domains with separate buses and separate power control")])])]),t._v(" "),a("li",[t._v("Temperature-controlled IMUs\n"),a("ul",[a("li",[t._v("Onboard IMU heating resistors, allowing optimum working temperature of IMUs")])])]),t._v(" "),a("li",[t._v("Vibration isolation system\n"),a("ul",[a("li",[t._v("Newly designed system to filter out high frequency vibration and reduce noise to ensure accurate readings")])])]),t._v(" "),a("li",[t._v("Ethernet interface\n"),a("ul",[a("li",[t._v("For high-speed mission computer integration")])])]),t._v(" "),a("li",[t._v("Automated sensor calibration eliminating varying signals and temperature")]),t._v(" "),a("li",[t._v("Two smart batteries monitoring on SMBus")]),t._v(" "),a("li",[t._v("Additional GPIO line and 5V for the external NFC reader")]),t._v(" "),a("li",[t._v("Secure element for secure authentication of the drone (SE050)")])]),t._v(" "),a("h2",{attrs:{id:"technical-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-specification"}},[t._v("#")]),t._v(" Technical specification")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("FMU Processor: STM32F765")]),t._v(" "),a("ul",[a("li",[t._v("32 Bit Arm® Cortex®-M7, 216MHz, 2MB memory, 512KB RAM")])])]),t._v(" "),a("li",[a("p",[t._v("IO Processor: STM32F100")]),t._v(" "),a("ul",[a("li",[t._v("32 Bit Arm® Cortex®-M3, 24MHz, 8KB SRAM")])])]),t._v(" "),a("li",[a("p",[t._v("On-board Sensors:")]),t._v(" "),a("ul",[a("li",[t._v("Accel/Gyro: ICM-20649")]),t._v(" "),a("li",[t._v("Accel/Gyro: ICM-42688P")]),t._v(" "),a("li",[t._v("Accel/Gyro: ICM-20602")]),t._v(" "),a("li",[t._v("Magnetometer: BMM150")]),t._v(" "),a("li",[t._v("Barometer: 2x BMP388")])])]),t._v(" "),a("li",[a("p",[t._v("Interfaces")]),t._v(" "),a("ul",[a("li",[t._v("16- PWM servo outputs")]),t._v(" "),a("li",[t._v("R/C input for Spektrum / DSM")]),t._v(" "),a("li",[t._v("Dedicated R/C input for PPM and S.Bus input")]),t._v(" "),a("li",[t._v("Dedicated analog / PWM RSSI input and S.Bus output")]),t._v(" "),a("li",[t._v("4 general purpose serial ports\n"),a("ul",[a("li",[t._v("3 with full flow control")]),t._v(" "),a("li",[t._v("1 with separate 1.5A current limit")]),t._v(" "),a("li",[t._v("1 with I2C and additional GPIO line for external NFC reader")])])]),t._v(" "),a("li",[t._v("2 GPS ports\n"),a("ul",[a("li",[t._v("1 full GPS & Safety Switch Port")]),t._v(" "),a("li",[t._v("1 basic GPS port")])])]),t._v(" "),a("li",[t._v("1 I2C port")]),t._v(" "),a("li",[t._v("1 Ethernet port\n"),a("ul",[a("li",[t._v("Transformerless Applications")])])]),t._v(" "),a("li",[t._v("100Mbps")]),t._v(" "),a("li",[t._v("1 SPI bus\n"),a("ul",[a("li",[t._v("2 chip select lines")]),t._v(" "),a("li",[t._v("2 data-ready lines")]),t._v(" "),a("li",[t._v("1 SPI SYNC line")]),t._v(" "),a("li",[t._v("1 SPI reset line")])])]),t._v(" "),a("li",[t._v("2 CAN Buses for CAN peripheral\n"),a("ul",[a("li",[t._v("CAN Bus has individual silent controls or ESC RX-MUX control")])])]),t._v(" "),a("li",[t._v("2 Power input ports with SMBus")]),t._v(" "),a("li",[t._v("1 AD & IO port\n"),a("ul",[a("li",[t._v("2 additional analog input")]),t._v(" "),a("li",[t._v("1 PWM/Capture input")]),t._v(" "),a("li",[t._v("2 Dedicated debug and GPIO lines")])])])])]),t._v(" "),a("li",[a("p",[t._v("Voltage Ratings")]),t._v(" "),a("ul",[a("li",[t._v("Max input voltage: 6V")]),t._v(" "),a("li",[t._v("USB Power Input: 4.75~5.25V")]),t._v(" "),a("li",[t._v("Servo Rail Input: 0~36V")])])]),t._v(" "),a("li",[a("p",[t._v("Dimensions")]),t._v(" "),a("ul",[a("li",[t._v("Flight Controller Module: 38.8 x 31.8 x 14.6mm")]),t._v(" "),a("li",[t._v("Standard Baseboard: 52.4 x 103.4 x 16.7mm")])])]),t._v(" "),a("li",[a("p",[t._v("Weight")]),t._v(" "),a("ul",[a("li",[t._v("Flight Controller Module: 23g")]),t._v(" "),a("li",[t._v("Standard Baseboard: 51g")])])]),t._v(" "),a("li",[a("p",[t._v("Other Characteristics:")]),t._v(" "),a("ul",[a("li",[t._v("Operating & storage temperature: -40 ~ 85°c")])])])]),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),a("p",[t._v("Order from "),a("a",{attrs:{href:"https://holybro.com/products/pixhawk-5x",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"assembly-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assembly-setup"}},[t._v("#")]),t._v(" Assembly/Setup")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk5x.html"}},[t._v("Pixhawk 5X Wiring Quick Start")]),t._v(" provides instructions on how to assemble required/important peripherals including GPS, Power Module etc.")],1),t._v(" "),a("h2",{attrs:{id:"connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[t._v("#")]),t._v(" Connections")]),t._v(" "),a("p",[a("img",{attrs:{src:r(371),alt:"Pixhawk 5x Wiring Overview"}})]),t._v(" "),a("h2",{attrs:{id:"pinouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),a("p",[a("img",{attrs:{src:r(372),alt:"Pixhawk 5X Pinout"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Connector pin assignments are left to right (i.e. Pin 1 is the left-most pin).")])]),t._v(" "),a("p",[t._v("Notes:")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("RouterLink",{attrs:{to:"/en/peripherals/camera.html#camera-capture"}},[t._v("camera capture pin")]),t._v(" ("),a("code",[t._v("PI0")]),t._v(") is pin 2 on the AD&IO port, marked above as "),a("code",[t._v("FMU_CAP1")]),t._v(".")],1),t._v(" "),a("li",[a("em",[t._v("Pixhawk 5X")]),t._v(" pinouts can be downloaded in PDF from from "),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/blob/main/assets/flight_controller/pixhawk5x/pixhawk5x_pinout.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pixhawk5X_Pinout.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("Device")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("USART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("GPS")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM3")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("Debug Console")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS3")]),t._v(" "),a("td",[t._v("UART4 & I2C")])]),t._v(" "),a("tr",[a("td",[t._v("UART5")]),t._v(" "),a("td",[t._v("/dev/ttyS4")]),t._v(" "),a("td",[t._v("TELEM2")])]),t._v(" "),a("tr",[a("td",[t._v("USART6")]),t._v(" "),a("td",[t._v("/dev/ttyS5")]),t._v(" "),a("td",[t._v("PX4IO/RC")])]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("/dev/ttyS6")]),t._v(" "),a("td",[t._v("TELEM1")])]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("/dev/ttyS7")]),t._v(" "),a("td",[t._v("GPS2")])])])]),t._v(" "),a("h2",{attrs:{id:"dimensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dimensions"}},[t._v("#")]),t._v(" Dimensions")]),t._v(" "),a("p",[a("img",{attrs:{src:r(893),alt:"Pixhawk 5X Dimensions"}})]),t._v(" "),a("h2",{attrs:{id:"voltage-ratings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voltage-ratings"}},[t._v("#")]),t._v(" Voltage Ratings")]),t._v(" "),a("p",[a("em",[t._v("Pixhawk 5X")]),t._v(" can be triple-redundant on the power supply if three power sources are supplied. The three power rails are: "),a("strong",[t._v("POWER1")]),t._v(", "),a("strong",[t._v("POWER2")]),t._v(" and "),a("strong",[t._v("USB")]),t._v(".\nThe "),a("strong",[t._v("POWER1")]),t._v(" & "),a("strong",[t._v("POWER2")]),t._v(" ports on the Pixhawk 5X uses the 6 circuit "),a("a",{attrs:{href:"https://www.molex.com/molex/products/part-detail/pcb_receptacles/5024430670",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.00mm Pitch CLIK-Mate Wire-to-Board PCB Receptacle"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Normal Operation Maximum Ratings")])]),t._v(" "),a("p",[t._v("Under these conditions all power sources will be used in this order to power the system:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("POWER1")]),t._v(" and "),a("strong",[t._v("POWER2")]),t._v(" inputs (4.9V to 5.5V)")]),t._v(" "),a("li",[a("strong",[t._v("USB")]),t._v(" input (4.75V to 5.25V)")])]),t._v(" "),a("p",[a("strong",[t._v("Absolute Maximum Ratings")])]),t._v(" "),a("p",[t._v("Under these conditions the system will not draw any power (will not be operational), but will remain intact.")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("POWER1")]),t._v(" and "),a("strong",[t._v("POWER2")]),t._v(" inputs (operational range 4.1V to 5.7V, 0V to 10V undamaged)")]),t._v(" "),a("li",[a("strong",[t._v("USB")]),t._v(" input (operational range 4.1V to 5.7V, 0V to 6V undamaged)")]),t._v(" "),a("li",[t._v("Servo input: VDD_SERVO pin of "),a("strong",[t._v("FMU PWM OUT")]),t._v(" and "),a("strong",[t._v("I/O PWM OUT")]),t._v(" (0V to 42V undamaged)")])]),t._v(" "),a("p",[a("strong",[t._v("Voltage monitoring")])]),t._v(" "),a("p",[t._v("Digital I2C battery monitoring is enabled by default (see "),a("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk5x.html#power"}},[t._v("Quickstart > Power")]),t._v(").")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Analog battery monitoring via an ADC is not supported on this particular board, but may be supported in variations of this flight controller with a different baseboard.")])]),t._v(" "),a("h2",{attrs:{id:"building-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Most users will not need to build this firmware!\nIt is pre-built and automatically installed by "),a("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),a("p",[t._v("To "),a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_fmu-v5x_default\n")])])]),a("p",[a("span",{attrs:{id:"debug_port"}})]),t._v(" "),a("h2",{attrs:{id:"debug-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-port"}},[t._v("#")]),t._v(" Debug Port")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("PX4 System Console")]),t._v(" and "),a("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[t._v("SWD interface")]),t._v(" run on the "),a("strong",[t._v("FMU Debug")]),t._v(" port.")],1),t._v(" "),a("p",[t._v("The pinouts and connector comply with the "),a("RouterLink",{attrs:{to:"/en/debug/swd_debug.html#pixhawk-debug-full-10-pin-sh-debug-port"}},[t._v("Pixhawk Debug Full")]),t._v(" interface defined in the "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),a("OutboundLink")],1),t._v(" interface (JST SM10B connector).")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pin")]),t._v(" "),a("th",[t._v("Signal")]),t._v(" "),a("th",[t._v("Volt")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (red)")]),t._v(" "),a("td",[a("code",[t._v("Vtref")])]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("2 (blk)")]),t._v(" "),a("td",[t._v("Console TX (OUT)")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("3 (blk)")]),t._v(" "),a("td",[t._v("Console RX (IN)")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("4 (blk)")]),t._v(" "),a("td",[a("code",[t._v("SWDIO")])]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("5 (blk)")]),t._v(" "),a("td",[a("code",[t._v("SWCLK")])]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("6 (blk)")]),t._v(" "),a("td",[a("code",[t._v("SWO")])]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("7 (blk)")]),t._v(" "),a("td",[t._v("NFC GPIO")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("8 (blk)")]),t._v(" "),a("td",[t._v("PH11")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("9 (blk)")]),t._v(" "),a("td",[t._v("nRST")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("10 (blk)")]),t._v(" "),a("td",[a("code",[t._v("GND")])]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("p",[t._v("For information about wiring and using this port see:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/debug/system_console.html#pixhawk_debug_port"}},[t._v("PX4 System Console")]),t._v(" (Note, the FMU console maps to USART3).")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[t._v("SWD (JTAG) Hardware Debugging Interface")])],1)]),t._v(" "),a("h2",{attrs:{id:"peripherals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#peripherals"}},[t._v("#")]),t._v(" Peripherals")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://holybro.com/products/digital-air-speed-sensor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Digital Airspeed Sensor"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://holybro.com/collections/telemetry-radios?orderby=date",target:"_blank",rel:"noopener noreferrer"}},[t._v("Telemetry Radio Modules"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[t._v("Rangefinders/Distance sensors")])],1)]),t._v(" "),a("h2",{attrs:{id:"supported-platforms-airframes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-platforms-airframes"}},[t._v("#")]),t._v(" Supported Platforms / Airframes")]),t._v(" "),a("p",[t._v("Any multicopter / airplane / rover or boat that can be controlled with normal RC servos or Futaba S-Bus servos.\nThe complete set of supported configurations can be seen in the "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"further-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-info"}},[t._v("#")]),t._v(" Further info")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk5x.html"}},[t._v("Pixhawk 5X Wiring QuickStart")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pixhawk5X_Spec_Overview.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 5X Overview & Specification"),a("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pixhawk5X_Pinout.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 5X Pinouts"),a("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1Su7u8PHp-Y1AlLGVuH_I8ewkEEXt_bHHYBHglRuVH7E/edit#gid=562580340",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5X reference design pinout"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-011%20Pixhawk%20Autopilot%20v5X%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot FMUv5X Standard"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-010%20Pixhawk%20Autopilot%20Bus%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot Bus Standard"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),a("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=o.exports},371:function(t,e,r){t.exports=r.p+"assets/img/pixhawk5x_wiring_diagram.f6a17506.jpg"},372:function(t,e,r){t.exports=r.p+"assets/img/pixhawk5x_pinout.c9bfba19.png"},891:function(t,e,r){t.exports=r.p+"assets/img/pixhawk5x_hero_upright.7f3295c0.jpg"},892:function(t,e,r){t.exports=r.p+"assets/img/pixhawk5x_exploded_diagram.d32ac784.jpg"},893:function(t,e,r){t.exports=r.p+"assets/img/pixhawk5x_dimensions_all.7a7457da.jpg"}}]);