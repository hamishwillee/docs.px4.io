(window.webpackJsonp=window.webpackJsonp||[]).push([[1240],{2389:function(t,a,s){"use strict";s.r(a);var r=s(19),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"모듈-참조-시뮬레이션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#모듈-참조-시뮬레이션"}},[t._v("#")]),t._v(" 모듈 참조: 시뮬레이션")]),t._v(" "),s("h2",{attrs:{id:"sih"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sih"}},[t._v("#")]),t._v(" sih")]),t._v(" "),s("p",[t._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/sih",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/sih"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"설명"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),s("p",[t._v("이 모듈은 하드웨어 자동 조종 장치 내에서 완전히 실행되는 쿼드로터용 시뮬레이터를 제공합니다.")]),t._v(" "),s("p",[t._v('이 시뮬레이터는 믹서에서 제공하는 액추에이터 pwm 신호인 "actuator_outputs"를 구독합니다.')]),t._v(" "),s("p",[t._v("이 시뮬레이터는 루프에 상태 추정기를 통합하기 위하여 실제 노이즈로 손상된 센서 신호를 게시합니다.")]),t._v(" "),s("h3",{attrs:{id:"구현"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구현"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),s("p",[t._v("시뮬레이터는 선형대수를 사용하여 운동 방정식을 구현합니다. 쿼터니언 표현은 태도에 사용됩니다. 적분에는 순방향 오일러가 사용됩니다. 대부분의 변수는 스택 오버플로를 피하기 위하여 .hpp 파일에서 전역으로 선언됩니다.")]),t._v(" "),s("p",[s("a",{attrs:{id:"sih_usage"}})]),t._v(" "),s("h3",{attrs:{id:"사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sih <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);