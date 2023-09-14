(window.webpackJsonp=window.webpackJsonp||[]).push([[906],{1518:function(e,t,a){e.exports=a.p+"assets/img/SIH_diagram.4e53f869.png"},3848:function(e,t,a){"use strict";a.r(t);var i=a(19),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"硬件仿真"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#硬件仿真"}},[e._v("#")]),e._v(" 硬件仿真")]),e._v(" "),i("p",[e._v("Simulation-In-Hardware (SIH) is an alternative to "),i("RouterLink",{attrs:{to:"/zh/simulation/hitl.html"}},[e._v("Hardware In The Loop simulation (HITL)")]),e._v(" for quadrotors, fixed-wing vehicles (airplane), and tailsitters. 在这个设置中，所有的数据处理工作都在嵌入式硬件（PIXHAWK）中完成，包括控制器、状态估计器和仿真器。 与PIXHAWK连接的电脑只用来显示虚拟的载具。")],1),e._v(" "),i("p",[i("img",{attrs:{src:a(1518),alt:"仿真器 MAVLink API"}})]),e._v(" "),i("p",[e._v("与硬件在环仿真相比，硬件仿真有以下两点好处：")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("It ensures synchronous timing by avoiding the bidirectional connection to the computer. As a result the user does not need such a powerful desktop computer.")])]),e._v(" "),i("li",[i("p",[e._v("The whole simulation remains inside the PX4 environment. Developers who are familiar with PX4 can more easily incorporate their own mathematical model into the simulator. They can, for instance, modify the aerodynamic model, or noise level of the sensors, or even add a sensor to be simulated.")])])]),e._v(" "),i("p",[e._v("The SIH can be used by new PX4 users to get familiar with PX4 and the different modes and features, and of course to learn to fly a quadrotor or an airplane with the real RC controller.")]),e._v(" "),i("p",[e._v("The quadrotor dynamic model is described in this "),i("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/simulation/SIH_dynamic_model.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("pdf report"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("The aerodynamic model for the fixed-wing airplane is inspired from the PhD thesis:")]),e._v(" "),i("blockquote",[i("p",[e._v('"Dynamics modeling of agile fixed-wing unmanned aerial vehicles." Khan, Waqas, supervised by Nahon, Meyer, McGill University, PhD thesis, 2016.')])]),e._v(" "),i("p",[e._v("The model for the tailsitter vehicle is inspired from the Master thesis:")]),e._v(" "),i("blockquote",[i("p",[e._v('"Modeling and control of a flying wing tailsitter unmanned aerial vehicle." Chiappinelli, Romain, supervised by Nahon, Meyer, McGill University, Masters thesis, 2018.')])]),e._v(" "),i("p",[e._v("Furthermore, the physical parameters representing the vehicle (such as mass, inertia, and maximum thrust force) can easily be modified from the "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH parameters")]),e._v(".")],1),e._v(" "),i("p"),i("div",{staticClass:"embed-responsive embed-responsive-16by9"},[i("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/PzIpSCRD8Jo",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),i("p"),e._v(" "),i("h2",{attrs:{id:"标准安装"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#标准安装"}},[e._v("#")]),e._v(" 标准安装")]),e._v(" "),i("p",[e._v("To run the SIH, you will need a "),i("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[e._v("flight controller")]),e._v(" (e.g. a Pixhawk-series board). you will also need either a "),i("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[e._v("radio control transmitter and receiver pair")]),e._v(" or a "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("joystick"),i("OutboundLink")],1),e._v(" (a joystick can be used via QGroundControl to emulate a radio control system).")],1),e._v(" "),i("ul",[i("li",[e._v("SIH is compatible with all Pixhawk-series boards except those based on FMUv2.")]),e._v(" "),i("li",[e._v("SIH for quadrotor supported from PX4 v1.9.")]),e._v(" "),i("li",[e._v("SIH for fixed-wing (airplane) and tailsitter are supported in versions after PX v1.12 (currently in the master branch).")])]),e._v(" "),i("h2",{attrs:{id:"配置硬件仿真-sih"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置硬件仿真-sih"}},[e._v("#")]),e._v(" 配置硬件仿真（SIH）")]),e._v(" "),i("p",[e._v("Running the SIH is as easy as selecting an airframe. Plug the autopilot to the desktop computer with a USB cable, let it boot, then using a ground control station select "),i("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_simulation_sih_quadcopter_x"}},[e._v("SIH Quadcopter X")]),e._v(", "),i("code",[e._v("SIH plane AERT")]),e._v(", or 'SIH Tailsitter Duo'. The autopilot will then reboot.")],1),e._v(" "),i("p",[e._v("When the SIH airframe is selected, the module "),i("code",[e._v("sih")]),e._v(" starts by itself, the vehicle should be displayed on the ground control station map.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),i("p",[e._v("The airplane needs to takeoff in manual mode at full throttle.\nAlso, if the airplane hits the floor the state estimator might lose its fix.")])]),e._v(" "),i("h2",{attrs:{id:"设置显示"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#设置显示"}},[e._v("#")]),e._v(" 设置显示")]),e._v(" "),i("p",[e._v("The simulated vehicle can be displayed in jMAVSim for the following PX4 versions:")]),e._v(" "),i("ul",[i("li",[e._v("Quadrotor from PX4 v1.11.")]),e._v(" "),i("li",[e._v("Fixed-wing from the PX4 master (or the release version after PX4 v1.12).")])]),e._v(" "),i("p",[e._v("To display the simulated vehicle:")]),e._v(" "),i("ol",[i("li",[e._v("Close "),i("em",[e._v("QGroundControl")]),e._v(" (if open).")]),e._v(" "),i("li",[e._v("Unplug and replug the hardware autopilot (allow a few seconds for it to boot).")]),e._v(" "),i("li",[e._v("Start jMAVSim by calling the script "),i("strong",[e._v("jmavsim_run.sh")]),e._v(" from a terminal:"),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("./Tools/simulation/jmavsim/jmavsim_run.sh -q -d /dev/ttyACM0 -b 2000000 -o\n")])])]),e._v("where the flags are\n"),i("ul",[i("li",[i("code",[e._v("-q")]),e._v(" to allow the communication to "),i("em",[e._v("QGroundControl")]),e._v(" (optional).")]),e._v(" "),i("li",[i("code",[e._v("-d")]),e._v(" to start the serial device "),i("code",[e._v("/dev/ttyACM0")]),e._v(" on Linux. On macOS this would be "),i("code",[e._v("/dev/tty.usbmodem1")]),e._v(".")]),e._v(" "),i("li",[i("code",[e._v("-b")]),e._v(" to set the serial baud rate to "),i("code",[e._v("2000000")]),e._v(".")]),e._v(" "),i("li",[i("code",[e._v("-o")]),e._v(" to start jMAVSim in "),i("em",[e._v("display Only")]),e._v(" mode (i.e. the physical engine is turned off and jMAVSim only displays the trajectory given by the SIH in real-time).")]),e._v(" "),i("li",[e._v("add a flag "),i("code",[e._v("-a")]),e._v(" to display an aircraft or '-t' to display a tailsitter. If this flag is not present a quadrotor will be displayed by default.")])])]),e._v(" "),i("li",[e._v("After few seconds, "),i("em",[e._v("QGroundControl")]),e._v(" can be opened again.")])]),e._v(" "),i("p",[e._v("At this point, the system can be armed and flown. The vehicle can be observed moving in jMAVSim, and on the QGC "),i("em",[e._v("Fly")]),e._v(" view.")]),e._v(" "),i("h2",{attrs:{id:"鸣谢"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[e._v("#")]),e._v(" 鸣谢")]),e._v(" "),i("p",[e._v("The SIH was originally developed by Coriolis g Corporation, then the airplane model and tailsitter models were added by Altitude R&D inc. Both are Canadian companies, "),i("a",{attrs:{href:"http://ww7.vogi-vtol.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coriolis g"),i("OutboundLink")],1),e._v(" develops a new type of Vertical Takeoff and Landing (VTOL) vehicles based on passive coupling systems; "),i("a",{attrs:{href:"https://www.altitude-rd.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Altitude R&D"),i("OutboundLink")],1),e._v(" is specialized in dynamics, control, and real-time simulation. They provide the SIH as a simple simulator for quadrotors and airplanes released for free under BSD license.")])])}),[],!1,null,null,null);t.default=r.exports}}]);