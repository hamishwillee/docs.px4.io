(window.webpackJsonp=window.webpackJsonp||[]).push([[1216],{2360:function(t,_,a){"use strict";a.r(_);var e=a(19),v=Object(e.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"시리얼-포트-매핑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시리얼-포트-매핑"}},[t._v("#")]),t._v(" 시리얼 포트 매핑")]),t._v(" "),a("p",[t._v('직렬 포트(UART), 장치(예: "ttyS0")와 PX4에서 활성화된 특정 기능(예: TELEM1, TELEM2, GPS1, RC SBUS, 디버그 콘솔)간의 매핑 방법을 설명합니다.')]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("지침은 비행 콘트롤러 문서에서 직렬 포트 매핑 테이블을 생성합니다. 예: "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html#serial-port-mapping"}},[t._v("Pixhawk 4 > 직렬 포트 매핑")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"stmxxyyy의-nuttx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stmxxyyy의-nuttx"}},[t._v("#")]),t._v(" STMxxyyy의 NuttX")]),t._v(" "),a("p",[t._v("보드 설정 파일을 검사하여 STMxxyyy 아키텍처에서 NuttX 빌드에 대한 매핑 획득 방법을 설명합니다. FMUv5를 사용하지만, 다른 FMU 버전/NuttX 보드에도 유사하게 확장할 수 있습니다.")]),t._v(" "),a("h3",{attrs:{id:"default-cmake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-cmake"}},[t._v("#")]),t._v(" default.cmake")]),t._v(" "),a("p",[a("strong",[t._v("default.cmake")]),t._v('는 여러 직렬 포트 매핑을 나열합니다(텍스트 "SERIAL_PORTS" 검색).')]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake#L13-L17",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/default.cmake"),a("OutboundLink")],1),t._v("에서:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SERIAL_PORTS\n    GPS1:/dev/ttyS0\n    TEL1:/dev/ttyS1\n    TEL2:/dev/ttyS2\n    TEL4:/dev/ttyS3\n")])])]),a("h3",{attrs:{id:"nsh-defconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsh-defconfig"}},[t._v("#")]),t._v(" nsh/defconfig")]),t._v(" "),a("p",[a("em",[t._v("nsh/defconfig")]),t._v("를 사용하여 정의된 포트, UART인지, USART인지, USART/UART와 장치 간의 매핑을 결정할 수 있습니다. "),a("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("직렬/디버그 콘솔")]),t._v("에 사용되는 포트를 결정할 수 있습니다.")],1),t._v(" "),a("p",[t._v("보드의 defconfig 파일을 엽니다(예: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/nuttx-config/nsh/defconfig#L191-L197",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/nuttx-config/nsh/defconfig"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[a("code",[t._v("CONFIG_STM32xx_USARTn=y")]),t._v('와 같은 형식의 항목이 있는 섹션을 찾을 때까지 텍스트 "ART"를 검색합니다. 여기서 '),a("code",[t._v("xx")]),t._v("는 프로세서 유형이고 "),a("code",[t._v("n")]),t._v("은 포트 번호입니다. 예를 들면:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CONFIG_STM32F7_UART4=y\nCONFIG_STM32F7_UART7=y\nCONFIG_STM32F7_UART8=y\nCONFIG_STM32F7_USART1=y\nCONFIG_STM32F7_USART2=y\nCONFIG_STM32F7_USART3=y\nCONFIG_STM32F7_USART6=y\n")])])]),a("p",[t._v("항목은 정의된 포트와 UART인지 USART인지 알려줍니다.")]),t._v(" "),a("p",[t._v('위의 섹션을 복사하고 "n"으로 번호를 재정렬 합니다. 장치 대 직렬 포트 매핑을 얻으려면, 장치 번호 _ttyS'),a("strong",[t._v("n")]),t._v("_을 (0 기반)과 함께 증가시킵니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ttyS0 CONFIG_STM32F7_USART1=y\nttyS1 CONFIG_STM32F7_USART2=y\nttyS2 CONFIG_STM32F7_USART3=y\nttyS3 CONFIG_STM32F7_UART4=y\nttyS4 CONFIG_STM32F7_USART6=y\nttyS5 CONFIG_STM32F7_UART7=y\nttyS6 CONFIG_STM32F7_UART8=y\n")])])]),a("p",[t._v("DEBUG 콘솔 매핑을 가져오기 위해 "),a("code",[t._v("SERIAL_CONSOLE")]),t._v("에 대한 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/nuttx-config/nsh/defconfig#L212",target:"_blank",rel:"noopener noreferrer"}},[t._v("defconfig 파일"),a("OutboundLink")],1),t._v("을 검색합니다. 아래에서 콘솔이 UART7에 있음을 알 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CONFIG_UART7_SERIAL_CONSOLE=y\n")])])]),a("h3",{attrs:{id:"board-config-h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#board-config-h"}},[t._v("#")]),t._v(" board_config.h")]),t._v(" "),a("p",[t._v("IO 보드가 있는 비행 콘트롤러의 경우 "),a("code",[t._v("PX4IO_SERIAL_DEVICE")]),t._v("를 검색하여 "),a("strong",[t._v("board_config.h")]),t._v("에서 PX4IO 연결을 확인합니다.")]),t._v(" "),a("p",[t._v("예: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/src/board_config.h#L59",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/src/board_config.h"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#define PX4IO_SERIAL_DEVICE            "/dev/ttyS6"\n#define PX4IO_SERIAL_TX_GPIO           GPIO_UART8_TX\n#define PX4IO_SERIAL_RX_GPIO           GPIO_UART8_RX\n#define PX4IO_SERIAL_BASE              STM32_UART8_BASE\n')])])]),a("p",[t._v("따라서 PX4IO는 "),a("code",[t._v("ttyS6")]),t._v("에 있습니다(이전 섹션에서 이미 알고 있는 UART8에 매핑되는 것도 볼 수 있습니다).")]),t._v(" "),a("h3",{attrs:{id:"결합"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#결합"}},[t._v("#")]),t._v(" 결합")]),t._v(" "),a("p",[t._v("최종 매핑은 다음과 같습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ttyS0 CONFIG_STM32F7_USART1=y GPS1\nttyS1 CONFIG_STM32F7_USART2=y TEL1\nttyS2 CONFIG_STM32F7_USART3=y TEL2\nttyS3 CONFIG_STM32F7_UART4=y TEL4\nttyS4 CONFIG_STM32F7_USART6=y\nttyS5 CONFIG_STM32F7_UART7=y DEBUG\nttyS6 CONFIG_STM32F7_UART8=y PX4IO\n")])])]),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html#serial-port-mapping"}},[t._v("비행 콘트롤러 문서")]),t._v("의 결과 표는 다음과 같습니다.")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("장치")]),t._v(" "),a("th",[t._v("포트")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("UART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("GPS")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM1 (흐름 제어)")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("TELEM2 (흐름 제어)")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS3")]),t._v(" "),a("td",[t._v("TELEM4")])]),t._v(" "),a("tr",[a("td",[t._v("USART6")]),t._v(" "),a("td",[t._v("/dev/ttyS4")]),t._v(" "),a("td",[t._v("RC SBUS")])]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("/dev/ttyS5")]),t._v(" "),a("td",[t._v("디버그 콘솔")])]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("/dev/ttyS6")]),t._v(" "),a("td",[t._v("PX4IO")])])])]),t._v(" "),a("h2",{attrs:{id:"기타-아키텍처"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기타-아키텍처"}},[t._v("#")]),t._v(" 기타 아키텍처")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("기여를 환영합니다!")])])])}),[],!1,null,null,null);_.default=v.exports}}]);