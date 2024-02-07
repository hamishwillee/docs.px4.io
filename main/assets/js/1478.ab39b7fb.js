(window.webpackJsonp=window.webpackJsonp||[]).push([[1478],{2759:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"git-예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-예제"}},[e._v("#")]),e._v(" git 예제")]),e._v(" "),a("p",[a("a",{attrs:{id:"contributing_code"}})]),e._v(" "),a("h2",{attrs:{id:"px4에-코드-기여"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4에-코드-기여"}},[e._v("#")]),e._v(" PX4에 코드 기여")]),e._v(" "),a("p",[e._v("PX4 기능 추가 절차는 다음과 같습니다. 다음 예제를 따라 PX4에 기여 결과를 공유할 수 있습니다.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("아직 Github에 계정이 없으면, 먼저 "),a("a",{attrs:{href:"https://github.com/join",target:"_blank",rel:"noopener noreferrer"}},[e._v("가입"),a("OutboundLink")],1),e._v("합니다.")])]),e._v(" "),a("li",[a("p",[e._v("Fork the PX4-Autopilot repo (see "),a("a",{attrs:{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("포크된 저장소를 로컬 컴퓨터에 복제합니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/wherever/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/PX4-Autopilot.git\n")])])])]),e._v(" "),a("li",[a("p",[e._v("복제한 디렉토리로 이동하여, 하위 모듈을 초기화 및 업데이트하고, 원 업스트림 PX4-Autopilot URL을 추가합니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --init --recursive\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" upstream https://github.com/PX4/PX4-Autopilot.git\n")])])])]),e._v(" "),a("li",[a("p",[e._v("You should have now two remote repositories: One repository is called "),a("code",[e._v("upstream")]),e._v(" that points to PX4/PX4-Autopilot, and one repository "),a("code",[e._v("origin")]),e._v(" that points to your forked copy of the PX4 repository.")])]),e._v(" "),a("li",[a("p",[e._v("이것은 다음 명령어로 확인할 수 있습니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote -v\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Make the changes that you want to add to the current main.")])]),e._v(" "),a("li",[a("p",[e._v("기능을 나타내는 의미 있는 이름으로 새 분기를 생성합니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[a("code",[e._v("git branch")]),e._v(" 명령어로 분기를 확인할 수 있습니다.")])]),e._v(" "),a("li",[a("p",[e._v("해당 파일을 추가하여 커밋의 변경 사항을 추가합니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("GUI로 파일을 추가하려면 "),a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-in-Other-Environments-Graphical-Interfaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitk"),a("OutboundLink")],1),e._v(" 또는 "),a("a",{attrs:{href:"http://nuclearsquid.com/writings/git-add/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("git add -p")]),a("OutboundLink")],1),e._v("를 참조하십시오.")])]),e._v(" "),a("li",[a("p",[e._v("변경 사항을 설명하는 메시지와 함께 추가된 파일을 커밋합니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your commit message>"')]),e._v("\n")])])]),a("p",[e._v("For a good commit message, please refer to the "),a("RouterLink",{attrs:{to:"/ko/contribute//code.html#commits-and-commit-messages"}},[e._v("Source Code Management")]),e._v(" section.")],1)]),e._v(" "),a("li",[a("p",[e._v("Some time might have passed and the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("upstream main"),a("OutboundLink")],1),e._v(" has changed. PX4 prefers a linear commit history and uses "),a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-Branching-Rebasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("git rebase"),a("OutboundLink")],1),e._v(". To include the newest changes from upstream in your local branch, switch to your main branch")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout main\n")])])]),a("p",[e._v("Then pull the newest commits from upstream main")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull upstream main\n")])])]),a("p",[e._v("Now your local main is up to date. Switch back to your feature branch and rebase on your updated main")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase main\n")])])])]),e._v(" "),a("li",[a("p",[e._v("이제 로컬 커밋을 분기된 저장소로 푸시할 수 있습니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("You can verify that the push was successful by going to your forked repository in your browser: "),a("code",[e._v("https://github.com/<your git name>/PX4-Autopilot.git")])]),e._v(" "),a("p",[e._v("There you should see the message that a new branch has been pushed to your forked repository.")])]),e._v(" "),a("li",[a("p",[e._v('이제 풀 리퀘스트(PR)를 생성합니다. "새 분기 메시지"(앞의 한 단계 참조)의 오른쪽에 "풀 요청 비교 및 생성"이라는 녹색 버튼이 표시되어야 합니다. 그런 다음 변경 사항을 나열하여야 하며, 의미 있는 제목(하나의 커밋 PR의 경우 일반적으로 커밋 메시지)과 메시지('),a("span",{staticStyle:{color:"orange"}},[e._v("어떤 이유로 작업을 하였는 지 설명")]),e._v(")를 추가할 수 있습니다. 비교를 위해 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pulls",target:"_blank",rel:"noopener noreferrer"}},[e._v("기타 풀 리퀘스트"),a("OutboundLink")],1),e._v("를 참고하십시오.")])]),e._v(" "),a("li",[a("p",[e._v("완료하였습니다. PX4 담당자가 기여 내용을 검토후, 병합 여부를 결정합니다. 때때로 변경 사항에 대해 질문이 있는 지 확인하십시오.")])])]),e._v(" "),a("h2",{attrs:{id:"changing-source-trees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-source-trees"}},[e._v("#")]),e._v(" Changing Source Trees")]),e._v(" "),a("p",[e._v("We recommend using PX4 "),a("code",[e._v("make")]),e._v(' commands to switch between source code branches. This saves you having to remember the commands to update submodules and clean up build artifacts (build files that are not removed will result in "untracked files" errors after the switch).')]),e._v(" "),a("p",[e._v("To switch between branches:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clean up the current branch, de-initializing submodule and removing all build artifacts:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clean\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" distclean\n")])])])]),e._v(" "),a("li",[a("p",[e._v('Switch to a new branch or tag (here we first fetch the fictional branch "PR_test_branch" from the '),a("code",[e._v("upstream")]),e._v(" remote):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream PR_test_branch\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout PR_test_branch\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Get the submodules for the new branch:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" submodulesclean\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"특정-릴리스-가져오기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#특정-릴리스-가져오기"}},[e._v("#")]),e._v(" 특정 릴리스 가져오기")]),e._v(" "),a("p",[e._v("Specific PX4 point releases are made as tags of the "),a("a",{attrs:{href:"#get-a-release-branch"}},[e._v("release branches")]),e._v(", and are named using the format "),a("code",[e._v("v<release>")]),e._v(". These are "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases?q=release&expanded=true",target:"_blank",rel:"noopener noreferrer"}},[e._v("listed on Github here"),a("OutboundLink")],1),e._v(" (or you can query all tags using "),a("code",[e._v("git tag -l")]),e._v(").")]),e._v(" "),a("p",[e._v("To get the source code for a "),a("em",[e._v("specific older release")]),e._v(" (tag):")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clone the PX4-Autopilot repo and navigate into "),a("em",[e._v("PX4-Autopilot")]),e._v(" directory:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/PX4/PX4-Autopilot.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("You can reuse an existing repo rather than cloning a new one. In this case clean the build environment (see "),a("a",{attrs:{href:"#changing-source-trees"}},[e._v("changing source trees")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clean\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" distclean\n")])])])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Checkout code for particular tag (e.g. for tag v1.13.0-beta2)")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout v1.13.0-beta2\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Update submodules:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" submodulesclean\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"get-a-release-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-a-release-branch"}},[e._v("#")]),e._v(" Get a Release Branch")]),e._v(" "),a("p",[e._v("Releases branches are branched of "),a("code",[e._v("main")]),e._v(", and used to backport necessary changes from main into a release. The branches are named using the format "),a("code",[e._v("release/<release_number>")]),e._v(" (e.g. "),a("code",[e._v("release/v1.13")]),e._v("). The are "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/branches/all?query=release",target:"_blank",rel:"noopener noreferrer"}},[e._v("listed here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To get a release branch:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Clone the PX4-Autopilot repo and navigate into "),a("em",[e._v("PX4-Autopilot")]),e._v(" directory:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/PX4/PX4-Autopilot.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("You can reuse an existing repo rather than cloning a new one. In this case clean the build environment (see "),a("a",{attrs:{href:"#changing-source-trees"}},[e._v("changing source trees")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clean\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" distclean\n")])])])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Fetch the desired release branch. For example, assuming you want the source for PX4 v1.14:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch origin release/1.14\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Checkout the code for the branch")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout release/1.14\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Update submodules:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" submodulesclean\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"하위-모듈-업데이트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하위-모듈-업데이트"}},[e._v("#")]),e._v(" 하위 모듈 업데이트")]),e._v(" "),a("p",[e._v("하위 모듈을 업데이트하는 방법에는 여러 가지가 있습니다. 저장소를 복제하거나 하위 모듈 디렉토리로 이동하여 "),a("a",{attrs:{href:"#contributing_code"}},[e._v("PX4에 코드 기여")]),e._v("와 동일한 방법으로 진행합니다.")]),e._v(" "),a("h2",{attrs:{id:"하위-모듈-업데이트에-대한-풀-요청-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하위-모듈-업데이트에-대한-풀-요청-실행"}},[e._v("#")]),e._v(" 하위 모듈 업데이트에 대한 풀 요청 실행")]),e._v(" "),a("p",[e._v("This is required after you have done a PR for a submodule X repository and the bug-fix / feature-add is in the current main of submodule X. Since the Firmware still points to a commit before your update, a submodule pull request is required such that the submodule used by the Firmware points to the newest commit.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" Firmware\n")])])]),a("ul",[a("li",[a("p",[e._v("하위 모듈 업데이트에 대한 수정 사항/기능을 설명하는 새로운 분기를 만듭니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b pr-some-fix\n")])])])]),e._v(" "),a("li",[a("p",[e._v("하위 모듈 하위 디렉토리로 이동합니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("path to submodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("PX4 하위 모듈이 반드시 최신 커밋을 가리킬 필요는 없습니다. Therefore, first checkout main and pull the newest upstream code.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull upstream main\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Firmware 디렉토리로 돌아가서, 평소처럼 변경 사항을 추가, 커밋 및 푸시합니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("path to submodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Update submodule to include ..."')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push upstream pr-some-fix\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"풀-요청-체크아웃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#풀-요청-체크아웃"}},[e._v("#")]),e._v(" 풀 요청 체크아웃")]),e._v(" "),a("p",[e._v("병합할 분기가 해당 사람의 포크에만 존재하더라도, 누군가의 풀 요청(변경 사항이 아직 병합되지 않음)을 테스트할 수 있습니다. 다음 과정을 수행합니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream  pull/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PR ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/head:"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[a("code",[e._v("PR ID")]),e._v("는 풀 요청 제목 바로 옆에 있는 숫자(# 제외)이며 "),a("code",[e._v("<branch name>")]),e._v("은 "),a("code",[e._v("PR ID")]),e._v(" 바로 아래에서도 찾을 수 있습니다. 예: "),a("code",[e._v("<the other persons git name>:<branch name>")]),e._v(". 그 후 다음을 사용하여 로컬에서 새로 생성된 분기를 조회할 수 있습니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch\n")])])]),a("p",[e._v("그런 다음 해당 분기로 전환합니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h2",{attrs:{id:"일반적인-함정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#일반적인-함정"}},[e._v("#")]),e._v(" 일반적인 함정")]),e._v(" "),a("h3",{attrs:{id:"분기된-저장소로-강제-푸시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#분기된-저장소로-강제-푸시"}},[e._v("#")]),e._v(" 분기된 저장소로 강제 푸시")]),e._v(" "),a("p",[e._v("첫 번째 풀 요청후에, PX4 커뮤니티의 사람들이 변경 사항을 검토합니다. 대부분의 경우 검토에 따라 로컬 지점을 수정하여야 함을 의미합니다. After changing the files locally, the feature branch needs to be rebased again with the most recent upstream/main. 그러나, 리베이스 후에는 더 이상 기능 분기를 분기된 저장소에 직접 푸시할 수 없지만, 대신 강제 푸시를 사용하여야 합니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --force-with-lease origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h3",{attrs:{id:"리베이스-병합-충돌"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#리베이스-병합-충돌"}},[e._v("#")]),e._v(" 리베이스 병합 충돌")]),e._v(" "),a("p",[e._v("If a conflict occurs during a "),a("code",[e._v("git rebase")]),e._v(", please refer to "),a("a",{attrs:{href:"https://docs.github.com/en/get-started/using-git/resolving-merge-conflicts-after-a-git-rebase",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"풀-병합-충돌"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#풀-병합-충돌"}},[e._v("#")]),e._v(" 풀 병합 충돌")]),e._v(" "),a("p",[a("code",[e._v("git pull")]),e._v(" 중 충돌이 발생하면 "),a("a",{attrs:{href:"https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/#competing-line-change-merge-conflicts",target:"_blank",rel:"noopener noreferrer"}},[e._v("이 가이드"),a("OutboundLink")],1),e._v("를 참고하십시오.")]),e._v(" "),a("h3",{attrs:{id:"오래된-git-태그로-인한-빌드-오류"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#오래된-git-태그로-인한-빌드-오류"}},[e._v("#")]),e._v(" 오래된 git 태그로 인한 빌드 오류")]),e._v(" "),a("p",[e._v("빌드 오류 "),a("code",[e._v("오류: PX4 버전이 너무 낮음, 최소 vx.x.x가 필요합니다.")]),e._v(" git 태그가 오래된 경우 발생합니다.")]),e._v(" "),a("p",[e._v("이것은 업스트림 리포지토리 태그를 가져와서 해결할 수 있습니다.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream --tags\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);