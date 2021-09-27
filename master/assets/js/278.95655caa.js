(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1315:function(t,a,_){t.exports=_.p+"assets/img/px4_hitl_overview_jmavsim_gazebo.d97171c8.png"},1316:function(t,a,_){t.exports=_.p+"assets/img/qgc_hitl_config.cad209a4.png"},1317:function(t,a,_){t.exports=_.p+"assets/img/qgc_hil_config.7d1c6265.png"},1318:function(t,a,_){t.exports=_.p+"assets/img/qgc_hitl_autoconnect.bd418a05.png"},2610:function(t,a,_){"use strict";_.r(a);var e=_(19),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"하드웨어-루프-시뮬레이션-hitl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-루프-시뮬레이션-hitl"}},[t._v("#")]),t._v(" 하드웨어 루프 시뮬레이션 (HITL)")]),t._v(" "),e("p",[t._v("HITL(Hardware-in-the-Loop)은 일반 PX4 펌웨어가 실제 비행 콘트롤러 하드웨어에서 실행되는 시뮬레이션 모드입니다. 이 접근 방식은 실제 하드웨어에서 대부분의 실제 비행 코드를 테스트할 수 있습니다.")]),t._v(" "),e("p",[t._v("PX4는 멀티콥터(jMAVSim 또는 Gazebo 사용) 및 VTOL(Gazebo 사용)용 HITL을 지원합니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"compatible_airframe"}})]),t._v(" "),e("h2",{attrs:{id:"hitl-호환-기체"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hitl-호환-기체"}},[t._v("#")]),t._v(" HITL 호환 기체")]),t._v(" "),e("p",[t._v("현재 호환 가능한 기체와 시뮬레이터는 아래와 같습니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("기체")]),t._v(" "),e("th",[e("code",[t._v("SYS_AUTOSTART")])]),t._v(" "),e("th",[t._v("Gazebo")]),t._v(" "),e("th",[t._v("jMAVSim")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#simulation-plane"}},[t._v("HIL 고정익")])],1),t._v(" "),e("td",[t._v("1000")]),t._v(" "),e("td",[t._v("예")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_simulation_(copter)_hil_quadcopter_x"}},[t._v("HIL 쿼드콥터  X")])],1),t._v(" "),e("td",[t._v("1001")]),t._v(" "),e("td",[t._v("예")]),t._v(" "),e("td",[t._v("예")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#vtol_standard_vtol_hil_standard_vtol_quadplane"}},[t._v("HIL 표준 VTOL QuadPlane")])],1),t._v(" "),e("td",[t._v("1002")]),t._v(" "),e("td",[t._v("예")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("일반 쿼드콥터 x")]),t._v(" 콥터")],1),t._v(" "),e("td",[t._v("4001")]),t._v(" "),e("td",[t._v("예")]),t._v(" "),e("td",[t._v("예")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_quadrotor_x_dji_f450_w/_dji_escs"}},[t._v("DJI Flame Wheel f450")])],1),t._v(" "),e("td",[t._v("4011")]),t._v(" "),e("td",[t._v("예")]),t._v(" "),e("td",[t._v("예")])])])]),t._v(" "),e("p",[e("a",{attrs:{id:"simulation_environment"}})]),t._v(" "),e("h2",{attrs:{id:"hitl-시뮬레이션-환경"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hitl-시뮬레이션-환경"}},[t._v("#")]),t._v(" HITL 시뮬레이션 환경")]),t._v(" "),e("p",[t._v("HITL(Hardware-in-the-Loop) 시뮬레이션을 사용하여, 일반 PX4 펌웨어가 실제 하드웨어에서 실행됩니다. JMAVSim 또는 Gazebo(개발 컴퓨터에서 실행)는 USB/UART를 통하여 비행 콘트롤러 하드웨어에 연결합니다. 시뮬레이터는 PX4와 "),e("em",[t._v("QGroundControl")]),t._v(" 간에 MAVLink 데이터를 공유하는 게이트웨이 역할을 합니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("비행 콘트롤러에서 네트워크에서 안정적이고 대기 시간이 짧은 연결(예: 유선 이더넷 연결 - WiFi는 일반적으로 충분히 신뢰할 수 없음)을 사용하는 경우에는, 시뮬레이터를 UDP로 연결할 수 있습니다. 예를 들어, 이 설정은 이더넷으로 컴퓨터에 연결된 라즈베리파이에서 실행되는 PX4로 테스트되었습니다(jMAVSim 실행 명령이 포함된 시작 설정은 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/posix-configs/rpi/px4_hil.config",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),e("OutboundLink")],1),t._v("를 참고).")])]),t._v(" "),e("p",[t._v("아래 다이어그램은 시뮬레이션 환경을 나타냅니다.")]),t._v(" "),e("ul",[e("li",[t._v("실제 센서를 시작하지 않는 HITL 설정이 선택되었습니다("),e("em",[t._v("QGroundControl")]),t._v("를 통하여).")]),t._v(" "),e("li",[e("em",[t._v("jMAVSim")]),t._v(" 또는 "),e("em",[t._v("Gazebo")]),t._v("는 USB로 비행 컨트롤러에 연결됩니다.")]),t._v(" "),e("li",[t._v("시뮬레이터는 UDP로 "),e("em",[t._v("QGroundControl")]),t._v("에 연결되고, MAVLink 메시지를 PX4에 전송합니다.")]),t._v(" "),e("li",[e("em",[t._v("Gazebo")]),t._v("와 "),e("em",[t._v("jMAVSim")]),t._v("은 또한 오프보드 API에 연결하고 MAVLink 메시지를 PX4에 전송할 수 있습니다.")]),t._v(" "),e("li",[t._v("(선택 사항) 직렬 연결로 "),e("em",[t._v("QGroundControl")]),t._v("에서 조이스틱/게임패드 하드웨어를 연결할 수 있습니다.")])]),t._v(" "),e("p",[e("img",{attrs:{src:_(1315),alt:"HITL 설정 - jMAVSim 및 Gazebo"}})]),t._v(" "),e("h2",{attrs:{id:"hitl-대-sitl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hitl-대-sitl"}},[t._v("#")]),t._v(" HITL 대 SITL")]),t._v(" "),e("p",[t._v("SITL은 시뮬레이션 환경의 컴퓨터에서 실행되며, 해당 환경에서 제작된 펌웨어를 사용합니다. 시뮬레이터에서 가공의 환경 데이터를 제공하는 시뮬레이션 드라이버 이외의 시스템은 정상적으로 작동합니다.")]),t._v(" "),e("p",[t._v('이와 대조적으로, HITL은 일반 하드웨어의 "HITL 모드"에서 일반 PX4 펌웨어를 실행합니다. 시뮬레이션 데이터는 SITL과 다른 지점에서 시스템에 입력됩니다. 커맨더 및 센서와 같은 핵심 모듈에는 시작 시 정상적인 기능 중 일부를 우회하는 HITL 모드가 있습니다.')]),t._v(" "),e("p",[t._v("요약하면, HITL은 표준 펌웨어를 사용하여 실제 하드웨어에서 PX4를 실행하고, SITL은 실제로 더 많은 표준 시스템 코드를 실행합니다.")]),t._v(" "),e("h2",{attrs:{id:"hitl-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hitl-설정"}},[t._v("#")]),t._v(" HITL 설정")]),t._v(" "),e("h3",{attrs:{id:"px4-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-설정"}},[t._v("#")]),t._v(" PX4 설정")]),t._v(" "),e("ol",[e("li",[t._v("USB로 자동조종장치를 "),e("em",[t._v("QGroundControl")]),t._v("에 연결합니다.")]),t._v(" "),e("li",[t._v("HITL 모드를 활성화합니다.\n"),e("ol",[e("li",[e("p",[e("strong",[t._v("설정 열기 > 안전")]),t._v(" 섹션을 오픈합니다.")])]),t._v(" "),e("li",[e("p",[e("em",[t._v("HITL 활성화")]),t._v(" 목록에서 "),e("strong",[t._v("활성화됨")]),t._v("을 선택하여 HITL 모드를 활성화합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(1316),alt:"QGroundControl HITL 설정"}})])])])]),t._v(" "),e("li",[t._v("기체를 선택합니다.\n"),e("ol",[e("li",[e("p",[e("strong",[t._v("설정 > 기체")]),t._v("를 오픈합니다.")])]),t._v(" "),e("li",[e("p",[t._v("테스트할 "),e("a",{attrs:{href:"#compatible_airframe"}},[t._v("호환 기체")]),t._v("를 선택합니다. 그런 다음 "),e("em",[t._v("기체 설정")]),t._v(" 페이지의 오른쪽 상단에 있는 "),e("strong",[t._v("적용 및 재시작")]),t._v("을 클릭합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(1317),alt:"기체 선택"}})])])])]),t._v(" "),e("li",[t._v("필요한 경우 RC 또는 조이스틱을 보정합니다.")]),t._v(" "),e("li",[t._v("UDP를 설정합니다.\n"),e("ol",[e("li",[e("p",[t._v("설정 메뉴의 "),e("em",[t._v("일반")]),t._v(" 탭에서 "),e("strong",[t._v("UDP")]),t._v("를 제외한 모든 "),e("em",[t._v("자동 연결")]),t._v(" 상자의 선택을 취소합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(1318),alt:"QGC HITL 자동 연결 설정"}})])])])]),t._v(" "),e("li",[t._v("(선택 사항) 조이스틱과 안정장치를 설정합니다. RC 리모콘 송신기 대신 조이스틱을 사용하려면 이 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("매개변수")]),t._v("를 설정하십시오.\n"),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_IN_MODE"}},[t._v("COM_RC_IN_MODE")]),t._v('를 "조이스틱/RC 검사 없음"으로 변경합니다. 이것은 조이스틱 입력을 허용하고, RC 입력을 비활성화합니다.')],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")]),t._v("를 '사용 안 함'으로 설정합니다. 무선 제어로 HITL을 실행하지 않으면, RC 안전장치가 간섭하지 않습니다.")],1)])],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl 사용 설명서")]),t._v("에는 "),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("조이스틱"),e("OutboundLink")],1),t._v("과 "),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/VirtualJoystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("가상 조이스틱"),e("OutboundLink")],1),t._v(" 설정 방법을 설명합니다.")])]),t._v(" "),e("p",[t._v("설정 완료후에는 컴퓨터에서 비행 콘트롤러를 "),e("strong",[t._v("닫고")]),t._v(", "),e("em",[t._v("QGroundControl")]),t._v("을 분리합니다.")]),t._v(" "),e("h3",{attrs:{id:"시뮬레이터별-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#시뮬레이터별-설정"}},[t._v("#")]),t._v(" 시뮬레이터별 설정")]),t._v(" "),e("p",[t._v("다음 섹션을 참고하여 특정 시뮬레이터에 대하여 설정하십시오.")]),t._v(" "),e("h4",{attrs:{id:"gazebo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gazebo"}},[t._v("#")]),t._v(" Gazebo")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v("이 실행되고 있는 지 확인하십시오!")])]),t._v(" "),e("ol",[e("li",[t._v("Gazebo로 PX4를 빌드합니다(Gazebo 플러그인을 빌드하기 위하여)."),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Firmware_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default gazebo\n")])])])]),t._v(" "),e("li",[t._v("차량 모델의 sdf 파일을 오픈합니다(예: "),e("strong",[t._v("Tools/sitl_gazebo/models/iris_hitl/iris_hitl.sdf")]),t._v(").")]),t._v(" "),e("li",[t._v("필요한 경우 "),e("code",[t._v("serialDevice")]),t._v(" 매개변수("),e("code",[t._v("/dev/ttyACM0")]),t._v(")를 변경합니다.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("직렬 장치는 차량을 컴퓨터에 연결 포트에 따라 달라집니다(일반적으로 "),e("code",[t._v("/dev/ttyACM0")]),t._v("). Ubuntu를 확인하는 쉬운 방법은 자동조종장치를 연결후, 터미널에서 "),e("code",[t._v('dmesg | grep "tty"')]),t._v("를 실행합니다.. 올바른 장치가 마지막에 표시됩니다.")])]),t._v(" "),e("ol",[e("li",[t._v("환경 변수를 설정합니다."),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" Tools/setup_gazebo.bash "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/build/px4_sitl_default\n")])])]),t._v("Gazebo를 HITL 모드에서 실행합니다."),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("gazebo Tools/sitl_gazebo/worlds/hitl_iris.world\n")])])])]),t._v(" "),e("li",[e("em",[t._v("QGroundControl")]),t._v("을 실행합니다. PX4와 Gazebo에 자동으로 연결되어야 합니다.")])]),t._v(" "),e("p",[e("a",{attrs:{id:"jmavsim_hitl_configuration"}})]),t._v(" "),e("h4",{attrs:{id:"jmavsim-쿼드콥터-전용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-쿼드콥터-전용"}},[t._v("#")]),t._v(" jMAVSim(쿼드콥터 전용)")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v("이 실행되고 있는 지 확인하십시오!")])]),t._v(" "),e("ol",[e("li",[t._v("비행 콘트롤러를 컴퓨터에 연결하고, 부팅시까지 기다립니다.")]),t._v(" "),e("li",[t._v("jMAVSim를 HITL 모드에서 실행:"),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("./Tools/jmavsim_run.sh -q -s -d /dev/ttyACM0 -b "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("921600")]),t._v(" -r "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("직렬 포트 이름 "),e("code",[t._v("/dev/ttyACM0")]),t._v("을 적절하게 변경합니다. MacOS에서 이 포트는 "),e("code",[t._v("/dev/tty.usbmodem1")]),t._v("입니다. Windows(Cygwin 포함)에서는 COM1 또는 다른 포트입니다. Windows 장치 관리자에서 확인하십시오.")])]),t._v(" "),e("ol",[e("li",[e("em",[t._v("QGroundControl")]),t._v("을 실행합니다. PX4와 jMAVSim에 자동으로 연결되어야 합니다.")])]),t._v(" "),e("h2",{attrs:{id:"hitl에서-자율-임무-비행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hitl에서-자율-임무-비행"}},[t._v("#")]),t._v(" HITL에서 자율 임무 비행")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v("을 사용하여 "),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/FlyView/FlyView.html#missions",target:"_blank",rel:"noopener noreferrer"}},[t._v("임무를 실행"),e("OutboundLink")],1),t._v("하고, 차량을 제어할 수 있습니다.")])])}),[],!1,null,null,null);a.default=s.exports}}]);