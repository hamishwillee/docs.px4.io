(window.webpackJsonp=window.webpackJsonp||[]).push([[890],{1835:function(a,t,s){"use strict";s.r(t);var e=s(18),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"매개변수와-구성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수와-구성"}},[a._v("#")]),a._v(" 매개변수와 구성")]),a._v(" "),s("p",[a._v("PX4는 설정 값을 저장하는 수단으로 "),s("em",[a._v("매개변수 하위 체계")]),a._v(" ("),s("code",[a._v("float")]),a._v("형과 "),s("code",[a._v("int32_t")]),a._v("형 값의 단순 집합)와 텍스트 파일(믹서, 시작 스크립트용)을 사용합니다.")]),a._v(" "),s("p",[a._v("이 장에서는 "),s("em",[a._v("매개변수")]),a._v(" 하위 시스템을 자세하게 다루도록 하겠습니다. 매개변수를 살펴보고, 저장하고, 불러오고, 지정하는 방법의 내용을 다룹니다.")]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/concept/system_startup.html"}},[a._v("시스템 시작")]),a._v("과 "),s("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html"}},[a._v("에어프레임 구성")]),a._v(" 방법은 다른 페이지에서 자세하게 언급합니다.")],1)]),a._v(" "),s("h2",{attrs:{id:"명령행-사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#명령행-사용법"}},[a._v("#")]),a._v(" 명령행 사용법")]),a._v(" "),s("p",[s("code",[a._v("param show")]),a._v(" 명령은 전체 시스템 매개변수 값 목록을 보여줍니다:")]),a._v(" "),s("h3",{attrs:{id:"매개변수-값-가져오고-설정하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-값-가져오고-설정하기"}},[a._v("#")]),a._v(" 매개변수 값 가져오고 설정하기")]),a._v(" "),s("p",[a._v('좀 더 원하는 부분을 선택할 경우, 매개변수 이름 일부 대신 와일드 카드 문자 "*"를 사용할 수 있습니다:')]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param show\n")])])]),s("p",[s("code",[a._v("-c")]),a._v(" 플래그를 사용하여 (기본값으로부터) 값이 바뀐 모든 매개변수를 확인할 수 있습니다:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("nsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" param show RC_MAP_A*\nSymbols: x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" used, + "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" saved, * "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" unsaved\nx   RC_MAP_AUX1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("359,498")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_AUX2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("360,499")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_AUX3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("361,500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_ACRO_SW "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("375,514")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("723")]),a._v(" parameters total, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("532")]),a._v(" used.\n")])])]),s("p",[s("code",[a._v("param show-for-airframe")]),a._v(" 명령으로 현재 에어프레임 정의 파일용 기본 설정(과 가져온 모든 기본값)을 바꾼 모든 매개변수 값을 보여줄 수 있습니다.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param show -c\n")])])]),s("p",[a._v("모든 매개변수 값을 펌웨어 지정 기본값으로 초기화한 이래로 "),s("em",[a._v("값을 바꾼")]),a._v("적이 있는 임의의 매개변수를 저장할 수 있습니다(기본값으로 되돌린 적이 있다 하더라도 바뀐 매개변수 값이 들어감).")]),a._v(" "),s("h3",{attrs:{id:"매개변수-값-불러오고-내보내기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-값-불러오고-내보내기"}},[a._v("#")]),a._v(" 매개변수 값 불러오고 내보내기")]),a._v(" "),s("p",[s("code",[a._v("param save")]),a._v(" 표준 명령은 현재 기본 파일에 매개변수 값을 저장합니다:")]),a._v(" "),s("p",[a._v("인자 값을 추가로 기재했다면, 인자 값에 해당하는 새 위치에 매개변수 값을 저장합니다:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param save\n")])])]),s("p",[a._v("매개변수를 "),s("em",[a._v("불러오는(load)")]),a._v(" 명령에는 두가지가 있습니다:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param save /fs/microsd/vtol_param_backup\n")])])]),s("p",[s("code",[a._v("load")]),a._v(' 명령은 "실질적"으로 매개변수 값을 저장했을 때의 상태로 초기화합니다("실질적"이란 표현을 쓴 이유는 파일에 저장한 어떤 매개변수 값이든 업데이트하겠지만, 다른 매개변수는 파일을 만들었을 때의 매개변수 값과는 다른 펌웨어 지정 기본 값을 가집니다).')]),a._v(" "),s("ul",[s("li",[a._v("우선 "),s("code",[a._v("param load")]),a._v(" 명령은 모든 매개변수 값을 기본값으로 초기화하며, 파일에 저장한 어떤 값이든 덮어씁니다.")]),a._v(" "),s("li",[s("code",[a._v("param import")]),a._v("는 파일에서 가져온 매개변수 값을 덮어쓰기만 하고, 결과를 저장합니다(예: "),s("code",[a._v("param save")]),a._v(" 명령 호출과 동일한 결과).")])]),a._v(" "),s("p",[s("code",[a._v("load")]),a._v(' 명령은 "실질적"으로 매개변수 값을 저장했을 때의 상태로 초기화합니다("실질적"이란 표현을 쓴 이유는 파일에 저장한 어떤 매개변수 값이든 업데이트하겠지만, 다른 매개변수는 파일을 만들었을 때의 매개변수 값과는 다른 펌웨어 지정 기본 값을 가집니다).')]),a._v(" "),s("p",[a._v("반면에, "),s("code",[a._v("import")]),a._v(" 명령은 기체의 현재 상태 값과 파일의 매개변수 값을 병합합니다. 이를테면 시스템 설정의 나머지 부분을 덮어쓰기 하지 않고 보정 값을 동반하여 매개변수 값 파일을  내용을 가져올 때 사용할 수 있습니다.")]),a._v(" "),s("p",[a._v("아래 예제에 두가지 경우를 모두 보여드립니다:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 파일을 저장하고 나면 매개변수 값 초기화")]),a._v("\nparam load /fs/microsd/vtol_param_backup\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 추가로 매개변수 값 저장 (불러온다고 해서 자동으로 끝나지는 않음)")]),a._v("\nparam save\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 현재 매개변수 값 목록에 저장한 매개변수 값 병합")]),a._v("\nparam "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" /fs/microsd/vtol_param_backup  \n")])])]),s("h2",{attrs:{id:"매개변수-이름"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-이름"}},[a._v("#")]),a._v(" 매개변수 이름")]),a._v(" "),s("p",[a._v("매개변수 이름은 ASCII 문자 16개를 넘어서는 안됩니다.")]),a._v(" "),s("p",[a._v("관례에 따르면, 그룹의 모든 매개변수는 밑줄 문자가 뒤따라오는 동일한(의미를 가진) 문자열을 공유하며, 다중 프로펠러 항공기 또는 고정익 항공기의 여부에 따라 "),s("code",[a._v("MC_")]),a._v("와 "),s("code",[a._v("FW_")]),a._v("를 매개변수 이름에 활용합니다. 이 관례는 강제 사항이 아닙니다.")]),a._v(" "),s("p",[a._v("PX4 모듈과 드라이버에서 매개변수 값에 접근하는 용도로 C와 C++언어로 활용할 수 있는 개별 API가 있습니다.")]),a._v(" "),s("h2",{attrs:{id:"c-c-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-c-api"}},[a._v("#")]),a._v(" C / C++ API")]),a._v(" "),s("p",[a._v("PX4 모듈과 드라이버에서 매개변수 값에 접근하는 용도로 C와 C++언어로 활용할 수 있는 개별 API가 있습니다.")]),a._v(" "),s("p",[a._v("API간 중요한 차이점이 있다면, C++ 버전은 매개변수 값을 바꿀 때 동기화하는 표준 매커니즘이 더욱 효율적입니다(예: GCS에서 업데이트).")]),a._v(" "),s("p",[a._v("매개변수 값이 다른 값으로 언제든 바뀔 수 있으므로 동기화는 중요합니다. 코드는 매개변수 저장소에 "),s("em",[a._v("항상")]),a._v(" 현재 값을 사용해야합니다. 최근 버전을 가져올 수 없다면, 매개변수 값을 바꾼 후 다시 부팅해야 합니다("),s("code",[a._v("@reboot_required")]),a._v(" 메타데이터로 필수 여부 설정).")]),a._v(" "),s("p",[a._v("C++ API에서는 "),s("em",[a._v("클래스 속성")]),a._v("으로 매개변수를 선언하는 매크로를 제공합니다. "),s("em",[a._v("임의의")]),a._v("  매개변수 업데이트와 관련된 "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[a._v("uORB 토픽")]),a._v('의 변경을 주기적으로 확인하는 "상용구" 코드를 추가합니다.')],1),a._v(" "),s("h3",{attrs:{id:"c-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-api"}},[a._v("#")]),a._v(" C++ API")]),a._v(" "),s("p",[a._v("C++ API에서는 "),s("em",[a._v("클래스 속성")]),a._v("으로 매개변수를 선언하는 매크로를 제공합니다. "),s("em",[a._v("임의의")]),a._v("  매개변수 업데이트와 관련된 "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[a._v("uORB 토픽")]),a._v('의 변경을 주기적으로 확인하는 "상용구" 코드를 추가합니다. 이렇게 하면 프레임워크 코드는 매개변수 속성 값에 영향을 주는 uORB 메시지를 (감쪽같이) 추적하고 동기화 과정을 통해 매개변수 속성 값을 유지합니다. 나머지 코드에서 지정한 매개변수 속성을 활용하고 항상 최신으로 유지할 수 있습니다!')],1),a._v(" "),s("p",[a._v("모듈 또는 드라이버에 "),s("strong",[a._v("px4_platform_common/module_params.h")]),a._v(" 헤더를 클래스 헤더에 넣으십시오("),s("code",[a._v("DEFINE_PARAMETERS")]),a._v(" 매크로를 가져옵니다):")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<px4_platform_common/module_params.h>")])]),a._v("\n")])])]),s("p",[s("code",[a._v("ModuleParams")]),a._v(" 클래스를 상송하고 매개변수 목록과 관련 매개변수 속성을 정의할 때 "),s("code",[a._v("DEFINE_PARAMETERS")]),a._v("를 활용하십시오. 매개변수 이름은 매개변수 메타데이터 정의와 정확히 일치해야합니다.")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyModule")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token base-clause"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ModuleParams")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Check for parameter changes and update them if needed.\n     * @param parameter_update_sub uorb subscription to parameter_update\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("parameters_update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" force "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("DEFINE_PARAMETERS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ParamInt"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("px4"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("params"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("SYS_AUTOSTART"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" _sys_autostart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**< example parameter */")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ParamFloat"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("px4"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("params"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("ATT_BIAS_MAX"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" _att_bias_max  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**< another parameter */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("상용구 코드로 cpp 파일을 업데이트하여 매개변수 업데이트와 관련 있는 uORB 메시지를 확인하십시오.")]),a._v(" "),s("p",[a._v("우선 헤더를 포함하여 uORB parameter_update 메시지에 접근하게 합니다:")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<uORB/topics/parameter_update.h>")])]),a._v("\n")])])]),s("p",[a._v("모듈 또는 드라이버를 시작할 때 메시지 업데이트 과정에 참여하며, 과정이 끝나면 해제합니다. "),s("code",[a._v("orb_subscribe()")]),a._v("에서 반환하는 "),s("code",[a._v("parameter_update_sub")]),a._v(" 값은  메시지 업데이트 과정 참여시 참고할 핸들입니다.")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Subscribe to parameter_update message")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" parameter_update_sub "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("orb_subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ORB_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Unsubscribe to parameter_update messages")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("orb_unsubscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("위 메서드에서:")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("parameters_update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" force"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" updated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("parameter_update_s")]),a._v(" param_upd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Check if any parameter updated")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("orb_check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("updated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// If any parameter updated copy it to: param_upd")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("updated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("orb_copy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ORB_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("param_upd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("force "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" updated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// If any parameter updated, call updateParams() to check if")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// this class attributes need updating (and do so). ")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("updateParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("매개변수 속성(이 경우, "),s("code",[a._v("_sys_autostart")]),a._v(" 와 "),s("code",[a._v("_att_bias_max")]),a._v(")은 매개변수를 대신할 목적으로 활용할 수 있으며, 매개변수 값이 바뀔 때마다 업데이트합니다.")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("param_update")]),a._v(" uORB 메시지에 "),s("em",[a._v("어떤")]),a._v(" 업데이트 사항이 있다면 "),s("code",[a._v("orb_check()")]),a._v("에서 알려주고 (다만 어떤 매개변수가 영향을 받았는지 정보는 아님) "),s("code",[a._v("updated")]),a._v(" 부울린 값을 설정합니다.")]),a._v(" "),s("li",[a._v('"일부" 매개변수를 업데이트했다면 '),s("code",[a._v("parameter_update_s")]),a._v(" ("),s("code",[a._v("param_upd")]),a._v(")에 최신 매개변수 값을 복사합니다")]),a._v(" "),s("li",[a._v("그 다음 "),s("code",[a._v("ModuleParams::updateParams()")]),a._v(' 메서드를 호출합니다. 이 "하부" 에서는 '),s("code",[a._v("DEFINE_PARAMETERS")]),a._v("  목록에 있는 특정 매개변수 속성을 업데이트해야 하는지 확인하고, 필요할 경우 진행합니다.")]),a._v(" "),s("li",[a._v("이 예제에서는 "),s("code",[a._v("Module::parameters_update()")]),a._v(" 메서드를 "),s("code",[a._v("force=True")]),a._v(" 인자 값을 대입하여 호출하지 않습니다. 만약 함수에 넣은 일반 패턴을 설정해야 할 다른 값이 있다면, 초기화를 진행하는  동안 "),s("code",[a._v("force=True")]),a._v(" 값을 대입하여 1회 호출합니다.")])]),a._v(" "),s("p",[a._v("C API는 모듈과 드라이버 모두에서 활용할 수 있습니다.")]),a._v(" "),s("p",[a._v(":::Tip "),s("RouterLink",{attrs:{to:"/ko/modules/module_template.html"}},[a._v("어플리케이션/모듈 서식")]),a._v("에서는 새 방식의 C++ API를 사용하나 "),s("a",{attrs:{href:"#parameter-metadata"}},[a._v("매개변수 메타데이터")]),a._v("는 들어있지 않습니다.\n:::")],1),a._v(" "),s("h3",{attrs:{id:"c-api-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-api-2"}},[a._v("#")]),a._v(" C API")]),a._v(" "),s("p",[a._v("C API는 모듈과 드라이버 모두에서 활용할 수 있습니다.")]),a._v(" "),s("p",[a._v("우선 매개변수 API를 넣으십시오:")]),a._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<parameters/param.h>")])]),a._v("\n")])])]),s("p",[a._v("그리고 아래와 같이 "),s("code",[a._v("PARAM_NAME")]),a._v(" 매개변수를 가져와서 변수에 할당하십시오(여기서는 "),s("code",[a._v("my_param")]),a._v("). "),s("code",[a._v("my_param")]),a._v(" 변수는 여러분이 작성한 모듈 코드에서 활용할 수 있습니다.")]),a._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[a._v("int32_t my_param "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PARAM_NAME"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("my_param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[s("code",[a._v("PARAM_NAME")]),a._v("을 매개변수 메타데이터에서 선언했다면 우선 이 기본값을 설정하며, 위 코드에서의 매개변수 검색 호출은 언제든 성공합니다.")])]),a._v(" "),s("p",[s("code",[a._v("param_find()")]),a._v('은 "실행 시간이 조금 걸리는" 동작이며, 이 함수에서 나온 핸들 값은 '),s("code",[a._v("param_get()")]),a._v(" 함수에서 사용할 수 있습니다. 매개변수를 여러줄에서 가져올 경우, 필요할 때 핸들 값을 캐싱한 다음 "),s("code",[a._v("param_get()")]),a._v(" 값을 사용합니다.")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Get the handle to the parameter")])]),a._v("\nparam_t my_param_handle "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" PARAM_INVALID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nmy_param_handle "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PARAM_NAME"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Query the value of the parameter when needed")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int32_t")]),a._v(" my_param "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("my_param_handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("my_param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"매개변수-메타데이터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-메타데이터"}},[a._v("#")]),a._v(" 매개변수 메타데이터")]),a._v(" "),s("p",[a._v("기존의 매개변수 메타데이터 정의 방식의 접근은 "),s("strong",[a._v(".c")]),a._v(" 확장자를 가진 파일을 활용하는 방식입니다(이 글을 작성하는 시점에는 소스트리에서 가장 일반적으로 활용하는 접근법입니다).")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("올바른 메타데이터는 지상 장치에서의 바람직한 사용자 경험에 중요합니다.")])]),a._v(" "),s("p",[a._v("매개변수 메타데이터는 소스트리 어디에든 "),s("strong",[a._v(".c")]),a._v(" 또는 "),s("strong",[a._v(".yaml")]),a._v(" 매개변수 정의파일로 저장할 수 있습니다(YAML 정의가 더 최신이며 다루기에 유연합니다). 보통 관련 모듈과 함께 저장합니다.")]),a._v(" "),s("p",[a._v("빌드 시스템에서는 ("),s("code",[a._v("make parameters_metadata")]),a._v(" 명령을 활용하여) 메타데이터를 추출하여 지상 관제 프로그램에서 활용할 "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html"}},[a._v("매개변수 참조")]),a._v("와 매개변수 정보를 빌드합니다.")],1),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[s("em",[a._v("새")]),a._v(" 매개변수 파일을 추가하고 나면, 새 매개변수를 만들기 전 "),s("code",[a._v("make clean")]),a._v("을 실행해야합니다(매개변수 파일은 "),s("em",[a._v("cmake")]),a._v(" 설정 단계의 일부로서 추가하며, 이 명령을 실행하면 cmake 파일을 수정했을 때, 기존의 빌드 파일을 정리합니다).")])]),a._v(" "),s("h3",{attrs:{id:"c-매개변수-메타데이터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-매개변수-메타데이터"}},[a._v("#")]),a._v(" C 매개변수 메타데이터")]),a._v(" "),s("p",[a._v("서식화 매개변수 정의는 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("YAML 매개변수 정의"),s("OutboundLink")],1),a._v("에서 지원합니다(서식화 매개변수 코드는 지원하지 않습니다).")]),a._v(" "),s("p",[a._v("매개변수 메타데이터 부분은 다음 예제와 같습니다:")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Acceleration compensation based on GPS\n * velocity.\n *\n * @group Attitude Q estimator\n * @boolean\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_INT32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ATT_ACC_COMP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Acceleration compensation based on GPS\n * velocity.\n *\n * @group Attitude Q estimator\n * @boolean\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_INT32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ATT_ACC_COMP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("위 코드 마지막의 "),s("code",[a._v("PARAM_DEFINE_*")]),a._v(" 매크로는 매개변수 형식("),s("code",[a._v("PARAM_DEFINE_FLOAT")]),a._v(" 또는 "),s("code",[a._v("PARAM_DEFINE_INT32")]),a._v("), 매개변수 이름(코드에서 사용할 이름과 일치해야 함), 펌웨어의 기본값을 지정합니다.")]),a._v(" "),s("p",[a._v("주석 블록 행 내용은 모두 취사선택 요소이며, 기본적으로 지상 통제 장치에서 화면을 제어하고 옵션을 편집할 때 활용합니다. 각 행의 목적은 다음과 같습니다(자세한 내용은 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("module_schema.yaml"),s("OutboundLink")],1),a._v("을 참고하십시오).")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/**\n * <title>\n *\n * <longer description, can be multi-line>\n *\n * @unit <the unit, e.g. m for meters>\n * @min <the minimum sane value. Can be overridden by the user>\n * @max <the maximum sane value. Can be overridden by the user>\n * @max <the maximum sane value. Can be overridden by the user>\n * @increment <the "ticks" in which this value will increment in the UI>\n * @reboot_required true <add this if changing the param requires a system restart.>\n * @boolean <add this for integer parameters that represent a boolean value>\n * @group <a title for parameters that form a group>\n */')]),a._v("\n")])])]),s("h3",{attrs:{id:"yaml-메타데이터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-메타데이터"}},[a._v("#")]),a._v(" YAML 메타데이터")]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[a._v("이 내용을 작성하는 시점에서는 YAML 매개변수 정의를 "),s("em",[a._v("라이브러리")]),a._v("에서 활용할 수 없습니다.")])]),a._v(" "),s("p",[a._v("YAML 메타데이터는 "),s("strong",[a._v(".c")]),a._v("의 정의를 완전히 대체할 용도로 존재합니다. 모든 동일한 메타데이터를 지원하며, 다중 인스턴스 정의와 같은 새 기능도 있습니다.")]),a._v(" "),s("ul",[s("li",[a._v("YAML 매개변수 메타데이터 스키마는 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("validation/module_schema.yaml"),s("OutboundLink")],1),a._v("에 있습니다.")]),a._v(" "),s("li",[a._v("활용 중인 YAML 정의 예제는 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("/src/modules/mavlink/module.yaml"),s("OutboundLink")],1),a._v(" MAVLink 매개변수 정의파일에서 찾을 수 있습니다.")])]),a._v(" "),s("h4",{attrs:{id:"다중-인스턴스-서식화-메타데이터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다중-인스턴스-서식화-메타데이터"}},[a._v("#")]),a._v(" 다중 인스턴스 (서식화) 메타데이터")]),a._v(" "),s("p",[a._v("서식화 매개변수 정의는 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("YAML 매개변수 정의"),s("OutboundLink")],1),a._v("에서 지원합니다(서식화 매개변수 코드는 지원하지 않습니다).")]),a._v(" "),s("p",[a._v("YAML 형식 코드에서는 매개변수 이름, 설명의 인스턴스 번호를 "),s("code",[a._v("${i}")]),a._v("로 정할 수 있습니다. 예를 들어, 아래 예제에서는 MY_PARAM_1_RATE, MY_PARAM_2_RATE 등을 만듭니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("MY_PARAM_${i}_RATE:\n            description:\n                short: Maximum rate for instance ${i}\n")])])]),s("p",[a._v("다음 YAML 정의에서는 시작, 끝 인덱스 번호를 제공합니다.")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("num_instances")]),a._v(" (기본값 1): 생성할 인스턴스 갯수(하나 이상)")]),a._v(" "),s("li",[s("code",[a._v("instance_start")]),a._v(" (기본값 0): 첫번재 인스턴스 번호. 0으로 지정하면, "),s("code",[a._v("${i}")]),a._v(" 값은 0부터 N-1 까지 갑니다.")])]),a._v(" "),s("p",[a._v("전체 예제를 보려면 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("/src/modules/mavlink/module.yaml"),s("OutboundLink")],1),a._v(" MAVLink 매개변수 정의 파일을 살펴보십시오")]),a._v(" "),s("h2",{attrs:{id:"추가-정보"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[a._v("#")]),a._v(" 추가 정보")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[a._v("매개변수 검색/업데이트")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html"}},[a._v("매개변수 참고")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);