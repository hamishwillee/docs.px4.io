(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1344:function(e,t,r){e.exports=r.p+"assets/img/ark_microhard_serial.1de60f06.jpg"},1345:function(e,t,r){e.exports=r.p+"assets/img/microhard_serial_on_vehicle.1a0bd748.jpg"},1346:function(e,t,r){e.exports=r.p+"assets/img/pico_configurator.44905091.png"},1347:function(e,t,r){e.exports=r.p+"assets/img/ark_microhard_serial_ports.b39d5f90.jpg"},3237:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"microhard-serial-radio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#microhard-serial-radio"}},[e._v("#")]),e._v(" Microhard Serial Radio")]),e._v(" "),o("p",[o("a",{attrs:{href:"http://microhardcorp.com/P900.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microhard Pico Serial"),o("OutboundLink")],1),e._v(" radios enable MAVLink communication between a radio on a vehicle and a GCS. Microhard Pico Serial radios are (up to) 1 Watt output radios that support point to point, point to multi-point, and mesh modes. The Microhard Pico radios can also be ordered with AES-256 encryption.")]),e._v(" "),o("p",[e._v("The approximate range with output power set to 1W is 8km (5miles) when using default settings. A single ground station radio can be used to communicate with multiple vehicles using point to multi-point or mesh. Vehicles must have different MAVLINK IDs.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1344),alt:"Microhard Radio"}})]),e._v(" "),o("h2",{attrs:{id:"purchase"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[e._v("#")]),e._v(" Purchase:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-900mhz-serial-telemetry-air-radio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1W 900MHz Serial Telemetry Radio"),o("OutboundLink")],1),e._v(" (vehicle)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-900mhz-serial-telemetry-ground-radio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1W 900MHz USB Serial Telemetry Radio"),o("OutboundLink")],1),e._v(" (ground station)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-2400mhz-serial-telemetry-radio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1W 2.4GHz Serial Telemetry Radio"),o("OutboundLink")],1),e._v(" (vehicle)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-2400mhz-usb-serial-telemetry-radio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1W 2.4GHz USB Serial Telemetry Radio"),o("OutboundLink")],1),e._v(" (ground station)")])]),e._v(" "),o("h2",{attrs:{id:"connecting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting"}},[e._v("#")]),e._v(" Connecting")]),e._v(" "),o("h3",{attrs:{id:"vehicle-radio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-radio"}},[e._v("#")]),e._v(" Vehicle Radio")]),e._v(" "),o("p",[e._v("Connect the vehicle radio to the flight controller "),o("code",[e._v("TELEM1")]),e._v(" port (any free serial port can be used). A Pixhawk-standard 6 pin JST GH telemetry cable is supplied for this purpose.")]),e._v(" "),o("p",[e._v("The radio can be powered by the telemetry cable if the output power is set to less than 100mW. For higher output levels, the radio must be separately powered via the 2 Pin Molex Nano-Fit (i.e. from a battery).")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1345),alt:"Microhard Radio on Vehicle"}})]),e._v(" "),o("h3",{attrs:{id:"ground-station-radio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ground-station-radio"}},[e._v("#")]),e._v(" Ground Station Radio")]),e._v(" "),o("p",[e._v("Connect the ground radio to the ground station via USB C. The radio does not need to be separately powered when using USB PD (1W power can be supplied).")]),e._v(" "),o("h2",{attrs:{id:"setup-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-configuration"}},[e._v("#")]),e._v(" Setup/Configuration")]),e._v(" "),o("p",[e._v("The ground radio, air radio, PX4, and QGroundControl must all be set to the same baud rate.")]),e._v(" "),o("p",[e._v("PX4 is configured to use "),o("code",[e._v("TELEM1")]),e._v(" for telemetry radios, with a default baud rate of 57600 (recommended). No further PX4 configuration is required if you are using this port and baud rate.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),o("p",[e._v("You can configure PX4 to use any other free serial port, or configure the baud rate, by following the instructions in "),o("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripherals")])],1)]),e._v(" "),o("p",[e._v("The radios are configured using "),o("a",{attrs:{href:"https://arkelectron.com/wp-content/uploads/2021/04/PicoConfig-1.7.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pico Config"),o("OutboundLink")],1),e._v(" (Windows only).")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1346),alt:"Pico Config"}})]),e._v(" "),o("p",[e._v("For vehicle radio configuration you will have to connect an FTDI adapter between the radio's 3 pin JST-GH Config port and a Windows PC running "),o("em",[e._v("Pico Config")]),e._v(" (the radio must be powered, which you can do from battery or the data connection to the flight-controller's "),o("code",[e._v("TELEM1")]),e._v(" port). "),o("em",[e._v("Pico Config")]),e._v(" will automatically detect the radio. Adjust the baud rate setting to match PX4 (and the ground station radio).")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1347),alt:"Ark Microhard Serial - Ports"}})]),e._v(" "),o("p",[e._v("The ground station radio USB C connection can be used for configuring the radio (as well as for telemetry data). "),o("em",[e._v("Pico Config")]),e._v(" will automatically detect and connect to the configuration port. Adjust the settings so that the baud rate matches PX4.")]),e._v(" "),o("p",[e._v("Once the radios and PX4 are all configured to use the same baud rate you can connect QGroundControl to the vehicle via the radio. "),o("em",[e._v("QGroundControl")]),e._v(' will not automatically detect the radio, so first create a new "serial connection" in '),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/SettingsView.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Settings > Comm Links"),o("OutboundLink")],1),e._v(" (set the same baud rate as used by PX4/radios).")])])}),[],!1,null,null,null);t.default=a.exports}}]);