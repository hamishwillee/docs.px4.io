(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{2717:function(t,_,c){"use strict";c.r(_);var L=c(19),e=Object(L.a)({},(function(){var t=this,_=t.$createElement,L=t._self._c||_;return L("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[L("h1",{attrs:{id:"고도-모드-멀티콥터"}},[L("a",{staticClass:"header-anchor",attrs:{href:"#고도-모드-멀티콥터"}},[t._v("#")]),t._v(" 고도 모드 (멀티콥터)")]),t._v(" "),L("p",[L("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_difficulty"}},[L("img",{attrs:{src:c(331),title:"초급 난이도 비행",width:"30px"}})]),t._v(" "),L("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_manual"}},[L("img",{attrs:{src:c(329),title:"수동/원격 제어 필요",width:"30px"}})]),t._v(" "),L("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#altitude_only"}},[L("img",{attrs:{src:c(336),title:"필요한 고도 (예 : 기압계, 거리계)",width:"30px"}})])],1),t._v(" "),L("p",[L("em",[t._v("고도 모드")]),t._v("에서는 "),L("em",[t._v("상대적으로")]),t._v(' 비행하기 용이한 RC 모드로, 롤 및 피치 스틱이 차량 이동을 좌우 및 앞뒤 방향(차량의 "전면" 기준)으로 제어하고, 요 스틱은 수평면에서 회전 속도를 제어하고 스로틀은 상승 하강 속도를 제어합니다.')]),t._v(" "),L("p",[t._v("스틱을 놓거나 중앙에 놓으면 차량이 수평을 유지하고 현재 "),L("em",[t._v("고도")]),t._v("를 유지합니다. 수평면에서 이동하는 경우 차량은 바람 저항에 의해 모멘텀이 소실 될 때까지 계속됩니다. 바람이 불면 기체는 바람의 방향으로 표류합니다.")]),t._v(" "),L("div",{staticClass:"custom-block tip"},[L("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),L("p",[t._v("*고도 모드< 0>는 초보 비행자에게 가장 안전한 비 GPS 수동 모드입니다. "),L("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("수동 / 안정화")]),t._v(" 모드와 비슷하지만 스틱을 놓으면 기체의 고도가 계속 유지됩니다. :::")],1),t._v(" "),L("p",[t._v("아래 다이어그램은 모드 동작을 시각적으로 보여줍니다 ("),L("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("모드 2 송신기")]),t._v("의 경우).")],1),t._v(" "),L("p",[L("img",{attrs:{src:c(914),alt:"고도 제어 MC-Mode2 RC 컨트롤러"}})]),t._v(" "),L("h2",{attrs:{id:"기술-요약"}},[L("a",{staticClass:"header-anchor",attrs:{href:"#기술-요약"}},[t._v("#")]),t._v(" 기술 요약")]),t._v(" "),L("p",[t._v("RC 수동 모드는 "),L("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("수동/안정화(멀티콥터)")]),t._v(" 모드와 같지만 "),L("em",[t._v("고도 안정화")]),t._v("가 있습니다 (가운데 스틱이 차량을 수평으로 유지하고 고정 고도를 유지).")],1),t._v(" "),L("ul",[L("li",[t._v("중앙 스틱 (데드밴드 내부) :\n"),L("ul",[L("li",[t._v("RPY는 기체 수평을 유지합니다.")]),t._v(" "),L("li",[t._v("스로틀(~ 50 %)은 현재 고도를 바람에 대해 일정하게 유지합니다.")])])]),t._v(" "),L("li",[t._v("센터  외부:\n"),L("ul",[L("li",[t._v("롤/피치 스틱은 각각의 방향에서 틸트 각도를 제어하여 해당하는 좌우와 전후 방향으로 이동합니다.")]),t._v(" "),L("li",[t._v("스로틀 스틱은 미리 정해진 최대 속도 (및 다른 축의 이동 속도)로 속도를 올리거나 내립니다.")]),t._v(" "),L("li",[t._v("요 스틱은 수평면 위의  회전 각속도를 제어합니다.")])])]),t._v(" "),L("li",[t._v("이륙:\n"),L("ul",[L("li",[t._v("착륙했을 때 스로틀 스틱을 62.5 % (하단에서 전체 범위) 이상으로 올리면 기체가 이륙합니다.")])])])]),t._v(" "),L("div",{staticClass:"custom-block note"},[L("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),L("ul",[L("li",[t._v("수동 입력이 필요합니다 (RC 컨트롤러 또는 MAVLink를 통한 게임 패드/엄지 스틱).")]),t._v(" "),L("li",[t._v("고도는 일반적으로 기압계로 측정되며 극단적인 기상 조건에서는 정확하지 않을 수 있습니다. LIDAR/거리 센서가 장착된 기체는 높은 정확도로 고도를 제어할 수 있습니다. :::")])]),t._v(" "),L("h2",{attrs:{id:"매개-변수"}},[L("a",{staticClass:"header-anchor",attrs:{href:"#매개-변수"}},[t._v("#")]),t._v(" 매개 변수")]),t._v(" "),L("p",[t._v("이 모드는 아래의 매개 변수의 영향을받습니다.")]),t._v(" "),L("table",[L("thead",[L("tr",[L("th",[t._v("매개 변수")]),t._v(" "),L("th",[t._v("설명")])])]),t._v(" "),L("tbody",[L("tr",[L("td",[L("a",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),L("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),L("td",[t._v("최대 수직 상승 속도. 기본값: 3 m/s.")])]),t._v(" "),L("tr",[L("td",[L("a",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),L("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),L("td",[t._v("최대 수직 하강 속도. 기본값: 1 m/s.")])]),t._v(" "),L("tr",[L("td",[L("a",{attrs:{id:"RCX_DZ"}}),L("code",[t._v("RCX_DZ")])]),t._v(" "),L("td",[t._v("채널 X의 RC 데드 존. 스로틀에 대한 X 값은 "),L("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v("RC_MAP_THROTTLE")]),t._v(" 값에 따라 달라집니다. 예를 들어, 스로틀이 채널 4 인 경우 "),L("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v("RC4_DZ")]),t._v("는 데드 존을 지정합니다.")],1)]),t._v(" "),L("tr",[L("td",[L("a",{attrs:{id:"MPC_xxx"}}),L("code",[t._v("MPC_XXXX")])]),t._v(" "),L("td",[t._v("대부분의 MPC_xxx 매개 변수는이 모드에서 비행 동작에 어느정도 영향을 미칩니다 . 예를 들어, "),L("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v("는 기체의 호버링 추력을 정의합니다.")],1)])])])])])])}),[],!1,null,null,null);_.default=e.exports},329:function(t,_,c){t.exports=c.p+"assets/img/remote_control.5fceab4e.svg"},331:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMLck2OcY5Lck3Lck3Lck3LMk3QL9ALck3M8wzLsg3Lsk4LtEuM8wzLck3Lsg3Lck3Lck3LMo3Lsk4Lck3IL9ALck3Lck3JNtJLck2Lcs4LMk2Lcg3Lsc4LMo4Lco3LMc4K8wzL8Y5Lck3McQ7Lck4Lck3LMg3Lso4Lck4LMo4Lck3Lck3Lck2Lco3L8s5Lck3Lsk3Lsg3Lck3KMk2LMw6Lck3Lck3Lck3KcU6LcM8Lcg3Lsk3Lsk4LMo1Lck2K8Y5Lsg3LMk3Lck3Lck2LMk2Lsk2Lck2Lco3LMk2K8o1Lco5KcwzLck3LMo4Lck2LMg3Lso1Lsg3Lck4L8g3Lck3K8k2Lsk2Lck2Lck3K8o1Lck3VapVLMk2K9UrLMk3Lck4Lsg3Lck3Lco3Lck3Lck2Lsk3Lck2Lcg3Lco3J8Q7Lsg3MMc4Lsc4Lck2M8wzLck3Lck3LMg3M8wzLsk2Lcg3Lck4Lck3Lck3LMo4K8s4K8g3Lck4Lck3Lck3Lck3Lco3Lcg3JMg3Lcg3Lsk2LMk2Lso3Lck3LMk2LMg3Lck3hb9vmgAAAIp0Uk5TAPgJ7f7uwwT5CsSzCwXvVMjGp4DxCNDdB8VEsrsyVn1AHhvwGtPURU2lV8z7UI82mKJv8hMj1sfRHxEz4JcdkhKt697AND2NlJs1Pxm0UqTJQ1h3PPcvWYj8MPMDUQa4vHCrv8u3z1WamQ0cIE52D9X1dBQhtsq19G47Qa7Br7Cxgw6HQn+G+oRGHgf53gAAAsdJREFUaN612ndbGkEQBvClHBx30pFeBQlgiUaNJsaSRGM31hTTe++9ml7mU4cQICAH3N3OvP/zex4Wdm925hhTk47YhtfjHgsIoigExtye7xuxDoYTW9gbFaEhZ3vO5L7w2p1xWYGuxBBxdnLg+xcc0CaOO4s68S0ZVEXK6cD3hUB1pLBGPDMImiKnNODWA0OgMU+8F9Xqh0ZBR3pG1Ol9AuiKr6ACt8+D7kzZ2+7RV8CR6N3W+mEJuLL2rJV+7yBwJtvVXB/m1gEeTzdddwkQ4mpyVNtfAEpWrIr8PCClX0l3YulgvtCoj6TReHA8b1j464AY197lfwiouVKvT57D5Yfqd9dRQI6n7skH6EnW8BI+P/NffwcEOVHlL1Pwl6rVEpBktswv0PAD5TrSQcOnjSW+AERxlvgVKv5T6RlloOINf1fnN5Blvch/peN/Ffk1Ot5dvJX10vG9NhYDwpxipyn5OPNS8gnmoeRPshAlb2HdlLyfHaHkjzMTJX+MiZS8gZonXhzin5b4j0m8rYgPBeIjjfhAJn6cUD4Mf9oYc9HxoWKl8IOO/0xz8ankG2kRuF0qkSNU/MdShXyLil8lvT4IwX/Xk9s0/ET5brVIw49XroZRCv1G9V6bpL02Mwu+fq2mpxDG55dqWyJXsfV8XT9n2Yer+zL17ainuPybva26l6h3toZOaQqxXBPuNzYyc2Ys3dyn1IadwuLnFHvI59/j6LJyi5oZUTbvaNNZ6CM/v56dbj5+6Mry6t2ZlqMZzvVxDbce/QS52r0RY9t5Yb/u/795zqpi7vZA5/5NO1WOJHWVne6U+oGq5vP59aZVw8R2eVDbLyBPapw3Jz+ox2eWdEzL38rqvoG0rnPWPzvQdjIsTIxzvKkQdEZa1Ofbu6tB3hctjFubTV7iCBsZTmw7hUTe4g+YRNEUuGnJJ+I7NlUf/APjU3MV9RK8MwAAAABJRU5ErkJggg=="},336:function(t,_,c){t.exports=c.p+"assets/img/altitude_icon.d9607697.svg"},914:function(t,_,c){t.exports=c.p+"assets/img/altitude_control_mode_copter.64defa02.png"}}]);