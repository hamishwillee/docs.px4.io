(window.webpackJsonp=window.webpackJsonp||[]).push([[1871],{3341:function(t,s,e){"use strict";e.r(s);var n=e(19),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用-mavsdk-进行集成测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-mavsdk-进行集成测试"}},[t._v("#")]),t._v(" 使用 MAVSDK 进行集成测试")]),t._v(" "),e("p",[t._v("可以使用基于 "),e("a",{attrs:{href:"https://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),e("OutboundLink")],1),t._v(" 的集成测试对 PX4 进行端到端测试。")]),t._v(" "),e("p",[t._v("目前主要针对 SITL 开发测试，并在持续集成（CI）中运行。 但是，它们最终旨在推广到实际测试。")]),t._v(" "),e("p",[t._v("测试需要将MAVSAK C++库安装到系统目录（如： "),e("code",[t._v("/usr/lib")]),t._v(" or "),e("code",[t._v("/usr/local/lib")]),t._v("）")]),t._v(" "),e("h2",{attrs:{id:"安装-mavsdk-c-库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-mavsdk-c-库"}},[t._v("#")]),t._v(" 安装 MAVSDK C++ 库")]),t._v(" "),e("h3",{attrs:{id:"运行所有px4测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行所有px4测试"}},[t._v("#")]),t._v(" 运行所有PX4测试")]),t._v(" "),e("p",[t._v("二进行安装或源码安装：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Install the development toolchain for "),e("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Linux")]),t._v(" or "),e("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_mac.html"}},[t._v("macOS")]),t._v(" (Windows not supported). Gazebo is required, and should be installed by default.")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#download-the-px4-source-code"}},[t._v("Get the PX4 source code")]),t._v(":")],1),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"build-px4-for-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-px4-for-testing"}},[t._v("#")]),t._v(" Build PX4 for Testing")]),t._v(" "),e("p",[t._v("使用以下命令构建 PX4 源码：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo mavsdk_tests\n")])])]),e("h3",{attrs:{id:"install-the-mavsdk-c-library"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-the-mavsdk-c-library"}},[t._v("#")]),t._v(" Install the MAVSDK C++ Library")]),t._v(" "),e("p",[t._v("运行 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/configs/sitl.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitl.json"),e("OutboundLink")],1),t._v(" 中定义的所有SITL测试，执行：")]),t._v(" "),e("p",[t._v("要看所有可用的命令行参数，运行：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/getting_started/installation.html#cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > Installation > C++"),e("OutboundLink")],1),t._v(": Install as a prebuilt library on supported platforms (recommended)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/contributing/build.html#build_sdk_cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > Contributing > Building from Source"),e("OutboundLink")],1),t._v(": Build  C++ library from source.")])]),t._v(" "),e("h2",{attrs:{id:"准备-px4-源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备-px4-源码"}},[t._v("#")]),t._v(" 准备 PX4 源码")]),t._v(" "),e("p",[t._v("使用的术语：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),e("p",[t._v("This will list all of the tests and then run them sequentially.")]),t._v(" "),e("p",[t._v("To see all possible command line arguments use the "),e("code",[t._v("-h")]),t._v(" argument:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py -h\n\n用法：mavsdk_test_runner。 y "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--log-dir LOG_DIR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--speed-factor SPEED_FACTOR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--trerations ITERATION"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--abort-early"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--gui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--model MODEL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--case CASE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--debugger DEBUGER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--verbose"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             config_file\n\nposital 参数：\n  config_file JSON 使用的JSON配置文件\n\noptional 参数：\n  -h, --help 显示此帮助信息并退出\n  --log-dir LOG_DIR 日志文件目录\n  --speed-factor SPEED_FACTOR\n                        模拟运行的速度因子\n  --迭代ITERATION\n                        在首次失败的测试中运行所有测试的频率\n  --abort-early 中止\n  --guide 显示模拟的可视化化\n  MODEL 只为一个模型运行测试\n  --case CASE 只运行测试一个案例\n  --debugger DEBUGER 调试器：callgrind, gdb, lldb\n  --verbose 启用更详细的输出\n")])])]),e("h2",{attrs:{id:"关于实现的说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于实现的说明"}},[t._v("#")]),t._v(" 关于实现的说明")]),t._v(" "),e("p",[t._v("Run a single test by specifying the "),e("code",[t._v("model")]),t._v(" and test "),e("code",[t._v("case")]),t._v(" as command line options. For example, to test flying a tailsitter in a mission you might run:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" --model tailsitter --case "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fly VTOL mission'")]),t._v("\n")])])]),e("p",[t._v("The easiest way to find out the current set of models and their associated test cases is to run all PX4 tests "),e("a",{attrs:{href:"#run-all-px4-tests"}},[t._v("as shown above")]),t._v(" (note, you can then cancel the build if you wish to test just one).")]),t._v(" "),e("p",[t._v("At time of writing the list generated by running all tests is:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("About to run 39 test cases for 3 selected models (1 iteration):\n  - iris:\n    - 'Land on GPS lost during mission (baro height mode)'\n    - 'Land on GPS lost during mission (GPS height mode)'\n    - 'Continue on mag lost during mission'\n    - 'Continue on baro lost during mission (baro height mode)'\n    - 'Continue on baro lost during mission (GPS height mode)'\n    - 'Continue on baro stuck during mission (baro height mode)'\n    - 'Continue on baro stuck during mission (GPS height mode)'\n    - 'Takeoff and Land'\n    - 'Fly square Multicopter Missions including RTL'\n    - 'Fly square Multicopter Missions with manual RTL'\n    - 'Fly straight Multicopter Mission'\n    - 'Offboard takeoff and land'\n    - 'Offboard position control'\n    - 'Fly forward in position control'\n    - 'Fly forward in altitude control'\n  - standard_vtol:\n    - 'Land on GPS lost during mission (baro height mode)'\n    - 'Land on GPS lost during mission (GPS height mode)'\n    - 'Continue on mag lost during mission'\n    - 'Continue on baro lost during mission (baro height mode)'\n    - 'Continue on baro lost during mission (GPS height mode)'\n    - 'Continue on baro stuck during mission (baro height mode)'\n    - 'Continue on baro stuck during mission (GPS height mode)'\n    - 'Takeoff and Land'\n    - 'Fly square Multicopter Missions including RTL'\n    - 'Fly square Multicopter Missions with manual RTL'\n    - 'Fly forward in position control'\n    - 'Fly forward in altitude control'\n  - tailsitter:\n    - 'Land on GPS lost during mission (baro height mode)'\n    - 'Land on GPS lost during mission (GPS height mode)'\n    - 'Continue on mag lost during mission'\n    - 'Continue on baro lost during mission (baro height mode)'\n    - 'Continue on baro lost during mission (GPS height mode)'\n    - 'Continue on baro stuck during mission (baro height mode)'\n    - 'Continue on baro stuck during mission (GPS height mode)'\n    - 'Takeoff and Land'\n    - 'Fly square Multicopter Missions including RTL'\n    - 'Fly square Multicopter Missions with manual RTL'\n    - 'Fly forward in position control'\n    - 'Fly forward in altitude control'\n")])])]),e("h2",{attrs:{id:"notes-on-implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-implementation"}},[t._v("#")]),t._v(" Notes on implementation")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The tests are invoked from the test runner script "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/mavsdk_test_runner.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavsdk_test_runner.py"),e("OutboundLink")],1),t._v(", which is written in Python.")]),t._v(" "),e("p",[t._v("In addition to MAVSDK, this runner starts "),e("code",[t._v("px4")]),t._v(" as well as Gazebo for SITL tests, and collects the logs of these processes.")])]),t._v(" "),e("li",[e("p",[t._v("The test runner is a C++ binary that contains:")]),t._v(" "),e("ul",[e("li",[t._v("The "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/test_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("main"),e("OutboundLink")],1),t._v(" function to parse the arguments.")]),t._v(" "),e("li",[t._v("An abstraction around MAVSDK called "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/autopilot_tester.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot_tester"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("The actual tests using the abstraction around MAVSDK as e.g. "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/test_multicopter_mission.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("test_multicopter_mission.cpp"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("The tests use the "),e("a",{attrs:{href:"https://github.com/catchorg/Catch2",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2"),e("OutboundLink")],1),t._v(" unit testing framework. The reasons for using this framework are:\n"),e("ul",[e("li",[t._v("Asserts ("),e("code",[t._v("REQUIRE")]),t._v(") which are needed to abort a test can be inside of functions (and not just in the top level test as is "),e("a",{attrs:{href:"https://github.com/google/googletest/blob/master/docs/advanced.md#assertion-placement",target:"_blank",rel:"noopener noreferrer"}},[t._v("the case with gtest"),e("OutboundLink")],1),t._v(").")]),t._v(" "),e("li",[t._v("Dependency management is easier because "),e("em",[t._v("catch2")]),t._v(" can just be included as a header-only library.")]),t._v(" "),e("li",[e("em",[t._v("Catch2")]),t._v(" supports "),e("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md#tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("tags"),e("OutboundLink")],1),t._v(", which allows for flexible composition of tests.")])])])])])]),t._v(" "),e("p",[t._v("Terms used:")]),t._v(" "),e("ul",[e("li",[t._v('"model": This is the selected Gazebo model, e.g. '),e("code",[t._v("iris")]),t._v(".")]),t._v(" "),e("li",[t._v('"test case": This is a '),e("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2 test case"),e("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);s.default=a.exports}}]);