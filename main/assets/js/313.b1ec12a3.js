(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{1562:function(t,e,a){t.exports=a.p+"assets/img/px4_hitl_overview_jmavsim_gazebo.e8720ed4.svg"},1563:function(t,e,a){t.exports=a.p+"assets/img/qgc_hitl_config.e2aaf666.png"},1564:function(t,e,a){t.exports=a.p+"assets/img/qgc_hil_config.7ba5da96.png"},1565:function(t,e,a){t.exports=a.p+"assets/img/qgc_hitl_autoconnect.83822140.png"},2587:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hardware-in-the-loop-simulation-hitl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hardware-in-the-loop-simulation-hitl"}},[t._v("#")]),t._v(" Hardware in the Loop Simulation (HITL)")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("HITL is "),s("RouterLink",{attrs:{to:"/en/simulation/community_supported_simulators.html"}},[t._v("community supported and maintained")]),t._v(".\nIt may or may not work with current versions of PX4.")],1),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools supported by the core development team.")],1)]),t._v(" "),s("p",[t._v("Hardware-in-the-Loop (HITL or HIL) is a simulation mode in which normal PX4 firmware is run on real flight controller hardware.\nThis approach has the benefit of testing most of the actual flight code on the real hardware.")]),t._v(" "),s("p",[t._v("PX4 supports HITL for multicopters (using jMAVSim or Gazebo Classic) and VTOL (using Gazebo Classic).")]),t._v(" "),s("p",[s("a",{attrs:{id:"compatible_airframe"}})]),t._v(" "),s("h2",{attrs:{id:"hitl-compatible-airframes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hitl-compatible-airframes"}},[t._v("#")]),t._v(" HITL-Compatible Airframes")]),t._v(" "),s("p",[t._v("The current set of compatible airframes vs Simulators is:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Airframe")]),t._v(" "),s("th",[s("code",[t._v("SYS_AUTOSTART")])]),t._v(" "),s("th",[t._v("Gazebo Classic")]),t._v(" "),s("th",[t._v("jMAVSim")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter_simulation_hil_quadcopter_x"}},[t._v("HIL Quadcopter X")])],1),t._v(" "),s("td",[t._v("1001")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("Y")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#vtol_standard_vtol_hil_standard_vtol_quadplane"}},[t._v("HIL Standard VTOL QuadPlane")])],1),t._v(" "),s("td",[t._v("1002")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("Generic Quadrotor x")]),t._v(" copter")],1),t._v(" "),s("td",[t._v("4001")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("Y")])])])]),t._v(" "),s("p",[s("a",{attrs:{id:"simulation_environment"}})]),t._v(" "),s("h2",{attrs:{id:"hitl-simulation-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hitl-simulation-environment"}},[t._v("#")]),t._v(" HITL Simulation Environment")]),t._v(" "),s("p",[t._v("With Hardware-in-the-Loop (HITL) simulation the normal PX4 firmware is run on real hardware.\nJMAVSim or Gazebo Classic (running on a development computer) are connected to the flight controller hardware via USB/UART.\nThe simulator acts as gateway to share MAVLink data between PX4 and "),s("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The simulator can also be connected via UDP if the flight controller has networking support and uses a stable, low-latency connection (e.g. a wired Ethernet connection - WiFi is usually not sufficiently reliable).\nFor example, this configuration has been tested with PX4 running on a Raspberry Pi connected via Ethernet to the computer (a startup configuration that includes the command for running jMAVSim can be found "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/posix-configs/rpi/px4_hil.config",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(").")])]),t._v(" "),s("p",[t._v("The diagram below shows the simulation environment:")]),t._v(" "),s("ul",[s("li",[t._v("A HITL configuration is selected (via "),s("em",[t._v("QGroundControl")]),t._v(") that doesn't start any real sensors.")]),t._v(" "),s("li",[s("em",[t._v("jMAVSim")]),t._v(" or "),s("em",[t._v("Gazebo Classic")]),t._v(" are connected to the flight controller via USB.")]),t._v(" "),s("li",[t._v("The simulator is connected to "),s("em",[t._v("QGroundControl")]),t._v(" via UDP and bridges its MAVLink messages to PX4.")]),t._v(" "),s("li",[s("em",[t._v("Gazebo Classic")]),t._v(" and "),s("em",[t._v("jMAVSim")]),t._v(" can also connect to an offboard API and bridge MAVLink messages to PX4.")]),t._v(" "),s("li",[t._v("(Optional) A serial connection can be used to connect Joystick/Gamepad hardware via "),s("em",[t._v("QGroundControl")]),t._v(".")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1562),alt:"HITL Setup - jMAVSim and Gazebo Classic"}})]),t._v(" "),s("h2",{attrs:{id:"hitl-vs-sitl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hitl-vs-sitl"}},[t._v("#")]),t._v(" HITL vs SITL")]),t._v(" "),s("p",[t._v("SITL runs on a development computer in a simulated environment, and uses firmware specifically generated for that environment.\nOther than simulation drivers to provide fake environmental data from the simulator the system behaves normally.")]),t._v(" "),s("p",[t._v('By contrast, HITL runs normal PX4 firmware in "HITL mode", on normal hardware.\nThe simulation data enters the system at a different point than for SITL.\nCore modules like commander and sensors have HITL modes at startup that bypass some of the normal functionality.')]),t._v(" "),s("p",[t._v("In summary, HITL runs PX4 on the actual hardware using standard firmware, but SITL actually executes more of the standard system code.")]),t._v(" "),s("h2",{attrs:{id:"setting-up-hitl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-hitl"}},[t._v("#")]),t._v(" Setting up HITL")]),t._v(" "),s("h3",{attrs:{id:"px4-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Connect the autopilot directly to "),s("em",[t._v("QGroundControl")]),t._v(" via USB.")])]),t._v(" "),s("li",[s("p",[t._v("Enable HITL Mode")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open "),s("strong",[t._v("Setup > Safety")]),t._v(" section.")])]),t._v(" "),s("li",[s("p",[t._v("Enable HITL mode by selecting "),s("strong",[t._v("Enabled")]),t._v(" from the "),s("em",[t._v("HITL Enabled")]),t._v(" list:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1563),alt:"QGroundControl HITL configuration"}})])])])]),t._v(" "),s("li",[s("p",[t._v("Select Airframe")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open "),s("strong",[t._v("Setup > Airframes")])])]),t._v(" "),s("li",[s("p",[t._v("Select a "),s("a",{attrs:{href:"#compatible_airframe"}},[t._v("compatible airframe")]),t._v(" you want to test.\nThen click "),s("strong",[t._v("Apply and Restart")]),t._v(" on top-right of the "),s("em",[t._v("Airframe Setup")]),t._v(" page.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1564),alt:"Select Airframe"}})])])])]),t._v(" "),s("li",[s("p",[t._v("Calibrate your RC or Joystick, if needed.")])]),t._v(" "),s("li",[s("p",[t._v("Setup UDP")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Under the "),s("em",[t._v("General")]),t._v(" tab of the settings menu, uncheck all "),s("em",[t._v("AutoConnect")]),t._v(" boxes except for "),s("strong",[t._v("UDP")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1565),alt:"QGC Auto-connect settings for HITL"}})])])])]),t._v(" "),s("li",[s("p",[t._v("(Optional) Configure Joystick and Failsafe.\nSet the following "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[t._v("parameters")]),t._v(" in order to use a joystick instead of an RC remote control transmitter:")],1),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_IN_MODE"}},[t._v("COM_RC_IN_MODE")]),t._v(' to "Joystick/No RC Checks". This allows joystick input and disables RC input checks.')],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")]),t._v(' to "Disabled". This ensures that no RC failsafe actions interfere when not running HITL with a radio control.')],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("QGroundControl User Guide")]),t._v(" also has instructions on "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/setup_view/joystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joystick"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/settings_view/virtual_joystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Virtual Joystick"),s("OutboundLink")],1),t._v(" setup.")])])])]),t._v(" "),s("p",[t._v("Once configuration is complete, "),s("strong",[t._v("close")]),t._v(" "),s("em",[t._v("QGroundControl")]),t._v(" and disconnect the flight controller hardware from the computer.")]),t._v(" "),s("h3",{attrs:{id:"simulator-specific-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simulator-specific-setup"}},[t._v("#")]),t._v(" Simulator-Specific Setup")]),t._v(" "),s("p",[t._v("Follow the appropriate setup steps for the specific simulator in the following sections.")]),t._v(" "),s("h4",{attrs:{id:"gazebo-classic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-classic"}},[t._v("#")]),t._v(" Gazebo Classic")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Make sure "),s("em",[t._v("QGroundControl")]),t._v(" is not running!")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Build PX4 with "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" (in order to build the Gazebo Classic plugins).")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Firmware_clone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default gazebo-classic\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Open the vehicle model's sdf file (e.g. "),s("strong",[t._v("Tools/simulation/gazebo-classic/sitl_gazebo-classic/models/iris_hitl/iris_hitl.sdf")]),t._v(").")])]),t._v(" "),s("li",[s("p",[t._v("Replace the "),s("code",[t._v("serialDevice")]),t._v(" parameter ("),s("code",[t._v("/dev/ttyACM0")]),t._v(") if necessary.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The serial device depends on what port is used to connect the vehicle to the computer (this is usually "),s("code",[t._v("/dev/ttyACM0")]),t._v(").\nAn easy way to check on Ubuntu is to plug in the autopilot, open up a terminal, and type "),s("code",[t._v('dmesg | grep "tty"')]),t._v(".\nThe correct device will be the last one shown.")])])]),t._v(" "),s("li",[s("p",[t._v("Set up the environment variables:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" Tools/simulation/gazebo-classic/setup_gazebo.bash "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/build/px4_sitl_default\n")])])]),s("p",[t._v("and run Gazebo Classic in HITL mode:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("gazebo Tools/simulation/gazebo-classic/sitl_gazebo-classic/worlds/hitl_iris.world\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start "),s("em",[t._v("QGroundControl")]),t._v(".\nIt should autoconnect to PX4 and Gazebo Classic.")])])]),t._v(" "),s("h4",{attrs:{id:"jmavsim-quadrotor-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-quadrotor-only"}},[t._v("#")]),t._v(" jMAVSim (Quadrotor only)")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Make sure "),s("em",[t._v("QGroundControl")]),t._v(" is not running!")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Connect the flight controller to the computer and wait for it to boot.")])]),t._v(" "),s("li",[s("p",[t._v("Run jMAVSim in HITL mode:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("./Tools/simulation/jmavsim/jmavsim_run.sh -q -s -d /dev/ttyACM0 -b "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("921600")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),t._v("\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Replace the serial port name "),s("code",[t._v("/dev/ttyACM0")]),t._v(" as appropriate.\nOn macOS this port would be "),s("code",[t._v("/dev/tty.usbmodem1")]),t._v(".\nOn Windows (including Cygwin) it would be the COM1 or another port - check the connection in the Windows Device Manager.")])])]),t._v(" "),s("li",[s("p",[t._v("Start "),s("em",[t._v("QGroundControl")]),t._v(".\nIt should autoconnect to PX4 and jMAVSim.")])])]),t._v(" "),s("h2",{attrs:{id:"fly-an-autonomous-mission-in-hitl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fly-an-autonomous-mission-in-hitl"}},[t._v("#")]),t._v(" Fly an Autonomous Mission in HITL")]),t._v(" "),s("p",[t._v("You should be able to use "),s("em",[t._v("QGroundControl")]),t._v(" to "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/fly_view/fly_view.html#missions",target:"_blank",rel:"noopener noreferrer"}},[t._v("run missions"),s("OutboundLink")],1),t._v(" and otherwise control the vehicle.")])])}),[],!1,null,null,null);e.default=o.exports}}]);