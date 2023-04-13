(window.webpackJsonp=window.webpackJsonp||[]).push([[594],{3164:function(t,e,a){"use strict";a.r(e);var o=a(19),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"raspberry-pi-companion-with-pixhawk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-companion-with-pixhawk"}},[t._v("#")]),t._v(" Raspberry Pi Companion with Pixhawk")]),t._v(" "),o("p",[t._v('This topic describes how to setup a Raspberry Pi ("RPi") companion companion running ROS2 on Linux Ubuntu OS, connecting to a '),o("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("Pixhawk")]),t._v(" flight controller using a serial connection between the Pixhawk "),o("code",[t._v("TELEM2")]),t._v(" port and the RPi's TX/RX pins.")],1),t._v(" "),o("p",[t._v("These instructions should be readily extensible to other RPi and flight controller configurations.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("Other common ways to connect RaPi and Pixhawk are:")]),t._v(" "),o("ul",[o("li",[t._v("Ethernet connection between RPi and Pixhawk. Pixhawk controllers based on FMUv5x, FMUv6x and later may have an inbuilt Ethernet port. See "),o("RouterLink",{attrs:{to:"/zh/advanced_config/ethernet_setup.html#supported-flight-controllers"}},[t._v("PX4 Ethernet > Supported Controllers")]),t._v(".")],1),t._v(" "),o("li",[t._v("Serial connection to the RPi USB port. This is simple and reliable, but requires an additional FTDI Chip USB-to-serial adapter board. This option is covered in "),o("RouterLink",{attrs:{to:"/zh/companion_computer/pixhawk_companion.html#serial-port-setup"}},[t._v("Pixhawk Companion > Serial Port Setup")]),t._v(".")],1)])]),t._v(" "),o("h2",{attrs:{id:"wiring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[t._v("#")]),t._v(" Wiring")]),t._v(" "),o("h3",{attrs:{id:"serial-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#serial-connection"}},[t._v("#")]),t._v(" Serial connection")]),t._v(" "),o("p",[t._v("First wire up the serial connection between the RPi and PX4 that is to be used for offboard control.")]),t._v(" "),o("p",[t._v("This setup connects the Pixhawk "),o("code",[t._v("TELEM2")]),t._v(" port, which is generally recommended for offboard control. It is initially configured in PX4 to use with MAVLink, which we will change later when setting up ROS 2. Pixhawk ports can be located anywhere on the flight controller, but are almost always well labeled, and should be obvious on your particular "),o("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[t._v("flight controller")]),t._v(".")],1),t._v(" "),o("p",[t._v("Connect the Pixhawk "),o("code",[t._v("TELEM2")]),t._v(" "),o("code",[t._v("TX")]),t._v("/"),o("code",[t._v("RX")]),t._v("/"),o("code",[t._v("GND")]),t._v(" pins to the complementary "),o("code",[t._v("RXD")]),t._v("/"),o("code",[t._v("TXD")]),t._v("/"),o("code",[t._v("Ground")]),t._v(" pins on the RPi GPIO board:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("PX4 TELEM2 Pin")]),t._v(" "),o("th",[t._v("RPi GPIO Pin")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("UART5_TX (2)")]),t._v(" "),o("td",[t._v("RXD (GPIO 15 - pin 10)")])]),t._v(" "),o("tr",[o("td",[t._v("UART5_RX (3)")]),t._v(" "),o("td",[t._v("TXD (GPIO 14 - pin 8)")])]),t._v(" "),o("tr",[o("td",[t._v("GND (6)")]),t._v(" "),o("td",[t._v("Ground (pin 6)")])])])]),t._v(" "),o("p",[t._v("The diagram shows Pixhawk "),o("code",[t._v("TELEM2")]),t._v(" port pins on the left and RPi GPIO board pins on the right. The pins on the "),o("code",[t._v("TELEM2")]),t._v(" port are normally numbered right-to-left as shown.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[o("code",[t._v("TELEM2")])]),t._v(" "),o("th",[t._v("RPi GPIO")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("img",{attrs:{src:a(618),alt:"Pin numbering showing left-most pin is pin 1"}})]),t._v(" "),o("td",[o("img",{attrs:{src:a(619),alt:""}})])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("Almost all recent Pixhawk boards, such as the Pixhawk-6C, use the same connectors and pin numbers for correpsponding ports, as defined in the Pixhawk Connector Standard. You can check the specific board documentation to confirm the pin layout.")]),t._v(" "),o("p",[t._v("The standard "),o("code",[t._v("TELEM2")]),t._v(" pin assignments are shown below.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Pins")]),t._v(" "),o("th",[t._v("Signal")]),t._v(" "),o("th",[t._v("Voltage")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1 (Red)")]),t._v(" "),o("td",[t._v("VCC")]),t._v(" "),o("td",[t._v("+5V")])]),t._v(" "),o("tr",[o("td",[t._v("2 (Black)")]),t._v(" "),o("td",[t._v("UART5_TX (out)")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("3 (Black)")]),t._v(" "),o("td",[t._v("UART5_RX (in)")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("4 (Black)")]),t._v(" "),o("td",[t._v("UART5_CTS (in)")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("5 (Black)")]),t._v(" "),o("td",[t._v("UART5_RTS (out)")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("6 (Black)")]),t._v(" "),o("td",[t._v("GND")]),t._v(" "),o("td",[t._v("GND")])])])])]),t._v(" "),o("h3",{attrs:{id:"telem1-telemetry-radio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telem1-telemetry-radio"}},[t._v("#")]),t._v(" TELEM1/Telemetry Radio")]),t._v(" "),o("p",[t._v("The Pixhawk "),o("code",[t._v("TELEM1")]),t._v(" port is preconfigured for connecting to a GCS via MAVLink over a telemetry radio.")]),t._v(" "),o("p",[t._v("You can plug an "),o("RouterLink",{attrs:{to:"/zh/telemetry/"}},[t._v("appropriate radio")]),t._v(" into the Pixhawk "),o("code",[t._v("TELEM1")]),t._v(" port and in most cases it should just work. Generally the other radio needs to be connected to the ground station USB port. If you have any issues, check the radio documentation.")],1),t._v(" "),o("h3",{attrs:{id:"power-supply"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#power-supply"}},[t._v("#")]),t._v(" Power Supply")]),t._v(" "),o("p",[t._v("Pixhawk boards usually require a reliable 5V DC supply, which is commonly supplied from LiPO batteries via a "),o("RouterLink",{attrs:{to:"/zh/power_module/"}},[t._v("Power Module and/or Power Distribution board")]),t._v(" to a port labeled "),o("code",[t._v("POWER")]),t._v(" (or similar).")],1),t._v(" "),o("p",[t._v("The instructions for your flight controller will normally explain the recommended setup. For example:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6c.html#voltage-ratings"}},[t._v("Holybro Pixhawk 6C > Voltage Ratings")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixhawk6c.html#power"}},[t._v("Holybro Pixhawk 6C Wiring Quick Start > Power")])],1)]),t._v(" "),o("p",[t._v("Pixhawk controllers can supply power to a "),o("em",[t._v("small")]),t._v(" number of low-power peripherals, such as GPS modules and low-range telemetry radios. The RPi companion computer, servos, high power radios, and other peripherals require a separate power supply, which is usually from a battery elimination circuit (BEC) wired to the same or another battery. Some power modules have a separate BEC included.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("Overloading your Pixhawk is a good way to destroy it.")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("During PX4 setup and configuration the USB connection with your ground station laptop is suffient to power the Pixhawk board, and your companion computer might be powered from a desktop charger.")])]),t._v(" "),o("h2",{attrs:{id:"px4-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-setup"}},[t._v("#")]),t._v(" PX4 Setup")]),t._v(" "),o("p",[t._v("These instructions rely on PX4 code to support ROS2 that isn't yet in a release build (arrives in PX4 v1.14). You will therefore need to install a build off the current PX4-Autopilot "),o("code",[t._v("main")]),t._v(" branch.")]),t._v(" "),o("p",[t._v("Connect the Pixhawk to your laptop/desktop via the "),o("code",[t._v("USB")]),t._v(' port and use QGroundControl to update the firmware to the "Master" version as described in '),o("RouterLink",{attrs:{to:"/zh/config/firmware.html#installing-px4-master-beta-or-custom-firmware"}},[t._v("Firmware > Installing PX4 Master, Beta or Custom Firmware")]),t._v(".")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("You can alternatively "),o("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[t._v("setup a development environment")]),t._v(", "),o("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#building-for-nuttx"}},[t._v("build")]),t._v(" and "),o("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#uploading-firmware-flashing-the-board"}},[t._v("upload")]),t._v(" the firmware manually.")],1)]),t._v(" "),o("h2",{attrs:{id:"ubuntu-setup-on-rpi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-setup-on-rpi"}},[t._v("#")]),t._v(" Ubuntu Setup on RPi")]),t._v(" "),o("p",[t._v('The following steps show how to install and setup Ubuntu 22.04 on the RPi. Note that ROS 2 versions target particular Ubuntu versions. We\'re using Ubuntu 22.04 to match ROS 2 "Humble", so if you\'re working with ROS 2 "Foxy" you would instead install Ubuntu 20.04.')]),t._v(" "),o("p",[t._v("First install Ubuntu onto the RPi:")]),t._v(" "),o("ol",[o("li",[t._v("Prepare a Ubuntu 22.04 bootable Ubuntu Desktop SD card by following the official tutorial: "),o("a",{attrs:{href:"https://ubuntu.com/tutorials/how-to-install-ubuntu-desktop-on-raspberry-pi-4#1-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to install Ubuntu Desktop on Raspberry Pi 4"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Connect the mouse, keyboard, monitor and connect the RPi to a 5V Power Supply (external source/charger).")]),t._v(" "),o("li",[t._v("Insert the SD card into the RPi and turn on the RPi to boot from the SD card.")]),t._v(" "),o("li",[t._v("Follow the on-screen instructions to install Ubuntu.")])]),t._v(" "),o("p",[t._v("Enter the following commands (in sequence) a terminal to configure Ubuntu for RPi:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Install "),o("code",[t._v("raspi-config")]),t._v(":")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("sudo apt update\nsudo apt upgrade\nsudo apt-get install raspi-config \n")])])])]),t._v(" "),o("li",[o("p",[t._v("Open "),o("code",[t._v("raspi-config")]),t._v(":")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("sudo raspi-config\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Go to the "),o("strong",[t._v("Interface Option")]),t._v(" and then click "),o("strong",[t._v("Serial Port")]),t._v(".")]),t._v(" "),o("ul",[o("li",[t._v("Select "),o("strong",[t._v("No")]),t._v(" to disable serial login shell.")]),t._v(" "),o("li",[t._v("Select "),o("strong",[t._v("Yes")]),t._v(" to enable the serial interface.")]),t._v(" "),o("li",[t._v("Click "),o("strong",[t._v("Finish")]),t._v(" and restart the RPi.")])])]),t._v(" "),o("li",[o("p",[t._v("Open the firmware boot configuration file in the "),o("code",[t._v("nano")]),t._v(" editor on RaPi:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /boot/firmware/config.txt\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Append the following text to the end of the file (after the last line):")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("enable_uart")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dtoverlay")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("disable-bt\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Then save the file and restart the RPi.")]),t._v(" "),o("ul",[o("li",[t._v("In "),o("code",[t._v("nano")]),t._v(" you can save the file using the following sequence of keyboard shortcuts: "),o("strong",[t._v("ctrl+x")]),t._v(", "),o("strong",[t._v("ctrl+y")]),t._v(", "),o("strong",[t._v("Enter")]),t._v(".")])])]),t._v(" "),o("li",[o("p",[t._v("Check that the serial port is available. In this case we use the following terminal commands to list the serial devices:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /dev/ttyAMA0\n")])])]),o("p",[t._v("The result of the command should include the RX/TX connection "),o("code",[t._v("/dev/ttyAMA0")]),t._v(" (note that this serial port is also available as "),o("code",[t._v("/dev/serial0")]),t._v(").")])])]),t._v(" "),o("p",[t._v("The RPi is now setup to work with RPi and communicate using the "),o("code",[t._v("/dev/ttyAMA0")]),t._v(" serial port. Note that we'll install more software in the following sections to work with MAVLink and ROS 2.")]),t._v(" "),o("h2",{attrs:{id:"mavlink-communication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-communication"}},[t._v("#")]),t._v(" MAVLink Communication")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),o("OutboundLink")],1),t._v(" is the default and stable communication interface for working with PX4. MAVLink applications running on the companion computer can connect to the "),o("code",[t._v("/dev/ttyAMA0")]),t._v(" serial port you just set up on the RPi and should automatically (by default) connect to "),o("code",[t._v("TELEM 2")]),t._v(" on the Pixhawk.")]),t._v(" "),o("p",[t._v("PX4 recommends "),o("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),o("OutboundLink")],1),t._v(" for writing MAVLink companion computer applications, as it provides simple APIs for using many common MAVLink services in many different programming languages. You can also write applications using the libraries provided by "),o("a",{attrs:{href:"https://mavlink.io/en/#mavlink-project-generatorslanguages",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),o("OutboundLink")],1),t._v(", such as "),o("a",{attrs:{href:"https://mavlink.io/en/mavgen_python/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pymavlink"),o("OutboundLink")],1),t._v(", but then you are more likely to have to provide your own implementations of some microservices.")]),t._v(" "),o("p",[t._v("For this tutorial we're not going to go into MAVLink control in any detail (it is well covered in the respective SDKs). However we will install and use a simple developer MAVLink GCS called "),o("code",[t._v("mavproxy")]),t._v(". This will allow us to verify the MAVLink connection, and therefore that our physical connection has been set up properly. A very similar connection pattern would be used for MAVSDK and other MAVLink applications.")]),t._v(" "),o("p",[t._v("First check the Pixhawk "),o("code",[t._v("TELEM 2")]),t._v(" configuration:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Connect the Pixhawk with the laptop using a USB cable.")])]),t._v(" "),o("li",[o("p",[t._v("Open QGroundControl (the vehicle should connect).")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("Check/change the following parameters")]),t._v(" in QGroundControl:")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("MAV_1_CONFIG = TELEM2\nXRCE_DDS_CFG = 0 (Disabled)\nSER_TEL2_BAUD = 57600\n")])])]),o("p",[t._v("Note that the parameters may already be set appropriately. For information about how serial ports and MAVLink configuration work see "),o("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("Serial Port Configuration")]),t._v(" and "),o("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals")]),t._v(".")],1)])]),t._v(" "),o("p",[t._v("Then install setup MAVProxy on the RPi using the following terminal commands:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Install MAVProxy:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python3-pip\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pip3 "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mavproxy\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" remove modemmanager\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Run MAVProxy, setting the port to connect to "),o("code",[t._v("/dev/ttyAMA0")]),t._v(" and the baud rate to match the PX4:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("sudo mavproxy.py --master=/dev/serial0 --baudrate 57600\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("Note that above we used "),o("code",[t._v("/dev/serial0")]),t._v(", but we could equally well have used "),o("code",[t._v("/dev/ttyAMA0")]),t._v(". If we were connecting via USB then we would instead set the port as "),o("code",[t._v("/dev/ttyACM0")]),t._v(":")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+rw /dev/ttyACM0\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" mavproxy.py --master"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/dev/ttyACM0 --baudrate "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("57600")]),t._v("\n")])])])]),t._v(" "),o("p",[t._v("MAVProxy on RPi should now connect to the Pixhawk, via RX/TX pins. You should be able to see this in the RPi terminal.")]),t._v(" "),o("p",[t._v("We have now verified that our connection is wired up properly. In the next section we'll set up the both Pixhawk and RPi to use XRCE-DDS and ROS2 instead of MAVLink.")]),t._v(" "),o("h2",{attrs:{id:"ros-2-and-xrce-dds"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ros-2-and-xrce-dds"}},[t._v("#")]),t._v(" ROS 2 and XRCE-DDS")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html"}},[t._v("ROS 2 Guide")]),t._v(" and "),o("RouterLink",{attrs:{to:"/zh/middleware/xrce_dds.html"}},[t._v("XRCE-DDS")]),t._v(' pages cover the options for setting up the XRCE-DDS and ROS, focussing on ROS 2 "Foxy". This tutorial uses ROS 2 "Humble" and covers the specific setup for working with RPi. It is worth reading both!')],1),t._v(" "),o("h3",{attrs:{id:"pixhawk-px4-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-px4-setup"}},[t._v("#")]),t._v(" Pixhawk/PX4 Setup")]),t._v(" "),o("p",[t._v("Next we set up ROS 2 instead of MAVLink on "),o("code",[t._v("TELEM2")]),t._v(". We do this by changing parameters in QGroundControl, which can be connected via USB, or using a telemetry radio connected to "),o("code",[t._v("TELEM1")]),t._v(".")]),t._v(" "),o("p",[t._v("The configuration steps are:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Connect the Pixhawk with the laptop using a USB cable and open QGroundControl (if not currently connected).")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("Check/change the following parameters")]),t._v(" in QGroundControl:")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("MAV_1_CONFIG = 0 (Disabled)\nXRCE_DDS_CFG = 102 (TELEM2)\nSER_TEL2_BAUD = 921600\n")])])]),o("p",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG=0")]),t._v(" and "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("XRCE_DDS_CFG=102")]),t._v(" disable MAVLink on TELEM2 and enable the XRCE-DDS client on TELEM2, respectively. The "),o("code",[t._v("SER_TEL2_BAUD")]),t._v(" rate sets the comms link data rate.")],1),t._v(" "),o("p",[t._v("Note that you could similarly configure a connection to "),o("code",[t._v("TELEM1")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Check that the "),o("RouterLink",{attrs:{to:"/zh/modules/modules_system.html#microdds-client"}},[t._v("microdds_client")]),t._v(" module is now running. YOu can do this by running the following command in the QGroundControl "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Console"),o("OutboundLink")],1),t._v(":")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("microdds_client status\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("If the client module is not running you can start it manually in the MAVLink console:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("microdds_client start -t serial -d /dev/ttyS3 -b 921600\n")])])]),o("p",[t._v("Note that "),o("code",[t._v("/dev/ttyS3")]),t._v(" is the PX4 port for "),o("code",[t._v("TELEM2")]),t._v(" on the "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6c.html#serial-port-mapping"}},[t._v("Holybro Pixhawk 6c")]),t._v(". For other flight controllers check the serial port mapping section in their overview page.")],1)]),t._v(" "),o("h3",{attrs:{id:"ros-setup-on-rpi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ros-setup-on-rpi"}},[t._v("#")]),t._v(" ROS Setup on RPi")]),t._v(" "),o("p",[t._v("The steps to setup ROS 2 and the XRCE-DDS Agent on the RPi are:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Install ROS 2 Humble by following the "),o("a",{attrs:{href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official tutorial"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Install the git using the RPi terminal:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Install the XRCE_DDS client:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/eProsima/Micro-XRCE-DDS-Agent.git\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Micro-XRCE-DDS-Agent\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\ncmake "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ldconfig /usr/local/lib/\n")])])]),o("p",[t._v("See "),o("RouterLink",{attrs:{to:"/zh/middleware/xrce_dds.html#xrce-dds-agent-installation"}},[t._v("XRCE-DDS > XRCE-DDS Agent Installation")]),t._v(" for alternative ways of installing the agent.")],1)]),t._v(" "),o("li",[o("p",[t._v("Start the agent in the RPi terminal:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" MicroXRCEAgent serial --dev /dev/serial0 -b "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("921600")]),t._v("\n")])])]),o("p",[t._v("Note how we use the serial port set up earlier and the same baud rate as for PX4.")])])]),t._v(" "),o("p",[t._v("Now that both the agent and client are running, you should see activity on both the MAVLink console and the RPi terminal. You can view the available topics using the following command on the RPi:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /opt/ros/humble/setup.bash\nros2 topic list\n")])])]),o("p",[t._v("That's it. Once you have the connection working, see the "),o("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html"}},[t._v("ROS 2 Guide")]),t._v(" for more information about working with PX4 and ROS 2.")],1)])}),[],!1,null,null,null);e.default=n.exports},618:function(t,e,a){t.exports=a.p+"assets/img/pins_numbers.b0d18639.png"},619:function(t,e,a){t.exports=a.p+"assets/img/rpi_gpio.5b75e08b.png"}}]);