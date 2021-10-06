(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{1274:function(e,t,a){e.exports=a.p+"assets/img/us_d1_hero.28f68334.jpg"},1996:function(e,t,a){"use strict";a.r(t);var r=a(19),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"ainstein-us-d1-standard-radar-altimeter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ainstein-us-d1-standard-radar-altimeter"}},[e._v("#")]),e._v(" Ainstein US-D1 Standard Radar Altimeter")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("This supersedes the "),r("em",[e._v("Aerotenna uLanding Radar")]),e._v(" (discontinued) but uses the same driver/setup.")])]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("Ainstein")]),e._v(" "),r("a",{attrs:{href:"https://ainstein.ai/drone-makers-drone-service-providers/us-d1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("US-D1 Standard Radar Altimeter"),r("OutboundLink")],1),e._v(" is a compact microwave rangefinder that has been optimised for use on UAVs.\nWith a sensing range of about 40 metres, it is useful for applications including terrain following, precision hovering (e.g. for photography), anti-collision sensing etc.\nParticular advantages of this product are that it can operate effectively in all weather conditions and over all terrain types (including water).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1274),alt:"Ainstein US-DA"}})]),e._v(" "),r("p",[e._v("The rangefinder is not automatically included in most firmware, and hence cannot be used just by setting a parameter through "),r("em",[e._v("QGroundControl")]),e._v(" (as is possible with some other rangefinders).\nTo use it you will need to add the driver to firmware and update a configuration file to start the driver on boot.\nThe sections below explain how.")]),e._v(" "),r("h2",{attrs:{id:"hardware-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),r("p",[e._v("The rangefinder is supported by any hardware which runs a NuttX or Posix OS and which can offer a serial port for the interface.\nMinimally this will include most, if not all, "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk Series")]),e._v(" controllers.")],1),e._v(" "),r("p",[e._v("US-D1 can be connected to any unused "),r("em",[e._v("serial port")]),e._v(" (UART), e.g.: TELEM2, TELEM3, GPS2 etc.")]),e._v(" "),r("h2",{attrs:{id:"parameter-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameter-setup"}},[e._v("#")]),e._v(" Parameter Setup")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[e._v("Configure the serial port")]),e._v(" on which the lidar will run using "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_ULAND_CFG"}},[e._v("SENS_ULAND_CFG")]),e._v(".\nThere is no need to set the baud rate for the port, as this is configured by the driver.")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("If the configuration parameter is not available in "),r("em",[e._v("QGroundControl")]),e._v(" then you may need to "),r("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[e._v("add the driver to the firmware")]),e._v(":")],1),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("drivers/distance_sensor/ulanding\n")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);