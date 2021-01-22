(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{1839:function(t,i,e){"use strict";e.r(i);var o=e(18),a=Object(o.a)({},(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"고급-비행-제어장치-방향-조정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#고급-비행-제어장치-방향-조정"}},[t._v("#")]),t._v(" 고급 비행 제어장치 방향 조정")]),t._v(" "),o("p",[t._v("방향 및 수평 균형은 매개변수 값을 직접 설정하여 센서 모드의 미세 오정렬 또는 부차적 보정 오류를 잡아 수정할 수 있습니다.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("These instructions are not recommended for regular users. For basic settings stick to the instructions linked below:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("비행 제어장치 방향")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")])],1)])]),t._v(" "),o("p",[t._v("If there is a persistent drift bias (often seen in multirotors but not limited to them), it is a good strategy to trim it with the help of this fine-tuning offset angle parameters instead of using the trimmers of your RC Transmitter. This way when in fully autonomous flight the aircraft will maintain the trimming.")]),t._v(" "),o("h2",{attrs:{id:"방향-매개변수-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#방향-매개변수-설정"}},[t._v("#")]),t._v(" 방향 매개변수 설정")]),t._v(" "),o("p",[t._v("To change the orientation parameters:")]),t._v(" "),o("ol",[o("li",[t._v("QGroundControl에서 다음의 메뉴를 여십시오: "),o("strong",[t._v("설정> 매개변수 > 센서 보정")]),t._v(".")]),t._v(" "),o("li",[t._v("아래와 같이 매개변수 값을 바꾸십시오:"),o("img",{attrs:{src:e(433),alt:"비행 제어장치 방향 QGC v2"}})])]),t._v(" "),o("h2",{attrs:{id:"매개변수-정보"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-정보"}},[t._v("#")]),t._v(" 매개변수 정보")]),t._v(" "),o("p",[t._v("The "),o("strong",[t._v("SENS_BOARD_ROT")]),t._v(" parameter defines the rotation relative to the platform, while the X,Y and Z fine tuning offsets are fixed relative to the board itself. What happens is that the fine tuning offsets are added to the SENS_BOARD_ROT angle in order to get the total offset angles for the Yaw, Pitch and Roll orientation of the flight controller.")]),t._v(" "),o("p",[o("strong",[t._v("SENS_BOARD_ROT")])]),t._v(" "),o("p",[t._v("This parameter defines the rotation of the FMU board relative to the platform. Possible values are:")]),t._v(" "),o("ul",[o("li",[t._v("0 = 회전 없음")]),t._v(" "),o("li",[t._v("1 = Yaw 45°")]),t._v(" "),o("li",[t._v("2 = Yaw 90°")]),t._v(" "),o("li",[t._v("3 = Yaw 135°")]),t._v(" "),o("li",[t._v("4 = Yaw 180°")]),t._v(" "),o("li",[t._v("5 = Yaw 225°")]),t._v(" "),o("li",[t._v("6 = Yaw 270°")]),t._v(" "),o("li",[t._v("7 = Yaw 315°")]),t._v(" "),o("li",[t._v("8 = Roll 180°")]),t._v(" "),o("li",[t._v("9 = Roll 180°, Yaw 45°")]),t._v(" "),o("li",[t._v("10 = Roll 180°, Yaw 90°")]),t._v(" "),o("li",[t._v("11 = Roll 180°, Yaw 135°")]),t._v(" "),o("li",[t._v("12 = Pitch 180°")]),t._v(" "),o("li",[t._v("13 = Roll 180°, Yaw 225°")]),t._v(" "),o("li",[t._v("14 = Roll 180°, Yaw 270°")]),t._v(" "),o("li",[t._v("15 = Roll 180°, Yaw 315°")]),t._v(" "),o("li",[t._v("16 = Roll 90°")]),t._v(" "),o("li",[t._v("17 = Roll 90°, Yaw 45°")]),t._v(" "),o("li",[t._v("18 = Roll 90°, Yaw 90°")]),t._v(" "),o("li",[t._v("19 = Roll 90°, Yaw 135°")]),t._v(" "),o("li",[t._v("20 = Roll 270°")]),t._v(" "),o("li",[t._v("21 = Roll 270°, Yaw 45°")]),t._v(" "),o("li",[t._v("22 = Roll 270°, Yaw 90°")]),t._v(" "),o("li",[t._v("23 = Roll 270°, Yaw 135°")]),t._v(" "),o("li",[t._v("24 = Pitch 90°")]),t._v(" "),o("li",[t._v("25 = Pitch 270°")])]),t._v(" "),o("p",[o("strong",[t._v("SENS_BOARD_X_OFF")])]),t._v(" "),o("p",[t._v("Rotation, in degrees, around PX4FMU's X axis or Roll axis. Positive angles increase in CCW direction, negative angles increase in CW direction.")]),t._v(" "),o("p",[o("strong",[t._v("SENS_BOARD_Y_OFF")])]),t._v(" "),o("p",[t._v("Rotation, in degrees, around PX4FMU's Y axis or Pitch axis. Positive angles increase in CCW direction, negative angles increase in CW direction.")]),t._v(" "),o("p",[o("strong",[t._v("SENS_BOARD_Z_OFF")])]),t._v(" "),o("p",[t._v("Rotation, in degrees, around PX4FMU's Z axis Yaw axis. Positive angles increase in CCW direction, negative angles increase in CW direction.")])])}),[],!1,null,null,null);i.default=a.exports},433:function(t,i,e){t.exports=e.p+"assets/img/fc_orientation_qgc_v2.25c30665.png"}}]);