(window.webpackJsonp=window.webpackJsonp||[]).push([[1093],{2123:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pilotpi-with-raspberry-pi-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pilotpi-with-raspberry-pi-os"}},[t._v("#")]),t._v(" PilotPi with Raspberry Pi OS")]),t._v(" "),a("h2",{attrs:{id:"developer-quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-quick-start"}},[t._v("#")]),t._v(" Developer Quick Start")]),t._v(" "),a("h3",{attrs:{id:"os-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os-image"}},[t._v("#")]),t._v(" OS Image")]),t._v(" "),a("p",[t._v("The latest official "),a("a",{attrs:{href:"https://downloads.raspberrypi.org/raspios_lite_armhf_latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi OS Lite"),a("OutboundLink")],1),t._v(" image is always recommended.")]),t._v(" "),a("p",[t._v("To install you must already have a working SSH connection to RPi.")]),t._v(" "),a("h3",{attrs:{id:"setting-up-access-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-access-optional"}},[t._v("#")]),t._v(" Setting up Access (Optional)")]),t._v(" "),a("h4",{attrs:{id:"hostname-and-mdns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hostname-and-mdns"}},[t._v("#")]),t._v(" Hostname and mDNS")]),t._v(" "),a("p",[t._v("mDNS helps you connect to your RasPi with hostname instead of IP address.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" raspi-config\n")])])]),a("p",[t._v("Navigate to "),a("strong",[t._v("Network Options > Hostname")]),t._v(".\nSet and exit.\nYou may want to setup "),a("a",{attrs:{href:"https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("passwordless auth"),a("OutboundLink")],1),t._v(" as well.")]),t._v(" "),a("h3",{attrs:{id:"setting-up-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-os"}},[t._v("#")]),t._v(" Setting up OS")]),t._v(" "),a("h4",{attrs:{id:"config-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-txt"}},[t._v("#")]),t._v(" config.txt")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /boot/config.txt\n")])])]),a("p",[t._v("Replace the file with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable sc16is752 overlay")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dtoverlay")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sc16is752-spi1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable I2C-1 and set the frequency to 400KHz")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dtparam")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("i2c_arm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on,i2c_arm_baudrate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable spidev0.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dtparam")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("spi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable RC input")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("enable_uart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable I2C-0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dtparam")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("i2c_vc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# switch Bluetooth to miniuart")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dtoverlay")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("miniuart-bt\n")])])]),a("h4",{attrs:{id:"cmdline-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmdline-txt"}},[t._v("#")]),t._v(" cmdline.txt")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" raspi-config\n")])])]),a("p",[a("strong",[t._v("Interfacing Options > Serial > login shell = No > hardware = Yes")]),t._v(".\nEnable UART but without a login shell on it.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /boot/cmdline.txt\n")])])]),a("p",[t._v("Append "),a("code",[t._v("isolcpus=2")]),t._v(" after the last word.\nThe whole file would be:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tty1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("root")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PARTUUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxxxxxxx-xx "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("rootfstype")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ext4 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("elevator")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("deadline fsck.repair"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes rootwait "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("isolcpus")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),a("p",[t._v("This tells the Linux kernel not to schedule any process on CPU core 2.\nWe will manually run PX4 onto that core later.")]),t._v(" "),a("p",[t._v("Reboot and SSH onto your RasPi.")]),t._v(" "),a("p",[t._v("Check UART interface:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /dev/tty*\n")])])]),a("p",[t._v("There should be "),a("code",[t._v("/dev/ttyAMA0")]),t._v(", "),a("code",[t._v("/dev/ttySC0")]),t._v(" and "),a("code",[t._v("/dev/ttySC1")]),t._v(".")]),t._v(" "),a("p",[t._v("Check I2C interface:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /dev/i2c*\n")])])]),a("p",[t._v("There should be "),a("code",[t._v("/dev/i2c-0")]),t._v(" and "),a("code",[t._v("/dev/i2c-1")])]),t._v(" "),a("p",[t._v("Check SPI interface")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /dev/spidev*\n")])])]),a("p",[t._v("There should be "),a("code",[t._v("/dev/spidev0.0")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"rc-local"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-local"}},[t._v("#")]),t._v(" rc.local")]),t._v(" "),a("p",[t._v("In this section we will configure the auto-start script in "),a("strong",[t._v("rc.local")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/rc.local\n")])])]),a("p",[t._v("Append below content to the file above "),a("code",[t._v("exit 0")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"25"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /sys/class/gpio/export\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"in"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /sys/class/gpio/gpio25/direction\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /sys/class/gpio/gpio25/value"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -eq "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Launching PX4"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/pi/px4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" taskset -c "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" ./bin/px4 -d -s pilotpi_mc.config "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /home/pi/px4/px4.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"25"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /sys/class/gpio/unexport\n")])])]),a("p",[t._v("Save and exit.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Don't forget to turn off the switch when it is not needed.")])]),t._v(" "),a("h4",{attrs:{id:"csi-camera"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csi-camera"}},[t._v("#")]),t._v(" CSI camera")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Enable CSI camera will stop anything works on I2C-0.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" raspi-config\n")])])]),a("p",[a("strong",[t._v("Interfacing Options > Camera")])]),t._v(" "),a("h3",{attrs:{id:"building-the-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-code"}},[t._v("#")]),t._v(" Building the code")]),t._v(" "),a("p",[t._v("To get the "),a("em",[t._v("very latest")]),t._v(" version onto your computer, enter the following command into a terminal:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This is all you need to do just to build the latest code.")])]),t._v(" "),a("h4",{attrs:{id:"cross-build-for-raspberry-pi-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-build-for-raspberry-pi-os"}},[t._v("#")]),t._v(" Cross build for Raspberry Pi OS")]),t._v(" "),a("p",[t._v("Set the IP (or hostname) of your RPi using:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("AUTOPILOT_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".X.X\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("AUTOPILOT_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pi_hostname.local\n")])])]),a("p",[t._v("Build the executable file:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" scumaker_pilotpi_default\n")])])]),a("p",[t._v("Then upload it with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" scumaker_pilotpi_default upload\n")])])]),a("p",[t._v("Connect over ssh and run it with:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" px4\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" taskset -c "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" ./bin/px4 -s pilotpi_mc.config\n")])])]),a("p",[t._v("Now PX4 is started with multi-rotor configuration.")]),t._v(" "),a("p",[t._v("If you encountered the similar problem executing "),a("code",[t._v("bin/px4")]),t._v(" on your Pi as following:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("bin/px4: /lib/xxxx/xxxx: version `GLIBC_2.29' not found (required by bin/px4)\n")])])]),a("p",[t._v("Then you should compile with docker instead.")]),t._v(" "),a("p",[t._v("Before proceeding to next step, clear the existing building at first:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf build/scumaker_pilotpi_default\n")])])]),a("h3",{attrs:{id:"alternative-build-method-using-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-build-method-using-docker"}},[t._v("#")]),t._v(" Alternative build method (using docker)")]),t._v(" "),a("p",[t._v("The following method can provide the same tool-sets deployed in CI.")]),t._v(" "),a("p",[t._v("If you are compiling for the first time with docker, please refer to the "),a("RouterLink",{attrs:{to:"/en/test_and_ci/docker.html#prerequisites"}},[t._v("official docs")]),t._v(".")],1),t._v(" "),a("p",[t._v("Execute the command in PX4-Autopilot folder:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./Tools/docker_run.sh "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export AUTOPILOT_HOST=192.168.X.X; export NO_NINJA_BUILD=1; make scumaker_pilotpi_default upload"')]),t._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("mDNS is not supported within docker. You must specify the correct IP address every time when uploading.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If your IDE doesn't support ninja build, "),a("code",[t._v("NO_NINJA_BUILD=1")]),t._v(" option will help.\nYou can compile without uploading too. Just remove "),a("code",[t._v("upload")]),t._v(" target.")])]),t._v(" "),a("p",[t._v("It is also possible to just compile the code with command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./Tools/docker_run.sh "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"make scumaker_pilotpi_default"')]),t._v("\n")])])]),a("h3",{attrs:{id:"post-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-configuration"}},[t._v("#")]),t._v(" Post-configuration")]),t._v(" "),a("p",[t._v("You need to check these extra items to get your vehicle work properly.")]),t._v(" "),a("h4",{attrs:{id:"actuator-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actuator-configuration"}},[t._v("#")]),t._v(" Actuator Configuration")]),t._v(" "),a("p",[t._v("First set the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CA_AIRFRAME"}},[t._v("CA_AIRFRAME")]),t._v(" parameter for your vehicle.")],1),t._v(" "),a("p",[t._v("You will then be able to assign outputs using the normal "),a("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(" configuration screen (an output tab will appear for the RasPi PWM output driver).")],1),t._v(" "),a("h4",{attrs:{id:"external-compass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-compass"}},[t._v("#")]),t._v(" External Compass")]),t._v(" "),a("p",[t._v("In the startup script("),a("code",[t._v("*.config")]),t._v("), you will find")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# external GPS & compass")]),t._v("\ngps start -d /dev/ttySC0 -i uart -p ubx -s\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#hmc5883 start -X")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ist8310 start -X")]),t._v("\n")])])]),a("p",[t._v("Uncomment the correct one for your case.\nNot sure which compass comes up with your GPS module? Execute the following commands and see the output:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" i2c-tools\ni2cdetect -y "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("p",[t._v("Sample output:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f\n00:          -- -- -- -- -- -- -- -- -- -- -- 0e --\n10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- 1e --\n20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n70: -- -- -- -- -- -- -- --\n")])])]),a("p",[a("code",[t._v("1e")]),t._v(" indicates a HMC5883 based compass is mounted on external I2C bus. Similarly, IST8310 has a value of "),a("code",[t._v("0e")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Generally you only have one of them.\nOther devices will also be displayed here if they are connected to external I2C bus.("),a("code",[t._v("/dev/i2c-0")]),t._v(")")])])])}),[],!1,null,null,null);s.default=r.exports}}]);