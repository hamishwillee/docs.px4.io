(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{1378:function(t,e,r){t.exports=r.p+"assets/img/freefly_gps_module.b6ac7b53.jpg"},2097:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"freefly-systems-rtk-gps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#freefly-systems-rtk-gps"}},[t._v("#")]),t._v(" Freefly Systems RTK GPS")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://store.freeflysystems.com/products/rtk-gps-ground-station",target:"_blank",rel:"noopener noreferrer"}},[t._v("Freefly Systems RTK GPS Module"),o("OutboundLink")],1),t._v(" is a multiband "),o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html"}},[t._v("RTK GPS module")]),t._v(" from Freefly Systems that provides highly reliable navigation.\nThe modules can act as either rovers (when installed on an aircraft) or base stations (when plugged into a computer).")],1),t._v(" "),o("p",[t._v("Main features include:")]),t._v(" "),o("ul",[o("li",[t._v("Multiband (L1/L2) receiver (u-blox ZED-F9P)")]),t._v(" "),o("li",[t._v("Concurrent reception of all 4 GNSS (GPS, Galileo, GLONASS, BeiDou)")]),t._v(" "),o("li",[t._v("Built-in magnetometer (IST8310), baro (BMP388), RGB LED, safety switch and safety LED")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This module can be used with PX4 v1.9 or above (support for the u-blox ZED-F9P was added in PX4 v1.9).")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(1378),alt:"FreeFly GPS Module"}})]),t._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://store.freeflysystems.com/products/rtk-gps-ground-station",target:"_blank",rel:"noopener noreferrer"}},[t._v("Freefly Store"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"kit-contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kit-contents"}},[t._v("#")]),t._v(" Kit Contents")]),t._v(" "),o("p",[t._v("An RTK GPS kit includes:")]),t._v(" "),o("ul",[o("li",[t._v("2x GPS modules with antennas")]),t._v(" "),o("li",[t._v("3m USB C to A cable")]),t._v(" "),o("li",[t._v("Magnetic quick-mount for base station module (1/4-20 thread for tripod mounting)")]),t._v(" "),o("li",[t._v("Screws to mount onto a Freefly AltaX")])]),t._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),o("p",[t._v("RTK setup and use on PX4 via "),o("em",[t._v("QGroundControl")]),t._v(" is largely plug and play (see "),o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html"}},[t._v("RTK GPS")]),t._v(" for more information).")],1),t._v(" "),o("p",[t._v("For the aircraft, you should set the parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_GPS1_BAUD"}},[t._v("SER_GPS1_BAUD")]),t._v(" to 115200 8N1 to ensure that PX4 configures the correct baudrate.")],1),t._v(" "),o("h2",{attrs:{id:"wiring-and-connections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-and-connections"}},[t._v("#")]),t._v(" Wiring and Connections")]),t._v(" "),o("p",[t._v("The Freefly RTK GPS comes with an 8 pin JST-GH connector that can be plugged into a PixHawk autopilot.\nFor use as a base station, the module has a USB-C connector")]),t._v(" "),o("h3",{attrs:{id:"pinout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pinout"}},[t._v("#")]),t._v(" Pinout")]),t._v(" "),o("p",[t._v("The Freefly GPS pinout is provided below.\nFor some autopilots, like the "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html"}},[t._v("Hex Cube")]),t._v(" and "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixracer.html"}},[t._v("PixRacer")]),t._v(", all that is needed is a 1-1 8-pin JST-GH cable.")],1),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Pin")]),t._v(" "),o("th",[t._v("Freefly GPS")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1")]),t._v(" "),o("td",[t._v("VCC_5V")])]),t._v(" "),o("tr",[o("td",[t._v("2")]),t._v(" "),o("td",[t._v("GPS_RX")])]),t._v(" "),o("tr",[o("td",[t._v("3")]),t._v(" "),o("td",[t._v("GPS_TX")])]),t._v(" "),o("tr",[o("td",[t._v("4")]),t._v(" "),o("td",[t._v("I2C_SCL")])]),t._v(" "),o("tr",[o("td",[t._v("5")]),t._v(" "),o("td",[t._v("I2C_SDA")])]),t._v(" "),o("tr",[o("td",[t._v("6")]),t._v(" "),o("td",[t._v("BUTTON")])]),t._v(" "),o("tr",[o("td",[t._v("7")]),t._v(" "),o("td",[t._v("BUTTON_LED")])]),t._v(" "),o("tr",[o("td",[t._v("8")]),t._v(" "),o("td",[t._v("GND")])])])]),t._v(" "),o("h2",{attrs:{id:"specification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),o("ul",[o("li",[t._v("u-blox ZED-F9P GPS Receiver\n"),o("ul",[o("li",[t._v("Ultracap backup power for fast (hot-start) restarts")]),t._v(" "),o("li",[t._v("EMI shield over receiver for improved EMI immunity")])])]),t._v(" "),o("li",[t._v("IST8310 Magnetometer")]),t._v(" "),o("li",[t._v("Safety-switch and safety LED")]),t._v(" "),o("li",[t._v("RGB LEDs for status indication\n"),o("ul",[o("li",[t._v("NCP5623CMUTBG I2C Driver")])])]),t._v(" "),o("li",[t._v("BMP388 Baro on I2C bus")]),t._v(" "),o("li",[t._v("External, active antenna (Maxtena M7HCT)\n"),o("ul",[o("li",[t._v("SMA connector")])])]),t._v(" "),o("li",[t._v("STM32 MCU for future CAN-based communication\n"),o("ul",[o("li",[t._v("FW updates through USB connector")])])]),t._v(" "),o("li",[t._v("Connectivity:\n"),o("ul",[o("li",[t._v("USB-C")]),t._v(" "),o("li",[t._v("2-way USB Switch to MCU and F9P")]),t._v(" "),o("li",[t._v("SMA for active antenna (20mA max)")]),t._v(" "),o("li",[t._v("4-pin JST-GH CAN Bus (dronecode compliant)")]),t._v(" "),o("li",[t._v("8-pin JST-GH UART/I2C\n-** Power:")]),t._v(" "),o("li",[t._v("Input from either (diode OR'd):")]),t._v(" "),o("li",[t._v("USB (5V)")]),t._v(" "),o("li",[t._v("CAN (4.7 to 25.2V)")]),t._v(" "),o("li",[t._v("(4.7 to 25.2V)")]),t._v(" "),o("li",[t._v("Power consumption <1W")])])])]),t._v(" "),o("h2",{attrs:{id:"more-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#more-information"}},[t._v("#")]),t._v(" More Information")]),t._v(" "),o("p",[t._v("More information can be found on "),o("a",{attrs:{href:"https://freefly.gitbook.io/freefly-public/products/rtk-gps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Freefly's Wiki"),o("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);