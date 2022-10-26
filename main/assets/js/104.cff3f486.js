(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{2332:function(t,_,v){"use strict";v.r(_);var r=v(19),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),r("p",[t._v('케이블은 플라이웨이, "화장실 볼링" 및 일반적으로 열악한 비행을 비롯한 문제를 일으킬 수 있는 '),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Electromagnetic_interference",target:"_blank",rel:"noopener noreferrer"}},[t._v("전자기 간섭(EMI)"),r("OutboundLink")],1),t._v("의 일반적인 원인입니다. 이러한 문제는 UAV에서 적절한 케이블을 사용하여 피할 수 있습니다.")]),t._v(" "),r("p",[t._v("드론 케이블링을 설계할 때 다음 기본 개념을 염두에 두어야 합니다.")]),t._v(" "),r("ul",[r("li",[t._v("고전압 케이블과 신호 케이블은 최대한 분리합니다.")]),t._v(" "),r("li",[t._v("케이블 길이는 유선 구성 요소를 쉽게 처리할 수 있도록 최대한 짧게 합니다. 와이어 장력은 충돌 착륙 시에도 가능한 기체 변형을 견딜 수 있어야 합니다. 와이어가 먼저 끊어지지 않는 것이 좋습니다.")]),t._v(" "),r("li",[t._v("초과 길이를 줄이기 위한 케이블을 말지 않는 것이 좋습니다. 가능 하면 길이를 짧게 하십시오!")]),t._v(" "),r("li",[t._v("디지털 신호는 전송 속도를 줄여 소모 에너지를 줄이고, 데이터 전송의 견고성을 높일 수 있습니다. 이는 높은 데이터 전송률이 필요하지 않는 경우에는 더 긴 케이블을 사용할 수 있음을 의미합니다.")])]),t._v(" "),r("h2",{attrs:{id:"신호-배선"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#신호-배선"}},[t._v("#")]),t._v(" 신호 배선")]),t._v(" "),r("p",[t._v("신호 전송 프로토콜들은 특성이 각기 다르므로 목적에 따라 사용되는 케이블의 사양이 달라집니다.")]),t._v(" "),r("p",[t._v("이 항목에서는 드론 하드웨어 공급업체들의 "),r("a",{attrs:{href:"#cable-colour-coding"}},[t._v("색상 코딩")]),t._v("과 함께 신호 프로토콜별로 케이블 연결에 대한 구체적인 지침을 제공합니다.")]),t._v(" "),r("h3",{attrs:{id:"i2c-케이블"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#i2c-케이블"}},[t._v("#")]),t._v(" I²C 케이블")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/I%C2%B2C",target:"_blank",rel:"noopener noreferrer"}},[t._v("I2C 버스"),r("OutboundLink")],1),t._v("는 센서 연결에 널리 사용됩니다. 여러 공급업체의 케이블 색상이 다음 표에 지정되어 있습니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("Pixhawk 색상")]),t._v(" "),r("th",[t._v("ThunderFly 색상")]),t._v(" "),r("th",[t._v("CUAV 색상 (I2C/CAN)")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("SCL")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")])]),t._v(" "),r("tr",[r("td",[t._v("SDA")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(337),alt:"녹색"}}),t._v(" 녹색")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")])])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode 표준"),r("OutboundLink")],1),t._v("은 자동 조종 장치의 SDA 및 SCL 신호에 1.5k 옴 풀업 저항을 가정합니다.")]),t._v(" "),r("h4",{attrs:{id:"케이블-꼬기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#케이블-꼬기"}},[t._v("#")]),t._v(" 케이블 꼬기")]),t._v(" "),r("p",[t._v("I2C 버스 신호 혼선 및 전자기 호환성은 케이블 와이어를 적절하게 비틀면 크게 향상될 수 있습니다. "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Twisted_pair",target:"_blank",rel:"noopener noreferrer"}},[t._v("트위스트 페어"),r("OutboundLink")],1),t._v("는 센서 배선에 특히 중요합니다.")]),t._v(" "),r("ul",[r("li",[t._v("30cm 케이블 길이당 각 쌍 SCL/+5V 및 SDA/GND에 대해 10회 회전합니다."),r("img",{attrs:{src:v(356),alt:"I²C JST-GH 케이블"}})]),t._v(" "),r("li",[t._v("케이블 길이 30cm당 두 쌍을 함께 4회 감습니다."),r("img",{attrs:{src:v(543),alt:"I²C JST-GH 커넥터 상세"}})])]),t._v(" "),r("p",[t._v("적절한 트위스트 페어 케이블을 사용할 때 I²C 버스는 일반적으로 서브미터 규모 기체에 적합합니다. 대형 항공기의 경우 CAN 또는 기타 차동 신호 기반 인터페이스를 사용하는 것이 일반적으로 더 안정적입니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("이 권수/케이블 길이 권장 사항은 "),r("RouterLink",{attrs:{to:"/ko/sensor/airspeed_tfslot.html"}},[t._v("ThunderFly TFSLOT 속도 센서")]),t._v(" 및 "),r("RouterLink",{attrs:{to:"/ko/sensor/thunderfly_tachometer.html"}},[t._v("TFRPM01 회전 카운터")]),t._v("를 포함한 I2C 센서에 성공적으로 사용되었습니다. :::")],1),t._v(" "),r("h4",{attrs:{id:"풀업-저항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#풀업-저항"}},[t._v("#")]),t._v(" 풀업 저항")]),t._v(" "),r("p",[t._v("풀업 저항은 I2C 버스의 모든 끝 부분에 필요합니다. 이것은 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Electrical_termination",target:"_blank",rel:"noopener noreferrer"}},[t._v("신호 종료"),r("OutboundLink")],1),t._v("와 버스 유휴 신호 생성기의 역할을 모두 합니다.")]),t._v(" "),r("p",[t._v("풀업 저항의 정확한 값을 확인하기 위해 오실로스코프 측정이 필요한 경우가 있습니다. I2C 버스의 신호는 명확하고 예리한 직사각형과 같은 가장자리와 몇 볼트의 진폭을 가져야 합니다. 신호의 진폭이 낮은 경우 풀업 저항 값이 너무 낮으므로 줄여야 합니다. 반올림된 신호의 경우 풀업 저항 값이 너무 높습니다.")]),t._v(" "),r("h3",{attrs:{id:"uavcan-케이블"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-케이블"}},[t._v("#")]),t._v(" UAVCAN 케이블")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("Pixhawk")]),t._v(" "),r("th",[t._v("ThunderFly")]),t._v(" "),r("th",[t._v("Zubax")]),t._v(" "),r("th",[t._v("CUAV (I2C/CAN)")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("CAN_H")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")])]),t._v(" "),r("tr",[r("td",[t._v("CAN_L")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")])])])]),t._v(" "),r("h4",{attrs:{id:"케이블-꼬기-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#케이블-꼬기-2"}},[t._v("#")]),t._v(" 케이블 꼬기")]),t._v(" "),r("p",[t._v("I2C 케이블과 같은 이유로 CAN 케이블도 꼬는 것이 좋습니다. CAN의 경우 권장되는 비틀림은 다음과 같습니다.")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("30cm 케이블 길이당 각 쌍 GND/+5V 및 CAN_L/CAN_H에 대해 10회 회전합니다."),r("img",{attrs:{src:v(544),alt:"CAN JST-GH 케이블"}})])]),t._v(" "),r("li",[r("p",[t._v("케이블 길이 30cm당 두 쌍을 함께 4회 감습니다.")])])]),t._v(" "),r("h3",{attrs:{id:"spi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spi"}},[t._v("#")]),t._v(" SPI")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Serial_Peripheral_Interface",target:"_blank",rel:"noopener noreferrer"}},[t._v("SPI"),r("OutboundLink")],1),t._v("는 더 빠른 센서와 장치를 연결하는 데 사용되는 동기식 직렬 통신 인터페이스입니다. 이 프로토콜은 일반적으로 "),r("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[t._v("광류")]),t._v(" 센서 또는 특수 텔레메트리 모뎀을 연결에 사용됩니다.")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("Pixhawk 색상")]),t._v(" "),r("th",[t._v("ThunderFly 색상")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("SCK")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")])]),t._v(" "),r("tr",[r("td",[t._v("MISO")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(338),alt:"청색"}}),t._v(" 청색")])]),t._v(" "),r("tr",[r("td",[t._v("MOSI")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(337),alt:"녹색"}}),t._v(" 녹색")])]),t._v(" "),r("tr",[r("td",[t._v("CS!")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")])]),t._v(" "),r("tr",[r("td",[t._v("CS2")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(338),alt:"청색"}}),t._v(" 청색")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")])])])]),t._v(" "),r("h3",{attrs:{id:"uart"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uart"}},[t._v("#")]),t._v(" UART")]),t._v(" "),r("p",[t._v("UART는 주변 장치를 자동 조종 장치에 연결하는 데 사용됩니다. 기본적으로 UART는 네트웤을 지원하지 않으므로 두 장치를 직접 연결합니다. 자동 조종 장치와 "),r("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("무선 모뎀")]),t._v("을 연결하는 데 자주 사용됩니다.")],1),t._v(" "),r("p",[t._v("CTS 및 RTS는 데이터가 TX/RX 핀에서 전송되고 있음을 나타내는 데 사용되는 신호입니다. 이 핸드셰이크 메커니즘은 데이터 전송의 신뢰성을 높입니다. CTS 및 RTS는 장치에서 사용하지 않을 때 느슨한 상태로 남아 있을 수 있습니다.")]),t._v(" "),r("p",[t._v("연결 케이블은 교차되지 않습니다. 따라서, 이 직선 케이블로 자동 조종 장치와 주변 장치만 연결하면 됩니다. 장치는 RX/TX 및 RTS/CTS 핀을 교환하여 내부적으로 배선을 교차하여야 합니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("Pixhawk 색상")]),t._v(" "),r("th",[t._v("ThunderFly 색상")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("TX")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")])]),t._v(" "),r("tr",[r("td",[t._v("RX")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(337),alt:"녹색"}}),t._v(" 녹색")])]),t._v(" "),r("tr",[r("td",[t._v("CTS")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(338),alt:"청색"}}),t._v(" 청색")])]),t._v(" "),r("tr",[r("td",[t._v("RTS")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")])])])]),t._v(" "),r("p",[t._v("UART 신호는 저주파 EMI의 일반적인 소스이므로 케이블 길이를 최대한 최소화해야 합니다. UART 케이블은 꼬임이 필요하지 않습니다.")]),t._v(" "),r("h3",{attrs:{id:"gps-uart-와-안전"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-uart-와-안전"}},[t._v("#")]),t._v(" GPS(UART) 와 안전")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[t._v("GPS 수신기와 자력계")]),t._v("는 일반적으로 EMI에 매우 민감합니다. 따라서, RF 소스(고출력 케이블, ESC, 무선 모뎀 및 안테나)에서 멀리 떨어진 곳에 장착하여야 합니다. 케이블링이 잘못 설계된 경우 오동작할 수 있습니다.")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("Pixhawk 색상")]),t._v(" "),r("th",[t._v("ThunderFly 색상")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("TX")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")])]),t._v(" "),r("tr",[r("td",[t._v("RX")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(337),alt:"녹색"}}),t._v(" 녹색")])]),t._v(" "),r("tr",[r("td",[t._v("SCL")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")])]),t._v(" "),r("tr",[r("td",[t._v("SDA")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(337),alt:"녹색"}}),t._v(" 녹색")])]),t._v(" "),r("tr",[r("td",[t._v("SAFETY_SW")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")])]),t._v(" "),r("tr",[r("td",[t._v("SAFETY_SW_LED")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(338),alt:"청색"}}),t._v(" 청색")])]),t._v(" "),r("tr",[r("td",[t._v("+3V3")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("BUZZER")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(338),alt:"청색"}}),t._v(" 청색")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")])])])]),t._v(" "),r("h3",{attrs:{id:"gps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps"}},[t._v("#")]),t._v(" GPS")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("Pixhawk 색상")]),t._v(" "),r("th",[t._v("ThunderFly 색상")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("TX")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")])]),t._v(" "),r("tr",[r("td",[t._v("RX")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(337),alt:"녹색"}}),t._v(" 녹색")])]),t._v(" "),r("tr",[r("td",[t._v("SCL")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")])]),t._v(" "),r("tr",[r("td",[t._v("SDA")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(337),alt:"녹색"}}),t._v(" 녹색")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")])])])]),t._v(" "),r("p",[t._v("GPS 케이블은 UART 및 I2C 버스에 모두 연결됩니다. UART 배선은 꼬울 필요가 없으므로, 케이블의 길이는 짧을 수록 좋습니다.")]),t._v(" "),r("h3",{attrs:{id:"아날로그-신호-전원-모듈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#아날로그-신호-전원-모듈"}},[t._v("#")]),t._v(" 아날로그 신호(전원 모듈)")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("Pixhawk 색상")]),t._v(" "),r("th",[t._v("ThunderFly 색상")]),t._v(" "),r("th",[t._v("CUAV 색상")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("VCC")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("VCC")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("CURRENT")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")])]),t._v(" "),r("tr",[r("td",[t._v("VOLTAGE")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")]),t._v(" "),r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}}),t._v(" 노랑")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")])])])]),t._v(" "),r("p",[t._v("이 커넥터는 상대적으로 고전력 및 저전압 신호를 혼합한 예입니다. 아쉽게도 꼬임은 고전력 GND 및 VCC 전선에만 적용할 수 있습니다. 자동 조종 장치로 잡음이 많은 아날로그 신호를 송수신에는 별로 도움이 되지 않습니다.")]),t._v(" "),r("h3",{attrs:{id:"안전"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#안전"}},[t._v("#")]),t._v(" 안전")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("Pixhawk 색상")]),t._v(" "),r("th",[t._v("ThunderFly 색상")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("SAFE_VCC")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("SAFETY_SW_LED")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(338),alt:"청색"}}),t._v(" 청색")])]),t._v(" "),r("tr",[r("td",[t._v("SAFETY_SW")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}}),t._v(" 흰색")])]),t._v(" "),r("tr",[r("td",[t._v("BUZZER")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(338),alt:"청색"}}),t._v(" 청색")])]),t._v(" "),r("tr",[r("td",[t._v("+5V")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}}),t._v(" 빨강")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")]),t._v(" "),r("td",[r("img",{attrs:{src:v(326),alt:"검정"}}),t._v(" 검정")])])])]),t._v(" "),r("h2",{attrs:{id:"고전력-배선"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#고전력-배선"}},[t._v("#")]),t._v(" 고전력 배선")]),t._v(" "),r("p",[t._v("고전력 배선의 경우 가장 중요한 설계 기준은 충분한 전류가 흐를 수 있는 전선 굵기입니다. 일반적인 단면적 요구 사항은 와이어 전류 8A당 1mm²의 면적입니다.")]),t._v(" "),r("p",[t._v("실용적이지 않지만, 양극과 음극 전선을 함께 꼬는 것이 좋습니다.")]),t._v(" "),r("p",[t._v("고전력 케이블의 EMI는 자력계에 상당한 영향을 미칩니다. 이러한 이유로 고전력 케이블과 항법 자력계 사이에는 거리를 두는 것이 좋습니다.")]),t._v(" "),r("h3",{attrs:{id:"케이블-색상-코딩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#케이블-색상-코딩"}},[t._v("#")]),t._v(" 케이블 색상 코딩")]),t._v(" "),r("p",[t._v("대부분의 제조업체는 고압선에 빨간색을 사용하고 접지에 검정색을 사용합니다. 기타 색상은 제조사 재량입니다. "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 커넥터 표준"),r("OutboundLink")],1),t._v("에서는 VCC(Voltage Common Collector) 핀/케이블이 빨간색이면 됩니다.")]),t._v(" "),r("p",[t._v("신호 와이어의 색상은 특정 케이블을 식별하는 데 도움이 되어 드론을 더 쉽게 조립할 수 있습니다.")]),t._v(" "),r("p",[t._v("쉬운 케이블 식별을 위해 설계된 색상 코딩 체계는 다음 규칙을 따를 수 있습니다.")]),t._v(" "),r("ul",[r("li",[t._v("빨간색과 검은색은 전원용으로 예약되어 있습니다.")]),t._v(" "),r("li",[t._v("동일한 신호 유형은 동일한 색상을 가져야 합니다.")]),t._v(" "),r("li",[t._v("신호의 색상은 서로 인접한 와이어의 커넥터에서 반복되지 않습니다.")]),t._v(" "),r("li",[t._v("핀 수가 동일한 배선 하니스는 고유한 색상 순서를 가져야 합니다. 이것은 케이블 유형을 결정합니다. (매뉴얼에 사용된 사진에 특히 유용합니다.)")])]),t._v(" "),r("p",[t._v("이러한 규칙에 따라 설계된 케이블 색상의 예는 다음과 같습니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("색상")]),t._v(" "),r("th",[t._v("이름")]),t._v(" "),r("th",[t._v("선호하는 사용법")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("img",{attrs:{src:v(329),alt:"빨강"}})]),t._v(" "),r("td",[t._v("빨강")]),t._v(" "),r("td",[t._v("전원 전압")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:v(337),alt:"녹색"}})]),t._v(" "),r("td",[t._v("녹색")]),t._v(" "),r("td",[t._v("범용 신호")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:v(333),alt:"흰색"}})]),t._v(" "),r("td",[t._v("흰색")]),t._v(" "),r("td",[t._v("범용 신호")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:v(334),alt:"노랑"}})]),t._v(" "),r("td",[t._v("노랑")]),t._v(" "),r("td",[t._v("범용 신호")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:v(338),alt:"청색"}})]),t._v(" "),r("td",[t._v("청색")]),t._v(" "),r("td",[t._v("전원 복귀, 오픈 컬렉터 제어 신호")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:v(326),alt:"검정"}})]),t._v(" "),r("td",[t._v("검정")]),t._v(" "),r("td",[t._v("GND, 전원 반환 접지")])])])]),t._v(" "),t._v(" :::note 위의 규칙은 Thunderfly에서 제공하였으며 케이블 디자인에 사용됩니다.\n"),r("p",[t._v("Thunderfly 및 일부 다른 공급업체의 케이블 색상 코딩은 아래 섹션에 나와 있습니다. 핀 레이블은 자동 조종 장치 쪽의 핀 배치에 해당합니다. 모든 케이블은 직선(1:1)입니다. 크로스오버(예: UART)가 필요한 경우 장치의 내부 연결을 통해 해결하여야 합니다. :::")])])])}),[],!1,null,null,null);_.default=a.exports},326:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAKdJREFUKJGl00sKAjEQBNBHFnoN9VQ6p/VzAHHl7woKOhs/ILowEZWJOmNB0RBSHaq6wysCCoyxxzHWcTwPMuhhjRLXCpZYolsl3OKSESZe4r1Hg4DVD8LnBotkoYi+fhEm7jGASU1h4kiDVxN3Aa1c/F/QDjg3FJ8CZg3FU+6p5RbjU9p9/pwz9TZsg867h6777uZGV2JeJUwIMYMRdjjEOoweX37VDTuEhzlr8+oxAAAAAElFTkSuQmCC"},329:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAQFJREFUKJGV001OAmEQhOEnM0RFR2Y1e+Uoip5BOKB/B5C4E3RvXCl6BUkYhPhLPhcMCahEppJavp1UVzeLimJaGd2EfIO3hDyjG9NCZInqKU+HDC8JY0IgjAhtQoNhSg+7v8Aa/XMmoYD+8hmTGv35AVHK43/gzKdMUh4QiWkdkK8CzrxPHtOUcX1ZAgyEC0JGR0I+LgmPCNsMoi/WNpftf4m28Ml6VOFjXBIeocJ7VOXupiTcRZVbMc0GwzKZ96bbPqLo+XTFno/ney5Ur9E/+WfAyfTCnrHzM8puSm+fvE14KYCXote96W3f/wXOFMU0MzoJgw1eEwYZV0XGha/6Bp/07YEvuv60AAAAAElFTkSuQmCC"},333:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAUJJREFUKJGVk8FOwlAQRcdOF+8ljzer2Yuf0ha+QfhAWviANt1JZW9cKfoLktD2NUWTZtzQKCoIZ39ucudmAA7xEHHKzIUxplRK7YwxJTMXiDgFAA+OcENEr+PxuMrzXJqmERER55xkWSZRFFVEtAaA4S/RWrtZLBadnGA+n3fW2s33AI+IXv4Te5Ik6YjoGQA8QMTpaDQqzxF7wjAsEXECzHyf5/klrqRpKsy8BGNM2R/nXJxzMhgMtldKqbZtW3VsgmNorXee7/sfTdNcJDrnwPf9d09r/bharS6Si6IArfUDIOIkiqLqks5BEJSIeAuw3zlJkrN2ns1mXzvvubHWbuI4PhkQx3FnrX0DgOufVYZEtA7DsMyyTOq6FhGRuq4lTVMJgqAioqe/xB4PESfMvDTGbJVSrTFmy8x3+44HX/UJbya4/Sj1PIMAAAAASUVORK5CYII="},334:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAATNJREFUKJGVk81OwkAYRU86jRaYdlazF94EWn0G4fUEQbcSCDsBXRtXir6ChLaU+ANkXEATUNByk7s8X3LnZGA7lhDUtGYgJZHj8CElkdYMhKAGWOxJSSlezwLiXgczizBmjklCTLeNCXxipRgBxV+g5zK+brI08xW0q1eXLD2X8eYBSyle/gPTthosleIZsBCC2mlAlAVM6/tEQlBFa4a9TnbQzDGdG4zW9JGSKH2crE1CjCsJrcWCo3x+n4DdKRRgvuDYsm2+ZrPD4CQB2+bTyuV4vLs/DB4MIefwgBBUA5/4kM2VMpEQnMPac6uRzfPlxYbndUqey7hZ//tAs87S83gDTn5OKSrFyPeJum3MdLICppOV10qZWCmedoFpLCGoak1fSkLH4V1KQq25XW/c+lXfwTxSVbVoOAQAAAAASUVORK5CYII="},337:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAWRJREFUKJGV0z1LI1EUxvH/PZfcSdCJsiLRThN8wUKbZfEjKH4A3+p8JUXQ3Xq3N2i3a2PEQuwMi8QtFrcJmzGMmRnIiYUKExGTPNUtzu8pDudCbwTLDr49wzMBGRPhmQDfnmHZASQ9bFLvIjk5peQKbIz5LGTBGYi7UIugErS4Te5p6xpQT+MiObmkPDHOl5Ge9p5chMpho0lbPwN1Awg5uaE8UfoQvqYaKt8avwl1SbBsUXKFgSDA6ogw46axbFpG7R67n+YoZAayAOStx3U0KSS6zEJ2cAiwmIVEVwTF4Ux/kI5nQPEEISHuDocjBSEWnFxTi4bDNzE4uRIeO/tUgtZQuBI88Ng5EDp85zb5RzXUgeB5qNSTezr8EEBp6xpHjWbfgmqofG38fzlRTa95lpycUHRTbIzlmfcgK8/LqcVwHLT4k/wl1HXg7r1uwbKNb3/hmSYZ08YzTXz7E8sWb37VE0lteh9XrLjgAAAAAElFTkSuQmCC"},338:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAJOAAACTgEl1tp0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAP9JREFUKJGVk0luAjEQRZ/cKAwheOU95ChAcgbggAw5ACi70MkesSLDFRIJN93KRMtZVDcJES3wl0olWX6Wfv0y7EtBMAATQt1C5UO6CeUcRYEuQb/AdQS3DhIHzkHsYOagG4F+AloHwMYb3KQCFNUklXu/DyjQz8fBvMYp6MfMQjCAK3samFfHQtAHzL149IGnDswcmWbiCccOLtYKtmdQK0qgQOfAd1lB6QsSTzgGSp8Kqkt48IRDoLpAptaN/Dy3LQQ92OU8PjHn4d+cgd2GjY48MEqh8Qo0/xtpye52rOzyJgM2Wa7tCPTqEJhLyQzMHOprqLxLN3eZx71f9QPTVe2BIfIcIAAAAABJRU5ErkJggg=="},356:function(t,_,v){t.exports=v.p+"assets/img/i2c_jst-gh_cable.24f25e77.jpg"},543:function(t,_,v){t.exports=v.p+"assets/img/i2c_jst-gh_connector.d1d4e5d7.jpg"},544:function(t,_,v){t.exports=v.p+"assets/img/can_jst-gh_cable.21d7e217.jpg"}}]);