(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{1331:function(e,t,r){e.exports=r.p+"assets/img/db_ESP32_setup.283af9e9.png"},1332:function(e,t,r){e.exports=r.p+"assets/img/pixhawk_wiring.8664b0ad.png"},1333:function(e,t,r){e.exports=r.p+"assets/img/dbesp32_webinterface.0d8588ad.png"},3247:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"esp32-wifi-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp32-wifi-module"}},[e._v("#")]),e._v(" ESP32 WiFi Module")]),e._v(" "),a("p",[e._v("ESP32 are readily available WiFi modules with dedicated UART, SPI and I2C interfaces, and full TCP/IP stack and microcontroller capability. They come without firmware, but "),a("em",[e._v("DroneBridge for ESP32")]),e._v(" can be installed to enable them as a transparent and bi-directional serial to WiFi bridge. They can then be used as a WiFi telemetry module with any Pixhawk series controller.")]),e._v(" "),a("p",[e._v("No configuration is generally required if connected to "),a("code",[e._v("TELEM2")]),e._v(". The typical range is approximately 50m-200m (depending on the antenna used).")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1331),alt:"DroneBridge for ESP32 connection concept"}})]),e._v(" "),a("h2",{attrs:{id:"recommended-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recommended-hardware"}},[e._v("#")]),e._v(" Recommended Hardware")]),e._v(" "),a("p",[a("em",[e._v("DroneBridge for ESP32")]),e._v(" can run on almost every ESP32 development board. Boards and modules with an external antenna connector are recommended, since these will offer more range.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Many ESP32 modules support 3.3V and 5V power supply input, while some flight controllers (e.g. Pixhawk 4) output at 5V. You will need to check compatibility and step down the voltage if needed.")])]),e._v(" "),a("p",[e._v("Modules and DevKits that accept 3.3V or 5V power supply:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.az-delivery.de/en/products/esp-32-dev-kit-c-v4",target:"_blank",rel:"noopener noreferrer"}},[e._v("AZ-Delivery — ESP-32 DevKit C"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.adafruit.com/product/4335",target:"_blank",rel:"noopener noreferrer"}},[e._v("TinyPICO — ESP32 Development Board - V2"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.adafruit.com/product/3405",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adafruit HUZZAH32 — ESP32 Feather Board"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.adafruit.com/product/4201",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adafruit AirLift — ESP32 WiFi Co-Processor Breakout Board"),a("OutboundLink")],1),e._v(" (requires FTDI adapter for flashing firmware)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.adafruit.com/product/4172",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adafruit — HUZZAH32"),a("OutboundLink")],1),e._v(" (requires FTDI adapter for flashing firmware)")])]),e._v(" "),a("h2",{attrs:{id:"downloading-and-flashing-the-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloading-and-flashing-the-firmware"}},[e._v("#")]),e._v(" Downloading and Flashing the Firmware")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/DroneBridge/ESP32/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download the firmware from the GitHub repository"),a("OutboundLink")],1),e._v(" and then "),a("a",{attrs:{href:"https://github.com/DroneBridge/ESP32#installationflashing-using-precompiled-binaries",target:"_blank",rel:"noopener noreferrer"}},[e._v("follow these flashing instructions"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("The instructions on Github are recommended because they are always up to date. Note that the parameters may differ between releases of "),a("em",[e._v("DroneBridge for ESP32")]),e._v(".")])]),e._v(" "),a("p",[e._v("The main steps are:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/DroneBridge/ESP32/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download the pre-compiled firmware binaries"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Connect your DEVKit to your computer via USB/Serial bridge (most DevKits already offer a USB port for flashing and debugging)")]),e._v(" "),a("li",[e._v("Erase the flash and flash the DroneBridge for ESP32 firmware onto your ESP32\n"),a("ul",[a("li",[e._v("Using "),a("a",{attrs:{href:"https://www.espressif.com/en/support/download/other-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("Espressif Flash Download Tool"),a("OutboundLink")],1),e._v(" (Windows only)")]),e._v(" "),a("li",[e._v("Using esp-idf/esptool (all platforms)")])])]),e._v(" "),a("li",[e._v("Power Cycle the ESP32")]),e._v(" "),a("li",[a("a",{attrs:{href:"#configuring-dronebridge-for-esp32"}},[e._v('Connect to the "DroneBridge for ESP32" WiFi network and configure the firmware for your application')])])]),e._v(" "),a("h2",{attrs:{id:"wiring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),a("p",[e._v("Wiring is very simple, and similar for all devices when connecting to the Pixhawk TELEM1/2 ports. You can use 2.54mm pitch header connectors or solder the PX4 telemetry cables directly to the board.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1332),alt:"Example for wiring an ESP32 to the TELEM port"}})]),e._v(" "),a("ol",[a("li",[e._v("Connect UART of ESP32 to a UART of your flight controller (e.g. TELEM 1 or TELEM 2 port). Make sure the voltage levels match: most ESP32 DevKits can only take 3.3V!\n"),a("ul",[a("li",[e._v("TX to RX")]),e._v(" "),a("li",[e._v("RX to TX")]),e._v(" "),a("li",[e._v("GND to GND")]),e._v(" "),a("li",[e._v("Provide a stable 3.3V or 5V power supply to the ESP32 (depending on the available inputs of your DevKit)")])])]),e._v(" "),a("li",[e._v("Set the flight controller port to the desired protocol.")]),e._v(" "),a("li",[e._v("Boards with an IPEX port for an external antenna often also offer an onboard antenna that is activated by default. You may need to resolder a resistor to activate the external antenna port.")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("ul",[a("li",[e._v("Follow the ESP32 board manufacturers recommendations on power supply. Some boards might have issues if they are simultaneously connected to a 5V power source and have a USB cable connected to the USB/Serial bridge (USB socket of the ESP32 dev board).")]),e._v(" "),a("li",[e._v("Some ESP32 DevKits manufacturers use the wrong labels for the pins on their products. Make sure that the PINs on your board are labeled correctly if you encounter issues.")])])]),e._v(" "),a("h2",{attrs:{id:"configuring-qgroundcontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-qgroundcontrol"}},[e._v("#")]),e._v(" Configuring QGroundControl")]),e._v(" "),a("p",[e._v("QGroundControl should auto-detect the connection and no further actions should be necessary ("),a("em",[e._v("DroneBridge for ESP32")]),e._v(" automatically forwards data from all connected WiFi devices via UDP to port 14550).")]),e._v(" "),a("p",[e._v("The following connection options are available:")]),e._v(" "),a("ul",[a("li",[e._v("UDP unicast on port "),a("code",[e._v("14550")]),e._v(" to all connected devices.")]),e._v(" "),a("li",[e._v("TCP on port "),a("code",[e._v("5760")])])]),e._v(" "),a("h2",{attrs:{id:"configuring-dronebridge-for-esp32"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-dronebridge-for-esp32"}},[e._v("#")]),e._v(" Configuring DroneBridge for ESP32")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("DroneBridge for ESP32")]),e._v(' default configuration should work for connecting to PX4 "out of the box". The only configuration that may be required is ensuring that the baud rates of the ESP32 and flight controller match.')]),e._v(" "),a("p",[e._v("You will want to change these settings if you want to use different pins on the ESP32, a different WiFi configuration, or to tweak the packet size. Lower packet size means more overhead and load on the system but also less latency and faster recovery from a lost packet.")]),e._v(" "),a("h3",{attrs:{id:"default-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-configuration"}},[e._v("#")]),e._v(" Default Configuration")]),e._v(" "),a("ul",[a("li",[e._v("SSID: "),a("code",[e._v("DroneBridge for ESP32")])]),e._v(" "),a("li",[e._v("Password: "),a("code",[e._v("dronebridge")])]),e._v(" "),a("li",[e._v("Transparent/MAVLink")]),e._v(" "),a("li",[e._v("UART baud rate "),a("code",[e._v("115200")])]),e._v(" "),a("li",[e._v("UART TX pin "),a("code",[e._v("17")])]),e._v(" "),a("li",[e._v("UART RX pin "),a("code",[e._v("16")])]),e._v(" "),a("li",[e._v("Gateway IP: "),a("code",[e._v("192.168.2.1")])])]),e._v(" "),a("h3",{attrs:{id:"custom-settings-webinterface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-settings-webinterface"}},[e._v("#")]),e._v(" Custom Settings & Webinterface")]),e._v(" "),a("p",[e._v("You can change the default configuration via the Webinterface. Connect to the ESP32 via WiFi and enter "),a("code",[e._v("dronebridge.local")]),e._v(", "),a("code",[e._v("http://dronebridge.local")]),e._v(" or "),a("code",[e._v("192.168.2.1")]),e._v(" in the address bar of your browser.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1333),alt:"DroneBridge for ESP32 Webinterface"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("Some settings require you to reboot the ESP32 to take effect.")])]),e._v(" "),a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),a("p",[e._v("DroneBridge for ESP32 offers a REST:API that allows you to read and write configuration options. You are not limited to the options presented by the Webinterface (e.g. baud rates). You can use the API to set custom baud rates or to integrate the system into your own setup.")]),e._v(" "),a("p",[a("strong",[e._v("To request the settings")])]),e._v(" "),a("div",{staticClass:"language-http request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("http:")]),e._v("//dronebridge.local/api/settings/request\n")])])]),a("p",[a("strong",[e._v("To request stats")])]),e._v(" "),a("div",{staticClass:"language-http request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("http:")]),e._v("//dronebridge.local/api/system/stats\n")])])]),a("p",[a("strong",[e._v("Trigger a reboot")])]),e._v(" "),a("div",{staticClass:"language-http request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("http:")]),e._v("//dronebridge.local/api/system/reboot\n")])])]),a("p",[a("strong",[e._v("Trigger a settings change:")]),e._v(" Send a valid JSON")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"wifi_ssid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"DroneBridge ESP32"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"wifi_pass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"dronebridge"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ap_channel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"tx_pin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"rx_pin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"telem_proto"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"baud"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("115200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"msp_ltm_port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ltm_pp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"trans_pack_size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ap_ip"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"192.168.2.1"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("to")]),e._v(" "),a("div",{staticClass:"language-http request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("http:")]),e._v("//dronebridge.local/api/settings/change\n")])])]),a("h2",{attrs:{id:"toubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toubleshooting"}},[e._v("#")]),e._v(" Toubleshooting")]),e._v(" "),a("ul",[a("li",[e._v("Always erase the flash of the ESP32 before flashing a new release/firmware")]),e._v(" "),a("li",[e._v("Check if the pins on your ESP board are labeled correctly.")]),e._v(" "),a("li",[e._v("Enter the IP address in your browsers address bar "),a("code",[e._v("http://192.168.2.1")]),e._v(". No https supported! You may need to disconnect from the cellular network when using a phone to be able to access the webinterface.")]),e._v(" "),a("li",[e._v("If your network is operating in the same IP range as DB for ESP32 you need to change the Gateway IP address in the Webinterface to something like "),a("code",[e._v("192.168.5.1")]),e._v(".")])])])}),[],!1,null,null,null);t.default=o.exports}}]);