(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{2296:function(t,e,_){"use strict";_.r(e);var a=_(18),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"飞行终止配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞行终止配置"}},[t._v("#")]),t._v(" 飞行终止配置")]),t._v(" "),a("p",[a("em",[t._v("飞行终止")]),a("RouterLink",{attrs:{to:"/zh/config/safety.html#failsafe_actions"}},[t._v("故障保护动作")]),t._v("可由"),a("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("安全检查")]),t._v("（例如任何载具类型或任何飞行模式下的 RC 丢失、违反地理围栏等）或者故障检测器触发。")],1),t._v(" "),a("p",[t._v("当"),a("em",[t._v("飞行终止")]),t._v("激活时，PX4 同时关闭所有控制器，并将所有 PWM 输出设置为其故障保护值。")]),t._v(" "),a("p",[t._v("根据所连接的设备，PWM 故障保护输出可以用来完成以下动作：")]),t._v(" "),a("ul",[a("li",[t._v("展开"),a("RouterLink",{attrs:{to:"/zh/peripherals/parachute.html"}},[t._v("降落伞")]),t._v("。")],1),t._v(" "),a("li",[t._v("伸展可伸缩起落架。")]),t._v(" "),a("li",[t._v("将连接了 PWM 的云台移动到安全的方向（或将它回收）以保护摄像机。")]),t._v(" "),a("li",[t._v("触发一个重启装置，比如安全气囊。")]),t._v(" "),a("li",[t._v("触发警报。")])]),t._v(" "),a("p",[t._v("飞行终止是无法取消的。 在飞行终止触发后，您应尽快拔下电池。 您需要在重启载具或重新上电后才能再次使用。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 does not know what safety devices are attached - it just applies a predefined set of PWM values to its outputs.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Failsafe values are applied to all outputs on termination. There is no way to configure independent time-based (or other) triggering of the motors or specific safety devices.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("This is "),a("em",[t._v("not")]),t._v(" an independent "),a("em",[t._v("Flight Termination System")]),t._v(". If power is lost or if the autopilot crashes completely, the failsafe devices will not be triggered.")])]),t._v(" "),a("h2",{attrs:{id:"硬件配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件配置"}},[t._v("#")]),t._v(" 硬件配置")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("安全")]),t._v("话题解释了如何将"),a("em",[t._v("飞行终止")]),t._v("设置为针对特定故障安全检查而执行的"),a("RouterLink",{attrs:{to:"/zh/config/safety.html#failsafe_actions"}},[t._v("故障保护动作")]),t._v("。")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("If you're using Pixhawk-series board you will have to separately power the servo rail (i.e. from a 5V BEC, which is often also available from your ESC).")])]),t._v(" "),a("h2",{attrs:{id:"软件配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件配置"}},[t._v("#")]),t._v(" 软件配置")]),t._v(" "),a("p",[t._v("对于每个与安全装置相连的 MAIN 输出，其中“n”指 PWM 端口号：")]),t._v(" "),a("p",[t._v("对于每个与安全装置相连的 AUX 输出，其中“n”指 PWM 端口号：")]),t._v(" "),a("ul",[a("li",[t._v("设置 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v(" 启用故障检测器（默认情况下禁用）。")],1),t._v(" "),a("li",[t._v("通过"),a("RouterLink",{attrs:{to:"/zh/config/safety.html#attitude_trigger"}},[t._v("安全 > 故障检测器 > 姿态触发器")]),t._v("可以配置触发"),a("em",[t._v("飞行终止")]),t._v("的姿态极限值。 > "),a("strong",[t._v("Note")]),t._v(" 在"),a("em",[t._v("起飞期间")]),t._v("，超过限制值的姿态将触发"),a("em",[t._v("上锁")]),t._v("（制动电机但不启动降落伞），而不是飞行终止。 无论 "),a("code",[t._v("CBRK_FLIGHTTERM")]),t._v(" 为何值，此选项始终启用。\n:::")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/safety.html#external_ats"}},[t._v("通过安全 > 外部自动触发系统（ATS）")]),t._v("可以配置外部触发系统。")],1)]),t._v(" "),a("p",[t._v("最后，设置任意电机的 "),a("code",[t._v("PWM_AUX_FAILn")]),t._v(" and "),a("code",[t._v("PWM_MAIN_FAILn")]),t._v(" PWM值。")]),t._v(" "),a("ul",[a("li",[t._v("将 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_DIS1"}},[t._v("PWM_MAIN_DISn")]),t._v(" 设置为设备的“OFF”PWM值。")],1),t._v(" "),a("li",[t._v("将 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v(" 设置为设备的“ON”PWM值。")],1)]),t._v(" "),a("p",[t._v("下图显示了飞行终止的逻辑流程。")]),t._v(" "),a("ul",[a("li",[t._v("将 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_DIS1"}},[t._v("PWM_AUX_DISn")]),t._v(" 设置为设备的“OFF”PWM值。")],1),t._v(" "),a("li",[t._v("将 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v(" 设置为设备的“ON”PWM值。")],1)]),t._v(" "),a("p",[t._v("Finally, set the "),a("code",[t._v("PWM_AUX_FAILn")]),t._v(" and "),a("code",[t._v("PWM_MAIN_FAILn")]),t._v(" PWM values for any motors.")]),t._v(" "),a("h2",{attrs:{id:"逻辑图解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑图解"}},[t._v("#")]),t._v(" 逻辑图解")]),t._v(" "),a("p",[t._v("The diagram below shows the logical flow around flight termination.")]),t._v(" "),a("p",[a("img",{attrs:{src:_(452),alt:"Logic diagram"}})])])}),[],!1,null,null,null);e.default=v.exports},452:function(t,e,_){t.exports=_.p+"assets/img/flight_termination_logic_diagram.094a47f0.png"}}]);