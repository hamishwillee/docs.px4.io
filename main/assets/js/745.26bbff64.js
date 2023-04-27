(window.webpackJsonp=window.webpackJsonp||[]).push([[745],{2504:function(t,o,r){"use strict";r.r(o);var e=r(19),n=Object(e.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"기본-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기본-설정"}},[t._v("#")]),t._v(" 기본 설정")]),t._v(" "),e("p",[t._v("PX4 차량의 표준 소프트웨어 설정 방법과 보정 방법에 대하여 설명합니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("이 섹션을 시작하기 전에 "),e("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl을 다운로드"),e("OutboundLink")],1),t._v("하고 "),e("strong",[t._v("데스크톱")]),t._v(" 컴퓨터에 설치하여야 합니다. 모바일 플랫폼에서는 "),e("em",[t._v("QGroundControl")]),t._v("을 사용하여 차량 설정을 할 수 없습니다.")]),t._v(" "),e("p",[e("strong",[t._v("차량 설정")]),t._v(' 화면에 액세스하려면 QGC 애플리케이션 메뉴(왼쪽 상단의 "Q" 아이콘)를 연 다음 '),e("em",[t._v("선택 도구")]),t._v(" 팝업에서 "),e("strong",[t._v("차량 설정")]),t._v("을 선택하십시오.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(642),alt:"QGC 주 메뉴 팝업: 차량 설정 강조 표시"}}),t._v(" :::")]),t._v(" "),e("p",[t._v("하위 주제는 각 단계를 자세히 다룹니다. 먼저 PX4 펌웨어를 설치하고 차량 기체를 설정하십시오.")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("펌웨어")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("기체")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("센서 방향")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/compass.html"}},[t._v("나침반")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/gyroscope.html"}},[t._v("자이로스코프")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/accelerometer.html"}},[t._v("가속도 센서")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/airspeed.html"}},[t._v("대기 속도 센서")]),t._v(" (고정익/VTOL)")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/level_horizon_calibration.html"}},[t._v("수평 보정")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[t._v("무선 조종기 설정")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/joystick.html"}},[t._v("조이스틱 설정")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("비행 모드")]),t._v("(선택 사항)")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/battery.html"}},[t._v("배터리")]),t._v("(선택 사항)")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("안전 설정")]),t._v("(선택 사항)")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("액츄에이터")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/autotune.html"}},[t._v("자동 튜닝")])],1)]),t._v(" "),e("h2",{attrs:{id:"영상-가이드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#영상-가이드"}},[t._v("#")]),t._v(" 영상 가이드")]),t._v(" "),e("p",[t._v("아래 비디오는 보정 프로세스를 자세히 설명합니다. "),e("em",[t._v("QGroundControl")]),t._v("의 버전은 차이가 나지만, 대부분의 프로세스는 유사합니다.")]),t._v(" "),e("p",[t._v("@"),e("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"고급-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#고급-설정"}},[t._v("#")]),t._v(" 고급 설정")]),t._v(" "),e("p",[t._v("If your "),e("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("selected airframe configuration")]),t._v(" is a "),e("em",[t._v("specific vehicle model")]),t._v(" (e.g. "),e("RouterLink",{attrs:{to:"/ko/frames_multicopter/holybro_s500_v2_pixhawk4.html"}},[t._v("Holybro s500")]),t._v(") then it may benefit from fine tuning, but this is not generally required.")],1),t._v(" "),e("p",[t._v('새 기체, "일반" 기체를 사용하거나 기체를 많이 수정하거나 일반적이지 않은 센서를 사용하는 경우에는 다음을 참조하십시오.')]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/"}},[t._v("고급 설정")]),t._v(": 차량별 조정, 미세 조정, 공장 수준 구성.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("비행 콘트롤러 주변 장치")]),t._v(" - 특정 하드웨어(특히 많이 사용되지 않는 센서)와 관련된 하드웨어 및 소프트웨어 설정입니다.")],1)]),t._v(" "),e("h2",{attrs:{id:"지원"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지원"}},[t._v("#")]),t._v(" 지원")]),t._v(" "),e("p",[t._v("설정에 대한 도움이 필요한 경우 "),e("a",{attrs:{href:"https://discuss.px4.io//c/qgroundcontrol/qgroundcontrol-usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 지원 포럼 "),e("OutboundLink")],1),t._v("에서 도움을 요청할 수 있습니다")]),t._v(" "),e("h2",{attrs:{id:"추가-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/SetupView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > 설정"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);o.default=n.exports},642:function(t,o,r){t.exports=r.p+"assets/img/menu_setup.234393b2.png"}}]);