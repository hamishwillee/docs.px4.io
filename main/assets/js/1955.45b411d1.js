(window.webpackJsonp=window.webpackJsonp||[]).push([[1955],{3538:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"多旋翼配置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼配置"}},[t._v("#")]),t._v(" 多旋翼配置")]),t._v(" "),o("p",[t._v("Multicopter configuration and calibration follows the same high level steps as other frames: selection of firmware, configuration of the frame including actuator/motor geometry and output mappings, sensor configuration and calibration, configuration of safety and other features, and finally tuning.")]),t._v(" "),o("p",[t._v("This topic explains how to configure a multicopter using selected topics from "),o("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Standard Configuration")]),t._v(", "),o("RouterLink",{attrs:{to:"/zh/advanced_config/"}},[t._v("Advanced Configuration")]),t._v(", and "),o("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("Flight Controller Peripherals")]),t._v(", along with multicopter-specific tuning topics.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("This topic is the recommended entry point when performing first-time configuration and calibration of a new multicopter frame.")])]),t._v(" "),o("h2",{attrs:{id:"loading-firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#loading-firmware"}},[t._v("#")]),t._v(" Loading Firmware")]),t._v(" "),o("p",[t._v("The first step is to "),o("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("load PX4 firmware")]),t._v(" onto your "),o("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[t._v("flight controller")]),t._v(". This is most easily done using QGroundControl, which will automatically select appropriate firmware for your particular controller hardware. By default QGC will install the latest stable version of PX4, but you can choose beta or custom versions instead if needed.")],1),t._v(" "),o("p",[t._v("Relevant topics:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("Loading Firmware")])],1)]),t._v(" "),o("h2",{attrs:{id:"frame-selection-and-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frame-selection-and-configuration"}},[t._v("#")]),t._v(" Frame Selection and Configuration")]),t._v(" "),o("p",[t._v("This section explains how to configure the vehicle type (multicopter), specific motor/flight control geometry, and motor outputs.")]),t._v(" "),o("p",[t._v("First "),o("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("select a multicopter airframe")]),t._v(" (options are listed in "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter"}},[t._v("Airframe Reference > Copter")]),t._v('). You should select the frame that matches your vehicle brand and model if one exists, and otherwise select the "Generic" frame type that most closely matches your geometry in terms of number of motors and their relative positions. For example, for a '),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#quadrotor-x"}},[t._v("Quadrotor X")]),t._v(" frame you would look for the name of your frame in the list, and if it was not present select the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("Generic Quadrotor X")]),t._v(" frame.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("Any selected multicopter frame can be modified in the next step (actuator configuration) to add/remove motors and otherwise change the geometry, and to specify what flight controller outputs are connected to particular motors and the output properties. Selecting a frame that matches your vehicle reduces the configuration work required.")]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("DETAILS")]),t._v(" "),o("p",[t._v("How does this work (details) Selecting an airframe applies a "),o("RouterLink",{attrs:{to:"/zh/dev_airframes/adding_a_new_frame.html#adding-a-frame-configuration"}},[t._v("frame configuration file")]),t._v(" that contains a predefined set of "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("parameters")]),t._v(", such as "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CA_AIRFRAME"}},[t._v("CA_AIRFRAME=0")]),t._v(" for the vehicle type and "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CA_ROTOR_COUNT"}},[t._v("CA_ROTOR_COUNT")]),t._v(" for the number of rotors.")],1),t._v(" "),o("p",[t._v("A frame configuration can define everything about a vehicle, from it's geometry and output mappings, through to its tuning and calibration values. When you're bringing up a new vehicle though, the frame will usually contain a fairly minimal configuration:")]),t._v(" "),o("ul",[o("li",[t._v('Frames named with "Generic" define the vehicle type, number of rotors, and "placeholder" rotor positions. After selecting the airframe you define the actual geometry and then configure outputs.')]),t._v(" "),o("li",[t._v("Frames named with model/brand will define the vehicle type, number of rotors, actual rotor positions, and motor directions. After selecting the airframe you usually still have to configure outputs.")])])])]),t._v(" "),o("p",[t._v("The next step is to define your vehicle "),o("RouterLink",{attrs:{to:"/zh/config/actuators.html#motor-geometry-multicopter"}},[t._v("geometry")]),t._v(" (the number of motors and their relative positions) and "),o("RouterLink",{attrs:{to:"/zh/config/actuators.html#actuator-outputs"}},[t._v("assign those motors")]),t._v(" to the physical outputs that they are wired to on your flight controller (both of these are covered in "),o("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Actuator Configuration and Testing")]),t._v(").")],1),t._v(" "),o("p",[t._v("If using PWM ESCs and OneShot ESCs (but not DShot and DroneCAN/Cyphal ESC) you should then perform "),o("RouterLink",{attrs:{to:"/zh/advanced_config/esc_calibration.html"}},[t._v("ESC Calibration")]),t._v(" before proceeding to "),o("RouterLink",{attrs:{to:"/zh/config/actuators.html#motor-configuration"}},[t._v("Motor Configuration")]),t._v(". This ensures that all ESC provide exactly the same output for a given input (ideally we'd calibrate ESCs first, but you can't calibrate your ESCs until outputs are mapped).")],1),t._v(" "),o("p",[t._v("The final step is "),o("RouterLink",{attrs:{to:"/zh/config/actuators.html#motor-configuration"}},[t._v("Motor Configuration")]),t._v(":")],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/actuators.html#reversing-motors"}},[t._v("Reverse any motors")]),t._v(" that don't match the spin direction configured in the Geometry. For DShot ESC you can do this through the Acuator Testing UI.")],1),t._v(" "),o("li",[t._v("PWM, OneShot, and CAN ESC, set the motor input limits for disarmed, low and high speed (not needed for DShot ESC)")])]),t._v(" "),o("p",[t._v("Relevant topics:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("Vehicle (Frame) Selection")]),t._v(" — Select vehicle type to match your frame.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Actuator Configuration and Testing")]),t._v(" — Vehicle geometry, output mapping, motor configuration, testing.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/esc_calibration.html"}},[t._v("ESC Calibration")]),t._v(" — Do between output mapping and motor configuration (topic above) for PWM and OneShot ESC.")],1)]),t._v(" "),o("h2",{attrs:{id:"sensor-setup-and-calibration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sensor-setup-and-calibration"}},[t._v("#")]),t._v(" Sensor Setup and Calibration")]),t._v(" "),o("p",[t._v("PX4 most commonly relies on a magnetometer (compass) for direction information, a barometer for altitude, a gyroscope for body rates, an accelerometer for attitude and a GPS/GNSS for global position. Pixhawk flight controllers (and many others) have inbuilt magnetometer, accelerometer, gyroscope, and barometer. The inbuilt compass usually isn't particularly reliable, and it is common to also add an external compass (usually combined with a GNSS receiver in the same device).")]),t._v(" "),o("p",[t._v("We first need to set the "),o("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("Sensor Orientation")]),t._v(", informing PX4 how the autopilot (and its inbuilt sensors) and external compasses are oriented relative to the vehicle. Generally you'll orient towards the front of the vehicle and not have to set anything. Once that is done we need to calibrate the compass(es), gyroscope, and accelerometer.")],1),t._v(" "),o("p",[t._v("The core sensor setup is covered in these topics:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("Sensor Orientation")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[t._v("Compass")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/gyroscope.html"}},[t._v("Gyroscope")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/accelerometer.html"}},[t._v("Accelerometer")])],1)]),t._v(" "),o("p",[t._v("PX4 can use other peripherals, such as distance sensors, optical flow sensors, traffic avoidance alarms, cameras, and so on:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("Flight Controller Peripherals")]),t._v(" - Setup specific sensors, optional sensors, actuators, and so on.")],1)]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("Sensors that you don't need to calibrate/configure include:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/level_horizon_calibration.html"}},[t._v("Level Horizon")]),t._v(" calibration isn't usually needed if you have mounted the flight controller level.")],1),t._v(" "),o("li",[t._v("Sensors that are not present, or that are not used by PX4 multicopter for flight control, such as "),o("RouterLink",{attrs:{to:"/zh/config/airspeed.html"}},[t._v("Airspeed sensors")]),t._v(".")],1),t._v(" "),o("li",[t._v("Sensors that don't need calibration, including: Barometers and GNSS.")])])]),t._v(" "),o("h2",{attrs:{id:"manual-control-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manual-control-setup"}},[t._v("#")]),t._v(" Manual Control Setup")]),t._v(" "),o("p",[t._v("Pilots can control a vehicle manually using either a Radio Control (RC) System or a Joystick/Gamepad controller connected via QGroundControl.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("A manual control is essential in order to bring up a new vehicle safely!")])]),t._v(" "),o("p",[t._v("Radio Control:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("Radio Controller (RC) Setup")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("Flight Mode Configuration")])],1)]),t._v(" "),o("p",[t._v("Joystick/GamePad:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/joystick.html"}},[t._v("Joystick Setup")]),t._v(" (includes button/flight mode mapping)")],1)]),t._v(" "),o("h2",{attrs:{id:"safety-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#safety-configuration"}},[t._v("#")]),t._v(" Safety Configuration")]),t._v(" "),o("p",[t._v("PX4 can be configured to automatically handle conditions such as low battery, losing radio or data links, flying too far from the home location, and so on:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/battery.html"}},[t._v("Battery/Power Module Setup")]),t._v(" — estimate remaining power (needed for low power failsafe).")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("Safety Configuration (Failsafes)")])],1)]),t._v(" "),o("h2",{attrs:{id:"tuning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[t._v("#")]),t._v(" Tuning")]),t._v(" "),o("p",[t._v("Tuning is the final step, carried out only after most other setup and configuration is complete.")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Rate and attitude controllers:")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/zh/config/autotune.html"}},[t._v("Autotune")]),t._v(" — Automates tuning PX4 rate and attitude controllers (recommended).")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")])])])]),t._v(" "),o("p",[t._v("Automatic tuning works on frames that have reasonable authority and dynamics around all the body axes.\nIt has primarily been tested on racing quads and X500, and is expected to be less effective on tricopters with a tiltable rotor.\nThe other two guides are only needed if there is a problem with autotune.\n:::")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter_basic.html"}},[t._v("MC PID Tuning (Manual/Basic)")]),t._v(" — Manual tuning basic how to.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("MC PID Tuning Guide (Manual/Detailed)")]),t._v(" — Manual tuning with detailed explanation.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config_mc/filter_tuning.html"}},[t._v("MC Filter/Control Latency Tuning")]),t._v(" — Trade off control latency and noise filtering.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config_mc/mc_trajectory_tuning.html"}},[t._v("MC Setpoint Tuning (Trajectory Generator)")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("MC Jerk-limited Type Trajectory")])],1)])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config_mc/racer_setup.html"}},[t._v("Multicopter Racer Setup")])],1)]),t._v(" "),o("h2",{attrs:{id:"see-also"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/SetupView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > Setup"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("Flight Controller Peripherals")]),t._v(" - Setup specific sensors, optional sensors, actuators, and so on.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/"}},[t._v("Advanced Configuration")]),t._v(" - Factory/OEM calibration, configuring advanced features, less-common configuration.")],1),t._v(" "),o("li",[t._v("Vehicle-Centric Config/Tuning:\n"),o("ul",[o("li",[o("strong",[t._v("Multicopter Config/Tuning")])]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config_heli/"}},[t._v("Helicopter Config/Tuning")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config_fw/"}},[t._v("Fixed Wing Config/Tuning")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config_vtol/"}},[t._v("VTOL Config/Tuning")])],1)])])])])}),[],!1,null,null,null);e.default=a.exports}}]);