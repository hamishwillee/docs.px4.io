(window.webpackJsonp=window.webpackJsonp||[]).push([[1202],{2237:function(t,_,a){"use strict";a.r(_);var v=a(19),r=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"px4-시스템-콘솔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-시스템-콘솔"}},[t._v("#")]),t._v(" PX4 시스템 콘솔")]),t._v(" "),a("p",[t._v("PX4 "),a("em",[t._v("시스템 콘솔")]),t._v("은 시스템에 대한 낮은 수준의 액세스, 디버그 출력 및 시스템 부팅 프로세스 분석을 제공합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("시스템이 부팅되지 않으면, 콘솔을 디버깅에 사용해야 합니다. 그렇지 않으면, "),a("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v("이 더 적합할 수 있습니다. 설정이 훨씬 쉽고 "),a("RouterLink",{attrs:{to:"/ko/debug/consoles.html#console_vs_shell"}},[t._v("동일한 여러 작업")]),t._v("에 사용할 수 있기 때문입니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"콘솔-배선"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#콘솔-배선"}},[t._v("#")]),t._v(" 콘솔 배선")]),t._v(" "),a("p",[t._v("콘솔은 "),a("a",{attrs:{href:"https://www.digikey.com/product-detail/en/TTL-232R-3V3/768-1015-ND/1836393",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.3V FTDI"),a("OutboundLink")],1),t._v(" 케이블을 사용하여, 컴퓨터 USB 포트에 연결할 수 있는 (보드별) UART를 통하여 사용할 수 있습니다. 이렇게 하면, 터미널 응용 프로그램을 사용하여 콘솔에 접근할 수 있습니다.")]),t._v(" "),a("p",[t._v("Pixhawk 콘트롤러 제조업체는 "),a("a",{attrs:{href:"#pixhawk_debug_port"}},[t._v("Pixhawk 커넥터 표준")]),t._v("을 준수하는 전용 "),a("em",[t._v("디버그 포트")]),t._v("를 통해 콘솔 UART 및 SWD(JTAG) 디버그 인터페이스를 제공하여야 합니다. 불행히도, 일부 보드는 이 표준 이전이거나 비준수품입니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("다양한 보드를 대상으로 하는 개발자는 "),a("em",[t._v("디버그 어댑터")]),t._v("를 사용하여 여러 보드를 간단하게 연결할 수 있습니다. 예를 들어, "),a("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode 프로브"),a("OutboundLink")],1),t._v("는 "),a("a",{attrs:{href:"#pixhawk_debug_port"}},[t._v("Pixhawk 디버그 포트")]),t._v("와 기타 여러 보드용 커넥터와 함께 제공됩니다.")])]),t._v(" "),a("p",[t._v("아래 섹션은 많은 공통 보드에 대한 배선 및 시스템 콘솔 정보에 대한 개요를 설명합니다.")]),t._v(" "),a("h3",{attrs:{id:"보드별-연결-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보드별-연결-방법"}},[t._v("#")]),t._v(" 보드별 연결 방법")]),t._v(" "),a("p",[t._v("시스템 콘솔 UART 핀아웃/디버그 포트는 일반적으로 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("자동 조종 장치 개요 페이지")]),t._v("에 문서화되어 있습니다(일부는 아래에 링크되어 있음).")],1),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html#console-port"}},[t._v("3DR Pixhawk v1 비행 콘트롤러")]),t._v("("),a("RouterLink",{attrs:{to:"/ko/flight_controller/mro_pixhawk.html#debug-ports"}},[t._v("mRo Pixhawk")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32.html#debug-port"}},[t._v("Holybro pix32")]),t._v("에도 적용됨)")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk3_pro.html#debug-port"}},[t._v("Pixhawk 3")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_controller/pixracer.html#debug-port"}},[t._v("Pixracer")])],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"pixhawk_debug_port"}})]),t._v(" "),a("h3",{attrs:{id:"pixhawk-디버그-포트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-디버그-포트"}},[t._v("#")]),t._v(" Pixhawk 디버그 포트")]),t._v(" "),a("p",[t._v("Pixhawk 커넥터 표준을 준수하는 비행 콘트롤러는 "),a("a",{attrs:{href:"https://pixhawk.org/pixhawk-connector-standard/#dronecode_debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 표준 디버그 포트"),a("OutboundLink")],1),t._v("를 사용합니다.")]),t._v(" "),a("p",[t._v("포트/FTDI 매핑은 아래와 같습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pixhawk 디버그 포트")]),t._v(" "),a("th",[t._v("-")]),t._v(" "),a("th",[t._v("FTDI")]),t._v(" "),a("th",[t._v("-")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (적)")]),t._v(" "),a("td",[t._v("TARGET PROCESSOR VOLTAGE")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("N/C (SWD/JTAG 디버깅에 사용됨)")])]),t._v(" "),a("tr",[a("td",[t._v("2 (흑)")]),t._v(" "),a("td",[t._v("CONSOLE TX (출력)")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("FTDI RX (황)")])]),t._v(" "),a("tr",[a("td",[t._v("3 (흑)")]),t._v(" "),a("td",[t._v("CONSOLE RX (입력)")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("FTDI TX (적황)")])]),t._v(" "),a("tr",[a("td",[t._v("4 (흑)")]),t._v(" "),a("td",[t._v("SWDIO")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("N/C (SWD/JTAG 디버깅에 사용됨)")])]),t._v(" "),a("tr",[a("td",[t._v("5 (흑)")]),t._v(" "),a("td",[t._v("SWCLK")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("N/C (SWD/JTAG 디버깅에 사용됨)")])]),t._v(" "),a("tr",[a("td",[t._v("6 (흑)")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("FTDI GND (흑)")])])])]),t._v(" "),a("h2",{attrs:{id:"콘솔-열기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#콘솔-열기"}},[t._v("#")]),t._v(" 콘솔 열기")]),t._v(" "),a("p",[t._v("콘솔 연결이 연결된 후, 선택한 기본 직렬 포트 도구 또는 아래에 설명된 기본값을 사용합니다.")]),t._v(" "),a("h3",{attrs:{id:"linux-mac-운영체제-screen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-mac-운영체제-screen"}},[t._v("#")]),t._v(" Linux / Mac 운영체제: Screen")]),t._v(" "),a("p",[t._v("Ubuntu에 screen 명령어를 설치합니다. Mac OS에 이미 설치되어 있습니다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v("\n")])])]),a("ul",[a("li",[t._v("시리얼: Pixhawk v1 / Pixracer는 57600 보드를 사용합니다.")])]),t._v(" "),a("p",[t._v("화면을 BAUDRATE baud, 8 데이터 비트, 1 정지 비트를 오른쪽 직렬 포트에 연결합니다("),a("code",[t._v("ls /dev/tty*")]),t._v("를 사용하고 USB 장치를 뽑거나 다시 꽂을 때 어떻게 변하는 지 관찰). 일반적인 이름은 Linux의 경우 "),a("code",[t._v("/dev/ttyUSB0")]),t._v("와 "),a("code",[t._v("/dev/ttyACM0")]),t._v("이고, Mac OS의 경우 "),a("code",[t._v("/dev/tty.usbserial-ABCBD")]),t._v("입니다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" /dev/ttyXXX BAUDRATE 8N1\n")])])]),a("h3",{attrs:{id:"윈도우-putty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#윈도우-putty"}},[t._v("#")]),t._v(" 윈도우: PuTTY")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PuTTY"),a("OutboundLink")],1),t._v("를 다운로드하고 실행합니다.")]),t._v(" "),a("p",[t._v("'직렬 연결'을 선택하고, 포트 매개변수를 다음과 같이 설정합니다.")]),t._v(" "),a("ul",[a("li",[t._v("57600 baud")]),t._v(" "),a("li",[t._v("8 data bits")]),t._v(" "),a("li",[t._v("1 stop bit")])])])}),[],!1,null,null,null);_.default=r.exports}}]);