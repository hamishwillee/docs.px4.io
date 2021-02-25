(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1100:function(t,s,r){t.exports=r.p+"assets/img/lidar_lite_1.7a79e944.png"},2108:function(t,s,r){"use strict";r.r(s);var a=r(18),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"센서"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#센서"}},[t._v("#")]),t._v(" 센서")]),t._v(" "),a("p",[t._v("PX4는 센서를 사용하여 기체의 상태를 결정하여 자율 비행의 기체 안정화에 필수적인 과정을 수행합니다. 기체 상태에는 위치, 고도, 방향, 속도, 대기 속도, 방향 (태도), 회전 속도 및 배터리 잔량 등이 포함됩니다.")]),t._v(" "),a("p",[t._v("자이로스코프 센서, 가속도 센서, 지자기 센서 및 기압 센서는 * 시스템 구동에 필요한 최소 요구사항입니다*. 자동 "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#categories"}},[t._v("모드")]),t._v(" 와 기타 모드를 사용하기 위해서는 GPS나 이와 유사한 위치 확인 시스템이 필요합니다. 고정익 및 수직이착륙기에는 대기속도 센서를 추가되어야 합니다.")],1),t._v(" "),a("p",[t._v("최소한의 센서 세트가 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v(" Pixhawk 시리즈 ")]),t._v(" 비행 콘트롤러에 내장되어 있습니다 (다른 컨트롤러 플랫폼에도있을 수 있음). 제어기에 센서를 추가할 수 있습니다.")],1),t._v(" "),a("p",[t._v("주요 센서에 대해 설명합니다. 마지막에는 "),a("a",{attrs:{href:"#wiring"}},[t._v(" 센서 배선 ")]),t._v("에 대한 링크가 있습니다.")]),t._v(" "),a("p",[a("span",{attrs:{id:"gps_compass"}})]),t._v(" "),a("h2",{attrs:{id:"gps와-나침반"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps와-나침반"}},[t._v("#")]),t._v(" GPS와 나침반")]),t._v(" "),a("p",[t._v("PX4는 여러 GNSS(Global Navigation Satellite System) 수신기와 나침반 (자기계)을 지원합니다. PX4는 센티미터 정밀도 GPS 시스템인 "),a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v(" 실시간 운동학 (RTK) GPS 수신기 ")]),t._v("를 지원합니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("픽스호크 시리즈</ 0> 제어기에는 * 내부 * 나침반이 포함되어 있습니다. Pixhawk를 가능한 배터리나 전선에서 멀리 장착하여 전자기 간섭을 최소화하는 것이 좋습니다. 대부분의 소형 운송체에서는 외부 나침반이 필수적인 요구사항입니다. :::")]),a("p"),t._v(" "),a("p",[t._v("모터나 ESC 전원에서 가능한 멀리 떨어진 곳에 장착된 외부 나침반/GPS 수신기을 사용하는 것이 좋습니다. 일반적으로 받침대 또는 고정 날개에 설치합니다.")]),t._v(" "),a("p",[t._v("GPS/나침반의 일반적 옵션은 "),a("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[t._v(" GPS/나침반")]),t._v("에 기술되어 있습니다.")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(373),alt:"GPS/나침반"}})]),t._v(" "),a("h2",{attrs:{id:"대기속도-센서"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#대기속도-센서"}},[t._v("#")]),t._v(" 대기속도 센서")]),t._v(" "),a("p",[t._v("고정이나 수직이착륙기에는 대기속도센서를 "),a("em",[t._v("사용하는 것이 좋습니다.")])]),t._v(" "),a("p",[t._v("자동 조종 장치에는 실속을 감지 할 수있는 다른 수단이 없으므로이 비행 속도는 매우 중요한 항목입니다. 고정익 비행의 경우 양력을 발생시키는 것은 대지속도가 아니라 대기속도입니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(374),alt:"디지털 풍속 센서"}})]),t._v(" "),a("p",[t._v("더 자세한 정보와 권장 하드웨어는 "),a("RouterLink",{attrs:{to:"/ko/sensor/airspeed.html"}},[t._v("대기속도 센서")]),t._v("편을 참조하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"tachometer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tachometer"}},[t._v("#")]),t._v(" Tachometer")]),t._v(" "),a("p",[t._v("회전 속도계 ("),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tachometer#In_automobiles,_trucks,_tractors_and_aircraft",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 회전 카운터 센서 "),a("OutboundLink")],1),t._v(")는 자동 조종 장치가 실속 또는 다른 로터 고장을 감지 할 수 있기 때문에 로터 윙 프레임에 * 적극 권장 *합니다 (로터 윙 비행의 경우 양력을 발생시키는 것은 대지속도나 지면 속도가 아닌 블레이드의 회전입니다).")]),t._v(" "),a("p",[a("img",{attrs:{src:r(336),alt:"디지털 RPM 센서-TFRPM01A"}})]),t._v(" "),a("p",[t._v("더 자세한 정보와 권장 하드웨어는 "),a("RouterLink",{attrs:{to:"/ko/sensor/tachometers.html"}},[t._v("회전 속도계")]),t._v("편을 참조하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"거리-센서"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#거리-센서"}},[t._v("#")]),t._v(" 거리 센서")]),t._v(" "),a("p",[t._v("거리 센서는 정확한 착지, 장애물 회피와 등고 비행 등에 필요합니다.")]),t._v(" "),a("p",[t._v("PX4는 여러가지 기술을 사용하여 다양한 범위의 기능을 지원하는 저렴한 거리 센서를 지원합니다. 더 자세한 정보는 "),a("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리 센서")]),t._v("를 참고하십시오.")],1),t._v(" "),a("img",{attrs:{src:r(1100),title:"lidar_lite_1",width:"500px"}}),t._v(" "),a("h2",{attrs:{id:"광류-센서"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#광류-센서"}},[t._v("#")]),t._v(" 광류 센서")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[t._v(" 광류 센서 ")]),t._v(" 센서는 속도 추정을 위해 하향 카메라와 하향 거리 센서를 사용합니다. PX4는 센서 출력을 다른 위치 소스 (예 : GPS)의 정보와 연계하여 정확한 위치 잠금을 제공합니다. 이 센서는 GPS 신호를 사용할 수없는 실내에서 사용할 수 있습니다.")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(375),alt:"px4flow-bottom"}})]),t._v(" "),a("p",[t._v("다른 옵션은 다음과 같습니다:")]),t._v(" "),a("ul",[a("li",[t._v("통합 소나 센서가있는 "),a("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v(" PX4Flow ")]),t._v(" 기반 유량 센서.")],1),t._v(" "),a("li",[t._v("광학 마우스 트랙 패드와 유사한 센서가있는 "),a("RouterLink",{attrs:{to:"/ko/sensor/pmw3901.html"}},[t._v(" PMW3901 ")]),t._v(" 기반 유량 센서")],1)]),t._v(" "),a("p",[a("span",{attrs:{id:"wiring"}})]),t._v(" "),a("h2",{attrs:{id:"센서-배선"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#센서-배선"}},[t._v("#")]),t._v(" 센서 배선")]),t._v(" "),a("p",[t._v("센서 배선 정보는 일반적으로 비행 제어기 및 센서 자체에 관하여 제조사에서 매뉴얼을 제공한다.")]),t._v(" "),a("p",[t._v("추가:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/assembly/"}},[t._v(" 기초 초립법 ")]),t._v("에는 비행 제어기에 관한 빠른 시작 가이드가 포함되어 있습니다. 여기에는 특정 비행 컨트롤러 하드웨어에 대한 코어 센서의 배선이 포함됩니다.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v(" 비행 제어기 ")]),t._v(" 항목에는 종종 배선 정보가 포함됩니다.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v(" 주변 하드웨어 ")]),t._v("에는 다른 센서에 대한 문서가 포함되어 있습니다.")],1)])])])}),[],!1,null,null,null);s.default=_.exports},336:function(t,s,r){t.exports=r.p+"assets/img/tfrpm01_electronics.8e8882e1.jpg"},373:function(t,s,r){t.exports=r.p+"assets/img/gps_compass.34866df8.jpg"},374:function(t,s,r){t.exports=r.p+"assets/img/digital_airspeed_sensor.43319a0e.jpg"},375:function(t,s,r){t.exports=r.p+"assets/img/px4flow_bottom.915780e0.jpg"}}]);