(window.webpackJsonp=window.webpackJsonp||[]).push([[1792],{3218:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"arm-disarm-prearm-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arm-disarm-prearm-configuration"}},[e._v("#")]),e._v(" Arm, Disarm, Prearm Configuration")]),e._v(" "),a("p",[e._v("机体是有可移动的部件的，其中一些在通电后会有潜在的危险性（特别是电机和螺旋桨）！")]),e._v(" "),a("p",[e._v("为了减少发生事故的可能性， PX4 有明确的载具部件供电状态：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Disarmed:")]),e._v(" There is no power to motors or actuators.")]),e._v(" "),a("li",[a("strong",[e._v("Pre-armed:")]),e._v(" Motors/propellers are locked but actuators for non-dangerous electronics are powered (e.g. ailerons, flaps etc.).")]),e._v(" "),a("li",[a("strong",[e._v("Armed:")]),e._v(" Vehicle is fully powered. 电机/螺旋桨可能转动（危险！）")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Ground stations may display "),a("em",[e._v("disarmed")]),e._v(" for pre-armed vehicles. 虽然技术上不适合预解锁的载具，但它是“安全的”。")])]),e._v(" "),a("p",[e._v("Users can control progression though these states using a "),a("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#safety-switch"}},[e._v("safety switch")]),e._v(" on the vehicle (optional) "),a("em",[e._v("and")]),e._v(" an "),a("a",{attrs:{href:"#arm_disarm_switch"}},[e._v("arming switch/button")]),e._v(", "),a("a",{attrs:{href:"#arm_disarm_gestures"}},[e._v("arming gesture")]),e._v(", or "),a("em",[e._v("MAVLink command")]),e._v(" on the ground controller:")],1),e._v(" "),a("ul",[a("li",[a("p",[e._v("A "),a("em",[e._v("safety switch")]),e._v(" is a control "),a("em",[e._v("on the vehicle")]),e._v(" that must be engaged before the vehicle can be armed, and which may also prevent prearming (depending on the configuration). 通常，安全开关被集成到 GPS 单元中，但也可能是一个单独的物理组件。")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")])])])]),e._v(" "),a("p",[e._v("解锁后的载具有潜在危险。\n安全开关是防止意外解锁发生的一个附加机制。\n:::")]),e._v(" "),a("ul",[a("li",[e._v("An "),a("em",[e._v("arming switch")]),e._v(" is a switch or button "),a("em",[e._v("on an RC controller")]),e._v(" that can be used to arm the vehicle and start motors (provided arming is not prevented by a safety switch).")]),e._v(" "),a("li",[e._v("An "),a("em",[e._v("arming gesture")]),e._v(" is a stick movement "),a("em",[e._v("on an RC controller")]),e._v(" that can be used as an alternative to an arming switch.")]),e._v(" "),a("li",[e._v("也可以通过地面站发送 MAVLink 命令来解锁/锁定载具。")])]),e._v(" "),a("p",[e._v("如果在解锁后的一段时间内没有起飞，和如果着陆后没有手动锁定， PX4 会自动锁定载具。 这减少了解锁的载具在地面上的时间。")]),e._v(" "),a("p",[e._v("PX4 allows you to configure how pre-arming, arming and disarming work using parameters (which can be edited in "),a("em",[e._v("QGroundControl")]),e._v(" via the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("parameter editor")]),e._v("), as described in the following sections.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("Arming/disarming parameters can be found in "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#commander"}},[e._v("Parameter Reference > Commander")]),e._v(" (search for "),a("code",[e._v("COM_ARM_*")]),e._v(" and "),a("code",[e._v("COM_DISARM_*")]),e._v(").")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"arm_disarm_gestures"}})]),e._v(" "),a("h2",{attrs:{id:"解锁手法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解锁手法"}},[e._v("#")]),e._v(" 解锁手法")]),e._v(" "),a("p",[e._v("默认情况下，载具可以通过移动遥控器的油门/偏航摇杆到特定的位置，并保持 1 秒来解锁和锁定。")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Arming:")]),e._v(" Throttle minimum, yaw maximum")]),e._v(" "),a("li",[a("strong",[e._v("Disarming:")]),e._v(" Throttle minimum, yaw minimum")])]),e._v(" "),a("p",[e._v("RC controllers will have different gestures "),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#types-of-remote-controllers"}},[e._v("based on their mode")]),e._v(" (as controller mode affects the sticks used for throttle and yaw):")],1),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Mode 2")]),e._v(":\n"),a("ul",[a("li",[a("em",[e._v("Arm:")]),e._v(" Left stick to bottom right.")]),e._v(" "),a("li",[a("em",[e._v("Disarm:")]),e._v(" Left stick to the bottom left.")])])]),e._v(" "),a("li",[a("strong",[e._v("Mode 1")]),e._v(":\n"),a("ul",[a("li",[a("em",[e._v("Arm:")]),e._v(" Left-stick to right, right-stick to bottom.")]),e._v(" "),a("li",[a("em",[e._v("Disarm:")]),e._v(" Left-stick to left, right-stick to the bottom.")])])])]),e._v(" "),a("p",[e._v("可以使用"),a("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[e._v("COM_RC_ARM_HYST")]),e._v("参数来配置保持时间。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_ARM_HYST"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_ARM_HYST"}},[e._v("COM_RC_ARM_HYST")])],1),e._v(" "),a("td",[e._v("遥控器的摇杆在解锁/锁定发生之前必须保持在解锁/锁定的位置。（默认：1 秒）。")])])])]),e._v(" "),a("p",[a("a",{attrs:{id:"arm_disarm_switch"}})]),e._v(" "),a("h2",{attrs:{id:"解锁按钮-开关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解锁按钮-开关"}},[e._v("#")]),e._v(" 解锁按钮/开关")]),e._v(" "),a("p",[e._v("An "),a("em",[e._v("arming button")]),e._v(' or "momentary switch" can be configured to trigger arm/disarm '),a("em",[e._v("instead")]),e._v(" of "),a("a",{attrs:{href:"#arm_disarm_gestures"}},[e._v("gesture-based arming")]),e._v(" (setting an arming switch disables arming gestures). 按钮应该保持按下（"),a("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[e._v("名义上")]),e._v("）1 秒来解锁（当锁定时）或者锁定（当解锁时）。")]),e._v(" "),a("p",[e._v("A two-position switch can also be used for arming/disarming, where the respective arm/disarm commands are sent on switch "),a("em",[e._v("transitions")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("两段解锁开关主要用于/推荐用于竞技无人机。")])]),e._v(" "),a("p",[e._v("The switch or button is assigned (and enabled) using "),a("a",{attrs:{href:"#RC_MAP_ARM_SW"}},[e._v("RC_MAP_ARM_SW")]),e._v(', and the switch "type" is configured using '),a("a",{attrs:{href:"#COM_ARM_SWISBTN"}},[e._v("COM_ARM_SWISBTN")]),e._v(".")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"RC_MAP_ARM_SW"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_MAP_ARM_SW"}},[e._v("RC_MAP_ARM_SW")])],1),e._v(" "),a("td",[e._v("RC arm switch channel (default: 0 - unassigned). If defined, the specified RC channel (button/switch) is used for arming instead of a stick gesture. "),a("br"),a("strong",[e._v("Note:")]),a("br"),e._v("- This setting "),a("em",[e._v("disables the stick gesture")]),e._v("!"),a("br"),e._v("- This setting applies to RC controllers. It does not apply to Joystick controllers that are connected via "),a("em",[e._v("QGroundControl")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_ARM_SWISBTN"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_SWISBTN"}},[e._v("COM_ARM_SWISBTN")])],1),e._v(" "),a("td",[e._v("Arm switch is a momentary button. "),a("br"),e._v("- "),a("code",[e._v("0")]),e._v(": Arm switch is a 2-position switch where arm/disarm commands are sent on switch transitions."),a("br"),e._v("-"),a("code",[e._v("1")]),e._v(": Arm switch is a button or momentary button where the arm/disarm command ae sent after holding down button for set time ("),a("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[e._v("COM_RC_ARM_HYST")]),e._v(").")])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The switch can also be set as part of "),a("em",[e._v("QGroundControl")]),e._v(" "),a("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[e._v("Flight Mode")]),e._v(" configuration.")],1)]),e._v(" "),a("h2",{attrs:{id:"自动上锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动上锁"}},[e._v("#")]),e._v(" 自动上锁")]),e._v(" "),a("p",[e._v("By default vehicles will automatically disarm on landing, or if you take too long to take off after arming. The feature is configured using the following timeouts.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"COM_DISARM_LAND"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[e._v("COM_DISARM_LAND")])],1),e._v(" "),a("td",[e._v("降落后自动锁定超时时间. Default: 2s (-1 to disable).")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_DISARM_PRFLT"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[e._v("COM_DISARM_PRFLT")])],1),e._v(" "),a("td",[e._v("Time-out for auto disarm if too slow to takeoff. Default: 10s (<=0 to disable).")])])])]),e._v(" "),a("h2",{attrs:{id:"pre-arm-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-arm-checks"}},[e._v("#")]),e._v(" Pre-Arm Checks")]),e._v(" "),a("p",[e._v("To reduce accidents, vehicles are only allowed to arm certain conditions are met. Arming is prevented if:")]),e._v(" "),a("ul",[a("li",[e._v('The vehicle is not in a "healthy" state. For example it is not calibrated, or is reporting sensor errors.')]),e._v(" "),a("li",[e._v("The vehicle has a "),a("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#safety-switch"}},[e._v("safety switch")]),e._v(" that has not been engaged.")],1),e._v(" "),a("li",[e._v("The vehicle has a "),a("RouterLink",{attrs:{to:"/zh/peripherals/remote_id.html"}},[e._v("remote ID")]),e._v(" that is unhealthy or otherwise not ready")],1),e._v(" "),a("li",[e._v("A VTOL vehicle is in fixed-wing mode ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_VTOLARMING"}},[e._v("by default")]),e._v(").")],1),e._v(" "),a("li",[e._v("The current mode requires an adequate global position estimate but the vehicle does not have GPS lock.")]),e._v(" "),a("li",[e._v("Many more ...")])]),e._v(" "),a("p",[e._v("The current failed checks can be viewed in QGroundControl (v4.2.0 and later): "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/FlyView/FlyView.html#arm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fly View > Arming and Preflight Checks"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Note that internally PX4 runs arming checks at 10Hz. A list of the failed checks is kept, and if the list changes PX4 emits the current list using the "),a("RouterLink",{attrs:{to:"/zh/concept/events_interface.html"}},[e._v("Events interface")]),e._v(". The list is also sent out when the GCS connects. Effectively the GCS knows the status of prearm checks immediately, both when disarmed and armed.")],1),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DETAILS")]),e._v(" "),a("p",[e._v("Implementation notes for developers The client implementation is in "),a("a",{attrs:{href:"https://github.com/mavlink/libevents",target:"_blank",rel:"noopener noreferrer"}},[e._v("libevents"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/mavlink/libevents#event-groups",target:"_blank",rel:"noopener noreferrer"}},[e._v("libevents > Event groups"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mavlink/libevents/blob/main/libs/cpp/parse/health_and_arming_checks.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("health_and_arming_checks.h"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("QGC implementation: "),a("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/src/Vehicle/HealthAndArmingCheckReport.cc",target:"_blank",rel:"noopener noreferrer"}},[e._v("HealthAndArmingCheckReport.cc"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("PX4 also emits a subset of the arming check information in the "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SYS_STATUS",target:"_blank",rel:"noopener noreferrer"}},[e._v("SYS_STATUS"),a("OutboundLink")],1),e._v(" message (see "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_SYS_STATUS_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_SYS_STATUS_SENSOR"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"解锁顺序-预解锁模式-安全按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解锁顺序-预解锁模式-安全按钮"}},[e._v("#")]),e._v(" 解锁顺序：预解锁模式 & 安全按钮")]),e._v(" "),a("p",[e._v("The arming sequence depends on whether or not there is a "),a("em",[e._v("safety switch")]),e._v(", and is controlled by the parameters "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[e._v("COM_PREARM_MODE")]),e._v(" (Prearm mode) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[e._v("CBRK_IO_SAFETY")]),e._v(" (I/O safety circuit breaker).")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[e._v("COM_PREARM_MODE")]),e._v(' parameter defines when/if pre-arm mode is enabled ("safe"/non-throttling actuators are able to move):')]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Disabled")]),e._v(': Pre-arm mode disabled (there is no stage where only "safe"/non-throttling actuators are enabled).')]),e._v(" "),a("li",[a("em",[e._v("Safety Switch")]),e._v(" (Default): The pre-arm mode is enabled by the safety switch. If there is no safety switch then pre-arm mode will not be enabled.")]),e._v(" "),a("li",[a("em",[e._v("Always")]),e._v(": Prearm mode is enabled from power up.")])]),e._v(" "),a("p",[e._v("If there is a safety switch then this will be a precondition for arming. If there is no safety switch the I/O safety circuit breaker must be engaged ("),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[e._v("CBRK_IO_SAFETY")]),e._v("), and arming will depend only on the arm command.")]),e._v(" "),a("p",[e._v("The sections below detail the startup sequences for the different configurations")]),e._v(" "),a("h3",{attrs:{id:"默认-com-prearm-mode-safety-and-safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认-com-prearm-mode-safety-and-safety-switch"}},[e._v("#")]),e._v(" 默认：COM_PREARM_MODE=Safety and Safety Switch")]),e._v(" "),a("p",[e._v("The default configuration uses safety switch to prearm. From prearm you can then arm to engage all motors/actuators. It corresponds to: "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[e._v("COM_PREARM_MODE=1")]),e._v(" (safety switch) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[e._v("CBRK_IO_SAFETY=0")]),e._v(" (I/O safety circuit breaker disabled).")]),e._v(" "),a("p",[e._v("The default startup sequence is:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Power-up.")]),e._v(" "),a("ul",[a("li",[e._v("All actuators locked into disarmed position")]),e._v(" "),a("li",[e._v("Not possible to arm.")])])]),e._v(" "),a("li",[a("p",[e._v("Safety switch is pressed.")]),e._v(" "),a("ul",[a("li",[e._v("System now prearmed: non-throttling actuators can move (e.g. ailerons).")]),e._v(" "),a("li",[e._v("System safety is off: Arming possible.")])])]),e._v(" "),a("li",[a("p",[e._v("Arm command is issued.")]),e._v(" "),a("ul",[a("li",[e._v("The system is armed.")]),e._v(" "),a("li",[e._v("All motors and actuators can move.")])])])]),e._v(" "),a("h3",{attrs:{id:"com-prearm-mode-disabled-and-safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-disabled-and-safety-switch"}},[e._v("#")]),e._v(" COM_PREARM_MODE=Disabled and Safety Switch")]),e._v(" "),a("p",[e._v("When prearm mode is "),a("em",[e._v("Disabled")]),e._v(', engaging the safety switch does not unlock the "safe" actuators, though it does allow you to then arm the vehicle. This corresponds to '),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[e._v("COM_PREARM_MODE=0")]),e._v(" (Disabled) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[e._v("CBRK_IO_SAFETY=0")]),e._v(" (I/O safety circuit breaker disabled).")]),e._v(" "),a("p",[e._v("The startup sequence is:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Power-up.")]),e._v(" "),a("ul",[a("li",[e._v("All actuators locked into disarmed position")]),e._v(" "),a("li",[e._v("Not possible to arm.")])])]),e._v(" "),a("li",[a("p",[e._v("Safety switch is pressed.")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("All actuators stay locked into disarmed position (same as disarmed).")])]),e._v(" "),a("li",[e._v("System safety is off: Arming possible.")])])]),e._v(" "),a("li",[a("p",[e._v("Arm command is issued.")]),e._v(" "),a("ul",[a("li",[e._v("The system is armed.")]),e._v(" "),a("li",[e._v("All motors and actuators can move.")])])])]),e._v(" "),a("h3",{attrs:{id:"com-prearm-mode-always-and-safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-always-and-safety-switch"}},[e._v("#")]),e._v(" COM_PREARM_MODE=Always and Safety Switch")]),e._v(" "),a("p",[e._v("When prearm mode is "),a("em",[e._v("Always")]),e._v(", prearm mode is enabled from power up. To arm, you still need the safety switch. This corresponds to "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[e._v("COM_PREARM_MODE=2")]),e._v(" (Always) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[e._v("CBRK_IO_SAFETY=0")]),e._v(" (I/O safety circuit breaker disabled).")]),e._v(" "),a("p",[e._v("The startup sequence is:")]),e._v(" "),a("ol",[a("li",[e._v("Power-up.\n"),a("ul",[a("li",[e._v("System now prearmed: non-throttling actuators can move (e.g. ailerons).")]),e._v(" "),a("li",[e._v("Not possible to arm.")])])]),e._v(" "),a("li",[e._v("Safety switch is pressed.\n"),a("ul",[a("li",[e._v("System safety is off: Arming possible.")])])]),e._v(" "),a("li",[e._v("Arm command is issued.\n"),a("ul",[a("li",[e._v("The system is armed.")]),e._v(" "),a("li",[e._v("All motors and actuators can move.")])])])]),e._v(" "),a("h3",{attrs:{id:"com-prearm-mode-safety-or-disabled-and-no-safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-safety-or-disabled-and-no-safety-switch"}},[e._v("#")]),e._v(" COM_PREARM_MODE=Safety or Disabled and No Safety Switch")]),e._v(" "),a("p",[e._v("With no safety switch, when "),a("code",[e._v("COM_PREARM_MODE")]),e._v(" is set to "),a("em",[e._v("Safety")]),e._v(" or "),a("em",[e._v("Disabled")]),e._v(" prearm mode cannot be enabled (same as disarmed). This corresponds to "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[e._v("COM_PREARM_MODE=0 or 1")]),e._v(" (Disabled/Safety Switch) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[e._v("CBRK_IO_SAFETY=22027")]),e._v(" (I/O safety circuit breaker engaged).")]),e._v(" "),a("p",[e._v("The startup sequence is:")]),e._v(" "),a("ol",[a("li",[e._v("Power-up.\n"),a("ul",[a("li",[e._v("All actuators locked into disarmed position")]),e._v(" "),a("li",[e._v("System safety is off: Arming possible.")])])]),e._v(" "),a("li",[e._v("Arm command is issued.\n"),a("ul",[a("li",[e._v("The system is armed.")]),e._v(" "),a("li",[e._v("All motors and actuators can move.")])])])]),e._v(" "),a("h3",{attrs:{id:"com-prearm-mode-always-and-no-safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-always-and-no-safety-switch"}},[e._v("#")]),e._v(" COM_PREARM_MODE=Always and No Safety Switch")]),e._v(" "),a("p",[e._v("When prearm mode is "),a("em",[e._v("Always")]),e._v(", prearm mode is enabled from power up. This corresponds to "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[e._v("COM_PREARM_MODE=2")]),e._v(" (Always) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[e._v("CBRK_IO_SAFETY=22027")]),e._v(" (I/O safety circuit breaker engaged).")]),e._v(" "),a("p",[e._v("The startup sequence is:")]),e._v(" "),a("ol",[a("li",[e._v("Power-up.\n"),a("ul",[a("li",[e._v("System now prearmed: non-throttling actuators can move (e.g. ailerons).")]),e._v(" "),a("li",[e._v("System safety is off: Arming possible.")])])]),e._v(" "),a("li",[e._v("Arm command is issued.\n"),a("ul",[a("li",[e._v("The system is armed.")]),e._v(" "),a("li",[e._v("All motors and actuators can move.")])])])]),e._v(" "),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[e._v("#")]),e._v(" 参数")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("参数描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"COM_PREARM_MODE"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_PREARM_MODE"}},[e._v("COM_PREARM_MODE")])],1),e._v(" "),a("td",[e._v("Condition to enter prearmed mode. "),a("code",[e._v("0")]),e._v(": Disabled, "),a("code",[e._v("1")]),e._v(": Safety switch (prearm mode enabled by safety switch; if no switch present cannot be enabled), "),a("code",[e._v("2")]),e._v(": Always (prearm mode enabled from power up). Default: "),a("code",[e._v("1")]),e._v(" (safety button).")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"CBRK_IO_SAFETY"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_IO_SAFETY"}},[e._v("CBRK_IO_SAFETY")])],1),e._v(" "),a("td",[e._v("Circuit breaker for IO safety.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);