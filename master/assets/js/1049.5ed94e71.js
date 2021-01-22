(window.webpackJsonp=window.webpackJsonp||[]).push([[1049],{2215:function(t,s,e){"use strict";e.r(s);var a=e(18),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mavsdk-통합-시험"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavsdk-통합-시험"}},[t._v("#")]),t._v(" MAVSDK 통합 시험")]),t._v(" "),e("p",[t._v("PX4는 "),e("a",{attrs:{href:"https://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),e("OutboundLink")],1),t._v("를 기반으로 종단간 통합 시험을 진행할 수 있습니다.")]),t._v(" "),e("p",[t._v("시험 절차는 이제부터 근본적으로 SITL을 대상으로 개발하며, 지속 통합 체계(CI)에서 실행합니다. 그러나, 실제 시험도 일반화할 수 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"mavsdk-c-라이브러리-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavsdk-c-라이브러리-설치"}},[t._v("#")]),t._v(" MAVSDK C++ 라이브러리 설치")]),t._v(" "),e("p",[t._v("시스템 영역(예: "),e("code",[t._v("/usr/lib")]),t._v(" 또는 "),e("code",[t._v("/usr/local/lib")]),t._v(")에 MAVSDK C++ 라이브러리를 설치해야 시험을 진행할 수 있습니다.")]),t._v(" "),e("p",[t._v("바이너리를 그대로 설치하거나 소스코드를 컴파일하여 설치하십시오:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/getting_started/installation.html#cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > Installation > C++"),e("OutboundLink")],1),t._v(": 지원 플랫폼에 사전 빌드한 라이브러리를 설치(추천)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/contributing/build.html#build_sdk_cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > Contributing > Building from Source"),e("OutboundLink")],1),t._v(": C++ 소스 코드를 라이브러리로 빌드.")])]),t._v(" "),e("h2",{attrs:{id:"px4-코드-준비"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-코드-준비"}},[t._v("#")]),t._v(" PX4 코드 준비")]),t._v(" "),e("p",[t._v("PX4 코드를 빌드하려면 다음 명령을 내리십시오:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo mavsdk_tests\n")])])]),e("h3",{attrs:{id:"모든-px4-시험-절차-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#모든-px4-시험-절차-실행"}},[t._v("#")]),t._v(" 모든 PX4 시험 절차 실행")]),t._v(" "),e("p",[t._v("SITL 시험을 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/configs/sitl.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitl.json"),e("OutboundLink")],1),t._v("에 지정한대로 실행하려면 다음 명령을 내리십시오:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),e("p",[t._v("모든 가능한 명령행 인자를 살펴보려면 다음 내용을 살펴보십시오:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py -h\n\nusage: mavsdk_test_runner.py "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--log-dir LOG_DIR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--speed-factor SPEED_FACTOR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--iterations ITERATIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--abort-early"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--gui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--model MODEL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--case CASE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--debugger DEBUGGER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--verbose"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             config_file\n\npositional arguments:\n  config_file           JSON config "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" to use\n\noptional arguments:\n  -h, --help            show this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  --log-dir LOG_DIR     Directory "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" log files\n  --speed-factor SPEED_FACTOR\n                        how fast to run the simulation\n  --iterations ITERATIONS\n                        how often to run all tests\n  --abort-early         abort on first unsuccessful "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n  --gui                 display the visualization "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a simulation\n  --model MODEL         only run tests "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" one model\n  --case CASE           only run tests "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" one "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("\n  --debugger DEBUGGER   choice from valgrind, callgrind, gdb, lldb\n  --verbose             "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" verbose output\n")])])]),e("h2",{attrs:{id:"구현상-참고"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구현상-참고"}},[t._v("#")]),t._v(" 구현상 참고")]),t._v(" "),e("ul",[e("li",[t._v("시험 절차는 파이썬 코드로 작성한 시험 실행 스크립트 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/mavsdk_test_runner.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavsdk_test_runner.py"),e("OutboundLink")],1),t._v(" 파일로 진행합니다. 이 실행 주체는 "),e("code",[t._v("px4")]),t._v("를 SITL 시험 용도의 가제보와 마찬가지로 시작하며, 처리 과정의 기록을 수집합니다.")]),t._v(" "),e("li",[t._v("시험 진행 주체는 C++ 라이브러리이며, 다음 특징이 있습니다.\n"),e("ul",[e("li",[t._v("인자를 분석하는 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/test_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("main"),e("OutboundLink")],1),t._v(" 함수.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/autopilot_tester.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot_tester"),e("OutboundLink")],1),t._v("를 호출하는 MAVSDK의 추상체.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/test_multicopter_mission.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("test_multicopter_mission.cpp"),e("OutboundLink")],1),t._v("와 같이, MAVSDK의 추상체를 활용한 실제 시험 절차.")]),t._v(" "),e("li",[t._v("시험 코드에서는 "),e("a",{attrs:{href:"https://github.com/catchorg/Catch2",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2"),e("OutboundLink")],1),t._v(" 단위 시험 프레임워크를 활용합니다. 이 프레임워크를 사용하고자 하는 동기는 다음과 같습니다:\n"),e("ul",[e("li",[t._v("함수 내부에 존재할 수 있는 시험 대상을 멈춰야 할 경우에 대해 단언("),e("code",[t._v("REQUIRE")]),t._v(") 합니다(그리고 "),e("a",{attrs:{href:"https://github.com/google/googletest/blob/master/googletest/docs/advanced.md#assertion-placement",target:"_blank",rel:"noopener noreferrer"}},[t._v("gtest 시험"),e("OutboundLink")],1),t._v("과 같이 최상위의 시험만 진행하는것은 아닙니다).")]),t._v(" "),e("li",[e("em",[t._v("catch2")]),t._v("에 헤더만 있는 라이브러리를 넣을 수 있기 때문에 의존 관리가 간편해집니다.")]),t._v(" "),e("li",[e("em",[t._v("catch2")]),t._v("에서 시험 과정의 유연한 조합을 허용하는 "),e("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md#tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("tag"),e("OutboundLink")],1),t._v("를 지원합니다.")])])])])])]),t._v(" "),e("p",[t._v("활용 용어:")]),t._v(" "),e("ul",[e("li",[t._v('"모델": 선택한 가제보 모델, 예: '),e("code",[t._v("iris")])]),t._v(" "),e("li",[t._v('"테스트 케이스": '),e("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2용 조건 시험 코드 단위"),e("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);s.default=n.exports}}]);