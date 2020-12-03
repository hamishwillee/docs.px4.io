(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{2281:function(t,e,a){"use strict";a.r(e);var s=a(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"px4-系统架构概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-系统架构概述"}},[t._v("#")]),t._v(" PX4 系统架构概述")]),t._v(" "),s("p",[t._v("PX4 由两个主要部分组成：一是 "),s("a",{attrs:{href:"#flight-stack"}},[t._v("飞行控制栈（flight stack）")]),t._v(" ，该部分主要包括状态估计和飞行控制系统；另一个是 "),s("a",{attrs:{href:"#middleware"}},[t._v("中间件")]),t._v(" ，该部分是一个通用的机器人应用层，可支持任意类型的自主机器人，主要负责机器人的内部/外部通讯和硬件整合。")]),t._v(" "),s("p",[t._v("所有的 PX4 支持的 "),s("RouterLink",{attrs:{to:"/zh/airframes/"}},[t._v("无人机机型")]),t._v(" （包括其他诸如无人船、无人车、无人水下航行器等平台）均共用同一个代码库。 整个系统采用了 "),s("a",{attrs:{href:"http://www.reactivemanifesto.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("响应式（reactive）"),s("OutboundLink")],1),t._v(" 设计，这意味着：")],1),t._v(" "),s("ul",[s("li",[t._v("所有的功能都可以被分割成若干可替换、可重复使用的部件。")]),t._v(" "),s("li",[t._v("通过异步消息传递进行通信。")]),t._v(" "),s("li",[t._v("系统可以应对不同的工作负载。")])]),t._v(" "),s("p",[s("a",{attrs:{id:"architecture"}})]),t._v(" "),s("h2",{attrs:{id:"顶层软件架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顶层软件架构"}},[t._v("#")]),t._v(" 顶层软件架构")]),t._v(" "),s("p",[t._v("下面的架构图对 PX4 的各个积木模块以及各模块之间的联系进行了一个详细的概述。 图的上半部分包括了中间件模块，而下半部分展示的则是飞行控制栈的组件。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(580),alt:"PX4 架构"}})]),t._v(" "),s("p",[t._v("源代码被拆分为许多相互独立的模块/程序 (图中使用 "),s("code",[t._v("monospace")]),t._v(" 字体表示)。 通常来说一个图中的积木块对应一个功能模块。")]),t._v(" "),s("p",[t._v("上图中的箭头表示的是各个模块之间 "),s("em",[t._v("最重要的")]),t._v(" 信息流连接。 实际运行时各模块之间信息流的连接数目比图中展示出来的要多很多，且部分数据（比如：配置参数）会被大部分模块访问。 For more information about each of these modules see the "),s("RouterLink",{attrs:{to:"/zh/modules/modules_main.html"}},[t._v("Modules & Commands Reference")]),t._v(".\n:::")],1),t._v(" "),s("p",[t._v("PX4 系统通过一个名为 "),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html"}},[t._v("uORB")]),t._v(" 的 发布-订阅 消息总线实现模块之间的相互通讯。 使用 发布-订阅 消息总线这个方案意味着：")],1),t._v(" "),s("p",[t._v("飞行控制栈是针对自主无人机设计的导航、制导和控制算法的集合。 它包括了为固定翼、旋翼和 VTOL 无人机设计的控制器，以及相应的姿态、位置估计器。")]),t._v(" "),s("ul",[s("li",[t._v("系统是 “响应式” 的 — 系统异步运行，新数据抵达时系统立即进行更新。")]),t._v(" "),s("li",[t._v("系统所有的活动和通信都是完全并行的。")]),t._v(" "),s("li",[t._v("系统组件在任何地方都可以在保证线程安全的情况下使用数据。")])]),t._v(" "),s("p",[t._v("下图展示了飞行控制栈的整体架构， 下图展示了飞行控制栈的整体架构， 它包含了从传感器数据、 RC 控制量输入 到自主飞行控制（制导控制器，Navigator ），再到电机、舵机控制（执行器，Actuators）的全套通路。")]),t._v(" "),s("h3",{attrs:{id:"飞行控制栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#飞行控制栈"}},[t._v("#")]),t._v(" 飞行控制栈")]),t._v(" "),s("p",[t._v("The flight stack is a collection of guidance, navigation and control algorithms for autonomous drones. It includes controllers for fixed wing, multirotor and VTOL airframes as well as estimators for attitude and position.")]),t._v(" "),s("p",[t._v("The following diagram shows an overview of the building blocks of the flight stack. It contains the full pipeline from sensors, RC input and autonomous flight control (Navigator), down to the motor or servo control (Actuators).")]),t._v(" "),s("p",[s("img",{attrs:{src:a(581),alt:"PX4 High-Level Flight Stack"}})]),t._v(" "),s("p",[t._v("An "),s("strong",[t._v("estimator")]),t._v(" takes one or more sensor inputs, combines them, and computes a vehicle state (for example the attitude from IMU sensor data).")]),t._v(" "),s("p",[t._v("A "),s("strong",[t._v("controller")]),t._v(" is a component that takes a setpoint and a measurement or estimated state (process variable) as input. Its goal is to adjust the value of the process variable such that it matches the setpoint. The output is a correction to eventually reach that setpoint. For example the position controller takes position setpoints as inputs, the process variable is the currently estimated position, and the output is an attitude and thrust setpoint that move the vehicle towards the desired position.")]),t._v(" "),s("p",[t._v("A "),s("strong",[t._v("mixer")]),t._v(" takes force commands (e.g. turn right) and translates them into individual motor commands, while ensuring that some limits are not exceeded. This translation is specific for a vehicle type and depends on various factors, such as the motor arrangements with respect to the center of gravity, or the vehicle's rotational inertia.")]),t._v(" "),s("p",[s("a",{attrs:{id:"middleware"}})]),t._v(" "),s("h3",{attrs:{id:"中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[t._v("#")]),t._v(" 中间件")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/zh/middleware/"}},[t._v("middleware")]),t._v(" consists primarily of device drivers for embedded sensors, communication with the external world (companion computer, GCS, etc.) and the uORB publish-subscribe message bus.")],1),t._v(" "),s("p",[t._v("消息的更新速率可以使用 "),s("code",[t._v("uorb top")]),t._v(" 命令实时 "),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html#urb-top-command"}},[t._v("查看")]),t._v(" 。")],1),t._v(" "),s("h2",{attrs:{id:"更新速率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新速率"}},[t._v("#")]),t._v(" 更新速率")]),t._v(" "),s("p",[t._v("PX4 可以在提供 POSIX-API 接口的各种操作系统上运行 （比如说 Linux, macOS, NuttX 和 QuRT）。 操作系统应该还具备某种形式的实时调度能力（例如 FIFO ）。 Other parts of the system, such as the "),s("code",[t._v("navigator")]),t._v(", don't need such a high update rate, and thus run considerably slower.")]),t._v(" "),s("p",[t._v("The message update rates can be "),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html"}},[t._v("inspected")]),t._v(" in real-time on the system by running "),s("code",[t._v("uorb top")]),t._v(".")],1),t._v(" "),s("p",[s("a",{attrs:{id:"runtime-environment"}})]),t._v(" "),s("h2",{attrs:{id:"运行时的环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行时的环境"}},[t._v("#")]),t._v(" 运行时的环境")]),t._v(" "),s("p",[t._v("PX4 runs on various operating systems that provide a POSIX-API (such as Linux, macOS, NuttX or QuRT). It should also have some form of real-time scheduling (e.g. FIFO).")]),t._v(" "),s("p",[t._v("The inter-module communication (using "),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html"}},[t._v("uORB")]),t._v(") is based on shared memory. The whole PX4 middleware runs in a single address space, i.e. memory is shared between all modules.")],1),t._v(" "),s("p",[s("a",{attrs:{href:"http://nuttx.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),s("OutboundLink")],1),t._v(" 是在飞控板上运行 PX4 的首选 RTOS 。 它是一个开源软件（BSD 许可）， 非常轻量化，运行高效且稳定。")]),t._v(" "),s("p",[t._v("There are 2 different ways that a module can be executed:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("任务 （Tasks）")]),t._v(": 模块在它自己的任务中运行, 具有自己的堆栈和进程优先级（这是更常见的方法）。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Note")]),t._v(" 在工作队列中的任务不会显示在 "),s("code",[t._v("top")]),t._v(" 中（你尽能看见工作队列本身，比如 "),s("code",[t._v("lpwork")]),t._v("）。")]),t._v(" "),s("ul",[s("li",[t._v("All the tasks must behave co-operatively as they cannot interrupt each other.")]),t._v(" "),s("li",[t._v("Multiple "),s("em",[t._v("work queue tasks")]),t._v(" can run on a queue, and there can be multiple queues.")]),t._v(" "),s("li",[t._v("A "),s("em",[t._v("work queue task")]),t._v(" is scheduled by specifying a fixed time in the future, or via uORB topic update callback.")])]),t._v(" "),s("p",[t._v("The advantage of running modules on a work queue is that it uses less RAM, and potentially results in fewer task switches. The disadvantages are that "),s("em",[t._v("work queue tasks")]),t._v(" are not allowed to sleep or poll on a message, or do blocking IO (such as reading from a file). Long-running tasks (doing heavy computation) should potentially also run in a separate task or at least a separate work queue.")])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("Tasks running on a work queue do not show up in "),s("RouterLink",{attrs:{to:"/zh/modules/modules_communication.html#uorb"}},[s("code",[t._v("uorb top")])]),t._v(" (only the work queues themselves can be seen - e.g. as "),s("code",[t._v("wq:lp_default")]),t._v("). Use "),s("RouterLink",{attrs:{to:"/zh/modules/modules_system.html#workqueue"}},[s("code",[t._v("work_queue status")])]),t._v(" to display all active work queue items.")],1)]),t._v(" "),s("h3",{attrs:{id:"后台任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台任务"}},[t._v("#")]),t._v(" 后台任务")]),t._v(" "),s("p",[t._v("在 Linux 或者 macOS 系统上， PX4 在一个单独的进程中运行，各个模块在各自线程中运行（在 NuttX 中任务和线程没有任何区别）。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("independent_task "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("px4_task_spawn_cmd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commander"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进程名称")]),t._v("\n    SCHED_DEFAULT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调度类型（RR 或 FIFO）")]),t._v("\n    SCHED_PRIORITY_DEFAULT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调度优先级")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新任务或线程的堆栈大小")]),t._v("\n    commander_thread_main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 任务（或线程的主函数）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Void 指针传递到新任务")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// （这里是命令行参数）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"操作系统相关的信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统相关的信息"}},[t._v("#")]),t._v(" 操作系统相关的信息")]),t._v(" "),s("h4",{attrs:{id:"nuttx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[t._v("#")]),t._v(" NuttX")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://nuttx.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),s("OutboundLink")],1),t._v(" is the primary RTOS for running PX4 on a flight-control board. It is open source (BSD license), light-weight, efficient and very stable.")]),t._v(" "),s("p",[t._v("Modules are executed as tasks: they have their own file descriptor lists, but they share a single address space. A task can still start one or more threads that share the file descriptor list.")]),t._v(" "),s("p",[t._v("Each task/thread has a fixed-size stack, and there is a periodic task which checks that all stacks have enough free space left (based on stack coloring).")]),t._v(" "),s("h4",{attrs:{id:"linux-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[t._v("#")]),t._v(" Linux/MacOS")]),t._v(" "),s("p",[t._v("On Linux or macOS, PX4 runs in a single process, and the modules run in their own threads (there is no distinction between tasks and threads as on NuttX).")])])}),[],!1,null,null,null);e.default=r.exports},580:function(t,e,a){t.exports=a.p+"assets/img/PX4_Architecture.fa89af6b.svg"},581:function(t,e,a){t.exports=a.p+"assets/img/PX4_High-Level_Flight-Stack.18829d0a.svg"}}]);