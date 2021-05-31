(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{1207:function(t,a,e){t.exports=e.p+"assets/img/t265_intel_realsense_tracking_camera_photo_angle.730fdf4f.jpg"},2212:function(t,a,e){"use strict";e.r(a);var r=e(19),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"t265-리얼센스-추적-카메라-vio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#t265-리얼센스-추적-카메라-vio"}},[t._v("#")]),t._v(" T265 리얼센스 추적 카메라(VIO)")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.intelrealsense.com/tracking-camera-t265/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel Realsense 추적 카메라 T265 "),r("OutboundLink")],1),t._v("는 "),r("RouterLink",{attrs:{to:"/ko/computer_vision/visual_inertial_odometry.html"}},[t._v("VIO")]),t._v("에 사용할 수 있는 주행 거리 측정 정보를 제공하여, PX4의 다른 포지셔닝 시스템을 보강하거나 대체합니다.")],1),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("이 카메라를 추천하며, "),r("RouterLink",{attrs:{to:"/ko/computer_vision/visual_inertial_odometry.html#supported_setup"}},[t._v("VIO (Visual Inertial Odometry) > 설정")]),t._v("에서 사용됩니다.")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:e(1207),alt:"Intel Realsense 추적 카메라 T265 - 각진 이미지"}})]),t._v(" "),r("h2",{attrs:{id:"구매-링크"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구매-링크"}},[t._v("#")]),t._v(" 구매 링크")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://store.intelrealsense.com/buy-intel-realsense-tracking-camera-t265.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel® RealSense™ 추적 카메라 T265"),r("OutboundLink")],1),t._v(" (store.intelrealsense.com)")]),t._v(" "),r("h2",{attrs:{id:"설정-방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설정-방법"}},[t._v("#")]),t._v(" 설정 방법")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/computer_vision/visual_inertial_odometry.html"}},[t._v("시각 관성 오도메 트리 (VIO)")]),t._v("에서는  T265 카메라를 설정 방법을 설명합니다.")],1),t._v(" "),r("p",[t._v("전체 개요:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Auterion/VIO_bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("VIO 브리지 ROS 노드"),r("OutboundLink")],1),t._v("는 ROS와 카메라의 브리지를 제공합니다. 이 노드는 T265 카메라에만 사용할 수 있습니다.")]),t._v(" "),r("li",[t._v("카메라는 렌즈가 아래를 향하도록 장착하여야 합니다 (기본값). 다른 방향의 경우 아래 섹션에서 "),r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge_mavros.launch"),r("OutboundLink")],1),t._v("를 수정합니다."),r("div",{staticClass:"language-xml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-xml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("node")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pkg")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tf"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("static_transform_publisher"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tf_baseLink_cameraPose"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("args")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0 0 0 0 1.5708 0 base_link camera_pose_frame 1000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),t._v("카메라 ROS 프레임 "),r("code",[t._v("camera_pose_frame")]),t._v("을 mavros 드론 프레임 "),r("code",[t._v("base_link")]),t._v("에 연결하는 정적 변환입니다.\n"),r("ul",[r("li",[t._v("처음 세 개의 "),r("code",[t._v("인수")]),t._v("는 비행 컨트롤러의 중심에서 카메라까지의 미터 단위로 "),r("em",[t._v("변환")]),t._v(" x, y, z를 지정합니다. 예를 들어 카메라가 컨트롤러 앞 10cm, 위쪽 4cm 인 경우 처음 세 숫자는 [0.1, 0, 0.04, ...]입니다.")]),t._v(" "),r("li",[t._v("다음 세 개의 "),r("code",[t._v("인수")]),t._v("는 라디안 (요, 피치, 롤)으로 회전을 지정합니다. 따라서 "),r("code",[t._v("[... 0, 1.5708, 0]")]),t._v("은 90도 내림(지면을 향함)을 의미합니다. 정면을 바라보는 것은 [... 0 0 0]입니다.")])])]),t._v(" "),r("li",[t._v("카메라는 고주파 진동에 민감합니다! 방진 폼을 사용하여 장착하여야 합니다.\n"),r("span",{attrs:{id:"launch_files"}}),t._v(" 다양한 시나리오에 대한 실행 파일이 제공됩니다.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("실행 파일")]),t._v(" "),r("th",[t._v("시작")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge_mavros.launch"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("Bridge, MAVROS")]),t._v(" "),r("td",[t._v("대부분의 경우 기체에 사용")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge.launch"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("Bridge에만 사용")]),t._v(" "),r("td",[t._v("다른 구성 요소가 MAVROS 시작을 담당하는 경우 사용.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge_mavros_sitl.launch"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("Bridge, MAVROS, SITL")]),t._v(" "),r("td",[t._v("시뮬레이션 용도")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);