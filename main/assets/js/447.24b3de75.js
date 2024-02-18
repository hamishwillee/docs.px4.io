(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{2876:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"holybro-pixhawk-6x-rt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pixhawk-6x-rt"}},[t._v("#")]),t._v(" Holybro Pixhawk 6X-RT")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("PX4 does not manufacture this (or any) autopilot. Contact the "),a("a",{attrs:{href:"https://holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),a("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),a("p",[a("em",[t._v("Pixhawk 6X-RT")]),a("sup",[t._v("®")]),t._v(" is the latest update to the successful family of Pixhawk® flight controllers designed and made in collaboration with Holybro"),a("sup",[t._v("®")]),t._v(", NXP's mobile robotics team and the PX4 team based on NXP's open source reference design.")]),t._v(" "),a("p",[t._v("It is based on the "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-012%20Pixhawk%20Autopilot%20v6X%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk​​® Autopilot FMUv6X Standard"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-010%20Pixhawk%20Autopilot%20Bus%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Autopilot Bus Standard"),a("OutboundLink")],1),t._v(", and "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Connector Standard"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Equipped with a high performance NXP i.mx RT1176 dual core Processor, modular design, triple redundancy, temperature-controlled IMU board, isolated sensor domains, delivering incredible performance, reliability, and flexibility.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(916),width:"350px",title:"Pixhawk6X-RT Upright Image"}}),t._v(" "),a("img",{attrs:{src:r(390),width:"300px",title:"Pixhawk6X Exploded Image"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This autopilot is "),a("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("supported")]),t._v(" by the PX4 maintenance and test teams.")],1)]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Inside the Pixhawk®​ 6X-RT, you can find an NXP i.mx RT1176, paired with sensor technology from Bosch®​​, InvenSense®​,​ giving you flexibility and reliability for controlling any autonomous vehicle, suitable for both academic and commercial applications.")]),t._v(" "),a("p",[t._v("The Pixhawk® 6X-RT's i.mx RT1176 Crossover dual-core MCU contain an Arm® Cortex®-M7 core running up to 1GHz and Arm® Cortex®-M4 core running up to 400MHz, has 2MB SRAM and external XIP Flash with 64MB. The PX4 Autopilot takes advantage of the increased power and RAM. Thanks to the increased processing power, developers can be more productive and efficient with their development work, allowing for complex algorithms and models.")]),t._v(" "),a("p",[t._v("The FMUv6X open standard includes high-performance, low-noise IMUs on board, designed for better stabilization. Triple redundant IMU & double redundant barometer on separate buses. When PX4 detects a sensor failure, the system seamlessly switches to another to maintain flight control reliability.")]),t._v(" "),a("p",[t._v("An independent LDO powers every sensor set with independent power control. A vibration isolation System to filter out high-frequency vibration and reduce noise to ensure accurate readings, allowing vehicles to reach better overall flight performances.")]),t._v(" "),a("p",[t._v("External sensor bus (SPI5) has two chip select lines and data-ready signals for additional sensors and payload with SPI-interface, and with an integrated Microchip Ethernet PHY, high-speed communication with mission computers via ethernet is now possible.")]),t._v(" "),a("p",[t._v("The Pixhawk®​ 6X-RT is perfect for developers at corporate research labs, startups, academics (research, professors, students), and commercial application.")]),t._v(" "),a("h2",{attrs:{id:"key-design-points"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-design-points"}},[t._v("#")]),t._v(" Key Design Points")]),t._v(" "),a("ul",[a("li",[t._v("High performance "),a("a",{attrs:{href:"https://www.nxp.com/products/processors-and-microcontrollers/arm-microcontrollers/i-mx-rt-crossover-mcus/i-mx-rt1170-1-ghz-crossover-mcu-with-arm-cortex-cores:i.MX-RT1170",target:"_blank",rel:"noopener noreferrer"}},[t._v("NXP i.MX RT1170 1GHz Crossover MCU"),a("OutboundLink")],1),t._v(" with Arm® Cortex® cores")]),t._v(" "),a("li",[t._v("Hardware secure element "),a("a",{attrs:{href:"https://www.nxp.com/products/security-and-authentication/authentication/edgelock-se051-proven-easy-to-use-iot-security-solution-with-support-for-updatability-and-custom-applets:SE051",target:"_blank",rel:"noopener noreferrer"}},[t._v("NXP EdgeLock SE051"),a("OutboundLink")],1),t._v(" an extension to the widely trusted EdgeLock SE050 Plug & Trust secure element family, supports applet updates in the field and delivers proven security certified to CC EAL 6+, with AVA_VAN.5 up to the OS level, for strong protection against the most recent attack scenarios. E.g, to securely store operator ID or certificates.")]),t._v(" "),a("li",[t._v("Modular flight controller: separated IMU, FMU, and Base system connected by a 100-pin & a 50-pin Pixhawk®​ Autopilot Bus connector.")]),t._v(" "),a("li",[t._v("Redundancy: 3x IMU sensors & 2x Barometer sensors on separate buses")]),t._v(" "),a("li",[t._v("Triple redundancy domains: Completely isolated sensor domains with separate buses and separate power control")]),t._v(" "),a("li",[t._v("Newly designed vibration isolation system to filter out high frequency vibration and reduce noise to ensure accurate readings")]),t._v(" "),a("li",[t._v("Ethernet interface for high-speed mission computer integration")]),t._v(" "),a("li",[t._v("IMUs are temperature-controlled by onboard heating resistors, allowing optimum working temperature of IMUs ")])]),t._v(" "),a("h3",{attrs:{id:"processors-sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#processors-sensors"}},[t._v("#")]),t._v(" Processors & Sensors")]),t._v(" "),a("ul",[a("li",[t._v("FMU Processor: NXP i.MX RT1176\n"),a("ul",[a("li",[t._v("32 Bit Arm® Cortex®-M7, 1GHz")]),t._v(" "),a("li",[t._v("32 Bit Arm® Cortex®-M4, 400MHz secondary core")]),t._v(" "),a("li",[t._v("64MB external flash memory")]),t._v(" "),a("li",[t._v("2MB RAM")])])]),t._v(" "),a("li",[t._v("NXP EdgeLock SE051 hardware secure element\n"),a("ul",[a("li",[t._v("IEC62443-4-2 certified for the applicable requirements")]),t._v(" "),a("li",[t._v("46 kB user memory with personalization options to go up to 104 kB")]),t._v(" "),a("li",[t._v("Groundbreaking CC EAL6+ certified solution for IoT deployments")]),t._v(" "),a("li",[t._v("AES and 3DES encryption and decryption")])])]),t._v(" "),a("li",[t._v("IO Processor: STM32F100\n"),a("ul",[a("li",[t._v("32 Bit Arm® Cortex®-M3, 24MHz, 8KB SRAM")])])]),t._v(" "),a("li",[t._v("On-board sensors\n"),a("ul",[a("li",[t._v("Accel/Gyro: ICM-20649 or BMI088")]),t._v(" "),a("li",[t._v("Accel/Gyro: ICM-42688-P")]),t._v(" "),a("li",[t._v("Accel/Gyro: ICM-42670-P")]),t._v(" "),a("li",[t._v("Mag: BMM150")]),t._v(" "),a("li",[t._v("Barometer: 2x BMP388")])])])]),t._v(" "),a("h3",{attrs:{id:"electrical-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#electrical-data"}},[t._v("#")]),t._v(" Electrical data")]),t._v(" "),a("ul",[a("li",[t._v("Voltage Ratings:\n"),a("ul",[a("li",[t._v("Max input voltage: 6V")]),t._v(" "),a("li",[t._v("USB Power Input: 4.75~5.25V")]),t._v(" "),a("li",[t._v("Servo Rail Input: 0~36V")])])]),t._v(" "),a("li",[t._v("Current Ratings:\n"),a("ul",[a("li",[a("code",[t._v("TELEM1")]),t._v(" output current limiter: 1.5A")]),t._v(" "),a("li",[t._v("All other port combined output current limiter: 1.5A")])])])]),t._v(" "),a("h3",{attrs:{id:"mechanical-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mechanical-data"}},[t._v("#")]),t._v(" Mechanical data")]),t._v(" "),a("ul",[a("li",[t._v("Dimensions\n"),a("ul",[a("li",[t._v("Flight Controller Module: 38.8 x 31.8 x 14.6mm")]),t._v(" "),a("li",[t._v("Standard Baseboard: 52.4 x 103.4 x 16.7mm")]),t._v(" "),a("li",[t._v("Mini Baseboard: 43.4 x 72.8 x 14.2 mm")])])]),t._v(" "),a("li",[t._v("Weight\n"),a("ul",[a("li",[t._v("Flight Controller Module: 23g")]),t._v(" "),a("li",[t._v("Standard Baseboard: 51g")]),t._v(" "),a("li",[t._v("Mini Baseboard: 26.5g")])])])]),t._v(" "),a("h3",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[t._v("#")]),t._v(" Interfaces")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("16- PWM servo outputs")])]),t._v(" "),a("li",[a("p",[t._v("R/C input for Spektrum / DSM")])]),t._v(" "),a("li",[a("p",[t._v("Dedicated R/C input for PPM and S.Bus input")])]),t._v(" "),a("li",[a("p",[t._v("Dedicated analog / PWM RSSI input and S.Bus output")])]),t._v(" "),a("li",[a("p",[t._v("4 general purpose serial ports")]),t._v(" "),a("ul",[a("li",[t._v("3 with full flow control")]),t._v(" "),a("li",[t._v("1 with separate 1.5A current limit (Telem1)")]),t._v(" "),a("li",[t._v("1 with I2C and additional GPIO line for external NFC reader")])])]),t._v(" "),a("li",[a("p",[t._v("2 GPS ports")]),t._v(" "),a("ul",[a("li",[t._v("1 full GPS plus Safety Switch Port")]),t._v(" "),a("li",[t._v("1 basic GPS port")])])]),t._v(" "),a("li",[a("p",[t._v("1 I2C port")])]),t._v(" "),a("li",[a("p",[t._v("1 Ethernet port")]),t._v(" "),a("ul",[a("li",[t._v("Transformerless Applications")]),t._v(" "),a("li",[t._v("100Mbps")])])]),t._v(" "),a("li",[a("p",[t._v("1 SPI bus")]),t._v(" "),a("ul",[a("li",[t._v("2 chip select lines")]),t._v(" "),a("li",[t._v("2 data-ready lines")]),t._v(" "),a("li",[t._v("1 SPI SYNC line")]),t._v(" "),a("li",[t._v("1 SPI reset line")])])]),t._v(" "),a("li",[a("p",[t._v("2 CAN Buses for CAN peripheral")]),t._v(" "),a("ul",[a("li",[t._v("CAN Bus has individual silent controls or ESC RX-MUX control")])])]),t._v(" "),a("li",[a("p",[t._v("2 Power input ports with SMBus")]),t._v(" "),a("ul",[a("li",[t._v("1 AD & IO port")]),t._v(" "),a("li",[t._v("2 additional analog input")]),t._v(" "),a("li",[t._v("1 PWM/Capture input")]),t._v(" "),a("li",[t._v("2 Dedicated debug and GPIO lines")])])]),t._v(" "),a("li",[a("p",[t._v("Other Characteristics:")]),t._v(" "),a("ul",[a("li",[t._v("Operating & storage temperature: -40 ~ 85°c")])])])]),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),a("p",[t._v("Order from "),a("a",{attrs:{href:"https://holybro.com/products/fmuv6x-rt-developer-edition",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"assembly-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assembly-setup"}},[t._v("#")]),t._v(" Assembly/Setup")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/ko/assembly/quick_start_pixhawk6x.html"}},[t._v("Pixhawk 6X Wiring Quick Start")]),t._v(" provides instructions on how to assemble required/important peripherals including GPS, Power Module etc.")],1),t._v(" "),a("h2",{attrs:{id:"connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[t._v("#")]),t._v(" Connections")]),t._v(" "),a("p",[t._v("Sample Wiring Diagram")]),t._v(" "),a("p",[a("img",{attrs:{src:r(343),alt:"Pixhawk 6X Wiring Overview"}})]),t._v(" "),a("h2",{attrs:{id:"pinouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.holybro.com/autopilot/pixhawk-6x/pixhawk-baseboard-pinout",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Pixhawk Baseboard Pinout"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.holybro.com/autopilot/pixhawk-6x/pixhawk-mini-baseboard-pinout",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Pixhawk Mini-Baseboard Pinout"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Notes:")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("RouterLink",{attrs:{to:"/ko/peripherals/camera.html#camera-capture"}},[t._v("camera capture pin")]),t._v(" ("),a("code",[t._v("PI0")]),t._v(") is pin 2 on the AD&IO port, marked above as "),a("code",[t._v("FMU_CAP1")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("Device")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("UART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("Debug")])]),t._v(" "),a("tr",[a("td",[t._v("UART3")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("GPS")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("TELEM1")])]),t._v(" "),a("tr",[a("td",[t._v("UART5")]),t._v(" "),a("td",[t._v("/dev/ttyS3")]),t._v(" "),a("td",[t._v("GPS2")])]),t._v(" "),a("tr",[a("td",[t._v("UART6")]),t._v(" "),a("td",[t._v("/dev/ttyS4")]),t._v(" "),a("td",[t._v("PX4IO")])]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("/dev/ttyS5")]),t._v(" "),a("td",[t._v("TELEM2")])]),t._v(" "),a("tr",[a("td",[t._v("UART10")]),t._v(" "),a("td",[t._v("/dev/ttyS6")]),t._v(" "),a("td",[t._v("TELEM3")])]),t._v(" "),a("tr",[a("td",[t._v("UART11")]),t._v(" "),a("td",[t._v("/dev/ttyS7")]),t._v(" "),a("td",[t._v("External")])])])]),t._v(" "),a("h2",{attrs:{id:"dimensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dimensions"}},[t._v("#")]),t._v(" Dimensions")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.holybro.com/autopilot/pixhawk-6x/dimensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 6X Dimensions"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"voltage-ratings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voltage-ratings"}},[t._v("#")]),t._v(" Voltage Ratings")]),t._v(" "),a("p",[a("em",[t._v("Pixhawk 6X-RT")]),t._v(" can be triple-redundant on the power supply if three power sources are supplied. The three power rails are: "),a("strong",[t._v("POWER1")]),t._v(", "),a("strong",[t._v("POWER2")]),t._v(" and "),a("strong",[t._v("USB")]),t._v(". The "),a("strong",[t._v("POWER1")]),t._v(" & "),a("strong",[t._v("POWER2")]),t._v(" ports on the Pixhawk 6X uses the 6 circuit "),a("a",{attrs:{href:"https://www.molex.com/molex/products/part-detail/pcb_receptacles/5024430670",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.00mm Pitch CLIK-Mate Wire-to-Board PCB Receptacle"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Normal Operation Maximum Ratings")])]),t._v(" "),a("p",[t._v("Under these conditions all power sources will be used in this order to power the system:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("POWER1")]),t._v(" and "),a("strong",[t._v("POWER2")]),t._v(" inputs (4.9V to 5.5V)")]),t._v(" "),a("li",[a("strong",[t._v("USB")]),t._v(" input (4.75V to 5.25V)")])]),t._v(" "),a("p",[a("strong",[t._v("Absolute Maximum Ratings")])]),t._v(" "),a("p",[t._v("Under these conditions the system will not draw any power (will not be operational), but will remain intact.")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("POWER1")]),t._v(" and "),a("strong",[t._v("POWER2")]),t._v(" inputs (operational range 4.1V to 5.7V, 0V to 10V undamaged)")]),t._v(" "),a("li",[a("strong",[t._v("USB")]),t._v(" input (operational range 4.1V to 5.7V, 0V to 6V undamaged)")]),t._v(" "),a("li",[t._v("Servo input: VDD_SERVO pin of "),a("strong",[t._v("FMU PWM OUT")]),t._v(" and "),a("strong",[t._v("I/O PWM OUT")]),t._v(" (0V to 42V undamaged)")])]),t._v(" "),a("p",[a("strong",[t._v("Voltage monitoring")])]),t._v(" "),a("p",[t._v("Digital I2C battery monitoring is enabled by default (see "),a("RouterLink",{attrs:{to:"/ko/assembly/quick_start_pixhawk6x.html#power"}},[t._v("Quickstart > Power")]),t._v(").")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Analog battery monitoring via an ADC is not supported on this particular board, but may be supported in variations of this flight controller with a different baseboard.")])]),t._v(" "),a("h2",{attrs:{id:"building-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),a("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),a("p",[t._v("To "),a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_fmu-v6xrt_default\n")])])]),a("p",[a("a",{attrs:{id:"debug_port"}})]),t._v(" "),a("h2",{attrs:{id:"debug-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-port"}},[t._v("#")]),t._v(" Debug Port")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("PX4 System Console")]),t._v(" and "),a("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[t._v("SWD interface")]),t._v(" run on the "),a("strong",[t._v("FMU Debug")]),t._v(" port.")],1),t._v(" "),a("p",[t._v("The pinouts and connector comply with the "),a("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")]),t._v(" interface defined in the "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),a("OutboundLink")],1),t._v(" interface (JST SM10B connector).")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pin")]),t._v(" "),a("th",[t._v("Signal")]),t._v(" "),a("th",[t._v("Volt")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (red)")]),t._v(" "),a("td",[a("code",[t._v("Vtref")])]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("2 (blk)")]),t._v(" "),a("td",[t._v("Console TX (OUT)")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("3 (blk)")]),t._v(" "),a("td",[t._v("Console RX (IN)")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("4 (blk)")]),t._v(" "),a("td",[a("code",[t._v("SWDIO")])]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("5 (blk)")]),t._v(" "),a("td",[a("code",[t._v("SWCLK")])]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("6 (blk)")]),t._v(" "),a("td",[a("code",[t._v("SWO")])]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("7 (blk)")]),t._v(" "),a("td",[t._v("NFC GPIO")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("8 (blk)")]),t._v(" "),a("td",[t._v("PH11")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("9 (blk)")]),t._v(" "),a("td",[t._v("nRST")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("10 (blk)")]),t._v(" "),a("td",[a("code",[t._v("GND")])]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("p",[t._v("For information about using this port see:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[t._v("SWD Debug Port")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("PX4 System Console")]),t._v(" (Note, the FMU console maps to USART3).")],1)]),t._v(" "),a("h2",{attrs:{id:"peripherals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#peripherals"}},[t._v("#")]),t._v(" Peripherals")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://holybro.com/products/digital-air-speed-sensor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Digital Airspeed Sensor"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://holybro.com/collections/telemetry-radios?orderby=date",target:"_blank",rel:"noopener noreferrer"}},[t._v("Telemetry Radio Modules"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("Rangefinders/Distance sensors")])],1)]),t._v(" "),a("h2",{attrs:{id:"supported-platforms-airframes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-platforms-airframes"}},[t._v("#")]),t._v(" Supported Platforms / Airframes")]),t._v(" "),a("p",[t._v("Any multicopter / airplane / rover or boat that can be controlled with normal RC servos or Futaba S-Bus servos. The complete set of supported configurations can be seen in the "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"further-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-info"}},[t._v("#")]),t._v(" Further info")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/bootloader_update_v6xrt.html"}},[t._v("Update Pixhawk 6X-RT Bootloader")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Docs"),a("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/assembly/quick_start_pixhawk6x.html"}},[t._v("Pixhawk 6X Wiring QuickStart")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/power_module/holybro_pm02d.html"}},[t._v("PM02D Power Module")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/power_module/holybro_pm03d.html"}},[t._v("PM03D Power Module")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-012%20Pixhawk%20Autopilot%20v6X%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot FMUv6X Standard"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-010%20Pixhawk%20Autopilot%20Bus%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot Bus Standard"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),a("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=o.exports},343:function(t,e,r){t.exports=r.p+"assets/img/pixhawk6x_wiring_diagram.bea80353.png"},390:function(t,e,r){t.exports=r.p+"assets/img/pixhawk6x_exploded_diagram.35b9509e.png"},916:function(t,e,r){t.exports=r.p+"assets/img/pixhawk6x-rt.4b3a0484.png"}}]);