(window.webpackJsonp=window.webpackJsonp||[]).push([[1225],{2604:function(t,s,e){"use strict";e.r(s);var a=e(18),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用-mavsdk-进行集成测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-mavsdk-进行集成测试"}},[t._v("#")]),t._v(" 使用 MAVSDK 进行集成测试")]),t._v(" "),e("p",[t._v("可以使用基于 "),e("a",{attrs:{href:"https://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),e("OutboundLink")],1),t._v(" 的集成测试对 PX4 进行端到端测试。")]),t._v(" "),e("p",[t._v("目前主要针对 SITL 开发测试，并在持续集成（CI）中运行。 但是，它们最终旨在推广到实际测试。")]),t._v(" "),e("h2",{attrs:{id:"安装-mavsdk-c-库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-mavsdk-c-库"}},[t._v("#")]),t._v(" 安装 MAVSDK C++ 库")]),t._v(" "),e("p",[t._v("测试需要将MAVSAK C++库安装到系统目录（如： "),e("code",[t._v("/usr/lib")]),t._v(" or "),e("code",[t._v("/usr/local/lib")]),t._v("）")]),t._v(" "),e("p",[t._v("二进行安装或源码安装：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/getting_started/installation.html#cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > 安装 > C++"),e("OutboundLink")],1),t._v("：以支持的系统上安装预构建库（推荐）")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/contributing/build.html#build_sdk_cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK > 贡献 > 从源码构建"),e("OutboundLink")],1),t._v("：从源码编译构建 C++ 库。")])]),t._v(" "),e("h2",{attrs:{id:"准备-px4-源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备-px4-源码"}},[t._v("#")]),t._v(" 准备 PX4 源码")]),t._v(" "),e("p",[t._v("使用以下命令构建 PX4 源码：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo mavsdk_tests\n")])])]),e("h3",{attrs:{id:"运行所有px4测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行所有px4测试"}},[t._v("#")]),t._v(" 运行所有PX4测试")]),t._v(" "),e("p",[t._v("运行 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/configs/sitl.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitl.json"),e("OutboundLink")],1),t._v(" 中定义的所有SITL测试，执行：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py test/mavsdk_tests/configs/sitl.json --speed-factor "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),e("p",[t._v("要看所有可用的命令行参数，运行：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("test/mavsdk_tests/mavsdk_test_runner.py -h\n\n用法：mavsdk_test_runner。 y "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--log-dir LOG_DIR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--speed-factor SPEED_FACTOR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--trerations ITERATION"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--abort-early"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--gui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--model MODEL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--case CASE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--debugger DEBUGER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--verbose"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                             config_file\n\nposital 参数：\n  config_file JSON 使用的JSON配置文件\n\noptional 参数：\n  -h, --help 显示此帮助信息并退出\n  --log-dir LOG_DIR 日志文件目录\n  --speed-factor SPEED_FACTOR\n                        模拟运行的速度因子\n  --迭代ITERATION\n                        在首次失败的测试中运行所有测试的频率\n  --abort-early 中止\n  --guide 显示模拟的可视化化\n  MODEL 只为一个模型运行测试\n  --case CASE 只运行测试一个案例\n  --debugger DEBUGER 调试器：callgrind, gdb, lldb\n  --verbose 启用更详细的输出\n")])])]),e("h2",{attrs:{id:"关于实现的说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于实现的说明"}},[t._v("#")]),t._v(" 关于实现的说明")]),t._v(" "),e("ul",[e("li",[t._v("The tests are invoked from the test runner script "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/mavsdk_test_runner.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavsdk_test_runner.py"),e("OutboundLink")],1),t._v(", which is written in Python. 该运行程序还启动 "),e("code",[t._v("px4")]),t._v(" 以及用于 SITL 测试的 Gazebo，并收集这些进程的日志。")]),t._v(" "),e("li",[t._v("这个测试运行器是一个 C++ 库 它包含了：\n"),e("ul",[e("li",[t._v("The "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/test_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("main"),e("OutboundLink")],1),t._v(" function to parse the arguments.")]),t._v(" "),e("li",[t._v("An abstraction around MAVSDK called "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/autopilot_tester.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot_tester"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("The actual tests using the abstraction around MAVSDK as e.g. "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/test_multicopter_mission.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("test_multicopter_mission.cpp"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("测试使用 "),e("a",{attrs:{href:"https://github.com/catchorg/Catch2",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2"),e("OutboundLink")],1),t._v(" 单元测试框架。 使用这个框架的原因如下：\n"),e("ul",[e("li",[t._v("终止测试所需的断言（"),e("code",[t._v("REQUIRE")]),t._v("）可以位于函数内部（而不仅仅是顶层，如 "),e("a",{attrs:{href:"https://github.com/google/googletest/blob/master/googletest/docs/advanced.md#assertion-placement",target:"_blank",rel:"noopener noreferrer"}},[t._v("gtest 测试所示"),e("OutboundLink")],1),t._v("）。")]),t._v(" "),e("li",[t._v("依赖关系管理比较容易，因为* catch2 *可以只作为头文件库包含在内。")]),t._v(" "),e("li",[e("ul",[e("li",[t._v("Catch2 *支持"),e("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md#tags",target:"_blank",rel:"noopener noreferrer"}},[t._v(" tags "),e("OutboundLink")],1),t._v("，从而可以灵活地组成测试。")])])])])])])])]),t._v(" "),e("p",[t._v("使用的术语：")]),t._v(" "),e("ul",[e("li",[t._v('"model"：这是选定的Gazebo模型，例如 '),e("code",[t._v("iris")]),t._v("。")]),t._v(" "),e("li",[t._v('"test case": 这是 '),e("a",{attrs:{href:"https://github.com/catchorg/Catch2/blob/master/docs/test-cases-and-sections.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("catch2 测试用例"),e("OutboundLink")],1),t._v("。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);