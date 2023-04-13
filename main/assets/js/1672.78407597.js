(window.webpackJsonp=window.webpackJsonp||[]).push([[1672],{3064:function(t,e,s){"use strict";s.r(e);var a=s(19),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jmavsim-다중-차량-시뮬레이션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-다중-차량-시뮬레이션"}},[t._v("#")]),t._v(" JMAVSim 다중 차량 시뮬레이션")]),t._v(" "),s("p",[t._v("이 항목에서는 JMAVSim과 SITL을 사용하여 다중 UAV(멀티콥터) 차량을 시뮬레이션 방법을 설명합니다. 모든 차량 인스턴스는 시뮬레이션의 동일한 위치에서 시작합니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4 다중 차량을 시뮬레이션하는 가장 편리한 방법입니다. *QGroundControl*(또는 [MAVSDK](https://mavsdk.mavlink.io/) 등)에서 다중 차량 지원을 테스트하는 데 적합합니다. [Gazebo를 사용한 다중 차량 시뮬레이션](../simulation/multi-vehicle-simulation.md)은 많은 차량이 있는 무리 시뮬레이션이나 Gazebo에서만 지원되는 컴퓨터 비전과 같은 기능을 테스트하는 데 사용하여야 합니다.")])]),t._v(" "),s("h2",{attrs:{id:"다중-인스턴스-시작-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다중-인스턴스-시작-방법"}},[t._v("#")]),t._v(" 다중 인스턴스 시작 방법")]),t._v(" "),s("p",[t._v("다중 인스턴스를 시작하려면(별도의 포트에서):")]),t._v(" "),s("ol",[s("li",[t._v("PX4를 빌드합니다."),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make px4_sitl_default\n")])])])]),t._v(" "),s("li",[t._v("시작할 인스턴스 수를 지정하여 "),s("strong",[t._v("sitl_multiple_run.sh")]),t._v("를 실행합니다(예: 2):"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./Tools/sitl_multiple_run.sh 2\n")])])])]),t._v(" "),s("li",[t._v("첫 번째 인스턴스를 시작합니다."),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./Tools/simulation/jmavsim/jmavsim_run.sh -l\n")])])])]),t._v(" "),s("li",[t._v("인스턴스에 대한 "),s("em",[t._v("시뮬레이션")]),t._v(" TCP 포트를 지정하여 후속 인스턴스를 시작합니다."),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./Tools/simulation/jmavsim/jmavsim_run.sh -p 4560 -l\n")])])]),t._v("포트는 "),s("code",[t._v("[0, N-1]")]),t._v("의 "),s("code",[t._v("i")]),t._v("에 대하여 "),s("code",[t._v("4560+i")]),t._v("로 설정되어야 합니다.")])]),t._v(" "),s("p",[s("em",[t._v("QGroundControl")]),t._v(" should automatically connect to all the new vehicle instances (all GCS traffic is sent to PX4's remote UDP port: "),s("code",[t._v("14550")]),t._v(" from all instances). The vehicle that is currently being controlled is displayed in the application to bar; you can select this vehicle text to display a selection list of all of the (simulated) connected vehicle instances ("),s("code",[t._v("Vehicle 1")]),t._v(", "),s("code",[t._v("Vehicle 2")]),t._v(", etc.) and choose a new vehicle to control.")]),t._v(" "),s("p",[s("em",[t._v("MAVSDK")]),t._v(" 또는 "),s("em",[t._v("MAVROS")]),t._v("와 같은 개발자 API는 "),s("code",[t._v("14540")]),t._v("(첫 번째 인스턴스)에서 "),s("code",[t._v('14549</1까지 순차적으로 할당된 PX4 원격 UDP 포트에서 수신 대기합니다. 추가 인스턴스 <em x-id="3">모두</em>는 <code>14549')]),t._v(" 포트에 연결됩니다.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip")]),t._v(" The "),s("strong",[t._v("sitl_multiple_run.sh")]),t._v(" script starts a separate process for each vehicle. To restart the simulations after killing one of them, you must call "),s("strong",[t._v("sitl_multiple_run.sh")]),t._v(" again, and also restart each of the individual instances in their own terminals.")])]),t._v(" "),s("h2",{attrs:{id:"추가-자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#추가-자료"}},[t._v("#")]),t._v(" 추가 자료")]),t._v(" "),s("ul",[s("li",[t._v("포트 설정에 대한 자세한 내용은 "),s("RouterLink",{attrs:{to:"/ko/simulation/"}},[t._v("시뮬레이션")]),t._v("을 참고하십시오.")],1)])])}),[],!1,null,null,null);e.default=l.exports}}]);