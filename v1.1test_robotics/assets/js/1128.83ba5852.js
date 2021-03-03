(window.webpackJsonp=window.webpackJsonp||[]).push([[1128],{2351:function(_,t,e){"use strict";e.r(t);var r=e(18),v=Object(r.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"高级固定翼位置调整"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级固定翼位置调整"}},[_._v("#")]),_._v(" 高级固定翼位置调整")]),_._v(" "),e("p",[_._v("本指南为调整飞行任务和高度/位置控制模式下所需的高级固定翼控制器提供一些帮助。 PX4 使用 TECS 进行高度和空速控制，使用 L1 进行水平航向/位置控制。")]),_._v(" "),e("p",[_._v("本指南仅适合高级用户/专家使用。 如果你不熟悉 TECS 调整，可能会导致您的飞机坠毁。\n:::")]),_._v(" "),e("p",[_._v("调整时增益设置不当会使高度和航向控制不稳定。 因此，调节 TECS 增益的飞行员应该能够以稳定的控制模式飞行和降落飞机。\n:::")]),_._v(" "),e("p",[_._v("所有参数都记录在"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#fw-tecs"}},[_._v("参数参考")]),_._v("中。 本指南将介绍所有重要参数。\n:::")],1),_._v(" "),e("h2",{attrs:{id:"tecs-调节-高度和空速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tecs-调节-高度和空速"}},[_._v("#")]),_._v(" TECS 调节（高度和空速）")]),_._v(" "),e("p",[_._v("TECS（总能量控制系统）是一种用于固定翼飞机的制导算法，该算法通过协调油门和俯仰角设定值来控制飞机的高度和空速。 有关 TECS 算法和控制图的详细说明，请参阅"),e("RouterLink",{attrs:{to:"/zh/flight_stack/controller_diagrams.html"}},[_._v("控制图")]),_._v("。")],1),_._v(" "),e("p",[_._v("调整 TECS 之前需要一个调整好的姿态控制器："),e("RouterLink",{attrs:{to:"/zh/config_fw/pid_tuning_guide_fixedwing.html"}},[_._v("PID调整指南")]),_._v("。")],1),_._v(" "),e("p",[_._v("调整 TECS 主要是正确地设置机身限制。 这些限制可以通过如下所述的一系列飞行操作确定的参数来指定。 大多数操作要求飞行员在"),e("RouterLink",{attrs:{to:"/zh/flight_modes/stabilized_fw.html"}},[_._v("稳定飞行模式")]),_._v("下飞行。")],1),_._v(" "),e("p",[_._v("当飞行员飞行时，能有人帮助阅读和记录遥测数据时非常有益的。 为了提高准确性，我们还建议您使用飞行日志中记录的数据来验证飞行期间获得的数据。\n:::")]),_._v(" "),e("h4",{attrs:{id:"_1st-平衡条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1st-平衡条件"}},[_._v("#")]),_._v(" 1st：平衡条件")]),_._v(" "),e("p",[_._v("以"),e("RouterLink",{attrs:{to:"/zh/flight_modes/stabilized_fw.html"}},[_._v("稳定模式")]),_._v("飞行并找到以平衡速度水平飞行的油门和俯仰角。 使用油门去调节空速和俯仰以保持水平飞行。")],1),_._v(" "),e("p",[_._v("设置以下参数：")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[_._v("FW_AIRSPD_TRIM")]),_._v(" - 设置为操作过程中所需要的平衡空速。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_THR_CRUISE"}},[_._v("FW_THR_CRUISE")]),_._v(" - 设置为以平衡空速飞行所需要油门。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_PSP_OFF"}},[_._v("FW_PSP_OFF")]),_._v(" - 设置为维持水平飞行所需要俯仰角。")],1)]),_._v(" "),e("h4",{attrs:{id:"_2nd-空速和油门限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2nd-空速和油门限制"}},[_._v("#")]),_._v(" 2nd：空速和油门限制")]),_._v(" "),e("p",[_._v("以"),e("RouterLink",{attrs:{to:"/zh/flight_modes/stabilized_fw.html"}},[_._v("稳定模式")]),_._v("飞行并增加油门，同时使用俯仰控制保持水平飞行-直到飞行器到达最大允许空速。")],1),_._v(" "),e("p",[_._v("设置以下参数：")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_THR_MAX"}},[_._v("FW_THR_MAX")]),_._v(" - 设置水平飞行时到达最大空速所需油门。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_THR_MIN"}},[_._v("FW_THR_MIN")]),_._v(" - 设置为飞行时的最小油门。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[_._v("FW_AIRSPD_MAX")]),_._v(" - 水平飞行时以"),e("code",[_._v("FW_THR_MAX")]),_._v("得到的最大空速。")],1)]),_._v(" "),e("h4",{attrs:{id:"_3rd-俯仰和爬升速率限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3rd-俯仰和爬升速率限制"}},[_._v("#")]),_._v(" 3rd：俯仰和爬升速率限制")]),_._v(" "),e("p",[_._v("以稳定模式飞行时，使用全油门（"),e("code",[_._v("FW_THR_MAX")]),_._v("）并缓慢增加俯仰角，直至空速达到"),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("。")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_P_LIM_MAX"}},[_._v("FW_P_LIM_MAX")]),_._v(" - 设置为应用"),e("code",[_._v("FW_THR_MAX")]),_._v("时以平衡空速爬升所需要的俯仰角。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[_._v("FW_T_CLMB_MAX")]),_._v(" - 设置为以"),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("爬升时的爬升速率。")],1)]),_._v(" "),e("p",[_._v("以稳定模式飞行，降低油门至"),e("code",[_._v("FW_THR_MIN")]),_._v("并缓慢减小俯仰角直到飞行器达到"),e("code",[_._v("FW_AIRSPD_MAX")]),_._v("。")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_P_LIM_MIN"}},[_._v("FW_P_LIM_MIN")]),_._v(" - 设定为从"),e("code",[_._v("FW_THR_MIN")]),_._v("到达 "),e("code",[_._v("FW_AIRSPD_MAX")]),_._v("所需要俯仰角。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_SINK_MAX"}},[_._v("FW_T_SINK_MAX")]),_._v(" - 设置为下降期间达到的下沉速率。")],1)]),_._v(" "),e("p",[_._v("以稳定模式飞行，减小油门到"),e("code",[_._v("FW_THR_MIN")]),_._v("并调整俯仰角使飞机保持"),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("。")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_SINK_MIN"}},[_._v("FW_T_SINK_MIN")]),_._v(" - 设置为保持"),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("达到的下沉速率。")],1)]),_._v(" "),e("h3",{attrs:{id:"l1控制器调整-位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#l1控制器调整-位置"}},[_._v("#")]),_._v(" L1控制器调整（位置）")]),_._v(" "),e("p",[_._v("L1所有的参数在"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#fw-l1-control"}},[_._v("此")]),_._v("描述")],1),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_L1_PERIOD"}},[_._v("FW_L1_PERIOD")]),_._v(" - 这是 L1 的距离，它定义了需要跟踪的跟踪点。 25米适合大部分飞机。 16-18米仍然可以工作并提供更清晰的响应。 调整期间缓慢缩短，直到响应迅速没有振荡。")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);