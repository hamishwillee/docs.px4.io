(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{2633:function(t,e,_){"use strict";_.r(e);var o=_(19),v=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"멀티콥터-pid-튜닝-가이드"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-pid-튜닝-가이드"}},[t._v("#")]),t._v(" 멀티콥터 PID 튜닝 가이드")]),t._v(" "),o("p",[t._v("이 튜토리얼은 모든 "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter"}},[t._v("멀티콥터 설정")]),t._v(" (Quads, Hexa, Octo 등)에 대해 PX4에서 PID 루프를 조정하는 방법을 설명합니다.")],1),t._v(" "),o("p",[t._v("비교적 작은 하드웨어와 어셈블리 변경이 최적의 비행  튜닝 게인에 영향을 미치므로,  새로운 기체 설정에 튜닝이 권장됩니다. 예를 들어, 새로운 ESC 또는 모터에는 다른 튜닝 게인이 필요합니다.\n:::")]),t._v(" "),o("p",[t._v("Generally if you're using an appropriate "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter"}},[t._v("supported frame configuration")]),t._v(", the default tuning should allow you to fly the vehicle safely. 모든 새 차량 설정이 "),o("em",[t._v("최고의")]),t._v(" 성능을 얻을 수 있도록 조정하는 것이 좋습니다. 상대적으로 작은 하드웨어와 조립품 변경이 최적의 비행을 위해 필요한 조정 이득에 영향을 줄 수 있기 때문입니다. For example, different ESCs or motors change the optimal tuning gains.")],1),t._v(" "),o("h2",{attrs:{id:"소개"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#소개"}},[t._v("#")]),t._v(" 소개")]),t._v(" "),o("p",[t._v("PX4 uses "),o("strong",[t._v("P")]),t._v("roportional, "),o("strong",[t._v("I")]),t._v("ntegral, "),o("strong",[t._v("D")]),t._v("erivative (PID) controllers (these are the most widespread control technique).")]),t._v(" "),o("p",[o("em",[t._v("QGroundControl")]),t._v(" "),o("strong",[t._v("PID 튜닝")]),t._v(" 설정은 기체 설정점과 응답 곡선의 실시간 플롯을 제공합니다. 튜닝의 목표는 "),o("em",[t._v("Response")]),t._v(" 곡선이 "),o("em",[t._v("Setpoint")]),t._v(" 곡선과 최대한 가깝게 일치하도록 P/I/D 값을 설정하는 것입니다 (예 : 오버슈트없는 빠른 응답).")]),t._v(" "),o("p",[o("img",{attrs:{src:_(351),alt:"QGC 속도 컨트롤러 튜닝 UI"}})]),t._v(" "),o("p",[t._v("컨트롤러는 계층화되어 있어 상위 수준의 컨트롤러 결과를 하위 수준의 컨트롤러로 전달합니다. 가장 낮은 수준의 컨트롤러는 "),o("strong",[t._v("속도 컨트롤러")]),t._v(", "),o("strong",[t._v("태도 컨트롤러")]),t._v(", 마지막으로 "),o("strong",[t._v("속도 & 위치 컨트롤러")]),t._v(" 입니다. PID 튜닝은 다른 모든 컨트롤러에 영향을 미치므로 속도 컨트롤러부터 시작하여 동일한 순서로 수행해야합니다.")]),t._v(" "),o("p",[t._v("컨트롤러는 계층화되어 있어 상위 수준의 컨트롤러 결과를 하위 수준의 컨트롤러로 전달합니다. 가장 낮은 수준의 컨트롤러는 "),o("strong",[t._v("속도 컨트롤러")]),t._v(", "),o("strong",[t._v("태도 컨트롤러")]),t._v(", 마지막으로 "),o("strong",[t._v("속도 & 위치 컨트롤러")]),t._v(" 입니다.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("ul",[o("li",[t._v("속도 컨트롤러 조정이 가장 중요하며 잘 조정된 경우 다른 컨트롤러는 종종 약간의 조정만 필요하거나 필요하지 않습니다.")]),t._v(" "),o("li",[t._v("일반적으로 롤 및 피치에 동일한 튜닝 게인을 사용할 수 있습니다.")]),t._v(" "),o("li",[t._v("곡예/안정화/고도 모드를 사용하여 속도 컨트롤러 조정")]),t._v(" "),o("li",[t._v("Use "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" to tune the "),o("em",[t._v("Velocity Controller")]),t._v(" and the "),o("em",[t._v("Position Controller")]),t._v(". Make sure to switch to the "),o("em",[t._v("Simple position control")]),t._v(" mode so you can generate step inputs. "),o("img",{attrs:{src:_(435),alt:"QGC PID tuning: Simple control selector"}})],1)])]),t._v(" "),o("h2",{attrs:{id:"전제-조건"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[t._v("#")]),t._v(" 전제 조건:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("You have selected the closest matching "),o("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("default frame configuration")]),t._v(" for your vehicle. 이것은 이미 비행한 기체를 제공할 것입니다.")],1)]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/ko/advanced_config/esc_calibration.html"}},[t._v("ESC 보정")]),t._v("을 완료하여야 합니다.")],1)]),t._v(" "),o("li",[o("p",[t._v("If using PWM outputs their minimum values should be set correctly in the "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-configuration-and-testing"}},[t._v("Actuator Configuration")]),t._v(". These need to be set low, but such that the "),o("strong",[t._v("motors never stop")]),t._v(" when the vehicle is armed.")],1),t._v(" "),o("p",[t._v("This can be tested in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/acro.html"}},[t._v("Acro mode")]),t._v(" or in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/manual_stabilized.html"}},[t._v("Manual/Stabilized mode")]),t._v(":")],1),t._v(" "),o("ul",[o("li",[t._v("프로펠러 제거")]),t._v(" "),o("li",[t._v("기체에 시동을 걸고 스로틀을 최소로 내립니다.")]),t._v(" "),o("li",[t._v("차량을 모든 방향으로 60도 정도 기울입니다.")]),t._v(" "),o("li",[t._v("모터가 꺼져 있는 지 확인합니다.")])])]),t._v(" "),o("li",[o("p",[t._v("PWM 출력을 사용하는 경우 : "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MIN"}},[t._v("PWM_MIN")]),t._v("이 올바르게 설정되었습니다. 낮게 설정해야하지만 기체 시동시에는 "),o("strong",[t._v("모터가 절대 멈추지 않도록")]),t._v("합니다.")],1)]),t._v(" "),o("li",[o("p",[t._v("기체 튜닝전에 "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_AIRMODE"}},[t._v("MC_AIRMODE")]),t._v("를 비활성화하십시오 (PID 튜닝 화면에 이에 대한 옵션이 있습니다).")],1)])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("잘못 튜닝된 기체는 불안정하고 충돌 가능성이 높아집니다. "),o("RouterLink",{attrs:{to:"/ko/config/safety.html#emergency-switches"}},[t._v("킬 스위치")]),t._v("를 지정했는 지 확인하십시오.")],1)]),t._v(" "),o("h2",{attrs:{id:"튜닝-절차"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#튜닝-절차"}},[t._v("#")]),t._v(" 튜닝 절차")]),t._v(" "),o("p",[t._v("튜닝 절차는 다음과 같습니다.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Arm the vehicle, takeoff, and hover (typically in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(").")],1)]),t._v(" "),o("li",[o("p",[t._v("_QGroundControl_을 실행합니다. "),o("strong",[t._v("차량 설정 > PID 튜닝")]),t._v(" "),o("img",{attrs:{src:_(351),alt:"QGC 속도 컨트롤러 튜닝 UI"}})])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Rate Controller")]),t._v(" 탭을 선택하십시오.")])]),t._v(" "),o("li",[o("p",[t._v("에어 모드 선택기가 "),o("strong",[t._v("사용 안함")]),t._v("으로 설정되어 있는 지 확인합니다.")])]),t._v(" "),o("li",[o("p",[t._v("Set the "),o("em",[t._v("Thrust curve")]),t._v(" value to: 0.3 (PWM, power-based controllers) or 1 (RPM-based ESCs)")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("PWM, 전력 기반 및 (일부) UAVCAN 속도 컨트롤러의 경우 추력 관계에 대한 제어 신호가 선형이 아닐 수 있습니다. 그 결과 호버 추력에서 최적의 튜닝은 차량이 강한 추력으로 작동시 최적이 아닐 수 있습니다.")]),t._v(" "),o("p",[t._v("추력 곡선 값을 사용하여 비선형성을 보상할 수 있습니다.")]),t._v(" "),o("ul",[o("li",[t._v("PWM 컨트롤러의 경우 0.3이 좋은 기본값입니다 ("),o("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[t._v("추가 조정")]),t._v("의 이점을 누릴 수 있음).")],1),t._v(" "),o("li",[t._v("RPM 기반 컨트롤러의 경우 1을 사용합니다 (2 차 추력 곡선이 있으므로 추가 튜닝이 필요하지 않음).")])]),t._v(" "),o("p",[t._v("자세한 내용은 "),o("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[t._v("자세한 PID 튜닝 가이드")]),t._v("를 참조하십시오.")],1)])])]),t._v(" "),o("p",[t._v(":::")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Set the "),o("em",[t._v("Select Tuning")]),t._v(" radio button to: "),o("strong",[t._v("Roll")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("(선택 사항) "),o("strong",[t._v("자동 비행 모드 전환")]),t._v(" 확인란을 선택합니다. This will "),o("em",[t._v("automatically")]),t._v(" switch from "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" to "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/manual_stabilized.html"}},[t._v("Stabilised mode")]),t._v(" when you press the "),o("strong",[t._v("Start")]),t._v(" button")],1)]),t._v(" "),o("li",[o("p",[t._v("For rate controller tuning switch to "),o("em",[t._v("Acro mode")]),t._v(", "),o("em",[t._v("Stabilized mode")]),t._v(" or "),o("em",[t._v("Altitude mode")]),t._v(" (unless automatic switching is enabled).")])]),t._v(" "),o("li",[o("p",[t._v("설정점과 응답 곡선 추적을 시작하려면 "),o("strong",[t._v("시작")]),t._v(" 버튼을 클릭합니다.")])]),t._v(" "),o("li",[o("p",[t._v("Rapidly move the "),o("em",[t._v("roll stick")]),t._v(" full range and observe the step response on the plots. :::tip 플롯을 더 쉽게 검사 할 수 있도록 추적을 중지하십시오. 확대/축소/이동시 자동으로 발생합니다. 플롯을 다시 시작하려면 "),o("strong",[t._v("시작")]),t._v(" 버튼을 사용하고 재설정하려면 "),o("strong",[t._v("지우기")]),t._v(" 버튼을 사용합니다.\n:::")])]),t._v(" "),o("li",[o("p",[t._v("슬라이더를 사용하여 3 개의 PID 값을 수정하고 (롤 속도 조정을 위해 "),o("code",[t._v("MC_ROLLRATE_K")]),t._v(", "),o("code",[t._v("MC_ROLLRATE_I")]),t._v(", "),o("code",[t._v("MC_ROLLRATE_D")]),t._v("에 영향을 미칩니다) 단계 응답을 다시 관찰합니다. 슬라이더를 움직이면 값이 기체에 저장됩니다. :::note 목표는 "),o("em",[t._v("Response")]),t._v(" 곡선이 "),o("em",[t._v("Setpoint")]),t._v(" 곡선과 최대한 가깝게 일치하는 것입니다 (예 : 오버슈트없는 빠른 응답). ::: PID 값은 다음과 같이 조정할 수 있습니다.")]),t._v(" "),o("ul",[o("li",[t._v("P (비례) 또는 K 이득 :\n"),o("ul",[o("li",[t._v("더 많은 응답을 위해 이것을 늘리십시오.")]),t._v(" "),o("li",[t._v("응답이 오버 슈팅 및/또는 진동하는 경우 감소합니다 (특정 지점까지 D 게인 증가도 도움이 됨).")])])]),t._v(" "),o("li",[t._v("D (미분) 이득 :\n"),o("ul",[o("li",[t._v("오버슈트 및 진동을 줄이기 위해이 값을 늘릴 수 있습니다.")]),t._v(" "),o("li",[t._v("소음을 증폭하고 모터가 뜨거워 질 수 있으므로 필요한 만큼만 늘리십시오.")])])]),t._v(" "),o("li",[t._v("I (적분) 이득 :\n"),o("ul",[o("li",[t._v("정상 상태 오류를 줄이는 데 사용")]),t._v(" "),o("li",[t._v("너무 낮으면 응답이 설정 값에 도달하지 못할 수 있습니다 (예 : 바람)")]),t._v(" "),o("li",[t._v("너무 높으면 느린 진동이 발생할 수 있습니다.")])])])])]),t._v(" "),o("li",[o("p",[t._v("피치와 요에 대해 위의 튜닝 프로세스를 반복합니다.")]),t._v(" "),o("ul",[o("li",[t._v("Use "),o("em",[t._v("Select Tuning")]),t._v(" radio button to select the axis to tune")]),t._v(" "),o("li",[t._v("적절한 스틱을 이동합니다 (예 : 피치 스틱, 요 스틱).")]),t._v(" "),o("li",[t._v("피치 튜닝의 경우 롤과 동일한 값으로 시작하십시오. :::tip 초기 피치 설정에 대한 롤 설정을 복사하려면 "),o("strong",[t._v("클립 보드에 저장")]),t._v(" 및 "),o("strong",[t._v("클립 보드에서 재설정")]),t._v(" 버튼을 사용합니다.\n:::")])])]),t._v(" "),o("li",[o("p",[t._v("모든 축에서 자세 콘트롤러에 대하여 튜닝 프로세스를 반복하십시오.")])]),t._v(" "),o("li",[o("p",[t._v("Repeat the tuning process for the velocity and positions controllers (on all the axes).")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Use Position mode when tuning these controllers")])]),t._v(" "),o("li",[o("p",[t._v("Select the "),o("strong",[t._v("Simple position control")]),t._v(" option in the "),o("em",[t._v("Position control mode ...")]),t._v(" selector (this allows direct control for the generation of step inputs)")]),t._v(" "),o("p",[o("img",{attrs:{src:_(435),alt:"QGC PID tuning: Simple control selector"}})])])])])]),t._v(" "),o("p",[t._v("완료되었습니다 ! 설정을 종료하기 전에 에어 모드를 다시 활성화하여야 합니다.")])])}),[],!1,null,null,null);e.default=v.exports},351:function(t,e,_){t.exports=_.p+"assets/img/qgc_mc_pid_tuning_rate_controller.0b732932.png"},435:function(t,e,_){t.exports=_.p+"assets/img/qgc_mc_pid_tuning_simple_control.100dbcb2.png"}}]);