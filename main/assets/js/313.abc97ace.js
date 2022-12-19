(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{2546:function(t,a,e){"use strict";e.r(a);var s=e(19),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"px4-소프트웨어-빌드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-소프트웨어-빌드"}},[t._v("#")]),t._v(" PX4 소프트웨어 빌드")]),t._v(" "),s("p",[t._v("PX4는 시뮬레이션 대상과 하드웨어 대상을 콘솔이나 IDE에서 구축할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("이 지침을 따르기 전에 먼저 호스트 운영 체제와 대상 하드웨어에 대한 "),s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("개발자 도구 모음")]),t._v("을 설치하여야 합니다. 이 저장소를 Github 계정과 연결된 복사본을 "),s("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("만들어"),s("OutboundLink")],1),t._v(", 이 원본을 로컬 컴퓨터에 "),s("a",{attrs:{href:"https://help.github.com/articles/cloning-a-repository/",target:"_blank",rel:"noopener noreferrer"}},[t._v("복제"),s("OutboundLink")],1),t._v("하는 것이 좋습니다.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("일반적인 빌드 문제에 대한 해결 방법은 아래 "),s("a",{attrs:{href:"#troubleshooting"}},[t._v("문제 해결")]),t._v("을 참고하십시오.")])])]),t._v(" "),s("h2",{attrs:{id:"px4-소스-코드-다운로드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-소스-코드-다운로드"}},[t._v("#")]),t._v(" PX4 소스 코드 다운로드")]),t._v(" "),s("p",[t._v("PX4 소스 코드는 Github의 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Autopilot"),s("OutboundLink")],1),t._v(" 저장소에 저장되어 있습니다.")]),t._v(" "),s("p",[t._v("To get the "),s("em",[t._v("very latest")]),t._v(' ("main") version onto your computer, enter the following command into a terminal:')]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("이것이 최신 코드를 빌드하기 위해 필요합니다. If needed you can also "),s("RouterLink",{attrs:{to:"/ko/contribute/git_examples.html#get-a-specific-release"}},[t._v("get the source code specific to a particular release")]),t._v(". "),s("RouterLink",{attrs:{to:"/ko/contribute/git_examples.html"}},[t._v("GIT Examples")]),t._v(" provides a lot more information working with releases and contributing to PX4.")],1)]),t._v(" "),s("h2",{attrs:{id:"최초-빌드-jmavsim-시뮬레이션-활용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#최초-빌드-jmavsim-시뮬레이션-활용"}},[t._v("#")]),t._v(" 최초 빌드 (jMAVSim 시뮬레이션 활용)")]),t._v(" "),s("p",[t._v("먼저 콘솔 환경에서 시뮬레이션 대상을 빌드합니다. 이를 통하여 실제 하드웨어와 IDE로 사용전에 시스템 설정을 검증할 수 있습니다.")]),t._v(" "),s("p",[s("strong",[t._v("PX4-Autopilot")]),t._v(" 디렉토리로 이동하여, 다음 명령을 사용하여 "),s("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v("을 시작합니다.")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),s("p",[t._v("그러면, 아래와 같은 PX4 콘솔이 나타납니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(768),alt:"PX4 콘솔 (jMAVSim)"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("You may need to start "),s("em",[t._v("QGroundControl")]),t._v(" before proceeding, as the default PX4 configuration requires a ground control connection before takeoff. This can be "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("downloaded from here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("The drone can be flown by typing:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("pxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commander takeoff\n")])])]),s("p",[s("img",{attrs:{src:e(769),alt:"jMAVSim UI"}})]),t._v(" "),s("p",[t._v("The drone can be landed by typing "),s("code",[t._v("commander land")]),t._v(" and the whole simulation can be stopped by doing "),s("strong",[t._v("CTRL+C")]),t._v(" (or by entering "),s("code",[t._v("shutdown")]),t._v(").")]),t._v(" "),s("p",[t._v("Flying the simulation with the ground control station is closer to the real operation of the vehicle. Click on a location in the map while the vehicle is flying (takeoff flight mode) and enable the slider. This will reposition the vehicle.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(388),alt:"QGroundControl GoTo"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4 can be used with a number of other [Simulators](../simulation/README.md), including [Gazebo Simulation](../simulation/gazebo.md) and [AirSim Simulation](../simulation/airsim.md). These are also started with *make* - e.g.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make px4_sitl gazebo\n")])])]),s("p",[t._v("NuttX 또는 Pixhawk 기반 보드용으로 빌드하려면, "),s("strong",[t._v("PX4-Autopilot")]),t._v(" 디렉토리로 이동한 다음 보드용 빌드 타겟으로 "),s("code",[t._v("make")]),t._v("를 호출하십시오.")]),t._v(" "),s("h2",{attrs:{id:"nuttx-pixhawk-기반-보드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuttx-pixhawk-기반-보드"}},[t._v("#")]),t._v(" NuttX/Pixhawk 기반 보드")]),t._v(" "),s("h3",{attrs:{id:"nuttx용-빌드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuttx용-빌드"}},[t._v("#")]),t._v(" NuttX용 빌드")]),t._v(" "),s("p",[t._v("예를 들어, "),s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" 하드웨어용으로 빌드하려면 다음 명령을 사용할 수 있습니다.")],1),t._v(" "),s("p",[t._v("성공적인 실행은 다음과 유사한 출력으로 종료됩니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v4_default\n")])])]),s("p",[t._v("A successful run will end with similar output to:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("-- 빌드 파일은 /home/youruser/src/PX4-Autopilot/build/px4_fmu-v4_default에 작성되었습니다.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("954")]),t._v("/954"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating /home/youruser/src/PX4-Autopilot/build/px4_fmu-v4_default/px4_fmu-v4_default.px4\n")])])]),s("p",[t._v("The first part of the build target "),s("code",[t._v("px4_fmu-v4")]),t._v(" indicates the firmware for a particular flight controller hardware. The following list shows the build commands for the "),s("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("Pixhawk standard")]),t._v(" boards:")],1),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk6x.html"}},[t._v("Holybro Pixhawk 6X (FMUv6X)")]),t._v(": "),s("code",[t._v("make px4_fmu-v6x_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk6c.html"}},[t._v("Holybro Pixhawk 6C (FMUv6C)")]),t._v(": "),s("code",[t._v("make px4_fmu-v6c_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v6.html"}},[t._v("Holybro Pix32 v6 (FMUv6C)")]),t._v(": "),s("code",[t._v("make px4_fmu-v6c_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk5x.html"}},[t._v("Holybro Pixhawk 5X (FMUv5X)")]),t._v(": "),s("code",[t._v("make px4_fmu-v5x_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4 (FMUv5)")]),t._v(": "),s("code",[t._v("make px4_fmu-v5_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini (FMUv5)")]),t._v(": "),s("code",[t._v("make px4_fmu-v5_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_plus.html"}},[t._v("CUAV V5+ (FMUv5)")]),t._v(": "),s("code",[t._v("make px4_fmu-v5_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html"}},[t._v("CUAV V5 nano (FMUv5)")]),t._v(": "),s("code",[t._v("make px4_fmu-v5_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixracer.html"}},[t._v("Pixracer (FMUv4)")]),t._v(": "),s("code",[t._v("make px4_fmu-v4_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")]),t._v(": "),s("code",[t._v("make px4_fmu-v4pro_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_mini.html"}},[t._v("Pixhawk Mini")]),t._v(": "),s("code",[t._v("make px4_fmu-v3_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html"}},[t._v("Pixhawk 2 (Cube Black) (FMUv3)")]),t._v(": "),s("code",[t._v("make px4_fmu-v3_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk (FMUv3)")]),t._v(": "),s("code",[t._v("make px4_fmu-v3_default")]),t._v(" (supports 2MB Flash)")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32.html"}},[t._v("Holybro pix32 (FMUv2)")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixfalcon.html"}},[t._v("Pixfalcon (FMUv2)")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/dropix.html"}},[t._v("Dropix (FMUv2)")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1 (FMUv2)")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")]),t._v(" :::warning You "),s("strong",[t._v("must")]),t._v(" use a supported version of GCC to build this board (e.g. the same as used by "),s("RouterLink",{attrs:{to:"/ko/test_and_ci/docker.html"}},[t._v("CI/docker")]),t._v(") or remove modules from the build. PX4가 보드의 1MB 플래시 제한에 가깝기 때문에, 지원되지 않는 GCC로 빌드가 실패할 수 있습니다. 이 저장소를 Github 계정과 연결된 복사본을 "),s("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("만들어"),s("OutboundLink")],1),t._v(", 이 원본을 로컬 컴퓨터에 "),s("a",{attrs:{href:"https://help.github.com/articles/cloning-a-repository/",target:"_blank",rel:"noopener noreferrer"}},[t._v("복제"),s("OutboundLink")],1),t._v("하는 것이 좋습니다.")],1),t._v(" "),s("li",[t._v("2MB 플래시가 있는 Pixhawk 1: "),s("code",[t._v("make px4_fmu-v3_default")])])]),t._v(" "),s("p",[t._v("Build commands for non-Pixhawk NuttX fight controllers (and for all other-boards) are provided in the documentation for the individual "),s("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("flight controller boards")]),t._v(".")],1),t._v(" "),s("p",[t._v("USB로 자동조종장치에 컴파일된 바이너리를 업로드하려면 make "),s("code",[t._v("upload")]),t._v(" 명령어를 사용하십시오. Make sure you can connect to your RPi over ssh, see "),s("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/raspberry_pi_navio2.html#developer-quick-start",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions how to access your RPi"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"펌웨어-업로드-보드-플래싱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-업로드-보드-플래싱"}},[t._v("#")]),t._v(" 펌웨어 업로드 (보드 플래싱)")]),t._v(" "),s("p",[t._v("Append "),s("code",[t._v("upload")]),t._v(" to the make commands to upload the compiled binary to the autopilot hardware via USB. For example")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v4_default upload\n")])])]),s("p",[t._v("다른 보드에 대한 빌드 명령어 정보는 "),s("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("보드별 비행 콘트롤러 페이지")]),t._v("에서 제공됩니다(일반적으로 "),s("em",[t._v("펌웨어 빌드")]),t._v(" 제목 아래).")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("Erase  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),t._v("%\nProgram: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),t._v("%\nVerify "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),t._v("%\nRebooting.\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Built target upload\n")])])]),s("h2",{attrs:{id:"기타-보드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기타-보드"}},[t._v("#")]),t._v(" 기타 보드")]),t._v(" "),s("p",[t._v("다음 명령어는 모든 빌드 대상을 나열합니다.")]),t._v(" "),s("p",[t._v("You can also list all configuration targets using the command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" list_config_targets\n")])])]),s("h2",{attrs:{id:"그래픽-ide에서의-컴파일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#그래픽-ide에서의-컴파일"}},[t._v("#")]),t._v(" 그래픽 IDE에서의 컴파일")]),t._v(" "),s("p",[t._v("많은 빌드 문제는 일치하지 않는 하위 모듈이나 불완전하게 정리된 빌드 환경으로 인하여 발생합니다. 하위 모듈을 업데이트하고 "),s("code",[t._v("distclean")]),t._v("을 수행하면 이 오류를 수정할 수 있습니다:")]),t._v(" "),s("h2",{attrs:{id:"문제-해결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),s("h3",{attrs:{id:"일반-빌드-오류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#일반-빌드-오류"}},[t._v("#")]),t._v(" 일반 빌드 오류")]),t._v(" "),s("p",[s("code",[t._v("XXXX바이트로 오버플로된 영역 '플래시'")]),t._v(" 오류는 펌웨어가 대상 하드웨어 플랫폼에 비해 너무 크다는 것을 나타냅니다. 이는 플래시 크기가 1MB로 제한되는 "),s("code",[t._v("make px4_fmu-v2_default")]),t._v(" 빌드에서 나타납니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git submodule update --recursive\nmake distclean\n")])])]),s("h3",{attrs:{id:"flash-overflowed-by-xxx-bytes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flash-overflowed-by-xxx-bytes"}},[t._v("#")]),t._v(" Flash overflowed by XXX bytes")]),t._v(" "),s("p",[s("em",[t._v("vanilla")]),t._v(" 마스터 브랜치를 구축하는 경우, 가장 큰 원인은 지원되지 않는 GCC 버전을 사용하기 때문입니다. 이 경우, "),s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("개발자 도구 모음")]),t._v(" 지침에 지정된 버전을 설치하십시오.")],1),t._v(" "),s("p",[t._v("자체 브랜치를 구축하는 경우, 펌웨어 크기를 1MB 제한 이상으로 늘렸을 수 있습니다. 이 경우 빌드에서 필요하지 않은 드라이버 모듈을 제거하여야 합니다.")]),t._v(" "),s("p",[t._v("MacOS는 실행 중인 모든 프로세스에서 기본적으로 최대 256개의 열린 파일을 허용합니다. PX4 빌드 시스템은 많은 수의 파일을 오픈하므로, 이 갯수를 초과할 수 있습니다.")]),t._v(" "),s("h3",{attrs:{id:"macos-열린-파일이-너무-많음-오류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-열린-파일이-너무-많음-오류"}},[t._v("#")]),t._v(" macOS: 열린 파일이 너무 많음 오류")]),t._v(" "),s("p",[t._v("MacOS allows a default maximum of 256 open files in all running processes. The PX4 build system opens a large number of files, so you may exceed this number.")]),t._v(" "),s("p",[t._v("The build toolchain will then report "),s("code",[t._v("Too many open files")]),t._v(" for many files, as shown below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("/usr/local/Cellar/gcc-arm-none-eabi/20171218/bin/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/lib/gcc/arm-none-eabi/7.2.1/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/arm-none-eabi/bin/ld: cannot "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" NuttX/nuttx/fs/libfs.a: Too many "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" files\n")])])]),s("p",[t._v("macOS Catalina 10.15.1부터 "),s("em",[t._v("cmake")]),t._v("로 시뮬레이터를 빌드시 문제가 발생할 수 있습니다. 이 플랫폼에서 빌드 문제가 발생하면, 터미널에서 다음 명령을 실행하십시오:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/mac_set_ulimit.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tools/mac_set_ulimit.sh"),s("OutboundLink")],1),t._v(" 스크립트를 실행하거나,")]),t._v(" "),s("li",[t._v("다음 명령어를 실행하십시오."),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" -S -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"macos-catalina-cmake-실행-문제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-catalina-cmake-실행-문제"}},[t._v("#")]),t._v(" macOS Catalina: cmake 실행 문제")]),t._v(" "),s("p",[s("code",[t._v("arm_none_eabi_gcc")]),t._v("와 관련된 빌드 문제는 손상된 g++ 도구 모음 설치로 인한 것일 수 있습니다. 다음을 사용하여 누락된 종속성을 확인하여 이러한 경우인지 확인할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("xcode-select --install\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/* /usr/local/include/\n")])])]),s("h3",{attrs:{id:"ubuntu-18-04-arm-none-eabi-gcc와-관련된-컴파일-오류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-arm-none-eabi-gcc와-관련된-컴파일-오류"}},[t._v("#")]),t._v(" Ubuntu 18.04: arm_none_eabi_gcc와 관련된 컴파일 오류")]),t._v(" "),s("p",[t._v("Build issues related to "),s("code",[t._v("arm_none_eabi_gcc")]),t._v("may be due to a broken g++ toolchain installation. You can verify that this is the case by checking for missing dependencies using:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("arm-none-eabi-gcc --version\narm-none-eabi-g++ --version\narm-none-eabi-gdb --version\narm-none-eabi-size --version\n")])])]),s("p",[t._v("이 문제는 "),s("a",{attrs:{href:"https://askubuntu.com/questions/1243252/how-to-install-arm-none-eabi-gdb-on-ubuntu-20-04-lts-focal-fossa",target:"_blank",rel:"noopener noreferrer"}},[t._v("컴파일러를 제거하고 다시 설치"),s("OutboundLink")],1),t._v("하여 해결할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("arm-none-eabi-gdb --version\narm-none-eabi-gdb: "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" not found\n")])])]),s("p",[s("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html#troubleshooting"}},[t._v("Visual Studio Code IDE(VSCode) > 문제 해결")]),t._v("을 참고하십시오.")],1),t._v(" "),s("h3",{attrs:{id:"ubuntu-18-04-visual-studio-code는-이-큰-작업-영역에서-파일-변경-사항을-감시할-수-없습니다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-visual-studio-code는-이-큰-작업-영역에서-파일-변경-사항을-감시할-수-없습니다"}},[t._v("#")]),t._v(" Ubuntu 18.04: Visual Studio Code는 이 큰 작업 영역에서 파일 변경 사항을 감시할 수 없습니다.")]),t._v(" "),s("p",[s("code",[t._v("make px4_sitl jmavsim")]),t._v(' 명령을 실행시, "가져오기 실패" 오류는 일부 Python 패키지가 설치되지 않았음을 나타냅니다(예상된 위치).')]),t._v(" "),s("h3",{attrs:{id:"python-패키지를-가져오지-못했습니다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-패키지를-가져오지-못했습니다"}},[t._v("#")]),t._v(" Python 패키지를 가져오지 못했습니다.")]),t._v(" "),s("p",[t._v("이러한 종속성을 이미 설치했다면 컴퓨터에 두 개 이상의 Python 버전이 있고(예: Python 2.7.16 Python 3.8.3) 빌드 툴체인에서 사용하는 버전에 모듈이 없는 문제일 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Failed to import jinja2: No module named 'jinja2'\nYou may need to install it using:\n    pip3 install --user jinja2\n")])])]),s("p",[t._v("다음과 같이 종속성을 명시적으로 설치하여, 이 문제를 해결할 수 있습니다.")]),t._v(" "),s("p",[t._v("You should be able to fix this by explicitly installing the dependencies as shown:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pip3 install --user pyserial empty toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n")])])]),s("h2",{attrs:{id:"px4-빌드-타겟-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-빌드-타겟-만들기"}},[t._v("#")]),t._v(" PX4 빌드 타겟 만들기")]),t._v(" "),s("p",[t._v("The previous sections showed how you can call "),s("em",[t._v("make")]),t._v(" to build a number of different targets, start simulators, use IDEs etc. This section shows how "),s("em",[t._v("make")]),t._v(" options are constructed and how to find the available choices.")]),t._v(" "),s("p",[s("strong",[t._v("VENDOR_MODEL_VARIANT")]),t._v(": ("),s("code",[t._v("CONFIGURATION_TARGET")]),t._v("이라고도 함)")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("VENDOR_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MODEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_VARIANT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("VIEWER_MODEL_DEBUGGER_WORLD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("VENDOR_MODEL_VARIANT")]),t._v(": (also known as "),s("code",[t._v("CONFIGURATION_TARGET")]),t._v(")")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("공급업체:")]),t._v(" 보드 제조업체: "),s("code",[t._v("px4")]),t._v(", "),s("code",[t._v("aerotenna")]),t._v(", "),s("code",[t._v("airmind")]),t._v(", "),s("code",[t._v("atlflight")]),t._v(" , "),s("code",[t._v("auav")]),t._v(", "),s("code",[t._v("beaglebone")]),t._v(", "),s("code",[t._v("intel")]),t._v(", "),s("code",[t._v("nxp")]),t._v(" 등 Pixhawk 시리즈 보드의 공급업체 이름은 "),s("code",[t._v("px4")]),t._v("입니다.")]),t._v(" "),s("li",[s("strong",[t._v("모델:")]),t._v(" "),s("em",[t._v("보드 모델")]),t._v(' "모델": '),s("code",[t._v("sitl")]),t._v(", "),s("code",[t._v("fmu-v2")]),t._v(", "),s("code",[t._v("fmu-v3< /2>, <code>fmu-v4")]),t._v(", "),s("code",[t._v("fmu-v5")]),t._v(", "),s("code",[t._v("navio2")]),t._v(" 등")]),t._v(" "),s("li",[s("strong",[t._v("변종:")]),t._v(" 특정 구성을 나타냅니다. 예: "),s("code",[t._v("rtps")]),t._v(", "),s("code",[t._v("lpe")]),t._v(", "),s("code",[t._v("기본")]),t._v(" 구성에 없는 구성요소를 포함합니다. 가장 일반적으로 이것은 "),s("code",[t._v("기본값")]),t._v("이며 생략 가능합니다.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can get a list of "),s("em",[t._v("all")]),t._v(" available "),s("code",[t._v("CONFIGURATION_TARGET")]),t._v(" options using the command below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" list_config_targets\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("VIEWER_MODEL_DEBUGGER_WORLD:")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("VIEWER:")]),t._v(" 이것은 "),s("code",[t._v("gazebo")]),t._v(", "),s("code",[t._v("jmavsim")]),t._v(", "),s("code",[t._v("none")]),t._v('을 실행하고 연결할 시뮬레이터("뷰어")입니다. ')])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("none")]),t._v("은 PX4를 시작하고 시뮬레이터(jmavsim, 전망대 또는 기타 시뮬레이터)를 기다리면, 사용할 수 있습니다. 예를 들어, "),s("code",[t._v("make px4_sitl none_iris")]),t._v("는 시뮬레이터 없이(그러나 홍채 기체가 있는) PX4를 시작합니다. 이 저장소를 Github 계정과 연결된 복사본을 "),s("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("만들어"),s("OutboundLink")],1),t._v(", 이 원본을 로컬 컴퓨터에 "),s("a",{attrs:{href:"https://help.github.com/articles/cloning-a-repository/",target:"_blank",rel:"noopener noreferrer"}},[t._v("복제"),s("OutboundLink")],1),t._v("하는 것이 좋습니다.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("모델:")]),t._v(" 사용할 "),s("em",[t._v("기체")]),t._v(" 모델(예: "),s("code",[t._v("iris")]),t._v("("),s("em",[t._v("기본")]),t._v("), "),s("code",[t._v("rover")]),t._v(" , "),s("code",[t._v("tailsitter")]),t._v(" 등), 시뮬레이터에 의해 로드됩니다. 환경 변수 "),s("code",[t._v("PX4_SIM_MODEL")]),t._v("은 선택한 모델로 설정되며, 이 모델은 "),s("RouterLink",{attrs:{to:"/ko/simulation/#startup-scripts"}},[t._v("시작 스크립트")]),t._v("에서 적절한 매개변수 선택합니다.")],1),t._v(" "),s("li",[s("strong",[t._v("디버거:")]),t._v(" 사용할 디버거: "),s("code",[t._v("없음")]),t._v("("),s("em",[t._v("기본")]),t._v("), "),s("code",[t._v("ide")]),t._v(", "),s("code",[t._v("gdb")]),t._v(", "),s("code",[t._v("lldb")]),t._v(", "),s("code",[t._v("ddd")]),t._v(", "),s("code",[t._v("valgrind")]),t._v(", "),s("code",[t._v("callgrind")]),t._v(". 자세한 내용은 "),s("RouterLink",{attrs:{to:"/ko/debug/simulation_debugging.html"}},[t._v("시뮬레이션 디버깅")]),t._v("을 참고하십시오.")],1),t._v(" "),s("li",[s("strong",[t._v("WORLD:")]),t._v(" (Gazebo 만). Set the world ("),s("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/tree/master/worlds",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot/Tools/simulation/gazebo/sitl_gazebo/worlds"),s("OutboundLink")],1),t._v(") that is loaded. Default is "),s("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/blob/master/worlds/empty.world",target:"_blank",rel:"noopener noreferrer"}},[t._v("empty.world"),s("OutboundLink")],1),t._v(". 자세한 내용은 "),s("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html#set_world"}},[t._v("전망대 > 특정 세계 로드")]),t._v("를 참고하십시오.")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can get a list of "),s("em",[t._v("all")]),t._v(" available "),s("code",[t._v("VIEWER_MODEL_DEBUGGER_WORLD")]),t._v(" options using the command below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl list_vmd_make_targets\n")])])]),s("p",[t._v("Notes:")]),t._v(" "),s("p",[t._v("Notes:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("CONFIGURATION_TARGET")]),t._v("과 "),s("code",[t._v("VIEWER_MODEL_DEBUGGER")]),t._v("에 있는 대부분의 값에는 기본값이 있으므로 선택사항입니다. 예를 들어, "),s("code",[t._v("gazebo")]),t._v("는 "),s("code",[t._v("gazebo_iris")]),t._v(" 또는 "),s("code",[t._v("gazebo_iris_none")]),t._v("과 같습니다.")]),t._v(" "),s("li",[t._v("두 개의 다른 설정 사이에 기본값을 지정하려는 경우에는, 세 개의 밑줄을 사용할 수 있습니다. 예를 들어, "),s("code",[t._v("gazebo___gdb")]),t._v("는 "),s("code",[t._v("gazebo_iris_gdb")]),t._v("와 동일합니다.")]),t._v(" "),s("li",[s("code",[t._v("VIEWER_MODEL_DEBUGGER")]),t._v("에 "),s("code",[t._v("없음")]),t._v(" 값을 사용하여 PX4를 시작하고 시뮬레이터를 실행할 수 있습니다. For example start PX4 using "),s("code",[t._v("make px4_sitl_default none")]),t._v(" and jMAVSim using "),s("code",[t._v("./Tools/simulation/jmavsim/jmavsim_run.sh -l")]),t._v(".")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("VENDOR_MODEL_VARIANT")]),t._v(" options map to particular "),s("em",[t._v("px4board")]),t._v(" configuration files in the PX4 source tree under the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards"),s("OutboundLink")],1),t._v(" directory. Specifically "),s("code",[t._v("VENDOR_MODEL_VARIANT")]),t._v(" maps to a configuration file "),s("strong",[t._v("boards/VENDOR/MODEL/VARIANT.px4board")]),t._v(" (e.g. "),s("code",[t._v("px4_fmu-v5_default")]),t._v(" corresponds to "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[t._v("boards/px4/fmu-v5/default.px4board"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[s("em",[t._v("PX4 펌웨어 버전")]),t._v("과 "),s("em",[t._v("사용자 정의 펌웨어 버전")]),t._v("은 MAVLink "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#AUTOPILOT_VERSION",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUTOPILOT_VERSION"),s("OutboundLink")],1),t._v(" 메시지를 사용하여 게시되고, "),s("em",[t._v("QGroundControl")]),t._v(" < 2>설정 > 요약"),t._v(" 기체 패널에서 출력됩니다.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("bloaty_compare_master")]),t._v(": "),s("a",{attrs:{href:""}},[t._v("Binary Size Profiling")])]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("h2",{attrs:{id:"펌웨어-버전과-git-태그"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-버전과-git-태그"}},[t._v("#")]),t._v(" 펌웨어 버전과 Git 태그")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("PX4 Firmware Version")]),t._v(" and "),s("em",[t._v("Custom Firmware Version")]),t._v(" are published using the MAVLink "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#AUTOPILOT_VERSION",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUTOPILOT_VERSION"),s("OutboundLink")],1),t._v(" message, and displayed in the "),s("em",[t._v("QGroundControl")]),t._v(" "),s("strong",[t._v("Setup > Summary")]),t._v(" airframe panel:")]),t._v(" "),s("p",[s("img",{attrs:{src:e(770),alt:"Firmware info"}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("다른 git 태그 형식을 사용하는 경우에는 버전 정보가 정확하게 표시되지 않을 수 있습니다. The git tag should be formatted as "),s("code",[t._v("<PX4-version>-<vendor-version>")]),t._v(" (e.g. the tag in the image above was set to "),s("code",[t._v("v1.8.1-2.22.1")]),t._v(").")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If you use a different git tag format, versions information may not be displayed properly.")])])])])])])}),[],!1,null,null,null);a.default=o.exports},388:function(t,a,e){t.exports=e.p+"assets/img/qgc_goto.f64994ed.jpg"},768:function(t,a,e){t.exports=e.p+"assets/img/console_jmavsim.d6326a19.png"},769:function(t,a,e){t.exports=e.p+"assets/img/jmavsim_first_takeoff.65799ab0.png"},770:function(t,a,e){t.exports=e.p+"assets/img/qgc_setup_summary_airframe_firmware.ec44e092.jpg"}}]);