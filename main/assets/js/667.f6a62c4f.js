(window.webpackJsonp=window.webpackJsonp||[]).push([[667],{1557:function(t,e,a){t.exports=a.p+"assets/img/px4_simulator_messages.f1161233.svg"},1558:function(t,e,a){t.exports=a.p+"assets/img/px4_sitl_overview.d5d197f2.svg"},4141:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"仿真"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仿真"}},[t._v("#")]),t._v(" 仿真")]),t._v(" "),s("p",[t._v("在仿真机中模拟器允许 px4 飞行代码来控制计算机建模工具。 You can interact with this vehicle just as you might with a real vehicle, using "),s("em",[t._v("QGroundControl")]),t._v(", an offboard API, or a radio controller/gamepad.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("Simulation is a quick, easy, and most importantly, "),s("em",[t._v("safe")]),t._v(" way to test changes to PX4 code before attempting to fly in the real world. It is also a good way to start flying with PX4 when you haven't yet got a vehicle to experiment with.")])]),t._v(" "),s("p",[t._v("PX4 supports both "),s("em",[t._v("Software In the Loop (SITL)")]),t._v(" simulation, where the flight stack runs on computer (either the same computer or another computer on the same network) and "),s("em",[t._v("Hardware In the Loop (HITL)")]),t._v(" simulation using a simulation firmware on a real flight controller board.")]),t._v(" "),s("p",[t._v("Information about available simulators and how to set them up are provided in the next section. The other sections provide general information about how the simulator works, and are not required to "),s("em",[t._v("use")]),t._v(" the simulators.")]),t._v(" "),s("h2",{attrs:{id:"支持的仿真器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的仿真器"}},[t._v("#")]),t._v(" 支持的仿真器")]),t._v(" "),s("p",[t._v("The following simulators are supported by the PX4 core development team.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("仿真器")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/"}},[t._v("Gazebo")])],1),t._v(" "),s("td",[s("p",[s("strong",[t._v("强烈建议使用此仿真器。")])]),s("p",[t._v("Gazebo supersedes "),s("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(", featuring more advanced rendering, physics and sensor models. It is the only version of Gazebo available from Ubuntu Linux 22.04")],1),s("p",[t._v("它具有功能强大的 3D 仿真环境, 特别适用于测试对象避障和计算机视觉。 它还可用于 "),s("RouterLink",{attrs:{to:"/zh/simulation/multi-vehicle-simulation.html"}},[t._v("多工具仿真")]),t._v("，通常用于 "),s("RouterLink",{attrs:{to:"/zh/simulation/ros_interface.html"}},[t._v("ROS")]),t._v("，这是一种用于自动控制的工具集。 ")],1),s("p",[s("strong",[t._v("Supported Vehicles:")]),t._v(" Quad, Standard VTOL, Plane")])])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic")])],1),t._v(" "),s("td",[s("p",[s("strong",[t._v("强烈建议使用此仿真器。")])]),s("p",[t._v("它具有功能强大的 3D 仿真环境, 特别适用于测试对象避障和计算机视觉。 它还可用于 "),s("RouterLink",{attrs:{to:"/zh/simulation/multi-vehicle-simulation.html"}},[t._v("多工具仿真")]),t._v("，通常用于 "),s("RouterLink",{attrs:{to:"/zh/simulation/ros_interface.html"}},[t._v("ROS")]),t._v("，这是一种用于自动控制的工具集。")],1),s("p",[s("strong",[t._v("Supported Vehicles:")]),t._v(" Quad ("),s("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("Iris")]),t._v(", Hex (Typhoon H480), "),s("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#vtol_standard_vtol_generic_standard_vtol"}},[t._v("Generic Standard VTOL (QuadPlane)")]),t._v(", Tailsitter, Plane, Rover, Submarine ")],1)])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/zh/sim_jmavsim/"}},[t._v("jMAVSim")])],1),t._v(" "),s("td",[t._v("A simple multirotor simulator that allows you to fly "),s("em",[t._v("copter")]),t._v(" type vehicles around a simulated world. "),s("p",[t._v("它易设置，可以用来测试您的工具是否可以起飞、飞行、降落、并对各种故障条件 (例如 gps 故障) 做出适当的反应。 It can also be used for "),s("RouterLink",{attrs:{to:"/zh/sim_jmavsim/multi_vehicle.html"}},[t._v("multi-vehicle simulation")]),t._v(".")],1),s("p",[s("strong",[t._v("支持机型： ")]),t._v("四旋翼")])])])])]),t._v(" "),s("p",[t._v("There are also a number of "),s("RouterLink",{attrs:{to:"/zh/simulation/community_supported_simulators.html"}},[t._v("Community Supported Simulators")]),t._v(".")],1),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("所有模拟器都使用 Simulator MAVLink API 与 PX4 进行通信。 It is not required to "),s("em",[t._v("use")]),t._v(" the simulators.")]),t._v(" "),s("h2",{attrs:{id:"仿真器-mavlink-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仿真器-mavlink-api"}},[t._v("#")]),t._v(" 仿真器 MAVLink API")]),t._v(" "),s("p",[t._v("All simulators except for Gazebo communicate with PX4 using the Simulator MAVLink API. This API defines a set of MAVLink messages that supply sensor data from the simulated world to PX4 and return motor and actuator values from the flight code that will be applied to the simulated vehicle. The image below shows the message flow.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1557),alt:"Simulator MAVLink API"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("A SITL build of PX4 uses "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/simulation/simulator_mavlink/SimulatorMavlink.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("SimulatorMavlink.cpp"),s("OutboundLink")],1),t._v(" to handle these messages while a hardware build in HIL mode uses "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/mavlink/mavlink_receiver.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.cpp"),s("OutboundLink")],1),t._v(". 这些端口是： All motors / actuators are blocked, but internal software is fully operational.")])]),t._v(" "),s("p",[t._v("The messages are described below (see links for specific detail).")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("消息")]),t._v(" "),s("th",[t._v("方向")]),t._v(" "),s("th",[t._v("参数描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_MODE_FLAG_HIL_ENABLED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_MODE:MAV_MODE_FLAG_HIL_ENABLED"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("不可用")]),t._v(" "),s("td",[t._v("使用模拟时的模式标志。 所有电机/执行器都被卡停，但内部软件可以完全正常运行。")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_ACTUATOR_CONTROLS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_ACTUATOR_CONTROLS"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("PX4 至 Sim")]),t._v(" "),s("td",[t._v("PX4 控制输出 （电机、执行器）。")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_SENSOR"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Sim 至 PX4")]),t._v(" "),s("td",[t._v("在 NED 体框架中以 SI 单位模拟 IMU 读数。")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_GPS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_GPS"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Sim 至 PX4")]),t._v(" "),s("td",[t._v("模拟的 GPS RAW 传感器值。")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_OPTICAL_FLOW",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_OPTICAL_FLOW"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Sim 至 PX4")]),t._v(" "),s("td",[t._v("来自流量传感器的模拟光流 （例如 PX4FLOW 或光学鼠标传感器）。")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_STATE_QUATERNION",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_STATE_QUATERNION"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Sim 至 PX4")]),t._v(" "),s("td",[t._v("包含实际的“仿真”无人机位置、姿态、速度等。 这可以记录并与 px4 的分析和调试估计进行比较 （例如，检查估计器在噪声 （仿真） 传感器输入中的工作情况）。")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_RC_INPUTS_RAW",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_RC_INPUTS_RAW"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Sim 至 PX4")]),t._v(" "),s("td",[t._v("收到 RC 通道的 RAW 值。")])])])]),t._v(" "),s("p",[t._v("PX4 directly uses the "),s("a",{attrs:{href:"https://gazebosim.org/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gazebo API"),s("OutboundLink")],1),t._v(" to interface with "),s("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(" and MAVlink is not required.")],1),t._v(" "),s("h2",{attrs:{id:"默认-px4-mavlink-udp-端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认-px4-mavlink-udp-端口"}},[t._v("#")]),t._v(" 默认 PX4 MAVLink UDP 端口")]),t._v(" "),s("p",[t._v("By default, PX4 uses commonly established UDP ports for MAVLink communication with ground control stations (e.g. "),s("em",[t._v("QGroundControl")]),t._v("), Offboard APIs (e.g. MAVSDK, MAVROS) and simulator APIs (e.g. Gazebo). These ports are:")]),t._v(" "),s("ul",[s("li",[t._v("PX4's remote UDP Port "),s("strong",[t._v("14550")]),t._v(" is used for communication with ground control stations. 期望外接 APIs 监听此端口上的连接。 "),s("em",[t._v("QGroundControl")]),t._v(" listens to this port by default.")]),t._v(" "),s("li",[t._v("PX4's remote UDP Port "),s("strong",[t._v("14540")]),t._v(" is used for communication with offboard APIs. 期望 GCS 将侦听此端口上的连接。 "),s("em",[t._v("QGroundControl")]),t._v("默认侦听此端口。\n:::")]),t._v(" "),s("li",[t._v("The simulator's local TCP Port, "),s("strong",[t._v("4560")]),t._v(", is used for communication with PX4. PX4 侦听此端口，仿真器应通过向该端口广播数据来启动通信。")])]),t._v(" "),s("p",[t._v("如果使用正常的生成系统 SITL "),s("code",[t._v("make")]),t._v(" 配置目标 （请参阅下一节），则 SITL 和模拟器都将在同一台计算机上启动，并自动配置上述端口。 您可以配置其他 MAVLink UDP 连接，并以其他方式修改生成配置和初始化文件中的模拟环境。\n:::")]),t._v(" "),s("h2",{attrs:{id:"sitl-仿真环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitl-仿真环境"}},[t._v("#")]),t._v(" SITL 仿真环境")]),t._v(" "),s("p",[t._v("The diagram below shows a typical SITL simulation environment for any of the supported simulators that use MAVLink (i.e. all of them except Gazebo).")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1558),alt:"PX4 SITL overview"}})]),t._v(" "),s("p",[t._v("The different parts of the system connect via UDP, and can be run on either the same computer or another computer on the same network.")]),t._v(" "),s("ul",[s("li",[t._v("PX4 uses a simulation-specific module to connect to the simulator's local TCP port 4560. Simulators then exchange information with PX4 using the "),s("a",{attrs:{href:"#simulator-mavlink-api"}},[t._v("Simulator MAVLink API")]),t._v(" described above. SITL 和模拟器上的 PX4 可以在同一台计算机上运行，也可以在同一网络上运行不同的计算机。")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("Simulators can also use the "),s("em",[t._v("uxrce-dds bridge")]),t._v(" ("),s("RouterLink",{attrs:{to:"/zh/middleware/uxrce_dds.html"}},[t._v("XRCE-DDS")]),t._v(") to directly interact with PX4 (i.e. via "),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html"}},[t._v("UORB topics")]),t._v(" rather than MAVLink). This approach "),s("em",[t._v("may")]),t._v(" used by Gazebo Classic for "),s("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/multi_vehicle_simulation.html#build-and-test-xrce-dds"}},[t._v("multi-vehicle simulation")]),t._v(".")],1)]),t._v(" "),s("ul",[s("li",[t._v("PX4 uses the normal MAVLink module to connect to ground stations and external developer APIs like MAVSDK or ROS\n"),s("ul",[s("li",[t._v("Ground stations listen to PX4's remote UDP port: "),s("code",[t._v("14550")])]),t._v(" "),s("li",[t._v("External developer APIs listen to PX4's remote UDP port: "),s("code",[t._v("14540")]),t._v(". For multi-vehicle simulations, PX4 sequentially allocates a separate remote port for each instance from "),s("code",[t._v("14540")]),t._v(" to "),s("code",[t._v("14549")]),t._v(" (additional instances all use port "),s("code",[t._v("14549")]),t._v(").")])])]),t._v(" "),s("li",[t._v("PX4 defines a number of "),s("em",[t._v("local")]),t._v(" UDP ports ("),s("code",[t._v("14580")]),t._v(","),s("code",[t._v("18570")]),t._v('), which are sometimes used when networking with PX4 running in a container or virtual machine. These are not recommended for "general" use and may change in future.')]),t._v(" "),s("li",[t._v("A serial connection may be used to connect "),s("RouterLink",{attrs:{to:"/zh/config/joystick.html"}},[t._v("Joystick/Gamepad")]),t._v(" hardware via "),s("em",[t._v("QGroundControl")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("If you use the normal build system SITL "),s("code",[t._v("make")]),t._v(" configuration targets (see next section) then both SITL and the Simulator will be launched on the same computer and the ports above will automatically be configured. You can configure additional MAVLink UDP connections and otherwise modify the simulation environment in the build configuration and initialisation files.")]),t._v(" "),s("h3",{attrs:{id:"启动-构建-sitl-模拟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-构建-sitl-模拟"}},[t._v("#")]),t._v(" 启动/构建 SITL 模拟")]),t._v(" "),s("p",[t._v("The build system makes it very easy to build and start PX4 on SITL, launch a simulator, and connect them. The syntax (simplified) looks like this:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl simulator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_vehicle-model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("where "),s("code",[t._v("simulator")]),t._v(" is "),s("code",[t._v("gz")]),t._v(" (for Gazebo), "),s("code",[t._v("gazebo-classic")]),t._v(", "),s("code",[t._v("jmavsim")]),t._v(" or some other simulator, and vehicle-model is a particular vehicle type supported by that simulator ("),s("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(" and "),s("RouterLink",{attrs:{to:"/zh/sim_jmavsim/"}},[t._v("jMAVSim")]),t._v(" only support multicopters at time of writing, while "),s("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" supports many different types).")],1),t._v(" "),s("p",[t._v("A number of examples are shown below, and there are many more in the individual pages for each of the simulators:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Gazebo with the x500 multicopter")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gz_x500\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Gazebo Classic with plane")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic_plane\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Gazebo Classic with iris and optical flow")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic_iris_opt_flow\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start JMavSim with iris (default vehicle model)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Start PX4 with no simulator (i.e. to use your own "custom" simulator)')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl none_iris\n")])])]),s("p",[t._v("The simulation can be further configured via environment variables:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("PX4_ESTIMATOR")]),t._v("：此变量配置要使用的估算器。 Possible options are: "),s("code",[t._v("ekf2")]),t._v(" (default), "),s("code",[t._v("lpe")]),t._v(" (deprecated). 在运行模拟之前，可以通过 "),s("code",[t._v("export PX4_ESTIMATOR=lpe")]),t._v(" 进行设置。")])]),t._v(" "),s("p",[t._v("The syntax described here is simplified, and there are many other options that you can configure via "),s("em",[t._v("make")]),t._v(" - for example, to set that you wish to connect to an IDE or debugger. For more information see: "),s("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#px4-make-build-targets"}},[t._v("Building the Code > PX4 Make Build Targets")]),t._v(".")],1),t._v(" "),s("p",[s("a",{attrs:{id:"simulation_speed"}})]),t._v(" "),s("h3",{attrs:{id:"以比实际时间更快的流速运行仿真"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以比实际时间更快的流速运行仿真"}},[t._v("#")]),t._v(" 以比实际时间更快的流速运行仿真")]),t._v(" "),s("p",[t._v("SITL can be run faster or slower than realtime when using jMAVSim or Gazebo Classic.")]),t._v(" "),s("p",[t._v("The speed factor is set using the environment variable "),s("code",[t._v("PX4_SIM_SPEED_FACTOR")]),t._v(". For example, to run the jMAVSim simulation at 2 times the real time speed:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SIM_SPEED_FACTOR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),s("p",[t._v("To run at half real-time:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SIM_SPEED_FACTOR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),s("p",[t._v("You can apply the factor to all SITL runs in the current session using "),s("code",[t._v("EXPORT")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SIM_SPEED_FACTOR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v('At some point IO or CPU will limit the speed that is possible on your machine and it will be slowed down "automatically".\nPowerful desktop machines can usually run the simulation at around 6-10x, for notebooks the achieved rates can be around 3-4x.')])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("To avoid PX4 detecting data link timeouts, increase the value of param "),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DL_LOSS_T"}},[t._v("COM_DL_LOSS_T")]),t._v(" proportional to the simulation rate. For example, if "),s("code",[t._v("COM_DL_LOSS_T")]),t._v(" is 10 in realtime, at 10x simulation rate increase to 100.")],1)]),t._v(" "),s("h3",{attrs:{id:"lockstep-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lockstep-simulation"}},[t._v("#")]),t._v(" Lockstep Simulation")]),t._v(" "),s("p",[t._v("PX4 SITL and the simulators (jMAVSim or Gazebo Classic) have been set up to run in "),s("em",[t._v("lockstep")]),t._v(". What this means is that PX4 and the simulator wait on each other for sensor and actuator messages, rather than running at their own speeds.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("Lockstep makes it possible to "),s("a",{attrs:{href:"#simulation_speed"}},[t._v("run the simulation faster or slower than realtime")]),t._v(", and also to pause it in order to step through code.")])]),t._v(" "),s("p",[t._v("The sequence of steps for lockstep are:")]),t._v(" "),s("ol",[s("li",[t._v("The simulation sends a sensor message "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_SENSOR"),s("OutboundLink")],1),t._v(" including a timestamp "),s("code",[t._v("time_usec")]),t._v(" to update the sensor state and time of PX4.")]),t._v(" "),s("li",[t._v("PX4 receives this and does one iteration of state estimation, controls, etc. and eventually sends an actuator message "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_ACTUATOR_CONTROLS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_ACTUATOR_CONTROLS"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("The simulation waits until it receives the actuator/motor message, then simulates the physics and calculates the next sensor message to send to PX4 again.")])]),t._v(" "),s("p",[t._v('The system starts with a "freewheeling" period where the simulation sends sensor messages including time and therefore runs PX4 until it has initialized and responds with an actuator message.')]),t._v(" "),s("h4",{attrs:{id:"disable-lockstep-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-lockstep-simulation"}},[t._v("#")]),t._v(" Disable Lockstep Simulation")]),t._v(" "),s("p",[t._v("The lockstep simulation can be disabled if, for example, SITL is to be used with a simulator that does not support this feature. In this case the simulator and PX4 use the host system time and do not wait on each other.")]),t._v(" "),s("p",[t._v("To disable lockstep in PX4, run "),s("code",[t._v("make px4_sitl_default boardconfig")]),t._v(" and set the "),s("code",[t._v("BOARD_NOLOCKSTEP")]),t._v(' "Force disable lockstep" symbol which is located under toolchain.')]),t._v(" "),s("p",[t._v("To disable lockstep in Gazebo, edit "),s("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo-classic/blob/3062d287c322fabf1b41b8e33518eb449d4ac6ed/models/plane/plane.sdf#L449",target:"_blank",rel:"noopener noreferrer"}},[t._v("the model SDF file"),s("OutboundLink")],1),t._v(" and set "),s("code",[t._v("<enable_lockstep>false</enable_lockstep>")]),t._v(".")]),t._v(" "),s("p",[t._v("To disable lockstep in jMAVSim, remove "),s("code",[t._v("-l")]),t._v(" in "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/simulation/jsbsim/sitl_run.sh#L40",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitl_run.sh"),s("OutboundLink")],1),t._v(", or make sure otherwise that the java binary is started without the "),s("code",[t._v("-lockstep")]),t._v(" flag.")]),t._v(" "),s("h3",{attrs:{id:"启动脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动脚本"}},[t._v("#")]),t._v(" 启动脚本")]),t._v(" "),s("p",[t._v("Scripts are used to control which parameter settings to use or which modules to start. They are located in the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/ROMFS/px4fmu_common/init.d-posix",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d-posix"),s("OutboundLink")],1),t._v(" directory, the "),s("code",[t._v("rcS")]),t._v(" file is the main entry point. See "),s("RouterLink",{attrs:{to:"/zh/concept/system_startup.html"}},[t._v("System Startup")]),t._v(" for more information.")],1),t._v(" "),s("h3",{attrs:{id:"simulating-failsafes-and-sensor-hardware-failure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simulating-failsafes-and-sensor-hardware-failure"}},[t._v("#")]),t._v(" Simulating Failsafes and Sensor/Hardware Failure")]),t._v(" "),s("p",[t._v("其他模拟器可以使用相同的方法来实现相机支持。")]),t._v(" "),s("h2",{attrs:{id:"hitl-仿真环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hitl-仿真环境"}},[t._v("#")]),t._v(" HITL 仿真环境")]),t._v(" "),s("p",[t._v("With Hardware-in-the-Loop (HITL) simulation the normal PX4 firmware is run on real hardware. The HITL Simulation Environment in documented in: "),s("RouterLink",{attrs:{to:"/zh/simulation/hitl.html"}},[t._v("HITL Simulation")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"操纵杆-手柄集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操纵杆-手柄集成"}},[t._v("#")]),t._v(" 操纵杆／手柄集成")]),t._v(" "),s("p",[s("em",[t._v("QGroundControl")]),t._v(" desktop versions can connect to a USB Joystick/Gamepad and send its movement commands and button presses to PX4 over MAVLink. 相反，它将数据包路由到 \"本地主机\"。 If you don't have a joystick you can alternatively control the vehicle using QGroundControl's onscreen virtual thumbsticks.")]),t._v(" "),s("p",[t._v("For setup information see the "),s("em",[t._v("QGroundControl User Guide")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("操纵杆设置"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/VirtualJoystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("虚拟操纵杆"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"相机模拟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相机模拟"}},[t._v("#")]),t._v(" 相机模拟")]),t._v(" "),s("p",[t._v("PX4 supports capture of both still images and video from within the "),s("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" simulated environment. This can be enabled/set up as described in "),s("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/#video-streaming"}},[t._v("Gazebo Glassic > Video Streaming")]),t._v(".")],1),t._v(" "),s("p",[t._v("The simulated camera is a gazebo classic plugin that implements the "),s("a",{attrs:{href:"https://mavlink.io/en/protocol/camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Camera Protocol"),s("OutboundLink")],1),t._v(" "),t._v(". PX4 connects/integrates with this camera in "),s("em",[t._v("exactly the same way")]),t._v(" as it would with any other MAVLink camera:")]),t._v(" "),s("ol",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TRIG_INTERFACE"}},[t._v("TRIG_INTERFACE")]),t._v(" must be set to "),s("code",[t._v("3")]),t._v(" to configure the camera trigger driver for use with a MAVLink camera :::tip In this mode the driver just sends a "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAMERA_TRIGGER"),s("OutboundLink")],1),t._v(" message whenever an image capture is requested. For more information see "),s("RouterLink",{attrs:{to:"/zh/peripherals/camera.html"}},[t._v("Camera")]),t._v(".\n:::")],1)]),t._v(" "),s("li",[s("p",[t._v("PX4 必须在 GCS 和（模拟器）MAVLink Camera 之间转发所有摄像机命令。 You can do this by starting "),s("RouterLink",{attrs:{to:"/zh/modules/modules_communication.html#mavlink"}},[t._v("MAVLink")]),t._v(" with the "),s("code",[t._v("-f")]),t._v(" flag as shown, specifying the UDP ports for the new connection.")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mavlink start -u "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14558")]),t._v(" -o "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14530")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),t._v(" -f -m camera\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")])])])]),t._v(" "),s("p",[t._v("More than just the camera MAVLink messages will be forwarded, but the camera will ignore those that it doesn't consider relevant.\n:::")]),t._v(" "),s("p",[t._v("The same approach can be used by other simulators to implement camera support.")]),t._v(" "),s("h2",{attrs:{id:"在远程服务器上运行仿真"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在远程服务器上运行仿真"}},[t._v("#")]),t._v(" 在远程服务器上运行仿真")]),t._v(" "),s("p",[t._v("It is possible to run the simulator on one computer, and access it from another computer on the same network (or on another network with appropriate routing). This might be useful, for example, if you want to test a drone application running on real companion computer hardware running against a simulated vehicle.")]),t._v(" "),s("p",[t._v('This does not work "out of the box" because PX4 does not route packets to external interfaces by default (in order to avoid spamming the network and different simulations interfering with each other). Instead it routes traffic internally - to "localhost".')]),t._v(" "),s("p",[t._v("There are a number of ways to make the UDP packets available on external interfaces, as outlined below.")]),t._v(" "),s("h3",{attrs:{id:"启用-mav-broadcast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用-mav-broadcast"}},[t._v("#")]),t._v(" 启用 MAV_BROADCAST")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://github.com/mavlink-router/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink-router"),s("OutboundLink")],1),t._v(" can be used to route packets from localhost to an external interface.")]),t._v(" "),s("p",[t._v("To route packets between SITL running on one computer (sending MAVLink traffic to localhost on UDP port 14550), and QGC running on another computer (e.g. at address "),s("code",[t._v("10.73.41.30")]),t._v(") you could:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Start "),s("em",[t._v("mavlink-router")]),t._v(" with the following command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mavlink-routerd -e "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.73")]),t._v(".41.30:14550 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:14550\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Use a "),s("em",[t._v("mavlink-router")]),t._v(" conf file.")]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("UdpEndpoint QGC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Mode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Normal")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10.73.41.30")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("14550")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("UdpEndpoint SIM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Mode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Eavesdropping")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("127.0.0.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("14550")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("More information about "),s("em",[t._v("mavlink-router")]),t._v(" configuration can be found "),s("a",{attrs:{href:"https://github.com/mavlink-router/mavlink-router#running",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"使用-mavlink-路由器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-mavlink-路由器"}},[t._v("#")]),t._v(" 使用 MAVLink 路由器")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/zh/modules/modules_communication.html#mavlink_usage"}},[t._v("mavlink module")]),t._v(" routes to "),s("em",[t._v("localhost")]),t._v(" by default, but you can enable UDP broadcasting of heartbeats using its "),s("code",[t._v("-p")]),t._v(" option. Any remote computer on the network can then connect to the simulator by listening to the appropriate port (i.e. 14550 for "),s("em",[t._v("QGroundControl")]),t._v(").")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("UDP")]),t._v(" "),s("p",[t._v("broadcasting provides a simple way to set up the connection when there is only one simulation running on the network. Do not use this approach if there are multiple simulations running on the network (you might instead "),s("a",{attrs:{href:"#enable-streaming-to-specific-address"}},[t._v("publish to a specific address")]),t._v(").")])]),t._v(" "),s("p",[t._v("This should be done in an appropriate configuration file where "),s("code",[t._v("mavlink start")]),t._v(" is called. For example: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/px4-rc.mavlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("/ROMFS/px4fmu_common/init.d-posix/px4-rc.mavlink"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"修改外部广播的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改外部广播的配置"}},[t._v("#")]),t._v(" 修改外部广播的配置")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/zh/modules/modules_communication.html#mavlink_usage"}},[t._v("mavlink module")]),t._v(" routes to "),s("em",[t._v("localhost")]),t._v(" by default, but you can specify an external IP address to stream to using its "),s("code",[t._v("-t")]),t._v(" option. The specified remote computer can then connect to the simulator by listening to the appropriate port (i.e. 14550 for "),s("em",[t._v("QGroundControl")]),t._v(").")],1),t._v(" "),s("p",[t._v("This should be done in various configuration files where "),s("code",[t._v("mavlink start")]),t._v(" is called. For example: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/px4-rc.mavlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("/ROMFS/px4fmu_common/init.d-posix/px4-rc.mavlink"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"ssh-通道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-通道"}},[t._v("#")]),t._v(" SSH 通道")]),t._v(" "),s("p",[t._v("SSH tunneling is a flexible option because the simulation computer and the system using it need not be on the same network.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("You might similarly use VPN to provide a tunnel to an external interface (on the same network or another network).")])]),t._v(" "),s("p",[t._v("One way to create the tunnel is to use SSH tunneling options. The tunnel itself can be created by running the following command on "),s("em",[t._v("localhost")]),t._v(", where "),s("code",[t._v("remote.local")]),t._v(" is the name of a remote computer:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -C -fR "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14551")]),t._v(":localhost:14551 remote.local\n")])])]),s("p",[t._v("The UDP packets need to be translated to TCP packets so they can be routed over SSH. The "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Netcat",target:"_blank",rel:"noopener noreferrer"}},[t._v("netcat"),s("OutboundLink")],1),t._v(" utility can be used on both sides of the tunnel - first to convert packets from UDP to TCP, and then back to UDP at the other end.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("QGC")]),t._v(" "),s("p",[t._v("must be running before executing "),s("em",[t._v("netcat")]),t._v(".")])]),t._v(" "),s("p",[t._v("On the "),s("em",[t._v("QGroundControl")]),t._v(" computer, UDP packet translation may be implemented by running following commands:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfifo")]),t._v(" /tmp/tcp2udp\nnetcat -lvp "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14551")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" /tmp/tcp2udp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" netcat -u localhost "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14550")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /tmp/tcp2udp\n")])])]),s("p",[t._v("On the simulator side of the SSH tunnel, the command is:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfifo")]),t._v(" /tmp/udp2tcp\nnetcat -lvup "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14550")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" /tmp/udp2tcp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" netcat localhost "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14551")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /tmp/udp2tcp\n")])])]),s("p",[t._v("The port number "),s("code",[t._v("14550")]),t._v(" is valid for connecting to QGroundControl or another GCS, but should be adjusted for other endpoints (e.g. developer APIs etc.).")]),t._v(" "),s("p",[t._v("The tunnel may in theory run indefinitely, but "),s("em",[t._v("netcat")]),t._v(" connections may need to be restarted if there is a problem.")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://raw.githubusercontent.com/ThunderFly-aerospace/sitl_gazebo/autogyro-sitl/scripts/QGC_remote_connect.bash",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC_remote_connect.bash"),s("OutboundLink")],1),t._v(" script can be run on the QGC computer to automatically setup/run the above instructions. The simulation must already be running on the remote server, and you must be able to SSH into that server.")])])}),[],!1,null,null,null);e.default=o.exports}}]);