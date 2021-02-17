(window.webpackJsonp=window.webpackJsonp||[]).push([[1057],{2227:function(s,t,a){"use strict";a.r(t);var n=a(18),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"통합-테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#통합-테스트"}},[s._v("#")]),s._v(" 통합 테스트")]),s._v(" "),a("p",[s._v("종단간 통합 시험을 다룹니다. 시험은 자동으로 실행합니다("),a("RouterLink",{attrs:{to:"/ko/test_and_ci/jenkins_ci.html"}},[s._v("Jenkins CI")]),s._v(")")],1),s._v(" "),a("h2",{attrs:{id:"ros-mavros-테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-mavros-테스트"}},[s._v("#")]),s._v(" ROS / MAVROS 테스트")]),s._v(" "),a("p",[s._v("준비 요건:")]),s._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[s._v("jMAVSim 모의 시험 환경")])],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[s._v("가제보 모의 시험 환경")])],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[s._v("ROS와 MAVROS")])],1)]),s._v(" "),a("h3",{attrs:{id:"실행-시험"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실행-시험"}},[s._v("#")]),s._v(" 실행 시험")]),s._v(" "),a("p",[s._v("MAVROS 테스트 기반에서 완전한 시험을 실행하려면:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" integrationtests/setup_gazebo_ros.bash "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\nrostest px4 mavros_posix_tests_iris.launch\n")])])]),a("p",[s._v("test_target is one of the Makefile targets. 사용 가능한 항목은 다음과 같습니다. "),a("em",[s._v("tests_mission")]),s._v(", "),a("em",[s._v("tests_mission_coverage")]),s._v(", "),a("em",[s._v("tests_offboard")]),s._v(" 및 "),a("em",[s._v("tests_avoidance")]),s._v(".")]),s._v(" "),a("p",[a("code",[s._v("test /")]),s._v(" 아래에있는 테스트 스크립트를 실행하여 테스트를 직접 실행할 수도 있습니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("소스 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("catkin_ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /devel/setup.bash\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\npx4_sitl_default sitl_gazebo 만들기\n./test/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("test_bash_script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("test_launch_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("예:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./test/rostest_px4_run.sh mavros_posix_tests_offboard_posctl.test\n")])])]),a("p",[s._v("또는 GUI로 무슨 일이 일어나고 있는지 확인하십시오.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./test/rostest_px4_run.sh mavros_posix_tests_offboard_posctl.test gui:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true headless:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n")])])]),a("p",[s._v(".test 파일은 "),a("code",[s._v("integrationtests/python_src/px4_it/mavros/")]),s._v("에 정의된 해당 Python 테스트를 시작합니다.")]),s._v(" "),a("h3",{attrs:{id:"새-mavros-시험-프로그램-작성-파이썬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#새-mavros-시험-프로그램-작성-파이썬"}},[s._v("#")]),s._v(" 새 MAVROS 시험 프로그램 작성(파이썬)")]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),a("p",[s._v("현재 초기 단계에서 테스트 (도우미 클래스/메서드 등)에 대하여 좀 더 편리한 지원이 제공될 예정입니다.")])]),s._v(" "),a("h4",{attrs:{id:"_1-새-시험-스크립트-작성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-새-시험-스크립트-작성"}},[s._v("#")]),s._v(" 1.) 새 시험 스크립트 작성")]),s._v(" "),a("p",[s._v("시험 스크립트는 "),a("code",[s._v("integrationtests/python_src/px4_it/mavros/")]),s._v("에 있습니다. 다른 예제는 기존 스크립트를 살펴보십시오. "),a("a",{attrs:{href:"http://wiki.ros.org/unittest",target:"_blank",rel:"noopener noreferrer"}},[s._v("unittest"),a("OutboundLink")],1),s._v(" 활용법은 공식 ROS 문서를 참고하십시오.")]),s._v(" "),a("p",[s._v("빈 시험 양식은 다음과 같습니다:")]),s._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env python")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [... LICENSE ...]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @author Example Author <author@example.com>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nPKG "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'px4'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" unittest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" rospy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" rosbag\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sensor_msgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" NavSatFix\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MavrosNewTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unittest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TestCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    Test description\n    """')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test_node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wait_for_service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mavros/cmd/arming'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Subscriber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mavros/global_position/global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" NavSatFix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("global_position_callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rospy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10hz")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("has_global_pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tearDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# General callback functions used in tests")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("global_position_callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("has_global_pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Test method description"""')]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FIXME: hack to wait for simulation to be ready")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("has_global_pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TODO: execute test")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" rostest\n    rostest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rosrun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PKG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mavros_new_test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MavrosNewTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h4",{attrs:{id:"_2-새-시험만-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-새-시험만-실행"}},[s._v("#")]),s._v(" 2.) 새 시험만 실행")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Start simulation")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" Tools/setup_gazebo.bash\nroslaunch launch/mavros_posix_sitl.launch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run test (in a new shell):")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" Tools/setup_gazebo.bash\nrosrun px4 mavros_new_test.py\n")])])]),a("h4",{attrs:{id:"_3-파일을-실행할-새-시험-노드-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-파일을-실행할-새-시험-노드-추가"}},[s._v("#")]),s._v(" 3.) 파일을 실행할 새 시험 노드 추가")]),s._v(" "),a("p",[a("code",[s._v("test/")]),s._v("에서 새 "),a("code",[s._v(".test")]),s._v(" ROS 시작 파일을 만듭니다. 기본 스크립트 "),a("em",[s._v("rostest_px4_run.sh")]),s._v(" 또는 *rostest_avoidance_run.sh * 중 하나를 사용하여 테스트 파일을 호출합니다.")]),s._v(" "),a("h4",{attrs:{id:"_4-선택-사항-makefile에-새-대상-만들기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-선택-사항-makefile에-새-대상-만들기"}},[s._v("#")]),s._v(" 4.) (선택 사항) Makefile에 새 대상 만들기")]),s._v(" "),a("ol",[a("li",[s._v("Makefile을 여십시오")]),s._v(" "),a("li",[a("em",[s._v("테스트")]),s._v(" 섹션 검색")]),s._v(" "),a("li",[s._v("새 대상 이름을 추가하고 테스트를 호출합니다.")])]),s._v(" "),a("p",[s._v("예:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("tests_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("new_test_target_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(": rostest\n    @"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("SRC_DIR"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("/test/rostest_px4_run.sh mavros_posix_tests_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("new_test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".test\n")])])]),a("p",[s._v("위에서 설명한대로 테스트를 실행합니다.")])])}),[],!1,null,null,null);t.default=e.exports}}]);