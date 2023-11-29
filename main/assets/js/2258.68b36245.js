(window.webpackJsonp=window.webpackJsonp||[]).push([[2258],{3989:function(t,s,n){"use strict";n.r(s);var e=n(19),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用-mavsdk-进行集成测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-mavsdk-进行集成测试"}},[t._v("#")]),t._v(" 使用 MAVSDK 进行集成测试")]),t._v(" "),n("p",[t._v("可以使用基于 "),n("a",{attrs:{href:"https://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),n("OutboundLink")],1),t._v(" 的集成测试对 PX4 进行端到端测试。")]),t._v(" "),n("p",[t._v("目前主要针对 SITL 开发测试，并在持续集成（CI）中运行。 但是，它们最终旨在推广到实际测试。")]),t._v(" "),n("p",[t._v("测试需要将MAVSAK C++库安装到系统目录（如： "),n("code",[t._v("/usr/lib")]),t._v(" or "),n("code",[t._v("/usr/local/lib")]),t._v("）")]),t._v(" "),n("h2",{attrs:{id:"安装-mavsdk-c-库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-mavsdk-c-库"}},[t._v("#")]),t._v(" 安装 MAVSDK C++ 库")]),t._v(" "),n("h3",{attrs:{id:"运行所有px4测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行所有px4测试"}},[t._v("#")]),t._v(" 运行所有PX4测试")]),t._v(" "),n("p",[t._v("二进行安装或源码安装：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Install the development toolchain for "),n("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Linux")]),t._v(" or "),n("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_mac.html"}},[t._v("macOS")]),t._v(" (Windows not supported). "),n("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" is required, and should be installed by default.")],1)]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#download-the-px4-source-code"}},[t._v("Get the PX4 source code")]),t._v(":")],1),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])])]),t._v(" "),n("h3",{attrs:{id:"build-px4-for-testing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#build-px4-for-testing"}},[t._v("#")]),t._v(" Build PX4 for Testing")]),t._v(" "),n("p",[t._v("使用以下命令构建 PX4 源码：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic mavsdk_tests\n")])])]),n("h3",{attrs:{id:"install-the-mavsdk-c-library"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-the-mavsdk-c-library"}},[t._v("#")]),t._v(" Install the MAVSDK C++ Library")]),t._v(" "),n("p",[t._v("运行 "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/configs/sitl.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitl.json"),n("OutboundLink")],1),t._v(" 中定义的所有SITL测试，执行：")]),t._v(" "),n("p",[t._v("要看所有可用的命令行参数，运行：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/quickstart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > C++ > C++ QuickStart"),n("OutboundLink")],1),t._v(": Install as a prebuilt library on supported platforms (recommended)")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/guide/build.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > C++ Guide > Building from Source"),n("OutboundLink")],1),t._v(": Build C++ library from source.")])]),t._v(" "),n("h2",{attrs:{id:"准备-px4-源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备-px4-源码"}},[t._v("#")]),t._v(" 准备 PX4 源码")]),t._v(" "),n("p",[t._v("To run all SITL tests as defined in "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/test/mavsdk_tests/configs/sitl.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitl.json"),n("OutboundLink")],1),t._v(", do:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),n("p",[t._v("This will list all of the tests and then run them sequentially.")]),t._v(" "),n("p",[t._v("To see all possible command line arguments use the "),n("code",[t._v("-h")]),t._v(" argument:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py -h\n\n用法：mavsdk_test_runner。 y "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--log-dir LOG_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--speed-factor SPEED_FACTOR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--trerations ITERATION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--abort-early"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--gui"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--model MODEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--case CASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--debugger DEBUGER"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--verbose"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             config_file\n\nposital 参数：\n  config_file JSON 使用的JSON配置文件\n\noptional 参数：\n  -h, --help 显示此帮助信息并退出\n  --log-dir LOG_DIR 日志文件目录\n  --speed-factor SPEED_FACTOR\n                        模拟运行的速度因子\n  --迭代ITERATION\n                        在首次失败的测试中运行所有测试的频率\n  --abort-early 中止\n  --guide 显示模拟的可视化化\n  MODEL 只为一个模型运行测试\n  --case CASE 只运行测试一个案例\n  --debugger DEBUGER 调试器：callgrind, gdb, lldb\n  --verbose 启用更详细的输出\n")])])]),n("h2",{attrs:{id:"关于实现的说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于实现的说明"}},[t._v("#")]),t._v(" 关于实现的说明")]),t._v(" "),n("p",[t._v("Run a single test by specifying the "),n("code",[t._v("model")]),t._v(" and test "),n("code",[t._v("case")]),t._v(" as command line options. For example, to test flying a tailsitter in a mission you might run:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" --model tailsitter --case "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly VTOL mission'")]),t._v("\n")])])]),n("p",[t._v("The easiest way to find out the current set of models and their associated test cases is to run all PX4 tests "),n("a",{attrs:{href:"#run-all-px4-tests"}},[t._v("as shown above")]),t._v(" (note, you can then cancel the build if you wish to test just one).")]),t._v(" "),n("p",[t._v("At time of writing the list generated by running all tests is:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("About to run "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("39")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" cases "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" selected models "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" iteration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n  - iris:\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on mag lost during mission'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Takeoff and Land'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions including RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions with manual RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly straight Multicopter Mission'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Offboard takeoff and land'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Offboard position control'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in position control'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in altitude control'")]),t._v("\n  - standard_vtol:\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on mag lost during mission'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Takeoff and Land'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions including RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions with manual RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in position control'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in altitude control'")]),t._v("\n  - tailsitter:\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Land on GPS lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on mag lost during mission'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro lost during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (baro height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Continue on baro stuck during mission (GPS height mode)'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Takeoff and Land'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions including RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly square Multicopter Missions with manual RTL'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in position control'")]),t._v("\n    - "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly forward in altitude control'")]),t._v("\n")])])]),n("h2",{attrs:{id:"implementation-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation-notes"}},[t._v("#")]),t._v(" Implementation Notes")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("The tests are invoked from the test runner script "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/test/mavsdk_tests/mavsdk_test_runner.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavsdk_test_runner.py"),n("OutboundLink")],1),t._v(", which is written in Python.")]),t._v(" "),n("p",[t._v("In addition to MAVSDK, this runner starts "),n("code",[t._v("px4")]),t._v(" as well as Gazebo for SITL tests, and collects the logs of these processes.")])]),t._v(" "),n("li",[n("p",[t._v("The test runner is a C++ binary that contains:")]),t._v(" "),n("ul",[n("li",[t._v("The "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/test/mavsdk_tests/test_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("main"),n("OutboundLink")],1),t._v(" function to parse the arguments.")]),t._v(" "),n("li",[t._v("An abstraction around MAVSDK called "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/test/mavsdk_tests/autopilot_tester.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot_tester"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("li",[t._v("The actual tests using the abstraction around MAVSDK as e.g. "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/test/mavsdk_tests/test_multicopter_mission.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("test_multicopter_mission.cpp"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("li",[t._v("The tests use the "),n("a",{attrs:{href:"https://github.com/catchorg/Catch2",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2"),n("OutboundLink")],1),t._v(" unit testing framework. The reasons for using this framework are:\n"),n("ul",[n("li",[t._v("Asserts ("),n("code",[t._v("REQUIRE")]),t._v(") which are needed to abort a test can be inside of functions (and not just in the top level test as is "),n("a",{attrs:{href:"https://github.com/google/googletest/blob/main/docs/advanced.md#assertion-placement",target:"_blank",rel:"noopener noreferrer"}},[t._v("the case with gtest"),n("OutboundLink")],1),t._v(").")]),t._v(" "),n("li",[t._v("Dependency management is easier because "),n("em",[t._v("catch2")]),t._v(" can just be included as a header-only library.")]),t._v(" "),n("li",[n("em",[t._v("Catch2")]),t._v(" supports "),n("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/devel/docs/test-cases-and-sections.md#tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("tags"),n("OutboundLink")],1),t._v(", which allows for flexible composition of tests.")])])])])])]),t._v(" "),n("p",[t._v("Terms used:")]),t._v(" "),n("ul",[n("li",[t._v('"model": This is the selected Gazebo model, e.g. '),n("code",[t._v("iris")]),t._v(".")]),t._v(" "),n("li",[t._v('"test case": This is a '),n("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2 test case"),n("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);s.default=a.exports}}]);