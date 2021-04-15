(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1215:function(t,e,r){t.exports=r.p+"assets/img/lidar_lite2_standard_wiring_spec.7b34be81.jpg"},1216:function(t,e,r){t.exports=r.p+"assets/img/lidar_lite_2_interface_wiring.a388ce2c.jpg"},1217:function(t,e,r){t.exports=r.p+"assets/img/lidarlite_wiring_scheme_pixhawk.c1ad38b5.jpg"},1218:function(t,e,r){t.exports=r.p+"assets/img/lidarlite_wiring_pins_cables.49cf1b65.jpg"},1790:function(t,e,r){"use strict";r.r(e);var i=r(18),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"lidar-lite"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite"}},[t._v("#")]),t._v(" Lidar-Lite")]),t._v(" "),i("p",[t._v("LIDAR-Lite is a compact, high-performance optical distant measurement sensor solution for drone, robot or unmanned vehicle applications. It can be connected to either I2C or PWM.")]),t._v(" "),i("p",[i("img",{attrs:{src:r(385),alt:"LidarLite v3"}})]),t._v(" "),i("h2",{attrs:{id:"where-to-buy"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://buy.garmin.com/en-AU/AU/p/557294",target:"_blank",rel:"noopener noreferrer"}},[t._v("LIDAR-Lite v3"),i("OutboundLink")],1),t._v(" (5cm - 40m)")])]),t._v(" "),i("h2",{attrs:{id:"pinouts"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),i("p",[t._v("The Lidar-Lite (v2, v3) pinout is shown below.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Pin")]),t._v(" "),i("th",[t._v("Name")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("1")]),t._v(" "),i("td",[t._v("POWER_IN")]),t._v(" "),i("td",[t._v("Power supply. 4.75-5.5V DC Nominal, Maximum 6V DC.")])]),t._v(" "),i("tr",[i("td",[t._v("2")]),t._v(" "),i("td",[t._v("POWER_EN")]),t._v(" "),i("td",[t._v("Active high, enables operation of the 3.3V micro-controller regulator. Low puts board to sleep, draws <40 μA. (Internal 100K pull-up)")])]),t._v(" "),i("tr",[i("td",[t._v("3")]),t._v(" "),i("td",[t._v("Mode Select Control")]),t._v(" "),i("td",[t._v("Provides trigger (high-low edge) PWM out (high)")])]),t._v(" "),i("tr",[i("td",[t._v("4")]),t._v(" "),i("td",[t._v("SCL")]),t._v(" "),i("td",[t._v("I2C Clock")])]),t._v(" "),i("tr",[i("td",[t._v("5")]),t._v(" "),i("td",[t._v("SDA")]),t._v(" "),i("td",[t._v("I2C Data")])]),t._v(" "),i("tr",[i("td",[t._v("6")]),t._v(" "),i("td",[t._v("GND")]),t._v(" "),i("td",[t._v("Signal/power ground.")])])])]),t._v(" "),i("h2",{attrs:{id:"wiring"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[t._v("#")]),t._v(" Wiring")]),t._v(" "),i("p",[t._v("The "),i("em",[t._v("Lidar-Lite v3")]),t._v(" can be used with either PWM or I2C.\nPWM is recommended if using an older model.\nThe rangefinder must be separately powered via some ESC/BEC (whether connected via PWM or I2C).")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("The I2C interface of non-blue-label Lidar-Lite (v1) devices has stability limitations and all silver-label generations of Lidar-Lite sensors are therefore excluded from the I2C interface.\nThe use of the PWM interface (as detailed below) is advised for these sensors.\nThe blue label (v2) devices can exhibit a constant offset if powered on with less than 5V under some conditions.\nThis is currently (Q4/2015) under investigation by the manufacturer and potentially can be resolved by adhering to specific operational conditions.\nThe recommended robust setup is a v1 device interfaced via PWM.")])]),t._v(" "),i("p",[t._v("The standard wiring instructions for Lidar-Lite 3 (from the "),i("a",{attrs:{href:"http://static.garmin.com/pumac/LIDAR_Lite_v3_Operation_Manual_and_Technical_Specifications.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Operation Manual"),i("OutboundLink")],1),t._v(") are shown below.\nLidar-Lite v2 and v3 are the same, except that the order of pins in the connector is reversed (i.e. it is as though the connector was turned over).")]),t._v(" "),i("p",[i("img",{attrs:{src:r(1215),alt:"LidarLite v3 - Standard Wiring from Garmin Specification"}})]),t._v(" "),i("h3",{attrs:{id:"pwm-interface-wiring"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pwm-interface-wiring"}},[t._v("#")]),t._v(" PWM Interface Wiring")]),t._v(" "),i("p",[t._v("The pin connections for wiring LidarLite to the "),i("em",[t._v("Pixhawk 1")]),t._v(" AUX ports (PWM interface) are shown below.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Pin")]),t._v(" "),i("th",[t._v("Lidar-Lite (v2, v3)")]),t._v(" "),i("th",[t._v("Pixhawk AUX Servo")]),t._v(" "),i("th",[t._v("Comment")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("1")]),t._v(" "),i("td",[t._v("VCC")]),t._v(" "),i("td",[t._v("AUX 6 (center)")]),t._v(" "),i("td",[t._v("Power supply. 4.75-5.5V DC Nominal, Maximum 6V DC.")])]),t._v(" "),i("tr",[i("td",[t._v("2")]),t._v(" "),i("td",[t._v("RESET")]),t._v(" "),i("td",[t._v("AUX 6 (bottom)")]),t._v(" "),i("td",[t._v("Reset line of the sensor")])]),t._v(" "),i("tr",[i("td",[t._v("3")]),t._v(" "),i("td",[t._v("PWM")]),t._v(" "),i("td",[t._v("AUX 5 (bottom)")]),t._v(" "),i("td",[t._v("PWM output of the Lidar Lite. "),i("strong",[t._v("Needs a 470 Ohm pull-down (to GND), Do not use a 1 K0hm resistor.")])])]),t._v(" "),i("tr",[i("td",[t._v("4")]),t._v(" "),i("td",[t._v("SCL")]),t._v(" "),i("td",[t._v("-")]),t._v(" "),i("td",[t._v("Not connected")])]),t._v(" "),i("tr",[i("td",[t._v("5")]),t._v(" "),i("td",[t._v("SDA")]),t._v(" "),i("td",[t._v("-")]),t._v(" "),i("td",[t._v("Not connected")])]),t._v(" "),i("tr",[i("td",[t._v("6")]),t._v(" "),i("td",[t._v("GND")]),t._v(" "),i("td",[t._v("AUX 6 (top)")]),t._v(" "),i("td",[t._v("Ground")])])])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("On a flight controller that has no AUX port the equivalent MAIN pins are used (e.g. the PWM output on the lidar instead maps to MAIN 5).\nThe pin numbers are hard-coded.")])]),t._v(" "),i("p",[t._v("The wiring for LidarLite v2 is shown below.\nLidar-Lite v3 is wired similarly, except that the pin-numbering on the connector is reversed.")]),t._v(" "),i("p",[i("img",{attrs:{src:r(1216),alt:"Lidar Lite 2 Interface wiring"}})]),t._v(" "),i("p",[i("img",{attrs:{src:r(1217),alt:"Lidar Lite 2 Interface wiring"}})]),t._v(" "),i("p",[i("img",{attrs:{src:r(1218),alt:"Lidar Lite 2 pins/cabling"}})]),t._v(" "),i("h3",{attrs:{id:"i2c-interface-wiring"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#i2c-interface-wiring"}},[t._v("#")]),t._v(" I2C Interface Wiring")]),t._v(" "),i("p",[t._v("The I2C wiring is the same for any other distance sensor.\nSimply connect the SLA, SLC, GND and VCC to the corresponding (same) pins on the flight controller and the sensor.")]),t._v(" "),i("h2",{attrs:{id:"software-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#software-configuration"}},[t._v("#")]),t._v(" Software Configuration")]),t._v(" "),i("p",[t._v("The rangefinder/port is enabled using "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_EN_LL40LS"}},[t._v("SENS_EN_LL40LS")]),t._v(" - set to "),i("code",[t._v("1")]),t._v(" for PWM, or "),i("code",[t._v("2")]),t._v(" for I2C.")],1),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("The driver for this rangefinder is usually present in firmware.\nIf missing, you would also need to add the driver ("),i("code",[t._v("drivers/ll40ls")]),t._v(") to the board configuration.")])]),t._v(" "),i("h2",{attrs:{id:"further-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"http://static.garmin.com/pumac/LIDAR_Lite_v3_Operation_Manual_and_Technical_Specifications.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("LIDAR_Lite_v3_Operation_Manual_and_Technical_Specifications.pdf"),i("OutboundLink")],1),t._v(" (Garmin)")])])])}),[],!1,null,null,null);e.default=a.exports},385:function(t,e,r){t.exports=r.p+"assets/img/lidar_lite_v3.7185119f.jpg"}}]);