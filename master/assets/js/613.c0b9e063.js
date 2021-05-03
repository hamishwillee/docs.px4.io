(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{2104:function(_,t,r){"use strict";r.r(t);var e=r(18),a=Object(e.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"고정익-착륙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#고정익-착륙"}},[_._v("#")]),_._v(" 고정익 착륙")]),_._v(" "),e("p",[_._v("PX4는 "),e("RouterLink",{attrs:{to:"/ko/flying/missions.html"}},[_._v("임수")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[_._v("착륙 모드")]),_._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[_._v("복귀 모드")]),_._v("에서 자동 조종 제어 고정익(FW) 착륙이 가능합니다.")],1),_._v(" "),e("p",[_._v("랜딩 과정에는 아래와 같이 여러 단계가 있습니다. 첫 번째 단계에서 기체는 지면을 향해 고정된 궤적 ("),e("a",{attrs:{href:"#FW_LND_ANG"}},[_._v("FW_LND_ANG")]),_._v(")을 따라 비행합니다. 플레어 착륙 고도 ("),e("a",{attrs:{href:"#FW_LND_FLALT"}},[_._v("FW_LND_FLALT")]),_._v(")에서 기체는 플레어 경로를 따르기 시작합니다 (곡선은 "),e("a",{attrs:{href:"#FW_LND_HVIRT"}},[_._v("FW_LND_HVIRT")]),_._v(" 값을 기반으로 함).")]),_._v(" "),e("p",[e("img",{attrs:{src:r(840),alt:"고정익 - 착륙 경로"}})]),_._v(" "),e("p",[_._v("플레어 착륙 고도는 고정익의 고도와 관련이 있습니다. "),e("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[_._v("착륙 모드")]),_._v("에서는지면 고도를 알 수 없으며, 기체는 0m (해수면) 고도에 있다고 가정합니다. 종종 지면이 해수면보다 높기 때문에 기체는 첫 번째 단계에 착륙합니다 (플레어 고도에 도달하기 전에 지면에 착륙합니다).")],1),_._v(" "),e("p",[_._v("임무, "),e("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[_._v("복귀 모드")]),_._v("에서 또는 차량에 거리 센서가 장착된 경우에는 지면 수준을 정확하게 추정 할 수 있으며 착륙 동작은 앞의 다이어그램에 표시된 것과 같습니다.")],1),_._v(" "),e("p",[_._v("착륙은 다음 매개변수의 영향을 많이 받습니다.")]),_._v(" "),e("table",[e("thead",[e("tr",[e("th",[_._v("매개 변수")]),_._v(" "),e("th",[_._v("설명")])])]),_._v(" "),e("tbody",[e("tr",[e("td",[e("span",{attrs:{id:"FW_LND_ANG"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_ANG"}},[_._v("FW_LND_ANG")])],1),_._v(" "),e("td",[_._v("플레어링전 착륙 경사각")])]),_._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"FW_LND_HVIRT"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_HVIRT"}},[_._v("FW_LND_HVIRT")])],1),_._v(" "),e("td",[_._v("플레어 궤적을 계산하는 데 사용되는 가상 수평선 / 고도.")])]),_._v(" "),e("tr",[e("td",[_._v("플레어 경로 곡선이 점근 적으로 접근하는 지하 고도를 나타냅니다.")]),_._v(" "),e("td")]),_._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"FW_LND_FLALT"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_FLALT"}},[_._v("FW_LND_FLALT")])],1),_._v(" "),e("td",[_._v("착륙 플레어 고도 (착륙 고도 기준)")])]),_._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"FW_LND_TLALT"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_TLALT"}},[_._v("FW_LND_TLALT")])],1),_._v(" "),e("td",[_._v("착륙 스로틀 제한 고도 (상대 착륙 고도). 기본값 -1.0은 시스템이 플레어 고도의 2/3에서 스로틀 제한을 적용하도록 설정합니다.")])]),_._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"FW_LND_HHDIST"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_HHDIST"}},[_._v("FW_LND_HHDIST")])],1),_._v(" "),e("td",[_._v("착륙 방향은 수평 거리를 유지합니다.")])]),_._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"FW_LND_USETER"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_USETER"}},[_._v("FW_LND_USETER")])],1),_._v(" "),e("td",[_._v("착륙하는 동안 지형 추정 (GPS의 지상 고도)을 사용합니다. 이는 기본적으로 꺼져 있으며 웨이 포인트 또는 복귀 고도가 일반적으로 사용됩니다 (또는 임의의 육지 위치에 대한 해수면).")])]),_._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"FW_LND_FL_PMIN"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_FL_PMIN"}},[_._v("FW_LND_FL_PMIN")])],1),_._v(" "),e("td",[_._v("플레어 중 최소 피치. 양의 값은 기수를 위로 향함을 의미합니다. "),e("code",[_._v("FW_LND_TLALT")]),_._v("에 도달하면 적용됩니다.")])]),_._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"FW_LND_FL_PMAX"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_FL_PMAX"}},[_._v("FW_LND_FL_PMAX")])],1),_._v(" "),e("td",[_._v("플레어중 최대 피치. 양의 값은 기수를 위로 향함을 의미합니다. "),e("code",[_._v("FW_LND_TLALT")]),_._v("에 도달하면 적용됩니다.")])]),_._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"FW_LND_AIRSPD_SC"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_AIRSPD_SC"}},[_._v("FW_LND_AIRSPD_SC")])],1),_._v(" "),e("td",[_._v("최소 이륙 속도의 스케일링 계수. 이 계수에 비행기의 최소 대기 속도를 곱하면 목표 대기 속도에 착륙 접근을 제공합니다. "),e("code",[_._v("FW_AIRSPD_MIN x FW_LND_AIRSPD_SC")])])])])])])}),[],!1,null,null,null);t.default=a.exports},840:function(_,t,r){_.exports=r.p+"assets/img/fw_landing_path.8b853a08.png"}}]);