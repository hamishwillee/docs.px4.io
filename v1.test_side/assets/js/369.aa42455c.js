(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{2522:function(t,a,r){"use strict";r.r(a);var e=r(18),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"手动-自稳模式-多旋翼"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动-自稳模式-多旋翼"}},[t._v("#")]),t._v(" 手动/自稳模式（多旋翼）")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_difficulty"}},[e("img",{attrs:{src:r(328),title:"中等飞行难度",width:"30px"}})]),t._v(" "),e("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_manual"}},[e("img",{attrs:{src:r(323),title:"需要手动或遥控控制",width:"30px"}})])],1),t._v(" "),e("p",[e("em",[t._v("手动/自稳")]),t._v(" 模式在当遥控摇杆居中时可稳定多旋翼无人机。 要手动飞无人机，您可以移动摇杆使其偏离居中位置。")]),t._v(" "),e("p",[t._v("如果设置 "),e("em",[t._v("手动")]),t._v(" 或 "),e("em",[t._v("自稳")]),t._v(" 模式，则启用该多旋翼模式。\n:::")]),t._v(" "),e("p",[t._v("在手动控制下，横滚和俯仰摇杆控制无人机围绕各个轴的"),e("em",[t._v("角度")]),t._v("（姿态），横滚摇杆控制水平面上方的旋转速率，油门控制高度 / 速度。")]),t._v(" "),e("p",[t._v("一旦释放摇杆，它们将会返回中心死区。 一旦横滚和俯仰摇杆居中，多旋翼无人机将平稳并停止运动。 然后飞机将悬停在适当的位置/保持高度 - 前提是平衡得当，油门设置适当（参见"),e("a",{attrs:{href:"#params"}},[t._v("下面")]),t._v("），并且没有施加任何外力（例如风）。 飞行器将朝着任何风的方向漂移，您必须控制油门以保持高度。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(372),alt:"多旋翼手动飞行"}})]),t._v(" "),e("h2",{attrs:{id:"技术描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术描述"}},[t._v("#")]),t._v(" 技术描述")]),t._v(" "),e("p",[t._v("飞手的输入通过横滚和俯仰角度以及偏航角速率指令传递给自驾仪。 油门被重新调节（参见"),e("a",{attrs:{href:"#params"}},[t._v("下面的")]),t._v("）并直接传递到输出混控器。 自动驾驶仪控制着姿态，这意味着当遥控器摇杆居中时，自驾仪调整飞机的横滚和俯仰角为零（从而实现飞机姿态的改平）。 自动驾驶仪不能补偿由于风（或其他来源）引起的漂移。")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("ul",[e("li",[t._v("需要手动输入（遥控器，或者通过 MAVLink 连接的游戏手柄/拇指摇杆）。")])])]),t._v(" "),e("p",[e("span",{attrs:{id:"params"}})]),t._v(" "),e("h2",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("span",{attrs:{id:"MPC_THR_HOVER"}}),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")])],1),t._v(" "),e("td",[t._v("当油门杆居中并且"),e("code",[t._v("MPC_THR_CURVE")]),t._v("设置为默认值时输出的悬停油门。")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"MPC_THR_CURVE"}}),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_CURVE"}},[t._v("MPC_THR_CURVE")])],1),t._v(" "),e("td",[t._v("定义油门比例。 默认情况下，此值设置为"),e("strong",[t._v("重新调节至悬停推力")]),t._v("，这意味着当油门杆居中时，输出配置的悬停油门（"),e("code",[t._v("MPC_THR_HOVER")]),t._v("），并且摇杆输入会重新线性调整低于和高于此值（允许在自稳模式和高度/位置控制模式之间平滑过渡）。")])]),t._v(" "),e("tr",[e("td",[t._v("在功率大的飞机上，悬停油门可能非常低（例如低于 20％），因此重新调整会使油门输入变形 - 即此处 80％ 的推力将仅由摇杆输入的上半部分控制，20％ 的推力由底部的来控制。 如果需要，可以将"),e("code",[t._v("MPC_THR_CURVE")]),t._v("设置为"),e("strong",[t._v("No Rescale（无需重新调整）")]),t._v("，不进行重新调整（油门映射的操纵杆输入独立于"),e("code",[t._v("MPC_THR_HOVER")]),t._v("）。")]),t._v(" "),e("td")])])])])}),[],!1,null,null,null);a.default=s.exports},323:function(t,a,r){t.exports=r.p+"assets/img/remote_control.e49232a6.svg"},328:function(t,a){t.exports="data:image/png;base64,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"},372:function(t,a,r){t.exports=r.p+"assets/img/manual_stabilized_MC.857b681e.png"}}]);