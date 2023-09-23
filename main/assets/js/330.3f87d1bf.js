(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{2727:function(t,_,e){"use strict";e.r(_);var a=e(19),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"위치-모드-멀티콥터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#위치-모드-멀티콥터"}},[t._v("#")]),t._v(" 위치 모드(멀티콥터)")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_difficulty"}},[a("img",{attrs:{src:e(331),title:"초급 난이도 비행",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_manual"}},[a("img",{attrs:{src:e(329),title:"수동/원격 제어 필요",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:e(328),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),t._v(" "),a("p",[a("em",[t._v("위치")]),t._v(" 모드는 롤링이 가능한 비행하기 쉬운 RC 모드입니다. 피치 스틱은 차량의 좌우 및 전후 방향(자동차의 가속 페달과 유사)의 지면 가속을 제어하고, 스로틀은 상승-하강 속도를 제어합니다. 스틱을 풀거나 중앙에 놓으면 차량이 능동적으로 제동하고 수평을 맞추고 3D 공간의 위치에 고정되어 바람과 기타 힘을 보상합니다. With full stick deflection the vehicle accelerates initially with "),a("a",{attrs:{href:"#MPC_ACC_HOR_MAX"}},[t._v("MPC_ACC_HOR_MAX")]),t._v(" ramping down until it reaches the final velocity "),a("a",{attrs:{href:"#MPC_VEL_MANUAL"}},[t._v("MPC_VEL_MANUAL")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("위치 모드는 새 전단지를위한 가장 안전한 수동 모드입니다. "),a("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("고도")]),t._v(" 및 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("수동 / 안정화")]),t._v(" 모드와 달리, 차량은 바람의 저항에 의해 감속 될 때까지 계속되는 대신 스틱이 중앙에있을 때 정지합니다. :::")],1),t._v(" "),a("p",[t._v("아래 다이어그램은 모드 동작을 시각적으로 보여줍니다 (모드 2 송신기의 경우).")]),t._v(" "),a("p",[a("img",{attrs:{src:e(399),alt:"멀티콥터 위치 모드"}})]),t._v(" "),a("h3",{attrs:{id:"착륙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#착륙"}},[t._v("#")]),t._v(" 착륙")]),t._v(" "),a("p",[t._v("이 모드에서 착륙은 용이합니다.")]),t._v(" "),a("ol",[a("li",[t._v("롤 및 피치 스틱을 사용하여 드론을 착륙 지점 위에 수평으로 배치합니다.")]),t._v(" "),a("li",[t._v("롤 및 피치 스틱을 놓고 완전히 멈출 때까지 충분한 시간을 둡니다.")]),t._v(" "),a("li",[t._v("차량이 지면에 닿을 때까지 스로틀 스틱을 부드럽게 아래로 당깁니다.")]),t._v(" "),a("li",[t._v("스로틀 스틱을 끝까지 당기면 지상 감지를 촉진하고 가속화할 수 있습니다.")]),t._v(" "),a("li",[t._v("차량은 프로펠러 추력을 낮추고, 지면을 감지하여 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/prearm_arm_disarm.html#auto-disarming"}},[t._v("자동으로 시동 해제")]),t._v("합니다(기본값).")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("잘 보정된 차량에서는 매우 드물지만 때때로 착륙에 문제가 발생할 수 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("차량이 수평으로 움직이지 않는 경우:\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("고도 모드")]),t._v("에서 계속 착륙할 수 있습니다. 접근 방식은 롤 및 피치 스틱을 사용하여 차량이 착륙 지점 위에 있는지 수동으로 확인하는 점을 제외하고 위와 동일합니다.")],1),t._v(" "),a("li",[t._v("착륙 후 GPS와 자력계 방향을 확인하고 보정합니다.")])])]),t._v(" "),a("li",[t._v("차량이 지상/착륙 및 무장 해제를 감지하지 못하는 경우:\n"),a("ul",[a("li",[t._v("차량이 지상에 도착한 후 스로틀 스틱을 낮게 유지하면서 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("수동/안정화 모드")]),t._v("로 전환하고 제스처나 다른 명령을 사용하여 수동으로 무장 해제합니다. 또는 차량이 이미 지상에 있을 때 킬 스위치를 사용할 수도 있습니다. :::")],1)])])]),t._v(" "),a("h2",{attrs:{id:"기술-요약"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기술-요약"}},[t._v("#")]),t._v(" 기술 요약")]),t._v(" "),a("p",[t._v("롤, 피치, 스로틀(RPT) 스틱이 해당 축/방향의 움직임을 제어하는 RC 모드. 중앙에 있는 스틱은 차량을 수평으로 유지하고, 바람에 맞서 고정된 고도와 위치를 유지합니다.")]),t._v(" "),a("ul",[a("li",[t._v("중앙 롤, 피치, 스로틀 스틱(RC 데드존 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[t._v("MPC_HOLD_DZ")]),t._v(" 내)은 바람과 같은 방해 요소에 대해 x, y, z 위치를 안정적으로 유지합니다.")],1),t._v(" "),a("li",[t._v("센터  외부:\n"),a("ul",[a("li",[t._v("롤/피치 스틱은 차량의 좌우 및 전후 방향(각각)으로 지면에서 수평 가속을 제어합니다.")]),t._v(" "),a("li",[t._v("스로틀 스틱은 상승 하강 속도를 제어합니다.")]),t._v(" "),a("li",[t._v("요 스틱은 수평면 위의  회전 각속도를 제어합니다.")])])]),t._v(" "),a("li",[t._v("이륙:\n"),a("ul",[a("li",[t._v("착륙했을 때 스로틀 스틱을 62.5 % (하단에서 전체 범위) 이상으로 올리면 기체가 이륙합니다.")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("ul",[a("li",[t._v("수동 입력이 필요합니다 (RC 컨트롤러 또는 MAVLink를 통한 게임 패드/엄지 스틱).")]),t._v(" "),a("li",[t._v("이 모드는 GPS가 필요합니다. :::")])]),t._v(" "),a("h3",{attrs:{id:"매개변수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#매개변수"}},[t._v("#")]),t._v(" 매개변수")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#multicopter-position-control"}},[t._v("Multicopter Position Control ")]),t._v(" 그룹의 모든 매개 변수는 관련이 있습니다. 특정 참고 사항의 몇 가지 매개 변수를 아래에서 설명합니다.")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"MPC_HOLD_DZ"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[t._v("MPC_HOLD_DZ")])],1),t._v(" "),a("td",[t._v("위치 유지가 활성화 된 스틱의 Deadzone입니다.  기본값 : 0.1 (전체 스틱 범위의 10 %).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),a("td",[t._v("최대 수직 상승 속도. 기본값: 3 m/s.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),a("td",[t._v("최대 수직 하강 속도. 기본값: 1 m/s.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_LAND_ALT1"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_ALT1"}},[t._v("MPC_LAND_ALT1")])],1),t._v(" "),a("td",[t._v("느린 착륙의 첫 번째 단계가 동작하는 고도입니다. Below this altitude descending velocity gets limited to a value between "),a("a",{attrs:{href:"#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")]),t._v(" (or "),a("code",[t._v("MPC_Z_V_AUTO_DN")]),t._v(") and "),a("a",{attrs:{href:"#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")]),t._v(". Value needs to be higher than "),a("a",{attrs:{href:"#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")]),t._v(". Default 10m.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_LAND_ALT2"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")])],1),t._v(" "),a("td",[t._v("느린 착륙의 두 번째 단계를 위한 고도. Below this altitude descending velocity gets limited to "),a("a",{attrs:{href:"#MPC_LAND_SPEED"}},[a("code",[t._v("MPC_LAND_SPEED")])]),t._v('. Value needs to be lower than "MPC_LAND_ALT1". 기본값:  5m.')])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RCX_DZ"}}),a("code",[t._v("RCX_DZ")])]),t._v(" "),a("td",[t._v("채널 X의 RC 데드 존. 스로틀에 대한 X 값은 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v("RC_MAP_THROTTLE")]),t._v(" 값에 따라 달라집니다. 예를 들어, 스로틀이 채널 4 인 경우 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v("RC4_DZ")]),t._v("는 데드 존을 지정합니다.")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_xxx"}}),a("code",[t._v("MPC_XXXX")])]),t._v(" "),a("td",[t._v("대부분의 MPC_xxx 매개 변수는이 모드에서 비행 동작에 어느정도 영향을 미칩니다 . 예를 들어, "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v("는 기체의 호버링 추력을 정의합니다.")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_POS_MODE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")])],1),t._v(" "),a("td",[t._v("움직임 번역 전략에 대한 입력을 고수하십시오. PX4 v1.12부터 기본(4)은 스틱 위치가 가속을 제어하는 것입니다(자동차 가속 페달과 유사한 방식). 다른 옵션을 사용하면 스무딩 및 가속 제한이 있거나 없는 상태에서 스틱 편향이 지면 위의 속도를 직접 제어할 수 있습니다.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_ACC_HOR_MAX"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_HOR_MAX"}},[t._v("MPC_ACC_HOR_MAX")])],1),t._v(" "),a("td",[t._v("최대 수평 가속도.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_VEL_MANUAL"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_VEL_MANUAL"}},[t._v("MPC_VEL_MANUAL")])],1),t._v(" "),a("td",[t._v("최대 수평 속도.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_LAND_SPEED"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")])],1),t._v(" "),a("td",[t._v("Landing descend rate. Default 0.7 m/s.")])])])]),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("h3",{attrs:{id:"위치-손실-안전"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#위치-손실-안전"}},[t._v("#")]),t._v(" 위치 손실 / 안전")]),t._v(" "),a("p",[t._v("위치 모드는 수용 가능한 위치 추정치에 따라 다릅니다. 예를 들어, GPS 손실로 인해 추정치가 허용 수준 이하로 떨어지면 "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#position-gps-loss-failsafe"}},[t._v("위치(GPS) 손실 안전 장치")]),t._v("가 동작할 수 있습니다. 구성, 리모컨 보유 여부와 적절 고도 추정치가 있는지 여부에 따라 PX4는 고도 모드, 수동 모드, 착륙 모드로 전환하거나 종료할 수 있습니다.")],1)])])])])}),[],!1,null,null,null);_.default=r.exports},328:function(t,_,e){t.exports=e.p+"assets/img/position_fixed.38e4a675.svg"},329:function(t,_,e){t.exports=e.p+"assets/img/remote_control.5fceab4e.svg"},331:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMLck2OcY5Lck3Lck3Lck3LMk3QL9ALck3M8wzLsg3Lsk4LtEuM8wzLck3Lsg3Lck3Lck3LMo3Lsk4Lck3IL9ALck3Lck3JNtJLck2Lcs4LMk2Lcg3Lsc4LMo4Lco3LMc4K8wzL8Y5Lck3McQ7Lck4Lck3LMg3Lso4Lck4LMo4Lck3Lck3Lck2Lco3L8s5Lck3Lsk3Lsg3Lck3KMk2LMw6Lck3Lck3Lck3KcU6LcM8Lcg3Lsk3Lsk4LMo1Lck2K8Y5Lsg3LMk3Lck3Lck2LMk2Lsk2Lck2Lco3LMk2K8o1Lco5KcwzLck3LMo4Lck2LMg3Lso1Lsg3Lck4L8g3Lck3K8k2Lsk2Lck2Lck3K8o1Lck3VapVLMk2K9UrLMk3Lck4Lsg3Lck3Lco3Lck3Lck2Lsk3Lck2Lcg3Lco3J8Q7Lsg3MMc4Lsc4Lck2M8wzLck3Lck3LMg3M8wzLsk2Lcg3Lck4Lck3Lck3LMo4K8s4K8g3Lck4Lck3Lck3Lck3Lco3Lcg3JMg3Lcg3Lsk2LMk2Lso3Lck3LMk2LMg3Lck3hb9vmgAAAIp0Uk5TAPgJ7f7uwwT5CsSzCwXvVMjGp4DxCNDdB8VEsrsyVn1AHhvwGtPURU2lV8z7UI82mKJv8hMj1sfRHxEz4JcdkhKt697AND2NlJs1Pxm0UqTJQ1h3PPcvWYj8MPMDUQa4vHCrv8u3z1WamQ0cIE52D9X1dBQhtsq19G47Qa7Br7Cxgw6HQn+G+oRGHgf53gAAAsdJREFUaN612ndbGkEQBvClHBx30pFeBQlgiUaNJsaSRGM31hTTe++9ml7mU4cQICAH3N3OvP/zex4Wdm925hhTk47YhtfjHgsIoigExtye7xuxDoYTW9gbFaEhZ3vO5L7w2p1xWYGuxBBxdnLg+xcc0CaOO4s68S0ZVEXK6cD3hUB1pLBGPDMImiKnNODWA0OgMU+8F9Xqh0ZBR3pG1Ol9AuiKr6ACt8+D7kzZ2+7RV8CR6N3W+mEJuLL2rJV+7yBwJtvVXB/m1gEeTzdddwkQ4mpyVNtfAEpWrIr8PCClX0l3YulgvtCoj6TReHA8b1j464AY197lfwiouVKvT57D5Yfqd9dRQI6n7skH6EnW8BI+P/NffwcEOVHlL1Pwl6rVEpBktswv0PAD5TrSQcOnjSW+AERxlvgVKv5T6RlloOINf1fnN5Blvch/peN/Ffk1Ot5dvJX10vG9NhYDwpxipyn5OPNS8gnmoeRPshAlb2HdlLyfHaHkjzMTJX+MiZS8gZonXhzin5b4j0m8rYgPBeIjjfhAJn6cUD4Mf9oYc9HxoWKl8IOO/0xz8ankG2kRuF0qkSNU/MdShXyLil8lvT4IwX/Xk9s0/ET5brVIw49XroZRCv1G9V6bpL02Mwu+fq2mpxDG55dqWyJXsfV8XT9n2Yer+zL17ainuPybva26l6h3toZOaQqxXBPuNzYyc2Ys3dyn1IadwuLnFHvI59/j6LJyi5oZUTbvaNNZ6CM/v56dbj5+6Mry6t2ZlqMZzvVxDbce/QS52r0RY9t5Yb/u/795zqpi7vZA5/5NO1WOJHWVne6U+oGq5vP59aZVw8R2eVDbLyBPapw3Jz+ox2eWdEzL38rqvoG0rnPWPzvQdjIsTIxzvKkQdEZa1Ofbu6tB3hctjFubTV7iCBsZTmw7hUTe4g+YRNEUuGnJJ+I7NlUf/APjU3MV9RK8MwAAAABJRU5ErkJggg=="},399:function(t,_,e){t.exports=e.p+"assets/img/position_MC.c6191ec9.png"}}]);