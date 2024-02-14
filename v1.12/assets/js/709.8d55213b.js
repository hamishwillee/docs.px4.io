(window.webpackJsonp=window.webpackJsonp||[]).push([[709],{1307:function(e,t,r){e.exports=r.p+"assets/img/SIH_diagram.4e53f869.png"},2697:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"硬件仿真"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件仿真"}},[e._v("#")]),e._v(" 硬件仿真")]),e._v(" "),a("p",[e._v("对于四旋翼，硬件仿真（SIH）是"),a("RouterLink",{attrs:{to:"/zh/simulation/hitl.html"}},[e._v("硬件在环仿真（HITL）")]),e._v("的替代品。 在这个设置中，所有的数据处理工作都在嵌入式硬件（PIXHAWK）中完成，包括控制器、状态估计器和仿真器。 与PIXHAWK连接的电脑只用来显示虚拟的载具。")],1),e._v(" "),a("p",[a("img",{attrs:{src:r(1307),alt:"仿真器 MAVLink API"}})]),e._v(" "),a("p",[e._v("与硬件在环仿真相比，硬件仿真有以下两点好处：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("It ensures synchronous timing by avoiding the bidirectional connection to the computer. As a result the user does not need such a powerful desktop computer.")])]),e._v(" "),a("li",[a("p",[e._v("The whole simulation remains inside the PX4 environment. Developers who are familiar with PX4 can more easily incorporate their own mathematical model into the simulator. They can, for instance, modify the aerodynamic model, or noise level of the sensors, or even add a sensor to be simulated.")])])]),e._v(" "),a("p",[e._v("The SIH can be used by new PX4 users to get familiar with PX4 and the different modes and features, and of course to learn to fly a quadrotor with the real RC controller.")]),e._v(" "),a("p",[e._v("The dynamic model is described in this "),a("a",{attrs:{href:"https://github.com/PX4/Devguide/raw/master/assets/simulation/SIH_dynamic_model.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("pdf report"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Furthermore, the physical parameters representing the vehicle (such as mass, inertia, and maximum thrust force) can easily be modified from the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#simulation-in-hardware"}},[e._v("SIH parameters")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"标准安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准安装"}},[e._v("#")]),e._v(" 标准安装")]),e._v(" "),a("p",[e._v("To run the SIH, you will need a "),a("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[e._v("flight controller hardware")]),e._v(" (e.g. a Pixhawk-series board). 如果你计划使用一对"),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[e._v("无线电控制发射机和接收机")]),e._v("，你也应该安装好。 或者，使用"),a("em",[e._v("QGC地面站")]),e._v("、"),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("操纵杆"),a("OutboundLink")],1),e._v("也能被用来仿真一个无线电控制系统。")],1),e._v(" "),a("p",[e._v("硬件仿真可以在除了FMUv2硬件之外的所有Pixhawk飞控板上使用。 It is available on the PX4-Autopilot master branch and release versions v1.9.0 and above.")]),e._v(" "),a("h2",{attrs:{id:"配置硬件仿真-sih"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置硬件仿真-sih"}},[e._v("#")]),e._v(" 配置硬件仿真（SIH）")]),e._v(" "),a("p",[e._v("运行SIH和挑选一个机架一样简单。 将飞控和电脑用USB线连接起来，让它通电启动，然后使用地面站选择"),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#simulation-copter"}},[e._v("SIH 机架")]),e._v(" 飞控接下来会重启")],1),e._v(" "),a("p",[e._v("当选择了SIH 机架之后，SIH模块就自动启动了，车辆应该显示在地面站的地图上")]),e._v(" "),a("h2",{attrs:{id:"设置显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置显示"}},[e._v("#")]),e._v(" 设置显示")]),e._v(" "),a("p",[e._v("The simulated quadrotor can be displayed in jMAVSim from PX4 v1.11.")]),e._v(" "),a("ol",[a("li",[e._v("Close "),a("em",[e._v("QGroundControl")]),e._v(" (if opened).")]),e._v(" "),a("li",[e._v("Unplug and replug the hardware autopilot (allow a few seconds for it to boot).")]),e._v(" "),a("li",[e._v("Start jMAVSim by calling the script "),a("strong",[e._v("jmavsim_run.sh")]),e._v(" from a terminal:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./Tools/jmavsim_run.sh -q -d /dev/ttyACM0 -b 2000000 -r 250 -o\n")])])]),e._v("where the flags are\n"),a("ul",[a("li",[a("code",[e._v("-q")]),e._v(" to allow the communication to "),a("em",[e._v("QGroundControl")]),e._v(" (optional).")]),e._v(" "),a("li",[a("code",[e._v("-d")]),e._v(" to start the serial device "),a("code",[e._v("/dev/ttyACM0")]),e._v(" on Linux. On macOS this would be "),a("code",[e._v("/dev/tty.usbmodem1")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("-b")]),e._v(" to set the serial baud rate to "),a("code",[e._v("2000000")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("-r")]),e._v(" to set the refresh rate to "),a("code",[e._v("250")]),e._v(" Hz (optional).")]),e._v(" "),a("li",[a("code",[e._v("-o")]),e._v(" to start jMAVSim in "),a("em",[e._v("display Only")]),e._v(" mode (i.e. the physical engine is turned off and jMAVSim only displays the trajectory given by the SIH in real-time).")])])]),e._v(" "),a("li",[e._v("After few seconds, "),a("em",[e._v("QGroundControl")]),e._v(" can be opened again.")])]),e._v(" "),a("p",[e._v("At this point, the system can be armed and flown. The vehicle can be observed moving in jMAVSim, and on the QGC "),a("strong",[e._v("Fly")]),e._v(" view.")]),e._v(" "),a("h2",{attrs:{id:"鸣谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[e._v("#")]),e._v(" 鸣谢")]),e._v(" "),a("p",[e._v("SIH功能是由Coriolis g公司开发的。 一家加拿大公司开发一种新型的垂直起飞和着陆 (VTOL) 无人驾驶飞行器，并以被动的耦合系统为基础。")]),e._v(" "),a("p",[e._v("他们专注于动力学、控制和实时仿真，他们在BSD许可下把硬件仿真作为一个免费的简单的仿真器提供给四旋翼飞行器。")]),e._v(" "),a("p",[e._v("在"),a("a",{attrs:{href:"http://www.vogi-vtol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.vogi-vtol.com"),a("OutboundLink")],1),e._v("上发现他们当前的平台。")])])}),[],!1,null,null,null);t.default=o.exports}}]);