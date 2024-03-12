(window.webpackJsonp=window.webpackJsonp||[]).push([[841],{1459:function(t,e,a){t.exports=a.p+"assets/img/t265_intel_realsense_tracking_camera_photo_angle.a0693d9a.jpg"},3317:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"intel®-realsensetm-tracking-camera-t265-vio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intel®-realsensetm-tracking-camera-t265-vio"}},[t._v("#")]),t._v(" Intel® RealSense™ Tracking Camera T265 (VIO)")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.intelrealsense.com/tracking-camera-t265/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel® RealSense™ Tracking Camera T265"),s("OutboundLink")],1),t._v(" provides odometry information that can be used for "),s("RouterLink",{attrs:{to:"/ko/computer_vision/visual_inertial_odometry.html"}},[t._v("VIO")]),t._v(", augmenting or replacing other positioning systems on PX4.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This camera is recommended, and is used in the "),s("RouterLink",{attrs:{to:"/ko/computer_vision/visual_inertial_odometry.html#suggested-setup"}},[t._v("Visual Inertial Odometry (VIO) > Suggested Setup")]),t._v(".")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:a(1459),alt:"Intel® RealSense™ Tracking Camera T265 - Angled Image"}})]),t._v(" "),s("h2",{attrs:{id:"where-to-buy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.intelrealsense.com/tracking-camera-t265/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel® RealSense™ Tracking Camera T265"),s("OutboundLink")],1),t._v(" (store.intelrealsense.com)")]),t._v(" "),s("h2",{attrs:{id:"설정-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설정-방법"}},[t._v("#")]),t._v(" 설정 방법")]),t._v(" "),s("p",[t._v("At a high level:")]),t._v(" "),s("ul",[s("li",[t._v("The "),s("a",{attrs:{href:"https://github.com/IntelRealSense/realsense-ros",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("realsense-ros")]),t._v(" wrapper"),s("OutboundLink")],1),t._v(" provided by Intel should be used to extract the raw data from the camera.")]),t._v(" "),s("li",[t._v("카메라는 렌즈가 아래를 향하도록 장착하여야 합니다 (기본값). Be sure to specify the camera orientation by publishing the static transform between the "),s("code",[t._v("base_link")]),t._v(" and "),s("code",[t._v("camera_pose_frame")]),t._v(" in a ROS launch file, for example:"),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pkg")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("static_transform_publisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tf_baseLink_cameraPose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0 0 0 0 1.5708 0 base_link camera_pose_frame 1000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),t._v("This is a static transform that links the camera ROS frame "),s("code",[t._v("camera_pose_frame")]),t._v(" to the MAVROS drone frame "),s("code",[t._v("base_link")]),t._v(".\n"),s("ul",[s("li",[t._v("the first three "),s("code",[t._v("args")]),t._v(" specify "),s("em",[t._v("translation")]),t._v(" x,y,z in metres from the center of the flight controller to the camera. 예를 들어 카메라가 컨트롤러 앞 10cm, 위쪽 4cm 인 경우 처음 세 숫자는 [0.1, 0, 0.04, ...]입니다.")]),t._v(" "),s("li",[t._v("다음 세 개의 "),s("code",[t._v("인수")]),t._v("는 라디안 (요, 피치, 롤)으로 회전을 지정합니다. So "),s("code",[t._v("[... 0, 1.5708, 0]")]),t._v(" means pitch down by 90° (facing the ground). 정면을 바라보는 것은 [... 0 0 0]입니다.")])])]),t._v(" "),s("li",[t._v("The camera is sensitive to high-frequency vibrations! 방진 폼을 사용하여 장착하여야 합니다.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);