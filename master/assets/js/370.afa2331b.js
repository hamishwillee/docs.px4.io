(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{1302:function(e,t,a){e.exports=a.p+"assets/img/setup_whole.a50d8747.jpg"},1303:function(e,t,a){e.exports=a.p+"assets/img/power-pins.b7d302d0.jpg"},1304:function(e,t,a){e.exports=a.p+"assets/img/qgc-screenshot.a0938559.png"},2625:function(e,t,a){"use strict";a.r(t);var s=a(18),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"video-streaming-in-qgroundcontrol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video-streaming-in-qgroundcontrol"}},[e._v("#")]),e._v(" Video streaming in QGroundControl")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Tip")]),e._v(" This article is somewhat out of date. Community members are encouraged to retest the instructions on a more recent Ubuntu version, and to import Odroid setup instructions into the wiki.")])]),e._v(" "),s("p",[e._v("This page shows how to set up a a companion computer (Odroid C1) with a camera (Logitech C920) such that the video stream is transferred via the Odroid C1 to a network computer and displayed in the application QGroundControl that runs on this computer.")]),e._v(" "),s("p",[e._v("The whole hardware setup is shown in the figure below. It consists of the following parts: It consists of the following parts:")]),e._v(" "),s("ul",[s("li",[e._v("Odroid C1")]),e._v(" "),s("li",[e._v("Logitech 摄像头 C920")]),e._v(" "),s("li",[e._v("WiFi 模块 TP-LINK TL-WN722N")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(1302),alt:"Setup"}})]),e._v(" "),s("p",[e._v("To install the Linux environment (Ubuntu 14.04), follow the instruction given in the "),s("a",{attrs:{href:"https://pixhawk.org/peripherals/onboard_computers/odroid_c1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C1 tutorial"),s("OutboundLink")],1),e._v(". In this tutorial it is also shown how to access the Odroid C1 with a UART cable and how to establish Ethernet connection.")]),e._v(" "),s("h2",{attrs:{id:"install-linux-environment-in-odroid-c1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-linux-environment-in-odroid-c1"}},[e._v("#")]),e._v(" Install Linux environment in Odroid C1")]),e._v(" "),s("p",[e._v("To install the Linux environment (Ubuntu 14.04), follow the instruction given in the "),s("a",{attrs:{href:"http://web.archive.org/web/20180617111122/http://pixhawk.org/peripherals/onboard_computers/odroid_c1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C1 tutorial"),s("OutboundLink")],1),e._v(" (wayback machine). The tutorial also shows how to access the Odroid C1 with a UART cable and how to establish Ethernet connection.")]),e._v(" "),s("h2",{attrs:{id:"set-up-alternative-power-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-alternative-power-connection"}},[e._v("#")]),e._v(" Set up alternative power connection")]),e._v(" "),s("p",[e._v("The Odroid C1 can be powered via the 5V DC jack. If the Odroid is mounted on a drone, it is recommended to solder two pins next to the 5V DC jack by applying the through-hole soldering "),s("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-soldering",target:"_blank",rel:"noopener noreferrer"}},[e._v("method"),s("OutboundLink")],1),e._v(" as shown in the figure below. The power is delivered by connecting the DC voltage source (5 V) via a jumper cable (red in the image above) with the Odroid C1 and connect the ground of the circuit with a jumper cable (black in the image above) with a ground pin of the Odroid C1 in the example setup. If the Odroid is mounted on a drone, it is recommended to solder two pins next to the 5V DC jack by applying the through-hole soldering "),s("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-soldering",target:"_blank",rel:"noopener noreferrer"}},[e._v("method"),s("OutboundLink")],1),e._v(" as shown in the figure below. The power is delivered by connecting the DC voltage source (5 V) via a jumper cable (red in the image above) with the Odroid C1 and connect the ground of the circuit with a jumper cable (black in the image above) with a ground pin of the Odroid C1 in the example setup.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(1303),alt:"Power Pins"}})]),e._v(" "),s("h2",{attrs:{id:"enable-wifi-connection-for-odroid-c1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-wifi-connection-for-odroid-c1"}},[e._v("#")]),e._v(" Enable WiFi connection for Odroid C1")]),e._v(" "),s("p",[e._v("In this this tutorial the WiFi module TP-LINK TL-WN722N is used. In this this tutorial the WiFi module TP-LINK TL-WN722N is used. To enable WiFi connection for the Odroid C1, follow the steps described in the "),s("a",{attrs:{href:"https://pixhawk.org/peripherals/onboard_computers/odroid_c1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C1 tutorial"),s("OutboundLink")],1),e._v(" in the section Establishing wifi connection with antenna.")]),e._v(" "),s("h2",{attrs:{id:"configure-as-wifi-access-point"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-as-wifi-access-point"}},[e._v("#")]),e._v(" Configure as WiFi Access Point")]),e._v(" "),s("p",[e._v('This sections shows how to set up the Odroid C1 such that it is an access point. The content is taken from the pixhawk.org "access point" tutorial (no longer available) with some small adaptions. This sections shows how to set up the Odroid C1 such that it is an access point. The content is taken from this '),s("a",{attrs:{href:"https://pixhawk.org/peripherals/onboard_computers/access_point",target:"_blank",rel:"noopener noreferrer"}},[e._v("tutorial"),s("OutboundLink")],1),e._v(" with some small adaptions. To enable to stream the video from the camera via the Odroid C1 to the QGroundControl that runs on a computer it is not required to follow this section. However, it is shown here because setting up the Odroid C1 as an access point allows to use the system in a stand-alone fashion. The TP-LINK TL-WN722N is used as a WiFi module. In the ensuing steps it is assumed that the Odroid C1 assigns the name wlan0 to your WiFi module. Change all occurrences of wlan0 to the appropriate interface if different (e.g. wlan1). However, it is shown here because setting up the Odroid C1 as an access point allows to use the system in a stand-alone fashion. The TP-LINK TL-WN722N is used as a WiFi module.")]),e._v(" "),s("p",[e._v("In the following steps it is assumed that the Odroid C1 assigns the name wlan0 to your WiFi module. Change all occurrences of wlan0 to the appropriate interface if different (e.g. wlan1).")]),e._v(" "),s("h3",{attrs:{id:"onboard-computer-as-access-point"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onboard-computer-as-access-point"}},[e._v("#")]),e._v(" Onboard Computer as Access Point")]),e._v(" "),s("p",[e._v("For a more in depth explanation, you can look at "),s("a",{attrs:{href:"http://elinux.org/RPI-Wireless-Hotspot",target:"_blank",rel:"noopener noreferrer"}},[e._v("RPI-Wireless-Hotspot"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Install the necessary software")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" hostapd udhcpd\n")])])]),s("p",[e._v("Configure DHCP. Configure DHCP. Edit the file "),s("code",[e._v("/etc/udhcpd.conf")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("start "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.100 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This is the range of IPs that the hotspot will give to client devices.")]),e._v("\nend "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.200\ninterface wlan0 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The device uDHCP listens on.")]),e._v("\nremaining "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\nopt dns "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.8")]),e._v(".8.8 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.2")]),e._v(".2.2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The DNS servers client devices will use (if routing through the Ethernet link).")]),e._v("\nopt subnet "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".255.0\nopt router "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The Onboard Computer's IP address on wlan0 which we will set up shortly.")]),e._v("\nopt lease "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("864000")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 10 day DHCP lease time in seconds")]),e._v("\nend "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.200\ninterface wlan0 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The device uDHCP listens on.")]),e._v("\nremaining "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\nopt dns "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.8")]),e._v(".8.8 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.2")]),e._v(".2.2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The DNS servers client devices will use (if routing through the Ethernet link).")]),e._v("\nopt subnet "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".255.0\nopt router "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The Onboard Computer's IP address on wlan0 which we will set up shortly.")]),e._v("\nopt lease "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("864000")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 10 day DHCP lease time in seconds")]),e._v("\n")])])]),s("p",[e._v("All other 'opt' entries should be disabled or configured properly if you know what you are doing.")]),e._v(" "),s("p",[e._v("Edit the file "),s("code",[e._v("/etc/default/udhcpd")]),e._v(" and change the line:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DHCPD_ENABLED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"no"')]),e._v("\n")])])]),s("p",[e._v("to")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#DHCPD_ENABLED="no"')]),e._v("\n")])])]),s("p",[e._v("You will need to give the Onboard Computer a static IP address. You will need to give the Onboard Computer a static IP address. Edit the file "),s("code",[e._v("/etc/network/interfaces")]),e._v(" and replace the line "),s("code",[e._v("iface wlan0 inet dhcp")]),e._v(" (or "),s("code",[e._v("iface wlan0 inet manual")]),e._v(") to:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("auto wlan0\niface wlan0 inet static\naddress "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.1\nnetmask "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".255.0\nnetwork "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.0\nbroadcast "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.255\nwireless-power off\n")])])]),s("p",[e._v("Disable the original (WiFi Client) auto configuration. Disable the original (WiFi Client) auto configuration. Change the lines (they probably will not be all next to each other or may not even be there at all):")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("allow-hotplug wlan0\nwpa-roam /etc/wpa_supplicant/wpa_supplicant.conf\niface default inet dhcp\n")])])]),s("p",[e._v("to:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#allow-hotplug wlan0")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#iface default inet dhcp")]),e._v("\n")])])]),s("p",[e._v("If you have followed the "),s("a",{attrs:{href:"https://pixhawk.org/peripherals/onboard_computers/odroid_c1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C1 tutorial"),s("OutboundLink")],1),e._v(" to set up the WiFi connection, you might have created the file "),s("code",[e._v("/etc/network/intefaces.d/wlan0")]),e._v(". Please comment out all lines in that file such that those configurations have no effect anymore. Please comment out all lines in that file such that those configurations have no effect anymore.")]),e._v(" "),s("p",[e._v("Configure HostAPD: To create a WPA-secured network, edit the file "),s("code",[e._v("/etc/hostapd/hostapd.conf")]),e._v(" (create it if it does not exist) and add the following lines:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("auth_algs=1\nchannel=6            # Channel to use\nhw_mode=g\nieee80211n=1          # 802.11n assuming your device supports it\nignore_broadcast_ssid=0\ninterface=wlan0\nwpa=2\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=TKIP\nrsn_pairwise=CCMP\n# Change the to the proper driver\ndriver=nl80211\n# Change these to something else if you want\nssid=OdroidC1\nwpa_passphrase=QGroundControl\n")])])]),s("p",[e._v("Change "),s("code",[e._v("ssid=")]),e._v(", "),s("code",[e._v("channel=")]),e._v(", and "),s("code",[e._v("wpa_passphrase=")]),e._v(" to values of your choice. Change "),s("code",[e._v("ssid=")]),e._v(", "),s("code",[e._v("channel=")]),e._v(", and "),s("code",[e._v("wpa_passphrase=")]),e._v(" to values of your choice. SSID is the hotspot's name which is broadcast to other devices, channel is what frequency the hotspot will run on, wpa_passphrase is the password for the wireless network. For many more options see the file "),s("code",[e._v("/usr/share/doc/hostapd/examples/hostapd.conf.gz")]),e._v(". Look for a channel that is not in use in the area. You can use tools such as "),s("em",[e._v("wavemon")]),e._v(" for that. For many more options see the file "),s("code",[e._v("/usr/share/doc/hostapd/examples/hostapd.conf.gz")]),e._v(". Look for a channel that is not in use in the area. You can use tools such as "),s("em",[e._v("wavemon")]),e._v(" for that.")]),e._v(" "),s("p",[e._v("Edit the file "),s("code",[e._v("/etc/default/hostapd")]),e._v(" and change the line:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('#DAEMON_CONF=""\n')])])]),s("p",[e._v("to:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('DAEMON_CONF="/etc/hostapd/hostapd.conf"\n')])])]),s("p",[e._v("Your Onboard Computer should now be hosting a wireless hotspot. Your Onboard Computer should now be hosting a wireless hotspot. To get the hotspot to start on boot, run these additional commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo update-rc.d hostapd enable\nsudo update-rc.d udhcpd enable\n")])])]),s("p",[e._v("This is enough to have the Onboard Computer present itself as an Access Point and allow your ground station to connect. If you truly want to make it work as a real Access Point (routing the WiFi traffic to the Onboard Computer’s Ethernet connection), we need to configure the routing and network address translation (NAT). Enable IP forwarding in the kernel: If you truly want to make it work as a real Access Point (routing the WiFi traffic to the Onboard Computer’s Ethernet connection), we need to configure the routing and network address translation (NAT). Enable IP forwarding in the kernel:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"echo 1 > /proc/sys/net/ipv4/ip_forward"')]),e._v("\n")])])]),s("p",[e._v("To enable NAT in the kernel, run the following commands:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT\n")])])]),s("p",[e._v("To make this permanent, run the following command:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"iptables-save > /etc/iptables.ipv4.nat"')]),e._v("\n")])])]),s("p",[e._v("Now edit the file /etc/network/interfaces and add the following line to the bottom of the file:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("up iptables-restore "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" /etc/iptables.ipv4.nat\n")])])]),s("h1",{attrs:{id:"gstreamer-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gstreamer-installation"}},[e._v("#")]),e._v(" Gstreamer Installation")]),e._v(" "),s("p",[e._v("To install gstreamer packages on the computer and on the Odroid C1 and start the stream, follow the instruction given in the "),s("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/src/VideoStreaming/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl README"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("If you cannot start the stream on the Odroid with the uvch264s plugin, you can also try to start it with the v4l2src plugin:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("gst-launch-1.0 v4l2src "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("device")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/dev/video0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" video/x-h264,width"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1920")]),e._v(",height"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1080")]),e._v(",framerate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v("/1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" h264parse "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" rtph264pay "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" udpsink "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("host")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xxx.xxx.xxx.xxx "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5000")]),e._v(" video/x-h264,width"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1920")]),e._v(",height"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1080")]),e._v(",framerate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v("/1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" h264parse "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" rtph264pay "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" udpsink "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("host")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xxx.xxx.xxx.xxx "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5000")]),e._v("\n")])])]),s("p",[e._v("Where "),s("code",[e._v("xxx.xxx.xxx.xxx")]),e._v(" is the IP address where QGC is running.")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Tip")]),e._v(" If you get the system error: "),s("code",[e._v("Permission denied")]),e._v(", you might need to prepend "),s("code",[e._v("sudo")]),e._v(" to the command above. Alternatively add the current user to the "),s("code",[e._v("video")]),e._v(" group as shown below (and then logout/login):")])]),e._v(" "),s("p",[e._v("Alternatively add the current user to the "),s("code",[e._v("video")]),e._v(" group as shown below (and then logout/login):")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG video "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("\n")])])]),s("p",[e._v("If everything works, you should see the video stream on the bottom left corner in the flight-mode window of QGroundControl as shown in the screenshot below.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(1304),alt:"QGC displaying video stream"}})]),e._v(" "),s("p",[e._v("If you click on the video stream, the satellite map is shown in the left bottom corner and the video is shown in the whole background.")])])}),[],!1,null,null,null);t.default=n.exports}}]);