(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{1315:function(t,e,o){t.exports=o.p+"assets/img/uavcan_logo_transparent.385713a1.png"},1316:function(t,e,o){t.exports=o.p+"assets/img/uavcan_wiring.bbcb3462.png"},2294:function(t,e,o){"use strict";o.r(e);var r=o(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"uavcan-소개"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-소개"}},[t._v("#")]),t._v(" UAVCAN 소개")]),t._v(" "),r("p",[r("img",{staticStyle:{float:"right",width:"200px",padding:"10px"},attrs:{src:o(1315),alt:"UAVCAN Logo"}}),t._v(" "),r("a",{attrs:{href:"http://uavcan.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("UAVCAN"),r("OutboundLink")],1),t._v(" is an onboard network which allows the autopilot to connect to avionics/peripherals. It uses rugged, differential signalling, and supports firmware upgrades over the bus and status feedback from peripherals.")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://uavcan.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("UAVCAN"),r("OutboundLink")],1),t._v("는 보드상에서 처리하는 네트워크로 자동 항법 장치를 항공 전자장비에 연결할 수 있게 합니다. 다음 하드웨어를 지원합니다:\n:::")]),t._v(" "),r("h2",{attrs:{id:"초기-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#초기-설정"}},[t._v("#")]),t._v(" 초기 설정")]),t._v(" "),r("p",[t._v("It supports hardware like:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/escs.html"}},[t._v("ESC/Motor controllers")])],1),t._v(" "),r("li",[t._v("항속 센서\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/thiemar/airspeed",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thiemar 항속 센서"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("GPS 및 GLONASS용 GNSS 리시버\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax GNSS"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("전력량계\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/power_module/pomegranate_systems_pm.html"}},[t._v("Pomegranate Systems 전원 모듈")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/power_module/cuav_can_pmu.html"}},[t._v("CUAV CAN PMU 전원 모듈")])],1)])]),t._v(" "),r("li",[t._v("Distance sensors\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/ark_flow.html"}},[t._v("Ark Flow")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/avanon_laser_interface.html"}},[t._v("Avionics Anonymous Laser Altimeter UAVCAN Interface")])],1)])]),t._v(" "),r("li",[t._v("Optical Flow\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/ark_flow.html"}},[t._v("Ark Flow")])],1)])])]),t._v(" "),r("p",[t._v("다음 설명을 통해 쿼드콥터로의 ESC 장비와 GPS의 UAVCAN 연결 및 설정 방법을 단계별로 안내합니다. 선택한 하드웨어는  Pixhawk 2.1, Zubax Orel 20 ESCs, Zubax GNSS GPS 입니다.")]),t._v(" "),r("h2",{attrs:{id:"노드-펌웨어-업그레이드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#노드-펌웨어-업그레이드"}},[t._v("#")]),t._v(" 노드 펌웨어 업그레이드")]),t._v(" "),r("p",[t._v("처음 단계에서 할 일은 UAVCAN을 활성화한 모든 장치와 비행 제어 장치의 연결입니다. 다음 그림은 모든 부품에 대한 결선 방법을 보여줍니다.")]),t._v(" "),r("p",[t._v("The following diagram shows this for a flight controller connected to "),r("RouterLink",{attrs:{to:"/ko/uavcan/escs.html"}},[t._v("UAVCAN motor controllers (ESCs)")]),t._v(" and a UAVCAN GNSS.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(1316),alt:"UAVCAN 결선"}})]),t._v(" "),r("p",[t._v("그 다음, "),r("RouterLink",{attrs:{to:"/ko/uavcan/node_enumeration.html"}},[t._v("UAVCAN 설정")]),t._v("의 지침에 따라 펌웨어에서 UAVCAN 기능을 켜십시오. 전원을 끊은 후 다시 연결하십시오.")],1),t._v(" "),r("p",[t._v("For more information about proper bus connections see "),r("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/UAVCAN+device+interconnection",target:"_blank",rel:"noopener noreferrer"}},[t._v("UAVCAN Device Interconnection"),r("OutboundLink")],1),t._v(" (Zubax KB).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("ul",[r("li",[t._v("While the connections are the same, the "),r("em",[t._v("connectors")]),t._v(" may differ across devices.")]),t._v(" "),r("li",[t._v('An second/redundant" CAN interface may be used, as shown above (CAN2). This is optional, but can increase the robustness of the connection.')])])]),t._v(" "),r("h2",{attrs:{id:"모터-컨트롤러-기수-부여-및-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#모터-컨트롤러-기수-부여-및-설정"}},[t._v("#")]),t._v(" 모터 컨트롤러 기수 부여 및 설정")]),t._v(" "),r("p",[t._v("In order to use UAVCAN components with PX4 you will first need to enable the UAVCAN driver:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Power the vehicle using the battery (you must power the whole vehicle, not just the flight controller) and connect "),r("em",[t._v("QGroundControl")]),t._v(".")])]),t._v(" "),r("li",[r("p",[t._v("Navigate to the "),r("strong",[t._v("Vehicle Setup > Parameters")]),t._v(" screen.")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" must be "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("set")]),t._v(" to one of the non-zero values.")],1),t._v(" "),r("p",[t._v("The values are:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("0")]),t._v(": UAVCAN driver disabled.")]),t._v(" "),r("li",[r("code",[t._v("1")]),t._v(": Sensors Manual Config.")]),t._v(" "),r("li",[r("code",[t._v("2")]),t._v(": Sensors Automatic Config.")]),t._v(" "),r("li",[r("code",[t._v("3")]),t._v(": Sensors and Actuators (ESCs) Automatic Config")])]),t._v(" "),r("p",[t._v("Use "),r("code",[t._v("1")]),t._v(" if "),r("em",[t._v("none")]),t._v(" of the connected UAVCAN devices support automatic configuration (check the manual!), "),r("code",[t._v("2")]),t._v(" or "),r("code",[t._v("3")]),t._v(" if "),r("em",[t._v("some")]),t._v(" of them support automatic configuration, and "),r("code",[t._v("3")]),t._v(" if you're using UAVCAN ESCs (this assigns motor controls to the UAVCAN bus rather than PWM).")])])]),t._v(" "),r("p",[t._v("ID와 각 모터 컨트롤러의 회전 방향은 간단한 설치 루틴에서 설치 과정을 마친 후 할당할 수 있습니다: "),r("RouterLink",{attrs:{to:"/ko/uavcan/node_enumeration.html"}},[t._v("UAVCAN 노드 기수 부여")]),t._v(". QGroundControl에서는 사용자가 과정을 시작할 수 있습니다.\n:::")],1),t._v(" "),r("p",[t._v("Most UAVCAN sensors require no further setup (they are plug'n'play, unless specifically noted in their documentation).")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/uavcan/escs.html"}},[t._v("UAVCAN motor controllers (ESCs)")]),t._v(" additionally require the motor order be set, and may require a few other parameters be set. Whether this can be done using the simple QGroundControl setup UI depends on the type of ESC (see link for information).")],1),t._v(" "),r("h2",{attrs:{id:"참고할만한-링크"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#참고할만한-링크"}},[t._v("#")]),t._v(" 참고할만한 링크")]),t._v(" "),r("h3",{attrs:{id:"결선"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#결선"}},[t._v("#")]),t._v(" 결선")]),t._v(" "),r("p",[t._v("PX4 requires an SD card for UAVCAN node allocation and during firmware update (which happen during boot). Check that there is a (working) SD card present and reboot.")]),t._v(" "),r("h3",{attrs:{id:"펌웨어-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-설치"}},[t._v("#")]),t._v(" 펌웨어 설치")]),t._v(" "),r("p",[t._v("If the PX4 Firmware arms but the motors do not start to rotate, check that parameter "),r("code",[t._v("UAVCAN_ENABLE=3")]),t._v(" to use UAVCAN ESCs. If the motors do not start spinning before thrust is increased, check "),r("code",[t._v("UAVCAN_ESC_IDLT=1")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"developer-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#developer-information"}},[t._v("#")]),t._v(" Developer Information")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/developer.html"}},[t._v("UAVCAN Development")]),t._v(": Topics related to development and integration of new UAVCAN hardware into PX4.")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);