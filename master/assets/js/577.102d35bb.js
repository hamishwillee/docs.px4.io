(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{1735:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"raspberry-pi-2-3-navio2-autopilot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-2-3-navio2-autopilot"}},[t._v("#")]),t._v(" Raspberry Pi 2/3 Navio2 Autopilot")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),e("a",{attrs:{href:"https://emlid.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),e("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("PX4 support for this flight controller is "),e("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_experimental.html"}},[t._v("experimental")]),t._v(".")],1)]),t._v(" "),e("p",[t._v('This is the developer "quickstart" for Raspberry Pi 2/3 Navio2 autopilots.\nIt allows you to build PX4 and transfer to the RasPi, or build natively.')]),t._v(" "),e("p",[e("img",{attrs:{src:a(843),alt:"Ra Pi Image"}})]),t._v(" "),e("h2",{attrs:{id:"os-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os-image"}},[t._v("#")]),t._v(" OS Image")]),t._v(" "),e("p",[t._v("Use the "),e("a",{attrs:{href:"https://docs.emlid.com/navio2/configuring-raspberry-pi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emlid RT Raspbian image for Navio 2"),e("OutboundLink")],1),t._v(".\nThe default image will have most of the setup procedures shown below already done.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Make sure not to upgrade the system (more specifically the kernel).\nBy upgrading, a new kernel can get installed which lacks the necessary HW support (you can check with "),e("code",[t._v("ls /sys/class/pwm")]),t._v(", the directory should not be empty).")])]),t._v(" "),e("h2",{attrs:{id:"setting-up-access"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-access"}},[t._v("#")]),t._v(" Setting up Access")]),t._v(" "),e("p",[t._v('The Raspbian image has SSH setup already.\nUsername is "pi" and password is "raspberry".\nYou can connect to your RPi2/3 over a network (Ethernet is set to come up with DHCP by default) and then proceed to configure WiFi access.\nWe assume that the username and password remain at their defaults for the purpose of this guide.')]),t._v(" "),e("p",[t._v("To setup the RPi2/3 to join your local wifi, follow "),e("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Find the IP address of your Pi from your network, and then you can proceed to connect to it using SSH.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" pi@"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP-ADDRESS"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h2",{attrs:{id:"expand-the-filesystem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expand-the-filesystem"}},[t._v("#")]),t._v(" Expand the Filesystem")]),t._v(" "),e("p",[t._v("After installing the OS and connecting to it, make sure to "),e("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/raspi-config.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("expand the Filesystem"),e("OutboundLink")],1),t._v(", so there is enough space on the SD Card.")]),t._v(" "),e("h2",{attrs:{id:"disable-navio-rgb-overlay"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-navio-rgb-overlay"}},[t._v("#")]),t._v(" Disable Navio RGB Overlay")]),t._v(" "),e("p",[t._v("The existing Navio RGB overlay claims GPIOs used by PX4 for RGB Led.\nEdit "),e("code",[t._v("/boot/config.txt")]),t._v(" by commenting the line enabling the "),e("code",[t._v("navio-rgb")]),t._v(" overlay.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#dtoverlay=navio-rgb\n")])])]),e("h2",{attrs:{id:"changing-hostnames"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changing-hostnames"}},[t._v("#")]),t._v(" Changing Hostnames")]),t._v(" "),e("p",[t._v('To avoid conflicts with any other RPis on the network, we advise you to change the default hostname to something sensible.\nWe used "px4autopilot" for our setup.\nConnect to the Pi via SSH and follow the below instructions.')]),t._v(" "),e("p",[t._v("Edit the hostname file:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/hostname\n")])])]),e("p",[t._v("Change "),e("code",[t._v("raspberry")]),t._v(" to whatever hostname you want (one word with limited characters apply)")]),t._v(" "),e("p",[t._v("Next you need to change the hosts file:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/hosts\n")])])]),e("p",[t._v("Change the entry "),e("code",[t._v("127.0.1.1 raspberry")]),t._v(" to "),e("code",[t._v("127.0.1.1 <YOURNEWHOSTNAME>")])]),t._v(" "),e("p",[t._v("Reboot the Pi after this step is completed to allow it to re-associate with your network.")]),t._v(" "),e("h2",{attrs:{id:"setting-up-avahi-zeroconf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-avahi-zeroconf"}},[t._v("#")]),t._v(" Setting up Avahi (Zeroconf)")]),t._v(" "),e("p",[t._v("To make connecting to the Pi easier, we recommend setting up Avahi (Zeroconf) which allows easy access to the Pi from any network by directly specifying its hostname.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" avahi-daemon\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" insserv avahi-daemon\n")])])]),e("p",[t._v("Next, setup the Avahi configuration file")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/avahi/services/multiple.service\n")])])]),e("p",[t._v("Add this to the file :")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token prolog"}},[t._v("<?xml version=\"1.0\" standalone='no'?>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token doctype"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),e("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token name"}},[t._v("service-group")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token name"}},[t._v("SYSTEM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avahi-service.dtd"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("service-group")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("replace-wildcards")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("%h"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("_device-info._tcp"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("txt-record")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("model=RackMac"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("txt-record")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("_ssh._tcp"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("22"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("service-group")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),e("p",[t._v("Restart the daemon")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /etc/init.d/avahi-daemon restart\n")])])]),e("p",[t._v("And that's it.\nYou should be able to access your Pi directly by its hostname from any computer on the network.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("You might have to add .local to the hostname to discover it.")])]),t._v(" "),e("h2",{attrs:{id:"configuring-a-ssh-public-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-ssh-public-key"}},[t._v("#")]),t._v(" Configuring a SSH Public-Key")]),t._v(" "),e("p",[t._v("In order to allow the PX4 development environment to automatically push executables to your board, you need to configure passwordless access to the RPi.\nWe use the public-key authentication method for this.")]),t._v(" "),e("p",[t._v("To generate new SSH keys enter the following commands (Choose a sensible hostname such as "),e("code",[t._v("<YOURNANME>@<YOURDEVICE>")]),t._v(".  Here we have used "),e("code",[t._v("pi@px4autopilot")]),t._v(")")]),t._v(" "),e("p",[t._v("These commands need to be run on the HOST development computer!")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ssh-keygen -t rsa -C pi@px4autopilot\n")])])]),e("p",[t._v("Upon entering this command, you'll be asked where to save the key. We suggest you save it in the default location ($HOME/.ssh/id_rsa) by just hitting Enter.")]),t._v(" "),e("p",[t._v("Now you should see the files "),e("code",[t._v("id_rsa")]),t._v(" and "),e("code",[t._v("id_rsa.pub")]),t._v(" in your "),e("code",[t._v(".ssh")]),t._v(" directory in your home folder:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" ~/.ssh\nauthorized_keys  id_rsa  id_rsa.pub  known_hosts\n")])])]),e("p",[t._v("The "),e("code",[t._v("id_rsa")]),t._v(" file is your private key. Keep this on the development computer.\nThe "),e("code",[t._v("id_rsa.pub")]),t._v(" file is your public key. This is what you put on the targets you want to connect to.")]),t._v(" "),e("p",[t._v("To copy your public key to your Raspberry Pi, use the following command to append the public key to your authorized_keys file on the Pi, sending it over SSH:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.ssh/id_rsa.pub "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" pi@px4autopilot "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cat >> .ssh/authorized_keys'")]),t._v("\n")])])]),e("p",[t._v('Note that this time you will have to authenticate with your password ("raspberry" by default).')]),t._v(" "),e("p",[t._v("Now try "),e("code",[t._v("ssh pi@px4autopilot")]),t._v(" and you should connect without a password prompt.")]),t._v(" "),e("p",[t._v('If you see a message "'),e("code",[t._v("Agent admitted failure to sign using the key.")]),t._v('" then add your RSA or DSA identities to the authentication agent, ssh-agent and the execute the following command:')]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ssh-add\n")])])]),e("p",[t._v("If this did not work, delete your keys with "),e("code",[t._v("rm ~/.ssh/id*")]),t._v(" and follow the instructions again.")]),t._v(" "),e("h2",{attrs:{id:"testing-file-transfer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing-file-transfer"}},[t._v("#")]),t._v(" Testing file transfer")]),t._v(" "),e("p",[t._v("We use SCP to transfer files from the development computer to the target board over a network (WiFi or Ethernet).")]),t._v(" "),e("p",[t._v("To test your setup, try pushing a file from the development PC to the Pi over the network now.\nMake sure the Pi has network access, and you can SSH into it.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hello.txt\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" hello.txt pi@px4autopilot:/home/pi/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" hello.txt\n")])])]),e("p",[t._v('This should copy over a "hello.txt" file into the home folder of your RPi.\nValidate that the file was indeed copied, and you can proceed to the next step.')]),t._v(" "),e("h2",{attrs:{id:"building-the-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#building-the-code"}},[t._v("#")]),t._v(" Building the Code")]),t._v(" "),e("p",[t._v('Either build the source code on your development computer ("cross-compiler" build) or build it on the RaPi ("native" build) as shown below.')]),t._v(" "),e("h3",{attrs:{id:"cross-compiler-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cross-compiler-build"}},[t._v("#")]),t._v(" Cross-compiler Build")]),t._v(" "),e("p",[t._v("First install the "),e("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux.html"}},[t._v("standard developer environment on your Ubunto development computer")]),t._v(".")],1),t._v(" "),e("p",[t._v("Set the IP (or hostname) of your RPi using:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("AUTOPILOT_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".X.X\n")])])]),e("p",[t._v("or")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("AUTOPILOT_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pi_hostname.domain\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("The value of the environment variable should be set before the build, or "),e("code",[t._v("make upload")]),t._v(" will fail to find your RPi.")])]),t._v(" "),e("p",[t._v("Build the executable file:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" emlid_navio2 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for cross-compiler build")]),t._v("\n")])])]),e("p",[t._v('The "px4" executable file is in the directory '),e("strong",[t._v("build/emlid_navio2_default/")]),t._v(".\nMake sure you can connect to your RPi over ssh, see "),e("a",{attrs:{href:"#setting-up-access"}},[t._v("instructions how to access your RPi")]),t._v(".")]),t._v(" "),e("p",[t._v("Then upload it with:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" emlid_navio2 upload "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for cross-compiler build")]),t._v("\n")])])]),e("p",[t._v("Then, connect over ssh and run it with (as root):")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/px4\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./bin/px4 -s px4.config\n")])])]),e("h3",{attrs:{id:"native-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#native-build"}},[t._v("#")]),t._v(" Native Build")]),t._v(" "),e("p",[t._v("A native build is one that you run directly on the Pi (the other option is to run builds on a development computer which cross-compiles for the Pi, and pushes the PX4 executable binary directly to the Pi).")]),t._v(" "),e("p",[t._v("Run these commands on the Pi to setup the build system on the Pi.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cmake python-empy\n")])])]),e("p",[t._v("Clone the Firmware directly onto the Pi then build the native build target ("),e("code",[t._v("emlid_navio2_native")]),t._v(").")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" emlid_navio2_native\n")])])]),e("p",[t._v('The "px4" executable file is in the directory '),e("strong",[t._v("build/emlid_navio2_native/")]),t._v(".\nRun it directly with:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./build/emlid_navio2_native/px4 build/emlid_navio2_native/etc -s ./posix-configs/rpi/px4.config\n")])])]),e("p",[t._v("A successful build followed by executing px4 will give you something like this:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("\n______  __   __    ___\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ___ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" / /   /   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_/ /  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" V /   / /"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  __/   /   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("  / /_"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     / /^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("___  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_/\n\npx4 starting.\n\n\npxh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h2",{attrs:{id:"autostart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autostart"}},[t._v("#")]),t._v(" Autostart")]),t._v(" "),e("p",[t._v("To autostart px4, add the following to the file "),e("strong",[t._v("/etc/rc.local")]),t._v(" (adjust it accordingly if you use native build), right before the "),e("code",[t._v("exit 0")]),t._v(" line:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/pi "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ./bin/px4 -d -s px4.config "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" px4.log\n")])])])])}),[],!1,null,null,null);s.default=n.exports},843:function(t,s,a){t.exports=a.p+"assets/img/hardware-rpi2.44769dea.jpg"}}]);