(window.webpackJsonp=window.webpackJsonp||[]).push([[733],{2511:function(t,_,v){"use strict";v.r(_);var a=v(19),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"비행-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드"}},[t._v("#")]),t._v(" 비행 모드")]),t._v(" "),a("p",[a("em",[t._v("비행 모드")]),t._v("는 사용자 입력에 대한 자동조종장치의 응답 방식과 기체 제어 방식을 정의합니다. 자동조종장치가 제공하는 제어 수준/유형에 따라 "),a("em",[t._v("수동")]),t._v(", "),a("em",[t._v("보조")]),t._v(" 및 "),a("em",[t._v("자동")]),t._v(" 모드로 그룹화됩니다. 조종사는 리모콘 스위치를 사용하거나 지상 관제소를 사용하여 비행 모드를 전환할 수 있습니다.")]),t._v(" "),a("p",[t._v("기체마다 모든 비행 모드가  적용되지 않으며, 일부 모드는 기체 유형에 따라 작동 방식이 차이가 납니다(아래 설명 참조). 일부 비행 모드는 비행전과 비행중 조건(예: GPS 잠금, 속도 센서, 축을 따라 감지하는 차량 자세 감지)에서만 의미가 있습니다. 시스템은 조건이 충족할 때까지, 해당 모드로의 전환을 허용하지 않습니다.")]),t._v(" "),a("p",[t._v("아래 섹션에서는 모드 개요를 제공하고, PX4의 신규 모드 전환 조건을 나타내는 "),a("a",{attrs:{href:"#flight-mode-evaluation-diagram"}},[t._v("비행 모드 평가 다이어그램")]),t._v("을 제공합니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("사용자 대면 비행 모드 문서는 다음을 참고하십시오.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("시작 > 비행 모드")]),t._v(": 모든 비행 모드에 기초적인 설명")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes/"}},[t._v("비행 > 비행 모드")]),t._v(": 각 비행 모드에 대한 설명")],1)])]),t._v(" "),a("h2",{attrs:{id:"비행-모드-개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드-개요"}},[t._v("#")]),t._v(" 비행 모드 개요")]),t._v(" "),a("h3",{attrs:{id:"manual-flight-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-flight-modes"}},[t._v("#")]),t._v(" Manual Flight Modes")]),t._v(" "),a("p",[t._v('"수동" 모드는 사용자가 RC 제어(또는 조이스틱)로 차량을 직접 제어하는 모드입니다. 기체의 움직임은 항상 스틱에 따라 움직이지만, 모드에 따라 반응의 정도나 유형이 달라집니다. 예를 들어, 숙련된 비행사는 액츄에이터에 스틱 위치를 직접 전달하는 모드를 사용할 수 있지만, 초보자는 갑작스러운 스틱 위치 변경에 덜 반응하는 모드를 사용하는 경우가 많습니다.')]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("로보/보트:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("MANUAL/STABILIZED/ACRO:")]),t._v(" The pilot's control inputs (raw user inputs from RC transmitter) are passed directly to control allocation.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("고정익:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("MANUAL:")]),t._v(" The pilot's control inputs (raw user inputs from RC transmitter) are passed directly to control allocation.")]),t._v(" "),a("li",[a("strong",[t._v("STABILIZED:")]),t._v(" The pilot's pitch and roll inputs are passed as angle commands to the autopilot, while the yaw input is sent directly via control allocation to the rudder (manual control). RC 롤과 피치 스틱이 중앙에 있으면 자동조종장치가 롤과 피치 각도를 0으로 조절하여 바람의 방해에 대하여 자세를 안정화(평준화)합니다. 그러나, 이 모드에서는 기체의 위치가 자동조종장치에 의해 제어되지 않으므로, 바람에 의해 위치가 이동할 수 있습니다. 0이 아닌 롤 입력으로 기체는 제로 사이드슬립을 위하여 조정된 회전을 수행합니다(y 방향(측면)의 가속도는 0임). 조정 회전 동안 방향타를 사용하여 사이드 슬립을 제어하고, 여기에 수동 요 입력이 추가됩니다.")]),t._v(" "),a("li",[a("strong",[t._v("곡예:")]),t._v(" 조종사의 입력은 자동조종장치에 롤, 피치 및 요 "),a("em",[t._v("속도")]),t._v(" 명령으로 전달됩니다. 자동조종장치는 각속도를 제어합니다. Throttle is passed directly to control allocation.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("멀티콥터:")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("수동/안정화:")]),t._v(" 조종사의 입력은 롤 및 피치 "),a("em",[t._v("각도")]),t._v(" 명령과 요 "),a("em",[t._v("속도")]),t._v(" 명령으로 전달됩니다. Throttle is passed directly to control allocation. 자동조종장치는 자세를 제어합니다. 즉, RC 스틱이 중앙에 있을 때, 롤 및 피치 각도를 0으로 조절하여 자세를 평평하게 만듭니다. 그러나, 이 모드에서는 기체 위치가 자동조종장치에 의해 제어되지 않으므로, 바람에 의해 위치가 이탈할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")])])])])])]),t._v(" "),a("p",[t._v("멀티콥터의 수동 모드와 안정화 모드는 동일합니다.\n:::")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("곡예:")]),t._v(" 조종사의 입력은 자동조종장치에 롤, 피치 및 요 "),a("em",[t._v("속도")]),t._v(" 명령으로 전달됩니다. 자동조종장치는 각속도를 제어하지만, 자세는 제어하지 않습니다. 따라서, RC 스틱이 중앙에 위치하면 기체는 수평을 맞추지 않습니다. 이렇게 하면 멀티콥터가 완전히 뒤집힐 수 있습니다. Throttle is passed directly to control allocation.")])]),t._v(" "),a("h3",{attrs:{id:"보조-비행-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보조-비행-모드"}},[t._v("#")]),t._v(" 보조 비행 모드")]),t._v(" "),a("p",[t._v('"보조" 모드도 사용자가 제어할 수 있지만, 일정 수준의 "자동" 지원을 제공합니다(예: 바람에 대하여 자동으로 위치와 방향 유지). 보조 모드를 사용하 통제된 비행을 획득하거나 복원하기가 훨씬 쉬워집니다.')]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("ALTCTL")]),t._v(" (고도 제어)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("고정익:")]),t._v(" 롤, 피치 및 요(RPY) RC 스틱이 모두 중앙에 있을 때(또는 일부 지정된 데드밴드 범위 미만) 항공기는 직선 및 수평 비행으로 돌아가 현재 고도를 유지합니다. x와 y 위치는 바람에 따라 표류합니다.")]),t._v(" "),a("li",[a("strong",[t._v("멀티콥터:")]),t._v(" 롤, 피치 및 요 입력은 안정화 모드와 같습니다. 스로틀 입력은 미리 결정된 최대 속도로 상승 또는 하강을 나타냅니다. 스로틀에 데드존이 큽니다. 중앙 스로틀은 고도를 안정적으로 유지합니다. 자동조종장치는 고도만 제어하므로 차량의 x,y 위치가 바람에 따라 표류할 수 있습니다.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("POSCTL")]),t._v(" (위치 제어)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("고정익:")]),t._v(" 중립 입력(중앙 RC 스틱)은 수평 비행을 제공하고 직선을 유지하기 위하여 필요한 경우 바람에 맞서게 됩니다.")]),t._v(" "),a("li",[a("strong",[t._v("멀티콥터:")]),t._v(" 롤은 좌우 속도를 제어하고 피치는 지면에서 앞뒤 속도를 제어합니다. Yaw는 수동 모드에서와 같이 요 레이트를 제어합니다. 스로틀은 ALTCTL 모드에서와 같이 상승 하강 속도를 제어합니다. 이는 롤, 피치 및 스로틀 스틱이 중앙에 있을 때, 기체의 x, y, z 위치가 자동조종장치에 의해 바람 방해에 대해 안정적으로 유지되는 것을 의미합니다.")])])])]),t._v(" "),a("h3",{attrs:{id:"자동-비행-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자동-비행-모드"}},[t._v("#")]),t._v(" 자동 비행 모드")]),t._v(" "),a("p",[t._v('"자동" 모드는 컨트롤러가 사용자 입력이 필요없는 모드입니다(예: 이륙, 착륙 및 비행 임무).')]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("AUTO_LOITER")]),t._v(" (로이터)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("고정익:")]),t._v(" 항공기가 현재 고도(또는 현재 고도보다 약간 높을 수 있음)에서 현재 위치 주위를 배회합니다.")]),t._v(" "),a("li",[a("strong",[t._v("멀티콥터:")]),t._v(" 멀티콥터는 현재 위치와 고도에서 호버링 배회합니다.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("AUTO_RTL")]),t._v(" (실행으로 돌아가기)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("고정익:")]),t._v(" 항공기가 홈 위치로 돌아가 홈 위치 위에서 원을 그리며 배회합니다.")]),t._v(" "),a("li",[a("strong",[t._v("멀티콥터:")]),t._v(" 멀티콥터는 현재 고도(현재 고도가 홈 위치 + "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v("보다 높은 경우) 또는")],1)])])]),t._v(" "),a("p",[t._v("RTL_RETURN_ALT</ 1>("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v("이 현재 고도보다 높은 경우), 자동으로 착륙합니다.")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- **AUTO_MISSION** (미션) \n- **모든 시스템 유형:** 기체는 지상관제소(GCS)에서 전송한 프로그래밍된 임무를 수행합니다. 임무를 수신하지 않으면, 기체는 현재 위치에서 배회합니다.\n")])])]),a("ul",[a("li",[a("strong",[a("em",[t._v("OFFBOARD:")])]),t._v("(오프보드) 위치, 속도 또는 자세 기준/목표/설정점은 직렬 케이블과 MAVLink로 연결된 보조 컴퓨터에서 제공합니다. 오프보드 설정값은 "),a("a",{attrs:{href:"http://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),a("OutboundLink")],1),t._v(" 또는 "),a("a",{attrs:{href:"https://github.com/mavlink/mavros",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVROS"),a("OutboundLink")],1),t._v("와 같은 API에서 제공할 수 있습니다.")])]),t._v(" "),a("h2",{attrs:{id:"비행-모드-평가-다이어그램"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드-평가-다이어그램"}},[t._v("#")]),t._v(" 비행 모드 평가 다이어그램")]),t._v(" "),a("p",[a("img",{attrs:{src:v(633),alt:"지휘관 흐름도"}})])])}),[],!1,null,null,null);_.default=r.exports},633:function(t,_,v){t.exports=v.p+"assets/img/commander-flow-diagram.13a24a12.png"}}]);