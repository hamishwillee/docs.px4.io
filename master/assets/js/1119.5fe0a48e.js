(window.webpackJsonp=window.webpackJsonp||[]).push([[1119],{2088:function(a,t,s){"use strict";s.r(t);var e=s(19),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"매개변수와-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수와-설정"}},[a._v("#")]),a._v(" 매개변수와 설정")]),a._v(" "),s("p",[a._v("PX4는 "),s("em",[a._v("param 하위 시스템")]),a._v("("),s("code",[a._v("float")]),a._v(" 및 "),s("code",[a._v("int32_t")]),a._v(" 값의 플랫 테이블)과 텍스트 파일(믹서 및 시작 스크립트용)로 설정을 저장합니다.")]),a._v(" "),s("p",[a._v("이 섹션에서는 "),s("em",[a._v("param")]),a._v(" 하위 시스템을 자세히 설명합니다. 매개변수를 나열, 저장 및 로드하는 방법과 매개변수를 정의하고 지상국에서 사용하는 방법을 설명합니다.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/concept/system_startup.html"}},[a._v("시스템 시작")]),a._v("과 "),s("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html"}},[a._v("기체 구성")]),a._v("은 다른 페이지에 자세히 설명합니다.")],1)]),a._v(" "),s("h2",{attrs:{id:"명령줄-사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#명령줄-사용법"}},[a._v("#")]),a._v(" 명령줄 사용법")]),a._v(" "),s("p",[a._v("PX4 "),s("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[a._v("시스템 콘솔")]),a._v("은 매개변수를 설정하고, 값을 읽고, 저장하고, 파일로 내보내고 복원하는  "),s("RouterLink",{attrs:{to:"/ko/modules/modules_command.html#param"}},[a._v("param")]),a._v(" 도구를 제공합니다.")],1),a._v(" "),s("h3",{attrs:{id:"매개변수-가져오기-및-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-가져오기-및-설정"}},[a._v("#")]),a._v(" 매개변수 가져오기 및 설정")]),a._v(" "),s("p",[s("code",[a._v("param show")]),a._v(" 명령은 모든 시스템 매개변수를 나열합니다.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param show\n")])])]),s("p",[a._v('매개변수 이름 인수에 와일드카드 "*"를 사용할 수 있습니다.')]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("nsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" param show RC_MAP_A*\nSymbols: x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" used, + "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" saved, * "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" unsaved\nx   RC_MAP_AUX1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("359,498")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_AUX2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("360,499")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_AUX3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("361,500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_ACRO_SW "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("375,514")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("723")]),a._v(" parameters total, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("532")]),a._v(" used.\n")])])]),s("p",[s("code",[a._v("-c")]),a._v(" 플래그를 사용하여 (기본값에서) 변경된 모든 매개변수를 표시할 수 있습니다.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param show -c\n")])])]),s("p",[s("code",[a._v("param show-for-airframe")]),a._v("을 사용하여 현재 기체의 정의 파일에 대해서만 기본값에서 변경된 모든 매개변수를 표시할 수 있습니다.")]),a._v(" "),s("h3",{attrs:{id:"매개변수-내보내기-및-로드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-내보내기-및-로드"}},[a._v("#")]),a._v(" 매개변수 내보내기 및 로드")]),a._v(" "),s("p",[s("em",[a._v("변경된")]),a._v(" 매개변수를 저장할 수 있습니다(기체 기본값과 다름).")]),a._v(" "),s("p",[a._v("표준 "),s("code",[a._v("param save")]),a._v(" 명령은 현재 기본 파일에 매개변수를 저장합니다.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param save\n")])])]),s("p",[a._v("인수가 제공되면, 이 새 위치 대신 매개변수를 저장합니다.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param save /fs/microsd/vtol_param_backup\n")])])]),s("p",[a._v("매개변수를 "),s("em",[a._v("로드")]),a._v("하는 두 가지 명령어가 있습니다.")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("param load")]),a._v("는 모든 매개변수를 기본값으로 완전히 재설정한 다음, 매개변수를 파일에 저장된 값으로 덮어씁니다.")]),a._v(" "),s("li",[s("code",[a._v("param import")]),a._v("는 매개변수 값을 파일의 값으로 덮어쓴 다음 결과를 저장합니다(즉, "),s("code",[a._v("param save")]),a._v("를 효과적으로 호출).")])]),a._v(" "),s("p",[s("code",[a._v("load")]),a._v(' 명령은 "실질적"으로 매개변수 값을 저장했을 때의 상태로 초기화합니다("실질적"이란 표현을 쓴 이유는 파일에 저장한 어떤 매개변수 값이든 업데이트하겠지만, 다른 매개변수는 파일을 만들었을 때의 매개변수 값과는 다른 펌웨어 지정 기본 값을 가집니다).')]),a._v(" "),s("p",[a._v("반면에, "),s("code",[a._v("import")]),a._v(" 명령은 기체의 현재 상태 값과 파일의 매개변수 값을 병합합니다. 예를 들어, 시스템 설정의 나머지 부분을 덮어쓰지 않고 보정 데이터가 포함된 매개변수 파일을 가져오는 데 사용할 수 있습니다.")]),a._v(" "),s("p",[a._v("두 경우에 대한 예를 아래에서 설명합니다.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 파일을 저장하고 나면 매개변수 값 초기화")]),a._v("\nparam load /fs/microsd/vtol_param_backup\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 추가로 매개변수 값 저장 (불러온다고 해서 자동으로 끝나지는 않음)")]),a._v("\nparam save\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 현재 매개변수 값 목록에 저장한 매개변수 값 병합")]),a._v("\nparam "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" /fs/microsd/vtol_param_backup  \n")])])]),s("h2",{attrs:{id:"매개변수-생성-정의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-생성-정의"}},[a._v("#")]),a._v(" 매개변수 생성/정의")]),a._v(" "),s("p",[a._v("매개변수 정의에는 두 부분이 있습니다.")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#parameter-metadata"}},[a._v("매개변수 메타데이터")]),a._v("는 지상 관제소와 문서에서 매개변수의 표시(및 편집)를 위한 다른 메타데이터와 함께 펌웨어의 매개변수에 대한 기본값들을 지정합니다.")]),a._v(" "),s("li",[a._v("PX4 모듈 및 드라이버 내에서 매개변수 값을 가져오거나 구독할 수 있는 "),s("a",{attrs:{href:"#c-c-api"}},[a._v("C/C++ 코드")]),a._v("가 있습니다.")])]),a._v(" "),s("p",[a._v("메타데이터와 코드를 작성하기 위한 몇 가지 접근 방식을 아래에서 설명합니다. 코드는 더 유연하고 강력하기 때문에 이전의 C 매개변수/코드 정의보다 최신 "),s("a",{attrs:{href:"#yaml-metadata"}},[a._v("YAML 메타데이터")]),a._v(" 및 "),s("a",{attrs:{href:"#c-api"}},[a._v("C++ API")]),a._v("를 사용하여야 합니다.")]),a._v(" "),s("p",[a._v("매개변수 메타데이터는 "),s("a",{attrs:{href:"#publishing-parameter-metadata-to-a-gcs"}},[a._v("펌웨어로 컴파일")]),a._v("되고, "),s("a",{attrs:{href:"https://mavlink.io/en/services/component_information.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("MAVLink 구성 요소 정보 서비스"),s("OutboundLink")],1),a._v("를 통하여 지상국에서 사용할 수 있습니다.")]),a._v(" "),s("h3",{attrs:{id:"매개변수-이름"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-이름"}},[a._v("#")]),a._v(" 매개변수 이름")]),a._v(" "),s("p",[a._v("매개변수 이름은 ASCII 문자 16자 이하입니다.")]),a._v(" "),s("p",[a._v("관례에 따라, 그룹의 모든 매개변수는 동일한(의미 있는) 문자열 접두사 뒤에 밑줄이 와야 하며, 특히 멀티콥터 또는 고정익 관련 매개변수에는 "),s("code",[a._v("MC_")]),a._v(" 및 "),s("code",[a._v("FW_")]),a._v("가 사용됩니다. 이 관례는 강제 사항은 아닙니다.")]),a._v(" "),s("p",[a._v("매개변수를 해당 메타데이터(펌웨어의 기본값 포함)와 올바르게 연결하려면, 이름이 코드와 "),s("a",{attrs:{href:"#parameter-metadata"}},[a._v("매개변수 메타데이터")]),a._v("에서 일치하여야 합니다.")]),a._v(" "),s("h3",{attrs:{id:"c-c-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-c-api"}},[a._v("#")]),a._v(" C / C++ API")]),a._v(" "),s("p",[a._v("PX4 모듈 및 드라이버에서 매개변수 사용할 수 있는 C 및 C++ API가 있습니다.")]),a._v(" "),s("p",[a._v("API 간의 중요한 차이점 중 하나는 C++ 버전이 매개변수 값(예: GCS에서) 변경과 동기화하는 보다 효율적인 표준화 메커니즘이 있다는 것입니다.")]),a._v(" "),s("p",[a._v("매개변수는 언제든지 다른 값으로 변경될 수 있으므로, 동기화가 중요합니다. 코드는 매개변수 저장소에서 최신 값을 "),s("em",[a._v("항상")]),a._v(" 사용하여야 합니다. 최신 버전을 가져올 수 없는 경우에는, 매개변수를 변경한 후 재부팅합니다("),s("code",[a._v("@reboot_required")]),a._v(" 메타데이터를 사용하여 이 요구사항 설정).")]),a._v(" "),s("p",[a._v("또한, C++ 버전은 유형 안전성이 더 우수하고 메모리 사용량이 적습니다. 단점은 매개변수 이름을 컴파일 타임에 알아야 하는 반면에, C API는 동적으로 생성된 이름을 문자열로 사용할 수 있습니다.")]),a._v(" "),s("h4",{attrs:{id:"c-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-api"}},[a._v("#")]),a._v(" C++ API")]),a._v(" "),s("p",[a._v("C++ API는 매개변수를 "),s("em",[a._v("클래스 속성")]),a._v("으로 선언하는 매크로를 제공합니다. "),s("em",[a._v("모든")]),a._v(" 매개변수 업데이트와 관련된 "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[a._v("uORB 주제")]),a._v('의 변경 사항을 정기적으로 수신하기 위하여 일부 "보일러 플레이트" 코드를 추가합니다. 그런 다음, 프레임워크 코드는 매개변수 속성에 영향을 미치는 uORB 메시지 추적을 처리하고 동기화 상태를 유지합니다. 나머지 코드에서는 정의된 매개변수 속성을 사용할 수 있으며, 항상 최신 상태를 유지합니다!')],1),a._v(" "),s("p",[a._v("제일 먼저, 모듈 또는 드라이버의 클래스 헤더에 필요한 필수 헤더를 포함합니다.")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("px4_platform_common/module_params.h")]),a._v("를 사용하여 "),s("code",[a._v("DEFINE_PARAMETERS")]),a._v(" 매크로를 가져옵니다."),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<px4_platform_common/module_params.h>")])]),a._v("\n")])])])]),a._v(" "),s("li",[a._v("uORB "),s("code",[a._v("parameter_update")]),a._v(" 메시지에 액세스하려면 "),s("strong",[a._v("parameter_update.h")]),a._v("를 인클루드합니다."),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<uORB/topics/parameter_update.h>")])]),a._v("\n")])])])]),a._v(" "),s("li",[a._v("uORB C++ 구독 API용 "),s("strong",[a._v("Subscription.hpp")]),a._v("를 인클루드합니다.:"),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<uORB/Subscription.hpp>")])]),a._v("\n")])])])])]),a._v(" "),s("p",[s("code",[a._v("ModuleParams")]),a._v("에서 클래스를 파생하고, "),s("code",[a._v("DEFINE_PARAMETERS")]),a._v("를 사용하여 매개변수 목록 및 관련 매개변수 속성을 지정합니다. 매개변수의 이름은 매개변수 메타데이터 정의와 동일하여야 합니다.")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyModule")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token base-clause"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ModuleParams")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Check for parameter changes and update them if needed.\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("parameters_update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("DEFINE_PARAMETERS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ParamInt"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("px4"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("params"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("SYS_AUTOSTART"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" _sys_autostart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**< example parameter */")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ParamFloat"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("px4"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("params"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("ATT_BIAS_MAX"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" _att_bias_max  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**< another parameter */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Subscriptions")]),a._v("\n    uORB"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("SubscriptionInterval _parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ORB_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("_s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("매개변수 업데이트와 관련된 uORB 메시지를 확인하기 위해 상용구로 cpp 파일을 업데이트합니다.")]),a._v(" "),s("p",[a._v("코드에서 주기적으로 "),s("code",[a._v("parameters_update();")]),a._v("를 호출하여 업데이트합니다.")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Module")]),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("parameters_update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("updated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        parameter_update_s param_update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        _parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("copy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("param_update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// If any parameter updated, call updateParams() to check if")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// this class attributes need updating (and do so). ")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("updateParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("위의 함수에서 :")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("_parameter_update_sub.updated()")]),a._v("는 "),s("code",[a._v("param_update")]),a._v(" uORB 메시지에 대한 "),s("em",[a._v("업데이트 여부를")]),a._v(" 알려줍니다(영향을 받는 매개변수는 아님).")]),a._v(" "),s("li",[a._v('"일부" 매개변수가 업데이트된 경우에는, 보류 중인 업데이트를 지우기 위하여 업데이트를 '),s("code",[a._v("parameter_update_s")]),a._v("("),s("code",[a._v("param_update")]),a._v(")에 복사합니다.")]),a._v(" "),s("li",[a._v("그런 다음 "),s("code",[a._v("ModuleParams::updateParams()")]),a._v('를 호출합니다. 이 "내부"는 '),s("code",[a._v("DEFINE_PARAMETERS")]),a._v(" 목록에 나열된 모든 매개변수 속성을 업데이트합니다.")])]),a._v(" "),s("p",[a._v("그런 다음, 매개변수 속성(이 경우 "),s("code",[a._v("_sys_autostart")]),a._v(" 및 "),s("code",[a._v("_att_bias_max")]),a._v(")을 사용하여 매개변수를 나타낼 수 있으며, 매개변수 변경시에 업데이트됩니다.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/modules/module_template.html"}},[a._v("애플리케이션/모듈 템플릿")]),a._v("은 새로운 스타일의 C++ API를 사용하지만, "),s("a",{attrs:{href:"#parameter-metadata"}},[a._v("매개변수 메타데이터")]),a._v("는 포함하지 않습니다.")],1)]),a._v(" "),s("h4",{attrs:{id:"c-api-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-api-2"}},[a._v("#")]),a._v(" C API")]),a._v(" "),s("p",[a._v("C API는 모듈과 드라이버 모두에서 사용할 수 있습니다.")]),a._v(" "),s("p",[a._v("먼저 매개변수 API를 포함합니다.")]),a._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<parameters/param.h>")])]),a._v("\n")])])]),s("p",[a._v("그런 다음 "),s("code",[a._v("PARAM_NAME")]),a._v("에 대해 아래와 같이 매개변수를 검색하고, 변수(여기서는 "),s("code",[a._v("my_param")]),a._v(")에 할당합니다. The variable "),s("code",[a._v("my_param")]),a._v(" can then be used in your module code.")]),a._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("int32_t")]),a._v(" my_param "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PARAM_NAME"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("my_param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[s("code",[a._v("PARAM_NAME")]),a._v("이 매개변수 메타데이터에 선언된 경우 기본값이 설정되고, 매개변수를 찾기 위한 위의 호출은 항상 성공하여야 합니다. 매개변수를 여러줄에서 가져올 경우, 필요할 때 핸들 값을 캐싱한 다음 "),s("code",[a._v("param_get()")]),a._v(" 값을 사용합니다.")]),a._v(" "),s("p",[s("code",[a._v("param_find()")]),a._v("는 "),s("code",[a._v("param_get()")]),a._v('에서 사용할 수 있는 핸들을 반환하는 "비싼" 작업입니다. 매개변수를 여러 번 읽으려는 경우에는, 핸들을 캐시하고 필요할 때 '),s("code",[a._v("param_get()")]),a._v("에서 사용할 수 있습니다.")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Get the handle to the parameter")])]),a._v("\nparam_t my_param_handle "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" PARAM_INVALID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nmy_param_handle "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PARAM_NAME"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Query the value of the parameter when needed")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int32_t")]),a._v(" my_param "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("my_param_handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("my_param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"매개변수-메타데이터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-메타데이터"}},[a._v("#")]),a._v(" 매개변수 메타데이터")]),a._v(" "),s("p",[a._v("PX4는 확장 매개변수 메타데이터 시스템을 사용하여 사용자에게 매개변수를 표시하고 펌웨어의 매개변수들의 기본값을 설정합니다.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("적절한 메타데이터는 지상국 사용자에게 매우 중요합니다.")])])]),a._v(" "),s("p",[a._v("매개변수 메타데이터는 소스 트리의 어느 위치에나 "),s("strong",[a._v(".c")]),a._v(" 또는 "),s("strong",[a._v(".yaml")]),a._v(" 매개변수 정의로 저장할 수 있습니다(YAML 정의가 더 새롭고 더 유연함). 일반적으로 연결된 모듈과 함께 저장됩니다.")]),a._v(" "),s("p",[a._v("빌드 시스템은 메타데이터를 추출("),s("code",[a._v("make parameters_metadata")]),a._v(" 사용)하여 "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html"}},[a._v("매개변수 참조")]),a._v("와 "),s("a",{attrs:{href:"#publishing-parameter-metadata-to-a-gcs"}},[a._v("지상국에서 사용하는")]),a._v(" 매개변수 정보를 작성합니다.")],1),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[s("em",[a._v("new")]),a._v(" 매개변수 파일을 추가한 후 새 매개변수를 생성하기 위하여 빌드전에 "),s("code",[a._v("make clean")]),a._v("을 호출하여야 합니다. 매개변수 파일은 "),s("em",[a._v("cmake")]),a._v(" 설정 단계 일부(클린 빌드 및 cmake 파일이 수정된 경우에 발생하는 단계)로 추가됩니다.")])]),a._v(" "),s("h4",{attrs:{id:"yaml-메타데이터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-메타데이터"}},[a._v("#")]),a._v(" YAML 메타데이터")]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[a._v("이 문서 작성 시점에는 YAML 매개변수 정의는 "),s("em",[a._v("라이브러리")]),a._v("에서는 사용할 수 없습니다.")])]),a._v(" "),s("p",[a._v("YAML 메타 데이터는 "),s("strong",[a._v(".c")]),a._v(" 정의를 대체합니다. 다중 인스턴스 정의와 같은 새로운 기능과 함께 동일한 메타데이터를 모두 지원합니다.")]),a._v(" "),s("ul",[s("li",[a._v("YAML 매개변수 메타데이터 스키마는 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("validation/module_schema.yaml"),s("OutboundLink")],1),a._v("에 있습니다.")]),a._v(" "),s("li",[a._v("사용되는 YAML 정의의 예는 MAVLink 매개변수 정의에서 찾을 수 있습니다: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("/src/modules/mavlink/module.yaml"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("li",[a._v("YAML 파일은 다음을 추가하여 cmake 빌드 시스템에 등록됩니다."),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("MODULE_CONFIG\n  module.yaml\n")])])]),a._v("해당 모듈의 "),s("code",[a._v("CMakeLists.txt")]),a._v(" 파일의 "),s("code",[a._v("px4_add_module")]),a._v(" 섹션에 추가합니다.")])]),a._v(" "),s("h4",{attrs:{id:"다중-인스턴스-템플릿-yaml-메타-데이터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다중-인스턴스-템플릿-yaml-메타-데이터"}},[a._v("#")]),a._v(" 다중 인스턴스(템플릿) YAML 메타 데이터")]),a._v(" "),s("p",[a._v("템플릿 매개변수 정의는 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("YAML 매개변수 정의"),s("OutboundLink")],1),a._v("에서 지원됩니다(템플릿 매개변수 코드는 지원되지 않음).")]),a._v(" "),s("p",[a._v("YAML을 사용하면 "),s("code",[a._v("${i}")]),a._v("를 사용하여 매개변수 이름, 설명 등에 인스턴스 번호를 정의할 수 있습니다. 예를 들어 아래는 MY_PARAM_1_RATE, MY_PARAM_2_RATE 등을 생성합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("MY_PARAM_${i}_RATE:\n            description:\n                short: Maximum rate for instance ${i}\n")])])]),s("p",[a._v("다음 YAML 정의는 시작과 끝 인덱스를 제공합니다.")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("num_instances")]),a._v("(기본값 1): 생성할 인스턴스 수(>=1)")]),a._v(" "),s("li",[s("code",[a._v("instance_start")]),a._v("(기본값 0): 첫 번째 인스턴스 번호입니다. 0이면 "),s("code",[a._v("${i}")]),a._v("가 [0, N-1]`로 확장됩니다.")])]),a._v(" "),s("p",[a._v("전체 예는 MAVLink 매개변수 정의("),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("/src/modules/mavlink/module.yaml"),s("OutboundLink")],1),a._v(")를 참조하십시오.")]),a._v(" "),s("h4",{attrs:{id:"c-매개변수-메타데이터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-매개변수-메타데이터"}},[a._v("#")]),a._v(" c 매개변수 메타데이터")]),a._v(" "),s("p",[a._v("매개변수 메타데이터를 정의하기 위한 레거시 접근 방식은 확장자가 "),s("strong",[a._v(".c")]),a._v("인 파일에 있습니다(작성 당시 소스 트리에서 가장 일반적으로 사용되는 접근 방식임).")]),a._v(" "),s("p",[a._v("매개변수 메타데이터 섹션은 다음 예와 같습니다.")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Pitch P gain\n *\n * Pitch proportional gain, i.e. desired angular speed in rad/s for error 1 rad.\n *\n * @unit 1/s\n * @min 0.0\n * @max 10\n * @decimal 2\n * @increment 0.0005\n * @reboot_required true\n * @group Multicopter Attitude Control\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_FLOAT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MC_PITCH_P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.5f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Acceleration compensation based on GPS\n * velocity.\n *\n * @group Attitude Q estimator\n * @boolean\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_INT32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ATT_ACC_COMP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("끝에 있는 "),s("code",[a._v("PARAM_DEFINE_*")]),a._v(" 매크로는 매개변수 유형("),s("code",[a._v("PARAM_DEFINE_FLOAT")]),a._v(" 또는 "),s("code",[a._v("PARAM_DEFINE_INT32")]),a._v("), 매개변수 이름(이름과 일치해야 함 코드에서 사용됨) 및 펌웨어의 기본값입니다.")]),a._v(" "),s("p",[a._v("주석 블록의 행은 모두 선택 사항이며, 주로 지상국에서 표시 및 편집 옵션을 제어합니다. 각 줄의 목적은 아래에 설명되어 있습니다.(자세한 내용은 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("module_schema.yaml"),s("OutboundLink")],1),a._v(" 참조).")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/**\n * <title>\n *\n * <longer description, can be multi-line>\n *\n * @unit <the unit, e.g. m for meters>\n * @min <the minimum sane value. Can be overridden by the user>\n * @max <the maximum sane value. Can be overridden by the user>\n * @decimal <the minimum sane value. Can be overridden by the user>\n * @increment <the "ticks" in which this value will increment in the UI>\n * @reboot_required true <add this if changing the param requires a system restart.>\n * @boolean <add this for integer parameters that represent a boolean value>\n * @group <a title for parameters that form a group>\n */')]),a._v("\n")])])]),s("h2",{attrs:{id:"gcs에-매개변수-메타데이터-게시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcs에-매개변수-메타데이터-게시"}},[a._v("#")]),a._v(" GCS에 매개변수 메타데이터 게시")]),a._v(" "),s("p",[a._v("매개변수 메타데이터는 PX4 빌드중에 JSON 또는 XML 파일로 저장됩니다.")]),a._v(" "),s("p",[a._v("대부분의 비행 컨트롤러(대부분의 FLASH가 충분히 사용 가능)의 경우 JSON 파일은 xz 압축되어 생성된 바이너리 내에 저장됩니다. 그런 다음 파일은 "),s("a",{attrs:{href:"https://mavlink.io/en/services/component_information.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("MAVLink 구성 요소 정보 프로토콜"),s("OutboundLink")],1),a._v("을 사용하여 지상국과 공유됩니다. 이렇게 하면 매개변수 메타데이터가 차량에서 실행되는 코드와 함께 항상 최신 상태를 유지합니다.")]),a._v(" "),s("p",[a._v("메모리가 제한된 비행 콘트롤러 대상의 바이너리는 매개변수 메타데이터를 바이너리에 저장하지 않고, "),s("code",[a._v("px4-travis.s3.amazonaws.com")]),a._v("에 저장된 동일한 데이터를 참조합니다. 이는 예를 들어 "),s("RouterLink",{attrs:{to:"/ko/flight_controller/omnibus_f4_sd.html"}},[a._v("Omnibus F4 SD")]),a._v("에 적용됩니다. 메타데이터는 모든 빌드 대상에 대하여 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/.github/workflows/metadata.yml",target:"_blank",rel:"noopener noreferrer"}},[a._v("github CI"),s("OutboundLink")],1),a._v("를 사용하여 업로드합니다(따라서 매개변수가 마스터에 병합된 후에만 사용할 수 있음).")],1),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[a._v("메모리가 제한된 보드는 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/release/1.12/boards/omnibus/f4sd/default.cmake#L11",target:"_blank",rel:"noopener noreferrer"}},[a._v("cmake 정의 파일"),s("OutboundLink")],1),a._v("에 "),s("code",[a._v("CONSTRAINED_MEMORY")]),a._v("를 지정하기 때문에 식별할 수 있습니다.")])]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[a._v("매개변수 메타데이터가 차량에 없는 경우 "),s("code",[a._v("px4-travis.s3.amazonaws.com")]),a._v("의 메타데이터가 사용됩니다. 또한 저속 텔레메트리 통신에서 느린 다운로드를 방지하기 위한 대체 수단으로 사용될 수 있습니다.")])]),a._v(" "),s("p",[a._v("FLASH 제한 보드에서 자체 개발시에 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/component_information/CMakeLists.txt#L41",target:"_blank",rel:"noopener noreferrer"}},[a._v("여기"),s("OutboundLink")],1),a._v("에서 URL을 조정하여 다른 서버를 지정할 수 있습니다.")]),a._v(" "),s("p",[a._v("마스터 분기의 XML 파일은 CI를 통해 QGC 소스 트리에 복사되고, 구성 요소 정보 서비스를 통해 사용할 수 있는 메타데이터가 없는 경우의 대체 수단으로 사용됩니다(이 접근 방식은 구성 요소 정보 프로토콜이 존재하기 이전).")]),a._v(" "),s("h2",{attrs:{id:"추가-정보"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[a._v("#")]),a._v(" 추가 정보")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[a._v("매개변수 검색 및수정")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html"}},[a._v("매개변수 정의서")])],1),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/common/include/px4_platform_common/param.h#L129",target:"_blank",rel:"noopener noreferrer"}},[a._v("매개변수 구현"),s("OutboundLink")],1),a._v("("),s("code",[a._v(".get()")]),a._v(", "),s("code",[a._v(".commit()")]),a._v(" 및 기타 메소드에 대한 정보)")])])])}),[],!1,null,null,null);t.default=n.exports}}]);