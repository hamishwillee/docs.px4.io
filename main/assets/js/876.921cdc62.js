(window.webpackJsonp=window.webpackJsonp||[]).push([[876],{3413:function(e,t,s){"use strict";s.r(t);var a=s(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"日志记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志记录"}},[e._v("#")]),e._v(" 日志记录")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/modules/modules_system.html#logger"}},[e._v("系统记录器")]),e._v(" 能够记录任何 ORB 单元及其所有包含的字段。 Everything necessary is generated from the "),a("code",[e._v(".msg")]),e._v(" file, so that only the topic name needs to be specified. An optional interval parameter specifies the maximum logging rate of a certain topic. 所有主题的实例将会被记录。")],1),e._v(" "),a("p",[e._v("The output log format is "),a("RouterLink",{attrs:{to:"/zh/dev_log/ulog_file_format.html"}},[e._v("ULog")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("p",[e._v("By default, logging is automatically started when arming, and stopped when disarming. 每次解锁后的飞行对话将会在 SD 卡上生成一个新的日志文件。 To display the current state, use "),a("code",[e._v("logger status")]),e._v(" on the console. If you want to start logging immediately, use "),a("code",[e._v("logger on")]),e._v(". This overrides the arming state, as if the system was armed. "),a("code",[e._v("log off")]),e._v(" 取消日志记录。")]),e._v(" "),a("p",[e._v("如果日志因为写错误停止，或者达到"),a("a",{attrs:{href:"#file-size-limitations"}},[e._v("最大文件大小")]),e._v("PX4将自动重新开始记录一个新文件。")]),e._v(" "),a("p",[e._v("对于所有支持的记录器命令和参数的列表，使用：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("logger help\n")])])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),a("p",[e._v("The logging system is configured by default to collect sensible logs for "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[e._v("flight reporting")]),e._v(" with "),a("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),a("OutboundLink")],1),e._v(".")],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("<interval>")]),e._v(" is optional, and if specified, defines the minimum interval in ms between two logged messages of this topic. If not specified, the topic is logged at full rate. The parameters you are most likely to change are listed below.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("SD 卡")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v("SDLOG_MODE")])],1),e._v(" "),a("td",[e._v("日志模式 定义什么时候日志开始记录和停止。"),a("br"),e._v("-"),a("code",[e._v("1")]),e._v("：日志禁用。"),a("br"),e._v("-"),a("code",[e._v("0")]),e._v("：日志从装备开始到解除装备为止（默认）。"),a("br"),e._v("-"),a("code",[e._v("1")]),e._v("：日志从引导到解除装备为止。"),a("br"),e._v("-"),a("code",[e._v("2")]),e._v("：日志从引导直到关机为止。"),a("br"),e._v("-"),a("code",[e._v("3")]),e._v("：日志基于"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_MAP_AUX1"}},[e._v("AUX1 RC 通道")]),e._v("。"),a("br"),e._v("-"),a("code",[e._v("4")]),e._v("：日志从第一次装备直到关机为止。")],1)]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")])],1),e._v(" "),a("td",[e._v("Logging profile. Use this to enable less common logging/analysis (e.g. for EKF2 replay, high rate logging for PID & filter tuning, thermal temperature calibration).")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_MISSION"}},[e._v("SDLOG_MISSION")])],1),e._v(" "),a("td",[e._v('Create very small additional "Mission Log".'),a("br"),e._v("This log can "),a("em",[e._v("not")]),e._v(" be used with "),a("RouterLink",{attrs:{to:"/zh/log/flight_log_analysis.html#flight-review-online-tool"}},[e._v("Flight Review")]),e._v(", but is useful when you need a small log for geotagging or regulatory compliance.")],1)])])]),e._v(" "),a("p",[e._v("Useful settings for specific cases:")]),e._v(" "),a("ul",[a("li",[e._v("Raw sensor data for comparison: "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v("SDLOG_MODE=1")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE=64")]),e._v(".")],1),e._v(" "),a("li",[e._v("Disabling logging altogether: "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v("SDLOG_MODE="),a("code",[e._v("-1")])])],1)]),e._v(" "),a("h3",{attrs:{id:"logger-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logger-module"}},[e._v("#")]),e._v(" Logger module")]),e._v(" "),a("p",[a("em",[e._v("Developers")]),e._v(" can further configure what information is logged via the "),a("RouterLink",{attrs:{to:"/zh/modules/modules_system.html#logger"}},[e._v("logger")]),e._v(" module. This allows, for example, logging of your own uORB topics.")],1),e._v(" "),a("h3",{attrs:{id:"诊断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#诊断"}},[e._v("#")]),e._v(" 诊断")]),e._v(" "),a("p",[e._v("Separately, the list of logged topics can also be customized with a file on the SD card. Create a file "),a("code",[e._v("etc/logging/logger_topics.txt")]),e._v(" on the card with a list of topics (For SITL, it's "),a("code",[e._v("build/px4_sitl_default/rootfs/fs/microsd/etc/logging/logger_topics.txt")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("<topic_name>, <interval>\n")])])]),a("p",[e._v("The "),a("code",[e._v("<interval>")]),e._v(" is optional, and if specified, defines the minimum interval in ms between two logged messages of this topic. If not specified, the topic is logged at full rate.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("<instance>")]),e._v(" is optional, and if specified, defines the instance to log. If not specified, all instances of the topic are logged. To specify "),a("code",[e._v("<instance>")]),e._v(", "),a("code",[e._v("<interval>")]),e._v(" must be specified. It can be set to 0 to log at full rate")]),e._v(" "),a("p",[e._v("The topics in this file replace all of the default logged topics.")]),e._v(" "),a("p",[e._v("By far the best card we know so far is the "),a("strong",[e._v("SanDisk Extreme U3 32GB")]),e._v(". This card is recommended, because it does not exhibit write time spikes (and thus virtually no dropouts). Different card sizes might work equally well, but the performance is usually different.")]),e._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("sensor_accel 0 0\nsensor_accel 100 1\nsensor_gyro 200\nsensor_mag 200 1\n")])])]),a("p",[e._v("This configuration will log sensor_accel 0 at full rate, sensor_accel 1 at 10Hz, all sensor_gyro instances at 5Hz and sensor_mag 1 at 5Hz.")]),e._v(" "),a("h2",{attrs:{id:"脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[e._v("#")]),e._v(" 脚本")]),e._v(" "),a("p",[e._v("There are several scripts to analyze and convert logging files in the "),a("a",{attrs:{href:"https://github.com/PX4/pyulog",target:"_blank",rel:"noopener noreferrer"}},[e._v("pyulog"),a("OutboundLink")],1),e._v(" repository.")]),e._v(" "),a("h2",{attrs:{id:"file-size-limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-size-limitations"}},[e._v("#")]),e._v(" File size limitations")]),e._v(" "),a("p",[e._v("The maximum file size depends on the file system and OS. The size limit on NuttX is currently around 2GB.")]),e._v(" "),a("h2",{attrs:{id:"丢帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#丢帧"}},[e._v("#")]),e._v(" 丢帧")]),e._v(" "),a("p",[e._v("Logging dropouts are undesired and there are a few factors that influence the amount of dropouts:")]),e._v(" "),a("ul",[a("li",[e._v("Most SD cards we tested exhibit multiple pauses per minute. This shows itself as a several 100 ms delay during a write command. It causes a dropout if the write buffer fills up during this time. This effect depends on the SD card (see below). This shows itself as a several 100 ms delay during a write command. It causes a dropout if the write buffer fills up during this time. This effect depends on the SD card (see below).")]),e._v(" "),a("li",[e._v("格式化 SD 卡有助于避免丢帧。")]),e._v(" "),a("li",[e._v("增大日志缓存也有效。")]),e._v(" "),a("li",[e._v("Decrease the logging rate of selected topics or remove unneeded topics from being logged ("),a("code",[e._v("info.py <file>")]),e._v(" is useful for this).")])]),e._v(" "),a("h2",{attrs:{id:"sd-卡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-卡"}},[e._v("#")]),e._v(" SD 卡")]),e._v(" "),a("p",[e._v("The following provides performance results for different SD cards. Tests were done on a Pixracer; the results are applicable to Pixhawk as well.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The maximum supported SD card size for NuttX is 32GB (SD Memory Card Specifications Version 2.0).")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("SD Card")]),e._v(" "),a("th",[e._v("Mean Seq. Write Speed [KB/s]")]),e._v(" "),a("th",[e._v("Max Write Time / Block (average) [ms]")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("SanDisk Extreme U3 32GB")]),e._v(" "),a("td",[e._v("461")]),e._v(" "),a("td",[a("strong",[e._v("15")])])]),e._v(" "),a("tr",[a("td",[e._v("Sandisk Ultra Class 10 8GB")]),e._v(" "),a("td",[e._v("348")]),e._v(" "),a("td",[e._v("40")])]),e._v(" "),a("tr",[a("td",[e._v("Sandisk Class 4 8GB")]),e._v(" "),a("td",[e._v("212")]),e._v(" "),a("td",[e._v("60")])]),e._v(" "),a("tr",[a("td",[e._v("SanDisk Class 10 32 GB (High Endurance Video Monitoring Card)")]),e._v(" "),a("td",[e._v("331")]),e._v(" "),a("td",[e._v("220")])]),e._v(" "),a("tr",[a("td",[e._v("Lexar U1 (Class 10), 16GB High-Performance")]),e._v(" "),a("td",[e._v("209")]),e._v(" "),a("td",[e._v("150")])]),e._v(" "),a("tr",[a("td",[e._v("Sandisk Ultra PLUS Class 10 16GB")]),e._v(" "),a("td",[e._v("196")]),e._v(" "),a("td",[e._v("500")])]),e._v(" "),a("tr",[a("td",[e._v("Sandisk Pixtor Class 10 16GB")]),e._v(" "),a("td",[e._v("334")]),e._v(" "),a("td",[e._v("250")])]),e._v(" "),a("tr",[a("td",[e._v("Sandisk Extreme PLUS Class 10 32GB")]),e._v(" "),a("td",[e._v("332")]),e._v(" "),a("td",[e._v("150")])])])]),e._v(" "),a("p",[e._v("The requirement is that the link provides at least ~50KB/s, so for example a WiFi link. And only one client can request log streaming at the same time. The connection does not need to be reliable, the protocol is designed to handle drops. 并且同一时刻只能有一个客户机可以请求日志流。 Logging bandwidth with the default topics is around 50 KB/s, which all of the SD cards satisfy.")]),e._v(" "),a("p",[e._v("By far the best card we know so far is the "),a("strong",[e._v("SanDisk Extreme U3 32GB")]),e._v(". This card is recommended, because it does not exhibit write time spikes (and thus virtually no dropouts). Different card sizes might work equally well, but the performance is usually different.")]),e._v(" "),a("p",[e._v("You can test your own SD card with "),a("code",[e._v("sd_bench -r 50")]),e._v(", and report the results to https://github.com/PX4/PX4-Autopilot/issues/4634.")]),e._v(" "),a("h2",{attrs:{id:"日志流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志流"}},[e._v("#")]),e._v(" 日志流")]),e._v(" "),a("p",[e._v("The traditional and still fully supported way to do logging is using an SD card on the FMU. However there is an alternative, log streaming, which sends the same logging data via MAVLink. This method can be used for example in cases where the FMU does not have an SD card slot (e.g. Intel® Aero Ready to Fly Drone) or simply to avoid having to deal with SD cards. Both methods can be used independently and at the same time.")]),e._v(" "),a("p",[e._v("The requirement is that the link provides at least ~50KB/s, so for example a WiFi link. And only one client can request log streaming at the same time. The connection does not need to be reliable, the protocol is designed to handle drops.")]),e._v(" "),a("p",[e._v("There are different clients that support ulog streaming:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("mavlink_ulog_streaming.py")]),e._v(" script in Firmware/Tools.")]),e._v(" "),a("li",[e._v("QGroundControl： "),a("img",{attrs:{src:s(734),alt:"QGC Log Streaming"}})]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ecmnet/MAVGCL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVGCL"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"diagnostics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diagnostics"}},[e._v("#")]),e._v(" Diagnostics")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If log streaming does not start, make sure the "),a("code",[e._v("logger")]),e._v(" is running (see above), and inspect the console output while starting.")])]),e._v(" "),a("li",[a("p",[e._v("If it still does not work, make sure that Mavlink 2 is used. Enforce it by setting "),a("code",[e._v("MAV_PROTO_VER")]),e._v(" to 2. Enforce it by setting "),a("code",[e._v("MAV_PROTO_VER")]),e._v(" to 2.")])]),e._v(" "),a("li",[a("p",[e._v("Log streaming uses a maximum of 70% of the configured mavlink rate ("),a("code",[e._v("-r")]),e._v(" parameter). If more is needed, messages are dropped. The currently used percentage can be inspected with "),a("code",[e._v("mavlink status")]),e._v(" (1.8% is used in this example): 如果需要更大的速率，数据会丢失。 The currently used percentage can be inspected with "),a("code",[e._v("mavlink status")]),e._v(" (1.8% is used in this example):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("instance "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#0:")]),e._v("\n        GCS heartbeat:  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("160955")]),e._v(" us ago\n        mavlink chan: "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#0")]),e._v("\n        type:           GENERIC LINK OR RADIO\n        flow control:   OFF\n        rates:\n        tx: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("95.781")]),e._v(" kB/s\n        txerr: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.000")]),e._v(" kB/s\n        rx: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.021")]),e._v(" kB/s\n        rate mult: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.000")]),e._v("\n        ULog rate: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.8")]),e._v("% of max "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("70.0")]),e._v("%\n        accepting commands: YES\n        MAVLink version: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n        transport protocol: UDP "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("14556")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("同时确保 "),a("code",[e._v("txerr")]),e._v(" 一直是 0。 Also make sure "),a("code",[e._v("txerr")]),e._v(" stays at 0. If this goes up, either the NuttX sending buffer is too small, the physical link is saturated or the hardware is too slow to handle the data.")])])])])}),[],!1,null,null,null);t.default=r.exports},734:function(e,t,s){e.exports=s.p+"assets/img/qgc-log-streaming.e5767326.png"}}]);