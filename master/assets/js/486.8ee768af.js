(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{1443:function(t,e,a){"use strict";a.r(e);var o=a(19),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"gimbal-control-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gimbal-control-setup"}},[t._v("#")]),t._v(" Gimbal Control Setup")]),t._v(" "),o("p",[t._v("If you want to control a gimbal with a camera (or any other payload) attached to the vehicle, you need to configure how you want to control it and how PX4 can command it.\nThis page explains the setup.")]),t._v(" "),o("p",[t._v("PX4 contains a generic mount/gimbal control driver with different input and output methods.")]),t._v(" "),o("ul",[o("li",[t._v("The input defines how you control the gimbal: via RC or via MAVLink commands (for example in missions or surveys).")]),t._v(" "),o("li",[t._v("The output defines how the gimbal is connected: either via MAVLink commands or using the Flight Controller AUX PWM port.\nAny input method can be selected to drive any output, and both input and output have to be configured via parameters.")])]),t._v(" "),o("h2",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#mount"}},[t._v("Mount")]),t._v(" parameters are used to setup the mount driver.")],1),t._v(" "),o("p",[t._v("The most important ones are the input ("),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v(") and the output ("),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v(") mode.\nBy default, the input is disabled and the driver does not run.\nAfter selecting the input mode, reboot the vehicle so that the mount driver starts.")],1),t._v(" "),o("p",[t._v("If the input mode is set to "),o("code",[t._v("AUTO")]),t._v(", the mode will automatically be switched based on the latest input.\nTo switch from MAVLink to RC, a large stick motion is required.")]),t._v(" "),o("h2",{attrs:{id:"mavlink-gimbal-mnt-mode-out-mavlink"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-gimbal-mnt-mode-out-mavlink"}},[t._v("#")]),t._v(" MAVLink Gimbal (MNT_MODE_OUT=MAVLINK)")]),t._v(" "),o("p",[t._v("To enable a MAVLink gimbal, first set parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v(" to "),o("code",[t._v("MAVLINK_DO_MOUNT")]),t._v(" and "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v(" to "),o("code",[t._v("MAVLINK")]),t._v(".")],1),t._v(" "),o("p",[t._v("The gimbal can be connected to "),o("em",[t._v("any free serial port")]),t._v(" using the instructions in "),o("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals (GCS/OSD/Companion)")]),t._v(" (also see "),o("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html#serial-port-configuration"}},[t._v("Serial Port Configuration")]),t._v(").")],1),t._v(" "),o("p",[t._v("A common configuration is to have a serial connection to the gimbal from the Flight Controller TELEM2 port (assuming TELEM2 is free).\nFor this configuration you would set:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" to "),o("strong",[t._v("TELEM2")]),t._v(" (if "),o("code",[t._v("MAV_1_CONFIG")]),t._v(" is already used for a companion computer (say), use "),o("code",[t._v("MAV_2_CONFIG")]),t._v(").")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" to "),o("strong",[t._v("NORMAL")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(" to manufacturer recommended baud rate.")],1)]),t._v(" "),o("p",[t._v("This will enable the user to command the gimbal using "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_MOUNT_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_MOUNT_CONTROL"),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_MOUNT_CONFIGURE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_MOUNT_CONFIGURE"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"gimbal-on-flight-controller-mnt-mode-out-aux"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gimbal-on-flight-controller-mnt-mode-out-aux"}},[t._v("#")]),t._v(" Gimbal on Flight Controller (MNT_MODE_OUT=AUX)")]),t._v(" "),o("p",[t._v("The gimbal can be connected to the Flight controller AUX ports by setting the output mode to "),o("code",[t._v("MNT_MODE_OUT=AUX")]),t._v(".")]),t._v(" "),o("p",[t._v("A mixer file is required to define the mapping for the output pins and the "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/mount.aux.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("mount mixer"),o("OutboundLink")],1),t._v(" is automatically selected (this overrides any AUX mixer provided by the airframe configuration).")]),t._v(" "),o("p",[t._v("The output assignment is as following:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("AUX1")]),t._v(": Pitch")]),t._v(" "),o("li",[o("strong",[t._v("AUX2")]),t._v(": Roll")]),t._v(" "),o("li",[o("strong",[t._v("AUX3")]),t._v(": Yaw")]),t._v(" "),o("li",[o("strong",[t._v("AUX4")]),t._v(": Shutter/retract")])]),t._v(" "),o("h3",{attrs:{id:"customizing-the-mixer-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-mixer-configuration"}},[t._v("#")]),t._v(" Customizing the mixer configuration")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Read "),o("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[t._v("Mixing and Actuators")]),t._v(" for an explanation of how mixers work and the format of the mixer file.")],1)]),t._v(" "),o("p",[t._v("The outputs can be customized by "),o("RouterLink",{attrs:{to:"/en/concept/system_startup.html#starting-a-custom-mixer"}},[t._v("creating a mixer file")]),t._v(" on the SD card named "),o("code",[t._v("etc/mixers/mount.aux.mix")]),t._v(".")],1),t._v(" "),o("p",[t._v("A basic mixer configuration for a mount is shown below.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("# roll\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 0  10000  10000      0 -10000  10000\n\n# pitch\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 1  10000  10000      0 -10000  10000\n\n# yaw\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 2  10000  10000      0 -10000  10000\n")])])]),o("h2",{attrs:{id:"sitl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sitl"}},[t._v("#")]),t._v(" SITL")]),t._v(" "),o("p",[t._v("The Typhoon H480 model comes with a preconfigured simulated gimbal.")]),t._v(" "),o("p",[t._v("To run it, use:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_sitl gazebo_typhoon_h480\n")])])]),o("p",[t._v("To just test the mount driver on other models or simulators, make sure the driver runs (using "),o("code",[t._v("vmount start")]),t._v("), then configure its parameters.")]),t._v(" "),o("h2",{attrs:{id:"testing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),o("p",[t._v("The driver provides a simple test command - it needs to be stopped first with "),o("code",[t._v("vmount stop")]),t._v(".\nThe following describes testing in SITL, but the commands also work on a real device.")]),t._v(" "),o("p",[t._v("Start the simulation with (no parameter needs to be changed for that):")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_sitl gazebo_typhoon_h480\n")])])]),o("p",[t._v("Make sure it's armed, eg. with "),o("code",[t._v("commander takeoff")]),t._v(", then use the following command to control the gimbal (for example):")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("vmount test yaw 30\n")])])]),o("p",[t._v("Note that the simulated gimbal stabilizes itself, so if you send MAVLink commands, set the "),o("code",[t._v("stabilize")]),t._v(" flags to "),o("code",[t._v("false")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:a(435),alt:"Gazebo Gimbal Simulation"}})])])}),[],!1,null,null,null);e.default=n.exports},435:function(t,e,a){t.exports=a.p+"assets/img/gimbal-simulation.bbac9883.png"}}]);