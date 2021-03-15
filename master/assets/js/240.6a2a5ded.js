(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1289:function(t,a,e){t.exports=e.p+"assets/img/menu_analyze_tool.443a188f.png"},1290:function(t,a,e){t.exports=e.p+"assets/img/qgc_analyze_tool_distance_sensor.3dcaa49b.png"},1783:function(t,a,e){"use strict";e.r(a);var s=e(18),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"distance-sensors-rangefinders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distance-sensors-rangefinders"}},[t._v("#")]),t._v(" Distance Sensors (Rangefinders)")]),t._v(" "),s("p",[t._v("Distance sensors provide distance measurement that can be used for "),s("RouterLink",{attrs:{to:"/en/flying/terrain_following_holding.html#terrain_following"}},[t._v("terrain following")]),t._v(", "),s("RouterLink",{attrs:{to:"/en/flying/terrain_following_holding.html#terrain_hold"}},[t._v("terrain holding")]),t._v(" (i.e. precision hovering for photography), improved landing behaviour ("),s("RouterLink",{attrs:{to:"/en/flying/terrain_following_holding.html#range_aid"}},[t._v("range aid")]),t._v("), warning of regulatory height limits, collision prevention, etc.")],1),t._v(" "),s("p",[t._v("This section lists the distance sensors supported by PX4 (linked to more detailed documentation), the "),s("a",{attrs:{href:"#configuration"}},[t._v("generic configuration")]),t._v(" required for all rangefinders, "),s("a",{attrs:{href:"#testing"}},[t._v("testing")]),t._v(", and "),s("a",{attrs:{href:"#simulation"}},[t._v("simulation")]),t._v(" information.\nMore detailed setup and configuration information is provided in the topics linked below (and sidebar).")]),t._v(" "),s("p",[s("img",{attrs:{src:e(386),alt:"Lidar Lite V3",width:"200px"}}),s("img",{attrs:{src:e(387),alt:"LightWare SF11/C Lidar",width:"200px"}})]),t._v(" "),s("h2",{attrs:{id:"supported-rangefinders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-rangefinders"}},[t._v("#")]),t._v(" Supported Rangefinders")]),t._v(" "),s("h3",{attrs:{id:"lidar-lite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite"}},[t._v("#")]),t._v(" Lidar-Lite")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/sensor/lidar_lite.html"}},[t._v("Lidar-Lite")]),t._v(" is a compact, high-performance optical distant measurement rangefinder.\nIt has a sensor range from (5cm - 40m) and can be connected to either PWM or I2C ports.")],1),t._v(" "),s("h3",{attrs:{id:"maxbotix-i2cxl-maxsonar-ez"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maxbotix-i2cxl-maxsonar-ez"}},[t._v("#")]),t._v(" MaxBotix I2CXL-MaxSonar-EZ")]),t._v(" "),s("p",[t._v("The MaxBotix "),s("a",{attrs:{href:"https://www.maxbotix.com/product-category/i2cxl-maxsonar-ez-products",target:"_blank",rel:"noopener noreferrer"}},[t._v("I2CXL-MaxSonar-EZ"),s("OutboundLink")],1),t._v(" range has a number of relatively short-ranged sonar based rangefinders that are suitable for assisted takeoff/landing and collision avoidance.\nThese can be connected using an I2C port.")]),t._v(" "),s("p",[t._v("The rangefinders are enabled using the parameter "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_EN_MB12XX"}},[t._v("SENS_EN_MB12XX")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"lightware-lidars"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lightware-lidars"}},[t._v("#")]),t._v(" Lightware LIDARs")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/sensor/sfxx_lidar.html"}},[t._v("Lightware SFxx Lidar")]),t._v(' provide a broad range of lightweight "laser altimeters" that are suitable for many drone applications.')],1),t._v(" "),s("p",[t._v("PX4 supports: SF11/c and SF/LW20.\nPX4 can also be used with the following discontinued models: SF02, SF10/a, SF10/b, SF10/c.")]),t._v(" "),s("h3",{attrs:{id:"teraranger-rangefinders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teraranger-rangefinders"}},[t._v("#")]),t._v(" TeraRanger Rangefinders")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/sensor/teraranger.html"}},[t._v("TeraRanger")]),t._v(" provide a number of lightweight distance measurement sensors based on infrared Time-of-Flight (ToF) technology.\nThey are typically faster and have greater range than sonar, and smaller and lighter than laser-based systems.")],1),t._v(" "),s("p",[t._v("PX4 supports the following models connected via the I2C bus: TeraRanger One, TeraRanger Evo 60m and TeraRanger Evo 600Hz.")]),t._v(" "),s("h3",{attrs:{id:"ainstein-us-d1-standard-radar-altimeter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ainstein-us-d1-standard-radar-altimeter"}},[t._v("#")]),t._v(" Ainstein US-D1 Standard Radar Altimeter")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("Ainstein")]),t._v(" "),s("RouterLink",{attrs:{to:"/en/sensor/ulanding_radar.html"}},[t._v("US-D1 Standard Radar Altimeter")]),t._v(" is compact microwave rangefinder that has been optimised for use on UAVs.\nIt has a sensing range of around 50m.\nA particular advantages of this product are that it can operate effectively in all weather conditions and over all terrain types (including water).")],1),t._v(" "),s("h3",{attrs:{id:"leddarone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leddarone"}},[t._v("#")]),t._v(" LeddarOne")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/sensor/leddar_one.html"}},[t._v("LeddarOne")]),t._v(" is small Lidar module with a narrow, yet diffuse beam that offers excellent overall detection range and performance, in a robust, reliable, cost-effective package.\nIt has a sensing range from 1cm to 40m and needs to be connected to a UART/serial bus.")],1),t._v(" "),s("h3",{attrs:{id:"tfmini"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tfmini"}},[t._v("#")]),t._v(" TFmini")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/en/sensor/tfmini.html"}},[t._v("Benewake TFmini Lidar")]),t._v(" is a tiny, low cost, and low power LIDAR with 12m range.")],1),t._v(" "),s("h3",{attrs:{id:"psk-cm8jl65-cc5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#psk-cm8jl65-cc5"}},[t._v("#")]),t._v(" PSK-CM8JL65-CC5")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/en/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("Lanbao PSK-CM8JL65-CC5 ToF Infrared Distance Measuring Sensor")]),t._v(" is a very small (38 mm x 18mm x 7mm, <10g) IR distance sensor with a 0.17m-8m range and millimeter resolution.\nIt must be connected to a UART/serial bus.")],1),t._v(" "),s("h3",{attrs:{id:"avionics-anonymous-uavcan-laser-altimeter-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#avionics-anonymous-uavcan-laser-altimeter-interface"}},[t._v("#")]),t._v(" Avionics Anonymous UAVCAN Laser Altimeter Interface")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/en/sensor/avanon_laser_interface.html"}},[t._v("Avionics Anonymous UAVCAN Laser Altimeter Interface")]),t._v(" allows several common rangefinders (e.g. "),s("RouterLink",{attrs:{to:"/en/sensor/sfxx_lidar.html"}},[t._v("Lightware SF11/c, SF30/D")]),t._v(", etc) to be connected to the UAVCAN bus, a more robust interface than I2C.")],1),t._v(" "),s("p",[s("span",{attrs:{id:"configuration"}})]),t._v(" "),s("h2",{attrs:{id:"configuration-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-setup"}},[t._v("#")]),t._v(" Configuration/Setup")]),t._v(" "),s("p",[t._v("Rangefinders are usually connected to either a serial (PWM) or I2C port (depending on the device driver), and are enabled on the port by setting a particular parameter.")]),t._v(" "),s("p",[t._v("The hardware and software setup that is "),s("em",[t._v("specific to each distance sensor")]),t._v(" is covered in their individual topics.")]),t._v(" "),s("p",[t._v("The generic configuration that is "),s("em",[t._v("common to all distance sensors")]),t._v(", covering both the physical setup and usage, is given below.")]),t._v(" "),s("h3",{attrs:{id:"generic-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generic-configuration"}},[t._v("#")]),t._v(" Generic Configuration")]),t._v(" "),s("p",[t._v("The common rangefinder configuration is specified using "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_RNG_AID"}},[t._v("EKF2_RNG_*")]),t._v(" parameters.\nThese include (non exhaustively):")],1),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_RNG_POS_X"}},[t._v("EKF2_RNG_POS_X")]),t._v(", "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_RNG_POS_Y"}},[t._v("EKF2_RNG_POS_Y")]),t._v(", "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_RNG_POS_Z"}},[t._v("EKF2_RNG_POS_Z")]),t._v(" - offset of the rangefinder from the vehicle centre of gravity in X, Y, Z directions.")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_RNG_PITCH"}},[t._v("EKF2_RNG_PITCH")]),t._v(" - A value of 0 degrees (default) corresponds to the range finder being exactly aligned with the vehicle vertical axis (i.e. straight down), while 90 degrees indicates that the range finder is pointing forward.\nSimple trigonometry is used to calculate the distance to ground if a non-zero pitch is used.")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_RNG_DELAY"}},[t._v("EKF2_RNG_DELAY")]),t._v(" - approximate delay of data reaching the estimator from the sensor.")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_RNG_SFE"}},[t._v("EKF2_RNG_SFE")]),t._v(" - Range finder range dependant noise scaler.")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_RNG_NOISE"}},[t._v("EKF2_RNG_NOISE")]),t._v(" - Measurement noise for range finder fusion")],1)]),t._v(" "),s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),s("p",[t._v("The easiest way to test the rangefinder is to vary the range and compare to the values detected by PX4.\nThe sections below show some approaches to getting the measured range.")]),t._v(" "),s("h3",{attrs:{id:"qgroundcontrol-analyze-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-analyze-tool"}},[t._v("#")]),t._v(" QGroundControl Analyze Tool")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("QGroundControl Analyze Tool")]),t._v(" tool and "),s("em",[t._v("QGroundControl MAVLink Inspector")]),t._v(" let you view messages sent from the vehicle, including "),s("code",[t._v("DISTANCE_SENSOR")]),t._v(" information from the rangefinder.\nThe main difference between the tools is that the "),s("em",[t._v("Analyze")]),t._v(" tool can plot values in a graph.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The messages that are sent depend on the vehicle configuration.\nYou will only get "),s("code",[t._v("DISTANCE_SENSOR")]),t._v(" messages if the connected vehicle has a rangefinder installed and is publishing sensor values.")])]),t._v(" "),s("p",[t._v("To view the rangefinder output:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the menu "),s("strong",[t._v("Widgets > Analyze")]),t._v(":")]),t._v(" "),s("p",[s("img",{attrs:{src:e(1289),alt:"Menu for QGC Analyze Tool"}})])]),t._v(" "),s("li",[s("p",[t._v("Select the message "),s("code",[t._v("DISTANCE_SENSOR.current_value")]),t._v(". The tool will then plot the result:\n"),s("img",{attrs:{src:e(1290),alt:"QGC Analyze DISTANCE_SENSOR value"}})])])]),t._v(" "),s("h3",{attrs:{id:"qgroundcontrol-mavlink-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-console"}},[t._v("#")]),t._v(" QGroundControl MAVLink Console")]),t._v(" "),s("p",[t._v("You can also use the "),s("em",[t._v("QGroundControl MAVLink Console")]),t._v(" to observe the "),s("code",[t._v("distance_sensor")]),t._v(" uORB topic:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("listener distance_sensor "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("QGroundControl MAVLink Console")]),t._v(" works when connected to Pixhawk or other NuttX targets, but not the Simulator.\nOn the Simulator you can run the commands directly in the terminal.")])]),t._v(" "),s("p",[t._v("For more information see: "),s("RouterLink",{attrs:{to:"/en/debug/sensor_uorb_topic_debugging.html"}},[t._v("Development > Debugging/Logging > Sensor/Topic Debugging using the Listener Command")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simulation"}},[t._v("#")]),t._v(" Simulation")]),t._v(" "),s("p",[t._v("Lidar and sonar rangefinders can be used in the "),s("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo Simulator")]),t._v(".\nTo do this you must start the simulator using a vehicle model that includes the rangefinder.")],1),t._v(" "),s("p",[t._v("The iris optical flow model includes a Lidar rangefinder:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo_iris_opt_flow\n")])])]),s("p",[t._v("The typhoon_h480 includes a sonar rangefinder:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo_typhoon_h480\n")])])]),s("p",[t._v("If you need to use a different vehicle you can include the model in its configuration file.\nYou can see how in the respective Iris and Typhoon configuration files:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/models/iris_opt_flow/iris_opt_flow.sdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("iris_opt_flow.sdf"),s("OutboundLink")],1),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("model://sonar"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("joint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sonar_joint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("revolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sonar_model::link"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("typhoon_h480::base_link"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("axis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("xyz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0 0 1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("xyz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("limit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("upper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("upper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("lower")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("lower")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("limit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("axis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("joint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/models/typhoon_h480/typhoon_h480.sdf#L1144",target:"_blank",rel:"noopener noreferrer"}},[t._v("typhoon_h480.sdf"),s("OutboundLink")],1),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("model://lidar"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("-0.12 0 0 0 3.1415 0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("joint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lidar_joint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("revolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lidar::link"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("iris::base_link"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("axis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("xyz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0 0 1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("xyz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("limit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("upper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("upper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("lower")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("lower")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("limit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("axis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("joint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=n.exports},386:function(t,a,e){t.exports=e.p+"assets/img/lidar_lite_v3.7185119f.jpg"},387:function(t,a,e){t.exports=e.p+"assets/img/sf11c_120_m.6579362e.jpg"}}]);