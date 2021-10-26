(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{2304:function(t,a,r){"use strict";r.r(a);var e=r(19),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"수동-안정화-모드-멀티콥터"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#수동-안정화-모드-멀티콥터"}},[t._v("#")]),t._v(" 수동/안정화 모드 (멀티콥터)")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_difficulty"}},[e("img",{attrs:{src:r(332),title:"중급 난이도 비행",width:"30px"}})]),t._v(" "),e("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_manual"}},[e("img",{attrs:{src:r(327),title:"수동/원격 제어 필요",width:"30px"}})])],1),t._v(" "),e("p",[e("em",[t._v("수동/안정화")]),t._v("모드는 RC 조종 스틱이 중앙에 있을 때 멀티콥터를 안정화합니다. 기체를 수동으로 움직이거나 조종하려면 스틱을 중앙의 바깥쪽으로 제어합니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("이 멀티콥터 모드는 "),e("em",[t._v("수동")]),t._v(" 또는 "),e("em",[t._v("안정화")]),t._v(" 모드를 설정하여 활성화됩니다.")])]),t._v(" "),e("p",[t._v("수동 제어에서 롤과 피치 스틱이 각 축을 중심으로 기체의 자세를 * 각도*로 제어하닙니다. 요 스틱은 수평면 위의 회전 속도를 제어하고 스로틀은 고도/속도를 제어합니다 .")]),t._v(" "),e("p",[t._v("조종 스틱을 놓으면 중앙 데드 존으로 돌아갑니다. 롤 포크와 피치 스틱이 중앙에 오면 멀티 피터가 수평을 유지하고 정지합니다. 기체는 적절하게 균형을 잡고, 스로틀이 적절하게 설정되고("),e("a",{attrs:{href:"#params"}},[t._v("아래")]),t._v(" 참고), 외력이 가해지지 않으면 (예 : 바람), 고도에 유지되거나 유지됩니다. 기체는는 바람 방향으로 표류하게 되며, 고도를 유지하기 위해서는 스로틀을 제어하여야 합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(379),alt:"멀티콥터 수동 비행"}})]),t._v(" "),e("h2",{attrs:{id:"기술적-설명"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기술적-설명"}},[t._v("#")]),t._v(" 기술적 설명")]),t._v(" "),e("p",[t._v("조종사의 입력은 롤 및 피치 각 명령과 요 율 명령으로 전달됩니다. 스로틀은 크기가 조정되고 ("),e("a",{attrs:{href:"#params"}},[t._v("아래")]),t._v(" 참고), 출력 믹서로 직접 전달됩니다. 자동 조종 장치는 자세를 제어합니다. 즉, RC 스틱이 컨트롤러 데드 존 내부에 집중 될 때 롤과 피치 각을 제로로 조절합니다 (결과적으로 태도가 수평이 됨). 자동 조종 장치는 바람 (또는 다른 원인)으로 인한 드리프트를 보상하지 않습니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("ul",[e("li",[t._v("수동 입력이 필요합니다 (RC 컨트롤러 또는 MAVLink를 통한 게임 패드/엄지 스틱).")])])]),t._v(" "),e("p",[e("span",{attrs:{id:"params"}})]),t._v(" "),e("h2",{attrs:{id:"매개-변수"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#매개-변수"}},[t._v("#")]),t._v(" 매개 변수")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("매개 변수")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("span",{attrs:{id:"MPC_THR_HOVER"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")])],1),t._v(" "),e("td",[t._v("스로틀 스틱이 중앙에 있고 "),e("code",[t._v("MPC_THR_CURVE")]),t._v("가 기본값으로 설정되어있을 때 출력되는 호버 스로틀입니다.")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"MPC_THR_CURVE"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_CURVE"}},[t._v("MPC_THR_CURVE")])],1),t._v(" "),e("td",[t._v("스로틀 스케일링을 정의합니다. 기본적으로이 값은 "),e("strong",[t._v("호버 추력으로 조정")]),t._v("으로 설정되어 있습니다. 즉, 스로틀 스틱이 중앙에있을 때 구성된 호버 스로틀이 출력되고 ("),e("code",[t._v("MPC_THR_HOVER")]),t._v(") 스틱 입력이 선형으로 조정됩니다. 그 아래 및 위 (안정화 및 고도/위치 제어 간의 부드러운 전환 허용).")])]),t._v(" "),e("tr",[e("td",[t._v("강력한 기체의 경우 호버 스로틀이 매우 낮아 (예 : 20 % 미만) 스로틀 입력이 왜곡 될 수 있습니다. 즉, 여기서 추력의 80 %는 스틱 입력의 상단 절반으로, 하단은 20 %로 제어됩니다. 필요한 경우 "),e("code",[t._v("MPC_THR_CURVE")]),t._v("를 "),e("strong",[t._v("No Rescale")]),t._v("로 설정하여 배율을 다시 조정할 수 없습니다 (스로틀 매핑에 대한 스틱 입력은 "),e("code",[t._v("MPC_THR_HOVER")]),t._v("과 무관 함).")]),t._v(" "),e("td")])])])])}),[],!1,null,null,null);a.default=s.exports},327:function(t,a,r){t.exports=r.p+"assets/img/remote_control.e49232a6.svg"},332:function(t,a){t.exports="data:image/png;base64,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"},379:function(t,a,r){t.exports=r.p+"assets/img/manual_stabilized_MC.857b681e.png"}}]);