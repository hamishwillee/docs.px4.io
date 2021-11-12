(window.webpackJsonp=window.webpackJsonp||[]).push([[1183],{2209:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-예제"}},[t._v("#")]),t._v(" git 예제")]),t._v(" "),s("p",[s("a",{attrs:{id:"contributing_code"}})]),t._v(" "),s("h2",{attrs:{id:"px4에-코드-기여"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4에-코드-기여"}},[t._v("#")]),t._v(" PX4에 코드 기여")]),t._v(" "),s("p",[t._v("PX4 기능 추가 절차는 다음과 같습니다. 다음 예제를 따라 PX4에 기여 결과를 공유할 수 있습니다.")]),t._v(" "),s("ul",[s("li",[t._v("아직 Github에 계정이 없으면, 먼저 "),s("a",{attrs:{href:"https://github.com/join",target:"_blank",rel:"noopener noreferrer"}},[t._v("가입"),s("OutboundLink")],1),t._v("합니다.")]),t._v(" "),s("li",[t._v("PX4-Autopilot 저장소를 포크합니다("),s("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/#fork-an-example-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("이곳"),s("OutboundLink")],1),t._v("을 참고).")]),t._v(" "),s("li",[t._v("포크된 저장소를 로컬 컴퓨터에 복제합니다."),s("br"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/wherever/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/PX4-Autopilot.git\n")])])])]),t._v(" "),s("li",[t._v("복제한 디렉토리로 이동하여, 하위 모듈을 초기화 및 업데이트하고, 원 업스트림 PX4-Autopilot URL을 추가합니다."),s("br"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init --recursive\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://github.com/PX4/PX4-Autopilot.git\n")])])])]),t._v(" "),s("li",[t._v("이제 두 개의 원격 저장소가 있어야 합니다. 하나의 저장소는 PX4/PX4-Autopilot 업스트림이고, 다른 하나는 PX4 분기 저장소입니다.")]),t._v(" "),s("li",[t._v("이것은 다음 명령어로 확인할 수 있습니다."),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n")])])])]),t._v(" "),s("li",[t._v("현재 마스터에 변경 작업을 추가합니다.")]),t._v(" "),s("li",[t._v("기능을 나타내는 의미 있는 이름으로 새 분기를 생성합니다."),s("br"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your feature branch name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("code",[t._v("git branch")]),t._v(" 명령어로 분기를 확인할 수 있습니다.")]),t._v(" "),s("li",[t._v("해당 파일을 추가하여 커밋의 변경 사항을 추가합니다."),s("br"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),t._v("GUI로 파일을 추가하려면 "),s("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-in-Other-Environments-Graphical-Interfaces",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitk"),s("OutboundLink")],1),t._v(" 또는 "),s("a",{attrs:{href:"http://nuclearsquid.com/writings/git-add/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("git add -p")]),s("OutboundLink")],1),t._v("를 참조하십시오.")]),t._v(" "),s("li",[t._v("변경 사항을 설명하는 메시지와 함께 추가된 파일을 커밋합니다."),s("br"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your commit message>"')]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("적절한 커밋 메시지 예들은 "),s("RouterLink",{attrs:{to:"/ko/contribute/"}},[t._v("기여")]),t._v(" 섹션을 참고하십시오.")],1),t._v(" "),s("ul",[s("li",[t._v("시간이 지나서, "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("업스트림 마스터"),s("OutboundLink")],1),t._v("가 변경되었을 수 있습니다. PX4는 선형 커밋 기록을 선호하며, "),s("a",{attrs:{href:"https://git-scm.com/book/de/v1/Git-Branching-Rebasing",target:"_blank",rel:"noopener noreferrer"}},[t._v("git rebase"),s("OutboundLink")],1),t._v("를 사용합니다. 업스트림의 최신 변경 사항을 로컬 브랜치에 포함하려면, 마스터 브랜치로 전환합니다."),s("br"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n")])])]),t._v("그런 다음, 업스트림 마스터에서 최신 커밋을 가져옵니다."),s("br"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull upstream master\n")])])]),t._v("이제 로컬 마스터 브랜치는 최신입니다. 기능을 추가하는 브랜치로 되돌아 갑니다."),s("br"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your feature branch name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),t._v("업데이트된 마스터를 기반으로 리베이스합니다."),s("br"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase master\n")])])])]),t._v(" "),s("li",[t._v("이제 로컬 커밋을 분기된 저장소로 푸시할 수 있습니다."),s("br"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your feature branch name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("브라우저에서 분기된 저장소로 이동하여 푸시가 성공 여부를 확인할 수 있습니다. "),s("code",[t._v("https://github.com/<your git name>/PX4-Autopilot.git")]),s("br"),t._v(" 새 분기가 분기된 저장소로 푸시되었다는 메시지가 표시되어야 합니다.")]),t._v(" "),s("li",[t._v('이제 풀 리퀘스트(PR)를 생성합니다. "새 분기 메시지"(앞의 한 단계 참조)의 오른쪽에 "풀 요청 비교 및 생성"이라는 녹색 버튼이 표시되어야 합니다. 그런 다음 변경 사항을 나열하여야 하며, 의미 있는 제목(하나의 커밋 PR의 경우 일반적으로 커밋 메시지)과 메시지('),s("span",{staticStyle:{color:"orange"}},[t._v("어떤 이유로 작업을 하였는 지 설명")]),t._v(")를 추가할 수 있습니다. 비교를 위해 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pulls",target:"_blank",rel:"noopener noreferrer"}},[t._v("기타 풀 리퀘스트"),s("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),s("li",[t._v("완료하였습니다. PX4 담당자가 기여 내용을 검토후, 병합 여부를 결정합니다. 때때로 변경 사항에 대해 질문이 있는 지 확인하십시오.")])]),t._v(" "),s("h2",{attrs:{id:"특정-릴리스-가져오기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#특정-릴리스-가져오기"}},[t._v("#")]),t._v(" 특정 릴리스 가져오기")]),t._v(" "),s("p",[s("em",[t._v("특정 이전 릴리스")]),t._v("의 소스 코드를 가져오려면, 다음 단계를 따라 하십시오.")]),t._v(" "),s("ul",[s("li",[t._v("PX4-Autopilot 저장소를 복제하고, PX4-Autopilot 디렉토리로 이동합니다."),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])]),t._v(" "),s("li",[t._v("모든 릴리스(태그)를 조회합니다."),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -l\n")])])])]),t._v(" "),s("li",[t._v("해당 태그의 코드를 체크아웃 합니다(예: 태그 1.7.4beta)."),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout v1.7.4beta\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"하위-모듈-업데이트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#하위-모듈-업데이트"}},[t._v("#")]),t._v(" 하위 모듈 업데이트")]),t._v(" "),s("p",[t._v("하위 모듈을 업데이트하는 방법에는 여러 가지가 있습니다. 저장소를 복제하거나 하위 모듈 디렉토리로 이동하여 "),s("a",{attrs:{href:"#contributing_code"}},[t._v("PX4에 코드 기여")]),t._v("와 동일한 방법으로 진행합니다.")]),t._v(" "),s("h2",{attrs:{id:"하위-모듈-업데이트에-대한-풀-요청-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#하위-모듈-업데이트에-대한-풀-요청-실행"}},[t._v("#")]),t._v(" 하위 모듈 업데이트에 대한 풀 요청 실행")]),t._v(" "),s("p",[t._v("이것은 하위 모듈 X 저장소에 대한 풀 요청을 실행하고, 버그 수정/기능 추가가 하위 모듈 X의 현재 마스터에에서 요구됩니다. 펌웨어는 업데이트 전에 커밋을 가리키므로, 펌웨어에서 사용하는 하위 모듈이 최신 커밋을 가리키도록 하위 모듈에 대한 풀 요청이 필요합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Firmware\n")])])]),s("ul",[s("li",[t._v("하위 모듈 업데이트에 대한 수정 사항/기능을 설명하는 새로운 분기를 만듭니다."),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b pr-some-fix\n")])])])]),t._v(" "),s("li",[t._v("하위 모듈 하위 디렉토리로 이동합니다."),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path to submodule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("PX4 하위 모듈이 반드시 최신 커밋을 가리킬 필요는 없습니다. 따라서, 먼저 마스터를 체크아웃하고 최신 업스트림 코드를 가져옵니다."),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull upstream master\n")])])])]),t._v(" "),s("li",[t._v("Firmware 디렉토리로 돌아가서, 평소처럼 변경 사항을 추가, 커밋 및 푸시합니다."),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])])])]),t._v(" "),s("p",[t._v("git add "),s("path",{attrs:{to:"",submodule:""}},[t._v('\ngit commit -m "Update submodule to include ..."\ngit push upstream pr-some-fix')])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n## 풀 요청 체크아웃\n\n병합할 분기가 해당 사람의 포크에만 존재하더라도, 누군가의 풀 요청(변경 사항이 아직 병합되지 않음)을 테스트할 수 있습니다. 다음 과정을 수행합니다.\n```sh\ngit fetch upstream  pull/<PR ID>/head:<branch name>\n")])])]),s("p",[s("code",[t._v("PR ID")]),t._v("는 풀 요청 제목 바로 옆에 있는 숫자(# 제외)이며 "),s("code",[t._v("<branch name>")]),t._v("은 "),s("code",[t._v("PR ID")]),t._v(" 바로 아래에서도 찾을 수 있습니다. 예: "),s("code",[t._v("<the other persons git name>:<branch name>")]),t._v(". 그 후 다음을 사용하여 로컬에서 새로 생성된 분기를 조회할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n")])])]),s("p",[t._v("그런 다음 해당 분기로 전환합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"일반적인-함정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#일반적인-함정"}},[t._v("#")]),t._v(" 일반적인 함정")]),t._v(" "),s("h3",{attrs:{id:"분기된-저장소로-강제-푸시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#분기된-저장소로-강제-푸시"}},[t._v("#")]),t._v(" 분기된 저장소로 강제 푸시")]),t._v(" "),s("p",[t._v("첫 번째 풀 요청후에, PX4 커뮤니티의 사람들이 변경 사항을 검토합니다. 대부분의 경우 검토에 따라 로컬 지점을 수정하여야 함을 의미합니다. 파일을 로컬로 변경한 후 기능 분기를 가장 최근의 업스트림/마스터로 다시 기반으로 지정하여야 합니다. 그러나, 리베이스 후에는 더 이상 기능 분기를 분기된 저장소에 직접 푸시할 수 없지만, 대신 강제 푸시를 사용하여야 합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force-with-lease origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your feature branch name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"리베이스-병합-충돌"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#리베이스-병합-충돌"}},[t._v("#")]),t._v(" 리베이스 병합 충돌")]),t._v(" "),s("p",[s("code",[t._v("git rebase")]),t._v(" 실행 중 충돌이 발생하면 "),s("a",{attrs:{href:"https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 가이드"),s("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),s("h3",{attrs:{id:"풀-병합-충돌"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#풀-병합-충돌"}},[t._v("#")]),t._v(" 풀 병합 충돌")]),t._v(" "),s("p",[s("code",[t._v("git pull")]),t._v(" 중 충돌이 발생하면 "),s("a",{attrs:{href:"https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/#competing-line-change-merge-conflicts",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 가이드"),s("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),s("h3",{attrs:{id:"오래된-git-태그로-인한-빌드-오류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#오래된-git-태그로-인한-빌드-오류"}},[t._v("#")]),t._v(" 오래된 git 태그로 인한 빌드 오류")]),t._v(" "),s("p",[t._v("빌드 오류 "),s("code",[t._v("오류: PX4 버전이 너무 낮음, 최소 vx.x.x가 필요합니다.")]),t._v(" git 태그가 오래된 경우 발생합니다.")]),t._v(" "),s("p",[t._v("이것은 업스트림 리포지토리 태그를 가져와서 해결할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream --tags\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);