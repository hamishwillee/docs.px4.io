(window.webpackJsonp=window.webpackJsonp||[]).push([[1422],{2753:function(t,e,_){"use strict";_.r(e);var a=_(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"시리얼-포트-매핑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#시리얼-포트-매핑"}},[t._v("#")]),t._v(" 시리얼 포트 매핑")]),t._v(" "),_("p",[t._v('직렬 포트(UART), 장치(예: "ttyS0")와 PX4에서 활성화된 특정 기능(예: TELEM1, TELEM2, GPS1, RC SBUS, 디버그 콘솔)간의 매핑 방법을 설명합니다.')]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("지침은 비행 콘트롤러 문서에서 직렬 포트 매핑 테이블을 생성합니다. 예: "),_("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html#serial-port-mapping"}},[t._v("Pixhawk 4 > 직렬 포트 매핑")]),t._v(".")],1)]),t._v(" "),_("h2",{attrs:{id:"stmxxyyy의-nuttx"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#stmxxyyy의-nuttx"}},[t._v("#")]),t._v(" STMxxyyy의 NuttX")]),t._v(" "),_("p",[t._v("보드 설정 파일을 검사하여 STMxxyyy 아키텍처에서 NuttX 빌드에 대한 매핑 획득 방법을 설명합니다. FMUv5를 사용하지만, 다른 FMU 버전/NuttX 보드에도 유사하게 확장할 수 있습니다.")]),t._v(" "),_("h3",{attrs:{id:"default-cmake"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#default-cmake"}},[t._v("#")]),t._v(" default.cmake")]),t._v(" "),_("p",[_("strong",[t._v("default.cmake")]),t._v('는 여러 직렬 포트 매핑을 나열합니다(텍스트 "SERIAL_PORTS" 검색).')]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake#L13-L17",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/default.cmake"),_("OutboundLink")],1),t._v("에서:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("SERIAL_PORTS\n    GPS1:/dev/ttyS0\n    TEL1:/dev/ttyS1\n    TEL2:/dev/ttyS2\n    TEL4:/dev/ttyS3\n")])])]),_("p",[t._v("Alternatively you can launch boardconfig using "),_("code",[t._v("make px4_fmu-v5 boardconfig")]),t._v(" and access the serial port menu")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("    CONFIG_STM32F7_UART4=y\nCONFIG_STM32F7_UART7=y\nCONFIG_STM32F7_UART8=y\nCONFIG_STM32F7_USART1=y\nCONFIG_STM32F7_USART2=y\nCONFIG_STM32F7_USART3=y\nCONFIG_STM32F7_USART6=y\n")])])]),_("h3",{attrs:{id:"nsh-defconfig"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nsh-defconfig"}},[t._v("#")]),t._v(" nsh/defconfig")]),t._v(" "),_("p",[t._v("The "),_("em",[t._v("nsh/defconfig")]),t._v(" allows you to determine which ports are defined, whether they are UART or USARTs, and the mapping between USART/UART and device. You can also determine which port is used for the "),_("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("serial/debug console")]),t._v(".")],1),t._v(" "),_("p",[t._v("Open the board's defconfig file, for example: "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/boards/px4/fmu-v5/nuttx-config/nsh/defconfig#L215-L221",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/nuttx-config/nsh/defconfig"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v('Search for the text "ART" until you find a section like with entries formatted like '),_("code",[t._v("CONFIG_STM32xx_USARTn=y")]),t._v(" (where "),_("code",[t._v("xx")]),t._v(" is a processor type and "),_("code",[t._v("n")]),t._v(" is a port number). For example:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("ttyS0 CONFIG_STM32F7_USART1=y\nttyS1 CONFIG_STM32F7_USART2=y\nttyS2 CONFIG_STM32F7_USART3=y\nttyS3 CONFIG_STM32F7_UART4=y\nttyS4 CONFIG_STM32F7_USART6=y\nttyS5 CONFIG_STM32F7_UART7=y\nttyS6 CONFIG_STM32F7_UART8=y\n")])])]),_("p",[t._v("The entries tell you which ports are defined, and whether they are UART or USART.")]),t._v(" "),_("p",[t._v("DEBUG 콘솔 매핑을 가져오기 위해 "),_("code",[t._v("SERIAL_CONSOLE")]),t._v("에 대한 "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/nuttx-config/nsh/defconfig#L212",target:"_blank",rel:"noopener noreferrer"}},[t._v("defconfig 파일"),_("OutboundLink")],1),t._v("을 검색합니다. 아래에서 콘솔이 UART7에 있음을 알 수 있습니다.")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("CONFIG_UART7_SERIAL_CONSOLE=y\n")])])]),_("p",[t._v("To get the DEBUG console mapping we search the "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/nuttx-config/nsh/defconfig#L212",target:"_blank",rel:"noopener noreferrer"}},[t._v("defconfig file"),_("OutboundLink")],1),t._v(" for "),_("code",[t._v("SERIAL_CONSOLE")]),t._v(". Below we see that the console is on UART7:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('#define PX4IO_SERIAL_DEVICE            "/dev/ttyS6"\n#define PX4IO_SERIAL_TX_GPIO           GPIO_UART8_TX\n#define PX4IO_SERIAL_RX_GPIO           GPIO_UART8_RX\n#define PX4IO_SERIAL_BASE              STM32_UART8_BASE\n')])])]),_("h3",{attrs:{id:"board-config-h"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#board-config-h"}},[t._v("#")]),t._v(" board_config.h")]),t._v(" "),_("p",[t._v("예: "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/src/board_config.h#L59",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/src/board_config.h"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("따라서 PX4IO는 "),_("code",[t._v("ttyS6")]),t._v("에 있습니다(이전 섹션에서 이미 알고 있는 UART8에 매핑되는 것도 볼 수 있습니다).")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("ttyS0 CONFIG_STM32F7_USART1=y GPS1\nttyS1 CONFIG_STM32F7_USART2=y TEL1\nttyS2 CONFIG_STM32F7_USART3=y TEL2\nttyS3 CONFIG_STM32F7_UART4=y TEL4\nttyS4 CONFIG_STM32F7_USART6=y\nttyS5 CONFIG_STM32F7_UART7=y DEBUG\nttyS6 CONFIG_STM32F7_UART8=y PX4IO\n")])])]),_("p",[t._v("최종 매핑은 다음과 같습니다.")]),t._v(" "),_("h3",{attrs:{id:"결합"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#결합"}},[t._v("#")]),t._v(" 결합")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html#serial-port-mapping"}},[t._v("비행 콘트롤러 문서")]),t._v("의 결과 표는 다음과 같습니다.")],1),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("ttyS0 CONFIG_STM32F7_USART1=y GPS1\nttyS1 CONFIG_STM32F7_USART2=y TEL1\nttyS2 CONFIG_STM32F7_USART3=y TEL2\nttyS3 CONFIG_STM32F7_UART4=y TEL4\nttyS4 CONFIG_STM32F7_USART6=y\nttyS5 CONFIG_STM32F7_UART7=y DEBUG\nttyS6 CONFIG_STM32F7_UART8=y PX4IO\n")])])]),_("p",[t._v("In the "),_("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html#serial-port-mapping"}},[t._v("flight controller docs")]),t._v(" the resulting table is:")],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("UART")]),t._v(" "),_("th",[t._v("장치")]),t._v(" "),_("th",[t._v("포트")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("UART1")]),t._v(" "),_("td",[t._v("/dev/ttyS0")]),t._v(" "),_("td",[t._v("GPS")])]),t._v(" "),_("tr",[_("td",[t._v("USART2")]),t._v(" "),_("td",[t._v("/dev/ttyS1")]),t._v(" "),_("td",[t._v("TELEM1 (흐름 제어)")])]),t._v(" "),_("tr",[_("td",[t._v("USART3")]),t._v(" "),_("td",[t._v("/dev/ttyS2")]),t._v(" "),_("td",[t._v("TELEM2 (흐름 제어)")])]),t._v(" "),_("tr",[_("td",[t._v("UART4")]),t._v(" "),_("td",[t._v("/dev/ttyS3")]),t._v(" "),_("td",[t._v("TELEM4")])]),t._v(" "),_("tr",[_("td",[t._v("USART6")]),t._v(" "),_("td",[t._v("/dev/ttyS4")]),t._v(" "),_("td",[t._v("RC SBUS")])]),t._v(" "),_("tr",[_("td",[t._v("UART7")]),t._v(" "),_("td",[t._v("/dev/ttyS5")]),t._v(" "),_("td",[t._v("디버그 콘솔")])]),t._v(" "),_("tr",[_("td",[t._v("UART8")]),t._v(" "),_("td",[t._v("/dev/ttyS6")]),t._v(" "),_("td",[t._v("PX4IO")])])])]),t._v(" "),_("h2",{attrs:{id:"기타-아키텍처"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#기타-아키텍처"}},[t._v("#")]),t._v(" 기타 아키텍처")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("Contributions welcome!")])])])}),[],!1,null,null,null);e.default=r.exports}}]);