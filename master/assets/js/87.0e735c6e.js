(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1319:function(t,e,o){t.exports=o.p+"assets/img/alpha_uavlink_back.efdb1715.jpg"},1320:function(t,e,o){t.exports=o.p+"assets/img/alpha_uavlink_front.672c8f87.jpg"},1321:function(t,e,o){t.exports=o.p+"assets/img/doiting_eps_12f_back.620f356a.jpg"},1322:function(t,e,o){t.exports=o.p+"assets/img/doiting_eps_12f_front.b229149a.jpg"},1323:function(t,e,o){t.exports=o.p+"assets/img/pixracer_network_setup_connection_windows.4b6c2413.png"},1324:function(t,e,o){t.exports=o.p+"assets/img/pixracer_network_setup_security_windows.646da5eb.png"},1325:function(t,e,o){t.exports=o.p+"assets/img/wifi_bridge.5e243a79.png"},1326:function(t,e,o){t.exports=o.p+"assets/img/esp8266_flashing_rig.900b6050.jpg"},1327:function(t,e,o){t.exports=o.p+"assets/img/esp8266_pinout.4c1f434c.jpg"},1328:function(t,e,o){t.exports=o.p+"assets/img/esp8266_flashing_ftdi.bc982baa.jpg"},2715:function(t,e,o){"use strict";o.r(e);var a=o(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"esp8266-wifi-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-wifi-模块"}},[t._v("#")]),t._v(" ESP8266 WiFi 模块")]),t._v(" "),a("p",[t._v("The ESP8266 and its clones are low-cost and readily available Wi-Fi modules with full TCP/IP stack and microcontroller capability. They can be used with any Pixhawk series controller.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("ESP8266 is the *defacto* default WiFi module for use with [Pixracer](../flight_controller/pixracer.md) (and is usually bundled with it).")])]),t._v(" "),a("h2",{attrs:{id:"购买地点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#购买地点"}},[t._v("#")]),t._v(" 购买地点")]),t._v(" "),a("p",[t._v("The ESP8266 module is readily available from a number of suppliers. A few vendors are listed below.")]),t._v(" "),a("p",[t._v("Most modules support 3.3 V input (only), while some flight controllers (e.g. Pixhawk 4) output at 5V (you will need to check compatibility and step down the voltage if needed).")]),t._v(" "),a("p",[t._v("Modules that accept 3.3V supply:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.sparkfun.com/products/13678",target:"_blank",rel:"noopener noreferrer"}},[t._v("WRL-17146"),a("OutboundLink")],1),t._v(" (Sparkfun)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://us.gearbest.com/boards-shields/pp_009604906563.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AI Cloud"),a("OutboundLink")],1),t._v(" - discontinued (GearBeast)")])]),t._v(" "),a("p",[t._v("Modules that accept 5.0V supply:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.banggood.com/Wireless-Wifi-to-Uart-Telemetry-Module-With-Antenna-for-Mini-APM-Flight-Controller-p-1065339.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AI Thinker"),a("OutboundLink")],1),t._v(" (Banggood)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.banggood.com/MAVLink-Wifi-Bridge-2_4G-Wireless-Wifi-Telemetry-Module-with-Antenna-for-Pixhawk-APM-Flight-Controller-p-1428590.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlphaUAVLink"),a("OutboundLink")],1),t._v(" (Banggood)")])]),t._v(" "),a("p",[a("span",{attrs:{id:"px4_config"}})]),t._v(" "),a("h2",{attrs:{id:"pixhawk-px4-setup-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-px4-setup-configuration"}},[t._v("#")]),t._v(" Pixhawk/PX4 Setup & Configuration")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("You "),a("em",[t._v("may")]),t._v(" first need to update the radio with PX4-compatible ESP8266 firmware ("),a("a",{attrs:{href:"#esp8266-flashing-firmware-advanced"}},[t._v("see below")]),t._v("). The manufacture instructions should explain if this is needed.")])]),t._v(" "),a("p",[t._v("Connect your ESP8266 to your Pixhawk-series flight controller (e.g. Pixracer) on any free UART.")]),t._v(" "),a("p",[t._v("Connect the flight controller to your ground station via USB (as WiFi is not yet fully set up).")]),t._v(" "),a("p",[t._v("Using "),a("em",[t._v("QGroundControl")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("Load recent PX4 firwmare onto the flight controller")]),t._v(".")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("Configure the serial port")]),t._v(" used to connect the ESP8266. Remember to set the baud rate to 921600 in order to match the value set for the ESP8266.")],1)]),t._v(" "),a("p",[t._v("Once you have configured the flight controller serial port used for connecting to the radio, you can remove the physical USB connection between the ground station and the vehicle.")]),t._v(" "),a("h2",{attrs:{id:"connect-via-esp8266-to-qgc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-via-esp8266-to-qgc"}},[t._v("#")]),t._v(" Connect via ESP8266 to QGC")]),t._v(" "),a("p",[t._v("The module exposes a WiFi hotspot that your ground station computer can use to connect to the vehicle.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The settings for the ESP8266 hotspot should be provided with the board (e.g. typically printed on the reverse side of the board or on the packaging).")]),t._v(" "),a("p",[t._v("A common factory network setting is:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("SSID:")]),t._v(" PixRacer")]),t._v(" "),a("li",[a("strong",[t._v("Password:")]),t._v(" pixracer")]),t._v(" "),a("li",[a("strong",[t._v("WiFi Channel:")]),t._v(" 11")]),t._v(" "),a("li",[a("strong",[t._v("UART speed:")]),t._v(" 921600")])]),t._v(" "),a("p",[t._v("Other modules may use settings like this:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("SSID:")]),t._v(" IFFRC_xxxxxxxx")]),t._v(" "),a("li",[a("strong",[t._v("Password:")]),t._v(" 12345678")]),t._v(" "),a("li",[a("strong",[t._v("IP:")]),t._v(" 192.168.4.1")]),t._v(" "),a("li",[a("strong",[t._v("Port:")]),t._v(" 6789 (TCP)")])]),t._v(" "),a("p",[t._v("Examples of boards from AlphaUILink and DOITING are shown below:")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1319),width:"250px",alt:"AlphaUAVLink - Back"}}),t._v(" "),a("img",{attrs:{src:o(1320),width:"250px",alt:"AlphaUAVLink - Front"}}),t._v(" "),a("img",{attrs:{src:o(1321),width:"250px",alt:"DOITING EPS 12F - Back"}}),t._v(" "),a("img",{attrs:{src:o(1322),width:"250px",alt:"DOITING EPS 12F - Front"}})])]),t._v(" "),a("p",[t._v("On your wifi-enabled "),a("em",[t._v("QGroundControl")]),t._v(" ground station computer/tablet, find and connect to the open wireless network for your ESP8266. On a Windows computer the connection settings for a network with name "),a("strong",[t._v("Pixracer")]),t._v(" and default password "),a("strong",[t._v("pixracer")]),t._v(" point will look like this:")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1323),alt:"Windows Network Setup: Connection"}}),t._v(" "),a("img",{attrs:{src:o(1324),alt:"Windows Network Setup: Security"}})]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(' will automatically connect to the vehicle when the ground station computer is attached to a WiFi access point named "Pixracer".')]),t._v(" "),a("p",[t._v("If you're using a module with any other WiFi name you will need to manually set up the QGroundControl WiFi connection, as shown in the following section.")]),t._v(" "),a("h2",{attrs:{id:"configure-qgc-with-non-standard-wifi-connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-qgc-with-non-standard-wifi-connections"}},[t._v("#")]),t._v(" Configure QGC with non-standard WiFi connections")]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(' will automatically connect to the vehicle when the ground station computer is attached to the "Pixracer" WiFi access point. For any other access point name you will need to manually create a custom comm link:')]),t._v(" "),a("ol",[a("li",[t._v("Go to "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/SettingsView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Application Settings > Comm Links"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Add new connection with appropriate settings.")]),t._v(" "),a("li",[t._v("Select the new connection, and click "),a("strong",[t._v("Connect")]),t._v(".")]),t._v(" "),a("li",[t._v("The vehicle should now connect")])]),t._v(" "),a("h2",{attrs:{id:"verify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify"}},[t._v("#")]),t._v(" Verify")]),t._v(" "),a("p",[t._v("You should now see HUD movement on your QGC computer via wireless link and be able to view the summary panel for the ESP8266 WiFi Bridge (as shown below).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1325),alt:"QGC Summary showing Wifi Bridge"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("If you have any problem connecting, see "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/Support/troubleshooting_qgc.html#waiting_for_connection",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC Installation/Configuration Problems"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"esp8266-flashing-firmware-advanced"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-flashing-firmware-advanced"}},[t._v("#")]),t._v(" ESP8266 Flashing/Firmware (Advanced)")]),t._v(" "),a("p",[t._v("ESP8266 modules from different manufacturers may not have appropriate ESP8266 firmware pre-installed. The instructions below explain how to update radios with the correct version.")]),t._v(" "),a("h3",{attrs:{id:"pre-built-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-built-binaries"}},[t._v("#")]),t._v(" Pre Built Binaries")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.grubba.com/mavesp8266/firmware-1.2.2.bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavLink ESP8266 Firmware V 1.2.2"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"build-from-sources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-from-sources"}},[t._v("#")]),t._v(" Build From Sources")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("firmware repository"),a("OutboundLink")],1),t._v(" contains instructions and all the tools needed for building and flashing the ESP8266 firmware.")]),t._v(" "),a("h3",{attrs:{id:"updating-the-firmware-ota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-firmware-ota"}},[t._v("#")]),t._v(" Updating the Firmware OTA")]),t._v(" "),a("p",[t._v("If you have firmware 1.0.4 or greater installed, you can do the update using the ESP's "),a("em",[t._v("Over The Air Update")]),t._v(" feature. Just connect to its AP WiFi link and browse to: "),a("code",[t._v("http://192.168.4.1/update")]),t._v(". You can then select the firmware file you downloaded above and upload it to the WiFi Module.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This is the easiest way to update firmware!")])]),t._v(" "),a("h3",{attrs:{id:"flashing-the-esp8266-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-esp8266-firmware"}},[t._v("#")]),t._v(" Flashing the ESP8266 Firmware")]),t._v(" "),a("p",[t._v("Before flashing, make sure you boot the ESP8266 in "),a("em",[t._v("Flash Mode")]),t._v(" as described below. If you cloned the "),a("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavESP8266"),a("OutboundLink")],1),t._v(" repository, you can build and flash the firmware using the provided "),a("a",{attrs:{href:"http://platformio.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlatformIO"),a("OutboundLink")],1),t._v(" tools and environment. If you downloaded the pre-built firmware above, download the "),a("a",{attrs:{href:"https://github.com/espressif/esptool",target:"_blank",rel:"noopener noreferrer"}},[t._v("esptool"),a("OutboundLink")],1),t._v(" utility and use the command line below:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("esptool.py --baud 921600 --port /dev/your_serial_port write_flash 0x00000 firmware_xxxxx.bin\n")])])]),a("p",[t._v("Where:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("firmware_xxxxx.bin")]),t._v(" is the firmware you downloaded above")]),t._v(" "),a("li",[a("strong",[t._v("your_serial_port")]),t._v(" is the name of the serial port where the ESP8266 is connected to ("),a("code",[t._v("/dev/cu.usbmodem")]),t._v(" for example)")])]),t._v(" "),a("h3",{attrs:{id:"下载固件接线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载固件接线"}},[t._v("#")]),t._v(" 下载固件接线")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("Most ESP8266 modules support 3.3 volts (only), while some flight controllers (e.g. Pixhawk 4) output at 5V. Check compatibility and step down the voltage if needed.")])]),t._v(" "),a("p",[t._v("There are various methods for setting the ESP8266 into "),a("em",[t._v("Flash Mode")]),t._v(" but not all USB/UART adapters provide all the necessary pins for automatic mode switching. In order to boot the ESP8266 in "),a("em",[t._v("Flash Mode")]),t._v(", the GPIO-0 pin must be set low (GND) and the CH_PD pin must be set high (VCC). This is what my own setup looks like:")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1326),alt:"esp8266 flashing rig"}})]),t._v(" "),a("p",[t._v("I built a cable where RX, TX, VCC, and GND are properly wired directly from the FTDI adapter to the ESP8266. From the ESP8266, I left two wires connected to GPIO-0 and CH_PD free so I can boot it either normally or in flash mode by connecting them to GND and VCC respectively.")]),t._v(" "),a("h4",{attrs:{id:"esp8266-esp-01-pinout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-esp-01-pinout"}},[t._v("#")]),t._v(" ESP8266 (ESP-01) Pinout")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1327),alt:"esp8266 wifi module pinout"}})]),t._v(" "),a("h4",{attrs:{id:"flashing-diagram-using-an-ftdi-usb-uart-adapter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashing-diagram-using-an-ftdi-usb-uart-adapter"}},[t._v("#")]),t._v(" Flashing Diagram using an FTDI USB/UART Adapter")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1328),alt:"esp8266 flashing"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);