(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{3222:function(e,t,o){"use strict";o.r(t);var a=o(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"利用视觉或运动捕捉系统进行位置估计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用视觉或运动捕捉系统进行位置估计"}},[e._v("#")]),e._v(" 利用视觉或运动捕捉系统进行位置估计")]),e._v(" "),a("p",[e._v("可视惯性测距（VIO）和运动捕捉（MOCAP）系统允许载具在全局位置源不可用或不可靠时（例如在室内，或在桥下飞行时）导航。 等等……")]),e._v(" "),a("p",[e._v("VIO 和 MOCAP 都从“视觉”信息中确定飞机的 "),a("em",[e._v("pose")]),e._v(" （位置和姿态）。 它们之间的主要区别是框架透视图：")]),e._v(" "),a("ul",[a("li",[e._v("VIO 使用 *板载传感器 * 从车辆的角度获取姿势数据（见 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry#Egomotion",target:"_blank",rel:"noopener noreferrer"}},[e._v("egomotion"),a("OutboundLink")],1),e._v("）。")]),e._v(" "),a("li",[e._v("MoCap 使用 "),a("em",[e._v("离板摄像机")]),e._v(" 系统在 3D 空间中获取飞机姿态数据（即它是一个外部系统，告诉飞机其姿态）。")])]),e._v(" "),a("p",[e._v("任何类型系统的 Pose 数据都可用于更新基于 PX4 自动驾驶仪的局部位置估计（相对于本地源），也可以选择融合到飞机姿态估计中。 Additionally, if the external pose system also provides linear velocity measurements, it can be used to improve the state estimate (fusion of linear velocity measurements is only supported by the EKF2).")]),e._v(" "),a("p",[e._v("本主题介绍如何配置基于 px4 的系统，以便从 MoCap/VIO 系统（通过 ROS 或其他 MAVLink 系统）获取数据，更具体地说明如何设置 MoCap 系统，如 VICON 和 Optitrack，以及基于视觉的估计系统（如 "),a("a",{attrs:{href:"https://github.com/ethz-asl/rovio",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROVIO"),a("OutboundLink")],1),e._v("、"),a("a",{attrs:{href:"https://github.com/uzh-rpg/rpg_svo",target:"_blank",rel:"noopener noreferrer"}},[e._v("SVO"),a("OutboundLink")],1),e._v(" 和 "),a("a",{attrs:{href:"https://github.com/ethz-asl/ethzasl_ptam",target:"_blank",rel:"noopener noreferrer"}},[e._v("PTAM"),a("OutboundLink")],1),e._v("）。")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The instructions differ depending on whether you are using the EKF2 or LPE estimator.")])]),e._v(" "),a("h2",{attrs:{id:"px4-mavlink-集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-mavlink-集成"}},[e._v("#")]),e._v(" PX4 MAVLink 集成")]),e._v(" "),a("p",[e._v("PX4 uses the following MAVLink messages for getting external position information, and maps them to "),a("RouterLink",{attrs:{to:"/zh/middleware/uorb.html"}},[e._v("uORB topics")]),e._v(":")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("MAVLink")]),e._v(" "),a("th",[e._v("uORB")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#VISION_POSITION_ESTIMATE",target:"_blank",rel:"noopener noreferrer"}},[e._v("VISION_POSITION_ESTIMATE"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("vehicle_visual_odometry")])])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ODOMETRY",target:"_blank",rel:"noopener noreferrer"}},[e._v("ODOMETRY"),a("OutboundLink")],1),e._v(" ("),a("code",[e._v("frame_id =")]),e._v(" "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_VISION_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_VISION_NED"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("td",[a("code",[e._v("vehicle_visual_odometry")])])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ATT_POS_MOCAP",target:"_blank",rel:"noopener noreferrer"}},[e._v("ATT_POS_MOCAP"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("vehicle_mocap_odometry")])])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ODOMETRY",target:"_blank",rel:"noopener noreferrer"}},[e._v("ODOMETRY"),a("OutboundLink")],1),e._v(" ("),a("code",[e._v("frame_id =")]),e._v(" "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_MOCAP_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_MOCAP_NED"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("td",[a("code",[e._v("vehicle_mocap_odometry")])])])])]),e._v(" "),a("p",[e._v("EKF2 only subscribes to "),a("code",[e._v("vehicle_visual_odometry")]),e._v(" topics and can hence only process the first two messages (a MoCap system must generate these messages to work with EKF2). The odometry message is the only message that can send also linear velocities to PX4. The LPE estimator subscribes to both topics, and can hence process all the above messages.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("EKF2 is the default estimator used by PX4. It is better tested and supported than LPE, and should be used by preference.")])]),e._v(" "),a("p",[e._v("The messages should be streamed at between 30Hz (if containing covariances) and 50 Hz. If the message rate is too low, EKF2 will not fuse the external vision messages.")]),e._v(" "),a("p",[e._v('The following MAVLink "vision" messages are not currently supported by PX4: '),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#GLOBAL_VISION_POSITION_ESTIMATE",target:"_blank",rel:"noopener noreferrer"}},[e._v("GLOBAL_VISION_POSITION_ESTIMATE"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#VISION_SPEED_ESTIMATE",target:"_blank",rel:"noopener noreferrer"}},[e._v("VISION_SPEED_ESTIMATE"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#VICON_POSITION_ESTIMATE",target:"_blank",rel:"noopener noreferrer"}},[e._v("VICON_POSITION_ESTIMATE"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"参考机架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考机架"}},[e._v("#")]),e._v(" 参考机架")]),e._v(" "),a("p",[e._v("例如，如果使用 optitrack 框架，则本地框架在水平面上具有 ")]),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[a("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.294ex",height:"1.025ex",viewBox:"0 -442 572 453"}},[a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})])])])])])],1),e._v(" 和 "),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[a("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.052ex",height:"1.025ex",viewBox:"0 -442 465 453"}},[a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{attrs:{"data-c":"7A",d:"M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"}})])])])])])],1),e._v("（"),a("em",[e._v("x")]),e._v(" 正面和 "),a("em",[e._v("z")]),e._v(" 右），而 "),a("em",[e._v("y")]),e._v(" 轴是垂直的，指向上方。 通过如下转换我们可以转换optrack坐标系到NED系中。 The heading of the reference frame of the PX4 estimator and the one of the external pose estimate will not match in most cases. Therefore the reference frame of the external pose estimate is named differently, it is called "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_FRD",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_LOCAL_FRD"),a("OutboundLink")],1),e._v("."),a("p"),e._v(" "),a("p",[e._v("Depending on the source of your reference frame, you will need to apply a custom transformation to the pose estimate before sending the MAVLink Vision/MoCap message. This is necessary to change the orientation of the parent and child frame of the pose estimate, such that it fits the PX4 convention. Have a look at the MAVROS "),a("a",{attrs:{href:"https://github.com/mavlink/mavros/blob/master/mavros_extras/src/plugins/odom.cpp",target:"_blank",rel:"noopener noreferrer"}},[a("em",[e._v("odom")]),e._v(" plugin"),a("OutboundLink")],1),e._v(" for the necessary transformations.")]),e._v(" "),a("p",[e._v("在方向方面，保持标量部分 "),a("em",[e._v("w")]),e._v(" 四元数，并以相同的方式交换矢量部分 "),a("em",[e._v("x")]),e._v("、"),a("em",[e._v("y")]),e._v(" 和 "),a("em",[e._v("z")]),e._v("。 您可以将此技巧应用于每个系统-如果您需要获取 NED 帧，请相应地查看您的 MoCap 输出和交换轴。")]),e._v(" "),a("p",[e._v("For example, if using the Optitrack framework the local frame has "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[a("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.294ex",height:"1.025ex",viewBox:"0 -442 572 453"}},[a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),a("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(572, 0)"}})])])])]),e._v(" and "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[a("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.052ex",height:"1.025ex",viewBox:"0 -442 465 453"}},[a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{attrs:{"data-c":"7A",d:"M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"}})]),a("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(465, 0)"}})])])])]),e._v(" on the horizontal plane ("),a("em",[e._v("x")]),e._v(" front and "),a("em",[e._v("z")]),e._v(" right) while "),a("em",[e._v("y")]),e._v(" axis is vertical and pointing up. A simple trick is swapping axis in order to obtained NED convention.")],1),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#EKF2_EV_DELAY"}},[e._v("EKF2_EV_DELAY")]),e._v(" 是相对于 IMU 测量的 *Vision 位置估计延迟 *。")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("x_{mav} = x_{mocap}\ny_{mav} = z_{mocap}\nz_{mav} = - y_{mocap}\n")])])]),a("p",[e._v("Regarding the orientation, keep the scalar part "),a("em",[e._v("w")]),e._v(" of the quaternion the same and swap the vector part "),a("em",[e._v("x")]),e._v(", "),a("em",[e._v("y")]),e._v(" and "),a("em",[e._v("z")]),e._v(" in the same way. You can apply this trick with every system - if you need to obtain a NED frame, look at your MoCap output and swap axis accordingly.")]),e._v(" "),a("h2",{attrs:{id:"ekf2-调参-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ekf2-调参-配置"}},[e._v("#")]),e._v(" EKF2 调参/配置")]),e._v(" "),a("p",[e._v("Note: this is a quick overview. For more detailed information, check the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html"}},[e._v("EKF2 tuning guide")])],1),e._v(" "),a("p",[e._v("The following parameters must be set to use external position information with EKF2 (these can be set in "),a("em",[e._v("QGroundControl")]),e._v(" > "),a("strong",[e._v("Vehicle Setup > Parameters > EKF2")]),e._v(").")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("外部位置估计的设置")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[e._v("EKF2_AID_MASK")])],1),e._v(" "),a("td",[e._v("设置 "),a("em",[e._v("视觉位置合成")]),e._v(" 和 "),a("em",[e._v("视觉偏航合成")])])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[e._v("EKF2_HGT_MODE")])],1),e._v(" "),a("td",[e._v("设置为 "),a("em",[e._v("Vision")]),e._v(" 使用视觉作为高度估计的主要来源。")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[e._v("EKF2_EV_DELAY")])],1),e._v(" "),a("td",[e._v('设置为测量的时间戳和 "实际" 捕获时间之间的差异。 有关详细信息，请参阅 '),a("a",{attrs:{href:"#tuning-EKF2_EV_DELAY"}},[e._v("below")]),e._v("。")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#EKF2_EV_POS_X"}},[e._v("EKF2_EV_POS_X")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#EKF2_EV_POS_Y"}},[e._v("EKF2_EV_POS_Y")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#EKF2_EV_POS_Z"}},[e._v("EKF2_EV_POS_Z")])],1),e._v(" "),a("td",[e._v("设置视觉传感器（或 MoCap 标记）相对于机器人的车身框架的位置。")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("Reboot the flight controller in order for parameter changes to take effect.")])]),e._v(" "),a("p",[a("a",{attrs:{id:"tuning-EKF2_EV_DELAY"}})]),e._v(" "),a("h4",{attrs:{id:"调参-ekf2-ev-delay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调参-ekf2-ev-delay"}},[e._v("#")]),e._v(" 调参 EKF2_EV_DELAY")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[e._v("EKF2_EV_DELAY")]),e._v(" is the "),a("em",[e._v("Vision Position Estimator delay relative to IMU measurements")]),e._v(".")],1),e._v(" "),a("p",[e._v("该值可以通过不同的参数一起调整，在动态变化中来保证最低 EKF 。")]),e._v(" "),a("p",[e._v("Technically this can be set to 0 if there is correct timestamping (not just arrival time) and timesync (e.g NTP) between MoCap and (for example) ROS computers. In reality, this needs some empirical tuning since delays in the entire MoCap->PX4 chain are very setup-specific. It is rare that a system is setup with an entirely synchronised chain!")]),e._v(" "),a("p",[e._v("A rough estimate of the delay can be obtained from logs by checking the offset between IMU rates and the EV rates. To enable logging of EV rates set bit 7 (Computer Vision and Avoidance) of "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")]),e._v(".")],1),e._v(" "),a("p",[a("img",{attrs:{src:o(369),alt:"ekf2_ev_delay log"}})]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("A plot of external data vs. onboard estimate (as above) can be generated using "),a("RouterLink",{attrs:{to:"/zh/log/flight_log_analysis.html#flightplot"}},[e._v("FlightPlot")]),e._v(" or similar flight analysis tools. At time of writing (July 2021) neither "),a("RouterLink",{attrs:{to:"/zh/log/flight_log_analysis.html#flight-review-online-tool"}},[e._v("Flight Review")]),e._v(" nor "),a("RouterLink",{attrs:{to:"/zh/log/flight_log_analysis.html#mavgcl"}},[e._v("MAVGCL")]),e._v(" support this functionality.")],1)]),e._v(" "),a("p",[e._v("The value can further be tuned by varying the parameter to find the value that yields the lowest EKF innovations during dynamic maneuvers.")]),e._v(" "),a("h2",{attrs:{id:"lpe-调参-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lpe-调参-配置"}},[e._v("#")]),e._v(" LPE 调参/配置")]),e._v(" "),a("p",[e._v("You will first need to "),a("RouterLink",{attrs:{to:"/zh/advanced/switching_state_estimators.html"}},[e._v("switch to the LPE estimator")]),e._v(" by setting the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[e._v("SYS_MC_EST_GROUP")]),e._v(" parameter.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("If targeting "),a("code",[e._v("px4_fmu-v2")]),e._v(" hardware you will also need to use a firmware version that includes the LPE module (firmware for other FMU-series hardware includes both LPE and EKF). The LPE version can be found in the zip file for each PX4 release or it can be built from source using the build command "),a("code",[e._v("make px4_fmu-v2_lpe")]),e._v(". See "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[e._v("Building the Code")]),e._v(" for more details.")],1)]),e._v(" "),a("h3",{attrs:{id:"启用外部位置输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用外部位置输入"}},[e._v("#")]),e._v(" 启用外部位置输入")]),e._v(" "),a("p",[e._v("The following parameters must be set to use external position information with LPE (these can be set in "),a("em",[e._v("QGroundControl")]),e._v(" > "),a("strong",[e._v("Vehicle Setup > Parameters > Local Position Estimator")]),e._v(").")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("外部位置估计的设置")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LPE_FUSION"}},[e._v("LPE_FUSION")])],1),e._v(" "),a("td",[e._v("如果选中了 *fuse 视觉位置 *（默认情况下启用），则启用视觉集成。")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#ATT_EXT_HDG_M"}},[e._v("ATT_EXT_HDG_M")])],1),e._v(" "),a("td",[e._v("设置为1或 2，以启用外部标题集成。 Set to 1 or 2 to enable external heading integration. Setting it to 1 will cause vision to be used, while 2 enables MoCap heading use.")])])])]),e._v(" "),a("h3",{attrs:{id:"禁用气压计融合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用气压计融合"}},[e._v("#")]),e._v(" 禁用气压计融合")]),e._v(" "),a("p",[e._v("MAVROS 具有插件，可使用以下管道从 VIO 或 MOCAP 系统中继可视化估计：")]),e._v(" "),a("p",[e._v("您可以将上述任何管道与 LPE 一起使用。")]),e._v(" "),a("h3",{attrs:{id:"滤波噪声参数调参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滤波噪声参数调参"}},[e._v("#")]),e._v(" 滤波噪声参数调参")]),e._v(" "),a("p",[e._v('如果您使用的是 EKF2，则仅支持 "视觉" 管道。 If you\'re working with EKF2, only the "vision" pipelines are supported. To use MoCap data with EKF2 you will have to '),a("a",{attrs:{href:"http://wiki.ros.org/roslaunch/XML/remap",target:"_blank",rel:"noopener noreferrer"}},[e._v("remap"),a("OutboundLink")],1),e._v(" the pose topic that you get from MoCap: You may need to set them lower than the allowed minimum and force-save.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("If performance is still poor, try increasing the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LPE_PN_V"}},[e._v("LPE_PN_V")]),e._v(" parameter. This will cause the estimator to trust measurements more during velocity estimation.")],1)]),e._v(" "),a("h2",{attrs:{id:"使用-ros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-ros"}},[e._v("#")]),e._v(" 使用 ROS")]),e._v(" "),a("p",[e._v("ROS is not "),a("em",[e._v("required")]),e._v(" for supplying external pose information, but is highly recommended as it already comes with good integrations with VIO and MoCap systems. PX4 must already have been set up as above.")]),e._v(" "),a("h3",{attrs:{id:"将数据输入-ros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将数据输入-ros"}},[e._v("#")]),e._v(" 将数据输入 ROS")]),e._v(" "),a("p",[e._v("VIO and MoCap systems have different ways of obtaining pose data, and have their own setup and topics.")]),e._v(" "),a("p",[e._v("The setup for specific systems is covered "),a("a",{attrs:{href:"#setup_specific_systems"}},[e._v("below")]),e._v(". When using external heading estimation, magnetic North is ignored and faked with a vector corresponding to world "),a("em",[e._v("x")]),e._v(" axis (which can be placed freely during Vision/MoCap calibration). Yaw angle is therefore given with respect to local "),a("em",[e._v("x")]),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{id:"relaying_pose_data_to_px4"}})]),e._v(" "),a("h3",{attrs:{id:"将数据回传给-px4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将数据回传给-px4"}},[e._v("#")]),e._v(" 将数据回传给 PX4")]),e._v(" "),a("p",[e._v("MAVROS has plugins to relay a visual estimation from a VIO or MoCap system using the following pipelines:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("ROS")]),e._v(" "),a("th",[e._v("MAVLink")]),e._v(" "),a("th",[e._v("uORB")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("/mavros/vision_pose/pose")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#VISION_POSITION_ESTIMATE",target:"_blank",rel:"noopener noreferrer"}},[e._v("VISION_POSITION_ESTIMATE"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("vehicle_visual_odometry")])])]),e._v(" "),a("tr",[a("td",[e._v("/mavros/odometry/odom")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ODOMETRY",target:"_blank",rel:"noopener noreferrer"}},[e._v("ODOMETRY"),a("OutboundLink")],1),e._v(" ("),a("code",[e._v("frame_id =")]),e._v(" "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_VISION_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_VISION_NED"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("td",[a("code",[e._v("vehicle_visual_odometry")])])]),e._v(" "),a("tr",[a("td",[e._v("/mavros/mocap/pose")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ATT_POS_MOCAP",target:"_blank",rel:"noopener noreferrer"}},[e._v("ATT_POS_MOCAP"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("vehicle_mocap_odometry")])])]),e._v(" "),a("tr",[a("td",[e._v("/mavros/odometry/odom")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ODOMETRY",target:"_blank",rel:"noopener noreferrer"}},[e._v("ODOMETRY"),a("OutboundLink")],1),e._v(" ("),a("code",[e._v("frame_id =")]),e._v(" "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_VISION_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_VISION_NED"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("td",[a("code",[e._v("vehicle_mocap_odometry")])])])])]),e._v(" "),a("p",[e._v("You can use any of the above pipelines with LPE.")]),e._v(" "),a("p",[e._v('If you\'re working with EKF2, only the "vision" pipelines are supported. To use MoCap data with EKF2 you will have to '),a("a",{attrs:{href:"http://wiki.ros.org/roslaunch/XML/remap",target:"_blank",rel:"noopener noreferrer"}},[e._v("remap"),a("OutboundLink")],1),e._v(" the pose topic that you get from MoCap:")]),e._v(" "),a("ul",[a("li",[e._v("MoCap ROS topics of type "),a("code",[e._v("geometry_msgs/PoseStamped")]),e._v(" or "),a("code",[e._v("geometry_msgs/PoseWithCovarianceStamped")]),e._v(" must be remapped to "),a("code",[e._v("/mavros/vision_pose/pose")]),e._v(". The "),a("code",[e._v("geometry_msgs/PoseStamped")]),e._v(" topic is most common as MoCap doesn't usually have associated covariances to the data. "),a("code",[e._v("geometry_msgs/PoseStamped")]),e._v(" 主题是最常见的，因为 mocap 通常没有与数据相关的协方差。")]),e._v(" "),a("li",[e._v("If you get data through a "),a("code",[e._v("nav_msgs/Odometry")]),e._v(" ROS message then you will need to remap it to "),a("code",[e._v("/mavros/odometry/odom")]),e._v(".")]),e._v(" "),a("li",[e._v("The odometry frames "),a("code",[e._v("frame_id = odom")]),e._v(", "),a("code",[e._v("child_frame_id = base_link")]),e._v(" can be changed by updating the file in "),a("code",[e._v("mavros/launch/px4_config.yaml")]),e._v(". However, the current version of mavros ("),a("code",[e._v("1.3.0")]),e._v(") needs to be able to use the tf tree to find a transform from "),a("code",[e._v("frame_id")]),e._v(" to the hardcoded frame "),a("code",[e._v("odom_ned")]),e._v(". The same applies to the "),a("code",[e._v("child_frame_id")]),e._v(", which needs to be connected in the tf tree to the hardcoded frame "),a("code",[e._v("base_link_frd")]),e._v(". If you are using mavros "),a("code",[e._v("1.2.0")]),e._v(" and you didn't update the file "),a("code",[e._v("mavros/launch/px4_config.yaml")]),e._v(", then you can safely use the odometry frames "),a("code",[e._v("frame_id = odom")]),e._v(", "),a("code",[e._v("child_frame_id = base_link")]),e._v(" without much worry.")]),e._v(" "),a("li",[a("strong",[e._v("Note")]),e._v(" Remapping pose topics is covered above "),a("a",{attrs:{href:"#relaying_pose_data_to_px4"}},[e._v("Relaying pose data to PX4")]),e._v(" ("),a("code",[e._v("/vrpn_client_node/<rigid_body_name>/pose")]),e._v(" is of type "),a("code",[e._v("geometry_msgs/PoseStamped")]),e._v(").")])]),e._v(" "),a("h3",{attrs:{id:"参考框架和-ros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考框架和-ros"}},[e._v("#")]),e._v(" 参考框架和 ROS")]),e._v(" "),a("p",[e._v("The local/world and world frames used by ROS and PX4 are different.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("框架")]),e._v(" "),a("th",[e._v("ROS")]),e._v(" "),a("th",[e._v("PX4")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("机体")]),e._v(" "),a("td",[e._v("FRD (X "),a("strong",[e._v("F")]),e._v("orward, Y "),a("strong",[e._v("R")]),e._v("ight, Z "),a("strong",[e._v("D")]),e._v("own)")]),e._v(" "),a("td",[e._v("FRD (X "),a("strong",[e._v("F")]),e._v("orward, Y "),a("strong",[e._v("R")]),e._v("ight 和 Z "),a("strong",[e._v("D")]),e._v("own)")])]),e._v(" "),a("tr",[a("td",[e._v("世界坐标系")]),e._v(" "),a("td",[e._v("ENU (X "),a("strong",[e._v("E")]),e._v("ast, Y "),a("strong",[e._v("N")]),e._v("orth and Z Up), with the naming being "),a("code",[e._v("odom")]),e._v(" or "),a("code",[e._v("map")])]),e._v(" "),a("td",[e._v("NED (X "),a("strong",[e._v("N")]),e._v("orth, Y "),a("strong",[e._v("E")]),e._v("ast, Z "),a("strong",[e._v("D")]),e._v("own)")])])])]),e._v(" "),a("p",[e._v("The following steps explain how to feed position estimates from an "),a("a",{attrs:{href:"http://optitrack.com/systems/#robotics",target:"_blank",rel:"noopener noreferrer"}},[e._v("OptiTrack"),a("OutboundLink")],1),e._v(" system to PX4. It is assumed that the MoCap system is calibrated. See "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=cNZaFEghTBU",target:"_blank",rel:"noopener noreferrer"}},[e._v("this video"),a("OutboundLink")],1),e._v(" for a tutorial on the calibration process. 假定 mocap 系统已校准。")]),e._v(" "),a("p",[e._v("如果你把机体命名为 "),a("code",[e._v("robot1")]),e._v("，你会得到一个主题，比如 "),a("code",[e._v("/vrpn_client_node/robot1/pose")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(394),alt:"Reference frames"}})]),e._v(" "),a("p",[e._v("With EKF2 when using external heading estimation, magnetic north can either be ignored and or the heading offset to magnetic north can be calculated and compensated. Depending on your choice the yaw angle is given with respect to either magnetic north or local "),a("em",[e._v("x")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("When creating the rigid body in the MoCap software, remember to first align the robot's local "),a("em",[e._v("x")]),e._v(" axis with the world "),a("em",[e._v("x")]),e._v(" axis otherwise the yaw estimate will have an offset. This can stop the external pose estimate fusion from working properly. Yaw angle should be zero when body and reference frame align.")])]),e._v(" "),a("p",[e._v("在设置了上述（特定）系统之一之后，您现在应该可以进行测试了。 After setting up one of the (specific) systems described above you should now be ready to test. The instructions below show how to do so for MoCap and VIO systems If you have an Optitrack system you can use "),a("a",{attrs:{href:"https://github.com/ros-drivers/mocap_optitrack",target:"_blank",rel:"noopener noreferrer"}},[e._v("mocap_optitrack"),a("OutboundLink")],1),e._v(" node which streams the object pose on a ROS topic already in ENU. With a remapping you can directly publish it on "),a("code",[e._v("mocap_pose_estimate")]),e._v(" as it is without any transformation and MAVROS will take care of NED conversions.")]),e._v(" "),a("p",[e._v("The MAVROS odometry plugin makes it easy to handle the coordinate frames. It uses ROS's tf package. Your external pose system might have a completely different frame convention that does not match the one of PX4. The body frame of the external pose estimate can depend on how you set the body frame in the MOCAP software or on how you mount the VIO sensor on the drone. The MAVROS odometry plugin needs to know how the external pose's child frame is oriented with respect to either the airframe's FRD or FLU body frame known by MAVROS. You therefore have to add the external pose's body frame to the tf tree. This can be done by including an adapted version of the following line into your ROS launch file.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  <node pkg="tf" type="static_transform_publisher" name="tf_baseLink_externalPoseChildFrame"\n        args="0 0 0 <yaw> <pitch> <roll> base_link <external_pose_child_frame> 1000"/>\n')])])]),a("p",[e._v("Make sure that you change the values of yaw, pitch and roll such that it properly attaches the external pose's body frame to the "),a("code",[e._v("base_link")]),e._v(" or "),a("code",[e._v("base_link_frd")]),e._v(". Have a look at the "),a("a",{attrs:{href:"http://wiki.ros.org/tf#static_transform_publisher",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf package"),a("OutboundLink")],1),e._v(" for further help on how to specify the transformation between the frames. You can use rviz to check if you attached the frame right. The name of the "),a("code",[e._v("external_pose_child_frame")]),e._v(" has to match the child_frame_id of your "),a("code",[e._v("nav_msgs/Odometry")]),e._v(" message. The same also applies for the reference frame of the external pose. You have to attach the reference frame of the external pose as child to either the "),a("code",[e._v("odom")]),e._v(" or "),a("code",[e._v("odom_frd")]),e._v(" frame. Adapt therefore the following code line accordingly.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  <node pkg="tf" type="static_transform_publisher" name="tf_odom_externalPoseParentFrame"\n        args="0 0 0 <yaw> <pitch> <roll> odom <external_pose_parent_frame> 1000"/>\n')])])]),a("p",[e._v("Put the robot on the ground and start streaming MoCap feedback. 油门杆推到最低并解锁。 油门杆推到最低并解锁。")]),e._v(" "),a("p",[e._v("此时，设置为位置控制模式。 如果切换成功，飞控会闪绿灯。 绿灯代表：你的外部位置信息已经注入到飞控中，并且位置控制模式已经切换成功。")]),e._v(" "),a("p",[a("a",{attrs:{id:"setup_specific_systems"}})]),e._v(" "),a("h2",{attrs:{id:"特定的系统设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特定的系统设置"}},[e._v("#")]),e._v(" 特定的系统设置")]),e._v(" "),a("h3",{attrs:{id:"光学跟踪-mocap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#光学跟踪-mocap"}},[e._v("#")]),e._v(" 光学跟踪 MoCap")]),e._v(" "),a("p",[e._v("油门杆居中，这是油门控制死区。 It is assumed that the MoCap system is calibrated. 同理对于另一个杆。")]),e._v(" "),a("h4",{attrs:{id:"设置-motive-mocap-软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-motive-mocap-软件"}},[e._v("#")]),e._v(" 设置 "),a("em",[e._v("Motive")]),e._v(" mocap 软件")]),e._v(" "),a("ul",[a("li",[e._v("将无人机的前进方向与 "),a("a",{attrs:{href:"https://v20.wiki.optitrack.com/index.php?title=Template:Coordinate_System",target:"_blank",rel:"noopener noreferrer"}},[e._v("system + x-axiss"),a("OutboundLink")],1),e._v(" 对齐")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=1e6Qqxqe-k0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Define a rigid body in the Motive software"),a("OutboundLink")],1),e._v("。 "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=1e6Qqxqe-k0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Define a rigid body in the Motive software"),a("OutboundLink")],1),e._v(". Give the robot a name that does not contain spaces, e.g. "),a("code",[e._v("robot1")]),e._v(" instead of "),a("code",[e._v("Rigidbody 1")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=yYRNG58zPFo",target:"_blank",rel:"noopener noreferrer"}},[e._v("启用帧广播和 VRPN 流"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v('将 "向上" 轴设置为 z 轴（默认值为 y）')])]),e._v(" "),a("h4",{attrs:{id:"将数据输入-ros-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将数据输入-ros-2"}},[e._v("#")]),e._v(" 将数据输入 ROS")]),e._v(" "),a("ul",[a("li",[e._v("安装 "),a("code",[e._v("vrpn_client_ros")]),e._v(" 包")]),e._v(" "),a("li",[e._v("You can get each rigid body pose on an individual topic by running bash roslaunch vrpn_client_ros sample.launch server:="),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("roslaunch vrpn_client_ros sample.launch server:"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("mocap machine ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])]),e._v(" "),a("p",[e._v("If you named the rigidbody as "),a("code",[e._v("robot1")]),e._v(", you will get a topic like "),a("code",[e._v("/vrpn_client_node/robot1/pose")])]),e._v(" "),a("h4",{attrs:{id:"重新映射-重新映射位置数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新映射-重新映射位置数据"}},[e._v("#")]),e._v(" 重新映射/重新映射位置数据")]),e._v(" "),a("p",[e._v("MAVROS provides a plugin to relay pose data published on "),a("code",[e._v("/mavros/vision_pose/pose")]),e._v(" to PX4. Assuming that MAVROS is running, you just need to "),a("strong",[e._v("remap")]),e._v(" the pose topic that you get from MoCap "),a("code",[e._v("/vrpn_client_node/<rigid_body_name>/pose")]),e._v(" directly to "),a("code",[e._v("/mavros/vision_pose/pose")]),e._v(". Note that there is also a "),a("code",[e._v("mocap")]),e._v(" topic that MAVROS provides to feed "),a("code",[e._v("ATT_POS_MOCAP")]),e._v(" to PX4, but it is not applicable for EKF2. However, it is applicable with LPE.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Remapping pose topics is covered above "),a("a",{attrs:{href:"#relaying_pose_data_to_px4"}},[e._v("Relaying pose data to PX4")]),e._v(" ("),a("code",[e._v("/vrpn_client_node/<rigid_body_name>/pose")]),e._v(" is of type "),a("code",[e._v("geometry_msgs/PoseStamped")]),e._v(").")])]),e._v(" "),a("p",[e._v("Assuming that you have configured EKF2 parameters as described above, PX4 now is set and fusing MoCap data.")]),e._v(" "),a("p",[e._v("You are now set to proceed to the first flight.")]),e._v(" "),a("h2",{attrs:{id:"第一次飞行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一次飞行"}},[e._v("#")]),e._v(" 第一次飞行")]),e._v(" "),a("p",[e._v("After setting up one of the (specific) systems described above you should now be ready to test. The instructions below show how to do so for MoCap and VIO systems")]),e._v(" "),a("h3",{attrs:{id:"mocap-first-flight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mocap-first-flight"}},[e._v("#")]),e._v(" MoCap First Flight")]),e._v(" "),a("p",[e._v("Be sure to perform the following checks before your first flight:")]),e._v(" "),a("ul",[a("li",[e._v("Set the PX4 parameter "),a("code",[e._v("MAV_ODOM_LP")]),e._v(" to 1. PX4 will then stream back the received external pose as MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ODOMETRY",target:"_blank",rel:"noopener noreferrer"}},[e._v("ODOMETRY"),a("OutboundLink")],1),e._v(" messages.")]),e._v(" "),a("li",[e._v("You can check these MAVLink messages with the "),a("em",[e._v("QGroundControl")]),e._v(" "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Inspector"),a("OutboundLink")],1),e._v(" In order to do this, yaw the vehicle until the quaternion of the "),a("code",[e._v("ODOMETRY")]),e._v(" message is very close to a unit quaternion. (w=1, x=y=z=0)")]),e._v(" "),a("li",[e._v("At this point the body frame is aligned with the reference frame of the external pose system. If you do not manage to get a quaternion close to the unit quaternion without rolling or pitching your vehicle, your frame probably still have a pitch or roll offset. Do not proceed if this is the case and check your coordinate frames again.")]),e._v(" "),a("li",[e._v("Once aligned you can pick the vehicle up from the ground and you should see the position's z coordinate decrease. Moving the vehicle in forward direction, should increase the position's x coordinate. While moving the vehicle to the right should increase the y coordinate. In the case you send also linear velocities from the external pose system, you should also check the linear velocities. Check that the linear velocities are in expressed in the "),a("em",[e._v("FRD")]),e._v(" body frame reference frame.")]),e._v(" "),a("li",[e._v("Set the PX4 parameter "),a("code",[e._v("MAV_ODOM_LP")]),e._v(" back to 0. PX4 will stop streaming this message back.")])]),e._v(" "),a("p",[e._v("If those steps are consistent, you can try your first flight.")]),e._v(" "),a("p",[e._v("Put the robot on the ground and start streaming MoCap feedback. Lower your left (throttle) stick and arm the motors.")]),e._v(" "),a("p",[e._v("At this point, with the left stick at the lowest position, switch to position control. You should have a green light. The green light tells you that position feedback is available and position control is now activated.")]),e._v(" "),a("p",[e._v("Put your left stick at the middle, this is the dead zone. With this stick value, the robot maintains its altitude; raising the stick will increase the reference altitude while lowering the value will decrease it. Same for right stick on x and y.")]),e._v(" "),a("p",[e._v("Increase the value of the left stick and the robot will take off, put it back to the middle right after. Check if it is able to keep its position.")]),e._v(" "),a("p",[e._v("If it works, you may want to set up an "),a("RouterLink",{attrs:{to:"/zh/ros/offboard_control.html"}},[e._v("offboard")]),e._v(" experiment by sending position-setpoint from a remote ground station.")],1)])}),[],!1,null,null,null);t.default=r.exports},369:function(e,t,o){e.exports=o.p+"assets/img/ekf2_ev_delay_tuning.e77364d5.png"},394:function(e,t,o){e.exports=o.p+"assets/img/ref_frames.b0d97b5d.png"}}]);