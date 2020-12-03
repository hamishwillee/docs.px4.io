(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1888:function(t,e,o){"use strict";o.r(e);var a=o(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"비행-컨트롤러-및-센서-정렬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-컨트롤러-및-센서-정렬"}},[t._v("#")]),t._v(" 비행 컨트롤러 및 센서 정렬")]),t._v(" "),a("p",[t._v("기본적으로 비행 컨트롤러(그리고 외부 나침반 센서)는 윗면이 위를 향하도록, 화살표가 기체 정면을 향하도록 프레임에 장착되어야 합니다. 보드나 외부 나침반 센서가 다른 방향으로 장착된 경우 펌웨어에서 이를 설정해야 합니다.")]),t._v(" "),a("h2",{attrs:{id:"방향-계산"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#방향-계산"}},[t._v("#")]),t._v(" 방향 계산")]),t._v(" "),a("p",[t._v("ROLL, PITCH and/or YAW offsets of the flight controller are calculated relative to the vehicle around the forward (x), right (y), down (z) axes.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(356),alt:"Frame Heading"}})]),t._v(" "),a("p",[t._v("The axes to rotate around stay the same from one rotation step to the next one. So the frame to perform the rotation in stays fixed. This is also known as "),a("em",[t._v("extrinsic rotation")]),t._v(".")]),t._v(" "),a("img",{staticStyle:{width:"600px"},attrs:{src:o(340)}}),t._v(" "),a("p",[t._v("For example, the vehicles shown below have rotations around the z-axis (i.e. yaw only) corresponding to: "),a("code",[t._v("ROTATION_NONE")]),t._v(", "),a("code",[t._v("ROTATION_YAW_90")]),t._v(","),a("code",[t._v("ROTATION_YAW_180")]),t._v(","),a("code",[t._v("ROTATION_YAW_270")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:o(595),alt:"Yaw Rotation"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("For a VTOL Tailsitter airframe set the vehicle orientation according to its multirotor configuration (i.e. relative to the vehicle during, takeoff, hovering, landing) for all sensor calibrations.")]),t._v(" "),a("p",[t._v("The axis are normally relative to the orientation of the vehicle during steady forward flight. For more information see "),a("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#heading-and-directions"}},[t._v("Basic Concepts")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"방향-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#방향-설정"}},[t._v("#")]),t._v(" 방향 설정")]),t._v(" "),a("p",[t._v("To set the orientations:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("*QGroundControl *을 시작하고 기체를 연결합니다.")])]),t._v(" "),a("li",[a("p",[t._v("상단 툴바에서 "),a("strong",[t._v("톱니바퀴")]),t._v(" 아이콘(기체 설정)을 선택한 다음 사이드 바에서 "),a("strong",[t._v("센서")]),t._v("를 선택하십시오.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("방향 설정")]),t._v(" 버튼을 클릭합니다. "),a("img",{staticStyle:{width:"600px"},attrs:{src:o(596)}})])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("비행 컨트롤러 방향")]),t._v("을 선택합니다("),a("a",{attrs:{href:"#calculating-orientation"}},[t._v("위에서 계산한 방법")]),t._v("대로 선택하십시오).")]),t._v(" "),a("img",{staticStyle:{width:"200px"},attrs:{src:o(597)}})]),t._v(" "),a("li",[a("p",[t._v("동일한 방법으로 **외부 나침반 방향 **을 선택합니다(이 선택 사항은 기체에 외부 나침반이 있을 때에만 표시됩니다).")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("확인")]),t._v("을 누릅니다.")])])]),t._v(" "),a("h2",{attrs:{id:"미세-조정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#미세-조정"}},[t._v("#")]),t._v(" 미세 조정")]),t._v(" "),a("p",[t._v("You can use "),a("RouterLink",{attrs:{to:"/ko/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")]),t._v(" to compensate for small miss-alignments in controller orientation and to level the horizon in flight view.")],1),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/advanced_flight_controller_orientation_leveling.html"}},[t._v("고급 방향 조정")]),t._v(" (고급 사용자)")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#flight_controller_orientation",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 센서"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports},340:function(t,e,o){t.exports=o.p+"assets/img/fc_orientation_1.648b5eb0.png"},356:function(t,e,o){t.exports=o.p+"assets/img/frame_heading.f02fbdcf.png"},595:function(t,e,o){t.exports=o.p+"assets/img/yaw_rotation.1e9d2568.png"},596:function(t,e,o){t.exports=o.p+"assets/img/sensor_orientation_set_orientations.98aa6a72.jpg"},597:function(t,e,o){t.exports=o.p+"assets/img/sensor_orientation_selector_values.6538d207.jpg"}}]);