(window.webpackJsonp=window.webpackJsonp||[]).push([[2291],{4102:function(e,t,a){"use strict";a.r(t);var s=a(19),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gazebo-仿真"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-仿真"}},[e._v("#")]),e._v(" Gazebo 仿真")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Gazebo 先前被称为“Gazebo Ignition”( "),a("em",[e._v("Gazebo Classic")]),e._v(" 先前被称为Gazebo)。 查看 "),a("a",{attrs:{href:"https://www.openrobotics.org/blog/2022/4/6/a-new-era-for-gazebo",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方博客文章"),a("OutboundLink")],1),e._v(" 获取更多信息。")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://gazebosim.org/home",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gazebo"),a("OutboundLink")],1),e._v(" 是一个开源机器人模拟器。 它取代了旧的 "),a("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[e._v("Gazebo Classic")]),e._v(" 模拟器，是Ubuntu 22.04 及以后唯一支持的 Gazebo 版本。")],1),e._v(" "),a("p",[a("strong",[e._v("支持的载具：")]),e._v(" Quadrotor、Plane、VTOL")]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/eRzdGD2vgkU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/zh/simulation/"}},[e._v("Simulation")]),e._v(" for general information about simulators, the simulation environment, and simulation configuration (e.g. supported vehicles).")],1)]),e._v(" "),a("h2",{attrs:{id:"installation-ubuntu-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-ubuntu-linux"}},[e._v("#")]),e._v(" Installation (Ubuntu Linux)")]),e._v(" "),a("p",[e._v("Gazebo is installed by default on Ubuntu 22.04 as part of the development environment setup: "),a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux_ubuntu.html#simulation-and-nuttx-pixhawk-targets"}},[e._v("Ubuntu Dev Environment Setup > Simulation and NuttX (Pixhawk) Targets")])],1),e._v(" "),a("p",[e._v("If you want to use Gazebo on Ubuntu 20.04 you can install it manually after following the normal setup process (installing "),a("code",[e._v("gz-garden")]),e._v(" will uninstall Gazebo-Classic!):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://packages.osrfoundation.org/gazebo.gpg -O /usr/share/keyrings/pkgs-osrf-archive-keyring.gpg\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deb [arch='),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("dpkg --print-architecture"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" signed-by=/usr/share/keyrings/pkgs-osrf-archive-keyring.gpg] http://packages.osrfoundation.org/gazebo/ubuntu-stable "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(' main"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" /etc/apt/sources.list.d/gazebo-stable.list "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /dev/null\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gz-garden\n")])])]),a("h2",{attrs:{id:"running-the-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-simulation"}},[e._v("#")]),e._v(" Running the Simulation")]),e._v(" "),a("p",[e._v("Gazebo SITL simulation can be conveniently run using a "),a("code",[e._v("make")]),e._v(" command as shown below:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /path/to/PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gz_x500\n")])])]),a("p",[e._v("This runs both the PX4 SITL instance and the Gazebo client.")]),e._v(" "),a("p",[e._v("The supported vehicles and "),a("code",[e._v("make")]),e._v(" commands are listed below. Note that all gazebo make targets have the prefix "),a("code",[e._v("gz_")]),e._v(".")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Vehicle")]),e._v(" "),a("th",[e._v("Command")]),e._v(" "),a("th",[a("code",[e._v("PX4_SYS_AUTOSTART")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/vehicles.html#x500-quadrotor"}},[e._v("Quadrotor(x500)")])],1),e._v(" "),a("td",[a("code",[e._v("make px4_sitl gz_x500")])]),e._v(" "),a("td",[e._v("4001")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/vehicles.html#x500-quadrotor-with-depth-camera"}},[e._v("Quadrotor(x500) with Depth Camera")])],1),e._v(" "),a("td",[a("code",[e._v("make px4_sitl gz_x500_depth")])]),e._v(" "),a("td",[e._v("4002")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/vehicles.html#x500-quadrotor-with-visual-odometry"}},[e._v("Quadrotor(x500) with Vision Odometry")])],1),e._v(" "),a("td",[a("code",[e._v("make px4_sitl gz_x500_vision")])]),e._v(" "),a("td",[e._v("4005")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/vehicles.html#standard-vtol"}},[e._v("VTOL")])],1),e._v(" "),a("td",[a("code",[e._v("make px4_sitl gz_standard_vtol")])]),e._v(" "),a("td",[e._v("4004")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/vehicles.html#standard-plane"}},[e._v("Plane")])],1),e._v(" "),a("td",[a("code",[e._v("make px4_sitl gz_rc_cessna")])]),e._v(" "),a("td",[e._v("4003")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/vehicles.html#advanced-plane"}},[e._v("Advanced Plane")])],1),e._v(" "),a("td",[a("code",[e._v("make px4_sitl gz_advanced_plane")])]),e._v(" "),a("td",[e._v("4008")])])])]),e._v(" "),a("p",[e._v("All "),a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/vehicles.html"}},[e._v("vehicle models")]),e._v(" (and "),a("a",{attrs:{href:"#specify-world"}},[e._v("worlds")]),e._v(") are included as a submodule from the "),a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/gazebo_models.html"}},[e._v("Gazebo Models Repository")]),e._v(" repository.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("The Advanced Lift Drag Plugin that is required to run the Advanced Plane is not yet part of the Gazebo distribution, so the Advanced Plane will not yet fly: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/22337",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot#22337"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("As a workaround to enable Advanced Plane, you can compile the gz-sim library from "),a("a",{attrs:{href:"https://github.com/gazebosim/gz-sim",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gazebo source code"),a("OutboundLink")],1),e._v(", go into the "),a("code",[e._v("build/lib")]),e._v(" directory, copy out the advanced lift drag plugin "),a("code",[e._v(".so")]),e._v(" file (depending on the exact Gazebo Version this is called something along the lines of "),a("code",[e._v("libgz-sim7-advanced-lift-drag-system.so")]),e._v("), and paste this into the "),a("code",[e._v("~/.gz/sim/plugins")]),e._v(" folder.")])]),e._v(" "),a("p",[e._v("The commands above launch a single vehicle with the full UI. "),a("em",[e._v("QGroundControl")]),e._v(" should be able to automatically connect to the simulated vehicle.")]),e._v(" "),a("h3",{attrs:{id:"standalone-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standalone-mode"}},[e._v("#")]),e._v(" Standalone Mode")]),e._v(" "),a("p",[e._v("Another way that Gazebo SITL can be connected is in "),a("em",[e._v("standalone mode")]),e._v(". In this mode PX4 SITL and Gazebo are started separately in their own terminals. By default these terminals are on the same host, but you can also connect SITL and Gazebo instances running on any two devices on the network (or even different networks if you use a VPN to connect them).")]),e._v(" "),a("p",[e._v("You start PX4 in standalone mode by prefixing the "),a("code",[e._v("make")]),e._v(" command with "),a("code",[e._v("PX4_GZ_STANDALONE=1")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /path/to/PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_STANDALONE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gz_x500\n")])])]),a("p",[e._v("PX4 SITL will then wait until it detects an instance of "),a("em",[e._v("gz-server")]),e._v(", and then connect to it.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("If you have not yet started "),a("em",[e._v("gz-server")]),e._v(" when you run the "),a("code",[e._v("make")]),e._v(" command, you will see the following warning until gazebo has been started and an instance of "),a("em",[e._v("gz-server")]),e._v(" is detected by PX4:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("WARN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("gz bridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Service call timed out as Gazebo has not been detected\n")])])])]),e._v(" "),a("p",[e._v("The simplest way to start the simulation is to use the Python script "),a("a",{attrs:{href:"https://github.com/PX4/PX4-gazebo-models/blob/main/simulation-gazebo",target:"_blank",rel:"noopener noreferrer"}},[e._v("simulation-gazebo"),a("OutboundLink")],1),e._v(", which can be found in the "),a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/gazebo_models.html"}},[e._v("Gazebo Models Repository")]),e._v(" repository. This can be used to launch a "),a("em",[e._v("gz-server")]),e._v(" instance with any supported world and vehicle.")],1),e._v(" "),a("p",[e._v("The script can be used without installing any additional dependencies, and will fetch the supported PX4 models and worlds on first use (by default) and save them to "),a("code",[e._v("~/.simulation-gazebo")]),e._v(". If called again the script will use this directory to get models and worlds. Therefore if you want to use your own model and run it in standalone mode, you will have to place its source code in "),a("code",[e._v("~/.simulation-gazebo")]),e._v(".")]),e._v(" "),a("p",[e._v("You can fetch the script locally using any method you like, such as "),a("code",[e._v("wget")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://raw.githubusercontent.com/PX4/PX4-gazebo-models/main/simulation-gazebo\n")])])]),a("p",[e._v("The script can be started with:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /path/to/script/\npython3 simulation-gazebo\n")])])]),a("p",[e._v("For more information and arguments, see "),a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/gazebo_models.html"}},[e._v("Gazebo Models")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("make px4_sitl gz_x500")]),e._v(" gives the error "),a("code",[e._v("ninja: error: unknown target 'gz_x500'")]),e._v(" then run "),a("code",[e._v("make distclean")]),e._v(" to start from a clean slate, and try running "),a("code",[e._v("make px4_sitl gz_x500")]),e._v(" again.")])]),e._v(" "),a("h3",{attrs:{id:"headless-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headless-mode"}},[e._v("#")]),e._v(" Headless Mode")]),e._v(" "),a("p",[e._v('You might want to run Gazebo in "headless mode" (without the Gazebo GUI) as it uses fewer resources, and does not rely on your system having a graphics card that properly supports OpenGL rendering. This makes it faster to load and run, and for many simple use cases may be all you need.')]),e._v(" "),a("p",[e._v("The simulation can be run in headless mode by prefixing the command with the "),a("code",[e._v("HEADLESS=1")]),e._v(" environment variable:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("HEADLESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gz_x500\n")])])]),a("h3",{attrs:{id:"specify-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specify-world"}},[e._v("#")]),e._v(" Specify World")]),e._v(" "),a("p",[e._v("The simulation can be run inside a particular world by concatenating the desired world to the name of the desired vehicle. For example, to run the windy world with the "),a("code",[e._v("x500")]),e._v(" vehicle you can specify:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gz_x500_windy\n")])])]),a("p",[e._v("You can also specify the world using the "),a("code",[e._v("PX4_GZ_WORLD")]),e._v(" environment variable:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_WORLD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("windy "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gz_x500\n")])])]),a("p",[e._v("The supported worlds are listed below.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("World")]),e._v(" "),a("th",[e._v("Command")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("default")])]),e._v(" "),a("td",[a("code",[e._v("make px4_sitl *")])]),e._v(" "),a("td",[e._v("Empty world (a grey plane)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("windy")])]),e._v(" "),a("td",[a("code",[e._v("make px4_sitl *_windy")])]),e._v(" "),a("td",[e._v("Empty world with wind enabled")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("baylands")])]),e._v(" "),a("td",[a("code",[e._v("make px4_sitl *_baylands")])]),e._v(" "),a("td",[e._v("Baylands world surrounded by water")])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Note that if no world is specified, PX4 will use the "),a("code",[e._v("default")]),e._v(" world. However you must not "),a("em",[e._v("explicitly")]),e._v(" specify "),a("code",[e._v("_default")]),e._v(" on the model as this will prevent PX4 from launching. In other words, use "),a("code",[e._v("make px4_sitl gz_x500")]),e._v(" instead of "),a("code",[e._v("make px4_sitl gz_x500_default")]),e._v(" for the default.")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Baylands throws the following error, which can be ignored:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[Err] [SDFFeatures.cc:843] The geometry element of collision [collision] couldn't be created\n")])])]),a("p",[e._v("This occurs because Baylands has a lot of meshes. However it does not break Gazebo and the error has been downgraded to a warning in Gazebo Harmonic: "),a("a",{attrs:{href:"https://github.com/gazebosim/gz-physics/pull/531",target:"_blank",rel:"noopener noreferrer"}},[e._v("gz-physics/pull/531"),a("OutboundLink")],1),e._v(". You can also replace the error with a warning by "),a("a",{attrs:{href:"https://gazebosim.org/docs/garden/install_ubuntu_src",target:"_blank",rel:"noopener noreferrer"}},[e._v("installing gz-garden from source"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"usage-configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-configuration-options"}},[e._v("#")]),e._v(" Usage/Configuration Options")]),e._v(" "),a("p",[e._v("The startup pipeline allows for highly flexible configuration. In particular, it is possible to:")]),e._v(" "),a("ul",[a("li",[e._v("Start a new simulation with an arbitrary world or attach to an already running simulation.")]),e._v(" "),a("li",[e._v("Add a new vehicle to the simulation or link a new PX4 instance to an existing one.")])]),e._v(" "),a("p",[e._v("These scenarios are managed by setting the appropriate environment variables.")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[e._v("The startup syntax takes the form:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ARGS ./build/px4_sitl_default/bin/px4\n")])])]),a("p",[e._v("where "),a("code",[e._v("ARGS")]),e._v(" is a list of environment variables including:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("PX4_SYS_AUTOSTART")]),e._v(" ("),a("strong",[e._v("Mandatory")]),e._v("): Sets the "),a("RouterLink",{attrs:{to:"/zh/dev_airframes/adding_a_new_frame.html"}},[e._v("airframe autostart id")]),e._v(" of the PX4 airframe to start.")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_GZ_MODEL_NAME")]),e._v(": Sets the name of an "),a("em",[e._v("existing")]),e._v(" model in the gazebo simulation. If provided, the startup script tries to bind a new PX4 instance to the Gazebo resource matching exactly that name.")]),e._v(" "),a("ul",[a("li",[e._v("The setting is mutually exclusive with "),a("code",[e._v("PX4_SIM_MODEL")]),e._v(".")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_SIM_MODEL")]),e._v(": Sets the name of a new Gazebo model to be spawned in the simulator. If provided, the startup script looks for a model in the Gazebo resource path that matches the given variable, spawns it and binds a new PX4 instance to it.")]),e._v(" "),a("ul",[a("li",[e._v("The setting is mutually exclusive with "),a("code",[e._v("PX4_GZ_MODEL_NAME")]),e._v(".")])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The environmental variable "),a("code",[e._v("PX4_GZ_MODEL")]),e._v(" has been deprecated and its functionality merged into "),a("code",[e._v("PX4_SIM_MODEL")]),e._v(".")])]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("PX4_GZ_MODEL_POSE")]),e._v(": Sets the spawning position and orientation of the model when "),a("code",[e._v("PX4_SIM_MODEL")]),e._v(" is adopted. If provided, the startup script spawns the model at a pose following the syntax "),a("code",[e._v('"x,y,z,roll,pitch,yaw"')]),e._v(", where the positions are given in metres and the angles are in radians.")]),e._v(" "),a("ul",[a("li",[e._v("If omitted, the zero pose "),a("code",[e._v("[0,0,0,0,0,0]")]),e._v(" is used.")]),e._v(" "),a("li",[e._v("If less then 6 values are provided, the missing ones are fixed to zero.")]),e._v(" "),a("li",[e._v("This can only be used with "),a("code",[e._v("PX4_SIM_MODEL")]),e._v(" (not "),a("code",[e._v("PX4_GZ_MODEL_NAME")]),e._v(").")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_GZ_WORLD")]),e._v(": Sets the Gazebo world file for a new simulation. If it is not given, then "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/simulation/gz/worlds/default.sdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("default"),a("OutboundLink")],1),e._v(" is used.")]),e._v(" "),a("ul",[a("li",[e._v("This variable is ignored if an existing simulation is already running.")]),e._v(" "),a("li",[e._v("This value should be "),a("a",{attrs:{href:"#adding-new-worlds-and-models"}},[e._v("specified for the selected airframe")]),e._v(" but may be overridden using this argument.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_SIMULATOR=GZ")]),e._v(": Sets the simulator, which for Gazebo must be "),a("code",[e._v("gz")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("This value should be "),a("a",{attrs:{href:"#adding-new-worlds-and-models"}},[e._v("set for the selected airframe")]),e._v(", in which case it does not need to be set as an argument.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_GZ_STANDALONE")]),e._v(": Lets PX4 know that it should not launch an instance of Gazebo. Gazebo will need to be launched separately, as described in "),a("a",{attrs:{href:"#standalone-mode"}},[e._v("Standalone Mode")]),e._v(".")])])]),e._v(" "),a("p",[e._v("The PX4 Gazebo worlds and and models databases "),a("a",{attrs:{href:"https://github.com/PX4/PX4-gazebo-models",target:"_blank",rel:"noopener noreferrer"}},[e._v("can be found on Github here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[a("code",[e._v("gz_env.sh.in")]),e._v(" is compiled and made available in "),a("code",[e._v("$PX4_DIR/build/px4_sitl_default/rootfs/gz_env.sh")])])]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Here are some examples of the different scenarios covered above.")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("Start simulator + default world + spawn vehicle at default pose")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SIM_MODEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("gz_x500 ./build/px4_sitl_default/bin/px4\n")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Start simulator + default world + spawn vehicle at custom pose (y=2m)")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_MODEL_POSE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0,2"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SIM_MODEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("gz_x500 ./build/px4_sitl_default/bin/px4\n")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Start simulator + default world + link to existing vehicle")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_MODEL_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("x500 ./build/px4_sitl_default/bin/px4\n")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Start simulator in standalone mode + connect to Gazebo instance running default world")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_STANDALONE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SIM_MODEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("gz_x500 ./build/px4_sitl_default/bin/px4\n")])])]),a("p",[e._v("In a separate terminal run:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("python /path/to/simulation-gazebo\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"adding-new-worlds-and-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-worlds-and-models"}},[e._v("#")]),e._v(" Adding New Worlds and Models")]),e._v(" "),a("p",[e._v("SDF files, mesh files, textures and anything else to do with the functionality and appearance in Gazebo for worlds and models can be placed in the appropriate "),a("code",[e._v("/worlds")]),e._v(" and "),a("code",[e._v("/models")]),e._v(" directories in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-gazebo-models",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-gazebo-models"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Within PX4 follow the below steps to add models and worlds.")]),e._v(" "),a("h3",{attrs:{id:"adding-a-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-model"}},[e._v("#")]),e._v(" Adding a Model")]),e._v(" "),a("p",[e._v("To add a new model:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Define an "),a("RouterLink",{attrs:{to:"/zh/dev_airframes/adding_a_new_frame.html"}},[e._v("airframe configuration file")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Define the default parameters for Gazebo in the airframe configuration file (this example is from "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/airframes/4001_gz_x500",target:"_blank",rel:"noopener noreferrer"}},[e._v("x500 quadcopter"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("PX4_SIMULATOR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("${PX4_SIMULATOR:=gz}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("PX4_GZ_WORLD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("${PX4_GZ_WORLD:=default}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("PX4_SIM_MODEL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("${PX4_SIM_MODEL:=<your model name>}")]),e._v("\n")])])]),a("ul",[a("li",[a("p",[a("code",[e._v("PX4_SIMULATOR=${PX4_SIMULATOR:=gz}")]),e._v(" sets the default simulator (Gz) for that specific airframe.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("PX4_GZ_WORLD=${PX4_GZ_WORLD:=default}")]),e._v(" sets the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/simulation/gz/worlds/default.sdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("default world"),a("OutboundLink")],1),e._v(" for that specific airframe.")])]),e._v(" "),a("li",[a("p",[e._v("Setting the default value of "),a("code",[e._v("PX4_SIM_MODEL")]),e._v(" lets you start the simulation with just:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your new airframe id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ./build/px4_sitl_default/bin/px4\n")])])])])])]),e._v(" "),a("li",[a("p",[e._v("Add CMake Target for the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/airframes/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("airframe"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v('If you plan to use "regular" mode, add your model SDF to '),a("code",[e._v("Tools/simulation/gz/models/")]),e._v(".")]),e._v(" "),a("li",[e._v("If you plan to use "),a("em",[e._v("standalone")]),e._v(" mode, add your model SDF to "),a("code",[e._v("~/.simulation-gazebo/models/")])])]),e._v(" "),a("p",[e._v("You can of course also use both.")])])]),e._v(" "),a("h3",{attrs:{id:"adding-a-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-world"}},[e._v("#")]),e._v(" Adding a World")]),e._v(" "),a("p",[e._v("To add a new world:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Add your world to the list of worlds found in the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/simulation/gz_bridge/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("CMakeLists.txt")]),e._v(" here"),a("OutboundLink")],1),e._v(". This is required in order to allow "),a("code",[e._v("CMake")]),e._v(" to generate correct targets.")]),e._v(" "),a("ul",[a("li",[e._v('If you plan to use "normal" mode, add your world sdf to '),a("code",[e._v("Tools/simulation/gz/worlds/")]),e._v(".")]),e._v(" "),a("li",[e._v("If you plan to use "),a("em",[e._v("standalone")]),e._v(" mode, add your world SDF to "),a("code",[e._v("~/.simulation-gazebo/worlds/")])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("As long as the world file and the model file are in the Gazebo search path ("),a("code",[e._v("GZ_SIM_RESOURCE_PATH")]),e._v(") it is not necessary to add them to the PX4 world and model directories. However, "),a("code",[e._v("make px4_sitl gz_<model>_<world>")]),e._v(" won't work with them.")])]),e._v(" "),a("h2",{attrs:{id:"px4-gazebo-time-synchronization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-gazebo-time-synchronization"}},[e._v("#")]),e._v(" PX4-Gazebo Time Synchronization")]),e._v(" "),a("p",[e._v("Unlike the Gazebo Classic and jMAVSim simulators, PX4 and Gazebo do not implement a lockstep mechanism.")]),e._v(" "),a("p",[e._v("During Gazebo simulations PX4 subscribes to the Gazebo "),a("code",[e._v("\\clock")]),e._v(" topic and uses it as clock source. This guarantees that PX4 will always wait for Gazebo before moving forward in time, even if Gazebo is running with real time factors different from 1.")]),e._v(" "),a("p",[e._v("Note, however, that as the lockstep is missing, Gazebo will never wait for PX4 to finish its computations. In the worst case scenario, PX4 can completely go offline and Gazebo will keep running, with obvious crashes of the simulated drone.")]),e._v(" "),a("h2",{attrs:{id:"multi-vehicle-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation"}},[e._v("#")]),e._v(" Multi-Vehicle Simulation")]),e._v(" "),a("p",[e._v("Multi-Vehicle simulation is supported on Linux hosts.")]),e._v(" "),a("p",[e._v("For more information see: "),a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/multi_vehicle_simulation.html"}},[e._v("Multi-Vehicle Simulation with Gazebo")])],1),e._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Auterion/px4-simulation-ignition",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4-simulation-ignition"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);