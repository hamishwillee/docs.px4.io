(window.webpackJsonp=window.webpackJsonp||[]).push([[649],{2319:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"fast-dds-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fast-dds-설치"}},[t._v("#")]),t._v(" Fast DDS 설치")]),t._v(" "),e("p",[e("img",{staticStyle:{float:"left"},attrs:{alt:"로고",src:s(407)}}),t._v(" "),e("a",{attrs:{href:"https://github.com/eProsima/Fast-DDS",target:"_blank",rel:"noopener noreferrer"}},[t._v("eProsima Fast DDS"),e("OutboundLink")],1),t._v("는 OMG(Object Management Group) DDS(Data Distribution Service) 사양 및 RTPS(Real Time Publish Subscribe) 프로토콜의 C++ 구현입니다.")]),t._v(" "),e("p",[t._v("Fast DDS는 PX4 uORB 주제가 동일한 DDS 도메인에 참여하는 로봇 공학 및 시뮬레이터 도구를 포함한 오프보드 구성 요소와 공유될 수 있도록 하는 RTPS/DDS 인터페이스를 활성화합니다. 특히 Fast DDS는 Robot Operating System 2(ROS 2)의 기본 미들웨어 구현이며 PX4와 ROS2를 통합에 필수적입니다.")]),t._v(" "),e("p",[t._v("이 항목에서는 PX4와 함께 사용하기 위한 Fast DDS를 설치 방법을 설명합니다.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Fast DDS는 PX4 Autopilot의 필수 구성 요소가 아니며, ROS 2와 같은 다른 Fast RTPS/DDS 시스템과 함께 PX4 Autopilot을 사용할 계획인 경우에만 설치 합니다. This means you just need to install "),e("em",[t._v("Fast-RTPS-Gen")]),t._v(" and have your ROS 2 environment sourced ("),e("code",[t._v("source /opt/ros/<distro>/setup.bash")]),t._v(") in order to be able to compile the "),e("code",[t._v("rtps")]),t._v(" targets in the PX4-Autopilot repo.")]),t._v(" "),e("p",[t._v("For "),e("em",[t._v("ROS2 Galactic and above")]),t._v(", one has to install the "),e("code",[t._v("rmw")]),t._v(" implementation through "),e("code",[t._v("apt")]),t._v(" using "),e("code",[t._v("apt install ros-galactic-rmw-fastrtps")]),t._v(", since the default middleware for Galactic and above is CycloneDDS and the FastDDS middleware doesn't come installed by default.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Fast DDS is not an essential component of the PX4 Autopilot and should only be installed if you plan to interface the PX4 Autopilot with Fast RTPS/DDS participants. ROS 2 nodes are an example of these, though Fast DDS middleware and C++ implementations are installed by default on ROS 2 Foxy and below, as mentioned above.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("Fast DDS was previously named FastRTPS (the name was changed in version 2.0.0 as it now includes a full DDS implementation, rather than just the RTPS wire protocol).")])]),t._v(" "),e("h2",{attrs:{id:"준비-사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#준비-사항"}},[t._v("#")]),t._v(" 준비 사항")]),t._v(" "),e("p",[e("em",[t._v("eProsima Fast DDS")]),t._v(" requires the following packages to work.")]),t._v(" "),e("p",[t._v("또한 소스 생성기(Fast-RTPS-Gen)를 빌드하려면 "),e("a",{attrs:{href:"https://gradle.org/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gradle을 설치"),e("OutboundLink")],1),t._v("하여야 합니다. "),e("a",{attrs:{href:"https://sdkman.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("sdkman"),e("OutboundLink")],1),t._v("을 통하여 Gradle을 설치하는 것이 좋습니다.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Ubuntu 18.04:")]),t._v(" Fast RTPS 1.8.2(또는 그 이상) 및 Fast-RTPS-Gen 1.0.4(이후는 아님!)")]),t._v(" "),e("li",[e("strong",[t._v("Ubuntu 20.04:")]),t._v(" Fast DDS 2.0.0(또는 그 이상) 및 Fast-RTPS-Gen 1.0.4(이후는 아님!)\n:::")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Remember (again) you only need to install Fast DDS if you are not using ROS 2 and just want to leverage non-ROS2 DDS networks and applications. If you have ROS 2 installed (and "),e("code",[t._v("rmw-fasrtps")]),t._v(" as its default middleware), you can skip to "),e("a",{attrs:{href:"#fast-rtps-gen"}},[t._v("Fast-RTPS-Gen build and install")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),e("p",[t._v("Java is required to build and use eProsima's RTPS/DDS from IDL code generation tool - "),e("em",[t._v("Fast-RTPS-Gen")]),t._v(". "),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk11-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JDK 11"),e("OutboundLink")],1),t._v(" is recommended, and it is installed through the setup scripts made available in "),e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux.html"}},[t._v("Ubuntu Development Environment")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"gradle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gradle"}},[t._v("#")]),t._v(" Gradle")]),t._v(" "),e("p",[e("em",[t._v("eProsima Fast DDS")]),t._v("를 사용하려면 설치 또는 컴파일 중에 선택한 Visual Studio 버전용 Visual C++ 재배포 가능 패키지가 필요합니다. 설치 프로그램은 다운로드 및 설치 옵션을 제공합니다.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Do not install Gradle version 7 or higher. The recommended version is 6.3.")])]),t._v(" "),e("h3",{attrs:{id:"foonathan-메모리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#foonathan-메모리"}},[t._v("#")]),t._v(" Foonathan 메모리")]),t._v(" "),e("p",[t._v("Linux에서는 다음 명령어들을 실행하십시오.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/eProsima/foonathan_memory_vendor.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" foonathan_memory_vendor\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\ncmake "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\ncmake --build "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --target "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[t._v("이렇게 하면 보안 통신 지원과 함께 Fast DDS가 "),e("code",[t._v("/usr/local")]),t._v("에 설치됩니다. 사용자 지정 위치에 설치해야 하는 경우 "),e("code",[t._v("-DCMAKE_INSTALL_PREFIX=<path>")]),t._v("을 사용할 수 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"소스-코드로-설치하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#소스-코드로-설치하기"}},[t._v("#")]),t._v(" 소스 코드로 설치하기")]),t._v(" "),e("h3",{attrs:{id:"windows-7-32-비트와-64-비트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-32-비트와-64-비트"}},[t._v("#")]),t._v(" Windows 7 32 비트와 64 비트")]),t._v(" "),e("p",[t._v("Windows를 사용하는 경우 "),e("em",[t._v("Visual Studio")]),t._v(" 버전을 선택합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/eProsima/Fast-DDS.git -b v2.0.0 ~/FastDDS-2.0.0\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/FastDDS-2.0.0\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\n")])])]),e("p",[e("em",[t._v("CMake")]),t._v("를 호출시, 다음 추가 인수를 사용할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ cmake -DTHIRDPARTY"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DSECURITY"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -j"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("nproc --all"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[e("em",[t._v("Fast-RTPS-Gen")]),t._v("은 Fast RTPS(DDS) IDL 코드 생성기입니다. If you need to install to a custom location you can use: "),e("code",[t._v("-DCMAKE_INSTALL_PREFIX=<path>")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"visual-c-2013-또는-2015-재배포-가능-패키지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visual-c-2013-또는-2015-재배포-가능-패키지"}},[t._v("#")]),t._v(" Visual C ++ 2013 또는 2015 재배포 가능 패키지")]),t._v(" "),e("p",[t._v("그런 다음 Fast-RTPS-Gen 1.0.4를 설치합니다(이를 위해서는 Gradle이 필요합니다).")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("-DCOMPILE_EXAMPLES=ON")]),t._v(": 예제 컴파일")]),t._v(" "),e("li",[e("code",[t._v("-DPERFORMANCE_TESTS=ON")]),t._v(": 성능 테스트 컴파일")])]),t._v(" "),e("h3",{attrs:{id:"fast-rtps-dds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fast-rtps-dds"}},[t._v("#")]),t._v(" Fast-RTPS (DDS)")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("바이너리를 사용할 수 있지만, 바이너리가 필수 구성 요소 및 종속성과 함께 제공되지 않을 수 있으므로, 소스를 빌드하고 설치하는 것이 좋습니다. It should be installed after Fast RTPS (DDS) and made sure the "),e("code",[t._v("fastrtpsgen")]),t._v(" application is in your "),e("code",[t._v("PATH")]),t._v(". You can check with "),e("code",[t._v("which fastrtpsgen")]),t._v(".")]),t._v(" "),e("p",[e("em",[t._v("eProsima Fast DDS")]),t._v("의 최신 바이너리 릴리스는 "),e("a",{attrs:{href:"http://www.eprosima.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("회사 웹사이트"),e("OutboundLink")],1),t._v("에서 다운로드할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git clone --recursive https://github.com/eProsima/Fast-DDS-Gen.git -b v1.0.4 ~/Fast-RTPS-Gen \\\n    && cd ~/Fast-RTPS-Gen \\\n    && gradle assemble \\\n    && sudo env "PATH=$PATH" gradle install\n')])])]),e("h2",{attrs:{id:"바이너리로-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#바이너리로-설치"}},[t._v("#")]),t._v(" 바이너리로 설치")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("Although the binaries are available, we recommend to build and install the code from source, given that the binaries may not come with required components and dependencies in place.")])])]),t._v(" "),e("p",[t._v("설치 프로그램을 실행하고 지침에 따라 메시지가 표시되면, 원하는 "),e("em",[t._v("Visual Studio")]),t._v(" 버전과 아키텍처를 선택합니다.")]),t._v(" "),e("p",[e("em",[t._v("eProsima Fast DDS")]),t._v("가 제대로 작동하려면, 다음과 같은 환경 변수 설정이 필요합니다.")]),t._v(" "),e("h4",{attrs:{id:"컴파일-옵션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#컴파일-옵션"}},[t._v("#")]),t._v(" 컴파일 옵션")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("FASTRTPSGEN_DIR")]),t._v(": Root folder where "),e("em",[t._v("eProsima Fast-RTPS-Gen")]),t._v(" is installed, usually set to "),e("code",[t._v("/usr/local")]),t._v(", which is the default installation directory. If the user sets a different install directory in the "),e("code",[t._v("gradle install")]),t._v(" step, it must set this variable to that same directory as well. Otherwise, the code generation step, and consequently, the build of the "),e("code",[t._v("rtps")]),t._v(" targets in PX4 will fail.")])]),t._v(" "),e("h2",{attrs:{id:"추가-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),e("ul",[e("li",[e("p",[e("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("RTPS/DDS Interface: PX4-Fast RTPS(DDS) Bridge")])],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html"}},[t._v("PX4-ROS 2 bridge")])],1)]),t._v(" "),e("li",[e("p",[t._v("Additional installation information can be found in the official "),e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("eProsima Fast DDS")]),t._v(" documentation"),e("OutboundLink")],1),t._v(" (from which this topic is derived):")]),t._v(" "),e("ul",[e("li",[t._v("Installation from Sources\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/sources/sources_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/sources/sources_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("Installation from Binaries\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),e("OutboundLink")],1)])])])])])])])}),[],!1,null,null,null);a.default=n.exports},407:function(t,a){t.exports="data:image/png;base64,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"}}]);