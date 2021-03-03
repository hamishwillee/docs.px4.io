(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{1274:function(e,t,a){e.exports=a.p+"assets/img/SIH_diagram.4e53f869.png"},1803:function(e,t,a){"use strict";a.r(t);var r=a(18),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"simulation-in-hardware-sih"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#simulation-in-hardware-sih"}},[e._v("#")]),e._v(" Simulation-In-Hardware (SIH)")]),e._v(" "),r("p",[e._v("Simulation-In-Hardware (SIH) is an alternative to "),r("RouterLink",{attrs:{to:"/en/simulation/hitl.html"}},[e._v("Hardware In The Loop simulation (HITL)")]),e._v(" for a quadrotor.\nIn this setup, everything is running on embedded hardware - the controller, the state estimator, and the simulator.\nThe Desktop computer is only used to display the virtual vehicle.")],1),e._v(" "),r("p",[r("img",{attrs:{src:a(1274),alt:"Simulator MAVLink API"}})]),e._v(" "),r("p",[e._v("The SIH provides two benefits over the HITL:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("It ensures synchronous timing by avoiding the bidirectional connection to the computer.\nAs a result the user does not need such a powerful desktop computer.")])]),e._v(" "),r("li",[r("p",[e._v("The whole simulation remains inside the PX4 environment.\nDevelopers who are familiar with PX4 can more easily incorporate their own mathematical model into the simulator.\nThey can, for instance, modify the aerodynamic model, or noise level of the sensors, or even add a sensor to be simulated.")])])]),e._v(" "),r("p",[e._v("The SIH can be used by new PX4 users to get familiar with PX4 and the different modes and features, and of course to learn to fly a quadrotor with the real RC controller.")]),e._v(" "),r("p",[e._v("The dynamic model is described in this "),r("a",{attrs:{href:"https://github.com/PX4/Devguide/raw/master/assets/simulation/SIH_dynamic_model.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("pdf report"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Furthermore, the physical parameters representing the vehicle (such as mass, inertia, and maximum thrust force) can easily be modified from the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH parameters")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("To run the SIH, you will need a "),r("RouterLink",{attrs:{to:"/en/flight_controller/"}},[e._v("flight controller hardware")]),e._v(" (e.g. a Pixhawk-series board).\nIf you are planning to use a "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[e._v("radio control transmitter and receiver pair")]),e._v(" you should have that too.\nAlternatively, using "),r("em",[e._v("QGroundControl")]),e._v(", a "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("joystick"),r("OutboundLink")],1),e._v(" can be used to emulate a radio control system.")],1),e._v(" "),r("p",[e._v("The SIH is compatible with all Pixhawk-series boards except those based on FMUv2.\nIt is available on the PX4-Autopilot master branch and release versions v1.9.0 and above.")]),e._v(" "),r("h2",{attrs:{id:"setting-up-sih"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-sih"}},[e._v("#")]),e._v(" Setting up SIH")]),e._v(" "),r("p",[e._v("Running the SIH is as easy as selecting an airframe.\nPlug the autopilot to the desktop computer with a USB cable, let it boot, then using a ground control station select the "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#simulation-copter"}},[e._v("SIH airframe")]),e._v(".\nThe autopilot will then reboot.")],1),e._v(" "),r("p",[e._v("When the SIH airframe is selected, the SIH module starts by itself, the vehicle should be displayed on the ground control station map.")]),e._v(" "),r("h2",{attrs:{id:"setting-up-the-display"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-display"}},[e._v("#")]),e._v(" Setting up the Display")]),e._v(" "),r("p",[e._v("The simulated quadrotor can be displayed in jMAVSim from PX4 v1.11.")]),e._v(" "),r("ol",[r("li",[e._v("Close "),r("em",[e._v("QGroundControl")]),e._v(" (if opened).")]),e._v(" "),r("li",[e._v("Unplug and replug the hardware autopilot (allow a few seconds for it to boot).")]),e._v(" "),r("li",[e._v("Start jMAVSim by calling the script "),r("strong",[e._v("jmavsim_run.sh")]),e._v(" from a terminal:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("./Tools/jmavsim_run.sh -q -d /dev/ttyACM0 -b 921600 -r 250 -o\n")])])]),e._v("where the flags are\n"),r("ul",[r("li",[r("code",[e._v("-q")]),e._v(" to allow the communication to "),r("em",[e._v("QGroundControl")]),e._v(" (optional).")]),e._v(" "),r("li",[r("code",[e._v("-d")]),e._v(" to start the serial device "),r("code",[e._v("/dev/ttyACM0")]),e._v(" on Linux.\nOn macOS this would be "),r("code",[e._v("/dev/tty.usbmodem1")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("-b")]),e._v(" to set the serial baud rate to "),r("code",[e._v("921600")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("-r")]),e._v(" to set the refresh rate to "),r("code",[e._v("250")]),e._v(" Hz (optional).")]),e._v(" "),r("li",[r("code",[e._v("-o")]),e._v(" to start jMAVSim in "),r("em",[e._v("display Only")]),e._v(" mode (i.e. the physical engine is turned off and jMAVSim only displays the trajectory given by the SIH in real-time).")])])]),e._v(" "),r("li",[e._v("After few seconds, "),r("em",[e._v("QGroundControl")]),e._v(" can be opened again.")])]),e._v(" "),r("p",[e._v("At this point, the system can be armed and flown.\nThe vehicle can be observed moving in jMAVSim, and on the QGC "),r("strong",[e._v("Fly")]),e._v(" view.")]),e._v(" "),r("h2",{attrs:{id:"credits"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),r("p",[e._v("The SIH was developed by Coriolis g Corporation, a Canadian company developing a new type of Vertical Takeoff and Landing (VTOL) Unmanned Aerial Vehicles (UAV) based on passive coupling systems.")]),e._v(" "),r("p",[e._v("Specialized in dynamics, control, and real-time simulation, they provide the SIH as a simple simulator for quadrotors released for free under BSD license.")]),e._v(" "),r("p",[e._v("Discover their current platform at "),r("a",{attrs:{href:"http://www.vogi-vtol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.vogi-vtol.com"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);