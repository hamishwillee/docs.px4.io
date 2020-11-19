(window.webpackJsonp=window.webpackJsonp||[]).push([[1225],{2612:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"集成测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成测试"}},[t._v("#")]),t._v(" 集成测试")]),t._v(" "),a("p",[t._v("这是关于端到端集成测试。 测试自动执行（"),a("RouterLink",{attrs:{to:"/zh/test_and_ci/jenkins_ci.html"}},[t._v("Jenkins CI")]),t._v("）")],1),t._v(" "),a("h2",{attrs:{id:"ros-mavros-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-mavros-测试"}},[t._v("#")]),t._v(" ROS / MAVROS 测试")]),t._v(" "),a("p",[t._v("系统必备组件:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim 仿真模拟")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[t._v("Gazebo 仿真模拟")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/ros_interface.html"}},[t._v("ROS 和 MAVROS")])],1)]),t._v(" "),a("h3",{attrs:{id:"执行测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行测试"}},[t._v("#")]),t._v(" 执行测试")]),t._v(" "),a("p",[t._v("要运行完整的 MAVROS 测试套件：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Firmware_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" integrationtests/setup_gazebo_ros.bash "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\nrostest px4 mavros_posix_tests_iris.launch\n")])])]),a("p",[t._v("或者使用 GUI 来查看发生的情况：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("rostest px4 mavros_posix_tests_iris.launch gui:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true headless:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])])]),a("h3",{attrs:{id:"写一个新的-mavros-测试-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写一个新的-mavros-测试-python"}},[t._v("#")]),t._v(" 写一个新的 MAVROS 测试（Python）")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" 目前处于早期阶段，更加精简的测试支持（辅助类/方法等）即将到来。")])]),t._v(" "),a("h4",{attrs:{id:"_1-1-创建一个新的测试脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-创建一个新的测试脚本"}},[t._v("#")]),t._v(" 1.) 1.）创建一个新的测试脚本")]),t._v(" "),a("p",[t._v("测试脚本位于 "),a("code",[t._v("integrationtests/python_src/px4_it/mavros/")]),t._v(" 中。 See other existing scripts for examples. 有关示例，请参阅其他现有脚本 另请参阅官方 ROS 文档，了解如何使用 "),a("a",{attrs:{href:"http://wiki.ros.org/unittest",target:"_blank",rel:"noopener noreferrer"}},[t._v("unittest"),a("OutboundLink")],1),t._v(" 。")]),t._v(" "),a("p",[t._v("空测试骨架：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [... LICENSE ...]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [... LICENSE ...]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @author Example Author <author@example.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\nPKG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px4'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" unittest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rospy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rosbag\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sensor_msgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" NavSatFix\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MavrosNewTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unittest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TestCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    Test description\n    """')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init_node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test_node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wait_for_service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mavros/cmd/arming'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Subscriber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mavros/global_position/global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NavSatFix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global_position_callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10hz")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_global_pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tearDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# General callback functions used in tests")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("global_position_callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_global_pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Test method description"""')]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# FIXME: hack to wait for simulation to be ready")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_global_pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TODO: execute test")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rostest\n    rostest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rosrun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PKG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mavros_new_test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MavrosNewTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-2-仅运行新测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-仅运行新测试"}},[t._v("#")]),t._v(" 2.) 2.）仅运行新测试")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始仿真")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Firmware_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" integrationtests/setup_gazebo_ros.bash "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\nroslaunch px4 mavros_posix_sitl.launch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行测试（在新的 shell 中）：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Firmware_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" integrationtests/setup_gazebo_ros.bash "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\nrosrun px4 mavros_new_test.py\n")])])]),a("h4",{attrs:{id:"_3-3-添加新测试节点以启动文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-添加新测试节点以启动文件"}},[t._v("#")]),t._v(" 3.) 3.）添加新测试节点以启动文件")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("launch/mavros_posix_tests_irisl.launch")]),t._v(" 中添加测试组中的新条目：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ns")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$(arg ns)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        [...]\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ns")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$(arg ns)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        [...]\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test-name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mavros_new_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pkg")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("px4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mavros_new_test.py"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("如上所述运行完整的测试套件。")])])}),[],!1,null,null,null);s.default=e.exports}}]);