(window.webpackJsonp=window.webpackJsonp||[]).push([[1667],{3121:function(t,e,o){"use strict";o.r(e);var s=o(19),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"适用于开发完整应用的模版"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#适用于开发完整应用的模版"}},[t._v("#")]),t._v(" 适用于开发完整应用的模版")]),t._v(" "),o("p",[t._v("一个应用程序可以写作一个 "),o("em",[t._v("任务")]),t._v(" (一个有自己的堆栈和处理优先级的模块)或作为 "),o("em",[t._v("工作队列任务")]),t._v(" (一个运行在工作队列线程上的模块, 与工作队列上的其他任务分享堆栈和线程优先级)。 在大多数情况下，可以使用工作队列任务，因为这会减少资源的使用。")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/concept/architecture.html#runtime-environment"}},[t._v("架构概述 > 运行环境")]),t._v(" 提供更多关于任务和工作队列任务的信息。")],1)]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/modules/hello_sky.html"}},[t._v("第一个应用程序教程")]),t._v(" 中所学到的所有东西都与编写完整应用程序有关。")],1)]),t._v(" "),o("h2",{attrs:{id:"工作队列任务"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#工作队列任务"}},[t._v("#")]),t._v(" 工作队列任务")]),t._v(" "),o("p",[t._v("PX4-Autopilot包含一个用于创建一个通过 "),o("em",[t._v("工作队列任务")]),t._v("运行的新应用程序(模块)的模板，: "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/examples/work_item",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/examples es/work_item"),o("OutboundLink")],1),t._v("。")]),t._v(" "),o("p",[t._v("工作队列任务应用程序与普通(任务)应用程序相同。 除了它需要指定它是一个工作队列任务，并在初始化期间运行调度它本身。")]),t._v(" "),o("p",[t._v("示例显示了如何操作。 总结：")]),t._v(" "),o("ol",[o("li",[t._v("在 cmake 定义文件("),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/examples/work_item/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMakeLists.txt"),o("OutboundLink")],1),t._v(")中的指定工作队列库的依赖关系:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("...\nDEPENDS\n   px4_work_queue\n")])])])]),t._v(" "),o("li",[t._v("除了 "),o("code",[t._v("ModuleBase")]),t._v(", 任务还源自 "),o("code",[t._v("ScheduledWorkitem")]),t._v(" (包含在 "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/common/include/px4_platform_common/px4_work_queue/ScheduledWorkItem.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("ScheduledWorkItem.hpp"),o("OutboundLink")],1),t._v(")")]),t._v(" "),o("li",[t._v("在构造函数初始化中指定要添加任务的队列。 "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/examples/work_item/WorkItemExample.cpp#L42",target:"_blank",rel:"noopener noreferrer"}},[t._v("work_item"),o("OutboundLink")],1),t._v(" 示例添加自身到 "),o("code",[t._v("wq_configurations::test1")]),t._v(" 工作队列，如下所示："),o("div",{staticClass:"language-cpp extra-class"},[o("pre",{pre:!0,attrs:{class:"language-cpp"}},[o("code",[o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkItemExample")]),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("WorkItemExample")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("ModuleParams")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("ScheduledWorkItem")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MODULE_NAME"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" px4"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("wq_configurations"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("test1"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("可用的工作队列("),o("code",[t._v("wq_configurations")]),t._v(") 列于 "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/common/include/px4_platform_common/px4_work_queue/WorkQueueManager.hpp#L49",target:"_blank",rel:"noopener noreferrer"}},[t._v("WorkQueueManager.hpp"),o("OutboundLink")],1),t._v(" 中。")])]),t._v(" "),o("ol",[o("li",[t._v("实现 "),o("code",[t._v("ScheduledWorkitem:::Run()")]),t._v(' 方法来执行"work"。')]),t._v(" "),o("li",[t._v("实现"),o("code",[t._v("task_spawn")]),t._v(" 方法，指定任务是一个工作队列(使用 "),o("code",[t._v("task_id_is_work_queue")]),t._v(" id)。")]),t._v(" "),o("li",[t._v("使用其中一种调度方法使工作队列任务开始调度(本例中我们在使用"),o("code",[t._v("init")]),t._v(" 方法中使用 "),o("code",[t._v("ScheduleOnInterval")]),t._v(" )。")])]),t._v(" "),o("h2",{attrs:{id:"任务"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[t._v("#")]),t._v(" 任务")]),t._v(" "),o("p",[t._v("PX4/PX4-Autopilot包含一个用于写一个新的应用程序(模块)的模板，它作为一个任务运行在自己的堆栈上： "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/templates/template_module",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/templates/template_module"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("该模板演示了完整应用程序所需或有用的以下附加功能/方面：")]),t._v(" "),o("ul",[o("li",[t._v("访问参数并对参数更新做出反应。")]),t._v(" "),o("li",[t._v("订阅、等待 topic 更新。")]),t._v(" "),o("li",[t._v("通过 "),o("code",[t._v("start")]),t._v("/"),o("code",[t._v("stop")]),t._v("/"),o("code",[t._v("status")]),t._v(" 控制后台运行的任务。 "),o("code",[t._v("module start [<arguments>]")]),t._v(" 命令可以直接加入 "),o("RouterLink",{attrs:{to:"/zh/concept/system_startup.html"}},[t._v("启动脚本")]),t._v(" 中。")],1),t._v(" "),o("li",[t._v("命令行参数解析。")]),t._v(" "),o("li",[t._v("文档记录："),o("code",[t._v("PRINT_MODULE_*")]),t._v(" 方法有两个用处（该 API 在 "),o("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/v1.8.0/src/platforms/px4_module.h#L381",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码"),o("OutboundLink")],1),t._v(" 中有详细记录）：\n"),o("ul",[o("li",[t._v("它们可用于在控制台键入 "),o("code",[t._v("module help")]),t._v(" 指令后输出命令行指令的用法。")]),t._v(" "),o("li",[t._v("通过脚本自动提取他们来生成 "),o("RouterLink",{attrs:{to:"/zh/modules/modules_main.html"}},[t._v("模块 & 命令参考")]),t._v(" 页面。")],1)])])])])}),[],!1,null,null,null);e.default=a.exports}}]);