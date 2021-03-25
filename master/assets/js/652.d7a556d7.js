(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{2348:function(t,e,r){"use strict";r.r(e);var a=r(18),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"飞行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式"}},[t._v("#")]),t._v(" 飞行模式")]),t._v(" "),a("p",[a("em",[t._v("飞行模式")]),t._v(" 定义自动驾驶仪如何响应用户输入并控制飞机飞行。 可以根据飞控闭环的回路层级将飞行模式大致分为 "),a("em",[t._v("手动 （manual）")]),t._v(", "),a("em",[t._v("辅助 （assisted）")]),t._v(" 和 "),a("em",[t._v("自动 （auto）")]),t._v(" 三大模式。 飞手使用遥控器上的开关或者 ground control station 在飞行模式之间进行切换。")]),t._v(" "),a("p",[t._v("需要注意的是并非所有类型的飞机都具备全部的飞行模式，同时部分模式在不同类型的飞机上的行为模式也不相同（见下文）。 最终，部分飞行模式仅在飞行前或者飞行中某些特定条件下才有意义（如 GPS锁定，空速传感器，某个轴的姿态感知）。 系统只会在特定条件下才能进行一些模式之间的切换。")]),t._v(" "),a("p",[t._v("下面的各小节对所有的飞行模式进行了一个概述，随后给出了一张 "),a("a",{attrs:{href:"#flight-mode-evaluation-diagram"}},[t._v("飞行模式评估图")]),t._v(" ，该图展示了 PX4 在哪一种条件下会切换至一个新的飞行模式。")]),t._v(" "),a("p",[t._v("面向用户的飞行模式文件可在以下面找到：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html"}},[t._v("开始 > 飞行模式")]),t._v(": 对初学者友好的所有飞行模式解释")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/flight_modes/"}},[t._v("飞行> 飞行模式")]),t._v(": 每种模式的详细解释文件\n:::")],1)]),t._v(" "),a("h2",{attrs:{id:"飞行模式概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式概要"}},[t._v("#")]),t._v(" 飞行模式概要")]),t._v(" "),a("h3",{attrs:{id:"手动飞行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动飞行模式"}},[t._v("#")]),t._v(" 手动飞行模式")]),t._v(" "),a("p",[t._v("“手动”飞行模式下用户可通过遥控器（或操纵杆）实现对飞机的直接控制。 飞机的运动总是跟随者着摇杆的运动，但飞机对操作命令的响应的级别/类型会根据模式的不同而发生变化。 例如，有经验的飞手会使用操纵杆直接操作舵机的模式，而初学者通常会选择对突然的操作杆位置变化反应较小的模式。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("固定翼无人机/无人车/无人船：")])]),t._v(" "),a("ul",[a("li",[t._v("**手动控制模式：**飞手的控制输入（ 来自遥控器的原始用户输入 ）直接传递给输出混控器。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("多旋翼无人机：")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("MANUAL:")]),t._v(" The pilot's control inputs (raw user inputs from RC transmitter) are passed directly to the output mixer.")]),t._v(" "),a("li",[a("strong",[t._v("STABILIZED:")]),t._v(" The pilot's pitch and roll inputs are passed as angle commands to the autopilot, while the yaw input is sent directly via the output mixer to the rudder (manual control). If the RC roll and pitch sticks are centered, the autopilot regulates the roll and pitch angles to zero, hence stabilizing (leveling-out) the attitude against any wind disturbances. However, in this mode the position of the aircraft is not controlled by the autopilot, hence the position can drift due to wind. With nonzero roll input the vehicle does a coordinated turn to achieve zero sideslip (the acceleration in y-direction (sidewards) is zero). During a coordinated turn, the rudder is used to control the sideslip and any manual yaw input is added to that.")]),t._v(" "),a("li",[t._v("**姿态特技模式：**如果飞行员的输入值大于该模式的阈值，即如果遥控器操纵杆离中心位置有一定距离，飞手的输入作为滚转、俯仰和偏航 "),a("em",[t._v("角速率")]),t._v(" 指令传递给飞控程序。 反之，飞手的操作输入会作为滚转和俯仰<1>角度</1>指令和偏航<1>角速率</1> 指令。 飞手对油门的操作输入将直接传到输出混控器上。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Multirotors:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("MANUAL/STABILIZED")]),t._v(" The pilot's inputs are passed as roll and pitch "),a("em",[t._v("angle")]),t._v(" commands and a yaw "),a("em",[t._v("rate")]),t._v(" command. Throttle is passed directly to the output mixer. The autopilot controls the attitude, meaning it regulates the roll and pitch angles to zero when the RC sticks are centered, consequently leveling-out the attitude. However, in this mode the position of the vehicle is not controlled by the autopilot, hence the position can drift due to wind.")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("For Multirotors, Manual and Stabilized modes are the same.")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("ACRO:")]),t._v(" The pilot's inputs are passed as roll, pitch, and yaw "),a("em",[t._v("rate")]),t._v(" commands to the autopilot. The autopilot controls the angular rates, but not the attitude. Hence, if the RC sticks are centered the vehicle will not level-out. This allows the multirotor to become completely inverted. Throttle is passed directly to the output mixer.")])]),t._v(" "),a("h3",{attrs:{id:"辅助飞行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#辅助飞行模式"}},[t._v("#")]),t._v(" 辅助飞行模式")]),t._v(" "),a("p",[t._v("“辅助”飞行模式也由飞手控制，但会提供一定程度的“自动”辅助，例如，在风的干扰下自动保持位置/方向。 辅助飞行模式会让获取或恢复受控的飞行状态变得更加容易。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("定高模式：")]),t._v(" （高度控制）\n"),a("ul",[a("li",[t._v("**固定翼飞机：**当滚转、俯仰和偏航（RPY）控制杆全部居中（或小于某个规定的死区范围），飞机将保持当前高度平直飞行。 飞机的的 X 和 Y 方向的位置会随风漂移。")]),t._v(" "),a("li",[a("strong",[t._v("多旋翼：")]),t._v(" 滚转、俯仰和偏航输入与自稳模式相同。 油门输入会令飞机按照预定的最大速率爬升或下降。 油门的输入有很大的死区。 油门居中表示保持当前高度。 飞控程序仅控制高度，所以飞机的 X、Y 位置会随风漂移。")])])]),t._v(" "),a("li",[a("strong",[t._v("位置保持模式：")]),t._v(" （位置控制）\n"),a("ul",[a("li",[a("strong",[t._v("固定翼飞机：")]),t._v(" 中性的输入（遥控器控制杆居中）会令飞机保持水平飞行，且如果需要保持直线飞行的话飞控程序将会根据情况产生偏航指令以应对风的影响。")]),t._v(" "),a("li",[a("strong",[t._v("多旋翼：")]),t._v(" 滚转控制左右向速度，俯仰控制飞机相对地面的前后向速度。 偏航与手动控制模式一样，控制的是偏航角速率。 油门与定高模式 模式一样控制飞机的爬升/下降速率。 这意味着当滚转、俯仰和油门杆居中时，飞控程序会在任意风的干扰下稳定地保持飞机的X、Y、Z 位置。")])])])]),t._v(" "),a("h3",{attrs:{id:"自动飞行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动飞行模式"}},[t._v("#")]),t._v(" 自动飞行模式")]),t._v(" "),a("p",[t._v('"自动" 模式下飞控程序几乎不需要或者完全不需要飞手的操作就可以完成特定任务(例如执行起飞、降落和飞行任务)。')]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("自动盘旋模式：")]),t._v(" （留待）\n"),a("ul",[a("li",[a("strong",[t._v("固定翼飞机：")]),t._v(" 飞机将在当前高度、当前位置附近盘旋（或者比当前高度稍高一点的高度，对“我找不到飞机了”的情况比较有用）。")]),t._v(" "),a("li",[a("strong",[t._v("多旋翼：")]),t._v(" 多旋翼无人机会在当前位置和高度悬停/盘旋。")])])]),t._v(" "),a("li",[a("strong",[t._v("自动返航模式：")]),t._v(" （返航）\n"),a("ul",[a("li",[a("strong",[t._v("固定翼飞机：")]),t._v(" 飞机返回起飞的位置并在该位置上空盘旋。")]),t._v(" "),a("li",[a("strong",[t._v("多旋翼：")]),t._v(" 多旋翼无人机保持当前高度，沿直线返回起飞位置（如果当前高度大于起飞位置高度 + "),a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v("）或者 "),a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" （如果 "),a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" 比当前高度要高），则无人机将自动降落。")],1)])]),t._v(" "),a("li",[a("strong",[t._v("任务模式：")]),t._v(" （任务）\n"),a("ul",[a("li",[t._v("**所有类型的系统：**飞机执行由地面控制站 (GCS) 发送的预规划飞行任务。 如果没有收到任务, 飞机将会在当前的的位置上停留/盘旋。")]),t._v(" "),a("li",[a("em",[a("strong",[t._v("离线模式")])]),t._v(" (离线) 此模式下位置、速度和姿态角的 参考值/目标值/设定值 由通过串口或者 MAVLink 连接的配套计算机提供。 离线模式的设定值可以由诸如 "),a("a",{attrs:{href:"https://github.com/mavlink/mavros",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVROS"),a("OutboundLink")],1),t._v(" 或者 "),a("a",{attrs:{href:"http://dronekit.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronekit"),a("OutboundLink")],1),t._v(" 等 API 接口提供。")])])])]),t._v(" "),a("h2",{attrs:{id:"飞行模式评估图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式评估图"}},[t._v("#")]),t._v(" 飞行模式评估图")]),t._v(" "),a("p",[a("img",{attrs:{src:r(605),alt:"Commander Flow diagram"}})])])}),[],!1,null,null,null);e.default=o.exports},605:function(t,e,r){t.exports=r.p+"assets/img/commander-flow-diagram.17c32053.png"}}]);