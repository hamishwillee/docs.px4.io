(window.webpackJsonp=window.webpackJsonp||[]).push([[1281],{2369:function(e,t,o){"use strict";o.r(t);var r=o(19),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"telemetry-radios-modems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radios-modems"}},[e._v("#")]),e._v(" Telemetry Radios/Modems")]),e._v(" "),o("p",[e._v("Telemetry Radios can (optionally) be used to provide a wireless MAVLink connection between a ground control station like "),o("em",[e._v("QGroundControl")]),e._v(" and a vehicle running PX4. This makes it possible to tune parameters while a vehicle is in flight, inspect telemetry in real-time, change a mission on the fly, etc.")]),e._v(" "),o("p",[e._v("PX4 supports a number of types of telemetry radios:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/telemetry/sik_radio.html"}},[e._v("SiK Radio")]),e._v(" based firmware (more generally, any radio with a UART interface should work).\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/telemetry/rfd900_telemetry.html"}},[e._v("RFD900 Telemetry Radio")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/telemetry/holybro_sik_radio.html"}},[e._v("HolyBro SiK Telemetry Radio")])],1),e._v(" "),o("li",[o("del",[o("em",[e._v("HKPilot Telemetry Radio")])]),e._v(" (Discontinued)")]),e._v(" "),o("li",[o("del",[o("em",[e._v("3DR Telemetry Radio")])]),e._v(" (Discontinued)")])])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/telemetry/telemetry_wifi.html"}},[e._v("Telemetry Wifi")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/telemetry/microhard_serial.html"}},[e._v("Microhard Serial Telemetry Radio")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/telemetry/ark_microhard_serial.html"}},[e._v("ARK Electron Microhard Serial Telemetry Radio")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/telemetry/holybro_microhard_p900_radio.html"}},[e._v("Holybro Microhard P900 Telemetry Radio")])],1)])],1),e._v(" "),o("li",[e._v("CUAV Serial Telemetry Radio\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/telemetry/cuav_p8_radio.html"}},[e._v("CUAV P8 Telemetry Radio")])],1)])]),e._v(" "),o("li",[e._v("XBee Serial Telemetry Radio\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/telemetry/holybro_xbp9x_radio.html"}},[e._v("HolyBro XBP9X Telemetry Radio")]),e._v(" (Discontinued)")],1)])])]),e._v(" "),o("p",[e._v("PX4 is protocol compatible with "),o("RouterLink",{attrs:{to:"/en/telemetry/sik_radio.html"}},[e._v("SiK Radio")]),e._v(" and will generally work out of the box (though you may need to change/use an appropriate connector).")],1),e._v(" "),o("p",[e._v("WiFi telemetry typically has shorter range, higher data rates, and makes it easier to support FPV/video feeds.\nOne benefit of WiFi radios is that you only need to purchase a single radio unit for your vehicle (assuming the ground station already has WiFi).")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("PX4 does not support connecting an LTE USB module to the flight controller (and sending MAVLink traffic via the Internet).\nYou can however connect an LTE module to a companion computer and use it to route MAVLink traffic from the flight controller.\nFor more information see: "),o("RouterLink",{attrs:{to:"/en/companion_computer/companion_computer_peripherals.html#data_telephony"}},[e._v("Companion Computer Peripherals > Data Telephony")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"allowed-frequency-bands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#allowed-frequency-bands"}},[e._v("#")]),e._v(" Allowed Frequency Bands")]),e._v(" "),o("p",[e._v("Radio bands allowed for use with drones differ between continents, regions, countries, and even states.\nYou should select a telemetry radio that uses a frequency range that is allowed in the areas where you plan on using the drone.")]),e._v(" "),o("p",[e._v("Low power "),o("RouterLink",{attrs:{to:"/en/telemetry/sik_radio.html"}},[e._v("SiK radios")]),e._v(", such as the "),o("RouterLink",{attrs:{to:"/en/telemetry/holybro_sik_radio.html"}},[e._v("Holybro Telemetry Radio")]),e._v(", are often available in 915 MHz and 433 MHz variants.\nWhile you should check applicable laws in your country/state, broadly speaking 915 MHz can be used in the US, while 433 MHz can be used in EU, Africa, Oceania, and most of Asia.")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);