(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{2523:function(t,_,i){"use strict";i.r(_);var l=i(19),v=Object(l.a)({},(function(){var t=this,_=t.$createElement,l=t._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"고급-비행-콘트롤러-방향-설정"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#고급-비행-콘트롤러-방향-설정"}},[t._v("#")]),t._v(" 고급 비행 콘트롤러 방향 설정")]),t._v(" "),l("p",[t._v("방향과 수평 평형은 센서 보드의 작은 정렬 불량이나 사소한 교정 오류를 수정하기 위하여 매개변수를 사용하여 수동으로 미세 조정 가능합니다.")]),t._v(" "),l("div",{staticClass:"custom-block note"},[l("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),l("p",[t._v("These instructions are not recommended for regular users. 기본 설정은 아래의 지침을 참고하십시오.")]),t._v(" "),l("ul",[l("li",[l("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("비행 컨트롤러 방향 ")])],1),t._v(" "),l("li",[l("RouterLink",{attrs:{to:"/ko/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")])],1)])]),t._v(" "),l("p",[t._v("기체가 계속 쏠린다면(멀티로터에서 종종 볼 수 있지만, 다른 기체에도 해당됨), RC 송신기의 트리머를 활용하기 보다는 오프셋 각도 매개변수를 미세 조정하여 트리밍하는 것이 좋습니다. 이 방법은 자율 비행시 항공기가 트리밍을 유지합니다.")]),t._v(" "),l("h2",{attrs:{id:"방향-매개변수-설정"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#방향-매개변수-설정"}},[t._v("#")]),t._v(" 방향 매개변수 설정")]),t._v(" "),l("p",[t._v("방향 매개변수를 변경하려면 :")]),t._v(" "),l("ol",[l("li",[t._v("QGroundControl에서 다음 메뉴를 오픈합니다: "),l("strong",[t._v("설정 > 매개변수 > 센서 보정")]),t._v(".")]),t._v(" "),l("li",[t._v("아래와 같이 매개변수 값을 변경합니다."),l("img",{attrs:{src:i(464),alt:"비행 제어장치 방향 QGC v2 "}})])]),t._v(" "),l("h2",{attrs:{id:"parameter-information"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#parameter-information"}},[t._v("#")]),t._v(" Parameter Information")]),t._v(" "),l("p",[l("strong",[t._v("SENS_BOARD_ROT")]),t._v(" 매개변수는 플랫폼에 상대적인 회전을 정의며, X, Y, Z 미세 조정 오프셋 값은 보드 자체에 상대적 고정값으로 저장합니다. What happens is that the fine tuning offsets are added to the `SENS_BOARD_ROT`` angle in order to get the total offset angles for the Yaw, Pitch and Roll orientation of the flight controller.")]),t._v(" "),l("p",[l("strong",[t._v("SENS_BOARD_ROT")])]),t._v(" "),l("p",[t._v("이 매개변수는 플랫폼에 대한 FMU 보드의 회전을 정의합니다. 가능한 값은 다음과 같습니다.")]),t._v(" "),l("ul",[l("li",[t._v("0 = 회전 없음")]),t._v(" "),l("li",[t._v("1 = Yaw 45°")]),t._v(" "),l("li",[t._v("2 = Yaw 90°")]),t._v(" "),l("li",[t._v("3 = Yaw 135°")]),t._v(" "),l("li",[t._v("4 = Yaw 180°")]),t._v(" "),l("li",[t._v("5 = Yaw 225°")]),t._v(" "),l("li",[t._v("6 = Yaw 270°")]),t._v(" "),l("li",[t._v("7 = Yaw 315°")]),t._v(" "),l("li",[t._v("8 = Roll 180°")]),t._v(" "),l("li",[t._v("9 = Roll 180°, Yaw 45°")]),t._v(" "),l("li",[t._v("10 = Roll 180°, Yaw 90°")]),t._v(" "),l("li",[t._v("11 = Roll 180°, Yaw 135°")]),t._v(" "),l("li",[t._v("12 = Pitch 180°")]),t._v(" "),l("li",[t._v("13 = Roll 180°, Yaw 225°")]),t._v(" "),l("li",[t._v("14 = Roll 180°, Yaw 270°")]),t._v(" "),l("li",[t._v("15 = Roll 180°, Yaw 315°")]),t._v(" "),l("li",[t._v("16 = Roll 90°")]),t._v(" "),l("li",[t._v("17 = Roll 90°, Yaw 45°")]),t._v(" "),l("li",[t._v("18 = Roll 90°, Yaw 90°")]),t._v(" "),l("li",[t._v("19 = Roll 90°, Yaw 135°")]),t._v(" "),l("li",[t._v("20 = Roll 270°")]),t._v(" "),l("li",[t._v("21 = Roll 270°, Yaw 45°")]),t._v(" "),l("li",[t._v("22 = Roll 270°, Yaw 90°")]),t._v(" "),l("li",[t._v("23 = Roll 270°, Yaw 135°")]),t._v(" "),l("li",[t._v("24 = Pitch 90°")]),t._v(" "),l("li",[t._v("25 = Pitch 270°")])]),t._v(" "),l("p",[l("strong",[t._v("SENS_BOARD_X_OFF")])]),t._v(" "),l("p",[t._v("PX4FMU의 X축 또는 Roll 축을 중심의 도(°) 단위의 회전 오프셋입니다. Positive angles increase in CCW direction, negative angles increase in CW direction.")]),t._v(" "),l("p",[l("strong",[t._v("SENS_BOARD_Y_OFF")])]),t._v(" "),l("p",[t._v("PX4FMU의 Y축 또는 Pitch 축을 중심의 도(°) 단위의 회전 오프셋입니다. Positive angles increase in CCW direction, negative angles increase in CW direction.")]),t._v(" "),l("p",[l("strong",[t._v("SENS_BOARD_Z_OFF")])]),t._v(" "),l("p",[t._v("PX4FMU의 Z축 또는 Yaw 축을 중심의 도(°) 단위의 회전 오프셋입니다. Positive angles increase in CCW direction, negative angles increase in CW direction.")])])}),[],!1,null,null,null);_.default=v.exports},464:function(t,_,i){t.exports=i.p+"assets/img/fc_orientation_qgc_v2.370e492b.png"}}]);