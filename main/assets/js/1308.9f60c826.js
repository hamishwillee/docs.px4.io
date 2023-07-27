(window.webpackJsonp=window.webpackJsonp||[]).push([[1308],{2420:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"long-distance-data-link-using-wifi-in-raw-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#long-distance-data-link-using-wifi-in-raw-mode"}},[e._v("#")]),e._v(" Long-distance Data-link using WiFi in Raw Mode")]),e._v(" "),a("p",[e._v("This page shows how to set up a companion computer with a camera (Logitech C920 or RaspberryPi camera) such that the video stream is transferred from the UAV to a ground computer and displayed in "),a("em",[e._v("QGroundControl")]),e._v(".\nIt also provide a bidirectional "),a("RouterLink",{attrs:{to:"/en/telemetry/"}},[e._v("telemetry")]),e._v(" link and TCP/IP tunnel for drone control during flight.\nIf you manually control the drone with a Joystick from QGroundControl (which uses MAVLink) then you can use WFB-ng as single link for all drone communications (Video, MAVLink telemetry, remote control using a Joystick).")],1),e._v(" "),a("p",[e._v("This setup uses WiFi in unconnected (broadcast) mode and software from the "),a("a",{attrs:{href:"https://github.com/svpcom/wfb-ng",target:"_blank",rel:"noopener noreferrer"}},[e._v("WFB-ng project"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Before using "),a("em",[e._v("WFB-ng")]),e._v(" check regulators allow this kind of WiFi use in your country.")])]),e._v(" "),a("h2",{attrs:{id:"wfb-ng-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wfb-ng-overview"}},[e._v("#")]),e._v(" WFB-ng Overview")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("WFB-ng project")]),e._v(" provides a data transport that use low-level WiFi packets to avoid the distance and latency limitations of the ordinary IEEE 802.11 stack.")]),e._v(" "),a("p",[e._v("The high level benefits of "),a("em",[e._v("WFB-ng")]),e._v(" include:")]),e._v(" "),a("ul",[a("li",[e._v("Low-latency video link.")]),e._v(" "),a("li",[e._v("Bidirectional telemetry link (MAVLink).")]),e._v(" "),a("li",[e._v("TCP/IP tunnel.")]),e._v(" "),a("li",[e._v("Automatic TX diversity - use multiple cards on the ground to avoid antenna tracker.")]),e._v(" "),a("li",[e._v("Full link encryption and authentication (using "),a("a",{attrs:{href:"https://download.libsodium.org/doc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("libsodium"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("li",[e._v("Aggregation of MAVLink packets (pack small packets into batches before transmitting).")]),e._v(" "),a("li",[e._v("Enhanced "),a("a",{attrs:{href:"https://github.com/svpcom/wfb-ng-osd",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSD"),a("OutboundLink")],1),e._v(" for Raspberry PI or generic linux desktop with gstreamer.")])]),e._v(" "),a("p",[e._v("Additional information is provided in the "),a("a",{attrs:{href:"#faq"}},[e._v("FAQ")]),e._v(" below.")]),e._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),a("p",[e._v("The hardware setup consists of the following parts:")]),e._v(" "),a("p",[e._v("On the UAV side:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Raspberry PI 3B/3B+/ZeroW")])]),e._v(" "),a("li",[a("p",[e._v("One of:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.raspberrypi.org/products/camera-module-v2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raspberry Pi camera"),a("OutboundLink")],1),e._v(" connected via CSI.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.logitech.com/en-us/product/hd-pro-webcam-c920?crid=34",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logitech camera C920"),a("OutboundLink")],1),e._v(" connected via USB")])])])])]),e._v(" "),a("ul",[a("li",[e._v("WiFi module  "),a("a",{attrs:{href:"https://www.alfa.com.tw/products_detail/1.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALPHA AWUS036ACH"),a("OutboundLink")],1),e._v(" or any other "),a("strong",[e._v("RTL8812au")]),e._v(" card.")])]),e._v(" "),a("p",[e._v("On the ground side:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("One of:")]),e._v(" "),a("ul",[a("li",[e._v("Any computer with USB port and Linux (tested on ubuntu 18.04 x86-64)")]),e._v(" "),a("li",[e._v("Raspberry PI connected via Ethernet to computer running QGroundControl on any OS.")])])]),e._v(" "),a("li",[a("p",[e._v("WiFi module  "),a("a",{attrs:{href:"https://www.alfa.com.tw/products_detail/1.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALPHA AWUS036ACH"),a("OutboundLink")],1),e._v(" or any other "),a("strong",[e._v("RTL8812au")]),e._v(" card.\nSee "),a("a",{attrs:{href:"https://github.com/svpcom/wfb-ng/wiki/WiFi-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("WFB-ng wiki > WiFi hardware"),a("OutboundLink")],1),e._v(" for more information on supported modules.")])])]),e._v(" "),a("h2",{attrs:{id:"hardware-modification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-modification"}},[e._v("#")]),e._v(" Hardware Modification")]),e._v(" "),a("p",[e._v("Alpha AWUS036ACH is a medium power card that uses a lot of current while transmitting.\nIf you power it from ordinary USB2 it will reset the port on most "),a("strong",[e._v("ARM boards")]),e._v(".\nIf you connect it to "),a("strong",[e._v("USB3")]),e._v(" port via "),a("strong",[e._v("native USB3 cable")]),e._v(" to a "),a("strong",[e._v("Linux laptop")]),e._v(" you can use it without modification.")]),e._v(" "),a("p",[e._v("For "),a("strong",[e._v("Raspberry PI")]),e._v(" (UAV or ground) it must be directly connected to 5V BEC (or high current power adapter in case of ground pi) in one of two ways:")]),e._v(" "),a("ul",[a("li",[e._v("Make a custom USB cable ([cut "),a("code",[e._v("+5V")]),e._v(" wire from USB plug and connect it to BEC])(https://electronics.stackexchange.com/questions/218500/usb-charge-and-data-separate-cables)")]),e._v(" "),a("li",[e._v("Cut a "),a("code",[e._v("+5V")]),e._v(" wire on PCB near USB port and wire it to BEC (don't do this if doubt - use custom cable instead).")])]),e._v(" "),a("p",[e._v("You must also add a 470uF "),a("strong",[e._v("low ESR capacitor")]),e._v(" (like ESC has) between "),a("strong",[e._v("card +5v and ground")]),e._v(" to filter voltage spikes.\nYou should integrate the capacitor with a custom USB cable.\nWithout the capacitor you can get packet corruption or packet loss.\nBe aware of "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ground_loop_%28electricity%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("ground loop"),a("OutboundLink")],1),e._v(" when using several ground wires.")]),e._v(" "),a("p",[a("strong",[e._v("But if you use special very high power cards from taobao/aliexpress then you MUST power it as described above in ANY case.")])]),e._v(" "),a("h3",{attrs:{id:"uav-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uav-configuration"}},[e._v("#")]),e._v(" UAV configuration")]),e._v(" "),a("ol",[a("li",[e._v("Download Raspberry PI image from "),a("a",{attrs:{href:"https://github.com/svpcom/wfb-ng/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest wfb-ng release"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Flash it to the "),a("strong",[e._v("UAV")]),e._v(" Raspberry PI")]),e._v(" "),a("li",[e._v("Reboot it and ssh with standard credentials (pi/raspberry).")]),e._v(" "),a("li",[e._v("Run actions for "),a("strong",[e._v("air")]),e._v(" role as displayed in motd.")]),e._v(" "),a("li",[e._v("Setup camera pipeline. Open "),a("code",[e._v("/etc/systemd/system/fpv-camera.service")]),e._v(" and uncomment pipeline according to your camera (PI camera or Logitech camera)")]),e._v(" "),a("li",[e._v("Open "),a("code",[e._v("/etc/wifibroadcast.cfg")]),e._v(" and configure WiFi channel according to your antenna setup (or use default #165 for 5.8GHz)")]),e._v(" "),a("li",[e._v("Configure PX4 to output telemetry stream at speed 1500kbps (other UART speeds doesn't match well to RPI frequency dividers).\nConnect Pixhawk uart to Raspberry PI uart. In "),a("code",[e._v("/etc/wifibroadcast.cfg")]),e._v(" uncomment "),a("code",[e._v("peer = 'serial:ttyS0:1500000'")]),e._v(" in "),a("code",[e._v("[drone_mavlink]")]),e._v(" section.")])]),e._v(" "),a("h3",{attrs:{id:"using-a-linux-laptop-as-gcs-harder-than-using-a-raspi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-linux-laptop-as-gcs-harder-than-using-a-raspi"}},[e._v("#")]),e._v(" Using a Linux Laptop as GCS (Harder than using a RasPi)")]),e._v(" "),a("ol",[a("li",[e._v("On "),a("strong",[e._v("ground")]),e._v(" Linux development computer:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt install libpcap-dev libsodium-dev python3-all python3-twisted\ngit clone -b stable https://github.com/svpcom/wfb-ng.git\ncd wfb-ng && make deb && sudo apt install ./deb_dist/wfb-ng*.deb\n")])])])]),e._v(" "),a("li",[e._v("Follow "),a("a",{attrs:{href:"https://github.com/svpcom/wfb-ng/wiki/Setup-HOWTO",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup HOWTO"),a("OutboundLink")],1),e._v(" to complete installation")]),e._v(" "),a("li",[e._v("Don't forget to copy "),a("code",[e._v("/etc/gs.key")]),e._v(" from "),a("strong",[e._v("UAV")]),e._v(" side to "),a("strong",[e._v("ground")]),e._v(" side to bind two setups.")]),e._v(" "),a("li",[e._v("Also don't forget to use the same frequency channel as on the UAV side.")])]),e._v(" "),a("h3",{attrs:{id:"using-raspberry-pi-as-gcs-easier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-raspberry-pi-as-gcs-easier"}},[e._v("#")]),e._v(" Using Raspberry PI as GCS (Easier)")]),e._v(" "),a("p",[e._v("If you have Windows, OSX, or don't want to setup WFB-ng to your Linux laptop then you can use the same prebuilt image and another Raspberry Pi:")]),e._v(" "),a("ol",[a("li",[e._v("Flash image to the "),a("strong",[e._v("ground")]),e._v(" Raspberry Pi.")]),e._v(" "),a("li",[e._v("Reboot it and SSH in with standard credentials (pi/raspberry).")]),e._v(" "),a("li",[e._v("Run actions for "),a("strong",[e._v("ground")]),e._v(" role as displayed in motd, but skip setup of "),a("code",[e._v("fpv-video")]),e._v(" service and "),a("code",[e._v("osd")]),e._v(" service.")]),e._v(" "),a("li",[e._v("Connect your laptop and ground RasPi via ethernet and configure IP addresses")]),e._v(" "),a("li",[e._v("Edit "),a("code",[e._v("/etc/wifibroadcast.cfg")]),e._v(" and set the IP address of the laptop in "),a("code",[e._v("[gs_mavlink]")]),e._v(" and "),a("code",[e._v("[gs_video]")]),e._v(" sections (replacing "),a("code",[e._v("127.0.0.1")]),e._v(").")])]),e._v(" "),a("h3",{attrs:{id:"qgroundcontrol-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-setup"}},[e._v("#")]),e._v(" QGroundControl Setup")]),e._v(" "),a("ol",[a("li",[e._v("Run "),a("em",[e._v("QGroundControl")]),e._v(" and set "),a("code",[e._v("RTP h264")]),e._v(" on port 5600 as video source")]),e._v(" "),a("li",[e._v("Use default settings (udp on port 14550) as mavlink source")])]),e._v(" "),a("h2",{attrs:{id:"tuning-radio-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-radio-settings"}},[e._v("#")]),e._v(" Tuning Radio Settings")]),e._v(" "),a("p",[e._v("With default settings WFB use radio channel 165 (5825 MHz), width 20MHz, MCS #1 (QPSK 1/2) with long GI.\nThis provides ~7 mbit/s of "),a("strong",[e._v("effective")]),e._v(" speed (i.e. usable speed after FEC and packet encoding) for "),a("strong",[e._v("both directions")]),e._v(" in sum, because WiFi is half-duplex.\nSo it is suitable for video down stream 720p@49fps (4 mbit/s) + two full-speed telemetry streams (uplink and downlink).\nIf you need a higher bandwidth you can use other MCS index (for example 2 or greater)")]),e._v(" "),a("h2",{attrs:{id:"antennas-and-diversity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antennas-and-diversity"}},[e._v("#")]),e._v(" Antennas and Diversity")]),e._v(" "),a("p",[e._v("For simple cases you can use omnidirectional antennas with linear (that bundled with wifi cards) or circular leaf ("),a("a",{attrs:{href:"http://www.antenna-theory.com/antennas/cloverleaf.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("circularly polarized Coverleaf Antenna"),a("OutboundLink")],1),e._v(") polarization.\nIf you want to setup long distance link you can use multiple wifi adapters with directional and omnidirectional antennas. TX/RX diversity for multiple adapters supported out of box (just add multiple NICs to "),a("code",[e._v("/etc/default/wifibroadcast")]),e._v(").\nIf your WiFi adapter has two antennas (like Alfa AWU036ACH) TX diversity is implemented via "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Space%E2%80%93time_block_code",target:"_blank",rel:"noopener noreferrer"}},[e._v("STBC"),a("OutboundLink")],1),e._v(".\nCards with 4 ports (like Alfa AWUS1900) are currently not supported.")]),e._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("p",[a("strong",[e._v("Q:")]),e._v(" "),a("em",[e._v("What type of data can be transmitted using wfb-ng?")])]),e._v(" "),a("p",[a("strong",[e._v("A:")]),e._v(" Any UDP with packet size <= 1445.\nFor example x264 inside RTP or MAVLink.")]),e._v(" "),a("p",[a("strong",[e._v("Q:")]),e._v(" "),a("em",[e._v("What are transmission guarantees?")])]),e._v(" "),a("p",[a("strong",[e._v("A:")]),e._v(" Wifibroadcast uses FEC (forward error correction).\nYou can tune it (both TX and RX simultaneously!) to fit your needs.")]),e._v(" "),a("p",[a("strong",[e._v("Q")]),e._v(" "),a("em",[e._v("How far I can fly and still connect?")])]),e._v(" "),a("p",[a("strong",[e._v("A")]),e._v(" It depends on your antennas and WiFi cards.\nWith Alfa AWU036ACH and 20dBi patch antenna on the ground ~20km is possible.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Don't use band that the RC TX operates on!\nOr setup RTL properly to avoid model loss.")])]),e._v(" "),a("p",[a("strong",[e._v("Q:")]),e._v(" "),a("em",[e._v("Is only Raspberry PI supported?")])]),e._v(" "),a("p",[a("strong",[e._v("A:")]),e._v(" WFB-ng is not tied to any GPU - it operates with UDP packets.\nBut to get RTP stream you need a video encoder (which encodes raw data from camera to x264 stream), or you must use a camera with a hardware video codec like Logitech C920 or Ethernet security cameras.")]),e._v(" "),a("h4",{attrs:{id:"what-arm-boards-are-recommended-for-the-uav"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-arm-boards-are-recommended-for-the-uav"}},[e._v("#")]),e._v(" What ARM Boards are Recommended for the UAV?")]),e._v(" "),a("ul",[a("li",[e._v("RPI3b/3b+/ZeroW.\nPrebuilt images are available, but it supports only h264 video for CSI cameras.")]),e._v(" "),a("li",[e._v("Jetson Nano. It supports h264 and h265 but you need to setup it yourself according to "),a("a",{attrs:{href:"https://github.com/svpcom/wfb-ng/wiki/Setup-HOWTO",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup HOWTO"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("You can use any other Linux ARM board, but you need to use an Ethernet or USB camera with built-in hardware video codecs (such as Logitech C920).")]),e._v(" "),a("h2",{attrs:{id:"theory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theory"}},[e._v("#")]),e._v(" Theory")]),e._v(" "),a("p",[e._v("WFB-ng puts the WiFi cards into monitor mode. This mode allows to send and receive arbitrary packets without association and waiting for ACK packets.\n"),a("a",{attrs:{href:"https://github.com/svpcom/wfb-ng/blob/master/doc/Analysis%20of%20Injection%20Capabilities%20and%20Media%20Access%20of%20IEEE%20802.11%20Hardware%20in%20Monitor%20Mode.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Analysis of Injection Capabilities and Media Access of IEEE 802.11 Hardware in Monitor Mode"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/ewa/802.11-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("802.11 timings"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);