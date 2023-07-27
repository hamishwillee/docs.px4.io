(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{2595:function(t,s,_){"use strict";_.r(s);var v=_(19),e=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"비주얼-스튜디오-코드-ide-vscode"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#비주얼-스튜디오-코드-ide-vscode"}},[t._v("#")]),t._v(" 비주얼 스튜디오 코드 IDE(VSCode)")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code"),v("OutboundLink")],1),t._v("는 Ubuntu 18.04 LT, macOS 및 Windows에서 PX4 개발에 사용할 수 있는 강력한 플랫폼 간 소스 코드 편집기/IDE입니다.")]),t._v(" "),v("p",[t._v("PX4 개발에 VSCode를 사용하는 데에는 많은 이유가 있습니다.")]),t._v(" "),v("ul",[v("li",[t._v("설치 시간은 "),v("em",[t._v("실제")]),t._v(" 몇 분 밖에 걸리지 않습니다.")]),t._v(" "),v("li",[t._v("PX4 개발에 필요한 여러가지 도구를 지원하는 다양한 확장 시스템: C/C++(견고한 "),v("em",[t._v("cmake")]),t._v(" 통합 포함), "),v("em",[t._v("Python")]),t._v(", "),v("em",[t._v("Jinja2")]),t._v(" , ROS 메시지, 심지어 UAVCAN dsdl.")]),t._v(" "),v("li",[t._v("뛰어난 Github 통합 기능")])]),t._v(" "),v("p",[t._v("IDE를 설정과 개발 방법에 대하여 설명합니다.")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("다른 강력한 IDE가 있지만, 일반적으로 PX4와 통합에는 많은 어려움이 있습니다.")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("다른 강력한 IDE가 있지만, 일반적으로 PX4와 통합에는 많은 어려움이 있습니다.")])])]),t._v(" "),v("h2",{attrs:{id:"선행-조건"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#선행-조건"}},[t._v("#")]),t._v(" 선행 조건")]),t._v(" "),v("p",[t._v("플랫폼에 대한 명령줄 "),v("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("PX4 개발자 환경")]),t._v("을 이미 설치하고, "),v("em",[t._v("펌웨어")]),t._v(" 소스 코드 저장소를 복제하여야 합니다.")],1),t._v(" "),v("h2",{attrs:{id:"설치-및-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#설치-및-설정"}},[t._v("#")]),t._v(" 설치 및 설정")]),t._v(" "),v("ol",[v("li",[v("p",[v("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode 다운로드 및 설치"),v("OutboundLink")],1),t._v("(사용자의 OS에 맞는 버전이 제공됨).")])]),t._v(" "),v("li",[v("p",[t._v("VSCode를 열고 PX4 소스 코드를 추가합니다.")]),t._v(" "),v("ul",[v("li",[t._v("시작 페이지에서 *폴더 열기 ...*를 클릭합니다(또는 메뉴: "),v("strong",[t._v("파일 > 폴더 열기")]),t._v(" 사용): "),v("img",{attrs:{src:_(720),alt:"폴더 열기"}})]),t._v(" "),v("li",[t._v("파일 선택창이 나타납니다. "),v("strong",[t._v("PX4-Autopilot")]),t._v(" 디렉토리를 선택하고, "),v("strong",[t._v("확인")]),t._v("을 누릅니다.")])]),t._v(" "),v("p",[t._v("그러면 프로젝트 파일과 설정이 "),v("em",[t._v("VSCode")]),t._v("에 로드됩니다.")])]),t._v(" "),v("li",[v("p",[v("em",[t._v("이 작업 공간에는 확장 권장 사항이 있습니다")]),t._v(" 프롬프트에서 "),v("strong",[t._v("모두 설치")]),t._v("를 누릅니다(IDE의 오른쪽 하단에 표시됨). "),v("img",{attrs:{src:_(721),alt:"확장 기능 설치"}})]),t._v(" "),v("p",[t._v("VSCode는 설치 진행 상황을 볼 수 있도록 왼쪽에 "),v("em",[t._v("확장 프로그램")]),t._v(" 패널을 엽니다.")]),t._v(" "),v("p",[v("img",{attrs:{src:_(722),alt:"VSCode 탐색기에 로드된 PX4"}})])]),t._v(" "),v("li",[v("p",[t._v("오른쪽 하단에 여러 알림/프롬프트가 나타날 수 있습니다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")])])])]),t._v(" "),v("p",[t._v('메시지가 사라지면, 하단 파란색 막대 오른쪽에 있는 작은 "알람" 아이콘을 클릭합니다.\n:::')]),t._v(" "),v("ul",[v("li",[t._v("새 버전의 "),v("em",[t._v("cmake")]),t._v("를 설치하라는 메시지가 표시되면:\n"),v("ul",[v("li",[v("strong",[t._v("아니요")]),t._v("라고 말합니다("),v("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("PX4 개발자 환경")]),t._v("과 함께 올바른 버전이 설치됨).")],1)])]),t._v(" "),v("li",[v("em",[t._v("github.com")]),t._v("에 로그인하고 자격 증명을 추가하라는 메시지가 표시되면:\n"),v("ul",[v("li",[t._v("이것은 당신에게 달려 있습니다! Github와 IDE 간의 긴밀한 통합을 제공하여 워크플로를 단순화할 수 있습니다.")])])]),t._v(" "),v("li",[t._v("다른 프롬프트는 선택 사항이며 유용하다고 생각되면 설치할 수 있습니다. ")])]),t._v(" "),v("p",[v("a",{attrs:{id:"building"}})]),t._v(" "),v("h2",{attrs:{id:"px4-빌드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-빌드"}},[t._v("#")]),t._v(" PX4 빌드")]),t._v(" "),v("p",[t._v("빌드를 진행하려면:")]),t._v(" "),v("ol",[v("li",[t._v('빌드 대상 선택("cmake build config"):\n'),v("ul",[v("li",[t._v("현재 "),v("em",[t._v("cmake 빌드 대상")]),t._v("은 하단의 파란색 "),v("em",[t._v("구성")]),t._v(" 표시줄에 표시됩니다(이미 원하는 대상인 경우 다음 단계로 건너뛰십시오). "),v("img",{attrs:{src:_(723),alt:"Cmake 빌드 대상 선택"}})])])])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("선택한 cmake 대상은 "),v("a",{attrs:{href:"#debugging"}},[t._v("빌드/디버깅")]),t._v("시 제공되는 대상에 영향을 줍니다(즉, 하드웨어 디버깅의 경우 "),v("code",[t._v("px4_fmu-v5")]),t._v("와 같은 하드웨어 대상을 선택하여야 함).")])]),t._v(" "),v("ul",[v("li",[t._v("구성 표시줄에서 대상을 클릭하여 다른 옵션을 표시하고 원하는 옵션을 선택합니다(선택한 대상을 대체함).")]),t._v(" "),v("li",[t._v("그러면, "),v("em",[t._v("Cmake")]),t._v("가 프로젝트를 구성합니다(오른쪽 하단의 알림 참조). "),v("img",{attrs:{src:_(724),alt:"Cmake 설정 프로젝트"}})]),t._v(" "),v("li",[t._v("구성이 완료될 때까지 기다리십시오. 이 작업이 완료되면 알림이 사라지고 빌드 위치가 표시됩니다.")])]),t._v(" "),v("ol",[v("li",[t._v("그런 다음 구성 표시줄에서 빌드를 시작할 수 있습니다("),v("strong",[t._v("빌드")]),t._v(" 또는 "),v("strong",[t._v("디버그")]),t._v(" 선택). "),v("img",{attrs:{src:_(725),alt:"디버깅 또는 빌드 실행"}})])]),t._v(" "),v("p",[t._v("한 번 이상 빌드하면 이제 [코드 완성](#코드 완성) 및 기타 "),v("em",[t._v("VSCode")]),t._v(" 기능을 사용할 수 있습니다.")]),t._v(" "),v("h2",{attrs:{id:"디버깅"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#디버깅"}},[t._v("#")]),t._v(" 디버깅")]),t._v(" "),v("p",[v("a",{attrs:{id:"debugging_sitl"}})]),t._v(" "),v("h3",{attrs:{id:"sitl-디버깅"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sitl-디버깅"}},[t._v("#")]),t._v(" SITL 디버깅")]),t._v(" "),v("p",[t._v("SITL에서 PX4를 디버깅하려면:")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("사이드바에서 디버그 아이콘(빨간색으로 표시)을 선택하여 디버그 패널을 표시합니다."),v("img",{attrs:{src:_(726),alt:"디버깅 실행"}})])]),t._v(" "),v("li",[v("p",[t._v("그런 다음 상단 표시줄 디버그 드롭다운(보라색 상자)에서 디버그 대상(예: "),v("em",[t._v("디버그 SITL(Gazebo Iris)")]),t._v(")을 선택합니다.")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),v("p",[t._v("제공되는 디버그 대상(보라색 상자)은 빌드 대상(하단 막대의 노란색 상자)과 일치합니다.\n예를 들어, SITL 대상을 디버그하려면 빌드 대상에 SITL이 포함되어야 합니다.\n:::")]),t._v(" "),v("ol",[v("li",[t._v('디버그 "재생" 화살표(상단 막대의 디버그 대상 옆 - 분홍색 상자)를 클릭하여 디버깅을 시작합니다.')])]),t._v(" "),v("p",[t._v("디버깅하는 동안 중단점을 설정하고, 코드를 건너뛰고, 그렇지 않으면 정상적으로 개발할 수 있습니다.")]),t._v(" "),v("h3",{attrs:{id:"하드웨어-디버깅"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-디버깅"}},[t._v("#")]),t._v(" 하드웨어 디버깅")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[t._v("SWD(JTAG) 하드웨어 디버깅 인터페이스")]),t._v("의 지침은 일반적인 비행 콘트롤러(예: Dronecode 또는 Blackmagic 프로브 사용)에서 SWD 인터페이스에 연결하는 방법을 설명합니다.")],1),t._v(" "),v("p",[t._v("SWD 인터페이스에 연결한 후 VSCode의 하드웨어 디버깅은 디버거 유형(및 펌웨어)(예: "),v("code",[t._v("jlink (px4_fmu-v5)")]),t._v(")에 적합한 디버그 대상을 선택한다는 점을 제외하고 "),v("a",{attrs:{href:"#debugging_sitl"}},[t._v("SITL 디버깅")]),t._v("과 동일합니다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[v("code",[t._v("jlink")]),t._v(" 옵션을 보려면 "),v("a",{attrs:{href:"#building-px4"}},[t._v("펌웨어 빌드를 위한 cmake 대상")]),t._v("을 선택하여야 합니다.")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(727),alt:"다양한 프로브에 대한 옵션이 있는 하드웨어 대상을 보여주는 이미지"}})]),t._v(" "),v("p",[v("a",{attrs:{id:"code completion"}})]),t._v(" "),v("h2",{attrs:{id:"코드-완성"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#코드-완성"}},[t._v("#")]),t._v(" 코드 완성")]),t._v(" "),v("p",[t._v("코드 완성(및 기타 IntelliSense 마법)이 작동하려면 활성화 설정후, "),v("a",{attrs:{href:"#building"}},[t._v("코드를 빌드")]),t._v("하여야 합니다.")]),t._v(" "),v("p",[t._v("이 작업이 완료되면 다른 작업을 수행할 필요가 없습니다. 툴체인은 입력시 자동으로 기호를 제공합니다.")]),t._v(" "),v("p",[v("img",{attrs:{src:_(728),alt:"인텔리센스"}})]),t._v(" "),v("h2",{attrs:{id:"문제-해결"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),v("p",[t._v("이 섹션에는 설정 및 빌드 오류에 대한 지침이 포함되어 있습니다.")]),t._v(" "),v("h3",{attrs:{id:"ubuntu-18-04-visual-studio-code는-이-큰-작업-영역에서-파일-변경-사항을-감시할-수-없습니다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-visual-studio-code는-이-큰-작업-영역에서-파일-변경-사항을-감시할-수-없습니다"}},[t._v("#")]),t._v(' Ubuntu 18.04: "Visual Studio Code는 이 큰 작업 영역에서 파일 변경 사항을 감시할 수 없습니다."')]),t._v(" "),v("p",[t._v("이 오류는 시작시에 나타납니다. 일부 시스템에서는 애플리케이션에 적용되는 파일 핸들의 상한선이 8192개이므로 VSCode가 "),v("code",[t._v("/PX4-Autopilot")]),t._v("에서 파일 수정 사항을 감지하지 못할 수 있습니다.")]),t._v(" "),v("p",[t._v("메모리 소비를 희생시키면서 오류를 방지하기 위해 이 제한을 늘릴 수 있습니다. "),v("a",{attrs:{href:"https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기에 있는 지침"),v("OutboundLink")],1),t._v("을 따르십시오. 값 65536이면 충분합니다.")])])}),[],!1,null,null,null);s.default=e.exports},720:function(t,s,_){t.exports=_.p+"assets/img/welcome_open_folder.9a802170.jpg"},721:function(t,s,_){t.exports=_.p+"assets/img/prompt_install_extensions.9753d279.jpg"},722:function(t,s,_){t.exports=_.p+"assets/img/installing_extensions.eed4125c.jpg"},723:function(t,s,_){t.exports=_.p+"assets/img/cmake_build_config.d852f27e.jpg"},724:function(t,s,_){t.exports=_.p+"assets/img/cmake_configuring_project.9c4cbc76.jpg"},725:function(t,s,_){t.exports=_.p+"assets/img/run_debug_build.a8c094ef.jpg"},726:function(t,s,_){t.exports=_.p+"assets/img/vscode_debug.a6879667.jpg"},727:function(t,s,_){t.exports=_.p+"assets/img/vscode_hardware_debugging_options.fa486ed9.png"},728:function(t,s,_){t.exports=_.p+"assets/img/vscode_intellisense.f717906d.jpg"}}]);