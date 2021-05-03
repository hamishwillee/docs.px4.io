(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{2412:function(_,t,v){"use strict";v.r(t);var e=v(18),r=Object(e.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"多旋翼的转换速率型轨迹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼的转换速率型轨迹"}},[_._v("#")]),_._v(" 多旋翼的转换速率型轨迹")]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),e("p",[_._v("该轨迹类型可以通过设置以下参数："),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[_._v("MPC_POS_MODE=1")]),_._v(" 在"),e("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("定点模式")]),_._v("（仅限）下启用。")],1),_._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/config_mc/mc_jerk_limited_type_trajectory.html"}},[_._v("多旋翼的加加速度限制型轨迹调整")]),_._v("是另一种提供更平滑响应的轨迹。")],1)]),_._v(" "),e("p",[_._v("转换速率轨迹类型是一种简单的实现方式，在这种情况下，加加速度和加速度使用转换速率进行限制（加加速度和加速度限制不是硬约束）。")]),_._v(" "),e("p",[_._v("它允许非对称配置的用户意图（平滑加速及快速停止），并且应该在响应快速摇杆输入（可能是“抖动”）优先于保证平滑加减速时使用（例如，对于位置保持状态下的激烈飞行）。")]),_._v(" "),e("p",[_._v("本话题解释了如何调整轨迹类型。")]),_._v(" "),e("h2",{attrs:{id:"定点模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定点模式"}},[_._v("#")]),_._v(" 定点模式")]),_._v(" "),e("p",[_._v("在"),e("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("定点模式")]),_._v("中， 摇杆输入映射为"),e("strong",[_._v("位置-控制")]),_._v("或"),e("strong",[_._v("速度-控制")]),_._v("。")],1),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),e("p",[_._v("位置控制器 ("),e("RouterLink",{attrs:{to:"/zh/flight_stack/controller_diagrams.html#multicopter-position-controller"}},[_._v(" diagram here ")]),_._v(") 由外环的** P ** 位置控制回路和内环的 ** PID ** 速度控制回路组成。 根据模式和情况启用两个回路或仅启用速度控制回路。")],1),_._v(" "),e("p",[_._v("对于本文档的其余部分，** 位置控制 ** 代表两个控制回路都有效的情况，而 ** 速度控制 ** 指的是仅使用速度控制回路的情况。")])]),_._v(" "),e("p",[_._v("当摇杆输入在死区 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[_._v("MPC_HOLD_DZ")]),_._v("内时，位置控制被激活，否则是速度控制。")],1),_._v(" "),e("p",[_._v("以下所有参数都是可调节参数，不能被直接映射为物理量。")]),_._v(" "),e("h4",{attrs:{id:"mpc-acc-hor-max"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mpc-acc-hor-max"}},[_._v("#")]),_._v(" MPC_ACC_HOR_MAX")]),_._v(" "),e("p",[_._v("该参数用于水平方向的位置控制，即飞机理应停留的当前位置。 设定速度的变化速率由"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_HOR_MAX"}},[_._v("MPC_ACC_HOR_MAX")]),_._v("来限定。 此参数应设置为大于水平方向上任何其他加速度相关参数。")],1),_._v(" "),e("p",[e("span",{attrs:{id:"mpc_acc_hor-and-mpc_dec_hor_slow"}})]),_._v(" "),e("h4",{attrs:{id:"mpc-acc-hor-和-mpc-dec-hor-slow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mpc-acc-hor-和-mpc-dec-hor-slow"}},[_._v("#")]),_._v(" MPC_ACC_HOR 和 MPC_DEC_HOR_SLOW")]),_._v(" "),e("p",[_._v("在速度控制中，速度设定值的速率限制是由摇杆输入到加速度限制值线性映射得到的，摇杆最大值对应"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_HOR"}},[_._v("MPC_ACC_HOR")]),_._v(", 最小值对应"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_DEC_HOR_SLOW"}},[_._v("MPC_DEC_HOR_SLOW")]),_._v(". 例如，若摇杆输入在 "),e("code",[_._v("MPC_HOLD_DZ")]),_._v("，加速度的限定为 "),e("code",[_._v("MPC_DEC_HOR_SLOW")]),_._v(". 如果摇杆输入在最大值 (="),e("code",[_._v("1")]),_._v("), 则加速度限定值为 "),e("code",[_._v("MPC_ACC_HOR")]),_._v("，并且任意的摇杆输入都将线性映射到这两个参数之间。 此外，当用户需要沿当前飞行方向减速时，"),e("code",[_._v("MPC_DEC_HOR_SLOW")]),_._v(" 也会限制速度设定的变化。 例如，当摇杆的输入量从最大值 (="),e("code",[_._v("1")]),_._v(") 变化到 "),e("code",[_._v("0.5")]),_._v("时，速度设定的变化将由"),e("code",[_._v("MPC_DEC_HOR_SLOW")]),_._v("限定。")],1),_._v(" "),e("p",[_._v("当由 "),e("strong",[_._v("速度-控制")]),_._v(" 转为 "),e("strong",[_._v("位置-控制")]),_._v("时，将会发生一个由 "),e("code",[_._v("MPC_ACC_HOR")]),_._v(" 到 "),e("code",[_._v("MPC_ACC_HOR_MAX")]),_._v(" 的强制转变， 并且当前飞行器的速度目标值被被重置为飞机当前速度。 这种重置和强制转变在飞行器试图停止时都可能会引起抖动。 尽管如此，重置也是必需的，因为平滑参数会导致延迟到达设定值，若不重置则可能导致始料不及的飞行动作。")]),_._v(" "),e("p",[_._v("下面给出一个简单例子来解释为什么需要重置。")]),_._v(" "),e("p",[_._v("考虑这样一种情况：用户要求机体从悬停状态转为全速飞行，接着又要求机体停止前飞。 这等效于摇杆以最大值"),e("code",[_._v("1")]),_._v("满输入，然后紧跟着一个零摇杆输入。 为了简化这个例子，假设参数 "),e("code",[_._v("MPC_ACC_HOR_MAX")]),_._v(" 等于 "),e("code",[_._v("MPC_ACC_HOR")]),_._v("，因此当从"),e("strong",[_._v("速度-控制")]),_._v("转为"),e("strong",[_._v("位置-控制")]),_._v("时，加速限制没有强制转变。 此外，我们假设期望的最大速度为 "),e("code",[_._v("4 m/s")]),_._v("。")]),_._v(" "),e("p",[_._v("摇杆满输入时，速度设定值不会直接从"),e("code",[_._v("0 m/s")]),_._v("变到"),e("code",[_._v("4 m/s")]),_._v("(即阶跃输入)，而是根据参数"),e("code",[_._v("MPC_ACC_HOR")]),_._v("的斜率渐变。 然而，飞行器的实际速度不会完美地跟上设定值，而是会稍微滞后。 "),e("code",[_._v("MPC_ACC_HOR")]),_._v("的值越大，这个滞后就会越明显。")]),_._v(" "),e("p",[e("img",{attrs:{src:v(645),alt:"Slewrate Reset"}})]),_._v(" "),e("p",[_._v("如果没有复位(如顶部图示)，在停止指令的时刻(摇杆输入等于0)，速度设定值将以"),e("code",[_._v("MPC_ACC_HOR_MAX")]),_._v("给出的最大速率下降。 由于滞后，飞机将首先在停止指令之前的方向上继续加速，然后缓慢减速至零。 通过将速度设定点重置为当前速度，可以克服在停止指令期间的滞后引起的延迟。")]),_._v(" "),e("h4",{attrs:{id:"mpc-acc-up-max-和-mpc-acc-down-max"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mpc-acc-up-max-和-mpc-acc-down-max"}},[_._v("#")]),_._v(" MPC_ACC_UP_MAX 和 MPC_ACC_DOWN_MAX")]),_._v(" "),e("p",[e("code",[_._v("MPC_ACC_UP_MAX")]),_._v(" >= "),e("code",[_._v("MPC_ACC_DOWN_MAX")]),_._v("，否则固件将覆盖给定值。")]),_._v(" "),e("ul",[e("li",[_._v("**位置-控制：**速度设定值在 z 方向的变化上限由参数 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_UP_MAX"}},[_._v("MPC_ACC_UP_MAX")]),_._v(" 给出。")],1),_._v(" "),e("li",[_._v("**速度-控制：**摇杆输入导致的速度设定值的变化极限由两个参数给出， "),e("code",[_._v("MPC_ACC_UP_MAX")]),_._v(" 为上限， "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ACC_DOWN_MAX"}},[_._v("MPC_ACC_DOWN_MAX")]),_._v(" 为下限。")],1)]),_._v(" "),e("h4",{attrs:{id:"mpc-jerk-max-和-mpc-jerk-min"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mpc-jerk-max-和-mpc-jerk-min"}},[_._v("#")]),_._v(" MPC_JERK_MAX 和 MPC_JERK_MIN")]),_._v(" "),e("p",[_._v("这两个参数仅在从"),e("strong",[_._v("速度控制</ 0>到")]),_._v("位置控制</ 0>的转换期间有效。 这两个参数的意义是尽量减小机体从前飞状态到悬停状态导致的加加速度（请参见 "),e("a",{attrs:{href:"#mpc_acc_hor-and-mpc_dec_hor_slow"}},[_._v("MPC_ACC_HOR 和 MPC_DEC_HOR_SLOW")]),_._v("）。")]),e("p"),_._v(" "),e("p",[_._v("jerk参数限制加速度达到"),e("code",[_._v("MPC_ACC_HOR_MAX")]),_._v("的速率。 实际的“刹车加速度”和飞行器刹车前的速度大小呈线性关系。 最大速度映射到"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[_._v("MPC_JERK_MAX")]),_._v(" 而最小速度映射到 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_JERK_MIN"}},[_._v("MPC_JERK_MIN")]),_._v("。 你可以通过将 "),e("code",[_._v("MPC_JERK_MAX")]),_._v(" 设置为小于 "),e("code",[_._v("MPC_JERK_MIN")]),_._v(" 的值来禁用平滑效果。")],1)])}),[],!1,null,null,null);t.default=r.exports},645:function(_,t,v){_.exports=v.p+"assets/img/slewrate_reset.18833812.svg"}}]);