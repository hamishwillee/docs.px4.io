(window.webpackJsonp=window.webpackJsonp||[]).push([[1308],{2413:function(t,s,_){"use strict";_.r(s);var v=_(19),e=Object(v.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"rtk-gps-px4-통합"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps-px4-통합"}},[t._v("#")]),t._v(" RTK GPS (PX4 통합)")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://en.wikipedia.org/wiki/Real_Time_Kinematic",target:"_blank",rel:"noopener noreferrer"}},[t._v("실시간 운동학"),_("OutboundLink")],1),t._v("(RTK)은 센티미터 수준의 GPS 정확도를 제공합니다. RTK와 PX4 통합 방법을 설명합니다.")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("RTK")]),t._v(" "),_("p",[t._v("GPS "),_("em",[t._v("사용법")]),t._v("은 "),_("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("주변장치 > RTK GPS")]),t._v("를 참고하십시오.")],1)]),t._v(" "),_("h2",{attrs:{id:"개요"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),_("p",[t._v("RTK는 신호 보다는 신호의 반송파 위상을 사용합니다. 여러 모바일 스테이션에서 실시간 수정을 제공하기 위하여 단일 참조 스테이션에 의존합니다.")]),t._v(" "),_("p",[t._v("PX4로 RTK를 설정에는 2개의 RTK GPS 모듈과 데이터 링크가 필요합니다. 고정 위치 지상 기반 GPS 장치를 "),_("em",[t._v("베이스")]),t._v("라고 하며, 공중에 있는 장치를 "),_("em",[t._v("로버")]),t._v("라고 합니다. 베이스는 USB로 "),_("em",[t._v("QGroundControl")]),t._v("에 연결되며, 데이터 링크를 사용하여 RTCM 수정 정보를 기체에전송합니다 (MAVLink "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#GPS_RTCM_DATA",target:"_blank",rel:"noopener noreferrer"}},[t._v("GPS_RTCM_DATA"),_("OutboundLink")],1),t._v(" 메시지 사용). 자동조종장치에서 MAVLink 패킷의 압축을 풀고 로버에 전송하여, RTK 솔루션을 처리합니다.")]),t._v(" "),_("p",[t._v("데이터 링크는 일반적으로 초당 300바이트의 업링크 속도를 처리할 수 있어야 합니다(자세한 내용은 아래의 "),_("a",{attrs:{href:"#uplink-datarate"}},[t._v("업링크 데이터 속도")]),t._v(" 섹션 참조).")]),t._v(" "),_("h2",{attrs:{id:"지원-rtk-gps-모듈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#지원-rtk-gps-모듈"}},[t._v("#")]),t._v(" 지원 RTK GPS 모듈")]),t._v(" "),_("p",[t._v("테스트한 기기 목록은 "),_("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html#supported-rtk-devices"}},[t._v("사용자 가이드")]),t._v("을 참고하십시오.")],1),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("대부분의 장치에는 베이스와 로버의 두 가지 변형이 있습니다.\n올바른 변형을 선택하여야 합니다.")])]),t._v(" "),_("h2",{attrs:{id:"자동-설정"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#자동-설정"}},[t._v("#")]),t._v(" 자동 설정")]),t._v(" "),_("p",[t._v("PX4 GPS 스택은 모듈이 연결된 위치("),_("em",[t._v("QGroundControl")]),t._v(" 또는 자동조종장치)에 따라서 UART 또는 USB를 통하여 메시지 송수신을 위하여, GPS 모듈을 자동으로 설정합니다.")]),t._v(" "),_("p",[t._v("자동조종장치는 "),_("code",[t._v("GPS_RTCM_DATA")]),t._v(" MAVLink 메시지를 수신하는 즉시 RTCM 데이터를 연결된 GPS 모듈에 자동으로 전달합니다.")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("u-blox U-Center RTK 설정 도구는 필요하지 않으며, 사용되지도 않습니다!")])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[_("em",[t._v("QGroundControl")]),t._v("과 자동조종장치 펌웨어는 모두 동일한 "),_("a",{attrs:{href:"https://github.com/PX4/GpsDrivers",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 GPS 드라이버 스택"),_("OutboundLink")],1),t._v("을 공유합니다. 실제로, 새 프로토콜 또는 메시지 지원시 한쪽에만 추가하면 됩니다.")])]),t._v(" "),_("h3",{attrs:{id:"rtcm-메시지"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rtcm-메시지"}},[t._v("#")]),t._v(" RTCM 메시지")]),t._v(" "),_("p",[t._v("명시되어 있지 않은 경우에는 QGroundControl은 RTCM3.2 프레임을 1Hz로 출력하도록 RTK 베이스 스테이션을 구성합니다.")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("1005")]),t._v(" - 안테나 기준점(기준 위치)에 대한 스테이션 좌표 XYZ, 0.2Hz")]),t._v(" "),_("li",[_("strong",[t._v("1077")]),t._v(" - 전체 GPS 의사 범위, 반송파 위상, 도플러 및 신호 강도(고해상도)")]),t._v(" "),_("li",[_("strong",[t._v("1087")]),t._v(" - 전체 GLONASS 의사 범위, 반송파 위상, 도플러 및 신호 강도(고해상도)")]),t._v(" "),_("li",[_("strong",[t._v("1230")]),t._v(" - GLONASS 코드 위상 바이어스")]),t._v(" "),_("li",[_("strong",[t._v("1097")]),t._v(" - 전체 Galileo 의사 범위, 반송파 위상, 도플러 및 신호 강도(고해상도)")]),t._v(" "),_("li",[_("strong",[t._v("1127")]),t._v(" - 전체 BeiDou 의사 범위, 반송파 위상, 도플러 및 신호 강도(고해상도)")])]),t._v(" "),_("h2",{attrs:{id:"업링크-데이터-속도"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#업링크-데이터-속도"}},[t._v("#")]),t._v(" 업링크 데이터 속도")]),t._v(" "),_("p",[t._v("베이스의 원시 RTCM 메시지는 MAVLink "),_("code",[t._v("GPS_RTCM_DATA")]),t._v(" 메시지로 압축되어 데이터 링크로 전송됩니다. MAVLink 메시지의 최대 길이는 182바이트입니다. RTCM 메시지에 따라 MAVLink 메시지는 채워지지 않을 수도 있습니다.")]),t._v(" "),_("p",[t._v("RTCM Base Position 메시지(1005)의 길이는 22바이트이고, 나머지는 모두 가시 위성의 수와 위성의 신호 수에 따라 가변 길이입니다(M8P와 같은 L1 장치의 경우 1만). 주어진 시간에 단일 별자리에서 볼 수 있는 위성의 "),_("em",[t._v("최대")]),t._v(" 수는 12개이므로 실제 조건에서는 이론적으로 300B/s의 업링크 속도면 충분합니다.")]),t._v(" "),_("p",[_("em",[t._v("MAVLink 1")]),t._v("을 사용하면, 길이에 관계없이 모든 RTCM 메시지에 대해 182바이트 "),_("code",[t._v("GPS_RTCM_DATA")]),t._v(" 메시지가 전송됩니다. 결과적으로, 대략적인 업링크 요구 사항은 초당 약 700+바이트입니다. 이는 저대역폭 반이중 원격 측정 모듈(예: 3DR 원격 측정 라디오)에서 링크 포화로 이어질 수 있습니다.")]),t._v(" "),_("p",[_("em",[t._v("MAVLink 2")]),t._v("를 사용하면 "),_("code",[t._v("GPS_RTCM_DATA 메시지")]),t._v("의 빈 공간이 제거됩니다. 결과적인 업링크 요구 사항은 이론적인 값(초당 ~300바이트)과 거의 같습니다.")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("PX4에서는 GCS와 텔레메트리가 지원되면, 자동으로 MAVLink 2로 전환됩니다.")])]),t._v(" "),_("p",[t._v("MAVLink 2는 고성능 RTK을 위하여, 낮은 대역폭 링크를 사용합니다. 텔레메트리 체인에서 MAVLink 2를 사용하는지를 확인해야합니다. 시스템 콘솔에서 "),_("code",[t._v("mavlink status")]),t._v(" 명령을 사용하여 프로토콜 버전을 확인할 수 있습니다.")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("nsh> mavlink status\ninstance #0:\n        GCS heartbeat:  593486 us ago\n        mavlink chan: #0\n        type:           3DR RADIO\n        rssi:           219\n        remote rssi:    219\n        txbuf:          94\n        noise:          61\n        remote noise:   58\n        rx errors:      0\n        fixed:          0\n        flow control:   ON\n        rates:\n        tx: 1.285 kB/s\n        txerr: 0.000 kB/s\n        rx: 0.021 kB/s\n        rate mult: 0.366\n        accepting commands: YES\n        MAVLink version: 2\n        transport protocol: serial (/dev/ttyS1 @57600)\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);