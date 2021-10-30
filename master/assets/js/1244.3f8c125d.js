(window.webpackJsonp=window.webpackJsonp||[]).push([[1244],{2406:function(t,e,o){"use strict";o.r(e);var a=o(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"전체-애플리케이션을-위한-모듈-템플릿"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#전체-애플리케이션을-위한-모듈-템플릿"}},[t._v("#")]),t._v(" 전체 애플리케이션을 위한 모듈 템플릿")]),t._v(" "),o("p",[t._v("애플리케이션은 "),o("em",[t._v("작업")]),t._v("(자체 스택 및 프로세스 우선순위가 있는 모듈) 또는 "),o("em",[t._v("작업 대기열 작업")]),t._v("(작업에서 실행되는 모듈, 대기열 스레드, 작업 대기열의 다른 작업과 스택 및 스레드 우선순위 공유)으로 실행되도록 작성할 수 있습니다. 대부분은, 리소스 최소화를 위하여 작업 대기열을 사용합니다.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/concept/architecture.html#runtime-environment"}},[t._v("구조 개요 > 런타임 환경")]),t._v("은 작업 및 작업 대기열 작업에 대한 자세한 정보를 제공합니다.")],1)]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/modules/hello_sky.html"}},[t._v("첫 번째 응용 프로그램 자습서")]),t._v("에서 배운 내용은 전체 응용 프로그램 작성과 관련이 있습니다.")],1)]),t._v(" "),o("h2",{attrs:{id:"작업-대기열-작업"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#작업-대기열-작업"}},[t._v("#")]),t._v(" 작업 대기열 작업")]),t._v(" "),o("p",[t._v("PX4-Autopilot에는 "),o("em",[t._v("작업 대기열 작업")]),t._v("으로 실행되는 애플리케이션(모듈)을 작성하기 위한 템플릿이 포함되어 있습니다. "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/examples/work_item",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/examples/work_item"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("작업 대기열 작업 응용 프로그램은 작업 대기열 작업임을 지정하고 초기화중에 실행되도록 예약해야 한다는 점을 제외하고 일반(작업) 응용 프로그램과 동일합니다.")]),t._v(" "),o("p",[t._v("예제는 방법을 설명합니다. 요약:")]),t._v(" "),o("ol",[o("li",[t._v("cmake 정의 파일("),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/examples/work_item/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMakeLists.txt"),o("OutboundLink")],1),t._v(")에서 작업 대기열 라이브러리에 대한 종속성을 지정합니다."),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("...\nDEPENDS\n   px4_work_queue\n")])])])]),t._v(" "),o("li",[o("code",[t._v("ModuleBase")]),t._v(" 외에도 작업은 "),o("code",[t._v("ScheduledWorkItem")]),t._v("("),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/common/include/px4_platform_common/px4_work_queue/ScheduledWorkItem.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("ScheduledWorkItem.hpp"),o("OutboundLink")],1),t._v("에 포함)에서 파생되어야 합니다.")]),t._v(" "),o("li",[t._v("생성자 초기화에서 작업을 추가할 대기열을 지정합니다. "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/examples/work_item/WorkItemExample.cpp#L42",target:"_blank",rel:"noopener noreferrer"}},[t._v("work_item"),o("OutboundLink")],1),t._v(" 예제는 아래와 같이 "),o("code",[t._v("wq_configurations::test1")]),t._v(" 작업 대기열에 추가됩니다."),o("div",{staticClass:"language-cpp extra-class"},[o("pre",{pre:!0,attrs:{class:"language-cpp"}},[o("code",[o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkItemExample")]),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("WorkItemExample")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("ModuleParams")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("ScheduledWorkItem")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MODULE_NAME"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" px4"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("wq_configurations"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("test1"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("사용 가능한 작업 대기열("),o("code",[t._v("wq_configurations")]),t._v(")은 "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/common/include/px4_platform_common/px4_work_queue/WorkQueueManager.hpp#L49",target:"_blank",rel:"noopener noreferrer"}},[t._v("WorkQueueManager.hpp"),o("OutboundLink")],1),t._v("에 나열됩니다.")])]),t._v(" "),o("ol",[o("li",[o("code",[t._v("ScheduledWorkItem::Run()")]),t._v(' 메서드를 구현하여 "작업"을 수행합니다.')]),t._v(" "),o("li",[o("code",[t._v("task_spawn")]),t._v(" 메서드를 구현하여 작업이 작업 대기열임을 지정합니다("),o("code",[t._v("task_id_is_work_queue")]),t._v(" ID 사용).")]),t._v(" "),o("li",[t._v("예약 방법 중 하나를 사용하여 작업 대기열 작업을 예약합니다(예제에서는 "),o("code",[t._v("init")]),t._v(" 방법 내에서 "),o("code",[t._v("ScheduleOnInterval")]),t._v(" 사용).")])]),t._v(" "),o("h2",{attrs:{id:"작업"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#작업"}},[t._v("#")]),t._v(" 작업")]),t._v(" "),o("p",[t._v("PX4/PX4-Autopilot에는 자체 스택에서 작업으로 실행되는 애플리케이션(모듈)을 작성하기 위한 템플릿이 포함되어 있습니다. "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/templates/template_module",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/templates/template_module"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("템플릿은 전체 애플리케이션에 필요하거나 유용한 다음과 같은 추가 기능/측면을 보여줍니다.")]),t._v(" "),o("ul",[o("li",[t._v("매개변수에 액세스하고 매개변수 업데이트에 반응합니다.")]),t._v(" "),o("li",[t._v("uORB 구독 및 주제 업데이트 대기 중입니다.")]),t._v(" "),o("li",[o("code",[t._v("시작")]),t._v("/"),o("code",[t._v("중지")]),t._v("/"),o("code",[t._v("상태")]),t._v("를 통해 백그라운드에서 실행되는 작업을 제어합니다. 그런 다음 "),o("code",[t._v("module start [<arguments>]")]),t._v(" 명령을 직접 추가할 수 있습니다. "),o("RouterLink",{attrs:{to:"/ko/concept/system_startup.html"}},[t._v("시작 스크립트")]),t._v(".")],1),t._v(" "),o("li",[t._v("명령줄 인수 구문 분석.")]),t._v(" "),o("li",[t._v("문서: "),o("code",[t._v("PRINT_MODULE_*")]),t._v(" 메서드는 두 가지 용도로 사용됩니다(API는 "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/v1.8.0/src/platforms/px4_module.h#L381",target:"_blank",rel:"noopener noreferrer"}},[t._v("소스 코드"),o("OutboundLink")],1),t._v("에 문서화됨):\n"),o("ul",[o("li",[t._v("콘솔에서 "),o("code",[t._v("module help")]),t._v("를 입력할 때 명령줄 사용법을 인쇄합니다.")]),t._v(" "),o("li",[t._v("스크립트를 통해 자동으로 추출되어 "),o("RouterLink",{attrs:{to:"/ko/modules/modules_main.html"}},[t._v("모듈 & 명령 참조")]),t._v(" 페이지.")],1)])])])])}),[],!1,null,null,null);e.default=s.exports}}]);