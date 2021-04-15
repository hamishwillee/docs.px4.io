(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{1926:function(t,e,a){"use strict";a.r(e);var s=a(18),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"px4-architectural-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-architectural-overview"}},[t._v("#")]),t._v(" PX4 Architectural Overview")]),t._v(" "),s("p",[t._v("PX4 consists of two main layers: the "),s("a",{attrs:{href:"#flight-stack"}},[t._v("flight stack")]),t._v(" is an estimation and flight control system, and the "),s("a",{attrs:{href:"#middleware"}},[t._v("middleware")]),t._v(" is a general robotics layer that can support any type of autonomous robot, providing internal/external communications and hardware integration.")]),t._v(" "),s("p",[t._v("All PX4 "),s("RouterLink",{attrs:{to:"/ko/airframes/"}},[t._v("airframes")]),t._v(" share a single codebase (this includes other robotic systems like boats, rovers, submarines etc.). The complete system design is "),s("a",{attrs:{href:"http://www.reactivemanifesto.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("reactive"),s("OutboundLink")],1),t._v(", which means that:")],1),t._v(" "),s("ul",[s("li",[t._v("All functionality is divided into exchangeable and reusable components")]),t._v(" "),s("li",[t._v("Communication is done by asynchronous message passing")]),t._v(" "),s("li",[t._v("The system can deal with varying workload")])]),t._v(" "),s("p",[s("a",{attrs:{id:"architecture"}})]),t._v(" "),s("h2",{attrs:{id:"high-level-software-architecture-architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#high-level-software-architecture-architecture"}},[t._v("#")]),t._v(" High-Level Software Architecture{#architecture}")]),t._v(" "),s("p",[t._v("The diagram below provides a detailed overview of the building blocks of PX4. The top part of the diagram contains middleware blocks, while the lower section shows the components of the flight stack.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(595),alt:"PX4 Architecture"}})]),t._v(" "),s("p",[t._v("The source code is split into self-contained modules/programs (shown in "),s("code",[t._v("monospace")]),t._v(" in the diagram). Usually a building block corresponds to exactly one module.")]),t._v(" "),s("p",[t._v("The arrows show the information flow for the "),s("em",[t._v("most important")]),t._v(" connections between the modules. In reality, there are many more connections than shown, and some data (e.g. for parameters) is accessed by most of the modules. For more information about each of these modules see the "),s("RouterLink",{attrs:{to:"/ko/modules/modules_main.html"}},[t._v("Modules & Commands Reference")]),t._v(".\n:::")],1),t._v(" "),s("p",[t._v("Modules communicate with each other through a publish-subscribe message bus named "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[t._v("uORB")]),t._v(". In reality, there are many more connections than shown, and some data (e.g. for parameters) is accessed by most of the modules.")],1),t._v(" "),s("p",[t._v("The flight stack is a collection of guidance, navigation and control algorithms for autonomous drones. It includes controllers for fixed wing, multirotor and VTOL airframes as well as estimators for attitude and position.")]),t._v(" "),s("ul",[s("li",[t._v("The system is reactive — it is asynchronous and will update instantly when new data is available")]),t._v(" "),s("li",[t._v("All operations and communication are fully parallelized")]),t._v(" "),s("li",[t._v("A system component can consume data from anywhere in a thread-safe fashion")])]),t._v(" "),s("p",[t._v("The following diagram shows an overview of the building blocks of the flight stack. It contains the full pipeline from sensors, RC input and autonomous flight control (Navigator), down to the motor or servo control (Actuators).")]),t._v(" "),s("h3",{attrs:{id:"flight-stack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flight-stack"}},[t._v("#")]),t._v(" Flight Stack")]),t._v(" "),s("p",[t._v("The flight stack is a collection of guidance, navigation and control algorithms for autonomous drones. It includes controllers for fixed wing, multirotor and VTOL airframes as well as estimators for attitude and position.")]),t._v(" "),s("p",[t._v("The following diagram shows an overview of the building blocks of the flight stack. It contains the full pipeline from sensors, RC input and autonomous flight control (Navigator), down to the motor or servo control (Actuators).")]),t._v(" "),s("p",[s("img",{attrs:{src:a(596),alt:"PX4 High-Level Flight Stack"}})]),t._v(" "),s("p",[t._v("An "),s("strong",[t._v("estimator")]),t._v(" takes one or more sensor inputs, combines them, and computes a vehicle state (for example the attitude from IMU sensor data).")]),t._v(" "),s("p",[t._v("A "),s("strong",[t._v("controller")]),t._v(" is a component that takes a setpoint and a measurement or estimated state (process variable) as input. Its goal is to adjust the value of the process variable such that it matches the setpoint. The output is a correction to eventually reach that setpoint. For example the position controller takes position setpoints as inputs, the process variable is the currently estimated position, and the output is an attitude and thrust setpoint that move the vehicle towards the desired position.")]),t._v(" "),s("p",[t._v("A "),s("strong",[t._v("mixer")]),t._v(" takes force commands (e.g. turn right) and translates them into individual motor commands, while ensuring that some limits are not exceeded. This translation is specific for a vehicle type and depends on various factors, such as the motor arrangements with respect to the center of gravity, or the vehicle's rotational inertia.")]),t._v(" "),s("p",[s("a",{attrs:{id:"middleware"}})]),t._v(" "),s("h3",{attrs:{id:"middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[t._v("#")]),t._v(" Middleware")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/ko/middleware/"}},[t._v("middleware")]),t._v(" consists primarily of device drivers for embedded sensors, communication with the external world (companion computer, GCS, etc.) and the uORB publish-subscribe message bus.")],1),t._v(" "),s("p",[t._v("The message update rates can be "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html#urb-top-command"}},[t._v("inspected")]),t._v(" in real-time on the system by running "),s("code",[t._v("uorb top")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"update-rates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-rates"}},[t._v("#")]),t._v(" Update Rates")]),t._v(" "),s("p",[t._v("Since the modules wait for message updates, typically the drivers define how fast a module updates. Most of the IMU drivers sample the data at 1kHz, integrate it and publish with 250Hz. Other parts of the system, such as the "),s("code",[t._v("navigator")]),t._v(", don't need such a high update rate, and thus run considerably slower.")]),t._v(" "),s("p",[t._v("The message update rates can be "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[t._v("inspected")]),t._v(" in real-time on the system by running "),s("code",[t._v("uorb top")]),t._v(".")],1),t._v(" "),s("p",[s("a",{attrs:{id:"runtime-environment"}})]),t._v(" "),s("h2",{attrs:{id:"runtime-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runtime-environment"}},[t._v("#")]),t._v(" Runtime Environment")]),t._v(" "),s("p",[t._v("PX4 runs on various operating systems that provide a POSIX-API (such as Linux, macOS, NuttX or QuRT). It should also have some form of real-time scheduling (e.g. FIFO).")]),t._v(" "),s("p",[t._v("The inter-module communication (using "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[t._v("uORB")]),t._v(") is based on shared memory. The whole PX4 middleware runs in a single address space, i.e. memory is shared between all modules.")],1),t._v(" "),s("p",[s("a",{attrs:{href:"http://nuttx.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),s("OutboundLink")],1),t._v(" is the primary RTOS for running PX4 on a flight-control board.\n:::")]),t._v(" "),s("p",[t._v("There are 2 different ways that a module can be executed:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Tasks")]),t._v(": The module runs in its own task with its own stack and process priority (this is the more common way).")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Work queues")]),t._v(": The module runs on a shared task, meaning that it does not own a stack. Multiple tasks run on the same stack with a single priority per work queue.")]),t._v(" "),s("ul",[s("li",[t._v("All the tasks must behave co-operatively as they cannot interrupt each other.")]),t._v(" "),s("li",[t._v("Multiple "),s("em",[t._v("work queue tasks")]),t._v(" can run on a queue, and there can be multiple queues.")]),t._v(" "),s("li",[t._v("A "),s("em",[t._v("work queue task")]),t._v(" is scheduled by specifying a fixed time in the future, or via uORB topic update callback.")])]),t._v(" "),s("p",[t._v("The advantage is that it uses less RAM, but the task is not allowed to sleep or poll on a message. The disadvantages are that "),s("em",[t._v("work queue tasks")]),t._v(" are not allowed to sleep or poll on a message, or do blocking IO (such as reading from a file). Long-running tasks (doing heavy computation) should potentially also run in a separate task or at least a separate work queue.")])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Tasks running on a work queue do not show up in "),s("RouterLink",{attrs:{to:"/ko/modules/modules_communication.html#uorb"}},[s("code",[t._v("uorb top")])]),t._v(" (only the work queues themselves can be seen - e.g. as "),s("code",[t._v("wq:lp_default")]),t._v("). Use "),s("RouterLink",{attrs:{to:"/ko/modules/modules_system.html#workqueue"}},[s("code",[t._v("work_queue status")])]),t._v(" to display all active work queue items.")],1)]),t._v(" "),s("h3",{attrs:{id:"background-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-tasks"}},[t._v("#")]),t._v(" Background Tasks")]),t._v(" "),s("p",[t._v("On Linux or macOS, PX4 runs in a single process, and the modules run in their own threads (there is no distinction between tasks and threads as on NuttX).")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("independent_task "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("px4_task_spawn_cmd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commander"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Process name")]),t._v("\n    SCHED_DEFAULT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Scheduling type (RR or FIFO)")]),t._v("\n    SCHED_PRIORITY_DEFAULT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Scheduling priority")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Stack size of the new task or thread")]),t._v("\n    commander_thread_main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Task (or thread) main function")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Void pointer to pass to the new task")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (here the commandline arguments).")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"os-specific-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-specific-information"}},[t._v("#")]),t._v(" OS-Specific Information")]),t._v(" "),s("h4",{attrs:{id:"nuttx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[t._v("#")]),t._v(" NuttX")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://nuttx.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),s("OutboundLink")],1),t._v(" is the primary RTOS for running PX4 on a flight-control board. It is open source (BSD license), light-weight, efficient and very stable.")]),t._v(" "),s("p",[t._v("Modules are executed as tasks: they have their own file descriptor lists, but they share a single address space. A task can still start one or more threads that share the file descriptor list.")]),t._v(" "),s("p",[t._v("Each task/thread has a fixed-size stack, and there is a periodic task which checks that all stacks have enough free space left (based on stack coloring).")]),t._v(" "),s("h4",{attrs:{id:"linux-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[t._v("#")]),t._v(" Linux/macOS")]),t._v(" "),s("p",[t._v("On Linux or macOS, PX4 runs in a single process, and the modules run in their own threads (there is no distinction between tasks and threads as on NuttX).")])])}),[],!1,null,null,null);e.default=o.exports},595:function(t,e,a){t.exports=a.p+"assets/img/PX4_Architecture.fa89af6b.svg"},596:function(t,e,a){t.exports=a.p+"assets/img/PX4_High-Level_Flight-Stack.18829d0a.svg"}}]);