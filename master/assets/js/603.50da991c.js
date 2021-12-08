(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{2125:function(e,t,a){"use strict";a.r(t);var i=a(19),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"정밀-착륙"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#정밀-착륙"}},[e._v("#")]),e._v(" 정밀 착륙")]),e._v(" "),i("p",[e._v("PX4 supports precision landing for "),i("em",[e._v("multicopters")]),e._v(" on either stationary or moving targets. The target may be provided by an onboard IR sensor and a landing beacon, or by an offboard positioning system.")]),e._v(" "),i("p",[e._v("Precision landing can be "),i("a",{attrs:{href:"#initiating-a-precision-landing"}},[e._v("started/initiated")]),e._v(" as part of a "),i("a",{attrs:{href:"#mission"}},[e._v("mission")]),e._v(", in a "),i("a",{attrs:{href:"#return-mode-precision-landing"}},[e._v("Return mode")]),e._v(" landing, or by entering the "),i("a",{attrs:{href:"#precision-landing-flight-mode"}},[i("em",[e._v("Precision Land")]),e._v(" flight mode")]),e._v(".")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Precision landing is only possible with a valid global position (due to a limitation in the current implementation of the position controller).")])]),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("h3",{attrs:{id:"land-modes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#land-modes"}},[e._v("#")]),e._v(" Land Modes")]),e._v(" "),i("p",[e._v('A precision landing can be configured to either be "required" or "opportunistic". The choice of mode affects how a precision landing is performed.')]),e._v(" "),i("h4",{attrs:{id:"required-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-mode"}},[e._v("#")]),e._v(" Required Mode")]),e._v(" "),i("p",[e._v("In "),i("em",[e._v("Required Mode")]),e._v(" the vehicle will search for a target if none is visible when landing is initiated. The vehicle will perform a precision landing if a target is located.")]),e._v(" "),i("p",[e._v("The search procedure consists of climbing to the search altitude ("),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_SRCH_ALT"}},[e._v("PLD_SRCH_ALT")]),e._v("). If the target is still not visible at the search altitude and after a search timeout ("),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_SRCH_TOUT"}},[e._v("PLD_SRCH_TOUT")]),e._v("), a normal landing is initiated at the current position.")],1),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("If using an offboard positioning system PX4 assumes that the target is visible when it is recieving MAVLink "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#LANDING_TARGET",target:"_blank",rel:"noopener noreferrer"}},[e._v("LANDING_TARGET"),i("OutboundLink")],1),e._v(" messages.")])]),e._v(" "),i("h4",{attrs:{id:"opportunistic-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#opportunistic-mode"}},[e._v("#")]),e._v(" Opportunistic Mode")]),e._v(" "),i("p",[e._v("In "),i("em",[e._v("Opportunistic Mode")]),e._v(" the vehicle will use precision landing "),i("em",[e._v("if")]),e._v(" (and only if) the target is visible when landing is initiated. If it is not visible the vehicle immediately performs a "),i("em",[e._v("normal")]),e._v(" landing at the current position.")]),e._v(" "),i("h3",{attrs:{id:"landing-phases"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#landing-phases"}},[e._v("#")]),e._v(" Landing Phases")]),e._v(" "),i("p",[e._v("A precision landing has three phases:")]),e._v(" "),i("ol",[i("li",[i("p",[i("strong",[e._v("Horizontal approach:")]),e._v(" The vehicle approaches the target horizontally while keeping its current altitude. Once the position of the target relative to the vehicle is below a threshold ("),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_HACC_RAD"}},[e._v("PLD_HACC_RAD")]),e._v("), the next phase is entered. If the target is lost during this phase (not visible for longer than "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_BTOUT"}},[e._v("PLD_BTOUT")]),e._v("), a search procedure is initiated (during a required precision landing) or the vehicle does a normal landing (during an opportunistic precision landing).")],1)]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Descent over target:")]),e._v(" The vehicle descends, while remaining centered over the target. If the target is lost during this phase (not visible for longer than "),i("code",[e._v("PLD_BTOUT")]),e._v("), a search procedure is initiated (during a required precision landing) or the vehicle does a normal landing (during an opportunistic precision landing).")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Final approach:")]),e._v(" When the vehicle is close to the ground (closer than "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_FAPPR_ALT"}},[e._v("PLD_FAPPR_ALT")]),e._v("), it descends while remaining centered over the target. If the target is lost during this phase, the descent is continued independent of the kind of precision landing.")],1)])]),e._v(" "),i("p",[e._v("Search procedures are initiated in the first and second steps, and will run at most "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_MAX_SRCH"}},[e._v("PLD_MAX_SRCH")]),e._v(" times. Landing Phases Flow Diagram")],1),e._v(" "),i("p",[e._v("A flow diagram showing the phases can be found in "),i("a",{attrs:{href:"#landing-phases-flow-diagram"}},[e._v("landing phases flow Diagram")]),e._v(" below.")]),e._v(" "),i("h2",{attrs:{id:"initiating-a-precision-landing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#initiating-a-precision-landing"}},[e._v("#")]),e._v(" Initiating a Precision Landing")]),e._v(" "),i("p",[e._v("Precision landing can be used in missions, during the landing phase in "),i("em",[e._v("Return mode")]),e._v(", or by entering the "),i("em",[e._v("Precision Land")]),e._v(" mode.")]),e._v(" "),i("p",[i("span",{attrs:{id:"mission"}})]),e._v(" "),i("h3",{attrs:{id:"mission-precision-landing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mission-precision-landing"}},[e._v("#")]),e._v(" Mission Precision Landing")]),e._v(" "),i("p",[e._v("Precision landing can be initiated as part of a "),i("RouterLink",{attrs:{to:"/ko/flying/missions.html"}},[e._v("mission")]),e._v(" using "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_NAV_LAND"),i("OutboundLink")],1),e._v(" with "),i("code",[e._v("param2")]),e._v(" set appropriately:")],1),e._v(" "),i("ul",[i("li",[i("code",[e._v("0")]),e._v(": Normal landing without using the target.")]),e._v(" "),i("li",[i("code",[e._v("1")]),e._v(": "),i("a",{attrs:{href:"#opportunistic-mode"}},[e._v("Opportunistic")]),e._v(" precision landing.")]),e._v(" "),i("li",[i("code",[e._v("2")]),e._v(": "),i("a",{attrs:{href:"#required-mode"}},[e._v("Required")]),e._v(" precision landing.")])]),e._v(" "),i("h3",{attrs:{id:"return-mode-precision-landing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#return-mode-precision-landing"}},[e._v("#")]),e._v(" Return Mode Precision Landing")]),e._v(" "),i("p",[e._v("Precision landing can be used in the "),i("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[e._v("Return mode")]),e._v(" landing phase.")],1),e._v(" "),i("p",[e._v("This is enabled using the parameter "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_PLD_MD"}},[e._v("RTL_PLD_MD")]),e._v(", which takes the following values:")],1),e._v(" "),i("ul",[i("li",[i("code",[e._v("0")]),e._v(": Precision landing disabled (land as normal).")]),e._v(" "),i("li",[i("code",[e._v("1")]),e._v(": "),i("a",{attrs:{href:"#opportunistic-mode"}},[e._v("Opportunistic")]),e._v(" precision landing.")]),e._v(" "),i("li",[i("code",[e._v("2")]),e._v(": "),i("a",{attrs:{href:"#required-mode"}},[e._v("Required")]),e._v(" precision landing.")])]),e._v(" "),i("h3",{attrs:{id:"precision-landing-flight-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#precision-landing-flight-mode"}},[e._v("#")]),e._v(" Precision Landing Flight Mode")]),e._v(" "),i("p",[e._v("Precision landing can be enabled by switching to the "),i("em",[e._v("Precision Landing")]),e._v(" flight mode.")]),e._v(" "),i("p",[e._v("You can verify this using the "),i("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html#qgroundcontrol-mavlink-console"}},[i("em",[e._v("QGroundControl")]),e._v(" MAVLink Console")]),e._v(" to enter the following command:")],1),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("commander mode auto:precland\n")])])]),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v('When switching to the mode in this way, the precision landing is always "required"; there is no way to specify the type of landing.')])]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("At time of writing is no "),i("em",[e._v("convenient")]),e._v(" way to directly invoke precision landing (other than commanding return mode):")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("QGroundControl")]),e._v(" does not provide it as a UI option.")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_NAV_LAND"),i("OutboundLink")],1),e._v(" only works in missions.")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_SET_MODE",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_SET_MODE"),i("OutboundLink")],1),e._v(" should work, but you will need to determine the appropriate base and custom modes used by PX4 to represent the precision landing mode.")])])]),e._v(" "),i("h2",{attrs:{id:"hardware-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),i("h3",{attrs:{id:"ir-sensor-beacon-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ir-sensor-beacon-setup"}},[e._v("#")]),e._v(" IR Sensor/Beacon Setup")]),e._v(" "),i("p",[e._v("The IR sensor/landing beacon solution requires an "),i("a",{attrs:{href:"https://irlock.com/products/ir-lock-sensor-precision-landing-kit",target:"_blank",rel:"noopener noreferrer"}},[e._v("IR-LOCK Sensor"),i("OutboundLink")],1),e._v(" and downward facing "),i("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(" connected to the flight controller, and an IR beacon as a target (e.g. "),i("a",{attrs:{href:"https://irlock.com/collections/markone",target:"_blank",rel:"noopener noreferrer"}},[e._v("IR-LOCK MarkOne"),i("OutboundLink")],1),e._v("). This enables landing with a precision of roughly 10 cm (GPS precision, by contrast, may be as large as several meters).")],1),e._v(" "),i("p",[e._v("Install the IR-LOCK sensor by following the "),i("a",{attrs:{href:"https://irlock.readme.io/v2.0/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("official guide"),i("OutboundLink")],1),e._v(". Ensure that the sensor's x axis is aligned with the vehicle's y axis and the sensor's y axis aligned with the vehicle's -x direction (this is the case if the camera is pitched down 90 degrees from facing forward).")]),e._v(" "),i("p",[e._v("Install a "),i("RouterLink",{attrs:{to:"/ko/getting_started/sensor_selection.html#distance"}},[e._v("range/distance sensor")]),e._v(" (the "),i("em",[e._v("LidarLite v3")]),e._v(" has been found to work well).")],1),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Many infrared based range sensors do not perform well in the presence of the IR-LOCK beacon. Refer to the IR-LOCK guide for other compatible sensors.")])]),e._v(" "),i("h2",{attrs:{id:"offboard-positioning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#offboard-positioning"}},[e._v("#")]),e._v(" Offboard Positioning")]),e._v(" "),i("p",[e._v("The offboard solution requires a positioning system that implements the MAVLink "),i("a",{attrs:{href:"https://mavlink.io/en/services/landing_target.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Landing Target Protocol"),i("OutboundLink")],1),e._v(". This can use any positioning mechanism to determine the landing target, for example computer vision and a visual marker.")]),e._v(" "),i("p",[e._v("The system must publish the coordinates of the target in the "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#LANDING_TARGET",target:"_blank",rel:"noopener noreferrer"}},[e._v("LANDING_TARGET"),i("OutboundLink")],1),e._v(" message. Note that PX4 "),i("em",[e._v("requires")]),e._v(" "),i("code",[e._v("LANDING_TARGET.frame")]),e._v(" to be "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_LOCAL_NED"),i("OutboundLink")],1),e._v(" and only populates the fields "),i("code",[e._v("x")]),e._v(", "),i("code",[e._v("y")]),e._v(", and "),i("code",[e._v("z")]),e._v(". The origin of the local NED frame [0,0] is the home position (you can map this home position to global coordinates using "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#GPS_GLOBAL_ORIGIN",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPS_GLOBAL_ORIGIN"),i("OutboundLink")],1),e._v(").")]),e._v(" "),i("p",[e._v("PX4 does not explicitly require a "),i("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(" or other sensors, but will perform better if it can more precisely determine its own position.")],1),e._v(" "),i("h2",{attrs:{id:"firmware-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#firmware-configuration"}},[e._v("#")]),e._v(" Firmware Configuration")]),e._v(" "),i("p",[e._v("Precision landing requires the modules "),i("code",[e._v("irlock")]),e._v(" and "),i("code",[e._v("landing_target_estimator")]),e._v(", which are not included in the PX4 firmware by default. They can be included by setting the following keys to 'y' in the relevant configuration file for your flight controller (e.g. "),i("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/boards/px4/fmu-v5/default.px4board"),i("OutboundLink")],1),e._v("):")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("CONFIG_DRIVERS_IRLOCK=y\nCONFIG_MODULES_LANDING_TARGET_ESTIMATOR=y\n")])])]),i("p",[e._v("The two modules should also be started on system boot. For instructions see: "),i("RouterLink",{attrs:{to:"/ko/concept/system_startup.html#customizing-the-system-startup"}},[e._v("customizing the system startup")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"px4-configuration-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration-parameters"}},[e._v("#")]),e._v(" PX4 Configuration (Parameters)")]),e._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LTEST_MODE"}},[e._v("LTEST_MODE")]),e._v(" determines if the target is assumed to be stationary or moving. If "),i("code",[e._v("LTEST_MODE")]),e._v(" is set to moving (e.g. it is installed on a vehicle on which the multicopter is to land), target measurements are only used to generate position setpoints in the precision landing controller. If "),i("code",[e._v("LTEST_MODE")]),e._v(" is set to stationary, the target measurements are also used by the vehicle position estimator (EKF2 or LPE).")],1),e._v(" "),i("p",[e._v("Other relevant parameters are listed in the parameter reference under "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#landing-target-estimator"}},[e._v("Landing_target estimator")]),e._v(" and "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#precision-land"}},[e._v("Precision land")]),e._v(" parameters. Some of the most useful ones are listed below.")],1),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Parameter")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[i("a",{attrs:{id:"LTEST_MODE"}}),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LTEST_MODE"}},[e._v("LTEST_MODE")])],1),e._v(" "),i("td",[e._v("Landing target is moving ("),i("code",[e._v("0")]),e._v(") or stationary ("),i("code",[e._v("1")]),e._v("). Default is moving.")])]),e._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"PLD_HACC_RAD"}}),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_HACC_RAD"}},[e._v("PLD_HACC_RAD")])],1),e._v(" "),i("td",[e._v("Horizontal acceptance radius, within which the vehicle will start descending. Default is 0.2m.")])]),e._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"PLD_BTOUT"}}),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_BTOUT"}},[e._v("PLD_BTOUT")])],1),e._v(" "),i("td",[e._v("Landing Target Timeout, after which the target is assumed lost. Default is 5 seconds.")])]),e._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"PLD_FAPPR_ALT"}}),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_FAPPR_ALT"}},[e._v("PLD_FAPPR_ALT")])],1),e._v(" "),i("td",[e._v("Final approach altitude. Default is 0.1 metres.")])]),e._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"PLD_MAX_SRCH"}}),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_MAX_SRCH"}},[e._v("PLD_MAX_SRCH")])],1),e._v(" "),i("td",[e._v("Maximum number of search attempts in an required landing.")])]),e._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"RTL_PLD_MD"}}),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_PLD_MD"}},[e._v("RTL_PLD_MD")])],1),e._v(" "),i("td",[e._v("RTL precision land mode. "),i("code",[e._v("0")]),e._v(": disabled, "),i("code",[e._v("1")]),e._v(": "),i("a",{attrs:{href:"#opportunistic-mode"}},[e._v("Opportunistic")]),e._v(", "),i("code",[e._v("2")]),e._v(": "),i("a",{attrs:{href:"#required-mode"}},[e._v("Required")]),e._v(".")])])])]),e._v(" "),i("h3",{attrs:{id:"ir-beacon-scaling"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ir-beacon-scaling"}},[e._v("#")]),e._v(" IR Beacon Scaling")]),e._v(" "),i("p",[e._v("Measurement scaling may be necessary due to lens distortions of the IR-LOCK sensor.")]),e._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LTEST_SCALE_X"}},[e._v("LTEST_SCALE_X")]),e._v(" and "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LTEST_SCALE_Y"}},[e._v("LTEST_SCALE_Y")]),e._v(" can be used to scale beacon measurements before they are used to estimate the beacon's position and velocity relative to the vehicle. Note that "),i("code",[e._v("LTEST_SCALE_X")]),e._v(" and "),i("code",[e._v("LTEST_SCALE_Y")]),e._v(" are considered in the sensor frame, not the vehicle frame.")],1),e._v(" "),i("p",[e._v("To calibrate these scale parameters, set "),i("code",[e._v("LTEST_MODE")]),e._v(" to moving, fly your multicopter above the beacon and perform forward-backward and left-right motions with the vehicle, while "),i("RouterLink",{attrs:{to:"/ko/dev_log/logging.html#configuration"}},[e._v("logging")]),e._v(" "),i("code",[e._v("landing_target_pose")]),e._v(" and "),i("code",[e._v("vehicle_local_position")]),e._v(". Then, compare "),i("code",[e._v("landing_target_pose.vx_rel")]),e._v(" and "),i("code",[e._v("landing_target_pose.vy_rel")]),e._v(" to "),i("code",[e._v("vehicle_local_position.vx")]),e._v(" and "),i("code",[e._v("vehicle_local_position.vy")]),e._v(", respectively (both measurements are in NED frame). If the estimated beacon velocities are consistently smaller or larger than the vehicle velocities, adjust the scale parameters to compensate.")],1),e._v(" "),i("p",[e._v("If you observe slow sideways oscillations of the vehicle while doing a precision landing with "),i("code",[e._v("LTEST_MODE")]),e._v(" set to stationary, the beacon measurements are likely scaled too high and you should reduce the scale parameter in the relevant direction.")]),e._v(" "),i("h2",{attrs:{id:"simulation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#simulation"}},[e._v("#")]),e._v(" Simulation")]),e._v(" "),i("p",[e._v("Precision landing with the IR-LOCK sensor and beacon can be simulated in "),i("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[e._v("SITL Gazebo")]),e._v(".")],1),e._v(" "),i("p",[e._v("To start the simulation with the world that contains a IR-LOCK beacon and a vehicle with a range sensor and IR-LOCK camera, run:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("make px4_sitl gazebo_iris_irlock\n")])])]),i("p",[e._v("You can change the location of the beacon either by moving it in the Gazebo GUI or by changing its location in the "),i("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/worlds/iris_irlock.world#L42",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gazebo world"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"operating-principles"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#operating-principles"}},[e._v("#")]),e._v(" Operating Principles")]),e._v(" "),i("h3",{attrs:{id:"landing-target-estimator"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#landing-target-estimator"}},[e._v("#")]),e._v(" Landing Target Estimator")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("landing_target_estimator")]),e._v(" takes measurements from the "),i("code",[e._v("irlock")]),e._v(" driver as well as the estimated terrain height to estimate the beacon's position relative to the vehicle.")]),e._v(" "),i("p",[e._v("The measurements in "),i("code",[e._v("irlock_report")]),e._v(' contain the tangent of the angles from the image center to the beacon. In other words, the measurements are the x and y components of the vector pointing towards the beacon, where the z component has length "1". This means that scaling the measurement by the distance from the camera to the beacon results in the vector from the camera to the beacon. This relative position is then rotated into the north-aligned, level body frame using the vehicle\'s attitude estimate. Both x and y components of the relative position measurement are filtered in separate Kalman Filters, which act as simple low-pass filters that also produce a velocity estimate and allow for outlier rejection.')]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("landing_target_estimator")]),e._v(" publishes the estimated relative position and velocity whenever a new "),i("code",[e._v("irlock_report")]),e._v(" is fused into the estimate. Nothing is published if the beacon is not seen or beacon measurements are rejected. The landing target estimate is published in the "),i("code",[e._v("landing_target_pose")]),e._v(" uORB message.")]),e._v(" "),i("h3",{attrs:{id:"enhanced-vehicle-position-estimation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#enhanced-vehicle-position-estimation"}},[e._v("#")]),e._v(" Enhanced Vehicle Position Estimation")]),e._v(" "),i("p",[e._v("If the target is specified to be stationary using the parameter "),i("code",[e._v("LTEST_MODE")]),e._v(", the vehicle's position/velocity estimate can be improved with the help of the target measurements. This is done by fusing the target's velocity as a measurement of the negative velocity of the vehicle.")]),e._v(" "),i("h3",{attrs:{id:"landing-phases-flow-diagram"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#landing-phases-flow-diagram"}},[e._v("#")]),e._v(" Landing Phases Flow Diagram")]),e._v(" "),i("p",[e._v("This image shows the "),i("a",{attrs:{href:"#landing-phases"}},[e._v("landing phases")]),e._v(" as a flow diagram.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(483),alt:"Precision Landing Flow Diagram"}})])])}),[],!1,null,null,null);t.default=n.exports},483:function(e,t,a){e.exports=a.p+"assets/img/precland-flow-diagram.88e4e6cb.png"}}]);