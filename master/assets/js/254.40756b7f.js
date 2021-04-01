(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{2044:function(t,e,r){"use strict";r.r(e);var a=r(18),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"kakute-f7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kakute-f7"}},[t._v("#")]),t._v(" Kakute F7")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://shop.holybro.com/) for hardware support or compliance issues.")])]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Kakute F7")]),t._v(" from Holybro is a flight controller board designed for racers.")]),t._v(" "),a("img",{attrs:{src:r(727),width:"400px",title:"Kakute F7"}}),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This flight controller is "),a("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"key-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-features"}},[t._v("#")]),t._v(" Key Features")]),t._v(" "),a("ul",[a("li",[t._v("Main System-on-Chip: "),a("a",{attrs:{href:"https://www.st.com/en/microcontrollers-microprocessors/stm32f745vg.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32F745VGT6"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("CPU: 216 MHz ARM Cortex M7 with single-precision FPU")]),t._v(" "),a("li",[t._v("RAM: 320 KB SRAM")]),t._v(" "),a("li",[t._v("FLASH: 1 MB")])])]),t._v(" "),a("li",[t._v("Standard racer form factor: 36x36 mm with standard 30.5 mm hole pattern")]),t._v(" "),a("li",[t._v("ICM20689 Accel / Gyro (Soft-mounted)")]),t._v(" "),a("li",[t._v("BMP280 Baro")]),t._v(" "),a("li",[t._v("microSD (for logging)")]),t._v(" "),a("li",[t._v("6 UARTs")]),t._v(" "),a("li",[t._v("1 I2C bus")]),t._v(" "),a("li",[t._v("6 PWM outputs")]),t._v(" "),a("li",[t._v("Built-in OSD chip (AB7456 via SPI)")])]),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),a("p",[t._v("The board can be bought from one of the following shops (for example):")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://shop.holybro.com/kakute-f7_p1104.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.getfpv.com/holybro-kakute-f7-tekko32-f3-metal-65a-4-in-1-esc-combo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getfpv"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Kakute F7")]),t._v(" is designed to work with the "),a("em",[t._v("Tekko32")]),t._v(" 4-in-1 ESC and they can be bought in combination.")])]),t._v(" "),a("h2",{attrs:{id:"connectors-and-pins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connectors-and-pins"}},[t._v("#")]),t._v(" Connectors and Pins")]),t._v(" "),a("p",[t._v("This is the silkscreen for the "),a("em",[t._v("Kakute F7")]),t._v(", showing the top of the board:")]),t._v(" "),a("p",[a("img",{attrs:{src:r(728),alt:"Kakute F7 Silkscreen"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pin")]),t._v(" "),a("th",[t._v("Function")]),t._v(" "),a("th",[t._v("PX4 default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("B+")]),t._v(" "),a("td",[t._v("Battery positive voltage (2S-6S)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("5V")]),t._v(" "),a("td",[t._v("5V output (2A max)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("VO")]),t._v(" "),a("td",[t._v("Video output to video transmitter")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("VI")]),t._v(" "),a("td",[t._v("Video input from FPV camera")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("G or GND")]),t._v(" "),a("td",[t._v("Ground")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("SDA, SCL")]),t._v(" "),a("td",[t._v("I2C connection (for peripherals)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("R1, T1")]),t._v(" "),a("td",[t._v("UART1 RX and TX")]),t._v(" "),a("td",[t._v("TELEM1")])]),t._v(" "),a("tr",[a("td",[t._v("R2, T2")]),t._v(" "),a("td",[t._v("UART2 RX and TX")]),t._v(" "),a("td",[t._v("TELEM2")])]),t._v(" "),a("tr",[a("td",[t._v("R3, T3")]),t._v(" "),a("td",[t._v("UART3 RX and TX")]),t._v(" "),a("td",[t._v("NuttX debug console")])]),t._v(" "),a("tr",[a("td",[t._v("R4, T4")]),t._v(" "),a("td",[t._v("UART4 RX and TX")]),t._v(" "),a("td",[t._v("GPS1")])]),t._v(" "),a("tr",[a("td",[t._v("R6, T6")]),t._v(" "),a("td",[t._v("UART6 RX and TX")]),t._v(" "),a("td",[t._v("RC port")])]),t._v(" "),a("tr",[a("td",[t._v("R7, T7")]),t._v(" "),a("td",[t._v("UART7 RX and TX (RX is located in the plug for use with 4-in-1 ESCs)")]),t._v(" "),a("td",[t._v("DShot telemetry")])]),t._v(" "),a("tr",[a("td",[t._v("LED")]),t._v(" "),a("td",[t._v("WS2182 addressable LED signal wire (not tested)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Buz-")]),t._v(" "),a("td",[t._v("Piezo buzzer negative leg (Connect buzzer positive leg to 5V pad)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("3V3")]),t._v(" "),a("td",[t._v("3.3V output (200 mA max)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("M1 to M4")]),t._v(" "),a("td",[t._v("Motor signal outputs (located in plug for use in 4-in-1 ESCs)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("M5, M6")]),t._v(" "),a("td",[t._v("Additional motor signal outputs (located on side of board)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("RSI")]),t._v(" "),a("td",[t._v("Analog RSSI (0-3.3V) input from receiver")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Boot")]),t._v(" "),a("td",[t._v("Bootloader button")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("span",{attrs:{id:"bootloader"}})]),t._v(" "),a("h2",{attrs:{id:"px4-bootloader-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-bootloader-update"}},[t._v("#")]),t._v(" PX4 Bootloader Update")]),t._v(" "),a("p",[t._v("The board comes pre-installed with "),a("a",{attrs:{href:"https://github.com/betaflight/betaflight/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("Betaflight"),a("OutboundLink")],1),t._v(". Before PX4 firmware can be installed, the "),a("em",[t._v("PX4 bootloader")]),t._v(" must be flashed. Download the "),a("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/flight_controller/kakutef7/kakutef7_bl_0b3fbe2da0.hex",target:"_blank",rel:"noopener noreferrer"}},[t._v("kakutef7_bl.hex"),a("OutboundLink")],1),t._v(" bootloader binary and read "),a("RouterLink",{attrs:{to:"/ko/advanced_config/bootloader_update_from_betaflight.html"}},[t._v("this page")]),t._v(" for flashing instructions.")],1),t._v(" "),a("h2",{attrs:{id:"building-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),a("p",[t._v("To "),a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("make holybro_kakutef7_default\n")])])]),a("h2",{attrs:{id:"installing-px4-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-px4-firmware"}},[t._v("#")]),t._v(" Installing PX4 Firmware")]),t._v(" "),a("p",[t._v("The firmware can be installed in any of the normal ways:")]),t._v(" "),a("ul",[a("li",[t._v("Build and upload the source "),a("code",[t._v("make holybro_kakutef7_default upload")])]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("Load the firmware")]),t._v(" using "),a("em",[t._v("QGroundControl")]),t._v(". You can use either pre-built firmware or your own custom firmware.")],1)]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("In addition to the "),a("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("basic configuration")]),t._v(", the following parameters are important:")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Setting")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_HAS_MAG"}},[t._v("SYS_HAS_MAG")])],1),t._v(" "),a("td",[t._v("This should be disabled since the board does not have an internal mag. You can enable it if you attach an external mag.")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MOT_ORDERING"}},[t._v("MOT_ORDERING")])],1),t._v(" "),a("td",[t._v("If you use a 4-in-1 ESC with Betaflight/Cleanflight motor assignment, this parameter can be set accordingly.")])])])]),t._v(" "),a("h2",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("Device")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("USART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("TELEM1")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM2")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("Debug Console")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS3")]),t._v(" "),a("td",[t._v("GPS1")])]),t._v(" "),a("tr",[a("td",[t._v("USART6")]),t._v(" "),a("td",[t._v("/dev/ttyS4")]),t._v(" "),a("td",[t._v("RC SBUS")])]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("/dev/ttyS5")]),t._v(" "),a("td",[t._v("ESC telemetry (DShot)")])])])]),t._v(" "),a("h2",{attrs:{id:"debug-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-port"}},[t._v("#")]),t._v(" Debug Port")]),t._v(" "),a("h3",{attrs:{id:"system-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-console"}},[t._v("#")]),t._v(" System Console")]),t._v(" "),a("p",[t._v("UART3 RX and TX are configured for use as the "),a("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("System Console")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"swd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swd"}},[t._v("#")]),t._v(" SWD")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[t._v("SWD interface")]),t._v(" (JTAG) pins are:")],1),t._v(" "),a("ul",[a("li",[a("code",[t._v("SWCLK")]),t._v(": Test Point 2 (Pin 72 on the CPU)")]),t._v(" "),a("li",[a("code",[t._v("SWDIO")]),t._v(": Test Point 3 (Pin 76 on CPU)")]),t._v(" "),a("li",[a("code",[t._v("GND")]),t._v(": As marked on board")]),t._v(" "),a("li",[a("code",[t._v("VDD_3V3")]),t._v(": As marked on board")])]),t._v(" "),a("p",[t._v("These are shown below.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(729),alt:"SWD Pins on Kakute F7 - CLK SWO"}}),t._v(" "),a("img",{attrs:{src:r(730),alt:"SWD Pins on Kakute F7:  GND and VDD_3V3"}})])])}),[],!1,null,null,null);e.default=o.exports},727:function(t,e,r){t.exports=r.p+"assets/img/board.1d5bdd04.jpg"},728:function(t,e,r){t.exports=r.p+"assets/img/silk.0f4aea49.png"},729:function(t,e,r){t.exports=r.p+"assets/img/debug_swd_port.c91a9dc4.jpg"},730:function(t,e,r){t.exports=r.p+"assets/img/debug_swd_port_gnd_vcc3_3.7abbc413.jpg"}}]);