(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{1251:function(e,t,a){e.exports=a.p+"assets/img/setup_whole.a50d8747.jpg"},1252:function(e,t,a){e.exports=a.p+"assets/img/power-pins.b7d302d0.jpg"},1253:function(e,t,a){e.exports=a.p+"assets/img/qgc-screenshot.a0938559.png"},2618:function(e,t,a){"use strict";a.r(t);var s=a(18),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"video-streaming-in-qgroundcontrol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video-streaming-in-qgroundcontrol"}},[e._v("#")]),e._v(" Video streaming in QGroundControl")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),s("p",[e._v("This article is somewhat out of date. Community members are encouraged to retest the instructions on a more recent Ubuntu version, and to import Odroid setup instructions into the wiki.")])]),e._v(" "),s("p",[e._v("This topic shows how to stream video from a camera (Logitech C920) attached to a companion computer ("),s("a",{attrs:{href:"https://magazine.odroid.com/wp-content/uploads/odroid-c1-user-manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C1"),s("OutboundLink")],1),e._v(") to another computer (over wifi) and display in "),s("em",[e._v("QGroundControl")]),e._v(".")]),e._v(" "),s("p",[e._v("The hardware setup is shown in the figure below. It consists of the following parts:")]),e._v(" "),s("ul",[s("li",[e._v("Odroid C1")]),e._v(" "),s("li",[e._v("Logitech 摄像头 C920")]),e._v(" "),s("li",[e._v("WiFi 模块 TP-LINK TL-WN722N")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(1251),alt:"Setup"}})]),e._v(" "),s("p",[e._v("The instructions were tested on Ubuntu 14.04 but a similar approach should work for later Ubuntu versions.")]),e._v(" "),s("h2",{attrs:{id:"install-linux-environment-in-odroid-c1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-linux-environment-in-odroid-c1"}},[e._v("#")]),e._v(" Install Linux environment in Odroid C1")]),e._v(" "),s("p",[e._v("The Odroid C1 can be powered via the 5V DC jack. If the Odroid is mounted on a drone, it is recommended to solder two pins next to the 5V DC jack by applying the through-hole soldering "),s("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-soldering",target:"_blank",rel:"noopener noreferrer"}},[e._v("method"),s("OutboundLink")],1),e._v(" as shown in the figure below. The power is delivered by connecting the DC voltage source (5 V) via a jumper cable (red in the image above) with the Odroid C1 and connect the ground of the circuit with a jumper cable (black in the image above) with a ground pin of the Odroid C1 in the example setup. 如果 Odroid 被安装在飞行器上，建议将两个跳线通过插片式的"),s("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-soldering",target:"_blank",rel:"noopener noreferrer"}},[e._v("方法"),s("OutboundLink")],1),e._v("焊接在电路上")]),e._v(" "),s("h2",{attrs:{id:"set-up-alternative-power-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-alternative-power-connection"}},[e._v("#")]),e._v(" Set up alternative power connection")]),e._v(" "),s("p",[e._v("The Odroid C1 can be powered via the 5V DC jack. If the Odroid is mounted on a drone, it is recommended to solder two pins next to the 5V DC jack by applying the through-hole soldering "),s("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-soldering",target:"_blank",rel:"noopener noreferrer"}},[e._v("method"),s("OutboundLink")],1),e._v(" as shown in the figure below. The power is delivered by connecting the DC voltage source (5 V) via a jumper cable (red in the image above) with the Odroid C1 and connect the ground of the circuit with a jumper cable (black in the image above) with a ground pin of the Odroid C1 in the example setup.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(1252),alt:"Power Pins"}})]),e._v(" "),s("h2",{attrs:{id:"enable-wifi-connection-for-odroid-c1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-wifi-connection-for-odroid-c1"}},[e._v("#")]),e._v(" Enable WiFi connection for Odroid C1")]),e._v(" "),s("p",[e._v("本节演示如何设置 odroid c1, 使其成为接入点。 To enable WiFi connection for the Odroid C1, follow the steps described in the "),s("a",{attrs:{href:"http://web.archive.org/web/20180617111122/http://pixhawk.org/peripherals/onboard_computers/odroid_c1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C1 tutorial"),s("OutboundLink")],1),e._v(" in the section Establishing wifi connection with antenna.")]),e._v(" "),s("h2",{attrs:{id:"配置-wifi-为接入点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-wifi-为接入点"}},[e._v("#")]),e._v(" 配置 WiFi 为接入点")]),e._v(" "),s("p",[e._v("This sections shows how to set up the Odroid C1 such that it is an access point. 如果不同, 请将所有出现的 wlan0 更改为相应的接口 (例如 wlan1)。 To enable to stream the video from the camera via the Odroid C1 to the QGroundControl that runs on a computer it is not required to follow this section. However, it is shown here because setting up the Odroid C1 as an access point allows to use the system in a stand-alone fashion. The TP-LINK TL-WN722N is used as a WiFi module.")]),e._v(" "),s("p",[e._v("In the following steps it is assumed that the Odroid C1 assigns the name wlan0 to your WiFi module. Change all occurrences of wlan0 to the appropriate interface if different (e.g. wlan1).")]),e._v(" "),s("h3",{attrs:{id:"配置机载电脑为接入点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置机载电脑为接入点"}},[e._v("#")]),e._v(" 配置机载电脑为接入点")]),e._v(" "),s("p",[e._v("安装必要的软件")]),e._v(" "),s("p",[e._v("Install the necessary software")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" hostapd udhcpd\n")])])]),s("p",[e._v("Configure DHCP. Edit the file "),s("code",[e._v("/etc/udhcpd.conf")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("start "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.100 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This is the range of IPs that the hotspot will give to client devices.")]),e._v("\nend "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.200\ninterface wlan0 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The device uDHCP listens on.")]),e._v("\nremaining "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\nopt dns "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.8")]),e._v(".8.8 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.2")]),e._v(".2.2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The DNS servers client devices will use (if routing through the Ethernet link).")]),e._v("\nopt subnet "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".255.0\nopt router "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The Onboard Computer's IP address on wlan0 which we will set up shortly.")]),e._v("\nopt lease "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("864000")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 10 day DHCP lease time in seconds")]),e._v("\nend "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.200\ninterface wlan0 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The device uDHCP listens on.")]),e._v("\nremaining "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\nopt dns "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.8")]),e._v(".8.8 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.2")]),e._v(".2.2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The DNS servers client devices will use (if routing through the Ethernet link).")]),e._v("\nopt subnet "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".255.0\nopt router "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# wlan0 上的机载计算机的 IP 地址， 也就是我们稍后会设置的。")]),e._v("\nopt lease "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("864000")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 10 天 DHCP 租约时间，以秒为单位")]),e._v("\n")])])]),s("p",[e._v("编辑如下文件 "),s("code",[e._v("/etc/default/udhcpd")]),e._v("，修改其中的一行：")]),e._v(" "),s("p",[e._v("至")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DHCPD_ENABLED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"no"')]),e._v("\n")])])]),s("p",[e._v("to")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#DHCPD_ENABLED="no"')]),e._v("\n")])])]),s("p",[e._v("禁用原始 (WiFi Client) 自动配置。 Disable the original (WiFi Client) auto configuration. Change the lines (they probably will not be all next to each other or may not even be there at all):")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("auto wlan0\niface wlan0 inet static\naddress "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.1\nnetmask "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".255.0\nnetwork "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.0\nbroadcast "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".2.255\nwireless-power off\n")])])]),s("p",[e._v("Disable the original (WiFi Client) auto configuration. Change the lines (they probably will not be all next to each other or may not even be there at all):")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("allow-hotplug wlan0\nwpa-roam /etc/wpa_supplicant/wpa_supplicant.conf\niface default inet dhcp\n")])])]),s("p",[e._v("to:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#allow-hotplug wlan0")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#iface default inet dhcp")]),e._v("\n")])])]),s("p",[e._v("If you have followed the "),s("em",[e._v("Odroid C1 tutorial")]),e._v(" (originally pixhawk.org) to set up the WiFi connection, you might have created the file "),s("code",[e._v("/etc/network/intefaces.d/wlan0")]),e._v(". Please comment out all lines in that file such that those configurations have no effect anymore.")]),e._v(" "),s("p",[e._v("Configure HostAPD: To create a WPA-secured network, edit the file "),s("code",[e._v("/etc/hostapd/hostapd.conf")]),e._v(" (create it if it does not exist) and add the following lines:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("auth_algs=1\nchannel=6            # 要使用的通道\nhw_mode=g\nieee80211n=1          # 802.11n 假设你的设备支持它\nignore_broadcast_ssid=0\ninterface=wlan0\nwpa=2\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=TKIP\nrsn_pairwise=CCMP\n# 更改至正确的驱动\ndriver=nl80211\n# 如果需要的话，把下面两项改成别的名字和密码\nssid=OdroidC1\nwpa_passphrase=QGroundControl\n")])])]),s("p",[e._v("Change "),s("code",[e._v("ssid=")]),e._v(", "),s("code",[e._v("channel=")]),e._v(", and "),s("code",[e._v("wpa_passphrase=")]),e._v(" to values of your choice. SSID is the hotspot's name which is broadcast to other devices, channel is what frequency the hotspot will run on, wpa_passphrase is the password for the wireless network. For many more options see the file "),s("code",[e._v("/usr/share/doc/hostapd/examples/hostapd.conf.gz")]),e._v(". Look for a channel that is not in use in the area. You can use tools such as "),s("em",[e._v("wavemon")]),e._v(" for that.")]),e._v(" "),s("p",[e._v("到：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('#DAEMON_CONF=""\n')])])]),s("p",[e._v("to:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('DAEMON_CONF="/etc/hostapd/hostapd.conf"\n')])])]),s("p",[e._v("This is enough to have the Onboard Computer present itself as an Access Point and allow your ground station to connect. If you truly want to make it work as a real Access Point (routing the WiFi traffic to the Onboard Computer’s Ethernet connection), we need to configure the routing and network address translation (NAT). Enable IP forwarding in the kernel: 如果您真的希望将其作为真正的接入点（将WiFi流量路由到板载计算机的以太网连接），我们需要配置路由和网络地址转换（NAT）。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo update-rc.d hostapd enable\nsudo update-rc.d udhcpd enable\n")])])]),s("p",[e._v("This is enough to have the Onboard Computer present itself as an Access Point and allow your ground station to connect. If you truly want to make it work as a real Access Point (routing the WiFi traffic to the Onboard Computer’s Ethernet connection), we need to configure the routing and network address translation (NAT). Enable IP forwarding in the kernel:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"echo 1 > /proc/sys/net/ipv4/ip_forward"')]),e._v("\n")])])]),s("p",[e._v("要使其永久化，请运行以下命令：")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT\n")])])]),s("p",[e._v("现在，打开 /etc/network/interfaces 并在文件底部添加以下行:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"iptables-save > /etc/iptables.ipv4.nat"')]),e._v("\n")])])]),s("p",[e._v("To install gstreamer packages on the computer and on the Odroid C1 and start the stream, follow the instruction given in the "),s("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/src/VideoStreaming/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl README"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("up iptables-restore "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" /etc/iptables.ipv4.nat\n")])])]),s("h1",{attrs:{id:"gstreamer-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gstreamer-安装"}},[e._v("#")]),e._v(" Gstreamer 安装")]),e._v(" "),s("p",[e._v("如果您无法使用 uvch264s 插件启动 odroid 上的流, 您也可以尝试使用 v4l2src 插件启动它:")]),e._v(" "),s("p",[e._v("其中 "),s("code",[e._v("“xxx.xxx.xxx.xxx”")]),e._v(" 是QGC运行的IP地址")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("gst-launch-1.0 v4l2src "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("device")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/dev/video0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" video/x-h264,width"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1920")]),e._v(",height"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1080")]),e._v(",framerate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v("/1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" h264parse "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" rtph264pay "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" udpsink "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("host")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xxx.xxx.xxx.xxx "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5000")]),e._v(" video/x-h264,width"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1920")]),e._v(",height"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1080")]),e._v(",framerate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v("/1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" h264parse "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" rtph264pay "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" udpsink "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("host")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xxx.xxx.xxx.xxx "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5000")]),e._v("\n")])])]),s("p",[e._v("Where "),s("code",[e._v("xxx.xxx.xxx.xxx")]),e._v(" is the IP address where QGC is running.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("If you get the system error: "),s("code",[e._v("Permission denied")]),e._v(", you might need to prepend "),s("code",[e._v("sudo")]),e._v(" to the command above.")])]),e._v(" "),s("p",[e._v("Alternatively add the current user to the "),s("code",[e._v("video")]),e._v(" group as shown below (and then logout/login):")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG video "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("\n")])])]),s("p",[e._v("如果您单击视频流, 卫星地图将显示在左下角, 视频将显示在整个背景中。")]),e._v(" "),s("p",[s("img",{attrs:{src:a(1253),alt:"QGC displaying video stream"}})]),e._v(" "),s("p",[e._v("If you click on the video stream, the satellite map is shown in the left bottom corner and the video is shown in the whole background.")])])}),[],!1,null,null,null);t.default=n.exports}}]);