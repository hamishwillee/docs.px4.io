(window.webpackJsonp=window.webpackJsonp||[]).push([[1557],{2842:function(t,_,e){"use strict";e.r(_);var v=e(19),i=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"多旋翼设定值调整-轨迹生成器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼设定值调整-轨迹生成器"}},[t._v("#")]),t._v(" 多旋翼设定值调整（轨迹生成器）")]),t._v(" "),e("p",[t._v("本文概述了改变"),e("em",[t._v("用户体验")]),t._v("的多旋翼参数如何调整：比如机体对摇杆的响应快慢，执行任务过程中的方向改变快慢，最大速度等。")]),t._v(" "),e("p",[t._v("换言之，本话题解释了如何调整那些影响生成"),e("em",[t._v("期望值")]),t._v("的参数，而不是那些影响机体"),e("em",[t._v("跟踪")]),t._v("期望值的参数。")]),t._v(" "),e("p",[t._v("生成这些设定点的算法称为“轨迹生成器”。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("本指南适用于高级用户/专家。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("在做任何本文所述的调校"),e("em",[t._v("之前")]),t._v("，请先按照"),e("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("多旋翼 PID 调整指南")]),t._v("中的说明进行操作。 请不要试图通过调整这些参数来修复错误的轨迹或抖动。")],1)]),t._v(" "),e("h2",{attrs:{id:"综述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[t._v("#")]),t._v(" 综述")]),t._v(" "),e("p",[t._v("P/PID控制器的输入是飞行器尝试跟踪的"),e("em",[t._v("期望设定值")]),t._v("。 "),e("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("PID 调参")]),t._v("（“底层调参”）旨在减少期望设定值和机体状态估计值之间的误差。")],1),t._v(" "),e("p",[t._v("发送给 P/PID 控制器的"),e("em",[t._v("期望设定值")]),t._v("本身是根据摇杆位置（在遥控模式下）或任务指令的"),e("em",[t._v("要求设定值")]),t._v("计算的。 要求设定值可能会改变得很快（例如，如果用户“一下子”将摇杆从零移动到最大值）。 如果缓慢调整相应的目标设定值, 飞行器的特性就会更好。")]),t._v(" "),e("p",[e("em",[t._v("期望值调试")]),t._v(' ("高层调试") 用来映射 '),e("em",[t._v("要求")]),t._v(" 和 "),e("em",[t._v("目的")]),t._v(" 期望值之间的关系- 比如在目的期望值和要求期望值之间加个“斜率”.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("P/PID 增益<0>整定不当会导致机体不稳定。 "),e("em",[t._v("设定值")]),t._v("整定不当不会导致机体不稳定，但可能会导致产生非常大的加加速度或对设定值变化地响应不灵敏。 :::")]),e("p"),t._v(" "),e("p",[e("a",{attrs:{id:"modes"}})]),t._v(" "),e("h2",{attrs:{id:"飞行模式轨迹支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式轨迹支持"}},[t._v("#")]),t._v(" 飞行模式轨迹支持")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("任务模式")]),t._v("始终使用"),e("RouterLink",{attrs:{to:"/zh/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("加加速度限制型")]),t._v("轨迹。")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" supports all the "),e("a",{attrs:{href:"#trajectory-implementations"}},[t._v("trajectory types")]),t._v(" listed below. It uses the "),e("RouterLink",{attrs:{to:"/zh/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("Jerk-limited")]),t._v(" trajectory by default; other types can be set using "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v(".")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[t._v("Altitude mode")]),t._v(" similarly uses the "),e("a",{attrs:{href:"#trajectory-implementations"}},[t._v("trajectory types")]),t._v(" selected by "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v(", but "),e("em",[t._v("only")]),t._v(" for smoothing the vertical component (i.e. when controlling the altitude).")],1),t._v(" "),e("p",[t._v("其他模式不支持轨迹调整。")]),t._v(" "),e("h2",{attrs:{id:"轨迹实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#轨迹实现"}},[t._v("#")]),t._v(" 轨迹实现")]),t._v(" "),e("p",[t._v("The following list provides an "),e("em",[t._v("overview")]),t._v(" of the different trajectory implementations:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("加加速度限制型")]),t._v(" （默认）\n"),e("ul",[e("li",[t._v("当需要平滑运动时使用（例如：航拍、测绘、货运）。")]),t._v(" "),e("li",[t._v("生成对称平滑 S-曲线，使加加速度和加速度的极限始终得到保证。")]),t._v(" "),e("li",[t._v("可能不适合于那些需要较快响应的机体/使用案例——例如穿越机。")]),t._v(" "),e("li",[t._v("通过设置 "),e("code",[t._v("MPC_POS_MODE=3")]),t._v(" 在位置模式中启用。")])])],1),t._v(" "),e("li",[e("strong",[t._v("Simple position control")]),t._v(" "),e("ul",[e("li",[t._v("Sticks map directly to velocity setpoints without smoothing.")]),t._v(" "),e("li",[t._v("Useful for velocity control tuning.")]),t._v(" "),e("li",[t._v("Set in position mode using "),e("code",[t._v("MPC_POS_MODE=0")]),t._v(".")])])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);