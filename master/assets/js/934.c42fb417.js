(window.webpackJsonp=window.webpackJsonp||[]).push([[934],{1893:function(t,e,_){"use strict";_.r(e);var a=_(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"시동-전-시동-제동-구성"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#시동-전-시동-제동-구성"}},[t._v("#")]),t._v(" 시동 전, 시동, 제동 구성")]),t._v(" "),_("p",[t._v("기체에는 전원을 인가했을 때 잠재적으로 위험한 움직이는 부품이 붙어있습니다(그 중 일부는 모터와 프로펠러입니다)!")]),t._v(" "),_("p",[t._v("사고 위험을 줄이기 위해, PX4에는 기체 부속에 전원을 인가하는 몇가지 분명한 상태가 있습니다:")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("제동:")]),t._v(" 모터와 액츄에이터에 전원을 인가하지 않음")]),t._v(" "),_("li",[_("strong",[t._v("시동 전:")]),t._v(" 모터와 프로펠러를 잠궈두었으나 액츄에이터에는 위험하지 않은 수준의 전원을 인가함(예: 보조익, 플랩 등).")]),t._v(" "),_("li",[_("strong",[t._v("시동:")]),t._v(" 기체 전체에 전원을 인가한 상태. 모터와 프로펠러가 동작할 수 있음 (위험!)")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("Note 시동 전 기체 상태를 지상 통제 장치에서는 "),_("em",[t._v("disarmed")]),t._v('로 나타냅니다. 시동 전 기체에 기술적으로 타당하지는 않지만, "안전" 상태입니다.')])]),t._v(" "),_("p",[t._v("사용자는 기체(선택)의 "),_("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#safety_switch"}},[t._v("안전 스위치")]),t._v(" "),_("em",[t._v("그리고")]),t._v(" "),_("a",{attrs:{href:"#arm_disarm_switch"}},[t._v("시동 스위치/단추")]),t._v(", "),_("a",{attrs:{href:"#arm_disarm_gestures"}},[t._v("시동 움직임")]),t._v(" 또는 지상 통제 장치의 "),_("em",[t._v("MAVLink 명령")]),t._v("으로 상태 진행을 제어할 수 있습니다:")],1),t._v(" "),_("ul",[_("li",[_("em",[t._v("안전 스위치")]),t._v("는 "),_("em",[t._v("기체")]),t._v("의 제어 장치로, 기체에 시동을 걸 수 있기 전 가동해야 하며, 시동 전에 시동이 멋대로 커지는 일을 (설정에 따라) 막을 수 있어야 합니다. 보통 안전 스위치는 GPS 장치에 붙어있으나, 별도의 물리 부품으로 따로 떨어져있을 수 있습니다.")])]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("일단 기체에 시동이 걸리면 위험합니다. 안전 스위치는 갑작스럽게 시동을 거는 상황을 예방하는 추가 대책입니다.")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("An "),_("em",[t._v("arming switch")]),t._v(" is a switch or button "),_("em",[t._v("on an RC controller")]),t._v(" that can be used to arm the vehicle and start motors (provided arming is not prevented by a safety switch).")])]),t._v(" "),_("li",[_("p",[t._v("An "),_("em",[t._v("arming gesture")]),t._v(" is a stick movement "),_("em",[t._v("on an RC controller")]),t._v(" that can be used as an alternative to an arming switch.")])]),t._v(" "),_("li",[_("p",[t._v("MAVLink commands can also be sent by a ground control station to arm/disarm a vehicle.")])])]),t._v(" "),_("p",[t._v("PX4 will also automatically disarm the vehicle if it does not takeoff within a certain amount of time after arming, and if it is not manually disarmed after landing. This reduces the amount of time where an armed (and therefore dangerous) vehicle is on the ground.")]),t._v(" "),_("p",[t._v("PX4 allows you to configure how pre-arming, arming and disarming work using parameters (which can be edited in "),_("em",[t._v("QGroundControl")]),t._v(" via the "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("parameter editor")]),t._v("), as described in the following sections.")],1),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("시동/제동 매개변수는 "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#commander"}},[t._v("매개변수 참고 > 명령")]),t._v(" 에서 찾을 수 있습니다("),_("code",[t._v("COM_ARM_*")]),t._v(" 과 "),_("code",[t._v("COM_DISARM_*")]),t._v("으로 검색).")],1)]),t._v(" "),_("p",[_("span",{attrs:{id:"arm_disarm_gestures"}})]),t._v(" "),_("h2",{attrs:{id:"시동-움직임"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#시동-움직임"}},[t._v("#")]),t._v(" 시동 움직임")]),t._v(" "),_("p",[t._v("기본적으로, 기체는 무선 조종 장치의 추진 제어 스틱과 방위 제어 스틱을 움직인 후 잠깐 동안 또는 1초 동안 상태를 유지하여 시동을 걸거나 제동을 걸 수 있습니다.")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("시동:")]),t._v(" 추진 모터 출력 최소, 방향타 최대 움직임")]),t._v(" "),_("li",[_("strong",[t._v("제동:")]),t._v(" 추진 모터 출력 최소, 방향타 최소 움직임")])]),t._v(" "),_("p",[t._v("무선 조종 장치는 "),_("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#types-of-remote-controls"}},[t._v("모드에 따라")]),t._v(" 다른 움직임을 받습니다(제어 모드는 추진 제어와 방위 제어에 사용하는 스틱에 영향을 줌):")],1),t._v(" "),_("ul",[_("li",[_("strong",[t._v("모드 2번")]),t._v(":\n"),_("ul",[_("li",[_("em",[t._v("Arm:")]),t._v(" Left stick to bottom right.")]),t._v(" "),_("li",[_("em",[t._v("Disarm:")]),t._v(" Left stick to the bottom left.")])])]),t._v(" "),_("li",[_("strong",[t._v("모드 1번")]),t._v(":\n"),_("ul",[_("li",[_("em",[t._v("Arm:")]),t._v(" Left-stick to right, right-stick to bottom.")]),t._v(" "),_("li",[_("em",[t._v("Disarm:")]),t._v(" Left-stick to left, right-stick to the bottom.")])])])]),t._v(" "),_("p",[t._v("The required hold time can be configured using "),_("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[t._v("COM_RC_ARM_HYST")]),t._v(".")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("매개변수")]),t._v(" "),_("th",[t._v("설명")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"COM_RC_ARM_HYST"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_ARM_HYST"}},[t._v("COM_RC_ARM_HYST")])],1),t._v(" "),_("td",[t._v("Time that RC stick must be held in arm/disarm position before arming/disarming occurs (default: 1 second).")])])])]),t._v(" "),_("p",[_("span",{attrs:{id:"arm_disarm_switch"}})]),t._v(" "),_("h2",{attrs:{id:"시동-단추-스위치"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#시동-단추-스위치"}},[t._v("#")]),t._v(" 시동 단추/스위치")]),t._v(" "),_("p",[t._v("An "),_("em",[t._v("arming button")]),t._v(' or "momentary switch" can be configured to trigger arm/disarm '),_("em",[t._v("instead")]),t._v(" of "),_("a",{attrs:{href:"#arm_disarm_gestures"}},[t._v("gesture-based arming")]),t._v(" (setting an arming switch disables arming gestures). The button should be held down for ("),_("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[t._v("nominally")]),t._v(") one second to arm (when disarmed) or disarm (when armed).")]),t._v(" "),_("p",[t._v("A two-position switch can also be used for arming/disarming, where the respective arm/disarm commands are sent on switch "),_("em",[t._v("transitions")]),t._v(".")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("Two-position arming switches are primarily used in/recommended for racing drones.")])]),t._v(" "),_("p",[t._v("The switch or button is assigned (and enabled) using "),_("a",{attrs:{href:"#RC_MAP_ARM_SW"}},[t._v("RC_MAP_ARM_SW")]),t._v(', and the switch "type" is configured using '),_("a",{attrs:{href:"#COM_ARM_SWISBTN"}},[t._v("COM_ARM_SWISBTN")]),t._v(".")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("파라미터")]),t._v(" "),_("th",[t._v("설명")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"RC_MAP_ARM_SW"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_ARM_SW"}},[t._v("RC_MAP_ARM_SW")])],1),t._v(" "),_("td",[t._v("RC arm switch channel (default: 0 - unassigned). If defined, the specified RC channel (button/switch) is used for arming instead of a stick gesture.")])])])]),t._v(" "),_("p",[_("strong",[t._v("Note:")])]),t._v(" "),_("ul",[_("li",[t._v("This setting "),_("em",[t._v("disables the stick gesture")]),t._v("!")]),t._v(" "),_("li",[t._v("This setting applies to RC controllers. It does not apply to Joystick controllers that are connected via "),_("em",[t._v("QGroundControl")]),t._v(". |\n| "),_("span",{attrs:{id:"COM_ARM_SWISBTN"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_SWISBTN"}},[t._v("COM_ARM_SWISBTN")]),t._v(" | Arm switch is a momentary button.")],1),t._v(" "),_("li",[_("code",[t._v("0")]),t._v(": Arm switch is a 2-position switch where arm/disarm commands are sent on switch transitions."),_("br"),t._v("\n-"),_("code",[t._v("1")]),t._v(": Arm switch is a button or momentary button where the arm/disarm command ae sent after holding down button for set time ("),_("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[t._v("COM_RC_ARM_HYST")]),t._v(").                                 |")])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("The switch can also be set as part of "),_("em",[t._v("QGroundControl")]),t._v(" "),_("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("Flight Mode")]),t._v(" configuration.")],1)]),t._v(" "),_("h2",{attrs:{id:"자동-제동"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#자동-제동"}},[t._v("#")]),t._v(" 자동 제동")]),t._v(" "),_("p",[t._v("By default vehicles will automatically disarm on landing, or if you take too long to take off after arming. The feature is configured using the following timeouts.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("파라미터")]),t._v(" "),_("th",[t._v("설명")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"COM_DISARM_LAND"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),_("td",[t._v("Time-out for auto disarm after landing. Default: 2s (-1 to disable).")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"COM_DISARM_PRFLT"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")])],1),t._v(" "),_("td",[t._v("Time-out for auto disarm if too slow to takeoff. Default: 10s (<=0 to disable).")])])])]),t._v(" "),_("h2",{attrs:{id:"시동-절차-시동-전-상태와-안전-단추"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#시동-절차-시동-전-상태와-안전-단추"}},[t._v("#")]),t._v(" 시동 절차: 시동 전 상태와 안전 단추")]),t._v(" "),_("p",[t._v("The arming sequence depends on whether or not there is a "),_("em",[t._v("safety switch")]),t._v(", and is controlled by the parameters "),_("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE")]),t._v(" (Prearm mode) and "),_("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY")]),t._v(" (I/O safety circuit breaker).")]),t._v(" "),_("p",[t._v("The "),_("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE")]),t._v(' parameter defines when/if pre-arm mode is enabled ("safe"/non-throttling actuators are able to move):')]),t._v(" "),_("ul",[_("li",[_("em",[t._v("Disabled")]),t._v(': Pre-arm mode disabled (there is no stage where only "safe"/non-throttling actuators are enabled).')]),t._v(" "),_("li",[_("em",[t._v("Safety Switch")]),t._v(" (Default): The pre-arm mode is enabled by the safety switch. If there is no safety switch then pre-arm mode will not be enabled.")]),t._v(" "),_("li",[_("em",[t._v("Always")]),t._v(": Prearm mode is enabled from power up.")])]),t._v(" "),_("p",[t._v("기본 설정에서는 시동 전에 안전 스위치를 사용하도록 설정합니다. 시동 전에 이 스위치를 켜고 나서 모든 모터와 액츄에이터를 가동할 목적으로 시동을 걸 수 있습니다.")]),t._v(" "),_("p",[t._v("기본 시동 절차는 다음과 같습니다:")]),t._v(" "),_("h3",{attrs:{id:"기본값-com-prearm-mode-안전-및-안전-스위치"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#기본값-com-prearm-mode-안전-및-안전-스위치"}},[t._v("#")]),t._v(" 기본값: COM_PREARM_MODE=안전 및 안전 스위치")]),t._v(" "),_("p",[t._v("The default configuration uses safety switch to prearm. From prearm you can then arm to engage all motors/actuators. It corresponds to: "),_("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE=1")]),t._v(" (safety switch) and "),_("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY=0")]),t._v(" (I/O safety circuit breaker disabled).")]),t._v(" "),_("p",[t._v("시작 절차는 다음과 같습니다:")]),t._v(" "),_("ol",[_("li",[t._v("전원 인가\n"),_("ul",[_("li",[t._v("모든 액츄에이터를 제동 상태로 두어 잠금")]),t._v(" "),_("li",[t._v("시동 걸기 불가능")])])]),t._v(" "),_("li",[t._v("안전 스위치 누름\n"),_("ul",[_("li",[t._v("시스템이 시동 전 상태로 전환: 추진 모터를 제외한 모든 액츄에이터 동작 가능(예: 보조익)")]),t._v(" "),_("li",[t._v("시스템 안전 장치 꺼짐: 시동 가능")])])]),t._v(" "),_("li",[t._v("시동 명령 인가\n"),_("ul",[_("li",[t._v("시스템에 시동이 걸림")]),t._v(" "),_("li",[t._v("모든 모터와 액츄에이터를 움직일 수 있음")])])])]),t._v(" "),_("h3",{attrs:{id:"com-prearm-mode-비활성-및-안전-스위치"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-비활성-및-안전-스위치"}},[t._v("#")]),t._v(" COM_PREARM_MODE=비활성 및 안전 스위치")]),t._v(" "),_("p",[t._v("When prearm mode is "),_("em",[t._v("Disabled")]),t._v(', engaging the safety switch does not unlock the "safe" actuators, though it does allow you to then arm the vehicle. This corresponds to '),_("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE=0")]),t._v(" (Disabled) and "),_("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY=0")]),t._v(" (I/O safety circuit breaker disabled).")]),t._v(" "),_("p",[t._v("시작 절차는 다음과 같습니다:")]),t._v(" "),_("ol",[_("li",[t._v("전원 인가\n"),_("ul",[_("li",[t._v("모든 액츄에이터를 제동 상태로 두어 잠금")]),t._v(" "),_("li",[t._v("시동 걸기 불가능")])])]),t._v(" "),_("li",[t._v("안전 스위치 누름\n"),_("ul",[_("li",[_("em",[t._v("모든 액츄에이터가 제동 상태로 잠김 (제동 상태와 동일).")])]),t._v(" "),_("li",[t._v("시스템 안전 장치 꺼짐: 시동 가능")])])]),t._v(" "),_("li",[t._v("시동 명령 인가\n"),_("ul",[_("li",[t._v("시스템에 시동이 걸림")]),t._v(" "),_("li",[t._v("모든 모터와 액츄에이터를 움직일 수 있음")])])])]),t._v(" "),_("h3",{attrs:{id:"com-prearm-mode-always-and-safety-switch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-always-and-safety-switch"}},[t._v("#")]),t._v(" COM_PREARM_MODE=Always and Safety Switch")]),t._v(" "),_("p",[t._v("When prearm mode is "),_("em",[t._v("Always")]),t._v(", prearm mode is enabled from power up. To arm, you still need the safety switch. This corresponds to "),_("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE=2")]),t._v(" (Always) and "),_("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY=0")]),t._v(" (I/O safety circuit breaker disabled).")]),t._v(" "),_("p",[t._v("시작 절차는 다음과 같습니다:")]),t._v(" "),_("ol",[_("li",[t._v("전원 인가\n"),_("ul",[_("li",[t._v("시스템이 시동 전 상태로 전환: 추진 모터를 제외한 모든 액츄에이터 동작 가능(예: 보조익)")]),t._v(" "),_("li",[t._v("시동 걸기 불가능")])])]),t._v(" "),_("li",[t._v("안전 스위치 누름\n"),_("ul",[_("li",[t._v("시스템 안전 장치 꺼짐: 시동 가능")])])]),t._v(" "),_("li",[t._v("시동 명령 인가\n"),_("ul",[_("li",[t._v("시스템에 시동이 걸림")]),t._v(" "),_("li",[t._v("모든 모터와 액츄에이터를 움직일 수 있음")])])])]),t._v(" "),_("h3",{attrs:{id:"com-prearm-mode-safety-or-disabled-and-no-safety-switch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-safety-or-disabled-and-no-safety-switch"}},[t._v("#")]),t._v(" COM_PREARM_MODE=Safety or Disabled and No Safety Switch")]),t._v(" "),_("p",[t._v("With no safety switch, when "),_("code",[t._v("COM_PREARM_MODE")]),t._v(" is set to "),_("em",[t._v("Safety")]),t._v(" or "),_("em",[t._v("Disabled")]),t._v(" prearm mode cannot be enabled (same as disarmed). This corresponds to "),_("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE=0 or 1")]),t._v(" (Disabled/Safety Switch) and "),_("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY=22027")]),t._v(" (I/O safety circuit breaker engaged).")]),t._v(" "),_("p",[t._v("시작 절차는 다음과 같습니다:")]),t._v(" "),_("ol",[_("li",[t._v("전원 인가\n"),_("ul",[_("li",[t._v("모든 액츄에이터를 제동 상태로 두어 잠금")]),t._v(" "),_("li",[t._v("시스템 안전 장치 꺼짐: 시동 가능")])])]),t._v(" "),_("li",[t._v("시동 명령 인가\n"),_("ul",[_("li",[t._v("시스템에 시동이 걸림")]),t._v(" "),_("li",[t._v("모든 모터와 액츄에이터를 움직일 수 있음")])])])]),t._v(" "),_("h3",{attrs:{id:"com-prearm-mode-always-and-no-safety-switch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-always-and-no-safety-switch"}},[t._v("#")]),t._v(" COM_PREARM_MODE=Always and No Safety Switch")]),t._v(" "),_("p",[t._v("When prearm mode is "),_("em",[t._v("Always")]),t._v(", prearm mode is enabled from power up. This corresponds to "),_("a",{attrs:{href:"#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE=2")]),t._v(" (Always) and "),_("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY=22027")]),t._v(" (I/O safety circuit breaker engaged).")]),t._v(" "),_("p",[t._v("The startup sequence is:")]),t._v(" "),_("ol",[_("li",[t._v("전원 인가\n"),_("ul",[_("li",[t._v("시스템이 시동 전 상태로 전환: 추진 모터를 제외한 모든 액츄에이터 동작 가능(예: 보조익)")]),t._v(" "),_("li",[t._v("시스템 안전 장치 꺼짐: 시동 가능")])])]),t._v(" "),_("li",[t._v("시동 명령 인가\n"),_("ul",[_("li",[t._v("시스템에 시동이 걸림")]),t._v(" "),_("li",[t._v("모든 모터와 액츄에이터를 움직일 수 있음")])])])]),t._v(" "),_("h3",{attrs:{id:"매개변수"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#매개변수"}},[t._v("#")]),t._v(" 매개변수")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("매개변수")]),t._v(" "),_("th",[t._v("설명")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"COM_PREARM_MODE"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_PREARM_MODE"}},[t._v("COM_PREARM_MODE")])],1),t._v(" "),_("td",[t._v("시동 전 모드로 진입하는 상태입니다. "),_("code",[t._v("0")]),t._v(": 비활성, "),_("code",[t._v("1")]),t._v(": 안전 스위치(안전 스위치로 시동 전 모드 활성 가능, 스위치가 없으면 이 옵션을 사용할 수 없습니다), "),_("code",[t._v("2")]),t._v(": 항상(전원 인가 후 시동 전 모드를 켭니다). 기본값: "),_("code",[t._v("1")]),t._v(" (안전 단추).")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"CBRK_IO_SAFETY"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_IO_SAFETY"}},[t._v("CBRK_IO_SAFETY")])],1),t._v(" "),_("td",[t._v("입출력 안전을 위한 회로 차단.")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);