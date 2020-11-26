(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{1890:function(t,o,r){"use strict";r.r(o);var e=r(18),_=Object(e.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"가속도-센서"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#가속도-센서"}},[t._v("#")]),t._v(" 가속도 센서")]),t._v(" "),e("p",[t._v("첫 번째로 사용하거나, PX4 Controller의 방향이 변경된 경우 가속도 센서를 교정해야 합니다. 그렇지 않고 기존에 사용하고 있던 경우 가속도 센서를 수정할 필요가 없습니다. (온도가 낮아지는 겨울철이나, 제조단계에서 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/sensor_thermal_calibration.html"}},[t._v("별도의 열 교정을 받지 않은 경우")]),t._v("는 교정해야되는 상황이 생길 수 있습니다.)")],1),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(' 잘못된 가속도 센서 캘리브레이션은 preflight 단계 혹은 arming-denied 메시지에 의해 확인됩니다. (QGC 경고는 일반적으로 "높은 가속도 값"이나 "일관성 검사 실패"를 의미합니다.)')])]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v("은 드론을 여러 방향으로 배치하고, 안정적으로 움직일 수 있도록 안내합니다. (다른 위치로 이동할 때 프롬포트가 표시됩니다)")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Tip")]),t._v(" 이러한 동작은 "),e("RouterLink",{attrs:{to:"/ko/config/compass.html"}},[t._v("나침반 캘리브레이션")]),t._v("과 유사한데, 각 방향에서 회전하지 않고 가만히 동작한다는 점에서 차이가 있습니다.")],1)]),t._v(" "),e("p",[e("span")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(" 가속도 센서 캘리브레이션은 \"완벽한\" 90도 방향을 가질 필요가 없는 최소 제곱의 '완화된' 알고리즘을 사용하고 있습니다. 센서 캘리브레이션 단계에서 드론의 각 축은 대부분 위-아래 방향으로 향하고, 드론이 정지해 있다면 정확한 방향은 크게 문제가 되지 않습니다.")])]),t._v(" "),e("h2",{attrs:{id:"캘리브레이션-수행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#캘리브레이션-수행"}},[t._v("#")]),t._v(" 캘리브레이션 수행")]),t._v(" "),e("p",[t._v("단계는 다음과 같습니다:")]),t._v(" "),e("ol",[e("li",[e("p",[e("em",[t._v("QGroundControl")]),t._v("을 시작하고 드론에 연결합니다.")])]),t._v(" "),e("li",[e("p",[t._v("상단 툴바에서 "),e("strong",[t._v("기어")]),t._v(" 아이콘 (기체 설정) 을 선택한 다음, 사이드 바에서 "),e("strong",[t._v("센서")]),t._v("를 선택하십시오.")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("가속도 센서")]),t._v(" 버튼을 클릭하십시오.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(602),alt:"가속도 센서 캘리브레이션"}})]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("참고")]),t._v(" 미리 "),e("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("비행 컨트롤러 방향")]),t._v("을 설정해야합니다. 미리 설정하지 않았다면, 여기에서 설정할 수 있습니다.")],1)])]),t._v(" "),e("li",[e("p",[t._v("캘리브레이션을 시작하려면 "),e("strong",[t._v("확인")]),t._v("을 클릭하십시오.")])]),t._v(" "),e("li",[e("p",[t._v("화면에 표시된 "),e("em",[t._v("이미지대로")]),t._v(" 드론을 배치하십시오. 드론을 움직이고 나면 (드론의 방향과 일치하는 이미지가 노란색으로 바뀝니다) 드론을 그 상태로 유지하십시오. 현재 방향에 대해 캘리브레이션이 완료되면 화면의 그림이 녹색으로 바뀝니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(603),alt:"가속도 센서 캘리브레이션"}})])]),t._v(" "),e("li",[e("p",[t._v("드론의 모든 방향에 대해 캘리브레이션 과정을 반복합니다.")])])]),t._v(" "),e("p",[t._v("모든 방향에서 가속도 센서 캘리브레이션이 끝난다면, "),e("em",[t._v("QGroundControl")]),t._v("에서 "),e("em",[t._v("Calibration complete")]),t._v(" 메시지를 표시할 것입니다 (모든 이미지는 녹색으로 표시되고 프로그레스 바는 끝까지 채워질 것입니다). 해당 메시지가 출력된다면 다음 단계로 진행할 수 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"추가-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#accelerometer",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 센서"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=1m46s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 설치 비디오 - @1m46s"),e("OutboundLink")],1),t._v(" (Youtube)")])])])}),[],!1,null,null,null);o.default=_.exports},602:function(t,o,r){t.exports=r.p+"assets/img/accelerometer.22ce14a1.jpg"},603:function(t,o,r){t.exports=r.p+"assets/img/accelerometer_positions_px4.1219f02a.jpg"}}]);