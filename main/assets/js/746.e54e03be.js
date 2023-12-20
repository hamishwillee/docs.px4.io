(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{1531:function(e,t,a){e.exports=a.p+"assets/img/SIH_diagram.4e53f869.png"},2482:function(e,t,a){"use strict";a.r(t);var i=a(19),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"simulation-in-hardware-sih"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#simulation-in-hardware-sih"}},[e._v("#")]),e._v(" Simulation-In-Hardware (SIH)")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("This simulator is "),i("RouterLink",{attrs:{to:"/en/simulation/community_supported_simulators.html"}},[e._v("community supported and maintained")]),e._v(".\nIt may or may not work with current versions of PX4 (known to work in PX4 v1.14).")],1),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("Toolchain Installation")]),e._v(" for information about the environments and tools supported by the core development team.")],1)]),e._v(" "),i("p",[e._v("Simulation-In-Hardware (SIH) is an alternative to "),i("RouterLink",{attrs:{to:"/en/simulation/hitl.html"}},[e._v("Hardware In The Loop simulation (HITL)")]),e._v(" for quadrotors, fixed-wing vehicles (airplane), and VTOL tailsitters.")],1),e._v(" "),i("p",[e._v("SIH can be used by new PX4 users to get familiar with PX4 and the different modes and features, and of course to learn to fly a vehicle using an RC controller in simulation, which is not possible using SITL.")]),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("With SIH the whole simulation is running on embedded hardware: the controller, the state estimator, and the simulator.\nThe Desktop computer is only used to display the virtual vehicle.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(1531),alt:"Simulator MAVLink API"}})]),e._v(" "),i("h3",{attrs:{id:"compatibility"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),i("ul",[i("li",[e._v("SIH is compatible with all Pixhawk-series boards except those based on FMUv2.")]),e._v(" "),i("li",[e._v("SIH for quadrotor is supported from PX4 v1.9.")]),e._v(" "),i("li",[e._v("SIH for fixed-wing (airplane) and VTOL tailsitter are supported from PX4 v1.13.")]),e._v(" "),i("li",[e._v("SIH as SITL (without hardware) from PX4 v1.14.")])]),e._v(" "),i("h3",{attrs:{id:"benefits"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#benefits"}},[e._v("#")]),e._v(" Benefits")]),e._v(" "),i("p",[e._v("SIH provides several benefits over HITL:")]),e._v(" "),i("ul",[i("li",[e._v("It ensures synchronous timing by avoiding the bidirectional connection to the computer.\nAs a result the user does not need such a powerful desktop computer.")]),e._v(" "),i("li",[e._v("The whole simulation remains inside the PX4 environment.\nDevelopers who are familiar with PX4 can more easily incorporate their own mathematical model into the simulator.\nThey can, for instance, modify the aerodynamic model, or noise level of the sensors, or even add a sensor to be simulated.")]),e._v(" "),i("li",[e._v("The physical parameters representing the vehicle (such as mass, inertia, and maximum thrust force) can easily be modified from the "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH parameters")]),e._v(".")],1)]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("To run the SIH, you will need a:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/flight_controller/"}},[e._v("Flight controller")]),e._v(", such as a Pixhawk-series board")],1),e._v(" "),i("li",[e._v("Development computer for displaying the virtual vehicle.")]),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#manual-control"}},[e._v("Manual controller")]),e._v(": either a "),i("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#radio-control-rc"}},[e._v("radio control system")]),e._v(" or a "),i("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#gcs-joystick-controller"}},[e._v("joystick")]),e._v(".")],1)]),e._v(" "),i("p",[e._v('From PX4 v1.14 you can run SIH "as SITL", in which case a flight controller is not required.')]),e._v(" "),i("h2",{attrs:{id:"setting-up-sih"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-sih"}},[e._v("#")]),e._v(" Setting up SIH")]),e._v(" "),i("p",[e._v("To set up SIH")]),e._v(" "),i("ol",[i("li",[e._v("Connect the flight controller to the desktop computer with a USB cable")]),e._v(" "),i("li",[e._v("Open QGroundControl and wait for the flight controller too boot and connect.")]),e._v(" "),i("li",[e._v("Open "),i("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[e._v("Vehicle Setup > Airframe")]),e._v(" then select the desired frame:\n"),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter_simulation_sih_quadcopter_x"}},[e._v("SIH Quadcopter X")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#plane_simulation_sih_plane_aert"}},[e._v("SIH plane AERT")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#vtol_simulation_sih_tailsitter_duo"}},[e._v("SIH Tailsitter Duo")])],1)])],1)]),e._v(" "),i("p",[e._v("The autopilot will then reboot.\nOnce restarted the "),i("code",[e._v("sih")]),e._v(" module is started, and the vehicle should be displayed on the ground control station map.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("The airplane needs to takeoff in manual mode at full throttle.\nAlso, if the airplane crashes the state estimator might lose its fix.")])]),e._v(" "),i("h2",{attrs:{id:"setting-up-the-display"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-display"}},[e._v("#")]),e._v(" Setting up the Display")]),e._v(" "),i("p",[e._v("To display the simulated vehicle:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Close "),i("em",[e._v("QGroundControl")]),e._v(" (if open).")])]),e._v(" "),i("li",[i("p",[e._v("Unplug and replug the flight controller (allow a few seconds for it to boot).")])]),e._v(" "),i("li",[i("p",[e._v("Start jMAVSim by calling the script "),i("strong",[e._v("jmavsim_run.sh")]),e._v(" from a terminal:")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[e._v("./Tools/simulation/jmavsim/jmavsim_run.sh -q -d /dev/ttyACM0 -b "),i("span",{pre:!0,attrs:{class:"token number"}},[e._v("2000000")]),e._v(" -o\n")])])]),i("p",[e._v("where the flags are:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("-q")]),e._v(" to allow the communication to "),i("em",[e._v("QGroundControl")]),e._v(" (optional).")]),e._v(" "),i("li",[i("code",[e._v("-d")]),e._v(" to start the serial device "),i("code",[e._v("/dev/ttyACM0")]),e._v(" on Linux.\nOn macOS this would be "),i("code",[e._v("/dev/tty.usbmodem1")]),e._v(".")]),e._v(" "),i("li",[i("code",[e._v("-b")]),e._v(" to set the serial baud rate to "),i("code",[e._v("2000000")]),e._v(".")]),e._v(" "),i("li",[i("code",[e._v("-o")]),e._v(" to start jMAVSim in "),i("em",[e._v("display Only")]),e._v(" mode (i.e. the physical engine is turned off and jMAVSim only displays the trajectory given by the SIH in real-time).")]),e._v(" "),i("li",[e._v("add a flag "),i("code",[e._v("-a")]),e._v(" to display an aircraft or '-t' to display a tailsitter.\nIf this flag is not present a quadrotor will be displayed by default.")])])]),e._v(" "),i("li",[i("p",[e._v("After few seconds, "),i("em",[e._v("QGroundControl")]),e._v(" can be opened again.")])])]),e._v(" "),i("p",[e._v("At this point, the system can be armed and flown.\nThe vehicle can be observed moving in jMAVSim, and on the QGC "),i("em",[e._v("Fly")]),e._v(" view.")]),e._v(" "),i("h2",{attrs:{id:"running-the-sih-as-sitl-without-hardware"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#running-the-sih-as-sitl-without-hardware"}},[e._v("#")]),e._v(" Running the SIH as SITL (without hardware)")]),e._v(" "),i("p",[e._v("SIH can be run as SITL (Software-In-The-Loop) from v1.14.\nWhat this means is that the simulation code is executed on the laptop/computer, similar to Gazebo or jMAVSim.\nIn this case you don't need the flight controller hardware.")]),e._v(" "),i("p",[e._v("To run SIH as SITL:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Install the "),i("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("PX4 Development toolchain")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[e._v("Run the appropriate make command for each vehicle type (at the root of the PX4-Autopilot repository):")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("quadrotor:")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl sihsim_quadx\n")])])])]),e._v(" "),i("li",[i("p",[e._v("Fixed-wing (plane):")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl sihsim_airplane\n")])])])]),e._v(" "),i("li",[i("p",[e._v("XVert VTOL tailsitter:")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl sihsim_xvert\n")])])])])])])]),e._v(" "),i("p",[e._v("SITL allows the simulation to be run faster than real time.\nTo run the airplane simulation 10 times faster than real time, run the commandL")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SIM_SPEED_FACTOR")]),i("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),i("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),i("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl sihsim_airplane\n")])])]),i("h2",{attrs:{id:"dynamic-model"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-model"}},[e._v("#")]),e._v(" Dynamic Model")]),e._v(" "),i("p",[e._v("The dynamic models for the various vehicles are:")]),e._v(" "),i("ul",[i("li",[e._v("Quadrotor: "),i("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/simulation/SIH_dynamic_model.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("pdf report"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("li",[e._v('Fixed-wing: Inspired by the PhD thesis: "Dynamics modeling of agile fixed-wing unmanned aerial vehicles." Khan, Waqas, supervised by Nahon, Meyer, McGill University, PhD thesis, 2016.')]),e._v(" "),i("li",[e._v('Tailsitter: Inspired by the master\'s thesis: "Modeling and control of a flying wing tailsitter unmanned aerial vehicle." Chiappinelli, Romain, supervised by Nahon, Meyer, McGill University, Masters thesis, 2018.')])]),e._v(" "),i("h2",{attrs:{id:"video"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[e._v("#")]),e._v(" Video")]),e._v(" "),i("p"),i("div",{staticClass:"embed-responsive embed-responsive-16by9"},[i("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/PzIpSCRD8Jo",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),i("p"),e._v(" "),i("h2",{attrs:{id:"credits"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),i("p",[e._v("SIH was originally developed by Coriolis g Corporation.\nThe airplane model and tailsitter models were added by Altitude R&D inc.\nBoth are Canadian companies:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"http://ww7.vogi-vtol.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coriolis g"),i("OutboundLink")],1),e._v(" develops a new type of Vertical Takeoff and Landing (VTOL) vehicles based on passive coupling systems;")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.altitude-rd.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Altitude R&D"),i("OutboundLink")],1),e._v(" is specialized in dynamics, control, and real-time simulation.")])]),e._v(" "),i("p",[e._v("The simulator is released for free under BSD license.")])])}),[],!1,null,null,null);t.default=s.exports}}]);