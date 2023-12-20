(window.webpackJsonp=window.webpackJsonp||[]).push([[823],{1409:function(t,e,r){t.exports=r.p+"assets/img/px4_fmu_io_functions.97862480.png"},2911:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"px4-참조-비행-콘트롤러-디자인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-참조-비행-콘트롤러-디자인"}},[t._v("#")]),t._v(" PX4 참조 비행 콘트롤러 디자인")]),t._v(" "),a("p",[t._v("PX4 참조 디자인은 비행 콘트롤러의 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")]),t._v("입니다. 2011년에 처음 출시된 이 디자인은 현재 5세대 "),a("a",{attrs:{href:"#reference_design_generations"}},[t._v("세대")]),t._v("입니다(6세대 보드 디자인 진행 중).")],1),t._v(" "),a("h2",{attrs:{id:"바이너리-호환성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#바이너리-호환성"}},[t._v("#")]),t._v(" 바이너리 호환성")]),t._v(" "),a("p",[t._v("특정 디자인으로 제조된 모든 보드는 바이너리 호환이 되어야 합니다(즉, 동일한 펌웨어를 실행하여야 함). 2018년부터 우리는 이 호환성을 확인하고 인증할 수 있는 바이너리 호환성 테스트 제품군을 제공할 것입니다.")]),t._v(" "),a("p",[t._v("FMU 1~3세대는 개방형 하드웨어로 설계되었으나, FMU 4세대와 5세대는 핀아웃 및 전원 공급 사양만 제공했습니다(개략도는 개별 제조업체에서 작성하였습니다). 우수한 호환성을 위하여 FMUv6 이상은 완전한 참조 디자인 모델링합니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"reference_design_generations"}})]),t._v(" "),a("h2",{attrs:{id:"레퍼런스-디자인-세대"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#레퍼런스-디자인-세대"}},[t._v("#")]),t._v(" 레퍼런스 디자인 세대")]),t._v(" "),a("ul",[a("li",[t._v("FMUv1: 개발 보드 (STM32F407, 128KB RAM, 1MB 플래시, "),a("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv1",target:"_blank",rel:"noopener noreferrer"}},[t._v("설계도"),a("OutboundLink")],1),t._v(")(PX4에서 더 이상 지원하지 않음)")]),t._v(" "),a("li",[t._v("FMUv2: 픽스호크 (STM32F427, 168 MHz, 192 KB RAM, 1MB flash, "),a("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv2",target:"_blank",rel:"noopener noreferrer"}},[t._v("설계도"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("FMUv3: 2MB 플래시를 장착한 픽스호크 변형 버전 (3DR 픽스호크 2 (Solo), Hex 픽스호크 2.1, Holybro Pixfalcon, 3DR Pixhawk Mini, STM32F427, 168 MHz, 256 KB RAM, 2 MB flash, "),a("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv3_REV_D",target:"_blank",rel:"noopener noreferrer"}},[t._v("설계도"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("FMUv4: 픽스레이서 (STM32F427, 168 MHz, 256 KB RAM, 2 MB flash, "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[t._v("핀 출력도"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("FMUv4 PRO: 드로텍 픽스호크 3 PRO (STM32F469, 180 MHz, 384 KB RAM, 2 MB flash, "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[t._v("핀 출력"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("FMUv5: 홀리브로 픽스호크 4 (STM32F765, 216 MHz, 512 KB RAM, 2 MB flash, "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("핀 아웃"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("FMUv6: work in progress, final name TBD, variant 6s (STM32H7, 400 MHz, 2 MB RAM, 2 MB flash) and variant 6i (i.MX RT1050, 600 MHz, 512 KB RAM, external flash)")])]),t._v(" "),a("h2",{attrs:{id:"메인-io-기능-분석"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메인-io-기능-분석"}},[t._v("#")]),t._v(" 메인 IO 기능 분석")]),t._v(" "),a("p",[t._v("아래 다이어그램은 Pixhawk 시리즈 비행 콘트롤러의  FMU와 I/O 보드간 기능과 버스 분할을 나타냅니다(보드는 단일 물리적 모듈에 통합됨).")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1409),alt:"PX4 메인/IO 기능 분석"}})]),t._v(" "),a("p",[t._v("일부 Pixhawk 시리즈 컨트롤러는 공간이나 복잡성을 줄이기 위하여 특정 보드 의 기능 향상을 위하여 I/O 보드 없이 제작됩니다. In this case the I/O driver is not started.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v('Manufacturer flight controller variants without an I/O board are often named as a "diminutive" of a version that includes the I/O board: e.g. '),a("em",[t._v("Pixhawk 4")]),t._v(" "),a("strong",[t._v("Mini")]),a("em",[t._v(", _CUAV v5 "),a("strong",[t._v("nano")])]),t._v(".")])]),t._v(" "),a("p",[t._v("Build targets that must run on flight controllers with an I/O board map the FMU outputs to "),a("code",[t._v("AUX")]),t._v(" and the I/0 outputs to "),a("code",[t._v("MAIN")]),t._v(" (see diagram above). If the target is run on hardware where I/O board is not present or has been disabled, the PWM MAIN outputs will not be present. You might see this, for example, by running "),a("code",[t._v("px4_fmu-v5_default")]),t._v(" on "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" (with IO) and "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini")]),t._v(" (without I/O).")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("On "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini")]),t._v(" this results in a mismatch between the "),a("code",[t._v("MAIN")]),t._v(" label screenprinted on the flight controller and the "),a("code",[t._v("AUX")]),t._v(" bus shown during "),a("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Note that if a build target is only ever intended to run on a flight controller that does not have an I/0 board, then the FMU outputs are mapped to "),a("code",[t._v("MAIN")]),t._v(" (for example, the "),a("code",[t._v("px4_fmu-v4_default")]),t._v(" target for "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(").")],1),t._v(" "),a("p",[t._v("PX4 PWM outputs are mapped to either "),a("code",[t._v("MAIN")]),t._v(" or "),a("code",[t._v("AUX")]),t._v(" ports in "),a("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=o.exports}}]);