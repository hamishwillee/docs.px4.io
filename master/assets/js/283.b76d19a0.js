(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{2443:function(t,e,r){"use strict";r.r(e);var s=r(18),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"环绕模式-多旋翼"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环绕模式-多旋翼"}},[t._v("#")]),t._v(" 环绕模式 （多旋翼）")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_difficulty"}},[s("img",{attrs:{src:r(324),title:"易于飞行",width:"30px"}})]),t._v(" "),s("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[s("img",{attrs:{src:r(322),title:"需要定位修复（例如 GPS）",width:"30px"}})])],1),t._v(" "),s("p",[s("em",[t._v("轨道")]),t._v(" 引导飞行模式允许控制多旋翼无人机（或者 多旋翼模式下的 VTOL）绕圈飞行，"),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_YAW_BEHAVIOUR",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认"),s("OutboundLink")],1),t._v(" 偏航，使其时钟朝向中心。<0>")]),t._v(" "),s("p",[s("img",{attrs:{src:r(816),alt:"轨道模式 - 多旋翼"}})]),t._v(" "),s("p",[s("em",[t._v("需要")]),t._v(" "),s("em",[t._v("QGroundControl")]),t._v(" （或其他兼容的 GCS 或 MAVLink API）来使能该模式，并且设置轨迹中心位置，初始半径和高度。 一旦启用后，无人机将尽快飞到控制的圆周轨迹上的最近点，并在规划的圆周上朝中心方向缓慢（1 m/s）顺时针旋转。")]),t._v(" "),s("p",[t._v("关于如何启动轨道模式的说明在这里："),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/FlyView/FlyView.html#orbit",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlyView > Orbit Location"),s("OutboundLink")],1),t._v(" （"),s("em",[t._v("QGroundControl")]),t._v(" 指南）。")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("使用遥控是"),s("em",[t._v("可选的")]),t._v("。 如果没有遥控，则环绕模式如上所述。 无法使用遥控来启动该模式（如果使用遥控切换该模式，无人机会处于空闲状态）。")])]),t._v(" "),s("p",[t._v("遥控可以用于改变绕圈的高度，半径，速度和绕圈方向：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("左摇杆：")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("上/下：")]),t._v(" 控制上升/下降速度，像在"),s("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("定点模式")]),t._v("中一样。 当在中部死区时，高度被锁定。")],1),t._v(" "),s("li",[s("em",[t._v("左/右：")]),t._v(" 无效。")])])]),t._v(" "),s("li",[s("strong",[t._v("右摇杆：")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("左/右：")]),t._v(" 控制顺时针/逆时针方向的加速度。 当居中时，当前速度被锁定。\n"),s("ul",[s("li",[t._v("最大速度为 10 m/s，进一步的限制是将向心加速度保持在 2 m/s^2 以下。")])])]),t._v(" "),s("li",[s("em",[t._v("上/下：")]),t._v(" 控制绕圈半径（更小/更大）。 当居中时，当前半径被锁定。\n"),s("ul",[s("li",[t._v("最小半径是 1 米。 最大半径是 100 米。")])])])])])]),t._v(" "),s("p",[t._v("下图直观的显示了模式行为（对于一个"),s("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("模式 2 发送器")]),t._v("）。")],1),t._v(" "),s("p",[s("img",{attrs:{src:r(422),alt:"轨道模式 - 多旋翼"}})]),t._v(" "),s("p",[t._v("切换到其他飞行模式（使用遥控或 QGC 地面站）可以停止此模式。")]),t._v(" "),s("h2",{attrs:{id:"参数-限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-限制"}},[t._v("#")]),t._v(" 参数/限制")]),t._v(" "),s("p",[t._v("没有特定的环绕模式参数。")]),t._v(" "),s("p",[t._v("下面的限制是写死的：")]),t._v(" "),s("ul",[s("li",[t._v("初始/默认是顺时针方向 1 m/s 旋转。")]),t._v(" "),s("li",[t._v("最大加速度限制在 2 2 m/s^2，优先保持控制的圆周轨迹而不是地速（即， 如果加速度超过 2 m/s^2，无人机将减速以达到正确的圆周）。")]),t._v(" "),s("li",[t._v("最大半径是 100 米。")])]),t._v(" "),s("h2",{attrs:{id:"mavlink-消息-开发者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-消息-开发者"}},[t._v("#")]),t._v(" MAVLink 消息 （开发者）")]),t._v(" "),s("p",[t._v("环绕模式使用以下 MAVLink 命令：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_ORBIT",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_ORBIT"),s("OutboundLink")],1),t._v(" - 启动一个指定中心点，半径，方向，高度，速度和"),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_YAW_BEHAVIOUR",target:"_blank",rel:"noopener noreferrer"}},[t._v("偏航方向"),s("OutboundLink")],1),t._v("的轨道（无人机默认朝向轨道中心）。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_EXECUTION_STATUS",target:"_blank",rel:"noopener noreferrer"}},[t._v("ORBIT_EXECUTION_STATUS"),s("OutboundLink")],1),t._v(" - 在轨道模式发出的轨道状态，以更新当前轨道参数的 GCS（可以由遥控改这些参数）。")])])])}),[],!1,null,null,null);e.default=n.exports},322:function(t,e,r){t.exports=r.p+"assets/img/position_fixed.c1403cf0.svg"},324:function(t,e){t.exports="data:image/png;base64,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"},422:function(t,e,r){t.exports=r.p+"assets/img/orbit_MC.c125ea7b.png"},816:function(t,e,r){t.exports=r.p+"assets/img/orbit.6cc5c514.jpg"}}]);