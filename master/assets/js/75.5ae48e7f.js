(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{2178:function(e,t,s){"use strict";s.r(t);var _=s(19),i=Object(_.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"px4용-mcu-eclipse-j-link-디버깅"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#px4용-mcu-eclipse-j-link-디버깅"}},[e._v("#")]),e._v(" PX4용 MCU Eclipse/J-Link 디버깅")]),e._v(" "),_("p",[e._v("NuttX(예: Pixhawk 시리즈 보드)에서 실행되는 PX4를 디버그하기 위하여 "),_("em",[e._v("Segger Jlink 어댑터")]),e._v("와 함께 "),_("a",{attrs:{href:"https://gnu-mcu-eclipse.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MCU Eclipse"),_("OutboundLink")],1),e._v("를 설정하고 사용하는 방법을 설명합니다.")]),e._v(" "),_("h2",{attrs:{id:"필요한-하드웨어"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#필요한-하드웨어"}},[e._v("#")]),e._v(" 필요한 하드웨어")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/models/j-link-edu-mini/",target:"_blank",rel:"noopener noreferrer"}},[e._v("J-Link EDU Mini"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("Segger JLink를 Flight Controller "),_("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[e._v("SWD(JTAG) 하드웨어 디버깅 인터페이스")]),e._v("(디버그 포트) 연결용 어댑터입니다.")],1),e._v(" "),_("li",[e._v("Micro USB 케이블")])]),e._v(" "),_("h2",{attrs:{id:"설치"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[e._v("#")]),e._v(" 설치")]),e._v(" "),_("h3",{attrs:{id:"px4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#px4"}},[e._v("#")]),e._v(" PX4")]),e._v(" "),_("p",[e._v("일반 지침에 따라 PX4를 설정합니다.")]),e._v(" "),_("ul",[_("li",[e._v("플랫폼에 대한 "),_("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[e._v("PX4 개발자 환경/도구 체인 설정")]),e._v("(예: Linux의 경우 "),_("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html"}},[e._v("Ubuntu LTS/Debian Linux의 개발 환경")]),e._v(" 참조).")],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[e._v("PX4를 다운로드")]),e._v("하고, 선택적으로 명령줄에서 빌드합니다.")],1)]),e._v(" "),_("h3",{attrs:{id:"eclipse"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#eclipse"}},[e._v("#")]),e._v(" Eclipse")]),e._v(" "),_("p",[_("em",[e._v("Eclipse")]),e._v("를 설치하려면:")]),e._v(" "),_("ol",[_("li",[_("a",{attrs:{href:"https://github.com/gnu-mcu-eclipse/org.eclipse.epp.packages/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("C/C++ 개발자를 위한 Eclipse CDT"),_("OutboundLink")],1),e._v("(MCU GitHub)를 다운로드하십시오.")]),e._v(" "),_("li",[e._v("Eclipse 폴더의 압축을 풀고 적당한 폴더에 복사합니다(설치 스크립트를 실행할 필요가 없음).")]),e._v(" "),_("li",[_("em",[e._v("Eclipse")]),e._v("를 실행하고, 초기 워크벤치의 위치를 선택하십시오.")])]),e._v(" "),_("h3",{attrs:{id:"segger-jlink-도구"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#segger-jlink-도구"}},[e._v("#")]),e._v(" Segger Jlink 도구")]),e._v(" "),_("p",[_("em",[e._v("Segger Jlink")]),e._v(" 도구를 설치하려면:")]),e._v(" "),_("ol",[_("li",[_("a",{attrs:{href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack",target:"_blank",rel:"noopener noreferrer"}},[e._v("J-Link Software and Documentation Pack"),_("OutboundLink")],1),e._v("을 운영체제에 해당(윈도우와 리눅스용이 있음)하는 버전으로 다운로드하고 설치하십시오.\n"),_("ul",[_("li",[e._v("Linux에서 "),_("strong",[e._v("/usr/bin")]),e._v("에 설치됩니다.")])])])]),e._v(" "),_("p",[e._v("자세한 내용은 "),_("a",{attrs:{href:"https://gnu-mcu-eclipse.github.io/debug/jlink/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gnu-mcu-eclipse.github.io/debug/jlink/install/"),_("OutboundLink")],1),e._v("을 참고하십시오.")]),e._v(" "),_("h2",{attrs:{id:"첫-사용"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#첫-사용"}},[e._v("#")]),e._v(" 첫 사용")]),e._v(" "),_("ol",[_("li",[_("em",[e._v("Segger JLink")]),e._v("를 어댑터를 통하여 호스트 컴퓨터와 "),_("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[e._v("비행 컨트롤러 디버그 포트")]),e._v("에 연결합니다.")],1),e._v(" "),_("li",[e._v("비행 콘트롤러에 전원을 공급합니다.")]),e._v(" "),_("li",[_("em",[e._v("Eclipse")]),e._v("를 실행합니다.")]),e._v(" "),_("li",[_("strong",[e._v("파일 > 가져오기 C/C++ > 기존 코드를 Makefile 프로젝트")]),e._v("로 만들고 "),_("strong",[e._v("다음")]),e._v("을 클릭합니다.")]),e._v(" "),_("li",[_("strong",[e._v("PX4-Autopilot")]),e._v(" 폴더를 가리키고 이름을 지정한 다음 "),_("em",[e._v("인덱서 설정용 도구 모음")]),e._v("에서 "),_("em",[e._v("ARM Cross GCC")]),e._v("를 선택하고 <0 >마침"),e._v("을 클릭합니다. 가져오기는 시간이 걸리며, 완료될 때까지 기다립니다.")]),e._v(" "),_("li",[e._v("MCU 설정: 프로젝트 탐색기에서 최상위 프로젝트를 마우스 오른쪽 버튼으로 클릭하고 "),_("em",[e._v("속성")]),e._v("을 선택한 다음 MCU에서 "),_("em",[e._v("SEGGER J-Link 경로")]),e._v("를 선택합니다. 아래 스크린샷과 같이 설정합니다. "),_("img",{attrs:{src:s(669),alt:"Eclipse: Segger J-Link 경로"}})]),e._v(" "),_("li",[e._v("패키지를 업데이트합니다.\n"),_("ul",[_("li",[e._v("우상단의 "),_("em",[e._v("Open Perspective")]),e._v("라는 작은 아이콘을 클릭하고, "),_("em",[e._v("Packs")]),e._v(" Perspective를 엽니다. "),_("img",{attrs:{src:s(670),alt:"Eclipse: Workspace"}})]),e._v(" "),_("li",[_("strong",[e._v("모두 업데이트")]),e._v(" 버튼을 클릭합니다.")])])])]),e._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),_("p",[e._v("이것은 10분정도의 시간이 소요됩니다. 누락된 패키지에 대한 오류를 무시하십시오.")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v(" ![Eclipse: Workspace Packs Perspective](../../assets/debug/eclipse_packs_perspective.jpg)\n")])])]),_("ul",[_("li",[e._v("STM32Fxx 장치는 Keil 폴더에 있습니다. 마우스 오른쪽 버튼을 클릭한 다음, F4 및 F7에 해당하는 장치에서 "),_("strong",[e._v("설치")]),e._v("를 선택하여 설치합니다.")])]),e._v(" "),_("ol",[_("li",[_("p",[e._v("대상에 대한 디버깅 설정을 진행하십시오:")]),e._v(" "),_("ul",[_("li",[e._v("프로젝트를 마우스 오른쪽 버튼으로 클릭하고, "),_("em",[e._v("설정")]),e._v("을 엽니다(메뉴: "),_("strong",[e._v("C/C++ 빌드 > 설정")]),e._v(").")]),e._v(" "),_("li",[_("em",[e._v("기기")]),e._v(" 탭, "),_("em",[e._v("기기")]),e._v(" 섹션("),_("em",[e._v("보드")]),e._v(" 아님)을 선택합니다.")]),e._v(" "),_("li",[e._v("디버그하려는 FMU 칩을 찾으십시오.")])]),e._v(" "),_("p",[_("img",{attrs:{src:s(671),alt:"Eclipse: 설정에서 FMU 선택"}})])]),e._v(" "),_("li",[_("p",[e._v("버그 기호 옆에 있는 작은 드롭다운으로 디버그 설정을 선택합니다."),_("img",{attrs:{src:s(672),alt:"Eclipse: 디버깅 설정"}})])]),e._v(" "),_("li",[_("p",[e._v("그런 다음, "),_("em",[e._v("GDB SEGGER J-Link 디버깅")]),e._v("을 선택한 다음, 왼쪽 상단의 "),_("strong",[e._v("새 구성")]),e._v(" 버튼을 선택합니다. "),_("img",{attrs:{src:s(673),alt:"Eclipse: GDB Segger 디버깅 설정"}})])]),e._v(" "),_("li",[_("p",[e._v("빌드 구성을 설정합니다.")]),e._v(" "),_("ul",[_("li",[e._v("이름을 지정하고 "),_("em",[e._v("C/C++ 애플리케이션")]),e._v("을 해당 "),_("strong",[e._v(".elf")]),e._v(" 파일로 설정합니다.")]),e._v(" "),_("li",[_("em",[e._v("자동 빌드 비활성화")]),e._v(" 선택합니다. :::note 디버그 세션을 시작하기 전에, 명령줄에서 대상을 빌드하여야 합니다.\n:::")])]),e._v(" "),_("p",[_("img",{attrs:{src:s(674),alt:"Eclipse: GDB Segger 디버깅 설정"}})])]),e._v(" "),_("li",[_("p",[_("em",[e._v("디버거")]),e._v(" 및 "),_("em",[e._v("시작")]),e._v(" 탭은 수정할 필요가 없습니다(아래 스크린샷으로 설정을 확인하기만 하면 됩니다).")]),e._v(" "),_("p",[_("img",{attrs:{src:s(675),alt:"Eclipse: GDB Segger 디버깅 설정: 디버거 탭"}}),e._v(" "),_("img",{attrs:{src:s(676),alt:"Eclipse: GDB Segger 디버깅 설정: 시작 탭"}})])])]),e._v(" "),_("h2",{attrs:{id:"문제-해결"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[e._v("#")]),e._v(" 문제 해결")]),e._v(" "),_("h3",{attrs:{id:"패키지-관리자에-없는-대상-cpu"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#패키지-관리자에-없는-대상-cpu"}},[e._v("#")]),e._v(" 패키지 관리자에 없는 대상 CPU")]),e._v(" "),_("p",[e._v("대상 CPU가 패키지 관리자에 표시되지 않으면, 레지스터 보기가 작동하도록 하려면 다음 단계가 필요할 수 있습니다.")]),e._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),_("p",[e._v("이것은 일반적으로 발생하지 않아야 합니다(그러나 STM F7 컨트롤러에 연결할 때 일화적으로 보고되었습니다).")])]),e._v(" "),_("p",[_("em",[e._v("Peripheral View")]),e._v("에 대해 누락된 SVD 파일 추가:")]),e._v(" "),_("ol",[_("li",[e._v("MCU Eclipse가 패키지를 저장하는 위치를 찾으십시오("),_("strong",[e._v("환경 설정 > C/C++ > MCU 패키지")]),e._v("). "),_("img",{attrs:{src:s(677),alt:"Eclipse: MCU 패키지"}})]),e._v(" "),_("li",[e._v("http://www.keil.com/dd2/Pack/ 에서 누락된 패키지를 다운로드하십시오")]),e._v(" "),_("li",[e._v("압축 해제 도구로 다운로드한 팩을 열고 "),_("strong",[e._v("/CMSIS/SVD")]),e._v("에서 "),_("strong",[e._v(".SVD")]),e._v(" 파일의 압축을 풉니다.")]),e._v(" "),_("li",[_("strong",[e._v("디버그 옵션 > GDB SEGGER JLink 디버깅 > SVD 경로")]),e._v("에서 원하는 "),_("strong",[e._v(".SVD")]),e._v(" 파일을 선택하십시오. "),_("img",{attrs:{src:s(678),alt:"Eclipse: SVD 파일 경로"}})])])])}),[],!1,null,null,null);t.default=i.exports},669:function(e,t,s){e.exports=s.p+"assets/img/eclipse_segger_jlink_path.09c8eef4.png"},670:function(e,t,s){e.exports=s.p+"assets/img/eclipse_workspace_perspective.e8bd6eae.png"},671:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_devices_fmu.cd75cdfe.png"},672:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config.4853df65.png"},673:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger.e6fe84a1.png"},674:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config.b343658b.png"},675:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config_debugger_tab.6ddac573.png"},676:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config_startup_tab.71cc438b.png"},677:function(e,t,s){e.exports=s.p+"assets/img/eclipse_mcu_packages.9083361d.png"},678:function(e,t,s){e.exports=s.p+"assets/img/eclipse_svd_file_path.7cfeb5ca.png"}}]);