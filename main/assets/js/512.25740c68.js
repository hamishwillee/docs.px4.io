(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{1727:function(t,e,a){"use strict";a.r(e);var o=a(19),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"gimbal-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gimbal-configuration"}},[t._v("#")]),t._v(" Gimbal Configuration")]),t._v(" "),o("p",[t._v("This page explains how to configure and control a gimbal that has an attached camera (or any other payload).")]),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("p",[t._v("PX4 contains a generic mount/gimbal control driver that supports different input and output methods:")]),t._v(" "),o("ul",[o("li",[t._v("The input method defines the protocol used to command a gimbal mount that is managed by PX4.\nThis might be an RC controller, a MAVLink command sent by a GCS, or both — automatically switching between them.")]),t._v(" "),o("li",[t._v("The output method defines how PX4 communicates with the connected gimbal.\nThe recommended protocol is MAVLink v2, but you can also connect directly to a flight controller PWM output port.")])]),t._v(" "),o("p",[t._v("PX4 takes the input signal and routes/translates it to be sent through to the output.\nAny input method can be selected to drive any output.")]),t._v(" "),o("p",[t._v("Both the input and output are configured using parameters.\nThe input is set using the parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v(".\nBy default this is set to "),o("code",[t._v("Disabled (-1)")]),t._v(" and the driver does not run.\nAfter selecting the input mode, reboot the vehicle to start the mount driver.")],1),t._v(" "),o("p",[t._v("You should set "),o("code",[t._v("MNT_MODE_IN")]),t._v(" to one of: "),o("code",[t._v("RC (1)")]),t._v(", "),o("code",[t._v("MAVlink gimbal protocol v2 (4)")]),t._v(" or "),o("code",[t._v("Auto (0)")]),t._v(" (the other options are deprecated).\nIf you select "),o("code",[t._v("Auto (0)")]),t._v(", the gimbal will automatically select either RC or or MAVLink input based on the latest input.\nNote that the auto-switch from MAVLink to RC requires a large stick motion!")]),t._v(" "),o("p",[t._v("The output is set using the "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v(" parameter.\nBy default the output is set to a PXM port ("),o("code",[t._v("AUX (0)")]),t._v(").\nIf the "),o("a",{attrs:{href:"https://mavlink.io/en/services/gimbal_v2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Gimbal Protocol v2"),o("OutboundLink")],1),t._v(" is supported by your gimbal, you should instead select "),o("code",[t._v("MAVLink gimbal protocol v2 (2)")]),t._v(".")],1),t._v(" "),o("p",[t._v("The full list of parameters for setting up the mount driver can be found in "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#mount"}},[t._v("Parameter Reference > Mount")]),t._v(".\nThe relevant settings for a number of common gimbal configurations are described below.")],1),t._v(" "),o("h2",{attrs:{id:"mavlink-gimbal-mnt-mode-out-mavlink"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-gimbal-mnt-mode-out-mavlink"}},[t._v("#")]),t._v(" MAVLink Gimbal (MNT_MODE_OUT=MAVLINK)")]),t._v(" "),o("p",[t._v("Each physical gimbal device on the system must have its own high level gimbal manager, which is discoverable by a ground station using the MAVLink gimbal protocol.\nThe ground station sends high level "),o("a",{attrs:{href:"https://mavlink.io/en/services/gimbal_v2.html#gimbal-manager-messages",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Gimbal Manager"),o("OutboundLink")],1),t._v(' commands to the manager of the gimbal it wants to control, and the manager will in turn send appropriate lower level "gimbal device" commands to control the gimbal.')]),t._v(" "),o("p",[t._v("PX4 can be configured as the gimbal manager to control a single gimbal device (which can either be physically connected or be a MAVLink gimbal that implements the "),o("a",{attrs:{href:"https://mavlink.io/en/services/gimbal_v2.html#gimbal-device-messages",target:"_blank",rel:"noopener noreferrer"}},[t._v("gimbal device interface"),o("OutboundLink")],1),t._v(").")]),t._v(" "),o("p",[t._v("To enable a MAVLink gimbal, first set parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v(" to "),o("code",[t._v("MAVlink gimbal protocol v2")]),t._v(" and "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v(" to "),o("code",[t._v("MAVLink gimbal protocol v2")]),t._v(".")],1),t._v(" "),o("p",[t._v("The gimbal can be connected to "),o("em",[t._v("any free serial port")]),t._v(" using the instructions in "),o("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals (GCS/OSD/Companion)")]),t._v(" (also see "),o("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html#serial-port-configuration"}},[t._v("Serial Port Configuration")]),t._v(").\nFor example, if the "),o("code",[t._v("TELEM2")]),t._v(" port on the flight controller is unused you can connect it to the gimbal and set the following PX4 parameters:")],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" to "),o("strong",[t._v("TELEM2")]),t._v(" (if "),o("code",[t._v("MAV_1_CONFIG")]),t._v(" is already used for a companion computer (say), use "),o("code",[t._v("MAV_2_CONFIG")]),t._v(").")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" to "),o("strong",[t._v("NORMAL")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(" to manufacturer recommended baud rate.")],1)]),t._v(" "),o("h3",{attrs:{id:"multiple-gimbal-support"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multiple-gimbal-support"}},[t._v("#")]),t._v(" Multiple Gimbal Support")]),t._v(" "),o("p",[t._v("PX4 can automatically create a gimbal manager for a connected PWM gimbal or the first MAVLink gimbal device with the same system id it detects on any interface.\nIt does not automatically create gimbal manager for any other MAVLink gimbal devices that it detects.")]),t._v(" "),o("p",[t._v("You can support additional gimbals provided that they:")]),t._v(" "),o("ul",[o("li",[t._v("implement the gimbal "),o("em",[t._v("manager")]),t._v(" protocol")]),t._v(" "),o("li",[t._v("Are visible to the ground station and PX4 on the MAVLink network.\nThis may require that traffic forwarding be configured between PX4, the GCS, and the gimbal.")]),t._v(" "),o("li",[t._v("Each gimbal must have a unique component id.\nFor a PWM connected gimbal this will be the component ID of the autopilot")])]),t._v(" "),o("h2",{attrs:{id:"gimbal-on-fc-pwm-output-mnt-mode-out-aux"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gimbal-on-fc-pwm-output-mnt-mode-out-aux"}},[t._v("#")]),t._v(" Gimbal on FC PWM Output (MNT_MODE_OUT=AUX)")]),t._v(" "),o("p",[t._v("The gimbal can also be controlled by connecting it to up to three flight controller PWM ports and setting the output mode to "),o("code",[t._v("MNT_MODE_OUT=AUX")]),t._v(".")]),t._v(" "),o("p",[t._v("The output pins that are used to control the gimbal are set in the "),o("RouterLink",{attrs:{to:"/en/config/actuators.html#actuator-outputs"}},[t._v("Acuator Configuration > Outputs")]),t._v(" by selecting any three unused Actuator Outputs and assigning them the following output functions:")],1),t._v(" "),o("ul",[o("li",[o("code",[t._v("Gimbal Roll")]),t._v(": Output controls gimbal roll.")]),t._v(" "),o("li",[o("code",[t._v("Gimbal Pitch")]),t._v(": Output controls Gimbal pitch.")]),t._v(" "),o("li",[o("code",[t._v("Gimbal Yaw")]),t._v(": Output controls Gimbal pitch.")])]),t._v(" "),o("p",[t._v("For example, you might have the following settings to assign the gimbal roll, pitch and yaw to AUX1-3 outputs.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(490),alt:"Gimbal Actuator config"}})]),t._v(" "),o("p",[t._v("The PWM values to use for the disarmed, maximum and minimum values can be determined in the same way as other servo, using the "),o("RouterLink",{attrs:{to:"/en/config/actuators.html#actuator-testing"}},[t._v("Actuator Test sliders")]),t._v(" to confirm that each slider moves the appropriate axis, and changing the values so that the gimbal is in the appropriate position at the disarmed, low and high position in the slider.\nThe values may also be provided in gimbal documentation.")],1),t._v(" "),o("h2",{attrs:{id:"sitl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sitl"}},[t._v("#")]),t._v(" SITL")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" simulation "),o("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/gazebo_vehicles.html#typhoon-h480-hexrotor"}},[t._v("Typhoon H480 model")]),t._v(" comes with a preconfigured simulated gimbal.")],1),t._v(" "),o("p",[t._v("To run it, use:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_sitl gazebo-classic_typhoon_h480\n")])])]),o("p",[t._v("To just test the mount driver on other models or simulators, make sure the driver runs (using "),o("code",[t._v("vmount start")]),t._v("), then configure its parameters.")]),t._v(" "),o("h2",{attrs:{id:"testing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),o("p",[t._v("The driver provides a simple test command — it needs to be stopped first with "),o("code",[t._v("vmount stop")]),t._v(".\nThe following describes testing in SITL, but the commands also work on a real device.")]),t._v(" "),o("p",[t._v("Start the simulation with (no parameter needs to be changed for that):")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_sitl gazebo-classic_typhoon_h480\n")])])]),o("p",[t._v("Make sure it's armed, eg. with "),o("code",[t._v("commander takeoff")]),t._v(", then use the following command to control the gimbal (for example):")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("vmount test yaw 30\n")])])]),o("p",[t._v("Note that the simulated gimbal stabilizes itself, so if you send MAVLink commands, set the "),o("code",[t._v("stabilize")]),t._v(" flags to "),o("code",[t._v("false")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:a(491),alt:"Gazebo Gimbal Simulation"}})])])}),[],!1,null,null,null);e.default=i.exports},490:function(t,e,a){t.exports=a.p+"assets/img/qgc_actuators_gimbal.5e7782d0.png"},491:function(t,e,a){t.exports=a.p+"assets/img/gimbal-simulation.bbac9883.png"}}]);