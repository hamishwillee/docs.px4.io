(window.webpackJsonp=window.webpackJsonp||[]).push([[1840],{3336:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"mavsdk-통합-테스트"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mavsdk-통합-테스트"}},[t._v("#")]),t._v(" MAVSDK 통합 테스트")]),t._v(" "),n("p",[t._v("PX4는 "),n("a",{attrs:{href:"https://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),n("OutboundLink")],1),t._v("를 기반으로 종단간 통합 테스트를 할 수 있습니다.")]),t._v(" "),n("p",[t._v("테스트는 주로 SITL에 대해 개발되고, CI(지속적 통합)에서 실행됩니다. 앞으로, 모든 플랫폼/하드웨어으로 일반화할 계획입니다.")]),t._v(" "),n("p",[t._v("아래 지침은 로컬에서 테스트를 설정하고 진행하는 방법을 설명합니다.")]),t._v(" "),n("h2",{attrs:{id:"전제-조건"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[t._v("#")]),t._v(" 전제 조건")]),t._v(" "),n("h3",{attrs:{id:"개발-환경-설정"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#개발-환경-설정"}},[t._v("#")]),t._v(" 개발 환경 설정")]),t._v(" "),n("p",[t._v("아직 하지 않은 경우:")]),t._v(" "),n("ul",[n("li",[n("p",[n("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Linux")]),t._v(" 또는 "),n("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_mac.html"}},[t._v("MacOS")]),t._v("용 개발 도구 모음을 설치합니다(Windows는 지원되지 않음). "),n("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" is required, and should be installed by default.")],1)]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html#download-the-px4-source-code"}},[t._v("PX4 소스 코드 받기")]),t._v(":")],1),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])])]),t._v(" "),n("h3",{attrs:{id:"테스트용-px4-빌드"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#테스트용-px4-빌드"}},[t._v("#")]),t._v(" 테스트용 PX4 빌드")]),t._v(" "),n("p",[t._v("시뮬레이터 테스트를 위한 PX4를 빌드하려면 다음 명령어를 실행하십시오.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic mavsdk_tests\n")])])]),n("h3",{attrs:{id:"mavsdk-c-라이브러리-설치"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mavsdk-c-라이브러리-설치"}},[t._v("#")]),t._v(" MAVSDK C++ 라이브러리 설치")]),t._v(" "),n("p",[t._v("테스트에는 시스템에 설치된 MAVSDK C++ 라이브러리가 필요합니다(예: "),n("code",[t._v("/usr/lib")]),t._v(" 또는 "),n("code",[t._v("/usr/local/lib")]),t._v(").")]),t._v(" "),n("p",[t._v("바이너리 또는 소스에서 설치:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/quickstart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > C++ > C++ QuickStart"),n("OutboundLink")],1),t._v(": Install as a prebuilt library on supported platforms (recommended)")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/guide/build.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > C++ Guide > Building from Source"),n("OutboundLink")],1),t._v(": Build C++ library from source.")])]),t._v(" "),n("h2",{attrs:{id:"모든-px4-테스트-실행"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#모든-px4-테스트-실행"}},[t._v("#")]),t._v(" 모든 PX4 테스트 실행")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/configs/sitl.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitl.json"),n("OutboundLink")],1),t._v("에 정의된 대로 모든 SITL 테스트를 실행하려면 다음을 실행하십시오.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),n("p",[t._v("그러면, 모든 테스트가 나열되고 순차적으로 실행됩니다.")]),t._v(" "),n("p",[t._v("가능한 모든 명령줄 인수를 보려면 "),n("code",[t._v("-h")]),t._v(" 인수를 사용하십시오.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py -h\n\nusage: mavsdk_test_runner.py "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--log-dir LOG_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--speed-factor SPEED_FACTOR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--iterations ITERATIONS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--abort-early"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--gui"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--model MODEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--case CASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--debugger DEBUGGER"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--verbose"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             config_file\n\npositional arguments:\n  config_file           JSON config "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" to use\n\noptional arguments:\n  -h, --help            show this "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  --log-dir LOG_DIR     Directory "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" log files\n  --speed-factor SPEED_FACTOR\n                        how fast to run the simulation\n  --iterations ITERATIONS\n                        how often to run all tests\n  --abort-early         abort on first unsuccessful "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n  --gui                 display the visualization "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a simulation\n  --model MODEL         only run tests "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" one model\n  --case CASE           only run tests "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" one "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("\n  --debugger DEBUGGER   choice from valgrind, callgrind, gdb, lldb\n  --verbose             "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" verbose output\n")])])]),n("h2",{attrs:{id:"단일-테스트-실행"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#단일-테스트-실행"}},[t._v("#")]),t._v(" 단일 테스트 실행")]),t._v(" "),n("p",[n("code",[t._v("모델")]),t._v(" 및 테스트 "),n("code",[t._v("케이스")]),t._v("를 명령줄 옵션으로 지정하여, 단일 테스트를 실행합니다. 예를 들어, 임무에서 테일시터 비행을 테스트하려면, 다음을 실행합니다.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" --model tailsitter --case "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions including RTL'")]),t._v("\n")])])]),n("p",[t._v("현재 모델 세트와 관련 테스트 사례를 찾는 가장 용이한 방법은 "),n("a",{attrs:{href:"#run-all-px4-tests"}},[t._v("위에 표시된 대로")]),t._v(" 모든 PX4 테스트를 실행하는 것입니다(참고로 하나만 테스트하려는 경우 빌드를 취소할 수 있습니다).")]),t._v(" "),n("p",[t._v("이 문서 작성 시점에서 모든 테스트를 실행하여 생성된 목록은 다음과 같습니다.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("About to run "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("39")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" cases "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" selected models "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" iteration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n  - iris:\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on mag lost during mission'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Takeoff and Land'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions including RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions with manual RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly straight Multicopter Mission'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Offboard takeoff and land'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Offboard position control'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in position control'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in altitude control'")]),t._v("\n  - standard_vtol:\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on mag lost during mission'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Takeoff and Land'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions including RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions with manual RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in position control'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in altitude control'")]),t._v("\n  - tailsitter:\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on mag lost during mission'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Takeoff and Land'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions including RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions with manual RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in position control'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in altitude control'")]),t._v("\n")])])]),n("h2",{attrs:{id:"구현-참고-사항"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#구현-참고-사항"}},[t._v("#")]),t._v(" 구현 참고 사항")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("테스트는 Python으로 작성된 테스트 스크립트 "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/mavsdk_test_runner.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavsdk_test_runner.py"),n("OutboundLink")],1),t._v("와 호출됩니다.")]),t._v(" "),n("p",[t._v("MAVSDK 외에도 "),n("code",[t._v("px4")]),t._v("와 Gazebo for SITL 테스트를 시작하고 이러한 프로세스의 로그를 수집합니다.")])]),t._v(" "),n("li",[n("p",[t._v("테스트 실행기는 다음을 포함하는 C++ 바이너리입니다.")]),t._v(" "),n("ul",[n("li",[t._v("인수를 구문 분석하는 "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/test_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("main"),n("OutboundLink")],1),t._v(" 함수입니다.")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/autopilot_tester.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot_tester"),n("OutboundLink")],1),t._v("라는 MAVSDK에 대한 추상화입니다.")]),t._v(" "),n("li",[t._v("MAVSDK에 대한 추상화를 사용한 실제 테스트. 예:  "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/test_multicopter_mission.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("test_multicopter_mission.cpp"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("li",[t._v("테스트는 "),n("a",{attrs:{href:"https://github.com/catchorg/Catch2",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2"),n("OutboundLink")],1),t._v(" 단위 테스트 프레임워크를 사용합니다. 이 프레임워크를 사용하는 이유는 다음과 같습니다.\n"),n("ul",[n("li",[t._v("Asserts ("),n("code",[t._v("REQUIRE")]),t._v(") which are needed to abort a test can be inside of functions (and not just in the top level test as is "),n("a",{attrs:{href:"https://github.com/google/googletest/blob/main/docs/advanced.md#assertion-placement",target:"_blank",rel:"noopener noreferrer"}},[t._v("the case with gtest"),n("OutboundLink")],1),t._v(").")]),t._v(" "),n("li",[n("em",[t._v("catch2")]),t._v("를 헤더 전용 라이브러리로 포함할 수 있기 때문에, 종속성 관리가 용이합니다.")]),t._v(" "),n("li",[n("em",[t._v("Catch2")]),t._v(" supports "),n("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/devel/docs/test-cases-and-sections.md#tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("tags"),n("OutboundLink")],1),t._v(", which allows for flexible composition of tests.")])])])])])]),t._v(" "),n("p",[t._v("사용된 용어:")]),t._v(" "),n("ul",[n("li",[t._v('"모델": 선택한 Gazebo 모델입니다. 예: '),n("code",[t._v("iris")]),t._v(".")]),t._v(" "),n("li",[t._v('"테스트 케이스": '),n("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2 테스트 케이스"),n("OutboundLink")],1),t._v("입니다.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);