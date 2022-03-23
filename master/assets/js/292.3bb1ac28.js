(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{1138:function(t,r,e){t.exports=e.p+"assets/img/hero.4ab5c348.jpg"},2428:function(t,r,e){"use strict";e.r(r);var a=e(19),_=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vtol-기체"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol-기체"}},[t._v("#")]),t._v(" VTOL 기체")]),t._v(" "),a("p",[t._v("PX4는 고정익의 전방 비행과 멀티콥터의 수직 이착륙을 기능을 모두 지원하는 차량을 지칭하는 VTOL이라는 용어를 사용합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1138),alt:"수직 기술: Deltaquad QuadPlane VTOL"}})]),t._v(" "),a("p",[t._v("VTOL은 멀티콥터와 고정익의 장점을 모두 가지고 있습니다.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("수직 이착륙:")]),t._v(" 능숙한 조종사 아니어도 웬만한 장소에서 이착륙이 어렵지 않습니다.")]),t._v(" "),a("li",[a("strong",[t._v("빠르고 효율적인 고정익 비행:")]),t._v(" 더 빠르고, 더 멀리, 더 긴 임무를 수행하고 더 무거운 화물들을 운반합니다.")]),t._v(" "),a("li",[a("strong",[t._v("호버링:")]),t._v(" 사진, 구조 스캔 등을 위한 안정적인 플랫폼")])]),t._v(" "),a("p",[t._v("PX4가 지원하는 VTOL 유형, 조립, 구성 및 비행 방법에 대하여 설명합니다.")]),t._v(" "),a("h2",{attrs:{id:"vtol-유형"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol-유형"}},[t._v("#")]),t._v(" VTOL 유형")]),t._v(" "),a("p",[t._v("PX4는 세 가지 중요한 VTOL 유형을 지원합니다.")]),t._v(" "),a("div",{staticClass:"grid_wrapper three_column"},[a("div",{staticClass:"grid_item"},[a("div",{staticClass:"grid_item_heading"},[a("a",{attrs:{href:"tailsitter.html",title:"테일시터"}},[a("big",[t._v("테일시터")])],1)]),t._v(" "),a("div",{staticClass:"grid_text"},[t._v("\n    고정익 위치에 로터가 고정됩니다.\n    이륙하고 꼬리로 착륙합니다. 전체 차량이 앞으로 기울어져 전진 비행으로 전환합니다.\n    "),a("img",{attrs:{src:e(348),title:"윙트라온"}}),t._v(" "),a("ul",[a("li",[t._v("간단하고 견고함.")]),t._v(" "),a("li",[t._v("최소한의 액추에이터 세트")]),t._v(" "),a("li",[t._v("바람이 불면 제어하기 어려울 수 있음")]),t._v(" "),a("li",[t._v("동일한 액츄에이터가 사용되므로 호버링과 전진 비행의 효율성 간의 균형")])])])]),t._v(" "),a("div",{staticClass:"grid_item"},[a("div",{staticClass:"grid_item_heading"},[a("a",{attrs:{href:"tiltrotor.html",title:"틸트로터"}},[a("big",[t._v("틸트로터")])],1)]),t._v("\n  로터는 멀티콥터에서 전방 비행 방향으로 전환하기 위하여 90도 회전합니다.\n  이륙하고 배로 착지합니다.\n  "),a("div",{staticClass:"grid_text"},[a("img",{attrs:{src:e(394),title:"E 플라이트 컨버전스"}}),t._v(" "),a("ul",[a("li",[t._v("모터 틸트용 추가 액추에이터")]),t._v(" "),a("li",[t._v("기계적으로 복잡한 틸팅 메커니즘")]),t._v(" "),a("li",[t._v("더 많은 제어 권한으로 테일시터보다 호버링이 용이합니다.")])])])]),t._v(" "),a("div",{staticClass:"grid_item"},[a("div",{staticClass:"grid_item_heading"},[a("a",{attrs:{href:"standardvtol.html",title:"표준 VTOL"}},[a("big",[t._v("표준 VTOL")])],1)]),t._v(" "),a("div",{staticClass:"grid_text"},[t._v("\n  멀티콥터와 전진 비행을 위한 별도의 로터/비행 제어 장치. 이륙하고 배로 착지합니다.\n  "),a("img",{attrs:{src:e(393),title:"수직 기술: Deltaquad"}}),t._v(" "),a("ul",[a("li",[t._v("별도의 호버링/전진 비행 추진 시스템으로 인한 추가 중량")]),t._v(" "),a("li",[t._v("전용 호버/포워드 플라이트 액츄에이터로 제어가 가장 용이 ")]),t._v(" "),a("li",[t._v("호버링 가능")]),t._v(" "),a("li",[t._v("전방 비행 추진을 위한 연료 엔진 사용 가능")])])])])]),t._v(" "),a("p",[t._v("일반적으로 기계적 복잡성이 증가함에 따라, 차량은 비행이 용이할 수 있지만 비용과 무게가 증가합니다. 각 유형에는 장단점이 있으며 이를 기반으로 성공적인 상업 벤처가 있습니다.")]),t._v(" "),a("p",[t._v('위의 각 주요 "유형"에는 모터 수, 모터 기하학, 비행 표면 등과 같은 많은 가능한 변형이 있습니다. PX4는 보다 일반적인 차량 설정에 대한 '),a("em",[t._v("기체 구성")]),t._v("을 제공합니다. 지원되는 세트는 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#vtol"}},[t._v("Airframes Reference > VTOL")]),t._v("에 설명되어 있습니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("ul",[a("li",[t._v("필요한 차량 설정이 지원되지 않는 경우에는 "),a("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html"}},[t._v("기체를 추가")]),t._v("하여야 합니다(일부 "),a("RouterLink",{attrs:{to:"/ko/development/development.html"}},[t._v("PX4 개발")]),t._v(" 전문 지식 필요).")],1),t._v(" "),a("li",[t._v("VTOL 코드베이스는 다른 모든 기체와 동일한 코드베이스이며, 특히 전환 제어 로직을 추가합니다.")])])]),t._v(" "),a("h2",{attrs:{id:"비행-및-비행-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-및-비행-모드"}},[t._v("#")]),t._v(" 비행 및 비행 모드")]),t._v(" "),a("p",[t._v("VTOL 항공기는 멀티콥터와 고정익의 장점을 모두 가지고 있습니다. 멀티콥터 모드는 주로 이착륙에 사용되고, 고정익 모드는 이동 및 임무 수행에 사용됩니다.")]),t._v(" "),a("p",[t._v("VTOL의 비행 모드는 멀티콥터 모드 비행시에는 "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#mc_flight_modes"}},[t._v("멀티 콥터")]),t._v("와 동일하고, 고정익 모드 비행시에는 "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#fw_flight_modes"}},[t._v("고정익")]),t._v("과 동일합니다.")],1),t._v(" "),a("p",[t._v("모드 전환은 RC 스위치를 사용하는 조종사에 의해 시작되거나 임무 또는 기타 자동 모드에서 필요할 때 PX4에 의해 자동으로 시작됩니다.")]),t._v(" "),a("h2",{attrs:{id:"조립"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#조립"}},[t._v("#")]),t._v(" 조립")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("상업용 및 키트 VTOL 차량에 대한 정보는 "),a("RouterLink",{attrs:{to:"/ko/complete_vehicles/"}},[t._v("차량 완제품")]),t._v("을 참고하십시오.")],1)]),t._v(" "),a("p",[t._v("PX4 제어 차량은 일반적으로 전원 시스템에 연결된 비행 컨트롤러, GPS, 외부 나침반(권장), 무선 제어 시스템(선택 사항), 텔레메트리(선택 사항) 및 속도 센서(VTOL용으로 강력 권장)와 같은 핵심 구성 요소를 공유합니다.")]),t._v(" "),a("p",[t._v("비행 콘트롤러 출력은 별도로 전원이 공급되는 차량 모터 ESC 또는 비행 제어 서보 및 액추에이터에 연결됩니다.")]),t._v(" "),a("p",[t._v("비행 컨트롤러 출력과 특정 컨트롤/모터 간의 매핑은 사용된 차량 프레임에 따라 다르며 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#vtol"}},[t._v("기체 정의서 > VTOL")]),t._v("에 지정되어 있습니다.")],1),t._v(" "),a("p",[t._v("조립 방법은 여러 섹션에서 설명합니다.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/assembly/"}},[t._v("기본 조립")]),t._v("에는 여러 인기 있는 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("비행 콘트롤러")]),t._v("의 핵심 구성요소 설정을 보여주는 주제가 포함되어 있습니다. 가이드가 없는 비행 콘트롤러는 일반적으로 거의 동일한 방식으로 설정됩니다(거의 항상 유사한 설정 가이드가 포함됨).")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("에는 "),a("RouterLink",{attrs:{to:"/ko/sensor/airspeed.html"}},[t._v("대기 속도 센서")]),t._v("를 비롯한 기타 주변 장치에 대한 정보가 포함되어 있습니다.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#vtol"}},[t._v("기체 정의서 > VTOL")]),t._v(" 각 기체 구성에 대해 다른 비행 콘트롤러에 연결하여야 하는 비행 컨트롤러 출력을 설명합니다.\n"),a("ul",[a("li",[t._v("정의된 차량에 대한 구성을 선택하십시오. 이는 비행하기에 충분히 사전 조정된 것이기 때문입니다(미세 조정만 필요할 수 있음).")]),t._v(" "),a("li",[t._v('그렇지 않으면 차량과 일치하는 "일반 기체"를 선택하십시오.')])])],1)]),t._v(" "),a("p",[t._v("또한 다른 사람들이 다른 유형의 차량을 설정한 방법을 보여주는 빌드 로그가 하위 주제로 제공됩니다. 예제로 "),a("RouterLink",{attrs:{to:"/ko/frames_vtol/vtol_quadplane_fun_cub_vtol_pixhawk.html"}},[t._v("FunCub QuadPlane")]),t._v("을 참고하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),a("p",[t._v("VTOL 구성은 여러 섹션에서 다룹니다.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("기본 구성")]),t._v(" - 모든 차량 유형(센서, 안전 시스템, 배터리 등)에 공통적인 구성입니다.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/config_vtol/"}},[t._v("VTOL 특정 구성")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("Peripheral Hardware")]),t._v(" - Configuration for optional hardware and sensors.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/"}},[t._v("고급 구성")]),t._v(": 공장 조정과 고급 및 선택적 구성을 포함하는 추가 구성입니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"비디오"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비디오"}},[t._v("#")]),t._v(" 비디오")]),t._v(" "),a("h3",{attrs:{id:"교육"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#교육"}},[t._v("#")]),t._v(" 교육")]),t._v(" "),a("p",[t._v("VTOL Control & Airspeed Fault Detection (PX4 Developer Summit 2019)")]),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/37BIBAzD6fE",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"테일시터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#테일시터"}},[t._v("#")]),t._v(" 테일시터")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.valaqpatrol.com/tech-data/",target:"_blank",rel:"noopener noreferrer"}},[t._v("UAV Works VALAQ 순찰 테일 시터"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/pWt6uoqpPIw",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/frames_vtol/vtol_tailsitter_caipiroshka_pixracer.html"}},[t._v("TBS Caipiroshka")])],1),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=acG0aTuf3f8&vq=hd720",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"틸트로터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#틸트로터"}},[t._v("#")]),t._v(" 틸트로터")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/frames_vtol/vtol_tiltrotor_eflite_convergence_pixfalcon.html"}},[t._v("컨버전스 틸트로터")])],1),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/E61P2f2WPNU",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"quadplane-vtol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quadplane-vtol"}},[t._v("#")]),t._v(" QuadPlane VTOL")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/frames_vtol/vtol_quadplane_fun_cub_vtol_pixhawk.html"}},[t._v("FunCub QuadPlane")])],1),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=4K8yaa6A0ks&vq=hd720",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/frames_vtol/vtol_quadplane_falcon_vertigo_hybrid_rtf_dropix.html"}},[t._v("Falcon Vertigo QuadPlane")])],1),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/h7OHTigtU0s",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/frames_vtol/vtol_quadplane_volantex_ranger_ex_pixhawk.html"}},[t._v("Ranger QuadPlane")])],1),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=7tGXkW6d3sA&vq=hd720",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=_.exports},348:function(t,r,e){t.exports=e.p+"assets/img/hero.b7fc0e33.jpg"},393:function(t,r,e){t.exports=e.p+"assets/img/hero_small.d4732a64.png"},394:function(t,r,e){t.exports=e.p+"assets/img/hero.de23ca41.jpg"}}]);