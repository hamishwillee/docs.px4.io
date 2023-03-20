(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{2513:function(t,_,v){"use strict";v.r(_);var r=v(19),s=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"무선-조종기-rc-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종기-rc-설정"}},[t._v("#")]),t._v(" 무선 조종기(RC) 설정")]),t._v(" "),r("p",[r("em",[t._v("무선 조종기 설정")]),t._v(" 화면은 송신기의 기본 자세 제어 스틱(롤, 피치, 요, 스로틀)을 채널에 매핑하고 최소, 최대, 트림 및 리버스 설정을 보정합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("RC")]),t._v(" "),r("p",[t._v("Control is enabled by default, but a "),r("RouterLink",{attrs:{to:"/ko/config/joystick.html"}},[t._v("joystick")]),t._v(" may be enabled instead (or as a fallback) using the "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Parameters.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("parameter"),r("OutboundLink")],1),t._v(" "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_IN_MODE"}},[t._v("COM_RC_IN_MODE")]),t._v(". :::")],1),t._v(" "),r("h2",{attrs:{id:"수신기-바인딩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#수신기-바인딩"}},[t._v("#")]),t._v(" 수신기 바인딩")]),t._v(" "),r("p",[t._v("무선 시스템을 보정을 하기 위하여 우선 수신기와 송신기를 바인딩하여야 합니다. 송신기와 수신기를 바인딩 프로세스는 하드웨어에 따라 조금씩 차이가 날 수 있습니다 (자세한 지침은 설명서 참조).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("em",[t._v("Spektrum")]),t._v(" 수신기를 사용하는 경우 "),r("a",{attrs:{href:"#spectrum-bind"}},[t._v("아래에 표시된 ")]),t._v("과 같이 "),r("em",[t._v("QGroundControl")]),t._v("을 사용하여 바인딩 모드로 전환 가능합니다. :::")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("em",[t._v("FrSky")]),t._v(" 수신기를 사용하는 경우 "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=1IYg5mQdLVI",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 지침"),r("OutboundLink")],1),t._v("에 따라 송신기를 바인딩할 수 있습니다. :::")]),t._v(" "),r("h2",{attrs:{id:"rc-손실-감지"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-손실-감지"}},[t._v("#")]),t._v(" RC 손실 감지")]),t._v(" "),r("p",[t._v("PX4에서 "),r("RouterLink",{attrs:{to:"/ko/config/safety.html#rc-loss-failsafe"}},[t._v("적절한 안전 조치")]),t._v("를 수행하기 위해서는 RC 컨트롤러의 신호가 손실되는 시점을 감지할 수 있어야합니다.")],1),t._v(" "),r("p",[t._v("RC 수신기에는 신호 손실을 나타내는 여러가지 방법이 있습니다.")]),t._v(" "),r("ul",[r("li",[t._v("아무것도 출력하지 않음 (PX4에서 자동으로 감지 됨)")]),t._v(" "),r("li",[t._v("낮은 스로틀 값을 출력합니다 (이를 감지하도록 PX4를 구성 할 수 있음).")]),t._v(" "),r("li",[t._v("마지막으로 수신된 신호를 출력합니다 (유효한 입력처럼 보이므로 "),r("em",[t._v("PX4에서 감지 할 수 없음")]),t._v(").")])]),t._v(" "),r("p",[t._v("RC 수신기가 RC 손실시 신호 출력을 지원하지 않는 경우 대신 스로틀을 낮게 설정하도록 구성하고, "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_FAILS_THR"}},[t._v("RC_FAILS_THR")]),t._v("에 해당 값을 설정하여야 합니다.")],1),t._v(" "),r("p",[t._v("이를 수행하는 방법은 RC 컨트롤러 트림 및 스로틀 스틱을 가능한 낮게 설정하고 결과 출력 PWM 값을 PX4와 수신기 모두에서 사용하는 것입니다 (RC 손실 값을 설정하는 방법을 결정하려면 수신기 설명서를 참조하십시오). 그런 다음 스로틀 스틱을 원래 위치로 가져다 놓으십시오. 이 프로세스는 RC 손실 값이 정상 작동에서 수신기가 출력하는 최소값 미만이되도록 합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("지원되는 두 가지 RC 손실 감지 방법을 지원하지 않는 수신기를 사용하지 마십시오!")])])])])]),t._v(" "),r("h2",{attrs:{id:"보정-작업"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보정-작업"}},[t._v("#")]),t._v(" 보정 작업")]),t._v(" "),r("p",[t._v("보정 과정는 간단합니다. 화면 오른쪽 상단의 송신기 다이어그램에 표시된 특정 패턴으로 스틱을 이동하라는 메시지가 표시됩니다.")]),t._v(" "),r("p",[t._v("무선 조종기 보정 절차")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("RC 송신기를 켭니다.")])]),t._v(" "),r("li",[r("p",[r("em",[t._v("QGroundControl")]),t._v("을 시작하고 드론에 연결합니다.")])]),t._v(" "),r("li",[r("p",[t._v("상단 도구 모음에서 "),r("strong",[t._v("톱니 바퀴")]),t._v(" 아이콘(기체 설정)을 선택한 다음 가장자리 표시줄에서 "),r("strong",[t._v("무선 조종기")]),t._v("를 선택하십시오.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("확인")]),t._v("을 눌러 보정작업을 시작하십시오.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(715),alt:"무선 조종기 설정-시작하기 전에"}})])]),t._v(" "),r("li",[r("p",[t._v("트랜스미터와 일치하는 "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("송신기 모드")]),t._v(" 라디오 버튼을 설정합니다 (이렇게하면 "),r("em",[t._v("QGroundControl")]),t._v("이 교정 중에 따라야 할 올바른 스틱 위치를 표시함).")],1),t._v(" "),r("p",[r("img",{attrs:{src:v(716),alt:" 무선 조종기 설정-스틱 이동"}})])]),t._v(" "),r("li",[r("p",[t._v("스틱을 텍스트(및 송신기 이미지)에 표시된 위치로 이동합니다. 스틱이 제자리에 있으면 "),r("strong",[t._v("다음")]),t._v("을 누르십시오. 모든 위치에 대해 반복하십시오.")])]),t._v(" "),r("li",[r("p",[t._v("메시지가 표시되면 다른 모든 스위치와 다이얼을 전체 범위로 이동합니다 ("),r("em",[t._v("채널 모니터")]),t._v("에서 움직이는 것을 관찰 할 수 있습니다).")])]),t._v(" "),r("li",[r("p",[t._v("**Next(다음)**를 클릭하여 설정을 시작합니다.")])])]),t._v(" "),r("p",[t._v("무선 조종기 보정은 "),r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=4m30s",target:"_blank",rel:"noopener noreferrer"}},[t._v("자동 조종 장치 설정 동영상"),r("OutboundLink")],1),t._v(" (youtube)에 자세히 설명되어 있습니다.")]),t._v(" "),r("h2",{attrs:{id:"추가-무선-조종기-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-무선-조종기-설정"}},[t._v("#")]),t._v(" 추가 무선 조종기 설정:")]),t._v(" "),r("p",[t._v("조종 스틱 및 기타 송신기 컨트롤을 보정하는 것 외에도이 화면에서 유용 할 수있는 여러 추가 무선 설정 옵션이 있습니다.")]),t._v(" "),r("img",{attrs:{src:v(717),title:"무선 조종기 설정 - 추가 설정",width:"300px"}}),t._v(" "),r("h3",{attrs:{id:"spektrum-바인드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-바인드"}},[t._v("#")]),t._v(" Spektrum 바인드")]),t._v(" "),r("p",[t._v("무선 시스템을 보정을 하기 위하여 우선 수신기와 송신기를 바인딩하여야 합니다. "),r("em",[t._v("Spektrum")]),t._v(" 수신기가있는 경우 아래와 같이 "),r("em",[t._v("QGroundControl")]),t._v("을 사용하여 "),r("em",[t._v("바인드 모드")]),t._v("로 설정할 수 있습니다. 차량의 수신기에 쉽게 물리적으로 접근할 수 있습니다.)")]),t._v(" "),r("p",[t._v("Spektrum 송신기/수신기 바인딩 절차")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("Spektrum Bind")]),t._v(" 버튼을 선택합니다")])]),t._v(" "),r("li",[r("p",[t._v("수신기의 라디오 버튼을 선택하십시오.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("확인")]),t._v("을 누릅니다")]),t._v(" "),r("p",[r("img",{attrs:{src:v(718),alt:"Spektrum 바인드"}})])]),t._v(" "),r("li",[r("p",[t._v("바인드 버튼을 누른 상태에서 Spektrum 송신기의 전원을 켭니다.")])])]),t._v(" "),r("h3",{attrs:{id:"트림-복사"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#트림-복사"}},[t._v("#")]),t._v(" 트림 복사")]),t._v(" "),r("p",[t._v("이 설정은 자동 조종 장치 내에서 자동으로 적용될 수 있도록 무선 송신기에서 수동 트림 설정을 복사합니다. 이 작업이 끝나면 수동으로 설정한 트림을 제거하여야 합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("트림 설정은 롤, 피치, 요를 조정하는 데 사용됩니다. 따라서 스틱을 리모컨의 중앙에 놓을 때 안정된 비행 또는 수평 비행을 얻을 수 있습니다 (안정화 비행 모드에서). 일부 RC 컨트롤러는 각 스틱 위치에 대해 RC 컨트롤러에서 전송 한 값에 오프셋을 제공할 수있는 트림 노브를 제공합니다. 여기서 "),r("strong",[t._v("트림 복사")]),t._v(" 설정은 오프셋을 자동 조종 장치로 이동합니다. :::")]),t._v(" "),r("p",[t._v("트림 복사 절차")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("트림 복사")]),t._v("를 선택하십시오.")])]),t._v(" "),r("li",[r("p",[t._v("스틱을 중앙에 놓고 스로틀을 끝까지 내립니다.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("확인")]),t._v("을 누릅니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(719),alt:"트림 복사"}})])]),t._v(" "),r("li",[r("p",[t._v("송신기의 트림을 다시 0으로 재설정하십시오.")])])]),t._v(" "),r("h3",{attrs:{id:"aux-패스-스루-채널"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aux-패스-스루-채널"}},[t._v("#")]),t._v(" AUX 패스 스루 채널")]),t._v(" "),r("p",[t._v("AUX 패스 스루 채널을 사용하면 송신기에서 임의의 옵션 하드웨어 (예 : 그리퍼)를 제어 할 수 있습니다.")]),t._v(" "),r("p",[t._v("AUX 패스 스루 채널 설정 절차")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("최대 2 개의 송신기 컨트롤을 별도의 채널에 매핑합니다.")])]),t._v(" "),r("li",[r("p",[t._v("아래에 표시된 것처럼 이러한 채널을 지정하여 AUX1 및 AUX2 포트에 각각 매핑합니다. 값은 설정되는 즉시 차량에 저장됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(720),alt:"AUX1 및 AUX2 RC 패스 스루 채널"}})])])]),t._v(" "),r("p",[t._v("비행 컨트롤러는 AUX1/AUX2의 지정된 채널에서 수정되지 않은 값을 통해 하드웨어를 구동하는 연결된 서보/릴레이로 전달합니다.")]),t._v(" "),r("h3",{attrs:{id:"매개변수-튜닝-채널"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-튜닝-채널"}},[t._v("#")]),t._v(" 매개변수 튜닝 채널")]),t._v(" "),r("p",[t._v("튜닝 채널을 사용하면 송신기 튜닝 노브를 매개변수에 매핑할 수 있습니다 (트랜스미터에서 매개변수를 동적으로 수정할 수 있음).")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("이 기능을 사용하여 수동으로 기내 튜닝을 할 수 있습니다 : "),r("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("멀티콥터 PID 튜닝 설명서")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("고정익 PID 튜닝 설명서")]),t._v(". :::")],1),t._v(" "),r("p",[t._v("매개 변수 튜닝에 사용되는 채널은 "),r("em",[t._v("라디오")]),t._v(" 설정 (여기!)에서 할당되며 각 튜닝 채널에서 관련 매개변수로의 매핑은 "),r("em",[t._v("매개변수 편집기")]),t._v("에서 정의됩니다.")]),t._v(" "),r("p",[t._v("채널 튜닝 절차")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("최대 3 개의 송신기 컨트롤 (다이얼 또는 슬라이더)을 개별 채널에 매핑합니다.")])]),t._v(" "),r("li",[r("p",[t._v("선택 목록을 사용하여 라디오 채널에 대한 "),r("em",[t._v("PARAM Tuning Id")]),t._v(" 매핑을 선택합니다. 값은 설정되는 즉시 차량에 저장됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(721),alt:"라디오 채널을 튜닝 채널에 매핑"}})])])]),t._v(" "),r("p",[t._v("PARAM 튜닝 채널을 매개 변수에 매핑 절차")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("매개 변수")]),t._v(" 사이드 바를 엽니 다.")])]),t._v(" "),r("li",[r("p",[t._v("송신기에 매핑 할 매개 변수를 선택합니다 (이렇게하면 "),r("em",[t._v("매개 변수 편집기")]),t._v("가 열립니다).")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("고급 설정")]),t._v(" 확인란을 선택합니다.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("RC를 Param으로 설정 ...")]),t._v(" 버튼을 클릭합니다 (아래에 표시된 전경 대화 상자가 팝업됩니다).")]),t._v(" "),r("p",[r("img",{attrs:{src:v(722),alt:"매개 변수에 튜닝 채널 매핑"}})])]),t._v(" "),r("li",[r("p",[r("em",[t._v("Parameter Tuning ID")]),t._v(" 선택 목록에서 매핑 할 튜닝 채널 (1, 2 또는 3)을 선택합니다.")])]),t._v(" "),r("li",[r("p",[t._v("대화 상자를 닫으려면 "),r("strong",[t._v("확인")]),t._v("을 누르십시오.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("저장")]),t._v("을 눌러 모든 변경 사항을 저장하고 "),r("em",[t._v("매개 변수 편집기")]),t._v("를 닫습니다.")])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[r("em",[t._v("Parameters")]),t._v(" 화면의 오른쪽 상단에있는 메뉴 "),r("strong",[t._v("Tools> Clear RC to Param")]),t._v("을 선택하여 모든 매개변수/튜닝 채널 매핑을 삭제할 수 있습니다. :::")]),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Radio.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > 무선 조종기"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=4m30s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 설정 비디오 - @4m30s"),r("OutboundLink")],1),t._v(" (유튜브)")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("RC 시스템 선택")]),t._v(" -호환되는 RC 시스템을 선택합니다.")],1)])])])])])}),[],!1,null,null,null);_.default=s.exports},715:function(t,_,v){t.exports=v.p+"assets/img/radio_start_setup.a0fa4f53.jpg"},716:function(t,_,v){t.exports=v.p+"assets/img/radio_sticks_throttle.139795e9.jpg"},717:function(t,_,v){t.exports=v.p+"assets/img/radio_additional_radio_setup.ecd4363a.jpg"},718:function(t,_,v){t.exports=v.p+"assets/img/radio_additional_setup_spectrum_bind_select_channels.6b7ff256.jpg"},719:function(t,_,v){t.exports=v.p+"assets/img/radio_additional_radio_setup_copy_trims.ab0f7d3f.jpg"},720:function(t,_,v){t.exports=v.p+"assets/img/radio_additional_setup_aux_passthrough_channels.be0edc70.jpg"},721:function(t,_,v){t.exports=v.p+"assets/img/radio_additional_radio_setup_param_tuning.49f5b6d3.jpg"},722:function(t,_,v){t.exports=v.p+"assets/img/parameters_radio_channel_mapping.c1adf31c.jpg"}}]);