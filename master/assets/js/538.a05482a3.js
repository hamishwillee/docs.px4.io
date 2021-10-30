(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{1624:function(e,t,a){"use strict";a.r(t);var s=a(19),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"logging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),s("p",[e._v("The logger is able to log any ORB topic with all included fields.\nEverything necessary is generated from the "),s("code",[e._v(".msg")]),e._v(" file, so that only the topic name needs to be specified.\nAn optional interval parameter specifies the maximum logging rate of a certain topic.\nAll existing instances of a topic are logged.")]),e._v(" "),s("p",[e._v("The output log format is "),s("RouterLink",{attrs:{to:"/en/dev_log/ulog_file_format.html"}},[e._v("ULog")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("By default, logging is automatically started when arming, and stopped when disarming.\nA new log file is created for each arming session on the SD card.\nTo display the current state, use "),s("code",[e._v("logger status")]),e._v(" on the console.\nIf you want to start logging immediately, use "),s("code",[e._v("logger on")]),e._v(".\nThis overrides the arming state, as if the system was armed.\n"),s("code",[e._v("logger off")]),e._v(" undoes this.")]),e._v(" "),s("p",[e._v("Use")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("logger help\n")])])]),s("p",[e._v("for a list of all supported logger commands and parameters.")]),e._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),s("p",[e._v("The logging system is configured by default to collect sensible logs for use with "),s("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Logging may further be configured using the "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#sd-logging"}},[e._v("SD Logging")]),e._v(" parameters.\nThe parameters you are most likely to change are listed below.")],1),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v("SDLOG_MODE")])],1),e._v(" "),s("td",[e._v("Logging Mode defines when logging starts and stops."),s("br"),e._v("- "),s("code",[e._v("0")]),e._v(": log when armed until disarm (default)."),s("br"),e._v("- "),s("code",[e._v("1")]),e._v(": log from boot until disarm."),s("br"),e._v("- "),s("code",[e._v("2")]),e._v(": log from boot until shutdown.")])]),e._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")])],1),e._v(" "),s("td",[e._v("Logging profile. Use this to enable less common logging/analysis (e.g. for EKF2 replay, high rate logging for PID & filter tuning, thermal temperature calibration).")])]),e._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_MISSION"}},[e._v("SDLOG_MISSION")])],1),e._v(" "),s("td",[e._v('Create very small additional "Mission Log".'),s("br"),e._v("This log can "),s("em",[e._v("not")]),e._v(" be used with "),s("em",[e._v("Flight Review")]),e._v(", but is useful when you need a small log for geotagging or regulatory compliance.")])])])]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[s("em",[e._v("Developers")]),e._v(" can further configure what information is logged via the "),s("RouterLink",{attrs:{to:"/en/modules/modules_system.html#logger"}},[e._v("logger")]),e._v(" module (you would use this, for example, if you want to log your own topics).\nFor more information see: "),s("RouterLink",{attrs:{to:"/en/dev_log/logging.html"}},[e._v("Logging")]),e._v(".")],1)]),e._v(" "),s("h3",{attrs:{id:"sd-card-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sd-card-configuration"}},[e._v("#")]),e._v(" SD Card Configuration")]),e._v(" "),s("p",[e._v("Seperately, the list of logged topics can also be customized with a file on the SD card.\nCreate a file "),s("code",[e._v("etc/logging/logger_topics.txt")]),e._v(" on the card with a list of topics (For SITL, it's "),s("code",[e._v("build/px4_sitl_default/tmp/rootfs/fs/microsd/etc/logging/logger_topics.txt")]),e._v("):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<topic_name> <interval> <instance>\n")])])]),s("p",[e._v("The "),s("code",[e._v("<interval>")]),e._v(" is optional, and if specified, defines the minimum interval in ms between two logged messages of this topic.\nIf not specified, the topic is logged at full rate.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("<instance>")]),e._v(" is optional, and if specified, defines the instance to log.\nIf not specified, all instances of the topic are logged.\nTo specify "),s("code",[e._v("<instance>")]),e._v(", "),s("code",[e._v("<interval>")]),e._v(" must be specified. It can be set to 0 to log at full rate")]),e._v(" "),s("p",[e._v("The topics in this file replace all of the default logged topics.")]),e._v(" "),s("p",[e._v("Example :")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sensor_accel 0 0\nsensor_accel 100 1\nsensor_gyro 200\nsensor_mag 200 1\n")])])]),s("p",[e._v("This configuration will log sensor_accel 0 at full rate, sensor_accel 1 at 10Hz, all sensor_gyro instances at 5Hz and sensor_mag 1 at 5Hz.")]),e._v(" "),s("h2",{attrs:{id:"scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[e._v("#")]),e._v(" Scripts")]),e._v(" "),s("p",[e._v("There are several scripts to analyze and convert logging files in the "),s("a",{attrs:{href:"https://github.com/PX4/pyulog",target:"_blank",rel:"noopener noreferrer"}},[e._v("pyulog"),s("OutboundLink")],1),e._v(" repository.")]),e._v(" "),s("h2",{attrs:{id:"dropouts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dropouts"}},[e._v("#")]),e._v(" Dropouts")]),e._v(" "),s("p",[e._v("Logging dropouts are undesired and there are a few factors that influence the\namount of dropouts:")]),e._v(" "),s("ul",[s("li",[e._v("Most SD cards we tested exhibit multiple pauses per minute.\nThis shows itself as a several 100 ms delay during a write command.\nIt causes a dropout if the write buffer fills up during this time.\nThis effect depends on the SD card (see below).")]),e._v(" "),s("li",[e._v("Formatting an SD card can help to prevent dropouts.")]),e._v(" "),s("li",[e._v("Increasing the log buffer helps.")]),e._v(" "),s("li",[e._v("Decrease the logging rate of selected topics or remove unneeded topics from being logged ("),s("code",[e._v("info.py <file>")]),e._v(" is useful for this).")])]),e._v(" "),s("h2",{attrs:{id:"sd-cards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sd-cards"}},[e._v("#")]),e._v(" SD Cards")]),e._v(" "),s("p",[e._v("The following provides performance results for different SD cards.\nTests were done on a Pixracer; the results are applicable to Pixhawk as well.")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("The maximum supported SD card size for NuttX is 32GB (SD Memory Card Specifications Version 2.0).")])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("SD Card")]),e._v(" "),s("th",[e._v("Mean Seq. Write Speed [KB/s]")]),e._v(" "),s("th",[e._v("Max Write Time / Block (average) [ms]")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("SanDisk Extreme U3 32GB")]),e._v(" "),s("td",[e._v("461")]),e._v(" "),s("td",[s("strong",[e._v("15")])])]),e._v(" "),s("tr",[s("td",[e._v("Sandisk Ultra Class 10 8GB")]),e._v(" "),s("td",[e._v("348")]),e._v(" "),s("td",[e._v("40")])]),e._v(" "),s("tr",[s("td",[e._v("Sandisk Class 4 8GB")]),e._v(" "),s("td",[e._v("212")]),e._v(" "),s("td",[e._v("60")])]),e._v(" "),s("tr",[s("td",[e._v("SanDisk Class 10 32 GB (High Endurance Video Monitoring Card)")]),e._v(" "),s("td",[e._v("331")]),e._v(" "),s("td",[e._v("220")])]),e._v(" "),s("tr",[s("td",[e._v("Lexar U1 (Class 10), 16GB High-Performance")]),e._v(" "),s("td",[e._v("209")]),e._v(" "),s("td",[e._v("150")])]),e._v(" "),s("tr",[s("td",[e._v("Sandisk Ultra PLUS Class 10 16GB")]),e._v(" "),s("td",[e._v("196")]),e._v(" "),s("td",[e._v("500")])]),e._v(" "),s("tr",[s("td",[e._v("Sandisk Pixtor Class 10 16GB")]),e._v(" "),s("td",[e._v("334")]),e._v(" "),s("td",[e._v("250")])]),e._v(" "),s("tr",[s("td",[e._v("Sandisk Extreme PLUS Class 10 32GB")]),e._v(" "),s("td",[e._v("332")]),e._v(" "),s("td",[e._v("150")])])])]),e._v(" "),s("p",[e._v("More important than the mean write speed is the maximum write time per block (of 4 KB).\nThis defines the minimum buffer size: the larger this maximum, the larger the log buffer needs to be to avoid dropouts.\nLogging bandwidth with the default topics is around 50 KB/s, which all of the SD cards satisfy.")]),e._v(" "),s("p",[e._v("By far the best card we know so far is the "),s("strong",[e._v("SanDisk Extreme U3 32GB")]),e._v(".\nThis card is recommended, because it does not exhibit write time spikes (and thus virtually no dropouts).\nDifferent card sizes might work equally well, but the performance is usually different.")]),e._v(" "),s("p",[e._v("You can test your own SD card with "),s("code",[e._v("sd_bench -r 50")]),e._v(", and report the results to https://github.com/PX4/PX4-Autopilot/issues/4634.")]),e._v(" "),s("h2",{attrs:{id:"log-streaming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-streaming"}},[e._v("#")]),e._v(" Log Streaming")]),e._v(" "),s("p",[e._v("The traditional and still fully supported way to do logging is using an SD card on the FMU.\nHowever there is an alternative, log streaming, which sends the same logging data via MAVLink.\nThis method can be used for example in cases where the FMU does not have an SD card slot (e.g. Intel® Aero Ready to Fly Drone) or simply to avoid having to deal with SD cards.\nBoth methods can be used independently and at the same time.")]),e._v(" "),s("p",[e._v("The requirement is that the link provides at least ~50KB/s, so for example a WiFi link.\nAnd only one client can request log streaming at the same time.\nThe connection does not need to be reliable, the protocol is designed to handle drops.")]),e._v(" "),s("p",[e._v("There are different clients that support ulog streaming:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("mavlink_ulog_streaming.py")]),e._v(" script in PX4-Autopilot/Tools.")]),e._v(" "),s("li",[e._v("QGroundControl:\n"),s("img",{attrs:{src:a(691),alt:"QGC Log Streaming"}})]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ecmnet/MAVGCL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVGCL"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"diagnostics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diagnostics"}},[e._v("#")]),e._v(" Diagnostics")]),e._v(" "),s("ul",[s("li",[e._v("If log streaming does not start, make sure the "),s("code",[e._v("logger")]),e._v(" is running (see above), and inspect the console output while starting.")]),e._v(" "),s("li",[e._v("If it still does not work, make sure that MAVLink 2 is used.\nEnforce it by setting "),s("code",[e._v("MAV_PROTO_VER")]),e._v(" to 2.")]),e._v(" "),s("li",[e._v("Log streaming uses a maximum of 70% of the configured MAVLink rate ("),s("code",[e._v("-r")]),e._v(" parameter).\nIf more is needed, messages are dropped.\nThe currently used percentage can be inspected with "),s("code",[e._v("mavlink status")]),e._v(" (1.8% is used in this example):"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("instance #0:\n        GCS heartbeat:  160955 us ago\n        mavlink chan: #0\n        type:           GENERIC LINK OR RADIO\n        flow control:   OFF\n        rates:\n        tx: 95.781 kB/s\n        txerr: 0.000 kB/s\n        rx: 0.021 kB/s\n        rate mult: 1.000\n        ULog rate: 1.8% of max 70.0%\n        accepting commands: YES\n        MAVLink version: 2\n        transport protocol: UDP (14556)\n")])])]),e._v("Also make sure "),s("code",[e._v("txerr")]),e._v(" stays at 0.\nIf this goes up, either the NuttX sending buffer is too small, the physical link is saturated or the hardware is too slow to handle the data.")])])])}),[],!1,null,null,null);t.default=o.exports},691:function(e,t,a){e.exports=a.p+"assets/img/qgc-log-streaming.cc0d2b6e.png"}}]);