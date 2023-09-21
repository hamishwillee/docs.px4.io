(window.webpackJsonp=window.webpackJsonp||[]).push([[845],{3279:function(A,e,t){"use strict";t.r(e);var a=t(19),v=Object(a.a)({},(function(){var A=this,e=A.$createElement,a=A._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[a("h1",{attrs:{id:"固定翼配平指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#固定翼配平指南"}},[A._v("#")]),A._v(" 固定翼配平指南")]),A._v(" "),a("p",[A._v("配平校准是指在配平状态下计算/设置舵面偏度（配平状态包含相对空速、空气密度、攻击角、飞机配置等）。 一架具有合适配平设置的飞机在配平状态下飞行将自动保持其姿态，不需要飞行员或增稳计算机进行任何的控制操作。")]),A._v(" "),a("p",[A._v("通用航空器、 商用以及大型无人驾驶飞机用 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Trim_tab",target:"_blank",rel:"noopener noreferrer"}},[A._v("配平小舵"),a("OutboundLink")],1),A._v(" 来配平舵面，而小型无人驾驶飞行器通常通过简单的在舵面上施加一个偏置实现。")]),A._v(" "),a("p",[a("a",{attrs:{href:"#basic-trimming"}},[A._v("基础配平")]),A._v(" 部分解释了每个配平参数的目的以及如何找到正确的值。 "),a("a",{attrs:{href:"#advanced-trimming"}},[A._v("高级配平")]),A._v(" 部分引入了可以根据测量的空速和襟翼位置来自动调整配平参数。")]),A._v(" "),a("h2",{attrs:{id:"基础配平"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础配平"}},[A._v("#")]),A._v(" 基础配平")]),A._v(" "),a("p",[A._v("操作者可通过若干个参数来恰当地配平固定翼飞机。 以下是这些参数及其使用场景的概述：")]),A._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC1_TRIM"}},[A._v("RCx_TRIM")]),A._v(" 用于配平从 RC 发射器收到的信号。 这些参数在 "),a("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[A._v("RC校准")]),A._v(" 期间自动设置。")],1),A._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CA_SV_CS0_TRIM"}},[A._v("CA_SV_CSx_TRIM")]),A._v(" 应用于舵面通道配平。 该参数用于在飞行前精确地将舵面与默认角度对齐。")],1),A._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_PSP_OFF"}},[A._v("FW_PSP_OFF")]),A._v(" 用于对俯仰设定值添加偏置。 该参数用来设定飞机在巡航速度飞行时所需要的攻角。")],1),A._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[A._v("FW_AIRSPD_TRIM")]),A._v(" 被角速率控制器根据测量空速来缩放其控制输出。 查看 "),a("RouterLink",{attrs:{to:"/zh/flight_stack/controller_diagrams.html#airspeed-scaling"}},[A._v("空速缩放")]),A._v(" 了解更多信息。")],1),A._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TRIM_ROLL"}},[A._v("TRIM_ROLL")]),A._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TRIM_PITCH"}},[A._v("TRIM_PITCH")]),A._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TRIM_YAW"}},[A._v("TRIM_YAW")]),A._v(" 用于在混控"),A._v(" 之前 *对控制信号进行配平。 例如，如果你有两个升降舵舵机， "),a("code",[A._v("TRIM_PITCH")]),A._v(" 对这两个舵机都进行配平。 这些参数在您的舵面已对齐，但在手动飞行期间出现飞机俯仰/滚轮/偏航/上下/左右动作(不稳定)时，或在增稳飞行期间控制信号有恒定偏移时使用。"),a("p")],1)]),A._v(" "),a("p",[A._v("设置上述参数的正确顺序是：")]),A._v(" "),a("ol",[a("li",[A._v("尽可能通过调整舵面连杆长度来配平舵面，也可以通过修改对应舵面 PWM 频道的配平参数(使用 "),a("code",[A._v("PWM_MAIN/AUX_TRIMx")]),A._v(")来将舵面配平至其理论位置。")]),A._v(" "),a("li",[A._v("在增稳模式下按巡航速度飞行，将俯仰设定值偏移量("),a("code",[A._v("FW_PSP_OFF")]),A._v(")设置为该状态下的飞行攻角。 巡航速度飞行下的需用攻角为飞机在平飞状态下保持固定高度时的实际飞行迎角。 如果您使用了空速传感器，也设置了正确的巡航速度("),a("code",[A._v("FW_AIRSPD_TRIM")]),A._v(")。")]),A._v(" "),a("li",[A._v("查看日志文件中的舵机控制量 (例如可以将其上传到 "),a("a",{attrs:{href:"https://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[A._v("Flight Review"),a("OutboundLink")],1),A._v(" 并绘图查看 "),a("em",[A._v("Actuator Controls")]),A._v(" ) 来设置俯仰配平("),a("code",[A._v("TRIM_PITCH")]),A._v(")。 将该值设置为平飞时俯仰角度的平均值。")])]),A._v(" "),a("p",[A._v("步骤3可以在步骤2之前执行，如果你不想查看日志， 或者如果您在手动模式下感觉舒适。 然后你可以通过遥控器（微调开关）进行配平用并将该值设置给 "),a("code",[A._v("TRIM_PITCH")]),A._v(" (并从你的遥控器中移除微调)，或者也可以通过数据链和QGC在飞行过程中直接修改 "),a("code",[A._v("TRIM_PITCH")]),A._v(" 。")]),A._v(" "),a("h2",{attrs:{id:"高级配平"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级配平"}},[A._v("#")]),A._v(" 高级配平")]),A._v(" "),a("p",[A._v("在空速增加过程中，会因非对称翼型和使用襟翼而引入俯仰通道低头力矩，因此飞机需要根据测量空速和襟翼位置重新计算配平。 为此，可以使用以下参数定义一个关于空速的双线性曲线函数和关于襟翼状态的俯仰修正增量函数（参见下图）：")]),A._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_DTRIM_R_VMIN"}},[A._v("FW_DTRIM_[R/P/Y]_[VMIN/VMAX]")]),A._v(" 是滚转/俯仰/偏航增加到 "),a("code",[A._v("TRIM_ROL/PITCH/YAW")]),A._v(" 的配平值，最小/最大空速(由 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[A._v("FW_AIRSPD_MIN")]),A._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[A._v("FW_AIRSPD_MAX")]),A._v(" 定义)。")],1),A._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CA_SV_CS0_FLAP"}},[A._v("CA_SV_CSx_FLAP")]),A._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CA_SV_CS0_SPOIL"}},[A._v("CA_SV_CSx_SPOIL")]),A._v(" 分别对应于襟翼完全部署状态下的舵面配平量和扰流板完全部署状态下的舵面配平量。")],1)]),A._v(" "),a("p",[a("img",{attrs:{src:t(674),alt:"Dtrim Curve"}})]),A._v(" "),a("p",[A._v("一个完全对称的机身只需要进行俯仰修正增量，但由于实际机身永远不是完全对称的，有时还需要进行横滚和偏航的修正增量。")])])}),[],!1,null,null,null);e.default=v.exports},674:function(A,e){A.exports="data:image/png;base64,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"}}]);