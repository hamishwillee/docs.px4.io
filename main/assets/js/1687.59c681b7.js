(window.webpackJsonp=window.webpackJsonp||[]).push([[1687],{3082:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"단위-테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단위-테스트"}},[t._v("#")]),t._v(" 단위 테스트")]),t._v(" "),a("p",[t._v("개발자는 기능 추가, 버그 수정, 리팩토링 등 전 영역에 걸쳐 단위 테스트를 하는 것이 바람직합니다.")]),t._v(" "),a("p",[t._v("PX4에서는 단위 테스트 작성에 필요한 몇가지 수단을 제공합니다:")]),t._v(" "),a("ol",[a("li",[t._v("Unit tests with "),a("a",{attrs:{href:"https://github.com/google/googletest/blob/main/docs/primer.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Test"),a("OutboundLink")],1),t._v(' ("GTest") - tests that have minimal, internal-only dependencies')]),t._v(" "),a("li",[t._v("GTest로의 기능 시험 - 매개변수와 uORB 메세지에 따른 시험")]),t._v(" "),a("li",[t._v("SITL 단위 테스트. 완전한 SITL 실행에 필요한 테스트입니다. 이 테스트는 실행하기에 매우 느리거나 디버깅하기 어려운 부분입니다. 따라서 가능하면 GTest를 활용하시는게 좋습니다.")])]),t._v(" "),a("h2",{attrs:{id:"gtest-단위-테스트-작성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gtest-단위-테스트-작성"}},[t._v("#")]),t._v(" GTest 단위 테스트 작성")]),t._v(" "),a("p",[a("strong",[t._v("Tip")]),t._v(": 보통, 고급 GTest 유틸리티, STL 데이터 구조에 접근해야 하거나 "),a("code",[t._v("매개변수")]),t._v(" 또는 "),a("code",[t._v("uORB")]),t._v(" 라이브러리로의 연결이 필요하다면, 기능 테스트를 대신 활용해야합니다.")]),t._v(" "),a("p",[t._v("새 단위 테스트의 작성 절차는 다음과 같습니다:")]),t._v(" "),a("ol",[a("li",[t._v("단위 테스트는 설치, 실행, 결과 검사 세 부분으로 정리해야 합니다. 각 테스트에서는 매우 극히 일부의 동작을 시험하거나 설정 조건을 시험하기 때문에, 테스트에 실패했을 경우 어떤 부분에서 문제가 있는지 명백하게 드러납니다. 가능하면 이 표준을 따라주십시오.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mc_att_control/AttitudeControl/AttitudeControlTest.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("AttitudeControlTest"),a("OutboundLink")],1),t._v(" 예제 단위 테스트를 시험할 코드가 있는 디렉터리로 복사하고 이름을 바꾸십시오.")]),t._v(" "),a("li",[t._v("해당 디렉터리의 "),a("code",[t._v("CMakeLists.txt")]),t._v("에 새 파일을 추가하십시오. "),a("code",[t._v("px4_add_unit_gtest(SRC MyNewUnitTest.cpp LINKLIBS <library_to_be_tested>)")]),t._v("와 같아야 합니다.")]),t._v(" "),a("li",[t._v("원하는 시험 기능을 추가하십시오. 특정 테스트를 수행하려면 헤더 파일 추가가 필요하며, 새 테스트 추가(제각각의 이름을 지님), 설정 로직 배치, 시험할 코드 실행, 결과 검증을 기대대로 수행합니다.")]),t._v(" "),a("li",[t._v("추가 라이브러리 의존 요소가 필요하다면, 위에서와 같이 CMakeLists의 "),a("code",[t._v("LINKLIBS")]),t._v(" 다음에 추가해야합니다.")])]),t._v(" "),a("p",[a("code",[t._v("make tests")]),t._v("를 실행하여 시험을 진행할 수 있으며, 이 과정 후 "),a("code",[t._v("build/px4_sitl_test/unit-MyNewUnit")]),t._v(" 위치에서 바이너리를 찾을 수 있습니다. 디버거에서 바로 실행할 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"gtest-기능-테스트-작성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gtest-기능-테스트-작성"}},[t._v("#")]),t._v(" GTest 기능 테스트 작성")]),t._v(" "),a("p",[t._v("GTest 기능 시험은 매개변수, uORB 메세지, 고급 GTest 기능에 따라 테스트할 테스트 단위 또는 구성 요소가 있을 때 활용해야합니다. 게다가, 기능 테스트 과정에서 자체 STL 데이터 구조를 사용할 수 있습니다(플랫폼간 차이에 유의해야 함. 예: maxOS, Linux).")]),t._v(" "),a("p",[t._v("새 기능 테스트의 작성 절차는 다음과 같습니다:")]),t._v(" "),a("ol",[a("li",[t._v("보통 (그리고 단위 테스트와 유사한  상황에서), 기능 테스트는 구성, 실행, 결과 검사 세부분으로 정리해야합니다. 각 테스트에서는 매우 극히 일부의 동작을 시험하거나 설정 조건을 시험하기 때문에, 테스트에 실패했을 경우 어떤 부분에서 문제가 있는지 명백하게 드러납니다. 가능하면 이 표준을 따라주십시오.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/parameters/ParameterTest.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("ParameterTest"),a("OutboundLink")],1),t._v(" 기능 단위 테스트를 시험할 코드가 있는 디렉터리로 복사하고 이름을 변경하십시오.")]),t._v(" "),a("li",[t._v("ParameterTest의 클래스 이름을 시험할 코드를 더 잘 구분할 수 있는 이름으로 변경하십시오.")]),t._v(" "),a("li",[t._v("해당 디렉터리의 "),a("code",[t._v("CMakeLists.txt")]),t._v("에 새 파일을 추가하십시오. "),a("code",[t._v("px4_add_functional_gtest(SRC MyNewFunctionalTest.cpp LINKLIBS <library_to_be_tested>)")]),t._v("와 같아야 합니다.")]),t._v(" "),a("li",[t._v("원하는 시험 기능을 추가하십시오. 특정 테스트를 수행하려면 헤더 파일 추가가 필요하며, 새 테스트 추가(제각각의 이름을 지님), 설정 로직 배치, 시험할 코드 실행, 결과 검증을 기대대로 수행합니다.")]),t._v(" "),a("li",[t._v("추가 라이브러리 의존 요소가 필요하다면, 위에서와 같이 CMakeLists의 "),a("code",[t._v("LINKLIBS")]),t._v(" 다음에 추가해야합니다.")])]),t._v(" "),a("p",[a("code",[t._v("make tests")]),t._v("를 실행하여 시험을 진행할 수 있으며, 이 과정 후 "),a("code",[t._v("build/px4_sitl_test/functional-MyNewFunctional")]),t._v(" 위치에서 바이너리를 찾을 수 있습니다. It can be run directly in a debugger, however be careful to only run one test per executable invocation using the "),a("a",{attrs:{href:"https://github.com/google/googletest/blob/main/docs/advanced.md#running-a-subset-of-the-tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("--gtest_filter=<regex>"),a("OutboundLink")],1),t._v(" arguments, as some parts of the uORB and parameter libraries don't clean themselves up perfectly and may result in undefined behavior if set up multiple times.")]),t._v(" "),a("h2",{attrs:{id:"sitl-단위-테스트-작성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sitl-단위-테스트-작성"}},[t._v("#")]),t._v(" SITL 단위 테스트 작성")]),t._v(" "),a("p",[t._v("특히 비행체 제어 장치의 모든 부분 - 드라이버, 시간, 등을 시험하려면 SITL 단위 테스트를 거쳐야합니다. 이 테스트는 실행이 느리며(새 모듈 별로 1초씩 추가), 디버깅도 어려워, 보통 필요할 때만 테스트를 활용합니다.")]),t._v(" "),a("p",[t._v("새 SITL 단위 테스트의 작성 절차는 다음과 같습니다:")]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/include/unit_test.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unittest-class"),a("OutboundLink")],1),t._v(" 예제를 검사하십시오.")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests"),a("OutboundLink")],1),t._v("에 새 .cpp 파일을 만들고 이름을 "),a("strong",[t._v("test_[description].cpp")]),t._v("와 같이 정하십시오.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("test_[description].cpp")]),t._v(" 파일에 unittest-class 기반 클래스 "),a("code",[t._v("<unit_test.h>")]),t._v(" 헤더 파일을 넣고 새 기능 동작에 해당하는 시험 코드 작성시 필요한 모든 파일을 넣으십시오.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("test_[description].cpp")]),t._v(" 에 "),a("code",[t._v("UnitTest")]),t._v(" 클래스를 상속하는 "),a("code",[t._v("[Description]Test")]),t._v("  클래스를 작성하십시오.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("[Description]Test")]),t._v(" 클래스에 공용 메서드"),a("code",[t._v("virtual bool run_tests()")]),t._v("를 선언하십시오.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("[Description]Test")]),t._v(" 클래스에 기능에 대해 확인하는 과정에서 필요한 모든 내부 메서드("),a("code",[t._v("test1()")]),t._v(", "),a("code",[t._v("test2()")]),t._v(",...)를 선언하십시오.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("test_[description].cpp")]),t._v(" 파일에 각각의 test[1,2,...] 메드를 실행하도록 "),a("code",[t._v("run_tests()")]),t._v(" 메서드를 작성하십시오.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("test_[description].cpp")]),t._v(" 파일에 다양한 시험 절차를 작성하십시오.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("test_[description].cpp")]),t._v(" 파일 내부 하단에 테스트를 선언하십시오.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_declare_test_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("서식은 아래와 같습니다:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<unit_test.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[new feature].h"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" UnitTest\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run_tests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run_tests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_run_test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_run_test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_tests_failed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ut_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    ut_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ut_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    ut_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_declare_test_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("참고로 "),a("code",[t._v("ut_[name of one of the unit test functions]")]),t._v("는 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/include/unit_test.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("unit_test.h"),a("OutboundLink")],1),t._v("에 지정한 단위 테스트 함수 중 하나에 해당합니다.")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/systemcmds/tests/tests_main.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests_main.h"),a("OutboundLink")],1),t._v("에 새 테스트를 정의하십시오:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extern")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" test_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/systemcmds/tests/tests_main.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests_main.c"),a("OutboundLink")],1),t._v("에 새 설명 이름, 테스트 함수, 옵션을 추가하십시오:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" tests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[description]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("OPTION")]),t._v("은 "),a("code",[t._v("OPT_NOALLTEST")]),t._v(","),a("code",[t._v("OPT_NOJIGTEST")]),t._v(", "),a("code",[t._v("0")]),t._v(" 중 한가지 값이 들어갈 수 있으며, px4 셸에서 한두가지 명령을 호출했을 때 고려합니다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pxh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" tests all\n")])])]),a("p",[t._v("또는")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pxh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" tests jig\n")])])]),a("p",[a("code",[t._v("OPT_NOALLTEST")]),t._v(" 옵션으로 테스트를 수행한다면, "),a("code",[t._v("tests all")]),t._v("을 호출할 때의 테스트를 제외합니다. "),a("code",[t._v("OPT_NOJIGTEST")]),t._v("에 대해서도 "),a("code",[t._v("test jig")]),t._v(" 명령을 호출했을 때 마찬가지입니다. "),a("code",[t._v("0")]),t._v(" 옵션은 개발자가 활용하고자 하는 테스트를 제외하지 않음을 의미합니다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("test_[description].cpp")]),t._v(" 테스트를 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/systemcmds/tests/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMakeLists.txt"),a("OutboundLink")],1),t._v("에 추가하십시오.")])])]),t._v(" "),a("h2",{attrs:{id:"로컬-머신에서의-테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로컬-머신에서의-테스트"}},[t._v("#")]),t._v(" 로컬 머신에서의 테스트")]),t._v(" "),a("p",[t._v("GTest 단위 시험, GTest 기능 시험, SITL 단위 시험 전체를 Bash 쉘에서 실행하십시오.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" tests\n")])])]),a("p",[t._v("개별 GTest 테스트 바이너리는 "),a("code",[t._v("build/px4_stil_test/")]),t._v(" 디렉터리에 있으며, 대부분 IDE 디버거에서 바로 실행할 수 있습니다.")]),t._v(" "),a("p",[t._v("테스트 하위 집합만 따로 실행하려면 이 명령에서 ctest 명칭에 대해 정규 표현식을 적용하여 걸러내십시오:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" tests "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TESTFILTER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("regex filter expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("예를 들어:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("make tests TESTFILTER=unit")]),t._v(": GTest 단위 테스트만 실행")]),t._v(" "),a("li",[a("code",[t._v("make tests TESTFILTER=sitl")]),t._v(" 모의 시험 환경상 테스트만 실행")]),t._v(" "),a("li",[a("code",[t._v("make tests TESTFILTER=Attitude")]),t._v(" "),a("code",[t._v("AttitudeControl")]),t._v(" 테스트만 실행")])])])}),[],!1,null,null,null);s.default=e.exports}}]);