(window.webpackJsonp=window.webpackJsonp||[]).push([[933],{1903:function(t,e,o){"use strict";o.r(e);var a=o(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"윈도우즈-환경의-cygwin-개발-환경-설정-유지-보수-지침"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#윈도우즈-환경의-cygwin-개발-환경-설정-유지-보수-지침"}},[t._v("#")]),t._v(" 윈도우즈 환경의 Cygwin 개발 환경 설정 (유지 보수 지침)")]),t._v(" "),o("p",[t._v("이 주제는 어떤 방식으로 "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_windows_cygwin.html"}},[t._v("Cygwin 기반의 윈도우 개발 환경")]),t._v("을 구성하고 확장하는 방법을 설명해주는 글입니다.")],1),t._v(" "),o("h2",{attrs:{id:"추가-정보"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),o("p",[o("a",{attrs:{id:"features"}})]),t._v(" "),o("h3",{attrs:{id:"기능-문제"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#기능-문제"}},[t._v("#")]),t._v(" 기능 / 문제")]),t._v(" "),o("p",[t._v("다음과 같은 기능은 다음과 같은 버전에서 확실히 작동합니다. (Version 2.0):")]),t._v(" "),o("ul",[o("li",[t._v("SITL과 jMAVSim의 빌드 및 실행은 가상 머신에서의 동작보다 월등합니다. (이것은 윈도우 자체 바이너리를 만듭니다.  "),o("strong",[t._v("px4.exe")]),t._v(").")]),t._v(" "),o("li",[t._v("NuttX 빌드 및 업로드 (예:  px4_fmu-v2 and px4_fmu-v4)")]),t._v(" "),o("li",[o("em",[t._v("astyle")]),t._v("을 이용한 코드 검사(명령어: "),o("code",[t._v("make format")]),t._v(")")]),t._v(" "),o("li",[t._v("명령행 자동 완성")]),t._v(" "),o("li",[t._v("비침투적 설치 도구 해당 설치 프로그램은 사용자의 시스템과 전역 경로 설정에 어떤 영향도 주지 않습니다 (C:\\PX4\\와 같은 선택한 설치 디렉터리만 수정하며 임시 로컬 경로를 사용합니다).")]),t._v(" "),o("li",[t._v("설치 마법사에서는 툴체인 폴더의 개별 설정을 유지하면서 새 버전으로 업데이트할 수 있습니다.")])]),t._v(" "),o("p",[t._v("미지원:")]),t._v(" "),o("ul",[o("li",[t._v("Simulation: Gazebo and ROS are not supported.")]),t._v(" "),o("li",[t._v("Only NuttX and JMAVSim/SITL builds are supported.")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/orgs/PX4/projects/6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Known problems"),o("OutboundLink")],1),t._v(" (Also use to report issues).")])]),t._v(" "),o("p",[o("a",{attrs:{id:"script_setup"}})]),t._v(" "),o("h3",{attrs:{id:"shell-script-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#shell-script-installation"}},[t._v("#")]),t._v(" Shell Script Installation")]),t._v(" "),o("p",[t._v("You can also install the environment using shell scripts in the Github project.")]),t._v(" "),o("ol",[o("li",[t._v("Make sure you have "),o("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git for Windows"),o("OutboundLink")],1),t._v(" installed.")]),t._v(" "),o("li",[t._v("Clone the repository https://github.com/PX4/windows-toolchain to the location you want to install the toolchain. Default location and naming is achieved by opening the "),o("code",[t._v("Git Bash")]),t._v(" and executing:")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd /c/\ngit clone https://github.com/PX4/windows-toolchain PX4\n")])])]),o("ol",[o("li",[t._v("If you want to install all components navigate to the freshly cloned folder and double click on the script "),o("code",[t._v("install-all-components.bat")]),t._v(" located in the folder "),o("code",[t._v("toolchain")]),t._v(". If you only need certain components and want to safe Internet traffic and or disk space you can navigate to the different component folders like e.g. "),o("code",[t._v("toolchain\\cygwin64")]),t._v(" and click on the "),o("strong",[t._v("install-XXX.bat")]),t._v(" scripts to only fetch something specific.")]),t._v(" "),o("li",[t._v("Continue with "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_windows_cygwin.html#getting-started"}},[t._v("Getting Started")]),t._v(".")],1)]),t._v(" "),o("p",[o("a",{attrs:{id:"manual_setup"}})]),t._v(" "),o("h3",{attrs:{id:"manual-installation-for-toolchain-developers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manual-installation-for-toolchain-developers"}},[t._v("#")]),t._v(" Manual Installation (for Toolchain Developers)")]),t._v(" "),o("p",[t._v("This section describes how to setup the Cygwin toolchain manually yourself while pointing to the corresponding scripts from the script based installation repo. The result should be the same as using the scripts or MSI installer.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The toolchain gets maintained and hence these instructions might not cover every detail of all the future changes.")])]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Create the "),o("em",[t._v("folders")]),t._v(": **C:\\PX4**, *"),o("em",[t._v("C:\\PX4\\toolchain*")]),t._v(" and *"),o("em",[t._v("C:\\PX4\\home*")])])]),t._v(" "),o("li",[o("p",[t._v("Download the "),o("em",[t._v("Cygwin installer")]),t._v(" file "),o("a",{attrs:{href:"https://cygwin.com/setup-x86_64.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup-x86_64.exe"),o("OutboundLink")],1),t._v(" from the "),o("a",{attrs:{href:"https://cygwin.com/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official Cygwin website"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[t._v("Run the downloaded setup file")])]),t._v(" "),o("li",[o("p",[t._v("In the wizard choose to install into the folder: *"),o("em",[t._v("C:\\PX4\\toolchain\\cygwin64*")])])]),t._v(" "),o("li",[o("p",[t._v("Select to install the default Cygwin base and the newest available version of the following additional packages:")]),t._v(" "),o("ul",[o("li",[t._v("**Category:Packagename **")]),t._v(" "),o("li",[t._v("Devel:cmake (3.3.2 gives no deprecated warnings, 3.6.2 works but has the warnings)")]),t._v(" "),o("li",[t._v("Devel:gcc-g++")]),t._v(" "),o("li",[t._v("Devel:gdb")]),t._v(" "),o("li",[t._v("Devel:git")]),t._v(" "),o("li",[t._v("Devel:make")]),t._v(" "),o("li",[t._v("Devel:ninja")]),t._v(" "),o("li",[t._v("Devel:patch")]),t._v(" "),o("li",[t._v("Editors:xxd")]),t._v(" "),o("li",[t._v("Editors:nano (unless you're the vim pro)")]),t._v(" "),o("li",[t._v("Python:python2")]),t._v(" "),o("li",[t._v("Python:python2-pip")]),t._v(" "),o("li",[t._v("Python:python2-numpy")]),t._v(" "),o("li",[t._v("Python:python2-jinja2")]),t._v(" "),o("li",[t._v("Python:python2-pyyaml")]),t._v(" "),o("li",[t._v("Python:python2-cerberus")]),t._v(" "),o("li",[t._v("Archive:unzip")]),t._v(" "),o("li",[t._v("Utils:astyle")]),t._v(" "),o("li",[t._v("Shells:bash-completion")]),t._v(" "),o("li",[t._v("Web:wget")])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Do not select as many packages as possible which are not on this list, there are some which conflict and break the builds.")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("That's what "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-px4.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("cygwin64/install-cygwin-px4.bat"),o("OutboundLink")],1),t._v(" does.")])]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Write up or copy the "),o("strong",[t._v("batch scripts")]),t._v(" "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/run-console.bat",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("run-console.bat")]),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("setup-environment.bat")]),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("The reason to start all the development tools through the prepared batch script is they preconfigure the starting program to use the local, portable Cygwin environment inside the toolchain's folder. This is done by always first calling the script "),o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("setup-environment.bat")]),o("OutboundLink")],1),t._v(" and the desired application like the console after that.")]),t._v(" "),o("p",[t._v("The script "),o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup-environment.bat"),o("OutboundLink")],1),t._v(" locally sets environmental variables for the workspace root directory "),o("code",[t._v("PX4_DIR")]),t._v(", all binary locations "),o("code",[t._v("PATH")]),t._v(", and the home directory of the unix environment "),o("code",[t._v("HOME")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Add necessary "),o("strong",[t._v("python packages")]),t._v(" to your setup by opening the Cygwin toolchain console (double clicking "),o("strong",[t._v("run-console.bat")]),t._v(") and executing")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("pip2 install toml\npip2 install pyserial\npip2 install pyulog\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("That's what "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-python-packages.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("cygwin64/install-cygwin-python-packages.bat"),o("OutboundLink")],1),t._v(" does.")])]),t._v(" "),o("ol",[o("li",[t._v("Download the "),o("a",{attrs:{href:"https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("ARM GCC compiler")]),o("OutboundLink")],1),t._v(" as zip archive of the binaries for Windows and unpack the content to the folder "),o("code",[t._v("C:\\PX4\\toolchain\\gcc-arm")]),t._v(".")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This is what the toolchain does in: "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/gcc-arm/install-gcc-arm.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("gcc-arm/install-gcc-arm.bat"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("ol",[o("li",[t._v("Install the JDK:\n"),o("ul",[o("li",[t._v("Download Java 14 from "),o("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk14-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle"),o("OutboundLink")],1),t._v(" or "),o("a",{attrs:{href:"https://adoptopenjdk.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdoptOpenJDK"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v("Because sadly there is no portable archive containing the binaries directly you have to install it.")]),t._v(" "),o("li",[t._v("Find the binaries and move/copy them to "),o("strong",[t._v("C:\\PX4\\toolchain\\jdk")]),t._v(".")]),t._v(" "),o("li",[t._v("You can uninstall the Kit from your Windows system again, we only needed the binaries for the toolchain.")])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This is what the toolchain does in: "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/jdk/install-jdk.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("jdk/install-jdk.bat"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("ol",[o("li",[t._v("Download "),o("a",{attrs:{href:"https://ant.apache.org/bindownload.cgi",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("Apache Ant")]),o("OutboundLink")],1),t._v(" as zip archive of the binaries for Windows and unpack the content to the folder "),o("code",[t._v("C:\\PX4\\toolchain\\apache-ant")]),t._v(".")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Make sure you don't have an additional folder layer from the folder which is inside the downloaded archive.")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This is what the toolchain does in: "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/apache-ant/install-apache-ant.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("apache-ant/install-apache-ant.bat"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("ol",[o("li",[t._v("Download, build and add "),o("em",[t._v("genromfs")]),t._v(" to the path:\n"),o("ul",[o("li",[o("p",[t._v("Clone the source code to the folder "),o("strong",[t._v("C:\\PX4\\toolchain\\genromfs\\genromfs-src")]),t._v(" with")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd /c/toolchain/genromfs\ngit clone https://github.com/chexum/genromfs.git genromfs-src\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Compile it with:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd genromfs-src\nmake all\n")])])])])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("\n* Copy the resulting binary **genromfs.exe** one folder level out to: **C:\\PX4\\toolchain\\genromfs**\n\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This is what the toolchain does in: "),o("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/genromfs/install-genromfs.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("genromfs/install-genromfs.bat"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("ol",[o("li",[t._v("Make sure all the binary folders of all the installed components are correctly listed in the "),o("code",[t._v("PATH")]),t._v(" variable configured by "),o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("setup-environment.bat")]),o("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=n.exports}}]);