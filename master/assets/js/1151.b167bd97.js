(window.webpackJsonp=window.webpackJsonp||[]).push([[1151],{2164:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"비행-작업"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-작업"}},[t._v("#")]),t._v(" 비행 작업")]),t._v(" "),a("p",[a("em",[t._v("비행 작업")]),t._v("은 "),a("RouterLink",{attrs:{to:"/ko/concept/flight_modes.html"}},[t._v("비행 모드")]),t._v("에서 정해진 이동 동작(예: 사람 추적, 비행 평활화)을 수행합니다.")],1),t._v(" "),a("h2",{attrs:{id:"개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),a("p",[t._v("비행 작업은 기본 클래스 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/flight_mode_manager/tasks/FlightTask/FlightTask.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightTask"),a("OutboundLink")],1),t._v("에서 파생된 비행 작업 프레임워크의 클래스입니다. 목표는 각 작업이 특정 모드의 기체 동작을 구현하는 임의의 입력 데이터에서 콘트롤러에 대한 설정값을 생성하는 것입니다. 프로그래머는 일반적으로 기본 작업의 최소 구현을 호출하고 원하는 동작의 구현으로 확장하여 "),a("code",[t._v("activate()")]),t._v(" 및 "),a("code",[t._v("update()")]),t._v(" 가상 메서드를 재정의합니다. "),a("code",[t._v("activate()")]),t._v(" 메서드는 작업 전환시에 호출되며, 상태를 초기화하고 이전 작업이 방금 적용한 전달된 설정점에서 부드럽게 인계되도록 합니다.")]),t._v(" "),a("p",[a("code",[t._v("update()")]),t._v("는 실행 중 모든 루프 반복에서 호출되며, 설정값을 생성하는 핵심 기능을 구현합니다.")]),t._v(" "),a("p",[t._v("규칙에 따라 작업은 작업 이름을 따서 명명된 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/flight_mode_manager/tasks",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot/src/modules/flight_mode_manager/tasks"),a("OutboundLink")],1),t._v('의 하위 폴더에 포함되며, 소스 파일에는 접두사 "FlightTask"로 이름이 지정됩니다.')]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 개발자 회의의 비디오 개요는 [아래에서](#video)  제공합니다.")])]),t._v(" "),a("h2",{attrs:{id:"비행-작업-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-작업-생성"}},[t._v("#")]),t._v(" 비행 작업 생성")]),t._v(" "),a("p",[t._v("아래 지침을 사용하여 "),a("em",[t._v("MyTask")]),t._v("라는 작업을 만들 수 있습니다.")]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/flight_mode_manager/tasks",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot/src/modules/flight_mode_manager/tasks"),a("OutboundLink")],1),t._v("에 새 비행 작업에 대한 디렉터리를 생성합니다. 규칙에 따라 디렉토리 이름은 작업 이름을 따서 지정되므로 "),a("strong",[t._v("/MyTask")]),t._v("라고 합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mkdir PX4-Autopilot/src/lib/flight_tasks/tasks/MyTask\n")])])])]),t._v(" "),a("li",[a("p",[t._v('"FlightTask" 접두사를 사용하여 '),a("em",[t._v("MyTask")]),t._v(" 디렉토리에 새 비행 작업에 대한 빈 소스 코드 및 "),a("em",[t._v("cmake")]),t._v(" 파일을 만듭니다.")]),t._v(" "),a("ul",[a("li",[t._v("CMakeLists.txt")]),t._v(" "),a("li",[t._v("FlightTaskMyTask.hpp")]),t._v(" "),a("li",[t._v("FlightTaskMyTask.cpp")])])]),t._v(" "),a("li",[a("p",[t._v("새 작업을 위해 "),a("strong",[t._v("CMakeLists.txt")]),t._v(" 업데이트 합니다.")]),t._v(" "),a("ul",[a("li",[t._v("다른 작업(예: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/flight_mode_manager/tasks/Orbit/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Orbit/CMakeLists.txt"),a("OutboundLink")],1),t._v(")을 위해 "),a("strong",[t._v("CMakeLists.txt")]),t._v("의 내용을 복사합니다.")]),t._v(" "),a("li",[t._v("현재 연도로 저작권을 업데이트 합니다."),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("############################################################################")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   Copyright (c) 2021 PX4 Development Team. All rights reserved.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("새 작업을 반영하도록 코드를 수정하십시오. 예: "),a("code",[t._v("FlightTaskOrbit")]),t._v("를 "),a("code",[t._v("FlightTaskMyTask")]),t._v("로 변경합니다. 코드는 아래와 같습니다."),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("px4_add_library")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlightTaskMyTask\n    FlightTaskMyTask.cpp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_link_libraries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlightTaskMyTask "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("PUBLIC")]),t._v(" FlightTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_include_directories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlightTaskMyTask "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("PUBLIC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_CURRENT_SOURCE_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("헤더 파일 업데이트(이 경우 "),a("strong",[t._v("FlightTaskMyTask.hpp")]),t._v("): 대부분의 작업은 가상 메서드 "),a("code",[t._v("activate()")]),t._v(" 및 "),a("code",[t._v("update()")]),t._v("를 다시 구현하며, 이 예에서는 개인 변수도 있습니다.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("once")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FlightTask.hpp"')])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlightTaskMyTask")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token base-clause"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlightTask")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FlightTaskMyTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FlightTaskMyTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle_local_position_setpoint_s last_setpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" _origin_z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("cpp 파일을 적절하게 업데이트 합니다. 이 예는 단순히 작업 메서드가 호출되었음을 나타내는 "),a("strong",[t._v("FlightTaskMyTask.cpp")]),t._v("의 간단한 구현을 제공합니다.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FlightTaskMyTask.hpp"')])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlightTaskMyTask")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle_local_position_setpoint_s last_setpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlightTask")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("last_setpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PX4_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FlightTaskMyTask activate was called! ret: %d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// report if activation was succesful")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlightTaskMyTask")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PX4_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FlightTaskMyTask update was called!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// report update")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/flight_mode_manager/CMakeLists.txt#L40",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot/src/modules/flight_mode_manager/CMakeLists.txt"),a("OutboundLink")],1),t._v("에 새 작업을 빌드할 작업 목록에 추가합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("list(APPEND flight_tasks_to_add\n   Orbit\n   MyTask\n)\n)\n")])])])]),t._v(" "),a("li",[a("p",[t._v("작업이 호출되도록 비행 모드를 업데이트합니다. 일반적으로, 매개변수는 특정 비행 작업을 사용해야 하는 시기를 선택합니다.")]),t._v(" "),a("p",[t._v("예를 들어, 멀티콥터 위치 모드에서 새로운 "),a("code",[t._v("MyTask")]),t._v("를 활성화하려면:")]),t._v(" "),a("ul",[a("li",[t._v('매개변수에 5와 같이 이전에 사용하지 않은 값이 있는 경우 "MyTask"를 선택하는 옵션을 추가하려면 '),a("code",[t._v("MPC_POS_MODE")]),t._v("("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mc_pos_control/mc_pos_control_params.c#L706-L721",target:"_blank",rel:"noopener noreferrer"}},[t._v("mc_pos_control_params.c"),a("OutboundLink")],1),t._v(")를 업데이트 하십시오."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("...\n* @value 4 Acceleration based input\n* @value 5 MyTask position mode implementation\n* @group Multicopter Position Control\n*/\nPARAM_DEFINE_INT32(MPC_POS_MODE, 4);\n")])])])]),t._v(" "),a("li",[a("code",[t._v("_param_mpc_pos_mode")]),t._v("에 올바른 값이 있을 때 작업을 활성화하려면 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/flight_mode_manager/FlightModeManager.cpp#L266-L285",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightModeManager.cpp"),a("OutboundLink")],1),t._v(" 매개변수의 스위치에 새 옵션에 대한 사례를 추가하십시오."),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// manual position control")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_param_mpc_pos_mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n     error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("switchTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlightTaskIndex"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("ManualPositionSmoothVel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add case for new task: MyTask")]),t._v("\n     error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  _flight_tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("switchTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlightTaskIndex"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("MyTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("case 4:\n....\n...")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"신규-비행-작업-테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#신규-비행-작업-테스트"}},[t._v("#")]),t._v(" 신규 비행 작업 테스트")]),t._v(" "),a("p",[t._v("비행 작업을 테스트하려면, 작업이 활성화된 상태에서 기체를 실행하여야 합니다. 위의 예에서 이것은 매개변수 "),a("code",[t._v("MPC_POS_MODE")]),t._v("를 5로 설정하고 이륙하고 차량을 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("로 전환하는 것을 의미합니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("위에 정의된 작업은 시뮬레이터에서만 테스트하여야 합니다. 코드는 실제로 설정값을 생성하지 않으므로 기체는 비행하지 않습니다.")])]),t._v(" "),a("h2",{attrs:{id:"비디오"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비디오"}},[t._v("#")]),t._v(" 비디오")]),t._v(" "),a("p",[t._v("다음 비디오는 PX4의 비행 작업에 대한 개요를 제공합니다. 첫 번째는 PX4 v1.9의 비행 작업 프레임워크 상태를 다룹니다. 두 번째는 PX4 v1.11의 변경 사항을 다루는 업데이트입니다.")]),t._v(" "),a("h4",{attrs:{id:"px4-flight-task-architecture-개요-px4-개발자-회의-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-flight-task-architecture-개요-px4-개발자-회의-2019"}},[t._v("#")]),t._v(" PX4 Flight Task Architecture 개요(PX4 개발자 회의 2019)")]),t._v(" "),a("p",[t._v("PX4 v1.9의 비행 모드 작동 방식 설명(Dennis Mannhart, Matthias Grob).")]),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/-dkQG8YLffc",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"센서에서-모터에-이르는-멀티콥터-제어-개요-px4-가상-개발자-회의-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#센서에서-모터에-이르는-멀티콥터-제어-개요-px4-가상-개발자-회의-2020"}},[t._v("#")]),t._v(" 센서에서 모터에 이르는 멀티콥터 제어 개요(PX4 가상 개발자 회의 2020)")]),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/orvng_11ngQ?t=560",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("이 비디오의 관련 섹션은 (9분 20초) PX4 v11.1의 비행 작업 업데이트입니다. "),a("a",{attrs:{href:"https://static.sched.com/hosted_files/px4developersummitvirtual2020/1b/PX4%20Developer%20Summit%202020%20-%20Overview%20of%20multicopter%20control%20from%20sensors%20to%20motors.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("슬라이드는 이 PDF을 참고하십시오."),a("OutboundLink")],1),t._v(" - 슬라이드 9와 12가 관련이 있습니다.")])])}),[],!1,null,null,null);s.default=n.exports}}]);