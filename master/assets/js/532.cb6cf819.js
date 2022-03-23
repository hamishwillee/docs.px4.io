(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{3403:function(e,t,o){"use strict";o.r(t);var r=o(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"microhard-serial-telemetry-radios"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#microhard-serial-telemetry-radios"}},[e._v("#")]),e._v(" Microhard Serial Telemetry Radios")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://microhardcorp.com/P900.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microhard Pico Serial Radios"),r("OutboundLink")],1),e._v(" integrate the "),r("a",{attrs:{href:"http://microhardcorp.com/P900.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microhard Pico Serial"),r("OutboundLink")],1),e._v(" P900 RF module.")]),e._v(" "),r("p",[e._v("This is a relatively small size and low cost radio that supports modes including point to point, point to multi-point, and mesh modes. It has configurable power output and can also be configured to use forward error correction. Radios can also be ordered that support secure/encrypted channels, although this is subject to export restriction.")]),e._v(" "),r("p",[e._v("Manufacturers typically default-configure the radios in peer-to-peer mode and match the baud rate expected by PX4 and "),r("em",[e._v("QGroundControl")]),e._v(" (57600 baud). This allows plug and play telemetry when the radios are connected to the usual telemetry ports on a Pixhawk flight controllers ("),r("code",[e._v("TELEM1")]),e._v(" or "),r("code",[e._v("TELEM2")]),e._v(") along with auto-detection of the connection in "),r("em",[e._v("QGroundControl")]),e._v(".")]),e._v(" "),r("p",[e._v("Several manufacturers provide solutions based on these radios:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/telemetry/ark_microhard_serial.html"}},[e._v("ARK Electron Microhard Serial Telemetry Radio")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/telemetry/holybro_microhard_p900_radio.html"}},[e._v("Holybro Microhard P900 Telemetry Radio")])],1)]),e._v(" "),r("h2",{attrs:{id:"range-tradeoffs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#range-tradeoffs"}},[e._v("#")]),e._v(" Range Tradeoffs")]),e._v(" "),r("p",[e._v("The radio range depends on a number of factors, including: baud rate, power output, mode, whether forward error connection is enabled, whether encryption is enabled, antenna used etc.")]),e._v(" "),r("p",[e._v("The selection of these parameters is a tradeoff:")]),e._v(" "),r("ul",[r("li",[e._v("increasing baud rate decreases radio range.")]),e._v(" "),r("li",[e._v("increasing radio power increases range, but decreases flight time.")]),e._v(" "),r("li",[e._v("point to multipoint means you can have a single ground station talking to multiple vehicles, but increases the bandwidth on the channel.")]),e._v(" "),r("li",[e._v("mesh configurations provide similar convenience and cost.")])]),e._v(" "),r("p",[e._v("The maximum range quoted in specifications is around 60km. ARK Electron suggest an approximate range of 8km with output power set to 1W is 8km and using default settings.")]),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("For convenience, radios are usually default-configured so that they can be used with PX4 and "),r("em",[e._v("QGroundControl")]),e._v(" out of the box.")]),e._v(" "),r("p",[e._v('Developers can modify the configuration. The only "requirement" is that the: ground radio, air radio, PX4, and '),r("em",[e._v("QGroundControl")]),e._v(" must all be set to use the "),r("strong",[e._v("same")]),e._v(" baud rate (and of course each MAVLink system must have a unique System ID).")]),e._v(" "),r("h3",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),r("p",[e._v("PX4 is configured to use "),r("code",[e._v("TELEM1")]),e._v(" for telemetry radios, with a default baud rate of 57600. You can configure PX4 to use any other free serial port a different baud rate, by following the instructions in "),r("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripherals")]),e._v(".")],1),e._v(" "),r("h3",{attrs:{id:"qgroundcontrol-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-configuration"}},[e._v("#")]),e._v(" QGroundControl Configuration")]),e._v(" "),r("p",[e._v("QGroundControl autodetects a serial telemetry connection with the baud rate 57600.")]),e._v(" "),r("p",[e._v("For any other rate you will need to add a serial comms link that sets the rate that was used. See "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/SettingsView.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Settings > Comms Links"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"radio-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-configuration"}},[e._v("#")]),e._v(" Radio Configuration")]),e._v(" "),r("p",[e._v("Microhard serial radios are configured using the "),r("em",[e._v("PicoConfig")]),e._v(" application (Windows only). This can be downloaded here: "),r("a",{attrs:{href:"https://arkelectron.com/wp-content/uploads/2021/04/PicoConfig-1.7.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("PicoConfig-1.7.zip"),r("OutboundLink")],1),e._v(" (ARK Electron) or "),r("a",{attrs:{href:"http://www.holybro.com/download/picoconfig-1-8/",target:"_blank",rel:"noopener noreferrer"}},[e._v("picoconfig-1-8"),r("OutboundLink")],1),e._v(" (Holybro).")]),e._v(" "),r("p",[e._v("In point-to-point operating modes, there must be a master to provide network synchronization for the system, so one radio should be configured to PP master and another should be configured to PP remote.")]),e._v(" "),r("p",[e._v("The screen shots below show the default radio configuration settings for connecting to PX4 and "),r("em",[e._v("QGroundControl")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:o(404),width:"400px",title:"Holybro Pico Config"}}),e._v(" "),r("img",{attrs:{src:o(405),width:"400px",title:"Holybro Pico Config"}}),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/master/assets/hardware/telemetry/Pico-Series-P900.Operating-Manual.v1.8.7.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pico Series P900.Operating Manual.v1.8.7"),r("OutboundLink")],1),e._v(" has additional information on radio configuration (including mesh and multipoint modes).")]),e._v(" "),r("h3",{attrs:{id:"mesh-and-multipoint-modes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mesh-and-multipoint-modes"}},[e._v("#")]),e._v(" Mesh and Multipoint Modes")]),e._v(" "),r("p",[e._v("Mesh and point to multi-point modes are supported, but all vehicles must have a unique Mavlink ID.")]),e._v(" "),r("p",[e._v("Anecdotally:")]),e._v(" "),r("ul",[r("li",[e._v("At the highest link rate, with no FEC, we can have 201 drones in one mesh system transmitting 80 bytes once a second.")]),e._v(" "),r("li",[e._v('You can have multiple networks working together at the same time without mutual interference using "co-located systems". For example, to deploy more than 500 vehicles you would need to deploy three P900 mesh coordinators, each serving up to 201 drones in their respective local networks.')])])])}),[],!1,null,null,null);t.default=a.exports},404:function(e,t,o){e.exports=o.p+"assets/img/holybro_pico_config.eb98b9fe.png"},405:function(e,t,o){e.exports=o.p+"assets/img/holybro_pico_config1.928892fb.png"}}]);