(window.webpackJsonp=window.webpackJsonp||[]).push([[2030],{3795:function(t,e,a){"use strict";a.r(e);var o=a(19),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"适用于开发完整应用的模版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用于开发完整应用的模版"}},[t._v("#")]),t._v(" 适用于开发完整应用的模版")]),t._v(" "),a("p",[t._v("一个应用程序可以写作一个 "),a("em",[t._v("任务")]),t._v(" (一个有自己的堆栈和处理优先级的模块)或作为 "),a("em",[t._v("工作队列任务")]),t._v(" (一个运行在工作队列线程上的模块, 与工作队列上的其他任务分享堆栈和线程优先级)。 在大多数情况下，可以使用工作队列任务，因为这会减少资源的使用。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/concept/architecture.html#runtime-environment"}},[t._v("架构概述 > 运行环境")]),t._v(" 提供更多关于任务和工作队列任务的信息。")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/modules/hello_sky.html"}},[t._v("第一个应用程序教程")]),t._v(" 中所学到的所有东西都与编写完整应用程序有关。")],1)]),t._v(" "),a("h2",{attrs:{id:"工作队列任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作队列任务"}},[t._v("#")]),t._v(" 工作队列任务")]),t._v(" "),a("p",[t._v("PX4-Autopilot contains a template for writing a new application (module) that runs as a "),a("em",[t._v("work queue task")]),t._v(": "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/examples/work_item",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/examples/work_item"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("工作队列任务应用程序与普通(任务)应用程序相同。 除了它需要指定它是一个工作队列任务，并在初始化期间运行调度它本身。")]),t._v(" "),a("p",[t._v("示例显示了如何操作。 总结：")]),t._v(" "),a("ol",[a("li",[t._v("Specify the dependency on the work queue library in the cmake definition file ("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/examples/work_item/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMakeLists.txt"),a("OutboundLink")],1),t._v("):"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("...\nDEPENDS\n   px4_work_queue\n")])])])]),t._v(" "),a("li",[t._v("In addition to "),a("code",[t._v("ModuleBase")]),t._v(", the task should also derive from "),a("code",[t._v("ScheduledWorkItem")]),t._v(" (included from "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/platforms/common/include/px4_platform_common/px4_work_queue/ScheduledWorkItem.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("ScheduledWorkItem.hpp"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("在构造函数初始化中指定要添加任务的队列。 The "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/examples/work_item/WorkItemExample.cpp#L42",target:"_blank",rel:"noopener noreferrer"}},[t._v("work_item"),a("OutboundLink")],1),t._v(" example adds itself to the "),a("code",[t._v("wq_configurations::test1")]),t._v(" work queue as shown below:"),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkItemExample")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WorkItemExample")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ModuleParams")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ScheduledWorkItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MODULE_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" px4"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("wq_configurations"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The available work queues ("),a("code",[t._v("wq_configurations")]),t._v(") are listed in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/platforms/common/include/px4_platform_common/px4_work_queue/WorkQueueManager.hpp#L49",target:"_blank",rel:"noopener noreferrer"}},[t._v("WorkQueueManager.hpp"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("ol",[a("li",[t._v("实现 "),a("code",[t._v("ScheduledWorkitem:::Run()")]),t._v(' 方法来执行"work"。')]),t._v(" "),a("li",[t._v("实现"),a("code",[t._v("task_spawn")]),t._v(" 方法，指定任务是一个工作队列(使用 "),a("code",[t._v("task_id_is_work_queue")]),t._v(" id)。")]),t._v(" "),a("li",[t._v("使用其中一种调度方法使工作队列任务开始调度(本例中我们在使用"),a("code",[t._v("init")]),t._v(" 方法中使用 "),a("code",[t._v("ScheduleOnInterval")]),t._v(" )。")])]),t._v(" "),a("h2",{attrs:{id:"任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[t._v("#")]),t._v(" 任务")]),t._v(" "),a("p",[t._v("PX4/PX4-Autopilot contains a template for writing a new application (module) that runs as a task on its own stack: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/templates/template_module",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/templates/template_module"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("该模板演示了完整应用程序所需或有用的以下附加功能/方面：")]),t._v(" "),a("ul",[a("li",[t._v("访问参数并对参数更新做出反应。")]),t._v(" "),a("li",[t._v("订阅、等待 topic 更新。")]),t._v(" "),a("li",[t._v("通过 "),a("code",[t._v("start")]),t._v("/"),a("code",[t._v("stop")]),t._v("/"),a("code",[t._v("status")]),t._v(" 控制后台运行的任务。 "),a("code",[t._v("module start [<arguments>]")]),t._v(" 命令可以直接加入 "),a("RouterLink",{attrs:{to:"/zh/concept/system_startup.html"}},[t._v("启动脚本")]),t._v(" 中。")],1),t._v(" "),a("li",[t._v("命令行参数解析。")]),t._v(" "),a("li",[t._v("文档记录："),a("code",[t._v("PRINT_MODULE_*")]),t._v(" 方法有两个用处（该 API 在 "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/v1.8.0/src/platforms/px4_module.h#L381",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码"),a("OutboundLink")],1),t._v(" 中有详细记录）：\n"),a("ul",[a("li",[t._v("它们可用于在控制台键入 "),a("code",[t._v("module help")]),t._v(" 指令后输出命令行指令的用法。")]),t._v(" "),a("li",[t._v("通过脚本自动提取他们来生成 "),a("RouterLink",{attrs:{to:"/zh/modules/modules_main.html"}},[t._v("模块 & 命令参考")]),t._v(" 页面。")],1)])])])])}),[],!1,null,null,null);e.default=s.exports}}]);