(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1281:function(t,a,r){t.exports=r.p+"assets/img/ark_flow_distance_sensor.6191f0e1.jpg"},1282:function(t,a,r){t.exports=r.p+"assets/img/menu_analyze_tool.160c3594.png"},1283:function(t,a,r){t.exports=r.p+"assets/img/qgc_analyze_tool_distance_sensor.3dbf6b43.png"},2591:function(t,a,r){"use strict";r.r(a);var e=r(19),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"거리-센서-거리-측정기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#거리-센서-거리-측정기"}},[t._v("#")]),t._v(" 거리 센서 (거리 측정기)")]),t._v(" "),e("p",[t._v("거리 센서는 "),e("RouterLink",{attrs:{to:"/ko/flying/terrain_following_holding.html#terrain_following"}},[t._v("지형 추적")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/flying/terrain_following_holding.html#terrain_hold"}},[t._v("지형 유지")]),t._v(" (예 : 사진 촬영을 위한 정밀 호버링), 향상된 착륙 동작("),e("RouterLink",{attrs:{to:"/ko/flying/terrain_following_holding.html#range_aid"}},[t._v("거리 지원")]),t._v("), 규제 높이 제한 경고, 충돌 방지 등에서 사용할 수있는 거리측정 기능을 제공합니다.")],1),t._v(" "),e("p",[t._v("이 섹션에는 PX4에서 지원하는 거리 센서(더 자세한 문서에 링크됨), 모든 거리 측정기에 필요한 "),e("a",{attrs:{href:"#configuration"}},[t._v("일반 설정")]),t._v(", "),e("a",{attrs:{href:"#testing"}},[t._v("테스트")]),t._v("와 "),e("a",{attrs:{href:"#simulation"}},[t._v("시뮬레이션")]),t._v("을 설명합니다. 보다 자세한 설정과 정보는 아래 링크(및 사이드 바)를 참고하십시오.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(393),alt:"Lidar Lite V3",width:"200px"}}),e("img",{attrs:{src:r(394),alt:"LightWare SF11/C Lidar",width:"200px"}}),e("img",{attrs:{src:r(1281),alt:"ARK Flow\n",width:"200px"}})]),t._v(" "),e("h2",{attrs:{id:"지원되는-거리-측정기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지원되는-거리-측정기"}},[t._v("#")]),t._v(" 지원되는 거리 측정기")]),t._v(" "),e("h3",{attrs:{id:"ark-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[t._v("#")]),t._v(" ARK Flow")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/uavcan/ark_flow.html"}},[t._v("ARK Flow")]),t._v("는 8cm에서 30m까지의 거리를 측정할 수 있는 오픈 소스 ToF(Time-of-Flight) 및 광학 흐름 센서 모듈입니다. CAN1 포트를 통해 비행 콘트롤러에 연결할 수 있으므로, CAN2 포트를 통해 추가 센서를 연결할 수 있습니다. PX4 펌웨어를 실행하고 "),e("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN")]),t._v(" "),e("RouterLink",{attrs:{to:"/ko/uavcan/node_firmware.html"}},[t._v("펌웨어 업데이트")]),t._v("를 지원하며 소형 폼 팩터에 담겨 있습니다.")],1),t._v(" "),e("h3",{attrs:{id:"holybro-st-vl53l1x-lidar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#holybro-st-vl53l1x-lidar"}},[t._v("#")]),t._v(" Holybro ST VL53L1X Lidar")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.holybro.com/product/vl53l1x/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VL53L1X"),e("OutboundLink")],1),t._v("는 ST FlightSense™ 제품군을 향상시키는 최첨단 ToF(Time-of-Flight) 레이저 범위 센서입니다. 최대 4m의 정확한 범위와 최대 50Hz의 빠른 범위 주파수를 제공하는 시장에서 가장 빠른 소형 ToF 센서입니다.")]),t._v(" "),e("h3",{attrs:{id:"lidar-lite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite"}},[t._v("#")]),t._v(" Lidar-Lite")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/lidar_lite.html"}},[t._v("Lidar-Lite")]),t._v("는 소형의 고성능 광학 원거리 거리계입니다. 센서 범위는 (5cm-40m)이며 PWM 또는 I2C 포트에 연결 가능합니다.")],1),t._v(" "),e("h3",{attrs:{id:"maxbotix-i2cxl-maxsonar-ez"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxbotix-i2cxl-maxsonar-ez"}},[t._v("#")]),t._v(" MaxBotix I2CXL-MaxSonar-EZ")]),t._v(" "),e("p",[t._v("MaxBotix "),e("a",{attrs:{href:"https://www.maxbotix.com/product-category/i2cxl-maxsonar-ez-products",target:"_blank",rel:"noopener noreferrer"}},[t._v("I2CXL-MaxSonar-EZ"),e("OutboundLink")],1),t._v(" 범위에는 보조 이착륙 및 충돌 방지에 적합한 단거리 수중 음파 탐지기 기반의 거리계가 많습니다. I2C 포트로 연결 가능합니다.")]),t._v(" "),e("p",[t._v("거리계는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_MB12XX"}},[t._v("SENS_EN_MB12XX")]),t._v(" 매개변수로 활성화됩니다.")],1),t._v(" "),e("h3",{attrs:{id:"lightware-lidars"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lightware-lidars"}},[t._v("#")]),t._v(" Lightware LIDARs")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[t._v("Lightware SFxx Lidar")]),t._v('는 드론 애플리케이션에 적합한 경량 "레이저 고도계"를 제공합니다.')],1),t._v(" "),e("p",[t._v("PX4는 SF11/c와 SF/LW20을 지원합니다. PX4는 SF02, SF10/a, SF10/b, SF10/c 단종 모델에도 사용 가능합니다.")]),t._v(" "),e("h3",{attrs:{id:"teraranger-거리계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#teraranger-거리계"}},[t._v("#")]),t._v(" TeraRanger 거리계")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/teraranger.html"}},[t._v("TeraRanger")]),t._v("는 적외선 ToF (Time-of-Flight) 기반의 다양한 경량 거리측정 센서를 제공합니다. 일반적으로, 소나보다 더 빠르고 범위가 넓으며 레이저 기반 장치보다 작고 가볍습니다.")],1),t._v(" "),e("p",[t._v("PX4는 I2C 버스 타입의 다음 모델들을 지원합니다 : TeraRanger One, TeraRanger Evo 60m 및 TeraRanger Evo 600Hz.")]),t._v(" "),e("h3",{attrs:{id:"ainstein-us-d1-standard-radar-altimeter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ainstein-us-d1-standard-radar-altimeter"}},[t._v("#")]),t._v(" Ainstein US-D1 Standard Radar Altimeter")]),t._v(" "),e("p",[e("em",[t._v("Ainstein")]),t._v(" "),e("RouterLink",{attrs:{to:"/ko/sensor/ulanding_radar.html"}},[t._v("US-D1 표준 레이더 고도계")]),t._v("는 UAV에 최적화된 소형 마이크로파 거리계입니다. 감지 범위는 약 50m입니다. 이 제품의 특별한 장점은 모든 기상 조건과 모든 지형 유형(물 포함)에서 잘 작동하는 것입니다.")],1),t._v(" "),e("h3",{attrs:{id:"leddarone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#leddarone"}},[t._v("#")]),t._v(" LeddarOne")]),t._v(" "),e("p",[t._v("LeddarOne </ 0>은 좁지만 확산 빔이있는 소형 Lidar 모듈로, 견고하고 신뢰할 수 있으며, 비용 효율적인 패키지로 우수한 감지 범위를 제공합니다. 감지 범위는 1cm ~ 40m이며 UART/직렬 버스로 연결합니다.")]),e("p"),t._v(" "),e("h3",{attrs:{id:"tfmini"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tfmini"}},[t._v("#")]),t._v(" TFmini")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/tfmini.html"}},[t._v("Benewake TFmini Lidar")]),t._v("는 12m 범위의 작고 저렴한 저전력 LIDAR입니다.")],1),t._v(" "),e("h3",{attrs:{id:"psk-cm8jl65-cc5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#psk-cm8jl65-cc5"}},[t._v("#")]),t._v(" PSK-CM8JL65-CC5")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("Lanbao PSK-CM8JL65-CC5 ToF 적외선 거리측정 센서")]),t._v("는 0.17m-8m 범위와 밀리미터 분해능을 가진 매우 작은 (38mm x 18mm x 7mm, < 10g) IR 거리 센서입니다. UART/직렬 버스에 연결하여야합니다. <10g) IR distance sensor with a 0.17m-8m range and millimeter resolution. It must be connected to a UART/serial bus.")],1),t._v(" "),e("h3",{attrs:{id:"avionics-anonymous-uavcan-laser-altimeter-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#avionics-anonymous-uavcan-laser-altimeter-interface"}},[t._v("#")]),t._v(" Avionics Anonymous UAVCAN Laser Altimeter Interface")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/uavcan/avanon_laser_interface.html"}},[t._v("Avionics Anonymous UAVCAN Laser Altimeter Interface")]),t._v("는 여러 개의 일반거리계(예 : "),e("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[t._v("Lightware SF11/c, SF30/D")]),t._v(" 등)들을 I2C보다 더 강력한 인터페이스인 "),e("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN")]),t._v(" 버스에 연결할 수 있습니다.")],1),t._v(" "),e("p",[e("span",{attrs:{id:"configuration"}})]),t._v(" "),e("h2",{attrs:{id:"설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),e("p",[t._v("거리계는 일반적으로 직렬 (PWM) 또는 I2C 포트 (장치 드라이버에 따라 다름)에 연결되며, 특정 매개변수로 포트에서 활성화됩니다.")]),t._v(" "),e("p",[e("em",[t._v("개별 거리 센서")]),t._v("의 하드웨어와 소프트웨어 설정은 개별 주제에서 설명합니다.")]),t._v(" "),e("p",[t._v("물리적 설정과 사용법에 관한 "),e("em",[t._v("모든 거리 센서에 공통적인")]),t._v(" 설정 방법은 다음과 같습니다.")]),t._v(" "),e("h3",{attrs:{id:"일반-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#일반-설정"}},[t._v("#")]),t._v(" 일반 설정")]),t._v(" "),e("p",[t._v("일반적인 거리계 설정은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_AID"}},[t._v("EKF2*RNG**")]),t._v(" 매개변수를 사용합니다. 여기에는 아래의 내용들이 포함됩니다.")],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_X"}},[t._v("EKF2_RNG_POS_X")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_Y"}},[t._v("EKF2_RNG_POS_Y")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_Z"}},[t._v("EKF2_RNG_POS_Z")]),t._v(" - 기체 무게 중심에서 X, Y, Z 방향의 오프셋")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_PITCH"}},[t._v("EKF2_RNG_PITCH")]),t._v(" - 0도 (기본값) 값은 기체 수직 축 (즉, 아래로 똑바로 아래)에 정확히 정렬된 거리 측정기에 해당하고, 90도는 거리 측정기가 앞을 향하고 있음을 나타냅니다. 0이 아닌 피치가 사용되는 경우 간단한 삼각법을 사용하여 지면까지의 거리를 계산합니다.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_DELAY"}},[t._v("EKF2_RNG_DELAY")]),t._v(" - 센서에서 추정기에 도달하는 데이터의 대략적인 지연.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_SFE"}},[t._v("EKF2_RNG_SFE")]),t._v(" - 범위 파인더 범위 종속 노이즈 스케일러.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_NOISE"}},[t._v("EKF2_RNG_NOISE")]),t._v(" - 거리 측정기 융합을 위한 측정 노이즈")],1)]),t._v(" "),e("h2",{attrs:{id:"시험"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#시험"}},[t._v("#")]),t._v(" 시험")]),t._v(" "),e("p",[t._v("거리계를 테스트하는 가장 간편한 방법은 범위를 변경하고 PX4에서 감지된 값과 비교하는 것입니다. 아래 섹션에서는 측정 범위를 측정하는 방법을 설명합니다.")]),t._v(" "),e("h3",{attrs:{id:"qgroundcontrol-mavlink-inspector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-inspector"}},[t._v("#")]),t._v(" QGroundControl MAVLink Inspector")]),t._v(" "),e("p",[t._v("The "),e("em",[t._v("QGroundControl MAVLink Inspector")]),t._v(" lets you view messages sent from the vehicle, including "),e("code",[t._v("DISTANCE_SENSOR")]),t._v(" information from the rangefinder. 도구 간의 주요 차이점은 "),e("em",[t._v("분석")]),t._v(" 도구에서 그래프를 지원하는 점입니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("전송되는 메시지는 차량 설정에 따라 달라집니다. 연결된 기체에 거리계가 설치되어 있고, 센서 값을 게시하는 경우에만 "),e("code",[t._v("DISTANCE_SENSOR")]),t._v(" 메시지가 표시됩니다.")])]),t._v(" "),e("p",[t._v("거리계 출력을 보려면 :")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Open the menu "),e("strong",[t._v("Q > Select Tool > Analyze Tools")]),t._v(":")]),t._v(" "),e("p",[e("img",{attrs:{src:r(1282),alt:"QGC 분석 도구 메뉴"}})])]),t._v(" "),e("li",[e("p",[t._v("Select the message "),e("code",[t._v("DISTANCE_SENSOR")]),t._v(", and then check the plot checkbox against "),e("code",[t._v("current_distance")]),t._v(". 그러면, 도구가 결과를 플로팅합니다. "),e("img",{attrs:{src:r(1283),alt:"QGC DISTANCE_SENSOR 값 분석"}})])])]),t._v(" "),e("h3",{attrs:{id:"qgroundcontrol-mavlink-콘솔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-콘솔"}},[t._v("#")]),t._v(" QGroundControl MAVLink 콘솔")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl MAVLink Console")]),t._v("을 사용하여 "),e("code",[t._v("distance_sensor")]),t._v(" uORB 토픽을 관찰할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("listener distance_sensor "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl MAVLink Console")]),t._v("은 Pixhawk 또는 다른 NuttX 타겟에 연결시 작동하지만 ,시뮬레이터에는 연결되지 않습니다. 시뮬레이터에서는 터미널에서 직접 명령을 실행할 수 있습니다.")])]),t._v(" "),e("p",[t._v("자세한 내용은 "),e("RouterLink",{attrs:{to:"/ko/debug/sensor_uorb_topic_debugging.html"}},[t._v("개발 > 디버깅/로깅 > 리스너 명령을 사용한 센서/토픽 디버깅")]),t._v("을 참고하십시오.")],1),t._v(" "),e("h2",{attrs:{id:"시뮬레이션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#시뮬레이션"}},[t._v("#")]),t._v(" 시뮬레이션")]),t._v(" "),e("p",[t._v("Lidar 및 소나 거리계는 "),e("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[t._v("Gazebo Simulator")]),t._v("에서 사용할 수 있습니다. 이렇게 하려면, 거리계가 포함된 기체 모델을 사용하여 시뮬레이터를 시작하여 합니다.")],1),t._v(" "),e("p",[t._v("광류 모델에는 Lidar 거리계가 포함됩니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo_iris_opt_flow\n")])])]),e("p",[t._v("typhoon_h480에는 소나 거리계가 포함되어 있습니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo_typhoon_h480\n")])])]),e("p",[t._v("다른 기체를 사용하는 경우에는 설정 파일에 모델을 포함할 수 있습니다. 각각의 Iris 및 Typhoon 설정 파일에서 방법을 확인할 수 있습니다.")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/models/iris_opt_flow/iris_opt_flow.sdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("iris_opt_flow.sdf"),e("OutboundLink")],1),t._v("\nxml\n"),e("include",[e("uri",[t._v("model://lidar")]),t._v(" "),e("pose",[t._v("-0.12 0 0 0 3.1415 0")])],1),t._v(" "),e("joint",{attrs:{name:"lidar_joint",type:"revolute"}},[e("child",[t._v("lidar::link")]),t._v(" "),e("parent",[t._v("iris::base_link")]),t._v(" "),e("axis",[e("xyz",[t._v("0 0 1")]),t._v(" "),e("limit",[e("upper",[t._v("0")]),t._v(" "),e("lower",[t._v("0")])],1)],1)],1)],1)]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/blob/master/models/typhoon_h480/typhoon_h480.sdf.jinja#L1131-L1145",target:"_blank",rel:"noopener noreferrer"}},[t._v("typhoon_h480.sdf"),e("OutboundLink")],1),t._v("\nxml\n"),e("include",[e("uri",[t._v("model://sonar")])],1),t._v(" "),e("joint",{attrs:{name:"sonar_joint",type:"revolute"}},[e("child",[t._v("sonar_model::link")]),t._v(" "),e("parent",[t._v("typhoon_h480::base_link")]),t._v(" "),e("axis",[e("xyz",[t._v("0 0 1")]),t._v(" "),e("limit",[e("upper",[t._v("0")]),t._v(" "),e("lower",[t._v("0")])],1)],1)],1)],1)])])])}),[],!1,null,null,null);a.default=_.exports},393:function(t,a,r){t.exports=r.p+"assets/img/lidar_lite_v3.7185119f.jpg"},394:function(t,a,r){t.exports=r.p+"assets/img/sf11c_120_m.6579362e.jpg"}}]);