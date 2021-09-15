(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{1322:function(e,t,v){e.exports=v.p+"assets/img/SIH_diagram.4e53f869.png"},2616:function(e,t,v){"use strict";v.r(t);var r=v(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"하드웨어-시뮬레이션-sih"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-시뮬레이션-sih"}},[e._v("#")]),e._v(" 하드웨어 시뮬레이션(SIH)")]),e._v(" "),r("p",[e._v("SIH(Simulation-In-Hardware)는 쿼드콥터용 "),r("RouterLink",{attrs:{to:"/ko/simulation/hitl.html"}},[e._v("Hardware In The Loop 시뮬레이션(HITL)")]),e._v("의 대안입니다. 이 설정에서는 콘트롤러, 상태 추정기와 시뮬레이터와 같은 것들이 임베디드 하드웨어에서 실행됩니다. 데스크톱 컴퓨터는 가상 차량을 출력에만 사용됩니다.")],1),e._v(" "),r("p",[r("img",{attrs:{src:v(1322),alt:"MAVLink API 시뮬레이터"}})]),e._v(" "),r("p",[e._v("SIH는 HITL에 비해 두 가지 이점이 있습니다.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("컴퓨터에 대한 양방향 연결을 하지 않으므로, 동기 타이밍을 보장합니다. 사용자는 고사양의 데스크탑 컴퓨터가 필요하지 않습니다.")])]),e._v(" "),r("li",[r("p",[e._v("전체 시뮬레이션은 PX4 환경에서 유지됩니다. PX4 개발자는 수학적 모델을 시뮬레이터에 손 쉽게 통합할 수 있습니다. 예를 들어, 공기역학적 모델이나 센서의 소음 수준을 수정하거나 시뮬레이션 센서를 추가할 수 있습니다.")])])]),e._v(" "),r("p",[e._v("SIH는 새로운 PX4 사용자가 PX4와 다양한 모드 및 기능에 익숙해지고, 실제 RC 컨트롤러로 쿼드콥터를 조종하는 방법 학습에 사용할 수 있습니다.")]),e._v(" "),r("p",[e._v("동적 모델은 이 "),r("a",{attrs:{href:"https://github.com/PX4/Devguide/raw/master/assets/simulation/SIH_dynamic_model.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("pdf 보고서"),r("OutboundLink")],1),e._v("을 참고하십시오.")]),e._v(" "),r("p",[e._v("또한 차량을 나타내는 물리적 매개변수(예: 질량, 관성 및 최대 추력)는 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH 매개변수")]),e._v("에서 쉽게 수정할 수 있습니다.")],1),e._v(" "),r("blockquote",[r("p",[e._v('"Dynamics modeling of agile fixed-wing unmanned aerial vehicles." ("민첩한 고정익 무인항공기의 역학 모델링.") Khan, Waqas, supervised by Meyer Nahon, McGill University, PhD thesis, 2016.')])]),e._v(" "),r("p",[e._v("또한 차량을 나타내는 물리적 매개변수(예: 질량, 관성 및 최대 추력)는 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH 매개변수")]),e._v("에서 쉽게 수정할 수 있습니다.")],1),e._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/PzIpSCRD8Jo",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p"),e._v(" "),r("h2",{attrs:{id:"요구-사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#요구-사항"}},[e._v("#")]),e._v(" 요구 사항")]),e._v(" "),r("p",[e._v("SIH를 실행하는 것은 기체를 선택하는 것과 같이 쉽습니다. USB 케이블로 자동조종장치를 데스크탑 컴퓨터에 연결 부팅후, 지상관제소를 사용하여 "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#simulation-copter"}},[e._v("SIH 기체")]),e._v("를 선택합니다.")],1),e._v(" "),r("ul",[r("li",[r("code",[e._v("-q")]),e._v(" - "),r("em",[e._v("QGroundControl")]),e._v("에 대한 통신 허용(선택 사항)")]),e._v(" "),r("li",[e._v("쿼드로터용 SIH는 PX4 v1.9부터 지원됩니다.")]),e._v(" "),r("li",[e._v("고정익(비행기)용 SIH는 PX v1.12(현재 마스터 브랜치) 이후 버전에서 지원됩니다.")])]),e._v(" "),r("h2",{attrs:{id:"sih-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sih-설정"}},[e._v("#")]),e._v(" SIH 설정")]),e._v(" "),r("p",[e._v("SIH를 실행하는 것은 기체를 선택하는 것처럼 용이합니다. USB 케이블을 사용하여 자동 조종 장치를 데스크탑 컴퓨터에 연결하고 부팅한 다음, 지상 관제소를 사용하여 "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#simulation-copter"}},[e._v("SIH Quadcopter X")]),e._v(" 또는 "),r("code",[e._v("SIH 평면 AERT")]),e._v("를 선택합니다. 그러면, 자동조종장치가 재부팅됩니다.")],1),e._v(" "),r("p",[e._v("SIH 기체가 선택되면 SIH 모듈이 자체적으로 시작되며, 차량은 지상 관제소 지도에 표시됩니다.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("비행기는 최대 스로틀에서 수동 모드로 이륙하여야 합니다. 또한, 비행기가 바닥에 떨어지면 상태 추정기가 수정 사항을 잃을 수 있습니다.")])]),e._v(" "),r("h2",{attrs:{id:"디스플레이-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#디스플레이-설정"}},[e._v("#")]),e._v(" 디스플레이 설정")]),e._v(" "),r("p",[e._v("SIH는 패시브 커플링 시스템을 기반으로 하는 새로운 유형의 수직 이착륙(VTOL) 무인 항공기(UAV)를 개발하는 캐나다 회사인 Coriolis g Corporation에서 개발하였습니다.")]),e._v(" "),r("ul",[r("li",[e._v("PX4 v1.11의 쿼드로터")]),e._v(" "),r("li",[e._v("PX4 마스터(또는 PX4 v1.12 이후 릴리스 버전)의 고정익")])]),e._v(" "),r("p",[e._v("시뮬레이션된 차량을 표시하려면:")]),e._v(" "),r("ol",[r("li",[r("em",[e._v("QGroundControl")]),e._v("을 닫습니다(열린 경우).")]),e._v(" "),r("li",[e._v("하드웨어 자동 조종 장치의 플러그를 뽑았다가 다시 꽂습니다(부팅하는 데 몇 초 정도 걸림).")]),e._v(" "),r("li",[e._v("터미널에서 "),r("strong",[e._v("jmavsim_run.sh")]),e._v(" 스크립트를 입력하여, jMAVSim을 실행합니다."),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("./Tools/jmavsim_run.sh -q -d /dev/ttyACM0 -b 2000000 -r 250 -o\n")])])]),e._v("여기서 플래그들은 아래와 같습니다.\n"),r("ul",[r("li",[r("code",[e._v("-q")]),e._v(" - "),r("em",[e._v("QGroundControl")]),e._v("에 대한 통신 허용(선택 사항)")]),e._v(" "),r("li",[r("code",[e._v("-d")]),e._v(" Linux에서 직렬 장치 "),r("code",[e._v("/dev/ttyACM0")]),e._v("를 사용합니다. MacOS에서는 "),r("code",[e._v("/dev/tty.usbmodem1")]),e._v("를 사용합니다.")]),e._v(" "),r("li",[r("code",[e._v("-b")]),e._v(" 직렬 전송 속도를 "),r("code",[e._v("2000000")]),e._v("으로 설정합니다.")]),e._v(" "),r("li",[r("code",[e._v("-o")]),e._v(" - jMAVSim을 "),r("em",[e._v("디스플레이 전용")]),e._v(" 모드로 시작합니다(즉, 물리적 엔진이 꺼지고 jMAVSim은 SIH가 제공한 궤적만 실시간으로 표시함).")]),e._v(" "),r("li",[e._v("항공기를 표시하려면 플래그 "),r("code",[e._v("-a")]),e._v("를 추가합니다. 이 플래그가 없으면 기본적으로 쿼드로터가 표시됩니다.")])])]),e._v(" "),r("li",[e._v("몇 초 후에 "),r("em",[e._v("QGroundControl")]),e._v("을 다시 오픈할 수 있습니다.")])]),e._v(" "),r("p",[e._v("이 시점에서 시스템은 시동후 비행할 수 있습니다. 차량은 jMAVSim과 QGC "),r("strong",[e._v("Fly")]),e._v(" 보기에서 움직이는 것을 관찰할 수 있습니다.")]),e._v(" "),r("h2",{attrs:{id:"개발진"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#개발진"}},[e._v("#")]),e._v(" 개발진")]),e._v(" "),r("p",[e._v("SIH는 원래 Coriolis g Corporation에서 개발하였으며, 비행기 모델은 Altitude R&D inc에서 추가되었습니다. 둘 다 캐나다 회사이며 Coriolis는 수동 커플링 시스템 "),r("a",{attrs:{href:"http://www.vogi-vtol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.vogi-vtol.com"),r("OutboundLink")],1),e._v("을 기반으로 하는 새로운 유형의 수직 이착륙(VTOL) 차량을 개발합니다. Altitude R&D는 역학, 제어 및 실시간 시뮬레이션에 특화되어 있습니다. 그들은 SIH를 BSD 라이선스에 따라 무료로 출시된 쿼드로터 및 비행기를 위한 간단한 시뮬레이터로 제공합니다.")])])}),[],!1,null,null,null);t.default=a.exports}}]);