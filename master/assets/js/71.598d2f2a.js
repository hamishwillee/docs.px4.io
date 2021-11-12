(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1359:function(t,e,o){t.exports=o.p+"assets/img/alpha_uavlink_back.efdb1715.jpg"},1360:function(t,e,o){t.exports=o.p+"assets/img/alpha_uavlink_front.672c8f87.jpg"},1361:function(t,e,o){t.exports=o.p+"assets/img/doiting_eps_12f_back.620f356a.jpg"},1362:function(t,e,o){t.exports=o.p+"assets/img/doiting_eps_12f_front.b229149a.jpg"},1363:function(t,e,o){t.exports=o.p+"assets/img/pixracer_network_setup_connection_windows.4b6c2413.png"},1364:function(t,e,o){t.exports=o.p+"assets/img/pixracer_network_setup_security_windows.646da5eb.png"},1365:function(t,e,o){t.exports=o.p+"assets/img/wifi_bridge.5e243a79.png"},1366:function(t,e,o){t.exports=o.p+"assets/img/esp8266_flashing_rig.900b6050.jpg"},1367:function(t,e,o){t.exports=o.p+"assets/img/esp8266_pinout.4c1f434c.jpg"},1368:function(t,e,o){t.exports=o.p+"assets/img/esp8266_flashing_ftdi.bc982baa.jpg"},2060:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"esp8266-wifi-module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-wifi-module"}},[t._v("#")]),t._v(" ESP8266 WiFi Module")]),t._v(" "),r("p",[t._v("The ESP8266 and its clones are low-cost and readily available Wi-Fi modules with full TCP/IP stack and microcontroller capability.\nThey can be used with any Pixhawk series controller.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("ESP8266 is the "),r("em",[t._v("defacto")]),t._v(" default WiFi module for use with "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(" (and is usually bundled with it).")],1)]),t._v(" "),r("h2",{attrs:{id:"where-to-buy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),r("p",[t._v("The ESP8266 module is readily available from a number of suppliers.\nA few vendors are listed below.")]),t._v(" "),r("p",[t._v("Most modules support 3.3 V input (only), while some flight controllers (e.g. Pixhawk 4) output at 5V (you will need to check compatibility and step down the voltage if needed).")]),t._v(" "),r("p",[t._v("Modules that accept 3.3V supply:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.sparkfun.com/products/13678",target:"_blank",rel:"noopener noreferrer"}},[t._v("WRL-17146"),r("OutboundLink")],1),t._v(" (Sparkfun)")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://us.gearbest.com/boards-shields/pp_009604906563.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AI Cloud"),r("OutboundLink")],1),t._v(" - discontinued (GearBeast)")])]),t._v(" "),r("p",[t._v("Modules that accept 5.0V supply:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.banggood.com/Wireless-Wifi-to-Uart-Telemetry-Module-With-Antenna-for-Mini-APM-Flight-Controller-p-1065339.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AI Thinker"),r("OutboundLink")],1),t._v(" (Banggood)")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.banggood.com/MAVLink-Wifi-Bridge-2_4G-Wireless-Wifi-Telemetry-Module-with-Antenna-for-Pixhawk-APM-Flight-Controller-p-1428590.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlphaUAVLink"),r("OutboundLink")],1),t._v(" (Banggood)")])]),t._v(" "),r("p",[r("span",{attrs:{id:"px4_config"}})]),t._v(" "),r("h2",{attrs:{id:"pixhawk-px4-setup-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-px4-setup-configuration"}},[t._v("#")]),t._v(" Pixhawk/PX4 Setup & Configuration")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("You "),r("em",[t._v("may")]),t._v(" first need to update the radio with PX4-compatible ESP8266 firmware ("),r("a",{attrs:{href:"#esp8266-flashing-firmware-advanced"}},[t._v("see below")]),t._v(").\nThe manufacture instructions should explain if this is needed.")])]),t._v(" "),r("p",[t._v("Connect your ESP8266 to your Pixhawk-series flight controller (e.g. Pixracer) on any free UART.")]),t._v(" "),r("p",[t._v("Connect the flight controller to your ground station via USB (as WiFi is not yet fully set up).")]),t._v(" "),r("p",[t._v("Using "),r("em",[t._v("QGroundControl")]),t._v(":")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Load recent PX4 firwmare onto the flight controller")]),t._v(".")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[t._v("Configure the serial port")]),t._v(" used to connect the ESP8266.\nRemember to set the baud rate to 921600 in order to match the value set for the ESP8266.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html"}},[t._v("Configure MAVLink")]),t._v(" on the corresponding serial port in order to receive telemetry and transmit commands over the ESP8266.")],1)]),t._v(" "),r("p",[t._v("Once you have configured the flight controller serial port used for connecting to the radio, you can remove the physical USB connection between the ground station and the vehicle.")]),t._v(" "),r("h2",{attrs:{id:"connect-via-esp8266-to-qgc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect-via-esp8266-to-qgc"}},[t._v("#")]),t._v(" Connect via ESP8266 to QGC")]),t._v(" "),r("p",[t._v("The module exposes a WiFi hotspot that your ground station computer can use to connect to the vehicle.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The settings for the ESP8266 hotspot should be provided with the board (e.g. typically printed on the reverse side of the board or on the packaging).")]),t._v(" "),r("p",[t._v("A common factory network setting is:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("SSID:")]),t._v(" PixRacer")]),t._v(" "),r("li",[r("strong",[t._v("Password:")]),t._v(" pixracer")]),t._v(" "),r("li",[r("strong",[t._v("WiFi Channel:")]),t._v(" 11")]),t._v(" "),r("li",[r("strong",[t._v("UART speed:")]),t._v(" 921600")])]),t._v(" "),r("p",[t._v("Other modules may use settings like this:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("SSID:")]),t._v(" IFFRC_xxxxxxxx")]),t._v(" "),r("li",[r("strong",[t._v("Password:")]),t._v(" 12345678")]),t._v(" "),r("li",[r("strong",[t._v("IP:")]),t._v(" 192.168.4.1")]),t._v(" "),r("li",[r("strong",[t._v("Port:")]),t._v(" 6789 (TCP)")])]),t._v(" "),r("p",[t._v("Examples of boards from AlphaUILink and DOITING are shown below:")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1359),width:"250px",alt:"AlphaUAVLink - Back"}}),t._v(" "),r("img",{attrs:{src:o(1360),width:"250px",alt:"AlphaUAVLink - Front"}}),t._v(" "),r("img",{attrs:{src:o(1361),width:"250px",alt:"DOITING EPS 12F - Back"}}),t._v(" "),r("img",{attrs:{src:o(1362),width:"250px",alt:"DOITING EPS 12F - Front"}})])]),t._v(" "),r("p",[t._v("On your wifi-enabled "),r("em",[t._v("QGroundControl")]),t._v(" ground station computer/tablet, find and connect to the open wireless network for your ESP8266.\nOn a Windows computer the connection settings for a network with name "),r("strong",[t._v("Pixracer")]),t._v(" and default password "),r("strong",[t._v("pixracer")]),t._v(" point will look like this:")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1363),alt:"Windows Network Setup: Connection"}}),t._v(" "),r("img",{attrs:{src:o(1364),alt:"Windows Network Setup: Security"}})]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v(' will automatically connect to the vehicle when the ground station computer is attached to a WiFi access point named  "Pixracer".')]),t._v(" "),r("p",[t._v("If you're using a module with any other WiFi name you will need to manually set up the QGroundControl WiFi connection, as shown in the following section.")]),t._v(" "),r("h2",{attrs:{id:"configure-qgc-with-non-standard-wifi-connections"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-qgc-with-non-standard-wifi-connections"}},[t._v("#")]),t._v(" Configure QGC with non-standard WiFi connections")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v(' will automatically connect to the vehicle when the ground station computer is attached to the "Pixracer" WiFi access point.\nFor any other access point name you will need to manually create a custom comm link:')]),t._v(" "),r("ol",[r("li",[t._v("Go to "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/SettingsView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Application Settings > Comm Links"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Add new connection with appropriate settings.")]),t._v(" "),r("li",[t._v("Select the new connection, and click "),r("strong",[t._v("Connect")]),t._v(".")]),t._v(" "),r("li",[t._v("The vehicle should now connect")])]),t._v(" "),r("h2",{attrs:{id:"verify"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verify"}},[t._v("#")]),t._v(" Verify")]),t._v(" "),r("p",[t._v("You should now see HUD movement on your QGC computer via wireless link and be able to view the summary panel for the ESP8266 WiFi Bridge (as shown below).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1365),alt:"QGC Summary showing Wifi Bridge"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("If you have any problem connecting, see "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/Support/troubleshooting_qgc.html#waiting_for_connection",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC Installation/Configuration Problems"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"esp8266-flashing-firmware-advanced"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-flashing-firmware-advanced"}},[t._v("#")]),t._v(" ESP8266 Flashing/Firmware (Advanced)")]),t._v(" "),r("p",[t._v("ESP8266 modules from different manufacturers may not have appropriate ESP8266 firmware pre-installed.\nThe instructions below explain how to update radios with the correct version.")]),t._v(" "),r("h3",{attrs:{id:"pre-built-binaries"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pre-built-binaries"}},[t._v("#")]),t._v(" Pre Built Binaries")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.grubba.com/mavesp8266/firmware-1.2.2.bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavLink ESP8266 Firmware V 1.2.2"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"build-from-sources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-from-sources"}},[t._v("#")]),t._v(" Build From Sources")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("firmware repository"),r("OutboundLink")],1),t._v(" contains instructions and all the tools needed for building and flashing the ESP8266 firmware.")]),t._v(" "),r("h3",{attrs:{id:"updating-the-firmware-ota"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-firmware-ota"}},[t._v("#")]),t._v(" Updating the Firmware OTA")]),t._v(" "),r("p",[t._v("If you have firmware 1.0.4 or greater installed, you can do the update using the ESP's "),r("em",[t._v("Over The Air Update")]),t._v(" feature.\nJust connect to its AP WiFi link and browse to: "),r("code",[t._v("http://192.168.4.1/update")]),t._v(".\nYou can then select the firmware file you downloaded above and upload it to the WiFi Module.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("This is the easiest way to update firmware!")])]),t._v(" "),r("h3",{attrs:{id:"flashing-the-esp8266-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-esp8266-firmware"}},[t._v("#")]),t._v(" Flashing the ESP8266 Firmware")]),t._v(" "),r("p",[t._v("Before flashing, make sure you boot the ESP8266 in "),r("em",[t._v("Flash Mode")]),t._v(" as described below.\nIf you cloned the "),r("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavESP8266"),r("OutboundLink")],1),t._v(" repository, you can build and flash the firmware using the provided "),r("a",{attrs:{href:"http://platformio.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlatformIO"),r("OutboundLink")],1),t._v(" tools and environment.\nIf you downloaded the pre-built firmware above, download the "),r("a",{attrs:{href:"https://github.com/espressif/esptool",target:"_blank",rel:"noopener noreferrer"}},[t._v("esptool"),r("OutboundLink")],1),t._v(" utility and use the command line below:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("esptool.py --baud 921600 --port /dev/your_serial_port write_flash 0x00000 firmware_xxxxx.bin\n")])])]),r("p",[t._v("Where:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("firmware_xxxxx.bin")]),t._v(" is the firmware you downloaded above")]),t._v(" "),r("li",[r("strong",[t._v("your_serial_port")]),t._v(" is the name of the serial port where the ESP8266 is connected to ("),r("code",[t._v("/dev/cu.usbmodem")]),t._v(" for example)")])]),t._v(" "),r("h3",{attrs:{id:"wiring-for-flashing-the-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-for-flashing-the-firmware"}},[t._v("#")]),t._v(" Wiring for Flashing the Firmware")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("Most ESP8266 modules support 3.3 volts (only), while some flight controllers (e.g. Pixhawk 4) output at 5V.\nCheck compatibility and step down the voltage if needed.")])]),t._v(" "),r("p",[t._v("There are various methods for setting the ESP8266 into "),r("em",[t._v("Flash Mode")]),t._v(" but not all USB/UART adapters provide all the necessary pins for automatic mode switching.\nIn order to boot the ESP8266 in "),r("em",[t._v("Flash Mode")]),t._v(", the GPIO-0 pin must be set low (GND) and the CH_PD pin must be set high (VCC).\nThis is what my own setup looks like:")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1366),alt:"esp8266 flashing rig"}})]),t._v(" "),r("p",[t._v("I built a cable where RX, TX, VCC, and GND are properly wired directly from the FTDI adapter to the ESP8266.\nFrom the ESP8266, I left two wires connected to GPIO-0 and CH_PD free so I can boot it either normally or in flash mode by connecting them to GND and VCC respectively.")]),t._v(" "),r("h4",{attrs:{id:"esp8266-esp-01-pinout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-esp-01-pinout"}},[t._v("#")]),t._v(" ESP8266 (ESP-01) Pinout")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1367),alt:"esp8266 wifi module pinout"}})]),t._v(" "),r("h4",{attrs:{id:"flashing-diagram-using-an-ftdi-usb-uart-adapter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flashing-diagram-using-an-ftdi-usb-uart-adapter"}},[t._v("#")]),t._v(" Flashing Diagram using an FTDI USB/UART Adapter")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1368),alt:"esp8266 flashing"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);