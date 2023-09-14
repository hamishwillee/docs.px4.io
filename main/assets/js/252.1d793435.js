(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{3272:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"飞行控制器-传感器方向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞行控制器-传感器方向"}},[t._v("#")]),t._v(" 飞行控制器/传感器方向")]),t._v(" "),a("p",[t._v("默认的飞行器（如果具有外部罗盘）应该向上安装在机架上部，箭头朝向飞行器的前方。 如果板载或外部罗盘被安装在其他方向，您需要在固件中配置。")]),t._v(" "),a("h2",{attrs:{id:"计算朝向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算朝向"}},[t._v("#")]),t._v(" 计算朝向")]),t._v(" "),a("p",[t._v("ROLL, PITCH and/or YAW offsets of the flight controller are calculated relative to the vehicle around the forward (x), right (y), down (z) axes.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(387),alt:"机架航向"}})]),t._v(" "),a("p",[t._v("The axes to rotate around stay the same from one rotation step to the next one. So the frame to perform the rotation in stays fixed. This is also known as "),a("em",[t._v("extrinsic rotation")]),t._v(".")]),t._v(" "),a("img",{staticStyle:{width:"600px"},attrs:{src:o(359)}}),t._v(" "),a("p",[t._v("For example, the vehicles shown below have rotations around the z-axis (i.e. yaw only) corresponding to: "),a("code",[t._v("ROTATION_NONE")]),t._v(", "),a("code",[t._v("ROTATION_YAW_90")]),t._v(","),a("code",[t._v("ROTATION_YAW_180")]),t._v(","),a("code",[t._v("ROTATION_YAW_270")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:o(653),alt:"Yaw 旋转"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("For a VTOL Tailsitter airframe set the vehicle orientation according to its multirotor configuration (i.e. relative to the vehicle during, takeoff, hovering, landing) for all sensor calibrations.")]),t._v(" "),a("p",[t._v("The axis are normally relative to the orientation of the vehicle during steady forward flight. For more information see "),a("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#heading-and-directions"}},[t._v("Basic Concepts")]),t._v(". :::")],1),t._v(" "),a("h2",{attrs:{id:"设置朝向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置朝向"}},[t._v("#")]),t._v(" 设置朝向")]),t._v(" "),a("p",[t._v("To set the orientations:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Start "),a("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),a("li",[a("p",[t._v("Select the "),a("strong",[t._v("Gear")]),t._v(" icon (Vehicle Setup) in the top toolbar and then "),a("strong",[t._v("Sensors")]),t._v(" in the sidebar.")])]),t._v(" "),a("li",[a("p",[t._v("Select the "),a("strong",[t._v("Set Orientations")]),t._v(" button.")]),t._v(" "),a("img",{staticStyle:{width:"600px"},attrs:{src:o(654)}})]),t._v(" "),a("li",[a("p",[t._v("Select the "),a("strong",[t._v("AutoPilot Orientation")]),t._v(" (as "),a("a",{attrs:{href:"#calculating-orientation"}},[t._v("calculated above")]),t._v(").")]),t._v(" "),a("img",{staticStyle:{width:"200px"},attrs:{src:o(655)}})]),t._v(" "),a("li",[a("p",[t._v("Select the "),a("strong",[t._v("External Compass Orientation")]),t._v(" in the same way (this option will only be displayed if your vehicle has an external compass).")])]),t._v(" "),a("li",[a("p",[t._v("Press "),a("strong",[t._v("OK")]),t._v(".")])])]),t._v(" "),a("h2",{attrs:{id:"优化调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化调整"}},[t._v("#")]),t._v(" 优化调整")]),t._v(" "),a("p",[t._v("You can use "),a("RouterLink",{attrs:{to:"/zh/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")]),t._v(" to compensate for small miss-alignments in controller orientation and to level the horizon in flight view.")],1),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/advanced_flight_controller_orientation_leveling.html"}},[t._v("Advanced Orientation Tuning")]),t._v("（仅高级用户）。")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/sensors_px4.html#flight_controller_orientation",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide > Sensors"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=r.exports},359:function(t,e,o){t.exports=o.p+"assets/img/fc_orientation_1.89f64a22.png"},387:function(t,e,o){t.exports=o.p+"assets/img/frame_heading.30556a25.png"},653:function(t,e,o){t.exports=o.p+"assets/img/yaw_rotation.c0ff8b97.png"},654:function(t,e,o){t.exports=o.p+"assets/img/sensor_orientation_set_orientations.d19d399a.jpg"},655:function(t,e,o){t.exports=o.p+"assets/img/sensor_orientation_selector_values.7f780880.jpg"}}]);