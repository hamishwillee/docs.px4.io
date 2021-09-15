(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{2190:function(t,_,v){"use strict";v.r(_);var r=v(19),e=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"swd-jtag-하드웨어-디버깅-인터페이스"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#swd-jtag-하드웨어-디버깅-인터페이스"}},[t._v("#")]),t._v(" SWD (JTAG) 하드웨어 디버깅 인터페이스")]),t._v(" "),r("p",[t._v("PX4는 일반적으로 ARM "),r("em",[t._v("직렬 와이어 디버그(SWD)")]),t._v(" 인터페이스를 제공하는 자동조종장치 컨트롤러에서 실행됩니다. SWD는 ARM 프로세서에서 JTAG 디버깅을 위한 핀 수가 적은 물리적 인터페이스입니다. SWD 호환 디버그 프로브(예: "),r("a",{attrs:{href:"#segger_jlink_edu_mini"}},[t._v("Segger J-Link EDU Mini")]),t._v(", "),r("a",{attrs:{href:"#dronecode_probe"}},[t._v("Dronecode Probe")]),t._v(" 등)와 함께 사용하여 PX4에서 중단점을 설정하고, 실제 장치에서 실행중인 코드를 단계별로 실행할 수 있습니다.")]),t._v(" "),r("p",[t._v("SWD 인터페이스를 사용하여 완전히 비어 있는 보드(USB 부트로더가 설치되지 않은 보드)에 새 부트로더나 펌웨어를 추가할 수 있습니다.")]),t._v(" "),r("p",[t._v("다른 보드에 SWD 인터페이스를 연결하는 방법을 설명합니다(실제로 디버깅을 수행하는 방법은 "),r("a",{attrs:{href:"#debugging_topics"}},[t._v("디버깅 주제")]),t._v("에서 다룹니다).")]),t._v(" "),r("p",[r("a",{attrs:{id:"swd_interface"}})]),t._v(" "),r("h2",{attrs:{id:"swd-인터페이스-정의"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#swd-인터페이스-정의"}},[t._v("#")]),t._v(" SWD 인터페이스 정의")]),t._v(" "),r("p",[t._v("SWD 인터페이스는 다음과 같은 핀으로 구성됩니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("핀")]),t._v(" "),r("th",[t._v("신호 형식")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("Vref")])]),t._v(" "),r("td",[t._v("출력")]),t._v(" "),r("td",[t._v("목표 기준 전압: "),r("br"),t._v("일부 JTAG 어댑터는 SWD 라인의 전압을 설정하기 위하여 "),r("code",[t._v("Vref")]),t._v(" 전압이 필요합니다. 예를 들어, "),r("a",{attrs:{href:"#segger_jlink_edu_mini"}},[t._v("SEGGER J-Link 디버그 프로브")]),t._v("에는 "),r("code",[t._v("Vref")]),t._v("가 필요합니다.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("SWDIO")])]),t._v(" "),r("td",[t._v("입출력")]),t._v(" "),r("td",[t._v("단일 양방향 데이터 핀.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("SWCLK")])]),t._v(" "),r("td",[t._v("출력")]),t._v(" "),r("td",[t._v("클록 신호")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("GND")])]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("접지 핀")])])])]),t._v(" "),r("p",[t._v('SWD의 "일부"는 아니지만, 자동조종장치에는 '),r("em",[t._v("직렬 와이어 출력(SWO)")]),t._v(" 추적 출력 핀이 있을 수 있습니다. 이 핀이 있는 경우에는 이것을 연결하여야 합니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("핀")]),t._v(" "),r("th",[t._v("신호 형식")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("SWO")])]),t._v(" "),r("td",[t._v("출력")]),t._v(" "),r("td",[t._v("직렬 와이어 출력 트레이스 출력 핀. 실시간 추적 데이터를 내보내는 "),r("em",[t._v("SWD")]),t._v("와 함께 사용할 수 있습니다.")])])])]),t._v(" "),r("h2",{attrs:{id:"swd-디버거를-px4-하드웨어에-연결"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#swd-디버거를-px4-하드웨어에-연결"}},[t._v("#")]),t._v(" SWD 디버거를 PX4 하드웨어에 연결")]),t._v(" "),r("p",[t._v("디버그 프로브의 "),r("code",[t._v("SWDIO")]),t._v(", "),r("code",[t._v("SWCLK")]),t._v(" 및 "),r("code",[t._v("GND")]),t._v(" 핀을 자동조종장치의 해당 핀에 연결합니다.")]),t._v(" "),r("p",[t._v("추가로:")]),t._v(" "),r("ul",[r("li",[t._v("사용 중인 디버그 어댑터에 필요한 경우에는 "),r("code",[t._v("VRef")]),t._v(" 핀을 연결합니다.")]),t._v(" "),r("li",[r("code",[t._v("SWO")]),t._v(" 핀이 있으면, 연결합니다.")])]),t._v(" "),r("p",[t._v("일부 SWD "),r("a",{attrs:{href:"#debug_probes"}},[t._v("디버그 프로브")]),t._v("는 일반적인 Pixhawk "),r("a",{attrs:{href:"#debug_ports"}},[t._v("디버그 포트")]),t._v("에 연결용 어댑터/케이블과 함께 제공됩니다. 다른 보드나 프로브에 연결용 맞춤형 케이블을 제작할 수도 있습니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("일부 제조업체에서는 SWD 인터페이스와 "),r("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("을 쉽게 연결하는 케이블을 제공합니다. 예를 들어, "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html#debug_port"}},[t._v("CUAV V5nano")]),t._v("와 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_plus.html#debug-port"}},[t._v("CUAV V5+")]),t._v("에는 다음 디버그 케이블이 포함됩니다.")],1),t._v(" "),r("p",[r("img",{attrs:{src:v(681),alt:"6핀 JST SH 케이블"}})])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("가능한 경우 SWD/JTAG 디버거 및 컴퓨터에 연결용 케이블 직접 만드는 것보다, 어댑터 보드를 만들거나 구매하는 것이 좋습니다. 이것은 디버깅 문제의 위험이나 잘못된 배선을 줄이고, 어댑터가 인기 있는 비행 콘트롤러에 연결하기 위한 공통 인터페이스를 제공하는 이점이 있습니다.")])]),t._v(" "),r("p",[r("a",{attrs:{id:"debug_ports"}})]),t._v(" "),r("h2",{attrs:{id:"자동비행장치-디버그-포트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#자동비행장치-디버그-포트"}},[t._v("#")]),t._v(" 자동비행장치 디버그 포트")]),t._v(" "),r("p",[t._v("비행 컨트롤러는 일반적으로 "),r("a",{attrs:{href:"#swd_interface"}},[t._v("SWD 인터페이스")]),t._v("와 "),r("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("을 모두 노출하는 디버그 포트를 제공합니다.")],1),t._v(" "),r("p",[r("a",{attrs:{href:"#pixhawk_standard_debug_ports"}},[t._v("Pixhawk 커넥터 표준")]),t._v("은 이 포트를 표준화하하고 있습니다. 그러나, 여러 보드가 서로 다른 핀 배치 또는 커넥터를 사용하므로, 자동조종장치 설명서에서 포트 위치와 핀 배치를 확인하는 것이 좋습니다.")]),t._v(" "),r("p",[t._v("자동조종장치의 작은 하위 집합에 대한 디버그 포트 위치 및 핀아웃은 아래에 링크되어 있습니다.")]),t._v(" "),r("p",[r("span",{attrs:{id:"port_information"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("자동조종장치")]),t._v(" "),r("th",[t._v("커넥터")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html#swd-port"}},[t._v("3DR Pixhawk")])],1),t._v(" "),r("td",[t._v("ARM 10핀 JTAG 커넥터("),r("em",[t._v("mRo Pixhawk")]),t._v(", "),r("em",[t._v("HobbyKing HKPilot32")]),t._v("를 포함한 FMUv2 보드에도 사용됨).")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html#debug_port"}},[t._v("CUAV V5nano")])],1),t._v(" "),r("td",[t._v("6핀 JST GH"),r("br"),t._v("Digikey: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1582-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-GHS-TBT(LF)(SN)(N)"),r("OutboundLink")],1),t._v("(수직 장착), "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1568-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-GHS-TBT(LF)(SN) (N)"),r("OutboundLink")],1),t._v(" (사이드 마운트)")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_plus.html#debug-port"}},[t._v("CUAV V5+")])],1),t._v(" "),r("td",[t._v("6핀 JST GH"),r("br"),t._v("Digikey: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1582-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-GHS-TBT(LF)(SN)(N)"),r("OutboundLink")],1),t._v("(수직 장착), "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1568-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-GHS-TBT(LF)(SN) (N)"),r("OutboundLink")],1),t._v(" (사이드 마운트)")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk3_pro.html#debug-port"}},[t._v("Drotek Pixhawk 3 Pro")])],1),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6핀 SH 디버그")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html#debug_port"}},[t._v("Holybro Pixhawk 4")])],1),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6핀 SH 디버그")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4_mini.html#debug-port"}},[t._v("Holybro Pixhawk 4 Mini")])],1),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6핀 SH 디버그")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/kakutef7.html#debug-port"}},[t._v("Holybro Kakute F7")])],1),t._v(" "),r("td",[t._v("납땜 판")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/durandal.html#debug-port"}},[t._v("Holybro Durandal")])],1),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6핀 SH 디버그")])])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("비행 콘트롤러가 목록에 없으면 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("자동 조종 장치 항목")]),t._v("을 참고하십시오.")],1)]),t._v(" "),r("p",[r("a",{attrs:{id:"pixhawk_standard_debug_ports"}})]),t._v(" "),r("h2",{attrs:{id:"pixhawk-표준-디버그-포트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-표준-디버그-포트"}},[t._v("#")]),t._v(" Pixhawk 표준 디버그 포트")]),t._v(" "),r("p",[t._v("Pixhawk 프로젝트에는 다양한 Pixhawk FMU 릴리스에 대한 표준 핀배열 및 커넥터 유형이 정의되어 있습니다.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[r("a",{attrs:{href:"#port_information"}},[t._v("특정 보드")]),t._v("에서 사용된 포트를 확인하십시오.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("FMU 버전")]),t._v(" "),r("th",[t._v("Pixhawk 버전")]),t._v(" "),r("th",[t._v("디버그 인터페이스")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("FMUv2")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html#swd-port"}},[t._v("Pixhawk / Pixhawk 1")])],1),t._v(" "),r("td",[t._v("10핀 ARM 디버그")])]),t._v(" "),r("tr",[r("td",[t._v("FMUv3")]),t._v(" "),r("td",[t._v("Pixhawk 2")]),t._v(" "),r("td",[t._v("6핀 SUR 디버그")])]),t._v(" "),r("tr",[r("td",[t._v("FMUv4")]),t._v(" "),r("td",[t._v("Pixhawk 3")]),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("6핀 SH 디버그")])])]),t._v(" "),r("tr",[r("td",[t._v("FMUv5")]),t._v(" "),r("td",[t._v("Pixhawk 4 FMUv5")]),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("6핀 SH 디버그")])])]),t._v(" "),r("tr",[r("td",[t._v("FMUv5X")]),t._v(" "),r("td",[t._v("Pixhawk 5X")]),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_10_pin_sh"}},[t._v("10핀 SH 디버그")])])]),t._v(" "),r("tr",[r("td",[t._v("FMUv6")]),t._v(" "),r("td",[t._v("Pixhawk 6")]),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_10_pin_sh"}},[t._v("10핀 SH 디버그")])])]),t._v(" "),r("tr",[r("td",[t._v("FMUv6X")]),t._v(" "),r("td",[t._v("Pixhawk 6")]),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_10_pin_sh"}},[t._v("10핀 SH 디버그")])])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("FMU와 Pixhawk 버전은 FMUv5X 이후 버전에만 일관성이 있습니다.")])]),t._v(" "),r("p",[r("a",{attrs:{id:"pixhawk_debug_port_6_pin_sh"}})]),t._v(" "),r("h3",{attrs:{id:"pixhawk-디버그-미니-6핀-sh-디버그-포트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-디버그-미니-6핀-sh-디버그-포트"}},[t._v("#")]),t._v(" Pixhawk 디버그 미니(6핀 SH 디버그 포트)")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 커넥터 표준"),r("OutboundLink")],1),t._v("은 SWD 핀과 "),r("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("에 대한 액세스를 제공하는 "),r("em",[t._v("6핀 SH 디버그 포트")]),t._v("를 정의합니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("이 디버그 포트는 FMUv4와 FMUv5에서 사용됩니다.")])]),t._v(" "),r("p",[t._v("핀 배열는 아래와 같습니다(SWD 핀이 강조 표시됨).")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("디버그 포트")]),t._v(" "),r("th",[t._v("핀")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[r("code",[t._v("Vtref")])])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("콘솔 TX")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("콘솔 RX")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[r("code",[t._v("SWDIO")])])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[r("code",[t._v("SWDCLK")])])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[r("code",[t._v("GND")])])])])]),t._v(" "),r("p",[t._v("디버그 포트 정의에는 다음 납땜 패드(커넥터 옆의 보드)가 포함됩니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("디버그 포트")]),t._v(" "),r("th",[t._v("핀")]),t._v(" "),r("th",[t._v("전압")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("패드")]),t._v(" "),r("td",[t._v("신호")]),t._v(" "),r("td",[t._v("볼트")])]),t._v(" "),r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("NRST (reset)")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("GPIO1 (여분의 GPIO)")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GPIO2 (여분의 GPIO)")]),t._v(" "),r("td",[t._v("+3.3V")])])])]),t._v(" "),r("p",[t._v("소켓은 "),r("em",[t._v("6핀 JST SH")]),t._v("입니다. - Digikey 번호: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-2875-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-SRSS-TBT(LF)(SN)"),r("OutboundLink")],1),t._v("(수직 장착), "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1806-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-SRSS- TBT(LF)(SN)"),r("OutboundLink")],1),t._v("(사이드 마운트).")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=A06SR06SR30K152A",target:"_blank",rel:"noopener noreferrer"}},[t._v("이와 같은 케이블"),r("OutboundLink")],1),t._v("을 사용하여 디버그 포트에 연결할 수 있습니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(682),alt:"6핀 JST SH 케이블"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"pixhawk_debug_port_10_pin_sh"}})]),t._v(" "),r("h3",{attrs:{id:"pixhawk-디버그-전체-10핀-sh-디버그-포트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-디버그-전체-10핀-sh-디버그-포트"}},[t._v("#")]),t._v(" Pixhawk 디버그 전체(10핀 SH 디버그 포트)")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 커넥터 표준"),r("OutboundLink")],1),t._v("은 SWD 핀과 "),r("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("에 대한 액세스를 제공하는 "),r("em",[t._v("10핀 SH 디버그 포트")]),t._v("를 정의합니다. 이것은 "),r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6-Pin SH 디버그 포트")]),t._v(" 옆에서 커넥터로 솔더 패드를 이동하고, SWO 핀도 추가합니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("이 포트는 FMUv5x, FMUv6, FMUv6x에서 사용하도록 지정됩니다.")])]),t._v(" "),r("p",[t._v("핀 배열는 아래와 같습니다(SWD 핀이 강조 표시됨).")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("디버그 포트")]),t._v(" "),r("th",[t._v("핀")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[r("code",[t._v("Vtref")])])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("콘솔 TX")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("콘솔 RX")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[r("code",[t._v("SWDIO")])])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[r("code",[t._v("SWDCLK")])])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[r("em",[t._v("SWO")])])]),t._v(" "),r("tr",[r("td",[t._v("7")]),t._v(" "),r("td",[t._v("NFC GPIO")])]),t._v(" "),r("tr",[r("td",[t._v("8")]),t._v(" "),r("td",[t._v("PH11")])]),t._v(" "),r("tr",[r("td",[t._v("9")]),t._v(" "),r("td",[t._v("nRST")])]),t._v(" "),r("tr",[r("td",[t._v("10")]),t._v(" "),r("td",[r("code",[t._v("GND")])])])])]),t._v(" "),r("p",[t._v("소켓은 "),r("em",[t._v("10핀 JST SH")]),t._v(" - Digikey 번호: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1796-2-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM10B-SRSS-TB(LF)(SN)"),r("OutboundLink")],1),t._v("(수직 장착) 또는 "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1810-2-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM10B-SRSS- TB(LF)(SN)"),r("OutboundLink")],1),t._v("(측면 장착).")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=A10SR10SR30K203A",target:"_blank",rel:"noopener noreferrer"}},[t._v("이와 같은 케이블"),r("OutboundLink")],1),t._v("을 사용하여 디버그 포트에 연결할 수 있습니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(683),alt:"10핀 JST SH 케이블"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"debug_probes"}})]),t._v(" "),r("h2",{attrs:{id:"디버그-프로브"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#디버그-프로브"}},[t._v("#")]),t._v(" 디버그 프로브")]),t._v(" "),r("p",[t._v("다음 섹션에서는 PX4를 실행 자동조종장치에 연결하기 위한 몇 가지 인기 있는 디버그 프로브 및 어댑터에 대해 간략히 설명합니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"segger_jlink_edu_mini"}})]),t._v(" "),r("h3",{attrs:{id:"segger-jlink-edu-미니-디버그-프로브"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#segger-jlink-edu-미니-디버그-프로브"}},[t._v("#")]),t._v(" Segger JLink EDU 미니 디버그 프로브")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/models/j-link-edu-mini/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Segger JLink EDU Mini"),r("OutboundLink")],1),t._v("는 저렴하고 널리 사용되는 SWD 디버그 프로브입니다. The probe's connector pinout looks like the image below (connect to this using an ARM 10-pin mini connector like "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=SAM8796-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("FTSH-105-01-F-DV-K"),r("OutboundLink")],1),t._v(").")]),t._v(" "),r("p",[r("img",{attrs:{src:v(684),alt:"connector_jlink_mini.png"}})]),t._v(" "),r("p",[t._v("J-Link Edu Mini를 "),r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6-Pin SH 디버그 포트")]),t._v("에 연결하기 위한 핀 매핑은 아래와 같습니다(참고, "),r("code",[t._v("-")]),t._v("은 SWD에 필요하지 않은 핀을 나타냅니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("디버그 포트")]),t._v(" "),r("th",[t._v("J-Link Mini")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1 (Vtref)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("2 (콘솔 TX)")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("3 (콘솔 RX)")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("4 (SWDIO)")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("5 (SWDCLK)")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("6 (GND)")]),t._v(" "),r("td",[t._v("3 또는 5")])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("위의 표에서 표준 포트를 사용하지 않는 자동조종장치에 대한 연결을 유추할 수 있습니다.")])]),t._v(" "),r("p",[r("a",{attrs:{id:"dronecode_probe"}})]),t._v(" "),r("h3",{attrs:{id:"dronecode-프로브"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-프로브"}},[t._v("#")]),t._v(" Dronecode 프로브")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode Probe"),r("OutboundLink")],1),t._v("는 대부분의 ARM Cortex 기반 설계, 특히 Pixhawk 시리즈 비행 콘트롤러(및 PX4가 지원하는 기타 하드웨어)와 호환되는 일반 JTAG/SWD + UART 콘솔 어댑터입니다.")]),t._v(" "),r("p",[t._v("프로브의 USB 인터페이스는 두 개의 개별 가상 직렬 포트 인터페이스를 노출합니다. 하나는 "),r("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("(UART)에 연결하기 위한 것이고, 다른 하나는 내장된 GDB 서버(SWD 인터페이스)에 연결하기 위한 것입니다.")],1),t._v(" "),r("p",[t._v("프로브는 "),r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6핀 SH 디버그 포트")]),t._v("에 연결하기 위한 DCD-M 커넥터 케이블을 제공합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("프로브와 함께 제공되는 "),r("em",[t._v("6핀 DF13")]),t._v(" 커넥터는 SWD 디버깅에 사용할 수 없습니다(시스템 콘솔에 사용하기 위한 것입니다).")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("em",[t._v("Dronecode 프로브")]),t._v("는 "),r("a",{attrs:{href:"#black_magic_probe"}},[t._v("Black Magic Probe")]),t._v("를 기반으로 합니다.")])]),t._v(" "),r("p",[r("a",{attrs:{id:"black_magic_probe"}})]),t._v(" "),r("h3",{attrs:{id:"black-magic-프로브"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#black-magic-프로브"}},[t._v("#")]),t._v(" Black Magic 프로브")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("Black Magic Probe"),r("OutboundLink")],1),t._v("는 "),r("a",{attrs:{href:"#dronecode_probe"}},[t._v("Dronecode 프로브")]),t._v("와 매우 유사하지만 Pixhawk 시리즈 비행 콘트롤러에 직접 연결하기 위한 동일한 어댑터가 제공되지 않습니다.")]),t._v(" "),r("p",[t._v("어댑터는 별도로 구매할 수 있습니다.")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://1bitsquared.com/products/drone-code-debug-adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("드론 코드 디버그 어댑터"),r("OutboundLink")],1),t._v("(1비트 제곱).")])]),t._v(" "),r("p",[r("a",{attrs:{id:"debugging_topics"}})]),t._v(" "),r("h2",{attrs:{id:"다음-단계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#다음-단계"}},[t._v("#")]),t._v(" 다음 단계")]),t._v(" "),r("p",[t._v("이제 비행 컨트롤러를 SWD 디버그 프로브에 연결하였습니다!")]),t._v(" "),r("p",[t._v("다음 항목에서는 대상 디버깅을 시작하는 방법을 설명합니다.")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/debug/eclipse_jlink.html"}},[t._v("PX4용 MCU Eclipse/J-Link 디버깅")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html"}},[t._v("비주얼 스튜디오 코드 IDE(VSCode)")])],1)])])}),[],!1,null,null,null);_.default=e.exports},681:function(t,_,v){t.exports=v.p+"assets/img/cuav_v5_debug_cable.c0455619.jpg"},682:function(t,_,v){t.exports=v.p+"assets/img/cable_6pin_jst_sh.3c8865a1.jpg"},683:function(t,_,v){t.exports=v.p+"assets/img/cable_10pin_jst_sh.0bc1341c.jpg"},684:function(t,_){t.exports="data:image/png;base64,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"}}]);