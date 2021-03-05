(window.webpackJsonp=window.webpackJsonp||[]).push([[921],{1883:function(t,e,a){"use strict";a.r(e);var s=a(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"픽스호크-시리즈용-보조-컴퓨터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#픽스호크-시리즈용-보조-컴퓨터"}},[t._v("#")]),t._v(" 픽스호크 시리즈용 보조 컴퓨터")]),t._v(" "),a("p",[t._v("픽스호크 계열 보드에 보조 컴퓨터(라즈베리 파이, 오드로이드, 테그라 K1)를 붙이는 작업의 방식은 동일합니다. 보조 컴퓨터를 연결하려는 용도의 포트 "),a("code",[t._v("TELEM 2")]),t._v("에 직렬 포트로 연결하면 됩니다. 이 연결의 메시지 형식은 "),a("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),a("OutboundLink")],1),t._v(" 입니다.")]),t._v(" "),a("h2",{attrs:{id:"픽스호크-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#픽스호크-설정"}},[t._v("#")]),t._v(" 픽스호크 설정")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("설정 가능한 직렬 포트")]),t._v("에 MAVLink를 활성화하십시오.")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Typically the "),a("code",[t._v("TELEM 2")]),t._v(" port is used for a companion computer.")])]),t._v(" "),a("p",[t._v("더 많은 정보는 "),a("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink 주변기기 편(GCS/OSD/보조기기)")]),t._v("을 참고하십시오.")],1),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" = "),a("code",[t._v("TELEM 2")]),t._v(" ("),a("code",[t._v("MAV_1_CONFIG")]),t._v("는 "),a("code",[t._v("TELEM 2")]),t._v(" 포트 매핑 목적으로 주로 활용합니다)")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" = "),a("code",[t._v("Onboard")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(" = "),a("code",[t._v("921600")]),t._v(" (로그 스트리밍 또는 FastRTPS 활용 목적으로 921600 이상 값을 권장합니다)")],1)]),t._v(" "),a("p",[t._v("For more information see "),a("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals (GCS/OSD/Companion)")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"보조-컴퓨터-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-설정"}},[t._v("#")]),t._v(" 보조 컴퓨터 설정")]),t._v(" "),a("p",[t._v("다음 절차에 따라 직렬 포트를 연결하십시오. 모든 픽스호크 직렬 포트는 3.3V ~ 5V 레벨 호환으로 동작합니다.")]),t._v(" "),a("ul",[a("li",[t._v("ROS 노드와 통신 용도로 사용하는 "),a("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("MAVROS")])],1),t._v(" "),a("li",[t._v("개별 작성 코드를 연결할 "),a("a",{attrs:{href:"https://github.com/mavlink/c_uart_interface_example",target:"_blank",rel:"noopener noreferrer"}},[t._v("C/C++ 예제 코드"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("시리얼 인터페이스와 UDP 통신간 라우팅 작업을 수행하는 "),a("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 라우터"),a("OutboundLink")],1),t._v("(추천) 또는 "),a("a",{attrs:{href:"https://ardupilot.org/mavproxy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVProxy"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"하드웨어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),a("p",[t._v("확실히 안전한 방법은 아래의 결선표를 참고하여 FTDI 칩을 내장한 USB-to-serial 변환 보드를 사용하는 방법입니다. 얼마든지 동작하고, 설정하기도 쉽습니다.")]),t._v(" "),a("p",[t._v("리눅스에서 USB FTDI 기본 명칭은 "),a("code",[t._v("/dev/ttyUSB0")]),t._v("와 같습니다. USB로 두번째 FTDI 칩을 연결했을 경우나, 아두이노에 연결했다면 "),a("code",[t._v("/dev/ttyUSB1")]),t._v("이 됩니다. 첫번째 연결 하드웨어와 두번째 연결 하드웨어의 혼동을 막으려면 "),a("code",[t._v("ttyUSBx")]),t._v("의 심볼릭 링크를 USB 장치의 제조사, 제폼 ID 에 따라 알기 쉬운 이름으로 만드시는 방안을 추천해드립니다.\n:::")]),t._v(" "),a("p",[t._v("The safe bet is to use an FTDI Chip USB-to-serial adapter board and the wiring below. This always works and is easy to set up.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("TELEM2")]),t._v(" "),a("th"),t._v(" "),a("th",[t._v("FTDI")]),t._v(" "),a("th",[t._v("FTDI")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("DO NOT CONNECT!")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("Tx  (출력)")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("Rx  (입력)")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("CTS (입력)")]),t._v(" "),a("td",[t._v("6")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("RTS (출력)")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("h2",{attrs:{id:"리눅스-프로그램-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#리눅스-프로그램-설정"}},[t._v("#")]),t._v(" 리눅스 프로그램 설정")]),t._v(" "),a("p",[t._v("On Linux the default name of a USB FTDI would be like "),a("code",[t._v("\\dev\\ttyUSB0")]),t._v(". If you have a second FTDI linked on the USB or an Arduino, it will registered as "),a("code",[t._v("\\dev\\ttyUSB1")]),t._v(". To avoid the confusion between the first plugged and the second plugged, we recommend you to create a symlink from "),a("code",[t._v("ttyUSBx")]),t._v(" to a friendly name, depending on the Vendor and Product ID of the USB device.")]),t._v(" "),a("p",[t._v("픽스호크 장비는 "),a("code",[t._v("Bus 003 Device 005: ID 26ac:0011")]),t._v("입니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ lsusb\n\nBus 006 Device 002: ID 0bda:8153 Realtek Semiconductor Corp. Bus 006 Device 001: ID 1d6b:0003 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(" root hub\nBus 005 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\nBus 004 Device 002: ID 05e3:0616 Genesys Logic, Inc. Bus 004 Device 001: ID 1d6b:0003 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(" root hub\nBus 003 Device 004: ID "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2341")]),t._v(":0042 Arduino SA Mega "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2560")]),t._v(" R3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CDC ACM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nBus 003 Device 005: ID 26ac:0011\nBus 003 Device 002: ID 05e3:0610 Genesys Logic, Inc. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("-port hub\nBus 003 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\nBus 002 Device 001: ID 1d6b:0001 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" root hub\nBus 001 Device 002: ID 0bda:8176 Realtek Semiconductor Corp. RTL8188CUS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("802")]),t._v(".11n WLAN Adapter\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n")])])]),a("p",[t._v("이 과정을 수행하여 "),a("code",[t._v("/etc/udev/rules.d/99-pixhawk.rules")]),t._v(" 파일에 다음 내용에서 idVendor와 idProduct를 여러분의 장비에 맞게 바꾸어 추가한 새 UDEV 규칙을 만들 수 있습니다.")]),t._v(" "),a("p",[t._v("마지막으로 "),a("strong",[t._v("reboot")]),t._v("를 수행하면 방금 작성한 스크립트를 통해, 어떤 장치를 연결했을 때 "),a("code",[t._v("/dev/ttyUSB0")]),t._v(" 대신 "),a("code",[t._v("/dev/ttyPixhawk")]),t._v("가 뜨는지 확인할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you do not find your device, unplug it, execute "),a("code",[t._v("lsusb")]),t._v(", plug it, execute "),a("code",[t._v("lsusb")]),t._v(" again and see the added device.")])]),t._v(" "),a("p",[t._v("Therefore, we can create a new UDEV rule in a file called "),a("code",[t._v("/etc/udev/rules.d/99-pixhawk.rules")]),t._v(" with the following content, changing the idVendor and idProduct to yours.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBSYSTEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tty"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idVendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2341"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0042"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYMLINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ttyArduino"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBSYSTEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tty"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idVendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26ac"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0011"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYMLINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ttyPixhawk"')]),t._v("\n")])])]),a("p",[t._v("Finally, after a "),a("strong",[t._v("reboot")]),t._v(" you can be sure to know which device is what and put "),a("code",[t._v("/dev/ttyPixhawk")]),t._v(" instead of "),a("code",[t._v("/dev/ttyUSB0")]),t._v(" in your scripts.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Be sure to add yourself in the "),a("code",[t._v("tty")]),t._v(" and "),a("code",[t._v("dialout")]),t._v(" groups via "),a("code",[t._v("usermod")]),t._v(" to avoid to have to execute scripts as root.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tty")]),t._v(" ros-user\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G dialout ros-user\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);