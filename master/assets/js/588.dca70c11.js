(window.webpackJsonp=window.webpackJsonp||[]).push([[588],{1996:function(t,a,s){"use strict";s.r(a);var e=s(18),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"fast-rtps-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fast-rtps-설치"}},[t._v("#")]),t._v(" Fast RTPS 설치")]),t._v(" "),e("p",[e("img",{staticStyle:{float:"left"},attrs:{alt:"logo",src:s(390)}}),t._v(" "),e("a",{attrs:{href:"http://eprosima-fast-rtps.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eProsima Fast RTPS"),e("OutboundLink")],1),t._v("는 RTPS(Real Time Publish Subscribe) 규약을 C++로 구현한 것으로 개체 관리 그룹(Object Management Group, OMG) 컨소시엄에 의해 정의되고 관리되는 UDP와 같은 신뢰성이 좋지 않은 전송을 통해 게시자-가입자간의 통신을 제공합니다. 또한 RTPS는 역시나 OMG에 의한 데이터 분배 서비스(Data Distribution Service, DDS)로 정의된 유선 상호 운용성 규약입니다.")]),t._v(" "),e("p",[t._v("Fast RTPS는 PX4에서 RTPS 인터페이스가 활성화되도록 사용되어 PX4 uORB 주제를 허용함으로서 로봇 공학 및 시뮬레이터 도구를 포함한 보드 이외의 구성 요소와 공유되도록 합니다. RTPS는 DDS의 기반 규약으로 우주항공, 군사, 그리고 IoT 활용에 널리 사용되는 실시간 게시/가입 미들웨어를 제공하는 OMG(Object Management Group)의 표준입니다. 또한 ROS2 로봇 공학 툴킷을 위한 미들웨어로서 채택되었습니다. 더 많은 정보는 "),e("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("RTPS/ROS2 인터페이스: PX4-FastRTPS 브릿지")]),t._v("를 보십시오.")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("For Ubuntu, at time of writing, you will need to install Fast-RTPS 1.8.2 "),e("em",[t._v("from source")]),t._v(".")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("This topic is derived from the official "),e("a",{attrs:{href:"http://eprosima-fast-rtps.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("eProsima Fast RTPS")]),t._v(" documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("For more information see:")]),t._v(" "),e("ul",[e("li",[t._v("소스로 설치\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/sources/sources_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/sources/sources_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("바이너리로 설치\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),e("OutboundLink")],1)])])])])]),t._v(" "),e("h2",{attrs:{id:"표준-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#표준-설치"}},[t._v("#")]),t._v(" 표준 설치")]),t._v(" "),e("p",[t._v("Github에서 프로젝트를 복사십시오.")]),t._v(" "),e("h3",{attrs:{id:"의존성-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#의존성-실행"}},[t._v("#")]),t._v(" 의존성 실행")]),t._v(" "),e("h4",{attrs:{id:"java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),e("p",[t._v("Java is required to use our built-in code generation tool - "),e("em",[t._v("fastrtpsgen")]),t._v(". "),e("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JDK 8"),e("OutboundLink")],1),t._v(" is recommended.")]),t._v(" "),e("h3",{attrs:{id:"windows-7-32-bit와-64-bit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-32-bit와-64-bit"}},[t._v("#")]),t._v(" Windows 7 32-bit와 64-bit")]),t._v(" "),e("h4",{attrs:{id:"visual-c-2013-또는-2015-재배포-가능-패키지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visual-c-2013-또는-2015-재배포-가능-패키지"}},[t._v("#")]),t._v(" Visual C ++ 2013 또는 2015 재배포 가능 패키지")]),t._v(" "),e("p",[t._v("이렇게하면 Fast RTPS가 "),e("code",[t._v("/usr/local")]),t._v("에 설치됩니다. "),e("code",[t._v("DCMAKE_INSTALL_PREFIX = <path>")]),t._v("를 사용하여 사용자 지정 위치에 설치할 수 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"요구사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#요구사항"}},[t._v("#")]),t._v(" 요구사항")]),t._v(" "),e("h3",{attrs:{id:"windows-7-32-bit-와-64-bit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-32-bit-와-64-bit"}},[t._v("#")]),t._v(" Windows 7 32-bit 와 64-bit")]),t._v(" "),e("p",[t._v("Linux를 사용하는 경우 다음을 실행하십시오.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/eProsima/Fast-RTPS\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" Fast-RTPS/build "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Fast-RTPS/build\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("You may need to "),e("a",{attrs:{href:"https://gradle.org/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("install Gradle"),e("OutboundLink")],1),t._v(" to build the source (e.g. this is true on vanilla Fedora Linux). A build warning will be displayed if this is the case.")])]),t._v(" "),e("p",[t._v("Windows 사용자 인 경우 다음 "),e("em",[t._v("Visual Studio")]),t._v(" 버전을 선택하십시오.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ cmake -DTHIRDPARTY"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DBUILD_JAVA"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[t._v("This will install Fast RTPS to "),e("code",[t._v("/usr/local")]),t._v(", with secure communications support. 그런 다음 "),e("code",[t._v("fastrtpsgen")]),t._v(" 응용 프로그램이 "),e("code",[t._v("PATH")]),t._v("에 있는지 확인하십시오.")]),t._v(" "),e("p",[t._v("성능 테스트를 컴파일하려면 "),e("em",[t._v("CMake")]),t._v("를 호출 할 때 "),e("code",[t._v("-DPERFORMANCE_TESTS = ON")]),t._v(" 인수를 추가해야합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" cmake -G "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visual Studio 14 2015 Win64"')]),t._v(" -DTHIRDPARTY"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DBUILD_JAVA"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" cmake --build "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --target "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("h4",{attrs:{id:"환경-변수"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#환경-변수"}},[t._v("#")]),t._v(" 환경 변수")]),t._v(" "),e("p",[e("em",[t._v("eProsima Fast RTPS")]),t._v("의 최신 바이너리 릴리즈는 "),e("a",{attrs:{href:"http://www.eprosima.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("회사 웹 사이트"),e("OutboundLink")],1),t._v("에서 항상 다운로드 할 수 있습니다.")]),t._v(" "),e("p",[t._v("이를 수행하는 방법에 대한 문서는 "),e("a",{attrs:{href:"http://eprosima-fast-rtps.readthedocs.io/en/latest/binaries.html#installation-from-binaries",target:"_blank",rel:"noopener noreferrer"}},[t._v("바이너리로 설치"),e("OutboundLink")],1),t._v("("),e("em",[t._v("eProsima Fast RTPS 공식 문서")]),t._v(")에서 찾을 수 있습니다")]),t._v(" "),e("h3",{attrs:{id:"fast-rtps-gen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fast-rtps-gen"}},[t._v("#")]),t._v(" Fast-RTPS-Gen")]),t._v(" "),e("p",[e("em",[t._v("Fast-RTPS-Gen")]),t._v(" is the Fast RTPS IDL code generator tool. It should be installed after Fast RTPS and made sure the "),e("code",[t._v("fastrtpsgen")]),t._v(" application is in your "),e("code",[t._v("PATH")]),t._v(". You can check with "),e("code",[t._v("which fastrtpsgen")]),t._v(".")]),t._v(" "),e("p",[e("em",[t._v("eProsima Fast RTPS")]),t._v("는 제대로 작동하려면 다음 환경 변수 설정이 필요합니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone --recursive https://github.com/eProsima/Fast-RTPS-Gen.git -b v1.0.4 ~/Fast-RTPS-Gen \\\n    && cd ~/Fast-RTPS-Gen \\\n    && ./gradlew assemble \\\n    && sudo ./gradlew install\n")])])]),e("h2",{attrs:{id:"소스로-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#소스로-설치"}},[t._v("#")]),t._v(" 소스로 설치")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("Although the binaries are available, we recommend to build and install the code from source, given that the binaries may not come with required components and dependencies in place.")])]),t._v(" "),e("p",[t._v("You can always download the latest binary release of "),e("em",[t._v("eProsima Fast RTPS")]),t._v(" from the "),e("a",{attrs:{href:"http://www.eprosima.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("company website"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("컴파일을 구성합니다.")]),t._v(" "),e("h3",{attrs:{id:"windows-7-32-bit-and-64-bit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-32-bit-and-64-bit"}},[t._v("#")]),t._v(" Windows 7 32-bit and 64-bit")]),t._v(" "),e("p",[t._v("디버그 기호로 컴파일하려면 다음과 같이하십시오(verbose mode도 활성화됨).")]),t._v(" "),e("h4",{attrs:{id:"environmental-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environmental-variables"}},[t._v("#")]),t._v(" Environmental Variables")]),t._v(" "),e("p",[t._v("프로젝트를 구성한 후 라이브러리를 컴파일하고 설치하십시오.")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/setup/dev_env_mac.html"}},[t._v("Mac에서의 개발 환경")]),t._v(" (Fast RTPS는 공통 도구에 포함되어 있음.)")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/setup/dev_env_linux.html"}},[t._v("리눅스에서의 개발 환경")]),t._v(" (Fast RTPS는 설치 스크립트에 포함되어 있음)")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/setup/dev_env_windows.html#bash-on-windows-new"}},[t._v("Windows > Windows의 Bash에서의 개발 환경")]),t._v(" (Fast RTPS는 설치 스크립트에 포함되어 있음.)")],1)]),t._v(" "),e("p",[t._v("These variables are set automatically by checking the corresponding box during the installation process.")]),t._v(" "),e("h3",{attrs:{id:"linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),e("p",[t._v("Extract the contents of the package. It will contain both "),e("em",[t._v("eProsima Fast RTPS")]),t._v(" and its required package "),e("em",[t._v("eProsima Fast CDR")]),t._v(". You will have follow the same procedure for both packages, starting with "),e("em",[t._v("Fast CDR")]),t._v(".")]),t._v(" "),e("p",[t._v("Configure the compilation:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ ./configure --libdir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/lib\n")])])]),e("p",[t._v("If you want to compile with debug symbols (which also enables verbose mode):")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ ./configure "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CXXFLAGS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-g -D__DEBUG"')]),t._v("  --libdir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/lib\n")])])]),e("p",[t._v("After configuring the project compile and install the library:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("h4",{attrs:{id:"environmental-variables-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environmental-variables-2"}},[t._v("#")]),t._v(" Environmental Variables")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("FASTRTPSHOME")]),t._v(": "),e("em",[t._v("eProsima Fast RTPS")]),t._v("가 설치된 루트 폴더. If the user sets a different install directory in the "),e("code",[t._v("gradle install")]),t._v(" step, it must set it here as well.")])])])}),[],!1,null,null,null);a.default=r.exports},390:function(t,a){t.exports="data:image/png;base64,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"}}]);