(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1341:function(t,s,a){t.exports=a.p+"assets/img/flight-review-example.fe13792d.png"},1342:function(t,s,a){t.exports=a.p+"assets/img/plotjuggler_example_view.54320ad5.png"},1343:function(t,s,a){t.exports=a.p+"assets/img/pyflightanalysis.9b49333e.png"},1344:function(t,s,a){t.exports=a.p+"assets/img/flightplot_0.2.16.47e04e2d.png"},1345:function(t,s,a){t.exports=a.p+"assets/img/px4tools.14f88879.png"},1346:function(t,s,a){t.exports=a.p+"assets/img/time_series.3ae56801.png"},1347:function(t,s,a){t.exports=a.p+"assets/img/data_comets_overview.6b3e3597.gif"},2638:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"비행-로그-분석"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#비행-로그-분석"}},[t._v("#")]),t._v(" 비행 로그 분석")]),t._v(" "),e("p",[t._v("This topic provide an overview of the tools and methods that can be used to analyze PX4 flight logs (more detailed topics are linked below in some cases).")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("Flight Reporting")]),t._v(" explains how to download a log and report/discuss issues about a flight with the development team.")],1)]),t._v(" "),e("h2",{attrs:{id:"구조-분석"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구조-분석"}},[t._v("#")]),t._v(" 구조 분석")]),t._v(" "),e("p",[t._v("비행 로그를 분석하기 전에 상황 파악이 더 중요합니다.")]),t._v(" "),e("ul",[e("li",[t._v("오작동 후 분석이 수행되면 로그에 충돌이 캡처 되었습니까 아니면 공중에서 중지 되었습니까?")]),t._v(" "),e("li",[t._v("모든 컨트롤러가 사건들을 추적 했습니까? 이를 설정하는 가장 쉬운 방법은 자세의 롤 및 피치 속도를 설정 포인트와 비교하는 것입니다.")]),t._v(" "),e("li",[t._v("센서 데이터가 유효합니까? Was there very strong vibration (a reasonable threshold for strong vibration is anything with a peak-to-peak of more than 2-3 m/s/s).")]),t._v(" "),e("li",[t._v("If the root cause is not specific to the vehicle make sure to report it with a link to the log file (and video if one exists) on the "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 issue tracker"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"정전-방지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#정전-방지"}},[t._v("#")]),t._v(" 정전 방지")]),t._v(" "),e("p",[t._v("If a log file ends mid-air, two main causes are possible: a power failure "),e("em",[t._v("or")]),t._v(" a hard fault of the operating system.")]),t._v(" "),e("p",[t._v("On autopilots based on the "),e("a",{attrs:{href:"http://www.st.com/en/microcontrollers/stm32-32-bit-arm-cortex-mcus.html?querycriteria=productId=SC1169",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32 series"),e("OutboundLink")],1),t._v(", hard faults are logged to the SD card. "),e("a",{attrs:{href:"http://www.st.com/en/microcontrollers/stm32-32-bit-arm-cortex-mcus.html?querycriteria=productId=SC1169",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32 시리즈"),e("OutboundLink")],1),t._v(" 기반 자동 조종 장치에서는 운영 체제의 하드 오류가 SD 카드에 기록됩니다. You should check for the presence of this file if a flight log ends abruptly.")]),t._v(" "),e("h2",{attrs:{id:"분석-도구"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#분석-도구"}},[t._v("#")]),t._v(" 분석 도구")]),t._v(" "),e("h3",{attrs:{id:"flight-review-온라인-도구"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flight-review-온라인-도구"}},[t._v("#")]),t._v(" Flight Review (온라인 도구)")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),e("OutboundLink")],1),t._v(" is the successor of "),e("em",[t._v("Log Muncher")]),t._v(". 새로운 "),e("RouterLink",{attrs:{to:"/ko/dev_log/ulog_file_format.html"}},[t._v("ULog")]),t._v(" 로깅 형식과 함께 사용됩니다.")],1),t._v(" "),e("p",[t._v("주요 기능:")]),t._v(" "),e("ul",[e("li",[t._v("웹 기반으로 되어 있어며, 일반 사용자에게 적합합니다.")]),t._v(" "),e("li",[t._v("사용자는 보고서를 업로드하고 다른 사람과 공유 할 수 있습니다.")]),t._v(" "),e("li",[t._v("대화형 플롯.")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(1341),alt:"비행 검토 차트"}})]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/ko/log/flight_review.html"}},[t._v("Log Analysis using Flight Review")]),t._v(" for an introduction.")],1),t._v(" "),e("h3",{attrs:{id:"plotjuggler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plotjuggler"}},[t._v("#")]),t._v(" PlotJuggler")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlotJuggler"),e("OutboundLink")],1),t._v(" is a desktop application that allows users to easily visualize and analyze data expressed in the form of time series. This is one of the best ULog analysis tools as it exposes all information in the log ("),e("a",{attrs:{href:"#flight-review-online-tool"}},[t._v("Flight Review")]),t._v(", by comparison, only shows a small subset of the data).")]),t._v(" "),e("p",[t._v("It supports ULog files (.ulg) since version 2.1.4.")]),t._v(" "),e("p",[t._v("주요 기능:")]),t._v(" "),e("ul",[e("li",[t._v("Intuitive drag & drop interface.")]),t._v(" "),e("li",[t._v("여러 플롯, 탭과 창에서 데이터를 정렬합니다.")]),t._v(" "),e("li",[t._v("All uORB topics are shown and can be graphed.")]),t._v(" "),e("li",[t._v('데이터를 정렬 후 "레이아웃" 파일에 저장하고 다시 로드할 수 있습니다.')]),t._v(" "),e("li",[t._v("Process your data inside "),e("em",[t._v("PlotJuggler")]),t._v(' itself, using custom "data transformations".')])]),t._v(" "),e("p",[t._v("소스 코드 다운로드는 "),e("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),e("OutboundLink")],1),t._v("에서 제공합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1342),alt:"PlotJuggler"}})]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/ko/log/plotjuggler_log_analysis.html"}},[t._v("Log Analysis using Plot Juggler")]),t._v(" for an introduction.")],1),t._v(" "),e("h3",{attrs:{id:"pyulog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pyulog"}},[t._v("#")]),t._v(" pyulog")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/pyulog",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyulog"),e("OutboundLink")],1),t._v("는 ULog 정보를 추출/표시하고 다른 파일 형식으로 변환하는 일련의 명령 줄 스크립트와 함께 ULog 파일을 구문 분석하는 Python 패키지입니다.")]),t._v(" "),e("p",[t._v("주요 기능:")]),t._v(" "),e("ul",[e("li",[t._v("ULog 파일을 구문 분석하기위한 Python 라이브러리입니다. 다른 여러 ULog 분석 및 시각화 도구에서 사용하는 기본 라이브러리입니다.")]),t._v(" "),e("li",[t._v("ULog 정보를 추출/표시하는 스크립트 :\n"),e("ul",[e("li",[e("em",[t._v("ulog_info")]),t._v(" : ULog 파일의 정보를 표시합니다.")]),t._v(" "),e("li",[e("em",[t._v("ulog_messages")]),t._v(" : ULog 파일에서 기록된 메시지를 표시합니다.")]),t._v(" "),e("li",[e("em",[t._v("ulog_params")]),t._v(" : ULog 파일에서 매개 변수를 추출합니다.")])])]),t._v(" "),e("li",[t._v("ULog 파일을 다른 포맷으로 변환하는 스크립트 :\n"),e("ul",[e("li",[e("em",[t._v("ulog2csv")]),t._v(" : ULog를 (여러) CSV 파일로 변환합니다.")]),t._v(" "),e("li",[e("em",[t._v("ulog2kml")]),t._v(" : ULog를 (여러) KML 파일로 변환합니다.")])])])]),t._v(" "),e("p",[t._v("모든 스크립트는 시스템 전체 애플리케이션으로 설치되며 (즉, Python이 설치된 경우 명령 줄에서 호출 됨) 도움말을 "),e("code",[t._v("-h")]),t._v(" 옵션을 사용하여 볼 수 있습니다. 예:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ ulog_info -h\nusage: ulog_info "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-v"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" file.ulg\n\nULog 파일의 정보 표시\n\n위치 인수 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n  file.ulg       ULog input "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n\n선택적 인수 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n  -h, --help    이 도움말 메시지를 표시하고 종료\n  -v, --verbose 자세한 출력\n")])])]),e("p",[t._v("다음은 "),e("em",[t._v("ulog_info")]),t._v("를 사용하여 샘플 파일에서 내보내기한 정보의 종류입니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ ulog_info sample.ulg\nLogging start time: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":01:52, duration: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":01:08\nDropouts: count: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(", total duration: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" s, max: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("62")]),t._v(" ms, mean: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v(" ms\nInfo Messages:\n sys_name: PX4\n time_ref_utc: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n ver_hw: AUAV_X21\n ver_sw: fd483321a5cf50ead91164356d15aa474643aa73\n\nName "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("multi id, message size "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" bytes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    number of data points, total bytes\n actuator_controls_0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3269")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("156912")]),t._v("\n actuator_outputs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("76")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1311")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99636")]),t._v("\n commander_state "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("678")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6102")]),t._v("\n control_state "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3268")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("398696")]),t._v("\n cpuload "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                               "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("69")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1104")]),t._v("\n ekf2_innovations "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("140")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3271")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("457940")]),t._v("\n estimator_status "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("309")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1311")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("405099")]),t._v("\n sensor_combined "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("72")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17070")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1229040")]),t._v("\n sensor_preflight "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17072")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("273152")]),t._v("\n telemetry_status "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2520")]),t._v("\n vehicle_attitude "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6461")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("232596")]),t._v("\n vehicle_attitude_setpoint "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3272")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("179960")]),t._v("\n vehicle_local_position "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("678")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("83394")]),t._v("\n vehicle_rates_setpoint "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6448")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("154752")]),t._v("\n vehicle_status "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("294")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("13230")]),t._v(" \n")])])]),e("h3",{attrs:{id:"pyflightanalysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pyflightanalysis"}},[t._v("#")]),t._v(" pyFlightAnalysis")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Marxlp/pyFlightAnalysis",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyFlightAnalysis"),e("OutboundLink")],1),t._v("는 "),e("a",{attrs:{href:"#flightplot"}},[t._v("FlightPlot")]),t._v("에서 영감을 얻은 크로스 플랫폼 PX4 비행 로그 (ULog) 비쥬얼 분석 도구입니다.")]),t._v(" "),e("p",[t._v("주요 기능:")]),t._v(" "),e("ul",[e("li",[t._v("데이터 표시를위한 동적 필터")]),t._v(" "),e("li",[t._v("드론의 자세와 위치에 대한 3D 시각화")]),t._v(" "),e("li",[t._v("Easily replay with "),e("em",[t._v("pyqtgraph")]),t._v("'s ROI (Region Of Interest)")]),t._v(" "),e("li",[t._v("Python 기반, 다양한 플랫폼 지원.")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(1343),alt:"pyFlightAnalysis 1.0.1b1"}})]),t._v(" "),e("h3",{attrs:{id:"flightplot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flightplot"}},[t._v("#")]),t._v(" FlightPlot")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/FlightPlot",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightPlot"),e("OutboundLink")],1),t._v("은 로그 분석을 위한 데스크톱 기반 도구입니다. "),e("a",{attrs:{href:"https://github.com/PX4/FlightPlot/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightPlot 다운로드"),e("OutboundLink")],1),t._v(" (Linux, MacOS, Windows)에서 다운로드 할 수 있습니다.")]),t._v(" "),e("p",[t._v("주요 기능:")]),t._v(" "),e("ul",[e("li",[t._v("Java 기반, 다양한 플랫폼 지원.")]),t._v(" "),e("li",[t._v("직관적인 GUI, 프로그래밍 지식이 필요하지 않습니다.")]),t._v(" "),e("li",[t._v("신규 및 기존 PX4 로그 형식 (.ulg, .px4log, .bin) 모두 지원")]),t._v(" "),e("li",[t._v("그래프를 이미지로 저장할 수 있습니다.")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(1344),alt:"FlightPlot 챠트"}})]),t._v(" "),e("h3",{attrs:{id:"px4tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4tools"}},[t._v("#")]),t._v(" PX4Tools")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/dronecrew/px4tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4Tools"),e("OutboundLink")],1),t._v("는 Python으로 작성된 PX4 자동 조종 장치 로그 분석도구입니다. 권장되는 설치 절차는 "),e("a",{attrs:{href:"https://conda.io/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("anaconda3"),e("OutboundLink")],1),t._v("를 사용하는 것입니다. 자세한 내용은 "),e("a",{attrs:{href:"https://github.com/dronecrew/px4tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4tools github 페이지"),e("OutboundLink")],1),t._v("를 참조하세요.")]),t._v(" "),e("p",[t._v("주요 기능:")]),t._v(" "),e("ul",[e("li",[t._v("공유하기 쉽고 사용자는 Github 노트북을 조회할 수 있습니다(예: "),e("a",{attrs:{href:"https://github.com/jgoppert/lpe-analysis/blob/master/15-09-30%20Kabir%20Log.ipynb",target:"_blank",rel:"noopener noreferrer"}},[t._v("15-09-30 Kabir Log.ipynb"),e("OutboundLink")],1),t._v(").")]),t._v(" "),e("li",[t._v("Python based, cross platform, works with anaconda 2 and anaconda3")]),t._v(" "),e("li",[t._v("iPython/jupyter 노트북을 사용하여 분석과 공유가 편리합니다.")]),t._v(" "),e("li",[t._v("상세한 분석이 가능한 고급 플로팅 기능")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(1345),alt:"PX4Tools 기반 분석"}})]),t._v(" "),e("h3",{attrs:{id:"mavgcl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavgcl"}},[t._v("#")]),t._v(" MAVGCL")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/ecmnet/MAVGCL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVGC"),e("OutboundLink")],1),t._v("은 PX4 용 기내 로그 분석기입니다. 다운로드한 uLog 파일로 오프라인 모드에서도 사용 가능합니다.")]),t._v(" "),e("p",[t._v("주요 기능:")]),t._v(" "),e("ul",[e("li",[t._v("MAVLink 메시지 또는 MAVLink를 통한 ULOG 데이터에 기반한 실시간 데이터 수집 (50ms 샘플링, 100ms 롤링 디스플레이)")]),t._v(" "),e("li",[t._v("메시지 (MAVLink 및 ULog) 및 매개 변수 변경 (MAVLink 전용)으로 주석이 추가 된 타임 차트")]),t._v(" "),e("li",[t._v("선택한 주요 수치에 대한 XY 분석")]),t._v(" "),e("li",[t._v("3D보기(차량 및 관찰자 관점)")]),t._v(" "),e("li",[t._v("MAVLink 검사기 (원시 MAVLink 메시지 보고)")]),t._v(" "),e("li",[t._v("오프라인 모드 : PX4Log / ULog에서 키 그림 가져오기 (WiFi를 통해 장치에서 파일 또는 마지막 로그)")]),t._v(" "),e("li",[t._v("Java 기반. macOS 및 Ubuntu에서 작동하는 것으로 알려져 있습니다.")]),t._v(" "),e("li",[t._v("그리고 더 많은 기능들 ...")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(1346),alt:"MAVGCL"}})]),t._v(" "),e("h3",{attrs:{id:"data-comets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-comets"}},[t._v("#")]),t._v(" Data Comets")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/dsaffo/DataComets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Comets"),e("OutboundLink")],1),t._v("는 비행 데이터를 비행 경로에 인코딩하고 시간별로 데이터 필터링과 브러싱 할 수있는 대화형 PX4 비행로그 분석도구입니다.")]),t._v(" "),e("p",[t._v("작은 로그 파일(32Mb 이하)에 대한 도구의 온라인 버전을 사용하거나, 장시간 비행 분석은 로컬에서 실행할 수 있습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1347),alt:"Data Comets"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);