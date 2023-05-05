(window.webpackJsonp=window.webpackJsonp||[]).push([[1310],{2413:function(t,e,o){"use strict";o.r(e);var n=o(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"windows-cygwin-개발-환경-유지-보수-지침"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-cygwin-개발-환경-유지-보수-지침"}},[t._v("#")]),t._v(" Windows Cygwin 개발 환경(유지 보수 지침)")]),t._v(" "),o("p",[t._v("This topic explains how to construct and extend the development environment used for the no-longer-supported "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_windows_cygwin.html"}},[t._v("Cygwin-based Windows Development Environment")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"추가-정보"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),o("p",[o("a",{attrs:{id:"features"}})]),t._v(" "),o("h3",{attrs:{id:"기능-이슈"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#기능-이슈"}},[t._v("#")]),t._v(" 기능 / 이슈")]),t._v(" "),o("p",[t._v("다음 기능이 (버전 2.0)에서 작동하는 것으로 알려져 있습니다.")]),t._v(" "),o("ul",[o("li",[t._v("가상머신보다 훨씬 더 나은 성능으로 jMAVSim을 사용하여 SITL을 빌드하고 실행합니다(기본 Windows 바이너리 "),o("strong",[t._v("px4.exe")]),t._v(" 생성).")]),t._v(" "),o("li",[t._v("NuttX 빌드 및 업로드 (예:  px4_fmu-v2 and px4_fmu-v4)")]),t._v(" "),o("li",[o("em",[t._v("astyle")]),t._v("을 사용한 스타일 검사("),o("code",[t._v("make format")]),t._v(" 명령 지원)")]),t._v(" "),o("li",[t._v("명령행 자동 완성")]),t._v(" "),o("li",[t._v("비침투적 설치 도구 해당 설치 프로그램은 사용자의 시스템과 전역 경로 설정에 어떤 영향도 주지 않습니다 (C:\\PX4\\와 같은 선택한 설치 디렉터리만 수정하여 임시 로컬 경로를 사용합니다).")]),t._v(" "),o("li",[t._v("설치 마법사에서는 툴체인 폴더의 개별 설정을 유지하면서 새 버전으로 업데이트할 수 있습니다.")])]),t._v(" "),o("p",[t._v("미지원:")]),t._v(" "),o("ul",[o("li",[t._v("시뮬레이션: Gazebo와 ROS는 지원되지 않습니다.")]),t._v(" "),o("li",[t._v("NuttX와 JMAVSim/SITL 빌드만 지원됩니다.")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/orgs/PX4/projects/6",target:"_blank",rel:"noopener noreferrer"}},[t._v("알려진 문제"),o("OutboundLink")],1),t._v(" (또한 보고할 문제).")])]),t._v(" "),o("p",[o("a",{attrs:{id:"script_setup"}})]),t._v(" "),o("h3",{attrs:{id:"셸-스크립트-설치"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#셸-스크립트-설치"}},[t._v("#")]),t._v(" 셸 스크립트 설치")]),t._v(" "),o("p",[t._v("Github 프로젝트에서 셸 스크립트를 사용하여 환경을 설치할 수 있습니다.")]),t._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows용 Git"),o("OutboundLink")],1),t._v("이 설치 여부를 체크합니다.")]),t._v(" "),o("li",[t._v("도구 체인을 설치하려는 위치에 https://github.com/PX4/windows-toolchain 저장소를 복제합니다. 기본 위치와 이름은 "),o("code",[t._v("Git Bash")]),t._v("를 열고, 다음을 실행하여 지정합니다.")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd /c/\ngit clone https://github.com/PX4/windows-toolchain PX4\n")])])]),o("ol",[o("li",[t._v("모든 구성 요소를 설치하려면, 새로 복제된 폴더로 이동하여 "),o("code",[t._v("toolchain")]),t._v(" 폴더에 있는 "),o("code",[t._v("install-all-components.bat")]),t._v(" 스크립트를 두 번 클릭합니다. 특정 구성 요소만 필요하고 인터넷 트래픽 및/또는 디스크 공간을 보호하려면, 예를 들어 다음과 같은 다른 구성 요소 폴더로 이동할 수 있습니다. "),o("code",[t._v("toolchain\\cygwin64")]),t._v(" 및 "),o("strong",[t._v("install-XXX.bat")]),t._v(" 스크립트를 클릭하여 특정 항목만 가져옵니다.")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_windows_cygwin.html#getting-started"}},[t._v("시작하기")]),t._v("를 계속합니다.")],1)]),t._v(" "),o("p",[o("a",{attrs:{id:"manual_setup"}})]),t._v(" "),o("h3",{attrs:{id:"수동-설치-툴체인-개발자용"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#수동-설치-툴체인-개발자용"}},[t._v("#")]),t._v(" 수동 설치 (툴체인 개발자용)")]),t._v(" "),o("p",[t._v("이 섹션에서는 스크립트 기반 설치 저장소에서  해당 스크립트를 사용하여 수동으로 Cygwin 도구 체인을 설정하는 방법을 설명합니다. 결과는 스크립트를 활용하는 방법이나 MSI 설치 관리자를 활용하는 방법이나 동일합니다.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("툴체인은 유지 관리되므로, 이 지침은 향후 모든 변경 사항의 모든 세부 사항을 다루지 않습니다.")])]),t._v(" "),o("ol",[o("li",[o("p",[o("em",[t._v("폴더")]),t._v("를 생성합니다: **C:\\PX4**, *"),o("em",[t._v("C:\\PX4\\toolchain*")]),t._v(" 및 *"),o("em",[t._v("C:\\PX4\\home*")])])]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://cygwin.com/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 Cygwin 웹사이트"),o("OutboundLink")],1),t._v("에서 "),o("em",[t._v("Cygwin 설치 프로그램")]),t._v(" 파일 "),o("a",{attrs:{href:"https://cygwin.com/setup-x86_64.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup-x86_64.exe"),o("OutboundLink")],1),t._v("를 다운로드합니다.")])]),t._v(" "),o("li",[o("p",[t._v("다운로드한 설치 파일을 실행합니다.")])]),t._v(" "),o("li",[o("p",[t._v("마법사에서 *"),o("em",[t._v("C:\\PX4\\toolchain\\cygwin64*")]),t._v(" 폴더에 설치하도록 선택합니다.")])]),t._v(" "),o("li",[o("p",[t._v("기본 Cygwin 기반과 다음 추가 패키지의 사용 가능한 최신 버전을 설치하려면 선택합니다.")]),t._v(" "),o("ul",[o("li",[t._v("**범주:패키지 이름 **")]),t._v(" "),o("li",[t._v("Devel:cmake (3.3.2 gives no deprecated warnings, 3.6.2 works but has the warnings)")]),t._v(" "),o("li",[t._v("Devel:gcc-g++")]),t._v(" "),o("li",[t._v("Devel:gdb")]),t._v(" "),o("li",[t._v("Devel:git")]),t._v(" "),o("li",[t._v("Devel:make")]),t._v(" "),o("li",[t._v("Devel:ninja")]),t._v(" "),o("li",[t._v("Devel:patch")]),t._v(" "),o("li",[t._v("Editors:xxd")]),t._v(" "),o("li",[t._v("Editors:nano (vim을 사용하지 않는 경우)")]),t._v(" "),o("li",[t._v("Python:python2")]),t._v(" "),o("li",[t._v("Python:python2-pip")]),t._v(" "),o("li",[t._v("Python:python2-numpy")]),t._v(" "),o("li",[t._v("Python:python2-jinja2")]),t._v(" "),o("li",[t._v("Python:python2-pyyaml")]),t._v(" "),o("li",[t._v("Python:python2-cerberus")]),t._v(" "),o("li",[t._v("Archive:unzip")]),t._v(" "),o("li",[t._v("Utils:astyle")]),t._v(" "),o("li",[t._v("Shells:bash-completion")]),t._v(" "),o("li",[t._v("Web:wget")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),o("p",[t._v("이 목록에 없는 패키지를 가능한 선택하지 마십시오. 일부 패키지는 충돌하고 빌드를 손상시킵니다.\n:::")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("이것이 "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-px4.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("cygwin64/install-cygwin-px4.bat"),o("OutboundLink")],1),t._v("가 하는 일입니다.")])]),t._v(" "),o("ol",[o("li",[o("p",[o("strong",[t._v("배치 스크립트")]),t._v(" "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/run-console.bat",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("run-console.bat")]),o("OutboundLink")],1),t._v("와 "),o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("setup-environment.bat")]),o("OutboundLink")],1),t._v("를 작성하거나 복사합니다.")]),t._v(" "),o("p",[t._v("준비된 배치 스크립트를 통하여 모든 개발 도구를 시작하는 이유는 도구 체인의 폴더 내에서 로컬 이식 가능한 Cygwin 환경을 사용하도록 시작 프로그램을 미리 설정하기 때문입니다. 이것은 항상 먼저 스크립트 "),o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("setup-environment.bat")]),o("OutboundLink")],1),t._v("를 호출하고, 그 후에 콘솔과 같은 원하는 애플리케이션을 호출하여 수행됩니다.")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup-environment.bat"),o("OutboundLink")],1),t._v(" 스크립트는 작업 환경 루트 디렉터리의 환경 변수 "),o("code",[t._v("PX4_DIR")]),t._v(", 전체 바이너리 경로 "),o("code",[t._v("PATH")]),t._v(", 유닉스 환경의 계정 루트 디렉터리 "),o("code",[t._v("HOME")]),t._v("을 설정합니다.")])]),t._v(" "),o("li",[o("p",[t._v("Cygwin 도구 모음 콘솔을 열고("),o("strong",[t._v("run-console.bat")]),t._v(" 두 번 클릭) 다음을 실행하여 필요한 "),o("strong",[t._v("python 패키지")]),t._v("를 설정에 추가합니다.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("pip2 install toml\npip2 install pyserial\npip2 install pyulog\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("이것이 "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-python-packages.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("cygwin64/install-cygwin-python-packages.bat"),o("OutboundLink")],1),t._v("가 하는 일입니다.")])]),t._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("ARM GCC 컴파일러")]),o("OutboundLink")],1),t._v("를 Windows용 바이너리의 zip 아카이브로 다운로드하고, "),o("code",[t._v("C:\\PX4\\toolchain\\gcc-arm")]),t._v(" 폴더에 압축을 해제합니다.")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("도구 모음이 "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/gcc-arm/install-gcc-arm.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("gcc-arm/install-gcc-arm.bat"),o("OutboundLink")],1),t._v("에서 수행하는 작업입니다.")])]),t._v(" "),o("ol",[o("li",[t._v("JDK를 설치합니다.\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk14-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle"),o("OutboundLink")],1),t._v(" 또는 "),o("a",{attrs:{href:"https://adoptopenjdk.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdoptOpenJDK"),o("OutboundLink")],1),t._v("에서 Java 14를 다운로드합니다.")]),t._v(" "),o("li",[t._v("애석하게도, 바이너리를 포함하는 파일이 없기 때문에 설치하여야 합니다.")]),t._v(" "),o("li",[t._v("바이너리를 찾아 "),o("strong",[t._v("C:\\PX4\\toolchain\\jdk")]),t._v("로 이동/복사하십시오.")]),t._v(" "),o("li",[t._v("윈도우 시스템에서 키트 설치를 제거할 수 있습니다. 툴체인에는 바이너리만 필요합니다.")])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("이것이 툴체인이 "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/jdk/install-jdk.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("jdk/install-jdk.bat"),o("OutboundLink")],1),t._v("에서 하는 일입니다.")])]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Windows용 바이너리의 zip 아카이브로 "),o("a",{attrs:{href:"https://ant.apache.org/bindownload.cgi",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("Apache Ant")]),o("OutboundLink")],1),t._v("를 다운로드하고, "),o("code",[t._v("C:\\PX4\\toolchain\\apache-ant")]),t._v(" 폴더에 압축을 해제합니다.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")])])])]),t._v(" "),o("p",[t._v("다운로드한 아카이브 내부에 있는 폴더에서 추가 폴더 레이어가 없는지 확인하십시오.")]),t._v(" "),o("p",[t._v(":::")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("도구 모음이 "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/apache-ant/install-apache-ant.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("apache-ant/install-apache-ant.bat"),o("OutboundLink")],1),t._v("에서 수행하는 작업입니다.")])]),t._v(" "),o("ol",[o("li",[o("em",[t._v("genromfs")]),t._v("를 다운로드하고, 빌드한 다음 PATH에 추가하십시오:\n"),o("ul",[o("li",[o("p",[t._v("다음을 사용하여 "),o("strong",[t._v("C:\\PX4\\toolchain\\genromfs\\genromfs-src")]),t._v(" 폴더에 소스 코드를 복제합니다.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd /c/toolchain/genromfs\ngit clone https://github.com/chexum/genromfs.git genromfs-src\n")])])])]),t._v(" "),o("li",[o("p",[t._v("다음 명령으로 컴파일합니다.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd genromfs-src\nmake all\n")])])])])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("\n* 결과 바이너리 **genromfs.exe**를 한 폴더 수준으로 복사합니다. **C:\\PX4\\toolchain\\genromfs**\n\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("이것은 툴체인이 "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/genromfs/install-genromfs.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("genromfs/install-genromfs.bat"),o("OutboundLink")],1),t._v("에서 수행하는 작업입니다.")])]),t._v(" "),o("ol",[o("li",[t._v("설치된 모든 구성요소의 모든 바이너리 폴더가 "),o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("setup-environment.bat")]),o("OutboundLink")],1),t._v("에 의해 구성된 "),o("code",[t._v("PATH")]),t._v(" 변수에 올바르게 나열되어 있는지 확인하십시오.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);