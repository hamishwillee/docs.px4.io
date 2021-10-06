(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{2149:function(t,_,s){"use strict";s.r(_);var r=s(19),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"비행-컨트롤러와-센서의-방향"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#비행-컨트롤러와-센서의-방향"}},[t._v("#")]),t._v(" 비행 컨트롤러와 센서의 방향")]),t._v(" "),r("p",[t._v("기본적으로 비행 컨트롤러와 외장 나침반 센서는 윗면이 위를 향하고 화살표가 기체 정면을 향하도록 기체에 장착되어야 합니다. 보드나 외장 나침반 센서가 다른 방향으로 설치된 경우에는 펌웨어에서 해당 방향을 추가로 설정하여야 합니다.")]),t._v(" "),r("h2",{attrs:{id:"방향-알아내기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#방향-알아내기"}},[t._v("#")]),t._v(" 방향 알아내기")]),t._v(" "),r("p",[t._v("비행 컨트롤러의 ROLL, PITCH 및 YAW 오프셋은 기체의 전진 (x), 오른쪽 (y), 아래 (z) 축을 중심을 기준으로 계산됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(369),alt:"기체 전진 방향"}})]),t._v(" "),r("p",[t._v("회전 축은 한 회전 단계에서 다음 단계까지 동일하게 유지됩니다. 따라서 회전을 수행하는 프레임은 고정되어 있습니다. 이를 "),r("em",[t._v("외부 회전")]),t._v("이라고도합니다.")]),t._v(" "),r("img",{staticStyle:{width:"600px"},attrs:{src:s(346)}}),t._v(" "),r("p",[t._v("예를 들어, 아래에 표시된 기체는 z축을 중심으로 각각 다음과 같이 회전합니다: "),r("code",[t._v("ROTATION_NONE")]),t._v(", "),r("code",[t._v("ROTATION_YAW_90")]),t._v(","),r("code",[t._v("ROTATION_YAW_180")]),t._v(","),r("code",[t._v("ROTATION_YAW_270")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:s(621),alt:"Yaw 회전"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("VTOL")]),t._v(" "),r("p",[t._v("Tailsitter 기체의 경우 모든 센서 보정에 대해 멀티 로터 구성 (즉, 차량에 대한 상대적인 이륙, 이륙, 호버링, 착륙)에 따라 차량 방향을 설정합니다.")]),t._v(" "),r("p",[t._v("축은 일반적으로 전진 비행 중에는 차량의 방향에 상대적입니다. 자세한 정보는 "),r("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#heading-and-directions"}},[t._v("기본 개념")]),t._v("편을 참고하십시오.")],1)]),t._v(" "),r("h2",{attrs:{id:"방향-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#방향-설정"}},[t._v("#")]),t._v(" 방향 설정")]),t._v(" "),r("p",[t._v("방향을 설정하려면:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("*QGroundControl *을 시작하고 기체를 연결합니다.")])]),t._v(" "),r("li",[r("p",[t._v("상단 툴바에서 "),r("strong",[t._v("톱니바퀴")]),t._v(" 아이콘(기체 설정)을 선택한 다음 사이드 바에서 "),r("strong",[t._v("센서")]),t._v("를 선택하십시오.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("방향 설정")]),t._v(" 버튼을 클릭합니다. "),r("img",{staticStyle:{width:"600px"},attrs:{src:s(622)}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("비행 컨트롤러 방향")]),t._v("을 선택합니다("),r("a",{attrs:{href:"#calculating-orientation"}},[t._v("위에서 계산한 방법")]),t._v("대로 선택하십시오).")]),t._v(" "),r("img",{staticStyle:{width:"200px"},attrs:{src:s(623)}})]),t._v(" "),r("li",[r("p",[t._v("동일한 방법으로 **외부 나침반 방향 **을 선택합니다(이 선택 사항은 기체에 외부 나침반이 있을 때에만 표시됩니다).")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("확인")]),t._v("을 누릅니다.")])])]),t._v(" "),r("h2",{attrs:{id:"미세-조정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#미세-조정"}},[t._v("#")]),t._v(" 미세 조정")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/config/level_horizon_calibration.html"}},[t._v("수평 보정")]),t._v("을 사용하여 컨트롤러 방향에서 작은 정렬 에러를 보정하고 비행 보기에서 수평을 조정할 수 있습니다.")],1),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/advanced_flight_controller_orientation_leveling.html"}},[t._v("고급 방향 튜닝")]),t._v(" (고급 사용자)")],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#flight_controller_orientation",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 센서"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports},346:function(t,_,s){t.exports=s.p+"assets/img/fc_orientation_1.648b5eb0.png"},369:function(t,_,s){t.exports=s.p+"assets/img/frame_heading.f02fbdcf.png"},621:function(t,_,s){t.exports=s.p+"assets/img/yaw_rotation.1e9d2568.png"},622:function(t,_,s){t.exports=s.p+"assets/img/sensor_orientation_set_orientations.98aa6a72.jpg"},623:function(t,_,s){t.exports=s.p+"assets/img/sensor_orientation_selector_values.6538d207.jpg"}}]);