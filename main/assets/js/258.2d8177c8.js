(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1505:function(t,a,s){t.exports=s.p+"assets/img/ark_flow_distance_sensor.6191f0e1.jpg"},1506:function(t,a,s){t.exports=s.p+"assets/img/menu_analyze_tool.160c3594.png"},1507:function(t,a,s){t.exports=s.p+"assets/img/qgc_analyze_tool_distance_sensor.3dbf6b43.png"},3028:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"거리-센서-거리-측정기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#거리-센서-거리-측정기"}},[t._v("#")]),t._v(" 거리 센서 (거리 측정기)")]),t._v(" "),e("p",[t._v("Distance sensors provide distance measurement that can be used for "),e("RouterLink",{attrs:{to:"/ko/flying/terrain_following_holding.html#terrain_following"}},[t._v("terrain following")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/flying/terrain_following_holding.html#terrain_hold"}},[t._v("terrain holding")]),t._v(" (i.e. precision hovering for photography), improved landing behaviour ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#conditional-range-aiding"}},[t._v("conditional range aid")]),t._v("), warning of regulatory height limits, collision prevention, etc.")],1),t._v(" "),e("p",[t._v("이 섹션에는 PX4에서 지원하는 거리 센서(더 자세한 문서에 링크됨), 모든 거리 측정기에 필요한 "),e("a",{attrs:{href:"#configuration"}},[t._v("일반 설정")]),t._v(", "),e("a",{attrs:{href:"#testing"}},[t._v("테스트")]),t._v("와 "),e("a",{attrs:{href:"#simulation"}},[t._v("시뮬레이션")]),t._v("을 설명합니다. 보다 자세한 설정과 정보는 아래 링크(및 사이드 바)를 참고하십시오.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(422),alt:"Lidar Lite V3",width:"200px"}}),e("img",{attrs:{src:s(423),alt:"LightWare SF11/C Lidar",width:"200px"}}),e("img",{attrs:{src:s(1505),alt:"ARK Flow\n",width:"200px"}})]),t._v(" "),e("h2",{attrs:{id:"지원되는-거리-측정기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지원되는-거리-측정기"}},[t._v("#")]),t._v(" 지원되는 거리 측정기")]),t._v(" "),e("h3",{attrs:{id:"ark-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[t._v("#")]),t._v(" ARK Flow")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/dronecan/ark_flow.html"}},[t._v("ARK Flow")]),t._v(" is an open-source Time-of-Flight (ToF) and optical flow sensor module, which is capable of measuring distances from 8cm to 30m. CAN1 포트를 통해 비행 콘트롤러에 연결할 수 있으므로, CAN2 포트를 통해 추가 센서를 연결할 수 있습니다. It supports "),e("RouterLink",{attrs:{to:"/ko/dronecan/"}},[t._v("DroneCAN")]),t._v(", runs "),e("RouterLink",{attrs:{to:"/ko/dronecan/px4_cannode_fw.html"}},[t._v("PX4 DroneCAN Firmware")]),t._v(", and is packed into a tiny form factor.")],1),t._v(" "),e("h3",{attrs:{id:"holybro-st-vl53l1x-lidar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#holybro-st-vl53l1x-lidar"}},[t._v("#")]),t._v(" Holybro ST VL53L1X Lidar")]),t._v(" "),e("p",[t._v("The "),e("a",{attrs:{href:"http://www.holybro.com/product/vl53l1x/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VL53L1X"),e("OutboundLink")],1),t._v(" is a state-of-the-art, Time-of-Flight (ToF), laser-ranging sensor, enhancing the ST FlightSense™ product family. 최대 4m의 정확한 범위와 최대 50Hz의 빠른 범위 주파수를 제공하는 시장에서 가장 빠른 소형 ToF 센서입니다.")]),t._v(" "),e("p",[t._v("It comes with a JST GHR 4 pin connector that is compatible with the I2C port on "),e("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk5x.html"}},[t._v("Pixhawk 5X")]),t._v(", and other flight controllers that follow the "),e("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),e("OutboundLink")],1),t._v(").")],1),t._v(" "),e("h3",{attrs:{id:"lidar-lite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite"}},[t._v("#")]),t._v(" Lidar-Lite")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/lidar_lite.html"}},[t._v("Lidar-Lite")]),t._v(" is a compact, high-performance optical distant measurement rangefinder. It has a sensor range from (5cm - 40m) and can be connected to either PWM or I2C ports.")],1),t._v(" "),e("h3",{attrs:{id:"maxbotix-i2cxl-maxsonar-ez"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxbotix-i2cxl-maxsonar-ez"}},[t._v("#")]),t._v(" MaxBotix I2CXL-MaxSonar-EZ")]),t._v(" "),e("p",[t._v("The MaxBotix "),e("a",{attrs:{href:"https://www.maxbotix.com/product-category/i2cxl-maxsonar-ez-products",target:"_blank",rel:"noopener noreferrer"}},[t._v("I2CXL-MaxSonar-EZ"),e("OutboundLink")],1),t._v(" range has a number of relatively short-ranged sonar based rangefinders that are suitable for assisted takeoff/landing and collision avoidance. These can be connected using an I2C port.")]),t._v(" "),e("p",[t._v("The rangefinders are enabled using the parameter "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_MB12XX"}},[t._v("SENS_EN_MB12XX")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"lightware-lidars"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lightware-lidars"}},[t._v("#")]),t._v(" Lightware LIDARs")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[t._v("Lightware SFxx Lidar")]),t._v(' provide a broad range of lightweight "laser altimeters" that are suitable for many drone applications.')],1),t._v(" "),e("p",[t._v("PX4 supports: SF11/c and SF/LW20. PX4 can also be used with the following discontinued models: SF02, SF10/a, SF10/b, SF10/c.")]),t._v(" "),e("h3",{attrs:{id:"teraranger-거리계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#teraranger-거리계"}},[t._v("#")]),t._v(" TeraRanger 거리계")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/teraranger.html"}},[t._v("TeraRanger")]),t._v(" provide a number of lightweight distance measurement sensors based on infrared Time-of-Flight (ToF) technology. They are typically faster and have greater range than sonar, and smaller and lighter than laser-based systems.")],1),t._v(" "),e("p",[t._v("PX4 supports the following models connected via the I2C bus: TeraRanger One, TeraRanger Evo 60m and TeraRanger Evo 600Hz.")]),t._v(" "),e("h3",{attrs:{id:"ainstein-us-d1-standard-radar-altimeter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ainstein-us-d1-standard-radar-altimeter"}},[t._v("#")]),t._v(" Ainstein US-D1 Standard Radar Altimeter")]),t._v(" "),e("p",[t._v("The "),e("em",[t._v("Ainstein")]),t._v(" "),e("RouterLink",{attrs:{to:"/ko/sensor/ulanding_radar.html"}},[t._v("US-D1 Standard Radar Altimeter")]),t._v(" is compact microwave rangefinder that has been optimised for use on UAVs. It has a sensing range of around 50m. A particular advantages of this product are that it can operate effectively in all weather conditions and over all terrain types (including water).")],1),t._v(" "),e("h3",{attrs:{id:"leddarone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#leddarone"}},[t._v("#")]),t._v(" LeddarOne")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/leddar_one.html"}},[t._v("LeddarOne")]),t._v(" is small Lidar module with a narrow, yet diffuse beam that offers excellent overall detection range and performance, in a robust, reliable, cost-effective package. It has a sensing range from 1cm to 40m and needs to be connected to a UART/serial bus.")],1),t._v(" "),e("h3",{attrs:{id:"tfmini"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tfmini"}},[t._v("#")]),t._v(" TFmini")]),t._v(" "),e("p",[t._v("The "),e("RouterLink",{attrs:{to:"/ko/sensor/tfmini.html"}},[t._v("Benewake TFmini Lidar")]),t._v(" is a tiny, low cost, and low power LIDAR with 12m range.")],1),t._v(" "),e("h3",{attrs:{id:"psk-cm8jl65-cc5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#psk-cm8jl65-cc5"}},[t._v("#")]),t._v(" PSK-CM8JL65-CC5")]),t._v(" "),e("p",[t._v("The "),e("RouterLink",{attrs:{to:"/ko/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("Lanbao PSK-CM8JL65-CC5 ToF Infrared Distance Measuring Sensor")]),t._v(" is a very small (38 mm x 18mm x 7mm, <10g) IR distance sensor with a 0.17m-8m range and millimeter resolution. It must be connected to a UART/serial bus.")],1),t._v(" "),e("h3",{attrs:{id:"avionics-anonymous-uavcan-laser-altimeter-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#avionics-anonymous-uavcan-laser-altimeter-interface"}},[t._v("#")]),t._v(" Avionics Anonymous UAVCAN Laser Altimeter Interface")]),t._v(" "),e("p",[t._v("The "),e("RouterLink",{attrs:{to:"/ko/dronecan/avanon_laser_interface.html"}},[t._v("Avionics Anonymous UAVCAN Laser Altimeter Interface")]),t._v(" allows several common rangefinders (e.g. "),e("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[t._v("Lightware SF11/c, SF30/D")]),t._v(", etc) to be connected to the "),e("RouterLink",{attrs:{to:"/ko/can/"}},[t._v("CAN")]),t._v(" bus via "),e("RouterLink",{attrs:{to:"/ko/dronecan/"}},[t._v("DroneCAN")]),t._v(", a more robust interface than I2C.")],1),t._v(" "),e("p",[e("span",{attrs:{id:"configuration"}})]),t._v(" "),e("h2",{attrs:{id:"설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),e("p",[t._v("Rangefinders are usually connected to either a serial (PWM) or I2C port (depending on the device driver), and are enabled on the port by setting a particular parameter.")]),t._v(" "),e("p",[t._v("The hardware and software setup that is "),e("em",[t._v("specific to each distance sensor")]),t._v(" is covered in their individual topics.")]),t._v(" "),e("p",[t._v("The generic configuration that is "),e("em",[t._v("common to all distance sensors")]),t._v(", covering both the physical setup and usage, is given below.")]),t._v(" "),e("h3",{attrs:{id:"일반-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#일반-설정"}},[t._v("#")]),t._v(" 일반 설정")]),t._v(" "),e("p",[t._v("The common rangefinder configuration is specified using "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_CTRL"}},[t._v("EKF2_RNG_*")]),t._v(" parameters. These include (non exhaustively):")],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_X"}},[t._v("EKF2_RNG_POS_X")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_Y"}},[t._v("EKF2_RNG_POS_Y")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_POS_Z"}},[t._v("EKF2_RNG_POS_Z")]),t._v(" - 기체 무게 중심에서 X, Y, Z 방향의 오프셋")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_PITCH"}},[t._v("EKF2_RNG_PITCH")]),t._v(" - 0도 (기본값) 값은 기체 수직 축 (즉, 아래로 똑바로 아래)에 정확히 정렬된 거리 측정기에 해당하고, 90도는 거리 측정기가 앞을 향하고 있음을 나타냅니다. 0이 아닌 피치가 사용되는 경우 간단한 삼각법을 사용하여 지면까지의 거리를 계산합니다.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_DELAY"}},[t._v("EKF2_RNG_DELAY")]),t._v(" - 센서에서 추정기에 도달하는 데이터의 대략적인 지연.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_SFE"}},[t._v("EKF2_RNG_SFE")]),t._v(" - Range finder range dependent noise scaler.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_NOISE"}},[t._v("EKF2_RNG_NOISE")]),t._v(" - 거리 측정기 융합을 위한 측정 노이즈")],1)]),t._v(" "),e("h2",{attrs:{id:"시험"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#시험"}},[t._v("#")]),t._v(" 시험")]),t._v(" "),e("p",[t._v("The easiest way to test the rangefinder is to vary the range and compare to the values detected by PX4. The sections below show some approaches to getting the measured range.")]),t._v(" "),e("h3",{attrs:{id:"qgroundcontrol-mavlink-inspector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-inspector"}},[t._v("#")]),t._v(" QGroundControl MAVLink Inspector")]),t._v(" "),e("p",[t._v("The "),e("em",[t._v("QGroundControl MAVLink Inspector")]),t._v(" lets you view messages sent from the vehicle, including "),e("code",[t._v("DISTANCE_SENSOR")]),t._v(" information from the rangefinder. The main difference between the tools is that the "),e("em",[t._v("Analyze")]),t._v(" tool can plot values in a graph.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("The messages that are sent depend on the vehicle configuration. You will only get "),e("code",[t._v("DISTANCE_SENSOR")]),t._v(" messages if the connected vehicle has a rangefinder installed and is publishing sensor values.")])]),t._v(" "),e("p",[t._v("To view the rangefinder output:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Open the menu "),e("strong",[t._v("Q > Select Tool > Analyze Tools")]),t._v(":")]),t._v(" "),e("p",[e("img",{attrs:{src:s(1506),alt:"QGC 분석 도구 메뉴"}})])]),t._v(" "),e("li",[e("p",[t._v("Select the message "),e("code",[t._v("DISTANCE_SENSOR")]),t._v(", and then check the plot checkbox against "),e("code",[t._v("current_distance")]),t._v(". 그러면, 도구가 결과를 플로팅합니다. "),e("img",{attrs:{src:s(1507),alt:"QGC DISTANCE_SENSOR 값 분석"}})])])]),t._v(" "),e("h3",{attrs:{id:"qgroundcontrol-mavlink-콘솔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-콘솔"}},[t._v("#")]),t._v(" QGroundControl MAVLink 콘솔")]),t._v(" "),e("p",[t._v("You can also use the "),e("em",[t._v("QGroundControl MAVLink Console")]),t._v(" to observe the "),e("code",[t._v("distance_sensor")]),t._v(" uORB topic:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("listener distance_sensor "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("The "),e("em",[t._v("QGroundControl MAVLink Console")]),t._v(" works when connected to Pixhawk or other NuttX targets, but not the Simulator. On the Simulator you can run the commands directly in the terminal.")])]),t._v(" "),e("p",[t._v("For more information see: "),e("RouterLink",{attrs:{to:"/ko/debug/sensor_uorb_topic_debugging.html"}},[t._v("Development > Debugging/Logging > Sensor/Topic Debugging using the Listener Command")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"시뮬레이션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#시뮬레이션"}},[t._v("#")]),t._v(" 시뮬레이션")]),t._v(" "),e("p",[t._v("Lidar and sonar rangefinders can be used in the "),e("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" simulator. To do this you must start the simulator using a vehicle model that includes the rangefinder.")],1),t._v(" "),e("p",[t._v("The iris optical flow model includes a Lidar rangefinder:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic_iris_opt_flow\n")])])]),e("p",[t._v("The typhoon_h480 includes a sonar rangefinder:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic_typhoon_h480\n")])])]),e("p",[t._v("If you need to use a different vehicle you can include the model in its configuration file. You can see how in the respective Iris and Typhoon configuration files:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/blob/master/models/iris_opt_flow/iris_opt_flow.sdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("iris_opt_flow.sdf"),e("OutboundLink")],1),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("include")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("model://lidar"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pose")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("-0.12 0 0 0 3.1415 0"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pose")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("include")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("joint")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lidar_joint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("revolute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lidar::link"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("iris::base_link"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("axis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("xyz")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0 0 1"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("xyz")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("limit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("upper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("upper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("lower")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("lower")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("limit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("axis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("joint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/blob/main/models/typhoon_h480/typhoon_h480.sdf.jinja#L1131-L1145",target:"_blank",rel:"noopener noreferrer"}},[t._v("typhoon_h480.sdf"),e("OutboundLink")],1),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("include")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("model://sonar"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("include")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("joint")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sonar_joint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("revolute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sonar_model::link"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("typhoon_h480::base_link"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("axis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("xyz")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0 0 1"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("xyz")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("limit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("upper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("upper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("lower")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("lower")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("limit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("axis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("joint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=n.exports},422:function(t,a,s){t.exports=s.p+"assets/img/lidar_lite_v3.7185119f.jpg"},423:function(t,a,s){t.exports=s.p+"assets/img/sf11c_120_m.6579362e.jpg"}}]);