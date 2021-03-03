(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{2489:function(t,e,a){"use strict";a.r(e);var o=a(18),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"飞行-101"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#飞行-101"}},[t._v("#")]),t._v(" 飞行 101")]),t._v(" "),o("p",[t._v("该主题介绍了用"),o("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("遥控器")]),t._v("以手动或者自动-辅助飞行模式（自主飞行请参阅："),o("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[t._v("任务")]),t._v("）来控制飞行器的基本飞行。")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("Before you fly for the first time you should read our "),o("RouterLink",{attrs:{to:"/zh/flying/first_flight_guidelines.html"}},[t._v("First Flight Guidelines")]),t._v(".")],1)]),t._v(" "),o("p",[o("span",{attrs:{id:"arm"}})]),t._v(" "),o("h2",{attrs:{id:"arm-the-vehicle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arm-the-vehicle"}},[t._v("#")]),t._v(" Arm the Vehicle")]),t._v(" "),o("p",[t._v("Before you can fly the vehicle it must first be "),o("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#arming"}},[t._v("armed")]),t._v(". This will power all motors and actuators; on a multicopter it will start propellers turning.")],1),t._v(" "),o("p",[t._v("To arm the drone:")]),t._v(" "),o("ul",[o("li",[t._v("First disengage the "),o("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#safety_switch"}},[t._v("safety switch")]),t._v(".")],1),t._v(" "),o("li",[t._v("Use the arm command for your vehicle - put the throttle stick in the bottom right corner.\n"),o("ul",[o("li",[t._v("Alternatively configure an "),o("RouterLink",{attrs:{to:"/zh/config/safety.html#arming_switch"}},[t._v("arm/disarm switch")]),t._v(".")],1),t._v(" "),o("li",[t._v("You can also arm in "),o("em",[t._v("QGroundControl")]),t._v(" (PX4 does not require a radio control for flying autonomously).")])])])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),o("p",[t._v("The vehicle will not arm until it is "),o("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("calibrated/configured")]),t._v(" and has a position lock. "),o("RouterLink",{attrs:{to:"/zh/getting_started/vehicle_status.html"}},[t._v("Vehicle Status Notifications")]),t._v(" (including on-vehicle LEDs, audio notifications and "),o("em",[t._v("QGroundControl")]),t._v(" updates) can tell you when the vehicle is ready to fly (and help you work out the cause when it is not ready to fly).")],1)]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("The vehicle will (by "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("default")]),t._v(") automatically "),o("RouterLink",{attrs:{to:"/zh/advanced_config/prearm_arm_disarm.html#auto-disarming"}},[t._v("disarm")]),t._v(" (turn off motors) if you take too long to take off! This is a safety measure to ensure that vehicles return to a safe state when not in use.")],1)]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("A VTOL vehicle can only arm in multicopter mode (by default - arming in fixed-wing mode can be enabled using "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_VTOLARMING"}},[t._v("CBRK_VTOLARMING")]),t._v(").")],1)]),t._v(" "),o("p",[o("span",{attrs:{id:"takeoff-and-landing"}})]),t._v(" "),o("h2",{attrs:{id:"起飞-takeoff"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#起飞-takeoff"}},[t._v("#")]),t._v(" 起飞 Takeoff")]),t._v(" "),o("p",[t._v("The easiest way to takeoff (after "),o("a",{attrs:{href:"#arm"}},[t._v("arming the vehicle")]),t._v(") is to use the automatic "),o("RouterLink",{attrs:{to:"/zh/flight_modes/takeoff.html"}},[t._v("Takeoff mode")]),t._v(". Usually this is triggered from an "),o("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("RC switch")]),t._v(" or ground station.")],1),t._v(" "),o("p",[t._v("Multicopter (and VTOL in multicopter mode) pilots can take off "),o("em",[t._v("manually")]),t._v(" by enabling "),o("RouterLink",{attrs:{to:"/zh/flight_modes/#position_mc"}},[t._v("position mode")]),t._v(", arming the vehicle, and then raising the throttle stick above 62.5%. Above this value all controllers are enabled and the vehicle goes to the throttle level required for hovering ("),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(").")],1),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),o("p",[t._v("The automatic takeoff mode is highly recommended, in particular for Fixed Wing vehicles!")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("The vehicle may disarm if you take too long to take off after arming (tune the timeout using "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")]),t._v(").")],1)]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/zh/config/safety.html#failure_detector"}},[t._v("Failure Detector")]),t._v(" will automatically stop the engines if there is a problem on takeoff.")],1)]),t._v(" "),o("h2",{attrs:{id:"着陆"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#着陆"}},[t._v("#")]),t._v(" 着陆")]),t._v(" "),o("p",[t._v("The easiest way to land is to use the automatic "),o("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("Land")]),t._v(" or "),o("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("Return")]),t._v(" modes.")],1),t._v(" "),o("p",[t._v("For multicopter (and VTOL in multicopter mode) pilots can land manually by pressing the throttle stick down until the vehicle lands and disarms.")]),t._v(" "),o("p",[t._v("Note that vehicles automatically disarm on landing by default:")]),t._v(" "),o("ul",[o("li",[t._v("Use "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")]),t._v(" to set the time to auto-disarm after landing (or disable it altogether).")],1),t._v(" "),o("li",[t._v("Manually disarm by putting the throttle stick in the bottom left corner.")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v('If you see the vehicle "twitch" during landing (turn down the motors, and then immediately turn them back up) this is probably caused by a poor '),o("RouterLink",{attrs:{to:"/zh/advanced_config/land_detector.html"}},[t._v("Land Detector Configuration")]),t._v(" (specifically, a poorly set "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(").")],1)]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),o("p",[t._v("Automatic landing is highly recommended, in particular for Fixed Wing vehicles.")])]),t._v(" "),o("h2",{attrs:{id:"飞行控制-命令"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#飞行控制-命令"}},[t._v("#")]),t._v(" 飞行控制/命令")]),t._v(" "),o("p",[t._v("All flying, including takeoff and landing, is controlled using the 4 basic commands: roll, yaw, pitch and throttle.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(370),alt:"RC Basic Commands"}})]),t._v(" "),o("p",[t._v('In order to control your aircraft you need to understand how the basic Roll, Pitch, Yaw and Throttle commands affect movement in 3D space. This differs depending on whether you\'re controlling a forward-flying aircraft like a plane, or a "hover aircraft" like a multicopter.')]),t._v(" "),o("h3",{attrs:{id:"悬停飞机"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#悬停飞机"}},[t._v("#")]),t._v(" 悬停飞机")]),t._v(" "),o("p",[t._v("Hover aircraft (Copter, VTOL in hover mode) respond to the movement commands as shown below:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(842),alt:"Basic Movements Multicopter"}})]),t._v(" "),o("ul",[o("li",[t._v("Pitch => Forward/back.")]),t._v(" "),o("li",[t._v("横滚 => 往左 / 往右。")]),t._v(" "),o("li",[t._v("偏航 => 围绕机身中心左 / 右旋转。")]),t._v(" "),o("li",[t._v("油门 => 改变高度 / 速度。")])]),t._v(" "),o("h3",{attrs:{id:"前飞飞机"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前飞飞机"}},[t._v("#")]),t._v(" 前飞飞机")]),t._v(" "),o("p",[t._v("Forward-flying aircraft (planes, VTOL in forward flight) respond to the movement commands as shown below:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(843),alt:"Basic Movements Forward"}})]),t._v(" "),o("ul",[o("li",[t._v("俯仰 => 上 / 下升降舵。")]),t._v(" "),o("li",[t._v("横滚 => 左 / 右副翼。")]),t._v(" "),o("li",[t._v("偏航 => 左 / 右方向舵。")]),t._v(" "),o("li",[t._v("油门 => 改变前飞速度。")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("The best turn for airplanes is called a coordinated turn, and is performed using roll and little yaw at the same time. This maneuver requires experience!")])]),t._v(" "),o("h2",{attrs:{id:"辅助飞行"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#辅助飞行"}},[t._v("#")]),t._v(" 辅助飞行")]),t._v(" "),o("p",[t._v("Even with an understanding of how the vehicle is controlled, flight in fully manual mode can be quite unforgiving. New users should "),o("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("configure their transmitter")]),t._v(" to use flight modes where the autopilot automatically compensates for erratic user input or environmental factors.")],1),t._v(" "),o("p",[t._v("The following three modes are highly recommended for new users:")]),t._v(" "),o("ul",[o("li",[t._v("自稳模式-飞行器很难侧翻，并且如果摇杆被释放飞行器将趋于平稳（但不是位置定点）。")]),t._v(" "),o("li",[t._v("高度模式 - 爬升和降落由最大速率控制。")]),t._v(" "),o("li",[t._v("位置模式 - 当摇杆被释放飞行器将保持飞行（位置定点，不会随风漂移）。")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("You can also access automatic modes through the buttons on the bottom of the "),o("em",[t._v("QGroundControl")]),t._v(" main flight screen.")])])])}),[],!1,null,null,null);e.default=i.exports},370:function(t,e,a){t.exports=a.p+"assets/img/rc_basic_commands.3311bd90.png"},842:function(t,e,a){t.exports=a.p+"assets/img/basic_movements_multicopter.a34373d7.png"},843:function(t,e,a){t.exports=a.p+"assets/img/basic_movements_forward.1fa3a12d.png"}}]);