(window.webpackJsonp=window.webpackJsonp||[]).push([[1435],{2631:function(t,s,e){"use strict";e.r(s);var n=e(19),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"integration-testing-using-mavsdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integration-testing-using-mavsdk"}},[t._v("#")]),t._v(" Integration Testing using MAVSDK")]),t._v(" "),e("p",[t._v("PX4 can be tested end to end to using integration tests based on "),e("a",{attrs:{href:"https://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("The tests are primarily developed against SITL and run in continuous integration (CI).\nIn future we plan to generalise them for any platform/hardware.")]),t._v(" "),e("p",[t._v("The instructions below explain how to setup and run the tests locally.")]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("h3",{attrs:{id:"setup-developer-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-developer-environment"}},[t._v("#")]),t._v(" Setup Developer Environment")]),t._v(" "),e("p",[t._v("If you haven't done so already:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Install the development toolchain for "),e("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Linux")]),t._v(" or "),e("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_mac.html"}},[t._v("macOS")]),t._v(" (Windows not supported).\n"),e("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" is required, and should be installed by default.")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#download-the-px4-source-code"}},[t._v("Get the PX4 source code")]),t._v(":")],1),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"build-px4-for-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-px4-for-testing"}},[t._v("#")]),t._v(" Build PX4 for Testing")]),t._v(" "),e("p",[t._v("To build PX4 source code for simulator testing, use:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic mavsdk_tests\n")])])]),e("h3",{attrs:{id:"install-the-mavsdk-c-library"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-the-mavsdk-c-library"}},[t._v("#")]),t._v(" Install the MAVSDK C++ Library")]),t._v(" "),e("p",[t._v("The tests need the MAVSDK C++ library installed system-wide (e.g. in "),e("code",[t._v("/usr/lib")]),t._v(" or "),e("code",[t._v("/usr/local/lib")]),t._v(").")]),t._v(" "),e("p",[t._v("Install either from binaries or source:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/quickstart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > C++ > C++ QuickStart"),e("OutboundLink")],1),t._v(": Install as a prebuilt library on supported platforms (recommended)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/guide/build.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > C++ Guide > Building from Source"),e("OutboundLink")],1),t._v(": Build C++ library from source.")])]),t._v(" "),e("h2",{attrs:{id:"run-all-px4-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-all-px4-tests"}},[t._v("#")]),t._v(" Run All PX4 Tests")]),t._v(" "),e("p",[t._v("To run all SITL tests as defined in "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/test/mavsdk_tests/configs/sitl.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitl.json"),e("OutboundLink")],1),t._v(", do:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),e("p",[t._v("This will list all of the tests and then run them sequentially.")]),t._v(" "),e("p",[t._v("To see all possible command line arguments use the "),e("code",[t._v("-h")]),t._v(" argument:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py -h\n\nusage: mavsdk_test_runner.py "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--log-dir LOG_DIR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--speed-factor SPEED_FACTOR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--iterations ITERATIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--abort-early"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--gui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--model MODEL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--case CASE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--debugger DEBUGGER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--verbose"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             config_file\n\npositional arguments:\n  config_file           JSON config "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" to use\n\noptional arguments:\n  -h, --help            show this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  --log-dir LOG_DIR     Directory "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" log files\n  --speed-factor SPEED_FACTOR\n                        how fast to run the simulation\n  --iterations ITERATIONS\n                        how often to run all tests\n  --abort-early         abort on first unsuccessful "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n  --gui                 display the visualization "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a simulation\n  --model MODEL         only run tests "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" one model\n  --case CASE           only run tests "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" one "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("\n  --debugger DEBUGGER   choice from valgrind, callgrind, gdb, lldb\n  --verbose             "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" verbose output\n")])])]),e("h2",{attrs:{id:"run-a-single-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-a-single-test"}},[t._v("#")]),t._v(" Run a Single Test")]),t._v(" "),e("p",[t._v("Run a single test by specifying the "),e("code",[t._v("model")]),t._v(" and test "),e("code",[t._v("case")]),t._v(" as command line options.\nFor example, to test flying a tailsitter in a mission you might run:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" --model tailsitter --case "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly VTOL mission'")]),t._v("\n")])])]),e("p",[t._v("The easiest way to find out the current set of models and their associated test cases is to run all PX4 tests "),e("a",{attrs:{href:"#run-all-px4-tests"}},[t._v("as shown above")]),t._v(" (note, you can then cancel the build if you wish to test just one).")]),t._v(" "),e("p",[t._v("At time of writing the list generated by running all tests is:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("About to run "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("39")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" cases "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" selected models "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" iteration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n  - iris:\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (baro height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (GPS height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on mag lost during mission'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (baro height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (GPS height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (baro height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (GPS height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Takeoff and Land'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions including RTL'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions with manual RTL'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly straight Multicopter Mission'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Offboard takeoff and land'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Offboard position control'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in position control'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in altitude control'")]),t._v("\n  - standard_vtol:\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (baro height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (GPS height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on mag lost during mission'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (baro height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (GPS height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (baro height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (GPS height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Takeoff and Land'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions including RTL'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions with manual RTL'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in position control'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in altitude control'")]),t._v("\n  - tailsitter:\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (baro height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (GPS height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on mag lost during mission'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (baro height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (GPS height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (baro height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (GPS height mode)'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Takeoff and Land'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions including RTL'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions with manual RTL'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in position control'")]),t._v("\n    - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in altitude control'")]),t._v("\n")])])]),e("h2",{attrs:{id:"implementation-notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation-notes"}},[t._v("#")]),t._v(" Implementation Notes")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The tests are invoked from the test runner script "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/test/mavsdk_tests/mavsdk_test_runner.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavsdk_test_runner.py"),e("OutboundLink")],1),t._v(", which is written in Python.")]),t._v(" "),e("p",[t._v("In addition to MAVSDK, this runner starts "),e("code",[t._v("px4")]),t._v(" as well as Gazebo for SITL tests, and collects the logs of these processes.")])]),t._v(" "),e("li",[e("p",[t._v("The test runner is a C++ binary that contains:")]),t._v(" "),e("ul",[e("li",[t._v("The "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/test/mavsdk_tests/test_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("main"),e("OutboundLink")],1),t._v(" function to parse the arguments.")]),t._v(" "),e("li",[t._v("An abstraction around MAVSDK called "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/test/mavsdk_tests/autopilot_tester.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot_tester"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("The actual tests using the abstraction around MAVSDK as e.g. "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/test/mavsdk_tests/test_multicopter_mission.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("test_multicopter_mission.cpp"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("The tests use the "),e("a",{attrs:{href:"https://github.com/catchorg/Catch2",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2"),e("OutboundLink")],1),t._v(" unit testing framework.\nThe reasons for using this framework are:\n"),e("ul",[e("li",[t._v("Asserts ("),e("code",[t._v("REQUIRE")]),t._v(") which are needed to abort a test can be inside of functions (and not just in the top level test as is "),e("a",{attrs:{href:"https://github.com/google/googletest/blob/main/docs/advanced.md#assertion-placement",target:"_blank",rel:"noopener noreferrer"}},[t._v("the case with gtest"),e("OutboundLink")],1),t._v(").")]),t._v(" "),e("li",[t._v("Dependency management is easier because "),e("em",[t._v("catch2")]),t._v(" can just be included as a header-only library.")]),t._v(" "),e("li",[e("em",[t._v("Catch2")]),t._v(" supports "),e("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/devel/docs/test-cases-and-sections.md#tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("tags"),e("OutboundLink")],1),t._v(", which allows for flexible composition of tests.")])])])])])]),t._v(" "),e("p",[t._v("Terms used:")]),t._v(" "),e("ul",[e("li",[t._v('"model": This is the selected Gazebo model, e.g. '),e("code",[t._v("iris")]),t._v(".")]),t._v(" "),e("li",[t._v('"test case": This is a '),e("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2 test case"),e("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);s.default=a.exports}}]);