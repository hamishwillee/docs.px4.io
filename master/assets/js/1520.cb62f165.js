(window.webpackJsonp=window.webpackJsonp||[]).push([[1520],{2776:function(t,e,a){"use strict";a.r(e);var _=a(19),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"系统启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统启动"}},[t._v("#")]),t._v(" 系统启动")]),t._v(" "),a("p",[t._v("PX4 系统的启动由 shell 脚本文件控制。 在 NuttX 平台上这些脚本文件位于 "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),a("OutboundLink")],1),t._v(" 文件夹下 - 该文件夹下的部分脚本文件也适用于 Posix (Linux/MacOS) 平台。 仅适用于 Posix 平台的启动脚本文件可以在 "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/ROMFS/px4fmu_common/init.d-posix",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d-posix"),a("OutboundLink")],1),t._v(" 文件夹下找到。")]),t._v(" "),a("p",[t._v("上述文件夹中以数字和下划线为文件名开头的脚本文件（例如，"),a("code",[t._v("10000_airplane")]),t._v("）都是封装好的机架构型配置文件。 这些文件在编译时会被导出至 "),a("code",[t._v("airframes.xml")]),t._v(" 文件中，"),a("a",{attrs:{href:"http://qgroundcontrol.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),a("OutboundLink")],1),t._v(" 通过解析该 xml 文件得到可以在 UI 界面上进行选择的机架构型。 如何添加一个新的配置请参阅 "),a("RouterLink",{attrs:{to:"/zh/airframes/adding_a_new_frame.html"}},[t._v("这里")]),t._v("。")],1),t._v(" "),a("p",[t._v("其它的文件则是系统常规启动逻辑的一部分。 在启动过程中第一个被系统执行的脚本文件是 "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/ROMFS/px4fmu_common/init.d/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d/rcS"),a("OutboundLink")],1),t._v(" （Posix 平台则为 "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d-posix/rcS"),a("OutboundLink")],1),t._v(" on Posix)），该脚本会调用所有的其它脚本。")]),t._v(" "),a("p",[t._v("根据 PX4 运行的操作系统将本文后续内容分成了如下各小节。")]),t._v(" "),a("h2",{attrs:{id:"posix-linux-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#posix-linux-macos"}},[t._v("#")]),t._v(" Posix (Linux/MacOS)")]),t._v(" "),a("p",[t._v("在 Posix 操作系统上，系统的 shell 将会作为脚本文件的解释器（例如， 在 Ubuntu 中 /bin/sh 与 Dash 建立了符号链接）。 为了使 PX4 可以在 Posix 中正常运行，需要做到以下几点：")]),t._v(" "),a("ul",[a("li",[t._v("PX4 的各个模块需要看起来像系统的单个可执行文件， 这一点可以通过创建符号链接坐到。 这一点可以通过创建符号链接坐到。 每一个模块都根据命名规则： "),a("code",[t._v("px4-<module> -> px4")]),t._v(" 在编译文件夹 "),a("code",[t._v("bin")]),t._v(" 下创建了相应的符号链接。 在执行命令时，系统将检查命令的二进制路径 ("),a("code",[t._v("argv[0]")]),t._v(")，如果系统发现该命令是 PX4 的一个模块（命令名称以 "),a("code",[t._v("px4-")]),t._v(" 起头），那么系统将会把这个命令发送给 PX4 主实例（见下文）。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("px4-")]),t._v(" prefix is used to avoid conflicts with system commands (e.g. "),a("code",[t._v("shutdown")]),t._v("), and it also allows for simple tab completion by typing "),a("code",[t._v("px4-<TAB>")]),t._v(".")])]),t._v(" "),a("ul",[a("li",[t._v("Shell 需要知道在那里可以找到上述符号链接。 为此，在运行启动脚本前会将包含符号链接文件的 "),a("code",[t._v("bin")]),t._v(" 目录添加至操作系统的 "),a("code",[t._v("PATH")]),t._v(" 环境变量中。")]),t._v(" "),a("li",[t._v("Shell 将每个模块作为一个新的 (客户端) 进程进行启动， Shell 将每个模块作为一个新的 (客户端) 进程进行启动， 每个客户端进程都需要与 PX4 主实例（服务器）进行通讯，在该实例中实际的模块以线程的形式运行。 该过程通过 "),a("a",{attrs:{href:"http://man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UNIX socket"),a("OutboundLink")],1),t._v(" 完成实现。 服务器侦听一个 socket，然后客户端将连接该 socket 并通过它发送指令。 服务器收到客户端的指令后将指令运行的输出结果及返回代码重新发送给客户端。")]),t._v(" "),a("li",[t._v("启动脚本直接调用各模块，例如 "),a("code",[t._v("commander start")]),t._v(", 而不使用 "),a("code",[t._v("px4-")]),t._v(" 这个前缀。 这一点可以通过设置别名（aliase）来实现："),a("code",[t._v("bin/px4-alias.sh")]),t._v(" 文件会给每一个模块以 "),a("code",[t._v("alias <module>=px4-<module>")]),t._v(" 的形式设置好模块的别名。")]),t._v(" "),a("li",[a("code",[t._v("rcS")]),t._v(" 脚本由 PX4 主实例调用执行。 该脚本并不开启任何模块，它仅仅首先更新 "),a("code",[t._v("PATH")]),t._v(" 环境变量然后以 "),a("code",[t._v("rcS")]),t._v(" 文件作为值参数开启操作系统的 shell 。")]),t._v(" "),a("li",[t._v("除此之外，在进行多飞行器仿真时还可以启动多个服务器实例。 客户端可通过 "),a("code",[t._v("--instance")]),t._v(" 选择服务器实例。 该实例可通过 "),a("code",[t._v("$px4_instance")]),t._v(" 变量在脚本中使用。")])]),t._v(" "),a("p",[t._v("当 PX4 在操作系统上处于运行状态时可以从任意终端直接运行各个模块。 例如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd <Firmware>/build/px4_sitl_default/bin\n./px4-commander takeoff\n./px4-listener sensor_accel\n")])])]),a("h3",{attrs:{id:"调试系统的启动过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试系统的启动过程"}},[t._v("#")]),t._v(" 调试系统的启动过程")]),t._v(" "),a("p",[t._v("通常，所有模块都被编入一个 PX4 可执行程序。 然而，在Posix上，可以将模块编译成单独的文件，可以使用 "),a("code",[t._v("dyn")]),t._v(" 命令加载到 PX4。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dyn ./test.px4mod\n")])])]),a("h2",{attrs:{id:"nuttx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[t._v("#")]),t._v(" NuttX")]),t._v(" "),a("p",[t._v("软件组件的失效可以不中止 PX4 系统的启动， 这一特性可以在启动脚本中使用 "),a("code",[t._v("set +e")]),t._v(" 来实现。")]),t._v(" "),a("h3",{attrs:{id:"替换系统的启动文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换系统的启动文件"}},[t._v("#")]),t._v(" 替换系统的启动文件")]),t._v(" "),a("p",[t._v("软件组件的失效不会中止 PX4 系统的启动， 可以在启动脚本中使用 "),a("code",[t._v("set +e")]),t._v(" 来控制。")]),t._v(" "),a("p",[t._v("连接至 "),a("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[t._v("系统控制台（system console）")]),t._v(" 后重启飞控板可以进行对系统启动引导序列进行调试。 由此生成的启动引导日志文件中包含了引导序列的详细信息，同时也应包含了解释启动中止的线索。")],1),t._v(" "),a("h4",{attrs:{id:"启动失败的常见原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动失败的常见原因"}},[t._v("#")]),t._v(" 启动失败的常见原因")]),t._v(" "),a("ul",[a("li",[t._v("对于自定义的应用程序：系统用尽了 RAM 资源。 运行 "),a("code",[t._v("free")]),t._v(" 命令以查看可用 RAM 的大小。")]),t._v(" "),a("li",[t._v("引发堆栈跟踪的软件故障或者断言。")])]),t._v(" "),a("h3",{attrs:{id:"自定义系统的启动文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义系统的启动文件"}},[t._v("#")]),t._v(" 自定义系统的启动文件")]),t._v(" "),a("p",[t._v("在大多数情况下自定义默认启动项是更好的做法，实现方法见下文。 如果需要替换整个引导文件，请创建文件： "),a("code",[t._v("/fs/microsd/etc/rc.txt")]),t._v(" ，该文件位于 microSD 卡的根目录下的 "),a("code",[t._v("etc")]),t._v(" 文件夹下。 如果此文件存在，系统中的任何内容都不会自动启动。")]),t._v(" "),a("h3",{attrs:{id:"自定义系统的启动文件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义系统的启动文件-2"}},[t._v("#")]),t._v(" 自定义系统的启动文件")]),t._v(" "),a("p",[t._v("自定义系统启动的最佳方法是引入 "),a("RouterLink",{attrs:{to:"/zh/airframes/adding_a_new_frame.html"}},[t._v("新的机架配置")]),t._v(" 。 如果只需要一些小的调整（比如多启动一个应用程序，或只是启用一个不同的混控器)，那么你可以在启动过程中使用特殊的钩子（hook）来达成目的。")],1),t._v(" "),a("p",[t._v("主要有三类钩子。 主要有三类钩子（hook）， 需要注意的是 microsd 的根目录是挂载在操作系统中的 "),a("code",[t._v("/fs/microsd")]),t._v(" 目录下的。\n:::")]),t._v(" "),a("p",[a("code",[t._v("config.txt")]),t._v(" 文件可用于修改 shell 变量。 该文件会在主系统完成配置后、 进行启动"),a("em",[t._v("前")]),t._v("进行加载。")]),t._v(" "),a("ul",[a("li",[t._v("/fs/microsd/etc/config.txt")]),t._v(" "),a("li",[t._v("/fs/microsd/etc/extras.txt")]),t._v(" "),a("li",[t._v("/fs/microsd/etc/mixers/NAME_OF_MIXER")])]),t._v(" "),a("h4",{attrs:{id:"自定义配置-config-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置-config-txt"}},[t._v("#")]),t._v(" 自定义配置（config.txt）")]),t._v(" "),a("p",[a("code",[t._v("extras.txt")]),t._v(" 可用于在主系统启动后启动额外的应用程序。 通常这些额外应用程序可以载荷控制器或类似的可选自定义组件。")]),t._v(" "),a("h4",{attrs:{id:"启动额外的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动额外的应用"}},[t._v("#")]),t._v(" 启动额外的应用")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("extras.txt")]),t._v(" can be used to start additional applications after the main system boot. Typically these would be payload controllers or similar optional custom components.")]),t._v(" "),a("p",[t._v("默认情况下系统将从 "),a("code",[t._v("/etc/mixers")]),t._v(" 文件夹下载入混控器。 如果在 "),a("code",[t._v("/fs/microsd/etc/mixers")]),t._v(" 文件夹下存在一个同名文件，则后者将会替代默认的混控器被系统载入。 这就使得我们可以在不重新编译固件的情况下对混控器文件进行自定义修改。")]),t._v(" "),a("p",[t._v("下面的示例演示了如何添加一个辅助（AUX）混控器：")]),t._v(" "),a("ul",[a("li",[t._v("在 SD 卡上创建一个文件 "),a("code",[t._v("etc/extras.txt")]),t._v(" ，该文件应包含如下内容： "),a("code",[t._v("custom_app start")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("custom_app start\n")])])])]),t._v(" "),a("li",[t._v("搭配使用 "),a("code",[t._v("set +e")]),t._v(" 和 "),a("code",[t._v("set -e")]),t._v(" 可以将命令设置为可选命令："),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("set +e\n")])])])])]),t._v(" "),a("p",[t._v("optional_app start      # 即便 optional_app 未知或者失效也不会导致系统启动失败\nset -e")]),t._v(" "),a("p",[t._v("mandatory_app start     # 如果 mandatory_app 未知或者失效则会导致系统启动中断\n```")]),t._v(" "),a("h4",{attrs:{id:"启动自定义的混控器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动自定义的混控器"}},[t._v("#")]),t._v(" 启动自定义的混控器")]),t._v(" "),a("p",[t._v("By default the system loads the mixer from "),a("code",[t._v("/etc/mixers")]),t._v(". If a file with the same name exists in "),a("code",[t._v("/fs/microsd/etc/mixers")]),t._v(" this file will be loaded instead. This allows to customize the mixer file without the need to recompile the Firmware.")]),t._v(" "),a("h5",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("The following example shows how to add a custom aux mixer:")]),t._v(" "),a("ul",[a("li",[t._v("在 SD 卡中创建文件 "),a("code",[t._v("etc/mixers/gimbal.aux.mix")]),t._v(" ，并将你的混控器设定内容写入该文件内。")]),t._v(" "),a("li",[t._v("为了使用该混控器，再创建一个额外的文件 "),a("code",[t._v("etc/config.txt")]),t._v(" ，该文件的内容如下： set MIXER_AUX gimbal set PWM_AUX_OUT 1234 set PWM_AUX_DISARMED 1500 set PWM_AUX_MIN 1000 set PWM_AUX_MAX 2000 set PWM_AUX_RATE 50"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("set MIXER_AUX gimbal\nset PWM_AUX_OUT 1234\nset PWM_AUX_DISARMED 1500\nset PWM_AUX_MIN 1000\nset PWM_AUX_MAX 2000\nset PWM_AUX_RATE 50\n")])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);