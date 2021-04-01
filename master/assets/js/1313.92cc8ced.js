(window.webpackJsonp=window.webpackJsonp||[]).push([[1313],{2729:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"long-distance-video-streaming-in-qgroundcontrol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#long-distance-video-streaming-in-qgroundcontrol"}},[e._v("#")]),e._v(" Long-distance Video Streaming in QGroundControl")]),e._v(" "),r("p",[e._v("This page shows how to set up a companion computer with a camera (Logitech C920 or RaspberryPi camera) such that the video stream is transferred from the UAV to a ground computer and displayed in "),r("em",[e._v("QGroundControl")]),e._v(". This setup uses WiFi in unconnected (broadcast) mode and software from the "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wifibroadcast project"),r("OutboundLink")],1),e._v(". The mechanism also provide a bidirectional telemetry link (i.e. like SiK radio). 此设置使用未连接 (广播) 模式下的 wifi 和 "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wifibroadcast project"),r("OutboundLink")],1),e._v(" 中的软件。")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("Before using "),r("em",[e._v("Wifibroadcast")]),e._v(" check regulators allow this kind of WiFi use in your country.")])]),e._v(" "),r("h2",{attrs:{id:"无线广播概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无线广播概述"}},[e._v("#")]),e._v(" 无线广播概述")]),e._v(" "),r("p",[r("em",[e._v("Wifibroadcast")]),e._v(" 的高级别优势包括:")]),e._v(" "),r("p",[e._v("有关详细信息，请参阅 "),r("a",{attrs:{href:"#faq"}},[e._v("FAQ")]),e._v("。")]),e._v(" "),r("ul",[r("li",[e._v("Minimal latency by encoding every incoming RTP packet to a single WiFi (IEEE80211) packet and immediately sending (doesn't serialize to byte stream).")]),e._v(" "),r("li",[e._v("智能 FEC 支持（如果 FEC 管道没有间隔，立即将数据包提供给视频解码器）。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki/Setup-HOWTO",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bidirectional MAVLink telemetry"),r("OutboundLink")],1),e._v(". You can use it for MAVLink up/down and video down link.")]),e._v(" "),r("li",[e._v("Automatic TX diversity (select TX card based on RX RSSI).")]),e._v(" "),r("li",[e._v("Aggregation of MAVLink packets. It doesn't send WiFi packet for every MAVLink packet.")]),e._v(" "),r("li",[e._v("分布式操作。 It can gather data from cards on different hosts. Distributed operation. It can gather data from cards on different hosts, so that bandwidth is not limited to that of a single USB bus.")]),e._v(" "),r("li",[e._v("Inject packets with radio link RSSI to MAVLink stream Doesn't send WiFi packet for every MAVLink packet.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast_osd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enhanced OSD for Raspberry Pi"),r("OutboundLink")],1),e._v(" (consumes 10% CPU on Pi Zero).")]),e._v(" "),r("li",[e._v("Compatible with any screen resolution. Supports aspect correction for PAL to HD scaling.")])]),e._v(" "),r("p",[e._v("硬件由如下部分组成：")]),e._v(" "),r("h2",{attrs:{id:"硬件安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[e._v("#")]),e._v(" 硬件安装")]),e._v(" "),r("p",[e._v("在发送端（无人机）：")]),e._v(" "),r("p",[e._v("在接收端（地面站）：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.friendlyarm.com/index.php?route=product/product&product_id=180",target:"_blank",rel:"noopener noreferrer"}},[e._v("NanoPI NEO2"),r("OutboundLink")],1),e._v(" (and/or Raspberry Pi if use Pi camera).")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.logitech.com/en-us/product/hd-pro-webcam-c920?crid=34",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logitech camera C920"),r("OutboundLink")],1),e._v(" 或者 "),r("a",{attrs:{href:"https://www.raspberrypi.org/products/camera-module-v2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raspberry Pi camera"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("WiFi module "),r("a",{attrs:{href:"https://www.alfa.com.tw/products_show.php?pc=67&ps=241",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALPHA AWUS051NH v2"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("Alpha WUS051NH is a high power card that uses too much current while transmitting. If you power it from USB it will reset the port on most ARM boards. So you need to connect it to 5V BEC directly. You can do this two ways:")]),e._v(" "),r("ul",[r("li",[e._v("任何使用 linux 的计算机 (在 fedora 25 x86-64 上测试)。")]),e._v(" "),r("li",[e._v("WiFi module "),r("a",{attrs:{href:"https://www.alfa.com.tw/products_show.php?pc=67&ps=241",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALPHA AWUS051NH v2"),r("OutboundLink")],1),e._v(". See "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki/WiFi-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("wifibroadcast wiki > WiFi hardware"),r("OutboundLink")],1),e._v(" for more information on supported modules.")])]),e._v(" "),r("p",[e._v("If you don't need high-power cards, you can use any card with "),r("strong",[e._v("rtl8812au")]),e._v(" chipset.")]),e._v(" "),r("h2",{attrs:{id:"硬件设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#硬件设置"}},[e._v("#")]),e._v(" 硬件设置")]),e._v(" "),r("p",[e._v("Alpha AWUS036ACH is a high power card that uses too much current while transmitting. If you power it from USB it will reset the port on most ARM boards. So it must be directly connected to 5V BEC in one of two ways:")]),e._v(" "),r("ol",[r("li",[e._v("Make a custom USB cable. "),r("a",{attrs:{href:"https://electronics.stackexchange.com/questions/218500/usb-charge-and-data-separate-cables",target:"_blank",rel:"noopener noreferrer"}},[e._v("You need to cut "),r("code",[e._v("+5V")]),e._v(" wire from USB plug and connect it to BEC"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Cut a "),r("code",[e._v("+5V")]),e._v(" wire on PCB near USB port and wire it to BEC. Don't do this if doubt. Use custom cable instead! Also I suggest to add 470uF low ESR capacitor (like ESC has) between power and ground to filter voltage spikes. Be aware of "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ground_loop_%28electricity%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("ground loop"),r("OutboundLink")],1),e._v(" when using several ground wires. 还建议在电源和接地之间添加 470uf 低 ESR 电容器 (如电调电容器) 来过滤电压峰值。 使用多根地线时，请注意 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ground_loop_%28electricity%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("ground loop"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("h2",{attrs:{id:"软件设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#软件设置"}},[e._v("#")]),e._v(" 软件设置")]),e._v(" "),r("p",[e._v("To setup the (Linux) development computer:")]),e._v(" "),r("ol",[r("li",[e._v("Install "),r("strong",[e._v("libpcap")]),e._v(" and "),r("strong",[e._v("libsodium")]),e._v(" development libs.")]),e._v(" "),r("li",[e._v("下载 "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast",target:"_blank",rel:"noopener noreferrer"}},[e._v("wifibroadcast sources"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki/Kernel-patches",target:"_blank",rel:"noopener noreferrer"}},[e._v("Patch"),r("OutboundLink")],1),e._v(" your kernel. You only need to patch the kernel on TX (except if you want to use a WiFi channel which is disabled in your region by CRDA).")])]),e._v(" "),r("h3",{attrs:{id:"generate-encryption-keys"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generate-encryption-keys"}},[e._v("#")]),e._v(" Generate Encryption Keys")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Setup camera to output RTP stream:")]),e._v(" "),r("p",[e._v("a. a. Logitech camera C920 camera:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("gst-launch-1.0 uvch264src device=/dev/video0 initial-bitrate=6000000 average-bitrate=6000000 iframe-period=1000 name=src auto-start=true \\\n      src.vidsrc ! queue ! video/x-h264,width=1920,height=1080,framerate=30/1 ! h264parse ! rtph264pay ! udpsink host=localhost port=5600 b. RaspberryPi camera: ```raspivid --nopreview --awb auto -ih -t 0 -w 1920 -h 1080 -fps 30 -b 4000000 -g 30 -pf high -o - | gst-launch-1.0 fdsrc ! h264parse !  rtph264pay !  udpsink host=127.0.0.1 port=5600``` queue ! video/x-h264,width=1280,height=720,framerate=30/1 ! h264parse ! rtph264pay ! udpsink host=localhost port=5602\n")])])]),r("p",[e._v("b. RaspberryPi camera:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("raspivid --nopreview --awb auto -ih -t 0 -w 1280 -h 720 -fps 49 -b 4000000 -g 147 -pf high -o - | gst-launch-1.0 fdsrc ! h264parse !  rtph264pay !  udpsink host=127.0.0.1 port=5602\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Setup "),r("em",[e._v("Wifibroadcast")]),e._v(" in TX mode:")])]),e._v(" "),r("li",[r("p",[e._v("Configure autopilot (px4 stack) to output telemetry stream at 1500kbps (other UART speeds doesn't match well to NEO2 frequency dividers). Setup "),r("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("mavlink-router"),r("OutboundLink")],1),e._v(" to route MAVLink packets to/from WFB:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[UdpEndpoint wifibroadcast]\nMode = Normal\nAddress = 127.0.0.1\nPort = 14550\n")])])])])]),e._v(" "),r("h3",{attrs:{id:"uav-setup-tx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uav-setup-tx"}},[e._v("#")]),e._v(" UAV Setup (TX)")]),e._v(" "),r("ol",[r("li",[e._v("Run "),r("em",[e._v("QGroundControl")]),e._v(" or use the following command to decode video:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("gst-launch-1.0 udpsrc port=5600 caps='application/x-rtp, media=(string)video, clock-rate=(int)90000, encoding-name=(string)H264' \\\n       ! rtph264depay ! avdec_h264 clockoverlay valignment=bottom ! autovideosink fps-update-interval=1000 sync=false rtph264depay ! avdec_h264 clockoverlay valignment=bottom ! autovideosink fps-update-interval=1000 sync=false\n")])])])]),e._v(" "),r("li",[e._v("Run qgroundcontrol or")])]),e._v(" "),r("h2",{attrs:{id:"enhanced-setup-with-rx-antenna-array-fpv-goggles-and-osd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enhanced-setup-with-rx-antenna-array-fpv-goggles-and-osd"}},[e._v("#")]),e._v(" Enhanced setup with RX antenna array, FPV goggles and OSD")]),e._v(" "),r("p",[e._v("With default settings WFB use radio channel 165 (5825 MHz), width 20MHz, MCS #1 (QPSK 1/2) with long GI. This provides ~7 mbit/s of "),r("strong",[e._v("effective")]),e._v(" speed (i.e. usable speed after FEC and packet encoding) for "),r("strong",[e._v("both directions")]),e._v(" in sum, because WiFi is half-duplex. So it is suitable for video down stream 720p@49fps (4 mbit/s) + two full-speed telemetry streams (uplink and downlink). If you need a higher bandwidth you can use other MCS index (for example 2 or greater) and/or 40MHz channel.")]),e._v(" "),r("h2",{attrs:{id:"antennas-and-diversity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#antennas-and-diversity"}},[e._v("#")]),e._v(" Antennas and Diversity")]),e._v(" "),r("p",[e._v("For simple cases you can use omnidirectional antennas with linear (that bundled with wifi cards) or circular leaf ("),r("a",{attrs:{href:"http://www.antenna-theory.com/antennas/cloverleaf.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("circularly polarized Coverleaf Antenna"),r("OutboundLink")],1),e._v(") polarization. If you want to setup long distance link you can use multiple wifi adapters with directional and omnidirectional antennas. TX/RX diversity for multiple adapters supported out of box (just add multiple NICs to "),r("code",[e._v("/etc/default/wifibroadcast")]),e._v("). If your WiFi adapter has two antennas (like Alfa AWU036ACH) TX diversity is implemented via "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Space%E2%80%93time_block_code",target:"_blank",rel:"noopener noreferrer"}},[e._v("STBC"),r("OutboundLink")],1),e._v(". Cards with 4 ports (like Alfa AWUS1900) are currently not supported for TX diversity (only RX is supported).")]),e._v(" "),r("h2",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),r("p",[r("strong",[e._v("Q:")]),e._v(" "),r("em",[e._v("What is a difference from original wifibroadcast?")])]),e._v(" "),r("p",[e._v("The new version has been rewritten to use UDP as data source and pack one source UDP packet into one radio packet. Radio packets now have variable size depends on payload size. This is reduces a video latency a lot. With this scheme if radio packets were lost (and this was not corrected by FEC) the result was random/unexpected holes in the stream. This is especially bad if the data protocol is not resistant to such random erasures.")]),e._v(" "),r("p",[e._v("The new version was rewritten to use UDP as data source and pack one source UDP packet into one radio packet. Radio packets now have variable size that depends on payload size. This significantly reduces a video latency.")]),e._v(" "),r("p",[r("strong",[e._v("Q:")]),e._v(" "),r("em",[e._v("What type of data can be transmitted using wifibroadcast?")])]),e._v(" "),r("p",[r("strong",[e._v("A:")]),e._v(" Any UDP with packet size <= 1466. For example x264 inside RTP or MAVLink.")]),e._v(" "),r("p",[r("strong",[e._v("Q:")]),e._v(" "),r("em",[e._v("What are transmission guarantees?")])]),e._v(" "),r("p",[r("strong",[e._v("A:")]),e._v(" Wifibrodcast use FEC (forward error correction) which can recover 4 lost packets from 12 packets block with default settings. You can tune it (both TX and RX simultaneously!) to fit your needs.")]),e._v(" "),r("p",[e._v(":::caution\nDon't use band that the RC TX operates on! Or setup RTL properly to avoid model loss.\n:::")]),e._v(" "),r("p",[r("strong",[e._v("Q:")]),e._v(" "),r("em",[e._v("Is only Raspberry PI supported?")])]),e._v(" "),r("p",[r("strong",[e._v("A:")]),e._v(" Wifibroadcast is not tied to any GPU - it operates with UDP packets. But to get RTP stream you need a video encoder (with encode raw data from camera to x264 stream). In my case RPI is only used for video encoding (because RPI Zero is too slow to do anything else) and all other tasks (including wifibroadcast) are done by other board (NanoPI NEO2).")]),e._v(" "),r("h2",{attrs:{id:"theory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#theory"}},[e._v("#")]),e._v(" Theory")]),e._v(" "),r("p",[e._v("Wifibroadcast puts the WiFi cards into monitor mode. This mode allows to send and receive arbitrary packets without association and waiting for ACK packets. "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/blob/master/patches/Analysis%20of%20Injection%20Capabilities%20and%20Media%20Access%20of%20IEEE%20802.11%20Hardware%20in%20Monitor%20Mode.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Analysis of Injection Capabilities and Media Access of IEEE 802.11 Hardware in Monitor Mode"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/ewa/802.11-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("802.11 timings"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"what-arm-boards-are-recommended-for-the-uav"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-arm-boards-are-recommended-for-the-uav"}},[e._v("#")]),e._v(" What ARM Boards are recommended for the UAV?")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Board")]),e._v(" "),r("th",[e._v("Pros")]),e._v(" "),r("th",[e._v("Cons")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://www.raspberrypi.org/products/raspberry-pi-zero/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raspberry Pi Zero"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("- Huge community")]),e._v(" "),r("td",[e._v("- Hard to buy outside US (shipping costs >> its price)"),r("br"),e._v("- Slow CPU"),r("br"),e._v("- Only one USB bus"),r("br"),e._v("- 512MB SDRAM")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://www.hardkernel.com/shop/odroid-c0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C0"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("1GB SDRAM")]),e._v(" "),r("td",[e._v("- Very sensitive to radio interference")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"http://www.friendlyarm.com/index.php?route=product/product&product_id=180",target:"_blank",rel:"noopener noreferrer"}},[e._v("NanoPI NEO2"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("- ARM 64-bit CPU"),r("br"),e._v("- Very cheap"),r("br"),e._v("- Supported by mainline kernel"),r("br"),e._v("- 3 independent USB busses"),r("br"),e._v("- 1Gbps Ethernet port"),r("br"),e._v("- 3 UARTs"),r("br"),e._v("- Very small form-factor"),r("br"),e._v("- Resistant to radio interference")]),e._v(" "),r("td",[e._v("No camera interface")])])])]),e._v(" "),r("p",[e._v("This article chose to use Pi Zero as camera board (encode video) and NEO2 as main UAV board (wifibroadcast, MAVLink telemetry, etc.)")]),e._v(" "),r("h2",{attrs:{id:"待完成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#待完成"}},[e._v("#")]),e._v(" 待完成")]),e._v(" "),r("ol",[r("li",[e._v("Make prebuilt images. Pull requests are welcome.")]),e._v(" "),r("li",[e._v("使用不同的卡天线进行飞行测试。")])])])}),[],!1,null,null,null);t.default=o.exports}}]);