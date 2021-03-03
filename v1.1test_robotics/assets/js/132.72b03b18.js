(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1164:function(t,e,a){t.exports=a.p+"assets/img/flight-review-example.fe13792d.png"},1165:function(t,e,a){t.exports=a.p+"assets/img/pyflightanalysis.9b49333e.png"},1166:function(t,e,a){t.exports=a.p+"assets/img/flightplot_0.2.16.47e04e2d.png"},1167:function(t,e,a){t.exports=a.p+"assets/img/px4tools.14f88879.png"},1168:function(t,e,a){t.exports=a.p+"assets/img/time_series.3ae56801.png"},1169:function(t,e,a){t.exports=a.p+"assets/img/plotjuggler.34dfa05a.png"},1170:function(t,e,a){t.exports=a.p+"assets/img/data_comets_overview.6b3e3597.gif"},1713:function(t,e,a){"use strict";a.r(e);var o=a(18),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"flight-log-analysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-log-analysis"}},[t._v("#")]),t._v(" Flight Log Analysis")]),t._v(" "),o("p",[t._v("This topic outlines approaches and software packages that can be used to analyze PX4 flight logs.")]),t._v(" "),o("h2",{attrs:{id:"reporting-flights"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reporting-flights"}},[t._v("#")]),t._v(" Reporting Flights")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[t._v("Flight Reporting")]),t._v(" explains how to download a log and report/discuss issues about a flight with the development team.")],1),t._v(" "),o("h2",{attrs:{id:"structured-analysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#structured-analysis"}},[t._v("#")]),t._v(" Structured Analysis")]),t._v(" "),o("p",[t._v("Before analyzing a flight log it is important to establish its context:")]),t._v(" "),o("ul",[o("li",[t._v("If the analysis is done after a malfunction, did the log capture the crash or did it stop mid-air?")]),t._v(" "),o("li",[t._v("Did all controllers track their references? The easiest way to establish this is to compare attitude roll and pitch rates to their set points.")]),t._v(" "),o("li",[t._v("Does the sensor data look valid? Was there very strong vibration (a reasonable threshold for strong vibration is anything with a peak-to-peak of more than 2-3 m/s/s).")]),t._v(" "),o("li",[t._v("If the root cause is not specific to the vehicle make sure to report it with a link to the log file (and video if one exists) on the "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 issue tracker"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"ruling-out-power-failures"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ruling-out-power-failures"}},[t._v("#")]),t._v(" Ruling Out Power Failures")]),t._v(" "),o("p",[t._v("If a log file ends mid-air, two main causes are possible: a power failure "),o("em",[t._v("or")]),t._v(" a hard fault of the operating system.")]),t._v(" "),o("p",[t._v("On autopilots based on the "),o("a",{attrs:{href:"http://www.st.com/en/microcontrollers/stm32-32-bit-arm-cortex-mcus.html?querycriteria=productId=SC1169",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32 series"),o("OutboundLink")],1),t._v(", hard faults of the operating system are logged to the SD card.\nThese are located on the top level of the SD card and named "),o("em",[t._v("fault_date.log")]),t._v(", e.g. "),o("strong",[t._v("fault_2017_04_03_00_26_05.log")]),t._v(". Please always check for the presence of this file if a flight log ends abruptly.")]),t._v(" "),o("h2",{attrs:{id:"analysis-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#analysis-tools"}},[t._v("#")]),t._v(" Analysis Tools")]),t._v(" "),o("h3",{attrs:{id:"flight-review-online-tool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-review-online-tool"}},[t._v("#")]),t._v(" Flight Review (Online Tool)")]),t._v(" "),o("p",[o("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),o("OutboundLink")],1),t._v(" is the successor of "),o("em",[t._v("Log Muncher")]),t._v(".\nIt is used in combination with the new "),o("RouterLink",{attrs:{to:"/en/dev_log/ulog_file_format.html"}},[t._v("ULog")]),t._v(" logging format.")],1),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("Web based, great for end-users.")]),t._v(" "),o("li",[t._v("User can upload, load and then share report with others.")]),t._v(" "),o("li",[t._v("Interactive plots.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1164),alt:"Flight Review Charts"}})]),t._v(" "),o("p",[t._v("See "),o("RouterLink",{attrs:{to:"/en/log/flight_review.html"}},[t._v("Log Analysis using Flight Review")]),t._v(" for an introduction.")],1),t._v(" "),o("h3",{attrs:{id:"pyulog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pyulog"}},[t._v("#")]),t._v(" pyulog")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/pyulog",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyulog"),o("OutboundLink")],1),t._v(" is a python package to parse ULog files, along with a set of command-line scripts to extract/display ULog information and convert them to other file formats.")]),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("Python library for parsing ULog files. Base library used by a number of other ULog analysis and visualisation tools.")]),t._v(" "),o("li",[t._v("Scripts to extract/display ULog information:\n"),o("ul",[o("li",[o("em",[t._v("ulog_info")]),t._v(": display information from an ULog file.")]),t._v(" "),o("li",[o("em",[t._v("ulog_messages")]),t._v(": display logged messages from an ULog file.")]),t._v(" "),o("li",[o("em",[t._v("ulog_params")]),t._v(": extract parameters from an ULog file.")])])]),t._v(" "),o("li",[t._v("Scripts to convert ULog files to other formats:\n"),o("ul",[o("li",[o("em",[t._v("ulog2csv")]),t._v(": convert ULog to (several) CSV files.")]),t._v(" "),o("li",[o("em",[t._v("ulog2kml")]),t._v(": convert ULog to (several) KML files.")])])])]),t._v(" "),o("p",[t._v("All scripts are installed as system-wide applications (i.e. they be called on the command line - provided Python is installed), and support the "),o("code",[t._v("-h")]),t._v(" flag for getting usage instructions. For example:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("$ ulog_info -h\nusage: ulog_info [-h] [-v] file.ulg\n\nDisplay information from an ULog file\n\npositional arguments:\n  file.ulg       ULog input file\n\noptional arguments:\n  -h, --help     show this help message and exit\n  -v, --verbose  Verbose output\n")])])]),o("p",[t._v("Below we see the kind of information exported from a sample file using "),o("em",[t._v("ulog_info")]),t._v(".")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("$ ulog_info sample.ulg\nLogging start time: 0:01:52, duration: 0:01:08\nDropouts: count: 4, total duration: 0.1 s, max: 62 ms, mean: 29 ms\nInfo Messages:\n sys_name: PX4\n time_ref_utc: 0\n ver_hw: AUAV_X21\n ver_sw: fd483321a5cf50ead91164356d15aa474643aa73\n\nName (multi id, message size in bytes)    number of data points, total bytes\n actuator_controls_0 (0, 48)                 3269     156912\n actuator_outputs (0, 76)                    1311      99636\n commander_state (0, 9)                       678       6102\n control_state (0, 122)                      3268     398696\n cpuload (0, 16)                               69       1104\n ekf2_innovations (0, 140)                   3271     457940\n estimator_status (0, 309)                   1311     405099\n sensor_combined (0, 72)                    17070    1229040\n sensor_preflight (0, 16)                   17072     273152\n telemetry_status (0, 36)                      70       2520\n vehicle_attitude (0, 36)                    6461     232596\n vehicle_attitude_setpoint (0, 55)           3272     179960\n vehicle_local_position (0, 123)              678      83394\n vehicle_rates_setpoint (0, 24)              6448     154752\n vehicle_status (0, 45)                       294      13230\n")])])]),o("h3",{attrs:{id:"pyflightanalysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pyflightanalysis"}},[t._v("#")]),t._v(" pyFlightAnalysis")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/Marxlp/pyFlightAnalysis",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyFlightAnalysis"),o("OutboundLink")],1),t._v(" is a cross-platform PX4 flight log (ULog) visual analysis tool, inspired by "),o("a",{attrs:{href:"#flightplot"}},[t._v("FlightPlot")]),t._v(".")]),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("Dynamic filter for displaying data")]),t._v(" "),o("li",[t._v("3D visualization for attitude and position of drone")]),t._v(" "),o("li",[t._v("Easily replay with pyqtgraph's ROI (Region Of Interest)")]),t._v(" "),o("li",[t._v("Python based, cross-platform.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1165),alt:"pyFlightAnalysis 1.0.1b1"}})]),t._v(" "),o("p",[o("span",{attrs:{id:"flightplot"}})]),t._v(" "),o("h3",{attrs:{id:"flightplot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flightplot"}},[t._v("#")]),t._v(" FlightPlot")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/FlightPlot",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightPlot"),o("OutboundLink")],1),t._v(" is a desktop based tool for log analysis. It can be downloaded from "),o("a",{attrs:{href:"https://github.com/PX4/FlightPlot/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightPlot Downloads"),o("OutboundLink")],1),t._v(" (Linux, MacOS, Windows).")]),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("Java based, cross-platform.")]),t._v(" "),o("li",[t._v("Intuitive GUI, no programming knowledge required.")]),t._v(" "),o("li",[t._v("Supports both new and old PX4 log formats (.ulg, .px4log, .bin)")]),t._v(" "),o("li",[t._v("Allows saving plots as images.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1166),alt:"FlightPlot Charts"}})]),t._v(" "),o("h3",{attrs:{id:"px4tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4tools"}},[t._v("#")]),t._v(" PX4Tools")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/dronecrew/px4tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4Tools"),o("OutboundLink")],1),t._v(" is a log analysis toolbox for the PX4 autopilot written in Python.\nThe recommended installation procedure is to use "),o("a",{attrs:{href:"https://conda.io/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("anaconda3"),o("OutboundLink")],1),t._v(". See "),o("a",{attrs:{href:"https://github.com/dronecrew/px4tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4tools github page"),o("OutboundLink")],1),t._v(" for details.")]),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("Easy to share, users can view notebooks on Github (e.g. [https://github.com/jgoppert/lpe-analysis/blob/master/15-09-30%20Kabir%20Log.ipynb](https://github.com/jgoppert/lpe-analysis/blob/master/15-09-30 Kabir Log.ipynb))")]),t._v(" "),o("li",[t._v("Python based, cross platform, works witn anaconda 2 and anaconda3")]),t._v(" "),o("li",[t._v("iPython/ jupyter notebooks can be used to share analysis easily")]),t._v(" "),o("li",[t._v("Advanced plotting capabilities to allow detailed analysis")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1167),alt:"PX4Tools-based analysis"}})]),t._v(" "),o("h3",{attrs:{id:"mavgcl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavgcl"}},[t._v("#")]),t._v(" MAVGCL")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/ecmnet/MAVGCL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVGCL"),o("OutboundLink")],1),t._v(" is an in-flight log analyzer for PX4.\nIt can also be used in offline mode with downloaded uLog files.")]),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("Realtime data acquisition (50ms sampling, 100ms rolling display) based on MAVLink messages or ULOG data over MAVLink")]),t._v(" "),o("li",[t._v("Timechart annotated by messages (MAVLink and ULog) and parameter changes (MAVLink only)")]),t._v(" "),o("li",[t._v("XY Analysis for selected key-figures")]),t._v(" "),o("li",[t._v("3D View (vehicle and observer perspective)")]),t._v(" "),o("li",[t._v("MAVLink inspector (reporting raw MAVLink messages)")]),t._v(" "),o("li",[t._v("Offline-mode: Import of key-figures from PX4Log/ULog (file or last log from device via WiFi)")]),t._v(" "),o("li",[t._v("Java based. Known to work on macOS and Ubuntu.")]),t._v(" "),o("li",[t._v("And many more ...")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(1168),alt:"MAVGCL"}})]),t._v(" "),o("h3",{attrs:{id:"plotjuggler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#plotjuggler"}},[t._v("#")]),t._v(" PlotJuggler")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlotJuggler"),o("OutboundLink")],1),t._v(" is a Qt5 desktop application\nthat allows users to easily visualize and analyze data expressed in the form of time series.")]),t._v(" "),o("p",[t._v("It supports "),o("strong",[t._v("ULog files")]),t._v(" (.ulg) since version 2.1.4.")]),t._v(" "),o("p",[t._v("Key features:")]),t._v(" "),o("ul",[o("li",[t._v("Intuitive drag&drop interface.")]),t._v(" "),o("li",[t._v("Arrange your data in multiple plots, tabs or windows.")]),t._v(" "),o("li",[t._v('Once you arranged your data, save it into a "Layout" file and reload it multiple times.')]),t._v(" "),o("li",[t._v('Process your data inside PlotJuggler itself, using custom "data transformations".')])]),t._v(" "),o("p",[t._v("Source code and downloads are available on "),o("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1169),alt:"PlotJuggler"}})]),t._v(" "),o("h3",{attrs:{id:"data-comets"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-comets"}},[t._v("#")]),t._v(" Data Comets")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/dsaffo/DataComets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Comets"),o("OutboundLink")],1),t._v(" is a interactive PX4 flight log analysis tool that allows you to encode flight data onto the flight path, filter and brush the data by time - and much more!")]),t._v(" "),o("p",[t._v("You can use the online version of the tool for small log files (< 32Mb), or run it locally in order to analyze longer flights.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1170),alt:"Data Comets"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);