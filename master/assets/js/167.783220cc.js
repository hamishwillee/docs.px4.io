(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1239:function(t,e,a){t.exports=a.p+"assets/img/flight-review-example.fe13792d.png"},1240:function(t,e,a){t.exports=a.p+"assets/img/pyflightanalysis.9b49333e.png"},1241:function(t,e,a){t.exports=a.p+"assets/img/flightplot_0.2.16.47e04e2d.png"},1242:function(t,e,a){t.exports=a.p+"assets/img/px4tools.14f88879.png"},1243:function(t,e,a){t.exports=a.p+"assets/img/time_series.3ae56801.png"},1244:function(t,e,a){t.exports=a.p+"assets/img/plotjuggler.34dfa05a.png"},1245:function(t,e,a){t.exports=a.p+"assets/img/data_comets_overview.6b3e3597.gif"},3096:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"飞行日志分析"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#飞行日志分析"}},[t._v("#")]),t._v(" 飞行日志分析")]),t._v(" "),o("p",[t._v("本主题概述了用于 PX4 飞行日志分析的方法和软件包。")]),t._v(" "),o("h2",{attrs:{id:"飞行报告"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#飞行报告"}},[t._v("#")]),t._v(" 飞行报告")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[t._v("飞行报告")]),t._v(" 说明了如何下载日志并与开发团队报告/讨论有关飞行的问题。")],1),t._v(" "),o("h2",{attrs:{id:"结构化分析"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#结构化分析"}},[t._v("#")]),t._v(" 结构化分析")]),t._v(" "),o("p",[t._v("在分析飞行日志之前，重要的是建立它的上下文：")]),t._v(" "),o("ul",[o("li",[t._v("如果分析是在故障发生之后进行的，那么日志是捕捉到了这次故障还是在半空中停止了记录呢？")]),t._v(" "),o("li",[t._v("所有的控制器都跟踪到了它的设定值吗？ 最简单的方法是将的横滚和俯仰的角速度与它们的设定值进行比较。")]),t._v(" "),o("li",[t._v("传感器数据看起来有效吗？ 是否有非常强的震动（一个合理的判断强烈震动的阈值是所有的峰峰值是否超过 2-3m/s/s）。")]),t._v(" "),o("li",[t._v("如果根本原因不针对于特定车辆，请确保在 "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4问题跟踪器"),o("OutboundLink")],1),t._v(" 的报告中有日志文件的链接（以及视频如果有的话）。")])]),t._v(" "),o("h2",{attrs:{id:"排除电力故障"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#排除电力故障"}},[t._v("#")]),t._v(" 排除电力故障")]),t._v(" "),o("p",[t._v("如果日志文件在半空中结束了，可能有两个主要原因：电源故障 "),o("em",[t._v("或")]),t._v(" 操作系统的硬故障。")]),t._v(" "),o("p",[t._v("在基于 "),o("a",{attrs:{href:"http://www.st.com/en/microcontrollers/stm32-32-bit-arm-cortex-mcus.html?querycriteria=productId=SC1169",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32系列"),o("OutboundLink")],1),t._v(" 的自动驾驶仪上，会将操作系统的硬故障记录到SD卡上。 它位于SD卡的顶层目录且被命名为 "),o("em",[t._v("fault_date.log")]),t._v(" 比如 "),o("strong",[t._v("fault_2017_04_03_00_26_05.log")]),t._v("。 如果飞行日志突然终止，请一直检查此文件是否存在。")]),t._v(" "),o("h2",{attrs:{id:"分析工具"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#分析工具"}},[t._v("#")]),t._v(" 分析工具")]),t._v(" "),o("h3",{attrs:{id:"flight-review-在线工具"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-review-在线工具"}},[t._v("#")]),t._v(" Flight Review（在线工具）")]),t._v(" "),o("p",[o("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),o("OutboundLink")],1),t._v(" 是 "),o("em",[t._v("Log Muncher")]),t._v(" 的继承者。 他能与新的 "),o("RouterLink",{attrs:{to:"/zh/dev_log/ulog_file_format.html"}},[t._v("ULog")]),t._v(" 日志格式结合使用。")],1),t._v(" "),o("p",[t._v("主要特性：")]),t._v(" "),o("ul",[o("li",[t._v("基于 web，非常适合终端用户。")]),t._v(" "),o("li",[t._v("用户可以上传、下载、并且与他人分享报告。")]),t._v(" "),o("li",[t._v("交互式绘图。")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1239),alt:"Flight Review Charts"}})]),t._v(" "),o("p",[t._v("关于介绍，请参阅 "),o("RouterLink",{attrs:{to:"/zh/log/flight_review.html"}},[t._v("Log Analysis using Flight Review")]),t._v("。")],1),t._v(" "),o("h3",{attrs:{id:"pyulog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pyulog"}},[t._v("#")]),t._v(" pyulog")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/pyulog",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyulog"),o("OutboundLink")],1),t._v(" 是用于分析 ulog 文件的 python 包，以及一组用于提取/显示 ulog 信息并转换为其他文件格式的命令行脚本。")]),t._v(" "),o("p",[t._v("主要特性：")]),t._v(" "),o("ul",[o("li",[t._v("用于分析 ulog 文件的 python 库。 许多其他 ULog 分析和可视化工具使用的基本库。")]),t._v(" "),o("li",[t._v("提取/显示 ulog 信息的脚本：\n"),o("ul",[o("li",[o("em",[t._v("ulog_info")]),t._v(": 显示 ulog 文件中的信息。")]),t._v(" "),o("li",[o("em",[t._v("ulog_messages")]),t._v(": 显示从 ulog 文件中加载的日志报文。")]),t._v(" "),o("li",[o("em",[t._v("ulog_params")]),t._v(": 从 ulog 文件中提取参数。")])])]),t._v(" "),o("li",[t._v("转换 ulog 文件为其他格式的脚本：\n"),o("ul",[o("li",[o("em",[t._v("ulog2csv")]),t._v(" : 转换 ulog 为 CSV 文件（多个）。")]),t._v(" "),o("li",[o("em",[t._v("ulog2kml")]),t._v(" : 转换 ulog 为 KML 文件（多个）。")])])])]),t._v(" "),o("p",[t._v("所有脚本都作为系统范围的应用程序安装 (例如，在命令行上调用它们-前提是安装了 Python)，并支持 "),o("code",[t._v("-h")]),t._v(" 标志来获取使用说明。 例如：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("$ ulog_info -h\nusage: ulog_info [-h] [-v] file.ulg\n\nDisplay information from an ULog file\n\npositional arguments:\n  file.ulg       ULog 输入文件\n\noptional arguments:\n  -h, --help     显示这个帮助信息然后退出\n  -v, --verbose  详细输出\n")])])]),o("p",[t._v("下面我们将看到使用 "),o("em",[t._v("ulog_info")]),t._v(" 从示例文件导出的信息类型。")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("$ ulog_info sample.ulg\nLogging start time: 0:01:52, duration: 0:01:08\nDropouts: count: 4, total duration: 0.1 s, max: 62 ms, mean: 29 ms\nInfo Messages:\n sys_name: PX4\n time_ref_utc: 0\n ver_hw: AUAV_X21\n ver_sw: fd483321a5cf50ead91164356d15aa474643aa73\n\nName (multi id, message size in bytes)    number of data points, total bytes\n actuator_controls_0 (0, 48)                 3269     156912\n actuator_outputs (0, 76)                    1311      99636\n commander_state (0, 9)                       678       6102\n control_state (0, 122)                      3268     398696\n cpuload (0, 16)                               69       1104\n ekf2_innovations (0, 140)                   3271     457940\n estimator_status (0, 309)                   1311     405099\n sensor_combined (0, 72)                    17070    1229040\n sensor_preflight (0, 16)                   17072     273152\n telemetry_status (0, 36)                      70       2520\n vehicle_attitude (0, 36)                    6461     232596\n vehicle_attitude_setpoint (0, 55)           3272     179960\n vehicle_local_position (0, 123)              678      83394\n vehicle_rates_setpoint (0, 24)              6448     154752\n vehicle_status (0, 45)                       294      13230\n")])])]),o("h3",{attrs:{id:"pyflightanalysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pyflightanalysis"}},[t._v("#")]),t._v(" pyFlightAnalysis")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/Marxlp/pyFlightAnalysis",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyFlightAnalysis"),o("OutboundLink")],1),t._v(" 是一个跨平台的 PX4 飞行日志 (ulog) 可视化分析工具，灵感来源于 "),o("a",{attrs:{href:"#flightplot"}},[t._v("FlightPlot")]),t._v("。")]),t._v(" "),o("p",[t._v("主要特性：")]),t._v(" "),o("ul",[o("li",[t._v("用于显示数据的动态筛选器")]),t._v(" "),o("li",[t._v("无人机姿态和位置三维可视化")]),t._v(" "),o("li",[t._v("使用 pyqtgraph 的 ROI (感兴趣的区域) 轻松回放")]),t._v(" "),o("li",[t._v("基于 Python 的，跨平台的。")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1240),alt:"pyFlightAnalysis 1.0.1b1"}})]),t._v(" "),o("h3",{attrs:{id:"flightplot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flightplot"}},[t._v("#")]),t._v(" FlightPlot")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/FlightPlot",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightPlot"),o("OutboundLink")],1),t._v(" is a desktop based tool for log analysis. It can be downloaded from "),o("a",{attrs:{href:"https://github.com/PX4/FlightPlot/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightPlot Downloads"),o("OutboundLink")],1),t._v(" (Linux, MacOS, Windows).")]),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("基于 Java 的，跨平台的")]),t._v(" "),o("li",[t._v("直观的图形用户界面，不需要编程知识")]),t._v(" "),o("li",[t._v("支持新的和旧的 PX4 日志格式 (比如 .px4log，.ulg，.bin)")]),t._v(" "),o("li",[t._v("允许保存图形为图像")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1241),alt:"FlightPlot Charts"}})]),t._v(" "),o("h3",{attrs:{id:"px4tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4tools"}},[t._v("#")]),t._v(" PX4Tools")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/dronecrew/px4tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4Tools"),o("OutboundLink")],1),t._v(" is a log analysis toolbox for the PX4 autopilot written in Python. The recommended installation procedure is to use "),o("a",{attrs:{href:"https://conda.io/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("anaconda3"),o("OutboundLink")],1),t._v(". See "),o("a",{attrs:{href:"https://github.com/dronecrew/px4tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4tools github page"),o("OutboundLink")],1),t._v(" for details.")]),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("Easy to share, users can view notebooks on Github (e.g. "),o("a",{attrs:{href:"https://github.com/jgoppert/lpe-analysis/blob/master/15-09-30%20Kabir%20Log.ipynb",target:"_blank",rel:"noopener noreferrer"}},[t._v("15-09-30 Kabir Log.ipynb"),o("OutboundLink")],1),t._v(")")]),t._v(" "),o("li",[t._v("基于Python的，跨平台的，与 anaconda2 和 anaconda3 一起使用。")]),t._v(" "),o("li",[t._v("使用 iPython/jupyter notebooks 可以方便地共享分析")]),t._v(" "),o("li",[t._v("高级绘图功能，允许进行详细分析")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1242),alt:"PX4Tools-based analysis"}})]),t._v(" "),o("h3",{attrs:{id:"mavgcl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavgcl"}},[t._v("#")]),t._v(" MAVGCL")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/ecmnet/MAVGCL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVGCL"),o("OutboundLink")],1),t._v(" is an in-flight log analyzer for PX4. It can also be used in offline mode with downloaded uLog files.")]),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("基于 MAVLink 消息或 MAVLink 上 ULOG 数据的实时数据采集( 50 ms 采样，100 ms 滚动显示)")]),t._v(" "),o("li",[t._v("由消息( MAVLink 和 ULog) 和参数更改(仅 MAVLink) 注释的时间图")]),t._v(" "),o("li",[t._v("选定的关键指标的 XY 分析")]),t._v(" "),o("li",[t._v("3D 视图 (飞行器和观察者视角)")]),t._v(" "),o("li",[t._v("MAVLink inspector 面板(报告原始 MAVLink 消息)")]),t._v(" "),o("li",[t._v("离线模式：从 PX4Log/ULog 导入关键指标(通过 WiFi 从设备上获取文件或最后一次日志)")]),t._v(" "),o("li",[t._v("基于 Java 在 MacOS 和 Ubuntu 上运行。")]),t._v(" "),o("li",[t._v("更多……")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1243),alt:"MAVGCL"}})]),t._v(" "),o("h3",{attrs:{id:"plotjugler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#plotjugler"}},[t._v("#")]),t._v(" PlotJugler")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlotJuggler"),o("OutboundLink")],1),t._v(" is a Qt5 desktop application that allows users to easily visualize and analyze data expressed in the form of time series.")]),t._v(" "),o("p",[t._v("It supports "),o("strong",[t._v("ULog files")]),t._v(" (.ulg) since version 2.1.4.")]),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("直观的拖放界面。")]),t._v(" "),o("li",[t._v("可以将数据安排在多个图表、选项卡或窗口中。")]),t._v(" "),o("li",[t._v("整理好数据后，将其保存到“布局”文件中，这样支持多次重新加载。")]),t._v(" "),o("li",[t._v("可以在 PlotJuggler 里处理你的数据，使用定制的“数据转换”。")])]),t._v(" "),o("p",[t._v("Source code and downloads are available on "),o("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1244),alt:"PlotJuggler"}})]),t._v(" "),o("h3",{attrs:{id:"data-comets"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-comets"}},[t._v("#")]),t._v(" Data Comets")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/dsaffo/DataComets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Comets"),o("OutboundLink")],1),t._v(" is a interactive PX4 flight log analysis tool that allows you to encode flight data onto the flight path, filter and brush the data by time - and much more!")]),t._v(" "),o("p",[t._v("You can use the online version of the tool for small log files (< 32Mb), or run it locally in order to analyze longer flights.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1245),alt:"Data Comets"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);