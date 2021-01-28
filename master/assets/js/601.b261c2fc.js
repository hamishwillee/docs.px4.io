(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{1132:function(t,e,o){t.exports=o.p+"assets/img/log_download.68d62ffd.jpg"},2091:function(t,e,o){"use strict";o.r(e);var r=o(18),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"flight-reporting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-reporting"}},[t._v("#")]),t._v(" Flight Reporting")]),t._v(" "),r("p",[t._v("PX4 logs detailed aircraft state and sensor data, which can be used to analyze performance issues. This topic explains how you can download and analyse logs, and share them with the development team for review.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("Keeping flight logs is a legal requirement in some jurisdictions.")])]),t._v(" "),r("h2",{attrs:{id:"downloading-logs-from-the-flight-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#downloading-logs-from-the-flight-controller"}},[t._v("#")]),t._v(" Downloading Logs from the Flight Controller")]),t._v(" "),r("p",[t._v("Logs can be downloaded using "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),r("OutboundLink")],1),t._v(": "),r("strong",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/log_download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Analyze View > Log Download"),r("OutboundLink")],1)]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1132),alt:"Flight Log Download"}})]),t._v(" "),r("h2",{attrs:{id:"analyzing-the-logs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#analyzing-the-logs"}},[t._v("#")]),t._v(" Analyzing the Logs")]),t._v(" "),r("p",[t._v("Upload the log file to the online "),r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),r("OutboundLink")],1),t._v(" tool. After upload you'll emailed a link to the analysis page for the log.")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/log/flight_review.html"}},[t._v("Log Analysis using Flight Review")]),t._v(" explains how to interpret the plots, and can help you to verify/reject the causes of common problems: excessive vibration, poor PID tuning, saturated controllers, imbalanced vehicles, GPS noise, etc.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("There are many other great tools for visualising and analysing PX4 Logs. For more information see: "),r("RouterLink",{attrs:{to:"/ko/dev_log/flight_log_analysis.html"}},[t._v("Flight Analysis")]),t._v(".")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("If you have a constant high-rate MAVLink connection to the vehicle (not just a telemetry link) then you can use "),r("em",[t._v("QGroundControl")]),t._v(" to automatically upload logs directly to "),r("em",[t._v("Flight Review")]),t._v(". For more information see "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/MAVLink.html#logging",target:"_blank",rel:"noopener noreferrer"}},[t._v("Settings > MAVLink Settings > MAVLink 2 Logging (PX4 only)"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"sharing-the-log-files-for-review-by-px4-developers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sharing-the-log-files-for-review-by-px4-developers"}},[t._v("#")]),t._v(" Sharing the Log Files for Review by PX4 Developers")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),r("OutboundLink")],1),t._v(" log file link can be shared for discussion in the "),r("RouterLink",{attrs:{to:"/ko/contribute/support.html#forums-and-chat"}},[t._v("support forums")]),t._v(" or a "),r("RouterLink",{attrs:{to:"/ko/#reporting-bugs--issues"}},[t._v("Github issue")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"log-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log-configuration"}},[t._v("#")]),t._v(" Log Configuration")]),t._v(" "),r("p",[t._v("The logging system is configured by default to collect sensible logs for use with "),r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("Logging may further be configured using the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#sd-logging"}},[t._v("SD Logging")]),t._v(" parameters. The parameters you are most likely to change are listed below.")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_MODE"}},[t._v("SDLOG_MODE")])],1),t._v(" "),r("td",[t._v("Logging Mode defines when logging starts and stops.")])])])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("0")]),t._v(": log when armed until disarm (default).")]),t._v(" "),r("li",[r("code",[t._v("1")]),t._v(": log from boot until disarm.")]),t._v(" "),r("li",[r("code",[t._v("2")]),t._v(": log from boot until shutdown. |\n| "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[t._v("SDLOG_PROFILE")]),t._v(" | Logging profile. Use this to enable less common logging/analysis (e.g. for EKF2 replay, high rate logging for PID & filter tuning, thermal temperature calibration).            |\n| "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_MISSION"}},[t._v("SDLOG_MISSION")]),t._v(' | Create very small additional "Mission Log".'),r("br"),t._v("\nThis log can "),r("em",[t._v("not")]),t._v(" be used with "),r("em",[t._v("Flight Review")]),t._v(", but is useful when you need a small log for geotagging or regulatory compliance. |")],1)]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("em",[t._v("Developers")]),t._v(" can further configure what information is logged via the "),r("RouterLink",{attrs:{to:"/ko/modules/modules_system.html#logger"}},[t._v("logger")]),t._v(" module (you would use this, for example, if you want to log your own topics). For more information see: "),r("RouterLink",{attrs:{to:"/ko/dev_log/logging.html"}},[t._v("Logging")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"key-links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-links"}},[t._v("#")]),t._v(" Key Links")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/log/flight_review.html"}},[t._v("Log Analysis using Flight Review")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/dev_log/flight_log_analysis.html"}},[t._v("Flight Log Analysis")])],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);