(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{2443:function(t,e,_){"use strict";_.r(e);var r=_(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"位置模式-多旋翼"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#位置模式-多旋翼"}},[t._v("#")]),t._v(" 位置模式（多旋翼）")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_difficulty"}},[r("img",{attrs:{src:_(324),title:"易于飞行",width:"30px"}})]),t._v(" "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_manual"}},[r("img",{attrs:{src:_(323),title:"需要手动或遥控控制",width:"30px"}})]),t._v(" "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[r("img",{attrs:{src:_(322),title:"需要定位修复（例如GPS）",width:"30px"}})])],1),t._v(" "),r("p",[r("em",[t._v("位置模式")]),t._v("是一种易于驾驶的遥控模式，其中滚动和俯仰操纵杆在左右和前后方向（相对于飞机的“前部”）控制地面速度，并且油门控制上升-下降的速度。 当杆被释放/居中时，飞机将主动制动、改平并锁定到3D空间中的位置——补偿风和其他力。")]),t._v(" "),r("blockquote",[r("p",[t._v("位置模式是对于新手而言最安全的手动模式。 与"),r("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[t._v("高度")]),t._v("和"),r("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[t._v("手动/稳定")]),t._v("模式不同，当摇杆居中时飞机将停止运动，而不是持续运动直至被风阻减慢为止。")],1)]),t._v(" "),r("p",[t._v("下图显示了模式行为（对于模式2发射器）。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(424),alt:"多旋翼位置模式"}})]),t._v(" "),r("blockquote",[r("p",[t._v("在此模式下降落时必须小心。 首次在此模式下着陆时, 准备切换到 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[t._v("手动/稳定模式")]),t._v(", 以便能够锁定飞机。 如果正确地检测到着陆, 电机会在触地后停止旋转, 然后在不久后锁定。 如果电机继续在较高的转速旋转或开始加速旋转, 首先切换到"),r("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[t._v("手动/稳定(多旋翼)")]),t._v(", 然后锁定。 请注意，由于GPS漂移，飞机可能会翻倒在地面上。")],1)]),t._v(" "),r("h2",{attrs:{id:"技术总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技术总结"}},[t._v("#")]),t._v(" 技术总结")]),t._v(" "),r("p",[t._v("遥控/手动模式，其中RPT摇杆 在相应的方向控制 "),r("em",[t._v("速度")]),t._v("。 中心摇杆水平飞机, 并保持它的固定位置和高度逆风。")]),t._v(" "),r("ul",[r("li",[t._v("回正的RPT摇杆（在死区内）可以抗风并保持飞机X、Y、Z位置稳定以及姿态水平。")]),t._v(" "),r("li",[t._v("中心以外：\n"),r("ul",[r("li",[t._v("滚转/俯仰摇杆控制相对于飞机”前部“的左右前后方向的速度。")]),t._v(" "),r("li",[t._v("油门摇杆控制上升-下降的速度。")]),t._v(" "),r("li",[t._v("偏航摇杆控制水平面上方的角度旋转速率。")])])]),t._v(" "),r("li",[t._v("起飞 Takeoff:\n"),r("ul",[r("li",[t._v("When landed, the vehicle will take off if the throttle stick is raised above 62.5% percent (of the full range from bottom).")])])]),t._v(" "),r("li",[t._v("着陆:\n"),r("ul",[r("li",[t._v("When close to the ground ("),r("a",{attrs:{href:"#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")]),t._v("), horizontal velocity is limited ("),r("a",{attrs:{href:"#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")]),t._v(").")])])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("注")]),t._v(" *可能需要手动输入（遥控器，或通过MAVLink连接的游戏手柄/拇指杆）。 注 该模式需要GPS。")])]),t._v(" "),r("h3",{attrs:{id:"参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#multicopter-position-control"}},[t._v(" Multicopter Position Control ")]),t._v("组中的所有参数都是相关的。 下面列出了一些特别注意的参数。")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"MPC_HOLD_DZ"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[t._v("MPC_HOLD_DZ")])],1),t._v(" "),r("td",[t._v("启用位置保持的摇杆的死区。 默认值：0.1（摇杆行程的10％）。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),r("td",[t._v("最大垂直上升速度。 默认：3m/s。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),r("td",[t._v("最大垂直下降速度。 默认：1m/s。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"MPC_LAND_VEL_XY"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")])],1),t._v(" "),r("td",[t._v("Horizontal velocity limit when close to ground ("),r("a",{attrs:{href:"#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")]),t._v(" meters above ground, or above home if distance-to-ground is unknown). 默认：10m/s")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"MPC_LAND_ALT1"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_ALT1"}},[t._v("MPC_LAND_ALT1")])],1),t._v(" "),r("td",[t._v("Altitude for triggering first phase of slow landing. Affects maximum allowed horizontal velocity setpoint. Default 5m.")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"MPC_LAND_ALT2"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")])],1),t._v(" "),r("td",[t._v("Altitude for second phase of slow landing. In this phase maximum horizontal velocity is limited to "),r("a",{attrs:{href:"#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")]),t._v(". Default 5m.")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"RCX_DZ"}}),r("code",[t._v("RCX_DZ")])]),t._v(" "),r("td",[t._v("通道X的遥控死区。油门的X值取决于"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v(" RC_MAP_THROTTLE ")]),t._v("的值。 例如，如果油门是通道4，则"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v("RC4_DZ ")]),t._v("指定死区。")],1)]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"MPC_xxx"}}),r("code",[t._v("MPC_XXXX")])]),t._v(" "),r("td",[t._v("大多数MPC_xxx参数会影响此模式下的飞行行为（至少在某种程度上）。 例如，"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v("定义飞机悬停时的推力。")],1)])])])])}),[],!1,null,null,null);e.default=a.exports},322:function(t,e,_){t.exports=_.p+"assets/img/position_fixed.c1403cf0.svg"},323:function(t,e,_){t.exports=_.p+"assets/img/remote_control.e49232a6.svg"},324:function(t,e){t.exports="data:image/png;base64,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"},424:function(t,e,_){t.exports=_.p+"assets/img/position_MC.040ed1a1.png"}}]);