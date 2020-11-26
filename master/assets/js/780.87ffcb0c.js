(window.webpackJsonp=window.webpackJsonp||[]).push([[780],{1599:function(s,t,a){"use strict";a.r(t);var e=a(18),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pilotpi-with-raspberry-pi-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pilotpi-with-raspberry-pi-os"}},[s._v("#")]),s._v(" PilotPi with Raspberry Pi OS")]),s._v(" "),a("h2",{attrs:{id:"developer-quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-quick-start"}},[s._v("#")]),s._v(" Developer Quick Start")]),s._v(" "),a("h3",{attrs:{id:"os-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os-image"}},[s._v("#")]),s._v(" OS Image")]),s._v(" "),a("p",[s._v("The latest official "),a("a",{attrs:{href:"https://downloads.raspberrypi.org/raspios_lite_armhf_latest",target:"_blank",rel:"noopener noreferrer"}},[s._v("Raspberry Pi OS Lite"),a("OutboundLink")],1),s._v(" image is always recommended.")]),s._v(" "),a("p",[s._v("To install you must already have a working SSH connection to RPi.")]),s._v(" "),a("h3",{attrs:{id:"setting-up-access-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-access-optional"}},[s._v("#")]),s._v(" Setting up Access (Optional)")]),s._v(" "),a("h4",{attrs:{id:"hostname-and-mdns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hostname-and-mdns"}},[s._v("#")]),s._v(" Hostname and mDNS")]),s._v(" "),a("p",[s._v("mDNS helps you connect to your RasPi with hostname instead of IP address.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" raspi-config\n")])])]),a("p",[s._v("Navigate to "),a("strong",[s._v("Network Options > Hostname")]),s._v(".\nSet and exit.\nYou may want to setup "),a("a",{attrs:{href:"https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("passwordless auth"),a("OutboundLink")],1),s._v(" as well.")]),s._v(" "),a("h3",{attrs:{id:"setting-up-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-os"}},[s._v("#")]),s._v(" Setting up OS")]),s._v(" "),a("h4",{attrs:{id:"config-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-txt"}},[s._v("#")]),s._v(" config.txt")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /boot/config.txt\n")])])]),a("p",[s._v("Replace the file with:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable sc16is752 overlay")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtoverlay")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sc16is752-spi1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable I2C-1 and set the frequency to 400KHz")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("i2c_arm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on,i2c_arm_baudrate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable spidev0.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("spi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable RC input")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enable_uart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable I2C-0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("i2c_vc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# switch Bluetooth to miniuart")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtoverlay")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("miniuart-bt\n")])])]),a("h4",{attrs:{id:"cmdline-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmdline-txt"}},[s._v("#")]),s._v(" cmdline.txt")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" raspi-config\n")])])]),a("p",[a("strong",[s._v("Interfacing Options > Serial > login shell = No > hardware = Yes")]),s._v(".\nEnable UART but without a login shell on it.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /boot/cmdline.txt\n")])])]),a("p",[s._v("Append "),a("code",[s._v("isolcpus=2")]),s._v(" after the last word.\nThe whole file would be:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tty1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("root")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PARTUUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxxxxxxx-xx "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rootfstype")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ext4 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("elevator")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deadline fsck.repair"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes rootwait "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("isolcpus")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),a("p",[s._v("This tells the Linux kernel not to schedule any process on CPU core 2.\nWe will manually run PX4 onto that core later.")]),s._v(" "),a("p",[s._v("Reboot and SSH onto your RasPi.")]),s._v(" "),a("p",[s._v("Check UART interface:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/tty*\n")])])]),a("p",[s._v("There should be "),a("code",[s._v("/dev/ttyAMA0")]),s._v(", "),a("code",[s._v("/dev/ttySC0")]),s._v(" and "),a("code",[s._v("/dev/ttySC1")]),s._v(".")]),s._v(" "),a("p",[s._v("Check I2C interface:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/i2c*\n")])])]),a("p",[s._v("There should be "),a("code",[s._v("/dev/i2c-0")]),s._v(" and "),a("code",[s._v("/dev/i2c-1")])]),s._v(" "),a("p",[s._v("Check SPI interface")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/spidev*\n")])])]),a("p",[s._v("There should be "),a("code",[s._v("/dev/spidev0.0")]),s._v(".")]),s._v(" "),a("h4",{attrs:{id:"rc-local"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-local"}},[s._v("#")]),s._v(" rc.local")]),s._v(" "),a("p",[s._v("In this section we will configure the auto-start script in "),a("strong",[s._v("rc.local")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/rc.local\n")])])]),a("p",[s._v("Append below content to the file above "),a("code",[s._v("exit 0")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"25"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/export\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"in"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/gpio25/direction\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/class/gpio/gpio25/value"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" -eq "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Launching PX4"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/pi/px4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" taskset -c "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ./bin/px4 -d -s pilotpi_mc.config "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/pi/px4/px4.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"25"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/unexport\n")])])]),a("p",[s._v("Save and exit.")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("Note")]),s._v(" Don't forget to turn off the switch when it is not needed.")])]),s._v(" "),a("h4",{attrs:{id:"csi-camera"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csi-camera"}},[s._v("#")]),s._v(" CSI camera")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("Warning")]),s._v(" Enable CSI camera will stop anything works on I2C-0.")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" raspi-config\n")])])]),a("p",[a("strong",[s._v("Interfacing Options > Camera")])]),s._v(" "),a("h3",{attrs:{id:"building-the-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-code"}},[s._v("#")]),s._v(" Building the code")]),s._v(" "),a("p",[s._v("To get the "),a("em",[s._v("very latest")]),s._v(" version onto your computer, enter the following command into a terminal:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("Note")]),s._v(" This is all you need to do just to build the latest code.")])]),s._v(" "),a("h4",{attrs:{id:"cross-build-for-raspberry-pi-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-build-for-raspberry-pi-os"}},[s._v("#")]),s._v(" Cross build for Raspberry Pi OS")]),s._v(" "),a("p",[s._v("Set the IP (or hostname) of your RPi using:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".X.X\n")])])]),a("p",[s._v("or")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pi_hostname.local\n")])])]),a("p",[s._v("Build the executable file:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scumaker_pilotpi_default\n")])])]),a("p",[s._v("Then upload it with:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scumaker_pilotpi_default upload\n")])])]),a("p",[s._v("Connect over ssh and run it with:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" px4\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" taskset -c "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ./bin/px4 -s pilotpi_mc.config\n")])])]),a("p",[s._v("Now PX4 is started with multi-rotor configuration.")]),s._v(" "),a("p",[s._v("If you encountered the similar problem executing "),a("code",[s._v("bin/px4")]),s._v(" on your Pi as following:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("bin/px4: /lib/xxxx/xxxx: version `GLIBC_2.29' not found (required by bin/px4)\n")])])]),a("p",[s._v("Then you should compile with docker instead.")]),s._v(" "),a("p",[s._v("Before proceeding to next step, clear the existing building at first:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf build/scumaker_pilotpi_default\n")])])]),a("h3",{attrs:{id:"alternative-build-method-using-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-build-method-using-docker"}},[s._v("#")]),s._v(" Alternative build method (using docker)")]),s._v(" "),a("p",[s._v("The following method can provide the same tool-sets deployed in CI.")]),s._v(" "),a("p",[s._v("If you are compiling for the first time with docker, please refer to the "),a("RouterLink",{attrs:{to:"/en/test_and_ci/docker.html#prerequisites"}},[s._v("offical docs")]),s._v(".")],1),s._v(" "),a("p",[s._v("Execute the command in PX4-Autopilot folder:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./Tools/docker_run.sh "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export AUTOPILOT_HOST=192.168.X.X; export NO_NINJA_BUILD=1; make scumaker_pilotpi_default upload"')]),s._v("\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("Note")]),s._v(" mDNS is not supported within docker. You must specify the correct IP address every time when uploading.")])]),s._v(" "),a("p",[a("span")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("Note")]),s._v(" If your IDE doesn't support ninja build, "),a("code",[s._v("NO_NINJA_BUILD=1")]),s._v(" option will help.\nYou can compile without uploading too. Just remove "),a("code",[s._v("upload")]),s._v(" target.")])]),s._v(" "),a("p",[s._v("It is also possible to just compile the code with command:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./Tools/docker_run.sh "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"make scumaker_pilotpi_default"')]),s._v("\n")])])]),a("h3",{attrs:{id:"post-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-configuration"}},[s._v("#")]),s._v(" Post-configuration")]),s._v(" "),a("p",[s._v("You need to check these extra items to get your vehicle work properly.")]),s._v(" "),a("h4",{attrs:{id:"mixer-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixer-file"}},[s._v("#")]),s._v(" Mixer file")]),s._v(" "),a("p",[s._v("Mixer file is defined in "),a("code",[s._v("pilotpi_xx.conf")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mixer load /dev/pwm_output0 etc/mixers/quad_x.main.mix\n")])])]),a("p",[s._v("All available mixers are stored in "),a("code",[s._v("etc/mixers")]),s._v(". You can create one by yourself as well.")]),s._v(" "),a("h4",{attrs:{id:"external-compass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-compass"}},[s._v("#")]),s._v(" External compass")]),s._v(" "),a("p",[s._v("In the startup script("),a("code",[s._v("*.config")]),s._v("), you will find")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# external GPS & compass")]),s._v("\ngps start -d /dev/ttySC0 -i uart -p ubx -s\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#hmc5883 start -X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ist8310 start -X")]),s._v("\n")])])]),a("p",[s._v("Uncomment the correct one for your case.\nNot sure which compass comes up with your GPS module? Execute the following commands and see the output:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" i2c-tools\ni2cdetect -y "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),a("p",[s._v("Sample output:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f\n00:          -- -- -- -- -- -- -- -- -- -- -- 0e -- \n10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- 1e -- \n20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n70: -- -- -- -- -- -- -- --\n")])])]),a("p",[a("code",[s._v("1e")]),s._v(" indicates a HMC5883 based compass is mounted on external I2C bus. Similarly, IST8310 has a value of "),a("code",[s._v("0e")]),s._v(".")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("Note")]),s._v(" Generally you only have one of them.\nOther devices will also be displayed here if they are connected to external I2C bus.("),a("code",[s._v("/dev/i2c-0")]),s._v(")")])])])}),[],!1,null,null,null);t.default=r.exports}}]);