(window.webpackJsonp=window.webpackJsonp||[]).push([[649],{2331:function(t,_,v){"use strict";v.r(_);var e=v(18),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"飞行终止配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#飞行终止配置"}},[t._v("#")]),t._v(" 飞行终止配置")]),t._v(" "),e("p",[e("em",[t._v("飞行终止")]),e("RouterLink",{attrs:{to:"/zh/config/safety.html#failsafe_actions"}},[t._v("故障保护动作")]),t._v("可由"),e("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("安全检查")]),t._v("（例如任何载具类型或任何飞行模式下的 RC 丢失、违反地理围栏等）或者故障检测器触发。")],1),t._v(" "),e("p",[t._v("当"),e("em",[t._v("飞行终止")]),t._v("激活时，PX4 同时关闭所有控制器，并将所有 PWM 输出设置为其故障保护值。")]),t._v(" "),e("p",[t._v("根据所连接的设备，PWM 故障保护输出可以用来完成以下动作：")]),t._v(" "),e("ul",[e("li",[t._v("展开"),e("RouterLink",{attrs:{to:"/zh/peripherals/parachute.html"}},[t._v("降落伞")]),t._v("。")],1),t._v(" "),e("li",[t._v("伸展可伸缩起落架。")]),t._v(" "),e("li",[t._v("将连接了 PWM 的云台移动到安全的方向（或将它回收）以保护摄像机。")]),t._v(" "),e("li",[t._v("触发一个重启装置，比如安全气囊。")]),t._v(" "),e("li",[t._v("触发警报。")])]),t._v(" "),e("p",[t._v("飞行终止是无法取消的。 在飞行终止触发后，您应尽快拔下电池。 您需要在重启载具或重新上电后才能再次使用。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("PX4 不能感知接了那些安全设备 - 它只是将一组预先定义的 PWM 值用于其输出。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("失效保护值被应用到终止时的所有输出。 无法配置时基触发的电机或者特定的安全设备。")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("这"),e("em",[t._v("不是")]),t._v("一个独立的 "),e("em",[t._v("飞行终止系统")]),t._v("。 如果断电或者自驾仪完全失控，则不会出发失效保护设备。")])]),t._v(" "),e("h2",{attrs:{id:"硬件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬件配置"}},[t._v("#")]),t._v(" 硬件配置")]),t._v(" "),e("p",[t._v("任何 "),e("em",[t._v("安全设备")]),t._v(" (例如一个 "),e("RouterLink",{attrs:{to:"/zh/peripherals/parachute.html"}},[t._v("降落伞")]),t._v("）可以使用因更改 PWM 值而触发的降落伞， 并且可以连接到任意空闲的 PWM 端口（MAIN和 AUX）。")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("如果您使用 Pixhawk 系列飞控板， 您必须单独为舵机单独供电（通常供电来自 5V BEC, 通常来自电调 BEC）。")])]),t._v(" "),e("h2",{attrs:{id:"软件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件配置"}},[t._v("#")]),t._v(" 软件配置")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("安全")]),t._v(" 主题解释了如何将 "),e("em",[t._v("飞行终止")]),t._v(" 设置为 "),e("RouterLink",{attrs:{to:"/zh/config/safety.html#failsafe_actions"}},[t._v("失效保护动作")]),t._v(" 作为特定故障安全检查。")],1),t._v(" "),e("p",[t._v("如果载具翻转（超过一定姿态）或外部自动触发系统（ATS）检测到故障，则"),e("RouterLink",{attrs:{to:"/zh/config/safety.html#failure_detector"}},[t._v("故障检测器")]),t._v("也可以（可选）通过配置来触发飞行终止，如下所示：")],1),t._v(" "),e("ul",[e("li",[t._v("通过设置 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v(" 来启用故障检测器。")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/config/safety.html#attitude_trigger"}},[t._v("安全> 故障检测 > 姿态触发")]),t._v(" 解释了如何通过配置姿态限制触发 "),e("em",[t._v("飞行终止")]),t._v("。 :::note 在 "),e("em",[t._v("起飞期间")]),t._v(" 过分的状态将会触发 "),e("em",[t._v("锁定")]),t._v(" (制动电机，但不会启动降落伞) 而不是飞行终止。 无论 "),e("code",[t._v("CBRK_FLIGHTTERM")]),t._v(" 为何值，此选项始终启用。\n:::")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/config/safety.html#external_ats"}},[t._v("通过安全 > 外部自动触发系统（ATS）")]),t._v("可以配置外部触发系统。")],1)]),t._v(" "),e("p",[t._v("最后，设置任意电机的 "),e("code",[t._v("PWM_AUX_FAILn")]),t._v(" and "),e("code",[t._v("PWM_MAIN_FAILn")]),t._v(" PWM值。")]),t._v(" "),e("ul",[e("li",[t._v("将 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_DIS1"}},[t._v("PWM_MAIN_DISn")]),t._v(" 设置为设备的“OFF”PWM值。")],1),t._v(" "),e("li",[t._v("将 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v(" 设置为设备的“ON”PWM值。")],1)]),t._v(" "),e("p",[t._v("下图显示了飞行终止的逻辑流程。")]),t._v(" "),e("ul",[e("li",[t._v("将 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_DIS1"}},[t._v("PWM_AUX_DISn")]),t._v(" 设置为设备的“OFF”PWM值。")],1),t._v(" "),e("li",[t._v("将 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v(" 设置为设备的“ON”PWM值。")],1)]),t._v(" "),e("p",[t._v("最后，设置任意电机的 "),e("code",[t._v("PWM_AUX_FAILn")]),t._v(" 和 "),e("code",[t._v("PWM_MAIN_FAILn")]),t._v(" PWM 值。")]),t._v(" "),e("h2",{attrs:{id:"逻辑图解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#逻辑图解"}},[t._v("#")]),t._v(" 逻辑图解")]),t._v(" "),e("p",[t._v("下图显示了飞行终止的逻辑流程。")]),t._v(" "),e("p",[e("img",{attrs:{src:v(444),alt:"逻辑图解"}})])])}),[],!1,null,null,null);_.default=a.exports},444:function(t,_,v){t.exports=v.p+"assets/img/flight_termination_logic_diagram.094a47f0.png"}}]);