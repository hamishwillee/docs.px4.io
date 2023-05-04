(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{2645:function(_,v,t){"use strict";t.r(v);var r=t(19),d=Object(r.a)({},(function(){var _=this,v=_.$createElement,r=_._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"라즈베리파이-pilotpi-실드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#라즈베리파이-pilotpi-실드"}},[_._v("#")]),_._v(" 라즈베리파이 PilotPi 실드")]),_._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[_._v("PX4에서는 이 제품을 제조하지 않습니다. 하드웨어 지원과 호환 문제는 [제조사](mailto:lhf2613@gmail.com)에 문의하십시오.")])]),_._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),r("p",[_._v("이 비행 콘트롤러에 대한 PX4는 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[_._v("테스트 단계")]),_._v("입니다.")],1)]),_._v(" "),r("p",[r("em",[_._v("PilotPi")]),_._v(" 실드는 라즈베리파이에서 직접 PX4 자동조종장치를 실행하는 솔루션입니다. 리눅스와 PX4 측면에서 지속적으로 업데이트되고 있는, 저비용 고확장성의 플랫폼입니다. 모든 구성 요소가 라즈베리파이와 PX4 커뮤니티의 업스트림 지원을 제공하므로, 독점 드라이버가 필요하지 않습니다. PCB와 회로도도 오픈 소스입니다.")]),_._v(" "),r("p",[r("img",{attrs:{src:t(902),alt:"PilotPi with RPi 4B"}})]),_._v(" "),r("h2",{attrs:{id:"요약"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#요약"}},[_._v("#")]),_._v(" 요약")]),_._v(" "),r("ul",[r("li",[_._v("지원 라즈베리파이 보드:\n"),r("ul",[r("li",[_._v("라즈베리파이 2B/3B/3B+/4B")])])]),_._v(" "),r("li",[_._v("지원 운영체제:\n"),r("ul",[r("li",[_._v("라즈베리파이 OS")]),_._v(" "),r("li",[_._v("우분투 서버 (armhf/arm64)")])])]),_._v(" "),r("li",[_._v("가속도계/자이로\n"),r("ul",[r("li",[_._v("ICM42688P")])])]),_._v(" "),r("li",[_._v("자력계:\n"),r("ul",[r("li",[_._v("IST8310")])])]),_._v(" "),r("li",[_._v("기압계:\n"),r("ul",[r("li",[_._v("MS5611")])])]),_._v(" "),r("li",[_._v("PWM:\n"),r("ul",[r("li",[_._v("PCA9685")])])]),_._v(" "),r("li",[_._v("ADC:\n"),r("ul",[r("li",[_._v("ADS1115")])])]),_._v(" "),r("li",[_._v("전원:\n"),r("ul",[r("li",[_._v("전압감지기능이 내장 3~6S 배터리.")]),_._v(" "),r("li",[_._v("USB 케이블 전원 공급")])])]),_._v(" "),r("li",[_._v("구매처: "),r("em",[_._v("배송 준비중")])])]),_._v(" "),r("h2",{attrs:{id:"연결성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#연결성"}},[_._v("#")]),_._v(" 연결성")]),_._v(" "),r("p",[_._v("Shield는 다음을 제공합니다.")]),_._v(" "),r("ul",[r("li",[_._v("PWM 출력 채널 16개")]),_._v(" "),r("li",[_._v("GPS 커넥터")]),_._v(" "),r("li",[_._v("텔레메트리 커넥터")]),_._v(" "),r("li",[_._v("외부 I2C 버스 커넥터("),r("strong",[_._v("참고:")]),_._v(" CSI 카메라와 충돌)")]),_._v(" "),r("li",[_._v("RC 입력 포트(SBUS)")]),_._v(" "),r("li",[_._v("ADC 채널 범위 0 ~ 5V 3개")]),_._v(" "),r("li",[_._v("2*8 2.54mm 미사용 GPIO 커넥터")])]),_._v(" "),r("p",[_._v("라즈베리파이 직접 액세스")]),_._v(" "),r("ul",[r("li",[_._v("USB 커넥터 4개")]),_._v(" "),r("li",[_._v("CSI 커넥터("),r("strong",[_._v("참고:")]),_._v(" 외부 I2C 버스와 충돌)")]),_._v(" "),r("li",[_._v("기타")])]),_._v(" "),r("h2",{attrs:{id:"권장-배선"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#권장-배선"}},[_._v("#")]),_._v(" 권장 배선")]),_._v(" "),r("p",[r("img",{attrs:{src:t(903),alt:"PilotPi PowerPart 배선"}})]),_._v(" "),r("p",[r("img",{attrs:{src:t(904),alt:"PilotPi SensorPart 배선"}})]),_._v(" "),r("h2",{attrs:{id:"핀배열"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[_._v("#")]),_._v(" 핀배열")]),_._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),r("p",[_._v("구형 GH1.25 커넥터를 사용합니다.\n배선은 Pixhawk 2.4.8과 호환됩니다.")])]),_._v(" "),r("h3",{attrs:{id:"커넥터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#커넥터"}},[_._v("#")]),_._v(" 커넥터")]),_._v(" "),r("h4",{attrs:{id:"gps-커넥터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-커넥터"}},[_._v("#")]),_._v(" GPS 커넥터")]),_._v(" "),r("p",[r("code",[_._v("/dev/ttySC0")]),_._v("에 매핑됨")]),_._v(" "),r("table",[r("thead",[r("tr",[r("th",[_._v("핀")]),_._v(" "),r("th",[_._v("신호")]),_._v(" "),r("th",[_._v("전압")])])]),_._v(" "),r("tbody",[r("tr",[r("td",[_._v("1")]),_._v(" "),r("td",[_._v("VCC")]),_._v(" "),r("td",[_._v("+5V")])]),_._v(" "),r("tr",[r("td",[_._v("2")]),_._v(" "),r("td",[_._v("TX")]),_._v(" "),r("td",[_._v("+3V3")])]),_._v(" "),r("tr",[r("td",[_._v("3")]),_._v(" "),r("td",[_._v("RX")]),_._v(" "),r("td",[_._v("+3V3")])]),_._v(" "),r("tr",[r("td",[_._v("4")]),_._v(" "),r("td",[_._v("NC")]),_._v(" "),r("td",[_._v("+3V3")])]),_._v(" "),r("tr",[r("td",[_._v("5")]),_._v(" "),r("td",[_._v("NC")]),_._v(" "),r("td",[_._v("+3V3")])]),_._v(" "),r("tr",[r("td",[_._v("6")]),_._v(" "),r("td",[_._v("GND")]),_._v(" "),r("td",[_._v("GND")])])])]),_._v(" "),r("h4",{attrs:{id:"텔레메트리-커넥터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리-커넥터"}},[_._v("#")]),_._v(" 텔레메트리 커넥터")]),_._v(" "),r("p",[r("code",[_._v("/dev/ttySC1")]),_._v("에 매핑됨")]),_._v(" "),r("table",[r("thead",[r("tr",[r("th",[_._v("핀")]),_._v(" "),r("th",[_._v("신호")]),_._v(" "),r("th",[_._v("전압")])])]),_._v(" "),r("tbody",[r("tr",[r("td",[_._v("1")]),_._v(" "),r("td",[_._v("VCC")]),_._v(" "),r("td",[_._v("+5V")])]),_._v(" "),r("tr",[r("td",[_._v("2")]),_._v(" "),r("td",[_._v("TX")]),_._v(" "),r("td",[_._v("+3V3")])]),_._v(" "),r("tr",[r("td",[_._v("3")]),_._v(" "),r("td",[_._v("RX")]),_._v(" "),r("td",[_._v("+3V3")])]),_._v(" "),r("tr",[r("td",[_._v("4")]),_._v(" "),r("td",[_._v("CTS")]),_._v(" "),r("td",[_._v("+3V3")])]),_._v(" "),r("tr",[r("td",[_._v("5")]),_._v(" "),r("td",[_._v("RTS")]),_._v(" "),r("td",[_._v("+3V3")])]),_._v(" "),r("tr",[r("td",[_._v("6")]),_._v(" "),r("td",[_._v("GND")]),_._v(" "),r("td",[_._v("GND")])])])]),_._v(" "),r("h4",{attrs:{id:"외부-i2c-커넥터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#외부-i2c-커넥터"}},[_._v("#")]),_._v(" 외부 I2C 커넥터")]),_._v(" "),r("p",[r("code",[_._v("/dev/i2c-0")]),_._v("에 매핑됨")]),_._v(" "),r("table",[r("thead",[r("tr",[r("th",[_._v("핀")]),_._v(" "),r("th",[_._v("신호")]),_._v(" "),r("th",[_._v("전압")])])]),_._v(" "),r("tbody",[r("tr",[r("td",[_._v("1")]),_._v(" "),r("td",[_._v("VCC")]),_._v(" "),r("td",[_._v("+5V")])]),_._v(" "),r("tr",[r("td",[_._v("2")]),_._v(" "),r("td",[_._v("SCL")]),_._v(" "),r("td",[_._v("+3v3(풀업)")])]),_._v(" "),r("tr",[r("td",[_._v("3")]),_._v(" "),r("td",[_._v("SDA")]),_._v(" "),r("td",[_._v("+3v3(풀업)")])]),_._v(" "),r("tr",[r("td",[_._v("4")]),_._v(" "),r("td",[_._v("GND")]),_._v(" "),r("td",[_._v("GND")])])])]),_._v(" "),r("h4",{attrs:{id:"rc-및-adc2-3-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-및-adc2-3-4"}},[_._v("#")]),_._v(" RC 및 ADC2/3/4")]),_._v(" "),r("p",[_._v("RC는 RX 라인의 신호 인버터 스위치로 "),r("code",[_._v("/dev/ttyAMA0")]),_._v("에 매핑됩니다.")]),_._v(" "),r("table",[r("thead",[r("tr",[r("th",[_._v("핀")]),_._v(" "),r("th",[_._v("신호")]),_._v(" "),r("th",[_._v("전압")])])]),_._v(" "),r("tbody",[r("tr",[r("td",[_._v("1")]),_._v(" "),r("td",[_._v("RC")]),_._v(" "),r("td",[_._v("+3V3 ~ +5V")])]),_._v(" "),r("tr",[r("td",[_._v("2")]),_._v(" "),r("td",[_._v("VCC")]),_._v(" "),r("td",[_._v("+5V")])]),_._v(" "),r("tr",[r("td",[_._v("3")]),_._v(" "),r("td",[_._v("GND")]),_._v(" "),r("td",[_._v("GND")])])])]),_._v(" "),r("ul",[r("li",[_._v("ADC1은 배터리 전압 모니터링을 위해 전압 분배기에 내부적으로 연결됩니다.")]),_._v(" "),r("li",[_._v("ADC2는 사용되지 않습니다.")]),_._v(" "),r("li",[_._v("ADC3는 아날로그 속도 센서에 연결할 수 있습니다.")]),_._v(" "),r("li",[_._v("ADC4에는 시스템 전압 레벨을 모니터링하기 위하여 ADC와 VCC 사이에 점퍼 캡이 있습니다.")])]),_._v(" "),r("table",[r("thead",[r("tr",[r("th",[_._v("핀")]),_._v(" "),r("th",[_._v("신호")]),_._v(" "),r("th",[_._v("전압")])])]),_._v(" "),r("tbody",[r("tr",[r("td",[_._v("1")]),_._v(" "),r("td",[_._v("ADCx")]),_._v(" "),r("td",[_._v("0V ~ +5V")])]),_._v(" "),r("tr",[r("td",[_._v("2")]),_._v(" "),r("td",[_._v("VCC")]),_._v(" "),r("td",[_._v("+5V")])]),_._v(" "),r("tr",[r("td",[_._v("3")]),_._v(" "),r("td",[_._v("GND")]),_._v(" "),r("td",[_._v("GND")])])])]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),r("p",[_._v("ADC 3과 4는 대체 VCC 소스가 있습니다.\n'Vref' 스위치가 켜져 있으면 'VCC' 핀이 REF5050에 의해 구동됩니다.")])]),_._v(" "),r("h4",{attrs:{id:"보드-상단의-미사용-gpio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보드-상단의-미사용-gpio"}},[_._v("#")]),_._v(" 보드 상단의 미사용 GPIO")]),_._v(" "),r("table",[r("thead",[r("tr",[r("th",[_._v("실드 핀")]),_._v(" "),r("th",[_._v("BCM")]),_._v(" "),r("th",[_._v("WiringPi")]),_._v(" "),r("th",[_._v("RPi 핀")])])]),_._v(" "),r("tbody",[r("tr",[r("td",[_._v("1")]),_._v(" "),r("td",[_._v("3V3")]),_._v(" "),r("td",[_._v("3V3")]),_._v(" "),r("td",[_._v("3V3")])]),_._v(" "),r("tr",[r("td",[_._v("2")]),_._v(" "),r("td",[_._v("5V")]),_._v(" "),r("td",[_._v("5V")]),_._v(" "),r("td",[_._v("5V")])]),_._v(" "),r("tr",[r("td",[_._v("3")]),_._v(" "),r("td",[_._v("4")]),_._v(" "),r("td",[_._v("7")]),_._v(" "),r("td",[_._v("7")])]),_._v(" "),r("tr",[r("td",[_._v("4")]),_._v(" "),r("td",[_._v("14")]),_._v(" "),r("td",[_._v("15")]),_._v(" "),r("td",[_._v("8")])]),_._v(" "),r("tr",[r("td",[_._v("5")]),_._v(" "),r("td",[_._v("17")]),_._v(" "),r("td",[_._v("0")]),_._v(" "),r("td",[_._v("11")])]),_._v(" "),r("tr",[r("td",[_._v("6")]),_._v(" "),r("td",[_._v("27")]),_._v(" "),r("td",[_._v("2")]),_._v(" "),r("td",[_._v("13")])]),_._v(" "),r("tr",[r("td",[_._v("7")]),_._v(" "),r("td",[_._v("22")]),_._v(" "),r("td",[_._v("3")]),_._v(" "),r("td",[_._v("15")])]),_._v(" "),r("tr",[r("td",[_._v("8")]),_._v(" "),r("td",[_._v("23")]),_._v(" "),r("td",[_._v("4")]),_._v(" "),r("td",[_._v("16")])]),_._v(" "),r("tr",[r("td",[_._v("9")]),_._v(" "),r("td",[_._v("7")]),_._v(" "),r("td",[_._v("11")]),_._v(" "),r("td",[_._v("26")])]),_._v(" "),r("tr",[r("td",[_._v("10")]),_._v(" "),r("td",[_._v("5")]),_._v(" "),r("td",[_._v("21")]),_._v(" "),r("td",[_._v("29")])]),_._v(" "),r("tr",[r("td",[_._v("11")]),_._v(" "),r("td",[_._v("6")]),_._v(" "),r("td",[_._v("22")]),_._v(" "),r("td",[_._v("31")])]),_._v(" "),r("tr",[r("td",[_._v("12")]),_._v(" "),r("td",[_._v("12")]),_._v(" "),r("td",[_._v("26")]),_._v(" "),r("td",[_._v("32")])]),_._v(" "),r("tr",[r("td",[_._v("13")]),_._v(" "),r("td",[_._v("13")]),_._v(" "),r("td",[_._v("23")]),_._v(" "),r("td",[_._v("33")])]),_._v(" "),r("tr",[r("td",[_._v("14")]),_._v(" "),r("td",[_._v("16")]),_._v(" "),r("td",[_._v("27")]),_._v(" "),r("td",[_._v("36")])]),_._v(" "),r("tr",[r("td",[_._v("15")]),_._v(" "),r("td",[_._v("26")]),_._v(" "),r("td",[_._v("25")]),_._v(" "),r("td",[_._v("37")])]),_._v(" "),r("tr",[r("td",[_._v("16")]),_._v(" "),r("td",[_._v("GND")]),_._v(" "),r("td",[_._v("GND")]),_._v(" "),r("td",[_._v("GND")])])])]),_._v(" "),r("h3",{attrs:{id:"스위치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스위치"}},[_._v("#")]),_._v(" 스위치")]),_._v(" "),r("h4",{attrs:{id:"rc-인버터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-인버터"}},[_._v("#")]),_._v(" RC 인버터")]),_._v(" "),r("p",[_._v("이 스위치는 RX 라인의 신호 극성을 결정합니다. "),r("code",[_._v("UART_RX = SW xor RC_INPUT")])]),_._v(" "),r("ul",[r("li",[_._v("켜짐: SBUS (신호 반전)에 적합")]),_._v(" "),r("li",[_._v("꺼짐: 보존됨")])]),_._v(" "),r("h4",{attrs:{id:"vref"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vref"}},[_._v("#")]),_._v(" Vref")]),_._v(" "),r("p",[_._v("ADC 3과 4는 다음에 의해 구동되는 VCC를 갖습니다.")]),_._v(" "),r("ul",[r("li",[_._v("켜진 경우 REF5050에서 Vref 출력")]),_._v(" "),r("li",[_._v("꺼져있는 경우 라즈베리파이에서 직접 5V 핀")])]),_._v(" "),r("h4",{attrs:{id:"부팅-모드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#부팅-모드"}},[_._v("#")]),_._v(" 부팅 모드")]),_._v(" "),r("p",[_._v("이 스위치는 Pin22(BCM25)에 연결됩니다. 시스템 rc 스크립트는 해당 값을 확인하고, PX4가 시스템 부팅시 시작 여부를 결정합니다.")]),_._v(" "),r("ul",[r("li",[_._v("켜짐: 자동으로 PX4 시작")]),_._v(" "),r("li",[_._v("꺼짐: PX4를 시작하지 않습니다.")])]),_._v(" "),r("h2",{attrs:{id:"개발자-가이드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#개발자-가이드"}},[_._v("#")]),_._v(" 개발자 가이드")]),_._v(" "),r("p",[_._v("라즈베리파이 OS에 대한 특정 지침을 참고하십시오.")]),_._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_pilotpi_rpios.html"}},[_._v("Raspberry Pi OS Lite (armhf)")])],1),_._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_pilotpi_ubuntu_server.html"}},[_._v("우분투 서버 (arm64 & armhf)")])],1)])])}),[],!1,null,null,null);v.default=d.exports},902:function(_,v,t){_.exports=t.p+"assets/img/hardware-pilotpi4b.f6daa9bb.png"},903:function(_,v,t){_.exports=t.p+"assets/img/pilotpi_pwr_wiring.19c73603.png"},904:function(_,v,t){_.exports=t.p+"assets/img/pilotpi_sens_wiring.dee9cc62.png"}}]);