(window.webpackJsonp=window.webpackJsonp||[]).push([[638],{1296:function(e,t,a){e.exports=a.p+"assets/img/SIH_diagram.4e53f869.png"},2288:function(e,t,a){"use strict";a.r(t);var i=a(19),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"하드웨어-시뮬레이션-sih"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-시뮬레이션-sih"}},[e._v("#")]),e._v(" 하드웨어 시뮬레이션(SIH)")]),e._v(" "),i("p",[e._v("SIH(Simulation-In-Hardware)는 쿼드콥터용 "),i("RouterLink",{attrs:{to:"/ko/simulation/hitl.html"}},[e._v("Hardware In The Loop 시뮬레이션(HITL)")]),e._v("의 대안입니다. 이 설정에서는 콘트롤러, 상태 추정기와 시뮬레이터와 같은 것들이 임베디드 하드웨어에서 실행됩니다. 데스크톱 컴퓨터는 가상 차량을 출력에만 사용됩니다.")],1),e._v(" "),i("p",[i("img",{attrs:{src:a(1296),alt:"MAVLink API 시뮬레이터"}})]),e._v(" "),i("p",[e._v("SIH는 HITL에 비해 두 가지 이점이 있습니다.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("컴퓨터에 대한 양방향 연결을 하지 않으므로, 동기 타이밍을 보장합니다. 사용자는 고사양의 데스크탑 컴퓨터가 필요하지 않습니다.")])]),e._v(" "),i("li",[i("p",[e._v("전체 시뮬레이션은 PX4 환경에서 유지됩니다. PX4 개발자는 수학적 모델을 시뮬레이터에 손 쉽게 통합할 수 있습니다. 예를 들어, 공기역학적 모델이나 센서의 소음 수준을 수정하거나 시뮬레이션 센서를 추가할 수 있습니다.")])])]),e._v(" "),i("p",[e._v("SIH는 새로운 PX4 사용자가 PX4와 다양한 모드 및 기능에 익숙해지고, 실제 RC 컨트롤러로 쿼드콥터를 조종하는 방법 학습에 사용할 수 있습니다.")]),e._v(" "),i("p",[e._v("동적 모델은 이 "),i("a",{attrs:{href:"https://github.com/PX4/Devguide/raw/master/assets/simulation/SIH_dynamic_model.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("pdf 보고서"),i("OutboundLink")],1),e._v("을 참고하십시오.")]),e._v(" "),i("p",[e._v("또한 차량을 나타내는 물리적 매개변수(예: 질량, 관성 및 최대 추력)는 "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH 매개변수")]),e._v("에서 쉽게 수정할 수 있습니다.")],1),e._v(" "),i("blockquote",[i("p",[e._v('"Dynamics modeling of agile fixed-wing unmanned aerial vehicles." Khan, Waqas, supervised by Meyer Nahon, McGill University, PhD thesis, 2016.')])]),e._v(" "),i("p",[e._v("Furthermore, the physical parameters representing the vehicle (such as mass, inertia, and maximum thrust force) can easily be modified from the "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH parameters")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"요구-사항"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#요구-사항"}},[e._v("#")]),e._v(" 요구 사항")]),e._v(" "),i("p",[e._v("SIH는 FMUv2 기반 보드를 제외한 모든 Pixhawk 시리즈 보드와 호환됩니다. PX4-Autopilot 마스터 분기 및 릴리스 버전 v1.9.0 이상에서 사용할 수 있습니다.")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("-q")]),e._v(" - "),i("em",[e._v("QGroundControl")]),e._v("에 대한 통신 허용(선택 사항)")]),e._v(" "),i("li",[e._v("SIH for quadrotor supported from PX4 v1.9.")]),e._v(" "),i("li",[e._v("SIH for fixed-wing (airplane) is supported in versions after PX v1.12 (currently in the master branch).")])]),e._v(" "),i("h2",{attrs:{id:"sih-설정"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sih-설정"}},[e._v("#")]),e._v(" SIH 설정")]),e._v(" "),i("p",[e._v("SIH를 실행하는 것은 기체를 선택하는 것과 같이 쉽습니다. USB 케이블로 자동조종장치를 데스크탑 컴퓨터에 연결 부팅후, 지상관제소를 사용하여 "),i("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#simulation-copter"}},[e._v("SIH 기체")]),e._v("를 선택합니다. 그러면 자동조종장치가 재부팅됩니다.")],1),e._v(" "),i("p",[e._v("SIH 기체가 선택되면 SIH 모듈이 자체적으로 시작되며 차량은 지상 관제소 지도에 표시됩니다.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("The airplane needs to takeoff in manual mode at full throttle. If the airplane hits the floor, the state estimator might lose its fix.")])]),e._v(" "),i("h2",{attrs:{id:"디스플레이-설정"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#디스플레이-설정"}},[e._v("#")]),e._v(" 디스플레이 설정")]),e._v(" "),i("p",[e._v("The simulated vehicle can be displayed in jMAVSim for the following PX4 versions:")]),e._v(" "),i("ul",[i("li",[e._v("Quadrotor from PX4 v1.11.")]),e._v(" "),i("li",[e._v("Fixed-wing from the PX4 master (or the release version after PX4 v1.12).")])]),e._v(" "),i("p",[e._v("SIH는 패시브 커플링 시스템을 기반으로 하는 새로운 유형의 수직 이착륙(VTOL) 무인 항공기(UAV)를 개발하는 캐나다 회사인 Coriolis g Corporation에서 개발하였습니다.")]),e._v(" "),i("ol",[i("li",[i("em",[e._v("QGroundControl")]),e._v("을 닫습니다(열린 경우).")]),e._v(" "),i("li",[e._v("하드웨어 자동 조종 장치의 플러그를 뽑았다가 다시 꽂습니다(부팅하는 데 몇 초 정도 걸림).")]),e._v(" "),i("li",[e._v("터미널에서 "),i("strong",[e._v("jmavsim_run.sh")]),e._v(" 스크립트를 입력하여, jMAVSim을 실행합니다."),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("./Tools/jmavsim_run.sh -q -d /dev/ttyACM0 -b 2000000 -r 250 -o\n")])])]),e._v("여기서 플래그들은 아래와 같습니다.\n"),i("ul",[i("li",[i("code",[e._v("-q")]),e._v(" to allow the communication to "),i("em",[e._v("QGroundControl")]),e._v(" (optional).")]),e._v(" "),i("li",[i("code",[e._v("-d")]),e._v(" to start the serial device "),i("code",[e._v("/dev/ttyACM0")]),e._v(" on Linux. On macOS this would be "),i("code",[e._v("/dev/tty.usbmodem1")]),e._v(".")]),e._v(" "),i("li",[i("code",[e._v("-b")]),e._v(" to set the serial baud rate to "),i("code",[e._v("2000000")]),e._v(".")]),e._v(" "),i("li",[i("code",[e._v("-r")]),e._v(" to set the refresh rate to "),i("code",[e._v("250")]),e._v(" Hz (optional).")]),e._v(" "),i("li",[i("code",[e._v("-o")]),e._v(" to start jMAVSim in "),i("em",[e._v("display Only")]),e._v(" mode (i.e. the physical engine is turned off and jMAVSim only displays the trajectory given by the SIH in real-time).")]),e._v(" "),i("li",[e._v("add a flaf "),i("code",[e._v("-a")]),e._v(" to display the aircraft. If this flag is not present a quadrotor will be displayed by default.")])])]),e._v(" "),i("li",[e._v("After few seconds, "),i("em",[e._v("QGroundControl")]),e._v(" can be opened again.")])]),e._v(" "),i("p",[e._v("At this point, the system can be armed and flown. The vehicle can be observed moving in jMAVSim, and on the QGC "),i("strong",[e._v("Fly")]),e._v(" view.")]),e._v(" "),i("h2",{attrs:{id:"개발진"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#개발진"}},[e._v("#")]),e._v(" 개발진")]),e._v(" "),i("p",[e._v("The SIH was originally developed by Coriolis g Corporation, then the airplane model was added by Altitude R&D inc. Both are Canadian companies, Coriolis develops a new type of Vertical Takeoff and Landing (VTOL) Unmanned Aerial Vehicles (UAV) based on passive coupling systems "),i("a",{attrs:{href:"http://www.vogi-vtol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.vogi-vtol.com"),i("OutboundLink")],1),e._v("; Altitude R&D is specialized in dynamics, control, and real-time simulation. They provide the SIH as a simple simulator for quadrotors air airplanes released for free under BSD license.")])])}),[],!1,null,null,null);t.default=r.exports}}]);