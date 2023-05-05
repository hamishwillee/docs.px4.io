(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1416:function(t,e,s){t.exports=s.p+"assets/img/flight-review-example.fe13792d.png"},1417:function(t,e,s){t.exports=s.p+"assets/img/plotjuggler_example_view.54320ad5.png"},1418:function(t,e,s){t.exports=s.p+"assets/img/flightplot_0.2.16.47e04e2d.png"},1419:function(t,e,s){t.exports=s.p+"assets/img/px4tools.14f88879.png"},1420:function(t,e,s){t.exports=s.p+"assets/img/time_series.3ae56801.png"},1421:function(t,e,s){t.exports=s.p+"assets/img/data_comets_overview.6b3e3597.gif"},2060:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flight-log-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-log-analysis"}},[t._v("#")]),t._v(" Flight Log Analysis")]),t._v(" "),a("p",[t._v("This topic provide an overview of the tools and methods that can be used to analyze PX4 flight logs (more detailed topics are linked below in some cases).")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[t._v("Flight Reporting")]),t._v(" explains how to download a log and report/discuss issues about a flight with the development team.")],1)]),t._v(" "),a("h2",{attrs:{id:"structured-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structured-analysis"}},[t._v("#")]),t._v(" Structured Analysis")]),t._v(" "),a("p",[t._v("Before analyzing a flight log it is important to establish its context:")]),t._v(" "),a("ul",[a("li",[t._v("If the analysis is done after a malfunction, did the log capture the crash or did it stop mid-air?")]),t._v(" "),a("li",[t._v("Did all controllers track their references?\nThe easiest way to establish this is to compare attitude roll and pitch rates to their set points.")]),t._v(" "),a("li",[t._v("Does the sensor data look valid? Was there very strong vibration (a reasonable threshold for strong vibration is anything with a peak-to-peak of more than 2-3 m/s/s).")]),t._v(" "),a("li",[t._v("If the root cause is not specific to the vehicle make sure to report it with a link to the log file (and video if one exists) on the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 issue tracker"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"ruling-out-power-failures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ruling-out-power-failures"}},[t._v("#")]),t._v(" Ruling Out Power Failures")]),t._v(" "),a("p",[t._v("If a log file ends mid-air, two main causes are possible: a power failure "),a("em",[t._v("or")]),t._v(" a hard fault of the operating system.")]),t._v(" "),a("p",[t._v("On autopilots based on the "),a("a",{attrs:{href:"http://www.st.com/en/microcontrollers/stm32-32-bit-arm-cortex-mcus.html?querycriteria=productId=SC1169",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32 series"),a("OutboundLink")],1),t._v(", hard faults are logged to the SD card.\nThese are located on the top level of the SD card and named "),a("em",[t._v("fault_date.log")]),t._v(", e.g. "),a("strong",[t._v("fault_2017_04_03_00_26_05.log")]),t._v(".\nYou should check for the presence of this file if a flight log ends abruptly.")]),t._v(" "),a("h2",{attrs:{id:"analysis-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analysis-tools"}},[t._v("#")]),t._v(" Analysis Tools")]),t._v(" "),a("h3",{attrs:{id:"flight-review-online-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-review-online-tool"}},[t._v("#")]),t._v(" Flight Review (Online Tool)")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),a("OutboundLink")],1),t._v(" is the successor of "),a("em",[t._v("Log Muncher")]),t._v(".\nIt is used in combination with the new "),a("RouterLink",{attrs:{to:"/en/dev_log/ulog_file_format.html"}},[t._v("ULog")]),t._v(" logging format.")],1),t._v(" "),a("p",[t._v("Key features:")]),t._v(" "),a("ul",[a("li",[t._v("Web based, great for end-users.")]),t._v(" "),a("li",[t._v("User can upload, load and then share report with others.")]),t._v(" "),a("li",[t._v("Interactive plots.")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(1416),alt:"Flight Review Charts"}})]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/en/log/flight_review.html"}},[t._v("Log Analysis using Flight Review")]),t._v(" for an introduction.")],1),t._v(" "),a("h3",{attrs:{id:"plotjuggler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plotjuggler"}},[t._v("#")]),t._v(" PlotJuggler")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlotJuggler"),a("OutboundLink")],1),t._v(" is a desktop application that allows users to easily visualize and analyze data expressed in the form of time series.\nThis is one of the best ULog analysis tools as it exposes all information in the log ("),a("a",{attrs:{href:"#flight-review-online-tool"}},[t._v("Flight Review")]),t._v(", by comparison, only shows a small subset of the data).")]),t._v(" "),a("p",[t._v("It supports ULog files (.ulg) since version 2.1.4.")]),t._v(" "),a("p",[t._v("Key features:")]),t._v(" "),a("ul",[a("li",[t._v("Intuitive drag & drop interface.")]),t._v(" "),a("li",[t._v("Arrange your data in multiple plots, tabs or windows.")]),t._v(" "),a("li",[t._v("All uORB topics are shown and can be graphed.")]),t._v(" "),a("li",[t._v('Once you arranged your data, save it into a "Layout" file and reload it multiple times.')]),t._v(" "),a("li",[t._v("Process your data inside "),a("em",[t._v("PlotJuggler")]),t._v(' itself, using custom "data transformations".')])]),t._v(" "),a("p",[t._v("Source code and downloads are available on "),a("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1417),alt:"PlotJuggler"}})]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/en/log/plotjuggler_log_analysis.html"}},[t._v("Log Analysis using Plot Juggler")]),t._v(" for an introduction.")],1),t._v(" "),a("h3",{attrs:{id:"pyulog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pyulog"}},[t._v("#")]),t._v(" pyulog")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/pyulog",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyulog"),a("OutboundLink")],1),t._v(" is a python package to parse ULog files, along with a set of command-line scripts to extract/display ULog information and convert them to other file formats.")]),t._v(" "),a("p",[t._v("Key features:")]),t._v(" "),a("ul",[a("li",[t._v("Python library for parsing ULog files. Base library used by a number of other ULog analysis and visualisation tools.")]),t._v(" "),a("li",[t._v("Scripts to extract/display ULog information:\n"),a("ul",[a("li",[a("em",[t._v("ulog_info")]),t._v(": display information from an ULog file.")]),t._v(" "),a("li",[a("em",[t._v("ulog_messages")]),t._v(": display logged messages from an ULog file.")]),t._v(" "),a("li",[a("em",[t._v("ulog_params")]),t._v(": extract parameters from an ULog file.")])])]),t._v(" "),a("li",[t._v("Scripts to convert ULog files to other formats:\n"),a("ul",[a("li",[a("em",[t._v("ulog2csv")]),t._v(": convert ULog to (several) CSV files.")]),t._v(" "),a("li",[a("em",[t._v("ulog2kml")]),t._v(": convert ULog to (several) KML files.")])])])]),t._v(" "),a("p",[t._v("All scripts are installed as system-wide applications (i.e. they be called on the command line - provided Python is installed), and support the "),a("code",[t._v("-h")]),t._v(" flag for getting usage instructions. For example:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ ulog_info -h\nusage: ulog_info "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" file.ulg\n\nDisplay information from an ULog "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n\npositional arguments:\n  file.ulg       ULog input "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n\noptional arguments:\n  -h, --help     show this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  -v, --verbose  Verbose output\n")])])]),a("p",[t._v("Below we see the kind of information exported from a sample file using "),a("em",[t._v("ulog_info")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ ulog_info sample.ulg\nLogging start time: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":01:52, duration: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":01:08\nDropouts: count: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(", total duration: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" s, max: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("62")]),t._v(" ms, mean: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v(" ms\nInfo Messages:\n sys_name: PX4\n time_ref_utc: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n ver_hw: AUAV_X21\n ver_sw: fd483321a5cf50ead91164356d15aa474643aa73\n\nName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("multi id, message size "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    number of data points, total bytes\n actuator_controls_0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3269")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("156912")]),t._v("\n actuator_outputs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("76")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1311")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99636")]),t._v("\n commander_state "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("678")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6102")]),t._v("\n control_state "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3268")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("398696")]),t._v("\n cpuload "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("69")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1104")]),t._v("\n ekf2_innovations "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("140")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3271")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("457940")]),t._v("\n estimator_status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("309")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1311")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("405099")]),t._v("\n sensor_combined "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("72")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17070")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1229040")]),t._v("\n sensor_preflight "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17072")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("273152")]),t._v("\n telemetry_status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2520")]),t._v("\n vehicle_attitude "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6461")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("232596")]),t._v("\n vehicle_attitude_setpoint "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3272")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("179960")]),t._v("\n vehicle_local_position "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("678")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("83394")]),t._v("\n vehicle_rates_setpoint "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6448")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("154752")]),t._v("\n vehicle_status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("294")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13230")]),t._v("\n")])])]),a("h3",{attrs:{id:"flightplot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flightplot"}},[t._v("#")]),t._v(" FlightPlot")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/FlightPlot",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightPlot"),a("OutboundLink")],1),t._v(" is a desktop based tool for log analysis. It can be downloaded from "),a("a",{attrs:{href:"https://github.com/PX4/FlightPlot/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightPlot Downloads"),a("OutboundLink")],1),t._v(" (Linux, MacOS, Windows).")]),t._v(" "),a("p",[t._v("Key features:")]),t._v(" "),a("ul",[a("li",[t._v("Java based, cross-platform.")]),t._v(" "),a("li",[t._v("Intuitive GUI, no programming knowledge required.")]),t._v(" "),a("li",[t._v("Supports both new and old PX4 log formats (.ulg, .px4log, .bin)")]),t._v(" "),a("li",[t._v("Allows saving plots as images.")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(1418),alt:"FlightPlot Charts"}})]),t._v(" "),a("h3",{attrs:{id:"px4tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4tools"}},[t._v("#")]),t._v(" PX4Tools")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dronecrew/px4tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4Tools"),a("OutboundLink")],1),t._v(" is a log analysis toolbox for the PX4 autopilot written in Python.\nThe recommended installation procedure is to use "),a("a",{attrs:{href:"https://conda.io/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("anaconda3"),a("OutboundLink")],1),t._v(". See "),a("a",{attrs:{href:"https://github.com/dronecrew/px4tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4tools github page"),a("OutboundLink")],1),t._v(" for details.")]),t._v(" "),a("p",[t._v("Key features:")]),t._v(" "),a("ul",[a("li",[t._v("Easy to share, users can view notebooks on Github (e.g. "),a("a",{attrs:{href:"https://github.com/jgoppert/lpe-analysis/blob/master/15-09-30%20Kabir%20Log.ipynb",target:"_blank",rel:"noopener noreferrer"}},[t._v("15-09-30 Kabir Log.ipynb"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("Python based, cross platform, works with anaconda 2 and anaconda3")]),t._v(" "),a("li",[t._v("iPython/ jupyter notebooks can be used to share analysis easily")]),t._v(" "),a("li",[t._v("Advanced plotting capabilities to allow detailed analysis")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(1419),alt:"PX4Tools-based analysis"}})]),t._v(" "),a("h3",{attrs:{id:"mavgcl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavgcl"}},[t._v("#")]),t._v(" MAVGCL")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ecmnet/MAVGCL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVGCL"),a("OutboundLink")],1),t._v(" is an in-flight log analyzer for PX4.\nIt can also be used in offline mode with downloaded uLog files.")]),t._v(" "),a("p",[t._v("Key features:")]),t._v(" "),a("ul",[a("li",[t._v("Realtime data acquisition (50ms sampling, 100ms rolling display) based on MAVLink messages or ULOG data over MAVLink")]),t._v(" "),a("li",[t._v("Timechart annotated by messages (MAVLink and ULog) and parameter changes (MAVLink only)")]),t._v(" "),a("li",[t._v("XY Analysis for selected key-figures")]),t._v(" "),a("li",[t._v("3D View (vehicle and observer perspective)")]),t._v(" "),a("li",[t._v("MAVLink inspector (reporting raw MAVLink messages)")]),t._v(" "),a("li",[t._v("Offline-mode: Import of key-figures from PX4Log/ULog (file or last log from device via WiFi)")]),t._v(" "),a("li",[t._v("Java based. Known to work on macOS and Ubuntu.")]),t._v(" "),a("li",[t._v("And many more ...")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(1420),alt:"MAVGCL"}})]),t._v(" "),a("h3",{attrs:{id:"data-comets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-comets"}},[t._v("#")]),t._v(" Data Comets")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dsaffo/DataComets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Comets"),a("OutboundLink")],1),t._v(" is a interactive PX4 flight log analysis tool that allows you to encode flight data onto the flight path, filter and brush the data by time - and much more!")]),t._v(" "),a("p",[t._v("You can use the online version of the tool for small log files (< 32Mb), or run it locally in order to analyze longer flights.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1421),alt:"Data Comets"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);