(window.webpackJsonp=window.webpackJsonp||[]).push([[1146],{2372:function(_,t,v){"use strict";v.r(t);var e=v(18),i=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"多旋翼设定值调整-轨迹生成器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼设定值调整-轨迹生成器"}},[_._v("#")]),_._v(" 多旋翼设定值调整（轨迹生成器）")]),_._v(" "),v("p",[_._v("本文概述了改变"),v("em",[_._v("用户体验")]),_._v("的多旋翼参数如何调整：比如机体对摇杆的响应快慢，执行任务过程中的方向改变快慢，最大速度等。")]),_._v(" "),v("p",[_._v("换言之，本话题解释了如何调整那些影响生成"),v("em",[_._v("期望值")]),_._v("的参数，而不是那些影响机体"),v("em",[_._v("跟踪")]),_._v("期望值的参数。")]),_._v(" "),v("p",[_._v("生成这些设定点的算法称为“轨迹生成器”。")]),_._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),v("p",[_._v("本指南适用于高级用户/专家。")])]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),v("p",[_._v("在做任何本文所述的调校"),v("em",[_._v("之前")]),_._v("，请先按照"),v("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[_._v("多旋翼 PID 调整指南")]),_._v("中的说明进行操作。 请不要试图通过调整这些参数来修复错误的轨迹或抖动。")],1)]),_._v(" "),v("h2",{attrs:{id:"综述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[_._v("#")]),_._v(" 综述")]),_._v(" "),v("p",[_._v("P/PID控制器的输入是飞行器尝试跟踪的"),v("em",[_._v("期望设定值")]),_._v("。 "),v("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[_._v("PID 调参")]),_._v("（“底层调参”）旨在减少期望设定值和机体状态估计值之间的误差。")],1),_._v(" "),v("p",[_._v("发送给 P/PID 控制器的"),v("em",[_._v("期望设定值")]),_._v("本身是根据摇杆位置（在遥控模式下）或任务指令的"),v("em",[_._v("要求设定值")]),_._v("计算的。 要求设定值可能会改变得很快（例如，如果用户“一下子”将摇杆从零移动到最大值）。 如果缓慢调整相应的目标设定值, 飞行器的特性就会更好。")]),_._v(" "),v("p",[v("em",[_._v("期望值调试")]),_._v(' ("高层调试") 用来映射 '),v("em",[_._v("要求")]),_._v(" 和 "),v("em",[_._v("目的")]),_._v(" 期望值之间的关系- 比如在目的期望值和要求期望值之间加个“斜率”.")]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),v("p",[_._v("P/PID 增益<0>整定不当会导致机体不稳定。 "),v("em",[_._v("设定值")]),_._v("整定不当不会导致机体不稳定，但可能会导致产生非常大的加加速度或对设定值变化地响应不灵敏。 :::")]),v("p"),_._v(" "),v("p",[v("span",{attrs:{id:"modes"}})]),_._v(" "),v("h2",{attrs:{id:"飞行模式轨迹支持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式轨迹支持"}},[_._v("#")]),_._v(" 飞行模式轨迹支持")]),_._v(" "),v("p",[v("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[_._v("任务模式")]),_._v("始终使用"),v("RouterLink",{attrs:{to:"/zh/config_mc/mc_jerk_limited_type_trajectory.html"}},[_._v("加加速度限制型")]),_._v("轨迹。")],1),_._v(" "),v("p",[v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v("支持下文列出的所有"),v("a",{attrs:{href:"#trajectory_implementation"}},[_._v("轨迹类型")]),_._v("。 默认情况下使用加加速度限制型<0>轨迹；若要使用其他轨迹类型可以利用 "),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[_._v("MPC_POS_MOD")]),_._v(" 设置。")],1),v("p"),_._v(" "),v("p",[v("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[_._v("定高模式")]),_._v("同样使用 "),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[_._v("MPC_POS_MODE")]),_._v(" 所指的"),v("a",{attrs:{href:"#trajectory_implementation"}},[_._v("轨迹类型")]),_._v("，但"),v("em",[_._v("仅")]),_._v("用于平滑垂直分量（即仅在控制高度时使用）。")],1),_._v(" "),v("p",[_._v("其他模式不支持轨迹调整。")]),_._v(" "),v("p",[v("span",{attrs:{id:"trajectory_implementation"}})]),_._v(" "),v("h2",{attrs:{id:"轨迹实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#轨迹实现"}},[_._v("#")]),_._v(" 轨迹实现")]),_._v(" "),v("p",[_._v("下表"),v("em",[_._v("概述")]),_._v("了不同类型的轨迹实现：")]),_._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/zh/config_mc/mc_jerk_limited_type_trajectory.html"}},[_._v("加加速度限制型")]),_._v(" （默认）\n"),v("ul",[v("li",[_._v("当需要平滑运动时使用（例如：航拍、测绘、货运）。")]),_._v(" "),v("li",[_._v("生成对称平滑 S-曲线，使加加速度和加速度的极限始终得到保证。")]),_._v(" "),v("li",[_._v("可能不适合于那些需要较快响应的机体/使用案例——例如穿越机。")]),_._v(" "),v("li",[_._v("通过设置 "),v("code",[_._v("MPC_POS_MODE=3")]),_._v(" 在位置模式中启用。")])])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/zh/config_mc/mc_slew_rate_type_trajectory.html"}},[_._v("旋转速率型")]),_._v(" "),v("ul",[v("li",[_._v("当快速响应比平滑运动更重要时使用（例如：位置保持状态下的激烈飞行)。")]),_._v(" "),v("li",[_._v("这是一个简单的实现方法，在这种情况下，加加速度和加速度通过旋转速率进行限制。")]),_._v(" "),v("li",[_._v("它允许基于用户意图的不对称配置（平稳加速和快速停止）。")]),_._v(" "),v("li",[_._v("加加速度和加速度限制不是硬性约束。")]),_._v(" "),v("li",[_._v("通过设置 "),v("code",[_._v("MPC_POS_MODE=1")]),_._v(" 在位置模式中启用。")])])],1),_._v(" "),v("li",[v("strong",[_._v("简单位置控制")]),_._v(" "),v("ul",[v("li",[_._v("将摇杆直接映射为速度设置值而不进行平滑处理。")]),_._v(" "),v("li",[_._v("对速度控制调整非常有用。")]),_._v(" "),v("li",[_._v("通过设置 "),v("code",[_._v("MPC_POS_MODE=0")]),_._v(" 在位置模式中启用。")])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);