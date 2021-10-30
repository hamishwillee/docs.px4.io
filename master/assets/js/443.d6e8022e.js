(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{2170:function(t,o,s){"use strict";s.r(o);var r=s(19),e=Object(r.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"가속도계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#가속도계"}},[t._v("#")]),t._v(" 가속도계")]),t._v(" "),r("p",[t._v("처음 PX4 사용하는 경우나, PX4 콘트롤러 방향이 바뀐 경우에는 가속도계를 교정해야 합니다. 그렇지 않고, 기존에 사용하던 장비를 계속 사용하는 경우에는 보정 작업을 하지 않아도 됩니다. (온도가 낮은 겨울철이나, 제조단계에서 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/sensor_thermal_calibration.html"}},[t._v("별도의 교정을 받지 않은 경우")]),t._v("에는 교정해야되는 상황이 생길 수 있습니다.)")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v('가속도 보정을 잘못하면 사전비행 단계 혹은 시동 거부 메시지에 의해 확인됩니다. (QGC 경고는 일반적으로 "높은 가속도 값"이나 "일관성 검사 실패"를 의미합니다.)')])]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v("은 차량을 다양한 방향으로 배치하고 유지하도록 안내합니다 (위치간에 이동할 때 메시지가 표시됨).")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("차량을 회전하지 않고 고정한다는 점을 빼면, "),r("RouterLink",{attrs:{to:"/ko/config/compass.html"}},[t._v("나침반 보정")]),t._v("작업과 매우 유사합니다.")],1)]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("보정은 \"완벽한\" 90도 방향을 필요로하지 않는 최소 제곱 '적합' 알고리즘을 사용합니다. 각 축이 보정 시퀀스에서 어느 시점에 대부분 위아래를 가리키고, 차량이 고정되어 있으면 정확한 방향은 중요하지 않습니다.")])]),t._v(" "),r("h2",{attrs:{id:"캘리브레이션-수행"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#캘리브레이션-수행"}},[t._v("#")]),t._v(" 캘리브레이션 수행")]),t._v(" "),r("p",[t._v("보정 절차는 다음과 같습니다:")]),t._v(" "),r("ol",[r("li",[r("p",[r("em",[t._v("QGroundControl")]),t._v("을 시작하고 드론에 연결합니다.")])]),t._v(" "),r("li",[r("p",[t._v("상단 툴바에서 "),r("strong",[t._v("기어")]),t._v(" 아이콘 (기체 설정) 을 선택한 다음, 사이드 바에서 "),r("strong",[t._v("센서")]),t._v("를 선택하십시오.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("가속도계")]),t._v(" 버튼을 클릭하십시오.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(621),alt:"가속도계 캘리브레이션 "}})])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("이 작업 이전에 "),r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("비행 컨트롤러 방향")]),t._v("을 미리 설정하여야 합니다. 미리 설정하지 않았다면, 여기에서 설정할 수 있습니다.")],1)]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[t._v("캘리브레이션을 시작하려면 "),r("strong",[t._v("확인")]),t._v("을 클릭하십시오.")])]),t._v(" "),r("li",[r("p",[t._v("화면에 표시된 "),r("em",[t._v("이미지대로")]),t._v(" 드론을 배치하십시오. 드론을 움직이고 나면 (드론의 방향과 일치하는 이미지가 노란색으로 바뀝니다) 드론을 그 상태로 유지하십시오. 현재 방향에 대해 보정이 완료되면 화면의 그림이 녹색으로 바뀝니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(622),alt:"가속도계 캘리브레이션"}})])]),t._v(" "),r("li",[r("p",[t._v("드론의 모든 방향에 대해 보정 작업을 반복합니다.")])])]),t._v(" "),r("p",[t._v("모든 위치에서 차량을 보정을 마치게 되면 *QGroundControl *에서 *캘리브레이션 완료 * 메시지를 표시합니다 (모든 방향 이미지가 녹색으로 표시되고 진행 표시 줄이 완전히 채워집니다). 그런 다음 다음 센서로 진행할 수 있습니다.")]),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#accelerometer",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 센서"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=1m46s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 설치 비디오 - @1m46s"),r("OutboundLink")],1),t._v(" (Youtube)")])])])}),[],!1,null,null,null);o.default=e.exports},621:function(t,o,s){t.exports=s.p+"assets/img/accelerometer.22ce14a1.jpg"},622:function(t,o,s){t.exports=s.p+"assets/img/accelerometer_positions_px4.1219f02a.jpg"}}]);