(window.webpackJsonp=window.webpackJsonp||[]).push([[720],{2107:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"raspberry-pi-2-3-4-navio2-autopilot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-2-3-4-navio2-autopilot"}},[t._v("#")]),t._v(" Raspberry Pi 2/3/4 Navio2 Autopilot")]),t._v(" "),s("LinkedBadge",{attrs:{type:"warning",text:"Experimental",url:"../flight_controller/autopilot_experimental.html"}}),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),s("a",{attrs:{href:"https://emlid.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),s("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),s("p",[t._v('This is the developer "quickstart" for Raspberry Pi 2/3/4 Navio2 autopilots.\nIt allows you to build PX4 and transfer to the RasPi, or build natively.')]),t._v(" "),s("p",[s("img",{attrs:{src:a(921),alt:"Ra Pi Image"}})]),t._v(" "),s("h2",{attrs:{id:"os-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-image"}},[t._v("#")]),t._v(" OS Image")]),t._v(" "),s("p",[t._v("Use the preconfigured "),s("a",{attrs:{href:"https://docs.emlid.com/navio2/configuring-raspberry-pi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emlid Raspberry Pi OS image for Navio 2"),s("OutboundLink")],1),t._v(".\nThe default image will have most of the setup procedures shown below already done.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Make sure not to upgrade the system (more specifically the kernel).\nBy upgrading, a new kernel can get installed which lacks the necessary HW support (you can check with "),s("code",[t._v("ls /sys/class/pwm")]),t._v(", the directory should not be empty).")])]),t._v(" "),s("h2",{attrs:{id:"setting-up-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-access"}},[t._v("#")]),t._v(" Setting up Access")]),t._v(" "),s("p",[t._v('The Raspberry Pi OS image has SSH setup already.\nUsername is "pi" and password is "raspberry".\nWe assume that the username and password remain at their defaults for the purpose of this guide.')]),t._v(" "),s("p",[t._v("To setup the Pi to join your local wifi, follow "),s("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide"),s("OutboundLink")],1),t._v(", or connect it via an ethernet cable.")]),t._v(" "),s("p",[t._v("To connect to your Pi via SSH, use the default username ("),s("code",[t._v("pi")]),t._v(") and hostname ("),s("code",[t._v("navio")]),t._v(").\nAlternatively (if this doesn't work), you can find the IP address of your RPi and specify it.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" pi@navio.local\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" pi@"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP-ADDRESS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"expand-the-filesystem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expand-the-filesystem"}},[t._v("#")]),t._v(" Expand the Filesystem")]),t._v(" "),s("p",[t._v("Expand the file system to take advantage of the entire SD card by running:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" raspi-config --expand-rootfs\n")])])]),s("h2",{attrs:{id:"disable-navio-rgb-overlay"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-navio-rgb-overlay"}},[t._v("#")]),t._v(" Disable Navio RGB Overlay")]),t._v(" "),s("p",[t._v("The existing Navio RGB overlay claims GPIOs used by PX4 for RGB Led.\nEdit "),s("code",[t._v("/boot/config.txt")]),t._v(" by commenting the line enabling the "),s("code",[t._v("navio-rgb")]),t._v(" overlay.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#dtoverlay=navio-rgb\n")])])]),s("h2",{attrs:{id:"testing-file-transfer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-file-transfer"}},[t._v("#")]),t._v(" Testing file transfer")]),t._v(" "),s("p",[t._v("We use SCP to transfer files from the development computer to the target board over a network (WiFi or Ethernet).")]),t._v(" "),s("p",[t._v("To test your setup, try pushing a file from the development PC to the Pi over the network now.\nMake sure the Pi has network access, and you can SSH into it.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hello.txt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" hello.txt pi@navio.local:/home/pi/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" hello.txt\n")])])]),s("p",[t._v('This should copy over a "hello.txt" file into the home folder of your Pi.\nValidate that the file was indeed copied, and you can proceed to the next step.')]),t._v(" "),s("h2",{attrs:{id:"building-the-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-the-code"}},[t._v("#")]),t._v(" Building the Code")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("PX4 binaries for Navio 2 can only be built on Ubuntu 18.04.\nUbuntu 20.04 and later do not currently work (as of September 2023).")])]),t._v(" "),s("p",[t._v("Follow the instructions below to build the source code on your development machine and transfer the compiled program to the Pi.\nNote that earlier versions allowed code to be built natively (on the Pi), but this option is no longer available.")]),t._v(" "),s("h3",{attrs:{id:"cross-compiler-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-compiler-build"}},[t._v("#")]),t._v(" Cross-compiler Build")]),t._v(" "),s("p",[t._v("First install the "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html#raspberry-pi"}},[t._v("standard PX4 developer environment")]),t._v(" on your Ubuntu 18.04 development computer.")],1),t._v(" "),s("p",[t._v("Specify the IP (or hostname) of your Pi using:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("AUTOPILOT_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("navio.local\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("AUTOPILOT_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".X.X\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The value of the environment variable should be set before the build, or "),s("code",[t._v("make upload")]),t._v(" will fail to find your Pi.")])]),t._v(" "),s("p",[t._v("Build the executable file on your development machine:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" emlid_navio2\n")])])]),s("p",[t._v('The "px4" executable file is in the directory '),s("strong",[t._v("build/emlid_navio2_default/")]),t._v(".\nMake sure you can connect to your Pi over SSH, see "),s("a",{attrs:{href:"#setting-up-access"}},[t._v("instructions how to access your Pi")]),t._v(" following the instructions for armhf under Raspberry Pi.")]),t._v(" "),s("p",[t._v("Then upload it with:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" emlid_navio2 upload\n")])])]),s("p",[t._v("Then, connect over ssh and run it on the Pi (as root):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/px4\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./bin/px4 -s px4.config\n")])])]),s("p",[t._v("A successful build followed by executing px4 will give you something like this:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\n______  __   __    ___\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ___ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" / /   /   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_/ /  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" V /   / /"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  __/   /   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("  / /_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     / /^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("___  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_/\n\npx4 starting.\n\n\npxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"autostart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autostart"}},[t._v("#")]),t._v(" Autostart")]),t._v(" "),s("p",[t._v("To autostart px4, add the following to the file "),s("strong",[t._v("/etc/rc.local")]),t._v(" (adjust it accordingly if you use native build), right before the "),s("code",[t._v("exit 0")]),t._v(" line:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/pi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ./bin/px4 -d -s px4.config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" px4.log\n")])])])],1)}),[],!1,null,null,null);e.default=r.exports},921:function(t,e,a){t.exports=a.p+"assets/img/hardware-rpi2.44769dea.jpg"}}]);