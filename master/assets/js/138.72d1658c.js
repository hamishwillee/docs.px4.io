(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{2050:function(t,a,r){"use strict";r.r(a);var s=r(18),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dji-matrice-100-pixhawk-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dji-matrice-100-pixhawk-1"}},[t._v("#")]),t._v(" DJI Matrice 100 (Pixhawk 1)")]),t._v(" "),s("p",[t._v("quadcopter는 완전히 사용자 정의가 가능한 프로그래밍 가능한 비행 플랫폼입니다. 이 빌드 로그는 * 3DR Pixhawk </ 0> 비행 컨트롤러와 함께 프레임을 사용하기위한 빌드 및 구성 지침을 제공합니다. ")]),s("p"),t._v(" "),s("p",[t._v("Key information:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Frame:")]),t._v(" DJI Matrice 100")]),t._v(" "),s("li",[s("strong",[t._v("Flight controller:")]),t._v(" "),s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")])],1)]),t._v(" "),s("p",[s("img",{attrs:{src:r(959),alt:"DJI Matrice 100"}})]),t._v(" "),s("h2",{attrs:{id:"parts-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parts-list"}},[t._v("#")]),t._v(" Parts List")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("* [DJI Matrice 100](http://store.dji.com/product/matrice-100) Just ESCs motors, and frame.\n")])])]),s("h2",{attrs:{id:"motor-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motor-connections"}},[t._v("#")]),t._v(" Motor Connections")]),t._v(" "),s("p",[t._v("자동 조종 장치 조립 지침은  Pixhawk Wiring Quickstart </ 0>를 참조하십시오.")]),s("p"),t._v(" "),s("h3",{attrs:{id:"wiring-diagram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wiring-diagram"}},[t._v("#")]),t._v(" Wiring Diagram")]),t._v(" "),s("p",[t._v("![Connections\n](../../assets/airframes/multicopter/matrice100/Wiring Diagram.jpg)")]),t._v(" "),s("h3",{attrs:{id:"wiring-harness"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wiring-harness"}},[t._v("#")]),t._v(" Wiring Harness")]),t._v(" "),s("p",[s("img",{attrs:{src:r(960),alt:"Wiring Harness"}})]),t._v(" "),s("h3",{attrs:{id:"pwm-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwm-connections"}},[t._v("#")]),t._v(" PWM Connections")]),t._v(" "),s("p",[s("img",{attrs:{src:r(961),alt:"PWM Connections"}})]),t._v(" "),s("h3",{attrs:{id:"other-views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-views"}},[t._v("#")]),t._v(" Other views")]),t._v(" "),s("p",[s("img",{attrs:{src:r(962),alt:"Top"}})]),t._v(" "),s("p",[s("img",{attrs:{src:r(963),alt:"Back"}})]),t._v(" "),s("p",[s("img",{attrs:{src:r(964),alt:"No Stack"}})]),t._v(" "),s("p",[s("img",{attrs:{src:r(965),alt:"No Top Deck"}})]),t._v(" "),s("h3",{attrs:{id:"자동-조종-장치-출력"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#자동-조종-장치-출력"}},[t._v("#")]),t._v(" 자동 조종 장치 출력")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Output")]),t._v(" "),s("th",[t._v("Rate")]),t._v(" "),s("th",[t._v("Actuator")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("MAIN1")]),t._v(" "),s("td",[t._v("400 Hz")]),t._v(" "),s("td",[t._v("Front right, CCW")])]),t._v(" "),s("tr",[s("td",[t._v("MAIN2")]),t._v(" "),s("td",[t._v("400 Hz")]),t._v(" "),s("td",[t._v("Back left, CCW")])]),t._v(" "),s("tr",[s("td",[t._v("MAIN3")]),t._v(" "),s("td",[t._v("400 Hz")]),t._v(" "),s("td",[t._v("Front left, CW")])]),t._v(" "),s("tr",[s("td",[t._v("MAIN4")]),t._v(" "),s("td",[t._v("400 Hz")]),t._v(" "),s("td",[t._v("Back right, CW")])]),t._v(" "),s("tr",[s("td",[t._v("AUX1")]),t._v(" "),s("td",[t._v("50 Hz")]),t._v(" "),s("td",[t._v("RC AUX1")])]),t._v(" "),s("tr",[s("td",[t._v("AUX2")]),t._v(" "),s("td",[t._v("50 Hz")]),t._v(" "),s("td",[t._v("RC AUX2")])]),t._v(" "),s("tr",[s("td",[t._v("AUX3")]),t._v(" "),s("td",[t._v("50 Hz")]),t._v(" "),s("td",[t._v("RC AUX3")])])])]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[t._v("높은 스로틀에서 내부 루프는 기본 x 4 배 이득으로 진동을 유발합니다. 저속 스로틀에서는 높은 게인이 더 나은 응답을 제공하므로 스로틀을 기반으로 한 일부 게인 일정 계획이 전체 응답을 향상시킬 수 있으며 이는 mc_att_control에서 구현 될 수 있음을 알 수 있습니다 지금은 낮은 스로틀이나 높은 스로틀에서 진동이 없도록 조정하고 낮은 스로틀에서 대역폭을 맞 춥니 다\n"),s("ul",[s("li",[t._v("MC_PITCHRATE_P: 0.05")]),t._v(" "),s("li",[t._v("MC_PITCHRATE_D: 0.001")])])]),t._v(" "),s("li",[t._v("배터리에는 기본 3 대신 6 개의 셀이 있습니다.\n"),s("ul",[s("li",[t._v("BAT_N_CELLS: 6")])])])]),t._v(" "),s("h2",{attrs:{id:"video"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),s("p",[t._v("{% youtube %}https://www.youtube.com/watch?v=3OGs0ONemGc{% endyoutube %}")])])}),[],!1,null,null,null);a.default=i.exports},959:function(t,a,r){t.exports=r.p+"assets/img/Matrice100.44f1f559.jpg"},960:function(t,a,r){t.exports=r.p+"assets/img/WiringHarness.c17fbe60.jpg"},961:function(t,a,r){t.exports=r.p+"assets/img/PwmInput.5053bf7c.jpg"},962:function(t,a,r){t.exports=r.p+"assets/img/Top.79416714.jpg"},963:function(t,a,r){t.exports=r.p+"assets/img/Back.6c8c7476.jpg"},964:function(t,a,r){t.exports=r.p+"assets/img/NoStack.98c457ec.jpg"},965:function(t,a,r){t.exports=r.p+"assets/img/NoTopDeck.af1d0c24.jpg"}}]);