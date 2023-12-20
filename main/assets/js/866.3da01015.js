(window.webpackJsonp=window.webpackJsonp||[]).push([[866],{3365:function(t,e,o){"use strict";o.r(e);var i=o(19),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"飞行模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式"}},[t._v("#")]),t._v(" 飞行模式")]),t._v(" "),i("p",[i("em",[t._v("Flight Modes")]),t._v(" define how the autopilot responds to user input and controls vehicle movement. They are loosely grouped into "),i("em",[t._v("manual")]),t._v(", "),i("em",[t._v("assisted")]),t._v(" and "),i("em",[t._v("auto")]),t._v(" modes, based on the level/type of control provided by the autopilot. 飞手使用遥控器上的开关或者 ground control station 在飞行模式之间进行切换。")]),t._v(" "),i("p",[t._v("需要注意的是并非所有类型的飞机都具备全部的飞行模式，同时部分模式在不同类型的飞机上的行为模式也不相同（见下文）。 Finally, some flight modes make sense only under specific pre-flight and in-flight conditions (e.g. GPS lock). 系统只会在特定条件下才能进行一些模式之间的切换。")]),t._v(" "),i("p",[t._v("下面的各小节对所有的飞行模式进行了一个概述，随后给出了一张 "),i("a",{attrs:{href:"#flight-mode-evaluation-diagram"}},[t._v("飞行模式评估图")]),t._v(" ，该图展示了 PX4 在哪一种条件下会切换至一个新的飞行模式。")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("面向用户的飞行模式文件可在以下面找到：")]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html"}},[t._v("开始 > 飞行模式")]),t._v(": 对初学者友好的所有飞行模式说明。")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/zh/flight_modes/"}},[t._v("Flying > Flight Modes")]),t._v(": Detailed documentation of each mode.")],1)])]),t._v(" "),i("h2",{attrs:{id:"飞行模式概要"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式概要"}},[t._v("#")]),t._v(" 飞行模式概要")]),t._v(" "),i("h3",{attrs:{id:"manual-flight-modes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#manual-flight-modes"}},[t._v("#")]),t._v(" Manual Flight Modes")]),t._v(" "),i("p",[t._v('"Manual" modes are those where the user has direct control over the vehicle via the RC control (or joystick). Vehicle movement always follows stick movement, but the level/type of response changes depending on the mode. For example, experienced fliers can use modes that provide direct passthrough of stick positions to actuators, while beginners will often choose modes that are less responsive to sudden stick-position changes.')]),t._v(" "),i("ul",[i("li",[i("p",[i("strong",[t._v("无人车/无人船：")])]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("MANUAL/STABILIZED/ACRO:")]),t._v(" The pilot's control inputs (raw user inputs from RC transmitter) are passed directly to control allocation.")])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("Fixed-wing aircraft:")])]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("MANUAL:")]),t._v(" The pilot's control inputs (raw user inputs from RC transmitter) are passed directly to control allocation.")]),t._v(" "),i("li",[i("strong",[t._v("STABILIZED:")]),t._v(" The pilot's pitch and roll inputs are passed as angle commands to the autopilot, while the yaw input is sent directly via control allocation to the rudder (manual control). If the RC roll and pitch sticks are centered, the autopilot regulates the roll and pitch angles to zero, hence stabilizing (leveling-out) the attitude against any wind disturbances. However, in this mode the position of the aircraft is not controlled by the autopilot, hence the position can drift due to wind. With nonzero roll input the vehicle does a coordinated turn to achieve zero sideslip (the acceleration in y-direction (sidewards) is zero). During a coordinated turn, the rudder is used to control the sideslip and any manual yaw input is added to that.")]),t._v(" "),i("li",[i("strong",[t._v("ACRO:")]),t._v(" The pilot's inputs are passed as roll, pitch, and yaw "),i("em",[t._v("rate")]),t._v(" commands to the autopilot. 反之，飞手的操作输入会作为滚转和俯仰<1>角度</1>指令和偏航<1>角速率</1> 指令。 Throttle is passed directly to control allocation.")])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("多旋翼：")])]),t._v(" "),i("ul",[i("li",[i("p",[i("strong",[t._v("MANUAL/STABILIZED")]),t._v(" The pilot's inputs are passed as roll and pitch "),i("em",[t._v("angle")]),t._v(" commands and a yaw "),i("em",[t._v("rate")]),t._v(" command. Throttle is passed directly to control allocation. The autopilot controls the attitude, meaning it regulates the roll and pitch angles to zero when the RC sticks are centered, consequently leveling-out the attitude. However, in this mode the position of the vehicle is not controlled by the autopilot, hence the position can drift due to wind.")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")])])])])])]),t._v(" "),i("p",[t._v("For Multirotors, Manual and Stabilized modes are the same.\n:::")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("ACRO:")]),t._v(" The pilot's inputs are passed as roll, pitch, and yaw "),i("em",[t._v("rate")]),t._v(" commands to the autopilot. The autopilot controls the angular rates, but not the attitude. Hence, if the RC sticks are centered the vehicle will not level-out. This allows the multirotor to become completely inverted. Throttle is passed directly to control allocation.")])]),t._v(" "),i("h3",{attrs:{id:"辅助飞行模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#辅助飞行模式"}},[t._v("#")]),t._v(" 辅助飞行模式")]),t._v(" "),i("p",[t._v('"Assisted" modes are also user controlled but offer some level of "automatic" assistance - for example, automatically holding position/direction, against wind. Assisted modes often make it much easier to gain or restore controlled flight.')]),t._v(" "),i("ul",[i("li",[i("p",[i("strong",[t._v("定高模式：")]),t._v(" （高度控制）")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Fixed-wing aircraft:")]),t._v(" When the roll, pitch and yaw (RPY) RC sticks are all centered (or less than some specified deadband range) the aircraft will return to straight and level flight and keep its current altitude. 飞机的的 X 和 Y 方向的位置会随风漂移。")]),t._v(" "),i("li",[i("strong",[t._v("多旋翼：")]),t._v(" 滚转、俯仰和偏航输入与自稳模式相同。 油门输入会令飞机按照预定的最大速率爬升或下降。 油门的输入有很大的死区。 油门居中表示保持当前高度。 飞控程序仅控制高度，所以飞机的 X、Y 位置会随风漂移。")])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("位置保持模式：")]),t._v(" （位置控制）")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Fixed-wing aircraft:")]),t._v(" Neutral inputs (centered RC sticks) give level flight and it will crab against the wind if needed to maintain a straight line.")]),t._v(" "),i("li",[i("strong",[t._v("多旋翼：")]),t._v(" 滚转控制左右向速度，俯仰控制飞机相对地面的前后向速度。 偏航与手动控制模式一样，控制的是偏航角速率。 油门与定高模式 模式一样控制飞机的爬升/下降速率。 这意味着当滚转、俯仰和油门杆居中时，飞控程序会在任意风的干扰下稳定地保持飞机的X、Y、Z 位置。")])])])]),t._v(" "),i("h3",{attrs:{id:"自动飞行模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#自动飞行模式"}},[t._v("#")]),t._v(" 自动飞行模式")]),t._v(" "),i("p",[t._v('"Auto" modes are those where the controller requires little to no user input (e.g. to takeoff, land and fly missions).')]),t._v(" "),i("ul",[i("li",[i("p",[i("strong",[t._v("自动盘旋模式：")]),t._v(" （留待）")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Fixed-wing aircraft:")]),t._v(" The aircraft loiters around the current position at the current altitude (or possibly slightly above the current altitude, good for 'I'm losing it').")]),t._v(" "),i("li",[i("strong",[t._v("Multirotors:")]),t._v(" The multirotor hovers / loiters at the current position and altitude.")])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("自动返航模式：")]),t._v(" （返航）")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Fixed-wing aircraft:")]),t._v(" The aircraft returns to the home position and loiters in a circle above the home position.")]),t._v(" "),i("li",[i("strong",[t._v("Multirotors:")]),t._v(" The multirotor returns in a straight line on the current altitude (if the current altitude is higher than the home position + "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(") or on the "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" (if the "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" is higher than the current altitude), then lands automatically.")],1)])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("AUTO_MISSION")]),t._v(" (Mission)")]),t._v(" "),i("ul",[i("li",[t._v("**所有类型的系统：**飞机执行由地面控制站 (GCS) 发送的预规划飞行任务。 如果没有收到任务, 飞机将会在当前的的位置上停留/盘旋。")]),t._v(" "),i("li",[i("em",[i("strong",[t._v("离线模式")])]),t._v(" (离线) 此模式下位置、速度和姿态角的 参考值/目标值/设定值 由通过串口或者 MAVLink 连接的配套计算机提供。 离线模式的设定值可以由诸如 "),i("a",{attrs:{href:"https://github.com/mavlink/mavros",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVROS"),i("OutboundLink")],1),t._v(" 或者 "),i("a",{attrs:{href:"http://dronekit.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronekit"),i("OutboundLink")],1),t._v(" 等 API 接口提供。")])])])]),t._v(" "),i("h2",{attrs:{id:"飞行模式评估图"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式评估图"}},[t._v("#")]),t._v(" 飞行模式评估图")]),t._v(" "),i("p",[i("img",{attrs:{src:o(643),alt:"Commander Flow diagram"}})])])}),[],!1,null,null,null);e.default=a.exports},643:function(t,e,o){t.exports=o.p+"assets/img/commander-flow-diagram.13a24a12.png"}}]);