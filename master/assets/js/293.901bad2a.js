(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1334:function(e,t,a){e.exports=a.p+"assets/img/menu_analyze_tool.443a188f.png"},1335:function(e,t,a){e.exports=a.p+"assets/img/qgc_analyze_tool_distance_sensor.3dcaa49b.png"},2596:function(e,t,a){"use strict";a.r(t);var r=a(18),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"distance-sensors-rangefinders"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#distance-sensors-rangefinders"}},[e._v("#")]),e._v(" Distance Sensors (Rangefinders)")]),e._v(" "),r("p",[e._v("Distance sensors provide distance measurement that can be used for "),r("RouterLink",{attrs:{to:"/zh/flying/terrain_following_holding.html#terrain_following"}},[e._v("terrain following")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/flying/terrain_following_holding.html#terrain_hold"}},[e._v("terrain holding")]),e._v(" (i.e. precision hovering for photography), improved landing behaviour ("),r("RouterLink",{attrs:{to:"/zh/flying/terrain_following_holding.html#range_aid"}},[e._v("range aid")]),e._v("), warning of regulatory height limits, collision prevention, etc.")],1),e._v(" "),r("p",[e._v("This section lists the distance sensors supported by PX4 (linked to more detailed documentation), the "),r("a",{attrs:{href:"#configuration"}},[e._v("generic configuration")]),e._v(" required for all rangefinders, "),r("a",{attrs:{href:"#testing"}},[e._v("testing")]),e._v(", and "),r("a",{attrs:{href:"#simulation"}},[e._v("simulation")]),e._v(" information. More detailed setup and configuration information is provided in the topics linked below (and sidebar).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(377),alt:"Lidar Lite V3",width:"200px"}}),r("img",{attrs:{src:a(378),alt:"LightWare SF11/C Lidar",width:"200px"}})]),e._v(" "),r("h2",{attrs:{id:"supported-rangefinders"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-rangefinders"}},[e._v("#")]),e._v(" Supported Rangefinders")]),e._v(" "),r("h3",{attrs:{id:"lidar-lite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite"}},[e._v("#")]),e._v(" Lidar-Lite")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/sensor/lidar_lite.html"}},[e._v("Lidar-Lite")]),e._v(" is a compact, high-performance optical distant measurement rangefinder. It has a sensor range from (5cm - 40m) and can be connected to either PWM or I2C ports.")],1),e._v(" "),r("h3",{attrs:{id:"maxbotix-i2cxl-maxsonar-ez"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#maxbotix-i2cxl-maxsonar-ez"}},[e._v("#")]),e._v(" MaxBotix I2CXL-MaxSonar-EZ")]),e._v(" "),r("p",[e._v("The MaxBotix "),r("a",{attrs:{href:"https://www.maxbotix.com/product-category/i2cxl-maxsonar-ez-products",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2CXL-MaxSonar-EZ"),r("OutboundLink")],1),e._v(" range has a number of relatively short-ranged sonar based rangefinders that are suitable for assisted takeoff/landing and collision avoidance. These can be connected using an I2C port.")]),e._v(" "),r("p",[e._v("The rangefinders are enabled using the parameter "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_MB12XX"}},[e._v("SENS_EN_MB12XX")]),e._v(".")],1),e._v(" "),r("h3",{attrs:{id:"lightware-lidars"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lightware-lidars"}},[e._v("#")]),e._v(" Lightware LIDARs")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/sensor/sfxx_lidar.html"}},[e._v("Lightware SFxx Lidar")]),e._v(' provide a broad range of lightweight "laser altimeters" that are suitable for many drone applications.')],1),e._v(" "),r("p",[e._v("PX4 supports: SF11/c and SF/LW20. PX4 can also be used with the following discontinued models: SF02, SF10/a, SF10/b, SF10/c.")]),e._v(" "),r("h3",{attrs:{id:"teraranger-rangefinders"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#teraranger-rangefinders"}},[e._v("#")]),e._v(" TeraRanger Rangefinders")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/sensor/teraranger.html"}},[e._v("TeraRanger")]),e._v(" provide a number of lightweight distance measurement sensors based on infrared Time-of-Flight (ToF) technology. They are typically faster and have greater range than sonar, and smaller and lighter than laser-based systems.")],1),e._v(" "),r("p",[e._v("PX4 supports the following models connected via the I2C bus: TeraRanger One, TeraRanger Evo 60m and TeraRanger Evo 600Hz.")]),e._v(" "),r("h3",{attrs:{id:"ainstein-us-d1-standard-radar-altimeter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ainstein-us-d1-standard-radar-altimeter"}},[e._v("#")]),e._v(" Ainstein US-D1 Standard Radar Altimeter")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("Ainstein")]),e._v(" "),r("RouterLink",{attrs:{to:"/zh/sensor/ulanding_radar.html"}},[e._v("US-D1 Standard Radar Altimeter")]),e._v(" is compact microwave rangefinder that has been optimised for use on UAVs. It has a sensing range of around 50m. A particular advantages of this product are that it can operate effectively in all weather conditions and over all terrain types (including water).")],1),e._v(" "),r("h3",{attrs:{id:"leddarone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#leddarone"}},[e._v("#")]),e._v(" LeddarOne")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/sensor/leddar_one.html"}},[e._v("LeddarOne")]),e._v(" is small Lidar module with a narrow, yet diffuse beam that offers excellent overall detection range and performance, in a robust, reliable, cost-effective package. It has a sensing range from 1cm to 40m and needs to be connected to a UART/serial bus.")],1),e._v(" "),r("h3",{attrs:{id:"tfmini"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tfmini"}},[e._v("#")]),e._v(" TFmini")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/zh/sensor/tfmini.html"}},[e._v("Benewake TFmini Lidar")]),e._v(" is a tiny, low cost, and low power LIDAR with 12m range.")],1),e._v(" "),r("h3",{attrs:{id:"psk-cm8jl65-cc5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#psk-cm8jl65-cc5"}},[e._v("#")]),e._v(" PSK-CM8JL65-CC5")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/zh/sensor/cm8jl65_ir_distance_sensor.html"}},[e._v("Lanbao PSK-CM8JL65-CC5 ToF Infrared Distance Measuring Sensor")]),e._v(" is a very small (38 mm x 18mm x 7mm, <10g) IR distance sensor with a 0.17m-8m range and millimeter resolution. It must be connected to a UART/serial bus.")],1),e._v(" "),r("h3",{attrs:{id:"avionics-anonymous-uavcan-laser-altimeter-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#avionics-anonymous-uavcan-laser-altimeter-interface"}},[e._v("#")]),e._v(" Avionics Anonymous UAVCAN Laser Altimeter Interface")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/zh/sensor/avanon_laser_interface.html"}},[e._v("Avionics Anonymous UAVCAN Laser Altimeter Interface")]),e._v(" allows several common rangefinders (e.g. "),r("RouterLink",{attrs:{to:"/zh/sensor/sfxx_lidar.html"}},[e._v("Lightware SF11/c, SF30/D")]),e._v(", etc) to be connected to the UAVCAN bus, a more robust interface than I2C.")],1),e._v(" "),r("p",[r("span",{attrs:{id:"configuration"}})]),e._v(" "),r("h2",{attrs:{id:"configuration-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration-setup"}},[e._v("#")]),e._v(" Configuration/Setup")]),e._v(" "),r("p",[e._v("Rangefinders are usually connected to either a serial (PWM) or I2C port (depending on the device driver), and are enabled on the port by setting a particular parameter.")]),e._v(" "),r("p",[e._v("The hardware and software setup that is "),r("em",[e._v("specific to each distance sensor")]),e._v(" is covered in their individual topics.")]),e._v(" "),r("p",[e._v("The generic configuration that is "),r("em",[e._v("common to all distance sensors")]),e._v(", covering both the physical setup and usage, is given below.")]),e._v(" "),r("h3",{attrs:{id:"generic-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generic-configuration"}},[e._v("#")]),e._v(" Generic Configuration")]),e._v(" "),r("p",[e._v("The common rangefinder configuration is specified using "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_AID"}},[e._v("EKF2*RNG**")]),e._v(" parameters. These include (non exhaustively):")],1),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_X"}},[e._v("EKF2_RNG_POS_X")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_Y"}},[e._v("EKF2_RNG_POS_Y")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_Z"}},[e._v("EKF2_RNG_POS_Z")]),e._v(" - offset of the rangefinder from the vehicle centre of gravity in X, Y, Z directions.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_PITCH"}},[e._v("EKF2_RNG_PITCH")]),e._v(" - A value of 0 degrees (default) corresponds to the range finder being exactly aligned with the vehicle vertical axis (i.e. straight down), while 90 degrees indicates that the range finder is pointing forward. Simple trigonometry is used to calculate the distance to ground if a non-zero pitch is used.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_DELAY"}},[e._v("EKF2_RNG_DELAY")]),e._v(" - approximate delay of data reaching the estimator from the sensor.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_SFE"}},[e._v("EKF2_RNG_SFE")]),e._v(" - Range finder range dependant noise scaler.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_NOISE"}},[e._v("EKF2_RNG_NOISE")]),e._v(" - Measurement noise for range finder fusion")],1)]),e._v(" "),r("h2",{attrs:{id:"测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[e._v("#")]),e._v(" 测试")]),e._v(" "),r("p",[e._v("The easiest way to test the rangefinder is to vary the range and compare to the values detected by PX4. The sections below show some approaches to getting the measured range.")]),e._v(" "),r("h3",{attrs:{id:"qgroundcontrol-analyze-tool"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-analyze-tool"}},[e._v("#")]),e._v(" QGroundControl Analyze Tool")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("QGroundControl Analyze Tool")]),e._v(" tool and "),r("em",[e._v("QGroundControl MAVLink Inspector")]),e._v(" let you view messages sent from the vehicle, including "),r("code",[e._v("DISTANCE_SENSOR")]),e._v(" information from the rangefinder. The main difference between the tools is that the "),r("em",[e._v("Analyze")]),e._v(" tool can plot values in a graph.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("The messages that are sent depend on the vehicle configuration. You will only get "),r("code",[e._v("DISTANCE_SENSOR")]),e._v(" messages if the connected vehicle has a rangefinder installed and is publishing sensor values.")])]),e._v(" "),r("p",[e._v("To view the rangefinder output:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Open the menu "),r("strong",[e._v("Widgets > Analyze")]),e._v(":")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1334),alt:"Menu for QGC Analyze Tool"}})])]),e._v(" "),r("li",[r("p",[e._v("Select the message "),r("code",[e._v("DISTANCE_SENSOR.current_value")]),e._v(". The tool will then plot the result: "),r("img",{attrs:{src:a(1335),alt:"QGC Analyze DISTANCE_SENSOR value"}})])])]),e._v(" "),r("h3",{attrs:{id:"qgroundcontrol-mavlink-console"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-console"}},[e._v("#")]),e._v(" QGroundControl MAVLink Console")]),e._v(" "),r("p",[e._v("You can also use the "),r("em",[e._v("QGroundControl MAVLink Console")]),e._v(" to observe the "),r("code",[e._v("distance_sensor")]),e._v(" uORB topic:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("listener distance_sensor "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n")])])]),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("QGroundControl MAVLink Console")]),e._v(" works when connected to Pixhawk or other NuttX targets, but not the Simulator. On the Simulator you can run the commands directly in the terminal.")])]),e._v(" "),r("p",[e._v("For more information see: "),r("RouterLink",{attrs:{to:"/zh/debug/sensor_uorb_topic_debugging.html"}},[e._v("Development > Debugging/Logging > Sensor/Topic Debugging using the Listener Command")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"仿真"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#仿真"}},[e._v("#")]),e._v(" 仿真")]),e._v(" "),r("p",[e._v("Lidar and sonar rangefinders can be used in the "),r("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[e._v("Gazebo Simulator")]),e._v(". To do this you must start the simulator using a vehicle model that includes the rangefinder.")],1),e._v(" "),r("p",[e._v("The iris optical flow model includes a Lidar rangefinder:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gazebo_iris_opt_flow\n")])])]),r("p",[e._v("The typhoon_h480 includes a sonar rangefinder:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gazebo_typhoon_h480\n")])])]),r("p",[e._v("If you need to use a different vehicle you can include the model in its configuration file. You can see how in the respective Iris and Typhoon configuration files:")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/models/iris_opt_flow/iris_opt_flow.sdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("iris_opt_flow.sdf"),r("OutboundLink")],1),e._v('\nxml\n<include>\n<uri>model://sonar</uri>\n</include>\n<joint name="sonar_joint" type="revolute">\n<child>sonar_model::link</child>\n<parent>typhoon_h480::base_link</parent>\n<axis>\n<xyz>0 0 1</xyz>\n<limit>\n<upper>0</upper>\n<lower>0</lower>\n</limit>\n</axis>\n</joint>')])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/models/typhoon_h480/typhoon_h480.sdf#L1144",target:"_blank",rel:"noopener noreferrer"}},[e._v("typhoon_h480.sdf"),r("OutboundLink")],1),e._v('\nxml\n<include>\n<uri>model://lidar</uri>\n<pose>-0.12 0 0 0 3.1415 0</pose>\n</include>\n<joint name="lidar_joint" type="revolute">\n<child>lidar::link</child>\n<parent>iris::base_link</parent>\n<axis>\n<xyz>0 0 1</xyz>\n<limit>\n<upper>0</upper>\n<lower>0</lower>\n</limit>\n</axis>\n</joint>')])])])])}),[],!1,null,null,null);t.default=n.exports},377:function(e,t,a){e.exports=a.p+"assets/img/lidar_lite_v3.7185119f.jpg"},378:function(e,t,a){e.exports=a.p+"assets/img/sf11c_120_m.6579362e.jpg"}}]);