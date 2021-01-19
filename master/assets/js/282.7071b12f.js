(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{2438:function(t,e,_){"use strict";_.r(e);var a=_(18),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"定高模式-多旋翼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定高模式-多旋翼"}},[t._v("#")]),t._v(" 定高模式（多旋翼）")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_difficulty"}},[a("img",{attrs:{src:_(324),title:"易于使用",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_manual"}},[a("img",{attrs:{src:_(323),title:"需要手动或遥控控制",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#altitude_only"}},[a("img",{attrs:{src:_(329),title:"所需高度（例如巴罗、测距仪）",width:"30px"}})])],1),t._v(" "),a("ul",[a("li",[t._v("高度模式 "),a("em",[t._v("是一个")]),t._v(" 相对 *容易飞的遥控模式，滚转和俯仰杆控制飞机在左右和前后方向上的运动（相对于飞机的“前部”），偏航杆控制水平面上的旋转速度，油门控制上升 -下降的速度。")])]),t._v(" "),a("p",[t._v("当杆被释放/回中时，飞机将恢复水平并保持当前的"),a("em",[t._v("高度")]),t._v("。 如果在水平面上运动，飞机将继持续运动直到任何动量被风阻力消散。 如果刮风，飞机会向风的方向漂移。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("em",[t._v("高度模式")]),t._v("是对新手来说最安全的无 GPS 手动模式。 就像"),a("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[t._v("手动/自稳")]),t._v("模式，但是在松开摇杆时也可以锁定无人机高度。")],1)]),t._v(" "),a("p",[t._v("下图直观的显示了模式行为（对于一个"),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("模式 2 发送器")]),t._v("）。")],1),t._v(" "),a("p",[a("img",{attrs:{src:_(815),alt:"高度控制 MC - Mode2 RC 控制器"}})]),t._v(" "),a("h2",{attrs:{id:"技术总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术总结"}},[t._v("#")]),t._v(" 技术总结")]),t._v(" "),a("p",[t._v("遥控/手动模式就像 "),a("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[t._v("手动/自稳（多旋翼）")]),t._v("模式，但具有"),a("em",[t._v("高度稳定")]),t._v(" （摇杆中位能够使无人机水平并且保持固定高度）。")],1),t._v(" "),a("ul",[a("li",[t._v("回正摇杆（内带死区）：\n"),a("ul",[a("li",[t._v("RPY摇杆使飞机水平。")]),t._v(" "),a("li",[t._v("油门（~50%）抗风保持当前姿态。")])])]),t._v(" "),a("li",[t._v("外部中心：\n"),a("ul",[a("li",[t._v("翻滚/俯仰摇杆控制各自方向的倾斜角，导致左右和前后的移动。")]),t._v(" "),a("li",[t._v("油门摇杆以预定的最大速率（和其他轴上的移动速度）控制上升速度。")]),t._v(" "),a("li",[t._v("偏航摇杆控制水平面上方的角度旋转速率。")])])]),t._v(" "),a("li",[t._v("起飞：\n"),a("ul",[a("li",[t._v("降落时，如果将油门杆抬高至 62.5%（从油门杆最低开始的整个范围），无人机将起飞。")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("ul",[a("li",[t._v("需要手动输入（遥控器，或者通过 MAVLink 连接的游戏手柄/拇指摇杆）。")]),t._v(" "),a("li",[t._v("通常使用气压计测量高度，在极端天气条件下可能会变的不准确。 带有激光雷达/距离传感器的飞机将能够以更高的可靠性和准确性控制高度。")])])]),t._v(" "),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("p",[t._v("该模式受以下参数影响：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),a("td",[t._v("最大垂直上升速度。 默认：3m/s。")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),a("td",[t._v("最大垂直下降速度。 默认：1m/s。")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"RCX_DZ"}}),a("code",[t._v("RCX_DZ")])]),t._v(" "),a("td",[t._v("通道 X 的遥控死区。油门的 X 值取决于 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v(" RC_MAP_THROTTLE ")]),t._v(" 的值。 例如，如果油门是通道4，则"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v(" RC4_DZ ")]),t._v("指定死区。")],1)]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_xxx"}}),a("code",[t._v("MPC_XXXX")])]),t._v(" "),a("td",[t._v("大多数 MPC_xxx参数会影响此模式下的飞行行为（至少在某种程度上）。 例如，"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v("定义飞机悬停时的推力。")],1)])])])])}),[],!1,null,null,null);e.default=v.exports},323:function(t,e,_){t.exports=_.p+"assets/img/remote_control.e49232a6.svg"},324:function(t,e){t.exports="data:image/png;base64,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"},329:function(t,e,_){t.exports=_.p+"assets/img/altitude_icon.ca9310b8.svg"},815:function(t,e,_){t.exports=_.p+"assets/img/altitude_control_mode_copter.8e02e8ec.png"}}]);