(window.webpackJsonp=window.webpackJsonp||[]).push([[789],{1569:function(a,s,t){"use strict";t.r(s);var e=t(18),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"simulation-debugging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simulation-debugging"}},[a._v("#")]),a._v(" Simulation Debugging")]),a._v(" "),t("p",[a._v("As the simulation is running on the host machine, all the desktop development tools are available.")]),a._v(" "),t("h2",{attrs:{id:"clang-address-sanitizer-mac-os-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clang-address-sanitizer-mac-os-linux"}},[a._v("#")]),a._v(" CLANG Address Sanitizer (Mac OS, Linux)")]),a._v(" "),t("p",[a._v("The Clang address sanitizer can help to find alignment (bus) errors and other memory faults like segmentation faults. The command below sets the right compile options.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# only required on first address sanitizer run after a normal build")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PX4_ASAN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl jmavsim\n")])])]),t("h2",{attrs:{id:"valgrind"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#valgrind"}},[a._v("#")]),a._v(" Valgrind")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" valgrind\n")])])]),t("p",[a._v("or")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" valgrind\n")])])]),t("p",[a._v("To use valgrind during the SITL simulation:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim___valgrind\n")])])]),t("h2",{attrs:{id:"start-combinations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-combinations"}},[a._v("#")]),a._v(" Start combinations")]),a._v(" "),t("p",[a._v("SITL can be launched with and without debugger attached and with either jMAVSim or Gazebo as simulation backend. This results in the start options below:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim___gdb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim___lldb\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default gazebo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default gazebo___gdb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default gazebo___lldb\n")])])]),t("p",[a._v("where the last parameter is the <viewer_model_debugger> triplet (using three underscores implies the default 'iris' model).\nThis will start the debugger and launch the SITL application. In order to break into the debugger shell and halt the execution, hit "),t("code",[a._v("CTRL-C")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("Process "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("16529")]),a._v(" stopped\n* thread "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#1: tid = 0x114e6d, 0x00007fff90f4430a libsystem_kernel.dylib`__read_nocancel + 10, name = 'px4', queue = 'com.apple.main-thread', stop reason = signal SIGSTOP")]),a._v("\n    frame "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#0: 0x00007fff90f4430a libsystem_kernel.dylib`__read_nocancel + 10")]),a._v("\nlibsystem_kernel.dylib`__read_nocancel:\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  0x7fff90f4430a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("+1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v(">")]),a._v(": jae    0x7fff90f44314            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("+2"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v(">")]),a._v("\n    0x7fff90f4430c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("+1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v(": movq   %rax, %rdi\n    0x7fff90f4430f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("+1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("5")]),a._v(">")]),a._v(": jmp    0x7fff90f3fc53            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" cerror_nocancel\n    0x7fff90f44314 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("+2"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v(">")]),a._v(": retq\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lldb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n")])])]),t("p",[a._v("In order to not have the DriverFrameworks scheduling interfere with the debugging session "),t("code",[a._v("SIGCONT")]),a._v(" should be masked in LLDB and GDB:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lldb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" process handle SIGCONT -n "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v(" -p "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v(" -s "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n")])])]),t("p",[a._v("Or in the case of GDB:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("(gdb) handle SIGCONT noprint nostop\n")])])]),t("p",[a._v("After that the lldb or gdb shells behave like normal sessions, please refer to the LLDB / GDB documentation.")]),a._v(" "),t("p",[a._v("The last parameter, the <viewer_model_debugger> triplet, is actually passed to make in the build directory, so")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim___gdb\n")])])]),t("p",[a._v("is equivalent with")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Configure with cmake")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -C build/px4_sitl_default jmavsim___gdb\n")])])]),t("p",[a._v("A full list of the available make targets in the build directory can\nbe obtained with:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\n")])])]),t("p",[a._v("but for your convenience, a list with just the <viewer_model_debugger> triplets\nis printed with the command")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" list_vmd_make_targets\n")])])]),t("h2",{attrs:{id:"compiler-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiler-optimization"}},[a._v("#")]),a._v(" Compiler optimization")]),a._v(" "),t("p",[a._v("It is possible to suppress compiler optimization for given executables and/or\nmodules (as added by cmake with "),t("code",[a._v("add_executable")]),a._v(" or "),t("code",[a._v("add_library")]),a._v(") when configuring\nfor "),t("code",[a._v("posix_sitl_*")]),a._v(". This can be handy when it is necessary to step through code\nwith a debugger or print variables that would otherwise be optimized out.")]),a._v(" "),t("p",[a._v("To do so, set the environment variable "),t("code",[a._v("PX4_NO_OPTIMIZATION")]),a._v(" to be a semi-colon\nseparated list of regular expressions that match the targets that need\nto be compiled without optimization. This environment variable is ignored\nwhen the configuration isn't "),t("code",[a._v("posix_sitl_*")]),a._v(".")]),a._v(" "),t("p",[a._v("For example,")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PX4_NO_OPTIMIZATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'px4;^modules__uORB;^modules__systemlib$'")]),a._v("\n")])])]),t("p",[a._v("would suppress optimization of the targets: platforms__posix__px4_layer, modules__systemlib, modules__uORB, examples__px4_simple_app, modules__uORB__uORB_tests and px4.")]),a._v(" "),t("p",[a._v("The targets that can be matched with these regular expressions can be\nprinted with the command:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -C build/posix_sitl_* list_cmake_targets\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);