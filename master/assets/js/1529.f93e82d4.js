(window.webpackJsonp=window.webpackJsonp||[]).push([[1529],{2798:function(e,t,a){"use strict";a.r(t);var s=a(19),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"全系统回放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全系统回放"}},[e._v("#")]),e._v(" 全系统回放")]),e._v(" "),a("p",[e._v("Based on ORB messages, it's possible to record and replay arbitrary parts of the system.")]),e._v(" "),a("p",[e._v("Replay is useful to test the effect of different parameter values based on real data, compare different estimators, etc.")]),e._v(" "),a("h2",{attrs:{id:"系统必备组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统必备组件"}},[e._v("#")]),e._v(" 系统必备组件")]),e._v(" "),a("p",[e._v("The first thing that needs to be done is to identify the module or modules that should be replayed. Then, identify all the inputs to these modules, i.e. subscribed ORB topics. For system-wide replay, this consists of all hardware input: sensors, RC input, MAVLink commands and file system.")]),e._v(" "),a("p",[e._v("All identified topics need to be logged at full rate (see "),a("RouterLink",{attrs:{to:"/zh/log/logging.html"}},[e._v("logging")]),e._v("). For "),a("code",[e._v("ekf2")]),e._v(" this is already the case with the default set of logged topics. For "),a("code",[e._v("ekf2")]),e._v(" this is already the case with the default set of logged topics.")],1),e._v(" "),a("p",[e._v("It is important that all replayed topics contain only a single absolute timestamp, which is the automatically generated field "),a("code",[e._v("timestamp")]),e._v(". Should there be more timestamps, then they must be relative with respect to the main timestamp. For an example, see "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/msg/sensor_combined.msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("sensor_combined.msg"),a("OutboundLink")],1),e._v(". Reasons for this are given below. Should there be more timestamps, then they must be relative with respect to the main timestamp. For an example, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/sensor_combined.msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("sensor_combined.msg"),a("OutboundLink")],1),e._v(". 造成这种情况的原因如下。")]),e._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("ul",[a("li",[e._v("First, choose the file to replay, and build the target (from within the Firmware directory): sh export replay=<absolute_path_to_log_file.ulg> make px4_sitl_default This will create the output in a separate build directory"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("replay_mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("ekf2\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("replay")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("abs_path_to_log.ulg"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl none\n")])])]),e._v("This will create the output in a separate build directory "),a("code",[e._v("build/px4_sitl_default_replay")]),e._v(" (so that the parameters don't interfere with normal builds). "),a("code",[e._v("build/px4_sitl_default_replay")]),e._v(" (so that the parameters don't interfere with normal builds). It's possible to choose any posix SITL build target for replay, the build system knows through the "),a("code",[e._v("replay")]),e._v(" environment variable that it's in replay mode.")]),e._v(" "),a("li",[e._v("Add ORB publisher rules file in "),a("code",[e._v("build/px4_sitl_default_replay/tmp/rootfs/orb_publisher.rules")]),e._v(". This file defines which module is allowed to publish which messages. It has the following format: 此文件定义允许了发布消息的模块。 It has the following format:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("It means that the given list of topics should only be published by <code><module></code> (which is the command name). Publications to any of these topics from another module are silently ignored. If <code>ignore_others</code> is <code>true</code>, then publications to other topics from <code><module></code> are ignored.\n")])])])])]),e._v(" "),a("p",[e._v("(which is the command name). Publications to any of these topics from another module are silently ignored. If ignore_others is true, then publications to other topics from "),a("module",[e._v(" are ignored.\n"),e._v("\nIt means that the given list of topics should only be published by "),a("code",[e._v("<module>")]),e._v(" (which is the command name). Publications to any of these topics from another module are silently ignored. If "),a("code",[e._v("ignore_others")]),e._v(" is "),a("code",[e._v("true")]),e._v(", then publications to other topics from "),a("code",[e._v("<module>")]),e._v(" are ignored.")])],1),e._v(" "),a("p",[e._v("For replay, we only want the "),a("code",[e._v("replay")]),e._v(" module to be able to publish the previously identified list of topics. So for replaying "),a("code",[e._v("ekf2")]),e._v(", the rules file looks like this: So for replaying "),a("code",[e._v("ekf2")]),e._v(", the rules file looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("restrict_topics: sensor_combined, vehicle_gps_position, vehicle_land_detected\nmodule: replay\nignore_others: true\n")])])]),a("p",[e._v("This allows that the modules, which usually publish these topics, don't need to be disabled for replay.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Optional: setup parameter overrides in the file "),a("code",[e._v("build/px4_sitl_default_replay/tmp/rootfs/replay_params.txt")]),e._v(". 此文件应包含 "),a("code",[e._v("&lt;param_name&gt; &lt;value&gt;")]),e._v(" 的列表，例如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EKF2_GB_NOISE 0.001\n")])])]),a("p",[e._v("默认日志文件的所有参数将被使用。 When a parameter changed during recording, it will be changed as well at the right time during replay. A parameter in the "),a("code",[e._v("replay_params.txt")]),e._v(" will override the value and changes to it from the log file will not be applied.")])]),e._v(" "),a("li",[a("p",[e._v("Optional: copy "),a("code",[e._v("dataman")]),e._v(" missions file from the SD card to the build directory. 一个任务的回放只有在必要的时候才进行。")])]),e._v(" "),a("li",[a("p",[e._v("Start the replay:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl_default jmavsim\n")])])]),a("p",[e._v("This will automatically open the log file, apply the parameters and start to replay. 一旦完成，将自动报告，进程也会退出。 This will automatically open the log file, apply the parameters and start to replay. Once done, it will be reported and the process can be exited. Then the newly generated log file can be analyzed, it has "),a("code",[e._v("_replayed")]),e._v(" appended to its file name.")]),e._v(" "),a("p",[e._v("Note that the above command will show the simulator as well, but depending on what is being replayed, it will not show what's actually going on. It's possible to connect via QGC and e.g. view the changing attitude during replay. It's possible to connect via QGC and e.g. view the changing attitude during replay.")])]),e._v(" "),a("li",[a("p",[e._v("Finally, unset the environment variable, so that the normal build targets are used again:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("unset")]),e._v(" replay\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"重要提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要提示"}},[e._v("#")]),e._v(" 重要提示")]),e._v(" "),a("ul",[a("li",[e._v("在重播过程中，将报告日志文件中的所有退出。 During replay, all dropouts in the log file are reported. These have a negative effect on replay and thus it should be taken care that dropouts are avoided during recording.")]),e._v(" "),a("li",[e._v("It is currently only possible to replay in 'real-time', meaning as fast as the recording was done. This is planned to be extended in the future. 这项工作计划今后延长。")]),e._v(" "),a("li",[e._v("A message that has a timestamp of 0 will be considered invalid and not be replayed.")])]),e._v(" "),a("h2",{attrs:{id:"ekf2-回放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ekf2-回放"}},[e._v("#")]),e._v(" EKF2 回放")]),e._v(" "),a("p",[e._v("This is a specialization of the system-wide replay for fast EKF2 replay. It will automatically create the ORB publisher rules and works as following: It will automatically create the ORB publisher rules and works as following:")]),e._v(" "),a("ul",[a("li",[e._v("（可选）将 "),a("code",[e._v("SDLOG_MODE")]),e._v(" 设置为 1，从启动开始日志记录")]),e._v(" "),a("li",[e._v("记录日志")]),e._v(" "),a("li",[e._v("回放：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ulog_params -i $replay -d ' ' | grep -e '^EKF2' > build/px4_sitl_default_replay/tmp/rootfs/replay_params.txt\n")])])]),a("p",[e._v("您可以在有如下所示的输出后停止它：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("INFO  [replay] Replay done (published 9917 msgs, 2.136 s)\n")])])]),a("p",[e._v("参数也可以调整。 The parameters can be adjusted as well. They can be extracted from the log with (install pyulog with "),a("code",[e._v("sudo pip install pyulog")]),e._v(" first):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Optional: setup parameter overrides in the file <code>build/px4_sitl_default_replay/tmp/rootfs/replay_params.txt</code>. This file should contain a list of <code><param_name> <value></code>, like:\n")])])]),a("p",[e._v(". This file should contain a list of <param_name> "),a("value",[e._v(", like:\n"),e._v("\nThen edit the parameters in the file as needed and restart the replay process with "),a("code",[e._v("make px4_sitl none")]),e._v(". This will create a new log file. 这将创建一个新的日志文件。")])],1),e._v(" "),a("p",[e._v("生成的日志的位置打印为如下消息：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("INFO  [logger] Opened log file: rootfs/fs/microsd/log/2017-03-01/13_30_51_replayed.ulg\n")])])]),a("p",[e._v("完成后，使用 "),a("code",[e._v("unset replay; unset replay_mode")]),e._v(" 退出回放模式。")]),e._v(" "),a("h2",{attrs:{id:"后台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台"}},[e._v("#")]),e._v(" 后台")]),e._v(" "),a("p",[e._v("回放分为3个组件:")]),e._v(" "),a("ul",[a("li",[e._v("回放模块")]),e._v(" "),a("li",[e._v("ORB 发布者规则")]),e._v(" "),a("li",[e._v("时间处理")])]),e._v(" "),a("p",[e._v("The replay module reads the log and publishes the messages with the same speed as they were recorded. A constant offset is added to the timestamp of each message to match the current system time (this is the reason why all other timestamps need to be relative). The command "),a("code",[e._v("replay tryapplyparams")]),e._v(" is executed before all other modules are loaded and applies the parameters from the log and user-set parameters. Then as the last command, "),a("code",[e._v("replay trystart")]),e._v(" will again apply the parameters and start the actual replay. Both commands do nothing if the environment variable "),a("code",[e._v("replay")]),e._v(" is not set. 将常量偏移量添加到每条消息的时间戳中，以匹配当前系统时间（这就是为什么所有其他时间戳都需要是相对的原因）。 命令 "),a("code",[e._v("replay tryapplyparms")]),e._v(" 在加载所有其他模块之前执行，并应用日志和用户设置参数中的参数。 然后，作为最后一个命令，"),a("code",[e._v("replay trystart")]),e._v(" 将再次应用参数并开始实际回放。 如果未设置环境变量 "),a("code",[e._v("replay")]),e._v("，则这两个命令不执行任何操作。")]),e._v(" "),a("p",[e._v("The ORB publisher rules allow to select which part of the system is replayed, as described above. They are only compiled for the posix SITL targets. 只编译 posix SITL 目标。")]),e._v(" "),a("p",[a("strong",[e._v("time handling")]),e._v(" 依然是个 "),a("strong",[e._v("open point")]),e._v("， 尚未实现。")])])}),[],!1,null,null,null);t.default=l.exports}}]);