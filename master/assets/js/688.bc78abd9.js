(window.webpackJsonp=window.webpackJsonp||[]).push([[688],{2522:function(t,_,v){"use strict";v.r(_);var e=v(18),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"保持模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保持模式"}},[t._v("#")]),t._v(" 保持模式")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[e("img",{attrs:{src:v(322),title:"需要定位（例如 GPS）",width:"30px"}})])],1),t._v(" "),e("p",[e("em",[t._v("保持")]),t._v("飞行模式（也就是“留待”模式）使飞机停止运动并保持其当前的 GPS 位置和高度（多旋翼将悬停在 GPS 位置，而固定翼将围绕它旋转）。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[e("em",[t._v("保持模式")]),t._v(" 可以用于暂停任务或帮助您在紧急情况下重新获得对飞机的控制权。 它通常通过预编程开关激活。")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("ul",[e("li",[t._v("该模式需要 GPS。")]),t._v(" "),e("li",[t._v("该模式是自动的 - 不 "),e("em",[t._v("需要")]),t._v(" 用户干预即可控制无人机。")]),t._v(" "),e("li",[t._v("遥控开关可以在任何无人机上更改飞行模式。")]),t._v(" "),e("li",[t._v("在多旋翼中移动遥控器摇杆（或 VTOL 在多旋翼模式下）"),e("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("默认情况下")]),t._v("会将无人机切换到"),e("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v("，除非是处理电池失效保护。")],1)])]),t._v(" "),e("p",[t._v("下面描述每种类型飞机的具体行为。")]),t._v(" "),e("h2",{attrs:{id:"多旋翼-mc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼-mc"}},[t._v("#")]),t._v(" 多旋翼（MC）")]),t._v(" "),e("p",[t._v("多旋翼无人机悬停在当前位置和高度。")]),t._v(" "),e("p",[t._v("遥控器摇杆移动会将无人机切换到 "),e("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" （"),e("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("默认")]),t._v("）。")],1),t._v(" "),e("p",[t._v("可以使用以下参数配置此动作。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("span",{attrs:{id:"MIS_LTRMIN_ALT"}}),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_LTRMIN_ALT"}},[t._v("MIS_LTRMIN_ALT")])],1),t._v(" "),e("td",[t._v("留待模式的最小高度（如果模式在较低的高度进行，则飞行器将上升到此高度）。")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"COM_RC_OVERRIDE"}}),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),e("td",[t._v("控制多旋翼（或者多旋翼模式下的 VOTL）的摇杆移动量来切换到 "),e("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v("。 可以分别为自动模式和 offboard 模式启用此功能，默认情况下在自动模式下启用此功能。")],1)]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"COM_RC_STICK_OV"}}),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),e("td",[t._v("导致发射机切换到 "),e("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" 的摇杆移动量（如果 "),e("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" 已启用）。")],1)])])]),t._v(" "),e("h2",{attrs:{id:"固定翼-fw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#固定翼-fw"}},[t._v("#")]),t._v(" 固定翼（FW）")]),t._v(" "),e("p",[t._v("飞机在当前高度并在 GPS 保持的位置绕圈飞行。 如果在低于这个高度使用该模式，无人机会首先上升到 "),e("code",[t._v("MIS_LTRMIN_ALT")]),t._v("。")]),t._v(" "),e("p",[t._v("遥控器摇杆操作被忽略。")]),t._v(" "),e("p",[t._v("可以使用以下参数配置此动作。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[t._v("NAV_LOITER_RAD")])],1),t._v(" "),e("td",[t._v("留待圈的半径。")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_LTRMIN_ALT"}},[t._v("MIS_LTRMIN_ALT")])],1),t._v(" "),e("td",[t._v("留待模式的最小高度（如果模式在较低的高度进行，则飞机将上升到此高度）。")])])])]),t._v(" "),e("h2",{attrs:{id:"垂直起降-vtol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垂直起降-vtol"}},[t._v("#")]),t._v(" 垂直起降（VTOL）")]),t._v(" "),e("p",[t._v("当处于固定翼模式时，VTOL 遵循 HOLD 行为和 "),e("a",{attrs:{href:"#fixed-wing-fw"}},[t._v("固定翼")]),t._v("的参数，而当处于多旋翼模式时，VTOL 遵循"),e("a",{attrs:{href:"#multi-copter-mc"}},[t._v("多旋翼")]),t._v("的参数。")])])}),[],!1,null,null,null);_.default=a.exports},322:function(t,_,v){t.exports=v.p+"assets/img/position_fixed.c1403cf0.svg"}}]);