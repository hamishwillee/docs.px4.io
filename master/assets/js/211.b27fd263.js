(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1295:function(e,t,a){e.exports=a.p+"assets/img/ark_flow_distance_sensor.6191f0e1.jpg"},1296:function(e,t,a){e.exports=a.p+"assets/img/menu_analyze_tool.160c3594.png"},1297:function(e,t,a){e.exports=a.p+"assets/img/qgc_analyze_tool_distance_sensor.3dbf6b43.png"},2660:function(e,t,a){"use strict";a.r(t);var r=a(19),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"거리-센서-거리-측정기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#거리-센서-거리-측정기"}},[e._v("#")]),e._v(" 거리 센서 (거리 측정기)")]),e._v(" "),r("p",[e._v("거리 센서는 "),r("RouterLink",{attrs:{to:"/ko/flying/terrain_following_holding.html#terrain_following"}},[e._v("지형 추적")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/flying/terrain_following_holding.html#terrain_hold"}},[e._v("지형 유지")]),e._v(" (예 : 사진 촬영을 위한 정밀 호버링), 향상된 착륙 동작("),r("RouterLink",{attrs:{to:"/ko/flying/terrain_following_holding.html#range_aid"}},[e._v("거리 지원")]),e._v("), 규제 높이 제한 경고, 충돌 방지 등에서 사용할 수있는 거리측정 기능을 제공합니다.")],1),e._v(" "),r("p",[e._v("이 섹션에는 PX4에서 지원하는 거리 센서(더 자세한 문서에 링크됨), 모든 거리 측정기에 필요한 "),r("a",{attrs:{href:"#configuration"}},[e._v("일반 설정")]),e._v(", "),r("a",{attrs:{href:"#testing"}},[e._v("테스트")]),e._v("와 "),r("a",{attrs:{href:"#simulation"}},[e._v("시뮬레이션")]),e._v("을 설명합니다. 보다 자세한 설정과 정보는 아래 링크(및 사이드 바)를 참고하십시오.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(395),alt:"Lidar Lite V3",width:"200px"}}),r("img",{attrs:{src:a(396),alt:"LightWare SF11/C Lidar",width:"200px"}}),r("img",{attrs:{src:a(1295),alt:"ARK Flow\n",width:"200px"}})]),e._v(" "),r("h2",{attrs:{id:"지원되는-거리-측정기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지원되는-거리-측정기"}},[e._v("#")]),e._v(" 지원되는 거리 측정기")]),e._v(" "),r("h3",{attrs:{id:"ark-flow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[e._v("#")]),e._v(" ARK Flow")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/uavcan/ark_flow.html"}},[e._v("ARK Flow")]),e._v("는 8cm에서 30m까지의 거리를 측정할 수 있는 오픈 소스 ToF(Time-of-Flight) 및 광학 흐름 센서 모듈입니다. CAN1 포트를 통해 비행 콘트롤러에 연결할 수 있으므로, CAN2 포트를 통해 추가 센서를 연결할 수 있습니다. PX4 펌웨어를 실행하고 "),r("RouterLink",{attrs:{to:"/ko/uavcan/"}},[e._v("UAVCAN")]),e._v(" "),r("RouterLink",{attrs:{to:"/ko/uavcan/node_firmware.html"}},[e._v("펌웨어 업데이트")]),e._v("를 지원하며 소형 폼 팩터에 담겨 있습니다.")],1),e._v(" "),r("h3",{attrs:{id:"holybro-st-vl53l1x-lidar"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#holybro-st-vl53l1x-lidar"}},[e._v("#")]),e._v(" Holybro ST VL53L1X Lidar")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"http://www.holybro.com/product/vl53l1x/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VL53L1X"),r("OutboundLink")],1),e._v(" is a state-of-the-art, Time-of-Flight (ToF), laser-ranging sensor, enhancing the ST FlightSense™ product family. 최대 4m의 정확한 범위와 최대 50Hz의 빠른 범위 주파수를 제공하는 시장에서 가장 빠른 소형 ToF 센서입니다.")]),e._v(" "),r("p",[e._v("It comes with a JST GHR 4 pin connector that is compatible with the I2C port on "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[e._v("Pixhawk 4")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk5x.html"}},[e._v("Pixhawk 5X")]),e._v(", and other flight controllers that follow the "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixhawk Connector Standard"),r("OutboundLink")],1),e._v(").")],1),e._v(" "),r("h3",{attrs:{id:"lidar-lite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite"}},[e._v("#")]),e._v(" Lidar-Lite")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/sensor/lidar_lite.html"}},[e._v("Lidar-Lite")]),e._v(" is a compact, high-performance optical distant measurement rangefinder. It has a sensor range from (5cm - 40m) and can be connected to either PWM or I2C ports.")],1),e._v(" "),r("h3",{attrs:{id:"maxbotix-i2cxl-maxsonar-ez"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#maxbotix-i2cxl-maxsonar-ez"}},[e._v("#")]),e._v(" MaxBotix I2CXL-MaxSonar-EZ")]),e._v(" "),r("p",[e._v("The MaxBotix "),r("a",{attrs:{href:"https://www.maxbotix.com/product-category/i2cxl-maxsonar-ez-products",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2CXL-MaxSonar-EZ"),r("OutboundLink")],1),e._v(" range has a number of relatively short-ranged sonar based rangefinders that are suitable for assisted takeoff/landing and collision avoidance. These can be connected using an I2C port.")]),e._v(" "),r("p",[e._v("The rangefinders are enabled using the parameter "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_MB12XX"}},[e._v("SENS_EN_MB12XX")]),e._v(".")],1),e._v(" "),r("h3",{attrs:{id:"lightware-lidars"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lightware-lidars"}},[e._v("#")]),e._v(" Lightware LIDARs")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[e._v("Lightware SFxx Lidar")]),e._v(' provide a broad range of lightweight "laser altimeters" that are suitable for many drone applications.')],1),e._v(" "),r("p",[e._v("PX4 supports: SF11/c and SF/LW20. PX4 can also be used with the following discontinued models: SF02, SF10/a, SF10/b, SF10/c.")]),e._v(" "),r("h3",{attrs:{id:"teraranger-거리계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#teraranger-거리계"}},[e._v("#")]),e._v(" TeraRanger 거리계")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/sensor/teraranger.html"}},[e._v("TeraRanger")]),e._v(" provide a number of lightweight distance measurement sensors based on infrared Time-of-Flight (ToF) technology. They are typically faster and have greater range than sonar, and smaller and lighter than laser-based systems.")],1),e._v(" "),r("p",[e._v("PX4 supports the following models connected via the I2C bus: TeraRanger One, TeraRanger Evo 60m and TeraRanger Evo 600Hz.")]),e._v(" "),r("h3",{attrs:{id:"ainstein-us-d1-standard-radar-altimeter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ainstein-us-d1-standard-radar-altimeter"}},[e._v("#")]),e._v(" Ainstein US-D1 Standard Radar Altimeter")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("Ainstein")]),e._v(" "),r("RouterLink",{attrs:{to:"/ko/sensor/ulanding_radar.html"}},[e._v("US-D1 Standard Radar Altimeter")]),e._v(" is compact microwave rangefinder that has been optimised for use on UAVs. It has a sensing range of around 50m. A particular advantages of this product are that it can operate effectively in all weather conditions and over all terrain types (including water).")],1),e._v(" "),r("h3",{attrs:{id:"leddarone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#leddarone"}},[e._v("#")]),e._v(" LeddarOne")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/sensor/leddar_one.html"}},[e._v("LeddarOne")]),e._v(" is small Lidar module with a narrow, yet diffuse beam that offers excellent overall detection range and performance, in a robust, reliable, cost-effective package. It has a sensing range from 1cm to 40m and needs to be connected to a UART/serial bus.")],1),e._v(" "),r("h3",{attrs:{id:"tfmini"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tfmini"}},[e._v("#")]),e._v(" TFmini")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/ko/sensor/tfmini.html"}},[e._v("Benewake TFmini Lidar")]),e._v(" is a tiny, low cost, and low power LIDAR with 12m range.")],1),e._v(" "),r("h3",{attrs:{id:"psk-cm8jl65-cc5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#psk-cm8jl65-cc5"}},[e._v("#")]),e._v(" PSK-CM8JL65-CC5")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/ko/sensor/cm8jl65_ir_distance_sensor.html"}},[e._v("Lanbao PSK-CM8JL65-CC5 ToF Infrared Distance Measuring Sensor")]),e._v(" is a very small (38 mm x 18mm x 7mm, <10g) IR distance sensor with a 0.17m-8m range and millimeter resolution. It must be connected to a UART/serial bus.")],1),e._v(" "),r("h3",{attrs:{id:"avionics-anonymous-uavcan-laser-altimeter-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#avionics-anonymous-uavcan-laser-altimeter-interface"}},[e._v("#")]),e._v(" Avionics Anonymous UAVCAN Laser Altimeter Interface")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/ko/uavcan/avanon_laser_interface.html"}},[e._v("Avionics Anonymous UAVCAN Laser Altimeter Interface")]),e._v(" allows several common rangefinders (e.g. "),r("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[e._v("Lightware SF11/c, SF30/D")]),e._v(", etc) to be connected to the "),r("RouterLink",{attrs:{to:"/ko/uavcan/"}},[e._v("UAVCAN")]),e._v(" bus, a more robust interface than I2C.")],1),e._v(" "),r("p",[r("span",{attrs:{id:"configuration"}})]),e._v(" "),r("h2",{attrs:{id:"설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[e._v("#")]),e._v(" 설정")]),e._v(" "),r("p",[e._v("Rangefinders are usually connected to either a serial (PWM) or I2C port (depending on the device driver), and are enabled on the port by setting a particular parameter.")]),e._v(" "),r("p",[e._v("The hardware and software setup that is "),r("em",[e._v("specific to each distance sensor")]),e._v(" is covered in their individual topics.")]),e._v(" "),r("p",[e._v("The generic configuration that is "),r("em",[e._v("common to all distance sensors")]),e._v(", covering both the physical setup and usage, is given below.")]),e._v(" "),r("h3",{attrs:{id:"일반-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#일반-설정"}},[e._v("#")]),e._v(" 일반 설정")]),e._v(" "),r("p",[e._v("The common rangefinder configuration is specified using "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_AID"}},[e._v("EKF2*RNG**")]),e._v(" parameters. These include (non exhaustively):")],1),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_X"}},[e._v("EKF2_RNG_POS_X")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_Y"}},[e._v("EKF2_RNG_POS_Y")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_Z"}},[e._v("EKF2_RNG_POS_Z")]),e._v(" - 기체 무게 중심에서 X, Y, Z 방향의 오프셋")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_PITCH"}},[e._v("EKF2_RNG_PITCH")]),e._v(" - 0도 (기본값) 값은 기체 수직 축 (즉, 아래로 똑바로 아래)에 정확히 정렬된 거리 측정기에 해당하고, 90도는 거리 측정기가 앞을 향하고 있음을 나타냅니다. 0이 아닌 피치가 사용되는 경우 간단한 삼각법을 사용하여 지면까지의 거리를 계산합니다.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_DELAY"}},[e._v("EKF2_RNG_DELAY")]),e._v(" - 센서에서 추정기에 도달하는 데이터의 대략적인 지연.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_SFE"}},[e._v("EKF2_RNG_SFE")]),e._v(" - 범위 파인더 범위 종속 노이즈 스케일러.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_NOISE"}},[e._v("EKF2_RNG_NOISE")]),e._v(" - 거리 측정기 융합을 위한 측정 노이즈")],1)]),e._v(" "),r("h2",{attrs:{id:"시험"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시험"}},[e._v("#")]),e._v(" 시험")]),e._v(" "),r("p",[e._v("The easiest way to test the rangefinder is to vary the range and compare to the values detected by PX4. The sections below show some approaches to getting the measured range.")]),e._v(" "),r("h3",{attrs:{id:"qgroundcontrol-mavlink-inspector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-inspector"}},[e._v("#")]),e._v(" QGroundControl MAVLink Inspector")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("QGroundControl MAVLink Inspector")]),e._v(" lets you view messages sent from the vehicle, including "),r("code",[e._v("DISTANCE_SENSOR")]),e._v(" information from the rangefinder. The main difference between the tools is that the "),r("em",[e._v("Analyze")]),e._v(" tool can plot values in a graph.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("The messages that are sent depend on the vehicle configuration. You will only get "),r("code",[e._v("DISTANCE_SENSOR")]),e._v(" messages if the connected vehicle has a rangefinder installed and is publishing sensor values.")])]),e._v(" "),r("p",[e._v("To view the rangefinder output:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Open the menu "),r("strong",[e._v("Q > Select Tool > Analyze Tools")]),e._v(":")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1296),alt:"QGC 분석 도구 메뉴"}})])]),e._v(" "),r("li",[r("p",[e._v("Select the message "),r("code",[e._v("DISTANCE_SENSOR")]),e._v(", and then check the plot checkbox against "),r("code",[e._v("current_distance")]),e._v(". 그러면, 도구가 결과를 플로팅합니다. "),r("img",{attrs:{src:a(1297),alt:"QGC DISTANCE_SENSOR 값 분석"}})])])]),e._v(" "),r("h3",{attrs:{id:"qgroundcontrol-mavlink-콘솔"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-콘솔"}},[e._v("#")]),e._v(" QGroundControl MAVLink 콘솔")]),e._v(" "),r("p",[e._v("You can also use the "),r("em",[e._v("QGroundControl MAVLink Console")]),e._v(" to observe the "),r("code",[e._v("distance_sensor")]),e._v(" uORB topic:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("listener distance_sensor "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n")])])]),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("QGroundControl MAVLink Console")]),e._v(" works when connected to Pixhawk or other NuttX targets, but not the Simulator. On the Simulator you can run the commands directly in the terminal.")])]),e._v(" "),r("p",[e._v("For more information see: "),r("RouterLink",{attrs:{to:"/ko/debug/sensor_uorb_topic_debugging.html"}},[e._v("Development > Debugging/Logging > Sensor/Topic Debugging using the Listener Command")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"시뮬레이션"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시뮬레이션"}},[e._v("#")]),e._v(" 시뮬레이션")]),e._v(" "),r("p",[e._v("Lidar and sonar rangefinders can be used in the "),r("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[e._v("Gazebo Simulator")]),e._v(". To do this you must start the simulator using a vehicle model that includes the rangefinder.")],1),e._v(" "),r("p",[e._v("The iris optical flow model includes a Lidar rangefinder:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gazebo_iris_opt_flow\n")])])]),r("p",[e._v("The typhoon_h480 includes a sonar rangefinder:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gazebo_typhoon_h480\n")])])]),r("p",[e._v("If you need to use a different vehicle you can include the model in its configuration file. You can see how in the respective Iris and Typhoon configuration files:")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/models/iris_opt_flow/iris_opt_flow.sdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("iris_opt_flow.sdf"),r("OutboundLink")],1),e._v("\nxml\n"),r("include",[r("uri",[e._v("model://lidar")]),e._v(" "),r("pose",[e._v("-0.12 0 0 0 3.1415 0")])],1),e._v(" "),r("joint",{attrs:{name:"lidar_joint",type:"revolute"}},[r("child",[e._v("lidar::link")]),e._v(" "),r("parent",[e._v("iris::base_link")]),e._v(" "),r("axis",[r("xyz",[e._v("0 0 1")]),e._v(" "),r("limit",[r("upper",[e._v("0")]),e._v(" "),r("lower",[e._v("0")])],1)],1)],1)],1)]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/blob/master/models/typhoon_h480/typhoon_h480.sdf.jinja#L1131-L1145",target:"_blank",rel:"noopener noreferrer"}},[e._v("typhoon_h480.sdf"),r("OutboundLink")],1),e._v("\nxml\n"),r("include",[r("uri",[e._v("model://sonar")])],1),e._v(" "),r("joint",{attrs:{name:"sonar_joint",type:"revolute"}},[r("child",[e._v("sonar_model::link")]),e._v(" "),r("parent",[e._v("typhoon_h480::base_link")]),e._v(" "),r("axis",[r("xyz",[e._v("0 0 1")]),e._v(" "),r("limit",[r("upper",[e._v("0")]),e._v(" "),r("lower",[e._v("0")])],1)],1)],1)],1)])])])}),[],!1,null,null,null);t.default=n.exports},395:function(e,t,a){e.exports=a.p+"assets/img/lidar_lite_v3.7185119f.jpg"},396:function(e,t,a){e.exports=a.p+"assets/img/sf11c_120_m.6579362e.jpg"}}]);