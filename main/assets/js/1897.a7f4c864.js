(window.webpackJsonp=window.webpackJsonp||[]).push([[1897],{3463:function(_,t,e){"use strict";e.r(t);var r=e(19),a=Object(r.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"fixed-wing-altitude-position-controller-tuning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-altitude-position-controller-tuning"}},[_._v("#")]),_._v(" Fixed-wing Altitude/Position Controller Tuning")]),_._v(" "),e("p",[_._v("本指南为调整飞行任务和高度/位置控制模式下所需的高级固定翼控制器提供一些帮助。 PX4 uses TECS for altitude and airspeed control, and NPFG for horizontal heading/position control.")]),_._v(" "),e("p",[_._v("调整时增益设置不当会使高度和航向控制不稳定。 因此，调节 TECS 增益的飞行员应该能够以稳定的控制模式飞行和降落飞机。\n:::")]),_._v(" "),e("p",[_._v("所有参数都记录在"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#fw-tecs"}},[_._v("参数参考")]),_._v("中。 本指南将介绍所有重要参数。\n:::")],1),_._v(" "),e("h2",{attrs:{id:"tecs-调节-高度和空速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tecs-调节-高度和空速"}},[_._v("#")]),_._v(" TECS 调节（高度和空速）")]),_._v(" "),e("p",[_._v("TECS（总能量控制系统）是一种用于固定翼飞机的制导算法，该算法通过协调油门和俯仰角设定值来控制飞机的高度和空速。 有关 TECS 算法和控制图的详细说明，请参阅"),e("RouterLink",{attrs:{to:"/zh/flight_stack/controller_diagrams.html"}},[_._v("控制框图")]),_._v("。")],1),_._v(" "),e("p",[_._v("调整 TECS 之前需要一个调整好的姿态控制器："),e("RouterLink",{attrs:{to:"/zh/config_fw/pid_tuning_guide_fixedwing.html"}},[_._v("PID调整指南")]),_._v("。")],1),_._v(" "),e("p",[_._v("调整 TECS 主要是正确地设置机身限制。 这些限制可以通过如下所述的一系列飞行操作确定的参数来指定。 Most of the maneuvers required the plane to be flown by a pilot in "),e("RouterLink",{attrs:{to:"/zh/flight_modes_fw/stabilized.html"}},[_._v("Stabilized flight mode")]),_._v(".")],1),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),e("p",[_._v("当飞行员飞行时，能有人帮助阅读和记录遥测数据时非常有益的。\n为了提高准确性，我们还建议您使用飞行日志中记录的数据来验证飞行期间获得的数据。")])]),_._v(" "),e("h4",{attrs:{id:"_1st-平衡条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1st-平衡条件"}},[_._v("#")]),_._v(" 1st：平衡条件")]),_._v(" "),e("p",[_._v("Fly in "),e("RouterLink",{attrs:{to:"/zh/flight_modes_fw/stabilized.html"}},[_._v("stabilized mode")]),_._v(" and find trim values for both throttle and pitch angle for level flight at trim airspeed. 使用油门去调节空速和俯仰以保持水平飞行。")],1),_._v(" "),e("p",[_._v("设置以下参数：")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[_._v("FW_AIRSPD_TRIM")]),_._v(" - 设置为操作过程中所需要的平衡空速。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_THR_TRIM"}},[_._v("FW_THR_CRUISE")]),_._v(" - 设置为以配平空速飞行所需要油门。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_PSP_OFF"}},[_._v("FW_PSP_OFF")]),_._v(" - 设置为维持水平飞行所需要俯仰角。")],1)]),_._v(" "),e("h4",{attrs:{id:"_2nd-空速和油门限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2nd-空速和油门限制"}},[_._v("#")]),_._v(" 2nd：空速和油门限制")]),_._v(" "),e("p",[_._v("Fly in "),e("RouterLink",{attrs:{to:"/zh/flight_modes_fw/stabilized.html"}},[_._v("stabilized mode")]),_._v(" and increase throttle while maintaining level flight using pitch control - until the vehicle reaches the maximum allowed airspeed.")],1),_._v(" "),e("p",[_._v("设置以下参数：")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_THR_MAX"}},[_._v("FW_THR_MAX")]),_._v(" - 设置水平飞行时到达最大空速所需油门。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_THR_MIN"}},[_._v("FW_THR_MIN")]),_._v(" - 设置为飞行时的最小油门。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[_._v("FW_AIRSPD_MAX")]),_._v(" - 水平飞行时以"),e("code",[_._v("FW_THR_MAX")]),_._v("得到的最大空速。")],1)]),_._v(" "),e("h4",{attrs:{id:"_3rd-俯仰和爬升速率限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3rd-俯仰和爬升速率限制"}},[_._v("#")]),_._v(" 3rd：俯仰和爬升速率限制")]),_._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),e("p",[_._v("请不要使用 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[_._v("FW_T_CLMB_MAX")]),_._v(", "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_SINK_MAX"}},[_._v("FW_T_SINK_MAX")]),_._v(" 或 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_SINK_MIN"}},[_._v("FW_T_SINK_MINN")]),_._v(" 来指定您希望从飞行器获得的爬升或下降性能！ 这些参数定义了操作限制，应在调试阶段进行设置，如下所述。")],1)]),_._v(" "),e("p",[_._v("以稳定模式飞行，使用最大油门"),e("code",[_._v("FW_THR_MAX")]),_._v("并缓慢增加俯仰角直到飞行器空速达到"),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("。")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_P_LIM_MAX"}},[_._v("FW_P_LIM_MAX")]),_._v(" - 设置为油门为"),e("code",[_._v("FW_THR_MAX")]),_._v("时以配平空速爬升所需要的俯仰角。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[_._v("FW_T_CLMB_MAX")]),_._v(" - 设置为以"),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("爬升时的爬升速率。")],1)]),_._v(" "),e("p",[_._v("以稳定模式飞行，减小油门到"),e("code",[_._v("FW_THR_MIN")]),_._v("并缓慢减小俯仰角直到飞机达到"),e("code",[_._v("FW_AIRSPD_MAX")]),_._v("。")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_P_LIM_MIN"}},[_._v("FW_P_LIM_MIN")]),_._v(" - 设定为在"),e("code",[_._v("FW_THR_MIN")]),_._v("状态下达到 "),e("code",[_._v("FW_AIRSPD_MAX")]),_._v("所需要俯仰角。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_SINK_MAX"}},[_._v("FW_T_SINK_MAX")]),_._v(" - 设置为下降期间达到的下降速率。")],1)]),_._v(" "),e("p",[_._v("以稳定模式飞行，减小油门到"),e("code",[_._v("FW_THR_MIN")]),_._v("并调整俯仰角使飞机保持"),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("。")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_SINK_MIN"}},[_._v("FW_T_SINK_MIN")]),_._v(" - 设置为保持"),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("所需的下降速率。")],1)]),_._v(" "),e("p",[_._v("通过调整"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_CLMB_R_SP"}},[_._v("FW_T_CLMB_R_SP")]),_._v("和"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_SINK_R_SP"}},[_._v("FW_T_SINK_R_SP")]),_._v("来确定自动任务的目标爬升率和下降率。 这些参数指定了飞行器改变高度时的爬升率和下降率。 Furthermore, these two values define the height rate limits commanded by the user in "),e("RouterLink",{attrs:{to:"/zh/flight_modes_fw/altitude.html"}},[_._v("Altitude mode")]),_._v(" and "),e("RouterLink",{attrs:{to:"/zh/flight_modes_fw/position.html"}},[_._v("Position mode")]),_._v(".")],1),_._v(" "),e("h3",{attrs:{id:"固定翼轨迹控制调整-位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#固定翼轨迹控制调整-位置"}},[_._v("#")]),_._v(" 固定翼轨迹控制调整（位置）")]),_._v(" "),e("p",[_._v("所有轨迹控制参数都在"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#fw-path-control"}},[_._v("这里")]),_._v("描述 。")],1),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NPFG_PERIOD"}},[_._v("NPFG_PERIOD")]),_._v(" - 这是之前所称的L1距离，它定义了在其前方飞机跟踪点的位置。 大多数飞机适用于10-20米的数值范围。 调整期间缓慢缩短，直到响应迅速没有振荡。 飞机动态特性缓慢的该数值应该增加。")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);