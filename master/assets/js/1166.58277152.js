(window.webpackJsonp=window.webpackJsonp||[]).push([[1166],{2164:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"픽스호크-시리즈-보조-컴퓨터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#픽스호크-시리즈-보조-컴퓨터"}},[t._v("#")]),t._v(" 픽스호크 시리즈 보조 컴퓨터")]),t._v(" "),a("p",[t._v("Pixhawk 보드에 연결된 보조 컴퓨터(라즈베리 파이, Odroid, Tegra K1)는  동일한 방식으로 작동합니다. 보조 컴퓨터 연결 직렬 포트 "),a("code",[t._v("TELEM 2")]),t._v("를 사용하여 연결합니다. 통신 포맷은 "),a("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),a("OutboundLink")],1),t._v("입니다.")]),t._v(" "),a("h2",{attrs:{id:"픽스호크-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#픽스호크-설정"}},[t._v("#")]),t._v(" 픽스호크 설정")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("설정 가능한 직렬 포트")]),t._v("에서 MAVLink를 활성화하십시오.")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("일반적으로 "),a("code",[t._v("TELEM 2")]),t._v(" 포트는 보조 컴퓨터에 사용됩니다.")])]),t._v(" "),a("p",[a("code",[t._v("TELEM 2")]),t._v("에서 다음 매개변수를 사용하여, 보조 컴퓨터 메시지 전송을 설정합니다.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" = "),a("code",[t._v("TELEM 2")]),t._v(" ("),a("code",[t._v("MAV_1_CONFIG")]),t._v("는 "),a("code",[t._v("TELEM 2")]),t._v(" 포트 매핑 목적으로 주로 사용됩니다)")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" = "),a("code",[t._v("Onboard")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(" = "),a("code",[t._v("921600")]),t._v(" (로그 스트리밍 또는 FastRTPS 활용 목적으로 921600 이상의 값을 권장합니다)")],1)]),t._v(" "),a("p",[t._v("자세한 내용은 "),a("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink 주변 장치(GCS/OSD/보조컴퓨터)")]),t._v("를 참고하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"보조-컴퓨터-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-설정"}},[t._v("#")]),t._v(" 보조 컴퓨터 설정")]),t._v(" "),a("p",[t._v("MAVLink를 수신하기위하여 보조 컴퓨터의 직렬 포트와 통신하는 소프트웨어를 실행하여합니다. 가장 일반적인 옵션은 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[t._v("ROS 노드 통신용 "),a("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("MAVROS")])],1),t._v(" "),a("li",[t._v("개별 작성 코드를 연결용 "),a("a",{attrs:{href:"https://github.com/mavlink/c_uart_interface_example",target:"_blank",rel:"noopener noreferrer"}},[t._v("C/C++ 예제 코드"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("직렬과 UDP 간에 MAVLink를 라우팅하기 위한 "),a("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 라우터"),a("OutboundLink")],1),t._v("(권장) 또는 "),a("a",{attrs:{href:"https://ardupilot.org/mavproxy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVProxy"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"하드웨어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),a("p",[t._v("아래의 방법에 따라 직렬 포트를 연결합니다. 모든 Pixhawk 직렬 포트는 3.3V에서 작동하며 5V 레벨과 호환됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("최신 보조 컴퓨터는 대부분 하드웨어 UART에서 1.8V 레벨만 지원하며 3.3V 레벨에서는  손상될 수 있습니다. 레벨 시프터를 사용하십시오. 대부분의 경우 액세스 가능한 하드웨어 직렬 포트에는 이미 일부 기능(모뎀 또는 콘솔)이 연결되어 있으며, 사용하기 전에 "),a("em",[t._v("Linux에서 재구성")]),t._v("하여야 합니다.")])]),t._v(" "),a("p",[t._v("확실하고 안전한 방법은 아래의 결선표를 참고하여 FTDI 칩을 내장한 USB-직렬 변환 보드를 사용하는 것입니다. 이것은 항상 작동하며, 설정도 간편합니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("TELEM2")]),t._v(" "),a("th"),t._v(" "),a("th",[t._v("FTDI")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("+5V (red)")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("연결 금지!")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("TX  (출력)")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("FTDI RX (황) (입력)")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("RX  (입력)")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("FTDI TX (적황) (출력)")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("CTS (입력)")]),t._v(" "),a("td",[t._v("6")]),t._v(" "),a("td",[t._v("FTDI RTS (녹) (출력)")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("RTS (출력)")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("FTDI CTS (갈) (입력)")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("FTDI GND (흑)")])])])]),t._v(" "),a("h2",{attrs:{id:"linux에서-소프트웨어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux에서-소프트웨어-설정"}},[t._v("#")]),t._v(" Linux에서 소프트웨어 설정")]),t._v(" "),a("p",[t._v("Linux에서 USB FTDI의 기본 이름은 "),a("code",[t._v("\\dev\\ttyUSB0")]),t._v(" 입니다. USB 또는 Arduino에 연결된 두 번째 FTDI가 있는 경우에는 "),a("code",[t._v("\\dev\\ttyUSB1")]),t._v("으로 등록됩니다. 첫 번째 연결된 것과 두 번째 연결된 것 사이의 혼란을 피하기 위하여, USB 장치의 공급업체 및 제품 ID에 따라 "),a("code",[t._v("ttyUSBx")]),t._v("에서 친숙한 이름으로 심볼릭 링크를 만드는 것이 좋습니다.")]),t._v(" "),a("p",[a("code",[t._v("lsusb")]),t._v("를 사용하여 공급업체 및 제품 ID를 조회할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ lsusb\n\nBus 006 Device 002: ID 0bda:8153 Realtek Semiconductor Corp. Bus 006 Device 001: ID 1d6b:0003 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(" root hub\nBus 005 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\nBus 004 Device 002: ID 05e3:0616 Genesys Logic, Inc. Bus 004 Device 001: ID 1d6b:0003 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(" root hub\nBus 003 Device 004: ID "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2341")]),t._v(":0042 Arduino SA Mega "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2560")]),t._v(" R3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CDC ACM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nBus 003 Device 005: ID 26ac:0011\nBus 003 Device 002: ID 05e3:0610 Genesys Logic, Inc. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("-port hub\nBus 003 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\nBus 002 Device 001: ID 1d6b:0001 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" root hub\nBus 001 Device 002: ID 0bda:8176 Realtek Semiconductor Corp. RTL8188CUS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("802")]),t._v(".11n WLAN Adapter\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n")])])]),a("p",[t._v("Arduino는 "),a("code",[t._v("버스 003 장치 004: ID 2341:0042 Arduino SA Mega 2560 R3(CDC ACM)")]),t._v("을 사용합니다.")]),t._v(" "),a("p",[t._v("Pixhawk는 "),a("code",[t._v("버스 003 장치 005: ID 26ac:0011")]),t._v("을 사용합니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("기기를 찾을 수 없으면, 플러그를 뽑은 다음 "),a("code",[t._v("lsusb")]),t._v("를 실행하고, 플러그를 꽂고 "),a("code",[t._v("lsusb")]),t._v("를 다시 실행하여 추가된 기기를 확인할 수 있습니다.")])]),t._v(" "),a("p",[t._v("따라서, 다음 내용으로 "),a("code",[t._v("/etc/udev/rules.d/99-pixhawk.rules")]),t._v("라는 파일에 새 UDEV 규칙을 생성하여 idVendor 및 idProduct를 귀하의 것으로 변경할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBSYSTEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tty"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idVendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2341"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0042"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYMLINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ttyArduino"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBSYSTEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tty"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idVendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26ac"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0011"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYMLINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ttyPixhawk"')]),t._v("\n")])])]),a("p",[t._v("마지막으로, "),a("strong",[t._v("재부팅")]),t._v(" 후에 어떤 장치들이 사용되는 지를 알수 있으며, "),a("code",[t._v("/dev/ttyUSB0")]),t._v(" 대신 "),a("code",[t._v("/dev/ttyPixhawk")]),t._v("를 스크립트에 추가하십시오.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("루트로 스크립트를 실행할 필요가 없도록, "),a("code",[t._v("usermod")]),t._v("를 통해 "),a("code",[t._v("tty")]),t._v(" 및 "),a("code",[t._v("dialout")]),t._v(" 그룹을 현재 사용자에게 추가합니다.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tty")]),t._v(" ros-user\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G dialout ros-user\nnewgrp ros-user\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);