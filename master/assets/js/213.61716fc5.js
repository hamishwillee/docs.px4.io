(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{2807:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"飞行控制器-传感器方向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞行控制器-传感器方向"}},[t._v("#")]),t._v(" 飞行控制器/传感器方向")]),t._v(" "),a("p",[t._v("默认的飞行器（如果具有外部罗盘）应该向上安装在机架上部，箭头朝向飞行器的前方。 如果板载或外部罗盘被安装在其他方向，您需要在固件中配置。")]),t._v(" "),a("h2",{attrs:{id:"计算朝向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算朝向"}},[t._v("#")]),t._v(" 计算朝向")]),t._v(" "),a("p",[t._v("ROLL, PITCH and/or YAW offsets of the flight controller are calculated relative to the vehicle around the forward (x), right (y), down (z) axes.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(371),alt:"机架航向"}})]),t._v(" "),a("p",[t._v("The axes to rotate around stay the same from one rotation step to the next one. So the frame to perform the rotation in stays fixed. This is also known as "),a("em",[t._v("extrinsic rotation")]),t._v(".")]),t._v(" "),a("img",{staticStyle:{width:"600px"},attrs:{src:o(345)}}),t._v(" "),a("p",[t._v("For example, the vehicles shown below have rotations around the z-axis (i.e. yaw only) corresponding to: "),a("code",[t._v("ROTATION_NONE")]),t._v(", "),a("code",[t._v("ROTATION_YAW_90")]),t._v(","),a("code",[t._v("ROTATION_YAW_180")]),t._v(","),a("code",[t._v("ROTATION_YAW_270")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:o(641),alt:"Yaw 旋转"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("For a VTOL Tailsitter airframe set the vehicle orientation according to its multirotor configuration (i.e. relative to the vehicle during, takeoff, hovering, landing) for all sensor calibrations.")]),t._v(" "),a("p",[t._v("The axis are normally relative to the orientation of the vehicle during steady forward flight. For more information see "),a("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#heading-and-directions"}},[t._v("Basic Concepts")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"设置朝向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置朝向"}},[t._v("#")]),t._v(" 设置朝向")]),t._v(" "),a("p",[t._v("To set the orientations:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开 "),a("em",[t._v("QGroundControl")]),t._v(" 并连接上飞机。")])]),t._v(" "),a("li",[a("p",[t._v("在工具栏选择 "),a("strong",[t._v("齿轮")]),t._v(" 图标 (机体设置)，然后在侧边栏选择 "),a("strong",[t._v("传感器")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("选择 "),a("strong",[t._v("Set Orientations")]),t._v(" 按钮。 "),a("img",{staticStyle:{width:"600px"},attrs:{src:o(642)}})])]),t._v(" "),a("li",[a("p",[t._v("选择 "),a("strong",[t._v("自驾仪方向（AutoPilot Orientation）")]),t._v("（"),a("a",{attrs:{href:"#calculating-orientation"}},[t._v("之前计算的值")]),t._v("）。")]),t._v(" "),a("img",{staticStyle:{width:"200px"},attrs:{src:o(643)}})]),t._v(" "),a("li",[a("p",[t._v("同样的选择 "),a("strong",[t._v("外置罗盘方向（External Compass Orientation）")]),t._v("（只有当您的飞行器有外部罗盘时，才会显示此选项）。")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("strong",[t._v("OK")]),t._v("。")])])]),t._v(" "),a("h2",{attrs:{id:"优化调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化调整"}},[t._v("#")]),t._v(" 优化调整")]),t._v(" "),a("p",[t._v("You can use "),a("RouterLink",{attrs:{to:"/zh/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")]),t._v(" to compensate for small miss-alignments in controller orientation and to level the horizon in flight view.")],1),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/advanced_flight_controller_orientation_leveling.html"}},[t._v("Advanced Orientation Tuning")]),t._v("（仅高级用户）。")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#flight_controller_orientation",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 用户手册 > 传感器"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports},345:function(t,e,o){t.exports=o.p+"assets/img/fc_orientation_1.648b5eb0.png"},371:function(t,e,o){t.exports=o.p+"assets/img/frame_heading.f02fbdcf.png"},641:function(t,e,o){t.exports=o.p+"assets/img/yaw_rotation.1e9d2568.png"},642:function(t,e,o){t.exports=o.p+"assets/img/sensor_orientation_set_orientations.98aa6a72.jpg"},643:function(t,e,o){t.exports=o.p+"assets/img/sensor_orientation_selector_values.6538d207.jpg"}}]);