(window.webpackJsonp=window.webpackJsonp||[]).push([[749],{2528:function(t,e,s){"use strict";s.r(e);var a=s(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"문서화에-기여"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문서화에-기여"}},[t._v("#")]),t._v(" 문서화에 기여")]),t._v(" "),a("p",[t._v("PX4 사용자 가이드에 대한 기여를 매우 환영합니다. 간단한 수정 작업 뿐만 아니라, 철자 및 문법, 새로운 주제 등에서 문서화 작업이 필요합니다.")]),t._v(" "),a("p",[t._v("이 항목에서는 변경 사항을 적용하고 테스트하는 방법을 설명합니다. 마지막에는 기본 스타일 가이드가 있습니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Note You will need a (free) "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v(" account to contribute to the guides.")])]),t._v(" "),a("p",[a("a",{attrs:{id:"github_changes"}})]),t._v(" "),a("h2",{attrs:{id:"github의-빠른-변경-사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github의-빠른-변경-사항"}},[t._v("#")]),t._v(" Github의 빠른 변경 사항")]),t._v(" "),a("p",[t._v("모든 페이지 하단에 표시되는 "),a("strong",[t._v("GitHub에서 이 페이지 편집")]),t._v(" 링크를 클릭하면, "),a("em",[t._v("기존 콘텐츠")]),t._v("를 간단하게 변경할 수 있습니다(이렇게 하면 Github에서 편집용 페이지가 열립니다).")]),t._v(" "),a("p",[a("img",{attrs:{src:s(710),alt:"Vuepress: 페이지 편집 버튼"}})]),t._v(" "),a("p",[t._v("기존 페이지를 편집하려면:")]),t._v(" "),a("ol",[a("li",[t._v("해당 페이지를 엽니다.")]),t._v(" "),a("li",[t._v("페이지 콘텐츠 아래에 있는 "),a("strong",[t._v("GitHub에서 이 페이지 편집")]),t._v(" 링크를 클릭합니다.")]),t._v(" "),a("li",[t._v("파일을 편집합니다.")]),t._v(" "),a("li",[t._v("Github 페이지 편집기 아래에 별도의 분기를 생성하라는 메시지가 표시되고 "),a("em",[t._v("풀 요청")]),t._v("을 제출하라는 안내가 표시됩니다.")])]),t._v(" "),a("p",[t._v("문서 팀은 요청을 검토하고, 병합하거나 업데이트하기 위하여 귀하와 협력할 것입니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"big_changes"}})]),t._v(" "),a("h2",{attrs:{id:"git을-사용한-변경-새-페이지-및-이미지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git을-사용한-변경-새-페이지-및-이미지"}},[t._v("#")]),t._v(" Git을 사용한 변경(새 페이지 및 이미지)")]),t._v(" "),a("p",[t._v("새 페이지 추가 또는 이미지 추가/수정을 포함하여 보다 실질적인 변경은 Github에서 수행(또는 적절하게 테스트)하는 것처럼 간단하지 않습니다. 이러한 변경 작업은 "),a("em",[t._v("코드")]),t._v("와 동일한 접근 방식을 사용하는 것이 좋습니다.")]),t._v(" "),a("ol",[a("li",[a("em",[t._v("git")]),t._v(" 명령어를 사용하여, 문서 소스 코드를 로컬 컴퓨터로 가져옵니다.")]),t._v(" "),a("li",[t._v("필요한 문서를 수정합니다(추가, 변경, 삭제).")]),t._v(" "),a("li",[t._v("Vuepress를 사용하여 제대로 빌드되는지 "),a("em",[t._v("테스트")]),t._v("합니다.")]),t._v(" "),a("li",[t._v("변경 사항에 대한 분기를 만들고 풀 요청을 만들어 문서로 다시 가져옵니다.")])]),t._v(" "),a("p",[t._v("다음에는 소스 코드를 가져오고, 로컬에서 빌드(테스트용)하고, 코드를 수정하는 방법을 설명합니다.")]),t._v(" "),a("h3",{attrs:{id:"문서-소스-코드-가져오기-보내기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문서-소스-코드-가져오기-보내기"}},[t._v("#")]),t._v(" 문서 소스 코드 가져오기/보내기")]),t._v(" "),a("p",[t._v("라이브러리 소스를 로컬 컴퓨터로 가져오려면 git 명령어를 사용하여야 합니다. 아래 지침은 git을 가져와 로컬 컴퓨터에서 사용하는 방법을 설명합니다.")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/downloads"),a("OutboundLink")],1),t._v("에서 git 프로그램을 다운로드합니다.")]),t._v(" "),a("li",[t._v("아직 Github에 "),a("a",{attrs:{href:"https://github.com/join",target:"_blank",rel:"noopener noreferrer"}},[t._v("가입"),a("OutboundLink")],1),t._v("하지 않은 경우에는 가입합니다.")]),t._v(" "),a("li",[t._v("Create a copy (Fork) of the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 User Guide repo"),a("OutboundLink")],1),t._v(" on Github ("),a("a",{attrs:{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions here"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("li",[t._v("복사된 저장소를 로컬 컴퓨터에 복제합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/wherever/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/px4_user_guide.git\n")])])]),t._v('예를 들어, Github 계정이 "john_citizen"인 사용자의 PX4 사용자 가이드 포크를 복제합니다.'),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/john_citizen/px4_user_guide.git\n")])])])]),t._v(" "),a("li",[t._v("로컬 저장소로 이동합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/wherever/px4_user_guide   \n")])])])]),t._v(" "),a("li",[t._v('라이브러리의 PX4 버전을 가리키도록 "업스트림"이라는 '),a("em",[t._v("remote")]),t._v("를 추가합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://github.com/PX4/px4_user_guide.git\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v('"remote"은 특정 저장소에 대한 핸들입니다. '),a("em",[t._v("origin")]),t._v("이라는 이름의 원격은 저장소 복제시 기본적으로 생성되며, 가이드의 "),a("em",[t._v("포크")]),t._v("를 가리킵니다. 위에서 문서의 PX4 프로젝트 버전을 가리키는 새 원격 "),a("em",[t._v("upstream")]),t._v("을 생성합니다.")])]),t._v(" "),a("ol",[a("li",[t._v("변경 사항에 대한 브랜치를 생성합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your_feature_branch_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),t._v("그러면 컴퓨터에 "),a("code",[t._v("your_feature_branch_name")]),t._v("이라는 로컬 브랜치가 생성됩니다.")]),t._v(" "),a("li",[t._v("필요에 따라 문서를 변경합니다(다음 섹션에서 이에 대한 일반 지침).")]),t._v(" "),a("li",[t._v('변경 사항에 완료되면 "커밋"을 사용하여, 로컬 브랜치에 추가합니다.'),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your commit message>"')]),t._v("\n")])])]),t._v("적절한 커밋 메시지 예들은 "),a("RouterLink",{attrs:{to:"/ko/contribute/"}},[t._v("기여")]),t._v(" 섹션을 참고하십시오.")],1),t._v(" "),a("li",[t._v("로컬 분기(추가된 커밋 포함)를 Github의 분기된 저장소에 푸시합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin your_feature_branch_name\n")])])])]),t._v(" "),a("li",[t._v("웹 브라우저에서 Github의 분기된 저장소로 이동합니다(예: "),a("code",[t._v("https://github.com/<your git name>/px4_user_guide.git")]),t._v("). 새 분기가 분기된 저장소로 푸시되었다는 메시지가 표시되어야 합니다.")]),t._v(" "),a("li",[t._v("풀 요청(PR) 생성:\n"),a("ul",[a("li",[t._v('"새 분기 메시지"(앞의 한 단계 참조)의 오른쪽에 "풀 요청 비교 및 생성"이라는 녹색 버튼이 표시되어야 합니다. 클릭합니다.')]),t._v(" "),a("li",[t._v("풀 요청 템플릿이 생성됩니다. 그것은 당신의 커밋을 나열하고 의미 있는 제목(하나의 커밋 PR의 경우 일반적으로 커밋 메시지)과 메시지("),a("span",{staticStyle:{color:"orange"}},[t._v("어떤 이유에서 수행했는지 설명")]),t._v(")를 추가할 수 있습니다(반드시). 비교를 위하여, "),a("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/pulls",target:"_blank",rel:"noopener noreferrer"}},[t._v("기타 풀 요청"),a("OutboundLink")],1),t._v("을 확인하십시오.")])])]),t._v(" "),a("li",[t._v("완료하였습니다. PX4 사용자 가이드 유지 관리자는 이제 귀하의 기여를 검투한 후에, 통합 여부를 결정합니다. 때때로 변경 사항에 대한 질문을 확인하십시오.")])]),t._v(" "),a("h3",{attrs:{id:"로컬에서-라이브러리-구축"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로컬에서-라이브러리-구축"}},[t._v("#")]),t._v(" 로컬에서 라이브러리 구축")]),t._v(" "),a("p",[t._v("로컬에서 라이브러리를 빌드하여, 변경 사항이 제대로 반영되었는 지를 테스트합니다.")]),t._v(" "),a("ol",[a("li",[t._v("사전 요구 사항인 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress"),a("OutboundLink")],1),t._v("을 설치합니다.\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodejs 10+"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn classic"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("로컬 저장소로 이동합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/wherever/px4_user_guide\n")])])])]),t._v(" "),a("li",[t._v("종속성(Vuepress 포함)들을 설치합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("라이브러리 미리보기 및 제공"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" docs:dev\n")])])]),a("ul",[a("li",[t._v("이제 http://localhost:8080/px4_user_guide/에서 가이드를 검색할 수 있습니다.")]),t._v(" "),a("li",[t._v("터미널 프롬프트에서 "),a("strong",[t._v("CTRL+C")]),t._v("를 사용하여 검색을 중지합니다.")])])]),t._v(" "),a("li",[t._v("다음을 사용하여 라이브러리를 빌드합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ubuntu")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" docs:buildwin\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("yarn docs:dev")]),t._v(" to preview changes "),a("em",[t._v("as you make them")]),t._v(" (documents are updated and served very quickly). 풀 요청을 제출전에 "),a("code",[t._v("docs:build")]),t._v("를 사용하여 빌드하여야 합니다. 이렇게 하면 "),a("code",[t._v("docs:dev")]),t._v("를 사용할 때 표시되지 않는 문제를 강조하여 표시할 수 있습니다.")])]),t._v(" "),a("h3",{attrs:{id:"소스-코드-구조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소스-코드-구조"}},[t._v("#")]),t._v(" 소스 코드 구조")]),t._v(" "),a("p",[t._v("이 가이드는 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress"),a("OutboundLink")],1),t._v(" 툴체인을 사용합니다. PX4 사용 설명서에는 구성과 설정에 관련된 몇 가지 사소한 차이점들이 있습니다.")]),t._v(" "),a("p",[t._v("개요:")]),t._v(" "),a("ul",[a("li",[t._v("페이지는 마크다운을 사용하여 별도의 파일에 작성됩니다.\n"),a("ul",[a("li",[t._v("문법은 Github 위키에서 사용하는 것과 매우 유사합니다.")]),t._v(" "),a("li",[t._v("Vuepress는 일부 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("마크다운 확장"),a("OutboundLink")],1),t._v("도 지원합니다. 우리는 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/markdown.html#custom-containers",target:"_blank",rel:"noopener noreferrer"}},[t._v("tips, warning, 등"),a("OutboundLink")],1),t._v("을 제외하고는 사용하지 않으려고 합니다.")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/i18n.html#default-theme-i18n-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("다국어"),a("OutboundLink")],1),t._v(" 책에 관련된 내용입니다.\n"),a("ul",[a("li",[t._v('각 언어의 페이지는 관련 언어 코드의 이름이 지정된 폴더에 저장됩니다(예: 중국어의 경우 "zh", 한국어의 경우 "ko").')]),t._v(" "),a("li",[t._v("파일의 영어("),a("strong",[t._v("/en")]),t._v(") 버전만 편집하십시오. 번역을 관리하기 위해 "),a("RouterLink",{attrs:{to:"/ko/contribute/translation.html"}},[t._v("Crowdin")]),t._v("을 사용합니다.")],1)])]),t._v(" "),a("li",[t._v("모든 페이지는 "),a("strong",[t._v("/en")]),t._v("이라는 적절한 이름의 하위 폴더에 있어야 합니다(예: 이 페이지는 "),a("strong",[t._v("en/contribute/")]),t._v(" 폴더에 있음).\n"),a("ul",[a("li",[t._v("이렇게 하면 다른 페이지와 이미지가 항상 동일한 상대 수준이므로 연결이 더 용이해집니다.")])])]),t._v(" "),a("li",[t._v("책의 _구조_는 "),a("strong",[t._v("SUMMARY.md")]),t._v("에 정의되어 있습니다.\n"),a("ul",[a("li",[t._v('가이드에 새 페이지를 추가하는 경우 이 파일에도 항목을 추가하여야 합니다. :::tip This is not "standard vuepress" way to define the sidebar (the summary file is imported by '),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/blob/main/.vuepress/get_sidebar.js",target:"_blank",rel:"noopener noreferrer"}},[t._v(".vuepress/get_sidebar.js"),a("OutboundLink")],1),t._v(").\n:::")])])]),t._v(" "),a("li",[t._v("이미지는 "),a("strong",[t._v("/assets")]),t._v("의 하위 폴더에 저장하여야 합니다. 이것은 콘텐츠 폴더에서 두 개의 폴더 아래에 있으므로, 이미지를 추가하면 다음과 같이 참조하게 됩니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("![Image Description](../../assets/path_to_file/filename.jpg)\n")])])])]),t._v(" "),a("li",[a("strong",[t._v("package.json")]),t._v("이라는 파일은 빌드의 종속성을 정의합니다.")]),t._v(" "),a("li",[t._v("웹 후크는 파일이 이 저장소의 마스터 분기에 병합되어, 책이 다시 빌드될 때마다 추적하는 데 사용됩니다.")])]),t._v(" "),a("h3",{attrs:{id:"새-페이지-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#새-페이지-추가"}},[t._v("#")]),t._v(" 새 페이지 추가")]),t._v(" "),a("p",[t._v("새 페이지를 추가시에는 "),a("strong",[t._v("en/SUMMARY.md")]),t._v("에도 추가하여야 합니다.")]),t._v(" "),a("h2",{attrs:{id:"스타일-가이드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스타일-가이드"}},[t._v("#")]),t._v(" 스타일 가이드")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("파일/파일명")]),t._v(" "),a("ul",[a("li",[t._v("**/en/**의 적절한 하위 폴더에 새 파일을 추가합니다. 폴더를 중첩하지 마십시오.")]),t._v(" "),a("li",[t._v("설명이 포함된 이름을 사용합니다. 특히, 이미지 파일명은 포함된 내용을 설명하여야 합니다.")]),t._v(" "),a("li",[t._v('파일명은 소문자를 사용하고, 밑줄 "_"을 사용하여 단어를 구분합니다.')])])]),t._v(" "),a("li",[a("p",[t._v("이미지")]),t._v(" "),a("ul",[a("li",[t._v("이미지는 최대한 가장 작은 크기와 가장 낮은 해상도를 사용합니다(이렇게 하면 대역폭이 좋지 않은 사용자의 다운로드 비용이 줄어듭니다).")]),t._v(" "),a("li",[t._v("새 이미지는 기본적으로 **/assets/**의 하위 폴더에 생성되어야 합니다. (번역 간에 공유할 수 있습니다).")])])]),t._v(" "),a("li",[a("p",[t._v("내용")]),t._v(" "),a("ul",[a("li",[t._v('"모양새" (bold, emphasis, etc) 를 일관되게 활용하십시오.\n'),a("ul",[a("li",[a("strong",[t._v("Bold")]),t._v(" 는 누르는 단추 텍스트와 메뉴 정의에 활용합니다.")]),t._v(" "),a("li",[t._v("_Emphasis_는 도구 이름에 사용합니다.")]),t._v(" "),a("li",[t._v("그 외의 경우에는, 가능한 한 적게 사용하십시오.")])])]),t._v(" "),a("li",[t._v('제목과 페이지 제목은 "첫 글자 대문자"를 사용하여야 합니다.')]),t._v(" "),a("li",[t._v("페이지 제목은 첫 번째 수준 제목 (#)이어야 합니다. 다른 소제목은 h2 (##) 또는 그 이하여야 합니다.")]),t._v(" "),a("li",[t._v("제목에는 스타일을 추가하지 마십시오.")]),t._v(" "),a("li",[t._v("note, tip 또는 warning 선언의 "),a("em",[t._v("첫 부분")]),t._v("(예: "),a("code",[t._v(":::tip")]),t._v(")을 번역하지 마세요. 이 텍스트는 메모 렌더링에 사용되기 때문입니다.")])])])]),t._v(" "),a("h2",{attrs:{id:"어디에서-변경-사항을-추가합니까"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#어디에서-변경-사항을-추가합니까"}},[t._v("#")]),t._v(" 어디에서 변경 사항을 추가합니까?")]),t._v(" "),a("p",[t._v("기존 구조에 맞춰 새 문서를 추가하십시오!")]),t._v(" "),a("p",[t._v("주요 범주 중 일부는 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[t._v("개발: 관련 콘텐츠\n"),a("ul",[a("li",[t._v("플랫폼의 진화(새로운 모드, 모듈, 비행 모드, 하드웨어, 소프트웨어 및 하드웨어 아키텍처 및 이식)")]),t._v(" "),a("li",[t._v('재현하기 위해 개발자 전문 지식이 필요한 "실험적" 작업')])])]),t._v(" "),a("li",[t._v("비행: 표준 차량 비행과 관련된 콘텐츠(비행 모드, 무장, 이륙, 착륙)")]),t._v(" "),a("li",[t._v("기본 설정: 모든 차량이 수행해야 하는 설정")]),t._v(" "),a("li",[t._v("Advanced configuration: Configuration that is specific to a vehicle type, or some segment of users.")]),t._v(" "),a("li",[t._v("주변 장치: 사용할 수 있는 다양한 하드웨어에 관련된 문서입니다.\n"),a("ul",[a("li",[t._v("여기에는 기본 설정에서 다루지 않는 하드웨어에 대한 설정 및 구성 정보를 포함합니다.")])])]),t._v(" "),a("li",[t._v("기본 조립: 자동 조종 장치 및 주요 주변 장치의 조립")]),t._v(" "),a("li",[t._v("기체 빌드: 전체 시스템을 빌드하는 방법의 예입니다.")])]),t._v(" "),a("h2",{attrs:{id:"번역"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#번역"}},[t._v("#")]),t._v(" 번역")]),t._v(" "),a("p",[t._v("번역에 대한 정보는 "),a("RouterLink",{attrs:{to:"/ko/contribute/translation.html"}},[t._v("번역")]),t._v("을 참고하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"라이센스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#라이센스"}},[t._v("#")]),t._v(" 라이센스")]),t._v(" "),a("p",[t._v("모든 PX4/Dronecode 문서는 "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY 4.0"),a("OutboundLink")],1),t._v(" 라이선스 허용 조건에 따라 자유롭게 사용하고 수정할 수 있습니다.")])])}),[],!1,null,null,null);e.default=r.exports},710:function(t,e,s){t.exports=s.p+"assets/img/vuepress_edit_page_on_github_link.222dacdc.png"}}]);