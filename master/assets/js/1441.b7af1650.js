(window.webpackJsonp=window.webpackJsonp||[]).push([[1441],{2632:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ros-통합-테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-통합-테스트"}},[t._v("#")]),t._v(" ROS 통합 테스트")]),t._v(" "),a("p",[t._v("PX4의 ROS 기반 통합 테스트 방법을 설명합니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("신규 테스트는 "),a("RouterLink",{attrs:{to:"/ko/test_and_ci/integration_testing_mavsdk.html"}},[t._v("MAVSDK 통합 테스트")]),t._v("를 선호합니다. ROS가 "),a("em",[t._v("사용")]),t._v(" 사례(예: 객체 회피)에는 ROS 기반 통합 테스트 프레임워크를 사용합니다.")],1),t._v(" "),a("p",[t._v("모든 PX4 통합 테스트는 "),a("RouterLink",{attrs:{to:"/ko/test_and_ci/continous_integration.html"}},[t._v("지속적 통합")]),t._v(" 시스템에 의해 자동으로 실행됩니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"전제-조건"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[t._v("#")]),t._v(" 전제 조건")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim 시뮬레이터")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[t._v("Gazebo 시뮬레이터")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[t._v("ROS와 MAVROS")])],1)]),t._v(" "),a("h2",{attrs:{id:"테스트-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#테스트-실행"}},[t._v("#")]),t._v(" 테스트 실행")]),t._v(" "),a("p",[t._v("MAVROS 테스트를 실행합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("catkin_ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/devel/setup.bash\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default sitl_gazebo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("test_target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("code",[t._v("test_target")]),t._v(" is a makefile targets from the set: "),a("em",[t._v("tests_mission")]),t._v(", "),a("em",[t._v("tests_mission_coverage")]),t._v(", "),a("em",[t._v("tests_offboard")]),t._v(" and "),a("em",[t._v("tests_avoidance")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("test/")]),t._v(" 아래에 있는 테스트 스크립트를 직접 실행할 수도 있습니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("catkin_ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/devel/setup.bash\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default sitl_gazebo\n./test/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("test_bash_script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("test_launch_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("예:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./test/rostest_px4_run.sh mavros_posix_tests_offboard_posctl.test\n")])])]),a("p",[t._v('테스트를 GUI로 실행하여 진행 상황을 쉽게 확인할 수도 있습니다(기본적으로 테스트는 "헤드리스"로 실행됨).')]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./test/rostest_px4_run.sh mavros_posix_tests_offboard_posctl.test gui:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true headless:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])])]),a("p",[a("strong",[t._v(".test")]),t._v(" 파일은 "),a("code",[t._v("integrationtests/python_src/px4_it/mavros/")]),t._v("에 정의된 해당 Python 테스트를 실행합니다.")]),t._v(" "),a("h2",{attrs:{id:"신규-mavros-테스트-작성-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#신규-mavros-테스트-작성-python"}},[t._v("#")]),t._v(" 신규 MAVROS 테스트 작성(Python)")]),t._v(" "),a("p",[t._v("ROS(1)/MAVROS를 사용하여 새로운 파이썬 테스트를 PX4 테스트 스위트에 추가하는 방법을 설명합니다.")]),t._v(" "),a("p",[t._v("기존 테스트를 예제("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/integrationtests/python_src/px4_it/mavros",target:"_blank",rel:"noopener noreferrer"}},[t._v("integrationtests/python_src/px4_it/mavros/"),a("OutboundLink")],1),t._v(")를 검토하십시오. 공식 ROS 문서에는 "),a("a",{attrs:{href:"http://wiki.ros.org/unittest",target:"_blank",rel:"noopener noreferrer"}},[t._v("unittest"),a("OutboundLink")],1),t._v("(이 테스트 모음의 기반이 됨)를 사용 방법을 설명합니다.")]),t._v(" "),a("p",[t._v("새 테스트를 작성하려면:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("아래의 빈 테스트 스켈레톤을 복사하여 새 테스트 스크립트를 작성합니다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [... LICENSE ...]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @author Example Author <author@example.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\nPKG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px4'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" unittest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rospy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rosbag\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sensor_msgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" NavSatFix\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MavrosNewTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unittest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TestCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    Test description\n    """')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init_node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test_node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wait_for_service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mavros/cmd/arming'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Subscriber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mavros/global_position/global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NavSatFix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global_position_callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10hz")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_global_pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tearDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# General callback functions used in tests")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("global_position_callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_global_pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Test method description"""')]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# FIXME: hack to wait for simulation to be ready")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_global_pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TODO: execute test")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rostest\n    rostest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rosrun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PKG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mavros_new_test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MavrosNewTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("새 테스트만 실행합니다.")]),t._v(" "),a("ul",[a("li",[t._v("시뮬레이터를 시작합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" Tools/setup_gazebo.bash\nroslaunch launch/mavros_posix_sitl.launch\n")])])])]),t._v(" "),a("li",[t._v("테스트를 실행합니다(새로운 쉘에서)."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd <PX4-Autopilot_clone>\nsource Tools/setup_gazebo.bash\nrosrun px4 mavros_new_test.py\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("시작 파일에 새 테스트 노드 추가")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("test/")]),t._v("에서 새 "),a("code",[t._v("<test_name>.test")]),t._v(" ROS 실행 파일을 만듭니다.")]),t._v(" "),a("li",[t._v("기본 스크립트 "),a("em",[t._v("rostest_px4_run.sh")]),t._v(" 또는 "),a("em",[t._v("rostest_avoidance_run.sh")]),t._v(" 중 하나를 사용하여 테스트 파일을 호출합니다.")])])]),t._v(" "),a("li",[a("p",[t._v("(선택 사항) Makefile에서 새 대상 만들기")]),t._v(" "),a("ul",[a("li",[t._v("Makefile을 오픈합니다.")]),t._v(" "),a("li",[a("em",[t._v("Testing")]),t._v(" 섹션을 검색합니다.")]),t._v(" "),a("li",[t._v("새 대상 이름을 추가하고 테스트를 호출합니다.")])]),t._v(" "),a("p",[t._v("예:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("tests_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new_test_target_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(": rostest\n    @"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SRC_DIR"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("/test/rostest_px4_run.sh mavros_posix_tests_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new_test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".test\n")])])])])]),t._v(" "),a("p",[t._v("위에서 설명한 대로 테스트를 실행합니다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);