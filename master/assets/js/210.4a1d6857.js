(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1296:function(t,_,v){t.exports=v.p+"assets/img/lidar_lite2_standard_wiring_spec.7b34be81.jpg"},1297:function(t,_,v){t.exports=v.p+"assets/img/lidar_lite_2_interface_wiring.a388ce2c.jpg"},1298:function(t,_,v){t.exports=v.p+"assets/img/lidarlite_wiring_scheme_pixhawk.c1ad38b5.jpg"},1299:function(t,_,v){t.exports=v.p+"assets/img/lidarlite_wiring_pins_cables.49cf1b65.jpg"},2644:function(t,_,v){"use strict";v.r(_);var a=v(19),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lidar-lite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite"}},[t._v("#")]),t._v(" Lidar-Lite")]),t._v(" "),a("p",[t._v("LIDAR-Lite는 드론, 로봇 또는 무인 차량용 소형 고성능 광학 원거리 측정 센서입니다. I2C 또는 PWM에 연결됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:v(395),alt:"LidarLite v3"}})]),t._v(" "),a("h2",{attrs:{id:"구매처"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구매처"}},[t._v("#")]),t._v(" 구매처")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://buy.garmin.com/en-AU/AU/p/557294",target:"_blank",rel:"noopener noreferrer"}},[t._v("LIDAR-Lite v3"),a("OutboundLink")],1),t._v(" (5cm - 40m)")])]),t._v(" "),a("h2",{attrs:{id:"핀배열"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[t._v("#")]),t._v(" 핀배열")]),t._v(" "),a("p",[t._v("Lidar-Lite (v2, v3) 핀배열은 아래와 같습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("핀")]),t._v(" "),a("th",[t._v("명칭")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("POWER_IN")]),t._v(" "),a("td",[t._v("전원 공급. 4.75-5.5V DC 공칭, 최대 6V DC.")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("POWER_EN")]),t._v(" "),a("td",[t._v("액티브 하이는 3.3V 마이크로 컨트롤러 레귤레이터의 작동을 가능하게 합니다. 낮음은 보드를 절전 모드로 전환하고 40μA 미만을 소모합니다. (내장 100K pull-up)")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("모드 선택 제어")]),t._v(" "),a("td",[t._v("트리거 (하이-로우 에지) PWM 출력 (하이) 제공")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("SCL")]),t._v(" "),a("td",[t._v("I2C Clock")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("SDA")]),t._v(" "),a("td",[t._v("I2C 데이터")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("신호/전원 접지.")])])])]),t._v(" "),a("h2",{attrs:{id:"배선"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),a("p",[a("em",[t._v("Lidar-Lite v3")]),t._v("는 PWM 또는 I2C와 함께 사용합니다. 구형 모델에서는 PWM을 권장합니다. 거리계는 일부 ESC/BEC(PWM 또는 I2C를 통해 연결됨)로 별도 전원이 공급되어야합니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("블루 라벨이 아닌 Lidar-Lite (v1) 장치의 I2C 인터페이스에는 안정성 제한이 있으며, 따라서 모든 실버 라벨 세대의 Lidar-Lite 센서는 I2C 인터페이스에서 제외됩니다. 이러한 센서에는 PWM 인터페이스(아래에 자세히 설명)를 사용하는 것이 좋습니다. 파란색 레이블(v2) 장치는 일부 조건에서 5V 미만 전원을 사용하며, 일정한 오프셋을 나타낼 수 있습니다. 이는 현재 (2015 년 4 분기) 제조업체에서 조사 중이며, 특정 운영 조건을 준수하여 잠재적으로 해결 가능합니다. 권장되는 강력한 설정은 PWM 인터페이스를 가진 v1 장치입니다.")])]),t._v(" "),a("p",[t._v("Lidar-Lite 3("),a("a",{attrs:{href:"http://static.garmin.com/pumac/LIDAR_Lite_v3_Operation_Manual_and_Technical_Specifications.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("작동 설명서"),a("OutboundLink")],1),t._v("에서)의 표준 배선 방법은 다음과 같습니다. Lidar-Lite v2와 v3은 커넥터의 핀 순서가 역전된다는 점을 제외하면 동일합니다 (즉, 커넥터가 뒤집힌 것처럼).")]),t._v(" "),a("p",[a("img",{attrs:{src:v(1296),alt:"LidarLite v3 - Garmin 사양의 표준 배선"}})]),t._v(" "),a("h3",{attrs:{id:"pwm-인터페이스-배선"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwm-인터페이스-배선"}},[t._v("#")]),t._v(" PWM 인터페이스 배선")]),t._v(" "),a("p",[t._v("LidarLite를 "),a("em",[t._v("Pixhawk 1")]),t._v(" AUX 포트 (PWM 인터페이스) 핀 연결은 아래와 같습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("핀")]),t._v(" "),a("th",[t._v("Lidar-Lite (v2, v3)")]),t._v(" "),a("th",[t._v("Pixhawk AUX Servo")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("AUX 6 (중앙)")]),t._v(" "),a("td",[t._v("전원 공급. 4.75-5.5V DC 공칭, 최대 6V DC.")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("RESET")]),t._v(" "),a("td",[t._v("AUX 6 (하단)")]),t._v(" "),a("td",[t._v("센서의 재설정 라인")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("PWM")]),t._v(" "),a("td",[t._v("AUX 5 (하단)")]),t._v(" "),a("td",[t._v("Lidar Lite의 PWM 출력. "),a("strong",[t._v("470 Ohm 풀다운 (GND로)이 필요합니다. 1K0hm 저항을 사용하지 마십시오.")])])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("SCL")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("연결되지 않음")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("SDA")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("연결되지 않음")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("AUX 6 (상단)")]),t._v(" "),a("td",[t._v("접지")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("AUX")]),t._v(" "),a("p",[t._v("포트가 없는 비행 콘트롤러에서는 동등한 MAIN 핀이 사용됩니다 (예 : 라이더의 PWM 출력이 대신 MAIN 5에 매핑됨). 핀 번호는 하드 코딩되어 있습니다.")])]),t._v(" "),a("p",[t._v("LidarLite v2의 배선은 아래와 같습니다. Lidar-Lite v3는 커넥터의 핀 번호가 반대라는 점을 제외에는 유사하게 연결됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:v(1297),alt:"Lidar Lite 2 인터페이스 배선"}})]),t._v(" "),a("p",[a("img",{attrs:{src:v(1298),alt:"Lidar Lite 2 인터페이스 배선"}})]),t._v(" "),a("p",[a("img",{attrs:{src:v(1299),alt:"Lidar Lite 2 핀/케이블"}})]),t._v(" "),a("h3",{attrs:{id:"i2c-인터페이스-배선"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i2c-인터페이스-배선"}},[t._v("#")]),t._v(" I2C 인터페이스 배선")]),t._v(" "),a("p",[t._v("I2C 배선은 다른 거리 센서에 대해서도 동일합니다. SLA, SLC, GND 및 VCC를 비행 콘트롤러와 센서의 해당 (동일한) 핀에 연결하면 됩니다.")]),t._v(" "),a("h2",{attrs:{id:"소프트웨어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-설정"}},[t._v("#")]),t._v(" 소프트웨어 설정")]),t._v(" "),a("p",[t._v("거리계/포트는 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_LL40LS"}},[t._v("SENS_EN_LL40LS")]),t._v("를 사용하여 활성화됩니다. PWM의 경우 "),a("code",[t._v("1")]),t._v(", I2C의 경우 "),a("code",[t._v("2")]),t._v("로 설정됩니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("이 거리계의 드라이버는 펌웨어에서 제공됩니다. 존재하지 않으면, 보드 설정에 드라이버("),a("code",[t._v("drivers/ll40ls")]),t._v(")를 추가하여야 합니다.")])]),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://static.garmin.com/pumac/LIDAR_Lite_v3_Operation_Manual_and_Technical_Specifications.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("LIDAR_Lite_v3_Operation_Manual_and_Technical_Specifications.pdf"),a("OutboundLink")],1),t._v(" (Garmin)")])])])}),[],!1,null,null,null);_.default=r.exports},395:function(t,_,v){t.exports=v.p+"assets/img/lidar_lite_v3.7185119f.jpg"}}]);