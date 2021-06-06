(window.webpackJsonp=window.webpackJsonp||[]).push([[636],{2282:function(t,_,s){"use strict";s.r(_);var v=s(19),r=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"움직임-감지-기술로-비행하기-vicon-광추적"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#움직임-감지-기술로-비행하기-vicon-광추적"}},[t._v("#")]),t._v(" 움직임 감지 기술로 비행하기 (VICON, 광추적)")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[v("strong",[t._v("작성중입니다")]),t._v(".")]),t._v(" "),v("p",[t._v("이 주제에서는 "),v("RouterLink",{attrs:{to:"/ko/ros/external_position_estimation.html"}},[t._v("외부 위치 추정(ROS)")]),t._v("과 약간 겹칩니다.")],1)]),t._v(" "),v("p",[t._v("VICON이나 광추적 같은 실내 움직임 감지 체계는 기체 상태 추정시 위치와 자세 정보를 제공하거나, 분석시 실제 값으로 활용할 수 있습니다. 움직임 감지 데이터는 지역 원점을 기준으로 PX4의 지역 위치 추정치 업데이트에 활용할 수 있습니다. 선택에 따라 움직임 감지 체계의 방위(Yaw)값도 자세 추정기에 통합할 수 있습니다.")]),t._v(" "),v("p",[t._v("움직임 감지 체계 가져온 자세 (위치 및 방향) 데이터는 MAVLink의 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ATT_POS_MOCAP",target:"_blank",rel:"noopener noreferrer"}},[t._v("ATT_POS_MOCAP"),v("OutboundLink")],1),t._v(" 메시지에 실어 자동 비행 장치로 전달합니다. 데이터 표현 방식용 좌표 프레임은 아래 절을 참고하십시오. "),v("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("mavros")]),t._v(" ROS-Mavlink 인터페이스에는 이 메시지를 보낼 기본 플러그인이 있습니다. 순수한 C/C++ 코드와 MAVLink 라이브러리를 직접 사용하여 보낼 수도 있습니다.")],1),t._v(" "),v("h2",{attrs:{id:"처리-구조"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#처리-구조"}},[t._v("#")]),t._v(" 처리 구조")]),t._v(" "),v("p",[t._v("온전한 통신 수행을 위해 "),v("strong",[t._v("내장 컴퓨터")]),t._v("(예: 라즈베리 파이, 오드로이드 등)로의 동영상 촬영 데이터 전송 방식을 "),v("strong",[t._v("강력 추천")]),t._v("합니다. 내장 컴퓨터는 안정적인 고대역폭 WiFi 연결로 움직임 감지 컴퓨터에 연결할 수 있습니다.")]),t._v(" "),v("p",[t._v("3DR/SiK 라디오 와 같은 대부분의 표준 텔레메트리 연결은 고대역폭 움직임 감지 활용에 ** 적합하지  않습니다 **.")]),t._v(" "),v("h2",{attrs:{id:"좌표-프레임"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#좌표-프레임"}},[t._v("#")]),t._v(" 좌표 프레임")]),t._v(" "),v("p",[t._v("이 절에서는 적당한 참조 프레임 체계의 설정 방법을 알려드리겠습니다. 다양한 표현법이 있지만 ENU와 NED 방식을 활용하겠습니다.")]),t._v(" "),v("ul",[v("li",[t._v("ENU는 지상 고정 좌표로서,  "),v("strong",[t._v("X")]),t._v("축은 동쪽, "),v("strong",[t._v("Y")]),t._v(" 축은 북쪽, "),v("strong",[t._v("Z")]),t._v("축은 상공을 향합니다. 로봇/기체 틀 기준으로는 "),v("strong",[t._v("X")]),t._v("축은 전면, "),v("strong",[t._v("Z")]),t._v("축은 상단, "),v("strong",[t._v("Y")]),t._v("축은 좌측을 향합니다.")]),t._v(" "),v("li",[t._v("NED에서 "),v("strong",[t._v("X")]),t._v("축은 북쪽, "),v("strong",[t._v("Y")]),t._v("축은 동쪽, "),v("strong",[t._v("Z")]),t._v("축은 지면을 향합니다. 로봇/기체 틀 기준으로는 "),v("strong",[t._v("X")]),t._v("축은 북쪽, "),v("strong",[t._v("Y")]),t._v("축은 동쪽 "),v("strong",[t._v("Z")]),t._v("축은 지면을 향합니다.")])]),t._v(" "),v("p",[t._v("아래 그림에서 프레임의 방향 상태를 보여드립니다. NED는 좌측, ENU는 우측에 있습니다: "),v("img",{attrs:{src:s(388),alt:"참조 프레임"}})]),t._v(" "),v("p",[t._v("그러나 외부 방향 추정시, 자북은 무시하고 가상 세계 "),v("em",[t._v("X")]),t._v(" 좌표 축을 따라 벡터 기준을 삼습니다(움직임 촬영 기법으로 보정할 때 언제든 자유롭게 둘 수 있습니다), 방위각면이 로컬 "),v("em",[t._v("x")]),t._v(" 좌표를 두는 면입니다.")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("움직임을 감지하는 프로그램에서 강체를 만들 때, 세계 "),v("strong",[t._v("X")]),t._v(" 좌표 축에 로봇을 우선 맞춰야 함을 기억하십시오. 그렇지 않으면 방위 회전각 추정시 초기 오프셋으로 처리합니다.")])]),t._v(" "),v("h2",{attrs:{id:"추정자-선택"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#추정자-선택"}},[t._v("#")]),t._v(" 추정자 선택")]),t._v(" "),v("h3",{attrs:{id:"lpe와-고도-추정자-q"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lpe와-고도-추정자-q"}},[t._v("#")]),t._v(" LPE와 고도 추정자 Q")]),t._v(" "),v("h3",{attrs:{id:"ekf2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ekf2"}},[t._v("#")]),t._v(" EKF2")]),t._v(" "),v("p",[t._v("움직임 촬영 기법에 있어 mocap 시스템에선 "),v("code",[t._v("mocap_pose_estimate")]),t._v("을 시각 정보 처리에는 "),v("code",[t._v("vision_pose_estimate")]),t._v("를 ROS 토픽 메시지로 다룹니다. 더 자세한 정보는 "),v("a",{attrs:{href:"http://wiki.ros.org/mavros_extras",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros_extras"),v("OutboundLink")],1),t._v("를 확인하십시오.")]),t._v(" "),v("h2",{attrs:{id:"시험"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#시험"}},[t._v("#")]),t._v(" 시험")]),t._v(" "),v("h2",{attrs:{id:"문제-해결"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")])])}),[],!1,null,null,null);_.default=r.exports},388:function(t,_,s){t.exports=s.p+"assets/img/ref_frames.b0d97b5d.png"}}]);