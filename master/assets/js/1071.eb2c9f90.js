(window.webpackJsonp=window.webpackJsonp||[]).push([[1071],{2223:function(t,r,e){"use strict";e.r(r);var a=e(19),v=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"보조-컴퓨터-주변-장치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-주변-장치"}},[t._v("#")]),t._v(" 보조 컴퓨터 주변 장치")]),t._v(" "),e("p",[t._v("이 섹션에는 보조 컴퓨터의 주변 장치에 대하여 설명합니다. 여기에는 보조 컴퓨터(PX4에 의해 트리거/액세스될 수 있음)에 장착 가능한 부품과 컴퓨터를 비행 컨트롤러에 연결용 부품들을 설명합니다.")]),t._v(" "),e("h2",{attrs:{id:"보조-컴퓨터-픽스호크-통신"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-픽스호크-통신"}},[t._v("#")]),t._v(" 보조 컴퓨터 / 픽스호크 통신")]),t._v(" "),e("p",[t._v("Pixhawk를 사용하는 일반적인 보조 컴퓨터에는 Pixhawk 하드웨어(예 : Intel NUC 및 Pixhawk 4)와 데이터를 송수신을 위한 링크가 필요합니다.")]),t._v(" "),e("p",[t._v("FTDI USB 모듈과 레벨 시프터(하단 참조)같은 통신 브릿징이 가능한 몇가지 장치가 있습니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("MAVLink를 통한 보조 컴퓨터와 통신 설정은 [MAVLink \\(OSD / Telemetry\\)](../peripherals/mavlink_peripherals.md#example)를 참고하십시오. 기타 관련 주제/섹션에서는 [Pixhawk 시리즈용 보조 컴퓨터](../companion_computer/pixhawk_companion.md), [로보틱스](../robotics/README.md) 및 [RTPS/DDS 인터페이스: PX4-Fast RTPS (DDS) 브리지](../middleware/micrortps.md)가 포함됩니다.")])]),t._v(" "),e("h3",{attrs:{id:"ftdi-장치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ftdi-장치"}},[t._v("#")]),t._v(" FTDI 장치")]),t._v(" "),e("p",[t._v("FTDI USB 어댑터는 일반적인 보조 컴퓨터와 픽스호크간의 통신 방법입니다. 어댑터의 IO가 3.3v로 설정된 플러그앤플레이 방식입니다. Pixhawk 하드웨어에서 제공되는 직렬 링크의 전체 기능와 신뢰성을 위하여 흐름 제어가 권장됩니다.")]),t._v(" "),e("p",[t._v("옵션은 다음과 같습니다:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("장치")]),t._v(" "),e("th",[t._v("3.3v 입출력 (기본)")]),t._v(" "),e("th",[t._v("흐름 제어")]),t._v(" "),e("th",[t._v("Tx/Rx LED")]),t._v(" "),e("th",[t._v("JST-GH")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"https://pixdev.myshopify.com/products/ftdi-breakout-jst-gh",target:"_blank",rel:"noopener noreferrer"}},[t._v("PixDev FTDI JST-GH 브레이크아웃"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("예")]),t._v(" "),e("td",[t._v("예")]),t._v(" "),e("td",[t._v("예")]),t._v(" "),e("td",[t._v("예")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://store.mrobotics.io/USB-FTDI-Serial-to-JST-GH-p/mro-ftdi-jstgh01-mr.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRo USB FTDI Serial to JST-GH (Basic)"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("가능")]),t._v(" "),e("td",[t._v("가능")]),t._v(" "),e("td",[t._v("아니요")]),t._v(" "),e("td",[t._v("예")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.sparkfun.com/products/9873",target:"_blank",rel:"noopener noreferrer"}},[t._v("SparkFun FTDI 기본 브레이크아웃"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("예")]),t._v(" "),e("td",[t._v("아니요")]),t._v(" "),e("td",[t._v("예")]),t._v(" "),e("td",[t._v("아니요")])])])]),t._v(" "),e("h3",{attrs:{id:"논리-레벨-시프터"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#논리-레벨-시프터"}},[t._v("#")]),t._v(" 논리 레벨 시프터")]),t._v(" "),e("p",[t._v("픽스호크 하드웨어는 3.3v 입출력 레벨에서 동작하나, 보조 컴퓨터의 경우 1.8v 또는 5v 레벨에서 하드웨어 수준 입출력을 보일 수 있습니다. 이 문제를 해결하려면 송수신 신호 전압 안전하게 변환할 레벨 시프터를 제작할 수 있습니다.")]),t._v(" "),e("p",[t._v("옵션은 다음과 같습니다.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.sparkfun.com/products/12009",target:"_blank",rel:"noopener noreferrer"}},[t._v("SparkFun Logic Level Converter - 양방향"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.adafruit.com/product/757",target:"_blank",rel:"noopener noreferrer"}},[t._v("4-channel I2C-safe Bi-directional Logic Level Converter - BSS138"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"카메라"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#카메라"}},[t._v("#")]),t._v(" 카메라")]),t._v(" "),e("p",[t._v("카메라는 이미지와 비디오를 캡쳐하며, 일반적으로 "),e("RouterLink",{attrs:{to:"/ko/computer_vision/"}},[t._v("컴퓨터 비전")]),t._v(' 애플리케이션에 데이터를 제공합니다. 이 경우 "카메라"는 원시 이미지가 아닌 처리된 데이터를 제공할 수 있습니다.')],1),t._v(" "),e("h3",{attrs:{id:"스테레오-카메라"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#스테레오-카메라"}},[t._v("#")]),t._v(" 스테레오 카메라")]),t._v(" "),e("p",[t._v("일반적으로, 스테레오 카메라는 깊이 인식, 경로 계획과 SLAM에 사용됩니다. 보조 컴퓨터와 플러그앤플레이가 보장되지는 않습니다.")]),t._v(" "),e("p",[t._v("인기있는 스테레오 카메라는 다음과 같습니다.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://click.intel.com/intelr-realsensetm-depth-camera-d435.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("인텔® 리얼센스™ 뎁스 카메라 D435"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://click.intel.com/intelr-realsensetm-depth-camera-d415.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("인텔® 리얼센스™ 뎁스 카메라 D415"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.perceptin.io/products",target:"_blank",rel:"noopener noreferrer"}},[t._v("아이언사이드"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://duo3d.com/product/duo-minilx-lv1",target:"_blank",rel:"noopener noreferrer"}},[t._v("DUO MLX"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"관성-주행-시각-측정-카메라-센서"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#관성-주행-시각-측정-카메라-센서"}},[t._v("#")]),t._v(" 관성 주행 시각 측정 카메라/센서")]),t._v(" "),e("p",[t._v("다음 센서는 "),e("RouterLink",{attrs:{to:"/ko/computer_vision/visual_inertial_odometry.html"}},[t._v("관성 주행 시각 측정(VIO)")]),t._v("에 활용할 수 있습니다:")],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/peripherals/camera_t265_vio.html"}},[t._v("T265 리얼센스 트래킹 카메라")])],1)]),t._v(" "),e("p",[e("span",{attrs:{id:"data_telephony"}})]),t._v(" "),e("h2",{attrs:{id:"데이터-통신-lte"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#데이터-통신-lte"}},[t._v("#")]),t._v(" 데이터 통신(LTE)")]),t._v(" "),e("p",[t._v("LTE USB 모듈은 보조 컴퓨터에 연결하여 비행 컨트롤러와 인터넷 사이에서 MAVLink 트래픽을 라우팅을 할 수 있습니다.")]),t._v(" "),e("p",[t._v("지상통제장치와 보조 컴퓨터간의 인터넷 연결 표준은 없습니다. 일반적으로 둘 다 인터넷에서 공용/고정 IP를 없으서, 직접 연결할 수 없습니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("일반적으로 라우터 (또는 모바일 네트워크)에는 공용 IP 주소가 있으며 GCS 컴퓨터/차량은 "),e("em",[t._v("로컬")]),t._v(" 네트워크에 있습니다. 라우터는 네트워크 주소 변환 (NAT)을 사용하여 로컬 네트워크의 "),e("em",[t._v("전송")]),t._v(" 요청을 인터넷으로 매핑하고, 이 맵을 사용하여 "),e("em",[t._v("응답")]),t._v("을 요청 시스템으로 라우팅할 수 있습니다. 그러나 NAT는 임의의 외부 시스템에서 트래픽을 어디로 보낼지 알 수 없으므로 로컬 네트워크에서 실행되는 GCS 또는 차량에 대한 "),e("em",[t._v("연결")]),t._v("할 방법이 없습니다.")])]),t._v(" "),e("p",[t._v("일반적인 접근 방식은 동반자와 GCS 컴퓨터간에 가상 사설망을 설정하는 것입니다. 즉, 두 컴퓨터에 "),e("a",{attrs:{href:"https://www.zerotier.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("zerotier"),e("OutboundLink")],1),t._v("와 같은 VPN 시스템 설치합니다. 다음에, 보조 컴퓨터에서 "),e("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink-router"),e("OutboundLink")],1),t._v("를 사용하여 VPN 네트워크의 직렬 인터페이스 (비행 컨트롤러)와 GCS 컴퓨터간에 트래픽을 라우팅합니다.")]),t._v(" "),e("p",[t._v("이 방법은 GCS 컴퓨터 주소가 VPN 내에서 고정되는 장점이 있으므로 "),e("em",[t._v("mavlink 라우터")]),t._v("의 설정을 변경할 필요가 없습니다. 또한, 모든 VPN 트래픽이 암호화되기 때문에 통신 링크가 안전합니다. MAVLink는 암호화를 지원하지 않습니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("VPN")]),t._v(" "),e("p",[t._v("브로드캐스트 주소로 라우팅하도록 선택할 수도 있습니다(예: "),e("code",[t._v("x.x.x.255:14550")]),t._v(", 여기서 'x'는 VPN 시스템에 따라 다름). 이 접근 방식은 GCS 컴퓨터의 IP 주소를 알 필요가 없지만, 많은 트래픽이 발생할 수 있습니다(패킷이 VPN 네트워크의 모든 컴퓨터로 브로드캐스트되기 때문).")])]),t._v(" "),e("p",[t._v("동작하는 USB 모듈은 다음과 같습니다:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://consumer.huawei.com/en/mobile-broadband/e8372/",target:"_blank",rel:"noopener noreferrer"}},[t._v("화웨이 E8372"),e("OutboundLink")],1),t._v(" , "),e("a",{attrs:{href:"https://consumer.huawei.com/en/mobile-broadband/e3372/",target:"_blank",rel:"noopener noreferrer"}},[t._v("화웨이 E3372"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("em",[t._v("E8372")]),t._v("에는 SIM이 보조 컴퓨터에 연결중에는 SIM을 설정하는 WiFi가 포함되어 있습니다 (개발 절차가 조금 더 쉬워짐). "),e("em",[t._v("E3372")]),t._v("에는 WiFi가 없으므로, 스틱을 노트북에 연결하여 설정하여야 합니다.")])])])])])}),[],!1,null,null,null);r.default=v.exports}}]);