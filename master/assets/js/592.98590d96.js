(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{2026:function(e,t,a){"use strict";a.r(t);var s=a(18),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"snapdragon-advanced"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snapdragon-advanced"}},[e._v("#")]),e._v(" Snapdragon Advanced")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("The "),s("em",[e._v("Qualcomm Snapdragon Flight")]),e._v(" is discontinued (it has been superseded but PX4 does not yet support the newer version). This documentation is provided for existing users, but will be removed in a future release.")])]),e._v(" "),s("p",[e._v("This page is a collection of useful commands and instructions which might come in handy when working with the Snapdragon platform.")]),e._v(" "),s("h2",{attrs:{id:"connect-to-snapdragon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-snapdragon"}},[e._v("#")]),e._v(" Connect to Snapdragon")]),e._v(" "),s("h3",{attrs:{id:"over-ftdi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#over-ftdi"}},[e._v("#")]),e._v(" Over FTDI")]),e._v(" "),s("p",[e._v("The kit comes with a breakout board with three pins to access the console. Connect the bundled FTDI cable to the supplied header and the breakout board to the expansion connector.")]),e._v(" "),s("p",[e._v("On Linux, open a console using:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("screen /dev/ttyUSB0 115200\n")])])]),s("p",[e._v("Change USB0 to whatever it happens to be. Check "),s("code",[e._v("/dev/")]),e._v(" or "),s("code",[e._v("/dev/serial/by-id")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"over-adb-android-debug-bridge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#over-adb-android-debug-bridge"}},[e._v("#")]),e._v(" Over ADB (Android Debug Bridge)")]),e._v(" "),s("p",[e._v("Connect the Snapdragon over USB2.0 and power it up using the power module. When the Snapdragon is running the, the LED will be slowly blinking (breathing) in blue.")]),e._v(" "),s("p",[e._v("Make sure the board can be found using "),s("em",[e._v("adb")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("adb devices\n")])])]),s("p",[e._v("If you cannot see the device, it is most likely a USB device permission issue. Follow the instructions")]),e._v(" "),s("p",[e._v("To get a shell, do:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("adb shell\n")])])]),s("h3",{attrs:{id:"dsp-debug-monitor-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dsp-debug-monitor-console"}},[e._v("#")]),e._v(" DSP Debug Monitor/Console")]),e._v(" "),s("p",[e._v("When you are connected to your Snapdragon board via USB you have access to the PX4 shell on the DSP (POSIX). The interaction with the DSP side (QuRT) is enabled with the "),s("code",[e._v("qshell")]),e._v(" posix app and its QuRT companion.")]),e._v(" "),s("p",[e._v("With the Snapdragon connected via USB, open the mini-dm to see the output of the DSP:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("${HEXAGON_SDK_ROOT}/tools/debug/mini-dm/Linux_Debug/mini-dm\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Alternatively, especially on Mac, you can also use "),s("a",{attrs:{href:"https://github.com/kevinmehall/nano-dm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nano-dm"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("p",[e._v("Run the main app on the linaro side:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/linaro\n./px4 -s px4.config\n")])])]),s("p",[e._v("You can now use all apps loaded on the DSP from the linaro shell with the following syntax:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("pxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" qshell "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("command")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("args "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("For example, to see the available QuRT apps:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("pxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" qshell list_tasks\n")])])]),s("p",[e._v("The output of the executed command is displayed on the minidm.")]),e._v(" "),s("h2",{attrs:{id:"serial-ports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serial-ports"}},[e._v("#")]),e._v(" Serial ports")]),e._v(" "),s("p",[e._v("Not all POSIX calls are currently supported on QURT. Therefore, some custom ioctl are needed.")]),e._v(" "),s("p",[e._v("The APIs to set up and use the UART are described in "),s("a",{attrs:{href:"https://github.com/PX4/dspal/blob/master/include/dev_fs_lib_serial.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("dspal"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"wi-fi-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wi-fi-settings"}},[e._v("#")]),e._v(" Wi-Fi settings")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("ToDo These are notes for advanced developers.")])]),e._v(" "),s("p",[e._v("Connect to the Linux shell (see "),s("RouterLink",{attrs:{to:"/ko/debug/system_console.html#snapdragon-flight-wiring-the-console"}},[e._v("console instructions")]),e._v(").")],1),e._v(" "),s("h3",{attrs:{id:"access-point-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-point-mode"}},[e._v("#")]),e._v(" Access point mode")]),e._v(" "),s("p",[e._v("If you want the Snapdragon to be a wifi access point (AP mode), edit the file: "),s("strong",[e._v("/etc/hostapd.conf")]),e._v(" and set:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("ssid=EnterYourSSID\nwpa_passphrase=EnterYourPassphrase\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("The passphrase must be at least 8 characters")])]),e._v(" "),s("p",[e._v("Then configure AP mode:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("/usr/local/qr-linux/wificonfig.sh -s softap\nreboot\n")])])]),s("h3",{attrs:{id:"station-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#station-mode"}},[e._v("#")]),e._v(" Station mode")]),e._v(" "),s("p",[e._v("If you want the Snapdragon to connect to your existing wifi, edit the file: "),s("strong",[e._v("/etc/wpa_supplicant/wpa_supplicant.conf")]),e._v(" and add your network settings:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('network={\n    ssid="my existing network ssid"\n    psk="my existing password"\n}\n')])])]),s("p",[e._v("Then configure station mode:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("/usr/local/qr-linux/wificonfig.sh -s station\nreboot\n")])])]),s("h2",{attrs:{id:"using-the-cameras-on-the-snapdragon-flight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cameras-on-the-snapdragon-flight"}},[e._v("#")]),e._v(" Using the cameras on the Snapdragon Flight")]),e._v(" "),s("p",[e._v("The Snapdragon Flight board has a downward facing gray-scale camera which can be used for optical flow based position stabilization and a forward facing RGB camera. The "),s("a",{attrs:{href:"https://github.com/PX4/snap_cam",target:"_blank",rel:"noopener noreferrer"}},[e._v("snap_cam"),s("OutboundLink")],1),e._v(" repo offers a way to run and stream the different cameras and calculate the optical flow.")]),e._v(" "),s("p",[e._v("Besides a camera, optical flow requires a downward facing distance sensor. Here, the use of the TeraRanger One is discussed.")]),e._v(" "),s("h3",{attrs:{id:"optical-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow"}},[e._v("#")]),e._v(" Optical Flow")]),e._v(" "),s("p",[e._v("The optical flow is computed on the application processor and sent to PX4 through MAVLink. Clone and compile the "),s("a",{attrs:{href:"https://github.com/PX4/snap_cam",target:"_blank",rel:"noopener noreferrer"}},[e._v("snap_cam"),s("OutboundLink")],1),e._v(" repo according to the instructions in its README.")]),e._v(" "),s("p",[e._v("Run the optical flow application (90 frames per second and auto exposure) as root:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("./optical_flow -f 90 -a\n")])])]),s("p",[e._v("The optical flow application requires IMU MAVLink messages from PX4. You may have to add an additional MAVLink instance to PX4 by adding the following to your "),s("strong",[e._v("mainapp.config")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("mavlink start -u 14557 -r 1000000 -t 127.0.0.1 -o 14558\nmavlink stream -u 14557 -s HIGHRES_IMU -r 250\n")])])]),s("h3",{attrs:{id:"teraranger-one-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teraranger-one-setup"}},[e._v("#")]),e._v(" TeraRanger One Setup")]),e._v(" "),s("p",[e._v("To connect the TeraRanger One (TROne) to the Snapdragon Flight, the TROne I2C adapter must be used. The TROne must be flashed with the I2C firmware by the vendor.")]),e._v(" "),s("p",[e._v("The TROne is connected to the Snapdragon Flight through a custom DF13 4-to-6 pin cable. We recommend using connector J15 (next to USB), as all others are already in use (RC, ESCs, GPS). The wiring is as follows:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("4 pin")]),e._v(" "),s("th",[e._v("<->")]),e._v(" "),s("th",[e._v("6 pin")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("1")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("1")])]),e._v(" "),s("tr",[s("td",[e._v("2")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("6")])]),e._v(" "),s("tr",[s("td",[e._v("3")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("4")])]),e._v(" "),s("tr",[s("td",[e._v("4")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("5")])])])]),e._v(" "),s("p",[e._v("The TROne must be powered with 10 - 20V.")]),e._v(" "),s("h3",{attrs:{id:"camera-streaming-in-qgroundcontrol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#camera-streaming-in-qgroundcontrol"}},[e._v("#")]),e._v(" Camera Streaming in QGroundControl")]),e._v(" "),s("p",[e._v("To watch the live stream of either camera "),s("code",[e._v("qcamvid")]),e._v(" can be used. Run the following command on the Snapdragon Flight to stream the hires camera for 10 minutes without recording with a 720p resolution.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("qcamvid -c hires -r 720p -s -t 600\n")])])]),s("p",[e._v("Use "),s("code",[e._v("qcamvid -h")]),e._v(" to have a look at all the options.")]),e._v(" "),s("p",[e._v("To watch the live stream in QGroundControl, it has to be built with gstreamer (see "),s("a",{attrs:{href:"https://dev.qgroundcontrol.com/en/getting_started/#video-streaming",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("p",[e._v("Once installed and conneted to the Snapdragon Flight's network, the following changes have to be made in "),s("em",[e._v("QGroundControl")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(811),alt:"Snapdragon streaming settings in QGC"}})]),e._v(" "),s("h2",{attrs:{id:"accessing-i-o-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-i-o-data"}},[e._v("#")]),e._v(" Accessing I/O Data")]),e._v(" "),s("p",[e._v("Low level bus data can be accessed from code running on the aDSP, using a POSIX-like API called DSPAL."),s("br"),e._v("\nThe header files for this API are maintained on "),s("a",{attrs:{href:"https://github.com/ATLFlight/dspal",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),s("OutboundLink")],1),e._v(" and are commented with Doxygen formatted documentation in each header file. A description of the API's supported and links to the applicable header files is provided below.")]),e._v(" "),s("h3",{attrs:{id:"api-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-overview"}},[e._v("#")]),e._v(" API Overview")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ATLFlight/dspal/blob/master/include/dev_fs_lib_serial.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serial:"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ATLFlight/dspal/blob/master/include/dev_fs_lib_i2c.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C:"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ATLFlight/dspal/blob/master/include/dev_fs_lib_spi.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("SPI:"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ATLFlight/dspal/blob/master/include/dev_fs_lib_gpio.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPIO:"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Timers: "),s("a",{attrs:{href:"https://developer.qualcomm.com/software/hexagon-dsp-sdk/tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("qurt_timer.h"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Power Control: "),s("a",{attrs:{href:"https://developer.qualcomm.com/software/hexagon-dsp-sdk/tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("HAP_power.h"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"sample-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-source-code"}},[e._v("#")]),e._v(" Sample Source Code")]),e._v(" "),s("p",[e._v("The unit test code to verify each DSPAL function also represent good examples for how to call the functions."),s("br"),e._v("\nThis code is also on "),s("a",{attrs:{href:"https://github.com/ATLFlight/dspal/tree/master/test/dspal_tester",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"setting-the-serial-data-rate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-serial-data-rate"}},[e._v("#")]),e._v(" Setting the Serial Data Rate")]),e._v(" "),s("p",[e._v("The serial API does not conform to the termios convention for setting data rate through the "),s("code",[e._v("tcsetattr()")]),e._v(" function. IOCTL codes are used instead and are described in the header file linked above.")]),e._v(" "),s("h3",{attrs:{id:"timers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timers"}},[e._v("#")]),e._v(" Timers")]),e._v(" "),s("p",[e._v("Additional functions for more advanced aDSP operations are available with the prefix "),s("code",[e._v("qurt_")]),e._v(". Timer functions, for example, are available with the "),s("code",[e._v("qurt_timer")]),e._v(" prefix and are documented in the "),s("strong",[e._v("qurt_timer.h")]),e._v(" header file included with the "),s("a",{attrs:{href:"https://developer.qualcomm.com/software/hexagon-dsp-sdk/tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hexagon SDK"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"setting-the-power-level"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-power-level"}},[e._v("#")]),e._v(" Setting the Power Level")]),e._v(" "),s("p",[e._v("Using the HAP functions provided by the Hexagon SDK, it is possible to set the power level of the aDSP. This will often lead to reduced I/O latencies. More information on these API's is available in the "),s("strong",[e._v("HAP_power.h")]),e._v(" header file available in the "),s("a",{attrs:{href:"https://developer.qualcomm.com/software/hexagon-dsp-sdk/tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hexagon SDK"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("h3",{attrs:{id:"adb-does-not-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adb-does-not-work"}},[e._v("#")]),e._v(" adb does not work")]),e._v(" "),s("ul",[s("li",[e._v("Check "),s("a",{attrs:{href:"#usb-permissions"}},[e._v("permissions")])]),e._v(" "),s("li",[e._v("Make sure you are using a working Micro-USB cable.")]),e._v(" "),s("li",[e._v("Try a USB 2.0 port.")]),e._v(" "),s("li",[e._v("Try front and back ports of your computer.")])]),e._v(" "),s("h3",{attrs:{id:"usb-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usb-permissions"}},[e._v("#")]),e._v(" USB permissions")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Create a new permissions file")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" sudo -i gedit /etc/udev/rules.d/51-android.rules\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Paste this content, which enables most known devices for ADB access:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(' SUBSYSTEM=="usb", ATTRS{idVendor}=="0bb4", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0e79", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0502", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0b05", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="413c", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0489", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="091e", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="18d1", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0bb4", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="12d1", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="24e3", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="2116", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0482", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="17ef", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="1004", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="22b8", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0409", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="2080", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0955", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="2257", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="10a9", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="1d4d", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0471", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="04da", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="05c6", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="1f53", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="04e8", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="04dd", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0fce", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="0930", MODE="0666", GROUP="plugdev"\n SUBSYSTEM=="usb", ATTRS{idVendor}=="19d2", MODE="0666", GROUP="plugdev"\n')])])])]),e._v(" "),s("li",[s("p",[e._v("Set up the right permissions for the file:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" sudo chmod a+r /etc/udev/rules.d/51-android.rules\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Restart the daemon")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" sudo udevadm control --reload-rules\n sudo service udev restart\n sudo udevadm trigger\n")])])])])]),e._v(" "),s("p",[e._v("If it still doesn't work, check "),s("a",{attrs:{href:"http://askubuntu.com/questions/461729/ubuntu-is-not-detecting-my-android-device#answer-644222",target:"_blank",rel:"noopener noreferrer"}},[e._v("this answer on StackOverflow"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"board-doesn-t-start-is-boot-looping-is-bricked"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#board-doesn-t-start-is-boot-looping-is-bricked"}},[e._v("#")]),e._v(" Board doesn't start / is boot-looping / is bricked")]),e._v(" "),s("p",[e._v("If you can still connect to the board using the serial console and get to a prompt such as:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("root@linaro-developer:~#\n")])])]),s("p",[e._v("You can get into fastboot (bootloader) mode by entering:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("reboot2fastboot\n")])])]),s("p",[e._v("If the serial console is not possible, you can try to connect the Micro USB cable, and enter:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("adb wait-for-device && adb reboot bootloader\n")])])]),s("p",[e._v("Then power cycle the board. If you're lucky, "),s("em",[e._v("adb")]),e._v(" manages to connect briefly and can send the board into fastboot.")]),e._v(" "),s("p",[e._v("To check if it's in fastboot mode, use:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("fastboot devices\n")])])]),s("p",[e._v("Once you managed to get into fastboot mode, you can try "),s("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight_software_installation.html#update-linux-image"}},[e._v("updating the Android/Linux image")]),e._v(".")],1),e._v(" "),s("p",[e._v("If you happen to have a "),s("a",{attrs:{href:"#do-i-have-a-p1-or-p2-board"}},[e._v("P2 board")]),e._v(", you should be able to reset the Snapdragon to the recovery image by starting up the Snapdragon while shorting the two pins next to where J3 is written (The two rectangular pins in-between the corner hole and the MicroSD card slot almost at the edge of the board.")]),e._v(" "),s("p",[e._v("If everything fails, you probably need to request help from intrinsyc.")]),e._v(" "),s("h3",{attrs:{id:"no-space-left-on-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-space-left-on-device"}},[e._v("#")]),e._v(" No space left on device")]),e._v(" "),s("p",[e._v("Sometimes "),s("code",[e._v("make atlflight_eagle_default upload")]),e._v(" fails to upload:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("failed to copy 'px4' to '/home/linaro/px4': No space left on device\n")])])]),s("p",[e._v("This can happen if ramdumps fill up the disk. To clean up, do:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("rm -rf /var/log/ramdump/*\n")])])]),s("p",[e._v("Also, the logs might have filled the space. To delete them, do:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("rm -rf /root/log/*\n")])])]),s("h3",{attrs:{id:"undefined-plt-symbol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undefined-plt-symbol"}},[e._v("#")]),e._v(" Undefined PLT symbol")]),e._v(" "),s("h4",{attrs:{id:"fdtest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fdtest"}},[e._v("#")]),e._v(" _FDtest")]),e._v(" "),s("p",[e._v("If you see the following output on mini-dm when trying to start the px4 program, it means that you need to "),s("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight_software_installation.html#update-dsp-processor-firmware"}},[e._v("update the ADSP firmware")]),e._v(":")],1),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("[08500/03]  05:10.960  HAP:45:undefined PLT symbol _FDtest (689) /libpx4muorb_skel.so  0303  symbol.c\n")])])]),s("h4",{attrs:{id:"something-else"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#something-else"}},[e._v("#")]),e._v(" Something Else")]),e._v(" "),s("p",[e._v("If you have changed the source, presumably added functions and you see "),s("code",[e._v("undefined PLT symbol ...")]),e._v(" it means that the linking has failed.")]),e._v(" "),s("ul",[s("li",[e._v("Do the declaration and definition of your function match one to one?")]),e._v(" "),s("li",[e._v("Is your code actually getting compiled? Is the module listed in the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/atlflight/eagle/qurt-default.cmake",target:"_blank",rel:"noopener noreferrer"}},[e._v("cmake config"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Is the (added) file included in the "),s("code",[e._v("CMakeLists.txt")]),e._v("?")]),e._v(" "),s("li",[e._v("Try adding it to the POSIX build and running the compilation. The POSIX linker will inform you about linking errors at compile/linking time.")])]),e._v(" "),s("h3",{attrs:{id:"krait-update-param-xxx-failed-on-startup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#krait-update-param-xxx-failed-on-startup"}},[e._v("#")]),e._v(" krait update param XXX failed on startup")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("ERROR [platforms__posix__px4_layer] krait update param 297 failed\nERROR [platforms__posix__px4_layer] krait update param 646 failed\n\npx4 starting.\nERROR [muorb] Initialize Error calling the uorb fastrpc initalize method..\nERROR [muorb] ERROR: FastRpcWrapper Not Initialized\n")])])]),s("p",[e._v("If you get errors like the above when starting px4, try")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight_software_installation.html#update-linux-image"}},[e._v("upgrading the Linux image")])],1),e._v(" "),s("li",[e._v("and "),s("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight_software_installation.html#update-dsp-processor-firmware"}},[e._v("updating the ADSP firmware")]),e._v(". Also try to do this from a native Linux installation instead of a virtual machine. There have been "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/5303",target:"_blank",rel:"noopener noreferrer"}},[e._v("reports"),s("OutboundLink")],1),e._v(" where it didn't seem to work when done in a virtual machine.")],1),e._v(" "),s("li",[e._v("then "),s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[e._v("rebuild the px4 software")]),e._v(", by first completely deleting your existing PX4-Autopilot repo and then re-cloning it "),s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html#get_px4_code"}},[e._v("as described here")])],1),e._v(" "),s("li",[e._v("and finally "),s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html#qurt--snapdragon-based-boards"}},[e._v("rebuild and re-run it")])],1),e._v(" "),s("li",[e._v("make sure the executable bit of "),s("code",[e._v("/usr/local/qr-linux/q6-admin.sh")]),e._v(" is set: "),s("code",[e._v("adb shell chmod +x /usr/local/qr-linux/q6-admin.sh")])])]),e._v(" "),s("h3",{attrs:{id:"adsp-restarts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adsp-restarts"}},[e._v("#")]),e._v(" ADSP restarts")]),e._v(" "),s("p",[e._v("If the mini-dm console suddenly shows a whole lot of INIT output, the ADSP side has crashed. The reasons for it are not obvious, e.g. it can be some segmentation fault, null pointer exception, etc.")]),e._v(" "),s("p",[e._v("The mini-dm console output typically looks like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('[08500/02]  20:32.332  Process Sensor launched with ID=1   0130  main.c\n[08500/02]  20:32.337  mmpm_register: MMPM client for USM ADSP core 12  0117  UltrasoundStreamMgr_Mmpm.cpp\n[08500/02]  20:32.338  ADSP License DB: License validation function with id 164678 stored.  0280  adsp_license_db.cpp\n[08500/02]  20:32.338  AvsCoreSvc: StartSvcHandler Enter  0518  AdspCoreSvc.cpp\n[08500/02]  20:32.338  AdspCoreSvc: Started successfully  0534  AdspCoreSvc.cpp\n[08500/02]  20:32.342  DSPS INIT  0191  sns_init_dsps.c\n[08500/02]  20:32.342  INIT DONE  0224  sns_init_dsps.c\n[08500/02]  20:32.342  Sensors Init : waiting(1)  0160  sns_init_dsps.c\n[08500/02]  20:32.342  INIT DONE  0224  sns_init_dsps.c\n[08500/02]  20:32.342  THRD CREATE: Thread=0x39 Name(Hex)= 53, 4e, 53, 5f, 53, 4d, 47, 52  0186  qurt_elite_thread.cpp\n[08500/02]  20:32.343  THRD CREATE: Thread=0x38 Name(Hex)= 53, 4e, 53, 5f, 53, 41, 4d, 0  0186  qurt_elite_thread.cpp\n[08500/02]  20:32.343  THRD CREATE: Thread=0x37 Name(Hex)= 53, 4e, 53, 5f, 53, 43, 4d, 0  0186  qurt_elite_thread.cpp\n[08500/02]  20:32.343  THRD CREATE: Thread=0x35 Name(Hex)= 53, 4e, 53, 5f, 50, 4d, 0, 0  0186  qurt_elite_thread.cpp\n[08500/02]  20:32.343  THRD CREATE: Thread=0x34 Name(Hex)= 53, 4e, 53, 5f, 53, 53, 4d, 0  0186  qurt_elite_thread.cpp\n[08500/02]  20:32.343  THRD CREATE: Thread=0x33 Name(Hex)= 53, 4e, 53, 5f, 44, 45, 42, 55  0186  qurt_elite_thread.cpp\n[08500/02]  20:32.343  Sensors Init : ///////////init once completed///////////  0169  sns_init_dsps.c\n[08500/02]  20:32.342  loading BLSP configuration  0189  blsp_config.c\n[08500/02]  20:32.343  Sensors DIAG F3 Trace Buffer Initialized  0260  sns_init_dsps.c\n[08500/02]  20:32.345  INIT DONE  0224  sns_init_dsps.c\n[00053/03]  20:32.345  Unsupported algorithm service id 0  0953  sns_scm_ext.c\n[08500/02]  20:32.346  INIT DONE  0224  sns_init_dsps.c\n[08500/02]  20:32.347  INIT DONE  0224  sns_init_dsps.c\n[08500/02]  20:32.347  INIT DONE  0224  sns_init_dsps.c\n[08500/02]  20:32.546  HAP:159:unable to open the specified file path  0167  file.c\n[08500/04]  20:32.546  failed to open /usr/share/data/adsp/blsp.config  0204  blsp_config.c\n[08500/04]  20:32.546  QDSP6 Main.c: blsp_config_load() failed  0261  main.c\n[08500/02]  20:32.546  Loaded default UART-BAM mapping  0035  blsp_config.c\n[08500/02]  20:32.546  UART tty-1: BAM-9  0043  blsp_config.c\n[08500/02]  20:32.546  UART tty-2: BAM-6  0043  blsp_config.c\n[08500/02]  20:32.546  UART tty-3: BAM-8  0043  blsp_config.c\n[08500/02]  20:32.546  UART tty-4: BAM-2  0043  blsp_config.c\n[08500/02]  20:32.546  UART tty-5: BAM N/A  0048  blsp_config.c\n[08500/02]  20:32.546  UART tty-6: BAM N/A  0048  blsp_config.c\n[08500/02]  20:32.547  HAP:111:cannot find /oemconfig.so  0141  load.c\n[08500/03]  20:32.547  HAP:4211::error: -1: 0 == dynconfig_init(&conf, "security")   0696  sigverify.c\n[08500/02]  20:32.548  HAP:76:cannot find /voiceproc_tx.so  0141  load.c\n[08500/02]  20:32.550  HAP:76:cannot find /voiceproc_rx.so  0141  load.c\n')])])]),s("h3",{attrs:{id:"do-i-have-a-p1-or-p2-board"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#do-i-have-a-p1-or-p2-board"}},[e._v("#")]),e._v(" Do I have a P1 or P2 Board?")]),e._v(" "),s("p",[e._v("The silkscreen on the Snapdragon reads something like:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("1DN14-25-\nH9550-P1\nREV A\nQUALCOMM\n")])])]),s("p",[e._v("If you see "),s("strong",[e._v("H9550")]),e._v(", it means you have a P2 board!")]),e._v(" "),s("p",[s("strong",[e._v("Please ignore that it says -P1.")])]),e._v(" "),s("p",[e._v("Presumably P1 boards don't have a factory partition/image and therefore can't be restored to factory state.")])])}),[],!1,null,null,null);t.default=o.exports},811:function(e,t,a){e.exports=a.p+"assets/img/QGC_snapdragon_streaming_settings.d640adf5.png"}}]);