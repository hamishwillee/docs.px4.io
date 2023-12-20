(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{1542:function(e,t,r){e.exports=r.p+"assets/img/ark_microhard_serial.ef454665.jpg"},1543:function(e,t,r){e.exports=r.p+"assets/img/microhard_serial_on_vehicle.2c9e0117.jpg"},1544:function(e,t,r){e.exports=r.p+"assets/img/ark_microhard_serial_ports.b39d5f90.jpg"},1545:function(e,t,r){e.exports=r.p+"assets/img/pico_configurator.08fdbac5.png"},4007:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ark-electron-microhard-serial-telemetry-radios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ark-electron-microhard-serial-telemetry-radios"}},[e._v("#")]),e._v(" ARK Electron Microhard Serial Telemetry Radios")]),e._v(" "),o("p",[o("em",[e._v("ARK Electron Microhard Serial Telemetry Radios")]),e._v(" integrate the "),o("a",{attrs:{href:"http://microhardcorp.com/P900.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microhard Pico Serial"),o("OutboundLink")],1),e._v(" P900 RF module. This can be used to enable MAVLink communication between a radio on a vehicle and a GCS.")]),e._v(" "),o("p",[e._v("Microhard Pico Serial radios are (up to) 1 Watt output radios that support point to point, point to multi-point, and mesh modes. The Microhard Pico radios can also be ordered with AES-256 encryption.")]),e._v(" "),o("p",[e._v("The approximate range with output power set to 1W is 8km (5miles) when using default settings. A single ground station radio can be used to communicate with multiple vehicles using point to multi-point or mesh. Vehicles must have different MAVLINK IDs.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1542),alt:"Microhard Radio"}})]),e._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-900mhz-serial-telemetry-air-radio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1W 900MHz Serial Telemetry Radio"),o("OutboundLink")],1),e._v(" (vehicle)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-900mhz-serial-telemetry-ground-radio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1W 900MHz USB Serial Telemetry Radio"),o("OutboundLink")],1),e._v(" (ground station)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-2400mhz-serial-telemetry-radio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1W 2.4GHz Serial Telemetry Radio"),o("OutboundLink")],1),e._v(" (vehicle)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-2400mhz-usb-serial-telemetry-radio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1W 2.4GHz USB Serial Telemetry Radio"),o("OutboundLink")],1),e._v(" (ground station)")])]),e._v(" "),o("h2",{attrs:{id:"connecting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting"}},[e._v("#")]),e._v(" Connecting")]),e._v(" "),o("h3",{attrs:{id:"vehicle-radio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-radio"}},[e._v("#")]),e._v(" Vehicle Radio")]),e._v(" "),o("p",[e._v("Connect the vehicle radio to the flight controller "),o("code",[e._v("TELEM1")]),e._v(" port. A Pixhawk-standard 6 pin JST GH telemetry cable is supplied for this purpose.")]),e._v(" "),o("p",[e._v("The radio can be powered by the telemetry cable if the output power is set to less than 100mW. For higher output levels, the radio must be separately powered via the 2 Pin Molex Nano-Fit (i.e. from a battery).")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1543),alt:"Microhard Radio on Vehicle"}})]),e._v(" "),o("h3",{attrs:{id:"ground-station-radio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ground-station-radio"}},[e._v("#")]),e._v(" Ground Station Radio")]),e._v(" "),o("p",[e._v("Connect the ground radio to the ground station via USB C. The radio does not need to be separately powered when using USB PD (1W power can be supplied).")]),e._v(" "),o("h2",{attrs:{id:"setup-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-configuration"}},[e._v("#")]),e._v(" Setup/Configuration")]),e._v(" "),o("p",[e._v("The radios are default-configured to use peer-to-peer mode and a baud rate of 57600. This allows them to connect to the PX4 "),o("code",[e._v("TELEM1")]),e._v(" port and "),o("em",[e._v("QGroundControl")]),e._v(" "),o("strong",[e._v("without any further configuration")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),o("p",[e._v('You can use a different baud rate, mode or flight controller port.\nThe only "requirement" is that the ground radio, air radio, PX4, and QGroundControl must all be set to the same baud rate.')])]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/telemetry/microhard_serial.html#configuration"}},[e._v("Microhard Serial Telemetry Radios > Configuration")]),e._v(" explains how to configure the radios, "),o("em",[e._v("QGroundControl")]),e._v(", and PX4.")],1),e._v(" "),o("p",[e._v("The ARK Electron radios must be connected to the computer running the "),o("em",[e._v("PicoConfig")]),e._v(" configuration tool as described below:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("For vehicle radio configuration you will have to connect an FTDI adapter between the radio's 3 pin JST-GH Config port and a Windows PC running "),o("em",[e._v("Pico Config")]),e._v(" (the radio must be powered, which you can do from battery or the data connection to the flight-controller's "),o("code",[e._v("TELEM1")]),e._v(" port).")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1544),alt:"Ark Microhard Serial - Ports"}})]),e._v(" "),o("p",[o("em",[e._v("Pico Config")]),e._v(" will automatically detect the radio. Adjust the baud rate setting to match PX4 (and the ground station radio).")])]),e._v(" "),o("li",[o("p",[e._v("The ground station radio USB C connection can be used for configuring the radio (as well as for telemetry data). "),o("em",[e._v("Pico Config")]),e._v(" will automatically detect and connect to the configuration port. Adjust the settings so that the baud rate matches PX4.")])])]),e._v(" "),o("p",[e._v("Once the radios and PX4 are all configured to use the same baud rate you can connect QGroundControl to the vehicle via the radio.")]),e._v(" "),o("h3",{attrs:{id:"default-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#default-configuration"}},[e._v("#")]),e._v(" Default Configuration")]),e._v(" "),o("p",[e._v("The default radio configuration as shipped is shown in "),o("em",[e._v("PicoConfig")]),e._v(" below.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1545),alt:"Pico Config"}})]),e._v(" "),o("h2",{attrs:{id:"further-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further information")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://arkelectron.com/wp-content/uploads/2021/04/PicoConfig-1.7.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pico Config 1.7"),o("OutboundLink")],1),e._v(" - Radio configuration tool")])])])}),[],!1,null,null,null);t.default=a.exports}}]);