(window.webpackJsonp=window.webpackJsonp||[]).push([[787],{2761:function(e,t,a){"use strict";a.r(t);var i=a(19),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"자동-튜닝"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#자동-튜닝"}},[e._v("#")]),e._v(" 자동 튜닝")]),e._v(" "),i("p",[e._v('자동 튜닝은 안정적이고 반응성은 높은 비행에 탁월한 컨트롤러인 PX4의 속도와 자세를 자동으로 튜닝합니다(다른 튜닝은 "선택 사항"에 가깝습니다). It is currently enabled for multicopter, fixed-wing, and hybrid VTOL fixed-wing vehicles.')]),e._v(" "),i("p",[e._v("Tuning only needs to be done once, and is recommended unless you're using a vehicle that has already been tuned by the manufacturer (and not modified since).")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("비행 중에 자동 튜닝이 수행됩니다. The airframe must fly well enough to handle moderate disturbances, and should be closely attended:")]),e._v(" "),i("ul",[i("li",[e._v("기체가 "),i("a",{attrs:{href:"#pre-tuning-test"}},[e._v("자동 튜닝을 할 만큼 충분히 안정적인지")]),e._v(" 테스트합니다.")]),e._v(" "),i("li",[e._v("Be ready to abort the autotuning process. You can do this by changing flight modes or using an auto-tune enable/disable switch ("),i("a",{attrs:{href:"#enable-disable-autotune-switch-fixed-wing"}},[e._v("if configured")]),e._v(").")]),e._v(" "),i("li",[e._v("Verify that the vehicle flies well after tuning.")])])]),e._v(" "),i("p"),i("div",{staticClass:"embed-responsive embed-responsive-16by9"},[i("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/5xswOhhqrIQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),i("p"),e._v(" "),i("h2",{attrs:{id:"사전-튜닝-테스트"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#사전-튜닝-테스트"}},[e._v("#")]),e._v(" 사전 튜닝 테스트")]),e._v(" "),i("p",[e._v("The vehicle must be able to fly and adequately stabilize itself before running auto-tune. This test ensures that the vehicle can fly safely in position controlled modes.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("During "),i("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[e._v("Airframe Setup")]),e._v(" you should have selected the frame that most closely matches your vehicle. This may fly well enough to run autotuning.")],1)]),e._v(" "),i("p",[e._v("To make sure the vehicle is stable enough for auto-tuning:")]),e._v(" "),i("ol",[i("li",[e._v("비행 구역이 깨끗하고 공간이 충분한 지 확인하기 위하여, 일반적인 비행 전 안전 점검을 실시합니다.")]),e._v(" "),i("li",[e._v("이륙 및 시험 준비\n"),i("ul",[i("li",[i("strong",[e._v("Multicopters:")]),e._v(" Take off and hover at 1m above ground in "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[e._v("Altitude mode")]),e._v(" or Stabilized mode.")],1),e._v(" "),i("li",[i("strong",[e._v("Fixed-wing:")]),e._v(" Take off and fly at cruise speed in "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(" or "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[e._v("Altitude mode")]),e._v(".")],1)])]),e._v(" "),i("li",[e._v("RC 송신기 롤 스틱을 사용하여 기체를 몇 도만 기울여 다음 기동을 수행하십시오. "),i("em",[e._v("좌회전 > 오른쪽 롤 > 중심")]),e._v(" (전체 기동은 약 3초가 소요됩니다). 기체는 2번의 진동 이내에서 안정화되어야 합니다.")]),e._v(" "),i("li",[e._v("각각의 시도에서 더 큰 진폭으로 기울이면서 기동을 반복합니다. 기체가 ~20도에서 2번의 진동 내에서 안정화될 수 있으면 다음 단계로 이동합니다.")]),e._v(" "),i("li",[e._v("피치 축에서 동일한 동작을 반복합니다. As above, start with small angles and confirm that the vehicle can stabilise itself within 2 oscillations before increasing the tilt.")])]),e._v(" "),i("p",[e._v("If the drone can stabilize itself within 2 oscillations it is ready for the auto-tuning procedure.")]),e._v(" "),i("p",[e._v("If not, go to the "),i("a",{attrs:{href:"#troubleshooting"}},[e._v("troubleshooting")]),e._v(" section, which explains the minimal manual tuning to prepare the vehicle for auto-tuning.")]),e._v(" "),i("h3",{attrs:{id:"auto-tuning-procedure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#auto-tuning-procedure"}},[e._v("#")]),e._v(" Auto-tuning Procedure")]),e._v(" "),i("p",[e._v("The auto-tuning sequence must be performed in a "),i("strong",[e._v("safe flight zone, with enough space")]),e._v(". It takes about 40 seconds ("),i("a",{attrs:{href:"#how-long-does-autotuning-take"}},[e._v("between 19 and 68 seconds")]),e._v("). For best results, we recommend running the test in calm weather conditions.")]),e._v(" "),i("p",[e._v("The recommended modes for autotuning are "),i("RouterLink",{attrs:{to:"/ko/flight_modes_fw/hold.html"}},[e._v("Hold mode")]),e._v(" (FW) and "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[e._v("Altitude mode")]),e._v(" (MC), but any other flight mode can be used. During auto tuning, the RC sticks can still be used to fly the vehicle.")],1),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("The auto-tuning sequence can be aborted at any time by changing flight modes or using the "),i("a",{attrs:{href:"#enable-disable-autotune-switch-fixed-wing"}},[e._v("enable/disable Autotune switch")]),e._v(" (if configured).")])]),e._v(" "),i("p",[e._v("The test steps are:")]),e._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"#pre-tuning-test"}},[e._v("사전 튜닝 테스트")]),e._v("를 수행합니다.")]),e._v(" "),i("li",[e._v("RC를 사용하여 이륙 및 테스트 준비합니다:\n"),i("ul",[i("li",[i("strong",[e._v("Multicopters:")]),e._v(" Takeoff using the remote controller in "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[e._v("Altitude mode")]),e._v(". 안전한 거리와 지상에서 4~20m에서 기체를 호버링하십시오.")],1),e._v(" "),i("li",[i("strong",[e._v("Fixed-wing:")]),e._v(" Once flying at cruise speed, activate "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/hold.html"}},[e._v("Hold mode")]),e._v(". 이렇게 하면 비행기가 일정한 고도와 속도로 원을 그리며 선회 비행합니다.")],1)])]),e._v(" "),i("li",[e._v("Enable autotune.")])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("If an "),i("a",{attrs:{href:"#enable-disable-autotune-switch-fixed-wing"}},[e._v("Enable/Disable Autotune Switch")]),e._v(' is configured you can just toggle the switch to the "enabled" position.')])]),e._v(" "),i("ol",[i("li",[i("p",[e._v("QGroundControl에서 메뉴("),i("strong",[e._v("차량 설정 > PID 조정")]),e._v(")를 클릭합니다.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(665),alt:"튜닝 설정 > 자동 튜닝 활성화"}})])]),e._v(" "),i("li",[i("p",[e._v("Select either the "),i("em",[e._v("Rate Controller")]),e._v(" or "),i("em",[e._v("Attitude Controller")]),e._v(" tabs.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("자동 튜닝 활성화")]),e._v(" 버튼이 활성화 여부를 확인합니다(이렇게 하면 "),i("strong",[e._v("자동 튜닝")]),e._v(" 버튼이 표시되고 수동 튜닝 선택기가 제거됨).")])]),e._v(" "),i("li",[i("p",[e._v("경고 팝업을 읽고 "),i("strong",[e._v("확인")]),e._v("을 클릭하여 튜닝을 시작합니다.")])]),e._v(" "),i("li",[i("p",[e._v("드론은 먼저 빠른 롤 동작을 수행한 후 피치 및 요 동작을 수행합니다. 진행률은 "),i("em",[e._v("자동 조정")]),e._v(" 버튼 옆의 진행률 표시줄에 표시됩니다.")])]),e._v(" "),i("li",[i("p",[e._v("튜닝 적용:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fixed-Wing:")]),e._v(" The tuning will be immediately/automatically be applied and tested in flight (by default). 그런 다음, PX4는 4초 테스트를 실행하고 문제가 감지되면 튜닝 작업의 이전 상태로 복원합니다.")]),e._v(" "),i("li",[i("strong",[e._v("멀티콥터:")]),e._v(" 새로운 조정 매개변수를 적용을 위하여 수동으로 착륙하고 시동을 해제합니다. 주의하여 이륙하고 차량이 안정성을 수동으로 테스트하십시오.")])])]),e._v(" "),i("li",[i("p",[e._v("강한 진동이 발생하면, 즉시 착륙하고 아래 "),i("a",{attrs:{href:"#troubleshooting"}},[e._v("문제 해결")]),e._v(" 섹션의 지침을 따르십시오.")])])]),e._v(" "),i("p",[e._v("Additional notes:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("VTOL:")]),e._v(" Hybrid VTOL fixed-wing vehicles must be tuned twice, following multicopter instructions in MC mode and fixed-wing instructions in FW mode.")]),e._v(" "),i("li",[i("strong",[e._v("Multicopter:")]),e._v(" The instructions above tune the vehicle in "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[e._v("Altitude mode")]),e._v(". You can instead takeoff in "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/takeoff.html"}},[e._v("Takeoff mode")]),e._v(" and tune in "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(" if the vehicle is is "),i("em",[e._v("known")]),e._v(" to be stable in these modes.")],1),e._v(" "),i("li",[i("strong",[e._v("Fixed-wing:")]),e._v(" Autotuning can also be run in "),i("RouterLink",{attrs:{to:"/ko/flight_modes_fw/altitude.html"}},[e._v("Altitude mode")]),e._v(" or "),i("RouterLink",{attrs:{to:"/ko/flight_modes_fw/position.html"}},[e._v("Position mode")]),e._v(". 그러나 직선으로 비행하면서 테스트를 실행하면 더 큰 튜닝 안전 영역이 필요하며, 더 좋은 튜닝 결과를 보장하지 않습니다.")],1),e._v(" "),i("li",[e._v("Whether tuning is applied in-air or after landing can be "),i("a",{attrs:{href:"#apply-parameters-when-in-air-landed"}},[e._v("configured using parameters")]),e._v(".")])]),e._v(" "),i("h2",{attrs:{id:"문제-해결"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[e._v("#")]),e._v(" 문제 해결")]),e._v(" "),i("h4",{attrs:{id:"자동-튜닝-시작전에-테스트-기동시-드론이-진동합니다"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#자동-튜닝-시작전에-테스트-기동시-드론이-진동합니다"}},[e._v("#")]),e._v(" 자동 튜닝 시작전에 테스트 기동시 드론이 진동합니다.")]),e._v(" "),i("ul",[i("li",[e._v("느린 진동(초당 1회 또는 더 느린 진동): 이는 종종 대형 플랫폼에서 발생하며 자세 루프가 속도 루프에 비해 너무 빠르기 때문입니다.\n"),i("ul",[i("li",[i("strong",[e._v("Multicopter:")]),e._v(" decrease "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_ROLL_P"}},[e._v("MC_ROLL_P")]),e._v(" and "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_PITCH_P"}},[e._v("MC_PITCH_P")]),e._v(" by steps of 1.0.")],1),e._v(" "),i("li",[i("strong",[e._v("Fixed-wing:")]),e._v(" increase "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_R_TC"}},[e._v("FW_R_TC")]),e._v(" and "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_P_TC"}},[e._v("FW_P_TC")]),e._v(" by steps of 0.1.")],1)])]),e._v(" "),i("li",[e._v("빠른 진동(초당 1회 이상): 이는 속도 루프의 이득이 너무 높기 때문입니다.\n"),i("ul",[i("li",[i("strong",[e._v("멀티콥터:")]),e._v(" 0.02씩 "),i("code",[e._v("MC_[ROLL|PITCH|YAW]RATE_K")]),e._v(" 감소")]),e._v(" "),i("li",[i("strong",[e._v("Fixed-wing:")]),e._v(" decrease "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_RR_P"}},[e._v("FW_RR_P")]),e._v(", "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_PR_P"}},[e._v("FW_PR_P")]),e._v(", "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_YR_P"}},[e._v("FW_YR_P")]),e._v(" by steps of 0.01.")],1)])])]),e._v(" "),i("h4",{attrs:{id:"자동-튜닝-실패"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#자동-튜닝-실패"}},[e._v("#")]),e._v(" 자동 튜닝 실패")]),e._v(" "),i("p",[e._v("If the drone was not moving enough during auto-tuning, the system identification algorithm might have issues to find the correct coefficients. Increase the "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AT_SYSID_AMP"}},[e._v("FW_AT_SYSID_AMP")]),e._v(", "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_AT_SYSID_AMP"}},[e._v("MC_AT_SYSID_AMP")]),e._v(" by steps of 1 and trigger the auto-tune again.")],1),e._v(" "),i("h4",{attrs:{id:"드론이-자동-튜닝-후-진동합니다"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#드론이-자동-튜닝-후-진동합니다"}},[e._v("#")]),e._v(" 드론이 자동 튜닝 후 진동합니다.")]),e._v(" "),i("p",[e._v("Due to effects not included in the mathematical model such as delays, saturation, slew-rate, airframe flexibility, the loop gain can be too high. To fix this, follow the same steps described "),i("a",{attrs:{href:"#the-drone-oscillates-when-performing-the-testing-maneuvers-prior-to-the-auto-tuning"}},[e._v("when the drone oscillates in the pre-tuning test")]),e._v(".")]),e._v(" "),i("h4",{attrs:{id:"여전히-정상-작동하지-않는-경우"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#여전히-정상-작동하지-않는-경우"}},[e._v("#")]),e._v(" 여전히 정상 작동하지 않는 경우:")]),e._v(" "),i("p",[e._v("Attempt manual tuning using the appropriate guides:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter_basic.html"}},[e._v("Multicopter PID 튜닝 가이드")]),e._v("(수동/간단)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("Multicopter PID 튜닝 가이드")]),e._v("(고급/상세)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/config_fw/pid_tuning_guide_fixedwing.html"}},[e._v("고정익 PID 튜닝 가이드")])],1)]),e._v(" "),i("h2",{attrs:{id:"optional-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#optional-configuration"}},[e._v("#")]),e._v(" Optional Configuration")]),e._v(" "),i("h3",{attrs:{id:"apply-parameters-when-in-air-landed"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#apply-parameters-when-in-air-landed"}},[e._v("#")]),e._v(" Apply Parameters When In-Air/Landed")]),e._v(" "),i("p",[e._v("By default MC vehicles land before parameters are applied, while FW vehicles apply the parameters in-air and then test that the controllers work properly. This behaviour can be configured using the "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_AT_APPLY"}},[e._v("MC_AT_APPLY")]),e._v(" and "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AT_APPLY"}},[e._v("FW_AT_APPLY")]),e._v(" parameters respectively:")],1),e._v(" "),i("ul",[i("li",[i("code",[e._v("0")]),e._v(": 게인이 적용되지 않습니다. 자동 튜닝의 결과를 직접적으로 사용하지 않은 체로 검사하는 경우에 사용합니다.")]),e._v(" "),i("li",[i("code",[e._v("1")]),e._v(": 무장 해제 후 게인을 적용합니다(멀티콥터의 경우 기본값). 이후, 조종자는 주의하여 이륙하면서 튜닝 결과를 테스트할 수 있습니다.")]),e._v(" "),i("li",[i("code",[e._v("2")]),e._v(": 즉시 적용됩니다(고정익의 경우 기본값). 새로운 튜닝이 적용되고, 교란이 컨트롤러로 전송된 후, 다음 4초 동안 안정성이 모니터링됩니다. 제어 루프가 불안정한 경우, 제어 게인을 즉시 이전 값으로 복원합니다. 테스트를 통과하면, 조종자는 새로운 튜닝 결과를 사용할 수 있습니다.")])]),e._v(" "),i("h3",{attrs:{id:"enable-disable-autotune-switch-fixed-wing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#enable-disable-autotune-switch-fixed-wing"}},[e._v("#")]),e._v(" Enable/Disable Autotune Switch (Fixed-Wing)")]),e._v(" "),i("p",[e._v("A remote control switch can be configured to enable/disable autotune (in any mode) using an RC AUX channel.")]),e._v(" "),i("p",[e._v("To map a switch:")]),e._v(" "),i("ol",[i("li",[e._v("Select an RC channel on your controller to use for the autotune enable/disable switch.")]),e._v(" "),i("li",[e._v("Set "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_AUX1"}},[e._v("RC_MAP_AUX1")]),e._v(" to match the RC channel for your switch (you can use any of "),i("code",[e._v("RC_MAP_AUX1")]),e._v(" to "),i("code",[e._v("RC_MAP_AUX6")]),e._v(").")],1),e._v(" "),i("li",[e._v("Set "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AT_MAN_AUX"}},[e._v("FW_AT_MAN_AUX")]),e._v(" to the selected channel (i.e. "),i("code",[e._v("1: Aux 1")]),e._v(" if you mapped "),i("code",[e._v("RC_MAP_AUX1")]),e._v(").")],1)]),e._v(" "),i("p",[e._v("The auto tuner will be disabled when the switch is below "),i("code",[e._v("0.5")]),e._v(" (on the manual control setpoint range of of "),i("code",[e._v("[-1, 1]")]),e._v(" and enabled when the switch channel is above "),i("code",[e._v("0.5")]),e._v(".")]),e._v(" "),i("p",[e._v("If using an RC AUX switch to enable autotuning, make sure to "),i("a",{attrs:{href:"#select-tuning-axis-fixed-wing"}},[e._v("select the tuning axes")]),e._v(" before flight.")]),e._v(" "),i("h3",{attrs:{id:"select-tuning-axis-fixed-wing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#select-tuning-axis-fixed-wing"}},[e._v("#")]),e._v(" Select Tuning Axis (Fixed-Wing)")]),e._v(" "),i("p",[e._v("Fixed-wing vehicles (only) can select which axes are tuned using the "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AT_AXES"}},[e._v("FW_AT_AXES")]),e._v(" bitmask parameter:")],1),e._v(" "),i("ul",[i("li",[e._v("비트 "),i("code",[e._v("0")]),e._v(": 롤(기본값)")]),e._v(" "),i("li",[e._v("비트 "),i("code",[e._v("1")]),e._v(": 피치(기본값)")]),e._v(" "),i("li",[e._v("비트 "),i("code",[e._v("2")]),e._v(": 요")])]),e._v(" "),i("h2",{attrs:{id:"개발자-sdk"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#개발자-sdk"}},[e._v("#")]),e._v(" 개발자 SDK")]),e._v(" "),i("p",[e._v("Autotuning is started using "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_AUTOTUNE_ENABLE",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_AUTOTUNE_ENABLE"),i("OutboundLink")],1),e._v(" MAVLink command.")]),e._v(" "),i("p",[e._v("At time of writing the message is resent at regular intervals to poll PX4 for progress: the "),i("code",[e._v("COMMAND_ACK")]),e._v(" includes result that the operation is in progress, and also the progress as a percentage. The operation completes when the progress is 100% or the vehicle lands and disarms.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("This is not a MAVLink-compliant implementation of a "),i("a",{attrs:{href:"https://mavlink.io/en/services/command.html#long_running_commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("command protocol long running command"),i("OutboundLink")],1),e._v(". PX4 should stream progress as the protocol does not allow polling.")])]),e._v(" "),i("p",[e._v("The feature is not yet supported by MAVSDK.")]),e._v(" "),i("h2",{attrs:{id:"배경-및-세부-사항"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#배경-및-세부-사항"}},[e._v("#")]),e._v(" 배경 및 세부 사항")]),e._v(" "),i("p",[e._v("PX4 uses "),i("RouterLink",{attrs:{to:"/ko/flight_stack/controller_diagrams.html"}},[e._v("PID controllers")]),e._v(" (rate, attitude, velocity, and position) to calculate the outputs required to move a vehicle from its current estimated state to match a desired setpoint. The controllers must be well tuned in order to get the best performance out of a vehicle. In particular, a poorly tuned rate controller results in less stable flight in all modes, and takes longer to recover from disturbances.")],1),e._v(" "),i("p",[e._v("Generally if you use a "),i("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[e._v("frame configuration")]),e._v(" that is similar to your vehicle then the vehicle will be able to fly. However unless the configuration precisely matches your hardware you should tune the rate and attitude controllers. Tuning the velocity and position controllers is less important because they are less affected by vehicle dynamics, and the default tuning configuration for a similar airframe is often sufficient.")],1),e._v(" "),i("p",[e._v("Autotuning provides an automatic mechanism to tune the rate and attitude controllers. It can be used to tune fixed-wing and multicopter vehicles, and VTOL vehicles when flying as a multicopter or as a fixed-wing (transition between modes must be manually tuned). In theory it should work for other vehicle types that have a rate controller, but currently only the above types are supported.")]),e._v(" "),i("p",[e._v("Automatic tuning works well for the multicopter and fixed-wing vehicle configurations supported by PX4, provided the frame is not too flexible (see "),i("a",{attrs:{href:"#does-autotuning-work-for-all-supported-airframes"}},[e._v("below for more information")]),e._v(").")]),e._v(" "),i("p",[e._v("The vehicle must be flying in an altitude-stabilized mode (such as "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[e._v("Altitude mode")]),e._v(", "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/hold.html"}},[e._v("Hold mode")]),e._v(", or "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v("). The flight stack will apply a small disturbance to the vehicle in each axis and then attempt to calculate the new tuning parameters. For fixed-wing vehicles the new tuning is applied in-air by default, after which the vehicle tests the new settings and reverts the tuning if the controllers are not stable. For multicopter, the vehicle lands and applies the new tuning parameters after disarming; the pilot is expected to then take off carefully and test the tuning.")],1),e._v(" "),i("p",[e._v("The tuning process takes about 40 seconds ("),i("a",{attrs:{href:"#how-long-does-autotuning-take"}},[e._v("between 19 and 68 seconds")]),e._v("). The default behaviour can be configured using "),i("a",{attrs:{href:"#optional-configuration"}},[e._v("parameters")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"자주-묻는-질문"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#자주-묻는-질문"}},[e._v("#")]),e._v(" 자주 묻는 질문")]),e._v(" "),i("h4",{attrs:{id:"어떤-기체-유형이-지원됩니까"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#어떤-기체-유형이-지원됩니까"}},[e._v("#")]),e._v(" 어떤 기체 유형이 지원됩니까?")]),e._v(" "),i("p",[e._v("Autotuning is enabled for multicopter, fixed-wing, and hybrid VTOL fixed-wing vehicles.")]),e._v(" "),i("p",[e._v("While it is not yet enabled for other frame types, in theory it an be used with any frame that uses a rate controller.")]),e._v(" "),i("h4",{attrs:{id:"지원되는-모든-기체에-대해-자동-튜닝이-작동됩니까"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#지원되는-모든-기체에-대해-자동-튜닝이-작동됩니까"}},[e._v("#")]),e._v(" 지원되는 모든 기체에 대해 자동 튜닝이 작동됩니까?")]),e._v(" "),i("p",[e._v("The mathematical model used by autotuning to estimate the dynamics of the drone assumes this it is a linear system with no coupling between the axes (SISO), and with a limited complexity (2 poles and 2 zeros). If the real drone is too far from those conditions, the model will not be able to represent the real dynamics of the drone.")]),e._v(" "),i("p",[e._v("In practise, autotuning generally works well for fixed-wing and multicopter, provided the frame is not too flexible.")]),e._v(" "),i("h4",{attrs:{id:"자동-튜닝은-얼마나-걸립니까"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#자동-튜닝은-얼마나-걸립니까"}},[e._v("#")]),e._v(" 자동 튜닝은 얼마나 걸립니까?")]),e._v(" "),i("p",[e._v("Tuning takes 5s-20s per axis (aborted if tuning could not be established in 20s) + 2s pause between each axis + 4s of testing if the new gains are applied in air.")]),e._v(" "),i("p",[e._v("A multicopter must tune all three axes, and by default does not test the new gains in-air. Tuning will therefore take between 19s ("),i("code",[e._v("5 + 2 + 5 + 2 + 5")]),e._v(") and 64s ("),i("code",[e._v("20x3 + 2x2")]),e._v(").")]),e._v(" "),i("p",[e._v("By default a fixed-wing vehicle tunes all three axes and then tests the new gains in-air. The range is therefore between 25s ("),i("code",[e._v("5 + 2 + 5 + 2 + 5 + 2 + 4")]),e._v(") and 70s ("),i("code",[e._v("20x3 + 3x2 + 4")]),e._v(").")]),e._v(" "),i("p",[e._v("Note however that the above settings are defaults. A multicopter can choose to run the tests in air, and a fixed-wing can choose not to. Further, a fixed-wing can choose to tune fewer axes.")]),e._v(" "),i("p",[e._v("Anecdotally, it usually takes around 40s for either vehicle.")]),e._v(" "),i("h2",{attrs:{id:"참고-항목"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#참고-항목"}},[e._v("#")]),e._v(" 참고 항목:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter_basic.html"}},[e._v("Multicopter PID 튜닝 가이드")]),e._v("(수동/간단)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("Multicopter PID 튜닝 가이드")]),e._v("(고급/상세)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/config_fw/pid_tuning_guide_fixedwing.html"}},[e._v("고정익 PID 튜닝 가이드")])],1)])])}),[],!1,null,null,null);t.default=o.exports},665:function(e,t,a){e.exports=a.p+"assets/img/autotune.79e7978d.png"}}]);