(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{1486:function(t,_,e){t.exports=e.p+"assets/img/flow_lidar_attached.63b8acb4.jpg"},1487:function(t,_,e){t.exports=e.p+"assets/img/px4flow_offset.80ab9f41.png"},3025:function(t,_,e){"use strict";e.r(_);var r=e(19),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"광류"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#광류"}},[t._v("#")]),t._v(" 광류")]),t._v(" "),r("p",[r("em",[t._v("광류")]),t._v("는 속도 추정을 위하여 하향 카메라와 하향 거리 센서를 사용합니다.")]),t._v(" "),r("p",[t._v("@"),r("a",{attrs:{href:"https://youtu.be/aPQKgUof3Pc",target:"_blank",rel:"noopener noreferrer"}},[t._v("유튜브"),r("OutboundLink")],1),t._v(" "),r("em",[t._v("동영상: 속도 추정을 위한 ARK Flow 센서를 사용한 PX4 고정 위치("),r("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v(")")],1)]),t._v(" "),r("h2",{attrs:{id:"설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),r("p",[t._v("광류에는 하향 카메라와 "),r("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리 센서")]),t._v("(LiDAR가 더 좋음)가 필요합니다. 이들은 MAVLink, I2C 또는 다른 버스로 연결 가능합니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If connected to PX4 via MAVLink the Optical Flow device must publish to the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPTICAL_FLOW_RAD",target:"_blank",rel:"noopener noreferrer"}},[t._v("OPTICAL_FLOW_RAD"),r("OutboundLink")],1),t._v(" topic, and the distance sensor must publish to the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#DISTANCE_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("DISTANCE_SENSOR"),r("OutboundLink")],1),t._v(" topic.")])]),t._v(" "),r("p",[t._v("다른 방향으로 이동할 때의 흐름 출력은 다음과 같아야합니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("기체 이동")]),t._v(" "),r("th",[t._v("통합 흐름")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("전방")]),t._v(" "),r("td",[t._v("+ Y")])]),t._v(" "),r("tr",[r("td",[t._v("후방")]),t._v(" "),r("td",[t._v("- Y")])]),t._v(" "),r("tr",[r("td",[t._v("우측")]),t._v(" "),r("td",[t._v("- X")])]),t._v(" "),r("tr",[r("td",[t._v("좌측")]),t._v(" "),r("td",[t._v("+ X")])])])]),t._v(" "),r("p",[t._v("순수 회전의 경우 "),r("code",[t._v("integrated_xgyro")]),t._v("와 "),r("code",[t._v("integrated_x")]),t._v(" (각각 "),r("code",[t._v("integrated_ygyro")]),t._v("와 "),r("code",[t._v("integrated_y")]),t._v(")는 동일하여야 합니다.")]),t._v(" "),r("p",[t._v("보편적인 설정은 아래와 같은 "),r("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v("와 "),r("RouterLink",{attrs:{to:"/ko/sensor/lidar_lite.html"}},[t._v("Lidar-Lite")]),t._v("입니다.")],1),t._v(" "),r("p",[r("img",{attrs:{src:e(1486),alt:"광류 라이더 부착"}})]),t._v(" "),r("p",[t._v("광류 데이터는 다른 속도 데이터 소스와 융합됩니다. 센서 데이터와 차량 중앙으로부터의 오프셋을 융합 방식은 "),r("a",{attrs:{href:"#estimators"}},[t._v("추정기")]),t._v("에서 설정합니다.")]),t._v(" "),r("h2",{attrs:{id:"유량-센서-카메라"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#유량-센서-카메라"}},[t._v("#")]),t._v(" 유량 센서/카메라")]),t._v(" "),r("h3",{attrs:{id:"ark-flow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[t._v("#")]),t._v(" ARK Flow")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/dronecan/ark_flow.html"}},[t._v("ARK Flow")]),t._v(" is a "),r("RouterLink",{attrs:{to:"/ko/dronecan/"}},[t._v("DroneCAN")]),t._v(" optical flow sensor, "),r("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(", and IMU. PAW3902 광학 유량 센서, Broadcom AFBR-S50LV85D 30m 거리 센서 및 BMI088 IMU가 있습니다.")],1),t._v(" "),r("h3",{attrs:{id:"pmw3901-기반-센서"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pmw3901-기반-센서"}},[t._v("#")]),t._v(" PMW3901 기반 센서")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/sensor/pmw3901.html"}},[t._v("PMW3901")]),t._v("은 컴퓨터 마우스와 유사한 광류 센서이지만, 80mm에서 무한대까지 작동합니다. Bitcraze, Tindie, Hex, Thone 및 Alientek의 일부 제품을 포함하여 여러 제품에 사용됩니다.")],1),t._v(" "),r("h3",{attrs:{id:"기타-카메라-센서"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기타-카메라-센서"}},[t._v("#")]),t._v(" 기타 카메라 / 센서")]),t._v(" "),r("p",[t._v("카메라 통합 보드를 사용할 수 있습니다. "),r("a",{attrs:{href:"https://github.com/PX4/OpticalFlow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Optical Flow repo"),r("OutboundLink")],1),t._v("를 사용할 수도 있습니다 ("),r("a",{attrs:{href:"https://github.com/PX4/snap_cam",target:"_blank",rel:"noopener noreferrer"}},[t._v("snap_cam"),r("OutboundLink")],1),t._v(" 참조).")]),t._v(" "),r("h2",{attrs:{id:"거리-측정기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#거리-측정기"}},[t._v("#")]),t._v(" 거리 측정기")]),t._v(" "),r("p",[t._v("더 자세한 정보는 "),r("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리 센서")]),t._v("를 참고하십시오. 그러나 견고성과 정확성 측면에서는 음향 센서보다 LIDAR를 사용하는 것이 좋습니다.")],1),t._v(" "),r("h2",{attrs:{id:"추정기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추정기"}},[t._v("#")]),t._v(" 추정기")]),t._v(" "),r("p",[t._v("추정기는 광학 흐름 센서 및 기타 소스의 데이터를 융합합니다. 융합 방법 설정과 차량 중심에 대한 상대적 오프셋이 사용되는 추정기를 지정하여야합니다.")]),t._v(" "),r("p",[t._v("오프셋은 아래와 같이 차량 방향 및 중심을 기준으로 계산됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1487),alt:"광류 오프셋"}})]),t._v(" "),r("p",[t._v("광류 기반 탐색은 EKF2 및 LPE (더 이상 사용되지 않음) 추정기에서 활성화됩니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"ekf2"}})]),t._v(" "),r("h3",{attrs:{id:"확장-칼만-필터-ekf2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#확장-칼만-필터-ekf2"}},[t._v("#")]),t._v(" 확장 칼만 필터 (EKF2)")]),t._v(" "),r("p",[t._v("For optical flow fusion using EKF2, set "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_CTRL"}},[t._v("EKF2_OF_CTRL")]),t._v(".")],1),t._v(" "),r("p",[t._v("광류 센서가 차량 중앙에서 오프셋된 경우 다음 매개변수를 사용하여 설정합니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("매개변수")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"EKF2_OF_POS_X"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_X"}},[t._v("EKF2_OF_POS_X")])],1),t._v(" "),r("td",[t._v("바디 프레임에서 광류 초점의 X 위치 (기본값은 0.0m).")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"EKF2_OF_POS_Y"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_Y"}},[t._v("EKF2_OF_POS_Y")])],1),t._v(" "),r("td",[t._v("바디 프레임에서 광류 초점의 Y 위치 (기본값은 0.0m).")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"EKF2_OF_POS_Z"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_Z"}},[t._v("EKF2_OF_POS_Z")])],1),t._v(" "),r("td",[t._v("바디 프레임에서 광류 초점의 Z 위치 (기본값은 0.0m).")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);