(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{2886:function(t,_,e){"use strict";e.r(_);var a=e(19),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"位置模式-多旋翼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位置模式-多旋翼"}},[t._v("#")]),t._v(" 位置模式（多旋翼）")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_difficulty"}},[a("img",{attrs:{src:e(328),title:"飞行难度：简单",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_manual"}},[a("img",{attrs:{src:e(327),title:"需要手动/遥控器控制",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:e(326),title:"需要定位锁定（例如GPS）",width:"30px"}})])],1),t._v(" "),a("p",[a("em",[t._v("位置")]),t._v(" 是一种简单难度的遥控器模式，该模式下横滚和俯仰摇杆控制机体的前后左右方向相对于地面的加速度（类似于车的油门踏板），油门控制上升下降的速度。 当摇杆释放/居中时，机体将主动制动，保持水平，并锁定到 3D 空间中的位置 — 补偿风和其他力。 摇杆满偏时，机体以"),a("a",{attrs:{href:"#MPC_ACC_HOR_MAX"}},[t._v("MPC_ACC_HOR_MAX")]),t._v("开始加速减小到达到最终的速度"),a("a",{attrs:{href:"#MPC_VEL_MANUAL"}},[t._v("MPC_VEL_MANUAL")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("位置模式对于新手是最安全的手动模式。 不同于"),a("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[t._v("定高模式")]),t._v("和"),a("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[t._v("手动/自稳模式")]),t._v("，机体在摇杆中位时会停止，而不是继续直到风阻使其减速。")],1)]),t._v(" "),a("p",[t._v("下图直观地显示了模式行为（对于美国手的遥控器）。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(379),alt:"多旋翼位置模式"}})]),t._v(" "),a("h3",{attrs:{id:"降落"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降落"}},[t._v("#")]),t._v(" 降落")]),t._v(" "),a("p",[t._v("该模式中降落是很容易的：")]),t._v(" "),a("ol",[a("li",[t._v("使用横滚和俯仰杆控制无人机水平位置于降落点上方。")]),t._v(" "),a("li",[t._v("松开横滚和俯仰杆并给予足够的时间使其完全停止。")]),t._v(" "),a("li",[t._v("轻轻下拉油门杆直到机体触碰地面。")]),t._v(" "),a("li",[t._v("将油门杆一直向下拉以促进和加快着陆检测。")]),t._v(" "),a("li",[t._v("机体将降低螺旋桨推力，检测地面并"),a("RouterLink",{attrs:{to:"/zh/advanced_config/prearm_arm_disarm.html#auto-disarming"}},[t._v("自动落锁")]),t._v("（默认）。")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("虽然在校准良好的机体上非常罕见，但有时着陆可能会出现问题。")]),t._v(" "),a("ul",[a("li",[t._v("如果机体无法停止水平移动：\n"),a("ul",[a("li",[t._v("您仍然可以在"),a("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[t._v("高度模式")]),t._v("下在控制降落。 方法与上述相同，除了您必须使用横滚和俯仰杆手动确保机体保持在降落点上方。")],1),t._v(" "),a("li",[t._v("降落后检查 GPS 和磁罗盘方向，并校准。")])])]),t._v(" "),a("li",[t._v("如果机体未检测到地面/降落并落锁。\n"),a("ul",[a("li",[t._v("机体落地后切换到"),a("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[t._v("手动/自稳模式")]),t._v("，保持油门杆低位，并使用手势或其他命令手动落锁。 或者，当机体已经在地面上时，您也可以使用断电开关。")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"技术摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术摘要"}},[t._v("#")]),t._v(" 技术摘要")]),t._v(" "),a("p",[t._v("遥控模式下，横滚、俯仰、油门 (RPT) 杆控制相应轴/方向的运动。 摇杆居中使机体水平并将其保持在固定的高度和位置并抗风。")]),t._v(" "),a("ul",[a("li",[t._v('摇杆处于滚动、俯仰、油门杆中位（遥控死区<a href="../advanced_config/parameter_reference.md#MPC_HOLD_DZ"MPC_HOLD_DZ'),t._v("内）时，机体保持 x、y、z 位置稳定，抵抗任意干扰，如风。")]),t._v(" "),a("li",[t._v("中位以外：\n"),a("ul",[a("li",[t._v("横滚/俯仰杆控制机体左右和前后方向（分别）在地面上的水平加速度。")]),t._v(" "),a("li",[t._v("油门杆控制上升下降速度。")]),t._v(" "),a("li",[t._v("偏航杆控制水平面上方的角旋转速率。")])])]),t._v(" "),a("li",[t._v("起飞：\n"),a("ul",[a("li",[t._v("在地面时，如果油门杆升高到 62.5% 以上（从底部的全范围），机体将起飞。")])])]),t._v(" "),a("li",[t._v("降落：\n"),a("ul",[a("li",[t._v("当靠近地面("),a("a",{attrs:{href:"#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")]),t._v(")时，水平速度受到限制("),a("a",{attrs:{href:"#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")]),t._v(")。")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("ul",[a("li",[t._v("手动输入信号是必须的（遥控器，或通过 MAVLink 的游戏手柄/拇指摇杆）。")]),t._v(" "),a("li",[t._v("此模式需要 GPS。")])])]),t._v(" "),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#multicopter-position-control"}},[t._v("多旋翼位置控制")]),t._v("组的所有参数都与位置模式有关。 下面列出了一些特别值得注意的参数。")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"MPC_HOLD_DZ"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[t._v("MPC_HOLD_DZ")])],1),t._v(" "),a("td",[t._v("启用位置保持的摇杆死区。 默认值：0.1（摇杆全行程的 10％）。")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),a("td",[t._v("最大垂直上升速度。 默认：3 m/s。")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),a("td",[t._v("最大垂直下降速度。 默认：1 m/s。")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_LAND_VEL_XY"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")])],1),t._v(" "),a("td",[t._v("当接近地面时（距离地面 "),a("a",{attrs:{href:"#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")]),t._v(" 米，或者距离起始位置距离不详），水平速度受到限制。 默认：10 m/s")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_LAND_ALT1"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_ALT1"}},[t._v("MPC_LAND_ALT1")])],1),t._v(" "),a("td",[t._v("触发第一阶段降速的高度。 与最大允许的水平速度设定值相关。 默认10米")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_LAND_ALT2"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")])],1),t._v(" "),a("td",[t._v("触发第二阶段降速的高度。 这阶段最大水平速度限制为 "),a("a",{attrs:{href:"#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")]),t._v("。 默认 5 米。")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RCX_DZ"}}),a("code",[t._v("RCX_DZ")])]),t._v(" "),a("td",[t._v("通道 X 的遥控死区。油门的 X 值取决于"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v(" RC_MAP_THROTTLE ")]),t._v("的值。 例如，如果油门是通道4，则"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v("RC4_DZ ")]),t._v("指定死区。")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_xxx"}}),a("code",[t._v("MPC_XXXX")])]),t._v(" "),a("td",[t._v("大多数MPC_xxx参数会影响此模式下的飞行行为（至少在某种程度上）。 例如，"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(" 定义飞机悬停时的推力。")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_POS_MODE"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")])],1),t._v(" "),a("td",[t._v("从摇杆输入到机体动作的转换策略。 从 PX4 v1.12 开始，默认值 (4) 是操纵杆位置控制加速度（类似于汽车油门踏板）。 其他选项允许操纵杆偏转直接控制地面速度，有或没有平滑和加速度限制。")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_ACC_HOR_MAX"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_HOR_MAX"}},[t._v("MPC_ACC_HOR_MAX")])],1),t._v(" "),a("td",[t._v("最大水平加速度。")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_VEL_MANUAL"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_VEL_MANUAL"}},[t._v("MPC_VEL_MANUAL")])],1),t._v(" "),a("td",[t._v("最大水平速度。")])])])]),t._v(" "),a("h2",{attrs:{id:"附加信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附加信息"}},[t._v("#")]),t._v(" 附加信息")]),t._v(" "),a("h3",{attrs:{id:"位置丢失-安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位置丢失-安全"}},[t._v("#")]),t._v(" 位置丢失/安全")]),t._v(" "),a("p",[t._v("位置模式依赖于一个可接受的位置估计。 如果估计值低于可接受的水平，例如由于 GPS 丢失，这可能会触发位置 (GPS) 丢失故障保护 根据配置，是否有遥控器，以及是否有足够的高度估计，PX4 可能会切换到高度模式、手动模式、降落模式或终止。")])])}),[],!1,null,null,null);_.default=r.exports},326:function(t,_,e){t.exports=e.p+"assets/img/position_fixed.c1403cf0.svg"},327:function(t,_,e){t.exports=e.p+"assets/img/remote_control.e49232a6.svg"},328:function(t,_){t.exports="data:image/png;base64,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"},379:function(t,_,e){t.exports=e.p+"assets/img/position_MC.c6191ec9.png"}}]);