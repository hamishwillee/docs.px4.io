(window.webpackJsonp=window.webpackJsonp||[]).push([[1229],{2615:function(t,s,e){"use strict";e.r(s);var n=e(18),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"unit-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[t._v("#")]),t._v(" Unit Tests")]),t._v(" "),e("p",[t._v("Developers are encouraged to write unit tests during all parts of development, including adding new features, fixing bugs, and refactoring.")]),t._v(" "),e("p",[t._v("PX4 provides several methods for writing unit tests:")]),t._v(" "),e("ol",[e("li",[t._v("Unit tests with "),e("a",{attrs:{href:"https://github.com/google/googletest/blob/master/googletest/docs/primer.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Test"),e("OutboundLink")],1),t._v(' ("GTest") - tests that have minimal, internal-only dependencies')]),t._v(" "),e("li",[t._v("Functional tests with GTest - tests that depend on parameters and uORB messages")]),t._v(" "),e("li",[t._v("SITL unit tests. This is for tests that need to run in full SITL. These tests are much slower to run and harder to debug, so it is recommended to use GTest instead when possible.")])]),t._v(" "),e("h2",{attrs:{id:"writing-a-gtest-unit-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-gtest-unit-test"}},[t._v("#")]),t._v(" Writing a GTest Unit Test")]),t._v(" "),e("p",[e("strong",[t._v("Tip")]),t._v(": In general, if you need access to advanced GTest utilities, data structures from the STL or need to link to "),e("code",[t._v("parameters")]),t._v(" or "),e("code",[t._v("uorb")]),t._v(" libraries you should use the functional tests instead.")]),t._v(" "),e("p",[t._v("The steps to create new unit tests are as follows:")]),t._v(" "),e("ol",[e("li",[t._v("Unit tests should be arranged in three sections: setup, run, check results. Each test should test one very specific behavior or setup case, so if a test fails it is obvious what is wrong. Please try to follow these standards when possible.")]),t._v(" "),e("li",[t._v("Copy and rename the example unit test "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mc_att_control/AttitudeControl/AttitudeControlTest.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("AttitudeControlTest"),e("OutboundLink")],1),t._v(" to the directory the code to be tested is in.")]),t._v(" "),e("li",[t._v("Add the new file to the directory's "),e("code",[t._v("CMakeLists.txt")]),t._v(". It should look something like "),e("code",[t._v("px4_add_unit_gtest(SRC MyNewUnitTest.cpp LINKLIBS <library_to_be_tested>)")])]),t._v(" "),e("li",[t._v("Add the desired test functionality. This will mean including the header files required for your specific tests, adding new tests (each with an individual name) and putting the logic for the setup, running the code to be tested and verifying that it behaves as expected.")]),t._v(" "),e("li",[t._v("If additional library dependencies are required, they should also be added to the CMakeLists after the "),e("code",[t._v("LINKLIBS")]),t._v(" as shown above.")])]),t._v(" "),e("p",[t._v("Tests can be run via "),e("code",[t._v("make tests")]),t._v(", after which you will find the binary in "),e("code",[t._v("build/px4_sitl_test/unit-MyNewUnit")]),t._v(". It can be run directly in a debugger.")]),t._v(" "),e("h2",{attrs:{id:"writing-a-gtest-functional-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-gtest-functional-test"}},[t._v("#")]),t._v(" Writing a GTest Functional Test")]),t._v(" "),e("p",[t._v("GTest functional tests should be used when the test or the components being tested depend on parameters, uORB messages and/or advanced GTest functionality. Additionally, functional tests can contain local usage of STL data structures (although be careful of platform differences between e.g. macOS and Linux).")]),t._v(" "),e("p",[t._v("The steps to creating new functional tests are as follows:")]),t._v(" "),e("ol",[e("li",[t._v("In general (and similar to unit tests), functional tests should be arranged in three sections: setup, run, check results. Each test should test one very specific behavior or setup case, so if a test fails it is obvious what is wrong. Please try to follow these standards when possible.")]),t._v(" "),e("li",[t._v("Copy and rename the example functional test "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/parameters/ParameterTest.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("ParameterTest"),e("OutboundLink")],1),t._v(" to the directory the code to be tested is in.")]),t._v(" "),e("li",[t._v("Rename the class from ParameterTest to something better representing the code being testing")]),t._v(" "),e("li",[t._v("Add the new file to the directory's "),e("code",[t._v("CMakeLists.txt")]),t._v(". It should look something like "),e("code",[t._v("px4_add_functional_gtest(SRC MyNewFunctionalTest.cpp LINKLIBS <library_to_be_tested>)")])]),t._v(" "),e("li",[t._v("Add the desired test functionality. This will mean including the header files required for your specific tests, adding new tests (each with an individual name) and putting the logic for the test setup, running the code to be tested and verifying that it behaves as expected.")]),t._v(" "),e("li",[t._v("If additional library dependencies are required, they should also be added to the CMakeLists after the "),e("code",[t._v("LINKLIBS")]),t._v(" as shown above.")])]),t._v(" "),e("p",[t._v("Tests can be run via "),e("code",[t._v("make tests")]),t._v(", after which you will find the binary in "),e("code",[t._v("build/px4_sitl_test/functional-MyNewFunctional")]),t._v(". It can be run directly in a debugger, however be careful to only run one test per executable invocation using the "),e("a",{attrs:{href:"https://github.com/google/googletest/blob/master/googletest/docs/advanced.md#running-a-subset-of-the-tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("--gtest_filter=<regex>"),e("OutboundLink")],1),t._v(" arguments, as some parts of the uORB and parameter libraries don't clean themselves up perfectly and may result in undefined behavior if set up multiple times.")]),t._v(" "),e("h2",{attrs:{id:"writing-a-sitl-unit-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-sitl-unit-test"}},[t._v("#")]),t._v(" Writing a SITL Unit Test")]),t._v(" "),e("p",[t._v("SITL unit tests should be used when you specifically need all of the flight controller components - drivers, time, and more. These tests are slower to run (1s+ for each new module), and harder to debug, so in general they should only be used when necessary.")]),t._v(" "),e("p",[t._v("The steps to create new SITL unit tests are as follows:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Examine the sample "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/include/unit_test.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unittest-class"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Create a new .cpp file within "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests"),e("OutboundLink")],1),t._v(" with name "),e("strong",[t._v("test_[description].cpp")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Within "),e("strong",[t._v("test_[description].cpp")]),t._v(" include the base unittest-class "),e("code",[t._v("<unit_test.h>")]),t._v(" and all files required to write a test for the new feature.")])]),t._v(" "),e("li",[e("p",[t._v("Within "),e("strong",[t._v("test_[description].cpp")]),t._v(" create a class "),e("code",[t._v("[Description]Test")]),t._v(" that inherits from "),e("code",[t._v("UnitTest")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Within "),e("code",[t._v("[Description]Test")]),t._v(" class declare the public method "),e("code",[t._v("virtual bool run_tests()")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Within "),e("code",[t._v("[Description]Test")]),t._v(" class declare all private methods required to test the feature in question ("),e("code",[t._v("test1()")]),t._v(", "),e("code",[t._v("test2()")]),t._v(",...).")])]),t._v(" "),e("li",[e("p",[t._v("Within "),e("strong",[t._v("test_[description].cpp")]),t._v(" implement the "),e("code",[t._v("run_tests()")]),t._v(" method where each test[1,2,...] will be run.")])]),t._v(" "),e("li",[e("p",[t._v("Within "),e("strong",[t._v("test_[description].cpp")]),t._v(", implement the various tests.")])]),t._v(" "),e("li",[e("p",[t._v("At the bottom within "),e("strong",[t._v("test_[description].cpp")]),t._v(" declare the test.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_declare_test_c")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Here is a template:")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<unit_test.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[new feature].h"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Test "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" UnitTest\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("run_tests")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("run_tests")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_run_test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_run_test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_tests_failed "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ut_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    ut_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ut_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    ut_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_declare_test_c")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Note that "),e("code",[t._v("ut_[name of one of the unit test functions]")]),t._v(" corresponds to one of the unittest functions defined within "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/include/unit_test.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("unit_test.h"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Within "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/systemcmds/tests/tests_main.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests_main.h"),e("OutboundLink")],1),t._v(" define the new test:")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extern")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" test_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("argv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Within "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/systemcmds/tests/tests_main.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests_main.c"),e("OutboundLink")],1),t._v(" add description name, test function and option:")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" tests"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[description]"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OPTION"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   `OPTION` can be `OPT_NOALLTEST`,`OPT_NOJIGTEST` or `0` and is considered if within px4 shell one of the two commands are called:\n\n   ```bash\n   pxh> tests all\n")])])]),e("p",[t._v("or")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pxh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" tests jig\n")])])]),e("p",[t._v("If a test has option "),e("code",[t._v("OPT_NOALLTEST")]),t._v(", then that test will be excluded when calling "),e("code",[t._v("tests all")]),t._v(". The same is true for "),e("code",[t._v("OPT_NOJITEST")]),t._v(" when command "),e("code",[t._v("test jig")]),t._v(" is called. Option "),e("code",[t._v("0")]),t._v(" means that the test is never excluded, which is what most developer want to use.")]),t._v(" "),e("ol",[e("li",[t._v("Add the test "),e("code",[t._v("test_[description].cpp")]),t._v(" to the "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/systemcmds/tests/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMakeLists.txt"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"testing-on-the-local-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing-on-the-local-machine"}},[t._v("#")]),t._v(" Testing on the local machine")]),t._v(" "),e("p",[t._v("Run the complete list of GTest Unit Tests, GTest Functional Tests and SITL Unit Tests right from bash:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" tests\n")])])]),e("p",[t._v("The individual GTest test binaries are in the "),e("code",[t._v("build/px4_sitl_test/")]),t._v(" directory, and can be run directly in most IDEs' debugger.")]),t._v(" "),e("p",[t._v("Filter to run only a subset of tests using a regular expression for the ctest name with this command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" tests "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TESTFILTER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("filter expression"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("For example:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("make tests TESTFILTER=unit")]),t._v(" only run GTest unit tests")]),t._v(" "),e("li",[e("code",[t._v("make tests TESTFILTER=sitl")]),t._v(" only run simulation tests")]),t._v(" "),e("li",[e("code",[t._v("make tests TESTFILTER=Attitude")]),t._v(" only run the "),e("code",[t._v("AttitudeControl")]),t._v(" test")])])])}),[],!1,null,null,null);s.default=a.exports}}]);