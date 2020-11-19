(window.webpackJsonp=window.webpackJsonp||[]).push([[994],{2111:function(t,e,a){"use strict";a.r(e);var o=a(18),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"module-template-for-full-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-template-for-full-applications"}},[t._v("#")]),t._v(" Module Template for Full Applications")]),t._v(" "),a("p",[t._v("An application can be written to run as either a "),a("em",[t._v("task")]),t._v(" (a module with its own stack and process priority) or as a "),a("em",[t._v("work queue task")]),t._v(" (a module that runs on a work queue thread, sharing the stack and thread priorit with other tasks on the work queue). In most cases a work queue task can be used, as this minimizes resource usage.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" All the things learned in the "),a("RouterLink",{attrs:{to:"/ko/apps/hello_sky.html"}},[t._v("First Application Tutorial")]),t._v(" are relevant for writing a full application.")],1)]),t._v(" "),a("p",[a("span")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" All the things learned in the "),a("RouterLink",{attrs:{to:"/ko/modules/hello_sky.html"}},[t._v("First Application Tutorial")]),t._v(" are relevant for writing a full application.")],1)]),t._v(" "),a("h2",{attrs:{id:"work-queue-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-queue-task"}},[t._v("#")]),t._v(" Work Queue Task")]),t._v(" "),a("p",[t._v("The PX4 Firmware contains a template for writing a new application (module) that runs as a "),a("RouterLink",{attrs:{to:"/ko/concept/architecture.html#runtime-environment"}},[t._v("task")]),t._v(" on its own stack: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/templates/module",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/templates/module"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),a("p",[t._v("A work queue task application is just the same as an ordinary (task) application, except that it needs to specify that it is a work queue task, and schedule itself to run during initialisation.")]),t._v(" "),a("p",[t._v("The example shows how. In summary:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Specify the dependency on the work queue library in the cmake definition file ("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/examples/work_item/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMakeLists.txt"),a("OutboundLink")],1),t._v("):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("...\nDEPENDS\n   px4_work_queue\n")])])])]),t._v(" "),a("li",[a("p",[t._v("In addition to "),a("code",[t._v("ModuleBase")]),t._v(", the task should also derive from "),a("code",[t._v("ScheduledWorkItem")]),t._v(" (included from "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/common/include/px4_platform_common/px4_work_queue/ScheduledWorkItem.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("ScheduledWorkItem.hpp"),a("OutboundLink")],1),t._v(")")])]),t._v(" "),a("li",[a("p",[t._v("Specify the queue to add the task to in the constructor initialisation. The "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/examples/work_item/WorkItemExample.cpp#L42",target:"_blank",rel:"noopener noreferrer"}},[t._v("work_item"),a("OutboundLink")],1),t._v(" example adds itself to the "),a("code",[t._v("wq_configurations::test1")]),t._v(" work queue as shown below:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkItemExample")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WorkItemExample")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ModuleParams")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ScheduledWorkItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MODULE_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" px4"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("wq_configurations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" The available work queues ("),a("code",[t._v("wq_configurations")]),t._v(") are listed in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/common/include/px4_platform_common/px4_work_queue/WorkQueueManager.hpp#L49",target:"_blank",rel:"noopener noreferrer"}},[t._v("WorkQueueManager.hpp"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("li",[a("p",[t._v("Implement the "),a("code",[t._v("ScheduledWorkItem::Run()")]),t._v(' method to perform "work".')])]),t._v(" "),a("li",[a("p",[t._v("Implement the "),a("code",[t._v("task_spawn")]),t._v(" method, specifying that the task is a work queue (using the "),a("code",[t._v("task_id_is_work_queue")]),t._v(" id.")])]),t._v(" "),a("li",[a("p",[t._v("Schedule the work queue task using one of the scheduling methods (in the example we use "),a("code",[t._v("ScheduleOnInterval")]),t._v(" from within the "),a("code",[t._v("init")]),t._v(" method).")])])]),t._v(" "),a("h2",{attrs:{id:"tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tasks"}},[t._v("#")]),t._v(" Tasks")]),t._v(" "),a("p",[t._v("PX4/PX4-Autopilot contains a template for writing a new application (module) that runs as a task on its own stack: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/templates/template_module",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/templates/template_module"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("The template demonstrates the following additional features/aspects that are required or are useful for a full application:")]),t._v(" "),a("ul",[a("li",[t._v("Accessing parameters and reacting to parameter updates.")]),t._v(" "),a("li",[t._v("uORB subscriptions and waiting for topic updates.")]),t._v(" "),a("li",[t._v("Controlling the task that runs in the background via "),a("code",[t._v("start")]),t._v("/"),a("code",[t._v("stop")]),t._v("/"),a("code",[t._v("status")]),t._v(". The "),a("code",[t._v("module start [<arguments>]")]),t._v(" command can then be directly added to the "),a("RouterLink",{attrs:{to:"/ko/concept/system_startup.html"}},[t._v("startup script")]),t._v(".")],1),t._v(" "),a("li",[t._v("Command-line argument parsing.")]),t._v(" "),a("li",[t._v("Documentation: the "),a("code",[t._v("PRINT_MODULE_*")]),t._v(" methods serve two purposes (the API is documented "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/v1.8.0/src/platforms/px4_module.h#L381",target:"_blank",rel:"noopener noreferrer"}},[t._v("in the source code"),a("OutboundLink")],1),t._v("):\n"),a("ul",[a("li",[t._v("They are used to print the command-line usage when entering "),a("code",[t._v("module help")]),t._v(" on the console.")]),t._v(" "),a("li",[t._v("They are automatically extracted via script to generate the "),a("RouterLink",{attrs:{to:"/ko/middleware/modules_main.html"}},[t._v("Modules & Commands Reference")]),t._v(" page.")],1)])])])])}),[],!1,null,null,null);e.default=r.exports}}]);