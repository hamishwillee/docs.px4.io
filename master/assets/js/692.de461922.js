(window.webpackJsonp=window.webpackJsonp||[]).push([[692],{2542:function(t,_,e){"use strict";e.r(_);var v=e(19),a=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"着陆模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#着陆模式"}},[t._v("#")]),t._v(" 着陆模式")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[v("img",{attrs:{src:e(326),title:"需要定位估计（例如GPS）",width:"30px"}})])],1),t._v(" "),v("p",[v("em",[t._v("着陆")]),t._v("飞行模式使飞机降落在指定点。 降落后，无人机将会在一小段时间后上锁（默认情况下）。")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("ul",[v("li",[t._v("该模式需要有效的位置估计，除非由于失效保护进入该模式，这种情况下仅需要高度估计（通常飞控内置一个气压计）。")]),t._v(" "),v("li",[t._v("此模式是自动的 - 不"),v("em",[t._v("需要")]),t._v("用户干预即可控制无人机。")]),t._v(" "),v("li",[t._v("遥控器开关可以用于更改任何无人机的飞行模式。")]),t._v(" "),v("li",[t._v("在多旋翼中移动遥控器摇杆（或 VTOL 在多旋翼模式下）"),v("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("默认情况下")]),t._v("会将无人机切换到"),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v("，除非是处理电池失效保护。")],1)])]),t._v(" "),v("p",[t._v("下面描述每种类型飞机的具体行为。")]),t._v(" "),v("h2",{attrs:{id:"多旋翼-mc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼-mc"}},[t._v("#")]),t._v(" 多旋翼（MC）")]),t._v(" "),v("p",[t._v("无人机将降落在模式所指定的位置。 无人机以 "),v("a",{attrs:{href:"#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")]),t._v(" 指定的速度下降，降落后会上锁（"),v("a",{attrs:{href:"#COM_DISARM_LAND"}},[t._v("默认")]),t._v("）。")]),t._v(" "),v("p",[t._v("遥控器摇杆移动会把无人机切换到 "),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" （"),v("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("默认")]),t._v("）。")],1),t._v(" "),v("p",[t._v("着陆受以下参数影响：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("span",{attrs:{id:"MPC_LAND_SPEED"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[t._v("MPC LAND_SPEED")])],1),t._v(" "),v("td",[t._v("着陆过程中的下降速率。 鉴于地面情况未知，这个值应该设得相当小。")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_DISARM_LAND"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),v("td",[t._v("降落后自动上锁的超时时间，以秒为单位。 如果设定为 -1，无人机将不会在着陆时上锁。")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_RC_OVERRIDE"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),v("td",[t._v("控制多旋翼（或者多旋翼模式下的 VOTL）的摇杆移动是否将控制权交给位置模式下的飞手。 可以分别为自动模式和 offboard 模式启用此功能，默认情况下在自动模式下启用此功能。")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_RC_STICK_OV"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),v("td",[t._v("导致发射机切换到 "),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" 的摇杆移动量（如果 "),v("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" 已启用）。")],1)])])]),t._v(" "),v("h2",{attrs:{id:"固定翼-fw"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#固定翼-fw"}},[t._v("#")]),t._v(" 固定翼（FW）")]),t._v(" "),v("p",[t._v("无人机将转弯并降落在该模式指定的位置。 遥控器摇杆操作被忽略。")]),t._v(" "),v("p",[t._v("固定机翼着陆逻辑和参数在主题："),v("RouterLink",{attrs:{to:"/zh/flying/fixed_wing_landing.html"}},[t._v("着陆（固定翼）")]),t._v("中说明。")],1),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("通常固定翼无人机会遵循固定的着陆轨迹到地面（它不会尝试拉平着陆）。 这是因为在着陆模式下，飞机可能不知道地面高度并且将假设它处于海平面。 由于地面高度可能会高得多，因此飞机通常会在高于拉平辑逻辑的高度处到达地面。")])]),t._v(" "),v("p",[t._v("着陆受以下参数影响（也见"),v("RouterLink",{attrs:{to:"/zh/flying/fixed_wing_landing.html"}},[t._v("着陆（固定翼）")]),t._v("）：")],1),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),v("td",[t._v("降落后自动上锁的超时时间，以秒为单位。 如果设定为 -1，无人机将不会在着陆时上锁。")])])])]),t._v(" "),v("h2",{attrs:{id:"垂直起降-vtol"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垂直起降-vtol"}},[t._v("#")]),t._v(" 垂直起降（VTOL）")]),t._v(" "),v("p",[t._v("当处于固定翼模式时，VTOL 遵循 LAND 行为和"),v("a",{attrs:{href:"#fixed-wing-fw"}},[t._v("固定翼")]),t._v("的参数，而当处于多旋翼模式时，VTOL 遵循"),v("a",{attrs:{href:"#multi-copter-mc"}},[t._v("多旋翼")]),t._v("的参数。 当设置 "),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_FORCE_VT"}},[t._v("NAV_FORCE_VT")]),t._v("（默认：开）时，固定翼模式下的 VTOL 将在着陆前切换回多旋翼模式。")],1)])}),[],!1,null,null,null);_.default=a.exports},326:function(t,_,e){t.exports=e.p+"assets/img/position_fixed.c1403cf0.svg"}}]);