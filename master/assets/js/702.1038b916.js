(window.webpackJsonp=window.webpackJsonp||[]).push([[702],{2901:function(_,t,v){"use strict";v.r(t);var a=v(19),e=Object(a.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"起飞模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起飞模式"}},[_._v("#")]),_._v(" 起飞模式")]),_._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:v(326),title:"需要定位修复（例如GPS）",width:"30px"}})])],1),_._v(" "),a("p",[a("em",[_._v("起飞")]),_._v("飞行模式使飞机起飞到指定高度并等待进一步指令。")]),_._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),a("ul",[a("li",[_._v("该模式需要一个良好的位置估计（如，从GPS中获取）。")]),_._v(" "),a("li",[_._v("使用此模式前必须先解锁。")]),_._v(" "),a("li",[_._v("该模式是自动的 - 不 "),a("em",[_._v("需要")]),_._v(" 用户干预即可控制无人机。")]),_._v(" "),a("li",[_._v("遥控开关可以在任何无人机上更改飞行模式。")]),_._v(" "),a("li",[_._v("在多旋翼中移动遥控器摇杆（或 VTOL 在多旋翼模式下）"),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("默认情况下")]),_._v("会将无人机切换到"),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v("，除非是处理电池失效保护。")],1),_._v(" "),a("li",[_._v("如果起飞时出现问题， "),a("RouterLink",{attrs:{to:"/zh/config/safety.html#failure_detector"}},[_._v("故障检测器")]),_._v(" 将自动停止引擎。")],1)])]),_._v(" "),a("p",[_._v("下面描述每种类型飞机的具体行为。")]),_._v(" "),a("h2",{attrs:{id:"多旋翼-mc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼-mc"}},[_._v("#")]),_._v(" 多旋翼（MC）")]),_._v(" "),a("p",[_._v("多旋翼上升到 "),a("code",[_._v("MIS_TAKEOFF_ALT")]),_._v(" 中定义的高度并保持位置。")]),_._v(" "),a("p",[_._v("遥控器摇杆移动会把无人机切换到 "),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v(" （"),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("默认")]),_._v("）。")],1),_._v(" "),a("p",[_._v("起飞受以下参数影响：")]),_._v(" "),a("table",[a("thead",[a("tr",[a("th",[_._v("参数")]),_._v(" "),a("th",[_._v("描述")])])]),_._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"MIS_TAKEOFF_ALT"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[_._v("MIS_TAKEOFF_ALT")])],1),_._v(" "),a("td",[_._v("起飞期间的目标高度 (默认值: 2.5 米)")])]),_._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_TKO_SPEED"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[_._v("MPC_TKO_SPEED")])],1),_._v(" "),a("td",[_._v("上升速度 (默认值: 1.5 m/s)")])]),_._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"COM_RC_OVERRIDE"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")])],1),_._v(" "),a("td",[_._v("控制多旋翼（或者多旋翼模式下的 VOTL）的摇杆移动量来切换到 "),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v("。 可以分别为自动模式和 offboard 模式启用此功能，默认情况下在自动模式下启用此功能。")],1)]),_._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"COM_RC_STICK_OV"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[_._v("COM_RC_STICK_OV")])],1),_._v(" "),a("td",[_._v("导致发射机切换到 "),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v(" 的摇杆移动量（如果 "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")]),_._v(" 已启用）。")],1)])])]),_._v(" "),a("p",[a("span",{attrs:{id:"fixed_wing"}})]),_._v(" "),a("h2",{attrs:{id:"固定翼-fw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#固定翼-fw"}},[_._v("#")]),_._v(" 固定翼（FW）")]),_._v(" "),a("p",[_._v("飞机使用"),a("em",[_._v("弹射器/手动启动模式")]),_._v("或"),a("em",[_._v("跑道起飞模式")]),_._v("在当前方向上起飞。 模式默认为弹射/手动发射，但可以使用"),a("a",{attrs:{href:"#RWTO_TKOFF"}},[_._v(" RWTO_TKOFF ")]),_._v("设置为跑道起飞。 在这两种情况下，遥控操作都被忽略。")]),_._v(" "),a("p",[a("span",{attrs:{id:"hand_launch"}})]),_._v(" "),a("h3",{attrs:{id:"弹射-手动发射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹射-手动发射"}},[_._v("#")]),_._v(" 弹射/手动发射")]),_._v(" "),a("p",[_._v("在"),a("em",[_._v("弹射/手动发射模式")]),_._v("中，无人机等待检测发射（基于加速度触发）。 发射时，它会在大约2秒钟内升至全油门（"),a("a",{attrs:{href:"#RWTO_MAX_THR"}},[_._v(" RWTO_MAX_THR ")]),_._v("），然后以全油门爬升，并且以*最小</ 1> 10度俯仰角起飞。 一旦它达到 "),a("a",{attrs:{href:"#FW_CLMBOUT_DIFF"}},[_._v("FW_CLMBOUT_DIFF")]),_._v(" 它将过渡到 "),a("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[_._v("保持模式")]),_._v(" 和悬停。")],1),a("p"),_._v(" "),a("p",[_._v("除了上面讨论的行为之外，还有一个启动检测器可以阻止启动程序开始直到满足某些条件。 对于弹射器发射，这是一些加速度阈值。\n:::")]),_._v(" "),a("p",[a("span",{attrs:{id:"runway_launch"}})]),_._v(" "),a("h3",{attrs:{id:"跑到起飞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跑到起飞"}},[_._v("#")]),_._v(" 跑到起飞")]),_._v(" "),a("p",[a("em",[_._v("跑道起飞模式")]),_._v("具有以下阶段：")]),_._v(" "),a("ol",[a("li",[a("strong",[_._v("油门斜坡")]),_._v("：飞机依附在跑道上（俯仰固定，无横滚，航向保持），直到达到起最小起飞空速（"),a("a",{attrs:{href:"#FW_AIRSPD_MIN"}},[_._v(" FW_AIRSPD_MIN ")]),_._v(" x "),a("a",{attrs:{href:"#RWTO_AIRSPD_SCL"}},[_._v(" RWTO_AIRSPD_SCL ")]),_._v("）")]),_._v(" "),a("li",[a("strong",[_._v("起飞")]),_._v("：增加俯仰直到飞机高度>导航高度（"),a("a",{attrs:{href:"#RWTO_NAV_ALT"}},[_._v(" RWTO_NAV_ALT ")]),_._v("）。")]),_._v(" "),a("li",[_._v("** 爬出**：爬升至地面以上的高度> "),a("a",{attrs:{href:"#FW_CLMBOUT_DIFF"}},[_._v(" FW_CLMBOUT_DIFF ")]),_._v("。 在此阶段中, 将移除滚转和航向限制。")])]),_._v(" "),a("h3",{attrs:{id:"固定翼起飞参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#固定翼起飞参数"}},[_._v("#")]),_._v(" 固定翼起飞参数")]),_._v(" "),a("p",[_._v("起飞受以下参数影响：高于地平面（AGL）的高度，留有足够的离地间隙以允许一些滚转。 在达到"),a("code",[_._v("RWTO_NAV_ALT")]),_._v("之前，飞机保持水平，并且仅使用方向舵来保持航向（参见"),a("span",{attrs:{id:"RWTO_HDG"}},[_._v(" </ 1> "),a("a",{attrs:{href:"../advanced_config/parameter_reference.md#RWTO_HDG"}},[_._v(" RWTO_HDG ")]),_._v("）。 如果"),a("code",[_._v(" FW_CLMBOUT_DIFF ")]),_._v("> 0，则应低于"),a("code",[_._v(" FW_CLMBOUT_DIFF ")]),_._v("。")])]),_._v(" "),a("p",[_._v("\n:::note\n起飞时，无人机时钟遵循正常的固定翼最大/最小油门设置（"),a("a",{attrs:{href:"../advanced_config/parameter_reference.md#FW_THR_MIN"}},[_._v("FW_THR_MIN")]),_._v("，"),a("a",{attrs:{href:"../advanced_config/parameter_reference.md#FW_THR_MAX"}},[_._v("FW_THR_MAX")]),_._v("）。\n:::\n")]),_._v(" "),a("h2",[_._v("\n  垂直起降（VTOL）\n")]),_._v(" "),a("p",[_._v("\n  VTOL 在启动时默认为多旋翼模式，通常可以在多旋翼模式下起飞（而且也更安全）。\n")]),_._v(" "),a("p",[_._v("\n  也就是说，如果在起飞前切换到固定翼，将以"),a("a",{attrs:{href:"#fixed_wing"}},[_._v("固定翼")]),_._v("模式起飞。\n")])])}),[],!1,null,null,null);t.default=e.exports},326:function(_,t,v){_.exports=v.p+"assets/img/position_fixed.c1403cf0.svg"}}]);