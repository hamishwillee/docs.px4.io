(window.webpackJsonp=window.webpackJsonp||[]).push([[670],{1338:function(t,e,a){t.exports=a.p+"assets/img/flightgear-multi-vehicle-sitl.ea4e8d57.jpg"},2670:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"flightgear-다중-차량-시뮬레이션"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flightgear-다중-차량-시뮬레이션"}},[t._v("#")]),t._v(" FlightGear 다중 차량 시뮬레이션")]),t._v(" "),r("p",[t._v("SITL에서 FlightGear를 사용하여 다중 차량 시뮬레이션 방법을 설명합니다. 모든 차량 인스턴스에는 시작 스크립트에 의해 정의된 매개변수가 있습니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("이것은 PX4 차량을 시뮬레이션하는 환경적으로 제일 현실적인 방법이며,  다향한 유형의 차량을 쉽게 테스트할 수 있습니다. "),r("em",[t._v("QGroundControl")]),t._v(", "),r("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),r("OutboundLink")],1),t._v(" 등에서 다중 차량 지원을 테스트하는 데 적합합니다.")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/simulation/multi-vehicle-simulation.html"}},[t._v("Gazebo를 사용한 다중 차량 시뮬레이션")]),t._v("은 대신 많은 차량을 사용한 그룹 시뮬레이션 및 Gazebo에서만 지원되는 컴퓨터 비전과 같은 기능을 테스트에 사용하여야 합니다.")],1)]),t._v(" "),r("h2",{attrs:{id:"다중-인스턴스-시작-방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#다중-인스턴스-시작-방법"}},[t._v("#")]),t._v(" 다중 인스턴스 시작 방법")]),t._v(" "),r("p",[t._v("다중 인스턴스를 시작하려면(별도의 포트와 ID에서):")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4Firmware/tree/flightgear-multi",target:"_blank",rel:"noopener noreferrer"}},[t._v("다중 차량을 지원 PX4 브랜치"),r("OutboundLink")],1),t._v("를 체크아웃합니다(ThunderFly-aerospace에서):"),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ThunderFly-aerospace/PX4Firmware.git\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4Firmware\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout flightgear-multi  \n")])])])]),t._v(" "),r("li",[t._v("표준 도구 체인(FlightGear가 설치된 상태)을 사용하여 PX4 펌웨어를 빌드합니다.")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge/tree/master/scripts",target:"_blank",rel:"noopener noreferrer"}},[t._v("사전 정의된 스크립트"),r("OutboundLink")],1),t._v("를 사용하여 첫 번째 인스턴스를 시작합니다."),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./Tools/flightgear_bridge/scripts\n./vehicle1.sh\n")])])])]),t._v(" "),r("li",[t._v("다른 스크립트를 사용하여 후속 인스턴스를 시작합니다."),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("./vehicle2.sh\n")])])])])]),t._v(" "),r("p",[t._v("각 인스턴스에는 완전히 다른 차량 유형을 나타낼 수 있는 자체 시작 스크립트가 있어야 합니다. 준비된 스크립트의 경우 다음 보기가 표시되어야 합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1338),alt:"PX4 SITL과 FlightGear를 사용한 다중 차량 시뮬레이션"}})]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v("과 같은 지상국은 일반 UDP 포트 14550(모든 트래픽이 동일한 포트로 이동)을 사용하여 모든 인스턴스에 연결합니다.")]),t._v(" "),r("p",[t._v("동시에 실행되는 인스턴스의 수는 주로 컴퓨터 리소스에 종속됩니다. FlightGear는 단일 스레드 응용 프로그램이지만, 공기 역학 솔버는 많은 메모리를 사용합니다. 따라서 "),r("em",[t._v("다중 차량")]),t._v(" 인스턴스를 실행하려면, 여러 컴퓨터로 분할하고 "),r("a",{attrs:{href:"https://wiki.flightgear.org/Howto:Multiplayer",target:"_blank",rel:"noopener noreferrer"}},[t._v("멀티플레이어 서버"),r("OutboundLink")],1),t._v("를 사용하여야 합니다.")]),t._v(" "),r("h2",{attrs:{id:"추가-자료"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-자료"}},[t._v("#")]),t._v(" 추가 자료")]),t._v(" "),r("ul",[r("li",[t._v("포트 설정에 대한 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/simulation/"}},[t._v("시뮬레이션")]),t._v("을 참고하십시오.")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);