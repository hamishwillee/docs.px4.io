(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{1455:function(e,t,a){"use strict";a.r(t);var i=a(18),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"precision-landing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#precision-landing"}},[e._v("#")]),e._v(" Precision Landing")]),e._v(" "),i("p",[e._v("PX4 supports precision landing for "),i("em",[e._v("multicopters")]),e._v(" (from PX4 v1.7.4) using the "),i("a",{attrs:{href:"https://irlock.com/products/ir-lock-sensor-precision-landing-kit",target:"_blank",rel:"noopener noreferrer"}},[e._v("IR-LOCK Sensor"),i("OutboundLink")],1),e._v(", an IR beacon (e.g. "),i("a",{attrs:{href:"https://irlock.com/collections/markone",target:"_blank",rel:"noopener noreferrer"}},[e._v("IR-LOCK MarkOne"),i("OutboundLink")],1),e._v("), and a downward facing range sensor.\nThis enables landing with a precision of roughly 10 cm (GPS precision, by contrast, may be as large as several meters).")]),e._v(" "),i("p",[e._v("A precision landing can be initiated by entering the "),i("em",[e._v("Precision Land")]),e._v(" flight mode, or as part of a "),i("a",{attrs:{href:"#mission"}},[e._v("mission")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),i("h3",{attrs:{id:"hardware-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),i("p",[e._v("Install the IR-LOCK sensor by following the "),i("a",{attrs:{href:"https://irlock.readme.io/v2.0/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("official guide"),i("OutboundLink")],1),e._v(".\nEnsure that the sensor's x axis is aligned with the vehicle's y axis and the sensor's y axis aligned with the vehicle's -x direction (this is the case if the camera is pitched down 90 degrees from facing forward).")]),e._v(" "),i("p",[e._v("Install a "),i("RouterLink",{attrs:{to:"/en/getting_started/sensor_selection.html#distance"}},[e._v("range/distance sensor")]),e._v(" (the "),i("em",[e._v("LidarLite v3")]),e._v(" has been found to work well).")],1),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Many infrared based range sensors do not perform well in the presence of the IR-LOCK beacon.\nRefer to the IR-LOCK guide for other compatible sensors.")])]),e._v(" "),i("h3",{attrs:{id:"firmware-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#firmware-configuration"}},[e._v("#")]),e._v(" Firmware Configuration")]),e._v(" "),i("p",[e._v("Precision landing requires the modules "),i("code",[e._v("irlock")]),e._v(" and "),i("code",[e._v("landing_target_estimator")]),e._v(", which are not included in the PX4 firmware by default.\nThey can be included by adding (or uncommenting) the following lines in the relevant configuration file for your flight controller (e.g. "),i("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/boards/px4/fmu-v5/default.cmake"),i("OutboundLink")],1),e._v("):")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("drivers/irlock\nmodules/landing_target_estimator\n")])])]),i("p",[e._v("The two modules should also be started on system boot.\nFor instructions see: "),i("RouterLink",{attrs:{to:"/en/concept/system_startup.html#customizing-the-system-startup"}},[e._v("customizing the system startup")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"software-configuration-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#software-configuration-parameters"}},[e._v("#")]),e._v(" Software Configuration (Parameters)")]),e._v(" "),i("p",[e._v("Precision landing is configured with the "),i("code",[e._v("landing_target_estimator")]),e._v(" and "),i("code",[e._v("navigator")]),e._v(' parameters, which are found in the "Landing target estimator" and "Precision land" groups, respectively.\nThe most important parameters are discussed below.')]),e._v(" "),i("p",[e._v("The parameter "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LTEST_MODE"}},[e._v("LTEST_MODE")]),e._v(" determines if the beacon is assumed to be stationary or moving.\nIf "),i("code",[e._v("LTEST_MODE")]),e._v(" is set to moving (e.g. it is installed on a vehicle on which the multicopter is to land), beacon measurements are only used to generate position setpoints in the precision landing controller.\nIf "),i("code",[e._v("LTEST_MODE")]),e._v(" is set to stationary, the beacon measurements are also used by the vehicle position estimator (EKF2 or LPE).")],1),e._v(" "),i("p",[e._v("The parameters "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LTEST_SCALE_X"}},[e._v("LTEST_SCALE_X")]),e._v(" and "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LTEST_SCALE_Y"}},[e._v("LTEST_SCALE_Y")]),e._v(" can be used to scale beacon measurements before they are used to estimate the beacon's position and velocity relative to the vehicle.\nMeasurement scaling may be necessary due to lens distortions of the IR-LOCK sensor.\nNote that "),i("code",[e._v("LTEST_SCALE_X")]),e._v(" and "),i("code",[e._v("LTEST_SCALE_Y")]),e._v(" are considered in the sensor frame, not the vehicle frame.")],1),e._v(" "),i("p",[e._v("To calibrate these scale parameters, set "),i("code",[e._v("LTEST_MODE")]),e._v(" to moving, fly your multicopter above the beacon and perform forward-backward and left-right motions with the vehicle, while "),i("RouterLink",{attrs:{to:"/en/dev_log/logging.html#configuration"}},[e._v("logging")]),e._v(" "),i("code",[e._v("landing_target_pose")]),e._v(" and "),i("code",[e._v("vehicle_local_position")]),e._v(".\nThen, compare "),i("code",[e._v("landing_target_pose.vx_rel")]),e._v(" and "),i("code",[e._v("landing_target_pose.vy_rel")]),e._v(" to "),i("code",[e._v("vehicle_local_position.vx")]),e._v(" and "),i("code",[e._v("vehicle_local_position.vy")]),e._v(", respectively (both measurements are in NED frame).\nIf the estimated beacon velocities are consistently smaller or larger than the vehicle velocities, adjust the scale parameters to compensate.")],1),e._v(" "),i("p",[e._v("If you observe slow sideways oscillations of the vehicle while doing a precision landing with "),i("code",[e._v("LTEST_MODE")]),e._v(" set to stationary, the beacon measurements are likely scaled too high and you should reduce the scale parameter in the relevant direction.")]),e._v(" "),i("h2",{attrs:{id:"precision-land-modes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#precision-land-modes"}},[e._v("#")]),e._v(" Precision Land Modes")]),e._v(" "),i("p",[e._v('A precision landing can be configured to either be "required" or "opportunistic".\nThe choice of mode affects how a precision landing is performed.')]),e._v(" "),i("h3",{attrs:{id:"required-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-mode"}},[e._v("#")]),e._v(" Required Mode")]),e._v(" "),i("p",[e._v("In "),i("em",[e._v("Required Mode")]),e._v(" the vehicle will search for a beacon if none is visible when landing is initiated.\nThe vehicle will perform a precision landing if a beacon is located.")]),e._v(" "),i("p",[e._v("The search procedure consists of climbing to the search altitude ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PLD_SRCH_ALT"}},[e._v("PLD_SRCH_ALT")]),e._v(").\nIf the beacon is still not visible at the search altitude and after a search timeout ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PLD_SRCH_TOUT"}},[e._v("PLD_SRCH_TOUT")]),e._v("), a normal landing is initiated at the current position.")],1),e._v(" "),i("h3",{attrs:{id:"opportunistic-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#opportunistic-mode"}},[e._v("#")]),e._v(" Opportunistic Mode")]),e._v(" "),i("p",[e._v("In "),i("em",[e._v("Opportunistic Mode")]),e._v(" the vehicle will use precision landing "),i("em",[e._v("if")]),e._v(" (and only if) the beacon is visible when landing is initiated.\nIf it is not visible the vehicle immediately performs a "),i("em",[e._v("normal")]),e._v(" landing at the current position.")]),e._v(" "),i("h2",{attrs:{id:"performing-a-precision-landing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#performing-a-precision-landing"}},[e._v("#")]),e._v(" Performing a Precision Landing")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Due to a limitation in the current implementation of the position controller, precision landing is only possible with a valid global position.")])]),e._v(" "),i("h3",{attrs:{id:"via-command"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#via-command"}},[e._v("#")]),e._v(" Via Command")]),e._v(" "),i("p",[e._v("Precision landing can be initiated through the command line interface with")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("commander mode auto:precland\n")])])]),i("p",[e._v('In this case, the precision landing is always considered "required".')]),e._v(" "),i("p",[i("span",{attrs:{id:"mission"}})]),e._v(" "),i("h3",{attrs:{id:"in-a-mission"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#in-a-mission"}},[e._v("#")]),e._v(" In a Mission")]),e._v(" "),i("p",[e._v("Precision landing can be initiated as part of a "),i("RouterLink",{attrs:{to:"/en/flying/missions.html"}},[e._v("mission")]),e._v(" using "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_NAV_LAND"),i("OutboundLink")],1),e._v(" with "),i("code",[e._v("param2")]),e._v(" set appropriately:")],1),e._v(" "),i("ul",[i("li",[i("code",[e._v("param2")]),e._v(" = 0: Normal landing without using the beacon.")]),e._v(" "),i("li",[i("code",[e._v("param2")]),e._v(" = 1: "),i("em",[e._v("Opportunistic")]),e._v(" precision landing.")]),e._v(" "),i("li",[i("code",[e._v("param2")]),e._v(" = 2: "),i("em",[e._v("Required")]),e._v(" precision landing.")])]),e._v(" "),i("h2",{attrs:{id:"simulation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#simulation"}},[e._v("#")]),e._v(" Simulation")]),e._v(" "),i("p",[e._v("Precision landing with the IR-LOCK sensor and beacon can be simulated in "),i("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[e._v("SITL Gazebo")]),e._v(".")],1),e._v(" "),i("p",[e._v("To start the simulation with the world that contains a IR-LOCK beacon and a vehicle with a range sensor and IR-LOCK camera, run:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("make px4_sitl gazebo_iris_irlock\n")])])]),i("p",[e._v("You can change the location of the beacon either by moving it in the Gazebo GUI or by changing its location in the "),i("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/worlds/iris_irlock.world#L42",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gazebo world"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"operating-principles"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#operating-principles"}},[e._v("#")]),e._v(" Operating Principles")]),e._v(" "),i("h3",{attrs:{id:"landing-target-estimator"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#landing-target-estimator"}},[e._v("#")]),e._v(" Landing Target Estimator")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("landing_target_estimator")]),e._v(" takes measurements from the "),i("code",[e._v("irlock")]),e._v(" driver as well as the estimated terrain height to estimate the beacon's position relative to the vehicle.")]),e._v(" "),i("p",[e._v("The measurements in "),i("code",[e._v("irlock_report")]),e._v(' contain the tangent of the angles from the image center to the beacon. In other words, the measurements are the x and y components of the vector pointing towards the beacon, where the z component has length "1".\nThis means that scaling the measurement by the distance from the camera to the beacon results in the vector from the camera to the beacon.\nThis relative position is then rotated into the north-aligned, level body frame using the vehicle\'s attitude estimate.\nBoth x and y components of the relative position measurement are filtered in separate Kalman Filters, which act as simple low-pass filters that also produce a velocity estimate and allow for outlier rejection.')]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("landing_target_estimator")]),e._v(" publishes the estimated relative position and velocity whenever a new "),i("code",[e._v("irlock_report")]),e._v(" is fused into the estimate. Nothing is published if the beacon is not seen or beacon measurements are rejected.\nThe landing target estimate is published in the "),i("code",[e._v("landing_target_pose")]),e._v(" uORB message.")]),e._v(" "),i("h3",{attrs:{id:"enhanced-vehicle-position-estimation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#enhanced-vehicle-position-estimation"}},[e._v("#")]),e._v(" Enhanced Vehicle Position Estimation")]),e._v(" "),i("p",[e._v("If the beacon is specified to be stationary using the parameter "),i("code",[e._v("LTEST_MODE")]),e._v(", the vehicle's position/velocity estimate can be improved with the help of the beacon measurements.\nThis is done by fusing the beacon's velocity as a measurement of the negative velocity of the vehicle.")]),e._v(" "),i("h3",{attrs:{id:"precision-land-procedure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#precision-land-procedure"}},[e._v("#")]),e._v(" Precision Land Procedure")]),e._v(" "),i("p",[e._v("The precision land procedure consists of three phases:")]),e._v(" "),i("ol",[i("li",[i("p",[i("strong",[e._v("Horizontal approach:")]),e._v(" The vehicle approaches the beacon horizontally while keeping its current altitude.\nOnce the position of the beacon relative to the vehicle is below a threshold ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PLD_HACC_RAD"}},[e._v("PLD_HACC_RAD")]),e._v("), the next phase is entered.\nIf the beacon is lost during this phase (not visible for longer than "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PLD_BTOUT"}},[e._v("PLD_BTOUT")]),e._v("), a search procedure is initiated (during a required precision landing) or the vehicle does a normal landing (during an opportunistic precision landing).")],1)]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Descent over beacon:")]),e._v(" The vehicle descends, while remaining centered over the beacon.\nIf the beacon is lost during this phase (not visible for longer than "),i("code",[e._v("PLD_BTOUT")]),e._v("), a search procedure is initiated (during a required precision landing) or the vehicle does a normal landing (during an opportunistic precision landing).")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Final approach:")]),e._v(" When the vehicle is close to the ground (closer than "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PLD_FAPPR_ALT"}},[e._v("PLD_FAPPR_ALT")]),e._v("), it descends while remaining centered over the beacon.\nIf the beacon is lost during this phase, the descent is continued independent of the kind of precision landing.")],1)])]),e._v(" "),i("p",[e._v("Search procedures are initiated in 1. and 2. a maximum of "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PLD_MAX_SRCH"}},[e._v("PLD_MAX_SRCH")]),e._v(" times.")],1),e._v(" "),i("p",[i("img",{attrs:{src:a(468),alt:"Precision Landing Flow Diagram"}})])])}),[],!1,null,null,null);t.default=n.exports},468:function(e,t,a){e.exports=a.p+"assets/img/precland-flow-diagram.88e4e6cb.png"}}]);