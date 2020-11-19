(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{2434:function(t,r,a){"use strict";a.r(r);var e=a(18),A=Object(e.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"手动-稳定模式-多旋翼"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动-稳定模式-多旋翼"}},[t._v("#")]),t._v(" 手动/稳定模式（多旋翼）")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_difficulty"}},[e("img",{attrs:{src:a(330),title:"中等飞行难度",width:"30px"}})]),t._v(" "),e("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_manual"}},[e("img",{attrs:{src:a(323),title:"需要手动或遥控控制",width:"30px"}})])],1),t._v(" "),e("p",[e("em",[t._v("手动/稳定")]),t._v("模式在当遥控杆居中时可稳定多旋翼飞行器。 要手动移动/飞行飞机，您可以移动杆使其偏离居中位置。")]),t._v(" "),e("blockquote",[e("p",[t._v("如果设置"),e("em",[t._v("手动")]),t._v("或"),e("em",[t._v("稳定")]),t._v("模式，则启用此多旋翼模式。")])]),t._v(" "),e("p",[t._v("在手动控制下，滚转和俯仰杆控制绕各个轴的飞机的"),e("em",[t._v("角度")]),t._v("（姿态），偏航杆控制水平面上方的旋转速度，油门控制高度/速度。")]),t._v(" "),e("p",[t._v("一旦释放操纵杆，它们就会返回中心死区。 一旦滚转和俯仰杆居中，多旋翼飞行器将平稳并停止运动。 然后飞机将悬停在适当的位置/保持高度——前提是它正确地配平，油门处于适当位置（参见"),e("a",{attrs:{href:"#params"}},[t._v("下面")]),t._v("），并且不施加外力（例如风）。 飞行器将朝着任何风的方向漂移，你必须控制油门以保持高度。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(421),alt:"多旋翼手动飞行"}})]),t._v(" "),e("h2",{attrs:{id:"技术描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术描述"}},[t._v("#")]),t._v(" 技术描述")]),t._v(" "),e("p",[t._v("飞行员的输入将作为滚转、俯仰角度指令和一个偏航角速度指令传递给自动驾驶仪， 油门被重新调节（参见"),e("a",{attrs:{href:"#params"}},[t._v("下面的")]),t._v("）并直接传递到输出混频器。 自动驾驶仪控制着飞机的姿态角，这意味着当 RC 摇杆居中时自驾仪调整飞机的滚转和俯仰角为零（从而实现飞机姿态的改平）。 自动驾驶仪不能补偿由于风（或其他来源）引起的漂移。")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注")]),t._v(" *可能需要手动输入（遥控器，或通过MAVLink连接的游戏手柄/拇指杆）。")])]),t._v(" "),e("p",[e("span",{attrs:{id:"params"}})]),t._v(" "),e("h2",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("span",{attrs:{id:"MPC_THR_HOVER"}}),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")])],1),t._v(" "),e("td",[t._v("当油门杆居中并且"),e("code",[t._v("MPC_THR_CURVE")]),t._v("设置为默认值时输出的悬停油门。")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"MPC_THR_CURVE"}}),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_CURVE"}},[t._v("MPC_THR_CURVE")])],1),t._v(" "),e("td",[t._v("定义油门比例。 默认设置为"),e("strong",[t._v("重新调节至悬停推力")]),t._v("这意味着当油门杆居中时，输出配置的悬停油门（"),e("code",[t._v("MPC_THR_HOVER")]),t._v("）并且杆输入在其下方和上方线性重新调整（允许在稳定模式和高度/位置控制模式之间平滑过渡）。")])]),t._v(" "),e("tr",[e("td",[t._v("在功率大的飞机上，悬停油门可能非常低（例如低于20％），因此重新调整会使油门输入变形—— 即这里80％的推力将仅由杆输入的上半部分控制，20％由底部的来控制。 如果需要，可以将"),e("code",[t._v("MPC_THR_CURVE")]),t._v("设置为"),e("strong",[t._v("无重新调整")]),t._v("，不进行重新调整（干输入对油门的映射的棒独立于"),e("code",[t._v("MPC_THR_HOVER")]),t._v("）。")]),t._v(" "),e("td")])])])])}),[],!1,null,null,null);r.default=A.exports},323:function(t,r,a){t.exports=a.p+"assets/img/remote_control.e49232a6.svg"},330:function(t,r){t.exports="data:image/png;base64,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"},421:function(t,r,a){t.exports=a.p+"assets/img/manual_stabilized_MC.857b681e.png"}}]);