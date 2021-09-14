(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1322:function(e,t,a){e.exports=a.p+"assets/img/SIH_diagram.4e53f869.png"},3225:function(e,t,a){"use strict";a.r(t);var o=a(19),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"硬件仿真"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#硬件仿真"}},[e._v("#")]),e._v(" 硬件仿真")]),e._v(" "),o("p",[e._v("对于四旋翼，硬件仿真（SIH）是"),o("RouterLink",{attrs:{to:"/zh/simulation/hitl.html"}},[e._v("硬件在环仿真（HITL）")]),e._v("的替代品。 在这个设置中，所有的数据处理工作都在嵌入式硬件（PIXHAWK）中完成，包括控制器、状态估计器和仿真器。 与PIXHAWK连接的电脑只用来显示虚拟的载具。")],1),e._v(" "),o("p",[o("img",{attrs:{src:a(1322),alt:"仿真器 MAVLink API"}})]),e._v(" "),o("p",[e._v("与硬件在环仿真相比，硬件仿真有以下两点好处：")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("It ensures synchronous timing by avoiding the bidirectional connection to the computer. As a result the user does not need such a powerful desktop computer.")])]),e._v(" "),o("li",[o("p",[e._v("The whole simulation remains inside the PX4 environment. Developers who are familiar with PX4 can more easily incorporate their own mathematical model into the simulator. They can, for instance, modify the aerodynamic model, or noise level of the sensors, or even add a sensor to be simulated.")])])]),e._v(" "),o("p",[e._v("The SIH can be used by new PX4 users to get familiar with PX4 and the different modes and features, and of course to learn to fly a quadrotor or an airplane with the real RC controller.")]),e._v(" "),o("p",[e._v("The quadrotor dynamic model is described in this "),o("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/master/assets/simulation/SIH_dynamic_model.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("pdf report"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The aerodynamic model for the fixed-wing airplane is inspired from the PhD thesis:")]),e._v(" "),o("blockquote",[o("p",[e._v('"Dynamics modeling of agile fixed-wing unmanned aerial vehicles." Khan, Waqas, supervised by Meyer Nahon, McGill University, PhD thesis, 2016.')])]),e._v(" "),o("p",[e._v("Furthermore, the physical parameters representing the vehicle (such as mass, inertia, and maximum thrust force) can easily be modified from the "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH parameters")]),e._v(".")],1),e._v(" "),o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/PzIpSCRD8Jo",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p"),e._v(" "),o("h2",{attrs:{id:"标准安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#标准安装"}},[e._v("#")]),e._v(" 标准安装")]),e._v(" "),o("p",[e._v("运行SIH和挑选一个机架一样简单。 将飞控和电脑用USB线连接起来，让它通电启动，然后使用地面站选择"),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#simulation-copter"}},[e._v("SIH 机架")])],1),e._v(" "),o("ul",[o("li",[e._v("SIH is compatible with all Pixhawk-series boards except those based on FMUv2.")]),e._v(" "),o("li",[e._v("SIH for quadrotor supported from PX4 v1.9.")]),e._v(" "),o("li",[e._v("SIH for fixed-wing (airplane) is supported in versions after PX v1.12 (currently in the master branch).")])]),e._v(" "),o("h2",{attrs:{id:"配置硬件仿真-sih"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#配置硬件仿真-sih"}},[e._v("#")]),e._v(" 配置硬件仿真（SIH）")]),e._v(" "),o("p",[e._v("Running the SIH is as easy as selecting an airframe. Plug the autopilot to the desktop computer with a USB cable, let it boot, then using a ground control station select the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#simulation-copter"}},[e._v("SIH Quadcopter X")]),e._v(" or the "),o("code",[e._v("SIH plane AERT")]),e._v(". The autopilot will then reboot.")],1),e._v(" "),o("p",[e._v("When the SIH airframe is selected, the SIH module starts by itself, the vehicle should be displayed on the ground control station map.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),o("p",[e._v("The airplane needs to takeoff in manual mode at full throttle. Also, if the airplane hits the floor the state estimator might lose its fix.")])]),e._v(" "),o("h2",{attrs:{id:"设置显示"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#设置显示"}},[e._v("#")]),e._v(" 设置显示")]),e._v(" "),o("p",[e._v("SIH功能是由Coriolis g公司开发的。 一家加拿大公司开发一种新型的垂直起飞和着陆 (VTOL) 无人驾驶飞行器，并以被动的耦合系统为基础。")]),e._v(" "),o("ul",[o("li",[e._v("Quadrotor from PX4 v1.11.")]),e._v(" "),o("li",[e._v("Fixed-wing from the PX4 master (or the release version after PX4 v1.12).")])]),e._v(" "),o("p",[e._v("To display the simulated vehicle:")]),e._v(" "),o("ol",[o("li",[e._v("Close "),o("em",[e._v("QGroundControl")]),e._v(" (if open).")]),e._v(" "),o("li",[e._v("Unplug and replug the hardware autopilot (allow a few seconds for it to boot).")]),e._v(" "),o("li",[e._v("Start jMAVSim by calling the script "),o("strong",[e._v("jmavsim_run.sh")]),e._v(" from a terminal:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("./Tools/jmavsim_run.sh -q -d /dev/ttyACM0 -b 2000000 -o\n")])])]),e._v("where the flags are\n"),o("ul",[o("li",[o("code",[e._v("-q")]),e._v(" to allow the communication to "),o("em",[e._v("QGroundControl")]),e._v(" (optional).")]),e._v(" "),o("li",[o("code",[e._v("-d")]),e._v(" to start the serial device "),o("code",[e._v("/dev/ttyACM0")]),e._v(" on Linux. On macOS this would be "),o("code",[e._v("/dev/tty.usbmodem1")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("-b")]),e._v(" to set the serial baud rate to "),o("code",[e._v("2000000")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("-o")]),e._v(" to start jMAVSim in "),o("em",[e._v("display Only")]),e._v(" mode (i.e. the physical engine is turned off and jMAVSim only displays the trajectory given by the SIH in real-time).")]),e._v(" "),o("li",[e._v("add a flag "),o("code",[e._v("-a")]),e._v(" to display an aircraft. If this flag is not present a quadrotor will be displayed by default.")])])]),e._v(" "),o("li",[e._v("After few seconds, "),o("em",[e._v("QGroundControl")]),e._v(" can be opened again.")])]),e._v(" "),o("p",[e._v("At this point, the system can be armed and flown. The vehicle can be observed moving in jMAVSim, and on the QGC "),o("strong",[e._v("Fly")]),e._v(" view.")]),e._v(" "),o("h2",{attrs:{id:"鸣谢"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[e._v("#")]),e._v(" 鸣谢")]),e._v(" "),o("p",[e._v("The SIH was originally developed by Coriolis g Corporation, then the airplane model was added by Altitude R&D inc. Both are Canadian companies, Coriolis develops a new type of Vertical Takeoff and Landing (VTOL) vehicles based on passive coupling systems "),o("a",{attrs:{href:"http://www.vogi-vtol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.vogi-vtol.com"),o("OutboundLink")],1),e._v("; Altitude R&D is specialized in dynamics, control, and real-time simulation. They provide the SIH as a simple simulator for quadrotors and airplanes released for free under BSD license.")])])}),[],!1,null,null,null);t.default=i.exports}}]);