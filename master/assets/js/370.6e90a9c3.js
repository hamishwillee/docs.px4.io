(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{1294:function(e,t,s){e.exports=s.p+"assets/img/setup_whole.a50d8747.jpg"},1295:function(e,t,s){e.exports=s.p+"assets/img/power-pins.b7d302d0.jpg"},1296:function(e,t,s){e.exports=s.p+"assets/img/qgc-screenshot.a0938559.png"},2628:function(e,t,s){"use strict";s.r(t);var a=s(18),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"video-streaming-in-qgroundcontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-streaming-in-qgroundcontrol"}},[e._v("#")]),e._v(" Video streaming in QGroundControl")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" This article is somewhat out of date. Community members are encouraged to retest the instructions on a more recent Ubuntu version, and to import Odroid setup instructions into the wiki.")])]),e._v(" "),a("p",[e._v("This page shows how to set up a a companion computer (Odroid C1) with a camera (Logitech C920) such that the video stream is transferred via the Odroid C1 to a network computer and displayed in the application QGroundControl that runs on this computer.")]),e._v(" "),a("p",[e._v("The whole hardware setup is shown in the figure below. It consists of the following parts: 它由以下部分组成:")]),e._v(" "),a("ul",[a("li",[e._v("Odroid C1")]),e._v(" "),a("li",[e._v("Logitech 摄像头 C920")]),e._v(" "),a("li",[e._v("WiFi 模块 TP-LINK TL-WN722N")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(1294),alt:"设置"}})]),e._v(" "),a("p",[e._v("To install the Linux environment (Ubuntu 14.04), follow the instruction given in the "),a("a",{attrs:{href:"https://pixhawk.org/peripherals/onboard_computers/odroid_c1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C1 tutorial"),a("OutboundLink")],1),e._v(". In this tutorial it is also shown how to access the Odroid C1 with a UART cable and how to establish Ethernet connection.")]),e._v(" "),a("h2",{attrs:{id:"install-linux-environment-in-odroid-c1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-linux-environment-in-odroid-c1"}},[e._v("#")]),e._v(" Install Linux environment in Odroid C1")]),e._v(" "),a("p",[e._v("To install the Linux environment (Ubuntu 14.04), follow the instruction given in the "),a("a",{attrs:{href:"http://web.archive.org/web/20180617111122/http://pixhawk.org/peripherals/onboard_computers/odroid_c1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C1 tutorial"),a("OutboundLink")],1),e._v(" (wayback machine). The tutorial also shows how to access the Odroid C1 with a UART cable and how to establish Ethernet connection.")]),e._v(" "),a("h2",{attrs:{id:"set-up-alternative-power-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-alternative-power-connection"}},[e._v("#")]),e._v(" Set up alternative power connection")]),e._v(" "),a("p",[e._v("The Odroid C1 can be powered via the 5V DC jack. If the Odroid is mounted on a drone, it is recommended to solder two pins next to the 5V DC jack by applying the through-hole soldering "),a("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-soldering",target:"_blank",rel:"noopener noreferrer"}},[e._v("method"),a("OutboundLink")],1),e._v(" as shown in the figure below. The power is delivered by connecting the DC voltage source (5 V) via a jumper cable (red in the image above) with the Odroid C1 and connect the ground of the circuit with a jumper cable (black in the image above) with a ground pin of the Odroid C1 in the example setup. 如果 Odroid 被安装在飞行器上，建议将两个跳线通过插片式的"),a("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-soldering",target:"_blank",rel:"noopener noreferrer"}},[e._v("方法"),a("OutboundLink")],1),e._v("焊接在电路上 在例子中，Odroid C1 通过在上图所示的红色跳线连接 DC 电源 (5 V) 和通过上图所示的黑色跳线连接地线被通电。")]),e._v(" "),a("p",[a("img",{attrs:{src:s(1295),alt:"电源"}})]),e._v(" "),a("h2",{attrs:{id:"enable-wifi-connection-for-odroid-c1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-wifi-connection-for-odroid-c1"}},[e._v("#")]),e._v(" Enable WiFi connection for Odroid C1")]),e._v(" "),a("p",[e._v("在这篇教程中使用的是 WiFi 模块 TP-LINK TL-WN722N. In this this tutorial the WiFi module TP-LINK TL-WN722N is used. To enable WiFi connection for the Odroid C1, follow the steps described in the "),a("a",{attrs:{href:"https://pixhawk.org/peripherals/onboard_computers/odroid_c1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C1 tutorial"),a("OutboundLink")],1),e._v(" in the section Establishing wifi connection with antenna.")]),e._v(" "),a("h2",{attrs:{id:"配置-wifi-为接入点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-wifi-为接入点"}},[e._v("#")]),e._v(" 配置 WiFi 为接入点")]),e._v(" "),a("p",[e._v('本节演示如何设置 odroid c1, 使其成为接入点。 The content is taken from the pixhawk.org "access point" tutorial (no longer available) with some small adaptions. This sections shows how to set up the Odroid C1 such that it is an access point. The content is taken from this '),a("a",{attrs:{href:"https://pixhawk.org/peripherals/onboard_computers/access_point",target:"_blank",rel:"noopener noreferrer"}},[e._v("tutorial"),a("OutboundLink")],1),e._v(" with some small adaptions. To enable to stream the video from the camera via the Odroid C1 to the QGroundControl that runs on a computer it is not required to follow this section. However, it is shown here because setting up the Odroid C1 as an access point allows to use the system in a stand-alone fashion. The TP-LINK TL-WN722N is used as a WiFi module. In the ensuing steps it is assumed that the Odroid C1 assigns the name wlan0 to your WiFi module. Change all occurrences of wlan0 to the appropriate interface if different (e.g. wlan1). 但是, 这篇教程的意义是, 将 odroid c1 设置为接入点允许以独立的方式使用该系统。 在此使用的是 TP-LINK TL-WN722N。")]),e._v(" "),a("p",[e._v("In the following steps it is assumed that the Odroid C1 assigns the name wlan0 to your WiFi module. 如果不同, 请将所有出现的 wlan0 更改为相应的接口 (例如 wlan1)。")]),e._v(" "),a("h3",{attrs:{id:"配置机载电脑为接入点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置机载电脑为接入点"}},[e._v("#")]),e._v(" 配置机载电脑为接入点")]),e._v(" "),a("p",[e._v("有关更深入解释, 请查阅 "),a("a",{attrs:{href:"http://elinux.org/RPI-Wireless-Hotspot",target:"_blank",rel:"noopener noreferrer"}},[e._v("RPI-Wireless-Hotspot"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("安装必要的软件")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" hostapd udhcpd\n")])])]),a("p",[e._v("配置 DHCP Configure DHCP. Edit the file "),a("code",[e._v("/etc/udhcpd.conf")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("start "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.100 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This is the range of IPs that the hotspot will give to client devices.")]),e._v("\nend "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.200\ninterface wlan0 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The device uDHCP listens on.")]),e._v("\nremaining "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\nopt dns "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.8")]),e._v(".8.8 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.2")]),e._v(".2.2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The DNS servers client devices will use (if routing through the Ethernet link).")]),e._v("\nopt subnet "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".255.0\nopt router "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The Onboard Computer's IP address on wlan0 which we will set up shortly.")]),e._v("\nopt lease "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("864000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 10 day DHCP lease time in seconds")]),e._v("\nend "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.200\ninterface wlan0 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The device uDHCP listens on.")]),e._v("\nremaining "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\nopt dns "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.8")]),e._v(".8.8 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.2")]),e._v(".2.2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The DNS servers client devices will use (if routing through the Ethernet link).")]),e._v("\nopt subnet "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".255.0\nopt router "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# wlan0 上的机载计算机的 IP 地址， 也就是我们稍后会设置的。")]),e._v("\nopt lease "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("864000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 10 天 DHCP 租约时间，以秒为单位")]),e._v("\n")])])]),a("p",[e._v("其他“opt”命令不应该被配置。如果您知道自己在做什么，则配置其他命令。")]),e._v(" "),a("p",[e._v("编辑如下文件 "),a("code",[e._v("/etc/default/udhcpd")]),e._v("，修改其中的一行：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DHCPD_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"no"')]),e._v("\n")])])]),a("p",[e._v("至")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#DHCPD_ENABLED="no"')]),e._v("\n")])])]),a("p",[e._v("您需要为机载计算机配置静态 ip 地址。 You will need to give the Onboard Computer a static IP address. Edit the file "),a("code",[e._v("/etc/network/interfaces")]),e._v(" and replace the line "),a("code",[e._v("iface wlan0 inet dhcp")]),e._v(" (or "),a("code",[e._v("iface wlan0 inet manual")]),e._v(") to:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("auto wlan0\niface wlan0 inet static\naddress "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.1\nnetmask "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".255.0\nnetwork "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.0\nbroadcast "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.255\nwireless-power off\n")])])]),a("p",[e._v("禁用原始 (WiFi Client) 自动配置。 Disable the original (WiFi Client) auto configuration. Change the lines (they probably will not be all next to each other or may not even be there at all):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("allow-hotplug wlan0\nwpa-roam /etc/wpa_supplicant/wpa_supplicant.conf\niface default inet dhcp\n")])])]),a("p",[e._v("到：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#allow-hotplug wlan0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#iface default inet dhcp")]),e._v("\n")])])]),a("p",[e._v("If you have followed the "),a("a",{attrs:{href:"https://pixhawk.org/peripherals/onboard_computers/odroid_c1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C1 tutorial"),a("OutboundLink")],1),e._v(" to set up the WiFi connection, you might have created the file "),a("code",[e._v("/etc/network/intefaces.d/wlan0")]),e._v(". Please comment out all lines in that file such that those configurations have no effect anymore. 请注释掉该文件中的所有行，以使这些配置不再有效。")]),e._v(" "),a("p",[e._v("配置HostAPD：要创建受WPA保护的网络，请编辑文件 "),a("code",[e._v("/etc/hostapd/hostapd.conf")]),e._v("（如果它不存在则创建它）并添加以下行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("auth_algs=1\nchannel=6            # 要使用的通道\nhw_mode=g\nieee80211n=1          # 802.11n 假设你的设备支持它\nignore_broadcast_ssid=0\ninterface=wlan0\nwpa=2\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=TKIP\nrsn_pairwise=CCMP\n# 更改至正确的驱动\ndriver=nl80211\n# 如果需要的话，把下面两项改成别的名字和密码\nssid=OdroidC1\nwpa_passphrase=QGroundControl\n")])])]),a("p",[e._v("更改 "),a("code",[e._v("ssid=")]),e._v(", "),a("code",[e._v("channel=")]),e._v(", 和 "),a("code",[e._v("wpa_passphrase=")]),e._v(" 。 Change "),a("code",[e._v("ssid=")]),e._v(", "),a("code",[e._v("channel=")]),e._v(", and "),a("code",[e._v("wpa_passphrase=")]),e._v(" to values of your choice. SSID is the hotspot's name which is broadcast to other devices, channel is what frequency the hotspot will run on, wpa_passphrase is the password for the wireless network. For many more options see the file "),a("code",[e._v("/usr/share/doc/hostapd/examples/hostapd.conf.gz")]),e._v(". Look for a channel that is not in use in the area. You can use tools such as "),a("em",[e._v("wavemon")]),e._v(" for that. 有更多选项，请参阅该文件  "),a("code",[e._v("/usr/share/doc/hostapd/examples/hostapd.conf.gz")]),e._v("。 寻找该区域未使用的频道。 您可以使用 "),a("em",[e._v("wavemon")]),e._v(" 等工具。")]),e._v(" "),a("p",[e._v("编辑如下文件 "),a("code",[e._v("/etc/default/hostapd")]),e._v(" ，修改其中的一行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#DAEMON_CONF=""\n')])])]),a("p",[e._v("到：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('DAEMON_CONF="/etc/hostapd/hostapd.conf"\n')])])]),a("p",[e._v("您的板载计算机现在应该有无线热点。 Your Onboard Computer should now be hosting a wireless hotspot. To get the hotspot to start on boot, run these additional commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo update-rc.d hostapd enable\nsudo update-rc.d udhcpd enable\n")])])]),a("p",[e._v("This is enough to have the Onboard Computer present itself as an Access Point and allow your ground station to connect. If you truly want to make it work as a real Access Point (routing the WiFi traffic to the Onboard Computer’s Ethernet connection), we need to configure the routing and network address translation (NAT). Enable IP forwarding in the kernel: 如果您真的希望将其作为真正的接入点（将WiFi流量路由到板载计算机的以太网连接），我们需要配置路由和网络地址转换（NAT）。 在内核中启用端口转发：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"echo 1 > /proc/sys/net/ipv4/ip_forward"')]),e._v("\n")])])]),a("p",[e._v("要做到这一点，请运行以下命令：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT\n")])])]),a("p",[e._v("要使其永久化，请运行以下命令：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"iptables-save > /etc/iptables.ipv4.nat"')]),e._v("\n")])])]),a("p",[e._v("现在，打开 /etc/network/interfaces 并在文件底部添加以下行:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("up iptables-restore "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" /etc/iptables.ipv4.nat\n")])])]),a("h1",{attrs:{id:"gstreamer-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gstreamer-安装"}},[e._v("#")]),e._v(" Gstreamer 安装")]),e._v(" "),a("p",[e._v("To install gstreamer packages on the computer and on the Odroid C1 and start the stream, follow the instruction given in the "),a("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/src/VideoStreaming/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl README"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("如果您无法使用 uvch264s 插件启动 odroid 上的流, 您也可以尝试使用 v4l2src 插件启动它:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("gst-launch-1.0 v4l2src "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("device")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/dev/video0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" video/x-h264,width"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1920")]),e._v(",height"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1080")]),e._v(",framerate"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v("/1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" h264parse "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" rtph264pay "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" udpsink "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xxx.xxx.xxx.xxx "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5000")]),e._v(" video/x-h264,width"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1920")]),e._v(",height"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1080")]),e._v(",framerate"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v("/1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" h264parse "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" rtph264pay "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" udpsink "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xxx.xxx.xxx.xxx "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5000")]),e._v("\n")])])]),a("p",[e._v("其中 "),a("code",[e._v("“xxx.xxx.xxx.xxx”")]),e._v(" 是QGC运行的IP地址")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" If you get the system error: "),a("code",[e._v("Permission denied")]),e._v(", you might need to prepend "),a("code",[e._v("sudo")]),e._v(" to the command above. Alternatively add the current user to the "),a("code",[e._v("video")]),e._v(" group as shown below (and then logout/login):")])]),e._v(" "),a("p",[e._v("或者, 将当前用户添加到 "),a("code",[e._v("video")]),e._v(" 组, 如下所示 (然后注销/登录):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG video "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("\n")])])]),a("p",[e._v("If everything works, you should see the video stream on the bottom left corner in the flight-mode window of QGroundControl as shown in the screenshot below.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(1296),alt:"QGC displaying video stream"}})]),e._v(" "),a("p",[e._v("如果您单击视频流, 卫星地图将显示在左下角, 视频将显示在整个背景中。")])])}),[],!1,null,null,null);t.default=n.exports}}]);