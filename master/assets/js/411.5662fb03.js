(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{1897:function(t,e,o){"use strict";o.r(e);var a=o(18),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"가속도-센서"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#가속도-센서"}},[t._v("#")]),t._v(" 가속도 센서")]),t._v(" "),a("p",[t._v("첫 번째로 사용하거나, PX4 Controller의 방향이 변경된 경우 가속도 센서를 교정해야 합니다. 그렇지 않고 기존에 사용하고 있던 경우 가속도 센서를 수정할 필요가 없습니다. (온도가 낮아지는 겨울철이나, 제조단계에서 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/sensor_thermal_calibration.html"}},[t._v("별도의 열 교정을 받지 않은 경우")]),t._v("는 교정해야되는 상황이 생길 수 있습니다.)")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v('Poor accelerometer calibration is generally caught by preflight checks and arming-denied messages (QGC warnings typically refer to "high accelerometer bias" and "consistency check failures").')])]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(" will guide you to place and hold your vehicle in a number of orientations (you will be prompted when to move between positions).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This is similar to "),a("RouterLink",{attrs:{to:"/ko/config/compass.html"}},[t._v("compass calibration")]),t._v(" except that you hold the vehicle still (rather than rotate it) in each orientation.")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The calibration uses a least squares 'fit' algorithm that doesn't reaquire you to have \"perfect\" 90 degree orientations. Provided each axis is pointed mostly up and down at some time in the calibration sequence, and the vehicle is held stationary, the precise orientation doesn't matter.")])]),t._v(" "),a("h2",{attrs:{id:"캘리브레이션-수행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#캘리브레이션-수행"}},[t._v("#")]),t._v(" 캘리브레이션 수행")]),t._v(" "),a("p",[t._v("The calibration steps are:")]),t._v(" "),a("ol",[a("li",[a("p",[a("em",[t._v("QGroundControl")]),t._v("을 시작하고 드론에 연결합니다.")])]),t._v(" "),a("li",[a("p",[t._v("상단 툴바에서 "),a("strong",[t._v("기어")]),t._v(" 아이콘 (기체 설정) 을 선택한 다음, 사이드 바에서 "),a("strong",[t._v("센서")]),t._v("를 선택하십시오.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("가속도 센서")]),t._v(" 버튼을 클릭하십시오.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(593),alt:"가속도 센서 캘리브레이션"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("You should already have set the [Autopilot Orientation](../config/flight_controller_orientation.md). If not, you can also set it here.")])])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("캘리브레이션을 시작하려면 "),a("strong",[t._v("확인")]),t._v("을 클릭하십시오.")])]),t._v(" "),a("li",[a("p",[t._v("화면에 표시된 "),a("em",[t._v("이미지대로")]),t._v(" 드론을 배치하십시오. 드론을 움직이고 나면 (드론의 방향과 일치하는 이미지가 노란색으로 바뀝니다) 드론을 그 상태로 유지하십시오. 현재 방향에 대해 캘리브레이션이 완료되면 화면의 그림이 녹색으로 바뀝니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(594),alt:"가속도 센서 캘리브레이션"}})])]),t._v(" "),a("li",[a("p",[t._v("드론의 모든 방향에 대해 캘리브레이션 과정을 반복합니다.")])])]),t._v(" "),a("p",[t._v("Once you've calibrated the vehicle in all the positions "),a("em",[t._v("QGroundControl")]),t._v(" will display "),a("em",[t._v("Calibration complete")]),t._v(" (all orientation images will be displayed in green and the progress bar will fill completely). You can then proceed to the next sensor.")]),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#accelerometer",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 센서"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=1m46s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 설치 비디오 - @1m46s"),a("OutboundLink")],1),t._v(" (Youtube)")])])])}),[],!1,null,null,null);e.default=s.exports},593:function(t,e,o){t.exports=o.p+"assets/img/accelerometer.22ce14a1.jpg"},594:function(t,e,o){t.exports=o.p+"assets/img/accelerometer_positions_px4.1219f02a.jpg"}}]);