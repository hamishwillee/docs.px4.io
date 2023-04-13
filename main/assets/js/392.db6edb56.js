(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{1945:function(t,e,r){"use strict";r.r(e);var a=r(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mro-x2-1-autopilot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mro-x2-1-autopilot"}},[t._v("#")]),t._v(" mRo-X2.1 Autopilot")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),a("a",{attrs:{href:"https://store.mrobotics.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),a("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"http://www.mRobotics.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRo-X2.1 autopilot"),a("OutboundLink")],1),t._v(" is based on the "),a("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk"),a("sup",[t._v("®")]),t._v("-project"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("FMUv2")]),t._v(" open hardware design.\nIt runs PX4 on the "),a("a",{attrs:{href:"https://nuttx.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),a("OutboundLink")],1),t._v(" OS.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(860),alt:"mRo X2.1"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This flight controller is "),a("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"quick-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[t._v("#")]),t._v(" Quick Summary")]),t._v(" "),a("ul",[a("li",[t._v("Main System-on-Chip: "),a("a",{attrs:{href:"http://www.st.com/web/en/catalog/mmc/FM141/SC1169/SS1577/LN1789",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32F427"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("CPU: STM32F427VIT6 ARM"),a("sup",[t._v("®")]),t._v(" microcontroller - Revision 3")]),t._v(" "),a("li",[t._v("IO: STM32F100C8T6 ARM"),a("sup",[t._v("®")]),t._v(" microcontroller")])])]),t._v(" "),a("li",[t._v("Sensors:\n"),a("ul",[a("li",[t._v("Invensense"),a("sup",[t._v("®")]),t._v(" MPU9250 9DOF")]),t._v(" "),a("li",[t._v("Invensense ICM-20602 6DOF")]),t._v(" "),a("li",[t._v("MEAS MS5611 barometer")])])]),t._v(" "),a("li",[t._v("Dimensions/Weight\n"),a("ul",[a("li",[t._v("Size: 36mm x 50mm\n(Can be ordered with vertical, horizontal or no headers installed)")]),t._v(" "),a("li",[t._v("Mounting Points: 30.5mm x 30.5mm 3.2mm diameter")]),t._v(" "),a("li",[t._v("Weight: 10.9g")])])])]),t._v(" "),a("p",[t._v("The diagram below provides a side-by-side comparison with a Pixhawk 1. The mRo features almost identical hardware and connectivity but\nhas a much smaller footprint. Major differences are updated sensors and Rev 3 FMU.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(861),alt:"Mro Pixhawk 1 vs X2.1 comparison"}})]),t._v(" "),a("h2",{attrs:{id:"connectivity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connectivity"}},[t._v("#")]),t._v(" Connectivity")]),t._v(" "),a("ul",[a("li",[t._v("2.54mm headers:")]),t._v(" "),a("li",[t._v("GPS (UART4) with I2C")]),t._v(" "),a("li",[t._v("CAN Bus")]),t._v(" "),a("li",[t._v("RC input")]),t._v(" "),a("li",[t._v("PPM input")]),t._v(" "),a("li",[t._v("Spektrum input")]),t._v(" "),a("li",[t._v("RSSI input")]),t._v(" "),a("li",[t._v("sBus input")]),t._v(" "),a("li",[t._v("sBus output")]),t._v(" "),a("li",[t._v("Power input")]),t._v(" "),a("li",[t._v("Buzzer output")]),t._v(" "),a("li",[t._v("LED output")]),t._v(" "),a("li",[t._v("8 x Servo outputs")]),t._v(" "),a("li",[t._v("6 x Aux outputs")]),t._v(" "),a("li",[t._v("Offboard microUSB connector")]),t._v(" "),a("li",[t._v("Kill Pin output "),a("em",[t._v("(Currently not supported by firmware)")])]),t._v(" "),a("li",[t._v("AirSpeed Sensor")]),t._v(" "),a("li",[t._v("USART2 (Telem 1)")]),t._v(" "),a("li",[t._v("USART3 (Telem 2)")]),t._v(" "),a("li",[t._v("UART7 (Console)")]),t._v(" "),a("li",[t._v("UART8 (OSD)")])]),t._v(" "),a("h2",{attrs:{id:"px4-bootloader-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-bootloader-issue"}},[t._v("#")]),t._v(" PX4 BootLoader Issue")]),t._v(" "),a("p",[t._v("By default a mRo X2.1 might come preconfigured for ArduPilot"),a("sup",[t._v("®")]),t._v(" rather than PX4. This\ncan be seen during firmware update when the board is recognized as FMUv2 instead of X2.1.")]),t._v(" "),a("p",[t._v("In this case you must update the BootLoader using "),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/hardware/BL_Update_X21.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("BL_Update_X21.zip"),a("OutboundLink")],1),t._v(".\nIf this correction is not carried out your compass direction will be wrong and the\nsecondary IMU will not be detected.")]),t._v(" "),a("p",[t._v("The update steps are:")]),t._v(" "),a("ol",[a("li",[t._v("Download and extract "),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/hardware/BL_Update_X21.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("BL_Update_X21.zip"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("Find the folder "),a("em",[t._v("BL_Update_X21")]),t._v(". This contains a "),a("strong",[t._v("bin")]),t._v(" file and a subfolder named "),a("strong",[t._v("/etc")]),t._v(" containing an "),a("strong",[t._v("rc.txt")]),t._v(" file")]),t._v(" "),a("li",[t._v("Copy these files to your micro SD card's root directory and insert it into the mRO x2.1")]),t._v(" "),a("li",[t._v("Power on the mRO x2.1 Wait for it to boot and then reboot 1 time.")])]),t._v(" "),a("h2",{attrs:{id:"availability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#availability"}},[t._v("#")]),t._v(" Availability")]),t._v(" "),a("p",[t._v("This product can be ordered at the "),a("a",{attrs:{href:"https://store.mrobotics.io/mRo-X2-1-Rev-2-p/m10021a.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRobotics"),a("sup",[t._v("®")]),t._v(" Store"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"wiring-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring-guide"}},[t._v("#")]),t._v(" Wiring Guide")]),t._v(" "),a("p",[a("img",{attrs:{src:r(862),alt:"mRo_X2.1_Wiring"}})]),t._v(" "),a("h2",{attrs:{id:"building-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Most users will not need to build this firmware!\nIt is pre-built and automatically installed by "),a("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),a("p",[t._v("To "),a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make mro_x21_default\n")])])]),a("h2",{attrs:{id:"schematics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schematics"}},[t._v("#")]),t._v(" Schematics")]),t._v(" "),a("p",[t._v("The board is documented on the mRo hardware repo: "),a("a",{attrs:{href:"https://github.com/mRoboticsIO/Hardware/blob/master/X2.1/Docs/x21_V2_schematic.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("x21_V2_schematic.pdf"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("Device")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("USART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("IO debug")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("SERIAL1")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("TELEM2")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS3")]),t._v(" "),a("td",[t._v("GPS/I2C")])]),t._v(" "),a("tr",[a("td",[t._v("USART6")]),t._v(" "),a("td",[t._v("/dev/ttyS4")]),t._v(" "),a("td",[t._v("PX4IO")])]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("/dev/ttyS5")]),t._v(" "),a("td",[t._v("SERIAL5 CONSOLE")])]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("/dev/ttyS6")]),t._v(" "),a("td",[t._v("SERIAL4")])])])])])}),[],!1,null,null,null);e.default=i.exports},860:function(t,e,r){t.exports=r.p+"assets/img/mro_x2.1.791ba315.jpg"},861:function(t,e,r){t.exports=r.p+"assets/img/px1_x21.b591626b.jpg"},862:function(t,e,r){t.exports=r.p+"assets/img/mro_x21_wiring.1666afcb.png"}}]);