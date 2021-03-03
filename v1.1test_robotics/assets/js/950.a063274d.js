(window.webpackJsonp=window.webpackJsonp||[]).push([[950],{1947:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"소스-코드-관리"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소스-코드-관리"}},[e._v("#")]),e._v(" 소스 코드 관리")]),e._v(" "),r("h2",{attrs:{id:"브랜치-정책"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#브랜치-정책"}},[e._v("#")]),e._v(" 브랜치 정책")]),e._v(" "),r("p",[e._v("PX4 프로젝트는 분기를 셋으로 나누는 git Branch를 만듭니다.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master",target:"_blank",rel:"noopener noreferrer"}},[e._v("master"),r("OutboundLink")],1),e._v("는 기본 브랜치이며, 비교적 불안정하고 빠른 개발 속도를 보여줍니다.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/beta",target:"_blank",rel:"noopener noreferrer"}},[e._v("beta"),r("OutboundLink")],1),e._v("는 철저하게 시험한 코드의 브랜치입니다. 비행체를 실험하시는 분들이 사용하도록 만들었습니다.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/stable",target:"_blank",rel:"noopener noreferrer"}},[e._v("stable"),r("OutboundLink")],1),e._v("은 최신 릴리스를 가리킵니다.")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/rewriting-history",target:"_blank",rel:"noopener noreferrer"}},[e._v("리베이스를 통한 기록"),r("OutboundLink")],1),e._v("을 유지하며 "),r("a",{attrs:{href:"https://guides.github.com/introduction/flow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github 흐름"),r("OutboundLink")],1),e._v("을 배제합니다. 그러나, 전세계의 역동적인 개발팀과 수시로 병합 작업을 진행합니다.")]),e._v(" "),r("p",[e._v("새 기능을 추가하려면,  "),r("a",{attrs:{href:"https://help.github.com/articles/signing-up-for-a-new-github-account/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github에 가입"),r("OutboundLink")],1),e._v("하고, 저장소를 "),r("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("포킹"),r("OutboundLink")],1),e._v("한 후, "),r("a",{attrs:{href:"https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/",target:"_blank",rel:"noopener noreferrer"}},[e._v("새 브랜치를 만들어"),r("OutboundLink")],1),e._v(", 코드를 바꾸어넣은 다음, 마지막으로 "),r("a",{attrs:{href:"https://help.github.com/articles/using-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull 요청을 보냅니다"),r("OutboundLink")],1),e._v(". "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Continuous_integration",target:"_blank",rel:"noopener noreferrer"}},[e._v("지속적인 통합 작업"),r("OutboundLink")],1),e._v(" 테스트를 통과하고 나면, 변경된 코드를 병합할 예정입니다.")]),e._v(" "),r("p",[e._v("모든 코드의 기여는 "),r("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[e._v("BSD 3-clause 라이선스"),r("OutboundLink")],1),e._v(" 하에 진행하며, 모든 코드에 대해 더 이상의 사용시의 제약 사항을 강요해서는 안됩니다.")]),e._v(" "),r("h2",{attrs:{id:"코드-형식-정리"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#코드-형식-정리"}},[e._v("#")]),e._v(" 코드 형식 정리")]),e._v(" "),r("p",[e._v("PX4는 "),r("a",{attrs:{href:"http://astyle.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle"),r("OutboundLink")],1),e._v(" 방식으로 코드 형식을 정리합니다. 유효 버전은 다음과 같습니다:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/astyle/astyle%202.06/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 2.06"),r("OutboundLink")],1),e._v(" (추천)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/astyle/astyle%203.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 3.0"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 3.01"),r("OutboundLink")],1),e._v(" (추천)")])]),e._v(" "),r("p",[e._v("설치하고 나면 "),r("code",[e._v("./Tools/astyle/check_code_style_all.sh")]),e._v(" 명령으로 코드 형식을 점검할 수 있습니다. 정리한 master 브랜치에서의 출력은 "),r("code",[e._v("Format checks passed")]),e._v("로 나와야 합니다. 이 결과가 나왔다면, 나중에 모든 파일의 코드 형식을 검사할 때  "),r("code",[e._v("make format")]),e._v(" 명령을 활용할 수 있습니다.")]),e._v(" "),r("h2",{attrs:{id:"소스-코드-내부-문서-정리"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소스-코드-내부-문서-정리"}},[e._v("#")]),e._v(" 소스 코드 내부 문서 정리")]),e._v(" "),r("p",[e._v("PX4 개발자는  소스코드 내부 문서 정리를 권장합니다.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("소스 코드 문서 표준을 강제하지 않으며, 현재 코드는 불규칙하게 문서로 정리했습니다. 저희는 더 좋아진 모습을 원합니다.")])]),e._v(" "),r("p",[e._v("현재 두가지 방식의 소스 코드 기반 문서가 있습니다:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("PRINT_MODULE_*")]),e._v(" 메서드는 이 안내서에서 실행 시간의 모듈 사용 방법과 "),r("RouterLink",{attrs:{to:"/ko/modules/modules_main.html"}},[e._v("모듈 및 명령 참고")]),e._v(" 내용 작성을 목적으로 활용합니다.\n"),r("ul",[r("li",[e._v("API는 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/v1.8.0/src/platforms/px4_module.h#L381",target:"_blank",rel:"noopener noreferrer"}},[e._v("이곳 소스 코드에"),r("OutboundLink")],1),e._v(" 문서로 정리했습니다.")]),e._v(" "),r("li",[e._v("바람직한 활용 예시로 "),r("RouterLink",{attrs:{to:"/ko/apps/module_template.html"}},[e._v("프로그램/모듈 템플릿")]),e._v("과 모듈 참조에서 연결한 파일을 들 수 있습니다.")],1)])],1)]),e._v(" "),r("ul",[r("li",[r("p",[r("em",[e._v("값을 추가하였고, 중복이 없는 코드에 대해")]),e._v(" 소스코드 내부 문서 작성을 권장합니다.")]),e._v(" "),r("p",[e._v(":::top 개발자 여러분은 C++ 구성 요소(클래스, 함수, 변수 등)를 목적의 추측이 가능하게끔 작명해야 합니다. 작명을 잘하면 문서로 정리 작업량이 줄어듭니다.\n:::")]),e._v(" "),r("ul",[r("li",[e._v("C++ 항목 이름으로 분명하게 추정할 수 있는 문서는 추가하지 마십시오.")]),e._v(" "),r("li",[e._v("보통 특이 상황이나 오류 처리 등의 추가 정보를 넣고 싶을 때가 있습니다.")]),e._v(" "),r("li",[e._v("문서에서 필요하다면 다음의 "),r("a",{attrs:{href:"http://www.doxygen.nl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doxgyen"),r("OutboundLink")],1),e._v(" 태그를 사용해야합니다: "),r("code",[e._v("@class")]),e._v(", "),r("code",[e._v("@file")]),e._v(", "),r("code",[e._v("@param")]),e._v(", "),r("code",[e._v("@return")]),e._v(", "),r("code",[e._v("@brief")]),e._v(", "),r("code",[e._v("@var")]),e._v(", "),r("code",[e._v("@see")]),e._v(", "),r("code",[e._v("@note")]),e._v(". 바람직한 활용 예시는  "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/events/send_event.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/modules/events/send_event.h"),r("OutboundLink")],1),e._v(" 파일에 있습니다.")])])])]),e._v(" "),r("h2",{attrs:{id:"코드-제출과-메시지"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#코드-제출과-메시지"}},[e._v("#")]),e._v(" 코드 제출과 메시지")]),e._v(" "),r("p",[e._v("분명하지 않은 모든 바뀐 내용에 대해 상세하게, 여러 문단에 걸쳐 제출 설명 메시지를 기재하십시오. 내용을 문단 별로 구성하여 한줄 요약 뿐만 아니라 상세 설명을 통하여 이해할 수 있게 정리하여 주십시오.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('컴포넌트: 변경 사항을 한 문장으로 설명하십시오. Fixes #1234\n\nPrepend the software component to the start of the summary\nline, either by the module name or a description of it.\n(e.g. "mc_att_ctrl" or "multicopter attitude controller").\n\nIf the issue number is appended as <Fixes #1234>, Github\nwill automatically close the issue when the commit is\nmerged to the master branch.\n\nThe body of the message can contain several paragraphs.\nDescribe in detail what you changed. Link issues and flight\nlogs either related to this fix or to the testing results\nof this commit.\n\nDescribe the change and why you changed it, avoid to\nparaphrase the code change (Good: "Adds an additional\nsafety check for vehicles with low quality GPS reception".\nBad: "Add gps_reception_check() function").\n\nReported-by: Name <email@px4.io>\n')])])]),r("p",[e._v("이 제출 안내서 내용은 리누스 토발즈가 관리하는 리눅스 커널과 기타 "),r("a",{attrs:{href:"https://github.com/torvalds/subsurface/blob/a48494d2fbed58c751e9b7e8fbff88582f9b2d02/README#L88-L115",target:"_blank",rel:"noopener noreferrer"}},[e._v("관리 프로젝트"),r("OutboundLink")],1),e._v("에서 나온 우수 사례를 기반으로 하였습니다.")]),e._v(" "),r("p",[e._v("이 제출 안내서 내용은 리누스 토발즈가 관리하는 리눅스 커널과 기타 "),r("a",{attrs:{href:"https://github.com/torvalds/subsurface/blob/a48494d2fbed58c751e9b7e8fbff88582f9b2d02/README#L88-L115",target:"_blank",rel:"noopener noreferrer"}},[e._v("프로젝트"),r("OutboundLink")],1),e._v("에서 나온 우수 사례를 참고로 작성하였습니다.")])])}),[],!1,null,null,null);t.default=o.exports}}]);