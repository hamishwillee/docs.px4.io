(window.webpackJsonp=window.webpackJsonp||[]).push([[1970],{3560:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"仿真调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仿真调试"}},[s._v("#")]),s._v(" 仿真调试")]),s._v(" "),a("p",[s._v("当模拟在主机上运行时，所有桌面开发工具都可用。")]),s._v(" "),a("h2",{attrs:{id:"clang-address-sanitizer-mac-os-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clang-address-sanitizer-mac-os-linux"}},[s._v("#")]),s._v(" CLANG Address Sanitizer (Mac OS, Linux)")]),s._v(" "),a("p",[s._v("The Clang address sanitizer can help to find alignment (bus) errors and other memory faults like segmentation faults. The command below sets the right compile options. 下面的命令设置了正确的编译选项。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" clean "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅需在常规编译后，第一次运行 address sanitizer 时使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PX4_ASAN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl jmavsim\n")])])]),a("h2",{attrs:{id:"valgrind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valgrind"}},[s._v("#")]),s._v(" Valgrind")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" valgrind\n")])])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" valgrind\n")])])]),a("p",[s._v("SITL can be launched with and without debugger attached and with either jMAVSim or Gazebo as simulation backend. This results in the start options below:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过 cmake 配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -C build/px4_sitl_default jmavsim___gdb\n")])])]),a("h2",{attrs:{id:"launch-gazebo-classic-sitl-without-debugger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-gazebo-classic-sitl-without-debugger"}},[s._v("#")]),s._v(" Launch Gazebo Classic SITL Without Debugger")]),s._v(" "),a("p",[s._v("By default SITL is launched without a debugger attached when using any simulator backend:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default jmavsim\n")])])]),a("p",[s._v("For Gazebo Classic (only) you can also start the simulator with a debugger attached. Note however, that you must provide the vehicle type in the simulator target, as shown below:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic_iris_gdb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic_iris_lldb\n")])])]),a("p",[s._v("This will start the debugger and launch the SITL application with Gazebo and the Iris simulator. In order to break into the debugger shell and halt the execution, hit "),a("code",[s._v("CTRL-C")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Process "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16529")]),s._v(" stopped\n* thread "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1: tid = 0x114e6d, 0x00007fff90f4430a libsystem_kernel.dylib`__read_nocancel + 10, name = 'px4', queue = 'com.apple.main-thread', stop reason = signal SIGSTOP")]),s._v("\n    frame "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#0: 0x00007fff90f4430a libsystem_kernel.dylib`__read_nocancel + 10")]),s._v("\nlibsystem_kernel.dylib`__read_nocancel:\n-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  0x7fff90f4430a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+1"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(": jae    0x7fff90f44314            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+2"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n    0x7fff90f4430c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+1"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(": movq   %rax, %rdi\n    0x7fff90f4430f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+1"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v(": jmp    0x7fff90f3fc53            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" cerror_nocancel\n    0x7fff90f44314 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+2"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(": retq\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lldb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("In order to not have the DriverFrameworks scheduling interfere with the debugging session "),a("code",[s._v("SIGCONT")]),s._v(" should be masked in LLDB and GDB:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lldb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" process handle SIGCONT -n "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])])]),a("p",[s._v("或者在 GDB 下：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" handle SIGCONT noprint nostop\n")])])]),a("p",[s._v("之后，lldb 或 gdb 脚本的行为类似于正常会话，请参阅 ldb/gdbb 文档。")]),s._v(" "),a("p",[s._v("The last parameter, the <viewer_model_debugger> triplet, is actually passed to make in the build directory, so")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic_iris_gdb\n")])])]),a("p",[s._v("等价于")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Configure with cmake")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -C build/px4_sitl_default classic_iris_gdb\n")])])]),a("p",[s._v("A full list of the available make targets in the build directory can be obtained with:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\n")])])]),a("h2",{attrs:{id:"attaching-gdb-to-running-sitl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attaching-gdb-to-running-sitl"}},[s._v("#")]),s._v(" Attaching GDB to running SITL")]),s._v(" "),a("p",[s._v("You can also start your simulation, and "),a("em",[s._v("then")]),s._v(" attach "),a("code",[s._v("gdb")]),s._v(":")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("In one terminal screen enter the command to start your simulation:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic\n")])])]),a("p",[s._v("As the script runs, note the "),a("strong",[s._v("SITL COMMAND:")]),s._v(' output text located right above the large "PX4" text. It will list the location of your px4 bin file for later use.')]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("SITL COMMAND: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<px4 bin file>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<build dir>"')]),s._v("/etc\n\n______  __   __    ___\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / /   /   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" V /   / /"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  __/   /   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  / /_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     / /^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/\n\npx4 starting.\n\nINFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("px4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" startup script: /bin/sh etc/init.d-posix/rcS "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nINFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" found model autostart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" as "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10015")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Open another terminal and type:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n")])])]),a("p",[s._v('You will want to note the PID of the process named "PX4"')]),s._v(" "),a("p",[s._v("(In this example it is 14149)")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("atlas:~/px4/main/PX4-Autopilot$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n    PID TTY          TIME CMD\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1796")]),s._v(" tty2     00:01:59 Xorg\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1836")]),s._v(" tty2     00:00:00 gnome-session-b\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14027")]),s._v(" pts/1    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14077")]),s._v(" pts/1    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14078")]),s._v(" pts/1    00:00:00 cmake\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14079")]),s._v(" pts/1    00:00:00 ninja\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14090")]),s._v(" pts/1    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14091")]),s._v(" pts/1    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14095")]),s._v(" pts/1    00:01:23 gzserver\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14149")]),s._v(" pts/1    00:02:48 px4\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14808")]),s._v(" pts/2    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Then type in the same window")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gdb "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("px4 bin "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from step "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" here"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("would suppress optimization of the targets: platforms*_posix"),a("strong",[s._v("px4_layer, modules")]),s._v("systemlib, modules"),a("strong",[s._v("uORB, examples")]),s._v("px4_simple_app, modules**uORB*_uORB_tests and px4.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gdb /home/atlas/px4/base/PX4-Autopilot/build/px4_sitl_default/bin/px4\n")])])]),a("p",[s._v("Now, you can attach to the PX4 instance by entering the PID noted in step 2.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("attach "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PID on px4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("You should now have a GDB interface to debug with.")])])]),s._v(" "),a("h2",{attrs:{id:"编译器优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译器优化"}},[s._v("#")]),s._v(" 编译器优化")]),s._v(" "),a("p",[s._v("It is possible to suppress compiler optimization for given executables and/or modules (as added by cmake with "),a("code",[s._v("add_executable")]),s._v(" or "),a("code",[s._v("add_library")]),s._v(") when configuring for "),a("code",[s._v("posix_sitl_*")]),s._v(". This can be handy when it is necessary to step through code with a debugger or print variables that would otherwise be optimized out.")]),s._v(" "),a("p",[s._v("To do so, set the environment variable "),a("code",[s._v("PX4_NO_OPTIMIZATION")]),s._v(" to be a semi-colon separated list of regular expressions that match the targets that need to be compiled without optimization. This environment variable is ignored when the configuration isn't "),a("code",[s._v("posix_sitl_*")]),s._v(".")]),s._v(" "),a("p",[s._v("would suppress optimization of the targets: platforms*_posix"),a("strong",[s._v("px4_layer, modules")]),s._v("systemlib, modules"),a("strong",[s._v("uORB, examples")]),s._v("px4_simple_app, modules**uORB*_uORB_tests and px4.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PX4_NO_OPTIMIZATION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'px4;^modules__uORB;^modules__systemlib$'")]),s._v("\n")])])]),a("p",[s._v("would suppress optimization of the targets: platforms__posix__px4_layer, modules__systemlib, modules__uORB, examples__px4_simple_app, modules__uORB__uORB_tests and px4.")]),s._v(" "),a("p",[s._v("The targets that can be matched with these regular expressions can be printed with the command:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -C build/posix_sitl_* list_cmake_targets\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);