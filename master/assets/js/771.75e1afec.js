(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{1528:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flight-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-tasks"}},[t._v("#")]),t._v(" Flight Tasks")]),t._v(" "),a("p",[a("em",[t._v("Flight Tasks")]),t._v(" are used within "),a("RouterLink",{attrs:{to:"/en/concept/flight_modes.html"}},[t._v("Flight Modes")]),t._v(" to provide specific movement behaviours: e.g. follow me, or flight smoothing.")],1),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("A flight task is a class in the flight task framework derived from the base class "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/flight_mode_manager/tasks/FlightTask/FlightTask.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightTask"),a("OutboundLink")],1),t._v(". Its goal is to generate setpoints for the controller from arbitrary input data, where each task implements the desired vehicle behavior for a specific mode.\nProgrammers typically override the "),a("code",[t._v("activate()")]),t._v(" and "),a("code",[t._v("update()")]),t._v(" virtual methods by calling the base task's minimal implementation and extending with the implementation of the desired behavior.\nThe "),a("code",[t._v("activate()")]),t._v(" method is called when switching to the task and allows to initialize its state and take over gently from the passed over setpoints the previous task was just applying.")]),t._v(" "),a("p",[a("code",[t._v("update()")]),t._v(" is called on every loop iteration during the execution and contains the core behavior implementation producing setpoints.")]),t._v(" "),a("p",[t._v("By convention tasks are contained in a subfolder of "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/flight_mode_manager/tasks",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot/src/modules/flight_mode_manager/tasks"),a("OutboundLink")],1),t._v(' named after the task, and the source files are named with the prefix "FlightTask".')]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Video overviews from PX4 developer summits are "),a("a",{attrs:{href:"#video"}},[t._v("provided below")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"creating-a-flight-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-flight-task"}},[t._v("#")]),t._v(" Creating a Flight Task")]),t._v(" "),a("p",[t._v("The instructions below might be used to create a task named "),a("em",[t._v("MyTask")]),t._v(":")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Create a directory for the new flight task in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/flight_mode_manager/tasks",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot/src/modules/flight_mode_manager/tasks"),a("OutboundLink")],1),t._v(".\nBy convention the directory is named after the task, so we will call it "),a("strong",[t._v("/MyTask")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mkdir PX4-Autopilot/src/modules/flight_mode_manager/tasks/MyTask\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Create empty source code and "),a("em",[t._v("cmake")]),t._v(" files for the new flight task in the "),a("em",[t._v("MyTask")]),t._v(' directory using the prefix "FlightTask":')]),t._v(" "),a("ul",[a("li",[t._v("CMakeLists.txt")]),t._v(" "),a("li",[t._v("FlightTaskMyTask.hpp")]),t._v(" "),a("li",[t._v("FlightTaskMyTask.cpp")])])]),t._v(" "),a("li",[a("p",[t._v("Update "),a("strong",[t._v("CMakeLists.txt")]),t._v(" for the new task")]),t._v(" "),a("ul",[a("li",[t._v("Copy the contents of the "),a("strong",[t._v("CMakeLists.txt")]),t._v(" for another task - e.g. "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/flight_mode_manager/tasks/Orbit/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Orbit/CMakeLists.txt"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Update the copyright to the current year"),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("############################################################################")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   Copyright (c) 2021 PX4 Development Team. All rights reserved.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("Modify the code to reflect the new task - e.g. replace "),a("code",[t._v("FlightTaskOrbit")]),t._v(" with "),a("code",[t._v("FlightTaskMyTask")]),t._v(".\nThe code will look something like this:"),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("px4_add_library")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlightTaskMyTask\n    FlightTaskMyTask.cpp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_link_libraries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlightTaskMyTask "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("PUBLIC")]),t._v(" FlightTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_include_directories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlightTaskMyTask "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("PUBLIC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_CURRENT_SOURCE_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("Update the header file (in this case "),a("strong",[t._v("FlightTaskMyTask.hpp")]),t._v("):\nMost tasks reimplement the virtual methods "),a("code",[t._v("activate()")]),t._v(" and "),a("code",[t._v("update()")]),t._v(", and in this example we also have a private variable.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("once")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FlightTask.hpp"')])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlightTaskMyTask")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token base-clause"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlightTask")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FlightTaskMyTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FlightTaskMyTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle_local_position_setpoint_s last_setpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" _origin_z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Update the cpp file as appropriate.\nThis example provides as simple implementation of "),a("strong",[t._v("FlightTaskMyTask.cpp")]),t._v(" that simply indicates that the task methods are called.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FlightTaskMyTask.hpp"')])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlightTaskMyTask")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle_local_position_setpoint_s last_setpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlightTask")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("last_setpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PX4_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FlightTaskMyTask activate was called! ret: %d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// report if activation was succesful")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlightTaskMyTask")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PX4_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FlightTaskMyTask update was called!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// report update")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Add the new task to the list of tasks to be built in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/flight_mode_manager/CMakeLists.txt#L40",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot/src/modules/flight_mode_manager/CMakeLists.txt"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("list(APPEND flight_tasks_to_add\n   Orbit\n   MyTask\n)\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Update a flight mode to ensure that the task is called.\nUsually a parameter is used to select when a particular flight task should be used.")]),t._v(" "),a("p",[t._v("For example, to enable our new "),a("code",[t._v("MyTask")]),t._v(" in multicopter Position mode:")]),t._v(" "),a("ul",[a("li",[t._v("Update "),a("code",[t._v("MPC_POS_MODE")]),t._v(" ("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mc_pos_control/mc_pos_control_params.c#L706-L721",target:"_blank",rel:"noopener noreferrer"}},[t._v("mc_pos_control_params.c"),a("OutboundLink")],1),t._v(') to add an option for selecting "MyTask" if the parameter has a previously unused value like 5:'),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("...\n* @value 4 Acceleration based input\n* @value 5 MyTask position mode implementation\n* @group Multicopter Position Control\n*/\nPARAM_DEFINE_INT32(MPC_POS_MODE, 4);\n")])])])]),t._v(" "),a("li",[t._v("Add a case for your new option in the switch for the parameter "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/flight_mode_manager/FlightModeManager.cpp#L266-L285",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightModeManager.cpp"),a("OutboundLink")],1),t._v(" to enable the task when "),a("code",[t._v("_param_mpc_pos_mode")]),t._v(" has the right value."),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// manual position control")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_param_mpc_pos_mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n     error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("switchTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlightTaskIndex"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("ManualPositionSmoothVel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add case for new task: MyTask")]),t._v("\n     error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("switchTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlightTaskIndex"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("MyTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("case 4:\n....\n...")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"test-new-flight-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-new-flight-task"}},[t._v("#")]),t._v(" Test New Flight Task")]),t._v(" "),a("p",[t._v("To test the flight task you need to run the vehicle with the task enabled.\nFor the example above, this means setting the parameter "),a("code",[t._v("MPC_POS_MODE")]),t._v(" to 5, taking off, and switching the vehicle to "),a("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The task defined above should only be tested on the simulator. The code doesn't actually create setpoints so the vehicle will not fly.")])]),t._v(" "),a("h2",{attrs:{id:"video"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),a("p",[t._v("The following videos provide an overview of flight tasks in PX4.\nThe first covers the state of the flight task framework in PX4 v1.9.\nThe second is an update, which covers the changes in PX4 v1.11.")]),t._v(" "),a("h4",{attrs:{id:"px4-flight-task-architecture-overview-px4-developer-summit-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-flight-task-architecture-overview-px4-developer-summit-2019"}},[t._v("#")]),t._v(" PX4 Flight Task Architecture Overview (PX4 Developer Summit 2019)")]),t._v(" "),a("p",[t._v("A description of how flight modes work in PX4 v1.9 (Dennis Mannhart, Matthias Grob).")]),t._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/-dkQG8YLffc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),t._v(" "),a("h4",{attrs:{id:"overview-of-multicopter-control-from-sensors-to-motors-px4-developer-summit-virtual-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-multicopter-control-from-sensors-to-motors-px4-developer-summit-virtual-2020"}},[t._v("#")]),t._v(" Overview of multicopter control from sensors to motors (PX4 Developer Summit Virtual 2020)")]),t._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/orvng_11ngQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),t._v(" "),a("p",[t._v("The relevent section of this video is an update of flight tasks in PX4 v11.1 at (9min 20sec).\nThe "),a("a",{attrs:{href:"https://static.sched.com/hosted_files/px4developersummitvirtual2020/1b/PX4%20Developer%20Summit%202020%20-%20Overview%20of%20multicopter%20control%20from%20sensors%20to%20motors.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("slides can be found here (PDF)"),a("OutboundLink")],1),t._v(" - Slides 9 and 12 are relevant.")])])}),[],!1,null,null,null);s.default=n.exports}}]);