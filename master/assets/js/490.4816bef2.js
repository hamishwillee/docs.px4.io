(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{2939:function(_,t,v){"use strict";v.r(t);var r=v(19),a=Object(r.a)({},(function(){var _=this,t=_.$createElement,r=_._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"返航模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#返航模式"}},[_._v("#")]),_._v(" 返航模式")]),_._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[r("img",{attrs:{src:v(326),title:"需要定位（例如 GPS ）",width:"30px"}})])],1),_._v(" "),r("p",[_._v("返航模式用于使无人机在通向安全目的地的畅通路径上安全飞行，这里可以等待（悬停或绕圈）或着陆。")]),_._v(" "),r("p",[_._v("PX4 提供了几种机制来选择安全的返航路径，返航目的地和着陆，包括使用其实位置，集结（“安全”）点，任务路径和任务着陆顺序。")]),_._v(" "),r("p",[_._v("以下章节解释了如何配置 "),r("a",{attrs:{href:"#return_types"}},[_._v("返航类型")]),_._v("， "),r("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v(" 和 "),r("a",{attrs:{href:"#arrival"}},[_._v("降落/抵达行为")]),_._v("。 最后，有几节说明了每种"),r("a",{attrs:{href:"#default_configuration"}},[_._v("载具类型")]),_._v("的"),r("em",[_._v("默认")]),_._v("（预配置）行为。")]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),r("ul",[r("li",[_._v("该模式需要 GPS。")]),_._v(" "),r("li",[_._v("该模式是自动的 - 不 "),r("em",[_._v("需要")]),_._v(" 用户干预即可控制无人机。")]),_._v(" "),r("li",[_._v("遥控开关可以在任何无人机上更改飞行模式。")]),_._v(" "),r("li",[_._v("在多旋翼中移动遥控器摇杆（或 VTOL 在多旋翼模式下）"),r("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("默认情况下")]),_._v("会将无人机切换到"),r("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v("，除非是处理电池失效保护。")],1)])]),_._v(" "),r("p",[r("span",{attrs:{id:"return_types"}})]),_._v(" "),r("h2",{attrs:{id:"返航类型-rtl-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#返航类型-rtl-type"}},[_._v("#")]),_._v(" 返航类型（RTL_TYPE）")]),_._v(" "),r("p",[_._v("PX4 提供了四种替代方法（"),r("a",{attrs:{href:"#RTL_TYPE"}},[_._v(" RTL_TYPE ")]),_._v("），用于找到通向安全目的地和/或着陆的畅通路径：")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#home_return"}},[_._v("返航到起始位置/集结点")]),_._v("（"),r("code",[_._v("RTL_TYPE=0")]),_._v("）: 上升到安全高度并通过直接路径返回到最近的集结点或起始地点。")]),_._v(" "),r("li",[r("a",{attrs:{href:"#mission_landing_return"}},[_._v("任务降落/集结点返航")]),_._v("（"),r("code",[_._v("RTL_TYPE=1")]),_._v("）：爬升到安全的高度，直接飞往最近的目的地"),r("em",[_._v("除了起始位置")]),_._v("：集结点或任务着陆开始。 如果未定义任务着陆点或集结点，请通过直接路径返回起始位置。")]),_._v(" "),r("li",[r("a",{attrs:{href:"#mission_path_return"}},[_._v("任务路径返航")]),_._v("（"),r("code",[_._v("RTL_TYPE=2")]),_._v("）：使用任务路径并快速继续执行任务着陆（如果已定义）。 如果未定义任务降落，则将快速回退到任务起始位置。 如果未定义任务，直接返航到起始位置（集结点将被忽略）。")]),_._v(" "),r("li",[r("a",{attrs:{href:"#safety_point_return"}},[_._v("最近的安全目的地返航")]),_._v("（"),r("code",[_._v("RTL_TYPE = 3")]),_._v("）：上升到安全高度并通过直接路径返回最近的目的地：起始位置，任务着陆点的开始位置或集结点。 如果目的地是飞行任务着陆模式，则按照该模式降落。")])]),_._v(" "),r("p",[_._v("以下各节提供了每种类型的更详细说明。")]),_._v(" "),r("p",[r("span",{attrs:{id:"home_return"}})]),_._v(" "),r("h3",{attrs:{id:"起始位置-集结点返航类型-rtl-type-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#起始位置-集结点返航类型-rtl-type-0"}},[_._v("#")]),_._v(" 起始位置/集结点返航类型（RTL_TYPE=0）")]),_._v(" "),r("p",[_._v("无人机在该返航类型中：")]),_._v(" "),r("ul",[r("li",[_._v("爬升到一个安全的"),r("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v("（高于任何可预期的障碍物）。")]),_._v(" "),r("li",[_._v("通过直接路径飞往起始位置或集结点（以最近者为准）。")]),_._v(" "),r("li",[r("a",{attrs:{href:"#arrival"}},[_._v("降落或等待")]),_._v("处于下降高度（取决于着陆参数）。")])]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),r("p",[_._v("如果未定义集结点，则与"),r("em",[_._v("返航")]),_._v("（RTL）/ "),r("em",[_._v("返回到起始位置")]),_._v("（RTH）相同。")])]),_._v(" "),r("p",[r("span",{attrs:{id:"mission_landing_return"}})]),_._v(" "),r("h3",{attrs:{id:"任务着陆-集结点返航类型-rtl-type-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#任务着陆-集结点返航类型-rtl-type-1"}},[_._v("#")]),_._v(" 任务着陆/集结点返航类型 (RTL_TYPE=1)")]),_._v(" "),r("p",[_._v("无人机在该返航类型中：")]),_._v(" "),r("ul",[r("li",[_._v("爬升到一个安全的"),r("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v("（高于任何可预期的障碍物）。")]),_._v(" "),r("li",[_._v("通过直接路径飞行到一个集结点或"),r("a",{attrs:{href:"#mission_landing_pattern"}},[_._v("任务着陆模式")]),_._v("的起点（以最近者为准）。 如果未定义任务降落或集结点，无人机通过直接路径返回到起始位置。")]),_._v(" "),r("li",[_._v("如果目的地是飞行任务着陆模式，则按照该模式降落。")]),_._v(" "),r("li",[_._v("如果目的地是集结点或者起始位置，无人机将在降落高度（取决于着陆参数）"),r("a",{attrs:{href:"#arrival"}},[_._v("降落或等待")]),_._v("。")])]),_._v(" "),r("p",[r("span",{attrs:{id:"mission_landing_pattern"}})]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),r("p",[_._v("任务着陆模式包括"),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_LAND_START",target:"_blank",rel:"noopener noreferrer"}},[_._v(" MAV_CMD_DO_LAND_START "),r("OutboundLink")],1),_._v("，一个或多个位置航点和"),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[_._v(" MAV_CMD_NAV_LAND "),r("OutboundLink")],1),_._v("。")])]),_._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),r("p",[_._v("当此类型设置时，PX4 会拒绝任何没有有效着陆模式的任务。")])]),_._v(" "),r("p",[r("span",{attrs:{id:"mission_path_return"}})]),_._v(" "),r("h3",{attrs:{id:"任务路径返航类型-rtl-type-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#任务路径返航类型-rtl-type-2"}},[_._v("#")]),_._v(" 任务路径返航类型（RTL_TYPE=2）")]),_._v(" "),r("p",[_._v("这个返航类型使用任务(如果定义的话)，提供一个安全的返回 "),r("em",[_._v("路径")]),_._v("和飞行任务着陆模式（如果定义的话）以提供着陆行为。 如果有任务但没有任务着陆模式，则该任务"),r("em",[_._v("反向飞行")]),_._v("。 集结点，如果有的话，将被忽略。")]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),r("p",[_._v("该行为相当复杂，因为它取决于飞行模式以及是否定义了任务和任务着陆。")])]),_._v(" "),r("p",[_._v("任务 "),r("em",[_._v("带有")]),_._v(" 着陆模式：")]),_._v(" "),r("ul",[r("li",[_._v("**任务模式：**在“快进模式”下继续执行任务（跳过，延迟和任何其他非位置命令被忽略，悬停和其他位置航点转换为简单航路点），然后着陆。")]),_._v(" "),r("li",[r("strong",[_._v("任务模式以外的自动模式：")]),_._v(" "),r("ul",[r("li",[_._v("爬升到一个安全的"),r("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v(" 高于任何可预期的障碍物。")]),_._v(" "),r("li",[_._v("直接飞到最近的航点（对固定翼而言，不是着陆航点），然后降落到航点高度。")]),_._v(" "),r("li",[_._v("从该航点以快速模式继续执行任务。")])])]),_._v(" "),r("li",[r("strong",[_._v("手动模式:")]),_._v(" "),r("ul",[r("li",[_._v("爬升到一个安全的"),r("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v("高于任何可预期的障碍物。")]),_._v(" "),r("li",[_._v("直接飞到降落序列位置并下降到航点高度。")]),_._v(" "),r("li",[_._v("使用任务降落模式着陆。")])])])]),_._v(" "),r("p",[r("em",[_._v("没有")]),_._v("定义着陆模式的任务。")]),_._v(" "),r("ul",[r("li",[r("strong",[_._v("任务模式:")]),_._v(" "),r("ul",[r("li",[_._v("从上一个航点开始以“快退”（反向）飞行的任务\n"),r("ul",[r("li",[_._v("跳，延迟和其他任何非定位命令都会被忽略，悬停和其他位置航点将转换为简单航点。")]),_._v(" "),r("li",[_._v("VTOL 无人机在反向飞行任务之前切换到固定翼模式（如果需要）。")])])]),_._v(" "),r("li",[_._v("在到达航点1时，无人机会上升到"),r("a",{attrs:{href:"#return_altitude"}},[_._v("返回高度")]),_._v("并飞到原始位置（在该位置"),r("a",{attrs:{href:"#arrival"}},[_._v("着陆或等待")]),_._v("）。")])])]),_._v(" "),r("li",[r("strong",[_._v("任务模式以外的自动模式：")]),_._v(" "),r("ul",[r("li",[_._v("直接飞到最近的航点（不是固定翼的着陆航点），然后下降到航点高度。")]),_._v(" "),r("li",[_._v("反向执行任务，就像在任务模式中触发返航模式一样（上图）。")])])]),_._v(" "),r("li",[r("strong",[_._v("手动模式：")]),_._v(" 直接飞到起始位置然后降落。")])]),_._v(" "),r("p",[_._v("如果未定义任务，PX4 将直接飞回起始位置并着陆（集结点将被忽略）。")]),_._v(" "),r("p",[_._v("如果任务在返航模式期间发生更改，则将按照与上述相同的规则根据新任务重新评估行为（例如，如果新任务没有降落顺序并且你在一个任务中，则任务将被逆转）。")]),_._v(" "),r("p",[r("span",{attrs:{id:"safety_point_return"}})]),_._v(" "),r("h3",{attrs:{id:"最近的安全目的地返回类型-rtl-type-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#最近的安全目的地返回类型-rtl-type-3"}},[_._v("#")]),_._v(" 最近的安全目的地返回类型（RTL_TYPE=3）")]),_._v(" "),r("p",[_._v("无人机在该返航类型中：")]),_._v(" "),r("ul",[r("li",[_._v("爬升到一个安全的"),r("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v("（高于任何可预期的障碍物）。")]),_._v(" "),r("li",[_._v("飞到最近目的地的直接路径：起始位置，任务着陆模式或集结点。")]),_._v(" "),r("li",[_._v("如果目的地是飞行任务着陆模式，则按照该模式降落。")]),_._v(" "),r("li",[_._v("如果目的地是起始位置或者集结点，无人机会下降到下降高度（"),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v(" RTL_DESCEND_ALT ")]),_._v("），然后"),r("a",{attrs:{href:"#arrival"}},[_._v("着陆或等待")]),_._v("。")])]),_._v(" "),r("p",[r("span",{attrs:{id:"return_altitude"}})]),_._v(" "),r("h2",{attrs:{id:"返航高度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#返航高度"}},[_._v("#")]),_._v(" 返航高度")]),_._v(" "),r("p",[_._v("无人机通常会在返航之前首先上升到安全的高度，以躲避其与目的地之间的任何障碍。")]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),r("p",[_._v("对于大多数 "),r("a",{attrs:{href:"#return_types"}},[_._v("返航类型")]),_._v(" 来说都是如此。 例外是在任务内执行"),r("a",{attrs:{href:"#mission_path_return"}},[_._v("任务路径返回")]),_._v("时，无人机遵循任务航点飞行（我们可以假定这些航点避开了障碍物）。")])]),_._v(" "),r("p",[_._v("固定翼返回高度是使用参数 "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" 配置的。 多旋翼和 VTOL 无人机的返航高度使用 "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" 和 "),r("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v(" 来配置，这两个参数定义了一个以目标（起始位置或者安全点）为中心的半圆锥。")]),_._v(" "),r("p",[r("img",{attrs:{src:v(837),alt:"返航模式锥体"}})]),_._v(" "),r("p",[_._v("如果无人机是：")]),_._v(" "),r("ul",[r("li",[_._v("高于"),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" (1)，无人机将在当前高度返航。")]),_._v(" "),r("li",[_._v("在圆锥下方，它将返回与圆锥（2）或"),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v(" RTL_DESCEND_ALT ")]),_._v("（以较高者为准）相交的位置。")]),_._v(" "),r("li",[_._v("在圆锥（3）之外，它将首先爬升，直到达到"),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v(" RTL_RETURN_ALT ")]),_._v("。")]),_._v(" "),r("li",[_._v("在圆锥内：\n"),r("ul",[r("li",[_._v("高于"),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" (4)，无人机将在当前高度返航。")]),_._v(" "),r("li",[_._v("低于 "),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" (5)，它将会先爬升到 "),r("code",[_._v("RTL_DESCEND_ALT")]),_._v("的高度。")])])])]),_._v(" "),r("p",[_._v("注意：")]),_._v(" "),r("ul",[r("li",[_._v("如果 "),r("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v(' 为 0 度，则没有 "圆锥"：\n'),r("ul",[r("li",[_._v("无人机在"),r("code",[_._v("RTL_RETURN_ALT")]),_._v("的高度或者（或以上）返航。")])])]),_._v(" "),r("li",[_._v("如果 "),r("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v(" 是90度，无人机将更大程度在 "),r("code",[_._v("RTL_DESCEND_ALT")]),_._v(" 的高度和当前高度返航。")]),_._v(" "),r("li",[_._v("无人机总是会爬升到至少"),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v("的高度返航。")])]),_._v(" "),r("p",[r("span",{attrs:{id:"arrival"}})]),_._v(" "),r("h2",{attrs:{id:"悬停-降落在目的地"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#悬停-降落在目的地"}},[_._v("#")]),_._v(" 悬停/降落在目的地")]),_._v(" "),r("p",[_._v("除非执行任务着陆（例如，如果执行"),r("a",{attrs:{href:"#home_return"}},[_._v("起始位置返航")]),_._v("或"),r("a",{attrs:{href:"#safety_point_return"}},[_._v("最安全目的地返航")]),_._v("），无人机才会到达目的地，并迅速降落到"),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" 高度。")]),_._v(" "),r("p",[_._v("无人机会在悬停一段指定的时间（"),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v("）后降落。 如果 "),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY=-1")]),_._v(" 它将无限期悬停。")]),_._v(" "),r("p",[r("span",{attrs:{id:"default_configuration"}})]),_._v(" "),r("h2",{attrs:{id:"无人机默认行为"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无人机默认行为"}},[_._v("#")]),_._v(" 无人机默认行为")]),_._v(" "),r("p",[_._v("在所有无人机类型中，该模式几乎完全以相同的方式"),r("em",[_._v("实现")]),_._v(" (例外情况是，固定翼在等候时会绕圈而不是悬停)， 并因此使用相同的参数调试。")]),_._v(" "),r("p",[_._v("然而，"),r("em",[_._v("默认配置")]),_._v(" 是为了适合无人机类型而设计的，如下所述。")]),_._v(" "),r("h3",{attrs:{id:"多旋翼-mc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼-mc"}},[_._v("#")]),_._v(" 多旋翼（MC）")]),_._v(" "),r("p",[_._v("多旋翼默认使用"),r("a",{attrs:{href:"#home_return"}},[_._v("起始位置返航")]),_._v("（并使用一下配置）：")]),_._v(" "),r("ul",[r("li",[_._v("爬升到 "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v("（"),r("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG=0")]),_._v(" - 未使用锥体）。")]),_._v(" "),r("li",[_._v("以直线和恒定的高度飞到起始位置（如果已经超过返航高度，它将在当前高度返航）。")]),_._v(" "),r("li",[_._v("快速下降到"),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v("的高度。")]),_._v(" "),r("li",[_._v("立即或多或少降落（小"),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v("）。")])]),_._v(" "),r("h3",{attrs:{id:"固定翼-fw"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#固定翼-fw"}},[_._v("#")]),_._v(" 固定翼（FW）")]),_._v(" "),r("p",[_._v("固定翼默认使用"),r("a",{attrs:{href:"#mission_landing_return"}},[_._v("任务降落返航")]),_._v("：")]),_._v(" "),r("ul",[r("li",[_._v("如果定义了任务降落，直接飞往任务降落起点，然后着陆。")]),_._v(" "),r("li",[_._v("否则直接飞到起始位置，并在半径上方圆环 "),r("a",{attrs:{href:"#NAV_LOITER_RAD"}},[_._v("NAV_LOITER_RAD")]),_._v("。")])]),_._v(" "),r("p",[_._v("如果未跟随任务降落，且"),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v(" RTL_LAND_DELAY ")]),_._v("设置为 -1，则无人机将按照主题"),r("RouterLink",{attrs:{to:"/zh/flying/fixed_wing_landing.html"}},[_._v("着陆（固定翼）")]),_._v("中所述降落。")],1),_._v(" "),r("p",[_._v("固定翼 "),r("a",{attrs:{href:"#return_altitude"}},[_._v("安全返回高度")]),_._v(" 仅取决于 "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" (未使用 "),r("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v(" 定义的圆锥)")]),_._v(" "),r("p",[_._v("遥控器摇杆操作被忽略。")]),_._v(" "),r("h3",{attrs:{id:"垂直起降"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#垂直起降"}},[_._v("#")]),_._v(" 垂直起降")]),_._v(" "),r("p",[_._v("VTOL 默认使用"),r("a",{attrs:{href:"#mission_landing_return"}},[_._v("任务降落返航")]),_._v(":")]),_._v(" "),r("ul",[r("li",[_._v("如果定义了任务降落，直接飞往任务降落起点，然后着陆。")]),_._v(" "),r("li",[_._v("否则直接飞向起始位置，切换到多旋翼模式，然后像多旋翼一样着陆。")])]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),r("p",[_._v("如果不在任务降落中，VTOL 在固定翼模式下将"),r("em",[_._v("始终")]),_._v("在着陆前切换回多旋翼模式（忽略 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_FORCE_VT"}},[_._v("NAV_FORCE_VT")]),_._v("）。")],1)]),_._v(" "),r("h2",{attrs:{id:"参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[_._v("#")]),_._v(" 参数")]),_._v(" "),r("p",[_._v("RTL 参数列于 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#return-mode"}},[_._v("参数 > 返航模式")]),_._v(" (以及下面的概述)。")],1),_._v(" "),r("table",[r("thead",[r("tr",[r("th",[_._v("参数")]),_._v(" "),r("th",[_._v("描述")])])]),_._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"RTL_TYPE"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_TYPE"}},[_._v("RTL_TYPE")])],1),_._v(" "),r("td",[_._v("返航机制（路径和目的地）。")])])])]),_._v(" "),r("p",[r("code",[_._v("0")]),_._v("：通过直接路径返回到集结点或起始点（以最近者为准）。"),r("br"),_._v(" "),r("code",[_._v("1")]),_._v("：返回到集结点或任务着陆模式的起点（以最近者为准），通过直接路径。 如果未定义任务着陆点或集结点，通过直接路径返回起始位置。 如果目的地是任务着陆模式，则按照该模式着陆。"),r("br"),_._v(" "),r("code",[_._v("2")]),_._v("：如果定义了着陆模式，则使用任务路径快速着陆，否则快速返回起始位置。 忽略集结点。 如果没有定义任务规划，直接飞往起始位置。"),r("br"),_._v(" "),r("code",[_._v("3")]),_._v("：通过直接路径返航到最近目的地：起始位置，任务降落起始点或者安全点。 如果目的地是飞行任务着陆模式，则按照该模式降落。 |\n| "),r("span",{attrs:{id:"RTL_RETURN_ALT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v("   | 当"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v("为 0 时，返航高度以米为单位（默认：60 米）。 如果已经超过这个值, 飞机将返回当前的高度。                                                                                                                                                     |\n| "),r("span",{attrs:{id:"RTL_DESCEND_ALT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" | 最小返航高度和无人机从较高的返航高度到减速或者停止的初始下降高度（默认： 30米）。                                                                                                                                                                                                                                    |\n| "),r("span",{attrs:{id:"RTL_LAND_DELAY"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v("   | 着陆前在"),r("code",[_._v("RTL_DESCEND_ALT")]),_._v("高度悬停时间（默认： 0.5秒）- 默认情况下这个段时间很短，因此无人机智慧减速然后立即着陆。 如果设置为-1，系统将在 "),r("code",[_._v("RTL_DESCEND_ALT")]),_._v(" 高度悬停而不是降落。 延迟能够使你为起落架的展开部署配置时间（自动触发）。                                                                                                                                     |\n| "),r("span",{attrs:{id:"RTL_MIN_DIST"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_MIN_DIST"}},[_._v("RTL_MIN_DIST")]),_._v('       | 能够触发无人机上升到返航高度，距离起始位置的最小水平距离由那个"锥形"指定。 如果无人机在水平方向比这个相对于起始位置的距离更近，它将在当前高度或者在'),r("code",[_._v("RTL_DESCEND_ALT")]),_._v("高度（以较高者为准）返航，而不是先上升到RTL_RETURN_ALT）。                                                                                                                                            |\n| "),r("span",{attrs:{id:"RTL_CONE_ANG"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v("       | 圆锥半角决定无人机的 RTL 返航高度。 数值(度数)：0、25、45、65、80、90。 请注意，0 为“无圆锥”（始终返回"),r("code",[_._v("RTL_RETURN_ALT")]),_._v("或更高），而 90 则表示无人机必须在当前高度或在"),r("code",[_._v("RTL_DESCEND_ALT")]),_._v("高度（以较高者为准）返航。                                                                                                                                    |\n| "),r("span",{attrs:{id:"COM_RC_OVERRIDE"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")]),_._v(" | 控制多旋翼（或者多旋翼模式下的 VOTL）的摇杆移动量来切换到 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v(" (除非无人机在处理紧急的电池失效保护)。 可以分别为自动模式和 offboard 模式启用此功能，默认情况下在自动模式下启用此功能。                                                                                                                                     |\n| "),r("span",{attrs:{id:"COM_RC_STICK_OV"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[_._v("COM_RC_STICK_OV")]),_._v(" | 导致发射机切换到 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v(" 的摇杆移动量（如果 "),r("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")]),_._v(" 已启用）。                                                                                                                                                                         |\n| "),r("span",{attrs:{id:"NAV_LOITER_RAD"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[_._v("NAV_LOITER_RAD")]),_._v("   | [仅限固定翼] 悬停的绕圈半径（"),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v("）。                                                                                                                                                                                                                         |")],1)])}),[],!1,null,null,null);t.default=a.exports},326:function(_,t,v){_.exports=v.p+"assets/img/position_fixed.c1403cf0.svg"},837:function(_,t,v){_.exports=v.p+"assets/img/rtl_cone.f0d28c19.jpg"}}]);