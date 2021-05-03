(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{1971:function(_,t,v){"use strict";v.r(t);var o=v(18),i=Object(o.a)({},(function(){var _=this,t=_.$createElement,o=_._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("h1",{attrs:{id:"멀티콥터-pid-튜닝-가이드"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-pid-튜닝-가이드"}},[_._v("#")]),_._v(" 멀티콥터 PID 튜닝 가이드")]),_._v(" "),o("p",[_._v("이 튜토리얼은 모든 "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter"}},[_._v("멀티콥터 설정")]),_._v(" (Quads, Hexa, Octo 등)에 대해 PX4에서 PID 루프를 조정하는 방법을 설명합니다.")],1),_._v(" "),o("p",[_._v("비교적 작은 하드웨어와 어셈블리 변경이 최적의 비행  튜닝 게인에 영향을 미치므로,  새로운 기체 설정에 튜닝이 권장됩니다. 예를 들어, 새로운 ESC 또는 모터에는 다른 튜닝 게인이 필요합니다.")]),_._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),o("p",[_._v("일반적으로 적절한 "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter"}},[_._v("지원되는 기체 구성")]),_._v(" ("),o("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[_._v("QGroundControl >기체 ")]),_._v("에서 선택)을 사용하는 경우 기본 튜닝을 통해 기체를 안전하게 비행할 수 있습니다. "),o("em",[_._v("최고의")]),_._v(" 성능을 얻으려면 새 기체를 튜닝하는 것이 좋습니다.")],1)]),_._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),o("p",[_._v("잘못 튜닝된 기체는 불안정하고 충돌하기 쉽습니다. "),o("RouterLink",{attrs:{to:"/ko/config/safety.html#emergency-switches"}},[_._v("킬 스위치")]),_._v("를 지정했는 지 확인하십시오.")],1)]),_._v(" "),o("h2",{attrs:{id:"소개"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#소개"}},[_._v("#")]),_._v(" 소개")]),_._v(" "),o("p",[_._v("PX4는 "),o("strong",[_._v("P")]),_._v("roportional, "),o("strong",[_._v("I")]),_._v("ntegral, "),o("strong",[_._v("D")]),_._v("erivative (PID) 컨트롤러를 사용합니다 (보편화된 제어 기술).")]),_._v(" "),o("p",[o("em",[_._v("QGroundControl")]),_._v(" "),o("strong",[_._v("PID 튜닝")]),_._v(" 설정은 기체 설정점과 응답 곡선의 실시간 플롯을 제공합니다. 튜닝의 목표는 "),o("em",[_._v("Response")]),_._v(" 곡선이 "),o("em",[_._v("Setpoint")]),_._v(" 곡선과 최대한 가깝게 일치하도록 P/I/D 값을 설정하는 것입니다 (예 : 오버슈트없는 빠른 응답).")]),_._v(" "),o("p",[o("img",{attrs:{src:v(405),alt:"QGC 속도 컨트롤러 튜닝 UI"}})]),_._v(" "),o("p",[_._v("컨트롤러는 계층화되어 있어 상위 수준의 컨트롤러 결과를 하위 수준의 컨트롤러로 전달합니다. 가장 낮은 수준의 컨트롤러는 "),o("strong",[_._v("속도 컨트롤러")]),_._v(", "),o("strong",[_._v("태도 컨트롤러")]),_._v(", 마지막으로 "),o("strong",[_._v("속도 & 위치 컨트롤러")]),_._v(" 입니다. PID 튜닝은 다른 모든 컨트롤러에 영향을 미치므로 속도 컨트롤러부터 시작하여 동일한 순서로 수행해야합니다.")]),_._v(" "),o("p",[_._v("각 컨트롤러 (속도, 자세, 속도/위치) 및 축 (요, 롤, 피치)에 대한 테스트 절차는 항상 동일합니다. 스틱을 매우 빠르게 움직여 빠른 설정값을 변경하고 응답을 관찰합니다. 그런 다음 슬라이더 (아래 설명 참조)를 조정하여 설정점에 대한 응답 추적을 개선합니다.")]),_._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),o("ul",[o("li",[_._v("속도 컨트롤러 조정이 가장 중요하며 잘 조정된 경우 다른 컨트롤러는 종종 약간의 조정만 필요하거나 필요하지 않습니다.")]),_._v(" "),o("li",[_._v("일반적으로 롤 및 피치에 동일한 튜닝 게인을 사용할 수 있습니다.")]),_._v(" "),o("li",[_._v("곡예/안정화/고도 모드를 사용하여 속도 컨트롤러 조정")]),_._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("를 사용하여 "),o("em",[_._v("속도 컨트롤러")]),_._v(" 및 "),o("em",[_._v("위치 컨트롤러")]),_._v("를 조정합니다. 단계 입력을 생성할 수 있도록 "),o("em",[_._v("단순 위치 제어")]),_._v(" 모드로 전환하여야 합니다. "),o("img",{attrs:{src:v(406),alt:"QGC PID tuning: Simple control selector"}})],1)])]),_._v(" "),o("h2",{attrs:{id:"전제-조건"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[_._v("#")]),_._v(" 전제 조건:")]),_._v(" "),o("ul",[o("li",[o("p",[_._v("QGroundControl "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[_._v("일일 빌드")]),o("OutboundLink")],1),_._v("를 사용 중입니다 (최신 튜닝 UI는 2021년 3월 이후의 다음 릴리스 빌드에 있을 예정입니다).")])]),_._v(" "),o("li",[o("p",[_._v("기체에 가장 일치하는 "),o("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[_._v("기본 기체 구성")]),_._v("을 선택하였습니다. 이것은 이미 비행한 기체를 제공할 것입니다.")],1)]),_._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/ko/advanced_config/esc_calibration.html"}},[_._v("ESC 보정")]),_._v("을 완료하여야 합니다.")],1)]),_._v(" "),o("li",[o("p",[_._v("PWM 출력을 사용하는 경우 : "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MIN"}},[_._v("PWM_MIN")]),_._v("이 올바르게 설정되었습니다. 낮게 설정해야하지만 기체 시동시에는 "),o("strong",[_._v("모터가 절대 멈추지 않도록")]),_._v("합니다.")],1),_._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/flight_modes/acro_mc.html"}},[_._v("곡예 모드")]),_._v(" 또는 "),o("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[_._v("수동/안정 모드")]),_._v("에서 테스트할 수 있습니다.")],1),_._v(" "),o("ul",[o("li",[_._v("프로펠러 제거합니다.")]),_._v(" "),o("li",[_._v("기체에 시동을 걸고 스로틀을 천천히 최대로 올립니다.")]),_._v(" "),o("li",[_._v("차량을 모든 방향으로 60도 정도 기울입니다.")]),_._v(" "),o("li",[_._v("모터가 꺼져 있지 않은지 확인합니다.")])])]),_._v(" "),o("li",[o("p",[_._v("가능하면 WiFi와 같은 고속 원격 측정 링크를 사용하십시오 (일반적인 저거리 원격 측정 라디오는 실시간 피드백 및 플롯에 적당하지 않습니다). 이는 속도 컨트롤러에 특히 중요합니다.")])]),_._v(" "),o("li",[o("p",[_._v("기체 튜닝전에 "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_AIRMODE"}},[_._v("MC_AIRMODE")]),_._v("를 비활성화하십시오 (PID 튜닝 화면에 이에 대한 옵션이 있습니다).")],1)])]),_._v(" "),o("h2",{attrs:{id:"튜닝-절차"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#튜닝-절차"}},[_._v("#")]),_._v(" 튜닝 절차")]),_._v(" "),o("p",[_._v("튜닝 절차는 다음과 같습니다.")]),_._v(" "),o("ol",[o("li",[o("p",[_._v("기체에 시동을 걸고, 이륙 호버링합니다 (일반적으로 "),o("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("에서).")],1)]),_._v(" "),o("li",[o("p",[_._v("_QGroundControl_을 실행합니다. "),o("strong",[_._v("차량 설정 > PID 튜닝")]),_._v(" "),o("img",{attrs:{src:v(405),alt:"QGC 속도 컨트롤러 튜닝 UI"}})])]),_._v(" "),o("li",[o("p",[o("strong",[_._v("Rate Controller")]),_._v(" 탭을 선택하십시오.")])]),_._v(" "),o("li",[o("p",[_._v("에어 모드 선택기가 "),o("strong",[_._v("사용 안함")]),_._v("으로 설정되어 있는 지 확인합니다.")])]),_._v(" "),o("li",[o("p",[o("em",[_._v("추력 곡선")]),_._v(" 값을 0.3 (PWM, 전력 기반 컨트롤러) 또는 1 (RPM 기반 ESC)로 설정합니다.")]),_._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[_._v("PWM, 전력 기반 및 (일부) UAVCAN 속도 컨트롤러의 경우 추력 관계에 대한 제어 신호가 선형이 아닐 수 있습니다. 그 결과 호버 추력에서 최적의 튜닝은 차량이 강한 추력으로 작동시 최적이 아닐 수 있습니다.")]),_._v(" "),o("p",[_._v("추력 곡선 값을 사용하여 비선형성을 보상할 수 있습니다.")]),_._v(" "),o("ul",[o("li",[_._v("PWM 컨트롤러의 경우 0.3이 좋은 기본값입니다 ("),o("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[_._v("추가 조정")]),_._v("의 이점을 누릴 수 있음).")],1),_._v(" "),o("li",[_._v("RPM 기반 컨트롤러의 경우 1을 사용합니다 (2 차 추력 곡선이 있으므로 추가 튜닝이 필요하지 않음).")])]),_._v(" "),o("p",[_._v("자세한 내용은 "),o("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[_._v("자세한 PID 튜닝 가이드")]),_._v("를 참조하십시오.")],1)])])]),_._v(" "),o("p",[_._v(":::")]),_._v(" "),o("ol",[o("li",[o("em",[_._v("튜닝 선택")]),_._v(" 라디오 버튼을 "),o("strong",[_._v("롤")]),_._v("로 설정합니다.")]),_._v(" "),o("li",[_._v("(선택 사항) "),o("strong",[_._v("자동 비행 모드 전환")]),_._v(" 확인란을 선택합니다. "),o("strong",[_._v("시작")]),_._v(" 버튼을 누르면 "),o("em",[_._v("자동으로")]),_._v(" "),o("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("에서 "),o("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[_._v("안정화 모드")]),_._v("로 전환됩니다.")],1),_._v(" "),o("li",[_._v("속도 컨트롤러 튜닝의 경우 "),o("em",[_._v("곡예 모드")]),_._v(", "),o("em",[_._v("안정화 모드")]),_._v(" 또는 "),o("em",[_._v("고도 모드")]),_._v("로 전환합니다 (자동 전환이 활성화되지 않은 경우).")]),_._v(" "),o("li",[_._v("설정점과 응답 곡선 추적을 시작하려면 "),o("strong",[_._v("시작")]),_._v(" 버튼을 클릭합니다.")]),_._v(" "),o("li",[o("em",[_._v("롤 스틱")]),_._v(" 전체 범위를 빠르게 이동하고 플롯에서 계단 응답을 관찰합니다. :::tip 플롯을 더 쉽게 검사 할 수 있도록 추적을 중지하십시오. 확대/축소/이동시 자동으로 발생합니다. 플롯을 다시 시작하려면 "),o("strong",[_._v("시작")]),_._v(" 버튼을 사용하고 재설정하려면 "),o("strong",[_._v("지우기")]),_._v(" 버튼을 사용합니다.\n:::")]),_._v(" "),o("li",[_._v("슬라이더를 사용하여 3 개의 PID 값을 수정하고 (롤 속도 조정을 위해 "),o("code",[_._v("MC_ROLLRATE_K")]),_._v(", "),o("code",[_._v("MC_ROLLRATE_I")]),_._v(", "),o("code",[_._v("MC_ROLLRATE_D")]),_._v("에 영향을 미칩니다) 단계 응답을 다시 관찰합니다. 슬라이더를 움직이면 값이 기체에 저장됩니다. :::note 목표는 "),o("em",[_._v("Response")]),_._v(" 곡선이 "),o("em",[_._v("Setpoint")]),_._v(" 곡선과 최대한 가깝게 일치하는 것입니다 (예 : 오버슈트없는 빠른 응답). ::: PID 값은 다음과 같이 조정할 수 있습니다.\n"),o("ul",[o("li",[_._v("P (비례) 또는 K 이득 :\n"),o("ul",[o("li",[_._v("더 많은 응답을 위해 이것을 늘리십시오.")]),_._v(" "),o("li",[_._v("응답이 오버 슈팅 및/또는 진동하는 경우 감소합니다 (특정 지점까지 D 게인 증가도 도움이 됨).")])])]),_._v(" "),o("li",[_._v("D (미분) 이득 :\n"),o("ul",[o("li",[_._v("오버슈트 및 진동을 줄이기 위해이 값을 늘릴 수 있습니다.")]),_._v(" "),o("li",[_._v("소음을 증폭하고 모터가 뜨거워 질 수 있으므로 필요한 만큼만 늘리십시오.")])])]),_._v(" "),o("li",[_._v("I (적분) 이득 :\n"),o("ul",[o("li",[_._v("정상 상태 오류를 줄이는 데 사용")]),_._v(" "),o("li",[_._v("너무 낮으면 응답이 설정 값에 도달하지 못할 수 있습니다 (예 : 바람)")]),_._v(" "),o("li",[_._v("너무 높으면 느린 진동이 발생할 수 있습니다.")])])])])]),_._v(" "),o("li",[_._v("피치와 요에 대해 위의 튜닝 프로세스를 반복합니다.\n"),o("ul",[o("li",[o("em",[_._v("튜닝 선택")]),_._v(" 라디오 버튼을 사용하여 튜닝 축을 선택합니다.")]),_._v(" "),o("li",[_._v("적절한 스틱을 이동합니다 (예 : 피치 스틱, 요 스틱).")]),_._v(" "),o("li",[_._v("피치 튜닝의 경우 롤과 동일한 값으로 시작하십시오. :::tip 초기 피치 설정에 대한 롤 설정을 복사하려면 "),o("strong",[_._v("클립 보드에 저장")]),_._v(" 및 "),o("strong",[_._v("클립 보드에서 재설정")]),_._v(" 버튼을 사용합니다.\n:::")])])]),_._v(" "),o("li",[_._v("모든 축에서 자세 콘트롤러에 대하여 튜닝 프로세스를 반복하십시오.")]),_._v(" "),o("li",[_._v("속도 및 위치 컨트롤러 (모든 축에서)에 대해 튜닝 프로세스를 반복합니다.\n"),o("ul",[o("li",[o("p",[_._v("이러한 컨트롤러를 조정할 때 위치 모드를 사용하십시오.")])]),_._v(" "),o("li",[o("p",[_._v("*위치 제어 모드 ... * 선택기에서 "),o("strong",[_._v("간단한 위치 제어")]),_._v(" 옵션을 선택합니다 (이렇게하면 단계 입력 생성을 직접 제어할 수 있음).")]),_._v(" "),o("p",[o("img",{attrs:{src:v(406),alt:"QGC PID 튜닝 : 간단한 제어 선택기"}})])])])])]),_._v(" "),o("p",[_._v("완료되었습니다 ! 설정을 종료하기 전에 에어 모드를 다시 활성화하여야 합니다.")])])}),[],!1,null,null,null);t.default=i.exports},405:function(_,t,v){_.exports=v.p+"assets/img/qgc_mc_pid_tuning_rate_controller.950965c8.png"},406:function(_,t,v){_.exports=v.p+"assets/img/qgc_mc_pid_tuning_simple_control.9f73a764.png"}}]);