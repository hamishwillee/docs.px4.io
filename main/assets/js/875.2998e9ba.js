(window.webpackJsonp=window.webpackJsonp||[]).push([[875],{3445:function(t,e,a){"use strict";a.r(e);var i=a(19),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"飞行终止配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#飞行终止配置"}},[t._v("#")]),t._v(" 飞行终止配置")]),t._v(" "),i("p",[t._v("The "),i("em",[t._v("Flight termination")]),t._v(" "),i("RouterLink",{attrs:{to:"/zh/config/safety.html#failsafe-actions"}},[t._v("failsafe action")]),t._v(" may be triggered by a "),i("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("safety check")]),t._v(" (e.g. RC Loss, geofence violation, etc. on any vehicle type or in any flight mode), or by the "),i("RouterLink",{attrs:{to:"/zh/config/safety.html#failure-detector"}},[t._v("Failure Detector")]),t._v(".")],1),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("Flight termination may also be triggered from a ground station or companion computer using the MAVLink "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_FLIGHTTERMINATION",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_FLIGHTTERMINATION"),i("OutboundLink")],1),t._v(" command. This is sent, for example, when you call the "),i("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_action.html#classmavsdk_1_1_action_1a47536c4a4bc8367ccd30a92eb09781c5",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK Action plugin"),i("OutboundLink")],1),t._v(" "),i("code",[t._v("terminate()")]),t._v(" or "),i("code",[t._v("terminate_async()")]),t._v(" methods.")])]),t._v(" "),i("p",[t._v("When "),i("em",[t._v("Flight termination")]),t._v(" is activated, PX4 simultaneously turns off all controllers and sets all PWM outputs to their failsafe values.")]),t._v(" "),i("p",[t._v("Depending on what devices are connected, the PWM failsafe outputs can be used to:")]),t._v(" "),i("ul",[i("li",[t._v("展开"),i("RouterLink",{attrs:{to:"/zh/peripherals/parachute.html"}},[t._v("降落伞")]),t._v("。")],1),t._v(" "),i("li",[t._v("伸展可伸缩起落架。")]),t._v(" "),i("li",[t._v("将连接了 PWM 的云台移动到安全的方向（或将它回收）以保护摄像机。")]),t._v(" "),i("li",[t._v("触发一个重启装置，比如安全气囊。")]),t._v(" "),i("li",[t._v("触发警报。")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("PX4 不能感知接了那些安全设备 - 它只是将一组预先定义的 PWM 值用于其输出。 After triggering you should unplug the battery as soon as possible. You will need to reboot/power cycle the vehicle before it can be used again.")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("失效保护值被应用到终止时的所有输出。 无法配置时基触发的电机或者特定的安全设备。")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("这"),i("em",[t._v("不是")]),t._v("一个独立的 "),i("em",[t._v("飞行终止系统")]),t._v("。 如果断电或者自驾仪完全失控，则不会出发失效保护设备。")])])])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("This is "),i("em",[t._v("not")]),t._v(" an independent "),i("em",[t._v("Flight Termination System")]),t._v(". If power is lost or if the autopilot crashes completely, the failsafe devices will not be triggered.")])]),t._v(" "),i("h2",{attrs:{id:"硬件配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#硬件配置"}},[t._v("#")]),t._v(" 硬件配置")]),t._v(" "),i("p",[t._v("Any "),i("em",[t._v("safety device(s)")]),t._v(" (e.g. a "),i("RouterLink",{attrs:{to:"/zh/peripherals/parachute.html"}},[t._v("parachute")]),t._v(") that can be triggered by changing a PWM value can be used, and may be connected to any free PWM port (both MAIN and AUX).")],1),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("If you're using Pixhawk-series board you will have to separately power the servo rail (i.e. from a 5V BEC, which is often also available from your ESC).")])]),t._v(" "),i("h2",{attrs:{id:"软件配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#软件配置"}},[t._v("#")]),t._v(" 软件配置")]),t._v(" "),i("p",[t._v("The "),i("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("Safety")]),t._v(" topic explains how to set the "),i("em",[t._v("flight termination")]),t._v(" as the "),i("RouterLink",{attrs:{to:"/zh/config/safety.html#failsafe-actions"}},[t._v("failsafe action")]),t._v(" to be performed for particular failsafe check.")],1),t._v(" "),i("p",[t._v("最后，设置任意电机的 "),i("code",[t._v("PWM_AUX_FAILn")]),t._v(" and "),i("code",[t._v("PWM_MAIN_FAILn")]),t._v(" PWM值。")]),t._v(" "),i("ul",[i("li",[t._v("通过设置 "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v(" 来启用故障检测器。")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/zh/config/safety.html#attitude-trigger"}},[t._v("Safety > Failure Detector > Attitude Trigger")]),t._v(" explains how to configure the attitude limits that trigger "),i("em",[t._v("Flight termination")]),t._v(". :::note During "),i("em",[t._v("takeoff")]),t._v(" excessive attitutes will trigger "),i("em",[t._v("lockdown")]),t._v(" (kill motors, but not launch parachute) rather than flight termination. 无论 "),i("code",[t._v("CBRK_FLIGHTTERM")]),t._v(" 为何值，此选项始终启用。 无法配置时基触发的电机或者特定的安全设备。")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/zh/config/safety.html#external-automatic-trigger-system-ats"}},[t._v("Safety > External Automatic Trigger System (ATS)")]),t._v(" explains how to configure an external trigger system.")],1)]),t._v(" "),i("p",[t._v("下图显示了飞行终止的逻辑流程。")]),t._v(" "),i("ul",[i("li",[t._v("将 "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_DIS1"}},[t._v("PWM_MAIN_DISn")]),t._v(" 设置为设备的“OFF”PWM值。")],1),t._v(" "),i("li",[t._v("将 "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v(" 设置为设备的“ON”PWM值。")],1)]),t._v(" "),i("p",[t._v("最后，设置任意电机的 "),i("code",[t._v("PWM_AUX_FAILn")]),t._v(" 和 "),i("code",[t._v("PWM_MAIN_FAILn")]),t._v(" PWM 值。")]),t._v(" "),i("ul",[i("li",[t._v("将 "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_DIS1"}},[t._v("PWM_AUX_DISn")]),t._v(" 设置为设备的“OFF”PWM值。")],1),t._v(" "),i("li",[t._v("将 "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v(" 设置为设备的“ON”PWM值。")],1)]),t._v(" "),i("p",[t._v("下图显示了飞行终止的逻辑流程。")]),t._v(" "),i("h2",{attrs:{id:"逻辑图解"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#逻辑图解"}},[t._v("#")]),t._v(" 逻辑图解")]),t._v(" "),i("p",[t._v("The diagram below shows the logical flow around flight termination.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(491),alt:"Logic diagram"}})])])}),[],!1,null,null,null);e.default=o.exports},491:function(t,e,a){t.exports=a.p+"assets/img/flight_termination_logic_diagram.0595f111.png"}}]);