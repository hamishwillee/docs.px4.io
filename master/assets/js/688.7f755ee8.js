(window.webpackJsonp=window.webpackJsonp||[]).push([[688],{2520:function(t,_,e){"use strict";e.r(_);var v=e(18),a=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"保持模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保持模式"}},[t._v("#")]),t._v(" 保持模式")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[v("img",{attrs:{src:e(322),title:"需要定位（例如 GPS）",width:"30px"}})])],1),t._v(" "),v("p",[v("em",[t._v("保持")]),t._v("飞行模式（也就是“留待”模式）使飞机停止运动并保持其当前的 GPS 位置和高度（多旋翼将悬停在 GPS 位置，而固定翼将围绕它旋转）。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[v("em",[t._v("保持模式")]),t._v(" 可以用于暂停任务或帮助您在紧急情况下重新获得对飞机的控制权。 它通常通过预编程开关激活。")])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("ul",[v("li",[t._v("该模式需要 GPS。")]),t._v(" "),v("li",[t._v("该模式是自动的 - 不 "),v("em",[t._v("需要")]),t._v(" 用户干预即可控制无人机。")]),t._v(" "),v("li",[t._v("遥控开关可以在任何无人机上更改飞行模式。")]),t._v(" "),v("li",[t._v("在多旋翼中移动遥控器摇杆（或 VTOL 在多旋翼模式下）"),v("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("默认情况下")]),t._v("会将无人机切换到"),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v("，除非是处理电池失效保护。")],1)])]),t._v(" "),v("p",[t._v("下面描述每种类型飞机的具体行为。")]),t._v(" "),v("h2",{attrs:{id:"多旋翼-mc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼-mc"}},[t._v("#")]),t._v(" 多旋翼（MC）")]),t._v(" "),v("p",[t._v("多旋翼无人机悬停在当前位置和高度。")]),t._v(" "),v("p",[t._v("RC stick movement will change the vehicle to "),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (by "),v("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("default")]),t._v(").")],1),t._v(" "),v("p",[t._v("可以使用以下参数配置此动作。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("span",{attrs:{id:"MIS_LTRMIN_ALT"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_LTRMIN_ALT"}},[t._v("MIS_LTRMIN_ALT")])],1),t._v(" "),v("td",[t._v("留待模式的最小高度（如果模式在较低的高度进行，则飞行器将上升到此高度）。")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_RC_OVERRIDE"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),v("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(". 可以分别为自动模式和 offboard 模式启用此功能，默认情况下在自动模式下启用此功能。")],1)]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_RC_STICK_OV"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),v("td",[t._v("The amount of stick movement that causes a transition to "),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (if "),v("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)])])]),t._v(" "),v("h2",{attrs:{id:"固定翼飞行器-fw"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#固定翼飞行器-fw"}},[t._v("#")]),t._v(" 固定翼飞行器（FW）")]),t._v(" "),v("p",[t._v("飞机在当前高度并在 GPS 保持的位置绕圈飞行。 如果在低于这个高度使用该模式，无人机会首先上升到 "),v("code",[t._v("MIS_LTRMIN_ALT")]),t._v("。")]),t._v(" "),v("p",[t._v("遥控器摇杆操作被忽略。")]),t._v(" "),v("p",[t._v("可以使用以下参数配置此动作。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[t._v("NAV_LOITER_RAD")])],1),t._v(" "),v("td",[t._v("留待圈的半径。")])]),t._v(" "),v("tr",[v("td",[v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_LTRMIN_ALT"}},[t._v("MIS_LTRMIN_ALT")])],1),t._v(" "),v("td",[t._v("留待模式的最小高度（如果模式在较低的高度进行，则飞机将上升到此高度）。")])])])]),t._v(" "),v("h2",{attrs:{id:"垂直起降-vtol"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垂直起降-vtol"}},[t._v("#")]),t._v(" 垂直起降（VTOL）")]),t._v(" "),v("p",[t._v("当处于固定翼模式时，VTOL 遵循 HOLD 行为和 "),v("a",{attrs:{href:"#fixed-wing-fw"}},[t._v("固定翼")]),t._v("的参数，而当处于多旋翼模式时，VTOL 遵循"),v("a",{attrs:{href:"#multi-copter-mc"}},[t._v("多旋翼")]),t._v("的参数。")])])}),[],!1,null,null,null);_.default=a.exports},322:function(t,_,e){t.exports=e.p+"assets/img/position_fixed.c1403cf0.svg"}}]);