(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1162:function(t,e,a){t.exports=a.p+"assets/img/flight-review-example.fe13792d.png"},1163:function(t,e,a){t.exports=a.p+"assets/img/pyflightanalysis.9b49333e.png"},1164:function(t,e,a){t.exports=a.p+"assets/img/flightplot_0.2.16.47e04e2d.png"},1165:function(t,e,a){t.exports=a.p+"assets/img/px4tools.14f88879.png"},1166:function(t,e,a){t.exports=a.p+"assets/img/time_series.3ae56801.png"},1167:function(t,e,a){t.exports=a.p+"assets/img/plotjuggler.34dfa05a.png"},1168:function(t,e,a){t.exports=a.p+"assets/img/data_comets_overview.6b3e3597.gif"},2158:function(t,e,a){"use strict";a.r(e);var r=a(19),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"비행-로그-분석"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#비행-로그-분석"}},[t._v("#")]),t._v(" 비행 로그 분석")]),t._v(" "),r("p",[t._v("PX4 비행 로그 분석 소프트웨어와 방법에 대하여 설명합니다.")]),t._v(" "),r("h2",{attrs:{id:"비행-보고서"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#비행-보고서"}},[t._v("#")]),t._v(" 비행 보고서")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("비행 보고서")]),t._v("에서는 로그를 다운로드하여 개발팀과 함께 비행 문제를 보고하고 토론하는 방법을 설명합니다.")],1),t._v(" "),r("h2",{attrs:{id:"구조-분석"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구조-분석"}},[t._v("#")]),t._v(" 구조 분석")]),t._v(" "),r("p",[t._v("비행 로그를 분석하기 전에 상황 파악이 더 중요합니다.")]),t._v(" "),r("ul",[r("li",[t._v("오작동 후 분석이 수행되면 로그에 충돌이 캡처 되었습니까 아니면 공중에서 중지 되었습니까?")]),t._v(" "),r("li",[t._v("모든 컨트롤러가 사건들을 추적 했습니까? 이를 설정하는 가장 쉬운 방법은 자세의 롤 및 피치 속도를 설정 포인트와 비교하는 것입니다.")]),t._v(" "),r("li",[t._v("센서 데이터가 유효합니까? 매우 강한 진동이 있었습니까? (강한 진동에 대한 합리적인 임계 값은 피크 대 피크가 2-3m/s/ s 이상인 모든 것입니다.)")]),t._v(" "),r("li",[t._v("근본 원인이 차량에 국한되지 않은 경우 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 문제 추적기 "),r("OutboundLink")],1),t._v("의 로그 파일 \\ (존재하는 경우 동영상 포함)\\에 대한 링크와 함께 보고해야합니다.")])]),t._v(" "),r("h2",{attrs:{id:"정전-방지"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#정전-방지"}},[t._v("#")]),t._v(" 정전 방지")]),t._v(" "),r("p",[t._v("로그 파일이 비행중에 중단되는 경우는 두 가지 주요 원인일 수 있습니다. 정전 "),r("em",[t._v("또는")]),t._v(" 운영 체제의 심각한 오류입니다.")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.st.com/en/microcontrollers/stm32-32-bit-arm-cortex-mcus.html?querycriteria=productId=SC1169",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32 시리즈"),r("OutboundLink")],1),t._v(" 기반 자동 조종 장치에서는 운영 체제의 하드 오류가 SD 카드에 기록됩니다. 이러한 파일은 SD 카드의 최상위 수준에 있으며 "),r("em",[t._v("fault_date.log")]),t._v("로 이름이 지정됩니다 (예 : "),r("strong",[t._v("오류_2017_04_03_00_26_05.log")]),t._v(". 비행 로그가 갑자기 종료되는 경우 항상이 파일이 있는지 확인하십시오.")]),t._v(" "),r("h2",{attrs:{id:"분석-도구"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#분석-도구"}},[t._v("#")]),t._v(" 분석 도구")]),t._v(" "),r("h3",{attrs:{id:"flight-review-온라인-도구"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-review-온라인-도구"}},[t._v("#")]),t._v(" Flight Review (온라인 도구)")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),r("OutboundLink")],1),t._v("는 "),r("em",[t._v("Log Muncher")]),t._v("의 후속 제품입니다. 새로운 "),r("RouterLink",{attrs:{to:"/ko/dev_log/ulog_file_format.html"}},[t._v("ULog")]),t._v(" 로깅 형식과 함께 사용됩니다.")],1),t._v(" "),r("p",[t._v("주요 기능:")]),t._v(" "),r("ul",[r("li",[t._v("웹 기반으로 되어 있어며, 일반 사용자에게 적합합니다.")]),t._v(" "),r("li",[t._v("사용자는 보고서를 업로드하고 다른 사람과 공유 할 수 있습니다.")]),t._v(" "),r("li",[t._v("대화형 플롯.")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(1162),alt:"비행 검토 차트"}})]),t._v(" "),r("p",[t._v("입분용 "),r("RouterLink",{attrs:{to:"/ko/log/flight_review.html"}},[t._v("비행 검토를 사용한 로그 분석 ")]),t._v("을 참조하세요.")],1),t._v(" "),r("h3",{attrs:{id:"pyulog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pyulog"}},[t._v("#")]),t._v(" pyulog")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/PX4/pyulog",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyulog"),r("OutboundLink")],1),t._v("는 ULog 정보를 추출/표시하고 다른 파일 형식으로 변환하는 일련의 명령 줄 스크립트와 함께 ULog 파일을 구문 분석하는 Python 패키지입니다.")]),t._v(" "),r("p",[t._v("주요 기능:")]),t._v(" "),r("ul",[r("li",[t._v("ULog 파일을 구문 분석하기위한 Python 라이브러리입니다. 다른 여러 ULog 분석 및 시각화 도구에서 사용하는 기본 라이브러리입니다.")]),t._v(" "),r("li",[t._v("ULog 정보를 추출/표시하는 스크립트 :\n"),r("ul",[r("li",[r("em",[t._v("ulog_info")]),t._v(" : ULog 파일의 정보를 표시합니다.")]),t._v(" "),r("li",[r("em",[t._v("ulog_messages")]),t._v(" : ULog 파일에서 기록된 메시지를 표시합니다.")]),t._v(" "),r("li",[r("em",[t._v("ulog_params")]),t._v(" : ULog 파일에서 매개 변수를 추출합니다.")])])]),t._v(" "),r("li",[t._v("ULog 파일을 다른 포맷으로 변환하는 스크립트 :\n"),r("ul",[r("li",[r("em",[t._v("ulog2csv")]),t._v(" : ULog를 (여러) CSV 파일로 변환합니다.")]),t._v(" "),r("li",[r("em",[t._v("ulog2kml")]),t._v(" : ULog를 (여러) KML 파일로 변환합니다.")])])])]),t._v(" "),r("p",[t._v("모든 스크립트는 시스템 전체 애플리케이션으로 설치되며 (즉, Python이 설치된 경우 명령 줄에서 호출 됨) 도움말을 "),r("code",[t._v("-h")]),t._v(" 옵션을 사용하여 볼 수 있습니다. 예:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("$ ulog_info -h\nusage: ulog_info [-h] [-v] file.ulg\n\nULog 파일의 정보 표시\n\n위치 인수 :\n  file.ulg       ULog input file\n\n선택적 인수 :\n  -h, --help    이 도움말 메시지를 표시하고 종료\n  -v, --verbose 자세한 출력\n")])])]),r("p",[t._v("다음은 "),r("em",[t._v("ulog_info")]),t._v("를 사용하여 샘플 파일에서 내보내기한 정보의 종류입니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("$ ulog_info sample.ulg\nLogging start time: 0:01:52, duration: 0:01:08\nDropouts: count: 4, total duration: 0.1 s, max: 62 ms, mean: 29 ms\nInfo Messages:\n sys_name: PX4\n time_ref_utc: 0\n ver_hw: AUAV_X21\n ver_sw: fd483321a5cf50ead91164356d15aa474643aa73\n\nName (multi id, message size in bytes)    number of data points, total bytes\n actuator_controls_0 (0, 48)                 3269     156912\n actuator_outputs (0, 76)                    1311      99636\n commander_state (0, 9)                       678       6102\n control_state (0, 122)                      3268     398696\n cpuload (0, 16)                               69       1104\n ekf2_innovations (0, 140)                   3271     457940\n estimator_status (0, 309)                   1311     405099\n sensor_combined (0, 72)                    17070    1229040\n sensor_preflight (0, 16)                   17072     273152\n telemetry_status (0, 36)                      70       2520\n vehicle_attitude (0, 36)                    6461     232596\n vehicle_attitude_setpoint (0, 55)           3272     179960\n vehicle_local_position (0, 123)              678      83394\n vehicle_rates_setpoint (0, 24)              6448     154752\n vehicle_status (0, 45)                       294      13230 \n")])])]),r("h3",{attrs:{id:"pyflightanalysis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pyflightanalysis"}},[t._v("#")]),t._v(" pyFlightAnalysis")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/Marxlp/pyFlightAnalysis",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyFlightAnalysis"),r("OutboundLink")],1),t._v("는 "),r("a",{attrs:{href:"#flightplot"}},[t._v("FlightPlot")]),t._v("에서 영감을 얻은 크로스 플랫폼 PX4 비행 로그 (ULog) 비쥬얼 분석 도구입니다.")]),t._v(" "),r("p",[t._v("주요 기능:")]),t._v(" "),r("ul",[r("li",[t._v("데이터 표시를위한 동적 필터")]),t._v(" "),r("li",[t._v("드론의 자세와 위치에 대한 3D 시각화")]),t._v(" "),r("li",[t._v("pyqtgraph의 ROI (관심 지역)로 쉽게 재생")]),t._v(" "),r("li",[t._v("Python 기반, 다양한 플랫폼 지원.")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(1163),alt:"pyFlightAnalysis 1.0.1b1"}})]),t._v(" "),r("h3",{attrs:{id:"flightplot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flightplot"}},[t._v("#")]),t._v(" FlightPlot")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/PX4/FlightPlot",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightPlot"),r("OutboundLink")],1),t._v("은 로그 분석을 위한 데스크톱 기반 도구입니다. "),r("a",{attrs:{href:"https://github.com/PX4/FlightPlot/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightPlot 다운로드"),r("OutboundLink")],1),t._v(" (Linux, MacOS, Windows)에서 다운로드 할 수 있습니다.")]),t._v(" "),r("p",[t._v("주요 특징")]),t._v(" "),r("ul",[r("li",[t._v("Java 기반, 다양한 플랫폼 지원.")]),t._v(" "),r("li",[t._v("직관적인 GUI, 프로그래밍 지식이 필요하지 않습니다.")]),t._v(" "),r("li",[t._v("신규 및 기존 PX4 로그 형식 (.ulg, .px4log, .bin) 모두 지원")]),t._v(" "),r("li",[t._v("그래프를 이미지로 저장할 수 있습니다.")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(1164),alt:"FlightPlot 챠트"}})]),t._v(" "),r("h3",{attrs:{id:"px4tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4tools"}},[t._v("#")]),t._v(" PX4Tools")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/dronecrew/px4tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4Tools"),r("OutboundLink")],1),t._v("는 Python으로 작성된 PX4 자동 조종 장치 로그 분석도구입니다. 권장되는 설치 절차는 "),r("a",{attrs:{href:"https://conda.io/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("anaconda3"),r("OutboundLink")],1),t._v("를 사용하는 것입니다. 자세한 내용은 "),r("a",{attrs:{href:"https://github.com/dronecrew/px4tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4tools github 페이지"),r("OutboundLink")],1),t._v("를 참조하세요.")]),t._v(" "),r("p",[t._v("주요 특징")]),t._v(" "),r("ul",[r("li",[t._v("공유가 용이하며, Github (예 : [https://github.com/jgoppert/lpe-analysis/blob/master/15-09-30%20Kabir%20Log.ipynb ](https://github.com/jgoppert/lpe-analysis/blob/master/15-09-30 Kabir Log.ipynb))에서 샘플 쥬피터 노트북이 제공됩니다.")]),t._v(" "),r("li",[t._v("Python 기반, 다중 플랫폼, anaconda2 및 anaconda3에서 작동")]),t._v(" "),r("li",[t._v("iPython/jupyter 노트북을 사용하여 분석과 공유가 편리합니다.")]),t._v(" "),r("li",[t._v("상세한 분석이 가능한 고급 플로팅 기능")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(1165),alt:"PX4Tools 기반 분석"}})]),t._v(" "),r("h3",{attrs:{id:"mavgcl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mavgcl"}},[t._v("#")]),t._v(" MAVGCL")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ecmnet/MAVGCL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVGC"),r("OutboundLink")],1),t._v("은 PX4 용 기내 로그 분석기입니다. 다운로드한 uLog 파일로 오프라인 모드에서도 사용 가능합니다.")]),t._v(" "),r("p",[t._v("주요 특징")]),t._v(" "),r("ul",[r("li",[t._v("MAVLink 메시지 또는 MAVLink를 통한 ULOG 데이터에 기반한 실시간 데이터 수집 (50ms 샘플링, 100ms 롤링 디스플레이)")]),t._v(" "),r("li",[t._v("메시지 (MAVLink 및 ULog) 및 매개 변수 변경 (MAVLink 전용)으로 주석이 추가 된 타임 차트")]),t._v(" "),r("li",[t._v("선택한 주요 수치에 대한 XY 분석")]),t._v(" "),r("li",[t._v("3D보기(차량 및 관찰자 관점)")]),t._v(" "),r("li",[t._v("MAVLink 검사기 (원시 MAVLink 메시지 보고)")]),t._v(" "),r("li",[t._v("오프라인 모드 : PX4Log / ULog에서 키 그림 가져오기 (WiFi를 통해 장치에서 파일 또는 마지막 로그)")]),t._v(" "),r("li",[t._v("Java 기반. macOS 및 Ubuntu에서 작동하는 것으로 알려져 있습니다.")]),t._v(" "),r("li",[t._v("그리고 더 많은 기능들 ...")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(1166),alt:"MAVGCL"}})]),t._v(" "),r("h3",{attrs:{id:"plotjuggler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plotjuggler"}},[t._v("#")]),t._v(" PlotJuggler")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlotJuggler"),r("OutboundLink")],1),t._v("는 Qt5 데스크톱 애플리케이션입니다. 사용자가 시계열 형태의 데이터를 시각화하고 분석할 수 있습니다.")]),t._v(" "),r("p",[t._v("2.1.4 버전부터 "),r("strong",[t._v("ULog 파일")]),t._v(" (. ulg)을 지원합니다.")]),t._v(" "),r("p",[t._v("주요 특징")]),t._v(" "),r("ul",[r("li",[t._v("직관적인 드래그 앤 드롭 인터페이스.")]),t._v(" "),r("li",[t._v("여러 플롯, 탭과 창에서 데이터를 정렬합니다.")]),t._v(" "),r("li",[t._v('데이터를 정렬 후 "레이아웃" 파일에 저장하고 다시 로드할 수 있습니다.')]),t._v(" "),r("li",[t._v('사용자 지정 "데이터 변환"을 사용하여 PlotJuggler 자체 내에서 데이터를 처리합니다.')])]),t._v(" "),r("p",[t._v("소스 코드 다운로드는 "),r("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),r("OutboundLink")],1),t._v("에서 제공합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1167),alt:"PlotJuggler"}})]),t._v(" "),r("h3",{attrs:{id:"data-comets"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-comets"}},[t._v("#")]),t._v(" Data Comets")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/dsaffo/DataComets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Comets"),r("OutboundLink")],1),t._v("는 비행 데이터를 비행 경로에 인코딩하고 시간별로 데이터 필터링과 브러싱 할 수있는 대화형 PX4 비행로그 분석도구입니다.")]),t._v(" "),r("p",[t._v("작은 로그 파일(32Mb 이하)에 대한 도구의 온라인 버전을 사용하거나, 장시간 비행 분석은 로컬에서 실행할 수 있습니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1168),alt:"Data Comets"}})])])}),[],!1,null,null,null);e.default=_.exports}}]);