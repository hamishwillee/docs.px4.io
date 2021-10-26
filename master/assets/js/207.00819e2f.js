(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1157:function(t,s,r){t.exports=r.p+"assets/img/lidar_lite_1.7a79e944.png"},2366:function(t,s,r){"use strict";r.r(s);var _=r(19),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"센서"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#센서"}},[t._v("#")]),t._v(" 센서")]),t._v(" "),_("p",[t._v("PX4 시스템은 안정화나 자율제어를 위하여 센서를 사용하여 기체의 상태를 파악합니다. 기체 상태에는 위치, 고도, 방향, 속도, 대기 속도, 방향, 회전 속도 및 배터리 잔량 등이 있습니다.")]),t._v(" "),_("p",[t._v("자이로스코프, 가속도 센서, 지자기 센서와 기압 센서는 "),_("em",[t._v("시스템 구동을 위한 최소 요구 사항")]),t._v("입니다. 자동 "),_("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#categories"}},[t._v("모드")]),t._v("와 기타 모드에는 GPS나 이와 유사한 위치 확인 시스템이 요구됩니다. 고정익과 수직이착륙기에는 대기속도 센서가 필요합니다.")],1),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")]),t._v(" 비행 콘트롤러에 최소한의 센서들이 내장되어 있습니다. 필요한 센서들을 콘트롤러에 추가할 수 있습니다.")],1),t._v(" "),_("p",[t._v("아래에서 주요 센서들에 대하여 설명합니다. 마지막에는, "),_("a",{attrs:{href:"#wiring"}},[t._v("센서 배선 방법")]),t._v("에 관한 자료들을 설명합니다.")]),t._v(" "),_("p",[_("span",{attrs:{id:"gps_compass"}})]),t._v(" "),_("h2",{attrs:{id:"gps와-나침반"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gps와-나침반"}},[t._v("#")]),t._v(" GPS와 나침반")]),t._v(" "),_("p",[t._v("PX4는 다양한 GNSS(Global Navigation Satellite System) 수신기와 나침반(자기계)을 지원합니다. PX4는 센티미터 정밀도를 가진 GPS 시스템인 "),_("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("실시간 운동학(RTK) GPS 수신기")]),t._v("를 지원합니다.")],1),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("픽스호크 시리즈")]),t._v(" 콘트롤러에는 "),_("em",[t._v("내부")]),t._v(" 나침반이 포함되어 있습니다. Pixhawk를 배터리나 전선에서 가능하면 멀리 장착하여 전자기 간섭을 최소화하는 것이 좋습니다. 소형 운송체에서는 대부분 외부 나침반이 필수 요구사항입니다.")],1)]),t._v(" "),_("p",[t._v("나침반이나 GPS 수신기는 모터나 ESC 전원에서 가능한 멀리 장착하여 사용하는 것이 좋습니다. 일반적으로 받침대나 고정 날개에 설치하는 것이 좋습니다.")]),t._v(" "),_("p",[t._v("GPS와 나침반의 일반적인 옵션은 "),_("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[t._v("GPS 및 나침반")]),t._v("을 참고하십시오.")],1),t._v(" "),_("p",[_("img",{attrs:{src:r(390),alt:"GPS/나침반"}})]),t._v(" "),_("h2",{attrs:{id:"대기속도-센서"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#대기속도-센서"}},[t._v("#")]),t._v(" 대기속도 센서")]),t._v(" "),_("p",[t._v("고정익과 VTOL에는 대기속도센서를 "),_("em",[t._v("사용")]),t._v("이 적극 권장됩니다.")]),t._v(" "),_("p",[t._v("자동조종장치에는 실속을 감지하는 다른 수단이 없으므로, 비행 속도 측정은는 매우 중요합니다. 고정익의 양력을 발생시키는 것은 대지속도가 아니라 대기속도입니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(391),alt:"디지털 대기 센서"}})]),t._v(" "),_("p",[t._v("더 자세한 정보와 권장 하드웨어는 "),_("RouterLink",{attrs:{to:"/ko/sensor/airspeed.html"}},[t._v("대기속도 센서")]),t._v("를 참고하십시오.")],1),t._v(" "),_("h2",{attrs:{id:"타코미터"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#타코미터"}},[t._v("#")]),t._v(" 타코미터")]),t._v(" "),_("p",[t._v("타코미터("),_("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tachometer#In_automobiles,_trucks,_tractors_and_aircraft",target:"_blank",rel:"noopener noreferrer"}},[t._v("회전 카운터 센서"),_("OutboundLink")],1),t._v(")는 자동조종장치의 실속 또는 다른 로터 고장을 감지할 수 있기 때문에 로터 윙 프레임에서 "),_("em",[t._v("적극 권장")]),t._v("됩니다. 로터 윙 비행의 경우 양력을 발생시키는 것은 대지속도나 지면 속도가 아닌 블레이드의 회전입니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(340),alt:"디지털 RPM 센서-TFRPM01A"}})]),t._v(" "),_("p",[t._v("더 자세한 정보와 권장되는 하드웨어는 "),_("RouterLink",{attrs:{to:"/ko/sensor/tachometers.html"}},[t._v("센서 > 타코미터")]),t._v("편을 참고하십시오.")],1),t._v(" "),_("h2",{attrs:{id:"거리-센서"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#거리-센서"}},[t._v("#")]),t._v(" 거리 센서")]),t._v(" "),_("p",[t._v("정확한 착지, 장애물 회피와 등고 비행 등을 위하여 거리 센서가 필요합니다.")]),t._v(" "),_("p",[t._v("여러가지 기술을 사용하여 다양한 범위와 기능을 지원하는 저렴한 거리 센서를 PX4에서 지원합니다. 더 자세한 정보는 "),_("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리 센서")]),t._v("를 참고하십시오.")],1),t._v(" "),_("img",{attrs:{src:r(1157),title:"lidar_lite_1",width:"500px"}}),t._v(" "),_("h2",{attrs:{id:"광류-센서"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#광류-센서"}},[t._v("#")]),t._v(" 광류 센서")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[t._v("광류 센서")]),t._v("는 속도 추정을 위하여 하향 카메라와 하향 거리 센서를 사용합니다. PX4는 센서 데이터와 다른 위치 정보(예 : GPS)를 연계하여 정확한 위치를 측정합니다. 광류 센서는 GPS 신호가 잡히지 않는 실내에서도 사용할 수 있습니다.")],1),t._v(" "),_("p",[_("img",{attrs:{src:r(392),alt:"px4flow-bottom"}})]),t._v(" "),_("p",[t._v("다른 옵션들은 다음과 같습니다:")]),t._v(" "),_("ul",[_("li",[t._v("통합 소나 센서가있는 "),_("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v(" PX4Flow ")]),t._v(" 기반 유량 센서.")],1),t._v(" "),_("li",[t._v("광학 마우스 트랙 패드와 유사한 센서가있는 "),_("RouterLink",{attrs:{to:"/ko/sensor/pmw3901.html"}},[t._v(" PMW3901 ")]),t._v(" 기반 유량 센서")],1)]),t._v(" "),_("p",[_("span",{attrs:{id:"wiring"}})]),t._v(" "),_("h2",{attrs:{id:"센서-배선"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#센서-배선"}},[t._v("#")]),t._v(" 센서 배선")]),t._v(" "),_("p",[t._v("센서들의 배선 방법는 일반적으로 비행 콘트롤러나 센서 제조사에서 매뉴얼로 제공합니다.")]),t._v(" "),_("p",[t._v("추가:")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/assembly/"}},[t._v("기초 초립법")]),t._v("에는 비행 콘틀롤러에 관한 시작 가이드가 포함되어 있습니다. 특정 비행 콘트롤러의 주요 센서들의 배선 방법을 설명합니다.")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("비행 콘트롤러")]),t._v(" 항목에서는 배선 정보를 설명합니다.")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v(" 주변 하드웨어 ")]),t._v("에는 주요 센서들에 대하여 설명합니다.")],1)])])}),[],!1,null,null,null);s.default=a.exports},340:function(t,s,r){t.exports=r.p+"assets/img/tfrpm01_electronics.8e8882e1.jpg"},390:function(t,s,r){t.exports=r.p+"assets/img/gps_compass.34866df8.jpg"},391:function(t,s,r){t.exports=r.p+"assets/img/digital_airspeed_sensor.43319a0e.jpg"},392:function(t,s,r){t.exports=r.p+"assets/img/px4flow_bottom.915780e0.jpg"}}]);