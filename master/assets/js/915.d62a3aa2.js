(window.webpackJsonp=window.webpackJsonp||[]).push([[915],{1858:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"long-distance-video-streaming-and-telemetry-via-raw-wifi-radio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#long-distance-video-streaming-and-telemetry-via-raw-wifi-radio"}},[e._v("#")]),e._v(" Long-distance Video Streaming and Telemetry via Raw WiFi Radio")]),e._v(" "),r("p",[e._v("This page shows how to set up a companion computer with a camera (Logitech C920 or RaspberryPi camera) such that the video stream is transferred from the UAV to a ground computer and displayed in "),r("em",[e._v("QGroundControl")]),e._v(".\nThe mechanism also provide a bidirectional telemetry link (i.e. like SiK radio).\nThis setup uses WiFi in unconnected (broadcast) mode and software from the "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wifibroadcast project"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("Before using "),r("em",[e._v("Wifibroadcast")]),e._v(" check regulators allow this kind of WiFi use in your country.")])]),e._v(" "),r("h2",{attrs:{id:"wifibroadcast-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wifibroadcast-overview"}},[e._v("#")]),e._v(" Wifibroadcast Overview")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("Wifibroadcast project")]),e._v(" provides video and telemetry transport that use low-level WiFi packets to avoid the distance and latency limitations of the ordinary IEEE 802.11 stack.")]),e._v(" "),r("p",[e._v("The high level benefits of "),r("em",[e._v("Wifibroadcast")]),e._v(" include:")]),e._v(" "),r("ul",[r("li",[e._v("1:1 map RTP to IEEE 802.11 packets for minimum latency (doesn't serialize to byte steam).")]),e._v(" "),r("li",[e._v("Smart FEC support (immediately yield packet to video decoder if FEC pipeline without gaps).")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki/Setup-HOWTO",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bidirectional MAVLink telemetry"),r("OutboundLink")],1),e._v(".\nYou can use it for MAVLink up/down and video down link.")]),e._v(" "),r("li",[e._v("Automatic TX diversity (select TX card based on RX RSSI).")]),e._v(" "),r("li",[e._v("Stream encryption and authentication ("),r("a",{attrs:{href:"https://download.libsodium.org/doc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("libsodium"),r("OutboundLink")],1),e._v(").")]),e._v(" "),r("li",[e._v("Distributed operation.\nIt can gather data from cards on different hosts.\nSo you aren't limited to bandwidth of single USB bus.")]),e._v(" "),r("li",[e._v("Aggregation of MAVLink packets.\nDoesn't send WiFi packet for every MAVLink packet.")]),e._v(" "),r("li",[e._v("Enhanced "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast_osd",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSD"),r("OutboundLink")],1),e._v(" for Raspberry PI (consume 10% CPU on PI Zero).")]),e._v(" "),r("li",[e._v("Compatible with any screen resolution.\nSupports aspect correction for PAL to HD scaling.")])]),e._v(" "),r("p",[e._v("Additional information is provided in the "),r("a",{attrs:{href:"#faq"}},[e._v("FAQ")]),e._v(" below.")]),e._v(" "),r("h2",{attrs:{id:"hardware-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),r("p",[e._v("The hardware setup consists of the following parts:")]),e._v(" "),r("p",[e._v("On TX (UAV) side:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.friendlyarm.com/index.php?route=product/product&product_id=180",target:"_blank",rel:"noopener noreferrer"}},[e._v("NanoPI NEO2"),r("OutboundLink")],1),e._v(" (and/or Raspberry Pi if using Pi camera).")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.logitech.com/en-us/product/hd-pro-webcam-c920?crid=34",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logitech camera C920"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://www.raspberrypi.org/products/camera-module-v2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raspberry Pi camera"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("WiFi module  "),r("a",{attrs:{href:"https://www.alfa.com.tw/products_detail/1.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALPHA AWUS036ACH"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("On RX (ground station side):")]),e._v(" "),r("ul",[r("li",[e._v("Any computer with Linux (tested on Fedora 25 x86-64).")]),e._v(" "),r("li",[e._v("WiFi module  "),r("a",{attrs:{href:"https://www.alfa.com.tw/products_detail/1.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALPHA AWUS036ACH"),r("OutboundLink")],1),e._v(".\nSee "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki/WiFi-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("wifibroadcast wiki > WiFi hardware"),r("OutboundLink")],1),e._v(" for more information on supported modules.")])]),e._v(" "),r("p",[e._v("If you don't need high-power cards, you can use any card with "),r("strong",[e._v("rtl8812au")]),e._v(" chipset.")]),e._v(" "),r("h2",{attrs:{id:"hardware-modification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-modification"}},[e._v("#")]),e._v(" Hardware Modification")]),e._v(" "),r("p",[e._v("Alpha AWUS036ACH is a high power card that uses too much current while transmitting.\nIf you power it from USB it will reset the port on most ARM boards.\nSo it must be directly connected to 5V BEC in one of two ways:")]),e._v(" "),r("ol",[r("li",[e._v("Make a custom USB cable ("),r("a",{attrs:{href:"https://electronics.stackexchange.com/questions/218500/usb-charge-and-data-separate-cables",target:"_blank",rel:"noopener noreferrer"}},[e._v("cut "),r("code",[e._v("+5V")]),e._v(" wire from USB plug and connect it to BEC"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Cut a "),r("code",[e._v("+5V")]),e._v(" wire on PCB near USB port and wire it to BEC (don't do this if doubt - use custom cable instead).\nAlso I suggest to add 470uF low ESR capacitor (like ESC has) between power and ground to filter voltage spikes.\nBe aware of "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ground_loop_%28electricity%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("ground loop"),r("OutboundLink")],1),e._v(" when using several ground wires.")])]),e._v(" "),r("h2",{attrs:{id:"software-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software-setup"}},[e._v("#")]),e._v(" Software Setup")]),e._v(" "),r("p",[e._v("To setup the (Linux) development computer:")]),e._v(" "),r("ol",[r("li",[e._v("Install "),r("strong",[e._v("libpcap")]),e._v(" and "),r("strong",[e._v("libsodium")]),e._v(" development libs and install "),r("strong",[e._v("python2.7")]),e._v(" + "),r("strong",[e._v("python-twisted")]),e._v(" packages.")]),e._v(" "),r("li",[e._v("Download "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast",target:"_blank",rel:"noopener noreferrer"}},[e._v("wifibroadcast sources"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("See "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki/Setup-HOWTO",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup HOWTO"),r("OutboundLink")],1),e._v(" how to build debian, rpm or tar.gz package and configure it.")])]),e._v(" "),r("h3",{attrs:{id:"uav-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uav-setup"}},[e._v("#")]),e._v(" UAV Setup")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Setup camera to output RTP stream:")]),e._v(" "),r("p",[e._v("a. Logitech camera C920 camera:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("gst-launch-1.0 uvch264src device=/dev/video0 initial-bitrate=4000000 average-bitrate=4000000 iframe-period=3000 name=src auto-start=true \\\n         src.vidsrc ! queue ! video/x-h264,width=1280,height=720,framerate=30/1 ! h264parse ! rtph264pay ! udpsink host=localhost port=5602\n")])])]),r("p",[e._v("b. RaspberryPi camera:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("raspivid --nopreview --awb auto -ih -t 0 -w 1280 -h 720 -fps 49 -b 4000000 -g 147 -pf high -o - | gst-launch-1.0 fdsrc ! h264parse !  rtph264pay !  udpsink host=127.0.0.1 port=5602\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Configure WFB for drone as described in "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki/Setup-HOWTO",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup HOWTO"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Configure autopilot (px4 stack) to output telemetry stream at 1500kbps (other UART speeds doesn't match well to NEO2 frequency dividers).\nSetup "),r("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("mavlink-router"),r("OutboundLink")],1),e._v(" to route MAVLink packets to/from WFB:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[UdpEndpoint wifibroadcast]\nMode = Normal\nAddress = 127.0.0.1\nPort = 14550\n")])])])])]),e._v(" "),r("h3",{attrs:{id:"ground-station-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ground-station-setup"}},[e._v("#")]),e._v(" Ground Station Setup")]),e._v(" "),r("ol",[r("li",[e._v("Run "),r("em",[e._v("QGroundControl")]),e._v(" or use the following command to decode video:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("gst-launch-1.0 udpsrc port=5600 caps='application/x-rtp, media=(string)video, clock-rate=(int)90000, encoding-name=(string)H264' \\\n          ! rtph264depay ! avdec_h264 ! clockoverlay valignment=bottom ! autovideosink fps-update-interval=1000 sync=false\n")])])])]),e._v(" "),r("li",[e._v("Configure WFB for ground station as described in "),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/wiki/Setup-HOWTO",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup HOWTO"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"tuning-radio-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tuning-radio-settings"}},[e._v("#")]),e._v(" Tuning Radio Settings")]),e._v(" "),r("p",[e._v("With default settings WFB use radio channel 165 (5825 MHz), width 20MHz, MCS #1 (QPSK 1/2) with long GI.\nThis provides ~7 mbit/s of "),r("strong",[e._v("effective")]),e._v(" speed (i.e. usable speed after FEC and packet encoding) for "),r("strong",[e._v("both directions")]),e._v(" in sum, because WiFi is half-duplex.\nSo it is suitable for video down stream 720p@49fps (4 mbit/s) + two full-speed telemetry streams (uplink and downlink).\nIf you need a higher bandwidth you can use other MCS index (for example 2 or greater) and/or 40MHz channel.")]),e._v(" "),r("h2",{attrs:{id:"antennas-and-diversity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#antennas-and-diversity"}},[e._v("#")]),e._v(" Antennas and Diversity")]),e._v(" "),r("p",[e._v("For simple cases you can use omnidirectional antennas with linear (that bundled with wifi cards) or circular leaf ("),r("a",{attrs:{href:"http://www.antenna-theory.com/antennas/cloverleaf.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("circularly polarized Coverleaf Antenna"),r("OutboundLink")],1),e._v(") polarization.\nIf you want to setup long distance link you can use multiple wifi adapters with directional and omnidirectional antennas. TX/RX diversity for multiple adapters supported out of box (just add multiple NICs to "),r("code",[e._v("/etc/default/wifibroadcast")]),e._v(").\nIf your WiFi adapter has two antennas (like Alfa AWU036ACH) TX diversity is implemented via "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Space%E2%80%93time_block_code",target:"_blank",rel:"noopener noreferrer"}},[e._v("STBC"),r("OutboundLink")],1),e._v(".\nCards with 4 ports (like Alfa AWUS1900) are currently not supported for TX diversity (only RX is supported).")]),e._v(" "),r("h2",{attrs:{id:"faq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),r("p",[r("strong",[e._v("Q:")]),e._v(" "),r("em",[e._v("What is a difference from original wifibroadcast?")])]),e._v(" "),r("p",[r("strong",[e._v("A:")]),e._v(" The original version of wifibroadcast used a byte-stream as input and split it to packets of fixed size (1024 by default).\nWith this scheme if radio packets were lost (and this was not corrected by FEC) the result was random/unexpected holes in the stream.\nThis is especially bad if the data protocol is not resistant to such random erasures.")]),e._v(" "),r("p",[e._v("The new version was rewritten to use UDP as data source and pack one source UDP packet into one radio packet.\nRadio packets now have variable size that depends on payload size.\nThis significantly reduces a video latency.")]),e._v(" "),r("p",[r("strong",[e._v("Q:")]),e._v(" "),r("em",[e._v("What type of data can be transmitted using wifibroadcast?")])]),e._v(" "),r("p",[r("strong",[e._v("A:")]),e._v(" Any UDP with packet size <= 1466.\nFor example x264 inside RTP or MAVLink.")]),e._v(" "),r("p",[r("strong",[e._v("Q:")]),e._v(" "),r("em",[e._v("What are transmission guarantees?")])]),e._v(" "),r("p",[r("strong",[e._v("A:")]),e._v(" Wifibrodcast use FEC (forward error correction) which can recover 4 lost packets from 12 packets block with default settings.\nYou can tune it (both TX and RX simultaneously!) to fit your needs.")]),e._v(" "),r("p",[e._v(":::caution\nDon't use band that the RC TX operates on!\nOr setup RTL properly to avoid model loss.\n:::")]),e._v(" "),r("p",[r("strong",[e._v("Q:")]),e._v(" "),r("em",[e._v("Is only Raspberry PI supported?")])]),e._v(" "),r("p",[r("strong",[e._v("A:")]),e._v(" Wifibroadcast is not tied to any GPU - it operates with UDP packets.\nBut to get RTP stream you need a video encoder (with encode raw data from camera to x264 stream). In my case RPI is only used for video encoding (because RPI Zero is too slow to do anything else) and all other tasks (including wifibroadcast) are done by other board (NanoPI NEO2).")]),e._v(" "),r("h2",{attrs:{id:"theory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#theory"}},[e._v("#")]),e._v(" Theory")]),e._v(" "),r("p",[e._v("Wifibroadcast puts the WiFi cards into monitor mode. This mode allows to send and receive arbitrary packets without association and waiting for ACK packets.\n"),r("a",{attrs:{href:"https://github.com/svpcom/wifibroadcast/blob/master/patches/Analysis%20of%20Injection%20Capabilities%20and%20Media%20Access%20of%20IEEE%20802.11%20Hardware%20in%20Monitor%20Mode.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Analysis of Injection Capabilities and Media Access of IEEE 802.11 Hardware in Monitor Mode"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/ewa/802.11-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("802.11 timings"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"what-arm-boards-are-recommended-for-the-uav"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-arm-boards-are-recommended-for-the-uav"}},[e._v("#")]),e._v(" What ARM Boards are recommended for the UAV?")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Board")]),e._v(" "),r("th",[e._v("Pros")]),e._v(" "),r("th",[e._v("Cons")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://www.raspberrypi.org/products/raspberry-pi-zero/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raspberry Pi Zero"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("- Huge community"),r("br"),e._v("- Camera support"),r("br"),e._v("- HW video encoder/decoder with OMX API.")]),e._v(" "),r("td",[e._v("- Hard to buy outside US (shipping costs >> its price)"),r("br"),e._v("- Slow CPU"),r("br"),e._v("- Only one USB bus"),r("br"),e._v("- 512MB SDRAM")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://www.hardkernel.com/shop/odroid-c0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odroid C0"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("- Fast CPU"),r("br"),e._v("- EMMC"),r("br"),e._v("- 1GB SDRAM")]),e._v(" "),r("td",[e._v("- Very sensitive to radio interference"),r("br"),e._v("- Doesn't supported by mainline kernel"),r("br"),e._v("- High cost"),r("br"),e._v("- HW video encoder is broken"),r("br"),e._v("- Bad PCB quality (too thin, ground pins without "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Thermal_relief",target:"_blank",rel:"noopener noreferrer"}},[e._v("thermal relief"),r("OutboundLink")],1),e._v(")")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"http://www.friendlyarm.com/index.php?route=product/product&product_id=180",target:"_blank",rel:"noopener noreferrer"}},[e._v("NanoPI NEO2"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("- ARM 64-bit CPU"),r("br"),e._v("- Very cheap"),r("br"),e._v("- Supported by mainline kernel"),r("br"),e._v("- 3 independent USB busses"),r("br"),e._v("- 1Gbps Ethernet port"),r("br"),e._v("- 3 UARTs"),r("br"),e._v("- Very small form-factor"),r("br"),e._v("- Resistant to radio interference")]),e._v(" "),r("td",[e._v("- Small community"),r("br"),e._v("- 512MB SDRAM"),r("br"),e._v("- No camera interface")])])])]),e._v(" "),r("p",[e._v("This article chose to use Pi Zero as camera board (encode video) and NEO2 as main UAV board (wifibroadcast, MAVLink telemetry, etc.)")]),e._v(" "),r("h2",{attrs:{id:"todo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[e._v("#")]),e._v(" TODO")]),e._v(" "),r("ol",[r("li",[e._v("Make prebuilt images.\nPull requests are welcome.")]),e._v(" "),r("li",[e._v("Do a flight test with different cards/antennas.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);