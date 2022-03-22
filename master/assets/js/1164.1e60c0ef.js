(window.webpackJsonp=window.webpackJsonp||[]).push([[1164],{2164:function(_,t,s){"use strict";s.r(t);var v=s(19),e=Object(v.a)({},(function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"외부-모듈-별도"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#외부-모듈-별도"}},[_._v("#")]),_._v(" 외부 모듈(별도)")]),_._v(" "),s("p",[_._v("외부 모듈은 개발자가 PX4 펌웨어에 추가(또는 업데이트)하려는 독점 모듈을 관리/그룹화할 수 있는 편리한 메커니즘을 제공합니다. 외부 모듈은 내부 모듈과 같이 사용할 수 있으며, uORB로 내부 모듈과 상호 작용할 수 있습니다.")]),_._v(" "),s("p",[_._v('PX4 빌드에 외부("out of tree") 모듈을 추가하는 방법을 설명합니다.')]),_._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),s("p",[_._v("가능하면, 변경 사항을 PX4에 제공할 것을 권장합니다!")])]),_._v(" "),s("h2",{attrs:{id:"사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[_._v("#")]),_._v(" 사용법")]),_._v(" "),s("p",[_._v("외부 모듈을 만들려면:")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("외부 모듈을 그룹화하기 위한 "),s("em",[_._v("외부 디렉토리")]),_._v(" 폴더를 만듭니다.")]),_._v(" "),s("ul",[s("li",[_._v("이것은 "),s("strong",[_._v("PX4-Autopilot")]),_._v(" 트리 외부 위치에 있을 수 있습니다.")]),_._v(" "),s("li",[s("strong",[_._v("PX4-Autopilot")]),_._v("과 구조가 동일하여야 합니다(즉, "),s("strong",[_._v("src")]),_._v("라는 디렉토리를 포함하여야 함).")]),_._v(" "),s("li",[_._v("나중에 "),s("code",[_._v("EXTERNAL_MODULES_LOCATION")]),_._v("을 사용하여 이 디렉토리를 참조합니다.")])])]),_._v(" "),s("li",[s("p",[_._v("기존 모듈(예: "),s("strong",[_._v("examples/px4_simple_app")]),_._v(")을 외부 디렉토리에 복사하거나 새 모듈을 직접 만듭니다.")])]),_._v(" "),s("li",[s("p",[_._v("모듈의 이름을 변경하거나("),s("strong",[_._v("CMakeLists.txt")]),_._v("의 "),s("code",[_._v("MODULE")]),_._v(" 포함), 기존 PX4-Autopilot "),s("em",[_._v("cmake")]),_._v(" 빌드 구성에서 제거합니다. 이것은 내부 모듈과의 충돌을 피하기 위한 것입니다.")])]),_._v(" "),s("li",[s("p",[_._v("콘텐츠가 있는 외부 디렉터리에 "),s("strong",[_._v("CMakeLists.txt")]),_._v(" 파일을 추가합니다.")]),_._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[_._v("set(config_module_list_external\n    modules/<new_module>\n    PARENT_SCOPE\n    )\n")])])])]),_._v(" "),s("li",[s("p",[_._v("내부의 "),s("code",[_._v("modules/<new_module>/CMakeLists.txt")]),_._v("에 "),s("code",[_._v("EXTERNAL")]),_._v(" 줄을 추가합니다. 예를 들면, "),s("code",[_._v("px4_add_module()")]),_._v("와 같습니다.")]),_._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[_._v("px4_add_module(\n  MODULE modules__test_app\n  MAIN test_app\n  STACK_MAIN 2000\n  SRCS\n      px4_simple_app.c\n  DEPENDS\n      platforms__common\n  EXTERNAL\n  )\n")])])])])]),_._v(" "),s("h2",{attrs:{id:"별도-uorb-메시지-정의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#별도-uorb-메시지-정의"}},[_._v("#")]),_._v(" 별도 uORB 메시지 정의")]),_._v(" "),s("p",[_._v("uORB 메시지는 트리 외부에서 정의할 수 있습니다. 이를 위해서는 "),s("code",[_._v("$EXTERNAL_MODULES_LOCATION/msg")]),_._v(" 폴더가 있어야 합니다.")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("새 메시지 정의를 "),s("code",[_._v("$EXTERNAL_MODULES_LOCATION/msg")]),_._v(" 디렉토리에 배치합니다. 이러한 새로운 트리 외부 메시지 정의의 형식은 다른 모든 "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html#adding-a-new-topic"}},[_._v("uORB 메시지 정의")]),_._v("와 동일합니다.")],1)]),_._v(" "),s("li",[s("p",[_._v("콘텐츠가 포함된 "),s("code",[_._v("$EXTERNAL_MODULES_LOCATION/msg/CMakeLists.txt")]),_._v(" 파일을 추가합니다.")]),_._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[_._v("set(config_msg_list_external\n    <message1>.msg\n    <message2>.msg\n    <message3>.msg\n    PARENT_SCOPE\n    )\n")])])]),s("p",[_._v("여기서 "),s("code",[_._v("<message#>.msg")]),_._v("는 처리되고 uORB 메시지 생성에 사용되는 uORB 메시지 정의 파일의 이름입니다.")])])]),_._v(" "),s("p",[_._v("외부 uORB 메시지는 일반 uORB 메시지와 동일한 위치에 생성됩니다. uORB 주제 헤더는 "),s("code",[_._v("<build_dir>/uORB/topics/")]),_._v("에 생성되며, 메시지 소스 파일은 "),s("code",[_._v("<build_dir>/msg/topics_sources/")]),_._v("에서 생성됩니다.")]),_._v(" "),s("p",[_._v("새 uORB 메시지는 "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html#adding-a-new-topic"}},[_._v("여기")]),_._v("에 설명된 대로, 다른 uORB 메시지처럼 사용할 수 있습니다.")],1),_._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),s("p",[_._v("외부 uORB 메시지 정의는 일반 uORB 메시지와 같은 이름을 가질 수 없습니다.")])]),_._v(" "),s("h2",{attrs:{id:"외부-모듈-및-uorb-메시지-빌드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#외부-모듈-및-uorb-메시지-빌드"}},[_._v("#")]),_._v(" 외부 모듈 및 uORB 메시지 빌드")]),_._v(" "),s("p",[s("code",[_._v("make px4_sitl EXTERNAL_MODULES_LOCATION=<path>")]),_._v("을 실행합니다.")]),_._v(" "),s("p",[_._v("다른 빌드 대상을 사용할 수 있지만, 빌드 디렉토리가 아직 존재하지 않아야 합니다. 이미 존재하는 경우, 빌드 폴더에서 "),s("em",[_._v("cmake")]),_._v(" 변수를 설정할 수 있습니다.")]),_._v(" "),s("p",[_._v("차후 추가 빌드 과정에서는 "),s("code",[_._v("EXTERNAL_MODULES_LOCATION")]),_._v(" 값을 지정할 필요가 없습니다.")])])}),[],!1,null,null,null);t.default=e.exports}}]);