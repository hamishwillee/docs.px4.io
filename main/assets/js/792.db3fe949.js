(window.webpackJsonp=window.webpackJsonp||[]).push([[792],{1418:function(t,e,r){t.exports=r.p+"assets/img/px4_fmu_io_functions.f2806cbc.png"},2765:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"px4-참조-비행-콘트롤러-디자인"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-참조-비행-콘트롤러-디자인"}},[t._v("#")]),t._v(" PX4 참조 비행 콘트롤러 디자인")]),t._v(" "),o("p",[t._v("PX4 참조 디자인은 비행 콘트롤러의 "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")]),t._v("입니다. 2011년에 처음 출시된 이 디자인은 현재 5세대 "),o("a",{attrs:{href:"#reference_design_generations"}},[t._v("세대")]),t._v("입니다(6세대 보드 디자인 진행 중).")],1),t._v(" "),o("h2",{attrs:{id:"바이너리-호환성"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#바이너리-호환성"}},[t._v("#")]),t._v(" 바이너리 호환성")]),t._v(" "),o("p",[t._v("특정 디자인으로 제조된 모든 보드는 바이너리 호환이 되어야 합니다(즉, 동일한 펌웨어를 실행하여야 함). 2018년부터 우리는 이 호환성을 확인하고 인증할 수 있는 바이너리 호환성 테스트 제품군을 제공할 것입니다.")]),t._v(" "),o("p",[t._v("FMU 1~3세대는 개방형 하드웨어로 설계되었으나, FMU 4세대와 5세대는 핀아웃 및 전원 공급 사양만 제공했습니다(개략도는 개별 제조업체에서 작성하였습니다). 우수한 호환성을 위하여 FMUv6 이상은 완전한 참조 디자인 모델링합니다.")]),t._v(" "),o("p",[o("a",{attrs:{id:"reference_design_generations"}})]),t._v(" "),o("h2",{attrs:{id:"레퍼런스-디자인-세대"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#레퍼런스-디자인-세대"}},[t._v("#")]),t._v(" 레퍼런스 디자인 세대")]),t._v(" "),o("ul",[o("li",[t._v("FMUv1: 개발 보드 (STM32F407, 128KB RAM, 1MB 플래시, "),o("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv1",target:"_blank",rel:"noopener noreferrer"}},[t._v("설계도"),o("OutboundLink")],1),t._v(")(PX4에서 더 이상 지원하지 않음)")]),t._v(" "),o("li",[t._v("FMUv2: 픽스호크 (STM32F427, 168 MHz, 192 KB RAM, 1MB flash, "),o("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv2",target:"_blank",rel:"noopener noreferrer"}},[t._v("설계도"),o("OutboundLink")],1),t._v(")")]),t._v(" "),o("li",[t._v("FMUv3: 2MB 플래시를 장착한 픽스호크 변형 버전 (3DR 픽스호크 2 (Solo), Hex 픽스호크 2.1, Holybro Pixfalcon, 3DR Pixhawk Mini, STM32F427, 168 MHz, 256 KB RAM, 2 MB flash, "),o("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv3_REV_D",target:"_blank",rel:"noopener noreferrer"}},[t._v("설계도"),o("OutboundLink")],1),t._v(")")]),t._v(" "),o("li",[t._v("FMUv4: 픽스레이서 (STM32F427, 168 MHz, 256 KB RAM, 2 MB flash, "),o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[t._v("핀 출력도"),o("OutboundLink")],1),t._v(")")]),t._v(" "),o("li",[t._v("FMUv4 PRO: 드로텍 픽스호크 3 PRO (STM32F469, 180 MHz, 384 KB RAM, 2 MB flash, "),o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[t._v("핀 출력"),o("OutboundLink")],1),t._v(")")]),t._v(" "),o("li",[t._v("FMUv5: 홀리브로 픽스호크 4 (STM32F765, 216 MHz, 512 KB RAM, 2 MB flash, "),o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("핀 아웃"),o("OutboundLink")],1),t._v(")")]),t._v(" "),o("li",[t._v("FMUv6: 개발 중, 최종 명칭 미정, 6s 변형 (STM32H7, 400 MHz, 2 MB RAM,  2 MB flash)과 6i 변형 (i.MX RT1050, 600 MHz, 512 KB RAM, 외장 플래시)")])]),t._v(" "),o("h2",{attrs:{id:"메인-io-기능-분석"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#메인-io-기능-분석"}},[t._v("#")]),t._v(" 메인 IO 기능 분석")]),t._v(" "),o("p",[t._v("아래 다이어그램은 Pixhawk 시리즈 비행 콘트롤러의  FMU와 I/O 보드간 기능과 버스 분할을 나타냅니다(보드는 단일 물리적 모듈에 통합됨).")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1418),alt:"PX4 메인/IO 기능 분석"}})]),t._v(" "),o("p",[t._v("일부 Pixhawk 시리즈 컨트롤러는 공간이나 복잡성을 줄이기 위하여 특정 보드 의 기능 향상을 위하여 I/O 보드 없이 제작됩니다. In this case "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_USE_IO"}},[t._v("SYS_USE_IO")]),t._v(" is set to "),o("code",[t._v("0")]),t._v(" so that the I/O driver is not started. You can also set "),o("code",[t._v("SYS_USE_IO")]),t._v(" to "),o("code",[t._v("0")]),t._v(" to disable the I/O on a flight controller where it is present but not needed (in order to slightly reduce the CPU load).")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v('I/O 보드가 없는 제조업체 비행 콘트롤러 변형은 종종 I/O 보드를 포함하는 버전의 "소형"으로 명명됩니다. 예 : '),o("em",[t._v("Pixhawk 4")]),t._v(" "),o("strong",[t._v("미니")]),t._v("_, "),o("em",[t._v("CUAV v5"),o("strong",[t._v("나노")])]),t._v(".")])]),t._v(" "),o("p",[t._v("Build targets that must run on flight controllers with an I/O board map the FMU outputs to "),o("code",[t._v("AUX")]),t._v(" and the I/0 outputs to "),o("code",[t._v("MAIN")]),t._v(" (see diagram above). If the target is run on hardware where I/O board is not present or has been disabled, the PWM MAIN outputs will not be present. You might see this, for example, by running  "),o("code",[t._v("px4_fmu-v5_default")]),t._v(" on "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" (with IO) and "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini")]),t._v(" (without I/O).")],1),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("On "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini")]),t._v(" this results in a mismatch between the "),o("code",[t._v("MAIN")]),t._v(" label screenprinted on the flight controller and the  "),o("code",[t._v("AUX")]),t._v(" bus shown during "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(".")],1)]),t._v(" "),o("p",[t._v("Note that if a build target is only ever intended to run on a flight controller that does not have an I/0 board, then the FMU outputs are mapped to "),o("code",[t._v("MAIN")]),t._v(" (for example, the "),o("code",[t._v("px4_fmu-v4_default")]),t._v(" target for "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(").")],1),t._v(" "),o("p",[t._v("PX4 PWM outputs are mapped to either "),o("code",[t._v("MAIN")]),t._v(" or "),o("code",[t._v("AUX")]),t._v(" ports in "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=a.exports}}]);