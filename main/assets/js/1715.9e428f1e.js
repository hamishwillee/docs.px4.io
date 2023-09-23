(window.webpackJsonp=window.webpackJsonp||[]).push([[1715],{3114:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gazebo-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-simulation"}},[t._v("#")]),t._v(" Gazebo Simulation")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v('Gazebo was previously known as "Gazebo Ignition" (while '),a("em",[t._v("Gazebo Classic")]),t._v(" was previously known as Gazebo). See the "),a("a",{attrs:{href:"https://www.openrobotics.org/blog/2022/4/6/a-new-era-for-gazebo",target:"_blank",rel:"noopener noreferrer"}},[t._v("official blog post"),a("OutboundLink")],1),t._v(" for more information.")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gazebosim.org/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gazebo"),a("OutboundLink")],1),t._v(" is an open source robotics simulator. It supersedes the older "),a("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" simulator, and is the only supported version of Gazebo for Ubuntu 22.04 and onwards.")],1),t._v(" "),a("p",[a("strong",[t._v("Supported Vehicles:")]),t._v(" Quadrotor, Plane, VTOL")]),t._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/eRzdGD2vgkU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/ko/simulation/"}},[t._v("Simulation")]),t._v(" for general information about simulators, the simulation environment, and simulation configuration (e.g. supported vehicles).")],1)]),t._v(" "),a("h2",{attrs:{id:"installation-ubuntu-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-ubuntu-linux"}},[t._v("#")]),t._v(" Installation (Ubuntu Linux)")]),t._v(" "),a("p",[t._v("Gazebo is installed by default on Ubuntu 22.04 as part of the development environment setup: "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html#simulation-and-nuttx-pixhawk-targets"}},[t._v("Ubuntu Dev Environment Setup > Simulation and NuttX (Pixhawk) Targets")])],1),t._v(" "),a("p",[t._v("If you want to use Gazebo on Ubuntu 20.04 you can install it manually after following the normal setup process (installing "),a("code",[t._v("gz-garden")]),t._v(" will uninstall Gazebo-Classic!):")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://packages.osrfoundation.org/gazebo.gpg -O /usr/share/keyrings/pkgs-osrf-archive-keyring.gpg\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch='),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("dpkg --print-architecture"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" signed-by=/usr/share/keyrings/pkgs-osrf-archive-keyring.gpg] http://packages.osrfoundation.org/gazebo/ubuntu-stable "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(' main"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/gazebo-stable.list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gz-garden\n")])])]),a("h2",{attrs:{id:"running-the-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-simulation"}},[t._v("#")]),t._v(" Running the Simulation")]),t._v(" "),a("p",[t._v("Gazebo SITL simulation can be conveniently run through a "),a("code",[t._v("make")]),t._v(" command as shown below:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gz_x500\n")])])]),a("p",[t._v("This will run both the PX4 SITL instance and the Gazebo client. Note that all gazebo make targets have the prefix "),a("code",[t._v("gz_")]),t._v(".")]),t._v(" "),a("p",[t._v("The supported vehicles and "),a("code",[t._v("make")]),t._v(" commands are listed below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Vehicle")]),t._v(" "),a("th",[t._v("Command")]),t._v(" "),a("th",[a("code",[t._v("PX4_SYS_AUTOSTART")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/gazebo_vehicles.html#x500-quadrotor"}},[t._v("Quadrotor(x500)")])],1),t._v(" "),a("td",[a("code",[t._v("make px4_sitl gz_x500")])]),t._v(" "),a("td",[t._v("4001")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/gazebo_vehicles.html#x500-quadrotor-with-depth-camera"}},[t._v("Quadrotor(x500) with Depth Camera")])],1),t._v(" "),a("td",[a("code",[t._v("make px4_sitl gz_x500_depth")])]),t._v(" "),a("td",[t._v("4002")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/gazebo_vehicles.html#x500-quadrotor-with-visual-odometry"}},[t._v("Quadrotor(x500) with Vision Odometry")])],1),t._v(" "),a("td",[a("code",[t._v("make px4_sitl gz_x500_vision")])]),t._v(" "),a("td",[t._v("4005")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/gazebo_vehicles.html#standard-vtol"}},[t._v("VTOL")])],1),t._v(" "),a("td",[a("code",[t._v("make px4_sitl gz_standard_vtol")])]),t._v(" "),a("td",[t._v("4003")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/gazebo_vehicles.html#rc-cessna"}},[t._v("Plane")])],1),t._v(" "),a("td",[a("code",[t._v("make px4_sitl gz_rc_cessna")])]),t._v(" "),a("td",[t._v("4004")])])])]),t._v(" "),a("p",[t._v("The commands above launch a single vehicle with the full UI. "),a("em",[t._v("QGroundControl")]),t._v(" should be able to automatically connect to the simulated vehicle.")]),t._v(" "),a("p",[t._v("In order to run the simulation without running the Gazebo gui, use the "),a("code",[t._v("HEADLESS=1")]),t._v(" flag:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HEADLESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gz_x500\n")])])]),a("h2",{attrs:{id:"usage-configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-configuration-options"}},[t._v("#")]),t._v(" Usage/Configuration Options")]),t._v(" "),a("p",[t._v("The startup pipeline allows for highly flexible configuration. In particular, it is possible to:")]),t._v(" "),a("ul",[a("li",[t._v("Start a new simulation with an arbitrary world or attach to an already running simulation.")]),t._v(" "),a("li",[t._v("Add a new vehicle to the simulation or link a new PX4 instance to an existing one.")])]),t._v(" "),a("p",[t._v("These scenarios are managed by setting the appropriate environment variables.")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[t._v("The startup syntax takes the form:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ARGS ./build/px4_sitl_default/bin/px4\n")])])]),a("p",[t._v("where "),a("code",[t._v("ARGS")]),t._v(" is a list of environment variables including:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("PX4_SYS_AUTOSTART")]),t._v(" ("),a("strong",[t._v("Mandatory")]),t._v("): Sets the "),a("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html"}},[t._v("airframe autostart id")]),t._v(" of the PX4 airframe to start.")],1)]),t._v(" "),a("li",[a("p",[a("code",[t._v("PX4_GZ_MODEL_NAME")]),t._v(": Sets the name of an "),a("em",[t._v("existing")]),t._v(" model in the gazebo simulation. If provided, the startup script tries to bind a new PX4 instance to the Gazebo resource matching exactly that name.")]),t._v(" "),a("ul",[a("li",[t._v("The setting is mutually exclusive with "),a("code",[t._v("PX4_GZ_MODEL")]),t._v(".")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("PX4_GZ_MODEL")]),t._v(": Sets the name of a new Gazebo model to be spawned in the simulator. If provided, the startup script looks for a model in the Gazebo resource path that matches the given variable, spawns it and binds a new PX4 instance to it.")]),t._v(" "),a("ul",[a("li",[t._v("The setting is mutually exclusive with "),a("code",[t._v("PX4_GZ_MODEL_NAME")]),t._v(".")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If both "),a("code",[t._v("PX4_GZ_MODEL_NAME")]),t._v(" and "),a("code",[t._v("PX4_GZ_MODEL")]),t._v(" are not given, then PX4 looks for "),a("code",[t._v("PX4_SIM_MODEL")]),t._v(" and uses it as an alias for "),a("code",[t._v("PX4_GZ_MODEL")]),t._v(". However, this prevents the use of "),a("code",[t._v("PX4_GZ_MODEL_POSE")]),t._v(".")])]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("PX4_GZ_MODEL_POSE")]),t._v(": Sets the spawning position and orientation of the model when "),a("code",[t._v("PX4_GZ_MODEL")]),t._v(" is adopted. If provided, the startup script spawns the model at a pose following the syntax "),a("code",[t._v('"x,y,z,roll,pitch,yaw"')]),t._v(", where the positions are given in metres and the angles are in radians.")]),t._v(" "),a("ul",[a("li",[t._v("If omitted, the zero pose "),a("code",[t._v("[0,0,0,0,0,0]")]),t._v(" is used.")]),t._v(" "),a("li",[t._v("If less then 6 values are provided, the missing ones are fixed to zero.")]),t._v(" "),a("li",[t._v("This can only be used with "),a("code",[t._v("PX4_GZ_MODEL")]),t._v(" (not "),a("code",[t._v("PX4_GZ_MODEL_NAME")]),t._v(").")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("PX4_GZ_WORLD")]),t._v(": Sets the Gazebo world file for a new simulation. If it is not given, then "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/simulation/gz/worlds/default.sdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("default"),a("OutboundLink")],1),t._v(" is used.")]),t._v(" "),a("ul",[a("li",[t._v("This variable is ignored if an existing simulation is already running.")]),t._v(" "),a("li",[t._v("This value should be "),a("a",{attrs:{href:"#adding-new-worlds-and-models"}},[t._v("specified for the selected airframe")]),t._v(" but may be overridden using this argument.")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("PX4_SIMULATOR=GZ")]),t._v(": Sets the simulator, which for Gz must be "),a("code",[t._v("gz")]),t._v(".")]),t._v(" "),a("ul",[a("li",[t._v("This value should be "),a("a",{attrs:{href:"#adding-new-worlds-and-models"}},[t._v("set for the selected airframe")]),t._v(", in which case it does not need to be set as an argument.")])])])]),t._v(" "),a("p",[t._v("The PX4 Gazebo worlds and and models databases "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/Tools/simulation/gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("can be found on Github here"),a("OutboundLink")],1),t._v(". They are added to the Gazebo search "),a("code",[t._v("PATH")]),t._v(" by "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/simulation/gz_bridge/gz_env.sh.in",target:"_blank",rel:"noopener noreferrer"}},[t._v("gz_env.sh.in"),a("OutboundLink")],1),t._v(" during the simulation startup phase.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("code",[t._v("gz_env.sh.in")]),t._v(" is compiled and made available in "),a("code",[t._v("$PX4_DIR/build/px4_sitl_default/rootfs/gz_env.sh")])])]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Here are some examples of the different scenarios covered above.")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("Start simulator + default world + spawn vehicle at default pose")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4001")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_GZ_MODEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("x500 ./build/px4_sitl_default/bin/px4\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Start simulator + default world + spawn vehicle at custom pose (y=2m)")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4001")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_GZ_MODEL_POSE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0,2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_GZ_MODEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("x500 ./build/px4_sitl_default/bin/px4\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Start simulator + default world + link to existing vehicle")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4001")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_GZ_MODEL_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("x500 ./build/px4_sitl_default/bin/px4\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"adding-new-worlds-and-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-worlds-and-models"}},[t._v("#")]),t._v(" Adding New Worlds and Models")]),t._v(" "),a("p",[t._v("New worlds files can simply be copied into the PX4 Gazebo "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/Tools/simulation/gz/worlds",target:"_blank",rel:"noopener noreferrer"}},[t._v("world directory"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To add a new model:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Add an "),a("strong",[t._v("sdf")]),t._v(" file in the PX4 Gazebo "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/Tools/simulation/gz/models",target:"_blank",rel:"noopener noreferrer"}},[t._v("model directory"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Define an "),a("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html"}},[t._v("airframe configuration file")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Define the default parameters for Gazebo in the airframe configuration file (this example is from "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/airframes/4001_gz_x500",target:"_blank",rel:"noopener noreferrer"}},[t._v("x500 quadcopter"),a("OutboundLink")],1),t._v("):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PX4_SIMULATOR=${PX4_SIMULATOR:=gz}\nPX4_GZ_WORLD=${PX4_GZ_WORLD:=default}\nPX4_SIM_MODEL=${PX4_SIM_MODEL:=<your model name>}\n")])])]),a("ul",[a("li",[a("p",[a("code",[t._v("PX4_SIMULATOR=${PX4_SIMULATOR:=gz}")]),t._v(" sets the default simulator (Gz) for that specific airframe.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("PX4_GZ_WORLD=${PX4_GZ_WORLD:=default}")]),t._v(" sets the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/simulation/gz/worlds/default.sdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("default world"),a("OutboundLink")],1),t._v(" for that specific airframe.")])]),t._v(" "),a("li",[a("p",[t._v("Setting the default value of "),a("code",[t._v("PX4_SIM_MODEL")]),t._v(" lets you start the simulation with just")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your new airframe id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./build/px4_sitl_default/bin/px4\n")])])])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("As long as the world file and the model file are in the Gazebo search path "),a("code",[t._v("IGN_GAZEBO_RESOURCE_PATH")]),t._v(" it is not necessary to add them to the PX4 world and model directories. However, "),a("code",[t._v("make px4_sitl gz_<model>_<world>")]),t._v(" won't work with them.")])]),t._v(" "),a("h2",{attrs:{id:"multi-vehicle-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation"}},[t._v("#")]),t._v(" Multi-Vehicle Simulation")]),t._v(" "),a("p",[t._v("Multi-Vehicle simulation is supported on Linux hosts.")]),t._v(" "),a("p",[t._v("For more information see: "),a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/multi_vehicle_simulation.html"}},[t._v("Multi-Vehicle Simulation with Gazebo")])],1),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Auterion/px4-simulation-ignition",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4-simulation-ignition"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);