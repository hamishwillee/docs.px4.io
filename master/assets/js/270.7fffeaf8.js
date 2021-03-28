(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{2293:function(t,e,o){"use strict";o.r(e);var r=o(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticStyle:{float:"right",padding:"10px","margin-right":"20px"}},[r("a",{attrs:{href:"http://px4.io/"}},[r("img",{attrs:{src:o(438),title:"PX4 徽标",width:"180px"}})])]),t._v(" "),r("h1",{attrs:{id:"px4-autopilot-user-guide-themeconfig-px4-version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-autopilot-user-guide-themeconfig-px4-version"}},[t._v("#")]),t._v(" PX4 Autopilot User Guide ("+t._s(t.$themeConfig.px4_version)+")")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/release-master-blue.svg",alt:"版本发布"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"http://discuss.px4.io/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/discuss-px4-ff69b4.svg",alt:"讨论"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"http://slack.px4.io",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://px4-slack.herokuapp.com/badge.svg",alt:"Slack"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("PX4 是一款"),r("em",[t._v("专业级飞控")]),t._v("。 它由来自业界和学术界的世界级开发商开发，并得到活跃的全球社区的支持，为从竞速和物流无人机到地面车辆和潜水艇的各种载具提供动力。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("本指南包含了组装、配置和安全驾驶基于 PX4 的飞机所需的一切。 Interested in contributing? Check out the "),r("RouterLink",{attrs:{to:"/zh/development/development.html"}},[t._v("Development")]),t._v(" section.")],1)]),t._v(" "),r("h2",{attrs:{id:"如何开始"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何开始"}},[t._v("#")]),t._v(" 如何开始？")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/getting_started/"}},[t._v("Getting Started")]),t._v(" should be read by all users! It provides an overview of PX4, including features provided by the flight stack (flight modes and safety features) and the supported hardware (flight controller, vehicles, airframes, telemetry systems, RC control systems).")],1),t._v(" "),r("p",[t._v("Depending on what you want to achieve, the following tips will help you navigate through this guide:")]),t._v(" "),r("p",[r("strong",[t._v("I already have a drone and I just want to fly:")])]),t._v(" "),r("p",[t._v("If you have a Ready To Fly (RTF) vehicle that supports PX4:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("基本配置")]),t._v(" 解释了如何将固件更新到最新版本，校准主传感器（罗盘、陀螺仪、空速等），以及如何设置遥控器和安全功能。")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/flying/"}},[t._v("飞行")]),t._v(" 教授飞行要领，包括安全飞行的地点和方式，以及如何调试解锁和飞行问题。 同样提供了关于飞行模式的详细信息。")],1)]),t._v(" "),r("p",[r("strong",[t._v("I want to build a drone with PX4 from scratch:")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v('The "supported" vehicles are listed in the '),r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(". These are vehicles that have tested and tuned configurations that you can download using "),r("em",[t._v("QGroundControl")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("If you want to build a vehicle from scratch:")]),t._v(" "),r("ul",[r("li",[t._v("选择机架 - "),r("RouterLink",{attrs:{to:"/zh/airframes/"}},[t._v("Airframe Builds")]),t._v(" 列举出了支持的机架，并且提供了详细的说明如何组装。")],1),t._v(" "),r("li",[t._v("选择飞控板 - 请参阅 "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_controller_selection.html"}},[t._v("入门指南 > 飞控板")]),t._v("和 "),r("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[t._v("自驾仪硬件")]),t._v("。")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/assembly/"}},[t._v("装配")]),t._v(" 解释了如何将重要的外围设备连接到自动驾驶仪上。")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("基本配置")]),t._v(" 演示如何更新固件，并使用适合您的机身的设置对其进行配置。 本节还介绍了如何校准主传感器（罗盘、陀螺仪、空速等），并设置遥控器和安全功能。")],1)]),t._v(" "),r("p",[t._v("Once you are ready to fly your vehicle, visit the "),r("RouterLink",{attrs:{to:"/zh/flying/"}},[t._v("Flying")]),t._v(" section.")],1),t._v(" "),r("p",[r("strong",[t._v("I want to add payload or a camera:")])]),t._v(" "),r("p",[t._v("The payloads section describes how to add a camera or how to configure PX4 to enable you to deliver packages.")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/payloads/"}},[t._v("Payloads")]),t._v(" describes how to integrate payloads")],1)]),t._v(" "),r("p",[r("strong",[t._v("I am modifying a supported vehicle:")])]),t._v(" "),r("p",[t._v("Modifications of the flight controller and basic sensors are covered above. In order to use new sensors, or if you have made changes that significantly affect flight characteristics:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("Peripheral Hardware")]),t._v(" provides additional information about using external sensors.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Basic Configuration")]),t._v(" explains how to calibrate the main sensors.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/"}},[t._v("Advanced Configuration")]),t._v(" should be used to re/fine-tune the airframe.")],1)]),t._v(" "),r("p",[r("strong",[t._v("I want to run PX4 on new hardware and extend the platform:")])]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/development/development.html"}},[t._v("Development")]),t._v(" explains how to support new airframes and types of vehicles, modify flight algorithms, add new modes, integrate new hardware, communicate with PX4 from outside the flight controller, and contribute to PX4.")],1)]),t._v(" "),r("h2",{attrs:{id:"获取帮助"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助"}},[t._v("#")]),t._v(" 获取帮助")]),t._v(" "),r("p",[t._v("The "),r("RouterLink",{attrs:{to:"/zh/contribute/support.html"}},[t._v("Support")]),t._v(" page explains how to get help from the core dev team and the wider community.")],1),t._v(" "),r("p",[t._v("Among other things it covers:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/contribute/support.html#forums-and-chat"}},[t._v("Forums where you can get help")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/contribute/support.html#diagnosing-problems"}},[t._v("Diagnosing issues")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/contribute/support.html#issue-bug-reporting"}},[t._v("How to report bugs")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/contribute/support.html#weekly-dev-call"}},[t._v("Weekly dev call")])],1)]),t._v(" "),r("h2",{attrs:{id:"报告bug-问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#报告bug-问题"}},[t._v("#")]),t._v(" 报告Bug & 问题")]),t._v(" "),r("p",[t._v("If you have any problems using PX4 first post them on the "),r("RouterLink",{attrs:{to:"/zh/contribute/support.html#forums-and-chat"}},[t._v("support forums")]),t._v(" (as they may be caused by vehicle configuration).")],1),t._v(" "),r("p",[t._v("If directed by the development team, code issues may be raised on "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github here"),r("OutboundLink")],1),t._v(". Where possible provide "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[t._v("flight logs")]),t._v(" and other information requested in the issue template.")],1),t._v(" "),r("h2",{attrs:{id:"参与贡献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参与贡献"}},[t._v("#")]),t._v(" 参与贡献")]),t._v(" "),r("p",[t._v("Information on how to contribute to code and documentation can be found in the "),r("RouterLink",{attrs:{to:"/zh/contribute/"}},[t._v("Contributing")]),t._v(" section:")],1),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/contribute/"}},[t._v("Code")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/contribute/docs.html"}},[t._v("Documentation")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/contribute/translation.html"}},[t._v("Translation")])],1)]),t._v(" "),r("h2",{attrs:{id:"翻译"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#翻译"}},[t._v("#")]),t._v(" 翻译")]),t._v(" "),r("p",[t._v("There are several "),r("RouterLink",{attrs:{to:"/zh/contribute/translation.html"}},[t._v("translations")]),t._v(" of this guide. You can access these from the Languages menu (top right):")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(439),alt:"Language Selector"}})]),t._v(" "),r("h2",{attrs:{id:"许可证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#许可证"}},[t._v("#")]),t._v(" 许可证")]),t._v(" "),r("p",[t._v("PX4 code is free to use and modify under the terms of the permissive "),r("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[t._v("BSD 3-clause license"),r("OutboundLink")],1),t._v(". This documentation is licensed under "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY 4.0"),r("OutboundLink")],1),t._v(". For more information see: "),r("RouterLink",{attrs:{to:"/zh/contribute/licenses.html"}},[t._v("Licences")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"日历-活动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#日历-活动"}},[t._v("#")]),t._v(" 日历 & 活动")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Dronecode Calendar")]),t._v(" shows important community events for platform users and developers. Select the links below to display the calendar in your timezone (and to add it to your own calendar):")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=Europe%2FZurich",target:"_blank",rel:"noopener noreferrer"}},[t._v("Switzerland – Zurich"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=America%2FTijuana",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pacific Time – Tijuana"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=Australia%2FSydney",target:"_blank",rel:"noopener noreferrer"}},[t._v("Australia – Melbourne/Sydney/Hobart"),r("OutboundLink")],1)])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("Calendar defaults to CET. ::: "),r("iframe",{staticStyle:{"border-width":"0"},attrs:{src:"https://calendar.google.com/calendar/embed?title=Dronecode%20Calendar&mode=WEEK&height=600&wkst=1&bgcolor=%23FFFFFF&src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&color=%23691426&ctz=Europe%2FZurich",width:"800",height:"600",frameborder:"0",scrolling:"no",mark:"crwd-mark"}})]),t._v(" "),r("h3",{attrs:{id:"图标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图标"}},[t._v("#")]),t._v(" 图标")]),t._v(" "),r("p",[t._v("The following icons used in this library are licensed separately (as shown below):")]),t._v(" "),r("p",[r("img",{attrs:{src:o(322),title:"Position fix required (e.g. GPS)",width:"30px"}}),t._v(" "),r("em",[t._v("placeholder")]),t._v(" icon made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"}},[t._v("Smashicons")]),t._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),r("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(325),title:"Automatic mode",width:"30px"}}),t._v(" "),r("em",[t._v("camera-automatic-mode")]),t._v(" icon made by "),r("a",{attrs:{href:"http://www.freepik.com",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),r("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"治理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#治理"}},[t._v("#")]),t._v(" 治理")]),t._v(" "),r("p",[t._v("The PX4 flight stack is hosted under the governance of the "),r("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode Project"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[r("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.dronecode.org/"}},[r("img",{attrs:{src:"https://mavlink.io/assets/site/logo_dronecode.png",alt:"Dronecode Logo",width:"110px"}})]),t._v(" "),r("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.linuxfoundation.org/projects"}},[r("img",{attrs:{src:"https://mavlink.io/assets/site/logo_linux_foundation.png",alt:"Linux Foundation Logo",width:"80px"}})])]),t._v(" "),r("div",{staticStyle:{padding:"10px"}},[t._v(" ")])])])}),[],!1,null,null,null);e.default=a.exports},322:function(t,e,o){t.exports=o.p+"assets/img/position_fixed.c1403cf0.svg"},325:function(t,e,o){t.exports=o.p+"assets/img/automatic_mode.ee3ebc1d.svg"},438:function(t,e,o){t.exports=o.p+"assets/img/logo_pro_small.e0fa34bd.png"},439:function(t,e){t.exports="data:image/png;base64,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"}}]);