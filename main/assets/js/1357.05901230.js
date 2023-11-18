(window.webpackJsonp=window.webpackJsonp||[]).push([[1357],{2485:function(t,e,r){"use strict";r.r(e);var a=r(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"crsf-telemetry-tbs-crossfire-telemetry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#crsf-telemetry-tbs-crossfire-telemetry"}},[t._v("#")]),t._v(" CRSF Telemetry (TBS Crossfire Telemetry)")]),t._v(" "),r("p",[t._v("CRSF is a telemetry protocol that can be used for both "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("RC control")]),t._v(" and to get telemetry information from the vehicle/flight controller on a compatible RC transmitter.")],1),t._v(" "),r("p",[t._v("The protocol was developed by "),r("a",{attrs:{href:"https://www.team-blacksheep.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Team BlackSheep"),r("OutboundLink")],1),t._v(" for their Crossfire RC system, but is also used by "),r("a",{attrs:{href:"https://www.expresslrs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ExpressLRS (ELRS)"),r("OutboundLink")],1),t._v(" RC systems.\nIt is a bidirectional protocol that only needs a single UART for communicating both RC and telemetry.")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"#telemetry-messages"}},[t._v("supported telemetry messages are listed here")]),t._v(", and include: flight mode, battery level, GPS data RC signal strength, speed, altitude, and so on.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If you don't need telemetry you can connect a TBS Crossfire to the "),r("code",[t._v("RCIN")]),t._v(" port and configure the receiver to use S.BUS.\nCrossfire radio systems can also be used as "),r("RouterLink",{attrs:{to:"/en/telemetry/"}},[t._v("Telemetry Radios")]),t._v(".")],1)]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("PX4 does not include the CRSF protocol support by default.\nThe "),r("a",{attrs:{href:"#px4-configuration"}},[t._v("instructions below")]),t._v(" explain how to build and upload custom PX4 firmware that includes the required modules.")])]),t._v(" "),r("h2",{attrs:{id:"radio-system-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-system-setup"}},[t._v("#")]),t._v(" Radio System Setup")]),t._v(" "),r("p",[t._v("To use CRSF telemetry you will need a "),r("a",{attrs:{href:"#tbs-radio-systems"}},[t._v("TBS Crossfire radio system")]),t._v(" or "),r("a",{attrs:{href:"#expresslrs-radio-systems"}},[t._v("ExpressLRS radio system")]),t._v(" that includes an "),r("a",{attrs:{href:"#rc-controllers"}},[t._v("RC controller")]),t._v(" with a transmitter, and a receiver (from the same vendor).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("An RC radio system historically consisted of a ground-based controller that transmitted to an on-vehicle receiver.\nEven though many radio systems are now bidirectional, the ground module may still be referred to as the transmitter, and the air unit may be called a receiver.")])]),t._v(" "),r("p",[t._v("Generally you will need to separately setup and configure the transmitter and receiver, and then "),r("em",[t._v("bind")]),t._v(" them together.")]),t._v(" "),r("p",[t._v("A transmitter might come as an integral part of an "),r("a",{attrs:{href:"#rc-controllers"}},[t._v("RC controller")]),t._v(", or it might be a separate module that you plug into a controller.\nIf it is a separate module then you may also need to update the module software on the transmitter to firmware that supports CRSF, such as OpenTX or EdgeTx.\nIn both cases you will need to configure the transmitter to enable CRSF.")]),t._v(" "),r("p",[t._v("The receiver must be "),r("a",{attrs:{href:"#wiring"}},[t._v("wired")]),t._v(" to a spare port (UART) on the Flight Controller.\nThen you can "),r("em",[t._v("bind")]),t._v(" the transmitter and receiver together.")]),t._v(" "),r("p",[t._v("Instructions for the steps above are covered in")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.team-blacksheep.com/tbs-crossfire-manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("TBS Crossfire Manual"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.expresslrs.org/quick-start/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Express LRS: QuickStart"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"wiring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[t._v("#")]),t._v(" Wiring")]),t._v(" "),r("p",[t._v("The TX and RX on your selected Flight Controller UART should be connected to separate channels on the receiver.\nThe signal is usually uninverted, and can be directly connected (no additional inverter logic is required in the cable).\nYou should check the manual for your specific receiver though!")]),t._v(" "),r("h4",{attrs:{id:"tbs-receiver-wiring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tbs-receiver-wiring"}},[t._v("#")]),t._v(" TBS Receiver Wiring")]),t._v(" "),r("p",[t._v("For TBS receivers you wire the FC UART and receiver as shown (this assumes the TBS Nano RX).")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("FC UART")]),t._v(" "),r("th",[t._v("Nano RX")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("TX")]),t._v(" "),r("td",[t._v("Ch2")])]),t._v(" "),r("tr",[r("td",[t._v("RX")]),t._v(" "),r("td",[t._v("Ch1")])])])]),t._v(" "),r("h4",{attrs:{id:"expresslrs-receiver-wiring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#expresslrs-receiver-wiring"}},[t._v("#")]),t._v(" ExpressLRS Receiver Wiring")]),t._v(" "),r("p",[t._v("For ExpressLRS receivers wire to the flight controller UART as shown below (wiring is covered "),r("a",{attrs:{href:"https://www.expresslrs.org/quick-start/receivers/wiring-up/",target:"_blank",rel:"noopener noreferrer"}},[t._v("in detail here"),r("OutboundLink")],1),t._v("):")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("FC UART")]),t._v(" "),r("th",[t._v("ExpressLRS")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("TX")]),t._v(" "),r("td",[t._v("RX")])]),t._v(" "),r("tr",[r("td",[t._v("RX")]),t._v(" "),r("td",[t._v("TX")])]),t._v(" "),r("tr",[r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("VCC")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("h2",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),r("h3",{attrs:{id:"firmware-configuration-build"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-configuration-build"}},[t._v("#")]),t._v(" Firmware Configuration/Build")]),t._v(" "),r("p",[t._v("CRSF telemetry support is not included in any PX4 firmware by default.\nTo use this feature you must build and upload custom firmware that includes "),r("RouterLink",{attrs:{to:"/en/modules/modules_driver.html#crsf-rc"}},[t._v("crsf-rc")]),t._v(" and removes "),r("RouterLink",{attrs:{to:"/en/modules/modules_driver.html#rc-input"}},[t._v("rc_input")]),t._v(".")],1),t._v(" "),r("p",[t._v("The steps are:")]),t._v(" "),r("ol",[r("li",[r("p",[r("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[t._v("Setup a development environment")]),t._v(" for building PX4.")],1),t._v(" "),r("p",[t._v("As part of this process you will have used "),r("code",[t._v("git")]),t._v(" to fetch source code into the "),r("strong",[t._v("PX4-Autopilot")]),t._v(" directory.")])]),t._v(" "),r("li",[r("p",[t._v("Open a terminal and "),r("code",[t._v("cd")]),t._v(" into the "),r("code",[t._v("PX4-Autopilot")]),t._v(" directory.")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])]),t._v(" "),r("li",[r("p",[t._v("Launch the "),r("RouterLink",{attrs:{to:"/en/hardware/porting_guide_config.html#px4-menuconfig-setup"}},[t._v("PX4 board config tool ("),r("code",[t._v("menuconfig")]),t._v(")")]),t._v(" for your "),r("code",[t._v("make")]),t._v(" target using the "),r("code",[t._v("boardconfig")]),t._v(" option (here the target is the "),r("RouterLink",{attrs:{to:"/en/flight_controller/arkv6x.html"}},[t._v("ARK Electronics ARKV6X")]),t._v(" flight controller):")],1),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" ark_fmu-v6x_default boardconfig\n")])])])]),t._v(" "),r("li",[r("p",[t._v("In the PX4 board config tool:")]),t._v(" "),r("ul",[r("li",[t._v("Disable the default "),r("code",[t._v("rc_input")]),t._v(" module\n"),r("ol",[r("li",[t._v("Navigate to the "),r("code",[t._v("drivers")]),t._v(" submenu, then scroll down to highlight "),r("code",[t._v("rc_input")]),t._v(".")]),t._v(" "),r("li",[t._v("Use the enter key to remove the "),r("code",[t._v("*")]),t._v(" from "),r("code",[t._v("rc_input")]),t._v(" checkbox.")])])]),t._v(" "),r("li",[t._v("Enable the "),r("code",[t._v("crsf_rc")]),t._v(" module\n"),r("ol",[r("li",[t._v("Scroll to highlight the "),r("code",[t._v("RC")]),t._v(" submenu, then press enter to open it.")]),t._v(" "),r("li",[t._v("Scroll to highlight "),r("code",[t._v("crsf_rc")]),t._v(" and press enter to enable it.")])])])]),t._v(" "),r("p",[t._v("Save and exit the PX4 board config tool.")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Build the PX4 source code")]),t._v(" with your changes (again assuming you are using ARKV6X):")],1),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" ark_fmu-v6x_default\n")])])])])]),t._v(" "),r("p",[t._v("This will build your custom firmware, which must now be uploaded to your flight controller.")]),t._v(" "),r("h3",{attrs:{id:"firmware-upload"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-upload"}},[t._v("#")]),t._v(" Firmware Upload")]),t._v(" "),r("p",[t._v("To upload the custom firmware, first connect your flight controller to the development computer via USB.")]),t._v(" "),r("p",[t._v("You can upload firmware as part of the build process using the "),r("code",[t._v("upload")]),t._v(" options:")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" ark_fmu-v6x_default upload\n")])])]),r("p",[t._v("Alternatively you can use QGroundControl to install the firmware, as described in "),r("RouterLink",{attrs:{to:"/en/config/firmware.html#installing-px4-main-beta-or-custom-firmware"}},[t._v("Firmware > Installing PX4 master, beta, or custom firmware")]),t._v(".")],1),t._v(" "),r("h3",{attrs:{id:"parameter-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameter-configuration"}},[t._v("#")]),t._v(" Parameter Configuration")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[t._v("Find and set")]),t._v(" the following parameters:")],1),t._v(" "),r("ol",[r("li",[r("p",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_CRSF_PRT_CFG"}},[t._v("RC_CRSF_PRT_CFG")]),t._v(" — Set to the port that is connected to the CRSF receiver (such as "),r("code",[t._v("TELEM1")]),t._v(").")],1),t._v(" "),r("p",[t._v("This "),r("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[t._v("configures the serial port")]),t._v(" to use the CRSF protocol.\nNote that some serial ports may already have a "),r("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html#default-serial-port-configuration"}},[t._v("default serial port mapping")]),t._v(" or "),r("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html#default-mavlink-ports"}},[t._v("default MAVLink serial port mapping")]),t._v(" that you will have to un-map before you can assign the port to CRSF.\nFor example, if you want to use "),r("code",[t._v("TELEM1")]),t._v(" or "),r("code",[t._v("TELEM2")]),t._v(" you first need to modify "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[t._v("MAV_0_CONFIG")]),t._v(" or "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" to stop setting those ports.")],1),t._v(" "),r("p",[t._v("There is no need to set the baud rate for the port, as this is configured by the driver.")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_CRSF_TEL_EN"}},[t._v("RC_CRSF_TEL_EN")]),t._v(" — Enable to activate Crossfire telemetry.")],1)])]),t._v(" "),r("h3",{attrs:{id:"radio-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-setup"}},[t._v("#")]),t._v(" Radio Setup")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/config/radio.html"}},[t._v("Radio Control Setup")]),t._v(" explains how to map your RC controller's attitude control sticks (roll, pitch, yaw, throttle) to channels, and to calibrate the minimum, maximum, trim and reverse settings for all other transmitter controls/RC channels.")],1),t._v(" "),r("h2",{attrs:{id:"rc-controllers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-controllers"}},[t._v("#")]),t._v(" RC Controllers")]),t._v(" "),r("p",[t._v("A transmitter might come as an integral part of an RC controller, or it might be a separate module that you plug into a controller.")]),t._v(" "),r("p",[t._v("RC Controllers that support TBS Crossfire and ExpressLRS TX modules:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.frsky-rc.com/product/taranis-x9d-plus-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FrSky Taranis X9D Plus"),r("OutboundLink")],1),t._v(' has an external module bay that can be used with TBS or ExpressLRS transmitter modules that are "JR module bay" compatible.\nYou will need to install OpenTX software, which supports CRSF, and enable the external module and CRSF.')]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.radiomasterrc.com/collections/tx16s-mkii",target:"_blank",rel:"noopener noreferrer"}},[t._v("Radiomaster TX16S"),r("OutboundLink")],1),t._v(' has an internal ExpressLRS transmitter module.\nIt also has an external module bay that can be used with TBS or ExpressLRS transmitter modules that are "JR module bay" compatible.\nIt runs both OpenTX and EdgeTx software, either of which can support CRSF.')])]),t._v(" "),r("h2",{attrs:{id:"tbs-radio-systems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tbs-radio-systems"}},[t._v("#")]),t._v(" TBS Radio Systems")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.team-blacksheep.com/shop/cat:cat_crossfire#product_listing",target:"_blank",rel:"noopener noreferrer"}},[t._v("TBS Crossfire Radio Systems are listed here"),r("OutboundLink")],1),t._v(".\nA few options are listed below.")]),t._v(" "),r("p",[t._v("Transmitter modules:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.team-blacksheep.com/products/prod:crossfire_tx",target:"_blank",rel:"noopener noreferrer"}},[t._v("TBS CROSSFIRE TX - LONG RANGE R/C TRANSMITTER"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("Receivers:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://team-blacksheep.com/products/prod:crossfire_nano_rx",target:"_blank",rel:"noopener noreferrer"}},[t._v("TBS Crossfire Nano RX"),r("OutboundLink")],1),t._v(" - designed for small quadcopters.")])]),t._v(" "),r("h2",{attrs:{id:"expresslrs-radio-systems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#expresslrs-radio-systems"}},[t._v("#")]),t._v(" ExpressLRS Radio Systems")]),t._v(" "),r("p",[t._v("Express LRS provide Radio System guidance in the "),r("a",{attrs:{href:"https://www.expresslrs.org/hardware/hardware-selection/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hardware Selection"),r("OutboundLink")],1),t._v(" page.\nA few tested options are listed below.")]),t._v(" "),r("p",[t._v("Transmitter modules:")]),t._v(" "),r("ul",[r("li",[t._v("TBD")])]),t._v(" "),r("p",[t._v("Receivers:")]),t._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"http://www.mateksys.com/?portfolio=elrs-r24",target:"_blank",rel:"noopener noreferrer"}},[t._v("ExpressLRS Matek Diversity RX"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("This is used in the "),r("RouterLink",{attrs:{to:"/en/frames_plane/reptile_dragon_2.html"}},[t._v("Reptile Dragon 2 Build Log")]),t._v(".\nSee sections "),r("RouterLink",{attrs:{to:"/en/frames_plane/reptile_dragon_2.html#elrs-rx"}},[t._v("ELRS Rx")]),t._v(" and "),r("RouterLink",{attrs:{to:"/en/frames_plane/reptile_dragon_2.html#radio-setup"}},[t._v("Radio Setup")]),t._v(".")],1)])])]),t._v(" "),r("h2",{attrs:{id:"telemetry-messages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-messages"}},[t._v("#")]),t._v(" Telemetry Messages")]),t._v(" "),r("p",[t._v("The supported telemetry messages and their source are listed below (this table is reproduced from the "),r("a",{attrs:{href:"https://www.team-blacksheep.com/tbs-crossfire-manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v('TBS Crossfire Manual: "Available sensors with OpenTX"'),r("OutboundLink")],1),t._v(").")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Datapoint")]),t._v(" "),r("th",[t._v("Description")]),t._v(" "),r("th",[t._v("Data source")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1RSS")]),t._v(" "),r("td",[t._v("Uplink - received signal strength antenna 1 (RSSI)")]),t._v(" "),r("td",[t._v("TBS CROSSFIRE RX")])]),t._v(" "),r("tr",[r("td",[t._v("2RSS")]),t._v(" "),r("td",[t._v("Uplink - received signal strength antenna 2 (RSSI)")]),t._v(" "),r("td",[t._v("TBS CROSSFIRE RX")])]),t._v(" "),r("tr",[r("td",[t._v("RQly")]),t._v(" "),r("td",[t._v("Uplink - link quality (valid packets)")]),t._v(" "),r("td",[t._v("TBS CROSSFIRE RX")])]),t._v(" "),r("tr",[r("td",[t._v("RSNR")]),t._v(" "),r("td",[t._v("Uplink - signal-to-noise ratio")]),t._v(" "),r("td",[t._v("TBS CROSSFIRE RX")])]),t._v(" "),r("tr",[r("td",[t._v("RFMD")]),t._v(" "),r("td",[t._v("Uplink - update rate, 0 = 4Hz, 1 = 50Hz, 2 = 150Hz")]),t._v(" "),r("td",[t._v("TBS CROSSFIRE RX")])]),t._v(" "),r("tr",[r("td",[t._v("TPWR")]),t._v(" "),r("td",[t._v("Uplink - transmitting power")]),t._v(" "),r("td",[t._v("TBS CROSSFIRE TX")])]),t._v(" "),r("tr",[r("td",[t._v("TRSS")]),t._v(" "),r("td",[t._v("Downlink - signal strength antenna")]),t._v(" "),r("td",[t._v("TBS CROSSFIRE TX")])]),t._v(" "),r("tr",[r("td",[t._v("TQly")]),t._v(" "),r("td",[t._v("Downlink - link quality (valid packets)")]),t._v(" "),r("td",[t._v("TBS CROSSFIRE TX")])]),t._v(" "),r("tr",[r("td",[t._v("TSNR")]),t._v(" "),r("td",[t._v("Downlink - signal-to-noise ratio")]),t._v(" "),r("td",[t._v("TBS CROSSFIRE TX")])]),t._v(" "),r("tr",[r("td",[t._v("ANT")]),t._v(" "),r("td",[t._v("Sensor for debugging only")]),t._v(" "),r("td",[t._v("TBS CROSSFIRE TX")])]),t._v(" "),r("tr",[r("td",[t._v("GPS")]),t._v(" "),r("td",[t._v("GPS Coordinates")]),t._v(" "),r("td",[t._v("TBS GPS / FC")])]),t._v(" "),r("tr",[r("td",[t._v("Alt")]),t._v(" "),r("td",[t._v("GPS Altitudes")]),t._v(" "),r("td",[t._v("TBS GPS / FC")])]),t._v(" "),r("tr",[r("td",[t._v("Sats")]),t._v(" "),r("td",[t._v("GPS Satellites acquired")]),t._v(" "),r("td",[t._v("TBS GPS / FC")])]),t._v(" "),r("tr",[r("td",[t._v("Hdg")]),t._v(" "),r("td",[t._v("Magnetic orientation")]),t._v(" "),r("td",[t._v("TBS GPS / FC")])]),t._v(" "),r("tr",[r("td",[t._v("RXBt")]),t._v(" "),r("td",[t._v("Battery voltage")]),t._v(" "),r("td",[t._v("TBS GPS / FC/ CROSSFIRE RX/ CORE")])]),t._v(" "),r("tr",[r("td",[t._v("Curr")]),t._v(" "),r("td",[t._v("Current draw")]),t._v(" "),r("td",[t._v("TBS GPS / FC// CORE")])]),t._v(" "),r("tr",[r("td",[t._v("Capa")]),t._v(" "),r("td",[t._v("Current consumption")]),t._v(" "),r("td",[t._v("TBS GPS / FC/ CORE")])]),t._v(" "),r("tr",[r("td",[t._v("Ptch")]),t._v(" "),r("td",[t._v("FC Pitch angle")]),t._v(" "),r("td",[t._v("FC")])]),t._v(" "),r("tr",[r("td",[t._v("Roll")]),t._v(" "),r("td",[t._v("FC Roll angle")]),t._v(" "),r("td",[t._v("FC")])]),t._v(" "),r("tr",[r("td",[t._v("Yaw")]),t._v(" "),r("td",[t._v("FC Yaw angle")]),t._v(" "),r("td",[t._v("FC")])]),t._v(" "),r("tr",[r("td",[t._v("FM")]),t._v(" "),r("td",[t._v("Flight mode")]),t._v(" "),r("td",[t._v("FC")])]),t._v(" "),r("tr",[r("td",[t._v("VSPD")]),t._v(" "),r("td",[t._v("Barometer")]),t._v(" "),r("td",[t._v("FC")])])])]),t._v(" "),r("h2",{attrs:{id:"see-also"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.team-blacksheep.com/tbs-crossfire-manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("TBS Crossfire Manual"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.expresslrs.org/quick-start/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ExpressLRS Documentation"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/frsky_telemetry.html"}},[t._v("FrSky Telemetry")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/radio.html"}},[t._v("Radio Control Setup")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("Radio Control Systems")])],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);