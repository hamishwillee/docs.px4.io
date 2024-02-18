(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{3466:function(t,e,s){"use strict";s.r(e);var a=s(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"holybro-pixhawk-rpi-cm4-baseboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pixhawk-rpi-cm4-baseboard"}},[t._v("#")]),t._v(" Holybro Pixhawk RPi CM4 Baseboard")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://holybro.com/products/pixhawk-rpi-cm4-baseboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Pixhawk RPi CM4 Baseboard"),a("OutboundLink")],1),t._v(' is a single-board solution that pre-integrates a (swappable) Pixhawk flight controller with the Raspberry Pi CM4 companion computer ("RPi"). The baseboard has a compact form factor with all the connections needed for development.')]),t._v(" "),a("p",[a("img",{attrs:{src:s(629),alt:"RPi CM4 with Pixhawk"}})]),t._v(" "),a("p",[t._v("The flight controller module is internally connected to RPi CM4 through "),a("code",[t._v("TELEM2")]),t._v(", but may alternatively be connected using Ethernet with the provided external cable.")]),t._v(" "),a("p",[t._v("This baseboard is plug-in compatible with "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk5x.html"}},[t._v("Holybro Pixhawk 5X")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6x.html"}},[t._v("Holybro Pixhawk 6X")]),t._v(", and any other Pixhawk controller that follows the "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-010%20Pixhawk%20Autopilot%20Bus%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot Bus Standard"),a("OutboundLink")],1),t._v(" guidelines for mechanical compatibility across vendors.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The board follows the "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-010%20Pixhawk%20Autopilot%20Bus%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot Bus Standard"),a("OutboundLink")],1),t._v(' (including the guidelines for "mechanical compatibility across vendors").')])]),t._v(" "),a("h2",{attrs:{id:"purchase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[t._v("#")]),t._v(" Purchase")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://holybro.com/products/pixhawk-rpi-cm4-baseboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Pixhawk RPi CM4 Baseboard"),a("OutboundLink")],1),t._v(" (www.holybro.com)")]),t._v(" "),a("p",[t._v("The baseboard can be purchased with or without an RPi CM4 and/or flight controller:")]),t._v(" "),a("ul",[a("li",[t._v("The Raspberry Pi CM4 (CM4008032) supplied by Holybro has the following specification:\n"),a("ul",[a("li",[t._v("RAM: 8GB")]),t._v(" "),a("li",[t._v("eMMC: 32GB")]),t._v(" "),a("li",[t._v("Wireless: No")])])]),t._v(" "),a("li",[t._v("The recommended minimum specification for the RPi CM4 is:\n"),a("ul",[a("li",[t._v("RAM: 4GB (or 8GB)")]),t._v(" "),a("li",[t._v("eMMC: 16GB")]),t._v(" "),a("li",[t._v("Wireless: Yes")])])])])])]),t._v(" "),a("h2",{attrs:{id:"connections-ports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connections-ports"}},[t._v("#")]),t._v(" Connections & Ports")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://docs.holybro.com/autopilot/pixhawk-baseboards/pixhawk-rpi-cm4-baseboard/connections-and-ports",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Documentation"),a("OutboundLink")],1),t._v(' has more detailed (and possibly more "up to date") port and connection information.')])]),t._v(" "),a("p",[t._v("The diagram below shows all the connectors and ports on the baseboard.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(630),alt:"Schematic diagram"}})]),t._v(" "),a("h3",{attrs:{id:"rpi-cm4-fc-serial-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpi-cm4-fc-serial-connection"}},[t._v("#")]),t._v(" RPi CM4 & FC Serial Connection")]),t._v(" "),a("p",[t._v("The flight controller "),a("code",[t._v("TELEM2")]),t._v(" port is internally connected to RPi CM4 as shown:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("RPi CM4")]),t._v(" "),a("th",[t._v("FC TELEM2 (FMU)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("GPIO14")]),t._v(" "),a("td",[t._v("TXD")])]),t._v(" "),a("tr",[a("td",[t._v("GPIO15")]),t._v(" "),a("td",[t._v("RXD")])]),t._v(" "),a("tr",[a("td",[t._v("GPIO16")]),t._v(" "),a("td",[t._v("CTS")])]),t._v(" "),a("tr",[a("td",[t._v("GPIO17")]),t._v(" "),a("td",[t._v("RTS")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The connection must be also be "),a("a",{attrs:{href:"#configure-px4-to-cm4-mavlink-serial-connection"}},[t._v("configured in both RPi and PX4")]),t._v(" (unless "),a("a",{attrs:{href:"#ethernet-connection-optional"}},[t._v("Ethernet")]),t._v(" is used instead).")])]),t._v(" "),a("h2",{attrs:{id:"installing-the-flight-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-flight-controller"}},[t._v("#")]),t._v(" Installing the Flight Controller")]),t._v(" "),a("p",[t._v("A plug-compatible flight controller such as "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk5x.html"}},[t._v("Holybro Pixhawk 5X")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6x.html"}},[t._v("Holybro Pixhawk 6X")]),t._v(" can simply be pushed into the module slot.")],1),t._v(" "),a("p",[t._v("Flight controllers that have a different form factor will need additional wiring.")]),t._v(" "),a("h2",{attrs:{id:"installing-the-rpi-cm4-companion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-rpi-cm4-companion"}},[t._v("#")]),t._v(" Installing the RPi CM4 Companion")]),t._v(" "),a("p",[t._v("This section shows how to install/attach a Raspberry Pi CM4 to the baseboard.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(631),alt:"Image showing separate baseboard, baseboard cover, RPi, Flight controller, screws"}})]),t._v(" "),a("p",[t._v("To install the Raspberry Pi CM4 companion computer:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Disconnect the "),a("code",[t._v("FAN")]),t._v(" wiring.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(632),alt:"HB_Pixhawk_CM4_Fan"}})])]),t._v(" "),a("li",[a("p",[t._v("Remove these 4 screws on the back side of the baseboard.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(633),alt:"Bottom of the board showing screws in corners holding the cover"}})])]),t._v(" "),a("li",[a("p",[t._v("Remove the baseboard case, install the CM4, and use the 4 screws to attach it (as shown):")]),t._v(" "),a("p",[a("img",{attrs:{src:s(634),alt:"HB_Pixhawk_CM4_Screws"}})])]),t._v(" "),a("li",[a("p",[t._v("Reattach the cover.")])])]),t._v(" "),a("h2",{attrs:{id:"power-module-wiring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power-module-wiring"}},[t._v("#")]),t._v(" Power Module Wiring")]),t._v(" "),a("p",[t._v("The PM03D power module is supplied with the board.")]),t._v(" "),a("p",[t._v("The RPi CM4 and flight controller must be powered separately:")]),t._v(" "),a("ul",[a("li",[t._v("The flight controller is powered via the CLIK-Mate cable to "),a("code",[t._v("POWER1")]),t._v(" or "),a("code",[t._v("POWER2")]),t._v(" port")]),t._v(" "),a("li",[t._v("The RPi CM4 is powered by the "),a("code",[t._v("USB C")]),t._v(" (CM4 Slave) connection. You can also use your own power supply to power the RPi CM4 baseboard.")])]),t._v(" "),a("p",[t._v("The image below shows the wiring in greater detail.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(635),alt:"Image showing writing from the PM03D power module to the baseboard"}})]),t._v(" "),a("h2",{attrs:{id:"flashing-the-rpi-cm4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-rpi-cm4"}},[t._v("#")]),t._v(" Flashing the RPi CM4")]),t._v(" "),a("p",[t._v('This section explains how you install your preferred Linux distro, such as "Raspberry Pi OS 64bit" onto the RPi EMCC.')]),t._v(" "),a("p",[t._v("Notes:")]),t._v(" "),a("ul",[a("li",[t._v("If you are using PX4, you will need to use PX4 version 1.13.1 or newer for PX4 to recognize this baseboard.")]),t._v(" "),a("li",[t._v("The fan does not indicate if the RPi CM4 is powered/running or not.")]),t._v(" "),a("li",[t._v("The power module plugged into Power1/2 does not power the RPi part. You can use the additional USB-C Cable from the PM03D power module to the CM4 Slave USB-C port.")]),t._v(" "),a("li",[t._v("The Micro-HDMI port is an output port.")]),t._v(" "),a("li",[t._v("RPi CM4 boards that do not have Wifi device will not connect automatically. In this case you will need to plug it into a router or plug a compatible Wifi dongle into the CM4 Host ports.")])]),t._v(" "),a("h3",{attrs:{id:"flash-emmc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flash-emmc"}},[t._v("#")]),t._v(" Flash EMMC")]),t._v(" "),a("p",[t._v("To flash a RPi image onto EMMC.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Switch Dip-Switch to "),a("code",[t._v("RPI")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:s(636),alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("Connect computer to USB-C "),a("em",[t._v("CM4 Slave")]),t._v(" port used to power & flash the RPi.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(637),alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("Get "),a("code",[t._v("usbboot")]),t._v(", build it and run it.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libusb-1.0-0-dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://github.com/raspberrypi/usbboot,\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" usbboot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./rpiboot\n")])])])]),t._v(" "),a("li",[a("p",[t._v("You can now install your preferred Linux distro using The "),a("code",[t._v("rpi-imager")]),t._v(". Make sure you add WiFi and SSH settings (hidden behind the gear/advanced symbol).")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" rpi-imager\nrpi-imager\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Once done, unplugging USB-C CM4 Slave (this will unmount the volumes, and power off the CM4).")])]),t._v(" "),a("li",[a("p",[t._v("Switch Dip-Switch back to "),a("code",[t._v("EMMC")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Power on CM4 by providing power to USB-C CM4 Slave port.")])]),t._v(" "),a("li",[a("p",[t._v("To check if it's booting/working you can either:")]),t._v(" "),a("ul",[a("li",[t._v("Check there is HDMI output")]),t._v(" "),a("li",[t._v("Connect via SSH (if set up in rpi-imager, and WiFi is available).")])])])]),t._v(" "),a("h2",{attrs:{id:"configure-px4-to-cm4-mavlink-serial-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-px4-to-cm4-mavlink-serial-connection"}},[t._v("#")]),t._v(" Configure PX4 to CM4 MAVLink Serial Connection")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("If you are using "),a("a",{attrs:{href:"#ethernet-connection-optional"}},[t._v("Ethernet")]),t._v(" to connect the FC and RPi, this setup is not needed.")])]),t._v(" "),a("p",[t._v("The Pixhawk FC module is "),a("a",{attrs:{href:"#rpi-cm4-fc-serial-connection"}},[t._v("internally connected to the RPi CM4")]),t._v(" using "),a("code",[t._v("TELEM2")]),t._v(" ("),a("code",[t._v("/dev/ttyS4")]),t._v("). The FC and RPi CM4 must both be configured to communicate over this port.")]),t._v(" "),a("h3",{attrs:{id:"fc-serial-port-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fc-serial-port-setup"}},[t._v("#")]),t._v(" FC Serial Port Setup")]),t._v(" "),a("p",[t._v("The FC should be set up to connect to the "),a("code",[t._v("TELEM2")]),t._v(" port correctly by default. If not, you can configure the port using the parameters as shown.")]),t._v(" "),a("p",[t._v("To enable this MAVLink instance on the FC:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Connect a computer running QGroundControl via USB Type C port on the baseboard labeled "),a("code",[t._v("FC")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(638),alt:"Image of baseboard showing FC USB-C connector"}})])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("Set the parameters")]),t._v(":")],1),t._v(" "),a("ul",[a("li",[a("code",[t._v("MAV_1_CONFIG")]),t._v(" = "),a("code",[t._v("102")])]),t._v(" "),a("li",[a("code",[t._v("MAV_1_MODE = 2")])]),t._v(" "),a("li",[a("code",[t._v("SER_TEL2_BAUD")]),t._v(" = "),a("code",[t._v("921600")])])])]),t._v(" "),a("li",[a("p",[t._v("Reboot the FC.")])])]),t._v(" "),a("h3",{attrs:{id:"rpi-serial-port-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpi-serial-port-setup"}},[t._v("#")]),t._v(" RPi Serial Port Setup")]),t._v(" "),a("p",[t._v("On the RPi side:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Connect to the RPi (using WiFi, a router, or a Wifi Dongle).")])]),t._v(" "),a("li",[a("p",[t._v("Enable the RPi serial port by running "),a("code",[t._v("RPi-config")])]),t._v(" "),a("ul",[a("li",[t._v("Go to "),a("code",[t._v("3 Interface Options")]),t._v(", then "),a("code",[t._v("I6 Serial Port")]),t._v(". Then choose:\n"),a("ul",[a("li",[a("code",[t._v("login shell accessible over serial → No")])]),t._v(" "),a("li",[a("code",[t._v("serial port hardware enabled")]),t._v(" → "),a("code",[t._v("Yes")])])])])])]),t._v(" "),a("li",[a("p",[t._v("Finish, and reboot. (This will add "),a("code",[t._v("enable_uart=1")]),t._v(" to "),a("code",[t._v("/boot/config.txt")]),t._v(", and remove "),a("code",[t._v("console=serial0,115200")]),t._v(" from "),a("code",[t._v("/boot/cmdline.txt")])])]),t._v(" "),a("li",[a("p",[t._v("Now MAVLink traffic should be available on "),a("code",[t._v("/dev/serial0")]),t._v(" at a baudrate of 921600.")])])]),t._v(" "),a("h2",{attrs:{id:"try-out-mavsdk-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#try-out-mavsdk-python"}},[t._v("#")]),t._v(" Try out MAVSDK-Python")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Make sure the CM4 is connected to the internet, e.g. using a wifi, or ethernet.")])]),t._v(" "),a("li",[a("p",[t._v("Install MAVSDK Python:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("python3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mavsdk\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Copy an example from the "),a("a",{attrs:{href:"https://github.com/mavlink/MAVSDK-Python/tree/main/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK-Python examples"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Change the "),a("code",[t._v('system_address="udp://:14540"')]),t._v(" to "),a("code",[t._v('system_address="serial:///dev/serial0:921600"')])])]),t._v(" "),a("li",[a("p",[t._v("Try out the example. Permission for the serial port should already be available through the "),a("code",[t._v("dialout")]),t._v(" group.")])])]),t._v(" "),a("h2",{attrs:{id:"ethernet-connection-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethernet-connection-optional"}},[t._v("#")]),t._v(" Ethernet Connection (Optional)")]),t._v(" "),a("p",[t._v("The flight controller module is "),a("a",{attrs:{href:"#rpi-cm4-fc-serial-connection"}},[t._v("internally connected to RPi CM4")]),t._v(" from "),a("code",[t._v("TELEM2")]),t._v(" (Serial).")]),t._v(" "),a("p",[t._v("You can also set up a local Ethernet connection between them using the supplied cable. Ethernet connectivity provides a fast, reliable, and flexible communication alternative to using USB or other serial connections.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("For more general information see: "),a("RouterLink",{attrs:{to:"/zh/advanced_config/ethernet_setup.html"}},[t._v("PX4 Ethernet Setup")]),t._v(".")],1)]),t._v(" "),a("h3",{attrs:{id:"connect-the-cable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-the-cable"}},[t._v("#")]),t._v(" Connect the Cable")]),t._v(" "),a("p",[t._v("To set up a local ethernet connection between CM4 and the flight computer, the two ethernet ports need to be connected using the provided 8 pin to 4 pin connector.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(639),alt:"HB_Pixhawk_CM4_Ethernet_Cable"}})]),t._v(" "),a("p",[t._v("The pinout of the cable is:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("CM4 Eth 8 Pin")]),t._v(" "),a("th",[t._v("FC ETH 4 Pin")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("A")]),t._v(" "),a("td",[t._v("B")])]),t._v(" "),a("tr",[a("td",[t._v("B")]),t._v(" "),a("td",[t._v("A")])]),t._v(" "),a("tr",[a("td",[t._v("C")]),t._v(" "),a("td",[t._v("D")])]),t._v(" "),a("tr",[a("td",[t._v("D")]),t._v(" "),a("td",[t._v("C")])]),t._v(" "),a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("N/A")])])])]),t._v(" "),a("h3",{attrs:{id:"ip-setup-on-cm4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip-setup-on-cm4"}},[t._v("#")]),t._v(" IP Setup on CM4")]),t._v(" "),a("p",[t._v("Since there is no DHCP server active in this configuration, the IP addresses have to be set manually:")]),t._v(" "),a("p",[t._v("First, connect to the CM4 via SSH by connecting to the CM4’s WiFi (or use a Wifi dongle). Once the ethernet cables are plugged in, the "),a("code",[t._v("eth0")]),t._v(" network interface seems to switch from DOWN to UP.")]),t._v(" "),a("p",[t._v("You can check the status using:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" address show eth0\n")])])]),a("p",[t._v("You can also try to enable it manually:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" dev eth0 up\n")])])]),a("p",[t._v("It then seems to automatically set a link-local address, for this example it looks like this:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" address show eth0\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": eth0: "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BROADCAST,MULTICAST,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),t._v(" qdisc mq state UP group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    link/ether xx:xx:xx:xx:xx:xx brd ff:ff:ff:ff:ff:ff\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183/16 brd "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".255.255 scope global noprefixroute eth0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::yyyy:yyyy:yyyy:yyyy/64 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v("\n       valid_lft forever preferred_lft forever\n")])])]),a("p",[t._v("This means the CM4's ethernet IP is 169.254.21.183.")]),t._v(" "),a("h4",{attrs:{id:"ip-setup-on-fc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip-setup-on-fc"}},[t._v("#")]),t._v(" IP Setup on FC")]),t._v(" "),a("p",[t._v("Now connect to the NuttX shell (using a console, or the MAVLink shell), and check the status of the link:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\n\neth0    Link encap:Ethernet HWaddr xx:xx:xx:xx:xx:xx at DOWN\n        inet addr:0.0.0.0 DRaddr:192.168.0.254 Mask:255.255.255.0\n")])])]),a("p",[t._v("For this example, it is DOWN at first.")]),t._v(" "),a("p",[t._v("To set it to UP:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifup")]),t._v(" eth0\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifup")]),t._v(" eth0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".OK\n")])])]),a("p",[t._v("Now check the config again:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\n\neth0    Link encap:Ethernet HWaddr xx:xx:xx:xx:xx:xx at UP\n        inet addr:0.0.0.0 DRaddr:192.168.0.254 Mask:255.255.255.0\n")])])]),a("p",[t._v("However, it doesn’t have an IP yet. Set one that is similar to the one on the RPi CM4:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" eth0 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.184\n")])])]),a("p",[t._v("Then check it:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\n\neth0    Link encap:Ethernet HWaddr xx:xx:xx:xx:xx:xx at UP\n        inet addr:169.254.21.184 DRaddr:169.254.21.1 Mask:255.255.255.0\n")])])]),a("p",[t._v("Now the devices should be able to ping each other.")]),t._v(" "),a("p",[t._v("Note that this configuration is ephemeral and will be lost after a reboot, so we’ll need to find a way to configure it statically.")]),t._v(" "),a("h4",{attrs:{id:"ping-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ping-test"}},[t._v("#")]),t._v(" Ping Test")]),t._v(" "),a("p",[t._v("First from the CM4:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.184\n\nPING "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.184 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.184"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" bytes of data.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.184: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.188")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.184: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.131")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.184: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.190")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.184: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.112")]),t._v(" ms\n^C\n--- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.184 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" statistics ---\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" packets transmitted, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" received, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("% packet loss, "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" 3077ms\nrtt min/avg/max/mdev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.112")]),t._v("/0.155/0.190/0.034 ms\n")])])]),a("p",[t._v("Then from the flight controller in NuttShell:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183\n\nPING "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes of data\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" packets transmitted, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" received, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("% packet loss, "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10010")]),t._v(" ms\n")])])]),a("h4",{attrs:{id:"mavlink-mavsdk-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-mavsdk-test"}},[t._v("#")]),t._v(" MAVLink/MAVSDK Test")]),t._v(" "),a("p",[t._v("For this, we need to set the MAVLink instance to send traffic to the CM4's IP address:")]),t._v(" "),a("p",[t._v("For an initial test we can do:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("mavlink start -o "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14540")]),t._v(" -t "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".21.183\n")])])]),a("p",[t._v("This will send MAVLink traffic on UDP to port 14540 (the MAVSDK/MAVROS port) to that IP which means MAVSDK can just listen to any UDP arriving at that default port.")]),t._v(" "),a("p",[t._v("To run a MAVSDK example, install mavsdk via pip, and try out an example from "),a("a",{attrs:{href:"https://github.com/mavlink/MAVSDK-Python/tree/main/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK-Python/examples"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("For instance:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("python3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mavsdk\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/mavlink/MAVSDK-Python/main/examples/tune.py\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x tune.py\n./tune.py\n")])])]),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://px4.io/get-the-pixhawk-raspberry-pi-cm4-baseboard-by-holybro-talking-with-px4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get The Pixhawk Raspberry Pi CM4 Baseboard By Holybro Talking With PX4"),a("OutboundLink")],1),t._v(" (px4.io blog):\n"),a("ul",[a("li",[t._v("Tutorial showing how to connect Pixhawk 6X + Raspberry Pi on CM4 baseboard via wired Ethernet.")])])])])])}),[],!1,null,null,null);e.default=r.exports},629:function(t,e,s){t.exports=s.p+"assets/img/baseboard_hero.240da8bf.jpg"},630:function(t,e,s){t.exports=s.p+"assets/img/baseboard_ports.978d4c00.jpg"},631:function(t,e,s){t.exports=s.p+"assets/img/baseboard_disassembled.8a30a063.jpg"},632:function(t,e,s){t.exports=s.p+"assets/img/baseboard_fan.a7079262.jpg"},633:function(t,e,s){t.exports=s.p+"assets/img/baseboard_bottom.84f25772.jpg"},634:function(t,e,s){t.exports=s.p+"assets/img/baseboard_screws.3661b92b.jpg"},635:function(t,e,s){t.exports=s.p+"assets/img/baseboard_wiring_guide.d76203c6.jpg"},636:function(t,e,s){t.exports=s.p+"assets/img/cm4_dip_switch.47ec399c.png"},637:function(t,e,s){t.exports=s.p+"assets/img/cm4_usbc_slave_port.9d93e157.png"},638:function(t,e,s){t.exports=s.p+"assets/img/baseboard_fc_usb_c.856e2d60.jpg"},639:function(t,e,s){t.exports=s.p+"assets/img/baseboard_ethernet_cable.2c9a3570.png"}}]);