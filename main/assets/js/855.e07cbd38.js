(window.webpackJsonp=window.webpackJsonp||[]).push([[855],{3286:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"avionics-anonymous-laser-altimeter-uavcan-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avionics-anonymous-laser-altimeter-uavcan-interface"}},[e._v("#")]),e._v(" Avionics Anonymous Laser Altimeter UAVCAN Interface")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("In 2022, UAVCAN (v0) was forked and is maintained as "),a("code",[e._v("DroneCAN")]),e._v('. While this product still mentions "UAVCAN", it is fully compatible with PX4\'s DroneCAN support.')])]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-laser-altimeter-interface/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avionics Anonymous Laser Altimeter Interface"),a("OutboundLink")],1),e._v(" allows a "),a("a",{attrs:{href:"#supported_rangefinders"}},[e._v("number of common rangefinders")]),e._v(" to be connected via the CAN bus (this is a more robust interface than I2C).")]),e._v(" "),a("p",[a("img",{attrs:{src:r(765),alt:"Avionics Anonymous Laser Altimeter DroneCAN Interface"}})]),e._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-laser-altimeter-interface/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AvAnon Laser Interface"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("span",{attrs:{id:"supported_rangefinders"}})]),e._v(" "),a("h2",{attrs:{id:"supported-rangefinders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-rangefinders"}},[e._v("#")]),e._v(" Supported Rangefinders")]),e._v(" "),a("p",[e._v("A full list of supported rangefinders can be found on the link above.")]),e._v(" "),a("p",[e._v("At time of writing the following rangefinders are supported:")]),e._v(" "),a("ul",[a("li",[e._v("Lightware SF30/D")]),e._v(" "),a("li",[e._v("Lightware SF10/a")]),e._v(" "),a("li",[e._v("Lightware SF10/b")]),e._v(" "),a("li",[e._v("Lightware SF10/c")]),e._v(" "),a("li",[e._v("Lightware SF11/c")]),e._v(" "),a("li",[e._v("Lightware SF/LW20/b")]),e._v(" "),a("li",[e._v("Lightware SF/LW20/c")])]),e._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),a("h3",{attrs:{id:"wiring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),a("p",[e._v("The rangefinder (laser) is connected to the AvAnon interface board, which is connected to one of the CAN ports on your autopilot. The wiring is as per the pinout above, or the necessary cables can be purchased to connect to your system right out of the box. These are available at the links "),a("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-laser-altimeter-interface/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The interface board provides a filtered power output for the laser, but does not provide its own regulation. Therefore the laser must be compatible with whatever voltage is supplied to the board.")]),e._v(" "),a("h3",{attrs:{id:"pinouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[e._v("#")]),e._v(" Pinouts")]),e._v(" "),a("h3",{attrs:{id:"can-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-connector"}},[e._v("#")]),e._v(" CAN Connector")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Pin")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("POWER_IN")]),e._v(" "),a("td",[e._v("Power Supply. 4.0-5.5V supported, but must also be compatible with connected laser.")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("TX/SCL")]),e._v(" "),a("td",[e._v("TX for serial mode, Clock for I2C mode")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("RX/SDA")]),e._v(" "),a("td",[e._v("RX for serial mode, Data for I2C mode")])]),e._v(" "),a("tr",[a("td",[e._v("4")]),e._v(" "),a("td",[e._v("GND")]),e._v(" "),a("td",[e._v("Signal/power ground.")])])])]),e._v(" "),a("h3",{attrs:{id:"laser-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#laser-connector"}},[e._v("#")]),e._v(" Laser Connector")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Pin")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("POWER_OUT")]),e._v(" "),a("td",[e._v("Filtered power at the supply voltage.")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("CAN+")]),e._v(" "),a("td",[e._v("TX for serial mode, Clock for I2C mode")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("RX/SDA")]),e._v(" "),a("td",[e._v("RX for serial mode, Data for I2C mode")])]),e._v(" "),a("tr",[a("td",[e._v("4")]),e._v(" "),a("td",[e._v("GND")]),e._v(" "),a("td",[e._v("Signal/power ground.")])])])]),e._v(" "),a("h2",{attrs:{id:"flight-controller-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-setup"}},[e._v("#")]),e._v(" Flight Controller Setup")]),e._v(" "),a("p",[e._v("DroneCAN must be enabled by setting "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" non zero.")],1),e._v(" "),a("p",[e._v("The minimum and maximum valid range for the laser must be set in the parameters "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_RNG_MIN"}},[e._v("UAVCAN_RNG_MIN")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_RNG_MAX"}},[e._v("UAVCAN_RNG_MAX")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports},765:function(e,t,r){e.exports=r.p+"assets/img/avionics_anon_altimeter_uavcan_interface.e6abff59.jpg"}}]);