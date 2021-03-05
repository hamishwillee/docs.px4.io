(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1283:function(t,e,a){t.exports=a.p+"assets/img/px4_hitl_overview_jmavsim_gazebo.d97171c8.png"},1284:function(t,e,a){t.exports=a.p+"assets/img/qgc_hitl_config.cad209a4.png"},1285:function(t,e,a){t.exports=a.p+"assets/img/qgc_hil_config.7d1c6265.png"},1286:function(t,e,a){t.exports=a.p+"assets/img/qgc_hitl_autoconnect.bd418a05.png"},1287:function(t,e,a){t.exports=a.p+"assets/img/gazebo_sdf_model_hil_params.d0007222.png"},2215:function(t,e,a){"use strict";a.r(e);var o=a(18),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"hardware-in-the-loop-simulation-hitl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-in-the-loop-simulation-hitl"}},[t._v("#")]),t._v(" Hardware in the Loop Simulation (HITL)")]),t._v(" "),o("p",[t._v("Hardware-in-the-Loop (HITL or HIL) is a simulation mode in which normal PX4 firmware is run on real flight controller hardware. This approach has the benefit of testing most of the actual flight code on the real hardware.")]),t._v(" "),o("p",[t._v("PX4 supports HITL for multicopters (using jMAVSim or Gazebo) and fixed wing (using Gazebo or X-Plane demo/full version).")]),t._v(" "),o("p",[o("a",{attrs:{id:"compatible_airframe"}})]),t._v(" "),o("h2",{attrs:{id:"hitl-compatible-airframes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hitl-compatible-airframes"}},[t._v("#")]),t._v(" HITL-Compatible Airframes")]),t._v(" "),o("p",[t._v("The current set of compatible airframes vs Simulators is:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Airframe")]),t._v(" "),o("th",[o("code",[t._v("SYS_AUTOSTART")])]),t._v(" "),o("th",[t._v("Gazebo")]),t._v(" "),o("th",[t._v("jMAVSim")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_simulation_(copter)_hil_quadcopter_x"}},[t._v("HIL Quadcopter X")])],1),t._v(" "),o("td",[t._v("1001")]),t._v(" "),o("td",[t._v("Y")]),t._v(" "),o("td",[t._v("Y")])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#vtol_standard_vtol_hil_standard_vtol_quadplane"}},[t._v("HIL Standard VTOL QuadPlane")])],1),t._v(" "),o("td",[t._v("1002")]),t._v(" "),o("td",[t._v("Y")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadrotor_x"}},[t._v("Generic Quadrotor x")]),t._v(" copter")],1),t._v(" "),o("td",[t._v("4001")]),t._v(" "),o("td",[t._v("Y")]),t._v(" "),o("td",[t._v("Y")])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_quadrotor_x_dji_flame_wheel_f450"}},[t._v("DJI Flame Wheel f450")])],1),t._v(" "),o("td",[t._v("4011")]),t._v(" "),o("td",[t._v("Y")]),t._v(" "),o("td",[t._v("Y")])])])]),t._v(" "),o("p",[o("a",{attrs:{id:"simulation_environment"}})]),t._v(" "),o("h2",{attrs:{id:"hitl-simulation-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hitl-simulation-environment"}},[t._v("#")]),t._v(" HITL Simulation Environment")]),t._v(" "),o("p",[t._v("With Hardware-in-the-Loop (HITL) simulation the normal PX4 firmware is run on real hardware. JMAVSim or Gazebo (running on a development computer) are connected to the flight controller hardware via USB/UART. The simulator acts as gateway to share MAVLink data between PX4 and "),o("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The simulator can also be connected via UDP if the flight controller has networking support and uses a stable, low-latency connection (e.g. a wired Ethernet connection - WiFi is usually not sufficiently reliable). For example, this configuration has been tested with PX4 running on a Raspberry Pi connected via Ethernet to the computer (a startup configuration that includes the command for running jMAVSim can be found "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/posix-configs/rpi/px4_hil.config",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(").")])]),t._v(" "),o("p",[t._v("The diagram below shows the simulation environment:")]),t._v(" "),o("ul",[o("li",[t._v("A HITL configuration is selected (via "),o("em",[t._v("QGroundControl")]),t._v(") that doesn't start any real sensors.")]),t._v(" "),o("li",[o("em",[t._v("jMAVSim")]),t._v(" or "),o("em",[t._v("Gazebo")]),t._v(" are connected to the flight controller via USB.")]),t._v(" "),o("li",[t._v("The simulator is connected to "),o("em",[t._v("QGroundControl")]),t._v(" via UDP and bridges its MAVLink messages to PX4.")]),t._v(" "),o("li",[t._v("(Optional - Gazebo only) Gazebo can also connect to an offboard API and bridge MAVLink messages to PX4.")]),t._v(" "),o("li",[t._v("(Optional) A serial connection can be used to connect Joystick/Gamepad hardware via "),o("em",[t._v("QGroundControl")]),t._v(".")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1283),alt:"HITL Setup - jMAVSim and Gazebo"}})]),t._v(" "),o("h2",{attrs:{id:"hitl-vs-sitl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hitl-vs-sitl"}},[t._v("#")]),t._v(" HITL vs SITL")]),t._v(" "),o("p",[t._v("SITL runs on a development computer in a simulated environment, and uses firmware specifically generated for that environment. Other than simulation drivers to provide fake environmental data from the simulator the system behaves normally.")]),t._v(" "),o("p",[t._v('By contrast, HITL runs normal PX4 firmware in "HITL mode", on normal hardware. The simulation data enters the system at a different point than for SITL. Core modules like commander and sensors have HITL modes at startup that bypass some of the normal functionality.')]),t._v(" "),o("p",[t._v("In summary, HITL runs PX4 on the actual hardware using standard firmware, but SITL actually executes more of the standard system code.")]),t._v(" "),o("h2",{attrs:{id:"setting-up-hitl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-hitl"}},[t._v("#")]),t._v(" Setting up HITL")]),t._v(" "),o("h3",{attrs:{id:"px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),o("ol",[o("li",[t._v("Connect the autopilot directly to "),o("em",[t._v("QGroundControl")]),t._v(" via USB.")]),t._v(" "),o("li",[t._v("Enable HITL Mode\n"),o("ol",[o("li",[o("p",[t._v("Open "),o("strong",[t._v("Setup > Safety")]),t._v(" section.")])]),t._v(" "),o("li",[o("p",[t._v("Enable HITL mode by selecting "),o("strong",[t._v("Enabled")]),t._v(" from the "),o("em",[t._v("HITL Enabled")]),t._v(" list:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1284),alt:"QGroundControl HITL configuration"}})])])])]),t._v(" "),o("li",[t._v("Select Airframe\n"),o("ol",[o("li",[o("p",[t._v("Open "),o("strong",[t._v("Setup > Airframes")])])]),t._v(" "),o("li",[o("p",[t._v("Select a "),o("a",{attrs:{href:"#compatible_airframe"}},[t._v("compatible airframe")]),t._v(' you want to test. Then click "Apply and Restart" on top-right of the Airframe Setup page.')]),t._v(" "),o("p",[o("img",{attrs:{src:a(1285),alt:"Select Airframe"}})])])])]),t._v(" "),o("li",[t._v("Calibrate your RC or Joystick, if needed.")]),t._v(" "),o("li",[t._v("Setup UDP\n"),o("ol",[o("li",[o("p",[t._v("Under the "),o("em",[t._v("General")]),t._v(" tab of the settings menu, uncheck all "),o("em",[t._v("AutoConnect")]),t._v(" boxes except for "),o("strong",[t._v("UDP")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1286),alt:"QGC Auto-connect settings for HITL"}})])])])]),t._v(" "),o("li",[t._v("(Optional) Configure Joystick and Failsafe. Set the following "),o("a",{attrs:{href:"https://docs.px4.io/en/advanced_config/parameters.html#finding-a-parameter",target:"_blank",rel:"noopener noreferrer"}},[t._v("parameters"),o("OutboundLink")],1),t._v(" in order to use a joystick instead of an RC remote control transmitter:\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced/parameter_reference.html#COM_RC_IN_MODE"}},[t._v("COM_RC_IN_MODE")]),t._v(' to "Joystick/No RC Checks". This allows joystick input and disables RC input checks.')],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced/parameter_reference.html#NAV_DLL_ACT"}},[t._v("NAV_DLL_ACT")]),t._v(' to "Disabled". This ensures that no RC failsafe actions interfere when not running HITL with a radio control.')],1)])])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("QGroundControl User Guide")]),t._v(" also has instructions on "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joystick"),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/VirtualJoystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Virtual Joystick"),o("OutboundLink")],1),t._v(" setup.")])]),t._v(" "),o("p",[t._v("Follow the appropriate setup steps for your simulator in the following sections.")]),t._v(" "),o("h3",{attrs:{id:"x-plane-hitl-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#x-plane-hitl-environment"}},[t._v("#")]),t._v(" X-Plane HITL Environment")]),t._v(" "),o("p",[t._v("Follow the appropriate setup steps for the specific simulator in the following sections.")]),t._v(" "),o("h4",{attrs:{id:"gazebo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gazebo"}},[t._v("#")]),t._v(" Gazebo")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Make sure "),o("em",[t._v("QGroundControl")]),t._v(" is not running!")])]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Update the environment variables:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Firmware_clone"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default gazebo\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Open the vehicle model's sdf file (e.g. "),o("strong",[t._v("Tools/sitl_gazebo/models/iris/iris.sdf")]),t._v(").")])]),t._v(" "),o("li",[o("p",[t._v("Under the "),o("code",[t._v("mavlink_interface plugin")]),t._v(" section, change the "),o("code",[t._v("serialEnabled")]),t._v(" and "),o("code",[t._v("hil_mode")]),t._v(" parameters to "),o("code",[t._v("true")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1287),alt:"HIL Parameters"}})])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The file iris.sdf is autogenerated. Therefore you need to either keep a copy of your changed file or re-edit it for every build.")])]),t._v(" "),o("ol",[o("li",[t._v("Replace the "),o("code",[t._v("serialDevice")]),t._v(" parameter ("),o("code",[t._v("/dev/ttyACM0")]),t._v(") if necessary.")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The serial device depends on what port is used to connect the vehicle to the computer (this is usually "),o("code",[t._v("/dev/ttyACM0")]),t._v("). An easy way to check on Ubuntu is to plug in the autopilot, open up a terminal, and type "),o("code",[t._v('dmesg | grep "tty"')]),t._v(". The correct device will be the last one shown.")])]),t._v(" "),o("ol",[o("li",[t._v("Set up the environment variables:"),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" Tools/setup_gazebo.bash "),o("span",{pre:!0,attrs:{class:"token variable"}},[o("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),o("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),o("span",{pre:!0,attrs:{class:"token variable"}},[o("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),o("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/build/px4_sitl_default\n")])])]),t._v("Run Gazebo in HITL mode sh gazebo Tools/sitl_gazebo/worlds/iris.world"),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("gazebo Tools/sitl_gazebo/worlds/iris.world\n")])])])]),t._v(" "),o("li",[t._v("Start "),o("em",[t._v("QGroundControl")]),t._v(". It should autoconnect to PX4 and Gazebo.")])]),t._v(" "),o("p",[o("a",{attrs:{id:"jmavsim_hitl_configuration"}})]),t._v(" "),o("h4",{attrs:{id:"jmavsim-quadrotor-only"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-quadrotor-only"}},[t._v("#")]),t._v(" jMAVSim (Quadrotor only)")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Make sure "),o("em",[t._v("QGroundControl")]),t._v(" is not running!")])]),t._v(" "),o("ol",[o("li",[t._v("Connect the flight controller to the computer and wait for it to boot.")]),t._v(" "),o("li",[t._v("Run jMAVSim in HITL mode:"),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("./Tools/jmavsim_run.sh -q -s -d /dev/ttyACM0 -b "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("921600")]),t._v(" -r "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),t._v("\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Replace the serial port name "),o("code",[t._v("/dev/ttyACM0")]),t._v(" as appropriate. On macOS this port would be "),o("code",[t._v("/dev/tty.usbmodem1")]),t._v(". On Windows (including Cygwin) it would be the COM1 or another port - check the connection in the Windows Device Manager.")])]),t._v(" "),o("ol",[o("li",[t._v("Start "),o("em",[t._v("QGroundControl")]),t._v(". It should autoconnect to PX4 and jMAVSim.")])]),t._v(" "),o("h2",{attrs:{id:"fly-an-autonomous-mission-in-hitl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fly-an-autonomous-mission-in-hitl"}},[t._v("#")]),t._v(" Fly an Autonomous Mission in HITL")]),t._v(" "),o("p",[t._v("You should be able to use "),o("em",[t._v("QGroundControl")]),t._v(" to "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/FlyView/FlyView.html#missions",target:"_blank",rel:"noopener noreferrer"}},[t._v("run missions"),o("OutboundLink")],1),t._v(" and otherwise control the vehicle.")])])}),[],!1,null,null,null);e.default=r.exports}}]);