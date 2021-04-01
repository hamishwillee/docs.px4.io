(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{1141:function(e,t,o){e.exports=o.p+"assets/img/log_download.68d62ffd.jpg"},1703:function(e,t,o){"use strict";o.r(t);var r=o(18),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"flight-reporting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-reporting"}},[e._v("#")]),e._v(" Flight Reporting")]),e._v(" "),r("p",[e._v("PX4 logs detailed aircraft state and sensor data, which can be used to analyze performance issues.\nThis topic explains how you can download and analyse logs, and share them with the development team for review.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Keeping flight logs is a legal requirement in some jurisdictions.")])]),e._v(" "),r("h2",{attrs:{id:"downloading-logs-from-the-flight-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#downloading-logs-from-the-flight-controller"}},[e._v("#")]),e._v(" Downloading Logs from the Flight Controller")]),e._v(" "),r("p",[e._v("Logs can be downloaded using "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),r("OutboundLink")],1),e._v(": "),r("strong",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/log_download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Analyze View > Log Download"),r("OutboundLink")],1)]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1141),alt:"Flight Log Download"}})]),e._v(" "),r("h2",{attrs:{id:"analyzing-the-logs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#analyzing-the-logs"}},[e._v("#")]),e._v(" Analyzing the Logs")]),e._v(" "),r("p",[e._v("Upload the log file to the online "),r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),r("OutboundLink")],1),e._v(" tool.\nAfter upload you'll emailed a link to the analysis page for the log.")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/log/flight_review.html"}},[e._v("Log Analysis using Flight Review")]),e._v(" explains how to interpret the plots, and can help you to verify/reject the causes of common problems: excessive vibration, poor PID tuning, saturated controllers, imbalanced vehicles, GPS noise, etc.")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("There are many other great tools for visualising and analysing PX4 Logs.\nFor more information see: "),r("RouterLink",{attrs:{to:"/en/dev_log/flight_log_analysis.html"}},[e._v("Flight Analysis")]),e._v(".")],1)]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("If you have a constant high-rate MAVLink connection to the vehicle (not just a telemetry link) then you can use "),r("em",[e._v("QGroundControl")]),e._v(" to automatically upload logs directly to "),r("em",[e._v("Flight Review")]),e._v(".\nFor more information see "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/MAVLink.html#logging",target:"_blank",rel:"noopener noreferrer"}},[e._v("Settings > MAVLink Settings > MAVLink 2 Logging (PX4 only)"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"sharing-the-log-files-for-review-by-px4-developers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sharing-the-log-files-for-review-by-px4-developers"}},[e._v("#")]),e._v(" Sharing the Log Files for Review by PX4 Developers")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),r("OutboundLink")],1),e._v(" log file link can be shared for discussion in the "),r("RouterLink",{attrs:{to:"/en/contribute/support.html#forums-and-chat"}},[e._v("support forums")]),e._v(" or a "),r("RouterLink",{attrs:{to:"/en/#reporting-bugs--issues"}},[e._v("Github issue")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"log-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log-configuration"}},[e._v("#")]),e._v(" Log Configuration")]),e._v(" "),r("p",[e._v("The logging system is configured by default to collect sensible logs for use with "),r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Logging may further be configured using the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#sd-logging"}},[e._v("SD Logging")]),e._v(" parameters.\nThe parameters you are most likely to change are listed below.")],1),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Parameter")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v("SDLOG_MODE")])],1),e._v(" "),r("td",[e._v("Logging Mode defines when logging starts and stops."),r("br"),e._v("- "),r("code",[e._v("0")]),e._v(": log when armed until disarm (default)."),r("br"),e._v("- "),r("code",[e._v("1")]),e._v(": log from boot until disarm."),r("br"),e._v("- "),r("code",[e._v("2")]),e._v(": log from boot until shutdown.")])]),e._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")])],1),e._v(" "),r("td",[e._v("Logging profile. Use this to enable less common logging/analysis (e.g. for EKF2 replay, high rate logging for PID & filter tuning, thermal temperature calibration).")])]),e._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_MISSION"}},[e._v("SDLOG_MISSION")])],1),e._v(" "),r("td",[e._v('Create very small additional "Mission Log".'),r("br"),e._v("This log can "),r("em",[e._v("not")]),e._v(" be used with "),r("em",[e._v("Flight Review")]),e._v(", but is useful when you need a small log for geotagging or regulatory compliance.")])])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[r("em",[e._v("Developers")]),e._v(" can further configure what information is logged via the "),r("RouterLink",{attrs:{to:"/en/modules/modules_system.html#logger"}},[e._v("logger")]),e._v(" module (you would use this, for example, if you want to log your own topics).\nFor more information see: "),r("RouterLink",{attrs:{to:"/en/dev_log/logging.html"}},[e._v("Logging")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"key-links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-links"}},[e._v("#")]),e._v(" Key Links")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/log/flight_review.html"}},[e._v("Log Analysis using Flight Review")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/dev_log/flight_log_analysis.html"}},[e._v("Flight Log Analysis")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);