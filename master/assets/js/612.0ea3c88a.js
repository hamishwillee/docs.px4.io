(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{1190:function(e,t,r){e.exports=r.p+"assets/img/px4_fmu_io_functions.f2806cbc.png"},2143:function(e,t,r){"use strict";r.r(t);var _=r(18),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"px4-참조-비행체-제어-장치-설계"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#px4-참조-비행체-제어-장치-설계"}},[e._v("#")]),e._v(" PX4 참조 비행체 제어 장치 설계")]),e._v(" "),_("p",[e._v("PX4 참조 설계는 비행체 제어 장치의 "),_("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[e._v("픽스호크 계열")]),e._v("입니다. 2011년 처음 출시했으며, 현재 설계는 5번째 "),_("a",{attrs:{href:"#reference_design_generations"}},[e._v("세대")]),e._v("입니다(6세대 보드 설계는 진행중).")],1),e._v(" "),_("h2",{attrs:{id:"바이너리-호환성"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#바이너리-호환성"}},[e._v("#")]),e._v(" 바이너리 호환성")]),e._v(" "),_("p",[e._v("제각각의 설계에 따라 제조한 모든 보드는 잠재 바이너리 호환성을 지니고 있습니다(예: 동일한 펌웨어 실행 가능). 2018년도부터는 호환성을 검증하고 인증하는 바이너리 호환성 시험 기반을 제공합니다.")]),e._v(" "),_("p",[e._v("FMU 1~3 세대는 공개 하드웨어로 설계했으나, 4~5세대에서는 핀 출력과 전원 공급장치 명세 정보만 제공합니다(설계도는 각 제조사에서 만듦). 좀 더 우수한 호환성을 확보하기 위해, FMUv6 및 이후 버전에서는 완전한 참조 설계 모델로 돌아올 예정입니다.")]),e._v(" "),_("p",[_("a",{attrs:{id:"reference_design_generations"}})]),e._v(" "),_("h2",{attrs:{id:"참조-설계-세대"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#참조-설계-세대"}},[e._v("#")]),e._v(" 참조 설계 세대")]),e._v(" "),_("ul",[_("li",[e._v("FMUv1: 개발 보드 (STM32F407, 128 KB RAM, 1MB flash, "),_("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv1",target:"_blank",rel:"noopener noreferrer"}},[e._v("설계도"),_("OutboundLink")],1),e._v(") (PX4에서 더이상 지원하지 않음)")]),e._v(" "),_("li",[e._v("FMUv2: 픽스호크 (STM32F427, 168 MHz, 192 KB RAM, 1MB flash, "),_("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv2",target:"_blank",rel:"noopener noreferrer"}},[e._v("설계도"),_("OutboundLink")],1),e._v(")")]),e._v(" "),_("li",[e._v("FMUv3: 2MB 플래시를 장착한 픽스호크 변형 버전 (3DR 픽스호크 2 (Solo), Hex 픽스호크 2.1, Holybro Pixfalcon, 3DR Pixhawk Mini, STM32F427, 168 MHz, 256 KB RAM, 2 MB flash, "),_("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv3_REV_D",target:"_blank",rel:"noopener noreferrer"}},[e._v("설계도"),_("OutboundLink")],1),e._v(")")]),e._v(" "),_("li",[e._v("FMUv4: 픽스레이서 (STM32F427, 168 MHz, 256 KB RAM, 2 MB flash, "),_("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[e._v("핀 출력도"),_("OutboundLink")],1),e._v(")")]),e._v(" "),_("li",[e._v("FMUv4 PRO: 드로텍 픽스호크 3 PRO (STM32F469, 180 MHz, 384 KB RAM, 2 MB flash, "),_("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[e._v("핀 출력"),_("OutboundLink")],1),e._v(")")]),e._v(" "),_("li",[e._v("FMUv5: 홀리브로 픽스호크 4 (STM32F765, 216 MHz, 512 KB RAM, 2 MB flash, "),_("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[e._v("핀 아웃"),_("OutboundLink")],1),e._v(")")]),e._v(" "),_("li",[e._v("FMUv6: 개발 중, 최종 명칭 미정, 6s 변형 (STM32H7, 400 MHz, 2 MB RAM,  2 MB flash)과 6i 변형 (i.MX RT1050, 600 MHz, 512 KB RAM, 외장 플래시)")])]),e._v(" "),_("h2",{attrs:{id:"주요-입출력-기능-해부"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#주요-입출력-기능-해부"}},[e._v("#")]),e._v(" 주요/입출력 기능 해부")]),e._v(" "),_("p",[e._v("아래 그림에서는 픽스호크 계열 비행체 제어 장치의 FMU와 I/O 보드간 버스 구분과 담당 기능을 나타냅니다(보드는 단일 물리 모듈에 들어갑니다).")]),e._v(" "),_("p",[_("img",{attrs:{src:r(1190),alt:"PX4 주요/입출력 기능 해부"}})]),e._v(" "),_("p",[e._v("일부 픽스호크 계열 조종 장치는 입출력보드 없이 만들어 공간과 복잡도를 출이거나, 각 보드 용도를 알맞게 개선했습니다.")]),e._v(" "),_("p",[e._v("입출력 보드의 기능은 "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_USE_IO"}},[e._v("SYS_USE_IO=0")]),e._v(" 매개변수 설정으로 끌 수 있습니다. 입출력 보드의 기능을 끄면:")],1),e._v(" "),_("ul",[_("li",[e._v('메인 믹서 파일을 FMU로 불러옵니다(따라서 "메인" 출력은 '),_("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[e._v("에어프레임 참고")]),e._v("에서 AUX로 표기한 포트로 나타냅니다). AUX 믹서 파일은 불러오지 않으므로, 이 파일에 지정한 출력 핀은 사용하지 않습니다.")],1),e._v(" "),_("li",[e._v("RC 입력은 입출력 보드가 아닌 FMU로 바로 들어갑니다.")])]),e._v(" "),_("p",[e._v("입출력 보드를 장착하지 않은 비행체 제어 장치에는 "),_("code",[e._v("MAIN")]),e._v(" 포트가 있지만, "),_("code",[e._v("AUX")]),e._v("포트는 "),_("em",[e._v("없습니다")]),e._v(". 따라서 "),_("code",[e._v("AUX")]),e._v(" 포트를 활용하지 않는 "),_("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[e._v("에어프레임")]),e._v("에서만 사용할 수 있거나 덜 핵심적인 목적으로 활용할 수 있습니다(예: RC 전달). 대부분의 멀티콥터와 "),_("em",[e._v("완전")]),e._v(" 자동화 기체(원격 조정을 통한 안전 항해 기능을 뺌)는 모터와 핵심부를 제어하는 "),_("code",[e._v("MAIN")]),e._v(" 포트만을 사용하기 때문에 이 목적으로만 활용할 수 있습니다.")],1),e._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),_("p",[e._v("입출력 보드가 빠진 비행체 제어 장치는 핵심 비행 제어부와 모터를 "),_("code",[e._v("AUX")]),e._v("포트에 연결하는 "),_("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[e._v("에어프레임")]),e._v("에서 사용할 수 없습니다("),_("code",[e._v("AUX")]),e._v(" 포트가 없기 때문).")],1)]),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("p",[e._v('I/O 보드가없는 제조업체 비행 컨트롤러 변형은 종종 I/O 보드가 포함 된 버전의 "소형"으로 명명됩니다. 예 : '),_("em",[e._v("Pixhawk 4")]),e._v(" "),_("strong",[e._v("미니 ** _, _CUAV v5")]),e._v("나노**_.")])]),e._v(" "),_("p",[e._v("대부분의 PX4 PWM 출력은 믹서의  "),_("code",[e._v("MAIN")]),e._v(" 또는 "),_("code",[e._v("AUX")]),e._v(" 포트에 대응합니다. 일부 드문 경우, Dshot ESC, 카메라 촬영 핀을 FMU 핀에 직접 연결합니다(예: 비행체 제어 장치에 입출력 보드가 붙어있는지 여부에 따라 "),_("code",[e._v("MAIN")]),e._v("핀 또는 "),_("code",[e._v("AUX")]),e._v("핀 "),_("em",[e._v("어디로든")]),e._v(" 출력함).")])])}),[],!1,null,null,null);t.default=v.exports}}]);