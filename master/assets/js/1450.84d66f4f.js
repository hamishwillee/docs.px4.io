(window.webpackJsonp=window.webpackJsonp||[]).push([[1450],{2608:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"보조-컴퓨터-주변-장치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-주변-장치"}},[e._v("#")]),e._v(" 보조 컴퓨터 주변 장치")]),e._v(" "),r("p",[e._v("이 섹션에는 보조 컴퓨터의 주변 장치에 대하여 설명합니다. 여기에는 보조 컴퓨터(PX4에 의해 트리거/액세스될 수 있음)에 장착 가능한 부품과 컴퓨터를 비행 컨트롤러에 연결용 부품들을 설명합니다.")]),e._v(" "),r("h2",{attrs:{id:"보조-컴퓨터-픽스호크-통신"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-픽스호크-통신"}},[e._v("#")]),e._v(" 보조 컴퓨터 / 픽스호크 통신")]),e._v(" "),r("p",[e._v("Pixhawk를 사용하는 일반적인 보조 컴퓨터에는 Pixhawk 하드웨어(예 : Intel NUC 및 Pixhawk 4)와 데이터를 송수신을 위한 링크가 필요합니다.")]),e._v(" "),r("p",[e._v("FTDI USB 모듈과 레벨 시프터(하단 참조)같은 통신 브릿징이 가능한 몇가지 장치가 있습니다.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("MAVLink를 통한 보조 컴퓨터와 통신 설정은 [MAVLink \\(OSD / Telemetry\\)](../peripherals/mavlink_peripherals.md#example)를 참고하십시오. 기타 관련 주제/섹션에서는 [Pixhawk 시리즈용 보조 컴퓨터](../companion_computer/pixhawk_companion.md), [로보틱스](../robotics/README.md) 및 [RTPS/DDS 인터페이스: PX4-Fast RTPS (DDS) 브리지](../middleware/micrortps.md)가 포함됩니다.")])]),e._v(" "),r("h3",{attrs:{id:"ftdi-장치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ftdi-장치"}},[e._v("#")]),e._v(" FTDI 장치")]),e._v(" "),r("p",[e._v("FTDI USB 어댑터는 일반적인 보조 컴퓨터와 픽스호크간의 통신 방법입니다. They are usually plug and play as long as the IO of the adapter is set to 3.3V. Pixhawk 하드웨어에서 제공되는 직렬 링크의 전체 기능와 신뢰성을 위하여 흐름 제어가 권장됩니다.")]),e._v(" "),r("p",[e._v('A few "turnkey" options are listed below:')]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("장치")]),e._v(" "),r("th",[e._v("3.3v 입출력 (기본)")]),e._v(" "),r("th",[e._v("흐름 제어")]),e._v(" "),r("th",[e._v("Tx/Rx LED")]),e._v(" "),r("th",[e._v("JST-GH")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://store.mrobotics.io/USB-FTDI-Serial-to-JST-GH-p/mro-ftdi-jstgh01-mr.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo USB FTDI Serial to JST-GH (Basic)"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Capable")]),e._v(" "),r("td",[e._v("Capable")]),e._v(" "),r("td",[e._v("No")]),e._v(" "),r("td",[e._v("예")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://www.sparkfun.com/products/9873",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun FTDI Basic Breakout"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("No")]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("No")])])])]),e._v(" "),r("p",[e._v("You can also use an off-the-shelf FTDI cable "),r("a",{attrs:{href:"https://www.sparkfun.com/products/9717",target:"_blank",rel:"noopener noreferrer"}},[e._v("like this one"),r("OutboundLink")],1),e._v(" and connect it to flight controller using the appropriate header adaptor (JST-GH connectors are specified in the Pixhawk standard, but you should confirm the connectors for your flight controller).")]),e._v(" "),r("h3",{attrs:{id:"논리-레벨-시프터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#논리-레벨-시프터"}},[e._v("#")]),e._v(" 논리 레벨 시프터")]),e._v(" "),r("p",[e._v("On occasion a companion computer may expose hardware level IO that is often run at 1.8v or 5v, while the Pixhawk hardware operates at 3.3v IO. In order to resolve this, a level shifter can be implemented to safely convert the transmitting/receiving signal voltage.")]),e._v(" "),r("p",[e._v("Options include:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.sparkfun.com/products/12009",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun Logic Level Converter - 양방향"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.adafruit.com/product/757",target:"_blank",rel:"noopener noreferrer"}},[e._v("4-channel I2C-safe Bi-directional Logic Level Converter - BSS138"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"카메라"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#카메라"}},[e._v("#")]),e._v(" 카메라")]),e._v(" "),r("p",[e._v("Cameras are used image and video capture, and more generally to provide data for "),r("RouterLink",{attrs:{to:"/ko/computer_vision/"}},[e._v("computer vision")]),e._v(' applications (in this case the "cameras" may only provide processed data, not raw images)')],1),e._v(" "),r("h3",{attrs:{id:"스테레오-카메라"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스테레오-카메라"}},[e._v("#")]),e._v(" 스테레오 카메라")]),e._v(" "),r("p",[e._v("Stereo cameras are typically used for depth perception, path planning and SLAM. They are in no way guaranteed to be plug and play with your companion computer.")]),e._v(" "),r("p",[e._v("Popular stereo cameras include:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://click.intel.com/intelr-realsensetm-depth-camera-d435.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("인텔® 리얼센스™ 뎁스 카메라 D435"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://click.intel.com/intelr-realsensetm-depth-camera-d415.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("인텔® 리얼센스™ 뎁스 카메라 D415"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.perceptin.io/products",target:"_blank",rel:"noopener noreferrer"}},[e._v("아이언사이드"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://duo3d.com/product/duo-minilx-lv1",target:"_blank",rel:"noopener noreferrer"}},[e._v("DUO MLX"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"관성-주행-시각-측정-카메라-센서"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#관성-주행-시각-측정-카메라-센서"}},[e._v("#")]),e._v(" 관성 주행 시각 측정 카메라/센서")]),e._v(" "),r("p",[e._v("The following sensors can be used for "),r("RouterLink",{attrs:{to:"/ko/computer_vision/visual_inertial_odometry.html"}},[e._v("Visual Inertial Odometry (VIO)")]),e._v(":")],1),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/peripherals/camera_t265_vio.html"}},[e._v("T265 리얼센스 트래킹 카메라")])],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"data_telephony"}})]),e._v(" "),r("h2",{attrs:{id:"데이터-통신-lte"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#데이터-통신-lte"}},[e._v("#")]),e._v(" 데이터 통신(LTE)")]),e._v(" "),r("p",[e._v("An LTE USB module can be attached to a companion computer and used to route MAVLink traffic between the flight controller and the Internet.")]),e._v(" "),r("p",[e._v('There is no "standard method" for a ground station and companion to connect over the Internet. Generally you can\'t connect them directly because neither of them will have a public/static IP on the Internet.')]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("Typically your router (or the mobile network) has a public IP address, and your GCS computer/vehicle are on a "),r("em",[e._v("local")]),e._v(" network. The router uses network address translation (NAT) to map "),r("em",[e._v("outgoing")]),e._v(" requests from your local network to the Internet, and can use the map to route the "),r("em",[e._v("responses")]),e._v(" back to requesting system. However NAT has no way to know where to direct the traffic from an arbitrary external system, so there is no way to "),r("em",[e._v("initiate")]),e._v(" a connection to a GCS or vehicle running in the local network.")])]),e._v(" "),r("p",[e._v("A common approach is to set up a virtual private network between the companion and GCS computer (i.e. install a VPN system like "),r("a",{attrs:{href:"https://www.zerotier.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zerotier"),r("OutboundLink")],1),e._v(" on both computers). The companion then uses "),r("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("mavlink-router"),r("OutboundLink")],1),e._v(" to route traffic between the serial interface (flight controller) and GCS computer on the VPN network.")]),e._v(" "),r("p",[e._v("This method has the benefit that the GCS computer address can be static within the VPN, so the configuration of the "),r("em",[e._v("mavlink router")]),e._v(" does not need to change over time. In addition, the communication link is secure because all VPN traffic is encrypted (MAVLink 2 itself does not support encryption).")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("You can also choose to route to the VPN broadcast address (i.e. "),r("code",[e._v("x.x.x.255:14550")]),e._v(", where 'x' depends on the VPN system). This approach means that you do not need to know the IP address of the GCS computer, but may result in more traffic than desired (since packets are broadcast to every computer on the VPN network).")])]),e._v(" "),r("p",[e._v("Some USB modules that are known to work include:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://consumer.huawei.com/en/mobile-broadband/e8372/",target:"_blank",rel:"noopener noreferrer"}},[e._v("화웨이 E8372"),r("OutboundLink")],1),e._v(" , "),r("a",{attrs:{href:"https://consumer.huawei.com/en/mobile-broadband/e3372/",target:"_blank",rel:"noopener noreferrer"}},[e._v("화웨이 E3372"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[r("em",[e._v("E8372")]),e._v("에는 SIM이 보조 컴퓨터에 연결중에는 SIM을 설정하는 WiFi가 포함되어 있습니다 (개발 절차가 조금 더 쉬워짐). "),r("em",[e._v("E3372")]),e._v("에는 WiFi가 없으므로, 스틱을 노트북에 연결하여 설정하여야 합니다.")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);