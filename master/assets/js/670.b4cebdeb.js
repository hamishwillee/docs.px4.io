(window.webpackJsonp=window.webpackJsonp||[]).push([[670],{1238:function(e,t,r){e.exports=r.p+"assets/img/px4_fmu_io_functions.f2806cbc.png"},2460:function(e,t,r){"use strict";r.r(t);var _=r(19),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"px4-참조-비행-콘트롤러-디자인"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#px4-참조-비행-콘트롤러-디자인"}},[e._v("#")]),e._v(" PX4 참조 비행 콘트롤러 디자인")]),e._v(" "),_("p",[e._v("PX4 참조 디자인은 비행 콘트롤러의 "),_("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk 시리즈")]),e._v("입니다. 2011년에 처음 출시된 이 디자인은 현재 5세대 "),_("a",{attrs:{href:"#reference_design_generations"}},[e._v("세대")]),e._v("입니다(6세대 보드 디자인 진행 중).")],1),e._v(" "),_("h2",{attrs:{id:"바이너리-호환성"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#바이너리-호환성"}},[e._v("#")]),e._v(" 바이너리 호환성")]),e._v(" "),_("p",[e._v("특정 디자인으로 제조된 모든 보드는 바이너리 호환이 되어야 합니다(즉, 동일한 펌웨어를 실행하여야 함). 2018년부터 우리는 이 호환성을 확인하고 인증할 수 있는 바이너리 호환성 테스트 제품군을 제공할 것입니다.")]),e._v(" "),_("p",[e._v("FMU 1~3세대는 개방형 하드웨어로 설계되었으나, FMU 4세대와 5세대는 핀아웃 및 전원 공급 사양만 제공했습니다(개략도는 개별 제조업체에서 작성하였습니다). 우수한 호환성을 위하여 FMUv6 이상은 완전한 참조 디자인 모델링합니다.")]),e._v(" "),_("p",[_("a",{attrs:{id:"reference_design_generations"}})]),e._v(" "),_("h2",{attrs:{id:"레퍼런스-디자인-세대"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#레퍼런스-디자인-세대"}},[e._v("#")]),e._v(" 레퍼런스 디자인 세대")]),e._v(" "),_("ul",[_("li",[e._v("FMUv1: 개발 보드 (STM32F407, 128KB RAM, 1MB 플래시, "),_("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv1",target:"_blank",rel:"noopener noreferrer"}},[e._v("설계도"),_("OutboundLink")],1),e._v(")(PX4에서 더 이상 지원하지 않음)")]),e._v(" "),_("li",[e._v("FMUv2: 픽스호크 (STM32F427, 168 MHz, 192 KB RAM, 1MB flash, "),_("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv2",target:"_blank",rel:"noopener noreferrer"}},[e._v("설계도"),_("OutboundLink")],1),e._v(")")]),e._v(" "),_("li",[e._v("FMUv3: 2MB 플래시를 장착한 픽스호크 변형 버전 (3DR 픽스호크 2 (Solo), Hex 픽스호크 2.1, Holybro Pixfalcon, 3DR Pixhawk Mini, STM32F427, 168 MHz, 256 KB RAM, 2 MB flash, "),_("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv3_REV_D",target:"_blank",rel:"noopener noreferrer"}},[e._v("설계도"),_("OutboundLink")],1),e._v(")")]),e._v(" "),_("li",[e._v("FMUv4: 픽스레이서 (STM32F427, 168 MHz, 256 KB RAM, 2 MB flash, "),_("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[e._v("핀 출력도"),_("OutboundLink")],1),e._v(")")]),e._v(" "),_("li",[e._v("FMUv4 PRO: 드로텍 픽스호크 3 PRO (STM32F469, 180 MHz, 384 KB RAM, 2 MB flash, "),_("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[e._v("핀 출력"),_("OutboundLink")],1),e._v(")")]),e._v(" "),_("li",[e._v("FMUv5: 홀리브로 픽스호크 4 (STM32F765, 216 MHz, 512 KB RAM, 2 MB flash, "),_("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[e._v("핀 아웃"),_("OutboundLink")],1),e._v(")")]),e._v(" "),_("li",[e._v("FMUv6: 개발 중, 최종 명칭 미정, 6s 변형 (STM32H7, 400 MHz, 2 MB RAM,  2 MB flash)과 6i 변형 (i.MX RT1050, 600 MHz, 512 KB RAM, 외장 플래시)")])]),e._v(" "),_("h2",{attrs:{id:"메인-io-기능-분석"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#메인-io-기능-분석"}},[e._v("#")]),e._v(" 메인 IO 기능 분석")]),e._v(" "),_("p",[e._v("아래 다이어그램은 Pixhawk 시리즈 비행 콘트롤러의  FMU와 I/O 보드간 기능과 버스 분할을 나타냅니다(보드는 단일 물리적 모듈에 통합됨).")]),e._v(" "),_("p",[_("img",{attrs:{src:r(1238),alt:"PX4 메인/IO 기능 분석"}})]),e._v(" "),_("p",[e._v("일부 Pixhawk 시리즈 컨트롤러는 공간이나 복잡성을 줄이기 위하여 특정 보드 의 기능 향상을 위하여 I/O 보드 없이 제작됩니다.")]),e._v(" "),_("p",[e._v("I/O 보드는 매개변수 "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_USE_IO"}},[e._v("SYS_USE_IO=0")]),e._v("에서 비활성화됩니다. I/O 보드가 비활성화된 경우:")],1),e._v(" "),_("ul",[_("li",[e._v("MAIN 믹서 파일은 FMU에 로드됩니다(그래서 "),_("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[e._v("기체 정의서")]),e._v('에 나열된 "MAIN" 출력이 AUX라고 표시된 포트에 나타납니다). AUX 믹서 파일이 로드되지 않으므로, 이 파일에 정의된 출력이 사용되지 않습니다.')],1),e._v(" "),_("li",[e._v("RC 입력은 IO 보드를 통하지 않고 FMU로 직접 입력됩니다.")])]),e._v(" "),_("p",[e._v("I/O 보드가 없는 비행 콘트롤러에는 "),_("code",[e._v("MAIN")]),e._v(" 포트가 있지만, "),_("code",[e._v("AUX")]),e._v(" 포트는 "),_("em",[e._v("없습니다")]),e._v(". 따라서, "),_("code",[e._v("AUX")]),e._v(" 포트를 사용하지 않거나 비필수적인 목적(예: RC 전달)으로만 사용하는 "),_("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[e._v("기체")]),e._v("에만 사용할 수 있습니다. 일반적으로 모터/필수 제어용으로 "),_("code",[e._v("MAIN")]),e._v(" 포트만 사용하기 때문에, 대부분의 멀티콥터와 "),_("em",[e._v("완전")]),e._v(" 자율주행 차량(RC 제어를 사용하는 안전 조종사 없음)에 사용할 수 있습니다.")],1),e._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),_("p",[e._v("I/O 보드가 없는 비행 콘트롤러는 "),_("code",[e._v("AUX")]),e._v(" 포트가 없기 때문에, 모든 "),_("code",[e._v("AUX")]),e._v(" 포트를 필수 비행 제어 또는 모터에 매핑하는 "),_("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[e._v("기체")]),e._v("에서 사용할 수 없습니다.")],1)]),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("p",[e._v('I/O 보드가 없는 제조업체 비행 콘트롤러 변형은 종종 I/O 보드를 포함하는 버전의 "소형"으로 명명됩니다. 예 : '),_("em",[e._v("Pixhawk 4")]),e._v(" "),_("strong",[e._v("미니")]),e._v("_, "),_("em",[e._v("CUAV v5"),_("strong",[e._v("나노")])]),e._v(".")])]),e._v(" "),_("p",[e._v("대부분의 PX4 PWM 출력은 믹서의 "),_("code",[e._v("MAIN")]),e._v(" 또는 "),_("code",[e._v("AUX")]),e._v(" 포트에 매핑됩니다. 카메라 트리거링 및 Dshot ESC를 포함한 몇 가지 특별한 경우에는 FMU 핀에 직접 매핑됩니다. 예를 들면, 비행 컨트롤러에 I/O 보드 여부에 따라 "),_("code",[e._v("MAIN")]),e._v(" 또는 "),_("code",[e._v("AUX")]),e._v("로 **출력됩니다.")])])}),[],!1,null,null,null);t.default=v.exports}}]);