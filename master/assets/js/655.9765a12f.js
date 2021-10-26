(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{1326:function(a,s,t){a.exports=t.p+"assets/img/octomap.b6c3e521.png"},2640:function(a,s,t){"use strict";t.r(s);var r=t(19),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"ros-gazebo-octomap-3d-모델"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ros-gazebo-octomap-3d-모델"}},[a._v("#")]),a._v(" ROS Gazebo OctoMap 3D 모델")]),a._v(" "),r("p",[r("a",{attrs:{href:"http://octomap.github.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("OctoMap 라이브러리"),r("OutboundLink")],1),a._v("는 센서 데이터에서 체적 3D 환경 모델을 생성하는 오픈 소스 라이브러리입니다. 이 모델 데이터를 드론 탐색 및 장애물 회피에 사용할 수 있습니다.")]),a._v(" "),r("p",[a._v("Gazebo "),r("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator/wiki/RotorS-Simulator",target:"_blank",rel:"noopener noreferrer"}},[a._v("Rotors Simulator"),r("OutboundLink")],1),a._v("와 ROS에서 "),r("em",[a._v("OctoMap")]),a._v(" 사용 방법을 설명합니다.")]),a._v(" "),r("h2",{attrs:{id:"설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[a._v("#")]),a._v(" 설치")]),a._v(" "),r("p",[a._v("설치에는 ROS, Gazebo 및 Rotors Simulator 플러그인이 필요합니다. 설치하려면 "),r("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator",target:"_blank",rel:"noopener noreferrer"}},[a._v("Rotors Simulator 지침"),r("OutboundLink")],1),a._v("을 참고하십시오.")]),a._v(" "),r("p",[a._v("다음으로, "),r("em",[a._v("OctoMap")]),a._v(" 라이브러리를 설치합니다.")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ros-indigo-octomap ros-indigo-octomap-mapping\nrosdep "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" octomap_mapping\nrosmake octomap_mapping\n")])])]),r("p",[a._v("~/catkin_ws/src/rotors_simulator/rotors_gazebo/CMakeLists.txt 파일 마지막에 다음 줄들을 추가합니다.")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[a._v("find_package"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("octomap REQUIRED"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ninclude_directories"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${OCTOMAP_INCLUDE_DIRS}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nlink_libraries"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${OCTOMAP_LIBRARIES}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),r("p",[a._v("~/catkin_ws/src/rotors_simulator/rotors_gazebo/package.xml 파일에 다음 줄을 추가합니다.")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("build_depend"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("octomap"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/build_depend"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("run_depend"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("octomap"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/run_depend"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),r("p",[a._v("다음 두 줄을 실행합니다.")]),a._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),r("p",[a._v("첫 번째 줄은 기본 셸 편집기를 "),r("em",[a._v("gedit")]),a._v("으로 변경합니다. 이것은 "),r("em",[a._v("vim")]),a._v("(기본 편집기)에 대한 경험이 없는 사용자에게 권장되지만, 그렇지 않으면 생략할 수 있습니다.")])]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("EDITOR")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'gedit'")]),a._v("\nrosed octomap_server octomap_tracking_server.launch\n")])])]),r("p",[a._v("그리고 다음 두 줄의 내용을 변경합니다.")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"frame_id"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("value")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"map"')]),a._v(" /"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("--remap "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("from")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cloud_in"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("to")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/rgbdslam/batch_clouds"')]),a._v(" /--"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),r("p",[a._v("을 다음과 같이 변경합니다.")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"frame_id"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("value")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"world"')]),a._v(" /"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remap "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("from")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cloud_in"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("to")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/firefly/vi_sensor/camera_depth/depth/points"')]),a._v(" /"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),r("h2",{attrs:{id:"시뮬레이션-실행"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시뮬레이션-실행"}},[a._v("#")]),a._v(" 시뮬레이션 실행")]),a._v(" "),r("p",[r("em",[a._v("별도의")]),a._v(" 터미널 창에서 다음 세 줄을 실행합니다. "),r("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[a._v("Gazebo")]),a._v(", "),r("em",[a._v("Rviz")]),a._v(" 및 옥토맵 서버가 실행됩니다.")],1),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[a._v("roslaunch rotors_gazebo mav_hovering_example_with_vi_sensor.launch  mav_name:"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("firefly\nrviz\nroslaunch octomap_server octomap_tracking_server.launch\n")])])]),r("p",[r("em",[a._v("Rviz")]),a._v("에서 창 왼쪽 상단의 '고정 프레임' 필드를 '지도'에서 '세계'로 변경합니다. 이제 왼쪽 하단의 추가 버튼을 클릭하고, MarkerArray를 선택합니다. 그런 다음 MarkerArray를 두 번 클릭하고 'Marker Topic'을 '/free_cells_vis_array'에서 '/posed_cells_vis_array'로 변경합니다.")]),a._v(" "),r("p",[a._v("이제 바닥의 일부가 표시되어야 합니다.")]),a._v(" "),r("p",[r("em",[a._v("Gazebo")]),a._v(" 창에서 빨간색 로터 앞에 큐브를 삽입하면, "),r("em",[a._v("Rviz")]),a._v("에서 조회할 수 있습니다.")]),a._v(" "),r("p",[r("img",{attrs:{src:t(1326),alt:"Gazebo OctoMap 예제"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);