(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{1305:function(t,e,a){t.exports=a.p+"assets/img/px4_simulator_messages.e08a4130.png"},1306:function(t,e,a){t.exports=a.p+"assets/img/px4_sitl_overview.d5d197f2.svg"},2046:function(t,e,a){"use strict";a.r(e);var o=a(19),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"simulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simulation"}},[t._v("#")]),t._v(" Simulation")]),t._v(" "),o("p",[t._v('Simulators allow PX4 flight code to control a computer modeled vehicle in a simulated "world".\nYou can interact with this vehicle just as you might with a real vehicle, using '),o("em",[t._v("QGroundControl")]),t._v(", an offboard API, or a radio controller/gamepad.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Simulation is a quick, easy, and most importantly, "),o("em",[t._v("safe")]),t._v(" way to test changes to PX4 code before attempting to fly in the real world.\nIt is also a good way to start flying with PX4 when you haven't yet got a vehicle to experiment with.")])]),t._v(" "),o("p",[t._v("PX4 supports both "),o("em",[t._v("Software In the Loop (SITL)")]),t._v(" simulation, where the flight stack runs on computer (either the same computer or another computer on the same network) and "),o("em",[t._v("Hardware In the Loop (HITL)")]),t._v(" simulation using a simulation firmware on a real flight controller board.")]),t._v(" "),o("p",[t._v("Information about available simulators and how to set them up are provided in the next section.\nThe other sections provide general information about how the simulator works, and are not required to "),o("em",[t._v("use")]),t._v(" the simulators.")]),t._v(" "),o("h2",{attrs:{id:"supported-simulators"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-simulators"}},[t._v("#")]),t._v(" Supported Simulators")]),t._v(" "),o("p",[t._v("The following simulators work with PX4 for HITL and/or SITL simulation.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Simulator")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo")])],1),t._v(" "),o("td",[o("p",[o("strong",[t._v("This simulator is highly recommended.")])]),o("p",[t._v("A powerful 3D simulation environment that is particularly suitable for testing object-avoidance and computer vision. It can also be used for "),o("RouterLink",{attrs:{to:"/en/simulation/multi-vehicle-simulation.html"}},[t._v("multi-vehicle simulation")]),t._v(" and is commonly used with "),o("RouterLink",{attrs:{to:"/en/simulation/ros_interface.html"}},[t._v("ROS")]),t._v(", a collection of tools for automating vehicle control. ")],1),o("p",[o("strong",[t._v("Supported Vehicles:")]),t._v(" Quad ("),o("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter_quadrotor_wide_3dr_iris_quadrotor"}},[t._v("Iris")]),t._v(" and "),o("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter_quadrotor_x_3dr_solo"}},[t._v("Solo")]),t._v(", Hex (Typhoon H480), "),o("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#vtol_standard_vtol_generic_quad_delta_vtol"}},[t._v("Generic quad delta VTOL")]),t._v(", Tailsitter, Plane, Rover, Submarine ")],1)])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/simulation/flightgear.html"}},[t._v("FlightGear")])],1),t._v(" "),o("td",[o("p",[t._v("A simulator that provides physically and visually realistic simulations. In particular it can simulate many weather conditions, including thunderstorms, snow, rain and hail, and can also simulate thermals and different types of atmospheric flows. "),o("RouterLink",{attrs:{to:"/en/simulation/multi_vehicle_flightgear.html"}},[t._v("Multi-vehicle simulation")]),t._v(" is also supported.")],1),t._v(" "),o("p",[o("strong",[t._v("Supported Vehicles:")]),t._v(" Plane, Autogyro, Rover")])])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/simulation/jsbsim.html"}},[t._v("JSBSim")])],1),t._v(" "),o("td",[o("p",[t._v("A simulator that provides advanced flight dynamics models. This can be used to model realistic flight dynamics based on wind tunnel data.")]),t._v(" "),o("p",[o("strong",[t._v("Supported Vehicles:")]),t._v(" Plane, Quad, Hex")])])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim")])],1),t._v(" "),o("td",[t._v("A simple multirotor simulator that allows you to fly "),o("em",[t._v("copter")]),t._v(" type vehicles around a simulated world. "),o("p",[t._v("It is easy to set up and can be used to test that your vehicle can take off, fly, land, and responds appropriately to various fail conditions (e.g. GPS failure). It can also be used for "),o("RouterLink",{attrs:{to:"/en/simulation/multi_vehicle_jmavsim.html"}},[t._v("multi-vehicle simulation")]),t._v(".")],1),o("p",[o("strong",[t._v("Supported Vehicles:")]),t._v(" Quad")])])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/simulation/airsim.html"}},[t._v("AirSim")])],1),t._v(" "),o("td",[o("p",[t._v("A cross platform simulator that provides physically and visually realistic simulations. This simulator is resource intensive, and requires a very significantly more powerful computer than the other simulators described here.")]),o("p",[o("strong",[t._v("Supported Vehicles:")]),t._v(" Iris (MultiRotor model and a configuration for PX4 QuadRotor in the X configuration).")])])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/simulation/simulation-in-hardware.html"}},[t._v("Simulation-In-Hardware")]),t._v(" (SIH)")],1),t._v(" "),o("td",[o("p",[t._v("An alternative to HITL that offers a hard real-time simulation directly on the hardware autopilot. This simulator is implemented in C++ as a PX4 module directly in the Firmware "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/sih",target:"_blank",rel:"noopener noreferrer"}},[t._v("code"),o("OutboundLink")],1),t._v(". ")]),o("p",[o("strong",[t._v("Supported Vehicles:")]),t._v(" Plane, Quad")])])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/simulation/ignition_gazebo.html"}},[t._v("Ignition Gazebo")])],1),t._v(" "),o("td",[o("p",[t._v("Ignition Gazebo is derived from the popular robotics simulator "),o("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo")]),t._v(", featuring more advanced rendering, physics and sensor models.")],1),o("p",[o("strong",[t._v("Supported Vehicles:")]),t._v(" Quad")])])])])]),t._v(" "),o("p",[t._v("Instructions for how to setup and use the simulators are in the topics linked above.")]),t._v(" "),o("hr"),t._v(" "),o("p",[t._v('The remainder of this topic is a "somewhat generic" description of how the simulation infrastructure works.\nIt is not required to '),o("em",[t._v("use")]),t._v(" the simulators.")]),t._v(" "),o("h2",{attrs:{id:"simulator-mavlink-api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simulator-mavlink-api"}},[t._v("#")]),t._v(" Simulator MAVLink API")]),t._v(" "),o("p",[t._v("All simulators communicate with PX4 using the Simulator MAVLink API.\nThis API defines a set of MAVLink messages that supply sensor data from the simulated world to PX4 and return motor and actuator values from the flight code that will be applied to the simulated vehicle.\nThe image below shows the message flow.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1305),alt:"Simulator MAVLink API"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("A SITL build of PX4 uses "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/simulator/simulator_mavlink.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("simulator_mavlink.cpp"),o("OutboundLink")],1),t._v(" to handle these messages while a hardware build in HIL mode uses "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.cpp"),o("OutboundLink")],1),t._v(".\nSensor data from the simulator is written to PX4 uORB topics.\nAll motors / actuators are blocked, but internal software is fully operational.")])]),t._v(" "),o("p",[t._v("The messages are described below (see links for specific detail).")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Message")]),t._v(" "),o("th",[t._v("Direction")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_MODE_FLAG_HIL_ENABLED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_MODE:MAV_MODE_FLAG_HIL_ENABLED"),o("OutboundLink")],1)]),t._v(" "),o("td",[t._v("NA")]),t._v(" "),o("td",[t._v("Mode flag when using simulation. All motors/actuators are blocked, but internal software is fully operational.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_ACTUATOR_CONTROLS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_ACTUATOR_CONTROLS"),o("OutboundLink")],1)]),t._v(" "),o("td",[t._v("PX4 to Sim")]),t._v(" "),o("td",[t._v("PX4 control outputs (to motors, actuators).")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_SENSOR"),o("OutboundLink")],1)]),t._v(" "),o("td",[t._v("Sim to PX4")]),t._v(" "),o("td",[t._v("Simulated IMU readings in SI units in NED body frame.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_GPS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_GPS"),o("OutboundLink")],1)]),t._v(" "),o("td",[t._v("Sim to PX4")]),t._v(" "),o("td",[t._v("The simulated GPS RAW sensor value.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_OPTICAL_FLOW",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_OPTICAL_FLOW"),o("OutboundLink")],1)]),t._v(" "),o("td",[t._v("Sim to PX4")]),t._v(" "),o("td",[t._v("Simulated optical flow from a flow sensor (e.g. PX4FLOW or optical mouse sensor)")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_STATE_QUATERNION",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_STATE_QUATERNION"),o("OutboundLink")],1)]),t._v(" "),o("td",[t._v("Sim to PX4")]),t._v(" "),o("td",[t._v('Contains the actual "simulated" vehicle position, attitude, speed etc. This can be logged and compared to PX4\'s estimates for analysis and debugging (for example, checking how well an estimator works for noisy (simulated) sensor inputs).')])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_RC_INPUTS_RAW",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_RC_INPUTS_RAW"),o("OutboundLink")],1)]),t._v(" "),o("td",[t._v("Sim to PX4")]),t._v(" "),o("td",[t._v("The RAW values of the RC channels received.")])])])]),t._v(" "),o("h2",{attrs:{id:"default-px4-mavlink-udp-ports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#default-px4-mavlink-udp-ports"}},[t._v("#")]),t._v(" Default PX4 MAVLink UDP Ports")]),t._v(" "),o("p",[t._v("By default, PX4 uses commonly established UDP ports for MAVLink communication with ground control stations (e.g. "),o("em",[t._v("QGroundControl")]),t._v("), Offboard APIs (e.g. MAVSDK, MAVROS) and simulator APIs (e.g. Gazebo).\nThese ports are:")]),t._v(" "),o("ul",[o("li",[t._v("PX4's remote UDP Port "),o("strong",[t._v("14550")]),t._v(" is used for communication with ground control stations.\nGCS are expected to listen for connections on this port.\n"),o("em",[t._v("QGroundControl")]),t._v(" listens to this port by default.")]),t._v(" "),o("li",[t._v("PX4's remote UDP Port "),o("strong",[t._v("14540")]),t._v(" is used for communication with offboard APIs.\nOffboard APIs are expected to listen for connections on this port."),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Multi-vehicle simulations use a separate remote port for each instance, allocated sequentially from "),o("code",[t._v("14540")]),t._v(" to "),o("code",[t._v("14549")]),t._v("\n(additional instances all use port "),o("code",[t._v("14549")]),t._v(").")])])]),t._v(" "),o("li",[t._v("The simulator's local TCP Port, "),o("strong",[t._v("4560")]),t._v(", is used for communication with PX4.\nThe simulator listens to this port, and PX4 initiates a TCP connection to it.")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The ports for the GCS, offboard APIs and simulator are specified by startup scripts.\nSee "),o("RouterLink",{attrs:{to:"/en/concept/system_startup.html"}},[t._v("System Startup")]),t._v(" to learn more.")],1)]),t._v(" "),o("h2",{attrs:{id:"sitl-simulation-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sitl-simulation-environment"}},[t._v("#")]),t._v(" SITL Simulation Environment")]),t._v(" "),o("p",[t._v("The diagram below shows a typical SITL simulation environment for any of the supported simulators.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1306),alt:"PX4 SITL overview"}})]),t._v(" "),o("p",[t._v("The different parts of the system connect via UDP, and can be run on either the same computer or another computer on the same network.")]),t._v(" "),o("ul",[o("li",[t._v("PX4 uses a simulation-specific module to connect to the simulator's local TCP port 4560.\nSimulators then exchange information with PX4 using the "),o("a",{attrs:{href:"#simulator-mavlink-api"}},[t._v("Simulator MAVLink API")]),t._v(" described above.\nPX4 on SITL and the simulator can run on either the same computer or different computers on the same network."),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Simulators can also use the "),o("em",[t._v("microRTPS bridge")]),t._v(" ("),o("RouterLink",{attrs:{to:"/en/middleware/micrortps.html"}},[t._v("PX4-FastRTPS Bridge")]),t._v(") to directly interact with PX4 (i.e. via "),o("RouterLink",{attrs:{to:"/en/middleware/uorb.html"}},[t._v("UORB topics")]),t._v(" rather than MAVLink).\nThis approach "),o("em",[t._v("may")]),t._v(" used by "),o("RouterLink",{attrs:{to:"/en/simulation/multi_vehicle_simulation_gazebo.html#build-and-test-rtps-dds"}},[t._v("Gazebo multi-vehicle simulation")]),t._v(".")],1)])]),t._v(" "),o("li",[t._v("PX4 uses the normal MAVLink module to connect to ground stations and external developer APIs like MAVSDK or ROS\n"),o("ul",[o("li",[t._v("Ground stations listen to PX4's remote UDP port: "),o("code",[t._v("14550")])]),t._v(" "),o("li",[t._v("External developer APIs listen to PX4's remote UDP port: "),o("code",[t._v("14540")]),t._v(".\nFor multi-vehicle simulations, PX4 sequentially allocates a separate remote port for each instance from "),o("code",[t._v("14540")]),t._v(" to "),o("code",[t._v("14549")]),t._v(" (additional instances all use port "),o("code",[t._v("14549")]),t._v(").")])])]),t._v(" "),o("li",[t._v("PX4 defines a number of "),o("em",[t._v("local")]),t._v(" UDP ports ("),o("code",[t._v("14580")]),t._v(","),o("code",[t._v("18570")]),t._v('), which are sometimes used when networking with PX4 running in a container or virtual machine.\nThese are not recommended for "general" use and may change in future.')]),t._v(" "),o("li",[t._v("A serial connection may be used to connect "),o("RouterLink",{attrs:{to:"/en/config/joystick.html"}},[t._v("Joystick/Gamepad")]),t._v(" hardware via "),o("em",[t._v("QGroundControl")]),t._v(".")],1)]),t._v(" "),o("p",[t._v("If you use the normal build system SITL "),o("code",[t._v("make")]),t._v(" configuration targets (see next section) then both SITL and the Simulator will be launched on the same computer and the ports above will automatically be configured.\nYou can configure additional MAVLink UDP connections and otherwise modify the simulation environment in the build configuration and initialisation files.")]),t._v(" "),o("h3",{attrs:{id:"starting-building-sitl-simulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#starting-building-sitl-simulation"}},[t._v("#")]),t._v(" Starting/Building SITL Simulation")]),t._v(" "),o("p",[t._v("The build system makes it very easy to build and start PX4 on SITL, launch a simulator, and connect them.\nThe syntax (simplified) looks like this:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_sitl simulator[_vehicle-model]\n")])])]),o("p",[t._v("where "),o("code",[t._v("simulator")]),t._v(" is "),o("code",[t._v("gazebo")]),t._v(", "),o("code",[t._v("jmavsim")]),t._v(" or some other simulator, and vehicle-model is a particular vehicle type supported by that simulator ("),o("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" only supports multicopters, while "),o("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo")]),t._v(" supports many different types).")],1),t._v(" "),o("p",[t._v("A number of examples are shown below, and there are many more in the individual pages for each of the simulators:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Gazebo with plane")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo_plane\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Gazebo with iris and optical flow")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo_iris_opt_flow\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start JMavSim with iris (default vehicle model)")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Start PX4 with no simulator (i.e. to use your own "custom" simulator)')]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl none_iris\n")])])]),o("p",[t._v("The simulation can be further configured via environment variables:")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("PX4_ESTIMATOR")]),t._v(": This variable configures which estimator to use.\nPossible options are: "),o("code",[t._v("ekf2")]),t._v(" (default), "),o("code",[t._v("lpe")]),t._v(" (deprecated).\nIt can be set via "),o("code",[t._v("export PX4_ESTIMATOR=lpe")]),t._v(" before running the simulation.")])]),t._v(" "),o("p",[t._v("The syntax described here is simplified, and there are many other options that you can configure via "),o("em",[t._v("make")]),t._v(" - for example, to set that you wish to connect to an IDE or debugger.\nFor more information see: "),o("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#px4-make-build-targets"}},[t._v("Building the Code > PX4 Make Build Targets")]),t._v(".")],1),t._v(" "),o("p",[o("a",{attrs:{id:"simulation_speed"}})]),t._v(" "),o("h3",{attrs:{id:"run-simulation-faster-than-realtime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-simulation-faster-than-realtime"}},[t._v("#")]),t._v(" Run Simulation Faster than Realtime")]),t._v(" "),o("p",[t._v("SITL can be run faster or slower than realtime when using jMAVSim or Gazebo.")]),t._v(" "),o("p",[t._v("The speed factor is set using the environment variable "),o("code",[t._v("PX4_SIM_SPEED_FACTOR")]),t._v(".\nFor example, to run the jMAVSim simulation at 2 times the real time speed:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("PX4_SIM_SPEED_FACTOR=2 make px4_sitl jmavsim\n")])])]),o("p",[t._v("To run at half real-time:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("PX4_SIM_SPEED_FACTOR=0.5 make px4_sitl jmavsim\n")])])]),o("p",[t._v("You can apply the factor to all SITL runs in the current session using "),o("code",[t._v("EXPORT")]),t._v(":")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("export PX4_SIM_SPEED_FACTOR=2\nmake px4_sitl jmavsim\n")])])]),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v('At some point IO or CPU will limit the speed that is possible on your machine and it will be slowed down "automatically".\nPowerful desktop machines can usually run the simulation at around 6-10x, for notebooks the achieved rates can be around 3-4x.')])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("To avoid PX4 detecting data link timeouts, increase the value of param "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_DL_LOSS_T"}},[t._v("COM_DL_LOSS_T")]),t._v(" proportional to the simulation rate.\nFor example, if "),o("code",[t._v("COM_DL_LOSS_T")]),t._v(" is 10 in realtime, at 10x simulation rate increase to 100.")],1)]),t._v(" "),o("h3",{attrs:{id:"lockstep-simulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lockstep-simulation"}},[t._v("#")]),t._v(" Lockstep Simulation")]),t._v(" "),o("p",[t._v("PX4 SITL and the simulators (jMAVSim or Gazebo) have been set up to run in "),o("em",[t._v("lockstep")]),t._v(".\nWhat this means is that PX4 and the simulator wait on each other for sensor and actuator messages, rather than running at their own speeds.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Lockstep makes it possible to "),o("a",{attrs:{href:"#simulation_speed"}},[t._v("run the simulation faster or slower than realtime")]),t._v(", and also to pause it in order to step through code.")])]),t._v(" "),o("p",[t._v("The sequence of steps for lockstep are:")]),t._v(" "),o("ol",[o("li",[t._v("The simulation sends a sensor message "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_SENSOR"),o("OutboundLink")],1),t._v(" including a timestamp "),o("code",[t._v("time_usec")]),t._v(" to update the sensor state and time of PX4.")]),t._v(" "),o("li",[t._v("PX4 receives this and does one iteration of state estimation, controls, etc. and eventually sends an actuator message "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_ACTUATOR_CONTROLS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_ACTUATOR_CONTROLS"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v("The simulation waits until it receives the actuator/motor message, then simulates the physics and calculates the next sensor message to send to PX4 again.")])]),t._v(" "),o("p",[t._v('The system starts with a "freewheeling" period where the simulation sends sensor messages including time and therefore runs PX4 until it has initialized and responds with an actuator message.')]),t._v(" "),o("h4",{attrs:{id:"disable-lockstep-simulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disable-lockstep-simulation"}},[t._v("#")]),t._v(" Disable Lockstep Simulation")]),t._v(" "),o("p",[t._v("The lockstep simulation can be disabled if, for example, SITL is to be used with a simulator that does not support this feature.\nIn this case the simulator and PX4 use the host system time and do not wait on each other.")]),t._v(" "),o("p",[t._v("To disable lockstep in PX4, run "),o("code",[t._v("px4_sitl_default boardconfig")]),t._v(" and set the "),o("code",[t._v("BOARD_NOLOCKSTEP")]),t._v(' "Force disable lockstep" symbol which is located under toolchain.')]),t._v(" "),o("p",[t._v("To disable lockstep in Gazebo, edit "),o("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/3062d287c322fabf1b41b8e33518eb449d4ac6ed/models/plane/plane.sdf#L449",target:"_blank",rel:"noopener noreferrer"}},[t._v("the model SDF file"),o("OutboundLink")],1),t._v(" and set "),o("code",[t._v("<enable_lockstep>false</enable_lockstep>")]),t._v(" (or for Iris edit the "),o("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/3062d287c322fabf1b41b8e33518eb449d4ac6ed/models/rotors_description/urdf/iris_base.xacro#L22",target:"_blank",rel:"noopener noreferrer"}},[t._v("xacro file"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("To disable lockstep in jMAVSim, remove "),o("code",[t._v("-l")]),t._v(" in "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/77097b6adc70afbe7e5d8ff9797ed3413e96dbf6/Tools/sitl_run.sh#L75",target:"_blank",rel:"noopener noreferrer"}},[t._v("jmavsim_run.sh"),o("OutboundLink")],1),t._v(", or make sure otherwise that the java binary is started without the "),o("code",[t._v("-lockstep")]),t._v(" flag.")]),t._v(" "),o("h3",{attrs:{id:"startup-scripts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#startup-scripts"}},[t._v("#")]),t._v(" Startup Scripts")]),t._v(" "),o("p",[t._v("Scripts are used to control which parameter settings to use or which modules to start.\nThey are located in the "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d-posix",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d-posix"),o("OutboundLink")],1),t._v(" directory, the "),o("code",[t._v("rcS")]),t._v(" file is the main entry point.\nSee "),o("RouterLink",{attrs:{to:"/en/concept/system_startup.html"}},[t._v("System Startup")]),t._v(" for more information.")],1),t._v(" "),o("h3",{attrs:{id:"simulating-failsafes-and-sensor-hardware-failure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simulating-failsafes-and-sensor-hardware-failure"}},[t._v("#")]),t._v(" Simulating Failsafes and Sensor/Hardware Failure")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/simulation/failsafes.html"}},[t._v("Simulate Failsafes")]),t._v(" explains how to trigger safety failsafes like GPS failure and battery drain.")],1),t._v(" "),o("h2",{attrs:{id:"hitl-simulation-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hitl-simulation-environment"}},[t._v("#")]),t._v(" HITL Simulation Environment")]),t._v(" "),o("p",[t._v("With Hardware-in-the-Loop (HITL) simulation the normal PX4 firmware is run on real hardware.\nThe HITL Simulation Environment in documented in: "),o("RouterLink",{attrs:{to:"/en/simulation/hitl.html"}},[t._v("HITL Simulation")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"joystick-gamepad-integration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#joystick-gamepad-integration"}},[t._v("#")]),t._v(" Joystick/Gamepad Integration")]),t._v(" "),o("p",[o("em",[t._v("QGroundControl")]),t._v(" desktop versions can connect to a USB Joystick/Gamepad and send its movement commands and button presses to PX4 over MAVLink.\nThis works on both SITL and HITL simulations, and allows you to directly control the simulated vehicle.\nIf you don't have a joystick you can alternatively control the vehicle using QGroundControl's onscreen virtual thumbsticks.")]),t._v(" "),o("p",[t._v("For setup information see the "),o("em",[t._v("QGroundControl User Guide")]),t._v(":")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joystick Setup"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/VirtualJoystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Virtual Joystick"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"camera-simulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#camera-simulation"}},[t._v("#")]),t._v(" Camera Simulation")]),t._v(" "),o("p",[t._v("PX4 supports capture of both still images and video from within the "),o("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo")]),t._v(" simulated environment.\nThis can be enabled/set up as described in "),o("RouterLink",{attrs:{to:"/en/simulation/gazebo.html#video"}},[t._v("Gazebo > Video Streaming")]),t._v(".")],1),t._v(" "),o("p",[t._v("The simulated camera is a gazebo plugin that implements the "),o("a",{attrs:{href:"https://mavlink.io/en/protocol/camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Camera Protocol"),o("OutboundLink")],1),t._v(".\nPX4 connects/integrates with this camera in "),o("em",[t._v("exactly the same way")]),t._v(" as it would with any other MAVLink camera:")]),t._v(" "),o("ol",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_INTERFACE"}},[t._v("TRIG_INTERFACE")]),t._v(" must be set to "),o("code",[t._v("3")]),t._v(" to configure the camera trigger driver for use with a MAVLink camera")],1),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("In this mode the driver just sends a "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAMERA_TRIGGER"),o("OutboundLink")],1),t._v(" message whenever an image capture is requested.\nFor more information see "),o("RouterLink",{attrs:{to:"/en/peripherals/camera.html"}},[t._v("Camera")]),t._v(".")],1)])]),t._v(" "),o("li",[o("p",[t._v("PX4 must forward all camera commands between the GCS and the (simulator) MAVLink Camera.\nYou can do this by starting "),o("RouterLink",{attrs:{to:"/en/modules/modules_communication.html#mavlink"}},[t._v("MAVLink")]),t._v(" with the "),o("code",[t._v("-f")]),t._v(" flag as shown, specifying the UDP ports for the new connection.")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("mavlink start -u 14558 -o 14530 -r 4000 -f -m camera\n")])])]),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("More than just the camera MAVLink messages will be forwarded, but the camera will ignore those that it doesn't consider relevant.")])])])]),t._v(" "),o("p",[t._v("The same approach can be used by other simulators to implement camera support.")]),t._v(" "),o("h2",{attrs:{id:"running-simulation-on-a-remote-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-simulation-on-a-remote-server"}},[t._v("#")]),t._v(" Running Simulation on a Remote Server")]),t._v(" "),o("p",[t._v("It is possible to run the simulator on one computer, and access it from another computer on the same network (or on another network with appropriate routing).\nThis might be useful, for example, if you want to test a drone application running on real companion computer hardware running against a simulated vehicle.")]),t._v(" "),o("p",[t._v('This does not work "out of the box" because PX4 does not route packets to external interfaces by default (in order to avoid spamming the network and different simulations interfering with each other).\nInstead it routes traffic internally - to "localhost".')]),t._v(" "),o("p",[t._v("There are a number of ways to make the UDP packets available on external interfaces, as outlined below.")]),t._v(" "),o("h3",{attrs:{id:"use-mavlink-router"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-mavlink-router"}},[t._v("#")]),t._v(" Use MAVLink Router")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://github.com/mavlink-router/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink-router"),o("OutboundLink")],1),t._v(" can be used to route packets from localhost to an external interface.")]),t._v(" "),o("p",[t._v("To route packets between SITL running on one computer (sending MAVLink traffic to localhost on UDP port 14550), and QGC running on another computer (e.g. at address "),o("code",[t._v("10.73.41.30")]),t._v(") you could:")]),t._v(" "),o("ul",[o("li",[t._v("Start "),o("em",[t._v("mavlink-router")]),t._v(" with the following command:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("mavlink-routerd -e 10.73.41.30:14550 127.0.0.1:14550\n")])])])]),t._v(" "),o("li",[t._v("Use a "),o("em",[t._v("mavlink-router")]),t._v(" conf file."),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("[UdpEndpoint QGC]\nMode = Normal\nAddress = 10.73.41.30\nPort = 14550\n\n[UdpEndpoint SIM]\nMode = Eavesdropping\nAddress = 127.0.0.1\nPort = 14550\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("More information about "),o("em",[t._v("mavlink-router")]),t._v(" configuration can be found "),o("a",{attrs:{href:"https://github.com/mavlink-router/mavlink-router#running",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h3",{attrs:{id:"enable-udp-broadcasting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-udp-broadcasting"}},[t._v("#")]),t._v(" Enable UDP Broadcasting")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/en/modules/modules_communication.html#mavlink_usage"}},[t._v("mavlink module")]),t._v(" routes to "),o("em",[t._v("localhost")]),t._v(" by default, but you can enable UDP broadcasting of heartbeats using its "),o("code",[t._v("-p")]),t._v(" option.\nAny remote computer on the network can then connect to the simulator by listening to the appropriate port (i.e. 14550 for "),o("em",[t._v("QGroundControl")]),t._v(").")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("UDP broadcasting provides a simple way to set up the connection when there is only one simulation running on the network.\nDo not use this approach if there are multiple simulations running on the network (you might instead "),o("a",{attrs:{href:"#enable-streaming-to-specific-address"}},[t._v("publish to a specific address")]),t._v(").")])]),t._v(" "),o("p",[t._v("This should be done in an appropriate configuration file where "),o("code",[t._v("mavlink start")]),t._v(" is called.\nFor example: "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("/ROMFS/px4fmu_common/init.d-posix/rcS"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h3",{attrs:{id:"enable-streaming-to-specific-address"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-streaming-to-specific-address"}},[t._v("#")]),t._v(" Enable Streaming to Specific Address")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/en/modules/modules_communication.html#mavlink_usage"}},[t._v("mavlink module")]),t._v(" routes to "),o("em",[t._v("localhost")]),t._v(" by default, but you can specify an external IP address to stream to using its "),o("code",[t._v("-t")]),t._v(" option.\nThe specified remote computer can then connect to the simulator by listening to the appropriate port (i.e. 14550 for "),o("em",[t._v("QGroundControl")]),t._v(").")],1),t._v(" "),o("p",[t._v("This should be done in various configuration files where "),o("code",[t._v("mavlink start")]),t._v(" is called.\nFor example: "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("/ROMFS/px4fmu_common/init.d-posix/rcS"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h3",{attrs:{id:"ssh-tunneling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ssh-tunneling"}},[t._v("#")]),t._v(" SSH Tunneling")]),t._v(" "),o("p",[t._v("SSH tunneling is a flexible option because the simulation computer and the system using it need not be on the same network.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("You might similarly use VPN to provide a tunnel to an external interface (on the same network or another network).")])]),t._v(" "),o("p",[t._v("One way to create the tunnel is to use SSH tunneling options.\nThe tunnel itself can be created by running the following command on "),o("em",[t._v("localhost")]),t._v(", where "),o("code",[t._v("remote.local")]),t._v(" is the name of a remote computer:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("ssh -C -fR 14551:localhost:14551 remote.local\n")])])]),o("p",[t._v("The UDP packets need to be translated to TCP packets so they can be routed over SSH.\nThe "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Netcat",target:"_blank",rel:"noopener noreferrer"}},[t._v("netcat"),o("OutboundLink")],1),t._v(" utility can be used on both sides of the tunnel - first to convert packets from UDP to TCP, and then back to UDP at the other end.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("QGC must be running before executing "),o("em",[t._v("netcat")]),t._v(".")])]),t._v(" "),o("p",[t._v("On the "),o("em",[t._v("QGroundControl")]),t._v(" computer, UDP packet translation may be implemented by running following commands:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("mkfifo /tmp/tcp2udp\nnetcat -lvp 14551 < /tmp/tcp2udp | netcat -u localhost 14550 > /tmp/tcp2udp\n")])])]),o("p",[t._v("On the simulator side of the SSH tunnel, the command is:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("mkfifo /tmp/udp2tcp\nnetcat -lvup 14550 < /tmp/udp2tcp | netcat localhost 14551 > /tmp/udp2tcp\n")])])]),o("p",[t._v("The port number "),o("code",[t._v("14550")]),t._v(" is valid for connecting to QGroundControl or another GCS, but should be adjusted for other endpoints (e.g. developer APIs etc.).")]),t._v(" "),o("p",[t._v("The tunnel may in theory run indefinitely, but "),o("em",[t._v("netcat")]),t._v(" connections may need to be restarted if there is a problem.")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://raw.githubusercontent.com/ThunderFly-aerospace/sitl_gazebo/autogyro-sitl/scripts/QGC_remote_connect.bash",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC_remote_connect.bash"),o("OutboundLink")],1),t._v(" script can be run on the QGC computer to automatically setup/run the above instructions.\nThe simulation must already be running on the remote server, and you must be able to SSH into that server.")])])}),[],!1,null,null,null);e.default=n.exports}}]);