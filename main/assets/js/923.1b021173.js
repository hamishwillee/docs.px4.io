(window.webpackJsonp=window.webpackJsonp||[]).push([[923],{327:function(t,e,_){t.exports=_.p+"assets/img/position_fixed.38e4a675.svg"},3681:function(t,e,_){"use strict";_.r(e);var a=_(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"保持模式-多旋翼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保持模式-多旋翼"}},[t._v("#")]),t._v(" 保持模式 (多旋翼)")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:_(327),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),t._v(" "),a("p",[t._v("_保持_飞行模式使飞行器停止并悬停在当前的 GPS 位置和高度。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("em",[t._v("保持模式")]),t._v(" 可以用于暂停任务或帮助您在紧急情况下恢复对车辆的控制。 它通常通过预编程开关激活。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("ul",[a("li",[t._v("该模式是自动的 - 不 "),a("em",[t._v("需要")]),t._v(" 用户干预即可控制无人机。")]),t._v(" "),a("li",[t._v("模式需要全球 3D 位置估计（通过 GPS 或从"),a("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html#enabling-auto-modes-with-a-local-position"}},[t._v("本地位置")]),t._v("推断）。\n"),a("ul",[a("li",[t._v("没有有效的本地位置，飞行器不能切换到此模式。")]),t._v(" "),a("li",[t._v("飞行器如果失去位置估计，就会失效。")]),t._v(" "),a("li",[t._v("已解除武装的车辆可以在没有有效位置估计的情况下切换到模式，但不能使用武装。")])])],1),t._v(" "),a("li",[t._v("模式需要风力和飞行时间在允许的限制范围内(通过参数指定)。")]),t._v(" "),a("li",[t._v("遥控器开关可以用于更改任何无人机的飞行模式。")]),t._v(" "),a("li",[t._v("摇杆动作（"),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("默认情况下")]),t._v("）会将无人机切换到 "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("位置模式")]),t._v("， 除非是正在处理电池失效保护。")],1)])]),t._v(" "),a("h2",{attrs:{id:"技术摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术摘要"}},[t._v("#")]),t._v(" 技术摘要")]),t._v(" "),a("p",[t._v("The vehicle hovers at the current position and altitude. The vehicle will first ascend to "),a("a",{attrs:{href:"#NAV_MIN_LTR_ALT"}},[t._v("NAV_MIN_LTR_ALT")]),t._v(" if the mode is engaged below this altitude.")]),t._v(" "),a("p",[t._v("RC stick movement will change the vehicle to "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (by "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("default")]),t._v(").")],1),t._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("Hold mode behaviour can be configured using the parameters below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"NAV_MIN_LTR_ALT"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_MIN_LTR_ALT"}},[t._v("NAV_MIN_LTR_ALT")])],1),t._v(" "),a("td",[t._v("This is the minimum altitude above Home the system will always obey in Hold mode if switched into this mode without specifying an altitude (e.g. through switch on RC).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_OVERRIDE"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),a("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(". This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_STICK_OV"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),a("td",[t._v("The amount of stick movement that causes a transition to "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (if "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)])])]),t._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/hold.html"}},[t._v("Hold Mode (FW)")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);