(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{1969:function(e,t,a){"use strict";a.r(t);var s=a(18),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"비글본-블루"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비글본-블루"}},[e._v("#")]),e._v(" 비글본 블루")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("PX4 does not manufacture this (or any) autopilot. Contact the "),s("a",{attrs:{href:"https://beagleboard.org/blue",target:"_blank",rel:"noopener noreferrer"}},[e._v("manufacturer"),s("OutboundLink")],1),e._v(" for hardware support or compliance issues.")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("PX4 support for this flight controller is "),s("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[e._v("experimental")]),e._v(".")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://beagleboard.org/blue",target:"_blank",rel:"noopener noreferrer"}},[e._v("BeagleBone Blue"),s("OutboundLink")],1),e._v(" is an all-in-one Linux-based computer. Although it is optimized for robotics, this compact and inexpensive board has all necessary sensors and peripherals needed by a flight controller. This topic shows how to set up the board to run PX4 with "),s("a",{attrs:{href:"https://github.com/StrawsonDesign/librobotcontrol",target:"_blank",rel:"noopener noreferrer"}},[e._v("librobotcontrol"),s("OutboundLink")],1),e._v(" robotics package.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(702),alt:"BeagleBone - labelled diagram"}})]),e._v(" "),s("h2",{attrs:{id:"os-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-image"}},[e._v("#")]),e._v(" OS Image")]),e._v(" "),s("p",[s("em",[e._v("BeagleBone Blue")]),e._v(" images can be found here:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://beagleboard.org/latest-images",target:"_blank",rel:"noopener noreferrer"}},[e._v("가장 안정적인 OS 이미지 "),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://rcn-ee.net/rootfs/bb.org/testing/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" 테스트 OS 이미지 "),s("OutboundLink")],1),e._v("(자주 업데이트됨).")])]),e._v(" "),s("p",[e._v("Information about flashing OS images can be found on "),s("a",{attrs:{href:"https://github.com/beagleboard/beaglebone-blue/wiki/Flashing-firmware",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),s("OutboundLink")],1),e._v(". Other useful information can be found in the "),s("a",{attrs:{href:"https://github.com/beagleboard/beaglebone-blue/wiki/Frequently-Asked-Questions-(FAQ)",target:"_blank",rel:"noopener noreferrer"}},[e._v("FAQ"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Optionally you can update to a realtime kernel, and if you do, re-check if "),s("em",[e._v("librobotcontrol")]),e._v(" works properly with the realtime kernel.")])]),e._v(" "),s("p",[e._v("The latest OS images at time of updating this document is "),s("a",{attrs:{href:"https://debian.beagleboard.org/images/bone-debian-9.9-iot-armhf-2019-08-03-4gb.img.xz",target:"_blank",rel:"noopener noreferrer"}},[e._v("bone-debian-9.9-iot-armhf-2019-08-03-4gb.img.xz"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"cross-compiler-build-recommend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-compiler-build-recommend"}},[e._v("#")]),e._v(" Cross Compiler Build (Recommend)")]),e._v(" "),s("p",[e._v("The recommended way to build PX4 for "),s("em",[e._v("BeagleBone Blue")]),e._v(" is to compile on a development computer and upload the PX4 executable binary directly to the BeagleBone Blue.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("This approach is recommended over "),s("a",{attrs:{href:"#native_builds"}},[e._v("native build")]),e._v(" due to speed of deployment and ease of use.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Note The PX4 build requires "),s("a",{attrs:{href:"http://strawsondesign.com/docs/librobotcontrol/",target:"_blank",rel:"noopener noreferrer"}},[e._v("librobotcontrol"),s("OutboundLink")],1),e._v(" which is automatically included in the build (but it can be installed and tested independently if required).")])]),e._v(" "),s("h3",{attrs:{id:"beaglebone-blue-wifi-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beaglebone-blue-wifi-setup"}},[e._v("#")]),e._v(" Beaglebone Blue WIFI Setup")]),e._v(" "),s("p",[e._v("For easy access to your board, you can connect it to your home network via wifi.")]),e._v(" "),s("p",[e._v("The steps are (execute on the board):")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v("\nconnmanctl\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("scan wifi\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("services\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#(at this point you should see your network SSID appear.)")]),e._v("\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("agent on\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("connect "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("SSID"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("quit\n")])])]),s("h3",{attrs:{id:"ssh-root-login-on-beaglebone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-root-login-on-beaglebone"}},[e._v("#")]),e._v(" SSH root Login on Beaglebone")]),e._v(" "),s("p",[e._v("Root login can be enabled on the board with:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PermitRootLogin yes"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v("  /etc/ssh/sshd_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" systemctl restart sshd\n")])])]),s("h3",{attrs:{id:"cross-compiler-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-compiler-setup"}},[e._v("#")]),e._v(" Cross Compiler Setup")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("First set up "),s("em",[e._v("rsync")]),e._v(" (this is is used to transfer files from the development computer to the target board over a network - WiFi or Ethernet). For "),s("em",[e._v("rsync")]),e._v(" over SSH with key authentication, follow the steps here (on the development machine):")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Generate an SSH key if you have not previously done so:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" ssh-keygen -t rsa\n")])])]),s("ol",[s("li",[e._v("ENTER //no passphrase")]),e._v(" "),s("li",[e._v("ENTER")]),e._v(" "),s("li",[e._v("ENTER")])])]),e._v(" "),s("li",[s("p",[e._v("Define the BeagleBone Blue board as "),s("code",[e._v("beaglebone")]),e._v(" in "),s("strong",[e._v("/etc/hosts")]),e._v(" and copy the public SSH key to the board for password-less SSH access:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" ssh-copy-id root@beaglebone\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Alternatively you can use the beaglebone's IP directly: "),s("code",[e._v("ssh-copy-id root@<IP>")])])]),e._v(" "),s("li",[s("p",[e._v("When prompted if you trust: yes")])]),e._v(" "),s("li",[s("p",[e._v("Enter root password")])])])]),e._v(" "),s("li",[s("p",[e._v("Cross Compile Setup")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Toolchain download")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("First install the toolchain into "),s("em",[e._v("/opt/bbblue_toolchain/gcc-arm-linux-gnueabihf")]),e._v(". Here is an example of using soft link to select which version of the toolchain you want to use:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" mkdir -p /opt/bbblue_toolchain/gcc-arm-linux-gnueabihf\n chmod -R 777 /opt/bbblue_toolchain\n")])])]),s("p",[e._v("ARM Cross Compiler for "),s("em",[e._v("BeagleBone Blue")]),e._v(" can be found at "),s("a",{attrs:{href:"http://www.linaro.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linaro Toolchain Binaries site"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("GCC in the toolchain should be compatible with kernel in *BeagleBone Blue*. General rule of thumb is to choose a toolchain where version of GCC is not higher than version of GCC which comes with the OS image on *BeagleBone Blue*.")])])])])])])])]),e._v(" "),s("p",[e._v(":::")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("        Download and unpack [gcc-linaro-7.5.0-2019.12-x86_64_arm-linux-gnueabihf](https://releases.linaro.org/components/toolchain/binaries/latest-7/arm-linux-gnueabihf/gcc-linaro-7.5.0-2019.12-x86_64_arm-linux-gnueabihf.tar.xz) to the bbblue_toolchain folder.\n        \n        Different ARM Cross Compiler versions for *BeagleBone Blue* can be found at [Linaro Toolchain Binaries site](http://www.linaro.org/downloads/).\n        \n        :::tip The GCC version of the toolchain should be compatible with kernel in *BeagleBone Blue*.\n")])])]),s("p",[e._v(":::")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("        General rule of thumb is to choose a toolchain where the version of GCC is not higher than the version of GCC which comes with the OS image on *BeagleBone Blue*.\n    \n    2. Add it to the PATH in ~/.profile as shown below\n        \n        ```sh\n        export PATH=$PATH:/opt/bbblue_toolchain/gcc-arm-linux-gnueabihf/gcc-linaro-6.3.1-2017.05-x86_64_arm-linux-gnueabihf/bin\n        ```\n        \n        :::tip Note Logout and Login to apply the change, or execute the same line on your current shell.\n")])])]),s("p",[e._v(":::")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("        Follow the [Development Environment Setup](../dev)setup/dev_env_linux_ubuntu.md) instructions.\n        \n        You may have to edit the upload target to match with your setup:\n        \n            nano PX4-Autopilot/boards/beaglebone/blue/cmake/upload.cmake\n            \n            #in row 37 change debian@beaglebone.lan --\x3e root@beaglebone (or root@<IP>)\n")])])]),s("h3",{attrs:{id:"cross-compile-and-upload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-compile-and-upload"}},[e._v("#")]),e._v(" Cross Compile and Upload")]),e._v(" "),s("p",[e._v("Compile and Upload")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("make beaglebone_blue_default upload\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Note Without upload, files stored local in build folder.")])]),e._v(" "),s("p",[e._v("To test the uploaded files, run the following commands on the "),s("em",[e._v("BeagleBone Blue")]),e._v(" board:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/debian/px4 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" ./bin/px4 -s px4.config \n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Note Currently "),s("em",[e._v("librobotcontrol")]),e._v(" requires root access.")])]),e._v(" "),s("p",[s("span",{attrs:{id:"native_builds"}})]),e._v(" "),s("h2",{attrs:{id:"native-builds-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#native-builds-optional"}},[e._v("#")]),e._v(" Native Builds (optional)")]),e._v(" "),s("p",[e._v("You can also natively build PX4 builds directly on the BeagleBone Blue.")]),e._v(" "),s("p",[e._v("After acquiring the pre-built library,")]),e._v(" "),s("ol",[s("li",[e._v("Select the "),s("em",[e._v("librobotcontrol")]),e._v(" installation directory, and set it in the "),s("code",[e._v("LIBROBOTCONTROL_INSTALL_DIR")]),e._v(" environment variable so that other unwanted headers will not be included")]),e._v(" "),s("li",[e._v("Install "),s("strong",[e._v("robotcontrol.h")]),e._v(" and "),s("strong",[e._v("rc/*")]),e._v(" into "),s("code",[e._v("$LIBROBOTCONTROL_INSTALL_DIR/include")])]),e._v(" "),s("li",[e._v("Install pre-built native (ARM) version of librobotcontrol.* into "),s("code",[e._v("$LIBROBOTCONTROL_INSTALL_DIR/lib")])])]),e._v(" "),s("p",[e._v("Run the following commands on the BeagleBone Blue (i.e. via SSH):")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Install dependencies:\nsh\nsudo apt-get update\nsudo apt-get install cmake python-empy")])]),e._v(" "),s("li",[s("p",[e._v("Clone the PX4 Firmware directly onto the BeagleBone Blue.")])]),e._v(" "),s("li",[s("p",[e._v("Continue with the "),s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux.html"}},[e._v("standard build system installation")]),e._v(".")],1)])]),e._v(" "),s("h2",{attrs:{id:"chnages-in-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chnages-in-config"}},[e._v("#")]),e._v(" Chnages in config")]),e._v(" "),s("p",[e._v("All changes can be made in de px4.config file directly on beaglebone. For example, you can change the WIFI to wlan.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Note If you want to change permanently, you have to change "),s("strong",[e._v("PX4-Autopilot/posix-configs/bbblue/px4.config")]),e._v(" on the Build Machine before build.")])]),e._v(" "),s("h2",{attrs:{id:"부팅-중-자동-시작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부팅-중-자동-시작"}},[e._v("#")]),e._v(" 부팅 중 자동 시작")]),e._v(" "),s("p",[e._v("Here is an example [/etc/rc.local]:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/sh -e")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# rc.local")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This script is executed at the end of each multiuser runlevel.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Make sure that the script will "exit 0" on success or any other')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# value on error.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# In order to enable or disable this script just change the execution")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# bits.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# By default this script does nothing.")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# wait for services to start up")]),e._v("\n/bin/sleep "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/debian/px4 \n\n/home/debian/px4/bin/px4 -d -s /home/debian/px4/px4.config "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /home/debian/px4/PX4.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])]),s("p",[e._v("Below is a "),s("em",[e._v("systemd")]),e._v(" service example [/lib/systemd/system/px4-quad-copter.service]:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("PX4 Quadcopter Service\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("After")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("networking.service network-online.target \n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("StartLimitIntervalSec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Conflicts")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("px4-fixed-wing.service\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WorkingDirectory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/debian/px4\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/debian/px4/bin/px4 -d -s /home/debian/px4/px4.config  \n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("on-failure\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("RestartSec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("multi-user.target\n")])])]),s("h3",{attrs:{id:"miscellaneous"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous"}},[e._v("#")]),e._v(" Miscellaneous")]),e._v(" "),s("h4",{attrs:{id:"파워-서보-레일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파워-서보-레일"}},[e._v("#")]),e._v(" 파워 서보 레일")]),e._v(" "),s("p",[e._v("When PX4 starts, it automatically applies power to servos.")]),e._v(" "),s("h4",{attrs:{id:"언닉-피어스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#언닉-피어스"}},[e._v("#")]),e._v(" 언닉 피어스")]),e._v(" "),s("p",[e._v("BeagleBone Blue has some unique features such as multiple choices of WiFi interfaces and power sources. Refer to comments in "),s("strong",[e._v("/home/debian/px4/px4.config")]),e._v(" for usage of these features.")]),e._v(" "),s("h4",{attrs:{id:"sbus-신호-변환기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sbus-신호-변환기"}},[e._v("#")]),e._v(" SBUS 신호 변환기")]),e._v(" "),s("p",[e._v("SBUS signal from receiver (e.g., FrSky X8R) is an inverted signal. UARTs on BeagleBone Blue can only work with non-inverted 3.3V level signal. "),s("RouterLink",{attrs:{to:"/ko/tutorials/linux_sbus.html"}},[e._v("This tutorial")]),e._v(" contains a SBUS signal inverter circuit.")],1),e._v(" "),s("h4",{attrs:{id:"일반적인-연결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#일반적인-연결"}},[e._v("#")]),e._v(" 일반적인 연결")]),e._v(" "),s("p",[e._v("For a quadcopter with GPS and an SBUS receiver, here are typical connections:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Connect the ESC of motor 1, 2, 3 and 4 to channel 1, 2, 3 and 4 of servo outputs on BeagleBone Blue, respectively. If your ESC connector contains a power output pin, remove it and do not connect it to the power output pin of the servo channel on the BeagleBone Blue.")])]),e._v(" "),s("li",[s("p",[e._v("Connect the above mentioned converted SBUS signal to the dsm2 port if you have the matching connector for dsm2, otherwise connect it to any other available UART port and change the corresponding port in "),s("strong",[e._v("/home/debian/px4/px4.config")]),e._v(" accordingly.")])]),e._v(" "),s("li",[s("p",[e._v("Connect the signals of GPS module to GPS port on the BeagleBone Blue. Note that the signal pins of the GPS port on the BeagleBone Blue are only 3.3V tolerant, so choose your GPS module accordingly.")])])])])}),[],!1,null,null,null);t.default=o.exports},702:function(e,t,a){e.exports=a.p+"assets/img/BeagleBone_Blue_balloons.76d575fa.jpg"}}]);