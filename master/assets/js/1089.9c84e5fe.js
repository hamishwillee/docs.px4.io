(window.webpackJsonp=window.webpackJsonp||[]).push([[1089],{2257:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"stm32-부트로더"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stm32-부트로더"}},[t._v("#")]),t._v(" STM32 부트로더")]),t._v(" "),s("p",[t._v("PX4 부트로더 코드는 깃허브 "),s("a",{attrs:{href:"https://github.com/px4/bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootloader"),s("OutboundLink")],1),t._v(" 저장소에 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"지원-보드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#지원-보드"}},[t._v("#")]),t._v(" 지원 보드")]),t._v(" "),s("ul",[s("li",[t._v("FMUv2 (픽스호크 1, STM32F4)")]),t._v(" "),s("li",[t._v("FMUv3 (픽스호크 2, STM32F4)")]),t._v(" "),s("li",[t._v("FMUv4 (픽스레이서 3와 픽스호크 3 프로, STM32F4)")]),t._v(" "),s("li",[t._v("FMUv5 (픽스호크 4, STM32F7)")]),t._v(" "),s("li",[t._v("TAPv1 (TBA, STM32F4)")]),t._v(" "),s("li",[t._v("ASCv1 (TBA, STM32F4)")])]),t._v(" "),s("h2",{attrs:{id:"부트로더-빌드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-빌드"}},[t._v("#")]),t._v(" 부트로더 빌드")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/Bootloader.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Bootloader\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),s("p",[t._v("위 과정을 거치면 Bootloader 디렉터리에서 지원하는 모든 보드의 elf파일을 만듭니다.")]),t._v(" "),s("h2",{attrs:{id:"부트로더-플래싱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-플래싱"}},[t._v("#")]),t._v(" 부트로더 플래싱")]),t._v(" "),s("p",[t._v("다음 절차는 블랙매직 / 드론코드 프로브에 해당합니다. 기타 JTAG 프루브는 다르지만 비슷한 과정을 밟습니다. 부트로더를 플래싱하는 개발자는 필요한 지식을 숙지해야 합니다.")]),t._v(" "),s("p",[t._v("The instructions below are valid for a Blackmagic / Dronecode probe. Other JTAG probes will need different but similar steps. Developers attempting to flash the bootloader should have the required knowledge. If you do not know how to do this you probably should reconsider if you really need to change anything about the bootloader.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.segger.com/jlink-gdb-server.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("J-Link GDB 서버"),s("OutboundLink")],1),t._v(" 관련 절차입니다.")]),t._v(" "),s("ol",[s("li",[t._v("JTAG 케이블 연결 제거")]),t._v(" "),s("li",[t._v("USB 전원 케이블 연결")]),t._v(" "),s("li",[t._v("JTAG 케이블 연결")])]),t._v(" "),s("h3",{attrs:{id:"블랙-매직-드론코드-프로브"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#블랙-매직-드론코드-프로브"}},[t._v("#")]),t._v(" 블랙 매직 / 드론코드 프로브")]),t._v(" "),s("h4",{attrs:{id:"올바른-시리얼-포트-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#올바른-시리얼-포트-사용"}},[t._v("#")]),t._v(" 올바른 시리얼 포트 사용")]),t._v(" "),s("ul",[s("li",[t._v("LINUX: "),s("code",[t._v("/dev/serial/by-id/usb-Black_Sphere_XXX-if00")])]),t._v(" "),s("li",[t._v("MAC OS: tty.xxx 포트가 아닌 cu.xxx 포트를 사용하는지 확인하십시오: "),s("code",[t._v("tar ext /dev/tty.usbmodemDDEasdf")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("arm-none-eabi-gdb\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" ext /dev/serial/by-id/usb-Black_Sphere_XXX-if00\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon swdp_scan\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" attach "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon option erase\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon erase_mass\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" load tapv1_bl.elf\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n        Transfer rate: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" KB/sec, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("828")]),t._v(" bytes/write.\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v("\n")])])]),s("h3",{attrs:{id:"j-link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#j-link"}},[t._v("#")]),t._v(" J-Link")]),t._v(" "),s("p",[t._v("Segger 웹사이트의 "),s("a",{attrs:{href:"https://www.segger.com/downloads/jlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download the J-Link software"),s("OutboundLink")],1),t._v("의 안내사항을 따라 다운로드 및 설치를 수행하십시오.")]),t._v(" "),s("h4",{attrs:{id:"준비-요건"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#준비-요건"}},[t._v("#")]),t._v(" 준비 요건")]),t._v(" "),s("p",[t._v("다음 명령어는 STM32F427VI SoC 기반의 비행 제어 장치용 서버를 실행합니다:")]),t._v(" "),s("h4",{attrs:{id:"jlink-gdb-서버-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jlink-gdb-서버-실행"}},[t._v("#")]),t._v(" JLink GDB 서버 실행")]),t._v(" "),s("p",[t._v("일반 대ㅇ의 "),s("code",[t._v("--device")]),t._v("/SoC 옵션은 다음과 같습니다:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("JLinkGDBServer -select "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USB")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -device STM32F427VI -if SWD-DP -speed "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("--device")]),t._v("/SoC for common targets is:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("FMUv2, FMUv3, FMUv4, aerofc-v1, mindpx-v2:")]),t._v(" STM32F427VI")]),t._v(" "),s("li",[s("strong",[t._v("px4_fmu-v4pro:")]),t._v(" STM32F469II")]),t._v(" "),s("li",[s("strong",[t._v("px4_fmu-v5:")]),t._v(" STM32F765II")]),t._v(" "),s("li",[s("strong",[t._v("crazyflie:")]),t._v(" STM32F405RG")])]),t._v(" "),s("h4",{attrs:{id:"gdb-연결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gdb-연결"}},[t._v("#")]),t._v(" GDB 연결")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("arm-none-eabi-gdb\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" ext :2331\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" load aerofcv1_bl.elf\n")])])]),s("h3",{attrs:{id:"문제-해결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),s("p",[t._v("If any of the commands above are not found, you are either not using a Blackmagic probe or its software is outdated. Upgrade the on-probe software first.")]),t._v(" "),s("p",[t._v("타겟의 연결을 끊고(JTAG 연결은 유지한 채로) 다음 명령을 실행하십시오:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Error erasing flash with vFlashErase packet\n")])])]),s("p",[t._v("이 절차는 타겟의 전원을 끊고 플래싱 과정을 다시 시도합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mon tpwr disable\nswdp_scan\nattach "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nload tapv1_bl.elf\n")])])]),s("p",[t._v("This will disable target powering and attempt another flash cycle.")])])}),[],!1,null,null,null);a.default=r.exports}}]);