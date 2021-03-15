(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1329:function(e,t,r){e.exports=r.p+"assets/img/esp8266_flashing_rig.900b6050.jpg"},1330:function(e,t,r){e.exports=r.p+"assets/img/esp8266_pinout.4c1f434c.jpg"},1331:function(e,t,r){e.exports=r.p+"assets/img/esp8266_flashing_ftdi.bc982baa.jpg"},1332:function(e,t,r){e.exports=r.p+"assets/img/pixracer_network_setup_connection_windows.4b6c2413.png"},1333:function(e,t,r){e.exports=r.p+"assets/img/pixracer_network_setup_security_windows.646da5eb.png"},1334:function(e,t,r){e.exports=r.p+"assets/img/wifi_bridge.5e243a79.png"},1814:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"esp8266-wifi-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-wifi-module"}},[e._v("#")]),e._v(" ESP8266 WiFi Module")]),e._v(" "),a("p",[e._v("The ESP8266 is a low-cost and readily available Wi-Fi module with full TCP/IP stack and microcontroller capability.\nIt can be used with any Pixhawk series controller.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("ESP8266 is the "),a("em",[e._v("defacto")]),e._v(" default WiFi module for use with "),a("RouterLink",{attrs:{to:"/en/flight_controller/pixracer.html"}},[e._v("Pixracer")]),e._v(" (and is usually bundled with it).")],1)]),e._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),a("p",[e._v("The module is readily available.\nA few vendors are listed below.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.sparkfun.com/products/13678",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sparkfun"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://us.gearbest.com/boards-shields/pp_009604906563.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GearBeast"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"module-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-setup"}},[e._v("#")]),e._v(" Module Setup")]),e._v(" "),a("p",[e._v("The ESP8266 firmware has these "),a("em",[e._v("factory")]),e._v(" settings:")]),e._v(" "),a("ul",[a("li",[e._v("SSID: PixRacer")]),e._v(" "),a("li",[e._v("Password: pixracer")]),e._v(" "),a("li",[e._v("WiFi Channel: 11")]),e._v(" "),a("li",[e._v("UART speed 921600")])]),e._v(" "),a("h3",{attrs:{id:"build-from-sources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-from-sources"}},[e._v("#")]),e._v(" Build From Sources")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[e._v("firmware repository"),a("OutboundLink")],1),e._v(" contains instructions and all the tools needed for building and flashing the firmware.")]),e._v(" "),a("h3",{attrs:{id:"pre-built-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-built-binaries"}},[e._v("#")]),e._v(" Pre Built Binaries")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.grubba.com/mavesp8266/firmware-1.2.2.bin",target:"_blank",rel:"noopener noreferrer"}},[e._v("MavLink ESP8266 Firmware V 1.2.2"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"updating-the-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-firmware"}},[e._v("#")]),e._v(" Updating the Firmware")]),e._v(" "),a("p",[e._v("If you have firmware 1.0.4 or greater installed, you can do the update using the ESP's "),a("em",[e._v("Over The Air Update")]),e._v(" feature.\nJust connect to its AP WiFi link and browse to: "),a("code",[e._v("http://192.168.4.1/update")]),e._v(".\nYou can then select the firmware file you downloaded above and upload it to the WiFi Module.")]),e._v(" "),a("h3",{attrs:{id:"flashing-the-esp8266-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-esp8266-firmware"}},[e._v("#")]),e._v(" Flashing the ESP8266 Firmware")]),e._v(" "),a("p",[e._v("Before flashing, make sure you boot the ESP8266 in "),a("em",[e._v("Flash Mode")]),e._v(" as described below.\nIf you cloned the "),a("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[e._v("MavESP8266"),a("OutboundLink")],1),e._v(" repository, you can build and flash the firmware using the provided "),a("a",{attrs:{href:"http://platformio.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("PlatformIO"),a("OutboundLink")],1),e._v(" tools and environment.\nIf you downloaded the pre-built firmware above, download the "),a("a",{attrs:{href:"https://github.com/espressif/esptool",target:"_blank",rel:"noopener noreferrer"}},[e._v("esptool"),a("OutboundLink")],1),e._v(" utility and use the command line below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("esptool.py --baud 921600 --port /dev/your_serial_port write_flash 0x00000 firmware_xxxxx.bin\n")])])]),a("p",[e._v("Where:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("firmware_xxxxx.bin")]),e._v(" is the firmware you downloaded above")]),e._v(" "),a("li",[a("strong",[e._v("your_serial_port")]),e._v(" is the name of the serial port where the ESP8266 is connected to ("),a("code",[e._v("/dev/cu.usbmodem")]),e._v(" for example)")])]),e._v(" "),a("h3",{attrs:{id:"wiring-for-flashing-the-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring-for-flashing-the-firmware"}},[e._v("#")]),e._v(" Wiring for Flashing the Firmware")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("ESP8266 must be powered with 3.3 volts only.")])]),e._v(" "),a("p",[e._v("There are various methods for setting the ESP8266 into "),a("em",[e._v("Flash Mode")]),e._v(" but not all USB/UART adapters provide all the necessary pins for automatic mode switching.\nIn order to boot the ESP8266 in "),a("em",[e._v("Flash Mode")]),e._v(", the GPIO-0 pin must be set low (GND) and the CH_PD pin must be set high (VCC).\nThis is what my own setup looks like:")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1329),alt:"esp8266 flashing rig"}})]),e._v(" "),a("p",[e._v("I built a cable where RX, TX, VCC, and GND are properly wired directly from the FTDI adapter to the ESP8266.\nFrom the ESP8266, I left two wires connected to GPIO-0 and CH_PD free so I can boot it either normally or in flash mode by connecting them to GND and VCC respectively.")]),e._v(" "),a("h3",{attrs:{id:"esp8266-esp-01-pinout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-esp-01-pinout"}},[e._v("#")]),e._v(" ESP8266 (ESP-01) Pinout")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1330),alt:"esp8266 wifi module pinout"}})]),e._v(" "),a("h3",{attrs:{id:"flashing-diagram-using-an-ftdi-usb-uart-adapter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashing-diagram-using-an-ftdi-usb-uart-adapter"}},[e._v("#")]),e._v(" Flashing Diagram using an FTDI USB/UART Adapter")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1331),alt:"esp8266 flashing"}})]),e._v(" "),a("p",[a("span",{attrs:{id:"px4_config"}})]),e._v(" "),a("h2",{attrs:{id:"pixhawk-px4-setup-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-px4-setup-configuration"}},[e._v("#")]),e._v(" Pixhawk/PX4 Setup & Configuration")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If using PX4 1.8.2 (and earlier) you should connect the ESP8266 to TELEM2 and configure the port by "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("setting the parameter")]),e._v(" "),a("code",[e._v("SYS_COMPANION")]),e._v(" to 1921600 (remember to reboot after setting the parameter).\nThe following instructions assume you are using PX4 versions after 1.8.2")],1)]),e._v(" "),a("p",[e._v("Connect your ESP8266 to your Pixhawk-series flight controller (e.g. Pixracer) on any free UART.")]),e._v(" "),a("p",[e._v("Connect the flight controller to your ground station via USB (as WiFi is not yet fully set up).")]),e._v(" "),a("p",[e._v("Using "),a("em",[e._v("QGroundControl")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[e._v("Load recent PX4 firwmare")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[e._v("Configure the serial port")]),e._v(" used to connect the ESP8266.\nRemember to set the baud rate to 921600 in order to match the value set for the ESP8266.")],1)]),e._v(" "),a("p",[e._v("Once the firmware (port) is set up you can remove the physical USB connection between the ground station and the vehicle.")]),e._v(" "),a("h2",{attrs:{id:"connect-via-esp8266-to-qgc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-via-esp8266-to-qgc"}},[e._v("#")]),e._v(" Connect via ESP8266 to QGC")]),e._v(" "),a("p",[e._v("On your wifi-enabled "),a("em",[e._v("QGroundControl")]),e._v(" ground station computer/tablet, find and connect to the open wireless network for your ESP8266.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("By default the ESP8266 network is named "),a("strong",[e._v("PixRacer")]),e._v(" and the default password is "),a("strong",[e._v("pixracer")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("On Windows, the connection settings will look like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1332),alt:"Windows Network Setup: Connection"}})]),e._v(" "),a("p",[a("img",{attrs:{src:r(1333),alt:"Windows Network Setup: Security"}})])])]),e._v(" "),a("p",[e._v("QGC automatically starts its UDP link on boot.\nOnce your computer/tablet is connected to the "),a("strong",[e._v("PixRacer")]),e._v(" WiFi Access Point, it will automatically make the connection.")]),e._v(" "),a("p",[e._v("You should now see HUD movement on your QGC computer via wireless link and be able to view the summary panel for the ESP8266 WiFi Bridge (as shown below).")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1334),alt:"QGC Summary showing Wifi Bridge"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you have any problem connecting, see "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/Support/troubleshooting_qgc.html#waiting_for_connection",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGC Installation/Configuration Problems"),a("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=o.exports}}]);