(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{2233:function(t,o,r){"use strict";r.r(o);var e=r(19),_=Object(e.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"px4-시스템-아키텍처"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-시스템-아키텍처"}},[t._v("#")]),t._v(" PX4 시스템 아키텍처")]),t._v(" "),e("p",[t._v('아래 섹션에서는 "일반적인" PX4 시스템의 하드웨어와 소프트웨어 개요를 제공합니다. 하나는 비행 콘트롤러만 있는 것이고 다른 하나는 비행 컨트롤러와 보조 컴퓨터("미션 컴퓨터"라고도 함)가 있습니다.')]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/concept/architecture.html"}},[t._v("PX4 아키텍처 개요")]),t._v("는 플라이트 스택과 미들웨어 정보를 제공합니다. 오프보드 API는 "),e("RouterLink",{attrs:{to:"/ko/ros/"}},[t._v("ROS")]),t._v("와 "),e("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),e("OutboundLink")],1),t._v("에서 설명합니다.")],1)]),t._v(" "),e("h2",{attrs:{id:"비행-콘트롤러"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#비행-콘트롤러"}},[t._v("#")]),t._v(" 비행 콘트롤러")]),t._v(" "),e("p",[t._v("아래 다이어그램은 비행 콘트롤러 기반 PX4 시스템 개요입니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(631),alt:"PX4 아키텍처 - FC 전용 시스템"}})]),t._v(" "),e("p",[t._v("하드웨어 구성")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("비행 콘트롤러")]),t._v("(PX4 비행 스택 실행). 콘트롤러에는 대부분 내부 IMU, 나침반 및 기압계가 포함되어 있습니다.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/peripherals/esc_motors.html"}},[t._v("모터 ESC")]),t._v("는 "),e("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM 출력")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/peripherals/uavcan_escs.html"}},[t._v("UAVCAN")]),t._v("(UAVCAN은 그림과 같이 단일 방향이 아닌 양방향 통신을 허용함) 또는 기타 버스에 연결됩니다.")],1),t._v(" "),e("li",[t._v("I2C, SPI, UAVCAN, UART 등을 통해 연결된 센서("),e("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[t._v("GPS")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[t._v("나침반")]),t._v(", 거리 센서, 기압계, 광류, 기압계, ADSB 트랜스폰더 등)")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/peripherals/camera.html"}},[t._v("카메라")]),t._v(" 또는 기타 페이로드. 카메라는 PWM 출력에 연결하거나 MAVLink로 연결할 수 있습니다.")],1),t._v(" "),e("li",[t._v("지상국 컴퓨터/소프트웨어에 연결하기 위한 "),e("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("텔레메트리 라디오")]),t._v(".")],1),t._v(" "),e("li",[t._v("수동 제어를 위한 "),e("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("RC 제어 시스템")])],1)]),t._v(" "),e("p",[t._v("다이어그램의 왼쪽은 다이어그램의 하드웨어 부분과 수평으로 정렬된(대략적으로) 소프트웨어 스택을 나타냅니다.")]),t._v(" "),e("ul",[e("li",[t._v("지상국 컴퓨터는 일반적으로 "),e("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#qgroundcontrol"}},[t._v("QGroundControl")]),t._v("(또는 일부 다른 지상국 소프트웨어)을 실행합니다. 또한 "),e("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),e("OutboundLink")],1),t._v(" 또는 "),e("RouterLink",{attrs:{to:"/ko/ros/"}},[t._v("ROS")]),t._v("와 같은 로봇 소프트웨어를 실행할 수 있습니다.")],1),t._v(" "),e("li",[t._v("비행 컨트롤러에서 실행되는 PX4 비행 스택에는 "),e("RouterLink",{attrs:{to:"/ko/modules/modules_driver.html"}},[t._v("드라이버")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/modules/modules_communication.html"}},[t._v("통신 모듈")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/modules/modules_controller.html"}},[t._v("컨트롤러")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/modules/modules_controller.html"}},[t._v("추정기")]),t._v(" 및 기타 ❤️ >미들웨어 및 시스템 모듈"),t._v(" 등이 포함됩니다.")],1)]),t._v(" "),e("h2",{attrs:{id:"비행-콘트롤러와-보조-컴퓨터"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#비행-콘트롤러와-보조-컴퓨터"}},[t._v("#")]),t._v(" 비행 콘트롤러와 보조 컴퓨터")]),t._v(" "),e("p",[t._v('아래 다이어그램은 비행 콘트롤러와 보조 컴퓨터(여기서는 "임무 컴퓨터"라고 함)를 포함하는 PX4 시스템을 나타냅니다.')]),t._v(" "),e("p",[e("img",{attrs:{src:r(632),alt:"PX4 아키텍처 - FC + 보조 컴퓨터"}})]),t._v(" "),e("p",[t._v("비행 콘트롤러는 일반 PX4 비행 스택을 실행하고, 보조 컴퓨터는 "),e("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html"}},[t._v("물체 회피")]),t._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/computer_vision/collision_prevention.html"}},[t._v("충돌 방지")]),t._v("와 같은 고급 기능을 제공합니다. 두 시스템은 고속 직렬 또는 IP 링크로 연결되며, 일반적으로 "),e("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 프로토콜"),e("OutboundLink")],1),t._v("로 통신합니다. 지상국 및 클라우드와의 통신은 일반적으로 보조 컴퓨터를 통해 라우팅됩니다(예: Intel의 "),e("a",{attrs:{href:"https://github.com/mavlink-router/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 라우터"),e("OutboundLink")],1),t._v(" 사용).")],1),t._v(" "),e("p",[t._v("PX4 시스템은 일반적으로 보조 컴퓨터에서 Linux OS를 실행합니다("),e("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/Avoidance"),e("OutboundLink")],1),t._v(' 프로젝트가 Linux용으로 설계된 ROS 기반 회피 라이브러리를 제공하기 때문). Linux는 NuttX보다 "일반" 소프트웨어 개발을 위한 플랫폼입니다. 많은 Linux 개발자와 유용한 소프트웨어가 이미 개발되어 있습니다(예: 컴퓨터 비전, 통신, 클라우드 통합, 하드웨어 드라이버용). 보조 컴퓨터는 때때로 같은 이유로 Android를 사용합니다.')]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("다이어그램은 여러 PX4 기반 시스템에서 사용된 접근 방식인 LTE를 통한 클라우드 또는 지상국 연결 방법을 나타냅니다. PX4는 특별히 LTE와 클라우드 통합을 위한 소프트웨어를 제공하지 않습니다(사용자 맞춤형 개발이 필요함).")])])])}),[],!1,null,null,null);o.default=_.exports},631:function(t,o,r){t.exports=r.p+"assets/img/px4_arch_fc.c9a2d8c9.svg"},632:function(t,o,r){t.exports=r.p+"assets/img/px4_arch_fc_companion.c430665d.svg"}}]);