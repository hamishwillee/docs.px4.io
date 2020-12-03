(window.webpackJsonp=window.webpackJsonp||[]).push([[645],{2345:function(e,t,s){"use strict";s.r(t);var a=s(18),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"日志记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志记录"}},[e._v("#")]),e._v(" 日志记录")]),e._v(" "),a("p",[e._v("The logger is able to log any ORB topic with all included fields. Everything necessary is generated from the "),a("code",[e._v(".msg")]),e._v(" file, so that only the topic name needs to be specified. An optional interval parameter specifies the maximum logging rate of a certain topic. All existing instances of a topic are logged. Everything necessary is generated from the "),a("code",[e._v(".msg")]),e._v(" file, so that only the topic name needs to be specified. An optional interval parameter specifies the maximum logging rate of a certain topic. 所有主题的实例将会被记录。")]),e._v(" "),a("p",[e._v("输出的日志格式是 "),a("RouterLink",{attrs:{to:"/zh/log/ulog_file_format.html"}},[e._v("Ulog")]),e._v("。")],1),e._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("p",[e._v("By default, logging is automatically started when arming, and stopped when disarming. 每次解锁后的飞行对话将会在 SD 卡上生成一个新的日志文件。 To display the current state, use "),a("code",[e._v("logger status")]),e._v(" on the console. If you want to start logging immediately, use "),a("code",[e._v("logger on")]),e._v(". This overrides the arming state, as if the system was armed. "),a("code",[e._v("log off")]),e._v(" 取消日志记录。")]),e._v(" "),a("p",[e._v("使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("logger help\n")])])]),a("p",[e._v("列举所有支持的日志命令和参数。")]),e._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),a("p",[e._v("日志主题列表可以以 SD 卡文件的形式定制。 The list of logged topics can be customized with a file on the SD card. Create a file "),a("code",[e._v("etc/logging/logger_topics.txt")]),e._v(" on the card with a list of topics (For SITL, it's "),a("code",[e._v("build/px4_sitl_default/tmp/rootfs/fs/microsd/etc/logging/logger_topics.txt")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<topic_name>, <interval>\n")])])]),a("p",[e._v("The "),a("code",[e._v("<interval>")]),e._v(" is optional, and if specified, defines the minimum interval in ms between two logged messages of this topic. If not specified, the topic is logged at full rate. If not specified, the topic is logged at full rate.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("<instance>")]),e._v(" is optional, and if specified, defines the instance to log. If not specified, all instances of the topic are logged. To specify "),a("code",[e._v("<instance>")]),e._v(", "),a("code",[e._v("<interval>")]),e._v(" must be specified. It can be set to 0 to log at full rate")]),e._v(" "),a("p",[e._v("文件中的主题名将替换所有默认记录的主题。")]),e._v(" "),a("p",[e._v("Logging dropouts are undesired and there are a few factors that influence the amount of dropouts:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sensor_accel 0 0\nsensor_accel 100 1\nsensor_gyro 200\nsensor_mag 200 1\n")])])]),a("p",[e._v("The following provides performance results for different SD cards. Tests were done on a Pixracer; the results are applicable to Pixhawk as well.")]),e._v(" "),a("h2",{attrs:{id:"脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[e._v("#")]),e._v(" 脚本")]),e._v(" "),a("p",[e._v("There are several scripts to analyze and convert logging files in the "),a("a",{attrs:{href:"https://github.com/PX4/pyulog",target:"_blank",rel:"noopener noreferrer"}},[e._v("pyulog"),a("OutboundLink")],1),e._v(" repository.")]),e._v(" "),a("h2",{attrs:{id:"丢帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#丢帧"}},[e._v("#")]),e._v(" 丢帧")]),e._v(" "),a("p",[e._v("By far the best card we know so far is the "),a("strong",[e._v("SanDisk Extreme U3 32GB")]),e._v(". This card is recommended, because it does not exhibit write time spikes (and thus virtually no dropouts). Different card sizes might work equally well, but the performance is usually different.")]),e._v(" "),a("ul",[a("li",[e._v("Most SD cards we tested exhibit multiple pauses per minute. This shows itself as a several 100 ms delay during a write command. It causes a dropout if the write buffer fills up during this time. This effect depends on the SD card (see below). This shows itself as a several 100 ms delay during a write command. It causes a dropout if the write buffer fills up during this time. This effect depends on the SD card (see below).")]),e._v(" "),a("li",[e._v("格式化 SD 卡有助于避免丢帧。")]),e._v(" "),a("li",[e._v("增大日志缓存也有效。")]),e._v(" "),a("li",[e._v("Decrease the logging rate of selected topics or remove unneeded topics from being logged ("),a("code",[e._v("info.py <file>")]),e._v(" is useful for this).")])]),e._v(" "),a("h2",{attrs:{id:"sd-卡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-卡"}},[e._v("#")]),e._v(" SD 卡")]),e._v(" "),a("p",[e._v("下面提供了不同 SD 卡的性能。 测试是在 Pixracer上进行的，这个结果也适用于 Pixhawk。")]),e._v(" "),a("p",[e._v("More important than the mean write speed is the maximum write time per block (of 4 KB). This defines the minimum buffer size: the larger this maximum, the larger the log buffer needs to be to avoid dropouts. Logging bandwidth with the default topics is around 50 KB/s, which all of the SD cards satisfy. 这决定了最小缓冲区大小：这个值越大，日志缓冲区就要越大，以避免丢帧。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("SD 卡")]),e._v(" "),a("th",[e._v("平均 Seq Mean Seq. 写入速度 [KB/s]")]),e._v(" "),a("th",[e._v("最大写入时间 / 块（平均） [ms]")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("SanDisk Extreme U3 32GB")]),e._v(" "),a("td",[e._v("461")]),e._v(" "),a("td",[a("strong",[e._v("15")])])]),e._v(" "),a("tr",[a("td",[e._v("Sandisk Ultra Class 10 8GB")]),e._v(" "),a("td",[e._v("348")]),e._v(" "),a("td",[e._v("40")])]),e._v(" "),a("tr",[a("td",[e._v("Sandisk Class 4 8GB")]),e._v(" "),a("td",[e._v("212")]),e._v(" "),a("td",[e._v("60")])]),e._v(" "),a("tr",[a("td",[e._v("SanDisk Class 10 32 GB (High Endurance Video Monitoring Card)")]),e._v(" "),a("td",[e._v("331")]),e._v(" "),a("td",[e._v("220")])]),e._v(" "),a("tr",[a("td",[e._v("Lexar U1 (Class 10), 16GB High-Performance")]),e._v(" "),a("td",[e._v("209")]),e._v(" "),a("td",[e._v("150")])]),e._v(" "),a("tr",[a("td",[e._v("Sandisk Ultra PLUS Class 10 16GB")]),e._v(" "),a("td",[e._v("196")]),e._v(" "),a("td",[e._v("500")])]),e._v(" "),a("tr",[a("td",[e._v("Sandisk Pixtor Class 10 16GB")]),e._v(" "),a("td",[e._v("334")]),e._v(" "),a("td",[e._v("250")])]),e._v(" "),a("tr",[a("td",[e._v("Sandisk Extreme PLUS Class 10 32GB")]),e._v(" "),a("td",[e._v("332")]),e._v(" "),a("td",[e._v("150")])])])]),e._v(" "),a("p",[e._v("到目前为止，我们知道的性能最好的卡是 "),a("strong",[e._v("SanDisk Extreme U3 32GB")]),e._v("。 This defines the minimum buffer size: the larger this maximum, the larger the log buffer needs to be to avoid dropouts. Logging bandwidth with the default topics is around 50 KB/s, which all of the SD cards satisfy.")]),e._v(" "),a("p",[e._v("By far the best card we know so far is the "),a("strong",[e._v("SanDisk Extreme U3 32GB")]),e._v(". This card is recommended, because it does not exhibit write time spikes (and thus virtually no dropouts). Different card sizes might work equally well, but the performance is usually different.")]),e._v(" "),a("p",[e._v("You can test your own SD card with "),a("code",[e._v("sd_bench -r 50")]),e._v(", and report the results to https://github.com/PX4/PX4-Autopilot/issues/4634.")]),e._v(" "),a("h2",{attrs:{id:"日志流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志流"}},[e._v("#")]),e._v(" 日志流")]),e._v(" "),a("p",[e._v("The requirement is that the link provides at least ~50KB/s, so for example a WiFi link. And only one client can request log streaming at the same time. The connection does not need to be reliable, the protocol is designed to handle drops. 并且同一时刻只能有一个客户机可以请求日志流。 This method can be used for example in cases where the FMU does not have an SD card slot (e.g. Intel® Aero Ready to Fly Drone) or simply to avoid having to deal with SD cards. Both methods can be used independently and at the same time.")]),e._v(" "),a("p",[e._v("The requirement is that the link provides at least ~50KB/s, so for example a WiFi link. And only one client can request log streaming at the same time. The connection does not need to be reliable, the protocol is designed to handle drops.")]),e._v(" "),a("p",[e._v("There are different clients that support ulog streaming:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("mavlink_ulog_streaming.py")]),e._v(" script in Firmware/Tools.")]),e._v(" "),a("li",[e._v("QGroundControl： "),a("img",{attrs:{src:s(660),alt:"QGC Log Streaming"}})]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ecmnet/MAVGCL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVGCL"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"诊断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#诊断"}},[e._v("#")]),e._v(" 诊断")]),e._v(" "),a("ul",[a("li",[e._v("If log streaming does not start, make sure the "),a("code",[e._v("logger")]),e._v(" is running (see above), and inspect the console output while starting.")]),e._v(" "),a("li",[e._v("If it still does not work, make sure that Mavlink 2 is used. Enforce it by setting "),a("code",[e._v("MAV_PROTO_VER")]),e._v(" to 2. Enforce it by setting "),a("code",[e._v("MAV_PROTO_VER")]),e._v(" to 2.")]),e._v(" "),a("li",[e._v("Log streaming uses a maximum of 70% of the configured mavlink rate ("),a("code",[e._v("-r")]),e._v(" parameter). If more is needed, messages are dropped. The currently used percentage can be inspected with "),a("code",[e._v("mavlink status")]),e._v(" (1.8% is used in this example): 如果需要更大的速率，数据会丢失。 The currently used percentage can be inspected with "),a("code",[e._v("mavlink status")]),e._v(" (1.8% is used in this example):"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("instance #0:\n        GCS heartbeat:  160955 us ago\n        mavlink chan: #0\n        type:           GENERIC LINK OR RADIO\n        flow control:   OFF\n        rates:\n        tx: 95.781 kB/s\n        txerr: 0.000 kB/s\n        rx: 0.021 kB/s\n        rate mult: 1.000\n        ULog rate: 1.8% of max 70.0%\n        accepting commands: YES\n        MAVLink version: 2\n        transport protocol: UDP (14556)\n")])])]),e._v("同时确保 "),a("code",[e._v("txerr")]),e._v(" 一直是 0。 Also make sure "),a("code",[e._v("txerr")]),e._v(" stays at 0. If this goes up, either the NuttX sending buffer is too small, the physical link is saturated or the hardware is too slow to handle the data.")])])])}),[],!1,null,null,null);t.default=i.exports},660:function(e,t,s){e.exports=s.p+"assets/img/qgc-log-streaming.cc0d2b6e.png"}}]);