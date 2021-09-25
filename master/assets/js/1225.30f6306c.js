(window.webpackJsonp=window.webpackJsonp||[]).push([[1225],{2372:function(t,a,r){"use strict";r.r(a);var s=r(19),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"모듈-참조-콘트롤러"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#모듈-참조-콘트롤러"}},[t._v("#")]),t._v(" 모듈 참조: 콘트롤러")]),t._v(" "),r("h2",{attrs:{id:"odule-nam"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#odule-nam"}},[t._v("#")]),t._v(" ODULE_NAM")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/control_allocator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/control_allocator"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("이것은 제어 할당을 구현합니다. 토크 및 추력 설정값을 입력으로 사용하고, 액추에이터 설정값 메시지를 출력합니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"ODULE_NAM_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("ODULE_NAM <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"airship-att-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#airship-att-control"}},[t._v("#")]),t._v(" airship_att_control")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/airship_att_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/airship_att_control"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-2"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("이것은 비행선 자세 및 속도 컨트롤러를 구현합니다. 이상적으로는 자세 설정값 "),r("code",[t._v("vehicle_attitude_setpoint")]),t._v(") 또는 속도 설정값("),r("code",[t._v("manual_control_setpoint")]),t._v(" 주제를 통한 아크로 모드)을 입력 및 출력 액추에이터 제어 메시지로 사용합니다.")]),t._v(" "),r("p",[t._v("현재 "),r("code",[t._v("manual_control_setpoint")]),t._v(" 주제를 액츄에이터에 직접 공급하고 있습니다.")]),t._v(" "),r("h3",{attrs:{id:"구현"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구현"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),r("p",[t._v("제어 대기 시간을 줄이기 위하여, 모듈은 IMU 드라이버에서 게시한 자이로 주제를 직접 폴링합니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"airship_att_control_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-2"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("airship_att_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"flight-mode-manager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-mode-manager"}},[t._v("#")]),t._v(" flight_mode_manager")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/flight_mode_manager",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/flight_mode_manager"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-3"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("이것은 모든 모드에 대한 설정값 생성을 구현합니다. 차량의 현재 모드 상태를 컨트롤러에 대한 입력 및 출력 설정값으로 사용합니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"flight_mode_manager_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-3"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("flight_mode_manager <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info \n")])])]),r("h2",{attrs:{id:"fw-att-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fw-att-control"}},[t._v("#")]),t._v(" fw_att_control")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/fw_att_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/fw_att_control"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-4"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("fw_att_control은 고정익 자세 컨트롤러입니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"fw_att_control_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-4"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fw_att_control <command> [arguments...]\n Commands:\n   start\n     [vtol]      VTOL mode\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"fw-pos-control-l1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fw-pos-control-l1"}},[t._v("#")]),t._v(" fw_pos_control_l1")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/fw_pos_control_l1",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/fw_pos_control_l1"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-5"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("fw_pos_control_l1은 고정익 위치 컨트롤러입니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"fw_pos_control_l1_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-5"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fw_pos_control_l1 <command> [arguments...]\n Commands:\n   start\n     [vtol]      VTOL mode\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"mc-att-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mc-att-control"}},[t._v("#")]),t._v(" mc_att_control")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mc_att_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/mc_att_control"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-6"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("이것은 멀티콥터 자세 컨트롤러를 구현합니다. 자세 설정값("),r("code",[t._v("vehicle_attitude_setpoint")]),t._v(")을 입력으로 사용하고, 속도 설정값을 출력합니다.")]),t._v(" "),r("p",[t._v("컨트롤러에는 각도 오류에 대한 P 루프가 있습니다.")]),t._v(" "),r("p",[t._v("간행물: 구현된 쿼터니언 태도 제어를 문서화, 제목: 비선형 쿼드로콥터 자세 제어(2013), 저자: Dario Brescianini, Markus Hehn and Raffaello D'Andrea 동적 시스템 및 제어 연구소(IDSC), ETH 취리히")]),t._v(" "),r("p",[t._v("https://www.research-collection.ethz.ch/bitstream/handle/20.500.11850/154099/eth-7387-01.pdf")]),t._v(" "),r("p",[r("a",{attrs:{id:"mc_att_control_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-6"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("mc_att_control <command> [arguments...]\n Commands:\n   start\n     [vtol]      VTOL mode\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"mc-pos-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mc-pos-control"}},[t._v("#")]),t._v(" mc_pos_control")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mc_pos_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/mc_pos_control"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-7"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("컨트롤러에는 위치 오류용 P 루프와 속도 오류용 PID 루프의 두 가지 루프가 있습니다. 속도 컨트롤러의 출력은 추력 방향(즉, 멀티콥터 방향에 대한 회전 행렬)과 추력 스칼라(즉, 멀티콥터 추력 자체)로 분할되는 추력 벡터입니다.")]),t._v(" "),r("p",[t._v("컨트롤러는 작업에 오일러 각도를 사용하지 않으며, 보다 인간 친화적인 제어 및 로깅을 위해서만 생성됩니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"mc_pos_control_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-7"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("mc_pos_control <command> [arguments...]\n Commands:\n   start\n     [vtol]      VTOL mode\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"mc-rate-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mc-rate-control"}},[t._v("#")]),t._v(" mc_rate_control")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mc_rate_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/mc_rate_control"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-8"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("이것은 멀티콥터 속도 컨트롤러를 구현합니다. 속도 설정값("),r("code",[t._v("manual_control_setpoint")]),t._v(" 항목을 통한 곡예 모드)을 입력으로 사용하고, 액추에이터 제어 메시지를 출력합니다.")]),t._v(" "),r("p",[t._v("컨트롤러에는 각속도 오류에 대한 PID 루프가 있습니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"mc_rate_control_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-8"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("mc_rate_control <command> [arguments...]\n Commands:\n   start\n     [vtol]      VTOL mode\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"navigator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#navigator"}},[t._v("#")]),t._v(" navigator")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/navigator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/navigator"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-9"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("자율 비행 모드를 담당하는 모듈입니다. 여기에는 임무(데이터맨에서 읽기), 이륙 및 RTL이 포함됩니다. 또한, 지오펜스 위반 검사를 담당합니다.")]),t._v(" "),r("h3",{attrs:{id:"구현-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구현-2"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),r("p",[t._v("다른 내부 모드는 공통 기본 클래스 "),r("code",[t._v("NavigatorMode")]),t._v("에서 상속되는 별도의 클래스로 구현됩니다. "),r("code",[t._v("_navigation_mode")]),t._v(" 구성원은 현재 활성 모드를 포함합니다.")]),t._v(" "),r("p",[t._v("Navigator는 위치 설정점 트리플렛("),r("code",[t._v("position_setpoint_triplet_s")]),t._v(")을 게시한 다음, 위치 컨트롤러에서 사용합니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"navigator_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-9"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("navigator <command> [arguments...]\n Commands:\n   start\n\n   fencefile     load a geofence file from SD card, stored at etc/geofence.txt\n\n   fake_traffic  publishes 4 fake transponder_report_s uORB messages\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"rover-pos-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rover-pos-control"}},[t._v("#")]),t._v(" rover_pos_control")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/rover_pos_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/rover_pos_control"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-10"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("L1 컨트롤러를 사용하여 그라운드 로버의 위치를 제어합니다.")]),t._v(" "),r("p",[t._v("IMU_GYRO_RATEMAX에서 "),r("code",[t._v("actuator_controls_0")]),t._v(" 메시지를 게시합니다.")]),t._v(" "),r("h3",{attrs:{id:"구현-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구현-3"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),r("p",[t._v("현재 이 구현은 일부 모드만 지원합니다.")]),t._v(" "),r("ul",[r("li",[t._v("완전 수동: 스로틀 및 편요각 제어가 액츄에이터에 직접 전달됩니다.")]),t._v(" "),r("li",[t._v("자동 미션: 로버가 미션을 실행합니다.")]),t._v(" "),r("li",[t._v("배회: 로버가 배회 반경 내로 이동한 다음 모터를 중지합니다.")])]),t._v(" "),r("h3",{attrs:{id:"예"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#예"}},[t._v("#")]),t._v(" 예")]),t._v(" "),r("p",[t._v("CLI 사용 예:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("rover_pos_control start\nrover_pos_control status\nrover_pos_control stop\n")])])]),r("p",[r("a",{attrs:{id:"rover_pos_control_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-10"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("rover_pos_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"uuv-att-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uuv-att-control"}},[t._v("#")]),t._v(" uuv_att_control")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/uuv_att_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/uuv_att_control"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-11"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("무인수중선(UUV)의 자세를 제어합니다.")]),t._v(" "),r("p",[t._v("일정한 250Hz에서 "),r("code",[t._v("actuator_controls_0")]),t._v(" 메시지를 게시합니다.")]),t._v(" "),r("h3",{attrs:{id:"구현-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구현-4"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),r("p",[t._v("현재 이 구현은 일부 모드만 지원합니다.")]),t._v(" "),r("ul",[r("li",[t._v("완전 수동: 롤, 피치, 요 및 스로틀 컨트롤이 액추에이터에 직접 전달됩니다.")]),t._v(" "),r("li",[t._v("자동 임무: 무인수중선이 임무를 실행합니다.")])]),t._v(" "),r("h3",{attrs:{id:"예-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#예-2"}},[t._v("#")]),t._v(" 예")]),t._v(" "),r("p",[t._v("CLI 사용 예:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("uuv_att_control start\nuuv_att_control status\nuuv_att_control stop\n")])])]),r("p",[r("a",{attrs:{id:"uuv_att_control_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-11"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("uuv_att_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"uuv-pos-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uuv-pos-control"}},[t._v("#")]),t._v(" uuv_pos_control")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/uuv_pos_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/uuv_pos_control"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-12"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("무인수중선(UUV)의 자세를 제어합니다. 일정한 250Hz에서 "),r("code",[t._v("actuator_controls_0")]),t._v(" 메시지를 게시합니다.")]),t._v(" "),r("h3",{attrs:{id:"구현-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구현-5"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),r("p",[t._v("현재 이 구현은 일부 모드만 지원합니다.")]),t._v(" "),r("ul",[r("li",[t._v("완전 수동: 롤, 피치, 요 및 스로틀 컨트롤이 액추에이터에 직접 전달됩니다.")]),t._v(" "),r("li",[t._v("자동 임무: 무인수중선이 임무를 실행합니다.")])]),t._v(" "),r("h3",{attrs:{id:"예-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#예-3"}},[t._v("#")]),t._v(" 예")]),t._v(" "),r("p",[t._v("CLI 사용 예:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("uuv_pos_control start\nuuv_pos_control status\nuuv_pos_control stop\n")])])]),r("p",[r("a",{attrs:{id:"uuv_pos_control_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-12"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("uuv_pos_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),r("h2",{attrs:{id:"vtol-att-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vtol-att-control"}},[t._v("#")]),t._v(" vtol_att_control")]),t._v(" "),r("p",[t._v("소스: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/vtol_att_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/vtol_att_control"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"설명-13"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설명-13"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),r("p",[t._v("fw_att_control은 고정익 자세 컨트롤러입니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"vtol_att_control_usage"}})]),t._v(" "),r("h3",{attrs:{id:"사용법-13"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법-13"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("vtol_att_control <command> [arguments...]\n Commands:\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);