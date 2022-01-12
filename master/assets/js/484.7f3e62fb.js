(window.webpackJsonp=window.webpackJsonp||[]).push([[484],{1387:function(t,a,_){t.exports=_.p+"assets/img/uavcan_logo_transparent.385713a1.png"},1388:function(t,a,_){t.exports=_.p+"assets/img/uavcan_wiring.bbcb3462.png"},2740:function(t,a,_){"use strict";_.r(a);var r=_(19),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"uavcan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uavcan"}},[t._v("#")]),t._v(" UAVCAN")]),t._v(" "),r("p",[r("img",{staticStyle:{float:"right",width:"200px",padding:"10px"},attrs:{src:_(1387),alt:"UAVCAN 로고"}}),t._v(" "),r("a",{attrs:{href:"http://uavcan.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("UAVCAN"),r("OutboundLink")],1),t._v("은 자동조종장치가 주변 장치에 연결하는 온보드 네트워크입니다. 견고한 차동 신호를 사용하고 버스를 통한 펌웨어 업그레이드와 주변 장치의 상태 피드백을 지원합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4는 UAVCAN 노드 할당 및 펌웨어 업그레이드를 위해 SD 카드가 필요합니다. UAVCAN은 비행중에는 사용되지 않습니다.")])]),t._v(" "),r("h2",{attrs:{id:"지원-하드웨어"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지원-하드웨어"}},[t._v("#")]),t._v(" 지원 하드웨어")]),t._v(" "),r("p",[t._v("아래와 같은 하드웨어를 지원합니다:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/escs.html"}},[t._v("ESC/모터 콘트롤러")])],1),t._v(" "),r("li",[t._v("항속 센서\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/thiemar/airspeed",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thiemar 항속 센서"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("GPS 및 GLONASS용 GNSS 수신기\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/ark_gps.html"}},[t._v("ARK GPS")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/ark_rtk_gps.html"}},[t._v("ARK RTK GPS")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[t._v("CubePilot Here3"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax GNSS"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("전원 모니터\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/power_module/pomegranate_systems_pm.html"}},[t._v("Pomegranate 시스템 전원 모듈")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/power_module/cuav_can_pmu.html"}},[t._v("CUAV CAN PMU 전원 모듈")])],1)])]),t._v(" "),r("li",[t._v("거리 센서\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/ark_flow.html"}},[t._v("Ark Flow")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/avanon_laser_interface.html"}},[t._v("Avionics Anonymous Laser Altimeter UAVCAN 인터페이스")])],1)])]),t._v(" "),r("li",[t._v("광류\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/ark_flow.html"}},[t._v("Ark Flow")])],1)])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4는 UAVCAN 서보를 지원하지 않습니다(작성 시). 선택한 하드웨어는  Pixhawk 2.1, Zubax Orel 20 ESCs, Zubax GNSS GPS 입니다.")]),t._v(" "),r("h2",{attrs:{id:"배선"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),r("p",[t._v("모든 UAVCAN 구성 요소는 동일한 연결 아키텍처를 공유하거나 동일한 방식으로 배선됩니다. 모든 온보드 UAVCAN 장치를 체인에 연결하고 버스가 끝 노드에서 종료되었는지 확인합니다(노드가 연결/체인된 순서는 중요하지 않음).")]),t._v(" "),r("p",[t._v("다음 다이어그램은 "),r("RouterLink",{attrs:{to:"/ko/uavcan/escs.html"}},[t._v("UAVCAN 모터 컨트롤러(ESC)")]),t._v(" 및 UAVCAN GNSS에 연결된 비행 콘트롤러의 경우 이를 보여줍니다.")],1),t._v(" "),r("p",[r("img",{attrs:{src:_(1388),alt:"UAVCAN 배선"}})]),t._v(" "),r("p",[t._v("다이어그램에는 전원 배선이 표시되지 않았습니다. 구성 요소에 별도의 전원이 필요 여부와 CAN 버스 자체에서 전원을 공급 여부를 확인하려면 제조업체 지침을 참고하십시오.")]),t._v(" "),r("p",[t._v("적절한 버스 연결에 대한 자세한 내용은 "),r("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/UAVCAN+device+interconnection",target:"_blank",rel:"noopener noreferrer"}},[t._v("UAVCAN 장치 상호 연결"),r("OutboundLink")],1),t._v("(Zubax KB)을 참고하십시오.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("ul",[r("li",[t._v("연결은 동일하지만 _커넥터_는 기기마다 다를 수 있습니다.")]),t._v(" "),r("li",[t._v('두 번째/이중화" CAN 인터페이스를 위에 표시된 것처럼(CAN2) 사용할 수 있습니다. 이것은 선택 사항이지만, 연결의 견고성을 높일 수 있습니다.')])])])]),t._v(" "),r("h2",{attrs:{id:"px4-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-설정"}},[t._v("#")]),t._v(" PX4 설정")]),t._v(" "),r("p",[t._v("PX4에서 UAVCAN 구성 요소를 사용하려면 먼저 UAVCAN 드라이버를 활성화하여야 합니다.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("배터리에서 기체에 전원을 공급하고 (비행 콘트롤러뿐만 아니라 전체 기체에 전원을 공급하여야 함) "),r("em",[t._v("QGroundControl")]),t._v("을 연결합니다.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("기체 설정 > 매개 변수")]),t._v(" 화면으로 이동합니다.")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v("은 0이 아닌 값 중 하나로 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("설정")]),t._v("하여야 합니다.")],1),t._v(" "),r("p",[t._v("값들은 다음과 같습니다:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("0")]),t._v(": UAVCAN 드라이버가 비활성화되었습니다.")]),t._v(" "),r("li",[r("code",[t._v("1")]),t._v(": 센서 수동 설정.")]),t._v(" "),r("li",[r("code",[t._v("2")]),t._v(": 센서 자동 설정.")]),t._v(" "),r("li",[r("code",[t._v("3")]),t._v(": 센서 및 액츄에이터(ESC) 자동 설정")])]),t._v(" "),r("p",[t._v("연결된 UAVCAN 장치가 자동 구성을 지원하지 "),r("em",[t._v("없으면")]),t._v(" "),r("code",[t._v("1")]),t._v(", "),r("code",[t._v("2")]),t._v(" 또는 "),r("code",[t._v("3")]),t._v(" 사용 _일부_가 자동 구성을 지원하고, UAVCAN ESC를 사용하는 경우 "),r("code",[t._v("3")]),t._v("입니다(이는 PWM이 아닌 UAVCAN 버스에 모터 제어를 할당함).")])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("자동 구성을 지원하지 않는 모든 노드에 대해 수동으로 정적 ID를 할당하여야 합니다. 동적 설정 사용시에는 수동으로 할당된 모든 ID는 충돌을 피하기 위해 UAVCAN 장치의 수보다 큰 값을 지정하여야 합니다.")])]),t._v(" "),r("p",[t._v("대부분의 UAVCAN 센서는 추가 설정이 필요하지 않습니다(문서에 특별히 언급되지 않는 한 플러그 앤 플레이 방식임).")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/uavcan/escs.html"}},[t._v("UAVCAN 모터 컨트롤러(ESC)")]),t._v("는 추가로 모터 순서를 설정하여야 하며, 몇 가지 다른 매개변수를 설정할 수도 있습니다. 간단한 QGroundControl 설정 UI를 사용하여 수행 여부는 ESC 유형에 따라 다릅니다(자세한 내용은 링크 참조).")],1),t._v(" "),r("h2",{attrs:{id:"문제-해결"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),r("h3",{attrs:{id:"uavcan-장치가-노드-id를-얻지-못함-펌웨어-업데이트-실패"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-장치가-노드-id를-얻지-못함-펌웨어-업데이트-실패"}},[t._v("#")]),t._v(" UAVCAN 장치가 노드 ID를 얻지 못함/펌웨어 업데이트 실패")]),t._v(" "),r("p",[t._v("PX4는 UAVCAN 노드 할당 및 펌웨어 업데이트(부팅 중 발생)를 위한 SD 카드가 필요합니다. SD 카드가 있는 지 확인하고 재부팅하십시오.")]),t._v(" "),r("h3",{attrs:{id:"시동시-모터가-회전하지-않음"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시동시-모터가-회전하지-않음"}},[t._v("#")]),t._v(" 시동시 모터가 회전하지 않음")]),t._v(" "),r("p",[t._v("PX4 펌웨어 암이 회전하지만 모터가 회전을 시작하지 않는 경우, UAVCAN ESC를 사용하려면 매개 변수 "),r("code",[t._v("UAVCAN_ENABLE=3")]),t._v("을 확인하십시오. 추력이 증가하기 전에 모터가 회전을 시작하지 않으면 "),r("code",[t._v("UAVCAN_ESC_IDLT=1")]),t._v("을 확인하십시오.")]),t._v(" "),r("h2",{attrs:{id:"개발-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#개발-정보"}},[t._v("#")]),t._v(" 개발 정보")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/developer.html"}},[t._v("UAVCAN 개발")]),t._v(": 새로운 UAVCAN 하드웨어의 개발 및 PX4로의 통합과 관련된 주제입니다.")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);