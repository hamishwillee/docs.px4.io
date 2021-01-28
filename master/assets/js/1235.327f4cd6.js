(window.webpackJsonp=window.webpackJsonp||[]).push([[1235],{2634:function(s,t,a){"use strict";a.r(t);var e=a(18),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"集成测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成测试"}},[s._v("#")]),s._v(" 集成测试")]),s._v(" "),a("p",[s._v("这是关于端到端集成测试。 测试自动执行（"),a("RouterLink",{attrs:{to:"/zh/test_and_ci/jenkins_ci.html"}},[s._v("Jenkins CI")]),s._v("）")],1),s._v(" "),a("h2",{attrs:{id:"ros-mavros-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-mavros-测试"}},[s._v("#")]),s._v(" ROS / MAVROS 测试")]),s._v(" "),a("p",[s._v("系统必备组件:")]),s._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[s._v("jMAVSim 仿真模拟")])],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[s._v("Gazebo 仿真模拟")])],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/ros_interface.html"}},[s._v("ROS 和 MAVROS")])],1)]),s._v(" "),a("h3",{attrs:{id:"执行测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行测试"}},[s._v("#")]),s._v(" 执行测试")]),s._v(" "),a("p",[s._v("要运行完整的 MAVROS 测试套件：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Firmware_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" integrationtests/setup_gazebo_ros.bash "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\nrostest px4 mavros_posix_tests_iris.launch\n")])])]),a("p",[s._v("test_target is one of the Makefile targets. The available ones are: "),a("em",[s._v("tests_mission")]),s._v(", "),a("em",[s._v("tests_mission_coverage")]),s._v(", "),a("em",[s._v("tests_offboard")]),s._v(" and "),a("em",[s._v("tests_avoidance")]),s._v(".")]),s._v(" "),a("p",[s._v("Test can also be executed directly by running the test scripts, located under "),a("code",[s._v("test/")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("rostest px4 mavros_posix_tests_iris.launch gui:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true headless:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n")])])]),a("p",[s._v("Example:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./test/rostest_px4_run.sh mavros_posix_tests_offboard_posctl.test\n")])])]),a("p",[s._v("在 "),a("code",[s._v("launch/mavros_posix_tests_irisl.launch")]),s._v(" 中添加测试组中的新条目：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始仿真")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Firmware_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" integrationtests/setup_gazebo_ros.bash "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\nroslaunch px4 mavros_posix_sitl.launch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行测试（在新的 shell 中）：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Firmware_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" integrationtests/setup_gazebo_ros.bash "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\nrosrun px4 mavros_new_test.py\n")])])]),a("p",[s._v("如上所述运行完整的测试套件。")]),s._v(" "),a("h3",{attrs:{id:"写一个新的-mavros-测试-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写一个新的-mavros-测试-python"}},[s._v("#")]),s._v(" 写一个新的 MAVROS 测试（Python）")]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("注解")]),s._v(" "),a("p",[s._v("Currently in early stages, more streamlined support for testing (helper classes/methods etc.) to come.")])]),s._v(" "),a("h4",{attrs:{id:"_1-1-创建一个新的测试脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-创建一个新的测试脚本"}},[s._v("#")]),s._v(" 1.) 1.）创建一个新的测试脚本")]),s._v(" "),a("p",[s._v("Test scripts are located in "),a("code",[s._v("integrationtests/python_src/px4_it/mavros/")]),s._v(". See other existing scripts for examples. Also please consult the official ROS documentation on how to use "),a("a",{attrs:{href:"http://wiki.ros.org/unittest",target:"_blank",rel:"noopener noreferrer"}},[s._v("unittest"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("p",[s._v("Empty test skeleton:")]),s._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env python")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# [... <group ns="$(arg ns)">')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("test test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mavros_new_test"')]),s._v(" pkg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"px4"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mavros_new_test.py"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @author Example Author <author@example.com>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nPKG "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'px4'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" unittest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" rospy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" rosbag\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sensor_msgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" NavSatFix\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MavrosNewTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unittest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TestCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    Test description\n    """')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test_node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wait_for_service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mavros/cmd/arming'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Subscriber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mavros/global_position/global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" NavSatFix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("global_position_callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10hz")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("has_global_pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tearDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# General callback functions used in tests")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("global_position_callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("has_global_pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Test method description"""')]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FIXME: hack to wait for simulation to be ready")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("has_global_pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TODO: execute test")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" rostest\n    rostest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rosrun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PKG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mavros_new_test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MavrosNewTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h4",{attrs:{id:"_2-2-仅运行新测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-仅运行新测试"}},[s._v("#")]),s._v(" 2.) 2.）仅运行新测试")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Start simulation")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" Tools/setup_gazebo.bash\nroslaunch launch/mavros_posix_sitl.launch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run test (in a new shell):")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" Tools/setup_gazebo.bash\nrosrun px4 mavros_new_test.py\n")])])]),a("h4",{attrs:{id:"_3-3-添加新测试节点以启动文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-添加新测试节点以启动文件"}},[s._v("#")]),s._v(" 3.) 3.）添加新测试节点以启动文件")]),s._v(" "),a("p",[s._v("In "),a("code",[s._v("test/")]),s._v(" create a new "),a("code",[s._v("<test_name>.test")]),s._v(" ROS launch file. Call the test file using one of the base scripts "),a("em",[s._v("rostest_px4_run.sh")]),s._v(" or "),a("em",[s._v("rostest_avoidance_run.sh")])]),s._v(" "),a("h4",{attrs:{id:"_4-optional-create-a-new-target-in-the-makefile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-optional-create-a-new-target-in-the-makefile"}},[s._v("#")]),s._v(" 4.) (Optional) Create a new target in the Makefile")]),s._v(" "),a("ol",[a("li",[s._v("Open the Makefile")]),s._v(" "),a("li",[s._v("Search the "),a("em",[s._v("Testing")]),s._v(" section")]),s._v(" "),a("li",[s._v("Add a new target name and call the test")])]),s._v(" "),a("p",[s._v("Example:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("tests_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("new_test_target_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(": rostest\n    @"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("SRC_DIR"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("/test/rostest_px4_run.sh mavros_posix_tests_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("new_test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".test\n")])])]),a("p",[s._v("Run the tests as described above.")])])}),[],!1,null,null,null);t.default=n.exports}}]);