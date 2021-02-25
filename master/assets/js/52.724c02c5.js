(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1471:function(e,t,a){"use strict";a.r(t);var o=a(18),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"crazyflie-2-0"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#crazyflie-2-0"}},[e._v("#")]),e._v(" Crazyflie 2.0")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),o("a",{attrs:{href:"https://www.bitcraze.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("manufacturer"),o("OutboundLink")],1),e._v(" for hardware support or compliance issues.")])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("PX4 support for this flight controller is "),o("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_experimental.html"}},[e._v("experimental")]),e._v(".")],1)]),e._v(" "),o("p",[e._v("The Crazyflie line of micro quads was created by Bitcraze AB.An overview of the Crazyflie 2.0 can be "),o("a",{attrs:{href:"https://www.bitcraze.io/crazyflie-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("found here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:a(569),alt:"Crazyflie2 Image"}})]),e._v(" "),o("h2",{attrs:{id:"quick-summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[e._v("#")]),e._v(" Quick Summary")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The main hardware documentation is here: https://wiki.bitcraze.io/projects:crazyflie2:index")])]),e._v(" "),o("ul",[o("li",[e._v("Main System-on-Chip: STM32F405RG\n"),o("ul",[o("li",[e._v("CPU: 168 MHz ARM Cortex M4 with single-precision FPU")]),e._v(" "),o("li",[e._v("RAM: 192 KB SRAM")])])]),e._v(" "),o("li",[e._v("nRF51822 radio and power management MCU")]),e._v(" "),o("li",[e._v("MPU9250 Accel / Gyro / Mag")]),e._v(" "),o("li",[e._v("LPS25H barometer")])]),e._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://store.bitcraze.io/collections/kits/products/crazyflie-2-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyflie 2.0"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://store.bitcraze.io/collections/kits/products/crazyradio-pa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyradio PA 2.4 GHz USB dongle"),o("OutboundLink")],1),e._v(": used for wireless communication between "),o("em",[e._v("QGroundControl")]),e._v(" and Crazyflie 2.0.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/breakout-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breakout deck"),o("OutboundLink")],1),e._v(": breakout expansion board for connecting new peripherals.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),o("OutboundLink")],1),e._v(": contains an optical flow sensor to measure movements of the ground and a distance sensor to measure the distance to the ground.\nThis will be useful for precise altitude and position control.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),o("OutboundLink")],1),e._v(" has the same distance sensor as the Flow deck to measure the distance to the ground.\nThis will be useful for precise altitude control.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/sd-card-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("SD-card deck"),o("OutboundLink")],1),e._v(": used for high speed onboard logging to a micro SD card.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.logitechg.com/en-ch/product/f310-gamepad",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logitech Joystick"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"flashing-px4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flashing-px4"}},[e._v("#")]),e._v(" Flashing PX4")]),e._v(" "),o("p",[e._v("After setting up the PX4 development environment, follow these steps to install the PX4 Autopilot on the Crazyflie 2.0:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Download the source code of the PX4 Bootloader:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("git clone https://github.com/PX4/Bootloader.git\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Navigate into the top directory of the source code and compile it using:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make crazyflie_bl\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Put the Crazyflie 2.0 into DFU mode by following these steps:")]),e._v(" "),o("ul",[o("li",[e._v("Ensure it is initially unpowered.")]),e._v(" "),o("li",[e._v("Hold down the reset button (see figure below...).\n"),o("img",{attrs:{src:a(355),alt:"Crazyflie2 Reset Button"}})]),e._v(" "),o("li",[e._v("Plug into computer's USB port.")]),e._v(" "),o("li",[e._v("After a second, the blue LED should start blinking and after 5 seconds should start blinking faster.")]),e._v(" "),o("li",[e._v("Release button.")])])]),e._v(" "),o("li",[o("p",[e._v("Install "),o("em",[e._v("dfu-util")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sudo apt-get update\nsudo apt-get install dfu-util\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Flash bootloader using "),o("em",[e._v("dfu-util")]),e._v(" and unplug Crazyflie 2.0 when done:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sudo dfu-util -d 0483:df11 -a 0 -s 0x08000000 -D ./build/crazyflie_bl/crazyflie_bl.bin\n")])])]),o("p",[e._v("When powering on the Crazyflie 2.0 the yellow LED should blink.")])]),e._v(" "),o("li",[o("p",[e._v("Download the source code of the PX4 autopilot:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("git clone https://github.com/PX4/PX4-Autopilot.git\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Navigate into the top directory of the source code and compile it using:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make bitcraze_crazyflie_default upload\n")])])])]),e._v(" "),o("li",[o("p",[e._v("When prompted to plug in device, plug in Crazyflie 2.0.\nThe yellow LED should start blinking indicating bootloader mode.\nThen the red LED should turn on indicating that the flashing process has started.")])]),e._v(" "),o("li",[o("p",[e._v("Wait for completion.")])]),e._v(" "),o("li",[o("p",[e._v("Done! Calibrate the sensors using "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Sensors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),o("OutboundLink")],1),e._v(".")])])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("If QGroundControl does not connect with the vehicle, ensure that in "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/bitcraze/crazyflie/nuttx-config/nsh/defconfig",target:"_blank",rel:"noopener noreferrer"}},[e._v("nuttx-config"),o("OutboundLink")],1),e._v(" for crazyflie "),o("code",[e._v("# CONFIG_DEV_LOWCONSOLE is not set")]),e._v(" is replaced by "),o("code",[e._v("CONFIG_DEV_LOWCONSOLE=y")]),e._v(".\nThis should be done using "),o("em",[e._v("menuconfig")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make bitcraze_crazyflie_default menuconfig\n")])])]),o("p",[e._v("or "),o("em",[e._v("qconfig")]),e._v(" (Check "),o("em",[e._v("Low-level console support")]),e._v(" under "),o("em",[e._v("Serial Driver Support")]),e._v(" in GUI):")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make bitcraze_crazyflie_default qconfig\n")])])])]),e._v(" "),o("h2",{attrs:{id:"wireless-setup-instructions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wireless-setup-instructions"}},[e._v("#")]),e._v(" Wireless Setup Instructions")]),e._v(" "),o("p",[e._v("The onboard nRF module allows connecting to the board via Bluetooth or through the proprietary 2.4GHz Nordic ESB protocol.")]),e._v(" "),o("ul",[o("li",[e._v("A "),o("a",{attrs:{href:"https://www.bitcraze.io/crazyradio-pa/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyradio PA"),o("OutboundLink")],1),e._v(" is recommended.")]),e._v(" "),o("li",[e._v("To fly the Crazyflie 2.0 right away, the Crazyflie phone app is supported via Bluetooth.")])]),e._v(" "),o("p",[e._v("Using the official Bitcraze "),o("strong",[e._v("Crazyflie phone app")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("Connect via Bluetooth.")]),e._v(" "),o("li",[e._v("Change mode in settings to 1 or 2.")]),e._v(" "),o("li",[e._v("Calibrate via QGroundControl.")])]),e._v(" "),o("p",[e._v("Connecting via "),o("strong",[e._v("MAVLink")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("Use a Crazyradio PA alongside a compatible GCS.")]),e._v(" "),o("li",[e._v("Download the "),o("em",[e._v("crazyflie-lib-python")]),e._v(" source code:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("git clone https://github.com/bitcraze/crazyflie-lib-python.git\n")])])])])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("We will use "),o("a",{attrs:{href:"https://github.com/bitcraze/crazyflie-lib-python/blob/master/examples/cfbridge.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("cfbridge.py"),o("OutboundLink")],1),e._v(" to setup a wireless MAVlink communication link between Crazyflie 2.0 (flashed with PX4) and QGroundControl. "),o("em",[e._v("Cfbridge")]),e._v(" enables QGroundControl to communicate with the crazyradio PA.\nThe "),o("a",{attrs:{href:"https://github.com/dennisss/cfbridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("C based cfbridge"),o("OutboundLink")],1),e._v(" is currently experiencing data loss issues, which is why we have chosen to use "),o("strong",[e._v("cfbridge.py")]),e._v(".")])]),e._v(" "),o("ul",[o("li",[e._v("Make sure you have set the udev permissions to use the USB Radio. To do this, follow the steps listed "),o("a",{attrs:{href:"https://github.com/bitcraze/crazyflie-lib-python#setting-udev-permissions",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" and "),o("strong",[e._v("restart")]),e._v(" your computer.")]),e._v(" "),o("li",[e._v("Connect a Crazyradio PA via USB.")]),e._v(" "),o("li",[e._v("Build a "),o("a",{attrs:{href:"https://virtualenv.pypa.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtual environment (local python environment)"),o("OutboundLink")],1),e._v(" with package dependencies using the following method:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("pip install tox --user\n")])])])]),e._v(" "),o("li",[e._v("Navigate to the crazyflie-lib-python folder and type:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make venv\n")])])])]),e._v(" "),o("li",[e._v("Activate the virtual environment:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("source venv-cflib/bin/activate\n")])])])]),e._v(" "),o("li",[e._v("Install required dependencies:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("pip install -r requirements.txt --user\n")])])])])]),e._v(" "),o("p",[e._v("To connect Crazyflie 2.0 with crazyradio, "),o("strong",[e._v("launch cfbridge")]),e._v(" by following these steps:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Power off and power on Crazyflie 2.0 and wait for it to boot up.")])]),e._v(" "),o("li",[o("p",[e._v("Connect a Crazyflie radio device via USB.")])]),e._v(" "),o("li",[o("p",[e._v("Navigate to the crazyflie-lib-python folder.")])]),e._v(" "),o("li",[o("p",[e._v("Activate the environment:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("source venv-cflib/bin/activate\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Navigate to the examples folder:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd examples\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Launch cfbridge:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("python cfbridge.py\n")])])]),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[o("em",[e._v("Cfbridge")]),e._v(" by default tries to initiate the radio link communication on channel 80 and with crazyflie address 0xE7E7E7E7E7.\nIf you are using "),o("a",{attrs:{href:"https://github.com/dennisss/cfbridge/blob/master/README.md#advanced-swarming",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple crazyflies and/or crazyradios"),o("OutboundLink")],1),e._v(" in the same room and want to use a different channel and/or address for each, first connect the crazyflie with QGroundControl via a USB cable and change the syslink parameters (channel, address) in QGroundControl.\nNext, launch the cfbridge by giving the same channel and address as   the first and second arguments respectively, e.g: "),o("code",[e._v("python cfbridge.py 90 0x0202020202")])])])]),e._v(" "),o("li",[o("p",[e._v("Open QGroundControl.")])]),e._v(" "),o("li",[o("p",[e._v("After using "),o("em",[e._v("cfbridge")]),e._v(", you can deactivate the virtualenv if you activated it by pressing "),o("code",[e._v("CTRL+z")]),e._v(".\nMost of the time, launching "),o("em",[e._v("cfbridge")]),e._v(" again from the same terminal doesn't connect to crazyflie, this can be solved by closing the terminal and relaunching "),o("em",[e._v("cfbridge")]),e._v(" in a new terminal.")])])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("If you change any driver in "),o("a",{attrs:{href:"https://github.com/bitcraze/crazyflie-lib-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("crazyflie-lib-python"),o("OutboundLink")],1),e._v(" or if launching "),o("em",[e._v("cfbridge")]),e._v(" in a new terminal does not find crazyflie, you can try navigating to the crazyflie-lib-python folder and run the script below to rebuild cflib.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make venv\n")])])])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("To use Joystick, set "),o("code",[e._v("COM_RC_IN_MODE")]),e._v(' in QGroundControl to "Joystick/No RC Checks".\nCalibrate the Joystick and set the Joystick message frequency in QGroundControl to any value between 5 to 14 Hz (10 Hz is recommended).\nTo be able to set the frequency, the advanced option should be enabled.\nThis is the rate at which Joystick commands are sent from QGroundControl to Crazyflie 2.0 (to do this, you will need to follow the instructions '),o("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" to obtain the latest QGroundControl source code (master) and build it).")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(570),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"hardware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),o("p",[e._v("Crazyflie 2.0 is able to fly with precise control in "),o("RouterLink",{attrs:{to:"/en/flight_modes/manual_stabilized_mc.html"}},[e._v("Stabilized mode")]),e._v(", "),o("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(" and "),o("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(".")],1),e._v(" "),o("ul",[o("li",[e._v("You will need the "),o("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),o("OutboundLink")],1),e._v(" to fly in "),o("em",[e._v("Altitude")]),e._v(" mode.\nIf you also want to fly in the "),o("em",[e._v("Position")]),e._v(" mode, it is recommended you buy the "),o("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),o("OutboundLink")],1),e._v(" which also has the integrated Z-ranger sensor.")]),e._v(" "),o("li",[e._v("The onboard barometer is highly susceptible to any external wind disturbances including those created by Crazyflie's own propellers. Hence, we isolated the barometer with a piece of foam, and then mounted the distance sensor on top of it as shown below:")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(571),alt:"Crazyflie barometer"}})]),e._v(" "),o("p",[o("img",{attrs:{src:a(572),alt:"Crazyflie barometer foam"}})]),e._v(" "),o("p",[o("img",{attrs:{src:a(573),alt:"Crazyflie optical flow"}})]),e._v(" "),o("p",[e._v("In order to log flight details, you can mount SD card deck on top of crazyflie as shown below:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(574),alt:"Crazyflie SDCard"}})]),e._v(" "),o("p",[e._v("Then, you need to stick the battery on top of the SD card deck using a double sided tape:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(575),alt:"Crazyflie battery setup"}})]),e._v(" "),o("h2",{attrs:{id:"altitude-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#altitude-control"}},[e._v("#")]),e._v(" Altitude Control")]),e._v(" "),o("p",[e._v("Crazyflie is able to fly in "),o("em",[e._v("Altitude")]),e._v(" mode if you use a "),o("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),o("OutboundLink")],1),e._v(".\nAccording to the datasheet, the maximum height (above ground) the range finder can sense is 2 m. However, when tested on dark surfaces this value decreases to 0.5 m. On a light floor, it goes up to max 1.3 m. This means you cannot hold altitudes above this value in "),o("em",[e._v("Altitude")]),e._v(" or "),o("em",[e._v("Position")]),e._v(" flight modes.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("If the Crazyflie 2.0 height drifts at mid-throttle command in "),o("em",[e._v("Altitude mode")]),e._v(" or "),o("em",[e._v("Position mode")]),e._v(", first try rebooting the vehicle. If this does not fix the problem, recalibrate the accel and mag (compass).")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Since the onboard barometer is highly susceptible to wind disturbances created by the Crazyflie's own propellers, you cannot rely on it to hold altitude.")])]),e._v(" "),o("h2",{attrs:{id:"position-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#position-control"}},[e._v("#")]),e._v(" Position Control")]),e._v(" "),o("p",[e._v("With "),o("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),o("OutboundLink")],1),e._v(", you can fly Crazyflie 2.0 in "),o("em",[e._v("Position mode")]),e._v(".\nUnlike PX4flow, the flow deck does not house a gyro, hence the onboard gyro is used for flow fusion to find the local position estimates.\nMoreover, the flow deck shares the same SPI bus as the SD card deck, therefore logging at high rate on SD card is not recommended when flying in "),o("em",[e._v("Position mode")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("A ulog for flight in "),o("em",[e._v("Position")]),e._v(" mode is available "),o("a",{attrs:{href:"https://logs.px4.io/plot_app?log=a0e68bf1-e905-410f-b828-f6146dba9d45",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".\nThis can be used as a reference to compare your flight performance.")])]),e._v(" "),o("h2",{attrs:{id:"using-frsky-taranis-rc-transmitter-as-joystick"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-frsky-taranis-rc-transmitter-as-joystick"}},[e._v("#")]),e._v(" Using FrSky Taranis RC Transmitter as Joystick")]),e._v(" "),o("p",[e._v("If you already own a Taranis RC transmitter and want to use it as a controller, it can be configured as a USB Joystick:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Create a new model in Taranis.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(356),alt:"Taranis - new model"}})])]),e._v(" "),o("li",[o("p",[e._v("In "),o("em",[e._v("MODEL SETUP")]),e._v(" menu page, turn off both internal and external TX modules.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(357),alt:"Taranis - model setup"}})])]),e._v(" "),o("li",[o("p",[e._v("In "),o("em",[e._v("OUTPUTS")]),e._v(" menu page (also called “SERVOS” page in some Taranis transmitters), invert Throttle (CH1) and Aileron (CH3).")]),e._v(" "),o("p",[o("img",{attrs:{src:a(358),alt:"Taranis - outputs"}})])])]),e._v(" "),o("p",[e._v("To use Taranis switches to arm/disarm and switch to different flight modes:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("In Taranis UI "),o("em",[e._v("MIXER")]),e._v(" menu page, you can assign the switches to any channel in the range channel 9-16 which map to the buttons 0-7 in the QGroundControl Joystick setup. For example, Taranis “SD” switch can be set to channel 9 in Taranis UI:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(359),alt:"Taranis switch setup"}})])]),e._v(" "),o("li",[o("p",[e._v("Connect Taranis to PC with a USB cable and Open QGroundControl.")])]),e._v(" "),o("li",[o("p",[e._v("In QGroundControl Joystick Setup, you can see the buttons turning yellow when you switch them on. For example, channel 9 in Taranis maps to button 0 in QGroundControl Joystick setup. You can assign any mode to this button e.g. "),o("em",[e._v("Altitude")]),e._v(' mode. Now when you lower the switch "SD", flight mode will change to '),o("em",[e._v("Altitude")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:a(360),alt:"Joystick setup"}})])])]),e._v(" "),o("h3",{attrs:{id:"ros"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ros"}},[e._v("#")]),e._v(" ROS")]),e._v(" "),o("p",[e._v("To connect to Crazyflie 2.0 via MAVROS:")]),e._v(" "),o("ul",[o("li",[e._v("Start up "),o("em",[e._v("cfbridge")]),e._v(" using the above instructions.")]),e._v(" "),o("li",[e._v("Change the UDP port QGroundControl listens to:\n"),o("ul",[o("li",[e._v("In QGroundControl, navigate to "),o("strong",[e._v("Application Settings > General")]),e._v(" and uncheck all the boxes under "),o("em",[e._v("Autoconnect to the following devices")]),e._v(".")]),e._v(" "),o("li",[e._v("Add in "),o("strong",[e._v("Comm Links")]),e._v(" a link of type "),o("em",[e._v("UDP")]),e._v(", check the "),o("em",[e._v("Automatically Connect on Start")]),e._v(" option, change the "),o("em",[e._v("Listening Port")]),e._v(" to 14557, add Target Hosts: 127.0.0.1 and then press "),o("strong",[e._v("OK")]),e._v(".")])])]),e._v(" "),o("li",[e._v("Make sure you have "),o("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVROS"),o("OutboundLink")],1),e._v(" installed.")]),e._v(" "),o("li",[e._v("Start MAVROS with command:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('roslaunch mavros px4.launch fcu_url:="udp://:14550@127.0.0.1:14551" gcs_url:="udp://@127.0.0.1:14557"\n')])])])]),e._v(" "),o("li",[e._v("Restart QGroundControl if it doesn't connect.")])]),e._v(" "),o("h2",{attrs:{id:"flying"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flying"}},[e._v("#")]),e._v(" Flying")]),e._v(" "),o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/2Bcy3k1h5uc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p")])}),[],!1,null,null,null);t.default=r.exports},355:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_reset_button.9cfe1cdf.jpg"},356:function(e,t,a){e.exports=a.p+"assets/img/taranis_model.6d662e29.jpg"},357:function(e,t,a){e.exports=a.p+"assets/img/taranis_model_setup.176ea7e3.jpg"},358:function(e,t,a){e.exports=a.p+"assets/img/taranis_outputs.eb6d50c0.jpg"},359:function(e,t,a){e.exports=a.p+"assets/img/taranis_switch_setup.58cae4b8.jpg"},360:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_QGCjoystick_setup.308b2294.png"},569:function(e,t,a){e.exports=a.p+"assets/img/crazyflie2_hero.4f2e6365.png"},570:function(e,t,a){e.exports=a.p+"assets/img/joystick-message-frequency.c0ff56e8.png"},571:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_barometer.37ff6b19.jpg"},572:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_baro_foam.3121919f.jpg"},573:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_opticalflow.1442042e.jpg"},574:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_sdcard.439a932c.jpg"},575:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_battery_setup.8b9faff8.jpg"}}]);