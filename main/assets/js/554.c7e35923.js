(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{2544:function(t,o,e){"use strict";e.r(o);var r=e(19),s=Object(r.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"accelerometer-calibration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accelerometer-calibration"}},[t._v("#")]),t._v(" Accelerometer Calibration")]),t._v(" "),r("p",[t._v("PX4를 처음 사용하거나, 비행 콘트롤러의 방향이 변경된 경우에는 가속도계를 보정하여야 합니다. 기존 장비를 계속 사용하는 경우에는 보정 작업이 필요하지 않습니다. 온도가 낮은 겨울철이나, 제조단계에서 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/sensor_thermal_calibration.html"}},[t._v("별도의 교정을 받지 않은 경우")]),t._v("에는 보정하는 것이 좋습니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v('잘못된 가속도계 보정은 사전비행 단계나 시동 거부 메시지로 확인될 수  있습니다. QGroundControl 경고 메시지는 일반적으로 "높은 가속도 값"이나 "일관성 검사 실패"를 의미합니다.')])]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v("은 차량을 여러 방향으로 배치하고 유지하도록 안내합니다 (위치간에 이동할 때 메시지가 표시됨).")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("차량을 회전하지 않고 고정한다는 점외에는 "),r("RouterLink",{attrs:{to:"/ko/config/compass.html"}},[t._v("나침반 보정")]),t._v("작업과 유사합니다.")],1)]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The calibration uses a least squares 'fit' algorithm that doesn't require you to have \"perfect\" 90 degree orientations.\n각 축이 보정 단계별로 어느 시점에 대부분 위아래를 가리키고, 차량이 고정되어 있으면 정확한 방향은 중요하지 않습니다.")])]),t._v(" "),r("h2",{attrs:{id:"보정-절차"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보정-절차"}},[t._v("#")]),t._v(" 보정 절차")]),t._v(" "),r("p",[t._v("보정 절차는 다음과 같습니다:")]),t._v(" "),r("ol",[r("li",[r("p",[r("em",[t._v("QGroundControl")]),t._v("에서 기체에 접속합니다.")])]),t._v(" "),r("li",[r("p",[t._v("상단 툴바에서 "),r("strong",[t._v("기어")]),t._v(" 아이콘 (기체 설정) 을 선택한 다음, 사이드 바에서 "),r("strong",[t._v("센서")]),t._v("를 선택합니다.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("가속도계")]),t._v(" 버튼을 클릭합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(645),alt:"가속도계 보정"}})])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("이 작업 이전에 "),r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("비행 콘트롤러 방향")]),t._v("을 미리 설정하여야 합니다. 미리 설정하지 않았다면, 여기에서 설정하십시오.")],1)]),t._v(" "),r("ol",[r("li",[t._v("보정을 시작하려면 "),r("strong",[t._v("확인")]),t._v("을 클릭하십시오.")]),t._v(" "),r("li",[t._v("화면에 표시된 "),r("em",[t._v("그림")]),t._v("과 같이 기체를 배치합니다. 기체를 움직이면 (드론의 방향과 일치하는 이미지가 노란색으로 바뀝니다) 드론을 그 상태로 유지합니다. 현재 방향에 대해 보정이 완료되면, 화면의 그림이 녹색으로 변경됩니다.")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(646),alt:"가속도계 보정"}})]),t._v(" "),r("ol",[r("li",[t._v("기체의 모든 방향에 대해 보정 작업을 반복합니다.")])]),t._v(" "),r("p",[t._v("모든 위치에서 기체를 보정하면 *QGroundControl *에서 *보정 완료 * 메시지를 표시합니다. 모든 방향의 그림들이 녹색으로 표시되고 진행 표시 줄이 완전히 채워집니다. 그런 다음 다음 다른 센서의 보정 작업을 진행합니다.")]),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/sensors_px4.html#accelerometer",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 센서"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=1m46s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 설치 비디오 - @1m46s"),r("OutboundLink")],1),t._v(" (Youtube)")])])])}),[],!1,null,null,null);o.default=s.exports},645:function(t,o,e){t.exports=e.p+"assets/img/accelerometer.12f4237d.jpg"},646:function(t,o,e){t.exports=e.p+"assets/img/accelerometer_positions_px4.94b81dab.jpg"}}]);