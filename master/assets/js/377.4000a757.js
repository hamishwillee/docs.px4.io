(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{2895:function(t,_,s){"use strict";s.r(_);var v=s(19),a=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"飞行入门课"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#飞行入门课"}},[t._v("#")]),t._v(" 飞行入门课")]),t._v(" "),v("p",[t._v("本主题介绍了在手动或自动驾驶辅助飞行模式下使用"),v("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("遥控器")]),t._v("操控机体的基础知识（有关自主飞行，请参阅："),v("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[t._v("任务")]),t._v("）。")],1),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("在您第一次飞行之前，您应该阅读我们的"),v("RouterLink",{attrs:{to:"/zh/flying/first_flight_guidelines.html"}},[t._v("首次飞行指南")]),t._v("。")],1)]),t._v(" "),v("p",[v("span",{attrs:{id:"arm"}})]),t._v(" "),v("h2",{attrs:{id:"解锁机体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解锁机体"}},[t._v("#")]),t._v(" 解锁机体")]),t._v(" "),v("p",[t._v("在您起飞机体前，必须要先解锁它。 这将为所有电机和驱动器供电；在多轴飞行器上，它将启动螺旋桨转动。")]),t._v(" "),v("p",[t._v("解锁无人机")]),t._v(" "),v("ul",[v("li",[t._v("首先关闭"),v("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#safety_switch"}},[t._v("安全开关")]),t._v("。")],1),t._v(" "),v("li",[t._v("对您的机体使用解锁命令 - 将油门杆放在右下角。\n"),v("ul",[v("li",[t._v("或者增加一个"),v("RouterLink",{attrs:{to:"/zh/config/safety.html#arming_switch"}},[t._v("解锁/加锁开关")]),t._v("。")],1),t._v(" "),v("li",[t._v("您还可以在 "),v("em",[t._v("QGroundControl")]),t._v("中解锁（PX4 自动飞行时不需要电台控制）。")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("机体在"),v("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("校准/配置")]),t._v("完成且位置固定之前无法解锁。 "),v("RouterLink",{attrs:{to:"/zh/getting_started/vehicle_status.html"}},[t._v("机体状态通知")]),t._v(" (包括机体LED, 音频通知和 "),v("em",[t._v("QGroundControl")]),t._v(" 通知）可以告诉您机体何时可以飞行(并帮助您在未准备好飞行时找出原因)。")],1)]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("如果您解锁后过长时间没有起飞，机体将（ "),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("默认情况下")]),t._v("）自动"),v("RouterLink",{attrs:{to:"/zh/advanced_config/prearm_arm_disarm.html#auto-disarming"}},[t._v("加锁")]),t._v("（关闭电机）！ 这是一种安全措施，可确保机体在没有被使用时恢复到安全状态。")],1)]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("VTOL机型只能在多轴模式下解锁(默认-可以使用[CBRK_VTOLARMING](../advanced_config/parameter_reference.md#CBRK_VTOLARMING) 启用固定翼飞机模式下解锁)。")])]),t._v(" "),v("p",[v("span",{attrs:{id:"takeoff-and-landing"}})]),t._v(" "),v("h2",{attrs:{id:"起飞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#起飞"}},[t._v("#")]),t._v(" 起飞")]),t._v(" "),v("p",[t._v("最简单的起飞方式（在"),v("a",{attrs:{href:"#arm"}},[t._v("机体解锁")]),t._v("后）是使用自动 "),v("RouterLink",{attrs:{to:"/zh/flight_modes/takeoff.html"}},[t._v("起飞模式")]),t._v("。 通常可以通过 "),v("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("遥控器拨杆开关")]),t._v(" 或地面站触发的。")],1),t._v(" "),v("p",[t._v("多轴（和 VTOL 在多轴模式下）飞手可以通过启用"),v("RouterLink",{attrs:{to:"/zh/flight_modes/#position_mc"}},[t._v("位置模式")]),t._v("，解锁机体，然后将油门杆升至 62.5% 以上来"),v("em",[t._v("手动")]),t._v("起飞。 高于此值，所有控制器都被启用，无人机将输出悬停所需的油门值（"),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v("）。")],1),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("强烈推荐自动起飞模式，尤其是固定翼机体！")])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("如果机体在解锁后过长时间没有起飞，无人机将会加锁（使用"),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")]),t._v("调整超时时间）。")],1)]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("如果起飞过程出现故障"),v("RouterLink",{attrs:{to:"/zh/config/safety.html#failure_detector"}},[t._v("故障检测器")]),t._v("会自动关闭电机。")],1)]),t._v(" "),v("h2",{attrs:{id:"降落"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#降落"}},[t._v("#")]),t._v(" 降落")]),t._v(" "),v("p",[t._v("最简单的降落方法是使用自动 "),v("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("降落")]),t._v("或者"),v("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航")]),t._v("模式。")],1),t._v(" "),v("p",[t._v("对于多轴飞行器（和多轴模式下的 VTOL），飞手可以通过向下推油门杆手动降落，直到机体降落加锁。")]),t._v(" "),v("p",[t._v("请注意，默认情况下，机体在降落后会自动加锁：")]),t._v(" "),v("ul",[v("li",[t._v("通过"),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")]),t._v("来设置降落后自动加锁的时间（或完全禁用它）。")],1),t._v(" "),v("li",[t._v("通过将油门杆放在左下角手动加锁。")])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("如果您在降落期间看到车辆“抽搐” (电机不停的在关闭打开状态快速切换) 这可能是由于 "),v("RouterLink",{attrs:{to:"/zh/advanced_config/land_detector.html"}},[t._v("降落检测器配置")]),t._v("不当（特别是"),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v("设置不当）造成的。")],1)]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("强烈建议自动降落，尤其是固定翼机体。")])]),t._v(" "),v("h2",{attrs:{id:"飞行控制-命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#飞行控制-命令"}},[t._v("#")]),t._v(" 飞行控制/命令")]),t._v(" "),v("p",[t._v("所有飞行，包括起飞和降落，都使用 4 个基本命令进行控制：横滚、偏航、俯仰和油门。")]),t._v(" "),v("p",[v("img",{attrs:{src:s(382),alt:"遥控器基础命令"}})]),t._v(" "),v("p",[t._v("为了控制您的飞机，您需要了解基本的横滚、偏航、俯仰和油门命令如何影响三维空间中的运动。 这取决于您是控制像固定翼一样向前飞行的飞机，还是像多轴这样的“悬停飞机”。")]),t._v(" "),v("h3",{attrs:{id:"悬停飞机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#悬停飞机"}},[t._v("#")]),t._v(" 悬停飞机")]),t._v(" "),v("p",[t._v("悬停飞行器（直升机，在VTOL悬停模式）到动作命令响应如下所示：")]),t._v(" "),v("p",[v("img",{attrs:{src:s(841),alt:"多旋翼基本动作"}})]),t._v(" "),v("ul",[v("li",[t._v("俯仰 => 往前 / 往后。")]),t._v(" "),v("li",[t._v("横滚 => 往左 / 往右。")]),t._v(" "),v("li",[t._v("偏航 => 围绕机身中心左 / 右旋转。")]),t._v(" "),v("li",[t._v("油门 => 改变高度 / 速度。")])]),t._v(" "),v("h3",{attrs:{id:"前飞飞机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前飞飞机"}},[t._v("#")]),t._v(" 前飞飞机")]),t._v(" "),v("p",[t._v("向前飞行的飞机（固定翼、固定翼模式的VTOL）对动作命令作出如下反应：")]),t._v(" "),v("p",[v("img",{attrs:{src:s(842),alt:"固定翼基本动作"}})]),t._v(" "),v("ul",[v("li",[t._v("俯仰 => 上升 / 下降。")]),t._v(" "),v("li",[t._v("横滚 => 左 / 右倾弯。")]),t._v(" "),v("li",[t._v("偏航 => 左 / 右转动机尾。")]),t._v(" "),v("li",[t._v("油门 => 改变前近速度。")])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("对于飞机的最佳转弯又称为协调转弯，需同时操作滚动和少量偏航。 这个动作需要一定的经验！")])]),t._v(" "),v("h2",{attrs:{id:"辅助飞行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#辅助飞行"}},[t._v("#")]),t._v(" 辅助飞行")]),t._v(" "),v("p",[t._v("即是了解了机体是如何控制的，全手动模式的飞行也是棘手的。 新用户应该 "),v("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("配置他们的遥控器")]),t._v(" 来使用飞行模式，在这种模式下自动驾驶仪自动补偿不稳定的用户输入或环境因素。")],1),t._v(" "),v("p",[t._v("强烈建议新手使用以下三种模式：")]),t._v(" "),v("ul",[v("li",[t._v("姿态模式-机体很难侧翻，并且如果摇杆被释放飞行器将趋于平稳（但不保持位置）。")]),t._v(" "),v("li",[t._v("高度模式 - 爬升和下降由一个最大速率来控制。")]),t._v(" "),v("li",[t._v("位置模式 - 当摇杆被释放机体将保持飞行（位置定点，不会随风漂移）。")])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("您也可以通过主飞行界面底部的 "),v("em",[t._v("QGroundControl")]),t._v(" 按钮访问自动模式。")])])])}),[],!1,null,null,null);_.default=a.exports},382:function(t,_,s){t.exports=s.p+"assets/img/rc_basic_commands.3311bd90.png"},841:function(t,_,s){t.exports=s.p+"assets/img/basic_movements_multicopter.a34373d7.png"},842:function(t,_,s){t.exports=s.p+"assets/img/basic_movements_forward.1fa3a12d.png"}}]);