(window.webpackJsonp=window.webpackJsonp||[]).push([[1674],{3034:function(t,r,_){"use strict";_.r(r);var e=_(19),v=Object(e.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"출시-1-12"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#출시-1-12"}},[t._v("#")]),t._v(" 출시 1.12")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#release-1-12"}},[t._v("출시 1.12")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#pre-releases"}},[t._v("사전 출시")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#changes"}},[t._v("변경 사항")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#common"}},[t._v("공통")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#sensors"}},[t._v("센서")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#hardware"}},[t._v("하드웨어")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#mavlink"}},[t._v("MAVLink")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#commander"}},[t._v("사령관(Commander)")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#multicopter"}},[t._v("멀티콥터")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#vtol"}},[t._v("수직이착륙기(VTOL)")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#control"}},[t._v("제어")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#gps"}},[t._v("GPS")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#nuttx"}},[t._v("NuttX")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#uavcan"}},[t._v("UAVCAN")])])])])])])]),t._v(" "),_("h2",{attrs:{id:"사전-출시"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#사전-출시"}},[t._v("#")]),t._v(" 사전 출시")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases/tag/v1.12.0-beta4",target:"_blank",rel:"noopener noreferrer"}},[t._v("베타 4"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases/tag/v1.12.0-beta3",target:"_blank",rel:"noopener noreferrer"}},[t._v("베타 3"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases/tag/v1.12.0-beta2",target:"_blank",rel:"noopener noreferrer"}},[t._v("베타 2"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases/tag/v1.12.0-beta1",target:"_blank",rel:"noopener noreferrer"}},[t._v("베타 1"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"변경-사항"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#변경-사항"}},[t._v("#")]),t._v(" 변경 사항")]),t._v(" "),_("h3",{attrs:{id:"공통"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#공통"}},[t._v("#")]),t._v(" 공통")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("잔여 비행 범위 기반 RTL 트리거 ("),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16399",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16399"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("ul",[_("li",[t._v("기체 속도, 풍속 및 목적지 거리와 방향을 고려하여 RTL에서 집까지의 시간을 계산합니다.")])])]),t._v(" "),_("li",[_("strong",[t._v("사전 지오펜스 위반 ("),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16400",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16400"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("ul",[_("li",[_("em",[t._v("예측된")]),t._v(" 현재 궤적이 위반으로 이어질 경우 위반을 트리거하여 차량이 안전한 유지 위치로 경로를 다시 지정할 수 있습니다.")])])]),t._v(" "),_("li",[_("strong",[t._v("기체 스크립트")]),t._v(" "),_("ul",[_("li",[t._v("기본값 설정 구문이 변경되었으며 사용자 지정 스크립트를 업데이트하여야 합니다.")]),t._v(" "),_("li",[t._v("예제는 "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16796/files#diff-dcf2f5536f47f260e5e0ff3b3fd22eaef6b6c510126463d70affa0eb7bd4d3ddL20",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16796"),_("OutboundLink")],1),t._v("을 참조하십시오.")])])]),t._v(" "),_("li",[t._v("안전 스위치는 기본적으로 꺼짐으로 설정(모터는 시동 해제되지만 서보/플랩은 움직일 수 있음)")]),t._v(" "),_("li",[t._v("안전 스위치가 잠깁니다. 일단 비활성화되면 비활성화 상태로 유지됩니다.")]),t._v(" "),_("li",[t._v("착륙 감지기 : 거리 센서가있는 경우지면 거리를 사용하도록 착륙 감지를 확장합니다.")]),t._v(" "),_("li",[t._v("텔레메트리 포함 IRC Ghost에 대한 지원 추가")])]),t._v(" "),_("h3",{attrs:{id:"센서"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#센서"}},[t._v("#")]),t._v(" 센서")]),t._v(" "),_("ul",[_("li",[t._v("더 빠르고 안정적인 자력계 보정\n"),_("ul",[_("li",[t._v("새로운 연철 교정 계수")]),t._v(" "),_("li",[t._v("외부 센서의 회전을을 자동으로 결정")])])]),t._v(" "),_("li",[t._v("최적화된 속도 제어 센서 파이프 라인 (최소 내부 루프 종단간 지연 시간)")])]),t._v(" "),_("h3",{attrs:{id:"하드웨어"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어"}},[t._v("#")]),t._v(" 하드웨어")]),t._v(" "),_("p",[t._v("이 릴리스에는 아래의 보드, 주변 장치, 액세서리 및 신규 하드웨어 지원이 포함됩니다.")]),t._v(" "),_("ul",[_("li",[t._v("Pixhawk FMUv6U ("),_("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk GitHub 저장소"),_("OutboundLink")],1),t._v("에서 상세 사양 조회)")]),t._v(" "),_("li",[t._v("Pixhawk FMUv6x ("),_("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk GitHub 저장소"),_("OutboundLink")],1),t._v("에서 상세 사양 조회)")]),t._v(" "),_("li",[t._v("CUAV X7 / X7Pro ("),_("a",{attrs:{href:"http://www.cuav.net/en/x7en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("제조사 사이트에서 제품 상세 조회"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("li",[t._v("CUAV Nora ("),_("a",{attrs:{href:"http://www.cuav.net/en/nora/",target:"_blank",rel:"noopener noreferrer"}},[t._v("제조사 사이트에서 제품 상세 조회"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("li",[t._v("CUAV CAN GPS ("),_("a",{attrs:{href:"http://www.cuav.net/en/neo-3-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("제조사 사이트에서 제품 상세 조회"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("li",[t._v("SP Racing H7 Extreme ("),_("a",{attrs:{href:"http://seriouslypro.com/spracingh7extreme",target:"_blank",rel:"noopener noreferrer"}},[t._v("제조사 사이트에서 제품 상세 조회"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("li",[t._v("Bitcraze Crazyflie v2.1 ("),_("a",{attrs:{href:"https://www.bitcraze.io/products/crazyflie-2-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("제조사 사이트에서 제품 상세 조회"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("li",[t._v("ARK CAN Flow ("),_("a",{attrs:{href:"https://arkelectron.com/product/ark-flow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("제조사 사이트에서 제품 상세 조회"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("li",[t._v("mRo Ctrl Zero H7 (실험중) ("),_("a",{attrs:{href:"https://store.mrobotics.io/mRo-Control-Zero-F7-p/mro-ctrl-zero-f7.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("제조사 사이트에서 제품 상세 조회"),_("OutboundLink")],1),t._v(")")])]),t._v(" "),_("p",[t._v("다음 내용들이 제거됩니다.")]),t._v(" "),_("ul",[_("li",[t._v("단종된 Intel AeroFC 제거")])]),t._v(" "),_("h3",{attrs:{id:"mavlink"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mavlink"}},[t._v("#")]),t._v(" MAVLink")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("MAVLink 이더넷 설정("),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/14460",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#14460"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("ul",[_("li",[t._v("UDP 포트, 원격 포트 및 브로드캐스트 모드와 같은 MAVLink 이더넷 설정은 이제 매개변수를 통해 동적으로 변경할 수 있습니다.")])])]),t._v(" "),_("li",[_("strong",[_("code",[t._v("COMPONENT_INFORMATION")]),t._v(" 쿼리 지원("),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16039",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16039"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("ul",[_("li",[t._v("이제 매개변수 메타데이터가 매일 QGC와 함께 자동으로 동기화됩니다.")]),t._v(" "),_("li",[t._v("이 새로운 메시지를 통하여 모든 MAVLink 시스템은 자동조종장치에서 풍부한 계층 정보를 요청할 수 있습니다. 즉, 임무에서 지원되는 명령을 이해하거나, 매개변수 메타데이터를 얻을 수 있습니다. 이 메시지는 주로 GCS가 자동 조종 장치를 더 잘 이해할 수 있도록 하기 위해 도입되었습니다(RFC: "),_("a",{attrs:{href:"https://github.com/mavlink/mavlink/issues/1339",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink#1339"),_("OutboundLink")],1),t._v(").")])])])]),t._v(" "),_("h3",{attrs:{id:"사령관-commander"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#사령관-commander"}},[t._v("#")]),t._v(" 사령관(Commander)")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Commander : 제어 모드 플래그 사용 및 시동 정리 / 시동 해제 ("),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16266",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16266"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("ul",[_("li",[t._v("arm_disarm ()에서 분산된 시동 관련 요구 사항을 통합하고, commander에서 "),_("code",[t._v("vehicle_control_mode")]),t._v(" 마지막 상태를 유지합니다.")])])]),t._v(" "),_("li",[_("strong",[t._v("Commander : 수동 제어 설정 값 처리 분리 ("),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16878",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16878"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("manual_control_setpoint")]),t._v("를 처리를 위한 신규 클래스 "),_("code",[t._v("ManualControl")]),t._v("을 추가하고 RC 손실, RC 재정의 및 RC 준비/해제를 처리합니다.")])])])]),t._v(" "),_("h3",{attrs:{id:"멀티콥터"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터"}},[t._v("#")]),t._v(" 멀티콥터")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("위치 모드에서보다 직관적인 스틱 느낌")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("속도 설정값 대신 가속에 매핑된 수평 스틱 입력")])]),t._v(" "),_("li",[_("p",[t._v("이동 속도 속도에 도달시의 갑작스런 기울기 변화를 제거합니다.")])]),t._v(" "),_("li",[_("p",[t._v("직관적인 단락(예: 착륙시)")])]),t._v(" "),_("li",[_("p",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v("를 사용하여 선택 해제 가능")],1)]),t._v(" "),_("li",[_("p",[t._v("개발: "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/12072",target:"_blank",rel:"noopener noreferrer"}},[t._v("첫 시도"),_("OutboundLink")],1),t._v(", "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16052",target:"_blank",rel:"noopener noreferrer"}},[t._v("소개"),_("OutboundLink")],1),t._v(", "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16320",target:"_blank",rel:"noopener noreferrer"}},[t._v("개선 사항"),_("OutboundLink")],1),t._v(", "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16786",target:"_blank",rel:"noopener noreferrer"}},[t._v("버그 수정 제로 진동"),_("OutboundLink")],1),t._v(",\n버그 수정 위치 잠금 해제</4 >, "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/17078",target:"_blank",rel:"noopener noreferrer"}},[t._v("잘못된 설정값 버그 수정"),_("OutboundLink")],1),t._v(", "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/17437",target:"_blank",rel:"noopener noreferrer"}},[t._v("고속 사전 이륙 버그 수정"),_("OutboundLink")],1)])])])]),_("p"),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("호버 추력 독립적 속도 제어 이득")])])]),t._v(" "),_("li",[_("p",[t._v("매개변수 "),_("code",[t._v("MPC_{XY/Z}_VEL_{P/I/D}")]),t._v("는 "),_("code",[t._v("MPC_{XY/Z}_VEL_{P/I/D}_ACC")]),t._v("로 대치되었습니다. "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_XY_VEL_P_ACC"}},[t._v("MPC_XY_VEL_P_ACC")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_XY_VEL_I_ACC"}},[t._v("MPC_XY_VEL_I_ACC")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_XY_VEL_D_ACC"}},[t._v("MPC_XY_VEL_D_ACC")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_P_ACC"}},[t._v("MPC_Z_VEL_P_ACC")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_I_ACC"}},[t._v("MPC_Z_VEL_I_ACC")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_D_ACC"}},[t._v("MPC_Z_VEL_D_ACC")]),t._v("를 참고하십시오.")],1)])])]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("이득은 새로운 의미를 가지게 되었습니다.")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("    * $m/s$의 속도 오류에서 $m/s^2$의 가속 출력으로 확장\n* 기존 이득은 대략 다음과 같이 재조정하여야 합니다. $중력\\_상수/호버\\ _thrust$\n* 자동 매개변수 전환은 50 % 호버 추력을 가정합니다 : `~10m/s^2/50% = 20m/s^2`. [질문](https://github.com/PX4/PX4-Autopilot/pull/14823#issuecomment-791357646)을 참고하십시오.\n")])])])]),t._v(" "),_("ul",[_("li",[t._v("개발 : "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/14749",target:"_blank",rel:"noopener noreferrer"}},[t._v("로직 소개"),_("OutboundLink")],1),t._v(", "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/14823",target:"_blank",rel:"noopener noreferrer"}},[t._v("파라미터 교체"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("strong",[t._v("라운드턴 개선 ("),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16376",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16376"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("ul",[_("li",[t._v("멀티로터 임무의 웨이포인트에서 좀 더 큰 둥근 회전을 생성합니다 (코너에서 L1 스타일 안내 로직 사용).")]),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html#rounded-turns-inter-waypoint-trajectory"}},[t._v("임무 모드 &# 62; 웨이포인트간 궤적")]),t._v(" 및 "),_("RouterLink",{attrs:{to:"/ko/flying/missions.html#setting-acceptance-turning-radius"}},[t._v("임무 > 수락 / 회전 반경 설정")]),t._v("을 참고하십시오.")],1)])]),t._v(" "),_("li",[_("strong",[t._v("Rattitude 비행 모드 제거("),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/17019",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#17019"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("ul",[_("li",[t._v("다시 원하시면 저희에게 알려주십시오.")])])])]),t._v(" "),_("h3",{attrs:{id:"수직이착륙기-vtol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#수직이착륙기-vtol"}},[t._v("#")]),t._v(" 수직이착륙기(VTOL)")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("RTL 개선 사항("),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16377",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16377"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("ul",[_("li",[t._v("현재 기체 모드(멀티콥터 대 고정익)에 따라 착륙 시도시 여러가지 사례를 고려하여, RTL 안전 안전 장치를 강화합니다.")])])]),t._v(" "),_("li",[t._v("고정익/수직이착륙기의 중요한 TECS 개선")])]),t._v(" "),_("h3",{attrs:{id:"콘트롤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤"}},[t._v("#")]),t._v(" 콘트롤")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Gyro FFT로 업데이트된 동적 노치 필터 ("),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16385",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16385"),_("OutboundLink")],1),t._v(")")]),t._v(" "),_("ul",[_("li",[t._v("자이로 제어 데이터에 동적 노치 필터링을 추가하여 제어가 훨씬 부드러워졌습니다.")])])]),t._v(" "),_("li",[t._v("stm32f7 및 stm32h7 보드에서 "),_("strong",[t._v("기본적으로 다중 EKF 사용")])])]),t._v(" "),_("h3",{attrs:{id:"gps"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gps"}},[t._v("#")]),t._v(" GPS")]),t._v(" "),_("ul",[_("li",[t._v("이제 GPS 프로토콜은 보다 빠른 시작을 위해 u-blox가 기본값으로 설정되며, 다른 GPS를 사용하는 경우 "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[t._v("GPS_x_PROTOCOL")]),t._v("을 변경하여야 합니다.")],1)]),t._v(" "),_("h3",{attrs:{id:"nuttx"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[t._v("#")]),t._v(" NuttX")]),t._v(" "),_("p",[t._v("Nuttx가 "),_("a",{attrs:{href:"https://github.com/apache/incubator-nuttx/compare/nuttx-8.2..nuttx-10.0.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("8.2+에서 NuttX 10.10.0 +"),_("OutboundLink")],1),t._v("로 업그레이드 되었습니다 (@ "),_("a",{attrs:{href:"https://github.com/apache/incubator-nuttx/commit/904a602c74dc08a100b5c2bd490807de19e73e10",target:"_blank",rel:"noopener noreferrer"}},[t._v("904a602c74dc08a100b5c2bd490807de19e73e10"),_("OutboundLink")],1),t._v(").")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("SDCARD 성능:")]),t._v(" H7 타겟에서 성능 향상")]),t._v(" "),_("ul",[_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32:SDIO: 카드 클럭 주파수에 관계없이 250Ms 데이터 경로 시간 초과 사용")]),t._v(" "),_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7:SDMMC: 카드 클럭 주파수에 관계없이 250Ms 데이터 경로 시간 초과 사용")]),t._v(" "),_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32f7:SDMMC: 카드 클럭 주파수에 관계없이 250Ms 데이터 경로 시간 초과 사용")]),t._v(" "),_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] SDMMC 드라이버의 이벤트 대기 로직에서 경쟁 조건을 수정합니다.")]),t._v(" "),_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] mmcsd : 1 비트 모드에서 멈춤, CONFIG_ARCH_HAVE_SDIO_DELAYED_INVLDT 제거됨")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("이더넷 안정성:")])]),t._v(" "),_("ul",[_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32x7: 너무 큰 프레임에서 발생하는 이더넷 고정 하드 폴트")]),t._v(" "),_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32: 너무 큰 이더넷 프레임 수정")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("부팅 안정성")]),t._v(" LSE(RTC) 발진기가 시작되도록 보장하는 V5-V6X")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7: lse Kconfig 도움말 텍스트 수정")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32f7: lse Kconfig 값을 직접 사용")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7: DBGMCU 추가")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32f7: LSE 기능을 자동 선택하는 옵션 추가")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7: LSE 기능을 자동 선택하는 옵션 추가")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")])])])])])]),t._v(" "),_("p",[t._v("이 노브는 낮은 값에서 높은 값으로 올바른 값을 순환합니다. 크리스탈 손상을 방지하기 위하여, OSC를 실행하는 가장 낮은 설정을 사용하려고합니다. See app note AN2867\n*It will take into account the rev of the silicon\nand use the correct code points to achieve the drive\nstrength. Eratta ES0392 Rev 7 2.2.14 참조\nLSE 오실레이터 구동 기능 선택 비트가 스왑됩니다.\n:::")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("드라이버 변경")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] 드라이버/시리얼: cdcacm에 대한 Rx 인터럽트 활성화 수정")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] binnfmt: ELF fd 닫기 전 반환 수정")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32f7:OTG_ID GPIO 재사용 허용")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32f7: do_gpio의 SDMMC 수정 재설정")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7: 직렬: dma tx 세마포어를 리소스 홀더로 사용")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7: do_gpio의 SDMMC 수정 재설정")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7: 직렬 RX 및 TX DMA 추가")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7:OTG_ID GPIO 재사용 허용")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("백포트")]),t._v("] Kinetis:kinetis:DMA 교체")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] kinetis: 직렬 사용 eDMA")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] kinetis:SPI는 eDMA를 사용합니다.")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] Kinetis:Serail DMA 설문조사 필요 없음")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] libc/stdio: 콘솔이 없는 대상에 대해 stdin, stdout 및 stderr을 미리 할당합니다.")])])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("FlexCan 수정")])]),t._v(" "),_("ul",[_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] [FlexCAN] CTRL1 레지스터의 올바른 재설정 상태")]),t._v(" "),_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] [FlexCAN] TX 드롭 #2792를 수정하고 CAN 타이밍을 0이 아닌 레지스터로 올바르게 설정")]),t._v(" "),_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] FlexCAN 수정 TX 중단 프로세스")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("CAN 부트 로더 지원")])]),t._v(" "),_("ul",[_("li",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] s32k1xx: ramfunc 지원")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("STM32F412 정리")])])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32f412: 핀 갯수 수정")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32f412: Kludged 핀맵을 SoC용 핀맵으로 교체.")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32412: 핀맵 CAN1 수정")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("보안 패치")])])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] tcp: TCP 재조립에 대한 불완전한 지원 제거")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] net/tcp/tcp_input.c:  긴급한 데이터 길이의 잘못된 검사 수정")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] libc: malloc realloc 및 memalign에 대한 추가 검사 추가")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("IMXRT 수정")])])]),t._v(" "),_("li",[_("p",[t._v("sbus etal을 지원하기 위하여 IMXRT에 단일 와이어와 적절한 패리티 설정을 추가합니다.")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] imxrt: 직렬 지원 단일 와이어 모드")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] imxrt: imxrt_lowputc 고정 패리티 설정.")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("STM32H7 개선")])])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7: SPI 수정 16 비트 SPI 모드")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7: DMA BDMA는 완료시 자동 비활성화되지 않습니다.")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] SRAM4에서 HEAP 클로버링 정적 데이터 수정")])]),t._v(" "),_("li",[_("p",[t._v("["),_("strong",[t._v("BACKPORT")]),t._v("] stm32h7: do_gpio의 SDMMC 수정 재설정")])])]),t._v(" "),_("h3",{attrs:{id:"uavcan"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uavcan"}},[t._v("#")]),t._v(" UAVCAN")]),t._v(" "),_("ul",[_("li",[t._v("UAVCANv0 : 펌웨어 업그레이드와 CAN 노드의 매개변수 동기화와 같은 기본 기능이 5 년 이상 구현되었지만, 이제는 장치가 시장에 출시되어 새롭게 지원합니다. 일반적인 CAN GPS, 대기 속도 및 전력 모듈이 지원됩니다.")]),t._v(" "),_("li",[t._v("UAVCANv0 노드 : PX4는 수년 동안 빌딩 노드를 지원하였습니다. 이제 CUAV GPS 장치와 같은 특정 타겟 구축을 지원합니다.")]),t._v(" "),_("li",[t._v("UAVCANv1 : 완전한 종단간 구현의 초기 알파")])])])}),[],!1,null,null,null);r.default=v.exports}}]);