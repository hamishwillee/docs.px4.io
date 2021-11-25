(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{1294:function(t,e,r){t.exports=r.p+"assets/img/lightware_studio_i2c_config.44f32c65.jpg"},1295:function(t,e,r){t.exports=r.p+"assets/img/sf1xx_i2c.05a5c69d.jpg"},2027:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lightware-sf1x-sf02-lw20-lidar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightware-sf1x-sf02-lw20-lidar"}},[t._v("#")]),t._v(" LightWare SF1X/SF02/LW20 Lidar")]),t._v(" "),a("p",[t._v('LightWare develops a range of light-weight, general purpose, laser altimeters ("Lidar") suitable for mounting on UAVs.\nThese are useful for applications including terrain following, precision hovering (e.g. for photography), warning of regulatory height limits, anti-collision sensing etc.')]),t._v(" "),a("p",[a("img",{attrs:{src:r(396),alt:"LightWare SF11/C Lidar"}})]),t._v(" "),a("h2",{attrs:{id:"supported-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-models"}},[t._v("#")]),t._v(" Supported Models")]),t._v(" "),a("p",[t._v("The following models are supported by PX4, and can be connected to either the I2C or Serial bus (the tables below indicates what bus can be used for each model).")]),t._v(" "),a("h3",{attrs:{id:"available"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available"}},[t._v("#")]),t._v(" Available")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Model")]),t._v(" "),a("th",[t._v("Range (m)")]),t._v(" "),a("th",[t._v("Bus")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://lightware.co.za/collections/lidar-rangefinders/products/sf11-c-120-m",target:"_blank",rel:"noopener noreferrer"}},[t._v("SF11/C"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("120")]),t._v(" "),a("td",[t._v("Serial or I2C bus")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://lightware.co.za/products/lw20-c-100-m",target:"_blank",rel:"noopener noreferrer"}},[t._v("LW20/C"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("I2C bus")]),t._v(" "),a("td",[t._v("Waterproofed (IP67) with servo for sense-and-avoid applications")])])])]),t._v(" "),a("h3",{attrs:{id:"discontinued"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discontinued"}},[t._v("#")]),t._v(" Discontinued")]),t._v(" "),a("p",[t._v("The following models are no longer available from the manufacturer.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Model")]),t._v(" "),a("th",[t._v("Range")]),t._v(" "),a("th",[t._v("Bus")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"http://documents.lightware.co.za/SF02%20-%20Laser%20Rangefinder%20Manual%20-%20Rev%208.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("SF02"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("50")]),t._v(" "),a("td",[t._v("Serial")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"http://documents.lightware.co.za/SF10%20-%20Laser%20Altimeter%20Manual%20-%20Rev%206.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("SF10/A"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("25")]),t._v(" "),a("td",[t._v("Serial or I2C")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"http://documents.lightware.co.za/SF10%20-%20Laser%20Altimeter%20Manual%20-%20Rev%206.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("SF10/B"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("50")]),t._v(" "),a("td",[t._v("Serial or I2C")])]),t._v(" "),a("tr",[a("td",[t._v("SF10/C")]),t._v(" "),a("td",[t._v("100m")]),t._v(" "),a("td",[t._v("Serial or I2C")])]),t._v(" "),a("tr",[a("td",[t._v("LW20/B")]),t._v(" "),a("td",[t._v("50")]),t._v(" "),a("td",[t._v("I2C bus")])])])]),t._v(" "),a("h2",{attrs:{id:"i2c-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i2c-setup"}},[t._v("#")]),t._v(" I2C Setup")]),t._v(" "),a("p",[t._v("Check the tables above to confirm that which models can be connected to the I2C port.")]),t._v(" "),a("h3",{attrs:{id:"lidar-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lidar-configuration"}},[t._v("#")]),t._v(" Lidar Configuration")]),t._v(" "),a("p",[t._v("This hardware does not ship with Pixhawk I2C compatibility enabled by default.\nTo enable support, you have to download "),a("a",{attrs:{href:"https://lightwarelidar.com/pages/lightware-studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("LightWare Studio"),a("OutboundLink")],1),t._v(" and got to "),a("strong",[t._v("Parameters > Communication")]),t._v(" and tick mark "),a("strong",[t._v("I2C compatibility mode (Pixhawk)")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(1294),alt:"LightWare SF11/C Lidar-I2C Config"}})]),t._v(" "),a("p",[a("a",{attrs:{id:"i2c_hardware_setup"}})]),t._v(" "),a("h3",{attrs:{id:"hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),a("p",[t._v("Connect the Lidar the autopilot I2C port as shown below (in this case, for the "),a("RouterLink",{attrs:{to:"/en/flight_controller/mro_pixhawk.html"}},[t._v("Pixhawk 1")]),t._v(").")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(1295),alt:"SF1XX LIDAR to I2C connection"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Some older revisions cannot be used with PX4.\nSpecifically they may be miss-configured to have an I2C address equal to "),a("code",[t._v("0x55")]),t._v(", which conflicts with "),a("code",[t._v("rgbled")]),t._v(" module.\nOn Linux systems you may be able to determine the address using "),a("a",{attrs:{href:"http://manpages.ubuntu.com/manpages/bionic/en/man8/i2cdetect.8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("i2cdetect"),a("OutboundLink")],1),t._v(".\nIf the I2C address is equal to "),a("code",[t._v("0x66")]),t._v(" the sensor can be used with PX4.")])]),t._v(" "),a("p",[a("a",{attrs:{id:"i2c_parameter_setup"}})]),t._v(" "),a("h3",{attrs:{id:"parameter-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-setup"}},[t._v("#")]),t._v(" Parameter Setup")]),t._v(" "),a("p",[t._v("Set the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_EN_SF1XX"}},[t._v("SENS_EN_SF1XX")]),t._v(" parameter to match the rangefinder model and then reboot.")],1),t._v(" "),a("h2",{attrs:{id:"serial-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-setup"}},[t._v("#")]),t._v(" Serial Setup")]),t._v(" "),a("p",[a("a",{attrs:{id:"serial_hardware_setup"}})]),t._v(" "),a("h3",{attrs:{id:"hardware-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-2"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),a("p",[t._v("The lidar can be connected to any unused "),a("em",[t._v("serial port")]),t._v(" (UART), e.g.: TELEM2, TELEM3, GPS2 etc.")]),t._v(" "),a("p",[a("a",{attrs:{id:"serial_parameter_setup"}})]),t._v(" "),a("h3",{attrs:{id:"parameter-setup-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-setup-2"}},[t._v("#")]),t._v(" Parameter Setup")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[t._v("Configure the serial port")]),t._v(" on which the lidar will run using "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_SF0X_CFG"}},[t._v("SENS_SF0X_CFG")]),t._v(".\nThere is no need to set the baud rate for the port, as this is configured by the driver.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If the configuration parameter is not available in "),a("em",[t._v("QGroundControl")]),t._v(" then you may need to "),a("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[t._v("add the driver to the firmware")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Then set the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_EN_SF0X"}},[t._v("SENS_EN_SF0X")]),t._v(" parameter to match the rangefinder model and reboot.")],1),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/modules/modules_driver_distance_sensor.html#sf1xx"}},[t._v("Modules Reference: Distance Sensor (Driver) : sf1xx")])],1)])])}),[],!1,null,null,null);e.default=o.exports},396:function(t,e,r){t.exports=r.p+"assets/img/sf11c_120_m.6579362e.jpg"}}]);