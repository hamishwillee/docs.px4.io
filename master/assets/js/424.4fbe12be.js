(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{1595:function(e,t,a){"use strict";a.r(t);var s=a(19),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"px4-architectural-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-architectural-overview"}},[e._v("#")]),e._v(" PX4 Architectural Overview")]),e._v(" "),s("p",[e._v("PX4 consists of two main layers: the "),s("a",{attrs:{href:"#flight-stack"}},[e._v("flight stack")]),e._v(" is an estimation and flight control system,\nand the "),s("a",{attrs:{href:"#middleware"}},[e._v("middleware")]),e._v(" is a general robotics layer that can support any type of autonomous robot, providing internal/external communications and hardware integration.")]),e._v(" "),s("p",[e._v("All PX4 "),s("RouterLink",{attrs:{to:"/en/airframes/"}},[e._v("airframes")]),e._v(" share a single codebase (this includes other robotic systems like boats, rovers, submarines etc.). The complete system design is "),s("a",{attrs:{href:"http://www.reactivemanifesto.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("reactive"),s("OutboundLink")],1),e._v(", which means that:")],1),e._v(" "),s("ul",[s("li",[e._v("All functionality is divided into exchangeable and reusable components")]),e._v(" "),s("li",[e._v("Communication is done by asynchronous message passing")]),e._v(" "),s("li",[e._v("The system can deal with varying workload")])]),e._v(" "),s("p",[s("a",{attrs:{id:"architecture"}})]),e._v(" "),s("h2",{attrs:{id:"high-level-software-architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#high-level-software-architecture"}},[e._v("#")]),e._v(" High-Level Software Architecture")]),e._v(" "),s("p",[e._v("The diagram below provides a detailed overview of the building blocks of PX4.\nThe top part of the diagram contains middleware blocks, while the lower\nsection shows the components of the flight stack.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(625),alt:"PX4 Architecture"}})]),e._v(" "),s("p",[e._v("The source code is split into self-contained modules/programs (shown in "),s("code",[e._v("monospace")]),e._v(" in the\ndiagram). Usually a building block corresponds to exactly one module.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("At runtime, you can inspect which modules are executed with the "),s("code",[e._v("top")]),e._v(" command in shell, and each module can be started/stopped individually via "),s("code",[e._v("<module_name> start/stop")]),e._v(".\nWhile "),s("code",[e._v("top")]),e._v(" command is specific to NuttX shell, the other commands can be used in the SITL shell (pxh>) as well.\nFor more information about each of these modules see the "),s("RouterLink",{attrs:{to:"/en/modules/modules_main.html"}},[e._v("Modules & Commands Reference")]),e._v(".")],1)]),e._v(" "),s("p",[e._v("The arrows show the information flow for the "),s("em",[e._v("most important")]),e._v(" connections between the modules.\nIn reality, there are many more connections than shown, and some data (e.g. for parameters) is accessed by most of the modules.")]),e._v(" "),s("p",[e._v("Modules communicate with each other through a publish-subscribe message bus named "),s("RouterLink",{attrs:{to:"/en/middleware/uorb.html"}},[e._v("uORB")]),e._v(".\nThe use of the publish-subscribe scheme means that:")],1),e._v(" "),s("ul",[s("li",[e._v("The system is reactive — it is asynchronous and will update instantly when new data is available")]),e._v(" "),s("li",[e._v("All operations and communication are fully parallelized")]),e._v(" "),s("li",[e._v("A system component can consume data from anywhere in a thread-safe fashion")])]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("This architecture allows every single one of these blocks to be rapidly and easily replaced, even at runtime.")])]),e._v(" "),s("h3",{attrs:{id:"flight-stack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flight-stack"}},[e._v("#")]),e._v(" Flight Stack")]),e._v(" "),s("p",[e._v("The flight stack is a collection of guidance, navigation and control algorithms for autonomous drones.\nIt includes controllers for fixed wing, multirotor and VTOL airframes as well as estimators for attitude and position.")]),e._v(" "),s("p",[e._v("The following diagram shows an overview of the building blocks of the flight stack.\nIt contains the full pipeline from sensors, RC input and autonomous flight control (Navigator), down to the motor or servo control (Actuators).")]),e._v(" "),s("p",[s("img",{attrs:{src:a(626),alt:"PX4 High-Level Flight Stack"}})]),e._v(" "),s("p",[e._v("An "),s("strong",[e._v("estimator")]),e._v(" takes one or more sensor inputs, combines them, and computes a vehicle state (for example the attitude from IMU sensor data).")]),e._v(" "),s("p",[e._v("A "),s("strong",[e._v("controller")]),e._v(" is a component that takes a setpoint and a measurement or estimated state (process variable) as input.\nIts goal is to adjust the value of the process variable such that it matches the setpoint.\nThe output is a correction to eventually reach that setpoint.\nFor example the position controller takes position setpoints as inputs, the process variable is the currently estimated position, and the output is an attitude and thrust setpoint that move the vehicle towards the desired position.")]),e._v(" "),s("p",[e._v("A "),s("strong",[e._v("mixer")]),e._v(" takes force commands (e.g. turn right) and translates them into individual motor commands, while ensuring that some limits are not exceeded.\nThis translation is specific for a vehicle type and depends on various factors, such as the motor arrangements with respect to the center of gravity, or the vehicle's rotational inertia.")]),e._v(" "),s("p",[s("a",{attrs:{id:"middleware"}})]),e._v(" "),s("h3",{attrs:{id:"middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[e._v("#")]),e._v(" Middleware")]),e._v(" "),s("p",[e._v("The "),s("RouterLink",{attrs:{to:"/en/middleware/"}},[e._v("middleware")]),e._v(" consists primarily of device drivers for embedded sensors, communication with the external world (companion computer, GCS, etc.) and the uORB publish-subscribe message bus.")],1),e._v(" "),s("p",[e._v("In addition, the middleware includes a "),s("RouterLink",{attrs:{to:"/en/simulation/"}},[e._v("simulation layer")]),e._v(' that allows PX4 flight code to run on a desktop operating system and control a computer modeled vehicle in a simulated "world".')],1),e._v(" "),s("h2",{attrs:{id:"update-rates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-rates"}},[e._v("#")]),e._v(" Update Rates")]),e._v(" "),s("p",[e._v("Since the modules wait for message updates, typically the drivers define how fast a module updates.\nMost of the IMU drivers sample the data at 1kHz, integrate it and publish with 250Hz.\nOther parts of the system, such as the "),s("code",[e._v("navigator")]),e._v(", don't need such a high update rate, and thus run considerably slower.")]),e._v(" "),s("p",[e._v("The message update rates can be "),s("RouterLink",{attrs:{to:"/en/middleware/uorb.html"}},[e._v("inspected")]),e._v(" in real-time on the system by running "),s("code",[e._v("uorb top")]),e._v(".")],1),e._v(" "),s("p",[s("a",{attrs:{id:"runtime-environment"}})]),e._v(" "),s("h2",{attrs:{id:"runtime-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runtime-environment"}},[e._v("#")]),e._v(" Runtime Environment")]),e._v(" "),s("p",[e._v("PX4 runs on various operating systems that provide a POSIX-API (such as Linux, macOS, NuttX or QuRT).\nIt should also have some form of real-time scheduling (e.g. FIFO).")]),e._v(" "),s("p",[e._v("The inter-module communication (using "),s("RouterLink",{attrs:{to:"/en/middleware/uorb.html"}},[e._v("uORB")]),e._v(") is based on shared memory.\nThe whole PX4 middleware runs in a single address space, i.e. memory is shared between all modules.")],1),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("The system is designed such that with minimal effort it would be possible to run each module in separate address space (parts that would need to be changed include "),s("code",[e._v("uORB")]),e._v(", "),s("code",[e._v("parameter interface")]),e._v(", "),s("code",[e._v("dataman")]),e._v(" and "),s("code",[e._v("perf")]),e._v(").")])]),e._v(" "),s("p",[e._v("There are 2 different ways that a module can be executed:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Tasks")]),e._v(": The module runs in its own task with its own stack and process priority.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Work queue tasks")]),e._v(": The module runs on a shared work queue, sharing the same stack and work queue thread priority as other modules on the queue.")]),e._v(" "),s("ul",[s("li",[e._v("All the tasks must behave co-operatively as they cannot interrupt each other.")]),e._v(" "),s("li",[e._v("Multiple "),s("em",[e._v("work queue tasks")]),e._v(" can run on a queue, and there can be multiple queues.")]),e._v(" "),s("li",[e._v("A "),s("em",[e._v("work queue task")]),e._v(" is scheduled by specifying a fixed time in the future, or via uORB topic update callback.")])]),e._v(" "),s("p",[e._v("The advantage of running modules on a work queue is that it uses less RAM, and potentially results in fewer task switches. The disadvantages are that "),s("em",[e._v("work queue tasks")]),e._v(" are not allowed to sleep or poll on a message, or do blocking IO (such as reading from a file).\nLong-running tasks (doing heavy computation) should potentially also run in a separate task or at least a separate work queue.")])])]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Tasks running on a work queue do not show up in "),s("RouterLink",{attrs:{to:"/en/modules/modules_command.html#top"}},[s("code",[e._v("top")])]),e._v(" (only the work queues themselves can be seen - e.g. as "),s("code",[e._v("wq:lp_default")]),e._v(").\nUse "),s("RouterLink",{attrs:{to:"/en/modules/modules_system.html#work-queue"}},[s("code",[e._v("work_queue status")])]),e._v(" to display all active work queue items.")],1)]),e._v(" "),s("h3",{attrs:{id:"background-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-tasks"}},[e._v("#")]),e._v(" Background Tasks")]),e._v(" "),s("p",[s("code",[e._v("px4_task_spawn_cmd()")]),e._v(" is used to launch new tasks (NuttX) or threads (POSIX - Linux/macOS) that run independently from the calling (parent) task:")]),e._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[e._v("independent_task "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("px4_task_spawn_cmd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"commander"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Process name")]),e._v("\n    SCHED_DEFAULT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Scheduling type (RR or FIFO)")]),e._v("\n    SCHED_PRIORITY_DEFAULT "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Scheduling priority")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Stack size of the new task or thread")]),e._v("\n    commander_thread_main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Task (or thread) main function")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Void pointer to pass to the new task")]),e._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// (here the commandline arguments).")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h3",{attrs:{id:"os-specific-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-specific-information"}},[e._v("#")]),e._v(" OS-Specific Information")]),e._v(" "),s("h4",{attrs:{id:"nuttx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[e._v("#")]),e._v(" NuttX")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://nuttx.apache.org//",target:"_blank",rel:"noopener noreferrer"}},[e._v("NuttX"),s("OutboundLink")],1),e._v(" is the primary RTOS for running PX4 on a flight-control board.\nIt is open source (BSD license), light-weight, efficient and very stable.")]),e._v(" "),s("p",[e._v("Modules are executed as tasks: they have their own file descriptor lists, but they share a single address space.\nA task can still start one or more threads that share the file descriptor list.")]),e._v(" "),s("p",[e._v("Each task/thread has a fixed-size stack, and there is a periodic task which checks that all stacks have enough free space left (based on stack coloring).")]),e._v(" "),s("h4",{attrs:{id:"linux-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[e._v("#")]),e._v(" Linux/macOS")]),e._v(" "),s("p",[e._v("On Linux or macOS, PX4 runs in a single process, and the modules run in their own threads (there is no distinction between tasks and threads as on NuttX).")])])}),[],!1,null,null,null);t.default=o.exports},625:function(e,t,a){e.exports=a.p+"assets/img/PX4_Architecture.fa89af6b.svg"},626:function(e,t,a){e.exports=a.p+"assets/img/PX4_High-Level_Flight-Stack.18829d0a.svg"}}]);