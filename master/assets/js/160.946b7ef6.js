(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{2898:function(t,e,a){"use strict";a.r(e);var r=a(19),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"安全配置-故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全配置-故障保护"}},[t._v("#")]),t._v(" 安全配置（故障保护）")]),t._v(" "),r("p",[t._v("PX4有许多安全功能，可以在发生故障时保护并恢复您的机体：")]),t._v(" "),r("ul",[r("li",[r("em",[t._v("Failsafes")]),t._v(" allow you to specify areas and conditions under which you can safely fly, and the "),r("a",{attrs:{href:"#failsafe-actions"}},[t._v("action")]),t._v(" that will be performed if a failsafe is triggered (for example, landing, holding position, or returning to a specified point). The most important failsafe settings are configured in the "),r("em",[t._v("QGroundControl")]),t._v(" "),r("a",{attrs:{href:"#qgroundcontrol-safety-setup"}},[t._v("Safety Setup")]),t._v(" page. Others must be configured via "),r("a",{attrs:{href:"#other-safety-settings"}},[t._v("parameters")]),t._v(".")]),t._v(" "),r("li",[r("a",{attrs:{href:"#emergency-switches"}},[t._v("Safety switches")]),t._v(" on the remote control can be used to immediately stop motors or return the vehicle in the event of a problem.")])]),t._v(" "),r("h2",{attrs:{id:"故障保护动作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障保护动作"}},[t._v("#")]),t._v(" 故障保护动作")]),t._v(" "),r("p",[t._v("Each failsafe defines its own set of actions. Some of the more common failsafe actions are:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("动作")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{id:"action_none"}}),t._v("无/禁用")]),t._v(" "),r("td",[t._v("无动作 (故障保护将被忽略)。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"action_warning"}}),t._v("警告")]),t._v(" "),r("td",[t._v("警告信息将被发送至 "),r("em",[t._v("QGroundControl")]),t._v("。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"action_hold"}}),r("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[t._v("保持模式")])],1),t._v(" "),r("td",[t._v("机体将进入"),r("em",[t._v("保持模式")]),t._v("。 对于多旋翼飞行器，这意味着飞行器将悬停，而对于固定翼飞行器，飞行器将盘旋。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"action_return"}}),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航模式")])],1),t._v(" "),r("td",[t._v("机体将进入"),r("em",[t._v("返航模式")]),t._v("。 Return behaviour can be set in the "),r("a",{attrs:{href:"#return-mode-settings"}},[t._v("Return Home Settings")]),t._v(" (below).")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"action_land"}}),r("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("降落模式")])],1),t._v(" "),r("td",[t._v("机体将进入降落模式，并立即执行着陆动作。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"action_flight_termination"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/flight_termination.html"}},[t._v("飞行终止")])],1),t._v(" "),r("td",[t._v("关闭所有控制器并将所有 PWM 输出设置为其故障保护值（例如 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v("，"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v(" 等输出）。 故障保护输出可用于启动降落伞、起落架或执行其他操作。 对于固定翼飞行器，这可能允许您将机体滑翔至安全位置。")],1)]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"action_lockdown"}}),t._v("锁定")]),t._v(" "),r("td",[t._v("制动发动机（使其上锁）。 This is the same as using the "),r("a",{attrs:{href:"#kill-switch"}},[t._v("kill switch")]),t._v(".")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("It is possible to recover from a failsafe action (if the cause is fixed) by switching modes. For example, in the case where RC Loss failsafe causes the vehicle to enter "),r("em",[t._v("Return mode")]),t._v(", if RC is recovered you can change to "),r("em",[t._v("Position mode")]),t._v(" and continue flying.")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("If a failsafe occurs while the vehicle is responding to another failsafe (e.g. Low battery while in Return mode due to RC Loss), the specified failsafe action for the second trigger is ignored. Instead the action is determined by separate system level and vehicle specific code. This might result in the vehicle being changed to a manual mode so the user can directly manage recovery.")])]),t._v(" "),r("h2",{attrs:{id:"qgroundcontrol-安全设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-安全设置"}},[t._v("#")]),t._v(" QGroundControl 安全设置")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("QGroundControl")]),t._v(" Safety Setup page is accessed by clicking the "),r("em",[t._v("QGroundControl")]),t._v(" "),r("strong",[t._v("Gear")]),t._v(" icon (Vehicle Setup - top toolbar) and then "),r("strong",[t._v("Safety")]),t._v(" in the sidebar). This includes the most important failsafe settings (battery, RC loss etc.) and the settings for the return actions "),r("em",[t._v("Return")]),t._v(" and "),r("em",[t._v("Land")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:a(662),alt:"Safety Setup (QGC)"}})]),t._v(" "),r("h3",{attrs:{id:"低电量故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#低电量故障保护"}},[t._v("#")]),t._v(" 低电量故障保护")]),t._v(" "),r("p",[t._v("The low battery failsafe is triggered when the battery capacity drops below one (or more warning) level values.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(663),alt:"Safety - Battery (QGC)"}})]),t._v(" "),r("p",[t._v("The most common configuration is to set the values and action as above (with "),r("code",[t._v("Warn > Failsafe > Emergency")]),t._v("). With this configuration the failsafe will trigger warning, then return, and finally landing if capacity drops below the respective levels.")]),t._v(" "),r("p",[t._v("It is also possible to set the "),r("em",[t._v("Failsafe Action")]),t._v(" to warn, return, or land when the "),r("a",{attrs:{href:"#BAT_CRIT_THR"}},[t._v("Battery Failsafe Level")]),t._v(" failsafe level is reached.")]),t._v(" "),r("p",[t._v("The settings and underlying parameters are shown below.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("故障保护动作")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_LOW_BAT_ACT"}},[t._v("COM_LOW_BAT_ACT")])],1),t._v(" "),r("td",[t._v("当电池电量过低时，根据下面的每个水平值执行警告、返航、降落三者之一，或分别设置警告、返航或降落。")])]),t._v(" "),r("tr",[r("td",[t._v("电池警告水平")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT_LOW_THR"}},[t._v("BAT_LOW_THR")])],1),t._v(" "),r("td",[t._v("需做出警告（或其他动作）的电量百分比。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"BAT_CRIT_THR"}}),t._v("电池故障保护水平")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT_CRIT_THR"}},[t._v("BAT_CRIT_THR")])],1),t._v(" "),r("td",[t._v("电量低于该百分比则返航（或者执行其他事前选择动作）。")])]),t._v(" "),r("tr",[r("td",[t._v("电量紧急水平")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT_EMERGEN_THR"}},[t._v("BAT_EMERGEN_THR")])],1),t._v(" "),r("td",[t._v("电量低于该百分比则（立即）触发降落动作。")])])])]),t._v(" "),r("h3",{attrs:{id:"遥控信号丢失故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#遥控信号丢失故障保护"}},[t._v("#")]),t._v(" 遥控信号丢失故障保护")]),t._v(" "),r("p",[t._v("The RC Loss failsafe is triggered if the RC transmitter link is lost in manual modes (by default RC loss does not trigger the failsafe in missions).")]),t._v(" "),r("p",[r("img",{attrs:{src:a(664),alt:"Safety - RC Loss (QGC)"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4 and the receiver may also need to be configured in order to *detect RC loss*: [Radio Setup > RC Loss Detection](../config/radio.md#rc-loss-detection).")])]),t._v(" "),r("p",[t._v("The settings and underlying parameters are shown below.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("遥控信号丢失超时")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_LOSS_T"}},[t._v("COM_RC_LOSS_T")])],1),t._v(" "),r("td",[t._v("遥控信号失联后到故障保险触发前的时间。")])]),t._v(" "),r("tr",[r("td",[t._v("故障保护动作")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")])],1),t._v(" "),r("td",[t._v("禁用，悬停，返航，降落，终止，锁定。")])]),t._v(" "),r("tr",[r("td",[t._v("RC Loss Exceptions")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RCL_EXCEPT"}},[t._v("COM_RCL_EXCEPT")])],1),t._v(" "),r("td",[t._v("Set the modes in which RC loss is ignored: Mission (default), Hold, Offboard.")])])])]),t._v(" "),r("h3",{attrs:{id:"数据链路丢失故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据链路丢失故障保护"}},[t._v("#")]),t._v(" 数据链路丢失故障保护")]),t._v(" "),r("p",[t._v("The Data Link Loss failsafe is triggered if a telemetry link (connection to ground station) is lost when flying a "),r("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[t._v("mission")]),t._v(".")],1),t._v(" "),r("p",[r("img",{attrs:{src:a(665),alt:"Safety - Data Link Loss (QGC)"}})]),t._v(" "),r("p",[t._v("The settings and underlying parameters are shown below.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("数据链路丢失超时")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DL_LOSS_T"}},[t._v("COM_DL_LOSS_T")])],1),t._v(" "),r("td",[t._v("数据连接断开后到故障保护触发之前的时间。")])]),t._v(" "),r("tr",[r("td",[t._v("故障保护动作")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_DLL_ACT"}},[t._v("NAV_DLL_ACT")])],1),t._v(" "),r("td",[t._v("禁用，悬停，返航，降落，终止，锁定。")])])])]),t._v(" "),r("h3",{attrs:{id:"地理围栏故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地理围栏故障保护"}},[t._v("#")]),t._v(" 地理围栏故障保护")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Geofence Failsafe")]),t._v(' is a "virtual" cylinder centered around the home position. If the vehicle moves outside the radius or above the altitude the specified '),r("em",[t._v("Failsafe Action")]),t._v(" will trigger.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(666),alt:"Safety - Geofence (QGC)"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4 separately supports more complicated GeoFence geometries with multiple arbitrary polygonal and circular inclusion and exclusion areas: [Flying > GeoFence](../flying/geofence.md).")])]),t._v(" "),r("p",[t._v("The settings and underlying "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#geofence"}},[t._v("geofence parameters")]),t._v(" are shown below.")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("冲出围栏时的响应动作")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_ACTION"}},[t._v("GF_ACTION")])],1),t._v(" "),r("td",[t._v("None, Warning, Hold mode, Return mode, Terminate, Land.")])]),t._v(" "),r("tr",[r("td",[t._v("最大半径")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_MAX_HOR_DIST"}},[t._v("GF_MAX_HOR_DIST")])],1),t._v(" "),r("td",[t._v("地理围栏圆柱体的水平半径。 如果为 0，则禁用地理围栏。")])]),t._v(" "),r("tr",[r("td",[t._v("最大高度")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_MAX_VER_DIST"}},[t._v("GF_MAX_VER_DIST")])],1),t._v(" "),r("td",[t._v("地理围栏圆柱体的高度。 如果为 0，则禁用地理围栏。")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Setting "),r("code",[t._v("GF_ACTION")]),t._v(" to terminate will kill the vehicle on violation of the fence. Due to the inherent danger of this, this function is disabled using "),r("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")]),t._v(", which needs to be reset to 0 to really shut down the system.")])]),t._v(" "),r("p",[t._v("The following settings also apply, but are not displayed in the QGC UI.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("地理围栏定高模式")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_ALTMODE"}},[t._v("GF_ALTMODE")])],1),t._v(" "),r("td",[t._v("使用的高度参考值：0 = WGS84，1 = AMSL。")])]),t._v(" "),r("tr",[r("td",[t._v("地理围栏计数限制")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_COUNT"}},[t._v("GF_COUNT")])],1),t._v(" "),r("td",[t._v("设定需要检测到多少次在围栏之外的位置才能触发违反地理围栏的事件。")])]),t._v(" "),r("tr",[r("td",[t._v("地理围栏来源")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_SOURCE"}},[t._v("GF_SOURCE")])],1),t._v(" "),r("td",[t._v("设置定位是来自全局位置估计还是直接来自 GPS 设备。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"CBRK_FLIGHTTERM"}}),t._v("飞行终止断路器")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")])],1),t._v(" "),r("td",[t._v("启用/禁用飞行终止操作（默认禁用）。")])])])]),t._v(" "),r("h3",{attrs:{id:"返航设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#返航设置"}},[t._v("#")]),t._v(" 返航设置")]),t._v(" "),r("p",[r("em",[t._v("Return")]),t._v(" is a common "),r("a",{attrs:{href:"#failsafe-actions"}},[t._v("failsafe action")]),t._v(" that engages "),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("Return mode")]),t._v(" to return the vehicle to the home position. This section shows how to set the land/loiter behaviour after returning.")],1),t._v(" "),r("p",[r("img",{attrs:{src:a(667),alt:"Safety - Return Home Settings (QGC)"}})]),t._v(" "),r("p",[t._v("The settings and underlying parameters are shown below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("爬升高度")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")])],1),t._v(" "),r("td",[t._v("返航飞行时，机体上升到该最低高度（如果低于）。")])]),t._v(" "),r("tr",[r("td",[t._v("返航行为")]),t._v(" "),r("td"),t._v(" "),r("td",[r("em",[t._v("返航动作")]),t._v("的选择：降落，悬停且不降落，或一定时间后悬停并降落。")])]),t._v(" "),r("tr",[r("td",[t._v("悬停高度")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")])],1),t._v(" "),r("td",[t._v("如果选择了返航并悬停，您还可以指定机体保持的高度。")])]),t._v(" "),r("tr",[r("td",[t._v("悬停时间")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")])],1),t._v(" "),r("td",[t._v("如果选择返航并悬停随后降落，您还可以指定机体将保持悬停多长时间。")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The return behavour is defined by "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v(". If negative the vehicle will land immediately. Additional information can be found in "),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("Return mode")]),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"降落模式设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#降落模式设置"}},[t._v("#")]),t._v(" 降落模式设置")]),t._v(" "),r("p",[r("em",[t._v("Land at the current position")]),t._v(" is a common "),r("a",{attrs:{href:"#failsafe-actions"}},[t._v("failsafe action")]),t._v(" that engages "),r("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("Land Mode")]),t._v(". This section shows how to control when and if the vehicle automatically disarms after landing. For Multicopters (only) you can additionally set the descent rate.")],1),t._v(" "),r("p",[r("img",{attrs:{src:a(668),alt:"Safety - Land Mode Settings (QGC)"}})]),t._v(" "),r("p",[t._v("The settings and underlying parameters are shown below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("几秒后锁定")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),r("td",[t._v("选中复选框以指定机体在降落后上锁。 该值必须是非零的，但可以是小于一秒的小数。")])]),t._v(" "),r("tr",[r("td",[t._v("降落速率")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")])],1),t._v(" "),r("td",[t._v("下降速率（仅限多旋翼）。")])])])]),t._v(" "),r("h2",{attrs:{id:"其他故障保护设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他故障保护设置"}},[t._v("#")]),t._v(" 其他故障保护设置")]),t._v(" "),r("p",[t._v("This section contains information about failsafe settings that cannot be configured through the "),r("em",[t._v("QGroundControl")]),t._v(" "),r("a",{attrs:{href:"#qgroundcontrol-safety-setup"}},[t._v("Safety Setup")]),t._v(" page.")]),t._v(" "),r("h3",{attrs:{id:"位置-gps-丢失故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#位置-gps-丢失故障保护"}},[t._v("#")]),t._v(" 位置（GPS）丢失故障保护")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Position Loss Failsafe")]),t._v(" is triggered if the quality of the PX4 position estimate falls below acceptable levels (this might be caused by GPS loss) while in a mode that requires an acceptable position estimate.")]),t._v(" "),r("p",[t._v("The failure action is controlled by "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_POSCTL_NAVL"}},[t._v("COM_POSCTL_NAVL")]),t._v(", based on whether RC control is assumed to be available (and altitude information):")],1),t._v(" "),r("ul",[r("li",[r("code",[t._v("0")]),t._v("：遥控控制可用。 如果高度估计值可用，则切换到"),r("em",[t._v("定高模式")]),t._v("，否则为"),r("em",[t._v("自稳模式")]),t._v("。")]),t._v(" "),r("li",[r("code",[t._v("1")]),t._v("：遥控控制"),r("em",[t._v("不")]),t._v("可用。 如果高度估计值可用，则切换到"),r("em",[t._v("降落模式")]),t._v("，否则进入飞行终止。")])]),t._v(" "),r("p",[t._v("Fixed Wing vehicles additionally have a parameter ("),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_LT"}},[t._v("NAV_GPSF_LT")]),t._v(") for defining how long they will loiter (circle) after losing position before attempting to land.")],1),t._v(" "),r("p",[t._v("The relevant parameters for all vehicles shown below (also see "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#gps-failure-navigation"}},[t._v("GPS Failure navigation parameters")]),t._v("):")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_POS_FS_DELAY"}},[t._v("COM_POS_FS_DELAY")])],1),t._v(" "),r("td",[t._v("失去位置后到触发故障保护前的延迟。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_POSCTL_NAVL"}},[t._v("COM_POSCTL_NAVL")])],1),t._v(" "),r("td",[t._v("执行任务期间的位置控制导航丢失响应。 值：0——假设使用遥控，1——假设没有遥控。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_VELPOSERR"}},[t._v("CBRK_VELPOSERR")])],1),t._v(" "),r("td",[t._v("用于位置错误检查的断路器（在所有模式下禁用错误检查）。")])])])]),t._v(" "),r("p",[t._v("Parameters that only affect Fixed Wing vehicles:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_LT"}},[t._v("NAV_GPSF_LT")])],1),t._v(" "),r("td",[t._v("悬停时间（以在飞行终止前等待 GPS 恢复）。 设置为 0 以禁用。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_P"}},[t._v("NAV_GPSF_P")])],1),t._v(" "),r("td",[t._v("以一定的俯仰角盘旋。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_R"}},[t._v("NAV_GPSF_R")])],1),t._v(" "),r("td",[t._v("以一定的横滚/侧倾角盘旋。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_TR"}},[t._v("NAV_GPSF_TR")])],1),t._v(" "),r("td",[t._v("盘旋时的油门量。")])])])]),t._v(" "),r("h3",{attrs:{id:"offboard-中断故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#offboard-中断故障保护"}},[t._v("#")]),t._v(" Offboard 中断故障保护")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Offboard Loss Failsafe")]),t._v(" is triggered if the offboard link is lost while under Offboard control. Different failsafe behaviour can be specified based on whether or not there is also an RC connection available.")]),t._v(" "),r("p",[t._v("The relevant parameters are shown below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OF_LOSS_T"}},[t._v("COM_OF_LOSS_T")])],1),t._v(" "),r("td",[t._v("Offboard 连接中断后到触发故障保护前的延迟。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBL_ACT"}},[t._v("COM_OBL_ACT")])],1),t._v(" "),r("td",[t._v("遥控不可用时的故障保护动作：降落模式、保持模式、返航模式。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBL_RC_ACT"}},[t._v("COM_OBL_RC_ACT")])],1),t._v(" "),r("td",[t._v("如果遥控可用，则故障保护动作：定点模式、定高模式、手动模式、返航模式、降落模式、保持模式。")])])])]),t._v(" "),r("h3",{attrs:{id:"任务故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#任务故障保护"}},[t._v("#")]),t._v(" 任务故障保护")]),t._v(" "),r("p",[t._v("The Mission Failsafe checks prevent a previous mission being started at a new takeoff location or if it is too big (distance between waypoints is too great). The failsafe action is that the mission will not be run.")]),t._v(" "),r("p",[t._v("The relevant parameters are shown below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_DIST_1WP"}},[t._v("MIS_DIST_1WP")])],1),t._v(" "),r("td",[t._v("如果当前航点距离起飞点的距离大于该值，则任务不会启动。 如果值为 0 或小于，则禁用。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_DIST_WPS"}},[t._v("MIS_DIST_WPS")])],1),t._v(" "),r("td",[t._v("如果随后两个航点之间的任何距离大于这个数值，则不会开始执行任务。")])])])]),t._v(" "),r("h3",{attrs:{id:"交通规避故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#交通规避故障保护"}},[t._v("#")]),t._v(" 交通规避故障保护")]),t._v(" "),r("p",[t._v("The Traffic Avoidance Failsafe allows PX4 to respond to transponder data (e.g. from "),r("RouterLink",{attrs:{to:"/zh/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADSB transponders")]),t._v(") during missions.")],1),t._v(" "),r("p",[t._v("The relevant parameters are shown below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")])],1),t._v(" "),r("td",[t._v("设置故障保护动作：禁用、警告、返航模式、降落模式。")])])])]),t._v(" "),r("h3",{attrs:{id:"quadchute-failsafe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quadchute-failsafe"}},[t._v("#")]),t._v(" QuadChute Failsafe")]),t._v(" "),r("p",[t._v("Failsafe for when a VTOL vehicle can no longer fly in fixed-wing mode, perhaps because a pusher motor, airspeed sensor or control surface failed. If triggered, the vehicle will immediately switch to multicopter mode. If the vehicle was in "),r("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("Mission mode")]),t._v(" it enters failsafe "),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("Return mode")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The quadchute can also be triggered by sending a MAVLINK "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_VTOL_TRANSITION",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_VTOL_TRANSITION"),r("OutboundLink")],1),t._v(" message with "),r("code",[t._v("param2")]),t._v(" set to "),r("code",[t._v("1")]),t._v(".")])]),t._v(" "),r("p",[t._v("The parameters that control when the quadchute will trigger are listed in the table below.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_FW_ALT_ERR"}},[t._v("VT_FW_ALT_ERR")])],1),t._v(" "),r("td",[t._v("固定翼飞行的最大负高度误差。 如果下降的高度超过该值，使实际高度低于设定高度，则机体将切换回多旋翼模式并执行故障保护返航操作。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_FW_MIN_ALT"}},[t._v("VT_FW_MIN_ALT")])],1),t._v(" "),r("td",[t._v("Minimum altitude for fixed wing flight. When the altitude drops below this value in fixed wing flight the vehicle will transition back to MC mode and enter failsafe RTL.")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_FW_QC_P"}},[t._v("VT_FW_QC_P")])],1),t._v(" "),r("td",[t._v("Maximum pitch angle before QuadChute engages. Above this the vehicle will transition back to MC mode and enter failsafe RTL.")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_FW_QC_R"}},[t._v("VT_FW_QC_R")])],1),t._v(" "),r("td",[t._v("Maximum roll angle before QuadChute engages. Above this the vehicle will transition back to MC mode and enter failsafe RTL.")])])])]),t._v(" "),r("h2",{attrs:{id:"故障检测器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障检测器"}},[t._v("#")]),t._v(" 故障检测器")]),t._v(" "),r("p",[t._v("The failure detector allows a vehicle to take protective action(s) if it unexpectedly flips, or if it is notified by an external failure detection system.")]),t._v(" "),r("p",[t._v("During "),r("strong",[t._v("flight")]),t._v(", the failure detector can be used to trigger "),r("RouterLink",{attrs:{to:"/zh/advanced_config/flight_termination.html"}},[t._v("flight termination")]),t._v(" if failure conditions are met, which may then launch a "),r("RouterLink",{attrs:{to:"/zh/peripherals/parachute.html"}},[t._v("parachute")]),t._v(" or perform some other action.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Failure detection during flight is deactivated by default (enable by setting the parameter: "),r("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v(").")])]),t._v(" "),r("p",[t._v("During "),r("strong",[t._v("takeoff")]),t._v(" the failure detector "),r("a",{attrs:{href:"#attitude-trigger"}},[t._v("attitude trigger")]),t._v(" invokes the "),r("a",{attrs:{href:"#action_lockdown"}},[t._v("lockdown action")]),t._v(" if the vehicle flips (lockdown kills the motors but, unlike flight termination, will not launch a parachute or perform other failure actions). Note that this check is "),r("em",[t._v("always enabled on takeoff")]),t._v(", irrespective of the "),r("code",[t._v("CBRK_FLIGHTTERM")]),t._v(" parameter.")]),t._v(" "),r("p",[t._v("The failure detector is active in all vehicle types and modes, except for those where the vehicle is "),r("em",[t._v("expected")]),t._v(" to do flips (i.e. "),r("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[t._v("Acro mode (MC)")]),t._v(", "),r("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_fw.html"}},[t._v("Acro mode (FW)")]),t._v(", and "),r("RouterLink",{attrs:{to:"/zh/flight_modes/manual_fw.html"}},[t._v("Manual (FW)")]),t._v(").")],1),t._v(" "),r("h3",{attrs:{id:"姿态触发器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#姿态触发器"}},[t._v("#")]),t._v(" 姿态触发器")]),t._v(" "),r("p",[t._v("The failure detector can be configured to trigger if the vehicle attitude exceeds predefined pitch and roll values for longer than a specified time.")]),t._v(" "),r("p",[t._v("The relevant parameters are shown below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{id:"CBRK_FLIGHTTERM"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")])],1),t._v(" "),r("td",[t._v("飞行终止断路器。 从 121212（默认）取消设置，以启用由于故障检测器或 FMU 丢失而导致的飞行终止。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FD_FAIL_P"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_P"}},[t._v("FD_FAIL_P")])],1),t._v(" "),r("td",[t._v("最大允许俯仰角（角度制）。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FD_FAIL_R"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_R"}},[t._v("FD_FAIL_R")])],1),t._v(" "),r("td",[t._v("最大允许横滚角（角度制）。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FD_FAIL_P_TTRI"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_P_TTRI"}},[t._v("FD_FAIL_P_TTRI")])],1),t._v(" "),r("td",[t._v("超过故障检测的 "),r("a",{attrs:{href:"#FD_FAIL_P"}},[t._v("FD_FAIL_P")]),t._v(" 时间（默认为 0.3s）。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FD_FAIL_R_TTRI"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_R_TTRI"}},[t._v("FD_FAIL_R_TTRI")])],1),t._v(" "),r("td",[t._v("超过故障检测的 "),r("a",{attrs:{href:"#FD_FAIL_R"}},[t._v("FD_FAIL_R")]),t._v(" 时间（默认为 0.3s）。")])])])]),t._v(" "),r("h3",{attrs:{id:"外部自动触发系统-ats"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#外部自动触发系统-ats"}},[t._v("#")]),t._v(" 外部自动触发系统（ATS）")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"#failure-detector"}},[t._v("failure detector")]),t._v(", if "),r("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("enabled")]),t._v(", can also be triggered by an external ATS system. The external trigger system must be connected to flight controller port AUX5 (or MAIN5 on boards that do not have AUX ports), and is configured using the parameters below.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("External ATS is required by "),r("a",{attrs:{href:"https://webstore.ansi.org/Standards/ASTM/ASTMF332218",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASTM F3322-18"),r("OutboundLink")],1),t._v(". One example of an ATS device is the "),r("a",{attrs:{href:"https://fruitychutes.com/uav_rpv_drone_recovery_parachutes/sentinel-automatic-trigger-system.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("FruityChutes Sentinel Automatic Trigger System"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{id:"FD_EXT_ATS_EN"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_EXT_ATS_EN"}},[t._v("FD_EXT_ATS_EN")])],1),t._v(" "),r("td",[t._v("启用 AUX5 或 MAIN5（取决于飞控板）上的 PWM 输入，以便从外部自动触发系统（ATS）启用故障保护。 默认值：禁用。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FD_EXT_ATS_TRIG"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_EXT_ATS_TRIG"}},[t._v("FD_EXT_ATS_TRIG")])],1),t._v(" "),r("td",[t._v("来自外部自动触发系统的用于接通故障保护的 PWM 阈值。 默认值：1900m/s。")])])])]),t._v(" "),r("h2",{attrs:{id:"应急开关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应急开关"}},[t._v("#")]),t._v(" 应急开关")]),t._v(" "),r("p",[t._v("Remote control switches can be configured (as part of "),r("em",[t._v("QGroundControl")]),t._v(" "),r("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("Flight Mode Setup")]),t._v(") to allow you to take rapid corrective action in the event of a problem or emergency; for example, to stop all motors, or activate "),r("a",{attrs:{href:"#return-switch"}},[t._v("Return mode")]),t._v(".")],1),t._v(" "),r("p",[t._v("This section lists the available emergency switches.")]),t._v(" "),r("h3",{attrs:{id:"急停开关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#急停开关"}},[t._v("#")]),t._v(" 急停开关")]),t._v(" "),r("p",[t._v("A kill switch immediately stops all motor outputs (and if flying, the vehicle will start to fall)! The motors will restart if the switch is reverted within 5 seconds. After 5 seconds the vehicle will automatically disarm; you will need to arm it again in order to start the motors.")]),t._v(" "),r("h3",{attrs:{id:"解锁-上锁开关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解锁-上锁开关"}},[t._v("#")]),t._v(" 解锁/上锁开关")]),t._v(" "),r("p",[t._v("The arm/disarm switch is a "),r("em",[t._v("direct replacement")]),t._v(" for the default stick-based arming/disarming mechanism (and serves the same purpose: making sure there is an intentional step involved before the motors start/stop). It might be used in preference to the default mechanism because:")]),t._v(" "),r("ul",[r("li",[t._v("这种机制偏向于切换动作而不是持续运动。")]),t._v(" "),r("li",[t._v("这种机制可以避免因为某种意外误触而引发的飞行期间解锁/上锁。")]),t._v(" "),r("li",[t._v("这种机制没有延迟（立即作出反应）。")])]),t._v(" "),r("p",[t._v("The arm/disarm switch immediately disarms (stop) motors for those "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html"}},[t._v("flight modes")]),t._v(" that "),r("em",[t._v("support disarming in flight")]),t._v(". This includes:")],1),t._v(" "),r("ul",[r("li",[r("em",[t._v("手动模式")])]),t._v(" "),r("li",[r("em",[t._v("特技模式")])]),t._v(" "),r("li",[r("em",[t._v("自稳模式")])])]),t._v(" "),r("p",[t._v("For modes that do not support disarming in flight, the switch is ignored during flight, but may be used after landing is detected. This includes "),r("em",[t._v("Position mode")]),t._v(" and autonomous modes (e.g. "),r("em",[t._v("Mission")]),t._v(", "),r("em",[t._v("Land")]),t._v(" etc.).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[r("a",{attrs:{href:"#auto-disarming-timeouts"}},[t._v("Auto disarm timeouts")]),t._v(" (e.g. via "),r("a",{attrs:{href:"#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")]),t._v(") are independent of the arm/disarm switch - ie even if the switch is armed the timeouts will still work.")])]),t._v(" "),r("h3",{attrs:{id:"返航开关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#返航开关"}},[t._v("#")]),t._v(" 返航开关")]),t._v(" "),r("p",[t._v("A return switch can be used to immediately engage "),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("Return mode")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"其他安全设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他安全设置"}},[t._v("#")]),t._v(" 其他安全设置")]),t._v(" "),r("h3",{attrs:{id:"超时自动上锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超时自动上锁"}},[t._v("#")]),t._v(" 超时自动上锁")]),t._v(" "),r("p",[t._v("You can set timeouts to automatically disarm a vehicle if it is too slow to takeoff, and/or after landing (disarming the vehicle removes power to the motors, so the propellers won't spin).")]),t._v(" "),r("p",[t._v("The "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("relevant parameters")]),t._v(" are shown below:")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{id:"COM_DISARM_LAND"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),r("td",[t._v("降落后自动上锁的超时时间。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"COM_DISARM_PRFLT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")])],1),t._v(" "),r("td",[t._v("如果起飞速度太慢，将启动自动上锁。")])])])]),t._v(" "),r("h2",{attrs:{id:"更多信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Safety.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 用户手册 > 安全设置"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=_.exports},662:function(t,e,a){t.exports=a.p+"assets/img/safety_setup.13d1efc7.png"},663:function(t,e,a){t.exports=a.p+"assets/img/safety_battery.3ca07fa4.png"},664:function(t,e,a){t.exports=a.p+"assets/img/safety_rc_loss.af75bf02.png"},665:function(t,e,a){t.exports=a.p+"assets/img/safety_data_link_loss.bd31108e.png"},666:function(t,e,a){t.exports=a.p+"assets/img/safety_geofence.e3412dca.png"},667:function(t,e,a){t.exports=a.p+"assets/img/safety_return_home.ad409241.png"},668:function(t,e,a){t.exports=a.p+"assets/img/safety_land_mode.abb91378.png"}}]);