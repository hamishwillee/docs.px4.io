(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{2810:function(t,e,o){"use strict";o.r(e);var s=o(19),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"비주얼-스튜디오-코드-ide-vscode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비주얼-스튜디오-코드-ide-vscode"}},[t._v("#")]),t._v(" 비주얼 스튜디오 코드 IDE(VSCode)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code"),s("OutboundLink")],1),t._v("는 Ubuntu 18.04 LT, macOS 및 Windows에서 PX4 개발에 사용할 수 있는 강력한 플랫폼 간 소스 코드 편집기/IDE입니다.")]),t._v(" "),s("p",[t._v("PX4 개발에 VSCode를 사용하는 데에는 많은 이유가 있습니다.")]),t._v(" "),s("ul",[s("li",[t._v("Getting setup "),s("em",[t._v("really")]),t._v(" only takes a few minutes.")]),t._v(" "),s("li",[t._v("A rich extension ecosystem that enables a huge range of tools needed for PX4 development: C/C++ (with solid "),s("em",[t._v("cmake")]),t._v(" integration), "),s("em",[t._v("Python")]),t._v(", "),s("em",[t._v("Jinja2")]),t._v(", ROS messages, and even UAVCAN dsdl.")]),t._v(" "),s("li",[t._v("뛰어난 Github 통합 기능")])]),t._v(" "),s("p",[t._v("IDE를 설정과 개발 방법에 대하여 설명합니다.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("다른 강력한 IDE가 있지만, 일반적으로 PX4와 통합에는 많은 어려움이 있습니다. With "),s("em",[t._v("VScode")]),t._v(", configuration is stored in the PX4/PX4-Autopilot tree ("),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/.vscode",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot/.vscode"),s("OutboundLink")],1),t._v(") so the setup process is as simple as adding the project folder.")])]),t._v(" "),s("h2",{attrs:{id:"선행-조건"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#선행-조건"}},[t._v("#")]),t._v(" 선행 조건")]),t._v(" "),s("p",[t._v("You must already have installed the command line "),s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("PX4 developer environment")]),t._v(" for your platform and downloaded the "),s("em",[t._v("Firmware")]),t._v(" source code repo.")],1),t._v(" "),s("h2",{attrs:{id:"설치-및-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설치-및-설정"}},[t._v("#")]),t._v(" 설치 및 설정")]),t._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode 다운로드 및 설치"),s("OutboundLink")],1),t._v("(사용자의 OS에 맞는 버전이 제공됨).")])]),t._v(" "),s("li",[s("p",[t._v("Open VSCode and add the PX4 source code:")]),t._v(" "),s("ul",[s("li",[t._v("Select "),s("em",[t._v("Open folder ...")]),t._v(" option on the welcome page (or using the menu: "),s("strong",[t._v("File > Open Folder")]),t._v("): "),s("img",{attrs:{src:o(762),alt:"Open Folder"}})]),t._v(" "),s("li",[t._v("A file selection dialog will appear. Select the "),s("strong",[t._v("PX4-Autopilot")]),t._v(" directory and then press "),s("strong",[t._v("OK")]),t._v(".")])]),t._v(" "),s("p",[t._v("The project files and configuration will then load into "),s("em",[t._v("VSCode")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Press "),s("strong",[t._v("Install All")]),t._v(" on the "),s("em",[t._v("This workspace has extension recommendations")]),t._v(" prompt (this will appear on the bottom right of the IDE). "),s("img",{attrs:{src:o(763),alt:"확장 기능 설치"}})]),t._v(" "),s("p",[t._v("VSCode will open the "),s("em",[t._v("Extensions")]),t._v(" panel on the left hand side so you can watch the progress of installation.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(764),alt:"VSCode 탐색기에 로드된 PX4"}})])]),t._v(" "),s("li",[s("p",[t._v("오른쪽 하단에 여러 알림/프롬프트가 나타날 수 있습니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")])])])]),t._v(" "),s("p",[t._v('메시지가 사라지면, 하단 파란색 막대 오른쪽에 있는 작은 "알람" 아이콘을 클릭합니다.\n:::')]),t._v(" "),s("ul",[s("li",[t._v("If prompted to install a new version of "),s("em",[t._v("cmake")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("아니요")]),t._v("라고 말합니다("),s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("PX4 개발자 환경")]),t._v("과 함께 올바른 버전이 설치됨).")],1)])]),t._v(" "),s("li",[t._v("If prompted to sign into "),s("em",[t._v("github.com")]),t._v(" and add your credentials:\n"),s("ul",[s("li",[t._v("이것은 당신에게 달려 있습니다! Github와 IDE 간의 긴밀한 통합을 제공하여 워크플로를 단순화할 수 있습니다.")])])]),t._v(" "),s("li",[t._v("다른 프롬프트는 선택 사항이며 유용하다고 생각되면 설치할 수 있습니다. ")])]),t._v(" "),s("p",[s("a",{attrs:{id:"building"}})]),t._v(" "),s("h2",{attrs:{id:"px4-빌드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-빌드"}},[t._v("#")]),t._v(" PX4 빌드")]),t._v(" "),s("p",[t._v("빌드를 진행하려면:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v('Select your build target ("cmake build config"):')]),t._v(" "),s("ul",[s("li",[t._v("The current "),s("em",[t._v("cmake build target")]),t._v(" is shown on the blue "),s("em",[t._v("config")]),t._v(" bar at the bottom (if this is already your desired target, skip to next step). "),s("img",{attrs:{src:o(765),alt:"Select Cmake build target"}})])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The cmake target you select affects the targets offered for when "),s("a",{attrs:{href:"#debugging"}},[t._v("building/debugging")]),t._v(" (i.e. for hardware debugging you must select a hardware target like "),s("code",[t._v("px4_fmu-v5")]),t._v(").")])]),t._v(" "),s("ul",[s("li",[t._v("Click the target on the config bar to display other options, and select the one you want (this will replace any selected target).")]),t._v(" "),s("li",[s("em",[t._v("Cmake")]),t._v(" will then configure your project (see notification in bottom right). "),s("img",{attrs:{src:o(766),alt:"Cmake config project"}})]),t._v(" "),s("li",[t._v("Wait until configuration completes. When this is done the notification will disappear and you'll be shown the build location: "),s("img",{attrs:{src:o(767),alt:"Cmake config project"}}),t._v(".")])]),t._v(" "),s("ol",[s("li",[t._v("그런 다음 구성 표시줄에서 빌드를 시작할 수 있습니다("),s("strong",[t._v("빌드")]),t._v(" 또는 "),s("strong",[t._v("디버그")]),t._v(" 선택). "),s("img",{attrs:{src:o(768),alt:"디버깅 또는 빌드 실행"}})])]),t._v(" "),s("p",[t._v("After building at least once you can now use [code completion](#code completion) and other "),s("em",[t._v("VSCode")]),t._v(" features.")]),t._v(" "),s("h2",{attrs:{id:"디버깅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#디버깅"}},[t._v("#")]),t._v(" 디버깅")]),t._v(" "),s("p",[s("a",{attrs:{id:"debugging_sitl"}})]),t._v(" "),s("h3",{attrs:{id:"sitl-디버깅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitl-디버깅"}},[t._v("#")]),t._v(" SITL 디버깅")]),t._v(" "),s("p",[t._v("SITL에서 PX4를 디버깅하려면:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("사이드바에서 디버그 아이콘(빨간색으로 표시)을 선택하여 디버그 패널을 표시합니다."),s("img",{attrs:{src:o(769),alt:"디버깅 실행"}})])]),t._v(" "),s("li",[s("p",[t._v("Then choose your debug target (e.g. "),s("em",[t._v("Debug SITL (Gazebo Iris)")]),t._v(") from the top bar debug dropdown (purple box).")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),s("p",[t._v("제공되는 디버그 대상(보라색 상자)은 빌드 대상(하단 막대의 노란색 상자)과 일치합니다.\n예를 들어, SITL 대상을 디버그하려면 빌드 대상에 SITL이 포함되어야 합니다.\n:::")]),t._v(" "),s("ol",[s("li",[t._v('디버그 "재생" 화살표(상단 막대의 디버그 대상 옆 - 분홍색 상자)를 클릭하여 디버깅을 시작합니다.')])]),t._v(" "),s("p",[t._v("디버깅하는 동안 중단점을 설정하고, 코드를 건너뛰고, 그렇지 않으면 정상적으로 개발할 수 있습니다.")]),t._v(" "),s("h3",{attrs:{id:"하드웨어-디버깅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-디버깅"}},[t._v("#")]),t._v(" 하드웨어 디버깅")]),t._v(" "),s("p",[t._v("The instructions in "),s("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[t._v("SWD Debug Port")]),t._v(" explain how to connect to the SWD interface on common flight controllers (for example, using the Dronecode or Blackmagic probes).")],1),t._v(" "),s("p",[t._v("SWD 인터페이스에 연결한 후 VSCode의 하드웨어 디버깅은 디버거 유형(및 펌웨어)(예: "),s("code",[t._v("jlink (px4_fmu-v5)")]),t._v(")에 적합한 디버그 대상을 선택한다는 점을 제외하고 "),s("a",{attrs:{href:"#debugging_sitl"}},[t._v("SITL 디버깅")]),t._v("과 동일합니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("jlink")]),t._v(" 옵션을 보려면 "),s("a",{attrs:{href:"#building-px4"}},[t._v("펌웨어 빌드를 위한 cmake 대상")]),t._v("을 선택하여야 합니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:o(770),alt:"다양한 프로브에 대한 옵션이 있는 하드웨어 대상을 보여주는 이미지"}})]),t._v(" "),s("p",[s("a",{attrs:{id:"code completion"}})]),t._v(" "),s("h2",{attrs:{id:"코드-완성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#코드-완성"}},[t._v("#")]),t._v(" 코드 완성")]),t._v(" "),s("p",[t._v("코드 완성(및 기타 IntelliSense 마법)이 작동하려면 활성화 설정후, "),s("a",{attrs:{href:"#building"}},[t._v("코드를 빌드")]),t._v("하여야 합니다.")]),t._v(" "),s("p",[t._v("이 작업이 완료되면 다른 작업을 수행할 필요가 없습니다. 툴체인은 입력시 자동으로 기호를 제공합니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(771),alt:"인텔리센스"}})]),t._v(" "),s("h2",{attrs:{id:"문제-해결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),s("p",[t._v("이 섹션에는 설정 및 빌드 오류에 대한 지침이 포함되어 있습니다.")]),t._v(" "),s("h3",{attrs:{id:"ubuntu-18-04-visual-studio-code는-이-큰-작업-영역에서-파일-변경-사항을-감시할-수-없습니다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-visual-studio-code는-이-큰-작업-영역에서-파일-변경-사항을-감시할-수-없습니다"}},[t._v("#")]),t._v(' Ubuntu 18.04: "Visual Studio Code는 이 큰 작업 영역에서 파일 변경 사항을 감시할 수 없습니다."')]),t._v(" "),s("p",[t._v("이 오류는 시작시에 나타납니다. 일부 시스템에서는 애플리케이션에 적용되는 파일 핸들의 상한선이 8192개이므로 VSCode가 "),s("code",[t._v("/PX4-Autopilot")]),t._v("에서 파일 수정 사항을 감지하지 못할 수 있습니다.")]),t._v(" "),s("p",[t._v("메모리 소비를 희생시키면서 오류를 방지하기 위해 이 제한을 늘릴 수 있습니다. "),s("a",{attrs:{href:"https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기에 있는 지침"),s("OutboundLink")],1),t._v("을 따르십시오. 값 65536이면 충분합니다.")])])}),[],!1,null,null,null);e.default=a.exports},762:function(t,e,o){t.exports=o.p+"assets/img/welcome_open_folder.9a802170.jpg"},763:function(t,e,o){t.exports=o.p+"assets/img/prompt_install_extensions.9753d279.jpg"},764:function(t,e,o){t.exports=o.p+"assets/img/installing_extensions.eed4125c.jpg"},765:function(t,e,o){t.exports=o.p+"assets/img/cmake_build_config.d852f27e.jpg"},766:function(t,e,o){t.exports=o.p+"assets/img/cmake_configuring_project.9c4cbc76.jpg"},767:function(t,e,o){t.exports=o.p+"assets/img/cmake_configuring_project_done.0a8cfeb8.jpg"},768:function(t,e,o){t.exports=o.p+"assets/img/run_debug_build.a8c094ef.jpg"},769:function(t,e,o){t.exports=o.p+"assets/img/vscode_debug.a6879667.jpg"},770:function(t,e,o){t.exports=o.p+"assets/img/vscode_hardware_debugging_options.fa486ed9.png"},771:function(t,e,o){t.exports=o.p+"assets/img/vscode_intellisense.f717906d.jpg"}}]);