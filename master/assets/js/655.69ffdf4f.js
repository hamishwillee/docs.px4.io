(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{2660:function(t,_,s){"use strict";s.r(_);var r=s(19),v=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"모션-캡처-비행-vicon-optitrack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#모션-캡처-비행-vicon-optitrack"}},[t._v("#")]),t._v(" 모션 캡처 비행(VICON, Optitrack)")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[r("strong",[t._v("작성중입니다")]),t._v(".")]),t._v(" "),r("p",[t._v("이 주제는 "),r("RouterLink",{attrs:{to:"/ko/ros/external_position_estimation.html"}},[t._v("외부 위치 추정(ROS)")]),t._v("과 다소 중복됩니다.")],1)]),t._v(" "),r("p",[t._v("VICON이나 Optitrack과 같은 실내 모션 캡처 시스템을 사용하여, 차량 상태 추정을 위한 위치 및 자세 데이터를 제공하거나, 분석을 위한 실측 자료로 사용할 수 있습니다. 모션 캡처 데이터는 로컬 원점을 기준으로 PX4의 로컬 위치 추정치를 업데이트할 수 있습니다. 모션 캡처 시스템의 방향(요)은 자세 추정기에 의해 선택적으로 통합될 수 있습니다.")]),t._v(" "),r("p",[t._v("모션 캡처 시스템의 포즈(위치 및 방향) 데이터는 "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ATT_POS_MOCAP",target:"_blank",rel:"noopener noreferrer"}},[t._v("ATT_POS_MOCAP"),r("OutboundLink")],1),t._v(" 메시지를 사용하여 MAVLink로 자동조종장치에 전송됩니다. 데이터 표현 규칙에 대한 좌표 프레임은 아래 섹션을 참고하십시오. "),r("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("mavros")]),t._v(" ROS-Mavlink 인터페이스에는 이 메시지 전송을 위한 기본 플러그인이 있습니다. C/C++ 코드와 MAVLink 라이브러리를 사용하여 전송할 수도 있습니다.")],1),t._v(" "),r("h2",{attrs:{id:"컴퓨팅-아키텍처"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#컴퓨팅-아키텍처"}},[t._v("#")]),t._v(" 컴퓨팅 아키텍처")]),t._v(" "),r("p",[t._v("안정적인 통신을 위하여 "),r("strong",[t._v("온보드")]),t._v(" 컴퓨터(예: Raspberry Pi, ODroid 등)에서 모션 캡처 데이터를 전송하는 방식이 "),r("strong",[t._v("매우 권장됩니다")]),t._v(". 온보드 컴퓨터는 안정적인 고대역폭의 WiFi로 모션 캡처 컴퓨터에 연결할 수 있습니다.")]),t._v(" "),r("p",[t._v("3DR/SiK 라디오와 같은 표준 텔레메트리 통신은 고대역폭 모션 캡처 애플리케이션에는 "),r("strong",[t._v("적합하지 않습니다")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"좌표-프레임"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#좌표-프레임"}},[t._v("#")]),t._v(" 좌표 프레임")]),t._v(" "),r("p",[t._v("시스템에서 적절한 기준 좌표계를  설정하는 방법을 설명합니다. 다양한 표현법이 있지만 ENU와 NED 방식을 사용합니다.")]),t._v(" "),r("ul",[r("li",[t._v("ENU는 지상 고정 좌표로서,  "),r("strong",[t._v("X")]),t._v("축은 동쪽, "),r("strong",[t._v("Y")]),t._v(" 축은 북쪽, "),r("strong",[t._v("Z")]),t._v("축은 상공을 향합니다. 로봇/기체 틀 기준으로는 "),r("strong",[t._v("X")]),t._v("축은 전면, "),r("strong",[t._v("Z")]),t._v("축은 상단, "),r("strong",[t._v("Y")]),t._v("축은 좌측을 향합니다.")]),t._v(" "),r("li",[t._v("NED에서 "),r("strong",[t._v("X")]),t._v("축은 북쪽, "),r("strong",[t._v("Y")]),t._v("축은 동쪽, "),r("strong",[t._v("Z")]),t._v("축은 지면을 향합니다. 로봇/기체 틀 기준으로는 "),r("strong",[t._v("X")]),t._v("축은 북쪽, "),r("strong",[t._v("Y")]),t._v("축은 동쪽 "),r("strong",[t._v("Z")]),t._v("축은 지면을 향합니다.")])]),t._v(" "),r("p",[t._v("프레임은 아래 이미지에 표시됩니다. NED는 좌측, ENU는 우측에 있습니다: "),r("img",{attrs:{src:s(392),alt:"참조 프레임"}})]),t._v(" "),r("p",[t._v("그러나 외부 방향 추정시, 자북은 무시하고 가상 세계 "),r("em",[t._v("X")]),t._v(" 좌표 축을 따라 벡터 기준을 삼습니다(움직임 촬영 기법으로 보정할 때 언제든 자유롭게 둘 수 있습니다), 방위각면이 로컬 "),r("em",[t._v("x")]),t._v(" 좌표를 두는 면입니다.")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("움직임을 감지하는 프로그램에서 강체를 만들 때, 세계 "),r("strong",[t._v("X")]),t._v(" 좌표 축에 로봇을 우선 맞춰야 함을 기억하십시오. 그렇지 않으면 방위 회전각 추정시 초기 오프셋으로 처리합니다.")])]),t._v(" "),r("h2",{attrs:{id:"추정기-선택"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추정기-선택"}},[t._v("#")]),t._v(" 추정기 선택")]),t._v(" "),r("h3",{attrs:{id:"lpe와-고도-추정기-q"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lpe와-고도-추정기-q"}},[t._v("#")]),t._v(" LPE와 고도 추정기 Q")]),t._v(" "),r("h3",{attrs:{id:"ekf2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ekf2"}},[t._v("#")]),t._v(" EKF2")]),t._v(" "),r("p",[t._v("모션 캡쳐에 대한 ROS 주제는 mocap 시스템의 경우 "),r("code",[t._v("mocap_pose_estimate")]),t._v("이고, 비전의 경우 "),r("code",[t._v("vision_pose_estimate")]),t._v("입니다. 자세한 정보는 "),r("a",{attrs:{href:"http://wiki.ros.org/mavros_extras",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros_extras"),r("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),r("h2",{attrs:{id:"테스트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#테스트"}},[t._v("#")]),t._v(" 테스트")]),t._v(" "),r("h2",{attrs:{id:"문제-해결"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")])])}),[],!1,null,null,null);_.default=v.exports},392:function(t,_,s){t.exports=s.p+"assets/img/ref_frames.b0d97b5d.png"}}]);