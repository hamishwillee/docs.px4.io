(window.webpackJsonp=window.webpackJsonp||[]).push([[686],{1128:function(t,e,o){t.exports=o.p+"assets/img/log_download.68d62ffd.jpg"},2526:function(t,e,o){"use strict";o.r(e);var r=o(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"飞行报告"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#飞行报告"}},[t._v("#")]),t._v(" 飞行报告")]),t._v(" "),r("p",[t._v("PX4 logs detailed aircraft state and sensor data, which can be used to analyze performance issues. This topic explains how you can download and analyse logs, and share them with the development team for review.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("Keeping flight logs is a legal requirement in some jurisdictions.")])]),t._v(" "),r("h2",{attrs:{id:"从飞行控制器下载日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从飞行控制器下载日志"}},[t._v("#")]),t._v(" 从飞行控制器下载日志")]),t._v(" "),r("p",[t._v("Logs can be downloaded using "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),r("OutboundLink")],1),t._v(": "),r("strong",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/log_download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Analyze View > Log Download"),r("OutboundLink")],1)]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1128),alt:"Flight Log Download"}})]),t._v(" "),r("h2",{attrs:{id:"分析日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分析日志"}},[t._v("#")]),t._v(" 分析日志")]),t._v(" "),r("p",[t._v("Upload the log file to the online "),r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),r("OutboundLink")],1),t._v(" tool. After upload you'll emailed a link to the analysis page for the log.")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/log/flight_review.html"}},[t._v("Log Analysis using Flight Review")]),t._v(" explains how to interpret the plots, and can help you to verify/reject the causes of common problems: excessive vibration, poor PID tuning, saturated controllers, imbalanced vehicles, GPS noise, etc.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("There are many other great tools for visualising and analysing PX4 Logs. For more information see: "),r("RouterLink",{attrs:{to:"/zh/dev_log/flight_log_analysis.html"}},[t._v("Flight Analysis")]),t._v(".")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("If you have a constant high-rate MAVLink connection to the vehicle (not just a telemetry link) then you can use "),r("em",[t._v("QGroundControl")]),t._v(" to automatically upload logs directly to "),r("em",[t._v("Flight Review")]),t._v(". For more information see "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/MAVLink.html#logging",target:"_blank",rel:"noopener noreferrer"}},[t._v("Settings > MAVLink Settings > MAVLink 2 Logging (PX4 only)"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"给-px4-开发人员共享日志文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#给-px4-开发人员共享日志文件"}},[t._v("#")]),t._v(" 给 PX4 开发人员共享日志文件")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),r("OutboundLink")],1),t._v(" log file link can be shared for discussion in the "),r("RouterLink",{attrs:{to:"/zh/contribute/support.html#forums-and-chat"}},[t._v("support forums")]),t._v(" or a "),r("RouterLink",{attrs:{to:"/zh/#reporting-bugs--issues"}},[t._v("Github issue")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"log-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log-configuration"}},[t._v("#")]),t._v(" Log Configuration")]),t._v(" "),r("p",[t._v("The logging system is configured by default to collect sensible logs for use with "),r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("Logging may further be configured using the "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#sd-logging"}},[t._v("SD Logging")]),t._v(" parameters. The parameters you are most likely to change are listed below.")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_MODE"}},[t._v("SDLOG_MODE")])],1),t._v(" "),r("td",[t._v("日志模式定义日志何时开始和停止。")])])])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("0")]),t._v("：解锁时开始记录直到加锁 (默认)。")]),t._v(" "),r("li",[r("code",[t._v("1")]),t._v("：系统启动开始记录直到加锁。")]),t._v(" "),r("li",[r("code",[t._v("2")]),t._v("：系统启动时开始记录直到断电。 |\n| "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[t._v("SDLOG_PROFILE")]),t._v(" | 日志配置文件。 使用此功能可以进行不太常见的日志/分析 (例如，用于 EKF2 重放、用于 PID 和过滤器调优的高速率日志记录、热温度校准)。                |\n| "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_MISSION"}},[t._v("SDLOG_MISSION")]),t._v(" | 创建非常小的额外“任务日志”。"),r("br"),t._v("\n此日志"),r("em",[t._v("不")]),t._v(" 能使用 "),r("em",[t._v("Flight Review")]),t._v("，但当您需要一个用于地理标记或法规遵从性的小日志时，该日志非常有用。          |")],1)]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[r("em",[t._v("Developers")]),t._v(" can further configure what information is logged via the "),r("RouterLink",{attrs:{to:"/zh/modules/modules_system.html#logger"}},[t._v("logger")]),t._v(" module (you would use this, for example, if you want to log your own topics). For more information see: "),r("RouterLink",{attrs:{to:"/zh/dev_log/logging.html"}},[t._v("Logging")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"主链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主链接"}},[t._v("#")]),t._v(" 主链接")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/log/flight_review.html"}},[t._v("使用 Flight Review 进行日志分析")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/dev_log/flight_log_analysis.html"}},[t._v("飞行日志分析")])],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);