(window.webpackJsonp=window.webpackJsonp||[]).push([[814],{2901:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pixfalcon-비행-콘트롤러-단종됨"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixfalcon-비행-콘트롤러-단종됨"}},[t._v("#")]),t._v(" Pixfalcon 비행 콘트롤러 (단종됨)")]),t._v(" "),a("Badge",{attrs:{type:"error",text:"Discontinued"}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This flight controller has been "),a("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[t._v("discontinued")]),t._v(" and is no longer commercially available.")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("PX4 does not manufacture this (or any) autopilot.\n소형화를 위하여 가진 IO가 적습니다.")])]),t._v(" "),a("p",[t._v("The Pixfalcon autopilot (designed by "),a("a",{attrs:{href:"https://holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),a("sup",[t._v("®")]),a("OutboundLink")],1),t._v(") is binary-compatible (FMUv2) derivative of the "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")]),t._v(" design that has been optimized for space-constrained applications such as FPV racers. It has less IO to allow for the reduction in size.")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(898),alt:"Pixfalcon hero image"}})]),t._v(" "),a("h2",{attrs:{id:"요약"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#요약"}},[t._v("#")]),t._v(" 요약")]),t._v(" "),a("ul",[a("li",[t._v("메인 시스템 온칩: "),a("a",{attrs:{href:"http://www.st.com/web/en/catalog/mmc/FM141/SC1169/SS1577/LN1789",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32F427"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("CPU : 단정밀도 FPU의 180MHz ARM"),a("sup",[t._v("®")]),t._v(" Cortexex"),a("sup",[t._v("®")]),t._v("  M4")]),t._v(" "),a("li",[t._v("RAM : 256KB SRAM (L1)")])])]),t._v(" "),a("li",[t._v("페일세이프 시스템 온칩 : STM32F100\n"),a("ul",[a("li",[t._v("CPU: 24 MHz ARM Cortex M3")]),t._v(" "),a("li",[t._v("RAM : 8KB SRAM")])])]),t._v(" "),a("li",[t._v("GPS: u-blox"),a("sup",[t._v("®")]),t._v(" M8 (번들)")])]),t._v(" "),a("h3",{attrs:{id:"연결성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#연결성"}},[t._v("#")]),t._v(" 연결성")]),t._v(" "),a("ul",[a("li",[t._v("I2C 1개")]),t._v(" "),a("li",[t._v("UART 2개(하나는 원격 측정/OSD 용, 흐름 제어 없음)")]),t._v(" "),a("li",[t._v("수동 오버라이드 기능이 있는 PWM 8개")]),t._v(" "),a("li",[t._v("S.BUS / PPM 입력")])]),t._v(" "),a("h2",{attrs:{id:"구매처"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구매처"}},[t._v("#")]),t._v(" 구매처:")]),t._v(" "),a("p",[t._v("하드웨어 옵션:")]),t._v(" "),a("p",[t._v("Optional hardware:")]),t._v(" "),a("ul",[a("li",[t._v("Optical flow: PX4 Flow unit from manufacturer "),a("a",{attrs:{href:"https://holybro.com/products/px4flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Digital Airspeed sensor from manufacturer "),a("a",{attrs:{href:"https://holybro.com/products/digital-air-speed-sensor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro"),a("OutboundLink")],1),t._v(" or distributor "),a("a",{attrs:{href:"https://hobbyking.com/en_us/hkpilot-32-digital-air-speed-sensor-and-pitot-tube-set.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("텔레메트리가 통합 화면 디스플레이\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://hobbyking.com/en_us/micro-hkpilot-telemetry-radio-module-with-on-screen-display-osd-unit-433mhz.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking OSD + EU 텔레메트리 (433 MHz)"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("순수 텔레메트리 옵션:\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://hobbyking.com/en_us/apm-pixhawk-wireless-wifi-radio-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking 와이파이 텔레메트리"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/telemetry/sik_radio.html"}},[t._v("SIK Radios")])],1)])])]),t._v(" "),a("h2",{attrs:{id:"펌웨어-빌드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-빌드"}},[t._v("#")]),t._v(" 펌웨어 빌드")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),a("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),a("p",[t._v("이 보드에는 디버그 포트가 없습니다. 즉, "),a("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v(" 이나 "),a("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[t._v("SWD 인터페이스")]),t._v(" (JTAG)에 접속 포트가 존재하지 않습니다.")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_fmu-v2_default\n")])])]),a("h2",{attrs:{id:"디버그-포트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#디버그-포트"}},[t._v("#")]),t._v(" 디버그 포트")]),t._v(" "),a("p",[t._v("개발자는 SWD용 보드 테스트 패드와 STM32F4 (IC) TX와 RX에 와이어를 납땜하여 콘솔을 획득할 수 있습니다.")]),t._v(" "),a("p",[t._v("Developers will need to solder wires to the board test pads for SWD, and to the STM32F4 (IC) TX and RX to get a console.")]),t._v(" "),a("h2",{attrs:{id:"시리얼-포트-매핑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시리얼-포트-매핑"}},[t._v("#")]),t._v(" 시리얼 포트 매핑")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("장치")]),t._v(" "),a("th",[t._v("포트")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("UART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("IO 디버그")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM1 (흐름 제어)")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("GPS")])])])])],1)}),[],!1,null,null,null);e.default=o.exports},898:function(t,e,r){t.exports=r.p+"assets/img/hardware-pixfalcon.8787439d.png"}}]);