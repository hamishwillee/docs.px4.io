(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{2550:function(e,t,s){"use strict";s.r(t);var i=s(19),_=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"px4용-mcu-eclipse-j-link-디버깅"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#px4용-mcu-eclipse-j-link-디버깅"}},[e._v("#")]),e._v(" PX4용 MCU Eclipse/J-Link 디버깅")]),e._v(" "),i("p",[e._v("NuttX(예: Pixhawk 시리즈 보드)에서 실행되는 PX4를 디버그하기 위하여 "),i("em",[e._v("Segger Jlink 어댑터")]),e._v("와 함께 "),i("a",{attrs:{href:"https://gnu-mcu-eclipse.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MCU Eclipse"),i("OutboundLink")],1),e._v("를 설정하고 사용하는 방법을 설명합니다.")]),e._v(" "),i("h2",{attrs:{id:"필요한-하드웨어"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#필요한-하드웨어"}},[e._v("#")]),e._v(" 필요한 하드웨어")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/models/j-link-edu-mini/",target:"_blank",rel:"noopener noreferrer"}},[e._v("J-Link EDU Mini"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("Segger JLink를 Flight Controller "),i("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[e._v("SWD(JTAG) 하드웨어 디버깅 인터페이스")]),e._v("(디버그 포트) 연결용 어댑터입니다.")],1),e._v(" "),i("li",[e._v("Micro USB 케이블")])]),e._v(" "),i("h2",{attrs:{id:"설치"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[e._v("#")]),e._v(" 설치")]),e._v(" "),i("h3",{attrs:{id:"px4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#px4"}},[e._v("#")]),e._v(" PX4")]),e._v(" "),i("p",[e._v("일반 지침에 따라 PX4를 설정합니다.")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[e._v("Setup the PX4 Developer Environment/Toolchain")]),e._v(" for your platform (e.g. for Linux see: "),i("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html"}},[e._v("Development Environment on Ubuntu LTS / Debian Linux")]),e._v(").")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[e._v("PX4를 다운로드")]),e._v("하고, 선택적으로 명령줄에서 빌드합니다.")],1)]),e._v(" "),i("h3",{attrs:{id:"eclipse"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#eclipse"}},[e._v("#")]),e._v(" Eclipse")]),e._v(" "),i("p",[i("em",[e._v("Eclipse")]),e._v("를 설치하려면:")]),e._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"https://github.com/gnu-mcu-eclipse/org.eclipse.epp.packages/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("C/C++ 개발자를 위한 Eclipse CDT"),i("OutboundLink")],1),e._v("(MCU GitHub)를 다운로드하십시오.")]),e._v(" "),i("li",[e._v("Eclipse 폴더의 압축을 풀고 적당한 폴더에 복사합니다(설치 스크립트를 실행할 필요가 없음).")]),e._v(" "),i("li",[i("em",[e._v("Eclipse")]),e._v("를 실행하고, 초기 워크벤치의 위치를 선택하십시오.")])]),e._v(" "),i("h3",{attrs:{id:"segger-jlink-도구"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#segger-jlink-도구"}},[e._v("#")]),e._v(" Segger Jlink 도구")]),e._v(" "),i("p",[i("em",[e._v("Segger Jlink")]),e._v(" 도구를 설치하려면:")]),e._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack",target:"_blank",rel:"noopener noreferrer"}},[e._v("J-Link Software and Documentation Pack"),i("OutboundLink")],1),e._v("을 운영체제에 해당(윈도우와 리눅스용이 있음)하는 버전으로 다운로드하고 설치하십시오.\n"),i("ul",[i("li",[e._v("Linux에서 "),i("strong",[e._v("/usr/bin")]),e._v("에 설치됩니다.")])])])]),e._v(" "),i("p",[e._v("자세한 내용은 "),i("a",{attrs:{href:"https://gnu-mcu-eclipse.github.io/debug/jlink/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gnu-mcu-eclipse.github.io/debug/jlink/install/"),i("OutboundLink")],1),e._v("을 참고하십시오.")]),e._v(" "),i("h2",{attrs:{id:"첫-사용"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#첫-사용"}},[e._v("#")]),e._v(" 첫 사용")]),e._v(" "),i("ol",[i("li",[i("em",[e._v("Segger JLink")]),e._v("를 어댑터를 통하여 호스트 컴퓨터와 "),i("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[e._v("비행 컨트롤러 디버그 포트")]),e._v("에 연결합니다.")],1),e._v(" "),i("li",[e._v("비행 콘트롤러에 전원을 공급합니다.")]),e._v(" "),i("li",[i("em",[e._v("Eclipse")]),e._v("를 실행합니다.")]),e._v(" "),i("li",[i("strong",[e._v("파일 > 가져오기 C/C++ > 기존 코드를 Makefile 프로젝트")]),e._v("로 만들고 "),i("strong",[e._v("다음")]),e._v("을 클릭합니다.")]),e._v(" "),i("li",[i("strong",[e._v("PX4-Autopilot")]),e._v(" 폴더를 가리키고 이름을 지정한 다음 "),i("em",[e._v("인덱서 설정용 도구 모음")]),e._v("에서 "),i("em",[e._v("ARM Cross GCC")]),e._v("를 선택하고 <0 >마침"),e._v("을 클릭합니다. 가져오기는 시간이 걸리며, 완료될 때까지 기다립니다.")]),e._v(" "),i("li",[e._v("MCU 설정: 프로젝트 탐색기에서 최상위 프로젝트를 마우스 오른쪽 버튼으로 클릭하고 "),i("em",[e._v("속성")]),e._v("을 선택한 다음 MCU에서 "),i("em",[e._v("SEGGER J-Link 경로")]),e._v("를 선택합니다. 아래 스크린샷과 같이 설정합니다. "),i("img",{attrs:{src:s(717),alt:"Eclipse: Segger J-Link 경로"}})]),e._v(" "),i("li",[e._v("패키지를 업데이트합니다.\n"),i("ul",[i("li",[i("p",[e._v("우상단의 "),i("em",[e._v("Open Perspective")]),e._v("라는 작은 아이콘을 클릭하고, "),i("em",[e._v("Packs")]),e._v(" Perspective를 엽니다. "),i("img",{attrs:{src:s(718),alt:"Eclipse: Workspace"}})])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("모두 업데이트")]),e._v(" 버튼을 클릭합니다.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")])])])])])]),e._v(" "),i("p",[e._v("이것은 10분정도의 시간이 소요됩니다.\n누락된 패키지에 대한 오류를 무시하십시오.\n:::")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v(" ![Eclipse: Workspace Packs Perspective](../../assets/debug/eclipse_packs_perspective.jpg)\n")])])]),i("ul",[i("li",[e._v("STM32Fxx 장치는 Keil 폴더에 있습니다. 마우스 오른쪽 버튼을 클릭한 다음, F4 및 F7에 해당하는 장치에서 "),i("strong",[e._v("설치")]),e._v("를 선택하여 설치합니다.")])]),e._v(" "),i("ol",[i("li",[i("p",[e._v("대상에 대한 디버깅 설정을 진행하십시오:")]),e._v(" "),i("ul",[i("li",[e._v("프로젝트를 마우스 오른쪽 버튼으로 클릭하고, "),i("em",[e._v("설정")]),e._v("을 엽니다(메뉴: "),i("strong",[e._v("C/C++ 빌드 > 설정")]),e._v(").")]),e._v(" "),i("li",[i("em",[e._v("기기")]),e._v(" 탭, "),i("em",[e._v("기기")]),e._v(" 섹션("),i("em",[e._v("보드")]),e._v(" 아님)을 선택합니다.")]),e._v(" "),i("li",[e._v("디버그하려는 FMU 칩을 찾으십시오.")])]),e._v(" "),i("p",[i("img",{attrs:{src:s(719),alt:"Eclipse: 설정에서 FMU 선택"}})])]),e._v(" "),i("li",[i("p",[e._v("버그 기호 옆에 있는 작은 드롭다운으로 디버그 설정을 선택합니다."),i("img",{attrs:{src:s(720),alt:"Eclipse: 디버깅 설정"}})])]),e._v(" "),i("li",[i("p",[e._v("그런 다음, "),i("em",[e._v("GDB SEGGER J-Link 디버깅")]),e._v("을 선택한 다음, 왼쪽 상단의 "),i("strong",[e._v("새 구성")]),e._v(" 버튼을 선택합니다. "),i("img",{attrs:{src:s(721),alt:"Eclipse: GDB Segger 디버깅 설정"}})])]),e._v(" "),i("li",[i("p",[e._v("빌드 구성을 설정합니다.")]),e._v(" "),i("ul",[i("li",[e._v("이름을 지정하고 "),i("em",[e._v("C/C++ 애플리케이션")]),e._v("을 해당 "),i("strong",[e._v(".elf")]),e._v(" 파일로 설정합니다.")]),e._v(" "),i("li",[i("em",[e._v("자동 빌드 비활성화")]),e._v(" 선택합니다. :::note\n디버그 세션을 시작하기 전에, 명령줄에서 대상을 빌드하여야 합니다.\n:::")])]),e._v(" "),i("p",[i("img",{attrs:{src:s(722),alt:"Eclipse: GDB Segger 디버깅 설정"}})])]),e._v(" "),i("li",[i("p",[i("em",[e._v("디버거")]),e._v(" 및 "),i("em",[e._v("시작")]),e._v(" 탭은 수정할 필요가 없습니다(아래 스크린샷으로 설정을 확인하기만 하면 됩니다).")]),e._v(" "),i("p",[i("img",{attrs:{src:s(723),alt:"Eclipse: GDB Segger 디버깅 설정: 디버거 탭"}}),e._v(" "),i("img",{attrs:{src:s(724),alt:"Eclipse: GDB Segger 디버깅 설정: 시작 탭"}})])])]),e._v(" "),i("h2",{attrs:{id:"segger-task-aware-debugging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#segger-task-aware-debugging"}},[e._v("#")]),e._v(" SEGGER Task-aware debugging")]),e._v(" "),i("p",[e._v("Task-aware debugging (also known as "),i("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/tools/j-link-gdb-server/thread-aware-debugging/",target:"_blank",rel:"noopener noreferrer"}},[e._v("thread-aware debugging"),i("OutboundLink")],1),e._v(") allows you to show the context of all running threads/tasks instead of just the stack current task. This is quite useful since PX4 tends to run many different tasks.")]),e._v(" "),i("p",[e._v("To enable this feature for use in Eclipse:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("You first need to enable "),i("code",[e._v("CONFIG_DEBUG_TCBINFO")]),e._v(" in the NuttX configuration for your build (to expose the TCB offsets).")]),e._v(" "),i("ul",[i("li",[e._v("Open a terminal in the root of your PX4-Autopilot source code")]),e._v(" "),i("li",[e._v("In the terminal, open "),i("code",[e._v("menuconfig")]),e._v(" using the appropriate make target for the build. This will be something like:"),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("make px4_fmu-v5_default boardguiconfig\n")])])]),e._v("(See "),i("RouterLink",{attrs:{to:"/ko/hardware/porting_guide_config.html#px4-menuconfig-setup"}},[e._v("PX4 Menuconfig Setup")]),e._v(" for more information) on using the config tools).")],1),e._v(" "),i("li",[e._v("Ensure that the "),i("em",[e._v("Enable TCBinfo struct for debug")]),e._v(" is selected as shown: "),i("img",{attrs:{src:s(725),alt:"NuttX: Menuconfig: CONFIG_DEBUG_TCBINFO"}})])])]),e._v(" "),i("li",[i("p",[e._v("Compile the "),i("strong",[e._v("jlink-nuttx.so")]),e._v(" library in the terminal by running the following command in the terminal: "),i("code",[e._v("make jlink-nuttx")])])]),e._v(" "),i("li",[i("p",[e._v("Modify Eclipse to use this libary. In the "),i("em",[e._v("J-Link GDB Server Setup")]),e._v(" configuration, update "),i("strong",[e._v("Other options")]),e._v(" to include "),i("code",[e._v("-rtos /home/<PX4 path>/Tools/jlink-nuttx.so")]),e._v(", as shown in the image below.")]),e._v(" "),i("p",[i("img",{attrs:{src:s(726),alt:"Eclipse: GDB Segger Debug config RTOS aware: debugger tab"}})])]),e._v(" "),i("li",[i("p",[e._v("When running the debugger you should see now multiple threads instead of just one:")]),e._v(" "),i("p",[i("img",{attrs:{src:s(727),alt:"Eclipse: GDB Segger Debug config RTOS aware: debug session"}})])])]),e._v(" "),i("h2",{attrs:{id:"문제-해결"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[e._v("#")]),e._v(" 문제 해결")]),e._v(" "),i("h3",{attrs:{id:"패키지-관리자에-없는-대상-cpu"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#패키지-관리자에-없는-대상-cpu"}},[e._v("#")]),e._v(" 패키지 관리자에 없는 대상 CPU")]),e._v(" "),i("p",[e._v("대상 CPU가 패키지 관리자에 표시되지 않으면, 레지스터 보기가 작동하도록 하려면 다음 단계가 필요할 수 있습니다.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("이것은 일반적으로 발생하지 않아야 합니다(그러나 STM F7 컨트롤러에 연결할 때 일화적으로 보고되었습니다).")])]),e._v(" "),i("p",[i("em",[e._v("Peripheral View")]),e._v("에 대해 누락된 SVD 파일 추가:")]),e._v(" "),i("ol",[i("li",[e._v("MCU Eclipse가 패키지를 저장하는 위치를 찾으십시오("),i("strong",[e._v("환경 설정 > C/C++ > MCU 패키지")]),e._v("). "),i("img",{attrs:{src:s(728),alt:"Eclipse: MCU 패키지"}})]),e._v(" "),i("li",[e._v("http://www.keil.com/dd2/Pack/ 에서 누락된 패키지를 다운로드하십시오")]),e._v(" "),i("li",[e._v("압축 해제 도구로 다운로드한 팩을 열고 "),i("strong",[e._v("/CMSIS/SVD")]),e._v("에서 "),i("strong",[e._v(".SVD")]),e._v(" 파일의 압축을 풉니다.")]),e._v(" "),i("li",[i("strong",[e._v("디버그 옵션 > GDB SEGGER JLink 디버깅 > SVD 경로")]),e._v("에서 원하는 "),i("strong",[e._v(".SVD")]),e._v(" 파일을 선택하십시오. "),i("img",{attrs:{src:s(729),alt:"Eclipse: SVD 파일 경로"}})])])])}),[],!1,null,null,null);t.default=_.exports},717:function(e,t,s){e.exports=s.p+"assets/img/eclipse_segger_jlink_path.09c8eef4.png"},718:function(e,t,s){e.exports=s.p+"assets/img/eclipse_workspace_perspective.e8bd6eae.png"},719:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_devices_fmu.cd75cdfe.png"},720:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config.4853df65.png"},721:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger.e6fe84a1.png"},722:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config.b343658b.png"},723:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config_debugger_tab.6ddac573.png"},724:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config_startup_tab.71cc438b.png"},725:function(e,t,s){e.exports=s.p+"assets/img/nuttx_tcb_task_aware.abd4ede2.png"},726:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_task_aware.c0dca36e.png"},727:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_task_aware_tasks.db7cb925.png"},728:function(e,t,s){e.exports=s.p+"assets/img/eclipse_mcu_packages.9083361d.png"},729:function(e,t,s){e.exports=s.p+"assets/img/eclipse_svd_file_path.7cfeb5ca.png"}}]);