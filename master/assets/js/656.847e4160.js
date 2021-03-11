(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{2356:function(_,e,t){"use strict";t.r(e);var a=t(18),r=Object(a.a)({},(function(){var _=this,e=_.$createElement,a=_._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"多旋翼的加加速度限制型轨迹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼的加加速度限制型轨迹"}},[_._v("#")]),_._v(" 多旋翼的加加速度限制型轨迹")]),_._v(" "),a("p",[_._v("加加速度有限的轨迹类型能响应用户摇杆输入或任务的变化（例如：航拍，测绘，货运）并为机体提供平滑的运动。 它能产生对称的平滑 S-曲线使加加速度和加速度的极限始终得到保证。")]),_._v(" "),a("p",[_._v("此轨迹类型始终在"),a("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[_._v("任务模式")]),_._v("下启用。 若要在"),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("定点模式")]),_._v("启用，请设置参数："),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[_._v("MPC_POS_MODE=3")]),_._v("。")],1),_._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),a("p",[_._v("在位置模式下，默认使用加加速度限制型轨迹。 但它可能不适合于那些需要较快响应的机体/使用案例——例如穿越机。")])]),_._v(" "),a("h2",{attrs:{id:"轨迹生成器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轨迹生成器"}},[_._v("#")]),_._v(" 轨迹生成器")]),_._v(" "),a("p",[_._v("下图显示了具有如下约束的典型加加速度限制剖面：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("jMax")]),_._v("：最大抖动")]),_._v(" "),a("li",[a("code",[_._v("a0")]),_._v("：初始加速度")]),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v("：最大加速度")]),_._v(" "),a("li",[a("code",[_._v("a3")]),_._v("：最终加速度（始终为 0）")]),_._v(" "),a("li",[a("code",[_._v("v0")]),_._v("：初始速度")]),_._v(" "),a("li",[a("code",[_._v("vRef")]),_._v("：期望速度")])]),_._v(" "),a("p",[_._v("其中，约束 "),a("code",[_._v("jMax")]),_._v("、"),a("code",[_._v("aMax")]),_._v(" 由用户通过参数页配置，在手动定点控制和自动模式下可能有所不同。")]),_._v(" "),a("p",[_._v("所得的速度剖面通常称为“S-曲线”。")]),_._v(" "),a("p",[a("img",{attrs:{src:t(647),alt:"加加速度限制型轨迹"}})]),_._v(" "),a("h2",{attrs:{id:"手动模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动模式"}},[_._v("#")]),_._v(" 手动模式")]),_._v(" "),a("p",[_._v("在手动定点模式下，通过摇杆控制速度，摇杆的最大行程对应 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_VEL_MANUAL"}},[_._v("MPC_VEL_MANUAL")]),_._v(" 定义的最大速度。")],1),_._v(" "),a("h3",{attrs:{id:"约束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#约束"}},[_._v("#")]),_._v(" 约束")]),_._v(" "),a("p",[_._v("XY平面：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("jMax")]),_._v("："),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[_._v("MPC_JERK_MAX")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v(": "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_HOR_MAX"}},[_._v("MPC_ACC_HOR_MAX")])],1)]),_._v(" "),a("p",[_._v("Z轴：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("jMax")]),_._v("："),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[_._v("MPC_JERK_MAX")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v("（上升动作）："),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_UP_MAX"}},[_._v("MPC_ACC_UP_MAX")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v("（下降动作）："),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_DOWN_MAX"}},[_._v("MPC_ACC_DOWN_MAX")])],1)]),_._v(" "),a("h2",{attrs:{id:"自动模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动模式"}},[_._v("#")]),_._v(" 自动模式")]),_._v(" "),a("p",[_._v("在自动模式下，所需的速度是 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_CRUISE"}},[_._v("MPC_XY_CRUISE")]),_._v("，但该值会根据到下一个航点的距离、航线中可能的最大速度以及所需的最大加速度和加加速度自动调整。")],1),_._v(" "),a("h3",{attrs:{id:"约束-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#约束-2"}},[_._v("#")]),_._v(" 约束")]),_._v(" "),a("p",[_._v("XY平面：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("jMax")]),_._v("："),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_JERK_AUTO"}},[_._v("MPC_JERK_AUTO")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v("："),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_HOR"}},[_._v("MPC_ACC_HOR")])],1)]),_._v(" "),a("p",[_._v("Z轴：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("jMax")]),_._v("："),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_JERK_AUTO"}},[_._v("MPC_JERK_AUTO")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v("（上升动作）："),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_UP_MAX"}},[_._v("MPC_ACC_UP_MAX")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v("（下降动作）："),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_DOWN_MAX"}},[_._v("MPC_ACC_DOWN_MAX")])],1)]),_._v(" "),a("p",[_._v("渐进某个航点时的距离-速度增益：")]),_._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_TRAJ_P"}},[_._v("MPC_XY_TRAJ_P")])],1)]),_._v(" "),a("h3",{attrs:{id:"相关参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关参数"}},[_._v("#")]),_._v(" 相关参数")]),_._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_VEL_MAX"}},[_._v("MPC_XY_VEL_MAX")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[_._v("MPC_Z_VEL_MAX_UP")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[_._v("MPC_Z_VEL_MAX_DN")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[_._v("MPC_TKO_SPEED")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[_._v("MPC_LAND_SPEED")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_ALT1"}},[_._v("MPC_LAND_ALT1")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_ALT2"}},[_._v("MPC_LAND_ALT2")])],1)])])}),[],!1,null,null,null);e.default=r.exports},647:function(_,e,t){_.exports=t.p+"assets/img/jerk_limited_trajectory_1d.c678e2f8.png"}}]);