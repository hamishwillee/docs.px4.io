(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{327:function(t,e,r){t.exports=r.p+"assets/img/position_fixed.38e4a675.svg"},332:function(t,e,r){t.exports=r.p+"assets/img/automatic_mode.fd1fe75c.svg"},3390:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("div",{staticStyle:{float:"right",padding:"10px","margin-right":"20px"}},[o("a",{attrs:{href:"https://px4.io/"}},[o("img",{attrs:{src:r(458),title:"PX4 徽标",width:"180px"}})])]),t._v(" "),o("h1",{attrs:{id:"px4-autopilot-user-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-autopilot-user-guide"}},[t._v("#")]),t._v(" PX4 Autopilot User Guide")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://img.shields.io/badge/release-main-blue.svg",alt:"版本发布"}}),o("OutboundLink")],1),t._v(" "),o("a",{attrs:{href:"https://discuss.px4.io//",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://img.shields.io/badge/discuss-px4-ff69b4.svg",alt:"讨论"}}),o("OutboundLink")],1),t._v(" "),o("a",{attrs:{href:"https://discord.gg/dronecode",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://discordapp.com/api/guilds/1022170275984457759/widget.png?style=shield",alt:"Discord"}}),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("PX4 is the "),o("em",[t._v("Professional Autopilot")]),t._v(". 它由来自业界和学术界的世界级开发商开发，并得到活跃的全球社区的支持，为从竞速和物流无人机到地面车辆和潜水艇的各种载具提供动力。")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),o("p",[t._v("本指南包含了组装、配置和安全驾驶基于 PX4 的飞机所需的一切。 对贡献感兴趣吗 查看"),o("RouterLink",{attrs:{to:"/zh/development/development.html"}},[t._v("开发")]),t._v("部分。 :::")],1),t._v(" "),o("h2",{attrs:{id:"如何开始"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#如何开始"}},[t._v("#")]),t._v(" 如何开始？")]),t._v(" "),o("p",[t._v("所有使用者都应该阅读"),o("RouterLink",{attrs:{to:"/zh/getting_started/"}},[t._v("入门指南")]),t._v("！ 它提供了对PX4的概述，包括飞行控制栈（飞行模式和安全功能）以及支持的硬件（飞控板，飞行器，机架，数传系统，遥控系统）提供的功能。")],1),t._v(" "),o("p",[t._v("根据您想要实现的目标，以下提示将帮助您浏览本指南：")]),t._v(" "),o("p",[o("strong",[t._v("我已经拥有一架无人机，我只是想让它飞起来：")])]),t._v(" "),o("p",[t._v("如果您有支持 PX4 的到手飞（RTF）的飞行器：")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("基本配置")]),t._v(" 解释了如何将固件更新到最新版本，校准主传感器（罗盘、陀螺仪、空速等），以及如何设置遥控器和安全功能。")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/flying/"}},[t._v("飞行")]),t._v(" 教授飞行要领，包括安全飞行的地点和方式，以及如何调试解锁和飞行问题。 同样提供了关于飞行模式的详细信息。")],1)]),t._v(" "),o("p",[o("strong",[t._v("我想要从头开始组装一架使用PX4的无人机：")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),o("p",[t._v('The "supported" vehicles are listed in the '),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(". These are vehicles that have tested and tuned configurations that you can download using "),o("em",[t._v("QGroundControl")]),t._v(".")],1)])]),t._v(" "),o("p",[t._v("如果您想从头开始组装一架飞机：")]),t._v(" "),o("ul",[o("li",[t._v("选择机架 - "),o("RouterLink",{attrs:{to:"/zh/airframes/"}},[t._v("Airframe Builds")]),t._v(" 列举出了支持的机架，并且提供了详细的说明如何组装。")],1),t._v(" "),o("li",[t._v("Choose a flight controller - see "),o("RouterLink",{attrs:{to:"/zh/getting_started/flight_controller_selection.html"}},[t._v("Getting Started > Flight Controllers")]),t._v(" and "),o("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[t._v("Autopilot Hardware")]),t._v(".")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/assembly/"}},[t._v("装配")]),t._v(" 解释了如何将重要的外围设备连接到自动驾驶仪上。")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("基本配置")]),t._v(" 演示如何更新固件，并使用适合您的机身的设置对其进行配置。 本节还介绍了如何校准主传感器（罗盘、陀螺仪、空速等），并设置遥控器和安全功能。")],1)]),t._v(" "),o("p",[t._v("当您准备好飞您的飞机时，请访问"),o("RouterLink",{attrs:{to:"/zh/flying/"}},[t._v("飞行")]),t._v("部分。")],1),t._v(" "),o("p",[o("strong",[t._v("我想添加有效负载或相机：")])]),t._v(" "),o("p",[t._v("有效负载部分描述了如何添加一个相机以及如何配置PX4以使您能够运送包裹。")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/payloads/"}},[t._v("有效负载")]),t._v("描述了如何整合有效负载")],1)]),t._v(" "),o("p",[o("strong",[t._v("我想要修改已支持的机体：")])]),t._v(" "),o("p",[t._v("上文介绍了如何修改飞行控制器和基本的传感器。 为了使用新的传感器，或者您的修改对飞行特性有重大的影响：")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("外设硬件")]),t._v("提供了有关使用外部传感器的其他信息。")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("基本配置")]),t._v("解释了如何校准主传感器。")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/"}},[t._v("高级配置")]),t._v("应该用于重新/微调机架。")],1)]),t._v(" "),o("p",[o("strong",[t._v("我想在新硬件上运行 PX4 并扩展平台：")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/development/development.html"}},[t._v("开发")]),t._v("介绍了如何支持新的机架、机型，修改飞行算法，添加新的模式，集成新的硬件，从飞行控制器的外部与PX4通信，以及如何为PX4做出贡献。")],1)]),t._v(" "),o("h2",{attrs:{id:"获取帮助"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助"}},[t._v("#")]),t._v(" 获取帮助")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/contribute/support.html"}},[t._v("帮助")]),t._v("页面介绍了如何从核心开发团队和更广泛的社区获取帮助。")],1),t._v(" "),o("p",[t._v("除此以外，它还包括了：")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/contribute/support.html#forums-and-chat"}},[t._v("您可以得到帮助的论坛")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/contribute/support.html#diagnosing-problems"}},[t._v("问题诊断")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/contribute/support.html#issue-bug-reporting"}},[t._v("如何报告错误（bugs）")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/contribute/support.html#weekly-dev-call"}},[t._v("每周开发通讯")])],1)]),t._v(" "),o("h2",{attrs:{id:"报告bug-问题"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#报告bug-问题"}},[t._v("#")]),t._v(" 报告Bug & 问题")]),t._v(" "),o("p",[t._v("如果您在使用PX4的过程中遇到任何问题，请先将他们发布到"),o("RouterLink",{attrs:{to:"/zh/contribute/support.html#forums-and-chat"}},[t._v("支持论坛")]),t._v("上（即使他们可能是飞行器配置问题导致的）")],1),t._v(" "),o("p",[t._v("如果代码的问题得到了开发团队的指导，这个问题可能会被上传到"),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github here"),o("OutboundLink")],1),t._v("。 如果可能，请提供问题模板中所要求的"),o("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[t._v("飞行日志")]),t._v("和其他信息。")],1),t._v(" "),o("h2",{attrs:{id:"参与贡献"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#参与贡献"}},[t._v("#")]),t._v(" 参与贡献")]),t._v(" "),o("p",[t._v("有关如何贡献代码和文档的信息可以在"),o("RouterLink",{attrs:{to:"/zh/contribute/"}},[t._v("贡献")]),t._v("部分中找到：")],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/contribute/"}},[t._v("代码")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/contribute/docs.html"}},[t._v("文档")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/contribute/translation.html"}},[t._v("翻译")])],1)]),t._v(" "),o("h2",{attrs:{id:"翻译"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#翻译"}},[t._v("#")]),t._v(" 翻译")]),t._v(" "),o("p",[t._v("本指南有多版本的"),o("RouterLink",{attrs:{to:"/zh/contribute/translation.html"}},[t._v("翻译")]),t._v("。 您可以从语言菜单中访问到它们（右上角）：")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(459),alt:"选择语言"}})]),t._v(" "),o("h2",{attrs:{id:"许可证"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#许可证"}},[t._v("#")]),t._v(" 许可证")]),t._v(" "),o("p",[t._v("PX4 code is free to use and modify under the terms of the permissive "),o("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[t._v("BSD 3-clause license"),o("OutboundLink")],1),t._v(". 文档在"),o("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY 4.0"),o("OutboundLink")],1),t._v("中获得许可。 更多信息请参见："),o("RouterLink",{attrs:{to:"/zh/contribute/licenses.html"}},[t._v("许可证")]),t._v("。")],1),t._v(" "),o("h2",{attrs:{id:"日历-活动"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#日历-活动"}},[t._v("#")]),t._v(" 日历 & 活动")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Dronecode Calendar")]),t._v(" shows important community events for platform users and developers. 选择以下链接将其显示在您所在的时区日历中(并将其添加到您自己的日历中)：")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=Europe%2FZurich",target:"_blank",rel:"noopener noreferrer"}},[t._v("瑞士 - 苏黎世州"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=America%2FTijuana",target:"_blank",rel:"noopener noreferrer"}},[t._v("太平洋时间—蒂华纳"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=Australia%2FSydney",target:"_blank",rel:"noopener noreferrer"}},[t._v("澳大利亚 - 墨尔本/悉尼/霍巴特"),o("OutboundLink")],1)])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),o("p",[t._v("The calendar default timezone is Central European Time (CET).")])]),t._v(" "),o("iframe",{staticStyle:{"border-width":"0"},attrs:{src:"https://calendar.google.com/calendar/embed?title=Dronecode%20Calendar&mode=WEEK&height=600&wkst=1&bgcolor=%23FFFFFF&src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&color=%23691426&ctz=Europe%2FZurich",width:"800",height:"600",frameborder:"0",scrolling:"no"}}),t._v(" "),o("h3",{attrs:{id:"图标"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#图标"}},[t._v("#")]),t._v(" 图标")]),t._v(" "),o("p",[t._v("此库中使用的以下图标是单独授权的（如下所示）：")]),t._v(" "),o("p",[o("img",{attrs:{src:r(327),title:"需要定位（例如 GPS ）",width:"30px"}}),t._v(" "),o("em",[t._v("placeholder")]),t._v(" icon made by "),o("a",{attrs:{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"}},[t._v("Smashicons")]),t._v(" from "),o("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),o("a",{attrs:{href:"https://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:r(332),title:"自动模式",width:"30px"}}),t._v(" "),o("em",[t._v("camera-automatic-mode")]),t._v(" icon made by "),o("a",{attrs:{href:"https://www.freepik.com",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),o("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),o("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"治理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#治理"}},[t._v("#")]),t._v(" 治理")]),t._v(" "),o("p",[t._v("PX4飞行控制栈由 "),o("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode项目"),o("OutboundLink")],1),t._v(" 治理。")]),t._v(" "),o("p",[o("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.dronecode.org/"}},[o("img",{attrs:{src:"https://mavlink.io/assets/site/logo_dronecode.png",alt:"Dronecode 徽标",width:"110px"}})]),t._v(" "),o("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.linuxfoundation.org/projects"}},[o("img",{attrs:{src:"https://mavlink.io/assets/site/logo_linux_foundation.png",alt:"Linux 基金会徽标",width:"80px"}})])]),t._v(" "),o("div",{staticStyle:{padding:"10px"}},[t._v(" ")])])}),[],!1,null,null,null);e.default=a.exports},458:function(t,e,r){t.exports=r.p+"assets/img/logo_pro_small.cb9da21a.png"},459:function(t,e){t.exports="data:image/png;base64,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"}}]);