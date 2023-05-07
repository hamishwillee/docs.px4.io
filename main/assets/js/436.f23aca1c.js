(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{2673:function(t,_,a){"use strict";a.r(_);var s=a(19),e=Object(s.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"비행-101"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비행-101"}},[t._v("#")]),t._v(" 비행 101")]),t._v(" "),s("p",[t._v("수동 또는 자동 조종 보조 비행 모드에서 "),s("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("RC 송신기")]),t._v("를 사용하여 기체 비행의 기본적인 사항들을 설명합니다 (자율 비행의 경우 "),s("RouterLink",{attrs:{to:"/ko/flying/missions.html"}},[t._v("미션")]),t._v(" 참조).")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("처음 비행하기 전에 "),s("RouterLink",{attrs:{to:"/ko/flying/first_flight_guidelines.html"}},[t._v("첫 비행 지침")]),t._v("을 읽어야 합니다. :::")],1),t._v(" "),s("p",[s("span",{attrs:{id:"arm"}})]),t._v(" "),s("h2",{attrs:{id:"기체-시동"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기체-시동"}},[t._v("#")]),t._v(" 기체 시동")]),t._v(" "),s("p",[t._v("Before you can fly the vehicle it must first be "),s("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#arming-and-disarming"}},[t._v("armed")]),t._v(". 시동을 걸면 모든 모터와 액추에이터에 전원을 공급합니다. 멀티 콥터에서는 프로펠러가 회전할 수 있습니다.")],1),t._v(" "),s("p",[t._v("드론 시동을 거는 방법")]),t._v(" "),s("ul",[s("li",[t._v("First disengage the "),s("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#safety-switch"}},[t._v("safety switch")]),t._v(".")],1),t._v(" "),s("li",[t._v("기체에 arm 명령을 사용하십시오. 스로틀 스틱을 오른쪽 하단에 놓으면 시동 명령이 실행됩니다.\n"),s("ul",[s("li",[t._v("Alternatively configure an "),s("RouterLink",{attrs:{to:"/ko/config/safety.html#arm-disarm-switch"}},[t._v("arm/disarm switch")]),t._v(".")],1),t._v(" "),s("li",[s("em",[t._v("QGroundControl")]),t._v("에서 시동을 걸 수도 있습니다. PX4는 자율 비행을 위해서 무선 조종기가 반드시 필요하지 않습니다.")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("기체는 "),s("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("보정과 설정")]),t._v("작업이 완료되고, 위치 잠금 설정시까지 시동을 걸 수 없습니다. :::note 이륙 시간이 너무 오래 걸리면 기체는 자동으로 ("),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("기본값")]),t._v(") "),s("RouterLink",{attrs:{to:"/ko/advanced_config/prearm_arm_disarm.html#auto-disarming"}},[t._v("무장 해제")]),t._v(" (모터 끄기) 됩니다! :::")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("이륙 시간이 너무 오래 걸리면 기체는 자동으로 ("),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("기본값")]),t._v(") "),s("RouterLink",{attrs:{to:"/ko/advanced_config/prearm_arm_disarm.html#auto-disarming"}},[t._v("무장 해제")]),t._v(" (모터 끄기) 됩니다! 이것은 기체를 사용하지 않을 때 안전한 상태로 되돌리는 안전 조치입니다. :::")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("VTOL은 멀티 콥터 모드에서만 시동이 가능합니다. 기본적으로 고정익 모드의 무장은 [CBRK_VTOLARMING](../advanced_config/parameter_reference.md#CBRK_VTOLARMING)을 사용하여 활성화 할 수 있습니다. :::")]),t._v(" "),s("p",[s("span",{attrs:{id:"takeoff-and-landing"}})]),t._v(" "),s("h2",{attrs:{id:"이륙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이륙"}},[t._v("#")]),t._v(" 이륙")]),t._v(" "),s("p",[t._v("가장 용이한 이륙 방법("),s("a",{attrs:{href:"#arm"}},[t._v("기체 시동")]),t._v(" 후)은 자동 "),s("RouterLink",{attrs:{to:"/ko/flight_modes/takeoff.html"}},[t._v("이륙 모드")]),t._v("를 사용하는 것입니다. 일반적으로 "),s("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("RC 스위치")]),t._v(" 또는 지상국 프로그램을 사용합니다.")],1),t._v(" "),s("p",[t._v("멀티 콥터 (및 멀티 콥터 모드의 VTOL) "),s("RouterLink",{attrs:{to:"/ko/flight_modes/#position_mc"}},[t._v("포지션 모드")]),t._v("를 활성화하고 기체 시동후 스로틀 스틱을 62.5 % 이상 올리면 "),s("em",[t._v("수동으로")]),t._v(" 이륙할 수 있습니다. 이 값을 초과하면 모든 컨트롤러가 활성화되고 차량이 호버링에 필요한 스로틀 수준 ("),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v(" MPC_THR_HOVER ")]),t._v(")으로 이동합니다")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("특히 고정익에는 자동 이륙 모드를 적극 권장합니다!")])])])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("시동 후 이륙 시간이 너무 오래 걸리면 차량의 시동이 해제될 수 있습니다 ("),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")]),t._v("를 사용하여 시간 제한 조정). :::")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/ko/config/safety.html#failure-detector"}},[t._v("Failure Detector")]),t._v(" will automatically stop the engines if there is a problem on takeoff. :::")],1),t._v(" "),s("h2",{attrs:{id:"착륙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#착륙"}},[t._v("#")]),t._v(" 착륙")]),t._v(" "),s("p",[t._v("가장 용이한 착륙 방법은 자동 "),s("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("착륙")]),t._v(" 또는 "),s("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("복귀")]),t._v(" 모드를 사용하는 것입니다.")],1),t._v(" "),s("p",[t._v("멀티 콥터 (및 멀티 콥터 모드의 VTOL)의 경우 차량이 착륙하고 무장 해제 될 때까지 스로틀 스틱을 아래로 눌러 수동으로 착륙할 수 있습니다.")]),t._v(" "),s("p",[t._v("차량은 기본적으로 착륙시 자동으로 무장 해제됩니다.")]),t._v(" "),s("ul",[s("li",[t._v("착륙 후 자동 해제 시간을 설정하려면 "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")]),t._v("를 사용하십시오 (또는 모두 비활성화).")],1),t._v(" "),s("li",[t._v("스로틀 스틱을 왼쪽 하단 모서리에 놓아 수동으로 무장 해제하십시오.")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v('착륙하는 동안 차량 "트위치"가 표시되는 경우 (모터를 껐다가 즉시 다시 켜십시오) 이는 잘못된 '),s("RouterLink",{attrs:{to:"/ko/advanced_config/land_detector.html"}},[t._v("토지 감지기 구성")]),t._v(" (특히 잘못 설정된 "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER ")]),t._v(" 때문일 수 있습니다.). :::")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("특히 고정익에는 자동 착륙 모드를 적극 권장합니다.")])])])])]),t._v(" "),s("h2",{attrs:{id:"비행-제어-명령어"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비행-제어-명령어"}},[t._v("#")]),t._v(" 비행 제어 명령어")]),t._v(" "),s("p",[t._v("이륙과 착륙을 포함한 모든 비행은 롤, 요, 피치 및 스로틀의 4 가지 기본 명령을 사용하여 제어됩니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(402),alt:"RC 기본 명령어"}})]),t._v(" "),s("p",[t._v('항공기를 제어하려면 기본 롤, 피치, 요 및 스로틀 명령이 3D 공간에서의 이동에 미치는 영향을 이해해야합니다 이것은 고정익과 같이 전진 비행기를 제어하는지, 아니면 다중기처럼 "공중 선회 항공기"를 제어하는 지에 따라 다릅니다.')]),t._v(" "),s("h3",{attrs:{id:"항공기-선회"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#항공기-선회"}},[t._v("#")]),t._v(" 항공기 선회")]),t._v(" "),s("p",[t._v("선회 항공기 (헬리콥터 모드, 호버 모드의 헬리콥터)는 다음과 같이 이동 명령에 응답합니다")]),t._v(" "),s("p",[s("img",{attrs:{src:a(960),alt:"기본 동작 Multicopter"}})]),t._v(" "),s("ul",[s("li",[t._v("피치 => 앞으로 / 뒤로.")]),t._v(" "),s("li",[t._v("롤 => 왼쪽 / 오른쪽.")]),t._v(" "),s("li",[t._v("Yaw => 프레임 중앙을 중심으로 좌우로 회전.")]),t._v(" "),s("li",[t._v("Throttle => 고도/속도 제어")])]),t._v(" "),s("h3",{attrs:{id:"전방-비행-항공기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전방-비행-항공기"}},[t._v("#")]),t._v(" 전방 비행 항공기")]),t._v(" "),s("p",[t._v("전방 비행 항공기 (항공기, 전방 비행 중 VTOL)는 다음과 같이 이동 명령에 응답합니다")]),t._v(" "),s("p",[s("img",{attrs:{src:a(961),alt:"기본 동작 전달"}})]),t._v(" "),s("ul",[s("li",[t._v("피치 => 위 / 아래.")]),t._v(" "),s("li",[t._v("롤 => 왼쪽 / 오른쪽 및 차례.")]),t._v(" "),s("li",[t._v("Yaw => 왼쪽 / 오른쪽 꼬리 회전과 방향 전환.")]),t._v(" "),s("li",[t._v("Throttle => 고도/속도 제어")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("비행기에 가장 적합한 회전은 조정 회전이라고하며 롤과 작은 요를 동시에 사용하여 수행됩니다.\n이 기동에는 많은 경험이 필요합니다!")])]),t._v(" "),s("h2",{attrs:{id:"보조-비행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#보조-비행"}},[t._v("#")]),t._v(" 보조 비행")]),t._v(" "),s("p",[t._v("기체 제어 매커니즘을 충분히 이해하고 있어도, 완전 수동 모드 비행은 매우 어려운 작업입니다. 초보자는 비행 모드를 사용하도록 "),s("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v(" 송신기를 구성")]),t._v(" 하여야 합니다. 자동조종장치는 잘못된 사용자 입력이나 환경적인 요인을 자동으로 보완하여 비행합니다.")],1),t._v(" "),s("p",[t._v("초보자에게 다음 세 가지 모드를 적극 권장합니다.")]),t._v(" "),s("ul",[s("li",[t._v("안정화 모드-차량을 뒤집기 어렵고 스틱을 놓으면 수평이됩니다 (정지 위치가 아님).")]),t._v(" "),s("li",[t._v("고도 - 상승 및 하강이 최대 속도로 제어됩니다.")]),t._v(" "),s("li",[t._v("위치 - 스틱을 놓으면 차량이 정지합니다. (그리고 바람 드리프트에 대한 위치 유지).")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[s("em",[t._v("QGroundControl")]),t._v(" 기본 비행 화면 하단에있는 버튼을 통해 자동 모드를 액세스할 수 있습니다. :::")])])])}),[],!1,null,null,null);_.default=e.exports},402:function(t,_,a){t.exports=a.p+"assets/img/rc_basic_commands.3311bd90.png"},960:function(t,_,a){t.exports=a.p+"assets/img/basic_movements_multicopter.a34373d7.png"},961:function(t,_,a){t.exports=a.p+"assets/img/basic_movements_forward.1fa3a12d.png"}}]);