(window.webpackJsonp=window.webpackJsonp||[]).push([[875],{328:function(t,e,_){t.exports=_.p+"assets/img/position_fixed.38e4a675.svg"},3436:function(t,e,_){"use strict";_.r(e);var i=_(19),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"保持模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#保持模式"}},[t._v("#")]),t._v(" 保持模式")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[i("img",{attrs:{src:_(328),title:"需要定位（例如 GPS）",width:"30px"}})])],1),t._v(" "),i("p",[t._v("The "),i("em",[t._v("Hold")]),t._v(' flight mode (a.k.a. "Loiter") causes the vehicle to stop and maintain its current GPS position and altitude (MC vehicles will hover at the GPS position, while FW vehicles will circle around it).')]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[i("em",[t._v("Hold mode")]),t._v(" can be used to pause a mission or to help you regain control of a vehicle in an emergency. 它通常通过预编程开关激活。 :::")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("ul",[i("li",[t._v("该模式需要 GPS。")]),t._v(" "),i("li",[t._v("This mode is automatic - no user intervention is "),i("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),i("li",[t._v("遥控开关可以在任何无人机上更改飞行模式。")]),t._v(" "),i("li",[t._v("在多旋翼中移动遥控器摇杆（或 VTOL 在多旋翼模式下）"),i("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("默认情况下")]),t._v("会将无人机切换到"),i("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v("，除非是处理电池失效保护。 :::")],1)]),t._v(" "),i("p",[t._v("下面描述每种类型飞机的具体行为。")]),t._v(" "),i("h2",{attrs:{id:"多旋翼-mc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼-mc"}},[t._v("#")]),t._v(" 多旋翼（MC）")]),t._v(" "),i("p",[t._v("多旋翼无人机悬停在当前位置和高度。")]),t._v(" "),i("p",[t._v("遥控器摇杆移动会将无人机切换到 "),i("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" （"),i("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("默认")]),t._v("）。")],1),t._v(" "),i("p",[t._v("可以使用以下参数配置此动作。")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("参数")]),t._v(" "),i("th",[t._v("描述")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("a",{attrs:{id:"NAV_MIN_LTR_ALT"}}),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_MIN_LTR_ALT"}},[t._v("NAV_MIN_LTR_ALT")])],1),t._v(" "),i("td",[t._v("This is the minimum altitude above Home the system will always obey in Loiter (Hold) mode if switched into this mode without specifying an altitude (e.g. through Loiter switch on RC).")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"COM_RC_OVERRIDE"}}),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),i("td",[t._v("控制多旋翼（或者多旋翼模式下的 VOTL）的摇杆移动量来切换到 "),i("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v("。 可以分别为自动模式和 offboard 模式启用此功能，默认情况下在自动模式下启用此功能。")],1)]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"COM_RC_STICK_OV"}}),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),i("td",[t._v("导致发射机切换到 "),i("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" 的摇杆移动量（如果 "),i("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" 已启用）。")],1)])])]),t._v(" "),i("h2",{attrs:{id:"fixed-wing-fw"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[t._v("#")]),t._v(" Fixed-wing (FW)")]),t._v(" "),i("p",[t._v("飞机在当前高度并在 GPS 保持的位置绕圈飞行。 The vehicle will first ascend to "),i("code",[t._v("NAV_MIN_LTR_ALT")]),t._v(" if the mode is engaged below this altitude (by default disabled).")]),t._v(" "),i("p",[t._v("遥控器摇杆操作被忽略。")]),t._v(" "),i("p",[t._v("可以使用以下参数配置此动作。")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("参数")]),t._v(" "),i("th",[t._v("描述")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[t._v("NAV_LOITER_RAD")])],1),t._v(" "),i("td",[t._v("留待圈的半径。")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_MIN_LTR_ALT"}},[t._v("NAV_MIN_LTR_ALT")])],1),t._v(" "),i("td",[t._v("留待模式的最小高度（如果模式在较低的高度进行，则飞行器将上升到此高度）。")])])])]),t._v(" "),i("h2",{attrs:{id:"垂直起降-vtol"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#垂直起降-vtol"}},[t._v("#")]),t._v(" 垂直起降（VTOL）")]),t._v(" "),i("p",[t._v("A VTOL follows the HOLD behavior and parameters of "),i("a",{attrs:{href:"#fixed-wing-fw"}},[t._v("Fixed-wing")]),t._v(" when in FW mode, and of "),i("a",{attrs:{href:"#multi-copter-mc"}},[t._v("Multicopter")]),t._v(" when in MC mode.")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);