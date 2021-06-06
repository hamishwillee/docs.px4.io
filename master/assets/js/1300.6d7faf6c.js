(window.webpackJsonp=window.webpackJsonp||[]).push([[1300],{2713:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"单元测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[t._v("#")]),t._v(" 单元测试")]),t._v(" "),n("p",[t._v("我们鼓励开发人员在开发的每个模块时编写单元测试，包括添加新功能，修复错误和重构。")]),t._v(" "),n("p",[t._v("或者，也可以直接从 bash 运行完整的单元测试：")]),t._v(" "),n("ol",[n("li",[t._v("在 "),n("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests"),n("OutboundLink")],1),t._v(" 中创建名为 "),n("strong",[t._v("test_ [description] .cpp")]),t._v(" 的新 .cpp 文件。")]),t._v(" "),n("li",[t._v("在 "),n("strong",[t._v("test_[description].cpp")]),t._v(" 中包括基本 unittest-class"),n("code",[t._v("&lt;unit_test.h&gt;")]),t._v(" 以及为新功能编写测试所需的所有文件。")]),t._v(" "),n("li",[t._v("软件在环(SITL)单元测试。 这些测试需要运行在完整的SITL环境中， 运行起来更慢，更难调试，所以建议尽可能使用GTest代替。")])]),t._v(" "),n("h2",{attrs:{id:"编写测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写测试"}},[t._v("#")]),t._v(" 编写测试")]),t._v(" "),n("p",[t._v("要查看 px4 shell 中可用测试的完整列表，请执行以下操作：")]),t._v(" "),n("p",[t._v("创建新的单元测试步骤如下：")]),t._v(" "),n("ol",[n("li",[t._v("单元测试分成三个部分：设置、运行、检查结果。 每个单元测试都应该测试一个特定行为或设置案例，如果测试失败，则很明显你的测试代码有错误。 请尽可能遵循这些标准。")]),t._v(" "),n("li",[t._v("在 "),n("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/systemcmds/tests/tests_main.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests_main.c"),n("OutboundLink")],1),t._v(" 中添加描述名称，测试功能和选项：")]),t._v(" "),n("li",[t._v("将新文件到该目录的"),n("code",[t._v("CMakeLists.txt")]),t._v("文件中。 文件看起来像"),n("code",[t._v("px4_add_unit_gtest(SRC MyNewUnitTest.cpp LINKLIBS <library_to_be_tested>)")])]),t._v(" "),n("li",[t._v("添加你想要的测试功能。 这包括了添加所需的头文件、新测试(每个测试都应该有单独的名称)，并加入相关逻辑，运行测试代码并验证其行为是否符合预期。")]),t._v(" "),n("li",[t._v("如果需要添加新的依赖库，只要在如上所说的CMakeLists文件中"),n("code",[t._v("LINKLIBS")]),t._v("后面加入库的名字。")])]),t._v(" "),n("p",[t._v("可以通用 "),n("code",[t._v("make tests")]),t._v("命令来运行所有测试，然后在 "),n("code",[t._v("build/px4_sitl_test/unit-MyNewUnit")]),t._v("目录中找到二进行制文件。 也可以直接通过调试器中运行。")]),t._v(" "),n("h2",{attrs:{id:"写一个gtest功能测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写一个gtest功能测试"}},[t._v("#")]),t._v(" 写一个GTest功能测试")]),t._v(" "),n("p",[t._v("当测试或测试的组件依赖参数、uORB 消息、或更高级的GTest功能的时候，应当使用GTest功能测试。 Additionally, functional tests can contain local usage of STL data structures (although be careful of platform differences between e.g. macOS and Linux).")]),t._v(" "),n("p",[t._v("创建一个新的功能测试步骤如下：")]),t._v(" "),n("ol",[n("li",[t._v("一般来说（与单元测试类似）功能测试应分为三个部分：设置，运行，检查结果。 每个测试都应该包括一个特定行为或是设置案例，如果测试失败，则很明显有错误。 请尽可能遵循这些标准。")]),t._v(" "),n("li",[t._v("注意，"),n("code",[t._v("ut_[name of one of the unit test functions]")]),t._v(" 对应于 "),n("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/include/unit_test.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("unit_test.h "),n("OutboundLink")],1),t._v(" 中定义的单元测试函数之一。")]),t._v(" "),n("li",[t._v("将ParameterTest 重命名为更符合你正在测试的代码功能。")]),t._v(" "),n("li",[t._v("将新文件到该目录的"),n("code",[t._v("CMakeLists.txt")]),t._v("文件中。 文件内容看起来像 "),n("code",[t._v("px4_add_functional_gtest(SRC MyNewFunctionalTest.cpp LINKLIBS <library_to_be_tested>)")])]),t._v(" "),n("li",[t._v("添加你想要的测试功能。 这包括了，添加特定的头文件、新测试（每个测试都应该使用不同的命名），并设置相关逻辑，运行测试代码并验证是否符合预期。")]),t._v(" "),n("li",[t._v("如果需要添加新的依赖库，只要在如上所说的CMakeLists文件中LINKLIBS后面加入库的名字。")])]),t._v(" "),n("p",[t._v("可以通用"),n("code",[t._v("make tests")]),t._v("命令来运行所有测试，然后在 "),n("code",[t._v("build/px4_sitl_test/functional-MyNewFunctional")]),t._v("目录中找到二进行制文件。 也可以直接通过调试器中运行。 It can be run directly in a debugger, however be careful to only run one test per executable invocation using the "),n("a",{attrs:{href:"https://github.com/google/googletest/blob/master/docs/advanced.md#running-a-subset-of-the-tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("--gtest_filter=<regex>"),n("OutboundLink")],1),t._v(" arguments, as some parts of the uORB and parameter libraries don't clean themselves up perfectly and may result in undefined behavior if set up multiple times.")]),t._v(" "),n("h2",{attrs:{id:"写一个软件在环-sitl-单元测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写一个软件在环-sitl-单元测试"}},[t._v("#")]),t._v(" 写一个软件在环（SITL）单元测试")]),t._v(" "),n("p",[t._v("当需要所有的飞行控制组件：驱动、时间或者更多时，应该SITL单元测试。 这些测试运行较慢(每个模块至少1秒+)，同时难以测试，所以仅在必要时使用它们。")]),t._v(" "),n("p",[t._v("创建一个新的SITL单元测试步骤如下：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("在 "),n("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/systemcmds/tests/tests_main.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests_main.h"),n("OutboundLink")],1),t._v(" 中定义新测试：")])]),t._v(" "),n("li",[n("p",[t._v("在 "),n("strong",[t._v("test_[description].cpp")]),t._v(" 中创建一个继承自 "),n("code",[t._v("UnitTest")]),t._v(" 的类 "),n("code",[t._v("[Description]Test")]),t._v("。")])]),t._v(" "),n("li",[n("p",[t._v("在 "),n("strong",[t._v("test_ [description].cpp")]),t._v(" 中，实现各种测试。")])]),t._v(" "),n("li",[n("p",[t._v("在 "),n("strong",[t._v("test_ [description].cpp")]),t._v(" 中实现 "),n("code",[t._v("run_tests（）")]),t._v(" 方法，其中将运行每个测试[1,2，...]。")])]),t._v(" "),n("li",[n("p",[t._v("在 "),n("code",[t._v("[Description]Test")]),t._v(" 类中，声明公共方法 "),n("code",[t._v("virtual bool run_tests（）")]),t._v("。")])]),t._v(" "),n("li",[n("p",[t._v("在 "),n("code",[t._v("[Description]Test")]),t._v(" 类中，声明测试相关特征所需的所有私有方法（"),n("code",[t._v("test1（）")]),t._v("，"),n("code",[t._v("test2（）")]),t._v("，...）。")])]),t._v(" "),n("li",[n("p",[t._v("在 "),n("strong",[t._v("test_ [description].cpp")]),t._v(" 的底部声明测试。")])]),t._v(" "),n("li",[n("p",[t._v("在 "),n("strong",[t._v("test_ [description].cpp")]),t._v(" 中，实现各种测试。")])]),t._v(" "),n("li",[n("p",[t._v("在 "),n("strong",[t._v("test_ [description].cpp")]),t._v(" 的底部声明测试。")]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_declare_test_c")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("下面是一个模板：")]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<unit_test.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[new feature].h"')])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<unit_test.h>")])]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[new feature].h"')])]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Test "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" UnitTest\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run_tests")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run_tests")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_run_test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_run_test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_tests_failed "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ut_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    ut_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ut_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    ut_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_declare_test_c")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run_tests")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_run_test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_run_test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_tests_failed "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ut_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    ut_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ut_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    ut_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of one of the unit test functions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ut_declare_test_c")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("PX4 提供了一个简单的基础 "),n("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/include/unit_test.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unittest-class"),n("OutboundLink")],1),t._v("。")])]),t._v(" "),n("li",[n("p",[t._v("将测试"),n("code",[t._v("test_ [desciption].cpp")]),t._v("添加到 [CMakeLists.txt]（https://github.com/PX4/Firmware/blob/master/src/systemcmds/tests/CMakeLists.txt）。")]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extern")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" test_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("在 "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/systemcmds/tests/tests_main.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests_main.c"),n("OutboundLink")],1),t._v(" 中添加描述名称，测试功能和选项：")]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" tests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[description]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OPTION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("OPTION")]),t._v(" can be "),n("code",[t._v("OPT_NOALLTEST")]),t._v(","),n("code",[t._v("OPT_NOJIGTEST")]),t._v(" or "),n("code",[t._v("0")]),t._v(" and is considered if within px4 shell one of the two commands are called: ```bash pxh> tests all")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("pxh"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" tests all\n")])])]),n("p",[t._v("或")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("pxh"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" tests jig\n")])])]),n("p",[t._v("If a test has option "),n("code",[t._v("OPT_NOALLTEST")]),t._v(", then that test will be excluded when calling "),n("code",[t._v("tests all")]),t._v(". The same is true for "),n("code",[t._v("OPT_NOJITEST")]),t._v(" when command "),n("code",[t._v("test jig")]),t._v(" is called. 选项“0”表示从不排除测试，这是大多数开发人员想要使用的。 The same is true for "),n("code",[t._v("OPT_NOJITEST")]),t._v(" when command "),n("code",[t._v("test jig")]),t._v(" is called. Option "),n("code",[t._v("0")]),t._v(" means that the test is never excluded, which is what most developer want to use.")])]),t._v(" "),n("li",[n("p",[t._v("Add the test "),n("code",[t._v("test_[description].cpp")]),t._v(" to the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/systemcmds/tests/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMakeLists.txt"),n("OutboundLink")],1),t._v(".")])])]),t._v(" "),n("h2",{attrs:{id:"在本地计算机上进行测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在本地计算机上进行测试"}},[t._v("#")]),t._v(" 在本地计算机上进行测试")]),t._v(" "),n("p",[t._v("Run the complete list of GTest Unit Tests, GTest Functional Tests and SITL Unit Tests right from bash:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" tests\n")])])]),n("p",[t._v("单独的 GTest 测试二进制文件处于"),n("code",[t._v("build/px4_sitl_test/")]),t._v(" 目录中，可以直接在大多数IDE的调试器中运行。")]),t._v(" "),n("p",[t._v("使用以下命令对ctest名称使用正则表达式对要运行的测试子集进行筛选：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("pxh"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" tests "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n")])])]),n("p",[t._v("例如：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("make tests TESTFILTER=unit")]),t._v(" only run GTest unit tests")]),t._v(" "),n("li",[n("code",[t._v("make tests TESTFILTER=sitl")]),t._v(" only run simulation tests")]),t._v(" "),n("li",[n("code",[t._v("make tests TESTFILTER=Attitude")]),t._v(" only run the "),n("code",[t._v("AttitudeControl")]),t._v(" test")])])])}),[],!1,null,null,null);s.default=e.exports}}]);