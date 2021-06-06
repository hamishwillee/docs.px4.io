(window.webpackJsonp=window.webpackJsonp||[]).push([[1095],{2271:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"통합-테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#통합-테스트"}},[t._v("#")]),t._v(" 통합 테스트")]),t._v(" "),a("p",[t._v("This topic explains how to run (and extend) PX4's ROS-based integration tests.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/test_and_ci/integration_testing_mavsdk.html"}},[t._v("MAVSDK Integration Testing")]),t._v(" is preferred when writing new tests. Use the ROS-based integration test framework for use cases that "),a("em",[t._v("require")]),t._v(" ROS (e.g. object avoidance).")],1),t._v(" "),a("p",[t._v("All PX4 integraton tests are executed automatically by our "),a("RouterLink",{attrs:{to:"/ko/test_and_ci/continous_integration.html"}},[t._v("Continuous Integration")]),t._v(" system.")],1)]),t._v(" "),a("h2",{attrs:{id:"ros-mavros-테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-mavros-테스트"}},[t._v("#")]),t._v(" ROS / MAVROS 테스트")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim 모의 시험 환경")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[t._v("가제보 모의 시험 환경")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[t._v("ROS와 MAVROS")])],1)]),t._v(" "),a("h2",{attrs:{id:"execute-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execute-tests"}},[t._v("#")]),t._v(" Execute Tests")]),t._v(" "),a("p",[t._v("To run the MAVROS tests:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" integrationtests/setup_gazebo_ros.bash "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\nrostest px4 mavros_posix_tests_iris.launch\n")])])]),a("p",[a("code",[t._v("test /")]),t._v(" 아래에있는 테스트 스크립트를 실행하여 테스트를 직접 실행할 수도 있습니다.")]),t._v(" "),a("p",[t._v("예:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("소스 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("catkin_ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /devel/setup.bash\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\npx4_sitl_default sitl_gazebo 만들기\n./test/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("test_bash_script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("test_launch_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("또는 GUI로 무슨 일이 일어나고 있는지 확인하십시오.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./test/rostest_px4_run.sh mavros_posix_tests_offboard_posctl.test\n")])])]),a("p",[t._v(".test 파일은 "),a("code",[t._v("integrationtests/python_src/px4_it/mavros/")]),t._v("에 정의된 해당 Python 테스트를 시작합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./test/rostest_px4_run.sh mavros_posix_tests_offboard_posctl.test gui:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true headless:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])])]),a("p",[t._v("The "),a("strong",[t._v(".test")]),t._v(" files launch the corresponding Python tests defined in "),a("code",[t._v("integrationtests/python_src/px4_it/mavros/")])]),t._v(" "),a("h2",{attrs:{id:"write-a-new-mavros-test-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-a-new-mavros-test-python"}},[t._v("#")]),t._v(" Write a New MAVROS Test (Python)")]),t._v(" "),a("p",[t._v("This section explains how to write a new python test using ROS(1)/MAVROS, test it, and add it to the PX4 test suite.")]),t._v(" "),a("p",[t._v("We recommend you review the existing tests as examples/inspiration ("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/integrationtests/python_src/px4_it/mavros",target:"_blank",rel:"noopener noreferrer"}},[t._v("integrationtests/python_src/px4_it/mavros/"),a("OutboundLink")],1),t._v("). The official ROS documentation also contains information on how to use "),a("a",{attrs:{href:"http://wiki.ros.org/unittest",target:"_blank",rel:"noopener noreferrer"}},[t._v("unittest"),a("OutboundLink")],1),t._v(" (on which this test suite is based).")]),t._v(" "),a("p",[t._v("To write a new test:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Create a new test script by copying the empty test skeleton below:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [... LICENSE ...]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @author Example Author <author@example.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\nPKG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px4'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" unittest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rospy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rosbag\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sensor_msgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" NavSatFix\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MavrosNewTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unittest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TestCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    Test description\n    """')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init_node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test_node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wait_for_service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mavros/cmd/arming'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Subscriber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mavros/global_position/global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NavSatFix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global_position_callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10hz")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_global_pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tearDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# General callback functions used in tests")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("global_position_callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_global_pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Test method description"""')]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# FIXME: hack to wait for simulation to be ready")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_global_pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TODO: execute test")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rostest\n    rostest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rosrun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PKG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mavros_new_test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MavrosNewTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Run the new test only")]),t._v(" "),a("ul",[a("li",[t._v("Start the simulator:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" Tools/setup_gazebo.bash\nroslaunch launch/mavros_posix_sitl.launch\n")])])])]),t._v(" "),a("li",[t._v("Run test (in a new shell):"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd <PX4-Autopilot_clone>\nsource Tools/setup_gazebo.bash\nrosrun px4 mavros_new_test.py\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("Add new test node to a launch file")]),t._v(" "),a("ul",[a("li",[t._v("In "),a("code",[t._v("test/")]),t._v(" create a new "),a("code",[t._v("<test_name>.test")]),t._v(" ROS launch file.")]),t._v(" "),a("li",[t._v("Call the test file using one of the base scripts "),a("em",[t._v("rostest_px4_run.sh")]),t._v(" or "),a("em",[t._v("rostest_avoidance_run.sh")])])])]),t._v(" "),a("li",[a("p",[t._v("(Optional) Create a new target in the Makefile")]),t._v(" "),a("ul",[a("li",[t._v("Open the Makefile")]),t._v(" "),a("li",[t._v("Search the "),a("em",[t._v("Testing")]),t._v(" section")]),t._v(" "),a("li",[t._v("Add a new target name and call the test")])]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("tests_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new_test_target_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(": rostest\n    @"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SRC_DIR"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("/test/rostest_px4_run.sh mavros_posix_tests_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new_test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".test\n")])])])])]),t._v(" "),a("p",[t._v("예:")])])}),[],!1,null,null,null);s.default=n.exports}}]);