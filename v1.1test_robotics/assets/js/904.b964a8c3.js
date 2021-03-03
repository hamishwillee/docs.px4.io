(window.webpackJsonp=window.webpackJsonp||[]).push([[904],{1845:function(_,t,s){"use strict";s.r(t);var e=s(18),v=Object(e.a)({},(function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"외부-모듈-별도"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#외부-모듈-별도"}},[_._v("#")]),_._v(" 외부 모듈(별도)")]),_._v(" "),s("p",[_._v("외부 모듈에서는 PX4 펌웨어에 추가(또는 업데이트)할 상용 모듈을 관리/분류하는 편의 매커니즘을 개발자에게 제공합니다. 외부 모듈은 내부 모듈처럼 활용할 수 있으며, 내부 모듈과의 uORB 메시지 교환에 활용할 수 있습니다.")]),_._v(" "),s("p",[_._v('이 주제에서는 외부("별도") 모듈을 PX4 빌드에 추가하는 방법을 설명합니다.')]),_._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),s("p",[_._v("가능하다면 PX4 프로젝트에 바뀐 내용을 기여해주시기 바랍니다!")])]),_._v(" "),s("h2",{attrs:{id:"사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[_._v("#")]),_._v(" 사용법")]),_._v(" "),s("p",[_._v("외부 모듈을 만들려면:")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("외부 모듈을 모아둘 "),s("em",[_._v("외부 디렉터리")]),_._v("를 만드십시오:")]),_._v(" "),s("ul",[s("li",[s("strong",[_._v("PX4-Autopilot")]),_._v(" 트리 외부 어디에든 둘 수 있습니다.")]),_._v(" "),s("li",[s("strong",[_._v("Firmware")]),_._v("와 동일한 구조를 가져야합니다(예시: "),s("strong",[_._v("src")]),_._v(" 디렉터리가 있어야합니다).")]),_._v(" "),s("li",[_._v("이후 우리는 이 디렉터리를 "),s("code",[_._v("EXTERNAL_MODULES_LOCATION")]),_._v("이라고 하겠습니다.")])])]),_._v(" "),s("li",[s("p",[_._v("기존 모듈을 (예: "),s("strong",[_._v("examples/px4_simple_app")]),_._v(") 외부 디렉터리로 복사하거나 새 모듈을 바로 만드십시오.")])]),_._v(" "),s("li",[s("p",[_._v("모듈의 이름을 바꾸거나 ("),s("strong",[_._v("CMakeLists.txt")]),_._v("의 "),s("code",[_._v("MODULE")]),_._v("도) 기존 펌웨어의 "),s("em",[_._v("cmake")]),_._v("  빌드 설정에서 제거하십시오. 이 조치 과정은 내부 모듈과 혼동하는 문제를 피합니다.")])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("CMakeLists.txt")]),_._v(" 파일을 내용물과 같이 외부 디렉터리에 추가하십시오:")]),_._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[_._v("set(config_module_list_external\n    modules/<new_module>\n    PARENT_SCOPE\n    )\n")])])])]),_._v(" "),s("li",[s("p",[s("code",[_._v("modules/<new_module>/CMakeLists.txt")]),_._v(" 의 "),s("code",[_._v("px4_add_module()")]),_._v("에 다음과 같이 "),s("code",[_._v("EXTERNAL")]),_._v(" 줄을 추가하십시오:")]),_._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[_._v("px4_add_module(\nMODULE modules__test_app\nMAIN test_app\nSTACK_MAIN 2000\nSRCS\n  px4_simple_app.c\nDEPENDS\n  platforms__common\nEXTERNAL\n)\n")])])])])]),_._v(" "),s("h2",{attrs:{id:"별도-uorb-메시지-정의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#별도-uorb-메시지-정의"}},[_._v("#")]),_._v(" 별도 uORB 메시지 정의")]),_._v(" "),s("p",[_._v("별도의 uORB 메시지는 일반 uORB 메시지와 동일한 위치에 만듭니다. uORB 토픽 헤더는 "),s("code",[_._v("<build_dir>/uORB/topics/")]),_._v("에 만들고, 메시지 원본 파일은  "),s("code",[_._v("<build_dir>/msg/topics_sources/")]),_._v("에 만듭니다.")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("모든 새 메시지 정의를 "),s("code",[_._v("$EXTERNAL_MODULES_LOCATION/msg")]),_._v(" 디렉터리에 넣으십시오. 이들 새 별도 메시지 정의 형식은 다른  "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html#adding-a-new-topic"}},[_._v("uORB 메시지 정의")]),_._v("시에도 동일합니다.")],1)]),_._v(" "),s("li",[s("p",[_._v("다음 내용을 채워 넣은 "),s("code",[_._v("$EXTERNAL_MODULES_LOCATION/msg/CMakeLists.txt")]),_._v(" 파일을 추가하십시오:")]),_._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[_._v("set(config_msg_list_external\n    <message1>.msg\n    <message2>.msg\n    <message3>.msg\n    PARENT_SCOPE\n    )\n")])])]),s("p",[s("code",[_._v("<message#>.msg")]),_._v(" 부분은 uORB 메시지 생성 과정에서 처리, 활용하는 uORB 메시지 정의 파일의 이름입니다.")])])]),_._v(" "),s("p",[_._v("별도의 uORB 메시지는 일반 uORB 메시지와 동일한 위치에 생성합니다. uORB 토픽 헤더는 "),s("code",[_._v("<build_dir>/uORB/topics/")]),_._v("에 만들고, 메시지 원본 파일은  "),s("code",[_._v("<build_dir>/msg/topics_sources/")]),_._v("에 만듭니다.")]),_._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html#adding-a-new-topic"}},[_._v("이곳")]),_._v("에 설명한 바와 같이 새 uORB 메시지는 다른 uORB 메시지처럼 활용할 수 있습니다.")],1),_._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),s("p",[_._v("별도 uORB 메시지 정의시 기존의 일반 uORB 메시지와 동일한 이름을 가질 수 없습니다.")])]),_._v(" "),s("h2",{attrs:{id:"외부-모듈-및-uorb-메시지-빌드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#외부-모듈-및-uorb-메시지-빌드"}},[_._v("#")]),_._v(" 외부 모듈 및 uORB 메시지 빌드")]),_._v(" "),s("p",[_._v("차후 추가 빌드 과정에서는 "),s("code",[_._v("EXTERNAL_MODULES_LOCATION")]),_._v(" 값을 지정할 필요가 없습니다.")]),_._v(" "),s("p",[_._v("다른 빌드 대상을 활용할 수 있지만, 아직 빌드 디렉터리가 있으면 안됩니다. 이미 있다면 "),s("em",[_._v("cmake")]),_._v(" 변수 값을 빌드 폴더에 설정할 수 있습니다.")]),_._v(" "),s("p",[_._v("차후 추가 빌드 과정에서는 "),s("code",[_._v("EXTERNAL_MODULES_LOCATION")]),_._v(" 값을 지정할 필요가 없습니다.")])])}),[],!1,null,null,null);t.default=v.exports}}]);