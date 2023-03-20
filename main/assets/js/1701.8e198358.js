(window.webpackJsonp=window.webpackJsonp||[]).push([[1701],{3060:function(e,t,a){"use strict";a.r(t);var s=a(19),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gazebo-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-simulation"}},[e._v("#")]),e._v(" Gazebo Simulation")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v('Gazebo was previously known as "Gazebo Ignition" (while '),a("em",[e._v("Gazebo Classic")]),e._v(" was previously known as Gazebo). See the "),a("a",{attrs:{href:"https://www.openrobotics.org/blog/2022/4/6/a-new-era-for-gazebo",target:"_blank",rel:"noopener noreferrer"}},[e._v("official blog post"),a("OutboundLink")],1),e._v(" for more information.")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://gazebosim.org/home",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gazebo"),a("OutboundLink")],1),e._v(" is an open source robotics simulator. It supersedes the older "),a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/sim_gazebo_classic/gazebo.html"}},[e._v("Gazebo Classic")]),e._v(" simulator, and is the only supported version of Gazebo for Ubuntu 22.04 and onwards.")],1),e._v(" "),a("p",[a("strong",[e._v("Supported Vehicles:")]),e._v(" Quadrotor, Plane, VTOL")]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/eRzdGD2vgkU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/ko/simulation/"}},[e._v("Simulation")]),e._v(" for general information about simulators, the simulation environment, and simulation configuration (e.g. supported vehicles).")],1)]),e._v(" "),a("h2",{attrs:{id:"installation-ubuntu-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-ubuntu-linux"}},[e._v("#")]),e._v(" Installation (Ubuntu Linux)")]),e._v(" "),a("p",[e._v("Gazebo is installed by default on Ubuntu 22.04 as part of the development environment setup: "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html#simulation-and-nuttx-pixhawk-targets"}},[e._v("Ubuntu Dev Environment Setup > Simulation and NuttX (Pixhawk) Targets")])],1),e._v(" "),a("p",[e._v("If you want to use Gazebo on Ubuntu 20.04 you can install it manually after following the normal setup process (installing "),a("code",[e._v("gz-garden")]),e._v(" will uninstall Gazebo-Classic!):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://packages.osrfoundation.org/gazebo.gpg -O /usr/share/keyrings/pkgs-osrf-archive-keyring.gpg\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deb [arch='),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("dpkg --print-architecture"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" signed-by=/usr/share/keyrings/pkgs-osrf-archive-keyring.gpg] http://packages.osrfoundation.org/gazebo/ubuntu-stable "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(' main"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" /etc/apt/sources.list.d/gazebo-stable.list "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /dev/null\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gz-garden\n")])])]),a("h2",{attrs:{id:"running-the-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-simulation"}},[e._v("#")]),e._v(" Running the Simulation")]),e._v(" "),a("p",[e._v("Gazebo SITL simulation can be conveniently run through a "),a("code",[e._v("make")]),e._v(" command as shown below:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /path/to/PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gz_x500\n")])])]),a("p",[e._v("This will run both the PX4 SITL instance and the Gazebo client. Note that all gazebo make targets have the prefix "),a("code",[e._v("gz_")]),e._v(".")]),e._v(" "),a("p",[e._v("The supported vehicles and "),a("code",[e._v("make")]),e._v(" commands are listed below.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Vehicle")]),e._v(" "),a("th",[e._v("Command")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("quadrotor(x500)")]),e._v(" "),a("td",[a("code",[e._v("make px4_sitl gz_x500")])])]),e._v(" "),a("tr",[a("td",[e._v("VTOL")]),e._v(" "),a("td",[a("code",[e._v("make px4_sitl gz_standard_vtol")])])]),e._v(" "),a("tr",[a("td",[e._v("plane")]),e._v(" "),a("td",[a("code",[e._v("make px4_sitl gz_rc_cessna")])])])])]),e._v(" "),a("p",[e._v("The commands above launch a single vehicle with the full UI. "),a("em",[e._v("QGroundControl")]),e._v(" should be able to automatically connect to the simulated vehicle.")]),e._v(" "),a("p",[e._v("In order to run the simulation without running the Gazebo gui, use the "),a("code",[e._v("HEADLESS=1")]),e._v(" flag:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("HEADLESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gz_x500\n")])])]),a("h2",{attrs:{id:"usage-configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-configuration-options"}},[e._v("#")]),e._v(" Usage/Configuration Options")]),e._v(" "),a("p",[e._v("The startup pipeline allows for highly flexible configuration. In particular, it is possible to:")]),e._v(" "),a("ul",[a("li",[e._v("Start a new simulation with an arbitrary world or attach to an already running simulation.")]),e._v(" "),a("li",[e._v("Add a new vehicle to the simulation or link a new PX4 instance to an existing one.")])]),e._v(" "),a("p",[e._v("These scenarios are managed by setting the appropriate environment variables.")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[e._v("The startup syntax takes the form:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("ARGS ./build/px4_sitl_default/bin/px4\n")])])]),a("p",[e._v("where "),a("code",[e._v("ARGS")]),e._v(" is a list of environment variables including:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("PX4_SYS_AUTOSTART")]),e._v(" ("),a("strong",[e._v("Mandatory")]),e._v("): Sets the "),a("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html"}},[e._v("airframe autostart id")]),e._v(" of the PX4 airframe to start.")],1),e._v(" "),a("ul",[a("li",[e._v("Only "),a("code",[e._v("4001")]),e._v(" (x500 quadcopter) is currently supported.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_GZ_MODEL_NAME")]),e._v(": Sets the name of an "),a("em",[e._v("existing")]),e._v(" model in the gazebo simulation. If provided, the startup script tries to bind a new PX4 instance to the Gazebo resource matching exactly that name.")]),e._v(" "),a("ul",[a("li",[e._v("The setting is mutually exclusive with "),a("code",[e._v("PX4_GZ_MODEL")]),e._v(".")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_GZ_MODEL")]),e._v(": Sets the name of a new Gazebo model to be spawned in the simulator. If provided, the startup script looks for a model in the Gazebo resource path that matches the given variable, spawns it and binds a new PX4 instance to it.")]),e._v(" "),a("ul",[a("li",[e._v("The setting is mutually exclusive with "),a("code",[e._v("PX4_GZ_MODEL_NAME")]),e._v(".")])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("If both "),a("code",[e._v("PX4_GZ_MODEL_NAME")]),e._v(" and "),a("code",[e._v("PX4_GZ_MODEL")]),e._v(" are not given, then PX4 looks for "),a("code",[e._v("PX4_SIM_MODEL")]),e._v(" and uses it as an alias for "),a("code",[e._v("PX4_GZ_MODEL")]),e._v(". However, this prevents the use of "),a("code",[e._v("PX4_GZ_MODEL_POSE")]),e._v(".")])]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("PX4_GZ_MODEL_POSE")]),e._v(": Sets the spawning position and orientation of the model when "),a("code",[e._v("PX4_GZ_MODEL")]),e._v(" is adopted. If provided, the startup script spawns the model at a pose following the syntax "),a("code",[e._v('"x,y,z,roll,pitch,yaw"')]),e._v(", where the positions are given in metres and the angles are in radians.")]),e._v(" "),a("ul",[a("li",[e._v("If omitted, the zero pose "),a("code",[e._v("[0,0,0,0,0,0]")]),e._v(" is used.")]),e._v(" "),a("li",[e._v("If less then 6 values are provided, the missing ones are fixed to zero.")]),e._v(" "),a("li",[e._v("This can only be used with "),a("code",[e._v("PX4_GZ_MODEL")]),e._v(" (not "),a("code",[e._v("PX4_GZ_MODEL_NAME")]),e._v(").")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_GZ_WORLD")]),e._v(": Sets the Gazebo world file for a new simulation. If it is not given, then "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/simulation/gz/worlds/default.sdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("default"),a("OutboundLink")],1),e._v(" is used.")]),e._v(" "),a("ul",[a("li",[e._v("This variable is ignored if an existing simulation is already running.")]),e._v(" "),a("li",[e._v("This value should be "),a("a",{attrs:{href:"#adding-new-worlds-and-models"}},[e._v("specified for the selected airframe")]),e._v(" but may be overridden using this argument.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_SIMULATOR=GZ")]),e._v(": Sets the simulator, which for Gz must be "),a("code",[e._v("gz")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("This value should be "),a("a",{attrs:{href:"#adding-new-worlds-and-models"}},[e._v("set for the selected airframe")]),e._v(", in which case it does not need to be set as an argument.")])])])]),e._v(" "),a("p",[e._v("The PX4 Gazebo worlds and and models databases "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/Tools/simulation/gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("can be found on Github here"),a("OutboundLink")],1),e._v(". They are added to the Gazebo search "),a("code",[e._v("PATH")]),e._v(" by "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/simulation/gz_bridge/gz_env.sh.in",target:"_blank",rel:"noopener noreferrer"}},[e._v("gz_env.sh.in"),a("OutboundLink")],1),e._v(" during the simulation startup phase.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[a("code",[e._v("gz_env.sh.in")]),e._v(" is compiled and made available in "),a("code",[e._v("$PX4_DIR/build/px4_sitl_default/rootfs/gz_env.sh")])])]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Here are some examples of the different scenarios covered above.")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("Start simulator + default world + spawn vehicle at default pose")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_MODEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("x500 ./build/px4_sitl_default/bin/px4\n")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Start simulator + default world + spawn vehicle at custom pose (y=2m)")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_MODEL_POSE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0,2"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_MODEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("x500 ./build/px4_sitl_default/bin/px4\n")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Start simulator + default world + link to existing vehicle")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_MODEL_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("x500 ./build/px4_sitl_default/bin/px4\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"adding-new-worlds-and-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-worlds-and-models"}},[e._v("#")]),e._v(" Adding New Worlds and Models")]),e._v(" "),a("p",[e._v("New worlds files can simply be copied into the PX4 Gazebo "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/Tools/simulation/gz/worlds",target:"_blank",rel:"noopener noreferrer"}},[e._v("world directory"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To add a new model:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Add an "),a("strong",[e._v("sdf")]),e._v(" file in the PX4 Gazebo "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/Tools/simulation/gz/models",target:"_blank",rel:"noopener noreferrer"}},[e._v("model directory"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Define an "),a("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html"}},[e._v("airframe configuration file")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Define the default parameters for Gazebo in the airframe configuration file (this example is from "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/airframes/4001_x500",target:"_blank",rel:"noopener noreferrer"}},[e._v("x500 quadcopter"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("PX4_SIMULATOR=${PX4_SIMULATOR:=gz}\nPX4_GZ_WORLD=${PX4_GZ_WORLD:=default}\nPX4_SIM_MODEL=${PX4_SIM_MODEL:=<your model name>}\n")])])]),a("ul",[a("li",[a("p",[a("code",[e._v("PX4_SIMULATOR=${PX4_SIMULATOR:=gz}")]),e._v(" sets the default simulator (Gz) for that specific airframe.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_GZ_WORLD=${PX4_GZ_WORLD:=default}")]),e._v(" sets the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/simulation/gz/worlds/default.sdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("default world"),a("OutboundLink")],1),e._v(" for that specific airframe.")])]),e._v(" "),a("li",[a("p",[e._v("Setting the default value of "),a("code",[e._v("PX4_SIM_MODEL")]),e._v(" lets you start the simulation with just")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your new airframe id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ./build/px4_sitl_default/bin/px4\n")])])])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("As long as the world file and the model file are in the Gazebo search path "),a("code",[e._v("IGN_GAZEBO_RESOURCE_PATH")]),e._v(" it is not necessary to add them to the PX4 world and model directories. However, "),a("code",[e._v("make px4_sitl gz_<model>_<world>")]),e._v(" won't work with them.")])]),e._v(" "),a("h2",{attrs:{id:"multi-vehicle-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation"}},[e._v("#")]),e._v(" Multi-Vehicle Simulation")]),e._v(" "),a("p",[e._v("Multi-Vehicle simulation is supported on Linux hosts.")]),e._v(" "),a("p",[e._v("For more information see: "),a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/multi_vehicle_simulation.html"}},[e._v("Multi-Vehicle Simulation with Gazebo")])],1),e._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Auterion/px4-simulation-ignition",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4-simulation-ignition"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);