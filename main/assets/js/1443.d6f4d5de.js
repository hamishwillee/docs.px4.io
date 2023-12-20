(window.webpackJsonp=window.webpackJsonp||[]).push([[1443],{2643:function(t,_,e){"use strict";e.r(_);var a=e(19),o=Object(a.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"레이서-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#레이서-설정"}},[t._v("#")]),t._v(" 레이서 설정")]),t._v(" "),e("p",[t._v("This page describes how to setup and configure a racer for optimal performance (in particular for "),e("RouterLink",{attrs:{to:"/ko/flight_modes_mc/acro.html"}},[t._v("Acro mode")]),t._v(").")],1),t._v(" "),e("p",[t._v("레이서들은 빠른 기동을 위해 설계된 기체입니다. 가능하면, 유경험자에게 도움을 받는 것이 좋습니다.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("여기에 설명된 사항은 다른 유형의 멀티콥터의 성능을 개선할 수도 있습니다.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("일반적으로 레이서는 일부 센서(예 : GPS)들을 사용하지 않을 수도 있습니다.\n결과적으로 사용 가능한 안전 장치 옵션은 적어지는 것입니다.")])]),t._v(" "),e("h2",{attrs:{id:"빌드-옵션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#빌드-옵션"}},[t._v("#")]),t._v(" 빌드 옵션")]),t._v(" "),e("p",[t._v("일반적으로 레이서는 일부 센서들을 사용하지 않습니다.")]),t._v(" "),e("p",[t._v("자이로와 가속도계만을 사용하는 최소 구성을 할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("보드에 내부 자력계가 있는 경우 사용해서는 안됩니다 (작은 레이서가 특히 강한 전자기 간섭을 받기 쉽습니다).")])]),t._v(" "),e("p",[t._v("레이서에는 일반적으로 중량 중가 문제와 충돌시 파손 문제로 인하여 GPS가 없습니다 (GPS + 외부 자력계는 자기 간섭을 피하기 위해 고전류에서 멀리 떨어진 GPS 마스트에 배치해야합니다. 이는 쉽게 파손될 수 있음을 의미합니다.)")]),t._v(" "),e("p",[t._v("그러나 GPS를 추가시에는 초보자들에게 이로운 점이 몇 가지 있습니다.")]),t._v(" "),e("ul",[e("li",[t._v("위치 유지모드에서 기체가 한 곳에 머물 수 있습니다. 방향을 잃거나 브레이크가 필요한 경우에 매우 편리합니다. 또한 안전하게 착륙할 수 있습니다.")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("귀환 모드")]),t._v(" 스위치 또는 RC 손실 또는 배터리 부족시의 안전 장치로 사용할 수 있습니다.")],1),t._v(" "),e("li",[t._v("충돌시의 마지막 위치를 파악할 수 있습니다.")]),t._v(" "),e("li",[t._v("로그에는 비행 트랙이 포함되어 있으므로 비행을 검토할 수 있습니다 (3D). 이것은 곡예 비행 기술을 향상에 많은 도움이 됩니다.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("공격적인 곡예 기동 중에는 GPS가 잠시 동안 위치를 파악하지 못할 수도 있습니다. If you switch into "),e("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("position mode")]),t._v(" during that time, "),e("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[t._v("altitude mode")]),t._v(" will be used instead until the position becomes valid again.")],1)]),t._v(" "),e("h2",{attrs:{id:"하드웨어-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),e("p",[t._v("다음 단락에서는 기체 제작시 몇 가지 중요한 사항에 대하여 설명합니다. If you need complete build instructions, you can follow the "),e("RouterLink",{attrs:{to:"/ko/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[t._v('QAV-R 5" KISS ESC Racer')]),t._v(" build log.")],1),t._v(" "),e("h3",{attrs:{id:"진동-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#진동-설정"}},[t._v("#")]),t._v(" 진동 설정")]),t._v(" "),e("p",[t._v("진동을 줄이기 위한 여러가지 조립 방법이 있습니다. 예를 들어, 비행 컨트롤러는 진동 완화 폼이나 "),e("RouterLink",{attrs:{to:"/ko/frames_multicopter/qav_r_5_kiss_esc_racer.html#mounting"}},[t._v("O-링")]),t._v("을 사용하여 조립할 수 있습니다.")],1),t._v(" "),e("p",[t._v("최고의 방법은 없지만, "),e("RouterLink",{attrs:{to:"/ko/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[t._v('QAV-R 5 "KISS ESC Racer')]),t._v("에서 사용하는 고품질 부품(프레임, 모터, 소품)들을 사용하면 진동 문제가 일반적으로 적어집니다.")],1),t._v(" "),e("p",[e("strong",[t._v("균형 프로펠러")]),t._v("을 사용하십시오.")]),t._v(" "),e("h3",{attrs:{id:"무게-중심"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#무게-중심"}},[t._v("#")]),t._v(" 무게 중심")]),t._v(" "),e("p",[t._v("무게 중심이 추력 중심에서 최대한 가까워야 합니다. 좌우 균형은 일반적으로 문제가 되지 않지만, 전후 균형은 문제가 될 수 있습니다. 배터리의 적당한 위치를 표시하여 항상 같은 위치에 장착하는 것이 좋습니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("적분항는 불균형 설정을 나타내는 것이며, 용자 정의 믹서는 더 정확하게 나타낼 수 있습니다.\n그러나 기체 설정으로 불균형을 수정하는 방법이 제일 좋습니다.")])]),t._v(" "),e("h2",{attrs:{id:"소프트웨어-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-설정"}},[t._v("#")]),t._v(" 소프트웨어 설정")]),t._v(" "),e("p",[t._v("레이서를 조립 후에는 소프트웨어를 설정하여야 합니다.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("기본 설정 가이드")]),t._v("를 참조하십시오. 특히, 자신의 프레임과 가장 일치하는 "),e("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("Airframe")]),t._v("을 설정합니다 (일반적으로 레이서 별 매개변수를 기본적으로 설정하는 "),e("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_quadrotor_x_generic_250_racer"}},[t._v("Generic 250 Racer")]),t._v(" 기체를 선택합니다).")],1),t._v(" "),e("p",[t._v("중요한 매개 변수는 다음과 같습니다.")]),t._v(" "),e("ul",[e("li",[t._v("Enable One-Shot or DShot by selecting the protocol for a group of outputs during "),e("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(".")],1),t._v(" "),e("li",[t._v("수동/안정화 모드의 최대 롤, 피치 및 요 속도를 설정합니다 : "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_ROLLRATE_MAX"}},[t._v("MC_ROLLRATE_MAX")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_PITCHRATE_MAX"}},[t._v("MC_PITCHRATE_MAX")]),t._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_YAWRATE_MAX"}},[t._v("MC_YAWRATE_MAX")]),t._v(". 최대 기울기 각도는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_MAN_TILT_MAX"}},[t._v("MPC_MAN_TILT_MAX")]),t._v("로 설정합니다.")],1),t._v(" "),e("li",[t._v("최소 추력 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_MANTHR_MIN"}},[t._v("MPC_MANTHR_MIN")]),t._v("은 0으로 설정합니다.")],1)]),t._v(" "),e("h3",{attrs:{id:"추정기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추정기"}},[t._v("#")]),t._v(" 추정기")]),t._v(" "),e("p",[t._v("GPS를 사용하는 경우에는 이 섹션을 건너 뛰고 기본 추정기를 사용할 수 있습니다. 그렇지 않으면 자력계나 기압계를 사용하지 않는 Q 자세 추정기로 전환하여야 합니다.")]),t._v(" "),e("p",[t._v("이를 선택하려면 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v("을 1로 설정하고 다음의 매개변수를 변경하십시오.")],1),t._v(" "),e("ul",[e("li",[t._v("시스템에 자력계가 없는 경우 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_HAS_MAG"}},[t._v("SYS_HAS_MAG")]),t._v("를 0으로 설정하십시오.")],1),t._v(" "),e("li",[t._v("시스템에 기압계가 없는 경우 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_HAS_BARO"}},[t._v("SYS_HAS_BARO")]),t._v("를 0으로 설정하십시오.")],1),t._v(" "),e("li",[t._v("Q 추정기를 설정합니다. "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ATT_ACC_COMP"}},[t._v("ATT_ACC_COMP")]),t._v("를 0으로, "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ATT_W_ACC"}},[t._v("ATT_W_ACC")]),t._v("를 0.4로, "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ATT_W_GYRO_BIAS"}},[t._v("ATT_W_GYRO_BIAS")]),t._v("를 0으로 설정합니다. 필요한 경우에 차후에 튜닝할 수 있습니다.")],1)]),t._v(" "),e("h3",{attrs:{id:"안전장치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#안전장치"}},[t._v("#")]),t._v(" 안전장치")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("RC 손실 및 배터리 안전 장치")]),t._v("를 설정합니다. GPS를 사용하지 않는 경우 안전 장치를 "),e("strong",[t._v("잠금")]),t._v("으로 설정하면 모터가 꺼집니다. 차량이 시동이 켜지면 리모컨을 꺼서 프로펠러를 제거한 다음에, 벤치에서 RC 손실을 테스트합니다.")],1),t._v(" "),e("p",[t._v("Make sure to assign a "),e("RouterLink",{attrs:{to:"/ko/config/safety.html#kill-switch"}},[t._v("kill switch")]),t._v(" or an "),e("RouterLink",{attrs:{to:"/ko/config/safety.html#arm-disarm-switch"}},[t._v("arming switch")]),t._v(". 테스트하고 연습을 충분히 하여야 합니다.")],1),t._v(" "),e("h3",{attrs:{id:"pid-튜닝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pid-튜닝"}},[t._v("#")]),t._v(" PID 튜닝")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("PID 튜닝을 전에 ESC를 먼저 튜닝하십시오.")])]),t._v(" "),e("p",[t._v("이 시점에서 첫 번째 테스트 비행을 준비하여야 합니다.")]),t._v(" "),e("p",[t._v("기체의 기본 설정으로 비행이 가능하면, "),e("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter_basic.html"}},[t._v("기본 MC PID 튜닝")]),t._v("의 첫 번째 과정을 수행합니다. 기체는 "),e("strong",[t._v("저 조율")]),t._v("하여야 합니다 ("),e("strong",[t._v("P")]),t._v(" 및 "),e("strong",[t._v("D")]),t._v(" 게인은 낮게 설정함). 컨트롤러에서 발생하는 진동이 없어야합니다. 잡음으로 해석되어 질 수 있습니다 (기본 이득이 충분할 수 있음). 이것은 "),e("a",{attrs:{href:"#filter-tuning"}},[t._v("필터 튜닝")]),t._v("에 중요합니다 (나중에 두 번째 PID 튜닝이 있습니다).")],1),t._v(" "),e("h3",{attrs:{id:"제어-지연"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#제어-지연"}},[t._v("#")]),t._v(" 제어 지연")]),t._v(" "),e("p",[t._v("The "),e("em",[t._v("control latency")]),t._v(" is the delay from a physical disturbance of the vehicle until the motors react to the change.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("It is "),e("em",[t._v("crucial")]),t._v(" to reduce the control latency as much as possible! 지연 시간이 짧을수록 "),e("strong",[t._v("P")]),t._v(" 이득을 높일 수 있으며, 비행 성능 향상을 의미하는 것입니다. 지연 시간은 1/1000 초가 추가 되어도 현격한 차이를 나타냅니다.")])]),t._v(" "),e("p",[t._v("지연 시간에 영향을 미치는 요인은 다음과 같습니다.")]),t._v(" "),e("ul",[e("li",[t._v("부드러운 기체 또는 부드러운 진동 장착은 지연 시간을 증가시킵니다 (필터 역할을 함).")]),t._v(" "),e("li",[t._v("소프트웨어 및 센서 칩의 "),e("RouterLink",{attrs:{to:"/ko/config_mc/filter_tuning.html"}},[t._v("저역 통과 필터")]),t._v("는 지연시간 증가분을 상쇄하여 노이즈 필터링을 원활하게 합니다.")],1),t._v(" "),e("li",[t._v("PX4 소프트웨어 내부 : 센서 신호를 드라이버에서 읽은 다음 컨트롤러를 통해 출력 드라이버로 전달하여야 합니다.")]),t._v(" "),e("li",[t._v("The IO chip (MAIN pins) adds about 5.4 ms latency compared to using the AUX pins (this does not apply to a "),e("em",[t._v("Pixracer")]),t._v(" or "),e("em",[t._v("Omnibus F4")]),t._v(", but does apply to a Pixhawk). To avoid the IO delay attach the motors to the AUX pins instead.")]),t._v(" "),e("li",[t._v("PWM output signal: enable "),e("RouterLink",{attrs:{to:"/ko/peripherals/dshot.html"}},[t._v("Dshot")]),t._v(" by preference to reduce latency (or One-Shot if DShot is not supported). The protocol is selected for a group of outputs during "),e("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(".")],1)]),t._v(" "),e("h3",{attrs:{id:"필터-튜닝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#필터-튜닝"}},[t._v("#")]),t._v(" 필터 튜닝")]),t._v(" "),e("p",[t._v("필터는 성능에 영향을 미치는 제어 대기 시간과 노이즈 필터링을 절충합니다. 자세한 내용은 "),e("RouterLink",{attrs:{to:"/ko/config_mc/filter_tuning.html"}},[t._v("필터/제어 지연 시간 튜닝 ")]),t._v("편을 참고하십시오.")],1),t._v(" "),e("h3",{attrs:{id:"pid-튜닝-두-번째-단계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pid-튜닝-두-번째-단계"}},[t._v("#")]),t._v(" PID 튜닝 (두 번째 단계)")]),t._v(" "),e("p",[t._v("이제 두 번째 PID 튜닝을 수행합니다. 이번에는 가능한 한 빡빡하게하고 추력 곡선도 튜닝합니다.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter_basic.html"}},[t._v("기본 MC PID 튜닝")]),t._v("의 접근 방식으로 프레임을 튜닝할 수 있으며, 자세한 방법은 "),e("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[t._v("고급 멀티 콥터 PID 튜닝 가이드 (고급/상세) ")]),t._v("를 사용하여야 합니다. 추력 곡선을 조정합니다.")],1),t._v(" "),e("h3",{attrs:{id:"에어모드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#에어모드"}},[t._v("#")]),t._v(" 에어모드")]),t._v(" "),e("p",[t._v("기체가 낮은 스로틀과 높은 스로틀에서 잘 비행하는지 확인한 후 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_AIRMODE"}},[t._v("MC_AIRMODE")]),t._v(" 매개변수로 "),e("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html#airmode"}},[t._v("에어 모드")]),t._v("를 활성화할 수 있습니다. 이 기능은 기체가 제어 가능하고 낮은 스로틀에서 속도를 추적하도록 합니다.")],1),t._v(" "),e("p",[t._v("행복한 뒤집기 😃")])])])}),[],!1,null,null,null);_.default=o.exports}}]);