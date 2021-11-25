(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{2258:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"windows-개발-환경"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-개발-환경"}},[t._v("#")]),t._v(" Windows 개발 환경")]),t._v(" "),e("p",[t._v("다음 지침은 Windows 10에서 (Cygwin 기반) PX4 개발 환경 설정 방법을 설명합니다. 이 환경은 다음을 위한 PX4를 구축하는 데 사용합니다.")]),t._v(" "),e("ul",[e("li",[t._v("Pixhawk와 기타 NuttX 기반 하드웨어")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim 시뮬레이션")])],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("이 설정은 PX4 개발 팀에서 지원합니다. To build other targets you will need to use a "),e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html#supported-targets"}},[t._v("different OS")]),t._v(" (or an "),e("RouterLink",{attrs:{to:"/ko/advanced/dev_env_unsupported.html"}},[t._v("unsupported windows development environment")]),t._v(").")],1)]),t._v(" "),e("p",[e("a",{attrs:{id:"installation"}})]),t._v(" "),e("h2",{attrs:{id:"설치-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설치-방법"}},[t._v("#")]),t._v(" 설치 방법")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github 릴리스"),e("OutboundLink")],1),t._v(" 또는 "),e("a",{attrs:{href:"https://s3-us-west-2.amazonaws.com/px4-tools/PX4+Windows+Cygwin+Toolchain/PX4+Windows+Cygwin+Toolchain+0.9.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon S3"),e("OutboundLink")],1),t._v("(빠른 다운로드)에서 바로 사용할 수 있는 MSI 설치 프로그램의 최신 버전을 다운로드합니다.")]),t._v(" "),e("li",[t._v("실행후, 설치 위치를 지정하고 설치하십시오:"),e("img",{attrs:{src:a(704),alt:"jMAVSimOnWindows"}})]),t._v(" "),e("li",[t._v("설치가 끝날 때 상자를 선택하여 "),e("em",[t._v("PX4 리포지토리를 복제하고, jMAVSim으로 시뮬레이션을 빌드 및 실행")]),t._v("합니다(이렇게 하면 시작 프로세스가 간소화됨). :::note 이 단계를 놓친 경우 "),e("a",{attrs:{href:"#getting_started"}},[t._v("PX4-Autopilot 저장소를 수동으로 복제")]),t._v("하여야 합니다.\n:::")])]),t._v(" "),e("p",[e("a",{attrs:{id:"getting_started"}})]),t._v(" "),e("h2",{attrs:{id:"시작하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#시작하기"}},[t._v("#")]),t._v(" 시작하기")]),t._v(" "),e("p",[t._v("툴체인은 일반 PX4 빌드 명령얼 실행을 위해 특별히 구성된 콘솔창("),e("strong",[t._v("run-console.bat")]),t._v(" 스크립트를 실행하여 시작)을 사용합니다.")]),t._v(" "),e("ol",[e("li",[t._v("도구 모음 설치 디렉터리로 이동합니다(기본값 "),e("strong",[t._v("C:\\PX4\\")]),t._v(").")]),t._v(" "),e("li",[e("strong",[t._v("run-console.bat")]),t._v("를 실행(두 번 클릭)하여 Linux와 같은 Cygwin bash 콘솔을 시작합니다(PX4를 빌드하려면 이 콘솔을 사용하여야 함).")]),t._v(" "),e("li",[t._v("콘솔에서 PX4-Autopilot 저장소를 복제합니다.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("설치 프로그램 옵션을 선택하여 "),e("em",[t._v("PX4 저장소를 복제하고 jMAVSim으로 시뮬레이션을 빌드 및 실행")]),t._v("한 경우에는 이 단계를 건너뛰십시오. 복제는 한 번만 수행하면 됩니다!")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PX4-Autopilot 저장소를 홈 폴더와 하위 모듈을 복제")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive -j8 https://github.com/PX4/PX4-Autopilot.git\n")])])]),e("p",[t._v("이제 콘솔/PX4-Autopilot 저장소를 사용하여 PX4를 빌드할 수 있습니다.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("예를 들어 jMAVSim을 실행하려면:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PX4-Autopilot 저장소로 이동")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# jMAVSim으로 SITL 시뮬레이션을 빌드하고 실행하여 설정을 테스트합니다.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),e("p",[t._v("그러면 콘솔에 다음이 표시됩니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(705),alt:"jMAVSimOnWindows"}})])])]),t._v(" "),e("h2",{attrs:{id:"다음-단계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#다음-단계"}},[t._v("#")]),t._v(" 다음 단계")]),t._v(" "),e("p",[t._v("명령줄 도구 모음 설정후, 다음을 수행합니다.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 일일 빌드"),e("OutboundLink")],1),t._v("를 설치합니다.")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("빌드 지침")]),t._v("을 계속 진행합니다.")],1)]),t._v(" "),e("p",[e("a",{attrs:{id:"usage_instructions"}})]),t._v(" "),e("h2",{attrs:{id:"문제-해결"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),e("h3",{attrs:{id:"파일-모니터링-도구와-툴체인-속도"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#파일-모니터링-도구와-툴체인-속도"}},[t._v("#")]),t._v(" 파일 모니터링 도구와 툴체인 속도")]),t._v(" "),e("p",[t._v("바이러스 백신 및 기타 백그라운드 파일 모니터링 도구는 툴체인 설치와 PX4 빌드 시간을 매우 느리게 할 수 있습니다.")]),t._v(" "),e("p",[t._v("빌드하는 동안 일시적으로 중지할 수 있습니다(자신의 책임).")]),t._v(" "),e("h3",{attrs:{id:"윈도우와-git-특수-사례"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#윈도우와-git-특수-사례"}},[t._v("#")]),t._v(" 윈도우와 Git 특수 사례")]),t._v(" "),e("h4",{attrs:{id:"windows-cr-lf-대-unix-lf-줄-끝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-cr-lf-대-unix-lf-줄-끝"}},[t._v("#")]),t._v(" Windows CR+LF 대 Unix LF 줄 끝")]),t._v(" "),e("p",[t._v("이 도구 모음을 사용하여 작업 중인 모든 저장소에 대해 Unix 스타일 LF 종료를 강제 실행하는 것이 좋습니다(그리고 변경 사항을 저장할 때 이를 보존하는 편집기(예: Eclipse 또는 VS Code) 사용). 소스 파일의 컴파일은 로컬에서 체크아웃된 CR+LF 엔딩에서도 작동하지만, Cygwin에는 Unix 줄 끝이 필요한 경우(예: 쉘 스크립트 실행)가 있습니다(그렇지 않으면 "),e("code",[t._v("$'\\r': Command not found.")]),t._v("). 운 좋게도 git은 저장소 루트 디렉토리에서 두 명령을 실행할 때 이 작업을 수행할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git config core.autocrlf false\ngit config core.eol lf\n")])])]),e("p",[t._v("여러 저장소에서 이 도구 체인으로 작업하는 경우 컴퓨터에 대해 다음 두 가지 구성을 전역적으로 설정할 수도 있습니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git config --global ...\n")])])]),e("p",[t._v("이것은 Windows 시스템에서 다른 (관련되지 않은) git 사용에 영향을 줄 수 있으므로 권장하지 않습니다.")]),t._v(" "),e("h4",{attrs:{id:"유닉스-권한-실행-비트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#유닉스-권한-실행-비트"}},[t._v("#")]),t._v(" 유닉스 권한 실행 비트")]),t._v(" "),e("p",[t._v("Unix에서는 각 파일의 권한에 파일이 실행 여부를 OS에 알려주는 플래그가 있습니다. Cygwin의 "),e("em",[t._v("git")]),t._v("은 해당 비트를 지원하고 처리합니다(Windows NTFS 파일 시스템에서 사용하지 않더라도). 이로 인해 "),e("em",[t._v("git")]),t._v('이 권한에서 "거짓 양성" 차이를 찾는 경우가 많습니다. diff 실행결과는 다음과 같을 수 있습니다.')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("diff --git ...\nold mode 100644\nnew mode 100755\n")])])]),e("p",[t._v("문제를 방지하려면 Windows에서 권한 검사를 전역적으로 비활성화하는 것이 좋습니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 머신에 대해 전역적으로 실행 비트 검사를 비활성화합니다.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.fileMode "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" \n")])])]),e("p",[t._v("로컬 설정으로 인하여 이 문제가 발생한 기존 저장소의 경우 추가로:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 전역 옵션을 적용하려면 이 저장소에 대한 로컬 옵션을 제거합니다.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset core.filemode\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 모든 하위 모듈에 대한 로컬 옵션 제거")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule foreach --recursive "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset core.filemode \n")])])])])}),[],!1,null,null,null);s.default=n.exports},704:function(t,s,a){t.exports=a.p+"assets/img/cygwin_toolchain_installer.3dba7f07.png"},705:function(t,s,a){t.exports=a.p+"assets/img/jmavsim_windows_cygwin.77037524.png"}}]);