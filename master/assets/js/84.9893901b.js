(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{2866:function(t,r,_){"use strict";_.r(r);var v=_(19),e=Object(v.a)({},(function(){var t=this,r=t.$createElement,v=t._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"mro-pixracer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mro-pixracer"}},[t._v("#")]),t._v(" mRo Pixracer")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store.mrobotics.io/) for hardware support or compliance issues.")])]),t._v(" "),v("p",[t._v("The Pixhawk"),v("sup",[t._v("®")]),t._v(" XRacer board family is optimized for small racing quads and planes. In contrast to "),v("RouterLink",{attrs:{to:"/zh/flight_controller/pixfalcon.html"}},[t._v("Pixfalcon")]),t._v(" and "),v("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html"}},[t._v("Pixhawk")]),t._v(" it has in-built Wifi, new sensors, convenient full servo headers, CAN and supports 2M flash.")],1),t._v(" "),v("img",{attrs:{src:_(356),width:"300px",title:"pixracer + 8266 grey"}}),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("This autopilot is "),v("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("supported")]),t._v(" by the PX4 maintenance and test teams.")],1)]),t._v(" "),v("h2",{attrs:{id:"主要特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主要特性"}},[t._v("#")]),t._v(" 主要特性")]),t._v(" "),v("ul",[v("li",[t._v("Main System-on-Chip: "),v("a",{attrs:{href:"http://www.st.com/web/en/catalog/mmc/FM141/SC1169/SS1577/LN1789",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32F427VIT6 rev.3"),v("OutboundLink")],1),t._v(" "),v("ul",[v("li",[t._v("CPU: 180 MHz ARM Cortex"),v("sup",[t._v("®")]),t._v(" M4 with single-precision FPU")]),t._v(" "),v("li",[t._v("RAM: 256 KB SRAM (L1)")])])]),t._v(" "),v("li",[t._v("Standard FPV form factor: 36x36 mm with standard 30.5 mm hole pattern")]),t._v(" "),v("li",[t._v("Invensense"),v("sup",[t._v("®")]),t._v(" ICM-20608 Accel / Gyro (4 KHz) / MPU9250 Accel / Gyro / Mag (4 KHz)")]),t._v(" "),v("li",[t._v("HMC5983 magnetometer with temperature compensation")]),t._v(" "),v("li",[t._v("Measurement Specialties MS5611 barometer")]),t._v(" "),v("li",[t._v("JST GH connectors")]),t._v(" "),v("li",[t._v("microSD (logging)")]),t._v(" "),v("li",[t._v("Futaba S.BUS and S.BUS2 / Spektrum DSM2 and DSMX / Graupner SUMD / PPM input / Yuneec ST24")]),t._v(" "),v("li",[t._v("FrSky"),v("sup",[t._v("®")]),t._v(" telemetry port")]),t._v(" "),v("li",[t._v("OneShot PWM out (configurable)")]),t._v(" "),v("li",[t._v("Optional: Safety switch and buzzer")])]),t._v(" "),v("h2",{attrs:{id:"在哪里买"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在哪里买"}},[t._v("#")]),t._v(" 在哪里买")]),t._v(" "),v("p",[t._v("Pixracer is available from the "),v("a",{attrs:{href:"https://store.mrobotics.io/mRo-PixRacer-R15-Official-p/auav-pxrcr-r15-mr.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRobotics.io"),v("OutboundLink")],1),t._v(".")]),t._v(" "),v("p",[t._v("Accessories include:")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://hobbyking.com/en_us/hkpilot-32-digital-air-speed-sensor-and-pitot-tube-set.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("数字空速传感器"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://hobbyking.com/en_us/micro-hkpilot-telemetry-radio-module-with-on-screen-display-osd-unit-433mhz.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking"),v("sup",[t._v("®")]),t._v(" OSD + EU Telemetry (433 MHz)"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"kit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#kit"}},[t._v("#")]),t._v(" Kit")]),t._v(" "),v("p",[t._v("The Pixracer is designed to use a separate avionics power supply. This is necessary to avoid current surges from motors or ESCs to flow back to the flight controller and disturb its delicate sensors.")]),t._v(" "),v("ul",[v("li",[t._v("Power module (with voltage and current sensing)")]),t._v(" "),v("li",[t._v("I2C splitter (supporting AUAV, Hobbyking and 3DR"),v("sup",[t._v("®")]),t._v(" peripherals)")]),t._v(" "),v("li",[t._v("Cable kit for all common peripherals")])]),t._v(" "),v("h2",{attrs:{id:"wifi-no-usb-required"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#wifi-no-usb-required"}},[t._v("#")]),t._v(" Wifi (no USB required)")]),t._v(" "),v("p",[t._v("One of the main features of the board is its ability to use Wifi for flashing new firmware, system setup and in-flight telemetry. This frees it of the need of any desktop system.")]),t._v(" "),v("p",[t._v("::note ToDo Setup and telemetry are already available, firmware upgrade is already supported by the default bootloader but not yet enabled\n:::")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/zh/telemetry/esp8266_wifi_module.html"}},[t._v("ESP8266 Wifi")])],1),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("Custom ESP8266 MAVLink firmware"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"wiring-diagrams"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#wiring-diagrams"}},[t._v("#")]),t._v(" Wiring Diagrams")]),t._v(" "),v("p",[v("img",{attrs:{src:_(357),alt:"Grau setup pixracer top"}})]),t._v(" "),v("p",[v("img",{attrs:{src:_(358),alt:"Grau setup pixracer bottom"}})]),t._v(" "),v("p",[v("img",{attrs:{src:_(810),alt:"setup pixracer GPS"}})]),t._v(" "),v("p",[v("img",{attrs:{src:_(334),alt:"Grau b Pixracer FrSkyS.Port Connection"}})]),t._v(" "),v("p",[v("img",{attrs:{src:_(360),alt:"Grau ACSP4 2 roh"}})]),t._v(" "),v("p",[v("img",{attrs:{src:_(811),alt:"Grau ACSP5 roh"}})]),t._v(" "),v("h2",{attrs:{id:"连接器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#连接器"}},[t._v("#")]),t._v(" 连接器")]),t._v(" "),v("p",[t._v("All connectors follow the "),v("a",{attrs:{href:"https://pixhawk.org/pixhawk-connector-standard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk connector standard"),v("OutboundLink")],1),t._v(". Unless noted otherwise all connectors are JST GH.")]),t._v(" "),v("h2",{attrs:{id:"针脚定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),v("p",[v("img",{attrs:{src:_(812),alt:"Pixracer top pinouts"}})]),t._v(" "),v("p",[v("img",{attrs:{src:_(813),alt:"Pixracer bottom pinouts"}})]),t._v(" "),v("p",[v("img",{attrs:{src:_(814),alt:"Pixracer esp"}})]),t._v(" "),v("h4",{attrs:{id:"telem1-telem2-osd-ports"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#telem1-telem2-osd-ports"}},[t._v("#")]),t._v(" TELEM1, TELEM2+OSD ports")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("针脚")]),t._v(" "),v("th",[t._v("信号")]),t._v(" "),v("th",[t._v("电压")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td",[t._v("+5V")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("TX (OUT)")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("RX (IN)")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("4（黑）")]),t._v(" "),v("td",[t._v("CTS (IN)")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("RTS (OUT)")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("GND")])])])]),t._v(" "),v("h4",{attrs:{id:"gps-接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gps-接口"}},[t._v("#")]),t._v(" GPS 接口")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("针脚")]),t._v(" "),v("th",[t._v("信号")]),t._v(" "),v("th",[t._v("电压")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1（红）")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td",[t._v("+5V")])]),t._v(" "),v("tr",[v("td",[t._v("2（黑）")]),t._v(" "),v("td",[t._v("TX (OUT)")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("RX (IN)")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("4（黑）")]),t._v(" "),v("td",[t._v("I2C1 SCL")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("I2C1 SDA")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("GND")])])])]),t._v(" "),v("h4",{attrs:{id:"frsky-telemetry-serial4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#frsky-telemetry-serial4"}},[t._v("#")]),t._v(" FrSky Telemetry / SERIAL4")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("针脚")]),t._v(" "),v("th",[t._v("信号")]),t._v(" "),v("th",[t._v("电压")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td",[t._v("+5V")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("TX (OUT)")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("RX (IN)")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("4（黑）")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("GND")])])])]),t._v(" "),v("h4",{attrs:{id:"rc-input-accepts-ppm-s-bus-spektrum-sumd-st24"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rc-input-accepts-ppm-s-bus-spektrum-sumd-st24"}},[t._v("#")]),t._v(" RC Input (accepts PPM / S.BUS / Spektrum / SUMD / ST24)")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("针脚")]),t._v(" "),v("th",[t._v("信号")]),t._v(" "),v("th",[t._v("电压")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td",[t._v("+5V")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("RC IN")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("RSSI IN")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("4（黑）")]),t._v(" "),v("td",[t._v("VDD 3V3")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("GND")])])])]),t._v(" "),v("h4",{attrs:{id:"can"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#can"}},[t._v("#")]),t._v(" CAN")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("针脚")]),t._v(" "),v("th",[t._v("信号")]),t._v(" "),v("th",[t._v("电压")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td",[t._v("+5V")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("CAN_H")]),t._v(" "),v("td",[t._v("+12V")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("CAN_L")]),t._v(" "),v("td",[t._v("+12V")])]),t._v(" "),v("tr",[v("td",[t._v("4（黑）")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("GND")])])])]),t._v(" "),v("h4",{attrs:{id:"power"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[t._v("#")]),t._v(" POWER")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("针脚")]),t._v(" "),v("th",[t._v("信号")]),t._v(" "),v("th",[t._v("电压")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td",[t._v("+5V")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td",[t._v("+5V")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("电流")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("4（黑）")]),t._v(" "),v("td",[t._v("电压")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("GND")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("GND")])])])]),t._v(" "),v("h4",{attrs:{id:"switch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[t._v("#")]),t._v(" SWITCH")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("针脚")]),t._v(" "),v("th",[t._v("信号")]),t._v(" "),v("th",[t._v("电压")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("SAFETY")]),t._v(" "),v("td",[t._v("GND")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("!IO_LED_SAFETY")]),t._v(" "),v("td",[t._v("GND")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("4（黑）")]),t._v(" "),v("td",[t._v("BUZZER-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("BUZZER+")]),t._v(" "),v("td",[t._v("-")])])])]),t._v(" "),v("h4",{attrs:{id:"debug调试端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#debug调试端口"}},[t._v("#")]),t._v(" Debug调试端口")]),t._v(" "),v("p",[t._v("This is a "),v("a",{attrs:{href:"https://pixhawk.org/pixhawk-connector-standard/#dronecode_debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Debug Port"),v("OutboundLink")],1),t._v(" (JST SM06B connector).")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("针脚")]),t._v(" "),v("th",[t._v("信号")]),t._v(" "),v("th",[t._v("电压")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("VCC TARGET SHIFT")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("UART7 Tx")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("UART7 Rx")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("4（黑）")]),t._v(" "),v("td",[t._v("SWDIO")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("SWCLK")]),t._v(" "),v("td",[t._v("+3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("GND")])])])]),t._v(" "),v("p",[t._v("For information about wiring and using this port see:")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/zh/debug/system_console.html#pixhawk_debug_port"}},[t._v("PX4 System Console")]),t._v(" (Note, the FMU console maps to UART7).")],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#pixhawk_debug_port_6_pin_sh"}},[t._v("SWD (JTAG) Hardware Debugging Interface")])],1)]),t._v(" "),v("h2",{attrs:{id:"serial-port-mapping"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("UART")]),t._v(" "),v("th",[t._v("设备")]),t._v(" "),v("th",[t._v("Port")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("UART1")]),t._v(" "),v("td",[t._v("/dev/ttyS0")]),t._v(" "),v("td",[t._v("WiFi (ESP8266)")])]),t._v(" "),v("tr",[v("td",[t._v("USART2")]),t._v(" "),v("td",[t._v("/dev/ttyS1")]),t._v(" "),v("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),v("tr",[v("td",[t._v("USART3")]),t._v(" "),v("td",[t._v("/dev/ttyS2")]),t._v(" "),v("td",[t._v("TELEM2 (flow control)")])]),t._v(" "),v("tr",[v("td",[t._v("UART4")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("UART7")]),t._v(" "),v("td",[t._v("CONSOLE")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("UART8")]),t._v(" "),v("td",[t._v("SERIAL4")]),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"原理图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原理图"}},[t._v("#")]),t._v(" 原理图")]),t._v(" "),v("p",[t._v("The reference is provided as: "),v("a",{attrs:{href:"https://github.com/AUAV-OpenSource/FMUv4-PixRacer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Altium Design Files"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("The following PDF files are provided for "),v("em",[t._v("convenience only")]),t._v(":")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/flight_controller/pixracer/pixracer-rc12-12-06-2015-1330.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("pixracer-rc12-12-06-2015-1330.pdf"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/flight_controller/pixracer/pixracer-r14.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("pixracer-r14.pdf"),v("OutboundLink")],1),t._v(" - R14 or RC14 is printed next to the SDCard socket")])]),t._v(" "),v("h2",{attrs:{id:"编译固件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[t._v("#")]),t._v(" 编译固件")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),v("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),v("p",[t._v("To "),v("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("make px4_fmu-v4_default\n")])])]),v("h2",{attrs:{id:"鸣谢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[t._v("#")]),t._v(" 鸣谢")]),t._v(" "),v("p",[t._v("This design was created by Nick Arsov and Phillip Kocmoud and architected by Lorenz Meier, David Sidrane and Leonard Hall.")])])}),[],!1,null,null,null);r.default=e.exports},334:function(t,r,_){t.exports=_.p+"assets/img/grau_b_pixracer_frskys.port_connection.4f4548a6.jpg"},356:function(t,r,_){t.exports=_.p+"assets/img/pixracer_hero_grey.020bbce2.jpg"},357:function(t,r,_){t.exports=_.p+"assets/img/grau_setup_pixracer_top.140c229c.jpg"},358:function(t,r,_){t.exports=_.p+"assets/img/grau_setup_pixracer_bottom.18025449.jpg"},360:function(t,r,_){t.exports=_.p+"assets/img/grau_acsp4_2_roh.9afb7797.jpg"},810:function(t,r,_){t.exports=_.p+"assets/img/grau_setup_pixracer_gps.2543876c.jpg"},811:function(t,r,_){t.exports=_.p+"assets/img/grau_acsp5_roh.7301ce8c.jpg"},812:function(t,r,_){t.exports=_.p+"assets/img/pixracer_r09_top_pinouts.61c29237.jpg"},813:function(t,r,_){t.exports=_.p+"assets/img/pixracer_r09_bot_pinouts.556b4e14.jpg"},814:function(t,r,_){t.exports=_.p+"assets/img/pixracer_r09_esp_01.7320a561.jpg"}}]);