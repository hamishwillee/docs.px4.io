(window.webpackJsonp=window.webpackJsonp||[]).push([[1145],{2132:function(t,e,s){"use strict";s.r(e);var n=s(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"integration-testing-using-mavsdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-testing-using-mavsdk"}},[t._v("#")]),t._v(" Integration Testing using MAVSDK")]),t._v(" "),s("p",[t._v("PX4 can be tested end to end to using integration tests based on "),s("a",{attrs:{href:"https://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The tests are primarily developed against SITL and run in continuous integration (CI).\nIn future we plan to generalise them for any platform/hardware.")]),t._v(" "),s("p",[t._v("The instructions below explain how to setup and run the tests locally.")]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("h3",{attrs:{id:"setup-developer-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-developer-environment"}},[t._v("#")]),t._v(" Setup Developer Environment")]),t._v(" "),s("p",[t._v("If you haven't done so already:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Install the development toolchain for "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Linux")]),t._v(" or "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_mac.html"}},[t._v("macOS")]),t._v(" (Windows not supported).\nGazebo is required, and should be installed by default.")],1)]),t._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#download-the-px4-source-code"}},[t._v("Get the PX4 source code")]),t._v(":")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"build-px4-for-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-px4-for-testing"}},[t._v("#")]),t._v(" Build PX4 for Testing")]),t._v(" "),s("p",[t._v("To build PX4 source code for simulator testing, use:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo mavsdk_tests\n")])])]),s("h3",{attrs:{id:"install-the-mavsdk-c-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-mavsdk-c-library"}},[t._v("#")]),t._v(" Install the MAVSDK C++ Library")]),t._v(" "),s("p",[t._v("The tests need the MAVSDK C++ library installed system-wide (e.g. in "),s("code",[t._v("/usr/lib")]),t._v(" or "),s("code",[t._v("/usr/local/lib")]),t._v(").")]),t._v(" "),s("p",[t._v("Install either from binaries or source:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/getting_started/installation.html#cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > Installation > C++"),s("OutboundLink")],1),t._v(": Install as a prebuilt library on supported platforms (recommended)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/contributing/build.html#build_sdk_cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > Contributing > Building from Source"),s("OutboundLink")],1),t._v(": Build  C++ library from source.")])]),t._v(" "),s("h2",{attrs:{id:"run-all-px4-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-all-px4-tests"}},[t._v("#")]),t._v(" Run All PX4 Tests")]),t._v(" "),s("p",[t._v("To run all SITL tests as defined in "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/configs/sitl.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitl.json"),s("OutboundLink")],1),t._v(", do:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("p",[t._v("This will list all of the tests and then run them sequentially.")]),t._v(" "),s("p",[t._v("To see all possible command line arguments use the "),s("code",[t._v("-h")]),t._v(" argument:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py -h\n\nusage: mavsdk_test_runner.py "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--log-dir LOG_DIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--speed-factor SPEED_FACTOR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--iterations ITERATIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--abort-early"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--model MODEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--case CASE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--debugger DEBUGGER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--verbose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             config_file\n\npositional arguments:\n  config_file           JSON config "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" to use\n\noptional arguments:\n  -h, --help            show this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  --log-dir LOG_DIR     Directory "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" log files\n  --speed-factor SPEED_FACTOR\n                        how fast to run the simulation\n  --iterations ITERATIONS\n                        how often to run all tests\n  --abort-early         abort on first unsuccessful "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n  --gui                 display the visualization "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a simulation\n  --model MODEL         only run tests "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" one model\n  --case CASE           only run tests "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" one "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("\n  --debugger DEBUGGER   choice from valgrind, callgrind, gdb, lldb\n  --verbose             "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" verbose output\n")])])]),s("h2",{attrs:{id:"run-a-single-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-a-single-test"}},[t._v("#")]),t._v(" Run a Single Test")]),t._v(" "),s("p",[t._v("Run a single test by specifying the "),s("code",[t._v("model")]),t._v(" and test "),s("code",[t._v("case")]),t._v(" as command line options.\nFor example, to test flying a tailsitter in a mission you might run:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" --model tailsitter --case "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly VTOL mission'")]),t._v("\n")])])]),s("p",[t._v("The easiest way to find out the current set of models and their associated test cases is to run all PX4 tests "),s("a",{attrs:{href:"#run-all-px4-tests"}},[t._v("as shown above")]),t._v(" (note, you can then cancel the build if you wish to test just one).")]),t._v(" "),s("p",[t._v("At time of writing the list generated by running all tests is:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("About to run 39 test cases for 3 selected models (1 iteration):\n  - iris:\n    - 'Land on GPS lost during mission (baro height mode)'\n    - 'Land on GPS lost during mission (GPS height mode)'\n    - 'Continue on mag lost during mission'\n    - 'Continue on baro lost during mission (baro height mode)'\n    - 'Continue on baro lost during mission (GPS height mode)'\n    - 'Continue on baro stuck during mission (baro height mode)'\n    - 'Continue on baro stuck during mission (GPS height mode)'\n    - 'Takeoff and Land'\n    - 'Fly square Multicopter Missions including RTL'\n    - 'Fly square Multicopter Missions with manual RTL'\n    - 'Fly straight Multicopter Mission'\n    - 'Offboard takeoff and land'\n    - 'Offboard position control'\n    - 'Fly forward in position control'\n    - 'Fly forward in altitude control'\n  - standard_vtol:\n    - 'Land on GPS lost during mission (baro height mode)'\n    - 'Land on GPS lost during mission (GPS height mode)'\n    - 'Continue on mag lost during mission'\n    - 'Continue on baro lost during mission (baro height mode)'\n    - 'Continue on baro lost during mission (GPS height mode)'\n    - 'Continue on baro stuck during mission (baro height mode)'\n    - 'Continue on baro stuck during mission (GPS height mode)'\n    - 'Takeoff and Land'\n    - 'Fly square Multicopter Missions including RTL'\n    - 'Fly square Multicopter Missions with manual RTL'\n    - 'Fly forward in position control'\n    - 'Fly forward in altitude control'\n  - tailsitter:\n    - 'Land on GPS lost during mission (baro height mode)'\n    - 'Land on GPS lost during mission (GPS height mode)'\n    - 'Continue on mag lost during mission'\n    - 'Continue on baro lost during mission (baro height mode)'\n    - 'Continue on baro lost during mission (GPS height mode)'\n    - 'Continue on baro stuck during mission (baro height mode)'\n    - 'Continue on baro stuck during mission (GPS height mode)'\n    - 'Takeoff and Land'\n    - 'Fly square Multicopter Missions including RTL'\n    - 'Fly square Multicopter Missions with manual RTL'\n    - 'Fly forward in position control'\n    - 'Fly forward in altitude control'\n")])])]),s("h2",{attrs:{id:"notes-on-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-implementation"}},[t._v("#")]),t._v(" Notes on implementation")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("The tests are invoked from the test runner script "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/mavsdk_test_runner.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavsdk_test_runner.py"),s("OutboundLink")],1),t._v(", which is written in Python.")]),t._v(" "),s("p",[t._v("In addition to MAVSDK, this runner starts "),s("code",[t._v("px4")]),t._v(" as well as Gazebo for SITL tests, and collects the logs of these processes.")])]),t._v(" "),s("li",[s("p",[t._v("The test runner is a C++ binary that contains:")]),t._v(" "),s("ul",[s("li",[t._v("The "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/test_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("main"),s("OutboundLink")],1),t._v(" function to parse the arguments.")]),t._v(" "),s("li",[t._v("An abstraction around MAVSDK called "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/autopilot_tester.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot_tester"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("The actual tests using the abstraction around MAVSDK as e.g. "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/test_multicopter_mission.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("test_multicopter_mission.cpp"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("The tests use the "),s("a",{attrs:{href:"https://github.com/catchorg/Catch2",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2"),s("OutboundLink")],1),t._v(" unit testing framework.\nThe reasons for using this framework are:\n"),s("ul",[s("li",[t._v("Asserts ("),s("code",[t._v("REQUIRE")]),t._v(") which are needed to abort a test can be inside of functions (and not just in the top level test as is "),s("a",{attrs:{href:"https://github.com/google/googletest/blob/master/docs/advanced.md#assertion-placement",target:"_blank",rel:"noopener noreferrer"}},[t._v("the case with gtest"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("li",[t._v("Dependency management is easier because "),s("em",[t._v("catch2")]),t._v(" can just be included as a header-only library.")]),t._v(" "),s("li",[s("em",[t._v("Catch2")]),t._v(" supports "),s("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md#tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("tags"),s("OutboundLink")],1),t._v(", which allows for flexible composition of tests.")])])])])])]),t._v(" "),s("p",[t._v("Terms used:")]),t._v(" "),s("ul",[s("li",[t._v('"model": This is the selected Gazebo model, e.g. '),s("code",[t._v("iris")]),t._v(".")]),t._v(" "),s("li",[t._v('"test case": This is a '),s("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2 test case"),s("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=a.exports}}]);