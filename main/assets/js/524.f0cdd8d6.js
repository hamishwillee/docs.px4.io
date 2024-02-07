(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{1859:function(e,t,a){"use strict";a.r(t);var o=a(19),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"gimbal-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gimbal-configuration"}},[e._v("#")]),e._v(" Gimbal Configuration")]),e._v(" "),o("p",[e._v("This page explains how to configure and control a gimbal that has an attached camera (or any other payload).")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("PX4 contains a generic mount/gimbal control driver that supports different input and output methods:")]),e._v(" "),o("ul",[o("li",[e._v("The input method defines the protocol used to command a gimbal mount that is managed by PX4.\nThis might be an RC controller, a MAVLink command sent by a GCS, or both — automatically switching between them.")]),e._v(" "),o("li",[e._v("The output method defines how PX4 communicates with the connected gimbal.\nThe recommended protocol is MAVLink v2, but you can also connect directly to a flight controller PWM output port.")])]),e._v(" "),o("p",[e._v("PX4 takes the input signal and routes/translates it to be sent through to the output.\nAny input method can be selected to drive any output.")]),e._v(" "),o("p",[e._v("Both the input and output are configured using parameters.\nThe input is set using the parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[e._v("MNT_MODE_IN")]),e._v(".\nBy default this is set to "),o("code",[e._v("Disabled (-1)")]),e._v(" and the driver does not run.\nAfter selecting the input mode, reboot the vehicle to start the mount driver.")],1),e._v(" "),o("p",[e._v("You should set "),o("code",[e._v("MNT_MODE_IN")]),e._v(" to one of: "),o("code",[e._v("RC (1)")]),e._v(", "),o("code",[e._v("MAVlink gimbal protocol v2 (4)")]),e._v(" or "),o("code",[e._v("Auto (0)")]),e._v(" (the other options are deprecated).\nIf you select "),o("code",[e._v("Auto (0)")]),e._v(", the gimbal will automatically select either RC or or MAVLink input based on the latest input.\nNote that the auto-switch from MAVLink to RC requires a large stick motion!")]),e._v(" "),o("p",[e._v("The output is set using the "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[e._v("MNT_MODE_OUT")]),e._v(" parameter.\nBy default the output is set to a PXM port ("),o("code",[e._v("AUX (0)")]),e._v(").\nIf the "),o("a",{attrs:{href:"https://mavlink.io/en/services/gimbal_v2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Gimbal Protocol v2"),o("OutboundLink")],1),e._v(" is supported by your gimbal, you should instead select "),o("code",[e._v("MAVLink gimbal protocol v2 (2)")]),e._v(".")],1),e._v(" "),o("p",[e._v("The full list of parameters for setting up the mount driver can be found in "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#mount"}},[e._v("Parameter Reference > Mount")]),e._v(".\nThe relevant settings for a number of common gimbal configurations are described below.")],1),e._v(" "),o("h2",{attrs:{id:"mavlink-gimbal-mnt-mode-out-mavlink"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-gimbal-mnt-mode-out-mavlink"}},[e._v("#")]),e._v(" MAVLink Gimbal (MNT_MODE_OUT=MAVLINK)")]),e._v(" "),o("p",[e._v("Each physical gimbal device on the system must have its own high level gimbal manager, which is discoverable by a ground station using the MAVLink gimbal protocol.\nThe ground station sends high level "),o("a",{attrs:{href:"https://mavlink.io/en/services/gimbal_v2.html#gimbal-manager-messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Gimbal Manager"),o("OutboundLink")],1),e._v(' commands to the manager of the gimbal it wants to control, and the manager will in turn send appropriate lower level "gimbal device" commands to control the gimbal.')]),e._v(" "),o("p",[e._v("PX4 can be configured as the gimbal manager to control a single gimbal device (which can either be physically connected or be a MAVLink gimbal that implements the "),o("a",{attrs:{href:"https://mavlink.io/en/services/gimbal_v2.html#gimbal-device-messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("gimbal device interface"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("p",[e._v("To enable a MAVLink gimbal, first set parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[e._v("MNT_MODE_IN")]),e._v(" to "),o("code",[e._v("MAVlink gimbal protocol v2")]),e._v(" and "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[e._v("MNT_MODE_OUT")]),e._v(" to "),o("code",[e._v("MAVLink gimbal protocol v2")]),e._v(".")],1),e._v(" "),o("p",[e._v("The gimbal can be connected to "),o("em",[e._v("any free serial port")]),e._v(" using the instructions in "),o("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripherals (GCS/OSD/Companion)")]),e._v(" (also see "),o("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html#serial-port-configuration"}},[e._v("Serial Port Configuration")]),e._v(").\nFor example, if the "),o("code",[e._v("TELEM2")]),e._v(" port on the flight controller is unused you can connect it to the gimbal and set the following PX4 parameters:")],1),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[e._v("MAV_1_CONFIG")]),e._v(" to "),o("strong",[e._v("TELEM2")]),e._v(" (if "),o("code",[e._v("MAV_1_CONFIG")]),e._v(" is already used for a companion computer (say), use "),o("code",[e._v("MAV_2_CONFIG")]),e._v(").")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_MODE"}},[e._v("MAV_1_MODE")]),e._v(" to "),o("strong",[e._v("NORMAL")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[e._v("SER_TEL2_BAUD")]),e._v(" to manufacturer recommended baud rate.")],1)]),e._v(" "),o("h3",{attrs:{id:"multiple-gimbal-support"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multiple-gimbal-support"}},[e._v("#")]),e._v(" Multiple Gimbal Support")]),e._v(" "),o("p",[e._v("PX4 can automatically create a gimbal manager for a connected PWM gimbal or the first MAVLink gimbal device with the same system id it detects on any interface.\nIt does not automatically create gimbal manager for any other MAVLink gimbal devices that it detects.")]),e._v(" "),o("p",[e._v("You can support additional gimbals provided that they:")]),e._v(" "),o("ul",[o("li",[e._v("implement the gimbal "),o("em",[e._v("manager")]),e._v(" protocol")]),e._v(" "),o("li",[e._v("Are visible to the ground station and PX4 on the MAVLink network.\nThis may require that traffic forwarding be configured between PX4, the GCS, and the gimbal.")]),e._v(" "),o("li",[e._v("Each gimbal must have a unique component id.\nFor a PWM connected gimbal this will be the component ID of the autopilot")])]),e._v(" "),o("h2",{attrs:{id:"gimbal-on-fc-pwm-output-mnt-mode-out-aux"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gimbal-on-fc-pwm-output-mnt-mode-out-aux"}},[e._v("#")]),e._v(" Gimbal on FC PWM Output (MNT_MODE_OUT=AUX)")]),e._v(" "),o("p",[e._v("The gimbal can also be controlled by connecting it to up to three flight controller PWM ports and setting the output mode to "),o("code",[e._v("MNT_MODE_OUT=AUX")]),e._v(".")]),e._v(" "),o("p",[e._v("The output pins that are used to control the gimbal are set in the "),o("RouterLink",{attrs:{to:"/en/config/actuators.html#actuator-outputs"}},[e._v("Acuator Configuration > Outputs")]),e._v(" by selecting any three unused Actuator Outputs and assigning them the following output functions:")],1),e._v(" "),o("ul",[o("li",[o("code",[e._v("Gimbal Roll")]),e._v(": Output controls gimbal roll.")]),e._v(" "),o("li",[o("code",[e._v("Gimbal Pitch")]),e._v(": Output controls Gimbal pitch.")]),e._v(" "),o("li",[o("code",[e._v("Gimbal Yaw")]),e._v(": Output controls Gimbal pitch.")])]),e._v(" "),o("p",[e._v("For example, you might have the following settings to assign the gimbal roll, pitch and yaw to AUX1-3 outputs.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(460),alt:"Gimbal Actuator config"}})]),e._v(" "),o("p",[e._v("The PWM values to use for the disarmed, maximum and minimum values can be determined in the same way as other servo, using the "),o("RouterLink",{attrs:{to:"/en/config/actuators.html#actuator-testing"}},[e._v("Actuator Test sliders")]),e._v(" to confirm that each slider moves the appropriate axis, and changing the values so that the gimbal is in the appropriate position at the disarmed, low and high position in the slider.\nThe values may also be provided in gimbal documentation.")],1),e._v(" "),o("h2",{attrs:{id:"sitl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sitl"}},[e._v("#")]),e._v(" SITL")]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[e._v("Gazebo Classic")]),e._v(" simulation "),o("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/vehicles.html#typhoon-h480-hexrotor"}},[e._v("Typhoon H480 model")]),e._v(" comes with a preconfigured simulated gimbal.")],1),e._v(" "),o("p",[e._v("To run it, use:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gazebo-classic_typhoon_h480\n")])])]),o("p",[e._v("To just test the "),o("RouterLink",{attrs:{to:"/en/modules/modules_driver.html#gimbal"}},[e._v("gimbal driver")]),e._v(" on other models or simulators, make sure the driver runs (using "),o("code",[e._v("gimbal start")]),e._v("), then configure its parameters.")],1),e._v(" "),o("h2",{attrs:{id:"testing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),o("p",[e._v("The driver provides a simple test command.\nThe following describes testing in SITL, but the commands also work on a real device.")]),e._v(" "),o("p",[e._v("Start the simulation with (no parameter needs to be changed for that):")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gazebo-classic_typhoon_h480\n")])])]),o("p",[e._v("Make sure it's armed, eg. with "),o("code",[e._v("commander takeoff")]),e._v(", then use the following command to control the gimbal (for example):")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[e._v("gimbal "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" yaw "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v("\n")])])]),o("p",[e._v("Note that the simulated gimbal stabilizes itself, so if you send MAVLink commands, set the "),o("code",[e._v("stabilize")]),e._v(" flags to "),o("code",[e._v("false")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:a(461),alt:"Gazebo Gimbal Simulation"}})])])}),[],!1,null,null,null);t.default=n.exports},460:function(e,t){e.exports="data:image/png;base64,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"},461:function(e,t,a){e.exports=a.p+"assets/img/gimbal-simulation.1b22a642.png"}}]);