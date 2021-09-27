(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{2137:function(t,s,o){"use strict";o.r(s);var _=o(19),r=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"나침반-보정"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#나침반-보정"}},[t._v("#")]),t._v(" 나침반 보정")]),t._v(" "),_("p",[t._v("나침반 보정은 연결된 모든 내부 및 외부 "),_("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[t._v("나침반 센서")]),t._v("를 설정합니다. "),_("em",[t._v("QGroundControl")]),t._v("에서 차량을 설정된 방향으로 배치하고 지정된 축을 기준으로 차량을 회전하도록 안내합니다.")],1),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("GPS")]),t._v(" "),_("p",[t._v("모듈에 통합된 나침반과 같은 외부 자석계/범위를 사용하는 경우 차량에 외부 나침반을 올바르게 장착하고 자동 조종 장치 하드웨어에 연결해야 합니다. GPS+내포장을 연결하는 방법은 특정 오토파일럿 하드웨어의 "),_("RouterLink",{attrs:{to:"/ko/assembly/"}},[t._v("조립 기초")]),t._v("편에서 확인할 수 있습니다. 연결되면 "),_("em",[t._v("QGroundControl")]),t._v("에서 외부 자기장 센서를 자동으로 감지합니다.")],1)]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("처음 사용할 때 나침반을 보정해야하며, 차량이 매우 강한 자기장에 노출 된 적이 있거나 비정상적인 자기 특성이있는 지역에서 사용되는 경우 나침반을 다시 보정해야 할 수 있습니다. 나침반 보정이 잘못되었다는 표시로는 호버링 중 멀티 콥터 회전, 변기 볼링 (반경 증가 / 스파이럴 아웃, 일반적으로 일정한 고도에서 회전, 플라이 웨이로 이어지는) 또는 직선 비행을 시도 할 때 경로를 벗어나는 방향이 있습니다.")])]),t._v(" "),_("h2",{attrs:{id:"보정-방법"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#보정-방법"}},[t._v("#")]),t._v(" 보정 방법")]),t._v(" "),_("p",[t._v("보정 절차는 다음과 같습니다:")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("큰 금속 물체나 자기장에서 멀리 떨어진 위치를 선택하십시오. :::tip 금속이 많은 장소는 보정 작업에 적당한 장소가 아입니다. 사무실 테이블 위에서나 (종종 금속 막대 포함) 또는 차량 옆에서 보정하지 마십시오. 철근이 고르지 않게 분포 된 콘크리트 슬래브 위에 서있는 경우에도 보정에 영향을 미칠 수 있습니다.\n:::")])]),t._v(" "),_("li",[_("p",[_("em",[t._v("QGroundControl")]),t._v("을 시작하고 드론에 연결합니다.")])]),t._v(" "),_("li",[_("p",[t._v("상단 도구 모음에서 "),_("strong",[t._v("톱니 바퀴")]),t._v(" 아이콘(기체 설정)을 선택한 다음 가장자리 표시줄에서 "),_("strong",[t._v("센서")]),t._v("를 선택하십시오.")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Compass")]),t._v(" 센서 버튼을 클릭합니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:o(617),alt:"Compass calibration PX4를 선택합니다."}})])])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("이 작업 이전에 "),_("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("비행 컨트롤러 방향")]),t._v("을 미리 설정하여야 합니다. 미리 설정하지 않았다면, 여기에서 설정할 수 있습니다.")],1)]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[_("p",[_("strong",[t._v("확인")]),t._v("을 눌러 보정작업을 시작하십시오.")])]),t._v(" "),_("li",[_("p",[t._v("기체를 아래에 표시된 자세로 놓고 그대로 유지해주십시오 메시지가 표시되면(방향 이미지가 노란색으로 변함) 기체를 지정된 축을 기준으로 한 방향으로 회전시킵니다. 현재 방향에 대해 캘리브레이션이 완료되면 화면의 그림이 녹색으로 바뀝니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:o(618),alt:"PX4의 나침반 보정 단계"}})])]),t._v(" "),_("li",[_("p",[t._v("드론의 모든 방향에 대해 캘리브레이션 과정을 반복합니다.")])])]),t._v(" "),_("p",[t._v("모든 방향에서 가속도 센서 캘리브레이션이 끝난다면, "),_("em",[t._v("QGroundControl")]),t._v("에서 "),_("em",[t._v("Calibration complete")]),t._v(" 메시지를 표시할 것입니다 (모든 이미지는 녹색으로 표시되고 프로그레스 바는 끝까지 채워질 것입니다). 이제 다음 센서로 이동할 수 있습니다.")]),t._v(" "),_("h2",{attrs:{id:"추가-정보"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#compass",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 센서"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=2m38s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 설정 비디오 - @2m38s"),_("OutboundLink")],1),t._v(" (유튜브)")]),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/compass_power_compensation.html"}},[t._v("나침반 전력 보정")]),t._v(" (고급 설정)")],1)])])}),[],!1,null,null,null);s.default=r.exports},617:function(t,s,o){t.exports=o.p+"assets/img/sensor_compass_select_px4.406db909.jpg"},618:function(t,s,o){t.exports=o.p+"assets/img/sensor_compass_calibrate_px4.7942cdf1.jpg"}}]);