(window.webpackJsonp=window.webpackJsonp||[]).push([[615],{327:function(_,t,e){_.exports=e.p+"assets/img/position_fixed.c1403cf0.svg"},3373:function(_,t,e){"use strict";e.r(t);var v=e(19),a=Object(v.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"返航模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#返航模式"}},[_._v("#")]),_._v(" 返航模式")]),_._v(" "),v("p",[v("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[v("img",{attrs:{src:e(327),title:"需要定位（例如 GPS ）",width:"30px"}})])],1),_._v(" "),v("p",[_._v("The "),v("em",[_._v("Return")]),_._v(" flight mode is used to "),v("em",[_._v("fly a vehicle to safety")]),_._v(" on an unobstructed path to a safe destination, where it may either wait (hover or circle) or land.")]),_._v(" "),v("p",[_._v("PX4 提供了几种机制来选择安全的返航路径，返航目的地和着陆，包括使用其实位置，集结（“安全”）点，任务路径和任务着陆顺序。")]),_._v(" "),v("p",[_._v("以下章节解释了如何配置 "),v("a",{attrs:{href:"#return_types"}},[_._v("返航类型")]),_._v("， "),v("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v(" 和 "),v("a",{attrs:{href:"#arrival"}},[_._v("降落/抵达行为")]),_._v("。 At the end there are sections explaining the "),v("em",[_._v("default")]),_._v(" (preconfigured) behaviour for each "),v("a",{attrs:{href:"#default_configuration"}},[_._v("vehicle type")]),_._v(".")]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),v("ul",[v("li",[_._v("该模式需要 GPS。")]),_._v(" "),v("li",[_._v("This mode is automatic - no user intervention is "),v("em",[_._v("required")]),_._v(" to control the vehicle.")]),_._v(" "),v("li",[_._v("遥控开关可以在任何无人机上更改飞行模式。")]),_._v(" "),v("li",[_._v("在多旋翼中移动遥控器摇杆（或 VTOL 在多旋翼模式下）"),v("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("默认情况下")]),_._v("会将无人机切换到"),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v("，除非是处理电池失效保护。")],1)])]),_._v(" "),v("p",[v("span",{attrs:{id:"return_types"}})]),_._v(" "),v("h2",{attrs:{id:"返航类型-rtl-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#返航类型-rtl-type"}},[_._v("#")]),_._v(" 返航类型（RTL_TYPE）")]),_._v(" "),v("p",[_._v("PX4 提供了四种替代方法（"),v("a",{attrs:{href:"#RTL_TYPE"}},[_._v(" RTL_TYPE ")]),_._v("），用于找到通向安全目的地和/或着陆的畅通路径：")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#home_return"}},[_._v("返航到起始位置/集结点")]),_._v("（"),v("code",[_._v("RTL_TYPE=0")]),_._v("）: 上升到安全高度并通过直接路径返回到最近的集结点或起始地点。")]),_._v(" "),v("li",[v("a",{attrs:{href:"#mission_landing_return"}},[_._v("Mission landing/rally point return")]),_._v(" ("),v("code",[_._v("RTL_TYPE=1")]),_._v("): Ascend to a safe altitude, fly direct to the closest destination "),v("em",[_._v("other than home")]),_._v(": rally point or start of mission landing. 如果未定义任务着陆点或集结点，请通过直接路径返回起始位置。")]),_._v(" "),v("li",[v("a",{attrs:{href:"#mission_path_return"}},[_._v("任务路径返航")]),_._v("（"),v("code",[_._v("RTL_TYPE=2")]),_._v("）：使用任务路径并快速继续执行任务着陆（如果已定义）。 如果未定义任务降落，则将快速回退到任务起始位置。 如果未定义任务，直接返航到起始位置（集结点将被忽略）。")]),_._v(" "),v("li",[v("a",{attrs:{href:"#safety_point_return"}},[_._v("最近的安全目的地返航")]),_._v("（"),v("code",[_._v("RTL_TYPE = 3")]),_._v("）：上升到安全高度并通过直接路径返回最近的目的地：起始位置，任务着陆点的开始位置或集结点。 如果目的地是飞行任务着陆模式，则按照该模式降落。")])]),_._v(" "),v("p",[_._v("以下各节提供了每种类型的更详细说明。")]),_._v(" "),v("p",[v("span",{attrs:{id:"home_return"}})]),_._v(" "),v("h3",{attrs:{id:"起始位置-集结点返航类型-rtl-type-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#起始位置-集结点返航类型-rtl-type-0"}},[_._v("#")]),_._v(" 起始位置/集结点返航类型（RTL_TYPE=0）")]),_._v(" "),v("p",[_._v("无人机在该返航类型中：")]),_._v(" "),v("ul",[v("li",[_._v("爬升到一个安全的"),v("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v("（高于任何可预期的障碍物）。")]),_._v(" "),v("li",[_._v("通过直接路径飞往起始位置或集结点（以最近者为准）。")]),_._v(" "),v("li",[v("a",{attrs:{href:"#arrival"}},[_._v("降落或等待")]),_._v("处于下降高度（取决于着陆参数）。")])]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),v("p",[_._v("If no rally points are defined, this is the same as a "),v("em",[_._v("Return to Launch")]),_._v(" (RTL)/"),v("em",[_._v("Return to Home")]),_._v(" (RTH).")])]),_._v(" "),v("p",[v("span",{attrs:{id:"mission_landing_return"}})]),_._v(" "),v("h3",{attrs:{id:"任务着陆-集结点返航类型-rtl-type-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#任务着陆-集结点返航类型-rtl-type-1"}},[_._v("#")]),_._v(" 任务着陆/集结点返航类型 (RTL_TYPE=1)")]),_._v(" "),v("p",[_._v("无人机在该返航类型中：")]),_._v(" "),v("ul",[v("li",[_._v("爬升到一个安全的"),v("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v("（高于任何可预期的障碍物）。")]),_._v(" "),v("li",[_._v("通过直接路径飞行到一个集结点或"),v("a",{attrs:{href:"#mission_landing_pattern"}},[_._v("任务着陆模式")]),_._v("的起点（以最近者为准）。 如果未定义任务降落或集结点，无人机通过直接路径返回到起始位置。")]),_._v(" "),v("li",[_._v("如果目的地是飞行任务着陆模式，则按照该模式降落。")]),_._v(" "),v("li",[_._v("如果目的地是集结点或者起始位置，无人机将在降落高度（取决于着陆参数）"),v("a",{attrs:{href:"#arrival"}},[_._v("降落或等待")]),_._v("。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"mission_landing_pattern"}}),_._v(" :::note 任务着陆模式包括"),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_LAND_START",target:"_blank",rel:"noopener noreferrer"}},[_._v(" MAV_CMD_DO_LAND_START "),v("OutboundLink")],1),_._v("，一个或多个位置航点和"),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[_._v(" MAV_CMD_NAV_LAND "),v("OutboundLink")],1),_._v("。\n:::")]),_._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),v("p",[_._v("当此类型设置时，PX4 会拒绝任何没有有效着陆模式的任务。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"mission_path_return"}})]),_._v(" "),v("h3",{attrs:{id:"任务路径返航类型-rtl-type-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#任务路径返航类型-rtl-type-2"}},[_._v("#")]),_._v(" 任务路径返航类型（RTL_TYPE=2）")]),_._v(" "),v("p",[_._v("This return type uses the mission (if defined) to provide a safe return "),v("em",[_._v("path")]),_._v(", and the mission landing pattern (if defined) to provide landing behaviour. If there is a mission but no mission landing pattern, the mission is flown "),v("em",[_._v("in reverse")]),_._v(". 集结点，如果有的话，将被忽略。")]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),v("p",[_._v("该行为相当复杂，因为它取决于飞行模式以及是否定义了任务和任务着陆。")])]),_._v(" "),v("p",[_._v("Mission "),v("em",[_._v("with")]),_._v(" landing pattern:")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("Mission mode:")]),_._v(' Mission is continued in "fast-forward mode" (jumps, delay and any other non-position commands ignored, loiter and other position waypoints converted to simple waypoints) and then lands.')]),_._v(" "),v("li",[v("strong",[_._v("任务模式以外的自动模式：")]),_._v(" "),v("ul",[v("li",[_._v("爬升到一个安全的"),v("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v(" 高于任何可预期的障碍物。")]),_._v(" "),v("li",[_._v("直接飞到最近的航点（对固定翼而言，不是着陆航点），然后降落到航点高度。")]),_._v(" "),v("li",[_._v("从该航点以快速模式继续执行任务。")])])]),_._v(" "),v("li",[v("strong",[_._v("手动模式:")]),_._v(" "),v("ul",[v("li",[_._v("爬升到一个安全的"),v("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v(" 高于任何可预期的障碍物。")]),_._v(" "),v("li",[_._v("直接飞到降落序列位置并下降到航点高度。")]),_._v(" "),v("li",[_._v("使用任务降落模式着陆。")])])])]),_._v(" "),v("p",[_._v("Mission "),v("em",[_._v("without")]),_._v(" landing pattern defined:")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("任务模式:")]),_._v(" "),v("ul",[v("li",[_._v("从上一个航点开始以“快退”（反向）飞行的任务\n"),v("ul",[v("li",[_._v("跳，延迟和其他任何非定位命令都会被忽略，悬停和其他位置航点将转换为简单航点。")]),_._v(" "),v("li",[_._v("VTOL 无人机在反向飞行任务之前切换到固定翼模式（如果需要）。")])])]),_._v(" "),v("li",[_._v("在到达航点1时，无人机会上升到"),v("a",{attrs:{href:"#return_altitude"}},[_._v("返回高度")]),_._v("并飞到原始位置（在该位置"),v("a",{attrs:{href:"#arrival"}},[_._v("着陆或等待")]),_._v("）。")])])]),_._v(" "),v("li",[v("strong",[_._v("任务模式以外的自动模式：")]),_._v(" "),v("ul",[v("li",[_._v("直接飞到最近的航点（对固定翼而言，不是着陆航点），然后降落到航点高度。")]),_._v(" "),v("li",[_._v("反向执行任务，就像在任务模式中触发返航模式一样（上图）。")])])]),_._v(" "),v("li",[v("strong",[_._v("Manual modes:")]),_._v(" Fly directly to home location and land.")])]),_._v(" "),v("p",[_._v("如果未定义任务，PX4 将直接飞回起始位置并着陆（集结点将被忽略）。")]),_._v(" "),v("p",[_._v("如果任务在返航模式期间发生更改，则将按照与上述相同的规则根据新任务重新评估行为（例如，如果新任务没有降落顺序并且你在一个任务中，则任务将被逆转）。")]),_._v(" "),v("p",[v("span",{attrs:{id:"safety_point_return"}})]),_._v(" "),v("h3",{attrs:{id:"最近的安全目的地返回类型-rtl-type-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最近的安全目的地返回类型-rtl-type-3"}},[_._v("#")]),_._v(" 最近的安全目的地返回类型（RTL_TYPE=3）")]),_._v(" "),v("p",[_._v("无人机在该返航类型中：")]),_._v(" "),v("ul",[v("li",[_._v("爬升到一个安全的"),v("a",{attrs:{href:"#return_altitude"}},[_._v("返航高度")]),_._v("（高于任何可预期的障碍物）。")]),_._v(" "),v("li",[_._v("飞到最近目的地的直接路径：起始位置，任务着陆模式或集结点。")]),_._v(" "),v("li",[_._v("如果目的地是飞行任务着陆模式，则按照该模式降落。")]),_._v(" "),v("li",[_._v("如果目的地是起始位置或者集结点，无人机会下降到下降高度（"),v("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v(" RTL_DESCEND_ALT ")]),_._v("），然后"),v("a",{attrs:{href:"#arrival"}},[_._v("着陆或等待")]),_._v("。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"return_altitude"}})]),_._v(" "),v("h2",{attrs:{id:"返航高度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#返航高度"}},[_._v("#")]),_._v(" 返航高度")]),_._v(" "),v("p",[_._v("无人机通常会在返航之前首先上升到安全的高度，以躲避其与目的地之间的任何障碍。")]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),v("p",[_._v("对于大多数 "),v("a",{attrs:{href:"#return_types"}},[_._v("返航类型")]),_._v(" 来说都是如此。 例外是在任务内执行"),v("a",{attrs:{href:"#mission_path_return"}},[_._v("任务路径返回")]),_._v("时，无人机遵循任务航点飞行（我们可以假定这些航点避开了障碍物）。")])]),_._v(" "),v("p",[_._v("固定翼返回高度是使用参数 "),v("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" 配置的。 多旋翼和 VTOL 无人机的返航高度使用 "),v("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" 和 "),v("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v(" 来配置，这两个参数定义了一个以目标（起始位置或者安全点）为中心的半圆锥。")]),_._v(" "),v("p",[v("img",{attrs:{src:e(951),alt:"返航模式锥体"}})]),_._v(" "),v("p",[_._v("如果无人机是：")]),_._v(" "),v("ul",[v("li",[_._v("高于"),v("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" (1)，无人机将在当前高度返航。")]),_._v(" "),v("li",[_._v("在圆锥下方，它将返回与圆锥（2）或"),v("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v(" RTL_DESCEND_ALT ")]),_._v("（以较高者为准）相交的位置。")]),_._v(" "),v("li",[_._v("在圆锥（3）之外，它将首先爬升，直到达到"),v("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v(" RTL_RETURN_ALT ")]),_._v("。")]),_._v(" "),v("li",[_._v("在圆锥内：\n"),v("ul",[v("li",[_._v("高于"),v("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" (4)，无人机将在当前高度返航。")]),_._v(" "),v("li",[_._v("低于 "),v("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" (5)，它将会先爬升到 "),v("code",[_._v("RTL_DESCEND_ALT")]),_._v("的高度。")])])])]),_._v(" "),v("p",[_._v("注意：")]),_._v(" "),v("ul",[v("li",[_._v("如果 "),v("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v(' 为 0 度，则没有 "圆锥"：\n'),v("ul",[v("li",[_._v("无人机在"),v("code",[_._v("RTL_RETURN_ALT")]),_._v("的高度或者（或以上）返航。")])])]),_._v(" "),v("li",[_._v("如果 "),v("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v(" 是90度，无人机将更大程度在 "),v("code",[_._v("RTL_DESCEND_ALT")]),_._v(" 的高度和当前高度返航。")]),_._v(" "),v("li",[_._v("无人机总是会爬升到至少"),v("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v("的高度返航。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"arrival"}})]),_._v(" "),v("h2",{attrs:{id:"悬停-降落在目的地"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#悬停-降落在目的地"}},[_._v("#")]),_._v(" 悬停/降落在目的地")]),_._v(" "),v("p",[_._v("除非执行任务着陆（例如，如果执行"),v("a",{attrs:{href:"#home_return"}},[_._v("起始位置返航")]),_._v("或"),v("a",{attrs:{href:"#safety_point_return"}},[_._v("最安全目的地返航")]),_._v("），无人机才会到达目的地，并迅速降落到"),v("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" 高度。")]),_._v(" "),v("p",[_._v("无人机会在悬停一段指定的时间（"),v("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v("）后降落。 如果 "),v("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY=-1")]),_._v(" 它将无限期悬停。")]),_._v(" "),v("p",[v("span",{attrs:{id:"default_configuration"}})]),_._v(" "),v("h2",{attrs:{id:"无人机默认行为"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#无人机默认行为"}},[_._v("#")]),_._v(" 无人机默认行为")]),_._v(" "),v("p",[_._v("The mode is "),v("em",[_._v("implemented")]),_._v(" in almost exactly the same way in all vehicle types (the exception being that fixed wing vehicles will circle rather than hover when waiting), and are hence tuned using the same parameters.")]),_._v(" "),v("p",[_._v("However the "),v("em",[_._v("default configuration")]),_._v(" is tailored to suit the vehicle type, as described below.")]),_._v(" "),v("h3",{attrs:{id:"多旋翼-mc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼-mc"}},[_._v("#")]),_._v(" 多旋翼（MC）")]),_._v(" "),v("p",[_._v("多旋翼默认使用"),v("a",{attrs:{href:"#home_return"}},[_._v("起始位置返航")]),_._v("（并使用一下配置）：")]),_._v(" "),v("ul",[v("li",[_._v("爬升到 "),v("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v("（"),v("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG=0")]),_._v(" - 未使用锥体）。")]),_._v(" "),v("li",[_._v("以直线和恒定的高度飞到起始位置（如果已经超过返航高度，它将在当前高度返航）。")]),_._v(" "),v("li",[_._v("快速下降到"),v("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v("的高度。")]),_._v(" "),v("li",[_._v("立即或多或少降落（小"),v("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v("）。")])]),_._v(" "),v("h3",{attrs:{id:"固定翼-fw"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#固定翼-fw"}},[_._v("#")]),_._v(" 固定翼（FW）")]),_._v(" "),v("p",[_._v("固定翼默认使用"),v("a",{attrs:{href:"#mission_landing_return"}},[_._v("任务降落返航")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("如果定义了任务降落，直接飞往任务降落起点，然后着陆。")]),_._v(" "),v("li",[_._v("否则直接飞到起始位置，并在半径上方圆环 "),v("a",{attrs:{href:"#NAV_LOITER_RAD"}},[_._v("NAV_LOITER_RAD")]),_._v("。")])]),_._v(" "),v("p",[_._v("If not following a mission landing, and "),v("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v(" is set to -1, the vehicle will land as described in the topic: "),v("RouterLink",{attrs:{to:"/zh/flight_modes/land.html#fixed-wing-fw"}},[_._v("Land Mode > Fixed-wing landing")]),_._v(".")],1),_._v(" "),v("p",[_._v("固定翼 "),v("a",{attrs:{href:"#return_altitude"}},[_._v("安全返回高度")]),_._v(" 仅取决于 "),v("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" (未使用 "),v("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v(" 定义的圆锥)")]),_._v(" "),v("p",[_._v("遥控器摇杆操作被忽略。")]),_._v(" "),v("h3",{attrs:{id:"垂直起降"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垂直起降"}},[_._v("#")]),_._v(" 垂直起降")]),_._v(" "),v("p",[_._v("VTOL 默认使用"),v("a",{attrs:{href:"#mission_landing_return"}},[_._v("任务降落返航")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("如果定义了任务降落，直接飞往任务降落起点，然后着陆。")]),_._v(" "),v("li",[_._v("否则直接飞向起始位置，切换到多旋翼模式，然后像多旋翼一样着陆。")])]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),v("p",[_._v("If not in a mission landing, a VTOL in FW mode will "),v("em",[_._v("always")]),_._v(" transition back to MC just before landing (ignoring "),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_FORCE_VT"}},[_._v("NAV_FORCE_VT")]),_._v(").")],1)]),_._v(" "),v("h2",{attrs:{id:"参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[_._v("#")]),_._v(" 参数")]),_._v(" "),v("p",[_._v("The RTL parameters are listed in "),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#return-mode"}},[_._v("Parameter Reference > Return Mode")]),_._v(" (and summarised below).")],1),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("参数")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("span",{attrs:{id:"RTL_TYPE"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_TYPE"}},[_._v("RTL_TYPE")])],1),_._v(" "),v("td",[_._v("返航机制（路径和目的地）。"),v("br"),v("code",[_._v("0")]),_._v("：通过直接路径返回到集结点或起始点（以最近者为准）。"),v("br"),v("code",[_._v("1")]),_._v("：返回到集结点或任务着陆模式的起点（以最近者为准），通过直接路径。 如果未定义任务着陆点或集结点，通过直接路径返回起始位置。 如果目的地是任务着陆模式，则按照该模式着陆。"),v("br"),_._v(" "),v("code",[_._v("2")]),_._v("：如果定义了着陆模式，则使用任务路径快速着陆，否则快速返回起始位置。 忽略集结点。 如果没有定义任务规划，直接飞往起始位置。"),v("br"),v("code",[_._v("3")]),_._v("：通过直接路径返航到最近目的地：起始位置，任务降落起始点或者安全点。 如果目的地是飞行任务着陆模式，则按照该模式降落。")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"RTL_RETURN_ALT"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")])],1),_._v(" "),v("td",[_._v("当"),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v("为 0 时，返航高度以米为单位（默认：60 米）。 如果已经超过这个值, 飞机将返回当前的高度。")],1)]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"RTL_DESCEND_ALT"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")])],1),_._v(" "),v("td",[_._v("最小返航高度和无人机从较高的返航高度到减速或者停止的初始下降高度（默认： 30米）。")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"RTL_LAND_DELAY"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")])],1),_._v(" "),v("td",[_._v("着陆前在"),v("code",[_._v("RTL_DESCEND_ALT")]),_._v("高度悬停时间（默认： 0.5秒）- 默认情况下这个段时间很短，因此无人机智慧减速然后立即着陆。 如果设置为-1，系统将在 "),v("code",[_._v("RTL_DESCEND_ALT")]),_._v(" 高度悬停而不是降落。 延迟能够使你为起落架的展开部署配置时间（自动触发）。")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"RTL_MIN_DIST"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_MIN_DIST"}},[_._v("RTL_MIN_DIST")])],1),_._v(" "),v("td",[_._v('能够触发无人机上升到返航高度，距离起始位置的最小水平距离由那个"锥形"指定。 如果无人机在水平方向比这个相对于起始位置的距离更近，它将在当前高度或者在'),v("code",[_._v("RTL_DESCEND_ALT")]),_._v("高度（以较高者为准）返航，而不是先上升到RTL_RETURN_ALT）。")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"RTL_CONE_ANG"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")])],1),_._v(" "),v("td",[_._v("圆锥半角决定无人机的 RTL 返航高度。 数值(度数)：0、25、45、65、80、90。 请注意，0 为“无圆锥”（始终返回"),v("code",[_._v("RTL_RETURN_ALT")]),_._v("或更高），而 90 则表示无人机必须在当前高度或在"),v("code",[_._v("RTL_DESCEND_ALT")]),_._v("高度（以较高者为准）返航。")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_RC_OVERRIDE"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")])],1),_._v(" "),v("td",[_._v("控制多旋翼（或者多旋翼模式下的 VOTL）的摇杆移动量来切换到 "),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v(" (除非无人机在处理紧急的电池失效保护)。 可以分别为自动模式和 offboard 模式启用此功能，默认情况下在自动模式下启用此功能。")],1)]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_RC_STICK_OV"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[_._v("COM_RC_STICK_OV")])],1),_._v(" "),v("td",[_._v("导致发射机切换到 "),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v(" 的摇杆移动量（如果 "),v("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")]),_._v(" 已启用）。")],1)]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"NAV_LOITER_RAD"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[_._v("NAV_LOITER_RAD")])],1),_._v(" "),v("td",[_._v("[仅限固定翼] 悬停的绕圈半径（"),v("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v("）。")])])])])])}),[],!1,null,null,null);t.default=a.exports},951:function(_,t,e){_.exports=e.p+"assets/img/rtl_cone.f0d28c19.jpg"}}]);