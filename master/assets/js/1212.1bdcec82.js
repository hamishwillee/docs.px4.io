(window.webpackJsonp=window.webpackJsonp||[]).push([[1212],{2271:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"소스-코드-관리"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소스-코드-관리"}},[e._v("#")]),e._v(" 소스 코드 관리")]),e._v(" "),r("h2",{attrs:{id:"분기-모델"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#분기-모델"}},[e._v("#")]),e._v(" 분기 모델")]),e._v(" "),r("p",[e._v("PX4 프로젝트는 3가지 Git 분기 모델을 사용합니다.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master",target:"_blank",rel:"noopener noreferrer"}},[e._v("master"),r("OutboundLink")],1),e._v("는 기본적으로 불안정하며 빠르게 발전합니다.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/beta",target:"_blank",rel:"noopener noreferrer"}},[e._v("beta"),r("OutboundLink")],1),e._v("는 철저한 테스트를 거쳤습니다. 비행 테스터를 위한 것입니다.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/stable",target:"_blank",rel:"noopener noreferrer"}},[e._v("stable"),r("OutboundLink")],1),e._v("은 최신 릴리스를 의미합니다.")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/rewriting-history",target:"_blank",rel:"noopener noreferrer"}},[e._v("리베이스를 통한 기록"),r("OutboundLink")],1),e._v("을 유지하며 "),r("a",{attrs:{href:"https://guides.github.com/introduction/flow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github 흐름"),r("OutboundLink")],1),e._v("을 배제합니다. 그러나, 전세계의 역동적인 개발팀과 수시로 병합 작업을 진행합니다.")]),e._v(" "),r("p",[e._v("새로운 기능을 추가하려면, "),r("a",{attrs:{href:"https://help.github.com/articles/signing-up-for-a-new-github-account/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github에 가입"),r("OutboundLink")],1),e._v("한 다음 저장소를 "),r("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("포크"),r("OutboundLink")],1),e._v("하고, "),r("a",{attrs:{href:"https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/",target:"_blank",rel:"noopener noreferrer"}},[e._v("새 브랜치를 생성"),r("OutboundLink")],1),e._v("하고, 변경 사항을 추가하고, 마지막으로 "),r("a",{attrs:{href:"https://help.github.com/articles/using-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" 풀 리퀘스트를 전송합니다"),r("OutboundLink")],1),e._v(". 변경사항은 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Continuous_integration",target:"_blank",rel:"noopener noreferrer"}},[e._v("지속적 통합"),r("OutboundLink")],1),e._v(" 테스트를 통과한 다음에 병합됩니다.")]),e._v(" "),r("p",[e._v("코드 기여는 "),r("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[e._v("BSD 3절 라이선스"),r("OutboundLink")],1),e._v("를 준수하여여 하며, 코드에는 사용에 제약 사항을 부과하지 않아야 합니다.")]),e._v(" "),r("h2",{attrs:{id:"코드-스타일-형식"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#코드-스타일-형식"}},[e._v("#")]),e._v(" 코드 스타일 형식")]),e._v(" "),r("p",[e._v("PX4는 코드 서식에 "),r("a",{attrs:{href:"http://astyle.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle"),r("OutboundLink")],1),e._v("을 사용합니다. 유효 버전은 다음과 같습니다.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/astyle/astyle%202.06/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 2.06"),r("OutboundLink")],1),e._v(" (추천)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/astyle/astyle%203.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 3.0"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 3.01"),r("OutboundLink")],1),e._v(" (추천)")])]),e._v(" "),r("p",[e._v("설치가 완료되면, "),r("code",[e._v("./Tools/astyle/check_code_style_all.sh")]),e._v("에서 형식을 확인할 수 있습니다. 출력은 깨끗한 마스터 브랜치에서 "),r("code",[e._v("형식 검사를 통과")]),e._v("하여야 합니다. 이 결과가 나왔다면, "),r("code",[e._v("make format")]),e._v("을 사용하여 모든 파일을 자동으로 확인하고 포맷할 수 있습니다.")]),e._v(" "),r("h2",{attrs:{id:"파일-명명법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#파일-명명법"}},[e._v("#")]),e._v(" 파일 명명법")]),e._v(" "),r("p",[e._v("다음 파일 명명 규칙을 따라야 합니다.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("C++ 소스 파일의 이름은 CamelCase로 지정하고, 클래스 이름과 동일하여야 합니다. 예: "),r("code",[e._v("FooThing")]),e._v("이라는 클래스가 포함된 C++ 파일의 이름은 "),r("code",[e._v("FooThing.cpp")]),e._v("이어야 합니다.")])]),e._v(" "),r("li",[r("p",[e._v("C++ 헤더 파일의 이름은 "),r("code",[e._v(".hpp")]),e._v(" 접미사를 제외하고, 소스 파일과 동일하여야 합니다.")])]),e._v(" "),r("li",[r("p",[e._v("C 호환이 필요한 C++ 헤더 파일에는 접미사 "),r("code",[e._v(".h")]),e._v("가 있어야 합니다.")])]),e._v(" "),r("li",[r("p",[e._v("폴더명은 "),r("code",[e._v("modules")]),e._v("/"),r("code",[e._v("drivers")]),e._v("/"),r("code",[e._v("systemcmds")]),e._v("/etc 내의 첫 번째 수준에 대한 "),r("code",[e._v("snake_case")]),e._v("입니다. 그러나 소스 및 헤더 파일과 일치하도록 더 깊게 중첩되면 CamelCase로 이름을 지정하여야 합니다.")])]),e._v(" "),r("li",[r("p",[e._v("테스트 파일에는 "),r("code",[e._v("FooThingTest.cpp")]),e._v("와 같이 "),r("code",[e._v("Test")]),e._v(" 접미사가 있어야 합니다.")])]),e._v(" "),r("li",[r("p",[e._v("위의 규칙에 대한 한 가지 예외는 MAVLink 메시지 이름과 일치하는 ALL_UPPERCASE.hpp인 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mavlink/streams",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/modules/mavlink/streams"),r("OutboundLink")],1),e._v("의 MAVLink 스트림입니다.")])])]),e._v(" "),r("h2",{attrs:{id:"소스-내-문서-작업"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소스-내-문서-작업"}},[e._v("#")]),e._v(" 소스 내 문서 작업")]),e._v(" "),r("p",[e._v("PX4 개발자는 소스 내에서 적절한 문서를 작성하는 것이 좋습니다.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("소스 코드 문서화 표준은 시행되지 않으며, 코드는 현재 일관성 있게 문서화되어 있지 않습니다. 이보다 더 나아지길 바랍니다!")])]),e._v(" "),r("p",[e._v("현재 두 가지 소스 기반 문서 유형이 있습니다.")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("PRINT_MODULE_*")]),e._v(" 메소드는 두 모듈 런타임과 "),r("RouterLink",{attrs:{to:"/ko/modules/modules_main.html"}},[e._v("모듈 & 이 가이드의 명령 참조")]),e._v(" 사용 지침에 모두 사용됩니다.\n"),r("ul",[r("li",[e._v("API는 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/v1.8.0/src/platforms/px4_module.h#L381",target:"_blank",rel:"noopener noreferrer"}},[e._v("여기 소스 코드"),r("OutboundLink")],1),e._v("에 문서화되어 있습니다.")]),e._v(" "),r("li",[e._v("좋은 예제로는 "),r("RouterLink",{attrs:{to:"/ko/modules/module_template.html"}},[e._v("응용 프로그램/모듈 템플릿")]),e._v("과 모듈 참조에서 링크된 파일이 있습니다.")],1)])],1)]),e._v(" "),r("ul",[r("li",[r("em",[e._v("가치가 추가되거나 중복되지 않는")]),e._v(" 다른 소스 문서를 권장합니다.")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("개발자는 목적을 유추할 수 있도록 C++ 엔터티(클래스, 함수, 변수 등)의 이름을 지정하여 명시적 문서의 필요성을 줄일 수 있습니다.")])]),e._v(" "),r("ul",[r("li",[e._v("C++ 엔티티 이름에서 쉽게 가정할 수 있는 문서를 추가하지 마십시오.")]),e._v(" "),r("li",[e._v("일반적으로 특이 사항이나 오류 처리에 대한 정보를 추가할 수 있습니다.")]),e._v(" "),r("li",[e._v("필요시에는 "),r("a",{attrs:{href:"http://www.doxygen.nl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doxgyen"),r("OutboundLink")],1),e._v(" 태그를 사용합니다. "),r("code",[e._v("@class")]),e._v(", "),r("code",[e._v("@file")]),e._v(", "),r("code",[e._v("@param")]),e._v(", "),r("code",[e._v("@return")]),e._v(", "),r("code",[e._v("@brief")]),e._v(", "),r("code",[e._v("@var")]),e._v(", "),r("code",[e._v("@see")]),e._v(", "),r("code",[e._v("@note")]),e._v(". 좋은 예는 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/events/send_event.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/modules/events/send_event.h"),r("OutboundLink")],1),e._v("입니다.")])]),e._v(" "),r("h2",{attrs:{id:"커밋과-커밋-메시지"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#커밋과-커밋-메시지"}},[e._v("#")]),e._v(" 커밋과 커밋 메시지")]),e._v(" "),r("p",[e._v("사소한 변경에 대하여도 자세한 설명한 여러 단락 커밋 메시지를 기록하십시오. 쉽게 이해할 수 있는 한 줄 요약과 자세한 세부정보도 기록하십시오.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('컴포넌트: 변경 사항을 한 문장으로 설명하십시오. Fixes #1234\n\n요약 시작 부분에 소프트웨어 구성 요소를 추가합니다.\n모듈 이름이나 설명으로 줄을 지정합니다.\n(예: "mc_att_ctrl" 또는 "멀티콥터 자세 콘트롤러").\n\n발행번호를 <Fixes #1234>으로 붙이면, Github 커밋이 완료시 자동으로 문제를 종료합니다.\n마스터 브랜치에 병합됩니다.\n\n메시지 본문에는 여러 단락이 포함될 수 있습니다.\n변경한 사항을 자세히 기술하십시오. 이 수정 사항 또는 이 커밋의 테스트 결과와 관련된 문제 및 비행 로그를 연결합니다.\n\n변경 사항과 변경한 이유를 설명하고 코드 변경을 다른 말로 표현하지 마십시오(좋음: "GPS 수신 품질이 낮은 차량에 대한 추가 안전 점검 추가".\n불량: "gps_reception_check() 함수 추가").\n\n보고자: 이름 <email@px4.io>\n')])])]),r("p",[e._v("****"),r("code",[e._v("git commit -s")]),e._v("**를 사용하여 모든 커밋을 승인합니다. ** 이렇게 하면 "),r("code",[e._v("signed-off-by:")]),e._v("가 추가됩니다. 마지막 줄에 이름과 이메일을 입력합니다.")]),e._v(" "),r("p",[e._v("이 커밋 가이드는 Linux 커널과 Linus Torvalds가 관리하는 "),r("a",{attrs:{href:"https://github.com/torvalds/subsurface/blob/a48494d2fbed58c751e9b7e8fbff88582f9b2d02/README#L88-L115",target:"_blank",rel:"noopener noreferrer"}},[e._v("프로젝트"),r("OutboundLink")],1),e._v("에 대한 모범 사례들을 참고로 작성되었습니다.")])])}),[],!1,null,null,null);t.default=a.exports}}]);