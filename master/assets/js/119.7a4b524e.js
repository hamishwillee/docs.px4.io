(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{2192:function(t,e,a){"use strict";a.r(e);var r=a(19),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"무선-조종기-rc-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종기-rc-설정"}},[t._v("#")]),t._v(" 무선 조종기(RC) 설정")]),t._v(" "),r("p",[r("em",[t._v("무선 조종기 설정")]),t._v(" 화면은 송신기 제어/RC 채널용 리모컨 장치의 기본 자세 제어 스틱 (롤, 피치, 요, 스로틀)을 채널에 매핑하고 최소, 최대, 트림 및 리버스 설정을 보정하는 데 사용됩니다.")]),t._v(" "),r("h2",{attrs:{id:"수신기-바인딩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#수신기-바인딩"}},[t._v("#")]),t._v(" 수신기 바인딩")]),t._v(" "),r("p",[t._v("무선 시스템을 보정하기 전에 수신기와 송신기를 연결하여 바인딩하여야 합니다. 송신기와 수신기 쌍을 바인딩하는 프로세스는 하드웨어에 따라 조금씩 다릅니다 (자세한 지침은 설명서 참조).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If you are using a "),r("em",[t._v("Spektrum")]),t._v(" receiver, you can put it into bind mode using "),r("em",[t._v("QGroundControl")]),t._v(", as "),r("a",{attrs:{href:"#spectrum-bind"}},[t._v("shown below")]),t._v(".")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("em",[t._v("FrSky")]),t._v(" 수신기를 사용하는 경우 "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=1IYg5mQdLVI",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 지침"),r("OutboundLink")],1),t._v("에 따라 송신기와 바인딩할 수 있습니다.")])]),t._v(" "),r("h2",{attrs:{id:"rc-손실-감지"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-손실-감지"}},[t._v("#")]),t._v(" RC 손실 감지")]),t._v(" "),r("p",[t._v("PX4 needs to be able to detect when the signal from the RC controller has been lost in order to be able to take "),r("RouterLink",{attrs:{to:"/ko/config/safety.html#rc-loss-failsafe"}},[t._v("appropriate safety measures")]),t._v(".")],1),t._v(" "),r("p",[t._v("RC receivers have different ways of indicating signal loss:")]),t._v(" "),r("ul",[r("li",[t._v("아무것도 출력하지 않음 (PX4에서 자동으로 감지 됨)")]),t._v(" "),r("li",[t._v("낮은 스로틀 값을 출력합니다 (이를 감지하도록 PX4를 구성 할 수 있음).")]),t._v(" "),r("li",[t._v("마지막으로 수신된 신호를 출력합니다 (유효한 입력처럼 보이므로 "),r("em",[t._v("PX4에서 감지 할 수 없음")]),t._v(").")])]),t._v(" "),r("p",[t._v("If your RC receiver does not support outputting no signal on RC loss, you must configure it to set throttle low instead, and set the corresponding value in "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_FAILS_THR"}},[t._v("RC_FAILS_THR")]),t._v(".")],1),t._v(" "),r("p",[t._v("The way to do this is to set the RC controller trim and throttle stick as low as possible, and use the resulting output PWM value in both PX4 and the receiver (read your receiver manual to determine how to set the RC loss value). Then reset the throttle stick trim back to its normal position. This process ensures that the RC loss value is below the minimum value output by the receiver in normal operation.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("Do not use a receiver that cannot support one of the two supported RC loss detection methods!")])]),t._v(" "),r("h2",{attrs:{id:"보정-작업"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보정-작업"}},[t._v("#")]),t._v(" 보정 작업")]),t._v(" "),r("p",[t._v("The calibration process is straightforward - you will be asked to move the sticks in a specific pattern that is shown on the transmitter diagram on the top right of the screen.")]),t._v(" "),r("p",[t._v("To calibrate the radio:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("RC 송신기를 켭니다.")])]),t._v(" "),r("li",[r("p",[r("em",[t._v("QGroundControl")]),t._v("을 시작하고 드론에 연결합니다.")])]),t._v(" "),r("li",[r("p",[t._v("상단 도구 모음에서 "),r("strong",[t._v("톱니 바퀴")]),t._v(" 아이콘(기체 설정)을 선택한 다음 가장자리 표시줄에서 "),r("strong",[t._v("무선 조종기")]),t._v("를 선택하십시오.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("확인")]),t._v("을 눌러 보정작업을 시작하십시오.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(649),alt:"무선 조종기 설정-시작하기 전에"}})])]),t._v(" "),r("li",[r("p",[t._v("트랜스미터와 일치하는 "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("송신기 모드")]),t._v(" 라디오 버튼을 설정합니다 (이렇게하면 "),r("em",[t._v("QGroundControl")]),t._v("이 교정 중에 따라야 할 올바른 스틱 위치를 표시함).")],1),t._v(" "),r("p",[r("img",{attrs:{src:a(650),alt:" 무선 조종기 설정-스틱 이동"}})])]),t._v(" "),r("li",[r("p",[t._v("스틱을 텍스트(및 송신기 이미지)에 표시된 위치로 이동합니다. 스틱이 제자리에 있으면 "),r("strong",[t._v("다음")]),t._v("을 누르십시오. 모든 위치에 대해 반복하십시오.")])]),t._v(" "),r("li",[r("p",[t._v("메시지가 표시되면 다른 모든 스위치와 다이얼을 전체 범위로 이동합니다 ("),r("em",[t._v("채널 모니터")]),t._v("에서 움직이는 것을 관찰 할 수 있습니다).")])]),t._v(" "),r("li",[r("p",[t._v("**Next(다음)**를 클릭하여 설정을 시작합니다.")])])]),t._v(" "),r("p",[t._v("Radio calibration is demonstrated in the "),r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=4m30s",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot setup video here"),r("OutboundLink")],1),t._v(" (youtube).")]),t._v(" "),r("h2",{attrs:{id:"추가-무선-조종기-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-무선-조종기-설정"}},[t._v("#")]),t._v(" 추가 무선 조종기 설정:")]),t._v(" "),r("p",[t._v("As well as calibrating your control sticks and other transmitter controls, there are a number of additional radio setup options that you may find useful on this screen.")]),t._v(" "),r("img",{attrs:{src:a(651),title:"Radio setup - additional settings",width:"300px"}}),t._v(" "),r("h3",{attrs:{id:"spektrum-바인드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-바인드"}},[t._v("#")]),t._v(" Spektrum 바인드")]),t._v(" "),r("p",[t._v("Before you can calibrate the radio system the receiver and transmitter must be connected/bound. If you have a "),r("em",[t._v("Spektrum")]),t._v(" receiver you can put it in "),r("em",[t._v("bind mode")]),t._v(" using "),r("em",[t._v("QGroundControl")]),t._v(" as shown below (this can be particularly useful if you don't have easy physical access to the receiver on your vehicle).")]),t._v(" "),r("p",[t._v("To bind a Spektrum transmitter/receiver:")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("Spektrum Bind")]),t._v(" 버튼을 선택합니다")])]),t._v(" "),r("li",[r("p",[t._v("수신기의 라디오 버튼을 선택하십시오.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("확인")]),t._v("을 누릅니다")]),t._v(" "),r("p",[r("img",{attrs:{src:a(652),alt:"Spektrum 바인드"}})])]),t._v(" "),r("li",[r("p",[t._v("바인드 버튼을 누른 상태에서 Spektrum 송신기의 전원을 켭니다.")])])]),t._v(" "),r("h3",{attrs:{id:"트림-복사"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#트림-복사"}},[t._v("#")]),t._v(" 트림 복사")]),t._v(" "),r("p",[t._v("This setting is used to copy the manual trim settings from your radio transmitter so that they can be applied automatically within the autopilot. After this is done you will need to remove the manually set trims.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("Trim settings are used to adjust the roll, pitch, yaw such that when you center the sticks on your remote control, you get stable or level flight (in Stabilized flight mode). Some RC controllers provide trim knobs that allow you to provide an offset to the value sent by the RC controller for each stick position. The "),r("strong",[t._v("Copy Trims")]),t._v(" setting here moves the offsets into the autopilot.")])]),t._v(" "),r("p",[t._v("To copy the trims:")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("트림 복사")]),t._v("를 선택하십시오.")])]),t._v(" "),r("li",[r("p",[t._v("스틱을 중앙에 놓고 스로틀을 끝까지 내립니다.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("확인")]),t._v("을 누릅니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(653),alt:"트림 복사"}})])]),t._v(" "),r("li",[r("p",[t._v("송신기의 트림을 다시 0으로 재설정하십시오.")])])]),t._v(" "),r("h3",{attrs:{id:"aux-패스-스루-채널"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aux-패스-스루-채널"}},[t._v("#")]),t._v(" AUX 패스 스루 채널")]),t._v(" "),r("p",[t._v("AUX passthrough channels allow you to control arbitrary optional hardware from your transmitter (for example, a gripper).")]),t._v(" "),r("p",[t._v("To use the AUX passthrough channels:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("최대 2 개의 송신기 컨트롤을 별도의 채널에 매핑합니다.")])]),t._v(" "),r("li",[r("p",[t._v("아래에 표시된 것처럼 이러한 채널을 지정하여 AUX1 및 AUX2 포트에 각각 매핑합니다. 값은 설정되는 즉시 차량에 저장됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(654),alt:"AUX1 및 AUX2 RC 패스 스루 채널"}})])])]),t._v(" "),r("p",[t._v("The flight controller will pass through the unmodified values from the specified channels out of AUX1/AUX2 to the connected servos/relays that drive your hardware.")]),t._v(" "),r("h3",{attrs:{id:"param-튜닝-채널"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#param-튜닝-채널"}},[t._v("#")]),t._v(" Param 튜닝 채널")]),t._v(" "),r("p",[t._v("Tuning channels allow you to map a transmitter tuning knob to a parameter (so that you can dynamically modify a parameter from your transmitter).")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("This feature is provided to enable manual in-flight tuning: "),r("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("Fixedwing PID Tuning Guide")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("The channels used for parameter tuning are assigned in the "),r("em",[t._v("Radio")]),t._v(" setup (here!), while the mapping from each tuning channel to its associated parameter is defined in the "),r("em",[t._v("Parameter editor")]),t._v(".")]),t._v(" "),r("p",[t._v("To set up tuning channels:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("최대 3 개의 송신기 컨트롤 (다이얼 또는 슬라이더)을 개별 채널에 매핑합니다.")])]),t._v(" "),r("li",[r("p",[t._v("선택 목록을 사용하여 라디오 채널에 대한 "),r("em",[t._v("PARAM Tuning Id")]),t._v(" 매핑을 선택합니다. 값은 설정되는 즉시 차량에 저장됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(655),alt:"라디오 채널을 튜닝 채널에 매핑"}})])])]),t._v(" "),r("p",[t._v("To map a PARAM tuning channel to a parameter:")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("매개 변수")]),t._v(" 사이드 바를 엽니 다.")])]),t._v(" "),r("li",[r("p",[t._v("송신기에 매핑 할 매개 변수를 선택합니다 (이렇게하면 "),r("em",[t._v("매개 변수 편집기")]),t._v("가 열립니다).")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("고급 설정")]),t._v(" 확인란을 선택합니다.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("RC를 Param으로 설정 ...")]),t._v(" 버튼을 클릭합니다 (아래에 표시된 전경 대화 상자가 팝업됩니다).")]),t._v(" "),r("p",[r("img",{attrs:{src:a(656),alt:"매개 변수에 튜닝 채널 매핑"}})])]),t._v(" "),r("li",[r("p",[r("em",[t._v("Parameter Tuning ID")]),t._v(" 선택 목록에서 매핑 할 튜닝 채널 (1, 2 또는 3)을 선택합니다.")])]),t._v(" "),r("li",[r("p",[t._v("대화 상자를 닫으려면 "),r("strong",[t._v("확인")]),t._v("을 누르십시오.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("저장")]),t._v("을 눌러 모든 변경 사항을 저장하고 "),r("em",[t._v("매개 변수 편집기")]),t._v("를 닫습니다.")])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("You can clear all parameter/tuning channel mappings by selecting menu "),r("strong",[t._v("Tools > Clear RC to Param")]),t._v(" at the top right of the "),r("em",[t._v("Parameters")]),t._v(" screen.")])]),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Radio.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > 무선 조종기"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=4m30s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 설정 비디오 - @4m30s"),r("OutboundLink")],1),t._v(" (유튜브)")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("RC 시스템 선택")]),t._v(" -호환되는 RC 시스템을 선택합니다.")],1)])])}),[],!1,null,null,null);e.default=o.exports},649:function(t,e,a){t.exports=a.p+"assets/img/radio_start_setup.a0fa4f53.jpg"},650:function(t,e,a){t.exports=a.p+"assets/img/radio_sticks_throttle.139795e9.jpg"},651:function(t,e,a){t.exports=a.p+"assets/img/radio_additional_radio_setup.ecd4363a.jpg"},652:function(t,e,a){t.exports=a.p+"assets/img/radio_additional_setup_spectrum_bind_select_channels.6b7ff256.jpg"},653:function(t,e,a){t.exports=a.p+"assets/img/radio_additional_radio_setup_copy_trims.ab0f7d3f.jpg"},654:function(t,e,a){t.exports=a.p+"assets/img/radio_additional_setup_aux_passthrough_channels.be0edc70.jpg"},655:function(t,e,a){t.exports=a.p+"assets/img/radio_additional_radio_setup_param_tuning.49f5b6d3.jpg"},656:function(t,e,a){t.exports=a.p+"assets/img/parameters_radio_channel_mapping.c1adf31c.jpg"}}]);