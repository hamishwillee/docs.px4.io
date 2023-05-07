(window.webpackJsonp=window.webpackJsonp||[]).push([[1767],{3240:function(s,a,t){"use strict";t.r(a);var e=t(19),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"仿真调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仿真调试"}},[s._v("#")]),s._v(" 仿真调试")]),s._v(" "),t("p",[s._v("当模拟在主机上运行时，所有桌面开发工具都可用。")]),s._v(" "),t("h2",{attrs:{id:"clang-address-sanitizer-mac-os-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clang-address-sanitizer-mac-os-linux"}},[s._v("#")]),s._v(" CLANG Address Sanitizer (Mac OS, Linux)")]),s._v(" "),t("p",[s._v("The Clang address sanitizer can help to find alignment (bus) errors and other memory faults like segmentation faults. The command below sets the right compile options. 下面的命令设置了正确的编译选项。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" clean "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅需在常规编译后，第一次运行 address sanitizer 时使用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PX4_ASAN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl jmavsim\n")])])]),t("h2",{attrs:{id:"valgrind"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#valgrind"}},[s._v("#")]),s._v(" Valgrind")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" valgrind\n")])])]),t("p",[s._v("或")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" valgrind\n")])])]),t("p",[s._v("SITL can be launched with and without debugger attached and with either jMAVSim or Gazebo as simulation backend. This results in the start options below:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过 cmake 配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -C build/px4_sitl_default jmavsim___gdb\n")])])]),t("h2",{attrs:{id:"launch-gazebo-classic-sitl-without-debugger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launch-gazebo-classic-sitl-without-debugger"}},[s._v("#")]),s._v(" Launch Gazebo Classic SITL Without Debugger")]),s._v(" "),t("p",[s._v("By default SITL is launched without a debugger attached when using any simulator backend:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default jmavsim\n")])])]),t("p",[s._v("For Gazebo Classic (only) you can also start the simulator with a debugger attached. Note however, that you must provide the vehicle type in the simulator target, as shown below:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic_iris_gdb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic_iris_lldb\n")])])]),t("p",[s._v("This will start the debugger and launch the SITL application with Gazebo and the Iris simulator. In order to break into the debugger shell and halt the execution, hit "),t("code",[s._v("CTRL-C")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Process "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16529")]),s._v(" stopped\n* thread "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1: tid = 0x114e6d, 0x00007fff90f4430a libsystem_kernel.dylib`__read_nocancel + 10, name = 'px4', queue = 'com.apple.main-thread', stop reason = signal SIGSTOP")]),s._v("\n    frame "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#0: 0x00007fff90f4430a libsystem_kernel.dylib`__read_nocancel + 10")]),s._v("\nlibsystem_kernel.dylib`__read_nocancel:\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  0x7fff90f4430a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(": jae    0x7fff90f44314            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+2"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n    0x7fff90f4430c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(": movq   %rax, %rdi\n    0x7fff90f4430f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v(": jmp    0x7fff90f3fc53            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" cerror_nocancel\n    0x7fff90f44314 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+2"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(": retq\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lldb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])])]),t("p",[s._v("In order to not have the DriverFrameworks scheduling interfere with the debugging session "),t("code",[s._v("SIGCONT")]),s._v(" should be masked in LLDB and GDB:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lldb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" process handle SIGCONT -n "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])])]),t("p",[s._v("或者在 GDB 下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("(gdb) handle SIGCONT noprint nostop\n")])])]),t("p",[s._v("之后，lldb 或 gdb 脚本的行为类似于正常会话，请参阅 ldb/gdbb 文档。")]),s._v(" "),t("p",[s._v("最后一个参数, <viewer_model_debugger> 三元组，实际上是传递到生成目录中，因此")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic_iris_gdb\n")])])]),t("p",[s._v("等价于")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Configure with cmake")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -C build/px4_sitl_default classic_iris_gdb\n")])])]),t("p",[s._v("A full list of the available make targets in the build directory can be obtained with:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\n")])])]),t("h2",{attrs:{id:"attaching-gdb-to-running-sitl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attaching-gdb-to-running-sitl"}},[s._v("#")]),s._v(" Attaching GDB to running SITL")]),s._v(" "),t("p",[s._v("You can also start your simulation, and "),t("em",[s._v("then")]),s._v(" attach "),t("code",[s._v("gdb")]),s._v(":")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("In one terminal screen enter the command to start your simulation:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic\n")])])]),t("p",[s._v("As the script runs, note the "),t("strong",[s._v("SITL COMMAND:")]),s._v(' output text located right above the large "PX4" text. It will list the location of your px4 bin file for later use.')]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("SITL COMMAND: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<px4 bin file>"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<build dir>"')]),s._v("/etc\n\n______  __   __    ___ \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / /   /   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" V /   / /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  __/   /   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  / /_"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     / /^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/\n\npx4 starting.\n\nINFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("px4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" startup script: /bin/sh etc/init.d-posix/rcS "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nINFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("init"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" found model autostart "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" as "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SYS_AUTOSTART")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10015")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Open another terminal and type:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n")])])]),t("p",[s._v('You will want to note the PID of the process named "PX4"')]),s._v(" "),t("p",[s._v("(In this example it is 14149)")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("atlas:~/px4/main/PX4-Autopilot$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n    PID TTY          TIME CMD\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1796")]),s._v(" tty2     00:01:59 Xorg\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1836")]),s._v(" tty2     00:00:00 gnome-session-b\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14027")]),s._v(" pts/1    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14077")]),s._v(" pts/1    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14078")]),s._v(" pts/1    00:00:00 cmake\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14079")]),s._v(" pts/1    00:00:00 ninja\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14090")]),s._v(" pts/1    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14091")]),s._v(" pts/1    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14095")]),s._v(" pts/1    00:01:23 gzserver\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14149")]),s._v(" pts/1    00:02:48 px4\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14808")]),s._v(" pts/2    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Then type in the same window")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gdb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("px4 bin "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from step "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" here"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("would suppress optimization of the targets: platforms*_posix"),t("strong",[s._v("px4_layer, modules")]),s._v("systemlib, modules"),t("strong",[s._v("uORB, examples")]),s._v("px4_simple_app, modules**uORB*_uORB_tests and px4.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gdb /home/atlas/px4/base/PX4-Autopilot/build/px4_sitl_default/bin/px4\n")])])]),t("p",[s._v("Now, you can attach to the PX4 instance by entering the PID noted in step 2.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("attach "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PID on px4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("You should now have a GDB interface to debug with.")])])]),s._v(" "),t("h2",{attrs:{id:"编译器优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译器优化"}},[s._v("#")]),s._v(" 编译器优化")]),s._v(" "),t("p",[s._v("It is possible to suppress compiler optimization for given executables and/or modules (as added by cmake with "),t("code",[s._v("add_executable")]),s._v(" or "),t("code",[s._v("add_library")]),s._v(") when configuring for "),t("code",[s._v("posix_sitl_*")]),s._v(". This can be handy when it is necessary to step through code with a debugger or print variables that would otherwise be optimized out.")]),s._v(" "),t("p",[s._v("To do so, set the environment variable "),t("code",[s._v("PX4_NO_OPTIMIZATION")]),s._v(" to be a semi-colon separated list of regular expressions that match the targets that need to be compiled without optimization. This environment variable is ignored when the configuration isn't "),t("code",[s._v("posix_sitl_*")]),s._v(".")]),s._v(" "),t("p",[s._v("would suppress optimization of the targets: platforms*_posix"),t("strong",[s._v("px4_layer, modules")]),s._v("systemlib, modules"),t("strong",[s._v("uORB, examples")]),s._v("px4_simple_app, modules**uORB*_uORB_tests and px4.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PX4_NO_OPTIMIZATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'px4;^modules__uORB;^modules__systemlib$'")]),s._v("\n")])])]),t("p",[s._v("The targets that can be matched with these regular expressions can be printed with the command:")]),s._v(" "),t("p",[s._v("The targets that can be matched with these regular expressions can be printed with the command:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -C build/posix_sitl_* list_cmake_targets\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);