(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{1976:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"cuav-nora-flight-controller"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cuav-nora-flight-controller"}},[t._v("#")]),t._v(" CUAV Nora Flight Controller")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),o("a",{attrs:{href:"https://www.cuav.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),o("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://doc.cuav.net/flight-controller/x7/en/nora.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nora"),o("OutboundLink")],1),o("sup",[t._v("®")]),t._v(" flight controller is a high-performance autopilot.\nIt is an ideal choice for industrial drones and large-scale heavy-duty drones.\nIt is mainly supplied to commercial manufacturers.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(789),alt:"CUAV x7"}})]),t._v(" "),o("p",[t._v("Nora is a variant of the CUAV X7.\nIt adopts an integrated motherboard (soft and hard board), which reduces flight controller's internal connectors, improves reliability, and places all the interfaces on the side (making the wiring more concise).")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This flight controller is "),o("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),o("ul",[o("li",[t._v("Internal shock absorption")]),t._v(" "),o("li",[t._v("The integrated process reduces the failure caused by interface damage.")]),t._v(" "),o("li",[t._v("Support USB_HS, download logs faster (PX4 not yet supported)")]),t._v(" "),o("li",[t._v("Support more dshot output")]),t._v(" "),o("li",[t._v("Support IMU heating, make the sensor work better")]),t._v(" "),o("li",[t._v("Dedicated CAN battery port")]),t._v(" "),o("li",[t._v("3 sets of IMU sensors")]),t._v(" "),o("li",[t._v("Car-grade RM3100 compass")]),t._v(" "),o("li",[t._v("High performance processor")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("The manufacturer "),o("a",{attrs:{href:"https://doc.cuav.net/flight-controller/x7/en/nora.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Docs"),o("OutboundLink")],1),t._v(" are the canonical reference for Nora.\nThey should be used by preference as they contain the most complete and up to date information.")])]),t._v(" "),o("h2",{attrs:{id:"quick-summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[t._v("#")]),t._v(" Quick Summary")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Main FMU Processor: STM32H743")])]),t._v(" "),o("li",[o("p",[t._v("On-board sensors:")]),t._v(" "),o("ul",[o("li",[t._v("Accelerometer/Gyroscope: ICM-20689")]),t._v(" "),o("li",[t._v("Accelerometer/Gyroscope: ICM-20649")]),t._v(" "),o("li",[t._v("Accelerometer/Gyroscope: BMI088")]),t._v(" "),o("li",[t._v("Magnetometer: RM3100")]),t._v(" "),o("li",[t._v("Barometer: MS5611*2")])])]),t._v(" "),o("li",[o("p",[t._v("Interfaces:")]),t._v(" "),o("ul",[o("li",[t._v("14 PWM outputs （12 supports Dshot）")]),t._v(" "),o("li",[t._v("Support multiple RC inputs (SBUs / CPPM / DSM)")]),t._v(" "),o("li",[t._v("Analogue / PWM RSSI input")]),t._v(" "),o("li",[t._v("2 GPS ports(GPS and UART4 ports)")]),t._v(" "),o("li",[t._v("4 i2c buses(Two i2c dedicated ports)")]),t._v(" "),o("li",[t._v("2 CAN bus ports")]),t._v(" "),o("li",[t._v("2 Power ports(Power A is common adc interface, Power C is DroneCAN battery interface)")]),t._v(" "),o("li",[t._v("2 ADC input")]),t._v(" "),o("li",[t._v("1 USB ports")])])]),t._v(" "),o("li",[o("p",[t._v("Power System:")]),t._v(" "),o("ul",[o("li",[t._v("Power: 4.3~5.4V")]),t._v(" "),o("li",[t._v("USB Input: 4.75~5.25V")]),t._v(" "),o("li",[t._v("Servo Rail Input: 0~36V")])])]),t._v(" "),o("li",[o("p",[t._v("Weight and Dimensions:")]),t._v(" "),o("ul",[o("li",[t._v("Weight: 101 g")])])]),t._v(" "),o("li",[o("p",[t._v("Other Characteristics:")]),t._v(" "),o("ul",[o("li",[t._v("Operating temperature: -20 ~ 80°c（Measured value）")]),t._v(" "),o("li",[t._v("Three imus")]),t._v(" "),o("li",[t._v("Supports temperature compensation")]),t._v(" "),o("li",[t._v("Internal shock absorption")])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("When it runs PX4 firmware, only 8 PWM outputs work.\nThe remaining 6 PWM ports are still being adapted (so it is not compatible with VOLT at time of writing).")])]),t._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://store.cuav.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Store"),o("OutboundLink")],1),t._v("<\\br>")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://www.aliexpress.com/item/4001042501927.html?gps-id=8041884&scm=1007.14677.110221.0&scm_id=1007.14677.110221.0&scm-url=1007.14677.110221.0&pvid=3dc0a3ba-fa82-43d2-b0b3-6280e4329cef&spm=a2g0o.store_home.promoteRecommendProducts_7913969.58",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Aliexpress"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"connections-wiring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connections-wiring"}},[t._v("#")]),t._v(" Connections (Wiring)")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://doc.cuav.net/flight-controller/x7/en/quick-start/quick-start-nora.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV nora Wiring Quickstart"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"size-and-pinouts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#size-and-pinouts"}},[t._v("#")]),t._v(" Size and Pinouts")]),t._v(" "),o("p",[o("img",{attrs:{src:r(790),alt:"CUAV x7"}})]),t._v(" "),o("p",[o("img",{attrs:{src:r(791),alt:"X7 pinouts"}})]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("The "),o("code",[t._v("RCIN")]),t._v(" port is limited to powering the rc receiver and cannot be connected to any power/load.")])]),t._v(" "),o("h2",{attrs:{id:"voltage-ratings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voltage-ratings"}},[t._v("#")]),t._v(" Voltage Ratings")]),t._v(" "),o("p",[t._v("Nora AutoPilot* can be triple-redundant on the power supply if three power sources are supplied. The two power rails are: "),o("strong",[t._v("POWERA")]),t._v(", "),o("strong",[t._v("POWERC")]),t._v(" and "),o("strong",[t._v("USB")]),t._v(".")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The output power rails "),o("strong",[t._v("PWM OUT")]),t._v(" (0V to 36V) do not power the flight controller board (and are not powered by it).\nYou must supply power to one of "),o("strong",[t._v("POWERA")]),t._v(", "),o("strong",[t._v("POWERC")]),t._v(" or "),o("strong",[t._v("USB")]),t._v(" or the board will be unpowered.")])]),t._v(" "),o("p",[o("strong",[t._v("Normal Operation Maximum Ratings")])]),t._v(" "),o("p",[t._v("Under these conditions all power sources will be used in this order to power the system:")]),t._v(" "),o("ol",[o("li",[o("strong",[t._v("POWERA")]),t._v(" and "),o("strong",[t._v("POWERC")]),t._v(" inputs (4.3V to 5.4V)")]),t._v(" "),o("li",[o("strong",[t._v("USB")]),t._v(" input (4.75V to 5.25V)")])]),t._v(" "),o("h2",{attrs:{id:"building-firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Most users will not need to build this firmware!\nIt is pre-built and automatically installed by "),o("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),o("p",[t._v("To "),o("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make cuav_nora_default\n")])])]),o("h2",{attrs:{id:"over-current-protection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#over-current-protection"}},[t._v("#")]),t._v(" Over Current Protection")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Nora")]),t._v(" has over-current protection on the 5 Volt Peripheral and 5 Volt high power, which limits the current to 2.5A.\nThe "),o("em",[t._v("Nora")]),t._v(" has short circuit protection.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("Up to 2.5 A can be delivered to the connectors listed as pin 1 (although these are only rated at 1 A).")])]),t._v(" "),o("h2",{attrs:{id:"debug-port"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug-port"}},[t._v("#")]),t._v(" Debug Port")]),t._v(" "),o("p",[t._v("The system's serial console and SWD interface operate on the "),o("strong",[t._v("DSU7")]),t._v(" port.\nSimply connect the FTDI cable to the DSU7 connector (the product list contains the CUAV FTDI cable).")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("PX4 System Console")]),t._v(" and "),o("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[t._v("SWD interface")]),t._v(" operate on the "),o("strong",[t._v("FMU Debug")]),t._v(" port ("),o("code",[t._v("DSU7")]),t._v(").")],1),t._v(" "),o("p",[t._v("The debug port ("),o("code",[t._v("DSU7")]),t._v(") uses a "),o("a",{attrs:{href:"https://www.digikey.com.au/product-detail/en/jst-sales-america-inc/BM06B-GHS-TBT-LF-SN-N/455-1582-1-ND/807850",target:"_blank",rel:"noopener noreferrer"}},[t._v("JST BM06B"),o("OutboundLink")],1),t._v(" connector and has the following pinout:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Pin")]),t._v(" "),o("th",[t._v("Signal")]),t._v(" "),o("th",[t._v("Volt")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1 (red)")]),t._v(" "),o("td",[t._v("5V+")]),t._v(" "),o("td",[t._v("+5V")])]),t._v(" "),o("tr",[o("td",[t._v("2 (blk)")]),t._v(" "),o("td",[t._v("DEBUG TX (OUT)")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("3 (blk)")]),t._v(" "),o("td",[t._v("DEBUG RX (IN)")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("4 (blk)")]),t._v(" "),o("td",[t._v("FMU_SWDIO")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("5 (blk)")]),t._v(" "),o("td",[t._v("FMU_SWCLK")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("6 (blk)")]),t._v(" "),o("td",[t._v("GND")]),t._v(" "),o("td",[t._v("GND")])])])]),t._v(" "),o("p",[t._v("CUAV provides a dedicated debugging cable, which can be connected to the "),o("code",[t._v("DSU7")]),t._v(" port.\nThis splits out an FTDI cable for connecting the "),o("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("PX4 System Console")]),t._v(" to a computer USB port, and SWD pins used for SWD/JTAG debugging.\nThe provided debug cable does not connect to the SWD port "),o("code",[t._v("Vref")]),t._v(" pin (1).")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(347),alt:"CUAV Debug cable"}})]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("The SWD Vref pin (1) uses 5V as Vref but the CPU is run at 3.3V!")]),t._v(" "),o("p",[t._v("Some JTAG adapters (SEGGER J-Link) will use the Vref voltage to set the voltage on the SWD lines.\nFor direct connection to "),o("em",[t._v("Segger Jlink")]),t._v(" we recommended you use the 3.3 Volts from pin 4 of the connector marked "),o("code",[t._v("DSM")]),t._v("/"),o("code",[t._v("SBUS")]),t._v("/"),o("code",[t._v("RSSI")]),t._v(" to provide "),o("code",[t._v("Vtref")]),t._v(" to the JTAG (i.e. providing 3.3V and "),o("em",[t._v("NOT")]),t._v(" 5V).")])]),t._v(" "),o("h2",{attrs:{id:"supported-platforms-airframes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-platforms-airframes"}},[t._v("#")]),t._v(" Supported Platforms / Airframes")]),t._v(" "),o("p",[t._v("Any multicopter / airplane / rover or boat that can be controlled with normal RC servos or Futaba S-Bus servos.\nThe complete set of supported configurations can be seen in the "),o("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"further-info"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-info"}},[t._v("#")]),t._v(" Further info")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://doc.cuav.net/flight-controller/x7/en/quick-start/quick-start-nora.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quick start"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"http://doc.cuav.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV docs"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cuav/hardware/tree/master/X7_Autopilot",target:"_blank",rel:"noopener noreferrer"}},[t._v("nora schematic"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports},347:function(t,e,r){t.exports=r.p+"assets/img/cuav_v5_debug_cable.c6d410bf.jpg"},789:function(t,e,r){t.exports=r.p+"assets/img/nora.08afed4b.png"},790:function(t,e,r){t.exports=r.p+"assets/img/nora-size.20d92a5b.jpg"},791:function(t,e,r){t.exports=r.p+"assets/img/nora-pinouts.18ce0f48.jpg"}}]);