(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{2638:function(t,e,s){"use strict";s.r(e);var o=s(19),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"windows-development-environment-cygwin-based"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-development-environment-cygwin-based"}},[t._v("#")]),t._v(" Windows Development Environment (Cygwin-based)")]),t._v(" "),o("p",[t._v("다음 지침은 Windows 10에서 (Cygwin 기반) PX4 개발 환경 설정 방법을 설명합니다. 이 환경은 다음을 위한 PX4를 구축하는 데 사용합니다.")]),t._v(" "),o("ul",[o("li",[t._v("Pixhawk와 기타 NuttX 기반 하드웨어")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim 시뮬레이션")])],1)]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("This setup is an "),o("RouterLink",{attrs:{to:"/ko/advanced/dev_env_unsupported.html"}},[t._v("unsupported windows development environment")]),t._v(".")],1),t._v(" "),o("p",[t._v("The toolchain was previously recommended, but does not work with PX4 v1.12 and later due to packaging issues. The "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_windows_wsl.html"}},[t._v("Windows WSL2-Based Development Environment")]),t._v(" should be used by preference.")],1)]),t._v(" "),o("p",[o("a",{attrs:{id:"installation"}})]),t._v(" "),o("h2",{attrs:{id:"설치-방법"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#설치-방법"}},[t._v("#")]),t._v(" 설치 방법")]),t._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github 릴리스"),o("OutboundLink")],1),t._v(" 또는 "),o("a",{attrs:{href:"https://s3-us-west-2.amazonaws.com/px4-tools/PX4+Windows+Cygwin+Toolchain/PX4+Windows+Cygwin+Toolchain+0.9.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon S3"),o("OutboundLink")],1),t._v("(빠른 다운로드)에서 바로 사용할 수 있는 MSI 설치 프로그램의 최신 버전을 다운로드합니다.")]),t._v(" "),o("li",[t._v("실행후, 설치 위치를 지정하고 설치하십시오:"),o("img",{attrs:{src:s(749),alt:"jMAVSimOnWindows"}})]),t._v(" "),o("li",[t._v("설치가 끝날 때 상자를 선택하여 "),o("em",[t._v("PX4 리포지토리를 복제하고, jMAVSim으로 시뮬레이션을 빌드 및 실행")]),t._v("합니다(이렇게 하면 시작 프로세스가 간소화됨). :::note 이 단계를 놓친 경우 "),o("a",{attrs:{href:"#getting_started"}},[t._v("PX4-Autopilot 저장소를 수동으로 복제")]),t._v("하여야 합니다.\n:::")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("At time of writing the installer is missing some dependencies (and cannot yet be rebuilt to add them - see "),o("a",{attrs:{href:"https://github.com/PX4/PX4-windows-toolchain/issues/31",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-windows-toolchain#31"),o("OutboundLink")],1),t._v(").")]),t._v(" "),o("p",[t._v("To add these yourself:")]),t._v(" "),o("ol",[o("li",[t._v("도구 모음 설치 디렉터리로 이동합니다(기본값 "),o("strong",[t._v("C:\\PX4\\")]),t._v(").")]),t._v(" "),o("li",[t._v("Run "),o("strong",[t._v("run-console.bat")]),t._v(" (double click) to start the linux-like Cygwin bash console")]),t._v(" "),o("li",[t._v("Enter the following command in the console:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("pip3 install --user kconfiglib jsonschema future\n")])])])])])]),t._v(" "),o("p",[o("a",{attrs:{id:"getting_started"}})]),t._v(" "),o("h2",{attrs:{id:"시작하기"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#시작하기"}},[t._v("#")]),t._v(" 시작하기")]),t._v(" "),o("p",[t._v("The toolchain uses a specially configured console window (started by running the "),o("strong",[t._v("run-console.bat")]),t._v(" script) from which you can call the normal PX4 build commands:")]),t._v(" "),o("ol",[o("li",[t._v("도구 모음 설치 디렉터리로 이동합니다(기본값 "),o("strong",[t._v("C:\\PX4\\")]),t._v(").")]),t._v(" "),o("li",[t._v("Run "),o("strong",[t._v("run-console.bat")]),t._v(" (double click) to start the linux-like Cygwin bash console (you must use this console to build PX4).")]),t._v(" "),o("li",[t._v("Clone the PX4 PX4-Autopilot repository from within the console:")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Skip this step if you ticked the installer option to "),o("em",[t._v("clone the PX4 repository, build and run simulation with jMAVSim")]),t._v(". Cloning only needs to be done once!")])]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Clone the PX4-Autopilot repository into the home folder & loads submodules in parallel")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive -j8 https://github.com/PX4/PX4-Autopilot.git\n")])])]),o("p",[t._v("You can now use the console/PX4-Autopilot repository to build PX4.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("For example, to run JMAVSim:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Navigate to PX4-Autopilot repo")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Firmware\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Build and runs SITL simulation with jMAVSim to test the setup")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),o("p",[t._v("The console will then display:")]),t._v(" "),o("p",[o("img",{attrs:{src:s(750),alt:"jMAVSimOnWindows"}})])])]),t._v(" "),o("h2",{attrs:{id:"다음-단계"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#다음-단계"}},[t._v("#")]),t._v(" 다음 단계")]),t._v(" "),o("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),o("ul",[o("li",[t._v("Install the "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("빌드 지침")]),t._v("을 계속 진행합니다.")],1)]),t._v(" "),o("p",[o("a",{attrs:{id:"usage_instructions"}})]),t._v(" "),o("h2",{attrs:{id:"문제-해결"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),o("h3",{attrs:{id:"파일-모니터링-도구와-툴체인-속도"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#파일-모니터링-도구와-툴체인-속도"}},[t._v("#")]),t._v(" 파일 모니터링 도구와 툴체인 속도")]),t._v(" "),o("p",[t._v("Antivirus and other background file monitoring tools can significantly slow down both installation of the toolchain and PX4 build times.")]),t._v(" "),o("p",[t._v("You may wish to halt them temporarily during builds (at your own risk).")]),t._v(" "),o("h3",{attrs:{id:"윈도우와-git-특수-사례"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#윈도우와-git-특수-사례"}},[t._v("#")]),t._v(" 윈도우와 Git 특수 사례")]),t._v(" "),o("h4",{attrs:{id:"windows-cr-lf-대-unix-lf-줄-끝"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-cr-lf-대-unix-lf-줄-끝"}},[t._v("#")]),t._v(" Windows CR+LF 대 Unix LF 줄 끝")]),t._v(" "),o("p",[t._v("We recommend that you force Unix style LF endings for every repository you're working with using this toolchain (and use an editor which preserves them when saving your changes - e.g. Eclipse or VS Code). Compilation of source files also works with CR+LF endings checked out locally, but there are cases in Cygwin (e.g. execution of shell scripts) that require Unix line endings (otherwise you get errors like "),o("code",[t._v("$'\\r': Command not found.")]),t._v("). Luckily git can do this for you when you execute the two commands in the root directory of your repo:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("git config core.autocrlf false\ngit config core.eol lf\n")])])]),o("p",[t._v("If you work with this toolchain on multiple repositories you can also set these two configurations globally for your machine:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("git config --global ...\n")])])]),o("p",[t._v("This is not recommended because it may affect any other (unrelated) git use on your Windows machine.")]),t._v(" "),o("h4",{attrs:{id:"유닉스-권한-실행-비트"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#유닉스-권한-실행-비트"}},[t._v("#")]),t._v(" 유닉스 권한 실행 비트")]),t._v(" "),o("p",[t._v("Under Unix there's a flag in the permissions of each file that tells the OS whether or not the file is allowed to be executed. "),o("em",[t._v("git")]),t._v(" under Cygwin supports and cares about that bit (even though the Windows NTFS file system does not use it). This often results in "),o("em",[t._v("git")]),t._v(' finding "false-positive" differences in permissions. The resulting diff might look like this:')]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("diff --git ...\nold mode 100644\nnew mode 100755\n")])])]),o("p",[t._v("We recommend globally disabling the permission check on Windows to avoid the problem:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 머신에 대해 전역적으로 실행 비트 검사를 비활성화합니다.")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.fileMode "),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" \n")])])]),o("p",[t._v("For existing repositories that have this problem caused by a local configuration, additionally:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 전역 옵션을 적용하려면 이 저장소에 대한 로컬 옵션을 제거합니다.")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset core.filemode\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 모든 하위 모듈에 대한 로컬 옵션 제거")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule foreach --recursive "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset core.filemode \n")])])])])}),[],!1,null,null,null);e.default=n.exports},749:function(t,e,s){t.exports=s.p+"assets/img/cygwin_toolchain_installer.650c2838.png"},750:function(t,e,s){t.exports=s.p+"assets/img/jmavsim_windows_cygwin.eb0ed1bb.png"}}]);