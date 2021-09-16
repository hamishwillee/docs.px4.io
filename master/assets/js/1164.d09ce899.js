(window.webpackJsonp=window.webpackJsonp||[]).push([[1164],{2188:function(a,e,t){"use strict";t.r(e);var s=t(19),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"swd-gdb-하드웨어-디버깅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swd-gdb-하드웨어-디버깅"}},[a._v("#")]),a._v(" SWD GDB 하드웨어 디버깅")]),a._v(" "),t("p",[a._v("터미널에서 GDB를 사용하여 하드웨어 대상을 연결하는 방법을 설명합니다. IDE를 사용하려면 "),t("RouterLink",{attrs:{to:"/ko/debug/eclipse_jlink.html"}},[a._v("Eclipse")]),a._v(" 또는 "),t("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html#hardware-debugging"}},[a._v("VSCode")]),a._v(" 사용법을 참고하십시오.")],1),a._v(" "),t("p",[a._v("인터페이스 배선에 대해서는 "),t("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[a._v("이 세부 정보")]),a._v("를 참조하십시오.")],1),a._v(" "),t("h2",{attrs:{id:"dronecode-프로브-blackmagic-프로브-사용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-프로브-blackmagic-프로브-사용"}},[a._v("#")]),a._v(" Dronecode 프로브 / Blackmagic 프로브 사용")]),a._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[a._v("STM32F7 이상(FMUv5 이상)을 디버그하려면, Dronecode 프로브/Blackmagic 프로브에 펌웨어 업데이트해야 할 수 있습니다. [blackmagic probe를 업데이트하는 방법은 여기](https://github.com/blacksphere/blackmagic/wiki/Upgrading-Firmware)를 참고하십시오.")])]),a._v(" "),t("p",[a._v("GDB와 함께 Dronecode 프로브를 사용하려면, 현재 자동조종장치에서 플래싱된 정확한 ELF 파일로 GDB를 시작하십시오.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("arm-none-eabi-gdb build/px4_fmu-v5_default/px4_fmu-v5_default.elf\n")])])]),t("p",[a._v("그런 다음, Dronecode 프로브 인터페이스를 선택하여야 합니다. Linux에서는 다음과 같습니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("target ext /dev/serial/by-id/usb-Black_Sphere_Technologies_Black_Magic_Probe_f9414d5_7DB85DAC-if00\n")])])]),t("p",[a._v("그런 다음 대상을 스캔합니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("monitor swdp_scan\n")])])]),t("p",[a._v("다음과 같은 내용이 표시되어야 합니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("Target voltage: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(".3V\nAvailable Targets:\nNo. Att Driver\n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("      STM32F76x M7\n")])])]),t("p",[a._v("일부 자동조종장치는 0.0V를 표시하지만, 후속 단계는 그럼에도 불구하고 작동합니다.")]),a._v(" "),t("p",[a._v("이제 해당 대상에 연결할 수 있습니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("attach 1\n")])])]),t("p",[a._v("이제 연결되어야 합니다.")]),a._v(" "),t("h2",{attrs:{id:"jlink-사용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jlink-사용"}},[a._v("#")]),a._v(" JLink 사용")]),a._v(" "),t("p",[a._v("JLink 디버거를 사용하려면, 먼저 JLink GDB 서버가 포함된 "),t("a",{attrs:{href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack",target:"_blank",rel:"noopener noreferrer"}},[a._v("JLink 소프트웨어를 설치"),t("OutboundLink")],1),a._v("합니다.")]),a._v(" "),t("p",[a._v("JLink 설치 프로그램은 JLink GDB 서버를 "),t("code",[a._v("/usr/bin/")]),a._v("에 설치합니다. 설치가 완료되면, 다음을 사용하여 서버를 시작합니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("JLinkGDBServer -if swd\n")])])]),t("p",[a._v("그런 다음, 권장되는 JLink를 업데이트하고, 통신 중인 장치를 지정하라는 메시지가 표시될 수 있습니다. 특정 장치에 대한 자동조종장치의 문서를 확인하십시오.")]),a._v(" "),t("p",[a._v("완료되면 다음과 같이 GDB 서버는 포트 "),t("code",[a._v("2331")]),a._v("에서 수신 대기를 시작합니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("Checking target voltage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nTarget voltage: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.28")]),a._v(" V\nListening on TCP/IP port "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2331")]),a._v("\nConnecting to target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nConnected to target\nWaiting "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" GDB connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),t("p",[a._v("이제 자동조종장치(별도의 터미널에서)에서 현재 플래시된 정확한 elf 파일로 GDB를 시작할 수 있습니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("arm-none-eabi-gdb build/px4_fmu-v5_default/px4_fmu-v5_default.elf\n")])])]),t("p",[a._v("그리고, GDB 서버에 연결합니다:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("target remote :2331\n")])])]),t("p",[a._v("이제 연결되어야 합니다.")]),a._v(" "),t("h2",{attrs:{id:"gdb-빠른-시작"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gdb-빠른-시작"}},[a._v("#")]),a._v(" GDB 빠른 시작")]),a._v(" "),t("p",[a._v("연결되면, 다음과 같은 일반적인 GDB 명령을 사용할 수 있습니다.")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("continue")]),a._v(" : 프로그램 실행을 계속 실행")]),a._v(" "),t("li",[t("code",[a._v("run")]),a._v(" : 처음부터 시작")]),a._v(" "),t("li",[t("code",[a._v("backtrace")]),a._v(" : 역추적을 조회")]),a._v(" "),t("li",[t("code",[a._v("break somewhere.cpp:123")]),a._v(" : 중단점 설정")]),a._v(" "),t("li",[t("code",[a._v("delete somewhere.cpp:123")]),a._v(" 중단점 삭제")]),a._v(" "),t("li",[t("code",[a._v("info locals")]),a._v(" : 지역 변수 조회")]),a._v(" "),t("li",[t("code",[a._v("info registers")]),a._v(" : 리지스터 출력")])]),a._v(" "),t("p",[a._v("그리고, 좋은 툴을 사용하여 GDB에 대하여 더 공부하십시오.")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("매번 GDB에 연결하기 위하여, 모든 명령을 입력해야 하는 것을 피하기 위하여 "),t("code",[a._v("~/.gdbinit")]),a._v("에 작성할 수 있습니다.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);