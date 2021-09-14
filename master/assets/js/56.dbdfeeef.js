(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{2719:function(e,t,o){"use strict";o.r(t);var r=o(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"crazyflie-2-0-discontinued"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#crazyflie-2-0-discontinued"}},[e._v("#")]),e._v(" Crazyflie 2.0 (Discontinued)")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("p",[r("em",[e._v("Crazyflie 2.0")]),e._v(" has been "),r("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_experimental.html"}},[e._v("discontinued/superseded")]),e._v(". Try "),r("RouterLink",{attrs:{to:"/zh/complete_vehicles/crazyflie21.html"}},[e._v("Bitcraze Crazyflie 2.1")]),e._v(" instead!")],1)]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("ul",[r("li",[e._v("PX4 does not manufacture this (or any) autopilot. Contact the "),r("a",{attrs:{href:"https://www.bitcraze.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("manufacturer"),r("OutboundLink")],1),e._v(" for hardware support or compliance issues.")]),e._v(" "),r("li",[e._v("PX4 support for this flight controller is "),r("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_experimental.html"}},[e._v("experimental")]),e._v(".")],1)])]),e._v(" "),r("p",[e._v("The Crazyflie line of micro quads was created by Bitcraze AB. An overview of the Crazyflie 2.0 can be "),r("a",{attrs:{href:"https://www.bitcraze.io/crazyflie-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("found here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:o(576),alt:"Crazyflie2 Image"}})]),e._v(" "),r("h2",{attrs:{id:"概览"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[e._v("#")]),e._v(" 概览")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("The main hardware documentation is here: https://wiki.bitcraze.io/projects:crazyflie2:index")])]),e._v(" "),r("ul",[r("li",[e._v("Main System-on-Chip: STM32F405RG\n"),r("ul",[r("li",[e._v("CPU: 168 MHz ARM Cortex M4 with single-precision FPU")]),e._v(" "),r("li",[e._v("RAM: 192 KB SRAM")])])]),e._v(" "),r("li",[e._v("nRF51822 radio and power management MCU")]),e._v(" "),r("li",[e._v("MPU9250 Accel / Gyro / Mag")]),e._v(" "),r("li",[e._v("LPS25H barometer")])]),e._v(" "),r("h2",{attrs:{id:"在哪里买"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在哪里买"}},[e._v("#")]),e._v(" 在哪里买")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/kits/products/crazyflie-2-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyflie 2.0"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/kits/products/crazyradio-pa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyradio PA 2.4 GHz USB dongle"),r("OutboundLink")],1),e._v(": used for wireless communication between "),r("em",[e._v("QGroundControl")]),e._v(" and Crazyflie 2.0.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/breakout-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breakout deck"),r("OutboundLink")],1),e._v(": breakout expansion board for connecting new peripherals.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),r("OutboundLink")],1),e._v(": contains an optical flow sensor to measure movements of the ground and a distance sensor to measure the distance to the ground. This will be useful for precise altitude and position control.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),r("OutboundLink")],1),e._v(" has the same distance sensor as the Flow deck to measure the distance to the ground. This will be useful for precise altitude control.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/sd-card-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("SD-card deck"),r("OutboundLink")],1),e._v(": used for high speed onboard logging to a micro SD card.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.logitechg.com/en-ch/product/f310-gamepad",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logitech Joystick"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"flashing-px4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flashing-px4"}},[e._v("#")]),e._v(" Flashing PX4")]),e._v(" "),r("p",[e._v("After setting up the PX4 development environment, follow these steps to install the PX4 Autopilot on the Crazyflie 2.0:")]),e._v(" "),r("ol",[r("li",[e._v("Download the source code of the PX4 Bootloader: "),r("code",[e._v("git clone https://github.com/PX4/Bootloader.git")])]),e._v(" "),r("li",[e._v("Navigate into the top directory of the source code and compile it using: "),r("code",[e._v("make crazyflie_bl")])]),e._v(" "),r("li",[e._v("Put the Crazyflie 2.0 into DFU mode by following these steps:")])]),e._v(" "),r("ul",[r("li",[e._v("Ensure it is initially unpowered.")]),e._v(" "),r("li",[e._v("Hold down the reset button (see figure below...). "),r("img",{attrs:{src:o(361),alt:"Crazyflie2 Reset Button"}})]),e._v(" "),r("li",[e._v("Plug into computer's USB port.")]),e._v(" "),r("li",[e._v("After a second, the blue LED should start blinking and after 5 seconds should start blinking faster.")]),e._v(" "),r("li",[e._v("Release button.")])]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[e._v("Install "),r("em",[e._v("dfu-util")]),e._v(":")]),e._v(" "),r("p",[e._v("sudo apt-get update\nsudo apt-get install dfu-util")])]),e._v(" "),r("li",[r("p",[e._v("Flash bootloader using "),r("em",[e._v("dfu-util")]),e._v(" and unplug Crazyflie 2.0 when done: "),r("code",[e._v("sudo dfu-util -d 0483:df11 -a 0 -s 0x08000000 -D ./build/crazyflie_bl/crazyflie_bl.bin")]),e._v(" When powering on the Crazyflie 2.0 the yellow LED should blink.")])]),e._v(" "),r("li",[r("p",[e._v("Download the source code of the PX4 autopilot: "),r("code",[e._v("git clone https://github.com/PX4/PX4-Autopilot.git")])])]),e._v(" "),r("li",[r("p",[e._v("Navigate into the top directory of the source code and compile it using: "),r("code",[e._v("make bitcraze_crazyflie_default upload")])])]),e._v(" "),r("li",[r("p",[e._v("When prompted to plug in device, plug in Crazyflie 2.0. The yellow LED should start blinking indicating bootloader mode. Then the red LED should turn on indicating that the flashing process has started.")])]),e._v(" "),r("li",[r("p",[e._v("Wait for completion.")])]),e._v(" "),r("li",[r("p",[e._v("Done! Calibrate the sensors using "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Sensors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("If QGroundControl does not connect with the vehicle, ensure that in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/bitcraze/crazyflie/nuttx-config/nsh/defconfig",target:"_blank",rel:"noopener noreferrer"}},[e._v("nuttx-config"),r("OutboundLink")],1),e._v(" for crazyflie "),r("code",[e._v("# CONFIG_DEV_LOWCONSOLE is not set")]),e._v(" is replaced by "),r("code",[e._v("CONFIG_DEV_LOWCONSOLE=y")]),e._v(". This should be done using "),r("em",[e._v("menuconfig")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("make bitcraze_crazyflie_default menuconfig\n")])])]),r("p",[e._v("or "),r("em",[e._v("qconfig")]),e._v(" (Check "),r("em",[e._v("Low-level console support")]),e._v(" under "),r("em",[e._v("Serial Driver Support")]),e._v(" in GUI):")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("make bitcraze_crazyflie_default qconfig\n")])])])]),e._v(" "),r("h2",{attrs:{id:"wireless-setup-instructions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wireless-setup-instructions"}},[e._v("#")]),e._v(" Wireless Setup Instructions")]),e._v(" "),r("p",[e._v("The onboard nRF module allows connecting to the board via Bluetooth or through the proprietary 2.4GHz Nordic ESB protocol.")]),e._v(" "),r("ul",[r("li",[e._v("A "),r("a",{attrs:{href:"https://www.bitcraze.io/crazyradio-pa/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyradio PA"),r("OutboundLink")],1),e._v(" is recommended.")]),e._v(" "),r("li",[e._v("To fly the Crazyflie 2.0 right away, the Crazyflie phone app is supported via Bluetooth.")])]),e._v(" "),r("p",[e._v("Using the official Bitcraze "),r("strong",[e._v("Crazyflie phone app")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("Connect via Bluetooth.")]),e._v(" "),r("li",[e._v("Change mode in settings to 1 or 2.")]),e._v(" "),r("li",[e._v("Calibrate via QGroundControl.")])]),e._v(" "),r("p",[e._v("Connecting via "),r("strong",[e._v("MAVLink")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("Use a Crazyradio PA alongside a compatible GCS.")]),e._v(" "),r("li",[e._v("Download the "),r("em",[e._v("crazyflie-lib-python")]),e._v(" source code: "),r("code",[e._v("git clone https://github.com/bitcraze/crazyflie-lib-python.git")])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("We will use "),r("a",{attrs:{href:"https://github.com/bitcraze/crazyflie-lib-python/blob/master/examples/cfbridge.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("cfbridge.py"),r("OutboundLink")],1),e._v(" to setup a wireless MAVlink communication link between Crazyflie 2.0 (flashed with PX4) and QGroundControl. "),r("em",[e._v("Cfbridge")]),e._v(" enables QGroundControl to communicate with the crazyradio PA. The "),r("a",{attrs:{href:"https://github.com/dennisss/cfbridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("C based cfbridge"),r("OutboundLink")],1),e._v(" is currently experiencing data loss issues, which is why we have chosen to use "),r("strong",[e._v("cfbridge.py")]),e._v(".")])]),e._v(" "),r("ul",[r("li",[e._v("Make sure you have set the udev permissions to use the USB Radio. To do this, follow the steps listed "),r("a",{attrs:{href:"https://github.com/bitcraze/crazyflie-lib-python#setting-udev-permissions",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" and "),r("strong",[e._v("restart")]),e._v(" your computer.")]),e._v(" "),r("li",[e._v("Connect a Crazyradio PA via USB.")]),e._v(" "),r("li",[e._v("Build a "),r("a",{attrs:{href:"https://virtualenv.pypa.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtual environment (local python environment)"),r("OutboundLink")],1),e._v(" with package dependencies using the following method: "),r("code",[e._v("pip install tox --user")])]),e._v(" "),r("li",[e._v("Navigate to the crazyflie-lib-python folder and type: "),r("code",[e._v("make venv")])]),e._v(" "),r("li",[e._v("Activate the virtual environment: "),r("code",[e._v("source venv-cflib/bin/activate")])]),e._v(" "),r("li",[e._v("Install required dependencies: "),r("code",[e._v("pip install -r requirements.txt --user")])])]),e._v(" "),r("p",[e._v("To connect Crazyflie 2.0 with crazyradio, "),r("strong",[e._v("launch cfbridge")]),e._v(" by following these steps:")]),e._v(" "),r("ul",[r("li",[e._v("Power off and power on Crazyflie 2.0 and wait for it to boot up.")]),e._v(" "),r("li",[e._v("Connect a Crazyflie radio device via USB.")]),e._v(" "),r("li",[e._v("Navigate to the crazyflie-lib-python folder.")]),e._v(" "),r("li",[e._v("Activate the environment: "),r("code",[e._v("source venv-cflib/bin/activate")])]),e._v(" "),r("li",[e._v("Navigate to the examples folder: "),r("code",[e._v("cd examples")])]),e._v(" "),r("li",[e._v("Launch cfbridge: "),r("code",[e._v("python cfbridge.py")])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[r("em",[e._v("Cfbridge")]),e._v(" by default tries to initiate the radio link communication on channel 80 and with crazyflie address 0xE7E7E7E7E7. If you are using "),r("a",{attrs:{href:"https://github.com/dennisss/cfbridge/blob/master/README.md#advanced-swarming",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple crazyflies and/or crazyradios"),r("OutboundLink")],1),e._v(" in the same room and want to use a different channel and/or address for each, first connect the crazyflie with QGroundControl via a USB cable and change the syslink parameters (channel, address) in QGroundControl. Next, launch the cfbridge by giving the same channel and address as the first and second arguments respectively, e.g: "),r("code",[e._v("python cfbridge.py 90 0x0202020202")])])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Open QGroundControl.")])]),e._v(" "),r("li",[r("p",[e._v("After using "),r("em",[e._v("cfbridge")]),e._v(", you can deactivate the virtualenv if you activated it by pressing "),r("code",[e._v("CTRL+z")]),e._v(". Most of the time, launching "),r("em",[e._v("cfbridge")]),e._v(" again from the same terminal doesn't connect to crazyflie, this can be solved by closing the terminal and relaunching "),r("em",[e._v("cfbridge")]),e._v(" in a new terminal.")])])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("If you change any driver in "),r("a",{attrs:{href:"https://github.com/bitcraze/crazyflie-lib-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("crazyflie-lib-python"),r("OutboundLink")],1),e._v(" or if launching "),r("em",[e._v("cfbridge")]),e._v(" in a new terminal does not find crazyflie, you can try navigating to the crazyflie-lib-python folder and run the script below to rebuild cflib.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("make venv\n")])])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("To use Joystick, set "),r("code",[e._v("COM_RC_IN_MODE")]),e._v(' in QGroundControl to "Joystick/No RC Checks". Calibrate the Joystick and set the Joystick message frequency in QGroundControl to any value between 5 to 14 Hz (10 Hz is recommended). To be able to set the frequency, the advanced option should be enabled. This is the rate at which Joystick commands are sent from QGroundControl to Crazyflie 2.0 (to do this, you will need to follow the instructions '),r("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" to obtain the latest QGroundControl source code (master) and build it).")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(577),alt:""}})]),e._v(" "),r("h2",{attrs:{id:"硬件连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#硬件连接"}},[e._v("#")]),e._v(" 硬件连接")]),e._v(" "),r("p",[e._v("Crazyflie 2.0 is able to fly with precise control in "),r("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[e._v("Stabilized mode")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(" and "),r("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(".")],1),e._v(" "),r("ul",[r("li",[e._v("You will need the "),r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),r("OutboundLink")],1),e._v(" to fly in "),r("em",[e._v("Altitude")]),e._v(" mode. If you also want to fly in the "),r("em",[e._v("Position")]),e._v(" mode, it is recommended you buy the "),r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),r("OutboundLink")],1),e._v(" which also has the integrated Z-ranger sensor.")]),e._v(" "),r("li",[e._v("The onboard barometer is highly susceptible to any external wind disturbances including those created by Crazyflie's own propellers. Hence, we isolated the barometer with a piece of foam, and then mounted the distance sensor on top of it as shown below:")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(578),alt:"Crazyflie barometer"}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(579),alt:"Crazyflie barometer foam"}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(580),alt:"Crazyflie optical flow"}})]),e._v(" "),r("p",[e._v("In order to log flight details, you can mount SD card deck on top of crazyflie as shown below:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(581),alt:"Crazyflie SDCard"}})]),e._v(" "),r("p",[e._v("Then, you need to stick the battery on top of the SD card deck using a double sided tape:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(582),alt:"Crazyflie battery setup"}})]),e._v(" "),r("h2",{attrs:{id:"altitude-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#altitude-control"}},[e._v("#")]),e._v(" Altitude Control")]),e._v(" "),r("p",[e._v("Crazyflie is able to fly in "),r("em",[e._v("Altitude")]),e._v(" mode if you use a "),r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),r("OutboundLink")],1),e._v(". According to the datasheet, the maximum height (above ground) the range finder can sense is 2 m. However, when tested on dark surfaces this value decreases to 0.5 m. On a light floor, it goes up to max 1.3 m. This means you cannot hold altitudes above this value in "),r("em",[e._v("Altitude")]),e._v(" or "),r("em",[e._v("Position")]),e._v(" flight modes.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("If the Crazyflie 2.0 height drifts at mid-throttle command in "),r("em",[e._v("Altitude mode")]),e._v(" or "),r("em",[e._v("Position mode")]),e._v(", first try rebooting the vehicle. If this does not fix the problem, recalibrate the accel and mag (compass).")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("Since the onboard barometer is highly susceptible to wind disturbances created by the Crazyflie's own propellers, you cannot rely on it to hold altitude.")])]),e._v(" "),r("h2",{attrs:{id:"position-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#position-control"}},[e._v("#")]),e._v(" Position Control")]),e._v(" "),r("p",[e._v("With "),r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),r("OutboundLink")],1),e._v(", you can fly Crazyflie 2.0 in "),r("em",[e._v("Position mode")]),e._v(". Unlike PX4flow, the flow deck does not house a gyro, hence the onboard gyro is used for flow fusion to find the local position estimates. Moreover, the flow deck shares the same SPI bus as the SD card deck, therefore logging at high rate on SD card is not recommended when flying in "),r("em",[e._v("Position mode")]),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("A ulog for flight in "),r("em",[e._v("Position")]),e._v(" mode is available "),r("a",{attrs:{href:"https://logs.px4.io/plot_app?log=a0e68bf1-e905-410f-b828-f6146dba9d45",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(". This can be used as a reference to compare your flight performance.")])]),e._v(" "),r("h2",{attrs:{id:"using-frsky-taranis-rc-transmitter-as-joystick"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-frsky-taranis-rc-transmitter-as-joystick"}},[e._v("#")]),e._v(" Using FrSky Taranis RC Transmitter as Joystick")]),e._v(" "),r("p",[e._v("If you already own a Taranis RC transmitter and want to use it as a controller, it can be configured as a USB Joystick:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Create a new model in Taranis.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(362),alt:"Taranis - new model"}})])]),e._v(" "),r("li",[r("p",[e._v("In "),r("em",[e._v("MODEL SETUP")]),e._v(" menu page, turn off both internal and external TX modules.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(363),alt:"Taranis - model setup"}})])]),e._v(" "),r("li",[r("p",[e._v("In "),r("em",[e._v("OUTPUTS")]),e._v(" menu page (also called “SERVOS” page in some Taranis transmitters), invert Throttle (CH1) and Aileron (CH3).")]),e._v(" "),r("p",[r("img",{attrs:{src:o(364),alt:"Taranis - outputs"}})])])]),e._v(" "),r("p",[e._v("To use Taranis switches to arm/disarm and switch to different flight modes:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("In Taranis UI "),r("em",[e._v("MIXER")]),e._v(" menu page, you can assign the switches to any channel in the range channel 9-16 which map to the buttons 0-7 in the QGroundControl Joystick setup. For example, Taranis “SD” switch can be set to channel 9 in Taranis UI:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(365),alt:"Taranis switch setup"}})])]),e._v(" "),r("li",[r("p",[e._v("Connect Taranis to PC with a USB cable and Open QGroundControl.")])]),e._v(" "),r("li",[r("p",[e._v("In QGroundControl Joystick Setup, you can see the buttons turning yellow when you switch them on. For example, channel 9 in Taranis maps to button 0 in QGroundControl Joystick setup. You can assign any mode to this button e.g. "),r("em",[e._v("Altitude")]),e._v(' mode. Now when you lower the switch "SD", flight mode will change to '),r("em",[e._v("Altitude")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:o(366),alt:"Joystick setup"}})])])]),e._v(" "),r("h3",{attrs:{id:"ros"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ros"}},[e._v("#")]),e._v(" ROS")]),e._v(" "),r("p",[e._v("To connect to Crazyflie 2.0 via MAVROS:")]),e._v(" "),r("ul",[r("li",[e._v("Start up "),r("em",[e._v("cfbridge")]),e._v(" using the above instructions.")]),e._v(" "),r("li",[e._v("Change the UDP port QGroundControl listens to:\n"),r("ul",[r("li",[e._v("In QGroundControl, navigate to "),r("strong",[e._v("Application Settings > General")]),e._v(" and uncheck all the boxes under "),r("em",[e._v("Autoconnect to the following devices")]),e._v(".")]),e._v(" "),r("li",[e._v("Add in "),r("strong",[e._v("Comm Links")]),e._v(" a link of type "),r("em",[e._v("UDP")]),e._v(", check the "),r("em",[e._v("Automatically Connect on Start")]),e._v(" option, change the "),r("em",[e._v("Listening Port")]),e._v(" to 14557, add Target Hosts: 127.0.0.1 and then press "),r("strong",[e._v("OK")]),e._v(".")])])]),e._v(" "),r("li",[e._v("Make sure you have "),r("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVROS"),r("OutboundLink")],1),e._v(" installed.")]),e._v(" "),r("li",[e._v("Start MAVROS with command: "),r("code",[e._v('roslaunch mavros px4.launch fcu_url:="udp://:14550@127.0.0.1:14551" gcs_url:="udp://@127.0.0.1:14557"')])]),e._v(" "),r("li",[e._v("Restart QGroundControl if it doesn't connect.")])]),e._v(" "),r("h2",{attrs:{id:"飞行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#飞行"}},[e._v("#")]),e._v(" 飞行")]),e._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/2Bcy3k1h5uc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p")])}),[],!1,null,null,null);t.default=a.exports},361:function(e,t,o){e.exports=o.p+"assets/img/crazyflie_reset_button.9cfe1cdf.jpg"},362:function(e,t,o){e.exports=o.p+"assets/img/taranis_model.6d662e29.jpg"},363:function(e,t,o){e.exports=o.p+"assets/img/taranis_model_setup.176ea7e3.jpg"},364:function(e,t,o){e.exports=o.p+"assets/img/taranis_outputs.eb6d50c0.jpg"},365:function(e,t,o){e.exports=o.p+"assets/img/taranis_switch_setup.58cae4b8.jpg"},366:function(e,t,o){e.exports=o.p+"assets/img/crazyflie_QGCjoystick_setup.308b2294.png"},576:function(e,t,o){e.exports=o.p+"assets/img/crazyflie2_hero.4f2e6365.png"},577:function(e,t,o){e.exports=o.p+"assets/img/joystick-message-frequency.c0ff56e8.png"},578:function(e,t,o){e.exports=o.p+"assets/img/crazyflie_barometer.37ff6b19.jpg"},579:function(e,t,o){e.exports=o.p+"assets/img/crazyflie_baro_foam.3121919f.jpg"},580:function(e,t,o){e.exports=o.p+"assets/img/crazyflie_opticalflow.1442042e.jpg"},581:function(e,t,o){e.exports=o.p+"assets/img/crazyflie_sdcard.439a932c.jpg"},582:function(e,t,o){e.exports=o.p+"assets/img/crazyflie_battery_setup.8b9faff8.jpg"}}]);