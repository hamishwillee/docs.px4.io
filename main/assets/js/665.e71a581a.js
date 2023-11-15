(window.webpackJsonp=window.webpackJsonp||[]).push([[665],{1851:function(e,t,o){"use strict";o.r(t);var a=o(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"collision-prevention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collision-prevention"}},[e._v("#")]),e._v(" Collision Prevention")]),e._v(" "),a("p",[a("em",[e._v("Collision Prevention")]),e._v(" may be used to automatically slow and stop a vehicle before it can crash into an obstacle.")]),e._v(" "),a("p",[e._v("It can be enabled for multicopter vehicles in "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(", and can use sensor data from an offboard companion computer, offboard rangefinders over MAVLink, a rangefinder attached to the flight controller, or any combination of the above.")],1),e._v(" "),a("p",[e._v("Collision prevention may restrict vehicle maximum speed if the sensor range isn't large enough!\nIt also prevents motion in directions where no sensor data is available (i.e. if you have no rear-sensor data, you will not be able to fly backwards).")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If high flight speeds are critical, consider disabling collision prevention when not needed.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Ensure that you have sensors/sensor data in all directions that you want to fly (when collision prevention is enabled).")])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[a("em",[e._v("Collision Prevention")]),e._v(" is enabled on PX4 by setting the parameter for minimum allowed approach distance ("),a("a",{attrs:{href:"#CP_DIST"}},[e._v("CP_DIST")]),e._v(").")]),e._v(" "),a("p",[e._v("The feature requires obstacle information from an external system (sent using the MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[e._v("OBSTACLE_DISTANCE"),a("OutboundLink")],1),e._v(" message) and/or a "),a("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(" connected to the flight controller.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Multiple sensors can be used to get information about, and prevent collisions with, objects "),a("em",[e._v("around")]),e._v(" the vehicle.\nIf multiple sources supply data for the "),a("em",[e._v("same")]),e._v(" orientation, the system uses the data that reports the smallest distance to an object.")])]),e._v(" "),a("p",[e._v('The vehicle restricts the maximum velocity in order to slow down as it gets closer to obstacles, and will stop movement when it reaches the minimum allowed separation.\nIn order to move away from (or parallel to) an obstacle, the user must command the vehicle to move toward a setpoint that does not bring the vehicle closer to the obstacle.\nThe algorithm will make minor adjustments to the setpoint direction if it is determined that a "better" setpoint exists within a fixed margin on either side of the requested setpoint.')]),e._v(" "),a("p",[e._v("Users are notified through "),a("em",[e._v("QGroundControl")]),e._v(" while "),a("em",[e._v("Collision Prevention")]),e._v(" is actively controlling velocity setpoints.")]),e._v(" "),a("p",[e._v("PX4 software setup is covered in the next section.\nIf you are using a distance sensor attached to your flight controller for collision prevention, it will need to be attached and configured as described in "),a("a",{attrs:{href:"#rangefinder"}},[e._v("PX4 Distance Sensor")]),e._v(".\nIf you are using a companion computer to provide obstacle information see "),a("a",{attrs:{href:"#companion"}},[e._v("companion setup")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"px4-software-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-software-setup"}},[e._v("#")]),e._v(" PX4 (Software) Setup")]),e._v(" "),a("p",[e._v("Configure collision prevention by "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("setting the following parameters")]),e._v(" in "),a("em",[e._v("QGroundControl")]),e._v(":")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"CP_DIST"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CP_DIST"}},[e._v("CP_DIST")])],1),e._v(" "),a("td",[e._v("Set the minimum allowed distance (the closest distance that the vehicle can approach the obstacle). Set negative to disable "),a("em",[e._v("collision prevention")]),e._v(". "),a("br"),e._v("> "),a("strong",[e._v("Warning")]),e._v(" This value is the distance to the sensors, not the outside of your vehicle or propellers. Be sure to leave a safe margin!")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"CP_DELAY"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CP_DELAY"}},[e._v("CP_DELAY")])],1),e._v(" "),a("td",[e._v("Set the sensor and velocity setpoint tracking delay. See "),a("a",{attrs:{href:"#delay_tuning"}},[e._v("Delay Tuning")]),e._v(" below.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"CP_GUIDE_ANG"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CP_GUIDE_ANG"}},[e._v("CP_GUIDE_ANG")])],1),e._v(" "),a("td",[e._v("Set the angle (to both sides of the commanded direction) within which the vehicle may deviate if it finds fewer obstacles in that direction. See "),a("a",{attrs:{href:"#angle_change_tuning"}},[e._v("Guidance Tuning")]),e._v(" below.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"CP_GO_NO_DATA"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CP_GO_NO_DATA"}},[e._v("CP_GO_NO_DATA")])],1),e._v(" "),a("td",[e._v("Set to 1 to allow the vehicle to move in directions where there is no sensor coverage (default is 0/"),a("code",[e._v("False")]),e._v(").")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_POS_MODE"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[e._v("MPC_POS_MODE")])],1),e._v(" "),a("td",[e._v("Set to 0 or 3 to enable Collision Prevention in Position Mode (default is 4).")])])])]),e._v(" "),a("p",[a("a",{attrs:{id:"algorithm"}})]),e._v(" "),a("h2",{attrs:{id:"algorithm-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-description"}},[e._v("#")]),e._v(" Algorithm Description")]),e._v(" "),a("p",[e._v("The data from all sensors are fused into an internal representation of 36 sectors around the vehicle, each containing either the sensor data and information about when it was last observed, or an indication that no data for the sector was available.\nWhen the vehicle is commanded to move in a particular direction, all sectors in the hemisphere of that direction are checked to see if the movement will bring the vehicle closer to any obstacles.\nIf so, the vehicle velocity is restricted.")]),e._v(" "),a("p",[e._v("This velocity restriction takes into account both the inner velocity loop tuned by "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_XY_P"}},[e._v("MPC_XY_P")]),e._v(", as well as the "),a("RouterLink",{attrs:{to:"/en/config_mc/mc_jerk_limited_type_trajectory.html"}},[e._v("jerk-optimal velocity controller")]),e._v(" via "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[e._v("MPC_JERK_MAX")]),e._v(" and "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_ACC_HOR"}},[e._v("MPC_ACC_HOR")]),e._v(".\nThe velocity is restricted such that the vehicle will stop in time to maintain the distance specified in "),a("a",{attrs:{href:"#CP_DIST"}},[e._v("CP_DIST")]),e._v(".\nThe range of the sensors for each sector is also taken into account, limiting the velocity via the same mechanism.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("If there is no sensor data in a particular direction, velocity in that direction is restricted to 0 (preventing the vehicle from crashing into unseen objects).\nIf you wish to move freely into directions without sensor coverage, this can be enabled by setting "),a("a",{attrs:{href:"#CP_GO_NO_DATA"}},[e._v("CP_GO_NO_DATA")]),e._v(" to 1.")])]),e._v(" "),a("p",[e._v("Delay, both in the vehicle tracking velocity setpoints and in receiving sensor data from external sources, is conservatively estimated via the "),a("a",{attrs:{href:"#CP_DELAY"}},[e._v("CP_DELAY")]),e._v(" parameter.\nThis should be "),a("a",{attrs:{href:"#delay_tuning"}},[e._v("tuned")]),e._v(" to the specific vehicle.")]),e._v(" "),a("p",[e._v("If the sectors adjacent to the commanded sectors are 'better' by a significant margin, the direction of the requested input can be modified by up to the angle specified in "),a("a",{attrs:{href:"#CP_GUIDE_ANG"}},[e._v("CP_GUIDE_ANG")]),e._v(".\nThis helps to fine-tune user input to 'guide' the vehicle around obstacles rather than getting stuck against them.")]),e._v(" "),a("p",[a("a",{attrs:{id:"data_loss"}})]),e._v(" "),a("h3",{attrs:{id:"range-data-loss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#range-data-loss"}},[e._v("#")]),e._v(" Range Data Loss")]),e._v(" "),a("p",[e._v("If the autopilot does not receive range data from any sensor for longer than 0.5s, it will output a warning "),a("em",[e._v("No range data received, no movement allowed")]),e._v(".\nThis will force the velocity setpoints in xy to zero.\nAfter 5 seconds of not receiving any data, the vehicle will switch into "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/hold.html"}},[e._v("HOLD mode")]),e._v(".\nIf you want the vehicle to be able to move again, you will need to disable Collision Prevention by either setting the parameter "),a("a",{attrs:{href:"#CP_DIST"}},[e._v("CP_DIST")]),e._v(" to a negative value, or switching to a mode other than "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(" (e.g. to "),a("em",[e._v("Altitude mode")]),e._v(" or "),a("em",[e._v("Stabilized mode")]),e._v(").")],1),e._v(" "),a("p",[e._v("If you have multiple sensors connected and you lose connection to one of them, you will still be able to fly inside the field of view (FOV) of the reporting sensors.\nThe data of the faulty sensor will expire and the region covered by this sensor will be treated as uncovered, meaning you will not be able to move there.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Be careful when enabling "),a("a",{attrs:{href:"#CP_GO_NO_DATA"}},[e._v("CP_GO_NO_DATA=1")]),e._v(", which allows the vehicle to fly outside the area with sensor coverage.\nIf you lose connection to one of multiple sensors, the area covered by the faulty sensor is also treated as uncovered and you will be able to move there without constraint.")])]),e._v(" "),a("p",[a("a",{attrs:{id:"delay_tuning"}})]),e._v(" "),a("h3",{attrs:{id:"cp-delay-delay-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cp-delay-delay-tuning"}},[e._v("#")]),e._v(" CP_DELAY Delay Tuning")]),e._v(" "),a("p",[e._v("There are two main sources of delay which should be accounted for: "),a("em",[e._v("sensor delay")]),e._v(", and vehicle "),a("em",[e._v("velocity setpoint tracking delay")]),e._v(".\nBoth sources of delay are tuned using the "),a("a",{attrs:{href:"#CP_DELAY"}},[e._v("CP_DELAY")]),e._v(" parameter.")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("sensor delay")]),e._v(" for distance sensors connected directly to the flight controller can be assumed to be 0.\nFor external vision-based systems the sensor delay may be as high as 0.2s.")]),e._v(" "),a("p",[e._v("Vehicle "),a("em",[e._v("velocity setpoint tracking delay")]),e._v(" can be measured by flying at full speed in "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(", then commanding a stop.\nThe delay between the actual velocity and the velocity setpoint can then be measured from the logs.\nThe tracking delay is typically between 0.1 and 0.5 seconds, depending on vehicle size and tuning.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If vehicle speed oscillates as it approaches the obstacle (i.e. it slows down, speeds up, slows down) the delay is set too high.")])]),e._v(" "),a("p",[a("a",{attrs:{id:"angle_change_tuning"}})]),e._v(" "),a("h3",{attrs:{id:"cp-guide-ang-guidance-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cp-guide-ang-guidance-tuning"}},[e._v("#")]),e._v(" CP_GUIDE_ANG Guidance Tuning")]),e._v(" "),a("p",[e._v("Depending on the vehicle, type of environment and pilot skill different amounts of guidance may be desired.\nSetting the "),a("a",{attrs:{href:"#CP_GUIDE_ANG"}},[e._v("CP_GUIDE_ANG")]),e._v(" parameter to 0 will disable the guidance, resulting in the vehicle only moving exactly in the directions commanded.\nIncreasing this parameter will let the vehicle choose optimal directions to avoid obstacles, making it easier to fly through tight gaps and to keep the minimum distance exactly while going around objects.")]),e._v(" "),a("p",[e._v("If this parameter is too small the vehicle may feel 'stuck' when close to obstacles, because only movement away from obstacles at minimum distance are allowed.\nIf the parameter is too large the vehicle may feel like it 'slides' away from obstacles in directions not commanded by the operator.\nFrom testing, 30 degrees is a good balance, although different vehicles may have different requirements.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The guidance feature will never direct the vehicle in a direction without sensor data.\nIf the vehicle feels 'stuck' with only a single distance sensor pointing forwards, this is probably because the guidance cannot safely adapt the direction due to lack of information.")])]),e._v(" "),a("p",[a("a",{attrs:{id:"rangefinder"}})]),e._v(" "),a("h2",{attrs:{id:"px4-distance-sensor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-distance-sensor"}},[e._v("#")]),e._v(" PX4 Distance Sensor")]),e._v(" "),a("h3",{attrs:{id:"lanbao-psk-cm8jl65-cc5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lanbao-psk-cm8jl65-cc5"}},[e._v("#")]),e._v(" Lanbao PSK-CM8JL65-CC5")]),e._v(" "),a("p",[e._v("At time of writing PX4 allows you to use the "),a("RouterLink",{attrs:{to:"/en/sensor/cm8jl65_ir_distance_sensor.html"}},[e._v("Lanbao PSK-CM8JL65-CC5")]),e._v(' IR distance sensor for collision prevention "out of the box", with minimal additional configuration:')],1),e._v(" "),a("ul",[a("li",[e._v("First "),a("RouterLink",{attrs:{to:"/en/sensor/cm8jl65_ir_distance_sensor.html"}},[e._v("attach and configure the sensor")]),e._v(", and enable collision prevention (as described above, using "),a("a",{attrs:{href:"#CP_DIST"}},[e._v("CP_DIST")]),e._v(").")],1),e._v(" "),a("li",[e._v("Set the sensor orientation using "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_CM8JL65_R_0"}},[e._v("SENS_CM8JL65_R_0")]),e._v(".")],1)]),e._v(" "),a("h3",{attrs:{id:"lightware-lidar-sf45-rotating-lidar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightware-lidar-sf45-rotating-lidar"}},[e._v("#")]),e._v(" LightWare LiDAR SF45 Rotating Lidar")]),e._v(" "),a("p",[e._v("PX4 v1.14 (and later) supports the "),a("a",{attrs:{href:"https://www.lightwarelidar.com/shop/sf45-b-50-m/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LightWare LiDAR SF45"),a("OutboundLink")],1),e._v(" rotating lidar which provides 320 degree sensing.")]),e._v(" "),a("p",[e._v("The SF45 must be connected via a UART/serial port and configured as described below (In addition to the "),a("a",{attrs:{href:"#px4-software-setup"}},[e._v("collision prevention setup")]),e._v(").")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.lightwarelidar.com/resources-software",target:"_blank",rel:"noopener noreferrer"}},[e._v("LightWare Studio"),a("OutboundLink")],1),e._v(" configuration:")]),e._v(" "),a("ul",[a("li",[e._v("In the LightWare Studio app enable scanning, set the scan angle, and change the baud rate to "),a("code",[e._v("921600")]),e._v(".")])]),e._v(" "),a("p",[e._v("PX4 Configuration:")]),e._v(" "),a("ul",[a("li",[e._v("Add the "),a("RouterLink",{attrs:{to:"/en/modules/modules_driver_distance_sensor.html#lightware-sf45-serial"}},[e._v("lightware_sf45_serial")]),e._v(" driver in "),a("RouterLink",{attrs:{to:"/en/hardware/porting_guide_config.html#px4-menuconfig-setup"}},[e._v("menuconfig")]),e._v(":\n"),a("ul",[a("li",[e._v("Under "),a("strong",[e._v("drivers > Distance sensors")]),e._v(" select "),a("code",[e._v("lightware_sf45_serial")]),e._v(".")]),e._v(" "),a("li",[e._v("Recompile and upload to the flight controller.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("Set the following parameters")]),e._v(" via QGC:\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_EN_SF45_CFG"}},[e._v("SENS_EN_SF45_CFG")]),e._v(": Set to the serial port you have the sensor connected to.\nMake sure GPS or Telemetry are not enabled on this port.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SF45_ORIENT_CFG"}},[e._v("SF45_ORIENT_CFG")]),e._v(": Set the orientation of the sensor (facing up or down)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SF45_UPDATE_CFG"}},[e._v("SF45_UPDATE_CFG")]),e._v(": Set the update rate")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SF45_YAW_CFG"}},[e._v("SF45_YAW_CFG")]),e._v(": Set the yaw orientation")],1)])],1)]),e._v(" "),a("p",[e._v("In QGroundControl you should see an "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[e._v("OBSTACLE_DISTANCE"),a("OutboundLink")],1),e._v(" message in the "),a("RouterLink",{attrs:{to:"/en/debug/mavlink_shell.html#qgroundcontrol-mavlink-console"}},[e._v("MAVLink console")]),e._v(" if collision prevention is configured correctly and active.")],1),e._v(" "),a("p",[e._v("The obstacle overlay in QGC will look like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:o(642),alt:"sf45"}})]),e._v(" "),a("h3",{attrs:{id:"rangefinder-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rangefinder-support"}},[e._v("#")]),e._v(" Rangefinder Support")]),e._v(" "),a("p",[e._v("Other sensors may be enabled, but this requires modification of driver code to set the sensor orientation and field of view.")]),e._v(" "),a("ul",[a("li",[e._v("Attach and configure the distance sensor on a particular port (see "),a("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[e._v("sensor-specific docs")]),e._v(") and enable collision prevention using "),a("a",{attrs:{href:"#CP_DIST"}},[e._v("CP_DIST")]),e._v(".")],1),e._v(" "),a("li",[e._v("Modify the driver to set the orientation.\nThis should be done by mimicking the "),a("code",[e._v("SENS_CM8JL65_R_0")]),e._v(" parameter (though you might also hard-code the orientation in the sensor "),a("em",[e._v("module.yaml")]),e._v(" file to something like "),a("code",[e._v("sf0x start -d ${SERIAL_DEV} -R 25")]),e._v(" - where 25 is equivalent to "),a("code",[e._v("ROTATION_DOWNWARD_FACING")]),e._v(").")]),e._v(" "),a("li",[e._v("Modify the driver to set the "),a("em",[e._v("field of view")]),e._v(" in the distance sensor UORB topic ("),a("code",[e._v("distance_sensor_s.h_fov")]),e._v(").")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You can see the required modifications from the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/12179",target:"_blank",rel:"noopener noreferrer"}},[e._v("feature PR"),a("OutboundLink")],1),e._v(".\nPlease contribute back your changes!")])]),e._v(" "),a("p",[a("a",{attrs:{id:"companion"}})]),e._v(" "),a("h2",{attrs:{id:"companion-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#companion-setup"}},[e._v("#")]),e._v(" Companion Setup")]),e._v(" "),a("p",[e._v("If using a companion computer or external sensor, it needs to supply a stream of "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[e._v("OBSTACLE_DISTANCE"),a("OutboundLink")],1),e._v(" messages, which should reflect when and where obstacle were detected.")]),e._v(" "),a("p",[e._v("The minimum rate at which messages "),a("em",[e._v("must")]),e._v(" be sent depends on vehicle speed - at higher rates the vehicle will have a longer time to respond to detected obstacles.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Initial testing of the system used a vehicle moving at 4 m/s with "),a("code",[e._v("OBSTACLE_DISTANCE")]),e._v(" messages being emitted at 10Hz (the maximum rate supported by the vision system).\nThe system may work well at significantly higher speeds and lower frequency distance updates.")])]),e._v(" "),a("p",[e._v("The tested companion software is the "),a("em",[e._v("local_planner")]),e._v(" from the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),e._v(" repo.\nFor more information on hardware and software setup see: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance > Run on Hardware"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The hardware and software should be set up as described in the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),e._v(" repo.\nIn order to emit "),a("code",[e._v("OBSTACLE_DISTANCE")]),e._v(" messages you must use the "),a("em",[e._v("rqt_reconfigure")]),e._v(" tool and set the parameter "),a("code",[e._v("send_obstacles_fcu")]),e._v(" to true.")]),e._v(" "),a("h2",{attrs:{id:"gazebo-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-setup"}},[e._v("#")]),e._v(" Gazebo Setup")]),e._v(" "),a("p",[a("em",[e._v("Collision Prevention")]),e._v(" can also be tested using Gazebo.\nSee "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),e._v(" for setup instructions.")])])}),[],!1,null,null,null);t.default=n.exports},642:function(e,t,o){e.exports=o.p+"assets/img/sf45_obstacle_map.cb339bd2.png"}}]);