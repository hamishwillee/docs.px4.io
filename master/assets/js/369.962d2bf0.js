(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{1268:function(t,_,r){t.exports=r.p+"assets/img/flow_lidar_attached.63b8acb4.jpg"},1269:function(t,_,r){t.exports=r.p+"assets/img/px4flow_offset.80ab9f41.png"},1270:function(t,_,r){t.exports=r.p+"assets/img/qgc_ekf2_enable_flow.ac4d0802.png"},2644:function(t,_,r){"use strict";r.r(_);var e=r(19),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"광류"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#광류"}},[t._v("#")]),t._v(" 광류")]),t._v(" "),e("p",[e("em",[t._v("광류")]),t._v("는 속도 추정을 위하여 하향 카메라와 하향 거리 센서를 사용합니다.")]),t._v(" "),e("p",[t._v("@"),e("a",{attrs:{href:"https://youtu.be/aPQKgUof3Pc",target:"_blank",rel:"noopener noreferrer"}},[t._v("유튜브"),e("OutboundLink")],1),t._v(" "),e("em",[t._v("동영상: 속도 추정을 위한 ARK Flow 센서를 사용한 PX4 고정 위치("),e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v(")")],1)]),t._v(" "),e("h2",{attrs:{id:"설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),e("p",[t._v("광류에는 하향 카메라와 "),e("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리 센서")]),t._v("(LiDAR가 더 좋음)가 필요합니다. 이들은 MAVLink, I2C 또는 다른 버스로 연결 가능합니다.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("If connected to PX4 via MAVLink the Optical Flow device must publish to the "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPTICAL_FLOW_RAD",target:"_blank",rel:"noopener noreferrer"}},[t._v("OPTICAL_FLOW_RAD"),e("OutboundLink")],1),t._v(" topic, and the distance sensor must publish to the "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#DISTANCE_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("DISTANCE_SENSOR"),e("OutboundLink")],1),t._v(" topic.")])]),t._v(" "),e("p",[t._v("다른 방향으로 이동할 때의 흐름 출력은 다음과 같아야합니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("기체 이동")]),t._v(" "),e("th",[t._v("통합 흐름")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("전방")]),t._v(" "),e("td",[t._v("+ Y")])]),t._v(" "),e("tr",[e("td",[t._v("후방")]),t._v(" "),e("td",[t._v("- Y")])]),t._v(" "),e("tr",[e("td",[t._v("우측")]),t._v(" "),e("td",[t._v("- X")])]),t._v(" "),e("tr",[e("td",[t._v("좌측")]),t._v(" "),e("td",[t._v("+ X")])])])]),t._v(" "),e("p",[t._v("순수 회전의 경우 "),e("code",[t._v("integrated_xgyro")]),t._v("와 "),e("code",[t._v("integrated_x")]),t._v(" (각각 "),e("code",[t._v("integrated_ygyro")]),t._v("와 "),e("code",[t._v("integrated_y")]),t._v(")는 동일하여야 합니다.")]),t._v(" "),e("p",[t._v("보편적인 설정은 아래와 같은 "),e("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v("와 "),e("RouterLink",{attrs:{to:"/ko/sensor/lidar_lite.html"}},[t._v("Lidar-Lite")]),t._v("입니다.")],1),t._v(" "),e("p",[e("img",{attrs:{src:r(1268),alt:"광류 라이더 부착"}})]),t._v(" "),e("p",[t._v("광류 데이터는 다른 속도 데이터 소스와 융합됩니다. 센서 데이터와 차량 중앙으로부터의 오프셋을 융합 방식은 "),e("a",{attrs:{href:"#estimators"}},[t._v("추정기")]),t._v("에서 설정합니다.")]),t._v(" "),e("h2",{attrs:{id:"유량-센서-카메라"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#유량-센서-카메라"}},[t._v("#")]),t._v(" 유량 센서/카메라")]),t._v(" "),e("h3",{attrs:{id:"px4flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4flow"}},[t._v("#")]),t._v(" PX4Flow")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v("는 조명 LED 없이 실내외의 조명이 낮은 환경에서 작동하는 광류 카메라입니다. 광류를 계산하는 간편하고 가장 확립된 방법 중 하나입니다.")],1),t._v(" "),e("h3",{attrs:{id:"ark-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[t._v("#")]),t._v(" ARK Flow")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/uavcan/ark_flow.html"}},[t._v("ARK Flow")]),t._v("는 "),e("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN")]),t._v(" 옵티컬 플로우 센서, "),e("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리 센서")]),t._v(" 및 IMU입니다. PAW3902 광학 유량 센서, Broadcom AFBR-S50LV85D 30m 거리 센서 및 BMI088 IMU가 있습니다.")],1),t._v(" "),e("h3",{attrs:{id:"pmw3901-기반-센서"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pmw3901-기반-센서"}},[t._v("#")]),t._v(" PMW3901 기반 센서")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/pmw3901.html"}},[t._v("PMW3901")]),t._v("은 컴퓨터 마우스와 유사한 광류 센서이지만, 80mm에서 무한대까지 작동합니다. Bitcraze, Tindie, Hex, Thone 및 Alientek의 일부 제품을 포함하여 여러 제품에 사용됩니다.")],1),t._v(" "),e("h3",{attrs:{id:"기타-카메라-센서"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기타-카메라-센서"}},[t._v("#")]),t._v(" 기타 카메라 / 센서")]),t._v(" "),e("p",[t._v("카메라 통합 보드를 사용할 수 있습니다. "),e("a",{attrs:{href:"https://github.com/PX4/OpticalFlow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Optical Flow repo"),e("OutboundLink")],1),t._v("를 사용할 수도 있습니다 ("),e("a",{attrs:{href:"https://github.com/PX4/snap_cam",target:"_blank",rel:"noopener noreferrer"}},[t._v("snap_cam"),e("OutboundLink")],1),t._v(" 참조).")]),t._v(" "),e("h2",{attrs:{id:"거리-측정기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#거리-측정기"}},[t._v("#")]),t._v(" 거리 측정기")]),t._v(" "),e("p",[t._v("더 자세한 정보는 "),e("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리 센서")]),t._v("를 참고하십시오. 그러나 견고성과 정확성 측면에서는 음향 센서보다 LIDAR를 사용하는 것이 좋습니다.")],1),t._v(" "),e("h2",{attrs:{id:"추정기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추정기"}},[t._v("#")]),t._v(" 추정기")]),t._v(" "),e("p",[t._v("추정기는 광학 흐름 센서 및 기타 소스의 데이터를 융합합니다. 융합 방법 설정과 차량 중심에 대한 상대적 오프셋이 사용되는 추정기를 지정하여야합니다.")]),t._v(" "),e("p",[t._v("오프셋은 아래와 같이 차량 방향 및 중심을 기준으로 계산됩니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(1269),alt:"광류 오프셋"}})]),t._v(" "),e("p",[t._v("광류 기반 탐색은 EKF2 및 LPE (더 이상 사용되지 않음) 추정기에서 활성화됩니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"ekf2"}})]),t._v(" "),e("h3",{attrs:{id:"확장-칼만-필터-ekf2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#확장-칼만-필터-ekf2"}},[t._v("#")]),t._v(" 확장 칼만 필터 (EKF2)")]),t._v(" "),e("p",[t._v("EKF2를 사용하는 광류 융합의 경우 아래 QGroundControl을 사용하여 표시된대로 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")]),t._v(" 매개변수에서 광류 플래그 사용을 설정합니다.")],1),t._v(" "),e("p",[e("img",{attrs:{src:r(1270),alt:"QGroundControl - 센서 보정"}})]),t._v(" "),e("p",[t._v("광류 센서가 차량 중앙에서 오프셋된 경우 다음 매개변수를 사용하여 설정합니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("매개변수")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("span",{attrs:{id:"EKF2_OF_POS_X"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_X"}},[t._v("EKF2_OF_POS_X")])],1),t._v(" "),e("td",[t._v("바디 프레임에서 광류 초점의 X 위치 (기본값은 0.0m).")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"EKF2_OF_POS_Y"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_Y"}},[t._v("EKF2_OF_POS_Y")])],1),t._v(" "),e("td",[t._v("바디 프레임에서 광류 초점의 Y 위치 (기본값은 0.0m).")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"EKF2_OF_POS_Z"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_Z"}},[t._v("EKF2_OF_POS_Z")])],1),t._v(" "),e("td",[t._v("바디 프레임에서 광류 초점의 Z 위치 (기본값은 0.0m).")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);