(window.webpackJsonp=window.webpackJsonp||[]).push([[808],{1557:function(e,t,a){e.exports=a.p+"assets/img/SIH_diagram.4e53f869.png"},3059:function(e,t,a){"use strict";a.r(t);var i=a(19),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"하드웨어-시뮬레이션-sih"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-시뮬레이션-sih"}},[e._v("#")]),e._v(" 하드웨어 시뮬레이션(SIH)")]),e._v(" "),i("p",[e._v("Simulation-In-Hardware (SIH) is an alternative to "),i("RouterLink",{attrs:{to:"/ko/simulation/hitl.html"}},[e._v("Hardware In The Loop simulation (HITL)")]),e._v(" for quadrotors, fixed-wing vehicles (airplane), and tailsitters. 이 설정에서는 콘트롤러, 상태 추정기와 시뮬레이터와 같은 것들이 임베디드 하드웨어에서 실행됩니다. 데스크톱 컴퓨터는 가상 차량을 출력에만 사용됩니다.")],1),e._v(" "),i("p",[i("img",{attrs:{src:a(1557),alt:"MAVLink API 시뮬레이터"}})]),e._v(" "),i("p",[e._v("SIH는 HITL에 비해 두 가지 이점이 있습니다.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("컴퓨터에 대한 양방향 연결을 하지 않으므로, 동기 타이밍을 보장합니다. 사용자는 고사양의 데스크탑 컴퓨터가 필요하지 않습니다.")])]),e._v(" "),i("li",[i("p",[e._v("전체 시뮬레이션은 PX4 환경에서 유지됩니다. PX4 개발자는 수학적 모델을 시뮬레이터에 손 쉽게 통합할 수 있습니다. 예를 들어, 공기역학적 모델이나 센서의 소음 수준을 수정하거나 시뮬레이션 센서를 추가할 수 있습니다.")])])]),e._v(" "),i("p",[e._v("SIH는 새로운 PX4 사용자가 PX4와 다양한 모드 및 기능에 익숙해지고, 실제 RC 컨트롤러로 쿼드콥터를 조종하는 방법 학습에 사용할 수 있습니다.")]),e._v(" "),i("p",[e._v("동적 모델은 이 "),i("a",{attrs:{href:"https://github.com/PX4/Devguide/raw/master/assets/simulation/SIH_dynamic_model.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("pdf 보고서"),i("OutboundLink")],1),e._v("을 참고하십시오.")]),e._v(" "),i("p",[e._v("또한 차량을 나타내는 물리적 매개변수(예: 질량, 관성 및 최대 추력)는 "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH 매개변수")]),e._v("에서 쉽게 수정할 수 있습니다.")],1),e._v(" "),i("blockquote",[i("p",[e._v('"Dynamics modeling of agile fixed-wing unmanned aerial vehicles." ("민첩한 고정익 무인항공기의 역학 모델링.") Khan, Waqas, supervised by Nahon, Meyer, McGill University, PhD thesis, 2016.')])]),e._v(" "),i("p",[e._v("The model for the tailsitter vehicle is inspired from the Master thesis:")]),e._v(" "),i("blockquote",[i("p",[e._v('"Modeling and control of a flying wing tailsitter unmanned aerial vehicle." Chiappinelli, Romain, supervised by Nahon, Meyer, McGill University, Masters thesis, 2018.')])]),e._v(" "),i("p",[e._v("Furthermore, the physical parameters representing the vehicle (such as mass, inertia, and maximum thrust force) can easily be modified from the "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH parameters")]),e._v(".")],1),e._v(" "),i("p"),i("div",{staticClass:"embed-responsive embed-responsive-16by9"},[i("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/PzIpSCRD8Jo",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),i("p"),e._v(" "),i("h2",{attrs:{id:"요구-사항"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#요구-사항"}},[e._v("#")]),e._v(" 요구 사항")]),e._v(" "),i("p",[e._v("To run the SIH, you will need a "),i("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[e._v("flight controller")]),e._v(" (e.g. a Pixhawk-series board). you will also need either a "),i("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[e._v("radio control transmitter and receiver pair")]),e._v(" or a "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("joystick"),i("OutboundLink")],1),e._v(" (a joystick can be used via QGroundControl to emulate a radio control system).")],1),e._v(" "),i("ul",[i("li",[i("code",[e._v("-q")]),e._v(" - "),i("em",[e._v("QGroundControl")]),e._v("에 대한 통신 허용(선택 사항)")]),e._v(" "),i("li",[e._v("쿼드로터용 SIH는 PX4 v1.9부터 지원됩니다.")]),e._v(" "),i("li",[e._v("SIH for fixed-wing (airplane) and tailsitter are supported in versions after PX v1.12 (currently in the master branch).")])]),e._v(" "),i("h2",{attrs:{id:"sih-설정"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sih-설정"}},[e._v("#")]),e._v(" SIH 설정")]),e._v(" "),i("p",[e._v("Running the SIH is as easy as selecting an airframe. Plug the autopilot to the desktop computer with a USB cable, let it boot, then using a ground control station select "),i("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_simulation_sih_quadcopter_x"}},[e._v("SIH Quadcopter X")]),e._v(", "),i("code",[e._v("SIH plane AERT")]),e._v(", or 'SIH Tailsitter Duo'. The autopilot will then reboot.")],1),e._v(" "),i("p",[e._v("When the SIH airframe is selected, the module "),i("code",[e._v("sih")]),e._v(" starts by itself, the vehicle should be displayed on the ground control station map.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("The airplane needs to takeoff in manual mode at full throttle.\nAlso, if the airplane hits the floor the state estimator might lose its fix.")])]),e._v(" "),i("h2",{attrs:{id:"디스플레이-설정"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#디스플레이-설정"}},[e._v("#")]),e._v(" 디스플레이 설정")]),e._v(" "),i("p",[e._v("The simulated vehicle can be displayed in jMAVSim for the following PX4 versions:")]),e._v(" "),i("ul",[i("li",[e._v("PX4 v1.11의 쿼드로터")]),e._v(" "),i("li",[e._v("PX4 마스터(또는 PX4 v1.12 이후 릴리스 버전)의 고정익")])]),e._v(" "),i("p",[e._v("To display the simulated vehicle:")]),e._v(" "),i("ol",[i("li",[i("em",[e._v("QGroundControl")]),e._v("을 닫습니다(열린 경우).")]),e._v(" "),i("li",[e._v("하드웨어 자동 조종 장치의 플러그를 뽑았다가 다시 꽂습니다(부팅하는 데 몇 초 정도 걸림).")]),e._v(" "),i("li",[e._v("터미널에서 "),i("strong",[e._v("jmavsim_run.sh")]),e._v(" 스크립트를 입력하여, jMAVSim을 실행합니다."),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("./Tools/simulation/jmavsim/jmavsim_run.sh -q -d /dev/ttyACM0 -b 2000000 -o\n")])])]),e._v("여기서 플래그들은 아래와 같습니다.\n"),i("ul",[i("li",[i("code",[e._v("-q")]),e._v(" - "),i("em",[e._v("QGroundControl")]),e._v("에 대한 통신 허용(선택 사항)")]),e._v(" "),i("li",[i("code",[e._v("-d")]),e._v(" Linux에서 직렬 장치 "),i("code",[e._v("/dev/ttyACM0")]),e._v("를 사용합니다. MacOS에서는 "),i("code",[e._v("/dev/tty.usbmodem1")]),e._v("를 사용합니다.")]),e._v(" "),i("li",[i("code",[e._v("-b")]),e._v(" 직렬 전송 속도를 "),i("code",[e._v("2000000")]),e._v("으로 설정합니다.")]),e._v(" "),i("li",[i("code",[e._v("-o")]),e._v(" - jMAVSim을 "),i("em",[e._v("디스플레이 전용")]),e._v(" 모드로 시작합니다(즉, 물리적 엔진이 꺼지고 jMAVSim은 SIH가 제공한 궤적만 실시간으로 표시함).")]),e._v(" "),i("li",[e._v("add a flag "),i("code",[e._v("-a")]),e._v(" to display an aircraft or '-t' to display a tailsitter. 이 플래그가 없으면 기본적으로 쿼드로터가 표시됩니다.")])])]),e._v(" "),i("li",[e._v("몇 초 후에 "),i("em",[e._v("QGroundControl")]),e._v("을 다시 오픈할 수 있습니다.")])]),e._v(" "),i("p",[e._v("At this point, the system can be armed and flown. The vehicle can be observed moving in jMAVSim, and on the QGC "),i("em",[e._v("Fly")]),e._v(" view.")]),e._v(" "),i("h2",{attrs:{id:"개발진"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#개발진"}},[e._v("#")]),e._v(" 개발진")]),e._v(" "),i("p",[e._v("The SIH was originally developed by Coriolis g Corporation, then the airplane model and tailsitter models were added by Altitude R&D inc. Both are Canadian companies, Coriolis develops a new type of Vertical Takeoff and Landing (VTOL) vehicles based on passive coupling systems "),i("a",{attrs:{href:"http://www.vogi-vtol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.vogi-vtol.com"),i("OutboundLink")],1),e._v("; Altitude R&D is specialized in dynamics, control, and real-time simulation "),i("a",{attrs:{href:"https://www.altitude-rd.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.altitude-rd.com"),i("OutboundLink")],1),e._v(". They provide the SIH as a simple simulator for quadrotors and airplanes released for free under BSD license.")])])}),[],!1,null,null,null);t.default=r.exports}}]);