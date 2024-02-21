(window.webpackJsonp=window.webpackJsonp||[]).push([[789],{2733:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"비행-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드"}},[t._v("#")]),t._v(" 비행 모드")]),t._v(" "),a("p",[a("em",[t._v("Flight Modes")]),t._v(" define how the autopilot responds to user input and controls vehicle movement. They are loosely grouped into "),a("em",[t._v("manual")]),t._v(", "),a("em",[t._v("assisted")]),t._v(" and "),a("em",[t._v("auto")]),t._v(" modes, based on the level/type of control provided by the autopilot. 조종사는 리모콘 스위치를 사용하거나 지상 관제소를 사용하여 비행 모드를 전환할 수 있습니다.")]),t._v(" "),a("p",[t._v("기체마다 모든 비행 모드가  적용되지 않으며, 일부 모드는 기체 유형에 따라 작동 방식이 차이가 납니다(아래 설명 참조). Finally, some flight modes make sense only under specific pre-flight and in-flight conditions (e.g. GPS lock). 시스템은 조건이 충족할 때까지, 해당 모드로의 전환을 허용하지 않습니다.")]),t._v(" "),a("p",[t._v("아래 섹션에서는 모드 개요를 제공하고, PX4의 신규 모드 전환 조건을 나타내는 "),a("a",{attrs:{href:"#flight-mode-evaluation-diagram"}},[t._v("비행 모드 평가 다이어그램")]),t._v("을 제공합니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("사용자 대면 비행 모드 문서는 다음을 참고하십시오.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/"}},[t._v("Flight Modes (Multicopter)")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_fw/"}},[t._v("Flight Modes (Fixed-wing)")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_vtol/"}},[t._v("Flight Modes (VTOL)")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_rover/"}},[t._v("Flight/Drive Modes (Rover)")])],1)])]),t._v(" "),a("h2",{attrs:{id:"비행-모드-개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드-개요"}},[t._v("#")]),t._v(" 비행 모드 개요")]),t._v(" "),a("h3",{attrs:{id:"manual-flight-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-flight-modes"}},[t._v("#")]),t._v(" Manual Flight Modes")]),t._v(" "),a("p",[t._v('"Manual" modes are those where the user has direct control over the vehicle via the RC control (or joystick). Vehicle movement always follows stick movement, but the level/type of response changes depending on the mode. For example, experienced fliers can use modes that provide direct passthrough of stick positions to actuators, while beginners will often choose modes that are less responsive to sudden stick-position changes.')]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("로보/보트:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("MANUAL/STABILIZED/ACRO:")]),t._v(" The pilot's control inputs (raw user inputs from RC transmitter) are passed directly to control allocation.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Fixed-wing aircraft:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("MANUAL:")]),t._v(" The pilot's control inputs (raw user inputs from RC transmitter) are passed directly to control allocation.")]),t._v(" "),a("li",[a("strong",[t._v("STABILIZED:")]),t._v(" The pilot's pitch and roll inputs are passed as angle commands to the autopilot, while the yaw input is sent directly via control allocation to the rudder (manual control). RC 롤과 피치 스틱이 중앙에 있으면 자동조종장치가 롤과 피치 각도를 0으로 조절하여 바람의 방해에 대하여 자세를 안정화(평준화)합니다. 그러나, 이 모드에서는 기체의 위치가 자동조종장치에 의해 제어되지 않으므로, 바람에 의해 위치가 이동할 수 있습니다. 0이 아닌 롤 입력으로 기체는 제로 사이드슬립을 위하여 조정된 회전을 수행합니다(y 방향(측면)의 가속도는 0임). 조정 회전 동안 방향타를 사용하여 사이드 슬립을 제어하고, 여기에 수동 요 입력이 추가됩니다.")]),t._v(" "),a("li",[a("strong",[t._v("ACRO:")]),t._v(" The pilot's inputs are passed as roll, pitch, and yaw "),a("em",[t._v("rate")]),t._v(" commands to the autopilot. 자동조종장치는 각속도를 제어합니다. Throttle is passed directly to control allocation.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("멀티콥터:")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("MANUAL/STABILIZED")]),t._v(" The pilot's inputs are passed as roll and pitch "),a("em",[t._v("angle")]),t._v(" commands and a yaw "),a("em",[t._v("rate")]),t._v(" command. Throttle is passed directly to control allocation. 자동조종장치는 자세를 제어합니다. 즉, RC 스틱이 중앙에 있을 때, 롤 및 피치 각도를 0으로 조절하여 자세를 평평하게 만듭니다. 그러나, 이 모드에서는 기체 위치가 자동조종장치에 의해 제어되지 않으므로, 바람에 의해 위치가 이탈할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")])])])])])]),t._v(" "),a("p",[t._v("멀티콥터의 수동 모드와 안정화 모드는 동일합니다.\n:::")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("ACRO:")]),t._v(" The pilot's inputs are passed as roll, pitch, and yaw "),a("em",[t._v("rate")]),t._v(" commands to the autopilot. 자동조종장치는 각속도를 제어하지만, 자세는 제어하지 않습니다. 따라서, RC 스틱이 중앙에 위치하면 기체는 수평을 맞추지 않습니다. 이렇게 하면 멀티콥터가 완전히 뒤집힐 수 있습니다. Throttle is passed directly to control allocation.")])]),t._v(" "),a("h3",{attrs:{id:"보조-비행-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보조-비행-모드"}},[t._v("#")]),t._v(" 보조 비행 모드")]),t._v(" "),a("p",[t._v('"Assisted" modes are also user controlled but offer some level of "automatic" assistance - for example, automatically holding position/direction, against wind. Assisted modes often make it much easier to gain or restore controlled flight.')]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("ALTCTL")]),t._v(" (고도 제어)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Fixed-wing aircraft:")]),t._v(" When the roll, pitch and yaw (RPY) RC sticks are all centered (or less than some specified deadband range) the aircraft will return to straight and level flight and keep its current altitude. x와 y 위치는 바람에 따라 표류합니다.")]),t._v(" "),a("li",[a("strong",[t._v("멀티콥터:")]),t._v(" 롤, 피치 및 요 입력은 안정화 모드와 같습니다. 스로틀 입력은 미리 결정된 최대 속도로 상승 또는 하강을 나타냅니다. 스로틀에 데드존이 큽니다. 중앙 스로틀은 고도를 안정적으로 유지합니다. 자동조종장치는 고도만 제어하므로 차량의 x,y 위치가 바람에 따라 표류할 수 있습니다.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("POSCTL")]),t._v(" (위치 제어)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Fixed-wing aircraft:")]),t._v(" Neutral inputs (centered RC sticks) give level flight and it will crab against the wind if needed to maintain a straight line.")]),t._v(" "),a("li",[a("strong",[t._v("멀티콥터:")]),t._v(" 롤은 좌우 속도를 제어하고 피치는 지면에서 앞뒤 속도를 제어합니다. Yaw는 수동 모드에서와 같이 요 레이트를 제어합니다. 스로틀은 ALTCTL 모드에서와 같이 상승 하강 속도를 제어합니다. 이는 롤, 피치 및 스로틀 스틱이 중앙에 있을 때, 기체의 x, y, z 위치가 자동조종장치에 의해 바람 방해에 대해 안정적으로 유지되는 것을 의미합니다.")])])])]),t._v(" "),a("h3",{attrs:{id:"자동-비행-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자동-비행-모드"}},[t._v("#")]),t._v(" 자동 비행 모드")]),t._v(" "),a("p",[t._v('"Auto" modes are those where the controller requires little to no user input (e.g. to takeoff, land and fly missions).')]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("AUTO_LOITER")]),t._v(" (로이터)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Fixed-wing aircraft:")]),t._v(" The aircraft loiters around the current position at the current altitude (or possibly slightly above the current altitude, good for 'I'm losing it').")]),t._v(" "),a("li",[a("strong",[t._v("Multirotors:")]),t._v(" The multirotor hovers / loiters at the current position and altitude.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("AUTO_RTL")]),t._v(" (실행으로 돌아가기)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Fixed-wing aircraft:")]),t._v(" The aircraft returns to the home position and loiters in a circle above the home position.")]),t._v(" "),a("li",[a("strong",[t._v("멀티콥터:")]),t._v(" 멀티콥터는 현재 고도(현재 고도가 홈 위치 + "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v("보다 높은 경우) 또는 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v("("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v("이 현재 고도보다 높은 경우), 자동으로 착륙합니다.")],1)])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("AUTO_MISSION")]),t._v(" (Mission)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("모든 시스템 유형:")]),t._v(" 기체는 지상관제소(GCS)에서 전송한 프로그래밍된 임무를 수행합니다. 임무를 수신하지 않으면, 기체는 현재 위치에서 배회합니다.")]),t._v(" "),a("li",[a("strong",[a("em",[t._v("OFFBOARD:")])]),t._v("(오프보드) 위치, 속도 또는 자세 기준/목표/설정점은 직렬 케이블과 MAVLink로 연결된 보조 컴퓨터에서 제공합니다. 오프보드 설정값은 "),a("a",{attrs:{href:"http://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),a("OutboundLink")],1),t._v(" 또는 "),a("a",{attrs:{href:"https://github.com/mavlink/mavros",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVROS"),a("OutboundLink")],1),t._v("와 같은 API에서 제공할 수 있습니다.")])])])]),t._v(" "),a("h2",{attrs:{id:"비행-모드-평가-다이어그램"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드-평가-다이어그램"}},[t._v("#")]),t._v(" 비행 모드 평가 다이어그램")]),t._v(" "),a("p",[a("img",{attrs:{src:o(667),alt:"Commander Flow diagram"}})])])}),[],!1,null,null,null);e.default=r.exports},667:function(t,e,o){t.exports=o.p+"assets/img/commander-flow-diagram.13a24a12.png"}}]);