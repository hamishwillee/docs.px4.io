(window.webpackJsonp=window.webpackJsonp||[]).push([[1521],{2752:function(t,e,a){"use strict";a.r(e);var _=a(19),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"预解锁-解锁-锁定配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预解锁-解锁-锁定配置"}},[t._v("#")]),t._v(" 预解锁，解锁，锁定配置")]),t._v(" "),a("p",[t._v("机体是有可移动的部件的，其中一些在通电后会有潜在的危险性（特别是电机和螺旋桨）！")]),t._v(" "),a("p",[t._v("为了减少发生事故的可能性， PX4 有明确的载具部件供电状态：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("锁定：")]),t._v(" 电机或执行器不供电。")]),t._v(" "),a("li",[a("strong",[t._v("预解锁：")]),t._v(" 电机/螺旋桨被锁定，但是没有危险的电子设备被供电（例如副翼，襟翼等）。")]),t._v(" "),a("li",[a("strong",[t._v("解锁：")]),t._v(" 载具全部供电。 电机/螺旋桨可能转动（危险！）")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("对于预解锁的载具，地面站可能显示"),a("em",[t._v("锁定")]),t._v("状态。 虽然技术上不适合预解锁的载具，但它是“安全的”。")])]),t._v(" "),a("p",[t._v("用户可以控制进度，即使这些状态在载具上使用 "),a("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#safety_switch"}},[t._v("安全开关")]),t._v(" (可选) "),a("em",[t._v("和")]),t._v(" 一个 "),a("a",{attrs:{href:"#arm_disarm_switch"}},[t._v("解锁开关/按钮")]),t._v(" "),a("a",{attrs:{href:"#arm_disarm_gestures"}},[t._v("解锁手法")]),t._v(", 或 "),a("em",[t._v("MAVLink 命令")]),t._v(" 在地面控制器：")],1),t._v(" "),a("ul",[a("li",[a("em",[t._v("安全开关")]),t._v(" 是载具上的控制 ** 必须使用它才能解锁载具， 而且也可防止预解锁（视配置而定）。 通常，安全开关被集成到 GPS 单元中，但也可能是一个单独的物理组件。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("解锁后的载具有潜在危险。 安全开关是防止意外解锁发生的一个附加机制。")])]),t._v(" "),a("ul",[a("li",[a("p",[a("em",[t._v("解锁开关")]),t._v("是"),a("em",[t._v("在遥控器上")]),t._v("的一个开关或按钮，可以用来解锁载具和启动电机（安全开关不能阻止解锁）。")])]),t._v(" "),a("li",[a("p",[a("em",[t._v("解锁手法")]),t._v("是一个"),a("em",[t._v("在遥控器上的")]),t._v("摇杆运动，可以用来替代解锁开关。")])]),t._v(" "),a("li",[a("p",[t._v("也可以通过地面站发送 MAVLink 命令来解锁/锁定载具。")])])]),t._v(" "),a("p",[t._v("如果在解锁后的一段时间内没有起飞，和如果着陆后没有手动锁定， PX4 会自动锁定载具。 这减少了解锁的载具在地面上的时间。")]),t._v(" "),a("p",[t._v("PX4 允许您通过参数配置预解锁，解锁和锁定的方式。（参数可以通过"),a("em",[t._v("QGroundControl")]),t._v("地面站上的"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("参数编辑器")]),t._v("编辑），详见下文各节。")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("解锁/锁定参数可以在"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#commander"}},[t._v("Parameter Reference > Commander")]),t._v("中找到（搜索"),a("code",[t._v("COM_ARM_*")]),t._v(" 和 "),a("code",[t._v("COM_DISARM_*")]),t._v("）。")],1)]),t._v(" "),a("p",[a("span",{attrs:{id:"arm_disarm_gestures"}})]),t._v(" "),a("h2",{attrs:{id:"解锁手法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解锁手法"}},[t._v("#")]),t._v(" 解锁手法")]),t._v(" "),a("p",[t._v("默认情况下，载具可以通过移动遥控器的油门/偏航摇杆到特定的位置，并保持 1 秒来解锁和锁定。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("解锁：")]),t._v(" 油门最小，偏航最大")]),t._v(" "),a("li",[a("strong",[t._v("锁定：")]),t._v(" 油门最小，偏航最小")])]),t._v(" "),a("p",[t._v("遥控器"),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#types-of-remote-controls"}},[t._v("基于不同的模式")]),t._v("有不同的手法（因为控制器模式会影响用于油门和偏航的摇杆）：")],1),t._v(" "),a("ul",[a("li",[a("strong",[t._v("美国手")]),t._v("：\n"),a("ul",[a("li",[t._v("*解锁：*左摇杆到右下角。")]),t._v(" "),a("li",[t._v("*锁定：*左摇杆到左下角。")])])]),t._v(" "),a("li",[a("strong",[t._v("日本手")]),t._v("：\n"),a("ul",[a("li",[t._v("*解锁：*左摇杆到右边，右摇杆到下方。")]),t._v(" "),a("li",[t._v("*锁定：*左摇杆到左边，右摇杆到下方。")])])])]),t._v(" "),a("p",[t._v("可以使用"),a("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[t._v("COM_RC_ARM_HYST")]),t._v("参数来配置保持时间。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"COM_RC_ARM_HYST"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_ARM_HYST"}},[t._v("COM_RC_ARM_HYST")])],1),t._v(" "),a("td",[t._v("遥控器的摇杆在解锁/锁定发生之前必须保持在解锁/锁定的位置。（默认：1 秒）。")])])])]),t._v(" "),a("p",[a("span",{attrs:{id:"arm_disarm_switch"}})]),t._v(" "),a("h2",{attrs:{id:"解锁按钮-开关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解锁按钮-开关"}},[t._v("#")]),t._v(" 解锁按钮/开关")]),t._v(" "),a("p",[a("em",[t._v("解锁按钮")]),t._v("或者“瞬时开关”可以配置为触发解锁/锁定"),a("em",[t._v("而不是")]),a("a",{attrs:{href:"#arm_disarm_gestures"}},[t._v("基于手势解锁")]),t._v("（设置解锁开关会禁止手势解锁）。 按钮应该保持按下（"),a("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[t._v("名义上")]),t._v("）1 秒来解锁（当锁定时）或者锁定（当解锁时）。")]),t._v(" "),a("p",[t._v("一个两段开关也可以用来解锁或锁定，其相应的解锁或锁定命令通过开关上的"),a("em",[t._v("转换")]),t._v("发送的。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("两段解锁开关主要用于/推荐用于竞技无人机。")])]),t._v(" "),a("p",[t._v("The switch or button is assigned (and enabled) using "),a("a",{attrs:{href:"#RC_MAP_ARM_SW"}},[t._v("RC_MAP_ARM_SW")]),t._v(', and the switch "type" is configured using '),a("a",{attrs:{href:"#COM_ARM_SWISBTN"}},[t._v("COM_ARM_SWISBTN")]),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"RC_MAP_ARM_SW"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_MAP_ARM_SW"}},[t._v("RC_MAP_ARM_SW")])],1),t._v(" "),a("td",[t._v("RC arm switch channel (default: 0 - unassigned). If defined, the specified RC channel (button/switch) is used for arming instead of a stick gesture.")])])])]),t._v(" "),a("p",[a("strong",[t._v("Note:")])]),t._v(" "),a("ul",[a("li",[t._v("This setting "),a("em",[t._v("disables the stick gesture")]),t._v("!")]),t._v(" "),a("li",[t._v("This setting applies to RC controllers. It does not apply to Joystick controllers that are connected via "),a("em",[t._v("QGroundControl")]),t._v(". |\n| "),a("span",{attrs:{id:"COM_ARM_SWISBTN"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_ARM_SWISBTN"}},[t._v("COM_ARM_SWISBTN")]),t._v(" | Arm switch is a momentary button.")],1),t._v(" "),a("li",[a("code",[t._v("0")]),t._v(": Arm switch is a 2-position switch where arm/disarm commands are sent on switch transitions."),a("br"),t._v("\n-"),a("code",[t._v("1")]),t._v(": Arm switch is a button or momentary button where the arm/disarm command ae sent after holding down button for set time ("),a("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[t._v("COM_RC_ARM_HYST")]),t._v(").                                 |")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The switch can also be set as part of "),a("em",[t._v("QGroundControl")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("Flight Mode")]),t._v(" configuration.")],1)]),t._v(" "),a("h2",{attrs:{id:"自动上锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动上锁"}},[t._v("#")]),t._v(" 自动上锁")]),t._v(" "),a("p",[t._v("By default vehicles will automatically disarm on landing, or if you take too long to take off after arming. The feature is configured using the following timeouts.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"COM_DISARM_LAND"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),a("td",[t._v("降落后自动锁定超时时间. Default: 2s (-1 to disable).")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"COM_DISARM_PRFLT"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")])],1),t._v(" "),a("td",[t._v("Time-out for auto disarm if too slow to takeoff. Default: 10s (<=0 to disable).")])])])]),t._v(" "),a("h2",{attrs:{id:"解锁顺序-预解锁模式-安全按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解锁顺序-预解锁模式-安全按钮"}},[t._v("#")]),t._v(" 解锁顺序：预解锁模式 & 安全按钮")]),t._v(" "),a("p",[t._v("The arming sequence depends on whether or not there is a "),a("em",[t._v("safety switch")]),t._v(", and is controlled by the parameters "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE")]),t._v(" (Prearm mode) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY")]),t._v(" (I/O safety circuit breaker).")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE")]),t._v(' parameter defines when/if pre-arm mode is enabled ("safe"/non-throttling actuators are able to move):')]),t._v(" "),a("ul",[a("li",[a("em",[t._v("Disabled")]),t._v(': Pre-arm mode disabled (there is no stage where only "safe"/non-throttling actuators are enabled).')]),t._v(" "),a("li",[a("em",[t._v("Safety Switch")]),t._v(" (Default): The pre-arm mode is enabled by the safety switch. If there is no safety switch then pre-arm mode will not be enabled.")]),t._v(" "),a("li",[a("em",[t._v("Always")]),t._v(": Prearm mode is enabled from power up.")])]),t._v(" "),a("p",[t._v("If there is a safety switch then this will be a precondition for arming. If there is no safety switch the I/O safety circuit breaker must be engaged ("),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY")]),t._v("), and arming will depend only on the arm command.")]),t._v(" "),a("p",[t._v("The sections below detail the startup sequences for the different configurations")]),t._v(" "),a("h3",{attrs:{id:"默认-com-prearm-mode-safety-and-safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认-com-prearm-mode-safety-and-safety-switch"}},[t._v("#")]),t._v(" 默认：COM_PREARM_MODE=Safety and Safety Switch")]),t._v(" "),a("p",[t._v("The default configuration uses safety switch to prearm. From prearm you can then arm to engage all motors/actuators. It corresponds to: "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE=1")]),t._v(" (safety switch) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY=0")]),t._v(" (I/O safety circuit breaker disabled).")]),t._v(" "),a("p",[t._v("The default startup sequence is:")]),t._v(" "),a("ol",[a("li",[t._v("Power-up.\n"),a("ul",[a("li",[t._v("All actuators locked into disarmed position")]),t._v(" "),a("li",[t._v("Not possible to arm.")])])]),t._v(" "),a("li",[t._v("Safety switch is pressed.\n"),a("ul",[a("li",[t._v("System now prearmed: non-throttling actuators can move (e.g. ailerons).")]),t._v(" "),a("li",[t._v("System safety is off: Arming possible.")])])]),t._v(" "),a("li",[t._v("Arm command is issued.\n"),a("ul",[a("li",[t._v("The system is armed.")]),t._v(" "),a("li",[t._v("All motors and actuators can move.")])])])]),t._v(" "),a("h3",{attrs:{id:"com-prearm-mode-disabled-and-safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-disabled-and-safety-switch"}},[t._v("#")]),t._v(" COM_PREARM_MODE=Disabled and Safety Switch")]),t._v(" "),a("p",[t._v("When prearm mode is "),a("em",[t._v("Disabled")]),t._v(', engaging the safety switch does not unlock the "safe" actuators, though it does allow you to then arm the vehicle. This corresponds to '),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE=0")]),t._v(" (Disabled) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY=0")]),t._v(" (I/O safety circuit breaker disabled).")]),t._v(" "),a("p",[t._v("The startup sequence is:")]),t._v(" "),a("ol",[a("li",[t._v("Power-up.\n"),a("ul",[a("li",[t._v("All actuators locked into disarmed position")]),t._v(" "),a("li",[t._v("Not possible to arm.")])])]),t._v(" "),a("li",[t._v("Safety switch is pressed.\n"),a("ul",[a("li",[a("em",[t._v("All actuators stay locked into disarmed position (same as disarmed).")])]),t._v(" "),a("li",[t._v("System safety is off: Arming possible.")])])]),t._v(" "),a("li",[t._v("Arm command is issued.\n"),a("ul",[a("li",[t._v("The system is armed.")]),t._v(" "),a("li",[t._v("All motors and actuators can move.")])])])]),t._v(" "),a("h3",{attrs:{id:"com-prearm-mode-always-and-safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-always-and-safety-switch"}},[t._v("#")]),t._v(" COM_PREARM_MODE=Always and Safety Switch")]),t._v(" "),a("p",[t._v("When prearm mode is "),a("em",[t._v("Always")]),t._v(", prearm mode is enabled from power up. To arm, you still need the safety switch. This corresponds to "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE=2")]),t._v(" (Always) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY=0")]),t._v(" (I/O safety circuit breaker disabled).")]),t._v(" "),a("p",[t._v("The startup sequence is:")]),t._v(" "),a("ol",[a("li",[t._v("Power-up.\n"),a("ul",[a("li",[t._v("System now prearmed: non-throttling actuators can move (e.g. ailerons).")]),t._v(" "),a("li",[t._v("Not possible to arm.")])])]),t._v(" "),a("li",[t._v("Safety switch is pressed.\n"),a("ul",[a("li",[t._v("System safety is off: Arming possible.")])])]),t._v(" "),a("li",[t._v("Arm command is issued.\n"),a("ul",[a("li",[t._v("The system is armed.")]),t._v(" "),a("li",[t._v("All motors and actuators can move.")])])])]),t._v(" "),a("h3",{attrs:{id:"com-prearm-mode-safety-or-disabled-and-no-safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-safety-or-disabled-and-no-safety-switch"}},[t._v("#")]),t._v(" COM_PREARM_MODE=Safety or Disabled and No Safety Switch")]),t._v(" "),a("p",[t._v("With no safety switch, when "),a("code",[t._v("COM_PREARM_MODE")]),t._v(" is set to "),a("em",[t._v("Safety")]),t._v(" or "),a("em",[t._v("Disabled")]),t._v(" prearm mode cannot be enabled (same as disarmed). This corresponds to "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE=0 or 1")]),t._v(" (Disabled/Safety Switch) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY=22027")]),t._v(" (I/O safety circuit breaker engaged).")]),t._v(" "),a("p",[t._v("The startup sequence is:")]),t._v(" "),a("ol",[a("li",[t._v("Power-up.\n"),a("ul",[a("li",[t._v("All actuators locked into disarmed position")]),t._v(" "),a("li",[t._v("System safety is off: Arming possible.")])])]),t._v(" "),a("li",[t._v("Arm command is issued.\n"),a("ul",[a("li",[t._v("The system is armed.")]),t._v(" "),a("li",[t._v("All motors and actuators can move.")])])])]),t._v(" "),a("h3",{attrs:{id:"com-prearm-mode-always-and-no-safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-always-and-no-safety-switch"}},[t._v("#")]),t._v(" COM_PREARM_MODE=Always and No Safety Switch")]),t._v(" "),a("p",[t._v("When prearm mode is "),a("em",[t._v("Always")]),t._v(", prearm mode is enabled from power up. This corresponds to "),a("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE=2")]),t._v(" (Always) and "),a("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY=22027")]),t._v(" (I/O safety circuit breaker engaged).")]),t._v(" "),a("p",[t._v("The startup sequence is:")]),t._v(" "),a("ol",[a("li",[t._v("Power-up.\n"),a("ul",[a("li",[t._v("System now prearmed: non-throttling actuators can move (e.g. ailerons).")]),t._v(" "),a("li",[t._v("System safety is off: Arming possible.")])])]),t._v(" "),a("li",[t._v("Arm command is issued.\n"),a("ul",[a("li",[t._v("The system is armed.")]),t._v(" "),a("li",[t._v("All motors and actuators can move.")])])])]),t._v(" "),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("参数描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"COM_PREARM_MODE"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE")])],1),t._v(" "),a("td",[t._v("Condition to enter prearmed mode. "),a("code",[t._v("0")]),t._v(": Disabled, "),a("code",[t._v("1")]),t._v(": Safety switch (prearm mode enabled by safety switch; if no switch present cannot be enabled), "),a("code",[t._v("2")]),t._v(": Always (prearm mode enabled from power up). Default: "),a("code",[t._v("1")]),t._v(" (safety button).")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"CBRK_IO_SAFETY"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY")])],1),t._v(" "),a("td",[t._v("Circuit breaker for IO safety.")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);