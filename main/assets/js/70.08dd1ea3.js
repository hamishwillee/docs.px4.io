(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1915:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"crazyflie-2-0-discontinued"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crazyflie-2-0-discontinued"}},[e._v("#")]),e._v(" Crazyflie 2.0 (Discontinued)")]),e._v(" "),s("Badge",{attrs:{type:"error",text:"Discontinued"}}),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[s("em",[e._v("Crazyflie 2.0")]),e._v(" has been "),s("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_experimental.html"}},[e._v("discontinued/superseded")]),e._v(".\nTry "),s("RouterLink",{attrs:{to:"/en/complete_vehicles/crazyflie21.html"}},[e._v("Bitcraze Crazyflie 2.1")]),e._v(" instead!")],1)]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("ul",[s("li",[e._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),s("a",{attrs:{href:"https://www.bitcraze.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("manufacturer"),s("OutboundLink")],1),e._v(" for hardware support or compliance issues.")]),e._v(" "),s("li",[e._v("PX4 support for this flight controller is "),s("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_experimental.html"}},[e._v("experimental")]),e._v(".")],1)])]),e._v(" "),s("p",[e._v("The Crazyflie line of micro quads was created by Bitcraze AB.\nAn overview of the Crazyflie 2.0 can be "),s("a",{attrs:{href:"https://www.bitcraze.io/crazyflie-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("found here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(641),alt:"Crazyflie2 Image"}})]),e._v(" "),s("h2",{attrs:{id:"quick-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[e._v("#")]),e._v(" Quick Summary")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("The main hardware documentation is here: https://wiki.bitcraze.io/projects:crazyflie2:index")])]),e._v(" "),s("ul",[s("li",[e._v("Main System-on-Chip: STM32F405RG\n"),s("ul",[s("li",[e._v("CPU: 168 MHz ARM Cortex M4 with single-precision FPU")]),e._v(" "),s("li",[e._v("RAM: 192 KB SRAM")])])]),e._v(" "),s("li",[e._v("nRF51822 radio and power management MCU")]),e._v(" "),s("li",[e._v("MPU9250 Accel / Gyro / Mag")]),e._v(" "),s("li",[e._v("LPS25H barometer")])]),e._v(" "),s("h2",{attrs:{id:"where-to-buy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://store.bitcraze.io/collections/kits/products/crazyflie-2-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyflie 2.0"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://store.bitcraze.io/collections/kits/products/crazyradio-pa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyradio PA 2.4 GHz USB dongle"),s("OutboundLink")],1),e._v(": used for wireless communication between "),s("em",[e._v("QGroundControl")]),e._v(" and Crazyflie 2.0.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/breakout-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breakout deck"),s("OutboundLink")],1),e._v(": breakout expansion board for connecting new peripherals.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),s("OutboundLink")],1),e._v(": contains an optical flow sensor to measure movements of the ground and a distance sensor to measure the distance to the ground.\nThis will be useful for precise altitude and position control.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),s("OutboundLink")],1),e._v(" has the same distance sensor as the Flow deck to measure the distance to the ground.\nThis will be useful for precise altitude control.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/sd-card-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("SD-card deck"),s("OutboundLink")],1),e._v(": used for high speed onboard logging to a micro SD card.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://support.logi.com/hc/en-us/articles/360024326793--Getting-Started-Gamepad-F310",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logitech Joystick"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"flashing-px4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flashing-px4"}},[e._v("#")]),e._v(" Flashing PX4")]),e._v(" "),s("p",[e._v("After setting up the PX4 development environment, follow these steps to install the PX4 Autopilot on the Crazyflie 2.0:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Download the source code of the PX4 Bootloader:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/PX4/Bootloader.git\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Navigate into the top directory of the source code and compile it using:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" crazyflie_bl\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Put the Crazyflie 2.0 into DFU mode by following these steps:")]),e._v(" "),s("ul",[s("li",[e._v("Ensure it is initially unpowered.")]),e._v(" "),s("li",[e._v("Hold down the reset button (see figure below...).\n"),s("img",{attrs:{src:a(375),alt:"Crazyflie2 Reset Button"}})]),e._v(" "),s("li",[e._v("Plug into computer's USB port.")]),e._v(" "),s("li",[e._v("After a second, the blue LED should start blinking and after 5 seconds should start blinking faster.")]),e._v(" "),s("li",[e._v("Release button.")])])]),e._v(" "),s("li",[s("p",[e._v("Install "),s("em",[e._v("dfu-util")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" dfu-util\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Flash bootloader using "),s("em",[e._v("dfu-util")]),e._v(" and unplug Crazyflie 2.0 when done:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dfu-util -d 0483:df11 -a "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -s 0x08000000 -D ./build/crazyflie_bl/crazyflie_bl.bin\n")])])]),s("p",[e._v("When powering on the Crazyflie 2.0 the yellow LED should blink.")])]),e._v(" "),s("li",[s("p",[e._v("Download the source code of the PX4 autopilot:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/PX4/PX4-Autopilot.git\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Navigate into the top directory of the source code and compile it using:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" bitcraze_crazyflie_default upload\n")])])])]),e._v(" "),s("li",[s("p",[e._v("When prompted to plug in device, plug in Crazyflie 2.0.\nThe yellow LED should start blinking indicating bootloader mode.\nThen the red LED should turn on indicating that the flashing process has started.")])]),e._v(" "),s("li",[s("p",[e._v("Wait for completion.")])]),e._v(" "),s("li",[s("p",[e._v("Done! Calibrate the sensors using "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/setup_view/sensors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),s("OutboundLink")],1),e._v(".")])])]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("If QGroundControl does not connect with the vehicle, ensure that in "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/boards/bitcraze/crazyflie/nuttx-config/nsh/defconfig",target:"_blank",rel:"noopener noreferrer"}},[e._v("nuttx-config"),s("OutboundLink")],1),e._v(" for crazyflie "),s("code",[e._v("# CONFIG_DEV_LOWCONSOLE is not set")]),e._v(" is replaced by "),s("code",[e._v("CONFIG_DEV_LOWCONSOLE=y")]),e._v(".\nThis should be done using "),s("em",[e._v("menuconfig")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" bitcraze_crazyflie_default menuconfig\n")])])]),s("p",[e._v("or "),s("em",[e._v("qconfig")]),e._v(" (Check "),s("em",[e._v("Low-level console support")]),e._v(" under "),s("em",[e._v("Serial Driver Support")]),e._v(" in GUI):")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" bitcraze_crazyflie_default qconfig\n")])])])]),e._v(" "),s("h2",{attrs:{id:"wireless-setup-instructions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wireless-setup-instructions"}},[e._v("#")]),e._v(" Wireless Setup Instructions")]),e._v(" "),s("p",[e._v("The onboard nRF module allows connecting to the board via Bluetooth or through the proprietary 2.4GHz Nordic ESB protocol.")]),e._v(" "),s("ul",[s("li",[e._v("A "),s("a",{attrs:{href:"https://www.bitcraze.io/crazyradio-pa/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyradio PA"),s("OutboundLink")],1),e._v(" is recommended.")]),e._v(" "),s("li",[e._v("To fly the Crazyflie 2.0 right away, the Crazyflie phone app is supported via Bluetooth.")])]),e._v(" "),s("p",[e._v("Using the official Bitcraze "),s("strong",[e._v("Crazyflie phone app")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("Connect via Bluetooth.")]),e._v(" "),s("li",[e._v("Change mode in settings to 1 or 2.")]),e._v(" "),s("li",[e._v("Calibrate via QGroundControl.")])]),e._v(" "),s("p",[e._v("Connecting via "),s("strong",[e._v("MAVLink")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Use a Crazyradio PA alongside a compatible GCS.")])]),e._v(" "),s("li",[s("p",[e._v("Download the "),s("em",[e._v("crazyflie-lib-python")]),e._v(" source code:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/bitcraze/crazyflie-lib-python.git\n")])])])])]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("We will use "),s("a",{attrs:{href:"https://github.com/bitcraze/crazyflie-lib-python/blob/master/examples/cfbridge.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("cfbridge.py"),s("OutboundLink")],1),e._v(" to setup a wireless MAVlink communication link between Crazyflie 2.0 (flashed with PX4) and QGroundControl. "),s("em",[e._v("Cfbridge")]),e._v(" enables QGroundControl to communicate with the crazyradio PA.\nThe "),s("a",{attrs:{href:"https://github.com/dennisss/cfbridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("C based cfbridge"),s("OutboundLink")],1),e._v(" is currently experiencing data loss issues, which is why we have chosen to use "),s("strong",[e._v("cfbridge.py")]),e._v(".")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Make sure you have set the udev permissions to use the USB Radio. To do this, follow the steps listed "),s("a",{attrs:{href:"https://www.bitcraze.io/documentation/repository/crazyflie-lib-python/master/installation/usb_permissions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" and "),s("strong",[e._v("restart")]),e._v(" your computer.")])]),e._v(" "),s("li",[s("p",[e._v("Connect a Crazyradio PA via USB.")])]),e._v(" "),s("li",[s("p",[e._v("Build a "),s("a",{attrs:{href:"https://virtualenv.pypa.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtual environment (local python environment)"),s("OutboundLink")],1),e._v(" with package dependencies using the following method:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" tox --user\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Navigate to the crazyflie-lib-python folder and type:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" venv\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Activate the virtual environment:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" venv-cflib/bin/activate\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Install required dependencies:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -r requirements.txt --user\n")])])])])]),e._v(" "),s("p",[e._v("To connect Crazyflie 2.0 with crazyradio, "),s("strong",[e._v("launch cfbridge")]),e._v(" by following these steps:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Power off and power on Crazyflie 2.0 and wait for it to boot up.")])]),e._v(" "),s("li",[s("p",[e._v("Connect a Crazyflie radio device via USB.")])]),e._v(" "),s("li",[s("p",[e._v("Navigate to the crazyflie-lib-python folder.")])]),e._v(" "),s("li",[s("p",[e._v("Activate the environment:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" venv-cflib/bin/activate\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Navigate to the examples folder:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" examples\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Launch cfbridge:")])])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("python cfbridge.py\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[s("em",[e._v("Cfbridge")]),e._v(" by default tries to initiate the radio link communication on channel 80 and with crazyflie address 0xE7E7E7E7E7.\nIf you are using "),s("a",{attrs:{href:"https://github.com/dennisss/cfbridge/blob/master/README.md#advanced-swarming",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple crazyflies and/or crazyradios"),s("OutboundLink")],1),e._v(" in the same room and want to use a different channel and/or address for each, first connect the crazyflie with QGroundControl via a USB cable and change the syslink parameters (channel, address) in QGroundControl.\nNext, launch the cfbridge by giving the same channel and address as the first and second arguments respectively, e.g: "),s("code",[e._v("python cfbridge.py 90 0x0202020202")])])]),e._v(" "),s("ul",[s("li",[e._v("Open QGroundControl.")]),e._v(" "),s("li",[e._v("After using "),s("em",[e._v("cfbridge")]),e._v(", you can deactivate the virtualenv if you activated it by pressing "),s("code",[e._v("CTRL+z")]),e._v(".\nMost of the time, launching "),s("em",[e._v("cfbridge")]),e._v(" again from the same terminal doesn't connect to crazyflie, this can be solved by closing the terminal and relaunching "),s("em",[e._v("cfbridge")]),e._v(" in a new terminal.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("If you change any driver in "),s("a",{attrs:{href:"https://github.com/bitcraze/crazyflie-lib-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("crazyflie-lib-python"),s("OutboundLink")],1),e._v(" or if launching "),s("em",[e._v("cfbridge")]),e._v(" in a new terminal does not find crazyflie, you can try navigating to the crazyflie-lib-python folder and run the script below to rebuild cflib.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" venv\n")])])])]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("To use Joystick, set "),s("code",[e._v("COM_RC_IN_MODE")]),e._v(' in QGroundControl to "Joystick/No RC Checks".\nCalibrate the Joystick and set the Joystick message frequency in QGroundControl to any value between 5 to 14 Hz (10 Hz is recommended).\nTo be able to set the frequency, the advanced option should be enabled.\nThis is the rate at which Joystick commands are sent from QGroundControl to Crazyflie 2.0 (to do this, you will need to follow the instructions '),s("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" to obtain the latest QGroundControl source code (master) and build it).")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(642),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"hardware-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),s("p",[e._v("Crazyflie 2.0 is able to fly with precise control in "),s("RouterLink",{attrs:{to:"/en/flight_modes_mc/manual_stabilized.html"}},[e._v("Stabilized mode")]),e._v(", "),s("RouterLink",{attrs:{to:"/en/flight_modes_mc/altitude.html"}},[e._v("Altitude mode")]),e._v(" and "),s("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(".")],1),e._v(" "),s("ul",[s("li",[e._v("You will need the "),s("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),s("OutboundLink")],1),e._v(" to fly in "),s("em",[e._v("Altitude")]),e._v(" mode.\nIf you also want to fly in the "),s("em",[e._v("Position")]),e._v(" mode, it is recommended you buy the "),s("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),s("OutboundLink")],1),e._v(" which also has the integrated Z-ranger sensor.")]),e._v(" "),s("li",[e._v("The onboard barometer is highly susceptible to any external wind disturbances including those created by Crazyflie's own propellers. Hence, we isolated the barometer with a piece of foam, and then mounted the distance sensor on top of it as shown below:")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(643),alt:"Crazyflie barometer"}})]),e._v(" "),s("p",[s("img",{attrs:{src:a(644),alt:"Crazyflie barometer foam"}})]),e._v(" "),s("p",[s("img",{attrs:{src:a(645),alt:"Crazyflie optical flow"}})]),e._v(" "),s("p",[e._v("In order to log flight details, you can mount SD card deck on top of crazyflie as shown below:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(646),alt:"Crazyflie SDCard"}})]),e._v(" "),s("p",[e._v("Then, you need to stick the battery on top of the SD card deck using a double sided tape:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(647),alt:"Crazyflie battery setup"}})]),e._v(" "),s("h2",{attrs:{id:"altitude-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#altitude-control"}},[e._v("#")]),e._v(" Altitude Control")]),e._v(" "),s("p",[e._v("Crazyflie is able to fly in "),s("em",[e._v("Altitude")]),e._v(" mode if you use a "),s("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),s("OutboundLink")],1),e._v(".\nAccording to the datasheet, the maximum height (above ground) the range finder can sense is 2 m. However, when tested on dark surfaces this value decreases to 0.5 m. On a light floor, it goes up to max 1.3 m. This means you cannot hold altitudes above this value in "),s("em",[e._v("Altitude")]),e._v(" or "),s("em",[e._v("Position")]),e._v(" flight modes.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("If the Crazyflie 2.0 height drifts at mid-throttle command in "),s("em",[e._v("Altitude mode")]),e._v(" or "),s("em",[e._v("Position mode")]),e._v(", first try rebooting the vehicle. If this does not fix the problem, recalibrate the accel and mag (compass).")])]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Since the onboard barometer is highly susceptible to wind disturbances created by the Crazyflie's own propellers, you cannot rely on it to hold altitude.")])]),e._v(" "),s("h2",{attrs:{id:"position-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#position-control"}},[e._v("#")]),e._v(" Position Control")]),e._v(" "),s("p",[e._v("With "),s("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),s("OutboundLink")],1),e._v(", you can fly Crazyflie 2.0 in "),s("em",[e._v("Position mode")]),e._v(".\nUnlike "),s("RouterLink",{attrs:{to:"/en/sensor/px4flow.html"}},[e._v("PX4FLOW")]),e._v(", the flow deck does not house a gyro, hence the onboard gyro is used for flow fusion to find the local position estimates.\nMoreover, the flow deck shares the same SPI bus as the SD card deck, therefore logging at high rate on SD card is not recommended when flying in "),s("em",[e._v("Position mode")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"using-frsky-taranis-rc-transmitter-as-joystick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-frsky-taranis-rc-transmitter-as-joystick"}},[e._v("#")]),e._v(" Using FrSky Taranis RC Transmitter as Joystick")]),e._v(" "),s("p",[e._v("If you already own a Taranis RC transmitter and want to use it as a controller, it can be configured as a USB Joystick:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Create a new model in Taranis.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(376),alt:"Taranis - new model"}})])]),e._v(" "),s("li",[s("p",[e._v("In "),s("em",[e._v("MODEL SETUP")]),e._v(" menu page, turn off both internal and external TX modules.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(377),alt:"Taranis - model setup"}})])]),e._v(" "),s("li",[s("p",[e._v("In "),s("em",[e._v("OUTPUTS")]),e._v(" menu page (also called “SERVOS” page in some Taranis transmitters), invert Throttle (CH1) and Aileron (CH3).")]),e._v(" "),s("p",[s("img",{attrs:{src:a(378),alt:"Taranis - outputs"}})])])]),e._v(" "),s("p",[e._v("To use Taranis switches to arm/disarm and switch to different flight modes:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("In Taranis UI "),s("em",[e._v("MIXER")]),e._v(" menu page, you can assign the switches to any channel in the range channel 9-16 which map to the buttons 0-7 in the QGroundControl Joystick setup. For example, Taranis “SD” switch can be set to channel 9 in Taranis UI:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(379),alt:"Taranis switch setup"}})])]),e._v(" "),s("li",[s("p",[e._v("Connect Taranis to PC with a USB cable and Open QGroundControl.")])]),e._v(" "),s("li",[s("p",[e._v("In QGroundControl Joystick Setup, you can see the buttons turning yellow when you switch them on. For example, channel 9 in Taranis maps to button 0 in QGroundControl Joystick setup. You can assign any mode to this button e.g. "),s("em",[e._v("Altitude")]),e._v(' mode. Now when you lower the switch "SD", flight mode will change to '),s("em",[e._v("Altitude")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(380),alt:"Joystick setup"}})])])]),e._v(" "),s("h3",{attrs:{id:"ros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ros"}},[e._v("#")]),e._v(" ROS")]),e._v(" "),s("p",[e._v("To connect to Crazyflie 2.0 via MAVROS:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Start up "),s("em",[e._v("cfbridge")]),e._v(" using the above instructions.")])]),e._v(" "),s("li",[s("p",[e._v("Change the UDP port QGroundControl listens to:")]),e._v(" "),s("ul",[s("li",[e._v("In QGroundControl, navigate to "),s("strong",[e._v("Application Settings > General")]),e._v(" and uncheck all the boxes under "),s("em",[e._v("Autoconnect to the following devices")]),e._v(".")]),e._v(" "),s("li",[e._v("Add in "),s("strong",[e._v("Comm Links")]),e._v(" a link of type "),s("em",[e._v("UDP")]),e._v(", check the "),s("em",[e._v("Automatically Connect on Start")]),e._v(" option, change the "),s("em",[e._v("Listening Port")]),e._v(" to 14557, add Target Hosts: 127.0.0.1 and then press "),s("strong",[e._v("OK")]),e._v(".")])])]),e._v(" "),s("li",[s("p",[e._v("Make sure you have "),s("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVROS"),s("OutboundLink")],1),e._v(" installed.")])]),e._v(" "),s("li",[s("p",[e._v("Start MAVROS with command:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("roslaunch mavros px4.launch fcu_url:"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"udp://:14550@127.0.0.1:14551"')]),e._v(" gcs_url:"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"udp://@127.0.0.1:14557"')]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Restart QGroundControl if it doesn't connect.")])])]),e._v(" "),s("h2",{attrs:{id:"flying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flying"}},[e._v("#")]),e._v(" Flying")]),e._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/2Bcy3k1h5uc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p")],1)}),[],!1,null,null,null);t.default=r.exports},375:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_reset_button.9cfe1cdf.jpg"},376:function(e,t,a){e.exports=a.p+"assets/img/taranis_model.6d662e29.jpg"},377:function(e,t,a){e.exports=a.p+"assets/img/taranis_model_setup.176ea7e3.jpg"},378:function(e,t,a){e.exports=a.p+"assets/img/taranis_outputs.eb6d50c0.jpg"},379:function(e,t,a){e.exports=a.p+"assets/img/taranis_switch_setup.58cae4b8.jpg"},380:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_QGCjoystick_setup.308b2294.png"},641:function(e,t,a){e.exports=a.p+"assets/img/crazyflie2_hero.4f2e6365.png"},642:function(e,t,a){e.exports=a.p+"assets/img/joystick-message-frequency.7fbc2182.png"},643:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_barometer.37ff6b19.jpg"},644:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_baro_foam.3121919f.jpg"},645:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_opticalflow.1442042e.jpg"},646:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_sdcard.439a932c.jpg"},647:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_battery_setup.8b9faff8.jpg"}}]);