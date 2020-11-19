(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{2310:function(t,e,a){"use strict";a.r(e);var _=a(18),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"安全配置-故障保护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全配置-故障保护"}},[t._v("#")]),t._v(" 安全配置（故障保护）")]),t._v(" "),_("p",[t._v("PX4有许多安全功能，可以在发生故障时保护并恢复您的机体：")]),t._v(" "),_("ul",[_("li",[_("em",[t._v("故障保护")]),t._v("允许您指定可以安全飞行的区域和条件，以及在触发故障保护时将执行的"),_("a",{attrs:{href:"#failsafe_actions"}},[t._v("操作")]),t._v("（例如着陆、定点悬停或返回指定点）。 最重要的故障保护设置在 "),_("em",[t._v("QGroundControl")]),t._v(" 的"),_("a",{attrs:{href:"#qgc_safety_setup"}},[t._v("安全设置")]),t._v("页面中配置。 其他设置必须通过"),_("a",{attrs:{href:"#failsafe_other"}},[t._v("参数")]),t._v("页面配置。")]),t._v(" "),_("li",[t._v("遥控器上的安全开关可用于在出现问题时立即制动电机或使机体返航。")])]),t._v(" "),_("p",[_("span",{attrs:{id:"failsafe_actions"}})]),t._v(" "),_("h2",{attrs:{id:"failsafe-actions"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#failsafe-actions"}},[t._v("#")]),t._v(" Failsafe Actions")]),t._v(" "),_("p",[t._v("Each failsafe defines its own set of actions. Some of the more common failsafe actions are:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("动作")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"action_none"}}),t._v("无/禁用")]),t._v(" "),_("td",[t._v("无动作 (故障保护将被忽略)。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"action_warning"}}),t._v("警告")]),t._v(" "),_("td",[t._v("警告信息将被发送至 "),_("em",[t._v("QGroundControl")]),t._v("。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"action_hold"}}),_("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[t._v("保持模式")])],1),t._v(" "),_("td",[t._v("机体将进入"),_("em",[t._v("保持模式")]),t._v("。 对于多旋翼飞行器，这意味着飞行器将悬停，而对于固定翼飞行器，飞行器将盘旋。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"action_return"}}),_("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航模式")])],1),t._v(" "),_("td",[t._v("机体将进入"),_("em",[t._v("返航模式")]),t._v("。 返航行为可以在"),_("a",{attrs:{href:"#return_settings"}},[t._v("返回原点设置")]),t._v("（如下文所示）中设置。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"action_land"}}),_("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("降落模式")])],1),t._v(" "),_("td",[t._v("机体将进入降落模式，并立即执行着陆动作。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"action_flight_termination"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/flight_termination.html"}},[t._v("飞行终止")])],1),t._v(" "),_("td",[t._v("关闭所有控制器并将所有 PWM 输出设置为其故障保护值（例如 "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v("，"),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v(" 等输出）。 故障保护输出可用于启动降落伞、起落架或执行其他操作。 对于固定翼飞行器，这可能允许您将机体滑翔至安全位置。")],1)]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"action_lockdown"}}),t._v("锁定")]),t._v(" "),_("td",[t._v("制动发动机（使其上锁）。 这和使用"),_("a",{attrs:{href:"#kill_switch"}},[t._v("急停开关")]),t._v("是一样的。")])])])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" 可以通过切换模式从故障保护动作（如果原因已修复）中恢复。 例如，在遥控信号丢失且故障保护导致机体进入"),_("em",[t._v("返航模式")]),t._v("的情况下，如果遥控信号恢复，您可以切换到"),_("em",[t._v("定点模式")]),t._v("并继续飞行。")])]),t._v(" "),_("p",[_("span")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" 如果在机体响应一个故障保护时发生另一个故障保护（例如，由于遥控信号丢失而处于返航模式时，电池电量也提示不足），则忽略第二个故障保护的指定触发动作。 相反，此操作由单独的系统级别和机体的特定代码决定。 这可能会导致机体被更改为手动模式，以便用户能够直接管理并收回机体。")])]),t._v(" "),_("p",[_("span",{attrs:{id:"qgc_safety_setup"}})]),t._v(" "),_("h2",{attrs:{id:"qgroundcontrol-safety-setup"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-safety-setup"}},[t._v("#")]),t._v(" QGroundControl Safety Setup")]),t._v(" "),_("p",[t._v("The "),_("em",[t._v("QGroundControl")]),t._v(" Safety Setup page is accessed by clicking the "),_("em",[t._v("QGroundControl")]),t._v(" "),_("strong",[t._v("Gear")]),t._v(" icon (Vehicle Setup - top toolbar) and then "),_("strong",[t._v("Safety")]),t._v(" in the sidebar). This includes the most important failsafe settings (battery, RC loss etc.) and the settings for the return actions "),_("em",[t._v("Return")]),t._v(" and "),_("em",[t._v("Land")]),t._v(".")]),t._v(" "),_("p",[_("img",{attrs:{src:a(634),alt:"Safety Setup (QGC)"}})]),t._v(" "),_("h3",{attrs:{id:"低电量故障保护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#低电量故障保护"}},[t._v("#")]),t._v(" 低电量故障保护")]),t._v(" "),_("p",[t._v("The low battery failsafe is triggered when the battery capacity drops below one (or more warning) level values.")]),t._v(" "),_("p",[_("img",{attrs:{src:a(635),alt:"Safety - Battery (QGC)"}})]),t._v(" "),_("p",[t._v("The most common configuration is to set the values and action as above (with "),_("code",[t._v("Warn > Failsafe > Emergency")]),t._v("). With this configuration the failsafe will trigger warning, then return, and finally landing if capacity drops below the respective levels.")]),t._v(" "),_("p",[t._v("It is also possible to set the "),_("em",[t._v("Failsafe Action")]),t._v(" to warn, return, or land when the "),_("a",{attrs:{href:"#BAT_CRIT_THR"}},[t._v("Battery Failsafe Level")]),t._v(" failsafe level is reached.")]),t._v(" "),_("p",[t._v("The settings and underlying parameters are shown below.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("设置")]),t._v(" "),_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("故障保护动作")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_LOW_BAT_ACT"}},[t._v("COM_LOW_BAT_ACT")])],1),t._v(" "),_("td",[t._v("当电池电量过低时，根据下面的每个水平值执行警告、返航、降落三者之一，或分别设置警告、返航或降落。")])]),t._v(" "),_("tr",[_("td",[t._v("电池警告水平")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT_LOW_THR"}},[t._v("BAT_LOW_THR")])],1),t._v(" "),_("td",[t._v("需做出警告（或其他动作）的电量百分比。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"BAT_CRIT_THR"}}),t._v("电池故障保护水平")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT_CRIT_THR"}},[t._v("BAT_CRIT_THR")])],1),t._v(" "),_("td",[t._v("电量低于该百分比则返航（或者执行其他事前选择动作）。")])]),t._v(" "),_("tr",[_("td",[t._v("电量紧急水平")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT_EMERGEN_THR"}},[t._v("BAT_EMERGEN_THR")])],1),t._v(" "),_("td",[t._v("电量低于该百分比则（立即）触发降落动作。")])])])]),t._v(" "),_("p",[_("span",{attrs:{id:"rc_loss_failsafe"}})]),t._v(" "),_("h3",{attrs:{id:"rc-loss-failsafe"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rc-loss-failsafe"}},[t._v("#")]),t._v(" RC Loss Failsafe")]),t._v(" "),_("p",[t._v("The RC Loss failsafe is triggered if the RC transmitter link is lost "),_("em",[t._v("in manual modes")]),t._v(" (RC loss does not trigger the failsafe in automatic modes - e.g. during missions).")]),t._v(" "),_("p",[_("img",{attrs:{src:a(636),alt:"Safety - RC Loss (QGC)"}})]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" 为了"),_("em",[t._v("检测遥控信号丢失情况")]),t._v("，可能还需要配置 PX4 和接收机："),_("RouterLink",{attrs:{to:"/zh/config/radio.html#rc_loss_detection"}},[t._v("无线电设置 > 遥控信号丢失检测")]),t._v("。")],1)]),t._v(" "),_("p",[t._v("设置和基本参数如下所示。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("设置")]),t._v(" "),_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("遥控信号丢失超时")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_LOSS_T"}},[t._v("COM_RC_LOSS_T")])],1),t._v(" "),_("td",[t._v("遥控信号失联后到故障保险触发前的时间。")])]),t._v(" "),_("tr",[_("td",[t._v("故障保护动作")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")])],1),t._v(" "),_("td",[t._v("禁用，悬停，返航，降落，终止，锁定。")])])])]),t._v(" "),_("h3",{attrs:{id:"数据链路丢失故障保护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据链路丢失故障保护"}},[t._v("#")]),t._v(" 数据链路丢失故障保护")]),t._v(" "),_("p",[t._v("The Data Link Loss failsafe is triggered if a telemetry link (connection to ground station) is lost when flying a "),_("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[t._v("mission")]),t._v(".")],1),t._v(" "),_("p",[_("img",{attrs:{src:a(637),alt:"Safety - Data Link Loss (QGC)"}})]),t._v(" "),_("p",[t._v("The settings and underlying parameters are shown below.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("设置")]),t._v(" "),_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("数据链路丢失超时")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DL_LOSS_T"}},[t._v("COM_DL_LOSS_T")])],1),t._v(" "),_("td",[t._v("数据连接断开后到故障保护触发之前的时间。")])]),t._v(" "),_("tr",[_("td",[t._v("故障保护动作")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_DLL_ACT"}},[t._v("NAV_DLL_ACT")])],1),t._v(" "),_("td",[t._v("禁用，悬停，返航，降落，终止，锁定。")])])])]),t._v(" "),_("h3",{attrs:{id:"地理围栏故障保护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#地理围栏故障保护"}},[t._v("#")]),t._v(" 地理围栏故障保护")]),t._v(" "),_("p",[t._v("The "),_("em",[t._v("Geofence Failsafe")]),t._v(' is a "virtual" cylinder centered around the home position. If the vehicle moves outside the radius or above the altitude the specified '),_("em",[t._v("Failsafe Action")]),t._v(" will trigger.")]),t._v(" "),_("p",[_("img",{attrs:{src:a(638),alt:"Safety - Geofence (QGC)"}})]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Tip")]),t._v(" PX4 单独支持更复杂的地理围栏几何结构，如多个任意多边形和圆形内外的区域，设置操作为："),_("RouterLink",{attrs:{to:"/zh/flying/geofence.html"}},[t._v("飞行 > 地理围栏")]),t._v("。")],1)]),t._v(" "),_("p",[t._v("The settings and underlying "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#geofence"}},[t._v("geofence parameters")]),t._v(" are shown below.")],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("设置")]),t._v(" "),_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("冲出围栏时的响应动作")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_ACTION"}},[t._v("GF_ACTION")])],1),t._v(" "),_("td",[t._v("None, Warning, Hold mode, Return mode, Terminate, Land.")])]),t._v(" "),_("tr",[_("td",[t._v("最大半径")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_MAX_HOR_DIST"}},[t._v("GF_MAX_HOR_DIST")])],1),t._v(" "),_("td",[t._v("地理围栏圆柱体的水平半径。 如果为 0，则禁用地理围栏。")])]),t._v(" "),_("tr",[_("td",[t._v("最大高度")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_MAX_VER_DIST"}},[t._v("GF_MAX_VER_DIST")])],1),t._v(" "),_("td",[t._v("地理围栏圆柱体的高度。 如果为 0，则禁用地理围栏。")])])])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" 通过设置 "),_("code",[t._v("GF_ACTION")]),t._v(" 来终止飞行将导致机体因违反地理围栏而急停。 由于这种情况具有一定的危险性，可以利用 "),_("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")]),t._v(" 禁用此功能（需要将其重置为0才能真正关闭系统）。")])]),t._v(" "),_("p",[t._v("The following settings also apply, but are not displayed in the QGC UI.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("设置")]),t._v(" "),_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("地理围栏定高模式")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_ALTMODE"}},[t._v("GF_ALTMODE")])],1),t._v(" "),_("td",[t._v("使用的高度参考值：0 = WGS84，1 = AMSL。")])]),t._v(" "),_("tr",[_("td",[t._v("地理围栏计数限制")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_COUNT"}},[t._v("GF_COUNT")])],1),t._v(" "),_("td",[t._v("设定需要检测到多少次在围栏之外的位置才能触发违反地理围栏的事件。")])]),t._v(" "),_("tr",[_("td",[t._v("地理围栏来源")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_SOURCE"}},[t._v("GF_SOURCE")])],1),t._v(" "),_("td",[t._v("设置定位是来自全局位置估计还是直接来自 GPS 设备。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"CBRK_FLIGHTTERM"}}),t._v("飞行终止断路器")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")])],1),t._v(" "),_("td",[t._v("启用/禁用飞行终止操作（默认禁用）。")])])])]),t._v(" "),_("p",[_("span",{attrs:{id:"return_settings"}})]),t._v(" "),_("h3",{attrs:{id:"return-mode-settings"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#return-mode-settings"}},[t._v("#")]),t._v(" Return Mode Settings")]),t._v(" "),_("p",[_("em",[t._v("Return")]),t._v(" is a common "),_("a",{attrs:{href:"#failsafe_actions"}},[t._v("failsafe action")]),t._v(" that engages "),_("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("Return mode")]),t._v(" to return the vehicle to the home position. This section shows how to set the land/loiter behaviour after returning.")],1),t._v(" "),_("p",[_("img",{attrs:{src:a(639),alt:"Safety - Return Home Settings (QGC)"}})]),t._v(" "),_("p",[t._v("The settings and underlying parameters are shown below:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("设置")]),t._v(" "),_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("爬升高度")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")])],1),t._v(" "),_("td",[t._v("返航飞行时，机体上升到该最低高度（如果低于）。")])]),t._v(" "),_("tr",[_("td",[t._v("返航行为")]),t._v(" "),_("td"),t._v(" "),_("td",[_("em",[t._v("返航动作")]),t._v("的选择：降落，悬停且不降落，或一定时间后悬停并降落。")])]),t._v(" "),_("tr",[_("td",[t._v("悬停高度")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")])],1),t._v(" "),_("td",[t._v("如果选择了返航并悬停，您还可以指定机体保持的高度。")])]),t._v(" "),_("tr",[_("td",[t._v("悬停时间")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")])],1),t._v(" "),_("td",[t._v("如果选择返航并悬停随后降落，您还可以指定机体将保持悬停多长时间。")])])])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" 返航行为由 "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v(" 定义。 如果该参数为负值，机体将立即着陆。 更多信息可参阅"),_("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航模式")]),t._v("。")],1)]),t._v(" "),_("h3",{attrs:{id:"降落模式设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#降落模式设置"}},[t._v("#")]),t._v(" 降落模式设置")]),t._v(" "),_("p",[_("em",[t._v("Land at the current position")]),t._v(" is a common "),_("a",{attrs:{href:"#failsafe_actions"}},[t._v("failsafe action")]),t._v(" that engages "),_("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("Land Mode")]),t._v(". This section shows how to control when and if the vehicle automatically disarms after landing. For Multicopters (only) you can additionally set the descent rate.")],1),t._v(" "),_("p",[_("img",{attrs:{src:a(640),alt:"Safety - Land Mode Settings (QGC)"}})]),t._v(" "),_("p",[t._v("The settings and underlying parameters are shown below:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("设置")]),t._v(" "),_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("几秒后锁定")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),_("td",[t._v("选中复选框以指定机体在降落后上锁。 该值必须是非零的，但可以是小于一秒的小数。")])]),t._v(" "),_("tr",[_("td",[t._v("降落速率")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")])],1),t._v(" "),_("td",[t._v("下降速率（仅限多旋翼）。")])])])]),t._v(" "),_("p",[_("span",{attrs:{id:"failsafe_other"}})]),t._v(" "),_("h2",{attrs:{id:"other-failsafe-settings"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#other-failsafe-settings"}},[t._v("#")]),t._v(" Other Failsafe Settings")]),t._v(" "),_("p",[t._v("This section contains information about failsafe settings that cannot be configured through the "),_("em",[t._v("QGroundControl")]),t._v(" "),_("a",{attrs:{href:"#qgc_safety_setup"}},[t._v("Safety Setup")]),t._v(" page.")]),t._v(" "),_("h3",{attrs:{id:"位置-gps-丢失故障保护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#位置-gps-丢失故障保护"}},[t._v("#")]),t._v(" 位置（GPS）丢失故障保护")]),t._v(" "),_("p",[t._v("The "),_("em",[t._v("Position Loss Failsafe")]),t._v(" is triggered if the quality of the PX4 position estimate falls below acceptable levels (this might be caused by GPS loss) while in a mode that requires an acceptable position estimate.")]),t._v(" "),_("p",[t._v("The failure action is controlled by "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_POSCTL_NAVL"}},[t._v("COM_POSCTL_NAVL")]),t._v(", based on whether RC control is assumed to be available (and altitude information):")],1),t._v(" "),_("ul",[_("li",[_("code",[t._v("0")]),t._v("：遥控控制可用。 如果高度估计值可用，则切换到"),_("em",[t._v("定高模式")]),t._v("，否则为"),_("em",[t._v("自稳模式")]),t._v("。")]),t._v(" "),_("li",[_("code",[t._v("1")]),t._v("：遥控控制"),_("em",[t._v("不")]),t._v("可用。 如果高度估计值可用，则切换到"),_("em",[t._v("降落模式")]),t._v("，否则进入飞行终止。")])]),t._v(" "),_("p",[t._v("Fixed Wing vehicles additionally have a parameter ("),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_LT"}},[t._v("NAV_GPSF_LT")]),t._v(") for defining how long they will loiter (circle) after losing position before attempting to land.")],1),t._v(" "),_("p",[t._v("The relevant parameters for all vehicles shown below (also see "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#gps-failure-navigation"}},[t._v("GPS Failure navigation parameters")]),t._v("):")],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_POS_FS_DELAY"}},[t._v("COM_POS_FS_DELAY")])],1),t._v(" "),_("td",[t._v("失去位置后到触发故障保护前的延迟。")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_POSCTL_NAVL"}},[t._v("COM_POSCTL_NAVL")])],1),t._v(" "),_("td",[t._v("执行任务期间的位置控制导航丢失响应。 值：0——假设使用遥控，1——假设没有遥控。")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_VELPOSERR"}},[t._v("CBRK_VELPOSERR")])],1),t._v(" "),_("td",[t._v("用于位置错误检查的断路器（在所有模式下禁用错误检查）。")])])])]),t._v(" "),_("p",[t._v("Parameters that only affect Fixed Wing vehicles:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_LT"}},[t._v("NAV_GPSF_LT")])],1),t._v(" "),_("td",[t._v("悬停时间（以在飞行终止前等待 GPS 恢复）。 设置为 0 以禁用。")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_P"}},[t._v("NAV_GPSF_P")])],1),t._v(" "),_("td",[t._v("以一定的俯仰角盘旋。")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_R"}},[t._v("NAV_GPSF_R")])],1),t._v(" "),_("td",[t._v("以一定的横滚/侧倾角盘旋。")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_TR"}},[t._v("NAV_GPSF_TR")])],1),t._v(" "),_("td",[t._v("盘旋时的油门量。")])])])]),t._v(" "),_("h3",{attrs:{id:"offboard-中断故障保护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#offboard-中断故障保护"}},[t._v("#")]),t._v(" Offboard 中断故障保护")]),t._v(" "),_("p",[t._v("The "),_("em",[t._v("Offboard Loss Failsafe")]),t._v(" is triggered if the offboard link is lost while under Offboard control. Different failsafe behaviour can be specified based on whether or not there is also an RC connection available.")]),t._v(" "),_("p",[t._v("The relevant parameters are shown below:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OF_LOSS_T"}},[t._v("COM_OF_LOSS_T")])],1),t._v(" "),_("td",[t._v("Offboard 连接中断后到触发故障保护前的延迟。")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBL_ACT"}},[t._v("COM_OBL_ACT")])],1),t._v(" "),_("td",[t._v("遥控不可用时的故障保护动作：降落模式、保持模式、返航模式。")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBL_RC_ACT"}},[t._v("COM_OBL_RC_ACT")])],1),t._v(" "),_("td",[t._v("如果遥控可用，则故障保护动作：定点模式、定高模式、手动模式、返航模式、降落模式、保持模式。")])])])]),t._v(" "),_("h3",{attrs:{id:"任务故障保护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#任务故障保护"}},[t._v("#")]),t._v(" 任务故障保护")]),t._v(" "),_("p",[t._v("The Mission Failsafe checks prevent a previous mission being started at a new takeoff location or if it is too big (distance between waypoints is too great). The failsafe action is that the mission will not be run.")]),t._v(" "),_("p",[t._v("The relevant parameters are shown below:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_DIST_1WP"}},[t._v("MIS_DIST_1WP")])],1),t._v(" "),_("td",[t._v("如果当前航点距离起飞点的距离大于该值，则任务不会启动。 如果值为 0 或小于，则禁用。")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_DIST_WPS"}},[t._v("MIS_DIST_WPS")])],1),t._v(" "),_("td",[t._v("如果随后两个航点之间的任何距离大于这个数值，则不会开始执行任务。")])])])]),t._v(" "),_("h3",{attrs:{id:"交通规避故障保护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#交通规避故障保护"}},[t._v("#")]),t._v(" 交通规避故障保护")]),t._v(" "),_("p",[t._v("The Traffic Avoidance Failsafe allows PX4 to respond to transponder data (e.g. from "),_("RouterLink",{attrs:{to:"/zh/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADSB transponders")]),t._v(") during missions.")],1),t._v(" "),_("p",[t._v("The relevant parameters are shown below:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")])],1),t._v(" "),_("td",[t._v("设置故障保护动作：禁用、警告、返航模式、降落模式。")])])])]),t._v(" "),_("h3",{attrs:{id:"自适应-quadchute-故障安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自适应-quadchute-故障安全"}},[t._v("#")]),t._v(" 自适应 QuadChute 故障安全")]),t._v(" "),_("p",[t._v("Failsafe for when a pusher motor fails (or airspeed sensor) and a VTOL vehicle can no longer achieve a desired altitude setpoint in fixed-wing mode. If triggered, the vehicle will transition to multicopter mode and enter failsafe "),_("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("Return mode")]),t._v(".")],1),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" You can pause "),_("em",[t._v("Return mode")]),t._v(" and transition back to fixed wing if desired. Note that if the condition that caused the failsafe still exists, it may trigger again!")])]),t._v(" "),_("p",[t._v("The relevant parameters are shown below:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_FW_ALT_ERR"}},[t._v("VT_FW_ALT_ERR")])],1),t._v(" "),_("td",[t._v("固定翼飞行的最大负高度误差。 如果下降的高度超过该值，使实际高度低于设定高度，则机体将切换回多旋翼模式并执行故障保护返航操作。")])])])]),t._v(" "),_("p",[_("span",{attrs:{id:"failure_detector"}})]),t._v(" "),_("h2",{attrs:{id:"failure-detector"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#failure-detector"}},[t._v("#")]),t._v(" Failure Detector")]),t._v(" "),_("p",[t._v("The failure detector allows a vehicle to take protective action(s) if it unexpectedly flips, or if it is notified by an external failure detection system.")]),t._v(" "),_("p",[t._v("During "),_("strong",[t._v("flight")]),t._v(", the failure detector can be used to trigger "),_("RouterLink",{attrs:{to:"/zh/advanced_config/flight_termination.html"}},[t._v("flight termination")]),t._v(" if failure conditions are met, which may then launch a "),_("RouterLink",{attrs:{to:"/zh/peripherals/parachute.html"}},[t._v("parachute")]),t._v(" or perform some other action.")],1),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" Failure detection during flight is deactivated by default (enable by setting the parameter: "),_("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v(").")])]),t._v(" "),_("p",[t._v("During "),_("strong",[t._v("takeoff")]),t._v(" the failure detector "),_("a",{attrs:{href:"#attitude_trigger"}},[t._v("attitude trigger")]),t._v(" invokes the "),_("a",{attrs:{href:"#action_lockdown"}},[t._v("lockdown action")]),t._v(" if the vehicle flips (lockdown kills the motors but, unlike flight termination, will not launch a parachute or perform other failure actions). Note that this check is "),_("em",[t._v("always enabled on takeoff")]),t._v(", irrespective of the "),_("code",[t._v("CBRK_FLIGHTTERM")]),t._v(" parameter.")]),t._v(" "),_("p",[t._v("The failure detector is active in all vehicle types and modes, except for those where the vehicle is "),_("em",[t._v("expected")]),t._v(" to do flips (i.e. "),_("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[t._v("Acro mode (MC)")]),t._v(", "),_("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_fw.html"}},[t._v("Acro mode (FW)")]),t._v(", "),_("RouterLink",{attrs:{to:"/zh/flight_modes/rattitude_mc.html"}},[t._v("Rattitude")]),t._v(" and "),_("RouterLink",{attrs:{to:"/zh/flight_modes/manual_fw.html"}},[t._v("Manual (FW)")]),t._v(").")],1),t._v(" "),_("p",[_("span",{attrs:{id:"attitude_trigger"}})]),t._v(" "),_("h3",{attrs:{id:"attitude-trigger"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#attitude-trigger"}},[t._v("#")]),t._v(" Attitude Trigger")]),t._v(" "),_("p",[t._v("The failure detector can be configured to trigger if the vehicle attitude exceeds predefined pitch and roll values for longer than a specified time.")]),t._v(" "),_("p",[t._v("The relevant parameters are shown below:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"CBRK_FLIGHTTERM"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")])],1),t._v(" "),_("td",[t._v("飞行终止断路器。 从 121212（默认）取消设置，以启用由于故障检测器或 FMU 丢失而导致的飞行终止。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FD_FAIL_P"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_P"}},[t._v("FD_FAIL_P")])],1),t._v(" "),_("td",[t._v("最大允许俯仰角（角度制）。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FD_FAIL_R"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_R"}},[t._v("FD_FAIL_R")])],1),t._v(" "),_("td",[t._v("最大允许横滚角（角度制）。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FD_FAIL_P_TTRI"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_P_TTRI"}},[t._v("FD_FAIL_P_TTRI")])],1),t._v(" "),_("td",[t._v("超过故障检测的 "),_("a",{attrs:{href:"#FD_FAIL_P"}},[t._v("FD_FAIL_P")]),t._v(" 时间（默认为 0.3s）。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FD_FAIL_R_TTRI"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_R_TTRI"}},[t._v("FD_FAIL_R_TTRI")])],1),t._v(" "),_("td",[t._v("超过故障检测的 "),_("a",{attrs:{href:"#FD_FAIL_R"}},[t._v("FD_FAIL_R")]),t._v(" 时间（默认为 0.3s）。")])])])]),t._v(" "),_("p",[_("span",{attrs:{id:"external_ats"}})]),t._v(" "),_("h3",{attrs:{id:"external-automatic-trigger-system-ats"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#external-automatic-trigger-system-ats"}},[t._v("#")]),t._v(" External Automatic Trigger System (ATS)")]),t._v(" "),_("p",[t._v("The "),_("a",{attrs:{href:"#failure_detector"}},[t._v("failure detector")]),t._v(", if "),_("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("enabled")]),t._v(", can also be triggered by an external ATS system. The external trigger system must be connected to flight controller port AUX5 (or MAIN5 on boards that do not have AUX ports), and is configured using the parameters below.")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" External ATS is required by "),_("a",{attrs:{href:"https://webstore.ansi.org/Standards/ASTM/ASTMF332218",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASTM F3322-18"),_("OutboundLink")],1),t._v(". One example of an ATS device is the "),_("a",{attrs:{href:"https://fruitychutes.com/uav_rpv_drone_recovery_parachutes/sentinel-automatic-trigger-system.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("FruityChutes Sentinel Automatic Trigger System"),_("OutboundLink")],1),t._v(".")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"FD_EXT_ATS_EN"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_EXT_ATS_EN"}},[t._v("FD_EXT_ATS_EN")])],1),t._v(" "),_("td",[t._v("启用 AUX5 或 MAIN5（取决于飞控板）上的 PWM 输入，以便从外部自动触发系统（ATS）启用故障保护。 默认值：禁用。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FD_EXT_ATS_TRIG"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_EXT_ATS_TRIG"}},[t._v("FD_EXT_ATS_TRIG")])],1),t._v(" "),_("td",[t._v("来自外部自动触发系统的用于接通故障保护的 PWM 阈值。 默认值：1900m/s。")])])])]),t._v(" "),_("p",[_("span",{attrs:{id:"safety_switch"}})]),t._v(" "),_("h2",{attrs:{id:"emergency-switches"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#emergency-switches"}},[t._v("#")]),t._v(" Emergency Switches")]),t._v(" "),_("p",[t._v("Remote control switches can be configured (as part of "),_("em",[t._v("QGroundControl")]),t._v(" "),_("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("Flight Mode Setup")]),t._v(") to allow you to take rapid corrective action in the event of a problem or emergency; for example, to stop all motors, or activate "),_("a",{attrs:{href:"#return_switch"}},[t._v("Return mode")]),t._v(".")],1),t._v(" "),_("p",[t._v("This section lists the available emergency switches.")]),t._v(" "),_("p",[_("span",{attrs:{id:"kill_switch"}})]),t._v(" "),_("h3",{attrs:{id:"kill-switch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kill-switch"}},[t._v("#")]),t._v(" Kill Switch")]),t._v(" "),_("p",[t._v("A kill switch immediately stops all motor outputs (and if flying, the vehicle will start to fall)! The motors will restart if the switch is reverted within 5 seconds. After 5 seconds the vehicle will automatically disarm; you will need to arm it again in order to start the motors.")]),t._v(" "),_("p",[_("span",{attrs:{id:"arming_switch"}})]),t._v(" "),_("h3",{attrs:{id:"arm-disarm-switch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#arm-disarm-switch"}},[t._v("#")]),t._v(" Arm/Disarm Switch")]),t._v(" "),_("p",[t._v("The arm/disarm switch is a "),_("em",[t._v("direct replacement")]),t._v(" for the default stick-based arming/disarming mechanism (and serves the same purpose: making sure there is an intentional step involved before the motors start/stop). It might be used in preference to the default mechanism because:")]),t._v(" "),_("ul",[_("li",[t._v("这种机制偏向于切换动作而不是持续运动。")]),t._v(" "),_("li",[t._v("这种机制可以避免因为某种意外误触而引发的飞行期间解锁/上锁。")]),t._v(" "),_("li",[t._v("这种机制没有延迟（立即作出反应）。")])]),t._v(" "),_("p",[t._v("The arm/disarm switch immediately disarms (stop) motors for those "),_("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html"}},[t._v("flight modes")]),t._v(" that "),_("em",[t._v("support disarming in flight")]),t._v(". This includes:")],1),t._v(" "),_("ul",[_("li",[_("em",[t._v("手动模式")])]),t._v(" "),_("li",[_("em",[t._v("特技模式")])]),t._v(" "),_("li",[_("em",[t._v("自稳模式")])]),t._v(" "),_("li",[_("em",[t._v("半自稳模式")])])]),t._v(" "),_("p",[t._v("For modes that do not support disarming in flight, the switch is ignored during flight, but may be used after landing is detected. This includes "),_("em",[t._v("Position mode")]),t._v(" and autonomous modes (e.g. "),_("em",[t._v("Mission")]),t._v(", "),_("em",[t._v("Land")]),t._v(" etc.).")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" "),_("a",{attrs:{href:"#auto-disarming-timeouts"}},[t._v("Auto disarm timeouts")]),t._v(" (e.g. via "),_("a",{attrs:{href:"#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")]),t._v(") are independent of the arm/disarm switch - ie even if the switch is armed the timeouts will still work.")])]),t._v(" "),_("p",[_("span",{attrs:{id:"return_switch"}})]),t._v(" "),_("h3",{attrs:{id:"return-switch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#return-switch"}},[t._v("#")]),t._v(" Return Switch")]),t._v(" "),_("p",[t._v("A return switch can be used to immediately engage "),_("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("Return mode")]),t._v(".")],1),t._v(" "),_("h2",{attrs:{id:"其他安全设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他安全设置"}},[t._v("#")]),t._v(" 其他安全设置")]),t._v(" "),_("p",[_("span",{attrs:{id:"auto-disarming-timeouts"}})]),t._v(" "),_("h3",{attrs:{id:"auto-disarming-timeouts"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#auto-disarming-timeouts"}},[t._v("#")]),t._v(" Auto-disarming Timeouts")]),t._v(" "),_("p",[t._v("You can set timeouts to automatically disarm a vehicle if it is too slow to takeoff, and/or after landing (disarming the vehicle removes power to the motors, so the propellers won't spin).")]),t._v(" "),_("p",[t._v("The "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("relevant parameters")]),t._v(" are shown below:")],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"COM_DISARM_LAND"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),_("td",[t._v("降落后自动上锁的超时时间。")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"COM_DISARM_PRFLT"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")])],1),t._v(" "),_("td",[t._v("如果起飞速度太慢，将启动自动上锁。")])])])]),t._v(" "),_("h2",{attrs:{id:"更多信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Safety.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 用户手册 > 安全设置"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports},634:function(t,e,a){t.exports=a.p+"assets/img/safety_setup.13d1efc7.png"},635:function(t,e,a){t.exports=a.p+"assets/img/safety_battery.3ca07fa4.png"},636:function(t,e,a){t.exports=a.p+"assets/img/safety_rc_loss.af75bf02.png"},637:function(t,e,a){t.exports=a.p+"assets/img/safety_data_link_loss.bd31108e.png"},638:function(t,e,a){t.exports=a.p+"assets/img/safety_geofence.e3412dca.png"},639:function(t,e,a){t.exports=a.p+"assets/img/safety_return_home.ad409241.png"},640:function(t,e,a){t.exports=a.p+"assets/img/safety_land_mode.abb91378.png"}}]);