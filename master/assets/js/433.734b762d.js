(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{1253:function(e,t,r){e.exports=r.p+"assets/img/sf1xx_i2c.05a5c69d.jpg"},2164:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"lightware-sf1x-sf02-lw20-lidar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightware-sf1x-sf02-lw20-lidar"}},[e._v("#")]),e._v(" LightWare SF1X/SF02/LW20 Lidar")]),e._v(" "),a("p",[e._v('LightWare develops a range of light-weight, general purpose, laser altimeters ("Lidar") suitable for mounting on UAVs. These are useful for applications including terrain following, precision hovering (e.g. for photography), warning of regulatory height limits, anti-collision sensing etc.')]),e._v(" "),a("p",[a("img",{attrs:{src:r(372),alt:"LightWare SF11/C Lidar"}})]),e._v(" "),a("h2",{attrs:{id:"supported-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-models"}},[e._v("#")]),e._v(" Supported Models")]),e._v(" "),a("p",[e._v("The following models are supported by PX4, and can be connected to either the I2C or Serial bus (the tables below indicates what bus can be used for each model).")]),e._v(" "),a("h3",{attrs:{id:"available"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available"}},[e._v("#")]),e._v(" Available")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Model")]),e._v(" "),a("th",[e._v("Range (m)")]),e._v(" "),a("th",[e._v("Bus")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://lightware.co.za/collections/lidar-rangefinders/products/sf11-c-120-m",target:"_blank",rel:"noopener noreferrer"}},[e._v("SF11/C"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("120")]),e._v(" "),a("td",[e._v("Serial or I2C bus")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://lightware.co.za/products/lw20-b-50-m",target:"_blank",rel:"noopener noreferrer"}},[e._v("LW20/B"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("50")]),e._v(" "),a("td",[e._v("I2C bus")]),e._v(" "),a("td",[e._v("Waterproofed (IP67) with servo for sense-and-avoid applications")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://lightware.co.za/products/lw20-c-100-m",target:"_blank",rel:"noopener noreferrer"}},[e._v("LW20/C"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("100")]),e._v(" "),a("td",[e._v("I2C bus")]),e._v(" "),a("td",[e._v("Waterproofed (IP67) with servo for sense-and-avoid applications")])])])]),e._v(" "),a("h3",{attrs:{id:"discontinued"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discontinued"}},[e._v("#")]),e._v(" Discontinued")]),e._v(" "),a("p",[e._v("The following models are no longer available from the manufacturer.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Model")]),e._v(" "),a("th",[e._v("Range")]),e._v(" "),a("th",[e._v("Bus")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"http://documents.lightware.co.za/SF02%20-%20Laser%20Rangefinder%20Manual%20-%20Rev%208.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("SF02"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("50")]),e._v(" "),a("td",[e._v("Serial")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"http://documents.lightware.co.za/SF10%20-%20Laser%20Altimeter%20Manual%20-%20Rev%206.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("SF10/A"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("25")]),e._v(" "),a("td",[e._v("Serial or I2C")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"http://documents.lightware.co.za/SF10%20-%20Laser%20Altimeter%20Manual%20-%20Rev%206.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("SF10/B"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("50")]),e._v(" "),a("td",[e._v("Serial or I2C")])]),e._v(" "),a("tr",[a("td",[e._v("SF10/C")]),e._v(" "),a("td",[e._v("100m")]),e._v(" "),a("td",[e._v("Serial or I2C")])])])]),e._v(" "),a("h2",{attrs:{id:"i2c-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i2c-setup"}},[e._v("#")]),e._v(" I2C Setup")]),e._v(" "),a("p",[e._v("Check the tables above to confirm that which models can be connected to the I2C port.")]),e._v(" "),a("p",[a("span",{attrs:{id:"i2c_hardware_setup"}})]),e._v(" "),a("h3",{attrs:{id:"hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),a("p",[e._v("Connect the Lidar the autopilot I2C port as shown below (in this case, for the "),a("RouterLink",{attrs:{to:"/ko/flight_controller/mro_pixhawk.html"}},[e._v("Pixhawk 1")]),e._v(").")],1),e._v(" "),a("p",[a("img",{attrs:{src:r(1253),alt:"SF1XX LIDAR to I2C connection"}})]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" Some older revisions cannot be used with PX4. Specifically they may be miss-configured to have an I2C address equal to "),a("code",[e._v("0x55")]),e._v(", which conflicts with "),a("code",[e._v("rgbled")]),e._v(" module. On Linux systems you may be able to determine the address using "),a("a",{attrs:{href:"http://manpages.ubuntu.com/manpages/bionic/en/man8/i2cdetect.8.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("i2cdetect"),a("OutboundLink")],1),e._v(". If the I2C address is equal to "),a("code",[e._v("0x66")]),e._v(" the sensor can be used with PX4.")])]),e._v(" "),a("p",[a("span",{attrs:{id:"i2c_parameter_setup"}})]),e._v(" "),a("h3",{attrs:{id:"parameter-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-setup"}},[e._v("#")]),e._v(" Parameter Setup")]),e._v(" "),a("p",[e._v("Set the "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_SF1XX"}},[e._v("SENS_EN_SF1XX")]),e._v(" parameter to match the rangefinder model and then reboot.")],1),e._v(" "),a("h2",{attrs:{id:"serial-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-setup"}},[e._v("#")]),e._v(" Serial Setup")]),e._v(" "),a("p",[a("span",{attrs:{id:"serial_hardware_setup"}})]),e._v(" "),a("h3",{attrs:{id:"hardware-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-2"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),a("p",[e._v("The lidar can be connected to any unused "),a("em",[e._v("serial port")]),e._v(" (UART), e.g.: TELEM2, TELEM3, GPS2 etc.")]),e._v(" "),a("p",[a("span",{attrs:{id:"serial_parameter_setup"}})]),e._v(" "),a("h3",{attrs:{id:"parameter-setup-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-setup-2"}},[e._v("#")]),e._v(" Parameter Setup")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[e._v("Configure the serial port")]),e._v(" on which the lidar will run using "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_SF0X_CFG"}},[e._v("SENS_SF0X_CFG")]),e._v(". There is no need to set the baud rate for the port, as this is configured by the driver.")],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" If the configuration parameter is not available in "),a("em",[e._v("QGroundControl")]),e._v(" then you may need to "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[e._v("add the driver to the firmware")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("Then set the "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_SF0X"}},[e._v("SENS_EN_SF0X")]),e._v(" parameter to match the rangefinder model and reboot.")],1),e._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/modules/modules_driver_distance_sensor.html#sf1xx"}},[e._v("Modules Reference: Distance Sensor (Driver) : sf1xx")]),e._v(" (PX4 Dev Guide)")],1)])])}),[],!1,null,null,null);t.default=o.exports},372:function(e,t,r){e.exports=r.p+"assets/img/sf11c_120_m.6579362e.jpg"}}]);