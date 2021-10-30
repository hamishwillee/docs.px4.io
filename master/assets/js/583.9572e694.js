(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{1332:function(e,t,a){e.exports=a.p+"assets/img/SIH_diagram.4e53f869.png"},2045:function(e,t,a){"use strict";a.r(t);var i=a(19),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"simulation-in-hardware-sih"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#simulation-in-hardware-sih"}},[e._v("#")]),e._v(" Simulation-In-Hardware (SIH)")]),e._v(" "),i("p",[e._v("Simulation-In-Hardware (SIH) is an alternative to "),i("RouterLink",{attrs:{to:"/en/simulation/hitl.html"}},[e._v("Hardware In The Loop simulation (HITL)")]),e._v(' for a quadrotor or a fixed-wing vehicle ("airplane").\nIn this setup, everything is running on embedded hardware - the controller, the state estimator, and the simulator.\nThe Desktop computer is only used to display the virtual vehicle.')],1),e._v(" "),i("p",[i("img",{attrs:{src:a(1332),alt:"Simulator MAVLink API"}})]),e._v(" "),i("p",[e._v("The SIH provides two benefits over the HITL:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("It ensures synchronous timing by avoiding the bidirectional connection to the computer.\nAs a result the user does not need such a powerful desktop computer.")])]),e._v(" "),i("li",[i("p",[e._v("The whole simulation remains inside the PX4 environment.\nDevelopers who are familiar with PX4 can more easily incorporate their own mathematical model into the simulator.\nThey can, for instance, modify the aerodynamic model, or noise level of the sensors, or even add a sensor to be simulated.")])])]),e._v(" "),i("p",[e._v("The SIH can be used by new PX4 users to get familiar with PX4 and the different modes and features, and of course to learn to fly a quadrotor or an airplane with the real RC controller.")]),e._v(" "),i("p",[e._v("The quadrotor dynamic model is described in this "),i("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/master/assets/simulation/SIH_dynamic_model.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("pdf report"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("The aerodynamic model for the fixed-wing airplane is inspired from the PhD thesis:")]),e._v(" "),i("blockquote",[i("p",[e._v('"Dynamics modeling of agile fixed-wing unmanned aerial vehicles." Khan, Waqas, supervised by Meyer Nahon, McGill University, PhD thesis, 2016.')])]),e._v(" "),i("p",[e._v("Furthermore, the physical parameters representing the vehicle (such as mass, inertia, and maximum thrust force) can easily be modified from the "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH parameters")]),e._v(".")],1),e._v(" "),i("p"),i("div",{staticClass:"embed-responsive embed-responsive-16by9"},[i("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/PzIpSCRD8Jo",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),i("p"),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("To run the SIH, you will need a "),i("RouterLink",{attrs:{to:"/en/flight_controller/"}},[e._v("flight controller")]),e._v(" (e.g. a Pixhawk-series board).\nyou will also need either a "),i("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[e._v("radio control transmitter and receiver pair")]),e._v(" or a "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("joystick"),i("OutboundLink")],1),e._v(" (a joystick can be used via QGroundControl to emulate a radio control system).")],1),e._v(" "),i("ul",[i("li",[e._v("SIH is compatible with all Pixhawk-series boards except those based on FMUv2.")]),e._v(" "),i("li",[e._v("SIH for quadrotor supported from PX4 v1.9.")]),e._v(" "),i("li",[e._v("SIH for fixed-wing (airplane) is supported in versions after PX v1.12 (currently in the master branch).")])]),e._v(" "),i("h2",{attrs:{id:"setting-up-sih"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-sih"}},[e._v("#")]),e._v(" Setting up SIH")]),e._v(" "),i("p",[e._v("Running the SIH is as easy as selecting an airframe.\nPlug the autopilot to the desktop computer with a USB cable, let it boot, then using a ground control station select the "),i("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#simulation-copter"}},[e._v("SIH Quadcopter X")]),e._v(" or the "),i("code",[e._v("SIH plane AERT")]),e._v(".\nThe autopilot will then reboot.")],1),e._v(" "),i("p",[e._v("When the SIH airframe is selected, the SIH module starts by itself, the vehicle should be displayed on the ground control station map.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("The airplane needs to takeoff in manual mode at full throttle. Also, if the airplane hits the floor the state estimator might lose its fix.")])]),e._v(" "),i("h2",{attrs:{id:"setting-up-the-display"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-display"}},[e._v("#")]),e._v(" Setting up the Display")]),e._v(" "),i("p",[e._v("The simulated vehicle can be displayed in jMAVSim for the following PX4 versions:")]),e._v(" "),i("ul",[i("li",[e._v("Quadrotor from PX4 v1.11.")]),e._v(" "),i("li",[e._v("Fixed-wing from the PX4 master (or the release version after PX4 v1.12).")])]),e._v(" "),i("p",[e._v("To display the simulated vehicle:")]),e._v(" "),i("ol",[i("li",[e._v("Close "),i("em",[e._v("QGroundControl")]),e._v(" (if open).")]),e._v(" "),i("li",[e._v("Unplug and replug the hardware autopilot (allow a few seconds for it to boot).")]),e._v(" "),i("li",[e._v("Start jMAVSim by calling the script "),i("strong",[e._v("jmavsim_run.sh")]),e._v(" from a terminal:"),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("./Tools/jmavsim_run.sh -q -d /dev/ttyACM0 -b 2000000 -o\n")])])]),e._v("where the flags are\n"),i("ul",[i("li",[i("code",[e._v("-q")]),e._v(" to allow the communication to "),i("em",[e._v("QGroundControl")]),e._v(" (optional).")]),e._v(" "),i("li",[i("code",[e._v("-d")]),e._v(" to start the serial device "),i("code",[e._v("/dev/ttyACM0")]),e._v(" on Linux.\nOn macOS this would be "),i("code",[e._v("/dev/tty.usbmodem1")]),e._v(".")]),e._v(" "),i("li",[i("code",[e._v("-b")]),e._v(" to set the serial baud rate to "),i("code",[e._v("2000000")]),e._v(".")]),e._v(" "),i("li",[i("code",[e._v("-o")]),e._v(" to start jMAVSim in "),i("em",[e._v("display Only")]),e._v(" mode (i.e. the physical engine is turned off and jMAVSim only displays the trajectory given by the SIH in real-time).")]),e._v(" "),i("li",[e._v("add a flag "),i("code",[e._v("-a")]),e._v(" to display an aircraft. If this flag is not present a quadrotor will be displayed by default.")])])]),e._v(" "),i("li",[e._v("After few seconds, "),i("em",[e._v("QGroundControl")]),e._v(" can be opened again.")])]),e._v(" "),i("p",[e._v("At this point, the system can be armed and flown.\nThe vehicle can be observed moving in jMAVSim, and on the QGC "),i("strong",[e._v("Fly")]),e._v(" view.")]),e._v(" "),i("h2",{attrs:{id:"credits"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),i("p",[e._v("The SIH was originally developed by Coriolis g Corporation, then the airplane model was added by Altitude R&D inc.\nBoth are Canadian companies, Coriolis develops a new type of Vertical Takeoff and Landing (VTOL) vehicles based on passive coupling systems "),i("a",{attrs:{href:"http://www.vogi-vtol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.vogi-vtol.com"),i("OutboundLink")],1),e._v(";\nAltitude R&D is specialized in dynamics, control, and real-time simulation.\nThey provide the SIH as a simple simulator for quadrotors and airplanes released for free under BSD license.")])])}),[],!1,null,null,null);t.default=r.exports}}]);